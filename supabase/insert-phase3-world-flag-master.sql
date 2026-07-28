-- 세계 국기 고수 테스트
-- slug: phase3-world-flag-master
-- thumbnail: p3_quiz_world_flag_master.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-world-flag-master',
  '{"ko": "세계 국기 고수 테스트", "en": "World Flag Master Test", "ja": "世界国旗マスターテスト", "zh-CN": "世界国旗高手测试", "zh-TW": "世界國旗高手測試", "vi": "Bài kiểm tra chuyên gia cờ thế giới", "id": "Tes Master Bendera Dunia"}',
  '{"ko": "12개의 국기 이미지로 나라를 맞춰보세요. 일본부터 카자흐스탄까지, 세계 국기 고수 등급을 확인하세요!", "en": "Match 12 flag images to their countries. From Japan to Kazakhstan—find your world flag rank!", "ja": "12の国旗画像で国を当てましょう。日本からカザフスタンまで、世界国旗マスター等級を確認！", "zh-CN": "通过12道国旗图片猜国家。从日本到哈萨克斯坦，测测你的世界国旗等级！", "zh-TW": "透過12道國旗圖片猜國家。從日本到哈薩克，測測你的世界國旗等級！", "vi": "Đoán quốc gia qua 12 ảnh cờ thế giới. Từ Nhật đến Kazakhstan—xem cấp độ cờ của bạn!", "id": "Tebak negara dari 12 gambar bendera dunia. Dari Jepang ke Kazakhstan—cek level bendera duniamu!"}',
  'p3_quiz_world_flag_master.webp',
  'knowledge',
  'challenge',
  'quiz',
  '{"ko": ["세계국기", "지리상식", "퀴즈", "국기챌린지", "도전"], "en": ["world flag", "geography quiz", "quiz", "flag challenge", "challenge"], "ja": ["世界国旗", "地理クイズ", "クイズ", "国旗チャレンジ", "挑戦"], "zh-CN": ["世界国旗", "地理常识", "测验", "国旗挑战", "挑战"], "zh-TW": ["世界國旗", "地理常識", "測驗", "國旗挑戰", "挑戰"], "vi": ["cờ thế giới", "địa lý", "quiz", "thử thách cờ", "thử thách"], "id": ["bendera dunia", "geografi", "kuis", "tantangan bendera", "tantangan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
