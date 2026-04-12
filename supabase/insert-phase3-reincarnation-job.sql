-- 내가 환생한다면 어떤 직업?
-- slug: phase3-reincarnation-job
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
  'phase3-reincarnation-job',
  '{
    "ko": "내가 환생한다면 어떤 직업?",
    "en": "If I Were Reborn, What Job Would I Have?",
    "ja": "転生したら私はどんな職業？",
    "zh-CN": "如果转世，我会是什么职业？",
    "zh-TW": "如果轉世，我會是什麼職業？",
    "vi": "Nếu đầu thai, tôi sẽ là nghề gì?",
    "id": "Jika bereinkarnasi, pekerjaan apa aku?"
  }',
  '{
    "ko": "12문항 2지선다로 보는 환생 직업·시대 6유형. #환생 #직업 #성격",
    "en": "Six reincarnation job types from 12 A/B questions. #Reincarnation #Job #Personality",
    "ja": "12問2択で見る転生ジョブ・時代6タイプ。#転生 #職業 #性格",
    "zh-CN": "12 道二选一，六种转世职业与时代。#转世 #职业 #性格",
    "zh-TW": "12 題二選一，六種轉世職業與時代。#轉世 #職業 #性格",
    "vi": "12 câu trắc nghiệm, 6 kiểu nghề & thời đại. #Đầu thai #Nghề #Tính cách",
    "id": "12 pertanyaan pilihan ganda, 6 tipe pekerjaan & era. #Reinkarnasi #Pekerjaan #Kepribadian"
  }',
  'p3_test_reincarnation_job_finder.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["환생", "직업", "성격"],
    "en": ["Reincarnation", "Job", "Personality"],
    "ja": ["転生", "職業", "性格"],
    "zh-CN": ["转世", "职业", "性格"],
    "zh-TW": ["轉世", "職業", "性格"],
    "vi": ["Đầu thai", "Nghề", "Tính cách"],
    "id": ["Reinkarnasi", "Pekerjaan", "Kepribadian"]
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
