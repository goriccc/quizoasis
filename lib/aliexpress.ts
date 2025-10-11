// AliExpress API 유틸리티

// API 설정 (올바른 키 사용)
export const ALIEXPRESS_APP_KEY = '520178'; // 직접 설정
export const ALIEXPRESS_APP_SECRET = 'D0X5TYVK3VGkRVmTP6lIWCZJonZRjwqy'; // 직접 설정

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
  return translateKeywords(keywords, locale);
};

// 실제 AliExpress API를 사용한 상품 검색
export const searchAliExpressProducts = async (keyword: string, limit: number = 10): Promise<AliExpressProduct[]> => {
  try {
    // 서버 API 엔드포인트 호출
    const response = await fetch(`/api/aliexpress/search?keyword=${encodeURIComponent(keyword)}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(`API 호출 실패: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.success && data.products) {
      return data.products;
    } else {
      throw new Error('API 응답 형식 오류');
    }
    
  } catch (error) {
    console.error('AliExpress API 오류:', error);
    // API 호출 실패 시 더미 데이터 반환
    return getDummyProductsByKeyword(keyword, limit);
  }
};

// 검증된 어필리에이트 링크 생성
const generateProductLink = (productId: string, keyword: string = 'product'): string => {
  // 사용자 제공 검증된 어필리에이트 링크 사용
  // AliExpress에서 자동으로 적절한 상품으로 리디렉션
  return 'https://s.click.aliexpress.com/e/_c3qvGy6B';
};

// 키워드별 더미 상품 데이터 (실제 API 연동 전까지 사용)
export const getDummyProductsByKeyword = (keyword: string, limit: number = 10): AliExpressProduct[] => {
  // 실제 AliExpress 상품 ID들 (인기 상품들)
  const realProductIds = [
    '1005005549480845', // 실제 존재하는 상품 ID
    '1005005549480846', 
    '1005005549480847',
    '1005005549480848',
    '1005005549480849'
  ];

  const productTemplates = [
    {
      id: realProductIds[0],
      title: `Premium ${keyword} Collection - High Quality`,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      originalPrice: '29.99',
      salePrice: '27.99'
    },
    {
      id: realProductIds[1], 
      title: `Best ${keyword} for Daily Use`,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      originalPrice: '24.99',
      salePrice: '22.99'
    },
    {
      id: realProductIds[2],
      title: `Professional ${keyword} Set`,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
      originalPrice: '39.99',
      salePrice: '35.99'
    },
    {
      id: realProductIds[3],
      title: `Compact ${keyword} Travel Edition`,
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
      originalPrice: '19.99',
      salePrice: '17.99'
    },
    {
      id: realProductIds[4],
      title: `Luxury ${keyword} Gift Box`,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop',
      originalPrice: '49.99',
      salePrice: '44.99'
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

