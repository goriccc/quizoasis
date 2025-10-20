export interface EmpathyQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface EmpathyResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  empathyScore: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const empathyQuestions: EmpathyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 울면서 힘든 이야기를 할 때?",
      en: "When a friend is crying and telling you a difficult story?",
      ja: "友達が泣きながら辛い話をしている時？",
      'zh-CN': "当朋友哭着讲述困难的故事时？",
      'zh-TW': "當朋友哭著講述困難的故事時？",
      vi: "Khi bạn bè khóc và kể cho bạn nghe một câu chuyện khó khăn?",
      id: "Ketika teman menangis dan menceritakan kisah sulit?"
    },
    options: [
      {
        text: {
          ko: "같이 울컥하고 감정이 북받침",
          en: "Cry together and feel overwhelmed with emotion",
          ja: "一緒に泣いて感情が込み上げる",
          'zh-CN': "一起哭泣，情感涌上心头",
          'zh-TW': "一起哭泣，情感湧上心頭",
          vi: "Cùng khóc và cảm xúc trào dâng",
          id: "Menangis bersama dan emosi meluap"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "진심으로 안타깝고 위로하고 싶음",
          en: "Feel genuinely sorry and want to comfort them",
          ja: "心から気の毒に思い、慰めたい",
          'zh-CN': "真心感到难过，想要安慰他们",
          'zh-TW': "真心感到難過，想要安慰他們",
          vi: "Thực sự cảm thấy thương và muốn an ủi họ",
          id: "Benar-benar merasa kasihan dan ingin menghibur mereka"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"그랬구나\" 들어주지만 크게 동요 안 함",
          en: "Listen saying \"I see\" but not deeply moved",
          ja: "「そうだったんだ」と聞くが大きく動揺しない",
          'zh-CN': "听着说\"原来如此\"但没有太大波动",
          'zh-TW': "聽著說「原來如此」但沒有太大波動",
          vi: "Lắng nghe nói \"vậy à\" nhưng không xúc động nhiều",
          id: "Mendengarkan sambil berkata \"begitu ya\" tapi tidak terlalu terharu"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "어떻게 반응해야 할지 어색함",
          en: "Feel awkward about how to react",
          ja: "どう反応すべきか気まずい",
          'zh-CN': "对如何反应感到尴尬",
          'zh-TW': "對如何反應感到尷尬",
          vi: "Cảm thấy khó xử về cách phản ứng",
          id: "Merasa canggung tentang cara bereaksi"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "슬픈 영화를 볼 때 당신은?",
      en: "When watching a sad movie, you are?",
      ja: "悲しい映画を見る時、あなたは？",
      'zh-CN': "看悲伤电影时，你是？",
      'zh-TW': "看悲傷電影時，你是？",
      vi: "Khi xem phim buồn, bạn là?",
      id: "Saat menonton film sedih, Anda adalah?"
    },
    options: [
      {
        text: {
          ko: "눈물 펑펑 쏟으며 완전 몰입",
          en: "Cry buckets and get completely immersed",
          ja: "涙をボロボロ流して完全に没入",
          'zh-CN': "泪流满面，完全沉浸其中",
          'zh-TW': "淚流滿面，完全沉浸其中",
          vi: "Khóc như mưa và hoàn toàn đắm chìm",
          id: "Menangis deras dan benar-benar terbenam"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "찡하고 눈물이 날 것 같음",
          en: "Feel a lump in throat and tears might come",
          ja: "胸が詰まって涙が出そう",
          'zh-CN': "喉咙哽咽，眼泪要流出来",
          'zh-TW': "喉嚨哽咽，眼淚要流出來",
          vi: "Cảm thấy nghẹn ngào và nước mắt có thể rơi",
          id: "Merasa tersedak dan air mata mungkin keluar"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "슬프긴 한데 눈물은 안 남",
          en: "It's sad but tears don't come",
          ja: "悲しいけど涙は出ない",
          'zh-CN': "虽然悲伤但不会流泪",
          'zh-TW': "雖然悲傷但不會流淚",
          vi: "Buồn nhưng nước mắt không rơi",
          id: "Sedih tapi air mata tidak keluar"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"연기잘하네\" 객관적으로 봄",
          en: "Watch objectively saying \"Good acting\"",
          ja: "「演技うまいね」と客観的に見る",
          'zh-CN': "客观地看，说\"演技不错\"",
          'zh-TW': "客觀地看，說「演技不錯」",
          vi: "Xem một cách khách quan nói \"Diễn hay\"",
          id: "Menonton secara objektif sambil berkata \"Akting bagus\""
        },
        scores: { Type4: 8 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "누군가 좋은 소식을 전할 때?",
      en: "When someone shares good news?",
      ja: "誰かが良い知らせを伝える時？",
      'zh-CN': "当有人分享好消息时？",
      'zh-TW': "當有人分享好消息時？",
      vi: "Khi ai đó chia sẻ tin tốt?",
      id: "Ketika seseorang berbagi kabar baik?"
    },
    options: [
      {
        text: {
          ko: "내 일처럼 기쁘고 신남",
          en: "Get excited and happy as if it's my own news",
          ja: "自分のことのように嬉しくて興奮する",
          'zh-CN': "像自己的事一样高兴和兴奋",
          'zh-TW': "像自己的事一樣高興和興奮",
          vi: "Vui mừng và phấn khích như chuyện của mình",
          id: "Senang dan bersemangat seperti berita sendiri"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "진심으로 축하하고 기뻐함",
          en: "Sincerely congratulate and feel happy",
          ja: "心からお祝いして喜ぶ",
          'zh-CN': "真心祝贺并感到高兴",
          'zh-TW': "真心祝賀並感到高興",
          vi: "Chúc mừng chân thành và cảm thấy vui",
          id: "Sungguh-sungguh mengucapkan selamat dan merasa senang"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"잘됐네!\" 적당히 반응",
          en: "React appropriately saying \"That's great!\"",
          ja: "「良かったね！」と適度に反応",
          'zh-CN': "适当反应说\"太好了！\"",
          'zh-TW': "適當反應說「太好了！」",
          vi: "Phản ứng vừa phải nói \"Tuyệt vời!\"",
          id: "Bereaksi dengan tepat sambil berkata \"Bagus!\""
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"그래? 좋겠다\" 담담함",
          en: "Respond calmly saying \"Really? That's good\"",
          ja: "「そう？良かったね」と冷静に反応",
          'zh-CN': "冷静地说\"是吗？那很好\"",
          'zh-TW': "冷靜地說「是嗎？那很好」",
          vi: "Phản ứng bình tĩnh nói \"Vậy à? Tốt nhỉ\"",
          id: "Bereaksi dengan tenang sambil berkata \"Benarkah? Bagus\""
        },
        scores: { Type4: 3, Type5: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "길에서 다친 동물을 봤을 때?",
      en: "When you see an injured animal on the street?",
      ja: "道で怪我をした動物を見た時？",
      'zh-CN': "在街上看到受伤的动物时？",
      'zh-TW': "在街上看到受傷的動物時？",
      vi: "Khi bạn nhìn thấy một con vật bị thương trên đường?",
      id: "Ketika Anda melihat hewan yang terluka di jalan?"
    },
    options: [
      {
        text: {
          ko: "가슴이 아파서 꼭 도와줘야 함",
          en: "Heart aches and must help them",
          ja: "胸が痛んで必ず助けなければならない",
          'zh-CN': "心痛，必须帮助它们",
          'zh-TW': "心痛，必須幫助它們",
          vi: "Tim đau và phải giúp chúng",
          id: "Hati sakit dan harus membantu mereka"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "안쓰럽고 도울 방법 찾음",
          en: "Feel sorry and look for ways to help",
          ja: "気の毒で助ける方法を探す",
          'zh-CN': "感到难过，寻找帮助的方法",
          'zh-TW': "感到難過，尋找幫助的方法",
          vi: "Cảm thấy thương và tìm cách giúp đỡ",
          id: "Merasa kasihan dan mencari cara untuk membantu"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "불쌍하긴 한데 어쩔 수 없음",
          en: "Feel sorry but can't do anything about it",
          ja: "可哀想だけど仕方ない",
          'zh-CN': "虽然可怜但无能为力",
          'zh-TW': "雖然可憐但無能為力",
          vi: "Thương nhưng không thể làm gì",
          id: "Kasihan tapi tidak bisa berbuat apa-apa"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "그런가보다 하고 지나침",
          en: "Think 'that's how it is' and pass by",
          ja: "「そういうものか」と思って通り過ぎる",
          'zh-CN': "想\"就是这样\"然后走过",
          'zh-TW': "想「就是這樣」然後走過",
          vi: "Nghĩ \"vậy thôi\" và đi qua",
          id: "Berpikir \"begitulah\" dan lewat"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구들 사이 다툼을 볼 때?",
      en: "When you see friends fighting?",
      ja: "友達同士の喧嘩を見る時？",
      'zh-CN': "当你看到朋友之间争吵时？",
      'zh-TW': "當你看到朋友之間爭吵時？",
      vi: "Khi bạn thấy bạn bè cãi nhau?",
      id: "Ketika Anda melihat teman-teman bertengkar?"
    },
    options: [
      {
        text: {
          ko: "양쪽 마음이 다 이해돼서 힘듦",
          en: "It's hard because I understand both sides' feelings",
          ja: "両方の気持ちが分かって辛い",
          'zh-CN': "理解双方的心情所以很困难",
          'zh-TW': "理解雙方的所以很困難",
          vi: "Khó khăn vì hiểu cảm xúc của cả hai bên",
          id: "Sulit karena memahami perasaan kedua belah pihak"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "중재하려고 노력함",
          en: "Try to mediate between them",
          ja: "仲裁しようと努力する",
          'zh-CN': "努力调解他们",
          'zh-TW': "努力調解他們",
          vi: "Cố gắng hòa giải giữa họ",
          id: "Berusaha menjadi penengah"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "내 일 아니면 관여 안 함",
          en: "Don't get involved if it's not my business",
          ja: "自分のことじゃなければ関わらない",
          'zh-CN': "不是我的事就不参与",
          'zh-TW': "不是我的事就不參與",
          vi: "Không can thiệp nếu không phải việc của mình",
          id: "Tidak ikut campur jika bukan urusan saya"
        },
        scores: { Type3: 3, Type5: 2 }
      },
      {
        text: {
          ko: "누가 논리적으로 맞는지만 봄",
          en: "Just see who is logically right",
          ja: "誰が論理的に正しいかだけを見る",
          'zh-CN': "只看谁在逻辑上是对的",
          'zh-TW': "只看誰在邏輯上是對的",
          vi: "Chỉ xem ai đúng về mặt logic",
          id: "Hanya melihat siapa yang benar secara logis"
        },
        scores: { Type4: 8 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "드라마나 소설 속 인물에 대해?",
      en: "About characters in dramas or novels?",
      ja: "ドラマや小説の登場人物について？",
      'zh-CN': "关于电视剧或小说中的人物？",
      'zh-TW': "關於電視劇或小說中的人物？",
      vi: "Về các nhân vật trong phim truyền hình hoặc tiểu thuyết?",
      id: "Tentang karakter dalam drama atau novel?"
    },
    options: [
      {
        text: {
          ko: "완전 감정이입해서 힘들 때도",
          en: "Completely empathize and sometimes struggle",
          ja: "完全に感情移入して辛い時もある",
          'zh-CN': "完全投入感情，有时很困难",
          'zh-TW': "完全投入感情，有時很困難",
          vi: "Hoàn toàn đồng cảm và đôi khi khó khăn",
          id: "Benar-benar berempati dan kadang kesulitan"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "캐릭터 감정을 잘 이해함",
          en: "Understand the character's emotions well",
          ja: "キャラクターの感情をよく理解する",
          'zh-CN': "很好地理解角色的情感",
          'zh-TW': "很好地理解角色的情感",
          vi: "Hiểu rõ cảm xúc của nhân vật",
          id: "Memahami emosi karakter dengan baik"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "흥미롭게 보지만 선 있음",
          en: "Watch with interest but keep distance",
          ja: "興味深く見るが距離を保つ",
          'zh-CN': "有兴趣地看但保持距离",
          'zh-TW': "有興趣地看但保持距離",
          vi: "Xem với sự quan tâm nhưng giữ khoảng cách",
          id: "Menonton dengan minat tapi menjaga jarak"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"허구인데\" 라고 생각함",
          en: "Think \"It's fiction\"",
          ja: "「フィクションだ」と思う",
          'zh-CN': "想\"这是虚构的\"",
          'zh-TW': "想「這是虛構的」",
          vi: "Nghĩ \"Đây là hư cấu\"",
          id: "Berpikir \"Ini fiksi\""
        },
        scores: { Type4: 3, Type6: 8 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "누군가 화났을 때 당신은?",
      en: "When someone is angry, you are?",
      ja: "誰かが怒っている時、あなたは？",
      'zh-CN': "当有人生气时，你是？",
      'zh-TW': "當有人生氣時，你是？",
      vi: "Khi ai đó tức giận, bạn là?",
      id: "Ketika seseorang marah, Anda adalah?"
    },
    options: [
      {
        text: {
          ko: "그 사람 기분이 느껴져서 불편",
          en: "Feel uncomfortable because I sense their mood",
          ja: "その人の気分が感じられて不快",
          'zh-CN': "感受到他们的情绪所以不舒服",
          'zh-TW': "感受到他們的情緒所以不舒服",
          vi: "Cảm thấy khó chịu vì cảm nhận được tâm trạng của họ",
          id: "Merasa tidak nyaman karena merasakan suasana hati mereka"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "왜 화났는지 이해하려 함",
          en: "Try to understand why they're angry",
          ja: "なぜ怒っているのか理解しようとする",
          'zh-CN': "试图理解他们为什么生气",
          'zh-TW': "試圖理解他們為什麼生氣",
          vi: "Cố gắng hiểu tại sao họ tức giận",
          id: "Berusaha memahami mengapa mereka marah"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"화났네\" 인지만 함",
          en: "Just acknowledge \"They're angry\"",
          ja: "「怒ってるね」と認識するだけ",
          'zh-CN': "只是意识到\"他们生气了\"",
          'zh-TW': "只是意識到「他們生氣了」",
          vi: "Chỉ nhận biết \"Họ đang tức giận\"",
          id: "Hanya mengakui \"Mereka marah\""
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"왜 저래?\" 이해 안 됨",
          en: "Don't understand \"Why are they like that?\"",
          ja: "「なぜああなの？」理解できない",
          'zh-CN': "不理解\"为什么那样？\"",
          'zh-TW': "不理解「為什麼那樣？」",
          vi: "Không hiểu \"Tại sao họ lại như vậy?\"",
          id: "Tidak mengerti \"Mengapa mereka seperti itu?\""
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "타인의 고민 상담을 할 때?",
      en: "When giving advice to someone's problems?",
      ja: "他人の悩み相談をする時？",
      'zh-CN': "当给别人提供建议时？",
      'zh-TW': "當給別人提供建議時？",
      vi: "Khi tư vấn cho vấn đề của người khác?",
      id: "Ketika memberikan nasihat untuk masalah orang lain?"
    },
    options: [
      {
        text: {
          ko: "완전 빠져들어서 내가 더 힘듦",
          en: "Get completely absorbed and I struggle more",
          ja: "完全に没入して自分がもっと辛くなる",
          'zh-CN': "完全投入，我更加困难",
          'zh-TW': "完全投入，我更加困難",
          vi: "Hoàn toàn đắm chìm và tôi khó khăn hơn",
          id: "Benar-benar terbenam dan saya lebih kesulitan"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "진심으로 듣고 공감해줌",
          en: "Listen sincerely and empathize",
          ja: "心から聞いて共感してあげる",
          'zh-CN': "真诚地倾听并共情",
          'zh-TW': "真誠地傾聽並共情",
          vi: "Lắng nghe chân thành và đồng cảm",
          id: "Mendengarkan dengan tulus dan berempati"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "들어주지만 해결책 위주",
          en: "Listen but focus on solutions",
          ja: "聞いてくれるが解決策中心",
          'zh-CN': "倾听但以解决方案为主",
          'zh-TW': "傾聽但以解決方案為主",
          vi: "Lắng nghe nhưng tập trung vào giải pháp",
          id: "Mendengarkan tapi fokus pada solusi"
        },
        scores: { Type4: 8 }
      },
      {
        text: {
          ko: "\"그래서 어쩌라고?\" 답답함",
          en: "Feel frustrated \"So what should I do?\"",
          ja: "「だからどうすればいいの？」イライラする",
          'zh-CN': "感到沮丧\"那该怎么办？\"",
          'zh-TW': "感到沮喪「那該怎麼辦？」",
          vi: "Cảm thấy bực bội \"Vậy thì phải làm sao?\"",
          id: "Merasa frustrasi \"Jadi harus bagaimana?\""
        },
        scores: { Type5: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "SNS에서 슬픈 소식을 봤을 때?",
      en: "When you see sad news on SNS?",
      ja: "SNSで悲しいニュースを見た時？",
      'zh-CN': "在社交媒体上看到悲伤消息时？",
      'zh-TW': "在社交媒體上看到悲傷消息時？",
      vi: "Khi bạn thấy tin buồn trên mạng xã hội?",
      id: "Ketika Anda melihat berita sedih di media sosial?"
    },
    options: [
      {
        text: {
          ko: "모르는 사람인데도 마음 아픔",
          en: "Heart aches even for strangers",
          ja: "知らない人なのに心が痛む",
          'zh-CN': "即使是陌生人也会心痛",
          'zh-TW': "即使是陌生人也會心痛",
          vi: "Tim đau ngay cả với người lạ",
          id: "Hati sakit bahkan untuk orang asing"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "안타깝고 걱정됨",
          en: "Feel sorry and worried",
          ja: "気の毒で心配になる",
          'zh-CN': "感到难过和担心",
          'zh-TW': "感到難過和擔心",
          vi: "Cảm thấy thương và lo lắng",
          id: "Merasa kasihan dan khawatir"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"안됐네\" 하고 넘어감",
          en: "Say \"That's unfortunate\" and move on",
          ja: "「残念だね」と言って通り過ぎる",
          'zh-CN': "说\"真不幸\"然后继续",
          'zh-TW': "說「真不幸」然後繼續",
          vi: "Nói \"Thật không may\" và tiếp tục",
          id: "Berkata \"Sayang sekali\" dan melanjutkan"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "별 감정 안 듦",
          en: "No particular emotion",
          ja: "特に感情は湧かない",
          'zh-CN': "没有特别的情绪",
          'zh-TW': "沒有特別的情緒",
          vi: "Không có cảm xúc đặc biệt",
          id: "Tidak ada emosi khusus"
        },
        scores: { Type5: 3, Type6: 8 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "누군가 실수했을 때?",
      en: "When someone makes a mistake?",
      ja: "誰かがミスをした時？",
      'zh-CN': "当有人犯错时？",
      'zh-TW': "當有人犯錯時？",
      vi: "Khi ai đó mắc lỗi?",
      id: "Ketika seseorang membuat kesalahan?"
    },
    options: [
      {
        text: {
          ko: "그 사람 창피함이 느껴짐",
          en: "Feel their embarrassment",
          ja: "その人の恥ずかしさが感じられる",
          'zh-CN': "感受到他们的尴尬",
          'zh-TW': "感受到他們的尷尬",
          vi: "Cảm nhận được sự xấu hổ của họ",
          id: "Merasakan rasa malu mereka"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"괜찮아\" 위로해주고 싶음",
          en: "Want to comfort them saying \"It's okay\"",
          ja: "「大丈夫」と慰めたい",
          'zh-CN': "想安慰他们说\"没关系\"",
          'zh-TW': "想安慰他們說「沒關係」",
          vi: "Muốn an ủi họ nói \"Không sao\"",
          id: "Ingin menghibur mereka dengan berkata \"Tidak apa-apa\""
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"실수할 수도 있지\" 담담함",
          en: "Respond calmly \"Mistakes happen\"",
          ja: "「ミスすることもあるよね」と冷静に",
          'zh-CN': "冷静地说\"犯错是可能的\"",
          'zh-TW': "冷靜地說「犯錯是可能的」",
          vi: "Phản ứng bình tĩnh \"Lỗi lầm có thể xảy ra\"",
          id: "Bereaksi dengan tenang \"Kesalahan bisa terjadi\""
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"조심하지\" 비판적",
          en: "Be critical \"Be more careful\"",
          ja: "「気をつけろ」と批判的",
          'zh-CN': "批评地说\"小心点\"",
          'zh-TW': "批評地說「小心點」",
          vi: "Phê bình \"Cẩn thận hơn\"",
          id: "Kritis \"Lebih hati-hati\""
        },
        scores: { Type4: 3, Type5: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "뉴스에서 재난 소식을 볼 때?",
      en: "When you see disaster news on TV?",
      ja: "ニュースで災害のニュースを見る時？",
      'zh-CN': "在新闻中看到灾难消息时？",
      'zh-TW': "在新聞中看到災難消息時？",
      vi: "Khi bạn thấy tin tức thảm họa trên TV?",
      id: "Ketika Anda melihat berita bencana di TV?"
    },
    options: [
      {
        text: {
          ko: "피해자 생각에 가슴 아픔",
          en: "Heart aches thinking about the victims",
          ja: "被害者のことを考えると胸が痛む",
          'zh-CN': "想到受害者就心痛",
          'zh-TW': "想到受害者就心痛",
          vi: "Tim đau khi nghĩ về các nạn nhân",
          id: "Hati sakit memikirkan para korban"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "안타깝고 도울 방법 생각",
          en: "Feel sorry and think of ways to help",
          ja: "気の毒で助ける方法を考える",
          'zh-CN': "感到难过并思考帮助的方法",
          'zh-TW': "感到難過並思考幫助的方法",
          vi: "Cảm thấy thương và nghĩ cách giúp đỡ",
          id: "Merasa kasihan dan memikirkan cara membantu"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"심각하네\" 인지만 함",
          en: "Just acknowledge \"It's serious\"",
          ja: "「深刻だね」と認識するだけ",
          'zh-CN': "只是意识到\"很严重\"",
          'zh-TW': "只是意識到「很嚴重」",
          vi: "Chỉ nhận biết \"Nghiêm trọng\"",
          id: "Hanya mengakui \"Serius\""
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "정보로만 받아들임",
          en: "Accept it only as information",
          ja: "情報としてのみ受け入れる",
          'zh-CN': "只作为信息接受",
          'zh-TW': "只作為信息接受",
          vi: "Chỉ tiếp nhận như thông tin",
          id: "Hanya menerima sebagai informasi"
        },
        scores: { Type5: 3, Type6: 8 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 생각하는 공감이란?",
      en: "What do you think empathy is?",
      ja: "あなたが考える共感とは？",
      'zh-CN': "你认为共情是什么？",
      'zh-TW': "你認為共情是什麼？",
      vi: "Bạn nghĩ đồng cảm là gì?",
      id: "Menurut Anda, empati itu apa?"
    },
    options: [
      {
        text: {
          ko: "타인의 감정을 내 것처럼 느끼는 것",
          en: "Feeling others' emotions as my own",
          ja: "他人の感情を自分のことのように感じること",
          'zh-CN': "像感受自己的情感一样感受他人的情感",
          'zh-TW': "像感受自己的情感一樣感受他人的情感",
          vi: "Cảm nhận cảm xúc của người khác như của chính mình",
          id: "Merasakan emosi orang lain seperti emosi sendiri"
        },
        scores: { Type1: 3, Type2: 3 }
      },
      {
        text: {
          ko: "상대 입장에서 이해하고 위로하는 것",
          en: "Understanding and comforting from their perspective",
          ja: "相手の立場から理解し慰めること",
          'zh-CN': "从对方立场理解并安慰",
          'zh-TW': "從對方立場理解並安慰",
          vi: "Hiểu và an ủi từ góc độ của họ",
          id: "Memahami dan menghibur dari sudut pandang mereka"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "상대 감정을 인지하는 것",
          en: "Recognizing the other person's emotions",
          ja: "相手の感情を認識すること",
          'zh-CN': "识别对方的情感",
          'zh-TW': "識別對方的情感",
          vi: "Nhận biết cảm xúc của đối phương",
          id: "Mengenali emosi orang lain"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "논리적으로 상황을 이해하는 것",
          en: "Understanding the situation logically",
          ja: "論理的に状況を理解すること",
          'zh-CN': "逻辑性地理解情况",
          'zh-TW': "邏輯性地理解情況",
          vi: "Hiểu tình huống một cách logic",
          id: "Memahami situasi secara logis"
        },
        scores: { Type4: 3, Type5: 2 }
      }
    ]
  }
];

export const empathyResults: EmpathyResult[] = [
  {
    type: "Type1",
    emoji: "💗",
    title: {
      ko: "초공감 감성형",
      en: "Hyper-Empathetic Emotional Type",
      ja: "超共感感性型",
      'zh-CN': "超共情感性型",
      'zh-TW': "超共情感性型",
      vi: "Kiểu cảm xúc siêu đồng cảm",
      id: "Tipe Emosional Hiper-Empati"
    },
    description: {
      ko: "너무 깊이 느껴서 가끔 힘들어요\n타인의 감정을 자신의 것처럼 강하게 느낍니다. 공감 능력이 너무 높아서 다른 사람의 고통을 보면 자신이 더 힘들 때가 있습니다. 슬픈 영화를 보면 며칠간 우울하고, 친구 고민에 완전히 빠져듭니다. 감정적 경계선이 약해서 감정 소진이 쉽게 옵니다. 자신을 보호하는 법을 배워야 합니다.",
      en: "Sometimes it's hard because I feel too deeply\nI feel others' emotions as strongly as my own. My empathy is so high that when I see others suffering, I suffer more. When I watch sad movies, I'm depressed for days, and I get completely absorbed in friends' problems. My emotional boundaries are weak, so I easily get emotionally exhausted. I need to learn how to protect myself.",
      ja: "深く感じすぎて時々辛いです\n他人の感情を自分のことのように強く感じます。共感能力が高すぎて、他人の苦痛を見ると自分がもっと辛くなることがあります。悲しい映画を見ると数日間憂鬱になり、友達の悩みに完全に巻き込まれます。感情的な境界線が弱く、感情的な消耗が起こりやすいです。自分を守る方法を学ぶ必要があります。",
      'zh-CN': "感受太深，有时很辛苦\n像感受自己的情感一样强烈地感受他人的情感。共情能力太高，看到别人痛苦时自己更痛苦。看悲伤电影会抑郁几天，完全陷入朋友的烦恼中。情感边界薄弱，容易情感耗竭。需要学会保护自己。",
      'zh-TW': "感受太深，有時很辛苦\n像感受自己的情感一樣強烈地感受他人的情感。共情能力太高，看到別人痛苦時自己更痛苦。看悲傷電影會憂鬱幾天，完全陷入朋友的煩惱中。情感邊界薄弱，容易情感耗竭。需要學會保護自己。",
      vi: "Đôi khi khó khăn vì cảm nhận quá sâu sắc\nTôi cảm nhận cảm xúc của người khác mạnh mẽ như của chính mình. Khả năng đồng cảm quá cao, khi thấy người khác đau khổ, tôi còn đau khổ hơn. Khi xem phim buồn, tôi chán nản vài ngày, và hoàn toàn bị cuốn vào vấn đề của bạn bè. Ranh giới cảm xúc yếu, dễ bị kiệt sức về mặt cảm xúc. Cần học cách bảo vệ bản thân.",
      id: "Kadang sulit karena merasakan terlalu dalam\nSaya merasakan emosi orang lain sekuat emosi sendiri. Empati terlalu tinggi, ketika melihat orang lain menderita, saya lebih menderita. Saat menonton film sedih, saya depresi berhari-hari, dan benar-benar terlibat dalam masalah teman. Batas emosional lemah, mudah kelelahan emosional. Perlu belajar melindungi diri sendiri."
    },
    pros: [
      { 
        ko: "깊은 이해",
        en: "Deep understanding",
        ja: "深い理解",
        'zh-CN': "深度理解",
        'zh-TW': "深度理解",
        vi: "Hiểu biết sâu sắc",
        id: "Pemahaman mendalam"
      },
      { 
        ko: "진심 어린 위로",
        en: "Sincere comfort",
        ja: "心からの慰め",
        'zh-CN': "真诚的安慰",
        'zh-TW': "真誠的安慰",
        vi: "An ủi chân thành",
        id: "Penghiburan tulus"
      },
      { 
        ko: "감성 풍부",
        en: "Rich emotions",
        ja: "豊かな感性",
        'zh-CN': "丰富的情感",
        'zh-TW': "豐富的情感",
        vi: "Cảm xúc phong phú",
        id: "Emosi yang kaya"
      }
    ],
    cons: [
      { 
        ko: "감정 소진",
        en: "Emotional exhaustion",
        ja: "感情の消耗",
        'zh-CN': "情感耗竭",
        'zh-TW': "情感耗竭",
        vi: "Kiệt sức cảm xúc",
        id: "Kelelahan emosional"
      },
      { 
        ko: "경계 부족",
        en: "Lack of boundaries",
        ja: "境界線の不足",
        'zh-CN': "缺乏边界",
        'zh-TW': "缺乏邊界",
        vi: "Thiếu ranh giới",
        id: "Kurang batasan"
      },
      { 
        ko: "우울 위험",
        en: "Risk of depression",
        ja: "うつ病のリスク",
        'zh-CN': "抑郁风险",
        'zh-TW': "抑鬱風險",
        vi: "Nguy cơ trầm cảm",
        id: "Risiko depresi"
      }
    ],
    advice: {
      ko: "공감은 좋지만 당신도 중요해요. 타인의 감정과 내 감정을 분리하는 연습이 필요합니다.",
      en: "Empathy is good, but you're important too. You need to practice separating others' emotions from your own.",
      ja: "共感は良いことですが、あなたも大切です。他人の感情と自分の感情を分離する練習が必要です。",
      'zh-CN': "共情很好，但你自己也很重要。需要练习将他人情感与自己的情感分离。",
      'zh-TW': "共情很好，但你自己也很重要。需要練習將他人情感與自己的情感分離。",
      vi: "Đồng cảm là tốt, nhưng bạn cũng quan trọng. Cần luyện tập tách biệt cảm xúc của người khác với cảm xúc của mình.",
      id: "Empati itu baik, tapi Anda juga penting. Perlu berlatih memisahkan emosi orang lain dengan emosi sendiri."
    },
    empathyScore: {
      ko: "★★★★★ (5/5) 너무 높음",
      en: "★★★★★ (5/5) Too High",
      ja: "★★★★★ (5/5) 高すぎる",
      'zh-CN': "★★★★★ (5/5) 过高",
      'zh-TW': "★★★★★ (5/5) 過高",
      vi: "★★★★★ (5/5) Quá cao",
      id: "★★★★★ (5/5) Terlalu Tinggi"
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type5", "Type6"],
      difficult: []
    }
  },
  {
    type: "Type2",
    emoji: "🌸",
    title: {
      ko: "높은 공감형",
      en: "High Empathy Type",
      ja: "高い共感型",
      'zh-CN': "高共情型",
      'zh-TW': "高共情型",
      vi: "Kiểu đồng cảm cao",
      id: "Tipe Empati Tinggi"
    },
    description: {
      ko: "당신 마음 잘 알아요! 따뜻한 위로자\n공감 능력이 뛰어나면서도 균형잡힌 이상적인 타입입니다. 타인의 감정을 잘 이해하고 적절히 위로할 줄 압니다. 감정에 휩쓸리지 않으면서도 진심으로 공감합니다. 좋은 친구, 좋은 연인, 좋은 상담자가 될 수 있는 능력이 있습니다. 가장 건강한 공감 수준입니다.",
      en: "I understand your feelings well! A warm comforter\nAn ideal type with excellent empathy while maintaining balance. I understand others' emotions well and know how to comfort them appropriately. I empathize sincerely without being swept away by emotions. I have the ability to be a good friend, lover, and counselor. This is the healthiest level of empathy.",
      ja: "あなたの気持ちがよく分かります！温かい慰め手\n優れた共感能力を持ちながらもバランスの取れた理想的なタイプです。他人の感情をよく理解し、適切に慰めることができます。感情に流されずに心から共感します。良い友人、恋人、カウンセラーになれる能力があります。最も健康的な共感レベルです。",
      'zh-CN': "我很了解你的心情！温暖的安慰者\n拥有出色共情能力且平衡的理想类型。善于理解他人情感并适当安慰。不被情感冲昏头脑，真心共情。具备成为好朋友、恋人、咨询师的能力。这是最健康的共情水平。",
      'zh-TW': "我很了解你的心情！溫暖的安慰者\n擁有出色共情能力且平衡的理想類型。善於理解他人情感並適當安慰。不被情感沖昏頭腦，真心共情。具備成為好朋友、戀人、諮詢師的能力。這是最健康的共情水平。",
      vi: "Tôi hiểu rõ cảm xúc của bạn! Người an ủi ấm áp\nLà kiểu lý tưởng với khả năng đồng cảm xuất sắc nhưng vẫn cân bằng. Tôi hiểu rõ cảm xúc của người khác và biết cách an ủi phù hợp. Tôi đồng cảm chân thành mà không bị cuốn theo cảm xúc. Có khả năng trở thành bạn tốt, người yêu, và cố vấn. Đây là mức độ đồng cảm lành mạnh nhất.",
      id: "Saya memahami perasaan Anda dengan baik! Penghibur yang hangat\nTipe ideal dengan kemampuan empati yang luar biasa sambil tetap seimbang. Saya memahami emosi orang lain dengan baik dan tahu cara menghibur mereka dengan tepat. Saya berempati dengan tulus tanpa terbawa emosi. Memiliki kemampuan menjadi teman baik, kekasih, dan konselor. Ini adalah tingkat empati yang paling sehat."
    },
    pros: [
      { 
        ko: "이해심",
        en: "Understanding",
        ja: "理解力",
        'zh-CN': "理解力",
        'zh-TW': "理解力",
        vi: "Khả năng hiểu biết",
        id: "Kemampuan memahami"
      },
      { 
        ko: "위로 능력",
        en: "Comforting ability",
        ja: "慰めの能力",
        'zh-CN': "安慰能力",
        'zh-TW': "安慰能力",
        vi: "Khả năng an ủi",
        id: "Kemampuan menghibur"
      },
      { 
        ko: "균형감",
        en: "Balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        vi: "Cảm giác cân bằng",
        id: "Rasa keseimbangan"
      },
      { 
        ko: "신뢰",
        en: "Trust",
        ja: "信頼",
        'zh-CN': "信任",
        'zh-TW': "信任",
        vi: "Niềm tin",
        id: "Kepercayaan"
      }
    ],
    cons: [
      { 
        ko: "가끔 피곤할 수 있음",
        en: "Sometimes can be tired",
        ja: "時々疲れることがある",
        'zh-CN': "有时会感到疲惫",
        'zh-TW': "有時會感到疲憊",
        vi: "Đôi khi có thể mệt mỏi",
        id: "Kadang bisa lelah"
      }
    ],
    advice: {
      ko: "완벽해요! 지금처럼 타인을 이해하되 자신도 돌보는 당신이 최고입니다.",
      en: "Perfect! You're the best at understanding others while taking care of yourself.",
      ja: "完璧です！他人を理解しながら自分も大切にするあなたが最高です。",
      'zh-CN': "完美！既能理解他人又能照顾自己的你是最棒的。",
      'zh-TW': "完美！既能理解他人又能照顧自己的你是最棒的。",
      vi: "Hoàn hảo! Bạn là người tốt nhất khi hiểu người khác mà vẫn chăm sóc bản thân.",
      id: "Sempurna! Anda yang terbaik dalam memahami orang lain sambil merawat diri sendiri."
    },
    empathyScore: {
      ko: "★★★★☆ (4/5) 이상적",
      en: "★★★★☆ (4/5) Ideal",
      ja: "★★★★☆ (4/5) 理想的",
      'zh-CN': "★★★★☆ (4/5) 理想",
      'zh-TW': "★★★★☆ (4/5) 理想",
      vi: "★★★★☆ (4/5) Lý tưởng",
      id: "★★★★☆ (4/5) Ideal"
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type1", "Type3"],
      careful: ["Type6"],
      difficult: []
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "적당한 균형형",
      en: "Balanced Empathy Type",
      ja: "適度なバランス型",
      'zh-CN': "适度平衡型",
      'zh-TW': "適度平衡型",
      vi: "Kiểu cân bằng vừa phải",
      id: "Tipe Keseimbangan Sedang"
    },
    description: {
      ko: "이해는 하지만 거리는 유지해요\n보통 수준의 공감 능력을 가지고 있습니다. 타인의 감정을 인지하고 이해하지만 깊이 빠져들지 않습니다. 적절한 거리를 유지하며 객관성을 잃지 않습니다. 공감과 이성의 균형이 있어 실용적입니다. 다만 가까운 사람은 때때로 차갑게 느낄 수 있습니다.",
      en: "I understand but keep my distance\nI have an average level of empathy. I recognize and understand others' emotions but don't get deeply involved. I maintain appropriate distance and don't lose objectivity. There's a balance between empathy and reason, making me practical. However, close people may sometimes feel I'm cold.",
      ja: "理解はしますが距離を保ちます\n普通レベルの共感能力を持っています。他人の感情を認識し理解しますが、深く巻き込まれません。適切な距離を保ち、客観性を失いません。共感と理性のバランスがあり、実用的です。ただし、近い人は時々冷たく感じるかもしれません。",
      'zh-CN': "理解但保持距离\n拥有普通水平的共情能力。能识别和理解他人情感，但不会深陷其中。保持适当距离，不失客观性。共情与理性平衡，很实用。不过亲近的人有时可能觉得冷漠。",
      'zh-TW': "理解但保持距離\n擁有普通水平的共情能力。能識別和理解他人情感，但不會深陷其中。保持適當距離，不失客觀性。共情與理性平衡，很實用。不過親近的人有時可能覺得冷漠。",
      vi: "Tôi hiểu nhưng giữ khoảng cách\nTôi có khả năng đồng cảm ở mức bình thường. Tôi nhận biết và hiểu cảm xúc của người khác nhưng không bị cuốn sâu vào. Tôi duy trì khoảng cách phù hợp và không mất tính khách quan. Có sự cân bằng giữa đồng cảm và lý trí, rất thực tế. Tuy nhiên, người thân có thể đôi khi cảm thấy tôi lạnh lùng.",
      id: "Saya memahami tapi menjaga jarak\nSaya memiliki kemampuan empati pada tingkat normal. Saya mengenali dan memahami emosi orang lain tapi tidak terlibat dalam. Saya menjaga jarak yang tepat dan tidak kehilangan objektivitas. Ada keseimbangan antara empati dan nalar, sangat praktis. Namun, orang dekat mungkin kadang merasa saya dingin."
    },
    pros: [
      { 
        ko: "균형감",
        en: "Balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        vi: "Cảm giác cân bằng",
        id: "Rasa keseimbangan"
      },
      { 
        ko: "객관성",
        en: "Objectivity",
        ja: "客観性",
        'zh-CN': "客观性",
        'zh-TW': "客觀性",
        vi: "Tính khách quan",
        id: "Objektivitas"
      },
      { 
        ko: "냉정함",
        en: "Calmness",
        ja: "冷静さ",
        'zh-CN': "冷静",
        'zh-TW': "冷靜",
        vi: "Sự bình tĩnh",
        id: "Ket tenangan"
      },
      { 
        ko: "실용성",
        en: "Practicality",
        ja: "実用性",
        'zh-CN': "实用性",
        'zh-TW': "實用性",
        vi: "Tính thực tế",
        id: "Kepraktisan"
      }
    ],
    cons: [
      { 
        ko: "가끔 냉정해 보임",
        en: "Sometimes seems cold",
        ja: "時々冷たく見える",
        'zh-CN': "有时显得冷漠",
        'zh-TW': "有時顯得冷漠",
        vi: "Đôi khi có vẻ lạnh lùng",
        id: "Kadang terlihat dingin"
      },
      { 
        ko: "깊은 교감 어려움",
        en: "Difficulty with deep connection",
        ja: "深い共感が困難",
        'zh-CN': "深度共情困难",
        'zh-TW': "深度共情困難",
        vi: "Khó khăn với sự đồng cảm sâu sắc",
        id: "Kesulitan dengan empati mendalam"
      }
    ],
    advice: {
      ko: "균형은 좋지만 가까운 사람에게는 좀 더 따뜻하게 반응해보세요!",
      en: "Balance is good, but try to respond more warmly to close people!",
      ja: "バランスは良いですが、身近な人にはもう少し温かく反応してみてください！",
      'zh-CN': "平衡很好，但对亲近的人要更温暖地回应！",
      'zh-TW': "平衡很好，但對親近的人要更溫暖地回應！",
      vi: "Cân bằng là tốt, nhưng hãy phản ứng ấm áp hơn với những người thân thiết!",
      id: "Keseimbangan itu baik, tapi coba respons lebih hangat kepada orang dekat!"
    },
    empathyScore: {
      ko: "★★★☆☆ (3/5) 보통",
      en: "★★★☆☆ (3/5) Average",
      ja: "★★★☆☆ (3/5) 普通",
      'zh-CN': "★★★☆☆ (3/5) 普通",
      'zh-TW': "★★★☆☆ (3/5) 普通",
      vi: "★★★☆☆ (3/5) Bình thường",
      id: "★★★☆☆ (3/5) Rata-rata"
    },
    compatibility: {
      best: ["Type3", "Type4"],
      good: ["Type2", "Type5"],
      careful: ["Type1"],
      difficult: []
    }
  },
  {
    type: "Type4",
    emoji: "🧠",
    title: {
      ko: "이성적 공감형",
      en: "Rational Empathy Type",
      ja: "理性的共感型",
      'zh-CN': "理性共情型",
      'zh-TW': "理性共情型",
      vi: "Kiểu đồng cảm lý trí",
      id: "Tipe Empati Rasional"
    },
    description: {
      ko: "머리로는 이해, 하지만 감정은 별개\n인지적 공감은 있지만 감정적 공감은 약한 타입입니다. 상황을 논리적으로 이해하고 문제 해결에 집중합니다. \"왜 그런 감정인지\"는 알지만 \"같이 느끼지\"는 못합니다. 상담보다는 조언과 해결책을 제시합니다. 실용적이지만 감정적 교감은 부족합니다.",
      en: "I understand with my head, but emotions are separate\nI have cognitive empathy but weak emotional empathy. I understand situations logically and focus on problem-solving. I know \"why they feel that way\" but can't \"feel it together.\" I provide advice and solutions rather than counseling. I'm practical but lack emotional connection.",
      ja: "頭では理解するが、感情は別物\n認知的共感はありますが、感情的共感は弱いタイプです。状況を論理的に理解し、問題解決に集中します。「なぜそのような感情なのか」は分かりますが「一緒に感じる」ことはできません。カウンセリングよりもアドバイスと解決策を提供します。実用的ですが、感情的交流は不足しています。",
      'zh-CN': "头脑理解，但情感是分开的\n有认知共情但情感共情较弱。逻辑理解情况，专注解决问题。知道\"为什么有那种情感\"但无法\"一起感受\"。提供建议和解决方案而非咨询。实用但缺乏情感交流。",
      'zh-TW': "頭腦理解，但情感是分開的\n有認知共情但情感共情較弱。邏輯理解情況，專注解決問題。知道「為什麼有那種情感」但無法「一起感受」。提供建議和解決方案而非諮詢。實用但缺乏情感交流。",
      vi: "Tôi hiểu bằng đầu óc, nhưng cảm xúc là riêng biệt\nTôi có đồng cảm nhận thức nhưng đồng cảm cảm xúc yếu. Tôi hiểu tình huống một cách logic và tập trung vào giải quyết vấn đề. Tôi biết \"tại sao họ cảm thấy như vậy\" nhưng không thể \"cảm nhận cùng nhau.\" Tôi đưa ra lời khuyên và giải pháp thay vì tư vấn. Tôi thực tế nhưng thiếu kết nối cảm xúc.",
      id: "Saya memahami dengan kepala, tapi emosi terpisah\nSaya memiliki empati kognitif tapi empati emosional lemah. Saya memahami situasi secara logis dan fokus pada pemecahan masalah. Saya tahu \"mengapa mereka merasa seperti itu\" tapi tidak bisa \"merasakan bersama.\" Saya memberikan saran dan solusi daripada konseling. Saya praktis tapi kurang koneksi emosional."
    },
    pros: [
      { 
        ko: "논리적",
        en: "Logical",
        ja: "論理的",
        'zh-CN': "逻辑性",
        'zh-TW': "邏輯性",
        vi: "Logic",
        id: "Logis"
      },
      { 
        ko: "해결 능력",
        en: "Problem-solving ability",
        ja: "解決能力",
        'zh-CN': "解决问题的能力",
        'zh-TW': "解決問題的能力",
        vi: "Khả năng giải quyết vấn đề",
        id: "Kemampuan memecahkan masalah"
      },
      { 
        ko: "객관적",
        en: "Objective",
        ja: "客観的",
        'zh-CN': "客观",
        'zh-TW': "客觀",
        vi: "Khách quan",
        id: "Objektif"
      },
      { 
        ko: "이성적",
        en: "Rational",
        ja: "理性的",
        'zh-CN': "理性",
        'zh-TW': "理性",
        vi: "Lý trí",
        id: "Rasional"
      }
    ],
    cons: [
      { 
        ko: "감정 교감 부족",
        en: "Lack of emotional connection",
        ja: "感情的な共感の不足",
        'zh-CN': "缺乏情感共鸣",
        'zh-TW': "缺乏情感共鳴",
        vi: "Thiếu kết nối cảm xúc",
        id: "Kurang koneksi emosional"
      },
      { 
        ko: "차갑게 보임",
        en: "Seems cold",
        ja: "冷たく見える",
        'zh-CN': "显得冷漠",
        'zh-TW': "顯得冷漠",
        vi: "Có vẻ lạnh lùng",
        id: "Terlihat dingin"
      }
    ],
    advice: {
      ko: "때로는 해결책보다 \"그랬구나, 힘들었겠다\"만 해줘도 충분해요!",
      en: "Sometimes just saying \"I see, that must have been hard\" is enough instead of solutions!",
      ja: "時には解決策よりも「そうだったんだ、大変だったね」と言うだけで十分です！",
      'zh-CN': "有时说\"原来如此，一定很辛苦\"比解决方案更有效！",
      'zh-TW': "有時說「原來如此，一定很辛苦」比解決方案更有效！",
      vi: "Đôi khi chỉ nói \"Vậy à, chắc khó khăn lắm\" cũng đủ thay vì đưa ra giải pháp!",
      id: "Kadang hanya mengatakan \"Begitu ya, pasti sulit\" sudah cukup daripada memberikan solusi!"
    },
    empathyScore: {
      ko: "★★☆☆☆ (2/5) 인지만",
      en: "★★☆☆☆ (2/5) Recognition Only",
      ja: "★★☆☆☆ (2/5) 認識のみ",
      'zh-CN': "★★☆☆☆ (2/5) 仅认知",
      'zh-TW': "★★☆☆☆ (2/5) 僅認知",
      vi: "★★☆☆☆ (2/5) Chỉ nhận biết",
      id: "★★☆☆☆ (2/5) Hanya Pengakuan"
    },
    compatibility: {
      best: ["Type4", "Type5"],
      good: ["Type3"],
      careful: ["Type1", "Type2"],
      difficult: []
    }
  },
  {
    type: "Type5",
    emoji: "🌫️",
    title: {
      ko: "낮은 공감형",
      en: "Low Empathy Type",
      ja: "低い共感型",
      'zh-CN': "低共情型",
      'zh-TW': "低共情型",
      vi: "Kiểu đồng cảm thấp",
      id: "Tipe Empati Rendah"
    },
    description: {
      ko: "잘 모르겠어요. 내 일도 바쁜데...\n공감 능력이 약한 편입니다. 타인의 감정에 별로 관심이 없고 이해도 잘 안 됩니다. \"왜 저렇게까지 힘들어해?\"라고 생각합니다. 감정보다는 사실과 논리에 집중합니다. 관계에서 차갑게 느껴질 수 있고, 깊은 유대감 형성이 어렵습니다. 공감 능력을 키우려는 노력이 필요합니다.",
      en: "I don't really know. I'm busy with my own things...\nMy empathy is weak. I'm not very interested in others' emotions and don't understand them well. I think \"Why are they struggling so much?\" I focus on facts and logic rather than emotions. I may seem cold in relationships, and it's difficult to form deep bonds. I need to make an effort to develop empathy.",
      ja: "よく分かりません。私も忙しいし...\n共感能力が弱い方です。他人の感情にあまり関心がなく、理解もあまりできません。「なぜそんなに苦労するの？」と思います。感情よりも事実と論理に集中します。関係では冷たく感じられ、深い絆の形成が困難です。共感能力を高める努力が必要です。",
      'zh-CN': "不太清楚。我也很忙...\n共情能力较弱。对他人情感不太关心，也不太理解。会想\"为什么要那么辛苦？\"专注事实和逻辑而非情感。在关系中可能显得冷漠，难以形成深层纽带。需要努力培养共情能力。",
      'zh-TW': "不太清楚。我也很忙...\n共情能力較弱。對他人情感不太關心，也不太理解。會想「為什麼要那麼辛苦？」專注事實和邏輯而非情感。在關係中可能顯得冷漠，難以形成深層紐帶。需要努力培養共情能力。",
      vi: "Tôi không biết rõ. Tôi cũng bận với việc của mình...\nKhả năng đồng cảm của tôi yếu. Tôi không quan tâm nhiều đến cảm xúc của người khác và không hiểu rõ. Tôi nghĩ \"Tại sao họ phải khó khăn như vậy?\" Tôi tập trung vào sự thật và logic hơn là cảm xúc. Trong mối quan hệ, tôi có thể bị coi là lạnh lùng, và khó hình thành mối liên kết sâu sắc. Cần nỗ lực phát triển khả năng đồng cảm.",
      id: "Saya tidak tahu pasti. Saya juga sibuk dengan urusan sendiri...\nKemampuan empati saya lemah. Saya tidak terlalu tertarik pada emosi orang lain dan tidak memahaminya dengan baik. Saya berpikir \"Mengapa mereka harus berjuang seperti itu?\" Saya fokus pada fakta dan logika daripada emosi. Dalam hubungan, saya mungkin terlihat dingin, dan sulit membentuk ikatan yang dalam. Perlu upaya mengembangkan kemampuan empati."
    },
    pros: [
      { 
        ko: "객관적",
        en: "Objective",
        ja: "客観的",
        'zh-CN': "客观",
        'zh-TW': "客觀",
        vi: "Khách quan",
        id: "Objektif"
      },
      { 
        ko: "현실적",
        en: "Realistic",
        ja: "現実的",
        'zh-CN': "现实",
        'zh-TW': "現實",
        vi: "Thực tế",
        id: "Realistis"
      },
      { 
        ko: "독립적",
        en: "Independent",
        ja: "独立的",
        'zh-CN': "独立",
        'zh-TW': "獨立",
        vi: "Độc lập",
        id: "Mandiri"
      }
    ],
    cons: [
      { 
        ko: "관계 어려움",
        en: "Relationship difficulties",
        ja: "人間関係の困難",
        'zh-CN': "关系困难",
        'zh-TW': "關係困難",
        vi: "Khó khăn trong mối quan hệ",
        id: "Kesulitan dalam hubungan"
      },
      { 
        ko: "외로움",
        en: "Loneliness",
        ja: "孤独",
        'zh-CN': "孤独",
        'zh-TW': "孤獨",
        vi: "Cô đơn",
        id: "Kesepian"
      },
      { 
        ko: "오해받기 쉬움",
        en: "Easily misunderstood",
        ja: "誤解されやすい",
        'zh-CN': "容易被误解",
        'zh-TW': "容易被誤解",
        vi: "Dễ bị hiểu lầm",
        id: "Mudah disalahpahami"
      }
    ],
    advice: {
      ko: "공감은 배울 수 있어요. \"그랬구나\"부터 시작해보세요!",
      en: "Empathy can be learned. Start with \"I see\"!",
      ja: "共感は学べます。「そうだったんだ」から始めてみてください！",
      'zh-CN': "共情是可以学习的。从\"原来如此\"开始吧！",
      'zh-TW': "共情是可以學習的。從「原來如此」開始吧！",
      vi: "Đồng cảm có thể học được. Hãy bắt đầu với \"Vậy à\"!",
      id: "Empati bisa dipelajari. Mulai dengan \"Begitu ya\"!"
    },
    empathyScore: {
      ko: "★☆☆☆☆ (1/5) 낮음",
      en: "★☆☆☆☆ (1/5) Low",
      ja: "★☆☆☆☆ (1/5) 低い",
      'zh-CN': "★☆☆☆☆ (1/5) 低",
      'zh-TW': "★☆☆☆☆ (1/5) 低",
      vi: "★☆☆☆☆ (1/5) Thấp",
      id: "★☆☆☆☆ (1/5) Rendah"
    },
    compatibility: {
      best: ["Type5", "Type6"],
      good: ["Type4"],
      careful: ["Type1", "Type2"],
      difficult: []
    }
  },
  {
    type: "Type6",
    emoji: "❄️",
    title: {
      ko: "공감 어려움형",
      en: "Empathy Difficulty Type",
      ja: "共感困難型",
      'zh-CN': "共情困难型",
      'zh-TW': "共情困難型",
      vi: "Kiểu khó đồng cảm",
      id: "Tipe Kesulitan Empati"
    },
    description: {
      ko: "솔직히 이해가 안 돼요\n공감이 매우 어려운 타입입니다. 타인의 감정을 이해하기 힘들고 감정 표현도 어색합니다. \"왜 우는지\", \"왜 기쁜지\" 진심으로 모르겠습니다. 감정보다는 논리와 사실만 봅니다. 인간관계가 어렵고 오해를 많이 받습니다. 전문가의 도움이 필요할 수 있습니다.",
      en: "Honestly, I don't understand\nThis is a type that finds empathy very difficult. It's hard to understand others' emotions and emotional expression is awkward. I genuinely don't know \"why they're crying\" or \"why they're happy.\" I only see logic and facts rather than emotions. Human relationships are difficult and I'm often misunderstood. Professional help may be needed.",
      ja: "正直、理解できません\n共感が非常に困難なタイプです。他人の感情を理解することが難しく、感情表現もぎこちないです。「なぜ泣くのか」「なぜ嬉しいのか」心から分かりません。感情よりも論理と事実だけを見ます。人間関係が困難で、誤解を多く受けます。専門家の助けが必要かもしれません。",
      'zh-CN': "老实说，我不理解\n这是共情非常困难的类型。难以理解他人情感，情感表达也很尴尬。真心不知道\"为什么哭\"、\"为什么高兴\"。只看逻辑和事实而非情感。人际关系困难，经常被误解。可能需要专业帮助。",
      'zh-TW': "老實說，我不理解\n這是共情非常困難的類型。難以理解他人情感，情感表達也很尷尬。真心不知道「為什麼哭」、「為什麼高興」。只看邏輯和事實而非情感。人際關係困難，經常被誤解。可能需要專業幫助。",
      vi: "Thành thật mà nói, tôi không hiểu\nĐây là kiểu rất khó đồng cảm. Khó hiểu cảm xúc của người khác và biểu hiện cảm xúc cũng vụng về. Tôi thật sự không biết \"tại sao họ khóc\" hay \"tại sao họ vui.\" Tôi chỉ thấy logic và sự thật thay vì cảm xúc. Mối quan hệ con người khó khăn và tôi thường bị hiểu lầm. Có thể cần sự giúp đỡ chuyên nghiệp.",
      id: "Jujur, saya tidak mengerti\nIni adalah tipe yang sangat sulit berempati. Sulit memahami emosi orang lain dan ekspresi emosional juga canggung. Saya benar-benar tidak tahu \"mengapa mereka menangis\" atau \"mengapa mereka bahagia.\" Saya hanya melihat logika dan fakta daripada emosi. Hubungan manusia sulit dan saya sering disalahpahami. Mungkin perlu bantuan profesional."
    },
    pros: [
      { 
        ko: "매우 객관적",
        en: "Very objective",
        ja: "非常に客観的",
        'zh-CN': "非常客观",
        'zh-TW': "非常客觀",
        vi: "Rất khách quan",
        id: "Sangat objektif"
      },
      { 
        ko: "감정에 휘둘리지 않음",
        en: "Not swayed by emotions",
        ja: "感情に左右されない",
        'zh-CN': "不被情感左右",
        'zh-TW': "不被情感左右",
        vi: "Không bị cảm xúc chi phối",
        id: "Tidak terpengaruh emosi"
      }
    ],
    cons: [
      { 
        ko: "관계 매우 어려움",
        en: "Very difficult relationships",
        ja: "人間関係が非常に困難",
        'zh-CN': "关系非常困难",
        'zh-TW': "關係非常困難",
        vi: "Mối quan hệ rất khó khăn",
        id: "Hubungan sangat sulit"
      },
      { 
        ko: "고립",
        en: "Isolation",
        ja: "孤立",
        'zh-CN': "孤立",
        'zh-TW': "孤立",
        vi: "Cô lập",
        id: "Isolasi"
      },
      { 
        ko: "오해",
        en: "Misunderstanding",
        ja: "誤解",
        'zh-CN': "误解",
        'zh-TW': "誤解",
        vi: "Hiểu lầm",
        id: "Salah paham"
      }
    ],
    advice: {
      ko: "공감이 어렵다면 전문가와 상담해보세요. 배우고 연습할 수 있습니다.",
      en: "If empathy is difficult, consult with a professional. You can learn and practice.",
      ja: "共感が困難なら専門家に相談してみてください。学んで練習することができます。",
      'zh-CN': "如果共情困难，请咨询专业人士。你可以学习和练习。",
      'zh-TW': "如果共情困難，請諮詢專業人士。你可以學習和練習。",
      vi: "Nếu đồng cảm khó khăn, hãy tư vấn với chuyên gia. Bạn có thể học và luyện tập.",
      id: "Jika empati sulit, konsultasikan dengan profesional. Anda bisa belajar dan berlatih."
    },
    empathyScore: {
      ko: "☆☆☆☆☆ (0/5) 매우 낮음",
      en: "☆☆☆☆☆ (0/5) Very Low",
      ja: "☆☆☆☆☆ (0/5) 非常に低い",
      'zh-CN': "☆☆☆☆☆ (0/5) 非常低",
      'zh-TW': "☆☆☆☆☆ (0/5) 非常低",
      vi: "☆☆☆☆☆ (0/5) Rất thấp",
      id: "☆☆☆☆☆ (0/5) Sangat Rendah"
    },
    compatibility: {
      best: ["Type6"],
      good: ["Type5"],
      careful: [],
      difficult: ["Type1", "Type2", "Type3", "Type4"]
    }
  }
];

export function calculateEmpathyResult(answers: Record<string, number>[]): EmpathyResult {
  const totalScores: Record<string, number> = {};
  
  // 각 Type별 점수 합계 계산
  answers.forEach(answerScores => {
    Object.entries(answerScores).forEach(([type, score]) => {
      totalScores[type] = (totalScores[type] || 0) + score;
    });
  });
  
  // 최고 점수 찾기
  const maxScore = Math.max(...Object.values(totalScores));
  const topTypes = Object.entries(totalScores)
    .filter(([_, score]) => score === maxScore)
    .map(([type, _]) => type);
  
  // 동점인 경우 Q10-Q12 우선 반영
  if (topTypes.length > 1) {
    const lastThreeAnswers = answers.slice(-3);
    const tieBreakScores: Record<string, number> = {};
    
    lastThreeAnswers.forEach(answerScores => {
      Object.entries(answerScores).forEach(([type, score]) => {
        if (topTypes.includes(type)) {
          tieBreakScores[type] = (tieBreakScores[type] || 0) + score;
        }
      });
    });
    
    const maxTieBreakScore = Math.max(...Object.values(tieBreakScores));
    const winnerType = Object.entries(tieBreakScores)
      .filter(([_, score]) => score === maxTieBreakScore)[0][0];
    
    return empathyResults.find(result => result.type === winnerType)!;
  }
  
  return empathyResults.find(result => result.type === topTypes[0])!;
}
