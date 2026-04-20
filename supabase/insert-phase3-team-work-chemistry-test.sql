-- 우리 팀 워크 케미 테스트
-- slug: phase3-team-work-chemistry-test
-- thumbnail: p3_test_team_work_chemistry.jpg

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

  'phase3-team-work-chemistry-test',

  '{

    "ko": "우리 팀 워크 케미 테스트",

    "en": "Our Team Work Chemistry Test",

    "ja": "私たちのチームワーク相性テスト",

    "zh-CN": "我们团队默契测试",

    "zh-TW": "我們團隊默契測試",

    "vi": "Bài test team chemistry của chúng ta",

    "id": "Tes chemistry kerja tim kita"

  }',

  '{

    "ko": "12문항으로 나의 팀 역할 유형을 찾고, 팀원 결과를 모으면 팀 케미·시너지·주의점이 분석됩니다. #팀워크 #직장 #협업",

    "en": "12 questions to find your team role type; combine teammates’ results for chemistry, synergy, and watch-outs. #teamwork #workplace #collab",

    "ja": "12問でチーム役割タイプを診断。メンバー結果を集めるとケミ・シナジーが分析。#チームワーク #職場",

    "zh-CN": "12 题找到你的团队角色类型；汇总成员结果可看默契与协同。#团队 #职场 #协作",

    "zh-TW": "12 題找到你的團隊角色類型；彙整成員結果可看默契與協同。#團隊 #職場 #協作",

    "vi": "12 câu tìm vai trò nhóm; gom kết quả để xem chemistry & synergy. #teamwork #công sở",

    "id": "12 soal cari peran tim; kumpulkan hasil untuk chemistry & sinergi. #teamwork #kantor"

  }',

  'p3_test_team_work_chemistry.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["팀워크", "직장", "협업"],

    "en": ["Teamwork", "Workplace", "Collaboration"],

    "ja": ["チームワーク", "職場", "協業"],

    "zh-CN": ["团队", "职场", "协作"],

    "zh-TW": ["團隊", "職場", "協作"],

    "vi": ["Teamwork", "Công sở", "Hợp tác"],

    "id": ["Teamwork", "Kantor", "Kolaborasi"]

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
