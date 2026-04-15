/** 연애할 때 내가 무너지는 순간 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36, 6유형. 7개 언어. */

function M(
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

function opt(
  score: number,
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
) {
  return { score, text: M(ko, en, ja, zhCN, zhTW, vi, id) };
}

export interface Phase3LoveWeaknessMomentQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3LoveWeaknessMomentResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  typeLabel: Record<string, string>;
  collapseMoment: Record<string, string>;
  fatalWeakness: Record<string, string>;
  dangerSignal: Record<string, string>;
  effectiveLine: Record<string, string>;
  prescription: Record<string, string>;
  goodMatch: Record<string, string>;
  vulnerableTo: Record<string, string>;
  shareTypeName: Record<string, string>;
}

export function calculatePhase3LoveWeaknessMomentResult(scores: number[]): string {
  const total = scores.reduce((a, b) => a + (b ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3LoveWeaknessMomentQuestions: Phase3LoveWeaknessMomentQuestion[] = [
  {
    id: 1,
    question: M(
      '좋아하는 사람이 갑자기 평소보다 다정하게 대해줄 때 나는?',
      'When someone you like is suddenly kinder than usual, you—',
      '好きな人がいつもより急に優しくしてくれたら、あなたは？',
      '喜欢的人突然比平时更温柔地对待你时，你会？',
      '喜歡的人突然比平時更溫柔地對待你時，你會？',
      'Khi người bạn thích đột nhiên dịu dàng hơn mọi khi, bạn—',
      'Saat orang yang kamu sukai tiba-tiba lebih lembut dari biasanya, kamu—'
    ),
    options: [
      opt(
        0,
        '심장이 내려앉는다. 그 한 번의 다정함으로 며칠을 버틴다',
        'Your heart drops. That one moment of kindness carries you for days.',
        'ドキッとして、その一度の優しさで何日も持ちこたえる。',
        '心里一沉，凭着那一次的温柔能撑好几天。',
        '心裡一沉，憑著那一次溫柔能撐好幾天。',
        'Tim như tụt xuống. Một lần dịu dàng ấy kéo bạn qua cả ngày.',
        'Hatimu tenggelam. Kebaikan sekali itu menyanggamu berhari-hari.'
      ),
      opt(
        1,
        '괜히 들뜨고 기분이 좋아져서 그날 모든 게 잘 풀리는 느낌이다',
        'You light up; the whole day suddenly feels easy.',
        'テンションが上がって、その日は全部うまくいく気がする。',
        '莫名开心，觉得那天事事顺心。',
        '莫名開心，覺得那天事事順心。',
        'Bạn bừng lên; cả ngày như suôn sẻ hơn.',
        'Kamu ceria; sepanjang hari terasa lancar.'
      ),
      opt(
        2,
        '순간적으로 마음이 열리며 평소보다 훨씬 솔직해진다',
        'Your guard drops and you get much more honest than usual.',
        '一瞬で心が開いて、いつもよりずっと素直になる。',
        '心防瞬间打开，比平时坦诚得多。',
        '心防瞬間打開，比平時坦誠得多。',
        'Lớp phòng thủ hạ xuống; bạn thành thật hơn thường lệ.',
        'Bentengmu runtuh; kamu jauh lebih jujur dari biasanya.'
      ),
      opt(
        3,
        '갑자기 이 사람에 대해 더 알고 싶고 가까워지고 싶어진다',
        'You suddenly want to know them more and get closer.',
        '急にもっと知りたくなって、距離を縮めたくなる。',
        '突然想更了解对方、拉近距离。',
        '突然想更了解對方、拉近距離。',
        'Bạn đột nhiên muốn hiểu họ hơn và xích lại gần.',
        'Tiba-tiba ingin mengenal lebih dalam dan mendekat.'
      ),
    ],
  },
  {
    id: 2,
    question: M(
      '연인이 나보다 다른 사람을 더 챙기거나 신경 쓰는 것 같을 때?',
      'When your partner seems to care more about someone else than you?',
      '恋人が自分より他人を気にかけているように感じたら？',
      '恋人似乎比你更关心别人时？',
      '戀人似乎比你更關心別人時？',
      'Khi người yêu có vẻ quan tâm người khác hơn bạn?',
      'Saat pasanganmu tampak lebih peduli pada orang lain daripada kamu?'
    ),
    options: [
      opt(
        0,
        '서운하지만 참는다. 속이 끓어도 아무렇지 않은 척한다',
        'It stings, but you hold it in and act fine.',
        'モヤモヤするけど我慢。内側は煮えても平気なふり。',
        '委屈但忍着，心里翻江倒海也装作没事。',
        '委屈但忍著，心裡翻江倒海也裝作沒事。',
        'Buồn nhưng nhịn; trong lòng sôi lên vẫn giả vờ ổn.',
        'Sakit tapi menahan; panas di dalam tetap pura-pura baik-baik saja.'
      ),
      opt(
        1,
        '감정이 바로 표정이나 태도에 드러난다. 숨기질 못한다',
        'It shows on your face and tone—you can’t hide it.',
        '表情や態度にすぐ出る。隠せない。',
        '情绪和表情藏不住。',
        '情緒和表情藏不住。',
        'Lộ ngay trên mặt và thái độ—không giấu được.',
        'Terlihat di wajah dan sikap—sulit disembunyikan.'
      ),
      opt(
        2,
        '갑자기 나도 거리를 두고 싶어지거나 차갑게 대하게 된다',
        'You suddenly want distance or go cold.',
        '急に距離を置きたくなる。冷たくしてしまう。',
        '突然想拉开距离或变冷淡。',
        '突然想拉開距離或變冷淡。',
        'Bạn đột nhiên muốn giữ khoảng cách atau lạnh nhạt.',
        'Tiba-tiba ingin menjauh atau bersikap dingin.'
      ),
      opt(
        3,
        '머릿속에서 최악의 상황을 상상하기 시작한다',
        'Your mind spirals into worst-case scenarios.',
        '頭の中で最悪のシナリオを想像し始める。',
        '开始在脑中想象最坏情况。',
        '開始在腦中想像最壞情況。',
        'Đầu óc bắt đầu tưởng tượng kịch bản tệ nhất.',
        'Pikiranmu mulai membayangkan skenario terburuk.'
      ),
    ],
  },
  {
    id: 3,
    question: M(
      '연인이 "나 오늘 너 보고 싶었어"라고 말할 때?',
      'When your partner says, “I missed you today”?',
      '恋人に「今日会いたかった」と言われたら？',
      '恋人说「我今天想你了」时？',
      '戀人說「我今天想你了」時？',
      'Khi người yêu nói “Hôm nay anh/chị nhớ em”?',
      'Saat pasangan bilang, “Aku kangen kamu hari ini”?'
    ),
    options: [
      opt(
        0,
        '그 말이 하루 종일 머릿속에서 재생된다',
        'That line replays in your head all day.',
        'その言葉が一日中頭の中でリピートされる。',
        '那句话在脑子里循环一整天。',
        '那句話在腦子裡循環一整天。',
        'Câu đó lặp lại trong đầu cả ngày.',
        'Kalimat itu muter di kepala seharian.'
      ),
      opt(
        1,
        '얼굴이 빨개지거나 웃음을 참지 못한다',
        'You blush or can’t stop smiling.',
        '顔が赤くなる。笑いが止まらない。',
        '脸红或忍不住笑。',
        '臉紅或忍不住笑。',
        'Bạn đỏ mặt hoặc không nhịn được cười.',
        'Wajahmu merah atau tak bisa menahan senyum.'
      ),
      opt(
        2,
        '갑자기 하고 싶었던 말을 다 꺼내게 된다',
        'Everything you wanted to say spills out.',
        '言いたかったことが一気に溢れ出す。',
        '想说的话一下子全倒出来。',
        '想說的話一下子全倒出來。',
        'Mọi điều muốn nói tuôn ra hết.',
        'Semua yang ingin kamu katakan tumpah keluar.'
      ),
      opt(
        3,
        '이 사람이 진심인지 더 확인하고 싶어진다',
        'You want to check if they really mean it.',
        '本気かどうか、もっと確かめたくなる。',
        '想进一步确认是不是真心。',
        '想進一步確認是不是真心。',
        'Bạn muốn kiểm tra xem họ có thật lòng không.',
        'Kamu ingin memastikan apakah mereka sungguh-sungguh.'
      ),
    ],
  },
  {
    id: 4,
    question: M(
      '좋아하는 사람이 나한테만 유독 다른 것 같다는 느낌이 들 때?',
      'When you feel they treat you differently from everyone else?',
      '好きな人が自分にだけ特別な気がするとき？',
      '觉得喜欢的人只对你特别时？',
      '覺得喜歡的人只對你特別時？',
      'Khi bạn cảm thấy họ đối xử đặc biệt chỉ với mình?',
      'Saat kamu merasa mereka bersikap istimewa hanya padamu?'
    ),
    options: [
      opt(
        0,
        '그 느낌 하나로 관계 전체를 긍정적으로 해석하기 시작한다',
        'That one feeling makes you read the whole bond in a rosy light.',
        'その感覚だけで関係全体をポジティブに解釈し始める。',
        '单凭那种感觉就把整段关系往好处想。',
        '单凭那種感覺就把整段關係往好處想。',
        'Chỉ một cảm giác đó khiến bạn lý giải cả mối quan hệ theo hướng tích cực.',
        'Perasaan itu saja membuatmu menafsirkan seluruh hubungan secara positif.'
      ),
      opt(
        1,
        '설레서 혼자 계속 생각하게 되고 집중이 안 된다',
        'You keep thinking about it and can’t focus.',
        'ドキドキが止まらず、一人で考え続けて集中できない。',
        '一直心动走神，无法专注。',
        '一直心動走神，無法專注。',
        'Bạn cứ nghĩ mãi, không tập trung được.',
        'Kamu terus memikirkannya dan sulit fokus.'
      ),
      opt(
        2,
        '이 감정이 맞는지 확인하고 싶어서 먼저 다가가게 된다',
        'You move closer first to see if the feeling is real.',
        'この感情が本物か確かめたくて、先に距離を縮める。',
        '想确认这份感觉，先主动靠近。',
        '想確認這份感覺，先主動靠近。',
        'Bạn chủ động lại gần để xem cảm giác có thật không.',
        'Kamu mendekat dulu untuk memastikan perasaan itu nyata.'
      ),
      opt(
        3,
        '진짜인지 아닌지 계속 증거를 찾게 된다',
        'You keep hunting for proof either way.',
        '本物かどうか、証拠を探し続ける。',
        '不断找证据验证真假。',
        '不斷找證據驗證真假。',
        'Bạn cố tìm bằng chứng xem thật hay không.',
        'Kamu terus mencari bukti apakah itu nyata.'
      ),
    ],
  },
  {
    id: 5,
    question: M(
      '싸운 후 연인이 먼저 연락해서 "미안해"라고 할 때?',
      'After a fight, they text first and say “sorry”?',
      '喧嘩のあと、恋人から先に連絡が来て「ごめん」と言われたら？',
      '吵架后恋人先联系说「对不起」时？',
      '吵架後戀人先聯絡說「對不起」時？',
      'Sau cãi nhau, người yêu nhắn trước và nói xin lỗi?',
      'Setelah bertengkar, pasangan chat duluan dan bilang maaf?'
    ),
    options: [
      opt(
        0,
        '화가 다 풀리지 않았어도 그 한마디에 마음이 녹는다',
        'Even if you’re still mad, that one line melts you.',
        'まだ怒りが残ってても、その一言で心が溶ける。',
        '气还没消，那句话也能让你心软。',
        '氣還沒消，那句話也能讓你心軟。',
        'Dù vẫn giận, một câu đó cũng làm bạn mềm lòng.',
        'Meski masih marah, satu kalimat itu meluluhkanmu.'
      ),
      opt(
        1,
        '바로 "나도 미안해"가 나온다. 화해하고 싶은 마음이 앞선다',
        '“I’m sorry too” slips out—you want peace first.',
        'すぐ「私もごめん」が出る。仲直りしたい気持ちが勝つ。',
        '立刻脱口而出「我也不对」，想先和好。',
        '立刻脫口而出「我也不對」，想先和好。',
        '“Em cũng xin lỗi” tuôn ra—bạn muốn làm hòa trước.',
        '“Aku juga minta maaf” keluar—kamu ingin berdamai dulu.'
      ),
      opt(
        2,
        '하고 싶었던 말을 다 쏟아내게 된다. 참았던 게 한꺼번에 나온다',
        'Everything bottled up pours out at once.',
        '溜めていたことが一気に出る。言いたかったことを全部。',
        '憋在心里的话一次性全说出来。',
        '憋在心裡的話一次性全說出來。',
        'Mọi thứ dồn nén tuôn ra một lúc.',
        'Semua yang tertahan tumpah sekaligus.'
      ),
      opt(
        3,
        '진심인지 아닌지를 확인하고 싶어서 바로 받아들이지 못한다',
        'You can’t accept it yet—you need to know if it’s sincere.',
        '本気かどうか確かめたくて、すぐには受け入れられない。',
        '想确认是否真心，没法立刻接受。',
        '想確認是否真心，沒法立刻接受。',
        'Bạn chưa thể nhận—cần biết có chân thành không.',
        'Kamu belum bisa menerima—perlu tahu apakah tulus.'
      ),
    ],
  },
  {
    id: 6,
    question: M(
      '연인이 내 사소한 것을 기억하고 챙겨줄 때?',
      'When your partner remembers and cares about small details about you?',
      '恋人が自分のささいなことを覚えていて気づいてくれたら？',
      '恋人记得并照顾你的小事时？',
      '戀人記得並照顧你的小事時？',
      'Khi người yêu nhớ và quan tâm những chi tiết nhỏ về bạn?',
      'Saat pasangan mengingat dan peduli hal-hal kecil tentangmu?'
    ),
    options: [
      opt(
        0,
        '이 사람 곁에서 평생 있어도 되겠다는 생각이 스친다',
        'A flash of “I could stay with them forever.”',
        '「この人とならずっといてもいいかも」と一瞬思う。',
        '闪过「和这个人过一辈子也可以」。',
        '閃過「和這個人過一輩子也可以」。',
        'Thoáng nghĩ “Có thể ở bên họ mãi.”',
        'Sekilas berpikir “Bisa bersamanya selamanya.”'
      ),
      opt(
        1,
        '너무 기뻐서 티가 다 나고 과하게 좋아한다',
        'You’re so happy it shows—maybe too much.',
        '嬉しさが全面に出る。ちょっと盛りすぎるくらい。',
        '开心全写在脸上，甚至有点夸张。',
        '開心全寫在臉上，甚至有點誇張。',
        'Vui quá lộ ra hết, có khi hơi quá.',
        'Senangnya kelihatan banget, mungkin kelewatan.'
      ),
      opt(
        2,
        '나도 뭔가 해주고 싶어서 바로 행동으로 옮기게 된다',
        'You immediately want to do something back.',
        'お返ししたくて、すぐ行動に移す。',
        '立刻想回馈、付诸行动。',
        '立刻想回饋、付諸行動。',
        'Bạn muốn làm gì đó đáp lại ngay.',
        'Kamu ingin membalas dengan tindakan segera.'
      ),
      opt(
        3,
        '이 사람이 나를 진짜로 좋아하는 게 맞구나, 하고 안심이 된다',
        'You feel reassured—they really like you.',
        '本当に好かれているんだと安心する。',
        '心里踏实：对方是真的喜欢你。',
        '心裡踏實：對方是真的喜歡你。',
        'Bạn thấy an tâm—họ thật sự thích mình.',
        'Kamu merasa tenang—mereka benar-benar menyukaimu.'
      ),
    ],
  },
  {
    id: 7,
    question: M(
      '연인이 힘들다고 털어놓을 때 나는?',
      'When your partner opens up that they’re struggling, you—',
      '恋人が「つらい」と打ち明けてきたら、あなたは？',
      '恋人说「我很累」向你倾诉时，你会？',
      '戀人說「我很累」向你傾訴時，你會？',
      'Khi người yêu chia sẻ họ đang khó khăn, bạn—',
      'Saat pasangan membuka diri bahwa mereka sedang berat, kamu—'
    ),
    options: [
      opt(
        0,
        '내 감정은 잠시 내려두고 완전히 상대 중심이 된다',
        'You set your feelings aside and focus fully on them.',
        '自分の感情は一旦脇に置いて、完全に相手中心になる。',
        '先放下自己的情绪，完全以对方为中心。',
        '先放下自己的情緒，完全以對方為中心。',
        'Bạn gác cảm xúc mình, tập trung hoàn toàn vào họ.',
        'Kamu menyingkirkan perasaanmu dan fokus sepenuhnya pada mereka.'
      ),
      opt(
        1,
        '같이 힘들어지고 내가 다 해결해주고 싶다는 마음이 든다',
        'You hurt with them and want to fix everything.',
        '一緒につらくなって、全部解決してあげたくなる。',
        '跟着难受，想替对方扛下一切。',
        '跟著難受，想替對方扛下一切。',
        'Bạn buồn theo và muốn gánh hết giúp họ.',
        'Kamu ikut terluka dan ingin menyelesaikan semuanya untuk mereka.'
      ),
      opt(
        2,
        '당장 뭔가 해주고 싶어서 실질적인 도움을 찾게 된다',
        'You look for concrete ways to help right away.',
        'すぐ何かしたくて、具体的な助けを探す。',
        '立刻想找实际办法帮忙。',
        '立刻想找實際辦法幫忙。',
        'Bạn tìm cách giúp cụ thể ngay.',
        'Kamu mencari bantuan konkret segera.'
      ),
      opt(
        3,
        '이 사람이 나를 믿고 말해줬다는 사실에 더 깊이 연결된 느낌이 든다',
        'Trusting you enough to share makes you feel closer.',
        '信じて話してくれたことが、より深くつながった感覚になる。',
        '对方愿意信任你说出来，让你感觉更紧密。',
        '對方願意信任你說出來，讓你感覺更緊密。',
        'Họ tin bạn đủ để kể—bạn cảm thấy gắn kết hơn.',
        'Mereka percaya padamu untuk berbagi—kamu merasa lebih dekat.'
      ),
    ],
  },
  {
    id: 8,
    question: M(
      '연인이 나 없이 잘 지내는 것 같을 때?',
      'When your partner seems fine without you?',
      '恋人が自分なしでも元気に過ごしていそうに見えたら？',
      '恋人没有你好像也过得很好时？',
      '戀人沒有你也好像過得很好時？',
      'Khi người yêu có vẻ ổn dù không có bạn?',
      'Saat pasangan tampak baik-baik saja tanpamu?'
    ),
    options: [
      opt(
        0,
        '나는 없어도 되는 존재인가 하는 생각이 든다',
        'You wonder if you’re disposable.',
        '「自分はいなくてもいい存在なのか」と思う。',
        '会想「我是不是可有可无」。',
        '會想「我是不是可有可無」。',
        'Bạn tự hỏi mình có phải người thừa không.',
        'Kamu bertanya-tanya apakah dirimu tidak penting.'
      ),
      opt(
        1,
        '괜히 심술이 나거나 나도 바쁜 척하고 싶어진다',
        'You get petty or want to seem busy too.',
        'わざと拗ねたくなる。自分も忙しいフリをしたくなる。',
        '莫名闹别扭，或也想装忙。',
        '莫名鬧彆扭，或也想裝忙。',
        'Bạn hờn dỗi hoặc muốn tỏ ra bận.',
        'Kamu jadi kesal atau ingin terlihat sibuk juga.'
      ),
      opt(
        2,
        '나도 나만의 시간을 보내면 되는데 왠지 배신감이 든다',
        'Even though you could enjoy alone time, it feels like betrayal.',
        '一人の時間があってもいいはずなのに、なぜか裏切られた気持ちになる。',
        '明明可以自己过，却莫名觉得被背叛。',
        '明明可以自己過，卻莫名覺得被背叛。',
        'Dù có thể ở một mình, vẫn thấy như bị phản bội.',
        'Meski bisa sendiri, rasanya seperti dikhianati.'
      ),
      opt(
        3,
        '혹시 나를 덜 좋아하게 된 건 아닌지 불안해진다',
        'You worry they like you less.',
        '好きじゃなくなったんじゃないかと不安になる。',
        '担心对方是不是没那么喜欢你了。',
        '擔心對方是不是沒那麼喜歡你了。',
        'Bạn lo họ không còn thích mình như trước.',
        'Kamu khawatir mereka tidak menyukaimu sebanyak dulu.'
      ),
    ],
  },
  {
    id: 9,
    question: M(
      '좋아하는 사람이 나한테 처음으로 속마음을 털어놓을 때?',
      'When someone you like opens up to you for the first time?',
      '好きな人が初めて本音を打ち明けてくれたら？',
      '喜欢的人第一次对你敞开心扉时？',
      '喜歡的人第一次對你敞開心扉時？',
      'Khi người bạn thích lần đầu mở lòng với bạn?',
      'Saat orang yang kamu sukai pertama kali terbuka padamu?'
    ),
    options: [
      opt(
        0,
        '이 사람에 대한 마음이 갑자기 몇 배로 커지는 것을 느낀다',
        'Your feelings for them suddenly multiply.',
        'その人への気持ちが急に何倍にも膨らむのを感じる。',
        '感觉对对方的感情一下子放大好几倍。',
        '感覺對對方的感情一下子放大好幾倍。',
        'Cảm xúc với họ đột nhiên nhân lên.',
        'Perasaanmu pada mereka tiba-tiba membesar berkali-kali.'
      ),
      opt(
        1,
        '나도 솔직해지고 싶어져서 내 이야기도 꺼내게 된다',
        'You want to be honest back and share your story.',
        '自分も素直になりたくなって、話も引き出す。',
        '也想坦诚，把自己的事说出来。',
        '也想坦誠，把自己的事說出來。',
        'Bạn cũng muốn thành thật và kể về mình.',
        'Kamu ingin jujur balik dan berbagi ceritamu.'
      ),
      opt(
        2,
        '이 사람을 지켜주고 싶다는 강한 보호 본능이 생긴다',
        'A strong urge to protect them kicks in.',
        '守ってあげたいという強い保護本能が湧く。',
        '强烈想保护对方。',
        '強烈想保護對方。',
        'Bản năng bảo vệ họ mạnh mẽ trỗi dậy.',
        'Keinginan kuat untuk melindungi mereka muncul.'
      ),
      opt(
        3,
        '나를 이만큼 신뢰해준다는 사실에 관계를 더 진지하게 생각하게 된다',
        'Their trust makes you take the bond more seriously.',
        'ここまで信頼してくれたことが、関係をより真剣に考えさせる。',
        '这份信任让你更认真对待关系。',
        '這份信任讓你更認真對待關係。',
        'Lòng tin ấy khiến bạn nghiêm túc hơn với mối quan hệ.',
        'Kepercayaan itu membuatmu lebih serius pada hubungan.'
      ),
    ],
  },
  {
    id: 10,
    question: M(
      '연인과 눈이 마주쳐서 둘 다 웃게 되는 순간?',
      'That moment you lock eyes with your partner and both smile?',
      '恋人と目が合って、二人とも笑ってしまう瞬間？',
      '和恋人对视、两人一起笑出来的瞬间？',
      '和戀人對視、兩人一起笑出來的瞬間？',
      'Khoảnh khắc nhìn nhau và cùng cười với người yêu?',
      'Saat tatapan bertemu dan kalian berdua tersenyum?'
    ),
    options: [
      opt(
        0,
        '그 순간이 너무 좋아서 오래 기억하고 싶다는 생각이 든다',
        'You want to remember that second forever.',
        'その瞬間が好きすぎて、ずっと覚えていたいと思う。',
        '太喜欢那一刻，想永远记住。',
        '太喜歡那一刻，想永遠記住。',
        'Bạn muốn ghi nhớ khoảnh khắc đó mãi.',
        'Kamu ingin mengingat momen itu selamanya.'
      ),
      opt(
        1,
        '가슴이 두근거리고 얼굴이 달아오른다',
        'Your heart races; your face heats up.',
        'ドキドキして顔が熱くなる。',
        '心跳加速，脸发烫。',
        '心跳加速，臉發燙。',
        'Tim đập nhanh; mặt nóng lên.',
        'Jantung berdebar; wajah memanas.'
      ),
      opt(
        2,
        '갑자기 더 가까이 있고 싶어진다',
        'You suddenly want to be even closer.',
        '急にもっと近くにいたくなる。',
        '突然想离得更近。',
        '突然想離得更近。',
        'Bạn đột nhiên muốn gần hơn.',
        'Tiba-tiba ingin lebih dekat.'
      ),
      opt(
        3,
        '이 사람이 나를 좋아하는 게 맞구나 하는 확신이 든다',
        'You feel sure they really like you.',
        'この人は本当に好きでいてくれるんだと確信する。',
        '确信对方是真的喜欢你。',
        '確信對方是真的喜歡你。',
        'Bạn chắc chắn họ thật sự thích mình.',
        'Kamu yakin mereka benar-benar menyukaimu.'
      ),
    ],
  },
  {
    id: 11,
    question: M(
      '연인이 "너는 나한테 특별해"라고 말할 때?',
      'When your partner says, “You’re special to me”?',
      '恋人に「君は特別」と言われたら？',
      '恋人说「你对我很特别」时？',
      '戀人說「你對我很特別」時？',
      'Khi người yêu nói “Em là người đặc biệt với anh/chị”?',
      'Saat pasangan bilang, “Kamu istimewa bagiku”?'
    ),
    options: [
      opt(
        0,
        '그 말 하나가 관계에 대한 모든 불안을 한 번에 날려버린다',
        'One sentence blows away all your relationship anxiety.',
        'その一言で関係への不安が一気に吹き飛ぶ。',
        '一句话扫清你对关系的不安。',
        '一句話掃清你對關係的不安。',
        'Một câu thổi bay mọi lo lắng về mối quan hệ.',
        'Satu kalimat menghapus semua kecemasan tentang hubungan.'
      ),
      opt(
        1,
        '너무 좋아서 그 감정을 어떻게 표현해야 할지 모르겠다',
        'You’re so happy you don’t know how to show it.',
        '嬉しすぎて、どう表現していいかわからない。',
        '开心到不知道该怎么表达。',
        '開心到不知道該怎麼表達。',
        'Vui quá không biết thể hiện sao.',
        'Senangnya tak tahu harus mengekspresikan bagaimana.'
      ),
      opt(
        2,
        '나도 뭔가 더 해주고 싶고 더 가까워지고 싶다는 충동이 생긴다',
        'You feel driven to give more and get closer.',
        'もっとしてあげたい、もっと近づきたい衝動が湧く。',
        '想为对方做更多、靠得更近。',
        '想為對方做更多、靠得更近。',
        'Bạn muốn cho nhiều hơn và xích lại gần.',
        'Kamu ingin memberi lebih banyak dan lebih dekat.'
      ),
      opt(
        3,
        '진심인지 한 번 더 확인하고 싶은 마음과 그냥 믿고 싶은 마음이 동시에 든다',
        'You both want proof and just want to believe.',
        '本気かもう一度確かめたい気持ちと、信じたい気持ちが同時にある。',
        '既想再确认真心，又想直接相信。',
        '既想再確認真心，又想直接相信。',
        'Vừa muốn kiểm tra, vừa muốn tin.',
        'Ingin memastikan sekaligus ingin percaya saja.'
      ),
    ],
  },
  {
    id: 12,
    question: M(
      '연애에서 나를 가장 무너지게 만드는 것을 솔직하게 고른다면?',
      'If you’re honest—what in love breaks you the hardest?',
      '恋愛で自分を一番崩すものを正直に選ぶなら？',
      '恋爱里最容易让你崩溃的是什么？（诚实选择）',
      '戀愛裡最容易讓你崩潰的是什麼？（誠實選擇）',
      'Điều gì trong tình yêu làm bạn “gục” nhất—chọn thật lòng?',
      'Apa dalam cinta yang paling membuatmu runtuh—jujur memilih?'
    ),
    options: [
      opt(
        0,
        '나를 제일 잘 알아주는 것 같은 느낌',
        'The feeling they truly “get” you.',
        '「一番わかってくれてる」という感覚。',
        '那种「最懂我」的感觉。',
        '那種「最懂我」的感覺。',
        'Cảm giác họ “hiểu mình” nhất.',
        'Perasaan mereka paling “mengerti” kamu.'
      ),
      opt(
        1,
        '같이 있을 때 느껴지는 설렘과 두근거림',
        'The butterflies when you’re together.',
        '一緒にいるときのドキドキと胸の高鳴り。',
        '在一起时的心动与心跳。',
        '在一起時的心動與心跳。',
        'Cảm giác bồi hồi khi ở bên nhau.',
        'Deg-degan saat bersama.'
      ),
      opt(
        2,
        '나도 모르게 생기는 강렬한 보호 본능',
        'A fierce protectiveness you didn’t expect.',
        '自分でも気づかない強い保護本能。',
        '自己都没意识到的强烈保护欲。',
        '自己都沒意識到的強烈保護欲。',
        'Bản năng bảo vệ mạnh mẽ không ngờ tới.',
        'Keinginan melindungi yang kuat tanpa disadari.'
      ),
      opt(
        3,
        '이 사람이 나를 정말 좋아하는가에 대한 확신',
        'Needing certainty that they truly love you.',
        '「本当に好きか」という確信が欲しいこと。',
        '对「对方是否真的爱我」的确定感。',
        '對「對方是否真的愛我」的確定感。',
        'Nhu cầu chắc chắn họ thật lòng yêu mình.',
        'Kebutuhan memastikan mereka benar-benar mencintaimu.'
      ),
    ],
  },
];

export const phase3LoveWeaknessMomentResults: Phase3LoveWeaknessMomentResult[] = [
  {
    type: 'Type1',
    emoji: '🫧',
    title: M(
      '알아봐 주는 한마디에 와르르, 인정 욕구 무장해제형 (0~5점)',
      'The “You Get Me” Meltdown — validation unlock (0–5)',
      '一言で理解された気持ちに崩れる・承認欲求アンロック型（0〜5）',
      '一句「懂你」就破防：认可需求解锁型（0–5）',
      '一句「懂你」就破防：認可需求解鎖型（0–5）',
      'Kiểu “hiểu mình” một câu là gục — cần được công nhận (0–5)',
      'Tipe “dibaca” satu kalimat lalu runtuh — butuh validasi (0–5)'
    ),
    shortDescription: M(
      "당신이 무너지는 순간은 바로 이겁니다. '이 사람, 나를 제대로 알아보는 것 같다'는 느낌.",
      'Your breaking point: the feeling that “this person really sees me.”',
      '崩れる瞬間：「この人、ちゃんと私を見てくれてる」という感覚。',
      '你崩溃的瞬间：「这个人好像真的懂我」。',
      '你崩潰的瞬間：「這個人好像真的懂我」。',
      'Khoảnh khắc gục: cảm giác “người này thật sự hiểu mình.”',
      'Momen runtuh: perasaan “orang ini benar-benar melihat aku.”'
    ),
    description: M(
      '평소엔 단단하고 자기 중심이 뚜렷한 당신이지만, 좋아하는 사람이 나를 정확하게 이해하거나 사소한 것을 기억해줄 때 순식간에 무너집니다. 다른 사람이 다 모르는 나의 부분을 알아주는 그 느낌, 나만 특별하게 대해주는 것 같은 그 순간에 이성이 흐려집니다. 인정받고 싶은 마음, 이해받고 싶은 욕구가 연애의 치명적 약점입니다.',
      'You’re usually steady and self-led—but when someone you like truly understands you or remembers tiny details, you crumble fast. The feeling that they see a part of you others don’t—or treat you specially—blurs your judgment. Needing validation and to be understood is your dating weak spot.',
      '普段は芯が強く自分軸だけど、好きな人に的確に理解されたり些細なことを覚えていてくれたりすると一瞬で崩れる。他の人には見えない自分を見てくれる感覚、特別扱いされた瞬間に理性がにじむ。認められたい、理解されたい欲求が恋愛の致命的な弱点。',
      '平时理性、自我清晰，但一旦喜欢的人准确理解你或记住小事，你会瞬间破防。那种「别人不懂但TA懂」「只对我特别」的感觉会让理智模糊。渴望被认可、被理解，是你在恋爱里的致命弱点。',
      '平時理性、自我清晰，但一旦喜歡的人準確理解你或記住小事，你會瞬間破防。那種「別人不懂但TA懂」「只對我特別」的感覺會讓理智模糊。渴望被認可、被理解，是你在戀愛裡的致命弱點。',
      'Bạn vốn vững và có trục riêng—nhưng khi người bạn thích thật sự hiểu bạn hoặc nhớ chi tiết nhỏ, bạn sụp nhanh. Cảm giác họ thấy phần “chỉ mình mình” hoặc đối xử đặc biệt làm lu mờ lý trí. Khao khát được công nhận và được hiểu là điểm yếu trong yêu.',
      'Kamu biasanya teguh—tapi saat orang yang kamu sukai benar-benar memahamimu atau mengingat hal kecil, kamu runtuh cepat. Perasaan mereka “melihat” bagian dirimu yang lain tidak, atau memperlakukanmu istimewa, mengaburkan penilaian. Butuh validasi dan dipahami adalah titik lemah asmaramu.'
    ),
    typeLabel: M(
      '연애 약점 유형: 인정 욕구 무장해제형',
      'Dating weak spot: Validation-unlock type',
      '恋愛の弱点タイプ：承認欲求アンロック型',
      '恋爱弱点类型：认可需求解锁型',
      '戀愛弱點類型：認可需求解鎖型',
      'Điểm yếu khi yêu: Kiểu cần được công nhận',
      'Titik lemah asmara: Tipe butuh validasi'
    ),
    collapseMoment: M(
      '"이 사람이 나를 진짜 아는 것 같아"라는 느낌이 드는 순간',
      'The moment you feel, “They really know me.”',
      '「この人、本当に私のことをわかってる」と感じる瞬間',
      '感到「这个人真的懂我」的那一刻',
      '感到「這個人真的懂我」的那一刻',
      'Khoảnh khắc bạn cảm thấy “Họ thật sự hiểu mình.”',
      'Saat kamu merasa “Mereka benar-benar mengerti aku.”'
    ),
    fatalWeakness: M(
      '나를 알아주는 사람에게 급격히 마음이 열림',
      'You open up fast for people who “get” you.',
      '「わかってくれる人」に急に心を開いてしまう',
      '对「懂你的人」会快速敞开心扉',
      '對「懂你的人」會快速敞開心扉',
      'Bạn mở lòng rất nhanh với người “hiểu mình.”',
      'Kamu cepat terbuka pada orang yang “mengerti” kamu.'
    ),
    dangerSignal: M(
      '나를 잘 아는 척하는 사람에게 쉽게 끌릴 수 있음',
      'You may be drawn to people who only pretend to understand you.',
      '「わかってるフリ」する人に引きやすい',
      '容易被「装作很懂你」的人吸引',
      '容易被「裝作很懂你」的人吸引',
      'Dễ bị thu hút bởi người giả vờ hiểu bạn.',
      'Mudah tertarik pada orang yang pura-pura mengerti kamu.'
    ),
    effectiveLine: M(
      '"너 그런 면이 있는 줄 몰랐어. 생각보다 훨씬 깊은 사람이네"',
      '“I didn’t know you had that side—you’re deeper than I thought.”',
      '「そういう面があるなんて知らなかった。思ってたよりずっと深い人だね」',
      '「没想到你还有这一面，比我想的更深。」',
      '「沒想到你還有這一面，比我想的更深。」',
      '“Không ngờ em có mặt đó—sâu sắc hơn anh nghĩ.”',
      '“Ternyata ada sisi itu—kamu lebih dalam dari kukira.”'
    ),
    prescription: M(
      '나를 알아보는 것과 나를 진심으로 대하는 것은 다릅니다. 처음 몇 마디에 마음을 열기 전에 시간을 두고 관찰해보세요.',
      'Being “seen” isn’t the same as being loved with integrity. Before you open your heart on a few kind lines, take time and watch their consistency.',
      '「わかってもらうこと」と「誠実に向き合ってもらうこと」は違います。最初の数言葉で心を開く前に、時間を置いて観察してください。',
      '「懂你」和「真心对待你」不是一回事。别因为几句话就交心，先花时间观察。',
      '「懂你」和「真心對待你」不是一回事。別因為幾句話就交心，先花時間觀察。',
      'Được “thấy” khác với được yêu bằng sự chân thành. Đừng mở lòng chỉ vài câu—quan sát họ theo thời gian.',
      '“Dilihat” berbeda dengan dicintai dengan tulus. Jangan buka hati hanya karena beberapa kalimat—amati konsistensinya.'
    ),
    goodMatch: M(
      'Type 2 (설렘과 이해가 함께 오는 상대)',
      'Type 2 (someone who brings both spark and understanding)',
      'Type 2（ときめきと理解の両方をくれる相手）',
      'Type 2（既给你心动又懂你的人）',
      'Type 2（既給你心動又懂你的人）',
      'Type 2 (người vừa khiến bạn rung động vừa hiểu bạn)',
      'Type 2 (orang yang bikin deg-degan sekaligus memahami kamu)'
    ),
    vulnerableTo: M(
      '말로 잘 알아주는 척하지만 행동이 따라오지 않는 사람',
      'People who sound like they “get you” but never follow through in actions.',
      '言葉ではわかってくれるフリだけど、行動が伴わない人',
      '嘴上很懂你、行动却跟不上的人',
      '嘴上很懂你、行動卻跟不上的人',
      'Người nói hay như “hiểu bạn” nhưng hành động không theo kịp.',
      'Orang yang terdengar “mengerti” tapi tindakan tidak mengikuti.'
    ),
    shareTypeName: M(
      '인정 욕구 무장해제형',
      'Validation-unlock type',
      '承認欲求アンロック型',
      '认可需求解锁型',
      '認可需求解鎖型',
      'Kiểu cần được công nhận',
      'Tipe butuh validasi'
    ),
  },
  {
    type: 'Type2',
    emoji: '💓',
    title: M(
      '두근거림 앞에선 판단력 실종, 설렘 중독형 (6~11점)',
      'Butterflies Override Logic — thrill-addicted type (6–11)',
      'ドキドキの前では判断力消失・ときめき中毒型（6〜11）',
      '心动盖过理智：上瘾型心动（6–11）',
      '心動蓋過理智：上癮型心動（6–11）',
      'Logic tắt trước cảm giác bồi hồi — nghiện cảm xúc (6–11)',
      'Logika kalah deg-degan — tipe candu kilau (6–11)'
    ),
    shortDescription: M(
      "당신이 무너지는 순간은 바로 이겁니다. 심장이 빨리 뛰기 시작하는 바로 그 순간.",
      'Your breaking point: the moment your heart starts racing.',
      '崩れる瞬間：心臓が早く打ち始める、そのまさにその時。',
      '你崩溃的瞬间：心跳加速的那一刻。',
      '你崩潰的瞬間：心跳加速的那一刻。',
      'Khoảnh khắc gục: lúc tim bạn bắt đập nhanh.',
      'Momen runtuh: saat jantungmu mulai berdegup kencang.'
    ),
    description: M(
      '논리도, 냉정함도, 평소의 기준도 전부 두근거림 앞에서 무력화됩니다. 설레는 감정이 올라오는 순간 이성적인 판단보다 감정이 먼저 달려나가고, 그 두근거림이 사랑이라는 착각으로 이어지기 쉽습니다. 처음의 설렘이 강할수록 더 깊이 빠져들고, 그 감정이 식을 때 가장 힘들어하는 타입입니다.',
      'Logic, cool-headedness, even your usual standards all go quiet when butterflies hit. When excitement rises, feelings outrun judgment—and you may mistake that rush for love. The stronger the early spark, the deeper you fall—and you suffer most when the thrill fades.',
      '論理も冷静さも普段の基準も、ドキドキの前では無力。ときめきが上がる瞬間、理性より感情が先に走り、その高鳴りが恋だと錯覚しやすい。最初のときめきが強いほど深くハマり、その感情が冷めたときに一番しんどいタイプ。',
      '逻辑、冷静、平时的标准，在心动面前都会失效。兴奋一上来，情绪跑在理智前面，容易把心跳误认为爱。起初越上头，陷得越深；当新鲜感褪去时也最难受。',
      '邏輯、冷靜、平時的標準，在心動面前都會失效。興奮一上來，情緒跑在理智前面，容易把心跳誤認為愛。起初越上頭，陷得越深；當新鮮感褪去時也最難受。',
      'Lý trí, sự điềm tĩnh, tiêu chuẩn thường ngày đều tắt trước cơn bồi hồi. Khi hứng khởi dâng, cảm xúc vượt phán đoán—dễ nhầm cơn rush đó là tình yêu. Càng mạnh lúc đầu, càng lún sâu; và đau nhất khi cảm giác đó phai.',
      'Logika, ketenangan, standar biasamu redup saat deg-degan. Saat gairah naik, perasaan melaju lebih dulu—mudah mengira gejolak itu adalah cinta. Semakin kuat percikan awal, semakin dalam jatuh; dan paling sakit saat kilau itu pudar.'
    ),
    typeLabel: M(
      '연애 약점 유형: 설렘 중독형',
      'Dating weak spot: Thrill-addicted type',
      '恋愛の弱点タイプ：ときめき中毒型',
      '恋爱弱点类型：心动上瘾型',
      '戀愛弱點類型：心動上癮型',
      'Điểm yếu khi yêu: Nghiện cảm giác rung động',
      'Titik lemah asmara: Candu deg-degan'
    ),
    collapseMoment: M(
      '심장이 내려앉는 그 첫 순간, 두근거림이 시작되는 바로 그때',
      'That first drop—right when the racing heart begins.',
      '胸がキュンとする最初の瞬間、高鳴りが始まるまさにその時',
      '心里一沉、心跳刚加速的那一刻',
      '心裡一沉、心跳剛加速的那一刻',
      'Khoảnh khắc đầu—ngay khi tim bắt đập nhanh.',
      'Detik pertama—tepat saat degupan mulai.'
    ),
    fatalWeakness: M(
      '설렘 자체에 중독되어 판단력이 흐려짐',
      'You’re hooked on the thrill itself; judgment gets fuzzy.',
      'ときめきそのものにのめり込み、判断力がぼやける',
      '沉迷于心动本身，判断力变模糊',
      '沉迷於心動本身，判斷力變模糊',
      'Nghiện cảm giác phấn khích; phán đoán mờ đi.',
      'Candu pada sensasi itu; penilaian jadi kabur.'
    ),
    dangerSignal: M(
      '설레지 않으면 사랑이 아니라고 느껴서 안정적인 관계를 지루하다고 느낄 수 있음',
      'If it doesn’t spark, it doesn’t feel like love—stable bonds can feel boring.',
      'ドキドキしなければ恋じゃないと感じ、安定関係がつまらなく感じることがある',
      '不心动就不像恋爱，稳定关系可能让你觉得无聊',
      '不心動就不像戀愛，穩定關係可能讓你覺得無聊',
      'Không rung động thì không giống yêu—mối quan hệ ổn định có thể thấy nhàm.',
      'Tanpa kilau terasa bukan cinta—hubungan stabil bisa terasa membosankan.'
    ),
    effectiveLine: M(
      '"심장 빨리 뛰게 만드는 거 나잖아"',
      '“You’re the one who makes my heart race.”',
      '「ドキドキさせるの、君じゃん」',
      '「让我心跳加速的不就是你吗。」',
      '「讓我心跳加速的不就是你嗎。」',
      '“Người làm tim em đập nhanh là anh/chị mà.”',
      '“Yang bikin deg-degan kan kamu.”'
    ),
    prescription: M(
      '두근거림은 시작이지 사랑의 전부가 아닙니다. 설렘이 없어도 편안하고 좋은 관계가 더 오래갑니다.',
      'Butterflies are a beginning—not the whole of love. Calm, steady warmth often lasts longer than constant sparks.',
      'ドキドキは始まりであって、恋のすべてではありません。ときめきがなくても、落ち着いて心地いい関係の方が長く続きやすい。',
      '心动只是开始，不是爱的全部。没有轰轰烈烈，也可以长久、舒服。',
      '心動只是開始，不是愛的全部。沒有轟轟烈烈，也可以長久、舒服。',
      'Cơn bồi hồi chỉ là khởi đầu—không phải toàn bộ tình yêu. Ấm áp điềm tĩnh thường bền hơn lúc nào cũng phấn khích.',
      'Deg-degan hanyalah awal—bukan seluruh cinta. Kehangatan tenang sering lebih tahan lama.'
    ),
    goodMatch: M(
      'Type 1 (이해와 설렘을 동시에 주는 상대)',
      'Type 1 (someone who offers both understanding and spark)',
      'Type 1（理解とときめきの両方をくれる相手）',
      'Type 1（既懂你又给心动的人）',
      'Type 1（既懂你又給心動的人）',
      'Type 1 (người vừa hiểu bạn vừa cho cảm giác rung động)',
      'Type 1 (orang yang memahami sekaligus memberi kilau)'
    ),
    vulnerableTo: M(
      '처음엔 강렬하게 끌어당기다가 관심이 식어버리는 사람',
      'People who pull you in hard—then lose interest.',
      '最初は強烈に引きつけるのに、興味が冷めてしまう人',
      '一开始强烈吸引、后来却冷淡的人',
      '一開始強烈吸引、後來卻冷淡的人',
      'Người kéo bạn mạnh lúc đầu rồi hết hứng.',
      'Orang yang menarik kuat di awal lalu dingin.'
    ),
    shareTypeName: M(
      '설렘 중독형',
      'Thrill-addicted type',
      'ときめき中毒型',
      '心动上瘾型',
      '心動上癮型',
      'Nghiện rung động',
      'Candu deg-degan'
    ),
  },
  {
    type: 'Type3',
    emoji: '🛡️',
    title: M(
      '보호 본능이 발동되는 순간 이미 늦은, 감정 몰입 과부하형 (12~19점)',
      'Protect Mode Too Late — emotional overload type (12–19)',
      '保護本能が発動したらもう遅い・感情没入オーバーロード型（12〜19）',
      '保护欲一启动就晚了：情绪过载型（12–19）',
      '保護慾一啟動就晚了：情緒過載型（12–19）',
      'Chế độ bảo vệ bật là muộn — quá tải cảm xúc (12–19)',
      'Mode pelindung terlambat — kelebihan emosi (12–19)'
    ),
    shortDescription: M(
      "당신이 무너지는 순간은 바로 이겁니다. '이 사람을 지켜주고 싶다'는 감정이 생기는 순간.",
      'Your breaking point: the moment you feel, “I need to protect them.”',
      '崩れる瞬間：「この人を守りたい」と感じるその時。',
      '你崩溃的瞬间：产生「想保护TA」的那一刻。',
      '你崩潰的瞬間：產生「想保護TA」的那一刻。',
      'Khoảnh khắc gục: khi bạn cảm thấy “Mình phải bảo vệ họ.”',
      'Momen runtuh: saat kamu merasa “Aku harus melindungi mereka.”'
    ),
    description: M(
      '상대가 약한 모습을 보이거나 힘든 이야기를 털어놓는 순간, 당신의 보호 본능이 켜지면서 이미 감정이 깊어진 상태가 됩니다. 자기도 모르는 사이에 상대 중심으로 완전히 이동하고, 해주고 싶은 것들이 폭발적으로 생깁니다. 상대를 위하는 마음이 강점이지만, 그 감정이 상대에게 부담이 되거나 내가 일방적으로 소진될 수 있습니다.',
      'When they show vulnerability or share pain, your protect mode flips on—and you’re already deep in emotionally. Without noticing, you orbit them completely, with an explosion of things you want to do for them. Caring deeply is a strength, but it can burden them—or drain you one-sidedly.',
      '相手が弱さを見せたり、辛い話を打ち明けた瞬間に保護本能がオンになり、もう感情が深い状態になる。気づかないうちに完全に相手中心になり、してあげたいことが爆発的に増える。相手を想う気持ちは強みだけど、相手の負担になったり、自分が一方通行で消耗することも。',
      '一旦对方示弱或倾诉痛苦，你的保护欲就会打开，情感也已经很深。不知不觉以对方为中心，想为TA做的事会爆发式增长。体贴是优点，但也可能让对方有压力，或让你单方面耗尽。',
      '一旦對方示弱或傾訴痛苦，你的保護欲就會打開，情感也已經很深。不知不覺以對方為中心，想為TA做的事會爆發式增長。體貼是優點，但也可能讓對方有壓力，或讓你單方面耗盡。',
      'Khi họ yếu đi hoặc chia sẻ nỗi đau, chế độ bảo vệ bật—và bạn đã lún sâu cảm xúc. Vô thức xoay quanh họ, muốn làm mọi thứ cho họ. Quan tâm là điểm mạnh nhưng có thể thành gánh nặng cho đối phưong hoặc khiến bạn kiệt sức một chiều.',
      'Saat mereka rapuh atau berbagi luka, mode pelindung menyala—dan kamu sudah terlalu dalam. Tanpa sadar mengorbit mereka, ingin melakukan segalanya. Peduli itu kuat, tapi bisa membebani mereka atau mengurasmu sendirian.'
    ),
    typeLabel: M(
      '연애 약점 유형: 감정 몰입 과부하형',
      'Dating weak spot: Emotional-overload type',
      '恋愛の弱点タイプ：感情没入オーバーロード型',
      '恋爱弱点类型：情绪过载型',
      '戀愛弱點類型：情緒過載型',
      'Điểm yếu khi yêu: Quá tải chìm cảm xúc',
      'Titik lemah asmara: Kelebihan emosi'
    ),
    collapseMoment: M(
      '상대의 약한 모습이나 솔직한 속마음을 처음 보는 순간',
      'The first time you see their soft side or raw honesty.',
      '相手の弱さや本音を初めて見た瞬間',
      '第一次看到对方脆弱或真心话的瞬间',
      '第一次看到對方脆弱或真心話的瞬間',
      'Lần đầu thấy họ yếu đi hoặc thành thật thật sự.',
      'Pertama kali melihat sisi rapuh atau kejujuran mentah mereka.'
    ),
    fatalWeakness: M(
      '보호 본능 발동 후 감정 몰입 과부하',
      'After protect mode, you over-invest emotionally.',
      '保護本能の後に感情投入が過剰になる',
      '保护欲之后情绪投入过度',
      '保護欲之後情緒投入過度',
      'Sau chế độ bảo vệ, bạn đầu tư cảm xúc quá mức.',
      'Setelah mode pelindung, kamu terlalu menanamkan emosi.'
    ),
    dangerSignal: M(
      '자기 자신을 지키는 것보다 상대를 먼저 챙기다 소진됨',
      'You may burn out putting them before yourself.',
      '自分を守るより相手を優先して燃え尽きる',
      '把自己放在后面，先顾对方而耗尽自己',
      '把自己放在後面，先顧對方而耗盡自己',
      'Ưu tiên họ hơn bản thân đến kiệt sức.',
      'Mengutamakan mereka di atas dirimu sampai habis.'
    ),
    effectiveLine: M(
      '"너한테만 이런 말 하는 거야"라는 속마음 고백',
      'A quiet confession: “I only say this to you.”',
      '「君にだけこんな話をする」という本音の告白',
      '类似「这种话我只对你说」的真心坦白',
      '類似「這種話我只對你說」的真心坦白',
      'Lời thì thầm: “Anh/chị chỉ nói điều này với em.”',
      'Pengakuan: “Aku cuma bilang ini ke kamu.”'
    ),
    prescription: M(
      '상대의 약함이 당신을 사랑에 빠지게 만든다면, 그것이 사랑인지 동정인지 한 번 더 확인해보세요.',
      'If their vulnerability is what pulls you in, double-check whether it’s love—or empathy mixed with rescue fantasy.',
      '相手の弱さに引かれて恋に落ちるなら、それが恋なのか同情なのか、もう一度確かめて。',
      '如果是因对方的脆弱而坠入爱河，请再分辨那是爱，还是同情与拯救欲。',
      '如果是因對方的脆弱而墜入愛河，請再分辨那是愛，還是同情與拯救欲。',
      'Nếu sự yếu đuối của họ là thứ kéo bạn vào, hãy hỏi lại: đó là yêu hay thương hại/cứu rỗi.',
      'Jika kerapuhan mereka yang menarikmu, tanyakan lagi: cinta atau belas kasihan ingin menyelamatkan.'
    ),
    goodMatch: M(
      'Type 4 (서로를 의지하며 균형 잡는 관계)',
      'Type 4 (a relationship balanced in mutual leaning)',
      'Type 4（互いに寄りかかりながらバランスを取る関係）',
      'Type 4（互相依靠、彼此平衡的关系）',
      'Type 4（互相依靠、彼此平衡的關係）',
      'Type 4 (quan hệ dựa vào nhau và cân bằng)',
      'Type 4 (hubungan saling mengandalkan dan seimbang)'
    ),
    vulnerableTo: M(
      '힘든 척해서 당신의 보호 본능을 자극하는 사람',
      'People who perform struggle to trigger your protect mode.',
      '辛いフリをして保護本能を刺激する人',
      '装可怜来刺激你保护欲的人',
      '裝可憐來刺激你保護欲的人',
      'Người giả vờ khổ khổ để kích thích bản năng bảo vệ.',
      'Orang yang pura-pura menderita untuk memicu mode pelindungmu.'
    ),
    shareTypeName: M(
      '감정 몰입 과부하형',
      'Emotional-overload type',
      '感情没入オーバーロード型',
      '情绪过载型',
      '情緒過載型',
      'Quá tải cảm xúc',
      'Kelebihan emosi'
    ),
  },
  {
    type: 'Type4',
    emoji: '💬',
    title: M(
      '다정한 말 한마디에 무장 해제, 언어 자극 직격형 (20~27점)',
      'Soft Words, Hard Disarm — language-hit type (20–27)',
      '優しい一言で武装解除・言語ストレート命中型（20〜27）',
      '温柔一句就卸防：语言直击型（20–27）',
      '溫柔一句就卸防：語言直擊型（20–27）',
      'Một câu dịu là gỡ giáp — kiểu trúng ngôn từ (20–27)',
      'Satu kalimat lembut buka pertahanan — kena bahasa (20–27)'
    ),
    shortDescription: M(
      "당신이 무너지는 순간은 바로 이겁니다. 딱 맞는 말 한마디가 들어오는 그 순간.",
      'Your breaking point: the moment exactly the right words land.',
      '崩れる瞬間：ぴったりの言葉が刺さったその瞬間。',
      '你崩溃的瞬间：那句「刚好击中你」的话到来的时刻。',
      '你崩潰的瞬間：那句「剛好擊中你」的話到來的時刻。',
      'Khoảnh khắc gục: khi đúng câu nói cần nghe chạm vào.',
      'Momen runtuh: saat kata yang pas tepat mengenai.'
    ),
    description: M(
      '"보고 싶었어", "너만 특별해", "나한테 이런 말 처음 해줬어". 상대의 말 한마디가 정확히 심장에 꽂히는 순간 이성이 실종됩니다. 행동보다 말에 더 강하게 반응하는 타입으로, 상대가 무슨 말을 어떻게 하느냐에 따라 감정이 완전히 달라집니다. 언어로 사랑을 받는 것에 익숙하고, 그만큼 말에 상처받기도 쉬운 타입입니다.',
      '“I missed you,” “You’re special to me,” “I’ve never said this to anyone else.” When a line hits your heart squarely, logic vanishes. You react more to words than deeds—your mood can swing entirely on how they phrase things. You’re fluent in love languages—and just as easily cut by words.',
      '「会いたかった」「君だけ特別」「こんなこと初めて言った」。相手の一言が心臓に刺さった瞬間、理性が消える。行動より言葉に強く反応し、言い方ひとつで感情が変わる。言葉で愛を受け取るのに慣れている分、言葉で傷つきやすいタイプ。',
      '「想你了」「你对我很特别」「我第一次对别人说这种话」。当一句话正中内心，理智会消失。你对语言的反应强于行动，对方怎么说会完全牵动你的情绪。你习惯用语言接收爱，也更容易被语言刺伤。',
      '「想你了」「你對我很特別」「我第一次對別人說這種話」。當一句話正中內心，理智會消失。你對語言的反應強於行動，對方怎麼說會完全牽動你的情緒。你習慣用語言接收愛，也更容易被語言刺傷。',
      '“Nhớ em,” “Em đặc biệt,” “Lần đầu anh/chị nói vậy với ai.” Khi câu nói đúng trúng tim đen, lý trí biến mất. Bạn nhạy với lời nói hơn hành động—cảm xúc đổi theo cách họ diễn đạt. Bạn nhận tình yêu qua ngôn từ—và cũng dễ bị tổn thương bằng lời.',
      '“Kangen,” “Kamu istimewa,” “Pertama kali aku bilang gini.” Saat kalimat mengena, logika hilang. Kamu lebih sensitif pada kata daripada tindakan—suasana hatimu bergantung pada cara mereka berbicara. Cinta lewat bahasa—luka juga lewat bahasa.'
    ),
    typeLabel: M(
      '연애 약점 유형: 언어 자극 직격형',
      'Dating weak spot: Language-hit type',
      '恋愛の弱点タイプ：言語ストレート命中型',
      '恋爱弱点类型：语言直击型',
      '戀愛弱點類型：語言直擊型',
      'Điểm yếu khi yêu: Trúng ngôn từ',
      'Titik lemah asmara: Kena bahasa'
    ),
    collapseMoment: M(
      '듣고 싶었던 말이 정확하게 들어오는 그 순간',
      'The moment you hear exactly what you needed to hear.',
      '聞きたかった言葉がピンポイントで届いた瞬間',
      '听到「刚好是你想听的那句」的瞬间',
      '聽到「剛好是你想聽的那句」的瞬間',
      'Khoảnh khắc bạn nghe đúng điều mình cần nghe.',
      'Saat kamu mendengar persis yang ingin kamu dengar.'
    ),
    fatalWeakness: M(
      '말 잘하는 사람 앞에서 방어가 무너짐',
      'Smooth talkers can dismantle your defenses.',
      '口がうまい人の前では防御が崩れる',
      '在会说话的人面前容易卸防',
      '在會說話的人面前容易卸防',
      'Người ăn nói khéo có thể tháo phòng thủ bạn.',
      'Orang pandai bicara bisa membuka pertahananmu.'
    ),
    dangerSignal: M(
      '말은 잘하지만 행동이 따라오지 않는 사람에게 쉽게 빠질 수 있음',
      'You may fall for people who talk a great game but don’t follow through.',
      '言葉は上手だけど行動が伴わない人にハマりやすい',
      '容易迷恋「说得好听、做得不多」的人',
      '容易迷戀「說得好聽、做得不多」的人',
      'Dễ mắc vào người nói hay nhưng làm ít.',
      'Mudah jatuh pada orang pandai bicara tapi tidak konsisten bertindak.'
    ),
    effectiveLine: M(
      '"너랑 있으면 시간 가는 줄 모르겠어"',
      '“When I’m with you, I lose track of time.”',
      '「一緒にいると時間が経つのを忘れる」',
      '「和你在一起，不知不觉就忘了时间。」',
      '「和你在一起，不知不覺就忘了時間。」',
      '“Ở bên em, anh/chị quên cả thời gian.”',
      '“Sama kamu, aku lupa waktu.”'
    ),
    prescription: M(
      '말이 아니라 행동을 보세요. 말을 잘하는 사람과 진심을 전하는 사람은 다릅니다.',
      'Watch actions, not just lines. A great talker isn’t always a sincere partner.',
      '言葉ではなく行動を見て。口がうまい人と、本気で向き合う人は違います。',
      '别看说了什么，要看做了什么。会说话和真心交付不是一回事。',
      '別看說了什麼，要看做了什麼。會說話和真心交付不是一回事。',
      'Nhìn hành động, không chỉ lời. Người ăn nói hay chưa chắc chân thành.',
      'Lihat tindakan, bukan hanya kata. Pandai bicara belum tentu tulus.'
    ),
    goodMatch: M(
      'Type 1 (나를 알아보는 말을 자연스럽게 해주는 상대)',
      'Type 1 (someone who naturally says things that truly see you)',
      'Type 1（自然に「わかってる」を言葉にしてくれる相手）',
      'Type 1（自然说出「懂你」的话的人）',
      'Type 1（自然說出「懂你」的話的人）',
      'Type 1 (người tự nhiên nói điều thật sự “thấy” bạn)',
      'Type 1 (orang yang secara alami mengucapkan hal yang benar-benar melihatmu)'
    ),
    vulnerableTo: M(
      '감언이설에 능한 사람. 말은 완벽하지만 행동이 없는 사람',
      'Sweet talkers—perfect lines, empty follow-through.',
      '甘い言葉が上手で、言葉は完璧なのに行動がない人',
      '甜言蜜语高手：话说得完美，行动却没有',
      '甜言蜜語高手：話說得完美，行動卻沒有',
      'Bậc thuyết ngọt—lời hoàn hảo, hành động trống.',
      'Ahli kata manis—kalimat sempurna, tindakan kosong.'
    ),
    shareTypeName: M(
      '언어 자극 직격형',
      'Language-hit type',
      '言語ストレート命中型',
      '语言直击型',
      '語言直擊型',
      'Trúng ngôn từ',
      'Kena bahasa'
    ),
  },
  {
    type: 'Type5',
    emoji: '🔓',
    title: M(
      '확신의 순간에 완전히 열리는, 신뢰 확인 해제형 (28~33점)',
      'Opens All at Once When Trust Clicks — trust-unlock type (28–33)',
      '信頼が確信に変わった瞬間に全開・信頼解除型（28〜33）',
      '信任一确认就全开：信任解锁型（28–33）',
      '信任一確認就全開：信任解鎖型（28–33）',
      'Mở hết khi niềm tin “khớp” — mở khóa tin cậy (28–33)',
      'Terbuka sekaligus saat kepercayaan cocok — buka kunci kepercayaan (28–33)'
    ),
    shortDescription: M(
      "당신이 무너지는 순간은 바로 이겁니다. '이 사람을 믿어도 되겠다'는 확신이 서는 순간.",
      'Your breaking point: the moment you feel, “I can trust this person.”',
      '崩れる瞬間：「この人を信じていい」と確信したその時。',
      '你崩溃的瞬间：产生「可以信任这个人」的确信时。',
      '你崩潰的瞬間：產生「可以信任這個人」的確信時。',
      'Khoảnh khắc gục: khi bạn chắc “Mình có thể tin người này.”',
      'Momen runtuh: saat kamu yakin “Aku bisa percaya orang ini.”'
    ),
    description: M(
      '평소에는 쉽게 마음을 열지 않고, 관계에서도 일정한 거리를 유지합니다. 그런데 상대가 일관된 행동과 진심을 보여주면서 신뢰가 쌓이는 순간, 한 번에 완전히 무너집니다. 오래 걸리지만 한 번 열리면 깊게 열리는 타입입니다. 확신이 서기 전까지는 단단하고, 확신이 서면 그 이후로는 감정을 아낌없이 줍니다.',
      'You don’t open easily—you keep a steady distance. But when consistent actions and sincerity stack into trust, you collapse open all at once. It takes time, but once you open, you open deep. Before certainty, you’re guarded; after certainty, you give generously.',
      '普段は簡単に心を開かず、距離も一定に保つ。でも相手の一貫した行動と誠実さで信頼が積み上がった瞬間、一気に全開になる。時間はかかるが、一度開くと深く開くタイプ。確信ができるまでは硬いが、確信後は感情を惜しみなく出す。',
      '平时不轻易交心，关系里也保持距离。但当对方的行动一致、真心可感、信任堆起来时，你会一次性全开。慢热但一旦打开就很深。确定之前很硬，确定之后会毫无保留地付出情感。',
      '平時不輕易交心，關係裡也保持距離。但當對方的行動一致、真心可感、信任堆起來時，你會一次性全開。慢熱但一旦打開就很深。確定之前很硬，確定之後會毫無保留地付出情感。',
      'Bạn khó mở—giữ khoảng cách ổn định. Nhưng khi hành động nhất quán và chân thành tích lũy thành tin cậy, bạn mở một lần hết cỡ. Lâu nhưng sâu. Trước khi chắc chắn thì phòng thủ; sau đó cho đi hào phóng.',
      'Kamu jarang terbuka—jaga jarak. Tapi saat tindakan konsisten dan ketulusan menumpuk jadi kepercayaan, kamu terbuka sekaligus. Lama tapi dalam. Sebelum yakin tertutup; setelah yakin memberi besar.'
    ),
    typeLabel: M(
      '연애 약점 유형: 신뢰 확인 해제형',
      'Dating weak spot: Trust-unlock type',
      '恋愛の弱点タイプ：信頼解除型',
      '恋爱弱点类型：信任解锁型',
      '戀愛弱點類型：信任解鎖型',
      'Điểm yếu khi yêu: Mở khóa tin cậy',
      'Titik lemah asmara: Buka kunci kepercayaan'
    ),
    collapseMoment: M(
      '이 사람을 믿어도 되겠다는 확신이 드는 결정적인 순간',
      'The decisive moment you feel safe to trust them.',
      '「この人を信じていい」と確信する決定的な瞬間',
      '你确信「可以信任这个人」的关键时刻',
      '你確信「可以信任這個人」的關鍵時刻',
      'Khoảnh khắc quyết định bạn cảm thấy an toàn để tin.',
      'Momen penentuan kamu merasa aman untuk percaya.'
    ),
    fatalWeakness: M(
      '신뢰가 쌓이는 순간 한 번에 감정이 폭발적으로 열림',
      'When trust finally stacks, your feelings burst open at once.',
      '信頼が積み上がった瞬間に感情が一気に爆発的に開く',
      '信任一累积，情感会一次性爆发式打开',
      '信任一累積，情感會一次性爆發式打開',
      'Khi tin cậy tích lũy, cảm xúc bùng mở một lần.',
      'Saat kepercayaan menumpuk, perasaan meledak terbuka sekaligus.'
    ),
    dangerSignal: M(
      '한 번 믿기 시작하면 그 이후 배신에 매우 취약해짐',
      'Once you start trusting, betrayal hits you harder.',
      '一度信じ始めると、その後の裏切りにとても弱くなる',
      '一旦开始信任，之后若遭遇背叛会特别受伤',
      '一旦開始信任，之後若遭遇背叛會特別受傷',
      'Một khi tin, phản bội sau đó đau gấp bội.',
      'Setelah percaya, pengkhianatan menyakitkan sangat.'
    ),
    effectiveLine: M(
      '말이 아니라 일관된 행동. 약속을 지키는 것',
      'Not words—consistent action. Keeping promises.',
      '言葉ではなく一貫した行動。約束を守ること。',
      '不是花言巧语，而是一致行动与守诺。',
      '不是花言巧語，而是一致行動與守諾。',
      'Không phải lời—hành động nhất quán. Giữ lời hứa.',
      'Bukan kata—tindakan konsisten. Menepati janji.'
    ),
    prescription: M(
      '신뢰가 쌓여서 마음이 열리는 건 건강한 신호입니다. 다만 한 번 연 마음을 다시 점검하는 것도 잊지 마세요.',
      'Opening because trust builds is healthy—just remember to recheck your heart sometimes too.',
      '信頼が積み上がって心が開くのは健全なサイン。ただ、一度開いた心を時々点検することも忘れないで。',
      '因信任而打开心是健康的信号；但也别忘了偶尔复盘自己的心。',
      '因信任而打開心是健康的信號；但也別忘了偶爾覆盤自己的心。',
      'Mở lòng vì tin cậy là tốt—nhưng thỉnh thoảng cũng nên xem lại trái tim mình.',
      'Terbuka karena kepercayaan itu sehat—kadang periksa lagi hatimu.'
    ),
    goodMatch: M(
      'Type 6 (깊고 진지한 연결을 함께 쌓아가는 상대)',
      'Type 6 (someone who builds deep, serious connection with you)',
      'Type 6（深く真剣なつながりを一緒に積み上げる相手）',
      'Type 6（一起慢慢建立深刻、认真连接的人）',
      'Type 6（一起慢慢建立深刻、認真連接的人）',
      'Type 6 (người cùng bạn xây kết nối sâu và nghiêm túc)',
      'Type 6 (orang yang membangun ikatan dalam dan serius bersamamu)'
    ),
    vulnerableTo: M(
      '처음엔 신뢰를 주다가 나중에 태도가 달라지는 사람',
      'People who seem trustworthy at first—then shift.',
      '最初は信頼できるように見えて、後から態度が変わる人',
      '先给你信任感、后来态度变了的人',
      '先給你信任感、後來態度變了的人',
      'Ban đầu tạo cảm giác tin cậy—sau đó đổi thái độ.',
      'Awalnya terasa bisa dipercaya—lalu berubah sikap.'
    ),
    shareTypeName: M(
      '신뢰 확인 해제형',
      'Trust-unlock type',
      '信頼解除型',
      '信任解锁型',
      '信任解鎖型',
      'Mở khóa tin cậy',
      'Buka kunci kepercayaan'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌊',
    title: M(
      '깊은 연결감이 생기는 순간 돌아올 수 없는, 감정 심층 연결형 (34~36점)',
      'Deep-Bond Point of No Return — emotional depth-link type (34–36)',
      '深い繋がりが生まれたら戻れない・感情深層接続型（34〜36）',
      '深层连结一到就回不去：情感深连型（34–36）',
      '深層連結一到就回不去：情感深連型（34–36）',
      'Gắn sâu là không quay đầu — kết nối cảm xúc sâu (34–36)',
      'Ikatan dalam tak bisa mundur — hubungan emosi dalam (34–36)'
    ),
    shortDescription: M(
      "당신이 무너지는 순간은 바로 이겁니다. 이 사람과 깊게 연결된 것 같다는 느낌이 드는 그 순간.",
      'Your breaking point: the moment it feels deeply connected—not just crush energy.',
      '崩れる瞬間：この人と深く繋がった気がする、その感覚が来た時。',
      '你崩溃的瞬间：感到和对方「深层连结」而不只是心动。',
      '你崩潰的瞬間：感到和對方「深層連結」而不只是心動。',
      'Khoảnh khắc gục: khi cảm thấy gắn sâu—không chỉ là crush.',
      'Momen runtuh: saat terasa terhubung dalam—bukan sekadar naksir.'
    ),
    description: M(
      '단순한 설렘이나 두근거림이 아니라 이 사람과 뭔가 깊이 연결된 것 같다는 느낌, 다른 사람과는 다른 특별한 유대감이 생기는 순간 당신은 이미 돌아올 수 없는 강을 건뜁니다. 감정의 깊이가 남다른 타입으로, 한번 깊이 빠지면 빠져나오는 데 오랜 시간이 걸립니다. 가장 강렬하게 사랑하지만 그만큼 이별도 가장 힘든 타입입니다.',
      'It’s not just butterflies—it’s the sense of a bond that feels different from anyone else. In that moment you’ve crossed a river you can’t easily return across. You love with unusual depth; getting out takes a long time. You love the hardest—and breakups hit you hardest.',
      '単なるドキドキではなく、この人となら深く繋がっている気がする感覚。他の誰とも違う特別な絆が生まれた瞬間、もう戻れない川を渡っている。一度深くハマると抜けるのに時間がかかる。一番強く愛する分、別れも一番つらいタイプ。',
      '不只是心动，而是感到和对方有「和别人不一样的深层纽带」。那一刻你已经过了很难回头的河。你爱得深、抽身也慢；爱得最烈，分手也最痛。',
      '不只是心動，而是感到和對方有「和別人不一樣的深層紐帶」。那一刻你已經過了很難回頭的河。你愛得深、抽身也慢；愛得最烈，分手也最痛。',
      'Không chỉ rung động—mà là cảm giác gắn kết khác biệt. Khoảnh khắc đó bạn đã qua dòng sông khó quay lại. Yêu sâu, thoát ra lâu; yêu mạnh nhất—chia tay cũng đau nhất.',
      'Bukan sekadar deg-degan—ada ikatan yang terasa berbeda. Saat itu kamu sudah menyeberangi sungai yang sulit kembali. Cinta dalam, susah lepas; paling kuat mencintai—putus juga paling berat.'
    ),
    typeLabel: M(
      '연애 약점 유형: 감정 심층 연결형',
      'Dating weak spot: Deep emotional bond type',
      '恋愛の弱点タイプ：感情深層接続型',
      '恋爱弱点类型：深层情感连结型',
      '戀愛弱點類型：深層情感連結型',
      'Điểm yếu khi yêu: Gắn kết cảm xúc sâu',
      'Titik lemah asmara: Ikatan emosi dalam'
    ),
    collapseMoment: M(
      '이 사람과 나는 뭔가 다르게 연결된 것 같다는 감각이 오는 순간',
      'The moment you sense: “Our connection isn’t like the others.”',
      '「この人とは何か違う繋がりがある」と感じる瞬間',
      '感到「和这个人的连结不一样」的瞬间',
      '感到「和這個人的連結不一樣」的瞬間',
      'Khoảnh khắc cảm thấy “Kết nối của mình khác biệt.”',
      'Saat merasa “Ikatan kita ini berbeda.”'
    ),
    fatalWeakness: M(
      '깊은 감정 연결 후 이성적 판단이 거의 불가능해짐',
      'After a deep bond forms, rational judgment nearly disappears.',
      '深い感情の接続の後、理性的判断がほぼ不可能になる',
      '深层情感连结后，理性判断几乎失灵',
      '深層情感連結後，理性判斷幾乎失靈',
      'Sau khi gắn sâu, phán đoán lý trí gần như biến mất.',
      'Setelah ikatan dalam, penilaian rasional hampir hilang.'
    ),
    dangerSignal: M(
      '깊은 연결감이 착각일 수 있음. 특별하다는 느낌을 의도적으로 만드는 사람에게 취약함',
      'Deep connection can be partly illusion—you’re vulnerable to people who manufacture “special.”',
      '深い繋がり感は錯覚のことも。「特別」を演出する人に弱い',
      '深层连结感也可能是错觉；容易被刻意制造「特别感」的人影响',
      '深層連結感也可能是錯覺；容易被刻意製造「特別感」的人影響',
      'Cảm giác gắn sâu đôi khi là ảo giác—dễ mắc người dựng cảm giác “đặc biệt.”',
      'Ikatan dalam bisa ilusi—rentan pada orang yang membuat kesan “istimewa.”'
    ),
    effectiveLine: M(
      '"너랑 있으면 나도 모르게 솔직해져. 처음이야 이런 거"',
      '“Around you I get honest without trying. I’ve never been like this.”',
      '「一緒にいると知らないうちに素直になれる。こんなの初めて」',
      '「和你在一起会不自觉坦诚。我从没这样过。」',
      '「和你在一起會不自覺坦誠。我從沒這樣過。」',
      '“Ở bên em, anh/chị thành thật mà không cố. Chưa bao giờ như vậy.”',
      '“Sama kamu aku jujur tanpa sadar. Belum pernah begini.”'
    ),
    prescription: M(
      '깊은 연결감은 소중하지만 그것이 형성되는 데 충분한 시간이 필요합니다. 빠르게 형성된 연결감은 빠르게 사라질 수 있습니다.',
      'Deep bonds are precious—but they need time to form. Bonds that form too fast can fade fast too.',
      '深い繋がりは大切だけど、育つには時間が必要。急にできた繋がりは急に消えることもある。',
      '深层连结很珍贵，但需要时间养成；来得太快的连结也可能去得快。',
      '深層連結很珍貴，但需要時間養成；來得太快的連結也可能去得快。',
      'Gắn sâu quý—nhưng cần thời gian. Gắn quá nhanh có thể tan nhanh.',
      'Ikatan dalam berharga—tapi butuh waktu. Yang terlalu cepat bisa pudar cepat.'
    ),
    goodMatch: M(
      'Type 5 (시간을 들여 신뢰를 쌓고 깊어지는 관계)',
      'Type 5 (a bond that deepens slowly through trust)',
      'Type 5（時間をかけて信頼を積み、深まる関係）',
      'Type 5（慢慢堆信任、越走越深的关系）',
      'Type 5（慢慢堆信任、越走越深的關係）',
      'Type 5 (mối quan hệ sâu dần nhờ tin cậy theo thời gian)',
      'Type 5 (hubungan yang dalam perlahan lewat kepercayaan)'
    ),
    vulnerableTo: M(
      '깊은 연결감을 만드는 데 능숙하지만 진심이 없는 사람',
      'People skilled at creating “deep connection” vibes—without real intent.',
      '深い繋がり感を巧みに作るのに、本気がない人',
      '很会营造深层连结感、却没有真心的人',
      '很會營造深層連結感、卻沒有真心的人',
      'Giỏi tạo cảm giác gắn sâu—nhưng không chân thành.',
      'Pandai membuat kesan ikatan dalam—tanpa niat tulus.'
    ),
    shareTypeName: M(
      '감정 심층 연결형',
      'Deep emotional bond type',
      '感情深層接続型',
      '深层情感连结型',
      '深層情感連結型',
      'Gắn kết cảm xúc sâu',
      'Ikatan emosi dalam'
    ),
  },
];
