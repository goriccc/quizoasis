import { getTestBySlug } from '@/lib/supabase';
import { getThumbnailUrl } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug') || 'mbti-light';
    const locale = searchParams.get('locale') || 'ko';
    
    const test = await getTestBySlug(slug);
    
    if (!test) {
      return NextResponse.json({
        success: false,
        error: 'Test not found'
      }, { status: 404 });
    }
    
    const title = test.title[locale] || test.title.ko || 'Test';
    const description = test.description?.[locale] || test.description?.ko || '';
    
    // 공유 앱용 원본 URL 사용
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const thumbnailUrl = `${supabaseUrl}/storage/v1/object/public/tests-thumbnails/${test.thumbnail}?v=${Date.now()}`;
    
    // Open Graph 메타데이터 생성
    const openGraphMeta = {
      'og:title': title,
      'og:description': description,
      'og:image': thumbnailUrl,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/jpeg',
      'og:url': `https://quizoasis-coral.vercel.app/${locale}/test/${slug}`,
      'og:type': 'website',
      'og:site_name': 'QuizOasis',
      'og:locale': locale,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': thumbnailUrl,
      'twitter:site': '@QuizOasis',
    };
    
    // HTML 형태로 메타태그 생성
    const metaTags = Object.entries(openGraphMeta)
      .map(([property, content]) => 
        `<meta property="${property}" content="${content}" />`
      ).join('\n');
    
    const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Open Graph Debug - ${title}</title>
  ${metaTags}
</head>
<body>
  <h1>Open Graph Debug</h1>
  <h2>Test: ${title}</h2>
  <p><strong>Slug:</strong> ${slug}</p>
  <p><strong>Locale:</strong> ${locale}</p>
  <p><strong>Description:</strong> ${description}</p>
  <p><strong>Thumbnail URL:</strong> <a href="${thumbnailUrl}" target="_blank">${thumbnailUrl}</a></p>
  <img src="${thumbnailUrl}" alt="${title}" style="max-width: 300px; height: auto;" />
  
  <h3>Generated Meta Tags:</h3>
  <pre>${metaTags}</pre>
</body>
</html>
    `;
    
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
    
  } catch (error) {
    console.error('Error generating Open Graph debug:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
