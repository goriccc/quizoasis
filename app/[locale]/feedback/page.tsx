'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function FeedbackPage() {
  const t = useTranslations('feedback');
  const locale = useLocale();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('new_test');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !details.trim()) return;
    setSubmitting(true);
    try {
      console.log('[feedback-form] Submitting:', { title, details, email, category, locale });
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, details, email, category, locale }),
      });
      
      const result = await res.json();
      console.log('[feedback-form] Response:', { status: res.status, result });
      
      if (res.ok && result.ok) {
        setDone(true);
      } else {
        console.error('[feedback-form] Submission failed:', result);
        alert('제출에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('[feedback-form] Error:', error);
      alert('제출 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">{t('successTitle')}</h1>
        <p className="text-gray-700 mb-6">{t('successDescription')}</p>
        <button className="px-4 py-2 bg-gray-800 text-white rounded" onClick={() => router.push(`/${locale}`)}>
          {t('goHome')}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <p className="text-gray-600 mb-6">{t('description')}</p>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">{t('fields.category')}</label>
          <select className="w-full border rounded px-3 py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="new_test">{t('categories.newTest')}</option>
            <option value="ux">{t('categories.ux')}</option>
            <option value="idea">{t('categories.idea')}</option>
            <option value="other">{t('categories.other')}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('fields.title')}</label>
          <input className="w-full border rounded px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('fields.details')}</label>
          <textarea className="w-full border rounded px-3 py-2 h-40" value={details} onChange={(e) => setDetails(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t('fields.email')}</label>
          <input className="w-full border rounded px-3 py-2" type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-60" disabled={submitting}>
          {submitting ? t('submitting') : t('submit')}
        </button>
      </form>
    </div>
  );
}


