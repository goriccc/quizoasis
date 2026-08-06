-- 나의 연애 기대치 진단
-- slug: phase3-love-expectation-diagnosis
-- thumbnail: p3_test_relationship_expectation.webp

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
  'phase3-love-expectation-diagnosis',
  '{"ko": "나의 연애 기대치 진단", "en": "My Love Expectation Diagnosis", "ja": "私の恋愛期待値診断", "zh-CN": "我的恋爱期待值诊断", "zh-TW": "我的戀愛期待值診斷", "vi": "Chẩn đoán Kỳ vọng Tình yêu của tôi", "id": "Diagnosis Ekspektasi Cinta-ku"}',
  '{"ko": "12가지 질문으로 나의 연애 기대치가 실제로 어느 수준인지 솔직하게 측정합니다. 6개 영역별 점수와 건강한 방향까지 확인하세요.", "en": "Measure your real love expectations honestly with 12 questions. See scores across 6 domains plus healthy direction tips.", "ja": "12の質問で恋愛期待値の実際のレベルを正直に測定。6領域のスコアと健全な方向性まで確認。", "zh-CN": "通过12个问题诚实测量你的恋爱期待值实际水平。含6个领域得分与健康方向建议。", "zh-TW": "透過12個問題誠實測量你的戀愛期待值實際水平。含6個領域得分與健康方向建議。", "vi": "Đo trung thực kỳ vọng tình yêu qua 12 câu hỏi. Xem điểm 6 lĩnh vực và hướng lành mạnh.", "id": "Ukur ekspektasi cinta secara jujur lewat 12 pertanyaan. Lihat skor 6 domain dan arah sehat."}',
  'p3_test_relationship_expectation.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["연애기대치", "연애스타일", "커플", "자존감", "연애상담"], "en": ["love expectations", "dating style", "couple", "self-esteem", "relationship advice"], "ja": ["恋愛期待値", "恋愛スタイル", "カップル", "自己肯定感", "恋愛相談"], "zh-CN": ["恋爱期待值", "恋爱风格", "情侣", "自尊", "恋爱咨询"], "zh-TW": ["戀愛期待值", "戀愛風格", "情侶", "自尊", "戀愛諮詢"], "vi": ["kỳ vọng tình yêu", "phong cách hẹn hò", "cặp đôi", "lòng tự trọng", "tư vấn tình cảm"], "id": ["ekspektasi cinta", "gaya pacaran", "pasangan", "harga diri", "saran hubungan"]}',
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
