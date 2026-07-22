'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  normalizeQuizImagePrefix,
  parseQuizImagePrompts,
  type QuizImageParseResult,
} from '@/lib/quiz-images/prompt';

type GenStatus = 'idle' | 'pending' | 'generating' | 'done' | 'error';

interface GenRow {
  key: string;
  questionNumber: number;
  choiceId: string | null;
  prompt: string;
  filename: string;
  isFaceQuestion: boolean;
  choiceCount: number;
  status: GenStatus;
  imageUrl?: string;
  error?: string;
}

interface SavedRowResult {
  status: GenStatus;
  imageUrl?: string;
  error?: string;
}

interface QuizImageGenDraft {
  v: 1;
  prefix: string;
  raw: string;
  results: Record<string, SavedRowResult>;
  savedAt: string;
}

const DRAFT_STORAGE_KEY = 'qo_quiz_image_gen_draft';
const SETTINGS_CHIPS = ['GPT Image 2', '1:1', '1K', 'Low', '×1', '전체 병렬'];

function getAdminToken(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('adminToken') || '';
}

function adminHeaders(json = true): HeadersInit {
  const h: Record<string, string> = {
    Authorization: `Bearer ${getAdminToken()}`,
  };
  if (json) h['Content-Type'] = 'application/json';
  return h;
}

async function readApiError(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as { error?: string };
    if (data.error) return data.error;
  } catch {
    /* ignore */
  }
  return `HTTP ${res.status}`;
}

function triggerFileDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function rowKey(item: { questionNumber: number; choiceId: string | null; filename: string }) {
  return `${item.questionNumber}-${item.choiceId ?? 'face'}-${item.filename}`;
}

function loadQuizImageDraft(): QuizImageGenDraft | null {
  if (typeof window === 'undefined') return null;
  try {
    const text = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!text) return null;
    const data = JSON.parse(text) as QuizImageGenDraft;
    if (data?.v !== 1) return null;
    return {
      v: 1,
      prefix: String(data.prefix ?? ''),
      raw: String(data.raw ?? ''),
      results: data.results && typeof data.results === 'object' ? data.results : {},
      savedAt: String(data.savedAt ?? ''),
    };
  } catch {
    return null;
  }
}

let cachedDraft: QuizImageGenDraft | null | undefined;
function getCachedQuizImageDraft(): QuizImageGenDraft | null {
  if (cachedDraft !== undefined) return cachedDraft;
  cachedDraft = loadQuizImageDraft();
  return cachedDraft;
}

function normalizePersistedStatus(status: GenStatus): GenStatus {
  if (status === 'generating' || status === 'pending') return 'idle';
  return status;
}

function mergeGenRows(
  parsed: QuizImageParseResult,
  prev: GenRow[],
  draftResults: Record<string, SavedRowResult> | null,
): GenRow[] {
  const prevByKey = new Map(prev.map((r) => [r.key, r]));
  return parsed.items.map((item) => {
    const key = rowKey(item);
    const prevRow = prevByKey.get(key);
    const draftRow = draftResults?.[key];
    const status = normalizePersistedStatus(prevRow?.status ?? draftRow?.status ?? 'idle');
    return {
      key,
      questionNumber: item.questionNumber,
      choiceId: item.choiceId,
      prompt: item.prompt,
      filename: item.filename,
      isFaceQuestion: item.isFaceQuestion,
      choiceCount: item.choiceCount,
      status,
      imageUrl: prevRow?.imageUrl ?? draftRow?.imageUrl,
      error: prevRow?.error ?? draftRow?.error,
    };
  });
}

function buildInitialParseState(): { parsed: QuizImageParseResult | null; rows: GenRow[] } {
  const draft = getCachedQuizImageDraft();
  if (!draft?.prefix.trim() || !draft.raw.trim()) return { parsed: null, rows: [] };
  const normalized = normalizeQuizImagePrefix(draft.prefix);
  if (!normalized) return { parsed: null, rows: [] };
  const parsed = parseQuizImagePrompts(draft.raw, normalized);
  return { parsed, rows: mergeGenRows(parsed, [], draft.results) };
}

let initialParseState: { parsed: QuizImageParseResult | null; rows: GenRow[] } | undefined;
function getInitialParseState() {
  if (!initialParseState) initialParseState = buildInitialParseState();
  return initialParseState;
}

function useQuizImagePreview(imageUrl: string | undefined) {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      setSrc(null);
      setLoading(false);
      return;
    }
    let revoked = false;
    let objectUrl: string | null = null;
    setLoading(true);
    setSrc(null);

    void fetch('/api/admin/quiz-images/preview', {
      method: 'POST',
      headers: adminHeaders(),
      body: JSON.stringify({ url: imageUrl }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await readApiError(res));
        return res.blob();
      })
      .then((blob) => {
        objectUrl = URL.createObjectURL(blob);
        if (!revoked) {
          setSrc(objectUrl);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!revoked) {
          setSrc(imageUrl);
          setLoading(false);
        }
      });

    return () => {
      revoked = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [imageUrl]);

  return { src, loading };
}

function PreviewThumb({ imageUrl, filename, onOpen }: { imageUrl?: string; filename: string; onOpen: () => void }) {
  const { src, loading } = useQuizImagePreview(imageUrl);
  if (!imageUrl) {
    return <div className="w-20 h-20 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-[10px] text-gray-400">대기</div>;
  }
  return (
    <button type="button" onClick={onOpen} className="relative w-20 h-20 rounded border border-gray-200 overflow-hidden bg-gray-50 hover:ring-2 hover:ring-blue-400">
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-500 bg-white/70">…</span>
      )}
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={filename} className="w-full h-full object-cover" />
      )}
    </button>
  );
}

function ModalPreview({ url, filename, onClose }: { url: string; filename: string; onClose: () => void }) {
  const { src, loading } = useQuizImagePreview(url);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-mono text-gray-700 truncate">{filename}</p>
          <button type="button" onClick={onClose} className="text-sm text-gray-500 hover:text-gray-800">
            닫기
          </button>
        </div>
        <div className="min-h-[240px] flex items-center justify-center bg-gray-50 rounded">
          {loading && <span className="text-sm text-gray-500">로딩 중…</span>}
          {src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={filename} className="max-h-[70vh] max-w-full object-contain" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function QuizImageGenPanel() {
  const draftResultsRef = useRef<Record<string, SavedRowResult> | null>(null);
  const [prefix, setPrefix] = useState(() => getCachedQuizImageDraft()?.prefix ?? '');
  const [raw, setRaw] = useState(() => getCachedQuizImageDraft()?.raw ?? '');
  const [parsed, setParsed] = useState<QuizImageParseResult | null>(() => getInitialParseState().parsed);
  const [rows, setRows] = useState<GenRow[]>(() => getInitialParseState().rows);
  const [restoredHint, setRestoredHint] = useState(() => {
    const draft = getCachedQuizImageDraft();
    return Boolean(draft?.prefix || draft?.raw);
  });
  const [configured, setConfigured] = useState<boolean | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [zipLoading, setZipLoading] = useState(false);
  const [batchStopped, setBatchStopped] = useState(false);
  const [preview, setPreview] = useState<{ url: string; filename: string } | null>(null);
  const stoppedRef = useRef(false);

  useEffect(() => {
    void fetch('/api/admin/quiz-images/config', { headers: adminHeaders(false) })
      .then(async (res) => {
        if (!res.ok) throw new Error(await readApiError(res));
        return res.json() as Promise<{ configured: boolean }>;
      })
      .then((c) => {
        setConfigured(c.configured);
        setConfigError(
          c.configured
            ? null
            : 'EVOLINK_API_KEY가 환경변수에 없습니다. .env.local 또는 Vercel에 설정 후 재시작하세요.',
        );
      })
      .catch((e: Error) => {
        setConfigured(null);
        setConfigError(e.message || 'EvoLink 설정 확인 실패');
      });
  }, []);

  const normalizedPrefix = useMemo(() => normalizeQuizImagePrefix(prefix), [prefix]);

  const runParse = useCallback(() => {
    if (!normalizedPrefix) {
      setParsed(null);
      setRows([]);
      return;
    }
    const result = parseQuizImagePrompts(raw, normalizedPrefix);
    setParsed(result);
    setRows((prev) => {
      const merged = mergeGenRows(result, prev, draftResultsRef.current);
      draftResultsRef.current = null;
      return merged;
    });
  }, [raw, normalizedPrefix]);

  useEffect(() => {
    const t = setTimeout(runParse, 400);
    return () => clearTimeout(t);
  }, [runParse]);

  useEffect(() => {
    if (!prefix.trim() && !raw.trim()) {
      localStorage.removeItem(DRAFT_STORAGE_KEY);
      return;
    }
    const t = setTimeout(() => {
      if (rows.length === 0 && draftResultsRef.current && Object.keys(draftResultsRef.current).length > 0) {
        return;
      }
      const results: Record<string, SavedRowResult> = {};
      for (const row of rows) {
        if (row.status !== 'done' && row.status !== 'error' && !row.imageUrl) continue;
        results[row.key] = {
          status: normalizePersistedStatus(row.status),
          imageUrl: row.imageUrl,
          error: row.error,
        };
      }
      const draft: QuizImageGenDraft = {
        v: 1,
        prefix,
        raw,
        results,
        savedAt: new Date().toISOString(),
      };
      try {
        localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draft));
      } catch {
        /* quota */
      }
    }, 500);
    return () => clearTimeout(t);
  }, [prefix, raw, rows]);

  const doneCount = rows.filter((r) => r.status === 'done').length;
  const errorCount = rows.filter((r) => r.status === 'error').length;
  const activeCount = rows.filter((r) => r.status === 'generating').length;

  useEffect(() => {
    if (batchStopped && activeCount === 0) {
      setBatchStopped(false);
      stoppedRef.current = false;
    }
  }, [batchStopped, activeCount]);

  const updateRow = (key: string, patch: Partial<GenRow>) => {
    setRows((prev) => prev.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  };

  const generateOne = async (row: GenRow, opts?: { batch?: boolean }) => {
    if (opts?.batch && stoppedRef.current) return false;
    updateRow(row.key, { status: 'generating', error: undefined });
    try {
      const res = await fetch('/api/admin/quiz-images/generate', {
        method: 'POST',
        headers: adminHeaders(),
        body: JSON.stringify({
          prompt: row.prompt,
          filename: row.filename,
          questionNumber: row.questionNumber,
          choiceId: row.choiceId,
        }),
      });
      if (!res.ok) throw new Error(await readApiError(res));
      const data = (await res.json()) as { imageUrl: string };
      updateRow(row.key, { status: 'done', imageUrl: data.imageUrl });
      return true;
    } catch (e) {
      if (opts?.batch && stoppedRef.current) {
        updateRow(row.key, { status: 'idle', error: undefined });
        return false;
      }
      updateRow(row.key, { status: 'error', error: (e as Error).message });
      return false;
    }
  };

  const stopGeneration = () => {
    stoppedRef.current = true;
    setBatchStopped(true);
    setGenerating(false);
    setRows((prev) =>
      prev.map((r) => (r.status === 'pending' ? { ...r, status: 'idle' as GenStatus, error: undefined } : r)),
    );
  };

  const confirmStopGeneration = () => {
    const pendingCount = rows.filter((r) => r.status === 'pending').length;
    const inFlightCount = rows.filter((r) => r.status === 'generating').length;
    const lines = [
      '일괄 생성을 중지할까요?',
      pendingCount > 0 ? `· 대기 ${pendingCount}개 → 취소` : null,
      inFlightCount > 0
        ? `· 생성 중 ${inFlightCount}개 → EvoLink에서 계속 진행되며 완료 시 표시`
        : null,
    ]
      .filter(Boolean)
      .join('\n');
    if (!window.confirm(lines)) return;
    stopGeneration();
  };

  const generateAll = async () => {
    if (!rows.length || generating) return;
    stoppedRef.current = false;
    setBatchStopped(false);
    setGenerating(true);
    const pending = rows.filter((r) => r.status !== 'done');
    for (const row of pending) {
      updateRow(row.key, { status: 'pending', error: undefined });
    }
    try {
      await Promise.all(pending.map((row) => generateOne(row, { batch: true })));
    } finally {
      setGenerating(false);
    }
  };

  const downloadOne = async (row: GenRow) => {
    if (!row.imageUrl) return;
    try {
      const res = await fetch('/api/admin/quiz-images/download', {
        method: 'POST',
        headers: adminHeaders(),
        body: JSON.stringify({ url: row.imageUrl, filename: row.filename }),
      });
      if (!res.ok) throw new Error(await readApiError(res));
      const blob = await res.blob();
      if (blob.size < 64) throw new Error('다운로드 파일이 비어 있습니다');
      triggerFileDownload(blob, row.filename);
    } catch (e) {
      window.alert(`다운로드 실패: ${(e as Error).message}`);
    }
  };

  const downloadZip = async () => {
    const done = rows.filter((r) => r.status === 'done' && r.imageUrl);
    if (!done.length) return;
    setZipLoading(true);
    try {
      const zipName = `${normalizedPrefix || 'quiz-images'}.zip`.replace(/_+\.zip$/i, '.zip');
      const res = await fetch('/api/admin/quiz-images/zip', {
        method: 'POST',
        headers: adminHeaders(),
        body: JSON.stringify({
          items: done.map((r) => ({ url: r.imageUrl!, filename: r.filename })),
          zipName,
        }),
      });
      if (!res.ok) throw new Error(await readApiError(res));
      const blob = await res.blob();
      if (blob.size < 64) throw new Error('ZIP 파일이 비어 있습니다');
      triggerFileDownload(blob, zipName);
    } catch (e) {
      window.alert(`ZIP 다운로드 실패: ${(e as Error).message}`);
    } finally {
      setZipLoading(false);
    }
  };

  const clearInputs = () => {
    setPrefix('');
    setRaw('');
    setRestoredHint(false);
    draftResultsRef.current = null;
    cachedDraft = null;
    initialParseState = undefined;
    localStorage.removeItem(DRAFT_STORAGE_KEY);
  };

  const hasInput = Boolean(prefix.trim() || raw.trim());
  const apiReady = configured === true;

  return (
    <div className="space-y-4">
      {configError && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-800 whitespace-pre-wrap">
          {configError}
        </div>
      )}
      {restoredHint && hasInput && (
        <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
          이 브라우저에 마지막 입력·생성 결과가 저장되어 있습니다.
          <button type="button" className="ml-2 text-blue-600 underline" onClick={() => setRestoredHint(false)}>
            닫기
          </button>
        </div>
      )}

      <div className="grid gap-4 xl:grid-cols-[minmax(280px,360px)_1fr]">
        <div className="bg-white shadow rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">입력</h2>
            {hasInput && (
              <button
                type="button"
                className="text-xs text-red-600 hover:underline disabled:opacity-50"
                disabled={generating}
                onClick={clearInputs}
              >
                비우기
              </button>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">파일명 프리픽스</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="p3_test_solo_drinking_type"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
            />
            <p className="mt-1 font-mono text-[11px] text-gray-400">
              예: {normalizedPrefix || 'prefix'}_q1a.png · _q1b.png
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {SETTINGS_CHIPS.map((chip) => (
              <span key={chip} className="inline-flex px-2 py-0.5 rounded-full text-[11px] bg-blue-50 text-blue-700 border border-blue-100">
                {chip}
              </span>
            ))}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">문항·프롬프트 붙여넣기</label>
            <textarea
              className="w-full min-h-[320px] resize-y px-3 py-2 border border-gray-300 rounded-md text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={'Q1. …\n• A. 🖼️ …\n…\n[Q1 선택지 이미지 프롬프트]\n• A 이미지: …'}
              value={raw}
              onChange={(e) => setRaw(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-medium">분석 결과</h2>
              {parsed && parsed.totalImages > 0 && (
                <>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">{parsed.questions.length}문항</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{parsed.totalImages}장</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{parsed.choiceType}</span>
                  {doneCount > 0 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">완료 {doneCount}</span>
                  )}
                  {errorCount > 0 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">실패 {errorCount}</span>
                  )}
                </>
              )}
            </div>
            {parsed && parsed.totalImages > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                  disabled={generating || !apiReady}
                  onClick={() => void generateAll()}
                >
                  {generating
                    ? `생성 중 ${doneCount}/${rows.length}${activeCount > 0 ? ` · 동시 ${activeCount}` : ''}`
                    : '일괄 생성'}
                </button>
                {generating && (
                  <button type="button" className="px-3 py-1.5 text-sm text-red-600 border border-red-200 rounded-md" onClick={confirmStopGeneration}>
                    중지
                  </button>
                )}
                <button
                  type="button"
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                  disabled={zipLoading || doneCount === 0}
                  onClick={() => void downloadZip()}
                >
                  {zipLoading ? 'ZIP…' : `ZIP (${doneCount})`}
                </button>
              </div>
            )}
          </div>

          {parsed?.errors && parsed.errors.length > 0 && (
            <div className="rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 space-y-1">
              {parsed.errors.map((err, i) => (
                <p key={i}>{err}</p>
              ))}
            </div>
          )}

          {!normalizedPrefix && (
            <p className="text-sm text-gray-500 py-8 text-center">파일명 프리픽스를 입력하세요.</p>
          )}
          {normalizedPrefix && (!parsed || parsed.totalImages === 0) && (
            <p className="text-sm text-gray-500 py-8 text-center">문항·이미지 프롬프트를 붙여넣으면 여기에 표시됩니다.</p>
          )}

          <div className="space-y-3">
            {rows.map((row) => (
              <div key={row.key} className="border border-gray-200 rounded-lg p-3 flex gap-3">
                <PreviewThumb
                  imageUrl={row.imageUrl}
                  filename={row.filename}
                  onOpen={() => row.imageUrl && setPreview({ url: row.imageUrl, filename: row.filename })}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-semibold text-gray-800">{row.filename}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        row.status === 'done'
                          ? 'bg-green-100 text-green-800'
                          : row.status === 'error'
                            ? 'bg-red-100 text-red-800'
                            : row.status === 'generating' || row.status === 'pending'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {row.status}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Q{row.questionNumber}
                      {row.choiceId ? `-${row.choiceId}` : ' 총면'}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-2">{row.prompt}</p>
                  {row.error && <p className="text-xs text-red-600 mb-2">{row.error}</p>}
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                      disabled={!apiReady || row.status === 'generating' || generating}
                      onClick={() => void generateOne(row)}
                    >
                      {row.status === 'done' ? '재생성' : '생성'}
                    </button>
                    <button
                      type="button"
                      className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                      disabled={!row.imageUrl}
                      onClick={() => void downloadOne(row)}
                    >
                      PNG
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {preview && <ModalPreview url={preview.url} filename={preview.filename} onClose={() => setPreview(null)} />}
    </div>
  );
}
