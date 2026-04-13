-- 우리 헤어질 확률? 커플 위험도 테스트

-- slug: phase3-couple-breakup-risk

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

  'phase3-couple-breakup-risk',

  '{

    "ko": "우리 헤어질 확률? 커플 위험도 테스트",

    "en": "Will We Break Up? Couple Risk Test",

    "ja": "別れる確率は？カップル危険度テスト",

    "zh-CN": "我们会分手吗？情侣风险测试",

    "zh-TW": "我們會分手嗎？情侶風險測驗",

    "vi": "Chúng ta có chia tay? Test rủi ro cặp đôi",

    "id": "Peluang putus? Tes risiko pasangan"

  }',

  '{

    "ko": "12문항 커플 매칭형. 파트너 A·B 각자 답한 뒤 합산 점수로 위험도·GAP을 확인합니다. #연애 #커플 #관계",

    "en": "12-question couple match: Partner A & B answer separately, then see combined risk and GAP. #love #couple #relationship",

    "ja": "12問のカップル型。A・Bがそれぞれ回答し、合計スコアで危険度とGAPを確認。#恋愛 #カップル #関係",

    "zh-CN": "12 题伴侣匹配：A、B 各自作答后看总分、风险与差距。#恋爱 #情侣 #关系",

    "zh-TW": "12 題伴侶配對：A、B 各自作答後看總分、風險與差距。#戀愛 #情侶 #關係",

    "vi": "12 câu dạng cặp đôi: A và B trả lời riêng, xem tổng điểm, rủi ro và GAP. #yêu #cặp đôi #quan hệ",

    "id": "12 pertandingan pasangan: A & B jawab terpisah, lihat total risiko & GAP. #cinta #pasangan #hubungan"

  }',

  'p3_test_couple_breakup_risk.jpg',

  'psychology',

  'personality',

  '{

    "ko": ["연애", "커플", "관계"],

    "en": ["Love", "Couple", "Relationship"],

    "ja": ["恋愛", "カップル", "関係"],

    "zh-CN": ["恋爱", "情侣", "关系"],

    "zh-TW": ["戀愛", "情侶", "關係"],

    "vi": ["Yêu đương", "Cặp đôi", "Quan hệ"],

    "id": ["Pacaran", "Pasangan", "Hubungan"]

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
