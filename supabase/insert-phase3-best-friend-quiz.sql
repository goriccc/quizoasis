-- 나를 제일 잘 아는 친구는?

-- slug: phase3-best-friend-quiz

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

  'phase3-best-friend-quiz',

  '{

    "ko": "나를 제일 잘 아는 친구는?",

    "en": "Who knows me best?",

    "ja": "私を一番よく知ってる友だちは？",

    "zh-CN": "谁最了解我？",

    "zh-TW": "誰最了解我？",

    "vi": "Ai hiểu tôi nhất?",

    "id": "Siapa yang paling mengenal saya?"

  }',

  '{

    "ko": "10문항 찐친 퀴즈. 먼저 내가 정답을 정하고 친구에게 링크를 공유하세요. #관계 #우정 #찐친",

    "en": "10-question BFF quiz: set your answers first, then share the link with friends. #friends #friendship #bff",

    "ja": "10問の親友クイズ。先に正解を決めて友だちにリンクを共有。#友だち #友情",

    "zh-CN": "10 题挚友测验：先设定你的答案，再分享链接给好友。#友情 #挚友",

    "zh-TW": "10 題摯友測驗：先設定你的答案，再分享連結給好友。#友情 #摯友",

    "vi": "Quiz 10 câu bạn thân: chọn đáp án của bạn trước, rồi chia sẻ link. #bạn #tình bạn",

    "id": "Kuis 10 soal sahabat: tentukan jawabanmu dulu, lalu bagikan tautannya. #teman #persahabatan"

  }',

  'p3_test_best_friend_quiz.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["관계", "우정", "찐친"],

    "en": ["relationships", "friendship", "bff"],

    "ja": ["人間関係", "友情", "親友"],

    "zh-CN": ["关系", "友情", "挚友"],

    "zh-TW": ["關係", "友情", "摯友"],

    "vi": ["quan hệ", "tình bạn", "bạn thân"],

    "id": ["hubungan", "persahabatan", "sahabat"]

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

