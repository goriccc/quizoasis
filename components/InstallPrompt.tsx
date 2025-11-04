'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function InstallPrompt() {
  const t = useTranslations('installPrompt');
  const [showPrompt, setShowPrompt] = useState(false);
  const [dontShowFor24h, setDontShowFor24h] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [canInstall, setCanInstall] = useState(false);

  useEffect(() => {
    // 모바일 체크 (PC에서는 팝업 표시 안 함)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) return;

    // 설치된 앱 체크
    const isInstalled = 
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://');

    if (isInstalled) return;

    // beforeinstallprompt 이벤트 리스너 (Chrome/Edge 등 PWA 지원 브라우저)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setCanInstall(true);
    };

    // appinstalled 이벤트 리스너 (설치 완료 후)
    const handleAppInstalled = () => {
      setShowPrompt(false);
      setDeferredPrompt(null);
      setCanInstall(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // 체크박스로 "24시간 동안 안 보기"가 체크된 경우
    const check24h = localStorage.getItem('install-prompt-dont-show-24h');
    if (check24h) {
      const timestamp = parseInt(check24h, 10);
      const now = Date.now();
      if (now - timestamp < 86400000) {
        return; // 24시간 내에는 표시 안 함
      } else {
        localStorage.removeItem('install-prompt-dont-show-24h');
      }
    }

    // 1초 후 표시 (페이지 로딩 후)
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    setDeferredPrompt(null);
    setCanInstall(false);
    setShowPrompt(false);

    if (outcome === 'accepted') {
      console.log('✅ 사용자가 PWA 설치를 수락했습니다.');
    } else {
      console.log('❌ 사용자가 PWA 설치를 거부했습니다.');
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
    // 체크박스가 체크된 경우에만 24시간 동안 표시 안 함
    if (dontShowFor24h) {
      localStorage.setItem('install-prompt-dont-show-24h', Date.now().toString());
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="relative bg-white rounded-2xl w-full max-w-sm shadow-2xl animate-slide-up mx-4">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={t('close')}
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-6 pt-6">
          {/* Logo */}
          <div className="flex justify-center mb-1">
            <Image src="/logo.svg" alt="QuizOasis" width={180} height={72} priority />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
            {t('title')}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-center mb-6 text-sm whitespace-pre-line">
            {t('description')}
          </p>

          {/* Instructions */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-700 space-y-2 overflow-hidden">
              <div className="flex items-start gap-3 min-w-0">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span className="min-w-0 flex-1">
                  {t('step1').split('[ICON]')[0]}
                  <img 
                    src="/iphone_shere.png" 
                    alt="iOS Share Icon" 
                    width="16" 
                    height="16" 
                    className="inline align-middle mx-0.5"
                    style={{ verticalAlign: 'middle' }}
                  />
                  {t('step1').split('[ICON]')[1] || ' 클릭'}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span dangerouslySetInnerHTML={{ __html: t('step2') }}></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>{t('step3')}</span>
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm mb-4">
            <input
              type="checkbox"
              id="dont-show-24h"
              checked={dontShowFor24h}
              onChange={(e) => setDontShowFor24h(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="dont-show-24h" className="text-gray-700 cursor-pointer">
              {t('dontShow24h')}
            </label>
          </div>

          {/* Install Button */}
          {canInstall && (
            <button
              onClick={handleInstall}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg"
            >
              {t('installButton')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
