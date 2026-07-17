-- 거리를 둬야 할 인맥 진단
-- slug: phase3-toxic-relationship-diagnosis
-- thumbnail: p3_test_toxic_relationship_diagnosis.webp

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
  'phase3-toxic-relationship-diagnosis',
  '{"ko": "거리를 둬야 할 인맥 진단", "en": "Toxic Connections Diagnosis", "ja": "距離を置くべき人脈診断", "zh-CN": "该保持距离的人脉诊断", "zh-TW": "該保持距離的人脈診斷", "vi": "Chẩn đoán mối quan hệ cần giữ khoảng cách", "id": "Diagnosis Relasi yang Perlu Dijauhi"}',
  '{"ko": "만나고 나면 기운이 빠지는 사람이 주변에 있나요?", "en": "Is there someone who drains you every time you meet?", "ja": "会うたびに元気がなくなる人が周りにいますか？", "zh-CN": "身边有没有一见面就让你没劲的人？", "zh-TW": "身邊有沒有一見面就讓你沒勁的人？", "vi": "Có ai quanh bạn khiến bạn kiệt sức mỗi lần gặp không?", "id": "Ada orang di sekitar yang membuatmu lelah setiap kali bertemu?"}',
  'p3_test_toxic_relationship_diagnosis.webp',
  'psychology',
  'personality',
  '{"ko": ["인맥", "관계", "심리"], "en": ["Network", "Relationships", "Psychology"], "ja": ["人脈", "関係", "心理"], "zh-CN": ["人脉", "关系", "心理"], "zh-TW": ["人脈", "關係", "心理"], "vi": ["Quan hệ", "Mối quan hệ", "Tâm lý"], "id": ["Lingkaran", "Hubungan", "Psikologi"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
