-- AI가 보는 솔직한 나의 얼굴 평가 테스트 데이터 삽입
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
  'honest-facial-evaluation',
  '{
    "ko": "AI가 보는 솔직한 나의 얼굴 평가",
    "en": "AI''s Honest Facial Evaluation",
    "ja": "AIが見る正直な私の顔評価",
    "zh-CN": "AI诚实的面部评估",
    "zh-TW": "AI誠實的面部評估",
    "vi": "Đánh Giá Khuôn Mặt Thành Thật Của AI",
    "id": "Evaluasi Wajah Jujur dari AI"
  }',
  '{
    "ko": "\"AI의 눈으로 본 당신의 매력 포인트는?\"\n\n첫인상 점수는?\n매력적인 부분은?\n개선하면 좋을 점은?\n\nAI가 솔직하게 분석해서 평가해 드립니다.\n\n용기 내서 확인해보세요. 당신이 몰랐던 매력을 발견할 수도!",
    "en": "\"What are your charm points from AI''s perspective?\"\n\nFirst impression score?\nAttractive features?\nWhat to improve?\n\nAI analyzes and evaluates honestly.\n\nBe brave and check it out. You might discover charm you didn''t know you had!",
    "ja": "「AIの目から見たあなたの魅力ポイントは？」\n\n第一印象スコアは？\n魅力的な部分は？\n改善すると良い点は？\n\nAIが正直に分析して評価します。\n\n勇気を出して確認してみてください。あなたが知らなかった魅力を発見できるかもしれません！",
    "zh-CN": "“AI眼中的你的魅力点是什么？”\n\n第一印象分数？\n有魅力的部分？\n可以改进的点？\n\nAI会诚实地分析和评估。\n\n鼓起勇气确认一下吧。你可能会发现自己不知道的魅力！",
    "zh-TW": "「AI眼中的你的魅力點是什麼？」\n\n第一印象分數？\n有魅力的部分？\n可以改進的點？\n\nAI會誠實地分析和評估。\n\n鼓起勇氣確認一下吧。你可能會發現自己不知道的魅力！",
    "vi": "\"Điểm thu hút của bạn từ góc nhìn của AI là gì?\"\n\nĐiểm ấn tượng đầu tiên?\nĐặc điểm hấp dẫn?\nĐiểm cần cải thiện?\n\nAI phân tích và đánh giá một cách thành thật.\n\nHãy mạnh dạn kiểm tra. Bạn có thể khám phá sức hút mà mình không biết!",
    "id": "\"Apa poin daya tarik Anda dari perspektif AI?\"\n\nSkor kesan pertama?\nFitur menarik?\nApa yang perlu diperbaiki?\n\nAI menganalisis dan mengevaluasi dengan jujur.\n\nBerani dan periksa. Anda mungkin menemukan pesona yang tidak Anda ketahui!"
  }',
  'Honest_facial_evaluation.jpg',
  'face',
  'face',
  '{
    "ko": ["얼굴"],
    "en": ["face"],
    "ja": ["顔"],
    "zh-CN": ["面相"],
    "zh-TW": ["面相"],
    "vi": ["khuôn mặt"],
    "id": ["wajah"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();

