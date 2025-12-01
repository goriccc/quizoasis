-- 에니어그램 테스트 데이터 삽입
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
  'enneagram-test',
  '{
    "ko": "9가지 성격! 에니어그램 테스트",
    "en": "9 Types of Personality! Enneagram Test",
    "ja": "9種類の性格！エニアグラムテスト",
    "zh-CN": "9种性格类型！九型人格测试",
    "zh-TW": "9種性格類型！九型人格測試",
    "vi": "9 Loại Tính Cách! Bài Kiểm Tra Enneagram",
    "id": "9 Tipe Kepribadian! Tes Enneagram"
  }',
  '{
    "ko": "나를 움직이는 내면의 힘은 무엇일까요?",
    "en": "What is the inner force that drives me?",
    "ja": "私を動かす内なる力は何だろう？",
    "zh-CN": "驱动我的内在力量是什么？",
    "zh-TW": "驅動我的內在力量是什麼？",
    "vi": "Lực lượng nội tâm nào thúc đẩy tôi?",
    "id": "Apa kekuatan batin yang menggerakkan saya?"
  }',
  'phase2_test_145_enneagram.jpg',
  'dating',
  'love',
  '{
    "ko": ["심리", "성격"],
    "en": ["psychology", "personality"],
    "ja": ["心理", "性格"],
    "zh-CN": ["心理学", "性格"],
    "zh-TW": ["心理學", "性格"],
    "vi": ["tâm lý học", "tính cách"],
    "id": ["psikologi", "kepribadian"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW(),
  created_at = CASE 
    WHEN tests.created_at IS NULL THEN NOW()
    ELSE tests.created_at
  END;

