-- 짝사랑 성공률 테스트 데이터 삽입
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  play_count,
  type,
  category,
  tags,
  created_at,
  updated_at
) VALUES (
  'crush-success-test',
  '{
    "ko": "당신의 짝사랑 성공률은 몇 %?",
    "en": "What is your crush success rate?",
    "ja": "あなたの片思いの成功率は何％？",
    "zh-CN": "你的暗恋成功率是多少？",
    "zh-TW": "你的暗戀成功率是多少？",
    "vi": "Tỷ lệ thành công trong tình yêu đơn phương của bạn là bao nhiêu %?",
    "id": "Berapa persen tingkat keberhasilan cinta sepihak Anda?"
  }',
  '{
    "ko": "「10%? 50%? 아니면 90%?」\n마음속에 숨겨둔 그 사람…\n과연 성공 가능성은 얼마나 될까요?\n상대방의 반응, 나의 매력, 타이밍, 노력도...\n모든 것을 종합해서 성공률을 계산해드립니다!\n「나 가능성 있나?」 궁금했다면? 「고백해도 될까?」 망설였다면?\n12개 질문으로 당신의 짝사랑 성공률을 정확하게 분석해드려요!\n친구들과 비교하면 더 재미있습니다 💘\n소요 시간 단 3분! 용기내서 시작해보세요! 💪",
    "en": "\"10%? 50%? Or 90%?\"\nThat person hidden in your heart...\nHow much is the possibility of success?\nThe other person''s reaction, my charm, timing, effort...\nWe calculate the success rate by combining everything!\nIf you were curious \"Do I have a chance?\" If you hesitated \"Should I confess?\"\nWe accurately analyze your crush success rate with 12 questions!\nIt''s more fun to compare with friends 💘\nTakes only 3 minutes! Take courage and start! 💪",
    "ja": "「10%？50%？それとも90%？」\n心の中に隠したその人…\n果たして成功の可能性はどのくらいでしょうか？\n相手の反応、私の魅力、タイミング、努力も...\nすべてを総合して成功率を計算してくれます！\n「私に可能性ある？」気になったなら？「告白してもいい？」迷ったなら？\n12個の質問であなたの片思い成功率を正確に分析してくれます！\n友達と比較するともっと楽しいです💘\n所要時間わずか3分！勇気を出して始めてみてください！💪",
    "zh-CN": "「10%？50%？还是90%？」\n藏在心里的那个人…\n到底成功的可能性有多大呢？\n对方的反应、我的魅力、时机、努力...\n综合一切来计算成功率！\n如果好奇「我有机会吗？」如果犹豫「可以告白吗？」\n用12个问题准确分析你的暗恋成功率！\n和朋友比较更有趣💘\n只需3分钟！鼓起勇气开始吧！💪",
    "zh-TW": "「10%？50%？還是90%？」\n藏在心裡的那個人…\n到底成功的可能性有多大呢？\n對方的反應、我的魅力、時機、努力...\n綜合一切來計算成功率！\n如果好奇「我有機會嗎？」如果猶豫「可以告白嗎？」\n用12個問題準確分析你的暗戀成功率！\n和朋友比較更有趣💘\n只需3分鐘！鼓起勇氣開始吧！💪",
    "vi": "「10%? 50%? Hay 90%?」\nNgười đó ẩn giấu trong lòng…\nKhả năng thành công thực sự là bao nhiêu?\nPhản ứng của đối phương, sức hấp dẫn của tôi, thời điểm, nỗ lực...\nTất cả được tổng hợp để tính tỷ lệ thành công!\nNếu bạn tò mò 「Tôi có cơ hội không?」 Nếu bạn do dự 「Có nên tỏ tình không?」\nChúng tôi phân tích chính xác tỷ lệ thành công tình yêu đơn phương của bạn với 12 câu hỏi!\nSo sánh với bạn bè sẽ thú vị hơn 💘\nChỉ mất 3 phút! Hãy dũng cảm bắt đầu! 💪",
    "id": "「10%? 50%? Atau 90%?」\nOrang yang tersembunyi di hati…\nBerapa besar kemungkinan suksesnya?\nReaksi lawan, daya tarikku, timing, usaha...\nSemua digabungkan untuk menghitung tingkat keberhasilan!\nJika Anda penasaran 「Apakah saya punya kesempatan?」 Jika Anda ragu 「Haruskah saya mengaku?」\nKami menganalisis tingkat keberhasilan cinta sepihak Anda dengan 12 pertanyaan!\nLebih menyenangkan dibandingkan dengan teman-teman 💘\nHanya butuh 3 menit! Beranilah dan mulai! 💪"
  }',
  'test_033_crush_success_rate.jpg',
  0,
  'dating',
  'love',
  '{
    "ko": ["연애", "짝사랑", "재미"],
    "en": ["Dating", "Crush", "Fun"],
    "ja": ["恋愛", "片思い", "楽しい"],
    "zh-CN": ["恋爱", "暗恋", "有趣"],
    "zh-TW": ["戀愛", "暗戀", "有趣"],
    "vi": ["Hẹn hò", "Tình yêu đơn phương", "Vui vẻ"],
    "id": ["Kencan", "Cinta sepihak", "Menyenangkan"]
  }',
  NOW(),
  NOW()
);
