# 🚀 QuizOasis 배포 가이드

## 📋 배포 전 체크리스트

- [ ] Supabase 프로젝트 생성
- [ ] 데이터베이스 테이블 생성
- [ ] 환경 변수 설정
- [ ] 더미 데이터 제거 (프로덕션)
- [ ] 언어 선택 UI 제거 여부 결정
- [ ] Google AdSense 코드 준비
- [ ] 도메인 준비

## 1️⃣ Supabase 설정

### 1.1 프로젝트 생성

1. [Supabase](https://supabase.com) 접속
2. "New Project" 클릭
3. 프로젝트 이름: `quizoasis`
4. 데이터베이스 비밀번호 설정
5. 리전: `Northeast Asia (Seoul)` 선택 (한국 사용자 최적화)

### 1.2 데이터베이스 테이블 생성

SQL Editor에서 다음 쿼리 실행:

```sql
-- tests 테이블 생성
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

-- 샘플 데이터 (테스트용)
INSERT INTO tests (slug, title_ko, title_en, title_ja, title_zh_cn, thumbnail, tags, play_count) VALUES
('mbti-personality', 'MBTI 성격 유형 테스트', 'MBTI Personality Test', 'MBTI性格タイプテスト', 'MBTI人格类型测试', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=680&h=384&fit=crop', '["personality", "mbti"]', 1250),
('love-style', '나의 연애 스타일은?', 'What''s My Love Style?', '私の恋愛スタイルは？', '我的恋爱风格是什么？', 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=680&h=384&fit=crop', '["love", "personality"]', 3420);
```

### 1.3 API 키 확인

1. Supabase 프로젝트 설정 → API
2. **Project URL** 복사
3. **anon public** 키 복사

## 2️⃣ Vercel 배포 (추천)

### 2.1 GitHub 리포지토리 생성

```bash
cd quizoasis
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/quizoasis.git
git push -u origin main
```

### 2.2 Vercel 배포

1. [Vercel](https://vercel.com) 접속
2. "Import Project" 클릭
3. GitHub 리포지토리 선택
4. 프로젝트 설정:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. **Environment Variables** 추가:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

6. "Deploy" 클릭

### 2.3 커스텀 도메인 연결

1. Vercel 프로젝트 → Settings → Domains
2. 도메인 입력 (예: `quizoasis.com`)
3. DNS 설정에 CNAME 추가:
   ```
   CNAME @ cname.vercel-dns.com
   ```

## 3️⃣ Cloudflare Pages 배포

### 3.1 GitHub 연동

1. [Cloudflare Dashboard](https://dash.cloudflare.com) 접속
2. Workers & Pages → Create application → Pages → Connect to Git
3. GitHub 리포지토리 선택

### 3.2 빌드 설정

- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `.next`

### 3.3 환경 변수

Settings → Environment variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3.4 CDN 캐싱 최적화

Cloudflare Dashboard → Rules → Page Rules:

1. **이미지 캐싱**:
   - URL: `*quizoasis.com/images/*`
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 month

2. **정적 파일 캐싱**:
   - URL: `*quizoasis.com/_next/static/*`
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 year

## 4️⃣ Google AdSense 설정

### 4.1 AdSense 가입

1. [Google AdSense](https://www.google.com/adsense/) 가입
2. 웹사이트 URL 입력
3. 승인 대기 (1-2주)

### 4.2 광고 코드 추가

`app/[locale]/layout.tsx` 파일 수정:

```tsx
<head>
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
    crossOrigin="anonymous"
  ></script>
</head>
```

### 4.3 광고 컴포넌트 생성

`components/AdBanner.tsx`:

```tsx
'use client';

import { useEffect } from 'react';

export default function AdBanner({ slot }: { slot: string }) {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
```

### 4.4 광고 배치

- **메인 페이지**: 최신 테스트 영역 하단
- **테스트 페이지**: 문제 사이 (5번째 문제 후)
- **결과 페이지**: 결과 하단

## 5️⃣ 성능 최적화

### 5.1 이미지 최적화

썸네일 이미지를 WebP 포맷으로 변환:

```bash
# Sharp 설치
npm install -g sharp-cli

# 이미지 변환
sharp -i public/images/*.jpg -o public/images/ -f webp -q 85
```

### 5.2 Lighthouse 점수 확인

Chrome DevTools → Lighthouse:
- Performance: 95+ 목표
- SEO: 100 목표
- Best Practices: 95+ 목표

### 5.3 번들 사이즈 최적화

```bash
# 번들 분석
npm install -g @next/bundle-analyzer
npm run build
```

## 6️⃣ 모니터링 설정

### 6.1 Google Analytics 4

```tsx
// app/[locale]/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 6.2 Vercel Analytics

Vercel 대시보드에서 자동으로 활성화됨.

## 7️⃣ SEO 최적화

### 7.1 sitemap.xml 생성

`app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://quizoasis.com';
  
  const routes = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    // 테스트 페이지들 추가
  ]);

  return routes;
}
```

### 7.2 robots.txt

`public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://quizoasis.com/sitemap.xml
```

## 8️⃣ 런칭 체크리스트

- [ ] 모든 페이지 테스트 (7개 언어)
- [ ] 모바일 반응형 확인 (갤럭시 폴드 포함)
- [ ] Lighthouse 점수 확인
- [ ] 404 페이지 확인
- [ ] 오류 모니터링 설정
- [ ] 백업 설정
- [ ] SSL 인증서 확인
- [ ] 소셜 미디어 계정 연동
- [ ] 첫 번째 심리테스트 준비
- [ ] 런칭 공지

## 🔄 CI/CD 파이프라인

### GitHub Actions 설정

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 지원

문제가 발생하면 이슈를 등록해주세요!

---

**배포 성공을 기원합니다! 🚀**


