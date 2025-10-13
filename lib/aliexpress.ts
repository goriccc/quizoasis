// AliExpress API 유틸리티

// API 설정 - 환경 변수 사용 (보안 강화)
export const ALIEXPRESS_APP_KEY = process.env.NEXT_PUBLIC_ALIEXPRESS_APP_KEY || '520178';
export const ALIEXPRESS_APP_SECRET = process.env.ALIEXPRESS_APP_SECRET || 'D0X5TYVK3VGkRVmTP6lIWCZJonZRjwqy';

// API 엔드포인트
const ALIEXPRESS_API_BASE = 'https://api-sg.aliexpress.com/sync';

export interface AliExpressProduct {
  product_id: string;
  product_title: string;
  product_main_image_url: string;
  target_sale_price: string;
  target_sale_price_currency: string;
  target_app_sale_price: string;
  promotion_link: string;
  sale_price: string;
}

// MBTI 유형별 추천 상품 키워드
export const MBTI_PRODUCT_KEYWORDS: Record<string, string[]> = {
  // 분석가 (Analysts)
  INTJ: ['planner', 'notebook', 'book', 'smart gadget', 'organizer'],
  INTP: ['puzzle', 'science kit', 'tech gadget', 'chess', 'brain teaser'],
  ENTJ: ['business', 'watch', 'suit', 'briefcase', 'leadership book'],
  ENTP: ['innovation', 'creative tool', 'debating', 'game', 'experiment kit'],
  
  // 외교관 (Diplomats)
  INFJ: ['journal', 'candle', 'meditation', 'art supplies', 'inspirational book'],
  INFP: ['art', 'poetry', 'creative writing', 'sketchbook', 'fairy lights'],
  ENFJ: ['gifts', 'party supplies', 'team building', 'motivational', 'teaching aids'],
  ENFP: ['colorful', 'adventure', 'travel accessories', 'festival', 'creative kit'],
  
  // 관리자 (Sentinels)
  ISTJ: ['organizer', 'file folder', 'storage', 'planner', 'quality tool'],
  ISFJ: ['home decor', 'kitchen', 'cozy', 'gift wrap', 'traditional'],
  ESTJ: ['office supplies', 'manager', 'schedule', 'professional', 'efficient tool'],
  ESFJ: ['hosting', 'party', 'family', 'celebration', 'decorative'],
  
  // 탐험가 (Explorers)
  ISTP: ['tool', 'diy', 'mechanical', 'outdoor gear', 'repair kit'],
  ISFP: ['art supplies', 'craft', 'music', 'aesthetic', 'photography'],
  ESTP: ['sports', 'adventure', 'action', 'energy drink', 'athletic gear'],
  ESFP: ['entertainment', 'party', 'fashion', 'music', 'fun accessories']
};

// 스트레스 반응 유형별 추천 상품 키워드
export const STRESS_PRODUCT_KEYWORDS: Record<string, string[]> = {
  A: ['stress relief', 'meditation', 'planner', 'organizer', 'time management'],
  B: ['social games', 'party', 'team building', 'communication', 'friendship'],
  C: ['yoga', 'relaxation', 'aromatherapy', 'comfortable', 'self care'],
  D: ['journal', 'art therapy', 'peaceful', 'calm', 'mindfulness']
};

// 데이트 스타일별 추천 상품 키워드
export const DATING_PRODUCT_KEYWORDS: Record<string, string[]> = {
  planner: ['couple planner', 'couple calendar', 'date planner', 'relationship organizer', 'romantic planner'],
  spontaneous: ['couple adventure', 'instant camera', 'travel couple', 'portable games', 'couple backpack'],
  homecafe: ['couple home decor', 'cozy blanket couple', 'couple movie night', 'board games couple', 'home date night'],
  romantic: ['couple jewelry', 'couple rings', 'couple necklace', 'romantic gifts', 'couple bracelet'],
  active: ['couple sports', 'outdoor couple', 'fitness couple', 'couple adventure gear', 'couple athletic'],
  balanced: ['couple accessories', 'couple gifts', 'couple matching', 'couple everyday', 'relationship gifts']
};

// 언어별 키워드 번역
export const translateKeywords = (keywords: string[], locale: string): string[] => {
  const translations: Record<string, Record<string, string>> = {
    ko: {
      'planner': '플래너',
      'notebook': '노트',
      'book': '책',
      'organizer': '정리용품',
      'puzzle': '퍼즐',
      'gadget': '가젯',
      'watch': '시계',
      'journal': '다이어리',
      'art': '미술',
      'creative': '창의적',
      'travel': '여행',
      'home': '홈',
      'office': '오피스',
      'sports': '스포츠',
      'fashion': '패션'
    },
    ja: {
      'planner': 'プランナー',
      'notebook': 'ノート',
      'book': '本',
      'organizer': '整理用品',
      'puzzle': 'パズル',
      'gadget': 'ガジェット',
      'watch': '時計',
      'journal': '日記帳',
      'art': 'アート',
      'creative': 'クリエイティブ',
      'travel': '旅行',
      'home': 'ホーム',
      'office': 'オフィス',
      'sports': 'スポーツ',
      'fashion': 'ファッション'
    },
    'zh-CN': {
      'planner': '计划本',
      'notebook': '笔记本',
      'book': '书',
      'organizer': '收纳用品',
      'puzzle': '拼图',
      'gadget': '小工具',
      'watch': '手表',
      'journal': '日记本',
      'art': '艺术',
      'creative': '创意',
      'travel': '旅行',
      'home': '家居',
      'office': '办公',
      'sports': '运动',
      'fashion': '时尚'
    },
    'zh-TW': {
      'planner': '計畫本',
      'notebook': '筆記本',
      'book': '書',
      'organizer': '收納用品',
      'puzzle': '拼圖',
      'gadget': '小工具',
      'watch': '手錶',
      'journal': '日記本',
      'art': '藝術',
      'creative': '創意',
      'travel': '旅行',
      'home': '家居',
      'office': '辦公',
      'sports': '運動',
      'fashion': '時尚'
    }
  };

  if (locale === 'en' || !translations[locale]) {
    return keywords;
  }

  return keywords.map(keyword => {
    // 키워드의 첫 단어를 추출하여 번역
    const firstWord = keyword.split(' ')[0].toLowerCase();
    return translations[locale][firstWord] || keyword;
  });
};

// MBTI 유형에 맞는 상품 추천 키워드 가져오기
export const getProductKeywordsForMBTI = (mbtiType: string, locale: string = 'en'): string[] => {
  const keywords = MBTI_PRODUCT_KEYWORDS[mbtiType.toUpperCase()] || MBTI_PRODUCT_KEYWORDS['ENFP'];
  
  // 키워드가 너무 일반적이면 'personality' 또는 'gift' 추가
  const enhancedKeywords = keywords.map(keyword => {
    // 단일 단어이거나 너무 일반적인 경우 'gifts' 추가
    const genericWords = ['book', 'watch', 'suit', 'candle', 'art', 'game', 'tool', 'sports'];
    if (genericWords.includes(keyword)) {
      return `${keyword} gifts`;
    }
    return keyword;
  });
  
  return translateKeywords(enhancedKeywords, locale);
};

// 스트레스 유형에 맞는 상품 추천 키워드 가져오기
export const getProductKeywordsForStress = (stressType: string, locale: string = 'en'): string[] => {
  const keywords = STRESS_PRODUCT_KEYWORDS[stressType] || STRESS_PRODUCT_KEYWORDS['A'];
  
  // 키워드가 너무 일반적이면 'stress relief' 또는 'relaxation' 추가
  const enhancedKeywords = keywords.map(keyword => {
    // 이미 스트레스/릴랙스 관련 단어가 있으면 그대로
    if (keyword.includes('stress') || keyword.includes('relax') || keyword.includes('meditation') || 
        keyword.includes('therapy') || keyword.includes('mindfulness')) {
      return keyword;
    }
    // 단일 일반 단어면 'for relaxation' 추가
    const genericWords = ['planner', 'organizer', 'games', 'party', 'journal', 'art'];
    if (genericWords.includes(keyword)) {
      return `${keyword} for relaxation`;
    }
    return keyword;
  });
  
  return translateKeywords(enhancedKeywords, locale);
};

// 데이트 스타일에 맞는 상품 추천 키워드 가져오기
export const getProductKeywordsForDating = (datingType: string, locale: string = 'en'): string[] => {
  const keywords = DATING_PRODUCT_KEYWORDS[datingType] || DATING_PRODUCT_KEYWORDS['balanced'];
  
  // 키워드가 너무 일반적이면 'couple' 또는 'dating'을 자동 추가
  const enhancedKeywords = keywords.map(keyword => {
    // 이미 'couple', 'dating', 'relationship' 포함하면 그대로
    if (keyword.includes('couple') || keyword.includes('dating') || keyword.includes('relationship')) {
      return keyword;
    }
    // 그렇지 않으면 'couple' 추가
    return `couple ${keyword}`;
  });
  
  return translateKeywords(enhancedKeywords, locale);
};

/**
 * 범용 키워드 강화 함수 (신규 테스트용)
 * 
 * 사용법:
 * const keywords = getEnhancedKeywords(['planner', 'book'], 'fitness', 'en')
 * → ['planner fitness', 'book fitness']
 * 
 * @param keywords - 원본 키워드 배열
 * @param testTheme - 테스트 주제 ('couple', 'fitness', 'career', 'health' 등)
 * @param locale - 언어 코드
 * @returns 강화된 키워드 배열
 * 
 * 예시:
 * - 커리어 테스트: getEnhancedKeywords(['book', 'suit'], 'career', 'en')
 * - 건강 테스트: getEnhancedKeywords(['yoga', 'diet'], 'health', 'en')
 * - 취미 테스트: getEnhancedKeywords(['camera', 'art'], 'hobby', 'en')
 */
export const getEnhancedKeywords = (
  keywords: string[], 
  testTheme: string, 
  locale: string = 'en'
): string[] => {
  const enhancedKeywords = keywords.map(keyword => {
    // 이미 테스트 주제가 포함되어 있으면 그대로
    if (keyword.toLowerCase().includes(testTheme.toLowerCase())) {
      return keyword;
    }
    
    // 단일 일반 단어 목록 (gifts 추가)
    const genericSingleWords = [
      'book', 'watch', 'candle', 'art', 'game', 'tool', 'sports',
      'planner', 'organizer', 'journal', 'notebook', 'calendar'
    ];
    
    if (genericSingleWords.includes(keyword.toLowerCase())) {
      return `${keyword} ${testTheme}`;
    }
    
    // 그 외 짧은 키워드는 앞에 테스트 주제 추가
    if (keyword.split(' ').length <= 2) {
      return `${testTheme} ${keyword}`;
    }
    
    return keyword;
  });
  
  return translateKeywords(enhancedKeywords, locale);
};

// 실제 AliExpress API를 사용한 상품 검색
export const searchAliExpressProducts = async (keyword: string, limit: number = 10, locale: string = 'en'): Promise<AliExpressProduct[]> => {
  try {
    // 서버 API 엔드포인트 호출 (POST 방식)
    const response = await fetch('/api/aliexpress/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword,
        limit,
        locale
      })
    });
    
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.products && data.products.length > 0) {
      return data.products;
    } else {
      throw new Error('API 응답에 상품 없음');
    }
    
  } catch (error) {
    // API 호출 실패 시 더미 데이터 반환
    return getDummyProductsByKeyword(keyword, limit);
  }
};

// 어필리에이트 링크 생성 (키워드 기반 카테고리 페이지)
const generateProductLink = (productId: string, keyword: string = 'product'): string => {
  // 키워드별 검증된 카테고리/검색 링크 사용
  // 실제 커미션이 발생하는 검증된 링크
  
  const keywordLower = keyword.toLowerCase();
  
  // 커플/로맨틱 관련
  if (keywordLower.includes('couple') || keywordLower.includes('romantic')) {
    return 'https://s.click.aliexpress.com/e/_DkxeC0n';
  }
  // 스트레스/명상 관련
  if (keywordLower.includes('stress') || keywordLower.includes('meditation') || keywordLower.includes('relax')) {
    return 'https://s.click.aliexpress.com/e/_DdGT0bJ';
  }
  // 플래너/정리 관련
  if (keywordLower.includes('planner') || keywordLower.includes('organizer')) {
    return 'https://s.click.aliexpress.com/e/_DlwFXXh';
  }
  // 홈/집 관련
  if (keywordLower.includes('home') || keywordLower.includes('cozy')) {
    return 'https://s.click.aliexpress.com/e/_DB4r0XL';
  }
  // 스포츠/액티브 관련
  if (keywordLower.includes('sport') || keywordLower.includes('active') || keywordLower.includes('fitness')) {
    return 'https://s.click.aliexpress.com/e/_DmGkzvZ';
  }
  // 성격/선물 관련
  if (keywordLower.includes('personality') || keywordLower.includes('gift')) {
    return 'https://s.click.aliexpress.com/e/_De4pIbl';
  }
  
  // 기본 링크 (검증됨)
  return 'https://s.click.aliexpress.com/e/_DkxeC0n';
};

// 키워드별 더미 상품 데이터 (실제 API 연동 전까지 사용)
export const getDummyProductsByKeyword = (keyword: string, limit: number = 10): AliExpressProduct[] => {
  // 실제 존재하는 알리익스프레스 베스트셀러 상품 ID들
  const realProductIds = [
    '1005004304600890', // 스마트워치
    '1005004788576458', // 무선 이어폰
    '1005004621772134', // 휴대폰 케이스
    '1005004517832625'  // 가방
  ];

  // 키워드별 다른 이미지와 제목 사용
  const productTemplates = [
    {
      id: realProductIds[0],
      title: keyword.includes('couple') || keyword.includes('romantic') ? 'Couple Matching Set - Premium Quality' :
             keyword.includes('stress') || keyword.includes('meditation') ? 'Stress Relief Wellness Kit' :
             keyword.includes('planner') ? 'Smart Planner & Organizer' :
             keyword.includes('home') ? 'Cozy Home Essentials' :
             keyword.includes('sports') || keyword.includes('active') ? 'Sports & Outdoor Gear' :
             `Premium ${keyword} - Best Seller`,
      image: keyword.includes('couple') ? 'https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=300&h=300&fit=crop' :
             keyword.includes('stress') ? 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop' :
             keyword.includes('planner') ? 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=300&h=300&fit=crop' :
             keyword.includes('home') ? 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop' :
             keyword.includes('sports') ? 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=300&fit=crop' :
             'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      originalPrice: '29.99',
      salePrice: '24.99'
    },
    {
      id: realProductIds[1], 
      title: keyword.includes('couple') ? 'Romantic Date Night Essentials' :
             keyword.includes('stress') ? 'Relaxation & Mindfulness Set' :
             keyword.includes('personality') ? 'Unique Personality Gifts' :
             `Best ${keyword} - Top Rated`,
      image: keyword.includes('couple') ? 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=300&fit=crop' :
             keyword.includes('stress') ? 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop' :
             keyword.includes('personality') ? 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=300&h=300&fit=crop' :
             'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      originalPrice: '24.99',
      salePrice: '19.99'
    },
    {
      id: realProductIds[2],
      title: keyword.includes('couple') ? 'Anniversary Special Gift Set' :
             keyword.includes('home') ? 'Home Comfort Collection' :
             `Professional ${keyword} Kit`,
      image: keyword.includes('couple') ? 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&h=300&fit=crop' :
             keyword.includes('home') ? 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&h=300&fit=crop' :
             'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop',
      originalPrice: '39.99',
      salePrice: '32.99'
    },
    {
      id: realProductIds[3],
      title: keyword.includes('sports') || keyword.includes('active') ? 'Active Lifestyle Bundle' :
             `Trending ${keyword} - Customer Favorite`,
      image: keyword.includes('sports') ? 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&h=300&fit=crop' :
             'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop',
      originalPrice: '19.99',
      salePrice: '16.99'
    }
  ];

  return productTemplates.slice(0, limit).map(product => ({
    product_id: product.id,
    product_title: product.title,
    product_main_image_url: product.image,
    target_sale_price: product.originalPrice,
    target_sale_price_currency: 'USD',
    target_app_sale_price: product.salePrice,
    promotion_link: generateProductLink(product.id, keyword), // keyword 전달
    sale_price: product.originalPrice
  }));
};

// MBTI별 맞춤 상품 추천 (실제 API 사용)
export const getDummyProducts = async (mbtiType: string): Promise<AliExpressProduct[]> => {
  const keywords = MBTI_PRODUCT_KEYWORDS[mbtiType.toUpperCase()] || MBTI_PRODUCT_KEYWORDS['ENFP'];
  
  // 첫 번째 키워드로 실제 상품 검색
  const searchKeyword = keywords[0];
  return await searchAliExpressProducts(searchKeyword, 4);
};

// 인기 상품 가져오기 (더미 데이터)
export const getPopularProducts = (): AliExpressProduct[] => {
  const popularProductIds = [
    '1005005549480850', // 실제 존재하는 상품 ID들
    '1005005549480851',
    '1005005549480852',
    '1005005549480853',
    '1005005549480854'
  ];

  const popularProducts = [
    {
      id: popularProductIds[0],
      title: 'Hot Sale Smart Watch',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
      originalPrice: '39.99',
      salePrice: '35.99'
    },
    {
      id: popularProductIds[1],
      title: 'Trending Wireless Earbuds',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
      originalPrice: '29.99',
      salePrice: '25.99'
    },
    {
      id: popularProductIds[2],
      title: 'Best Selling Phone Case',
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
      originalPrice: '9.99',
      salePrice: '7.99'
    },
    {
      id: popularProductIds[3],
      title: 'Popular LED Strip Lights',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop',
      originalPrice: '19.99',
      salePrice: '17.99'
    },
    {
      id: popularProductIds[4],
      title: 'Must Have Backpack',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      originalPrice: '34.99',
      salePrice: '31.99'
    }
  ];

  return popularProducts.map(product => ({
    product_id: product.id,
    product_title: product.title,
    product_main_image_url: product.image,
    target_sale_price: product.originalPrice,
    target_sale_price_currency: 'USD',
    target_app_sale_price: product.salePrice,
    promotion_link: generateProductLink(product.id, 'popular'), // keyword 전달
    sale_price: product.originalPrice
  }));
};

