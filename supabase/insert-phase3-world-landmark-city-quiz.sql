-- 세계 랜드마크 보고 도시 맞추기
-- slug: phase3-world-landmark-city-quiz
-- thumbnail: p3_quiz_world_landmark_city_match.jpg

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

  'phase3-world-landmark-city-quiz',

  '{

    "ko": "세계 랜드마크 보고 도시 맞추기",

    "en": "World Landmarks: Guess the City",

    "ja": "世界のランドマークから都市を当てる",

    "zh-CN": "看世界地标猜城市",

    "zh-TW": "看世界地標猜城市",

    "vi": "Đoán thành phố qua biểu tượng thế giới",

    "id": "Tebak kota dari landmark dunia"

  }',

  '{

    "ko": "12문항 이미지형 4지선다. 랜드마크 사진을 보고 도시를 고르세요. #퀴즈 #여행 #랜드마크 #세계지리",

    "en": "12 image questions, 4 choices. Pick the city for each landmark. #quiz #travel #landmark #geography",

    "ja": "全12問・画像4択。ランドマークの写真から都市を選びます。#クイズ #旅行 #ランドマーク #地理",

    "zh-CN": "12 道看图选城市四选一。#测验 #旅行 #地标 #地理",

    "zh-TW": "12 題看圖選城市四選一。#測驗 #旅行 #地標 #地理",

    "vi": "12 cây hình, 4 đáp án. Chọn thành phố theo ảnh địa danh. #quiz #du lịch #địa lý",

    "id": "12 soal gambar 4 pilihan. Tebak kota dari foto landmark. #kuis #travel #geografi"

  }',

  'p3_quiz_world_landmark_city_match.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["퀴즈", "여행", "랜드마크", "세계지리"],

    "en": ["Quiz", "Travel", "Landmark", "Geography"],

    "ja": ["クイズ", "旅行", "ランドマーク", "地理"],

    "zh-CN": ["测验", "旅行", "地标", "地理"],

    "zh-TW": ["測驗", "旅行", "地標", "地理"],

    "vi": ["Quiz", "Du lịch", "Biểu tượng", "Địa lý"],

    "id": ["Kuis", "Travel", "Landmark", "Geografi"]

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
