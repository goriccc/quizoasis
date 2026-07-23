-- 나의 '외로움' 농도 테스트
-- slug: phase3-loneliness-concentration
-- thumbnail: p3_test_loneliness_concentration.webp

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
  'phase3-loneliness-concentration',
  '{"ko": "나의 ''외로움'' 농도 테스트", "en": "My Loneliness Concentration Test", "ja": "私の『孤独』濃度テスト", "zh-CN": "我的『孤独』浓度测试", "zh-TW": "我的『孤獨』濃度測試", "vi": "Bài test nồng độ ''cô đơn'' của tôi", "id": "Tes Konsentrasi ''Kesepian'' Saya"}',
  '{"ko": "12가지 질문으로 지금 나의 외로움 농도와 연결 상태를 측정합니다.", "en": "Measure your loneliness concentration and connection state with 12 questions.", "ja": "12の質問で今の孤独の濃度とつながりの状態を測ります。", "zh-CN": "通过12个问题测量你现在的孤独浓度与连接状态。", "zh-TW": "透過12個問題測量你現在的孤獨濃度與連結狀態。", "vi": "Đo nồng độ cô đơn và trạng thái kết nối hiện tại qua 12 câu hỏi.", "id": "Ukur konsentrasi kesepian dan status koneksi saat ini lewat 12 pertanyaan."}',
  'p3_test_loneliness_concentration.webp',
  'psychology',
  'personality',
  '{"ko": ["외로움", "고립감", "소통", "감정", "커뮤니티"], "en": ["loneliness", "isolation", "connection", "emotion", "community"], "ja": ["孤独", "孤立感", "つながり", "感情", "コミュニティ"], "zh-CN": ["孤独", "孤立感", "沟通", "情感", "社区"], "zh-TW": ["孤獨", "孤立感", "溝通", "情感", "社群"], "vi": ["cô đơn", "cô lập", "kết nối", "cảm xúc", "cộng đồng"], "id": ["kesepian", "isolasi", "koneksi", "emosi", "komunitas"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
