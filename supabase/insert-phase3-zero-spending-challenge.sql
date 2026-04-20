-- 무지출 챌린지 성공 가능성은?
-- slug: phase3-zero-spending-challenge
-- thumbnail: p3_test_zero_spending_challenge_rate.jpg

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

  'phase3-zero-spending-challenge',

  '{

    "ko": "무지출 챌린지 성공 가능성은?",

    "en": "Zero-Spend Challenge: Your Success Odds",

    "ja": "無支出チャレンジ成功の可能性は？",

    "zh-CN": "零消费挑战成功率是多少？",

    "zh-TW": "零消費挑戰成功率是多少？",

    "vi": "Thử thách chi 0 đồng: khả năng thành công của bạn?",

    "id": "Tantangan belanja nol: peluang suksesmu?"

  }',

  '{

    "ko": "12문항 텍스트 4지선다로 보는 무지출 챌린지 성공 확률 6구간. #챌린지 #소비습관 #재테크",

    "en": "12 text MCQs — 6 success-rate bands for a zero-spend day. #challenge #spending #money",

    "ja": "テキスト12問4択で見る無支出チャレンジ成功確率6段階。#チャレンジ #節約",

    "zh-CN": "12 道文字四选一，六种零消费日成功概率区间。#挑战 #消费 #理财",

    "zh-TW": "12 題文字四選一，六種零消費日成功機率區間。#挑戰 #消費 #理財",

    "vi": "12 câu chữ 4 đáp án — 6 mức xác suất chi 0 đồng. #thử thách #chi tiêu",

    "id": "12 soal teks 4 opsi — 6 rentang peluang sukses belanja Rp0. #tantangan #uang"

  }',

  'p3_test_zero_spending_challenge_rate.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["챌린지", "소비습관", "재테크"],

    "en": ["Challenge", "Spending habits", "Money"],

    "ja": ["チャレンジ", "消費", "お金"],

    "zh-CN": ["挑战", "消费习惯", "理财"],

    "zh-TW": ["挑戰", "消費習慣", "理財"],

    "vi": ["Thử thách", "Thói chi tiêu", "Tài chính"],

    "id": ["Tantangan", "Kebiasaan belanja", "Uang"]

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
