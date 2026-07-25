-- 나의 '리더십' 스타일
-- slug: phase3-leadership-style
-- thumbnail: p3_test_leadership_style.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-leadership-style',
  '{"ko": "나의 ''리더십'' 스타일", "en": "My Leadership Style", "ja": "私のリーダーシップスタイル", "zh-CN": "我的领导风格", "zh-TW": "我的領導風格", "vi": "Phong cách lãnh đạo của tôi", "id": "Gaya Kepemimpinanku"}',
  '{"ko": "12가지 팀 프로젝트 상황에서 나의 진짜 리더십 스타일을 찾고 자소서 소재까지 확인합니다.", "en": "Discover your true leadership style through 12 team project scenarios and find cover letter material.", "ja": "12のチームプロジェクト状況から本当のリーダーシップスタイルを見つけ、自己PRの素材まで確認します。", "zh-CN": "通过12种团队项目情境找到你真正的领导风格，并获取自我介绍素材。", "zh-TW": "透過12種團隊專案情境找到你真正的領導風格，並取得自我介紹素材。", "vi": "Khám phá phong cách lãnh đạo thật qua 12 tình huống dự án nhóm và tìm ý tưởng cho thư xin việc.", "id": "Temukan gaya kepemimpinanmu yang sebenarnya lewat 12 situasi proyek tim dan dapatkan bahan surat lamaran."}',
  'p3_test_leadership_style.webp',
  'psychology',
  'career',
  'scenario_4',
  '{"ko": ["리더십", "팀프로젝트", "자소서", "직장인", "자기이해"], "en": ["leadership", "team project", "cover letter", "workplace", "self-discovery"], "ja": ["リーダーシップ", "チームプロジェクト", "自己PR", "社会人", "自己理解"], "zh-CN": ["领导力", "团队项目", "自我介绍", "职场", "自我了解"], "zh-TW": ["領導力", "團隊專案", "自我介紹", "職場", "自我了解"], "vi": ["lãnh đạo", "dự án nhóm", "thư xin việc", "nơi làm việc", "hiểu bản thân"], "id": ["kepemimpinan", "proyek tim", "surat lamaran", "tempat kerja", "mengenal diri"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
