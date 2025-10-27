-- 실제 IQ 테스트 데이터 업데이트 (썸네일 파일명 수정)
UPDATE tests 
SET 
  thumbnail = 'test_101_real_iq.pn.jpg',
  title = '{
    "ko": "당신의 실제 IQ는?",
    "en": "What is your real IQ?",
    "ja": "あなたの実際のIQは？",
    "zh-CN": "你的实际IQ是多少？",
    "zh-TW": "你的實際IQ是多少？",
    "vi": "IQ thực tế của bạn là bao nhiêu?",
    "id": "Berapa IQ asli Anda?"
  }',
  description = '{
    "ko": "진짜 IQ를 측정합니다!\n\n당신의 지능 지수는 몇일까요?\n\n멘사 수준의 천재? 평균? 우수?\n\n당신의 정확한 IQ를 지금 바로 확인하세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n집중하세요! 신중하게 답변하세요!\n단 5분이면 당신의 실제 IQ를 알 수 있습니다!",
    "en": "Measure your real IQ!\n\nWhat is your intelligence quotient?\n\nMensa-level genius? Average? Excellent?\n\nFind out your exact IQ right now!\n\nIf you can''t solve it, press the hint button on the quiz screen!\n(But I recommend trying without hints)\n\nFocus! Answer carefully!\nYou can find out your real IQ in just 5 minutes!",
    "ja": "あなたの実際のIQを測定します！\n\nあなたの知能指数はいくつでしょうか？\n\nメンサレベルの天才？平均？優秀？\n\nあなたの正確なIQを今すぐ確認してください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\n集中してください！慎重に答えてください！\nたった5分で、あなたの実際のIQがわかります！",
    "zh-CN": "测量你的实际IQ！\n\n你的智商是多少？\n\n门萨级别的天才？平均？优秀？\n\n现在就来找出你的确切IQ！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我建议尽量不用提示来解答）\n\n集中注意力！仔细回答！\n只需5分钟，你就能知道自己的实际IQ！",
    "zh-TW": "測量你的實際IQ！\n\n你的智商是多少？\n\n門薩級別的天才？平均？優秀？\n\n現在就來找出你的確切IQ！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我建議盡量不用提示來解答）\n\n集中注意力！仔細回答！\n只需5分鐘，你就能知道自己的實際IQ！",
    "vi": "Đo IQ thực tế của bạn!\n\nChỉ số thông minh của bạn là bao nhiêu?\n\nThiên tài cấp Mensa? Trung bình? Xuất sắc?\n\nHãy tìm hiểu IQ chính xác của bạn ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nTập trung! Trả lời cẩn thận!\nChỉ trong 5 phút, bạn có thể biết IQ thực tế của mình!",
    "id": "Ukur IQ asli Anda!\n\nBerapa indeks kecerdasan Anda?\n\nJenius level Mensa? Rata-rata? Unggul?\n\nTemukan IQ tepat Anda sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi saya sarankan mencoba tanpa petunjuk)\n\nFokus! Jawab dengan hati-hati!\nHanya dalam 5 menit, Anda bisa mengetahui IQ asli Anda!"
  }',
  tags = '{
    "ko": ["두뇌", "퀴즈", "IQ"],
    "en": ["Brain", "Quiz", "IQ"],
    "ja": ["脳", "クイズ", "IQ"],
    "zh-CN": ["大脑", "测验", "IQ"],
    "zh-TW": ["大腦", "測驗", "IQ"],
    "vi": ["Não bộ", "Câu đố", "IQ"],
    "id": ["Otak", "Kuis", "IQ"]
  }'
WHERE slug = 'real-iq';
