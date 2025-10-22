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
  'team-player-test',
  '{
    "ko": "당신은 어떤 팀 플레이어인가요?",
    "en": "What kind of team player are you?",
    "ja": "あなたはどんなチームプレイヤーですか？",
    "zh-CN": "你是什么样的团队玩家？",
    "zh-TW": "你是什麼樣的團隊玩家？",
    "vi": "Bạn là loại người chơi nhóm nào?",
    "id": "Anda adalah pemain tim seperti apa?"
  }',
  '{
    "ko": "혼자서는 빠르지만, 함께하면 더 멀리 갑니다!",
    "en": "Alone we can do so little; together we can do so much!",
    "ja": "一人では速いが、一緒ならもっと遠くまで行ける！",
    "zh-CN": "一个人走得快，但一起走得更远！",
    "zh-TW": "一個人走得快，但一起走得更遠！",
    "vi": "Một mình thì nhanh, nhưng cùng nhau thì đi xa hơn！",
    "id": "Sendirian cepat, tapi bersama-sama lebih jauh！"
  }',
  'test_052_team_player.jpg',
  'dating',
  'love',
  '{
    "ko": ["직업"],
    "en": ["Career"],
    "ja": ["職業"],
    "zh-CN": ["职业"],
    "zh-TW": ["職業"],
    "vi": ["Nghề nghiệp"],
    "id": ["Karier"]
  }',
  0
);