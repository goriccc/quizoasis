-- 1분 '순발력' 테스트
-- slug: phase3-1min-reaction-speed
-- thumbnail: p3_test_1min_reaction_speed.webp

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
  'phase3-1min-reaction-speed',
  '{"ko": "1분 ''순발력'' 테스트", "en": "1-Min Reflex Test", "ja": "1分『瞬発力』テスト", "zh-CN": "1分钟『反应力』测试", "zh-TW": "1分鐘『反應力』測試", "vi": "Test phản xạ 1 phút", "id": "Tes Refleks 1 Menit"}',
  '{"ko": "60초 안에 단순·판단·복합 반응을 모두 측정합니다. 내 점수 이겼어?", "en": "Measure simple, judgment, and complex reactions in 60 seconds. Can you beat my score?", "ja": "60秒で単純・判断・複合反応をすべて測定。俺のスコア超えられる？", "zh-CN": "60秒内测完简单、判断与复合反应。能赢我的分数吗？", "zh-TW": "60秒內測完簡單、判斷與複合反應。能贏我的分數嗎？", "vi": "Đo phản ứng đơn giản, phán đoán và phức hợp trong 60 giây. Thắng được điểm tao không?", "id": "Ukur reaksi sederhana, penilaian, dan kompleks dalam 60 detik. Bisa kalahkan skor aku?"}',
  'p3_test_1min_reaction_speed.webp',
  'game',
  'capability',
  '{"ko": ["순발력", "반응속도", "1분", "랭킹", "챌린지"], "en": ["reflexes", "reaction speed", "1 minute", "ranking", "challenge"], "ja": ["瞬発力", "反応速度", "1分", "ランキング", "チャレンジ"], "zh-CN": ["反应力", "反应速度", "1分钟", "排行", "挑战"], "zh-TW": ["反應力", "反應速度", "1分鐘", "排行", "挑戰"], "vi": ["phản xạ", "tốc độ phản ứng", "1 phút", "xếp hạng", "thử thách"], "id": ["refleks", "kecepatan reaksi", "1 menit", "peringkat", "tantangan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
