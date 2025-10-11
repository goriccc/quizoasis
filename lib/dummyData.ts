import { QuizTest } from './types';

// 더미 태그
export const dummyTags = [
  { id: 'all', name: 'all' },
  { id: 'personality', name: 'personality' },
  { id: 'love', name: 'love' },
  { id: 'career', name: 'career' },
  { id: 'friendship', name: 'friendship' },
  { id: 'mbti', name: 'mbti' },
  { id: 'fun', name: 'fun' },
  { id: 'deep', name: 'deep' },
];

// 실제로 작동하는 더미 이미지 URL들
const dummyThumbnails = [
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1557862921-37829c790f19?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=680&h=384&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=680&h=384&fit=crop&crop=center',
];

// 고정된 플레이 횟수 (hydration 에러 방지)
const fixedPlayCounts = [
  32450, 18920, 45320, 12580, 28900, 35670, 9830, 41200, 15640, 29870,
  38210, 11450, 47890, 22340, 33560, 14920, 39780, 25410, 31260, 19870,
];

// 더미 심리테스트 데이터
export function generateDummyTests(count: number): QuizTest[] {
  const tags = ['personality', 'love', 'career', 'friendship', 'mbti', 'fun', 'deep'];
  
  // 각 테스트마다 고정된 태그 조합 (hydration 에러 방지)
  const fixedTagCombinations = [
    ['personality', 'mbti'],
    ['love', 'personality'],
    ['career', 'personality'],
    ['friendship', 'personality'],
    ['personality', 'fun'],
    ['love', 'fun'],
    ['mbti', 'deep'],
    ['love', 'deep'],
    ['career', 'mbti'],
    ['friendship', 'fun'],
    ['personality', 'love', 'mbti'],
    ['career', 'deep'],
    ['love', 'friendship'],
    ['personality', 'career'],
    ['fun', 'deep'],
    ['mbti', 'love'],
    ['personality', 'friendship'],
    ['career', 'fun'],
    ['love', 'mbti', 'deep'],
    ['personality', 'fun', 'friendship'],
  ];
  
  const titles: Record<string, string[]> = {
    ko: [
      'MBTI 성격 유형 테스트',
      '나의 연애 스타일은?',
      '직업 적성 검사',
      '나는 어떤 친구일까?',
      '숨겨진 성격 찾기',
      '2025년 나의 운세',
      '내 마음 속 진짜 나',
      '사랑의 언어 테스트',
      '나의 리더십 유형',
      '완벽한 휴가 스타일',
      '숨은 재능 찾기',
      '인간관계 성향 테스트',
      '나의 스트레스 대처법',
      '이상형 찾기 테스트',
      '나는 어떤 동물?',
      '직장 내 나의 역할',
      '사고방식 분석 테스트',
      '나의 소통 스타일',
      '감정 표현 테스트',
      '인생 가치관 테스트',
    ],
    en: [
      'MBTI Personality Test',
      'What\'s My Love Style?',
      'Career Aptitude Test',
      'What Kind of Friend Am I?',
      'Discover Your Hidden Personality',
      'Your 2025 Fortune',
      'The Real Me Inside',
      'Love Language Test',
      'My Leadership Type',
      'Perfect Vacation Style',
      'Find Your Hidden Talent',
      'Relationship Tendency Test',
      'My Stress Coping Method',
      'Find Your Ideal Type',
      'Which Animal Am I?',
      'My Role at Work',
      'Mindset Analysis Test',
      'My Communication Style',
      'Emotional Expression Test',
      'Life Values Test',
    ],
  };

  const tests: QuizTest[] = [];

  for (let i = 1; i <= count; i++) {
    tests.push({
      id: i,
      slug: `test-${i.toString().padStart(3, '0')}`,
      title: titles.ko[i - 1] || `심리테스트 ${i}`,
      description: `흥미로운 심리테스트 ${i}번입니다.`,
      thumbnail: dummyThumbnails[(i - 1) % dummyThumbnails.length],
      playCount: fixedPlayCounts[(i - 1) % fixedPlayCounts.length],
      tags: fixedTagCombinations[(i - 1) % fixedTagCombinations.length],
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
    });
  }

  return tests;
}

// 20개의 더미 테스트 생성
export const dummyTests = generateDummyTests(20);

// 최신 테스트 10개
export const latestTests = dummyTests.slice(0, 10);

