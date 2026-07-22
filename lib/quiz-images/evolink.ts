import sharp from 'sharp';

const API_BASE = process.env.EVOLINK_API_BASE?.trim() || 'https://api.evolink.ai';
const IMAGE_MODEL = 'gpt-image-2';
const EVOLINK_RETRY_MAX = 12;
const EVOLINK_RETRY_BASE_MS = 1500;

export const QUIZ_IMAGE_DEFAULTS = {
  model: IMAGE_MODEL,
  size: '1:1' as const,
  resolution: '1K' as const,
  quality: 'low' as const,
  n: 1,
};

interface TaskDetail {
  status?: string;
  results?: unknown[];
  output?: unknown;
  error?: { message?: string } | string;
  id?: string;
  task_id?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function apiKey(): string {
  const key = process.env.EVOLINK_API_KEY?.trim();
  if (!key) throw new Error('EVOLINK_API_KEY 없음');
  return key;
}

export function hasEvoLinkApiKey(): boolean {
  return Boolean(process.env.EVOLINK_API_KEY?.trim());
}

function authHeaders(): HeadersInit {
  return {
    Authorization: `Bearer ${apiKey()}`,
    'Content-Type': 'application/json',
  };
}

async function readErrorMessage(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as Record<string, unknown>;
    const nestedErr = data?.error;
    if (nestedErr && typeof nestedErr === 'object' && 'message' in nestedErr) {
      const msg = (nestedErr as { message?: string }).message;
      if (msg) return `EvoLink API: ${msg}`;
    }
    for (const key of ['message', 'detail', 'error'] as const) {
      const val = data?.[key];
      if (typeof val === 'string' && val.trim()) return `EvoLink API: ${val}`;
    }
  } catch {
    /* ignore */
  }
  return `EvoLink API HTTP ${res.status}`;
}

export function isRetryableEvoLinkRateLimit(err: unknown, status?: number): boolean {
  if (status === 429 || status === 503 || status === 502) return true;
  const msg = (err instanceof Error ? err.message : String(err)).toLowerCase();
  return (
    msg.includes('429') ||
    msg.includes('rate limit') ||
    msg.includes('too many requests') ||
    msg.includes('temporarily unavailable') ||
    msg.includes('http 502') ||
    msg.includes('http 503')
  );
}

async function withEvoLinkRateLimitRetry<T>(fn: () => Promise<T>): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 0; attempt <= EVOLINK_RETRY_MAX; attempt += 1) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (!isRetryableEvoLinkRateLimit(err) || attempt >= EVOLINK_RETRY_MAX) {
        throw err instanceof Error ? err : new Error(String(err));
      }
      const delay = EVOLINK_RETRY_BASE_MS * 1.4 ** attempt + Math.random() * 800;
      await sleep(delay);
    }
  }
  throw lastErr instanceof Error ? lastErr : new Error(String(lastErr));
}

function extractTaskId(data: Record<string, unknown>): string {
  const direct = data.id ?? data.task_id;
  if (typeof direct === 'string' && direct.trim()) return direct.trim();
  const nested = data.data;
  if (nested && typeof nested === 'object') {
    const n = nested as Record<string, unknown>;
    const inner = n.id ?? n.task_id;
    if (typeof inner === 'string' && inner.trim()) return inner.trim();
  }
  throw new Error('EvoLink task_id 없음');
}

function pickUrl(value: unknown): string | null {
  if (typeof value === 'string' && /^https?:\/\//i.test(value)) return value;
  if (value && typeof value === 'object') {
    const o = value as Record<string, unknown>;
    for (const key of ['url', 'image_url', 'uri', 'download_url']) {
      const u = o[key];
      if (typeof u === 'string' && /^https?:\/\//i.test(u)) return u;
    }
  }
  return null;
}

function extractImageUrlFromTask(task: TaskDetail): string | null {
  if (Array.isArray(task.results)) {
    for (const item of task.results) {
      const url = pickUrl(item);
      if (url) return url;
    }
  }
  const fromOutput = pickUrl(task.output);
  if (fromOutput) return fromOutput;
  if (Array.isArray(task.output)) {
    for (const item of task.output) {
      const url = pickUrl(item);
      if (url) return url;
    }
  }
  return null;
}

function isTaskCompleted(status: string | undefined): boolean {
  return status === 'completed' || status === 'succeeded' || status === 'success';
}

function isTaskFailed(status: string | undefined): boolean {
  return status === 'failed' || status === 'error' || status === 'cancelled';
}

function taskErrorMessage(task: TaskDetail): string {
  if (typeof task.error === 'string') return task.error;
  return task.error?.message ?? 'EvoLink 이미지 생성 실패';
}

export async function getEvoLinkTask(taskId: string): Promise<TaskDetail> {
  const res = await fetch(`${API_BASE}/v1/tasks/${encodeURIComponent(taskId)}`, {
    headers: authHeaders(),
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) {
    const msg = await readErrorMessage(res);
    const err = new Error(msg);
    if (isRetryableEvoLinkRateLimit(err, res.status)) throw err;
    throw err;
  }
  return (await res.json()) as TaskDetail;
}

export async function createEvoLinkImageTask(prompt: string): Promise<string> {
  const body = {
    model: QUIZ_IMAGE_DEFAULTS.model,
    prompt,
    size: QUIZ_IMAGE_DEFAULTS.size,
    resolution: QUIZ_IMAGE_DEFAULTS.resolution,
    quality: QUIZ_IMAGE_DEFAULTS.quality,
    n: QUIZ_IMAGE_DEFAULTS.n,
  };

  return withEvoLinkRateLimitRetry(async () => {
    const res = await fetch(`${API_BASE}/v1/images/generations`, {
      method: 'POST',
      headers: authHeaders(),
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) {
      const msg = await readErrorMessage(res);
      const err = new Error(msg);
      if (isRetryableEvoLinkRateLimit(err, res.status)) throw err;
      throw err;
    }
    const data = (await res.json()) as Record<string, unknown>;
    return extractTaskId(data ?? {});
  });
}

export async function pollEvoLinkImageUrl(
  taskId: string,
  opts?: { maxWaitMs?: number; intervalMs?: number },
): Promise<string> {
  const maxWaitMs = opts?.maxWaitMs ?? 180_000;
  const intervalMs = opts?.intervalMs ?? 4000;
  const deadline = Date.now() + maxWaitMs;

  while (Date.now() < deadline) {
    const task = await withEvoLinkRateLimitRetry(() => getEvoLinkTask(taskId));
    const status = task.status;
    if (isTaskCompleted(status)) {
      const url = extractImageUrlFromTask(task);
      if (!url) throw new Error('EvoLink 완료 응답에 이미지 URL 없음');
      return url;
    }
    if (isTaskFailed(status)) {
      throw new Error(taskErrorMessage(task));
    }
    await sleep(intervalMs);
  }
  throw new Error('EvoLink 이미지 생성 시간 초과 (3분)');
}

export async function generateQuizImage(prompt: string): Promise<{ taskId: string; imageUrl: string }> {
  const taskId = await createEvoLinkImageTask(prompt);
  const imageUrl = await pollEvoLinkImageUrl(taskId);
  return { taskId, imageUrl };
}

export async function fetchImageBytes(url: string): Promise<Buffer> {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(60_000),
    redirect: 'follow',
  });
  if (!res.ok) {
    throw new Error(`이미지 다운로드 실패 HTTP ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 64) {
    throw new Error('이미지 응답이 비어 있습니다');
  }
  const ct = String(res.headers.get('content-type') ?? '').toLowerCase();
  if (ct.includes('json') || ct.includes('html') || ct.includes('text/')) {
    throw new Error('EvoLink URL에서 이미지가 아닌 응답을 받았습니다');
  }
  return buf;
}

function isPng(buf: Buffer): boolean {
  return buf.length >= 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
}

export async function fetchQuizImagePngBytes(url: string): Promise<Buffer> {
  const raw = await fetchImageBytes(url);
  if (isPng(raw)) return raw;
  try {
    const converted = await sharp(raw).png().toBuffer();
    if (!isPng(converted)) throw new Error('PNG 변환 결과 검증 실패');
    return converted;
  } catch {
    throw new Error('이미지를 PNG로 변환하지 못했습니다');
  }
}

export async function fetchQuizImagesForZip(
  items: Array<{ url: string; filename: string }>,
): Promise<{ name: string; data: Buffer }[]> {
  const results = await Promise.all(
    items.map(async (item) => {
      if (!item.url || !item.filename) return null;
      const data = await fetchQuizImagePngBytes(item.url);
      return { name: item.filename.replace(/\.(webp|jpe?g)$/i, '.png'), data };
    }),
  );
  return results.filter((f): f is { name: string; data: Buffer } => f != null);
}

export function createStoredZip(files: { name: string; data: Buffer }[]): Buffer {
  const localParts: Buffer[] = [];
  const centralParts: Buffer[] = [];
  let offset = 0;

  for (const file of files) {
    const nameBuf = Buffer.from(file.name, 'utf8');
    const data = file.data;
    const localHeader = Buffer.alloc(30 + nameBuf.length);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4);
    localHeader.writeUInt16LE(0, 6);
    localHeader.writeUInt16LE(0, 8);
    localHeader.writeUInt16LE(0, 10);
    localHeader.writeUInt16LE(0, 12);
    localHeader.writeUInt32LE(crc32(data), 14);
    localHeader.writeUInt32LE(data.length, 18);
    localHeader.writeUInt32LE(data.length, 22);
    localHeader.writeUInt16LE(nameBuf.length, 26);
    localHeader.writeUInt16LE(0, 28);
    nameBuf.copy(localHeader, 30);

    localParts.push(localHeader, data);

    const central = Buffer.alloc(46 + nameBuf.length);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(0, 14);
    central.writeUInt32LE(crc32(data), 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(0, 38);
    central.writeUInt32LE(offset, 42);
    nameBuf.copy(central, 46);
    centralParts.push(central);

    offset += localHeader.length + data.length;
  }

  const centralSize = centralParts.reduce((n, b) => n + b.length, 0);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(files.length, 8);
  eocd.writeUInt16LE(files.length, 10);
  eocd.writeUInt32LE(centralSize, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...localParts, ...centralParts, eocd]);
}

const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i += 1) {
    let c = i;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(buf: Buffer): number {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) {
    crc = CRC_TABLE[(crc ^ buf[i]!) & 0xff]! ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}
