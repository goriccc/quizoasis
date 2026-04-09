'use client';

import type { IframeHTMLAttributes } from 'react';

const START_SRC =
  'https://ads-partners.coupang.com/widgets.html?id=979441&template=carousel&trackingCode=AF1549553&subId=&width=680&height=140&tsource=';
const POPUP_SRC =
  'https://ads-partners.coupang.com/widgets.html?id=979440&template=carousel&trackingCode=AF1549553&subId=&width=300&height=250&tsource=';

type CoupangAffiliateIframeProps = {
  variant: 'start' | 'popup';
  className?: string;
};

export default function CoupangAffiliateIframe({
  variant,
  className = '',
}: CoupangAffiliateIframeProps) {
  const isStart = variant === 'start';
  const width = isStart ? 680 : 300;
  const height = isStart ? 140 : 250;
  const src = isStart ? START_SRC : POPUP_SRC;

  return (
    <span className={`inline-block max-w-full align-top ${className}`.trim()}>
      <iframe
        src={src}
        width={width}
        height={height}
        title="쿠팡 파트너스"
        frameBorder={0}
        scrolling="no"
        referrerPolicy="unsafe-url"
        className="border-0 max-w-full"
        style={isStart ? { maxWidth: 'min(100%, 680px)', verticalAlign: 'top' } : undefined}
        {...({ browsingtopics: '' } as IframeHTMLAttributes<HTMLIFrameElement>)}
      />
    </span>
  );
}
