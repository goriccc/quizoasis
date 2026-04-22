-- 내 지갑을 위협하는 소비 흑역사 유형
-- slug: phase3-spending-dark-history-type
-- 썸네일: p3_test_spending_dark_history_type.jpg

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
  'phase3-spending-dark-history-type',
  '{
    "ko": "내 지갑을 위협하는 소비 흑역사 유형",
    "en": "Spending Dark-History Type (Wallet Threat)",
    "ja": "財布を脅かす消費ブラック履歴タイプ",
    "zh-CN": "威胁钱包的消费黑历史类型",
    "zh-TW": "威脅錢包的消費黑歷史類型",
    "vi": "Kiểu “hố đen” tiêu xài đe dọa ví",
    "id": "Tipe riwayat belanja gelap yang mengancam dompet"
  }',
  '{
    "ko": "12문항 4지선다로 보는 소비 흑역사 6유형 진단과 재발 방지책. #소비 #공감 #재테크",
    "en": "12 questions, 4 choices — 6 spending slip-up types + prevention tips. #spending #empathy #money",
    "ja": "12問4択で見る消費ブラック履歴6タイプと再発防止。#消費 #共感 #家計",
    "zh-CN": "12 道四选一，六种消费黑历史与防再犯。#消费 #共情 #理财",
    "zh-TW": "12 題四選一，六種消費黑歷史與防再犯。#消費 #共情 #理財",
    "vi": "12 câu 4 lựa chọn — 6 kiểu “hố đen” chi tiêu và cách tránh lặp lại.",
    "id": "12 soal 4 pilihan — 6 tipe kesalahan belanja dan pencegahan."
  }',
  'p3_test_spending_dark_history_type.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["소비", "공감", "재테크"],
    "en": ["Spending", "Empathy", "Money tips"],
    "ja": ["消費", "共感", "家計"],
    "zh-CN": ["消费", "共情", "理财"],
    "zh-TW": ["消費", "共情", "理財"],
    "vi": ["Chi tiêu", "Đồng cảm", "Tài chính"],
    "id": ["Belanja", "Empati", "Keuangan"]
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
