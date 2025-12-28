-- 글로벌 타자왕 (5라운드 실력 검증) 테스트 삽입
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags
) VALUES (
  'phase2_global_typing_test',
  jsonb_build_object(
    'ko', '글로벌 타자왕 (5라운드 실력 검증)',
    'en', 'Global Typing Champion (5-Round Skill Test)',
    'ja', 'グローバルタイピング王 (5ラウンド実力検証)',
    'zh-CN', '全球打字王（5轮实力验证）',
    'zh-TW', '全球打字王（5輪實力驗證）',
    'vi', 'Vua Đánh Máy Toàn Cầu (Kiểm tra 5 Vòng)',
    'id', 'Raja Mengetik Global (Tes Keterampilan 5 Ronde)'
  ),
  jsonb_build_object(
    'ko', '당신의 타자 실력, 거품인가요 진짜인가요? 한 문장만 빠르게 치는 건 누구나 할 수 있습니다. 하지만 긴 호흡으로 꾸준히 빠르기는 어렵죠. 인사말부터 속담, 명언, 문학 작품까지. 총 5단계의 문장을 모두 통과해야 합니다. 당신의 진짜 ''평균 속도''는?',
    'en', 'Your typing skills - real or fake? Anyone can type one sentence quickly. But maintaining speed over long passages is hard. From greetings to proverbs, quotes, and literature. You must pass all 5 rounds. What''s your real ''average speed'' that even locals recognize?',
    'ja', 'あなたのタイピング技術、本物ですか？一つの文を素早く打つことは誰でもできます。しかし、長い文章を一定の速度で打ち続けるのは難しいです。挨拶からことわざ、名言、文学作品まで。全5段階の文をすべて通過する必要があります。現地人も認めるあなたの本当の「平均速度」は？',
    'zh-CN', '你的打字能力，是真材实料还是虚有其表？快速打一句话谁都能做到。但保持长段落的高速却很难。从问候语到谚语、名言、文学作品。你必须通过全部5轮。连当地人都认可的你真正的「平均速度」是多少？',
    'zh-TW', '你的打字能力，是真材實料還是虛有其表？快速打一句話誰都能做到。但保持長段落的高速卻很難。從問候語到諺語、名言、文學作品。你必須通過全部5輪。連當地人都認可的你真正的「平均速度」是多少？',
    'vi', 'Kỹ năng đánh máy của bạn - thật hay giả? Ai cũng có thể đánh nhanh một câu. Nhưng duy trì tốc độ trong đoạn văn dài thì khó. Từ lời chào đến tục ngữ, trích dẫn và văn học. Bạn phải vượt qua cả 5 vòng. ''Tốc độ trung bình'' thực sự của bạn mà ngay cả người địa phương cũng công nhận là bao nhiêu?',
    'id', 'Keterampilan mengetik Anda - nyata atau palsu? Siapa pun bisa mengetik satu kalimat dengan cepat. Tetapi mempertahankan kecepatan dalam paragraf panjang itu sulit. Dari sapaan hingga peribahasa, kutipan, dan sastra. Anda harus melewati semua 5 putaran. Berapa ''kecepatan rata-rata'' Anda yang benar-benar bahkan diakui oleh penduduk lokal?'
  ),
  'phase2_test_163_global_typing_final.jpg',
  'game',
  'capability',
  jsonb_build_object(
    'ko', jsonb_build_array('챌린지', '게임'),
    'en', jsonb_build_array('Challenge', 'Game'),
    'ja', jsonb_build_array('チャレンジ', 'ゲーム'),
    'zh-CN', jsonb_build_array('挑战', '游戏'),
    'zh-TW', jsonb_build_array('挑戰', '遊戲'),
    'vi', jsonb_build_array('Thử thách', 'Trò chơi'),
    'id', jsonb_build_array('Tantangan', 'Game')
  )
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

