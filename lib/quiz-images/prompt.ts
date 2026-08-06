export type QuizImageChoiceId = 'A' | 'B' | 'C' | 'D';

export interface QuizImagePromptItem {
  questionNumber: number;
  choiceId: QuizImageChoiceId | null;
  prompt: string;
  filename: string;
  isFaceQuestion: boolean;
  choiceCount: number;
}

export interface QuizImageParseQuestion {
  questionNumber: number;
  questionText: string;
  choiceCount: number;
  isFaceQuestion: boolean;
  choices: { id: QuizImageChoiceId; label: string }[];
  images: QuizImagePromptItem[];
}

export interface QuizImageParseResult {
  questions: QuizImageParseQuestion[];
  items: QuizImagePromptItem[];
  totalImages: number;
  choiceType: '2지선다' | '4지선다' | '혼합' | '문항당1장' | '선택지별';
  errors: string[];
}

const SEPARATOR_RE = /^_{5,}$/;
const QUESTION_RE = /^Q(\d+)\.\s*(.+)$/;
const ROUND_QUESTION_RE = /^Round\s+(\d+)\.\s*(.+)$/i;
const OPTION_RE = /^[•*·]\s*([A-Da-d])\.\s*(?:🖼️\s*)?(.+?)(?:\s*→\s*\d+점)?$/;
const PROMPT_HEADER_RE = /^\[(?:Q|R)(\d+)\s*(.+?)\]$/i;
const PROMPT_HEADER_CHOICE_RE = /선택지\s*([A-Da-d])\s*이미지\s*프롬프트/i;
const PROMPT_HEADER_INLINE_RE = /선택지\s*이미지\s*프롬프트/i;
const PROMPT_HEADER_BODY_RE = /이미지\s*프롬프트|총면/;
const PROMPT_CHOICE_RE = /^[•*·]?\s*([A-Da-d])\s*이미지\s*:\s*(.+)$/;
const PROMPT_FACE_RE = /^[•*·]?\s*이미지\s*:\s*(.+)$/;
const SKIP_LINE_RE = /^(?:선택지\s*:?\s*|정답\s*:|해설\s*:|\[(?:중간|어려운|쉬운)\s+구간)/;

function isSkippablePromptContextLine(line: string): boolean {
  return SKIP_LINE_RE.test(line);
}

function isStructuralLine(line: string): boolean {
  return (
    QUESTION_RE.test(line) ||
    ROUND_QUESTION_RE.test(line) ||
    PROMPT_HEADER_RE.test(line) ||
    OPTION_RE.test(line)
  );
}

export function normalizeQuizImagePrefix(raw: string): string {
  const trimmed = raw.trim().replace(/\s+/g, '');
  if (!trimmed) return '';
  return trimmed.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+$/, '');
}

export function buildQuizImageFilename(
  prefix: string,
  questionNumber: number,
  choiceId: QuizImageChoiceId | null,
): string {
  const p = normalizeQuizImagePrefix(prefix);
  if (!p) return '';
  if (choiceId) return `${p}_q${questionNumber}${choiceId.toLowerCase()}.png`;
  return `${p}_q${questionNumber}.png`;
}

function detectChoiceType(
  counts: number[],
  layout: 'perQuestion' | 'perChoice' | 'inline' | 'unknown',
): QuizImageParseResult['choiceType'] {
  if (layout === 'perQuestion') return '문항당1장';
  if (layout === 'perChoice') return '선택지별';

  const uniq = Array.from(new Set(counts.filter((c) => c > 0)));
  if (uniq.length === 0) return '4지선다';
  if (uniq.length === 1) return uniq[0] === 2 ? '2지선다' : '4지선다';
  return '혼합';
}

function toChoiceId(raw: string): QuizImageChoiceId {
  return raw.toUpperCase() as QuizImageChoiceId;
}

export function parseQuizImagePrompts(raw: string, prefix = ''): QuizImageParseResult {
  const errors: string[] = [];
  const normalizedPrefix = normalizeQuizImagePrefix(prefix);
  const lines = raw
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !SEPARATOR_RE.test(l));

  const questions = new Map<number, QuizImageParseQuestion>();
  let mode: 'question' | 'prompt' = 'question';
  let currentPromptQuestion = 0;
  let promptHeaderFace = false;
  let legacyInlinePrompts = false;
  let imageLayout: 'perQuestion' | 'perChoice' | 'inline' | 'unknown' = 'unknown';
  let awaitingPrompt: {
    questionNumber: number;
    choiceId: QuizImageChoiceId | null;
    isFace: boolean;
  } | null = null;

  const ensureQuestion = (num: number): QuizImageParseQuestion => {
    let q = questions.get(num);
    if (!q) {
      q = {
        questionNumber: num,
        questionText: '',
        choiceCount: 0,
        isFaceQuestion: false,
        choices: [],
        images: [],
      };
      questions.set(num, q);
    }
    return q;
  };

  const pushPromptItem = (
    num: number,
    choiceId: QuizImageChoiceId | null,
    prompt: string,
    isFace: boolean,
  ) => {
    const q = ensureQuestion(num);
    if (isFace) q.isFaceQuestion = true;
    q.images.push({
      questionNumber: num,
      choiceId,
      prompt,
      filename: buildQuizImageFilename(normalizedPrefix, num, choiceId),
      isFaceQuestion: isFace,
      choiceCount: q.choiceCount || q.images.length + 1,
    });
  };

  const flushAwaitingPrompt = (reason: string) => {
    if (!awaitingPrompt) return;
    errors.push(
      `Q${awaitingPrompt.questionNumber}: [Q${awaitingPrompt.questionNumber} …] 헤더 다음 ${reason}`,
    );
    awaitingPrompt = null;
  };

  for (const line of lines) {
    const qMatch = line.match(QUESTION_RE);
    const roundMatch = !qMatch ? line.match(ROUND_QUESTION_RE) : null;
    const questionMatch = qMatch ?? roundMatch;
    if (questionMatch) {
      flushAwaitingPrompt('프롬프트 본문이 없습니다');
      mode = 'question';
      promptHeaderFace = false;
      legacyInlinePrompts = false;
      const num = Number(questionMatch[1]);
      const q = ensureQuestion(num);
      q.questionText = questionMatch[2]!.trim();
      continue;
    }

    const headerMatch = line.match(PROMPT_HEADER_RE);
    if (headerMatch) {
      flushAwaitingPrompt('프롬프트 본문이 없습니다');
      mode = 'prompt';
      legacyInlinePrompts = false;
      promptHeaderFace = false;
      const num = Number(headerMatch[1]);
      const headerText = headerMatch[2] ?? '';
      ensureQuestion(num);

      const choiceHeader = headerText.match(PROMPT_HEADER_CHOICE_RE);
      if (choiceHeader) {
        awaitingPrompt = {
          questionNumber: num,
          choiceId: toChoiceId(choiceHeader[1]!),
          isFace: false,
        };
        imageLayout = 'perChoice';
        continue;
      }

      if (PROMPT_HEADER_INLINE_RE.test(headerText)) {
        currentPromptQuestion = num;
        legacyInlinePrompts = true;
        imageLayout = imageLayout === 'unknown' ? 'inline' : imageLayout;
        continue;
      }

      if (PROMPT_HEADER_BODY_RE.test(headerText)) {
        awaitingPrompt = {
          questionNumber: num,
          choiceId: null,
          isFace: /총면/.test(headerText),
        };
        imageLayout = 'perQuestion';
        continue;
      }

      currentPromptQuestion = num;
      legacyInlinePrompts = true;
      promptHeaderFace = /총면/.test(headerText);
      if (promptHeaderFace) ensureQuestion(num).isFaceQuestion = true;
      continue;
    }

    if (mode === 'question') {
      const optMatch = line.match(OPTION_RE);
      if (optMatch) {
        const nums = Array.from(questions.keys()).sort((a, b) => a - b);
        const num = nums.at(-1);
        if (num == null) {
          errors.push(`선택지 "${line.slice(0, 40)}…" — 앞에 Qn. 문항이 없습니다`);
          continue;
        }
        const q = ensureQuestion(num);
        const id = toChoiceId(optMatch[1]!);
        q.choices.push({ id, label: optMatch[2]!.trim() });
        q.choiceCount = q.choices.length;
        continue;
      }
      continue;
    }

    // prompt mode
    if (isSkippablePromptContextLine(line)) {
      continue;
    }

    if (awaitingPrompt) {
      if (isStructuralLine(line)) {
        flushAwaitingPrompt('프롬프트 본문이 없습니다');
      } else {
        const prompt = line.replace(/^[•*·]\s*/, '').trim();
        if (prompt) {
          pushPromptItem(
            awaitingPrompt.questionNumber,
            awaitingPrompt.choiceId,
            prompt,
            awaitingPrompt.isFace,
          );
          awaitingPrompt = null;
          mode = 'question';
          continue;
        }
      }
    }

    const optInPrompt = line.match(OPTION_RE);
    if (optInPrompt) {
      mode = 'question';
      const nums = Array.from(questions.keys()).sort((a, b) => a - b);
      const num = nums.at(-1);
      if (num == null) {
        errors.push(`선택지 "${line.slice(0, 40)}…" — 앞에 Qn. 문항이 없습니다`);
        continue;
      }
      const q = ensureQuestion(num);
      const id = toChoiceId(optInPrompt[1]!);
      q.choices.push({ id, label: optInPrompt[2]!.trim() });
      q.choiceCount = q.choices.length;
      continue;
    }

    if (!currentPromptQuestion && !legacyInlinePrompts) {
      errors.push(`프롬프트 "${line.slice(0, 40)}…" — 앞에 [Qn …] 헤더가 없습니다`);
      continue;
    }

    const num = currentPromptQuestion || awaitingPrompt?.questionNumber;
    if (!num) {
      errors.push(`프롬프트 "${line.slice(0, 40)}…" — 앞에 [Qn …] 헤더가 없습니다`);
      continue;
    }
    const q = ensureQuestion(num);

    const choicePrompt = line.match(PROMPT_CHOICE_RE);
    if (choicePrompt) {
      const id = toChoiceId(choicePrompt[1]!);
      const prompt = choicePrompt[2]!.trim();
      pushPromptItem(num, id, prompt, false);
      if (imageLayout === 'unknown') imageLayout = 'inline';
      continue;
    }

    const facePrompt = line.match(PROMPT_FACE_RE);
    if (facePrompt || promptHeaderFace) {
      const prompt = facePrompt ? facePrompt[1]!.trim() : line.replace(/^[•*·]\s*/, '').trim();
      pushPromptItem(num, null, prompt, true);
      if (imageLayout === 'unknown') imageLayout = 'perQuestion';
      continue;
    }

    if (legacyInlinePrompts) {
      errors.push(`인식하지 못한 프롬프트 줄: ${line.slice(0, 60)}…`);
      continue;
    }

    errors.push(`인식하지 못한 프롬프트 줄: ${line.slice(0, 60)}…`);
  }

  flushAwaitingPrompt('프롬프트 본문이 없습니다');

  const sorted = Array.from(questions.values()).sort((a, b) => a.questionNumber - b.questionNumber);
  for (const q of sorted) {
    if (q.images.length === 0) {
      errors.push(`Q${q.questionNumber}: 이미지 프롬프트가 없습니다`);
    }
    if (!q.isFaceQuestion && q.choiceCount === 0 && q.images.length > 0) {
      q.choiceCount = q.images.length;
    }
    for (const img of q.images) {
      img.choiceCount = q.choiceCount;
      img.isFaceQuestion = q.isFaceQuestion;
    }
  }

  const items = sorted.flatMap((q) => q.images);
  const choiceCounts = sorted.filter((q) => !q.isFaceQuestion).map((q) => q.choiceCount);

  return {
    questions: sorted,
    items,
    totalImages: items.length,
    choiceType: detectChoiceType(choiceCounts, imageLayout),
    errors,
  };
}
