-- 나는 욜로족? 파이어족? 갓생족?
-- slug: phase3-yolo-fire-godlife-type
-- thumbnail: p3_test_yolo_fire_godlife_type.jpg

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

  'phase3-yolo-fire-godlife-type',

  '{

    "ko": "나는 욜로족? 파이어족? 갓생족?",

    "en": "YOLO, FIRE, or God-Life? My Life & Money Type",

    "ja": "YOLO？FIRE？ゴッドライフ？私の人生・お金タイプ",

    "zh-CN": "你是YOLO、FIRE还是「自律人生」？人生与金钱类型",

    "zh-TW": "你是YOLO、FIRE還是「自律人生」？人生與金錢類型",

    "vi": "YOLO, FIRE hay God-life? Kiểu đời sống & tiền của bạn",

    "id": "YOLO, FIRE, atau God-life? Tipe hidup & uangku"

  }',

  '{

    "ko": "12문항 2지선다로 보는 인생 재무 유형 6가지. #재무 #라이프스타일 #욜로",

    "en": "12 yes/no style questions — 6 life-finance types. #money #lifestyle #YOLO",

    "ja": "12問2択で見る人生・お金タイプ6種。#お金 #ライフスタイル #YOLO",

    "zh-CN": "12 道二选一，六种人生与金钱类型。#理财 #生活方式 #YOLO",

    "zh-TW": "12 題二選一，六種人生與金錢類型。#理財 #生活方式 #YOLO",

    "vi": "12 câu 2 lựa chọn — 6 kiểu đời sống & tài chính. #tài chính #lối sống #YOLO",

    "id": "12 pertanyaan 2 pilihan — 6 tipe hidup & keuangan. #keuangan #gaya hidup #YOLO"

  }',

  'p3_test_yolo_fire_godlife_type.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["재무", "라이프스타일", "욜로"],

    "en": ["Money", "Lifestyle", "YOLO"],

    "ja": ["お金", "ライフスタイル", "YOLO"],

    "zh-CN": ["理财", "生活方式", "YOLO"],

    "zh-TW": ["理財", "生活方式", "YOLO"],

    "vi": ["Tài chính", "Lối sống", "YOLO"],

    "id": ["Keuangan", "Gaya hidup", "YOLO"]

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
