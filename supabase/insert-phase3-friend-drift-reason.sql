-- 친구와 멀어지는 이유 테스트
-- slug: phase3-friend-drift-reason
-- thumbnail: p3_test_friend_drift_reason.webp

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
  'phase3-friend-drift-reason',
  '{"ko": "친구와 멀어지는 이유 테스트", "en": "Why friends drift", "ja": "友達と疎遠になる理由", "zh-CN": "和朋友变疏远的原因", "zh-TW": "和朋友變疏遠的原因", "vi": "Vì sao bạn bè dần xa nhau", "id": "Kenapa jadi jarang sama teman"}',
  '{"ko": "12가지 장면에서 나의 거리두기 패턴을 보고, 친구와 다시 가까워지는 한마디를 알려드립니다.", "en": "Twelve everyday moments show how you create distance, and one line that can bring a friend closer.", "ja": "12の場面で、自分が距離を置くパターンと、もう一度近づくための一言が分かります。", "zh-CN": "12个日常场面，看出你怎样拉开距离，并给你一句可以重新靠近的话。", "zh-TW": "12個日常場面，看出你怎樣拉開距離，並給你一句可以重新靠近的話。", "vi": "12 tình huống cho thấy cách bạn tạo khoảng cách, và một câu để lại gần.", "id": "12 momen sehari-hari menunjukkan cara kamu menciptakan jarak, plus satu kalimat untuk dekat lagi."}',
  'p3_test_friend_drift_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["우정", "관계이해", "연애테스트"], "en": ["friendship", "why we drift", "relationships"], "ja": ["友情", "関係の理解", "人間関係"], "zh-CN": ["友情", "关系理解", "人际关系"], "zh-TW": ["友情", "關係理解", "人際關係"], "vi": ["tình bạn", "vì sao xa nhau", "mối quan hệ"], "id": ["persahabatan", "kenapa jarang", "hubungan"]}',
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
