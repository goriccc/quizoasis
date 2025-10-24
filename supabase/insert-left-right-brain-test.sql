-- 좌뇌/우뇌 테스트 데이터 삽입
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
  'left-right-brain-test',
  '{
    "ko": "나는 좌뇌형일까, 우뇌형일까?",
    "en": "Am I left-brained or right-brained?",
    "ja": "私は左脳型？右脳型？",
    "zh-CN": "我是左脑型还是右脑型？",
    "zh-TW": "我是左腦型還是右腦型？",
    "vi": "Tôi thuộc kiểu não trái hay não phải?",
    "id": "Apakah saya tipe otak kiri atau kanan?"
  }',
  '{
    "ko": "좌뇌? 우뇌? 당신의 두뇌 성향을 정확히 분석합니다! 논리적 vs 감성적 / 분석적 vs 창의적 / 계획적 vs 즉흥적 / 언어적 vs 시각적 좌뇌가 발달한 사람은 논리와 분석에 강하고, 우뇌가 발달한 사람은 창의와 감성에 뛰어납니다. 당신은 어느 쪽일까요? 아니면 완벽한 균형을 이루고 있나요? 단 3분이면 당신의 뇌 유형을 알 수 있습니다!",
    "en": "Left brain? Right brain? We accurately analyze your brain tendencies! Logical vs Emotional / Analytical vs Creative / Planned vs Spontaneous / Verbal vs Visual People with developed left brains are strong in logic and analysis, while people with developed right brains excel in creativity and emotion. Which side are you? Or do you have perfect balance? In just 3 minutes, you can know your brain type!",
    "ja": "左脳？右脳？あなたの脳の傾向を正確に分析します！論理的 vs 感情的 / 分析的 vs 創造的 / 計画的 vs 即興的 / 言語的 vs 視覚的 左脳が発達した人は論理と分析に強く、右脳が発達した人は創造性と感情に優れています。あなたはどちら側ですか？それとも完璧なバランスを保っていますか？たった3分であなたの脳タイプがわかります！",
    "zh-CN": "左脑？右脑？我们准确分析你的大脑倾向！逻辑性 vs 感性 / 分析性 vs 创造性 / 计划性 vs 即兴性 / 语言性 vs 视觉性 左脑发达的人在逻辑和分析方面很强，右脑发达的人在创造和情感方面表现出色。你是哪一边？还是保持完美平衡？只需3分钟，你就能知道你的大脑类型！",
    "zh-TW": "左腦？右腦？我們準確分析你的大腦傾向！邏輯性 vs 感性 / 分析性 vs 創造性 / 計劃性 vs 即興性 / 語言性 vs 視覺性 左腦發達的人在邏輯和分析方面很強，右腦發達的人在創造和情感方面表現出色。你是哪一邊？還是保持完美平衡？只需3分鐘，你就能知道你的大腦類型！",
    "vi": "Não trái? Não phải? Chúng tôi phân tích chính xác xu hướng não của bạn! Logic vs Cảm xúc / Phân tích vs Sáng tạo / Có kế hoạch vs Tự phát / Ngôn ngữ vs Hình ảnh Những người có não trái phát triển mạnh về logic và phân tích, trong khi những người có não phải phát triển xuất sắc về sáng tạo và cảm xúc. Bạn thuộc phía nào? Hay bạn có sự cân bằng hoàn hảo? Chỉ trong 3 phút, bạn có thể biết loại não của mình!",
    "id": "Otak kiri? Otak kanan? Kami menganalisis kecenderungan otak Anda dengan akurat! Logis vs Emosional / Analitis vs Kreatif / Terencana vs Spontan / Verbal vs Visual Orang dengan otak kiri yang berkembang kuat dalam logika dan analisis, sementara orang dengan otak kanan yang berkembang unggul dalam kreativitas dan emosi. Anda di sisi mana? Atau apakah Anda memiliki keseimbangan sempurna? Hanya dalam 3 menit, Anda bisa mengetahui jenis otak Anda!"
  }',
  'test_104_left_right_brain.jpg',
  'career',
  'career',
  '{
    "ko": ["두뇌", "성향"],
    "en": ["Brain", "Tendency"],
    "ja": ["脳", "傾向"],
    "zh-CN": ["大脑", "倾向"],
    "zh-TW": ["大腦", "傾向"],
    "vi": ["Não bộ", "Xu hướng"],
    "id": ["Otak", "Kecenderungan"]
  }',
  0
);

