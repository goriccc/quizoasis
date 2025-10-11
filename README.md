# 🎭 QuizOasis

> 당신의 마음을 탐험하는 심리테스트의 오아시스

글로벌 다국어 지원 심리테스트 웹 플랫폼

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🌍 지원 언어

- 🇰🇷 한국어 (Korean)
- 🇺🇸 영어 (English)
- 🇯🇵 일본어 (Japanese)
- 🇨🇳 중국어 간체 (Simplified Chinese)
- 🇹🇼 중국어 번체 (Traditional Chinese)
- 🇮🇩 인도네시아어 (Indonesian)
- 🇻🇳 베트남어 (Vietnamese)

## ✨ 주요 기능

### 📱 반응형 디자인
- 모바일 우선 설계
- 갤럭시 폴드 최적화 (접힌 상태 / 펼친 상태)
- 태블릿 및 데스크톱 지원

### 🎨 UI/UX 특징
- **고정 헤더**: 스크롤과 무관하게 항상 표시
- **태그 필터링**: 가로 스크롤 태그 선택으로 카테고리 필터
- **최신 테스트**: 0.8배 축소 썸네일 가로 스크롤
- **카테고리 그리드**: 반응형 레이아웃 (디바이스별 최적화)
- **랜덤 정렬**: 태그 선택 시 매번 랜덤하게 정렬

### 🌐 다국어 지원
- 브라우저 언어 자동 감지
- URL 기반 언어 라우팅 (`/ko`, `/en`, `/ja` 등)
- 언어별 플레이 횟수 포맷팅 (예: 한국어 "3.2만", 영어 "3.2K")

## 🚀 시작하기

### 필수 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env

# .env 파일을 열어 Supabase 정보 입력
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 빌드

```bash
npm run build
npm start
```

## 📂 프로젝트 구조

```
quizoasis/
├─ app/                          # Next.js App Router
│  ├─ [locale]/                  # 다국어 라우팅
│  │  ├─ page.tsx               # 메인 페이지
│  │  ├─ test/[slug]/page.tsx   # 테스트 실행 페이지
│  │  ├─ fortune/page.tsx       # 운세 페이지
│  │  └─ face/page.tsx          # 얼굴 분석 페이지
│  ├─ layout.tsx                # 루트 레이아웃
│  └─ globals.css               # 전역 스타일
├─ components/                   # React 컴포넌트
│  ├─ Header.tsx                # 헤더 (햄버거 메뉴, 검색, 언어 선택)
│  ├─ TagsSection.tsx           # 태그 영역
│  ├─ LatestTestsSection.tsx    # 최신 테스트 영역
│  ├─ CategorySection.tsx       # 카테고리 영역
│  └─ Footer.tsx                # 푸터
├─ lib/                          # 유틸리티 및 설정
│  ├─ types.ts                  # TypeScript 타입
│  ├─ utils.ts                  # 유틸리티 함수
│  ├─ supabase.ts               # Supabase 클라이언트
│  └─ dummyData.ts              # 더미 데이터
├─ messages/                     # 다국어 번역 파일
│  ├─ ko.json
│  ├─ en.json
│  ├─ ja.json
│  ├─ zh-CN.json
│  ├─ zh-TW.json
│  ├─ id.json
│  └─ vi.json
├─ i18n.ts                       # 다국어 설정
├─ middleware.ts                 # Next.js 미들웨어
├─ package.json
├─ tsconfig.json
├─ tailwind.config.ts
└─ next.config.js
```

## 🗄️ Supabase 데이터베이스 스키마

### tests 테이블

```sql
CREATE TABLE tests (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  
  -- 다국어 제목
  title_ko VARCHAR(200),
  title_en VARCHAR(200),
  title_ja VARCHAR(200),
  title_zh_cn VARCHAR(200),
  title_zh_tw VARCHAR(200),
  title_id VARCHAR(200),
  title_vi VARCHAR(200),
  
  -- 다국어 설명
  description_ko TEXT,
  description_en TEXT,
  description_ja TEXT,
  description_zh_cn TEXT,
  description_zh_tw TEXT,
  description_id TEXT,
  description_vi TEXT,
  
  thumbnail VARCHAR(255) NOT NULL,
  play_count INT DEFAULT 0,
  tags JSONB DEFAULT '[]',
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX idx_play_count ON tests(play_count DESC);
CREATE INDEX idx_created_at ON tests(created_at DESC);
CREATE INDEX idx_tags ON tests USING GIN(tags);

-- 플레이 횟수 증가 함수
CREATE OR REPLACE FUNCTION increment_play_count(test_slug VARCHAR)
RETURNS VOID AS $$
BEGIN
  UPDATE tests SET play_count = play_count + 1 WHERE slug = test_slug;
END;
$$ LANGUAGE plpgsql;
```

## 🎨 커스터마이징

### 색상 변경

`tailwind.config.ts` 파일에서 색상 팔레트 수정:

```typescript
colors: {
  primary: {
    500: '#your-color',
    // ...
  },
  secondary: {
    500: '#your-color',
    // ...
  },
}
```

### 언어 선택 UI 제거 (런칭 시)

`components/Header.tsx`에서 언어 선택 부분 주석 처리:

```tsx
{/* 언어 선택 - 개발용, 런칭 시 제거 
<div className="relative">
  ...
</div>
*/}
```

## 📱 반응형 브레이크포인트

| 디바이스 | 화면 너비 | 썸네일 개수 (카테고리) |
|----------|-----------|----------------------|
| 갤럭시 폴드 (접힌 상태, 세로) | < 344px | 1개 |
| 갤럭시 폴드 (접힌 상태, 가로) | 344px ~ 768px | 3개 |
| 갤럭시 폴드 (펼친 상태, 세로) | 768px ~ 1024px | 2개 |
| 갤럭시 폴드 (펼친 상태, 가로) | > 1024px | 3개 |
| 일반 스마트폰 (세로) | < 768px | 1개 |
| 일반 스마트폰 (가로) | > 768px | 3개 |

## 🚀 배포

### Vercel 배포 (추천)

1. GitHub에 푸시
2. [Vercel](https://vercel.com) 에서 Import
3. 환경 변수 설정
4. Deploy 클릭

### Cloudflare Pages 배포

1. GitHub 연동
2. Build command: `npm run build`
3. Output directory: `.next`
4. 환경 변수 설정

## 🔧 향후 개발 계획

- [ ] 심리테스트 실행 페이지 구현 (12문제 시스템)
- [ ] 결과 페이지 구현
- [ ] 검색 기능 구현
- [ ] Google AdSense 통합
- [ ] 쿠팡/알리 어필리에이트 링크 추가
- [ ] PWA (Progressive Web App) 전환
- [ ] 오프라인 지원
- [ ] 관리자 대시보드

## 🤝 기여

이슈 및 PR 환영합니다!

## 📄 라이선스

Copyright © 2025 QuizOasis Co., Ltd. All rights reserved.

상호: 멀티파이프 | 대표: 송준호
사업자 번호: 304-24-18806

## 🔗 링크

- [네이버 블로그](https://blog.naver.com/quizoasis)
- [인스타그램](https://www.instagram.com/myquizoasis/)
- [링크드인](https://www.linkedin.com/in/%EC%86%A1-%EC%A4%80%ED%98%B8-0364b4a9/)
- [핀터레스트](https://kr.pinterest.com/myquizoasis/)

---

Made with ❤️ by MultyPipe


