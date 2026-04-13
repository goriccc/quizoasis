-- 나 혹시 ADHD 성향 있어?
-- slug: phase3-adhd-tendency-checklist
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
  'phase3-adhd-tendency-checklist',
  '{
    "ko": "나 혹시 ADHD 성향 있어?",
    "en": "Do I Have ADHD Tendencies?",
    "ja": "もしかしてADHD傾向？",
    "zh-CN": "我有没有 ADHD 倾向？",
    "zh-TW": "我有沒有 ADHD 傾向？",
    "vi": "Tôi có xu hướng ADHD không?",
    "id": "Apakah Aku Punya Kecenderungan ADHD?"
  }',
  '{
    "ko": "집중력·충동·과잉행동 패턴을 12문항으로 점검하는 자기 이해 체크리스트. #ADHD #성향 #자기이해",
    "en": "12-item self-check for focus, impulse, and activity patterns—not a diagnosis. #ADHD #Tendency #SelfInsight",
    "ja": "集中・衝動・活動のパターンを12問でセルフチェック（診断ではありません）。#ADHD #傾向 #自己理解",
    "zh-CN": "12 题自查专注力、冲动与活动度模式（非诊断）。#ADHD #倾向 #自我理解",
    "zh-TW": "12 題自查專注力、衝動與活動度模式（非診斷）。#ADHD #傾向 #自我理解",
    "vi": "12 câu tự kiểm mô hình tập trung, xung động và hoạt động—không phải chẩn đoán. #ADHD #Xu hướng #Tự hiểu",
    "id": "12 pertanyaan cek pola fokus, impuls, dan aktivitas—bukan diagnosis. #ADHD #Kecenderungan #Memahami diri"
  }',
  'p3_test_adhd_tendency_checklist.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["ADHD", "성향", "자기이해"],
    "en": ["ADHD", "Tendency", "Self-understanding"],
    "ja": ["ADHD", "傾向", "自己理解"],
    "zh-CN": ["ADHD", "倾向", "自我理解"],
    "zh-TW": ["ADHD", "傾向", "自我理解"],
    "vi": ["ADHD", "Xu hướng", "Tự hiểu mình"],
    "id": ["ADHD", "Kecenderungan", "Memahami diri"]
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
