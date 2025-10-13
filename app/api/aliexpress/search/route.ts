import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// AliExpress API 설정
const APP_KEY = process.env.ALIEXPRESS_APP_KEY!;
const APP_SECRET = process.env.ALIEXPRESS_APP_SECRET!;
const API_BASE = 'https://api-sg.aliexpress.com/sync';

// HMAC-SHA256 서명 생성
function generateSignature(params: Record<string, any>, secret: string): string {
  const sortedKeys = Object.keys(params).sort();
  const concatenated = sortedKeys.map(key => `${key}${params[key]}`).join('');
  return crypto.createHmac('sha256', secret).update(concatenated).digest('hex').toUpperCase();
}

// AliExpress API 호출
async function callAliExpressAPI(method: string, params: Record<string, any>) {
  const timestamp = Date.now().toString();
  
  const apiParams: Record<string, any> = {
    method,
    app_key: APP_KEY,
    timestamp,
    sign_method: 'sha256',
    ...params
  };

  const sign = generateSignature(apiParams, APP_SECRET);
  apiParams.sign = sign;

  const queryString = new URLSearchParams(apiParams).toString();
  const url = `${API_BASE}?${queryString}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('AliExpress API 호출 실패:', error);
    throw error;
  }
}

// 상품 검색 API (POST 메서드)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const keyword = body.keyword || 'fashion';
    const limit = body.limit || 10;
    const locale = body.locale || 'en';

    // AliExpress Affiliate 상품 검색 API 호출 (Advanced API)
    const response = await callAliExpressAPI('aliexpress.affiliate.product.query', {
      keywords: keyword,
      target_currency: 'USD',
      target_language: locale === 'ko' ? 'KO' : 'EN',
      page_no: '1',
      page_size: limit.toString(),
      sort: 'SALE_PRICE_ASC',
      ship_to_country: 'US'
    });

    if (response.error_response) {
      console.error('AliExpress API 에러:', response.error_response);
      throw new Error(response.error_response.msg);
    }

    // 응답 데이터 파싱
    const result = response.aliexpress_affiliate_product_query_response?.resp_result;
    
    if (!result || !result.result) {
      return NextResponse.json({
        success: false,
        products: []
      });
    }

    // products가 배열인지 객체인지 확인
    const productsData = result.result.products;
    
    // products가 객체면 products.product 배열 사용
    const products = Array.isArray(productsData) 
      ? productsData 
      : (productsData?.product || []);

    // 프론트엔드 형식에 맞게 변환
    const formattedProducts = products.map((product: any) => ({
      product_id: product.product_id,
      product_title: product.product_title,
      product_main_image_url: product.product_main_image_url,
      target_sale_price: product.target_sale_price,
      target_sale_price_currency: 'USD',
      target_app_sale_price: product.target_sale_price,
      promotion_link: product.promotion_link || `https://www.aliexpress.com/item/${product.product_id}.html`,
      sale_price: product.target_sale_price
    }));

    return NextResponse.json({
      success: true,
      products: formattedProducts,
      total: formattedProducts.length
    });

  } catch (error) {
    console.error('상품 검색 실패:', error);
    
    // 에러 시 빈 배열 반환 (더미 데이터는 클라이언트에서 처리)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch products',
      products: []
    });
  }
}

