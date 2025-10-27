-- 두뇌 자극 퀴즈 테스트 데이터 삽입
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
  'brain-quiz-test',
  '{
    "ko": "당신의 두뇌를 깨워줄 두뇌 자극 퀴즈!",
    "en": "Brain Stimulating Quiz to Wake Up Your Mind!",
    "ja": "あなたの脳を覚醒させる脳刺激クイズ！",
    "zh-CN": "唤醒你大脑的脑力刺激测验！",
    "zh-TW": "喚醒你大腦的腦力刺激測驗！",
    "vi": "Câu đố kích thích não bộ để đánh thức tâm trí bạn!",
    "id": "Kuis Stimulasi Otak untuk Membangunkan Pikiran Anda!"
  }',
  '{
    "ko": "당신의 두뇌, 얼마나 깨어있나요? 지금 바로 테스트!\n\n논리력? 계산력? 언어 감각? 공간 지각? 당신의 두뇌는 어떤 영역이 가장 발달했을까요?\n\n친구들과 함께 도전하고 점수를 비교해보세요!\n\n정 못 풀겠으면 퀴즈 진행화면에 힌트 버튼을 누르세요!\n(하지만 가급적 누르지 말고 풀어보는 걸 추천해요)\n\n단 5분이면 당신의 점수와 두뇌 유형을 알 수 있습니다!",
    "en": "How awake is your brain? Test it right now!\n\nLogic? Calculation? Language sense? Spatial perception? Which area of your brain is most developed?\n\nChallenge with friends and compare scores!\n\nIf you can''t solve it, press the hint button on the quiz screen!\n(But we recommend trying to solve it without hints)\n\nIn just 5 minutes, you can know your score and brain type!",
    "ja": "あなたの脳はどのくらい覚醒していますか？今すぐテスト！\n\n論理力？計算力？言語感覚？空間知覚？あなたの脳のどの領域が最も発達しているでしょうか？\n\n友達と一緒に挑戦してスコアを比較してみてください！\n\nどうしても解けない場合は、クイズ進行画面のヒントボタンを押してください！\n（ただし、できるだけヒントを使わずに解くことをお勧めします）\n\nたった5分で、あなたのスコアと脳タイプがわかります！",
    "zh-CN": "你的大脑有多清醒？现在就来测试！\n\n逻辑力？计算力？语言感觉？空间知觉？你的大脑哪个领域最发达？\n\n和朋友一起挑战，比较分数！\n\n实在解不出来，就按测验进行画面的提示按钮！\n（但我们建议尽量不用提示来解答）\n\n只需5分钟，你就能知道自己的分数和大脑类型！",
    "zh-TW": "你的大腦有多清醒？現在就來測試！\n\n邏輯力？計算力？語言感覺？空間知覺？你的大腦哪個領域最發達？\n\n和朋友一起挑戰，比較分數！\n\n實在解不出來，就按測驗進行畫面的提示按鈕！\n（但我們建議盡量不用提示來解答）\n\n只需5分鐘，你就能知道自己的分數和大腦類型！",
    "vi": "Bộ não của bạn có tỉnh táo đến mức nào? Hãy kiểm tra ngay bây giờ!\n\nLogic? Tính toán? Cảm giác ngôn ngữ? Nhận thức không gian? Lĩnh vực nào của não bộ bạn phát triển nhất?\n\nThử thách cùng bạn bè và so sánh điểm số!\n\nNếu không giải được, hãy nhấn nút gợi ý trên màn hình câu đố!\n(Nhưng chúng tôi khuyên bạn nên cố gắng giải mà không cần gợi ý)\n\nChỉ trong 5 phút, bạn có thể biết điểm số và loại não bộ của mình!",
    "id": "Seberapa sadar otak Anda? Uji sekarang juga!\n\nLogika? Perhitungan? Rasa bahasa? Persepsi spasial? Area otak mana yang paling berkembang?\n\nTantang bersama teman dan bandingkan skor!\n\nJika tidak bisa menyelesaikan, tekan tombol petunjuk di layar kuis!\n(Tapi kami sarankan untuk mencoba menyelesaikan tanpa petunjuk)\n\nHanya dalam 5 menit, Anda bisa mengetahui skor dan tipe otak Anda!"
  }',
  'test_066_brain_quiz.jpg',
  'quiz',
  'brain',
  '{
    "ko": ["두뇌", "퀴즈", "IQ"],
    "en": ["Brain", "Quiz", "IQ"],
    "ja": ["脳", "クイズ", "IQ"],
    "zh-CN": ["大脑", "测验", "IQ"],
    "zh-TW": ["大腦", "測驗", "IQ"],
    "vi": ["Não bộ", "Câu đố", "IQ"],
    "id": ["Otak", "Kuis", "IQ"]
  }',
  0
);
