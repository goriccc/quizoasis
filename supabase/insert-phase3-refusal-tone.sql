-- 거절할 때 나의 말투 테스트
-- slug: phase3-refusal-tone
-- thumbnail: p3_test_refusal_tone.webp

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
  'phase3-refusal-tone',
  '{"ko": "거절할 때 나의 말투 테스트", "en": "How You Say No — Your Refusal Style", "ja": "断るときの私の話し方テスト", "zh-CN": "拒绝时的我的语气测试", "zh-TW": "拒絕時的我的語氣測驗", "vi": "Cách nói khi từ chối", "id": "Gaya Bicara Saat Menolak"}',
  '{"ko": "같은 ''안 돼''도 말투마다 달라요. 12가지 거절 상황으로 단호박 직설·완곡·핑계 회피·수락형 중 나의 거절 화법을 알려드립니다.", "en": "The same \"no\" can sound totally different depending on how you say it. Twelve situations reveal whether you''re a straight talker, a softie, an excuse-maker, or someone who just can''t refuse.", "ja": "同じ「無理」でも話し方で印象は変わります。12の断り場面で、直球・遠回し・言い訳回避・引き受け型のうち自分の断り方を見つけます。", "zh-CN": "同样一句「不行」，语气却各不相同。通过12个拒绝场景，找出你是直说、绕弯、编理由，还是很难说不。", "zh-TW": "同樣一句「不行」，語氣卻各不相同。透過12個拒絕場景，找出你是直說、繞彎、編理由，還是很難說不。", "vi": "Cùng một câu \"không\" cũng khác nhau tùy cách nói. 12 tình huống cho biết bạn thuộc kiểu thẳng thắn, vòng vo, viện cớ hay khó từ chối.", "id": "\"Tidak\" yang sama terdengar beda tergantung caranya. 12 situasi mengungkap apakah kamu blak-blakan, berputar, bikin alasan, atau susah menolak."}',
  'p3_test_refusal_tone.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["거절말투", "연애말투", "연애테스트"], "en": ["refusal style", "dating talk", "relationship test"], "ja": ["断り方", "恋愛トーク", "恋愛テスト"], "zh-CN": ["拒绝语气", "恋爱说话", "恋爱测试"], "zh-TW": ["拒絕語氣", "戀愛說話", "戀愛測驗"], "vi": ["cách từ chối", "nói chuyện tình cảm", "trắc nghiệm tình yêu"], "id": ["gaya menolak", "cara bicara pacaran", "tes hubungan"]}',
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
