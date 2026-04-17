-- 줄줄 새는 돈! 나의 멍청비용 진단
-- slug: phase3-dumb-spending-diagnosis
-- thumbnail: p3_test_dumb_spending_diagnosis.jpg

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

  'phase3-dumb-spending-diagnosis',

  '{

    "ko": "줄줄 새는 돈! 나의 멍청비용 진단",

    "en": "Money Leaking Away! My Dumb Spending Diagnosis",

    "ja": "どんどん漏れるお金！私のムダ遣い診断",

    "zh-CN": "钱不知不觉溜走！我的冤枉钱诊断",

    "zh-TW": "錢不知不覺溜走！我的冤枉錢診斷",

    "vi": "Tiền cứ thế trôi! Chẩn đoán lãng phí của tôi",

    "id": "Uang Merembes! Diagnosis Borosku"

  }',

  '{

    "ko": "12문항 텍스트 4지선다로 보는 멍청비용 패턴 6유형. #재테크 #절약 #소비습관 #공감 #멍청비용",

    "en": "12 text MCQs — 6 dumb spending patterns. #money #saving #habits #relatable",

    "ja": "テキスト12問4択で見るムダ遣いパターン6タイプ。#節約 #お金",

    "zh-CN": "12 道文字四选一，六种冤枉钱模式。#理财 #省钱",

    "zh-TW": "12 題文字四選一，六種冤枉錢模式。#理財 #省錢",

    "vi": "12 câu chữ 4 đáp án — 6 kiểu lãng phí. #tiền #tiết kiệm",

    "id": "12 soal teks 4 opsi — 6 pola boros. #uang #hemat"

  }',

  'p3_test_dumb_spending_diagnosis.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["재테크", "절약", "소비습관", "공감", "멍청비용"],

    "en": ["Money", "Saving", "Spending", "Relatable", "MZ"],

    "ja": ["節約", "お金", "共感", "MZ"],

    "zh-CN": ["理财", "省钱", "消费", "共鸣"],

    "zh-TW": ["理財", "省錢", "消費", "共鳴"],

    "vi": ["Tài chính", "Tiết kiệm", "Chi tiêu", "Đồng cảm"],

    "id": ["Keuangan", "Hemat", "Belanja", "Relate"]

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
