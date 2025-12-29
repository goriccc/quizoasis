export interface Phase2HomebodyLevelQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2HomebodyLevelResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  homebodyLevel: Record<string, string>; // "Lv. 1", "Lv. 10" 등
  habitat: Record<string, string>; // 주요 서식지
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2HomebodyLevelQuestions: Phase2HomebodyLevelQuestion[] = [
  {
    id: 1,
    question: {
      ko: "당신이 생각하는 '외출'의 기준은?",
      en: "What is your standard for 'going out'?",
      ja: "あなたが考える「外出」の基準は？",
      'zh-CN': "你认为'外出'的标准是什么？",
      'zh-TW': "你認為「外出」的標準是什麼？",
      vi: "Tiêu chuẩn của bạn về 'đi ra ngoài' là gì?",
      id: "Apa standar Anda untuk 'keluar'?"
    },
    options: [
      {
        text: {
          ko: "현관문을 나서는 순간부터 외출이다",
          en: "Going out starts the moment I step out the front door",
          ja: "玄関を出る瞬間から外出だ",
          'zh-CN': "从踏出前门的那一刻起就是外出",
          'zh-TW': "從踏出前門的那一刻起就是外出",
          vi: "Đi ra ngoài bắt đầu từ khoảnh khắc bước ra khỏi cửa trước",
          id: "Keluar dimulai saat saya melangkah keluar pintu depan"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "집 앞 편의점이나 쓰레기 버리러 가는 건 외출이 아니다",
          en: "Going to the convenience store in front of home or taking out trash is not going out",
          ja: "家の前のコンビニやゴミを捨てに行くのは外出ではない",
          'zh-CN': "去家门口的便利店或扔垃圾不算外出",
          'zh-TW': "去家門口的便利店或扔垃圾不算外出",
          vi: "Đi đến cửa hàng tiện lợi trước nhà hoặc đổ rác không phải là đi ra ngoài",
          id: "Pergi ke minimarket di depan rumah atau membuang sampah bukan keluar"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "씻고 옷을 갖춰 입고 동네를 벗어나야 외출이다",
          en: "Going out means washing up, getting dressed, and leaving the neighborhood",
          ja: "洗って服を着て、近所を出ないと外出だ",
          'zh-CN': "外出是指洗漱、穿好衣服并离开社区",
          'zh-TW': "外出是指洗漱、穿好衣服並離開社區",
          vi: "Đi ra ngoài có nghĩa là tắm rửa, mặc quần áo và rời khỏi khu phố",
          id: "Keluar berarti mandi, berpakaian, dan meninggalkan lingkungan"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "친구를 만나거나 약속 장소에 가야 진짜 외출이다",
          en: "Real going out means meeting friends or going to an appointment location",
          ja: "友達に会ったり約束の場所に行かないと本当の外出だ",
          'zh-CN': "真正的外出是指见朋友或去约定地点",
          'zh-TW': "真正的外出是指見朋友或去約定地點",
          vi: "Đi ra ngoài thật sự có nghĩa là gặp bạn bè hoặc đi đến địa điểm hẹn",
          id: "Keluar yang sebenarnya berarti bertemu teman atau pergi ke lokasi janji"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "금요일 저녁, 친구가 \"지금 나와!\"라고 한다면?",
      en: "Friday evening, if a friend says \"Come out now!\"?",
      ja: "金曜日の夜、友達が「今出てきて！」と言ったら？",
      'zh-CN': "周五晚上，如果朋友说\"现在出来！\"？",
      'zh-TW': "週五晚上，如果朋友說「現在出來！」？",
      vi: "Tối thứ Sáu, nếu bạn bè nói \"Ra ngoài ngay!\"?",
      id: "Jumat malam, jika teman mengatakan \"Keluarlah sekarang!\"?"
    },
    options: [
      {
        text: {
          ko: "\"어디로 가면 돼?\" 바로 튀어 나간다",
          en: "\"Where should I go?\" Immediately rush out",
          ja: "「どこに行けばいい？」すぐに飛び出す",
          'zh-CN': "\"去哪里？\"立即冲出去",
          'zh-TW': "「去哪裡？」立即衝出去",
          vi: "\"Đi đâu?\" Ngay lập tức lao ra ngoài",
          id: "\"Ke mana?\" Langsung keluar"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"누구누구 있어?\" 멤버를 보고 결정한다",
          en: "\"Who's there?\" Decide based on who's coming",
          ja: "「誰がいるの？」メンバーを見て決める",
          'zh-CN': "\"都有谁？\"根据成员决定",
          'zh-TW': "「都有誰？」根據成員決定",
          vi: "\"Ai sẽ đến?\" Quyết định dựa trên thành viên",
          id: "\"Siapa yang ada?\" Putuskan berdasarkan siapa yang datang"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"아 나 지금 집이라...\" 씻기 귀찮아서 거절한다",
          en: "\"Oh I'm at home right now...\" Refuse because washing up is bothersome",
          ja: "「あ、今家にいるから...」洗うのが面倒で断る",
          'zh-CN': "\"哦我现在在家...\"因为懒得洗漱而拒绝",
          'zh-TW': "「哦我現在在家...」因為懶得洗漱而拒絕",
          vi: "\"Ồ mình đang ở nhà...\" Từ chối vì lười tắm rửa",
          id: "\"Oh saya di rumah sekarang...\" Menolak karena malas mandi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "(읽씹) 이미 폰을 무음으로 해놓고 넷플릭스 보는 중이다",
          en: "(Read but no reply) Already set phone to silent and watching Netflix",
          ja: "（既読スルー）もう電話をサイレントにしてNetflixを見ている",
          'zh-CN': "（已读不回）已经把手机调成静音在看Netflix",
          'zh-TW': "（已讀不回）已經把手機調成靜音在看Netflix",
          vi: "(Đã đọc nhưng không trả lời) Đã tắt tiếng điện thoại và đang xem Netflix",
          id: "(Dibaca tapi tidak dibalas) Sudah setel ponsel ke mode senyap dan menonton Netflix"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "집에서 보낼 수 있는 최대 기간은? (식량 충분 시)",
      en: "What's the maximum period you can spend at home? (With sufficient food)",
      ja: "家で過ごせる最大期間は？（食料が十分な場合）",
      'zh-CN': "你能在家待的最长时间是？（食物充足时）",
      'zh-TW': "你能在家待的最長時間是？（食物充足時）",
      vi: "Khoảng thời gian tối đa bạn có thể ở nhà là bao lâu? (Khi có đủ thức ăn)",
      id: "Berapa lama maksimal Anda bisa menghabiskan waktu di rumah? (Dengan makanan yang cukup)"
    },
    options: [
      {
        text: {
          ko: "하루도 힘들다. 반나절만 있어도 몸이 근질거린다",
          en: "Even one day is hard. My body gets restless after just half a day",
          ja: "1日も大変だ。半日だけでも体がむずむずする",
          'zh-CN': "一天都很难。只待半天身体就开始躁动",
          'zh-TW': "一天都很難。只待半天身體就開始躁動",
          vi: "Ngay cả một ngày cũng khó. Chỉ nửa ngày thôi là người đã bồn chồn",
          id: "Bahkan satu hari pun sulit. Tubuh sudah gelisah setelah hanya setengah hari"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "주말 이틀 정도는 거뜬하다",
          en: "A weekend (two days) is easy",
          ja: "週末2日くらいは余裕だ",
          'zh-CN': "周末两天很轻松",
          'zh-TW': "週末兩天很輕鬆",
          vi: "Một cuối tuần (hai ngày) thì dễ dàng",
          id: "Akhir pekan (dua hari) mudah"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "일주일 정도는 나가지 않아도 행복하다",
          en: "I'm happy staying in for about a week",
          ja: "1週間くらいは出かけなくても幸せだ",
          'zh-CN': "大约一周不出门也很开心",
          'zh-TW': "大約一週不出門也很開心",
          vi: "Khoảng một tuần không ra ngoài cũng hạnh phúc",
          id: "Saya bahagia tinggal di rumah selama sekitar seminggu"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "한 달 이상, 아니 평생도 가능하다",
          en: "A month or more, or even a lifetime is possible",
          ja: "1ヶ月以上、いや一生も可能だ",
          'zh-CN': "一个月以上，甚至一辈子都可以",
          'zh-TW': "一個月以上，甚至一輩子都可以",
          vi: "Một tháng trở lên, thậm chí cả đời cũng có thể",
          id: "Sebulan atau lebih, atau bahkan seumur hidup pun mungkin"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "약속이 취소되었다는 연락을 받았을 때?",
      en: "When you receive a call that an appointment was cancelled?",
      ja: "約束がキャンセルされたという連絡を受けたとき？",
      'zh-CN': "当你收到约会取消的通知时？",
      'zh-TW': "當你收到約會取消的通知時？",
      vi: "Khi bạn nhận được thông báo rằng cuộc hẹn đã bị hủy?",
      id: "Ketika Anda menerima panggilan bahwa janji dibatalkan?"
    },
    options: [
      {
        text: {
          ko: "\"아... 준비 다 했는데.\" 아쉬워서 다른 친구를 부른다",
          en: "\"Oh... I was all ready.\" Call another friend because I'm disappointed",
          ja: "「あ...準備全部したのに。」残念で他の友達を呼ぶ",
          'zh-CN': "\"哦...我都准备好了。\"因为失望而叫另一个朋友",
          'zh-TW': "「哦...我都準備好了。」因為失望而叫另一個朋友",
          vi: "\"Ồ... Mình đã chuẩn bị hết rồi.\" Gọi bạn khác vì thất vọng",
          id: "\"Oh... Saya sudah siap semua.\" Memanggil teman lain karena kecewa"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"어쩔 수 없지.\" 옷을 갈아입고 쉰다",
          en: "\"Nothing I can do.\" Change clothes and rest",
          ja: "「仕方ないね。」服を着替えて休む",
          'zh-CN': "\"没办法。\"换衣服休息",
          'zh-TW': "「沒辦法。」換衣服休息",
          vi: "\"Không thể làm gì được.\" Thay quần áo và nghỉ ngơi",
          id: "\"Tidak ada yang bisa dilakukan.\" Ganti baju dan istirahat"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"오예! 나이스!\" 겉으론 아쉬운 척하지만 속으론 축제다",
          en: "\"Oh yeah! Nice!\" Pretend to be disappointed on the outside but inside it's a festival",
          ja: "「やった！ナイス！」表では残念そうにするが心の中はお祭りだ",
          'zh-CN': "\"太好了！\"表面假装失望但内心在庆祝",
          'zh-TW': "「太好了！」表面假裝失望但內心在慶祝",
          vi: "\"Ồ yeah! Tuyệt!\" Bề ngoài giả vờ thất vọng nhưng bên trong là lễ hội",
          id: "\"Oh yeah! Bagus!\" Pura-pura kecewa di luar tapi di dalam seperti pesta"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "애초에 약속을 잘 안 잡아서 취소될 일도 별로 없다",
          en: "I don't make appointments much in the first place, so there's rarely anything to cancel",
          ja: "元々約束をあまりしないのでキャンセルされることもあまりない",
          'zh-CN': "本来就不怎么约，所以很少有什么需要取消的",
          'zh-TW': "本來就不怎麼約，所以很少有什麼需要取消的",
          vi: "Từ đầu đã không hay hẹn hò nên cũng ít khi có gì để hủy",
          id: "Dari awal tidak banyak membuat janji, jadi jarang ada yang perlu dibatalkan"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "당신의 집 안 패션(홈웨어)은?",
      en: "What is your home fashion (homewear)?",
      ja: "あなたの家の中のファッション（ホームウェア）は？",
      'zh-CN': "你在家的穿着（家居服）是？",
      'zh-TW': "你在家的穿著（家居服）是？",
      vi: "Thời trang ở nhà (đồ mặc nhà) của bạn là gì?",
      id: "Apa fashion rumah Anda (homewear)?"
    },
    options: [
      {
        text: {
          ko: "언제든 나갈 수 있는 청바지나 외출복 차림",
          en: "Jeans or going-out clothes that I can wear anytime",
          ja: "いつでも出かけられるジーンズや外出着",
          'zh-CN': "随时可以外出的牛仔裤或外出服",
          'zh-TW': "隨時可以外出的牛仔褲或外出服",
          vi: "Quần jean hoặc quần áo đi chơi có thể mặc bất cứ lúc nào",
          id: "Jeans atau pakaian keluar yang bisa dipakai kapan saja"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "편안한 트레이닝복 세트",
          en: "Comfortable tracksuit set",
          ja: "快適なトレーニングウェアセット",
          'zh-CN': "舒适的运动服套装",
          'zh-TW': "舒適的運動服套裝",
          vi: "Bộ đồ thể thao thoải mái",
          id: "Setelan tracksuit yang nyaman"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "목 늘어난 티셔츠와 무릎 나온 수면 바지",
          en: "Stretched-out T-shirt and sleep pants with holes in the knees",
          ja: "首が伸びたTシャツと膝が出たパジャマ",
          'zh-CN': "领口松垮的T恤和膝盖破洞的睡裤",
          'zh-TW': "領口鬆垮的T恤和膝蓋破洞的睡褲",
          vi: "Áo phông bị giãn cổ và quần ngủ rách đầu gối",
          id: "Kaos yang longgar di leher dan celana tidur yang bolong di lutut"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "팬티 바람 혹은 자연인 그 자체",
          en: "Just underwear or completely natural",
          ja: "パンツ一丁か自然体そのもの",
          'zh-CN': "只穿内裤或完全自然状态",
          'zh-TW': "只穿內褲或完全自然狀態",
          vi: "Chỉ mặc đồ lót hoặc hoàn toàn tự nhiên",
          id: "Hanya celana dalam atau benar-benar alami"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "집에 있는데 택배 기사님이 벨을 눌렀다.",
      en: "You're at home and the delivery driver rings the bell.",
      ja: "家にいるのに配達員がベルを押した。",
      'zh-CN': "你在家，快递员按了门铃。",
      'zh-TW': "你在家，快遞員按了門鈴。",
      vi: "Bạn đang ở nhà và người giao hàng bấm chuông.",
      id: "Anda di rumah dan kurir menekan bel."
    },
    options: [
      {
        text: {
          ko: "\"감사합니다!\" 문을 활짝 열고 직접 받는다",
          en: "\"Thank you!\" Open the door wide and receive it directly",
          ja: "「ありがとうございます！」ドアを大きく開けて直接受け取る",
          'zh-CN': "\"谢谢！\"打开门直接接收",
          'zh-TW': "「謝謝！」打開門直接接收",
          vi: "\"Cảm ơn!\" Mở cửa rộng và nhận trực tiếp",
          id: "\"Terima kasih!\" Buka pintu lebar-lebar dan terima langsung"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"문 앞에 놔주세요~\" 인터폰으로 대답한다",
          en: "\"Please leave it at the door~\" Answer via intercom",
          ja: "「ドアの前に置いてください〜」インターホンで答える",
          'zh-CN': "\"请放在门口~\"通过对讲机回答",
          'zh-TW': "「請放在門口〜」通過對講機回答",
          vi: "\"Để trước cửa nhé~\" Trả lời qua chuông cửa",
          id: "\"Tolong letakkan di depan pintu~\" Jawab melalui interkom"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "없는 척하고 가실 때까지 숨죽이고 기다린다",
          en: "Pretend I'm not home and wait quietly until they leave",
          ja: "いないふりをして行くまで息を殺して待つ",
          'zh-CN': "假装不在家，屏住呼吸等到他们离开",
          'zh-TW': "假裝不在家，屏住呼吸等到他們離開",
          vi: "Giả vờ không có nhà và im lặng chờ đến khi họ đi",
          id: "Pura-pura tidak ada di rumah dan menunggu dengan diam sampai mereka pergi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "비대면 배송 요청 사항에 '벨 누르지 말고 노크해주세요'라고 적어둠",
          en: "Already wrote in contactless delivery instructions 'Please don't ring bell, just knock'",
          ja: "非対面配送の要望に「ベルを押さずにノックしてください」と書いておく",
          'zh-CN': "在无接触配送要求中已经写了'请不要按门铃，请敲门'",
          'zh-TW': "在無接觸配送要求中已經寫了「請不要按門鈴，請敲門」",
          vi: "Đã ghi trong yêu cầu giao hàng không tiếp xúc 'Đừng bấm chuông, chỉ cần gõ cửa'",
          id: "Sudah menulis di instruksi pengiriman tanpa kontak 'Tolong jangan tekan bel, cukup ketuk saja'"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "날씨가 엄청나게 좋은 주말 아침, 당신은?",
      en: "A weekend morning with incredibly good weather, what do you do?",
      ja: "天気がすごく良い週末の朝、あなたは？",
      'zh-CN': "天气非常好的周末早晨，你会？",
      'zh-TW': "天氣非常好的週末早晨，你會？",
      vi: "Sáng cuối tuần với thời tiết cực kỳ đẹp, bạn sẽ làm gì?",
      id: "Pagi akhir pekan dengan cuaca yang sangat bagus, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "\"이런 날 집에 있으면 유죄!\" 당장 피크닉 갈 준비를 한다",
          en: "\"It's a crime to stay home on a day like this!\" Immediately prepare to go on a picnic",
          ja: "「こんな日に家にいるのは罪だ！」すぐにピクニックに行く準備をする",
          'zh-CN': "\"这样的天气待在家是犯罪！\"立即准备去野餐",
          'zh-TW': "「這樣的天氣待在家是犯罪！」立即準備去野餐",
          vi: "\"Ở nhà vào ngày như này là tội lỗi!\" Ngay lập tức chuẩn bị đi dã ngoại",
          id: "\"Adalah kejahatan tinggal di rumah di hari seperti ini!\" Langsung bersiap untuk piknik"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "창문을 열고 환기하며 집에서 날씨를 즐긴다",
          en: "Open the window, ventilate, and enjoy the weather from home",
          ja: "窓を開けて換気しながら家で天気を楽しむ",
          'zh-CN': "打开窗户通风，在家享受好天气",
          'zh-TW': "打開窗戶通風，在家享受好天氣",
          vi: "Mở cửa sổ, thông gió và tận hưởng thời tiết từ nhà",
          id: "Buka jendela, ventilasi, dan nikmati cuaca dari rumah"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "암막 커튼을 치고 햇빛을 차단하며 늦잠을 잔다",
          en: "Close the blackout curtains, block the sunlight, and sleep in",
          ja: "遮光カーテンを閉めて日光を遮りながら遅くまで寝る",
          'zh-CN': "拉上遮光窗帘，挡住阳光，睡懒觉",
          'zh-TW': "拉上遮光窗簾，擋住陽光，睡懶覺",
          vi: "Kéo rèm chống nắng, chặn ánh sáng và ngủ nướng",
          id: "Tutup tirai gelap, blokir sinar matahari, dan tidur sampai siang"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "날씨가 좋은지 안 좋은지 모른다. (창문 안 봄)",
          en: "Don't know if the weather is good or bad. (Don't look out the window)",
          ja: "天気が良いか悪いかわからない。（窓を見ない）",
          'zh-CN': "不知道天气好不好。（不看窗外）",
          'zh-TW': "不知道天氣好不好。（不看窗外）",
          vi: "Không biết thời tiết tốt hay xấu. (Không nhìn ra cửa sổ)",
          id: "Tidak tahu cuaca bagus atau tidak. (Tidak melihat ke luar jendela)"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신의 핸드폰 충전 상태는?",
      en: "What is your phone charging status?",
      ja: "あなたの携帯電話の充電状態は？",
      'zh-CN': "你的手机充电状态是？",
      'zh-TW': "你的手機充電狀態是？",
      vi: "Tình trạng sạc điện thoại của bạn là gì?",
      id: "Bagaimana status pengisian ponsel Anda?"
    },
    options: [
      {
        text: {
          ko: "밖에서 활동하느라 배터리가 자주 부족하다",
          en: "Battery often runs low because I'm active outside",
          ja: "外で活動するのでバッテリーがよく不足する",
          'zh-CN': "因为经常在外面活动，电池经常不足",
          'zh-TW': "因為經常在外面活動，電池經常不足",
          vi: "Pin thường xuyên hết vì hoạt động bên ngoài",
          id: "Baterai sering habis karena aktif di luar"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "자기 전에 충전기에 꽂아두는 편이다",
          en: "Usually plug it into the charger before sleeping",
          ja: "寝る前に充電器に差し込んでおく",
          'zh-CN': "通常在睡觉前插上充电器",
          'zh-TW': "通常在睡覺前插上充電器",
          vi: "Thường cắm vào sạc trước khi ngủ",
          id: "Biasanya colokkan ke charger sebelum tidur"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "침대 머리맡, 소파 옆 등 손 닿는 곳마다 충전기가 있다",
          en: "Chargers everywhere I can reach: bedside, next to sofa, etc.",
          ja: "ベッドの横、ソファの横など手の届くところに充電器がある",
          'zh-CN': "床头、沙发旁等手能碰到的地方都有充电器",
          'zh-TW': "床頭、沙發旁等手能碰到的地方都有充電器",
          vi: "Sạc ở mọi nơi tay với được: đầu giường, cạnh sofa, v.v.",
          id: "Charger di mana-mana yang bisa dijangkau: di samping tempat tidur, di samping sofa, dll"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "항상 충전기에 꽂혀 있어서 배터리가 100% 밑으로 떨어질 일이 없다",
          en: "Always plugged in, so battery never drops below 100%",
          ja: "常に充電器に差し込まれているのでバッテリーが100%を下回ることはない",
          'zh-CN': "一直插着充电器，所以电池永远不会低于100%",
          'zh-TW': "一直插著充電器，所以電池永遠不會低於100%",
          vi: "Luôn cắm sạc nên pin không bao giờ xuống dưới 100%",
          id: "Selalu terpasang, jadi baterai tidak pernah turun di bawah 100%"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "집에서 밥을 먹을 때 주로 어떻게 해결하나?",
      en: "How do you usually handle meals at home?",
      ja: "家でご飯を食べるとき、主にどう解決しますか？",
      'zh-CN': "你在家吃饭时通常怎么解决？",
      'zh-TW': "你在家吃飯時通常怎麼解決？",
      vi: "Bạn thường giải quyết bữa ăn ở nhà như thế nào?",
      id: "Bagaimana Anda biasanya menangani makan di rumah?"
    },
    options: [
      {
        text: {
          ko: "친구를 불러서 같이 해 먹거나 시켜 먹는다",
          en: "Call friends to eat together or order food",
          ja: "友達を呼んで一緒に食べたり注文したりする",
          'zh-CN': "叫朋友一起吃或点外卖",
          'zh-TW': "叫朋友一起吃或點外賣",
          vi: "Gọi bạn bè đến ăn cùng hoặc đặt đồ ăn",
          id: "Panggil teman untuk makan bersama atau pesan makanan"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "냉장고에 있는 반찬을 꺼내서 차려 먹는다",
          en: "Take out side dishes from the fridge and set them up",
          ja: "冷蔵庫にあるおかずを取り出して並べる",
          'zh-CN': "从冰箱拿出配菜摆好",
          'zh-TW': "從冰箱拿出配菜擺好",
          vi: "Lấy đồ ăn kèm trong tủ lạnh ra và bày biện",
          id: "Keluarkan lauk dari kulkas dan sajikan"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "배달 어플 VIP. 문 앞에 두고 가라고 한다",
          en: "Delivery app VIP. Tell them to leave it at the door",
          ja: "配達アプリVIP。ドアの前に置いて行ってと言う",
          'zh-CN': "外卖APP VIP。让他们放在门口",
          'zh-TW': "外賣APP VIP。讓他們放在門口",
          vi: "VIP app giao hàng. Bảo họ để trước cửa",
          id: "VIP aplikasi pengiriman. Minta mereka tinggalkan di depan pintu"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "밥 먹는 것도 귀찮아서 굶거나 과자로 때운다",
          en: "Too lazy to eat, so I skip meals or snack on cookies",
          ja: "ご飯を食べるのも面倒で、食べなかったりお菓子で済ませる",
          'zh-CN': "懒得吃饭，所以不吃饭或吃零食充饥",
          'zh-TW': "懶得吃飯，所以不吃飯或吃零食充飢",
          vi: "Lười ăn nên bỏ bữa hoặc ăn bánh kẹo cho qua",
          id: "Terlalu malas makan, jadi melewatkan makan atau ngemil biskuit"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신에게 '침대'란?",
      en: "What is 'bed' to you?",
      ja: "あなたにとって「ベッド」とは？",
      'zh-CN': "对你来说'床'是什么？",
      'zh-TW': "對你來說「床」是什麼？",
      vi: "'Giường' đối với bạn là gì?",
      id: "Apa 'tempat tidur' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "잠잘 때만 눕는 곳",
          en: "A place to lie down only when sleeping",
          ja: "寝るときだけ横になる場所",
          'zh-CN': "只在睡觉时躺的地方",
          'zh-TW': "只在睡覺時躺的地方",
          vi: "Nơi chỉ nằm khi ngủ",
          id: "Tempat untuk berbaring hanya saat tidur"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "자기 전 스마트폰을 잠깐 하는 곳",
          en: "A place to use smartphone briefly before sleeping",
          ja: "寝る前にスマホをちょっとする場所",
          'zh-CN': "睡觉前短暂使用手机的地方",
          'zh-TW': "睡覺前短暫使用手機的地方",
          vi: "Nơi dùng điện thoại một chút trước khi ngủ",
          id: "Tempat untuk menggunakan smartphone sebentar sebelum tidur"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "밥 먹을 때와 화장실 갈 때 빼고는 항상 누워있는 곳",
          en: "A place I'm always lying on except when eating or going to the bathroom",
          ja: "ご飯を食べるときとトイレに行くとき以外は常に横になっている場所",
          'zh-CN': "除了吃饭和上厕所时，一直躺着的地方",
          'zh-TW': "除了吃飯和上廁所時，一直躺著的地方",
          vi: "Nơi luôn nằm trừ khi ăn hoặc đi vệ sinh",
          id: "Tempat yang selalu saya berbaring kecuali saat makan atau ke kamar mandi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "나의 거주지이자 활동 반경의 전부",
          en: "My residence and entire range of activity",
          ja: "私の住居であり活動範囲の全て",
          'zh-CN': "我的住所和全部活动范围",
          'zh-TW': "我的住所和全部活動範圍",
          vi: "Nơi ở và toàn bộ phạm vi hoạt động của tôi",
          id: "Tempat tinggal saya dan seluruh jangkauan aktivitas"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "여행을 간다면 선호하는 숙소는?",
      en: "If you travel, what accommodation do you prefer?",
      ja: "旅行に行くなら、好みの宿泊施設は？",
      'zh-CN': "如果你去旅行，你偏好什么住宿？",
      'zh-TW': "如果你去旅行，你偏好什麼住宿？",
      vi: "Nếu đi du lịch, bạn thích loại chỗ ở nào?",
      id: "Jika Anda bepergian, akomodasi apa yang Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "관광지 중심에 위치해 이동이 편리한 호텔",
          en: "Hotel located in the center of tourist attractions for easy access",
          ja: "観光地の中心に位置して移動が便利なホテル",
          'zh-CN': "位于旅游景点中心、交通便利的酒店",
          'zh-TW': "位於旅遊景點中心、交通便利的酒店",
          vi: "Khách sạn ở trung tâm điểm du lịch để di chuyển dễ dàng",
          id: "Hotel yang terletak di pusat tempat wisata untuk akses mudah"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "수영장이나 바베큐장이 있는 펜션",
          en: "Pension with swimming pool or barbecue area",
          ja: "プールやバーベキュー場があるペンション",
          'zh-CN': "有游泳池或烧烤区的民宿",
          'zh-TW': "有游泳池或燒烤區的民宿",
          vi: "Nhà nghỉ có hồ bơi hoặc khu vực nướng thịt",
          id: "Pension dengan kolam renang atau area barbekyu"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "모든 게 다 갖춰져 있어서 나갈 필요 없는 풀빌라",
          en: "Full villa with everything, no need to go out",
          ja: "すべてが揃っていて出る必要のないプール付きヴィラ",
          'zh-CN': "设施齐全、不需要外出的全包别墅",
          'zh-TW': "設施齊全、不需要外出的全包別墅",
          vi: "Biệt thự đầy đủ tiện nghi, không cần ra ngoài",
          id: "Villa lengkap dengan segalanya, tidak perlu keluar"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "굳이 여행을 가야 할까? 내 방이 최고급 리조트다",
          en: "Do I really need to travel? My room is a luxury resort",
          ja: "わざわざ旅行に行く必要がある？私の部屋が最高級リゾートだ",
          'zh-CN': "真的需要去旅行吗？我的房间就是豪华度假村",
          'zh-TW': "真的需要去旅行嗎？我的房間就是豪華度假村",
          vi: "Có thực sự cần đi du lịch không? Phòng mình là resort cao cấp",
          id: "Apakah saya benar-benar perlu bepergian? Kamar saya adalah resort mewah"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 MBTI 앞자리는?",
      en: "What is your MBTI first letter?",
      ja: "あなたのMBTIの最初の文字は？",
      'zh-CN': "你的MBTI首字母是？",
      'zh-TW': "你的MBTI首字母是？",
      vi: "Chữ cái đầu tiên trong MBTI của bạn là gì?",
      id: "Apa huruf pertama MBTI Anda?"
    },
    options: [
      {
        text: {
          ko: "파워 E (외향형) - 사람 만나는 게 에너지 충전",
          en: "Power E (Extrovert) - Meeting people charges my energy",
          ja: "パワーE（外向型）- 人に会うことがエネルギー充電",
          'zh-CN': "强力E（外向型）- 见人就是充电",
          'zh-TW': "強力E（外向型）- 見人就是充電",
          vi: "E mạnh (Hướng ngoại) - Gặp người là nạp năng lượng",
          id: "Power E (Ekstrovert) - Bertemu orang mengisi energi saya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "E와 I의 중간 - 상황에 따라 다름",
          en: "Between E and I - Depends on the situation",
          ja: "EとIの中間 - 状況によって違う",
          'zh-CN': "E和I的中间 - 视情况而定",
          'zh-TW': "E和I的中間 - 視情況而定",
          vi: "Giữa E và I - Tùy tình huống",
          id: "Antara E dan I - Tergantung situasi"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "I (내향형) - 혼자 있어야 에너지 충전",
          en: "I (Introvert) - Need to be alone to charge energy",
          ja: "I（内向型）- 一人でいないとエネルギー充電",
          'zh-CN': "I（内向型）- 需要独处才能充电",
          'zh-TW': "I（內向型）- 需要獨處才能充電",
          vi: "I (Hướng nội) - Cần ở một mình để nạp năng lượng",
          id: "I (Introvert) - Perlu sendiri untuk mengisi energi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "극 I (내향형) - 사람과 눈 마주치기도 힘듦",
          en: "Extreme I (Introvert) - Even making eye contact with people is hard",
          ja: "極I（内向型）- 人と目を合わせるのも大変",
          'zh-CN': "极端I（内向型）- 连和人对视都困难",
          'zh-TW': "極端I（內向型）- 連和人对視都困難",
          vi: "I cực đoan (Hướng nội) - Ngay cả nhìn vào mắt người khác cũng khó",
          id: "Ekstrem I (Introvert) - Bahkan kontak mata dengan orang pun sulit"
        },
        score: 3 // D
      }
    ]
  }
];

export const phase2HomebodyLevelResults: Phase2HomebodyLevelResult[] = [
  {
    type: "Type1",
    emoji: "🏃",
    title: {
      ko: "역마살 낀 떠돌이, 프로 가출러",
      en: "Wanderer with Restless Feet, Pro Runaway",
      ja: "逆馬殺の放浪者、プロの家出人",
      'zh-CN': "有流浪基因的漂泊者，专业离家出走者",
      'zh-TW': "有流浪基因的漂泊者，專業離家出走者",
      vi: "Kẻ lang thang có máu giang hồ, Chuyên gia bỏ nhà",
      id: "Pengembara dengan Kaki Gelisah, Pelarian Profesional"
    },
    shortDescription: {
      ko: "\"집은 그저 짐을 보관하는 베이스캠프일 뿐\"",
      en: "\"Home is just a base camp to store luggage\"",
      ja: "「家はただ荷物を保管するベースキャンプに過ぎない」",
      'zh-CN': "\"家只是存放行李的基地营地\"",
      'zh-TW': "「家只是存放行李的基地營地」",
      vi: "\"Nhà chỉ là trại căn cứ để cất đồ đạc\"",
      id: "\"Rumah hanyalah base camp untuk menyimpan barang\""
    },
    description: {
      ko: "당신은 집에 붙어있는 시간이 거의 없는 파워 외향인입니다. 휴일에도 집에 있으면 좀이 쑤시고, 창밖을 보면 나가고 싶어 미칠 것 같습니다. '집순이' 테스트를 하고 있는 지금도 밖이거나 나갈 준비를 하고 있을 확률이 높습니다.",
      en: "You are a power extrovert who spends almost no time at home. Even on holidays, staying home makes you restless, and looking out the window makes you want to go out desperately. Even while taking this 'homebody' test, you're probably outside or preparing to go out.",
      ja: "あなたは家にいる時間がほとんどないパワー外向型です。休日でも家にいるとむずむずして、窓の外を見ると出かけたくてたまらなくなります。'家好き'テストをしている今も外にいるか、出かける準備をしている可能性が高いです。",
      'zh-CN': "你是一个几乎不在家待的强力外向者。即使在假期，待在家里也会让你坐立不安，看着窗外就忍不住想出去。即使在做这个'宅家'测试时，你可能也在外面或准备出门。",
      'zh-TW': "你是一個幾乎不在家待的強力外向者。即使在假期，待在家裡也會讓你坐立不安，看著窗外就忍不住想出去。即使在做這個「宅家」測試時，你可能也在外面或準備出門。",
      vi: "Bạn là người hướng ngoại mạnh mẽ hầu như không ở nhà. Ngay cả ngày nghỉ, ở nhà cũng khiến bạn bồn chồn, nhìn ra cửa sổ là muốn ra ngoài điên cuồng. Ngay cả khi đang làm bài test 'ở nhà' này, bạn có lẽ đang ở ngoài hoặc chuẩn bị ra ngoài.",
      id: "Anda adalah ekstrovert kuat yang hampir tidak menghabiskan waktu di rumah. Bahkan di hari libur, tinggal di rumah membuat Anda gelisah, dan melihat ke luar jendela membuat Anda ingin keluar dengan putus asa. Bahkan saat mengikuti tes 'homebody' ini, Anda mungkin sedang di luar atau bersiap untuk keluar."
    },
    homebodyLevel: {
      ko: "Lv. 1 (하수)",
      en: "Lv. 1 (Beginner)",
      ja: "Lv. 1 (初心者)",
      'zh-CN': "Lv. 1 (新手)",
      'zh-TW': "Lv. 1 (新手)",
      vi: "Lv. 1 (Người mới)",
      id: "Lv. 1 (Pemula)"
    },
    habitat: {
      ko: "핫플레이스, 카페, 친구 자취방",
      en: "Hot places, cafes, friends' places",
      ja: "ホットスポット、カフェ、友達の一人暮らし",
      'zh-CN': "热门地点、咖啡厅、朋友家",
      'zh-TW': "熱門地點、咖啡廳、朋友家",
      vi: "Điểm nóng, quán cà phê, nhà bạn bè",
      id: "Tempat populer, kafe, tempat teman"
    },
    goodMatch: {
      ko: "Type 2 (심심한 건 못 참아)",
      en: "Type 2 (Can't stand being bored)",
      ja: "Type 2 (退屈に耐えられない)",
      'zh-CN': "Type 2 (无法忍受无聊)",
      'zh-TW': "Type 2 (無法忍受無聊)",
      vi: "Type 2 (Không chịu được sự nhàm chán)",
      id: "Type 2 (Tidak tahan bosan)"
    },
    badMatch: {
      ko: "Type 6 (지박령)",
      en: "Type 6 (Housebound Spirit)",
      ja: "Type 6 (地縛霊)",
      'zh-CN': "Type 6 (地缚灵)",
      'zh-TW': "Type 6 (地縛靈)",
      vi: "Type 6 (Linh hồn bị trói buộc)",
      id: "Type 6 (Roh Terikat Rumah)"
    }
  },
  {
    type: "Type2",
    emoji: "🏠",
    title: {
      ko: "무늬만 집순이, 패션 집순이",
      en: "Fake Homebody, Fashion Homebody",
      ja: "見た目だけの家好き、ファッション家好き",
      'zh-CN': "只是表面宅，时尚宅",
      'zh-TW': "只是表面宅，時尚宅",
      vi: "Chỉ là vẻ ngoài ở nhà, Thời trang ở nhà",
      id: "Homebody Palsu, Homebody Fashion"
    },
    shortDescription: {
      ko: "\"나 집순이 맞아! (하루 이상은 못 버팀)\"",
      en: "\"I'm a homebody! (Can't last more than a day)\"",
      ja: "「私、家好きだよ！（1日以上は我慢できない）」",
      'zh-CN': "\"我确实是宅！(坚持不了一天以上)\"",
      'zh-TW': "「我確實是宅！（堅持不了一天以上）」",
      vi: "\"Mình đúng là người ở nhà! (Không thể chịu quá một ngày)\"",
      id: "\"Saya memang homebody! (Tidak bisa bertahan lebih dari sehari)\""
    },
    description: {
      ko: "당신은 스스로를 집순이라고 생각하지만, 막상 진짜 집순이들이 보기엔 활동적입니다. 집에서 쉬는 것도 좋지만, 적당히 심심해지면 친구를 부르거나 산책이라도 나가야 합니다. 집을 좋아하긴 하지만 세상과의 단절은 두려운 타입입니다.",
      en: "You think of yourself as a homebody, but real homebodies see you as active. Resting at home is nice, but when you get a bit bored, you need to call friends or at least go for a walk. You like home, but you're afraid of being cut off from the world.",
      ja: "あなたは自分を家好きだと思っていますが、本当の家好きから見ると活動的です。家で休むのもいいですが、適度に退屈になると友達を呼んだり散歩に出たりしなければなりません。家は好きですが、世界との断絶は恐ろしいタイプです。",
      'zh-CN': "你认为自己是宅，但真正的宅人看你很活跃。在家休息也不错，但稍微无聊时就需要叫朋友或至少出去走走。你喜欢家，但害怕与世界隔绝。",
      'zh-TW': "你認為自己是宅，但真正的宅人看你很活躍。在家休息也不錯，但稍微無聊時就需要叫朋友或至少出去走走。你喜歡家，但害怕與世界隔絕。",
      vi: "Bạn nghĩ mình là người ở nhà, nhưng những người ở nhà thật sự thấy bạn rất năng động. Nghỉ ở nhà cũng tốt, nhưng khi hơi chán, bạn cần gọi bạn bè hoặc ít nhất đi dạo. Bạn thích nhà, nhưng sợ bị cắt đứt khỏi thế giới.",
      id: "Anda menganggap diri Anda sebagai homebody, tetapi homebody sejati melihat Anda aktif. Beristirahat di rumah itu bagus, tetapi ketika Anda sedikit bosan, Anda perlu memanggil teman atau setidaknya berjalan-jalan. Anda suka rumah, tetapi takut terputus dari dunia."
    },
    homebodyLevel: {
      ko: "Lv. 10 (입문)",
      en: "Lv. 10 (Entry Level)",
      ja: "Lv. 10 (入門)",
      'zh-CN': "Lv. 10 (入门)",
      'zh-TW': "Lv. 10 (入門)",
      vi: "Lv. 10 (Mức nhập môn)",
      id: "Lv. 10 (Tingkat Dasar)"
    },
    habitat: {
      ko: "집 근처 편의점, 동네 카페",
      en: "Convenience store near home, neighborhood cafe",
      ja: "家の近くのコンビニ、近所のカフェ",
      'zh-CN': "家附近的便利店、社区咖啡厅",
      'zh-TW': "家附近的便利店、社區咖啡廳",
      vi: "Cửa hàng tiện lợi gần nhà, quán cà phê khu phố",
      id: "Minimarket dekat rumah, kafe lingkungan"
    },
    goodMatch: {
      ko: "Type 1 (프로 가출러)",
      en: "Type 1 (Pro Runaway)",
      ja: "Type 1 (プロの家出人)",
      'zh-CN': "Type 1 (专业离家出走者)",
      'zh-TW': "Type 1 (專業離家出走者)",
      vi: "Type 1 (Chuyên gia bỏ nhà)",
      id: "Type 1 (Pelarian Profesional)"
    },
    badMatch: {
      ko: "Type 5 (은둔형 고수)",
      en: "Type 5 (Reclusive Master)",
      ja: "Type 5 (隠遁型の達人)",
      'zh-CN': "Type 5 (隐居型高手)",
      'zh-TW': "Type 5 (隱居型高手)",
      vi: "Type 5 (Bậc thầy ẩn dật)",
      id: "Type 5 (Master Pertapa)"
    }
  },
  {
    type: "Type3",
    emoji: "🔋",
    title: {
      ko: "충전이 필요한, 선택적 집순이",
      en: "Selective Homebody Who Needs Recharging",
      ja: "充電が必要な、選択的家好き",
      'zh-CN': "需要充电的选择性宅",
      'zh-TW': "需要充電的選擇性宅",
      vi: "Người ở nhà có chọn lọc cần sạc pin",
      id: "Homebody Selektif yang Perlu Mengisi Ulang"
    },
    shortDescription: {
      ko: "\"평일엔 E, 주말엔 I로 변신\"",
      en: "\"E on weekdays, I on weekends\"",
      ja: "「平日はE、週末はIに変身」",
      'zh-CN': "\"工作日是E，周末是I\"",
      'zh-TW': "「工作日是E，週末是I」",
      vi: "\"Ngày thường là E, cuối tuần là I\"",
      id: "\"E di hari kerja, I di akhir pekan\""
    },
    description: {
      ko: "당신은 사회생활을 할 때는 활발하지만, 에너지를 다 쏟고 나면 반드시 집에서 충전해야 하는 타입입니다. 자발적으로 집에 있는다기보다는 살기 위해 집에 숨는 것에 가깝습니다. 주말 하루는 무조건 '집콕 데이'로 비워둬야 평화를 유지할 수 있습니다.",
      en: "You're active in social life, but after using all your energy, you must recharge at home. It's closer to hiding at home to survive rather than voluntarily staying home. You must keep one weekend day as a 'home day' to maintain peace.",
      ja: "あなたは社会生活をするときは活発ですが、エネルギーを使い果たしたら必ず家で充電しなければならないタイプです。自発的に家にいるというより、生きるために家に隠れているに近いです。週末の1日は必ず「家にこもる日」として空けておかないと平和を保てません。",
      'zh-CN': "你在社交生活中很活跃，但用尽所有能量后，必须在家充电。与其说是自愿待在家，不如说是为了生存而躲在家里。你必须留出一个周末作为'宅家日'来保持平静。",
      'zh-TW': "你在社交生活中很活躍，但用盡所有能量後，必須在家充電。與其說是自願待在家，不如說是為了生存而躲在家裡。你必須留出一個週末作為「宅家日」來保持平靜。",
      vi: "Bạn năng động trong cuộc sống xã hội, nhưng sau khi dùng hết năng lượng, bạn phải sạc lại ở nhà. Gần như là trốn ở nhà để sống sót hơn là tự nguyện ở nhà. Bạn phải dành một ngày cuối tuần làm 'ngày ở nhà' để giữ bình yên.",
      id: "Anda aktif dalam kehidupan sosial, tetapi setelah menggunakan semua energi, Anda harus mengisi ulang di rumah. Lebih dekat dengan bersembunyi di rumah untuk bertahan hidup daripada secara sukarela tinggal di rumah. Anda harus menyisihkan satu hari akhir pekan sebagai 'hari rumah' untuk menjaga kedamaian."
    },
    homebodyLevel: {
      ko: "Lv. 40 (중수)",
      en: "Lv. 40 (Intermediate)",
      ja: "Lv. 40 (中級)",
      'zh-CN': "Lv. 40 (中级)",
      'zh-TW': "Lv. 40 (中級)",
      vi: "Lv. 40 (Trung cấp)",
      id: "Lv. 40 (Menengah)"
    },
    habitat: {
      ko: "소파, 거실",
      en: "Sofa, living room",
      ja: "ソファ、リビング",
      'zh-CN': "沙发、客厅",
      'zh-TW': "沙發、客廳",
      vi: "Ghế sofa, phòng khách",
      id: "Sofa, ruang tamu"
    },
    goodMatch: {
      ko: "Type 4 (프로 집순이)",
      en: "Type 4 (Pro Homebody)",
      ja: "Type 4 (プロの家好き)",
      'zh-CN': "Type 4 (专业宅)",
      'zh-TW': "Type 4 (專業宅)",
      vi: "Type 4 (Chuyên gia ở nhà)",
      id: "Type 4 (Homebody Profesional)"
    },
    badMatch: {
      ko: "Type 1 (프로 가출러)",
      en: "Type 1 (Pro Runaway)",
      ja: "Type 1 (プロの家出人)",
      'zh-CN': "Type 1 (专业离家出走者)",
      'zh-TW': "Type 1 (專業離家出走者)",
      vi: "Type 1 (Chuyên gia bỏ nhà)",
      id: "Type 1 (Pelarian Profesional)"
    }
  },
  {
    type: "Type4",
    emoji: "🛌",
    title: {
      ko: "집이 제일 좋아, 프로 집순이",
      en: "Home is Best, Pro Homebody",
      ja: "家が一番好き、プロの家好き",
      'zh-CN': "家最好，专业宅",
      'zh-TW': "家最好，專業宅",
      vi: "Nhà là nhất, Chuyên gia ở nhà",
      id: "Rumah Terbaik, Homebody Profesional"
    },
    shortDescription: {
      ko: "\"약속 취소? 오히려 좋아!\"",
      en: "\"Appointment cancelled? Even better!\"",
      ja: "「約束キャンセル？むしろいい！」",
      'zh-CN': "\"约会取消？太好了！\"",
      'zh-TW': "「約會取消？太好了！」",
      vi: "\"Cuộc hẹn bị hủy? Càng tốt!\"",
      id: "\"Janji dibatalkan? Lebih baik!\""
    },
    description: {
      ko: "당신은 집에서 할 일이 너무 많아서 바쁜 사람입니다. 밀린 드라마 보기, 게임하기, 청소하기 등 집 안에서의 스케줄이 꽉 차 있습니다. 나가는 것이 귀찮을 뿐, 집 안에서는 누구보다 알차고 부지런하게 시간을 보냅니다. 진정한 집의 요정입니다.",
      en: "You're a busy person with too many things to do at home. Your schedule at home is packed: catching up on dramas, gaming, cleaning, etc. Going out is just bothersome, but at home you spend time more meaningfully and diligently than anyone. You're a true home fairy.",
      ja: "あなたは家でやることが多すぎて忙しい人です。溜まったドラマを見る、ゲームをする、掃除をするなど、家の中のスケジュールがぎっしり詰まっています。出かけるのは面倒なだけで、家の中では誰よりも充実して勤勉に時間を過ごします。真の家の妖精です。",
      'zh-CN': "你是一个在家有太多事情要做的大忙人。你在家的日程排得满满的：补看剧、玩游戏、打扫等。出门只是麻烦，但在家里你比任何人都更有意义、更勤奋地度过时间。你是真正的家之精灵。",
      'zh-TW': "你是一個在家有太多事情要做的大忙人。你在家的日程排得滿滿的：補看劇、玩遊戲、打掃等。出門只是麻煩，但在家裡你比任何人都更有意義、更勤奮地度過時間。你是真正的家之精靈。",
      vi: "Bạn là người bận rộn với quá nhiều việc phải làm ở nhà. Lịch trình ở nhà của bạn kín mít: xem phim bị dồn, chơi game, dọn dẹp, v.v. Ra ngoài chỉ là phiền phức, nhưng ở nhà bạn dùng thời gian có ý nghĩa và chăm chỉ hơn ai hết. Bạn là tiên nữ thật sự của nhà.",
      id: "Anda adalah orang sibuk dengan terlalu banyak hal yang harus dilakukan di rumah. Jadwal Anda di rumah penuh: mengejar drama, bermain game, membersihkan, dll. Keluar hanya merepotkan, tetapi di rumah Anda menghabiskan waktu lebih bermakna dan rajin daripada siapa pun. Anda adalah peri rumah yang sejati."
    },
    homebodyLevel: {
      ko: "Lv. 70 (고수)",
      en: "Lv. 70 (Expert)",
      ja: "Lv. 70 (上級)",
      'zh-CN': "Lv. 70 (高手)",
      'zh-TW': "Lv. 70 (高手)",
      vi: "Lv. 70 (Chuyên gia)",
      id: "Lv. 70 (Ahli)"
    },
    habitat: {
      ko: "침대 위 (등받이 쿠션 필수)",
      en: "On the bed (backrest cushion essential)",
      ja: "ベッドの上（背もたれクッション必須）",
      'zh-CN': "床上（靠背垫必备）",
      'zh-TW': "床上（靠背墊必備）",
      vi: "Trên giường (gối tựa lưng bắt buộc)",
      id: "Di atas tempat tidur (bantal sandaran wajib)"
    },
    goodMatch: {
      ko: "Type 3 (선택적 집순이)",
      en: "Type 3 (Selective Homebody)",
      ja: "Type 3 (選択的家好き)",
      'zh-CN': "Type 3 (选择性宅)",
      'zh-TW': "Type 3 (選擇性宅)",
      vi: "Type 3 (Người ở nhà có chọn lọc)",
      id: "Type 3 (Homebody Selektif)"
    },
    badMatch: {
      ko: "Type 2 (패션 집순이)",
      en: "Type 2 (Fashion Homebody)",
      ja: "Type 2 (ファッション家好き)",
      'zh-CN': "Type 2 (时尚宅)",
      'zh-TW': "Type 2 (時尚宅)",
      vi: "Type 2 (Thời trang ở nhà)",
      id: "Type 2 (Homebody Fashion)"
    }
  },
  {
    type: "Type5",
    emoji: "🧘",
    title: {
      ko: "사회적 거리두기 장인, 은둔형 고수",
      en: "Social Distancing Master, Reclusive Expert",
      ja: "社会的距離の達人、隠遁型の上級者",
      'zh-CN': "社交距离大师，隐居型高手",
      'zh-TW': "社交距離大師，隱居型高手",
      vi: "Bậc thầy giãn cách xã hội, Chuyên gia ẩn dật",
      id: "Master Jarak Sosial, Ahli Pertapa"
    },
    shortDescription: {
      ko: "\"무인도에 떨어져도 집만 있으면 산다\"",
      en: "\"Even if stranded on a desert island, I can survive with just a house\"",
      ja: "「無人島に流されても家さえあれば生きられる」",
      'zh-CN': "\"即使流落荒岛，只要有房子就能活\"",
      'zh-TW': "「即使流落荒島，只要有房子就能活」",
      vi: "\"Dù bị mắc kẹt trên đảo hoang, chỉ cần có nhà là sống được\"",
      id: "\"Bahkan jika terdampar di pulau terpencil, saya bisa bertahan hidup hanya dengan rumah\""
    },
    description: {
      ko: "당신은 혼자 노는 법을 완벽하게 터득했습니다. 타인과의 불필요한 접촉을 꺼리며, 비대면 라이프를 즐깁니다. 배달 음식, OTT 서비스, 인터넷 쇼핑만 있다면 평생 집 밖으로 나가지 않아도 행복할 수 있습니다.",
      en: "You've perfectly mastered the art of being alone. You avoid unnecessary contact with others and enjoy a contactless life. With just food delivery, OTT services, and online shopping, you can be happy without ever leaving home.",
      ja: "あなたは一人で遊ぶ方法を完璧に習得しました。他人との不必要な接触を避け、非対面ライフを楽しみます。配達料理、OTTサービス、インターネットショッピングさえあれば、一生家の外に出なくても幸せになれます。",
      'zh-CN': "你完美掌握了独处的艺术。你避免与他人不必要的接触，享受无接触生活。只要有外卖、OTT服务和网购，你可以一辈子不出门也很快乐。",
      'zh-TW': "你完美掌握了獨處的藝術。你避免與他人不必要的接觸，享受無接觸生活。只要有外賣、OTT服務和網購，你可以一輩子不出門也很快樂。",
      vi: "Bạn đã hoàn toàn nắm vững nghệ thuật ở một mình. Bạn tránh tiếp xúc không cần thiết với người khác và tận hưởng cuộc sống không tiếp xúc. Chỉ cần giao đồ ăn, dịch vụ OTT và mua sắm trực tuyến, bạn có thể hạnh phúc mà không bao giờ rời khỏi nhà.",
      id: "Anda telah menguasai seni sendirian dengan sempurna. Anda menghindari kontak yang tidak perlu dengan orang lain dan menikmati kehidupan tanpa kontak. Hanya dengan pengiriman makanan, layanan OTT, dan belanja online, Anda bisa bahagia tanpa pernah meninggalkan rumah."
    },
    homebodyLevel: {
      ko: "Lv. 90 (만렙)",
      en: "Lv. 90 (Max Level)",
      ja: "Lv. 90 (最大レベル)",
      'zh-CN': "Lv. 90 (满级)",
      'zh-TW': "Lv. 90 (滿級)",
      vi: "Lv. 90 (Cấp tối đa)",
      id: "Lv. 90 (Level Maksimal)"
    },
    habitat: {
      ko: "컴퓨터 책상, 암막 커튼 뒤",
      en: "Computer desk, behind blackout curtains",
      ja: "コンピューター机、遮光カーテンの後ろ",
      'zh-CN': "电脑桌、遮光窗帘后",
      'zh-TW': "電腦桌、遮光窗簾後",
      vi: "Bàn máy tính, sau rèm chống nắng",
      id: "Meja komputer, di balik tirai gelap"
    },
    goodMatch: {
      ko: "Type 6 (지박령)",
      en: "Type 6 (Housebound Spirit)",
      ja: "Type 6 (地縛霊)",
      'zh-CN': "Type 6 (地缚灵)",
      'zh-TW': "Type 6 (地縛靈)",
      vi: "Type 6 (Linh hồn bị trói buộc)",
      id: "Type 6 (Roh Terikat Rumah)"
    },
    badMatch: {
      ko: "Type 2 (패션 집순이)",
      en: "Type 2 (Fashion Homebody)",
      ja: "Type 2 (ファッション家好き)",
      'zh-CN': "Type 2 (时尚宅)",
      'zh-TW': "Type 2 (時尚宅)",
      vi: "Type 2 (Thời trang ở nhà)",
      id: "Type 2 (Homebody Fashion)"
    }
  },
  {
    type: "Type6",
    emoji: "👻",
    title: {
      ko: "집 그 자체, 지박령 (Spirit)",
      en: "Home Itself, Housebound Spirit",
      ja: "家そのもの、地縛霊",
      'zh-CN': "家本身，地缚灵",
      'zh-TW': "家本身，地縛靈",
      vi: "Chính ngôi nhà, Linh hồn bị trói buộc",
      id: "Rumah Itu Sendiri, Roh Terikat Rumah"
    },
    shortDescription: {
      ko: "\"나는 이미 집과 물아일체의 경지다\"",
      en: "\"I have already reached the state of oneness with home\"",
      ja: "「私はすでに家と一体化の境地だ」",
      'zh-CN': "\"我已经达到与家合一的境界\"",
      'zh-TW': "「我已經達到與家合一的境界」",
      vi: "\"Tôi đã đạt đến cảnh giới hòa làm một với nhà\"",
      id: "\"Saya sudah mencapai keadaan kesatuan dengan rumah\""
    },
    description: {
      ko: "당신은 인간의 형상을 하고 있지만 사실상 가구의 일부입니다. 한 자리에 눕거나 앉으면 화장실 갈 때 빼고는 움직이지 않습니다. 집 밖으로 나가는 것은 엄청난 모험이며, 현관문을 여는 것조차 큰 결심이 필요합니다. 집주인보다 집에 더 오래 붙어있는 존재입니다.",
      en: "You have a human form but are essentially part of the furniture. Once you lie down or sit in one place, you don't move except to go to the bathroom. Going outside is a huge adventure, and even opening the front door requires great determination. You're a being that sticks to the house longer than the homeowner.",
      ja: "あなたは人間の形をしていますが、実際には家具の一部です。一箇所に横になったり座ったりすると、トイレに行くとき以外は動きません。家の外に出ることは大きな冒険であり、玄関のドアを開けることさえ大きな決意が必要です。家主よりも家に長くくっついている存在です。",
      'zh-CN': "你有人类的形态，但实际上是家具的一部分。一旦你躺下或坐在一个地方，除了上厕所外就不会动。出门是巨大的冒险，甚至打开前门都需要很大的决心。你是比房主更长久地粘在家里的存在。",
      'zh-TW': "你有人類的形態，但實際上是家具的一部分。一旦你躺下或坐在一個地方，除了上廁所外就不會動。出門是巨大的冒險，甚至打開前門都需要很大的決心。你是比房主更長久地粘在家裡的存在。",
      vi: "Bạn có hình dáng con người nhưng thực chất là một phần của đồ nội thất. Một khi bạn nằm hoặc ngồi ở một chỗ, bạn không di chuyển trừ khi đi vệ sinh. Ra ngoài là một cuộc phiêu lưu lớn, và ngay cả việc mở cửa trước cũng cần quyết tâm lớn. Bạn là sinh vật bám vào nhà lâu hơn cả chủ nhà.",
      id: "Anda memiliki bentuk manusia tetapi pada dasarnya adalah bagian dari furnitur. Begitu Anda berbaring atau duduk di satu tempat, Anda tidak bergerak kecuali untuk pergi ke kamar mandi. Keluar adalah petualangan besar, dan bahkan membuka pintu depan membutuhkan tekad besar. Anda adalah makhluk yang menempel di rumah lebih lama dari pemilik rumah."
    },
    homebodyLevel: {
      ko: "Lv. 99+ (초월)",
      en: "Lv. 99+ (Transcendent)",
      ja: "Lv. 99+ (超越)",
      'zh-CN': "Lv. 99+ (超越)",
      'zh-TW': "Lv. 99+ (超越)",
      vi: "Lv. 99+ (Siêu việt)",
      id: "Lv. 99+ (Transenden)"
    },
    habitat: {
      ko: "이불 속 (동면 중)",
      en: "Inside the blanket (hibernating)",
      ja: "布団の中（冬眠中）",
      'zh-CN': "被子里（冬眠中）",
      'zh-TW': "被子裡（冬眠中）",
      vi: "Trong chăn (đang ngủ đông)",
      id: "Di dalam selimut (hibernasi)"
    },
    goodMatch: {
      ko: "Type 5 (은둔형 고수)",
      en: "Type 5 (Reclusive Expert)",
      ja: "Type 5 (隠遁型の上級者)",
      'zh-CN': "Type 5 (隐居型高手)",
      'zh-TW': "Type 5 (隱居型高手)",
      vi: "Type 5 (Chuyên gia ẩn dật)",
      id: "Type 5 (Ahli Pertapa)"
    },
    badMatch: {
      ko: "Type 1 (프로 가출러)",
      en: "Type 1 (Pro Runaway)",
      ja: "Type 1 (プロの家出人)",
      'zh-CN': "Type 1 (专业离家出走者)",
      'zh-TW': "Type 1 (專業離家出走者)",
      vi: "Type 1 (Chuyên gia bỏ nhà)",
      id: "Type 1 (Pelarian Profesional)"
    }
  }
];

export function calculatePhase2HomebodyLevelResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore >= 0 && totalScore <= 5) {
    return "Type1";
  } else if (totalScore >= 6 && totalScore <= 11) {
    return "Type2";
  } else if (totalScore >= 12 && totalScore <= 19) {
    return "Type3";
  } else if (totalScore >= 20 && totalScore <= 27) {
    return "Type4";
  } else if (totalScore >= 28 && totalScore <= 33) {
    return "Type5";
  } else if (totalScore >= 34 && totalScore <= 36) {
    return "Type6";
  } else {
    return "Type1"; // Fallback
  }
}
