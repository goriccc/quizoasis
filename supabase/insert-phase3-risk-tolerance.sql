-- 나의 위험 감수 성향
-- slug: phase3-risk-tolerance
-- thumbnail: p3_test_risk_tolerance.webp

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
  'phase3-risk-tolerance',
  '{"ko": "나의 위험 감수 성향", "en": "My Risk Tolerance", "ja": "私のリスク許容度", "zh-CN": "我的风险承受倾向", "zh-TW": "我的風險承受傾向", "vi": "Xu hướng chấp nhận rủi ro của tôi", "id": "Toleransi Risiko-ku"}',
  '{"ko": "12가지 일상 선택 상황으로 나의 위험 감수 수준을 정밀 측정합니다. 재정·사회·신체·커리어·불확실성 5개 영역별 분석과 투자·창업 성향까지 확인하세요.", "en": "Measure your risk tolerance with 12 everyday scenarios. Get analysis across 5 domains plus investment and entrepreneurship insights.", "ja": "12の日常選択シナリオでリスク許容度を精密測定。金融・社会・身体・キャリア・不確実性の5領域分析と投資・起業傾向まで確認。", "zh-CN": "通过12个日常选择场景精确测量风险承受水平。含财务、社会、身体、职业、不确定性5个领域分析及投资创业倾向。", "zh-TW": "透過12個日常選擇場景精確測量風險承受水平。含財務、社會、身體、職業、不確定性5個領域分析及投資創業傾向。", "vi": "Đo mức chấp nhận rủi ro qua 12 tình huống hàng ngày. Phân tích 5 lĩnh vực và xu hướng đầu tư, khởi nghiệp.", "id": "Ukur toleransi risiko lewat 12 skenario sehari-hari. Analisis 5 domain plus insight investasi dan kewirausahaan."}',
  'p3_test_risk_tolerance.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["리스크", "모험성향", "투자성향", "창업", "위험감수"], "en": ["risk", "adventure", "investment style", "entrepreneurship", "risk tolerance"], "ja": ["リスク", "冒険性向", "投資性向", "起業", "リスク許容"], "zh-CN": ["风险", "冒险倾向", "投资倾向", "创业", "风险承受"], "zh-TW": ["風險", "冒險傾向", "投資傾向", "創業", "風險承受"], "vi": ["rủi ro", "phiêu lưu", "đầu tư", "khởi nghiệp", "chấp nhận rủi ro"], "id": ["risiko", "petualangan", "investasi", "wirausaha", "toleransi risiko"]}',
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
