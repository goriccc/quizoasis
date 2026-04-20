-- 나만의 해시태그 생성기
-- slug: phase3-my-hashtag-generator
-- thumbnail: p3_test_my_hashtag_generator.jpg

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

  'phase3-my-hashtag-generator',

  '{
    "ko": "나만의 해시태그 생성기",
    "en": "My Hashtag Generator",
    "ja": "私だけのハッシュタグ生成",
    "zh-CN": "我的专属话题标签生成器",
    "zh-TW": "我的專屬話題標籤產生器",
    "vi": "Trình tạo hashtag của riêng tôi",
    "id": "Pembuat hashtag khas untukku"
  }',

  '{
    "ko": "12문항 텍스트 4지선다로 보는 나를 표현하는 해시태그 6유형과 인스타 바이오 추천. #해시태그 #인스타 #SNS #성격 #자기표현",
    "en": "12 text questions (4 choices) — 6 hashtag styles that express you, plus Instagram bio ideas. #hashtag #instagram #sns #personality",
    "ja": "テキスト12問4択で見る自分を表すハッシュタグ6タイプとインスタBio提案。#ハッシュタグ #インスタ #SNS #性格 #自己表現",
    "zh-CN": "12 道文字四选一，六种表达你的话题标签与简介文案。#话题标签 #ins #社交 #性格 #自我表达",
    "zh-TW": "12 題文字四選一，六種表達你的話題標籤與簡介文案。#話題標籤 #ins #社群 #性格 #自我表達",
    "vi": "12 câu chữ 4 đáp án — 6 kiểu hashtag thể hiện bạn và gợi ý bio Instagram. #hashtag #instagram #sns",
    "id": "12 soal teks 4 opsi — 6 gaya hashtag yang mewakili kamu dan saran bio Instagram. #hashtag #instagram #sns"
  }',

  'p3_test_my_hashtag_generator.jpg',

  'psychology',

  'personality',

  '{
    "ko": ["해시태그", "인스타", "SNS", "성격", "자기표현"],
    "en": ["Hashtag", "Instagram", "SNS", "Personality", "Self-expression"],
    "ja": ["ハッシュタグ", "Instagram", "SNS", "性格", "自己表現"],
    "zh-CN": ["话题标签", "Instagram", "社交", "性格", "自我表达"],
    "zh-TW": ["話題標籤", "Instagram", "社群", "性格", "自我表達"],
    "vi": ["hashtag", "Instagram", "SNS", "tính cách", "thể hiện bản thân"],
    "id": ["hashtag", "Instagram", "SNS", "kepribadian", "ekspresi diri"]
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
