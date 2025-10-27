-- 초고난도 퀴즈 테스트 데이터 삽입
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
  'extreme-quiz',
  '{
    "ko": "3%만 풀 수 있는 초고난도 퀴즈",
    "en": "Extreme Difficulty Quiz Only 3% Can Solve",
    "ja": "3%しか解けない超難問クイズ",
    "zh-CN": "只有3%能解决的超高难度测验",
    "zh-TW": "只有3%能解決的超高難度測驗",
    "vi": "Câu đố siêu khó chỉ 3% có thể giải được",
    "id": "Kuis Kesulitan Ekstrem Hanya 3% yang Bisa Menyelesaikan"
  }',
  '{
    "ko": "인류 상위 3%만이 풀 수 있는 초고난도 퀴즈!\n\n수학, 논리, 추론, 패턴 인식... 모든 영역의 극한을 시험합니다.\n\n97%의 사람들이 절반도 못 맞히는 문제들로 구성되어 있습니다.\n\n당신은 진정한 천재인가요? 지금 바로 확인해보세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n단 10분이면 당신의 진짜 실력을 알 수 있습니다!",
    "en": "Extreme difficulty quiz that only the top 3% of humanity can solve!\n\nTests the limits of mathematics, logic, reasoning, pattern recognition... all areas.\n\nComposed of problems that 97% of people can''t even get half right.\n\nAre you a true genius? Find out right now!\n\nIf you can''t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 10 minutes, you can know your true ability!",
    "ja": "人類上位3%しか解けない超難問クイズ！\n\n数学、論理、推理、パターン認識...すべての領域の極限を試します。\n\n97%の人が半分も正解できない問題で構成されています。\n\nあなたは真の天才ですか？今すぐ確認してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった10分で、あなたの本当の実力を知ることができます！",
    "zh-CN": "只有人类前3%能解决的超高难度测验！\n\n测试数学、逻辑、推理、模式识别...所有领域的极限。\n\n由97%的人连一半都答不出的问题组成。\n\n你是真正的天才吗？现在就来确认吧！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需10分钟，你就能知道自己的真正实力！",
    "zh-TW": "只有人類前3%能解決的超高難度測驗！\n\n測試數學、邏輯、推理、模式識別...所有領域的極限。\n\n由97%的人連一半都答不出的問題組成。\n\n你是真正的天才嗎？現在就來確認吧！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需10分鐘，你就能知道自己的真正實力！",
    "vi": "Câu đố siêu khó chỉ có top 3% nhân loại mới giải được!\n\nKiểm tra giới hạn của toán học, logic, lý luận, nhận dạng mẫu... tất cả các lĩnh vực.\n\nĐược tạo thành từ những vấn đề mà 97% mọi người không thể trả lời đúng được một nửa.\n\nBạn có phải là thiên tài thực sự? Hãy tìm hiểu ngay bây giờ!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 10 phút, bạn có thể biết khả năng thực sự của mình!",
    "id": "Kuis kesulitan ekstrem yang hanya bisa diselesaikan oleh top 3% umat manusia!\n\nMenguji batas matematika, logika, penalaran, pengenalan pola... semua bidang.\n\nTerdiri dari masalah yang 97% orang bahkan tidak bisa menjawab setengahnya dengan benar.\n\nApakah Anda jenius sejati? Cari tahu sekarang juga!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 10 menit, Anda bisa mengetahui kemampuan sejati Anda!"
  }',
  'test_102_extreme_quiz.jpg',
  'quiz',
  'brain',
  '{
    "ko": ["두뇌", "퀴즈", "IQ", "초고난도"],
    "en": ["brain", "quiz", "IQ", "extreme"],
    "ja": ["脳", "クイズ", "IQ", "超難問"],
    "zh-CN": ["大脑", "测验", "IQ", "超高难度"],
    "zh-TW": ["大腦", "測驗", "IQ", "超高難度"],
    "vi": ["não bộ", "câu đố", "IQ", "siêu khó"],
    "id": ["otak", "kuis", "IQ", "ekstrem"]
  }',
  0
);
