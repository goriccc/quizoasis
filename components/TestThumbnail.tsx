'use client';

import Image, { ImageProps } from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getThumbnailFilenameCandidates, getThumbnailUrl } from '@/lib/utils';

type TestThumbnailProps = Omit<ImageProps, 'src' | 'onError'> & {
  thumbnail: string;
};

export default function TestThumbnail({ thumbnail, unoptimized, ...imageProps }: TestThumbnailProps) {
  const candidates = useMemo(() => getThumbnailFilenameCandidates(thumbnail), [thumbnail]);
  const [candidateIndex, setCandidateIndex] = useState(0);

  useEffect(() => {
    setCandidateIndex(0);
  }, [thumbnail]);

  const currentFilename = candidates[candidateIndex] ?? thumbnail;
  const src = getThumbnailUrl(currentFilename);
  const preferUnoptimized = /\.webp$/i.test(currentFilename) || /\.avif$/i.test(currentFilename);

  const handleError = useCallback(() => {
    setCandidateIndex((prev) => (prev + 1 < candidates.length ? prev + 1 : prev));
  }, [candidates.length]);

  return (
    <Image
      {...imageProps}
      src={src}
      onError={handleError}
      unoptimized={unoptimized ?? preferUnoptimized}
    />
  );
}
