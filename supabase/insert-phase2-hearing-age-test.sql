-- Insert Phase 2 Hearing Age Test
INSERT INTO tests (slug, title, description, thumbnail, type, category, tags, created_at, updated_at)
VALUES (
  'phase2_hearing_age_test',
  '{"ko": "내 귀 나이는 몇 살? (가청 주파수 테스트)", "en": "How Old Are My Ears? (Audible Frequency Test)", "ja": "私の耳年齢は何歳？（可聴周波数テスト）", "zh": "我的耳朵几岁？（可听频率测试）", "zh-TW": "我的耳朵幾歲？（可聽頻率測試）", "vi": "Tai tôi bao nhiêu tuổi? (Kiểm tra tần số nghe được)", "id": "Berapa Umur Telinga Saya? (Tes Frekuensi Audibel)"}'::jsonb,
  '{"ko": "당신은 \u0027모기 벨소리\u0027를 들을 수 있나요? 청력 나이를 측정해보세요.", "en": "Can you hear the \u0027mosquito ringtone\u0027? Measure your hearing age.", "ja": "「蚊のベルの音」が聞こえますか？聴力年齢を測定してみてください。", "zh": "你能听到「蚊子铃声」吗？测量你的听力年龄。", "zh-TW": "你能聽到「蚊子鈴聲」嗎？測量你的聽力年齡。", "vi": "Bạn có nghe thấy \u0027chuông muỗi\u0027 không? Đo tuổi thính giác của bạn.", "id": "Bisakah Anda mendengar \u0027ringtone nyamuk\u0027? Ukur usia pendengaran Anda."}'::jsonb,
  'phase2_test_160_hearing_age.jpg',
  'game',
  'capability',
  '{"ko": ["챌린지", "게임"], "en": ["Challenge", "Game"], "ja": ["チャレンジ", "ゲーム"], "zh": ["挑战", "游戏"], "zh-TW": ["挑戰", "遊戲"], "vi": ["Thử thách", "Trò chơi"], "id": ["Tantangan", "Game"]}'::jsonb,
  NOW(),
  NOW()
)
ON CONFLICT (slug) 
DO UPDATE SET 
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();

