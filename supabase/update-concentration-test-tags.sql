-- 집중력 테스트 태그 업데이트 (두뇌만)
UPDATE tests 
SET tags = '{
  "ko": ["두뇌"],
  "en": ["Brain"],
  "ja": ["脳"],
  "zh-CN": ["大脑"],
  "zh-TW": ["大腦"],
  "vi": ["Não bộ"],
  "id": ["Otak"]
}'
WHERE slug = 'concentration-level-test';
