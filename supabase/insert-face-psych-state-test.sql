-- 얼굴로 보는 나의 진짜 심리상태 테스트 데이터 삽입
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
  'face-psych-state',
  '{
    "ko": "얼굴로 보는 나의 진짜 심리상태",
    "en": "Your True Psychological State by Face",
    "ja": "顔でわかる本当の心理状態",
    "zh-CN": "从面相看你的真实心理状态",
    "zh-TW": "從面相看你的真實心理狀態",
    "vi": "Trạng Thái Tâm Lý Thật Sự Qua Khuôn Mặt",
    "id": "Keadaan Psikologis Sejati dari Wajah"
  }',
  '{
    "ko": "\"당신의 표정이 말하는 진실을 읽어드립니다\"\n\n무의식중에 드러나는 표정, 눈빛, 미세한 근육의 움직임...\n얼굴은 당신의 진짜 감정을 숨기지 못합니다.\n\n지금 행복한가요? 스트레스는? 숨기고 있는 감정은?\n당신의 진짜 심리상태를 정확하게 진단해 드립니다.",
    "en": "\"We read the truth your expression is telling\"\n\nSubtle expressions, eye gaze, and micro muscle movements...\nYour face cannot hide your true feelings.\n\nAre you happy now? Stressed? What are you hiding?\nWe assess your true psychological state with care.",
    "ja": "「表情が語る真実を読み解きます」\n\n無意識に現れる表情や視線、微細な筋肉の動き…\n顔は本当の感情を隠しきれません。\n\n今、幸せですか？ストレスは？隠している感情は？\nあなたの本当の心理状態を丁寧に診断します。",
    "zh-CN": "“我们读懂你表情所诉说的真相”\n\n潜意识中流露的表情、眼神与微表情…\n面容无法完全掩盖真实情绪。\n\n此刻你快乐吗？压力如何？在隐藏什么？\n我们细致评估你的真实心理状态。",
    "zh-TW": "「我們讀懂你表情所訴說的真相」\n\n潛意識中流露的表情、眼神與微表情…\n面容無法完全隱藏真實情緒。\n\n此刻你快樂嗎？壓力如何？在隱藏什麼？\n我們細緻評估你的真實心理狀態。",
    "vi": "\"Chúng tôi đọc sự thật mà nét mặt bạn nói lên\"\n\nBiểu cảm tinh tế, ánh mắt và chuyển động cơ nhỏ…\nKhuôn mặt không thể giấu cảm xúc thật.\n\nBạn có đang hạnh phúc? Căng thẳng? Đang che giấu điều gì?\nChúng tôi đánh giá trạng thái tâm lý thật sự của bạn.",
    "id": "\"Kami membaca kebenaran yang dikatakan ekspresimu\"\n\nEkspresi halus, tatapan mata, dan gerak otot mikro…\nWajah tak bisa sepenuhnya menyembunyikan perasaan.\n\nApakah kamu bahagia? Stres? Menyembunyikan sesuatu?\nKami menilai keadaan psikologismu yang sesungguhnya."
  }',
  'Facial_Psychological_State.jpg',
  'face',
  'face',
  '{
    "ko": ["얼굴", "심리"],
    "en": ["face", "psychology"],
    "ja": ["顔", "心理"],
    "zh-CN": ["面相", "心理"],
    "zh-TW": ["面相", "心理"],
    "vi": ["khuôn mặt", "tâm lý"],
    "id": ["wajah", "psikologi"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();

