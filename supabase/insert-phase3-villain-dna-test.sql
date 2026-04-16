-- 내 안의 흑염룡! 빌런 재질 테스트
-- slug: phase3-villain-dna-test
-- thumbnail: p3_test_villain_dna_test.jpg

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

  'phase3-villain-dna-test',

  '{

    "ko": "내 안의 흑염룡! 빌런 재질 테스트",

    "en": "Black Flame Within! Villain DNA Test",

    "ja": "内なる黒炎！悪役DNAテスト",

    "zh-CN": "内心的黑炎！反派DNA测试",

    "zh-TW": "內心的黑炎！反派DNA測驗",

    "vi": "Ngọn lửa đen trong tôi! Test DNA phản diện",

    "id": "Api Hitam di Dalam! Tes DNA Villain"

  }',

  '{

    "ko": "12문항 2지선다로 보는 빌런 DNA 유형 6가지. #빌런 #성격 #웹툰 #드라마 #공감",

    "en": "12 A/B questions — six villain DNA types. #villain #personality #webtoon #drama #relatable",

    "ja": "12問2択で見る悪役DNAタイプ6種。#悪役 #性格 #ウェブトゥーン #ドラマ #共感",

    "zh-CN": "12 道二选一，六种反派 DNA 类型。#反派 #性格 #网漫 #电视剧 #共鸣",

    "zh-TW": "12 題二選一，六種反派 DNA 類型。#反派 #性格 #網漫 #戲劇 #共鳴",

    "vi": "12 câu trắc nghiệm — 6 kiểu DNA phản diện. #phản diện #tính cách #webtoon #drama #đồng cảm",

    "id": "12 pertanyaan pilihan ganda — 6 tipe DNA villain. #villain #kepribadian #webtoon #drama #relate"

  }',

  'p3_test_villain_dna_test.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["빌런", "성격", "웹툰", "드라마", "공감"],

    "en": ["Villain", "Personality", "Webtoon", "Drama", "Relatable"],

    "ja": ["悪役", "性格", "ウェブトゥーン", "ドラマ", "共感"],

    "zh-CN": ["反派", "性格", "网漫", "电视剧", "共鸣"],

    "zh-TW": ["反派", "性格", "網漫", "戲劇", "共鳴"],

    "vi": ["Phản diện", "Tính cách", "Webtoon", "Drama", "Đồng cảm"],

    "id": ["Villain", "Kepribadian", "Webtoon", "Drama", "Relate"]

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
