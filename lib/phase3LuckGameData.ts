/** '확률' 게임 : 운빨 테스트 — 10라운드 순수 RNG, 라운드당 10점, 총 0~100점 → Type1~6 */

export const PHASE3_LUCK_GAME_SLUG = 'phase3-luck-game-test';
export const PHASE3_LUCK_GAME_ROUND_SCORE = 10;
export const PHASE3_LUCK_GAME_ROUND_COUNT = 10;

type ML = {
  ko: string;
  en: string;
  ja: string;
  'zh-CN': string;
  'zh-TW': string;
  vi: string;
  id: string;
};

function L(m: ML): Record<string, string> {
  return { ...m };
}

export type Phase3LuckRoundType =
  | 'door'
  | 'coin'
  | 'card'
  | 'box'
  | 'roulette'
  | 'number'
  | 'gacha'
  | 'slot'
  | 'clover'
  | 'coin100';

export type Phase3LuckRouletteColor = 'red' | 'blue' | 'green' | 'yellow' | 'purple';
export type Phase3LuckCoinSide = 'heads' | 'tails';
export type Phase3LuckCoin100Choice = 'heads' | 'tails' | 'tie';

export interface Phase3LuckRoundMeta {
  cardWinIndices?: number[];
  rouletteColor?: Phase3LuckRouletteColor;
  luckyNumber?: number;
  slotSymbols?: [string, string, string];
  cloverIndex?: number;
  coin100Heads?: number;
  coin100Tails?: number;
  winningDoor?: 'A' | 'B' | 'C';
  winningBox?: number;
  coinSide?: Phase3LuckCoinSide;
  gachaGold?: boolean;
}

export interface Phase3LuckSessionRound {
  round: number;
  type: Phase3LuckRoundType;
  success: boolean;
  meta: Phase3LuckRoundMeta;
}

export interface Phase3LuckGameResult {
  type: string;
  emoji: string;
  grade: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  luckGrade: Record<string, string>;
  resultProbability: Record<string, string>;
  avoidToday: Record<string, string> | null;
  canDoToday: Record<string, string> | null;
  retryTip: Record<string, string> | null;
  oneLiner: Record<string, string>;
  certify: Record<string, string> | null;
  shareLine: Record<string, string>;
}

const ROULETTE_COLORS: Phase3LuckRouletteColor[] = ['red', 'blue', 'green', 'yellow', 'purple'];
const SLOT_SYMBOLS = ['🍒', '🍋', '7️⃣', '⭐', '🔔'];

function pickUnique(count: number, max: number): number[] {
  const set = new Set<number>();
  while (set.size < count) set.add(Math.floor(Math.random() * max));
  return Array.from(set);
}

function randSide(): Phase3LuckCoinSide {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

/** 세션 시작 시 10라운드 성공/실패 + 연출용 메타 사전 생성 */
export function generatePhase3LuckGameSession(): Phase3LuckSessionRound[] {
  const rounds: Phase3LuckSessionRound[] = [];

  // R1 door 1/3
  {
    const doors: Array<'A' | 'B' | 'C'> = ['A', 'B', 'C'];
    const winningDoor = doors[Math.floor(Math.random() * 3)]!;
    rounds.push({
      round: 1,
      type: 'door',
      success: Math.random() < 1 / 3,
      meta: { winningDoor },
    });
  }

  // R2 coin 1/2
  rounds.push({
    round: 2,
    type: 'coin',
    success: Math.random() < 0.5,
    meta: { coinSide: randSide() },
  });

  // R3 card 2/5
  {
    const cardWinIndices = pickUnique(2, 5);
    rounds.push({
      round: 3,
      type: 'card',
      success: Math.random() < 0.4,
      meta: { cardWinIndices },
    });
  }

  // R4 box 1/4
  {
    const winningBox = Math.floor(Math.random() * 4) + 1;
    rounds.push({
      round: 4,
      type: 'box',
      success: Math.random() < 0.25,
      meta: { winningBox },
    });
  }

  // R5 roulette 1/5
  {
    const rouletteColor = ROULETTE_COLORS[Math.floor(Math.random() * 5)]!;
    rounds.push({
      round: 5,
      type: 'roulette',
      success: Math.random() < 0.2,
      meta: { rouletteColor },
    });
  }

  // R6 number 1/10
  {
    const luckyNumber = Math.floor(Math.random() * 10) + 1;
    rounds.push({
      round: 6,
      type: 'number',
      success: Math.random() < 0.1,
      meta: { luckyNumber },
    });
  }

  // R7 gacha 1/5 — gold outcome matches success
  {
    const gachaGold = Math.random() < 0.2;
    rounds.push({
      round: 7,
      type: 'gacha',
      success: gachaGold,
      meta: { gachaGold },
    });
  }

  // R8 slot 1/5
  {
    const sym = SLOT_SYMBOLS[Math.floor(Math.random() * SLOT_SYMBOLS.length)]!;
    const failPair = SLOT_SYMBOLS.filter((s) => s !== sym);
    const slotSymbols: [string, string, string] =
      Math.random() < 0.2
        ? [sym, sym, sym]
        : ([failPair[0], failPair[0], failPair[1] ?? sym] as [string, string, string]);
    rounds.push({
      round: 8,
      type: 'slot',
      success: slotSymbols[0] === slotSymbols[1] && slotSymbols[1] === slotSymbols[2],
      meta: { slotSymbols },
    });
  }

  // R9 clover 1/6
  {
    const cloverIndex = Math.floor(Math.random() * 6);
    rounds.push({
      round: 9,
      type: 'clover',
      success: Math.random() < 1 / 6,
      meta: { cloverIndex },
    });
  }

  // R10 coin100 1/3
  {
    const coin100Heads = Math.floor(Math.random() * 101);
    const coin100Tails = 100 - coin100Heads;
    rounds.push({
      round: 10,
      type: 'coin100',
      success: Math.random() < 1 / 3,
      meta: { coin100Heads, coin100Tails },
    });
  }

  return rounds;
}

export function resolveCoin100Answer(heads: number): Phase3LuckCoin100Choice {
  const tails = 100 - heads;
  if (heads >= 49 && heads <= 51) return 'tie';
  if (heads > tails) return 'heads';
  return 'tails';
}

export function calculatePhase3LuckGameResult(totalScore: number): string {
  if (totalScore <= 15) return 'Type1';
  if (totalScore <= 30) return 'Type2';
  if (totalScore <= 50) return 'Type3';
  if (totalScore <= 70) return 'Type4';
  if (totalScore <= 85) return 'Type5';
  return 'Type6';
}

export function getPhase3LuckGameResultByType(type: string): Phase3LuckGameResult | undefined {
  return phase3LuckGameResults.find((r) => r.type === type);
}

export function estimateLuckPercentile(score: number): number {
  if (score >= 86) return 1;
  if (score >= 71) return 8;
  if (score >= 51) return 25;
  if (score >= 31) return 55;
  if (score >= 16) return 75;
  return 92;
}

const BEST_KEY = 'phase3_luck_game_best';

export function loadPhase3LuckGameBestScores(): {
  todayBest: number;
  allTimeBest: number;
  attemptsToday: number;
} {
  if (typeof window === 'undefined') return { todayBest: 0, allTimeBest: 0, attemptsToday: 0 };
  try {
    const raw = localStorage.getItem(BEST_KEY);
    if (!raw) return { todayBest: 0, allTimeBest: 0, attemptsToday: 0 };
    const data = JSON.parse(raw) as {
      date: string;
      todayBest: number;
      allTimeBest: number;
      attemptsToday: number;
    };
    const today = new Date().toISOString().slice(0, 10);
    if (data.date !== today) {
      return { todayBest: 0, allTimeBest: data.allTimeBest ?? 0, attemptsToday: 0 };
    }
    return {
      todayBest: data.todayBest ?? 0,
      allTimeBest: data.allTimeBest ?? 0,
      attemptsToday: data.attemptsToday ?? 0,
    };
  } catch {
    return { todayBest: 0, allTimeBest: 0, attemptsToday: 0 };
  }
}

export function savePhase3LuckGamePlay(score: number): {
  todayBest: number;
  allTimeBest: number;
  attemptsToday: number;
} {
  const prev = loadPhase3LuckGameBestScores();
  const today = new Date().toISOString().slice(0, 10);
  const next = {
    date: today,
    todayBest: Math.max(prev.todayBest, score),
    allTimeBest: Math.max(prev.allTimeBest, score),
    attemptsToday: prev.attemptsToday + 1,
  };
  if (typeof window !== 'undefined') {
    localStorage.setItem(BEST_KEY, JSON.stringify(next));
  }
  return {
    todayBest: next.todayBest,
    allTimeBest: next.allTimeBest,
    attemptsToday: next.attemptsToday,
  };
}

export const phase3LuckGameResults: Phase3LuckGameResult[] = [
  {
    type: 'Type1',
    emoji: '💀',
    grade: 'F',
    title: L({
      ko: '오늘 로또 사지 마세요, 운빨 최하 단계',
      en: "Don't buy a lottery ticket today — bottom-tier luck",
      ja: '今日は宝くじを買わないで — 運最下位',
      'zh-CN': '今天别买彩票——运气垫底',
      'zh-TW': '今天別買彩票——運氣墊底',
      vi: 'Đừng mua vé số hôm nay — vận may tệ nhất',
      id: 'Jangan beli lotre hari ini — keberuntungan terburuk',
    }),
    shortDescription: L({
      ko: '10라운드 중 0~1라운드만 성공했습니다. 오늘은 행운의 여신이 딴 데 갔습니다.',
      en: 'Only 0–1 rounds succeeded out of 10. Lady Luck skipped you today.',
      ja: '10ラウンド中0〜1ラウンドのみ成功。今日は幸運の女神がどこかへ。',
      'zh-CN': '10轮中仅0~1轮成功。今天幸运女神不在。',
      'zh-TW': '10輪中僅0~1輪成功。今天幸運女神不在。',
      vi: 'Chỉ 0–1 vòng thành công trong 10. Hôm nay thần may bỏ bạn.',
      id: 'Hanya 0–1 ronde sukses dari 10. Dewi keberuntungan pergi hari ini.',
    }),
    description: L({
      ko: '10번의 기회에서 거의 모두 실패한 극히 드문 케이스입니다. 확률적으로 이 결과가 나올 확률도 꽤 낮기 때문에 역설적으로 이것도 희귀한 운입니다. 나쁜 방향의 희귀함이지만요.',
      en: 'A rare case where you failed almost all 10 chances. Statistically this outcome is also uncommon — paradoxically, a rare kind of luck, just in the wrong direction.',
      ja: '10回のチャンスでほぼ全敗した極めて稀なケース。この結果自体の確率も低く、逆説的に「珍しい運」でもあります。悪い方向のレア度ですが。',
      'zh-CN': '10次机会几乎全部失败，极为罕见。从概率看这种结果也不常见—— paradoxically 也是一种稀有运气，只是方向不对。',
      'zh-TW': '10次機會幾乎全部失敗，極為罕見。從機率看這種結果也不常見—— paradoxically 也是一種稀有運氣，只是方向不對。',
      vi: 'Hiếm khi thất bại gần hết 10 cơ hội. Xác suất kết quả này cũng thấp — nghịch lý là một dạng vận hiếm, chỉ là chiều xấu.',
      id: 'Kasus langka: gagal hampir semua dari 10 kesempatan. Probabilitas hasil ini juga rendah — ironisnya, keberuntungan langka arah buruk.',
    }),
    luckGrade: L({
      ko: 'F 운빨 바닥 💀',
      en: 'F rock-bottom luck 💀',
      ja: 'F 運最下位 💀',
      'zh-CN': 'F 运气垫底 💀',
      'zh-TW': 'F 運氣墊底 💀',
      vi: 'F vận may đáy 💀',
      id: 'F keberuntungan terbawah 💀',
    }),
    resultProbability: L({
      ko: '약 8%',
      en: 'About 8%',
      ja: '約8%',
      'zh-CN': '约8%',
      'zh-TW': '約8%',
      vi: 'Khoảng 8%',
      id: 'Sekitar 8%',
    }),
    avoidToday: L({
      ko: '로또·코인·뽑기 전부 금지',
      en: 'No lottery, coins, or gacha today',
      ja: '宝くじ・コイン・ガチャは全部禁止',
      'zh-CN': '今天禁止彩票、硬币、扭蛋',
      'zh-TW': '今天禁止彩票、硬幣、扭蛋',
      vi: 'Cấm xổ số, coin, gacha hôm nay',
      id: 'Hindari lotre, koin, gacha hari ini',
    }),
    canDoToday: null,
    retryTip: L({
      ko: '내일은 달라질 수 있습니다. 운도 돌고 돕니다',
      en: 'Tomorrow may differ. Luck turns in cycles',
      ja: '明日は変わるかも。運は巡ります',
      'zh-CN': '明天可能不同。运气会轮转',
      'zh-TW': '明天可能不同。運氣會輪轉',
      vi: 'Ngày mai có thể khác. Vận may luân chuyển',
      id: 'Besok bisa beda. Keberuntungan berputar',
    }),
    oneLiner: L({
      ko: '운이 없다는 것 자체가 하나의 재능입니다 (아마도)',
      en: 'Having no luck is a talent in itself (maybe)',
      ja: '運がないこと自体が才能かも（たぶん）',
      'zh-CN': '没运气本身也是一种天赋（大概）',
      'zh-TW': '沒運氣本身也是一種天賦（大概）',
      vi: 'Không may cũng là một tài năng (có lẽ)',
      id: 'Tidak beruntung juga bakat tersendiri (mungkin)',
    }),
    certify: null,
    shareLine: L({
      ko: '운빨 테스트: F등급 💀 10라운드 중 거의 다 실패... 역대급 불운 인증 → 나보다 운 좋은 사람? 도전해봐',
      en: 'Luck Test: Grade F 💀 Failed almost every round... certified epic bad luck → Think you\'re luckier? Try it',
      ja: '運ゲーテスト: Fランク 💀 10ラウンドほぼ全敗… 伝説級不運認定 → 私より運いい？挑戦して',
      'zh-CN': '运气测试：F级 💀 10轮几乎全败… 史诗级霉运认证 → 比我更运？来挑战',
      'zh-TW': '運氣測試：F級 💀 10輪幾乎全敗… 史詩級霉運認證 → 比我更運？來挑戰',
      vi: 'Test vận may: hạng F 💀 Gần như thua hết… chứng nhận xui epic → May hơn tôi? Thử đi',
      id: 'Tes Keberuntungan: Grade F 💀 Hampir gagal semua… sertifikat sial epic → Lebih beruntung? Coba',
    }),
  },
  {
    type: 'Type2',
    emoji: '🌧️',
    grade: 'D',
    title: L({
      ko: '평균 이하의 운빨, 불운 잦은 편',
      en: 'Below-average luck — often unlucky',
      ja: '平均以下の運 — 不運が多いタイプ',
      'zh-CN': '低于平均的运气——常不太走运',
      'zh-TW': '低於平均的運氣——常不太走運',
      vi: 'Vận may dưới trung bình — hay xui',
      id: 'Keberuntungan di bawah rata-rata — sering sial',
    }),
    shortDescription: L({
      ko: '10라운드 중 2~3라운드만 성공했습니다. 평균보다 조금 불운한 날입니다.',
      en: 'Only 2–3 rounds succeeded out of 10. A slightly unlucky day.',
      ja: '10ラウンド中2〜3ラウンド成功。平均より少し不運な日。',
      'zh-CN': '10轮中仅2~3轮成功。比平均略背的一天。',
      'zh-TW': '10輪中僅2~3輪成功。比平均略背的一天。',
      vi: 'Chỉ 2–3 vòng thành công trong 10. Hơi xui hơn trung bình.',
      id: 'Hanya 2–3 ronde sukses dari 10. Sedikit lebih sial dari rata-rata.',
    }),
    description: L({
      ko: '가장 많은 사람이 이 구간에 속합니다. 기댓값이 약 28점이기 때문에 이 결과는 통계적으로 가장 흔한 결과입니다. 평범한 운의 소유자입니다.',
      en: 'Most people fall in this range. With an expected score around 28, this is statistically the most common outcome. You have ordinary luck.',
      ja: '最も多い人がこの帯に入ります。期待値約28点なので統計的に最も一般的な結果。普通の運の持ち主です。',
      'zh-CN': '最多人落在这个区间。期望值约28分，统计上最常见。普通运气持有者。',
      'zh-TW': '最多人落在這個區間。期望值約28分，統計上最常見。普通運氣持有者。',
      vi: 'Nhiều người nhất ở khoảng này. Kỳ vọng ~28 điểm — kết quả phổ biến nhất. Vận may bình thường.',
      id: 'Kebanyakan orang di rentang ini. Ekspektasi ~28 poin — hasil paling umum. Keberuntungan biasa.',
    }),
    luckGrade: L({
      ko: 'D 평균 이하 🌧️',
      en: 'D below average 🌧️',
      ja: 'D 平均以下 🌧️',
      'zh-CN': 'D 低于平均 🌧️',
      'zh-TW': 'D 低於平均 🌧️',
      vi: 'D dưới trung bình 🌧️',
      id: 'D di bawah rata-rata 🌧️',
    }),
    resultProbability: L({
      ko: '약 30%',
      en: 'About 30%',
      ja: '約30%',
      'zh-CN': '约30%',
      'zh-TW': '約30%',
      vi: 'Khoảng 30%',
      id: 'Sekitar 30%',
    }),
    avoidToday: null,
    canDoToday: null,
    retryTip: L({
      ko: '비슷하거나 조금 오를 수 있음',
      en: 'Similar or slightly better next try',
      ja: '同程度か少し上がる可能性',
      'zh-CN': '下次可能差不多或略好',
      'zh-TW': '下次可能差不多或略好',
      vi: 'Lần sau tương tự hoặc hơn chút',
      id: 'Coba lagi bisa serupa atau sedikit naik',
    }),
    oneLiner: L({
      ko: '운빨은 아끼면 나중에 몰아옵니다 (아마도)',
      en: 'Save your luck — it may come in bulk later (maybe)',
      ja: '運は温存すれば後で一気に来る（たぶん）',
      'zh-CN': '运气省着用，以后会集中来（大概）',
      'zh-TW': '運氣省著用，以後會集中來（大概）',
      vi: 'Tiết kiệm vận may — sau này dồn về (có lẽ)',
      id: 'Hemat keberuntungan — nanti datang sekaligus (mungkin)',
    }),
    certify: null,
    shareLine: L({
      ko: '운빨 테스트: D등급 🌧️ 평균도 못 미치는 운빨... 오늘 로또 안 삼 → 너는 몇 점이야? 운빨 비교해봐',
      en: 'Luck Test: Grade D 🌧️ Below-average luck... skipping lottery today → What\'s your score? Compare luck',
      ja: '運ゲーテスト: Dランク 🌧️ 平均以下の運… 今日宝くじ買わない → 君は何点？運比べよう',
      'zh-CN': '运气测试：D级 🌧️ 连平均都不到… 今天不买彩票 → 你几分？比比运气',
      'zh-TW': '運氣測試：D級 🌧️ 連平均都不到… 今天不買彩票 → 你幾分？比比運氣',
      vi: 'Test vận may: hạng D 🌧️ Dưới trung bình… không mua vé số → Bạn mấy điểm? So vận may',
      id: 'Tes Keberuntungan: Grade D 🌧️ Di bawah rata-rata… skip lotre → Skormu berapa? Bandingkan',
    }),
  },
  {
    type: 'Type3',
    emoji: '🌤️',
    grade: 'C',
    title: L({
      ko: '보통 사람의 운빨, 평균형',
      en: 'Average luck — typical type',
      ja: '普通の人の運 — 平均型',
      'zh-CN': '普通人的运气——平均型',
      'zh-TW': '普通人的運氣——平均型',
      vi: 'Vận may bình thường — kiểu trung bình',
      id: 'Keberuntungan rata-rata — tipe standar',
    }),
    shortDescription: L({
      ko: '10라운드 중 3~5라운드 성공했습니다. 딱 평균 수준의 운을 가진 사람입니다.',
      en: '3–5 rounds succeeded out of 10. Right at average luck.',
      ja: '10ラウンド中3〜5ラウンド成功。まさに平均レベルの運。',
      'zh-CN': '10轮中3~5轮成功。正好平均水平的运气。',
      'zh-TW': '10輪中3~5輪成功。正好平均水準的運氣。',
      vi: '3–5 vòng thành công trong 10. Đúng mức trung bình.',
      id: '3–5 ronde sukses dari 10. Tepat di rata-rata.',
    }),
    description: L({
      ko: '당신의 운빨은 평균입니다. 이것이 나쁜 게 아닙니다. 삶에서 평균의 행운이 꾸준히 함께한다는 뜻입니다. 로또는 당첨 안 되지만 길 걷다 돈 줍는 정도의 행운은 옵니다.',
      en: 'Your luck is average — and that is not bad. It means steady, everyday fortune. You may not win the lottery, but you might find money on the street.',
      ja: 'あなたの運は平均です。悪いことではありません。人生で平均的な幸運が続くということ。宝くじは当たらなくても、道で小銭を拾う程度の運はあります。',
      'zh-CN': '你的运气是平均的，这并不坏。意味着生活中有稳定的普通好运。中不了彩票，但走路捡到钱的那种运气会有。',
      'zh-TW': '你的運氣是平均的，這並不壞。意味著生活中有穩定的普通好運。中不了彩票，但走路撿到錢的那種運氣會有。',
      vi: 'Vận may trung bình — không tệ. Nghĩa là may mắn ổn định trong đời. Không trúng số nhưng có thể nhặt được tiền lẻ.',
      id: 'Keberuntunganmu rata-rata — bukan buruk. Artinya keberuntungan stabil sehari-hari. Lotre mungkin zonk, tapi bisa menemukan uang receh.',
    }),
    luckGrade: L({
      ko: 'C 평균형 🌤️',
      en: 'C average type 🌤️',
      ja: 'C 平均型 🌤️',
      'zh-CN': 'C 平均型 🌤️',
      'zh-TW': 'C 平均型 🌤️',
      vi: 'C kiểu trung bình 🌤️',
      id: 'C tipe rata-rata 🌤️',
    }),
    resultProbability: L({
      ko: '약 35%',
      en: 'About 35%',
      ja: '約35%',
      'zh-CN': '约35%',
      'zh-TW': '約35%',
      vi: 'Khoảng 35%',
      id: 'Sekitar 35%',
    }),
    avoidToday: null,
    canDoToday: L({
      ko: '뽑기·소소한 내기',
      en: 'Small gacha or friendly bets',
      ja: 'ガチャ・小さな賭け',
      'zh-CN': '扭蛋·小赌注',
      'zh-TW': '扭蛋·小賭注',
      vi: 'Gacha nhỏ hoặc cược vui',
      id: 'Gacha kecil atau taruhan ringan',
    }),
    retryTip: null,
    oneLiner: L({
      ko: '평균의 운빨을 가진 사람이 사실 제일 안정적입니다',
      en: 'People with average luck are actually the most stable',
      ja: '平均の運を持つ人が実は最も安定している',
      'zh-CN': '拥有平均运气的人其实最稳定',
      'zh-TW': '擁有平均運氣的人其實最穩定',
      vi: 'Người vận may trung bình thực ra ổn định nhất',
      id: 'Orang dengan keberuntungan rata-rata justru paling stabil',
    }),
    certify: null,
    shareLine: L({
      ko: '운빨 테스트: C등급 🌤️ 딱 평균 운빨이래... 나쁘진 않은데 특별하지도 않음 ㅋㅋ → 내 점수 이겼어? 도전해봐',
      en: 'Luck Test: Grade C 🌤️ Perfectly average luck... not bad, not special lol → Beat my score? Try it',
      ja: '運ゲーテスト: Cランク 🌤️ まさに平均の運… 悪くないけど特別でもない ㅋㅋ → 私の点数超えられる？',
      'zh-CN': '运气测试：C级 🌤️ 刚好平均… 不差也不特别 ㅋㅋ → 能赢我的分数吗？',
      'zh-TW': '運氣測試：C級 🌤️ 剛好平均… 不差也不特別 ㅋㅋ → 能贏我的分數嗎？',
      vi: 'Test vận may: hạng C 🌤️ Vừa trung bình… không tệ không đặc biệt → Thắng điểm tôi?',
      id: 'Tes Keberuntungan: Grade C 🌤️ Rata-rata banget… biasa aja → Kalahkan skorku?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🌟',
    grade: 'B',
    title: L({
      ko: '운빨 꽤 좋은 편, 행운아 예비 후보',
      en: 'Pretty good luck — lucky-star candidate',
      ja: '運はかなり良い — 幸運児予備候補',
      'zh-CN': '运气不错——幸运儿预备候选',
      'zh-TW': '運氣不錯——幸運兒預備候選',
      vi: 'Vận may khá tốt — ứng viên con cưng may mắn',
      id: 'Keberuntungan cukup bagus — kandidat bintang keberuntungan',
    }),
    shortDescription: L({
      ko: '10라운드 중 5~7라운드 성공했습니다. 오늘 운이 꽤 좋은 날입니다.',
      en: '5–7 rounds succeeded out of 10. Today is a pretty lucky day.',
      ja: '10ラウンド中5〜7ラウンド成功。今日はかなり運が良い日。',
      'zh-CN': '10轮中5~7轮成功。今天运气相当不错。',
      'zh-TW': '10輪中5~7輪成功。今天運氣相當不錯。',
      vi: '5–7 vòng thành công trong 10. Hôm nay khá may.',
      id: '5–7 ronde sukses dari 10. Hari ini cukup beruntung.',
    }),
    description: L({
      ko: '확률적으로 기댓값보다 높은 성과를 낸 상위 25% 수준입니다. 낮은 확률의 라운드에서도 성공했다는 것이 포인트입니다. 오늘 소소한 행운을 써보는 것도 나쁘지 않습니다.',
      en: 'Top ~25% — above the expected score. Key point: you succeeded even on low-odds rounds. Not a bad day to try a little luck.',
      ja: '期待値を上回る上位25%程度。低確率ラウンドでも成功したのがポイント。今日は小さな幸運を試すのもアリ。',
      'zh-CN': '约前25%——高于期望值。关键是在低概率轮也成功了。今天试试小运气也不错。',
      'zh-TW': '約前25%——高於期望值。關鍵是在低機率輪也成功了。今天試試小運氣也不錯。',
      vi: 'Top ~25% — cao hơn kỳ vọng. Điểm mấu chốt: thắng cả vòng xác suất thấp. Hôm nay thử chút may mắn cũng ổn.',
      id: 'Top ~25% — di atas ekspektasi. Kunci: sukses di ronde probabilitas rendah. Hari ini coba sedikit keberuntungan.',
    }),
    luckGrade: L({
      ko: 'B 행운아 예비 후보 🌟',
      en: 'B lucky-star candidate 🌟',
      ja: 'B 幸運児予備候補 🌟',
      'zh-CN': 'B 幸运儿预备 🌟',
      'zh-TW': 'B 幸運兒預備 🌟',
      vi: 'B ứng viên may mắn 🌟',
      id: 'B kandidat bintang keberuntungan 🌟',
    }),
    resultProbability: L({
      ko: '약 18%',
      en: 'About 18%',
      ja: '約18%',
      'zh-CN': '约18%',
      'zh-TW': '約18%',
      vi: 'Khoảng 18%',
      id: 'Sekitar 18%',
    }),
    avoidToday: null,
    canDoToday: L({
      ko: '뽑기 도전·소소한 내기·오늘 특별한 시도',
      en: 'Try gacha, small bets, or something bold today',
      ja: 'ガチャ挑戦・小さな賭け・今日の特別な一歩',
      'zh-CN': '挑战扭蛋·小赌·今天特别尝试',
      'zh-TW': '挑戰扭蛋·小賭·今天特別嘗試',
      vi: 'Thử gacha, cược nhỏ, hoặc làm gì đó đặc biệt',
      id: 'Coba gacha, taruhan kecil, atau langkah berani',
    }),
    retryTip: null,
    oneLiner: L({
      ko: '오늘 운이 좋은 날입니다. 활용하세요',
      en: 'Today is a lucky day. Use it well',
      ja: '今日は運が良い日。活かしましょう',
      'zh-CN': '今天是幸运日。好好利用',
      'zh-TW': '今天是幸運日。好好利用',
      vi: 'Hôm nay là ngày may. Tận dụng đi',
      id: 'Hari ini beruntung. Manfaatkan',
    }),
    certify: null,
    shareLine: L({
      ko: '운빨 테스트: B등급 🌟 오늘 운 좋은 날이래... 뽑기 도전해야겠다 → 내 점수 이겼어? 친구 도전해봐',
      en: 'Luck Test: Grade B 🌟 Lucky day today... time for gacha → Beat my score? Challenge a friend',
      ja: '運ゲーテスト: Bランク 🌟 今日は運が良い… ガチャ行こう → 私の点数超えられる？',
      'zh-CN': '运气测试：B级 🌟 今天运气不错… 该去扭蛋了 → 能赢我的分数吗？',
      'zh-TW': '運氣測試：B級 🌟 今天運氣不錯… 該去扭蛋了 → 能贏我的分數嗎？',
      vi: 'Test vận may: hạng B 🌟 Hôm nay may… đi gacha thôi → Thắng điểm tôi?',
      id: 'Tes Keberuntungan: Grade B 🌟 Hari ini hoki… gas gacha → Kalahkan skorku?',
    }),
  },
  {
    type: 'Type5',
    emoji: '🍀',
    grade: 'A',
    title: L({
      ko: '타고난 행운아, 운빨 상위권',
      en: 'Born lucky — top-tier fortune',
      ja: '生まれつき幸運児 — 運上位',
      'zh-CN': '天生幸运儿——运气上位',
      'zh-TW': '天生幸運兒——運氣上位',
      vi: 'May mắn bẩm sinh — vận may top',
      id: 'Beruntung alami — keberuntungan tier atas',
    }),
    shortDescription: L({
      ko: '10라운드 중 7~8라운드 성공했습니다. 통계적으로 매우 드문 결과입니다.',
      en: '7–8 rounds succeeded out of 10. A statistically rare result.',
      ja: '10ラウンド中7〜8ラウンド成功。統計的に非常に稀な結果。',
      'zh-CN': '10轮中7~8轮成功。统计上非常罕见。',
      'zh-TW': '10輪中7~8輪成功。統計上非常罕見。',
      vi: '7–8 vòng thành công trong 10. Kết quả hiếm về mặt thống kê.',
      id: '7–8 ronde sukses dari 10. Hasil langka secara statistik.',
    }),
    description: L({
      ko: '이 결과가 나올 확률은 약 5~7%입니다. 낮은 확률의 라운드(숫자 찍기 10%, 슬롯머신 20%)에서도 성공했다는 것이 이 점수의 핵심입니다. 오늘은 진짜 행운의 날입니다.',
      en: 'This outcome has about a 5–7% chance. The key is succeeding on low-odds rounds (number guess 10%, slots 20%). Today is truly your lucky day.',
      ja: 'この結果の確率は約5〜7%。低確率ラウンド（数字当て10%、スロット20%）でも成功したのが核心。今日は本当に幸運の日。',
      'zh-CN': '此结果概率约5~7%。关键是在低概率轮（猜数字10%、老虎机20%）也成功了。今天是真正的幸运日。',
      'zh-TW': '此結果機率約5~7%。關鍵是在低機率輪（猜數字10%、老虎機20%）也成功了。今天是真正的幸運日。',
      vi: 'Xác suất khoảng 5–7%. Mấu chốt: thắng cả vòng xác suất thấp (đoán số 10%, slot 20%). Hôm nay thật sự may.',
      id: 'Probabilitas ~5–7%. Kunci: sukses di ronde rendah (tebak angka 10%, slot 20%). Hari ini benar-benar hoki.',
    }),
    luckGrade: L({
      ko: 'A 타고난 행운아 🍀',
      en: 'A born lucky 🍀',
      ja: 'A 生まれつき幸運児 🍀',
      'zh-CN': 'A 天生幸运 🍀',
      'zh-TW': 'A 天生幸運 🍀',
      vi: 'A may mắn bẩm sinh 🍀',
      id: 'A beruntung alami 🍀',
    }),
    resultProbability: L({
      ko: '약 6%',
      en: 'About 6%',
      ja: '約6%',
      'zh-CN': '约6%',
      'zh-TW': '約6%',
      vi: 'Khoảng 6%',
      id: 'Sekitar 6%',
    }),
    avoidToday: null,
    canDoToday: L({
      ko: '로또 한 장·뽑기 도전·큰 결정의 날',
      en: 'One lottery ticket, gacha, or big decisions today',
      ja: '宝くじ1枚・ガチャ挑戦・大きな決断の日',
      'zh-CN': '买一张彩票·挑战扭蛋·做重大决定的日子',
      'zh-TW': '買一張彩票·挑戰扭蛋·做重大決定的日子',
      vi: 'Một vé số, gacha, hoặc quyết định lớn hôm nay',
      id: 'Satu lotre, gacha, atau keputusan besar hari ini',
    }),
    retryTip: null,
    oneLiner: L({
      ko: '오늘 당신 주변에 행운의 기운이 있습니다. 낭비하지 마세요',
      en: 'Lucky energy surrounds you today. Do not waste it',
      ja: '今日は幸運のオーラに包まれています。無駄にしないで',
      'zh-CN': '今天你身边有幸运气场。别浪费',
      'zh-TW': '今天你身邊有幸運氣場。別浪費',
      vi: 'Hôm nay năng lượng may mắn bao quanh bạn. Đừng lãng phí',
      id: 'Energi keberuntungan mengelilingimu hari ini. Jangan sia-siakan',
    }),
    certify: null,
    shareLine: L({
      ko: '운빨 테스트: A등급 🍀 상위 6% 운빨... 숫자 찍기에서 10% 뚫은 거 아직도 신기함 → 내 점수 이겼어? 난 상위 1% 노린다',
      en: 'Luck Test: Grade A 🍀 Top 6% luck... still amazed I beat 10% odds → Beat my score? I\'m aiming for top 1%',
      ja: '運ゲーテスト: Aランク 🍀 上位6%の運… 10%数字当て突破まだ信じられない → 私の点数超えられる？上位1%狙う',
      'zh-CN': '运气测试：A级 🍀 前6%运气… 10%猜数字还觉得很神奇 → 能赢我？我冲前1%',
      'zh-TW': '運氣測試：A級 🍀 前6%運氣… 10%猜數字還覺得很神奇 → 能贏我？我衝前1%',
      vi: 'Test vận may: hạng A 🍀 Top 6%… vẫn sốc vì thắng 10% → Thắng tôi? Tôi nhắm top 1%',
      id: 'Tes Keberuntungan: Grade A 🍀 Top 6%… masih kaget tembus 10% → Kalahkan? Aku incer top 1%',
    }),
  },
  {
    type: 'Type6',
    emoji: '👑',
    grade: 'S',
    title: L({
      ko: '확률을 이긴 사람, 운빨 끝판왕',
      en: 'You beat probability — ultimate luck king',
      ja: '確率に勝った人 — 運の最終ボス',
      'zh-CN': '战胜概率的人——运气终极王',
      'zh-TW': '戰勝機率的人——運氣終極王',
      vi: 'Người thắng xác suất — vua vận may tối thượng',
      id: 'Mengalahkan probabilitas — raja keberuntungan ultimate',
    }),
    shortDescription: L({
      ko: '10라운드 중 9~10라운드 성공했습니다. 이 결과가 나올 수학적 확률은 약 0.1~2%입니다.',
      en: '9–10 rounds succeeded out of 10. Mathematical chance of this result: about 0.1–2%.',
      ja: '10ラウンド中9〜10ラウンド成功。この結果の数学的確率は約0.1〜2%。',
      'zh-CN': '10轮中9~10轮成功。此结果的数学概率约0.1~2%。',
      'zh-TW': '10輪中9~10輪成功。此結果的數學機率約0.1~2%。',
      vi: '9–10 vòng thành công trong 10. Xác suất toán học: khoảng 0.1–2%.',
      id: '9–10 ronde sukses dari 10. Peluang matematis: ~0.1–2%.',
    }),
    description: L({
      ko: '숫자 찍기(1/10), 슬롯머신(1/5), 색깔 룰렛(1/5), 박스 선택(1/4)까지 거의 모두 맞혔다는 것은 순수 확률로 설명하기 매우 어려운 결과입니다. 당신은 오늘 확률을 이겼습니다.',
      en: 'Hitting number guess (1/10), slots (1/5), color roulette (1/5), and box pick (1/4) almost all correct is nearly impossible by pure chance. You beat probability today.',
      ja: '数字当て(1/10)、スロット(1/5)、色ルーレット(1/5)、箱選択(1/4)をほぼ全部当てたのは純粋な確率では説明しにくい。今日、確率に勝ちました。',
      'zh-CN': '猜数字(1/10)、老虎机(1/5)、颜色轮盘(1/5)、选箱子(1/4)几乎全中，纯概率极难解释。你今天战胜了概率。',
      'zh-TW': '猜數字(1/10)、老虎機(1/5)、顏色輪盤(1/5)、選箱子(1/4)幾乎全中，純機率極難解釋。你今天戰勝了機率。',
      vi: 'Trúng gần hết: đoán số (1/10), slot (1/5), roulette màu (1/5), chọn hộp (1/4). Khó giải bằng xác suất thuần. Bạn đã thắng xác suất.',
      id: 'Hampir benar semua: tebak angka (1/10), slot (1/5), roulette warna (1/5), kotak (1/4). Sulit dijelaskan kebetulan murni. Kamu mengalahkan probabilitas.',
    }),
    luckGrade: L({
      ko: 'S 운빨 끝판왕 👑',
      en: 'S ultimate luck king 👑',
      ja: 'S 運の最終ボス 👑',
      'zh-CN': 'S 运气终极王 👑',
      'zh-TW': 'S 運氣終極王 👑',
      vi: 'S vua vận may tối thượng 👑',
      id: 'S raja keberuntungan ultimate 👑',
    }),
    resultProbability: L({
      ko: '약 0.1~2%',
      en: 'About 0.1–2%',
      ja: '約0.1〜2%',
      'zh-CN': '约0.1~2%',
      'zh-TW': '約0.1~2%',
      vi: 'Khoảng 0.1–2%',
      id: 'Sekitar 0.1–2%',
    }),
    avoidToday: null,
    canDoToday: L({
      ko: '로또·뽑기·행운이 필요한 모든 것',
      en: 'Lottery, gacha, anything that needs luck',
      ja: '宝くじ・ガチャ・運が必要なすべて',
      'zh-CN': '彩票·扭蛋·一切需要运气的事',
      'zh-TW': '彩票·扭蛋·一切需要運氣的事',
      vi: 'Xổ số, gacha, mọi thứ cần may mắn',
      id: 'Lotre, gacha, apapun yang butuh hoki',
    }),
    retryTip: null,
    oneLiner: L({
      ko: '확률은 거짓말을 하지 않습니다. 그리고 당신은 확률을 이겼습니다',
      en: 'Probability does not lie. And you beat it',
      ja: '確率は嘘をつかない。そしてあなたは確率に勝った',
      'zh-CN': '概率不会说谎。而你战胜了概率',
      'zh-TW': '機率不會說謊。而你戰勝了機率',
      vi: 'Xác suất không nói dối. Và bạn đã thắng nó',
      id: 'Probabilitas tidak bohong. Dan kamu mengalahkannya',
    }),
    certify: L({
      ko: '운빨 S등급 달성 👑 상위 1% 운빨남·녀 인증 완료',
      en: 'Luck Grade S achieved 👑 Top 1% luck certified',
      ja: '運Sランク達成 👑 上位1%運持ち認定',
      'zh-CN': '运气S级达成 👑 前1%运气认证完成',
      'zh-TW': '運氣S級達成 👑 前1%運氣認證完成',
      vi: 'Đạt hạng S vận may 👑 Chứng nhận top 1%',
      id: 'Grade S keberuntungan 👑 Sertifikasi top 1%',
    }),
    shareLine: L({
      ko: '운빨 테스트: S등급 👑 상위 1% 운빨남·녀 인증 완료... 확률을 이겼다는 거 → 내 점수 이겼어? 있으면 나와봐 ㅋㅋ',
      en: 'Luck Test: Grade S 👑 Top 1% certified... I beat probability → Beat my score? Step up lol',
      ja: '運ゲーテスト: Sランク 👑 上位1%認定… 確率に勝った → 私の点数超えられる？出てこい ㅋㅋ',
      'zh-CN': '运气测试：S级 👑 前1%认证… 战胜了概率 → 能赢我？有种来 ㅋㅋ',
      'zh-TW': '運氣測試：S級 👑 前1%認證… 戰勝了機率 → 能贏我？有种來 ㅋㅋ',
      vi: 'Test vận may: hạng S 👑 Top 1%… thắng xác suất → Thắng tôi? Ra đây ㅋㅋ',
      id: 'Tes Keberuntungan: Grade S 👑 Top 1%… kalahkan probabilitas → Kalahkan skorku? Keluar ㅋㅋ',
    }),
  },
];

export const PHASE3_LUCK_ROUND_TYPES: Phase3LuckRoundType[] = [
  'door',
  'coin',
  'card',
  'box',
  'roulette',
  'number',
  'gacha',
  'slot',
  'clover',
  'coin100',
];
