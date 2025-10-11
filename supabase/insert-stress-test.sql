-- 스트레스 반응 테스트 데이터 삽입

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
  'stress-reaction-test',
  jsonb_build_object(
    'ko', '당신은 스트레스에 어떻게 반응하나요?',
    'en', 'How Do You React to Stress?',
    'ja', 'あなたはストレスにどう反応しますか？',
    'zh-CN', '你如何应对压力？',
    'zh-TW', '你如何應對壓力？',
    'id', 'Bagaimana Anda Bereaksi terhadap Stres?',
    'vi', 'Bạn Phản Ứng Thế Nào Với Căng Thẳng?'
  ),
  jsonb_build_object(
    'ko', '스트레스 상황에 대한 반응을 분석하여 대처법을 제안합니다.',
    'en', 'Analyze your reactions to stressful situations and suggest coping methods.',
    'ja', 'ストレス状況に対する反応を分析し、対処法を提案します。',
    'zh-CN', '分析您对压力情况的反应并提出应对方法。',
    'zh-TW', '分析您對壓力情況的反應並提出應對方法。',
    'id', 'Menganalisis reaksi Anda terhadap situasi stres dan menyarankan metode penanganan.',
    'vi', 'Phân tích phản ứng của bạn với tình huống căng thẳng và đề xuất phương pháp đối phó.'
  ),
  'stress-reaction.jpg',
  'stress',
  'psychology',
  jsonb_build_object(
    'ko', ARRAY['심리', '감정', '회복'],
    'en', ARRAY['Psychology', 'Emotion', 'Recovery'],
    'ja', ARRAY['心理', '感情', '回復'],
    'zh-CN', ARRAY['心理', '情绪', '恢复'],
    'zh-TW', ARRAY['心理', '情緒', '恢復'],
    'id', ARRAY['Psikologi', 'Emosi', 'Pemulihan'],
    'vi', ARRAY['Tâm lý', 'Cảm xúc', 'Phục hồi']
  ),
  0
);

-- 결과 확인
SELECT * FROM tests WHERE slug = 'stress-reaction-test';

