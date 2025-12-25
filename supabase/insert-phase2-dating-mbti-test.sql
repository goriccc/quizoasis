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
  'phase2_dating_mbti_test',
  '{
    "ko": "평생 솔로? 연애 호구? 내 연애 MBTI",
    "en": "Forever Solo? Dating Pushover? My Dating MBTI",
    "ja": "一生独身？恋愛カモ？私の恋愛MBTI",
    "zh-CN": "永远单身？恋爱冤大头？我的恋爱MBTI",
    "zh-TW": "永遠單身？戀愛冤大頭？我的戀愛MBTI",
    "vi": "Mãi mãi Độc thân? Kẻ Ngốc trong Hẹn hò? MBTI Hẹn hò của tôi",
    "id": "Selamanya Sendiri? Korban Kencan? MBTI Kencan saya"
  }',
  '{
    "ko": "당신의 연애 세포는 안녕하신가요?",
    "en": "How are your dating cells doing?",
    "ja": "あなたの恋愛細胞は元気ですか？",
    "zh-CN": "你的恋爱细胞还好吗？",
    "zh-TW": "你的戀愛細胞還好嗎？",
    "vi": "Các tế bào hẹn hò của bạn khỏe chứ?",
    "id": "Bagaimana sel kencan Anda?"
  }',
  'phase2_test_140_dating_mbti.jpg',
  'psychology',
  'love',
  '{
    "ko": ["연애", "심리"],
    "en": ["Dating", "Psychology"],
    "ja": ["恋愛", "心理"],
    "zh-CN": ["恋爱", "心理"],
    "zh-TW": ["戀愛", "心理"],
    "vi": ["Hẹn hò", "Tâm lý"],
    "id": ["Kencan", "Psikologi"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

