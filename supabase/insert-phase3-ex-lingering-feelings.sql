-- 나의 '전여친/남친' 미련 지수
-- slug: phase3-ex-lingering-feelings
-- thumbnail: p3_test_ex_lingering_feelings.webp

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
  'phase3-ex-lingering-feelings',
  '{"ko": "나의 ''전여친/남친'' 미련 지수", "en": "My Ex Lingering Feelings Index", "ja": "私の『元恋人』未練指数", "zh-CN": "我的『前任』留恋指数", "zh-TW": "我的『前任』留戀指數", "vi": "Chỉ số ''vương vấn'' người yêu cũ của tôi", "id": "Indeks ''Rasa Kangen'' Mantan Pacarku"}',
  '{"ko": "12가지 질문으로 전 연인에 대한 잔류 감정과 미련 지수를 솔직하게 측정합니다.", "en": "Measure lingering feelings for your ex honestly with 12 questions.", "ja": "12の質問で元恋人への残る感情と未練指数を正直に測ります。", "zh-CN": "通过12个问题诚实测量对前任的残留情感与留恋指数。", "zh-TW": "透過12個問題誠實測量對前任的殘留情感與留戀指數。", "vi": "Đo cảm xúc còn sót và mức vương vấn với người yêu cũ qua 12 câu hỏi.", "id": "Ukur sisa perasaan dan indeks rasa kangen pada mantan lewat 12 pertanyaan."}',
  'p3_test_ex_lingering_feelings.webp',
  'psychology',
  'love',
  '{"ko": ["미련", "전연인", "이별", "잔류감정", "익명고민"], "en": ["lingering feelings", "ex", "breakup", "residual emotion", "anonymous"], "ja": ["未練", "元恋人", "別れ", "残る感情", "匿名相談"], "zh-CN": ["留恋", "前任", "分手", "残留情感", "匿名倾诉"], "zh-TW": ["留戀", "前任", "分手", "殘留情感", "匿名傾訴"], "vi": ["vương vấn", "người yêu cũ", "chia tay", "cảm xúc còn sót", "ẩn danh"], "id": ["kangen", "mantan", "putus", "sisa emosi", "anonim"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
