-- 나의 고백 성공 확률
-- slug: phase3-confession-success
-- thumbnail: p3_test_confession_success.webp

INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  format,
  tags,
  play_count
) VALUES (
  'phase3-confession-success',
  '{"ko": "나의 고백 성공 확률", "en": "My Confession Success Rate", "ja": "私の告白成功確率", "zh-CN": "我的告白成功概率", "zh-TW": "我的告白成功機率", "vi": "Xác suất tỏ tình thành công của tôi", "id": "Peluang Keberhasilan Nembakku"}',
  '{"ko": "같은 마음이라도 타이밍과 방식에 따라 결과가 달라집니다. 10가지 상황으로 고백 성공 확률과 상위 몇 %인지 알려드립니다.", "en": "The same feelings can land differently depending on timing and style. 10 situations estimate your confession success rate and where you rank.", "ja": "同じ気持ちでも、タイミングと伝え方で結果は変わります。10の状況で告白の成功確率と上位何%かを出します。", "zh-CN": "同样的心意，时机和方式不同，结果也会不同。通过10个情境，算出告白成功概率和你排在前百分之几。", "zh-TW": "同樣的心意，時機和方式不同，結果也會不同。透過10個情境，算出告白成功機率和你排在前百分之幾。", "vi": "Cùng một tấm lòng, thời điểm và cách nói khác nhau thì kết quả cũng khác. 10 tình huống tính xác suất tỏ tình thành công và bạn thuộc top bao nhiêu phần trăm.", "id": "Perasaan yang sama bisa beda hasilnya tergantung waktu dan cara menyampaikannya. 10 situasi menghitung peluang berhasil nembak dan kamu ada di berapa persen teratas."}',
  'p3_test_confession_success.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["고백타이밍", "썸", "연애테스트"], "en": ["confession timing", "talking stage", "dating test"], "ja": ["告白タイミング", "曖昧", "恋愛テスト"], "zh-CN": ["告白时机", "暧昧", "恋爱测试"], "zh-TW": ["告白時機", "曖昧", "戀愛測驗"], "vi": ["thời điểm tỏ tình", "mập mờ", "test tình yêu"], "id": ["waktu nembak", "pdkt", "tes cinta"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  format = EXCLUDED.format,
  tags = EXCLUDED.tags;
