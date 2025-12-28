INSERT INTO tests (slug, title, description, thumbnail, type, category, tags)
VALUES (
  'phase2_color_blind_test',
  '{
    "ko": "내 세상의 색깔은? (색맹/색약 정밀 테스트)",
    "en": "What Color Is My World? (Color Blindness Test)",
    "ja": "私の世界の色は？(色盲・色覚異常精密テスト)",
    "zh-CN": "我的世界是什么颜色？(色盲/色弱精密测试)",
    "zh-TW": "我的世界是什麼顏色？(色盲/色弱精密測試)",
    "vi": "Màu sắc thế giới của tôi là gì? (Kiểm tra mù màu/chứng rối loạn sắc giác)",
    "id": "Warna Dunia Saya Apa? (Tes Buta Warna/Defisiensi Warna)"
  }'::jsonb,
  '{
    "ko": "당신이 보는 빨간색이, 남들에게도 빨간색일까요? 우리나라 남성의 약 5.9%, 여성의 약 0.4%가 색각 이상(색맹/색약)을 가지고 있다고 합니다. 특히 경미한 색약의 경우, 성인이 될 때까지 모르고 지내는 경우도 많습니다. 혹시 남들과 다른 색의 세상을 보고 있진 않나요? 지금 바로 확인해 보세요.",
    "en": "Is the red you see the same red others see? About 5.9% of men and 0.4% of women in our country have color vision deficiency (color blindness/color weakness). Especially for mild color weakness, many people live without knowing until adulthood. Are you seeing a world of different colors than others? Check now.",
    "ja": "あなたが見る赤は、他の人にとっても赤ですか？我が国の男性の約5.9％、女性の約0.4％が色覚異常（色盲・色弱）を持っていると言われています。特に軽度の色弱の場合、成人になるまで気づかないことも多いです。もしかして他の人とは違う色の世界を見ていませんか？今すぐ確認してください。",
    "zh-CN": "你看到的红色，对别人来说也是红色吗？我国约5.9%的男性和0.4%的女性有色觉异常（色盲/色弱）。特别是轻度色弱，很多人直到成年都不知道。你是否看到了与别人不同颜色的世界？现在就检查一下吧。",
    "zh-TW": "你看到的紅色，對別人來說也是紅色嗎？我國約5.9%的男性和0.4%的女性有色覺異常（色盲/色弱）。特別是輕度色弱，很多人直到成年都不知道。你是否看到了與別人不同顏色的世界？現在就檢查一下吧。",
    "vi": "Màu đỏ bạn nhìn thấy có giống màu đỏ mà người khác nhìn thấy không? Khoảng 5.9% nam giới và 0.4% phụ nữ ở nước ta có khiếm khuyết thị giác màu (mù màu/yếu màu). Đặc biệt đối với trường hợp yếu màu nhẹ, nhiều người sống mà không biết cho đến khi trưởng thành. Bạn có đang nhìn thấy một thế giới màu sắc khác với người khác không? Hãy kiểm tra ngay bây giờ.",
    "id": "Apakah merah yang Anda lihat sama dengan merah yang dilihat orang lain? Sekitar 5.9% pria dan 0.4% wanita di negara kita memiliki defisiensi penglihatan warna (buta warna/kelemahan warna). Terutama untuk kelemahan warna ringan, banyak orang hidup tanpa menyadarinya sampai dewasa. Apakah Anda melihat dunia warna yang berbeda dari orang lain? Periksa sekarang."
  }'::jsonb,
  'phase2_test_162_color_blindness.jpg',
  'game',
  'capability',
  '{
    "ko": ["챌린지", "게임"],
    "en": ["Challenge", "Game"],
    "ja": ["チャレンジ", "ゲーム"],
    "zh-CN": ["挑战", "游戏"],
    "zh-TW": ["挑戰", "遊戲"],
    "vi": ["Thử thách", "Trò chơi"],
    "id": ["Tantangan", "Game"]
  }'::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

