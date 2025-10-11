import { getTests } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tests = await getTests();
    
    const thumbnailInfo = tests.map(test => ({
      slug: test.slug,
      thumbnail: test.thumbnail,
      title: test.title?.ko || 'No title'
    }));
    
    return NextResponse.json({
      success: true,
      count: tests.length,
      thumbnails: thumbnailInfo
    });
  } catch (error) {
    console.error('Error fetching thumbnails:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
