-- 썸 vs 연애 결정 타이밍 진단
-- slug: phase3-some-vs-relationship-timing
-- thumbnail: p3_test_some_vs_relationship_timing.jpg

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
  'phase3-some-vs-relationship-timing',
  '{
    "ko": "썸 vs 연애 결정 타이밍 진단",
    "en": "Some vs Dating: When to Make It Official",
    "ja": "サマ恋・告白タイミング診断",
    "zh-CN": "暧昧 vs 恋爱：告白时机诊断",
    "zh-TW": "曖昧 vs 戀愛：告白時機診斷",
    "vi": "Mập mờ vs yêu: thời điểm tỏ tình",
    "id": "Some vs pacaran: waktu tepat menyatakan cinta"
  }',
  '{
    "ko": "12문항 4지선다로 관계 신호와 고백·정리 타이밍 처방까지. #연애 #심리 #관계",
    "en": "12 multiple-choice questions — relationship signals plus timing advice. #love #psychology #relationships",
    "ja": "12問4択で関係のサインと告白・整理のタイミング。#恋愛 #心理 #関係",
    "zh-CN": "12 道四选一：关系信号与告白/整理时机建议。#恋爱 #心理 #关系",
    "zh-TW": "12 題四選一：關係訊號與告白／整理時機建議。#戀愛 #心理 #關係",
    "vi": "12 câu 4 lựa chọn — tín hiệu và lời khuyên thời điểm. #yêu #tâm_lý #quan_hệ",
    "id": "12 soal 4 pilihan — sinyal hubungan & saran waktu. #cinta #psikologi #hubungan"
  }',
  'p3_test_some_vs_relationship_timing.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["연애", "심리", "관계"],
    "en": ["Love", "Psychology", "Relationships"],
    "ja": ["恋愛", "心理", "関係"],
    "zh-CN": ["恋爱", "心理", "关系"],
    "zh-TW": ["戀愛", "心理", "關係"],
    "vi": ["Tình yêu", "Tâm lý", "Quan hệ"],
    "id": ["Cinta", "Psikologi", "Hubungan"]
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
