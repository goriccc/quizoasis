-- K-POP 아이돌 데뷔? 내 포지션 찾기 테스트 데이터 삽입
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags,
  created_at,
  updated_at
) VALUES (
  'kpop-debut-test',
  '{
    "ko": "K-POP 아이돌 데뷔? 내 포지션 찾기",
    "en": "K-POP Idol Debut? Find My Position",
    "ja": "K-POPアイドルデビュー？私のポジションを見つける",
    "zh-CN": "K-POP偶像出道？找到我的位置",
    "zh-TW": "K-POP偶像出道？找到我的位置",
    "vi": "K-POP Idol Debut? Tìm Vị Trí Của Tôi",
    "id": "K-POP Idol Debut? Temukan Posisi Saya"
  }'::jsonb,
  '{
    "ko": "당신의 데뷔가 확정되었습니다!",
    "en": "Your debut has been confirmed!",
    "ja": "あなたのデビューが確定しました！",
    "zh-CN": "你的出道已确定！",
    "zh-TW": "你的出道已確定！",
    "vi": "Debut của bạn đã được xác nhận!",
    "id": "Debut Anda telah dikonfirmasi!"
  }'::jsonb,
  'phase2_test_038_kpop_debut.jpg',
  'dating',
  'love',
  '{
    "ko": ["심리", "트렌드"],
    "en": ["Psychology", "Trend"],
    "ja": ["心理", "トレンド"],
    "zh-CN": ["心理", "趋势"],
    "zh-TW": ["心理", "趨勢"],
    "vi": ["Tâm lý", "Xu hướng"],
    "id": ["Psikologi", "Tren"]
  }'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW(),
  created_at = CASE WHEN tests.created_at IS NULL THEN NOW() ELSE tests.created_at END;

