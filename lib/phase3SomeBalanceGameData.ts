/**
 * 밸런스 게임 — 썸 극한편
 * slug: phase3-some-balance-game
 * 12라운드 2지선다 · 1~10 축 다수결 · 11~12 통계용
 */

export type Phase3SomeBalanceLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';
export type Phase3SomeBalanceText = Record<Phase3SomeBalanceLocaleKey, string>;
export type Phase3SomePolar = 'lead' | 'careful' | 'express' | 'restrain' | 'stat';

function T(ko: string, en: string, ja: string, zhCN: string, zhTW: string, vi: string, id: string): Phase3SomeBalanceText {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

function opt(
  texts: Phase3SomeBalanceText,
  polar: Phase3SomePolar
): { text: Phase3SomeBalanceText; polar: Phase3SomePolar } {
  return { text: texts, polar };
}

export interface Phase3SomeBalanceGameQuestion {
  id: number;
  scored: boolean;
  question: Phase3SomeBalanceText;
  options: { text: Phase3SomeBalanceText; polar: Phase3SomePolar }[];
}

export interface Phase3SomeBalanceGameResult {
  type: string;
  emoji: string;
  title: Phase3SomeBalanceText;
  shortDescription: Phase3SomeBalanceText;
  quote: Phase3SomeBalanceText;
  description: Phase3SomeBalanceText;
  typeLabel: Phase3SomeBalanceText;
  characteristics: Phase3SomeBalanceText;
  livingStyle: Phase3SomeBalanceText;
  strengths: Phase3SomeBalanceText;
  caution: Phase3SomeBalanceText;
  goodMatch: Phase3SomeBalanceText;
  tips: Phase3SomeBalanceText;
  oneLiner: Phase3SomeBalanceText;
  shareLine: Phase3SomeBalanceText;
}

export function someBalanceText(text: Phase3SomeBalanceText, locale: string): string {
  const loc = locale as Phase3SomeBalanceLocaleKey;
  return text[loc] || text.ko;
}

/** answers: 원래 문항 인덱스 → 선택한 option index (0|1) */
export function calculatePhase3SomeBalanceGameResult(
  questions: Phase3SomeBalanceGameQuestion[],
  answers: number[]
): string {
  let lead = 0;
  let careful = 0;
  let express = 0;
  let restrain = 0;

  questions.forEach((q, idx) => {
    if (!q.scored) return;
    const choice = answers[idx];
    if (choice !== 0 && choice !== 1) return;
    const polar = q.options[choice]?.polar;
    if (polar === 'lead') lead += 1;
    else if (polar === 'careful') careful += 1;
    else if (polar === 'express') express += 1;
    else if (polar === 'restrain') restrain += 1;
  });

  const axisA = lead >= 3 ? 'lead' : 'careful';
  const axisB = express >= 3 ? 'express' : 'restrain';

  if (axisA === 'lead' && axisB === 'express') return 'Type1';
  if (axisA === 'lead' && axisB === 'restrain') return 'Type2';
  if (axisA === 'careful' && axisB === 'express') return 'Type3';
  return 'Type4';
}

export const phase3SomeBalanceGameQuestions: Phase3SomeBalanceGameQuestion[] = [
  {
    id: 1,
    scored: true,
    question: T(
      '사흘째 연락이 없는 썸 상대, 나는?',
      'It’s day three with no text from your situationship. You…',
      '三日連絡がないいい感じの相手、私は？',
      '暧昧对象已经三天没联系。我会？',
      '曖昧對象已經三天沒聯繫。我會？',
      'Đối tượng mập mờ đã ba ngày im lặng. Tôi…',
      'Orang PDKT sudah tiga hari tidak chat. Aku…'
    ),
    options: [
      opt(
        T(
          '읽씹당할 각오로 내가 먼저 "바빠?" 하고 연락한다',
          'Risk being left on read and text first: “Busy?”',
          '既読スルー覚悟で先に「忙しい？」と連絡する',
          '做好已读不回的准备，先发「在忙吗？」',
          '做好已讀不回的準備，先傳「在忙嗎？」',
          'Liều bị xem không trả lời, nhắn trước: “Bận hả?”',
          'Siap dibaca tapi tidak dibalas, chat dulu: “Sibuk?”'
        ),
        'lead'
      ),
      opt(
        T(
          '상대가 먼저 연락할 때까지 일주일 더 무소식으로 버틴다',
          'Wait another week in radio silence until they reach out',
          '相手から来るまであと一週間、無音で耐える',
          '再沉默一周，等对方先联系',
          '再沉默一週，等對方先聯繫',
          'Im thêm một tuần, đợi họ nhắn trước',
          'Diam seminggu lagi, tunggu mereka yang chat dulu'
        ),
        'careful'
      ),
    ],
  },
  {
    id: 2,
    scored: true,
    question: T(
      '마음이 확실해진 썸 상대, 나는?',
      'You’re sure about this situationship. You…',
      '気持ちが固まったいい感じの相手、私は？',
      '对暧昧对象已经确定心意。我会？',
      '對曖昧對象已經確定心意。我會？',
      'Đã chắc chắn về người mập mờ này. Tôi…',
      'Sudah yakin sama orang PDKT ini. Aku…'
    ),
    options: [
      opt(
        T(
          '상대가 고백해 줄 때까지 1년이든 기다린다',
          'Wait a year if needed until they confess first',
          '相手が告白してくれるまで、1年でも待つ',
          '等对方先告白，哪怕等一年',
          '等對方先告白，哪怕等一年',
          'Đợi họ tỏ tình trước, dù cả năm',
          'Tunggu mereka yang confess dulu, meski setahun'
        ),
        'careful'
      ),
      opt(
        T(
          '차일 수 있어도 내가 먼저 고백하고 결과를 받아들인다',
          'Confess first even if you might get rejected—and take the result',
          '振られても自分が先に告白して結果を受け入れる',
          '就算可能被拒，也先告白并接受结果',
          '就算可能被拒，也先告白並接受結果',
          'Tỏ tình trước dù có thể bị từ chối—và nhận kết quả',
          'Confess dulu meski bisa ditolak—dan terima hasilnya'
        ),
        'lead'
      ),
    ],
  },
  {
    id: 3,
    scored: true,
    question: T(
      '만나고 싶은 날, 나는?',
      'You want to hang out. You…',
      '会いたい日、私は？',
      '想见面的那天，我会？',
      '想見面的那天，我會？',
      'Ngày muốn gặp, tôi…',
      'Hari ingin ketemu, aku…'
    ),
    options: [
      opt(
        T(
          '거절당해도 내가 먼저 약속을 제안한다',
          'Suggest plans first—even if you get turned down',
          '断られても自分が先に約束を提案する',
          '就算被拒也先提出见面',
          '就算被拒也先提出見面',
          'Chủ động hẹn trước—dù có thể bị từ chối',
          'Ajukan janji dulu—meski bisa ditolak'
        ),
        'lead'
      ),
      opt(
        T(
          '상대가 제안하지 않으면 한 달 동안 못 만나도 기다린다',
          'If they never ask, you’ll wait a month without meeting',
          '相手が誘わなければ一ヶ月会えなくても待つ',
          '对方不约就再等一个月不见也行',
          '對方不約就再等一個月不見也行',
          'Họ không hẹn thì chờ cả tháng không gặp cũng được',
          'Kalau mereka tidak ajak, sebulan tidak ketemu pun ditunggu'
        ),
        'careful'
      ),
    ],
  },
  {
    id: 4,
    scored: true,
    question: T(
      '"우리 무슨 사이야?"가 목까지 차올랐다. 나는?',
      '“What are we?” is stuck in your throat. You…',
      '「私たちって何？」が喉まで出かかっている。私は？',
      '「我们算什么关系？」已经到嘴边。我会？',
      '「我們算什麼關係？」已經到嘴邊。我會？',
      '“Mình là gì của nhau?” đã nghẹn ở cổ. Tôi…',
      '“Kita ini apa?” sudah di ujung lidah. Aku…'
    ),
    options: [
      opt(
        T(
          '묻지 않고 애매한 사이로 3개월을 더 보낸다',
          'Don’t ask—stay undefined for three more months',
          '聞かずに曖昧な関係のままあと3ヶ月過ごす',
          '不问，再暧昧三个月',
          '不問，再曖昧三個月',
          'Không hỏi—mập mờ thêm ba tháng',
          'Tidak tanya—tetap abu-abu tiga bulan lagi'
        ),
        'careful'
      ),
      opt(
        T(
          '먼저 묻고 답이 애매하면 상처를 받는다',
          'Ask first—and get hurt if the answer is fuzzy',
          '先に聞いて、答えが曖昧なら傷つく',
          '先问；答案含糊就会受伤',
          '先問；答案含糊就會受傷',
          'Hỏi trước—trả lời mơ hồ thì tổn thương',
          'Tanya dulu—kalau jawabannya abu-abu, sakit hati'
        ),
        'lead'
      ),
    ],
  },
  {
    id: 5,
    scored: true,
    question: T(
      '상대가 다른 이성과 가까워 보인다. 나는?',
      'They seem close with someone else. You…',
      '相手が他の異性と近しく見える。私は？',
      '对方看起来和其他异性很近。我会？',
      '對方看起來和其他異性很近。我會？',
      'Họ trông thân với người khác giới. Tôi…',
      'Mereka kelihatan dekat dengan lawan jenis lain. Aku…'
    ),
    options: [
      opt(
        T(
          '지켜보다가 놓치게 될지도 모르는 채로 기다린다',
          'Watch and wait—even if you might lose them',
          '見守って、逃してしまうかもしれないまま待つ',
          '先看着，哪怕可能错过也等',
          '先看著，哪怕可能錯過也等',
          'Cứ quan sát chờ—dù có thể mất họ',
          'Pantau dan tunggu—meski bisa kehilangan mereka'
        ),
        'careful'
      ),
      opt(
        T(
          '바로 직진해 마음을 전하고 상대가 부담스러워할 수도 있다',
          'Go straight and say how you feel—even if it pressures them',
          'すぐ直進して気持ちを伝え、相手が負担に感じるかも',
          '立刻直球表白，对方可能会有压力',
          '立刻直球表白，對方可能會有壓力',
          'Thẳng thắn nói lòng—dù họ có thể thấy áp lực',
          'Langsung sampaikan perasaan—meski mereka bisa tertekan'
        ),
        'lead'
      ),
    ],
  },
  {
    id: 6,
    scored: true,
    question: T(
      '썸 상대가 약속을 취소했다. 나는?',
      'Your situationship cancels plans. You…',
      'いい感じの相手が約束をキャンセルした。私は？',
      '暧昧对象取消了约会。我会？',
      '曖昧對象取消了約會。我會？',
      'Người mập mờ hủy hẹn. Tôi…',
      'Orang PDKT membatalkan janji. Aku…'
    ),
    options: [
      opt(
        T(
          '서운하다고 솔직히 말해서 분위기가 어색해진다',
          'Say you’re disappointed—things get awkward',
          '寂しいと正直に言って空気が微妙になる',
          '老实说失望了，气氛会尴尬',
          '老實說失望了，氣氛會尷尬',
          'Nói thẳng là buồn—không khí ngại',
          'Jujur bilang kecewa—suasana jadi canggung'
        ),
        'express'
      ),
      opt(
        T(
          '괜찮은 척 "응 다녀와" 하고 혼자 끙끙 앓는다',
          'Act fine—“Sure, go ahead”—and stew alone',
          '大丈夫なフリで「うん行ってきて」と言い、一人で悶々とする',
          '装作没事说「好，去吧」，自己闷着',
          '裝作沒事說「好，去吧」，自己悶著',
          'Giả bình thường “Ừ đi đi”—rồi ấm ức một mình',
          'Pura-pura oke “Ya, silakan”—lalu merana sendiri'
        ),
        'restrain'
      ),
    ],
  },
  {
    id: 7,
    scored: true,
    question: T(
      '상대 때문에 가슴이 두근거린다. 나는?',
      'They make your heart race. You…',
      '相手のことで胸がドキドキする。私は？',
      '因为对方心跳加速。我会？',
      '因為對方心跳加速。我會？',
      'Tim đập mạnh vì họ. Tôi…',
      'Jantung berdebar karena mereka. Aku…'
    ),
    options: [
      opt(
        T(
          '티를 안 내서 상대가 내 마음을 끝까지 모를 수도 있다',
          'Hide it so well they may never know how you feel',
          '気づかれないようにして、相手が最後まで気持ちを知らないかも',
          '不露痕迹，对方可能到最后都不知道你的心',
          '不露痕跡，對方可能到最後都不知道你的心',
          'Giấu kỹ đến mức họ có thể chẳng bao giờ biết',
          'Disembunyikan sampai mereka mungkin tidak pernah tahu'
        ),
        'restrain'
      ),
      opt(
        T(
          '티가 다 나서 상대가 부담스러워할 수도 있다',
          'It shows all over your face—they might feel pressured',
          'バレバレで相手が負担に感じるかも',
          '全写在脸上，对方可能会有压力',
          '全寫在臉上，對方可能會有壓力',
          'Lộ rõ hết—họ có thể thấy áp lực',
          'Kelihatan banget—mereka bisa merasa tertekan'
        ),
        'express'
      ),
    ],
  },
  {
    id: 8,
    scored: true,
    question: T(
      '새벽 두 시, 문득 보고 싶다. 나는?',
      'It’s 2 a.m. and you suddenly miss them. You…',
      '深夜2時、ふと会いたくなる。私は？',
      '凌晨两点突然想见对方。我会？',
      '凌晨兩點突然想見對方。我會？',
      'Hai giờ sáng, bỗng nhớ họ. Tôi…',
      'Jam 2 pagi, tiba-tiba kangen. Aku…'
    ),
    options: [
      opt(
        T(
          '"보고 싶다" 하고 보내 놓고 아침에 후회한다',
          'Send “I miss you”—and regret it in the morning',
          '「会いたい」と送ってしまい、朝になって後悔する',
          '发出「好想你」，早上又后悔',
          '傳出「好想你」，早上又後悔',
          'Gửi “Nhớ quá”—sáng mai lại hối',
          'Kirim “Kangen”—paginya menyesal'
        ),
        'express'
      ),
      opt(
        T(
          '썼다 지우기를 반복하다 끝내 못 보내고 잠든다',
          'Type, delete, repeat—never send it, then fall asleep',
          '書いて消してを繰り返し、結局送れずに寝る',
          '写了又删，最终没发出去就睡了',
          '寫了又刪，最終沒傳出去就睡了',
          'Gõ rồi xóa mãi—cuối cùng không gửi, ngủ luôn',
          'Ketik-hapus berulang—akhirnya tidak terkirim, lalu tidur'
        ),
        'restrain'
      ),
    ],
  },
  {
    id: 9,
    scored: true,
    question: T(
      '상대가 나를 칭찬해 줬다. 나는?',
      'They compliment you. You…',
      '相手にほめられた。私は？',
      '对方夸了你。你会？',
      '對方誇了你。你會？',
      'Họ khen mình. Tôi…',
      'Mereka memuji aku. Aku…'
    ),
    options: [
      opt(
        T(
          '담담하게 "고마워"만 하고 속으로만 좋아한다',
          'Calmly say “Thanks” and celebrate only inside',
          '淡々と「ありがとう」だけ言い、心の中だけで喜ぶ',
          '平静说「谢谢」，开心只藏心里',
          '平靜說「謝謝」，開心只藏心裡',
          'Bình thản “Cảm ơn”—vui thầm thôi',
          'Tenang bilang “Makasih”—senang diam-diam'
        ),
        'restrain'
      ),
      opt(
        T(
          '좋아서 표정과 말투에 다 드러나 들뜬 티가 난다',
          'You’re so happy it shows in your face and voice',
          '嬉しくて表情も声もバレバレで浮かれている',
          '开心到表情语气全露馅，明显很兴奋',
          '開心到表情語氣全露餡，明顯很興奮',
          'Vui lộ hết mặt và giọng—rất phấn khích',
          'Senang sampai wajah & nada suara kebawa—kelihatan excited'
        ),
        'express'
      ),
    ],
  },
  {
    id: 10,
    scored: true,
    question: T(
      '상대가 다른 사람 이야기를 하며 웃는다. 질투가 난다. 나는?',
      'They laugh talking about someone else. You’re jealous. You…',
      '相手が他の人の話で笑う。嫉妬する。私は？',
      '对方聊别人聊得开心。你吃醋了。你会？',
      '對方聊別人聊得開心。你吃醋了。你會？',
      'Họ cười nói về người khác. Ghen. Tôi…',
      'Mereka tertawa cerita orang lain. Cemburu. Aku…'
    ),
    options: [
      opt(
        T(
          '"나 질투 나"라고 말해서 유치해 보일 수 있다',
          'Say “I’m jealous”—even if it sounds immature',
          '「嫉妬してる」と言って、子供っぽく見えるかも',
          '说「我吃醋了」，可能显得幼稚',
          '說「我吃醋了」，可能顯得幼稚',
          'Nói “Tớ ghen”—có thể bị thấy trẻ con',
          'Bilang “Aku cemburu”—bisa kelihatan kekanakan'
        ),
        'express'
      ),
      opt(
        T(
          '쿨한 척 삼키다가 나중에 한꺼번에 터질 수 있다',
          'Play it cool, swallow it—then explode later',
          'クールなフリで飲み込み、後で一気に爆発するかも',
          '装酷吞下去，之后可能一次爆发',
          '裝酷吞下去，之後可能一次爆發',
          'Giả cool nuốt vào—sau này có thể nổ một lần',
          'Pura-pura cool ditelan—nanti bisa meledak sekaligus'
        ),
        'restrain'
      ),
    ],
  },
  {
    id: 11,
    scored: false,
    question: T(
      '둘 중 더 견딜 만한 썸은?',
      'Which situationship is easier to live with?',
      'どちらのいい感じの関係がまだマシ？',
      '哪种暧昧更能忍？',
      '哪種曖昧還比較能忍？',
      'Mập mờ nào chịu đựng được hơn?',
      'PDKT mana yang lebih bisa ditoleransi?'
    ),
    options: [
      opt(
        T(
          '읽씹하는 썸',
          'They leave you on read',
          '既読スルーされる関係',
          '已读不回的暧昧',
          '已讀不回的曖昧',
          'Mập mờ xem tin không trả lời',
          'PDKT yang dibaca tapi tidak dibalas'
        ),
        'stat'
      ),
      opt(
        T(
          '답장이 1시간 걸리는 썸',
          'They reply—but after an hour',
          '返信に1時間かかる関係',
          '要一小时才回的暧昧',
          '要一小時才回的曖昧',
          'Mập mờ trả lời sau một tiếng',
          'PDKT yang balas setelah sejam'
        ),
        'stat'
      ),
    ],
  },
  {
    id: 12,
    scored: false,
    question: T(
      '둘 중 더 끌리는 썸은?',
      'Which situationship feels more magnetic?',
      'どちらのいい感じの関係により惹かれる？',
      '哪种暧昧更有吸引力？',
      '哪種曖昧更有吸引力？',
      'Mập mờ nào cuốn hơn?',
      'PDKT mana yang lebih menarik?'
    ),
    options: [
      opt(
        T(
          '매일 연락하지만 만나자는 말은 없는 썸',
          'Text every day—but never suggest meeting',
          '毎日連絡するのに会おうと言わない関係',
          '每天联系却从不约见面的暧昧',
          '每天聯繫卻從不約見面的曖昧',
          'Nhắn mỗi ngày nhưng chẳng bao giờ hẹn gặp',
          'Chat tiap hari tapi tidak pernah ajak ketemu'
        ),
        'stat'
      ),
      opt(
        T(
          '연락은 뜸해도 만나면 확실히 다정한 썸',
          'Rare texts—but clearly sweet when you meet',
          '連絡は少ないが会うと確実に優しい関係',
          '联系少，但见面时很温柔的暧昧',
          '聯繫少，但見面時很溫柔的曖昧',
          'Ít nhắn nhưng gặp là rất dịu dàng',
          'Chat jarang tapi saat ketemu jelas manis'
        ),
        'stat'
      ),
    ],
  },
];

export const phase3SomeBalanceGameResults: Phase3SomeBalanceGameResult[] = [
  {
    type: 'Type1',
    emoji: '🔥',
    title: T(
      '먼저 다가가고 마음을 드러내는 사람, 주도 표현파',
      'You move first and show your heart — Direct Express Type',
      '先に近づき心を見せる人、主導表現派',
      '先靠近也先表露心，主动表达派',
      '先靠近也先表露心，主動表達派',
      'Chủ động tiến gần và lộ lòng — Kiểu Chủ Động Bộc Lộ',
      'Mendekat dulu dan tunjukkan hati — Tipe Langsung Ekspresif'
    ),
    shortDescription: T(
      '연락·고백·감정까지 먼저 움직이는 직진형',
      'Texts, confesses, and feels first—a straight-line type',
      '連絡も告白も感情も先に動く直進タイプ',
      '联系、告白、情绪都先动的直球型',
      '聯繫、告白、情緒都先動的直球型',
      'Nhắn, tỏ tình, cảm xúc đều đi trước — kiểu thẳng',
      'Chat, confess, emosi lebih dulu — tipe lurus'
    ),
    quote: T(
      '당신은 썸에서 가만히 기다리지 않습니다. 마음이 생기면 말과 행동으로 먼저 보여줍니다.',
      'You don’t wait quietly in a situationship. When you feel it, you show it in words and moves.',
      'いい感じの関係ではじっとして待ちません。気持ちが生まれたら言葉と行動で先に見せます。',
      '在暧昧里你不会干等。有心就先用话和行动表现出来。',
      '在曖昧裡你不會乾等。有心就先用話和行動表現出來。',
      'Bạn không ngồi im trong mập mờ. Có cảm xúc là nói và làm trước.',
      'Kamu tidak diam menunggu di PDKT. Kalau ada perasaan, ditunjukkan lewat kata dan tindakan.'
    ),
    description: T(
      '상대가 내 마음을 헷갈리지 않게 하는 시원한 썸이지만, 속도가 빠른 만큼 상대가 따라오기 버거울 수 있습니다. 거절의 아픔도 먼저 맞지만 후회는 적은 타입입니다.',
      'Clear vibes so they rarely misread you—but your pace can overwhelm. You take rejection first, yet leave with fewer regrets.',
      '相手が気持ちを勘違いしにくい爽快な関係だが、スピードが速い分ついていくのが大変なことも。振られる痛みも先に受けるが、後悔は少ないタイプ。',
      '对方很少误会你的心意，痛快；但速度一快，对方可能跟不上。拒绝的痛也先挨，后悔却少。',
      '對方很少誤會你的心意，痛快；但速度一快，對方可能跟不上。拒絕的痛也先挨，後悔卻少。',
      'Họ ít hiểu nhầm lòng bạn—sảng khoái; nhưng tốc độ nhanh dễ làm đối phương đuối. Nhận từ chối trước nhưng ít hối tiếc.',
      'Mereka jarang salah paham perasaanmu—segar; tapi tempo cepat bisa membuat mereka kewalahan. Ditolak lebih dulu, tapi sedikit penyesalan.'
    ),
    typeLabel: T(
      '주도 표현파 🔥',
      'Direct Express Type 🔥',
      '主導表現派 🔥',
      '主动表达派 🔥',
      '主動表達派 🔥',
      'Kiểu Chủ Động Bộc Lộ 🔥',
      'Tipe Langsung Ekspresif 🔥'
    ),
    characteristics: T(
      '직진·솔직·빠른 속도·후회 적음',
      'Straight, honest, fast pace, few regrets',
      '直進・率直・速いテンポ・後悔が少ない',
      '直球、坦白、节奏快、少后悔',
      '直球、坦白、節奏快、少後悔',
      'Thẳng, thật, nhanh, ít hối',
      'Lurus, jujur, cepat, sedikit menyesal'
    ),
    livingStyle: T(
      '먼저 연락하고, 먼저 약속을 잡고, 서운함과 설렘을 바로 말함',
      'Texts first, plans first, says hurt and butterflies right away',
      '先に連絡し、先に約束を取り、寂しさもときめきもすぐ言う',
      '先联系、先约、失望和心动马上说',
      '先聯繫、先約、失望和心動馬上說',
      'Nhắn trước, hẹn trước, buồn và rung động nói ngay',
      'Chat dulu, ajak dulu, kecewa & deg-degan langsung diomongin'
    ),
    strengths: T(
      '상대가 내 마음을 몰라서 생기는 오해가 거의 없음',
      'Almost no “do they like me?” confusion on their side',
      '相手が気持ちを知らずに生まれる誤解がほとんどない',
      '几乎不会因为对方不懂你的心而产生误会',
      '幾乎不會因為對方不懂你的心而產生誤會',
      'Hầu như không hiểu lầm vì họ không biết lòng bạn',
      'Hampir tidak ada salah paham karena mereka tidak tahu perasaanmu'
    ),
    caution: T(
      '상대의 속도와 부담을 놓치기 쉬움',
      'Easy to miss their pace and pressure level',
      '相手のペースや負担感を見落としやすい',
      '容易忽略对方的节奏和压力',
      '容易忽略對方的節奏和壓力',
      'Dễ bỏ qua nhịp độ và áp lực của họ',
      'Mudah melewatkan tempo & tekanan mereka'
    ),
    goodMatch: T(
      '신중 절제파 (내가 열어 주면 상대가 안심함)',
      'Careful Cool Type (when you open up, they feel safe)',
      '慎重抑制派（自分が開くと相手が安心する）',
      '谨慎克制派（你先打开，对方才安心）',
      '謹慎克制派（你先打開，對方才安心）',
      'Kiểu Thận Trọng Kiềm Chế (bạn mở thì họ yên tâm)',
      'Tipe Hati-hati Terkendali (kalau kamu buka, mereka tenang)'
    ),
    tips: T(
      '직진 뒤에 "부담되면 말해 줘"라고 한 문장 덧붙이기\n상대의 답장 속도를 내 속도와 비교하지 않기\n고백 전에 호감 신호를 한 번 더 확인하기',
      'After going direct, add “Tell me if it’s too much”\nDon’t compare their reply speed to yours\nCheck one more green flag before confessing',
      '直進のあとに「負担なら言って」と一文添える\n相手の返信速度を自分と比べない\n告白前に好意のサインをもう一度確認する',
      '直球后再补一句「有压力就告诉我」\n别拿对方回信速度和自己比\n告白前再确认一次好感信号',
      '直球後再補一句「有壓力就告訴我」\n別拿對方回訊速度和自己比\n告白前再確認一次好感訊號',
      'Sau khi thẳng, thêm câu “Áp lực thì nói nhé”\nĐừng so tốc độ trả lời của họ với mình\nTrước khi tỏ tình, kiểm thêm một tín hiệu',
      'Setelah lurus, tambah “Kalau tertekan, bilang ya”\nJangan bandingkan kecepatan balas mereka denganmu\nSebelum confess, cek lagi satu sinyal suka'
    ),
    oneLiner: T(
      '직진은 용기입니다. 상대의 속도만 한 번 살피면 더 멀리 갑니다',
      'Going direct is courage. One look at their pace takes you farther.',
      '直進は勇気。相手のペースを一度見れば、もっと遠くまで行ける。',
      '直球是勇气。多看一眼对方的节奏，就能走得更远。',
      '直球是勇氣。多看一眼對方的節奏，就能走得更遠。',
      'Thẳng là dũng khí. Nhìn nhịp họ một lần là đi xa hơn.',
      'Lurus itu keberanian. Sekali lihat tempo mereka, bisa lebih jauh.'
    ),
    shareLine: T(
      '밸런스 게임 — 썸 극한편 결과: 주도 표현파 🔥 먼저 연락하고 먼저 고백하는 직진형이래ㅋㅋ 너라면 뭐 골라? 읽씹하는 썸 vs 답장 1시간 썸',
      'Balance Game — Situationship Extreme result: Direct Express 🔥 I text first and confess first lol. What would you pick? Left on read vs replies in an hour?',
      'バランスゲーム — いい感じ極限編 結果：主導表現派 🔥 先に連絡して先に告白する直進タイプらしいwww どっち選ぶ？既読スルー vs 返信1時間',
      '平衡游戏 — 暧昧极限篇结果：主动表达派 🔥 原来是先联系先告白的直球型哈哈。你会选哪个？已读不回 vs 一小时才回？',
      '平衡遊戲 — 曖昧極限篇結果：主動表達派 🔥 原來是先聯繫先告白的直球型哈哈。你會選哪個？已讀不回 vs 一小時才回？',
      'Trò cân bằng — Mập mờ cực hạn: Kiểu Chủ Động Bộc Lộ 🔥 Nhắn trước tỏ tình trước lol. Bạn chọn gì? Xem không trả lời vs trả lời sau một tiếng?',
      'Permainan seimbang — PDKT ekstrem: Tipe Langsung Ekspresif 🔥 Chat dulu confess dulu wkwk. Kamu pilih mana? Dibaca tapi tidak dibalas vs balas sejam?'
    ),
  },
  {
    type: 'Type2',
    emoji: '🎯',
    title: T(
      '먼저 다가가지만 마음은 숨기는 사람, 주도 절제파',
      'You move first but hide your heart — Direct Cool Type',
      '先に近づくが心は隠す人、主導抑制派',
      '先靠近但藏住心，主动克制派',
      '先靠近但藏住心，主動克制派',
      'Chủ động tiến gần nhưng giấu lòng — Kiểu Chủ Động Kiềm Chế',
      'Mendekat dulu tapi sembunyikan hati — Tipe Langsung Terkendali'
    ),
    shortDescription: T(
      '행동은 먼저, 감정은 쿨하게 하는 전략형',
      'Actions first, feelings cool—a strategy type',
      '行動は先、感情はクールな戦略タイプ',
      '行动在先、情绪装酷的策略型',
      '行動在先、情緒裝酷的策略型',
      'Hành động trước, cảm xúc lạnh — kiểu chiến lược',
      'Aksi dulu, emosi cool — tipe strategi'
    ),
    quote: T(
      '당신은 약속도 먼저 잡고 연락도 먼저 하지만, 속마음은 좀처럼 보여주지 않습니다.',
      'You plan first and text first—but rarely show what’s underneath.',
      '約束も連絡も先に取るけれど、本音はなかなか見せません。',
      '约会和联系都你先，但真心很少露出来。',
      '約會和聯繫都你先，但真心很少露出來。',
      'Bạn hẹn trước, nhắn trước—nhưng ít lộ đáy lòng.',
      'Kamu ajak dulu, chat dulu—tapi jarang tunjukkan isi hati.'
    ),
    description: T(
      '기회는 놓치지 않지만 감정을 숨기다 보니 상대는 내가 호감인지 그냥 친한 건지 헷갈릴 수 있습니다. 혼자 삭이는 서운함이 쌓이기 쉽습니다.',
      'You don’t miss chances—but hiding feelings can leave them unsure: crush or just friends? Quiet hurt piles up alone.',
      'チャンスは逃さないが、感情を隠すので相手は好意かただの仲良しか迷うかも。一人で飲み込む寂しさが溜まりやすい。',
      '机会不放过，但藏情绪会让对方分不清是喜欢还是单纯熟。独自吞下的委屈容易堆积。',
      '機會不放過，但藏情緒會讓對方分不清是喜歡還是單純熟。獨自吞下的委屈容易堆積。',
      'Không bỏ lỡ cơ hội—nhưng giấu cảm xúc khiến họ phân vân thích hay chỉ thân. Buồn nuốt một mình dễ chất.',
      'Kesempatan tidak dilewatkan—tapi menyembunyikan perasaan bikin mereka bingung: suka atau cuma dekat? Kecewa yang ditelan sendiri mudah menumpuk.'
    ),
    typeLabel: T(
      '주도 절제파 🎯',
      'Direct Cool Type 🎯',
      '主導抑制派 🎯',
      '主动克制派 🎯',
      '主動克制派 🎯',
      'Kiểu Chủ Động Kiềm Chế 🎯',
      'Tipe Langsung Terkendali 🎯'
    ),
    characteristics: T(
      '행동력·쿨한 태도·숨긴 감정·신호 모호',
      'Action, cool vibe, hidden feelings, mixed signals',
      '行動力・クール・隠した感情・曖昧なサイン',
      '行动力、装酷、藏情绪、信号模糊',
      '行動力、裝酷、藏情緒、訊號模糊',
      'Hành động, cool, giấu cảm xúc, tín hiệu mơ hồ',
      'Aksi, cool, emosi tersembunyi, sinyal abu-abu'
    ),
    livingStyle: T(
      '만남은 내가 주도하지만 "보고 싶었어" 같은 말은 아낌',
      'You lead meetups—but skip lines like “I missed you”',
      '会うのは自分が主導するが「会いたかった」は言わない',
      '见面你主导，但「想你了」这类话很省',
      '見面你主導，但「想你了」這類話很省',
      'Gặp thì bạn dẫn—nhưng ít nói kiểu “Nhớ quá”',
      'Ketemuan kamu yang pimpin—tapi jarang bilang “Kangen”'
    ),
    strengths: T(
      '관계를 진전시키는 실행력과 감정에 휘둘리지 않는 침착함',
      'Drive that moves things forward, plus calm that isn’t mood-swayed',
      '関係を進める実行力と、感情に振り回されない落ち着き',
      '推进关系的执行力，和不被情绪带跑的冷静',
      '推進關係的執行力，和不被情緒帶跑的冷靜',
      'Sức tiến quan hệ và sự bình tĩnh không bị cảm xúc kéo',
      'Eksekusi yang majuin hubungan plus ketenangan yang tidak terbawa emosi'
    ),
    caution: T(
      '마음을 숨겨 상대가 호감을 확신하지 못함',
      'Hiding the heart leaves them unsure you actually like them',
      '心を隠して相手が好意を確信できない',
      '藏心会让对方无法确信你的好感',
      '藏心會讓對方無法確信你的好感',
      'Giấu lòng khiến họ không chắc bạn thích',
      'Menyembunyikan hati membuat mereka tidak yakin kamu suka'
    ),
    goodMatch: T(
      '신중 표현파 (상대가 마음을 말해 줘서 균형이 맞음)',
      'Careful Express Type (they voice feelings and balance you)',
      '慎重表現派（相手が気持ちを言ってくれてバランスが取れる）',
      '谨慎表达派（对方说出心，互补平衡）',
      '謹慎表達派（對方說出心，互補平衡）',
      'Kiểu Thận Trọng Bộc Lộ (họ nói lòng giúp cân bằng)',
      'Tipe Hati-hati Ekspresif (mereka mengucapkan perasaan dan menyeimbangkan)'
    ),
    tips: T(
      '만남 끝에 "오늘 좋았어" 한 문장만 더 표현하기\n서운함은 그날 안에 짧게 말하기\n쿨함과 무관심의 차이를 상대가 알 수 있게 신호 하나 주기',
      'After hanging out, add one line: “Today was nice”\nSay small hurts the same day, briefly\nGive one clear signal so cool ≠ cold',
      '会った最後に「今日よかった」一文だけ足す\n寂しさはその日のうちに短く言う\nクールと無関心の違いがわかるサインを一つ出す',
      '见面结束补一句「今天挺开心」\n小委屈当天短短说清楚\n给一个信号，让对方分清酷和冷漠',
      '見面結束補一句「今天挺開心」\n小委屈當天短短說清楚\n給一個訊號，讓對方分清酷和冷漠',
      'Sau buổi gặp thêm một câu: “Hôm nay vui”\nBuồn nhỏ nói ngắn trong ngày\nCho một tín hiệu để cool ≠ thờ ơ',
      'Setelah ketemu, tambah satu kalimat: “Hari ini enak”\nKecewa kecil diomongin singkat di hari yang sama\nKasih satu sinyal agar cool ≠ cuek'
    ),
    oneLiner: T(
      '행동은 이미 충분합니다. 마음 한 줄만 더하면 신호가 선명해집니다',
      'Your actions are already enough. One line of heart makes the signal clear.',
      '行動はもう十分。心の一文を足せばサインがはっきりする。',
      '行动已经够了。再补一句心里话，信号就清楚。',
      '行動已經夠了。再補一句心裡話，訊號就清楚。',
      'Hành động đã đủ. Thêm một câu lòng là tín hiệu rõ.',
      'Aksimu sudah cukup. Satu baris isi hati membuat sinyal jelas.'
    ),
    shareLine: T(
      '밸런스 게임 — 썸 극한편 결과: 주도 절제파 🎯 행동은 먼저, 감정은 쿨하게 하는 타입이래... 너라면 뭐 골라? 읽씹하는 썸 vs 답장 1시간 썸',
      'Balance Game — Situationship Extreme result: Direct Cool 🎯 Actions first, feelings cool… What would you pick? Left on read vs replies in an hour?',
      'バランスゲーム — いい感じ極限編 結果：主導抑制派 🎯 行動は先、感情はクールなタイプらしい… どっち選ぶ？既読スルー vs 返信1時間',
      '平衡游戏 — 暧昧极限篇结果：主动克制派 🎯 原来是行动在先、情绪装酷的类型…你会选哪个？已读不回 vs 一小时才回？',
      '平衡遊戲 — 曖昧極限篇結果：主動克制派 🎯 原來是行動在先、情緒裝酷的類型…你會選哪個？已讀不回 vs 一小時才回？',
      'Trò cân bằng — Mập mờ cực hạn: Kiểu Chủ Động Kiềm Chế 🎯 Hành động trước, cảm xúc cool… Bạn chọn gì? Xem không trả lời vs trả lời sau một tiếng?',
      'Permainan seimbang — PDKT ekstrem: Tipe Langsung Terkendali 🎯 Aksi dulu, emosi cool… Kamu pilih mana? Dibaca tapi tidak dibalas vs balas sejam?'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌷',
    title: T(
      '기다리지만 마음은 솔직한 사람, 신중 표현파',
      'You wait—but your heart shows — Careful Express Type',
      '待つが心は正直な人、慎重表現派',
      '会等但心很诚实，谨慎表达派',
      '會等但心很誠實，謹慎表達派',
      'Chờ đợi nhưng lòng thành thật — Kiểu Thận Trọng Bộc Lộ',
      'Menunggu tapi hatinya jujur — Tipe Hati-hati Ekspresif'
    ),
    shortDescription: T(
      '상대의 신호를 기다리며 감정은 숨기지 않는 감성형',
      'Waits for their move—yet never hides the feels',
      '相手のサインを待ちつつ感情は隠さない感性タイプ',
      '等对方信号，情绪却不藏的感性型',
      '等對方訊號，情緒卻不藏的感性型',
      'Chờ tín hiệu họ—nhưng không giấu cảm xúc',
      'Menunggu sinyal mereka—tapi tidak menyembunyikan perasaan'
    ),
    quote: T(
      '당신은 먼저 움직이기보다 기다리지만, 마음이 생기면 티가 나는 솔직한 사람입니다.',
      'You wait more than you lead—but once you feel something, it shows.',
      '先に動くより待ちますが、気持ちが生まれるとバレる正直な人です。',
      '你更常等待而非先动，但一有心就会露出来。',
      '你更常等待而非先動，但一有心就會露出來。',
      'Bạn chờ hơn là dẫn—nhưng có cảm xúc là lộ.',
      'Kamu lebih menunggu daripada memimpin—tapi kalau ada perasaan, kelihatan.'
    ),
    description: T(
      '상대가 다가오길 기다리면서도 설렘과 서운함은 솔직하게 드러납니다. 상대는 마음을 읽기 쉽지만, 기다림이 길어지면 지칠 수 있습니다.',
      'You wait for them to come closer while still showing butterflies and hurt. Easy to read—but long waits wear you out.',
      '相手が近づくのを待ちつつ、ときめきも寂しさも正直に出ます。気持ちは読みやすいが、待ちが長いと疲れやすい。',
      '一边等对方靠近，一边把心动和委屈老实说出来。好懂，但等太久会累。',
      '一邊等對方靠近，一邊把心動和委屈老實說出來。好懂，但等太久會累。',
      'Vừa chờ họ lại gần vừa lộ rung động và buồn. Dễ đọc—nhưng chờ lâu dễ mệt.',
      'Sambil menunggu mereka mendekat, deg-degan & kecewa tetap keluar. Mudah dibaca—tapi menunggu lama bisa lelah.'
    ),
    typeLabel: T(
      '신중 표현파 🌷',
      'Careful Express Type 🌷',
      '慎重表現派 🌷',
      '谨慎表达派 🌷',
      '謹慎表達派 🌷',
      'Kiểu Thận Trọng Bộc Lộ 🌷',
      'Tipe Hati-hati Ekspresif 🌷'
    ),
    characteristics: T(
      '기다림·솔직한 감정·티 나는 설렘·수동적 진행',
      'Waiting, honest feels, visible crush energy, slower pace',
      '待ち・正直な感情・バレるときめき・受け身の進行',
      '等待、坦白情绪、心动外露、被动推进',
      '等待、坦白情緒、心動外露、被動推進',
      'Chờ, cảm xúc thật, rung động lộ, tiến chậm',
      'Menunggu, perasaan jujur, deg-degan kelihatan, tempo pasif'
    ),
    livingStyle: T(
      '연락과 제안은 상대를 기다리지만 반응과 표정은 풍부함',
      'Waits for texts and plans—but reactions and face are full',
      '連絡や誘いは相手待ちだが、反応と表情は豊か',
      '联系和邀约等对方，反应和表情却很丰富',
      '聯繫和邀約等對方，反應和表情卻很豐富',
      'Chờ họ nhắn/hẹn—nhưng phản ứng và mặt rất giàu',
      'Menunggu chat & ajakan—tapi reaksi dan ekspresi kaya'
    ),
    strengths: T(
      '솔직한 감정으로 상대가 안심하고 다가올 수 있음',
      'Honest feelings make it safer for them to approach',
      '正直な感情で相手が安心して近づける',
      '坦白的情绪让对方能安心靠近',
      '坦白的情緒讓對方能安心靠近',
      'Cảm xúc thật giúp họ yên tâm lại gần',
      'Perasaan jujur membuat mereka nyaman mendekat'
    ),
    caution: T(
      '기다리는 동안 타이밍을 놓치거나 지칠 수 있음',
      'While waiting, timing slips—or you burn out',
      '待っている間にタイミングを逃したり、疲れたりしやすい',
      '等待时可能错过时机，或把自己等累',
      '等待時可能錯過時機，或把自己等累',
      'Trong lúc chờ dễ lỡ nhịp hoặc kiệt sức',
      'Sambil menunggu, timing bisa kelewat—atau kamu kelelahan'
    ),
    goodMatch: T(
      '주도 절제파 (상대가 움직여 주고 내 감정이 신호가 됨)',
      'Direct Cool Type (they move; your feelings become the signal)',
      '主導抑制派（相手が動いてくれ、自分の感情がサインになる）',
      '主动克制派（对方行动，你的情绪成信号）',
      '主動克制派（對方行動，你的情緒成訊號）',
      'Kiểu Chủ Động Kiềm Chế (họ hành động; cảm xúc bạn là tín hiệu)',
      'Tipe Langsung Terkendali (mereka bergerak; perasaanmu jadi sinyal)'
    ),
    tips: T(
      '기다림에 기한을 정하기. 예: "이번 주까지 연락이 없으면 내가 먼저 보낸다"\n작은 제안 하나를 내가 먼저 해 보기\n감정 표현은 그대로 유지하되 행동도 한 걸음 더하기',
      'Give waiting a deadline—e.g. “If no text by Sunday, I’ll send first”\nTry one small invite yourself\nKeep the honesty—and take one more action step',
      '待ちに期限を。例：「今週連絡がなければ自分が先に送る」\n小さな誘いを一つ自分からしてみる\n感情表現はそのままに、行動も一歩足す',
      '给等待设期限。例：「这周再不联系，我先发」\n自己先提一个小邀约\n情绪照旧坦诚，行动再多一步',
      '給等待設期限。例：「這週再不聯繫，我先傳」\n自己先提一個小邀約\n情緒照舊坦誠，行動再多一步',
      'Đặt hạn chờ. Ví dụ: “Tuần này không nhắn thì mình gửi trước”\nTự đề xuất một lời hẹn nhỏ\nGiữ lộ cảm xúc—và thêm một bước hành động',
      'Beri batas menunggu. Misal: “Kalau minggu ini tidak chat, aku yang kirim dulu”\nCoba satu ajakan kecil dari kamu\nTetap jujur soal perasaan—dan tambah satu langkah aksi'
    ),
    oneLiner: T(
      '솔직한 마음은 큰 매력입니다. 한 걸음만 먼저 내디디면 기다림이 짧아집니다',
      'An honest heart is magnetic. One step first shortens the wait.',
      '正直な心は大きな魅力。一歩先に出せば待ちが短くなる。',
      '诚实的心很有魅力。先迈一步，等待就会变短。',
      '誠實的心很有魅力。先邁一步，等待就會變短。',
      'Lòng thành thật rất hút. Một bước trước là chờ ngắn hơn.',
      'Hati jujur itu menarik. Satu langkah lebih dulu memendekkan menunggu.'
    ),
    shareLine: T(
      '밸런스 게임 — 썸 극한편 결과: 신중 표현파 🌷 기다리지만 마음은 티 나는 타입이래ㅋㅋ 너라면 뭐 골라? 읽씹하는 썸 vs 답장 1시간 썸',
      'Balance Game — Situationship Extreme result: Careful Express 🌷 I wait—but my heart shows lol. What would you pick? Left on read vs replies in an hour?',
      'バランスゲーム — いい感じ極限編 結果：慎重表現派 🌷 待つけど気持ちはバレるタイプらしいwww どっち選ぶ？既読スルー vs 返信1時間',
      '平衡游戏 — 暧昧极限篇结果：谨慎表达派 🌷 原来是会等但心会露的类型哈哈。你会选哪个？已读不回 vs 一小时才回？',
      '平衡遊戲 — 曖昧極限篇結果：謹慎表達派 🌷 原來是會等但心會露的類型哈哈。你會選哪個？已讀不回 vs 一小時才回？',
      'Trò cân bằng — Mập mờ cực hạn: Kiểu Thận Trọng Bộc Lộ 🌷 Chờ nhưng lòng lộ lol. Bạn chọn gì? Xem không trả lời vs trả lời sau một tiếng?',
      'Permainan seimbang — PDKT ekstrem: Tipe Hati-hati Ekspresif 🌷 Menunggu tapi hati kelihatan wkwk. Kamu pilih mana? Dibaca tapi tidak dibalas vs balas sejam?'
    ),
  },
  {
    type: 'Type4',
    emoji: '🌙',
    title: T(
      '기다리고 마음도 숨기는 사람, 신중 절제파',
      'You wait and hide your heart — Careful Cool Type',
      '待ち、心も隠す人、慎重抑制派',
      '既等又藏心，谨慎克制派',
      '既等又藏心，謹慎克制派',
      'Chờ và giấu lòng — Kiểu Thận Trọng Kiềm Chế',
      'Menunggu dan menyembunyikan hati — Tipe Hati-hati Terkendali'
    ),
    shortDescription: T(
      '지켜보며 조용히 마음을 키우는 관찰형',
      'Watches quietly while feelings grow deep',
      '見守って静かに気持ちを育てる観察タイプ',
      '默默观察、慢慢养心的观察型',
      '默默觀察、慢慢養心的觀察型',
      'Quan sát lặng và nuôi lòng — kiểu quan sát',
      'Mengamati diam-diam sambil menumbuhkan perasaan'
    ),
    quote: T(
      '당신은 먼저 움직이지도, 마음을 드러내지도 않고 조용히 상대를 지켜봅니다.',
      'You don’t move first or show your heart—you watch them quietly.',
      '先に動くことも、心を見せることもなく、静かに相手を見守ります。',
      '你不先动，也不露心，只是安静看着对方。',
      '你不先動，也不露心，只是安靜看著對方。',
      'Bạn không tiến trước cũng không lộ lòng—chỉ lặng quan sát.',
      'Kamu tidak bergerak dulu dan tidak tunjukkan hati—hanya mengamati diam-diam.'
    ),
    description: T(
      '상처받을 위험은 가장 적지만 상대가 내 마음을 알 길이 없어 썸이 흐지부지될 수 있습니다. 마음의 깊이는 깊은데 신호가 약한 타입입니다.',
      'Lowest risk of getting hurt—but they may never know you care, so it fizzles. Deep heart, faint signal.',
      '傷つくリスクはいちばん低いが、相手が気持ちを知る術がなく関係がうやむやになりやすい。心は深いのにサインが弱いタイプ。',
      '受伤风险最低，但对方无从知道你的心，暧昧容易散。心很深，信号很弱。',
      '受傷風險最低，但對方無從知道你的心，曖昧容易散。心很深，訊號很弱。',
      'Ít rủi ro tổn thương nhất—nhưng họ chẳng biết lòng bạn, mập mờ dễ phai. Lòng sâu, tín hiệu yếu.',
      'Risiko sakit hati paling kecil—tapi mereka tak punya cara tahu perasaanmu, PDKT bisa menguap. Hati dalam, sinyal lemah.'
    ),
    typeLabel: T(
      '신중 절제파 🌙',
      'Careful Cool Type 🌙',
      '慎重抑制派 🌙',
      '谨慎克制派 🌙',
      '謹慎克制派 🌙',
      'Kiểu Thận Trọng Kiềm Chế 🌙',
      'Tipe Hati-hati Terkendali 🌙'
    ),
    characteristics: T(
      '관찰·침묵·깊은 마음·약한 신호',
      'Observing, quiet, deep heart, soft signals',
      '観察・沈黙・深い心・弱いサイン',
      '观察、沉默、心深、信号弱',
      '觀察、沉默、心深、訊號弱',
      'Quan sát, im lặng, lòng sâu, tín hiệu yếu',
      'Mengamati, diam, hati dalam, sinyal lemah'
    ),
    livingStyle: T(
      '기다리고, 티 안 내고, 쓰고 지우다 끝내 못 보냄',
      'Waits, shows nothing, types then deletes—never sends',
      '待ち、気づかれず、書いて消して結局送れない',
      '等、不露痕迹、写了又删最后没发出',
      '等、不露痕跡、寫了又刪最後沒傳出',
      'Chờ, không lộ, gõ rồi xóa—cuối cùng không gửi',
      'Menunggu, tidak kelihatan, ketik-hapus—akhirnya tidak terkirim'
    ),
    strengths: T(
      '쉽게 휘둘리지 않고 한번 마음을 주면 깊고 진지함',
      'Hard to sway—and once you care, it’s deep and serious',
      '簡単に振り回されず、一度気持ちを向けたら深く本気',
      '不易被带走；一旦交付心意就深且认真',
      '不易被帶走；一旦交付心意就深且認真',
      'Khó bị kéo—và một khi trao lòng thì sâu, nghiêm túc',
      'Tidak mudah goyah—dan sekali memberi hati, dalam dan serius'
    ),
    caution: T(
      '신호가 약해 좋은 인연이 지나갈 수 있음',
      'Soft signals mean good matches can walk by',
      'サインが弱く、良い縁が通り過ぎることがある',
      '信号太弱，好缘分可能擦肩而过',
      '訊號太弱，好緣分可能擦肩而過',
      'Tín hiệu yếu khiến duyên tốt có thể đi qua',
      'Sinyal lemah membuat peluang baik bisa lewat'
    ),
    goodMatch: T(
      '주도 표현파 (상대가 먼저 열어 주면 마음을 열기 쉬움)',
      'Direct Express Type (when they open first, you open easier)',
      '主導表現派（相手が先に開いてくれると心を開きやすい）',
      '主动表达派（对方先打开，你更容易敞开心）',
      '主動表達派（對方先打開，你更容易敞開心）',
      'Kiểu Chủ Động Bộc Lộ (họ mở trước thì bạn dễ mở theo)',
      'Tipe Langsung Ekspresif (kalau mereka buka dulu, kamu lebih mudah ikut)'
    ),
    tips: T(
      '하루에 한 번 작은 신호(좋아요·짧은 안부) 보내기\n쓰고 지우는 메시지 중 한 줄만 그대로 보내 보기\n내 속도를 "나는 천천히 가까워지는 편이야"라고 미리 알리기',
      'Send one small signal a day (like / short check-in)\nFrom the drafts you delete, send just one line as-is\nSay upfront: “I get close slowly”',
      '一日一回、小さなサイン（いいね・短い挨拶）を送る\n書いて消す文の中から一行だけそのまま送ってみる\n「私はゆっくり近づくタイプ」と先に伝える',
      '每天发一个小信号（点赞／短短问安）\n写了又删的句子里，挑一行原样发出\n先说「我是慢慢靠近的那种」',
      '每天傳一個小訊號（按讚／短短問安）\n寫了又刪的句子裡，挑一行原樣傳出\n先說「我是慢慢靠近的那種」',
      'Mỗi ngày một tín hiệu nhỏ (like / lời chào ngắn)\nTrong những tin nhắn gõ rồi xóa, gửi nguyên một dòng\nNói trước: “Mình gần gũi kiểu chậm”',
      'Kirim satu sinyal kecil sehari (like / sapaan singkat)\nDari pesan yang diketik-hapus, kirim satu baris apa adanya\nKatakan dulu: “Aku mendekat pelan-pelan”'
    ),
    oneLiner: T(
      '조용한 마음도 전해져야 닿습니다. 작은 신호 하나가 첫 걸음입니다',
      'A quiet heart still needs to be sent. One small signal is the first step.',
      '静かな心も伝わらなければ届かない。小さなサインひとつが第一歩。',
      '安静的心也得传出去才到得了。一个小信号就是第一步。',
      '安靜的心也得傳出去才到得了。一個小訊號就是第一步。',
      'Lòng lặng cũng phải gửi mới tới. Một tín hiệu nhỏ là bước đầu.',
      'Hati yang tenang tetap harus sampai. Satu sinyal kecil adalah langkah pertama.'
    ),
    shareLine: T(
      '밸런스 게임 — 썸 극한편 결과: 신중 절제파 🌙 조용히 지켜보며 마음 키우는 타입이래... 너라면 뭐 골라? 읽씹하는 썸 vs 답장 1시간 썸',
      'Balance Game — Situationship Extreme result: Careful Cool 🌙 I watch quietly while feelings grow… What would you pick? Left on read vs replies in an hour?',
      'バランスゲーム — いい感じ極限編 結果：慎重抑制派 🌙 静かに見守って気持ちを育てるタイプらしい… どっち選ぶ？既読スルー vs 返信1時間',
      '平衡游戏 — 暧昧极限篇结果：谨慎克制派 🌙 原来是安静观察养心的类型…你会选哪个？已读不回 vs 一小时才回？',
      '平衡遊戲 — 曖昧極限篇結果：謹慎克制派 🌙 原來是安靜觀察養心的類型…你會選哪個？已讀不回 vs 一小時才回？',
      'Trò cân bằng — Mập mờ cực hạn: Kiểu Thận Trọng Kiềm Chế 🌙 Quan sát lặng nuôi lòng… Bạn chọn gì? Xem không trả lời vs trả lời sau một tiếng?',
      'Permainan seimbang — PDKT ekstrem: Tipe Hati-hati Terkendali 🌙 Mengamati diam sambil menumbuhkan perasaan… Kamu pilih mana? Dibaca tapi tidak dibalas vs balas sejam?'
    ),
  },
];

export const PHASE3_SOME_BALANCE_META = {
  title: T(
    '밸런스 게임 — 썸 극한편',
    'Balance Game — Situationship (Extreme)',
    'バランスゲーム — いい感じ 極限編',
    '平衡游戏 — 暧昧极限篇',
    '平衡遊戲 — 曖昧極限篇',
    'Trò cân bằng — Mập mờ (cực hạn)',
    'Permainan seimbang — PDKT (ekstrem)'
  ),
  description: T(
    '읽씹하는 썸 vs 답장이 1시간 걸리는 썸. 12라운드 극한 선택으로 나의 썸 스타일을 알려드립니다.',
    'Left on read vs replies after an hour. Twelve extreme rounds reveal your situationship style.',
    '既読スルーされる関係 vs 返信に1時間かかる関係。12ラウンドの極限選択で、いい感じのときのスタイルがわかります。',
    '已读不回 vs 一小时才回。12 轮极限二选一，看看你的暧昧风格。',
    '已讀不回 vs 一小時才回。12 輪極限二選一，看看你的曖昧風格。',
    'Xem tin không trả lời vs trả lời sau một tiếng. 12 vòng cực hạn cho thấy kiểu mập mờ của bạn.',
    'Dibaca tapi tidak dibalas vs balas sejam. 12 ronde ekstrem mengungkap gaya PDKTmu.'
  ),
  tags: {
    ko: ['밸런스게임', '썸', '연애테스트'],
    en: ['balance game', 'situationship', 'dating test'],
    ja: ['バランスゲーム', 'いい感じ', '恋愛テスト'],
    'zh-CN': ['平衡游戏', '暧昧', '恋爱测试'],
    'zh-TW': ['平衡遊戲', '曖昧', '戀愛測試'],
    vi: ['trò cân bằng', 'mập mờ', 'test tình cảm'],
    id: ['permainan seimbang', 'PDKT', 'tes pacaran'],
  } as Record<Phase3SomeBalanceLocaleKey, string[]>,
};
