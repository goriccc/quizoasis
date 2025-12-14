
-- Phase 2 Guilt Level Test Data
INSERT INTO tests (
  slug, title, description, thumbnail, type, category, tags, play_count
) VALUES (
  'phase2_guilt-level-test',
  $$ {
    "ko": "나의 '죄책감' 레벨 테스트",
    "en": "My 'Guilt Level' Test",
    "ja": "私の「罪悪感」レベルテスト",
    "zh-CN": "我的「内疚感」水平测试",
    "zh-TW": "我的「內疚感」水平測試",
    "vi": "Bài kiểm tra 'Mức độ tội lỗi' của tôi",
    "id": "Tes 'Tingkat Rasa Bersalah' Saya"
  }$$,
  $$ {
    "ko": "혹시 말버릇이 '죄송합니다' 인가요? 우리는 때로 내가 잘못하지 않은 일에도 습관적으로 미안해하고, 자책하곤 합니다. 나의 죄책감 민감도 진단하기 🎒",
    "en": "Is your habit saying 'I'm sorry'? Sometimes we habitually feel sorry and blame ourselves even for things we didn't do wrong. Diagnose my guilt sensitivity 🎒",
    "ja": "もしかして口癖が「すみません」ですか？私たちは時々、自分が間違っていないことにも習慣的に申し訳なく思い、自分を責めます。私の罪悪感の敏感度を診断する 🎒",
    "zh-CN": "你的口头禅是'对不起'吗？有时我们会习惯性地为没有做错的事感到抱歉并自责。诊断我的内疚敏感度 🎒",
    "zh-TW": "你的口頭禪是「對不起」嗎？有時我們會習慣性地為沒有做錯的事感到抱歉並自責。診斷我的內疚敏感度 🎒",
    "vi": "Thói quen của bạn có phải là 'Xin lỗi' không? Đôi khi chúng ta thường xuyên cảm thấy có lỗi và tự trách mình ngay cả khi không làm gì sai. Chẩn đoán độ nhạy cảm tội lỗi của tôi 🎒",
    "id": "Apakah kebiasaan Anda mengatakan 'Maaf'? Terkadang kita secara kebiasaan merasa menyesal dan menyalahkan diri sendiri bahkan untuk hal-hal yang tidak kita lakukan salah. Diagnosa sensitivitas rasa bersalah saya 🎒"
  }$$,
  'phase2_test_147_guilt_level.jpg',
  'psychology',
  'personality',
  $$ {
    "ko": ["심리", "자아탐색"],
    "en": ["Psychology", "Self-Exploration"],
    "ja": ["心理学", "自己探求"],
    "zh-CN": ["心理", "自我探索"],
    "zh-TW": ["心理", "自我探索"],
    "vi": ["Tâm lý", "Khám phá bản thân"],
    "id": ["Psikologi", "Eksplorasi Diri"]
  }$$,
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
