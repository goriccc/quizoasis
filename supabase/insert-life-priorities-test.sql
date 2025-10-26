-- 인생 우선순위 테스트 데이터 삽입
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
  'life-priorities-test',
  '{
    "ko": "당신은 무엇을 더 중요하게 생각하나요?",
    "en": "What do you value more?",
    "ja": "あなたは何をより重要に考えますか？",
    "zh-CN": "你更重视什么？",
    "zh-TW": "你更重視什麼？",
    "id": "Apa yang lebih Anda hargai?",
    "vi": "Bạn coi trọng điều gì hơn?"
  }',
  '{
    "ko": "인생에서 정말 중요한 것은 무엇인가요?\n\n사랑과 성공, 자유와 안정, 열정과 평온...\n\n우리는 매 순간 선택의 기로에 섭니다.\n\n어떤 사람은 사랑을 위해 모든 것을 포기하고,\n어떤 사람은 자신의 꿈을 최우선으로 삼습니다.\n\n어떤 사람은 안정을 추구하고,\n어떤 사람은 자유를 갈망합니다.\n\n당신의 인생에서 가장 중요한 가치는 무엇인가요?\n12개 선택으로 당신의 우선순위를 확인하고,\n진짜 나를 이해해보세요!\n소요 시간 단 2분! 직관으로 빠르게 선택하세요 💭",
    "en": "What do you value most in life?\n\nLove and success, freedom and stability, passion and peace...\n\nWe stand at crossroads of choice every moment.\n\nSome people give up everything for love,\nSome people prioritize their dreams first.\n\nSome people pursue stability,\nSome people crave freedom.\n\nWhat is the most important value in your life?\nCheck your priorities with 12 choices and\nunderstand the real you!\nTakes only 2 minutes! Choose quickly and intuitively 💭",
    "ja": "人生で本当に重要なことは何ですか？\n\n愛と成功、自由と安定、情熱と平穏...\n\n私たちは毎瞬間選択の岐路に立っています。\n\nある人は愛のためにすべてを放棄し、\nある人は自分の夢を最優先にします。\n\nある人は安定を追求し、\nある人は自由を渇望します。\n\nあなたの人生で最も重要な価値は何ですか？\n12の選択であなたの優先順位を確認し、\n本当の自分を理解してみてください！\n所要時間わずか2分！直感的に素早く選択してください 💭",
    "zh-CN": "生活中真正重要的是什么？\n\n爱与成功，自由与稳定，激情与平静...\n\n我们每时每刻都站在选择的十字路口。\n\n有些人为了爱放弃一切，\n有些人把自己的梦想放在首位。\n\n有些人追求稳定，\n有些人渴望自由。\n\n你生活中最重要的价值是什么？\n通过12个选择来检查你的优先级，\n了解真正的自己！\n只需2分钟！快速直观地选择 💭",
    "zh-TW": "生活中真正重要的是什麼？\n\n愛與成功，自由與穩定，激情與平靜...\n\n我們每時每刻都站在選擇的十字路口。\n\n有些人為了愛放棄一切，\n有些人把自己的夢想放在首位。\n\n有些人追求穩定，\n有些人渴望自由。\n\n你生活中最重要的價值是什麼？\n通過12個選擇來檢查你的優先級，\n了解真正的自己！\n只需2分鐘！快速直觀地選擇 💭",
    "id": "Apa yang benar-benar penting dalam hidup?\n\nCinta dan kesuksesan, kebebasan dan stabilitas, gairah dan kedamaian...\n\nKita berdiri di persimpangan pilihan setiap saat.\n\nBeberapa orang mengorbankan segalanya untuk cinta,\nBeberapa orang memprioritaskan mimpi mereka terlebih dahulu.\n\nBeberapa orang mengejar stabilitas,\nBeberapa orang mendambakan kebebasan.\n\nApa nilai terpenting dalam hidup Anda?\nPeriksa prioritas Anda dengan 12 pilihan dan\npahami diri Anda yang sebenarnya!\nHanya butuh 2 menit! Pilih dengan cepat dan intuitif 💭",
    "vi": "Điều gì thực sự quan trọng trong cuộc sống?\n\nTình yêu và thành công, tự do và ổn định, đam mê và bình yên...\n\nChúng ta đứng ở ngã tư lựa chọn mỗi khoảnh khắc.\n\nMột số người từ bỏ mọi thứ vì tình yêu,\nMột số người ưu tiên ước mơ của họ trước.\n\nMột số người theo đuổi sự ổn định,\nMột số người khao khát tự do.\n\nGiá trị quan trọng nhất trong cuộc sống của bạn là gì?\nKiểm tra ưu tiên của bạn với 12 lựa chọn và\nhiểu bản thân thật sự!\nChỉ mất 2 phút! Chọn nhanh và trực quan 💭"
  }',
  'test_240_life_priorities.jpg',
  'dating',
  'relationship',
  '{
    "ko": ["관계"],
    "en": ["Relationship"],
    "ja": ["関係"],
    "zh-CN": ["关系"],
    "zh-TW": ["關係"],
    "vi": ["Mối quan hệ"],
    "id": ["Hubungan"]
  }',
  0
);