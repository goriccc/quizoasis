-- 신뢰도 테스트 데이터 삽입
-- 기존 데이터가 있다면 삭제 후 삽입

DELETE FROM tests WHERE slug = 'trustworthiness-level-test';
DELETE FROM tests WHERE slug = 'trustworthiness-test';

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
    "en": "How reliable are you?",
    "ja": "あなたはどのくらい信頼できる人ですか？",
    "zh-CN": "你有多可靠？",
    "zh-TW": "你有多可靠？",
    "vi": "Bạn đáng tin cậy đến mức nào?",
    "id": "Seberapa dapat dipercaya Anda?"
  }',
  '{
    "ko": "사람들이 당신을 얼마나 믿고 의지할 수 있을까?\n약속을 칼같이 지키는 사람,\n비밀을 무덤까지 가져가는 사람,\n의도는 좋지만 깜빡하는 사람,\n자유로워서 책임이 부담스러운 사람.\n당신은 어떤 사람인가요?\n더 믿음직한 사람이 되는 팁을 받아보세요!\n소요 시간 단 3분! 솔직하게 답변해주세요 😊",
    "en": "How much can people trust and rely on you?\nSomeone who keeps promises like clockwork,\nSomeone who takes secrets to the grave,\nSomeone with good intentions but forgetful,\nSomeone free-spirited who finds responsibility burdensome.\nWhat kind of person are you?\nGet tips to become a more reliable person!\nTakes only 3 minutes! Please answer honestly 😊",
    "ja": "人々はあなたをどのくらい信頼し、頼りにできるでしょうか？\n約束を律儀に守る人,\n秘密を墓場まで持っていく人,\n意図は良いが忘れっぽい人,\n自由で責任が重荷になる人.\nあなたはどんな人ですか？\nより信頼できる人になるためのヒントを受け取ってください！\n所要時間わずか3分！正直に答えてください 😊",
    "zh-CN": "人们能有多信任和依赖你？\n守约如钟表的人,\n将秘密带进坟墓的人,\n意图良好但健忘的人,\n自由但觉得责任沉重的人。\n你是哪种人？\n获得成为更可靠的人的技巧！\n只需3分钟！请诚实回答 😊",
    "zh-TW": "人們能有多信任和依賴你？\n守約如鐘表的人,\n將秘密帶進墳墓的人,\n意圖良好但健忘的人,\n自由但覺得責任沉重的人。\n你是哪種人？\n獲得成為更可靠的人的技巧！\n只需3分鐘！請誠實回答 😊",
    "vi": "Mọi người có thể tin tưởng và dựa vào bạn đến mức nào?\nNgười giữ lời hứa như đồng hồ,\nNgười mang bí mật đến mộ,\nNgười có ý tốt nhưng hay quên,\nNgười tự do thấy trách nhiệm là gánh nặng.\nBạn là loại người nào?\nNhận lời khuyên để trở thành người đáng tin cậy hơn!\nChỉ mất 3 phút! Vui lòng trả lời thành thật 😊",
    "id": "Seberapa banyak orang bisa mempercayai dan mengandalkan Anda?\nSeseorang yang menepati janji seperti jam,\nSeseorang yang membawa rahasia ke kubur,\nSeseorang dengan niat baik tapi pelupa,\nSeseorang yang bebas dan merasa tanggung jawab memberatkan.\nAnda tipe orang seperti apa?\nDapatkan tips untuk menjadi orang yang lebih dapat dipercaya!\nHanya butuh 3 menit! Tolong jawab dengan jujur 😊"
  }',
  'test_043_trustworthiness.jpg',
  'dating',
  'love',
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