-- 내가 '회사 빌런'이 될 확률?
-- slug: phase3-office-villain-probability
-- thumbnail: p3_test_office_villain_probability.webp

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
  'phase3-office-villain-probability',
  '{"ko": "내가 ''회사 빌런''이 될 확률?", "en": "What''s My Odds of Becoming an ''Office Villain''?", "ja": "私が「オフィス悪役」になる確率は？", "zh-CN": "我成为「职场反派」的概率？", "zh-TW": "我成為「職場反派」的機率？", "vi": "Xác suất tôi trở thành ''phản diện công sở''?", "id": "Berapa Peluangku Jadi ''Penjahat Kantor''?"}',
  '{"ko": "12가지 오피스 상황극으로 나의 직장 빌런 확률을 솔직하게 측정합니다.", "en": "12 real office scenarios honestly measure your odds of being a workplace villain.", "ja": "12のオフィス状況劇で、あなたの職場悪役確率を正直に測定します。", "zh-CN": "通过12个办公室情景剧，诚实测量你成为职场反派的概率。", "zh-TW": "透過12個辦公室情境劇，誠實測量你成為職場反派的機率。", "vi": "12 tình huống văn phòng đo xác suất bạn trở thành phản diện công sở một cách thẳng thắn.", "id": "12 skenario kantor mengukur peluangmu jadi penjahat kantor secara jujur."}',
  'p3_test_office_villain_probability.webp',
  'psychology',
  'personality',
  '{"ko": ["회사빌런", "직장인", "오피스", "공감", "블라인드"], "en": ["office villain", "office worker", "office", "relatable", "Blind"], "ja": ["オフィス悪役", "会社員", "オフィス", "共感", "Blind"], "zh-CN": ["职场反派", "上班族", "办公室", "共鸣", "Blind"], "zh-TW": ["職場反派", "上班族", "辦公室", "共鳴", "Blind"], "vi": ["phản diện công sở", "nhân viên văn phòng", "văn phòng", "đồng cảm", "Blind"], "id": ["penjahat kantor", "pekerja kantor", "kantor", "relatable", "Blind"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
