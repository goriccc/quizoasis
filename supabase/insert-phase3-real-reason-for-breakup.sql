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
  'phase3-real-reason-for-breakup',
  '{
    "ko": "전 남친/여친 떠나간 진짜 이유",
    "en": "The Real Reason Your Ex Left",
    "ja": "元カノ/元カレが去った本当の理由",
    "zh-CN": "前男/女友离开的真正原因",
    "zh-TW": "前男/女友離開的真正原因",
    "vi": "Lý do thật sự khiến người yêu cũ rời đi",
    "id": "Alasan sebenarnya mantanmu pergi"
  }',
  '{
    "ko": "헤어진 이유를 상대방 탓으로만 돌리고 있진 않나요? 나의 연애 패턴에서 이별의 진짜 원인을 찾아드립니다.",
    "en": "Are you blaming the breakup only on your ex? We find the real breakup cause in YOUR dating patterns.",
    "ja": "別れの理由を相手のせいにばかりしていませんか？あなたの恋愛パターンから、別れの本当の原因を見つけます。",
    "zh-CN": "是不是总把分手的理由全怪在对方头上？我们从你的恋爱模式中，找出分手的真正原因。",
    "zh-TW": "是不是總把分手的理由全怪在對方頭上？我們從你的戀愛模式中，找出分手的真正原因。",
    "vi": "Bạn có đang đổ hết lỗi chia tay cho người yêu cũ không? Chúng tôi tìm nguyên nhân chia tay thật sự trong kiểu yêu của bạn.",
    "id": "Apakah kamu menyalahkan putus hanya pada mantan? Kami menemukan penyebab putus yang sebenarnya di pola pacaranmu."
  }',
  'p3_test_real_reason_for_breakup.webp',
  'psychology',
  'personality',
  '{
    "ko": ["이별", "연애", "자기반성", "심리", "공감"],
    "en": ["Breakup", "Dating", "Self-reflection", "Psychology", "Empathy"],
    "ja": ["別れ", "恋愛", "自己反省", "心理", "共感"],
    "zh-CN": ["分手", "恋爱", "自我反省", "心理", "共情"],
    "zh-TW": ["分手", "戀愛", "自我反省", "心理", "同理心"],
    "vi": ["Chia tay", "Hẹn hò", "Tự phản tỉnh", "Tâm lý", "Đồng cảm"],
    "id": ["Putus", "Pacaran", "Refleksi diri", "Psikologi", "Empati"]
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
