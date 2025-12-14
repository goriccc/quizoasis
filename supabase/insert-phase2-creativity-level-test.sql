
-- Phase 2 Creativity Level Test Data
INSERT INTO tests (
  slug, title, description, thumbnail, type, category, tags, play_count
) VALUES (
  'phase2_creativity-level-test',
  $$ {
    "ko": "나의 '창의력' 레벨 테스트 (뇌 말랑함 진단)",
    "en": "My 'Creativity Level' Test (Brain Flexibility Diagnosis)",
    "ja": "私の「創造力」レベルテスト（脳の柔軟性診断）",
    "zh-CN": "我的「创造力」水平测试（大脑灵活性诊断）",
    "zh-TW": "我的「創造力」水平測試（大腦靈活性診斷）",
    "vi": "Bài kiểm tra 'Mức độ sáng tạo' của tôi (Chẩn đoán tính linh hoạt của não)",
    "id": "Tes 'Tingkat Kreativitas' Saya (Diagnosis Fleksibilitas Otak)"
  }$$,
  $$ {
    "ko": "당신의 뇌는 얼마나 말랑말랑한가요? 남들은 보지 못하는 것을 보는 사람, 엉뚱한 상상으로 세상을 바꾸는 사람. 우리는 그들을 '창의적인 사람'이라고 부릅니다. 나의 창의력 점수 확인하기 💡 두뇌 유연성 테스트 🧠",
    "en": "How flexible is your brain? People who see what others don't, people who change the world with wild imagination. We call them 'creative people'. Check my creativity score 💡 Brain flexibility test 🧠",
    "ja": "あなたの脳はどれくらい柔軟ですか？他の人が見えないものを見る人、突飛な想像で世界を変える人。私たちは彼らを「創造的な人」と呼びます。私の創造力スコアを確認する 💡 脳の柔軟性テスト 🧠",
    "zh-CN": "你的大脑有多灵活？能看到别人看不到的东西的人，用天马行空的想象改变世界的人。我们称他们为'有创造力的人'。检查我的创造力分数 💡 大脑灵活性测试 🧠",
    "zh-TW": "你的大腦有多靈活？能看到別人看不到的東西的人，用天馬行空的想像改變世界的人。我們稱他們為「有創造力的人」。檢查我的創造力分數 💡 大腦靈活性測試 🧠",
    "vi": "Bộ não của bạn linh hoạt đến mức nào? Những người thấy điều người khác không thấy, những người thay đổi thế giới bằng trí tưởng tượng hoang dã. Chúng ta gọi họ là 'người sáng tạo'. Kiểm tra điểm sáng tạo của tôi 💡 Kiểm tra tính linh hoạt của não 🧠",
    "id": "Seberapa fleksibel otak Anda? Orang yang melihat apa yang tidak dilihat orang lain, orang yang mengubah dunia dengan imajinasi liar. Kami menyebut mereka 'orang kreatif'. Periksa skor kreativitas saya 💡 Tes fleksibilitas otak 🧠"
  }$$,
  'phase2_test_148_creativity_level.jpg',
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
