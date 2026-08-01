-- 나의 정서 지능(EQ) 자가진단
-- slug: phase3-eq-self-diagnosis
-- thumbnail: p3_test_eq_self_diagnosis.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-eq-self-diagnosis',
  '{"ko": "나의 정서 지능(EQ) 자가진단", "en": "My EQ Self-Diagnosis", "ja": "私のEQ自己診断", "zh-CN": "我的情商(EQ)自测", "zh-TW": "我的情商(EQ)自測", "vi": "Tự chẩn đoán EQ của tôi", "id": "Diagnosis Diri EQ-ku"}',
  '{"ko": "12가지 질문으로 나의 EQ 수준과 5가지 요소(자기인식·자기조절·내적 동기·공감·사회성)별 강점과 약점을 분석합니다.", "en": "Analyze your EQ level and strengths/weaknesses across 5 elements with 12 questions.", "ja": "12の質問でEQ水準と5要素別の強み・弱みを分析します。", "zh-CN": "通过12个问题分析EQ水平及5要素强弱。", "zh-TW": "透過12個問題分析EQ水準及5要素強弱。", "vi": "Phân tích mức EQ và 5 yếu tố qua 12 câu hỏi.", "id": "Analisis level EQ dan 5 elemen lewat 12 pertanyaan."}',
  'p3_test_eq_self_diagnosis.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["EQ", "정서지능", "감성지능", "자기인식", "공감능력"], "en": ["EQ", "emotional intelligence", "self-awareness", "empathy", "psychology"], "ja": ["EQ", "感情知能", "自己認識", "共感", "心理"], "zh-CN": ["EQ", "情商", "自我认知", "共情", "心理"], "zh-TW": ["EQ", "情商", "自我認知", "共感", "心理"], "vi": ["EQ", "trí tuệ cảm xúc", "tự nhận thức", "đồng cảm", "tâm lý"], "id": ["EQ", "kecerdasan emosional", "kesadaran diri", "empati", "psikologi"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
