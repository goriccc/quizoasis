export interface LoveLanguageQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    type: string; // "Type1", "Type2", "Type3", "Type4", "Type5"
  }[];
}

export interface LoveLanguageResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  keywords: Record<string, string>; // 핵심 키워드
  tip: Record<string, string>; // 연애 꿀팁
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const loveLanguageQuestions: LoveLanguageQuestion[] = [
  {
    id: 1,
    question: {
      ko: "연인이 나를 사랑한다고 느낄 때는?",
      en: "When do I feel loved by my partner?",
      ja: "恋人が私を愛していると感じる時は？",
      'zh-CN': "什么时候你觉得恋人爱你？",
      'zh-TW': "什麼時候你覺得戀人愛你？",
      vi: "Khi nào bạn cảm thấy người yêu yêu mình?",
      id: "Kapan saya merasa dicintai oleh pasangan?"
    },
    options: [
      {
        text: {
          ko: "\"사랑해, 너 오늘 진짜 예쁘다.\"라고 말해줄 때",
          en: "When they say \"I love you, you're so beautiful today.\"",
          ja: "「愛してる、今日本当にきれいだね」と言ってくれる時",
          'zh-CN': "当他们说\"我爱你，你今天真漂亮。\"",
          'zh-TW': "當他們說「我愛你，你今天真漂亮。」",
          vi: "Khi họ nói \"Anh yêu em, em hôm nay thật xinh đẹp.\"",
          id: "Ketika mereka berkata \"Aku mencintaimu, kamu cantik sekali hari ini.\""
        },
        type: "Type1" // 인정하는 말
      },
      {
        text: {
          ko: "내가 힘들어할 때 말없이 안아주고 토닥여줄 때",
          en: "When they hug and comfort me silently when I'm struggling",
          ja: "私が辛い時に無言で抱きしめて慰めてくれる時",
          'zh-CN': "当我困难时，他们默默地拥抱和安慰我",
          'zh-TW': "當我困難時，他們默默地擁抱和安慰我",
          vi: "Khi mình khó khăn, họ ôm và an ủi mình một cách im lặng",
          id: "Ketika mereka memeluk dan menghibur saya dengan diam saat saya kesulitan"
        },
        type: "Type5" // 신체적 접촉
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "기념일에 받고 싶은 선물은?",
      en: "What gift do you want to receive on an anniversary?",
      ja: "記念日に受け取りたい贈り物は？",
      'zh-CN': "纪念日你想要什么礼物？",
      'zh-TW': "紀念日你想要什麼禮物？",
      vi: "Bạn muốn nhận quà gì vào ngày kỷ niệm?",
      id: "Hadiah apa yang ingin Anda terima di hari peringatan?"
    },
    options: [
      {
        text: {
          ko: "내가 평소에 갖고 싶다고 스치듯 말했던 그 물건",
          en: "That thing I casually mentioned wanting",
          ja: "私が普段欲しいとさりげなく言っていたあの物",
          'zh-CN': "我平时随口说过想要的那个东西",
          'zh-TW': "我平時隨口說過想要的那個東西",
          vi: "Thứ mình từng tình cờ nói muốn có",
          id: "Benda yang saya sebutkan secara santai bahwa saya ingin memilikinya"
        },
        type: "Type3" // 선물
      },
      {
        text: {
          ko: "하루 종일 온전히 나에게만 집중해 주는 데이트 시간",
          en: "A date where they focus entirely on me all day",
          ja: "一日中完全に私だけに集中してくれるデートの時間",
          'zh-CN': "一整天完全专注于我的约会时间",
          'zh-TW': "一整天完全專注於我的約會時間",
          vi: "Một buổi hẹn hò mà họ hoàn toàn tập trung vào mình cả ngày",
          id: "Waktu kencan di mana mereka sepenuhnya fokus pada saya sepanjang hari"
        },
        type: "Type2" // 함께하는 시간
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "연인에게 서운함을 느끼는 순간은?",
      en: "When do you feel hurt by your partner?",
      ja: "恋人に寂しさを感じる瞬間は？",
      'zh-CN': "什么时候你对恋人感到失望？",
      'zh-TW': "什麼時候你對戀人感到失望？",
      vi: "Khi nào bạn cảm thấy buồn với người yêu?",
      id: "Kapan Anda merasa kecewa dengan pasangan?"
    },
    options: [
      {
        text: {
          ko: "내가 부탁한 일을 자꾸 까먹거나 안 해줄 때",
          en: "When they keep forgetting or not doing what I asked",
          ja: "私が頼んだことを何度も忘れたりやめてくれない時",
          'zh-CN': "当我请求的事情他们总是忘记或不做",
          'zh-TW': "當我請求的事情他們總是忘記或不做",
          vi: "Khi họ cứ quên hoặc không làm những gì mình nhờ",
          id: "Ketika mereka terus melupakan atau tidak melakukan apa yang saya minta"
        },
        type: "Type4" // 봉사
      },
      {
        text: {
          ko: "내 외모나 변화에 대해 아무런 칭찬이 없을 때",
          en: "When there's no compliment about my appearance or changes",
          ja: "私の外見や変化について何も褒められない時",
          'zh-CN': "当对我的外表或变化没有任何赞美时",
          'zh-TW': "當對我的外表或變化沒有任何讚美時",
          vi: "Khi không có lời khen nào về ngoại hình hay sự thay đổi của mình",
          id: "Ketika tidak ada pujian tentang penampilan atau perubahan saya"
        },
        type: "Type1" // 인정하는 말
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "장거리 출장을 다녀온 연인, 가장 반가운 행동은?",
      en: "Your partner returns from a long business trip. What's the most welcome action?",
      ja: "長距離出張から帰ってきた恋人、最も嬉しい行動は？",
      'zh-CN': "长途出差归来的恋人，最令人高兴的行为是？",
      'zh-TW': "長途出差歸來的戀人，最令人高興的行為是？",
      vi: "Người yêu đi công tác xa về, hành động nào làm bạn vui nhất?",
      id: "Pasangan kembali dari perjalanan bisnis jauh. Tindakan apa yang paling menyambut?"
    },
    options: [
      {
        text: {
          ko: "양손 가득 사 온 현지 유명한 기념품과 선물",
          en: "Famous local souvenirs and gifts bought with both hands full",
          ja: "両手いっぱい買ってきた現地の有名なお土産と贈り物",
          'zh-CN': "双手满载的当地著名纪念品和礼物",
          'zh-TW': "雙手滿載的當地著名紀念品和禮物",
          vi: "Những món quà lưu niệm địa phương nổi tiếng đầy cả hai tay",
          id: "Souvenir lokal terkenal dan hadiah yang dibeli penuh kedua tangan"
        },
        type: "Type3" // 선물
      },
      {
        text: {
          ko: "\"보고 싶었어\"라며 달려와서 하는 진한 포옹",
          en: "A warm hug running to me saying \"I missed you\"",
          ja: "「会いたかった」と言って駆け寄ってくる深い抱擁",
          'zh-CN': "跑过来说\"想你了\"并紧紧拥抱",
          'zh-TW': "跑過來說「想你了」並緊緊擁抱",
          vi: "Một cái ôm nồng ấm khi chạy đến và nói \"Anh nhớ em\"",
          id: "Pelukan hangat sambil berlari sambil berkata \"Aku merindukanmu\""
        },
        type: "Type5" // 신체적 접촉
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "내가 꿈꾸는 이상적인 데이트는?",
      en: "What is my ideal date?",
      ja: "私が夢見る理想的なデートは？",
      'zh-CN': "我梦想的理想约会是什么？",
      'zh-TW': "我夢想的理想約會是什麼？",
      vi: "Buổi hẹn hò lý tưởng mà bạn mơ ước là gì?",
      id: "Apa kencan ideal yang saya impikan?"
    },
    options: [
      {
        text: {
          ko: "서로 눈을 맞추고 깊은 대화를 나누는 카페 데이트",
          en: "A cafe date where we look into each other's eyes and have deep conversations",
          ja: "お互いに目を合わせて深い会話をするカフェデート",
          'zh-CN': "在咖啡馆约会，对视并深入交谈",
          'zh-TW': "在咖啡館約會，對視並深入交談",
          vi: "Một buổi hẹn hò ở quán cà phê nhìn vào mắt nhau và trò chuyện sâu sắc",
          id: "Kencan kafe di mana kami saling menatap mata dan bercakap dalam"
        },
        type: "Type2" // 함께하는 시간
      },
      {
        text: {
          ko: "맛있는 요리를 직접 해주거나 집까지 데려다주는 배려",
          en: "The care of cooking delicious food for me or taking me home",
          ja: "美味しい料理を作ってくれたり家まで送ってくれる気遣い",
          'zh-CN': "亲自为我做美味料理或送我回家的贴心",
          'zh-TW': "親自為我做美味料理或送我回家的貼心",
          vi: "Sự quan tâm như tự nấu món ngon cho mình hoặc đưa mình về nhà",
          id: "Perhatian memasak makanan lezat untuk saya atau mengantar saya pulang"
        },
        type: "Type4" // 봉사
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "연인과 싸우고 화해할 때 더 좋은 방법은?",
      en: "What's a better way to make up after a fight with your partner?",
      ja: "恋人と喧嘩して仲直りする時、より良い方法は？",
      'zh-CN': "和恋人吵架后和好，更好的方式是什么？",
      'zh-TW': "和戀人吵架後和好，更好的方式是什麼？",
      vi: "Cách nào tốt hơn để làm hòa sau khi cãi nhau với người yêu?",
      id: "Apa cara yang lebih baik untuk berbaikan setelah bertengkar dengan pasangan?"
    },
    options: [
      {
        text: {
          ko: "진심이 담긴 편지나 사과의 메시지를 받는 것",
          en: "Receiving a sincere letter or apology message",
          ja: "心のこもった手紙や謝罪のメッセージを受け取ること",
          'zh-CN': "收到一封真诚的信或道歉信息",
          'zh-TW': "收到一封真誠的信或道歉信息",
          vi: "Nhận được một bức thư chân thành hoặc tin nhắn xin lỗi",
          id: "Menerima surat tulus atau pesan permintaan maaf"
        },
        type: "Type1" // 인정하는 말
      },
      {
        text: {
          ko: "작은 선물이나 맛있는 디저트를 사 들고 오는 것",
          en: "Bringing a small gift or delicious dessert",
          ja: "小さな贈り物や美味しいデザートを買って持ってくること",
          'zh-CN': "带来小礼物或美味的甜点",
          'zh-TW': "帶來小禮物或美味的甜點",
          vi: "Mang quà nhỏ hoặc món tráng miệng ngon",
          id: "Membawa hadiah kecil atau dessert lezat"
        },
        type: "Type3" // 선물
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "몸이 아파서 누워있을 때, 연인이 해줬으면 하는 것은?",
      en: "When you're sick in bed, what do you want your partner to do?",
      ja: "体調が悪くて横になっている時、恋人がしてくれたらいいことは？",
      'zh-CN': "当你生病卧床时，你希望恋人做什么？",
      'zh-TW': "當你生病臥床時，你希望戀人做什麼？",
      vi: "Khi bạn ốm nằm trên giường, bạn muốn người yêu làm gì?",
      id: "Ketika Anda sakit di tempat tidur, apa yang ingin pasangan lakukan?"
    },
    options: [
      {
        text: {
          ko: "죽을 사다 주고 약을 챙겨주는 세심한 간호",
          en: "Careful nursing like buying porridge and preparing medicine",
          ja: "おかゆを買ってきて薬を用意してくれる細やかな看護",
          'zh-CN': "细心护理，如买粥和准备药物",
          'zh-TW': "細心護理，如買粥和準備藥物",
          vi: "Sự chăm sóc chu đáo như mua cháo và chuẩn bị thuốc",
          id: "Perawatan hati-hati seperti membeli bubur dan menyiapkan obat"
        },
        type: "Type4" // 봉사
      },
      {
        text: {
          ko: "걱정스러운 눈빛으로 옆에 계속 있어 주는 것",
          en: "Staying by my side with a worried look",
          ja: "心配そうな目でずっとそばにいてくれること",
          'zh-CN': "用担忧的眼神一直陪在身边",
          'zh-TW': "用擔憂的眼神一直陪在身邊",
          vi: "Ở bên cạnh với ánh mắt lo lắng",
          id: "Tetap di sisi saya dengan tatapan khawatir"
        },
        type: "Type2" // 함께하는 시간
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "나의 자존감이 올라가는 순간은?",
      en: "When does my self-esteem rise?",
      ja: "私の自尊心が上がる瞬間は？",
      'zh-CN': "我的自尊心上升的时刻是？",
      'zh-TW': "我的自尊心上升的時刻是？",
      vi: "Khi nào lòng tự trọng của bạn tăng lên?",
      id: "Kapan harga diri saya naik?"
    },
    options: [
      {
        text: {
          ko: "연인이 나를 자랑스러워하며 사람들 앞에서 칭찬할 때",
          en: "When my partner proudly praises me in front of people",
          ja: "恋人が私を誇りに思い人々の前で褒めてくれる時",
          'zh-CN': "当恋人自豪地在人前夸奖我时",
          'zh-TW': "當戀人自豪地在人前誇獎我時",
          vi: "Khi người yêu tự hào về mình và khen mình trước mặt mọi người",
          id: "Ketika pasangan dengan bangga memuji saya di depan orang"
        },
        type: "Type1" // 인정하는 말
      },
      {
        text: {
          ko: "연인이 내 손을 잡거나 머리를 쓰다듬어 줄 때",
          en: "When my partner holds my hand or strokes my head",
          ja: "恋人が私の手を握ったり頭を撫でてくれる時",
          'zh-CN': "当恋人牵我的手或抚摸我的头时",
          'zh-TW': "當戀人牽我的手或撫摸我的頭時",
          vi: "Khi người yêu nắm tay hoặc vuốt ve tóc mình",
          id: "Ketika pasangan menggenggam tangan saya atau membelai kepala saya"
        },
        type: "Type5" // 신체적 접촉
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "다음 중 더 최악인 상황은?",
      en: "Which of the following is worse?",
      ja: "次のうち、より最悪な状況は？",
      'zh-CN': "以下哪种情况更糟糕？",
      'zh-TW': "以下哪種情況更糟糕？",
      vi: "Tình huống nào trong số sau là tệ hơn?",
      id: "Situasi mana yang lebih buruk dari berikut ini?"
    },
    options: [
      {
        text: {
          ko: "기념일 선물을 준비 안 하고 빈손으로 온 연인",
          en: "A partner who comes empty-handed without preparing an anniversary gift",
          ja: "記念日の贈り物を準備せずに手ぶらで来た恋人",
          'zh-CN': "没有准备纪念日礼物空手而来的恋人",
          'zh-TW': "沒有準備紀念日禮物空手而來的戀人",
          vi: "Người yêu đến tay không mà không chuẩn bị quà kỷ niệm",
          id: "Pasangan yang datang dengan tangan kosong tanpa mempersiapkan hadiah peringatan"
        },
        type: "Type3" // 선물
      },
      {
        text: {
          ko: "약속 시간에 늦어서 데이트 시간을 낭비하게 한 연인",
          en: "A partner who is late and wastes our date time",
          ja: "約束の時間に遅れてデートの時間を無駄にした恋人",
          'zh-CN': "迟到浪费约会时间的恋人",
          'zh-TW': "遲到浪費約會時間的戀人",
          vi: "Người yêu đến muộn làm lãng phí thời gian hẹn hò",
          id: "Pasangan yang terlambat dan menyia-nyiakan waktu kencan kami"
        },
        type: "Type2" // 함께하는 시간
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "내가 사랑을 표현하는 방식에 더 가까운 것은?",
      en: "What's closer to how I express love?",
      ja: "私が愛を表現する方法により近いものは？",
      'zh-CN': "更接近我表达爱的方式是什么？",
      'zh-TW': "更接近我表達愛的方式是什麼？",
      vi: "Cách nào gần hơn với cách bạn thể hiện tình yêu?",
      id: "Apa yang lebih dekat dengan cara saya mengekspresikan cinta?"
    },
    options: [
      {
        text: {
          ko: "상대방이 필요로 하는 것을 눈치채고 도와준다.",
          en: "I notice what they need and help them",
          ja: "相手が必要としていることに気づいて助ける",
          'zh-CN': "我注意到他们的需求并帮助他们",
          'zh-TW': "我注意到他們的需求並幫助他們",
          vi: "Để ý những gì họ cần và giúp đỡ họ",
          id: "Saya memperhatikan apa yang mereka butuhkan dan membantu mereka"
        },
        type: "Type4" // 봉사
      },
      {
        text: {
          ko: "사랑한다는 말과 애정 표현을 아끼지 않는다.",
          en: "I don't hesitate to say \"I love you\" and show affection",
          ja: "愛してるという言葉と愛情表現を惜しまない",
          'zh-CN': "我毫不犹豫地说\"我爱你\"并表达爱意",
          'zh-TW': "我毫不猶豫地說「我愛你」並表達愛意",
          vi: "Không ngần ngại nói \"Anh yêu em\" và thể hiện tình cảm",
          id: "Saya tidak ragu untuk mengatakan \"Aku mencintaimu\" dan menunjukkan kasih sayang"
        },
        type: "Type1" // 인정하는 말
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "결혼 생활에서 가장 기대하는 것은?",
      en: "What do you most look forward to in married life?",
      ja: "結婚生活で最も期待することは？",
      'zh-CN': "婚姻生活中你最期待的是什么？",
      'zh-TW': "婚姻生活中你最期待的是什麼？",
      vi: "Bạn mong đợi điều gì nhất trong cuộc sống hôn nhân?",
      id: "Apa yang paling Anda nantikan dalam kehidupan pernikahan?"
    },
    options: [
      {
        text: {
          ko: "퇴근 후 함께 맛있는 저녁을 먹으며 수다 떠는 시간",
          en: "Time together eating delicious dinner and chatting after work",
          ja: "退社後一緒に美味しい夕食を食べながらおしゃべりする時間",
          'zh-CN': "下班后一起吃美味晚餐和聊天的时光",
          'zh-TW': "下班後一起吃美味晚餐和聊天的時光",
          vi: "Thời gian cùng nhau ăn bữa tối ngon và trò chuyện sau giờ làm",
          id: "Waktu bersama makan makan malam lezat dan mengobrol setelah bekerja"
        },
        type: "Type2" // 함께하는 시간
      },
      {
        text: {
          ko: "소파에 나란히 앉아 서로 기대고 TV를 보는 시간",
          en: "Time sitting side by side on the sofa leaning on each other watching TV",
          ja: "ソファに並んで座ってお互いに寄りかかりながらテレビを見る時間",
          'zh-CN': "并肩坐在沙发上互相依偎着看电视的时光",
          'zh-TW': "並肩坐在沙發上互相依偎著看電視的時光",
          vi: "Thời gian ngồi cạnh nhau trên ghế sofa tựa vào nhau xem TV",
          id: "Waktu duduk berdampingan di sofa saling bersandar sambil menonton TV"
        },
        type: "Type5" // 신체적 접촉
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "나에게 사랑의 증거란?",
      en: "What is proof of love to me?",
      ja: "私にとって愛の証拠とは？",
      'zh-CN': "对我来说，什么是爱的证明？",
      'zh-TW': "對我來說，什麼是愛的證明？",
      vi: "Bằng chứng của tình yêu đối với bạn là gì?",
      id: "Apa bukti cinta bagi saya?"
    },
    options: [
      {
        text: {
          ko: "나를 위해 기꺼이 돈과 시간을 쓰는 것",
          en: "Willingly spending money and time for me",
          ja: "私のために喜んでお金と時間を使うこと",
          'zh-CN': "愿意为我花费金钱和时间",
          'zh-TW': "願意為我花費金錢和時間",
          vi: "Sẵn sàng chi tiền và thời gian cho mình",
          id: "Dengan senang hati menghabiskan uang dan waktu untuk saya"
        },
        type: "SPECIAL_A" // Type 3, 4 중 더 높은 쪽에 +1점
      },
      {
        text: {
          ko: "나를 최우선으로 생각하고 함께 있어 주는 것",
          en: "Thinking of me as top priority and being with me",
          ja: "私を最優先に考えて一緒にいてくれること",
          'zh-CN': "把我当作第一优先并陪伴我",
          'zh-TW': "把我當作第一優先並陪伴我",
          vi: "Nghĩ về mình là ưu tiên hàng đầu và ở bên mình",
          id: "Memikirkan saya sebagai prioritas utama dan bersama saya"
        },
        type: "SPECIAL_B" // Type 2, 5 중 더 높은 쪽에 +1점
      }
    ]
  }
];

export const loveLanguageResults: LoveLanguageResult[] = [
  {
    type: "Type1",
    emoji: "💌",
    title: {
      ko: "달콤한 칭찬봇, 인정하는 말",
      en: "Sweet Compliment Bot, Words of Affirmation",
      ja: "甘い褒めロボット、承認の言葉",
      'zh-CN': "甜蜜的赞美机器，肯定的言辞",
      'zh-TW': "甜蜜的讚美機器，肯定的言辭",
      vi: "Máy khen ngợi ngọt ngào, Lời xác nhận",
      id: "Bot Pujian Manis, Kata-kata Afirmasi"
    },
    shortDescription: {
      ko: "\"사랑한다는 말 한마디면 사르르 녹아요\"",
      en: "\"Just one word of love and I melt\"",
      ja: "「愛してるという言葉一つでとろけちゃう」",
      'zh-CN': "\"一句'我爱你'就让我融化\"",
      'zh-TW': "「一句『我愛你』就讓我融化」",
      vi: "\"Chỉ một câu yêu thương là mình tan chảy\"",
      id: "\"Hanya satu kata cinta dan saya meleleh\""
    },
    description: {
      ko: "당신은 연인의 따뜻한 말 한마디에 가장 큰 사랑을 느낍니다. \"사랑해\", \"고마워\", \"오늘 예쁘다\" 같은 칭찬과 격려가 당신에게는 최고의 에너지입니다. 반대로 비난이나 무시하는 말투는 당신에게 씻을 수 없는 상처를 줍니다.",
      en: "You feel the greatest love from your partner's warm words. Compliments and encouragement like \"I love you\", \"Thank you\", \"You're so beautiful today\" are the best energy for you. On the contrary, criticism or dismissive tone leaves an indelible wound on you.",
      ja: "あなたは恋人の温かい言葉一つに最大の愛を感じます。「愛してる」「ありがとう」「今日は本当にきれいだ」のような褒め言葉と励ましがあなたには最高のエネルギーです。逆に非難や無視する口調はあなたに消せない傷を与えます。",
      'zh-CN': "你从恋人温暖的话语中感受到最大的爱。\"我爱你\"、\"谢谢你\"、\"你今天真漂亮\"这样的赞美和鼓励对你来说是最好的能量。相反，批评或忽视的语气会给你留下无法抹去的伤痕。",
      'zh-TW': "你從戀人溫暖的話語中感受到最大的愛。「我愛你」、「謝謝你」、「你今天真漂亮」這樣的讚美和鼓勵對你來說是最好的能量。相反，批評或忽視的語氣會給你留下無法抹去的傷痕。",
      vi: "Bạn cảm nhận tình yêu lớn nhất từ những lời nói ấm áp của người yêu. Những lời khen và động viên như \"Anh yêu em\", \"Cảm ơn\", \"Em hôm nay thật xinh đẹp\" là năng lượng tốt nhất cho bạn. Ngược lại, lời chỉ trích hay giọng điệu phớt lờ sẽ để lại vết thương không thể xóa nhòa.",
      id: "Anda merasakan cinta terbesar dari kata-kata hangat pasangan. Pujian dan dorongan seperti \"Aku mencintaimu\", \"Terima kasih\", \"Kamu cantik sekali hari ini\" adalah energi terbaik untuk Anda. Sebaliknya, kritik atau nada meremehkan meninggalkan luka yang tak terlupakan pada Anda."
    },
    keywords: {
      ko: "칭찬, 애정 표현, 편지, 격려",
      en: "Compliments, Affection Expression, Letters, Encouragement",
      ja: "褒め言葉、愛情表現、手紙、励まし",
      'zh-CN': "赞美，情感表达，信件，鼓励",
      'zh-TW': "讚美，情感表達，信件，鼓勵",
      vi: "Lời khen, Thể hiện tình cảm, Thư từ, Động viên",
      id: "Pujian, Ekspresi Kasih Sayang, Surat, Dorongan"
    },
    tip: {
      ko: "표현을 많이 해주는 다정한 사람을 만나세요.",
      en: "Meet someone warm and expressive.",
      ja: "表現をたくさんしてくれる優しい人と出会いましょう。",
      'zh-CN': "遇到一个温暖且善于表达的人。",
      'zh-TW': "遇到一個溫暖且善於表達的人。",
      vi: "Hãy gặp một người ấm áp và biểu cảm nhiều.",
      id: "Temui seseorang yang hangat dan ekspresif."
    },
    goodMatch: {
      ko: "Type 2 (함께하는 시간)",
      en: "Type 2 (Quality Time)",
      ja: "Type 2 (一緒に過ごす時間)",
      'zh-CN': "Type 2 (共度时光)",
      'zh-TW': "Type 2 (共度時光)",
      vi: "Type 2 (Thời gian bên nhau)",
      id: "Type 2 (Waktu Berkualitas)"
    },
    badMatch: {
      ko: "Type 4 (봉사 - 말보다 행동이라 답답함)",
      en: "Type 4 (Acts of Service - Frustrating because actions speak louder than words)",
      ja: "Type 4 (奉仕 - 言葉より行動なのでもどかしい)",
      'zh-CN': "Type 4 (服务行为 - 行动胜于言语，令人沮丧)",
      'zh-TW': "Type 4 (服務行為 - 行動勝於言語，令人沮喪)",
      vi: "Type 4 (Hành động phục vụ - Bực mình vì hành động hơn lời nói)",
      id: "Type 4 (Tindakan Pelayanan - Frustasi karena tindakan lebih berbicara daripada kata-kata)"
    }
  },
  {
    type: "Type2",
    emoji: "⏰",
    title: {
      ko: "너만 보인단 말이야, 함께하는 시간",
      en: "I Only See You, Quality Time",
      ja: "あなただけが見える、一緒に過ごす時間",
      'zh-CN': "我只看到你，共度时光",
      'zh-TW': "我只看到你，共度時光",
      vi: "Chỉ thấy mình bạn, Thời gian bên nhau",
      id: "Aku Hanya Melihatmu, Waktu Berkualitas"
    },
    shortDescription: {
      ko: "\"딴짓하지 말고 나한테만 집중해 줘\"",
      en: "\"Don't get distracted, just focus on me\"",
      ja: "「他のことをしないで、私だけに集中して」",
      'zh-CN': "\"不要分心，只专注于我\"",
      'zh-TW': "「不要分心，只專注於我」",
      vi: "\"Đừng làm việc khác, chỉ tập trung vào mình thôi\"",
      id: "\"Jangan teralihkan, fokus saja padaku\""
    },
    description: {
      ko: "당신은 연인과 온전히 함께하는 시간을 가장 중요하게 생각합니다. 단순히 같은 공간에 있는 것이 아니라, TV나 스마트폰을 끄고 서로의 눈을 바라보며 대화하는 '집중의 시간'이 필요합니다. 데이트 중 딴짓을 하거나 약속을 미루는 것은 금물입니다.",
      en: "You value quality time with your partner most of all. It's not just being in the same space, but turning off the TV or phone and having 'focused time' where you look into each other's eyes and talk. Doing other things during dates or postponing promises is a no-no.",
      ja: "あなたは恋人と完全に一緒に過ごす時間を最も大切に考えます。単に同じ空間にいるのではなく、テレビやスマートフォンを消してお互いの目を見て会話する「集中の時間」が必要です。デート中に他のことをしたり約束を延期するのは禁物です。",
      'zh-CN': "你最重视与恋人完全在一起的时间。不仅仅是待在同一个空间，而是关掉电视或手机，彼此对视并交谈的'专注时光'。约会时分心或推迟承诺是绝对不行的。",
      'zh-TW': "你最重視與戀人完全在一起的時間。不僅僅是待在同一個空間，而是關掉電視或手機，彼此對視並交談的「專注時光」。約會時分心或推遲承諾是絕對不行的。",
      vi: "Bạn coi trọng nhất là thời gian hoàn toàn bên nhau với người yêu. Không chỉ đơn giản là ở cùng không gian, mà cần 'thời gian tập trung' khi tắt TV hay điện thoại, nhìn vào mắt nhau và trò chuyện. Làm việc khác trong buổi hẹn hò hoặc hoãn hẹn là không được phép.",
      id: "Anda paling menghargai waktu berkualitas dengan pasangan. Bukan sekadar berada di ruang yang sama, tetapi mematikan TV atau ponsel dan memiliki 'waktu fokus' di mana Anda saling menatap mata dan berbicara. Melakukan hal lain saat kencan atau menunda janji adalah pantangan."
    },
    keywords: {
      ko: "대화, 경청, 아이컨택, 추억",
      en: "Conversation, Listening, Eye Contact, Memories",
      ja: "会話、傾聴、アイコンタクト、思い出",
      'zh-CN': "对话，倾听，眼神交流，回忆",
      'zh-TW': "對話，傾聽，眼神交流，回憶",
      vi: "Trò chuyện, Lắng nghe, Giao tiếp bằng mắt, Kỷ niệm",
      id: "Percakapan, Mendengarkan, Kontak Mata, Kenangan"
    },
    tip: {
      ko: "취미를 공유할 수 있는 친구 같은 연인이 좋아요.",
      en: "A friend-like partner who can share hobbies is good.",
      ja: "趣味を共有できる友達のような恋人がいいですね。",
      'zh-CN': "能分享爱好的像朋友一样的恋人很好。",
      'zh-TW': "能分享愛好的像朋友一樣的戀人很好。",
      vi: "Người yêu như bạn bè có thể chia sẻ sở thích sẽ rất tốt.",
      id: "Pasangan seperti teman yang bisa berbagi hobi adalah baik."
    },
    goodMatch: {
      ko: "Type 1 (인정하는 말)",
      en: "Type 1 (Words of Affirmation)",
      ja: "Type 1 (承認の言葉)",
      'zh-CN': "Type 1 (肯定的言辞)",
      'zh-TW': "Type 1 (肯定的言辭)",
      vi: "Type 1 (Lời xác nhận)",
      id: "Type 1 (Kata-kata Afirmasi)"
    },
    badMatch: {
      ko: "Type 3 (선물 - 돈으로 때우려는 것 같음)",
      en: "Type 3 (Gifts - Seems like trying to make up with money)",
      ja: "Type 3 (贈り物 - お金でごまかそうとしているよう)",
      'zh-CN': "Type 3 (礼物 - 似乎想用金钱弥补)",
      'zh-TW': "Type 3 (禮物 - 似乎想用金錢彌補)",
      vi: "Type 3 (Quà tặng - Có vẻ như dùng tiền để bù đắp)",
      id: "Type 3 (Hadiah - Sepertinya mencoba menutupi dengan uang)"
    }
  },
  {
    type: "Type3",
    emoji: "🎁",
    title: {
      ko: "서프라이즈 수집가, 선물",
      en: "Surprise Collector, Gifts",
      ja: "サプライズ収集家、贈り物",
      'zh-CN': "惊喜收集者，礼物",
      'zh-TW': "驚喜收集者，禮物",
      vi: "Người sưu tập bất ngờ, Quà tặng",
      id: "Kolektor Kejutan, Hadiah"
    },
    shortDescription: {
      ko: "\"물건이 아니라, 나를 생각한 그 마음이야\"",
      en: "\"It's not the thing, but the thought of me\"",
      ja: "「物ではなく、私を思ってくれたその気持ち」",
      'zh-CN': "\"不是东西，而是想着我的心意\"",
      'zh-TW': "「不是東西，而是想著我的心意」",
      vi: "\"Không phải món đồ, mà là tấm lòng nghĩ về mình\"",
      id: "\"Bukan benda itu, tetapi pikiran tentang saya\""
    },
    description: {
      ko: "당신은 속물이라서가 아니라, 선물을 준비하며 나를 생각했을 그 정성에 감동합니다. 비싼 명품이 아니더라도 길 가다 주운 예쁜 돌맹이 하나라도 당신에게는 사랑의 증표입니다. 기념일을 잊거나 성의 없는 선물은 당신을 서운하게 합니다.",
      en: "You're not materialistic, but moved by the sincerity of thinking about me while preparing a gift. Even a pretty stone picked up on the street, not an expensive luxury item, is a token of love to you. Forgetting anniversaries or insincere gifts makes you feel hurt.",
      ja: "あなたは物質主義者だからではなく、贈り物を準備しながら私のことを考えてくれたその真心に感動します。高価なブランド品ではなくても、道で拾ったきれいな石一つでもあなたには愛の証です。記念日を忘れたり誠意のない贈り物はあなたを寂しくさせます。",
      'zh-CN': "你不是物质主义者，而是被准备礼物时想着我的那份真心所感动。即使不是昂贵的奢侈品，只是在路边捡到的一颗漂亮石头，对你来说也是爱的象征。忘记纪念日或没有诚意的礼物会让你感到伤心。",
      'zh-TW': "你不是物質主義者，而是被準備禮物時想著我的那份真心所感動。即使不是昂貴的奢侈品，只是在路邊撿到的一顆漂亮石頭，對你來說也是愛的象徵。忘記紀念日或沒有誠意的禮物會讓你感到傷心。",
      vi: "Bạn không phải người vật chất, mà cảm động bởi sự chân thành khi nghĩ về mình khi chuẩn bị quà. Dù chỉ là một viên đá đẹp nhặt trên đường, không phải món đồ xa xỉ đắt tiền, cũng là biểu tượng tình yêu đối với bạn. Quên ngày kỷ niệm hay quà tặng thiếu chân thành sẽ làm bạn buồn.",
      id: "Anda bukan materialistis, tetapi tersentuh oleh ketulusan memikirkan saya saat menyiapkan hadiah. Bahkan batu cantik yang diambil di jalan, bukan barang mewah mahal, adalah tanda cinta bagi Anda. Melupakan hari jadi atau hadiah yang tidak tulus membuat Anda merasa terluka."
    },
    keywords: {
      ko: "정성, 기념일, 서프라이즈, 상징",
      en: "Sincerity, Anniversaries, Surprises, Symbols",
      ja: "真心、記念日、サプライズ、象徴",
      'zh-CN': "真心，纪念日，惊喜，象征",
      'zh-TW': "真心，紀念日，驚喜，象徵",
      vi: "Chân thành, Ngày kỷ niệm, Bất ngờ, Biểu tượng",
      id: "Ketulusan, Hari Jadi, Kejutan, Simbol"
    },
    tip: {
      ko: "센스 있고 세심한 사람을 만나면 행복해요.",
      en: "You'll be happy if you meet someone with good taste and attention to detail.",
      ja: "センスがあって細やかな人と出会えば幸せになれます。",
      'zh-CN': "遇到有品味且细心的人你会很幸福。",
      'zh-TW': "遇到有品味且細心的人你會很幸福。",
      vi: "Bạn sẽ hạnh phúc nếu gặp được người có gu và tinh tế.",
      id: "Anda akan bahagia jika bertemu seseorang dengan selera baik dan perhatian pada detail."
    },
    goodMatch: {
      ko: "Type 4 (봉사)",
      en: "Type 4 (Acts of Service)",
      ja: "Type 4 (奉仕)",
      'zh-CN': "Type 4 (服务行为)",
      'zh-TW': "Type 4 (服務行為)",
      vi: "Type 4 (Hành động phục vụ)",
      id: "Type 4 (Tindakan Pelayanan)"
    },
    badMatch: {
      ko: "Type 2 (함께하는 시간 - 빈손이면 서운함)",
      en: "Type 2 (Quality Time - Feels hurt if empty-handed)",
      ja: "Type 2 (一緒に過ごす時間 - 手ぶらだと寂しい)",
      'zh-CN': "Type 2 (共度时光 - 空手会感到伤心)",
      'zh-TW': "Type 2 (共度時光 - 空手會感到傷心)",
      vi: "Type 2 (Thời gian bên nhau - Buồn nếu đến tay không)",
      id: "Type 2 (Waktu Berkualitas - Merasa terluka jika datang tangan kosong)"
    }
  },
  {
    type: "Type4",
    emoji: "🦸‍♂️",
    title: {
      ko: "든든한 슈퍼맨, 봉사",
      en: "Reliable Superman, Acts of Service",
      ja: "頼りになるスーパーマン、奉仕",
      'zh-CN': "可靠的超人，服务行为",
      'zh-TW': "可靠的超人，服務行為",
      vi: "Siêu nhân đáng tin cậy, Hành động phục vụ",
      id: "Superman yang Dapat Diandalkan, Tindakan Pelayanan"
    },
    shortDescription: {
      ko: "\"백 번의 말보다 한 번의 행동으로 보여줘\"",
      en: "\"Show me with one action rather than a hundred words\"",
      ja: "「100回の言葉よりも1回の行動で見せて」",
      'zh-CN': "\"用一次行动胜过百句话\"",
      'zh-TW': "「用一次行動勝過百句話」",
      vi: "\"Hãy cho tôi thấy bằng một hành động thay vì một trăm lời nói\"",
      id: "\"Tunjukkan dengan satu tindakan daripada seratus kata\""
    },
    description: {
      ko: "당신은 말만 번지르르한 것보다 직접 몸으로 실천하는 것에서 사랑을 느낍니다. 내가 힘들어할 때 청소를 대신 해 주거나, 아플 때 약을 사다 주는 등 실질적인 도움이 최고의 로맨스입니다. 약속을 안 지키거나 게으른 모습은 신뢰를 떨어뜨립니다.",
      en: "You feel love more from directly practicing with actions than from smooth words. Practical help like cleaning for me when I'm struggling, or buying medicine when I'm sick, is the best romance. Not keeping promises or being lazy lowers trust.",
      ja: "あなたは言葉だけが上手いものよりも直接体で実践することに愛を感じます。私が辛い時に掃除を代わりにしてくれたり、病気の時に薬を買ってくれたりするなど実質的な助けが最高のロマンスです。約束を守らなかったり怠けた姿は信頼を下げます。",
      'zh-CN': "比起花言巧语，你更从直接用行动实践的事中感受爱。当你困难时替我打扫，生病时买药等实际帮助是最好的浪漫。不守承诺或懒惰的样子会降低信任。",
      'zh-TW': "比起花言巧語，你更從直接用行動實踐的事中感受愛。當你困難時替我打掃，生病時買藥等實際幫助是最好的浪漫。不守承諾或懶惰的樣子會降低信任。",
      vi: "Bạn cảm nhận tình yêu từ việc trực tiếp thực hành bằng hành động hơn là những lời nói suông. Sự giúp đỡ thực tế như dọn dẹp thay mình khi mình khó khăn, hay mua thuốc khi mình ốm, là lãng mạn tuyệt vời nhất. Không giữ lời hứa hoặc lười biếng sẽ làm giảm lòng tin.",
      id: "Anda merasakan cinta lebih dari praktik langsung dengan tindakan daripada kata-kata halus. Bantuan praktis seperti membersihkan untuk saya saat saya kesulitan, atau membeli obat saat saya sakit, adalah romansa terbaik. Tidak menepati janji atau malas menurunkan kepercayaan."
    },
    keywords: {
      ko: "배려, 도움, 헌신, 행동파",
      en: "Consideration, Help, Devotion, Action-oriented",
      ja: "気遣い、助け、献身、行動派",
      'zh-CN': "体贴，帮助，奉献，行动派",
      'zh-TW': "體貼，幫助，奉獻，行動派",
      vi: "Quan tâm, Giúp đỡ, Tận tụy, Người hành động",
      id: "Pertimbangan, Bantuan, Pengabdian, Berorientasi Tindakan"
    },
    tip: {
      ko: "듬직하고 책임감 강한 사람이 어울려요.",
      en: "Someone reliable and responsible suits you well.",
      ja: "頼りになる責任感の強い人が似合います。",
      'zh-CN': "可靠且有责任感的人很适合你。",
      'zh-TW': "可靠且有責任感的人很適合你。",
      vi: "Người đáng tin cậy và có trách nhiệm sẽ rất phù hợp.",
      id: "Seseorang yang dapat diandalkan dan bertanggung jawab cocok untuk Anda."
    },
    goodMatch: {
      ko: "Type 3 (선물)",
      en: "Type 3 (Gifts)",
      ja: "Type 3 (贈り物)",
      'zh-CN': "Type 3 (礼物)",
      'zh-TW': "Type 3 (禮物)",
      vi: "Type 3 (Quà tặng)",
      id: "Type 3 (Hadiah)"
    },
    badMatch: {
      ko: "Type 1 (인정하는 말 - 말만 하고 안 도와줌)",
      en: "Type 1 (Words of Affirmation - Only talks, doesn't help)",
      ja: "Type 1 (承認の言葉 - 言葉だけで助けてくれない)",
      'zh-CN': "Type 1 (肯定的言辞 - 只说不动)",
      'zh-TW': "Type 1 (肯定的言辭 - 只說不動)",
      vi: "Type 1 (Lời xác nhận - Chỉ nói mà không giúp)",
      id: "Type 1 (Kata-kata Afirmasi - Hanya bicara, tidak membantu)"
    }
  },
  {
    type: "Type5",
    emoji: "💋",
    title: {
      ko: "껌딱지 스킨십, 신체적 접촉",
      en: "Velcro Skinship, Physical Touch",
      ja: "ベタベタスキンシップ、身体的接触",
      'zh-CN': "黏人的身体接触，肢体接触",
      'zh-TW': "黏人的身體接觸，肢體接觸",
      vi: "Gắn bó qua tiếp xúc, Tiếp xúc thể chất",
      id: "Skinship Lengket, Sentuhan Fisik"
    },
    shortDescription: {
      ko: "\"손잡고 안아줄 때 살아있음을 느껴\"",
      en: "\"I feel alive when holding hands and hugging\"",
      ja: "「手を握って抱きしめてくれる時に生きていると感じる」",
      'zh-CN': "\"牵手拥抱时我感受到活着\"",
      'zh-TW': "「牽手擁抱時我感受到活著」",
      vi: "\"Tôi cảm thấy sống khi được nắm tay và ôm\"",
      id: "\"Saya merasa hidup saat berpegangan tangan dan memeluk\""
    },
    description: {
      ko: "당신은 연인과의 스킨십을 통해 심리적 안정감을 얻습니다. 거창한 이벤트보다 손잡기, 포옹, 머리 쓰다듬기 같은 일상적인 접촉이 당신의 사랑 탱크를 채워줍니다. 스킨십을 거부하거나 몸이 멀어지면 마음도 멀어졌다고 생각하기 쉽습니다.",
      en: "You gain psychological stability through physical touch with your partner. Everyday contact like holding hands, hugging, stroking hair fills your love tank more than grand events. If they reject physical touch or the body gets distant, you easily think the heart has grown distant too.",
      ja: "あなたは恋人とのスキンシップを通じて心理的な安定感を得ます。大掛かりなイベントよりも手を握ること、抱擁、頭を撫でることのような日常的な接触があなたの愛のタンクを満たします。スキンシップを拒否されたり体が離れると心も離れたと考えやすくなります。",
      'zh-CN': "你通过与恋人的身体接触获得心理安全感。握手、拥抱、抚摸头发等日常接触比盛大的活动更能填满你的爱箱。如果拒绝身体接触或身体远离，你容易认为心也远离了。",
      'zh-TW': "你通過與戀人的身體接觸獲得心理安全感。握手、擁抱、撫摸頭髮等日常接觸比盛大的活動更能填滿你的愛箱。如果拒絕身體接觸或身體遠離，你容易認為心也遠離了。",
      vi: "Bạn có được sự ổn định tâm lý thông qua tiếp xúc thể chất với người yêu. Những tiếp xúc hàng ngày như nắm tay, ôm, vuốt tóc lấp đầy bể yêu thương của bạn hơn những sự kiện lớn. Nếu họ từ chối tiếp xúc hoặc cơ thể xa cách, bạn dễ nghĩ rằng trái tim cũng đã xa cách.",
      id: "Anda mendapatkan stabilitas psikologis melalui sentuhan fisik dengan pasangan. Kontak sehari-hari seperti berpegangan tangan, memeluk, membelai rambut mengisi tangki cinta Anda lebih dari acara besar. Jika mereka menolak sentuhan fisik atau tubuh menjauh, Anda mudah berpikir hati juga sudah menjauh."
    },
    keywords: {
      ko: "포옹, 손잡기, 온기, 안정감",
      en: "Hugs, Holding Hands, Warmth, Stability",
      ja: "抱擁、手を握ること、温かさ、安定感",
      'zh-CN': "拥抱，握手，温暖，安全感",
      'zh-TW': "擁抱，握手，溫暖，安全感",
      vi: "Ôm, Nắm tay, Ấm áp, Ổn định",
      id: "Pelukan, Berpegangan Tangan, Kehangatan, Stabilitas"
    },
    tip: {
      ko: "애교 많고 스킨십을 좋아하는 댕댕이 같은 사람!",
      en: "Someone like a cute dog who loves affection and physical touch!",
      ja: "愛嬌が多くてスキンシップが好きなワンちゃんみたいな人！",
      'zh-CN': "像可爱小狗一样喜欢撒娇和身体接触的人！",
      'zh-TW': "像可愛小狗一樣喜歡撒嬌和身體接觸的人！",
      vi: "Người giống như chó con dễ thương thích làm nũng và tiếp xúc thể chất!",
      id: "Seseorang seperti anjing lucu yang suka kasih sayang dan sentuhan fisik!"
    },
    goodMatch: {
      ko: "Type 5 (신체적 접촉)",
      en: "Type 5 (Physical Touch)",
      ja: "Type 5 (身体的接触)",
      'zh-CN': "Type 5 (肢体接触)",
      'zh-TW': "Type 5 (肢體接觸)",
      vi: "Type 5 (Tiếp xúc thể chất)",
      id: "Type 5 (Sentuhan Fisik)"
    },
    badMatch: {
      ko: "Type 2 (함께하는 시간 - 떨어져서 대화만 함)",
      en: "Type 2 (Quality Time - Only talking from a distance)",
      ja: "Type 2 (一緒に過ごす時間 - 離れて会話だけ)",
      'zh-CN': "Type 2 (共度时光 - 只是远距离聊天)",
      'zh-TW': "Type 2 (共度時光 - 只是遠距離聊天)",
      vi: "Type 2 (Thời gian bên nhau - Chỉ nói chuyện từ xa)",
      id: "Type 2 (Waktu Berkualitas - Hanya berbicara dari kejauhan)"
    }
  }
];

export function calculateLoveLanguageResult(answers: string[]): string {
  const typeScores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0
  };

  // Q1~Q11 처리
  for (let i = 0; i < 11; i++) {
    const answer = answers[i];
    if (answer && typeScores.hasOwnProperty(answer)) {
      typeScores[answer]++;
    }
  }

  // Q12 특별 처리
  const q12Answer = answers[11];
  if (q12Answer === "SPECIAL_A") {
    // Type 3, 4 중 더 높은 쪽에 +1점
    if (typeScores.Type3 >= typeScores.Type4) {
      typeScores.Type3++;
    } else {
      typeScores.Type4++;
    }
  } else if (q12Answer === "SPECIAL_B") {
    // Type 2, 5 중 더 높은 쪽에 +1점
    if (typeScores.Type2 >= typeScores.Type5) {
      typeScores.Type2++;
    } else {
      typeScores.Type5++;
    }
  }

  // 최고 점수 찾기
  const maxScore = Math.max(...Object.values(typeScores));
  const tiedTypes = Object.keys(typeScores).filter(type => typeScores[type] === maxScore);

  // 동점일 경우 우선순위: Type 2 > Type 1 > Type 5 > Type 4 > Type 3
  if (tiedTypes.length === 1) {
    return tiedTypes[0];
  }

  const priority = ['Type2', 'Type1', 'Type5', 'Type4', 'Type3'];
  for (const type of priority) {
    if (tiedTypes.includes(type)) {
      return type;
    }
  }

  return 'Type1'; // Fallback
}

