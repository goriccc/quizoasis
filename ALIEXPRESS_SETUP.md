# AliExpress API 설정 가이드

## 개요
QuizOasis 프로젝트에 알리익스프레스 제품 추천 기능이 통합되었습니다.

## 주요 기능

### 1. MBTI별 맞춤 상품 추천
- 사용자의 MBTI 결과에 따라 맞춤형 상품 추천
- 16가지 MBTI 유형별로 최적화된 상품 키워드
- 다국어 지원 (영어, 일본어, 중국어 간체/번체, 베트남어, 인도네시아어)

### 2. 인기 상품 슬라이더
- 트렌딩 상품을 슬라이더 형식으로 표시
- 자동 스와이프 기능
- 반응형 디자인

## 환경 변수 설정

`.env.local` 파일에 다음 환경 변수를 추가하세요:

```bash
# AliExpress API
ALIEXPRESS_APP_KEY=D0X5TYVK3VGkRVmTP6lIWCZJonZRjwqy
ALIEXPRESS_APP_SECRET=your_app_secret_here
```

## 파일 구조

```
lib/
  └── aliexpress.ts          # AliExpress API 유틸리티 및 더미 데이터
components/
  └── ProductRecommendations.tsx  # 상품 추천 컴포넌트
  └── MBTITestClient.tsx     # MBTI 테스트 클라이언트 (상품 추천 통합)
```

## MBTI별 상품 키워드 매핑

### 분석가 (Analysts)
- **INTJ**: planner, notebook, book, smart gadget, organizer
- **INTP**: puzzle, science kit, tech gadget, chess, brain teaser
- **ENTJ**: business, watch, suit, briefcase, leadership book
- **ENTP**: innovation, creative tool, debating, game, experiment kit

### 외교관 (Diplomats)
- **INFJ**: journal, candle, meditation, art supplies, inspirational book
- **INFP**: art, poetry, creative writing, sketchbook, fairy lights
- **ENFJ**: gifts, party supplies, team building, motivational, teaching aids
- **ENFP**: colorful, adventure, travel accessories, festival, creative kit

### 관리자 (Sentinels)
- **ISTJ**: organizer, file folder, storage, planner, quality tool
- **ISFJ**: home decor, kitchen, cozy, gift wrap, traditional
- **ESTJ**: office supplies, manager, schedule, professional, efficient tool
- **ESFJ**: hosting, party, family, celebration, decorative

### 탐험가 (Explorers)
- **ISTP**: tool, diy, mechanical, outdoor gear, repair kit
- **ISFP**: art supplies, craft, music, aesthetic, photography
- **ESTP**: sports, adventure, action, energy drink, athletic gear
- **ESFP**: entertainment, party, fashion, music, fun accessories

## 현재 구현 상태

### ✅ 완료된 기능
1. MBTI별 상품 키워드 매핑
2. 다국어 키워드 번역 (한국어, 일본어, 중국어)
3. 상품 추천 컴포넌트 (슬라이더 UI)
4. MBTI 결과 페이지에 상품 추천 통합
5. 한국어는 쿠팡 광고, 다른 언어는 알리익스프레스 표시

### 🚧 향후 구현 예정
1. 실제 AliExpress API 연동
   - Product Search API
   - Affiliate Link Generator
2. 실시간 상품 가격 및 재고 업데이트
3. 상품 클릭 추적 및 분석
4. 더 정교한 상품 필터링

## 실제 API 연동 방법 (향후)

### 1. AliExpress Open Platform 설정
1. [AliExpress Open Platform](https://portals.aliexpress.com/) 접속
2. App Key와 App Secret 발급
3. `.env.local`에 키 값 입력

### 2. API 엔드포인트 구현
```typescript
// app/api/aliexpress/search/route.ts
export async function POST(request: Request) {
  const { keywords, locale } = await request.json();
  
  // AliExpress API 호출
  const products = await searchAliExpressProducts(keywords);
  
  return Response.json({ products });
}
```

### 3. 클라이언트에서 API 호출
```typescript
const fetchProducts = async (mbtiType: string) => {
  const keywords = getProductKeywordsForMBTI(mbtiType, locale);
  const response = await fetch('/api/aliexpress/search', {
    method: 'POST',
    body: JSON.stringify({ keywords, locale })
  });
  return response.json();
};
```

## 테스트

현재는 더미 데이터를 사용하여 UI 테스트가 가능합니다:

1. MBTI 테스트 완료
2. 결과 페이지에서 상품 추천 확인
3. 슬라이더 동작 확인
4. 다국어 표시 확인

## 수익화 전략

1. **클릭당 커미션**: 사용자가 추천 상품 클릭 → 구매 → 커미션 발생
2. **개인화된 추천**: MBTI별 맞춤 상품으로 전환율 향상
3. **다단계 추천**: 
   - 결과 페이지: MBTI별 맞춤 상품
   - 스크롤 하단: 인기 상품 슬라이더
4. **A/B 테스팅**: 다양한 상품 배치 및 디자인 테스트

## 주의사항

- 한국어 사용자에게는 쿠팡 광고만 표시됩니다
- 알리익스프레스 상품은 한국어 외 모든 언어에서 표시됩니다
- 현재는 더미 데이터를 사용하고 있으므로 실제 상품 정보와 다를 수 있습니다
- 실제 API 연동 시 사용량 제한 및 요금제를 확인하세요

## 문의

추가 기능이나 개선 사항이 있으면 알려주세요!

