import { Locale } from '@/i18n';
import { DBTest, QuizTest } from './types';

/**
 * 플레이 횟수를 언어별로 포맷팅
 * @param count 플레이 횟수
 * @param locale 언어
 * @returns 포맷된 문자열 (예: "3.2만", "3.2K")
 */
export function formatPlayCount(count: number | undefined | null, locale: Locale): string {
  // count가 undefined, null, NaN인 경우 처리
  if (count == null || isNaN(count) || count < 0) {
    return '0';
  }
  
  // 숫자로 변환
  const numCount = Number(count);
  if (isNaN(numCount) || numCount < 0) {
    return '0';
  }
  
  if (numCount < 1000) {
    return numCount.toString();
  }

  const suffixes: Record<Locale, { thousand: string; tenThousand: string }> = {
    ko: { thousand: '천', tenThousand: '만' },
    en: { thousand: 'K', tenThousand: 'M' },
    ja: { thousand: '千', tenThousand: '万' },
    'zh-CN': { thousand: '千', tenThousand: '万' },
    'zh-TW': { thousand: '千', tenThousand: '萬' },
    id: { thousand: 'rb', tenThousand: 'jt' },
    vi: { thousand: 'N', tenThousand: 'Tr' },
  };

  // 안전한 locale 처리 - 정의되지 않은 locale의 경우 기본값 사용
  const suffixData = suffixes[locale] || suffixes.ko;
  const { thousand, tenThousand } = suffixData;

  // 만 단위 (10,000)
  if (numCount >= 10000) {
    const value = numCount / 10000;
    return value % 1 === 0 ? `${value}${tenThousand}` : `${value.toFixed(1)}${tenThousand}`;
  }

  // 천 단위 (1,000)
  const value = numCount / 1000;
  return value % 1 === 0 ? `${value}${thousand}` : `${value.toFixed(1)}${thousand}`;
}

/**
 * 배열을 랜덤하게 섞기
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * CSS 클래스명 결합
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * 정적 이미지 버전 쿼리 생성.
 * 기본값은 빈 문자열이며, 이미지 파일을 교체할 때만 NEXT_PUBLIC_ASSET_VERSION을 올립니다.
 */
function getAssetVersionQuery(): string {
  const version = String(process.env.NEXT_PUBLIC_ASSET_VERSION || '').trim();
  return version ? `?v=${encodeURIComponent(version)}` : '';
}

function appendAssetVersion(url: string): string {
  const versionQuery = getAssetVersionQuery();
  if (!versionQuery) {
    return url;
  }
  return `${url}${url.includes('?') ? versionQuery.replace('?', '&') : versionQuery}`;
}

/** Cloudflare에서 /cdn/tests-thumbnails/ 경로가 차단되어 짧은 경로 사용 */
const CDN_THUMBNAIL_PROXY_PATH = '/cdn/t/';
const CDN_RENDER_THUMBNAIL_PROXY_PATH = '/cdn/render/t/';

function getCdnBase(): string {
  let cdnBase = String(process.env.NEXT_PUBLIC_CDN_BASE_URL || '').trim().replace(/\/+$/, '');
  if (cdnBase === 'https://myquizoasis.com') {
    cdnBase = 'https://www.myquizoasis.com';
  }
  return cdnBase;
}

function buildCdnThumbnailProxyUrl(filename: string): string {
  return `${getCdnBase()}${CDN_THUMBNAIL_PROXY_PATH}${encodeURIComponent(filename)}`;
}

function buildCdnRenderThumbnailProxyUrl(filename: string, query: string): string {
  return `${getCdnBase()}${CDN_RENDER_THUMBNAIL_PROXY_PATH}${encodeURIComponent(filename)}${query}`;
}

/** Supabase Storage 직링크 (CDN 프록시 실패 시 폴백) */
export function getSupabaseThumbnailUrl(thumbnail: string): string {
  if (thumbnail.startsWith('http://') || thumbnail.startsWith('https://')) {
    return thumbnail;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (supabaseUrl) {
    return appendAssetVersion(`${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${thumbnail}`);
  }

  if (thumbnail === 'test_043_trustworthiness.jpg') {
    return 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=680&h=384&fit=crop&crop=center';
  }

  return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=680&h=384&fit=crop&crop=center';
}

/** jpg/jpeg/png ↔ webp 등 대체 썸네일 파일명 */
export function getThumbnailFallbackFilename(thumbnail: string): string | null {
  if (!thumbnail || thumbnail.startsWith('http://') || thumbnail.startsWith('https://')) {
    return null;
  }
  if (/\.jpe?g$/i.test(thumbnail)) {
    return thumbnail.replace(/\.jpe?g$/i, '.webp');
  }
  if (/\.png$/i.test(thumbnail)) {
    return thumbnail.replace(/\.png$/i, '.webp');
  }
  if (/\.webp$/i.test(thumbnail)) {
    return thumbnail.replace(/\.webp$/i, '.jpg');
  }
  return null;
}

/** 로드 실패 시 시도할 썸네일 파일명 목록 (원본 → 대체 확장자) */
export function getThumbnailFilenameCandidates(thumbnail: string): string[] {
  if (!thumbnail) return [];
  const candidates = [thumbnail];
  const fallback = getThumbnailFallbackFilename(thumbnail);
  if (fallback && !candidates.includes(fallback)) {
    candidates.push(fallback);
  }
  return candidates;
}

/**
 * Supabase Storage URL 생성
 */
export function getThumbnailUrl(thumbnail: string): string {
  if (thumbnail.startsWith('http://') || thumbnail.startsWith('https://')) {
    return thumbnail;
  }

  const cdnBase = getCdnBase();
  if (cdnBase) {
    return appendAssetVersion(buildCdnThumbnailProxyUrl(thumbnail));
  }

  return getSupabaseThumbnailUrl(thumbnail);
}

/** 질문 데이터에서 Storage 이미지 파일명 추출 */
export function extractImageFilenamesFromQuestions(questions: unknown[]): string[] {
  const filenames: string[] = [];

  for (const item of questions) {
    if (!item || typeof item !== 'object') continue;
    const question = item as Record<string, unknown>;

    if (typeof question.image === 'string' && question.image) {
      filenames.push(question.image);
    }

    const options = question.options;
    if (!Array.isArray(options)) continue;

    for (const option of options) {
      if (!option || typeof option !== 'object') continue;
      const image = (option as Record<string, unknown>).image;
      if (typeof image === 'string' && image) {
        filenames.push(image);
      }
    }
  }

  return filenames;
}

/** 진행 화면 이미지를 미리 로드해 CDN/브라우저 캐시를 워밍 */
export function prefetchStorageImages(filenames: string[]) {
  if (typeof window === 'undefined') return;

  const seen = new Set<string>();
  for (const filename of filenames) {
    if (!filename || filename.startsWith('http://') || filename.startsWith('https://') || seen.has(filename)) {
      continue;
    }
    seen.add(filename);

    const img = new window.Image();
    img.decoding = 'async';
    img.src = getThumbnailUrl(filename);
  }
}

/**
 * OG/Twitter 공유 이미지 전용 — 고해상도(1200x630)로 리사이즈(선택).
 * NEXT_PUBLIC_SUPABASE_OG_IMAGE_RESIZE=1 이고 Supabase Image Transformation을 쓰는 경우에만 활성화하세요.
 */
export function getOgImageUrl(filename: string): string {
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename;
  }

  const cdnBase = getCdnBase();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) {
    return getThumbnailUrl(filename);
  }

  if (process.env.NEXT_PUBLIC_SUPABASE_OG_IMAGE_RESIZE === '1') {
    if (cdnBase) {
      return appendAssetVersion(
        buildCdnRenderThumbnailProxyUrl(filename, '?width=1200&height=630&resize=cover&quality=86')
      );
    }
    return appendAssetVersion(`${supabaseUrl}/storage/v1/render/image/public/tests-thumbnails/${encodeURIComponent(
      filename
    )}?width=1200&height=630&resize=cover&quality=86`);
  }

  if (cdnBase) {
    return appendAssetVersion(buildCdnThumbnailProxyUrl(filename));
  }
  return appendAssetVersion(`${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${filename}`);
}

/**
 * 랜드마크 퀴즈 진행 화면 전용 — 표시 너비에 맞춘 바이트 절감(선택).
 * NEXT_PUBLIC_SUPABASE_QUIZ_IMAGE_RESIZE=1 이고 프로젝트에서 Supabase Image Transformation을 쓰는 경우에만 활성화하세요.
 */
export function getQuizLandmarkImageUrl(filename: string): string {
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename;
  }

  const cdnBase = getCdnBase();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) {
    return getThumbnailUrl(filename);
  }

  if (process.env.NEXT_PUBLIC_SUPABASE_QUIZ_IMAGE_RESIZE === '1') {
    if (cdnBase) {
      return appendAssetVersion(
        buildCdnRenderThumbnailProxyUrl(filename, '?width=960&height=600&resize=cover&quality=82')
      );
    }
    return appendAssetVersion(`${supabaseUrl}/storage/v1/render/image/public/tests-thumbnails/${encodeURIComponent(
      filename
    )}?width=960&height=600&resize=cover&quality=82`);
  }

  if (cdnBase) {
    return appendAssetVersion(buildCdnThumbnailProxyUrl(filename));
  }

  return appendAssetVersion(`${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${filename}`);
}

/**
 * DB 테스트를 QuizTest 형식으로 변환
 */
export function convertDBTestToQuizTest(dbTest: DBTest, locale: Locale): QuizTest {
  // 기존 형식 (string[])과 새 형식 (Record<string, string[]>) 모두 지원
  let tags: string[] = [];
  let tagsMultilingual: Record<string, string[]> | undefined;
  
  if (Array.isArray(dbTest.tags)) {
    // 기존 형식: tags가 string[] 배열
    tags = dbTest.tags;
    tagsMultilingual = undefined;
  } else if (typeof dbTest.tags === 'object' && dbTest.tags !== null) {
    // 새 형식: tags가 Record<string, string[]> 객체
    tags = dbTest.tags[locale] || dbTest.tags.ko || [];
    tagsMultilingual = dbTest.tags;
  }

  const playCount = dbTest.play_count || 0;

  return {
    id: dbTest.id,
    slug: dbTest.slug,
    title: dbTest.title[locale] || dbTest.title.ko || '',
    description: dbTest.description?.[locale] || dbTest.description?.ko,
    thumbnail: dbTest.thumbnail,
    playCount: playCount,
    tags,
    createdAt: dbTest.created_at,
    badgeType: dbTest.badge_type || null,
  };
}

