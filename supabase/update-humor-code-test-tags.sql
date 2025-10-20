-- Update Humor Code Test Tags
UPDATE tests 
SET tags = '{
  "ko": ["재미", "성격"],
  "en": ["Fun", "Personality"],
  "ja": ["面白い", "性格"],
  "zh-CN": ["有趣", "性格"],
  "zh-TW": ["有趣", "性格"],
  "vi": ["Vui vẻ", "Tính cách"],
  "id": ["Menyenangkan", "Kepribadian"]
}'
WHERE slug = 'humor-code-test';
