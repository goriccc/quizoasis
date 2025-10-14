-- 친구 테스트 메타데이터 삽입
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  play_count,
  tags
) VALUES (
  'friend-test',
  '{"ko": "친구들에게 나는 어떤 친구일까?", "en": "What kind of friend am I to my friends?", "ja": "友達にとって私はどんな友達？", "zh-CN": "在朋友眼中我是什么样的朋友？", "zh-TW": "在朋友眼中我是什麼樣的朋友？", "vi": "Tôi là kiểu bạn bè gì đối với bạn bè?", "id": "Saya teman seperti apa bagi teman-teman saya?"}',
  '{"ko": "내가 생각하는 나 vs 친구들이 보는 나. 친구가 힘들 때, 나는 어떤 역할을 할까? 친구들은 나를 어떻게 기억할까?", "en": "Me as I think vs me as my friends see me. What role do I play when friends are having a hard time? How do friends remember me?", "ja": "私が思う私 vs 友達が見る私。友達が困っている時、私はどんな役割をする？友達は私をどう覚えている？", "zh-CN": "我想象中的我 vs 朋友眼中的我。朋友困难时，我扮演什么角色？朋友怎么记住我？", "zh-TW": "我想像中的我 vs 朋友眼中的我。朋友困難時，我扮演什麼角色？朋友怎麼記住我？", "vi": "Tôi như tôi nghĩ vs tôi như bạn bè nhìn thấy. Khi bạn bè gặp khó khăn, tôi đóng vai trò gì? Bạn bè nhớ tôi như thế nào?", "id": "Saya seperti yang saya pikir vs saya seperti yang dilihat teman-teman. Peran apa yang saya mainkan ketika teman-teman mengalami kesulitan? Bagaimana teman-teman mengingat saya?"}',
  'test_029_what_kind_of_friend.jpg',
  'dating',
  0,
  '["우정", "관계", "성격"]'
);

-- 만약 이미 존재한다면 업데이트
UPDATE tests SET
  title = '{"ko": "친구들에게 나는 어떤 친구일까?", "en": "What kind of friend am I to my friends?", "ja": "友達にとって私はどんな友達？", "zh-CN": "在朋友眼中我是什么样的朋友？", "zh-TW": "在朋友眼中我是什麼樣的朋友？", "vi": "Tôi là kiểu bạn bè gì đối với bạn bè?", "id": "Saya teman seperti apa bagi teman-teman saya?"}',
  description = '{"ko": "내가 생각하는 나 vs 친구들이 보는 나. 친구가 힘들 때, 나는 어떤 역할을 할까? 친구들은 나를 어떻게 기억할까?", "en": "Me as I think vs me as my friends see me. What role do I play when friends are having a hard time? How do friends remember me?", "ja": "私が思う私 vs 友達が見る私。友達が困っている時、私はどんな役割をする？友達は私をどう覚えている？", "zh-CN": "我想象中的我 vs 朋友眼中的我。朋友困难时，我扮演什么角色？朋友怎么记住我？", "zh-TW": "我想像中的我 vs 朋友眼中的我。朋友困難時，我扮演什麼角色？朋友怎麼記住我？", "vi": "Tôi như tôi nghĩ vs tôi như bạn bè nhìn thấy. Khi bạn bè gặp khó khăn, tôi đóng vai trò gì? Bạn bè nhớ tôi như thế nào?", "id": "Saya seperti yang saya pikir vs saya seperti yang dilihat teman-teman. Peran apa yang saya mainkan ketika teman-teman mengalami kesulitan? Bagaimana teman-teman mengingat saya?"}',
  thumbnail = 'test_029_what_kind_of_friend.jpg',
  type = 'dating',
  tags = '["우정", "관계", "성격"]'
WHERE slug = 'friend-test';
