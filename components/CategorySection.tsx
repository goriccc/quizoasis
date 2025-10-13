'use client';

import { useTranslations } from 'next-intl';
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
}

export default function CategorySection({ tests, categoryName, locale }: CategorySectionProps) {
  const t = useTranslations();

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-1 sm:px-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800">
          {t('sections.category')} : {categoryName === 'all' ? t('tags.all') : `#${categoryName}`}
        </h2>
        
        {/* 반응형 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <Link
              key={test.id}
              href={`/${locale}/test/${test.slug}`}
              className="group"
              prefetch={true}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md card-hover bg-white">
                {/* 썸네일 */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={getThumbnailUrl(test.thumbnail)}
                    alt={test.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    loading="eager"
                    quality={85}
                  />
                  
                  {/* 플레이 횟수 - 우측 하단 */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm">
                    <Play size={14} fill="white" />
                    <span>{formatPlayCount(test.playCount, locale)}</span>
                  </div>
                </div>
              </div>
              
              {/* 타이틀 */}
              <h3 className="mt-3 font-semibold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-2 px-1">
                {test.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

