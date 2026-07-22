-- 나의 '벼락거지' 방어 지수
-- slug: phase3-sudden-poor-defense-index
-- thumbnail: p3_test_sudden_poor_defense_index.webp

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
  'phase3-sudden-poor-defense-index',
  '{"ko": "나의 ''벼락거지'' 방어 지수", "en": "My ''Sudden Poverty'' Defense Index", "ja": "私の「いきなり貧乏」防御指数", "zh-CN": "我的「霹雳穷人」防御指数", "zh-TW": "我的「霹靂窮人」防禦指數", "vi": "Chỉ số phòng vệ ''Nghèo Bất Ngờ'' của tôi", "id": "Indeks Pertahanan ''Miskin Mendadak''-ku"}',
  '{"ko": "12가지 질문으로 나의 경제 문해력과 자산 안정성을 진단하고 벼락거지 방어 지수를 측정합니다.", "en": "Diagnose your financial literacy and asset stability with 12 questions and measure your Sudden Poverty Defense Index.", "ja": "12個の質問で自分の経済リテラシーと資産の安定性を診断し、いきなり貧乏防御指数を測定します。", "zh-CN": "通过12个问题诊断你的金融素养和资产稳定性，测测你的霹雳穷人防御指数。", "zh-TW": "透過12個問題診斷你的金融素養和資產穩定性，測測你的霹靂窮人防禦指數。", "vi": "Chẩn đoán khả năng hiểu biết tài chính và độ ổn định tài sản của bạn qua 12 câu hỏi, đo chỉ số phòng vệ trước tình trạng nghèo bất ngờ.", "id": "Diagnosis literasi finansial dan stabilitas asetmu lewat 12 pertanyaan, dan ukur indeks pertahanan miskin mendadak-mu."}',
  'p3_test_sudden_poor_defense_index.webp',
  'psychology',
  'career',
  '{"ko": ["벼락거지", "재테크", "인플레이션"], "en": ["sudden poverty", "investing", "inflation"], "ja": ["いきなり貧乏", "資産形成", "インフレ"], "zh-CN": ["霹雳穷人", "理财", "通货膨胀"], "zh-TW": ["霹靂窮人", "理財", "通貨膨脹"], "vi": ["nghèo bất ngờ", "đầu tư tài chính", "lạm phát"], "id": ["miskin mendadak", "investasi", "inflasi"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
