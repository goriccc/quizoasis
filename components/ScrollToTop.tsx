'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD = 300;

export default function ScrollToTop() {
  const t = useTranslations('scrollToTop');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t('label')}
      className="fixed bottom-5 right-4 z-40 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl active:scale-95 sm:bottom-6 sm:right-6 sm:gap-2 sm:px-5 sm:py-3"
    >
      <ChevronUp size={18} className="flex-shrink-0" aria-hidden="true" />
      <span>{t('label')}</span>
    </button>
  );
}
