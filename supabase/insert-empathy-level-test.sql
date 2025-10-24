-- 기존 EQ 레벨 테스트 데이터 삭제
DELETE FROM tests WHERE slug = 'empathy-level-test';

-- EQ 레벨 테스트 데이터 삽입
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
  'empathy-level-test',
  '{
    "ko": "당신의 EQ(감성지수) 레벨은?",
    "en": "What is your EQ (Emotional Quotient) level?",
    "ja": "あなたのEQ（感情指数）レベルは？",
    "zh-CN": "你的EQ（情商）水平是多少？",
    "zh-TW": "你的EQ（情商）水平是多少？",
    "vi": "Cấp độ EQ (chỉ số cảm xúc) của bạn là gì?",
    "id": "Apa level EQ (Intelligence Emosional) Anda?"
  }',
  '{
    "ko": "EQ 전문 측정! 당신의 공감 능력 레벨은? 타인의 감정을 얼마나 잘 이해하나요? 상대방의 마음을 느낄 수 있나요? 다른 사람의 입장에서 생각할 수 있나요? 공감 능력은 관계의 핵심이자, 감성 지능(EQ)의 가장 중요한 요소입니다. 당신의 공감 능력을 전문적으로 측정해보세요! 소요 시간 3분! 솔직하게 답변해주세요 💙",
    "en": "Professional EQ measurement! What is your empathy ability level? How well do you understand others'' emotions? Can you feel what others are feeling? Can you think from others'' perspective? Empathy is the core of relationships and the most important element of emotional intelligence (EQ). Test your empathy ability professionally! Takes 3 minutes! Please answer honestly 💙",
    "ja": "EQ専門測定！あなたの共感能力レベルは？他人の感情をどれくらい理解できますか？相手の気持ちを感じることができますか？他人の立場で考えることができますか？共感能力は関係の核心であり、感情知能(EQ)の最も重要な要素です。あなたの共感能力を専門的に測定してみましょう！所要時間3分！正直に答えてください 💙",
    "zh-CN": "专业EQ测量！你的共情能力水平如何？你有多了解他人的情感？你能感受到他人的感受吗？你能从他人的角度思考吗？共情能力是关系的核心，也是情商(EQ)最重要的要素。专业测试你的共情能力！需要3分钟！请诚实回答 💙",
    "zh-TW": "專業EQ測量！你的共情能力水平如何？你有多了解他人的情感？你能感受到他人的感受嗎？你能從他人的角度思考嗎？共情能力是關係的核心，也是情商(EQ)最重要的要素。專業測試你的共情能力！需要3分鐘！請誠實回答 💙",
    "vi": "Đo lường EQ chuyên nghiệp! Cấp độ khả năng đồng cảm của bạn là gì? Bạn hiểu cảm xúc của người khác đến mức nào? Bạn có thể cảm nhận được cảm xúc của người khác không? Bạn có thể suy nghĩ từ góc độ của người khác không? Khả năng đồng cảm là cốt lõi của các mối quan hệ và là yếu tố quan trọng nhất của trí tuệ cảm xúc (EQ). Hãy kiểm tra khả năng đồng cảm của bạn một cách chuyên nghiệp! Mất 3 phút! Hãy trả lời thành thật 💙",
    "id": "Pengukuran EQ profesional! Apa level kemampuan empati Anda? Seberapa baik Anda memahami emosi orang lain? Bisakah Anda merasakan apa yang dirasakan orang lain? Bisakah Anda berpikir dari sudut pandang orang lain? Kemampuan empati adalah inti dari hubungan dan elemen paling penting dari kecerdasan emosional (EQ). Uji kemampuan empati Anda secara profesional! Memakan waktu 3 menit! Silakan jawab dengan jujur 💙"
  }',
  'test_201_empathy_level.jpg',
  'dating',
  'love',
  '{
    "ko": ["감정", "EQ", "심리"],
    "en": ["Emotion", "EQ", "Psychology"],
    "ja": ["感情", "EQ", "心理学"],
    "zh-CN": ["情感", "EQ", "心理"],
    "zh-TW": ["情感", "EQ", "心理"],
    "vi": ["Cảm xúc", "EQ", "Tâm lý"],
    "id": ["Emosi", "EQ", "Psikologi"]
  }',
  0
);