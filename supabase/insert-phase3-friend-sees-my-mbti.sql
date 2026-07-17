-- 친구가 보는 내 MBTI
-- slug: phase3-friend-sees-my-mbti

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
  'phase3-friend-sees-my-mbti',
  '{"ko": "친구가 보는 내 MBTI", "en": "My MBTI Through a Friend''s Eyes", "ja": "友だちが見る私のMBTI", "zh-CN": "朋友眼中的我的MBTI", "zh-TW": "朋友眼中的我的MBTI", "vi": "MBTI của tôi qua mắt bạn bè", "id": "MBTIku lewat mata teman"}',
  '{"ko": "내가 생각한 나 vs 친구가 보는 나, MBTI로 비교해보세요", "en": "Compare how you see yourself vs how a friend sees you — through MBTI", "ja": "自分が思う自分 vs 友だちが見る自分を、MBTIで比較してみよう", "zh-CN": "用 MBTI 对比：你以为的自己 vs 朋友眼里的你", "zh-TW": "用 MBTI 對比：你以為的自己 vs 朋友眼裡的你", "vi": "So sánh bạn nghĩ về mình vs bạn bè nhìn bạn — qua MBTI", "id": "Bandingkan dirimu menurutmu vs menurut teman — lewat MBTI"}',
  'p3_test_friend_sees_my_mbti.webp',
  'psychology',
  'personality',
  '{"ko": ["MBTI", "친구", "심리"], "en": ["MBTI", "Friends", "Psychology"], "ja": ["MBTI", "友だち", "心理"], "zh-CN": ["MBTI", "朋友", "心理"], "zh-TW": ["MBTI", "朋友", "心理"], "vi": ["MBTI", "Bạn bè", "Tâm lý"], "id": ["MBTI", "Teman", "Psikologi"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
