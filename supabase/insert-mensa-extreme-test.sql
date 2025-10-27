-- 멘사 극한 도전 퀴즈 테스트 데이터 삽입
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
  'mensa-extreme',
  '{
    "ko": "IQ 148 이상만 맞히는 문제",
    "en": "Problems Only IQ 148+ Can Solve",
    "ja": "IQ 148以上のみ解ける問題",
    "zh-CN": "只有IQ 148以上才能解决的问题",
    "zh-TW": "只有IQ 148以上才能解決的問題",
    "vi": "Chỉ có IQ 148+ mới giải được",
    "id": "Hanya IQ 148+ yang bisa menyelesaikan"
  }',
  '{
    "ko": "멘사 회원도 어려워하는 극한의 도전! IQ 148 이상, 인구의 상위 0.1%만이 도달하는 영역의 문제들입니다.\n\n수학, 논리, 추론, 패턴 인식... 모든 영역의 극한을 시험합니다.\n\n99.9%의 사람들이 절반도 못 맞히는 문제들로 구성되어 있습니다.\n\n당신은 진정한 천재인가요? 지금 바로 확인해보세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n단 12분이면 당신의 진짜 지능을 알 수 있습니다!",
    "en": "Extreme challenge that even Mensa members find difficult! IQ 148+, only the top 0.1% of the population reaches this level.\n\nTests the limits of mathematics, logic, reasoning, pattern recognition... all areas.\n\nComposed of problems that 99.9% of people can''t even get half right.\n\nAre you a true genius? Find out right now!\n\nIf you can''t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 12 minutes, you can know your true intelligence!",
    "ja": "メンサ会員も困難に感じる極限の挑戦！IQ 148以上、人口の上位0.1%のみが到達する領域の問題です。\n\n数学、論理、推理、パターン認識...すべての領域の極限を試します。\n\n99.9%の人が半分も正解できない問題で構成されています。\n\nあなたは真の天才ですか？今すぐ確認してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった12分で、あなたの本当の知能がわかります！",
    "zh-CN": "连门萨会员都觉得困难的极限挑战！IQ 148以上，只有人口前0.1%能达到的领域的问题。\n\n测试数学、逻辑、推理、模式识别...所有领域的极限。\n\n由99.9%的人连一半都答不出的问题组成。\n\n你是真正的天才吗？现在就来确认吧！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需12分钟，你就能知道自己的真实智力！",
    "zh-TW": "連門薩會員都覺得困難的極限挑戰！IQ 148以上，只有人口前0.1%能達到的領域的問題。\n\n測試數學、邏輯、推理、模式識別...所有領域的極限。\n\n由99.9%的人連一半都答不出的問題組成。\n\n你是真正的天才嗎？現在就來確認吧！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需12分鐘，你就能知道自己的真實智力！",
    "vi": "Thử thách cực hạn mà ngay cả thành viên Mensa cũng thấy khó! IQ 148+, chỉ có 0.1% dân số đạt được mức này.\n\nKiểm tra giới hạn của toán học, logic, lý luận, nhận dạng mẫu... tất cả các lĩnh vực.\n\nĐược tạo thành từ những vấn đề mà 99.9% mọi người không thể trả lời đúng được một nửa.\n\nBạn có phải là thiên tài thực sự? Hãy tìm hiểu ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 12 phút, bạn có thể biết trí thông minh thực sự của mình!",
    "id": "Tantangan ekstrem yang bahkan anggota Mensa pun merasa sulit! IQ 148+, hanya 0.1% populasi yang mencapai level ini.\n\nMenguji batas matematika, logika, penalaran, pengenalan pola... semua bidang.\n\nTerdiri dari masalah yang 99.9% orang bahkan tidak bisa menjawab setengahnya dengan benar.\n\nApakah Anda jenius sejati? Cari tahu sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 12 menit, Anda bisa mengetahui kecerdasan sejati Anda!"
  }',
  'test_103_mensa_extreme.jpg',
  'quiz',
  'brain',
  '{
    "ko": ["두뇌", "퀴즈", "IQ"],
    "en": ["brain", "quiz", "IQ"],
    "ja": ["脳", "クイズ", "IQ"],
    "zh-CN": ["大脑", "测验", "IQ"],
    "zh-TW": ["大腦", "測驗", "IQ"],
    "vi": ["não bộ", "câu đố", "IQ"],
    "id": ["otak", "kuis", "IQ"]
  }',
  0
);
