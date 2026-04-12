-- 나의 완벽주의 지수
-- slug: phase3-perfectionism-index
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
  'phase3-perfectionism-index',
  '{
    "ko": "나의 완벽주의 지수",
    "en": "My Perfectionism Index",
    "ja": "私の完璧主義指数",
    "zh-CN": "我的完美主义指数",
    "zh-TW": "我的完美主義指數",
    "vi": "Chỉ số chủ nghĩa hoàn hảo của tôi",
    "id": "Indeks perfeksionismeku"
  }',
  '{
    "ko": "12가지 일상 행동으로 완벽주의 레벨과 삶에 미치는 영향을 분석합니다. #성격 #공감 #자기이해",
    "en": "12 everyday behaviors — perfectionism level and life impact. #Personality #Empathy #SelfInsight",
    "ja": "日常12問で完璧主義レベルと生活への影響を分析。#性格 #共感 #自己理解",
    "zh-CN": "12 道日常行为题，分析完美主义程度与生活影响。#性格 #共情 #自我理解",
    "zh-TW": "12 道日常行為題，分析完美主義程度與生活影響。#性格 #共情 #自我理解",
    "vi": "12 hành vi hàng ngày — mức chủ nghĩa hoàn hảo và tác động.#Tính cách #Đồng cảm #Tự hiểu mình",
    "id": "12 perilaku sehari-hari — tingkat perfeksionisme & dampaknya.#Kepribadian #Empati #Memahami diri"
  }',
  'p3_test_perfectionism_index.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["성격", "공감", "자기이해"],
    "en": ["Personality", "Empathy", "Self-understanding"],
    "ja": ["性格", "共感", "自己理解"],
    "zh-CN": ["性格", "共情", "自我理解"],
    "zh-TW": ["性格", "共情", "自我理解"],
    "vi": ["Tính cách", "Đồng cảm", "Tự hiểu mình"],
    "id": ["Kepribadian", "Empati", "Memahami diri"]
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
