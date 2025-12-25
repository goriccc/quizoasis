import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Vercel Cron Job에서 호출하는 API
// 매일 0시에 실행되어 테스트 뱃지를 랜덤으로 재배치

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export async function GET(request: NextRequest) {
  // Vercel Cron Secret 확인 (보안)
  // 로컬 개발 환경에서는 CRON_SECRET이 없어도 실행 가능
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;
  
  // 프로덕션 환경에서만 인증 확인
  if (process.env.NODE_ENV === 'production' && cronSecret) {
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. 최신 15개 테스트 slug 가져오기
    const { data: latestTests, error: latestError } = await supabase
      .from('tests')
      .select('slug')
      .order('created_at', { ascending: false })
      .limit(15);

    if (latestError) {
      console.error('Error fetching latest tests:', latestError);
      return NextResponse.json(
        { error: 'Failed to fetch latest tests', details: latestError.message },
        { status: 500 }
      );
    }

    const latestSlugs = latestTests.map((t: any) => t.slug);

    // 2. 최신 15개를 제외한 전체 테스트 가져오기
    const { data: allTests, error: allError } = await supabase
      .from('tests')
      .select('slug');

    if (allError) {
      console.error('Error fetching all tests:', allError);
      return NextResponse.json(
        { error: 'Failed to fetch all tests', details: allError.message },
        { status: 500 }
      );
    }

    // 3. 최신 15개 제외한 테스트 필터링
    const eligibleTests = allTests.filter((t: any) => !latestSlugs.includes(t.slug));
    const totalCount = eligibleTests.length;
    const badgeCount = Math.max(1, Math.floor(totalCount * 0.3)); // 30%

    // 4. 먼저 모든 뱃지 제거
    const { error: clearError } = await supabase
      .from('tests')
      .update({ badge_type: null });

    if (clearError) {
      console.error('Error clearing badges:', clearError);
      return NextResponse.json(
        { error: 'Failed to clear badges', details: clearError.message },
        { status: 500 }
      );
    }

    // 5. 랜덤으로 선택 (Fisher-Yates shuffle)
    const shuffled = [...eligibleTests];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const selectedTests = shuffled.slice(0, badgeCount);

    // 6. 선택된 테스트에 랜덤으로 "popular" 또는 "hot" 할당
    const updates = selectedTests.map((test: any) => {
      const badgeType = Math.random() < 0.5 ? 'popular' : 'hot';
      return supabase
        .from('tests')
        .update({ badge_type: badgeType })
        .eq('slug', test.slug);
    });

    const results = await Promise.allSettled(updates);
    const failed = results.filter((r) => r.status === 'rejected').length;

    if (failed > 0) {
      console.error(`Failed to update ${failed} badges`);
    }

    return NextResponse.json({
      success: true,
      message: 'Badges updated successfully',
      timestamp: new Date().toISOString(),
      stats: {
        totalTests: allTests.length,
        eligibleTests: totalCount,
        badgesAssigned: badgeCount,
        failed: failed
      }
    });
  } catch (error: any) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

