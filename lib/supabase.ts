import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * 테스트 목록 조회
 */
export async function getTests() {
  const { data, error } = await supabase
    .from('tests')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching tests:', error);
    return [];
  }

  return data || [];
}

/**
 * 특정 테스트 조회
 */
export async function getTestBySlug(slug: string) {
  const { data, error } = await supabase
    .from('tests')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching test by slug:', error);
    return null;
  }

  return data;
}

/**
 * 플레이 횟수 증가
 */
export async function incrementPlayCount(slug: string) {
  console.log('🔵 incrementPlayCount 호출됨 - slug:', slug);
  const { data, error } = await supabase.rpc('increment_play_count', {
    test_slug: slug,
  });

  if (error) {
    console.error('🔴 Error incrementing play count:', error);
  } else {
    console.log('✅ Play count 증가 성공 - slug:', slug, 'data:', data);
  }
}


