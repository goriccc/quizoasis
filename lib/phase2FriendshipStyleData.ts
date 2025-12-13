export interface Phase2FriendshipStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    typePoints: number[]; // 각 선택지가 점수를 주는 Type들 (1-6)
  }[];
}

export interface Phase2FriendshipStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  friendshipStyle: Record<string, string>; // 우정 스타일
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2FriendshipStyleQuestions: Phase2FriendshipStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "주말에 아무 약속이 없다면?",
      en: "What if you have no plans for the weekend?",
      ja: "週末に予定がない場合は？",
      'zh-CN': "如果周末没有计划怎么办？",
      'zh-TW': "如果週末沒有計劃怎麼辦？",
      vi: "Bạn sẽ làm gì nếu cuối tuần không có kế hoạch?",
      id: "Apa yang akan Anda lakukan jika akhir pekan tidak ada rencana?"
    },
    options: [
      {
        text: {
          ko: "\"심심한데 누구라도 볼까?\" 연락처를 뒤적거려 약속을 잡는다",
          en: "\"I'm bored, want to see anyone?\" I scroll through contacts and make plans",
          ja: "「退屈だから誰か会おうか？」連絡先をめくって約束を入れる",
          'zh-CN': "「好无聊，想见谁呢？」翻看联系人并安排约会",
          'zh-TW': "「好無聊，想見誰呢？」翻看聯絡人並安排約會",
          vi: "\"Buồn quá, gặp ai đó nhỉ?\" Lướt danh bạ và hẹn hò",
          id: "\"Bosan, mau ketemu siapa saja?\" Saya melihat kontak dan membuat rencana"
        },
        typePoints: [1, 5] // Type 1, 5
      },
      {
        text: {
          ko: "\"오랜만에 OO나 볼까?\" 정말 친한 친구 한 명에게만 연락해 본다",
          en: "\"Haven't seen XX in a while?\" I only contact one really close friend",
          ja: "「久しぶりにOOに会おうか？」本当に親しい友達一人だけに連絡する",
          'zh-CN': "「好久没见XX了？」只联系一个真正亲密的朋友",
          'zh-TW': "「好久沒見XX了？」只聯繫一個真正親密的朋友",
          vi: "\"Lâu rồi chưa gặp XX nhỉ?\" Chỉ liên hệ với một người bạn thân",
          id: "\"Sudah lama tidak bertemu XX?\" Saya hanya menghubungi satu teman dekat"
        },
        typePoints: [2, 6] // Type 2, 6
      },
      {
        text: {
          ko: "\"혼자가 편해.\" 집에서 쉬거나 혼자만의 취미를 즐긴다",
          en: "\"I prefer being alone.\" I rest at home or enjoy my own hobbies",
          ja: "「一人が楽だ。」家で休んだり一人だけの趣味を楽しむ",
          'zh-CN': "「一个人更舒服。」在家休息或享受自己的爱好",
          'zh-TW': "「一個人更舒服。」在家休息或享受自己的愛好",
          vi: "\"Một mình thoải mái hơn.\" Nghỉ ở nhà hoặc tận hưởng sở thích riêng",
          id: "\"Sendirian lebih nyaman.\" Saya istirahat di rumah atau menikmati hobi sendiri"
        },
        typePoints: [3, 4] // Type 3, 4
      },
      {
        text: {
          ko: "\"누가 부르면 나가고, 아니면 말고.\" 흐름에 맡긴다",
          en: "\"If someone calls, I'll go. If not, that's fine.\" I go with the flow",
          ja: "「誰か呼んだら出かけて、呼ばなければそれでいい。」流れに任せる",
          'zh-CN': "「有人叫就去，没有就算了。」顺其自然",
          'zh-TW': "「有人叫就去，沒有就算了。」順其自然",
          vi: "\"Ai gọi thì đi, không thì thôi.\" Để mọi thứ tự nhiên",
          id: "\"Kalau ada yang mengajak, saya pergi. Kalau tidak, tidak apa-apa.\" Saya mengikuti alur"
        },
        typePoints: [5] // Type 5
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 새로운 친구를 데려와도 되냐고 물었을 때?",
      en: "When a friend asks if they can bring a new friend?",
      ja: "友達が新しい友達を連れてきてもいいか聞いたとき？",
      'zh-CN': "当朋友问是否可以带新朋友来时？",
      'zh-TW': "當朋友問是否可以帶新朋友來時？",
      vi: "Khi bạn bè hỏi có thể mang bạn mới đến không?",
      id: "Ketika teman bertanya apakah mereka bisa membawa teman baru?"
    },
    options: [
      {
        text: {
          ko: "\"당연하지! 다 같이 놀면 더 재밌잖아!\" 대환영이다",
          en: "\"Of course! It's more fun when we all hang out together!\" Very welcome",
          ja: "「もちろん！みんなで遊ぶ方が楽しいじゃん！」大歓迎",
          'zh-CN': "「当然！大家一起玩更有趣！」非常欢迎",
          'zh-TW': "「當然！大家一起玩更有趣！」非常歡迎",
          vi: "\"Tất nhiên! Cùng chơi vui hơn mà!\" Rất hoan nghênh",
          id: "\"Tentu saja! Lebih seru kalau kita semua main bersama!\" Sangat diterima"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "\"음... 좀 어색할 것 같은데.\" 불편한 기색을 내비친다",
          en: "\"Hmm... It might be a bit awkward.\" Shows discomfort",
          ja: "「うーん...ちょっと気まずそう。」不快な様子を見せる",
          'zh-CN': "「嗯...可能会有点尴尬。」表现出不适",
          'zh-TW': "「嗯...可能會有點尷尬。」表現出不適",
          vi: "\"Hmm... Có vẻ hơi khó xử.\" Tỏ ra không thoải mái",
          id: "\"Hmm... Mungkin agak canggung.\" Menunjukkan ketidaknyamanan"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "\"누구냐에 따라 달라.\" 어떤 사람인지 꼬치꼬치 물어본다",
          en: "\"Depends on who it is.\" Asks detailed questions about the person",
          ja: "「誰かによる。」どんな人か細かく聞く",
          'zh-CN': "「看是谁。」详细询问是什么样的人",
          'zh-TW': "「看是誰。」詳細詢問是什麼樣的人",
          vi: "\"Tùy xem là ai.\" Hỏi kỹ về người đó",
          id: "\"Tergantung siapa.\" Bertanya detail tentang orangnya"
        },
        typePoints: [3, 6] // Type 3, 6
      },
      {
        text: {
          ko: "\"상관없어.\" 누가 오든 크게 신경 쓰지 않는다",
          en: "\"Doesn't matter.\" Doesn't care much who comes",
          ja: "「構わない。」誰が来てもあまり気にしない",
          'zh-CN': "「无所谓。」不管谁来都不太在意",
          'zh-TW': "「無所謂。」不管誰來都不太在意",
          vi: "\"Không sao.\" Không quan tâm lắm ai đến",
          id: "\"Tidak masalah.\" Tidak terlalu peduli siapa yang datang"
        },
        typePoints: [4, 5] // Type 4, 5
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구가 힘든 고민을 털어놓으며 울 때?",
      en: "When a friend confides their troubles and cries?",
      ja: "友達がつらい悩みを打ち明けて泣くとき？",
      'zh-CN': "当朋友倾诉烦恼并哭泣时？",
      'zh-TW': "當朋友傾訴煩惱並哭泣時？",
      vi: "Khi bạn bè tâm sự nỗi buồn và khóc?",
      id: "Ketika teman menceritakan masalah sulit dan menangis?"
    },
    options: [
      {
        text: {
          ko: "같이 울어주며 밤새 이야기를 들어준다",
          en: "Cry together and listen to their story all night",
          ja: "一緒に泣いて一晩中話を聞いてあげる",
          'zh-CN': "一起哭，整夜倾听他们的故事",
          'zh-TW': "一起哭，整夜傾聽他們的故事",
          vi: "Cùng khóc và lắng nghe câu chuyện cả đêm",
          id: "Menangis bersama dan mendengarkan ceritanya sepanjang malam"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "현실적인 해결책을 제시해 주며 도움을 준다",
          en: "Offer practical solutions and help",
          ja: "現実的な解決策を提示して助ける",
          'zh-CN': "提供实用的解决方案并帮助",
          'zh-TW': "提供實用的解決方案並幫助",
          vi: "Đưa ra giải pháp thực tế và giúp đỡ",
          id: "Menawarkan solusi praktis dan membantu"
        },
        typePoints: [3] // Type 3
      },
      {
        text: {
          ko: "맛있는 걸 사주거나 기분 전환을 시켜준다",
          en: "Buy them something delicious or help them change their mood",
          ja: "美味しいものを買ってあげたり気分転換をさせる",
          'zh-CN': "给他们买好吃的或帮他们转换心情",
          'zh-TW': "給他們買好吃的或幫他們轉換心情",
          vi: "Mua đồ ngon cho họ hoặc giúp họ thay đổi tâm trạng",
          id: "Membelikan makanan enak atau membantu mengubah suasana hati"
        },
        typePoints: [1, 5] // Type 1, 5
      },
      {
        text: {
          ko: "묵묵히 옆에 있어 주되, 과도한 개입은 하지 않는다",
          en: "Silently stay by their side without excessive intervention",
          ja: "黙々とそばにいて、過度な介入はしない",
          'zh-CN': "默默陪伴在旁，不过度干预",
          'zh-TW': "默默陪伴在旁，不過度干預",
          vi: "Lặng lẽ ở bên cạnh, không can thiệp quá mức",
          id: "Diam-diam berada di samping tanpa campur tangan berlebihan"
        },
        typePoints: [4, 6] // Type 4, 6
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "내가 생각하는 '진정한 친구'의 기준은?",
      en: "What is my standard for a 'true friend'?",
      ja: "私が考える「真の友達」の基準は？",
      'zh-CN': "我认为'真正的朋友'的标准是什么？",
      'zh-TW': "我認為「真正的朋友」的標準是什麼？",
      vi: "Tiêu chuẩn của bạn về 'người bạn thật sự' là gì?",
      id: "Apa standar saya untuk 'teman sejati'?"
    },
    options: [
      {
        text: {
          ko: "언제 어디서든 부르면 바로 달려와 주는 사람",
          en: "Someone who comes running whenever and wherever I call",
          ja: "いつでもどこでも呼べばすぐに駆けつけてくれる人",
          'zh-CN': "无论何时何地，一叫就马上赶来的人",
          'zh-TW': "無論何時何地，一叫就馬上趕來的人",
          vi: "Người luôn chạy đến bất cứ khi nào, bất cứ đâu bạn gọi",
          id: "Seseorang yang langsung datang kapan pun dan di mana pun saya panggil"
        },
        typePoints: [1, 6] // Type 1, 6
      },
      {
        text: {
          ko: "말하지 않아도 내 속마음을 알아주는 사람",
          en: "Someone who understands my true feelings without me saying",
          ja: "言わなくても私の本心を理解してくれる人",
          'zh-CN': "即使不说也能理解我内心的人",
          'zh-TW': "即使不說也能理解我內心的人",
          vi: "Người hiểu lòng bạn mà không cần nói",
          id: "Seseorang yang memahami perasaan saya tanpa saya katakan"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "서로의 인생에 도움이 되고 자극이 되는 사람",
          en: "Someone who helps and inspires each other's life",
          ja: "お互いの人生に役立ち刺激を与えてくれる人",
          'zh-CN': "互相帮助并激励彼此人生的人",
          'zh-TW': "互相幫助並激勵彼此人生的人",
          vi: "Người giúp đỡ và truyền cảm hứng cho cuộc sống của nhau",
          id: "Seseorang yang saling membantu dan menginspirasi kehidupan satu sama lain"
        },
        typePoints: [3] // Type 3
      },
      {
        text: {
          ko: "오랜만에 봐도 어색하지 않고 편안한 사람",
          en: "Someone who feels comfortable even after a long time apart",
          ja: "久しぶりに会っても気まずくなく心地よい人",
          'zh-CN': "即使很久不见也感觉舒适不尴尬的人",
          'zh-TW': "即使很久不見也感覺舒適不尷尬的人",
          vi: "Người cảm thấy thoải mái dù lâu không gặp",
          id: "Seseorang yang merasa nyaman meski sudah lama tidak bertemu"
        },
        typePoints: [4, 5] // Type 4, 5
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구 사이에서 연락 빈도는?",
      en: "How often do you contact your friends?",
      ja: "友達との連絡頻度は？",
      'zh-CN': "你和朋友的联系频率是？",
      'zh-TW': "你和朋友的聯繫頻率是？",
      vi: "Tần suất liên lạc với bạn bè của bạn là?",
      id: "Seberapa sering Anda menghubungi teman?"
    },
    options: [
      {
        text: {
          ko: "하루라도 연락 안 하면 입안에 가시가 돋는다",
          en: "If I don't contact them for even a day, I feel uncomfortable",
          ja: "一日でも連絡しないと口の中に棘が生える",
          'zh-CN': "一天不联系就感觉不舒服",
          'zh-TW': "一天不聯繫就感覺不舒服",
          vi: "Một ngày không liên lạc là cảm thấy khó chịu",
          id: "Kalau tidak menghubungi bahkan sehari, saya merasa tidak nyaman"
        },
        typePoints: [1, 2] // Type 1, 2
      },
      {
        text: {
          ko: "특별한 용건이 없으면 굳이 안 한다",
          en: "I don't contact unless there's a special reason",
          ja: "特別な用件がなければわざわざしない",
          'zh-CN': "没有特别事情就不联系",
          'zh-TW': "沒有特別事情就不聯繫",
          vi: "Không có việc đặc biệt thì không liên lạc",
          id: "Saya tidak menghubungi kecuali ada alasan khusus"
        },
        typePoints: [4] // Type 4
      },
      {
        text: {
          ko: "내가 심심할 때나 필요할 때 주로 한다",
          en: "I mainly contact when I'm bored or need something",
          ja: "私が退屈なときや必要なときが主",
          'zh-CN': "主要在我无聊或需要的时候联系",
          'zh-TW': "主要在我無聊或需要的時候聯繫",
          vi: "Chủ yếu liên lạc khi buồn chán hoặc cần gì đó",
          id: "Saya terutama menghubungi saat bosan atau butuh sesuatu"
        },
        typePoints: [3] // Type 3
      },
      {
        text: {
          ko: "상대방이 하면 답장은 꼬박꼬박 잘 해준다",
          en: "I always reply well when they contact me",
          ja: "相手が連絡したら返信はきちんとよくしてあげる",
          'zh-CN': "对方联系时总是好好回复",
          'zh-TW': "對方聯繫時總是好好回覆",
          vi: "Họ liên lạc thì luôn trả lời đầy đủ",
          id: "Saya selalu membalas dengan baik ketika mereka menghubungi"
        },
        typePoints: [5, 6] // Type 5, 6
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구의 생일 선물, 어떻게 준비할까?",
      en: "How do you prepare a friend's birthday gift?",
      ja: "友達の誕生日プレゼント、どう準備する？",
      'zh-CN': "如何准备朋友的生日礼物？",
      'zh-TW': "如何準備朋友的生日禮物？",
      vi: "Bạn chuẩn bị quà sinh nhật cho bạn bè như thế nào?",
      id: "Bagaimana Anda mempersiapkan hadiah ulang tahun teman?"
    },
    options: [
      {
        text: {
          ko: "요즘 유행하는 핫템이나 친구들과 돈을 모아 큰 걸 해준다",
          en: "Give trendy hot items or pool money with friends for something big",
          ja: "最近流行りのホットアイテムや友達とお金を集めて大きなものをあげる",
          'zh-CN': "送最近流行的热门商品或和朋友凑钱买大件",
          'zh-TW': "送最近流行的熱門商品或和朋友湊錢買大件",
          vi: "Tặng món hot trend hoặc góp tiền với bạn bè để mua món lớn",
          id: "Memberikan item trendi atau mengumpulkan uang dengan teman untuk sesuatu yang besar"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "평소 그 친구가 갖고 싶다고 했던 것을 기억해 뒀다 사준다",
          en: "Remember what they wanted and buy it for them",
          ja: "普段その友達が欲しいと言っていたものを覚えておいて買ってあげる",
          'zh-CN': "记住他们平时想要的东西并买给他们",
          'zh-TW': "記住他們平時想要的東西並買給他們",
          vi: "Nhớ những gì họ từng muốn và mua cho họ",
          id: "Mengingat apa yang mereka inginkan dan membelikannya"
        },
        typePoints: [2, 6] // Type 2, 6
      },
      {
        text: {
          ko: "실용적인 기프티콘이나 현금을 보낸다",
          en: "Send practical gift cards or cash",
          ja: "実用的なギフトカードや現金を送る",
          'zh-CN': "送实用的礼品卡或现金",
          'zh-TW': "送實用的禮品卡或現金",
          vi: "Gửi thẻ quà tặng thực tế hoặc tiền mặt",
          id: "Mengirim kartu hadiah praktis atau uang tunai"
        },
        typePoints: [3] // Type 3
      },
      {
        text: {
          ko: "정성이 담긴 손편지와 소소한 선물을 준비한다",
          en: "Prepare a heartfelt handwritten letter and a small gift",
          ja: "真心のこもった手紙と小さなプレゼントを準備する",
          'zh-CN': "准备充满真心的手写信和小礼物",
          'zh-TW': "準備充滿真心的手寫信和小禮物",
          vi: "Chuẩn bị thư viết tay chân thành và món quà nhỏ",
          id: "Mempersiapkan surat tulisan tangan yang tulus dan hadiah kecil"
        },
        typePoints: [2, 5] // Type 2, 5
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "친구와 다투고 난 뒤 화해 방식은?",
      en: "How do you make up after a fight with a friend?",
      ja: "友達と喧嘩した後の仲直りの仕方は？",
      'zh-CN': "和朋友吵架后如何和好？",
      'zh-TW': "和朋友吵架後如何和好？",
      vi: "Bạn làm hòa với bạn bè sau khi cãi nhau như thế nào?",
      id: "Bagaimana cara berbaikan setelah bertengkar dengan teman?"
    },
    options: [
      {
        text: {
          ko: "\"술 한잔하자!\" 만나서 풀거나 쿨하게 잊는다",
          en: "\"Let's have a drink!\" Meet up to resolve it or coolly forget",
          ja: "「一杯飲もう！」会って解決するかクールに忘れる",
          'zh-CN': "「喝一杯吧！」见面解决或冷静地忘记",
          'zh-TW': "「喝一杯吧！」見面解決或冷靜地忘記",
          vi: "\"Đi uống một ly đi!\" Gặp nhau để giải quyết hoặc quên đi một cách bình thường",
          id: "\"Ayo minum!\" Bertemu untuk menyelesaikan atau dengan tenang melupakan"
        },
        typePoints: [1, 4] // Type 1, 4
      },
      {
        text: {
          ko: "장문의 카톡으로 서로의 서운함을 디테일하게 푼다",
          en: "Resolve each other's hurt feelings in detail through long messages",
          ja: "長文のメッセージでお互いの不満を詳細に解消する",
          'zh-CN': "通过长消息详细化解彼此的不满",
          'zh-TW': "通過長訊息詳細化解彼此的不滿",
          vi: "Giải quyết nỗi buồn của nhau chi tiết qua tin nhắn dài",
          id: "Menyelesaikan perasaan tersinggung satu sama lain secara detail melalui pesan panjang"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "시간이 약이다. 자연스럽게 풀릴 때까지 기다린다",
          en: "Time heals. Wait until it resolves naturally",
          ja: "時間が薬。自然に解決するまで待つ",
          'zh-CN': "时间是良药。等待自然解决",
          'zh-TW': "時間是良藥。等待自然解決",
          vi: "Thời gian sẽ chữa lành. Chờ đến khi tự nhiên giải quyết",
          id: "Waktu menyembuhkan. Menunggu sampai terselesaikan secara alami"
        },
        typePoints: [3, 5] // Type 3, 5
      },
      {
        text: {
          ko: "제3자를 통해 중재하거나 눈치를 보며 슬쩍 다가간다",
          en: "Mediate through a third party or approach subtly while reading the mood",
          ja: "第三者を通じて仲介したり、空気を読みながらこっそり近づく",
          'zh-CN': "通过第三方调解或察言观色悄悄接近",
          'zh-TW': "通過第三方調解或察言觀色悄悄接近",
          vi: "Nhờ người thứ ba hòa giải hoặc tiếp cận khéo léo khi đọc được tình huống",
          id: "Memediasi melalui pihak ketiga atau mendekati dengan halus sambil membaca situasi"
        },
        typePoints: [6] // Type 6
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "나의 인맥 스타일을 한마디로 표현한다면?",
      en: "How would you describe your social network style in one word?",
      ja: "私の人脈スタイルを一言で表現すると？",
      'zh-CN': "用一句话表达你的人际关系风格？",
      'zh-TW': "用一句話表達你的人際關係風格？",
      vi: "Mô tả phong cách mạng lưới xã hội của bạn bằng một câu?",
      id: "Bagaimana Anda menggambarkan gaya jaringan sosial Anda dalam satu kalimat?"
    },
    options: [
      {
        text: {
          ko: "넓고 얕게. 아는 사람이 많고 어딜 가나 아는 얼굴이 있다",
          en: "Wide and shallow. Know many people and see familiar faces everywhere",
          ja: "広く浅く。知り合いが多く、どこに行っても知っている顔がある",
          'zh-CN': "广而浅。认识很多人，去哪里都能看到熟悉的面孔",
          'zh-TW': "廣而淺。認識很多人，去哪裡都能看到熟悉的面孔",
          vi: "Rộng và nông. Biết nhiều người, đi đâu cũng gặp người quen",
          id: "Luas dan dangkal. Kenal banyak orang dan melihat wajah familiar di mana-mana"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "좁고 깊게. 내 사람 몇 명만 있으면 세상 부러울 게 없다",
          en: "Narrow and deep. A few close people are all I need",
          ja: "狭く深く。私の人何人かいれば世界に羨むものはない",
          'zh-CN': "窄而深。有几个自己人就够了",
          'zh-TW': "窄而深。有幾個自己人就夠了",
          vi: "Hẹp và sâu. Chỉ cần vài người thân là đủ",
          id: "Sempit dan dalam. Beberapa orang dekat sudah cukup"
        },
        typePoints: [2, 6] // Type 2, 6
      },
      {
        text: {
          ko: "필요에 의한 관계. 공과 사를 구분하고 적당한 거리를 유지한다",
          en: "Relationships by need. Separate work and personal, maintain appropriate distance",
          ja: "必要に応じた関係。公私を区別し適度な距離を保つ",
          'zh-CN': "基于需要的关系。区分公私，保持适当距离",
          'zh-TW': "基於需要的關係。區分公私，保持適當距離",
          vi: "Quan hệ theo nhu cầu. Phân biệt công tư, giữ khoảng cách phù hợp",
          id: "Hubungan berdasarkan kebutuhan. Memisahkan kerja dan pribadi, menjaga jarak yang tepat"
        },
        typePoints: [3] // Type 3
      },
      {
        text: {
          ko: "오는 사람 안 막고 가는 사람 안 잡는 스타일",
          en: "Don't stop those who come, don't hold those who go",
          ja: "来る人を止めず、去る人を留めないスタイル",
          'zh-CN': "不阻止来的人，不挽留走的人",
          'zh-TW': "不阻止來的人，不挽留走的人",
          vi: "Không chặn người đến, không giữ người đi",
          id: "Tidak menghentikan yang datang, tidak menahan yang pergi"
        },
        typePoints: [4, 5] // Type 4, 5
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "친구가 나 몰래 다른 친구들과 놀았다는 걸 알게 됐을 때?",
      en: "When you find out a friend hung out with other friends without you?",
      ja: "友達が私に内緒で他の友達と遊んだことが分かったとき？",
      'zh-CN': "当你发现朋友背着你和其他朋友出去玩时？",
      'zh-TW': "當你發現朋友揹著你和其他朋友出去玩時？",
      vi: "Khi biết bạn bè đi chơi với bạn khác mà không cho bạn biết?",
      id: "Ketika Anda tahu teman bermain dengan teman lain tanpa sepengetahuan Anda?"
    },
    options: [
      {
        text: {
          ko: "\"나만 빼고 놀아?\" 서운함 폭발, 바로 따진다",
          en: "\"You hung out without me?\" Hurt feelings explode, confront immediately",
          ja: "「私だけ抜かして遊んだの？」不満爆発、すぐに問い詰める",
          'zh-CN': "「不带我玩？」委屈爆发，立即质问",
          'zh-TW': "「不帶我玩？」委屈爆發，立即質問",
          vi: "\"Chơi mà không có tôi?\" Cảm giác bị tổn thương bùng nổ, đối chất ngay",
          id: "\"Kalian main tanpa saya?\" Perasaan tersinggung meledak, langsung konfrontasi"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "\"그럴 수도 있지.\" 쿨하게 넘기지만 속으론 조금 섭섭하다",
          en: "\"That's possible.\" Coolly let it go but feel a bit hurt inside",
          ja: "「そういうこともあるよね。」クールに流すが内心は少し寂しい",
          'zh-CN': "「也有可能。」冷静地放过但内心有点失落",
          'zh-TW': "「也有可能。」冷靜地放過但內心有點失落",
          vi: "\"Cũng có thể thôi.\" Bình thường bỏ qua nhưng trong lòng hơi buồn",
          id: "\"Bisa saja begitu.\" Dengan tenang melupakan tapi dalam hati sedikit tersinggung"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "별생각 없다. 나도 다른 친구랑 놀면 되니까",
          en: "No big deal. I can just hang out with other friends too",
          ja: "別に考えない。私も他の友達と遊べばいいから",
          'zh-CN': "没什么想法。我也可以和其他朋友玩",
          'zh-TW': "沒什麼想法。我也可以和其他朋友玩",
          vi: "Không nghĩ gì. Tôi cũng có thể chơi với bạn khác",
          id: "Tidak masalah. Saya juga bisa main dengan teman lain"
        },
        typePoints: [3, 4] // Type 3, 4
      },
      {
        text: {
          ko: "누구랑 놀았는지, 뭐 했는지 궁금해서 물어본다",
          en: "Curiously ask who they hung out with and what they did",
          ja: "誰と遊んだか、何をしたか気になって聞く",
          'zh-CN': "好奇地问和谁玩了，做了什么",
          'zh-TW': "好奇地問和誰玩了，做了什麼",
          vi: "Tò mò hỏi họ chơi với ai và làm gì",
          id: "Penasaran bertanya dengan siapa mereka main dan apa yang dilakukan"
        },
        typePoints: [1, 6] // Type 1, 6
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "여행을 간다면 어떤 스타일의 친구와?",
      en: "What style of friend would you travel with?",
      ja: "旅行に行くならどんなスタイルの友達と？",
      'zh-CN': "如果要旅行，你会和什么风格的朋友一起？",
      'zh-TW': "如果要旅行，你會和什麼風格的朋友一起？",
      vi: "Nếu đi du lịch, bạn sẽ đi với kiểu bạn bè nào?",
      id: "Jika bepergian, dengan teman bergaya seperti apa Anda akan pergi?"
    },
    options: [
      {
        text: {
          ko: "계획부터 실행까지 척척 리드해 주는 친구",
          en: "A friend who smoothly leads from planning to execution",
          ja: "計画から実行までスムーズにリードしてくれる友達",
          'zh-CN': "从计划到执行都能顺利引导的朋友",
          'zh-TW': "從計劃到執行都能順利引導的朋友",
          vi: "Người bạn dẫn dắt mượt mà từ lập kế hoạch đến thực hiện",
          id: "Teman yang dengan lancar memimpin dari perencanaan hingga eksekusi"
        },
        typePoints: [5] // Type 5
      },
      {
        text: {
          ko: "내 의견에 잘 따라주고 불평 없는 친구",
          en: "A friend who follows my opinions well without complaints",
          ja: "私の意見によく従って文句を言わない友達",
          'zh-CN': "很好地听从我的意见且不抱怨的朋友",
          'zh-TW': "很好地聽從我的意見且不抱怨的朋友",
          vi: "Người bạn nghe theo ý kiến của bạn và không phàn nàn",
          id: "Teman yang mengikuti pendapat saya dengan baik tanpa mengeluh"
        },
        typePoints: [6] // Type 6
      },
      {
        text: {
          ko: "취향과 개그 코드가 딱 맞는 소울메이트",
          en: "A soulmate whose tastes and humor perfectly match",
          ja: "好みとギャグコードがぴったり合うソウルメイト",
          'zh-CN': "品味和笑点完全契合的灵魂伴侣",
          'zh-TW': "品味和笑點完全契合的靈魂伴侶",
          vi: "Người bạn tâm giao có sở thích và khiếu hài hước khớp hoàn toàn",
          id: "Soulmate yang selera dan kode humor pas sekali"
        },
        typePoints: [2] // Type 2
      },
      {
        text: {
          ko: "각자 따로 놀아도 상관없는 독립적인 친구",
          en: "An independent friend who's fine with doing things separately",
          ja: "それぞれ別々に遊んでも構わない独立した友達",
          'zh-CN': "可以各自独立玩耍的朋友",
          'zh-TW': "可以各自獨立玩耍的朋友",
          vi: "Người bạn độc lập, không sao nếu mỗi người chơi riêng",
          id: "Teman mandiri yang tidak masalah bermain terpisah"
        },
        typePoints: [3, 4] // Type 3, 4
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "친구의 비밀을 알게 되었을 때?",
      en: "When you learn a friend's secret?",
      ja: "友達の秘密を知ったとき？",
      'zh-CN': "当你得知朋友的秘密时？",
      'zh-TW': "當你得知朋友的秘密時？",
      vi: "Khi biết bí mật của bạn bè?",
      id: "Ketika Anda mengetahui rahasia teman?"
    },
    options: [
      {
        text: {
          ko: "입이 근질거리지만 꾹 참는다",
          en: "My mouth itches but I hold it in",
          ja: "口がむずむずするが我慢する",
          'zh-CN': "嘴巴痒痒但忍住不说",
          'zh-TW': "嘴巴癢癢但忍住不說",
          vi: "Miệng ngứa ngáy nhưng cố nhịn",
          id: "Mulut gatal tapi saya tahan"
        },
        typePoints: [1, 5] // Type 1, 5
      },
      {
        text: {
          ko: "무덤까지 가져간다. 절대 발설하지 않는다",
          en: "Take it to the grave. Never reveal it",
          ja: "墓まで持っていく。絶対に漏らさない",
          'zh-CN': "带到坟墓。绝不泄露",
          'zh-TW': "帶到墳墓。絕不洩露",
          vi: "Mang theo đến mộ. Không bao giờ tiết lộ",
          id: "Bawa sampai ke kubur. Tidak pernah membocorkan"
        },
        typePoints: [2, 6] // Type 2, 6
      },
      {
        text: {
          ko: "다른 친구에게 \"너만 알고 있어\"라며 공유한다",
          en: "Share with another friend saying \"Just between us\"",
          ja: "他の友達に「あなただけ知ってて」と言って共有する",
          'zh-CN': "和另一个朋友分享说「只有你知道」",
          'zh-TW': "和另一個朋友分享說「只有你知道」",
          vi: "Chia sẻ với bạn khác nói \"Chỉ mình bạn biết thôi\"",
          id: "Berbagi dengan teman lain sambil bilang \"Hanya kamu yang tahu\""
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "듣자마자 까먹는다. 남의 비밀에 크게 관심 없다",
          en: "Forget it immediately. Not very interested in others' secrets",
          ja: "聞いたらすぐ忘れる。他人の秘密にあまり興味がない",
          'zh-CN': "听完就忘。对别人的秘密不太感兴趣",
          'zh-TW': "聽完就忘。對別人的秘密不太感興趣",
          vi: "Nghe xong quên ngay. Không quan tâm lắm đến bí mật người khác",
          id: "Langsung lupa. Tidak terlalu tertarik pada rahasia orang lain"
        },
        typePoints: [3, 4] // Type 3, 4
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 우정이란?",
      en: "What does friendship mean to you?",
      ja: "あなたにとって友情とは？",
      'zh-CN': "对你来说友谊是什么？",
      'zh-TW': "對你來說友誼是什麼？",
      vi: "Tình bạn đối với bạn là gì?",
      id: "Apa arti persahabatan bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "인생의 즐거움이자 활력소",
          en: "The joy and vitality of life",
          ja: "人生の楽しみであり活力源",
          'zh-CN': "人生的快乐和活力源泉",
          'zh-TW': "人生的快樂和活力源泉",
          vi: "Niềm vui và nguồn sống của cuộc đời",
          id: "Kegembiraan dan vitalitas hidup"
        },
        typePoints: [1] // Type 1
      },
      {
        text: {
          ko: "나를 지탱해 주는 버팀목",
          en: "The support that holds me up",
          ja: "私を支えてくれる支柱",
          'zh-CN': "支撑我的支柱",
          'zh-TW': "支撐我的支柱",
          vi: "Cột trụ nâng đỡ tôi",
          id: "Penyangga yang menopang saya"
        },
        typePoints: [2, 6] // Type 2, 6
      },
      {
        text: {
          ko: "서로 윈윈하는 파트너십",
          en: "A win-win partnership",
          ja: "お互いウィンウィンのパートナーシップ",
          'zh-CN': "互惠互利的伙伴关系",
          'zh-TW': "互惠互利的夥伴關係",
          vi: "Mối quan hệ đối tác cùng có lợi",
          id: "Kemitraan yang saling menguntungkan"
        },
        typePoints: [3] // Type 3
      },
      {
        text: {
          ko: "인생의 디저트",
          en: "Life's dessert",
          ja: "人生のデザート",
          'zh-CN': "人生的甜点",
          'zh-TW': "人生的甜點",
          vi: "Món tráng miệng của cuộc đời",
          id: "Pencuci mulut kehidupan"
        },
        typePoints: [4] // Type 4
      }
    ]
  }
];

export const phase2FriendshipStyleResults: Phase2FriendshipStyleResult[] = [
  {
    type: "Type1",
    emoji: "🎉",
    title: {
      ko: "의리파 골목대장, 확장형 인싸",
      en: "Loyal Neighborhood Leader, Expansive Social Butterfly",
      ja: "義理派の町内会長、拡張型インサ",
      'zh-CN': "义气派社区老大，扩展型社交达人",
      'zh-TW': "義氣派社區老大，擴展型社交達人",
      vi: "Thủ lĩnh khu phố trung thành, Người hướng ngoại mở rộng",
      id: "Pemimpin Lingkungan Setia, Sosial Luas"
    },
    shortDescription: {
      ko: "\"친구의 친구는 내 친구! 위 아 더 월드\"",
      en: "\"My friend's friend is my friend! We are the world\"",
      ja: "「友達の友達は私の友達！ウィ・アー・ザ・ワールド」",
      'zh-CN': "「朋友的朋友就是我的朋友！我们是世界」",
      'zh-TW': "「朋友的朋友就是我的朋友！我們是世界」",
      vi: "\"Bạn của bạn là bạn của tôi! Chúng ta là thế giới\"",
      id: "\"Teman teman adalah teman saya! Kita adalah dunia\""
    },
    description: {
      ko: "당신은 사람 만나는 것을 에너지 원천으로 삼습니다. 낯가림이 없고 친화력이 좋아 어딜 가나 친구를 만듭니다. 넓고 얕은 관계를 선호하며, 혼자 있는 것을 견디기 힘들어합니다. 분위기 메이커 역할을 하지만, 가끔은 깊은 속내를 털어놓을 사람이 없어 공허함을 느낄 수도 있습니다.",
      en: "You see meeting people as a source of energy. You're not shy and have great social skills, making friends wherever you go. You prefer wide and shallow relationships, and find it hard to be alone. You play the role of a mood maker, but sometimes you may feel empty because there's no one to share your deep inner thoughts with.",
      ja: "あなたは人と会うことをエネルギー源としています。人見知りがなく親和力が良く、どこに行っても友達を作ります。広く浅い関係を好み、一人でいることを耐え難く感じます。雰囲気メーカーの役割をしますが、時々深い本心を打ち明ける人がいなくて虚しさを感じることもあります。",
      'zh-CN': "你把与人见面当作能量来源。不认生，亲和力好，无论去哪里都能交到朋友。喜欢广而浅的关系，难以忍受独自一人。你扮演气氛制造者的角色，但有时可能会因为没有可以倾诉内心的人而感到空虚。",
      'zh-TW': "你把與人見面當作能量來源。不認生，親和力好，無論去哪裡都能交到朋友。喜歡廣而淺的關係，難以忍受獨自一人。你扮演氣氛製造者的角色，但有時可能會因為沒有可以傾訴內心的人而感到空虛。",
      vi: "Bạn coi việc gặp gỡ mọi người là nguồn năng lượng. Bạn không nhút nhát và có kỹ năng xã hội tốt, kết bạn ở bất cứ đâu. Bạn thích mối quan hệ rộng và nông, và cảm thấy khó chịu khi ở một mình. Bạn đóng vai người tạo không khí, nhưng đôi khi có thể cảm thấy trống rỗng vì không có ai để chia sẻ suy nghĩ sâu kín.",
      id: "Anda melihat bertemu orang sebagai sumber energi. Anda tidak pemalu dan memiliki keterampilan sosial yang baik, berteman di mana pun Anda pergi. Anda lebih suka hubungan yang luas dan dangkal, dan merasa sulit untuk sendirian. Anda memainkan peran sebagai pembuat suasana, tetapi kadang-kadang Anda mungkin merasa kosong karena tidak ada yang bisa berbagi pikiran dalam Anda."
    },
    friendshipStyle: {
      ko: "넓고 얕음, 활동적, 의리",
      en: "Wide and shallow, Active, Loyal",
      ja: "広く浅い、活動的、義理",
      'zh-CN': "广而浅，活跃，讲义气",
      'zh-TW': "廣而淺，活躍，講義氣",
      vi: "Rộng và nông, Năng động, Trung thành",
      id: "Luas dan dangkal, Aktif, Setia"
    },
    goodMatch: {
      ko: "Type 2 (잘 들어주는 친구)",
      en: "Type 2 (Good Listener Friend)",
      ja: "Type 2 (よく聞いてくれる友達)",
      'zh-CN': "Type 2 (善于倾听的朋友)",
      'zh-TW': "Type 2 (善於傾聽的朋友)",
      vi: "Type 2 (Bạn biết lắng nghe)",
      id: "Type 2 (Teman Pendengar yang Baik)"
    },
    badMatch: {
      ko: "Type 4 (혼자가 편한 친구)",
      en: "Type 4 (Friend Who Prefers Being Alone)",
      ja: "Type 4 (一人が楽な友達)",
      'zh-CN': "Type 4 (喜欢独处的朋友)",
      'zh-TW': "Type 4 (喜歡獨處的朋友)",
      vi: "Type 4 (Bạn thích ở một mình)",
      id: "Type 4 (Teman yang Lebih Suka Sendirian)"
    }
  },
  {
    type: "Type2",
    emoji: "🎋",
    title: {
      ko: "대나무 숲, 소울메이트 추구형",
      en: "Bamboo Forest, Soulmate Seeker",
      ja: "竹林、ソウルメイト追求型",
      'zh-CN': "竹林，灵魂伴侣追求型",
      'zh-TW': "竹林，靈魂伴侶追求型",
      vi: "Rừng tre, Người tìm kiếm bạn tâm giao",
      id: "Hutan Bambu, Pencari Soulmate"
    },
    shortDescription: {
      ko: "\"한 명이라도 진짜 내 편이 있다면 성공한 인생\"",
      en: "\"If I have even one person truly on my side, that's a successful life\"",
      ja: "「一人でも本当に味方がいれば成功した人生」",
      'zh-CN': "「只要有一个真正站在我这边的人，就是成功的人生」",
      'zh-TW': "「只要有一個真正站在我這邊的人，就是成功的人生」",
      vi: "\"Chỉ cần một người thật sự ủng hộ mình là đã thành công\"",
      id: "\"Jika ada bahkan satu orang yang benar-benar di pihak saya, itu adalah kehidupan yang sukses\""
    },
    description: {
      ko: "당신은 많은 친구보다 내 마음을 온전히 이해해 줄 단 한 명의 친구를 원합니다. 한번 맺은 인연은 소중히 여기며, 비밀을 절대 지키는 신뢰의 아이콘입니다. 친구의 감정에 깊이 공감하고 헌신하지만, 그만큼 상대방에게 바라는 기대치도 높아 상처받기 쉽습니다.",
      en: "You want one friend who fully understands your heart rather than many friends. You treasure the bonds you form, and are an icon of trust who never reveals secrets. You deeply empathize with and are devoted to your friends' emotions, but you also have high expectations of them, making you easily hurt.",
      ja: "あなたは多くの友達よりも、私の心を完全に理解してくれる一人の友達を望みます。一度結んだ縁は大切にし、秘密を絶対に守る信頼のアイコンです。友達の感情に深く共感し献身的ですが、それだけ相手に期待する基準も高く、傷つきやすいです。",
      'zh-CN': "比起很多朋友，你更想要一个完全理解你内心的朋友。你珍惜建立的缘分，是绝不泄露秘密的信任象征。你对朋友的情感深表同情并奉献，但你对对方的期望也很高，容易受伤。",
      'zh-TW': "比起很多朋友，你更想要一個完全理解你內心的朋友。你珍惜建立的緣分，是絕不洩露秘密的信任象徵。你對朋友的情感深表同情並奉獻，但你對對方的期望也很高，容易受傷。",
      vi: "Bạn muốn một người bạn hiểu trọn vẹn lòng bạn hơn là nhiều bạn bè. Bạn trân trọng những mối quan hệ đã tạo, và là biểu tượng của sự tin cậy, không bao giờ tiết lộ bí mật. Bạn đồng cảm sâu sắc và tận tụy với cảm xúc của bạn bè, nhưng bạn cũng kỳ vọng cao ở họ, nên dễ bị tổn thương.",
      id: "Anda menginginkan satu teman yang sepenuhnya memahami hati Anda daripada banyak teman. Anda menghargai ikatan yang Anda bentuk, dan merupakan ikon kepercayaan yang tidak pernah mengungkapkan rahasia. Anda sangat berempati dan setia pada emosi teman, tetapi Anda juga memiliki harapan tinggi terhadap mereka, membuat Anda mudah terluka."
    },
    friendshipStyle: {
      ko: "좁고 깊음, 신뢰, 감성적",
      en: "Narrow and deep, Trust, Emotional",
      ja: "狭く深い、信頼、感情的",
      'zh-CN': "窄而深，信任，感性",
      'zh-TW': "窄而深，信任，感性",
      vi: "Hẹp và sâu, Tin cậy, Cảm xúc",
      id: "Sempit dan dalam, Kepercayaan, Emosional"
    },
    goodMatch: {
      ko: "Type 1 (나를 이끌어줌)",
      en: "Type 1 (Leads Me)",
      ja: "Type 1 (私を導いてくれる)",
      'zh-CN': "Type 1 (引导我)",
      'zh-TW': "Type 1 (引導我)",
      vi: "Type 1 (Dẫn dắt tôi)",
      id: "Type 1 (Memimpin Saya)"
    },
    badMatch: {
      ko: "Type 3 (너무 계산적임)",
      en: "Type 3 (Too Calculating)",
      ja: "Type 3 (計算しすぎ)",
      'zh-CN': "Type 3 (太算计)",
      'zh-TW': "Type 3 (太算計)",
      vi: "Type 3 (Quá tính toán)",
      id: "Type 3 (Terlalu Menghitung)"
    }
  },
  {
    type: "Type3",
    emoji: "🤝",
    title: {
      ko: "스마트한 전략가, 비즈니스 파트너형",
      en: "Smart Strategist, Business Partner Type",
      ja: "スマートな戦略家、ビジネスパートナー型",
      'zh-CN': "聪明的战略家，商业伙伴型",
      'zh-TW': "聰明的戰略家，商業夥伴型",
      vi: "Nhà chiến lược thông minh, Kiểu đối tác kinh doanh",
      id: "Strategi Cerdas, Tipe Mitra Bisnis"
    },
    shortDescription: {
      ko: "\"우정에도 기브 앤 테이크가 필요해\"",
      en: "\"Friendship also needs give and take\"",
      ja: "「友情にもギブアンドテイクが必要」",
      'zh-CN': "「友谊也需要互惠互利」",
      'zh-TW': "「友誼也需要互惠互利」",
      vi: "\"Tình bạn cũng cần cho và nhận\"",
      id: "\"Persahabatan juga butuh memberi dan menerima\""
    },
    description: {
      ko: "당신은 감정보다는 이성과 효율을 중시합니다. 서로에게 도움이 되고 배울 점이 있는 관계를 선호합니다. 질척거리는 감정 싸움을 싫어하며, 깔끔하고 쿨한 관계를 유지합니다. 차가워 보일 수 있지만, 결정적인 순간에 가장 현실적인 도움을 주는 든든한 조력자입니다.",
      en: "You value reason and efficiency over emotions. You prefer relationships that are mutually helpful and have something to learn from. You dislike sticky emotional fights and maintain clean, cool relationships. You may seem cold, but you're a reliable helper who provides the most practical help in critical moments.",
      ja: "あなたは感情よりも理性と効率を重視します。お互いに役立ち学ぶ点がある関係を好みます。ねばねばした感情の争いを嫌い、きれいでクールな関係を維持します。冷たく見えるかもしれませんが、決定的な瞬間に最も現実的な助けを与える頼もしい協力者です。",
      'zh-CN': "你重视理性和效率胜过情感。你偏好互相帮助、有学习价值的关系。你讨厌黏腻的情感争吵，保持干净冷静的关系。你可能看起来很冷漠，但你是可靠的助手，在关键时刻提供最实际的帮助。",
      'zh-TW': "你重視理性和效率勝過情感。你偏好互相幫助、有學習價值的關係。你討厭黏膩的情感爭吵，保持乾淨冷靜的關係。你可能看起來很冷漠，但你是可靠的助手，在關鍵時刻提供最實際的幫助。",
      vi: "Bạn coi trọng lý trí và hiệu quả hơn cảm xúc. Bạn thích mối quan hệ giúp đỡ lẫn nhau và có điều để học hỏi. Bạn ghét những cuộc cãi vã cảm xúc rối rắm và duy trì mối quan hệ sạch sẽ, bình tĩnh. Bạn có thể trông lạnh lùng, nhưng bạn là người hỗ trợ đáng tin cậy, đưa ra sự giúp đỡ thực tế nhất trong những khoảnh khắc quyết định.",
      id: "Anda menghargai akal dan efisiensi daripada emosi. Anda lebih suka hubungan yang saling membantu dan memiliki sesuatu untuk dipelajari. Anda tidak suka pertengkaran emosional yang lengket dan mempertahankan hubungan yang bersih dan tenang. Anda mungkin terlihat dingin, tetapi Anda adalah penolong yang dapat diandalkan yang memberikan bantuan paling praktis di saat-saat kritis."
    },
    friendshipStyle: {
      ko: "실용적, 거리두기, 성장 지향",
      en: "Practical, Distancing, Growth-oriented",
      ja: "実用的、距離を置く、成長志向",
      'zh-CN': "实用，保持距离，成长导向",
      'zh-TW': "實用，保持距離，成長導向",
      vi: "Thực tế, Giữ khoảng cách, Hướng tới phát triển",
      id: "Praktis, Menjaga Jarak, Berorientasi Pertumbuhan"
    },
    goodMatch: {
      ko: "Type 4 (서로 간섭 안 함)",
      en: "Type 4 (Don't Interfere with Each Other)",
      ja: "Type 4 (お互い干渉しない)",
      'zh-CN': "Type 4 (互不干涉)",
      'zh-TW': "Type 4 (互不干涉)",
      vi: "Type 4 (Không can thiệp lẫn nhau)",
      id: "Type 4 (Tidak Saling Mengganggu)"
    },
    badMatch: {
      ko: "Type 2 (감정 쓰레기통 취급 싫음)",
      en: "Type 2 (Don't Want to Be Treated as Emotional Trash Can)",
      ja: "Type 2 (感情のゴミ箱扱いされたくない)",
      'zh-CN': "Type 2 (不想被当作情感垃圾桶)",
      'zh-TW': "Type 2 (不想被當作情感垃圾桶)",
      vi: "Type 2 (Không muốn bị coi như thùng rác cảm xúc)",
      id: "Type 2 (Tidak Ingin Diperlakukan Seperti Tempat Sampah Emosional)"
    }
  },
  {
    type: "Type4",
    emoji: "😼",
    title: {
      ko: "고독한 미식가, 마이웨이 독립형",
      en: "Solitary Connoisseur, My Way Independent Type",
      ja: "孤独な美食家、マイウェイ独立型",
      'zh-CN': "孤独的美食家，我行我素独立型",
      'zh-TW': "孤獨的美食家，我行我素獨立型",
      vi: "Người sành ăn cô độc, Kiểu độc lập theo cách riêng",
      id: "Penikmat Kesendirian, Tipe Independen My Way"
    },
    shortDescription: {
      ko: "\"무소식이 희소식, 각자 잘 살자\"",
      en: "\"No news is good news, let's each live well\"",
      ja: "「無沙汰は慶事、それぞれよく生きよう」",
      'zh-CN': "「没有消息就是好消息，各自好好生活吧」",
      'zh-TW': "「沒有消息就是好消息，各自好好生活吧」",
      vi: "\"Không tin tức là tin tốt, mỗi người sống tốt thôi\"",
      id: "\"Tidak ada kabar adalah kabar baik, mari kita masing-masing hidup dengan baik\""
    },
    description: {
      ko: "당신은 타인에게 의존하지 않고 독립적인 성향이 강합니다. 친구가 없어서 혼자 있는 게 아니라, 혼자 있는 시간을 즐기기 위해 거리를 둡니다. 가끔 만나는 친구가 진짜 친구라고 생각하며, 매일 연락하는 것은 족쇄처럼 느낍니다. 쿨하고 뒤끝 없는 성격입니다.",
      en: "You have a strong independent tendency and don't depend on others. You're not alone because you have no friends, but rather you keep distance to enjoy your alone time. You think friends you meet occasionally are true friends, and daily contact feels like shackles. You have a cool personality with no grudges.",
      ja: "あなたは他人に依存せず独立した傾向が強いです。友達がいなくて一人でいるのではなく、一人の時間を楽しむために距離を置きます。たまに会う友達が本当の友達だと思い、毎日連絡するのは足かせのように感じます。クールで後味のない性格です。",
      'zh-CN': "你有很强的独立倾向，不依赖他人。你不是因为没有朋友而独处，而是为了享受独处时间而保持距离。你认为偶尔见面的朋友才是真正的朋友，每天联系感觉像枷锁。你性格冷静，没有后遗症。",
      'zh-TW': "你有很強的獨立傾向，不依賴他人。你不是因為沒有朋友而獨處，而是為了享受獨處時間而保持距離。你認為偶爾見面的朋友才是真正的朋友，每天聯繫感覺像枷鎖。你性格冷靜，沒有後遺症。",
      vi: "Bạn có xu hướng độc lập mạnh mẽ và không phụ thuộc vào người khác. Bạn không ở một mình vì không có bạn, mà là giữ khoảng cách để tận hưởng thời gian một mình. Bạn nghĩ bạn bè thỉnh thoảng gặp mới là bạn thật, và liên lạc hàng ngày cảm thấy như xiềng xích. Bạn có tính cách bình tĩnh, không hậu họa.",
      id: "Anda memiliki kecenderungan independen yang kuat dan tidak bergantung pada orang lain. Anda tidak sendirian karena tidak punya teman, melainkan menjaga jarak untuk menikmati waktu sendirian. Anda menganggap teman yang sesekali bertemu adalah teman sejati, dan kontak harian terasa seperti belenggu. Anda memiliki kepribadian yang tenang tanpa dendam."
    },
    friendshipStyle: {
      ko: "독립적, 개인주의, 저강도 유지",
      en: "Independent, Individualistic, Low-intensity Maintenance",
      ja: "独立的、個人主義的、低強度維持",
      'zh-CN': "独立，个人主义，低强度维持",
      'zh-TW': "獨立，個人主義，低強度維持",
      vi: "Độc lập, Cá nhân chủ nghĩa, Duy trì cường độ thấp",
      id: "Independen, Individualistis, Pemeliharaan Intensitas Rendah"
    },
    goodMatch: {
      ko: "Type 3 (깔끔함)",
      en: "Type 3 (Clean)",
      ja: "Type 3 (きれい)",
      'zh-CN': "Type 3 (干净利落)",
      'zh-TW': "Type 3 (乾淨利落)",
      vi: "Type 3 (Gọn gàng)",
      id: "Type 3 (Rapi)"
    },
    badMatch: {
      ko: "Type 1 (너무 귀찮게 함)",
      en: "Type 1 (Too Annoying)",
      ja: "Type 1 (煩わしすぎる)",
      'zh-CN': "Type 1 (太烦人)",
      'zh-TW': "Type 1 (太煩人)",
      vi: "Type 1 (Quá phiền phức)",
      id: "Type 1 (Terlalu Mengganggu)"
    }
  },
  {
    type: "Type5",
    emoji: "🕊️",
    title: {
      ko: "둥글둥글 평화주의자, 예스맨",
      en: "Round Peacemaker, Yes-man",
      ja: "丸々平和主義者、イエスマン",
      'zh-CN': "圆滑的和平主义者，老好人",
      'zh-TW': "圓滑的和平主義者，老好人",
      vi: "Người hòa giải tròn trịa, Người luôn đồng ý",
      id: "Pembuat Damai Bulat, Yes-man"
    },
    shortDescription: {
      ko: "\"네가 좋으면 나도 좋아~\"",
      en: "\"If you're happy, I'm happy~\"",
      ja: "「あなたが良ければ私も良い～」",
      'zh-CN': "「你高兴我就高兴～」",
      'zh-TW': "「你高興我就高興～」",
      vi: "\"Bạn vui thì tôi cũng vui~\"",
      id: "\"Kalau kamu senang, saya juga senang~\""
    },
    description: {
      ko: "당신은 거절을 잘 못 하고 친구들의 의견에 잘 맞춰주는 편입니다. 싸움을 싫어해서 웬만하면 양보하고 배려합니다. 주변에 적이 없고 모두와 원만하게 지내지만, 정작 본인의 속마음을 솔직하게 표현하지 못해 속앓이를 할 때가 많습니다.",
      en: "You're not good at refusing and tend to go along with your friends' opinions. You dislike fights, so you usually compromise and show consideration. You have no enemies around you and get along well with everyone, but you often suffer inside because you can't honestly express your true feelings.",
      ja: "あなたは断ることが苦手で、友達の意見によく合わせる傾向があります。喧嘩を嫌うので、できるだけ譲歩して配慮します。周りに敵がおらず、みんなと円満に過ごしますが、実際には自分の本心を正直に表現できず、内面で苦しむことが多いです。",
      'zh-CN': "你不擅长拒绝，倾向于迎合朋友的意见。你讨厌争吵，所以通常会妥协和体谅。你周围没有敌人，和所有人都相处融洽，但你经常因为无法诚实表达自己的真实感受而内心痛苦。",
      'zh-TW': "你不擅長拒絕，傾向於迎合朋友的意見。你討厭爭吵，所以通常會妥協和體諒。你周圍沒有敵人，和所有人都相處融洽，但你經常因為無法誠實表達自己的真實感受而內心痛苦。",
      vi: "Bạn không giỏi từ chối và có xu hướng đi theo ý kiến của bạn bè. Bạn ghét cãi vã nên thường nhượng bộ và quan tâm. Bạn không có kẻ thù xung quanh và hòa thuận với mọi người, nhưng bạn thường đau khổ trong lòng vì không thể bày tỏ cảm xúc thật của mình.",
      id: "Anda tidak pandai menolak dan cenderung mengikuti pendapat teman. Anda tidak suka pertengkaran, jadi biasanya mengalah dan menunjukkan pertimbangan. Anda tidak punya musuh di sekitar dan bergaul baik dengan semua orang, tetapi Anda sering menderita di dalam karena tidak bisa jujur mengekspresikan perasaan sejati Anda."
    },
    friendshipStyle: {
      ko: "수동적, 배려, 순응",
      en: "Passive, Considerate, Compliant",
      ja: "受動的、配慮、順応",
      'zh-CN': "被动，体贴，顺从",
      'zh-TW': "被動，體貼，順從",
      vi: "Thụ động, Quan tâm, Tuân thủ",
      id: "Pasif, Perhatian, Patuh"
    },
    goodMatch: {
      ko: "Type 6 (나를 챙겨줌)",
      en: "Type 6 (Takes Care of Me)",
      ja: "Type 6 (私を気にかけてくれる)",
      'zh-CN': "Type 6 (照顾我)",
      'zh-TW': "Type 6 (照顧我)",
      vi: "Type 6 (Chăm sóc tôi)",
      id: "Type 6 (Merawat Saya)"
    },
    badMatch: {
      ko: "Type 3 (이용당할 수 있음)",
      en: "Type 3 (Can Be Taken Advantage Of)",
      ja: "Type 3 (利用される可能性がある)",
      'zh-CN': "Type 3 (可能被利用)",
      'zh-TW': "Type 3 (可能被利用)",
      vi: "Type 3 (Có thể bị lợi dụng)",
      id: "Type 3 (Bisa Dieksploitasi)"
    }
  },
  {
    type: "Type6",
    emoji: "🐥",
    title: {
      ko: "든든한 맏언니/맏형, 엄마 오리형",
      en: "Reliable Big Sister/Brother, Mother Duck Type",
      ja: "頼もしい長女/長男、母アヒル型",
      'zh-CN': "可靠的大姐/大哥，母鸭型",
      'zh-TW': "可靠的大姐/大哥，母鴨型",
      vi: "Chị/Anh cả đáng tin cậy, Kiểu mẹ vịt",
      id: "Kakak/Abang Terpercaya, Tipe Ibu Bebek"
    },
    shortDescription: {
      ko: "\"밥은 먹었어? 우산은 챙겼고?\"",
      en: "\"Did you eat? Did you bring an umbrella?\"",
      ja: "「ご飯は食べた？傘は持った？」",
      'zh-CN': "「吃饭了吗？带伞了吗？」",
      'zh-TW': "「吃飯了嗎？帶傘了嗎？」",
      vi: "\"Ăn cơm chưa? Mang ô chưa?\"",
      id: "\"Sudah makan? Sudah bawa payung?\""
    },
    description: {
      ko: "당신은 친구들을 세심하게 챙기고 보살피는 것을 좋아합니다. 모임에서 총무나 리더 역할을 도맡아 하며, 친구들의 대소사를 꼼꼼하게 기억합니다. 오지랖이 넓다는 소리를 듣기도 하지만, 친구들에게 없어서는 안 될 든든한 버팀목입니다.",
      en: "You like to carefully take care of and look after your friends. You take on the role of treasurer or leader in gatherings, and remember your friends' big and small matters meticulously. You may hear that you're nosy, but you're an indispensable pillar of support for your friends.",
      ja: "あなたは友達を細かく気にかけて世話をするのが好きです。集まりで会計やリーダーの役割を引き受け、友達の大小事をきちんと覚えています。お節介だと言われることもありますが、友達にとって欠かせない頼もしい支えです。",
      'zh-CN': "你喜欢细心照顾和关心朋友。在聚会中担任财务或领导角色，仔细记住朋友的大小事。你可能听到说你多管闲事，但你是朋友不可或缺的可靠支柱。",
      'zh-TW': "你喜歡細心照顧和關心朋友。在聚會中擔任財務或領導角色，仔細記住朋友的大小事。你可能聽到說你多管閒事，但你是朋友不可或缺的可靠支柱。",
      vi: "Bạn thích chăm sóc và quan tâm bạn bè một cách cẩn thận. Bạn đảm nhận vai trò thủ quỹ hoặc lãnh đạo trong các buổi tụ tập, và nhớ kỹ mọi việc lớn nhỏ của bạn bè. Bạn có thể nghe nói mình quá nhiều chuyện, nhưng bạn là cột trụ không thể thiếu cho bạn bè.",
      id: "Anda suka merawat dan memperhatikan teman dengan cermat. Anda mengambil peran bendahara atau pemimpin dalam pertemuan, dan mengingat hal-hal besar dan kecil teman dengan teliti. Anda mungkin mendengar bahwa Anda terlalu ikut campur, tetapi Anda adalah pilar dukungan yang sangat diperlukan untuk teman-teman Anda."
    },
    friendshipStyle: {
      ko: "헌신적, 책임감, 챙김",
      en: "Devoted, Responsible, Caring",
      ja: "献身的、責任感、気配り",
      'zh-CN': "奉献，有责任感，细心",
      'zh-TW': "奉獻，有責任感，細心",
      vi: "Tận tụy, Trách nhiệm, Quan tâm",
      id: "Berkomitmen, Bertanggung Jawab, Peduli"
    },
    goodMatch: {
      ko: "Type 5 (내 챙김을 고마워함)",
      en: "Type 5 (Appreciates My Care)",
      ja: "Type 5 (私の気配りに感謝してくれる)",
      'zh-CN': "Type 5 (感谢我的照顾)",
      'zh-TW': "Type 5 (感謝我的照顧)",
      vi: "Type 5 (Biết ơn sự chăm sóc của tôi)",
      id: "Type 5 (Menghargai Perawatan Saya)"
    },
    badMatch: {
      ko: "Type 4 (간섭이라고 느낌)",
      en: "Type 4 (Feels Like Interference)",
      ja: "Type 4 (干渉だと感じる)",
      'zh-CN': "Type 4 (感觉像干涉)",
      'zh-TW': "Type 4 (感覺像干涉)",
      vi: "Type 4 (Cảm thấy như can thiệp)",
      id: "Type 4 (Merasa Seperti Campur Tangan)"
    }
  }
];

// 채점 함수: 각 답변의 typePoints를 합산하여 가장 높은 점수의 Type 반환
export function calculatePhase2FriendshipStyleResult(answers: number[]): string {
  // Type별 점수 초기화 (1-6)
  const typeScores: Record<number, number> = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };

  // 각 질문의 답변에 대해 해당하는 Type들에 점수 추가
  answers.forEach((selectedOptionIndex, questionIndex) => {
    const question = phase2FriendshipStyleQuestions[questionIndex];
    if (question && question.options[selectedOptionIndex]) {
      const selectedOption = question.options[selectedOptionIndex];
      // 선택된 옵션의 typePoints 배열에 있는 모든 Type에 1점씩 추가
      selectedOption.typePoints.forEach(type => {
        typeScores[type] = (typeScores[type] || 0) + 1;
      });
    }
  });

  // 가장 높은 점수를 가진 Type 찾기
  let maxScore = 0;
  let resultType = 1; // 기본값

  // 동점일 경우 우선순위: Type 2 > Type 1 > Type 6 > Type 5 > Type 3 > Type 4
  const priority = [2, 1, 6, 5, 3, 4];

  for (const type of priority) {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  }

  return `Type${resultType}`;
}
