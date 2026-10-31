-- 연애 팩폭 능력 T 테스트
-- slug: phase3-love-factbomb-t
-- thumbnail: p3_test_love_factbomb_t.webp

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
  'phase3-love-factbomb-t',
  '{"ko":"연애 팩폭 능력 T 테스트","en":"Dating Straight-Talk T Test","ja":"恋愛ファクト爆弾T診断","zh-CN":"恋爱实话炸弹T测试","zh-TW":"戀愛實話炸彈T測驗","vi":"Test T nói thẳng chuyện tình cảm","id":"Tes T Blak-blakan Soal Pacaran"}',
  '{"ko":"연애 상담해 주다 팩폭 날린 적 있나요? 12가지 상담 상황에서 나의 반응을 골라 팩폭 T지수를 알려드립니다.","en":"Ever dropped hard truths while giving dating advice? Pick your reactions in 12 counseling moments and get your straight-talk T score.","ja":"恋愛相談でつい本音をぶっちゃけたことある？12の相談シーンで自分の反応を選んで、本音ストレートT指数をチェック。","zh-CN":"给人恋爱建议时说过狠话吗？在12个咨询场景里选你的反应，测出你的实话直说T指数。","zh-TW":"給人戀愛建議時說過重話嗎？在12個諮詢情境裡選你的反應，測出你的實話直說T指數。","vi":"Từng thẳng thắn nói thật khi tư vấn chuyện yêu chưa? Chọn phản ứng trong 12 tình huống tư vấn và xem chỉ số T nói thẳng của bạn.","id":"Pernah bilang fakta pedas pas kasih saran pacaran? Pilih reaksi di 12 momen curhat dan lihat skor T blak-blakan kamu."}',
  'p3_test_love_factbomb_t.webp',
  'psychology',
  'personality',
  'scenario_2',
  '{"ko":["연애상담","연애테스트"],"en":["dating advice","relationship test"],"ja":["恋愛相談","恋愛テスト"],"zh-CN":["恋爱咨询","恋爱测试"],"zh-TW":["戀愛諮詢","戀愛測驗"],"vi":["tư vấn tình cảm","test tình yêu"],"id":["saran pacaran","tes hubungan"]}',
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
