/** 친구가 보는 내 MBTI — phase3-friend-sees-my-mbti (7 locales) */

function L(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export interface Phase3FriendSeesMyMbtiOption {
  text: Record<string, string>;
  score: 0 | 1;
}

export interface Phase3FriendSeesMyMbtiQuestion {
  id: number;
  question: Record<string, string>;
  options: Phase3FriendSeesMyMbtiOption[];
}

export interface Phase3FriendSeesMyMbtiPayload {
  /** creator display name */
  n: string;
  /** self MBTI exactly 4 chars e.g. "ENFP" */
  m: string;
}

export interface FriendMbtiResult {
  letters: string[];
  display: string;
  isBoundary: boolean[];
}

export interface MbtiCompareResult {
  matchCount: number;
  matches: string[];
  mismatches: { dim: string; self: string; friend: string }[];
}

const MBTI_REGEX = /^[EI][SN][TF][JP]$/;

export function encodePayload(p: Phase3FriendSeesMyMbtiPayload): string {
  const json = JSON.stringify(p);
  const bytes = new TextEncoder().encode(json);
  let bin = '';
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin);
}

export function decodePayload(raw: string): Phase3FriendSeesMyMbtiPayload | null {
  try {
    const s = raw.trim();
    const bin = atob(s);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const json = new TextDecoder().decode(bytes);
    const o = JSON.parse(json) as Phase3FriendSeesMyMbtiPayload;
    if (typeof o.n !== 'string' || typeof o.m !== 'string') return null;
    if (!o.n.trim() || !MBTI_REGEX.test(o.m)) return null;
    return { n: o.n.trim(), m: o.m };
  } catch {
    return null;
  }
}

export function isValidSelfMbti(m: string): boolean {
  return MBTI_REGEX.test(m);
}

const DIMS: {
  dim: string;
  first: string;
  second: string;
  boundary: string;
  start: number;
}[] = [
  { dim: 'EI', first: 'I', second: 'E', boundary: 'E/I', start: 0 },
  { dim: 'SN', first: 'S', second: 'N', boundary: 'S/N', start: 4 },
  { dim: 'TF', first: 'T', second: 'F', boundary: 'T/F', start: 8 },
  { dim: 'JP', first: 'J', second: 'P', boundary: 'J/P', start: 12 },
];

/** answers: length 16, values 0|1 by original question order */
export function calculateFriendMbti(answers: number[]): FriendMbtiResult {
  const letters: string[] = [];
  const isBoundary: boolean[] = [];

  for (const d of DIMS) {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
      sum += answers[d.start + i] ?? 0;
    }
    if (sum <= 1) {
      letters.push(d.first);
      isBoundary.push(false);
    } else if (sum === 2) {
      letters.push(d.boundary);
      isBoundary.push(true);
    } else {
      letters.push(d.second);
      isBoundary.push(false);
    }
  }

  const hasBoundary = isBoundary.some(Boolean);
  const display = hasBoundary ? letters.join(' ') : letters.join('');
  return { letters, display, isBoundary };
}

export function compareMbti(self: string, friendLetters: string[]): MbtiCompareResult {
  const selfUpper = self.toUpperCase();
  const matches: string[] = [];
  const mismatches: { dim: string; self: string; friend: string }[] = [];
  let matchCount = 0;

  for (let i = 0; i < 4; i++) {
    const selfLetter = selfUpper[i];
    const friendLetter = friendLetters[i];
    const dim = DIMS[i].dim;
    const isBoundary = friendLetter.includes('/');

    if (!isBoundary && friendLetter === selfLetter) {
      matchCount++;
      matches.push(selfLetter);
    } else {
      mismatches.push({ dim, self: selfLetter, friend: friendLetter });
    }
  }

  return { matchCount, matches, mismatches };
}

/** mismatch analysis key e.g. EI_selfI_friendE, or EI_boundary when friend is boundary */
export function getMismatchAnalysisKey(dim: string, self: string, friend: string): string {
  if (friend.includes('/')) return `${dim}_boundary`;
  return `${dim}_self${self}_friend${friend}`;
}


export const phase3FriendSeesMyMbtiQuestions: Phase3FriendSeesMyMbtiQuestion[] = [
  {
    id: 1,
    question: L(
    '이 친구는 모임에서?',
    'At a gathering, this friend…',
    'この友だちは集まりで？',
    '这个朋友在聚会上？',
    '這個朋友在聚會上？',
    'Ở buổi tụ họp, người bạn này…',
    'Di acara kumpul, teman ini…'
  ),
    options: [
      {
        text: L(
    '조용히 있다가 친한 사람 한두 명과 깊게 이야기하는 편이다',
    'Stays quiet, then talks deeply with one or two close people',
    '静かにしていて、親しい一〜二人と深く話すタイプ',
    '先安静待着，再和一两个熟人深聊',
    '先安靜待著，再和一兩個熟人深聊',
    'Im lặng rồi trò chuyện sâu với một–hai người thân',
    'Diam dulu, lalu ngobrol dalam dengan satu–dua orang dekat'
  ),
        score: 0,
      },
      {
        text: L(
    '여러 사람과 두루두루 대화하고 분위기를 만드는 편이다',
    'Chats with many people and helps set the vibe',
    'いろんな人と広く話し、場の空気をつくるタイプ',
    '跟很多人聊天、带动气氛',
    '跟很多人聊天、帶動氣氛',
    'Nói chuyện với nhiều người và tạo không khí',
    'Ngobrol dengan banyak orang dan menghidupkan suasana'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
    '이 친구는 힘든 일이 생기면?',
    'When something hard happens, this friend…',
    'この友だちはつらいことがあると？',
    '这个朋友遇到烦心事时？',
    '這個朋友遇到煩心事時？',
    'Khi gặp chuyện khó, người bạn này…',
    'Saat ada masalah berat, teman ini…'
  ),
    options: [
      {
        text: L(
    '혼자 삭이거나 아주 가까운 한 명에게만 털어놓는다',
    'Keeps it inside or only vents to one very close person',
    '一人で抱え込むか、ごく親しい一人にだけ話す',
    '自己消化，或只跟最亲近的一个人说',
    '自己消化，或只跟最親近的一個人說',
    'Tự giải quyết hoặc chỉ kể với một người rất thân',
    'Dipendam sendiri atau hanya curhat ke satu orang paling dekat'
  ),
        score: 0,
      },
      {
        text: L(
    '여러 사람에게 이야기하거나 말하는 것 자체로 스트레스를 푼다',
    'Talks to several people, or relieves stress just by talking',
    '何人かに話すか、話すこと自体でストレスを発散する',
    '跟好几个人说，或靠说出来减压',
    '跟好幾個人說，或靠說出來減壓',
    'Kể với nhiều người, hoặc nói ra để giảm stress',
    'Cerita ke beberapa orang, atau melepaskan stres dengan berbicara'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
    '이 친구는 아무 계획 없는 주말에?',
    'On a weekend with no plans, this friend…',
    'この友だちは予定のない週末は？',
    '这个朋友在没有安排的周末？',
    '這個朋友在沒有安排的週末？',
    'Vào cuối tuần không kế hoạch, người bạn này…',
    'Di akhir pekan tanpa rencana, teman ini…'
  ),
    options: [
      {
        text: L(
    '혼자 있거나 집에서 쉬는 것을 좋아하는 것 같다',
    'Seems to prefer being alone or resting at home',
    '一人でいたり家で休むのが好きそう',
    '好像更喜欢独处或在家休息',
    '好像更喜歡獨處或在家休息',
    'Có vẻ thích ở một mình hoặc nghỉ ở nhà',
    'Sepertinya lebih suka sendiri atau istirahat di rumah'
  ),
        score: 0,
      },
      {
        text: L(
    '누군가를 만나거나 밖으로 나가는 것을 좋아하는 것 같다',
    'Seems to prefer meeting people or going out',
    '誰かに会ったり外に出るのが好きそう',
    '好像更喜欢见人或出门',
    '好像更喜歡見人或出門',
    'Có vẻ thích gặp ai đó hoặc ra ngoài',
    'Sepertinya lebih suka ketemu orang atau keluar'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
    '이 친구는 처음 보는 사람이 많은 자리에서?',
    'In a room full of new people, this friend…',
    'この友だちは初対面が多い場では？',
    '这个朋友在生人多的场合？',
    '這個朋友在生人多的場合？',
    'Ở chỗ nhiều người lạ, người bạn này…',
    'Di tempat banyak orang baru, teman ini…'
  ),
    options: [
      {
        text: L(
    '먼저 말을 거는 것을 어색해하는 편이다',
    'Tends to feel awkward starting conversations',
    '自分から話しかけるのは苦手なタイプ',
    '不太主动开口，会觉得尴尬',
    '不太主動開口，會覺得尷尬',
    'Thường ngại chủ động bắt chuyện',
    'Cenderung canggung kalau menyapa duluan'
  ),
        score: 0,
      },
      {
        text: L(
    '먼저 다가가서 자연스럽게 대화를 시작하는 편이다',
    'Tends to approach first and start chatting naturally',
    '自分から近づいて自然に会話を始めるタイプ',
    '会主动靠近、自然地开启对话',
    '會主動靠近、自然地開啟對話',
    'Thường chủ động lại gần và bắt chuyện tự nhiên',
    'Cenderung mendekat dulu dan memulai obrolan dengan natural'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
    '이 친구는 대화할 때?',
    'When chatting, this friend…',
    'この友だちは会話のとき？',
    '这个朋友聊天时？',
    '這個朋友聊天時？',
    'Khi trò chuyện, người bạn này…',
    'Saat ngobrol, teman ini…'
  ),
    options: [
      {
        text: L(
    '실제로 있었던 일, 구체적인 사실과 경험 위주로 이야기한다',
    'Talks mostly about real events, concrete facts, and experiences',
    '実際にあったことや具体的な事実・経験中心で話す',
    '主要聊真实发生过的事、具体事实和经历',
    '主要聊真實發生過的事、具體事實和經歷',
    'Chủ yếu nói về việc thật, sự kiện cụ thể và trải nghiệm',
    'Lebih banyak cerita kejadian nyata, fakta konkret, dan pengalaman'
  ),
        score: 0,
      },
      {
        text: L(
    '비유, 가능성, "만약에~" 같은 상상과 아이디어를 자주 섞는다',
    'Often mixes metaphors, possibilities, and "what if" ideas',
    '比喩や可能性、「もしも〜」の想像やアイデアをよく混ぜる',
    '经常夹杂比喻、可能性、「如果…」之类的想象和点子',
    '經常夾雜比喻、可能性、「如果…」之類的想像和點子',
    'Hay xen ví von, khả năng, ý tưởng kiểu "nếu như…"',
    'Sering campur metafora, kemungkinan, dan ide "bagaimana kalau…"'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
    '이 친구는 새로운 것을 배울 때?',
    'When learning something new, this friend…',
    'この友だちは新しいことを学ぶとき？',
    '这个朋友学新东西时？',
    '這個朋友學新東西時？',
    'Khi học điều mới, người bạn này…',
    'Saat belajar hal baru, teman ini…'
  ),
    options: [
      {
        text: L(
    '기초부터 차근차근 단계를 밟으려 한다',
    'Tries to go step by step from the basics',
    '基礎から一歩ずつ進めようとする',
    '想从基础一步步来',
    '想從基礎一步步來',
    'Muốn đi từng bước từ nền tảng',
    'Ingin melangkah pelan dari dasar'
  ),
        score: 0,
      },
      {
        text: L(
    '전체 개념과 흐름을 먼저 파악하고 세부는 나중에 채우는 편이다',
    'Grasps the big picture first, then fills in details later',
    '全体の概念と流れを先に把握し、細部は後で埋めるタイプ',
    '先抓整体概念和脉络，细节之后再补',
    '先抓整體概念和脈絡，細節之後再補',
    'Nắm khái niệm & dòng chảy chung trước, chi tiết để sau',
    'Pahami konsep & alur besar dulu, detail belakangan'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
    '이 친구는 문제가 생겼을 때?',
    'When a problem comes up, this friend…',
    'この友だちは問題が起きたとき？',
    '这个朋友遇到问题时？',
    '這個朋友遇到問題時？',
    'Khi có vấn đề, người bạn này…',
    'Saat muncul masalah, teman ini…'
  ),
    options: [
      {
        text: L(
    '검증된 방식, 해봤던 방법으로 단계별로 해결하려 한다',
    'Tries proven, familiar methods step by step',
    '検証済み・経験した方法で段階的に解決しようとする',
    '用经过验证、试过的方法一步步解决',
    '用經過驗證、試過的方法一步步解決',
    'Muốn giải theo cách đã kiểm chứng, từng bước',
    'Ingin selesaikan step by step dengan cara yang sudah terbukti'
  ),
        score: 0,
      },
      {
        text: L(
    '다양한 가능성을 동시에 떠올리고 새로운 방식을 먼저 시도하고 싶어 한다',
    'Juggles many possibilities and wants to try new approaches first',
    'いろいろな可能性を同時に思い浮かべ、新しいやり方を先に試したくなる',
    '同时想很多可能性，更想先试新方法',
    '同時想很多可能性，更想先試新方法',
    'Nghĩ nhiều khả năng cùng lúc và muốn thử cách mới trước',
    'Memikirkan banyak kemungkinan sekaligus dan ingin coba cara baru dulu'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
    '이 친구는 아이디어를 낼 때?',
    'When brainstorming ideas, this friend…',
    'この友だちはアイデアを出すとき？',
    '这个朋友出点子时？',
    '這個朋友出點子時？',
    'Khi đưa ý tưởng, người bạn này…',
    'Saat mengeluarkan ide, teman ini…'
  ),
    options: [
      {
        text: L(
    '현실적으로 가능한지를 먼저 따져보는 편이다',
    'First checks whether it\'s realistically doable',
    '現実的に可能かを先に検討するタイプ',
    '先看现实上可不可行',
    '先看現實上可不可行',
    'Thường xét trước có khả thi thực tế không',
    'Cenderung cek dulu apakah realistis bisa dilakukan'
  ),
        score: 0,
      },
      {
        text: L(
    '가능성과 상상을 먼저 펼쳐놓고 현실 적용은 나중에 생각하는 편이다',
    'Expands possibilities first, thinks about practical use later',
    '可能性と想像を先に広げ、実務への適用は後で考えるタイプ',
    '先展开可能性和想象，现实落地以后再说',
    '先展開可能性和想像，現實落地以後再說',
    'Mở khả năng & tưởng tượng trước, áp dụng thực tế để sau',
    'Lebih dulu ekspansi kemungkinan & imajinasi, penerapan praktis belakangan'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
    '이 친구는 주변 사람이 힘들다고 할 때?',
    'When someone nearby says they\'re struggling, this friend…',
    'この友だちは周りがつらいと言ったとき？',
    '身边人说自己很难受时，这个朋友？',
    '身邊人說自己很難受時，這個朋友？',
    'Khi người xung quanh nói đang khó khăn, người bạn này…',
    'Saat orang sekitar bilang sedang susah, teman ini…'
  ),
    options: [
      {
        text: L(
    '상황을 파악하고 해결책이나 현실적인 조언을 먼저 건네는 편이다',
    'First assesses the situation and offers solutions or practical advice',
    '状況を把握し、解決策や現実的なアドバイスを先に出すタイプ',
    '先摸清情况，给出解决办法或现实建议',
    '先摸清情況，給出解決辦法或現實建議',
    'Thường nắm tình hình rồi đưa giải pháp / lời khuyên thực tế trước',
    'Cenderung pahami situasi dulu lalu beri solusi atau saran praktis'
  ),
        score: 0,
      },
      {
        text: L(
    '먼저 공감하고 감정을 받아주는 것을 우선시한다',
    'Prioritizes empathy and making space for their feelings first',
    'まず共感し、気持ちを受け止めることを優先する',
    '先共情、接住对方的情绪',
    '先共情、接住對方的情緒',
    'Ưu tiên đồng cảm và đón nhận cảm xúc trước',
    'Mengutamakan empati dan menerima perasaan mereka dulu'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
    '이 친구는 의견 충돌이 생겼을 때?',
    'When opinions clash, this friend…',
    'この友だちは意見がぶつかったとき？',
    '这个朋友意见冲突时？',
    '這個朋友意見衝突時？',
    'Khi xung đột ý kiến, người bạn này…',
    'Saat terjadi bentrok opini, teman ini…'
  ),
    options: [
      {
        text: L(
    '논리적으로 더 나은 방향이 있다면 관계가 불편해도 말하는 편이다',
    'Speaks up for a better logical path even if it feels awkward',
    '論理的により良い方向があれば、関係が気まずいでも言うタイプ',
    '只要逻辑上更好，哪怕关系尴尬也会说',
    '只要邏輯上更好，哪怕關係尷尬也會說',
    'Nếu hướng hợp lý hơn, vẫn nói dù quan hệ hơi khó xử',
    'Kalau ada arah yang lebih logis, tetap bilang meski hubungan jadi canggung'
  ),
        score: 0,
      },
      {
        text: L(
    '결론이 조금 아쉬워도 팀 분위기나 관계를 해치지 않는 쪽으로 맞추는 편이다',
    'Adjusts to protect the team\'s vibe or relationships, even if the outcome is imperfect',
    '結論が少し残念でも、チームの空気や関係を損なわない方に合わせるタイプ',
    '哪怕结论略遗憾，也优先不伤团队气氛和关系',
    '哪怕結論略遺憾，也優先不傷團隊氣氛和關係',
    'Dù kết luận hơi tiếc, vẫn nghiêng về giữ không khí / quan hệ nhóm',
    'Meski hasilnya agak kurang puas, lebih menyesuaikan agar suasana/tim tetap aman'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
    '이 친구는 솔직한 피드백을 요청받으면?',
    'When asked for honest feedback, this friend…',
    'この友だちは正直なフィードバックを頼まれると？',
    '被要求给诚实反馈时，这个朋友？',
    '被要求給誠實回饋時，這個朋友？',
    'Khi được nhờ feedback thẳng thắn, người bạn này…',
    'Saat diminta feedback jujur, teman ini…'
  ),
    options: [
      {
        text: L(
    '좋은 점과 아쉬운 점을 객관적으로 명확하게 말해주는 편이다',
    'States both strengths and weak spots clearly and objectively',
    '良い点と惜しい点を客観的にはっきり伝えるタイプ',
    '客观清楚地讲优点和不足',
    '客觀清楚地講優點和不足',
    'Nói rõ điểm tốt và điểm tiếc một cách khách quan',
    'Menyampaikan kelebihan dan kekurangan secara objektif dan jelas'
  ),
        score: 0,
      },
      {
        text: L(
    '상대가 상처받지 않도록 긍정적인 부분을 더 강조해서 말하는 편이다',
    'Emphasizes the positives more so the other person doesn\'t get hurt',
    '相手が傷つかないよう、ポジティブな部分を強調して伝えるタイプ',
    '更强调正面，以免对方受伤',
    '更強調正面，以免對方受傷',
    'Nhấn mạnh phần tích cực hơn để đối phương không tổn thương',
    'Lebih menekankan sisi positif agar lawan bicara tidak tersakiti'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
    '이 친구는 결정을 내릴 때?',
    'When making decisions, this friend…',
    'この友だちは決断するとき？',
    '这个朋友做决定时？',
    '這個朋友做決定時？',
    'Khi đưa quyết định, người bạn này…',
    'Saat mengambil keputusan, teman ini…'
  ),
    options: [
      {
        text: L(
    '논리와 데이터, 원칙을 더 신뢰하는 것 같다',
    'Seems to trust logic, data, and principles more',
    '論理・データ・原則をより信頼していそう',
    '好像更相信逻辑、数据和原则',
    '好像更相信邏輯、數據和原則',
    'Có vẻ tin vào logic, dữ liệu và nguyên tắc hơn',
    'Sepertinya lebih percaya logika, data, dan prinsip'
  ),
        score: 0,
      },
      {
        text: L(
    '감정적으로 납득되지 않으면 결정을 다시 검토하는 것 같다',
    'Seems to revisit decisions if they don\'t feel emotionally right',
    '感情的に納得できないと決断を見直していそう',
    '如果情感上不通，好像会再审视决定',
    '如果情感上不通，好像會再審視決定',
    'Có vẻ xem lại quyết định nếu cảm xúc chưa ổn',
    'Sepertinya meninjau ulang keputusan jika secara emosional belum nyambung'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 13,
    question: L(
    '이 친구는 여행을 앞두고?',
    'Before a trip, this friend…',
    'この友だちは旅行の前は？',
    '这个朋友出门旅行前？',
    '這個朋友出門旅行前？',
    'Trước chuyến đi, người bạn này…',
    'Menjelang perjalanan, teman ini…'
  ),
    options: [
      {
        text: L(
    '숙소·이동·일정을 꼼꼼하게 미리 정리해두는 편이다',
    'Carefully plans lodging, transport, and schedule in advance',
    '宿・移動・スケジュールを事前にきっちり整理するタイプ',
    '会把住宿、交通、行程提前仔细安排好',
    '會把住宿、交通、行程提前仔細安排好',
    'Thường sắp xếp kỹ chỗ ở, di chuyển, lịch trình trước',
    'Cenderung merapikan penginapan, transportasi, jadwal jauh-jauh hari'
  ),
        score: 0,
      },
      {
        text: L(
    '큰 방향만 잡고 나머지는 현지에서 즉흥으로 결정하는 편이다',
    'Sets only the big direction and decides the rest on the spot',
    '大きな方向だけ決めて、あとは現地で即興で決めるタイプ',
    '只定大方向，其余到当地再即兴决定',
    '只定大方向，其餘到當地再即興決定',
    'Chỉ nắm hướng lớn, còn lại quyết định tại chỗ',
    'Hanya pegang arah besar, sisanya improvisasi di lokasi'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 14,
    question: L(
    '이 친구는 마감이나 약속에 대해?',
    'About deadlines and appointments, this friend…',
    'この友だちは締め切りや約束について？',
    '这个朋友对截止日期和约定？',
    '這個朋友對截止日期和約定？',
    'Về deadline và hẹn giờ, người bạn này…',
    'Soal deadline dan janji, teman ini…'
  ),
    options: [
      {
        text: L(
    '기한보다 일찍 준비하거나 약속 시간보다 일찍 도착하는 편이다',
    'Prepares early or arrives before the appointment time',
    '期限より早く準備し、約束より早めに着くタイプ',
    '会提前准备，或比约定时间更早到',
    '會提前準備，或比約定時間更早到',
    'Thường chuẩn bị sớm hoặc đến trước giờ hẹn',
    'Cenderung siap lebih awal atau datang lebih awal dari janji'
  ),
        score: 0,
      },
      {
        text: L(
    '마감이 닥쳐야 움직이거나 약속 시간에 딱 맞춰 도착하는 편이다',
    'Moves when the deadline hits, or arrives right on time',
    '締め切りが迫ってから動くか、約束ちょうどに着くタイプ',
    '临近截止才动手，或刚好卡点到达',
    '臨近截止才動手，或剛好卡點到達',
    'Thường chờ sát hạn mới làm, hoặc đến đúng giờ',
    'Baru bergerak saat deadline dekat, atau datang pas jamnya'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 15,
    question: L(
    '이 친구는 갑작스러운 일정 변경이 생기면?',
    'When plans suddenly change, this friend…',
    'この友だちは急な予定変更があると？',
    '突然改行程时，这个朋友？',
    '突然改行程時，這個朋友？',
    'Khi lịch đột ngột đổi, người bạn này…',
    'Saat jadwal berubah mendadak, teman ini…'
  ),
    options: [
      {
        text: L(
    '계획이 틀어지면 불편해하거나 스트레스를 받는 것 같다',
    'Seems uncomfortable or stressed when plans fall apart',
    '計画が崩れると不快そう／ストレスを感じそう',
    '计划被打乱时好像会不舒服或有压力',
    '計劃被打亂時好像會不舒服或有壓力',
    'Có vẻ khó chịu hoặc stress khi kế hoạch lệch',
    'Sepertinya tidak nyaman atau stres kalau rencana kacau'
  ),
        score: 0,
      },
      {
        text: L(
    '예상과 다른 방향으로 흘러가도 유연하게 적응하는 것 같다',
    'Seems to adapt flexibly even when things go differently',
    '想定と違う流れでも柔軟に適応していそう',
    '即使走向不同也能灵活适应',
    '即使走向不同也能靈活適應',
    'Có vẻ thích nghi linh hoạt dù mọi thứ khác dự kiến',
    'Sepertinya fleksibel beradaptasi meski arahnya beda dari dugaan'
  ),
        score: 1,
      },
    ],
  },
  {
    id: 16,
    question: L(
    '이 친구의 일상은?',
    'This friend\'s daily life…',
    'この友だちの日常は？',
    '这个朋友的日常生活？',
    '這個朋友的日常生活？',
    'Đời sống thường ngày của người bạn này…',
    'Kehidupan sehari-hari teman ini…'
  ),
    options: [
      {
        text: L(
    '체계적이고 정돈된 편이다. 할 일 목록이나 루틴이 있는 것 같다',
    'Seems systematic and tidy — likely has to-do lists or routines',
    '体系的で整っている。やることリストやルーティンがありそう',
    '偏系统、整齐，好像有待办清单或日常节奏',
    '偏系統、整齊，好像有待辦清單或日常節奏',
    'Có vẻ hệ thống, ngăn nắp — như có to-do / routine',
    'Cenderung sistematis & rapi — sepertinya punya to-do atau rutinitas'
  ),
        score: 0,
      },
      {
        text: L(
    '자유롭고 즉흥적인 편이다. 그날그날 흐름에 따라 움직이는 것 같다',
    'Seems free and spontaneous — goes with the day\'s flow',
    '自由で即興的。その日の流れで動いていそう',
    '偏自由、即兴，好像随当天的节奏走',
    '偏自由、即興，好像隨當天的節奏走',
    'Có vẻ tự do, ứng biến — đi theo dòng chảy từng ngày',
    'Cenderung bebas & spontan — mengikuti alur hari itu'
  ),
        score: 1,
      },
    ],
  },
];

export const letterDescriptions: Record<string, Record<string, string>> = {
  E: L(
    '친구 눈에 당신은 외향적으로 보입니다. 사람들과 어울릴 때 에너지가 넘쳐 보이고, 먼저 말을 거는 편으로 인식되고 있습니다',
    'To your friend, you look extroverted — full of energy around people, and someone who tends to start conversations',
    '友だちの目にはあなたは外向的に見えます。人といるとエネルギーが溢れ、自分から話しかけるタイプに映っています',
    '在朋友眼里你偏外向：和人在一起时能量足，会被看成会主动开口的人',
    '在朋友眼裡你偏外向：和人在一起時能量足，會被看成會主動開口的人',
    'Trong mắt bạn, bạn trông hướng ngoại — tràn năng lượng khi ở với người, và hay chủ động bắt chuyện',
    'Di mata teman, kamu terlihat ekstrovert — penuh energi saat bersama orang, dan cenderung menyapa duluan'
  ),
  I: L(
    '친구 눈에 당신은 내향적으로 보입니다. 조용하고 깊이 있게 소통하며, 에너지를 혼자서 충전하는 것처럼 보입니다',
    'To your friend, you look introverted — quiet and deep in conversation, recharging alone',
    '友だちの目にはあなたは内向的に見えます。静かで深いコミュニケーションをし、一人でエネルギーを充電するタイプに見えます',
    '在朋友眼里你偏内向：沟通安静而有深度，看起来更像独自充电',
    '在朋友眼裡你偏內向：溝通安靜而有深度，看起來更像獨自充電',
    'Trong mắt bạn, bạn trông hướng nội — giao tiếp yên lặng và sâu, như nạp năng lượng một mình',
    'Di mata teman, kamu terlihat introvert — komunikasi tenang & dalam, seperti mengisi energi sendirian'
  ),
  S: L(
    '친구 눈에 당신은 현실적이고 구체적으로 사고하는 사람으로 보입니다. 현실과 사실을 중심으로 대화하는 것이 느껴진다고 합니다',
    'To your friend, you think in concrete, realistic terms — conversations feel grounded in facts and reality',
    '友だちの目にはあなたは現実的・具体的に考える人に見えます。現実と事実中心の会話だと感じるそうです',
    '在朋友眼里你偏现实、具体：对话感觉以事实和现实为中心',
    '在朋友眼裡你偏現實、具體：對話感覺以事實和現實為中心',
    'Trong mắt bạn, bạn suy nghĩ cụ thể, thực tế — cuộc trò chuyện nghiêng về sự thật & hiện thực',
    'Di mata teman, kamu berpikir realistis & konkret — obrolan terasa berpusat pada fakta & realitas'
  ),
  N: L(
    '친구 눈에 당신은 직관적이고 창의적인 사람으로 보입니다. 가능성과 아이디어를 중심으로 사고하는 것이 느껴진다고 합니다',
    'To your friend, you look intuitive and creative — thinking centered on possibilities and ideas',
    '友だちの目にはあなたは直感的で創造的な人に見えます。可能性とアイデア中心に考えると感じるそうです',
    '在朋友眼里你偏直觉、有创意：思考感觉围绕可能性和点子',
    '在朋友眼裡你偏直覺、有創意：思考感覺圍繞可能性和點子',
    'Trong mắt bạn, bạn trông trực giác và sáng tạo — suy nghĩ quanh khả năng & ý tưởng',
    'Di mata teman, kamu terlihat intuitif & kreatif — berpikir berpusat pada kemungkinan & ide'
  ),
  T: L(
    '친구 눈에 당신은 논리적이고 이성적인 사람으로 보입니다. 팩트와 원칙을 기반으로 결정하는 것처럼 보인다고 합니다',
    'To your friend, you look logical and rational — deciding based on facts and principles',
    '友だちの目にはあなたは論理的・理性的な人に見えます。事実と原則に基づいて決めるように見えるそうです',
    '在朋友眼里你偏逻辑、理性：看起来依据事实和原则做决定',
    '在朋友眼裡你偏邏輯、理性：看起來依據事實和原則做決定',
    'Trong mắt bạn, bạn trông logic và lý trí — quyết định dựa trên sự thật & nguyên tắc',
    'Di mata teman, kamu terlihat logis & rasional — memutuskan berdasarkan fakta & prinsip'
  ),
  F: L(
    '친구 눈에 당신은 따뜻하고 공감 능력이 뛰어난 사람으로 보입니다. 사람과 감정을 먼저 고려하는 것처럼 보인다고 합니다',
    'To your friend, you look warm and highly empathetic — putting people and feelings first',
    '友だちの目にはあなたは温かく共感力が高い人に見えます。人と感情を先に考えるように見えるそうです',
    '在朋友眼里你温暖、共情力强：看起来会先考虑人和感受',
    '在朋友眼裡你溫暖、共情力強：看起來會先考慮人和感受',
    'Trong mắt bạn, bạn trông ấm áp và đồng cảm cao — ưu tiên con người & cảm xúc trước',
    'Di mata teman, kamu terlihat hangat & empatik — seolah orang & perasaan didahulukan'
  ),
  J: L(
    '친구 눈에 당신은 체계적이고 계획적인 사람으로 보입니다. 정돈된 생활 방식과 마감 준수 성향이 보인다고 합니다',
    'To your friend, you look organized and planned — tidy habits and a tendency to meet deadlines',
    '友だちの目にはあなたは体系的で計画的な人に見えます。整った生活と締め切り遵守の傾向が見えるそうです',
    '在朋友眼里你偏系统、有计划：看得出有条理的生活方式和守截止的倾向',
    '在朋友眼裡你偏系統、有計劃：看得出有條理的生活方式和守截止的傾向',
    'Trong mắt bạn, bạn trông hệ thống và có kế hoạch — lối sống ngăn nắp, hay giữ deadline',
    'Di mata teman, kamu terlihat sistematis & terencana — gaya hidup rapi dan cenderung tepat waktu'
  ),
  P: L(
    '친구 눈에 당신은 자유롭고 즉흥적인 사람으로 보입니다. 흐름에 맡기는 유연한 생활 방식이 느껴진다고 합니다',
    'To your friend, you look free and spontaneous — a flexible lifestyle that goes with the flow',
    '友だちの目にはあなたは自由で即興的な人に見えます。流れに任せる柔軟な生活が感じられるそうです',
    '在朋友眼里你偏自由、即兴：感觉是随节奏走的灵活生活方式',
    '在朋友眼裡你偏自由、即興：感覺是隨節奏走的靈活生活方式',
    'Trong mắt bạn, bạn trông tự do và ứng biến — lối sống linh hoạt theo dòng chảy',
    'Di mata teman, kamu terlihat bebas & spontan — gaya hidup fleksibel mengikuti alur'
  ),
};

export const boundaryDescriptions: Record<string, Record<string, string>> = {
  'E/I': L(
    '이 차원은 두 성향이 균형 잡혀 있어 어느 쪽으로도 보입니다. 상황에 따라 내향과 외향이 번갈아 드러나는 타입으로 인식되고 있습니다',
    'This axis looks balanced either way — introversion and extroversion show up depending on the situation',
    'この軸は両傾向のバランスで、どちらにも見えます。状況で内向と外向が交互に出るタイプと認識されています',
    '这一维两边都均衡，两边都像。会被看成随情境切换内外向的类型',
    '這一維兩邊都均衡，兩邊都像。會被看成隨情境切換內外向的類型',
    'Trục này cân bằng cả hai phía — hướng nội/ngoại lộ ra tùy tình huống',
    'Sumbu ini seimbang ke kedua sisi — introvert/ekstrovert bergantian tergantung situasi'
  ),
  'S/N': L(
    '이 차원은 두 성향이 균형 잡혀 있어 어느 쪽으로도 보입니다. 사실과 가능성 사이를 오가며 사고하는 것처럼 느껴진다고 합니다',
    'This axis looks balanced — thinking seems to move between facts and possibilities',
    'この軸は両傾向のバランスで、どちらにも見えます。事実と可能性の間を行き来して考えるように感じるそうです',
    '这一维两边都均衡：思考像在事实与可能性之间来回',
    '這一維兩邊都均衡：思考像在事實與可能性之間來回',
    'Trục này cân bằng — suy nghĩ như đi giữa sự thật và khả năng',
    'Sumbu ini seimbang — berpikir seperti bolak-balik antara fakta dan kemungkinan'
  ),
  'T/F': L(
    '이 차원은 두 성향이 균형 잡혀 있어 어느 쪽으로도 보입니다. 논리와 감정을 함께 고려하는 균형형으로 인식되고 있습니다',
    'This axis looks balanced — you\'re seen as weighing both logic and feelings',
    'この軸は両傾向のバランスで、どちらにも見えます。論理と感情の両方を考えるバランスタイプと認識されています',
    '这一维两边都均衡：会被看成同时考虑逻辑与情感的平衡型',
    '這一維兩邊都均衡：會被看成同時考慮邏輯與情感的平衡型',
    'Trục này cân bằng — được nhìn như kiểu cân logic và cảm xúc',
    'Sumbu ini seimbang — dikenali sebagai tipe seimbang yang mempertimbangkan logika & perasaan'
  ),
  'J/P': L(
    '이 차원은 두 성향이 균형 잡혀 있어 어느 쪽으로도 보입니다. 계획과 즉흥 사이를 유연하게 오가는 것처럼 보인다고 합니다',
    'This axis looks balanced — you seem to move flexibly between planning and spontaneity',
    'この軸は両傾向のバランスで、どちらにも見えます。計画と即興の間を柔軟に行き来するように見えるそうです',
    '这一维两边都均衡：看起来会在计划与即兴之间灵活切换',
    '這一維兩邊都均衡：看起來會在計劃與即興之間靈活切換',
    'Trục này cân bằng — trông như linh hoạt giữa kế hoạch và ứng biến',
    'Sumbu ini seimbang — terlihat fleksibel antara perencanaan dan spontanitas'
  ),
};

export const matchMessages: Record<number, Record<string, string>> = {
  4: L(
    '완벽 일치 🎯 친구가 당신을 완벽하게 꿰뚫고 있습니다. 당신이 생각하는 나와 친구가 보는 나가 완전히 같습니다. 이 친구는 당신을 정말 잘 아는 찐친입니다.',
    'Perfect match 🎯 Your friend sees you clearly. Your self-view and their view are identical — a true close friend who really knows you.',
    '完全一致 🎯 友だちがあなたを完璧に見抜いています。自分が思う自分と友だちが見る自分がまったく同じ。本当によく知る親友です。',
    '完美一致 🎯 朋友完全看透了你。你以为的自己和朋友眼里的你一模一样。这位真是超懂你的挚友。',
    '完美一致 🎯 朋友完全看透了你。你以為的自己和朋友眼裡的你一模一樣。這位真是超懂你的摯友。',
    'Khớp hoàn hảo 🎯 Bạn nhìn bạn rất đúng. Tự nhận và góc nhìn bạn trùng khớp — đúng kiểu bạn thân hiểu bạn.',
    'Cocok sempurna 🎯 Teman melihatmu dengan jelas. Pandangan diri dan pandangan mereka sama — teman dekat yang benar-benar kenal kamu.'
  ),
  3: L(
    '거의 일치 ✅ 친구가 당신을 꽤 정확하게 파악하고 있습니다. 한 가지만 다르게 보고 있는데, 그 차이가 무엇인지 대화해보면 재밌는 발견이 있을 겁니다.',
    'Almost a match ✅ Your friend reads you quite accurately. Only one letter differs — talking about that gap could be a fun discovery.',
    'ほぼ一致 ✅ 友だちがあなたをかなり正確に把握しています。1つだけ違うので、その差を話すと面白い発見がありそうです。',
    '几乎一致 ✅ 朋友相当准确地看懂了你。只有一处不同——聊聊这个差异会有有趣发现。',
    '幾乎一致 ✅ 朋友相當準確地看懂了你。只有一處不同——聊聊這個差異會有有趣發現。',
    'Gần khớp ✅ Bạn nắm bạn khá chính xác. Chỉ lệch một chữ — nói về khoảng lệch đó sẽ thú vị.',
    'Hampir cocok ✅ Teman membaca kamu cukup akurat. Hanya satu huruf beda — ngobrolin gap itu bisa jadi penemuan seru.'
  ),
  2: L(
    '절반 일치 🌗 친구가 보는 당신과 당신이 생각하는 당신이 절반쯤 다릅니다. 내가 드러내지 않는 부분이 있거나, 친구가 보는 나의 다른 면이 있다는 뜻입니다.',
    'Half match 🌗 Friend-view and self-view differ about halfway — parts you don\'t show, or another side your friend notices.',
    '半分一致 🌗 友だちが見るあなたと自分が思うあなたが半分ほど違います。見せていない面や、友だちが見る別の面があるということ。',
    '一半一致 🌗 朋友眼里的你和你以为的自己大约差一半——有你没展现的一面，或朋友看到的另一面。',
    '一半一致 🌗 朋友眼裡的你和你以為的自己大約差一半——有你沒展現的一面，或朋友看到的另一面。',
    'Khớp một nửa 🌗 Góc nhìn bạn và tự nhận lệch khoảng nửa — phần bạn ít lộ, hoặc mặt khác bạn nhìn thấy.',
    'Separuh cocok 🌗 Pandangan teman dan pandangan diri beda sekitar setengah — sisi yang tak kamu tampilkan, atau sisi lain yang teman lihat.'
  ),
  1: L(
    '많이 다름 🤔 친구 눈에 보이는 당신은 당신이 생각하는 것과 꽤 다릅니다. 내가 스스로 생각하는 것과 실제로 드러나는 모습 사이에 갭이 있는 타입입니다. 이 차이를 친구와 직접 이야기해보세요.',
    'Quite different 🤔 How your friend sees you differs a lot from how you see yourself. There\'s a gap between self-image and what shows — talk it through with them.',
    'かなり違う 🤔 友だちの目のあなたは、自分が思う姿とかなり違います。自己イメージと実際に見える姿にギャップがあるタイプ。その差を友だちと話してみて。',
    '差很多 🤔 朋友眼里的你和你以为的自己差不少。自我认知与展现出来的样子有落差——直接和朋友聊聊吧。',
    '差很多 🤔 朋友眼裡的你和你以為的自己差不少。自我認知與展現出來的樣子有落差——直接和朋友聊聊吧。',
    'Khác khá nhiều 🤔 Bạn nhìn bạn khác nhiều so với bạn nghĩ. Có khoảng cách giữa tự nhận và hình ảnh lộ ra — hãy nói trực tiếp với họ.',
    'Cukup beda 🤔 Yang dilihat teman cukup berbeda dari yang kamu pikir. Ada gap antara citra diri dan yang terlihat — bicarakan langsung dengan mereka.'
  ),
  0: L(
    '완전히 다름 😲 친구가 보는 당신과 당신이 생각하는 당신이 완전히 다릅니다. 두 가지 가능성이 있습니다. ① 당신이 다른 면을 더 많이 드러내고 있거나 ② 당신이 자신을 다르게 인식하고 있거나. 어느 쪽이든 친구와 직접 이야기해보면 새로운 발견이 있을 것입니다.',
    'Totally different 😲 Friend-view and self-view don\'t match at all. Two possibilities: ① you\'re showing a different side more, or ② you see yourself differently. Either way, talking with your friend may bring new insights.',
    'まったく違う 😲 友だちが見るあなたと自分が思うあなたが完全に違います。①別の面をより見せているか ②自己認識が違うか。どちらでも友だちと話せば新しい発見がありそうです。',
    '完全不同 😲 朋友眼里的你和你以为的自己完全不一样。两种可能：①你展现了更多另一面，或②你对自己的认知不同。无论哪种，和朋友聊聊都会有新发现。',
    '完全不同 😲 朋友眼裡的你和你以為的自己完全不一樣。兩種可能：①你展現了更多另一面，或②你對自己的認知不同。無論哪種，和朋友聊聊都會有新發現。',
    'Khác hoàn toàn 😲 Góc nhìn bạn và tự nhận hoàn toàn khác. Hai khả năng: ① bạn lộ nhiều mặt khác hơn, hoặc ② bạn nhận mình khác. Dù sao, nói với bạn sẽ có khám phá mới.',
    'Benar-benar beda 😲 Pandangan teman dan pandangan diri sama sekali berbeda. Dua kemungkinan: ① kamu lebih menampilkan sisi lain, atau ② kamu mengenali diri berbeda. Apapun, ngobrol dengan teman bisa bawa insight baru.'
  ),
};

export const mismatchAnalyses: Record<string, Record<string, string>> = {
  EI_selfI_friendE: L(
    '당신은 스스로 내향적이라고 생각하지만 친구 눈에는 외향적으로 보입니다.\n\n이런 경우는 두 가지 이유가 많습니다.\n① 친한 친구 앞에서만 외향적인 I형 (친한 사람 앞에선 완전히 달라지는 타입)\n② 내향적인 내면을 외향적으로 포장하는 타입 (사회적 가면을 잘 쓰는 편)\n\n이 친구에게 직접 물어보세요.\n"내가 진짜 외향적으로 보여?"',
    'You see yourself as introverted, but your friend sees you as extroverted.\n\nTwo common reasons:\n① An I who turns E around close friends\n② An introvert who packages themselves as more outgoing socially\n\nAsk them directly:\n"Do I really look that extroverted?"',
    '自分では内向的だと思っているのに、友だちには外向的に見えます。\n\nよくある理由は2つ。\n① 親しい友だちの前だけ外向的なI型\n② 内向的な内面を外向的に見せるタイプ\n\n直接聞いてみて。\n「本当に外向的に見える？」',
    '你觉得自己内向，朋友却觉得你外向。\n\n常见原因有两个：\n① 只在熟人面前外向的 I\n② 把内向内心包装得更外向的类型\n\n直接问问朋友：\n「我真的看起来很外向吗？」',
    '你覺得自己內向，朋友卻覺得你外向。\n\n常見原因有兩個：\n① 只在熟人面前外向的 I\n② 把內向內心包裝得更外向的類型\n\n直接問問朋友：\n「我真的看起來很外向嗎？」',
    'Bạn nghĩ mình hướng nội, nhưng bạn nhìn bạn hướng ngoại.\n\nHai lý do thường gặp:\n① Kiểu I chỉ hướng ngoại trước bạn thân\n② Kiểu hướng nội nhưng đóng gói mình hướng ngoại hơn\n\nHỏi thẳng:\n"Mình trông hướng ngoại thật à?"',
    'Kamu merasa introvert, tapi teman melihatmu ekstrovert.\n\nDua alasan umum:\n① Tipe I yang jadi E hanya di depan teman dekat\n② Introvert yang mengemas diri lebih terbuka secara sosial\n\nTanya langsung:\n"Aku kelihatan ekstrovert banget ya?"'
  ),
  EI_selfE_friendI: L(
    '당신은 스스로 외향적이라고 생각하지만 친구 눈에는 내향적으로 보입니다.\n\n이런 경우의 주요 이유:\n① 겉으로는 활발해 보이려 하지만 실제로는 에너지를 아끼는 타입\n② 특정 상황에서만 E처럼 행동하고, 친구에게는 조용한 면이 더 보이는 타입\n\n친구에게 물어보세요.\n"내가 생각보다 조용해 보여?"',
    'You see yourself as extroverted, but your friend sees you as introverted.\n\nMain reasons:\n① You try to look lively but actually conserve energy\n② You act E only in certain settings; friends notice your quieter side more\n\nAsk them:\n"Do I seem quieter than I think?"',
    '自分では外向的だと思っているのに、友だちには内向的に見えます。\n\n主な理由:\n① 表では活き活きに見せたいが、実際はエネルギーを節約するタイプ\n② 特定の場だけでEのように振る舞い、友だちには静かな面が目立つタイプ\n\n聞いてみて。\n「思ったより静かっぽく見える？」',
    '你觉得自己外向，朋友却觉得你内向。\n\n主要原因：\n① 外表想显得活泼，其实在节省能量\n② 只在特定场合像 E，朋友更看到安静的一面\n\n问问朋友：\n「我看起来比自己想的更安静吗？」',
    '你覺得自己外向，朋友卻覺得你內向。\n\n主要原因：\n① 外表想顯得活潑，其實在節省能量\n② 只在特定場合像 E，朋友更看到安靜的一面\n\n問問朋友：\n「我看起來比自己想的更安靜嗎？」',
    'Bạn nghĩ mình hướng ngoại, nhưng bạn nhìn bạn hướng nội.\n\nLý do chính:\n① Muốn trông năng động nhưng thực ra tiết kiệm năng lượng\n② Chỉ hành xử như E ở một số tình huống; bạn thấy mặt trầm hơn\n\nHỏi họ:\n"Mình trông trầm hơn mình nghĩ à?"',
    'Kamu merasa ekstrovert, tapi teman melihatmu introvert.\n\nAlasan utama:\n① Mau terlihat ramai tapi sebenarnya hemat energi\n② Hanya bertindak seperti E di situasi tertentu; teman lebih lihat sisi tenangmu\n\nTanya mereka:\n"Aku kelihatan lebih pendiam dari yang kupikir?"'
  ),
  SN_selfS_friendN: L(
    '당신은 스스로 현실·구체형(S)이라고 생각하지만 친구 눈에는 직관·가능성형(N)으로 보입니다.\n\n주요 이유:\n① 머릿속으로는 현실을 따지지만 말로는 아이디어·비유를 자주 쓰는 타입\n② 친구 앞에서는 상상과 "만약에" 이야기를 더 많이 하는 타입\n\n→ 스스로 인식하는 사고 방식과, 대화에서 드러나는 방식이 다를 수 있어요.',
    'You see yourself as Sensing (S), but your friend sees you as Intuitive (N).\n\nMain reasons:\n① You weigh reality internally but speak in ideas and metaphors\n② With friends you share more imagination and "what if" talk\n\n→ Self-perceived thinking style can differ from what shows in conversation.',
    '自分では現実・具体型(S)だと思っているのに、友だちには直感・可能性型(N)に見えます。\n\n主な理由:\n① 頭の中では現実を見つつ、口ではアイデアや比喩が多いタイプ\n② 友だちの前では想像や「もしも」話がもっと多いタイプ\n\n→ 自己認識の思考と、会話で出るスタイルが違うことがあります。',
    '你觉得自己是现实·具体型(S)，朋友却看成直觉·可能性型(N)。\n\n主要原因：\n① 心里在掂量现实，嘴上却常讲点子和比喻\n② 在朋友面前更爱聊想象和「如果」\n\n→ 你以为的思维方式，和对话里露出的样子可能不同。',
    '你覺得自己是現實·具體型(S)，朋友卻看成直覺·可能性型(N)。\n\n主要原因：\n① 心裡在掂量現實，嘴上卻常講點子和比喻\n② 在朋友面前更愛聊想像和「如果」\n\n→ 你以為的思考方式，和對話裡露出的樣子可能不同。',
    'Bạn nghĩ mình kiểu Sensing (S), nhưng bạn nhìn bạn là Intuitive (N).\n\nLý do chính:\n① Trong đầu cân thực tế nhưng miệng hay nói ý tưởng & ví von\n② Trước bạn thường kể nhiều tưởng tượng và "nếu như"\n\n→ Cách nghĩ tự nhận có thể khác với những gì lộ ra khi trò chuyện.',
    'Kamu merasa tipe Sensing (S), tapi teman melihatmu Intuitive (N).\n\nAlasan utama:\n① Di kepala menimbang realitas, tapi bicara sering ide & metafora\n② Di depan teman lebih banyak imajinasi dan "bagaimana kalau"\n\n→ Gaya berpikir yang dikenali diri bisa beda dari yang muncul di obrolan.'
  ),
  SN_selfN_friendS: L(
    '당신은 스스로 직관형(N)이라고 생각하지만 친구 눈에는 감각형(S)으로 보입니다.\n\n주요 이유:\n① 아이디어는 풍부하지만 실제로는 경험·사실 위주로 말하는 타입\n② 친구에게는 현실적인 조언과 구체적 이야기로 더 기억되는 타입\n\n→ 내면의 N과 드러나는 S가 공존할 수 있어요.',
    'You see yourself as Intuitive (N), but your friend sees you as Sensing (S).\n\nMain reasons:\n① Rich ideas inside, but you speak in experiences and facts\n② Friends remember you for practical advice and concrete stories\n\n→ Inner N and outward S can coexist.',
    '自分では直感型(N)だと思っているのに、友だちには感覚型(S)に見えます。\n\n主な理由:\n① アイデアは豊かでも、実際は経験・事実中心で話すタイプ\n② 友だちには現実的な助言と具体的な話で記憶されるタイプ\n\n→ 内面のNと表に出るSが共存できます。',
    '你觉得自己是直觉型(N)，朋友却看成实感型(S)。\n\n主要原因：\n① 点子很多，但实际说话偏经验和事实\n② 朋友更记得你现实的建议和具体故事\n\n→ 内心的 N 和外显的 S 可以并存。',
    '你覺得自己是直覺型(N)，朋友卻看成實感型(S)。\n\n主要原因：\n① 點子很多，但實際說話偏經驗和事實\n② 朋友更記得你現實的建議和具體故事\n\n→ 內心的 N 和外顯的 S 可以並存。',
    'Bạn nghĩ mình Intuitive (N), nhưng bạn nhìn bạn là Sensing (S).\n\nLý do chính:\n① Ý tưởng nhiều nhưng thực ra nói nghiêng trải nghiệm & sự thật\n② Bạn nhớ bạn qua lời khuyên thực tế và chuyện cụ thể\n\n→ N bên trong và S lộ ra có thể cùng tồn tại.',
    'Kamu merasa Intuitive (N), tapi teman melihatmu Sensing (S).\n\nAlasan utama:\n① Ide kaya, tapi bicara lebih ke pengalaman & fakta\n② Teman lebih ingatmu lewat saran praktis dan cerita konkret\n\n→ N di dalam dan S yang terlihat bisa berdampingan.'
  ),
  TF_selfT_friendF: L(
    '당신은 스스로 사고형(T)이라고 생각하지만 친구 눈에는 감정형(F)으로 보입니다.\n\n주요 이유:\n① 결정은 논리로 해도, 친구 앞에서는 공감·배려를 먼저 보이는 타입\n② 속으로는 T인데 관계에서는 F처럼 행동하는 타입\n\n→ 이성과 공감이 상황별로 다르게 드러날 수 있어요.',
    'You see yourself as Thinking (T), but your friend sees you as Feeling (F).\n\nMain reasons:\n① Decisions may be logical, but with friends you show empathy first\n② Inner T who acts F in relationships\n\n→ Logic and empathy can show differently by context.',
    '自分では思考型(T)だと思っているのに、友だちには感情型(F)に見えます。\n\n主な理由:\n① 決断は論理でも、友だちの前では共感・配慮が先に出るタイプ\n② 中身はTでも関係ではFのように動くタイプ\n\n→ 理性と共感は場面で違う現れ方をします。',
    '你觉得自己是思考型(T)，朋友却看成情感型(F)。\n\n主要原因：\n① 决定可以讲逻辑，但在朋友面前更先共情、体贴\n② 骨子里是 T，关系里却像 F 行动\n\n→ 理性与共情可能因场景不同而显露不同。',
    '你覺得自己是思考型(T)，朋友卻看成情感型(F)。\n\n主要原因：\n① 決定可以講邏輯，但在朋友面前更先共情、體貼\n② 骨子裡是 T，關係裡卻像 F 行動\n\n→ 理性與共情可能因場景不同而顯露不同。',
    'Bạn nghĩ mình Thinking (T), nhưng bạn nhìn bạn là Feeling (F).\n\nLý do chính:\n① Quyết định có thể theo logic, nhưng trước bạn ưu tiên đồng cảm\n② Bên trong là T nhưng trong quan hệ hành xử như F\n\n→ Lý trí và đồng cảm có thể lộ khác nhau tùy tình huống.',
    'Kamu merasa Thinking (T), tapi teman melihatmu Feeling (F).\n\nAlasan utama:\n① Keputusan bisa logis, tapi di depan teman empati lebih dulu\n② Dalam hati T tapi di hubungan bertindak seperti F\n\n→ Logika dan empati bisa tampil berbeda tergantung situasi.'
  ),
  TF_selfF_friendT: L(
    '당신은 스스로 감정형(F)이라고 생각하지만 친구 눈에는 사고형(T)으로 보입니다.\n\n주요 이유:\n① 마음은 따뜻하지만 조언할 때는 해결책·팩트를 먼저 말하는 타입\n② 친구에게는 "솔직하고 논리적인 사람"으로 더 기억되는 타입\n\n→ 공감하는 마음과 드러나는 말투가 다를 수 있어요.',
    'You see yourself as Feeling (F), but your friend sees you as Thinking (T).\n\nMain reasons:\n① Warm heart, but advice leads with solutions and facts\n② Friends remember you as honest and logical\n\n→ Empathy inside and the tone that shows can differ.',
    '自分では感情型(F)だと思っているのに、友だちには思考型(T)に見えます。\n\n主な理由:\n① 心は温かいが、助言では解決策・事実が先に出るタイプ\n② 友だちには「正直で論理的な人」として記憶されるタイプ\n\n→ 共感する心と表に出る話し方が違うことがあります。',
    '你觉得自己是情感型(F)，朋友却看成思考型(T)。\n\n主要原因：\n① 心很暖，但给建议时先讲办法和事实\n② 朋友更记得你「诚实、讲逻辑」\n\n→ 共情的心和外显的说话方式可能不同。',
    '你覺得自己是情感型(F)，朋友卻看成思考型(T)。\n\n主要原因：\n① 心很暖，但給建議時先講辦法和事實\n② 朋友更記得你「誠實、講邏輯」\n\n→ 共情的心和外顯的說話方式可能不同。',
    'Bạn nghĩ mình Feeling (F), nhưng bạn nhìn bạn là Thinking (T).\n\nLý do chính:\n① Lòng ấm nhưng khi khuyên thường đưa giải pháp & sự thật trước\n② Bạn nhớ bạn là người thẳng và logic\n\n→ Lòng đồng cảm và cách nói lộ ra có thể khác nhau.',
    'Kamu merasa Feeling (F), tapi teman melihatmu Thinking (T).\n\nAlasan utama:\n① Hati hangat, tapi saat menasihati solusi & fakta lebih dulu\n② Teman lebih ingatmu sebagai orang jujur dan logis\n\n→ Empati di dalam dan gaya bicara yang terlihat bisa berbeda.'
  ),
  JP_selfJ_friendP: L(
    '당신은 스스로 계획적이라고 생각하지만 친구 눈에는 즉흥적으로 보입니다.\n\n이런 경우의 주요 이유:\n① 마음속으로는 계획하는데 실제 행동은 즉흥인 타입\n② 친구 앞에서만 유독 느슨해지는 타입\n\n→ 직장/학교에서의 나와 친구들 앞에서의 나가 다를 수 있어요.',
    'You see yourself as planned (J), but your friend sees you as spontaneous (P).\n\nMain reasons:\n① You plan internally but act spontaneously\n② You loosen up especially around friends\n\n→ Work/school you and friend-circle you can differ.',
    '自分では計画的だと思っているのに、友だちには即興的に見えます。\n\n主な理由:\n① 心の中では計画するが、行動は即興のタイプ\n② 友だちの前だけで特にゆるくなるタイプ\n\n→ 仕事／学校の自分と友だちの前の自分が違うことがあります。',
    '你觉得自己有计划，朋友却觉得你即兴。\n\n主要原因：\n① 心里在计划，行动却偏即兴\n② 只在朋友面前特别放松\n\n→ 职场/学校的你和朋友面前的你可能不同。',
    '你覺得自己有計劃，朋友卻覺得你即興。\n\n主要原因：\n① 心裡在計劃，行動卻偏即興\n② 只在朋友面前特別放鬆\n\n→ 職場／學校的你和朋友面前的你可能不同。',
    'Bạn nghĩ mình có kế hoạch (J), nhưng bạn nhìn bạn ứng biến (P).\n\nLý do chính:\n① Trong đầu có kế hoạch nhưng hành động ứng biến\n② Đặc biệt nới lỏng trước bạn bè\n\n→ Bạn ở công việc/trường và trước bạn bè có thể khác.',
    'Kamu merasa terencana (J), tapi teman melihatmu spontan (P).\n\nAlasan utama:\n① Di dalam merencanakan tapi tindakan spontan\n② Khusus di depan teman jadi lebih longgar\n\n→ Dirimu di kerja/sekolah dan di depan teman bisa berbeda.'
  ),
  JP_selfP_friendJ: L(
    '당신은 스스로 즉흥적이라고 생각하지만 친구 눈에는 계획적으로 보입니다.\n\n주요 이유:\n① 겉으로는 P처럼 말해도 실제로는 일정·마감을 챙기는 타입\n② 친구에게는 약속·준비를 잘 지키는 사람으로 기억되는 타입\n\n→ 자유로운 이미지와 실제 생활 루틴이 다를 수 있어요.',
    'You see yourself as spontaneous (P), but your friend sees you as planned (J).\n\nMain reasons:\n① You talk like a P but actually track schedules and deadlines\n② Friends remember you as reliable with plans and prep\n\n→ Free image and real-life routine can differ.',
    '自分では即興的だと思っているのに、友だちには計画的に見えます。\n\n主な理由:\n① 口ではPっぽくても、実際は予定・締め切りを守るタイプ\n② 友だちには約束・準備を守る人として記憶されるタイプ\n\n→ 自由なイメージと実際の生活ルーティンが違うことがあります。',
    '你觉得自己偏即兴，朋友却觉得你有计划。\n\n主要原因：\n① 嘴上像 P，实际会盯行程和截止\n② 朋友记得你守约、会准备\n\n→ 自由的人设和真实生活节奏可能不同。',
    '你覺得自己偏即興，朋友卻覺得你有計劃。\n\n主要原因：\n① 嘴上像 P，實際會盯行程和截止\n② 朋友記得你守約、會準備\n\n→ 自由的人設和真實生活節奏可能不同。',
    'Bạn nghĩ mình ứng biến (P), nhưng bạn nhìn bạn có kế hoạch (J).\n\nLý do chính:\n① Nói như P nhưng thực ra giữ lịch & deadline\n② Bạn nhớ bạn là người giữ hẹn, chuẩn bị tốt\n\n→ Hình ảnh tự do và routine thật có thể khác.',
    'Kamu merasa spontan (P), tapi teman melihatmu terencana (J).\n\nAlasan utama:\n① Bicara seperti P tapi sebenarnya jaga jadwal & deadline\n② Teman ingatmu sebagai orang yang jaga janji & siap\n\n→ Citra bebas dan rutinitas nyata bisa berbeda.'
  ),
  EI_boundary: L(
    '친구 응답에서는 E/I가 경계로 나왔습니다. 어느 한쪽으로 단정하기보다, 상황에 따라 내향과 외향이 모두 보인다는 뜻입니다. 당신이 고른 글자와 달라도 "틀린" 게 아니라 균형형으로 인식되고 있을 수 있어요.',
    'On E/I, your friend\'s answers landed on the boundary. Rather than one side, both introversion and extroversion show by situation. Differing from your letter isn\'t "wrong" — you may be seen as balanced.',
    '友だちの回答ではE/Iが境界になりました。どちらか一方より、状況で内向も外向も見えるという意味。選んだ文字と違っても「間違い」ではなく、バランス型と見られている可能性があります。',
    '朋友作答在 E/I 落在边界。与其断定一边，更像随情境内外向都会出现。和你选的字母不同也不等于「错」——可能被看成平衡型。',
    '朋友作答在 E/I 落在邊界。與其斷定一邊，更像隨情境內外向都會出現。和你選的字母不同也不等於「錯」——可能被看成平衡型。',
    'Ở E/I, câu trả lời của bạn rơi vào ranh giới. Không nghiêng một phía — hướng nội/ngoại đều lộ tùy tình huống. Khác chữ bạn chọn không phải "sai" — có thể được nhìn là kiểu cân bằng.',
    'Pada E/I, jawaban teman jatuh di batas. Bukan satu sisi — introvert & ekstrovert muncul tergantung situasi. Beda dari huruf pilihanmu bukan "salah" — bisa dikenali sebagai tipe seimbang.'
  ),
  SN_boundary: L(
    '친구 응답에서는 S/N이 경계로 나왔습니다. 사실·경험과 가능성·아이디어가 비슷하게 보인다는 뜻입니다. 스스로 고른 한쪽과 달라도, 균형 잡힌 사고로 인식되고 있을 수 있어요.',
    'On S/N, your friend\'s answers landed on the boundary. Facts/experience and possibilities/ideas look similarly present. Differing from your pick can still mean you\'re seen as balanced.',
    '友だちの回答ではS/Nが境界になりました。事実・経験と可能性・アイデアが同程度に見えるという意味。選んだ片側と違っても、バランスの取れた思考と見られている可能性があります。',
    '朋友作答在 S/N 落在边界。事实·经验与可能性·点子看起来差不多。和你选的一边不同，仍可能被看成思考均衡。',
    '朋友作答在 S/N 落在邊界。事實·經驗與可能性·點子看起來差不多。和你選的一邊不同，仍可能被看成思考均衡。',
    'Ở S/N, câu trả lời rơi vào ranh giới. Sự thật/trải nghiệm và khả năng/ý tưởng lộ ra gần như ngang nhau. Khác phía bạn chọn vẫn có thể được nhìn là suy nghĩ cân bằng.',
    'Pada S/N, jawaban jatuh di batas. Fakta/pengalaman dan kemungkinan/ide terlihat sama-sama hadir. Beda dari pilihanmu tetap bisa berarti kamu dikenali berpikir seimbang.'
  ),
  TF_boundary: L(
    '친구 응답에서는 T/F가 경계로 나왔습니다. 논리와 감정을 모두 쓰는 사람으로 보인다는 뜻입니다. 스스로의 한 글자와 정확히 일치하지 않아도, 균형형으로 읽히고 있을 수 있어요.',
    'On T/F, your friend\'s answers landed on the boundary. You look like someone who uses both logic and feelings. Not matching your single letter can still mean you\'re read as balanced.',
    '友だちの回答ではT/Fが境界になりました。論理と感情の両方を使う人に見えるという意味。1文字と完全一致しなくても、バランスタイプとして読まれている可能性があります。',
    '朋友作答在 T/F 落在边界。看起来会同时用逻辑和情感。即使不完全等于你那一个字母，也可能被读成平衡型。',
    '朋友作答在 T/F 落在邊界。看起來會同時用邏輯和情感。即使不完全等於你那一個字母，也可能被讀成平衡型。',
    'Ở T/F, câu trả lời rơi vào ranh giới. Trông như người dùng cả logic lẫn cảm xúc. Không khớp đúng một chữ vẫn có thể được đọc là kiểu cân bằng.',
    'Pada T/F, jawaban jatuh di batas. Terlihat memakai logika dan perasaan. Tidak cocok tepat dengan satu huruf tetap bisa dibaca sebagai tipe seimbang.'
  ),
  JP_boundary: L(
    '친구 응답에서는 J/P가 경계로 나왔습니다. 계획과 즉흥이 비슷하게 보인다는 뜻입니다. 스스로 고른 글자와 달라도, 상황에 따라 둘 다 드러나는 균형형일 수 있어요.',
    'On J/P, your friend\'s answers landed on the boundary. Planning and spontaneity look similarly present. Differing from your letter can still mean a balanced type that shows both by situation.',
    '友だちの回答ではJ/Pが境界になりました。計画と即興が同程度に見えるという意味。選んだ文字と違っても、状況で両方出るバランスタイプかもしれません。',
    '朋友作答在 J/P 落在边界。计划与即兴看起来差不多。和你选的字母不同，仍可能是随情境两边都会露的平衡型。',
    '朋友作答在 J/P 落在邊界。計劃與即興看起來差不多。和你選的字母不同，仍可能是隨情境兩邊都會露的平衡型。',
    'Ở J/P, câu trả lời rơi vào ranh giới. Kế hoạch và ứng biến lộ ra gần ngang nhau. Khác chữ bạn chọn vẫn có thể là kiểu cân bằng lộ cả hai tùy tình huống.',
    'Pada J/P, jawaban jatuh di batas. Perencanaan dan spontanitas terlihat sama-sama hadir. Beda dari huruf pilihanmu tetap bisa berarti tipe seimbang yang menampilkan keduanya tergantung situasi.'
  ),
};

export function getLetterDescription(letter: string, locale: string): string {
  if (letter.includes('/')) {
    const rec = boundaryDescriptions[letter];
    if (!rec) return '';
    return rec[locale] || rec.ko;
  }
  const rec = letterDescriptions[letter];
  if (!rec) return '';
  return rec[locale] || rec.ko;
}

export function getMatchMessage(count: number, locale: string): string {
  const rec = matchMessages[Math.max(0, Math.min(4, count))];
  return rec[locale] || rec.ko;
}

export function getMismatchAnalysis(
  dim: string,
  self: string,
  friend: string,
  locale: string
): string {
  const key = getMismatchAnalysisKey(dim, self, friend);
  const rec = mismatchAnalyses[key];
  if (!rec) return '';
  return rec[locale] || rec.ko;
}

