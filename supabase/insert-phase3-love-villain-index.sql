-- 나의 '연애 빌런' 지수
-- slug: phase3-love-villain-index
-- thumbnail: p3_test_love_villain_index.webp

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
  'phase3-love-villain-index',
  '{"ko": "나의 ''연애 빌런'' 지수", "en": "My ''Love Villain'' Index", "ja": "私の『恋愛ヴィラン』指数", "zh-CN": "我的「恋爱反派」指数", "zh-TW": "我的「戀愛反派」指數", "vi": "Chỉ số ''phản diện tình yêu'' của tôi", "id": "Indeks ''Penjahat Cinta''-ku"}',
  '{"ko": "12가지 질문으로 진단하는 나의 무의식 속 연애 빌런 행동. 단톡방에 공유해서 폭로전을 펼쳐보세요.", "en": "Diagnose your unconscious love-villain behaviors with 12 questions. Share it in your group chat and start an exposure battle.", "ja": "12の質問で診断する無意識の恋愛ヴィラン行動。グループトークでシェアして暴露バトルを繰り広げよう。", "zh-CN": "通过12个问题诊断你无意识中的恋爱反派行为。分享到群聊，来一场互相爆料大战吧。", "zh-TW": "透過12個問題診斷你無意識中的戀愛反派行為。分享到群組，來一場互相爆料大戰吧。", "vi": "Chẩn đoán hành vi phản diện tình yêu vô thức của bạn qua 12 câu hỏi. Chia sẻ vào nhóm chat và mở màn cuộc chiến bóc phốt.", "id": "Diagnosis perilaku penjahat cinta bawah sadarmu lewat 12 pertanyaan. Bagikan ke grup chat dan mulai perang pengakuan."}',
  'p3_test_love_villain_index.webp',
  'psychology',
  'love',
  '{"ko": ["연애빌런", "연애", "자기폭로"], "en": ["Love Villain", "Dating", "Self-Exposure"], "ja": ["恋愛ヴィラン", "恋愛", "自己暴露"], "zh-CN": ["恋爱反派", "恋爱", "自我爆料"], "zh-TW": ["戀愛反派", "戀愛", "自我爆料"], "vi": ["Phản diện tình yêu", "Tình yêu", "Tự bóc phốt"], "id": ["Penjahat Cinta", "Cinta", "Pengakuan Diri"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
