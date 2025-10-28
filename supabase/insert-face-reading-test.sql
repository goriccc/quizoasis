-- 관상 보기 테스트 데이터 삽입
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
  'face-reading',
  '{
    "ko": "관상 보기",
    "en": "Face Reading",
    "ja": "観相診断",
    "zh-CN": "面相测试",
    "zh-TW": "面相測試",
    "vi": "Xem tướng",
    "id": "Baca Wajah"
  }',
  '{
    "ko": "당신의 얼굴에 숨겨진 운명을 읽어드립니다\n\n얼굴은 거짓말을 하지 않습니다. 이마, 눈, 코, 입, 턱... 얼굴의 각 부위는 당신의 성격과 운명을 말해줍니다.\n\n천 년 동안 이어져 온 관상학의 지혜로 당신의 운명을 분석합니다.\n\n재물운은? 연애운은? 성공운은?\n\n지금 바로 당신의 얼굴이 말하는 진실을 확인하세요!",
    "en": "Read the destiny hidden in your face\n\nFaces don''t lie. Forehead, eyes, nose, mouth, chin... Each part of your face tells your personality and destiny.\n\nAnalyze your destiny with the wisdom of physiognomy that has been passed down for a thousand years.\n\nWealth fortune? Love fortune? Success fortune?\n\nFind out the truth your face tells right now!",
    "ja": "あなたの顔に隠された運命を読み取ります\n\n顔は嘘をつきません。額、目、鼻、口、顎...顔の各部分があなたの性格と運命を語ります。\n\n千年間続いてきた観相学の知恵であなたの運命を分析します。\n\n財運は？恋愛運は？成功運は？\n\n今すぐあなたの顔が語る真実を確認してください！",
    "zh-CN": "解读你脸上隐藏的命运\n\n脸不会说谎。额头、眼睛、鼻子、嘴巴、下巴...脸的每个部位都诉说着你的性格和命运。\n\n用千年传承的面相学智慧分析你的命运。\n\n财运如何？恋爱运如何？成功运如何？\n\n现在就来确认你的脸诉说的真相吧！",
    "zh-TW": "解讀你臉上隱藏的命運\n\n臉不會說謊。額頭、眼睛、鼻子、嘴巴、下巴...臉的每個部位都訴說著你的性格和命運。\n\n用千年傳承的面相學智慧分析你的命運。\n\n財運如何？戀愛運如何？成功運如何？\n\n現在就來確認你的臉訴說的真相吧！",
    "vi": "Đọc vận mệnh ẩn giấu trên khuôn mặt bạn\n\nKhuôn mặt không nói dối. Trán, mắt, mũi, miệng, cằm... Mỗi bộ phận trên khuôn mặt đều nói lên tính cách và vận mệnh của bạn.\n\nPhân tích vận mệnh của bạn bằng trí tuệ tướng học đã được truyền lại qua hàng nghìn năm.\n\nVận tài lộc? Vận tình duyên? Vận thành công?\n\nHãy tìm hiểu sự thật mà khuôn mặt bạn nói ngay bây giờ!",
    "id": "Baca takdir tersembunyi di wajah Anda\n\nWajah tidak berbohong. Dahi, mata, hidung, mulut, dagu... Setiap bagian wajah menceritakan kepribadian dan takdir Anda.\n\nAnalisis takdir Anda dengan kebijaksanaan fisiognomi yang telah diturunkan selama ribuan tahun.\n\nKeberuntungan kekayaan? Keberuntungan cinta? Keberuntungan sukses?\n\nTemukan kebenaran yang diceritakan wajah Anda sekarang juga!"
  }',
  'I_offe_ palm_reading_services.jpg',
  'face',
  'face',
  '{
    "ko": ["얼굴"],
    "en": ["face"],
    "ja": ["顔"],
    "zh-CN": ["面相"],
    "zh-TW": ["面相"],
    "vi": ["khuôn mặt"],
    "id": ["wajah"]
  }',
  0
);
