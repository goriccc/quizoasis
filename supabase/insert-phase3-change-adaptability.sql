-- 나의 변화 적응력 지수

-- slug: phase3-change-adaptability

-- thumbnail: p3_test_change_adaptability.webp



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

  'phase3-change-adaptability',

  '{"ko": "나의 변화 적응력 지수", "en": "My Change Adaptability Index", "ja": "私の変化適応力指数", "zh-CN": "我的变化适应力指数", "zh-TW": "我的變化適應力指數", "vi": "Chỉ số Thích nghi với Thay đổi của tôi", "id": "Indeks Adaptasi Perubahan-ku"}',

  '{"ko": "12가지 질문으로 예상치 못한 변화 앞에서 나는 어떻게 반응하는지 분석합니다. 6개 영역별 적응력 점수와 유형별 대응 팁까지 확인하세요.", "en": "Analyze how you react to unexpected change with 12 questions. See scores across 6 adaptability domains plus type-specific response tips.", "ja": "12の質問で予想外の変化にどう反応するか分析。6領域の適応力スコアとタイプ別対応のヒントまで確認。", "zh-CN": "通过12个问题分析面对意外变化时的反应模式。含6个领域适应力得分与类型应对建议。", "zh-TW": "透過12個問題分析面對意外變化時的反應模式。含6個領域適應力得分與類型應對建議。", "vi": "Phân tích cách bạn phản ứng với thay đổi bất ngờ qua 12 câu hỏi. Xem điểm 6 lĩnh vực thích nghi và mẹo ứng phó theo loại.", "id": "Analisis reaksi terhadap perubahan tak terduga lewat 12 pertanyaan. Lihat skor 6 domain adaptasi dan tips respons per tipe."}',

  'p3_test_change_adaptability.webp',

  'psychology',

  'personality',

  'scenario_4',

  '{"ko": ["변화적응력", "유연성", "회복력", "자기이해", "성장"], "en": ["change adaptability", "flexibility", "resilience", "self-understanding", "growth"], "ja": ["変化適応力", "柔軟性", "回復力", "自己理解", "成長"], "zh-CN": ["变化适应力", "灵活性", "复原力", "自我理解", "成长"], "zh-TW": ["變化適應力", "靈活性", "復原力", "自我理解", "成長"], "vi": ["thích nghi thay đổi", "linh hoạt", "phục hồi", "hiểu bản thân", "phát triển"], "id": ["adaptasi perubahan", "fleksibilitas", "resiliensi", "memahami diri", "pertumbuhan"]}',

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
