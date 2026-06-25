'use client';

import { useTranslations } from 'next-intl';
import { AlertTriangle } from 'lucide-react';
import { AD_TRAFFIC_GUARD } from '@/lib/adTrafficGuard';

type Props = {
  ip: string;
  onClose: () => void;
};

export default function AdTrafficWarningModal({ ip, onClose }: Props) {
  const t = useTranslations('adTrafficGuard');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-60 animate-fade-in p-4">
      <div className="relative bg-white rounded-2xl w-full max-w-sm shadow-2xl animate-slide-up">
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
            {t('title')}
          </h3>

          <p className="text-gray-600 text-center text-sm whitespace-pre-line mb-4">
            {t('description', {
              days: AD_TRAFFIC_GUARD.PAUSE_DAYS,
              minutes: AD_TRAFFIC_GUARD.WINDOW_MINUTES,
            })}
          </p>

          <div className="bg-gray-50 rounded-lg px-4 py-3 mb-5 text-sm">
            <span className="text-gray-500">{t('ipLabel')}: </span>
            <span className="font-mono font-semibold text-gray-900 break-all">{ip}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {t('confirm')}
          </button>
        </div>
      </div>
    </div>
  );
}
