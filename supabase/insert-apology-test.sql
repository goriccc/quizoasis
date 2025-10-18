-- 사과 스타일 테스트 데이터 삽입
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
  'apology-style-test',
  '{
    "ko": "당신은 어떤 방식으로 사과하는 사람인가요?",
    "en": "What is your way of apologizing?",
    "ja": "あなたはどのように謝る人ですか？",
    "zh-CN": "你是如何道歉的人？",
    "zh-TW": "你是如何道歉的人？",
    "vi": "Bạn là người xin lỗi như thế nào?",
    "id": "Bagaimana cara Anda meminta maaf?"
  }',
  '{
    "ko": "미안해? 내 잘못이 아닌데? 아니면 행동으로 보여줄게?\n사과하는 방식은 사람마다 다릅니다.\n미안해를 즉시 말하는 사람, 하지만 그건...이라며 변명하는 사람, 말없이 행동으로 보여주는 사람, 시간이 필요한 사람.\n당신은 어떤 방식으로 사과하나요?\n사과 스타일은 관계의 질을 결정합니다. 잘못된 사과는 관계를 더 악화시키고, 진심 어린 사과는 관계를 더 돈독하게 만듭니다.\n소요 시간 단 3분! 솔직하게 답해주세요 💬",
    "en": "Sorry? It''s not my fault? Or show it with actions?\nThe way of apologizing is different for each person.\nPeople who immediately say sorry, people who make excuses saying \"but that''s...\", people who show with actions without words, people who need time.\nWhat is your way of apologizing?\nApology style determines the quality of relationships. Wrong apologies worsen relationships, while sincere apologies strengthen them.\nTakes only 3 minutes! Please answer honestly 💬",
    "ja": "ごめん？私のせいじゃない？それとも行動で示す？\n謝り方は人それぞれ違います。\nすぐに「ごめん」と言う人、「でもそれは...」と弁解する人、言葉なしで行動で示す人、時間が必要な人。\nあなたはどのように謝りますか？\n謝り方のスタイルは関係の質を決定します。間違った謝りは関係を悪化させ、心からの謝りは関係をより強固にします。\n所要時間わずか3分！正直に答えてください 💬",
    "zh-CN": "对不起？不是我的错？还是用行动表示？\n道歉方式因人而异。\n立即说对不起的人，说「但是那是...」辩解的人，用行动不说话的人，需要时间的人。\n你是如何道歉的？\n道歉风格决定关系质量。错误的道歉会恶化关系，真诚的道歉会加强关系。\n只需3分钟！请诚实回答 💬",
    "zh-TW": "對不起？不是我的錯？還是用行動表示？\n道歉方式因人而異。\n立即說對不起的人，說「但是那是...」辯解的人，用行動不說話的人，需要時間的人。\n你是如何道歉的？\n道歉風格決定關係質量。錯誤的道歉會惡化關係，真誠的道歉會加強關係。\n只需3分鐘！請誠實回答 💬",
    "vi": "Xin lỗi? Không phải lỗi của tôi? Hay thể hiện bằng hành động?\nCách xin lỗi của mỗi người khác nhau.\nNgười nói xin lỗi ngay lập tức, người biện hộ nói \"nhưng đó là...\", người thể hiện bằng hành động không lời, người cần thời gian.\nBạn xin lỗi như thế nào?\nPhong cách xin lỗi quyết định chất lượng mối quan hệ. Lời xin lỗi sai làm xấu mối quan hệ, lời xin lỗi chân thành làm mối quan hệ bền chặt hơn.\nChỉ mất 3 phút! Hãy trả lời thành thật 💬",
    "id": "Maaf? Bukan salah saya? Atau tunjukkan dengan tindakan?\nCara meminta maaf berbeda untuk setiap orang.\nOrang yang langsung bilang maaf, orang yang beralasan bilang \"tapi itu...\", orang yang tunjukkan dengan tindakan tanpa kata, orang yang butuh waktu.\nBagaimana cara Anda meminta maaf?\nGaya meminta maaf menentukan kualitas hubungan. Permintaan maaf yang salah memperburuk hubungan, sementara permintaan maaf yang tulus memperkuat hubungan.\nHanya butuh 3 menit! Silakan jawab dengan jujur 💬"
  }',
  'test_039_apology_style.jpg',
  'dating',
  'love',
  '{
    "ko": ["소통", "관계", "성격"],
    "en": ["Communication", "Relationships", "Personality"],
    "ja": ["コミュニケーション", "関係", "性格"],
    "zh-CN": ["沟通", "关系", "性格"],
    "zh-TW": ["溝通", "關係", "性格"],
    "vi": ["Giao tiếp", "Mối quan hệ", "Tính cách"],
    "id": ["Komunikasi", "Hubungan", "Kepribadian"]
  }',
  0
);
