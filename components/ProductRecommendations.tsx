'use client';

import { AliExpressProduct } from '@/lib/aliexpress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface ProductRecommendationsProps {
  products: AliExpressProduct[];
  title: string;
  locale: string;
}

export default function ProductRecommendations({ products, title, locale }: ProductRecommendationsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  if (products.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
        {title}
      </h3>

      {/* 슬라이더 */}
      <div className="relative">
        {/* 이전 버튼 */}
        {products.length > 1 && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}

        {/* 상품 카드 */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={product.product_id}
                className="w-full flex-shrink-0 px-2"
              >
                <a
                  href={product.promotion_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  {/* 상품 이미지 */}
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={product.product_main_image_url}
                      alt={product.product_title}
                      fill
                      sizes="300px"
                      priority
                      className="object-cover"
                    />
                    {/* 할인 배지 */}
                    {product.target_app_sale_price !== product.sale_price && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        SALE
                      </div>
                    )}
                  </div>

                  {/* 상품 정보 */}
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[40px]">
                      {product.product_title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div>
                        {product.target_app_sale_price !== product.sale_price && (
                          <span className="text-xs text-gray-400 line-through mr-2">
                            ${product.sale_price}
                          </span>
                        )}
                        <span className="text-lg font-bold text-orange-600">
                          ${product.target_app_sale_price || product.target_sale_price}
                        </span>
                      </div>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                        {locale === 'ko' ? '쇼핑하기' : 
                         locale === 'ja' ? 'ショップ' :
                         locale === 'zh-CN' || locale === 'zh-TW' ? '购物' :
                         locale === 'vi' ? 'Mua sắm' :
                         locale === 'id' ? 'Belanja' : 'Shop Now'}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 다음 버튼 */}
        {products.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>

      {/* 인디케이터 */}
      {products.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-orange-500 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* AliExpress 파트너 고지 */}
      <p className="text-xs text-gray-500 text-center mt-4">
        {locale === 'ko' ? '알리익스프레스 파트너스 추천 상품' :
         locale === 'ja' ? 'AliExpressパートナー推奨商品' :
         locale === 'zh-CN' ? 'AliExpress合作伙伴推荐产品' :
         locale === 'zh-TW' ? 'AliExpress合作夥伴推薦產品' :
         locale === 'vi' ? 'Sản phẩm đề xuất từ đối tác AliExpress' :
         locale === 'id' ? 'Produk rekomendasi mitra AliExpress' :
         'AliExpress Partner Recommended Products'}
      </p>
    </div>
  );
}

