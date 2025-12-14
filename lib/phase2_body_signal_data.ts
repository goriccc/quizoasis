export interface Phase2BodySignalQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지 (빈 배열이면 0점)
  }[];
}

export interface Phase2BodySignalResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  symptoms: Record<string, string>; // 주요 증상
  prescription: Record<string, string>; // 내 몸 맞춤 처방
  recommendation: Record<string, string>; // 추천 설명
}

export const phase2BodySignalQuestions: Phase2BodySignalQuestion[] = [
  {
    id: 1,
    question: {
      ko: "아침에 알람 소리를 들었을 때 당신의 반응은?",
      en: "When you hear the alarm in the morning, what's your reaction?",
      ja: "朝、アラームの音を聞いた時、あなたの反応は？",
      "zh-CN": "早上听到闹钟时，你的反应是什么？",
      "zh-TW": "早上聽到鬧鐘時，你的反應是什麼？",
      vi: "Khi nghe tiếng chuông báo thức vào buổi sáng, phản ứng của bạn là gì?",
      id: "Ketika Anda mendengar alarm di pagi hari, apa reaksi Anda?"
    },
    options: [
      {
        text: {
          ko: "벌떡! 오늘도 상쾌하게 기상!",
          en: "Jump up! Wake up refreshed today too!",
          ja: "バッと！今日も爽やかに起床！",
          "zh-CN": "一跃而起！今天也清爽地起床！",
          "zh-TW": "一躍而起！今天也清爽地起床！",
          vi: "Nhảy dậy! Hôm nay cũng thức dậy sảng khoái!",
          id: "Langsung bangun! Bangun segar hari ini juga!"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "5분만... 10분만... 스누즈 버튼과 사투 중",
          en: "Just 5 more minutes... 10 more minutes... Fighting with the snooze button",
          ja: "あと5分...あと10分...スヌーズボタンとの格闘中",
          "zh-CN": "再5分钟...再10分钟...与贪睡按钮搏斗中",
          "zh-TW": "再5分鐘...再10分鐘...與貪睡按鈕搏鬥中",
          vi: "Chỉ 5 phút nữa thôi... 10 phút nữa... Đang chiến đấu với nút báo lại",
          id: "Hanya 5 menit lagi... 10 menit lagi... Berjuang dengan tombol snooze"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "몸이 천근만근, 누가 나를 침대에 묶어놨나?",
          en: "Body feels like lead, who tied me to the bed?",
          ja: "体が重くて、誰が私をベッドに縛り付けたの？",
          "zh-CN": "身体沉重如铅，谁把我绑在床上了？",
          "zh-TW": "身體沉重如鉛，誰把我綁在床上了？",
          vi: "Cơ thể nặng như chì, ai đã trói tôi vào giường?",
          id: "Tubuh terasa berat seperti timah, siapa yang mengikat saya ke tempat tidur?"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "점심 식사 후, 오후 2~3시쯤 내 상태는?",
      en: "After lunch, around 2-3 PM, how do you feel?",
      ja: "昼食後、午後2〜3時頃のあなたの状態は？",
      "zh-CN": "午饭后，下午2-3点左右，你的状态如何？",
      "zh-TW": "午飯後，下午2-3點左右，你的狀態如何？",
      vi: "Sau bữa trưa, khoảng 2-3 giờ chiều, tình trạng của bạn như thế nào?",
      id: "Setelah makan siang, sekitar jam 2-3 sore, bagaimana kondisi Anda?"
    },
    options: [
      {
        text: {
          ko: "식곤증? 그게 뭐죠? 집중력 최고조",
          en: "Food coma? What's that? Peak concentration",
          ja: "食後の眠気？それ何？集中力が最高潮",
          "zh-CN": "饭后困倦？那是什么？注意力达到巅峰",
          "zh-TW": "飯後睏倦？那是什麼？注意力達到巔峰",
          vi: "Buồn ngủ sau bữa ăn? Cái gì vậy? Tập trung ở mức cao nhất",
          id: "Mengantuk setelah makan? Apa itu? Konsentrasi puncak"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "미친 듯이 졸리고 하품이 계속 나온다",
          en: "Crazy sleepy and yawning constantly",
          ja: "異常に眠くてあくびが止まらない",
          "zh-CN": "异常困倦，不停地打哈欠",
          "zh-TW": "異常睏倦，不停地打哈欠",
          vi: "Buồn ngủ đến mức điên cuồng và ngáp liên tục",
          id: "Sangat mengantuk dan terus menguap"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "속이 더부룩하고 가스가 찬 느낌이다",
          en: "Feeling bloated and full of gas",
          ja: "お腹が重くてガスが溜まっている感じ",
          "zh-CN": "感觉腹胀，有胀气",
          "zh-TW": "感覺腹脹，有脹氣",
          vi: "Cảm giác bụng khó chịu và đầy hơi",
          id: "Perut terasa penuh dan berisi gas"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "요즘 거울을 볼 때 가장 신경 쓰이는 부분은?",
      en: "When you look in the mirror lately, what concerns you most?",
      ja: "最近鏡を見る時、最も気になる部分は？",
      "zh-CN": "最近照镜子时，你最在意哪个部分？",
      "zh-TW": "最近照鏡子時，你最在意哪個部分？",
      vi: "Khi nhìn vào gương gần đây, phần nào khiến bạn quan tâm nhất?",
      id: "Ketika bercermin belakangan ini, bagian apa yang paling Anda perhatikan?"
    },
    options: [
      {
        text: {
          ko: "딱히? 난 오늘도 상태 좋음",
          en: "Not really? I'm in good shape today too",
          ja: "特に？今日も調子がいい",
          "zh-CN": "没什么特别？我今天状态也很好",
          "zh-TW": "沒什麼特別？我今天狀態也很好",
          vi: "Không có gì đặc biệt? Hôm nay tôi vẫn ổn",
          id: "Tidak ada? Kondisi saya baik hari ini juga"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "푸석푸석한 피부와 입안 혓바늘",
          en: "Dry, flaky skin and canker sores in the mouth",
          ja: "カサカサの肌と口内の口内炎",
          "zh-CN": "干燥脱皮的皮肤和口腔溃疡",
          "zh-TW": "乾燥脫皮的皮膚和口腔潰瘍",
          vi: "Da khô bong tróc và lở miệng",
          id: "Kulit kering bersisik dan sariawan di mulut"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "퀭한 눈 밑 다크서클과 눈 떨림",
          en: "Hollow dark circles under eyes and eye twitching",
          ja: "目の下のくまと目の痙攣",
          "zh-CN": "眼下的黑眼圈和眼皮跳动",
          "zh-TW": "眼下的黑眼圈和眼皮跳動",
          vi: "Quầng thâm mắt rỗng và mắt giật",
          id: "Kantung mata gelap dan mata berkedut"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "퇴근 후 스마트폰을 볼 때 내 눈 상태는?",
      en: "When you look at your smartphone after work, how are your eyes?",
      ja: "退勤後スマートフォンを見る時、あなたの目の状態は？",
      "zh-CN": "下班后看手机时，你的眼睛状态如何？",
      "zh-TW": "下班後看手機時，你的眼睛狀態如何？",
      vi: "Khi xem điện thoại sau giờ làm việc, tình trạng mắt của bạn như thế nào?",
      id: "Ketika melihat smartphone setelah pulang kerja, bagaimana kondisi mata Anda?"
    },
    options: [
      {
        text: {
          ko: "멀쩡함! 밤새 유튜브 정주행 가능",
          en: "Fine! Can binge-watch YouTube all night",
          ja: "問題なし！夜通しYouTube見放題",
          "zh-CN": "没问题！可以整夜刷YouTube",
          "zh-TW": "沒問題！可以整夜刷YouTube",
          vi: "Ổn! Có thể xem YouTube cả đêm",
          id: "Baik-baik saja! Bisa maraton YouTube sepanjang malam"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "눈이 뻑뻑하고 건조해서 인공눈물 필수",
          en: "Eyes are dry and stiff, eye drops are essential",
          ja: "目が乾燥していて、目薬が必須",
          "zh-CN": "眼睛干涩僵硬，必须滴眼药水",
          "zh-TW": "眼睛乾澀僵硬，必須滴眼藥水",
          vi: "Mắt khô và cứng, thuốc nhỏ mắt là cần thiết",
          id: "Mata kering dan kaku, tetes mata sangat diperlukan"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "초점이 잘 안 맞고 침침한 느낌",
          en: "Focus is off and feels blurry",
          ja: "焦点が合わずぼやけた感じ",
          "zh-CN": "对焦不准，感觉模糊",
          "zh-TW": "對焦不準，感覺模糊",
          vi: "Không tập trung tốt và cảm giác mờ mờ",
          id: "Fokus tidak pas dan terasa kabur"
        },
        types: ["Type2"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "평소 야외 활동(햇빛 쐬기)은 얼마나 하나요?",
      en: "How often do you do outdoor activities (sun exposure)?",
      ja: "普段の屋外活動（日光浴）はどのくらいしますか？",
      "zh-CN": "你平时户外活动（晒太阳）的频率如何？",
      "zh-TW": "你平時戶外活動（曬太陽）的頻率如何？",
      vi: "Bạn có bao nhiêu hoạt động ngoài trời (phơi nắng)?",
      id: "Seberapa sering Anda melakukan aktivitas di luar ruangan (berjemur)?"
    },
    options: [
      {
        text: {
          ko: "매일 점심시간마다 산책함",
          en: "Take a walk every lunch break",
          ja: "毎日昼休みに散歩する",
          "zh-CN": "每个午休时间都散步",
          "zh-TW": "每個午休時間都散步",
          vi: "Đi dạo mỗi giờ nghỉ trưa",
          id: "Jalan-jalan setiap jam istirahat makan siang"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "출퇴근길 잠깐? 거의 실내에만 있음",
          en: "Briefly during commute? Mostly indoors",
          ja: "通勤中少し？ほとんど室内にいる",
          "zh-CN": "通勤路上一点点？几乎都在室内",
          "zh-TW": "通勤路上一點點？幾乎都在室內",
          vi: "Một chút trên đường đi làm? Hầu hết ở trong nhà",
          id: "Sesaat saat pergi kerja? Hampir selalu di dalam ruangan"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "햇빛이 뭐죠? 저는 흡혈귀입니다",
          en: "What's sunlight? I'm a vampire",
          ja: "日光って何？私は吸血鬼です",
          "zh-CN": "阳光是什么？我是吸血鬼",
          "zh-TW": "陽光是什麼？我是吸血鬼",
          vi: "Ánh nắng mặt trời là gì? Tôi là ma cà rồng",
          id: "Apa itu sinar matahari? Saya adalah vampir"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "최근 화장실 가는 건 어떤가요?",
      en: "How has going to the bathroom been lately?",
      ja: "最近トイレに行くのはどうですか？",
      "zh-CN": "最近上厕所的情况如何？",
      "zh-TW": "最近上廁所的情況如何？",
      vi: "Việc đi vệ sinh gần đây như thế nào?",
      id: "Bagaimana kondisi ke toilet belakangan ini?"
    },
    options: [
      {
        text: {
          ko: "1일 1황금변. 아주 쾌적함",
          en: "One perfect poop a day. Very comfortable",
          ja: "1日1回の黄金うんち。とても快適",
          "zh-CN": "一天一次完美的大便。非常舒适",
          "zh-TW": "一天一次完美的大便。非常舒適",
          vi: "Một lần đại tiện hoàn hảo mỗi ngày. Rất thoải mái",
          id: "Satu buang air besar sempurna sehari. Sangat nyaman"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "가고 싶어도 못 감... 토끼똥 모드",
          en: "Want to go but can't... Rabbit poop mode",
          ja: "行きたいけど行けない...ウサギのうんちモード",
          "zh-CN": "想去但去不了...兔子屎模式",
          "zh-TW": "想去但去不了...兔子屎模式",
          vi: "Muốn đi nhưng không đi được... Chế độ phân thỏ",
          id: "Mau pergi tapi tidak bisa... Mode kotoran kelinci"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "툭하면 배가 아프고 설사를 자주 함",
          en: "Frequently get stomach aches and diarrhea",
          ja: "よくお腹が痛くなり下痢をよくする",
          "zh-CN": "经常肚子疼和腹泻",
          "zh-TW": "經常肚子疼和腹瀉",
          vi: "Thường xuyên đau bụng và tiêu chảy",
          id: "Sering sakit perut dan diare"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "자려고 누웠을 때 잠드는 데 걸리는 시간은?",
      en: "When you lie down to sleep, how long does it take to fall asleep?",
      ja: "寝ようと横になった時、眠りにつくまでにかかる時間は？",
      "zh-CN": "当你躺下睡觉时，需要多长时间才能入睡？",
      "zh-TW": "當你躺下睡覺時，需要多長時間才能入睡？",
      vi: "Khi bạn nằm xuống để ngủ, bạn mất bao lâu để ngủ?",
      id: "Ketika Anda berbaring untuk tidur, berapa lama waktu yang dibutuhkan untuk tertidur?"
    },
    options: [
      {
        text: {
          ko: "머리 대면 3초 컷. 기절",
          en: "3 seconds after head hits pillow. Out cold",
          ja: "頭をつけたら3秒でカット。気絶",
          "zh-CN": "头一沾枕头3秒就睡。直接昏倒",
          "zh-TW": "頭一沾枕頭3秒就睡。直接昏倒",
          vi: "Đặt đầu xuống 3 giây là ngủ. Ngất xỉu",
          id: "3 detik setelah kepala menyentuh bantal. Langsung tertidur"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "잡생각 때문에 30분 이상 뒤척임",
          en: "Toss and turn for 30+ minutes due to random thoughts",
          ja: "雑念のため30分以上もがく",
          "zh-CN": "因为胡思乱想而辗转反侧30分钟以上",
          "zh-TW": "因為胡思亂想而輾轉反側30分鐘以上",
          vi: "Trằn trọc hơn 30 phút vì những suy nghĩ lung tung",
          id: "Berguling-guling lebih dari 30 menit karena pikiran acak"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "몸은 피곤한데 정신은 말똥말똥함",
          en: "Body is tired but mind is wide awake",
          ja: "体は疲れているのに頭は冴えている",
          "zh-CN": "身体很累但精神很清醒",
          "zh-TW": "身體很累但精神很清醒",
          vi: "Cơ thể mệt nhưng tinh thần tỉnh táo",
          id: "Tubuh lelah tapi pikiran terjaga"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "평소 술(알코올)을 얼마나 자주 마시나요?",
      en: "How often do you usually drink alcohol?",
      ja: "普段お酒（アルコール）はどのくらい頻繁に飲みますか？",
      "zh-CN": "你平时多久喝一次酒（酒精）？",
      "zh-TW": "你平時多久喝一次酒（酒精）？",
      vi: "Bạn thường uống rượu (rượu cồn) bao lâu một lần?",
      id: "Seberapa sering Anda biasanya minum alkohol?"
    },
    options: [
      {
        text: {
          ko: "거의 안 마심. 회식 때만 한 잔?",
          en: "Hardly drink. Just one glass at company dinners?",
          ja: "ほとんど飲まない。会社の食事会で一杯だけ？",
          "zh-CN": "几乎不喝。只在聚餐时喝一杯？",
          "zh-TW": "幾乎不喝。只在聚餐時喝一杯？",
          vi: "Hầu như không uống. Chỉ một ly khi đi ăn công ty?",
          id: "Hampir tidak minum. Hanya segelas saat makan malam perusahaan?"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "일주일에 2~3번 정도 즐기는 편",
          en: "Enjoy it about 2-3 times a week",
          ja: "週に2〜3回程度楽しむ",
          "zh-CN": "大约每周享受2-3次",
          "zh-TW": "大約每週享受2-3次",
          vi: "Thưởng thức khoảng 2-3 lần một tuần",
          id: "Menikmatinya sekitar 2-3 kali seminggu"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "인생의 동반자. 없으면 잠이 안 옴",
          en: "Life companion. Can't sleep without it",
          ja: "人生の相棒。ないと眠れない",
          "zh-CN": "人生的伴侣。没有它就睡不着",
          "zh-TW": "人生的伴侶。沒有它就睡不著",
          vi: "Người bạn đồng hành của cuộc đời. Không có thì không ngủ được",
          id: "Sahabat hidup. Tidak bisa tidur tanpanya"
        },
        types: ["Type1"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "평소 식습관은 어떤 편인가요?",
      en: "What are your usual eating habits like?",
      ja: "普段の食習慣はどんな感じですか？",
      "zh-CN": "你平时的饮食习惯如何？",
      "zh-TW": "你平時的飲食習慣如何？",
      vi: "Thói quen ăn uống thông thường của bạn như thế nào?",
      id: "Bagaimana kebiasaan makan Anda biasanya?"
    },
    options: [
      {
        text: {
          ko: "골고루 잘 챙겨 먹는 편이다",
          en: "Eat a well-balanced diet",
          ja: "バランスよく食べる方だ",
          "zh-CN": "饮食均衡",
          "zh-TW": "飲食均衡",
          vi: "Ăn uống cân bằng tốt",
          id: "Makan dengan seimbang"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "빵, 면, 인스턴트 위주로 대충 때운다",
          en: "Mainly bread, noodles, and instant foods",
          ja: "パン、麺、インスタント食品中心で適当に済ませる",
          "zh-CN": "主要以面包、面条、方便食品为主，随便应付",
          "zh-TW": "主要以麵包、麵條、方便食品為主，隨便應付",
          vi: "Chủ yếu là bánh mì, mì, và thực phẩm ăn liền",
          id: "Terutama roti, mie, dan makanan instan"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "고기 위주! 채소는 거의 안 먹는다",
          en: "Meat focused! Rarely eat vegetables",
          ja: "肉中心！野菜はほとんど食べない",
          "zh-CN": "以肉类为主！几乎不吃蔬菜",
          "zh-TW": "以肉類為主！幾乎不吃蔬菜",
          vi: "Tập trung vào thịt! Hầu như không ăn rau",
          id: "Fokus daging! Hampir tidak makan sayuran"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "환절기나 겨울철, 감기에 얼마나 자주 걸리나요?",
      en: "During seasonal changes or winter, how often do you get colds?",
      ja: "季節の変わり目や冬に、どのくらい頻繁に風邪を引きますか？",
      "zh-CN": "在换季或冬天，你多久感冒一次？",
      "zh-TW": "在換季或冬天，你多久感冒一次？",
      vi: "Vào mùa chuyển mùa hoặc mùa đông, bạn bị cảm lạnh bao lâu một lần?",
      id: "Selama perubahan musim atau musim dingin, seberapa sering Anda terkena flu?"
    },
    options: [
      {
        text: {
          ko: "감기? 그게 뭐죠? 튼튼함",
          en: "Cold? What's that? Strong immunity",
          ja: "風邪？それ何？強靭",
          "zh-CN": "感冒？那是什么？身体强壮",
          "zh-TW": "感冒？那是什麼？身體強壯",
          vi: "Cảm lạnh? Đó là gì? Khỏe mạnh",
          id: "Flu? Apa itu? Kuat"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "일 년에 한두 번 정도 걸린다",
          en: "Get it about once or twice a year",
          ja: "年に1〜2回程度引く",
          "zh-CN": "一年大约得1-2次",
          "zh-TW": "一年大約得1-2次",
          vi: "Bị khoảng một hoặc hai lần một năm",
          id: "Terkena sekitar sekali atau dua kali setahun"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "유행하는 감기는 무조건 다 걸린다",
          en: "Catch every cold that's going around",
          ja: "流行している風邪には必ずかかる",
          "zh-CN": "流行的感冒一定会得",
          "zh-TW": "流行的感冒一定會得",
          vi: "Bị tất cả các loại cảm lạnh đang lưu hành",
          id: "Terkena semua flu yang sedang mewabah"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "최근 들어 깜빡깜빡하거나 집중력이 떨어지나요?",
      en: "Lately, do you feel scatterbrained or have trouble concentrating?",
      ja: "最近、ボーっとしたり集中力が低下していますか？",
      "zh-CN": "最近你会感到健忘或注意力下降吗？",
      "zh-TW": "最近你會感到健忘或注意力下降嗎？",
      vi: "Gần đây bạn có cảm thấy hay quên hoặc giảm tập trung không?",
      id: "Belakangan ini, apakah Anda merasa pelupa atau kesulitan berkonsentrasi?"
    },
    options: [
      {
        text: {
          ko: "기억력 생생함. 어제 먹은 점심 메뉴도 기억남",
          en: "Memory is sharp. Remember yesterday's lunch menu",
          ja: "記憶力が鮮明。昨日食べた昼食のメニューも覚えている",
          "zh-CN": "记忆力清晰。还记得昨天吃的午餐菜单",
          "zh-TW": "記憶力清晰。還記得昨天吃的午餐菜單",
          vi: "Trí nhớ sắc nét. Vẫn nhớ menu bữa trưa hôm qua",
          id: "Ingatan tajam. Masih ingat menu makan siang kemarin"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "가끔 단어가 생각 안 날 때가 있다",
          en: "Sometimes words don't come to mind",
          ja: "たまに単語が思い浮かばない時がある",
          "zh-CN": "有时想不起来某些词",
          "zh-TW": "有時想不起來某些詞",
          vi: "Đôi khi không nghĩ ra từ",
          id: "Kadang-kadang kata tidak terpikir"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "방금 뭐 하려고 했는지 까먹을 정도로 멍하다",
          en: "So dazed I forget what I was about to do",
          ja: "今何をしようとしていたか忘れるほどボーっとしている",
          "zh-CN": "迷糊到忘记刚才想做什么",
          "zh-TW": "迷糊到忘記剛才想做什麼",
          vi: "Quá mơ màng đến mức quên mất vừa định làm gì",
          id: "Sangat bingung sampai lupa apa yang baru saja akan dilakukan"
        },
        types: ["Type2"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "평소 작은 일에도 짜증이 나거나 예민해지나요?",
      en: "Do you usually get irritated or sensitive over small things?",
      ja: "普段小さなことでもイライラしたり神経質になりますか？",
      "zh-CN": "你平时会因为小事而烦躁或变得敏感吗？",
      "zh-TW": "你平時會因為小事而煩躁或變得敏感嗎？",
      vi: "Bạn có thường bực mình hoặc nhạy cảm với những việc nhỏ không?",
      id: "Apakah Anda biasanya mudah kesal atau sensitif terhadap hal-hal kecil?"
    },
    options: [
      {
        text: {
          ko: "평온함. 부처님 멘탈",
          en: "Peaceful. Buddha-like mentality",
          ja: "平穏。仏様のメンタル",
          "zh-CN": "平和。佛祖般的心理状态",
          "zh-TW": "平和。佛祖般的心理狀態",
          vi: "Bình yên. Tâm thái như Phật",
          id: "Tenang. Mentalitas seperti Buddha"
        },
        types: [] // 0점
      },
      {
        text: {
          ko: "피곤하면 좀 까칠해지는 편이다",
          en: "Tend to get a bit grumpy when tired",
          ja: "疲れると少し機嫌が悪くなる方だ",
          "zh-CN": "累了时会有点脾气不好",
          "zh-TW": "累了時會有點頭脾氣不好",
          vi: "Có xu hướng hơi cáu kỉnh khi mệt",
          id: "Cenderung agak kesal saat lelah"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "별일 아닌데도 화가 나고 신경질이 난다",
          en: "Get angry and irritable even over nothing",
          ja: "大したことないのに怒ってイライラする",
          "zh-CN": "即使没什么事也会生气和烦躁",
          "zh-TW": "即使沒什麼事也會生氣和煩躁",
          vi: "Tức giận và cáu kỉnh dù không có gì",
          id: "Marah dan mudah tersinggung meski tidak ada masalah"
        },
        types: ["Type4"]
      }
    ]
  }
];

export const phase2BodySignalResults: Phase2BodySignalResult[] = [
  {
    type: "Type1",
    emoji: "🔋",
    title: {
      ko: "충전 필요 방전된 건전지",
      en: "Dead Battery Needing Charge",
      ja: "充電が必要な放電された電池",
      "zh-CN": "需要充电的耗尽电池",
      "zh-TW": "需要充電的耗盡電池",
      vi: "Pin Hết Điện Cần Sạc",
      id: "Baterai Mati yang Perlu Diisi"
    },
    shortDescription: {
      ko: "\"에너지 대사가 꽉 막혀 있어요!\"",
      en: "\"Energy metabolism is completely blocked!\"",
      ja: "「エネルギー代謝が完全に詰まっています！」",
      "zh-CN": "「能量代谢完全堵塞了！」",
      "zh-TW": "「能量代謝完全堵塞了！」",
      vi: "\"Quá trình trao đổi năng lượng bị tắc nghẽn hoàn toàn!\"",
      id: "\"Metabolisme energi benar-benar tersumbat!\""
    },
    description: {
      ko: "당신은 만성 피로와 무기력증에 시달리고 있습니다. 아침에 일어나기 힘들고, 입안이 자주 허는 것은 에너지 대사가 원활하지 않다는 증거입니다. 활력을 끌어올려 줄 부스터가 시급합니다.",
      en: "You are suffering from chronic fatigue and lethargy. Difficulty waking up in the morning and frequent mouth sores are signs that your energy metabolism is not functioning smoothly. A booster to increase your vitality is urgently needed.",
      ja: "あなたは慢性的な疲労と無気力に苦しんでいます。朝起きるのが難しく、口内炎が頻繁にできるのは、エネルギー代謝がスムーズに機能していない証拠です。活力を引き上げるブースターが急務です。",
      "zh-CN": "你正遭受慢性疲劳和无力感。早上难以起床，经常口腔溃疡，这是能量代谢不顺畅的证据。迫切需要能提升活力的助推器。",
      "zh-TW": "你正遭受慢性疲勞和無力感。早上難以起床，經常口腔潰瘍，這是能量代謝不順暢的證據。迫切需要能提升活力的助推器。",
      vi: "Bạn đang chịu đựng sự mệt mỏi mãn tính và uể oải. Khó thức dậy vào buổi sáng và thường xuyên bị lở miệng là dấu hiệu cho thấy quá trình trao đổi năng lượng không hoạt động trơn tru. Một chất tăng cường để nâng cao sinh lực là điều cấp thiết.",
      id: "Anda menderita kelelahan kronis dan lesu. Kesulitan bangun di pagi hari dan sariawan yang sering adalah tanda bahwa metabolisme energi Anda tidak berfungsi dengan lancar. Booster untuk meningkatkan vitalitas sangat dibutuhkan."
    },
    symptoms: {
      ko: "만성 피로, 구내염, 무기력, 잦은 음주",
      en: "Chronic fatigue, mouth sores, lethargy, frequent drinking",
      ja: "慢性的な疲労、口内炎、無気力、頻繁な飲酒",
      "zh-CN": "慢性疲劳、口腔溃疡、无力感、经常饮酒",
      "zh-TW": "慢性疲勞、口腔潰瘍、無力感、經常飲酒",
      vi: "Mệt mỏi mãn tính, lở miệng, uể oải, uống rượu thường xuyên",
      id: "Kelelahan kronis, sariawan, lesu, sering minum alkohol"
    },
    prescription: {
      ko: "고함량 비타민 B 컴플렉스",
      en: "High-dose Vitamin B Complex",
      ja: "高用量ビタミンBコンプレックス",
      "zh-CN": "高剂量维生素B复合物",
      "zh-TW": "高劑量維生素B複合物",
      vi: "Vitamin B Complex Liều Cao",
      id: "Vitamin B Kompleks Dosis Tinggi"
    },
    recommendation: {
      ko: "에너지 생성과 피로 회복, 간 건강에 필수적인 비타민입니다.",
      en: "Essential vitamins for energy production, fatigue recovery, and liver health.",
      ja: "エネルギー生成と疲労回復、肝臓の健康に不可欠なビタミンです。",
      "zh-CN": "是能量生成、疲劳恢复和肝脏健康所必需的维生素。",
      "zh-TW": "是能量生成、疲勞恢復和肝臟健康所必需的維生素。",
      vi: "Vitamin thiết yếu cho việc sản xuất năng lượng, phục hồi mệt mỏi và sức khỏe gan.",
      id: "Vitamin penting untuk produksi energi, pemulihan kelelahan, dan kesehatan hati."
    }
  },
  {
    type: "Type2",
    emoji: "🌵",
    title: {
      ko: "뻑뻑한 사막의 눈",
      en: "Dry Desert Eyes",
      ja: "カサカサの砂漠の目",
      "zh-CN": "干燥沙漠般的眼睛",
      "zh-TW": "乾燥沙漠般的眼睛",
      vi: "Mắt Khô Như Sa Mạc",
      id: "Mata Kering Seperti Gurun"
    },
    shortDescription: {
      ko: "\"눈이 비명을 지르고 있어요!\"",
      en: "\"My eyes are screaming!\"",
      ja: "「目が悲鳴を上げています！」",
      "zh-CN": "「我的眼睛在尖叫！」",
      "zh-TW": "「我的眼睛在尖叫！」",
      vi: "\"Mắt tôi đang la hét!\"",
      id: "\"Mata saya berteriak!\""
    },
    description: {
      ko: "스마트폰과 모니터 속에 사는 당신! 눈이 건조하고 뻑뻑하며, 밤이 되면 침침해지는 증상을 겪고 있습니다. 눈의 피로는 두통과 집중력 저하로 이어질 수 있으니 촉촉한 기름칠이 필요합니다.",
      en: "You live in smartphones and monitors! Your eyes are dry and stiff, and you experience blurry vision at night. Eye fatigue can lead to headaches and reduced concentration, so you need some moisturizing lubrication.",
      ja: "スマートフォンとモニターの中で生きるあなた！目が乾燥して硬く、夜になるとぼやける症状に悩まされています。目の疲労は頭痛と集中力の低下につながる可能性があるため、しっとりとした潤滑が必要です。",
      "zh-CN": "你生活在智能手机和显示器中！眼睛干涩僵硬，晚上会出现视力模糊的症状。眼睛疲劳可能导致头痛和注意力下降，所以需要一些保湿润滑。",
      "zh-TW": "你生活在智能手機和顯示器中！眼睛乾澀僵硬，晚上會出現視力模糊的症狀。眼睛疲勞可能導致頭痛和注意力下降，所以需要一些保濕潤滑。",
      vi: "Bạn sống trong điện thoại thông minh và màn hình! Mắt bạn khô và cứng, và bạn gặp phải tình trạng mờ mắt vào ban đêm. Mệt mỏi mắt có thể dẫn đến đau đầu và giảm tập trung, vì vậy bạn cần một số chất bôi trơn dưỡng ẩm.",
      id: "Anda hidup di smartphone dan monitor! Mata Anda kering dan kaku, dan Anda mengalami penglihatan kabur di malam hari. Kelelahan mata dapat menyebabkan sakit kepala dan penurunan konsentrasi, jadi Anda membutuhkan pelumasan pelembab."
    },
    symptoms: {
      ko: "안구 건조, 시력 저하 느낌, 이물감, 기억력 감퇴",
      en: "Dry eyes, feeling of vision decline, foreign body sensation, memory decline",
      ja: "眼球乾燥、視力低下の感覚、異物感、記憶力低下",
      "zh-CN": "眼球干燥、感觉视力下降、异物感、记忆力下降",
      "zh-TW": "眼球乾燥、感覺視力下降、異物感、記憶力下降",
      vi: "Mắt khô, cảm giác giảm thị lực, cảm giác dị vật, suy giảm trí nhớ",
      id: "Mata kering, perasaan penurunan penglihatan, sensasi benda asing, penurunan memori"
    },
    prescription: {
      ko: "루테인 & 오메가3",
      en: "Lutein & Omega-3",
      ja: "ルテイン&オメガ3",
      "zh-CN": "叶黄素和Omega-3",
      "zh-TW": "葉黃素和Omega-3",
      vi: "Lutein & Omega-3",
      id: "Lutein & Omega-3"
    },
    recommendation: {
      ko: "황반 건강을 위한 루테인과 건조 개선/두뇌 회전을 위한 오메가3가 필요합니다.",
      en: "Lutein for macular health and Omega-3 for dryness improvement and brain function are needed.",
      ja: "黄斑の健康のためのルテインと乾燥改善・脳機能のためのオメガ3が必要です。",
      "zh-CN": "需要叶黄素来维护黄斑健康，以及Omega-3来改善干燥和促进大脑功能。",
      "zh-TW": "需要葉黃素來維護黃斑健康，以及Omega-3來改善乾燥和促進大腦功能。",
      vi: "Cần Lutein cho sức khỏe hoàng điểm và Omega-3 để cải thiện khô mắt và chức năng não.",
      id: "Diperlukan Lutein untuk kesehatan makula dan Omega-3 untuk perbaikan kekeringan dan fungsi otak."
    }
  },
  {
    type: "Type3",
    emoji: "🎈",
    title: {
      ko: "부글부글 가스통",
      en: "Bloated Gas Tank",
      ja: "プクプクガスタンク",
      "zh-CN": "胀气的储气罐",
      "zh-TW": "脹氣的儲氣罐",
      vi: "Bình Khí Đầy Hơi",
      id: "Tangki Gas Kembung"
    },
    shortDescription: {
      ko: "\"장내 평화가 깨졌어요!\"",
      en: "\"Intestinal peace has been broken!\"",
      ja: "「腸内の平和が壊れました！」",
      "zh-CN": "「肠道内的和平被打破了！」",
      "zh-TW": "「腸道內的和平被打破了！」",
      vi: "\"Hòa bình trong ruột đã bị phá vỡ!\"",
      id: "\"Kedamaian usus telah terganggu!\""
    },
    description: {
      ko: "식사 후 속이 더부룩하거나, 화장실 가는 게 고역인 당신. 인스턴트 섭취가 많거나 채소 섭취가 부족하진 않나요? 장 건강은 면역력의 70%를 담당합니다. 지금 뱃속 전쟁을 멈추기 위해 유익균 군대를 파견해야 합니다.",
      en: "After meals, your stomach feels bloated, or going to the bathroom is a struggle. Do you consume a lot of instant foods or lack vegetable intake? Gut health accounts for 70% of immunity. We need to deploy an army of beneficial bacteria to stop the war in your stomach.",
      ja: "食事後お腹が重くなったり、トイレに行くのが大変なあなた。インスタント食品の摂取が多く、野菜の摂取が不足していませんか？腸の健康は免疫力の70%を担っています。今、お腹の中の戦争を止めるために有益菌の軍隊を派遣する必要があります。",
      "zh-CN": "饭后肚子胀，或者上厕所很困难。你是否摄入大量方便食品或缺乏蔬菜？肠道健康占免疫力的70%。现在需要派遣有益菌大军来停止你肚子里的战争。",
      "zh-TW": "飯後肚子脹，或者上廁所很困難。你是否攝入大量方便食品或缺乏蔬菜？腸道健康占免疫力的70%。現在需要派遣有益菌大軍來停止你肚子裡的戰爭。",
      vi: "Sau bữa ăn, bụng bạn cảm thấy đầy hơi, hoặc đi vệ sinh là một cuộc đấu tranh. Bạn có tiêu thụ nhiều thực phẩm ăn liền hoặc thiếu lượng rau quả không? Sức khỏe đường ruột chiếm 70% khả năng miễn dịch. Chúng ta cần triển khai một đội quân vi khuẩn có lợi để dừng cuộc chiến trong bụng bạn.",
      id: "Setelah makan, perut Anda terasa kembung, atau pergi ke toilet adalah perjuangan. Apakah Anda mengonsumsi banyak makanan instan atau kurang asupan sayuran? Kesehatan usus menyumbang 70% dari kekebalan. Kita perlu mengirim pasukan bakteri menguntungkan untuk menghentikan perang di perut Anda."
    },
    symptoms: {
      ko: "소화 불량, 변비, 설사, 복부 팽만, 불규칙한 식사",
      en: "Indigestion, constipation, diarrhea, abdominal bloating, irregular meals",
      ja: "消化不良、便秘、下痢、腹部膨満、不規則な食事",
      "zh-CN": "消化不良、便秘、腹泻、腹胀、不规律饮食",
      "zh-TW": "消化不良、便秘、腹瀉、腹脹、不規律飲食",
      vi: "Khó tiêu, táo bón, tiêu chảy, đầy hơi bụng, bữa ăn không đều",
      id: "Gangguan pencernaan, sembelit, diare, kembung perut, makanan tidak teratur"
    },
    prescription: {
      ko: "프로바이오틱스 (유산균)",
      en: "Probiotics (Lactobacilli)",
      ja: "プロバイオティクス（乳酸菌）",
      "zh-CN": "益生菌（乳酸菌）",
      "zh-TW": "益生菌（乳酸菌）",
      vi: "Probiotics (Lợi khuẩn)",
      id: "Probiotik (Lactobacilli)"
    },
    recommendation: {
      ko: "장내 유익균을 늘려 배변 활동과 소화 기능을 돕습니다.",
      en: "Increases beneficial bacteria in the gut to help bowel activity and digestive function.",
      ja: "腸内の有益菌を増やして排便活動と消化機能を助けます。",
      "zh-CN": "增加肠道有益菌，帮助排便活动和消化功能。",
      "zh-TW": "增加腸道有益菌，幫助排便活動和消化功能。",
      vi: "Tăng vi khuẩn có lợi trong ruột để giúp hoạt động đại tiện và chức năng tiêu hóa.",
      id: "Meningkatkan bakteri menguntungkan di usus untuk membantu aktivitas buang air besar dan fungsi pencernaan."
    }
  },
  {
    type: "Type4",
    emoji: "🐟",
    title: {
      ko: "파르르 떨리는 개복치",
      en: "Twitching Sunfish",
      ja: "ピクピクするマンボウ",
      "zh-CN": "不停颤抖的翻车鱼",
      "zh-TW": "不停顫抖的翻車魚",
      vi: "Cá Mặt Trời Run Rẩy",
      id: "Ikan Mola-mola yang Berkedut"
    },
    shortDescription: {
      ko: "\"신경이 곤두서 있네요!\"",
      en: "\"Your nerves are on edge!\"",
      ja: "「神経がピリピリしていますね！」",
      "zh-CN": "「你的神经绷得很紧！」",
      "zh-TW": "「你的神經繃得很緊！」",
      vi: "\"Dây thần kinh của bạn đang căng thẳng!\"",
      id: "\"Saraf Anda tegang!\""
    },
    description: {
      ko: "작은 스트레스에도 예민하고, 눈 밑이 파르르 떨리거나 밤에 잠을 잘 못 이루시나요? 근육과 신경이 긴장 상태라는 신호입니다. 천연 신경 안정제가 필요합니다.",
      en: "Are you sensitive to even small stresses, experience eye twitching, or have trouble sleeping at night? These are signs that your muscles and nerves are in a tense state. You need a natural nerve relaxant.",
      ja: "小さなストレスにも敏感で、目の下がピクピクしたり、夜に良く眠れませんか？筋肉と神経が緊張状態にあるというサインです。天然の神経安定剤が必要です。",
      "zh-CN": "你对小压力也很敏感，眼皮跳动，或者晚上睡不好吗？这是肌肉和神经处于紧张状态的信号。你需要天然神经稳定剂。",
      "zh-TW": "你對小壓力也很敏感，眼皮跳動，或者晚上睡不好嗎？這是肌肉和神經處於緊張狀態的信號。你需要天然神經穩定劑。",
      vi: "Bạn có nhạy cảm với cả những căng thẳng nhỏ, mắt giật, hoặc khó ngủ vào ban đêm không? Đây là dấu hiệu cho thấy cơ bắp và dây thần kinh của bạn đang ở trạng thái căng thẳng. Bạn cần một chất thư giãn thần kinh tự nhiên.",
      id: "Apakah Anda sensitif terhadap stres kecil, mengalami kedutan mata, atau kesulitan tidur di malam hari? Ini adalah tanda bahwa otot dan saraf Anda dalam keadaan tegang. Anda membutuhkan pereda saraf alami."
    },
    symptoms: {
      ko: "눈 떨림, 불면증, 근육 뭉침, 예민함, 짜증",
      en: "Eye twitching, insomnia, muscle tension, sensitivity, irritability",
      ja: "目の痙攣、不眠症、筋肉の凝り、敏感さ、イライラ",
      "zh-CN": "眼皮跳动、失眠、肌肉僵硬、敏感、易怒",
      "zh-TW": "眼皮跳動、失眠、肌肉僵硬、敏感、易怒",
      vi: "Mắt giật, mất ngủ, căng cơ, nhạy cảm, cáu kỉnh",
      id: "Kedutan mata, insomnia, ketegangan otot, sensitivitas, mudah tersinggung"
    },
    prescription: {
      ko: "마그네슘",
      en: "Magnesium",
      ja: "マグネシウム",
      "zh-CN": "镁",
      "zh-TW": "鎂",
      vi: "Magie",
      id: "Magnesium"
    },
    recommendation: {
      ko: "근육을 이완시키고 신경을 안정시켜 숙면을 돕습니다.",
      en: "Relaxes muscles and stabilizes nerves to help with deep sleep.",
      ja: "筋肉をリラックスさせ、神経を安定させて深い眠りを助けます。",
      "zh-CN": "放松肌肉并稳定神经，帮助深度睡眠。",
      "zh-TW": "放鬆肌肉並穩定神經，幫助深度睡眠。",
      vi: "Thư giãn cơ bắp và ổn định dây thần kinh để giúp ngủ sâu.",
      id: "Merelaksasi otot dan menstabilkan saraf untuk membantu tidur nyenyak."
    }
  },
  {
    type: "Type5",
    emoji: "🦇",
    title: {
      ko: "햇빛 못 본 동굴 인간",
      en: "Cave Human Who Never Sees Sunlight",
      ja: "日光を見ない洞窟人間",
      "zh-CN": "不见阳光的洞穴人类",
      "zh-TW": "不見陽光的洞穴人類",
      vi: "Người Hang Động Không Thấy Ánh Nắng",
      id: "Manusia Gua yang Tak Pernah Melihat Sinar Matahari"
    },
    shortDescription: {
      ko: "\"광합성이 절대적으로 부족해요!\"",
      en: "\"Photosynthesis is absolutely lacking!\"",
      ja: "「光合成が絶対的に不足しています！」",
      "zh-CN": "「光合作用绝对不足！」",
      "zh-TW": "「光合作用絕對不足！」",
      vi: "\"Quá trình quang hợp thiếu hụt hoàn toàn!\"",
      id: "\"Fotosintesis benar-benar kurang!\""
    },
    description: {
      ko: "하루 종일 실내에만 있어 햇빛 볼 일이 없는 당신. 뼈 건강과 면역력이 약해질 수 있으며, 이유 없는 우울감을 느낄 수도 있습니다. 감기에 자주 걸린다면 면역 방패가 뚫린 상태입니다.",
      en: "You spend all day indoors with no exposure to sunlight. Your bone health and immunity may weaken, and you may feel unexplained depression. If you catch colds frequently, your immune shield has been breached.",
      ja: "一日中室内にいて日光を見る機会がないあなた。骨の健康と免疫力が弱くなる可能性があり、理由のない憂鬱感を感じることもあります。風邪をよく引くなら、免疫の盾が破られた状態です。",
      "zh-CN": "你一整天都待在室内，没有阳光照射。你的骨骼健康和免疫力可能会减弱，你可能会感到莫名的抑郁。如果你经常感冒，说明你的免疫盾牌已经被攻破了。",
      "zh-TW": "你一整天都待在室內，沒有陽光照射。你的骨骼健康和免疫力可能會減弱，你可能會感到莫名的抑鬱。如果你經常感冒，說明你的免疫盾牌已經被攻破了。",
      vi: "Bạn dành cả ngày trong nhà mà không tiếp xúc với ánh nắng mặt trời. Sức khỏe xương và khả năng miễn dịch của bạn có thể yếu đi, và bạn có thể cảm thấy trầm cảm không rõ lý do. Nếu bạn thường xuyên bị cảm lạnh, lá chắn miễn dịch của bạn đã bị xuyên thủng.",
      id: "Anda menghabiskan sepanjang hari di dalam ruangan tanpa paparan sinar matahari. Kesehatan tulang dan kekebalan Anda mungkin melemah, dan Anda mungkin merasakan depresi tanpa alasan. Jika Anda sering terkena flu, perisai kekebalan Anda telah ditembus."
    },
    symptoms: {
      ko: "우울감, 뼈/관절 시림, 면역력 저하, 잦은 감기",
      en: "Depression, bone/joint pain, weakened immunity, frequent colds",
      ja: "憂鬱感、骨・関節の痛み、免疫力低下、頻繁な風邪",
      "zh-CN": "抑郁感、骨骼/关节疼痛、免疫力下降、频繁感冒",
      "zh-TW": "抑鬱感、骨骼/關節疼痛、免疫力下降、頻繁感冒",
      vi: "Cảm giác trầm cảm, đau xương/khớp, giảm khả năng miễn dịch, thường xuyên cảm lạnh",
      id: "Depresi, nyeri tulang/sendi, kekebalan melemah, sering flu"
    },
    prescription: {
      ko: "비타민 D & 아연",
      en: "Vitamin D & Zinc",
      ja: "ビタミンD&亜鉛",
      "zh-CN": "维生素D和锌",
      "zh-TW": "維生素D和鋅",
      vi: "Vitamin D & Kẽm",
      id: "Vitamin D & Zinc"
    },
    recommendation: {
      ko: "현대인의 필수 영양소. 면역 기능과 뼈 건강을 지켜줍니다.",
      en: "Essential nutrients for modern people. They protect immune function and bone health.",
      ja: "現代人に不可欠な栄養素。免疫機能と骨の健康を守ります。",
      "zh-CN": "现代人的必需营养素。它们保护免疫功能和骨骼健康。",
      "zh-TW": "現代人的必需營養素。它們保護免疫功能和骨骼健康。",
      vi: "Dinh dưỡng thiết yếu cho người hiện đại. Chúng bảo vệ chức năng miễn dịch và sức khỏe xương.",
      id: "Nutrisi penting untuk orang modern. Mereka melindungi fungsi kekebalan dan kesehatan tulang."
    }
  }
];

export function calculatePhase2BodySignalResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type1"; // Default value (highest priority)
  const priority = ["Type1", "Type3", "Type4", "Type2", "Type5"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
