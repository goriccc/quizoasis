-- 모험가 vs 신중파 테스트 데이터 삽입
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
  'adventurer-vs-cautious',
  '{
    "ko": "나는 모험가? vs 신중파?",
    "en": "Am I an Adventurer or Cautious?",
    "ja": "私は冒険家か慎重派か？",
    "zh-CN": "我是冒险家还是谨慎派？",
    "zh-TW": "我是冒險家還是謹慎派？",
    "vi": "Tôi là Nhà Thám Hiểm hay Người Thận Trọng?",
    "id": "Apakah saya Petualang atau Hati-hati?"
  }',
  '{
    "ko": "일단 해보기 vs 생각부터 하기",
    "en": "Try it vs Think first",
    "ja": "とりあえずやってみる vs 考えることから始める",
    "zh-CN": "先试试 vs 先思考",
    "zh-TW": "先試試 vs 先思考",
    "vi": "Thử đã vs Nghĩ trước",
    "id": "Coba dulu vs Pikir dulu"
  }',
  'test_206_adventurer_vs_cautious.jpg',
  'dating',
  'love',
  '{
    "ko": ["성격"],
    "en": ["Personality"],
    "ja": ["性格"],
    "zh-CN": ["性格"],
    "zh-TW": ["性格"],
    "vi": ["Tính cách"],
    "id": ["Kepribadian"]
  }',
  0
);

