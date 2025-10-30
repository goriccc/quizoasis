import { NextResponse } from 'next/server';
import { getTests } from '@/lib/supabase';

export async function GET() {
  const baseUrl = 'https://myquizoasis.com';
  const tests = await getTests();

  // RSS 피드 생성
  const items = tests.slice(0, 20).map((test: any) => {
    const title = test.title?.ko || '심리테스트';
    const description = test.description?.ko || '';
    const url = `${baseUrl}/ko/test/${test.slug}`;
    
    return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <description>${description.replace(/\n/g, ' ').substring(0, 200)}</description>
      <guid>${url}</guid>
      <pubDate>${test.created_at ? new Date(test.created_at).toUTCString() : new Date().toUTCString()}</pubDate>
    </item>`;
  }).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>QuizOasis - 심리테스트</title>
    <link>${baseUrl}</link>
    <description>당신의 마음을 탐험하는 심리테스트의 오아시스</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <generator>QuizOasis</generator>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}

