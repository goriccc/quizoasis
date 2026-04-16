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
  'phase3-drama-life-character',
  '{
    "ko": "드라마 속 내 인생 캐릭터",
    "en": "My Life as a Drama Character",
    "ja": "ドラマの中の私というキャラクター",
    "zh-CN": "我人生电视剧里的角色",
    "zh-TW": "我人生戲劇裡的角色",
    "vi": "Nhân vật phim trong đời tôi",
    "id": "Karakter drama dalam hidupku"
  }',
  '{
    "ko": "12문항 2지선다로 보는 드라마 캐릭터 유형 6가지. #드라마 #캐릭터 #성격 #공감",
    "en": "12 A/B questions — which drama character matches your life story? Six types. #drama #character #personality",
    "ja": "12問2択で見る人生ドラマのキャラクター6タイプ。#ドラマ #キャラクター #性格 #共感",
    "zh-CN": "12 道二选一，六种人生剧角色类型。#电视剧 #角色 #性格 #共鸣",
    "zh-TW": "12 題二選一，六種人生劇角色類型。#戲劇 #角色 #性格 #共鳴",
    "vi": "12 câu trắc nghiệm — 6 kiểu nhân vật phim giống câu chuyện đời bạn. #phim #nhân vật",
    "id": "12 pertanyaan — 6 tipe karakter drama seperti kisah hidupmu. #drama #karakter"
  }',
  'p3_test_drama_character_type.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["드라마", "캐릭터", "성격", "공감"],
    "en": ["Drama", "Character", "Personality", "Empathy"],
    "ja": ["ドラマ", "キャラクター", "性格", "共感"],
    "zh-CN": ["电视剧", "角色", "性格", "共鸣"],
    "zh-TW": ["戲劇", "角色", "性格", "共鳴"],
    "vi": ["Phim", "Nhân vật", "Tính cách", "Đồng cảm"],
    "id": ["Drama", "Karakter", "Kepribadian", "Empati"]
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
