'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { QuizTest } from '@/lib/types';
import { formatPlayCount, getThumbnailUrl } from '@/lib/utils';
import { Locale } from '@/i18n';

interface CategorySectionProps {
  tests: QuizTest[];
  categoryName: string;
  locale: Locale;
  showHeader?: boolean;
}

export default function CategorySection({ tests, categoryName, locale, showHeader = true }: CategorySectionProps) {
  const t = useTranslations();
  const currentLocale = useLocale();

  // 안전한 카테고리 이름 가져오기 함수
  const getSafeCategoryName = (category: string, fallbackLocale: string = 'ko') => {
    if (category === 'all') return t('tags.all');
    
    const tagTranslations: Record<string, Record<string, string>> = {
      '소통': {
        ko: '소통',
        en: 'Communication',
        ja: 'コミュニケーション',
        'zh-CN': '沟通',
        'zh-TW': '溝通',
        id: 'Komunikasi',
        vi: 'Giao tiếp'
      },
      '심리': {
        ko: '심리',
        en: 'Psychology',
        ja: '心理学',
        'zh-CN': '心理',
        'zh-TW': '心理',
        id: 'Psikologi',
        vi: 'Tâm lý'
      },
      '관계': {
        ko: '관계',
        en: 'Relationship',
        ja: '関係',
        'zh-CN': '关系',
        'zh-TW': '關係',
        id: 'Hubungan',
        vi: 'Mối quan hệ'
      },
      '우정': {
        ko: '우정',
        en: 'Friendship',
        ja: '友情',
        'zh-CN': '友谊',
        'zh-TW': '友誼',
        id: 'Persahabatan',
        vi: 'Tình bạn'
      },
      '성격': {
        ko: '성격',
        en: 'Personality',
        ja: '性格',
        'zh-CN': '性格',
        'zh-TW': '性格',
        id: 'Kepribadian',
        vi: 'Tính cách'
      }
    };
    
    return tagTranslations[category]?.[currentLocale] || 
           tagTranslations[category]?.[fallbackLocale] || 
           category;
  };

  // 안전한 제목 가져오기 함수
  const getSafeTitle = (test: QuizTest, fallbackLocale: string = 'ko') => {
    if (typeof test.title === 'string') {
      return test.title;
    }
    const titleObj = test.title as Record<string, string>;
    return titleObj[locale] || titleObj[fallbackLocale] || titleObj.en || 'Test Title';
  };

  return (
    <section className="pt-0 pb-6">
      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        {showHeader && (
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            {t('sections.category')} : {getSafeCategoryName(categoryName)}
          </h2>
        )}
        
        {/* 반응형 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <Link
              key={test.id}
              href={`/${locale}/test/${test.slug}`}
              className="group"
              prefetch={true}
            >
              <div className="bg-white rounded-lg shadow card-hover overflow-hidden">
                {/* 썸네일 */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={getThumbnailUrl(test.thumbnail)}
                    alt={getSafeTitle(test)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading="eager"
                    quality={85}
                  />
                  
                </div>
                
                {/* 타이틀과 플레이 횟수 */}
                <div className="p-4">
                  <div className="flex items-center justify-end gap-3">
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
                      {getSafeTitle(test)}
                    </h3>
                    <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors flex items-center gap-1.5 text-sm flex-shrink-0">
                      <Play size={14} />
                      <span>{formatPlayCount(test.playCount, locale)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

