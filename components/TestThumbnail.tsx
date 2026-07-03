'use client';

import Image, { ImageProps } from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  getSupabaseThumbnailUrl,
  getThumbnailFilenameCandidates,
  getThumbnailUrl,
} from '@/lib/utils';

type TestThumbnailProps = Omit<ImageProps, 'src' | 'onError'> & {
  thumbnail: string;
};

export default function TestThumbnail({ thumbnail, unoptimized, alt, ...imageProps }: TestThumbnailProps) {
  const candidates = useMemo(() => getThumbnailFilenameCandidates(thumbnail), [thumbnail]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [useDirectStorage, setUseDirectStorage] = useState(false);

  useEffect(() => {
    setCandidateIndex(0);
    setUseDirectStorage(false);
  }, [thumbnail]);

  const currentFilename = candidates[candidateIndex] ?? thumbnail;
  const src = useDirectStorage
    ? getSupabaseThumbnailUrl(currentFilename)
    : getThumbnailUrl(currentFilename);

  const handleError = useCallback(() => {
    if (!useDirectStorage && process.env.NEXT_PUBLIC_CDN_BASE_URL) {
      setUseDirectStorage(true);
      return;
    }

    setCandidateIndex((prev) => (prev + 1 < candidates.length ? prev + 1 : prev));
  }, [candidates.length, useDirectStorage]);

  return (
    <Image
      {...imageProps}
      alt={alt}
      src={src}
      onError={handleError}
      unoptimized={unoptimized ?? true}
    />
  );
}
