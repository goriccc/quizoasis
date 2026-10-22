/** 크리스마스까지 솔로 탈출 확률 — phase3-christmas-solo-escape · 10문항 4지선다 · 1~4점 합산(10~40) · 5구간 */

export type Phase3ChristmasSoloEscapeLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

type LocaleText = Record<Phase3ChristmasSoloEscapeLocaleKey, string>;

function L(text: LocaleText): LocaleText {
  return text;
}

export type Phase3ChristmasSoloEscapeAreaId =
  | 'intro'
  | 'weekend'
  | 'approach'
  | 'app'
  | 'plan'
  | 'talk'
  | 'heart'
  | 'style'
  | 'party'
  | 'action';

export const PHASE3_CHRISTMAS_SOLO_ESCAPE_AREA_LABELS: Record<Phase3ChristmasSoloEscapeAreaId, LocaleText> = {
  intro: L(
    {
      ko: "소개 수락",
      en: "Taking an introduction",
      ja: "紹介を受ける",
      "zh-CN": "接受介绍",
      "zh-TW": "接受介紹",
      vi: "Nhận lời giới thiệu",
      id: "Menerima perkenalan",
    }
  ),
  weekend: L(
    {
      ko: "주말 외출",
      en: "Weekend plans",
      ja: "週末の外出",
      "zh-CN": "周末出门",
      "zh-TW": "週末出門",
      vi: "Cuối tuần ra ngoài",
      id: "Akhir pekan keluar",
    }
  ),
  approach: L(
    {
      ko: "호감 표현",
      en: "Showing interest",
      ja: "気持ちを伝える",
      "zh-CN": "表达好感",
      "zh-TW": "表達好感",
      vi: "Tỏ ý thích",
      id: "Menunjukkan rasa",
    }
  ),
  app: L(
    {
      ko: "소개 서비스",
      en: "Dating apps",
      ja: "マッチングアプリ",
      "zh-CN": "交友软件",
      "zh-TW": "交友軟體",
      vi: "App hẹn hò",
      id: "Aplikasi kencan",
    }
  ),
  plan: L(
    {
      ko: "크리스마스 계획",
      en: "Christmas plans",
      ja: "クリスマスの予定",
      "zh-CN": "圣诞安排",
      "zh-TW": "聖誕安排",
      vi: "Kế hoạch Giáng sinh",
      id: "Rencana Natal",
    }
  ),
  talk: L(
    {
      ko: "대화",
      en: "Conversation",
      ja: "会話",
      "zh-CN": "聊天",
      "zh-TW": "聊天",
      vi: "Trò chuyện",
      id: "Mengobrol",
    }
  ),
  heart: L(
    {
      ko: "마음의 준비",
      en: "Being ready",
      ja: "心の準備",
      "zh-CN": "心理准备",
      "zh-TW": "心理準備",
      vi: "Sự sẵn sàng",
      id: "Kesiapan hati",
    }
  ),
  style: L(
    {
      ko: "꾸미기",
      en: "How you show up",
      ja: "身だしなみ",
      "zh-CN": "打扮",
      "zh-TW": "打扮",
      vi: "Chăm ngoại hình",
      id: "Penampilan",
    }
  ),
  party: L(
    {
      ko: "모임 참석",
      en: "Showing up",
      ja: "集まりに行く",
      "zh-CN": "参加聚会",
      "zh-TW": "參加聚會",
      vi: "Đi họp mặt",
      id: "Datang ke kumpul-kumpul",
    }
  ),
  action: L(
    {
      ko: "행동 시작",
      en: "Actually starting",
      ja: "動き出す",
      "zh-CN": "开始行动",
      "zh-TW": "開始行動",
      vi: "Bắt đầu hành động",
      id: "Mulai bergerak",
    }
  ),
};

export interface Phase3ChristmasSoloEscapeQuestion {
  id: number;
  area: Phase3ChristmasSoloEscapeAreaId;
  question: LocaleText;
  options: { text: LocaleText; score: number }[];
}

export interface Phase3ChristmasSoloEscapeResult {
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

export const PHASE3_CHRISTMAS_SOLO_ESCAPE_MIN = 10;
export const PHASE3_CHRISTMAS_SOLO_ESCAPE_MAX = 40;

export const PHASE3_CHRISTMAS_SOLO_ESCAPE_META = {
  title: L(
    {
      ko: "크리스마스까지 솔로 탈출 확률",
      en: "What are the odds I meet someone by Christmas?",
      ja: "クリスマスまでに恋人ができる確率は？",
      "zh-CN": "到圣诞节能脱单的概率是多少？",
      "zh-TW": "到聖誕節能脫單的機率是多少？",
      vi: "Đến Giáng sinh, khả năng thoát ế là bao nhiêu?",
      id: "Sampai Natal, peluang lepas jomblo berapa?",
    }
  ),
  description: L(
    {
      ko: "10가지 상황에서 만남을 만들 준비와 행동을 점수로 합산해 크리스마스까지의 솔로 탈출 확률을 알려드립니다.",
      en: "Ten situations add up how ready you are to meet someone, and give you the odds of finding someone by Christmas.",
      ja: "10の場面から、出会いを作る準備と行動を点数にして、クリスマスまでに恋人ができる確率を出します。",
      "zh-CN": "用10个情境，把你制造见面的准备和行动加成分数，算出圣诞前脱单的概率。",
      "zh-TW": "用10個情境，把你製造見面的準備和行動加成分數，算出聖誕前脫單的機率。",
      vi: "Mười tình huống cộng điểm sự chuẩn bị và hành động để gặp ai đó, rồi cho ra khả năng thoát ế trước Giáng sinh.",
      id: "Sepuluh situasi menjumlahkan kesiapan dan tindakanmu untuk bertemu seseorang, lalu memberi peluang lepas jomblo sebelum Natal.",
    }
  ),
  tags: {
    ko: ["솔로탈출", "연애테스트"],
    en: ["single at Christmas", "dating quiz"],
    ja: ["クリスマスまでに恋人", "恋愛診断"],
    "zh-CN": ["圣诞脱单", "恋爱测试"],
    "zh-TW": ["聖誕脫單", "戀愛測驗"],
    vi: ["thoát ế Giáng sinh", "test tình yêu"],
    id: ["lepas jomblo Natal", "tes pacaran"],
  },
};

const opt = (text: LocaleText, score: number) => ({ text, score });

export const phase3ChristmasSoloEscapeQuestions: Phase3ChristmasSoloEscapeQuestion[] = [
  {
    id: 1,
    area: "intro",
    question: L(
      {
        ko: "주변에서 괜찮은 사람을 소개해 주겠다고 한다. 나는?",
        en: "Someone offers to introduce you to a person they think you would like. You...",
        ja: "周りが「いい人を紹介するよ」と言ってきた。あなたは？",
        "zh-CN": "身边人说要给你介绍一个不错的人。你会？",
        "zh-TW": "身邊人說要幫你介紹一個不錯的人。你會？",
        vi: "Có người muốn giới thiệu cho bạn một người ổn. Bạn...",
        id: "Seseorang menawarkan untuk mengenalkan orang yang cocok. Kamu...",
      }
    ),
    options: [
      opt(L(
        {
          ko: "좋다며 시간과 장소를 먼저 제안한다",
          en: "I say yes, and I suggest a time and place first",
          ja: "いいね、と自分から日時と場所を提案する",
          "zh-CN": "说好，并先提出时间和地点",
          "zh-TW": "說好，並先提出時間和地點",
          vi: "Đồng ý ngay và đề xuất thời gian, địa điểm trước",
          id: "Bilang mau, lalu mengusulkan waktu dan tempat duluan",
        }
      ), 4),
      opt(L(
        {
          ko: "고마워하며 일정이 맞으면 만나 보겠다고 답한다",
          en: "I thank them and say I will meet if the timing works",
          ja: "ありがとう、と答えて、予定が合えば会うと言う",
          "zh-CN": "道谢，说时间能对上就见一面",
          "zh-TW": "道謝，說時間能對上就見一面",
          vi: "Cảm ơn, và hẹn gặp nếu lịch trùng",
          id: "Berterima kasih, dan bilang akan ketemu kalau jadwalnya cocok",
        }
      ), 3),
      opt(L(
        {
          ko: "부담스럽지만 나중에 생각해 보겠다고 답한다",
          en: "It feels like a lot, so I say I will think about it later",
          ja: "重いけど、あとで考えると答える",
          "zh-CN": "有点负担，说以后再考虑",
          "zh-TW": "有點負擔，說以後再考慮",
          vi: "Thấy nặng, bảo để suy nghĩ sau",
          id: "Terasa berat, jadi bilang akan dipikirkan nanti",
        }
      ), 2),
      opt(L(
        {
          ko: "지금은 연애할 상황이 아니라며 거절한다",
          en: "I turn it down. This is not a time for dating",
          ja: "今は恋できる状況じゃない、と断る",
          "zh-CN": "拒绝，说现在不是谈恋爱的时候",
          "zh-TW": "拒絕，說現在不是談戀愛的時候",
          vi: "Từ chối, bảo lúc này không phải lúc yêu",
          id: "Menolak, karena ini bukan waktunya pacaran",
        }
      ), 1),
    ],
  },
  {
    id: 2,
    area: "weekend",
    question: L(
      {
        ko: "주말에 약속이 비었다. 나는?",
        en: "Your weekend is free. You...",
        ja: "週末の予定が空いた。あなたは？",
        "zh-CN": "周末没安排。你会？",
        "zh-TW": "週末沒安排。你會？",
        vi: "Cuối tuần trống lịch. Bạn...",
        id: "Akhir pekanmu kosong. Kamu...",
      }
    ),
    options: [
      opt(L(
        {
          ko: "집에서 쉬며 아무것도 계획하지 않는다",
          en: "I stay home and do not plan anything",
          ja: "家で休んで、何も予定を入れない",
          "zh-CN": "在家休息，什么也不安排",
          "zh-TW": "在家休息，什麼也不安排",
          vi: "Ở nhà nghỉ, không lên kế hoạch gì",
          id: "Istirahat di rumah, tidak merencanakan apa pun",
        }
      ), 1),
      opt(L(
        {
          ko: "새로운 사람을 만날 수 있는 모임이나 행사를 찾아본다",
          en: "I look for a gathering or event where I might meet someone new",
          ja: "新しい人に会えそうな集まりやイベントを探す",
          "zh-CN": "去找能认识新朋友的聚会或活动",
          "zh-TW": "去找能認識新朋友的聚會或活動",
          vi: "Tìm một buổi gặp hoặc sự kiện có thể gặp người mới",
          id: "Mencari kumpul-kumpul atau acara yang bisa mempertemukan dengan orang baru",
        }
      ), 4),
      opt(L(
        {
          ko: "친한 친구에게 연락해 외출 약속을 잡는다",
          en: "I text a close friend and make a plan to go out",
          ja: "親しい友達に連絡して、外出の約束を入れる",
          "zh-CN": "联系好朋友，约出去",
          "zh-TW": "聯絡好朋友，約出去",
          vi: "Nhắn bạn thân và hẹn ra ngoài",
          id: "Menghubungi teman dekat dan membuat janji keluar",
        }
      ), 3),
      opt(L(
        {
          ko: "혼자 영화나 카페로 가볍게 외출한다",
          en: "I go out lightly on my own, a movie or a cafe",
          ja: "一人で映画やカフェに、軽く出かける",
          "zh-CN": "自己去看场电影或坐坐咖啡馆",
          "zh-TW": "自己去看場電影或坐坐咖啡館",
          vi: "Một mình đi xem phim hoặc cà phê cho nhẹ",
          id: "Keluar sendiri sebentar, nonton atau ke kafe",
        }
      ), 2),
    ],
  },
  {
    id: 3,
    area: "approach",
    question: L(
      {
        ko: "요즘 마음에 둔 사람이 생겼다. 나는?",
        en: "There is someone you have been thinking about. You...",
        ja: "最近、気になる人ができた。あなたは？",
        "zh-CN": "最近有了在意的人。你会？",
        "zh-TW": "最近有了在意的人。你會？",
        vi: "Dạo này bạn để ý một người. Bạn...",
        id: "Belakangan ada orang yang kamu perhatikan. Kamu...",
      }
    ),
    options: [
      opt(L(
        {
          ko: "마음은 있지만 어떻게 다가갈지 몰라 지켜본다",
          en: "I like them, but I do not know how to start, so I just watch",
          ja: "気持ちはあるけど、どう近づくかわからず見ている",
          "zh-CN": "有感觉，但不知道怎么靠近，就先看着",
          "zh-TW": "有感覺，但不知道怎麼靠近，就先看著",
          vi: "Có cảm xúc nhưng không biết bắt chuyện, nên chỉ quan sát",
          id: "Ada rasa, tapi tidak tahu harus mulai dari mana, jadi hanya memperhatikan",
        }
      ), 2),
      opt(L(
        {
          ko: "혼자 마음에만 담아 두고 말하지 않는다",
          en: "I keep it to myself and never say anything",
          ja: "一人で胸にしまって、言わない",
          "zh-CN": "只放在心里，什么也不说",
          "zh-TW": "只放在心裡，什麼也不說",
          vi: "Giữ trong lòng, không nói",
          id: "Disimpan sendiri, tidak pernah diucapkan",
        }
      ), 1),
      opt(L(
        {
          ko: "가볍게 안부를 건네며 대화를 이어 간다",
          en: "I say a light hello and keep the conversation going",
          ja: "軽く様子を聞いて、会話を続ける",
          "zh-CN": "轻轻问一句近况，把聊天接下去",
          "zh-TW": "輕輕問一句近況，把聊天接下去",
          vi: "Hỏi thăm nhẹ và giữ cuộc trò chuyện",
          id: "Menyapa ringan dan meneruskan obrolan",
        }
      ), 4),
      opt(L(
        {
          ko: "공통 관심사를 찾아 자연스러운 계기를 만든다",
          en: "I find something we both like and make a natural reason to talk",
          ja: "共通の興味を見つけて、自然なきっかけを作る",
          "zh-CN": "找共同兴趣，制造一个自然的由头",
          "zh-TW": "找共同興趣，製造一個自然的由頭",
          vi: "Tìm sở thích chung để có cớ tự nhiên",
          id: "Mencari minat yang sama supaya ada alasan yang alami",
        }
      ), 3),
    ],
  },
  {
    id: 4,
    area: "app",
    question: L(
      {
        ko: "연애 앱이나 소개 서비스에 대한 나의 생각은? 나는?",
        en: "How do you feel about dating apps or someone setting you up?",
        ja: "マッチングアプリや紹介サービスについて、あなたは？",
        "zh-CN": "对交友软件或别人介绍，你怎么看？",
        "zh-TW": "對交友軟體或別人介紹，你怎麼看？",
        vi: "Bạn nghĩ gì về app hẹn hò hoặc người khác mai mối?",
        id: "Bagaimana pendapatmu tentang aplikasi kencan atau jasa perkenalan?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "안전 수칙을 확인한 뒤 가볍게 써 볼 만하다고 본다",
          en: "Once I check the safety basics, it seems fine to try lightly",
          ja: "安全の確認をしたうえで、軽く使ってみる価値はあると思う",
          "zh-CN": "先确认安全，觉得可以轻松试试",
          "zh-TW": "先確認安全，覺得可以輕鬆試試",
          vi: "Kiểm tra an toàn rồi thì thấy đáng thử cho nhẹ",
          id: "Setelah cek keamanannya, rasanya layak dicoba dengan santai",
        }
      ), 3),
      opt(L(
        {
          ko: "궁금하지만 아직 시작하기는 망설여진다",
          en: "I am curious, but I still hesitate to start",
          ja: "気になるけど、始めるのはまだためらう",
          "zh-CN": "好奇，但还下不了手开始",
          "zh-TW": "好奇，但還下不了手開始",
          vi: "Tò mò, nhưng vẫn ngại bắt đầu",
          id: "Penasaran, tapi masih ragu untuk mulai",
        }
      ), 2),
      opt(L(
        {
          ko: "나와는 맞지 않는 방식이라 쓸 생각이 없다",
          en: "That way of meeting people is not for me. I will not use it",
          ja: "自分には合わないやり方なので、使う気はない",
          "zh-CN": "觉得这种方式不适合自己，不想用",
          "zh-TW": "覺得這種方式不適合自己，不想用",
          vi: "Cách này không hợp mình, không định dùng",
          id: "Cara itu tidak cocok untukku, tidak mau memakainya",
        }
      ), 1),
      opt(L(
        {
          ko: "프로필을 정리해 두고 적극적으로 활용한다",
          en: "I keep my profile tidy and actually use it",
          ja: "プロフィールを整えて、積極的に使っている",
          "zh-CN": "把资料整理好，积极地用",
          "zh-TW": "把資料整理好，積極地用",
          vi: "Chỉnh hồ sơ và dùng thật sự",
          id: "Merapikan profil dan benar-benar memakainya",
        }
      ), 4),
    ],
  },
  {
    id: 5,
    area: "plan",
    question: L(
      {
        ko: "크리스마스 계획을 떠올리면? 나는?",
        en: "When you picture Christmas, you...",
        ja: "クリスマスの予定を思い浮かべると？",
        "zh-CN": "想到圣诞安排时，你是？",
        "zh-TW": "想到聖誕安排時，你是？",
        vi: "Khi nghĩ đến kế hoạch Giáng sinh, bạn...",
        id: "Kalau memikirkan rencana Natal, kamu...",
      }
    ),
    options: [
      opt(L(
        {
          ko: "함께 보낼 사람을 만들고 싶어 미리 활동을 늘리고 있다",
          en: "I want someone to spend it with, so I am already putting myself out there more",
          ja: "一緒に過ごす人を作りたくて、先に動きを増やしている",
          "zh-CN": "想有人一起过，所以已经在多出门",
          "zh-TW": "想有人一起過，所以已經在多出門",
          vi: "Muốn có người cùng đón, nên đang chủ động ra ngoài nhiều hơn",
          id: "Ingin ada yang menemani, jadi sudah memperbanyak kegiatan dari sekarang",
        }
      ), 4),
      opt(L(
        {
          ko: "올해는 새로운 사람을 만나 보고 싶은 마음이 있다",
          en: "This year, I do want to meet someone new",
          ja: "今年は新しい人に会ってみたい気持ちがある",
          "zh-CN": "今年有点想认识新的人",
          "zh-TW": "今年有點想認識新的人",
          vi: "Năm nay mình muốn gặp người mới",
          id: "Tahun ini ada keinginan bertemu orang baru",
        }
      ), 3),
      opt(L(
        {
          ko: "어차피 혼자일 것 같아 큰 기대는 하지 않는다",
          en: "I will probably be alone anyway, so I do not expect much",
          ja: "どうせ一人だろうから、あまり期待しない",
          "zh-CN": "反正大概一个人，不怎么期待",
          "zh-TW": "反正大概一個人，不太期待",
          vi: "Chắc vẫn một mình, nên không kỳ vọng nhiều",
          id: "Mungkin tetap sendirian, jadi tidak berharap banyak",
        }
      ), 2),
      opt(L(
        {
          ko: "연말 분위기가 부담스러워 그냥 지나가길 바란다",
          en: "The year-end mood feels heavy. I just want it to pass",
          ja: "年末の空気が重くて、ただ過ぎてほしい",
          "zh-CN": "年末气氛让人有负担，只希望它快点过去",
          "zh-TW": "年末氣氛讓人有負擔，只希望它快點過去",
          vi: "Không khí cuối năm làm mình nặng, chỉ muốn nó qua đi",
          id: "Suasana akhir tahun terasa berat, inginnya lewat saja",
        }
      ), 1),
    ],
  },
  {
    id: 6,
    area: "talk",
    question: L(
      {
        ko: "새로운 사람과 대화할 기회가 생겼다. 나는?",
        en: "You get a chance to talk with someone new. You...",
        ja: "新しい人と話す機会ができた。あなたは？",
        "zh-CN": "有了和新的人聊天的机会。你会？",
        "zh-TW": "有了和新的人聊天的機會。你會？",
        vi: "Có cơ hội nói chuyện với người mới. Bạn...",
        id: "Ada kesempatan mengobrol dengan orang baru. Kamu...",
      }
    ),
    options: [
      opt(L(
        {
          ko: "어색해서 대화를 짧게 끝내고 자리를 피한다",
          en: "It is awkward, so I end it quickly and step away",
          ja: "気まずくて、会話を短く切ってその場を離れる",
          "zh-CN": "尴尬，很快结束聊天并躲开",
          "zh-TW": "尷尬，很快結束聊天並躲開",
          vi: "Ngượng nên kết thúc nhanh và tránh chỗ đó",
          id: "Canggung, jadi mengakhiri cepat dan menjauh",
        }
      ), 1),
      opt(L(
        {
          ko: "질문을 던지며 대화를 즐겁게 이어 간다",
          en: "I ask questions and keep it fun",
          ja: "質問をしながら、楽しく会話を続ける",
          "zh-CN": "抛出问题，把聊天聊得开心",
          "zh-TW": "拋出問題，把聊天聊得開心",
          vi: "Đặt câu hỏi và giữ cuộc nói chuyện vui",
          id: "Melempar pertanyaan dan membuat obrolannya tetap seru",
        }
      ), 4),
      opt(L(
        {
          ko: "상대가 이야기하면 호응하며 자연스럽게 따라간다",
          en: "If they talk, I respond and follow along",
          ja: "相手が話せば相づちを打って、自然についていく",
          "zh-CN": "对方说，我就接话，自然地跟着聊",
          "zh-TW": "對方說，我就接話，自然地跟著聊",
          vi: "Họ nói thì mình hùa theo một cách tự nhiên",
          id: "Kalau dia bicara, aku menanggapi dan mengikuti dengan alami",
        }
      ), 3),
      opt(L(
        {
          ko: "대화는 하지만 조심스러워 깊이 들어가지는 않는다",
          en: "I talk, but I stay careful and do not go very deep",
          ja: "会話はするけど、慎重で深くは入らない",
          "zh-CN": "会聊，但小心，不会聊深",
          "zh-TW": "會聊，但小心，不會聊深",
          vi: "Có nói, nhưng dè dặt, không đi sâu",
          id: "Mengobrol, tapi hati-hati dan tidak masuk terlalu dalam",
        }
      ), 2),
    ],
  },
  {
    id: 7,
    area: "heart",
    question: L(
      {
        ko: "연애에 대한 나의 마음 상태는? 나는?",
        en: "Where is your heart about dating right now?",
        ja: "恋愛についての、今の心は？",
        "zh-CN": "你现在对恋爱是什么心情？",
        "zh-TW": "你現在對戀愛是什麼心情？",
        vi: "Lúc này, lòng bạn với chuyện yêu thế nào?",
        id: "Bagaimana keadaan hatimu soal pacaran sekarang?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "하고 싶지만 한편으로는 두려운 마음이 크다",
          en: "I want it, and I am also quite afraid",
          ja: "したいけど、一方で怖い気持ちが大きい",
          "zh-CN": "想谈，但害怕也不小",
          "zh-TW": "想談，但害怕也不小",
          vi: "Muốn yêu, nhưng sợ cũng nhiều",
          id: "Ingin pacaran, tapi takutnya juga besar",
        }
      ), 2),
      opt(L(
        {
          ko: "이전 만남의 상처가 남아 아직 마음이 닫혀 있다",
          en: "The last time still hurts. My heart is not open yet",
          ja: "前の出会いの傷が残っていて、まだ心が閉じている",
          "zh-CN": "上一次见面的伤还在，心还关着",
          "zh-TW": "上一次見面的傷還在，心還關著",
          vi: "Vết từ lần gặp trước còn đó, lòng vẫn đóng",
          id: "Luka dari pertemuan yang lalu masih ada, hati masih tertutup",
        }
      ), 1),
      opt(L(
        {
          ko: "마음이 열려 있고 좋은 사람을 만날 준비가 되어 있다",
          en: "I am open, and ready to meet someone good",
          ja: "心は開いていて、いい人に会う準備ができている",
          "zh-CN": "心是开的，准备好遇见合适的人",
          "zh-TW": "心是開的，準備好遇見合適的人",
          vi: "Lòng đang mở, sẵn sàng gặp một người tốt",
          id: "Hati terbuka, dan siap bertemu orang yang tepat",
        }
      ), 4),
      opt(L(
        {
          ko: "서두르지 않지만 좋은 사람이 오면 열어 볼 생각이다",
          en: "I am not rushing, but if the right person shows up, I will open the door",
          ja: "急がないけど、いい人が来たら開けてみようと思う",
          "zh-CN": "不着急，但合适的人来了就愿意打开",
          "zh-TW": "不著急，但合適的人來了就願意打開",
          vi: "Không vội, nhưng nếu gặp đúng người thì sẵn sàng mở lòng",
          id: "Tidak terburu, tapi kalau orang yang tepat datang, aku mau membuka diri",
        }
      ), 3),
    ],
  },
  {
    id: 8,
    area: "style",
    question: L(
      {
        ko: "외모와 옷차림을 가꾸는 일에 대한 나의 태도는? 나는?",
        en: "How do you feel about looking after your appearance and clothes?",
        ja: "見た目や服装を整えることについて、あなたは？",
        "zh-CN": "对打理外形和穿搭，你是什么态度？",
        "zh-TW": "對打理外形和穿搭，你是什麼態度？",
        vi: "Bạn nghĩ thế nào về việc chăm ngoại hình và quần áo?",
        id: "Bagaimana sikapmu soal merawat penampilan dan pakaian?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "평소 단정하게 하고 중요한 자리에는 신경을 쓴다",
          en: "I usually look put-together, and I try harder for plans that matter",
          ja: "普段は整えていて、大事な場には気を配る",
          "zh-CN": "平时收拾得整齐，重要场合会多花心思",
          "zh-TW": "平時收拾得整齊，重要場合會多花心思",
          vi: "Ngày thường gọn gàng, dịp quan trọng thì chăm hơn",
          id: "Sehari-hari rapi, dan untuk acara penting aku lebih berusaha",
        }
      ), 3),
      opt(L(
        {
          ko: "필요하다고는 생각하지만 미루는 편이다",
          en: "I know it matters, but I keep putting it off",
          ja: "必要だとは思うけど、後回しにしがち",
          "zh-CN": "觉得有必要，但总是拖",
          "zh-TW": "覺得有必要，但總是拖",
          vi: "Biết là nên làm, nhưng hay trì hoãn",
          id: "Tahu itu perlu, tapi sering ditunda",
        }
      ), 2),
      opt(L(
        {
          ko: "꾸며도 달라질 게 없다고 생각해 신경 쓰지 않는다",
          en: "I do not bother. Dressing up would not change anything, I tell myself",
          ja: "整えても変わらないと思って、気にしない",
          "zh-CN": "觉得打扮了也不会有什么不同，就不在意",
          "zh-TW": "覺得打扮了也不會有什麼不同，就不在意",
          vi: "Nghĩ chăm chút cũng chẳng đổi gì, nên không để tâm",
          id: "Merasa merapikan diri tidak akan mengubah apa pun, jadi tidak dipedulikan",
        }
      ), 1),
      opt(L(
        {
          ko: "나다운 스타일을 정해 두고 꾸준히 가꾼다",
          en: "I have a style that feels like me, and I keep it up",
          ja: "自分らしいスタイルを決めて、続けて整えている",
          "zh-CN": "定了属于自己的风格，一直在保持",
          "zh-TW": "定了屬於自己的風格，一直在保持",
          vi: "Đã có phong cách của mình và giữ đều",
          id: "Sudah punya gaya yang terasa seperti diriku, dan menjaganya terus",
        }
      ), 4),
    ],
  },
  {
    id: 9,
    area: "party",
    question: L(
      {
        ko: "지인이 연말 모임에 같이 가자고 했다. 나는?",
        en: "A friend asks you to a year-end gathering. You...",
        ja: "知り合いが年末の集まりに一緒に行こうと言った。あなたは？",
        "zh-CN": "熟人约你一起去年末聚会。你会？",
        "zh-TW": "熟人約你一起去年末聚會。你會？",
        vi: "Người quen rủ đi họp mặt cuối năm. Bạn...",
        id: "Kenalan mengajak ke kumpul-kumpul akhir tahun. Kamu...",
      }
    ),
    options: [
      opt(L(
        {
          ko: "새로운 사람을 만날 기회라 생각하고 흔쾌히 간다",
          en: "I see it as a chance to meet people, and I say yes easily",
          ja: "新しい人に会える機会だと思って、快く行く",
          "zh-CN": "当成认识新人的机会，爽快答应",
          "zh-TW": "當成認識新人的機會，爽快答應",
          vi: "Coi đó là cơ hội gặp người mới và đi vui vẻ",
          id: "Menganggapnya kesempatan bertemu orang baru, dan ikut dengan senang",
        }
      ), 4),
      opt(L(
        {
          ko: "분위기를 보고 부담 없는 자리라면 간다",
          en: "I will go if it does not feel like too much",
          ja: "雰囲気を見て、重くない場なら行く",
          "zh-CN": "看气氛，不给压力的局就去",
          "zh-TW": "看氣氛，不給壓力的局就去",
          vi: "Xem không khí, chỗ nhẹ thì đi",
          id: "Melihat suasananya, kalau tidak berat aku ikut",
        }
      ), 3),
      opt(L(
        {
          ko: "가고 싶지만 어색할 것 같아 망설이다 고민만 한다",
          en: "I want to go, but it might be awkward, so I just sit with the worry",
          ja: "行きたいけど気まずそうで、迷ったまま悩むだけ",
          "zh-CN": "想去，又怕尴尬，犹豫着只在心里纠结",
          "zh-TW": "想去，又怕尷尬，猶豫著只在心裡糾結",
          vi: "Muốn đi nhưng sợ ngượng, nên chỉ ngồi phân vân",
          id: "Ingin pergi, tapi takut canggung, jadi hanya bimbang",
        }
      ), 2),
      opt(L(
        {
          ko: "사람 많은 자리가 피곤해서 정중히 사양한다",
          en: "Crowds tire me out, so I politely decline",
          ja: "人が多い場は疲れるので、丁寧に断る",
          "zh-CN": "人多的场合很累，婉拒",
          "zh-TW": "人多的場合很累，婉拒",
          vi: "Chỗ đông người làm mình mệt, nên từ chối lịch sự",
          id: "Tempat ramai membuat lelah, jadi menolak dengan sopan",
        }
      ), 1),
    ],
  },
  {
    id: 10,
    area: "action",
    question: L(
      {
        ko: "지금 내 솔로 탈출에 가장 가까운 문장은? 나는?",
        en: "Which line sounds most like you, about meeting someone?",
        ja: "今の自分の恋の始め方に、いちばん近いのは？",
        "zh-CN": "关于脱单，哪一句最像现在的你？",
        "zh-TW": "關於脫單，哪一句最像現在的你？",
        vi: "Về chuyện thoát ế, câu nào gần bạn lúc này nhất?",
        id: "Soal lepas jomblo, kalimat mana yang paling dekat denganmu sekarang?",
      }
    ),
    options: [
      opt(L(
        {
          ko: "굳이 애쓰지 않고 때가 오면 오겠지",
          en: "I will not force it. If it is meant to happen, it will",
          ja: "無理に頑張らなくても、来るときは来るでしょ",
          "zh-CN": "不必刻意，该来的时候会来吧",
          "zh-TW": "不必刻意，該來的時候會來吧",
          vi: "Không cần cố. Đến lúc thì sẽ đến",
          id: "Tidak perlu memaksakan. Kalau waktunya datang, ya datang",
        }
      ), 1),
      opt(L(
        {
          ko: "이번 연말엔 한 번 움직여 보려고 해",
          en: "This year-end, I am going to make a move",
          ja: "今年の年末は、一回動いてみようと思ってる",
          "zh-CN": "今年年底，我想主动一次",
          "zh-TW": "今年年底，我想主動一次",
          vi: "Cuối năm nay mình sẽ thử bước một bước",
          id: "Akhir tahun ini aku mau mencoba bergerak sekali",
        }
      ), 4),
      opt(L(
        {
          ko: "기회가 오면 놓치지 않으려고 준비해 두고 있어",
          en: "I am getting ready so I do not miss it if a chance shows up",
          ja: "チャンスが来たら逃さないように、準備している",
          "zh-CN": "我在准备着，机会来了就不错过",
          "zh-TW": "我在準備著，機會來了就不錯過",
          vi: "Mình đang chuẩn bị để không bỏ lỡ nếu có cơ hội",
          id: "Aku sedang menyiapkan diri supaya tidak melewatkan kalau ada kesempatan",
        }
      ), 3),
      opt(L(
        {
          ko: "마음은 있는데 아직 시작이 안 돼",
          en: "I want to, but I have not started",
          ja: "気持ちはあるけど、まだ始められていない",
          "zh-CN": "心里有，但还没开始",
          "zh-TW": "心裡有，但還沒開始",
          vi: "Muốn rồi, nhưng vẫn chưa bắt đầu được",
          id: "Inginnya ada, tapi belum juga mulai",
        }
      ), 2),
    ],
  },
];

export const phase3ChristmasSoloEscapeResults: Phase3ChristmasSoloEscapeResult[] = [
  {
    type: "15",
    emoji: "❄️",
    probability: 15,
    min: 10,
    max: 16,
    title: L(
      {
        ko: "탈출 확률 15%",
        en: "15% chance by Christmas",
        ja: "クリスマスまでに付き合える確率 15%",
        "zh-CN": "圣诞前脱单概率 15%",
        "zh-TW": "聖誕前脫單機率 15%",
        vi: "Khả năng thoát ế trước Giáng sinh 15%",
        id: "Peluang lepas jomblo sebelum Natal 15%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "15%",
        en: "15%",
        ja: "15%",
        "zh-CN": "15%",
        "zh-TW": "15%",
        vi: "15%",
        id: "15%",
      }
    ),
    levelLine: L(
      {
        ko: "마음을 돌보며 천천히 준비하는 단계",
        en: "A stage for looking after yourself, slowly",
        ja: "心を整えながら、ゆっくり準備する段階",
        "zh-CN": "先照顾自己、慢慢准备的阶段",
        "zh-TW": "先照顧自己、慢慢準備的階段",
        vi: "Giai đoạn chăm mình và chuẩn bị chậm",
        id: "Tahap merawat diri dan bersiap pelan-pelan",
      }
    ),
    shortDescription: L(
      {
        ko: "지금은 만남보다 마음의 여유를 먼저 채우는 시기입니다.",
        en: "Right now, filling your own cup comes before meeting someone.",
        ja: "今は出会いより、心の余裕を先に満たす時期です。",
        "zh-CN": "现在先把自己的心填满，比急着见面更重要。",
        "zh-TW": "現在先把自己的心填滿，比急著見面更重要。",
        vi: "Lúc này, lấp đầy lòng mình đến trước chuyện gặp ai.",
        id: "Saat ini, mengisi hatimu sendiri lebih dulu daripada buru-buru bertemu seseorang.",
      }
    ),
    description: L(
      {
        ko: "연애에 대한 부담이나 지친 마음이 크거나, 아직 시작할 에너지가 충분하지 않을 수 있습니다. 크리스마스까지 꼭 솔로를 탈출해야 하는 것은 아닙니다. 나를 돌본 뒤의 시작이 더 오래 갑니다.",
        en: "Dating may feel heavy, or you may simply be tired, without enough energy to start. You do not have to meet someone by Christmas. A start that comes after you have looked after yourself tends to last longer.",
        ja: "恋愛が重く感じたり、疲れが残っていたりして、始めるエネルギーが足りないかもしれません。クリスマスまでに恋人を作らなくていいです。自分を整えてからのスタートのほうが、長く続きます。",
        "zh-CN": "你可能觉得恋爱很有负担，或者太累，还没有足够的力气开始。不必赶在圣诞前脱单。先把自己照顾好，之后的开始会更长久。",
        "zh-TW": "你可能覺得談戀愛很有負擔，或是太累，還沒有足夠的力氣開始。不必趕在聖誕前脫單。先把自己照顧好，之後的開始會更長久。",
        vi: "Yêu có thể đang nặng, hoặc bạn mệt, chưa đủ sức bắt đầu. Không nhất thiết phải có người trước Giáng sinh. Bắt đầu sau khi đã chăm mình thường bền hơn.",
        id: "Pacaran mungkin terasa berat, atau kamu lelah dan belum punya tenaga untuk mulai. Kamu tidak harus punya seseorang sebelum Natal. Awal yang datang setelah kamu mengurus diri biasanya lebih awet.",
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
        ko: "마음 돌봄, 여유 부족, 천천히, 준비 단계",
        en: "Looking after yourself, Thin energy, Slowly, Getting ready",
        ja: "自分を整える、余裕が薄い、ゆっくり、準備の段階",
        "zh-CN": "照顾自己，余力不足，慢慢来，准备阶段",
        "zh-TW": "照顧自己，餘力不足，慢慢來，準備階段",
        vi: "Chăm mình, Năng lượng mỏng, Chậm, Đang chuẩn bị",
        id: "Merawat diri, Tenaga tipis, Pelan, Tahap bersiap",
      }
    ),
    strengths: L(
      {
        ko: "서두르지 않고 나를 먼저 살피는 신중함",
        en: "You look at yourself first, before you hurry",
        ja: "焦らず、自分を先に見る慎重さ",
        "zh-CN": "不赶，先看自己",
        "zh-TW": "不趕，先看自己",
        vi: "Không vội, nhìn mình trước",
        id: "Tidak terburu, dan melihat diri sendiri lebih dulu",
      }
    ),
    tips: L(
      {
        ko: "이번 주에 나를 위한 작은 일(산책·운동·취미) 하나 정하기\n연애가 부담스러운 이유를 한 줄로 적어 보기\n크리스마스를 나 혼자 즐겁게 보낼 계획도 하나 세워 두기",
        en: "Pick one small thing for yourself this week: a walk, some movement, or a hobby\nWrite one line about why dating feels heavy\nMake one plan for a Christmas you would actually enjoy on your own",
        ja: "今週、自分のための小さなことを一つ決める（散歩・運動・趣味）\n恋愛が重い理由を、一行で書いてみる\nクリスマスを一人でも楽しく過ごす予定を、一つ用意しておく",
        "zh-CN": "这周给自己定一件小事：散步、运动或一个爱好\n用一句话写下恋爱让你有负担的原因\n也给自己留一个能独自把圣诞过得开心的计划",
        "zh-TW": "這週給自己定一件小事：散步、運動或一個興趣\n用一句話寫下談戀愛讓你有負擔的原因\n也給自己留一個能獨自把聖誕過得開心的計畫",
        vi: "Tuần này chọn một việc nhỏ cho mình: đi bộ, vận động, hoặc một sở thích\nViết một dòng vì sao chuyện yêu đang nặng\nDành một kế hoạch để một mình vẫn vui vào Giáng sinh",
        id: "Minggu ini pilih satu hal kecil untuk dirimu: jalan, bergerak, atau hobi\nTulis satu kalimat kenapa pacaran terasa berat\nSiapkan juga satu rencana agar Natal tetap menyenangkan kalau sendiri",
      }
    ),
    counseling: L(
      {
        ko: "연애에 대한 두려움이나 무기력이 오래 이어져 일상에 영향을 준다면 심리상담 전문가와 이야기해 보세요",
        en: "If fear of dating, or a long flatness, has started to affect sleep, meals, or work, talk with a counselor.",
        ja: "恋愛への恐れや無気力が長く続いて、睡眠・食事・仕事に影響しているなら、相談できる専門家に話してみてください。",
        "zh-CN": "如果对恋爱的害怕或提不起劲已经持续很久，并影响到睡觉、吃饭或工作，可以和心理咨询师聊聊。",
        "zh-TW": "如果對戀愛的害怕或提不起勁已經持續很久，並影響到睡覺、吃飯或工作，可以和心理諮商師聊聊。",
        vi: "Nếu nỗi sợ yêu hoặc cảm giác kiệt sức kéo dài và ảnh hưởng ngủ, ăn hoặc việc làm, hãy nói chuyện với chuyên gia tâm lý.",
        id: "Jika takut pacaran atau rasa hampa sudah lama dan mulai mengganggu tidur, makan, atau kerja, bicaralah dengan konselor.",
      }
    ),
    oneLiner: L(
      {
        ko: "솔로 기간은 나를 채우는 시간입니다. 크리스마스가 마감일은 아닙니다",
        en: "Time on your own is time to fill yourself up. Christmas is not a deadline.",
        ja: "一人の時間は、自分を満たす時間です。クリスマスは締め切りじゃありません。",
        "zh-CN": "一个人的时间是把自己填满的时间。圣诞不是截止日期。",
        "zh-TW": "一個人的時間是把自己填滿的時間。聖誕不是截止日期。",
        vi: "Thời gian một mình là lúc lấp đầy mình. Giáng sinh không phải hạn chót.",
        id: "Waktu sendiri adalah waktu mengisi diri. Natal bukan tenggat.",
      }
    ),
    shareLine: L(
      {
        ko: "크리스마스까지 솔로 탈출 확률: 15% ❄️ ({score}점/40) 지금은 나를 채우는 시기래ㅋㅋ 너는 몇 %야? 결과 보내줘",
        en: "Odds I meet someone by Christmas: 15% ❄️ ({score}/40). Apparently this is my season to fill myself up. What's yours? Send it.",
        ja: "クリスマスまでに付き合える確率：15% ❄️（{score}点/40）今は自分を満たす時期だって。あなたは何%？結果送って",
        "zh-CN": "圣诞前脱单概率：15% ❄️（{score}分/40）说现在是先把自己填满的时候。你多少？把结果发我",
        "zh-TW": "聖誕前脫單機率：15% ❄️（{score}分/40）說現在是先把自己填滿的時候。你多少？把結果發我",
        vi: "Khả năng thoát ế trước Giáng sinh: 15% ❄️ ({score}/40). Nghe nói đây là lúc lấp đầy mình. Bạn bao nhiêu? Gửi kết quả đi",
        id: "Peluang lepas jomblo sebelum Natal: 15% ❄️ ({score}/40). Katanya ini musimnya mengisi diri. Kamu berapa? Kirim hasilnya",
      }
    ),
  },
  {
    type: "35",
    emoji: "🌨️",
    probability: 35,
    min: 17,
    max: 22,
    title: L(
      {
        ko: "탈출 확률 35%",
        en: "35% chance by Christmas",
        ja: "クリスマスまでに付き合える確率 35%",
        "zh-CN": "圣诞前脱单概率 35%",
        "zh-TW": "聖誕前脫單機率 35%",
        vi: "Khả năng thoát ế trước Giáng sinh 35%",
        id: "Peluang lepas jomblo sebelum Natal 35%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "35%",
        en: "35%",
        ja: "35%",
        "zh-CN": "35%",
        "zh-TW": "35%",
        vi: "35%",
        id: "35%",
      }
    ),
    levelLine: L(
      {
        ko: "마음은 있는데 시작이 필요한 단계",
        en: "You want it. You still need the first step",
        ja: "気持ちはある。あとは最初の一歩",
        "zh-CN": "心里有，就差迈出第一步",
        "zh-TW": "心裡有，就差邁出第一步",
        vi: "Đã muốn, còn thiếu bước đầu",
        id: "Keinginannya ada, yang kurang langkah pertama",
      }
    ),
    shortDescription: L(
      {
        ko: "문은 열려 있지만 아직 한 걸음을 못 뗀 상태입니다.",
        en: "The door is open. You just have not stepped through it.",
        ja: "ドアは開いているのに、まだ一歩が踏み出せていません。",
        "zh-CN": "门开着，脚步还没迈出去。",
        "zh-TW": "門開著，腳步還沒邁出去。",
        vi: "Cửa đã mở, chân vẫn chưa bước.",
        id: "Pintunya terbuka, langkahnya belum juga diambil.",
      }
    ),
    description: L(
      {
        ko: "연애에 대한 마음은 있으나 행동으로 옮기기까지 망설임이 큽니다. 작은 행동 하나가 확률을 크게 바꾸는 구간입니다.",
        en: "The wish is there. The hesitation before you act is the big part. One small move changes the odds a lot in this range.",
        ja: "恋愛したい気持ちはあるけど、行動までのためらいが大きいです。小さな行動一つで、確率が大きく動く区間です。",
        "zh-CN": "想恋爱的心是有的，难的是迈出行动。这个区间里，一个小动作就能把概率拉上去不少。",
        "zh-TW": "想談戀愛的心是有的，難的是邁出行動。這個區間裡，一個小動作就能把機率拉上去不少。",
        vi: "Lòng muốn yêu có rồi, cái ngại trước khi làm mới lớn. Ở mức này, một hành động nhỏ đổi xác suất khá nhiều.",
        id: "Keinginan pacaran ada, yang besar adalah ragu sebelum bertindak. Di rentang ini, satu langkah kecil mengubah peluang cukup banyak.",
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
        ko: "망설임, 마음은 있음, 작은 시작, 두려움",
        en: "Hesitation, The wish is there, A small start, Fear",
        ja: "ためらい、気持ちはある、小さな一歩、恐れ",
        "zh-CN": "犹豫，心里有，一小步，害怕",
        "zh-TW": "猶豫，心裡有，一小步，害怕",
        vi: "Do dự, Đã muốn, Một bước nhỏ, Sợ",
        id: "Ragu, Keinginan ada, Langkah kecil, Takut",
      }
    ),
    strengths: L(
      {
        ko: "관계를 소중히 여기는 마음",
        en: "You take a relationship seriously",
        ja: "関係を大切にしようとする心",
        "zh-CN": "把关系当回事的心",
        "zh-TW": "把關係當回事的心",
        vi: "Trái tim coi trọng một mối quan hệ",
        id: "Hati yang menganggap hubungan itu penting",
      }
    ),
    tips: L(
      {
        ko: "이번 주에 새로운 사람을 만날 수 있는 자리 한 곳 알아보기\n지인에게 소개 괜찮은 사람 있으면 알려 달라고 한마디 건네기\n관심 가는 사람이 있다면 가벼운 안부 한 줄 보내기",
        en: "Find one place this week where you could meet someone new\nTell a friend, lightly, to let you know if they know someone\nIf someone has caught your eye, send one easy hello",
        ja: "今週、新しい人に会えそうな場を一か所調べてみる\n知り合いに、いい人いたら教えて、と一言頼んでみる\n気になる人がいるなら、軽い近況を一行送ってみる",
        "zh-CN": "这周找一个能认识新人的场合\n跟熟人说一声，有合适的人记得告诉你\n如果已经有在意的人，发一句轻松的问候",
        "zh-TW": "這週找一個能認識新人的場合\n跟熟人說一聲，有合適的人記得告訴你\n如果已經有在意的人，發一句輕鬆的問候",
        vi: "Tuần này tìm một chỗ có thể gặp người mới\nNhờ người quen một câu, có ai hợp thì nhớ nói\nNếu đã để ý ai, gửi một lời hỏi thăm nhẹ",
        id: "Minggu ini cari satu tempat yang bisa mempertemukanmu dengan orang baru\nBilang ke kenalan, kalau ada yang cocok kabari saja\nKalau sudah ada yang kamu perhatikan, kirim satu sapaan ringan",
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
        ko: "마음은 이미 준비되었습니다. 작은 한 걸음이 확률을 바꿉니다",
        en: "Your heart is already ready. One small step moves the odds.",
        ja: "心はもう準備できています。小さな一歩が確率を変えます。",
        "zh-CN": "心已经准备好了。一小步就会改写概率。",
        "zh-TW": "心已經準備好了。一小步就會改寫機率。",
        vi: "Lòng đã sẵn. Một bước nhỏ đổi xác suất.",
        id: "Hatimu sudah siap. Satu langkah kecil mengubah peluangnya.",
      }
    ),
    shareLine: L(
      {
        ko: "크리스마스까지 솔로 탈출 확률: 35% 🌨️ ({score}점/40) 작은 한 걸음이 필요하대... 너는 몇 %야? 결과 보내줘",
        en: "Odds I meet someone by Christmas: 35% 🌨️ ({score}/40). They say I need one small step. What's yours? Send it.",
        ja: "クリスマスまでに付き合える確率：35% 🌨️（{score}点/40）小さな一歩が必要だって。あなたは何%？結果送って",
        "zh-CN": "圣诞前脱单概率：35% 🌨️（{score}分/40）说还差一小步。你多少？把结果发我",
        "zh-TW": "聖誕前脫單機率：35% 🌨️（{score}分/40）說還差一小步。你多少？把結果發我",
        vi: "Khả năng thoát ế trước Giáng sinh: 35% 🌨️ ({score}/40). Nghe nói cần một bước nhỏ. Bạn bao nhiêu? Gửi kết quả đi",
        id: "Peluang lepas jomblo sebelum Natal: 35% 🌨️ ({score}/40). Katanya butuh satu langkah kecil. Kamu berapa? Kirim hasilnya",
      }
    ),
  },
  {
    type: "55",
    emoji: "⛄",
    probability: 55,
    min: 23,
    max: 28,
    title: L(
      {
        ko: "탈출 확률 55%",
        en: "55% chance by Christmas",
        ja: "クリスマスまでに付き合える確率 55%",
        "zh-CN": "圣诞前脱单概率 55%",
        "zh-TW": "聖誕前脫單機率 55%",
        vi: "Khả năng thoát ế trước Giáng sinh 55%",
        id: "Peluang lepas jomblo sebelum Natal 55%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "55%",
        en: "55%",
        ja: "55%",
        "zh-CN": "55%",
        "zh-TW": "55%",
        vi: "55%",
        id: "55%",
      }
    ),
    levelLine: L(
      {
        ko: "반반, 행동을 조금만 더하면 기회가 커지는 단계",
        en: "About even. A little more action and the chances grow",
        ja: "五分五分。もう少し動けば、機会は大きくなる",
        "zh-CN": "一半一半。再多动一点，机会就变大",
        "zh-TW": "一半一半。再多動一點，機會就變大",
        vi: "Nửa nửa. Thêm một chút hành động là cơ hội lớn hơn",
        id: "Setengah-setengah. Sedikit lebih banyak bergerak, kesempatannya membesar",
      }
    ),
    shortDescription: L(
      {
        ko: "기회가 오면 잡을 수 있고, 만들면 더 가까워지는 단계입니다.",
        en: "If a chance shows up, you can take it. If you make one, you get closer.",
        ja: "チャンスが来ればつかめる。自分で作れば、もっと近づく段階です。",
        "zh-CN": "机会来了抓得住。自己去造，会更近。",
        "zh-TW": "機會來了抓得住。自己去造，會更近。",
        vi: "Cơ hội đến là nắm được. Tự tạo thì còn gần hơn.",
        id: "Kalau kesempatan datang, kamu bisa menangkapnya. Kalau kamu yang membuatnya, kamu lebih dekat lagi.",
      }
    ),
    description: L(
      {
        ko: "마음의 여유와 준비가 어느 정도 갖춰져 있습니다. 모임·소개·대화의 기회를 조금만 늘려도 확률이 눈에 띄게 올라갑니다.",
        en: "You have a fair amount of room and preparation. Add a few more gatherings, introductions, or conversations and the odds climb in a way you can see.",
        ja: "心の余裕と準備は、ある程度そろっています。集まり・紹介・会話の機会を少し増やすだけで、確率は目に見えて上がります。",
        "zh-CN": "心里的余力和准备都有一些。聚会、介绍、聊天的机会再多一点，概率就会明显上去。",
        "zh-TW": "心裡的餘力和準備都有一些。聚會、介紹、聊天的機會再多一點，機率就會明顯上去。",
        vi: "Sự thư thái và sự chuẩn bị đã có phần. Thêm một chút họp mặt, giới thiệu hoặc trò chuyện là xác suất tăng rõ.",
        id: "Kelonggaran hati dan persiapan sudah cukup ada. Tambah sedikit kumpul-kumpul, perkenalan, atau obrolan, peluangnya naik kelihatan.",
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
        ko: "반반, 준비됨, 기회 늘리기, 균형",
        en: "About even, Mostly ready, Make more chances, Balance",
        ja: "五分五分、準備できている、機会を増やす、バランス",
        "zh-CN": "一半一半，有准备，多造机会，平衡",
        "zh-TW": "一半一半，有準備，多造機會，平衡",
        vi: "Nửa nửa, Đã chuẩn bị, Thêm cơ hội, Cân bằng",
        id: "Setengah-setengah, Cukup siap, Perbanyak kesempatan, Seimbang",
      }
    ),
    strengths: L(
      {
        ko: "현실적으로 준비하며 열린 마음을 지키는 균형감",
        en: "You prepare with your feet on the ground, and you stay open",
        ja: "現実的に準備しながら、心は開いたまま保てるバランス",
        "zh-CN": "准备得很实际，心也还开着",
        "zh-TW": "準備得很實際，心也還開著",
        vi: "Chuẩn bị thực tế mà vẫn giữ lòng mở",
        id: "Bersiap dengan realistis, dan hati tetap terbuka",
      }
    ),
    tips: L(
      {
        ko: "연말 모임·행사 중 한 곳에 참석 신청하기\n소개 제안은 거절하지 말고 일단 한 번 만나 보기\n프로필·옷차림을 한 번 점검하고 나다운 포인트 하나 정하기",
        en: "Sign up for one year-end gathering or event\nIf someone offers an introduction, meet once before you decide\nLook over your profile and your clothes, and pick one detail that feels like you",
        ja: "年末の集まりかイベントに、一か所申し込む\n紹介の話が来たら断らず、とりあえず一回会ってみる\nプロフィールと服装を一度見て、自分らしいポイントを一つ決める",
        "zh-CN": "报名一个年末聚会或活动\n有人要介绍，先见一次再说\n检查一次资料和穿搭，定一个属于自己的点",
        "zh-TW": "報名一個年末聚會或活動\n有人要介紹，先見一次再說\n檢查一次資料和穿搭，定一個屬於自己的點",
        vi: "Đăng ký một buổi họp mặt hoặc sự kiện cuối năm\nAi muốn giới thiệu thì gặp một lần đã\nXem lại hồ sơ và quần áo, chọn một điểm thật là mình",
        id: "Daftar satu kumpul-kumpul atau acara akhir tahun\nKalau ada yang mau mengenalkan, ketemu sekali dulu\nCek profil dan pakaian, lalu pilih satu titik yang terasa seperti dirimu",
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
        ko: "기회는 늘릴수록 커집니다. 한 번만 더 움직여 보세요",
        en: "Chances grow when you make more of them. Move once more.",
        ja: "機会は増やすほど大きくなります。もう一回だけ動いてみてください。",
        "zh-CN": "机会是越造越多的。再动一次就好。",
        "zh-TW": "機會是越造越多的。再動一次就好。",
        vi: "Cơ hội lớn lên khi bạn tạo thêm. Nhích thêm một lần.",
        id: "Kesempatan membesar kalau kamu memperbanyaknya. Bergerak sekali lagi.",
      }
    ),
    shareLine: L(
      {
        ko: "크리스마스까지 솔로 탈출 확률: 55% ⛄ ({score}점/40) 반반이래ㅋㅋ 너는 몇 %야? 결과 보내줘",
        en: "Odds I meet someone by Christmas: 55% ⛄ ({score}/40). About even, apparently. What's yours? Send it.",
        ja: "クリスマスまでに付き合える確率：55% ⛄（{score}点/40）五分五分だって。あなたは何%？結果送って",
        "zh-CN": "圣诞前脱单概率：55% ⛄（{score}分/40）说是一半一半。你多少？把结果发我",
        "zh-TW": "聖誕前脫單機率：55% ⛄（{score}分/40）說是一半一半。你多少？把結果發我",
        vi: "Khả năng thoát ế trước Giáng sinh: 55% ⛄ ({score}/40). Nghe nói nửa nửa. Bạn bao nhiêu? Gửi kết quả đi",
        id: "Peluang lepas jomblo sebelum Natal: 55% ⛄ ({score}/40). Katanya setengah-setengah. Kamu berapa? Kirim hasilnya",
      }
    ),
  },
  {
    type: "75",
    emoji: "🎄",
    probability: 75,
    min: 29,
    max: 34,
    title: L(
      {
        ko: "탈출 확률 75%",
        en: "75% chance by Christmas",
        ja: "クリスマスまでに付き合える確率 75%",
        "zh-CN": "圣诞前脱单概率 75%",
        "zh-TW": "聖誕前脫單機率 75%",
        vi: "Khả năng thoát ế trước Giáng sinh 75%",
        id: "Peluang lepas jomblo sebelum Natal 75%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "75%",
        en: "75%",
        ja: "75%",
        "zh-CN": "75%",
        "zh-TW": "75%",
        vi: "75%",
        id: "75%",
      }
    ),
    levelLine: L(
      {
        ko: "준비와 행동이 잘 갖춰진 단계",
        en: "Preparation and action are both in good shape",
        ja: "準備も行動も、よくそろっている段階",
        "zh-CN": "准备和行动都到位的阶段",
        "zh-TW": "準備和行動都到位的階段",
        vi: "Chuẩn bị và hành động đều đã có",
        id: "Persiapan dan tindakan sudah sama-sama ada",
      }
    ),
    shortDescription: L(
      {
        ko: "만남을 만들 힘이 충분한, 기대되는 단계입니다.",
        en: "You have enough energy to make meetings happen. This is a hopeful stage.",
        ja: "出会いを作る力が十分な、期待できる段階です。",
        "zh-CN": "你有足够的力气去制造见面。这是让人期待的阶段。",
        "zh-TW": "你有足夠的力氣去製造見面。這是讓人期待的階段。",
        vi: "Bạn đủ sức tạo ra những lần gặp. Đây là giai đoạn đáng mong.",
        id: "Kamu punya cukup tenaga untuk menciptakan pertemuan. Ini tahap yang patut dinanti.",
      }
    ),
    description: L(
      {
        ko: "마음이 열려 있고 행동도 따라오고 있습니다. 좋은 인연을 만나면 자연스럽게 이어질 가능성이 높습니다. 다만 조급함이 앞서지 않게 상대의 속도도 살피세요.",
        en: "Your heart is open, and your actions are keeping up. Meet the right person and it has a good chance of continuing naturally. Watch their pace, so readiness does not turn into hurry.",
        ja: "心は開いていて、行動もついてきています。いい人に出会えば、自然につながる可能性が高いです。ただ、焦りが先に出ないよう、相手の速度も見てください。",
        "zh-CN": "心是开的，行动也跟得上。遇到合适的人，很有机会自然地走下去。别让着急跑在前面，也看看对方的速度。",
        "zh-TW": "心是開的，行動也跟得上。遇到合適的人，很有機會自然地走下去。別讓著急跑在前面，也看看對方的速度。",
        vi: "Lòng đang mở và việc làm cũng theo kịp. Gặp đúng người thì khả năng nối tiếp tự nhiên là cao. Đừng để sốt ruột đi trước. Nhìn cả nhịp của họ.",
        id: "Hatimu terbuka dan tindakanmu mengikutinya. Ketemu orang yang tepat, peluang berlanjut secara alami cukup besar. Jangan biarkan terburu berjalan di depan. Perhatikan juga tempo dia.",
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
        ko: "준비됨, 행동력, 열린 마음, 기대",
        en: "Ready, You act, Open heart, Hope",
        ja: "準備できている、行動力、開いた心、期待",
        "zh-CN": "准备好了，行动力，心开着，期待",
        "zh-TW": "準備好了，行動力，心開著，期待",
        vi: "Đã sẵn sàng, Biết hành động, Lòng mở, Mong chờ",
        id: "Sudah siap, Mau bertindak, Hati terbuka, Harapan",
      }
    ),
    strengths: L(
      {
        ko: "꾸준히 만남을 만들고 대화를 이어 가는 힘",
        en: "You keep creating chances to meet, and you can carry a conversation",
        ja: "出会いを作り続け、会話もつなげていける力",
        "zh-CN": "能持续制造见面，也能把聊天接下去",
        "zh-TW": "能持續製造見面，也能把聊天接下去",
        vi: "Tạo được những lần gặp và giữ được cuộc nói chuyện",
        id: "Bisa terus menciptakan pertemuan dan meneruskan obrolan",
      }
    ),
    tips: L(
      {
        ko: "호감이 생긴 사람에게 가벼운 만남을 먼저 제안하기\n크리스마스 전후의 부담 없는 만남(산책·전시·식사) 후보 두 가지 정해 두기\n조급해지지 않게 서두르지 않는다는 기준 한 줄 적어 두기",
        en: "If you like someone, be the one to suggest an easy meetup\nPick two low-pressure plans around Christmas: a walk, a show, or a meal\nWrite one line you can keep: this is not a race",
        ja: "気になる人がいたら、軽い集まりを自分から提案する\nクリスマス前後の気軽な予定（散歩・展示・食事）を二つ決めておく\n焦らないための基準を、一行書いておく",
        "zh-CN": "有了好感，就先约一个轻松的见面\n圣诞前后准备两个不给压力的选项：散步、看展或吃饭\n写下一句提醒自己：不必赶",
        "zh-TW": "有了好感，就先約一個輕鬆的見面\n聖誕前後準備兩個不給壓力的選項：散步、看展或吃飯\n寫下一句提醒自己：不必趕",
        vi: "Thích ai thì mình đề xuất một buổi gặp nhẹ trước\nChọn sẵn hai kế hoạch không nặng quanh Giáng sinh: đi bộ, xem triển lãm, hoặc ăn\nViết một dòng để khỏi sốt ruột: không cần chạy đua",
        id: "Kalau ada rasa, kamu yang mengusulkan pertemuan yang ringan lebih dulu\nSiapkan dua rencana yang tidak berat di sekitar Natal: jalan, pameran, atau makan\nTulis satu kalimat pengingat: ini bukan perlombaan",
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
        ko: "준비된 마음은 기회를 알아봅니다. 속도만 상대와 맞춰 보세요",
        en: "A ready heart notices a good chance. Match their pace.",
        ja: "準備できた心は、機会を見分けます。速度だけ相手に合わせてください。",
        "zh-CN": "准备好的心认得出机会。速度跟对方对齐就好。",
        "zh-TW": "準備好的心認得出機會。速度跟對方對齊就好。",
        vi: "Một trái tim đã sẵn nhận ra cơ hội. Chỉ cần khớp nhịp với họ.",
        id: "Hati yang sudah siap mengenali kesempatan. Tinggal menyamakan tempo dengan dia.",
      }
    ),
    shareLine: L(
      {
        ko: "크리스마스까지 솔로 탈출 확률: 75% 🎄 ({score}점/40) 준비 잘 됐대ㅎㅎ 너는 몇 %야? 결과 보내줘",
        en: "Odds I meet someone by Christmas: 75% 🎄 ({score}/40). Pretty well prepared, apparently. What's yours? Send it.",
        ja: "クリスマスまでに付き合える確率：75% 🎄（{score}点/40）準備はできてるって。あなたは何%？結果送って",
        "zh-CN": "圣诞前脱单概率：75% 🎄（{score}分/40）说准备得不错。你多少？把结果发我",
        "zh-TW": "聖誕前脫單機率：75% 🎄（{score}分/40）說準備得不錯。你多少？把結果發我",
        vi: "Khả năng thoát ế trước Giáng sinh: 75% 🎄 ({score}/40). Nghe nói chuẩn bị khá tốt. Bạn bao nhiêu? Gửi kết quả đi",
        id: "Peluang lepas jomblo sebelum Natal: 75% 🎄 ({score}/40). Katanya persiapannya sudah baik. Kamu berapa? Kirim hasilnya",
      }
    ),
  },
  {
    type: "90",
    emoji: "🌟",
    probability: 90,
    min: 35,
    max: 40,
    title: L(
      {
        ko: "탈출 확률 90%",
        en: "90% chance by Christmas",
        ja: "クリスマスまでに付き合える確率 90%",
        "zh-CN": "圣诞前脱单概率 90%",
        "zh-TW": "聖誕前脫單機率 90%",
        vi: "Khả năng thoát ế trước Giáng sinh 90%",
        id: "Peluang lepas jomblo sebelum Natal 90%",
      }
    ),
    gaugeLabel: L(
      {
        ko: "90%",
        en: "90%",
        ja: "90%",
        "zh-CN": "90%",
        "zh-TW": "90%",
        vi: "90%",
        id: "90%",
      }
    ),
    levelLine: L(
      {
        ko: "크리스마스가 기다려지는 최상 단계",
        en: "The fullest stage. Christmas is something to look forward to",
        ja: "クリスマスが待ち遠しい、いちばんいい段階",
        "zh-CN": "最饱满的阶段，圣诞值得期待",
        "zh-TW": "最飽滿的階段，聖誕值得期待",
        vi: "Mức đẹp nhất, Giáng sinh thành điều để chờ",
        id: "Tahap paling siap, Natal jadi sesuatu yang dinanti",
      }
    ),
    shortDescription: L(
      {
        ko: "만남을 만들고 이어 가는 준비가 가장 잘 갖춰진 단계입니다.",
        en: "This is the stage where you are most ready to meet someone and keep it going.",
        ja: "出会いを作り、つないでいく準備がいちばん整った段階です。",
        "zh-CN": "制造见面、并把关系接下去的准备，现在最齐。",
        "zh-TW": "製造見面、並把關係接下去的準備，現在最齊。",
        vi: "Đây là lúc bạn sẵn sàng nhất để tạo cuộc gặp và giữ nó tiếp tục.",
        id: "Ini tahap saat kamu paling siap menciptakan pertemuan dan meneruskannya.",
      }
    ),
    description: L(
      {
        ko: "마음의 여유, 행동력, 대화 능력이 모두 좋습니다. 다만 확률이 높아도 연애는 서로의 마음이 맞아야 하므로, 날짜에 쫓기지 말고 사람을 먼저 보세요.",
        en: "Your room, your willingness to act, and your conversation are all in good shape. A high number still needs two people who want the same thing. Look at the person before you look at the date.",
        ja: "心の余裕も、行動力も、会話もよい状態です。ただ確率が高くても、恋愛はお互いの気持ちが合ってこそです。日付に追われず、人を先に見てください。",
        "zh-CN": "心里的余力、行动力、聊天的本事都很好。概率再高，恋爱也要两个人的心意碰上。别被日期追着跑，先看人。",
        "zh-TW": "心裡的餘力、行動力、聊天的本事都很好。機率再高，戀愛也要兩個人的心意碰上。別被日期追著跑，先看人。",
        vi: "Sự thư thái, khả năng hành động và cách trò chuyện đều tốt. Xác suất cao vẫn cần hai người cùng muốn. Đừng để ngày tháng đuổi. Nhìn người trước.",
        id: "Kelonggaran hati, keberanian bertindak, dan cara mengobrolmu semuanya baik. Angka tinggi tetap butuh dua orang yang saling mau. Jangan dikejar tanggal. Lihat orangnya lebih dulu.",
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
        ko: "최상 준비, 적극성, 열린 마음, 여유",
        en: "Fully ready, You go first, Open heart, Room to spare",
        ja: "最高の準備、自分から動く、開いた心、余裕",
        "zh-CN": "准备最足，主动，心开着，有余力",
        "zh-TW": "準備最足，主動，心開著，有餘力",
        vi: "Sẵn sàng nhất, Chủ động, Lòng mở, Còn thư thái",
        id: "Siap sepenuhnya, Berani memulai, Hati terbuka, Masih longgar",
      }
    ),
    strengths: L(
      {
        ko: "기회를 만들고 자연스럽게 관계를 이어 가는 힘",
        en: "You make the chance, then let the connection continue without forcing it",
        ja: "機会を作って、関係を自然につないでいける力",
        "zh-CN": "能造出机会，也能把关系自然地接下去",
        "zh-TW": "能造出機會，也能把關係自然地接下去",
        vi: "Tạo được cơ hội và nối mối quan hệ một cách tự nhiên",
        id: "Bisa menciptakan kesempatan dan meneruskan hubungan secara alami",
      }
    ),
    tips: L(
      {
        ko: "크리스마스를 목표 날짜가 아닌 좋은 사람을 만나는 과정으로 생각하기\n호감이 생기면 상대의 속도와 의사를 확인하며 천천히 다가가기\n이 노하우를 솔로 지인과 나누며 함께 응원하기",
        en: "Treat Christmas as part of meeting someone good, not as the due date\nIf you like someone, check their pace and whether they want this, then come closer slowly\nShare how you got here with single friends, and cheer each other on",
        ja: "クリスマスを締め切りではなく、いい人に会っていく過程として考える\n気になったら、相手の速度と意思を確認しながら、ゆっくり近づく\nこのやり方を、まだ一人の友達と分けて、一緒に応援し合う",
        "zh-CN": "把圣诞当成认识合适的人的过程，而不是截止日期\n有了好感，先确认对方的速度和意愿，再慢慢靠近\n把这套方法分给还单身的朋友，互相打气",
        "zh-TW": "把聖誕當成認識合適的人的過程，而不是截止日期\n有了好感，先確認對方的速度和意願，再慢慢靠近\n把這套方法分給還單身的朋友，互相打氣",
        vi: "Coi Giáng sinh là quá trình gặp một người hợp, không phải hạn nộp\nThích ai thì xem nhịp và ý của họ, rồi lại gần chậm\nChia cách này với bạn còn độc thân và cổ vũ nhau",
        id: "Anggap Natal sebagai proses bertemu orang yang pas, bukan tenggat\nKalau ada rasa, cek tempo dan kemauan dia, lalu mendekat pelan-pelan\nBagikan cara ini ke teman yang masih jomblo, dan saling menyemangati",
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
        ko: "준비는 충분합니다. 날짜가 아니라 사람을 보세요",
        en: "You are ready enough. Look at the person, not the date.",
        ja: "準備は十分です。日付ではなく、人を見てください。",
        "zh-CN": "准备够了。看的是人，不是日期。",
        "zh-TW": "準備夠了。看的是人，不是日期。",
        vi: "Chuẩn bị đã đủ. Nhìn người, không nhìn ngày.",
        id: "Persiapannya sudah cukup. Lihat orangnya, bukan tanggalnya.",
      }
    ),
    shareLine: L(
      {
        ko: "크리스마스까지 솔로 탈출 확률: 90% 🌟 ({score}점/40) 크리스마스가 기다려진대ㅋㅋ 너는 몇 %야? 결과 보내줘",
        en: "Odds I meet someone by Christmas: 90% 🌟 ({score}/40). Christmas cannot come soon enough, apparently. What's yours? Send it.",
        ja: "クリスマスまでに付き合える確率：90% 🌟（{score}点/40）クリスマスが待ち遠しいって。あなたは何%？結果送って",
        "zh-CN": "圣诞前脱单概率：90% 🌟（{score}分/40）说圣诞值得期待。你多少？把结果发我",
        "zh-TW": "聖誕前脫單機率：90% 🌟（{score}分/40）說聖誕值得期待。你多少？把結果發我",
        vi: "Khả năng thoát ế trước Giáng sinh: 90% 🌟 ({score}/40). Nghe nói Giáng sinh đáng để chờ. Bạn bao nhiêu? Gửi kết quả đi",
        id: "Peluang lepas jomblo sebelum Natal: 90% 🌟 ({score}/40). Katanya Natal jadi sesuatu yang dinanti. Kamu berapa? Kirim hasilnya",
      }
    ),
  },
];

export function calculatePhase3ChristmasSoloEscapeTotal(answers: number[]): number {
  return answers.reduce((sum, score) => sum + (score > 0 ? score : 0), 0);
}

export function getPhase3ChristmasSoloEscapeResult(total: number): Phase3ChristmasSoloEscapeResult {
  return phase3ChristmasSoloEscapeResults.find((item) => total >= item.min && total <= item.max) ?? phase3ChristmasSoloEscapeResults[0];
}

/** 가장 낮게 나온 문항 영역. 동점이면 문항 순서대로 모두. 모든 문항이 같으면 빈 배열 */
export function getPhase3ChristmasSoloEscapeObstacles(answers: number[]): Phase3ChristmasSoloEscapeAreaId[] {
  const scores = phase3ChristmasSoloEscapeQuestions.map((question) => answers[question.id - 1] ?? 0);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  if (min === max) return [];
  return phase3ChristmasSoloEscapeQuestions.filter((_, index) => scores[index] === min).map((question) => question.area);
}
