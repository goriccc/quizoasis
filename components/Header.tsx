'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, Search, Globe, X } from 'lucide-react';
import { locales, localeNames, Locale } from '@/i18n';
import Link from 'next/link';
import Image from 'next/image';
import { getThumbnailUrl } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('header');
  const ts = useTranslations('search');
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // 언어 변경
  const changeLanguage = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(-[A-Z]{2})?/, '');
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsLanguageOpen(false);
  };

  // 검색 처리
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    router.push(`/${locale}/search?q=${encodeURIComponent(q)}`);
    setIsSearchOpen(false);
  };

  // 실시간 검색 (디바운스 + AbortController)
  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const q = searchQuery.trim();
    if (!isSearchOpen) return;
    if (q.length === 0) { setSearchResults([]); return; }
    setSearchLoading(true);
    const h = setTimeout(async () => {
      try {
        const res = await fetch(`/api/tests/search?locale=${locale}&q=${encodeURIComponent(q)}&limit=10`, { cache: 'no-store', signal: controller.signal });
        const data = await res.json();
        if (active) {
          setSearchResults(Array.isArray(data.tests) ? data.tests : []);
        }
      } catch (e) {
        if (active) setSearchResults([]);
      } finally {
        if (active) setSearchLoading(false);
      }
    }, 150);
    return () => { active = false; clearTimeout(h); controller.abort(); };
  }, [searchQuery, isSearchOpen, locale]);

  // 모달 열릴 때 1회 프리페치(캐시 워밍)
  useEffect(() => {
    if (!isSearchOpen) return;
    if (searchQuery.trim().length > 0) return;
    (async () => {
      try {
        const res = await fetch(`/api/tests/search?locale=${locale}&limit=10`, { cache: 'no-store' });
        const data = await res.json();
        setSearchResults(Array.isArray(data.tests) ? data.tests : []);
      } catch {}
    })();
  }, [isSearchOpen, locale]);

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
        {/* 좌측: 햄버거 메뉴 + 검색 */}
        <div className="flex items-center" style={{ gap: '5px' }}>
          {/* 햄버거 메뉴 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-0 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Menu"
          >
            <Menu width={24} height={24} />
          </button>

          {/* 검색 아이콘 */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-0 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label={t('search')}
            style={{ transform: 'translateX(4px)' }}
          >
            <Search width={24} height={24} />
          </button>
        </div>

        {/* 중앙: 타이틀 */}
        <Link href={`/${locale}`} className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
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

        {/* 우측: 얼굴 텍스트 + 언어 선택 */}
        <div className="flex items-center" style={{ gap: '5px' }}>
          {/* 얼굴 텍스트 */}
          <Link
            href={`/${locale}/face`}
            className="text-sm font-medium hover:text-primary-600 transition-colors cursor-pointer"
            style={{ transform: 'translateX(-4px)' }}
          >
            {t('face')}
          </Link>

          {/* 언어 선택 */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLanguageOpen(!isLanguageOpen);
              }}
              className="p-0 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Language"
              style={{ transform: 'translateY(2px)' }}
            >
              <Globe width={24} height={24} />
            </button>

            {/* 언어 드롭다운 */}
            {isLanguageOpen && (
              <div 
                className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden min-w-[160px] border border-gray-200 z-50"
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
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer ${
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
      </div>

      {/* 햄버거 메뉴 드롭다운 */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <Link
              href={`/${locale}/feedback`}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              {t('menu.feedback')}
            </Link>
            <Link
              href={`/${locale}/report`}
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
              {t('menu.report')}
            </Link>
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
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              {searchQuery.trim().length === 0 && (
                <p className="text-gray-500 text-sm">{ts('placeholder')}</p>
              )}
              {searchQuery.trim().length > 0 && (
                <div className="space-y-3" style={{ maxHeight: '420px', overflowY: 'auto' }}>
                  {searchLoading && (
                    <p className="text-gray-500 text-sm">{ts('loading')}</p>
                  )}
                  {!searchLoading && searchResults.length === 0 && (
                    <p className="text-gray-500 text-sm">{ts('empty')}</p>
                  )}
                  {!searchLoading && searchResults.length > 0 && (
                    <ul className="divide-y divide-gray-100">
                      {searchResults.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/${locale}/test/${item.slug}`}
                            className="flex items-center gap-3 py-2 hover:bg-gray-50 rounded px-2"
                            onClick={() => setIsSearchOpen(false)}
                          >
                            <div className="relative flex-shrink-0 rounded overflow-hidden bg-gray-100" style={{ width: '96px', height: '60px' }}>
                              <Image
                                src={getThumbnailUrl(item.thumbnail)}
                                alt={typeof item.title === 'string' ? item.title : 'thumbnail'}
                                fill
                                sizes="96px"
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-800 truncate">{item.title}</p>
                              <p className="text-xs text-gray-500 truncate">{(item.tags || []).join(', ')}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
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

