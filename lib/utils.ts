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
 * Supabase Storage URL 생성 (캐시 버스팅 포함)
 */
export function getThumbnailUrl(thumbnail: string): string {
  // 이미 전체 URL인 경우 그대로 반환
  if (thumbnail.startsWith('http://') || thumbnail.startsWith('https://')) {
    return thumbnail;
  }
  
  // Supabase Storage가 설정되어 있는 경우 사용
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  
  if (supabaseUrl) {
    // 캐시 버스팅: 현재 날짜를 버전으로 사용 (YYYYMMDD 형식)
    const today = new Date();
    const version = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;
    return `${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${thumbnail}?v=${version}`;
  }
  
  // Supabase가 없으면 기본 이미지 사용 (Unsplash에서 신뢰 관련 이미지)
  if (thumbnail === 'test_043_trustworthiness.jpg') {
    return 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=680&h=384&fit=crop&crop=center';
  }
  
  // 기본 이미지 사용
  return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=680&h=384&fit=crop&crop=center';
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
  };
}

