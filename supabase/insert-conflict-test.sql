-- 갈등 대응 스타일 테스트 데이터 삽입
INSERT INTO tests (
  slug, 
  title, 
  description, 
  thumbnail, 
  play_count, 
  type, 
  category, 
  tags
) VALUES (
  'conflict-response-test',
  '{
    "ko": "갈등 상황에서 당신은 어떻게 반응할까요?",
    "en": "How do you react in conflict situations?",
    "ja": "対立状況であなたはどのように反応しますか？",
    "zh-CN": "在冲突情况下你会如何反应？",
    "zh-TW": "在衝突情況下你會如何反應？",
    "vi": "Bạn phản ứng như thế nào trong tình huống xung đột?",
    "id": "Bagaimana Anda bereaksi dalam situasi konflik?"
  }',
  '{
    "ko": "맞서기? 피하기? 아니면 공감하기?\n친구와의 의견 충돌, 연인과의 다툼, 직장 동료와의 마찰...\n인간관계에서 갈등은 피할 수 없습니다.\n중요한 건 어떻게 대응하느냐입니다.\n정면돌파하는 사람,\n시간을 두고 생각하는 사람,\n감정을 먼저 읽는 사람,\n논리로 풀어가는 사람.\n당신의 갈등 대응 스타일은 무엇인가요? 💬",
    "en": "Confront? Avoid? Or empathize?\nOpinion conflicts with friends, fights with lovers, friction with colleagues...\nConflict in relationships is inevitable.\nWhat matters is how you respond.\nThose who face it head-on,\nThose who take time to think,\nThose who read emotions first,\nThose who solve with logic.\nWhat is your conflict response style? 💬",
    "ja": "立ち向かう？避ける？それとも共感する？\n友人との意見の対立、恋人との喧嘩、同僚との摩擦...\n人間関係での対立は避けられません。\n大切なのはどう対処するかです。\n正面からぶつかる人、\n時間をかけて考える人、\n感情を先に読む人、\n論理で解決する人。\nあなたの対立対応スタイルは何ですか？💬",
    "zh-CN": "面对？回避？还是共情？\n与朋友的意见冲突，与恋人的争吵，与同事的摩擦...\n人际关系中的冲突是不可避免的。\n重要的是如何应对。\n正面突破的人，\n花时间思考的人，\n先读懂情感的人，\n用逻辑解决的人。\n你的冲突应对风格是什么？💬",
    "zh-TW": "面對？迴避？還是共情？\n與朋友的意見衝突，與戀人的爭吵，與同事的摩擦...\n人際關係中的衝突是不可避免的。\n重要的是如何應對。\n正面突破的人，\n花時間思考的人，\n先讀懂情感的人，\n用邏輯解決的人。\n你的衝突應對風格是什麼？💬",
    "vi": "Đối đầu? Tránh né? Hay đồng cảm?\nXung đột ý kiến với bạn bè, cãi vã với người yêu, ma sát với đồng nghiệp...\nXung đột trong các mối quan hệ là không thể tránh khỏi.\nĐiều quan trọng là cách bạn phản ứng.\nNhững người đối mặt trực tiếp,\nNhững người dành thời gian suy nghĩ,\nNhững người đọc cảm xúc trước,\nNhững người giải quyết bằng logic.\nPhong cách phản ứng xung đột của bạn là gì? 💬",
    "id": "Menghadapi? Menghindari? Atau berempati?\nKonflik pendapat dengan teman, pertengkaran dengan kekasih, gesekan dengan rekan kerja...\nKonflik dalam hubungan tidak bisa dihindari.\nYang penting adalah bagaimana Anda merespons.\nMereka yang menghadapi langsung,\nMereka yang meluangkan waktu untuk berpikir,\nMereka yang membaca emosi terlebih dahulu,\nMereka yang menyelesaikan dengan logika.\nApa gaya respons konflik Anda? 💬"
  }',
  'test_030_conflict_response.jpg',
  0,
  'dating',
  'personality',
  '["소통", "심리", "관계"]'
);
