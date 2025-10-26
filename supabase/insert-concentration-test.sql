-- 집중력 테스트 데이터 삽입
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
  'concentration-level-test',
  '{
    "ko": "당신의 집중력 레벨은?",
    "en": "What is your concentration level?",
    "ja": "あなたの集中力レベルは？",
    "zh-CN": "你的专注力水平是什么？",
    "zh-TW": "你的專注力水平是什麼？",
    "vi": "Mức độ tập trung của bạn là gì?",
    "id": "Berapa level konsentrasi Anda?"
  }',
  '{
    "ko": "당신의 집중력, 과연 얼마나 강력한가요?\n스마트폰 알림, 주변 소음, 끊임없는 유혹... 현대인의 집중력은 금붕어보다 짧다는 말도 있습니다.\n한 가지 일에 얼마나 오래 집중할 수 있나요? 외부 방해에 얼마나 강한가요? 몰입의 경지에 도달한 적이 있나요?\n단 3분이면 당신의 집중력 유형을 발견할 수 있습니다!",
    "en": "How powerful is your concentration?\nSmartphone notifications, ambient noise, endless temptations... Modern people''s concentration is said to be shorter than a goldfish.\nHow long can you focus on one thing? How strong are you against external distractions? Have you ever reached a state of immersion?\nJust 3 minutes to discover your concentration type!",
    "ja": "あなたの集中力、いったいどのくらい強力ですか？\nスマートフォンの通知、周囲の騒音、絶え間ない誘惑...現代人の集中力は金魚より短いと言われています。\n一つのことにどのくらい長く集中できますか？外部の妨害にどのくらい強いですか？没入の境地に達したことはありますか？\nたった3分であなたの集中力タイプを発見できます！",
    "zh-CN": "你的专注力有多强大？\n智能手机通知、周围噪音、无尽的诱惑...现代人的专注力据说比金鱼还短。\n你能在一件事上专注多久？对外部干扰有多强？你是否达到过沉浸状态？\n只需3分钟就能发现你的专注力类型！",
    "zh-TW": "你的專注力有多強大？\n智能手機通知、周圍噪音、無盡的誘惑...現代人的專注力據說比金魚還短。\n你能在一件事上專注多久？對外部干擾有多強？你是否達到過沉浸狀態？\n只需3分鐘就能發現你的專注力類型！",
    "vi": "Sức mạnh tập trung của bạn như thế nào?\nThông báo điện thoại, tiếng ồn xung quanh, những cám dỗ bất tận... Người ta nói rằng khả năng tập trung của con người hiện đại ngắn hơn cả cá vàng.\nBạn có thể tập trung vào một việc bao lâu? Bạn mạnh mẽ đến mức nào trước những phiền nhiễu bên ngoài? Bạn đã từng đạt đến trạng thái nhập tâm chưa?\nChỉ 3 phút để khám phá loại tập trung của bạn!",
    "id": "Seberapa kuat konsentrasi Anda?\nNotifikasi smartphone, kebisingan sekitar, godaan tak berujung... Konsentrasi manusia modern dikatakan lebih pendek dari ikan mas.\nBerapa lama Anda bisa fokus pada satu hal? Seberapa kuat Anda melawan gangguan eksternal? Pernahkah Anda mencapai keadaan imersi?\nHanya 3 menit untuk menemukan tipe konsentrasi Anda!"
  }',
  'test_078_concentration.jpg',
  'brain',
  'psychology',
  '{
    "ko": ["두뇌", "집중력"],
    "en": ["Brain", "Concentration"],
    "ja": ["脳", "集中力"],
    "zh-CN": ["大脑", "专注力"],
    "zh-TW": ["大腦", "專注力"],
    "vi": ["Não bộ", "Tập trung"],
    "id": ["Otak", "Konsentrasi"]
  }',
  0
);
