-- 내가 사람관계에 쏟는 에너지

-- slug: phase3-relationship-energy

-- thumbnail: p3_test_relationship_energy.webp



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

  'phase3-relationship-energy',

  '{"ko": "내가 사람관계에 쏟는 에너지", "en": "Energy I Invest in Relationships", "ja": "人間関係に注ぐエネルギー", "zh-CN": "我在人际关系中投入的能量", "zh-TW": "我在人際關係中投入的能量", "vi": "Năng lượng tôi dành cho các mối quan hệ", "id": "Energi yang Kucurahkan untuk Hubungan"}',

  '{"ko": "12가지 질문으로 관계에서 에너지를 어떻게 쓰고 충전하는지 분석합니다. 6가지 관계 에너지 유형과 영역별 소모·충전 패턴을 알려드립니다.", "en": "Analyze how you spend and recharge energy in relationships with 12 questions. Discover your relationship energy type and domain patterns.", "ja": "12の質問で関係におけるエネルギーの使い方と充電パターンを分析します。", "zh-CN": "通过12个问题分析你在关系中如何消耗与补充能量。", "zh-TW": "透過12個問題分析你在關係中如何消耗與補充能量。", "vi": "Phân tích cách bạn tiêu hao và nạp năng lượng trong các mối quan hệ qua 12 câu hỏi.", "id": "Analisis cara kamu menghabiskan dan mengisi ulang energi dalam hubungan lewat 12 pertanyaan."}',

  'p3_test_relationship_energy.webp',

  'psychology',

  'personality',

  'scenario_2',

  '{"ko": ["관계에너지", "인간관계", "내향외향", "충전방식", "피곤함"], "en": ["relationship energy", "social battery", "introvert extrovert", "recharge style", "psychology"], "ja": ["関係エネルギー", "人間関係", "内向外向", "充電方式", "心理"], "zh-CN": ["关系能量", "人际关系", "内向外向", "充电方式", "心理"], "zh-TW": ["關係能量", "人際關係", "內向外向", "充電方式", "心理"], "vi": ["năng lượng quan hệ", "mối quan hệ", "hướng nội ngoại", "cách nạp pin", "tâm lý"], "id": ["energi hubungan", "relasi", "introvert ekstrovert", "cara isi ulang", "psikologi"]}',

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
