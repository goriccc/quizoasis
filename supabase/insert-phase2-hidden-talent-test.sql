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
  'phase2_hidden_talent_test',
  '{
    "ko": "아직 모르는 나의 숨겨진 재능 찾기",
    "en": "Find My Hidden Talent",
    "ja": "まだ知らない私の隠れた才能を見つける",
    "zh-CN": "寻找我还不知道的隐藏才能",
    "zh-TW": "尋找我還不知道的隱藏才能",
    "vi": "Tìm Kiếm Tài Năng Ẩn Giấu Của Tôi",
    "id": "Temukan Bakat Tersembunyi Saya"
  }',
  '{
    "ko": "당신은 아직 자신의 100%를 쓰지 않았습니다.",
    "en": "You haven&apos;t used 100% of yourself yet.",
    "ja": "あなたはまだ自分の100%を使っていません。",
    "zh-CN": "你还没有使用自己的100%。",
    "zh-TW": "你還沒有使用自己的100%。",
    "vi": "Bạn vẫn chưa sử dụng 100% bản thân mình.",
    "id": "Anda belum menggunakan 100% dari diri Anda."
  }',
  'phase2_test_055_hidden_talent.jpg',
  'aptitude',
  'self-understanding',
  '{
    "ko": ["적성"],
    "en": ["aptitude"],
    "ja": ["適性"],
    "zh-CN": ["适性"],
    "zh-TW": ["適性"],
    "vi": ["năng khiếu"],
    "id": ["bakat"]
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

