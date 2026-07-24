/**
 * Build scripts/registry-preview.json from classify-output.json + manual overrides.
 * Run after: node scripts/classify-tests.mjs
 * Usage: node scripts/build-registry-preview.mjs && node scripts/generate-test-format-registry.mjs
 */
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const classifyPath = path.join(root, 'scripts/classify-output.json');
const outPath = path.join(root, 'scripts/registry-preview.json');

const catMap = {
  '4지선다': 'personality_4',
  '상황극4지선다': 'scenario_4',
  '2지선다': 'personality_2',
  '상황극2지선다': 'scenario_2',
  '퀴즈형': 'quiz',
  '게임형-반응속도/클릭': 'game',
  '게임형-기억력': 'game',
  '게임형-밸런스': 'game',
  '게임형-틀린그림찾기': 'game',
  '게임형-운/랜덤': 'game',
  '게임형-기타': 'game',
  '체크리스트/지수측정형': 'checklist',
  '얼굴/사진분석형': 'face',
  '미분류': 'personality_4',
};

const overrides = {
  phase2_color_survival_test: 'game',
  phase2_eyesight_test: 'game',
  'phase3-1min-reaction-speed': 'game',
  'phase3-eagle-eye-ultimate': 'game',
  'phase3-memory-limit-challenge': 'game',
  'phase3-multitasking-ability': 'game',
  'phase3-game-love-balance-extreme': 'game',
  'phase3-office-balance-game': 'game',
  'phase3-drama-life-character': 'scenario_2',
  'phase3-personality-strength-weakness': 'personality_4',
  'phase3-spending-dark-history-type': 'personality_4',
  'conversation-style-test': 'scenario_4',
  phase2_color_blind_test: 'game',
  phase2_youtube_channel_test: 'personality_4',
  'phase3-meme-character-type': 'personality_2',
  'reaction-style-test': 'personality_4',
  'concentration-level-test': 'personality_4',
  phase2_fact_bomber_test: 'scenario_2',
  'phase3-ai-future-10years': 'scenario_4',
  'phase3-couple-chemistry-analysis': 'personality_4',
  'phase3-first-impression-color-scanner': 'personality_4',
  'phase3-guardian-spirit-animal': 'personality_2',
  'phase3-office-survival-type': 'scenario_4',
  'phase3-sleep-type-prescription': 'personality_4',
  'decision-speed-test': 'scenario_4',
  'planner-vs-spontaneous-test': 'personality_2',
  'soul-drink-test': 'personality_4',
  'work-life-balance-test': 'scenario_4',
  'phase3-best-friend-quiz': 'personality_4',
  'mbti-accurate-test': 'scenario_2',
  'face-reading': 'face',
  'face-fortune': 'face',
  'face-love-fortune': 'face',
  'face-occupations': 'face',
  'face-psych-state': 'face',
  'face-reincarnation': 'face',
  'honest-facial-evaluation': 'face',
  'phase3-insta-feed-persona-analysis': 'personality_4',
};

const data = JSON.parse(fs.readFileSync(classifyPath, 'utf8'));
const registry = {};

for (const s of data.summary) {
  const fmt = catMap[s.category] || 'personality_4';
  for (const t of s.tests) {
    registry[t.slug] = fmt;
  }
}

Object.assign(registry, overrides);

fs.writeFileSync(outPath, JSON.stringify(registry, null, 2) + '\n');
console.log(`Wrote ${Object.keys(registry).length} slugs to registry-preview.json`);
