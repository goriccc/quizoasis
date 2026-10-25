-- 얼굴로 보는 성격 장점 TOP
-- slug: phase3-face-strength
-- thumbnail: p3_test_face_strength.webp

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
  'phase3-face-strength',
  '{"ko": "얼굴로 보는 성격 장점 TOP", "en": "What strength shows on my face?", "ja": "顔に出る長所、何？", "zh-CN": "我的脸，藏着哪种优点？", "zh-TW": "我的臉，藏著哪種優點？", "vi": "Mặt tôi để lộ điểm mạnh nào?", "id": "Kekuatan apa yang kebaca dari wajahku?"}',
  '{"ko": "표정과 얼굴 비율을 읽고, 인상에서 연상되는 장점 키워드 8가지 중 하나를 골라 드립니다. 사진은 기기 안에서만 분석하고 저장하거나 전송하지 않습니다.", "en": "It reads your expression and face shape, then picks one of 8 strengths your look suggests. The photo stays on your device. It is never saved or sent.", "ja": "表情と顔のバランスを読んで、印象から連想される長所8つの中から一つを選びます。写真はこの端末の中だけで分析し、保存も送信もしません。", "zh-CN": "读出表情和脸型，从印象联想到的8个优点里挑出一个。照片只在这台设备里分析，不会保存，也不会上传。", "zh-TW": "讀出表情和臉型，從印象聯想到的8個優點裡挑出一個。照片只在這台裝置裡分析，不會保存，也不會上傳。", "vi": "Đọc nét mặt và khuôn mặt, rồi chọn một trong 8 điểm mạnh gợi ra từ ấn tượng. Ảnh chỉ được phân tích trên máy này, không lưu và không gửi đi.", "id": "Membaca ekspresi dan bentuk wajah, lalu memilih satu dari 8 kekuatan yang terasa dari kesan wajah. Foto hanya dianalisis di perangkat ini, tidak disimpan dan tidak dikirim."}',
  'p3_test_face_strength.webp',
  'face',
  'face',
  'face',
  '{"ko": ["얼굴", "얼굴테스트", "AI인상분석", "연애테스트"], "en": ["face", "face test", "strength", "personality"], "ja": ["顔", "顔テスト", "長所", "性格"], "zh-CN": ["脸", "脸测试", "优点", "性格"], "zh-TW": ["臉", "臉測驗", "優點", "性格"], "vi": ["khuôn mặt", "test khuôn mặt", "điểm mạnh", "tính cách"], "id": ["wajah", "tes wajah", "kekuatan", "kepribadian"]}',
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
