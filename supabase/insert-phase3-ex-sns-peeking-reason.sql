-- 나는 왜 이별 후에도 전 애인 SNS를 염탐할까?
-- slug: phase3-ex-sns-peeking-reason
-- thumbnail: p3_test_ex_sns_peeking_reason.webp
-- category: personality · format: scenario_4

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
  'phase3-ex-sns-peeking-reason',
  '{"ko": "나는 왜 이별 후에도 전 애인 SNS를 염탐할까?", "en": "Why Do I Still Peek at My Ex''s SNS After the Breakup?", "ja": "なぜ別れても元恋人のSNSを覗いてしまうの？", "zh-CN": "为什么分手后还总是偷看前任的社交账号？", "zh-TW": "為什麼分手後還總是偷看前任的社交賬號？", "vi": "Tại sao sau chia tay vẫn lén xem SNS người yêu cũ?", "id": "Kenapa Setelah Putus Masih Intip SNS Mantan?"}',
  '{"ko": "끝난 사이인데, 왜 자꾸 그 계정에 들어가 보게 될까? 10가지 상황으로 내가 자꾸 들어가 보게 되는 진짜 이유와 마음을 정리하는 법을 알려드립니다.", "en": "It''s over — so why do you keep opening that profile? These 10 scenarios reveal the real reason you keep checking, and how to settle your heart.", "ja": "終わった間柄なのに、なぜあのアカウントを開いてしまうの？10の場面で、つい見てしまう本当の理由と、心を整理する方法をお伝えします。", "zh-CN": "明明已经结束了，为什么还总忍不住点开那个主页？用10个情境，告诉你总想去看的真正原因，以及怎样把心整理好。", "zh-TW": "明明已經結束了，為什麼還總忍不住點開那個主頁？用10個情境，告訴你總想去看的真正原因，以及怎樣把心整理好。", "vi": "Đã kết thúc rồi, sao vẫn cứ mở trang của họ? 10 tình huống giúp bạn thấy lý do thật sự và cách sắp xếp lại lòng mình.", "id": "Sudah berakhir, kenapa masih membuka akun itu? Lewat 10 situasi, ketahui alasan asli dan cara merapikan hati."}',
  'p3_test_ex_sns_peeking_reason.webp',
  'psychology',
  'personality',
  'scenario_4',
  '{"ko": ["염탐", "이별심리"], "en": ["SNS Peeking", "Breakup Psychology"], "ja": ["SNS覗き", "別れの心理"], "zh-CN": ["偷看社交账号", "分手心理"], "zh-TW": ["偷看社交賬號", "分手心理"], "vi": ["Lén xem SNS", "Tâm lý chia tay"], "id": ["Intip SNS", "Psikologi Putus"]}',
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
