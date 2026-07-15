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
  'phase3-career-aptitude-ai-16types',
  '{
    "ko": "직업 적성 AI 분석 (16가지 직군)",
    "en": "Career Aptitude AI Analysis (16 Career Types)",
    "ja": "職業適性AI分析（16職群）",
    "zh-CN": "职业适性 AI 分析（16种职群）",
    "zh-TW": "職業適性 AI 分析（16種職群）",
    "vi": "Phân tích năng lực nghề nghiệp AI (16 nhóm nghề)",
    "id": "Analisis Bakat Karier AI (16 Kelompok Karier)"
}',
  '{
    "ko": "내가 어떤 일을 해야 오래, 잘 할 수 있을까요?",
    "en": "What work can you do well and enjoy for the long run?",
    "ja": "自分はどんな仕事なら、長く、うまく続けられる？",
    "zh-CN": "什么工作能让你做得久，也做得好？",
    "zh-TW": "什麼工作能讓你做得久，也做得好？",
    "vi": "Công việc nào bạn có thể làm lâu dài và làm thật tốt?",
    "id": "Pekerjaan seperti apa yang bisa kamu lakukan lama dan dengan baik?"
}',
  'p3_test_career_aptitude_ai_16types.webp',
  'psychology',
  'personality',
  '{
    "ko": [
        "직업",
        "적성",
        "커리어",
        "취업",
        "이직"
    ],
    "en": [
        "Career",
        "Aptitude",
        "Career quiz",
        "Job search",
        "Career change"
    ],
    "ja": [
        "職業",
        "適性",
        "キャリア",
        "就職",
        "転職"
    ],
    "zh-CN": [
        "职业",
        "适性",
        "职涯",
        "求职",
        "跳槽"
    ],
    "zh-TW": [
        "職業",
        "適性",
        "職涯",
        "求職",
        "轉職"
    ],
    "vi": [
        "Nghề nghiệp",
        "Năng lực",
        "Sự nghiệp",
        "Việc làm",
        "Chuyển việc"
    ],
    "id": [
        "Karier",
        "Bakat",
        "Pengembangan karier",
        "Pencarian kerja",
        "Ganti pekerjaan"
    ]
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
