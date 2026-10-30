-- 단톡방 속 나는 어떤 캐릭터일까?
-- slug: phase3-groupchat-character
-- thumbnail: p3_test_groupchat_character.webp

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
  'phase3-groupchat-character',
  '{"ko":"단톡방 속 나는 어떤 캐릭터일까?","en":"What Group-Chat Character Am I?","ja":"グループLINEの中、私はどのキャラ？","zh-CN":"群聊里的我是哪种角色？","zh-TW":"群組裡的我是哪種角色？","vi":"Trong nhóm chat mình là kiểu nhân vật nào?","id":"Di Grup Chat Aku Karakter yang Mana?"}',
  '{"ko":"단톡방 속 나는 어떤 캐릭터일까? 12가지 상황에서 가장 나다운 반응을 고르면 8가지 캐릭터 중 나의 캐릭터를 알려드립니다.","en":"What character are you in the group chat? Pick your most natural reactions in 12 situations and find your type among 8 characters.","ja":"グループチャットの中、あなたはどのキャラ？12の場面でいちばん自然な反応を選ぶと、8タイプの中からあなたのキャラがわかります。","zh-CN":"群聊里的你是哪种角色？在12个情境里选最自然的反应，看看你属于8种角色中的哪一种。","zh-TW":"群組聊天裡的你是哪種角色？在12個情境裡選最自然的反應，看看你屬於8種角色中的哪一種。","vi":"Trong nhóm chat bạn là kiểu nhân vật nào? Chọn phản ứng tự nhiên nhất trong 12 tình huống để tìm ra kiểu của bạn trong 8 nhân vật.","id":"Di grup chat kamu tipe karakter yang mana? Pilih reaksi paling natural di 12 situasi dan temukan tipemu di antara 8 karakter."}',
  'p3_test_groupchat_character.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko":["대화스타일"],"en":["chat style","conversation style"],"ja":["チャットスタイル","会話スタイル"],"zh-CN":["聊天风格","对话风格"],"zh-TW":["聊天風格","對話風格"],"vi":["phong cách chat","phong cách trò chuyện"],"id":["gaya chat","gaya ngobrol"]}',
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
