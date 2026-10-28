/**
 * 밸런스 게임 — 데이트 비용 극한편
 * slug: phase3-dating-cost-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 */

export type Phase3DatingCostBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3DatingCostBalanceText = Record<Phase3DatingCostBalanceLocaleKey, string>;
export type Phase3DatingCostPolar = 'share' | 'bear' | 'principle' | 'flexible' | 'stat';

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3DatingCostBalanceText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

function opt(
  texts: Phase3DatingCostBalanceText,
  polar: Phase3DatingCostPolar
): { text: Phase3DatingCostBalanceText; polar: Phase3DatingCostPolar } {
  return { text: texts, polar };
}

export interface Phase3DatingCostBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3DatingCostBalanceText;
  options: { text: Phase3DatingCostBalanceText; polar: Phase3DatingCostPolar }[];
}

export interface Phase3DatingCostBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3DatingCostBalanceText;
  shortDescription: Phase3DatingCostBalanceText;
  quote: Phase3DatingCostBalanceText;
  description: Phase3DatingCostBalanceText;
  typeLabel: Phase3DatingCostBalanceText;
  characteristics: Phase3DatingCostBalanceText;
  livingStyle: Phase3DatingCostBalanceText;
  strengths: Phase3DatingCostBalanceText;
  caution: Phase3DatingCostBalanceText;
  goodMatch: Phase3DatingCostBalanceText;
  tips: Phase3DatingCostBalanceText;
  oneLiner: Phase3DatingCostBalanceText;
  shareLine: Phase3DatingCostBalanceText;
}

export function datingCostText(text: Phase3DatingCostBalanceText, locale: string): string {
  const loc = locale as Phase3DatingCostBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3DatingCostBalanceGameResult(
  questions: Phase3DatingCostBalanceGameQuestion[],
  answers: number[]
): string {
  let share = 0;
  let bear = 0;
  let principle = 0;
  let flexible = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'share') share += 1;
    else if (polar === 'bear') bear += 1;
    else if (polar === 'principle') principle += 1;
    else if (polar === 'flexible') flexible += 1;
  });

  const axisA = share >= 3 ? 'share' : 'bear';
  const axisB = principle >= 3 ? 'principle' : 'flexible';

  if (axisA === 'share' && axisB === 'principle') return 'Type1';
  if (axisA === 'bear' && axisB === 'principle') return 'Type2';
  if (axisA === 'bear' && axisB === 'flexible') return 'Type3';
  return 'Type4';
}

export const phase3DatingCostBalanceGameQuestions: Phase3DatingCostBalanceGameQuestion[] = [
  {
    id: 1,
    scored: true,
    question: T(
      '데이트 비용을 정한다. 나는?',
      'When deciding who pays for the date, I…',
      'デート代の分担を決めるとき、私は？',
      '决定约会谁付钱时，我会？',
      '決定約會誰付錢時，我會？',
      'Khi quyết định ai trả tiền hẹn hò, tôi…',
      'Saat memutuskan siapa yang bayar kencan, aku…'
    ),
    options: [
      opt(
        T(
          '항상 반반으로 정확히 나누지만 분위기가 계산적으로 느껴질 수 있다',
          'Always split 50/50 exactly—even if it feels a bit transactional',
          'いつもきっちり割り勘にするが、計算高く感じられることもある',
          '总是严格 AA，但气氛可能显得斤斤计较',
          '總是嚴格各付各的，但氣氛可能顯得斤斤計較',
          'Luôn chia đều 50/50, dù không khí hơi tính toán',
          'Selalu bagi rata 50/50, meski suasana terasa agak hitung-hitungan'
        ),
        'share'
      ),
      opt(
        T(
          '내가 더 내서 마음은 편하지만 지출이 쌓여 부담이 커진다',
          'I cover more so it feels easier—but the spending piles up',
          '自分が多めに出して気が楽だが、出費が積み重なって負担になる',
          '我多付一点心里痛快，但开销一攒就有压力',
          '我多付一點心裡痛快，但開銷一攢就有壓力',
          'Tôi trả nhiều hơn cho nhẹ đầu—nhưng chi phí cứ chất chồng',
          'Aku bayar lebih banyak biar enak—tapi pengeluaran menumpuk'
        ),
        'bear'
      ),
    ],
  },
  {
    id: 2,
    scored: true,
    question: T(
      '연인이 매번 얻어먹기만 한다. 나는?',
      'My partner always freeloads on dates. I…',
      '恋人が毎回おごりっぱなし。私は？',
      '对方总是被我请客。我会？',
      '對方總是被我請客。我會？',
      'Người yêu cứ để mình trả mãi. Tôi…',
      'Pacar selalu saja ditraktir. Aku…'
    ),
    options: [
      opt(
        T(
          '괜찮다고 웃으며 계속 내지만 속으로 서운함이 쌓인다',
          'Smile and keep paying—while quiet resentment builds',
          '大丈夫と笑って払い続けるが、心の中で悔しさが溜まる',
          '笑着说没事继续付，但心里委屈越积越多',
          '笑著說沒事繼續付，但心裡委屈越積越多',
          'Cười bảo không sao rồi trả tiếp—nhưng ấm ức chất trong lòng',
          'Tersenyum bilang gapapa dan terus bayar—tapi sakit hati menumpuk'
        ),
        'bear'
      ),
      opt(
        T(
          '솔직하게 반반을 제안하지만 쪼잔하다는 말을 들을 수 있다',
          'Honestly suggest splitting—even if I get called cheap',
          '正直に割り勘を提案するが、ケチだと思われるかも',
          '坦诚提出 AA，但可能被说小气',
          '坦誠提出各付各的，但可能被說小氣',
          'Thẳng thắn đề nghị chia đều—dù có thể bị chê keo',
          'Jujur usulkan bagi rata—meski bisa dibilang pelit'
        ),
        'share'
      ),
    ],
  },
  {
    id: 3,
    scored: true,
    question: T(
      '계산대 앞에서 나는?',
      'At the checkout, I…',
      '会計のとき、私は？',
      '到收银台时，我会？',
      '到結帳時，我會？',
      'Khi tới quầy tính tiền, tôi…',
      'Di kasir, aku…'
    ),
    options: [
      opt(
        T(
          '1원 단위까지 정산 앱으로 나누지만 낭만이 줄어든다',
          'Split down to the cent with an app—romance fades a little',
          '1円単位まで精算アプリで分けるが、ロマンチックさが薄れる',
          '用分账 App 算到分毫不差，浪漫感会打折',
          '用分帳 App 算到分毫不差，浪漫感會打折',
          'Chia tới từng đồng bằng app—lãng mạn hơi giảm',
          'Bagi sampai sen terakhir pakai app—romantisme berkurang'
        ),
        'share'
      ),
      opt(
        T(
          '눈치 보지 않고 먼저 카드를 내밀지만 연인이 미안해할 수 있다',
          'Pull out my card first without hesitation—partner may feel guilty',
          '遠慮なく先にカードを出すが、恋人が申し訳なく思うかも',
          '毫不犹豫先刷卡，对方可能会过意不去',
          '毫不猶豫先刷卡，對方可能會過意不去',
          'Đưa thẻ trước không ngại—người yêu có thể thấy áy náy',
          'Taruh kartu duluan tanpa ragu—pacar bisa merasa bersalah'
        ),
        'bear'
      ),
    ],
  },
  {
    id: 4,
    scored: true,
    question: T(
      '연인이 훨씬 비싼 식당을 가고 싶어 한다. 나는?',
      'My partner wants a much pricier restaurant. I…',
      '恋人がかなり高い店に行きたい。私は？',
      '对方想去贵很多的餐厅。我会？',
      '對方想去貴很多的餐廳。我會？',
      'Người yêu muốn nhà hàng đắt hơn hẳn. Tôi…',
      'Pacar ingin restoran yang jauh lebih mahal. Aku…'
    ),
    options: [
      opt(
        T(
          '내가 더 부담해서라도 가 주지만 한 달 생활비가 빠듯해진다',
          'Cover the extra so we can go—even if the month gets tight',
          '自分が多めに負担してでも行くが、今月の生活がキツくなる',
          '我多付也带去，但这月生活费会吃紧',
          '我多付也帶去，但這月生活費會吃緊',
          'Tôi chịu thêm để đi—dù tháng này sẽ eo hẹp',
          'Aku bayar ekstra supaya bisa pergi—meski bulan ini ketat'
        ),
        'bear'
      ),
      opt(
        T(
          '각자 낼 수 있는 만큼만 내자고 하지만 가고 싶은 곳을 포기할 수 있다',
          'Suggest paying only what each can afford—we might skip that spot',
          '出せる分だけ出そうと言うが、行きたい店を諦めるかも',
          '提议各自量力而出，但可能去不成想去的店',
          '提議各自量力而出，但可能去不成想去的店',
          'Đề nghị ai trả được bao nhiêu thì trả—có thể phải bỏ chỗ đó',
          'Usulkan bayar sebisanya—bisa jadi tempat itu dibatalkan'
        ),
        'share'
      ),
    ],
  },
  {
    id: 5,
    scored: true,
    question: T(
      '연인의 생일이다. 나는?',
      "It's my partner's birthday. I…",
      '恋人の誕生日。私は？',
      '是对方的生日。我会？',
      '是對方的生日。我會？',
      'Sinh nhật người yêu. Tôi…',
      'Hari ulang tahun pacar. Aku…'
    ),
    options: [
      opt(
        T(
          '큰 선물을 내가 전부 부담하지만 통장이 가벼워진다',
          'Buy a big gift myself—my balance takes the hit',
          '大きなプレゼントを全部自分で出すが、口座が軽くなる',
          '大礼我一个人买，账户会瘦一圈',
          '大禮我一個人買，帳戶會瘦一圈',
          'Tự mua quà lớn một mình—tài khoản mỏng đi',
          'Beli hadiah besar sendiri—saldo menipis'
        ),
        'bear'
      ),
      opt(
        T(
          '둘이 합쳐 선물을 사지만 직접 고른 선물의 감동이 줄어든다',
          'Pool money for the gift—but the personal touch fades',
          '二人で出し合って買うが、自分で選んだ感動は薄れる',
          '两人凑钱买，但亲手挑选的感动会少一些',
          '兩人湊錢買，但親手挑選的感動會少一些',
          'Góp tiền mua chung—cảm xúc tự chọn hơi giảm',
          'Patungan beli hadiah—sentuhan pribadi berkurang'
        ),
        'share'
      ),
    ],
  },
  {
    id: 6,
    scored: true,
    question: T(
      '데이트 비용의 기준을 정한다. 나는?',
      'Setting ground rules for date money, I…',
      'デート代のルールを決めるとき、私は？',
      '定约会花钱规矩时，我会？',
      '定約會花錢規矩時，我會？',
      'Khi đặt quy tắc tiền hẹn hò, tôi…',
      'Saat membuat aturan biaya kencan, aku…'
    ),
    options: [
      opt(
        T(
          '처음에 규칙을 정해 끝까지 지키지만 사정이 바뀌어도 융통성이 없다',
          'Set rules early and stick to them—even when life changes',
          '最初にルールを決めて守り通すが、事情が変わっても融通がきかない',
          '一开始定好规矩并坚持，情况变了也不通融',
          '一開始定好規矩並堅持，情況變了也不通融',
          'Đặt luật từ đầu rồi giữ chặt—dù hoàn cảnh đổi cũng ít linh hoạt',
          'Tetapkan aturan di awal dan pegang teguh—meski situasi berubah tetap kaku'
        ),
        'principle'
      ),
      opt(
        T(
          '그때그때 상황 봐서 정하지만 서로 기억이 달라 다툴 수 있다',
          'Decide case by case—but memories can clash later',
          'その都度状況で決めるが、記憶が食い違ってケンカになるかも',
          '看情况临时定，但事后记忆对不上可能吵架',
          '看情況臨時定，但事後記憶對不上可能吵架',
          'Tùy lúc quyết—nhưng nhớ khác nhau dễ cãi',
          'Putuskan situasional—tapi ingatan bisa beda dan ribut'
        ),
        'flexible'
      ),
    ],
  },
  {
    id: 7,
    scored: true,
    question: T(
      '연인이 이번 달 월급이 줄었다고 한다. 나는?',
      'My partner says this month’s paycheck is smaller. I…',
      '恋人が今月の給料が減ったと言う。私は？',
      '对方说这个月工资少了。我会？',
      '對方說這個月薪水少了。我會？',
      'Người yêu bảo lương tháng này giảm. Tôi…',
      'Pacar bilang gaji bulan ini turun. Aku…'
    ),
    options: [
      opt(
        T(
          '내가 더 내 주겠다며 조정하지만 이런 일이 반복될까 걱정된다',
          'Offer to cover more—but worry it becomes a pattern',
          '自分が多めに出すと言って調整するが、これが続くのではと不安',
          '主动多付帮一把，但又怕以后成习惯',
          '主動多付幫一把，但又怕以後成習慣',
          'Xin trả thêm giúp—nhưng lo chuyện này lặp lại',
          'Tawarkan bayar lebih—tapi khawatir jadi pola'
        ),
        'flexible'
      ),
      opt(
        T(
          '규칙은 그대로 지키자고 하지만 연인이 서운해할 수 있다',
          'Keep the same rules—partner may feel hurt',
          'ルールはそのままでと言うが、恋人が傷つくかも',
          '坚持原规矩不变，对方可能会委屈',
          '堅持原規矩不變，對方可能會委屈',
          'Giữ nguyên quy tắc—người yêu có thể buồn',
          'Tetap pakai aturan lama—pacar bisa tersinggung'
        ),
        'principle'
      ),
    ],
  },
  {
    id: 8,
    scored: true,
    question: T(
      '약속한 정산을 연인이 하루 늦게 보냈다. 나는?',
      'Partner sends the agreed split a day late. I…',
      '約束の精算が一日遅れて届いた。私は？',
      '约定的分账晚到了一天。我会？',
      '約定的分帳晚到了一天。我會？',
      'Tiền chia đúng hẹn đến muộn một ngày. Tôi…',
      'Transfer bagi hasil datang sehari telat. Aku…'
    ),
    options: [
      opt(
        T(
          '기한은 기한이라며 짚고 넘어가지만 분위기가 어색해질 수 있다',
          'Point out a deadline is a deadline—things may get awkward',
          '期限は期限だと指摘するが、空気が悪くなるかも',
          '提醒期限就是期限，气氛可能变僵',
          '提醒期限就是期限，氣氛可能變僵',
          'Nhắc hạn là hạn—không khí có thể ngại',
          'Ingatkan deadline ya deadline—suasana bisa canggung'
        ),
        'principle'
      ),
      opt(
        T(
          '그럴 수 있다며 넘어가지만 마음속 기록이 쌓일 수 있다',
          'Let it slide—but I keep a quiet mental tally',
          'まあ仕方ないとそのままにするが、心の記録が積み重なる',
          '说没事算了，但心里会默默记一笔',
          '說沒事算了，但心裡會默默記一筆',
          'Bảo không sao rồi bỏ qua—nhưng âm thầm ghi nhớ',
          'Bilang gapapa lalu lewatkan—tapi diam-diam dicatat di hati'
        ),
        'flexible'
      ),
    ],
  },
  {
    id: 9,
    scored: true,
    question: T(
      '연인이 갑자기 비싼 코스를 예약했다. 나는?',
      'Partner suddenly books an expensive course. I…',
      '恋人が突然高いコースを予約した。私は？',
      '对方突然订了昂贵套餐。我会？',
      '對方突然訂了昂貴套餐。我會？',
      'Người yêu đột nhiên đặt set đắt. Tôi…',
      'Pacar tiba-tiba booking course mahal. Aku…'
    ),
    options: [
      opt(
        T(
          '기분 좋게 받아들이고 이번엔 내가 더 내지만 예산이 흔들린다',
          'Go along cheerfully and cover more this time—budget wobbles',
          '気持ちよく受け入れて今回は多めに出すが、予算が揺らぐ',
          '开心接受并这次多付，但预算会晃',
          '開心接受並這次多付，但預算會晃',
          'Vui vẻ nhận và trả thêm lần này—ngân sách lung lay',
          'Terima dengan senang dan bayar lebih kali ini—anggaran goyah'
        ),
        'flexible'
      ),
      opt(
        T(
          '미리 상의가 없었다며 예산 규칙을 다시 짚지만 설렘이 식을 수 있다',
          'Note we didn’t discuss it and revisit the budget rule—spark may cool',
          '事前の相談がなかったと予算ルールを確認するが、ときめきが冷めるかも',
          '指出没事先商量并重申预算规矩，心动可能降温',
          '指出沒事先商量並重申預算規矩，心動可能降溫',
          'Nhắc chưa bàn trước và nêu lại luật ngân sách—hứng thú có thể nguội',
          'Sebut belum didiskusikan dan ulang aturan anggaran—semangat bisa pudar'
        ),
        'principle'
      ),
    ],
  },
  {
    id: 10,
    scored: true,
    question: T(
      '데이트 통장을 만든다. 나는?',
      'We open a shared dating fund. I…',
      'デート用の口座を作る。私は？',
      '开一个约会专用账户。我会？',
      '開一個約會專用帳戶。我會？',
      'Mở quỹ hẹn hò chung. Tôi…',
      'Buka rekening dana kencan. Aku…'
    ),
    options: [
      opt(
        T(
          '월 입금액과 사용처를 정해 두지만 자유롭게 쓰기 어렵다',
          'Fix monthly deposits and uses—hard to spend freely',
          '月の入金額と使い道を決めるが、自由に使いづらい',
          '定好每月存多少、花在哪，但很难随意花',
          '定好每月存多少、花在哪，但很難隨意花',
          'Chốt số nộp và mục chi hàng tháng—khó tiêu thoải mái',
          'Tentukan setoran & alokasi bulanan—susah belanja bebas'
        ),
        'principle'
      ),
      opt(
        T(
          '필요할 때 각자 넣지만 금액이 들쑥날쑥해 관리가 어렵다',
          'Add money when needed—amounts bounce, hard to manage',
          '必要なときに各自入れるが、金額がバラついて管理しづらい',
          '需要时各自往里放，金额忽高忽低难管',
          '需要時各自往裡放，金額忽高忽低難管',
          'Ai cần thì bỏ vào—số tiền lúc nhiều lúc ít, khó quản',
          'Setor saat butuh—jumlah naik-turun, susah dikelola'
        ),
        'flexible'
      ),
    ],
  },
  {
    id: 11,
    scored: false,
    question: T(
      '둘 중 더 견딜 만한 연인은?',
      'Which partner is easier to live with?',
      'どちらの恋人がまだマシ？',
      '下面哪种对象更能忍？',
      '下面哪種對象還比較能忍？',
      'Người yêu nào chịu đựng được hơn?',
      'Pacar mana yang lebih bisa ditoleransi?'
    ),
    options: [
      opt(
        T(
          '내가 다 내는 대신 매번 지각하는 연인',
          'I always pay—but they’re late every time',
          '自分が全部出す代わりに毎回遅刻する恋人',
          '我全付，但对方每次都迟到',
          '我全付，但對方每次都遲到',
          'Tôi trả hết—nhưng họ luôn đi muộn',
          'Aku bayar semua—tapi mereka selalu terlambat'
        ),
        'stat'
      ),
      opt(
        T(
          '더치페이하지만 늘 정시에 도착하는 연인',
          'We split the bill—but they’re always on time',
          '割り勘だがいつも時間どおりに来る恋人',
          'AA 制，但对方总是准时到',
          '各付各的，但對方總是準時到',
          'Chia tiền—nhưng họ luôn đúng giờ',
          'Bagi tagihan—tapi mereka selalu tepat waktu'
        ),
        'stat'
      ),
    ],
  },
  {
    id: 12,
    scored: false,
    question: T(
      '둘 중 더 불편한 상황은?',
      'Which situation feels more awkward?',
      'どちらの状況がより気まずい？',
      '下面哪种更尴尬？',
      '下面哪種更尷尬？',
      'Tình huống nào khó chịu hơn?',
      'Situasi mana yang lebih canggung?'
    ),
    options: [
      opt(
        T(
          '연인이 계산할 때마다 눈치를 보는 것',
          'Partner gets nervous every time the bill comes',
          '恋人が会計のたびに空気を読んでしまうこと',
          '对方一到结账就察言观色',
          '對方一到結帳就察言觀色',
          'Người yêu cứ dè chừng mỗi lần tính tiền',
          'Pacar selalu canggung tiap kali bayar'
        ),
        'stat'
      ),
      opt(
        T(
          '연인이 정산 앱을 켜고 정확히 나누는 것',
          'Partner opens a split app and divides to the cent',
          '恋人が精算アプリを開いてきっちり分けること',
          '对方打开分账 App 精确到分',
          '對方打開分帳 App 精確到分',
          'Người yêu mở app chia tiền sát từng đồng',
          'Pacar buka app split dan bagi sampai sen'
        ),
        'stat'
      ),
    ],
  },
];

export const phase3DatingCostBalanceGameResults: Phase3DatingCostBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '⚖️',
    title: T(
      '반반이 곧 존중인 사람, 더치 공정파',
      'Fifty-fifty is respect — Dutch Fair Type',
      '半分が尊重、割り勘公正派',
      'AA 就是尊重，公平分账派',
      '各付各的就是尊重，公平分帳派',
      'Chia đều là tôn trọng — Kiểu Dutch Công Bằng',
      'Bagi rata adalah rasa hormat — Tipe Dutch Adil'
    ),
    shortDescription: T(
      '정확히 나누고 규칙을 지키는 공정형',
      'Splits cleanly and keeps the rules',
      'きっちり分けてルールを守る公正タイプ',
      '算得清楚、守规矩的公平型',
      '算得清楚、守規矩的公平型',
      'Chia rõ ràng và giữ đúng luật',
      'Bagi rapi dan pegang aturan'
    ),
    quote: T(
      '당신은 서로 똑같이 부담하는 것을 존중으로 여기고, 정한 기준을 지킵니다.',
      'You see equal contribution as respect—and you stick to what you agreed.',
      '同等の負担を尊重だと考え、決めた基準を守ります。',
      '你把彼此同等分担看作尊重，并守住既定标准。',
      '你把彼此同等分擔看作尊重，並守住既定標準。',
      'Bạn coi cùng góp phần là tôn trọng—và giữ đúng thỏa thuận.',
      'Kamu anggap berbagi beban sama rata sebagai rasa hormat—dan pegang kesepakatan.'
    ),
    description: T(
      '돈 때문에 마음이 상할 일이 적고 관계가 투명하지만, 계산이 지나치면 분위기가 건조해질 수 있습니다.',
      'Money rarely breeds hurt and things stay clear—but too much math can dry out the vibe.',
      'お金で心が傷つくことは少なく関係は透明だが、計算が過ぎると空気が乾きやすい。',
      '很少因钱伤感情，关系也透明，但算得太细气氛会干巴。',
      '很少因錢傷感情，關係也透明，但算得太細氣氛會乾巴。',
      'Ít tổn thương vì tiền, quan hệ rõ ràng—nhưng tính toán quá làm không khí khô.',
      'Jarang sakit hati soal uang dan hubungan transparan—tapi terlalu hitung bisa membuat suasana kering.'
    ),
    typeLabel: T(
      '더치 공정파 ⚖️',
      'Dutch Fair Type ⚖️',
      '割り勘公正派 ⚖️',
      '公平分账派 ⚖️',
      '公平分帳派 ⚖️',
      'Kiểu Dutch Công Bằng ⚖️',
      'Tipe Dutch Adil ⚖️'
    ),
    characteristics: T(
      '공정·반반·규칙·투명',
      'Fair, fifty-fifty, rules, clear',
      '公正・割り勘・ルール・透明',
      '公平、AA、规矩、透明',
      '公平、各付各的、規矩、透明',
      'Công bằng, chia đôi, quy tắc, minh bạch',
      'Adil, bagi rata, aturan, transparan'
    ),
    livingStyle: T(
      '정산 앱으로 나누고 기한과 기준을 지킴',
      'Splits with an app and keeps deadlines & rules',
      '精算アプリで分け、期限と基準を守る',
      '用分账 App 算清，守期限和标准',
      '用分帳 App 算清，守期限和標準',
      'Chia bằng app và giữ hạn cùng chuẩn',
      'Bagi pakai app dan pegang tenggat serta aturan'
    ),
    strengths: T(
      '돈으로 인한 오해와 서운함이 쌓이지 않는 투명함',
      'Clarity that keeps money misunderstandings from piling up',
      'お金の誤解や悔しさが溜まらない透明さ',
      '钱上误会和委屈不易堆积的透明感',
      '錢上誤會和委屈不易堆積的透明感',
      'Minh bạch khiến hiểu lầm và ấm ức vì tiền khó chất',
      'Transparansi yang mencegah salah paham & sakit hati soal uang'
    ),
    caution: T(
      '계산이 앞서 정서적 여유가 줄 수 있음',
      'Math can come first and squeeze emotional ease',
      '計算が先に立ち、心の余裕が減ることがある',
      '算账抢先，情感余裕可能变少',
      '算帳搶先，情感餘裕可能變少',
      'Tính toán đi trước có thể làm giảm dư địa cảm xúc',
      'Hitung-hitungan bisa mendahului dan menyempitkan ruang emosional'
    ),
    goodMatch: T(
      '번갈아 균형파 (내 기준 안에서 상대가 유연함을 더해 줌)',
      'Take-Turns Balance (they add flexibility inside your frame)',
      '交代バランス派（自分の基準の中で相手が柔軟さを足してくれる）',
      '轮流平衡派（在你的框架里补上灵活）',
      '輪流平衡派（在你的框架裡補上靈活）',
      'Kiểu Luân Phiên Cân Bằng (họ thêm linh hoạt trong khung của bạn)',
      'Tipe Giliran Seimbang (mereka menambah fleksibilitas dalam kerangkamu)'
    ),
    tips: T(
      '기념일이나 생일만큼은 정산 없이 마음 가는 대로 쓰는 날로 정하기\n소액은 넘어가는 기준(예: 1만 원 이하)을 정해 두기\n공정함을 말할 때 "너를 위해 나눠서 편하게 하자"는 말투로 전하기',
      'Make anniversaries & birthdays “no-split, spend from the heart” days\nAgree a small-amount skip rule (e.g. under $10)\nFrame fairness as “let’s split so we both feel easy”',
      '記念日や誕生日は精算なしで気持ちよく使う日にする\n少額は流す基準（例：千円以下）を決めておく\n公正さを「お互い楽にしよう」という言い方で伝える',
      '纪念日和生日定为不算账、随心花的日子\n定个小额不算规则（如 50 元以下）\n谈公平时用“为了彼此轻松才 AA”的说法',
      '紀念日和生日定為不算帳、隨心花的日子\n定個小額不算規則（如 200 元以下）\n談公平時用「為了彼此輕鬆才各付」的說法',
      'Ngày kỷ niệm/sinh nhật: chi theo cảm xúc, không chia\nĐặt ngưỡng bỏ qua số nhỏ (vd dưới 100 nghìn)\nNói công bằng theo kiểu “chia để cả hai thấy dễ”',
      'Jadikan anniversary & ulang tahun hari tanpa split, ikut hati\nSepakati batas kecil yang dilewatkan (mis. di bawah 50 ribu)\nSampaikan keadilan sebagai “bagi supaya sama-sama enak”'
    ),
    oneLiner: T(
      '공정함은 좋은 토대입니다. 가끔의 넉넉함이 온기가 됩니다',
      'Fairness is a solid base. Occasional generosity adds warmth.',
      '公正さは良い土台。たまの余裕が温かさになる。',
      '公平是好底子。偶尔的大方会带来温度。',
      '公平是好底子。偶爾的大方會帶來溫度。',
      'Công bằng là nền vững. Đôi lần rộng rãi thêm ấm áp.',
      'Keadilan fondasi bagus. Sesekali longgar menambah kehangatan.'
    ),
    shareLine: T(
      '밸런스 게임 — 데이트 비용 극한편 결과: 더치 공정파 ⚖️ 반반이 곧 존중인 타입이래ㅋㅋ 나와 같은 선택 몇 %인지 인증! 내가 다 내고 연인 매번 지각 vs 더치페이하지만 정시 도착?',
      'Balance Game — Date Money Extreme result: Dutch Fair Type ⚖️ Fifty-fifty is respect lol. Match my picks %! I always pay but they’re late vs we split but they’re on time?',
      'バランスゲーム — デート代極限編 結果：割り勘公正派 ⚖️ 半分が尊重なタイプらしいwww 同じ選択％を認証！全部出すが毎回遅刻 vs 割り勘だがいつも時間どおり？',
      '平衡游戏 — 约会花钱极限篇结果：公平分账派 ⚖️ 原来 AA 就是尊重哈哈。来对一下同款选择％！我全付但对方总迟到 vs AA 但总准时？',
      '平衡遊戲 — 約會花錢極限篇結果：公平分帳派 ⚖️ 原來各付就是尊重哈哈。來對一下同款選擇％！我全付但對方總遲到 vs 各付但總準時？',
      'Trò cân bằng — Chi phí hẹn hò cực hạn: Kiểu Dutch Công Bằng ⚖️ Chia đều là tôn trọng lol. Đối % lựa chọn giống mình! Tôi trả hết nhưng họ muộn vs chia tiền nhưng đúng giờ?',
      'Permainan seimbang — Biaya kencan ekstrem: Tipe Dutch Adil ⚖️ Bagi rata = rasa hormat wkwk. Cocokkan % pilihanmu! Aku bayar semua tapi mereka telat vs bagi tapi tepat waktu?'
    ),
  },
  {
    type: 'Type2',
    emoji: '👑',
    title: T(
      '내가 내기로 정한 사람, 베푸는 리더파',
      'I decided I’ll pay — Generous Leader Type',
      '自分が払うと決めた人、気前いいリーダー派',
      '认定该我付，大方担当派',
      '認定該我付，大方擔當派',
      'Tôi quyết mình trả — Kiểu Lãnh Đạo Hào Phóng',
      'Aku putuskan aku yang bayar — Tipe Pemimpin Dermawan'
    ),
    shortDescription: T(
      '내가 책임지고 이끄는 든든한 부담형',
      'Takes charge and covers with steady confidence',
      '自分が責任を持ってリードする頼もしい負担タイプ',
      '主动担责、给人安全感的承担型',
      '主動擔責、給人安全感的承擔型',
      'Gánh trách nhiệm và dẫn dắt vững vàng',
      'Bertanggung jawab dan memimpin dengan mantap'
    ),
    quote: T(
      '당신은 데이트에서 내가 더 내는 역할을 스스로 정하고 꾸준히 지킵니다.',
      'You choose the “I cover more” role on dates—and keep showing up that way.',
      'デートでは自分が多めに出す役割を自分で決め、きちんと続けます。',
      '你在约会里主动认定“我多付”的角色，并持续做到。',
      '你在約會裡主動認定「我多付」的角色，並持續做到。',
      'Bạn tự chọn vai “tôi trả nhiều hơn” khi hẹn—và giữ đều đặn.',
      'Kamu memilih peran “aku bayar lebih” saat kencan—dan konsisten.'
    ),
    description: T(
      '연인에게 든든함을 주지만, 한쪽만 부담하는 구조가 길어지면 서운함과 재정 부담이 쌓일 수 있습니다.',
      'Partners feel secure—but one-sided covering too long can breed hurt and money stress.',
      '恋人に安心感を与えるが、片側だけの負担が続くと悔しさと金銭負担が溜まりやすい。',
      '给对方安全感，但长期单边承担可能积下委屈和财务压力。',
      '給對方安全感，但長期單邊承擔可能積下委屈和財務壓力。',
      'Người yêu thấy vững—nhưng một phía trả mãi dễ tích ấm ức và áp lực tiền.',
      'Pacar merasa aman—tapi beban sepihak lama-lama bisa menumpuk sakit hati dan tekanan finansial.'
    ),
    typeLabel: T(
      '베푸는 리더파 👑',
      'Generous Leader Type 👑',
      '気前いいリーダー派 👑',
      '大方担当派 👑',
      '大方擔當派 👑',
      'Kiểu Lãnh Đạo Hào Phóng 👑',
      'Tipe Pemimpin Dermawan 👑'
    ),
    characteristics: T(
      '책임·든든함·베풂·역할 고정',
      'Responsibility, steady, giving, fixed role',
      '責任・頼もしさ・気前・役割固定',
      '责任、稳妥、大方、角色固定',
      '責任、穩妥、大方、角色固定',
      'Trách nhiệm, vững vàng, hào phóng, vai cố định',
      'Tanggung jawab, mantap, dermawan, peran tetap'
    ),
    livingStyle: T(
      '먼저 카드를 내밀고 큰 선물도 직접 부담함',
      'Cards out first; big gifts covered yourself',
      '先にカードを出し、大きなプレゼントも自分で負担',
      '先刷卡，大礼也自己扛',
      '先刷卡，大禮也自己扛',
      'Đưa thẻ trước; quà lớn tự chịu',
      'Kartu duluan; hadiah besar ditanggung sendiri'
    ),
    strengths: T(
      '연인이 안정감을 느끼는 든든한 태도',
      'A steady vibe that makes a partner feel safe',
      '恋人が安心できる頼もしい態度',
      '让对方感到安心的稳妥态度',
      '讓對方感到安心的穩妥態度',
      'Thái độ vững khiến người yêu an tâm',
      'Sikap mantap yang bikin pacar merasa aman'
    ),
    caution: T(
      '말하지 않은 기대와 서운함이 쌓일 수 있음',
      'Unspoken expectations and quiet hurt can pile up',
      '言わない期待と悔しさが積み重なることがある',
      '没说出口的期待和委屈可能越积越多',
      '沒說出口的期待和委屈可能越積越多',
      'Kỳ vọng không nói và ấm ức có thể chất chồng',
      'Ekspektasi yang tak diucapkan & sakit hati bisa menumpuk'
    ),
    goodMatch: T(
      '형편 맞춤파 (상대가 형편에 맞춰 돌려주며 균형을 만듦)',
      'Means-Flexible Type (they give back as they can and rebalance)',
      '懐事情合わせ派（相手が事情に合わせて返し、バランスを作る）',
      '量力而行派（对方按情况回馈，形成平衡）',
      '量力而行派（對方按情況回饋，形成平衡）',
      'Kiểu Theo Khả Năng (họ đáp lại theo sức và cân bằng lại)',
      'Tipe Sesuai Kemampuan (mereka membalas sebisanya dan menyeimbangkan)'
    ),
    tips: T(
      '내가 내는 데에 기대하는 것이 있는지 솔직하게 점검하기\n월 지출 상한을 정해 두고 넘으면 상의하기\n가끔은 상대가 내게 베풀 기회를 주기',
      'Check honestly what you expect in return for covering\nSet a monthly spend cap and talk when you hit it\nSometimes let them treat you',
      '自分が払うことに何を期待しているか正直に点検する\n月の支出上限を決め、超えたら相談する\nたまに相手がおごる機会を作る',
      '诚实检查：自己多付时其实期待什么\n定好月支出上限，超了就商量\n偶尔让对方请你',
      '誠實檢查：自己多付時其實期待什麼\n定好月支出上限，超了就商量\n偶爾讓對方請你',
      'Thành thật kiểm: khi trả nhiều mình kỳ vọng gì\nĐặt trần chi tháng; vượt thì bàn\nThỉnh thoảng để họ đãi mình',
      'Cek jujur: saat bayar, apa yang kamu harapkan?\nTetapkan batas bulanan; kalau kelewatan, bicara\nSesekali biarkan mereka yang traktir'
    ),
    oneLiner: T(
      '든든한 베풂은 큰 장점입니다. 한도와 받는 연습이 오래가게 합니다',
      'Steady generosity is a gift. Limits—and learning to receive—make it last.',
      '頼もしい気前のよさは強み。上限と「受け取る練習」が長続きさせる。',
      '稳妥的大方是优点。设上限、学会接受，才能长久。',
      '穩妥的大方是優點。設上限、學會接受，才能長久。',
      'Hào phóng vững là điểm mạnh. Trần chi và biết nhận giúp giữ lâu.',
      'Kedermawanan yang mantap adalah kekuatan. Batas & latihan menerima membuatnya awet.'
    ),
    shareLine: T(
      '밸런스 게임 — 데이트 비용 극한편 결과: 베푸는 리더파 👑 내가 책임지고 이끄는 타입이래... 나와 같은 선택 몇 %인지 인증! 내가 다 내고 연인 매번 지각 vs 더치페이하지만 정시 도착?',
      'Balance Game — Date Money Extreme result: Generous Leader 👑 I take the lead and cover… Match my picks %! I always pay but they’re late vs we split but they’re on time?',
      'バランスゲーム — デート代極限編 結果：気前いいリーダー派 👑 責任を持ってリードするタイプらしい… 同じ選択％を認証！全部出すが毎回遅刻 vs 割り勘だがいつも時間どおり？',
      '平衡游戏 — 约会花钱极限篇结果：大方担当派 👑 原来是主动担责的类型…来对一下同款选择％！我全付但对方总迟到 vs AA 但总准时？',
      '平衡遊戲 — 約會花錢極限篇結果：大方擔當派 👑 原來是主動擔責的類型…來對一下同款選擇％！我全付但對方總遲到 vs 各付但總準時？',
      'Trò cân bằng — Chi phí hẹn hò cực hạn: Kiểu Lãnh Đạo Hào Phóng 👑 Mình gánh và dẫn… Đối % lựa chọn giống mình! Tôi trả hết nhưng họ muộn vs chia tiền nhưng đúng giờ?',
      'Permainan seimbang — Biaya kencan ekstrem: Tipe Pemimpin Dermawan 👑 Aku yang tanggung & pimpin… Cocokkan % pilihanmu! Aku bayar semua tapi mereka telat vs bagi tapi tepat waktu?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌿',
    title: T(
      '형편 되는 사람이 더 내는 사람, 형편 맞춤파',
      'Whoever can afford more pays — Means-Flexible Type',
      '余裕がある方が多めに出す、懐事情合わせ派',
      '谁更宽裕谁多付，量力而行派',
      '誰更寬裕誰多付，量力而行派',
      'Ai dư hơn thì trả nhiều — Kiểu Theo Khả Năng',
      'Siapa yang lebih longgar bayar lebih — Tipe Sesuai Kemampuan'
    ),
    shortDescription: T(
      '상황에 따라 더 여유 있는 쪽이 부담하는 배려형',
      'The more comfortable one covers, depending on the moment',
      '状況に応じて余裕のある方が負担する配慮タイプ',
      '看情况由更宽裕的一方承担的体贴型',
      '看情況由更寬裕的一方承擔的體貼型',
      'Tùy lúc, bên dư hơn chịu — kiểu quan tâm',
      'Situasional, yang lebih longgar menanggung — tipe peduli'
    ),
    quote: T(
      '당신은 규칙보다 두 사람의 현재 형편을 보고 더 여유 있는 쪽이 낸다고 생각합니다.',
      'You care more about where you both stand right now than rigid rules—whoever’s freer covers.',
      'ルールより二人の今の事情を見て、余裕のある方が出すと考えます。',
      '你更看当下彼此的状况，而不是死规矩——谁更宽裕谁付。',
      '你更看當下彼此的狀況，而不是死規矩——誰更寬裕誰付。',
      'Bạn ưu tiên hoàn cảnh hiện tại hơn luật cứng—ai dư hơn thì trả.',
      'Kamu lebih lihat kondisi kalian sekarang ketimbang aturan kaku—siapa yang lebih longgar yang bayar.'
    ),
    description: T(
      '배려가 깊고 유연하지만, 기준이 모호하면 한쪽이 계속 더 내는 구조가 될 수 있습니다.',
      'Deeply considerate and flexible—but vague standards can lock one person into forever covering more.',
      '配慮が深く柔軟だが、基準が曖昧だと片方がずっと多めに出す構造になりやすい。',
      '体贴又灵活，但标准模糊时容易变成一方长期多付。',
      '體貼又靈活，但標準模糊時容易變成一方長期多付。',
      'Quan tâm sâu và linh hoạt—nhưng chuẩn mơ hồ dễ thành một bên trả nhiều mãi.',
      'Peduli mendalam dan fleksibel—tapi standar kabur bisa membuat satu pihak terus bayar lebih.'
    ),
    typeLabel: T(
      '형편 맞춤파 🌿',
      'Means-Flexible Type 🌿',
      '懐事情合わせ派 🌿',
      '量力而行派 🌿',
      '量力而行派 🌿',
      'Kiểu Theo Khả Năng 🌿',
      'Tipe Sesuai Kemampuan 🌿'
    ),
    characteristics: T(
      '배려·형편·유연함·모호한 기준',
      'Care, means, flexible, fuzzy rules',
      '配慮・懐事情・柔軟・曖昧な基準',
      '体贴、量力、灵活、模糊标准',
      '體貼、量力、靈活、模糊標準',
      'Quan tâm, khả năng, linh hoạt, chuẩn mơ hồ',
      'Peduli, kemampuan, fleksibel, standar kabur'
    ),
    livingStyle: T(
      '사정에 따라 더 내거나 덜 내며 기록하지 않음',
      'Pays more or less by situation—no ledger kept',
      '事情に応じて多め／少なめに出し、記録は残さない',
      '按情况多付或少付，不记账',
      '按情況多付或少付，不記帳',
      'Tùy tình hình trả nhiều/ít—không ghi sổ',
      'Bayar lebih/kurang sesuai situasi—tanpa catatan'
    ),
    strengths: T(
      '돈 앞에서 상대의 사정을 먼저 헤아리는 따뜻함',
      'Warmth that puts a partner’s situation before the money',
      'お金の前に相手の事情を先に思いやる温かさ',
      '在钱面前先体谅对方处境的温度',
      '在錢面前先體諒對方處境的溫度',
      'Ấm áp đặt hoàn cảnh người kia trước chuyện tiền',
      'Kehangatan yang mendahulukan kondisi pasangan sebelum uang'
    ),
    caution: T(
      '기록과 기준이 없어 불균형이 쌓일 수 있음',
      'Without records or standards, imbalance can sneak in',
      '記録と基準がなく、アンバランスが積み重なることがある',
      '没有记录和标准，失衡可能悄悄堆积',
      '沒有記錄和標準，失衡可能悄悄堆積',
      'Không ghi chép/chuẩn thì mất cân bằng dễ tích',
      'Tanpa catatan & standar, ketidakseimbangan bisa menumpuk'
    ),
    goodMatch: T(
      '베푸는 리더파 (상대가 기준을 잡아 주어 내 배려가 안정됨)',
      'Generous Leader (their frame steadies your care)',
      '気前いいリーダー派（相手が基準を作ってくれ、配慮が安定する）',
      '大方担当派（对方立住标准，你的体贴更稳）',
      '大方擔當派（對方立住標準，你的體貼更穩）',
      'Kiểu Lãnh Đạo Hào Phóng (họ dựng khung giúp sự quan tâm của bạn ổn)',
      'Tipe Pemimpin Dermawan (kerangka mereka menstabilkan kepedulianmu)'
    ),
    tips: T(
      "한 달에 한 번 서로 쓴 비용을 가볍게 돌아보기\n'형편이 나아지면 돌려준다'는 기준을 말로 합의하기\n배려가 일방적이지 않은지 주고받음을 점검하기",
      'Once a month, lightly review what you each spent\nSay out loud: “I’ll make it up when I’m freer”\nCheck that care isn’t only one-way',
      '月に一度、使ったお金を軽く振り返る\n「余裕ができたら返す」基準を言葉で合意する\n配慮が一方通行になっていないか確認する',
      '每月轻松回顾一下彼此花了什么\n口头约定「宽裕了再回馈」\n检查体贴是不是只单向流动',
      '每月輕鬆回顧一下彼此花了什麼\n口頭約定「寬裕了再回饋」\n檢查體貼是不是只單向流動',
      'Mỗi tháng nhẹ nhàng ôn lại chi tiêu hai bên\nNói rõ: “khi dư hơn sẽ bù lại”\nKiểm sự quan tâm có một chiều không',
      'Sekali sebulan, review ringan pengeluaran kalian\nUcapkan: “nanti kalau longgar, aku balas”\nCek apakah kepedulian tidak satu arah'
    ),
    oneLiner: T(
      '형편을 헤아리는 마음은 따뜻합니다. 느슨한 기준 하나가 균형을 지켜 줍니다',
      'Reading each other’s means is warm. One loose rule keeps the balance.',
      '事情を思いやる心は温かい。ゆるい基準ひとつがバランスを守る。',
      '体谅彼此状况很温暖。一条松一点的标准就能守住平衡。',
      '體諒彼此狀況很溫暖。一條鬆一點的標準就能守住平衡。',
      'Thấu khả năng nhau thật ấm. Một chuẩn lỏng giữ cân bằng.',
      'Memahami kemampuan satu sama lain itu hangat. Satu aturan longgar menjaga keseimbangan.'
    ),
    shareLine: T(
      '밸런스 게임 — 데이트 비용 극한편 결과: 형편 맞춤파 🌿 여유 되는 사람이 더 내는 배려형이래ㅋㅋ 나와 같은 선택 몇 %인지 인증! 내가 다 내고 연인 매번 지각 vs 더치페이하지만 정시 도착?',
      'Balance Game — Date Money Extreme result: Means-Flexible 🌿 Whoever’s freer covers—care first lol. Match my picks %! I always pay but they’re late vs we split but they’re on time?',
      'バランスゲーム — デート代極限編 結果：懐事情合わせ派 🌿 余裕がある方が出す配慮タイプらしいwww 同じ選択％を認証！全部出すが毎回遅刻 vs 割り勘だがいつも時間どおり？',
      '平衡游戏 — 约会花钱极限篇结果：量力而行派 🌿 谁宽裕谁多付的体贴型哈哈。来对一下同款选择％！我全付但对方总迟到 vs AA 但总准时？',
      '平衡遊戲 — 約會花錢極限篇結果：量力而行派 🌿 誰寬裕誰多付的體貼型哈哈。來對一下同款選擇％！我全付但對方總遲到 vs 各付但總準時？',
      'Trò cân bằng — Chi phí hẹn hò cực hạn: Kiểu Theo Khả Năng 🌿 Ai dư hơn thì trả — quan tâm trước lol. Đối % lựa chọn giống mình! Tôi trả hết nhưng họ muộn vs chia tiền nhưng đúng giờ?',
      'Permainan seimbang — Biaya kencan ekstrem: Tipe Sesuai Kemampuan 🌿 Yang lebih longgar bayar lebih—peduli dulu wkwk. Cocokkan % pilihanmu! Aku bayar semua tapi mereka telat vs bagi tapi tepat waktu?'
    ),
  },
  {
    type: 'Type4',
    emoji: '🔄',
    title: T(
      '번갈아 내며 균형을 맞추는 사람, 번갈아 균형파',
      'We take turns and even out — Take-Turns Balance Type',
      '交代で出してバランスを取る、交代バランス派',
      '轮流付、慢慢找平，轮流平衡派',
      '輪流付、慢慢找平，輪流平衡派',
      'Luân phiên trả và cân bằng — Kiểu Luân Phiên Cân Bằng',
      'Bergiliran bayar dan seimbangkan — Tipe Giliran Seimbang'
    ),
    shortDescription: T(
      '번갈아 내고 상황에 따라 조율하는 유연한 공정형',
      'Takes turns and adjusts—fair without being rigid',
      '交代で出し、状況に合わせて調整する柔軟な公正タイプ',
      '轮流付、随情况微调的灵活公平型',
      '輪流付、隨情況微調的靈活公平型',
      'Luân phiên và điều chỉnh — công bằng linh hoạt',
      'Bergiliran dan menyesuaikan — adil yang fleksibel'
    ),
    quote: T(
      '당신은 정확한 반반보다 번갈아 내며 서로 비슷하게 맞추는 방식을 좋아합니다.',
      'You prefer taking turns over exact fifty-fifty—until it roughly evens out.',
      'きっちり半分より、交代で出してだいたい揃える方が好きです。',
      '比起精确 AA，你更喜欢轮流付，大致找平。',
      '比起精確各付，你更喜歡輪流付，大致找平。',
      'Bạn thích luân phiên hơn chia sát 50/50—cho tới khi gần bằng.',
      'Kamu lebih suka bergiliran daripada 50/50 pas—sampai kira-kira seimbang.'
    ),
    description: T(
      '계산이 덜 팍팍하고 균형도 유지하지만, 번갈아 내는 순서를 놓치면 서로 기억이 달라질 수 있습니다.',
      'Less harsh math with real balance—but if the turn order slips, memories diverge.',
      '計算はキツくなくバランスも保てるが、交代の順番を見失うと記憶が食い違いやすい。',
      '不算得太狠也守得住平衡，但轮流顺序一乱，记忆就容易对不上。',
      '不算得太狠也守得住平衡，但輪流順序一亂，記憶就容易對不上。',
      'Ít tính toán gắt mà vẫn cân—nhưng lệch thứ tự thì nhớ khác nhau.',
      'Hitungan tidak keras tapi tetap seimbang—tapi kalau urutan giliran kacau, ingatan bisa beda.'
    ),
    typeLabel: T(
      '번갈아 균형파 🔄',
      'Take-Turns Balance Type 🔄',
      '交代バランス派 🔄',
      '轮流平衡派 🔄',
      '輪流平衡派 🔄',
      'Kiểu Luân Phiên Cân Bằng 🔄',
      'Tipe Giliran Seimbang 🔄'
    ),
    characteristics: T(
      '번갈아·유연한 공정·균형·순서',
      'Take turns, flexible fairness, balance, order',
      '交代・柔軟な公正・バランス・順番',
      '轮流、灵活公平、平衡、顺序',
      '輪流、靈活公平、平衡、順序',
      'Luân phiên, công bằng linh hoạt, cân bằng, thứ tự',
      'Giliran, adil fleksibel, seimbang, urutan'
    ),
    livingStyle: T(
      '오늘은 내가, 다음엔 상대가 내는 식으로 이어 감',
      'Today me, next time you—and so on',
      '今日は自分、次は相手、と続けていく',
      '今天我付，下次你付，这样轮下去',
      '今天我付，下次你付，這樣輪下去',
      'Hôm nay tôi, lần sau bạn—cứ thế',
      'Hari ini aku, berikutnya kamu—begitu seterusnya'
    ),
    strengths: T(
      '공정함과 여유를 함께 지키는 현실적인 감각',
      'A practical sense that holds fairness and ease together',
      '公正さと余裕を両立する現実的な感覚',
      '兼顾公平与余裕的现实感',
      '兼顧公平與餘裕的現實感',
      'Cảm giác thực tế giữ cả công bằng lẫn dư địa',
      'Rasa praktis yang menjaga keadilan sekaligus kelonggaran'
    ),
    caution: T(
      '순서와 규모가 어긋나면 서운함이 생길 수 있음',
      'If turns or amounts drift, quiet hurt can appear',
      '順番や金額がずれると悔しさが出やすい',
      '顺序或金额一偏，委屈就容易冒出来',
      '順序或金額一偏，委屈就容易冒出來',
      'Lệch thứ tự/quy mô thì ấm ức dễ sinh',
      'Kalau urutan atau jumlah meleset, sakit hati bisa muncul'
    ),
    goodMatch: T(
      '더치 공정파 (상대의 기준이 내 유연함을 받쳐 줌)',
      'Dutch Fair Type (their structure supports your flexibility)',
      '割り勘公正派（相手の基準が自分の柔軟さを支えてくれる）',
      '公平分账派（对方的标准托住你的灵活）',
      '公平分帳派（對方的標準托住你的靈活）',
      'Kiểu Dutch Công Bằng (khung của họ chống đỡ sự linh hoạt của bạn)',
      'Tipe Dutch Adil (kerangka mereka menopang fleksibilitasmu)'
    ),
    tips: T(
      '번갈아 내는 대략의 순서를 메모로 남기기\n비싼 날과 가벼운 날을 어떻게 맞출지 미리 이야기하기\n큰 차이가 날 때만 가볍게 정산하자고 합의하기',
      'Jot a rough turn order\nTalk ahead about matching pricey nights with light ones\nAgree to settle only when the gap gets big',
      '交代の大まかな順番をメモしておく\n高い日と軽い日の合わせ方を先に話す\n差が大きくなったときだけ軽く精算すると決める',
      '随手记一下大致轮流顺序\n事先聊聊贵的那顿和轻的那顿怎么对\n只在差额变大时再轻轻算一下',
      '隨手記一下大致輪流順序\n事先聊聊貴的那頓和輕的那頓怎麼對\n只在差額變大時再輕輕算一下',
      'Ghi sơ thứ tự luân phiên\nBàn trước cách ghép ngày đắt với ngày nhẹ\nChỉ chia lại khi chênh lệch lớn',
      'Catat urutan giliran kasar\nBicarakan dulu cara menyeimbangkan malam mahal & ringan\nSepakati settle hanya kalau selisih sudah besar'
    ),
    oneLiner: T(
      '번갈아 내는 균형은 가장 현실적입니다. 가벼운 메모 하나면 충분합니다',
      'Taking turns is the most realistic balance. One light note is enough.',
      '交代で取るバランスが一番現実的。軽いメモひとつで十分。',
      '轮流找平最现实。一张轻便的小备注就够。',
      '輪流找平最現實。一張輕便的小備註就夠。',
      'Luân phiên là cân bằng thực tế nhất. Một ghi chú nhẹ là đủ.',
      'Bergiliran adalah keseimbangan paling realistis. Satu catatan ringan sudah cukup.'
    ),
    shareLine: T(
      '밸런스 게임 — 데이트 비용 극한편 결과: 번갈아 균형파 🔄 번갈아 내며 균형 맞추는 타입이래... 나와 같은 선택 몇 %인지 인증! 내가 다 내고 연인 매번 지각 vs 더치페이하지만 정시 도착?',
      'Balance Game — Date Money Extreme result: Take-Turns Balance 🔄 We rotate and even out… Match my picks %! I always pay but they’re late vs we split but they’re on time?',
      'バランスゲーム — デート代極限編 結果：交代バランス派 🔄 交代でバランスを取るタイプらしい… 同じ選択％を認証！全部出すが毎回遅刻 vs 割り勘だがいつも時間どおり？',
      '平衡游戏 — 约会花钱极限篇结果：轮流平衡派 🔄 原来是轮流找平的类型…来对一下同款选择％！我全付但对方总迟到 vs AA 但总准时？',
      '平衡遊戲 — 約會花錢極限篇結果：輪流平衡派 🔄 原來是輪流找平的類型…來對一下同款選擇％！我全付但對方總遲到 vs 各付但總準時？',
      'Trò cân bằng — Chi phí hẹn hò cực hạn: Kiểu Luân Phiên Cân Bằng 🔄 Luân phiên cho cân… Đối % lựa chọn giống mình! Tôi trả hết nhưng họ muộn vs chia tiền nhưng đúng giờ?',
      'Permainan seimbang — Biaya kencan ekstrem: Tipe Giliran Seimbang 🔄 Bergiliran sampai seimbang… Cocokkan % pilihanmu! Aku bayar semua tapi mereka telat vs bagi tapi tepat waktu?'
    ),
  },
];

export const PHASE3_DATING_COST_BALANCE_META = {
  title: T(
    '밸런스 게임 — 데이트 비용 극한편',
    'Balance Game — Date Money (Extreme)',
    'バランスゲーム — デート代 極限編',
    '平衡游戏 — 约会花钱极限篇',
    '平衡遊戲 — 約會花錢極限篇',
    'Trò cân bằng — Chi phí hẹn hò (cực hạn)',
    'Permainan seimbang — Biaya kencan (ekstrem)'
  ),
  description: T(
    '내가 다 내는 대신 연인이 매번 지각 vs 더치페이하지만 늘 정시 도착. 12라운드 극한 선택으로 나의 데이트 비용 스타일을 알려드립니다.',
    'I always pay but they’re late every time vs we split and they’re always on time. Twelve extreme rounds reveal your date-money style.',
    '全部出す代わりに毎回遅刻 vs 割り勘だがいつも時間どおり。12ラウンドの極限選択でデート代スタイルがわかります。',
    '我全付但对方每次迟到 vs AA 但总准时。12 轮极限二选一，看看你的约会花钱风格。',
    '我全付但對方每次遲到 vs 各付但總準時。12 輪極限二選一，看看你的約會花錢風格。',
    'Tôi trả hết nhưng họ luôn muộn vs chia tiền nhưng luôn đúng giờ. 12 vòng cực hạn cho thấy kiểu chi tiêu hẹn hò của bạn.',
    'Aku bayar semua tapi mereka selalu telat vs bagi tagihan tapi selalu tepat waktu. 12 ronde ekstrem mengungkap gaya biaya kencanmu.'
  ),
  tags: {
    ko: ['밸런스게임', '데이트비용', '연애테스트'],
    en: ['balance game', 'date money', 'dating test'],
    ja: ['バランスゲーム', 'デート代', '恋愛テスト'],
    'zh-CN': ['平衡游戏', '约会花钱', '恋爱测试'],
    'zh-TW': ['平衡遊戲', '約會花錢', '戀愛測試'],
    vi: ['trò cân bằng', 'chi phí hẹn hò', 'test tình cảm'],
    id: ['permainan seimbang', 'biaya kencan', 'tes pacaran'],
  } as Record<Phase3DatingCostBalanceLocaleKey, string[]>,
};
