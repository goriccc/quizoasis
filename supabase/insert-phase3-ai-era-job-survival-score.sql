-- AI 시대, 내 직업 생존 점수
-- slug: phase3-ai-era-job-survival-score
-- thumbnail: p3_test_ai_era_job_survival_score.webp

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
  'phase3-ai-era-job-survival-score',
  '{"ko": "AI 시대, 내 직업 생존 점수", "en": "My Job Survival Score in the AI Era", "ja": "AI時代、私の職業生存スコア", "zh-CN": "AI时代，我的职业生存分数", "zh-TW": "AI時代，我的職業生存分數", "vi": "Điểm sinh tồn nghề nghiệp của tôi trong thời đại AI", "id": "Skor Kelangsungan Karierku di Era AI"}',
  '{"ko": "12가지 질문으로 내 직업 역량이 AI 시대에 얼마나 경쟁력이 있는지 점수를 매겨드립니다.", "en": "12 questions to score how competitive your job skills are in the AI era.", "ja": "12個の質問で、自分の職業スキルがAI時代にどれくらい競争力があるか採点します。", "zh-CN": "通过12个问题，为你的职业能力在AI时代的竞争力打分。", "zh-TW": "透過12個問題，為你的職業能力在AI時代的競爭力打分。", "vi": "12 câu hỏi để chấm điểm năng lực nghề nghiệp của bạn có cạnh tranh được trong thời đại AI hay không.", "id": "12 pertanyaan untuk menilai seberapa kompetitif kemampuan kerjamu di era AI."}',
  'p3_test_ai_era_job_survival_score.webp',
  'psychology',
  'career',
  '{"ko": ["AI", "직업", "생존"], "en": ["AI", "career", "survival"], "ja": ["AI", "職業", "生存"], "zh-CN": ["AI", "职业", "生存"], "zh-TW": ["AI", "職業", "生存"], "vi": ["AI", "nghề nghiệp", "sinh tồn"], "id": ["AI", "karier", "kelangsungan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
