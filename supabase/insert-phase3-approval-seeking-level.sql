-- 나의 인정 욕구 농도
-- slug: phase3-approval-seeking-level
-- thumbnail: p3_test_approval_seeking_level.webp

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
  'phase3-approval-seeking-level',
  '{"ko": "나의 인정 욕구 농도", "en": "My Approval-Seeking Level", "ja": "私の承認欲求の濃度", "zh-CN": "我的认可需求浓度", "zh-TW": "我的認可需求濃度", "vi": "Mức độ Khao khát được Công nhận của tôi", "id": "Tingkat Keinginan Pengakuan-ku"}',
  '{"ko": "12가지 질문으로 지금 내 인정 욕구가 어느 농도에 있는지 솔직하게 측정합니다. 6개 영역별 점수와 유형별 건강한 방향 제시까지 확인하세요.", "en": "Measure your approval-seeking level honestly with 12 questions. See scores across 6 domains plus type-specific guidance.", "ja": "12の質問で今の承認欲求の濃度を正直に測定。6領域のスコアとタイプ別の健康的な方向性まで確認。", "zh-CN": "通过12个问题诚实测量你现在的认可需求浓度。含6个领域得分与类型健康方向建议。", "zh-TW": "透過12個問題誠實測量你現在的認可需求濃度。含6個領域得分與類型健康方向建議。", "vi": "Đo mức khao khát được công nhận qua 12 câu hỏi. Xem điểm 6 lĩnh vực và hướng dẫn theo loại.", "id": "Ukur tingkat keinginan pengakuan lewat 12 pertanyaan. Lihat skor 6 domain dan panduan sehat per tipe."}',
  'p3_test_approval_seeking_level.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["인정욕구", "자존감", "타인시선", "심리", "공감"], "en": ["approval seeking", "self-esteem", "others gaze", "psychology", "empathy"], "ja": ["承認欲求", "自尊心", "他人の視線", "心理", "共感"], "zh-CN": ["认可需求", "自尊", "他人目光", "心理", "共情"], "zh-TW": ["認可需求", "自尊", "他人目光", "心理", "共情"], "vi": ["khao khát công nhận", "lòng tự trọng", "ánh mắt người khác", "tâm lý", "đồng cảm"], "id": ["keinginan pengakuan", "harga diri", "pandangan orang lain", "psikologi", "empati"]}',
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
