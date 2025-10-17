-- 이상형 테스트를 Supabase tests 테이블에 추가하는 SQL

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
  'ideal-type-test',
  '{
    "ko": "당신이 꿈꾸는 완벽한 이상형은?",
    "en": "What is your perfect ideal type?",
    "ja": "あなたが夢見る完璧な理想のタイプは？",
    "zh-CN": "你梦想中的完美理想型是什么？",
    "zh-TW": "你夢想中的完美理想型是什麼？",
    "vi": "Kiểu lý tưởng hoàn hảo mà bạn mơ ước là gì?",
    "id": "Apa tipe ideal sempurna yang Anda impikan?"
  }',
  '{
    "ko": "「머리? 가슴? 아니면 든든함?」 똑똑한 사람에게 끌리나요? 재미있는 사람이 좋은가요? 따뜻한 사람을 원하나요? 누군가에게 끌리는 이유는 각자 다릅니다. 깊은 대화를 나누고 싶은 사람, 함께 웃고 싶은 사람, 안아주고 싶은 사람, 함께 세상을 정복하고 싶은 사람. 당신이 진짜 원하는 이상형은 누구인가요? 친구들과 비교하면 더 재미있어요 💘 소요 시간 단 3분! 지금 바로 시작해 보세요! ✨",
    "en": "Brain? Heart? Or reliability? Are you attracted to smart people? Do you like fun people? Do you want warm people? The reasons for being attracted to someone are different for everyone. Someone you want to have deep conversations with, someone you want to laugh with, someone you want to hug, someone you want to conquer the world with. Who is your real ideal type? It''s more fun to compare with friends 💘 Takes only 3 minutes! Start now! ✨",
    "ja": "「頭？胸？それとも頼もしさ？」頭の良い人に惹かれますか？面白い人が好きですか？温かい人を求めますか？誰かに惹かれる理由は人それぞれです。深い会話をしたい人、一緒に笑いたい人、抱きしめたい人、一緒に世界を征服したい人。あなたが本当に求める理想のタイプは誰ですか？友達と比較するともっと楽しいです💘 所要時間わずか3分！今すぐ始めてみてください！✨",
    "zh-CN": "「头脑？心灵？还是可靠？」你被聪明的人吸引吗？你喜欢有趣的人吗？你想要温暖的人吗？被某人吸引的原因因人而异。你想与之深入交谈的人，你想一起欢笑的人，你想拥抱的人，你想一起征服世界的人。你真正想要的理想型是谁？和朋友比较会更有趣💘 只需3分钟！现在就开始吧！✨",
    "zh-TW": "「頭腦？心靈？還是可靠？」你被聰明的人吸引嗎？你喜歡有趣的人嗎？你想要溫暖的人嗎？被某人吸引的原因因人而異。你想與之深入交談的人，你想一起歡笑的人，你想擁抱的人，你想一起征服世界的人。你真正想要的理想型是誰？和朋友比較會更有趣💘 只需3分鐘！現在就開始吧！✨",
    "vi": "Đầu óc? Trái tim? Hay sự đáng tin cậy? Bạn có bị thu hút bởi những người thông minh không? Bạn có thích những người vui vẻ không? Bạn có muốn những người ấm áp không? Lý do bị thu hút bởi ai đó khác nhau đối với mỗi người. Người bạn muốn trò chuyện sâu sắc, người bạn muốn cười cùng, người bạn muốn ôm, người bạn muốn chinh phục thế giới cùng. Kiểu lý tưởng mà bạn thực sự muốn là ai? So sánh với bạn bè sẽ thú vị hơn 💘 Chỉ mất 3 phút! Bắt đầu ngay bây giờ! ✨",
    "id": "Otak? Hati? Atau keandalan? Apakah Anda tertarik pada orang pintar? Apakah Anda suka orang yang menyenangkan? Apakah Anda menginginkan orang yang hangat? Alasan tertarik pada seseorang berbeda untuk setiap orang. Seseorang yang ingin Anda ajak bicara mendalam, seseorang yang ingin Anda tertawa bersama, seseorang yang ingin Anda peluk, seseorang yang ingin Anda taklukkan dunia bersama. Siapa tipe ideal yang benar-benar Anda inginkan? Lebih menyenangkan untuk membandingkan dengan teman-teman 💘 Hanya butuh 3 menit! Mulai sekarang! ✨"
  }',
  'test_032_ideal_type.jpg',
  'dating',
  'love',
  '{
    "ko": ["연애", "이상형", "심리", "테스트"],
    "en": ["Dating", "Ideal Type", "Psychology", "Test"],
    "ja": ["恋愛", "理想のタイプ", "心理", "テスト"],
    "zh-CN": ["恋爱", "理想型", "心理", "测试"],
    "zh-TW": ["戀愛", "理想型", "心理", "測試"],
    "vi": ["Hẹn hò", "Kiểu lý tưởng", "Tâm lý", "Kiểm tra"],
    "id": ["Kencan", "Tipe Ideal", "Psikologi", "Tes"]
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
