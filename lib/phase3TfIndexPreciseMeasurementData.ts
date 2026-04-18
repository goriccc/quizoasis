/** 나의 T/F 지수 정밀 측정 — phase3-tf-index-precise-measurement */

export type Phase3TfIndexLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function T(t: {
  ko: string;
  en: string;
  ja: string;
  zhCN: string;
  zhTW: string;
  vi: string;
  id: string;
}): Record<Phase3TfIndexLocaleKey, string> {
  return {
    ko: t.ko,
    en: t.en,
    ja: t.ja,
    'zh-CN': t.zhCN,
    'zh-TW': t.zhTW,
    vi: t.vi,
    id: t.id,
  };
}

export interface Phase3TfIndexPreciseMeasurementQuestion {
  id: number;
  question: Record<Phase3TfIndexLocaleKey, string>;
  options: {
    text: Record<Phase3TfIndexLocaleKey, string>;
    score: number; // A=T=0, B=F=1
  }[];
}

export interface Phase3TfIndexPreciseMeasurementResult {
  type: string;
  emoji: string;
  title: Record<Phase3TfIndexLocaleKey, string>;
  shortDescription: Record<Phase3TfIndexLocaleKey, string>;
  description: Record<Phase3TfIndexLocaleKey, string>;
  /** 유형 구간 표기 (예: F 0~17% / T 83~100%) */
  indexBand: Record<Phase3TfIndexLocaleKey, string>;
  characteristics: Record<Phase3TfIndexLocaleKey, string>;
  goodMatch: Record<Phase3TfIndexLocaleKey, string>;
  badMatch: Record<Phase3TfIndexLocaleKey, string>;
  /** SNS 공유 문구 — {fPercent} 치환 */
  shareLine: Record<Phase3TfIndexLocaleKey, string>;
}

/** 원점수(0~12) → F%/T% (기획서 표) */
export const PHASE3_TF_SCORE_TO_FT: { f: number; t: number }[] = [
  { f: 0, t: 100 },
  { f: 8, t: 92 },
  { f: 17, t: 83 },
  { f: 25, t: 75 },
  { f: 33, t: 67 },
  { f: 42, t: 58 },
  { f: 50, t: 50 },
  { f: 58, t: 42 },
  { f: 67, t: 33 },
  { f: 75, t: 25 },
  { f: 83, t: 17 },
  { f: 92, t: 8 },
  { f: 100, t: 0 },
];

export function getFtPercentFromRawScore(rawScore: number): { f: number; t: number } {
  const s = Math.max(0, Math.min(12, Math.round(rawScore)));
  return PHASE3_TF_SCORE_TO_FT[s] ?? PHASE3_TF_SCORE_TO_FT[0];
}

export function calculatePhase3TfIndexPreciseMeasurementResult(answers: number[]): string {
  const total = answers.reduce((sum, n) => sum + n, 0);
  if (total <= 2) return 'Type1';
  if (total <= 4) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 8) return 'Type4';
  if (total <= 10) return 'Type5';
  return 'Type6';
}

export const phase3TfIndexPreciseMeasurementQuestions: Phase3TfIndexPreciseMeasurementQuestion[] = [
  {
    id: 1,
    question: T({
      ko: '친구가 "나 요즘 너무 힘들어"라고 말했을 때 나는?',
      en: 'When a friend says "I\'ve been really struggling lately," I…',
      ja: '友達が「最近すごくつらい」と言ったとき、私は？',
      zhCN: '朋友说「我最近好累」时，我会？',
      zhTW: '朋友說「我最近好累」時，我會？',
      vi: 'Khi bạn nói "Dạo này mình căng thẳng quá," tôi…',
      id: 'Saat teman bilang "Akhir-akhir ini aku sangat lelah," aku…',
    }),
    options: [
      {
        text: T({
          ko: '"왜 힘들어? 어떤 상황인지 말해봐" 상황 파악부터 한다',
          en: 'I clarify the situation first: "What\'s wrong? Walk me through it."',
          ja: 'まず状況を聞く。「どうして？どんな状況？」',
          zhCN: '先弄清情况："怎么了？具体什么情况？"',
          zhTW: '先釐清狀況：「怎麼了？具體什麼情況？」',
          vi: 'Tôi làm rõ tình huống trước: "Sao vậy? Kể mình nghe."',
          id: 'Aku uraikan situasinya dulu: "Kenapa? Ceritakan konteksnya."',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '"그랬구나, 많이 힘들었겠다" 감정을 먼저 받아준다',
          en: 'I acknowledge feelings first: "That sounds really hard."',
          ja: 'まず感情を受け止める。「そっか、大変だったね」',
          zhCN: '先接住情绪："这样啊，一定很难受吧。"',
          zhTW: '先接住情緒：「這樣啊，一定很辛苦吧。」',
          vi: 'Tôi nhận cảm xúc trước: "Vậy à, chắc là rất khó khăn."',
          id: 'Aku validasi emosinya dulu: "Wah… pasti berat ya."',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: T({
      ko: '팀 프로젝트에서 의견 충돌이 생겼을 때 나는?',
      en: 'When opinions clash on a team project, I…',
      ja: 'チームで意見がぶつかったとき、私は？',
      zhCN: '团队项目里意见冲突时，我会？',
      zhTW: '團隊專案裡意見衝突時，我會？',
      vi: 'Khi ý kiến trong nhóm bị xung đột, tôi…',
      id: 'Saat pendapat tim bentrok, aku…',
    }),
    options: [
      {
        text: T({
          ko: '논리적으로 더 나은 방향이 있다면 관계가 불편해도 말한다',
          en: 'Say it if a logically better path exists—even if it feels awkward.',
          ja: '論理的に良い方向があれば、関係がぎこちなくても言う。',
          zhCN: '若有更合逻辑的方向，即使尴尬也会说出来。',
          zhTW: '若有更合邏輯的方向，即使尷尬也會說出來。',
          vi: 'Nếu hướng hợp lý hơn thì nói ra—dù hơi khó xử.',
          id: 'Kalau ada arah yang lebih logis, kukatakan—meski canggung.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '결론이 조금 아쉬워도 팀 분위기를 해치지 않는 쪽으로 맞춘다',
          en: 'Adjust to protect team vibes even if the outcome is a bit weaker.',
          ja: '結論が少し惜しくても、空気を壊さない方に合わせる。',
          zhCN: '即使结论略勉强，也优先不伤团队气氛。',
          zhTW: '即使結論略勉強，也優先不傷團隊氣氛。',
          vi: 'Chấp nhận kết quả hơi thiếu để không làm căng không khí.',
          id: 'Mengalah sedikit demi suasana tim tetap aman.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: T({
      ko: '누군가가 나에게 솔직한 피드백을 요청했을 때 나는?',
      en: 'When someone asks me for honest feedback, I…',
      ja: '誰かに正直なフィードバックを求められたら、私は？',
      zhCN: '有人请我给出坦诚反馈时，我会？',
      zhTW: '有人請我給出坦誠回饋時，我會？',
      vi: 'Khi ai đó nhờ phản hồi thật lòng, tôi…',
      id: 'Saat seseorang minta umpan balik jujur, aku…',
    }),
    options: [
      {
        text: T({
          ko: '좋은 점과 아쉬운 점을 객관적으로 구체적으로 말해준다',
          en: 'Give pros and cons clearly and objectively.',
          ja: '良い点と改善点を客観的・具体的に言う。',
          zhCN: '客观具体地说出优点和不足。',
          zhTW: '客觀具體地說出優點與不足。',
          vi: 'Nói rõ ưu/nhược một cách khách quan.',
          id: 'Menyebut plus/minus secara objektif dan jelas.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '상대가 상처받지 않도록 긍정적인 부분을 더 강조해서 말한다',
          en: 'Emphasize positives so they don\'t feel hurt.',
          ja: '傷つけないよう、良い面を強めに伝える。',
          zhCN: '多强调正面，避免对方受伤。',
          zhTW: '多強調正面，避免對方受傷。',
          vi: 'Nhấn mạnh điểm tốt để đỡ phật lòng.',
          id: 'Lebih menonjolkan hal positif agar tidak terluka.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: T({
      ko: '영화를 보다가 슬픈 장면이 나왔을 때 나는?',
      en: 'When a sad scene comes on in a movie, I…',
      ja: '映画で悲しいシーンが出たとき、私は？',
      zhCN: '电影里出现悲伤桥段时，我会？',
      zhTW: '電影裡出現悲傷橋段時，我會？',
      vi: 'Khi có cảnh buồn trong phim, tôi…',
      id: 'Saat adegan sedih di film, aku…',
    }),
    options: [
      {
        text: T({
          ko: '감동적이라는 건 알지만 눈물이 나지는 않는다. 감정이 크게 동하지 않는 편이다',
          en: 'I get that it\'s moving, but I rarely tear up—I don\'t feel it that deeply.',
          ja: '感動は分かるが涙は出ない。感情の動きは小さめ。',
          zhCN: '知道感人，但不太会哭，情绪共鸣不强。',
          zhTW: '知道感人，但不太會哭，情緒共鳴不強。',
          vi: 'Hiểu là cảm động nhưng ít khóc—không đồng cảm sâu.',
          id: 'Tahu menyentuh, tapi jarang menangis—kurang ikut larut.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '자연스럽게 눈물이 나거나 감정이 이입된다. 영화 속 인물에 공감이 잘 된다',
          en: 'I tear up easily and feel pulled into the characters.',
          ja: '自然に涙が出たり感情移入する。人物に共感しやすい。',
          zhCN: '容易流泪、代入情绪，很能共情角色。',
          zhTW: '容易流淚、代入情緒，很能共情角色。',
          vi: 'Dễ rơi lệ và nhập tâm nhân vật.',
          id: 'Mudah menangis dan ikut larut ke tokoh.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: T({
      ko: '친구가 어떤 선택에 대해 조언을 구할 때 나는?',
      en: 'When a friend asks for advice on a choice, I…',
      ja: '友達が選択について相談してきたら、私は？',
      zhCN: '朋友来问某个选择建议时，我会？',
      zhTW: '朋友來問某個選擇建議時，我會？',
      vi: 'Khi bạn nhờ tư vấn về một lựa chọn, tôi…',
      id: 'Saat teman minta saran soal pilihan, aku…',
    }),
    options: [
      {
        text: T({
          ko: '각 선택지의 장단점을 따져보고 논리적으로 더 나은 방향을 제시한다',
          en: 'Weigh pros and cons and suggest the more logical path.',
          ja: '選択肢の得失を比べ、論理的に良い方向を示す。',
          zhCN: '权衡利弊，指出更合理的选择。',
          zhTW: '權衡利弊，指出更合理的選擇。',
          vi: 'Cân nhắc ưu/nhược và gợi ý hướng hợp lý hơn.',
          id: 'Mempertimbangkan plus/minus dan menyarankan arah lebih logis.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '친구가 어떤 선택을 원하는지 먼저 파악하고 그 선택을 지지한다',
          en: 'Figure out what they want first and support that choice.',
          ja: 'まず相手が望む選択を把握し、それを支持する。',
          zhCN: '先弄清对方想选什么，再支持那个选择。',
          zhTW: '先弄清對方想選什麼，再支持那個選擇。',
          vi: 'Hiểu họ muốn gì trước rồi ủng hộ lựa chọn đó.',
          id: 'Cari tahu dulu apa yang mereka mau, lalu dukung.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: T({
      ko: '누군가 내 말에 감정적으로 화를 낼 때 나는?',
      en: 'When someone gets emotional and angry at what I said, I…',
      ja: '誰かが私の言葉に感情的に怒ったら、私は？',
      zhCN: '有人因我的话情绪激动发火时，我会？',
      zhTW: '有人因我的話情緒激動發火時，我會？',
      vi: 'Khi ai đó tức giận vì lời tôi, tôi…',
      id: 'Saat seseorang marah karena perkataanku, aku…',
    }),
    options: [
      {
        text: T({
          ko: '내가 한 말이 논리적으로 맞다면 감정적인 반응에 크게 흔들리지 않는다',
          en: 'If my point was logical, I don\'t get thrown off by the reaction.',
          ja: '論理的に正しければ、感情的な反応に大きく揺れない。',
          zhCN: '若我说得在理，不太会被情绪反应带跑。',
          zhTW: '若我說得在理，不太會被情緒反應帶跑。',
          vi: 'Nếu lý lẽ đúng, tôi ít bị lung lay bởi phản ứng cảm xúc.',
          id: 'Kalau logis, aku tidak terlalu goyah oleh reaksi emosional.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '상대가 왜 화가 났는지 이해하려고 하고 내가 상처를 줬는지 먼저 돌아본다',
          en: 'I try to see why they\'re upset and whether I hurt them.',
          ja: 'なぜ怒ったか理解しようとし、傷つけたかを振り返る。',
          zhCN: '试着理解对方为何生气，先反思是否伤到对方。',
          zhTW: '試著理解對方為何生氣，先反思是否傷到對方。',
          vi: 'Cố hiểu vì sao họ tức và xem mình có làm tổn thương không.',
          id: 'Mencoba paham kenapa mereka marah dan apakah aku menyakiti.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: T({
      ko: '회사나 학교에서 규칙이 불합리하다고 느낄 때 나는?',
      en: 'When a rule at work or school feels unreasonable, I…',
      ja: '職場や学校でルールが不合理だと感じたら、私は？',
      zhCN: '觉得公司或学校规定不合理时，我会？',
      zhTW: '覺得公司或學校規定不合理時，我會？',
      vi: 'Khi thấy quy định ở công ty/trường vô lý, tôi…',
      id: 'Saat aturan di kantor/sekolah terasa tidak masuk akal, aku…',
    }),
    options: [
      {
        text: T({
          ko: '논리적으로 문제가 있다면 개선을 요구하거나 의문을 제기한다',
          en: 'Ask for change or raise questions if it\'s logically flawed.',
          ja: '論理的に問題があれば改善を求めたり疑問を出す。',
          zhCN: '若逻辑上有问题，会要求改进或提出质疑。',
          zhTW: '若邏輯上有問題，會要求改進或提出質疑。',
          vi: 'Nếu sai về mặt logic thì đề nghị sửa hoặc hỏi lại.',
          id: 'Jika bermasalah secara logis, minta perbaikan atau pertanyakan.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '규칙보다 그 상황에 있는 사람들의 사정이 먼저 고려되어야 한다고 생각한다',
          en: 'I think people\'s situations matter more than the rule itself.',
          ja: 'ルールより、その場にいる人の事情を先に考えるべきだと思う。',
          zhCN: '觉得应先考虑当事人的处境，而非条文本身。',
          zhTW: '覺得應先考慮當事人的處境，而非條文本身。',
          vi: 'Tôi nghĩ hoàn cảnh con người quan trọng hơn quy tắc.',
          id: 'Menurutku situasi orang lebih penting daripada aturan.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: T({
      ko: '가까운 사람이 명백히 잘못된 선택을 하려 할 때 나는?',
      en: 'When someone close is about to make a clearly bad choice, I…',
      ja: '身近な人が明らかに悪い選択をしようとしたら、私は？',
      zhCN: '亲近的人明显要做错误选择时，我会？',
      zhTW: '親近的人明顯要做錯誤選擇時，我會？',
      vi: 'Khi người thân sắp chọn điều rõ ràng sai, tôi…',
      id: 'Saat orang dekat hendak memilih yang jelas-jelas salah, aku…',
    }),
    options: [
      {
        text: T({
          ko: '잘못된 이유를 논리적으로 설명하고 다른 선택을 권한다',
          en: 'Explain logically why it\'s wrong and suggest alternatives.',
          ja: 'なぜダメか論理的に説明し、別の選択を勧める。',
          zhCN: '用逻辑说明为何不妥，并建议其他选项。',
          zhTW: '用邏輯說明為何不妥，並建議其他選項。',
          vi: 'Giải thích lý do sai và gợi ý lựa chọn khác.',
          id: 'Jelaskan secara logis dan sarankan opsi lain.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '결국 본인이 결정해야 하는 일이니 감정적으로 지지하면서 결과를 함께 감당한다',
          en: 'Support them emotionally—it\'s their call—and share the outcome.',
          ja: '最終的には本人の決断なので感情面で支え、結果も一緒に受け止める。',
          zhCN: '终究是对方决定，情感上支持并一起承担后果。',
          zhTW: '終究是對方決定，情感上支持並一起承擔後果。',
          vi: 'Vẫn là quyết định của họ—đồng cảm và cùng gánh hậu quả.',
          id: 'Itu keputusan mereka—dukung secara emosional dan tanggung bersama.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: T({
      ko: '칭찬과 비판 중 상대에게 더 효과적인 것은?',
      en: 'Which works better for the other person—praise or critique?',
      ja: '相手にとって効くのは褒めか、指摘か？',
      zhCN: '对对方更有效的是表扬还是批评？',
      zhTW: '對對方更有效的是表揚還是批評？',
      vi: 'Cái nào hiệu quả hơn cho đối phương—khen hay góp ý?',
      id: 'Mana yang lebih efektif untuk orang lain—pujian atau kritik?',
    }),
    options: [
      {
        text: T({
          ko: '객관적인 피드백이 더 도움이 된다. 칭찬만 하는 건 결국 도움이 안 된다',
          en: 'Objective feedback helps more—praise alone isn\'t enough.',
          ja: '客観的フィードバックが役立つ。褒めだけでは足りない。',
          zhCN: '客观反馈更有用，只夸奖不够。',
          zhTW: '客觀回饋更有用，只誇獎不夠。',
          vi: 'Phản hồi khách quan hữu ích hơn—chỉ khen thì chưa đủ.',
          id: 'Umpan balik objektif lebih membantu—pujian saja tidak cukup.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '먼저 충분히 인정해줘야 비판도 받아들일 수 있다. 칭찬이 먼저다',
          en: 'People accept critique after enough validation—praise comes first.',
          ja: '十分に認めてもらえて初めて指摘も受け入れられる。先に褒める。',
          zhCN: '先被充分认可，才更容易接受批评。先夸。',
          zhTW: '先被充分認可，才更容易接受批評。先誇。',
          vi: 'Cần được công nhận đủ trước thì mới nhận góp ý—khen trước.',
          id: 'Perlu divalidasi dulu baru terima kritik—puji dulu.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: T({
      ko: '오래된 친구가 느닷없이 연락해 하소연을 쏟아낼 때 나는?',
      en: 'When an old friend suddenly vents to me, I…',
      ja: '久しぶりの友が突然連絡して愚痴をぶつけてきたら、私は？',
      zhCN: '老友突然联系并大吐苦水时，我会？',
      zhTW: '老友突然聯絡並大吐苦水時，我會？',
      vi: 'Khi bạn cũ đột ngột trút bầu tâm sự, tôi…',
      id: 'Saat teman lama tiba-tiba curhat panjang, aku…',
    }),
    options: [
      {
        text: T({
          ko: '끝까지 들은 후 해결책이나 다른 관점을 제시한다',
          en: 'After listening through, I offer solutions or another angle.',
          ja: '最後まで聞いた後、解決策や別視点を出す。',
          zhCN: '听完后给出解法或不同视角。',
          zhTW: '聽完後給出解法或不同視角。',
          vi: 'Nghe hết rồi mới đưa cách xử lý hoặc góc nhìn khác.',
          id: 'Setelah dengar sampai habis, tawarkan solusi atau sudut pandang lain.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '해결책보다 충분히 들어주고 공감해주는 것이 먼저다',
          en: 'Listening and empathy first—solutions can wait.',
          ja: '解決より、まず十分に聞いて共感する。',
          zhCN: '先充分倾听与共情，解法可以之后。',
          zhTW: '先充分傾聽與共情，解法可以之後。',
          vi: 'Lắng nghe và đồng cảm trước—giải pháp để sau.',
          id: 'Dengarkan dan berempati dulu—solusi belakangan.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: T({
      ko: '결정을 내릴 때 나는?',
      en: 'When I make decisions, I…',
      ja: '決断するとき、私は？',
      zhCN: '做决定时，我会？',
      zhTW: '做決定時，我會？',
      vi: 'Khi quyết định, tôi…',
      id: 'Saat mengambil keputusan, aku…',
    }),
    options: [
      {
        text: T({
          ko: '감정보다 논리와 데이터, 원칙을 더 신뢰한다',
          en: 'Trust logic, data, and principles more than feelings.',
          ja: '感情より論理・データ・原則を信じる。',
          zhCN: '更相信逻辑、数据和原则，而非情绪。',
          zhTW: '更相信邏輯、數據和原則，而非情緒。',
          vi: 'Tin logic, dữ liệu, nguyên tắc hơn cảm xúc.',
          id: 'Lebih percaya logika, data, prinsip daripada emosi.',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '논리적으로 맞아도 마음이 불편하면 그 결정을 다시 검토한다',
          en: 'If it feels wrong emotionally, I revisit—even if it\'s logical.',
          ja: '論理的に正しくても気持ちが引っかかれば見直す。',
          zhCN: '即使合理，若心里别扭也会重新考虑。',
          zhTW: '即使合理，若心裡彆扭也會重新考慮。',
          vi: 'Dù hợp lý, nếy lòng không yên thì xem lại.',
          id: 'Walau logis, kalau hati tidak nyaman, kutinjau ulang.',
        }),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: T({
      ko: '나를 가장 잘 표현하는 문장은?',
      en: 'Which sentence describes me best?',
      ja: '自分を一番よく表す一文は？',
      zhCN: '哪句话最像我？',
      zhTW: '哪句話最像我？',
      vi: 'Câu nào mô tả tôi nhất?',
      id: 'Kalimat mana yang paling menggambarkanku?',
    }),
    options: [
      {
        text: T({
          ko: '"나는 옳고 그름이 먼저다. 감정은 그다음에 처리한다"',
          en: '"Right and wrong come first—I process feelings after."',
          ja: '「正しさが先。感情はあとで処理する」',
          zhCN: '「对错优先，情绪之后处理。」',
          zhTW: '「對錯優先，情緒之後處理。」',
          vi: '"Đúng/sai trước—cảm xúc xử lý sau."',
          id: '"Benar/salah dulu—emosi diproses belakangan."',
        }),
        score: 0,
      },
      {
        text: T({
          ko: '"나는 사람이 먼저다. 논리보다 관계와 감정이 더 중요하게 느껴진다"',
          en: '"People come first—relationships and feelings matter more than logic."',
          ja: '「人が先。論理より関係と感情が大事」',
          zhCN: '「人优先，关系和情绪比逻辑更重要。」',
          zhTW: '「人優先，關係和情緒比邏輯更重要。」',
          vi: '"Con người trước—quan hệ và cảm xúc quan trọng hơn logic."',
          id: '"Manusia dulu—hubungan dan emosi lebih penting dari logika."',
        }),
        score: 1,
      },
    ],
  },
];

export const phase3TfIndexPreciseMeasurementResults: Phase3TfIndexPreciseMeasurementResult[] = [
  {
    type: 'Type1',
    emoji: '🧊',
    title: T({
      ko: '감정보다 팩트, 진성 사고형',
      en: 'Facts over feelings — true thinking type',
      ja: '感情よりファクト、純度の高い思考型',
      zhCN: '事实优先于情绪，硬核思考型',
      zhTW: '事實優先於情緒，硬核思考型',
      vi: 'Ưu tiên sự thật hơn cảm xúc — kiểu tư duy thuần',
      id: 'Fakta di atas perasaan — tipe berpikir murni',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 사고형입니다. 논리가 감정보다 항상 먼저입니다."',
      en: '"You are almost fully a thinking type—logic almost always comes first."',
      ja: '「あなたはほぼ完全な思考型。論理が常に先に来ます。」',
      zhCN: '「你几乎是典型的思考型——逻辑几乎总是优先。」',
      zhTW: '「你幾乎是典型的思考型——邏輯幾乎總是優先。」',
      vi: '"Bạn gần như hoàn toàn kiểu T—lý trí gần như luôn đi trước."',
      id: '"Kamu hampir sepenuhnya tipe berpikir—logika hampir selalu dulu."',
    }),
    indexBand: T({
      ko: 'F 0~17% / T 83~100%',
      en: 'F 0–17% / T 83–100%',
      ja: 'F 0〜17% / T 83〜100%',
      zhCN: 'F 0~17% / T 83~100%',
      zhTW: 'F 0~17% / T 83~100%',
      vi: 'F 0–17% / T 83–100%',
      id: 'F 0–17% / T 83–100%',
    }),
    description: T({
      ko: '결정을 내릴 때 감정의 영향을 거의 받지 않습니다. 옳고 그름을 논리와 원칙으로 판단하고, 상대가 감정적으로 반응해도 그 감정에 흔들리지 않습니다. 이것은 차갑거나 무감각한 게 아닙니다. 당신의 방식으로 공정하고 일관되게 세상을 대하는 것입니다. 단 상대는 가끔 당신이 자신의 감정을 무시한다고 느낄 수 있다는 것을 알아두세요.\n\n진성 T의 특징: "그래서 해결책이 뭔데?"가 먼저 나오는 사람. 위로보다 조언이 더 자연스러운 사람.\nF와의 갈등 포인트: "왜 저렇게 감정적이야"라고 느끼는 순간이 있음. 상대방 F도 "왜 저렇게 차가워"라고 느끼는 중.',
      en: 'You rarely let feelings steer decisions. You judge right and wrong with logic and principles, and you do not get swayed when others react emotionally. That is not coldness—it is your way of being fair and consistent. Others may sometimes feel you dismiss their feelings.\n\nClassic T: "So what is the fix?" comes first; advice feels more natural than comfort.\nFriction with F: you think "Why so emotional?" while they think "Why so cold?"',
      ja: '意思決定で感情に引っ張られにくく、正しさを論理と原則で見ます。相手が感情的でも揺れません。冷たさではなく、公平で一貫した向き合い方です。相手は時に「感情を無視された」と感じるかもしれません。\n\n純Tの特徴：「で、解決策は？」が先。慰めより助言が自然。\nFとの摩擦：こちらは「なぜそんなに感情的？」、向こうは「なぜそんなに冷たい？」',
      zhCN: '做决定时很少被情绪牵着走，用逻辑和原则判断对错；对方情绪激动也不容易动摇。这不是冷漠，而是你公平、一致地面对世界的方式。对方有时会感到被忽略情绪。\n\n典型T：先问「所以解决方案是？」安慰不如给建议自然。\n与F的摩擦：你觉得「怎么这么情绪化」，对方觉得「怎么这么冷」。',
      zhTW: '做決定時很少被情緒牽著走，用邏輯與原則判斷對錯；對方情緒激動也不容易動搖。這不是冷漠，而是你公平、一致地面對世界的方式。對方有時會感到被忽略情緒。\n\n典型T：先問「所以解決方案是？」安慰不如給建議自然。\n與F的摩擦：你覺得「怎麼這麼情緒化」，對方覺得「怎麼這麼冷」。',
      vi: 'Bạn ít để cảm xúc chi phối quyết định. Bạn phân đúng/sai bằng lý và nguyên tắc, và không lung lay khi người khác phản ứng cảm tính. Đó không phải lạnh lùng—đó là cách bạn công bằng, nhất quán. Đôi khi người khác cảm thấy bạn bỏ qua cảm xúc họ.\n\nT điển hình: "Vậy giải pháp là gì?" đến trước; cho lời khuyên tự nhiên hơn an ủi.\nMa sát với F: bạn thấy "sao cảm tính vậy" trong khi họ thấy "sao lạnh vậy".',
      id: 'Kamu jarang membiarkan emosi mengarahkan keputusan. Kamu menilai benar/salah dengan logika dan prinsip, dan tidak goyah saat orang lain bereaksi emosional. Itu bukan dingin—itulah cara kamu adil dan konsisten. Orang lain kadang merasa kamu mengabaikan perasaan mereka.\n\nT klasik: "Jadi solusinya apa?" dulu; memberi saran lebih alami daripada menenangkan.\nGesekan dengan F: kamu merasa "kenapa begitu emosional" sementara mereka merasa "kenapa begitu dingin".',
    }),
    characteristics: T({
      ko: '의사결정: 논리·원칙·데이터 기반. 강점: 공정한 판단·일관성·비판적 사고·문제 해결. 약점: 상대 감정 고려 부족으로 오해',
      en: 'Decisions: logic/principles/data. Strengths: fairness, consistency, critique, problem-solving. Weakness: misunderstandings from under-reading emotions',
      ja: '意思決定：論理・原則・データ。強み：公平さ・一貫性・批判的思考・問題解決。弱み：感情配慮不足で誤解',
      zhCN: '决策：逻辑·原则·数据。优势：公平·一致·批判思维·解决问题。劣势：顾及情绪不足易误解',
      zhTW: '決策：邏輯·原則·數據。優勢：公平·一致·批判思維·解決問題。劣勢：顧及情緒不足易誤解',
      vi: 'Quyết định: logic/nguyên tắc/dữ liệu. Điểm mạnh: công bằng, nhất quán, phản biện, giải quyết vấn đề. Điểm yếu: hiểu lầm vì thiếu quan tâm cảm xúc',
      id: 'Keputusan: logika/prinsip/data. Kekuatan: adil, konsisten, berpikir kritis, menyelesaikan masalah. Kelemahan: salah paham karena kurang perhatian pada emosi',
    }),
    goodMatch: T({
      ko: '"상대가 하소연할 때 해결책 제시 전에 딱 한마디만 먼저 해보세요. \'많이 힘들었겠다.\' 이 한마디가 관계를 바꿉니다"',
      en: '"Before solutions when they vent, try one line first: \'That sounds really hard.\' It changes everything."',
      ja: '「相手が愚痴るとき、解決策の前に一言だけ。『大変だったね』この一言が関係を変える」',
      zhCN: '「对方吐槽时，先别说解法，试一句：『一定很辛苦吧。』这句话能改变关系。」',
      zhTW: '「對方吐槽時，先別說解法，試一句：『一定很辛苦吧。』這句話能改變關係。」',
      vi: '"Khi họ trút bầu tâm sự, trước khi đưa giải pháp hãy thử một câu: \'Chắc là rất khó khăn.\' Một câu đó đổi cả mối quan hệ."',
      id: '"Saat mereka curhat, sebelum solusi coba satu kalimat: \'Pasti berat ya.\' Satu kalimat itu mengubah hubungan."',
    }),
    badMatch: T({
      ko: '판사, 외과의사, 데이터 분석가, 변호사, 철학자',
      en: 'Judge, surgeon, data analyst, lawyer, philosopher',
      ja: '裁判官、外科医、データアナリスト、弁護士、哲学者',
      zhCN: '法官、外科医生、数据分析师、律师、哲学家',
      zhTW: '法官、外科醫師、數據分析師、律師、哲學家',
      vi: 'Thẩm phán, bác sĩ phẫu thuật, nhà phân tích dữ liệu, luật sư, triết gia',
      id: 'Hakim, dokter bedah, analis data, pengacara, filsuf',
    }),
    shareLine: T({
      ko: '나의 F지수는 {fPercent}% 🧊 진성 T형. 팩트가 감정보다 항상 먼저인 사람 → 커플이랑 같이 해봐 ㅋㅋ',
      en: 'My F index is {fPercent}% 🧊 True T—facts always beat feelings. Try with your partner 😄',
      ja: '私のF指数は{fPercent}% 🧊純T。ファクトが常に先。カップルでやってみて',
      zhCN: '我的F指数是{fPercent}% 🧊典型T，事实总比情绪先——和对象一起测',
      zhTW: '我的F指數是{fPercent}% 🧊典型T，事實總比情緒先——和對象一起測',
      vi: 'Chỉ số F của tôi là {fPercent}% 🧊 T thuần—sự thật luôn trước cảm xúc. Thử với người yêu nhé',
      id: 'Indeks F-ku {fPercent}% 🧊 T murni—fakta selalu di atas emosi. Coba sama pasangan',
    }),
  },
  {
    type: 'Type2',
    emoji: '📐',
    title: T({
      ko: '원칙 있는 논리파, 강한 사고형',
      en: 'Principled logic — strong thinking type',
      ja: '原則ある論理派・強めの思考型',
      zhCN: '有原则的逻辑派，偏强思考型',
      zhTW: '有原則的邏輯派，偏強思考型',
      vi: 'Logic có nguyên tắc — kiểu T mạnh',
      id: 'Logika berprinsip — tipe berpikir kuat',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 사고형이지만 감정의 언어도 어느 정도 이해합니다."',
      en: '"You are clearly a thinking type, but you still get emotional language—to a point."',
      ja: '「あなたは明確な思考型だが、感情の言葉もある程度は理解できる」',
      zhCN: '「你明显是思考型，但也能一定程度理解情绪表达。」',
      zhTW: '「你明顯是思考型，但也能一定程度理解情緒表達。」',
      vi: '"Bạn rõ ràng là kiểu T, nhưng vẫn hiểu ngôn ngữ cảm xúc ở mức nào đó."',
      id: '"Kamu jelas tipe berpikir, tapi masih mengerti bahasa emosi sampai batas tertentu."',
    }),
    indexBand: T({
      ko: 'F 25~33% / T 67~75%',
      en: 'F 25–33% / T 67–75%',
      ja: 'F 25〜33% / T 67〜75%',
      zhCN: 'F 25~33% / T 67~75%',
      zhTW: 'F 25~33% / T 67~75%',
      vi: 'F 25–33% / T 67–75%',
      id: 'F 25–33% / T 67–75%',
    }),
    description: T({
      ko: '대부분의 상황에서 논리와 원칙을 우선시하지만, 완전히 감정을 무시하지는 않습니다. 가까운 사람의 감정은 어느 정도 고려하고, 상황에 따라 공감 표현도 할 수 있습니다. 다만 기본적으로는 팩트가 감정보다 먼저입니다. 진성 T보다 유연하고, F형과도 어느 정도 소통이 됩니다.\n\n강한 T의 특징: 피드백 요청하면 진짜로 솔직하게 말해주는 사람. 그게 때로 부담스럽기도 함.',
      en: 'Mostly you lead with logic and principles, but you do not ignore feelings completely. You consider close people\'s emotions and can show empathy when needed—yet facts still come first. You are more flexible than a pure T and can talk with F types.\n\nStrong T: when asked for feedback, you tell the truth—which can feel heavy.',
      ja: '多くの場面で論理と原則が先だが、感情を完全に無視はしない。身近な人の気持ちはある程度考え、状況によっては共感も示せる。基本はファクト優先。純Tより柔軟で、Fともある程度話せる。\n\n強めTの特徴：フィードバックを求められると本音を言う。それが時に重い。',
      zhCN: '多数情况逻辑与原则优先，但不会完全无视情绪。会在意亲近之人的感受，必要时也能表达共情，但根本上仍是事实优先。比纯T更灵活，也能和F型沟通。\n\n偏强T：一要反馈就说真话，有时会让人有压力。',
      zhTW: '多數情況邏輯與原則優先，但不會完全無視情緒。會在意親近之人的感受，必要時也能表達共情，但根本上仍是事實優先。比純T更靈活，也能和F型溝通。\n\n偏強T：一要回饋就說真話，有時會讓人有壓力。',
      vi: 'Phần lớn bạn ưu tiên lý và nguyên tắc, nhưng không hoàn toàn bỏ qua cảm xúc. Bạn quan tâm cảm xúc người thân và có thể đồng cảm khi cần—nhưng sự thật vẫn đi trước. Linh hoạt hơn T thuần và nói chuyện được với kiểu F.\n\nT mạnh: khi được nhờ góp ý, bạn nói thật—đôi khi nặng.',
      id: 'Kebanyakan logika dan prinsip dulu, tapi tidak mengabaikan emosi sepenuhnya. Kamu mempertimbangkan perasaan orang dekat dan bisa menunjukkan empati saat perlu—tapi fakta tetap dulu. Lebih fleksibel dari T murni dan bisa berkomunikasi dengan tipe F.\n\nT kuat: saat diminta umpan balik, kamu jujur—kadang terasa berat.',
    }),
    characteristics: T({
      ko: '의사결정: 논리 중심+관계 맥락. 강점: 논리적 판단+제한적 감정 고려. 약점: 공감 욕구 높은 상대에겐 차갑게 느껴질 수 있음',
      en: 'Decisions: logic-first + relational context. Strengths: logical judgment + some emotional care. Weakness: can feel cold to people who need deep empathy',
      ja: '意思決定：論理中心＋関係の文脈。強み：論理的判断＋限定的な感情配慮。弱み：共感欲求が高い相手には冷たく感じられる',
      zhCN: '决策：逻辑为主+关系情境。优势：理性判断+有限顾及情绪。劣势：对高共情需求者可能显得冷',
      zhTW: '決策：邏輯為主+關係情境。優勢：理性判斷+有限顧及情緒。劣勢：對高共情需求者可能顯得冷',
      vi: 'Quyết định: ưu tiên logic + ngữ cảnh quan hệ. Điểm mạnh: phán đoán logic + một phần quan tâm cảm xúc. Điểm yếu: có thể lạnh với người cần đồng cảm sâu',
      id: 'Keputusan: logika dulu + konteks relasi. Kekuatan: penilaian logis + perhatian emosi terbatas. Kelemahan: bisa terasa dingin bagi yang butuh empati dalam',
    }),
    goodMatch: T({
      ko: '"조언을 하기 전에 \'지금 위로가 필요해, 아니면 해결책이 필요해?\'라고 먼저 물어보세요. 게임 체인저입니다"',
      en: '"Before advice, ask: \'Do you need comfort or a solution right now?\' Game changer."',
      ja: '「助言の前に『今は慰めが必要？解決策が必要？』と聞く。ゲームチェンジャー」',
      zhCN: '「给建议前先问：你现在需要安慰还是解决方案？改变局面。」',
      zhTW: '「給建議前先問：你現在需要安慰還是解決方案？改變局面。」',
      vi: '"Trước khi cho lời khuyên, hỏi: \'Bây giờ bạn cần an ủi hay giải pháp?\' Thay đổi cả tình huống."',
      id: '"Sebelum saran, tanya: \'Sekarang kamu butuh penenang atau solusi?\' Mengubah segalanya."',
    }),
    badMatch: T({
      ko: '경영자, 엔지니어, 의사, 재무 분석가, 프로덕트 매니저',
      en: 'Executive, engineer, physician, financial analyst, product manager',
      ja: '経営者、エンジニア、医師、財務アナリスト、プロダクトマネージャー',
      zhCN: '管理者、工程师、医生、财务分析师、产品经理',
      zhTW: '管理者、工程師、醫師、財務分析師、產品經理',
      vi: 'Lãnh đạo, kỹ sư, bác sĩ, nhà phân tích tài chính, quản lý sản phẩm',
      id: 'Eksekutif, insinyur, dokter, analis keuangan, manajer produk',
    }),
    shareLine: T({
      ko: '나의 F지수는 {fPercent}% 📐 강한 T형. 논리파이지만 완전히 냉혈한은 아닌 사람 → 너는 몇 %야?',
      en: 'My F index is {fPercent}% 📐 Strong T—not ice-cold, just logic-first. What about you?',
      ja: '私のF指数は{fPercent}% 📐強めT。論理派だけど冷血ではない。あなたは？',
      zhCN: '我的F指数是{fPercent}% 📐偏强T，讲逻辑但不是冷血——你呢？',
      zhTW: '我的F指數是{fPercent}% 📐偏強T，講邏輯但不是冷血——你呢？',
      vi: 'Chỉ số F của tôi {fPercent}% 📐 T mạnh—ưu tiên lý nhưng không lạnh lùng. Còn bạn?',
      id: 'Indeks F-ku {fPercent}% 📐 T kuat—logika dulu tapi bukan dingin. Kamu berapa?',
    }),
  },
  {
    type: 'Type3',
    emoji: '🌓',
    title: T({
      ko: '논리도 감정도 다 아는, T와 F 경계인',
      en: 'Both logic and feeling — on the T/F border',
      ja: '論理も感情もわかる、TとFの境界線',
      zhCN: '逻辑与情绪都懂，T/F边界型',
      zhTW: '邏輯與情緒都懂，T/F邊界型',
      vi: 'Hiểu cả lý lẫn cảm — ranh giới T/F',
      id: 'Paham logika dan emosi — di perbatasan T/F',
    }),
    shortDescription: T({
      ko: '"당신은 팩트와 감정 사이 가장 균형 잡힌 지점에 있습니다."',
      en: '"You sit at the most balanced point between facts and feelings."',
      ja: '「あなたはファクトと感情のちょうどバランスの取れた地点にいる」',
      zhCN: '「你处在事实与情绪之间最平衡的位置。」',
      zhTW: '「你處在事實與情緒之間最平衡的位置。」',
      vi: '"Bạn đứng ở điểm cân bằng nhất giữa sự thật và cảm xúc."',
      id: '"Kamu berada di titik paling seimbang antara fakta dan perasaan."',
    }),
    indexBand: T({
      ko: 'F 42~50% / T 50~58%',
      en: 'F 42–50% / T 50–58%',
      ja: 'F 42〜50% / T 50〜58%',
      zhCN: 'F 42~50% / T 50~58%',
      zhTW: 'F 42~50% / T 50~58%',
      vi: 'F 42–50% / T 50–58%',
      id: 'F 42–50% / T 50–58%',
    }),
    description: T({
      ko: '논리적으로 사고하면서도 상대의 감정을 충분히 고려할 수 있는 가장 유연한 타입입니다. 상황에 따라 T처럼 냉철하게, F처럼 따뜻하게 반응합니다. T와 F 모두 이해할 수 있어서 갈등 상황에서 중재 역할을 자연스럽게 맡게 되는 경우도 많습니다.\n\n경계인의 특징: "나는 논리적이기도 한데 감정도 중요해"라는 말을 자주 하는 사람.',
      en: 'You think logically while still caring about others\' feelings—highly flexible. You can be cool like a T or warm like an F depending on context. Because you get both sides, you often mediate conflicts.\n\nBorder type line: "I am logical, but feelings matter too."',
      ja: '論理的に考えつつ相手の感情も十分に考慮できる、最も柔軟なタイプ。状況でTのように冷めたり、Fのように温かくなれたりする。両方わかるので仲介役になりやすい。\n\n境界タイプのセリフ：「論理的だけど感情も大事」',
      zhCN: '能逻辑思考，也能充分顾及对方感受，非常灵活。视情境可像T般冷静或像F般温暖。因两边都懂，常自然成为调解者。\n\n边界型口头禅：「我也讲逻辑，但情绪也很重要。」',
      zhTW: '能邏輯思考，也能充分顧及對方感受，非常靈活。視情境可像T般冷靜或像F般溫暖。因兩邊都懂，常自然成為調解者。\n\n邊界型口頭禪：「我也講邏輯，但情緒也很重要。」',
      vi: 'Bạn suy nghĩ logic nhưng vẫn quan tâm cảm xúc người khác—rất linh hoạt. Tùy tình huống có thể lạnh như T hoặc ấm như F. Vì hiểu cả hai, bạn thường hòa giải.\n\nCâu điển hình: "Tôi logic, nhưng cảm xúc cũng quan trọng."',
      id: 'Kamu berpikir logis sambil tetap peduli perasaan orang lain—sangat fleksibel. Bisa dingin seperti T atau hangat seperti F tergantung situasi. Karena memahami keduanya, kamu sering jadi mediator.\n\nKalimat khas: "Aku logis, tapi perasaan juga penting."',
    }),
    characteristics: T({
      ko: '의사결정: 논리와 감정 병행. 강점: 균형·양쪽과 소통. 약점: T/F 헷갈림·MBTI 결과 흔들림',
      en: 'Decisions: logic + feelings together. Strengths: balance, bridges both sides. Weakness: T/F confusion, shifting MBTI results',
      ja: '意思決定：論理と感情の両立。強み：バランス・両タイプと話せる。弱み：T/Fで迷う・診断結果が揺れる',
      zhCN: '决策：逻辑与情绪并行。优势：平衡、与两边沟通。劣势：T/F摇摆、测试结果不稳定',
      zhTW: '決策：邏輯與情緒並行。優勢：平衡、與兩邊溝通。劣勢：T/F搖擺、測驗結果不穩定',
      vi: 'Quyết định: logic + cảm xúc song song. Điểm mạnh: cân bằng, nói chuyện được cả hai phía. Điểm yếu: lẫn T/F, kết quả MBTI hay đổi',
      id: 'Keputusan: logika + emosi bersamaan. Kekuatan: seimbang, jembatan dua sisi. Kelemahan: bingung T/F, hasil MBTI bergeser',
    }),
    goodMatch: T({
      ko: '"당신은 이미 양쪽 언어를 구사할 수 있습니다. 상대의 유형을 먼저 파악하고 그에 맞게 커뮤니케이션 방식을 조정해보세요"',
      en: '"You already speak both languages—read the other person\'s style first, then adjust how you communicate."',
      ja: '「あなたはすでに両方の言語を話せる。先に相手のタイプを読み、合わせてみて」',
      zhCN: '「你已能使用两种语言——先读懂对方类型，再调整沟通方式。」',
      zhTW: '「你已能使用兩種語言——先讀懂對方類型，再調整溝通方式。」',
      vi: '"Bạn đã nói được cả hai kiểu—đọc phong cách đối phương trước rồi điều chỉnh cách nói chuyện."',
      id: '"Kamu sudah bicara dua bahasa—baca dulu tipe orang lain, lalu sesuaikan komunikasi."',
    }),
    badMatch: T({
      ko: 'HR, 상담사, 마케터, 중재자, 팀 리더',
      en: 'HR, counselor, marketer, mediator, team lead',
      ja: '人事、カウンセラー、マーケター、調停者、チームリーダー',
      zhCN: '人力、咨询师、营销、调解者、团队领导',
      zhTW: '人力、諮商師、行銷、調解者、團隊領導',
      vi: 'Nhân sự, tư vấn, marketing, trung gian, trưởng nhóm',
      id: 'HR, konselor, marketer, mediator, pemimpin tim',
    }),
    shareLine: T({
      ko: '나의 F지수는 {fPercent}% 🌓 T도 F도 아닌 경계인. MBTI 할 때마다 T랑 F 왔다갔다 하는 사람 → 너는 몇 %야?',
      en: 'My F index is {fPercent}% 🌓 Border type—not quite T or F. MBTI keeps flipping—what about you?',
      ja: '私のF指数は{fPercent}% 🌓TでもFでもない境界。診断のたびにT/Fが揺れる人。あなたは？',
      zhCN: '我的F指数是{fPercent}% 🌓边界型，不算纯T或纯F，测MBTI总在摇摆——你呢？',
      zhTW: '我的F指數是{fPercent}% 🌓邊界型，不算純T或純F，測MBTI總在搖擺——你呢？',
      vi: 'Chỉ số F {fPercent}% 🌓 Ranh giới—không hẳn T hay F, MBTI hay nhảy—còn bạn?',
      id: 'Indeks F {fPercent}% 🌓 Perbatasan—bukan T atau F murni, MBTI suka bergeser—kamu?',
    }),
  },
  {
    type: 'Type4',
    emoji: '🌤️',
    title: T({
      ko: '따뜻한 논리파, 약한 감정형',
      en: 'Warm logician — mild feeling type',
      ja: '温かい論理派・弱めの感情型',
      zhCN: '温和逻辑派，偏弱感受型',
      zhTW: '溫和邏輯派，偏弱感受型',
      vi: 'Logic ấm — kiểu F nhẹ',
      id: 'Logika hangat — tipe F ringan',
    }),
    shortDescription: T({
      ko: '"당신은 감정형이지만 논리도 충분히 구사할 수 있는 따뜻한 현실주의자입니다."',
      en: '"You lead with feeling, but you can still wield logic—a warm realist."',
      ja: '「あなたは感情型だが、論理も十分に使える温かい現実主義者」',
      zhCN: '「你是感受型，但也能充分运用逻辑——温暖的现实主义者。」',
      zhTW: '「你是感受型，但也能充分運用邏輯——溫暖的現實主義者。」',
      vi: '"Bạn là kiểu cảm nhưng vẫn dùng logic tốt—người hiện thực ấm áp."',
      id: '"Kamu tipe perasaan tapi tetap bisa memakai logika—realis yang hangat."',
    }),
    indexBand: T({
      ko: 'F 58~67% / T 33~42%',
      en: 'F 58–67% / T 33–42%',
      ja: 'F 58〜67% / T 33〜42%',
      zhCN: 'F 58~67% / T 33~42%',
      zhTW: 'F 58~67% / T 33~42%',
      vi: 'F 58–67% / T 33–42%',
      id: 'F 58–67% / T 33–42%',
    }),
    description: T({
      ko: '사람과 감정을 중요하게 여기면서도, 완전히 감정에만 치우치지 않습니다. 관계를 소중히 여기되 논리적으로 말이 안 되는 것에는 의문을 제기할 수 있는 균형 잡힌 F입니다. 상대를 충분히 공감해주면서도 가끔 현실적인 조언도 자연스럽게 건넵니다.\n\n약한 F의 특징: 위로도 해주고 해결책도 챙겨주는 사람. 친구들이 힘들 때 제일 먼저 연락하는 그 사람.',
      en: 'You value people and feelings without being purely emotional. You cherish relationships yet can question what does not make sense—balanced F. You empathize deeply and sometimes offer grounded advice.\n\nMild F: comforts and brings solutions—the friend people text first when things get hard.',
      ja: '人と感情を大切にしつつ、感情だけに偏らない。関係を大事にしつつ、論理に合わない点は疑えるバランスの取れたF。十分に共感しつつ、時に現実的な助言も。\n\n弱めFの特徴：慰めも解決策も出せる。困ったとき最初に連絡される人。',
      zhCN: '重视人与情绪，但不会完全被情绪牵着走。珍惜关系，也能质疑不合理之处——平衡的F。充分共情，偶尔也会给出务实建议。\n\n偏弱F：既安慰也给解法，朋友难过时最先想到的人。',
      zhTW: '重視人與情緒，但不會完全被情緒牽著走。珍惜關係，也能質疑不合理之處——平衡的F。充分共情，偶爾也會給出務實建議。\n\n偏弱F：既安慰也給解法，朋友難過時最先想到的人。',
      vi: 'Bạn trân trọng con người và cảm xúc nhưng không chỉ theo cảm tính. Trân quan hệ nhưng vẫn thắc mắc khi không hợp lý—F cân bằng. Đồng cảm sâu và đôi khi cho lời khuyên thực tế.\n\nF nhẹ: vừa an ủi vừa có hướng xử lý—bạn mà mọi người nhắn khi khó.',
      id: 'Kamu menghargai orang dan perasaan tanpa murni emosional. Menjaga hubungan tapi bisa mempertanyakan yang tidak masuk akal—F seimbang. Berempati dan kadang memberi saran realistis.\n\nF ringan: menenangkan sekaligus punya solusi—teman yang dihubungi dulu saat sulit.',
    }),
    characteristics: T({
      ko: '의사결정: 감정·관계 우선+논리 검토. 강점: 공감+현실 감각. 약점: 감정 불편 시 결정 지연',
      en: 'Decisions: feelings/relationships first + logic check. Strengths: empathy + realism. Weakness: slower decisions when emotions feel off',
      ja: '意思決定：感情・関係優先＋論理チェック。強み：共感＋現実感。弱み：気持ちが引っかかると決断が遅れる',
      zhCN: '决策：情绪·关系优先+逻辑复核。优势：共情+现实感。劣势：心里别扭时决策变慢',
      zhTW: '決策：情緒·關係優先+邏輯覆核。優勢：共情+現實感。劣勢：心裡彆扭時決策變慢',
      vi: 'Quyết định: cảm xúc/quan hệ trước + kiểm logic. Điểm mạnh: đồng cảm + thực tế. Điểm yếu: quyết định chậm khi lòng không yên',
      id: 'Keputusan: emosi/relasi dulu + cek logika. Kekuatan: empati + realisme. Kelemahan: lambat memutuskan saat perasaan tidak nyaman',
    }),
    goodMatch: T({
      ko: '"논리적으로 맞는 말이라도 타이밍이 있습니다. 상대가 충분히 감정을 털어낸 뒤에 현실적인 이야기를 꺼내보세요"',
      en: '"Even true words need timing—let them vent first, then bring up reality."',
      ja: '「論理的に正しくてもタイミングがある。十分に感情を吐き出した後に現実の話を」',
      zhCN: '「再对的话也要看时机——等对方情绪宣泄后再谈现实。」',
      zhTW: '「再對的話也要看時機——等對方情緒宣洩後再談現實。」',
      vi: '"Dù đúng về mặt logic cũng cần thời điểm—để họ trút cảm xúc trước, rồi mới nói thực tế."',
      id: '"Walau benar secara logika, timing penting—biarkan mereka meluap dulu, baru bicara realita."',
    }),
    badMatch: T({
      ko: '교사, 사회복지사, 간호사, 코치, 이벤트 플래너',
      en: 'Teacher, social worker, nurse, coach, event planner',
      ja: '教師、ソーシャルワーカー、看護師、コーチ、イベントプランナー',
      zhCN: '教师、社工、护士、教练、活动策划',
      zhTW: '教師、社工、護理師、教練、活動企劃',
      vi: 'Giáo viên, nhân viên xã hội, y tá, huấn luyện viên, người lên kế hoạch sự kiện',
      id: 'Guru, pekerja sosial, perawat, pelatih, perencana acara',
    }),
    shareLine: T({
      ko: '나의 F지수는 {fPercent}% 🌤️ 약한 F형. 따뜻하지만 현실 감각도 있는 균형파 → 너는 몇 %야?',
      en: 'My F index is {fPercent}% 🌤️ Mild F—warm but grounded. What about you?',
      ja: '私のF指数は{fPercent}% 🌤️弱めF。温かいけど現実感もある。あなたは？',
      zhCN: '我的F指数是{fPercent}% 🌤️偏弱F，温暖又有现实感——你呢？',
      zhTW: '我的F指數是{fPercent}% 🌤️偏弱F，溫暖又有現實感——你呢？',
      vi: 'Chỉ số F {fPercent}% 🌤️ F nhẹ—ấm mà vẫn thực tế. Còn bạn?',
      id: 'Indeks F {fPercent}% 🌤️ F ringan—hangat tapi realistis. Kamu?',
    }),
  },
  {
    type: 'Type5',
    emoji: '💗',
    title: T({
      ko: '공감이 먼저인 사람, 강한 감정형',
      en: 'Empathy first — strong feeling type',
      ja: '共感が先の人・強めの感情型',
      zhCN: '共情优先，偏强感受型',
      zhTW: '共情優先，偏強感受型',
      vi: 'Đồng cảm trước — kiểu F mạnh',
      id: 'Empati dulu — tipe perasaan kuat',
    }),
    shortDescription: T({
      ko: '"당신은 분명한 감정형입니다. 사람의 감정이 논리보다 항상 먼저 느껴집니다."',
      en: '"You are clearly a feeling type—people\'s emotions hit you before logic."',
      ja: '「あなたは明確な感情型。人の感情が論理より常に先に来る」',
      zhCN: '「你明显是感受型——人的情绪总比逻辑先打动你。」',
      zhTW: '「你明顯是感受型——人的情緒總比邏輯先打動你。」',
      vi: '"Bạn rõ ràng là kiểu F—cảm xúc người khác đến trước logic."',
      id: '"Kamu jelas tipe perasaan—emosi orang lain datang sebelum logika."',
    }),
    indexBand: T({
      ko: 'F 75~83% / T 17~25%',
      en: 'F 75–83% / T 17–25%',
      ja: 'F 75〜83% / T 17〜25%',
      zhCN: 'F 75~83% / T 17~25%',
      zhTW: 'F 75~83% / T 17~25%',
      vi: 'F 75–83% / T 17–25%',
      id: 'F 75–83% / T 17–25%',
    }),
    description: T({
      ko: '상대의 감정 상태를 매우 빠르게 감지하고, 그에 맞게 반응하는 것이 자연스럽습니다. 논리적으로 맞는 말이어도 마음이 불편하면 그 결정을 다시 검토하게 됩니다. 관계를 소중히 여기고, 상대에게 상처 주는 것을 매우 싫어합니다. 이것은 약점이 아니라 강력한 공감 능력입니다.\n\n강한 F의 특징: 친구의 표정 변화로 기분을 먼저 알아채는 사람. 말하지 않아도 눈치채는 사람.\nT와의 갈등: T형에게 "왜 저렇게 차가워"라고 느끼는 순간이 자주 있음. T형은 지금 그냥 논리로 말하는 중.',
      en: 'You read others\' emotional states fast and respond naturally. Even logical choices feel wrong if your heart disagrees—you revisit the decision. You protect relationships and hate hurting people. That is powerful empathy, not weakness.\n\nStrong F: notices mood shifts from a friend\'s face; reads the room without words.\nFriction with T: you feel "why so cold?" while they are just thinking out loud.',
      ja: '相手の感情を素早く察知し、自然に合わせられる。論理的に正しくても心が引っかかれば見直す。関係を大切にし、傷つけるのを嫌う。それは弱さではなく強い共感力。\n\n強めF：表情の変化で気分を先読み。言わなくてもわかる。\nTとの摩擦：「なぜ冷たい」と感じやすいが、相手は論理で話しているだけ。',
      zhCN: '能很快察觉对方情绪并自然回应。即使逻辑上没错，心里不舒服也会重新考虑决定。重视关系，讨厌伤人——这是强大的共情力而非弱点。\n\n偏强F：能从表情读出心情，不必说出口也能察觉。\n与T的摩擦：常觉得「怎么这么冷」，而对方只是在讲逻辑。',
      zhTW: '能很快察覺對方情緒並自然回應。即使邏輯上沒錯，心裡不舒服也會重新考慮決定。重視關係，討厭傷人——這是強大的共情力而非弱點。\n\n偏強F：能從表情讀出心情，不必說出口也能察覺。\n與T的摩擦：常覺得「怎麼這麼冷」，而對方只是在講邏輯。',
      vi: 'Bạn đọc trạng thái cảm xúc nhanh và phản hồi tự nhiên. Dù hợp lý, nếy lòng không đồng ý bạn sẽ xem lại. Bạn trân trọng quan hệ và ghét làm tổn thương—đó là đồng cảm mạnh, không phải yếu.\n\nF mạnh: nhận ra tâm trạng qua biểu cảm; hiểu không cần nói.\nMa sát với T: bạn thấy "sao lạnh vậy" trong khi họ chỉ đang phân tích.',
      id: 'Kamu cepat membaca emosi dan merespons alami. Walau logis, jika hati tidak setuju kamu tinjau ulang. Kamu menjaga hubungan dan benci menyakiti—itu empati kuat, bukan kelemahan.\n\nF kuat: tahu suasana dari ekspresi; paham tanpa kata.\nGesekan dengan T: kamu merasa "kenapa dingin" sementara mereka hanya berpikir keras.',
    }),
    characteristics: T({
      ko: '의사결정: 감정·관계 중심, 강점: 공감·관계·감정 파악, 약점: 객관 판단 흐릴 수 있음',
      en: 'Decisions: feelings and relationships first. Strengths: empathy, bonding, reading emotions. Weakness: objectivity can blur',
      ja: '意思決定：感情・関係中心。強み：共感・関係・感情の読み取り。弱み：客観が曇りやすい',
      zhCN: '决策：以情绪与关系为中心。优势：共情、关系、读情绪。劣势：客观性可能变模糊',
      zhTW: '決策：以情緒與關係為中心。優勢：共情、關係、讀情緒。劣勢：客觀性可能變模糊',
      vi: 'Quyết định: cảm xúc và quan hệ trước. Điểm mạnh: đồng cảm, gắn kết, đọc cảm xúc. Điểm yếu: khách quan có thể mờ',
      id: 'Keputusan: emosi dan relasi dulu. Kekuatan: empati, ikatan, membaca emosi. Kelemahan: objektivitas bisa kabur',
    }),
    goodMatch: T({
      ko: '"T형 파트너에게 \'위로해줘\'라고 직접 말해보세요. T형은 당신이 무엇을 원하는지 명확하게 말해줄 때 가장 잘 반응합니다"',
      en: '"Tell a T partner clearly: \'I need comfort.\' Ts respond best when your need is explicit."',
      ja: '「T型パートナーに『慰めて』と直接言って。Tは欲しいものがはっきりしているとき一番反応する」',
      zhCN: '「对T型伴侣直接说『我需要安慰』。当你说清楚需要什么时，T型最能回应。」',
      zhTW: '「對T型伴侶直接說『我需要安慰』。當你說清楚需要什麼時，T型最能回應。」',
      vi: '"Nói rõ với người yêu kiểu T: \'An ủi tôi đi.\' Họ phản hồi tốt nhất khi bạn nói rõ nhu cầu."',
      id: '"Katakan ke pasangan T: \'Tenangkan aku.\' Mereka merespons terbaik saat kebutuhanmu jelas."',
    }),
    badMatch: T({
      ko: '상담사, 사회복지사, 작가, 아동 교육자, 심리치료사',
      en: 'Counselor, social worker, writer, child educator, therapist',
      ja: 'カウンセラー、ソーシャルワーカー、作家、子ども教育者、セラピスト',
      zhCN: '咨询师、社工、作家、儿童教育者、治疗师',
      zhTW: '諮商師、社工、作家、兒童教育者、治療師',
      vi: 'Tư vấn, nhân viên xã hội, nhà văn, giáo dục trẻ em, trị liệu',
      id: 'Konselor, pekerja sosial, penulis, pendidik anak, terapis',
    }),
    shareLine: T({
      ko: '나의 F지수는 {fPercent}% 💗 강한 F형. 감정이 논리보다 먼저인 사람 → 커플이랑 같이 해봐 차이 실화임 ㅋㅋ',
      en: 'My F index is {fPercent}% 💗 Strong F—feelings beat logic. Try with your partner—the gap is real 😄',
      ja: '私のF指数は{fPercent}% 💗強めF。感情が先。カップルでやってみて差がリアル',
      zhCN: '我的F指数是{fPercent}% 💗偏强F，情绪总比逻辑先——和对象一起测，差距很真实',
      zhTW: '我的F指數是{fPercent}% 💗偏強F，情緒總比邏輯先——和對象一起測，差距很真實',
      vi: 'Chỉ số F {fPercent}% 💗 F mạnh—cảm xúc trước logic. Thử với người yêu—chênh lệch là thật',
      id: 'Indeks F {fPercent}% 💗 F kuat—emosi dulu baru logika. Coba sama pasangan—bedanya nyata',
    }),
  },
  {
    type: 'Type6',
    emoji: '🌊',
    title: T({
      ko: '감정이 곧 나인, 진성 감정형',
      en: 'Feeling is me — pure feeling type',
      ja: '感情がそのまま自分・純度の高い感情型',
      zhCN: '情绪即自我，典型感受型',
      zhTW: '情緒即自我，典型感受型',
      vi: 'Cảm xúc là chính bạn — kiểu F thuần',
      id: 'Perasaan adalah dirimu — tipe F murni',
    }),
    shortDescription: T({
      ko: '"당신은 거의 완전한 감정형입니다. 논리보다 사람이 항상 먼저입니다."',
      en: '"You are almost fully a feeling type—people always come before logic."',
      ja: '「あなたはほぼ完全な感情型。論理より人が常に先」',
      zhCN: '「你几乎是典型的感受型——人总比逻辑优先。」',
      zhTW: '「你幾乎是典型的感受型——人總比邏輯優先。」',
      vi: '"Bạn gần như hoàn toàn kiểu F—con người luôn trước logic."',
      id: '"Kamu hampir sepenuhnya tipe perasaan—orang selalu sebelum logika."',
    }),
    indexBand: T({
      ko: 'F 92~100% / T 0~8%',
      en: 'F 92–100% / T 0–8%',
      ja: 'F 92〜100% / T 0〜8%',
      zhCN: 'F 92~100% / T 0~8%',
      zhTW: 'F 92~100% / T 0~8%',
      vi: 'F 92–100% / T 0–8%',
      id: 'F 92–100% / T 0–8%',
    }),
    description: T({
      ko: '세상을 사람과 감정의 렌즈로 봅니다. 논리적으로 완벽한 결론이어도 누군가가 상처받는다면 그 결론은 틀렸다고 느낍니다. 상대의 감정을 놀라울 정도로 빠르게 감지하고, 그 감정에 진심으로 반응합니다. 이것은 나약함이 아니라 세상에서 가장 귀한 능력 중 하나입니다. 다만 논리가 무시당하는 느낌이 들어도 조금만 귀 기울여 보세요.\n\n진성 F의 특징: 드라마 보다가 진짜로 우는 사람. 친구가 슬프면 같이 슬퍼지는 사람. 모르는 강아지도 안타까운 사람.\nT와의 갈등: T형이 팩트로 말할 때 공격받는 느낌이 드는 경우가 있음. T형은 지금 당신을 비판하는 게 아니라 문제를 분석 중임.',
      en: 'You see the world through people and feelings. Even a perfect logical conclusion feels wrong if someone gets hurt. You sense emotions with striking speed and respond with your whole heart. That is not weakness—it is a rare gift. When logic feels dismissed, try listening a little anyway.\n\nPure F: cries at dramas; hurts when friends hurt; aches for a stray dog.\nFriction with T: facts can feel like attacks—they are often just analyzing, not judging you.',
      ja: '世界を人と感情のレンズで見る。論理的に正しくても誰かが傷つくなら結論は違うと感じる。感情を驚くほど早く察し、真心で反応する。それは弱さではなく希少な才能。論理が無視された気分でも少し耳を傾けて。\n\n純Fの特徴：ドラマで本気で泣く。友がしんどいと一緒にしんどい。知らない犬も気の毒。\nTとの摩擦：事実で話すと攻撃に感じることがあるが、相手は分析中で非難ではない。',
      zhCN: '用「人与情绪」的滤镜看世界。即使逻辑完美，若有人受伤你也会觉得结论不对。你极快感知情绪并真心回应。这不是软弱，而是珍贵的能力。若觉得逻辑被忽视，也试着稍微听听。\n\n典型F：看剧真哭；朋友难过你也难过；陌生小狗也心疼。\n与T的摩擦：讲事实时像被攻击——对方多半在分析问题，不是在否定你。',
      zhTW: '用「人與情緒」的濾鏡看世界。即使邏輯完美，若有人受傷你也會覺得結論不對。你極快感知情緒並真心回應。這不是軟弱，而是珍貴的能力。若覺得邏輯被忽視，也試著稍微聽聽。\n\n典型F：看劇真哭；朋友難過你也難過；陌生小狗也心疼。\n與T的摩擦：講事實時像被攻擊——對方多半在分析問題，不是在否定你。',
      vi: 'Bạn nhìn thế giới qua con người và cảm xúc. Dù kết luận hợp lý, nếu ai đó tổn thương bạn vẫn thấy sai. Bạn cảm nhận cảm xúc rất nhanh và phản hồi bằng cả trái tim. Đó là món quà hiếm, không phải yếu đuối. Khi cảm thấy lý bị bỏ qua, hãy thử lắng nghe thêm một chút.\n\nF thuần: khóc xem phim; buồn khi bạn buồn; thương cả chó lạ.\nMa sát với T: sự thật có thể như tấn công—họ thường chỉ đang phân tích.',
      id: 'Kamu melihat dunia lewat orang dan perasaan. Walau kesimpulan logis sempurna, jika ada yang terluka kamu merasa salah. Kamu menangkap emosi sangat cepat dan merespons tulus. Itu anugerah langka, bukan kelemahan. Saat logika terasa diabaikan, coba dengarkan sedikit.\n\nF murni: menangis nonton drama; ikut sedih saat teman sedih; iba ke anjing tak dikenal.\nGesekan dengan T: fakta bisa terasa seperti serangan—mereka sering hanya menganalisis.',
    }),
    characteristics: T({
      ko: '의사결정: 감정 우선. 강점: 공감·인간 이해·관계 온도. 약점: 객관 흐림·타인 감정에 소진',
      en: 'Decisions: feelings first. Strengths: empathy, human insight, relational warmth. Weakness: objectivity blurs; risk of burnout from others\' emotions',
      ja: '意思決定：感情最優先。強み：共感・人間理解・関係の温度。弱み：客観が曇る・他者の感情で消耗',
      zhCN: '决策：情绪优先。优势：共情、理解人、关系温度。劣势：客观模糊、易被他人情绪消耗',
      zhTW: '決策：情緒優先。優勢：共情、理解人、關係溫度。劣勢：客觀模糊、易被他人情緒消耗',
      vi: 'Quyết định: cảm xúc trước. Điểm mạnh: đồng cảm, hiểu người, độ ấm quan hệ. Điểm yếu: khách quan mờ; kiệt sức vì cảm xúc người khác',
      id: 'Keputusan: emosi dulu. Kekuatan: empati, memahami manusia, kehangatan relasi. Kelemahan: objektivitas kabur; habis karena emosi orang lain',
    }),
    goodMatch: T({
      ko: '"감정이 격해질 때는 잠깐 멈추고 \'이 상황을 T형 친구라면 어떻게 볼까\'라고 생각해보세요. 관점이 달라집니다"',
      en: '"When emotions spike, pause and ask: \'How would a T friend see this?\' The angle shifts."',
      ja: '「感情が荒れたら一度止まって『T型の友ならどう見る？』と考えてみて。視点が変わる」',
      zhCN: '「情绪激烈时先停一下，想『如果是T型朋友会怎么看？』视角会不同。」',
      zhTW: '「情緒激烈時先停一下，想『如果是T型朋友會怎麼看？』視角會不同。」',
      vi: '"Khi cảm xúc dâng cao, dừng lại và hỏi: \'Bạn kiểu T sẽ nhìn thế này ra sao?\' Góc nhìn sẽ đổi."',
      id: '"Saat emosi memuncak, berhenti sejenak dan tanya: \'Teman tipe T akan melihat ini bagaimana?\' Sudut pandang berubah."',
    }),
    badMatch: T({
      ko: '시인, 소설가, 예술치료사, 동물 보호 활동가, 호스피스 간호사',
      en: 'Poet, novelist, art therapist, animal advocate, hospice nurse',
      ja: '詩人、小説家、アートセラピスト、動物保護、ホスピス看護師',
      zhCN: '诗人、小说家、艺术治疗师、动物保护、安宁疗护护士',
      zhTW: '詩人、小說家、藝術治療師、動物保護、安寧療護護理師',
      vi: 'Nhà thơ, tiểu thuyết gia, trị liệu nghệ thuật, bảo vệ động vật, điều dưỡng hospice',
      id: 'Penyair, novelis, terapis seni, aktivis hewan, perawat hospice',
    }),
    shareLine: T({
      ko: '나의 F지수는 {fPercent}% 🌊 진성 F. 드라마 보다가 진짜로 우는 사람 확정 ㅋㅋ → 커플/친구랑 같이 해봐',
      en: 'My F index is {fPercent}% 🌊 Pure F—I actually cry at dramas 😄 Try with your partner or friends',
      ja: '私のF指数は{fPercent}% 🌊純F。ドラマで本気で泣く人確定。カップル/友とやってみて',
      zhCN: '我的F指数是{fPercent}% 🌊典型F，看剧真哭认证——和对象或朋友一起测',
      zhTW: '我的F指數是{fPercent}% 🌊典型F，看劇真哭認證——和對象或朋友一起測',
      vi: 'Chỉ số F {fPercent}% 🌊 F thuần—khóc xem phim là thật. Thử với người yêu/bạn',
      id: 'Indeks F {fPercent}% 🌊 F murni—nangis nonton drama beneran. Coba sama pasangan/teman',
    }),
  },
];
