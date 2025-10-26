-- 찰나의 순간 의사결정 테스트 데이터 삽입
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
  'quick-decision-test',
  '{
    "ko": "찰나의 순간, 당신의 의사 결정은?",
    "en": "In a split second, what is your decision?",
    "ja": "刹那の瞬間、あなたの意思決定は？",
    "zh-CN": "刹那的瞬间，你的决定是什么？",
    "zh-TW": "剎那的瞬間，你的決定是什麼？",
    "vi": "Trong khoảnh khắc, quyết định của bạn là gì?",
    "id": "Dalam sekejap, apa keputusan Anda?"
  }',
  '{
    "ko": "1초의 판단이 모든 것을 바꿉니다! 당신의 순발력은?\n갑작스러운 위기 상황, 예상치 못한 선택의 순간, 빠른 결정이 필요한 찰나...\n어떤 사람은 즉시 반응하고, 어떤 사람은 신중하게 고민하며, 어떤 사람은 얼어붙습니다.\n긴급 상황에서 당신은 어떻게 반응하나요? 빠른 판단력이 필요한 순간, 당신의 선택은?\n단 3분이면 당신의 의사결정 스타일과 순발력 수준을 발견할 수 있습니다!",
    "en": "A 1-second judgment changes everything! What is your quickness?\nSudden crisis situations, unexpected moments of choice, moments when quick decisions are needed...\nSome people react immediately, some think carefully, and some freeze.\nHow do you react in emergency situations? In moments when quick judgment is needed, what is your choice?\nJust 3 minutes to discover your decision-making style and quickness level!",
    "ja": "1秒の判断がすべてを変えます！あなたの瞬発力は？\n突然の危機状況、予期しない選択の瞬間、迅速な決定が必要な刹那...\nある人は即座に反応し、ある人は慎重に悩み、ある人は凍りつきます。\n緊急事態であなたはどう反応しますか？迅速な判断力が必要な瞬間、あなたの選択は？\nたった3分であなたの意思決定スタイルと瞬発力レベルを発見できます！",
    "zh-CN": "1秒的判断改变一切！你的敏捷度如何？\n突然的危机情况、意想不到的选择时刻、需要快速决定的瞬间...\n有些人立即反应，有些人仔细思考，有些人冻结。\n在紧急情况下你如何反应？在需要快速判断的时刻，你的选择是什么？\n只需3分钟就能发现你的决策风格和敏捷度水平！",
    "zh-TW": "1秒的判斷改變一切！你的敏捷度如何？\n突然的危機情況、意想不到的選擇時刻、需要快速決定的瞬間...\n有些人立即反應，有些人仔細思考，有些人凍結。\n在緊急情況下你如何反應？在需要快速判斷的時刻，你的選擇是什麼？\n只需3分鐘就能發現你的決策風格和敏捷度水平！",
    "vi": "Một phán đoán 1 giây thay đổi mọi thứ! Sự nhanh nhẹn của bạn như thế nào?\nTình huống khủng hoảng đột ngột, khoảnh khắc lựa chọn bất ngờ, khoảnh khắc cần quyết định nhanh...\nMột số người phản ứng ngay lập tức, một số người suy nghĩ cẩn thận, và một số người đóng băng.\nBạn phản ứng như thế nào trong tình huống khẩn cấp? Trong những khoảnh khắc cần phán đoán nhanh, lựa chọn của bạn là gì?\nChỉ 3 phút để khám phá phong cách ra quyết định và mức độ nhanh nhẹn của bạn!",
    "id": "Penilaian 1 detik mengubah segalanya! Seberapa cepat Anda?\nSituasi krisis tiba-tiba, momen pilihan yang tak terduga, momen ketika keputusan cepat diperlukan...\nBeberapa orang bereaksi segera, beberapa berpikir hati-hati, dan beberapa membeku.\nBagaimana Anda bereaksi dalam situasi darurat? Dalam momen ketika penilaian cepat diperlukan, apa pilihan Anda?\nHanya 3 menit untuk menemukan gaya pengambilan keputusan dan tingkat kecepatan Anda!"
  }',
  'test_076_quick_decision.jpg',
  'brain',
  'personality',
  '{
    "ko": ["두뇌", "의사결정"],
    "en": ["Brain", "Decision Making"],
    "ja": ["脳", "意思決定"],
    "zh-CN": ["大脑", "决策"],
    "zh-TW": ["大腦", "決策"],
    "vi": ["Não bộ", "Ra quyết định"],
    "id": ["Otak", "Pengambilan Keputusan"]
  }',
  0
);
