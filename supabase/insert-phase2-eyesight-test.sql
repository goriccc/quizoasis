-- Insert Phase 2 Eyesight Test
INSERT INTO tests (slug, title, description, thumbnail, type, category, tags, created_at, updated_at)
VALUES (
  'phase2_eyesight_test',
  '{"ko": "내 시력은 몽골인? (초간편 시력 측정)", "en": "Am I Mongolian? (Quick Vision Test)", "ja": "私の視力はモンゴル人？(簡単視力測定)", "zh": "我的视力是蒙古人吗？(快速视力测试)", "zh-TW": "我的視力是蒙古人嗎？(快速視力測試)", "vi": "Thị lực của tôi có phải là người Mông Cổ? (Kiểm tra thị lực nhanh)", "id": "Apakah Penglihatan Saya Orang Mongolia? (Tes Penglihatan Cepat)"}'::jsonb,
  '{"ko": "지금 이 글씨가 흐릿하게 보이나요? 하루 종일 스마트폰과 모니터에 시달리는 당신의 눈. 혹시 시력이 뚝뚝 떨어지고 있진 않을까요? 병원에 가지 않아도 1분 만에 확인하는 내 눈의 상태!", "en": "Is this text blurry right now? Your eyes, exhausted by smartphones and monitors all day. Is your vision dropping rapidly? Check your eye condition in just 1 minute without visiting a hospital!", "ja": "今、この文字がぼやけて見えますか？一日中スマートフォンとモニターに苦しめられているあなたの目。視力が急激に低下していませんか？病院に行かなくても1分で確認できる目の状態！", "zh": "现在这些字看起来模糊吗？你整日面对手机和显示器，眼睛疲惫。视力是否在急剧下降？无需去医院，1分钟即可检查你的眼睛状况！", "zh-TW": "現在這些字看起來模糊嗎？你整日面對手機和顯示器，眼睛疲憊。視力是否在急劇下降？無需去醫院，1分鐘即可檢查你的眼睛狀況！", "vi": "Bây giờ văn bản này có mờ không? Đôi mắt của bạn, kiệt sức vì điện thoại thông minh và màn hình cả ngày. Thị lực của bạn có đang giảm mạnh không? Kiểm tra tình trạng mắt chỉ trong 1 phút mà không cần đến bệnh viện!", "id": "Apakah teks ini terlihat buram sekarang? Mata Anda, kelelahan karena smartphone dan monitor sepanjang hari. Apakah penglihatan Anda turun drastis? Periksa kondisi mata Anda hanya dalam 1 menit tanpa mengunjungi rumah sakit!"}'::jsonb,
  'phase2_test_161_eyesight_test.jpg',
  'game',
  'capability',
  '{"ko": ["챌린지", "게임", "시력", "건강"], "en": ["Challenge", "Game", "Vision", "Health"], "ja": ["チャレンジ", "ゲーム", "視力", "健康"], "zh": ["挑战", "游戏", "视力", "健康"], "zh-TW": ["挑戰", "遊戲", "視力", "健康"], "vi": ["Thử thách", "Trò chơi", "Thị lực", "Sức khỏe"], "id": ["Tantangan", "Game", "Penglihatan", "Kesehatan"]}'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET 
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();

