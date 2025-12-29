-- 1to25: 빛의 속도 (순발력 & 동체시력 측정) 테스트 데이터 삽입
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags
) VALUES (
  'phase2_speed_click_test',
  '{
    "ko": "1to25: 빛의 속도 (순발력 & 동체시력 측정)",
    "en": "1to25: Speed of Light (Reflex & Dynamic Vision Test)",
    "ja": "1to25: 光の速度（反射神経＆動体視力測定）",
    "zh-CN": "1to25: 光速（反应速度与动态视力测试）",
    "zh-TW": "1to25: 光速（反應速度與動態視力測試）",
    "vi": "1to25: Tốc độ ánh sáng (Kiểm tra Phản xạ & Thị lực động)",
    "id": "1to25: Kecepatan Cahaya (Tes Refleks & Penglihatan Dinamis)"
  }'::jsonb,
  $${
    "ko": "당신의 눈과 손은 얼마나 빠른가요? 눈으로는 다음 숫자를 찾고, 손으로는 현재 숫자를 누르는 '멀티태스킹'의 극한! 1부터 25까지, 단 하나의 숫자도 놓치지 말고 순서대로 빠르게 지워나가세요. 상위 1%는 10초의 벽을 깬다고 합니다. 과연 당신의 기록은?",
    "en": "How fast are your eyes and hands? The ultimate 'multitasking' of finding the next number with your eyes while pressing the current number with your hands! From 1 to 25, don't miss a single number and quickly clear them in order. The top 1% break the 10-second barrier. What will your record be?",
    "ja": "あなたの目と手はどれくらい速いですか？目で次の数字を見つけながら、手で現在の数字を押す「マルチタスク」の極限！1から25まで、1つの数字も見逃さず順番に素早く消していってください。上位1%は10秒の壁を破ると言われています。果たしてあなたの記録は？",
    "zh-CN": "你的眼睛和手有多快？用眼睛找下一个数字，同时用手按当前数字的极限「多任务」！从1到25，不要漏掉任何一个数字，按顺序快速清除。前1%的人能突破10秒大关。你的记录会是多少？",
    "zh-TW": "你的眼睛和手有多快？用眼睛找下一個數字，同時用手按當前數字的極限「多任務」！從1到25，不要漏掉任何一個數字，按順序快速清除。前1%的人能突破10秒大關。你的記錄會是多少？",
    "vi": "Mắt và tay của bạn nhanh đến mức nào? Cực hạn của 'đa nhiệm' khi tìm số tiếp theo bằng mắt trong khi nhấn số hiện tại bằng tay! Từ 1 đến 25, đừng bỏ sót bất kỳ số nào và nhanh chóng xóa chúng theo thứ tự. Top 1% phá vỡ rào cản 10 giây. Kỷ lục của bạn sẽ là bao nhiêu?",
    "id": "Seberapa cepat mata dan tangan Anda? Batas 'multitasking' menemukan angka berikutnya dengan mata sambil menekan angka saat ini dengan tangan! Dari 1 hingga 25, jangan lewatkan satu angka pun dan cepat hapus secara berurutan. Top 1% memecahkan penghalang 10 detik. Berapa rekor Anda?"
  }$$::jsonb,
  'phase2_test_165_speed_click.jpg',
  'game',
  'capability',
  '{
    "ko": ["챌린지", "게임", "순발력", "동체시력"],
    "en": ["Challenge", "Game", "Reflex", "Dynamic Vision"],
    "ja": ["チャレンジ", "ゲーム", "反射神経", "動体視力"],
    "zh-CN": ["挑战", "游戏", "反应速度", "动态视力"],
    "zh-TW": ["挑戰", "遊戲", "反應速度", "動態視力"],
    "vi": ["Thử thách", "Trò chơi", "Phản xạ", "Thị lực động"],
    "id": ["Tantangan", "Game", "Refleks", "Penglihatan Dinamis"]
  }'::jsonb
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  updated_at = NOW();


