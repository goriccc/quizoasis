/** 우리 헤어질 확률? 커플 위험도 테스트 — phase3-couple-breakup-risk */

function tr(s: {
  ko: string;
  en: string;
  ja: string;
  'zh-CN': string;
  'zh-TW': string;
  vi: string;
  id: string;
}): Record<string, string> {
  return { ...s };
}

export interface Phase3CoupleBreakupRiskQuestion {
  id: number;
  question: Record<string, string>;
  options: Record<string, string>[];
}

/** 선택지 원래 순서 A=0점, B=1점, C=2점, D=3점 (셔플 후 매핑으로 복원) */
export interface Phase3CoupleBreakupRiskResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  levelLabel: Record<string, string>;
  oneLiner: Record<string, string>;
  prescription: Record<string, string>;
  breakupPercent: number;
}

export interface Phase3CoupleBreakupRiskPayload {
  /** 파트너 A 표시 이름 */
  n: string;
  /** Q1~Q12 원래 문항 순서, 각 값 0~3 (선택지 인덱스 = 배점) */
  a: number[];
}

export function encodeCouplePayload(p: Phase3CoupleBreakupRiskPayload): string {
  const json = JSON.stringify(p);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin);
}

export function decodeCouplePayload(raw: string): Phase3CoupleBreakupRiskPayload | null {
  try {
    const s = raw.trim();
    const bin = atob(s);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const json = new TextDecoder().decode(bytes);
    const o = JSON.parse(json) as Phase3CoupleBreakupRiskPayload;
    if (typeof o.n !== 'string' || !Array.isArray(o.a)) return null;
    if (o.a.length !== 12) return null;
    if (!o.a.every((x) => typeof x === 'number' && x >= 0 && x <= 3)) return null;
    return o;
  } catch {
    return null;
  }
}

/** 답변 배열(원문항 인덱스 → 선택지 0~3)의 개인 총점 0~36 */
export function sumIndividualScore(answersByOriginalIndex: Record<number, number>): number {
  let s = 0;
  for (let i = 0; i < 12; i++) {
    s += answersByOriginalIndex[i] ?? 0;
  }
  return s;
}

export function sumFromPayloadArray(a: number[]): number {
  return a.reduce((acc, v) => acc + v, 0);
}

export function calculateCoupleResultType(combinedScore: number): string {
  if (combinedScore <= 11) return 'Type1';
  if (combinedScore <= 23) return 'Type2';
  if (combinedScore <= 35) return 'Type3';
  if (combinedScore <= 47) return 'Type4';
  if (combinedScore <= 59) return 'Type5';
  return 'Type6';
}

/** GAP 해석 구간 키: gap0 | gap1 | gap2 | gap3 */
export function gapTier(gap: number): 'gap0' | 'gap1' | 'gap2' | 'gap3' {
  if (gap <= 5) return 'gap0';
  if (gap <= 12) return 'gap1';
  if (gap <= 20) return 'gap2';
  return 'gap3';
}

export function areaScoresFromAnswers(answers: number[]): {
  romance: number;
  conflict: number;
  communication: number;
} {
  return {
    romance: answers.slice(0, 4).reduce((x, y) => x + y, 0),
    conflict: answers.slice(4, 8).reduce((x, y) => x + y, 0),
    communication: answers.slice(8, 12).reduce((x, y) => x + y, 0),
  };
}

export const phase3CoupleBreakupRiskQuestions: Phase3CoupleBreakupRiskQuestion[] = [
  {
    id: 1,
    question: tr({
      ko: '연인과 함께 있을 때 나는 주로?',
      en: 'When I am with my partner, I usually…',
      ja: '恋人と一緒にいるとき、私はだいたい？',
      'zh-CN': '和恋人在一起时，我通常是？',
      'zh-TW': '和戀人在一起時，我通常是？',
      vi: 'Khi ở cùng người yêu, tôi thường…',
      id: 'Saat bersama pasangan, aku biasanya…',
    }),
    options: [
      tr({
        ko: '편안하고 자연스럽다. 함께 있는 시간이 충전이 된다',
        en: 'Comfortable and natural—time together recharges me.',
        ja: 'リラックスしていて自然。一緒の時間が充電になる。',
        'zh-CN': '放松自然，在一起的时光像在充电。',
        'zh-TW': '放鬆自然，在一起的時光像在充電。',
        vi: 'Thoải mái, tự nhiên—thời gian bên nhau giúp tôi nạp lại năng lượng.',
        id: 'Nyaman dan natural—waktu bersama mengisi energiku.',
      }),
      tr({
        ko: '대체로 좋지만 가끔 혼자 있고 싶다는 생각이 든다',
        en: 'Mostly good, but sometimes I want to be alone.',
        ja: 'だいたい良いが、時々一人になりたいと思う。',
        'zh-CN': '大体不错，但有时想一个人待着。',
        'zh-TW': '大體不錯，但有時想一個人待著。',
        vi: 'Nhìn chung ổn, nhưng đôi khi muốn ở một mình.',
        id: 'Mayoritas baik, tapi kadang ingin sendiri.',
      }),
      tr({
        ko: '맞춰주려고 노력하지만 속으론 피곤할 때가 많다',
        en: 'I try to go along, but inside I often feel drained.',
        ja: '合わせようとするが、内心はよく疲れる。',
        'zh-CN': '努力配合对方，但内心常常很累。',
        'zh-TW': '努力配合對方，但內心常常很累。',
        vi: 'Cố chiều nhưng trong lòng thường mệt mỏi.',
        id: 'Berusaha mengikuti, tapi di dalam sering lelah.',
      }),
      tr({
        ko: '함께 있어도 외롭거나 불안한 느낌이 자주 든다',
        en: 'Even together I often feel lonely or anxious.',
        ja: '一緒にいても孤独や不安を感じることが多い。',
        'zh-CN': '即使在一起也经常感到孤独或不安。',
        'zh-TW': '即使在一起也經常感到孤獨或不安。',
        vi: 'Dù bên nhau vẫn thường cô đơn hoặc lo lắng.',
        id: 'Meski bersama, sering merasa kesepian atau cemas.',
      }),
    ],
  },
  {
    id: 2,
    question: tr({
      ko: '연인에게 서운함이 생겼을 때 나는?',
      en: 'When I feel hurt by my partner, I…',
      ja: '恋人にモヤモヤを感じたとき、私は？',
      'zh-CN': '对恋人心生委屈时，我会？',
      'zh-TW': '對戀人心生委屈時，我會？',
      vi: 'Khi buồn phiền vì người yêu, tôi…',
      id: 'Saat merasa kecewa pada pasangan, aku…',
    }),
    options: [
      tr({
        ko: '그때그때 솔직하게 말하고 바로 풀어나간다',
        en: 'Say it honestly in the moment and clear it quickly.',
        ja: 'その都度正直に言ってすぐ解消する。',
        'zh-CN': '当时就坦诚说出来，马上化解。',
        'zh-TW': '當下就坦誠說出來，馬上化解。',
        vi: 'Nói thẳng ngay lúc đó và giải quyết nhanh.',
        id: 'Langsung jujur dan selesaikan cepat.',
      }),
      tr({
        ko: '좀 참다가 적당한 타이밍에 조심스럽게 말한다',
        en: 'Hold it in a bit, then bring it up carefully when the time is right.',
        ja: '少し我慢して、タイミングを見て慎重に言う。',
        'zh-CN': '先忍一下，再找合适时机小心沟通。',
        'zh-TW': '先忍一下，再找合適時機小心溝通。',
        vi: 'Nhịn một lúc, rồi nói cẩn thận đúng lúc.',
        id: 'Menahan sebentar, lalu bicara hati-hati saat waktu tepat.',
      }),
      tr({
        ko: '말하고 싶지만 상처줄까봐 혼자 삭히는 경우가 많다',
        en: 'Want to speak up but often swallow it alone for fear of hurting them.',
        ja: '言いたいが傷つけそうで、よく一人で飲み込む。',
        'zh-CN': '想说又怕伤到对方，常常自己咽下。',
        'zh-TW': '想說又怕傷到對方，常常自己嚥下。',
        vi: 'Muốn nói nhưng sợ làm tổn thương nên thường giữ một mình.',
        id: 'Ingin bicara tapi takut menyakiti, sering menelan sendiri.',
      }),
      tr({
        ko: '말을 안 하거나 투덜거리는 방식으로 간접적으로 표현한다',
        en: 'Stay silent or show it indirectly by grumbling.',
        ja: '黙るか、ぶつぶつ言うなど間接的に出す。',
        'zh-CN': '不说，或用抱怨等方式间接表达。',
        'zh-TW': '不說，或用抱怨等方式間接表達。',
        vi: 'Im lặng hoặc càu nhàu để thể hiện gián tiếp.',
        id: 'Diam atau mengeluh sebagai ekspresi tidak langsung.',
      }),
    ],
  },
  {
    id: 3,
    question: tr({
      ko: '연인의 주변 이성 친구에 대해 나는?',
      en: 'About my partner’s opposite-sex friends, I…',
      ja: '恋人の周りの異性の友だちについて、私は？',
      'zh-CN': '关于恋人的异性朋友，我？',
      'zh-TW': '關於戀人的異性朋友，我？',
      vi: 'Về bạn khác giới quanh người yêu, tôi…',
      id: 'Tentang teman lawan jenis di sekitar pasangan, aku…',
    }),
    options: [
      tr({
        ko: '믿으니까 특별히 신경 쓰지 않는다',
        en: 'I trust them, so I don’t worry much.',
        ja: '信頼しているので特に気にしない。',
        'zh-CN': '因为信任，不太在意。',
        'zh-TW': '因為信任，不太在意。',
        vi: 'Tin tưởng nên không đặc biệt lo lắng.',
        id: 'Percaya jadi tidak terlalu memikirkan.',
      }),
      tr({
        ko: '약간 신경 쓰이지만 내색하지 않으려 노력한다',
        en: 'A little bothered, but I try not to show it.',
        ja: '少し気になるが、出さないよう努める。',
        'zh-CN': '有点在意，但努力不表现出来。',
        'zh-TW': '有點在意，但努力不表現出來。',
        vi: 'Hơi bận tâm nhưng cố không lộ ra.',
        id: 'Sedikit risau tapi berusaha tidak menunjukkan.',
      }),
      tr({
        ko: '은근히 체크하게 되고 가끔 물어보기도 한다',
        en: 'I subtly check in and sometimes ask about it.',
        ja: 'うっすら確認したくなり、時々聞く。',
        'zh-CN': '会暗暗留意，有时也会问。',
        'zh-TW': '會暗暗留意，有時也會問。',
        vi: 'Âm thầm để ý và đôi khi hỏi.',
        id: 'Diam-diam mengawasi dan kadang bertanya.',
      }),
      tr({
        ko: '많이 불편하고 솔직히 줄여줬으면 좋겠다고 생각한다',
        en: 'Quite uncomfortable—I honestly wish they’d reduce contact.',
        ja: 'かなり気まずく、正直減ってほしいと思う。',
        'zh-CN': '很不舒服，真心希望对方减少来往。',
        'zh-TW': '很不舒服，真心希望對方減少來往。',
        vi: 'Khá khó chịu—thành thật muốn họ giảm tương tác.',
        id: 'Sangat tidak nyaman—sejujurnya ingin mereka kurangi.',
      }),
    ],
  },
  {
    id: 4,
    question: tr({
      ko: '연인과 미래(결혼, 동거, 진로 등)에 대해 이야기할 때?',
      en: 'When talking about the future (marriage, living together, career, etc.)…',
      ja: '将来（結婚・同棲・進路など）の話をするとき？',
      'zh-CN': '谈到未来（结婚、同居、职业规划等）时？',
      'zh-TW': '談到未來（結婚、同居、職涯等）時？',
      vi: 'Khi nói về tương lai (cưới, sống chung, sự nghiệp…)…',
      id: 'Saat membicarakan masa depan (nikah, serumah, karier, dll.)…',
    }),
    options: [
      tr({
        ko: '자연스럽게 구체적으로 이야기할 수 있다',
        en: 'We can talk naturally and in concrete terms.',
        ja: '自然に具体的に話せる。',
        'zh-CN': '能自然、具体地讨论。',
        'zh-TW': '能自然、具體地討論。',
        vi: 'Có thể nói tự nhiên và cụ thể.',
        id: 'Bisa bicara natural dan konkret.',
      }),
      tr({
        ko: '이야기하긴 하지만 아직 막연한 느낌이 든다',
        en: 'We talk, but it still feels vague.',
        ja: '話すが、まだふわっとしている。',
        'zh-CN': '有聊，但感觉还很模糊。',
        'zh-TW': '有聊，但感覺還很模糊。',
        vi: 'Có nói nhưng vẫn cảm thấy mơ hồ.',
        id: 'Ada obrolan tapi masih terasa samar.',
      }),
      tr({
        ko: '부담스럽거나 불편해서 피하게 되는 편이다',
        en: 'It feels heavy or awkward, so I tend to avoid it.',
        ja: '負担や居心地の悪さで避けがち。',
        'zh-CN': '有压力或不舒服，倾向于回避。',
        'zh-TW': '有壓力或不舒服，傾向於回避。',
        vi: 'Thấy nặng hoặc ngại nên hay tránh.',
        id: 'Terasa berat atau canggung, cenderung menghindar.',
      }),
      tr({
        ko: '방향이 안 맞는 것 같아 이야기할 때마다 불안해진다',
        en: 'Our directions feel misaligned—I get anxious every time we talk.',
        ja: '方向性が合わない気がして、話すたび不安になる。',
        'zh-CN': '感觉方向不一致，每次谈都很焦虑。',
        'zh-TW': '感覺方向不一致，每次談都很焦慮。',
        vi: 'Cảm giác không cùng hướng—mỗi lần nói là lo lắng.',
        id: 'Rasanya arah tidak selaras—setiap bicara jadi cemas.',
      }),
    ],
  },
  {
    id: 5,
    question: tr({
      ko: '연인과 싸우고 나서 나는 주로?',
      en: 'After a fight with my partner, I usually…',
      ja: '恋人と喧嘩したあと、私はだいたい？',
      'zh-CN': '和恋人吵架之后，我通常是？',
      'zh-TW': '和戀人吵架之後，我通常是？',
      vi: 'Sau khi cãi nhau với người yêu, tôi thường…',
      id: 'Setelah bertengkar dengan pasangan, aku biasanya…',
    }),
    options: [
      tr({
        ko: '감정이 가라앉으면 먼저 다가가거나 화해를 제안한다',
        en: 'When emotions cool, I approach first or suggest making up.',
        ja: '落ち着いたら先に近づくか、仲直りを提案する。',
        'zh-CN': '情绪平复后会主动靠近或提议和好。',
        'zh-TW': '情緒平復後會主動靠近或提議和好。',
        vi: 'Khi nguôi, tôi chủ động lại gần hoặc đề nghị làm hòa.',
        id: 'Saat tenang, aku dekati dulu atau ajak berbaikan.',
      }),
      tr({
        ko: '시간이 좀 지나면 자연스럽게 풀리는 편이다',
        en: 'It tends to fade naturally after some time.',
        ja: '時間が経つと自然に収まることが多い。',
        'zh-CN': '过一阵子往往会自然缓和。',
        'zh-TW': '過一陣子往往會自然緩和。',
        vi: 'Một lúc sau thường tự nhiên xoa dịu.',
        id: 'Setelah beberapa waktu biasanya reda sendiri.',
      }),
      tr({
        ko: '상대가 먼저 사과하거나 다가올 때까지 기다린다',
        en: 'I wait until they apologize or come to me first.',
        ja: '相手が謝るか近づくまで待つ。',
        'zh-CN': '等对方先道歉或先靠近。',
        'zh-TW': '等對方先道歉或先靠近。',
        vi: 'Chờ đối phương xin lỗi hoặc chủ động trước.',
        id: 'Menunggu mereka minta maaf atau mendekat dulu.',
      }),
      tr({
        ko: '한번 삐치면 오래가거나 완전히 해결이 안 된 채로 덮어두는 경우가 있다',
        en: 'Once upset, it lasts long—or we sweep it under the rug unresolved.',
        ja: '一度拗れると長引くか、未解決のまま蓋をすることがある。',
        'zh-CN': '一闹别扭就很久，或没解决就翻篇。',
        'zh-TW': '一鬧彆扭就很久，或沒解決就翻篇。',
        vi: 'Một khi giận thì kéo dài, hoặc chưa xong đã cho qua.',
        id: 'Sekali merajuk lama, atau ditutup tanpa selesai.',
      }),
    ],
  },
  {
    id: 6,
    question: tr({
      ko: '갈등 상황에서 나의 의사소통 방식은?',
      en: 'In conflict, my communication style is…',
      ja: '対立のとき、私のコミュニケーションは？',
      'zh-CN': '在冲突中，我的沟通方式是？',
      'zh-TW': '在衝突中，我的溝通方式是？',
      vi: 'Trong mâu thuẫn, kiểu giao tiếp của tôi là…',
      id: 'Saat konflik, gaya komunikasiku…',
    }),
    options: [
      tr({
        ko: '감정적이 되더라도 끝까지 대화로 해결하려 한다',
        en: 'Even if emotional, I try to resolve it through talk to the end.',
        ja: '感情的でも最後まで話し合いで解決しようとする。',
        'zh-CN': '即使情绪化也尽量用对话解决到底。',
        'zh-TW': '即使情緒化也盡量用對話解決到底。',
        vi: 'Dù cảm xúc vẫn cố giải quyết bằng trò chuyện đến cùng.',
        id: 'Meski emosional tetap berusaha selesaikan lewat bicara.',
      }),
      tr({
        ko: '흥분하면 잠시 자리를 피했다가 차분해진 후 다시 이야기한다',
        en: 'If heated, I step away briefly, then talk again when calm.',
        ja: '熱くなったら一度離れ、落ち着いてから話す。',
        'zh-CN': '激动时会先离开一下，冷静后再谈。',
        'zh-TW': '激動時會先離開一下，冷靜後再談。',
        vi: 'Khi nóng, tạm rời chỗ, bình tĩnh rồi nói lại.',
        id: 'Kalau panas, minggu dulu, tenang lalu bicara lagi.',
      }),
      tr({
        ko: '싸우는 게 너무 싫어서 내가 먼저 양보하거나 포기하는 경우가 많다',
        en: 'I hate fighting, so I often give in or give up first.',
        ja: '喧嘩が苦手で、先に譲る・諦めることが多い。',
        'zh-CN': '太讨厌吵架，常常先让步或放弃。',
        'zh-TW': '太討厭吵架，常常先讓步或放棄。',
        vi: 'Ghét cãi quá nên thường nhượng bộ hoặc bỏ cuộc trước.',
        id: 'Benci berkelahi jadi sering mengalah atau menyerah dulu.',
      }),
      tr({
        ko: '감정적으로 폭발하거나 반대로 완전히 입을 닫아버리는 경우가 있다',
        en: 'I either explode emotionally—or go completely silent.',
        ja: '感情爆発か、逆に完全に黙ることがある。',
        'zh-CN': '要么情绪爆发，要么完全沉默。',
        'zh-TW': '要麼情緒爆發，要麼完全沉默。',
        vi: 'Hoặc bùng nổ cảm xúc, hoặc im lặng hoàn toàn.',
        id: 'Entah meledak secara emosional, atau diam total.',
      }),
    ],
  },
  {
    id: 7,
    question: tr({
      ko: '같은 문제로 반복해서 싸운 적이 있나요?',
      en: 'Have you fought repeatedly over the same issue?',
      ja: '同じ問題で繰り返し喧嘩したことは？',
      'zh-CN': '有没有因为同一个问题反复争吵过？',
      'zh-TW': '有沒有因為同一個問題反覆爭吵過？',
      vi: 'Bạn đã từng cãi nhau lặp lại vì cùng một vấn đề chưa?',
      id: 'Pernah berulang berkelahi karena masalah yang sama?',
    }),
    options: [
      tr({
        ko: '거의 없다. 한번 해결하면 같은 문제로 다시 싸우지 않는다',
        en: 'Rarely—once solved, we don’t fight over it again.',
        ja: 'ほぼない。一度解決したら同じ理由では喧嘩しない。',
        'zh-CN': '几乎没有。解决一次就不会为同样的事再吵。',
        'zh-TW': '幾乎沒有。解決一次就不會為同樣的事再吵。',
        vi: 'Hiếm—giải quyết một lần là không cãi lại vì chuyện đó.',
        id: 'Jarang—sekali selesai tidak berkelahi lagi soal itu.',
      }),
      tr({
        ko: '가끔 있지만 점점 나아지고 있다고 느낀다',
        en: 'Sometimes, but I feel we’re gradually improving.',
        ja: 'たまにあるが、少しずつ良くなっている気がする。',
        'zh-CN': '偶尔有，但感觉在慢慢变好。',
        'zh-TW': '偶爾有，但感覺在慢慢變好。',
        vi: 'Đôi khi có nhưng cảm giác dần tốt hơn.',
        id: 'Kadang ada tapi terasa perlahan membaik.',
      }),
      tr({
        ko: '꽤 있다. 해결된 것 같다가도 같은 문제가 또 터진다',
        en: 'Quite often—it seems fixed, then the same issue blows up again.',
        ja: 'かなりある。解決したはずがまた同じ問題が出る。',
        'zh-CN': '挺多的。以为解决了，同样的问题又会爆。',
        'zh-TW': '挺多的。以為解決了，同樣的問題又會爆。',
        vi: 'Khá thường—tưởng xong rồi lại bùng cùng vấn đề.',
        id: 'Cukup sering—selesai lalu masalah sama meledak lagi.',
      }),
      tr({
        ko: '반복되는 갈등이 있고, 솔직히 해결될 것 같지 않다',
        en: 'The conflict repeats—and honestly it doesn’t feel fixable.',
        ja: '繰り返しがあり、正直解決しそうにない。',
        'zh-CN': '冲突在重复，老实说感觉解决不了。',
        'zh-TW': '衝突在重複，老實說感覺解決不了。',
        vi: 'Lặp lại—thành thật là không thấy hướng giải quyết.',
        id: 'Berulang—jujur rasanya tidak akan selesai.',
      }),
    ],
  },
  {
    id: 8,
    question: tr({
      ko: '연인이 나에게 서운하다고 말할 때 나의 반응은?',
      en: 'When my partner says they feel hurt by me, I…',
      ja: '恋人が「傷ついた」と言ったとき、私の反応は？',
      'zh-CN': '恋人说对我感到委屈时，我的反应是？',
      'zh-TW': '戀人說對我感到委屈時，我的反應是？',
      vi: 'Khi người yêu nói họ buồn vì tôi, tôi…',
      id: 'Saat pasangan bilang kecewa padaku, reaksiku…',
    }),
    options: [
      tr({
        ko: '진지하게 듣고 내 잘못이 있으면 인정하고 바꾸려 노력한다',
        en: 'Listen seriously; if I’m wrong, I admit it and try to change.',
        ja: '真剣に聞き、自分が悪ければ認めて変えようとする。',
        'zh-CN': '认真听，有错就认并努力改。',
        'zh-TW': '認真聽，有錯就認並努力改。',
        vi: 'Lắng nghe nghiêm túc; sai thì nhận và cố đổi.',
        id: 'Dengar serius; jika salah mengaku dan berusaha berubah.',
      }),
      tr({
        ko: '처음엔 방어적이 되지만 나중에는 받아들이는 편이다',
        en: 'Defensive at first, but I tend to accept it later.',
        ja: '最初は防衛的だが、後から受け止めることが多い。',
        'zh-CN': '一开始会防御，但后来多半能接受。',
        'zh-TW': '一開始會防禦，但後來多半能接受。',
        vi: 'Lúc đầu phòng thủ, sau đó thường chấp nhận.',
        id: 'Awalnya defensif, lalu cenderung menerima.',
      }),
      tr({
        ko: '억울하거나 답답해서 내 입장을 먼저 설명하게 된다',
        en: 'Feel wronged or stifled, so I explain my side first.',
        ja: '冤屈やもどかしさで、まず自分の立場を説明する。',
        'zh-CN': '觉得委屈或憋屈，会先解释自己的立场。',
        'zh-TW': '覺得委屈或憋屈，會先解釋自己的立場。',
        vi: 'Thấy oan hoặc nghẹn nên giải thích phía mình trước.',
        id: 'Merasa tidak adil atau sesak, jelaskan sisi sendiri dulu.',
      }),
      tr({
        ko: '기분이 나빠지거나 오히려 역공격을 하게 되는 경우가 있다',
        en: 'I get moody—or counterattack instead.',
        ja: '機嫌が悪くなるか、逆攻撃してしまうことがある。',
        'zh-CN': '会心情不好，或反而反击对方。',
        'zh-TW': '會心情不好，或反而反擊對方。',
        vi: 'Tâm trạng tệ hoặc phản công lại.',
        id: 'Jadi murung atau malah balik menyerang.',
      }),
    ],
  },
  {
    id: 9,
    question: tr({
      ko: '연인과 연락 빈도와 방식에 대해 나는?',
      en: 'About contact frequency and style with my partner, I…',
      ja: '恋人との連絡の頻度・やり方について、私は？',
      'zh-CN': '关于和恋人的联系频率与方式，我？',
      'zh-TW': '關於和戀人的聯繫頻率與方式，我？',
      vi: 'Về tần suất và cách liên lạc với người yêu, tôi…',
      id: 'Tentang frekuensi dan gaya kontak dengan pasangan, aku…',
    }),
    options: [
      tr({
        ko: '서로 맞춰져 있어서 불편함이 없다',
        en: 'We’re aligned—no discomfort.',
        ja: 'お互いに合っていて違和感がない。',
        'zh-CN': '彼此合拍，没有不适。',
        'zh-TW': '彼此合拍，沒有不適。',
        vi: 'Khớp nhau—không khó chịu.',
        id: 'Sudah selaras—tidak ada rasa canggung.',
      }),
      tr({
        ko: '약간 차이가 있지만 어느 정도 조율이 된 상태다',
        en: 'Some difference, but we’ve adjusted reasonably well.',
        ja: '少し差はあるが、ある程度調整できている。',
        'zh-CN': '有些差异，但大致协调好了。',
        'zh-TW': '有些差異，但大致協調好了。',
        vi: 'Hơi khác nhưng đã điều chỉnh ổn.',
        id: 'Ada sedikit beda tapi sudah dikompromikan.',
      }),
      tr({
        ko: '차이가 있고 가끔 연락 때문에 스트레스를 받는다',
        en: 'There’s a gap—contact sometimes stresses me out.',
        ja: '差があり、連絡で時々ストレスを感じる。',
        'zh-CN': '有差距，有时因联系感到压力。',
        'zh-TW': '有差距，有時因聯繫感到壓力。',
        vi: 'Có khoảng cách—đôi khi căng vì liên lạc.',
        id: 'Ada jarak—kadang stres karena kontak.',
      }),
      tr({
        ko: '연락 패턴이 많이 달라서 자주 갈등이 생긴다',
        en: 'Our contact patterns clash—we fight about it often.',
        ja: '連絡のパターンが合わず、よくもめる。',
        'zh-CN': '联系习惯差很多，经常为此争执。',
        'zh-TW': '聯繫習慣差很多，經常為此爭執。',
        vi: 'Kiểu liên lạc khác xa—hay cãi vì chuyện này.',
        id: 'Pola kontak sangat beda—sering bentrok.',
      }),
    ],
  },
  {
    id: 10,
    question: tr({
      ko: '연인에게 "사랑해", "보고 싶어" 같은 감정 표현을 하는 편인가요?',
      en: 'How often do you express feelings like “I love you” or “I miss you”?',
      ja: '「愛してる」「会いたい」などの感情表現は？',
      'zh-CN': '你会常说「我爱你」「想你」这类表达吗？',
      'zh-TW': '你會常說「我愛你」「想你」這類表達嗎？',
      vi: 'Bạn có hay nói “anh yêu em”, “nhớ em” kiểu vậy không?',
      id: 'Seberapa sering kamu mengungkapkan perasaan seperti “sayang” atau “kangen”?',
    }),
    options: [
      tr({
        ko: '자연스럽고 자주 한다',
        en: 'Naturally and often.',
        ja: '自然によくする。',
        'zh-CN': '自然且经常。',
        'zh-TW': '自然且經常。',
        vi: 'Tự nhiên và thường xuyên.',
        id: 'Natural dan sering.',
      }),
      tr({
        ko: '하긴 하지만 먼저 하기는 좀 쑥스럽다',
        en: 'I do, but I’m shy to say it first.',
        ja: 'するが、先に言うのは少し照れる。',
        'zh-CN': '会说，但先开口有点害羞。',
        'zh-TW': '會說，但先開口有點害羞。',
        vi: 'Có nói nhưng ngại nói trước.',
        id: 'Ada, tapi malu memulai duluan.',
      }),
      tr({
        ko: '잘 못하는 편이고 상대가 먼저 해줘야 반응하는 편이다',
        en: 'Not great at it—I mostly respond after they say it first.',
        ja: '苦手で、先に言われないと反応しにくい。',
        'zh-CN': '不太擅长，多半等对方先说我才回应。',
        'zh-TW': '不太擅長，多半等對方先說我才回應。',
        vi: 'Không giỏi—thường phản hồi sau khi đối phương nói trước.',
        id: 'Kurang pandai—biasanya baru merespons kalau mereka dulu.',
      }),
      tr({
        ko: '거의 안 하거나 감정 표현 자체가 불편하다',
        en: 'Rarely—or expressing feelings feels uncomfortable.',
        ja: 'ほぼしないか、表現自体が苦手。',
        'zh-CN': '几乎不说，或表达感情本身就不自在。',
        'zh-TW': '幾乎不說，或表達感情本身就不自在。',
        vi: 'Hiếm khi—hoặc thấy khó khi bày tỏ cảm xúc.',
        id: 'Jarang—atau mengungkapkan perasaan terasa canggung.',
      }),
    ],
  },
  {
    id: 11,
    question: tr({
      ko: '나의 개인 시간(혼자만의 시간, 친구 약속 등)에 대해 연인은?',
      en: 'Regarding my personal time (alone, plans with friends, etc.), my partner…',
      ja: '私の個人時間（一人の時間・友だちとの予定など）について、恋人は？',
      'zh-CN': '关于我的个人时间（独处、朋友聚会等），恋人是？',
      'zh-TW': '關於我的個人時間（獨處、朋友聚會等），戀人是？',
      vi: 'Về thời gian riêng của tôi (ở một mình, hẹn bạn…), người yêu…',
      id: 'Tentang waktu pribadiku (sendiri, janji teman, dll.), pasangan…',
    }),
    options: [
      tr({
        ko: '서로 독립적인 시간을 존중하고 있다',
        en: 'We respect each other’s independent time.',
        ja: '互いの独立した時間を尊重している。',
        'zh-CN': '彼此尊重各自的独立时间。',
        'zh-TW': '彼此尊重各自的獨立時間。',
        vi: 'Tôn trọng thời gian độc lập của nhau.',
        id: 'Saling menghormati waktu mandiri.',
      }),
      tr({
        ko: '대체로 괜찮지만 가끔 조율이 필요할 때가 있다',
        en: 'Mostly fine, but sometimes we need to negotiate.',
        ja: 'だいたい大丈夫だが、時々調整が必要。',
        'zh-CN': '大体可以，但有时需要协调。',
        'zh-TW': '大體可以，但有時需要協調。',
        vi: 'Nhìn chung ổn nhưng đôi cần thỏa thuận.',
        id: 'Mayoritas oke tapi kadang perlu koordinasi.',
      }),
      tr({
        ko: '연인이 내 개인 시간에 예민하게 반응하거나 내가 신경 쓰이는 편이다',
        en: 'They’re sensitive about my personal time—or I worry about it.',
        ja: '個人時間に敏感だったり、こちらが気になる。',
        'zh-CN': '对方对个人时间很敏感，或我会很在意。',
        'zh-TW': '對方對個人時間很敏感，或我會很在意。',
        vi: 'Họ nhạy cảm với thời gian riêng của tôi—hoặc tôi lo lắng.',
        id: 'Mereka sensitif soal waktu pribadiku—atau aku yang khawatir.',
      }),
      tr({
        ko: '개인 시간 문제로 자주 부딪히고 서로 불만이 있다',
        en: 'We clash often over personal time—both feel dissatisfied.',
        ja: '個人時間でよく衝突し、互いに不満がある。',
        'zh-CN': '常因个人时间起冲突，彼此不满。',
        'zh-TW': '常因個人時間起衝突，彼此不滿。',
        vi: 'Hay va chạm vì thời gian riêng—cả hai đều bức xúc.',
        id: 'Sering bentrok soal waktu pribadi—sama-sama tidak puas.',
      }),
    ],
  },
  {
    id: 12,
    question: tr({
      ko: '지금 이 관계에 대해 솔직한 나의 생각은?',
      en: 'Honestly, what do you think about this relationship right now?',
      ja: '今のこの関係について、正直な自分の気持ちは？',
      'zh-CN': '对这段关系，你此刻最真实的想法是？',
      'zh-TW': '對這段關係，你此刻最真實的想法是？',
      vi: 'Thành thật mà nói, bạn nghĩ gì về mối quan hệ này lúc này?',
      id: 'Sejujurnya, apa pendapatmu tentang hubungan ini sekarang?',
    }),
    options: [
      tr({
        ko: '이 사람과 오래가고 싶고 함께하는 게 행복하다',
        en: 'I want to last with this person—being together makes me happy.',
        ja: 'この人と長くいたい。一緒にいることが幸せ。',
        'zh-CN': '想和这个人长久走下去，在一起很幸福。',
        'zh-TW': '想和這個人長久走下去，在一起很幸福。',
        vi: 'Muốn đi lâu dài với người này—bên nhau là hạnh phúc.',
        id: 'Ingin bertahan lama bersama orang ini—bersama itu bahagia.',
      }),
      tr({
        ko: '좋지만 가끔 불안하거나 아쉬운 부분이 있다',
        en: 'It’s good, but sometimes anxious or something feels missing.',
        ja: '良いが、時々不安や物足りなさがある。',
        'zh-CN': '挺好，但有时不安或有遗憾。',
        'zh-TW': '挺好，但有時不安或有遺憾。',
        vi: 'Tốt nhưng đôi lo lắng hoặc thiếu thỏa mãn.',
        id: 'Baik tapi kadang cemas atau ada yang kurang.',
      }),
      tr({
        ko: '노력은 하는데 요즘 지치거나 회의감이 드는 날이 있다',
        en: 'I try, but lately some days I feel tired or doubtful.',
        ja: '努力はしているが、最近は疲れたり疑いを感じる日がある。',
        'zh-CN': '在努力，但最近有时会累或怀疑。',
        'zh-TW': '在努力，但最近有時會累或懷疑。',
        vi: 'Cố gắng nhưng gần đây có ngày mệt hoài nghi.',
        id: 'Berusaha tapi belakangan ada hari lelah atau ragu.',
      }),
      tr({
        ko: '솔직히 이 관계가 맞는지 확신이 없는 상태다',
        en: 'Honestly I’m not sure this relationship is right for me.',
        ja: '正直、この関係が合っているか自信がない。',
        'zh-CN': '老实说，不确定这段关系是否合适。',
        'zh-TW': '老實說，不確定這段關係是否合適。',
        vi: 'Thành thật là không chắc mối này có phù hợp.',
        id: 'Sejujurnya tidak yakin hubungan ini cocok.',
      }),
    ],
  },
];

export const phase3CoupleBreakupRiskResults: Phase3CoupleBreakupRiskResult[] = [
  {
    type: 'Type1',
    emoji: '💚',
    breakupPercent: 5,
    title: tr({
      ko: '위험도 SAFE 💚 헤어질 확률 5%',
      en: 'Risk SAFE 💚 Breakup chance 5%',
      ja: '危険度 SAFE 💚 別れ確率 5%',
      'zh-CN': '危险度 SAFE 💚 分手概率 5%',
      'zh-TW': '危險度 SAFE 💚 分手機率 5%',
      vi: 'Mức rủi ro SAFE 💚 Xác suất chia tay 5%',
      id: 'Risiko SAFE 💚 Peluang putus 5%',
    }),
    shortDescription: tr({
      ko: '"축하합니다. 이 커플, 꽤 건강합니다."',
      en: '"Congrats—this couple looks quite healthy."',
      ja: '"おめでとう。このカップル、かなり健全です。"',
      'zh-CN': '“恭喜，这对情侣相当健康。”',
      'zh-TW': '「恭喜，這對情侶相當健康。」',
      vi: '"Chúc mừng—cặp đôi này khá lành mạnh."',
      id: '"Selamat—pasangan ini cukup sehat."',
    }),
    description: tr({
      ko: '두 사람 모두 감정적으로 안정적이고, 갈등을 건강하게 다루는 방식을 알고 있습니다. 의사소통도 원활하고 서로를 신뢰하는 분위기가 느껴집니다. 이 점수가 나왔다면 두 사람은 커플로서 훌륭한 기반을 갖추고 있습니다. 지금처럼만 해주세요.',
      en: 'You’re both emotionally steady and know how to handle conflict in a healthy way. Communication flows and trust shows. This score means you’ve built a strong foundation—keep it up.',
      ja: 'お二人とも感情的に安定し、対立の扱い方が健全です。コミュニケーションもスムーズで信頼が感じられます。このスコアなら、カップルとして素晴らしい土台があります。この調子で。',
      'zh-CN': '你们情绪稳定，也懂得健康处理冲突。沟通顺畅、彼此信任。这个分数说明你们有很好的基础——请继续保持。',
      'zh-TW': '你們情緒穩定，也懂得健康處理衝突。溝通順暢、彼此信任。這個分數代表有很好的基礎——請繼續保持。',
      vi: 'Cả hai đều ổn định cảm xúc và biết xử lý mâu thuẫn lành mạnh. Giao tiếp trôi chảy, tin tưởng nhau. Điểm này cho thấy nền tảng tốt—hãy duy trì.',
      id: 'Kalian emosional stabil dan tahu menangani konflik dengan sehat. Komunikasi lancar dan saling percaya. Skor ini menunjukkan fondasi kuat—pertahankan.',
    }),
    levelLabel: tr({
      ko: '🟢 안전',
      en: '🟢 Safe',
      ja: '🟢 安全',
      'zh-CN': '🟢 安全',
      'zh-TW': '🟢 安全',
      vi: '🟢 An toàn',
      id: '🟢 Aman',
    }),
    oneLiner: tr({
      ko: '관계가 건강합니다. 지금 이 순간을 소중히 하세요.',
      en: 'Your relationship is healthy—cherish this moment.',
      ja: '関係は健全です。今この瞬間を大切に。',
      'zh-CN': '关系很健康，请珍惜当下。',
      'zh-TW': '關係很健康，請珍惜當下。',
      vi: 'Mối quan hệ lành mạnh—hãy trân trọng khoảnh khắc này.',
      id: 'Hubungan sehat—hargai momen ini.',
    }),
    prescription: tr({
      ko: '지금 잘 하고 있어요. 기념일 챙기는 것 잊지 마세요.',
      en: 'You’re doing well—don’t forget anniversaries and little rituals.',
      ja: '今のままで大丈夫。記念日なども忘れずに。',
      'zh-CN': '你们做得很好，别忘了纪念日和仪式感。',
      'zh-TW': '你們做得很好，別忘了紀念日與儀式感。',
      vi: 'Các bạn đang làm tốt—đừng quên ngày kỷ niệm và những điều nhỏ.',
      id: 'Kalian sudah baik—jangan lupa hari jadi dan ritual kecil.',
    }),
  },
  {
    type: 'Type2',
    emoji: '💛',
    breakupPercent: 20,
    title: tr({
      ko: '위험도 LOW 💛 헤어질 확률 20%',
      en: 'Risk LOW 💛 Breakup chance 20%',
      ja: '危険度 LOW 💛 別れ確率 20%',
      'zh-CN': '危险度 LOW 💛 分手概率 20%',
      'zh-TW': '危險度 LOW 💛 分手機率 20%',
      vi: 'Mức rủi ro LOW 💛 Xác suất chia tay 20%',
      id: 'Risiko LOW 💛 Peluang putus 20%',
    }),
    shortDescription: tr({
      ko: '"전반적으로 괜찮은데, 작은 균열이 조금씩 쌓이고 있습니다."',
      en: '"Overall okay—but small cracks are stacking up."',
      ja: '"全体的には大丈夫ですが、小さなひびが少しずつ積み重なっています。"',
      'zh-CN': '“整体还行，但小裂缝在慢慢堆积。”',
      'zh-TW': '「整體還行，但小裂縫在慢慢堆積。」',
      vi: '"Nhìn chung ổn—nhưng những vết nứt nhỏ đang chồng chất."',
      id: '"Secara keseluruhan oke—tapi retakan kecil menumpuk."',
    }),
    description: tr({
      ko: '심각한 문제는 없지만 서로 불편한 부분을 참거나 덮어두고 있는 영역이 있습니다. 지금은 괜찮더라도 해결하지 않으면 나중에 터질 수 있습니다. 작은 불만들을 방치하지 말고 지금 꺼내 이야기해 보세요. 아직 충분히 좋아질 수 있습니다.',
      en: 'Nothing huge yet, but you may be swallowing discomfort or sweeping it under the rug. Fine for now, but unspoken issues can blow up later. Don’t ignore small grievances—talk now. There’s still room to improve.',
      ja: '深刻な問題はないが、違和感を飲み込んだり蓋をしている部分があります。今は大丈夫でも、放置すると後で爆発することがあります。小さな不満を今話し合って。まだ十分よくなれます。',
      'zh-CN': '没有大问题，但可能在忍耐或掩盖不适。现在还好，不处理以后可能爆发。别忽视小不满，现在就说开，还能变好。',
      'zh-TW': '沒有大問題，但可能在忍耐或掩蓋不適。現在還好，不處理以後可能爆發。別忽視小不滿，現在就說開，還能變好。',
      vi: 'Chưa có vấn đề lớn nhưng có thể đang nuốt khó chịu hoặc lấp liếm. Lúc này ổn nhưng để lâu có thể nổ. Đừng bỏ qua bức xúc nhỏ—nói ngay. Vẫn còn cải thiện được.',
      id: 'Belum ada masalah besar tapi mungkin menelan ketidaknyamanan atau menutupi. Sekarang oke tapi bisa meledak nanti. Jangan abaikan keluhan kecil—bicara sekarang. Masih bisa membaik.',
    }),
    levelLabel: tr({
      ko: '🟡 주의',
      en: '🟡 Caution',
      ja: '🟡 注意',
      'zh-CN': '🟡 注意',
      'zh-TW': '🟡 注意',
      vi: '🟡 Thận trọng',
      id: '🟡 Waspada',
    }),
    oneLiner: tr({
      ko: '참는 것이 쌓이면 결국 터집니다.',
      en: 'What you bottle up will eventually burst.',
      ja: '我慢が積もると、いつか爆発します。',
      'zh-CN': '忍久了终会爆发。',
      'zh-TW': '忍久了終會爆發。',
      vi: 'Nén lâu rồi sẽ vỡ òa.',
      id: 'Menahan terlalu lama pada akhirnya meledak.',
    }),
    prescription: tr({
      ko: '가벼운 대화부터 시작해서 서로의 불만을 꺼내보는 시간을 만드세요.',
      en: 'Start with light chats and make time to air small frustrations.',
      ja: '軽い会話から始め、互いの不満を出し合う時間を。',
      'zh-CN': '从轻聊开始，留出时间说出彼此的小不满。',
      'zh-TW': '從輕聊開始，留出時間說出彼此的小不滿。',
      vi: 'Bắt đầu từ chuyện nhẹ và dành thời gian nói nhỏ bực mình.',
      id: 'Mulai dari obrolan ringan dan luangkan waktu untuk mengeluarkan keluhan kecil.',
    }),
  },
  {
    type: 'Type3',
    emoji: '🟠',
    breakupPercent: 40,
    title: tr({
      ko: '위험도 MEDIUM 🟠 헤어질 확률 40%',
      en: 'Risk MEDIUM 🟠 Breakup chance 40%',
      ja: '危険度 MEDIUM 🟠 別れ確率 40%',
      'zh-CN': '危险度 MEDIUM 🟠 分手概率 40%',
      'zh-TW': '危險度 MEDIUM 🟠 分手機率 40%',
      vi: 'Mức rủi ro MEDIUM 🟠 Xác suất chia tay 40%',
      id: 'Risiko MEDIUM 🟠 Peluang putus 40%',
    }),
    shortDescription: tr({
      ko: '"경고등이 켜졌습니다. 지금 관계를 점검할 필요가 있습니다."',
      en: '"Warning lights are on—it’s time to check the relationship."',
      ja: '"警告灯が点灯しています。今、関係を点検する必要があります。"',
      'zh-CN': '“警示灯亮了，该检视这段关系了。”',
      'zh-TW': '「警示燈亮了，該檢視這段關係了。」',
      vi: '"Đèn cảnh báo đã bật—cần kiểm tra mối quan hệ."',
      id: '"Lampu peringatan menyala—saatnya meninjau hubungan."',
    }),
    description: tr({
      ko: '두 사람 중 한 명 이상이 관계에서 지침을 느끼고 있거나, 갈등이 반복되고 있을 가능성이 있습니다. 이대로 방치하면 관계가 서서히 소진됩니다. 상대에게 맞춰주기만 하거나 혼자 참고 있는 부분이 있다면 지금이 이야기할 타이밍입니다.',
      en: 'One or both of you may feel drained, or conflicts may be repeating. If you leave it, the relationship can slowly wear out. If you’re only accommodating—or suffering alone—now is the time to talk.',
      ja: 'どちらか、または両方が疲れているか、対立が繰り返している可能性があります。このまま放置すると関係はすり減ります。合わせるだけ／一人で我慢しているなら、今が話すタイミングです。',
      'zh-CN': '至少一方可能感到疲惫，或冲突在重复。放任不管关系会慢慢耗尽。若只是一味迁就或独自忍耐，现在就该谈。',
      'zh-TW': '至少一方可能感到疲憊，或衝突在重複。放任不管關係會慢慢耗盡。若只是一味遷就或獨自忍耐，現在就該談。',
      vi: 'Một hoặc cả hai có thể kiệt sức, hoặc mâu thuẫn lặp lại. Để mặc thì quan hệ sẽ hao mòn. Nếu chỉ chiều hoặc chịu một mình—giờ là lúc nói.',
      id: 'Salah satu atau keduanya mungkin lelah, atau konflik berulang. Dibiarkan hubungan akan habis. Jika hanya mengalah atau menanggung sendiri—sekarang waktunya bicara.',
    }),
    levelLabel: tr({
      ko: '🟠 경고',
      en: '🟠 Warning',
      ja: '🟠 警告',
      'zh-CN': '🟠 警告',
      'zh-TW': '🟠 警告',
      vi: '🟠 Cảnh báo',
      id: '🟠 Peringatan',
    }),
    oneLiner: tr({
      ko: '감정이 쌓이기 전에 솔직한 대화가 필요합니다.',
      en: 'You need an honest talk before emotions pile up.',
      ja: '感情が溜まる前に、正直な対話が必要です。',
      'zh-CN': '在情绪堆积前，需要坦诚对话。',
      'zh-TW': '在情緒堆積前，需要坦誠對話。',
      vi: 'Cần nói thật trước khi cảm xúc chồng chất.',
      id: 'Perlu bicara jujur sebelum emosi menumpuk.',
    }),
    prescription: tr({
      ko: '서로 불편한 것을 한 가지씩 솔직하게 꺼내는 대화 데이트를 해보세요.',
      en: 'Try a “talk date” where you each share one uncomfortable truth.',
      ja: '互いに「苦手なこと」を一つずつ正直に出す対話デートを。',
      'zh-CN': '试试“对话约会”，各自坦诚说一件不舒服的事。',
      'zh-TW': '試試「對話約會」，各自坦誠說一件不舒服的事。',
      vi: 'Thử “buổi hẹn nói chuyện”—mỗi người nói một điều khó chịu thật lòng.',
      id: 'Coba “kencan ngobrol”—masing-masing ungkap satu hal yang mengganggu.',
    }),
  },
  {
    type: 'Type4',
    emoji: '🔴',
    breakupPercent: 60,
    title: tr({
      ko: '위험도 HIGH 🔴 헤어질 확률 60%',
      en: 'Risk HIGH 🔴 Breakup chance 60%',
      ja: '危険度 HIGH 🔴 別れ確率 60%',
      'zh-CN': '危险度 HIGH 🔴 分手概率 60%',
      'zh-TW': '危險度 HIGH 🔴 分手機率 60%',
      vi: 'Mức rủi ro HIGH 🔴 Xác suất chia tay 60%',
      id: 'Risiko HIGH 🔴 Peluang putus 60%',
    }),
    shortDescription: tr({
      ko: '"두 사람, 솔직히 지금 많이 지쳐있습니다."',
      en: '"Honestly—you’re both pretty exhausted right now."',
      ja: '"お二人、正直かなり疲れています。"',
      'zh-CN': '“老实说，你们俩现在都很累。”',
      'zh-TW': '「老實說，你們倆現在都很累。」',
      vi: '"Thành thật—cả hai đang khá kiệt sức."',
      id: '"Sejujurnya—kalian berdua cukup lelah sekarang."',
    }),
    description: tr({
      ko: '갈등이 반복되거나, 의사소통 방식이 맞지 않거나, 한 명 이상이 관계에 대한 확신을 잃고 있는 상태입니다. 사랑이 없어서가 아니라 방식이 달라서 소진되는 경우입니다. 서로를 탓하기 전에 어떤 부분에서 방식이 다른지 파악하는 것이 먼저입니다.',
      en: 'Fights may repeat, communication styles may clash, or one or both may doubt the relationship. It’s often not “no love”—it’s burnout from mismatch. Before blaming each other, map where your styles differ.',
      ja: '対立の繰り返し、コミュニケーションの不一致、関係への確信喪失のどれかが起きやすい状態です。愛がないのではなく、やり方のズレで消耗していることも。責め合う前に、どこが違うかを把握することが先です。',
      'zh-CN': '冲突可能反复、沟通不合，或至少一方对关系失去信心。往往不是不爱，而是方式不同导致耗竭。先别互相指责，弄清哪里不同。',
      'zh-TW': '衝突可能反覆、溝通不合，或至少一方對關係失去信心。往往不是不愛，而是方式不同導致耗竭。先別互相指責，弄清哪裡不同。',
      vi: 'Cãi lặp lại, giao tiếp lệch nhau, hoặc mất niềm tin vào mối quan hệ. Đôi khi không phải hết yêu mà kiệt vì không khớp. Trước khi đổ lỗi, hãy xem khác nhau ở đâu.',
      id: 'Konflik berulang, gaya komunikasi bentrok, atau salah satu ragu pada hubungan. Bukan selalu karena tidak cinta—bisa habis karena tidak cocok. Sebelum saling menyalahkan, peta bagian yang berbeda.',
    }),
    levelLabel: tr({
      ko: '🔴 위험',
      en: '🔴 High risk',
      ja: '🔴 危険',
      'zh-CN': '🔴 危险',
      'zh-TW': '🔴 危險',
      vi: '🔴 Rủi ro cao',
      id: '🔴 Berisiko tinggi',
    }),
    oneLiner: tr({
      ko: '사랑은 있지만, 지금 관계 방식에 문제가 있습니다.',
      en: 'Love may be there—but how you relate right now is the problem.',
      ja: '愛はあっても、今の関わり方に問題があります。',
      'zh-CN': '爱可能还在，但现在的相处方式有问题。',
      'zh-TW': '愛可能還在，但現在的相處方式有問題。',
      vi: 'Có thể vẫn còn yêu—nhưng cách gắn kết hiện tại là vấn đề.',
      id: 'Mungkin masih ada cinta—tapi cara kalian berhubungan sekarang yang bermasalah.',
    }),
    prescription: tr({
      ko: '점수 차이(GAP)가 큰 영역을 확인하고, 그 부분부터 대화를 시작해 보세요.',
      en: 'Look at the areas with the biggest score gap (GAP) and start talking there.',
      ja: 'スコア差（GAP）が大きい領域を確認し、そこから話し始めて。',
      'zh-CN': '先看分数差距最大的领域，从那里开始谈。',
      'zh-TW': '先看分數差距最大的領域，從那裡開始談。',
      vi: 'Xem khu vực chênh điểm (GAP) lớn nhất và bắt đầu từ đó.',
      id: 'Lihat area dengan selisih skor (GAP) terbesar dan mulai bicara dari situ.',
    }),
  },
  {
    type: 'Type5',
    emoji: '⚫',
    breakupPercent: 80,
    title: tr({
      ko: '위험도 DANGER ⚫ 헤어질 확률 80%',
      en: 'Risk DANGER ⚫ Breakup chance 80%',
      ja: '危険度 DANGER ⚫ 別れ確率 80%',
      'zh-CN': '危险度 DANGER ⚫ 分手概率 80%',
      'zh-TW': '危險度 DANGER ⚫ 分手機率 80%',
      vi: 'Mức rủi ro DANGER ⚫ Xác suất chia tay 80%',
      id: 'Risiko DANGER ⚫ Peluang putus 80%',
    }),
    shortDescription: tr({
      ko: '"이 관계, 지금 매우 위태롭습니다."',
      en: '"This relationship is in a very fragile place."',
      ja: '"この関係は、今とても危ういです。"',
      'zh-CN': '“这段关系现在非常危险。”',
      'zh-TW': '「這段關係現在非常危險。」',
      vi: '"Mối quan hệ này đang rất mong manh."',
      id: '"Hubungan ini sangat rapuh sekarang."',
    }),
    description: tr({
      ko: '두 사람 모두 관계에서 상당한 스트레스와 피로감을 느끼고 있을 가능성이 높습니다. 반복되는 갈등, 쌓인 감정, 서로에 대한 불신이 복합적으로 작용하고 있습니다. 이 결과가 두 사람 모두에게 솔직하게 받아들여진다면, 지금이 관계를 다시 정의할 마지막 기회일 수 있습니다.',
      en: 'Both of you likely feel heavy stress and fatigue. Repeating fights, piled-up feelings, and distrust can mix together. If you can honestly face this result together, it may be a last chance to redefine the relationship.',
      ja: 'お二人とも強いストレスと疲労を感じている可能性が高いです。繰り返す対立、溜まった感情、不信が重なります。この結果を二人で正直に受け止められるなら、関係を再定義する最後のチャンスかもしれません。',
      'zh-CN': '双方可能都承受很大压力与疲惫。反复冲突、积压情绪、不信任交织。若两人能坦诚面对这一结果，也许是重新定义关系的最后机会。',
      'zh-TW': '雙方可能都承受很大壓力與疲憊。反覆衝突、積壓情緒、不信任交織。若兩人能坦誠面對這一結果，也許是重新定義關係的最後機會。',
      vi: 'Cả hai có thể đang chịu stress và mệt mỏi lớn. Cãi lặp, cảm xúc dồn nén, mất tin có thể chồng chất. Nếu cùng đối diện thật lòng, đây có thể là cơ hội cuối để định nghĩa lại mối quan hệ.',
      id: 'Keduanya mungkin sangat stres dan lelah. Konflik berulang, emosi menumpuk, ketidakpercayaan bersarang. Jika sama-sama menerima hasil ini dengan jujur, ini bisa jadi kesempatan terakhir mendefinisikan ulang hubungan.',
    }),
    levelLabel: tr({
      ko: '⚫ 매우 위험',
      en: '⚫ Very high risk',
      ja: '⚫ 非常に危険',
      'zh-CN': '⚫ 极高风险',
      'zh-TW': '⚫ 極高風險',
      vi: '⚫ Rất nguy hiểm',
      id: '⚫ Sangat berisiko',
    }),
    oneLiner: tr({
      ko: '지금 솔직한 대화를 하지 않으면 자연스럽게 멀어집니다.',
      en: 'Without an honest talk now, you’ll drift apart.',
      ja: '今、正直に話さないと、自然と距離が開きます。',
      'zh-CN': '现在不坦诚沟通，只会渐行渐远。',
      'zh-TW': '現在不坦誠溝通，只會漸行漸遠。',
      vi: 'Không nói thật bây giờ, hai người sẽ dần xa nhau.',
      id: 'Tanpa bicara jujur sekarang, kalian akan menjauh.',
    }),
    prescription: tr({
      ko: '두 사람이 함께 커플 상담을 받아보는 것도 진지하게 고려해 보세요.',
      en: 'Seriously consider couples counseling together.',
      ja: '二人でカップルカウンセリングを受けることも真剣に検討して。',
      'zh-CN': '认真考虑一起接受伴侣咨询。',
      'zh-TW': '認真考慮一起接受伴侶諮商。',
      vi: 'Hãy cân nhắc nghiêm túc điều trị/cố vấn cặp đôi cùng nhau.',
      id: 'Pertimbangkan serius konseling pasangan bersama.',
    }),
  },
  {
    type: 'Type6',
    emoji: '💔',
    breakupPercent: 95,
    title: tr({
      ko: '위험도 CRITICAL 💔 헤어질 확률 95%',
      en: 'Risk CRITICAL 💔 Breakup chance 95%',
      ja: '危険度 CRITICAL 💔 別れ確率 95%',
      'zh-CN': '危险度 CRITICAL 💔 分手概率 95%',
      'zh-TW': '危險度 CRITICAL 💔 分手機率 95%',
      vi: 'Mức rủi ro CRITICAL 💔 Xác suất chia tay 95%',
      id: 'Risiko CRITICAL 💔 Peluang putus 95%',
    }),
    shortDescription: tr({
      ko: '"솔직하게 말씀드리겠습니다. 두 사람, 지금 많이 힘드시죠?"',
      en: '"Let’s be honest—you’re both hurting a lot right now."',
      ja: '"正直に言います。お二人、今かなりしんどいですよね？"',
      'zh-CN': '“坦白说，你们俩现在都很辛苦吧？”',
      'zh-TW': '「坦白說，你們倆現在都很辛苦吧？」',
      vi: '"Thành thật—cả hai đang rất đau khổ phải không?"',
      id: '"Sejujurnya—kalian berdua sangat menderita sekarang, kan?"',
    }),
    description: tr({
      ko: '이 점수는 두 사람 모두 관계에서 극심한 피로감과 불만족을 느끼고 있음을 보여줍니다. 연애 패턴, 갈등 방식, 의사소통 모든 면에서 심각한 불일치가 있습니다. 이 결과가 나왔다면 서로에게 솔직해질 용기가 필요합니다. 어떤 선택을 하든, 서로를 존중하는 방식으로 결정하세요.',
      en: 'This score suggests both of you feel deep exhaustion and dissatisfaction. Dating patterns, conflict style, and communication may be seriously misaligned. You’ll need courage to be honest. Whatever you choose, decide in a way that respects each other.',
      ja: 'このスコアは、二人とも関係で強い疲労と不満を抱えていることを示します。恋愛パターン・対立の仕方・コミュニケーションのずれが大きい可能性があります。正直になる勇気が必要です。どんな選択でも、互いを尊重する形で。',
      'zh-CN': '这个分数显示双方都极度疲惫与不满。恋爱模式、冲突方式、沟通可能严重错位。需要勇气坦诚相对。无论做何选择，请以尊重彼此的方式决定。',
      'zh-TW': '這個分數顯示雙方都極度疲憊與不滿。戀愛模式、衝突方式、溝通可能嚴重錯位。需要勇氣坦誠相對。無論做何選擇，請以尊重彼此的方式決定。',
      vi: 'Điểm này cho thấy cả hai đều kiệt quệ và bất mãn sâu sắc. Mô hình yêu, cách xung đột, giao tiếp có thể lệch nghiêm trọng. Cần can đảm để thật lòng. Dù chọn gì, hãy quyết định tôn trọng nhau.',
      id: 'Skor ini menunjukkan keduanya sangat lelah dan tidak puas. Pola pacaran, konflik, komunikasi bisa sangat tidak selaras. Perlu keberanian untuk jujur. Apa pun pilihanmu, putuskan dengan saling menghormati.',
    }),
    levelLabel: tr({
      ko: '💔 위기',
      en: '💔 Crisis',
      ja: '💔 危機',
      'zh-CN': '💔 危机',
      'zh-TW': '💔 危機',
      vi: '💔 Khủng hoảng',
      id: '💔 Krisis',
    }),
    oneLiner: tr({
      ko: '지금 가장 필요한 것은 두 사람만의 솔직한 대화입니다.',
      en: 'What you need most now is an honest talk—just the two of you.',
      ja: '今いちばん必要なのは、二人だけの正直な対話です。',
      'zh-CN': '现在最需要的是只属于两人的坦诚对话。',
      'zh-TW': '現在最需要的是只屬於兩人的坦誠對話。',
      vi: 'Điều cần nhất bây giờ là một cuộc trò chuyện thật lòng—chỉ hai người.',
      id: 'Yang paling dibutuhkan sekarang adalah percakapan jujur berdua saja.',
    }),
    prescription: tr({
      ko: '관계를 지속할지, 어떻게 바꿀지에 대해 감정이 차분한 상태에서 진지하게 이야기해 보세요.',
      en: 'When emotions are calmer, talk seriously about staying together—or how to change things.',
      ja: '続けるか、どう変えるか。感情が落ち着いたときに、真剣に話し合って。',
      'zh-CN': '在情绪平静时，认真讨论是否继续，以及如何改变。',
      'zh-TW': '在情緒平靜時，認真討論是否繼續，以及如何改變。',
      vi: 'Khi cảm xúc đã dịu, hãy nói thật về việc tiếp tục hay thay đổi thế nào.',
      id: 'Saat emosi tenang, bicara serius tentang melanjutkan atau mengubah apa.',
    }),
  },
];
