# -*- coding: utf-8 -*-
import json
from pathlib import Path

root = Path(__file__).resolve().parents[2]
locales = ['en', 'ja', 'zh-CN', 'zh-TW', 'vi', 'id']
meta = {
    'ko': {
        'title': '밸런스 게임 — 커플 여행 극한편',
        'description': '여행 중 길 잃은 연인 vs 숙소 예약 실수한 연인. 12라운드 극한 선택으로 나의 커플 여행 스타일을 알려드립니다.',
        'tags': ['밸런스게임', '커플여행', '양자택일', '연애테스트'],
    }
}
for loc in locales:
    d = json.loads((Path(__file__).parent / f'{loc}.json').read_text(encoding='utf-8'))
    meta[loc] = d['meta']

keys = ['ko'] + locales

def j(obj):
    # SQL single-quoted string: escape ' as ''
    return json.dumps(obj, ensure_ascii=False).replace("'", "''")

title = {k: meta[k]['title'] for k in keys}
desc = {k: meta[k]['description'] for k in keys}
tags = {k: meta[k]['tags'] for k in keys}

sql = f"""-- 밸런스 게임 — 커플 여행 극한편
-- slug: phase3-couple-trip-balance-game
-- thumbnail: p3_test_balance_game_couple_trip.webp
-- category: personality · format: game

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
  'phase3-couple-trip-balance-game',
  '{j(title)}',
  '{j(desc)}',
  'p3_test_balance_game_couple_trip.webp',
  'psychology',
  'personality',
  'game',
  '{j(tags)}',
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
"""

out = root / 'supabase' / 'insert-phase3-couple-trip-balance-game.sql'
out.write_text(sql, encoding='utf-8')
print('wrote', out)
