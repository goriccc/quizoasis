-- '틀린 그림' 찾기 챌린지

-- slug: phase3-spot-the-difference-challenge

-- thumbnail: p3_game_spot_the_difference.webp



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

  'phase3-spot-the-difference-challenge',

  '{"ko": "''틀린 그림'' 찾기 챌린지", "en": "Spot the Difference Challenge", "ja": "間違い探しチャレンジ", "zh-CN": "找不同挑战", "zh-TW": "找不同挑戰", "vi": "Thử thách tìm điểm khác biệt", "id": "Tantangan Spot the Difference"}',

  '{"ko": "6라운드 틀린그림 찾기로 관찰력을 0~20점으로 측정합니다. 좌·우 그림의 큰 차이를 터치하세요. 라운드1 60초, 매 라운드 10초씩 감소.", "en": "Measure observation skills across 6 spot-the-difference rounds (0–20 points). Tap major differences in left/right images. Round 1: 60s, minus 10s each round.", "ja": "6ラウンドの間違い探しで観察力を0〜20点で測定。左右の絵の大きな違いをタップ。1ラウンド目60秒、以降10秒短縮。", "zh-CN": "6轮找不同测试，观察力0~20分。点击左右图中明显差异。第1轮60秒，每轮减10秒。", "zh-TW": "6輪找不同測試，觀察力0~20分。點擊左右圖中明顯差異。第1輪60秒，每輪減10秒。", "vi": "Đo khả năng quan sát qua 6 vòng tìm khác biệt (0–20 điểm). Chạm các điểm khác biệt lớn giữa ảnh trái/phải. Vòng 1: 60s, giảm 10s mỗi vòng.", "id": "Ukur observasi lewat 6 ronde cari beda (0–20 poin). Ketuk perbedaan besar gambar kiri/kanan. Ronde 1: 60 dtk, -10 dtk tiap ronde."}',

  'p3_game_spot_the_difference.webp',

  'game',

  'brain',

  '{"ko": ["틀린그림", "찾기", "관찰력", "눈썰미", "챌린지"], "en": ["spot the difference", "observation", "eagle eye", "puzzle", "challenge"], "ja": ["間違い探し", "観察力", "目利き", "パズル", "チャレンジ"], "zh-CN": ["找不同", "观察力", "眼力", "益智", "挑战"], "zh-TW": ["找不同", "觀察力", "眼力", "益智", "挑戰"], "vi": ["tìm khác biệt", "quan sát", "mắt tinh", "giải đố", "thử thách"], "id": ["cari beda", "observasi", "mata elang", "teka-teki", "tantangan"]}',

  0

)

ON CONFLICT (slug) DO UPDATE SET

  title = EXCLUDED.title,

  description = EXCLUDED.description,

  thumbnail = EXCLUDED.thumbnail,

  type = EXCLUDED.type,

  category = EXCLUDED.category,

  tags = EXCLUDED.tags;


