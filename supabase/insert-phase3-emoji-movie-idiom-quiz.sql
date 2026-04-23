-- 이모티콘 퀴즈 (영화 & 관용구)
-- slug: phase3-emoji-movie-idiom-quiz
-- thumbnail: p3_quiz_emoji_movie_idiom.jpg

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
  'phase3-emoji-movie-idiom-quiz',
  '{
    "ko": "이모티콘 퀴즈 (영화 & 관용구)",
    "en": "Emoji Quiz: Movies & Korean Idioms",
    "ja": "絵文字クイズ（映画＆慣用句）",
    "zh-CN": "表情符号测验（电影与成语）",
    "zh-TW": "表情符號測驗（電影與成語）",
    "vi": "Quiz emoji: phim & thành ngữ Hàn",
    "id": "Kuis emoji: film & peribahasa Korea"
  }',
  '{
    "ko": "이모티콘만 보고 영화 제목·한국 관용구 맞히기 10문항 4지선다. #퀴즈 #이모티콘 #영화 #관용구 #두뇌게임",
    "en": "10 emoji multiple-choice questions—movies & Korean idioms. #quiz #emoji #movies #idioms #brain",
    "ja": "絵文字だけで映画タイトル・韓国慣用句10問4択。#クイズ #絵文字 #映画 #慣用句",
    "zh-CN": "10 道表情猜电影与韩国成语四选一。#测验 #表情 #电影 #成语",
    "zh-TW": "10 題表情猜電影與韓國成語四選一。#測驗 #表情 #電影 #成語",
    "vi": "10 câu emoji đoán phim & thành ngữ Hàn.#quiz #emoji #phim",
    "id": "10 soal emoji tebak film & peribahasa Korea.#kuis #emoji #film"
  }',
  'p3_quiz_emoji_movie_idiom.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["퀴즈", "이모티콘", "영화", "관용구", "두뇌게임"],
    "en": ["Quiz", "Emoji", "Movies", "Idioms", "Brain game"],
    "ja": ["クイズ", "絵文字", "映画", "慣用句", "脳トレ"],
    "zh-CN": ["测验", "表情", "电影", "成语", "脑力"],
    "zh-TW": ["測驗", "表情", "電影", "成語", "腦力"],
    "vi": ["Quiz", "Emoji", "Phim", "Thành ngữ", "Trí não"],
    "id": ["Kuis", "Emoji", "Film", "Peribahasa", "Otak"]
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
