-- 나의 '연애 집착' 온도계
-- slug: phase3-love-obsession-thermometer
-- thumbnail: p3_test_love_obsession_thermometer.webp

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
  'phase3-love-obsession-thermometer',
  '{"ko": "나의 ''연애 집착'' 온도계", "en": "My Dating-Obsession Thermometer", "ja": "私の『恋愛執着』温度計", "zh-CN": "我的『恋爱执着』温度计", "zh-TW": "我的『戀愛執著』溫度計", "vi": "Nhiệt kế ''ám ảnh tình cảm'' của tôi", "id": "Termometer ''Obsesi Cinta''-ku"}',
  '{"ko": "12가지 질문으로 연애 집착 온도와 구속 지수를 측정합니다.", "en": "Measure your dating-obsession temperature and control index with 12 questions.", "ja": "12の質問で恋愛執着温度と束縛指数を測定します。", "zh-CN": "通过12个问题测量恋爱执着温度与束缚指数。", "zh-TW": "透過12個問題測量戀愛執著溫度與束縛指數。", "vi": "Đo nhiệt độ ám ảnh tình cảm và chỉ số ràng buộc qua 12 câu hỏi.", "id": "Ukur suhu obsesi cinta dan indeks kontrol lewat 12 pertanyaan."}',
  'p3_test_love_obsession_thermometer.webp',
  'psychology',
  'personality',
  '{"ko": ["연애집착", "구속", "연락", "온도계", "자기점검"], "en": ["dating obsession", "control", "texting", "thermometer", "self-check"], "ja": ["恋愛執着", "束縛", "連絡", "温度計", "自己点検"], "zh-CN": ["恋爱执着", "束缚", "联系", "温度计", "自我检视"], "zh-TW": ["戀愛執著", "束縛", "聯繫", "溫度計", "自我檢視"], "vi": ["ám ảnh tình cảm", "ràng buộc", "liên lạc", "nhiệt kế", "tự kiểm"], "id": ["obsesi cinta", "kontrol", "chat", "termometer", "cek diri"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
