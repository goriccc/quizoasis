-- 나의 '경쟁심' DNA 분석
-- slug: phase3-competitive-dna
-- thumbnail: p3_test_competitive_dna.webp

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
  'phase3-competitive-dna',
  '{"ko": "나의 ''경쟁심'' DNA 분석", "en": "My Competitive DNA Analysis", "ja": "私の''競争心''DNA分析", "zh-CN": "我的''竞争心''DNA分析", "zh-TW": "我的''競爭心''DNA分析", "vi": "Phân tích DNA Tinh thần cạnh tranh của tôi", "id": "Analisis DNA Daya Saing-ku"}',
  '{"ko": "12가지 질문으로 경쟁 상황에서 나의 진짜 반응과 동기 유형을 분석합니다. 6개 영역별 점수와 강점·주의점·적합 환경까지 확인하세요.", "en": "Analyze your real reactions and motivation in competitive situations with 12 questions. See scores across 6 domains plus strengths, cautions, and best-fit environments.", "ja": "12の質問で競争場面での本当の反応と動機タイプを分析。6領域スコアと強み・注意点・適合環境まで確認。", "zh-CN": "通过12个问题分析竞争情境中的真实反应与动机类型。含6个领域得分及优势、注意点与适合环境。", "zh-TW": "透過12個問題分析競爭情境中的真實反應與動機類型。含6個領域得分及優勢、注意點與適合環境。", "vi": "Phân tích phản ứng và động lực thật trong cạnh tranh qua 12 câu hỏi. Xem điểm 6 lĩnh vực cùng điểm mạnh, lưu ý và môi trường phù hợp.", "id": "Analisis reaksi dan motivasi nyata dalam kompetisi lewat 12 pertanyaan. Lihat skor 6 domain plus kekuatan, peringatan, dan lingkungan cocok."}',
  'p3_test_competitive_dna.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["경쟁심", "승부욕", "게임", "스포츠", "자기분석"], "en": ["competitiveness", "winning drive", "games", "sports", "self-analysis"], "ja": ["競争心", "勝負欲", "ゲーム", "スポーツ", "自己分析"], "zh-CN": ["竞争心", "胜负欲", "游戏", "体育", "自我分析"], "zh-TW": ["競爭心", "勝負欲", "遊戲", "體育", "自我分析"], "vi": ["tinh thần cạnh tranh", "thắng thua", "game", "thể thao", "tự phân tích"], "id": ["daya saing", "dorong menang", "game", "olahraga", "analisis diri"]}',
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
