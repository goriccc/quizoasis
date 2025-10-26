-- 신뢰도 테스트 데이터 삽입
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
  'trustworthiness-test',
  '{
    "ko": "당신은 얼마나 믿음직한 사람인가요?",
    "en": "How trustworthy are you?",
    "ja": "あなたはどのくらい信頼できる人ですか？",
    "zh-CN": "你有多值得信赖？",
    "zh-TW": "你有多值得信賴？",
    "vi": "Bạn đáng tin cậy đến mức nào?",
    "id": "Seberapa terpercaya Anda?"
  }',
  '{
    "ko": "사람들이 당신을 얼마나 신뢰할까요? 당신의 신뢰도를 측정합니다!\n\n약속은 지키나요? 비밀은 지킬 수 있나요? 맡은 일에 책임감이 있나요? 거짓말은 하지 않나요?\n\n신뢰는 관계의 기본입니다. 친구, 연인, 동료, 가족... 모든 관계에서 신뢰가 바탕이 되어야 합니다.\n\n사람들은 당신을 믿고 의지할 수 있을까요? 당신은 스스로를 믿음직한 사람이라고 생각하나요?\n\n단 3분이면 당신의 신뢰 지수를 알 수 있습니다!",
    "en": "How much do people trust you? We measure your trustworthiness!\n\nDo you keep promises? Can you keep secrets? Do you have a sense of responsibility for your work? Do you not lie?\n\nTrust is the foundation of relationships. Friends, lovers, colleagues, family... trust must be the basis of all relationships.\n\nCan people believe and rely on you? Do you think of yourself as a trustworthy person?\n\nJust 3 minutes to know your trust index!",
    "ja": "人々はあなたをどのくらい信頼していますか？あなたの信頼度を測定します！\n\n約束は守りますか？秘密は守れますか？任された仕事に責任感がありますか？嘘はつきませんか？\n\n信頼は関係の基本です。友人、恋人、同僚、家族...すべての関係で信頼が基盤でなければなりません。\n\n人々はあなたを信じて頼ることができるでしょうか？あなたは自分を信頼できる人だと思いますか？\n\nたった3分であなたの信頼指数がわかります！",
    "zh-CN": "人们有多信任你？我们测量你的可信度！\n\n你守约吗？你能保守秘密吗？你对工作有责任感吗？你不说谎吗？\n\n信任是关系的基础。朋友、恋人、同事、家人...所有关系中信任都必须是基础。\n\n人们能相信和依赖你吗？你认为自己是值得信赖的人吗？\n\n只需3分钟就能知道你的信任指数！",
    "zh-TW": "人們有多信任你？我們測量你的可信度！\n\n你守約嗎？你能保守秘密嗎？你對工作有責任感嗎？你不說謊嗎？\n\n信任是關係的基礎。朋友、戀人、同事、家人...所有關係中信任都必須是基礎。\n\n人們能相信和依賴你嗎？你認為自己是值得信賴的人嗎？\n\n只需3分鐘就能知道你的信任指數！",
    "vi": "Mọi người tin tưởng bạn đến mức nào? Chúng tôi đo lường mức độ đáng tin cậy của bạn!\n\nBạn có giữ lời hứa không? Bạn có thể giữ bí mật không? Bạn có trách nhiệm với công việc được giao không? Bạn có nói dối không?\n\nLòng tin là nền tảng của mối quan hệ. Bạn bè, người yêu, đồng nghiệp, gia đình... lòng tin phải là cơ sở của tất cả mối quan hệ.\n\nMọi người có thể tin tưởng và dựa vào bạn không? Bạn có nghĩ mình là người đáng tin cậy không?\n\nChỉ 3 phút để biết chỉ số tin cậy của bạn!",
    "id": "Seberapa banyak orang mempercayai Anda? Kami mengukur tingkat kepercayaan Anda!\n\nApakah Anda menepati janji? Bisakah Anda menjaga rahasia? Apakah Anda memiliki rasa tanggung jawab atas pekerjaan yang diberikan? Apakah Anda tidak berbohong?\n\nKepercayaan adalah dasar dari hubungan. Teman, kekasih, rekan kerja, keluarga... kepercayaan harus menjadi dasar dari semua hubungan.\n\nBisakah orang percaya dan mengandalkan Anda? Apakah Anda menganggap diri Anda sebagai orang yang dapat dipercaya?\n\nHanya 3 menit untuk mengetahui indeks kepercayaan Anda!"
  }',
  'test_238_trustworthy.jpg',
  'dating',
  'personality',
  '{
    "ko": ["성격"],
    "en": ["Personality"],
    "ja": ["性格"],
    "zh-CN": ["性格"],
    "zh-TW": ["性格"],
    "vi": ["Tính cách"],
    "id": ["Kepribadian"]
  }',
  0
);
