import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    locale: string;
  };
}

export default function FortunePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">운세 페이지</h1>
      <p className="text-gray-600">
        이 페이지는 추후 구현될 예정입니다.
      </p>
    </div>
  );
}


