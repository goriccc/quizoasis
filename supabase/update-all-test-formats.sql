-- Bulk update tests.format for all 212 slugs
-- Run after: supabase/add-format-column.sql

UPDATE tests
SET format = CASE slug
  WHEN 'adventurer-vs-cautious' THEN 'scenario_2'
  WHEN 'apology-style-test' THEN 'scenario_4'
  WHEN 'attachment-style-test' THEN 'personality_4'
  WHEN 'brain-quiz-test' THEN 'quiz'
  WHEN 'breakup-coping-test' THEN 'personality_4'
  WHEN 'catch-lover-signals' THEN 'scenario_4'
  WHEN 'challenge-potential-test' THEN 'personality_4'
  WHEN 'communication-style-test' THEN 'scenario_4'
  WHEN 'competitiveness-test' THEN 'personality_4'
  WHEN 'concentration-level-test' THEN 'personality_4'
  WHEN 'conflict-response-test' THEN 'scenario_4'
  WHEN 'conflict-style-test' THEN 'scenario_4'
  WHEN 'conversation-style-test' THEN 'scenario_4'
  WHEN 'crush-success-test' THEN 'personality_4'
  WHEN 'dating-style-test' THEN 'scenario_4'
  WHEN 'decision-speed-test' THEN 'scenario_4'
  WHEN 'defense-mechanism-test' THEN 'scenario_4'
  WHEN 'empathy-f-test' THEN 'scenario_2'
  WHEN 'empathy-level-test' THEN 'scenario_4'
  WHEN 'enneagram-test' THEN 'scenario_2'
  WHEN 'entrepreneur-spirit-test' THEN 'personality_4'
  WHEN 'extreme-quiz' THEN 'quiz'
  WHEN 'face-fortune' THEN 'face'
  WHEN 'face-love-fortune' THEN 'face'
  WHEN 'face-occupations' THEN 'face'
  WHEN 'face-psych-state' THEN 'face'
  WHEN 'face-reading' THEN 'face'
  WHEN 'face-reincarnation' THEN 'face'
  WHEN 'first-impression-test' THEN 'scenario_4'
  WHEN 'flirting-master-vs-beginner' THEN 'personality_2'
  WHEN 'flirting-style-test' THEN 'personality_4'
  WHEN 'friend-test' THEN 'personality_4'
  WHEN 'future-career-match-test' THEN 'personality_4'
  WHEN 'honest-facial-evaluation' THEN 'face'
  WHEN 'honesty-vs-consideration-test' THEN 'scenario_2'
  WHEN 'honesty-vs-restraint-test' THEN 'scenario_2'
  WHEN 'humor-code-test' THEN 'personality_4'
  WHEN 'ideal-spouse-type' THEN 'personality_4'
  WHEN 'ideal-type-test' THEN 'scenario_4'
  WHEN 'independence-vs-dependence-test' THEN 'personality_4'
  WHEN 'investment-style-test' THEN 'personality_4'
  WHEN 'jealousy-level-test' THEN 'scenario_4'
  WHEN 'jealousy-test' THEN 'scenario_4'
  WHEN 'job-strength-test' THEN 'scenario_4'
  WHEN 'kpop-debut-test' THEN 'personality_2'
  WHEN 'kpop-exam-test' THEN 'quiz'
  WHEN 'leadership-style-test' THEN 'scenario_4'
  WHEN 'left-right-brain-test' THEN 'scenario_4'
  WHEN 'life-priorities' THEN 'personality_2'
  WHEN 'life-priorities-test' THEN 'personality_2'
  WHEN 'love-flavor-test' THEN 'personality_4'
  WHEN 'love-language-test' THEN 'scenario_2'
  WHEN 'love-obstacles' THEN 'personality_4'
  WHEN 'mbti-accurate-test' THEN 'scenario_2'
  WHEN 'mbti-light' THEN 'personality_2'
  WHEN 'mensa-extreme' THEN 'quiz'
  WHEN 'my-dating-style' THEN 'scenario_4'
  WHEN 'obsession-test' THEN 'personality_2'
  WHEN 'optimism-pessimism-test' THEN 'personality_2'
  WHEN 'phase2_are_you_T_test' THEN 'scenario_2'
  WHEN 'phase2_birth_gem_flower_test' THEN 'scenario_4'
  WHEN 'phase2_body_signal_test' THEN 'personality_4'
  WHEN 'phase2_capital_quiz_test' THEN 'quiz'
  WHEN 'phase2_color_blind_test' THEN 'game'
  WHEN 'phase2_color_survival_test' THEN 'game'
  WHEN 'phase2_conflict_reason_test' THEN 'scenario_4'
  WHEN 'phase2_core_emotion_test' THEN 'scenario_4'
  WHEN 'phase2_creativity-level-test' THEN 'personality_4'
  WHEN 'phase2_dark_side_test' THEN 'personality_4'
  WHEN 'phase2_dating_mbti_test' THEN 'scenario_2'
  WHEN 'phase2_dream_car_test' THEN 'personality_4'
  WHEN 'phase2_eyesight_test' THEN 'game'
  WHEN 'phase2_fact_bomber_test' THEN 'scenario_2'
  WHEN 'phase2_friendship-style-test' THEN 'scenario_4'
  WHEN 'phase2_global_typing_test' THEN 'game'
  WHEN 'phase2_greek_god_test' THEN 'scenario_4'
  WHEN 'phase2_guilt-level-test' THEN 'scenario_4'
  WHEN 'phase2_hearing_age_test' THEN 'game'
  WHEN 'phase2_hidden_talent_test' THEN 'scenario_4'
  WHEN 'phase2_homebody_level_test' THEN 'scenario_4'
  WHEN 'phase2_impulse_buying_test' THEN 'personality_4'
  WHEN 'phase2_invention_quiz_test' THEN 'quiz'
  WHEN 'phase2_it_tech_quiz_test' THEN 'quiz'
  WHEN 'phase2_laziness_level_test' THEN 'personality_4'
  WHEN 'phase2_lie_detector_test' THEN 'scenario_2'
  WHEN 'phase2_literature_quiz_test' THEN 'quiz'
  WHEN 'phase2_memory_level_test' THEN 'game'
  WHEN 'phase2_mental-age-test' THEN 'personality_2'
  WHEN 'phase2_perfectionism-test' THEN 'scenario_4'
  WHEN 'phase2_reflex_test' THEN 'game'
  WHEN 'phase2_reincarnation_animal_test' THEN 'scenario_4'
  WHEN 'phase2_relationship-cut-test' THEN 'scenario_4'
  WHEN 'phase2_resilience_test' THEN 'scenario_4'
  WHEN 'phase2_self-esteem-test' THEN 'scenario_4'
  WHEN 'phase2_social_level_test' THEN 'personality_4'
  WHEN 'phase2_speed_click_test' THEN 'game'
  WHEN 'phase2_stress_care_test' THEN 'scenario_4'
  WHEN 'phase2_superpower-test' THEN 'scenario_4'
  WHEN 'phase2_tea_therapy_test' THEN 'scenario_4'
  WHEN 'phase2_travel-style-test' THEN 'checklist'
  WHEN 'phase2_world_history_modern_quiz_test' THEN 'quiz'
  WHEN 'phase2_youtube_channel_test' THEN 'personality_4'
  WHEN 'phase3-100billion-probability' THEN 'personality_4'
  WHEN 'phase3-1min-reaction-speed' THEN 'game'
  WHEN 'phase3-adhd-tendency-checklist' THEN 'checklist'
  WHEN 'phase3-ai-era-job-survival-score' THEN 'scenario_4'
  WHEN 'phase3-ai-future-10years' THEN 'scenario_4'
  WHEN 'phase3-attachment-style-love' THEN 'scenario_4'
  WHEN 'phase3-balance-99-ultimate' THEN 'game'
  WHEN 'phase3-best-friend-quiz' THEN 'personality_4'
  WHEN 'phase3-burnout-fatigue-precision' THEN 'personality_4'
  WHEN 'phase3-cafe-work-grade' THEN 'personality_2'
  WHEN 'phase3-career-aptitude-ai-16types' THEN 'personality_4'
  WHEN 'phase3-chronotype-morning-evening' THEN 'scenario_2'
  WHEN 'phase3-couple-breakup-risk' THEN 'personality_4'
  WHEN 'phase3-couple-chemistry-analysis' THEN 'personality_4'
  WHEN 'phase3-daily-mind-weather-report' THEN 'personality_4'
  WHEN 'phase3-ditto-consumption-type' THEN 'scenario_4'
  WHEN 'phase3-dopamine-self-control-index' THEN 'personality_4'
  WHEN 'phase3-dopamine-type-analysis' THEN 'personality_4'
  WHEN 'phase3-drama-life-character' THEN 'scenario_2'
  WHEN 'phase3-dumb-spending-diagnosis' THEN 'personality_4'
  WHEN 'phase3-eagle-eye-ultimate' THEN 'game'
  WHEN 'phase3-ego-wall-thickness' THEN 'personality_2'
  WHEN 'phase3-ei-index-precise-measurement' THEN 'checklist'
  WHEN 'phase3-elementary-math-adults-quiz' THEN 'quiz'
  WHEN 'phase3-emoji-movie-idiom-quiz' THEN 'quiz'
  WHEN 'phase3-ex-lingering-feelings' THEN 'personality_4'
  WHEN 'phase3-exercise-persistence-type' THEN 'personality_4'
  WHEN 'phase3-fall-in-love-speed' THEN 'scenario_4'
  WHEN 'phase3-first-impression-color-scanner' THEN 'personality_4'
  WHEN 'phase3-flirting-style' THEN 'scenario_4'
  WHEN 'phase3-friend-sees-my-mbti' THEN 'scenario_2'
  WHEN 'phase3-game-love-balance-extreme' THEN 'game'
  WHEN 'phase3-gaslighting-defense-power' THEN 'scenario_4'
  WHEN 'phase3-ghosting-rebound-potential' THEN 'scenario_2'
  WHEN 'phase3-godsaeng-index-measurement' THEN 'personality_4'
  WHEN 'phase3-guardian-spirit-animal' THEN 'personality_2'
  WHEN 'phase3-hidden-sub-character' THEN 'scenario_2'
  WHEN 'phase3-ideal-type-dna-analysis' THEN 'personality_4'
  WHEN 'phase3-insta-feed-persona-analysis' THEN 'personality_4'
  WHEN 'phase3-jp-index-precise-measurement' THEN 'checklist'
  WHEN 'phase3-kdrama-lead-character-type' THEN 'scenario_4'
  WHEN 'phase3-laziness-max-level' THEN 'scenario_4'
  WHEN 'phase3-loneliness-concentration' THEN 'personality_4'
  WHEN 'phase3-love-behavior-type' THEN 'scenario_2'
  WHEN 'phase3-love-green-flag-finder' THEN 'personality_4'
  WHEN 'phase3-love-obsession-thermometer' THEN 'scenario_4'
  WHEN 'phase3-love-prescription' THEN 'personality_4'
  WHEN 'phase3-love-red-flag-finder' THEN 'personality_4'
  WHEN 'phase3-love-villain-index' THEN 'scenario_2'
  WHEN 'phase3-love-weakness-moment' THEN 'scenario_4'
  WHEN 'phase3-luck-game-test' THEN 'game'
  WHEN 'phase3-meme-character-type' THEN 'personality_2'
  WHEN 'phase3-memory-limit-challenge' THEN 'game'
  WHEN 'phase3-mukbang-style-diagnosis' THEN 'personality_2'
  WHEN 'phase3-multitasking-ability' THEN 'game'
  WHEN 'phase3-my-hashtag-generator' THEN 'checklist'
  WHEN 'phase3-office-balance-game' THEN 'game'
  WHEN 'phase3-office-survival-type' THEN 'scenario_4'
  WHEN 'phase3-office-villain-probability' THEN 'scenario_4'
  WHEN 'phase3-ootd-style-diagnosis' THEN 'personality_2'
  WHEN 'phase3-perfectionism-index' THEN 'scenario_4'
  WHEN 'phase3-personal-branding-keywords' THEN 'scenario_4'
  WHEN 'phase3-personality-color-finder' THEN 'personality_2'
  WHEN 'phase3-personality-shoe-recommendation' THEN 'personality_4'
  WHEN 'phase3-personality-strength-weakness' THEN 'personality_4'
  WHEN 'phase3-personality-weather-type' THEN 'personality_2'
  WHEN 'phase3-real-friend-condition-analysis' THEN 'scenario_4'
  WHEN 'phase3-real-reason-for-breakup' THEN 'scenario_4'
  WHEN 'phase3-reincarnation-job' THEN 'scenario_2'
  WHEN 'phase3-room-personality-analysis' THEN 'personality_4'
  WHEN 'phase3-self-esteem-shield-strength' THEN 'personality_4'
  WHEN 'phase3-shortform-addiction-type' THEN 'personality_2'
  WHEN 'phase3-skincare-routine-recommendation' THEN 'personality_4'
  WHEN 'phase3-sleep-type-prescription' THEN 'personality_4'
  WHEN 'phase3-sn-index-precise-measurement' THEN 'checklist'
  WHEN 'phase3-sns-algorithm-type' THEN 'personality_2'
  WHEN 'phase3-solo-dining-type' THEN 'personality_4'
  WHEN 'phase3-solo-drinking-type' THEN 'personality_4'
  WHEN 'phase3-solo-escape-possibility' THEN 'personality_4'
  WHEN 'phase3-some-vs-relationship-timing' THEN 'personality_4'
  WHEN 'phase3-soulmate-finder' THEN 'scenario_4'
  WHEN 'phase3-spending-dark-history-type' THEN 'personality_4'
  WHEN 'phase3-spending-personality-type' THEN 'personality_4'
  WHEN 'phase3-spot-the-difference-challenge' THEN 'game'
  WHEN 'phase3-stress-relief-type' THEN 'scenario_4'
  WHEN 'phase3-sudden-poor-defense-index' THEN 'personality_4'
  WHEN 'phase3-summer-vacation-type' THEN 'personality_2'
  WHEN 'phase3-tanjinjam-spending-type' THEN 'personality_4'
  WHEN 'phase3-team-work-chemistry-test' THEN 'personality_4'
  WHEN 'phase3-tf-index-precise-measurement' THEN 'checklist'
  WHEN 'phase3-toxic-relationship-diagnosis' THEN 'checklist'
  WHEN 'phase3-villain-dna-test' THEN 'scenario_2'
  WHEN 'phase3-which-ai-are-you' THEN 'scenario_4'
  WHEN 'phase3-world-landmark-city-quiz' THEN 'quiz'
  WHEN 'phase3-yolo-fire-godlife-type' THEN 'scenario_2'
  WHEN 'phase3-youtube-algorithm-knows' THEN 'personality_4'
  WHEN 'phase3-zero-spending-challenge' THEN 'scenario_4'
  WHEN 'planner-vs-spontaneous-test' THEN 'personality_2'
  WHEN 'quick-decision-test' THEN 'scenario_4'
  WHEN 'reaction-style-test' THEN 'personality_4'
  WHEN 'real-iq' THEN 'quiz'
  WHEN 'soul-drink-test' THEN 'personality_4'
  WHEN 'stress-reaction-test' THEN 'scenario_4'
  WHEN 'stress-relief-test' THEN 'personality_4'
  WHEN 'team-player-test' THEN 'personality_4'
  WHEN 'time-efficiency-test' THEN 'personality_4'
  WHEN 'time-perspective-test' THEN 'personality_2'
  WHEN 'trustworthiness-test' THEN 'scenario_4'
  WHEN 'work-life-balance-test' THEN 'scenario_4'
  WHEN 'work-values-test' THEN 'scenario_2'
  ELSE format
END
WHERE slug IN (
  'adventurer-vs-cautious',
  'apology-style-test',
  'attachment-style-test',
  'brain-quiz-test',
  'breakup-coping-test',
  'catch-lover-signals',
  'challenge-potential-test',
  'communication-style-test',
  'competitiveness-test',
  'concentration-level-test',
  'conflict-response-test',
  'conflict-style-test',
  'conversation-style-test',
  'crush-success-test',
  'dating-style-test',
  'decision-speed-test',
  'defense-mechanism-test',
  'empathy-f-test',
  'empathy-level-test',
  'enneagram-test',
  'entrepreneur-spirit-test',
  'extreme-quiz',
  'face-fortune',
  'face-love-fortune',
  'face-occupations',
  'face-psych-state',
  'face-reading',
  'face-reincarnation',
  'first-impression-test',
  'flirting-master-vs-beginner',
  'flirting-style-test',
  'friend-test',
  'future-career-match-test',
  'honest-facial-evaluation',
  'honesty-vs-consideration-test',
  'honesty-vs-restraint-test',
  'humor-code-test',
  'ideal-spouse-type',
  'ideal-type-test',
  'independence-vs-dependence-test',
  'investment-style-test',
  'jealousy-level-test',
  'jealousy-test',
  'job-strength-test',
  'kpop-debut-test',
  'kpop-exam-test',
  'leadership-style-test',
  'left-right-brain-test',
  'life-priorities',
  'life-priorities-test',
  'love-flavor-test',
  'love-language-test',
  'love-obstacles',
  'mbti-accurate-test',
  'mbti-light',
  'mensa-extreme',
  'my-dating-style',
  'obsession-test',
  'optimism-pessimism-test',
  'phase2_are_you_T_test',
  'phase2_birth_gem_flower_test',
  'phase2_body_signal_test',
  'phase2_capital_quiz_test',
  'phase2_color_blind_test',
  'phase2_color_survival_test',
  'phase2_conflict_reason_test',
  'phase2_core_emotion_test',
  'phase2_creativity-level-test',
  'phase2_dark_side_test',
  'phase2_dating_mbti_test',
  'phase2_dream_car_test',
  'phase2_eyesight_test',
  'phase2_fact_bomber_test',
  'phase2_friendship-style-test',
  'phase2_global_typing_test',
  'phase2_greek_god_test',
  'phase2_guilt-level-test',
  'phase2_hearing_age_test',
  'phase2_hidden_talent_test',
  'phase2_homebody_level_test',
  'phase2_impulse_buying_test',
  'phase2_invention_quiz_test',
  'phase2_it_tech_quiz_test',
  'phase2_laziness_level_test',
  'phase2_lie_detector_test',
  'phase2_literature_quiz_test',
  'phase2_memory_level_test',
  'phase2_mental-age-test',
  'phase2_perfectionism-test',
  'phase2_reflex_test',
  'phase2_reincarnation_animal_test',
  'phase2_relationship-cut-test',
  'phase2_resilience_test',
  'phase2_self-esteem-test',
  'phase2_social_level_test',
  'phase2_speed_click_test',
  'phase2_stress_care_test',
  'phase2_superpower-test',
  'phase2_tea_therapy_test',
  'phase2_travel-style-test',
  'phase2_world_history_modern_quiz_test',
  'phase2_youtube_channel_test',
  'phase3-100billion-probability',
  'phase3-1min-reaction-speed',
  'phase3-adhd-tendency-checklist',
  'phase3-ai-era-job-survival-score',
  'phase3-ai-future-10years',
  'phase3-attachment-style-love',
  'phase3-balance-99-ultimate',
  'phase3-best-friend-quiz',
  'phase3-burnout-fatigue-precision',
  'phase3-cafe-work-grade',
  'phase3-career-aptitude-ai-16types',
  'phase3-chronotype-morning-evening',
  'phase3-couple-breakup-risk',
  'phase3-couple-chemistry-analysis',
  'phase3-daily-mind-weather-report',
  'phase3-ditto-consumption-type',
  'phase3-dopamine-self-control-index',
  'phase3-dopamine-type-analysis',
  'phase3-drama-life-character',
  'phase3-dumb-spending-diagnosis',
  'phase3-eagle-eye-ultimate',
  'phase3-ego-wall-thickness',
  'phase3-ei-index-precise-measurement',
  'phase3-elementary-math-adults-quiz',
  'phase3-emoji-movie-idiom-quiz',
  'phase3-ex-lingering-feelings',
  'phase3-exercise-persistence-type',
  'phase3-fall-in-love-speed',
  'phase3-first-impression-color-scanner',
  'phase3-flirting-style',
  'phase3-friend-sees-my-mbti',
  'phase3-game-love-balance-extreme',
  'phase3-gaslighting-defense-power',
  'phase3-ghosting-rebound-potential',
  'phase3-godsaeng-index-measurement',
  'phase3-guardian-spirit-animal',
  'phase3-hidden-sub-character',
  'phase3-ideal-type-dna-analysis',
  'phase3-insta-feed-persona-analysis',
  'phase3-jp-index-precise-measurement',
  'phase3-kdrama-lead-character-type',
  'phase3-laziness-max-level',
  'phase3-loneliness-concentration',
  'phase3-love-behavior-type',
  'phase3-love-green-flag-finder',
  'phase3-love-obsession-thermometer',
  'phase3-love-prescription',
  'phase3-love-red-flag-finder',
  'phase3-love-villain-index',
  'phase3-love-weakness-moment',
  'phase3-luck-game-test',
  'phase3-meme-character-type',
  'phase3-memory-limit-challenge',
  'phase3-mukbang-style-diagnosis',
  'phase3-multitasking-ability',
  'phase3-my-hashtag-generator',
  'phase3-office-balance-game',
  'phase3-office-survival-type',
  'phase3-office-villain-probability',
  'phase3-ootd-style-diagnosis',
  'phase3-perfectionism-index',
  'phase3-personal-branding-keywords',
  'phase3-personality-color-finder',
  'phase3-personality-shoe-recommendation',
  'phase3-personality-strength-weakness',
  'phase3-personality-weather-type',
  'phase3-real-friend-condition-analysis',
  'phase3-real-reason-for-breakup',
  'phase3-reincarnation-job',
  'phase3-room-personality-analysis',
  'phase3-self-esteem-shield-strength',
  'phase3-shortform-addiction-type',
  'phase3-skincare-routine-recommendation',
  'phase3-sleep-type-prescription',
  'phase3-sn-index-precise-measurement',
  'phase3-sns-algorithm-type',
  'phase3-solo-dining-type',
  'phase3-solo-drinking-type',
  'phase3-solo-escape-possibility',
  'phase3-some-vs-relationship-timing',
  'phase3-soulmate-finder',
  'phase3-spending-dark-history-type',
  'phase3-spending-personality-type',
  'phase3-spot-the-difference-challenge',
  'phase3-stress-relief-type',
  'phase3-sudden-poor-defense-index',
  'phase3-summer-vacation-type',
  'phase3-tanjinjam-spending-type',
  'phase3-team-work-chemistry-test',
  'phase3-tf-index-precise-measurement',
  'phase3-toxic-relationship-diagnosis',
  'phase3-villain-dna-test',
  'phase3-which-ai-are-you',
  'phase3-world-landmark-city-quiz',
  'phase3-yolo-fire-godlife-type',
  'phase3-youtube-algorithm-knows',
  'phase3-zero-spending-challenge',
  'planner-vs-spontaneous-test',
  'quick-decision-test',
  'reaction-style-test',
  'real-iq',
  'soul-drink-test',
  'stress-reaction-test',
  'stress-relief-test',
  'team-player-test',
  'time-efficiency-test',
  'time-perspective-test',
  'trustworthiness-test',
  'work-life-balance-test',
  'work-values-test'
);
