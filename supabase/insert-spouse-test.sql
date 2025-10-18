-- 당신에게 가장 잘 어울리는 배우자 유형은? 테스트 데이터 삽입
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags
) VALUES (
  'ideal-spouse-type',
  '{
    "ko": "당신에게 가장 잘 어울리는 배우자 유형은?",
    "en": "What is your ideal spouse type?",
    "ja": "あなたに最も合う配偶者のタイプは？",
    "zh-CN": "最适合你的配偶类型是什么？",
    "zh-TW": "最適合你的配偶類型是什麼？",
    "id": "Apa tipe pasangan ideal Anda?",
    "vi": "Kiểu người bạn đời lý tưởng của bạn là gì？"
  }',
  '{
    "ko": "「평생을 함께할 사람, 어떤 유형이 좋을까?」\n연애와 결혼은 다릅니다.\n설레는 연애를 원하나요? 아니면 편안한 동반자를 원하나요?\n함께 세상을 모험하고 싶나요? 아니면 따뜻한 가정을 꾸리고 싶나요?\n당신의 가치관, 생활 방식, 미래 계획에 따라 이상적인 배우자 유형은 다릅니다.\n당신에게 가장 잘 맞는 배우자 유형을 찾아보세요!\n진지하게 결혼을 생각하는 분들께 추천합니다 💍\n소요 시간 단 4분! 신중하게 답해주세요 ✨",
    "en": "「What type of person would be good to spend your life with?」\nLove and marriage are different.\nDo you want exciting love? Or do you want a comfortable companion?\nDo you want to explore the world together? Or do you want to build a warm family?\nYour ideal spouse type depends on your values, lifestyle, and future plans.\nFind the spouse type that suits you best!\nRecommended for those seriously thinking about marriage 💍\nTakes only 4 minutes! Please answer carefully ✨",
    "ja": "「一生を共にする人、どんなタイプがいいかな？」\n恋愛と結婚は違います。\nドキドキする恋愛が欲しいですか？それとも安らかなパートナーが欲しいですか？\n一緒に世界を冒険したいですか？それとも温かい家庭を築きたいですか？\nあなたの価値観、ライフスタイル、将来計画によって理想的な配偶者のタイプは異なります。\nあなたに最も合う配偶者のタイプを見つけてみてください！\n真剣に結婚を考えている方におすすめです 💍\n所要時間わずか4分！慎重に答えてください ✨",
    "zh-CN": "「要共度一生的人，什么类型比较好呢？」\n恋爱和结婚是不同的。\n你想要令人心动的恋爱吗？还是想要安心的伴侣？\n想要一起探索世界吗？还是想要建立温暖的家庭？\n根据你的价值观、生活方式、未来计划，理想的配偶类型是不同的。\n找到最适合你的配偶类型吧！\n推荐给认真考虑结婚的人 💍\n只需4分钟！请仔细回答 ✨",
    "zh-TW": "「要共度一生的人，什麼類型比較好呢？」\n戀愛和結婚是不同的。\n你想要令人心動的戀愛嗎？還是想要安心的伴侶？\n想要一起探索世界嗎？還是想要建立溫暖的家庭？\n根據你的價值觀、生活方式、未來計劃，理想的配偶類型是不同的。\n找到最適合你的配偶類型吧！\n推薦給認真考慮結婚的人 💍\n只需4分鐘！請仔細回答 ✨",
    "id": "「Orang yang akan menghabiskan hidup bersama, tipe apa yang baik?」\nCinta dan pernikahan berbeda.\nApakah Anda ingin cinta yang mendebarkan? Atau Anda ingin pendamping yang nyaman?\nApakah Anda ingin menjelajahi dunia bersama? Atau Anda ingin membangun keluarga yang hangat?\nTipe pasangan ideal Anda tergantung pada nilai-nilai, gaya hidup, dan rencana masa depan Anda.\nTemukan tipe pasangan yang paling cocok untuk Anda!\nDirekomendasikan untuk mereka yang serius memikirkan pernikahan 💍\nHanya butuh 4 menit! Silakan jawab dengan hati-hati ✨",
    "vi": "「Người sẽ cùng bạn trải qua cuộc đời, kiểu nào sẽ tốt?」\nTình yêu và hôn nhân là khác nhau.\nBạn có muốn tình yêu thú vị? Hay bạn muốn người bạn đời thoải mái?\nBạn có muốn cùng khám phá thế giới? Hay bạn muốn xây dựng gia đình ấm áp?\nKiểu người bạn đời lý tưởng của bạn phụ thuộc vào giá trị, lối sống và kế hoạch tương lai của bạn.\nTìm kiếm kiểu người bạn đời phù hợp nhất với bạn!\nĐược khuyến nghị cho những người nghiêm túc suy nghĩ về hôn nhân 💍\nChỉ mất 4 phút! Hãy trả lời cẩn thận ✨"
  }',
  'test_035_ideal_spouse_type.jpg',
  'dating',
  'love',
  '{
    "ko": ["연애", "결혼", "궁합"],
    "en": ["Love", "Marriage", "Compatibility"],
    "ja": ["恋愛", "結婚", "相性"],
    "zh-CN": ["恋爱", "结婚", "匹配"],
    "zh-TW": ["戀愛", "結婚", "匹配"],
    "id": ["Cinta", "Pernikahan", "Kecocokan"],
    "vi": ["Tình yêu", "Hôn nhân", "Hợp nhau"]
  }'
);
