-- 밸런스 게임 - 직장생활편 (극한)
-- slug: phase3-office-balance-game
-- thumbnail: p3_game_office_balance_extreme.jpg

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

  'phase3-office-balance-game',

  '{

    "ko": "밸런스 게임 - 직장생활편 (극한)",

    "en": "Balance Game — Office Life (Extreme)",

    "ja": "バランスゲーム 職場編（極限）",

    "zh-CN": "平衡游戏 · 职场篇（极限）",

    "zh-TW": "平衡遊戲 · 職場篇（極限）",

    "vi": "Trò cân bằng — đời công sở (cực hạn)",

    "id": "Permainan seimbang — kehidupan kantor (ekstrem)"

  }',

  '{

    "ko": "10문항 텍스트 2지선다 직장 밸런스 6유형. #직장 #밸런스게임 #직장인 #유머 #워라밸",

    "en": "10 A/B office-life dilemmas — 6 work-style types. #office #balance #humor #worklife",

    "ja": "テキスト10問2択の職場バランス6タイプ。#職場 #バランスゲーム",

    "zh-CN": "10 道文字二选一，六种职场平衡类型。#职场 #平衡游戏",

    "zh-TW": "10 題文字二選一，六種職場平衡類型。#職場 #平衡遊戲",

    "vi": "10 câu chữ 2 lựa chọn — 6 kiểu cân bằng công sở. #côngsở #humor",

    "id": "10 soal teks 2 pilihan — 6 tipe keseimbangan kantor. #kantor #humor"

  }',

  'p3_game_office_balance_extreme.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["직장", "밸런스게임", "직장인", "유머", "워라밸"],

    "en": ["Office", "Balance game", "Work humor", "Work-life"],

    "ja": ["職場", "バランスゲーム", "ユーモア"],

    "zh-CN": ["职场", "平衡游戏", "幽默"],

    "zh-TW": ["職場", "平衡遊戲", "幽默"],

    "vi": ["Công sở", "Trò cân bằng", "Hài hước"],

    "id": ["Kantor", "Permainan seimbang", "Humor"]

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
