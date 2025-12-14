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
  'phase2_impulse_buying_test',
  '{
    "ko": "나의 ''충동구매'' 지수 (지름신 강림)",
    "en": "My \"Impulse Buying\" Index (Shopping Demon Descends)",
    "ja": "私の「衝動買い」指数（買い物依存降臨）",
    "zh-CN": "我的「冲动购买」指数（购物狂降临）",
    "zh-TW": "我的「衝動購買」指數（購物狂降臨）",
    "vi": "Chỉ số \"Mua sắm bốc đồng\" của tôi (Quỷ mua sắm giáng lâm)",
    "id": "Indeks \"Pembelian Impulsif\" Saya (Iblis Belanja Turun)"
  }',
  '{
    "ko": "어? 예쁘다. 일단 사!",
    "en": "Huh? It''s pretty. Just buy it!",
    "ja": "あれ？きれいだ。とりあえず買う！",
    "zh-CN": "咦？好漂亮。先买了再说！",
    "zh-TW": "咦？好漂亮。先買了再說！",
    "vi": "Ồ? Đẹp quá. Cứ mua đã!",
    "id": "Hah? Cantik. Beli dulu!"
  }',
  'phase2_test_063_impulse_buying.jpg',
  'psychology',
  'personality',
  '{
    "ko": ["심리"],
    "en": ["Psychology"],
    "ja": ["心理"],
    "zh-CN": ["心理"],
    "zh-TW": ["心理"],
    "vi": ["Tâm lý"],
    "id": ["Psikologi"]
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
