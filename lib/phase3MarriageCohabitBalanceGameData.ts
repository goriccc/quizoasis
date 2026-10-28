/**
 * 밸런스 게임 — 결혼·동거 극한편
 * slug: phase3-marriage-cohabit-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 */

export type Phase3MarriageCohabitBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3MarriageCohabitBalanceText = Record<Phase3MarriageCohabitBalanceLocaleKey, string>;
export type Phase3MarriageCohabitPolar = 'freedom' | 'bond' | 'reality' | 'romance' | 'stat';

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3MarriageCohabitBalanceText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

function opt(
  texts: Phase3MarriageCohabitBalanceText,
  polar: Phase3MarriageCohabitPolar
): { text: Phase3MarriageCohabitBalanceText; polar: Phase3MarriageCohabitPolar } {
  return { text: texts, polar };
}

export interface Phase3MarriageCohabitBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3MarriageCohabitBalanceText;
  options: { text: Phase3MarriageCohabitBalanceText; polar: Phase3MarriageCohabitPolar }[];
}

export interface Phase3MarriageCohabitBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3MarriageCohabitBalanceText;
  shortDescription: Phase3MarriageCohabitBalanceText;
  quote: Phase3MarriageCohabitBalanceText;
  description: Phase3MarriageCohabitBalanceText;
  typeLabel: Phase3MarriageCohabitBalanceText;
  characteristics: Phase3MarriageCohabitBalanceText;
  livingStyle: Phase3MarriageCohabitBalanceText;
  strengths: Phase3MarriageCohabitBalanceText;
  caution: Phase3MarriageCohabitBalanceText;
  goodMatch: Phase3MarriageCohabitBalanceText;
  tips: Phase3MarriageCohabitBalanceText;
  oneLiner: Phase3MarriageCohabitBalanceText;
  shareLine: Phase3MarriageCohabitBalanceText;
}

export function marriageCohabitText(text: Phase3MarriageCohabitBalanceText, locale: string): string {
  const loc = locale as Phase3MarriageCohabitBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3MarriageCohabitBalanceGameResult(
  questions: Phase3MarriageCohabitBalanceGameQuestion[],
  answers: number[]
): string {
  let freedom = 0;
  let bond = 0;
  let reality = 0;
  let romance = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'freedom') freedom += 1;
    else if (polar === 'bond') bond += 1;
    else if (polar === 'reality') reality += 1;
    else if (polar === 'romance') romance += 1;
  });

  const axisA = freedom >= 3 ? 'freedom' : 'bond';
  const axisB = reality >= 3 ? 'reality' : 'romance';

  if (axisA === 'freedom' && axisB === 'reality') return 'Type1';
  if (axisA === 'freedom' && axisB === 'romance') return 'Type2';
  if (axisA === 'bond' && axisB === 'reality') return 'Type3';
  return 'Type4';
}

export const phase3MarriageCohabitBalanceGameQuestions: Phase3MarriageCohabitBalanceGameQuestion[] = [
  {
    id: 1,
    scored: true,
    question: T(
      '함께 살 집의 잠자리를 정한다. 나는?',
      'Deciding how you’ll sleep in the place you share. You’d rather…',
      '一緒に住む家の寝方を決める。あなたは？',
      '商量一起住的睡觉方式。你会？',
      '商量一起住的睡覺方式。你會？',
      'Quyết định cách ngủ khi sống chung. Bạn sẽ?',
      'Menentukan cara tidur di rumah bersama. Kamu?'
    ),
    options: [
      opt(
        T(
          '각방을 써서 숙면은 지키지만 부부 사이가 멀어질 수 있다',
          'Separate rooms for better sleep—but you might feel more distant',
          '別々の部屋でよく眠れるが、距離が開くかもしれない',
          '分房睡得香，但感情可能变远',
          '分房睡得香，但感情可能變遠',
          'Ngủ riêng để ngon giấc, nhưng dễ xa cách',
          'Kamar terpisah biar tidur nyenyak, tapi bisa jadi jauh'
        ),
        'freedom'
      ),
      opt(
        T(
          '한방을 써서 가까워지지만 뒤척임과 코골이에 잠을 설친다',
          'One bed for closeness—but tossing, turning, and snoring ruin sleep',
          '一部屋で近づけるが、寝返りやいびきで眠れない',
          '同床更亲近，但翻身打鼾睡不好',
          '同床更親近，但翻身打鼾睡不好',
          'Ngủ chung gần hơn, nhưng trở mình và ngáy làm mất ngủ',
          'Satu kasur biar dekat, tapi bergeser dan mendengkur bikin begadang'
        ),
        'bond'
      ),
    ],
  },
  {
    id: 2,
    scored: true,
    question: T(
      '월급이 들어오는 날이다. 나는?',
      'Payday. You’d rather…',
      '給料日だ。あなたは？',
      '发工资的日子。你会？',
      '發工資的日子。你會？',
      'Ngày nhận lương. Bạn sẽ?',
      'Hari gajian. Kamu?'
    ),
    options: [
      opt(
        T(
          '모든 수입을 한 통장에 합치지만 내 쓰임새를 일일이 상의해야 한다',
          'Pool every paycheck—but clear every spend together',
          '収入は全部一つの口座に。でも使うたび相談が必要',
          '收入全进一个账户，但花钱都得商量',
          '收入全進一個帳戶，但花錢都得商量',
          'Gộp hết vào một tài khoản, nhưng chi tiêu phải bàn từng khoản',
          'Gabungkan semua ke satu rekening, tapi tiap belanja harus dibahas'
        ),
        'bond'
      ),
      opt(
        T(
          '각자 통장을 따로 쓰지만 목돈이 필요할 때 서로 눈치를 본다',
          'Keep separate accounts—but big purchases get awkward',
          '口座は別々。でも大きなお金が要るとき気を使う',
          '各管各的账户，但要大笔钱时会尴尬',
          '各管各的帳戶，但要大筆錢時會尷尬',
          'Tài khoản riêng, nhưng khi cần tiền lớn lại ngại nhau',
          'Rekening terpisah, tapi saat butuh uang besar jadi saling sungkan'
        ),
        'freedom'
      ),
    ],
  },
  {
    id: 3,
    scored: true,
    question: T(
      '주말 계획을 세운다. 나는?',
      'Planning the weekend. You’d rather…',
      '週末の予定を立てる。あなたは？',
      '安排周末。你会？',
      '安排週末。你會？',
      'Lên kế hoạch cuối tuần. Bạn sẽ?',
      'Merencanakan akhir pekan. Kamu?'
    ),
    options: [
      opt(
        T(
          '주말 하루는 각자 따로 보내지만 함께하는 시간이 줄어든다',
          'One day apart—but less time together',
          '週末の一日は別々に。でも一緒の時間が減る',
          '周末留一天各自过，但共处时间变少',
          '週末留一天各自過，但共處時間變少',
          'Một ngày cuối tuần riêng, nhưng ít thời gian bên nhau',
          'Satu hari akhir pekan sendiri, tapi waktu bareng berkurang'
        ),
        'freedom'
      ),
      opt(
        T(
          '주말은 늘 둘이 함께 보내지만 혼자만의 시간이 사라진다',
          'Always together on weekends—but alone time disappears',
          '週末はいつも一緒。でも一人の時間がなくなる',
          '周末总在一起，但没有独处时间',
          '週末總在一起，但沒有獨處時間',
          'Cuối tuần luôn bên nhau, nhưng mất thời gian một mình',
          'Akhir pekan selalu bareng, tapi waktu sendiri hilang'
        ),
        'bond'
      ),
    ],
  },
  {
    id: 4,
    scored: true,
    question: T(
      '서로의 휴대폰과 일정에 대한 생각은? 나는?',
      'About each other’s phones and schedules, you’d rather…',
      'お互いのスマホと予定について。あなたは？',
      '关于彼此的手机和日程，你会？',
      '關於彼此的手機和行程，你會？',
      'Về điện thoại và lịch của nhau, bạn sẽ?',
      'Soal HP dan jadwal satu sama lain, kamu?'
    ),
    options: [
      opt(
        T(
          '일정과 위치를 서로 모두 공유하지만 사생활이 줄어든다',
          'Share calendars and locations fully—but privacy shrinks',
          '予定も位置も全部共有。でもプライバシーが減る',
          '日程和位置全共享，但隐私变少',
          '行程和位置全共享，但隱私變少',
          'Chia sẻ hết lịch và vị trí, nhưng ít riêng tư',
          'Bagikan semua jadwal dan lokasi, tapi privasi berkurang'
        ),
        'bond'
      ),
      opt(
        T(
          '각자의 사생활을 존중하지만 상대의 하루를 잘 모르게 된다',
          'Respect privacy—but you know less about their day',
          'プライバシーは尊重。でも相手の一日が見えにくい',
          '尊重彼此隐私，但不太了解对方的一天',
          '尊重彼此隱私，但不太了解對方的一天',
          'Tôn trọng riêng tư, nhưng ít biết ngày của nhau',
          'Hormati privasi, tapi kurang tahu hari-hari pasangannya'
        ),
        'freedom'
      ),
    ],
  },
  {
    id: 5,
    scored: true,
    question: T(
      '친구 모임이 잡혔다. 나는?',
      'Friends made plans. You’d rather…',
      '友人の集まりが入った。あなたは？',
      '朋友约了局。你会？',
      '朋友約了局。你會？',
      'Bạn bè rủ đi chơi. Bạn sẽ?',
      'Teman ajak kumpul. Kamu?'
    ),
    options: [
      opt(
        T(
          '어디든 둘이 함께 가지만 각자의 친구 시간이 줄어든다',
          'Go everywhere as a pair—but less solo friend time',
          'どこでも二人で行く。でも各自の友人時間が減る',
          '走到哪都一起去，但各自见朋友的时间变少',
          '走到哪都一起去，但各自見朋友的時間變少',
          'Đi đâu cũng cùng nhau, nhưng ít thời gian bạn riêng',
          'Ke mana pun berdua, tapi waktu teman sendiri berkurang'
        ),
        'bond'
      ),
      opt(
        T(
          '각자 친구를 따로 만나지만 서로의 지인과 멀어질 수 있다',
          'See friends separately—but you drift from each other’s circle',
          '友人は別々に会う。でもお互いの知人と疎遠になるかも',
          '各自见朋友，但可能疏远彼此的圈子',
          '各自見朋友，但可能疏遠彼此的圈子',
          'Gặp bạn riêng, nhưng có thể xa mạng lưới của nhau',
          'Ketemu teman sendiri-sendiri, tapi bisa menjauh dari kenalan pasangan'
        ),
        'freedom'
      ),
    ],
  },
  {
    id: 6,
    scored: true,
    question: T(
      '결혼식을 준비한다. 나는?',
      'Planning the wedding. You’d rather…',
      '結婚式の準備。あなたは？',
      '筹备婚礼。你会？',
      '籌備婚禮。你會？',
      'Chuẩn bị đám cưới. Bạn sẽ?',
      'Menyiapkan pernikahan. Kamu?'
    ),
    options: [
      opt(
        T(
          '예산을 최소로 줄여 간소하게 하지만 평생 한 번의 추억은 아쉽다',
          'Keep it small and cheap—but the once-in-a-lifetime memory feels thin',
          '予算を抑えて質素に。でも一生一度の思い出は惜しい',
          '尽量省钱从简，但一辈子一次的仪式有点可惜',
          '盡量省錢從簡，但一輩子一次的儀式有點可惜',
          'Tiết kiệm tối đa, giản dị—nhưng tiếc kỷ niệm một lần trong đời',
          'Hemat maksimal dan sederhana—tapi kenangan sekali seumur hidup terasa sayang'
        ),
        'reality'
      ),
      opt(
        T(
          '큰돈을 들여 꿈꾸던 예식을 올리지만 신혼 자금이 빠듯해진다',
          'Spend big on the dream wedding—but honeymoon money gets tight',
          '大きな費用で夢の式を。でも新婚資金が苦しくなる',
          '花大钱办梦想婚礼，但新婚资金变紧',
          '花大錢辦夢想婚禮，但新婚資金變緊',
          'Chi lớn cho đám cưới mơ ước, nhưng tiền tân hôn eo hẹp',
          'Habiskan banyak untuk pernikahan impian, tapi dana bulan madu menipis'
        ),
        'romance'
      ),
    ],
  },
  {
    id: 7,
    scored: true,
    question: T(
      '기념일을 챙긴다. 나는?',
      'Marking anniversaries. You’d rather…',
      '記念日の過ごし方。あなたは？',
      '过纪念日。你会？',
      '過紀念日。你會？',
      'Tính ngày kỷ niệm. Bạn sẽ?',
      'Merayakan hari jadi. Kamu?'
    ),
    options: [
      opt(
        T(
          '매번 이벤트와 선물로 챙기지만 지출과 준비가 부담이 된다',
          'Make every date an event with gifts—but cost and prep pile up',
          '毎回イベントとプレゼント。でも出費と準備が負担',
          '每次都办活动送礼，但开销和准备很累',
          '每次都辦活動送禮，但開銷和準備很累',
          'Mỗi lần đều làm sự kiện và quà, nhưng tốn kém và mệt chuẩn bị',
          'Tiap kali ada event dan hadiah, tapi biaya dan persiapan memberatkan'
        ),
        'romance'
      ),
      opt(
        T(
          '비용은 줄이고 집에서 조용히 보내지만 특별함이 줄어든다',
          'Keep it quiet and cheap at home—but it feels less special',
          '費用を抑えて家で静かに。でも特別感は薄れる',
          '少花钱在家安静过，但少了特别感',
          '少花錢在家安靜過，但少了特別感',
          'Tiết kiệm, ở nhà yên tĩnh—nhưng ít cảm giác đặc biệt',
          'Hemat dan tenang di rumah—tapi kesan spesial berkurang'
        ),
        'reality'
      ),
    ],
  },
  {
    id: 8,
    scored: true,
    question: T(
      '집안일 분담을 정한다. 나는?',
      'Dividing chores. You’d rather…',
      '家事の分担を決める。あなたは？',
      '分工家务。你会？',
      '分工家務。你會？',
      'Phân công việc nhà. Bạn sẽ?',
      'Membagi pekerjaan rumah. Kamu?'
    ),
    options: [
      opt(
        T(
          '요일과 시간까지 표로 정해 분담하지만 분위기가 사무적이 된다',
          'Schedule chores by day and hour—but it feels office-like',
          '曜日と時間まで表で分担。でも事務的な空気になる',
          '用表格排到星期和时间，但气氛变公事公办',
          '用表格排到星期和時間，但氣氛變公事公辦',
          'Lập bảng theo ngày giờ, nhưng không khí như văn phòng',
          'Buat jadwal per hari dan jam, tapi suasananya seperti kantor'
        ),
        'reality'
      ),
      opt(
        T(
          '마음 가는 대로 하지만 서로 서운함이 쌓일 수 있다',
          'Go with the flow—but quiet resentments can build',
          '気の向くままに。でも不満が積もることがある',
          '随缘分工，但委屈可能越积越多',
          '隨緣分工，但委屈可能越積越多',
          'Làm theo cảm hứng, nhưng dễ tích tụ ấm ức',
          'Ikuti mood saja, tapi rasa kecewa bisa menumpuk'
        ),
        'romance'
      ),
    ],
  },
  {
    id: 9,
    scored: true,
    question: T(
      '신혼집을 고른다. 나는?',
      'Picking a first home together. You’d rather…',
      '新婚の家を選ぶ。あなたは？',
      '选新婚房。你会？',
      '選新婚房。你會？',
      'Chọn nhà tân hôn. Bạn sẽ?',
      'Memilih rumah pengantin baru. Kamu?'
    ),
    options: [
      opt(
        T(
          '둘이 마음에 쏙 드는 집을 고르지만 대출 부담이 크다',
          'Choose the place you both love—even if the loan hurts',
          '二人とも惚れた家を。でもローンが重い',
          '选双方都心动的房子，但贷款压力大',
          '選雙方都心動的房子，但貸款壓力大',
          'Chọn căn cả hai đều thích, dù khoản vay nặng',
          'Pilih rumah yang sama-sama disukai, meski cicilan berat'
        ),
        'romance'
      ),
      opt(
        T(
          '가격과 위치 조건이 맞는 집을 고르지만 설렘이 덜하다',
          'Pick what fits budget and location—but the spark is milder',
          '価格と立地が合う家を。でもときめきは弱い',
          '选价格和地段合适的，但少了心动',
          '選價格和地段合適的，但少了心動',
          'Chọn theo giá và vị trí hợp, nhưng ít xao xuyến',
          'Pilih yang cocok harga dan lokasi, tapi kurang berdebar'
        ),
        'reality'
      ),
    ],
  },
  {
    id: 10,
    scored: true,
    question: T(
      '갈등이 생겼다. 나는?',
      'A conflict comes up. You’d rather…',
      '衝突が起きた。あなたは？',
      '起了冲突。你会？',
      '起了衝突。你會？',
      'Xảy ra mâu thuẫn. Bạn sẽ?',
      'Muncul konflik. Kamu?'
    ),
    options: [
      opt(
        T(
          '정해진 규칙과 합의문으로 처리하지만 감정이 풀리는 데 시간이 걸린다',
          'Handle it with rules and agreements—but feelings take longer to settle',
          '決めたルールと合意で処理。でも気持ちが解けるのに時間がかかる',
          '按既定规则和约定处理，但情绪要更久才平复',
          '按既定規則和約定處理，但情緒要更久才平復',
          'Xử lý bằng quy tắc và thỏa thuận, nhưng cảm xúc lâu mới nguôi',
          'Selesaikan dengan aturan dan kesepakatan, tapi perasaan butuh waktu mereda'
        ),
        'reality'
      ),
      opt(
        T(
          '분위기를 보며 대화로 풀지만 기준이 없어 같은 일이 반복될 수 있다',
          'Talk it out by feel—but without standards, the same fight may return',
          '空気を見て会話で解く。でも基準がなく同じことが繰り返されがち',
          '看气氛用对话化解，但没标准可能旧事重演',
          '看氣氛用對話化解，但沒標準可能舊事重演',
          'Nói chuyện theo không khí, nhưng thiếu chuẩn dễ lặp lại',
          'Bicarakan sambil baca suasana, tapi tanpa acuan bisa berulang'
        ),
        'romance'
      ),
    ],
  },
  {
    id: 11,
    scored: false,
    question: T(
      '둘 중 더 견딜 만한 생활은?',
      'Which lifestyle could you handle better?',
      'どちらなら耐えられそう？',
      '两种生活里，哪种你更扛得住？',
      '兩種生活裡，哪種你更扛得住？',
      'Cách sống nào chịu đựng được hơn?',
      'Gaya hidup mana yang lebih bisa kamu jalani?'
    ),
    options: [
      opt(
        T('각방 생활', 'Separate rooms', '別々の部屋', '分房生活', '分房生活', 'Ngủ riêng phòng', 'Kamar terpisah'),
        'stat'
      ),
      opt(
        T('한방 생활', 'One shared bed', '一部屋で寝る', '同房生活', '同房生活', 'Ngủ chung giường', 'Satu kamar bersama'),
        'stat'
      ),
    ],
  },
  {
    id: 12,
    scored: false,
    question: T(
      '둘 중 경제권은 누가 갖는 게 나을까?',
      'Who should hold the money reins?',
      '家計の主導権はどちらがいい？',
      '经济权交给谁更好？',
      '經濟權交給誰更好？',
      'Ai nên nắm quyền tiền bạc hơn?',
      'Siapa yang lebih baik pegang keuangan?'
    ),
    options: [
      opt(
        T(
          '한 사람이 전담해서 관리',
          'One person manages everything',
          '一人がまとめて管理',
          '一个人全权管理',
          '一個人全權管理',
          'Một người quản lý hết',
          'Satu orang yang mengurus semua'
        ),
        'stat'
      ),
      opt(
        T(
          '각자 관리하고 생활비만 공동 부담',
          'Manage separately; only share living costs',
          '各自管理し、生活費だけ共同',
          '各自管理，只共同分担生活费',
          '各自管理，只共同分擔生活費',
          'Mỗi người tự quản, chỉ chia tiền sinh hoạt',
          'Masing-masing kelola sendiri, biaya hidup saja bersama'
        ),
        'stat'
      ),
    ],
  },
];

export const phase3MarriageCohabitBalanceGameResults: Phase3MarriageCohabitBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '🧭',
    title: T(
      '각자의 영역을 지키는 실무형, 자유 현실파',
      'Guards personal space with systems — Free Realist',
      '互いの領域を守る実務型、自由リアリスト',
      '守住各自边界的实务型，自由现实派',
      '守住各自邊界的實務型，自由現實派',
      'Giữ vùng riêng bằng quy tắc — Tự do thực tế',
      'Jaga wilayah masing-masing dengan aturan — Realis Bebas'
    ),
    shortDescription: T(
      '따로 또 같이, 규칙으로 굴리는 독립형',
      'Together, but apart—run by clear rules',
      '別々でありつつ一緒。ルールで回す独立型',
      '分开也一起，靠规则运转的独立型',
      '分開也一起，靠規則運轉的獨立型',
      'Riêng mà chung—độc lập vận hành bằng quy tắc',
      'Terpisah tapi bersama—independen yang jalan dengan aturan'
    ),
    quote: T(
      '당신은 함께 살아도 각자의 공간과 돈, 시간을 지키며 규칙으로 안정을 만듭니다.',
      'Even living together, you protect space, money, and time—and build stability with rules.',
      '一緒に住んでも空間・お金・時間を守り、ルールで安定をつくる。',
      '即便同居，你也守住空间、金钱和时间，用规则制造稳定。',
      '即便同居，你也守住空間、金錢和時間，用規則製造穩定。',
      'Dù sống chung, bạn vẫn giữ không gian, tiền và thời gian—ổn định nhờ quy tắc.',
      'Meski tinggal bersama, kamu jaga ruang, uang, dan waktu—stabil lewat aturan.'
    ),
    description: T(
      '분담과 합의가 분명해 갈등을 줄이지만, 분위기가 사무적으로 흐르고 서로의 일상이 멀어질 수 있습니다.',
      'Clear roles cut conflict, but the vibe can turn clinical and daily life can drift apart.',
      '分担と合意がはっきりして衝突は減るが、空気が事務的になり日常が離れることも。',
      '分工和约定清楚，冲突少，但气氛可能变公事公办，日常也会疏远。',
      '分工和約定清楚，衝突少，但氣氛可能變公事公辦，日常也會疏遠。',
      'Phân vai rõ nên ít xung đột, nhưng không khí dễ khô khan và ngày thường xa cách.',
      'Pembagian jelas mengurangi konflik, tapi suasana bisa kaku dan hari-hari menjauh.'
    ),
    typeLabel: T('자유 현실파 🧭', 'Free Realist 🧭', '自由リアリスト 🧭', '自由现实派 🧭', '自由現實派 🧭', 'Tự do thực tế 🧭', 'Realis Bebas 🧭'),
    characteristics: T(
      '독립·규칙·분담·합의',
      'Independence · Rules · Division · Agreement',
      '独立・ルール・分担・合意',
      '独立·规则·分工·约定',
      '獨立·規則·分工·約定',
      'Độc lập · Quy tắc · Phân chia · Thỏa thuận',
      'Independen · Aturan · Pembagian · Kesepakatan'
    ),
    livingStyle: T(
      '각방·각자 통장·분담표를 쓰고 사생활을 존중함',
      'Separate rooms, separate accounts, chore charts—and privacy',
      '別室・別口座・分担表。プライバシーを尊重',
      '分房、分账户、分工表，并尊重隐私',
      '分房、分帳戶、分工表，並尊重隱私',
      'Phòng riêng, tài khoản riêng, bảng việc nhà—tôn trọng riêng tư',
      'Kamar terpisah, rekening terpisah, jadwal tugas—hormati privasi'
    ),
    strengths: T(
      '갈등의 기준이 분명하고 서로의 자율성을 지켜 줌',
      'Clear conflict standards, and you protect each other’s autonomy',
      '衝突の基準が明確で、互いの自律を守る',
      '冲突标准清楚，也守住彼此的自主',
      '衝突標準清楚，也守住彼此的自主',
      'Chuẩn xung đột rõ, bảo vệ tự chủ của nhau',
      'Standar konflik jelas, dan menjaga otonomi masing-masing'
    ),
    caution: T(
      '효율이 앞서 정서적 거리가 생길 수 있음',
      'Efficiency can create emotional distance',
      '効率が先に立ち、心の距離が開きやすい',
      '效率当先，可能产生情感距离',
      '效率當先，可能產生情感距離',
      'Hiệu quả đi trước có thể tạo khoảng cách cảm xúc',
      'Efisiensi bisa mendahului dan membuat jarak emosional'
    ),
    goodMatch: T(
      '결속 낭만파 (내가 만든 구조 안에서 상대가 온기를 채워 줌)',
      'Bonded Romantic (they warm the structure you build)',
      '結束ロマン派（あなたの枠の中で相手がぬくもりを足す）',
      '结缚浪漫派（在你搭的框架里补上温暖）',
      '結縛浪漫派（在你搭的框架裡補上溫暖）',
      'Gắn kết lãng mạn (họ làm ấm khung bạn dựng)',
      'Romantis Terikat (mereka mengisi kehangatan di strukturmu)'
    ),
    tips: T(
      "규칙 사이에 '의미 없는 대화 시간'을 일부러 넣기\n일주일에 한 번은 따로가 아닌 함께하는 시간을 고정하기\n서운함은 규칙이 아닌 감정 문장으로도 말하기",
      "Schedule ‘pointless’ talk time between the rules\nLock one together-slot each week—not just parallel time\nSay hurt feelings in feeling words, not only rule talk",
      'ルールの合間に「意味のない会話時間」をわざと入れる\n週に一度は別々ではなく一緒の時間を固定する\n寂しさはルールではなく気持ちの言葉でも伝える',
      '在规则之间故意留出「闲聊时间」\n每周固定一次真正的共处，而不只是各干各的\n委屈也要用情感句子说，而不只谈规则',
      '在規則之間故意留出「閒聊時間」\n每週固定一次真正的共處，而不只是各做各的\n委屈也要用情感句子說，而不只談規則',
      'Cố tình chèn khoảng “nói chuyện vô nghĩa” giữa các quy tắc\nMỗi tuần khóa một khung giờ bên nhau, không chỉ song song\nNói ấm ức bằng câu cảm xúc, không chỉ bằng quy tắc',
      'Sengaja sisipkan waktu ngobrol “tanpa tujuan” di sela aturan\nKunci satu slot bersama tiap minggu—bukan cuma paralel\nSampaikan kecewa dengan kalimat perasaan, bukan hanya aturan'
    ),
    oneLiner: T(
      '구조는 이미 튼튼합니다. 온기 한 스푼이 더해지면 완벽합니다',
      'The structure is solid. One spoon of warmth makes it complete.',
      '枠はもうしっかり。ぬくもりをひとさじ足せば完璧。',
      '框架已经很稳。再加一勺温度就完整了。',
      '框架已經很穩。再加一勺溫度就完整了。',
      'Khung đã vững. Thêm một thìa ấm là đủ tròn.',
      'Strukturnya sudah kokoh. Satu sendok kehangatan membuatnya utuh.'
    ),
    shareLine: T(
      '밸런스 게임 — 결혼·동거 극한편 결과: 자유 현실파 🧭 따로 또 같이, 규칙으로 굴리는 타입이래ㅋㅋ 나와 같은 선택 몇 %인지 인증! 너라면 각방 vs 한방?',
      'Marriage & living balance (extreme): Free Realist 🧭 Separate-but-together, rules first. Separate rooms vs one bed—what would you pick?',
      '結婚・同棲バランス（極限）結果：自由リアリスト 🧭 別々で一緒、ルール型らしい。別室 vs 同室、君なら？',
      '结婚同居极限平衡：自由现实派 🧭 分开也一起、靠规则。分房还是同床，你选哪个？',
      '結婚同居極限平衡：自由現實派 🧭 分開也一起、靠規則。分房還是同床，你選哪個？',
      'Cân bằng kết hôn & sống chung (cực): Tự do thực tế 🧭 Riêng mà chung, theo quy tắc. Phòng riêng vs chung giường—bạn chọn?',
      'Balance nikah & tinggal bersama (ekstrem): Realis Bebas 🧭 Terpisah tapi bersama, aturan dulu. Kamar terpisah vs satu kasur—kamu pilih?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🌿',
    title: T(
      '각자 자유롭지만 감정이 먼저인 사람, 자유 낭만파',
      'Free, but feelings lead — Free Romantic',
      '自由だけど気持ちが先、自由ロマン派',
      '各自自由但感情优先，自由浪漫派',
      '各自自由但感情優先，自由浪漫派',
      'Tự do nhưng cảm xúc đi trước — Tự do lãng mạn',
      'Bebas tapi perasaan lebih dulu — Romantis Bebas'
    ),
    shortDescription: T(
      '따로 지내도 마음은 가깝길 바라는 감성 독립형',
      'Independent in space, close at heart',
      '離れていても心は近くいたい感性の独立型',
      '空间独立、心里仍想靠近的感性独立型',
      '空間獨立、心裡仍想靠近的感性獨立型',
      'Không gian riêng, lòng vẫn muốn gần—độc lập cảm xúc',
      'Ruang terpisah, hati ingin dekat—independen emosional'
    ),
    quote: T(
      '당신은 각자의 자유를 지키되 분위기와 마음의 연결을 소중히 여깁니다.',
      'You keep each person’s freedom, and still treasure mood and heart connection.',
      '互いの自由は守りつつ、空気と心のつながりを大切にする。',
      '你守住各自自由，也珍惜气氛与心的连接。',
      '你守住各自自由，也珍惜氣氛與心的連結。',
      'Bạn giữ tự do từng người, vẫn quý không khí và kết nối lòng.',
      'Kamu jaga kebebasan masing-masing, tapi tetap rawat suasana dan koneksi hati.'
    ),
    description: T(
      '숨 쉴 공간이 있어 편안하지만 기준이 모호해 서운함이 쌓이거나 돈 문제가 감정으로 번질 수 있습니다.',
      'There’s room to breathe—but fuzzy standards let hurt pile up, and money fights turn emotional.',
      '息ができる余白はあるが、基準が曖昧で寂しさが積もったり、お金が感情問題になりやすい。',
      '有喘息空间会舒服，但标准模糊时委屈会堆起来，钱的事也容易变成情绪。',
      '有喘息空間會舒服，但標準模糊時委屈會堆起來，錢的事也容易變成情緒。',
      'Có khoảng thở thì dễ chịu, nhưng chuẩn mơ hồ khiến ấm ức tích tụ, tiền dễ thành cảm xúc.',
      'Ada ruang napas jadi nyaman, tapi acuan kabur membuat kecewa menumpuk, dan uang mudah jadi emosi.'
    ),
    typeLabel: T('자유 낭만파 🌿', 'Free Romantic 🌿', '自由ロマン派 🌿', '自由浪漫派 🌿', '自由浪漫派 🌿', 'Tự do lãng mạn 🌿', 'Romantis Bebas 🌿'),
    characteristics: T(
      '자율·감성·분위기·느슨한 기준',
      'Autonomy · Feeling · Mood · Soft rules',
      '自律・感性・空気・ゆるい基準',
      '自主·感性·气氛·松标准',
      '自主·感性·氣氛·鬆標準',
      'Tự chủ · Cảm xúc · Không khí · Chuẩn lỏng',
      'Otonomi · Perasaan · Suasana · Acuan longgar'
    ),
    livingStyle: T(
      '각자의 시간을 존중하며 이벤트와 대화로 마음을 이어 감',
      'Respect solo time; stay linked with events and talk',
      '各自の時間を尊重し、イベントと会話で心をつなぐ',
      '尊重各自时间，用活动和对话把心连上',
      '尊重各自時間，用活動和對話把心連上',
      'Tôn trọng giờ riêng, nối lòng bằng sự kiện và trò chuyện',
      'Hormati waktu sendiri, sambungkan hati lewat momen dan obrolan'
    ),
    strengths: T(
      '서로에게 숨 쉴 공간과 따뜻한 분위기를 함께 줌',
      'You give each other breathing room and a warm atmosphere',
      '互いに息の余白とあたたかい空気を渡せる',
      '能给彼此喘息空间和温暖气氛',
      '能給彼此喘息空間和溫暖氣氛',
      'Cho nhau khoảng thở và không khí ấm',
      'Memberi ruang napas dan suasana hangat satu sama lain'
    ),
    caution: T(
      '기준이 없어 같은 갈등이 반복될 수 있음',
      'Without standards, the same conflict can repeat',
      '基準がなく同じ衝突が繰り返されやすい',
      '没有标准，同样冲突可能反复',
      '沒有標準，同樣衝突可能反覆',
      'Thiếu chuẩn thì mâu thuẫn dễ lặp lại',
      'Tanpa acuan, konflik yang sama bisa berulang'
    ),
    goodMatch: T(
      '결속 현실파 (상대가 구조를 잡고 내가 분위기를 만듦)',
      'Bonded Realist (they hold structure; you set the mood)',
      '結束リアリスト（相手が枠を、あなたが空気をつくる）',
      '结缚现实派（对方撑框架，你造气氛）',
      '結縛現實派（對方撐框架，你造氣氛）',
      'Gắn kết thực tế (họ giữ khung, bạn tạo không khí)',
      'Realis Terikat (mereka pegang struktur, kamu buat suasana)'
    ),
    tips: T(
      '돈과 집안일만큼은 최소한의 기준을 말로 정해 두기\n서운함은 쌓기 전에 그날 안에 짧게 말하기\n자유 시간과 함께 시간의 비율을 함께 합의하기',
      'Say aloud at least a few money and chore baselines\nName small hurts the same day, briefly\nAgree on the ratio of free time to together time',
      'お金と家事だけは最低限の基準を言葉にしておく\n寂しさは溜める前にその日のうちに短く伝える\n自由時間と一緒の時間の割合を一緒に決める',
      '至少把钱和家务的底线说清楚\n委屈别攒着，当天简短说完\n一起约定自由时间与共处时间的比例',
      '至少把錢和家務的底線說清楚\n委屈別攢著，當天簡短說完\n一起約定自由時間與共處時間的比例',
      'Ít nhất nói rõ chuẩn tối thiểu về tiền và việc nhà\nNói ấm ức ngắn trong ngày, đừng để tích\nCùng thỏa thuận tỉ lệ giờ tự do và giờ bên nhau',
      'Minimalnya sepakati standar uang dan pekerjaan rumah dengan kata-kata\nSampaikan kecewa singkat di hari yang sama, jangan menumpuk\nSepakati rasio waktu bebas dan waktu bersama'
    ),
    oneLiner: T(
      '자유와 감성은 큰 매력입니다. 최소한의 기준만 세우면 더 편해집니다',
      'Freedom and feeling are gifts. A few baselines make life easier.',
      '自由と感性は大きな魅力。最低限の基準があるともっと楽。',
      '自由和感性很迷人。有了最低标准会更轻松。',
      '自由和感性很迷人。有了最低標準會更輕鬆。',
      'Tự do và cảm xúc là sức hút lớn. Có chuẩn tối thiểu sẽ dễ thở hơn.',
      'Kebebasan dan perasaan itu daya tarik besar. Acuan minimal membuatnya lebih nyaman.'
    ),
    shareLine: T(
      '밸런스 게임 — 결혼·동거 극한편 결과: 자유 낭만파 🌿 각자 자유롭지만 마음은 가깝길 바라는 타입이래... 나와 같은 선택 몇 %인지 인증! 너라면 각방 vs 한방?',
      'Marriage & living balance (extreme): Free Romantic 🌿 Free space, close hearts. Separate rooms vs one bed—your pick?',
      '結婚・同棲バランス（極限）結果：自由ロマン派 🌿 自由だけど心は近くいたいらしい。別室 vs 同室、君なら？',
      '结婚同居极限平衡：自由浪漫派 🌿 各自自由、心里靠近。分房还是同床？',
      '結婚同居極限平衡：自由浪漫派 🌿 各自自由、心裡靠近。分房還是同床？',
      'Cân bằng kết hôn & sống chung (cực): Tự do lãng mạn 🌿 Tự do nhưng lòng muốn gần. Phòng riêng vs chung giường?',
      'Balance nikah & tinggal bersama (ekstrem): Romantis Bebas 🌿 Bebas tapi hati ingin dekat. Kamar terpisah vs satu kasur?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🗂️',
    title: T(
      '하나로 합쳐 규칙으로 굴리는 사람, 결속 현실파',
      'Merges everything into a system — Bonded Realist',
      'ひとつにまとめてルールで回す、結束リアリスト',
      '合为一体用规则运转，结缚现实派',
      '合為一體用規則運轉，結縛現實派',
      'Gộp làm một và chạy bằng quy tắc — Gắn kết thực tế',
      'Gabungkan jadi satu dan jalan dengan aturan — Realis Terikat'
    ),
    shortDescription: T(
      '모든 걸 공유하고 시스템으로 운영하는 팀워크형',
      'Share it all and run it like a team system',
      '全部共有してシステムで動くチーム型',
      '全部共享、用系统运营的团队合作型',
      '全部共享、用系統運營的團隊合作型',
      'Chia sẻ hết và vận hành như một đội',
      'Bagikan semuanya dan jalankan seperti tim'
    ),
    quote: T(
      '당신은 돈과 일정, 일상을 하나로 합치고 분명한 시스템으로 함께 굴립니다.',
      'You merge money, schedules, and daily life into one clear operating system.',
      'お金も予定も日常もひとつにまとめ、はっきりしたシステムで一緒に回す。',
      '你把金钱、日程和日常并成一体，用清楚的系统一起运转。',
      '你把金錢、行程和日常併成一體，用清楚的系統一起運轉。',
      'Bạn gộp tiền, lịch và ngày thường thành một hệ rõ ràng để cùng chạy.',
      'Kamu gabungkan uang, jadwal, dan hari-hari jadi satu sistem yang jelas.'
    ),
    description: T(
      '한 팀처럼 움직이는 효율과 안정감이 강점이지만, 사생활이 줄고 서로를 숨 막히게 느낄 수 있습니다.',
      'Team efficiency and security are strengths—but privacy shrinks and it can feel smothering.',
      'チームのような効率と安心感が強み。でもプライバシーが減り、息苦しさも出やすい。',
      '像一个团队那样高效稳定是优势，但隐私变少，也可能让彼此喘不过气。',
      '像一個團隊那樣高效穩定是優勢，但隱私變少，也可能讓彼此喘不過氣。',
      'Hiệu quả và ổn định như một đội là điểm mạnh, nhưng riêng tư giảm và có thể ngột ngạt.',
      'Efisiensi dan rasa aman seperti tim adalah kekuatan, tapi privasi berkurang dan bisa terasa sesak.'
    ),
    typeLabel: T('결속 현실파 🗂️', 'Bonded Realist 🗂️', '結束リアリスト 🗂️', '结缚现实派 🗂️', '結縛現實派 🗂️', 'Gắn kết thực tế 🗂️', 'Realis Terikat 🗂️'),
    characteristics: T(
      '공유·팀워크·시스템·통합',
      'Sharing · Teamwork · Systems · Merge',
      '共有・チーム・システム・統合',
      '共享·协作·系统·整合',
      '共享·協作·系統·整合',
      'Chia sẻ · Đồng đội · Hệ thống · Gộp',
      'Berbagi · Kerja tim · Sistem · Gabung'
    ),
    livingStyle: T(
      '공동 통장·일정 공유·분담표로 한 팀처럼 운영함',
      'Joint accounts, shared calendars, chore charts—like one team',
      '共同口座・予定共有・分担表で一チーム運営',
      '共同账户、共享日程、分工表，像一个团队',
      '共同帳戶、共享行程、分工表，像一個團隊',
      'Tài khoản chung, lịch chung, bảng việc—như một đội',
      'Rekening bersama, kalender bersama, jadwal tugas—seperti satu tim'
    ),
    strengths: T(
      '안정적이고 투명해 함께 목표를 이루기 좋음',
      'Stable and transparent—great for shared goals',
      '安定で透明。一緒に目標を追いやすい',
      '稳定透明，适合一起冲目标',
      '穩定透明，適合一起衝目標',
      'Ổn định, minh bạch—dễ cùng đạt mục tiêu',
      'Stabil dan transparan—enak mengejar tujuan bersama'
    ),
    caution: T(
      '개인의 숨 쉴 공간이 줄어들 수 있음',
      'Personal breathing room can shrink',
      '個人の息の余白が減りやすい',
      '个人的喘息空间可能变少',
      '個人的喘息空間可能變少',
      'Khoảng thở cá nhân có thể bị thu hẹp',
      'Ruang napas pribadi bisa menyusut'
    ),
    goodMatch: T(
      '자유 낭만파 (내가 짠 구조 안에서 상대가 숨 쉴 틈과 감성을 줌)',
      'Free Romantic (they bring air and feeling inside your system)',
      '自由ロマン派（あなたの枠の中で息と感性をくれる）',
      '自由浪漫派（在你搭的结构里给喘息和感性）',
      '自由浪漫派（在你搭的結構裡給喘息和感性）',
      'Tự do lãng mạn (họ mang khoảng thở và cảm xúc vào khung bạn dựng)',
      'Romantis Bebas (mereka bawa ruang napas dan rasa ke dalam sistemmu)'
    ),
    tips: T(
      '각자 쓰는 용돈과 혼자 시간을 정해 두기\n공유할 것과 개인적인 것의 경계를 대화로 정하기\n효율보다 서로의 컨디션을 먼저 묻는 날 만들기',
      'Set personal pocket money and alone time\nTalk through what’s shared vs private\nSome days, ask about energy before efficiency',
      '各自の小遣いと一人時間を決めておく\n共有するものと個人の境界を会話で決める\n効率より先に互いの調子を聞く日をつくる',
      '定好各自零花和独处时间\n用对话划清共享与私人的边界\n留出先问状态、再谈效率的日子',
      '定好各自零用和獨處時間\n用對話劃清共享與私人的邊界\n留出先問狀態、再談效率的日子',
      'Chốt tiền tiêu vặt và giờ một mình của mỗi người\nNói rõ ranh giới cái chung và cái riêng\nCó ngày hỏi sức khỏe tinh thần trước hiệu quả',
      'Tetapkan uang saku dan waktu sendiri\nBicarakan batas yang dibagi dan yang pribadi\nBuat hari untuk menanyakan kondisi sebelum efisiensi'
    ),
    oneLiner: T(
      '한 팀의 힘은 큽니다. 개인의 자리를 남겨 두면 더 오래갑니다',
      'Team power is real. Leave room for the individual and it lasts longer.',
      'チームの力は大きい。個人の席を残せば、もっと長く続く。',
      '团队的力量很大。给个人留位子，才能更久。',
      '團隊的力量很大。給個人留位子，才能更久。',
      'Sức một đội rất lớn. Chừa chỗ cho cá nhân thì đi lâu hơn.',
      'Kekuatan tim itu besar. Sisakan ruang untuk individu agar lebih awet.'
    ),
    shareLine: T(
      '밸런스 게임 — 결혼·동거 극한편 결과: 결속 현실파 🗂️ 모든 걸 합치고 시스템으로 굴리는 타입이래ㅋㅋ 나와 같은 선택 몇 %인지 인증! 너라면 각방 vs 한방?',
      'Marriage & living balance (extreme): Bonded Realist 🗂️ Merge it all, run the system. Separate rooms vs one bed?',
      '結婚・同棲バランス（極限）結果：結束リアリスト 🗂️ 全部まとめてシステム型らしい。別室 vs 同室、君なら？',
      '结婚同居极限平衡：结缚现实派 🗂️ 全部合并、系统运转。分房还是同床？',
      '結婚同居極限平衡：結縛現實派 🗂️ 全部合併、系統運轉。分房還是同床？',
      'Cân bằng kết hôn & sống chung (cực): Gắn kết thực tế 🗂️ Gộp hết, chạy hệ thống. Phòng riêng vs chung giường?',
      'Balance nikah & tinggal bersama (ekstrem): Realis Terikat 🗂️ Gabungkan semua, jalankan sistem. Kamar terpisah vs satu kasur?'
    ),
  },
  {
    type: 'Type4',
    emoji: '💞',
    title: T(
      '모든 걸 함께하며 감정을 우선하는 사람, 결속 낭만파',
      'All-in together, feelings first — Bonded Romantic',
      '全部一緒で気持ち優先、結束ロマン派',
      '一切都在一起、感情优先，结缚浪漫派',
      '一切都在一起、感情優先，結縛浪漫派',
      'Cùng hết và ưu tiên cảm xúc — Gắn kết lãng mạn',
      'Semua bersama dan perasaan dulu — Romantis Terikat'
    ),
    shortDescription: T(
      '하나가 되는 시간과 이벤트를 소중히 여기는 올인형',
      'All-in on shared time and big moments',
      'ひとつになる時間とイベントを大切にするオールイン型',
      '珍惜融为一体的时光和仪式的全情投入型',
      '珍惜融為一體的時光和儀式的全情投入型',
      'Trân trọng thời gian trở thành một và những sự kiện lớn',
      'Menghargai waktu menyatu dan momen besar'
    ),
    quote: T(
      '당신은 일상과 마음을 전부 함께하며 그 안의 의미와 설렘을 중요하게 여깁니다.',
      'You share daily life and heart fully—and care about meaning and spark inside it.',
      '日常も心も全部一緒に。その中の意味とときめきを大切にする。',
      '你把日常和心都放在一起，并看重其中的意义与心动。',
      '你把日常和心都放在一起，並看重其中的意義與心動。',
      'Bạn gom ngày thường và lòng lại một chỗ, quý ý nghĩa và rạo rực trong đó.',
      'Kamu bagikan hari-hari dan hati sepenuhnya—dan rawat makna serta degupan di dalamnya.'
    ),
    description: T(
      '가까움과 온기가 크지만 지출과 감정의 부담이 커지고, 혼자만의 시간이 부족해 지칠 수 있습니다.',
      'Closeness and warmth run high—but spending and emotional load rise, and alone time can run short.',
      '近さとぬくもりは大きいが、出費と感情の負担が増え、一人時間が足りず疲れやすい。',
      '亲近与温暖很足，但开销和情绪负担也会变重，独处不够就容易累。',
      '親近與溫暖很足，但開銷和情緒負擔也會變重，獨處不夠就容易累。',
      'Gần gũi và ấm lớn, nhưng chi tiêu và gánh cảm xúc tăng, thiếu giờ một mình dễ mệt.',
      'Kedekatan dan kehangatan besar, tapi biaya dan beban emosi naik, dan waktu sendiri bisa kurang.'
    ),
    typeLabel: T('결속 낭만파 💞', 'Bonded Romantic 💞', '結束ロマン派 💞', '结缚浪漫派 💞', '結縛浪漫派 💞', 'Gắn kết lãng mạn 💞', 'Romantis Terikat 💞'),
    characteristics: T(
      '함께·감성·이벤트·밀착',
      'Togetherness · Feeling · Events · Closeness',
      '一緒・感性・イベント・密着',
      '一起·感性·仪式·贴紧',
      '一起·感性·儀式·貼緊',
      'Bên nhau · Cảm xúc · Sự kiện · Sát sao',
      'Bersama · Perasaan · Momen · Melekat'
    ),
    livingStyle: T(
      '늘 함께하고 기념일과 분위기를 크게 챙김',
      'Almost always together; anniversaries and mood get big care',
      'いつも一緒で、記念日と空気を大きく大切にする',
      '几乎总在一起，很用力地过纪念日和氛围',
      '幾乎總在一起，很用力地過紀念日和氛圍',
      'Hầu như luôn bên nhau, chăm kỷ niệm và không khí rất lớn',
      'Hampir selalu bersama, merawat hari jadi dan suasana dengan besar'
    ),
    strengths: T(
      '깊은 정서적 유대와 따뜻한 일상을 만듦',
      'You build deep emotional bonds and a warm everyday',
      '深い情緒の絆とあたたかい日常をつくる',
      '能造出深厚情感纽带和温暖日常',
      '能造出深厚情感紐帶和溫暖日常',
      'Tạo gắn kết cảm xúc sâu và ngày thường ấm',
      'Membangun ikatan emosional dalam dan hari-hari yang hangat'
    ),
    caution: T(
      '지출과 감정의 과부하, 혼자 시간 부족',
      'Money and emotion overload; not enough alone time',
      '出費と感情のオーバーロード、一人時間不足',
      '开销与情绪过载，独处时间不足',
      '開銷與情緒過載，獨處時間不足',
      'Quá tải chi tiêu và cảm xúc, thiếu giờ một mình',
      'Overload biaya dan emosi, kurang waktu sendiri'
    ),
    goodMatch: T(
      '자유 현실파 (상대가 구조와 여유를 만들어 균형을 잡음)',
      'Free Realist (they add structure and space for balance)',
      '自由リアリスト（相手が枠と余白をつくりバランスを取る）',
      '自由现实派（对方补上结构和余白来平衡）',
      '自由現實派（對方補上結構和餘白來平衡）',
      'Tự do thực tế (họ thêm khung và khoảng trống để cân bằng)',
      'Realis Bebas (mereka menambah struktur dan ruang untuk seimbang)'
    ),
    tips: T(
      '이벤트 예산 상한을 정해 두기\n일주일에 한 번은 각자의 충전 시간을 두기\n함께하는 것과 의존하는 것의 경계를 가끔 점검하기',
      'Cap the event budget\nGive each person one recharge slot a week\nCheck the line between togetherness and dependence now and then',
      'イベント予算の上限を決める\n週に一度は各自の充電時間を置く\n一緒であることと依存の境界をときどき点検する',
      '定好活动预算上限\n每周各留一次充电独处\n偶尔检查「在一起」和「依赖」的边界',
      '定好活動預算上限\n每週各留一次充電獨處\n偶爾檢查「在一起」和「依賴」的邊界',
      'Chốt trần ngân sách sự kiện\nMỗi tuần mỗi người một khung sạc pin riêng\nThỉnh thoảng kiểm ranh giới bên nhau và phụ thuộc',
      'Tetapkan batas anggaran event\nSediakan satu slot recharge sendiri tiap minggu\nSesekali cek batas antara bersama dan bergantung'
    ),
    oneLiner: T(
      '함께하는 온기는 큰 힘입니다. 예산과 혼자 시간만 정해도 오래 따뜻합니다',
      'Shared warmth is power. Set a budget and alone time, and it stays warm longer.',
      '一緒のぬくもりは大きな力。予算と一人時間を決めれば、長く温かい。',
      '一起的温度是大力量。定好预算和独处，就能暖得更久。',
      '一起的溫度是大力量。定好預算和獨處，就能暖得更久。',
      'Hơi ấm bên nhau là sức mạnh. Chốt ngân sách và giờ một mình thì ấm lâu hơn.',
      'Kehangatan bersama itu kekuatan. Tetapkan anggaran dan waktu sendiri agar tetap hangat lebih lama.'
    ),
    shareLine: T(
      '밸런스 게임 — 결혼·동거 극한편 결과: 결속 낭만파 💞 모든 걸 함께하며 감정을 우선하는 타입이래... 나와 같은 선택 몇 %인지 인증! 너라면 각방 vs 한방?',
      'Marriage & living balance (extreme): Bonded Romantic 💞 All-in together, feelings first. Separate rooms vs one bed?',
      '結婚・同棲バランス（極限）結果：結束ロマン派 💞 全部一緒で気持ち優先らしい。別室 vs 同室、君なら？',
      '结婚同居极限平衡：结缚浪漫派 💞 一切一起、感情优先。分房还是同床？',
      '結婚同居極限平衡：結縛浪漫派 💞 一切一起、感情優先。分房還是同床？',
      'Cân bằng kết hôn & sống chung (cực): Gắn kết lãng mạn 💞 Cùng hết, cảm xúc trước. Phòng riêng vs chung giường?',
      'Balance nikah & tinggal bersama (ekstrem): Romantis Terikat 💞 Semua bersama, perasaan dulu. Kamar terpisah vs satu kasur?'
    ),
  },
];

export const PHASE3_MARRIAGE_COHABIT_BALANCE_META = {
  title: T(
    '밸런스 게임 — 결혼·동거 극한편',
    'Balance Game — Marriage & Living Together (Extreme)',
    'バランスゲーム — 結婚・同棲 極限編',
    '平衡游戏 — 结婚同居极限篇',
    '平衡遊戲 — 結婚同居極限篇',
    'Trò cân bằng — kết hôn & sống chung (cực hạn)',
    'Permainan seimbang — nikah & tinggal bersama (ekstrem)'
  ),
  description: T(
    '각방 vs 한방, 경제권은 누가? 12라운드 극한 선택으로 나의 결혼·동거 스타일을 알려드립니다.',
    'Separate rooms vs one bed—who holds the money? 12 extreme rounds reveal your marriage & living style.',
    '別室 vs 同室、家計は誰が？12ラウンドの極限選択で結婚・同棲スタイルがわかります。',
    '分房还是同床，经济权谁拿？12轮极限二选一，看看你的结婚同居风格。',
    '分房還是同床，經濟權誰拿？12輪極限二選一，看看你的結婚同居風格。',
    'Phòng riêng vs chung giường, ai nắm tiền? 12 vòng cực hạn cho thấy kiểu sống chung của bạn.',
    'Kamar terpisah vs satu kasur, siapa pegang uang? 12 ronde ekstrem mengungkap gaya nikah & tinggal bersamamu.'
  ),
  tags: {
    ko: ['밸런스게임', '결혼생활', '양자택일', '연애테스트'],
    en: ['balance game', 'marriage', 'would you rather', 'dating'],
    ja: ['バランスゲーム', '結婚生活', '二択', '恋愛'],
    'zh-CN': ['平衡游戏', '结婚生活', '二选一', '恋爱'],
    'zh-TW': ['平衡遊戲', '結婚生活', '二選一', '戀愛'],
    vi: ['trò cân bằng', 'hôn nhân', 'chọn một', 'hẹn hò'],
    id: ['permainan seimbang', 'pernikahan', 'pilih satu', 'pacaran'],
  } as Record<Phase3MarriageCohabitBalanceLocaleKey, string[]>,
};
