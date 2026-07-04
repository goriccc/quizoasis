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
  'phase3-exercise-persistence-type',
  '{
    "ko": "나의 운동 지속력 유형",
    "en": "My Exercise Persistence Type",
    "ja": "私の運動継続力タイプ",
    "zh-CN": "我的运动持续力类型",
    "zh-TW": "我的運動持續力類型",
    "vi": "Kiểu duy trì tập luyện của tôi",
    "id": "Tipe Konsistensi Olahraga Saya"
  }',
  '{
    "ko": "12가지 질문으로 나의 운동 지속을 방해하는 진짜 장애물 유형을 찾고 맞춤 극복 전략을 드립니다.",
    "en": "Find what really blocks your exercise consistency in 12 questions and get personalized strategies to overcome it.",
    "ja": "12問で運動継続を妨げる本当の障害タイプを見つけ、今すぐ使える克服戦略をお届けします。",
    "zh-CN": "用12道题找出真正阻碍你坚持运动的障碍类型，并提供量身定制的克服策略。",
    "zh-TW": "用12道題找出真正阻礙你堅持運動的障礙類型，並提供量身定制的克服策略。",
    "vi": "Tìm loại trở ngại thật sự cản trở việc duy trì tập luyện qua 12 câu hỏi và nhận chiến lược vượt qua phù hợp.",
    "id": "Temukan hambatan sebenarnya yang menghalangi konsistensi olahraga lewat 12 pertanyaan dan dapatkan strategi mengatasinya."
  }',
  'p3_test_exercise_persistence_type.webp',
  'psychology',
  'personality',
  '{
    "ko": ["운동", "헬스", "작심삼일", "지속력", "갓생"],
    "en": ["Exercise", "Gym", "Quit after 3 days", "Persistence", "Self-improvement"],
    "ja": ["運動", "ジム", "三日坊主", "継続力", "自己改善"],
    "zh-CN": ["运动", "健身", "三天打鱼", "持续力", "自律生活"],
    "zh-TW": ["運動", "健身", "三天打魚", "持續力", "自律生活"],
    "vi": ["Tập luyện", "Gym", "Bỏ cuộc sớm", "Kiên trì", "Cải thiện bản thân"],
    "id": ["Olahraga", "Gym", "Males 3 hari", "Konsistensi", "Self-improvement"]
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
