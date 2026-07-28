-- K-팝 역사 마스터 테스트
-- slug: phase3-kpop-history-master
-- thumbnail: p3_quiz_kpop_history_master.webp

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
  'phase3-kpop-history-master',
  '{"ko": "K-팝 역사 마스터 테스트", "en": "K-Pop History Master Test", "ja": "K-POP歴史マスターテスト", "zh-CN": "K-Pop历史大师测试", "zh-TW": "K-Pop歷史大師測試", "vi": "K-Pop History Master Test", "id": "K-Pop History Master Test"}',
  '{"ko": "12가지 문제로 나의 K-팝 역사 지식 수준을 측정합니다. 1세대부터 4세대까지 K-팝 역사 고수 등급을 확인하세요.", "en": "Measure your K-Pop history knowledge with 12 questions. Check your expert grade from 1st to 4th gen.", "ja": "12問で私のK-POP歴史知識レベルを測定します。1世代から4世代までのK-POP歴史上級者等級を確認してください。", "zh-CN": "通过12道题测量你的K-Pop历史知识水平。确认从1代到4代的K-Pop历史高手等级。", "zh-TW": "透過12道題測量你的K-Pop歷史知識水平。確認從1代到4代的K-Pop歷史高手等級。", "vi": "Đo mức kiến thức lịch sử K-Pop của bạn qua 12 câu hỏi. Xem cấp cao thủ từ thế hệ 1 đến 4.", "id": "Ukur pengetahuan sejarah K-Pop-mu lewat 12 pertanyaan. Cek grade ahli dari generasi 1 sampai 4."}',
  'p3_quiz_kpop_history_master.webp',
  'knowledge',
  'challenge',
  'quiz',
  '{"ko": ["K팝", "케이팝역사", "팬덤", "아이돌", "마스터"], "en": ["K-Pop", "K-Pop history", "fandom", "idol", "master"], "ja": ["K-POP", "K-POP歴史", "ファンダム", "アイドル", "マスター"], "zh-CN": ["K-Pop", "K-Pop历史", "粉丝", "偶像", "大师"], "zh-TW": ["K-Pop", "K-Pop歷史", "粉絲", "偶像", "大師"], "vi": ["K-Pop", "lịch sử K-Pop", "fandom", "idol", "master"], "id": ["K-Pop", "sejarah K-Pop", "fandom", "idol", "master"]}',
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
