'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, Search, Globe, X } from 'lucide-react';
import { locales, localeNames, Locale } from '@/i18n';
import Link from 'next/link';

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 언어 변경
  const changeLanguage = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsLanguageOpen(false);
  };

  // 검색 처리
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 검색 기능 구현
    console.log('Search:', searchQuery);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" 
      style={{ 
        fontFamily: "'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans', 'Noto Sans Fallback', 'Roboto', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
      data-font-force="true"
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-4 h-16 flex items-center justify-between">
        {/* 좌측: 햄버거 메뉴 + 검색 + 언어 */}
        <div className="flex items-center" style={{ gap: '5px' }}>
          {/* 햄버거 메뉴 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-0 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>

          {/* 검색 아이콘 */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-0 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={t('search')}
          >
            <Search size={24} />
          </button>

          {/* 언어 선택 (개발용 - 런칭 시 제거 가능) */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLanguageOpen(!isLanguageOpen);
              }}
              className="p-0 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Language"
            >
              <Globe size={24} />
            </button>

            {/* 언어 드롭다운 */}
            {isLanguageOpen && (
              <div 
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden min-w-[160px] border border-gray-200 z-50"
                onClick={(e) => e.stopPropagation()}
                style={{ 
                  fontFamily: "'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans', 'Roboto', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={(e) => {
                      e.stopPropagation();
                      changeLanguage(loc);
                    }}
                    style={{
                      fontFamily: "'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans', 'Roboto', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                      textRendering: 'optimizeLegibility',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                      locale === loc ? 'bg-primary-50 text-primary-600 font-semibold' : ''
                    }`}
                  >
                    {localeNames[loc]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 중앙: 타이틀 */}
        <Link href={`/${locale}`} className="absolute left-1/2 transform -translate-x-1/2">
          <h1 
            className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            style={{ 
              fontFamily: "'Noto Sans KR', 'Noto Sans JP', 'Noto Sans SC', 'Noto Sans TC', 'Noto Sans', 'Roboto', 'Roboto Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
          >
            {t('title')}
          </h1>
        </Link>

        {/* 우측: 네비게이션 */}
        <div className="flex items-center gap-4 translate-y-1">
          <Link
            href={`/${locale}/fortune`}
            className="text-sm font-medium hover:text-primary-600 transition-colors"
          >
            {t('fortune')}
          </Link>
          <Link
            href={`/${locale}/face`}
            className="text-sm font-medium hover:text-primary-600 transition-colors"
          >
            {t('face')}
          </Link>
        </div>
      </div>

      {/* 햄버거 메뉴 드롭다운 */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <button
              onClick={() => {
                // TODO: 의견 보내기 기능
                console.log('Feedback');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('menu.feedback')}
            </button>
            <button
              onClick={() => {
                // TODO: 오류 수정 요청 기능
                console.log('Report');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {t('menu.report')}
            </button>
          </div>
        </div>
      )}

      {/* 검색 모달 */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div className="p-4 border-b border-gray-200 flex items-center gap-3">
              <Search size={20} className="text-gray-400" />
              <form onSubmit={handleSearch} className="flex-1">
                <input
                  type="text"
                  placeholder={t('search')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full outline-none text-lg"
                  autoFocus
                />
              </form>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">검색 결과가 여기에 표시됩니다.</p>
            </div>
          </div>
        </div>
      )}

      {/* 오버레이 (메뉴/언어 닫기) */}
      {(isMenuOpen || isLanguageOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(false);
            setIsLanguageOpen(false);
          }}
        />
      )}
    </header>
  );
}

