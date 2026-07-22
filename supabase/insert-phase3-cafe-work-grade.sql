-- 나의 '카공족' 등급 테스트
-- slug: phase3-cafe-work-grade
-- thumbnail: p3_test_cafe_work_grade.webp

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
  'phase3-cafe-work-grade',
  '{"ko": "나의 ''카공족'' 등급 테스트", "en": "My ''Cafe Studier'' Grade Test", "ja": "私の「カフェ勉族」等級テスト", "zh-CN": "我的「咖啡馆学习党」等级测试", "zh-TW": "我的「咖啡廳學習黨」等級測試", "vi": "Bài test hạng ''dân học ở quán cà phê'' của tôi", "id": "Tes Grade ''Pekerja Kafe''-ku"}',
  '{"ko": "12문항으로 나의 카공 습관과 에티켓 등급을 솔직하게 진단합니다.", "en": "12 questions honestly diagnose your cafe work habits and etiquette grade.", "ja": "12問で、あなたのカフェ勉習慣とエチケット等級を正直に診断します。", "zh-CN": "通过12道题诚实地诊断你的咖啡馆学习办公习惯与礼仪等级。", "zh-TW": "透過12題誠實診斷你的咖啡廳學習辦公習慣與禮儀等級。", "vi": "12 câu hỏi chẩn đoán thẳng thắn thói quen học/làm ở quán cà phê và hạng etiquette của bạn.", "id": "12 pertanyaan mendiagnosis kebiasaan kerja di kafe dan grade etiketmu secara jujur."}',
  'p3_test_cafe_work_grade.webp',
  'psychology',
  'personality',
  '{"ko": ["카공족", "카페", "에티켓", "공부", "재택"], "en": ["cafe studier", "cafe", "etiquette", "study", "remote work"], "ja": ["カフェ勉族", "カフェ", "エチケット", "勉強", "在宅"], "zh-CN": ["咖啡馆学习党", "咖啡馆", "礼仪", "学习", "居家办公"], "zh-TW": ["咖啡廳學習黨", "咖啡廳", "禮儀", "學習", "居家辦公"], "vi": ["học ở quán cà phê", "quán cà phê", "etiquette", "học tập", "làm việc từ xa"], "id": ["pekerja kafe", "kafe", "etiket", "belajar", "kerja remote"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
