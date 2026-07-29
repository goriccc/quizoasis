-- 나의 그릿(Grit) 지수 측정
-- slug: phase3-grit-index
-- thumbnail: p3_test_grit_index.webp

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
  'phase3-grit-index',
  '{"ko": "나의 그릿(Grit) 지수 측정", "en": "My Grit Index Measurement", "ja": "私のグリット指標測定", "zh-CN": "我的坚毅指数测量", "zh-TW": "我的堅毅指數測量", "vi": "Chỉ số Grit của tôi", "id": "Pengukuran Indeks Grit-ku"}',
  '{"ko": "12가지 질문으로 나의 그릿 지수와 유형을 측정합니다. 끈기와 열정의 강약, 병목까지 함께 분석해드려요.", "en": "Measure your Grit Index and type with 12 questions. Understand the balance between perseverance and passion — including your bottleneck.", "ja": "12の質問でグリット指標とタイプを測定します。忍耐と情熱のバランス、そしてボトルネックまで分析します。", "zh-CN": "通过12个问题测量你的坚毅指数与类型。了解毅力与热情的平衡，并分析你的瓶颈。", "zh-TW": "透過12個問題測量你的堅毅指數與類型。了解毅力與熱情的平衡，並分析你的瓶頸。", "vi": "Đo chỉ số Grit và kiểu của bạn qua 12 câu hỏi. Hiểu sự cân bằng giữa bền bỉ và đam mê, kèm theo “nút thắt”.", "id": "Ukur Indeks Grit dan tipe kamu lewat 12 pertanyaan. Pahami keseimbangan antara ketekunan dan semangat, termasuk bottleneck."}',
  'p3_test_grit_index.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["그릿", "끈기", "열정", "자기계발", "목표달성"], "en": ["grit", "perseverance", "passion", "self-improvement", "goal achievement"], "ja": ["グリット", "忍耐", "情熱", "自己成長", "目標達成"], "zh-CN": ["坚毅", "毅力", "热情", "自我提升", "目标达成"], "zh-TW": ["堅毅", "毅力", "熱情", "自我提升", "目標達成"], "vi": ["grit", "bền bỉ", "đam mê", "tự cải thiện", "đạt mục tiêu"], "id": ["grit", "ketekunan", "semangat", "pengembangan diri", "pencapaian tujuan"]}',
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

