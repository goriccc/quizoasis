-- 오늘 나의 '마음 날씨' 리포트
-- slug: phase3-daily-mind-weather-report
-- thumbnail: p3_daily_mind_weather_report.webp

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
  'phase3-daily-mind-weather-report',
  '{"ko": "오늘 나의 ''마음 날씨'' 리포트", "en": "Today''s Mind Weather Report", "ja": "今日の『心天気』レポート", "zh-CN": "今天的『心天气』报告", "zh-TW": "今天的『心天氣』報告", "vi": "Báo cáo thời tiết lòng hôm nay", "id": "Laporan Cuaca Hati Hari Ini"}',
  '{"ko": "6가지 이미지를 직관적으로 선택하면 오늘 나의 마음 날씨 리포트가 완성됩니다.", "en": "Pick 6 images by gut feeling and get your mind-weather report for today.", "ja": "6枚の画像を直感で選ぶと、今日の心天気レポートが完成します。", "zh-CN": "凭直觉选择6张图，即可完成今天的心天气报告。", "zh-TW": "憑直覺選擇6張圖，即可完成今天的心天氣報告。", "vi": "Chọn 6 hình theo trực giác để hoàn thành báo cáo thời tiết lòng hôm nay.", "id": "Pilih 6 gambar secara intuisi untuk menyelesaikan laporan cuaca hati hari ini."}',
  'p3_daily_mind_weather_report.webp',
  'psychology',
  'personality',
  '{"ko": ["마음날씨", "감정체크", "오늘기분", "데일리", "멘탈케어"], "en": ["mind weather", "mood check", "daily mood", "daily", "mental care"], "ja": ["心天気", "感情チェック", "今日の気分", "デイリー", "メンタルケア"], "zh-CN": ["心天气", "情绪打卡", "今日心情", "每日", "心理关怀"], "zh-TW": ["心天氣", "情緒打卡", "今日心情", "每日", "心理關懷"], "vi": ["thời tiết lòng", "check cảm xúc", "tâm trạng hôm nay", "hàng ngày", "chăm sóc tinh thần"], "id": ["cuaca hati", "cek emosi", "mood hari ini", "harian", "perawatan mental"]}',
  0
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  thumbnail = EXCLUDED.thumbnail,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags;
