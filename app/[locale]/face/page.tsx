import { setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    locale: string;
  };
}

export default function FacePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  // 헤더 "얼굴" 클릭 시, 홈으로 리다이렉트하며 태그=얼굴 필터 적용
  redirect(`/${locale}?tag=${encodeURIComponent('얼굴')}`);
}


