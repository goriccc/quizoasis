/** 지금 연애를 시작하면 잘될 확률은? — phase3-start-love-success · 10문항 4지선다 · 1~4점 합산(10~40) · 5구간 */
export type Phase3StartLoveSuccessLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3StartLoveSuccessLocaleKey, string>;

function L(text: LocaleText): LocaleText {
  return text;
}

export type Phase3StartLoveSuccessAreaId =
  | 'margin'
  | 'closure'
  | 'reason'
  | 'balance'
  | 'alone'
  | 'standard'
  | 'conflict'
  | 'worth'
  | 'setting'
  | 'first';

export const PHASE3_START_LOVE_SUCCESS_AREA_LABELS: Record<Phase3StartLoveSuccessAreaId, LocaleText> = {
  margin: L(
    {
      ko: "마음 여유",
      en: "Room to feel",
      ja: "心の余裕",
      "zh-CN": "心里的余力",
      "zh-TW": "心裡的餘力",
      vi: "Sự thư thái",
      id: "Kelonggaran hati",
    }
  ),
  closure: L(
    {
      ko: "이전 연애 정리",
      en: "Closure",
      ja: "前の恋の整理",
      "zh-CN": "上一段的收尾",
      "zh-TW": "上一段的收尾",
      vi: "Khép lại mối cũ",
      id: "Menutup yang lama",
    }
  ),
  reason: L(
    {
      ko: "시작 이유",
      en: "Why you want this",
      ja: "始める理由",
      "zh-CN": "开始的理由",
      "zh-TW": "開始的理由",
      vi: "Lý do bắt đầu",
      id: "Alasan mulai",
    }
  ),
  balance: L(
    {
      ko: "일상 균형",
      en: "Daily balance",
      ja: "日常のバランス",
      "zh-CN": "生活平衡",
      "zh-TW": "生活平衡",
      vi: "Cân bằng ngày thường",
      id: "Keseimbangan harian",
    }
  ),
  alone: L(
    {
      ko: "외로움",
      en: "Loneliness",
      ja: "寂しさ",
      "zh-CN": "孤独感",
      "zh-TW": "孤獨感",
      vi: "Nỗi cô đơn",
      id: "Kesepian",
    }
  ),
  standard: L(
    {
      ko: "관계 기준",
      en: "What you want",
      ja: "関係の基準",
      "zh-CN": "想要的关系",
      "zh-TW": "想要的關係",
      vi: "Mối quan hệ bạn muốn",
      id: "Hubungan yang diinginkan",
    }
  ),
  conflict: L(
    {
      ko: "갈등 대처",
      en: "Handling conflict",
      ja: "ぶつかり方",
      "zh-CN": "处理矛盾",
      "zh-TW": "處理衝突",
      vi: "Xử lý mâu thuẫn",
      id: "Menghadapi konflik",
    }
  ),
  worth: L(
    {
      ko: "자기 가치",
      en: "Self-worth",
      ja: "自分の価値",
      "zh-CN": "自我价值",
      "zh-TW": "自我價值",
      vi: "Giá trị bản thân",
      id: "Nilai diri",
    }
  ),
  setting: L(
    {
      ko: "만남 환경",
      en: "Room to meet",
      ja: "出会える環境",
      "zh-CN": "见面的条件",
      "zh-TW": "見面的條件",
      vi: "Điều kiện gặp gỡ",
      id: "Kesempatan bertemu",
    }
  ),
  first: L(
    {
      ko: "시작 마음",
      en: "Feelings about starting",
      ja: "始める気持ち",
      "zh-CN": "起步的心情",
      "zh-TW": "起步的心情",
      vi: "Tâm thế bắt đầu",
      id: "Perasaan untuk mulai",
    }
  ),
};

export interface Phase3StartLoveSuccessQuestion {
  id: number;
  area: Phase3StartLoveSuccessAreaId;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3StartLoveSuccessResult {
  type: string;
  emoji: string;
  probability: number;
  min: number;
  max: number;
  title: LocaleText;
  gaugeLabel: LocaleText;
  levelLine: LocaleText;
  shortDescription: LocaleText;
  description: LocaleText;
  scoreRange: LocaleText;
  keywords: LocaleText;
  strengths: LocaleText;
  tips: LocaleText;
  counseling: LocaleText;
  oneLiner: LocaleText;
  shareLine: LocaleText;
}

export const PHASE3_START_LOVE_SUCCESS_MIN = 10;
export const PHASE3_START_LOVE_SUCCESS_MAX = 40;

export const PHASE3_START_LOVE_SUCCESS_META = {
  title: L(
    {
      ko: "지금 연애를 시작하면 잘될 확률은?",
      en: "If I start dating now, what are the odds?",
      ja: "今、恋愛を始めたらうまくいく確率は？",
      "zh-CN": "现在开始恋爱，能顺利的概率是多少？",
      "zh-TW": "現在開始談戀愛，會順利的機率是多少？",
      vi: "Nếu bắt đầu yêu ngay bây giờ, khả năng ổn là bao nhiêu?",
      id: "Kalau mulai pacaran sekarang, peluangnya lancar berapa?",
    }
  ),
  description: L(
    {
      ko: "10가지 상황에서 마음 여유, 이전 연애의 정리, 일상의 균형을 점수로 합산해 지금 연애를 시작했을 때의 성공 확률을 알려드립니다.",
      en: "Ten situations add up your room to feel, how finished the last relationship is, and how steady your days are. You get the odds that dating would go well if you started now.",
      ja: "10の場面から、心の余裕、前の恋の整理、日常のバランスを点数にして、今恋愛を始めたらうまくいく確率を出します。",
      "zh-CN": "用10个情境，把心里的余力、上一段感情有没有放下、生活是否平衡加成分数，告诉你现在开始恋爱能顺利的概率。",
      "zh-TW": "用10個情境，把心裡的餘力、上一段感情有沒有放下、生活是否平衡加成分數，告訴你現在開始談戀愛會順利的機率。",
      vi: "Mười tình huống cộng điểm sự thư thái, việc khép lại mối cũ và cân bằng ngày thường, rồi cho bạn khả năng một mối quan hệ sẽ ổn nếu bắt đầu ngay.",
      id: "Sepuluh situasi menjumlahkan kelonggaran hati, seberapa selesai hubungan yang lalu, dan keseimbangan harimu, lalu memberi peluang pacaran berjalan baik jika kamu mulai sekarang.",
    }
  ),
  tags: {
    ko: ["솔로탈출", "연애타이밍", "연애테스트"],
    en: ["ready to date", "when to date", "dating quiz"],
    ja: ["恋愛を始める", "恋愛のタイミング", "恋愛診断"],
    "zh-CN": ["脱单", "恋爱时机", "恋爱测试"],
    "zh-TW": ["脫單", "戀愛時機", "戀愛測驗"],
    vi: ["thoát ế", "thời điểm yêu", "test tình yêu"],
    id: ["lepas jomblo", "waktu mulai pacaran", "tes pacaran"],
  },
};

const opt = (text: LocaleText, score: number) => ({ text, score });

export const phase3StartLoveSuccessQuestions: Phase3StartLoveSuccessQuestion[] = [
  {
    id: 1,
    area: "margin",
    question: L(
      {
        ko: "요즘 내 마음의 여유는 어느 정도인가? 나는?",
        en: "How much room do you have for someone new these days?",
        ja: "最近、新しい人を迎える心の余裕はどのくらい？",
        "zh-CN": "最近，你心里还有多少余力给一段新感情？",
        "zh-TW": "最近，你心裡還有多少餘力給一段新感情？",
        vi: "Dạo này bạn còn thư thái đến mức nào để gặp người mới?",
        id: "Belakangan ini, seberapa longgar hatimu untuk orang baru?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "새로운 사람을 만날 여유가 충분히 있다",
          en: "I have plenty of room to meet someone new",
          ja: "新しい人に会う余裕は十分ある",
          "zh-CN": "完全有余力去认识新的人",
          "zh-TW": "完全有餘力去認識新的人",
          vi: "Mình còn đủ thư thái để gặp người mới",
          id: "Aku masih longgar untuk kenalan dengan orang baru",
        }
      ), 4),
      opt(L(
        {
          ko: "조금 바쁘지만 마음을 쓸 자리는 있다",
          en: "I'm a bit busy, but there's still space for someone",
          ja: "少し忙しいけど、気持ちを向ける余白はある",
          "zh-CN": "有点忙，但还留得下心思",
          "zh-TW": "有點忙，但還留得下心思",
          vi: "Hơi bận, nhưng vẫn còn chỗ để quan tâm ai đó",
          id: "Sedikit sibuk, tapi masih ada tempat untuk seseorang",
        }
      ), 3),
      opt(L(
        {
          ko: "일상만으로도 벅차서 여유가 많지 않다",
          en: "Daily life already fills me up. There isn't much room left",
          ja: "日常だけで手いっぱいで、余裕はあまりない",
          "zh-CN": "应付日常就已经够呛，没什么余力",
          "zh-TW": "應付日常就已經夠嗆，沒什麼餘力",
          vi: "Ngày thường đã ngập đầu, chẳng còn mấy sự thư thái",
          id: "Urusan sehari-hari saja sudah penuh, nyaris tidak ada sisa",
        }
      ), 2),
      opt(L(
        {
          ko: "나를 돌보기도 힘들어 누굴 만날 상황이 아니다",
          en: "Looking after myself is already hard. This isn't the time to meet anyone",
          ja: "自分を世話するだけでも精いっぱいで、誰かに会う状況じゃない",
          "zh-CN": "照顾自己都吃力，现在不是见人的时候",
          "zh-TW": "照顧自己都吃力，現在不是見人的時候",
          vi: "Chăm sóc bản thân còn khó, không phải lúc gặp ai",
          id: "Mengurus diri sendiri saja sudah berat, bukan waktunya bertemu siapa pun",
        }
      ), 1),
    ],
  },
  {
    id: 2,
    area: "closure",
    question: L(
      {
        ko: "이전 연애나 짝사랑을 떠올리면? 나는?",
        en: "When an old relationship or crush comes to mind, you...",
        ja: "前の恋や片思いを思い出すと？",
        "zh-CN": "想起上一段恋爱或暗恋时，你是？",
        "zh-TW": "想起上一段戀愛或暗戀時，你是？",
        vi: "Khi nhớ lại mối cũ hoặc crush trước, bạn...",
        id: "Kalau teringat mantan atau crush yang dulu, kamu...",
      }
    ),
    options: [
      opt(L(
        {
          ko: "아직 자주 생각나고 마음 정리가 안 됐다",
          en: "I still think about them a lot. I'm not over it",
          ja: "まだよく思い出すし、気持ちの整理がついていない",
          "zh-CN": "还是经常想起，心里没放下",
          "zh-TW": "還是常常想起，心裡沒放下",
          vi: "Vẫn hay nhớ, chưa dứt được",
          id: "Masih sering teringat, belum benar-benar selesai",
        }
      ), 1),
      opt(L(
        {
          ko: "담담하게 추억으로 떠올릴 수 있다",
          en: "I can look back on it calmly, as a memory",
          ja: "落ち着いて、思い出として振り返れる",
          "zh-CN": "可以平静地当成一段回忆",
          "zh-TW": "可以平靜地當成一段回憶",
          vi: "Có thể nhớ lại một cách bình thản, như một kỷ niệm",
          id: "Bisa mengenangnya dengan tenang, sebagai kenangan",
        }
      ), 4),
      opt(L(
        {
          ko: "가끔 생각나지만 일상엔 영향이 없다",
          en: "It crosses my mind sometimes, but it doesn't touch my days",
          ja: "たまに思い出すけど、日常には影響しない",
          "zh-CN": "偶尔会想起来，但不影响生活",
          "zh-TW": "偶爾會想起來，但不影響生活",
          vi: "Thỉnh thoảng nhớ, nhưng không ảnh hưởng ngày thường",
          id: "Kadang teringat, tapi tidak mengganggu hari-hari",
        }
      ), 3),
      opt(L(
        {
          ko: "떠올리면 아직 마음이 조금 아프다",
          en: "Thinking about it still stings a little",
          ja: "思い出すと、まだ少し胸が痛む",
          "zh-CN": "想起来心里还是有点疼",
          "zh-TW": "想起來心裡還是有點疼",
          vi: "Nhớ lại vẫn còn hơi đau",
          id: "Kalau teringat, masih sedikit perih",
        }
      ), 2),
    ],
  },
  {
    id: 3,
    area: "reason",
    question: L(
      {
        ko: "연애를 시작하려는 이유는 무엇인가? 나는?",
        en: "Why do you want to start dating?",
        ja: "恋愛を始めたい理由は？",
        "zh-CN": "你想开始恋爱的理由是？",
        "zh-TW": "你想開始談戀愛的理由是？",
        vi: "Vì sao bạn muốn bắt đầu yêu?",
        id: "Kenapa kamu ingin mulai pacaran?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "주변이 다 연애해서 나도 해야 할 것 같다",
          en: "Everyone around me is dating, so I feel like I should be too",
          ja: "周りがみんな恋していて、自分もした方がいい気がする",
          "zh-CN": "身边人都在恋爱，觉得自己也该谈",
          "zh-TW": "身邊人都在談戀愛，覺得自己也該談",
          vi: "Xung quanh ai cũng đang yêu, mình thấy mình cũng phải có người",
          id: "Orang di sekeliling sudah pada pacaran, jadi rasanya aku juga harus",
        }
      ), 2),
      opt(L(
        {
          ko: "외로움을 빨리 채우고 싶은 마음이 크다",
          en: "Mostly, I want to fill the loneliness, and I want it fast",
          ja: "寂しさを早く埋めたい気持ちが大きい",
          "zh-CN": "很想快点填上这份孤独",
          "zh-TW": "很想快點填上這份孤獨",
          vi: "Chủ yếu là muốn lấp chỗ cô đơn cho nhanh",
          id: "Yang paling kuat adalah ingin cepat mengisi rasa sepi",
        }
      ), 1),
      opt(L(
        {
          ko: "좋은 사람과 서로 성장하는 관계를 원한다",
          en: "I want a relationship where we both grow",
          ja: "いい人と、お互い成長できる関係がほしい",
          "zh-CN": "想要一段能和对方一起变好的关系",
          "zh-TW": "想要一段能和對方一起變好的關係",
          vi: "Muốn một mối quan hệ cùng nhau lớn lên",
          id: "Ingin hubungan yang saling membuat kami tumbuh",
        }
      ), 4),
      opt(L(
        {
          ko: "함께하면 더 즐거울 것 같아 기대된다",
          en: "Life would be more fun with someone, and I'm looking forward to that",
          ja: "一緒にいたらもっと楽しそうで、楽しみ",
          "zh-CN": "觉得有人陪会更开心，挺期待的",
          "zh-TW": "覺得有人陪會更開心，挺期待的",
          vi: "Nghĩ rằng có người đồng hành sẽ vui hơn, và mình đang mong",
          id: "Rasanya akan lebih seru kalau ada yang menemani, dan aku menantikannya",
        }
      ), 3),
    ],
  },
  {
    id: 4,
    area: "balance",
    question: L(
      {
        ko: "내 일상(일·공부·취미)의 균형은? 나는?",
        en: "How balanced are your days (work, study, hobbies)?",
        ja: "日常（仕事・勉強・趣味）のバランスは？",
        "zh-CN": "你的日常（工作、学习、爱好）平衡吗？",
        "zh-TW": "你的日常（工作、學業、興趣）平衡嗎？",
        vi: "Ngày thường của bạn (việc, học, sở thích) có cân không?",
        id: "Seberapa seimbang harimu (kerja, kuliah, hobi)?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "대체로 안정적이고 조금만 조율하면 된다",
          en: "Mostly steady. A small adjustment would be enough",
          ja: "だいたい安定していて、少し調整すればいい",
          "zh-CN": "大体稳定，稍微调一调就行",
          "zh-TW": "大致穩定，稍微調一調就行",
          vi: "Nhìn chung ổn, chỉ cần chỉnh một chút",
          id: "Cukup stabil, tinggal disesuaikan sedikit",
        }
      ), 3),
      opt(L(
        {
          ko: "바쁜 시기라 연애에 쓸 시간이 빠듯하다",
          en: "It's a busy stretch. Time for dating would be tight",
          ja: "忙しい時期で、恋愛に使える時間はギリギリ",
          "zh-CN": "正忙，分给恋爱的时间会很紧",
          "zh-TW": "正忙，分給戀愛的時間會很緊",
          vi: "Đang bận, thời gian cho tình yêu sẽ eo hẹp",
          id: "Lagi sibuk, waktu untuk pacaran akan mepet",
        }
      ), 2),
      opt(L(
        {
          ko: "일상이 흔들려서 연애가 부담이 될 것 같다",
          en: "My days are unsteady, and dating would feel like one more weight",
          ja: "日常が揺れていて、恋愛は負担になりそう",
          "zh-CN": "生活本身就不稳，恋爱大概会变成负担",
          "zh-TW": "生活本身就不穩，戀愛大概會變成負擔",
          vi: "Ngày thường đang chao đảo, yêu thêm chắc sẽ thành gánh",
          id: "Hari-hari sedang goyah, pacaran kemungkinan jadi beban",
        }
      ), 1),
      opt(L(
        {
          ko: "안정적이라 연애와 병행할 시간도 확보된다",
          en: "Things are steady, and I can make time for a relationship too",
          ja: "安定していて、恋愛と両立する時間も取れる",
          "zh-CN": "生活稳，也腾得出时间和恋爱并行",
          "zh-TW": "生活穩，也騰得出時間和戀愛並行",
          vi: "Ổn định, vẫn dành được thời gian song song với yêu",
          id: "Stabil, dan masih ada waktu untuk pacaran bersamaan",
        }
      ), 4),
    ],
  },
  {
    id: 5,
    area: "alone",
    question: L(
      {
        ko: "나 혼자 있는 시간에 대한 나의 마음은? 나는?",
        en: "How do you feel about time alone?",
        ja: "一人でいる時間を、どう感じる？",
        "zh-CN": "独处的时候，你是什么心情？",
        "zh-TW": "獨處的時候，你是什麼心情？",
        vi: "Bạn thấy thế nào khi ở một mình?",
        id: "Bagaimana rasanya saat kamu sendirian?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "혼자서도 충분히 즐겁고 편안하다",
          en: "I'm genuinely content on my own",
          ja: "一人でも十分楽しくて、落ち着いていられる",
          "zh-CN": "一个人也够开心、够自在",
          "zh-TW": "一個人也夠開心、夠自在",
          vi: "Một mình cũng vui và thoải mái",
          id: "Sendirian pun sudah cukup senang dan nyaman",
        }
      ), 4),
      opt(L(
        {
          ko: "가끔 외롭지만 혼자 시간도 괜찮다",
          en: "I get lonely sometimes, but time alone is okay",
          ja: "たまに寂しいけど、一人の時間も悪くない",
          "zh-CN": "偶尔孤独，但独处也还行",
          "zh-TW": "偶爾孤獨，但獨處也還行",
          vi: "Thỉnh thoảng cô đơn, nhưng ở một mình cũng ổn",
          id: "Kadang sepi, tapi waktu sendiri juga tidak apa",
        }
      ), 3),
      opt(L(
        {
          ko: "혼자 있으면 불안해서 누군가 필요하다",
          en: "Being alone makes me anxious. I need someone around",
          ja: "一人だと不安で、誰かが必要になる",
          "zh-CN": "一个人就不安，需要有人在",
          "zh-TW": "一個人就不安，需要有人在",
          vi: "Ở một mình là bất an, cần có ai đó",
          id: "Kalau sendirian jadi cemas, butuh ada seseorang",
        }
      ), 2),
      opt(L(
        {
          ko: "혼자 있는 시간이 너무 공허하고 견디기 힘들다",
          en: "Time alone feels so empty that it's hard to sit with",
          ja: "一人の時間が空虚すぎて、耐えにくい",
          "zh-CN": "独处空得难受，很难熬",
          "zh-TW": "獨處空得難受，很難熬",
          vi: "Ở một mình trống trải đến khó chịu nổi",
          id: "Waktu sendiri terasa terlalu hampa, sulit ditahan",
        }
      ), 1),
    ],
  },
  {
    id: 6,
    area: "standard",
    question: L(
      {
        ko: "내가 연애에서 원하는 모습은 얼마나 분명한가? 나는?",
        en: "How clear are you about the relationship you want?",
        ja: "恋愛でほしい形は、どれくらいはっきりしている？",
        "zh-CN": "你想要的关系，自己清楚吗？",
        "zh-TW": "你想要的關係，自己清楚嗎？",
        vi: "Bạn đã rõ mình muốn một mối quan hệ như thế nào chưa?",
        id: "Seberapa jelas hubungan yang kamu inginkan?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "뭘 원하는지 잘 모르고 상대에게 맞출 생각이다",
          en: "I'm not sure what I want. I'll probably just fit around them",
          ja: "何がほしいかよく分からず、相手に合わせるつもり",
          "zh-CN": "不太知道自己要什么，准备顺着对方来",
          "zh-TW": "不太知道自己要什麼，準備順著對方來",
          vi: "Chưa rõ mình muốn gì, định chiều theo đối phương",
          id: "Belum tahu mau yang seperti apa, rencananya ikut saja dia",
        }
      ), 1),
      opt(L(
        {
          ko: "원하는 관계의 모습을 어느 정도 말할 수 있다",
          en: "I can say, roughly, what kind of relationship I want",
          ja: "ほしい関係の形は、ある程度言葉にできる",
          "zh-CN": "想要的关系，大体能说出来",
          "zh-TW": "想要的關係，大致能說出來",
          vi: "Có thể nói ra, khá rõ, mối quan hệ mình muốn",
          id: "Aku bisa menjelaskan, setidaknya secara garis besar, hubungan yang aku mau",
        }
      ), 4),
      opt(L(
        {
          ko: "대략적인 기준은 있고 만나며 조율하려 한다",
          en: "I have a rough sense of it, and I'll adjust as we get to know each other",
          ja: "大まかな基準はあって、会いながら調整するつもり",
          "zh-CN": "有个大概的标准，打算边相处边调整",
          "zh-TW": "有個大概的標準，打算邊相處邊調整",
          vi: "Có tiêu chuẩn sơ sơ, và sẽ chỉnh dần khi quen nhau",
          id: "Ada patokan kasar, dan akan disesuaikan sambil mengenal",
        }
      ), 3),
      opt(L(
        {
          ko: "막연하게 좋은 사람이면 된다고 생각한다",
          en: "I just think a good person is enough. It's still vague",
          ja: "なんとなく、いい人ならいいと思っている",
          "zh-CN": "模模糊糊觉得，人好就行",
          "zh-TW": "模模糊糊覺得，人好就行",
          vi: "Chỉ nghĩ đại khái là người tốt là được",
          id: "Masih samar, yang penting orangnya baik",
        }
      ), 2),
    ],
  },
  {
    id: 7,
    area: "conflict",
    question: L(
      {
        ko: "상대와 갈등이 생겼을 때 나는 어떻게 대처할 것 같은가? 나는?",
        en: "If the two of you clash, how do you think you'd handle it?",
        ja: "相手とぶつかったら、自分はどうしそう？",
        "zh-CN": "和对方起了冲突，你大概会怎么做？",
        "zh-TW": "和對方起了衝突，你大概會怎麼做？",
        vi: "Nếu hai người va vào nhau, bạn nghĩ mình sẽ xử lý thế nào?",
        id: "Kalau kalian bentrok, menurutmu kamu akan bagaimana?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "불편해서 일단 피하고 시간이 지나길 기다린다",
          en: "It's uncomfortable, so I'd avoid it and wait for time to pass",
          ja: "気まずくて、いったん避けて時間が過ぎるのを待つ",
          "zh-CN": "不舒服，先躲开，等时间过去",
          "zh-TW": "不舒服，先躲開，等時間過去",
          vi: "Khó chịu nên né trước, chờ thời gian trôi",
          id: "Tidak enak, jadi menghindar dulu dan menunggu waktu berlalu",
        }
      ), 2),
      opt(L(
        {
          ko: "감정이 앞서 크게 다투거나 연락을 끊을 것 같다",
          en: "Feelings would take over. I'd blow up, or cut contact",
          ja: "感情が先に出て、大きくぶつかるか、連絡を絶ちそう",
          "zh-CN": "情绪会抢先，可能大吵一架，或者直接断联",
          "zh-TW": "情緒會搶先，可能大吵一架，或是直接斷聯",
          vi: "Cảm xúc lên trước, dễ cãi lớn hoặc cắt liên lạc",
          id: "Emosi duluan, bisa jadi bertengkar besar atau memutus kontak",
        }
      ), 1),
      opt(L(
        {
          ko: "감정이 가라앉으면 차분히 대화로 풀려고 한다",
          en: "Once I've cooled down, I'd try to talk it through",
          ja: "気持ちが落ち着いたら、落ち着いて話して解こうとする",
          "zh-CN": "等情绪平下来，会想冷静谈开",
          "zh-TW": "等情緒平下來，會想冷靜談開",
          vi: "Khi cảm xúc lắng xuống, mình sẽ cố nói cho rõ",
          id: "Setelah reda, aku akan mencoba membicarakannya dengan tenang",
        }
      ), 4),
      opt(L(
        {
          ko: "힘들겠지만 그날 안에 이야기해 보려고 노력한다",
          en: "It would be hard, but I'd try to talk about it the same day",
          ja: "つらいけど、その日のうちに話そうと努力する",
          "zh-CN": "会很难，但会尽量当天说开",
          "zh-TW": "會很難，但會盡量當天說開",
          vi: "Sẽ khó, nhưng mình sẽ cố nói trong ngày hôm đó",
          id: "Berat, tapi aku akan berusaha membicarakannya di hari yang sama",
        }
      ), 3),
    ],
  },
  {
    id: 8,
    area: "worth",
    question: L(
      {
        ko: "연애 중 나의 가치를 어떻게 느낄 것 같은가? 나는?",
        en: "In a relationship, how do you think you'd feel about your own worth?",
        ja: "恋愛中、自分の価値をどう感じそう？",
        "zh-CN": "谈恋爱时，你觉得自己会怎么看待自己的价值？",
        "zh-TW": "談戀愛時，你覺得自己會怎麼看待自己的價值？",
        vi: "Khi đang yêu, bạn nghĩ mình sẽ cảm nhận giá trị của bản thân thế nào?",
        id: "Saat pacaran, menurutmu kamu akan merasakan nilai dirimu seperti apa?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "가끔 흔들려도 대체로 나를 믿는 편이다",
          en: "I wobble sometimes, but I mostly trust myself",
          ja: "たまに揺れても、だいたい自分を信じている",
          "zh-CN": "偶尔会晃，但大体还是信自己",
          "zh-TW": "偶爾會晃，但大致還是信自己",
          vi: "Thỉnh thoảng dao động, nhưng nhìn chung vẫn tin mình",
          id: "Kadang goyah, tapi umumnya aku percaya pada diriku",
        }
      ), 3),
      opt(L(
        {
          ko: "상대의 반응에 따라 자존감이 오르내린다",
          en: "My self-esteem rises and falls with how they respond",
          ja: "相手の反応で、自己肯定感が上がったり下がったりする",
          "zh-CN": "自尊会跟着对方的反应起落",
          "zh-TW": "自尊會跟著對方的反應起落",
          vi: "Lòng tự trọng lên xuống theo phản ứng của đối phương",
          id: "Harga diriku naik turun mengikuti respons dia",
        }
      ), 2),
      opt(L(
        {
          ko: "사랑받을 자격이 있는지 자주 의심하게 된다",
          en: "I often wonder whether I deserve to be loved",
          ja: "愛される資格があるのか、よく疑ってしまう",
          "zh-CN": "常常怀疑自己配不配被爱",
          "zh-TW": "常常懷疑自己配不配被愛",
          vi: "Hay nghi mình có xứng đáng được yêu không",
          id: "Sering meragukan apakah aku layak dicintai",
        }
      ), 1),
      opt(L(
        {
          ko: "있는 그대로의 나도 충분하다고 느낀다",
          en: "I feel like I'm enough as I am",
          ja: "ありのままの自分でも十分だと感じる",
          "zh-CN": "觉得现在的自己就已经够好",
          "zh-TW": "覺得現在的自己就已經夠好",
          vi: "Cảm thấy mình như hiện tại là đủ",
          id: "Aku merasa diriku apa adanya sudah cukup",
        }
      ), 4),
    ],
  },
  {
    id: 9,
    area: "setting",
    question: L(
      {
        ko: "연애를 시작할 만한 환경(만남·시간·주변 지지)은? 나는?",
        en: "Do you have the setup to start dating: people to meet, time, and people in your corner?",
        ja: "恋愛を始められる環境（出会い・時間・周りの支え）は？",
        "zh-CN": "你有开始恋爱的条件吗？见面机会、时间、身边的支持。",
        "zh-TW": "你有開始談戀愛的條件嗎？見面機會、時間、身邊的支持。",
        vi: "Bạn có điều kiện để bắt đầu yêu không: cơ hội gặp, thời gian, người bên cạnh?",
        id: "Apakah kamu punya kondisi untuk mulai pacaran: kesempatan bertemu, waktu, dan dukungan sekitar?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "사람을 만날 기회와 시간이 충분히 마련돼 있다",
          en: "I have enough chances to meet people, and enough time",
          ja: "人と会う機会も時間も、十分ある",
          "zh-CN": "见面的机会和时间都够",
          "zh-TW": "見面的機會和時間都夠",
          vi: "Cơ hội gặp người và thời gian đều đủ",
          id: "Kesempatan bertemu orang dan waktunya cukup",
        }
      ), 4),
      opt(L(
        {
          ko: "마음먹으면 기회를 만들 수 있는 환경이다",
          en: "If I decide to, I can make the opportunities happen",
          ja: "その気になれば、機会は作れる環境だ",
          "zh-CN": "只要想，就能给自己创造机会",
          "zh-TW": "只要想，就能給自己創造機會",
          vi: "Nếu muốn, mình tạo được cơ hội",
          id: "Kalau aku memutuskan, aku bisa menciptakan kesempatannya",
        }
      ), 3),
      opt(L(
        {
          ko: "만날 기회도 시간도 많지 않은 편이다",
          en: "Neither the chances nor the time are plentiful",
          ja: "会う機会も時間も、あまり多くない",
          "zh-CN": "见面机会和时间都不算多",
          "zh-TW": "見面機會和時間都不算多",
          vi: "Cơ hội gặp và thời gian đều không nhiều",
          id: "Kesempatan bertemu maupun waktunya tidak banyak",
        }
      ), 2),
      opt(L(
        {
          ko: "당분간은 연애할 환경이 거의 되지 않는다",
          en: "For now, the setup for dating just isn't there",
          ja: "当分は、恋愛できる環境がほとんどない",
          "zh-CN": "眼下几乎不具备谈恋爱的条件",
          "zh-TW": "眼下幾乎不具備談戀愛的條件",
          vi: "Trước mắt gần như chưa có điều kiện để yêu",
          id: "Untuk sementara, kondisinya hampir tidak memungkinkan untuk pacaran",
        }
      ), 1),
    ],
  },
  {
    id: 10,
    area: "first",
    question: L(
      {
        ko: "지금 연애가 시작된다면 나의 첫 마음은? 나는?",
        en: "If a relationship started right now, what would your first feeling be?",
        ja: "今、恋愛が始まるなら、最初の気持ちは？",
        "zh-CN": "如果现在就开始一段恋爱，你的第一反应是？",
        "zh-TW": "如果現在就開始一段戀愛，你的第一反應是？",
        vi: "Nếu một mối quan hệ bắt đầu ngay lúc này, cảm giác đầu tiên của bạn là gì?",
        id: "Kalau hubungan mulai sekarang juga, perasaan pertamamu apa?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "지금은 도망치고 싶고 아직 이르다고 느낀다",
          en: "I'd want to run. It still feels too soon",
          ja: "今は逃げたくて、まだ早いと感じる",
          "zh-CN": "现在想逃，觉得还太早",
          "zh-TW": "現在想逃，覺得還太早",
          vi: "Muốn chạy, thấy vẫn còn sớm",
          id: "Ingin menghindar, rasanya masih terlalu cepat",
        }
      ), 1),
      opt(L(
        {
          ko: "설레면서도 차분하게 시작할 준비가 되어 있다",
          en: "I'm excited, and calm enough to start",
          ja: "ときめきつつ、落ち着いて始める準備ができている",
          "zh-CN": "心动，也平静，准备好开始了",
          "zh-TW": "心動，也平靜，準備好開始了",
          vi: "Hồi hộp, nhưng đủ bình tĩnh để bắt đầu",
          id: "Deg-degan, tapi cukup tenang untuk mulai",
        }
      ), 4),
      opt(L(
        {
          ko: "기대와 걱정이 반반이지만 해 볼 만하다",
          en: "Half excited, half worried, but it's worth a try",
          ja: "期待と不安は半々だけど、やってみる価値はある",
          "zh-CN": "期待和担心各一半，但值得试试",
          "zh-TW": "期待和擔心各一半，但值得試試",
          vi: "Mong và lo mỗi thứ một nửa, nhưng đáng thử",
          id: "Setengah harap, setengah khawatir, tapi layak dicoba",
        }
      ), 3),
      opt(L(
        {
          ko: "불안이 커서 확신이 서지 않지만 외로움은 크다",
          en: "I'm too uneasy to feel sure, but the loneliness is loud",
          ja: "不安が大きくて確信は持てない。ただ寂しさは大きい",
          "zh-CN": "不安很大、没什么把握，但孤独也很重",
          "zh-TW": "不安很大、沒什麼把握，但孤獨也很重",
          vi: "Bất an nhiều nên chưa chắc, nhưng nỗi cô đơn thì lớn",
          id: "Cemasnya besar sampai tidak yakin, tapi rasa sepinya juga besar",
        }
      ), 2),
    ],
  },
];

export const phase3StartLoveSuccessResults: Phase3StartLoveSuccessResult[] = [
  {
    type: "20",
    emoji: "🌧️",
    probability: 20,
    min: 10,
    max: 16,
    title: L(
      {
        ko: "성공 확률 20%",
        en: "20% chance it works out",
        ja: "うまくいく確率 20%",
        "zh-CN": "能顺利的概率 20%",
        "zh-TW": "會順利的機率 20%",
        vi: "Khả năng ổn 20%",
        id: "Peluang lancar 20%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "20%",
        en: "20%",
        ja: "20%",
        "zh-CN": "20%",
        "zh-TW": "20%",
        vi: "20%",
        id: "20%",
      }
    ),
    levelLine: L(
      {
        ko: "점수대 10~16점",
        en: "Score band 10–16",
        ja: "得点帯 10〜16点",
        "zh-CN": "分数段 10～16分",
        "zh-TW": "分數區間 10～16分",
        vi: "Khoảng điểm 10–16",
        id: "Rentang skor 10–16",
      }
    ),
    shortDescription: L(
      {
        ko: "지금은 연애보다 나를 돌보는 일이 먼저인 단계입니다.",
        en: "Right now, looking after yourself comes before dating.",
        ja: "今は恋愛より、自分を整えることが先の段階です。",
        "zh-CN": "现在这一步，先照顾好自己，比开始恋爱更重要。",
        "zh-TW": "現在這一步，先照顧好自己，比開始談戀愛更重要。",
        vi: "Lúc này, chăm sóc bản thân đến trước chuyện yêu.",
        id: "Saat ini, mengurus diri sendiri lebih dulu daripada mulai pacaran.",
      }
    ),
    description: L(
      {
        ko: "마음의 여유, 이전 연애의 정리, 일상의 균형 중 여러 곳이 비어 있어 시작해도 쉽게 지칠 수 있습니다. 못 하는 것이 아니라 준비 시간이 필요한 상태입니다.",
        en: "Several pieces are still thin: room in your life, closure on the last relationship, and a steady routine. Starting now could wear you out quickly. This is not a verdict that you cannot. You need a little time to get ready.",
        ja: "心の余裕、前の恋の整理、日常のバランスのどこかが空いていて、始めても疲れやすい状態です。できないのではなく、準備の時間が必要なだけです。",
        "zh-CN": "心里的余力、上一段感情的收尾、生活的平衡，有好几处还是空的。现在开始，很容易累垮。不是你不行，是还需要一段准备时间。",
        "zh-TW": "心裡的餘力、上一段感情的收尾、生活的平衡，有好幾處還是空的。現在開始，很容易累垮。不是你不行，是還需要一段準備時間。",
        vi: "Sự thư thái, việc khép lại mối cũ và cân bằng ngày thường còn trống nhiều chỗ. Bắt đầu lúc này dễ kiệt sức. Không phải bạn không làm được, mà là bạn cần thời gian chuẩn bị.",
        id: "Kelonggaran hati, penutupan hubungan lama, dan keseimbangan harian masih bolong di beberapa tempat. Mulai sekarang mudah membuatmu lelah. Bukan berarti kamu tidak mampu. Kamu hanya butuh waktu untuk siap.",
      }
    ),
    scoreRange: L(
      {
        ko: "10~16점",
        en: "10–16 points",
        ja: "10〜16点",
        "zh-CN": "10～16分",
        "zh-TW": "10～16分",
        vi: "10–16 điểm",
        id: "10–16 poin",
      }
    ),
    keywords: L(
      {
        ko: "여유 부족, 정리 필요, 회복, 준비 기간",
        en: "Thin bandwidth, Needs closure, Recovery, Time to get ready",
        ja: "余裕不足、整理が必要、回復、準備期間",
        "zh-CN": "余力不足，需要收尾，恢复，准备期",
        "zh-TW": "餘力不足，需要收尾，恢復，準備期",
        vi: "Thiếu thư thái, Cần khép lại, Hồi phục, Thời gian chuẩn bị",
        id: "Kelonggaran tipis, Perlu menutup yang lama, Pulih, Waktu bersiap",
      }
    ),
    strengths: L(
      {
        ko: "자기 상태를 솔직하게 돌아볼 수 있는 정직함",
        en: "You're honest enough to look at where you actually are",
        ja: "自分の状態を正直に見つめられること",
        "zh-CN": "能诚实看着自己现在的状态",
        "zh-TW": "能誠實看著自己現在的狀態",
        vi: "Thẳng thắn nhìn đúng chỗ mình đang đứng",
        id: "Jujur melihat keadaanmu yang sebenarnya",
      }
    ),
    tips: L(
      {
        ko: "한 달 동안 수면·식사·일상 루틴부터 안정시키기\n이전 연애에 대한 감정을 글로 정리해 마침표 찍기\n연애 대신 나를 채우는 활동(취미·운동·모임) 하나 시작하기",
        en: "Steady your sleep, meals, and daily rhythm for a month\nWrite out what you still feel about the last relationship, and put a period on it\nStart one thing that fills you up instead of dating: a hobby, exercise, or a small group",
        ja: "まずは1か月、睡眠・食事・日常のリズムを安定させる\n前の恋の気持ちを文章にして、いったん区切りをつける\n恋愛の代わりに、自分を満たすことを一つ始める（趣味・運動・集まり）",
        "zh-CN": "先用一个月把睡眠、吃饭和日常节奏稳住\n把对上一段感情的感觉写下来，给它画上句号\n先不做恋爱，开始一件能把自己填满的事：爱好、运动，或一个小聚会",
        "zh-TW": "先用一個月把睡眠、吃飯和日常節奏穩住\n把對上一段感情的感覺寫下來，給它畫上句號\n先不做戀愛，開始一件能把自己填滿的事：興趣、運動，或一個小聚會",
        vi: "Trong một tháng, ổn định ngủ, ăn và nhịp ngày thường trước\nViết ra cảm xúc về mối cũ và đặt dấu chấm\nThay vì yêu, bắt đầu một việc làm đầy mình: sở thích, vận động, hoặc một nhóm nhỏ",
        id: "Selama sebulan, stabilkan dulu tidur, makan, dan ritme harian\nTulis perasaan tentang hubungan yang lalu, lalu beri titik\nAlih-alih pacaran, mulai satu hal yang mengisi dirimu: hobi, olahraga, atau komunitas kecil",
      }
    ),
    counseling: L(
      {
        ko: "마음이 지쳐 일상이 힘들거나 외로움과 무기력이 오래 이어진다면 혼자 견디지 말고 심리상담 전문가나 지역 정신건강복지센터와 이야기해 보세요",
        en: "If you are worn out, daily life feels heavy, or loneliness and flatness have been hanging around, do not sit with it alone. Talk with a counselor or a local mental health service.",
        ja: "心が疲れて日常がつらい、寂しさや無気力が長く続いているなら、一人で抱えず、相談できる専門家や地域の相談窓口に話してみてください。",
        "zh-CN": "如果心里很累、日子很难过，或者孤独和提不起劲已经持续很久，不必一个人扛。可以和心理咨询师，或当地的心理支持机构聊聊。",
        "zh-TW": "如果心裡很累、日子很難過，或是孤獨和提不起勁已經持續很久，不必一個人扛。可以和心理諮商師，或當地的心理支持機構聊聊。",
        vi: "Nếu bạn kiệt sức, ngày thường trở nên nặng, hoặc cô đơn và mệt mỏi kéo dài, đừng chịu một mình. Hãy nói chuyện với chuyên gia tâm lý hoặc cơ sở hỗ trợ sức khỏe tâm thần ở địa phương.",
        id: "Jika hatimu lelah, hari-hari terasa berat, atau kesepian dan rasa hampa sudah berlangsung lama, jangan menahannya sendirian. Bicaralah dengan konselor atau layanan kesehatan mental di daerahmu.",
      }
    ),
    oneLiner: L(
      {
        ko: "준비 시간은 낭비가 아니라 좋은 시작을 위한 투자입니다",
        en: "Time to get ready is not wasted. It is what makes a good start possible.",
        ja: "準備の時間は無駄じゃなく、いいスタートのための投資です。",
        "zh-CN": "准备的时间不是浪费，是为了好好开始。",
        "zh-TW": "準備的時間不是浪費，是為了好好開始。",
        vi: "Thời gian chuẩn bị không phải lãng phí. Đó là khoản đầu tư cho một khởi đầu tốt.",
        id: "Waktu untuk siap bukan pemborosan. Itu investasi agar awalnya baik.",
      }
    ),
    shareLine: L(
      {
        ko: "지금 연애를 시작하면 잘될 확률: 20% 🌧️ ({score}점/40) 나를 돌보는 게 먼저래ㅠ 나 성공 확률 20% 나옴ㅋㅋ 너는 몇 %야?",
        en: "If I start dating now, the odds it goes well: 20% 🌧️ ({score}/40). Apparently I should look after myself first. I got 20%. What's yours?",
        ja: "今恋愛を始めたらうまくいく確率：20% 🌧️（{score}点/40）まずは自分を整える段階だって。私は20%。あなたは何%？",
        "zh-CN": "现在开始恋爱能顺利的概率：20% 🌧️（{score}分/40）结果是先把自己照顾好。我测出20%，你呢？",
        "zh-TW": "現在開始談戀愛會順利的機率：20% 🌧️（{score}分/40）結果是先把自己照顧好。我測出20%，你呢？",
        vi: "Xác suất ổn nếu bắt đầu yêu ngay: 20% 🌧️ ({score}/40). Hóa ra mình cần chăm sóc bản thân trước. Mình được 20%. Bạn bao nhiêu?",
        id: "Peluang pacaran lancar kalau mulai sekarang: 20% 🌧️ ({score}/40). Katanya aku harus urus diri dulu. Aku 20%. Kamu berapa?",
      }
    ),
  },
  {
    type: "40",
    emoji: "⛅",
    probability: 40,
    min: 17,
    max: 22,
    title: L(
      {
        ko: "성공 확률 40%",
        en: "40% chance it works out",
        ja: "うまくいく確率 40%",
        "zh-CN": "能顺利的概率 40%",
        "zh-TW": "會順利的機率 40%",
        vi: "Khả năng ổn 40%",
        id: "Peluang lancar 40%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "40%",
        en: "40%",
        ja: "40%",
        "zh-CN": "40%",
        "zh-TW": "40%",
        vi: "40%",
        id: "40%",
      }
    ),
    levelLine: L(
      {
        ko: "점수대 17~22점",
        en: "Score band 17–22",
        ja: "得点帯 17〜22点",
        "zh-CN": "分数段 17～22分",
        "zh-TW": "分數區間 17～22分",
        vi: "Khoảng điểm 17–22",
        id: "Rentang skor 17–22",
      }
    ),
    shortDescription: L(
      {
        ko: "지금은 시작해도 흔들릴 수 있는 단계입니다.",
        en: "You could start now, but it might still wobble.",
        ja: "今始めても、揺れやすい段階です。",
        "zh-CN": "现在开始也可以，但还容易晃。",
        "zh-TW": "現在開始也可以，但還容易晃。",
        vi: "Bắt đầu lúc này vẫn được, nhưng dễ chao.",
        id: "Bisa mulai sekarang, tapi masih mudah goyah.",
      }
    ),
    description: L(
      {
        ko: "마음은 있지만 외로움, 정리되지 않은 감정, 바쁜 일상 중 일부가 걸림돌이 됩니다. 한두 가지만 정리해도 확률이 크게 올라갑니다.",
        en: "The wish is there. Loneliness, feelings that are not finished, or a packed schedule is still in the way. Clear one or two of those and the odds jump.",
        ja: "気持ちはあるけど、寂しさ、整理しきれていない感情、忙しい日常のどれかが足を引っ張ります。一つか二つ片づけるだけで、確率はかなり上がります。",
        "zh-CN": "心意是有的，但孤独、没放下的情绪、忙乱的日常里，总有一两样挡着。先清掉其中一两件，概率会明显上去。",
        "zh-TW": "心意是有的，但孤獨、沒放下的情緒、忙亂的日常裡，總有一兩樣擋著。先清掉其中一兩件，機率會明顯上去。",
        vi: "Bạn có muốn, nhưng cô đơn, cảm xúc chưa khép, hoặc ngày thường quá bận vẫn đang chắn đường. Dọn một hai thứ đó là xác suất tăng rõ.",
        id: "Keinginannya ada, tapi kesepian, perasaan yang belum selesai, atau hari yang terlalu padat masih menghalangi. Bereskan satu atau dua hal itu, peluangnya naik cukup banyak.",
      }
    ),
    scoreRange: L(
      {
        ko: "17~22점",
        en: "17–22 points",
        ja: "17〜22点",
        "zh-CN": "17～22分",
        "zh-TW": "17～22分",
        vi: "17–22 điểm",
        id: "17–22 poin",
      }
    ),
    keywords: L(
      {
        ko: "흔들림, 외로움, 부분 준비, 정리 필요",
        en: "Wobble, Loneliness, Partly ready, Still to clear",
        ja: "揺れ、寂しさ、一部は準備できている、整理が必要",
        "zh-CN": "容易晃，孤独，准备了一部分，还要收尾",
        "zh-TW": "容易晃，孤獨，準備了一部分，還要收尾",
        vi: "Dễ chao, Cô đơn, Sẵn sàng một phần, Còn phải khép",
        id: "Masih goyah, Kesepian, Siap sebagian, Masih perlu ditutup",
      }
    ),
    strengths: L(
      {
        ko: "관계에 대한 의지와 기대가 살아 있음",
        en: "You still want a relationship, and that hope is alive",
        ja: "関係への意欲と期待が、まだ生きている",
        "zh-CN": "对一段关系的意愿和期待还在",
        "zh-TW": "對一段關係的意願和期待還在",
        vi: "Mong muốn và sự chờ đợi một mối quan hệ vẫn còn",
        id: "Keinginan dan harapan untuk punya hubungan masih hidup",
      }
    ),
    tips: L(
      {
        ko: "연애를 시작하려는 이유를 '외로움 말고' 한 줄로 적어 보기\n걸림돌 중 가장 큰 한 가지(정리·시간·불안)를 먼저 해결하기\n서두르지 않고 가벼운 만남부터 천천히 시작하기",
        en: "Write one line on why you want to date, and do not let loneliness be the whole answer\nDeal with the biggest block first: unfinished feelings, time, or anxiety\nDo not rush. Start with something light and slow",
        ja: "恋愛を始めたい理由を、寂しさ以外で一行書いてみる\n足を引っ張っている一番大きいもの（整理・時間・不安）を先に片づける\n焦らず、軽い出会いからゆっくり始める",
        "zh-CN": "用一句话写下你想恋爱的理由，别只剩因为孤独\n先处理最大的那一块：没收尾的情绪、时间，或不安\n别赶，从轻松的见面慢慢开始",
        "zh-TW": "用一句話寫下你想談戀愛的理由，別只剩因為孤獨\n先處理最大的那一塊：沒收尾的情緒、時間，或不安\n別趕，從輕鬆的見面慢慢開始",
        vi: "Viết một dòng vì sao bạn muốn yêu, đừng để vì cô đơn là tất cả\nXử lý thứ chắn lớn nhất trước: cảm xúc chưa khép, thời gian, hoặc lo\nĐừng vội. Bắt đầu từ những lần gặp nhẹ và chậm",
        id: "Tulis satu kalimat kenapa kamu ingin pacaran, jangan biarkan karena sepi jadi seluruh jawabannya\nSelesaikan dulu yang paling menghalangi: perasaan yang belum selesai, waktu, atau cemas\nJangan terburu. Mulai dari pertemuan yang ringan dan pelan",
      }
    ),
    counseling: L(
      {
        ko: "",
        en: "",
        ja: "",
        "zh-CN": "",
        "zh-TW": "",
        vi: "",
        id: "",
      }
    ),
    oneLiner: L(
      {
        ko: "걸림돌 하나를 치우면 길이 열립니다. 서두르지 말고 한 걸음씩 가세요",
        en: "Move one obstacle and the path opens. Do not rush. One step at a time.",
        ja: "障害を一つどければ道は開きます。焦らず、一歩ずつ。",
        "zh-CN": "挪开一块绊脚石，路就开了。别赶，一步一步来。",
        "zh-TW": "挪開一塊絆腳石，路就開了。別趕，一步一步來。",
        vi: "Dẹp một vật chắn là đường mở. Đừng vội, từng bước một.",
        id: "Singkirkan satu penghalang, jalannya terbuka. Jangan terburu, selangkah demi selangkah.",
      }
    ),
    shareLine: L(
      {
        ko: "지금 연애를 시작하면 잘될 확률: 40% ⛅ ({score}점/40) 걸림돌 하나만 치우면 된대... 너는 몇 %야? 점수 인증해줘",
        en: "If I start dating now, the odds it goes well: 40% ⛅ ({score}/40). Clear one thing and I'm good, apparently. What's yours? Show your score.",
        ja: "今恋愛を始めたらうまくいく確率：40% ⛅（{score}点/40）邪魔を一つどければいいんだって。あなたは何%？点数、見せて",
        "zh-CN": "现在开始恋爱能顺利的概率：40% ⛅（{score}分/40）说是清掉一件绊脚石就行。你多少？把分数亮出来",
        "zh-TW": "現在開始談戀愛會順利的機率：40% ⛅（{score}分/40）說是清掉一件絆腳石就行。你多少？把分數亮出來",
        vi: "Xác suất ổn nếu bắt đầu yêu ngay: 40% ⛅ ({score}/40). Dẹp một thứ là được, nghe vậy. Bạn bao nhiêu? Khoe điểm đi",
        id: "Peluang pacaran lancar kalau mulai sekarang: 40% ⛅ ({score}/40). Katanya cukup singkirkan satu penghalang. Kamu berapa? Tunjukkan skornya",
      }
    ),
  },
  {
    type: "60",
    emoji: "🌤️",
    probability: 60,
    min: 23,
    max: 28,
    title: L(
      {
        ko: "성공 확률 60%",
        en: "60% chance it works out",
        ja: "うまくいく確率 60%",
        "zh-CN": "能顺利的概率 60%",
        "zh-TW": "會順利的機率 60%",
        vi: "Khả năng ổn 60%",
        id: "Peluang lancar 60%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "60%",
        en: "60%",
        ja: "60%",
        "zh-CN": "60%",
        "zh-TW": "60%",
        vi: "60%",
        id: "60%",
      }
    ),
    levelLine: L(
      {
        ko: "점수대 23~28점",
        en: "Score band 23–28",
        ja: "得点帯 23〜28点",
        "zh-CN": "分数段 23～28分",
        "zh-TW": "分數區間 23～28分",
        vi: "Khoảng điểm 23–28",
        id: "Rentang skor 23–28",
      }
    ),
    shortDescription: L(
      {
        ko: "지금은 시작해 볼 만한 단계입니다.",
        en: "This is a reasonable time to start.",
        ja: "今は、始めてみる価値がある段階です。",
        "zh-CN": "现在是可以试着开始的阶段。",
        "zh-TW": "現在是可以試著開始的階段。",
        vi: "Đây là lúc đáng để bắt đầu thử.",
        id: "Ini waktu yang layak untuk mulai mencoba.",
      }
    ),
    description: L(
      {
        ko: "마음의 여유와 환경이 어느 정도 갖춰져 있고, 갈등 대처와 자기 가치감도 나쁘지 않습니다. 몇 가지 점검만 하면 안정적으로 시작할 수 있습니다.",
        en: "You have a fair amount of room, and the setup is mostly there. You handle conflict decently, and your sense of your own worth is not bad. A few checks, and you can start on solid ground.",
        ja: "心の余裕と環境はそこそこ整っていて、ぶつかり方と自分の価値の感じ方も悪くありません。いくつか点検すれば、安定して始められます。",
        "zh-CN": "心里的余力和身边的条件都有一些，处理矛盾和自我价值感也不差。再核对几处，就可以比较稳地开始。",
        "zh-TW": "心裡的餘力和身邊的條件都有一些，處理衝突和自我價值感也不差。再核對幾處，就可以比較穩地開始。",
        vi: "Sự thư thái và điều kiện xung quanh đã có phần. Cách xử lý mâu thuẫn và cảm nhận về bản thân cũng không tệ. Kiểm lại vài chỗ là có thể bắt đầu khá vững.",
        id: "Kelonggaran hati dan kondisinya sudah cukup ada. Cara menghadapi konflik dan rasa nilai diri juga tidak buruk. Cek beberapa hal, lalu kamu bisa mulai dengan lebih stabil.",
      }
    ),
    scoreRange: L(
      {
        ko: "23~28점",
        en: "23–28 points",
        ja: "23〜28点",
        "zh-CN": "23～28分",
        "zh-TW": "23～28分",
        vi: "23–28 điểm",
        id: "23–28 poin",
      }
    ),
    keywords: L(
      {
        ko: "시작 가능, 균형, 점검, 조율",
        en: "Ready to try, Balance, A few checks, Adjust as you go",
        ja: "始めてよい、バランス、点検、調整",
        "zh-CN": "可以开始，平衡，再核对，边走边调",
        "zh-TW": "可以開始，平衡，再核對，邊走邊調",
        vi: "Có thể bắt đầu, Cân bằng, Kiểm lại, Chỉnh dần",
        id: "Boleh mulai, Seimbang, Perlu dicek, Disesuaikan",
      }
    ),
    strengths: L(
      {
        ko: "현실적으로 상황을 보고 조율하며 시작하는 힘",
        en: "You can see the situation as it is, adjust, and still start",
        ja: "現実を見て、調整しながら始められる力",
        "zh-CN": "能看着实际情况，边调整边开始",
        "zh-TW": "能看著實際情況，邊調整邊開始",
        vi: "Nhìn đúng tình hình, chỉnh lại, rồi vẫn bắt đầu được",
        id: "Bisa melihat keadaan apa adanya, menyesuaikan, lalu tetap mulai",
      }
    ),
    tips: L(
      {
        ko: "내가 원하는 관계의 모습을 '꼭 필요한 3가지'로 정리하기\n갈등이 생길 때 쓸 대화 문장 하나를 미리 정해 두기\n일상 균형을 지키기 위해 혼자 시간과 만남 시간을 미리 나눠 두기",
        en: "Write the relationship you want as three things you actually need\nDecide one sentence you will use when a conflict shows up\nSplit solo time and time together in advance, so your days stay balanced",
        ja: "ほしい関係を、これだけはの3つに整理する\nぶつかったときに使う会話の一文を、先に決めておく\n日常のバランスのため、一人の時間と会う時間を先に分けておく",
        "zh-CN": "把你想要的关系写成不能少的三件事\n先准备好冲突时要用的一句话\n为了保住生活平衡，提前把独处时间和见面时间分开",
        "zh-TW": "把你想要的關係寫成不能少的三件事\n先準備好衝突時要用的一句話\n為了保住生活平衡，提前把獨處時間和見面時間分開",
        vi: "Viết mối quan hệ bạn muốn thành đúng 3 điều không thể thiếu\nSoạn sẵn một câu để nói khi có mâu thuẫn\nChia trước thời gian một mình và thời gian gặp, để ngày thường không lệch",
        id: "Tulis hubungan yang kamu mau menjadi 3 hal yang benar-benar perlu\nSiapkan satu kalimat untuk dipakai saat konflik muncul\nBagi dulu waktu sendiri dan waktu bertemu, supaya harimu tetap seimbang",
      }
    ),
    counseling: L(
      {
        ko: "",
        en: "",
        ja: "",
        "zh-CN": "",
        "zh-TW": "",
        vi: "",
        id: "",
      }
    ),
    oneLiner: L(
      {
        ko: "충분히 시작해 볼 만합니다. 기준을 정리하고 천천히 나아가세요",
        en: "It is worth starting. Get clear on what you want, then go slowly.",
        ja: "十分、始めてみる価値があります。基準を整理して、ゆっくり進んでください。",
        "zh-CN": "值得开始。先把标准理清，再慢慢走。",
        "zh-TW": "值得開始。先把標準理清，再慢慢走。",
        vi: "Đáng để bắt đầu. Xếp lại tiêu chuẩn, rồi đi chậm.",
        id: "Layak untuk dimulai. Rapikan dulu patokanmu, lalu jalan pelan.",
      }
    ),
    shareLine: L(
      {
        ko: "지금 연애를 시작하면 잘될 확률: 60% 🌤️ ({score}점/40) 시작해 볼 만하대ㅋㅋ 너는 몇 %야? 비교해보자",
        en: "If I start dating now, the odds it goes well: 60% 🌤️ ({score}/40). They say it is worth a try. What's yours? Let's compare.",
        ja: "今恋愛を始めたらうまくいく確率：60% 🌤️（{score}点/40）始めてみる価値があるって。あなたは何%？比べよ",
        "zh-CN": "现在开始恋爱能顺利的概率：60% 🌤️（{score}分/40）说是值得一试。你多少？来比比",
        "zh-TW": "現在開始談戀愛會順利的機率：60% 🌤️（{score}分/40）說是值得一試。你多少？來比比",
        vi: "Xác suất ổn nếu bắt đầu yêu ngay: 60% 🌤️ ({score}/40). Nghe nói đáng thử. Bạn bao nhiêu? So đi",
        id: "Peluang pacaran lancar kalau mulai sekarang: 60% 🌤️ ({score}/40). Katanya layak dicoba. Kamu berapa? Bandingkan",
      }
    ),
  },
  {
    type: "80",
    emoji: "☀️",
    probability: 80,
    min: 29,
    max: 34,
    title: L(
      {
        ko: "성공 확률 80%",
        en: "80% chance it works out",
        ja: "うまくいく確率 80%",
        "zh-CN": "能顺利的概率 80%",
        "zh-TW": "會順利的機率 80%",
        vi: "Khả năng ổn 80%",
        id: "Peluang lancar 80%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "80%",
        en: "80%",
        ja: "80%",
        "zh-CN": "80%",
        "zh-TW": "80%",
        vi: "80%",
        id: "80%",
      }
    ),
    levelLine: L(
      {
        ko: "점수대 29~34점",
        en: "Score band 29–34",
        ja: "得点帯 29〜34点",
        "zh-CN": "分数段 29～34分",
        "zh-TW": "分數區間 29～34分",
        vi: "Khoảng điểm 29–34",
        id: "Rentang skor 29–34",
      }
    ),
    shortDescription: L(
      {
        ko: "지금은 좋은 시작이 가능한 단계입니다.",
        en: "A good start is actually available to you right now.",
        ja: "今は、いいスタートが切れる段階です。",
        "zh-CN": "现在是可以好好开始的阶段。",
        "zh-TW": "現在是可以好好開始的階段。",
        vi: "Lúc này bạn có thể bắt đầu một cách tử tế.",
        id: "Saat ini kamu bisa memulai dengan baik.",
      }
    ),
    description: L(
      {
        ko: "마음의 여유, 정리, 자기 가치감, 환경이 대체로 잘 갖춰져 있습니다. 좋은 사람을 만나면 안정적인 관계로 이어질 가능성이 높습니다.",
        en: "Room in your life, closure, self-worth, and your setup are mostly in place. Meet the right person and it has a good chance of becoming something steady.",
        ja: "心の余裕、整理、自分の価値の感じ方、環境がだいたい整っています。いい人に出会えば、安定した関係につながりやすいです。",
        "zh-CN": "心里的余力、感情的收尾、自我价值、身边的条件大体都齐了。遇到合适的人，很有机会走成一段稳定的关系。",
        "zh-TW": "心裡的餘力、感情的收尾、自我價值、身邊的條件大致都齊了。遇到合適的人，很有機會走成一段穩定的關係。",
        vi: "Sự thư thái, việc khép lại, giá trị bản thân và điều kiện xung quanh nhìn chung đã có. Gặp đúng người thì khả năng đi thành một mối ổn là cao.",
        id: "Kelonggaran hati, penutupan, nilai diri, dan kondisinya secara umum sudah ada. Ketemu orang yang tepat, peluangnya besar untuk jadi hubungan yang stabil.",
      }
    ),
    scoreRange: L(
      {
        ko: "29~34점",
        en: "29–34 points",
        ja: "29〜34点",
        "zh-CN": "29～34分",
        "zh-TW": "29～34分",
        vi: "29–34 điểm",
        id: "29–34 poin",
      }
    ),
    keywords: L(
      {
        ko: "준비됨, 여유, 안정, 자기 신뢰",
        en: "Ready, Room to spare, Steady, Self-trust",
        ja: "準備できている、余裕、安定、自分を信じる",
        "zh-CN": "准备好了，有余力，稳定，信自己",
        "zh-TW": "準備好了，有餘力，穩定，信自己",
        vi: "Đã sẵn sàng, Còn thư thái, Ổn định, Tin mình",
        id: "Sudah siap, Masih longgar, Stabil, Percaya diri",
      }
    ),
    strengths: L(
      {
        ko: "혼자서도 편안하고 관계에서 중심을 잡는 안정감",
        en: "You are comfortable alone, and you can stay centered in a relationship",
        ja: "一人でも落ち着いていて、関係の中でも軸を持てる安定感",
        "zh-CN": "一个人也自在，在关系里也能稳住自己",
        "zh-TW": "一個人也自在，在關係裡也能穩住自己",
        vi: "Ở một mình cũng thoải mái, và giữ được mình trong mối quan hệ",
        id: "Nyaman sendirian, dan bisa tetap jadi pusat diri sendiri di dalam hubungan",
      }
    ),
    tips: L(
      {
        ko: "만남의 기회를 월 1~2회 의식적으로 늘리기\n호감이 생기면 마음을 가볍게 먼저 표현하기\n높은 준비도가 조급함으로 바뀌지 않게 상대의 속도도 살피기",
        en: "Deliberately add one or two chances to meet people each month\nIf you like someone, say so lightly, and say it first\nBeing ready is not a reason to rush. Watch their pace too",
        ja: "出会いの機会を、月に1〜2回は意識して増やす\n気になったら、気持ちを軽く先に伝えてみる\n準備ができていることが焦りにならないよう、相手のペースも見る",
        "zh-CN": "有意识地每个月多制造一两次见面机会\n有好感就先轻轻说出来\n准备得好，别变成着急。也看看对方的速度",
        "zh-TW": "有意識地每個月多製造一兩次見面機會\n有好感就先輕輕說出來\n準備得好，別變成著急。也看看對方的速度",
        vi: "Chủ ý tạo thêm một hai cơ hội gặp mỗi tháng\nThích ai thì nói trước, nói nhẹ\nSẵn sàng không có nghĩa là phải vội. Nhìn cả nhịp của đối phương",
        id: "Sengaja tambah satu atau dua kesempatan bertemu setiap bulan\nKalau ada rasa, sampaikan lebih dulu dengan ringan\nSiap bukan alasan untuk terburu. Perhatikan juga tempo dia",
      }
    ),
    counseling: L(
      {
        ko: "",
        en: "",
        ja: "",
        "zh-CN": "",
        "zh-TW": "",
        vi: "",
        id: "",
      }
    ),
    oneLiner: L(
      {
        ko: "준비된 마음은 좋은 인연을 알아봅니다. 기회를 조금만 넓혀 보세요",
        en: "A ready heart recognizes a good match. Widen the chances just a little.",
        ja: "準備できた心は、いい縁を見分けます。機会を少しだけ広げてみてください。",
        "zh-CN": "准备好的心认得好的缘分。把机会再打开一点。",
        "zh-TW": "準備好的心認得好的緣分。把機會再開一點。",
        vi: "Một trái tim đã sẵn sàng nhận ra duyên tốt. Hãy mở cơ hội thêm một chút.",
        id: "Hati yang sudah siap mengenali orang yang tepat. Lebarkan sedikit kesempatannya.",
      }
    ),
    shareLine: L(
      {
        ko: "지금 연애를 시작하면 잘될 확률: 80% ☀️ ({score}점/40) 좋은 시작 가능하대! 너는 몇 %야? 점수 인증 ㄱㄱ",
        en: "If I start dating now, the odds it goes well: 80% ☀️ ({score}/40). A good start is on the table. What's yours? Post your score.",
        ja: "今恋愛を始めたらうまくいく確率：80% ☀️（{score}点/40）いいスタートが切れるって！あなたは何%？点数出して",
        "zh-CN": "现在开始恋爱能顺利的概率：80% ☀️（{score}分/40）说是可以好好开始。你多少？把分数亮出来",
        "zh-TW": "現在開始談戀愛會順利的機率：80% ☀️（{score}分/40）說是可以好好開始。你多少？把分數亮出來",
        vi: "Xác suất ổn nếu bắt đầu yêu ngay: 80% ☀️ ({score}/40). Nghe nói có thể bắt đầu đẹp. Bạn bao nhiêu? Khoe điểm đi",
        id: "Peluang pacaran lancar kalau mulai sekarang: 80% ☀️ ({score}/40). Katanya bisa mulai dengan baik. Kamu berapa? Tunjukkan skornya",
      }
    ),
  },
  {
    type: "95",
    emoji: "🌈",
    probability: 95,
    min: 35,
    max: 40,
    title: L(
      {
        ko: "성공 확률 95%",
        en: "95% chance it works out",
        ja: "うまくいく確率 95%",
        "zh-CN": "能顺利的概率 95%",
        "zh-TW": "會順利的機率 95%",
        vi: "Khả năng ổn 95%",
        id: "Peluang lancar 95%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "95%",
        en: "95%",
        ja: "95%",
        "zh-CN": "95%",
        "zh-TW": "95%",
        vi: "95%",
        id: "95%",
      }
    ),
    levelLine: L(
      {
        ko: "점수대 35~40점",
        en: "Score band 35–40",
        ja: "得点帯 35〜40点",
        "zh-CN": "分数段 35～40分",
        "zh-TW": "分數區間 35～40分",
        vi: "Khoảng điểm 35–40",
        id: "Rentang skor 35–40",
      }
    ),
    shortDescription: L(
      {
        ko: "지금은 연애를 시작하기 가장 좋은 단계입니다.",
        en: "This is about as good a moment as it gets to start dating.",
        ja: "今は、恋愛を始めるのにいちばんいい段階です。",
        "zh-CN": "现在是开始恋爱最好的时候。",
        "zh-TW": "現在是開始談戀愛最好的時候。",
        vi: "Đây là lúc tốt nhất để bắt đầu yêu.",
        id: "Ini waktu terbaik untuk mulai pacaran.",
      }
    ),
    description: L(
      {
        ko: "마음의 여유와 정리, 일상 균형, 자기 신뢰, 환경이 모두 잘 갖춰져 있습니다. 좋은 사람을 만나면 건강하게 이어 갈 힘이 충분합니다. 다만 확률이 높다고 조급해지지 않도록 속도를 살피세요.",
        en: "Room, closure, a balanced life, self-trust, and your setup are all in good shape. Meet someone good and you have what it takes to keep it healthy. A high number is not a reason to rush. Watch the pace.",
        ja: "心の余裕、整理、日常のバランス、自分への信頼、環境がそろっています。いい人に出会えば、健やかに続けていく力は十分です。ただ、確率が高いからと焦らないよう、速度は見てください。",
        "zh-CN": "心里的余力、感情收尾、生活平衡、对自己的信任、身边的条件都齐了。遇到合适的人，你有足够的力气把关系走得健康。概率高也别着急，看着速度走。",
        "zh-TW": "心裡的餘力、感情收尾、生活平衡、對自己的信任、身邊的條件都齊了。遇到合適的人，你有足夠的力氣把關係走得健康。機率高也別著急，看著速度走。",
        vi: "Sự thư thái, việc khép lại, cân bằng ngày thường, niềm tin vào mình và điều kiện xung quanh đều ổn. Gặp đúng người, bạn đủ sức giữ mối quan hệ lành mạnh. Xác suất cao không phải lý do để vội. Nhìn nhịp đi.",
        id: "Kelonggaran hati, penutupan, keseimbangan harian, kepercayaan pada diri, dan kondisinya sudah lengkap. Ketemu orang yang tepat, kamu punya tenaga untuk menjaganya tetap sehat. Angka tinggi bukan alasan untuk terburu. Perhatikan temponya.",
      }
    ),
    scoreRange: L(
      {
        ko: "35~40점",
        en: "35–40 points",
        ja: "35〜40点",
        "zh-CN": "35～40分",
        "zh-TW": "35～40分",
        vi: "35–40 điểm",
        id: "35–40 poin",
      }
    ),
    keywords: L(
      {
        ko: "최상의 준비, 안정, 자기 신뢰, 균형, 건강한 시작",
        en: "Fully ready, Steady, Self-trust, Balance, A healthy start",
        ja: "最高の準備、安定、自分への信頼、バランス、健やかなスタート",
        "zh-CN": "准备到位，稳定，信自己，平衡，健康的开始",
        "zh-TW": "準備到位，穩定，信自己，平衡，健康的開始",
        vi: "Sẵn sàng nhất, Ổn định, Tin mình, Cân bằng, Khởi đầu lành",
        id: "Siap sepenuhnya, Stabil, Percaya diri, Seimbang, Awal yang sehat",
      }
    ),
    strengths: L(
      {
        ko: "혼자서도 단단하고 관계에서도 균형을 잡는 건강한 마음",
        en: "You are solid on your own, and you can keep a relationship balanced",
        ja: "一人でもしっかりしていて、関係の中でもバランスを取れる健全さ",
        "zh-CN": "一个人也站得住，在关系里也能保持平衡",
        "zh-TW": "一個人也站得住，在關係裡也能保持平衡",
        vi: "Một mình cũng vững, và giữ được cân bằng trong mối quan hệ",
        id: "Kokoh saat sendiri, dan bisa menjaga keseimbangan di dalam hubungan",
      }
    ),
    tips: L(
      {
        ko: "상대를 천천히 알아가며 내 기준과 맞는지 확인하기\n연애를 시작해도 혼자 시간과 일상 루틴 유지하기\n이 노하우를 친구들과 나누기. 당신의 준비 방식이 누군가의 힌트가 됩니다",
        en: "Get to know them slowly, and check whether they fit what you actually want\nEven after you start, keep your solo time and your routine\nShare how you got here with friends. The way you prepared might be someone else's hint",
        ja: "相手をゆっくり知りながら、自分の基準に合うか確かめる\n恋愛が始まっても、一人の時間と日常のリズムは残す\nこのやり方を友達と分ける。あなたの準備の仕方が、誰かのヒントになります",
        "zh-CN": "慢慢认识对方，看看是否符合你真正要的\n就算开始了，也留下独处时间和日常节奏\n把这套方法分享给朋友。你准备的方式，可能正是别人需要的提示",
        "zh-TW": "慢慢認識對方，看看是否符合你真正要的\n就算開始了，也留下獨處時間和日常節奏\n把這套方法分享給朋友。你準備的方式，可能正是別人需要的提示",
        vi: "Tìm hiểu họ chậm, và xem họ có khớp tiêu chuẩn của bạn không\nDù đã bắt đầu, vẫn giữ thời gian một mình và nhịp ngày thường\nChia cách bạn chuẩn bị với bạn bè. Cách của bạn có thể là gợi ý cho ai đó",
        id: "Kenali dia pelan-pelan, dan cek apakah dia sesuai dengan yang kamu mau\nMeski sudah mulai, pertahankan waktu sendiri dan ritme harian\nBagikan cara kamu menyiapkan diri ke teman. Cara itu bisa jadi petunjuk bagi orang lain",
      }
    ),
    counseling: L(
      {
        ko: "",
        en: "",
        ja: "",
        "zh-CN": "",
        "zh-TW": "",
        vi: "",
        id: "",
      }
    ),
    oneLiner: L(
      {
        ko: "준비된 마음은 가장 큰 자산입니다. 서두르지 말고 좋은 인연을 기다리세요",
        en: "A ready heart is the real asset. Do not rush. Wait for someone who fits.",
        ja: "準備できた心がいちばんの財産です。焦らず、いい縁を待ってください。",
        "zh-CN": "准备好的心是最大的本钱。别赶，等对的人。",
        "zh-TW": "準備好的心是最大的本錢。別趕，等對的人。",
        vi: "Một trái tim đã sẵn sàng là vốn lớn nhất. Đừng vội, đợi duyên hợp.",
        id: "Hati yang sudah siap adalah modal terbesar. Jangan terburu, tunggu orang yang pas.",
      }
    ),
    shareLine: L(
      {
        ko: "지금 연애를 시작하면 잘될 확률: 95% 🌈 ({score}점/40) 시작하기 최고의 타이밍이래ㅋㅋ 너는 몇 %야? 인증해봐",
        en: "If I start dating now, the odds it goes well: 95% 🌈 ({score}/40). Best moment to start, apparently. What's yours? Prove it.",
        ja: "今恋愛を始めたらうまくいく確率：95% 🌈（{score}点/40）始めるなら今が一番だって。あなたは何%？証拠出して",
        "zh-CN": "现在开始恋爱能顺利的概率：95% 🌈（{score}分/40）说是开始的最佳时机。你多少？亮出来看看",
        "zh-TW": "現在開始談戀愛會順利的機率：95% 🌈（{score}分/40）說是開始的最佳時機。你多少？亮出來看看",
        vi: "Xác suất ổn nếu bắt đầu yêu ngay: 95% 🌈 ({score}/40). Nghe nói đây là lúc đẹp nhất để bắt đầu. Bạn bao nhiêu? Chứng minh đi",
        id: "Peluang pacaran lancar kalau mulai sekarang: 95% 🌈 ({score}/40). Katanya ini waktu terbaik untuk mulai. Kamu berapa? Buktikan",
      }
    ),
  },
];

export function calculatePhase3StartLoveSuccessTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3StartLoveSuccessResult(total: number): Phase3StartLoveSuccessResult {
  return phase3StartLoveSuccessResults.find((item) => total >= item.min && total <= item.max) ?? phase3StartLoveSuccessResults[0];
}

/** 가장 낮게 나온 문항 영역. 동점이면 문항 순서대로 모두. 모든 문항이 같으면 빈 배열 */
export function getPhase3StartLoveSuccessObstacles(answers: number[]): Phase3StartLoveSuccessAreaId[] {
  const scores = phase3StartLoveSuccessQuestions.map((question) => answers[question.id - 1] ?? 0);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  if (min === max) return [];
  return phase3StartLoveSuccessQuestions.filter((_, index) => scores[index] === min).map((question) => question.area);
}
