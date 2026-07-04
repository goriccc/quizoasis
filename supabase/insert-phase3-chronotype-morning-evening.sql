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
  'phase3-chronotype-morning-evening',
  '{
    "ko": "나의 아침형 vs 저녁형 인간 정밀 분석",
    "en": "My Morning vs Evening Person — Precision Chronotype Analysis",
    "ja": "私の朝型 vs 夜型人間 精密分析",
    "zh-CN": "我的晨型 vs 夜型人类精密分析",
    "zh-TW": "我的晨型 vs 夜型人類精密分析",
    "vi": "Phân tích chính xác kiểu người Sáng vs Tối của tôi",
    "id": "Analisis Presisi Tipe Pagi vs Malam Saya"
  }',
  '{
    "ko": "12문항으로 나의 크로노타입(생체 리듬)을 정밀 분석합니다.",
    "en": "Analyze your chronotype (body clock) precisely in 12 questions.",
    "ja": "12問であなたのクロノタイプ（生体リズム）を精密分析します。",
    "zh-CN": "用12道题精密分析你的昼夜节律（生物钟）。",
    "zh-TW": "用12道題精密分析你的晝夜節律（生物鐘）。",
    "vi": "Phân tích chính xác chronotype (nhịp sinh học) qua 12 câu hỏi.",
    "id": "Analisis presisi kronotipe (ritme tubuh) lewat 12 pertanyaan."
  }',
  'p3_test_chronotype_morning_evening.webp',
  'psychology',
  'personality',
  '{
    "ko": ["크로노타입", "아침형", "저녁형", "생체리듬", "수면"],
    "en": ["Chronotype", "Morning type", "Evening type", "Body rhythm", "Sleep"],
    "ja": ["クロノタイプ", "朝型", "夜型", "生体リズム", "睡眠"],
    "zh-CN": ["昼夜节律", "晨型", "夜型", "生物节律", "睡眠"],
    "zh-TW": ["晝夜節律", "晨型", "夜型", "生物節律", "睡眠"],
    "vi": ["Chronotype", "Kiểu sáng", "Kiểu tối", "Nhịp sinh học", "Giấc ngủ"],
    "id": ["Kronotipe", "Tipe pagi", "Tipe malam", "Ritme tubuh", "Tidur"]
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
