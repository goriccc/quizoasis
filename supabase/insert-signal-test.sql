-- 연인 신호 포착 테스트 데이터 삽입
-- 기존 데이터가 있다면 삭제 후 삽입

DELETE FROM tests WHERE slug = 'catch-lover-signals';

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
  'catch-lover-signals',
  jsonb_build_object(
    'ko', '연인이 보내는 신호를 캐치하세요!',
    'en', 'Catch Your Lover''s Signals!',
    'ja', '恋人の信号をキャッチしよう！',
    'zh-CN', '捕捉恋人的信号！',
    'zh-TW', '捕捉戀人的信號！',
    'id', 'Tangkap Sinyal Kekasih Anda!',
    'vi', 'Bắt Tín Hiệu Từ Người Yêu!'
  ),
  jsonb_build_object(
    'ko', '연인의 신호 포착 능력을 테스트해보세요. 12개 질문으로 당신의 신호 감지 능력을 확인하세요!',
    'en', 'Test your ability to catch your lover''s signals. Check your signal detection skills with 12 questions!',
    'ja', '恋人の信号をキャッチする能力をテスト。12の質問であなたの信号検知力を確認！',
    'zh-CN', '测试你捕捉恋人信号的能力。通过12个问题检查你的信号检测技能！',
    'zh-TW', '測試你捕捉戀人信號的能力。通過12個問題檢查你的信號檢測技能！',
    'id', 'Uji kemampuan Anda menangkap sinyal kekasih. Periksa keterampilan deteksi sinyal Anda dengan 12 pertanyaan!',
    'vi', 'Kiểm tra khả năng bắt tín hiệu từ người yêu của bạn. Kiểm tra kỹ năng phát hiện tín hiệu với 12 câu hỏi!'
  ),
  'test_027_reading_signals.jpg',
  'dating',
  'love',
  jsonb_build_object(
    'ko', ARRAY['연애', '소통', '심리'],
    'en', ARRAY['Love', 'Communication', 'Psychology'],
    'ja', ARRAY['恋愛', 'コミュニケーション', '心理'],
    'zh-CN', ARRAY['恋爱', '沟通', '心理'],
    'zh-TW', ARRAY['戀愛', '溝通', '心理'],
    'id', ARRAY['Cinta', 'Komunikasi', 'Psikologi'],
    'vi', ARRAY['Tình yêu', 'Giao tiếp', 'Tâm lý']
  ),
  0
);

-- 결과 확인
SELECT * FROM tests WHERE slug = 'catch-lover-signals';

