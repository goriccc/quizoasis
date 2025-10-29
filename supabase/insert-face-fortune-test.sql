-- 얼굴로 보는 올해 나의 운세 테스트 데이터 삽입
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
  'face-fortune',
  '{
    "ko": "얼굴로 보는 올해 나의 운세",
    "en": "My Fortune This Year by Face Reading",
    "ja": "顔で見る今年の私の運勢",
    "zh-CN": "从面相看今年的运势",
    "zh-TW": "從面相看今年的運勢",
    "vi": "Vận May Năm Nay Qua Khuôn Mặt",
    "id": "Nasib Tahun Ini Melalui Wajah"
  }',
  '{
    "ko": "올해 당신의 운명은 어떻게 펼쳐질까요?\n\n재물운, 건강운, 연애운, 사업운, 학업운... 올해 당신에게 찾아올 모든 운을 분석합니다.\n\n어느 달이 가장 좋을까요? 조심해야 할 시기는? 기회는 언제 올까요?\n\n당신의 얼굴에서 올해 운세를 정확하게 읽어드립니다!",
    "en": "How will your destiny unfold this year?\n\nWealth fortune, health fortune, love fortune, business fortune, study fortune... We analyze all the fortunes that will come to you this year.\n\nWhich month will be the best? What period should you be careful? When will opportunities come?\n\nWe accurately read your fortune this year from your face!",
    "ja": "今年あなたの運命はどのように展開するでしょうか？\n\n財運、健康運、恋愛運、事業運、学業運...今年あなたに訪れるすべての運を分析します。\n\nどの月が最も良いでしょうか？注意すべき時期は？機会はいつ来るでしょうか？\n\nあなたの顔から今年の運勢を正確に読み取ります！",
    "zh-CN": "今年你的命运将如何展开？\n\n财运、健康运、恋爱运、事业运、学业运...我们分析今年将来到你身边的所有运势。\n\n哪个月最好？需要注意的时期是？机会何时来？\n\n从你的面相准确读取今年的运势！",
    "zh-TW": "今年你的命運將如何展開？\n\n財運、健康運、戀愛運、事業運、學業運...我們分析今年將來到你身邊的所有運勢。\n\n哪個月最好？需要注意的時期是？機會何時來？\n\n從你的面相準確讀取今年的運勢！",
    "vi": "Số phận của bạn sẽ diễn ra như thế nào trong năm nay?\n\nVận tài chính, vận sức khỏe, vận tình yêu, vận kinh doanh, vận học tập... Chúng tôi phân tích tất cả các vận may sẽ đến với bạn trong năm nay.\n\nTháng nào sẽ tốt nhất? Thời kỳ nào cần cẩn thận? Khi nào cơ hội sẽ đến?\n\nChúng tôi đọc chính xác vận may năm nay từ khuôn mặt bạn!",
    "id": "Bagaimana nasib Anda akan terungkap tahun ini?\n\nKeberuntungan kekayaan, kesehatan, cinta, bisnis, studi... Kami menganalisis semua keberuntungan yang akan datang kepada Anda tahun ini.\n\nBulan mana yang paling baik? Periode apa yang harus diwaspadai? Kapan peluang akan datang?\n\nKami membaca dengan akurat nasib tahun ini dari wajah Anda!"
  }',
  'Face_Fortune_Telling.jpg',
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

