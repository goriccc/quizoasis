-- 나의 '퍼스널 브랜딩' 키워드
-- slug: phase3-personal-branding-keywords
-- thumbnail: p3_test_personal_branding_keywords.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags,
  play_count
) VALUES (
  'phase3-personal-branding-keywords',
  '{"ko": "나의 ''퍼스널 브랜딩'' 키워드", "en": "My ''Personal Branding'' Keywords", "ja": "私の「パーソナルブランディング」キーワード", "zh-CN": "我的「个人品牌」关键词", "zh-TW": "我的「個人品牌」關鍵字", "vi": "Từ khóa ''Personal Branding'' của tôi", "id": "Kata Kunci ''Personal Branding''-ku"}',
  '{"ko": "12문항으로 나를 홍보할 최적의 키워드 3개를 찾아드립니다.", "en": "12 questions find the 3 best keywords to promote yourself.", "ja": "12問であなたをアピールする最適なキーワード3つを見つけます。", "zh-CN": "通过12道题找出最适合宣传自己的3个关键词。", "zh-TW": "透過12題找出最適合宣傳自己的3個關鍵字。", "vi": "12 câu hỏi giúp tìm 3 từ khóa tối ưu để quảng bá bản thân.", "id": "12 pertanyaan menemukan 3 kata kunci terbaik untuk mempromosikan dirimu."}',
  'p3_test_personal_branding_keywords.webp',
  'psychology',
  'personality',
  '{"ko": ["퍼스널브랜딩", "이력서", "링크드인", "자기소개", "커리어"], "en": ["personal branding", "resume", "linkedin", "self-introduction", "career"], "ja": ["パーソナルブランディング", "履歴書", "LinkedIn", "自己紹介", "キャリア"], "zh-CN": ["个人品牌", "简历", "领英", "自我介绍", "职业"], "zh-TW": ["個人品牌", "履歷", "LinkedIn", "自我介紹", "職涯"], "vi": ["personal branding", "CV", "LinkedIn", "giới thiệu bản thân", "sự nghiệp"], "id": ["personal branding", "CV", "LinkedIn", "perkenalan diri", "karier"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
