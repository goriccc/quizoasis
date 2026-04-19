-- 어른들 멘붕! 초등 수학 퀴즈
-- slug: phase3-elementary-math-adults-quiz
-- thumbnail: p3_quiz_elementary_math_adults.jpg

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

  'phase3-elementary-math-adults-quiz',

  '{

    "ko": "어른들 멘붕! 초등 수학 퀴즈",

    "en": "Adults Meltdown! Elementary Math Quiz",

    "ja": "大人むずっ！小学生算数クイズ",

    "zh-CN": "大人崩溃！小学数学测验",

    "zh-TW": "大人崩潰！小學數學測驗",

    "vi": "Người lớn cũng trượt! Quiz toán tiểu học",

    "id": "Orang dewasa kewalahan! Kuis matematika SD"

  }',

  '{

    "ko": "10문항 4지선다 초등 수학 함정 퀴즈. 연산 순서·분수·최소공배수까지. #수학 #퀴즈 #초등 #두뇌게임 #자존심",

    "en": "10 multiple-choice elementary math trick questions. Order of operations, fractions, LCM, and more. #math #quiz #brain",

    "ja": "算数の落とし穴10問4択。演算順序・分数・最小公倍数など。#算数 #クイズ #脳トレ",

    "zh-CN": "10 道四选一小学数学陷阱题。运算顺序、分数、最小公倍数等。#数学 #测验",

    "zh-TW": "10 題四選一小學數學陷阱題。運算順序、分數、最小公倍數等。#數學 #測驗",

    "vi": "10 câu trắc nghiệm 4 đáp án — bẫy toán tiểu học. Thứ tự phép tính, phân số, BCNN… #toán #quiz",

    "id": "10 soal pilihan ganda matematika SD — jebakan urutan operasi, pecahan, KPK… #matematika #quiz"

  }',

  'p3_quiz_elementary_math_adults.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["수학", "퀴즈", "초등", "두뇌게임", "자존심"],

    "en": ["Math", "Quiz", "Elementary", "Brain game", "Pride"],

    "ja": ["算数", "クイズ", "小学生", "脳トレ", "プライド"],

    "zh-CN": ["数学", "测验", "小学", "脑力", "自尊"],

    "zh-TW": ["數學", "測驗", "小學", "腦力", "自尊"],

    "vi": ["Toán", "Quiz", "Tiểu học", "Trí não", "Tự tôn"],

    "id": ["Matematika", "Quiz", "SD", "Otak", "Ego"]

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
