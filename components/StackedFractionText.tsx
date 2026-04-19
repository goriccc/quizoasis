'use client';

import React from 'react';

const FRACTION_RE = /(\d+)\s*\/\s*(\d+)/g;

/**
 * 본문의 `a/b` 형태를 세로 분수(분자·분모)로 표시합니다.
 */
export default function StackedFractionText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(FRACTION_RE.source, 'g');

  while ((m = re.exec(text)) !== null) {
    if (m.index > lastIndex) {
      nodes.push(text.slice(lastIndex, m.index));
    }
    const num = m[1];
    const den = m[2];
    nodes.push(
      <span
        key={`frac-${key++}`}
        className="inline-flex flex-col items-center align-middle mx-0.5 text-[0.95em] leading-tight"
        style={{ verticalAlign: 'middle' }}
      >
        <span className="font-medium leading-none px-0.5">{num}</span>
        <span
          className="my-px h-px min-w-[1.15em] max-w-full self-stretch bg-gray-800 dark:bg-gray-200"
          aria-hidden
        />
        <span className="font-medium leading-none px-0.5">{den}</span>
      </span>
    );
    lastIndex = m.index + m[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <span className={className}>{nodes}</span>;
}
