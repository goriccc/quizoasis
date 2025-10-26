-- MBTI 정확한 테스트 데이터 삽입
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
  'mbti-accurate-test',
  '{
    "ko": "궁극의 진짜 정확한 MBTI!",
    "en": "Ultimate Accurate MBTI!",
    "ja": "究極の本当に正確なMBTI！",
    "zh-CN": "终极真正准确的MBTI！",
    "zh-TW": "終極真正準確的MBTI！",
    "vi": "MBTI chính xác tối thượng!",
    "id": "MBTI Akurat Terbaik!"
  }',
  '{
    "ko": "정확한 MBTI 측정! 당신의 진짜 성격 유형은?\n\n외향형? 내향형? 감각형? 직관형? 사고형? 감정형? 판단형? 인식형?\n\n간단한 테스트가 아닌, 정확도를 높인 32개 질문으로 당신의 진짜 MBTI를 찾아드립니다.\n\n16가지 성격 유형 중 당신은 어디에 속할까요?\n\n실제 상황 기반의 질문으로 85% 이상의 정확도를 자랑합니다!\n\n소요 시간 약 15분! 솔직하게 답변해주세요 🎯",
    "en": "Accurate MBTI measurement! What is your real personality type?\n\nExtrovert? Introvert? Sensing? Intuitive? Thinking? Feeling? Judging? Perceiving?\n\nNot a simple test, but 32 questions with increased accuracy to find your real MBTI.\n\nWhich of the 16 personality types do you belong to?\n\nBased on real situations, it boasts over 85% accuracy!\n\nTakes about 15 minutes! Please answer honestly 🎯",
    "ja": "正確なMBTI測定！あなたの本当の性格タイプは？\n\n外向型？内向型？感覚型？直感型？思考型？感情型？判断型？知覚型？\n\n簡単なテストではなく、精度を高めた32の質問であなたの本当のMBTIを見つけます。\n\n16の性格タイプのうち、あなたはどこに属するでしょうか？\n\n実際の状況に基づく質問で85%以上の精度を誇ります！\n\n所要時間約15分！正直に答えてください 🎯",
    "zh-CN": "准确的MBTI测量！你真正的性格类型是什么？\n\n外向？内向？感觉？直觉？思考？情感？判断？感知？\n\n不是简单的测试，而是通过32个提高准确性的问题来找到你真正的MBTI。\n\n在16种性格类型中，你属于哪一种？\n\n基于真实情况的问题，准确率超过85%！\n\n大约需要15分钟！请诚实回答 🎯",
    "zh-TW": "準確的MBTI測量！你真正的性格類型是什麼？\n\n外向？內向？感覺？直覺？思考？情感？判斷？感知？\n\n不是簡單的測試，而是通過32個提高準確性的問題來找到你真正的MBTI。\n\n在16種性格類型中，你屬於哪一種？\n\n基於真實情況的問題，準確率超過85%！\n\n大約需要15分鐘！請誠實回答 🎯",
    "vi": "Đo lường MBTI chính xác! Kiểu tính cách thực sự của bạn là gì?\n\nHướng ngoại? Hướng nội? Cảm giác? Trực giác? Suy nghĩ? Cảm xúc? Phán đoán? Nhận thức?\n\nKhông phải bài kiểm tra đơn giản, mà là 32 câu hỏi với độ chính xác cao để tìm ra MBTI thực sự của bạn.\n\nTrong 16 kiểu tính cách, bạn thuộc loại nào?\n\nDựa trên tình huống thực tế, nó tự hào có độ chính xác hơn 85%!\n\nMất khoảng 15 phút! Hãy trả lời thành thật 🎯",
    "id": "Pengukuran MBTI yang akurat! Apa tipe kepribadian asli Anda?\n\nEkstrovert? Introvert? Sensing? Intuitive? Thinking? Feeling? Judging? Perceiving?\n\nBukan tes sederhana, tetapi 32 pertanyaan dengan akurasi tinggi untuk menemukan MBTI asli Anda.\n\nDari 16 tipe kepribadian, Anda termasuk yang mana?\n\nBerdasarkan situasi nyata, ia bangga memiliki akurasi lebih dari 85%!\n\nMemakan waktu sekitar 15 menit! Jawablah dengan jujur 🎯"
  }',
  'test_001_mbti_accurate.jpg',
  'personality',
  'personality',
  '{
    "ko": ["성격", "MBTI", "심리"],
    "en": ["Personality", "MBTI", "Psychology"],
    "ja": ["性格", "MBTI", "心理"],
    "zh-CN": ["性格", "MBTI", "心理"],
    "zh-TW": ["性格", "MBTI", "心理"],
    "vi": ["Tính cách", "MBTI", "Tâm lý"],
    "id": ["Kepribadian", "MBTI", "Psikologi"]
  }',
  0
);
