import { setRequestLocale, getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    locale: string;
  };
}

export default async function FacePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  // 고정 키 기반 필터로 리다이렉트 (클라이언트가 로케일별 라벨 매핑 처리)
  redirect(`/${locale}?tagKey=face`);
}


