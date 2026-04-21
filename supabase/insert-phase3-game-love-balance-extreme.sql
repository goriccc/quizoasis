-- 밸런스 게임 - 연애편 극한버전
-- slug: phase3-game-love-balance-extreme

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
  'phase3-game-love-balance-extreme',
  '{
    "ko": "밸런스 게임 - 연애편 극한버전",
    "en": "Extreme Dating Balance Game",
    "ja": "恋愛・極限バランスゲーム",
    "zh-CN": "恋爱极限平衡游戏",
    "zh-TW": "戀愛極限平衡遊戲",
    "vi": "Trò cân bằng tình yêu cực hạn",
    "id": "Game keseimbangan cinta ekstrem"
  }',
  '{
    "ko": "10문항 이미지 2지선다 극한 연애 밸런스 — 연애관·가치관 6유형 분석. #밸런스게임 #연애 #커플 #심리",
    "en": "10 brutal image A/B rounds—6 love-value types. #balance #dating #couples #psychology",
    "ja": "画像10問の究極2択恋愛バランス—恋愛観6タイプ。#バランス #恋愛 #カップル #心理",
    "zh-CN": "10 道图片极限恋爱二选一—6 种恋爱价值观。#平衡 #恋爱 #情侣 #心理",
    "zh-TW": "10 題圖片極限戀愛二選一—6 種戀愛價值觀。#平衡 #戀愛 #情侶 #心理",
    "vi": "10 vòng ảnh 2 lựa chọn cực hạn—6 kiểu giá trị trong yêu. #cân_bằng #yêu #cặp_đôi #tâm_lý",
    "id": "10 ronde gambar A/B ekstrem—6 tipe nilai cinta. #keseimbangan #pacaran #pasangan #psikologi"
  }',
  'p3_game_love_balance_extreme.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["밸런스게임", "연애", "커플", "심리"],
    "en": ["Balance game", "Dating", "Couples", "Psychology"],
    "ja": ["バランスゲーム", "恋愛", "カップル", "心理"],
    "zh-CN": ["平衡游戏", "恋爱", "情侣", "心理"],
    "zh-TW": ["平衡遊戲", "戀愛", "情侶", "心理"],
    "vi": ["Trò cân bằng", "Hẹn hò", "Cặp đôi", "Tâm lý"],
    "id": ["Game seimbang", "Pacaran", "Pasangan", "Psikologi"]
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
