'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

interface FeedbackItem {
  id: string;
  title: string;
  details: string;
  email?: string;
  category: string;
  locale: string;
  created_at: string;
}

interface ReportItem {
  id: string;
  title: string;
  details: string;
  email?: string;
  category: string;
  locale: string;
  created_at: string;
}

export default function AdminPage() {
  const [feedback, setFeedback] = useState<FeedbackItem[]>([]);
  const [reports, setReports] = useState<ReportItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'feedback' | 'reports'>('feedback');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  useEffect(() => {
    // 페이지 로드 시 토큰 확인
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken');
      if (token) {
        try {
          const response = await fetch('/api/admin/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token }),
          });
          
          const result = await response.json();
          
          if (response.ok && result.success && result.valid) {
            setIsAuthenticated(true);
          } else {
            // 토큰이 유효하지 않으면 제거
            localStorage.removeItem('adminToken');
          }
        } catch (error) {
          console.error('[admin-verify] Error:', error);
          localStorage.removeItem('adminToken');
        }
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    
    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        // JWT 토큰을 localStorage에 저장
        localStorage.setItem('adminToken', result.token);
        setIsAuthenticated(true);
        setAuthError('');
      } else {
        setAuthError(result.error || '비밀번호가 올바르지 않습니다.');
      }
    } catch (error) {
      console.error('[admin-login] Error:', error);
      setAuthError('로그인 중 오류가 발생했습니다.');
    }
  };

  const loadData = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

      console.log('[admin] Supabase config:', { 
        hasUrl: !!url, 
        hasKey: !!key,
        url: url ? url.substring(0, 20) + '...' : 'none'
      });

      if (url && key) {
        const supabase = createClient(url, key);
        
        // 피드백 로드
        const { data: feedbackData, error: feedbackError } = await supabase
          .from('feedback')
          .select('*')
          .order('created_at', { ascending: false });

        // 리포트 로드
        const { data: reportData, error: reportError } = await supabase
          .from('issue_reports')
          .select('*')
          .order('created_at', { ascending: false });

        if (feedbackError) {
          console.error('[admin] Feedback load error:', feedbackError);
        }
        if (reportError) {
          console.error('[admin] Report load error:', reportError);
        }

        console.log('[admin] Loaded data:', { 
          feedbackCount: feedbackData?.length || 0, 
          reportCount: reportData?.length || 0 
        });

        setFeedback(feedbackData || []);
        setReports(reportData || []);
      } else {
        console.log('[admin] No Supabase config available');
      }
    } catch (error) {
      console.error('[admin] 데이터 로드 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR');
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      'new_test': '새 테스트 요청',
      'ux': 'UI/UX 개선',
      'idea': '아이디어 제안',
      'other': '기타',
      'bug': '기능 오류',
      'translation': '번역 개선',
      'result': '결과 이슈'
    };
    return categoryMap[category] || category;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-6">관리자 로그인</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>
            {authError && (
              <div className="text-red-600 text-sm text-center">{authError}</div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">로딩 중...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">관리자 페이지</h1>
          <button
            onClick={() => {
              localStorage.removeItem('adminToken');
              setIsAuthenticated(false);
              setPassword('');
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            로그아웃
          </button>
        </div>
        
        {/* 탭 메뉴 */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('feedback')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'feedback'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                의견 보내기 ({feedback.length})
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'reports'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                오류 수정 요청 ({reports.length})
              </button>
            </nav>
          </div>
        </div>

        {/* 피드백 탭 */}
        {activeTab === 'feedback' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">의견 보내기</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {feedback.length === 0 ? (
                <div className="px-6 py-8 text-center text-gray-500">
                  제출된 의견이 없습니다.
                </div>
              ) : (
                feedback.map((item) => (
                  <div key={item.id} className="px-6 py-4">
                    <div className="mb-2">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xs font-medium text-gray-900 truncate">{item.title}</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 flex-shrink-0">
                          {getCategoryLabel(item.category)}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex-shrink-0">
                          {item.locale}
                        </span>
                        <div className="text-xs text-gray-500 ml-auto flex-shrink-0">
                          {formatDate(item.created_at)}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-gray-700 mb-2 break-words whitespace-pre-wrap">{item.details}</p>
                      {item.email && (
                        <p className="text-xs text-gray-500">이메일: {item.email}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* 리포트 탭 */}
        {activeTab === 'reports' && (
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">오류 수정 요청</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {reports.length === 0 ? (
                <div className="px-6 py-8 text-center text-gray-500">
                  제출된 오류 신고가 없습니다.
                </div>
              ) : (
                reports.map((item) => (
                  <div key={item.id} className="px-6 py-4">
                    <div className="mb-2">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xs font-medium text-gray-900 truncate">{item.title}</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 flex-shrink-0">
                          {getCategoryLabel(item.category)}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex-shrink-0">
                          {item.locale}
                        </span>
                        <div className="text-xs text-gray-500 ml-auto flex-shrink-0">
                          {formatDate(item.created_at)}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-xs text-gray-700 mb-2 break-words whitespace-pre-wrap">{item.details}</p>
                      {item.email && (
                        <p className="text-xs text-gray-500">이메일: {item.email}</p>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
