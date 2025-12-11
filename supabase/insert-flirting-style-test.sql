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
  'flirting-style-test',
  '{
    "ko": "나의 무의식 플러팅 스타일 (연애 기술 진단)",
    "en": "My Unconscious Flirting Style (Dating Skill Diagnosis)",
    "ja": "私の無意識フリートスタイル（恋愛スキル診断）",
    "zh-CN": "我的无意识调情风格（恋爱技能诊断）",
    "zh-TW": "我的無意識調情風格（戀愛技能診斷）",
    "vi": "Phong cách Tán tỉnh Vô thức của tôi (Chẩn đoán Kỹ năng Hẹn hò)",
    "id": "Gaya Flirting Bawah Sadar Saya (Diagnosis Keterampilan Kencan)"
  }',
  '{
    "ko": "혹시... 너 지금 나 꼬시는 거야?\n나는 가만히 있었는데 주변에 이성이 꼬이거나, 맘 먹고 다가가도 이상하게 썸이 깨진 적 있나요?\n그건 당신도 모르는 당신만의 ''플러팅 기술'' 때문일 수 있습니다.\n눈웃음 한 방으로 무장 해제시키는 ''여우''인지, 무심한 척 챙겨주는 ''츤데레''인지.\n당신이 이성을 홀리는 치명적인 무기는 무엇일까요? 나의 유혹 스킬 진단하기 💋 무의식 플러팅 확인 🦊",
    "en": "Wait... are you flirting with me?\nHave you ever had people attracted to you even when you were just standing still, or had a crush fall apart strangely even when you tried to approach them?\nIt might be because of your own ''flirting technique'' that you don''t even know about.\nAre you a ''fox'' who disarms with one eye smile, or a ''tsundere'' who acts indifferent but takes care of things?\nWhat is your fatal weapon for captivating the opposite sex? Diagnose my seduction skills 💋 Check my unconscious flirting 🦊",
    "ja": "もしかして...今、私を口説いてるの？\nじっとしていただけなのに周りに異性が寄ってきたり、気合を入れて近づいても変にサムが壊れた経験はありませんか？\nそれはあなたも知らないあなただけの「フリート技術」のせいかもしれません。\n目笑い一発で武装解除させる「キツネ」なのか、無関心なふりをして気遣う「ツンデレ」なのか。\nあなたが異性を魅了する致命的な武器は何でしょうか？私の誘惑スキル診断 💋 無意識のフリート確認 🦊",
    "zh-CN": "等等...你现在是在撩我吗？\n你有没有遇到过即使你只是静静地站着，周围也会有异性被吸引，或者即使你下定决心接近，暧昧关系也会奇怪地破裂？\n这可能是因为你自己都不知道的''调情技巧''。\n你是用眼神一笑就能解除武装的''狐狸''，还是装作漠不关心却默默照顾的''傲娇''？\n你吸引异性的致命武器是什么？诊断我的诱惑技能 💋 检查我的无意识调情 🦊",
    "zh-TW": "等等...你現在是在撩我嗎？\n你有沒有遇到過即使你只是靜靜地站著，周圍也會有異性被吸引，或者即使你下定決心接近，曖昧關係也會奇怪地破裂？\n這可能是因為你自己都不知道的''調情技巧''。\n你是用眼神一笑就能解除武裝的''狐狸''，還是裝作漠不關心卻默默照顧的''傲嬌''？\n你吸引異性的致命武器是什麼？診斷我的誘惑技能 💋 檢查我的無意識調情 🦊",
    "vi": "Đợi đã... bạn đang tán tỉnh tôi à?\nBạn có bao giờ gặp trường hợp người khác giới bị thu hút dù bạn chỉ đứng yên, hoặc mối quan hệ mơ hồ bị tan vỡ một cách kỳ lạ dù bạn đã cố gắng tiếp cận?\nCó thể là do ''kỹ thuật tán tỉnh'' của chính bạn mà bạn không hề biết.\nBạn là ''cáo'' giải giáp bằng một nụ cười mắt, hay ''tsundere'' tỏ ra thờ ơ nhưng lại chăm sóc?\nVũ khí chết người của bạn để thu hút người khác giới là gì? Chẩn đoán kỹ năng quyến rũ của tôi 💋 Kiểm tra sự tán tỉnh vô thức của tôi 🦊",
    "id": "Tunggu... apakah kamu sedang menggoda saya?\nPernahkah Anda mengalami orang lain tertarik pada Anda bahkan ketika Anda hanya berdiri diam, atau hubungan samar-samar hancur dengan aneh meskipun Anda mencoba mendekati?\nMungkin karena ''teknik flirting'' Anda sendiri yang bahkan tidak Anda ketahui.\nApakah Anda ''rubah'' yang melucuti senjata dengan satu senyuman mata, atau ''tsundere'' yang bertindak acuh tak acuh tapi merawat?\nApa senjata mematikan Anda untuk memikat lawan jenis? Diagnosis keterampilan godaan saya 💋 Periksa flirting bawah sadar saya 🦊"
  }',
  'phase2_test_141_flirting_style.jpg',
  'psychology',
  'love',
  '{
    "ko": ["연애", "심리"],
    "en": ["Romance", "Psychology"],
    "ja": ["恋愛", "心理"],
    "zh-CN": ["恋爱", "心理"],
    "zh-TW": ["戀愛", "心理"],
    "vi": ["Tình yêu", "Tâm lý"],
    "id": ["Romantis", "Psikologi"]
  }',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;

