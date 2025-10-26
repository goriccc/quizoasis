-- 질투심 테스트 데이터 삽입
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
  'jealousy-test',
  '{
    "ko": "당신은 얼마나 질투심이 많은가요?",
    "en": "How jealous are you?",
    "ja": "あなたはどのくらい嫉妬深いですか？",
    "zh-CN": "你有多嫉妒？",
    "zh-TW": "你有多嫉妒？",
    "vi": "Bạn ghen tuông đến mức nào?",
    "id": "Seberapa cemburu Anda?"
  }',
  '{
    "ko": "사랑과 질투는 한 끗 차이! 당신의 질투 지수는?\n연인이 다른 이성과 대화하는 걸 보면? 과거 연애 이야기가 나오면? SNS에 이성 친구가 댓글을 달면?\n질투는 자연스러운 감정이지만, 너무 강하면 관계를 해칠 수 있습니다.\n당신의 질투심은 건강한 수준일까요? 아니면 조절이 필요할까요?\n단 3분이면 당신의 질투 수준을 알 수 있습니다!",
    "en": "Love and jealousy are just one step apart! What''s your jealousy index?\nWhen you see your partner talking to someone of the opposite sex? When past relationship stories come up? When opposite-sex friends comment on SNS?\nJealousy is a natural emotion, but if it''s too strong, it can harm relationships.\nIs your jealousy at a healthy level? Or does it need to be controlled?\nJust 3 minutes to know your jealousy level!",
    "ja": "愛と嫉妬は紙一重！あなたの嫉妬指数は？\n恋人が異性と話しているのを見ると？過去の恋愛話が出ると？SNSに異性の友達がコメントすると？\n嫉妬は自然な感情ですが、強すぎると関係を害することがあります。\nあなたの嫉妬心は健康的なレベルですか？それともコントロールが必要ですか？\nたった3分であなたの嫉妬レベルがわかります！",
    "zh-CN": "爱与嫉妒只有一步之遥！你的嫉妒指数是多少？\n当你看到恋人与异性交谈时？当过去的恋爱故事出现时？当异性朋友在SNS上评论时？\n嫉妒是自然的情感，但如果太强烈，可能会伤害关系。\n你的嫉妒心是健康水平吗？还是需要控制？\n只需3分钟就能知道你的嫉妒水平！",
    "zh-TW": "愛與嫉妒只有一步之遙！你的嫉妒指數是多少？\n當你看到戀人與異性交談時？當過去的戀愛故事出現時？當異性朋友在SNS上評論時？\n嫉妒是自然的情感，但如果太強烈，可能會傷害關係。\n你的嫉妒心是健康水平嗎？還是需要控制？\n只需3分鐘就能知道你的嫉妒水平！",
    "vi": "Tình yêu và ghen tuông chỉ cách nhau một bước! Chỉ số ghen tuông của bạn là gì?\nKhi thấy người yêu nói chuyện với người khác giới? Khi câu chuyện tình cũ xuất hiện? Khi bạn khác giới bình luận trên SNS?\nGhen tuông là cảm xúc tự nhiên, nhưng nếu quá mạnh có thể làm tổn hại mối quan hệ.\nSự ghen tuông của bạn ở mức độ lành mạnh? Hay cần được kiểm soát?\nChỉ 3 phút để biết mức độ ghen tuông của bạn!",
    "id": "Cinta dan kecemburuan hanya terpisah satu langkah! Berapa indeks kecemburuan Anda?\nKetika melihat pasangan berbicara dengan lawan jenis? Ketika cerita hubungan masa lalu muncul? Ketika teman lawan jenis berkomentar di SNS?\nKecemburuan adalah emosi alami, tapi jika terlalu kuat bisa merusak hubungan.\nApakah kecemburuan Anda pada tingkat sehat? Atau perlu dikontrol?\nHanya 3 menit untuk mengetahui tingkat kecemburuan Anda!"
  }',
  'test_233_jealousy_level.jpg',
  'dating',
  'personality',
  '{
    "ko": ["연애", "성격"],
    "en": ["Dating", "Personality"],
    "ja": ["恋愛", "性格"],
    "zh-CN": ["恋爱", "性格"],
    "zh-TW": ["戀愛", "性格"],
    "vi": ["Hẹn hò", "Tính cách"],
    "id": ["Pacaran", "Kepribadian"]
  }',
  0
);