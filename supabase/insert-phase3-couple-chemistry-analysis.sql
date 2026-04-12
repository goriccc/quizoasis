-- 우리 커플 궁합 케미 분석
-- slug: phase3-couple-chemistry-analysis
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
  'phase3-couple-chemistry-analysis',
  '{
    "ko": "우리 커플 궁합 케미 분석",
    "en": "Our Couple Chemistry Analysis",
    "ja": "私たちのカップル相性ケミ分析",
    "zh-CN": "我们的情侣合拍化学反应分析",
    "zh-TW": "我們的情侶合拍化學反應分析",
    "vi": "Phân tích chemistry cặp đôi của chúng mình",
    "id": "Analisis chemistry pasangan kita"
  }',
  '{
    "ko": "각자 12문항으로 연애 스타일 6유형, 두 유형 조합으로 커플 케미 21가지. #커플 #궁합 #케미 #연애 #찰떡",
    "en": "12 questions each — 6 dating styles, 21 couple chemistry combos. #Couple #Compatibility #Chemistry",
    "ja": "それぞれ12問で恋愛スタイル6タイプ、組み合わせでカップルケミ21パターン。#カップル #相性",
    "zh-CN": "各答 12 题得恋爱风格 6 型，组合看 21 种情侣化学反应。#情侣 #合拍",
    "zh-TW": "各答 12 題得戀愛風格 6 型，組合看 21 種情侶化學反應。#情侶 #合拍",
    "vi": "Mỗi người 12 câu — 6 kiểu yêu, 21 tổ hợp chemistry. #Cặp đôi #Hợp gu",
    "id": "Masing-masing 12 pertanyaan — 6 gaya pacaran, 21 kombinasi chemistry. #Pasangan"
  }',
  'p3_test_couple_chemistry_analysis.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["커플", "궁합", "케미", "연애", "찰떡"],
    "en": ["Couple", "Compatibility", "Chemistry", "Love", "Match"],
    "ja": ["カップル", "相性", "ケミ", "恋愛", "相性抜群"],
    "zh-CN": ["情侣", "合拍", "化学反应", "恋爱", "绝配"],
    "zh-TW": ["情侶", "合拍", "化學反應", "戀愛", "絕配"],
    "vi": ["Cặp đôi", "Hợp gu", "Chemistry", "Tình yêu", "Hợp cạ"],
    "id": ["Pasangan", "Cocok", "Chemistry", "Cinta", "Cocok banget"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
