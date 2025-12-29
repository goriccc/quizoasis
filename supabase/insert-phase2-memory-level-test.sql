-- 도전! 나의 기억력 레벨 (순간 기억력 테스트) 테스트 데이터 삽입
INSERT INTO tests (
  slug,
  title,
  description,
  thumbnail,
  type,
  category,
  tags
) VALUES (
  'phase2_memory_level_test',
  '{
    "ko": "도전! 나의 기억력 레벨 (순간 기억력 테스트)",
    "en": "Challenge! My Memory Level (Instant Memory Test)",
    "ja": "挑戦！私の記憶力レベル（瞬間記憶力テスト）",
    "zh-CN": "挑战！我的记忆力水平（瞬间记忆力测试）",
    "zh-TW": "挑戰！我的記憶力水準（瞬間記憶力測試）",
    "vi": "Thử thách! Mức độ Trí nhớ của Tôi (Kiểm tra Trí nhớ Tức thì)",
    "id": "Tantangan! Tingkat Ingatan Saya (Tes Ingatan Instan)"
  }'::jsonb,
  '{
    "ko": "방금 본 번호, 기억나세요? 냉장고 문을 열었다가 \'내가 뭐 꺼내려고 했지?\' 인증번호 6자리를 보고 입력창에 쓰려는데 까먹음. 혹시 당신의 뇌세포가 점점 사라지고 있진 않나요? 인간의 평균 단기 기억 용량은 7자리(±2)라고 합니다. 당신의 뇌는 금붕어일까요, 아니면 슈퍼 컴퓨터일까요?",
    "en": "Do you remember the number you just saw? Opening the fridge and \'what was I trying to get?\' Seeing a 6-digit verification code but forgetting it when typing. Are your brain cells gradually disappearing? The average human short-term memory capacity is said to be 7 digits (±2). Is your brain a goldfish or a supercomputer?",
    "ja": "今見た番号、覚えていますか？冷蔵庫の扉を開けて「何を取り出そうとしたっけ？」6桁の認証番号を見て入力画面に書こうとしたら忘れた。もしかしてあなたの脳細胞は徐々に消えていませんか？人間の平均短期記憶容量は7桁（±2）と言われています。あなたの脳は金魚でしょうか、それともスーパーコンピューターでしょうか？",
    "zh-CN": "还记得刚才看到的号码吗？打开冰箱后"我要拿什么来着？"看到6位验证码，要输入时却忘了。你的脑细胞是否在逐渐消失？人类平均短期记忆容量据说是7位（±2）。你的大脑是金鱼还是超级计算机？",
    "zh-TW": "還記得剛才看到的號碼嗎？打開冰箱後"我要拿什麼來著？"看到6位驗證碼，要輸入時卻忘了。你的腦細胞是否在逐漸消失？人類平均短期記憶容量據說是7位（±2）。你的大腦是金魚還是超級計算機？",
    "vi": "Bạn có nhớ số vừa thấy không? Mở tủ lạnh và \"mình định lấy gì nhỉ?\" Thấy mã xác nhận 6 chữ số nhưng quên khi gõ. Phải chăng tế bào não của bạn đang dần biến mất? Dung lượng trí nhớ ngắn hạn trung bình của con người được cho là 7 chữ số (±2). Não của bạn là cá vàng hay siêu máy tính?",
    "id": "Apakah Anda ingat nomor yang baru saja dilihat? Membuka kulkas dan \"apa yang saya coba ambil?\" Melihat kode verifikasi 6 digit tetapi lupa saat mengetik. Apakah sel-sel otak Anda secara bertahap menghilang? Kapasitas memori jangka pendek rata-rata manusia dikatakan 7 digit (±2). Apakah otak Anda seekor ikan mas atau superkomputer?"
  }'::jsonb,
  'phase2_test_164_memory_level.jpg',
  'game',
  'capability',
  '{
    "ko": ["챌린지", "게임", "두뇌", "IQ"],
    "en": ["Challenge", "Game", "Brain", "IQ"],
    "ja": ["チャレンジ", "ゲーム", "脳", "IQ"],
    "zh-CN": ["挑战", "游戏", "大脑", "IQ"],
    "zh-TW": ["挑戰", "遊戲", "大腦", "IQ"],
    "vi": ["Thử thách", "Trò chơi", "Não", "IQ"],
    "id": ["Tantangan", "Game", "Otak", "IQ"]
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

