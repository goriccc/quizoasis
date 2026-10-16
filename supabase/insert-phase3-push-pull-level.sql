-- 나의 밀당 레벨 테스트
-- slug: phase3-push-pull-level
-- thumbnail: p3_test_push_pull_level.webp

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
  'phase3-push-pull-level',
  '{"ko": "나의 밀당 레벨 테스트", "en": "My Push-Pull Level Test", "ja": "私の駆け引きレベルテスト", "zh-CN": "我的推拉等级测试", "zh-TW": "我的推拉等級測試", "vi": "Test cấp độ kéo-đẩy của tôi", "id": "Tes Level Tarik-Ulurku"}',
  '{"ko": "너무 다가가면 부담스럽고, 너무 물러서면 식은 줄 압니다. 10가지 썸·연애 상황으로 거리와 온도를 조절하는 감각을 재어 밀당 신생아부터 마스터까지 5단계 레벨을 알려드립니다.", "en": "Too close feels heavy, too far cools things off. 10 dating situations score how you balance distance and warmth, from newbie to master.", "ja": "近づきすぎると重く、引きすぎると冷める。10の恋愛シチュエーションで距離と温度の感覚を測り、駆け引きレベルを5段階で診断します。", "zh-CN": "靠太近会有压力，退太远又会冷掉。通过10个暧昧与恋爱情境，测出你调节距离和温度的感觉，从新手到大师共5个等级。", "zh-TW": "靠太近會有壓力，退太遠又會冷掉。透過10個曖昧與戀愛情境，測出你調節距離和溫度的感覺，從新手到大師共5個等級。", "vi": "Lại gần quá thì nặng, lùi xa quá thì nguội. 10 tình huống đo cảm giác giữ khoảng cách và nhiệt độ, từ người mới đến bậc thầy.", "id": "Terlalu dekat terasa berat, terlalu jauh malah dingin. 10 situasi mengukur cara mengatur jarak dan suhu, dari pemula sampai master."}',
  'p3_test_push_pull_level.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["밀당", "썸", "연애기술", "연애테스트"], "en": ["push and pull", "talking stage", "dating skills", "dating test"], "ja": ["駆け引き", "曖昧", "恋愛テク", "恋愛テスト"], "zh-CN": ["推拉", "暧昧", "恋爱技巧", "恋爱测试"], "zh-TW": ["推拉", "曖昧", "戀愛技巧", "戀愛測驗"], "vi": ["kéo đẩy", "mập mờ", "kỹ năng yêu", "test tình yêu"], "id": ["tarik ulur", "pdkt", "skill pacaran", "tes cinta"]}',
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
