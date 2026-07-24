-- '기억력' 한계 챌린지
-- slug: phase3-memory-limit-challenge
-- thumbnail: p3_test_memory_limit_challenge.webp

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
  'phase3-memory-limit-challenge',
  '{"ko": "''기억력'' 한계 챌린지", "en": "Memory Limit Challenge", "ja": "「記憶力」限界チャレンジ", "zh-CN": "「记忆力」极限挑战", "zh-TW": "「記憶力」極限挑戰", "vi": "Thử thách Giới hạn Trí nhớ", "id": "Tantangan Batas Memori"}',
  '{"ko": "12라운드 이미지 기억 챌린지로 단기 기억력을 0~12점으로 측정합니다. 내 뇌세포 아직 살아있음?", "en": "Measure your short-term memory from 0–12 with a 12-round image memory challenge. Are your brain cells still alive?", "ja": "12ラウンドの画像記憶チャレンジで短期記憶力を0〜12点で測定。あなたの脳細胞はまだ生きている？", "zh-CN": "通过12轮图像记忆挑战，将短期记忆力测量为0~12分。你的脑细胞还活着吗？", "zh-TW": "透過12輪圖像記憶挑戰，將短期記憶力測量為0~12分。你的腦細胞還活著嗎？", "vi": "Đo trí nhớ ngắn hạn 0–12 qua 12 vòng thử thách ghi nhớ hình ảnh. Não bạn còn sống không?", "id": "Ukur memori jangka pendek 0–12 lewat 12 ronde tantangan ingat gambar. Sel otakmu masih hidup?"}',
  'p3_test_memory_limit_challenge.webp',
  'game',
  'brain',
  '{"ko": ["기억력", "챌린지", "뇌세포", "단기기억", "퀴즈"], "en": ["memory", "challenge", "brain cells", "short-term memory", "quiz"], "ja": ["記憶力", "チャレンジ", "脳細胞", "短期記憶", "クイズ"], "zh-CN": ["记忆力", "挑战", "脑细胞", "短期记忆", "测验"], "zh-TW": ["記憶力", "挑戰", "腦細胞", "短期記憶", "測驗"], "vi": ["trí nhớ", "thử thách", "tế bào não", "trí nhớ ngắn hạn", "quiz"], "id": ["memori", "tantangan", "sel otak", "memori jangka pendek", "kuis"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
