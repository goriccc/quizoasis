type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

function shouldBypassOptimizer(src: string): boolean {
  return (
    src.includes('/cdn/t/') ||
    src.includes('/cdn/render/t/') ||
    src.includes('supabase.co/storage/v1/object/public/tests-thumbnails/') ||
    src.includes('supabase.co/storage/v1/render/image/public/tests-thumbnails/')
  );
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  // public/ 정적 파일은 직접 서빙 (소셜 공유 아이콘 등)
  if (src.startsWith('/') && !src.startsWith('//')) {
    return src;
  }

  if (shouldBypassOptimizer(src)) {
    return src;
  }

  const params = new URLSearchParams({
    url: src,
    w: String(width),
    q: String(quality ?? 85),
  });

  return `/_next/image?${params.toString()}`;
}
