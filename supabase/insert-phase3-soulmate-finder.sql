-- 내 영혼의 '소울메이트' 찾기
-- slug: phase3-soulmate-finder
-- thumbnail: p3_test_soulmate_finder.webp

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
  'phase3-soulmate-finder',
  '{"ko": "내 영혼의 ''소울메이트'' 찾기", "en": "Find My Soul''s Soulmate", "ja": "私の魂の『ソウルメイト』探し", "zh-CN": "寻找我灵魂的「灵魂伴侣」", "zh-TW": "尋找我靈魂的「靈魂伴侶」", "vi": "Tìm ''Tri kỷ'' của tâm hồn tôi", "id": "Menemukan ''Soulmate'' Jiwaku"}',
  '{"ko": "12가지 질문으로 나의 소울 타입을 찾고 쌍둥이 소울·운명적 소울이 어떤 타입인지 알아봅니다.", "en": "Find your soul type with 12 questions and discover your twin soul and destiny soul.", "ja": "12個の質問で自分のソウルタイプを見つけ、ツインソウルとディスティニーソウルがどんなタイプか調べます。", "zh-CN": "通过12个问题找到你的灵魂类型，看看你的双生灵魂和命定灵魂是什么类型。", "zh-TW": "透過12個問題找到你的靈魂類型，看看你的雙生靈魂和命定靈魂是什麼類型。", "vi": "Tìm kiểu tâm hồn của bạn qua 12 câu hỏi và khám phá tâm hồn song sinh, tâm hồn định mệnh của bạn.", "id": "Temukan tipe jiwamu lewat 12 pertanyaan dan cari tahu twin soul serta destiny soul-mu."}',
  'p3_test_soulmate_finder.webp',
  'psychology',
  'personality',
  '{"ko": ["소울메이트", "영혼", "궁합"], "en": ["soulmate", "soul", "compatibility"], "ja": ["ソウルメイト", "魂", "相性"], "zh-CN": ["灵魂伴侣", "灵魂", "缘分"], "zh-TW": ["靈魂伴侶", "靈魂", "緣分"], "vi": ["tri kỷ", "tâm hồn", "hợp nhau"], "id": ["soulmate", "jiwa", "kecocokan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
