import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

// 테스트 슬러그 목록 (모든 테스트 포함)
const testSlugs = [
  // 심리 성격 테스트
  'mbti-accurate-test',
  'attachment-style-test',
  'humor-code-test',
  'trustworthiness-test',
  'empathy-level-test',
  'honesty-vs-consideration-test',
  
  // 연애 테스트
  'catch-lover-signals',
  'friend-test',
  'apology-style-test',
  'breakup-coping-test',
  'jealousy-level-test',
  'first-impression-test',
  'love-flavor-test',
  'ideal-type-test',
  'crush-success-test',
  'flirting-skills-test',
  'my-dating-style',
  'dating-style-test',
  
  // 직업 커리어 테스트
  'future-career-match-test',
  'job-strength-test',
  'work-values-test',
  'work-life-balance-test',
  'leadership-style-test',
  'team-player-test',
  'entrepreneur-spirit-test',
  'challenge-potential-test',
  
  // 능력 테스트
  'left-right-brain-test',
  'concentration-level-test',
  'decision-speed-test',
  'quick-decision-test',
  'time-efficiency-test',
  'stress-relief-test',
  'investment-style-test',
  'real-iq',
  'brain-quiz-test',
  
  // 성격 스타일 테스트
  'obsession-test',
  'optimism-pessimism-test',
  'life-priorities',
  'adventurer-vs-cautious',
  'communication-style-test',
  'honesty-vs-restraint-test',
  'independence-vs-dependence-test',
  'competitiveness-test',
  'reaction-style-test',
  'jealousy-test',
  'planner-vs-spontaneous-test',
  
  // 얼굴 분석 테스트
  'face-reading',
  'face-love-fortune',
  'face-occupations',
  'face-psych-state',
  'face-fortune',
  'face-reincarnation',
  
  // 퀴즈 테스트
  'extreme-quiz',
  'mensa-extreme',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myquizoasis.com';
  
  const routes: MetadataRoute.Sitemap = [];

  // 홈 페이지 (언어별)
  locales.forEach(locale => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: locales.reduce((acc, lang) => {
          acc[lang] = `${baseUrl}/${lang}`;
          return acc;
        }, {} as Record<string, string>)
      }
    });
  });

  // 각 테스트 페이지 (언어별)
  testSlugs.forEach(slug => {
    locales.forEach(locale => {
      routes.push({
        url: `${baseUrl}/${locale}/test/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: locales.reduce((acc, lang) => {
            acc[lang] = `${baseUrl}/${lang}/test/${slug}`;
            return acc;
          }, {} as Record<string, string>)
        }
      });
    });
  });

  // 테스트 목록 페이지
  locales.forEach(locale => {
    routes.push({
      url: `${baseUrl}/${locale}/tests`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: locales.reduce((acc, lang) => {
          acc[lang] = `${baseUrl}/${lang}/tests`;
          return acc;
        }, {} as Record<string, string>)
      }
    });
  });

  return routes;
}

