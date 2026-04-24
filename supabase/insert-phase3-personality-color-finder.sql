-- 내 성격은 어떤 색깔일까?
-- slug: phase3-personality-color-finder
-- thumbnail: p3_test_personality_color_finder.jpg

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
  'phase3-personality-color-finder',
  '{
    "ko": "내 성격은 어떤 색깔일까?",
    "en": "What Color Is My Personality?",
    "ja": "あなたの性格はどんな色？",
    "zh-CN": "我的性格是什么颜色？",
    "zh-TW": "我的性格是什麼顏色？",
    "vi": "Tính cách của bạn là màu gì?",
    "id": "Warna Kepribadianku yang Mana?"
  }',
  '{
    "ko": "12문항 이미지 2지선다로 보는 성격 컬러·퍼스널 팔레트 6유형. #성격 #컬러 #퍼스널컬러 #심리 #감성",
    "en": "12 image A/B questions: personality color and a 6-type personal palette. #personality #color #personalcolor #psychology #emotion",
    "ja": "画像2択12問で性格カラーとパーソナルパレット6タイプ。#性格 #カラー #パーソナルカラー #心理 #感性",
    "zh-CN": "12 道图片二选一：性格色与个人配色 6 种类型。#性格 #色彩 #个人色彩 #心理 #感性",
    "zh-TW": "12 題圖片二選一：性格色與個人配色 6 種類型。#性格 #色彩 #個人色彩 #心理 #感性",
    "vi": "12 câu chọn ảnh A/B: màu cá tính và bảng màu cá nhân 6 kiểu. #tính_cách #màu_sắc #màu_cá_nhân #tâm_lý #cảm_xúc",
    "id": "12 pertanyaan pilih gambar A/B: warna kepribadian dan palet personal 6 tipe. #kepribadian #warna #warnapersonal #psikologi #emosional"
  }',
  'p3_test_personality_color_finder.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["성격", "컬러", "퍼스널컬러", "심리", "감성"],
    "en": ["Personality", "Color", "Personal color", "Psychology", "Emotion"],
    "ja": ["性格", "カラー", "パーソナルカラー", "心理", "感性"],
    "zh-CN": ["性格", "色彩", "个人色彩", "心理", "感性"],
    "zh-TW": ["性格", "色彩", "個人色彩", "心理", "感性"],
    "vi": ["Tính cách", "Màu sắc", "Màu cá nhân", "Tâm lý", "Cảm xúc"],
    "id": ["Kepribadian", "Warna", "Warna personal", "Psikologi", "Emosi"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
