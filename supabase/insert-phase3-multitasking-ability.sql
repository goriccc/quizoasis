-- 나의 '멀티태스킹' 능력치
-- slug: phase3-multitasking-ability
-- thumbnail: p3_test_multitasking_ability.webp

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
  'phase3-multitasking-ability',
  '{"ko": "나의 ''멀티태스킹'' 능력치", "en": "My Multitasking Ability Score", "ja": "私の『マルチタスク』能力値", "zh-CN": "我的『多任务』能力值", "zh-TW": "我的『多任務』能力值", "vi": "Chỉ số khả năng đa nhiệm của tôi", "id": "Skor Kemampuan Multitasking Saya"}',
  '{"ko": "5라운드 실시간 수행으로 진짜 멀티태스킹 능력치를 측정합니다.", "en": "Measure your real multitasking ability across 5 live performance rounds.", "ja": "5ラウンドのリアルタイム課題で本物のマルチタスク能力を測定します。", "zh-CN": "通过5轮实时任务测量你的真实多任务能力。", "zh-TW": "透過5輪即時任務測量你的真實多任務能力。", "vi": "Đo khả năng đa nhiệm thật qua 5 vòng thực hiện thời gian thực.", "id": "Ukur kemampuan multitasking nyata lewat 5 ronde performa langsung."}',
  'p3_test_multitasking_ability.webp',
  'game',
  'capability',
  '{"ko": ["멀티태스킹", "뇌효율", "집중력", "생산성", "능력치"], "en": ["multitasking", "brain efficiency", "focus", "productivity", "ability"], "ja": ["マルチタスク", "脳効率", "集中力", "生産性", "能力値"], "zh-CN": ["多任务", "脑效率", "专注力", "生产力", "能力值"], "zh-TW": ["多任務", "腦效率", "專注力", "生產力", "能力值"], "vi": ["đa nhiệm", "hiệu suất não", "tập trung", "năng suất", "khả năng"], "id": ["multitasking", "efisiensi otak", "fokus", "produktivitas", "kemampuan"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
