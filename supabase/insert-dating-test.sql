-- 데이트 스타일 테스트 데이터 삽입
-- 기존 데이터가 있다면 삭제 후 삽입

DELETE FROM tests WHERE slug = 'dating-style-test';

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
  'dating-style-test',
  jsonb_build_object(
    'ko', '당신의 데이트 스타일은?',
    'en', 'What is Your Dating Style?',
    'ja', 'あなたのデートスタイルは？',
    'zh-CN', '你的约会风格是什么？',
    'zh-TW', '你的約會風格是什麼？',
    'id', 'Apa Gaya Kencan Anda?',
    'vi', 'Phong Cách Hẹn Hò Của Bạn Là Gì?'
  ),
  jsonb_build_object(
    'ko', '나의 데이트 스타일과 최고의 궁합을 발견하세요!',
    'en', 'Discover your dating style and perfect compatibility!',
    'ja', 'あなたのデートスタイルと最高の相性を発見！',
    'zh-CN', '发现你的约会风格和完美配对！',
    'zh-TW', '發現你的約會風格和完美配對！',
    'id', 'Temukan gaya kencan dan kecocokan sempurna Anda!',
    'vi', 'Khám phá phong cách hẹn hò và sự phù hợp hoàn hảo của bạn!'
  ),
  'test_026_dating_style.jpg',
  'dating',
  'love',
  jsonb_build_object(
    'ko', ARRAY['연애', '데이트', '궁합', '성격'],
    'en', ARRAY['Love', 'Dating', 'Compatibility', 'Personality'],
    'ja', ARRAY['恋愛', 'デート', '相性', '性格'],
    'zh-CN', ARRAY['恋爱', '约会', '配对', '性格'],
    'zh-TW', ARRAY['戀愛', '約會', '配對', '性格'],
    'id', ARRAY['Cinta', 'Kencan', 'Kecocokan', 'Kepribadian'],
    'vi', ARRAY['Tình yêu', 'Hẹn hò', 'Phù hợp', 'Tính cách']
  ),
  0
);

-- 결과 확인
SELECT * FROM tests WHERE slug = 'dating-style-test';

