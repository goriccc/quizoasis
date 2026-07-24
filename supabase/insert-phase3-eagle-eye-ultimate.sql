-- 눈썰미 끝판왕 찾기
-- slug: phase3-eagle-eye-ultimate
-- thumbnail: p3_quiz_eagle_eye_ultimate.webp

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
  'phase3-eagle-eye-ultimate',
  '{"ko": "눈썰미 끝판왕 찾기", "en": "Ultimate Eagle Eye Challenge", "ja": "目利き究極チャレンジ", "zh-CN": "火眼金睛终极挑战", "zh-TW": "火眼金睛終極挑戰", "vi": "Thử thách Mắt Đại Bàng Tối Thượng", "id": "Tantangan Mata Elang Ultimate"}',
  '{"ko": "12가지 착시·숨은그림·차이 찾기로 나의 눈썰미 등급을 측정합니다. #눈썰미 #착시 #숨은그림 #퀴즈 #챌린지", "en": "Measure your eagle-eye grade with 12 illusions, hidden pictures, and spot-the-difference puzzles. #eagleeye #illusion #hiddenpicture #quiz #challenge", "ja": "12種類の錯視・隠し絵・間違い探しで目利き等級を測定。#目利き #錯視 #隠し絵 #クイズ #チャレンジ", "zh-CN": "用12种错觉·找隐藏图·找不同测试你的眼力等级。#眼力 #错觉 #隐藏图 #测验 #挑战", "zh-TW": "用12種錯覺·找隱藏圖·找不同測試你的眼力等級。#眼力 #錯覺 #隱藏圖 #測驗 #挑戰", "vi": "Đo cấp mắt tinh với 12 ảo giác·tranh ẩn·tìm khác biệt. #mắttinh #ảoảnh #tranhẩn #quiz #thửthách", "id": "Ukur level mata elang lewat 12 ilusi·gambar tersembunyi·cari beda. #mataelang #ilusi #gambartersembunyi #kuis #tantangan"}',
  'p3_quiz_eagle_eye_ultimate.webp',
  'psychology',
  'brain',
  '{"ko": ["눈썰미", "착시", "숨은그림", "퀴즈", "챌린지"], "en": ["eagle eye", "illusion", "hidden picture", "quiz", "challenge"], "ja": ["目利き", "錯視", "隠し絵", "クイズ", "チャレンジ"], "zh-CN": ["眼力", "错觉", "隐藏图", "测验", "挑战"], "zh-TW": ["眼力", "錯覺", "隱藏圖", "測驗", "挑戰"], "vi": ["mắt tinh", "ảo giác", "tranh ẩn", "quiz", "thử thách"], "id": ["mata elang", "ilusi", "gambar tersembunyi", "kuis", "tantangan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
