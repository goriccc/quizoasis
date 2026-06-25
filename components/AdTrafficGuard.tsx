'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { initAdTrafficGuard } from '@/lib/adTrafficGuard';
import AdTrafficWarningModal from '@/components/AdTrafficWarningModal';

export default function AdTrafficGuard() {
  const t = useTranslations('adTrafficGuard');
  const [warningIp, setWarningIp] = useState<string | null>(null);

  useEffect(() => {
    initAdTrafficGuard();

    const showWarning = async () => {
      try {
        const res = await fetch('/api/client-ip');
        const data = await res.json();
        setWarningIp(typeof data?.ip === 'string' ? data.ip : t('ipUnknown'));
      } catch {
        setWarningIp(t('ipUnknown'));
      }
    };

    const onPause = (event: Event) => {
      const detail = (event as CustomEvent<{ newlyPaused?: boolean }>).detail;
      if (detail?.newlyPaused) {
        showWarning();
      }
    };

    window.addEventListener('quizoasis:ad-pause', onPause);
    return () => window.removeEventListener('quizoasis:ad-pause', onPause);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!warningIp) return null;

  return (
    <AdTrafficWarningModal
      ip={warningIp}
      onClose={() => setWarningIp(null)}
    />
  );
}
