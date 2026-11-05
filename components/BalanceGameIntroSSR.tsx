import { createTranslator } from 'next-intl';

type Props = {
  locale: string;
  title: string;
  thumbnail: string;
  messagesNamespace: string;
  /** Split (or merged) messages object that includes messagesNamespace */
  messages: Record<string, unknown>;
  playCount?: number;
};

/**
 * Server-rendered start shell for balance games (fast LCP / no blank wait).
 * Used as Suspense fallback while the interactive client island streams in.
 */
export default function BalanceGameIntroSSR({
  locale,
  title,
  thumbnail,
  messagesNamespace,
  messages,
  playCount = 0,
}: Props) {
  const ns = (messages[messagesNamespace] || {}) as Record<string, any>;
  const t = createTranslator({
    locale,
    messages: { [messagesNamespace]: ns },
    namespace: messagesNamespace,
  });

  const line = (key: string, fallback = '') => {
    try {
      const v = t(key as any);
      return typeof v === 'string' ? v : fallback;
    } catch {
      return fallback;
    }
  };

  const thumbSrc = thumbnail.startsWith('http')
    ? thumbnail
    : `/images/tests/${thumbnail}`;

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbSrc}
          alt={title}
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="p-6 md:p-10 text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{title}</h1>
        {playCount > 0 && (
          <p className="text-sm text-gray-500">{playCount.toLocaleString(locale)} plays</p>
        )}
        <div className="space-y-2 text-gray-700 text-base md:text-lg leading-relaxed">
          <p>{line('startMessage.line1')}</p>
          <p>{line('startMessage.line2')}</p>
          <p>{line('startMessage.line3')}</p>
        </div>
        <div
          className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold text-lg shadow-lg opacity-90"
          aria-hidden
        >
          {line('ui.startTest', 'START')}
        </div>
      </div>
    </div>
  );
}
