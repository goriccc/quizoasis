-- 당신의 연애를 방해하는 요소는? 테스트 데이터 삽입
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
  'love-obstacles',
  '{
    "ko": "당신의 연애를 방해하는 요소는?",
    "en": "What is blocking your love life?",
    "ja": "あなたの恋愛を妨げている要素は？",
    "zh-CN": "阻碍你恋爱的因素是什么？",
    "zh-TW": "阻礙你戀愛的因素是什麼？",
    "vi": "Yếu tố nào đang cản trở tình yêu của bạn?",
    "id": "Apa yang menghalangi kehidupan cinta Anda?"
  }',
  '{
    "ko": "「왜 자꾸 연애가 안 될까? 진짜 이유를 찾아보세요」\n만남은 있는데 발전이 안 되나요?\n연애는 하는데 오래 못 가나요? 좋아하는 사람 앞에서 어색한가요?\n연애가 잘 안 되는 데는 이유가 있습니다.\n과도한 완벽주의 때문일까요? 자존감이 낮아서일까요? 과거의 상처 때문일까요? 이상이 너무 높아서일까요?\n당신도 모르는 사이 연애를 방해하는 요소를 정확하게 찾아드립니다.\n문제를 알아야 해결할 수 있습니다 💪\n소요 시간 단 3분! 솔직하게 답해주세요 ✨",
    "en": "「Why can''t I find love? Let''s find the real reason」\nDo you meet people but relationships don''t progress?\nDo you date but relationships don''t last? Do you feel awkward around people you like?\nThere''s a reason why love isn''t working out.\nIs it excessive perfectionism? Low self-esteem? Past wounds? Unrealistic expectations?\nWe''ll accurately identify the factors blocking your love life that you might not even realize.\nYou need to know the problem to solve it 💪\nTakes only 3 minutes! Please answer honestly ✨",
    "ja": "「なぜ恋愛がうまくいかないの？本当の理由を見つけましょう」\n出会いはあるのに発展しない？\n恋愛はするけど長続きしない？好きな人の前でぎこちない？\n恋愛がうまくいかないのには理由があります。\n過度な完璧主義のせい？自尊心が低いから？過去の傷のせい？理想が高すぎるから？\nあなたも気づかないうちに恋愛を妨げている要素を正確に見つけます。\n問題を知らなければ解決できません 💪\n所要時間わずか3分！正直に答えてください ✨",
    "zh-CN": "「为什么总是找不到爱情？让我们找到真正的原因」\n有见面但关系没有进展？\n有恋爱但关系不持久？在喜欢的人面前感到尴尬？\n爱情不顺利是有原因的。\n是过度完美主义？自尊心低？过去的创伤？期望过高？\n我们会准确找出你可能没有意识到的阻碍你恋爱的因素。\n只有知道问题才能解决问题 💪\n只需3分钟！请诚实回答 ✨",
    "zh-TW": "「為什麼總是找不到愛情？讓我們找到真正的原因」\n有見面但關係沒有進展？\n有戀愛但關係不持久？在喜歡的人面前感到尷尬？\n愛情不順利是有原因的。\n是過度完美主義？自尊心低？過去的創傷？期望過高？\n我們會準確找出你可能沒有意識到的阻礙你戀愛的因素。\n只有知道問題才能解決問題 💪\n只需3分鐘！請誠實回答 ✨",
    "vi": "「Tại sao tình yêu mãi không thành? Hãy tìm lý do thật sự」\nCó gặp gỡ nhưng không tiến triển?\nCó hẹn hò nhưng không lâu dài? Cảm thấy ngượng ngùng trước người mình thích?\nTình yêu không thành công có lý do.\nCó phải do chủ nghĩa hoàn hảo quá mức? Tự ti? Vết thương quá khứ? Kỳ vọng quá cao?\nChúng tôi sẽ tìm ra chính xác những yếu tố cản trở tình yêu mà bạn có thể không nhận ra.\nCần biết vấn đề mới giải quyết được 💪\nChỉ mất 3 phút! Hãy trả lời thành thật ✨",
    "id": "「Mengapa cinta tidak berhasil? Mari cari tahu alasannya」\nAda pertemuan tapi tidak berkembang?\nPacaran tapi tidak bertahan lama? Merasa canggung di depan orang yang disukai?\nAda alasan mengapa cinta tidak berhasil.\nApakah karena perfeksionisme berlebihan? Harga diri rendah? Luka masa lalu? Harapan terlalu tinggi?\nKami akan menemukan secara akurat faktor-faktor yang menghalangi kehidupan cinta Anda yang mungkin tidak Anda sadari.\nPerlu tahu masalahnya untuk bisa menyelesaikannya 💪\nHanya butuh 3 menit! Silakan jawab dengan jujur ✨"
  }',
  'test_036_love_obstacles.jpg',
  'dating',
  'love',
  '{
    "ko": ["연애", "자기이해", "심리"],
    "en": ["Love", "Self-understanding", "Psychology"],
    "ja": ["恋愛", "自己理解", "心理"],
    "zh-CN": ["恋爱", "自我理解", "心理"],
    "zh-TW": ["戀愛", "自我理解", "心理"],
    "vi": ["Tình yêu", "Hiểu bản thân", "Tâm lý"],
    "id": ["Cinta", "Memahami diri", "Psikologi"]
  }',
  0
);
