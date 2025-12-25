export interface Phase2LazinessLevelQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2LazinessLevelResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  lazinessLevel: Record<string, string>; // "0%", "20%" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2LazinessLevelQuestions: Phase2LazinessLevelQuestion[] = [
  {
    id: 1,
    question: {
      ko: "평일 아침, 알람 소리를 들었을 때 당신은?",
      en: "On weekday mornings, when you hear the alarm, what do you do?",
      ja: "平日の朝、目覚ましの音を聞いたとき、あなたは？",
      'zh-CN': "工作日的早晨，听到闹钟时你会？",
      'zh-TW': "工作日的早晨，聽到鬧鐘時你會？",
      vi: "Sáng ngày thường, khi nghe tiếng chuông báo thức, bạn sẽ làm gì?",
      id: "Di pagi hari kerja, ketika mendengar alarm, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "(벌떡) 알람 끄고 바로 일어나서 이불 정리까지 한다",
          en: "(Jump up) Turn off the alarm and immediately get up, even making the bed",
          ja: "（パッと）アラームを止めてすぐに起きて、布団まで整える",
          'zh-CN': "（猛地）关掉闹钟立即起床，还会整理被子",
          'zh-TW': "（猛地）關掉鬧鐘立即起床，還會整理被子",
          vi: "(Nhảy dậy) Tắt chuông báo thức và ngay lập tức thức dậy, thậm chí còn dọn giường",
          id: "(Langsung bangun) Matikan alarm dan langsung bangun, bahkan merapikan tempat tidur"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "5분만... 10분만... 스누즈 버튼을 3번 이상 누른다",
          en: "Just 5 more minutes... 10 more minutes... Press snooze 3 or more times",
          ja: "あと5分...あと10分...スヌーズボタンを3回以上押す",
          'zh-CN': "再5分钟...再10分钟...按贪睡按钮3次以上",
          'zh-TW': "再5分鐘...再10分鐘...按貪睡按鈕3次以上",
          vi: "Chỉ 5 phút nữa thôi... 10 phút nữa thôi... Nhấn nút hoãn báo thức 3 lần trở lên",
          id: "Lima menit lagi... sepuluh menit lagi... Tekan tombol snooze 3 kali atau lebih"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "알람 소리를 듣고 깼지만 침대에서 30분간 폰을 본다",
          en: "Wake up to the alarm but stay in bed looking at phone for 30 minutes",
          ja: "アラームの音で目は覚めたが、ベッドで30分間スマホを見る",
          'zh-CN': "听到闹钟醒了，但在床上看手机30分钟",
          'zh-TW': "聽到鬧鐘醒了，但在床上看手機30分鐘",
          vi: "Tỉnh dậy vì tiếng chuông báo thức nhưng nằm trên giường xem điện thoại 30 phút",
          id: "Bangun karena alarm tapi tetap di tempat tidur melihat ponsel selama 30 menit"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "알람? 들은 기억이 없다. 지각 위기 직전에 기적적으로 깬다",
          en: "Alarm? Don't remember hearing it. Miraculously wake up just before being late",
          ja: "アラーム？聞いた記憶がない。遅刻危機の直前で奇跡的に目が覚める",
          'zh-CN': "闹钟？不记得听过。在即将迟到前奇迹般地醒来",
          'zh-TW': "鬧鐘？不記得聽過。在即將遲到前奇蹟般地醒來",
          vi: "Chuông báo thức? Không nhớ đã nghe. Tỉnh dậy một cách kỳ diệu ngay trước khi muộn",
          id: "Alarm? Tidak ingat mendengarnya. Bangun secara ajaib tepat sebelum terlambat"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "집에서 TV 리모컨이 손에 닿지 않는 곳에 있다면?",
      en: "If the TV remote is out of reach at home?",
      ja: "家でTVリモコンが手の届かないところにあるなら？",
      'zh-CN': "如果家里的电视遥控器够不到？",
      'zh-TW': "如果家裡的電視遙控器夠不到？",
      vi: "Nếu điều khiển TV ở nhà nằm ngoài tầm với?",
      id: "Jika remote TV di rumah berada di luar jangkauan?"
    },
    options: [
      {
        text: {
          ko: "가서 가져온다",
          en: "Go get it",
          ja: "取りに行く",
          'zh-CN': "去拿",
          'zh-TW': "去拿",
          vi: "Đi lấy",
          id: "Pergi mengambilnya"
        },
        score: 0
      },
      {
        text: {
          ko: "발가락을 뻗어 집어보려고 시도한다",
          en: "Try to reach it with my toes",
          ja: "つま先を伸ばして取ろうとする",
          'zh-CN': "尝试用脚趾去够",
          'zh-TW': "嘗試用腳趾去夠",
          vi: "Cố gắng dùng ngón chân để lấy",
          id: "Mencoba meraihnya dengan jari kaki"
        },
        score: 1
      },
      {
        text: {
          ko: "\"리모컨 좀 줘...\" 옆 사람에게 부탁하거나 올 때까지 기다린다",
          en: "\"Can you pass me the remote...\" Ask someone nearby or wait until they come",
          ja: "「リモコンちょっと...」隣の人に頼むか、来るまで待つ",
          'zh-CN': "「把遥控器给我...」拜托旁边的人或等他们来",
          'zh-TW': "「把遙控器給我...」拜託旁邊的人或等他們來",
          vi: "\"Đưa điều khiển cho mình...\" Nhờ người bên cạnh hoặc đợi họ đến",
          id: "\"Tolong berikan remotenya...\" Minta orang di sebelah atau tunggu sampai mereka datang"
        },
        score: 2
      },
      {
        text: {
          ko: "그냥 보고 있던 채널을 계속 본다",
          en: "Just keep watching whatever channel is on",
          ja: "見ていたチャンネルをそのまま見続ける",
          'zh-CN': "继续看正在播放的频道",
          'zh-TW': "繼續看正在播放的頻道",
          vi: "Cứ tiếp tục xem kênh đang phát",
          id: "Tetap menonton saluran yang sedang ditonton"
        },
        score: 3
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "배달 음식을 먹고 난 후 뒤처리는?",
      en: "After eating delivery food, how do you clean up?",
      ja: "デリバリーの食事を食べた後、後片付けは？",
      'zh-CN': "吃完外卖后如何处理？",
      'zh-TW': "吃完外賣後如何處理？",
      vi: "Sau khi ăn đồ giao hàng, bạn dọn dẹp như thế nào?",
      id: "Setelah makan makanan pesanan, bagaimana Anda membersihkannya?"
    },
    options: [
      {
        text: {
          ko: "먹자마자 바로 분리수거하고 용기를 씻어서 버린다",
          en: "Immediately sort and wash containers right after eating",
          ja: "食べ終わったらすぐに分別して容器を洗って捨てる",
          'zh-CN': "吃完立即分类并清洗容器后扔掉",
          'zh-TW': "吃完立即分類並清洗容器後扔掉",
          vi: "Ngay sau khi ăn xong, phân loại và rửa hộp đựng rồi vứt đi",
          id: "Segera memisahkan dan mencuci wadah tepat setelah makan"
        },
        score: 0
      },
      {
        text: {
          ko: "일단 싱크대에 물만 담가두고 나중에 치운다",
          en: "Soak in water in the sink and clean up later",
          ja: "とりあえずシンクに水を張っておいて、後で片付ける",
          'zh-CN': "先在水槽里泡着，稍后清理",
          'zh-TW': "先在水槽裡泡著，稍後清理",
          vi: "Ngâm nước trong bồn rửa và dọn dẹp sau",
          id: "Rendam di wastafel dan bersihkan nanti"
        },
        score: 1
      },
      {
        text: {
          ko: "내일 아침에 치우기로 하고 잠자리에 든다",
          en: "Decide to clean up tomorrow morning and go to bed",
          ja: "明日の朝に片付けることにして寝る",
          'zh-CN': "决定明天早上再清理，然后睡觉",
          'zh-TW': "決定明天早上再清理，然後睡覺",
          vi: "Quyết định dọn dẹp vào sáng mai rồi đi ngủ",
          id: "Putuskan untuk membersihkan besok pagi dan tidur"
        },
        score: 2
      },
      {
        text: {
          ko: "냄새가 나기 시작하거나 벌레가 보일 때쯤 치운다",
          en: "Clean up when it starts to smell or bugs appear",
          ja: "臭いがしてきたり虫が見え始めた頃に片付ける",
          'zh-CN': "开始有味道或出现虫子时才清理",
          'zh-TW': "開始有味道或出現蟲子時才清理",
          vi: "Dọn dẹp khi bắt đầu có mùi hoặc thấy côn trùng",
          id: "Bersihkan ketika mulai berbau atau serangga muncul"
        },
        score: 3
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "주말 약속이 취소되었다는 연락을 받았다!",
      en: "You got a call that your weekend plans are cancelled!",
      ja: "週末の約束がキャンセルになったという連絡を受けた！",
      'zh-CN': "收到周末约会取消的通知！",
      'zh-TW': "收到週末約會取消的通知！",
      vi: "Bạn nhận được tin nhắn rằng cuộc hẹn cuối tuần bị hủy!",
      id: "Anda mendapat telepon bahwa rencana akhir pekan dibatalkan!"
    },
    options: [
      {
        text: {
          ko: "\"아쉽네.\" 바로 다른 친구에게 연락하거나 혼자라도 나간다",
          en: "\"That's too bad.\" Immediately contact another friend or go out alone",
          ja: "「残念だな。」すぐに他の友達に連絡するか、一人でも出かける",
          'zh-CN': "「真可惜。」立即联系其他朋友或独自出门",
          'zh-TW': "「真可惜。」立即聯繫其他朋友或獨自出門",
          vi: "\"Tiếc quá.\" Ngay lập tức liên hệ bạn khác hoặc đi một mình",
          id: "\"Sayang sekali.\" Langsung menghubungi teman lain atau pergi sendiri"
        },
        score: 0
      },
      {
        text: {
          ko: "\"오히려 좋아!\" 밀린 집안일을 하거나 생산적인 시간을 보낸다",
          en: "\"Even better!\" Do housework or spend productive time",
          ja: "「むしろ良かった！」溜まった家事をするか、生産的な時間を過ごす",
          'zh-CN': "「反而更好！」做家务或度过有成效的时间",
          'zh-TW': "「反而更好！」做家務或度過有成效的時間",
          vi: "\"Còn tốt hơn!\" Làm việc nhà hoặc dành thời gian hiệu quả",
          id: "\"Lebih baik!\" Melakukan pekerjaan rumah atau menghabiskan waktu produktif"
        },
        score: 1
      },
      {
        text: {
          ko: "\"나이스!\" 다시 잠옷으로 갈아입고 침대로 다이빙한다",
          en: "\"Nice!\" Change back into pajamas and dive into bed",
          ja: "「ナイス！」またパジャマに着替えてベッドにダイブする",
          'zh-CN': "「太好了！」换回睡衣然后扑到床上",
          'zh-TW': "「太好了！」換回睡衣然後撲到床上",
          vi: "\"Tuyệt!\" Thay lại đồ ngủ và lao vào giường",
          id: "\"Bagus!\" Ganti kembali piyama dan langsung ke tempat tidur"
        },
        score: 2
      },
      {
        text: {
          ko: "이미 자고 있어서 연락 온 줄도 모름",
          en: "Already asleep, don't even know the call came",
          ja: "もう寝ていて、連絡が来たことすら知らない",
          'zh-CN': "已经睡着了，甚至不知道有电话",
          'zh-TW': "已經睡著了，甚至不知道有電話",
          vi: "Đã ngủ rồi, thậm chí không biết có cuộc gọi",
          id: "Sudah tertidur, bahkan tidak tahu ada panggilan"
        },
        score: 3
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "머리를 감는 기준은 무엇인가요?",
      en: "What is your standard for washing your hair?",
      ja: "髪を洗う基準は何ですか？",
      'zh-CN': "你洗头的标准是什么？",
      'zh-TW': "你洗頭的標準是什麼？",
      vi: "Tiêu chuẩn của bạn để gội đầu là gì?",
      id: "Apa standar Anda untuk mencuci rambut?"
    },
    options: [
      {
        text: {
          ko: "외출 여부와 상관없이 매일 아침저녁으로 감는다",
          en: "Wash every morning and evening regardless of going out",
          ja: "外出の有無に関係なく毎日朝晩洗う",
          'zh-CN': "无论是否外出，每天早晚都洗",
          'zh-TW': "無論是否外出，每天早晚都洗",
          vi: "Gội mỗi sáng và tối bất kể có đi ra ngoài hay không",
          id: "Cuci setiap pagi dan malam terlepas dari pergi keluar"
        },
        score: 0
      },
      {
        text: {
          ko: "외출할 일이 있을 때만 감는다",
          en: "Only wash when I have plans to go out",
          ja: "外出する用事があるときだけ洗う",
          'zh-CN': "只有要外出时才洗",
          'zh-TW': "只有要外出時才洗",
          vi: "Chỉ gội khi có kế hoạch đi ra ngoài",
          id: "Hanya cuci saat ada rencana keluar"
        },
        score: 1
      },
      {
        text: {
          ko: "모자를 쓰면 되니까 2~3일에 한 번 정도 감는다",
          en: "Wash about once every 2-3 days since I can just wear a hat",
          ja: "帽子をかぶればいいから2〜3日に1回くらい洗う",
          'zh-CN': "可以戴帽子，所以2-3天洗一次",
          'zh-TW': "可以戴帽子，所以2-3天洗一次",
          vi: "Gội khoảng 2-3 ngày một lần vì có thể đội mũ",
          id: "Cuci sekitar sekali setiap 2-3 hari karena bisa pakai topi"
        },
        score: 2
      },
      {
        text: {
          ko: "머리가 가려워서 못 참을 때까지 버틴다",
          en: "Hold out until my scalp is too itchy to bear",
          ja: "頭がかゆくて我慢できなくなるまで我慢する",
          'zh-CN': "坚持到头皮痒得受不了",
          'zh-TW': "堅持到頭皮癢得受不了",
          vi: "Cố gắng chịu đựng cho đến khi da đầu ngứa không chịu nổi",
          id: "Bertahan sampai kulit kepala terlalu gatal untuk ditahan"
        },
        score: 3
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "방 청소를 하는 주기는?",
      en: "How often do you clean your room?",
      ja: "部屋の掃除をする周期は？",
      'zh-CN': "你多久打扫一次房间？",
      'zh-TW': "你多久打掃一次房間？",
      vi: "Bạn dọn phòng bao lâu một lần?",
      id: "Seberapa sering Anda membersihkan kamar?"
    },
    options: [
      {
        text: {
          ko: "매일 조금씩 쓸고 닦아서 항상 깨끗함을 유지한다",
          en: "Clean a little every day to keep it always tidy",
          ja: "毎日少しずつ掃除して常にきれいを保つ",
          'zh-CN': "每天稍微打扫，保持整洁",
          'zh-TW': "每天稍微打掃，保持整潔",
          vi: "Dọn dẹp một chút mỗi ngày để luôn sạch sẽ",
          id: "Bersihkan sedikit setiap hari untuk tetap rapi"
        },
        score: 0
      },
      {
        text: {
          ko: "일주일에 한 번, 주말에 날 잡고 몰아서 한다",
          en: "Once a week, set aside time on weekends to do it all at once",
          ja: "週に1回、週末に時間を取って一気にする",
          'zh-CN': "每周一次，周末集中清理",
          'zh-TW': "每週一次，週末集中清理",
          vi: "Một tuần một lần, dành thời gian cuối tuần để dọn dẹp hết",
          id: "Sekali seminggu, luangkan waktu di akhir pekan untuk membersihkan sekaligus"
        },
        score: 1
      },
      {
        text: {
          ko: "친구나 손님이 집에 온다고 할 때만 급하게 치운다",
          en: "Only clean up urgently when friends or guests are coming",
          ja: "友達やお客さんが来ると言ったときだけ急いで片付ける",
          'zh-CN': "只有朋友或客人要来时才匆忙清理",
          'zh-TW': "只有朋友或客人要來時才匆忙清理",
          vi: "Chỉ dọn dẹp gấp khi bạn bè hoặc khách sắp đến",
          id: "Hanya membersihkan dengan tergesa-gesa saat teman atau tamu akan datang"
        },
        score: 2
      },
      {
        text: {
          ko: "발 디딜 틈이 없어질 때, 생존을 위한 통로만 만든다",
          en: "When there's no room to step, only clear a path for survival",
          ja: "足の踏み場がなくなる時、生存のための通路だけを作る",
          'zh-CN': "没地方下脚时，只清理出一条生存通道",
          'zh-TW': "沒地方下腳時，只清理出一條生存通道",
          vi: "Khi không còn chỗ để bước, chỉ dọn một lối đi để sinh tồn",
          id: "Ketika tidak ada ruang untuk melangkah, hanya buat jalur untuk bertahan hidup"
        },
        score: 3
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "쇼핑을 하러 백화점에 갔다. 당신의 행동은?",
      en: "You went to a department store to shop. What do you do?",
      ja: "ショッピングのためにデパートに行った。あなたの行動は？",
      'zh-CN': "去百货商店购物。你的行为是？",
      'zh-TW': "去百貨商店購物。你的行為是？",
      vi: "Bạn đến cửa hàng bách hóa để mua sắm. Bạn sẽ làm gì?",
      id: "Anda pergi ke department store untuk berbelanja. Apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "층별로 꼼꼼히 돌며 가격 비교 후 구매한다",
          en: "Go through each floor carefully, compare prices, then buy",
          ja: "階ごとに丁寧に回って価格を比較してから購入する",
          'zh-CN': "逐层仔细逛，比较价格后购买",
          'zh-TW': "逐層仔細逛，比較價格後購買",
          vi: "Đi từng tầng cẩn thận, so sánh giá rồi mua",
          id: "Pergi melalui setiap lantai dengan hati-hati, bandingkan harga, lalu beli"
        },
        score: 0
      },
      {
        text: {
          ko: "필요한 매장만 딱 들러서 목적 달성 후 바로 나온다",
          en: "Only visit the stores I need, achieve my goal, then leave immediately",
          ja: "必要な店だけを回って目的を達成したらすぐに出る",
          'zh-CN': "只去需要的商店，达成目标后立即离开",
          'zh-TW': "只去需要的商店，達成目標後立即離開",
          vi: "Chỉ vào các cửa hàng cần thiết, đạt mục tiêu rồi rời ngay",
          id: "Hanya mengunjungi toko yang dibutuhkan, capai tujuan, lalu langsung pergi"
        },
        score: 1
      },
      {
        text: {
          ko: "돌아다니다 지쳐서 눈에 보이는 아무거나 사고 카페로 간다",
          en: "Get tired from walking around, buy whatever I see, then go to a cafe",
          ja: "歩き回って疲れて、目に入るものを何でも買ってカフェに行く",
          'zh-CN': "逛累了，看到什么买什么，然后去咖啡厅",
          'zh-TW': "逛累了，看到什麼買什麼，然後去咖啡廳",
          vi: "Đi lại mệt mỏi, mua bất cứ thứ gì nhìn thấy rồi vào quán cà phê",
          id: "Lelah berjalan-jalan, beli apa pun yang terlihat, lalu pergi ke kafe"
        },
        score: 2
      },
      {
        text: {
          ko: "애초에 안 간다. 인터넷 쇼핑이 최고다",
          en: "Don't go in the first place. Online shopping is the best",
          ja: "最初から行かない。ネットショッピングが最高だ",
          'zh-CN': "根本不去。网购最好",
          'zh-TW': "根本不去。網購最好",
          vi: "Không đi từ đầu. Mua sắm trực tuyến là tốt nhất",
          id: "Tidak pergi sejak awal. Belanja online adalah yang terbaik"
        },
        score: 3
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "화장실이 너무 급한데 침대에 누워있다면?",
      en: "You really need to use the bathroom but you're lying in bed?",
      ja: "トイレがすごく急なのにベッドに横になっているなら？",
      'zh-CN': "急需上厕所但还躺在床上？",
      'zh-TW': "急需上廁所但還躺在床上？",
      vi: "Rất cần đi vệ sinh nhưng đang nằm trên giường?",
      id: "Sangat perlu ke toilet tapi sedang berbaring di tempat tidur?"
    },
    options: [
      {
        text: {
          ko: "신호가 오자마자 바로 화장실로 간다",
          en: "Go to the bathroom immediately when the signal comes",
          ja: "信号が来たらすぐにトイレに行く",
          'zh-CN': "信号一来立即去洗手间",
          'zh-TW': "信號一來立即去洗手間",
          vi: "Đi vệ sinh ngay khi có tín hiệu",
          id: "Langsung ke kamar mandi saat sinyal datang"
        },
        score: 0
      },
      {
        text: {
          ko: "참을 수 있을 때까지 참다가 한계에 도달하면 간다",
          en: "Hold it until I can't anymore, then go when I reach my limit",
          ja: "我慢できるまで我慢して、限界に達したら行く",
          'zh-CN': "能忍就忍，到极限了再去",
          'zh-TW': "能忍就忍，到極限了再去",
          vi: "Cố gắng nhịn cho đến khi không thể chịu được nữa thì đi",
          id: "Tahan sampai tidak bisa lagi, lalu pergi saat mencapai batas"
        },
        score: 1
      },
      {
        text: {
          ko: "폰 보면서 조금 더 버텨본다",
          en: "Look at phone and try to hold it a bit longer",
          ja: "スマホを見ながらもう少し我慢してみる",
          'zh-CN': "看手机，再忍一会儿",
          'zh-TW': "看手機，再忍一會兒",
          vi: "Xem điện thoại và cố gắng nhịn thêm một chút",
          id: "Lihat ponsel dan coba tahan sedikit lebih lama"
        },
        score: 2
      },
      {
        text: {
          ko: "다시 잠을 청해서 요의를 잊어보려 노력한다",
          en: "Try to fall back asleep to forget the urge",
          ja: "また眠りについて尿意を忘れようとする",
          'zh-CN': "试图重新入睡来忘记尿意",
          'zh-TW': "試圖重新入睡來忘記尿意",
          vi: "Cố gắng ngủ lại để quên đi cảm giác muốn đi",
          id: "Mencoba tertidur lagi untuk melupakan keinginan"
        },
        score: 3
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "해야 할 과제나 업무가 있을 때?",
      en: "When you have assignments or work to do?",
      ja: "やらなければならない課題や仕事があるとき？",
      'zh-CN': "有作业或工作要做时？",
      'zh-TW': "有作業或工作要做時？",
      vi: "Khi có bài tập hoặc công việc cần làm?",
      id: "Ketika Anda memiliki tugas atau pekerjaan yang harus dilakukan?"
    },
    options: [
      {
        text: {
          ko: "미리미리 해두고 여유롭게 검토까지 마친다",
          en: "Do it well in advance and finish reviewing with time to spare",
          ja: "前もってやって余裕を持って見直しまで終える",
          'zh-CN': "提前完成并从容地检查",
          'zh-TW': "提前完成並從容地檢查",
          vi: "Làm sớm và hoàn thành việc xem xét một cách thoải mái",
          id: "Selesaikan lebih awal dan selesaikan review dengan tenang"
        },
        score: 0
      },
      {
        text: {
          ko: "계획은 세우지만 미루다가 마감 하루 전에 시작한다",
          en: "Make a plan but procrastinate, then start the day before deadline",
          ja: "計画は立てるが先延ばしにして、締切の前日に始める",
          'zh-CN': "制定计划但拖延，截止前一天才开始",
          'zh-TW': "制定計劃但拖延，截止前一天才開始",
          vi: "Lập kế hoạch nhưng trì hoãn, rồi bắt đầu vào ngày trước hạn chót",
          id: "Buat rencana tapi menunda, lalu mulai sehari sebelum tenggat"
        },
        score: 1
      },
      {
        text: {
          ko: "마감 1시간 전, 초인적인 힘을 발휘해 벼락치기 한다",
          en: "One hour before deadline, unleash superhuman power and cram",
          ja: "締切の1時間前、超人的な力を発揮して一夜漬けする",
          'zh-CN': "截止前1小时，发挥超能力突击完成",
          'zh-TW': "截止前1小時，發揮超能力突擊完成",
          vi: "Một giờ trước hạn chót, phát huy sức mạnh siêu nhiên và học cấp tốc",
          id: "Satu jam sebelum tenggat, gunakan kekuatan superhuman dan belajar dengan terburu-buru"
        },
        score: 2
      },
      {
        text: {
          ko: "\"죄송합니다.\" 마감을 넘기고 변명 거리를 생각한다",
          en: "\"Sorry.\" Miss the deadline and think of excuses",
          ja: "「申し訳ありません。」締切を過ぎて言い訳を考える",
          'zh-CN': "「抱歉。」错过截止日期并想借口",
          'zh-TW': "「抱歉。」錯過截止日期並想藉口",
          vi: "\"Xin lỗi.\" Trễ hạn và nghĩ lý do biện minh",
          id: "\"Maaf.\" Melewatkan tenggat dan memikirkan alasan"
        },
        score: 3
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "운동에 대한 당신의 생각은?",
      en: "What do you think about exercise?",
      ja: "運動についてあなたの考えは？",
      'zh-CN': "你对运动的看法是？",
      'zh-TW': "你對運動的看法是？",
      vi: "Bạn nghĩ gì về việc tập thể dục?",
      id: "Apa pendapat Anda tentang olahraga?"
    },
    options: [
      {
        text: {
          ko: "건강을 위해 매일 꾸준히 헬스장이나 산책을 한다",
          en: "Exercise regularly at the gym or take walks daily for health",
          ja: "健康のために毎日コツコツジムや散歩をする",
          'zh-CN': "为了健康每天坚持去健身房或散步",
          'zh-TW': "為了健康每天堅持去健身房或散步",
          vi: "Tập thể dục đều đặn tại phòng gym hoặc đi bộ hàng ngày để khỏe mạnh",
          id: "Berolahraga secara teratur di gym atau jalan-jalan setiap hari untuk kesehatan"
        },
        score: 0
      },
      {
        text: {
          ko: "등록은 해놨는데 가는 날보다 안 가는 날이 더 많다",
          en: "Registered but don't go more days than I do",
          ja: "登録はしたが、行く日より行かない日の方が多い",
          'zh-CN': "注册了但不去的时候比去的时候多",
          'zh-TW': "註冊了但不去的時候比去的時候多",
          vi: "Đã đăng ký nhưng số ngày không đi nhiều hơn số ngày đi",
          id: "Sudah mendaftar tapi hari tidak pergi lebih banyak daripada hari pergi"
        },
        score: 1
      },
      {
        text: {
          ko: "숨쉬기 운동도 힘든데 무슨 운동? 누워있는 게 최고다",
          en: "Even breathing exercises are hard, what exercise? Lying down is best",
          ja: "呼吸運動も大変なのに何の運動？横になっているのが最高だ",
          'zh-CN': "连呼吸运动都累，还做什么运动？躺着最好",
          'zh-TW': "連呼吸運動都累，還做什麼運動？躺著最好",
          vi: "Ngay cả bài tập thở cũng khó, tập gì nữa? Nằm là tốt nhất",
          id: "Bahkan latihan pernapasan saja sulit, latihan apa? Berbaring adalah yang terbaik"
        },
        score: 2
      },
      {
        text: {
          ko: "상상 속에서는 이미 올림픽 금메달리스트다",
          en: "In my imagination, I'm already an Olympic gold medalist",
          ja: "想像の中ではすでにオリンピック金メダリストだ",
          'zh-CN': "想象中已经是奥运金牌得主了",
          'zh-TW': "想像中已經是奧運金牌得主了",
          vi: "Trong tưởng tượng, mình đã là nhà vô địch Olympic rồi",
          id: "Dalam imajinasi, saya sudah menjadi peraih medali emas Olimpiade"
        },
        score: 3
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "누군가 \"지금 뭐 해?\"라고 물었을 때 가장 많이 하는 대답은?",
      en: "When someone asks \"What are you doing now?\", what do you usually answer?",
      ja: "誰かが「今何してる？」と聞いたとき、最もよくする答えは？",
      'zh-CN': "当有人问\"现在在做什么？\"时，你最常回答什么？",
      'zh-TW': "當有人問「現在在做什麼？」時，你最常回答什麼？",
      vi: "Khi ai đó hỏi \"Bây giờ đang làm gì?\", bạn thường trả lời gì nhất?",
      id: "Ketika seseorang bertanya \"Apa yang sedang Anda lakukan sekarang?\", apa yang biasanya Anda jawab?"
    },
    options: [
      {
        text: {
          ko: "\"나 지금 일해 / 운동해 / 공부해\"",
          en: "\"I'm working / exercising / studying now\"",
          ja: "「今仕事してる/運動してる/勉強してる」",
          'zh-CN': "「我现在在工作/运动/学习」",
          'zh-TW': "「我現在在工作/運動/學習」",
          vi: "\"Mình đang làm việc / tập thể dục / học\"",
          id: "\"Saya sedang bekerja / berolahraga / belajar sekarang\""
        },
        score: 0
      },
      {
        text: {
          ko: "\"그냥 있어\"",
          en: "\"Just hanging out\"",
          ja: "「ただいるだけ」",
          'zh-CN': "「只是待着」",
          'zh-TW': "「只是待著」",
          vi: "\"Chỉ đang ở đây thôi\"",
          id: "\"Hanya santai saja\""
        },
        score: 1
      },
      {
        text: {
          ko: "\"누워 있어\"",
          en: "\"Lying down\"",
          ja: "「横になっている」",
          'zh-CN': "「躺着」",
          'zh-TW': "「躺著」",
          vi: "\"Đang nằm\"",
          id: "\"Berbaring\""
        },
        score: 2
      },
      {
        text: {
          ko: "답장 안 함",
          en: "Don't reply",
          ja: "返信しない",
          'zh-CN': "不回复",
          'zh-TW': "不回覆",
          vi: "Không trả lời",
          id: "Tidak membalas"
        },
        score: 3
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "다음 생에 태어난다면 되고 싶은 것은?",
      en: "If you were reborn in the next life, what would you want to be?",
      ja: "次の生まれ変わりでなりたいものは？",
      'zh-CN': "如果下辈子转世，你想成为什么？",
      'zh-TW': "如果下輩子轉世，你想成為什麼？",
      vi: "Nếu được tái sinh ở kiếp sau, bạn muốn trở thành gì?",
      id: "Jika Anda terlahir kembali di kehidupan berikutnya, apa yang ingin Anda jadikan?"
    },
    options: [
      {
        text: {
          ko: "열정 넘치는 사업가나 스포츠 스타",
          en: "Passionate entrepreneur or sports star",
          ja: "情熱あふれる起業家やスポーツスター",
          'zh-CN': "充满热情的企业家或体育明星",
          'zh-TW': "充滿熱情的企業家或體育明星",
          vi: "Doanh nhân đầy nhiệt huyết hoặc ngôi sao thể thao",
          id: "Pengusaha penuh semangat atau bintang olahraga"
        },
        score: 0
      },
      {
        text: {
          ko: "적당히 일하고 많이 버는 건물주",
          en: "Building owner who works moderately but earns a lot",
          ja: "適度に働いてたくさん稼ぐ建物のオーナー",
          'zh-CN': "适度工作但赚很多钱的房东",
          'zh-TW': "適度工作但賺很多錢的房東",
          vi: "Chủ nhà làm việc vừa phải nhưng kiếm nhiều tiền",
          id: "Pemilik gedung yang bekerja cukup tapi menghasilkan banyak"
        },
        score: 1
      },
      {
        text: {
          ko: "주인님이 챙겨주는 집고양이",
          en: "House cat taken care of by owner",
          ja: "飼い主に面倒を見てもらう家猫",
          'zh-CN': "被主人照顾的家猫",
          'zh-TW': "被主人照顧的家貓",
          vi: "Mèo nhà được chủ chăm sóc",
          id: "Kucing rumah yang dirawat pemiliknya"
        },
        score: 2
      },
      {
        text: {
          ko: "아무 생각 없는 돌멩이",
          en: "A thoughtless stone",
          ja: "何も考えない石",
          'zh-CN': "没有思想的石头",
          'zh-TW': "沒有思想的石頭",
          vi: "Hòn đá không suy nghĩ gì",
          id: "Batu yang tidak berpikir"
        },
        score: 3
      }
    ]
  }
];

export const phase2LazinessLevelResults: Phase2LazinessLevelResult[] = [
  {
    type: "Type1",
    emoji: "🐜",
    title: {
      ko: "부지런함 만렙, 갓생 사는 일개미",
      en: "Max Level Diligence, Living the Best Life Ant",
      ja: "勤勉レベルMAX、最高の人生を生きるアリ",
      'zh-CN': "勤奋满级，过最好生活的蚂蚁",
      'zh-TW': "勤奮滿級，過最好生活的螞蟻",
      vi: "Chăm chỉ cấp độ tối đa, kiến sống cuộc sống tốt nhất",
      id: "Diligensi Level Maks, Semut Hidup Terbaik"
    },
    shortDescription: {
      ko: "\"게으름? 그게 뭐죠? 먹는 건가요?\"",
      en: "\"Laziness? What's that? Is it edible?\"",
      ja: "「怠け？それ何？食べ物？」",
      'zh-CN': "「懒惰？那是什么？能吃吗？」",
      'zh-TW': "「懶惰？那是什麼？能吃嗎？」",
      vi: "\"Lười biếng? Cái gì vậy? Có ăn được không?\"",
      id: "\"Kemalasan? Apa itu? Bisa dimakan?\""
    },
    description: {
      ko: "당신은 1분 1초도 허투루 쓰지 않는 계획적인 사람입니다. '귀찮다'는 감정보다 '해야 한다'는 의무감이 더 크며, 하루라도 생산적인 일을 하지 않으면 불안해합니다. 주변 사람들에게 \"제발 좀 쉬어!\"라는 말을 듣기도 하지만, 당신은 바쁘게 움직이는 것에서 에너지를 얻습니다.",
      en: "You are a planned person who doesn't waste a single minute or second. Your sense of duty to 'do what must be done' is stronger than the feeling of 'being bothered', and you feel anxious if you don't do something productive even for a day. You may hear people around you say \"Please rest!\" but you gain energy from moving busily.",
      ja: "あなたは1分1秒も無駄にしない計画的な人です。'面倒だ'という感情よりも'やらなければならない'という義務感の方が強く、1日でも生産的なことをしないと不安になります。周りの人から「どうか休んで！」と言われることもありますが、あなたは忙しく動くことからエネルギーを得ます。",
      'zh-CN': "你是一个有计划的人，不浪费一分一秒。'必须做'的责任感比'麻烦'的感觉更强烈，即使一天不做有成效的事也会感到不安。周围的人可能会说'请休息一下！'但你从忙碌中获得能量。",
      'zh-TW': "你是一個有計劃的人，不浪費一分一秒。'必須做'的責任感比'麻煩'的感覺更強烈，即使一天不做有成效的事也會感到不安。周圍的人可能會說'請休息一下！'但你從忙碌中獲得能量。",
      vi: "Bạn là người có kế hoạch, không lãng phí một phút một giây. Cảm giác nghĩa vụ 'phải làm' mạnh hơn cảm giác 'phiền phức', và bạn cảm thấy lo lắng nếu không làm gì đó hiệu quả dù chỉ một ngày. Bạn có thể nghe mọi người xung quanh nói \"Xin hãy nghỉ ngơi!\" nhưng bạn có được năng lượng từ việc bận rộn.",
      id: "Anda adalah orang yang terencana yang tidak menyia-nyiakan satu menit pun. Rasa kewajiban untuk 'melakukan yang harus dilakukan' lebih kuat daripada perasaan 'terganggu', dan Anda merasa cemas jika tidak melakukan sesuatu yang produktif bahkan untuk sehari. Anda mungkin mendengar orang di sekitar berkata \"Tolong istirahat!\" tapi Anda mendapatkan energi dari bergerak dengan sibuk."
    },
    lazinessLevel: {
      ko: "0% (청정 구역)",
      en: "0% (Clean Zone)",
      ja: "0%（清浄区域）",
      'zh-CN': "0%（清净区域）",
      'zh-TW': "0%（清淨區域）",
      vi: "0% (Vùng sạch sẽ)",
      id: "0% (Zona Bersih)"
    },
    characteristics: {
      ko: "알람 듣자마자 기상, 계획표 필수, 쉴 때도 운동함",
      en: "Wake up immediately when alarm rings, schedule is essential, exercise even when resting",
      ja: "アラームを聞いたらすぐに起床、スケジュール必須、休むときも運動する",
      'zh-CN': "听到闹钟立即起床，必须制定计划，休息时也运动",
      'zh-TW': "聽到鬧鐘立即起床，必須制定計劃，休息時也運動",
      vi: "Tỉnh dậy ngay khi nghe chuông báo thức, lịch trình là bắt buộc, tập thể dục ngay cả khi nghỉ ngơi",
      id: "Bangun segera saat alarm berbunyi, jadwal wajib, berolahraga bahkan saat istirahat"
    },
    goodMatch: {
      ko: "Type 2 (효율적 나무늘보)",
      en: "Type 2 (Efficient Sloth)",
      ja: "Type 2（効率的なナマケモノ）",
      'zh-CN': "Type 2（高效树懒）",
      'zh-TW': "Type 2（高效樹懶）",
      vi: "Type 2 (Lười biếng hiệu quả)",
      id: "Type 2 (Kungkang Efisien)"
    },
    badMatch: {
      ko: "Type 6 (액체 괴물)",
      en: "Type 6 (Liquid Monster)",
      ja: "Type 6（液体モンスター）",
      'zh-CN': "Type 6（液体怪物）",
      'zh-TW': "Type 6（液體怪物）",
      vi: "Type 6 (Quái vật lỏng)",
      id: "Type 6 (Monster Cair)"
    }
  },
  {
    type: "Type2",
    emoji: "🤓",
    title: {
      ko: "효율 추구, 스마트한 귀차니스트",
      en: "Efficiency Seeker, Smart Procrastinator",
      ja: "効率追求、スマートな怠け者",
      'zh-CN': "追求效率，聪明的懒人",
      'zh-TW': "追求效率，聰明的懶人",
      vi: "Theo đuổi hiệu quả, người lười biếng thông minh",
      id: "Pencari Efisiensi, Pemalas Pintar"
    },
    shortDescription: {
      ko: "\"최소한의 움직임으로 최대의 효과를!\"",
      en: "\"Maximum effect with minimum movement!\"",
      ja: "「最小限の動きで最大の効果を！」",
      'zh-CN': "「用最少的动作获得最大的效果！」",
      'zh-TW': "「用最少的動作獲得最大的效果！」",
      vi: "\"Hiệu quả tối đa với chuyển động tối thiểu!\"",
      id: "\"Efek maksimal dengan gerakan minimal!\""
    },
    description: {
      ko: "당신은 무조건 부지런한 것이 아니라, '효율'을 중요하게 생각합니다. 귀찮은 일을 빨리 끝내고 쉬기 위해 머리를 씁니다. 로봇청소기, 식기세척기 등 문명의 이기를 적극 활용하며, 게으름을 피우기 위해 부지런해지는 아이러니한 천재입니다.",
      en: "You don't just work hard unconditionally, but value 'efficiency'. You use your brain to finish annoying tasks quickly so you can rest. You actively utilize modern conveniences like robot vacuums and dishwashers, and are an ironic genius who works hard to be lazy.",
      ja: "あなたは無条件に勤勉なのではなく、'効率'を重要視します。面倒なことを早く終わらせて休むために頭を使います。ロボット掃除機、食洗機などの文明の利器を積極的に活用し、怠けるために勤勉になる皮肉な天才です。",
      'zh-CN': "你不是无条件地勤奋，而是重视'效率'。你动脑筋快速完成烦人的任务以便休息。你积极利用现代便利设施如机器人吸尘器和洗碗机，是一个为了偷懒而勤奋的讽刺天才。",
      'zh-TW': "你不是無條件地勤奮，而是重視'效率'。你動腦筋快速完成煩人的任務以便休息。你積極利用現代便利設施如機器人吸塵器和洗碗機，是一個為了偷懶而勤奮的諷刺天才。",
      vi: "Bạn không chỉ chăm chỉ vô điều kiện, mà coi trọng 'hiệu quả'. Bạn dùng trí não để hoàn thành những việc phiền phức nhanh chóng để có thể nghỉ ngơi. Bạn tích cực sử dụng các tiện ích hiện đại như máy hút bụi robot và máy rửa bát, và là một thiên tài mỉa mai, chăm chỉ để lười biếng.",
      id: "Anda tidak hanya bekerja keras tanpa syarat, tetapi menghargai 'efisiensi'. Anda menggunakan otak untuk menyelesaikan tugas yang mengganggu dengan cepat agar bisa istirahat. Anda secara aktif memanfaatkan kenyamanan modern seperti robot vacuum dan mesin cuci piring, dan adalah jenius ironis yang bekerja keras untuk menjadi malas."
    },
    lazinessLevel: {
      ko: "20% (선택적 부지런함)",
      en: "20% (Selective Diligence)",
      ja: "20%（選択的勤勉）",
      'zh-CN': "20%（选择性勤奋）",
      'zh-TW': "20%（選擇性勤奮）",
      vi: "20% (Chăm chỉ có chọn lọc)",
      id: "20% (Diligensi Selektif)"
    },
    characteristics: {
      ko: "벼락치기 고수, 잔머리 대마왕, 숏컷 키 매니아",
      en: "Cramming expert, shortcut master, keyboard shortcut enthusiast",
      ja: "一夜漬けの達人、小技の大魔王、ショートカットキーのマニア",
      'zh-CN': "突击高手，小聪明大王，快捷键爱好者",
      'zh-TW': "突擊高手，小聰明大王，快捷鍵愛好者",
      vi: "Chuyên gia học cấp tốc, vua mẹo vặt, người đam mê phím tắt",
      id: "Ahli belajar terburu-buru, master jalan pintas, penggemar keyboard shortcut"
    },
    goodMatch: {
      ko: "Type 1 (갓생 사는 일개미)",
      en: "Type 1 (Living the Best Life Ant)",
      ja: "Type 1（最高の人生を生きるアリ）",
      'zh-CN': "Type 1（过最好生活的蚂蚁）",
      'zh-TW': "Type 1（過最好生活的螞蟻）",
      vi: "Type 1 (Kiến sống cuộc sống tốt nhất)",
      id: "Type 1 (Semut Hidup Terbaik)"
    },
    badMatch: {
      ko: "Type 5 (방전된 배터리)",
      en: "Type 5 (Dead Battery)",
      ja: "Type 5（放電されたバッテリー）",
      'zh-CN': "Type 5（没电的电池）",
      'zh-TW': "Type 5（沒電的電池）",
      vi: "Type 5 (Pin hết điện)",
      id: "Type 5 (Baterai Mati)"
    }
  },
  {
    type: "Type3",
    emoji: "🛌",
    title: {
      ko: "평범한 소시민, 주말 한정 시체",
      en: "Ordinary Citizen, Weekend-Only Corpse",
      ja: "平凡な市民、週末限定の死体",
      'zh-CN': "普通市民，仅限周末的尸体",
      'zh-TW': "普通市民，僅限週末的屍體",
      vi: "Công dân bình thường, xác chết chỉ cuối tuần",
      id: "Warga Biasa, Mayat Hanya Akhir Pekan"
    },
    shortDescription: {
      ko: "\"평일엔 열심히, 주말엔 떡실신\"",
      en: "\"Work hard on weekdays, collapse on weekends\"",
      ja: "「平日は一生懸命、週末はへたばる」",
      'zh-CN': "「工作日努力，周末瘫倒」",
      'zh-TW': "「工作日努力，週末癱倒」",
      vi: "\"Ngày thường chăm chỉ, cuối tuần kiệt sức\"",
      id: "\"Bekerja keras di hari kerja, kolaps di akhir pekan\""
    },
    description: {
      ko: "당신은 사회생활을 할 때는 누구보다 성실하지만, 집에만 오면 방전되는 타입입니다. 밖에서는 완벽한 모습을 보여주려 노력하기 때문에 그만큼 에너지를 많이 씁니다. 주말에는 아무것도 안 하고 충전할 시간이 반드시 필요합니다.",
      en: "You are more sincere than anyone in social life, but you're the type who runs out of battery as soon as you get home. You use a lot of energy because you try to show a perfect image outside. On weekends, you absolutely need time to do nothing and recharge.",
      ja: "あなたは社会生活をするときは誰よりも誠実ですが、家に帰ると放電されるタイプです。外では完璧な姿を見せようとするため、それだけエネルギーを多く使います。週末には何もせずに充電する時間が絶対に必要です。",
      'zh-CN': "你在社交生活中比任何人都认真，但一回到家就会没电。因为你在外面努力展现完美形象，所以消耗很多能量。周末你绝对需要什么都不做、充电的时间。",
      'zh-TW': "你在社交生活中比任何人都認真，但一回到家就會沒電。因為你在外面努力展現完美形象，所以消耗很多能量。週末你絕對需要什麼都不做、充電的時間。",
      vi: "Bạn chân thành hơn bất kỳ ai trong cuộc sống xã hội, nhưng bạn là kiểu người hết pin ngay khi về nhà. Bạn sử dụng nhiều năng lượng vì cố gắng thể hiện hình ảnh hoàn hảo bên ngoài. Vào cuối tuần, bạn nhất định cần thời gian để không làm gì và sạc lại.",
      id: "Anda lebih tulus daripada siapa pun dalam kehidupan sosial, tetapi Anda adalah tipe yang kehabisan baterai begitu sampai di rumah. Anda menggunakan banyak energi karena mencoba menunjukkan citra sempurna di luar. Di akhir pekan, Anda benar-benar membutuhkan waktu untuk tidak melakukan apa pun dan mengisi ulang."
    },
    lazinessLevel: {
      ko: "40% (ON/OFF 확실함)",
      en: "40% (Clear ON/OFF)",
      ja: "40%（ON/OFF明確）",
      'zh-CN': "40%（开关分明）",
      'zh-TW': "40%（開關分明）",
      vi: "40% (Bật/Tắt rõ ràng)",
      id: "40% (ON/OFF Jelas)"
    },
    characteristics: {
      ko: "집에 오자마자 옷 갈아입고 눕기, 약속 취소 좋아함",
      en: "Change clothes and lie down as soon as you get home, love cancelling plans",
      ja: "家に帰ったらすぐに着替えて横になる、約束のキャンセルが好き",
      'zh-CN': "一回家就换衣服躺下，喜欢取消约会",
      'zh-TW': "一回家就換衣服躺下，喜歡取消約會",
      vi: "Về nhà là thay quần áo và nằm xuống ngay, thích hủy hẹn",
      id: "Ganti pakaian dan berbaring begitu sampai di rumah, suka membatalkan rencana"
    },
    goodMatch: {
      ko: "Type 4 (이불 밖은 위험해)",
      en: "Type 4 (Outside the Blanket is Dangerous)",
      ja: "Type 4（布団の外は危険）",
      'zh-CN': "Type 4（被子外面很危险）",
      'zh-TW': "Type 4（被子外面很危險）",
      vi: "Type 4 (Bên ngoài chăn rất nguy hiểm)",
      id: "Type 4 (Di Luar Selimut Berbahaya)"
    },
    badMatch: {
      ko: "Type 1 (갓생 사는 일개미)",
      en: "Type 1 (Living the Best Life Ant)",
      ja: "Type 1（最高の人生を生きるアリ）",
      'zh-CN': "Type 1（过最好生活的蚂蚁）",
      'zh-TW': "Type 1（過最好生活的螞蟻）",
      vi: "Type 1 (Kiến sống cuộc sống tốt nhất)",
      id: "Type 1 (Semut Hidup Terbaik)"
    }
  },
  {
    type: "Type4",
    emoji: "🏠",
    title: {
      ko: "집순이/집돌이, 이불 밖은 위험해",
      en: "Homebody, Outside the Blanket is Dangerous",
      ja: "家好き、布団の外は危険",
      'zh-CN': "宅男/宅女，被子外面很危险",
      'zh-TW': "宅男/宅女，被子外面很危險",
      vi: "Người thích ở nhà, bên ngoài chăn rất nguy hiểm",
      id: "Homebody, Di Luar Selimut Berbahaya"
    },
    shortDescription: {
      ko: "\"집에 있는데도 집에 가고 싶다\"",
      en: "\"Even when I'm at home, I want to go home\"",
      ja: "「家にいるのに家に帰りたい」",
      'zh-CN': "「即使在家也想回家」",
      'zh-TW': "「即使在家也想回家」",
      vi: "\"Dù đang ở nhà vẫn muốn về nhà\"",
      id: "\"Meskipun sudah di rumah, ingin pulang ke rumah\""
    },
    description: {
      ko: "당신은 집을 세상에서 가장 사랑합니다. 외출 준비 과정 자체가 큰 스트레스이며, 웬만한 일은 집 안에서 해결하려고 합니다. 배달 어플 VIP이며, 넷플릭스 시리즈 정주행이 취미입니다. 하지만 막상 나가면 잘 노는 반전 매력도 있습니다.",
      en: "You love home more than anything in the world. The process of preparing to go out itself is a huge stress, and you try to solve most things at home. You're a delivery app VIP, and binge-watching Netflix series is your hobby. But you actually have the reverse charm of being fun when you do go out.",
      ja: "あなたは家を世界で最も愛しています。外出の準備過程自体が大きなストレスであり、できるだけ家の中で解決しようとします。デリバリーアプリのVIPであり、Netflixシリーズの一気見が趣味です。しかし、実際に出かけるとよく遊ぶ逆転の魅力もあります。",
      'zh-CN': "你比世界上任何东西都爱家。外出准备过程本身就是很大的压力，你尽量在家里解决事情。你是外卖应用VIP，刷Netflix剧是你的爱好。但当你真的出去时，你也有玩得很好的反转魅力。",
      'zh-TW': "你比世界上任何東西都愛家。外出準備過程本身就是很大的壓力，你盡量在家裡解決事情。你是外賣應用VIP，刷Netflix劇是你的愛好。但當你真的出去時，你也有玩得很好的反轉魅力。",
      vi: "Bạn yêu nhà hơn bất cứ thứ gì trên thế giới. Quá trình chuẩn bị đi ra ngoài đã là một căng thẳng lớn, và bạn cố gắng giải quyết hầu hết mọi thứ ở nhà. Bạn là VIP của ứng dụng giao hàng, và xem liên tục các series Netflix là sở thích của bạn. Nhưng bạn thực sự có sức hút ngược lại là vui vẻ khi bạn thực sự ra ngoài.",
      id: "Anda mencintai rumah lebih dari apa pun di dunia. Proses persiapan untuk keluar sendiri adalah stres besar, dan Anda mencoba menyelesaikan sebagian besar hal di rumah. Anda adalah VIP aplikasi pengiriman, dan menonton serial Netflix secara maraton adalah hobi Anda. Tapi Anda sebenarnya memiliki daya tarik terbalik yang menyenangkan ketika Anda benar-benar keluar."
    },
    lazinessLevel: {
      ko: "60% (집착형 게으름)",
      en: "60% (Obsessive Laziness)",
      ja: "60%（執着型怠け）",
      'zh-CN': "60%（执着型懒惰）",
      'zh-TW': "60%（執著型懶惰）",
      vi: "60% (Lười biếng ám ảnh)",
      id: "60% (Kemalasan Obsesif)"
    },
    characteristics: {
      ko: "씻는 게 제일 큰 일, 홈웨어 수집가",
      en: "Taking a shower is the biggest task, homewear collector",
      ja: "お風呂に入るのが一番大きな仕事、ホームウェア収集家",
      'zh-CN': "洗澡是最大的事，家居服收藏家",
      'zh-TW': "洗澡是最大的事，家居服收藏家",
      vi: "Tắm rửa là việc lớn nhất, người sưu tập đồ mặc ở nhà",
      id: "Mandi adalah tugas terbesar, kolektor pakaian rumah"
    },
    goodMatch: {
      ko: "Type 3 (주말 한정 시체)",
      en: "Type 3 (Weekend-Only Corpse)",
      ja: "Type 3（週末限定の死体）",
      'zh-CN': "Type 3（仅限周末的尸体）",
      'zh-TW': "Type 3（僅限週末的屍體）",
      vi: "Type 3 (Xác chết chỉ cuối tuần)",
      id: "Type 3 (Mayat Hanya Akhir Pekan)"
    },
    badMatch: {
      ko: "Type 2 (스마트한 귀차니스트)",
      en: "Type 2 (Smart Procrastinator)",
      ja: "Type 2（スマートな怠け者）",
      'zh-CN': "Type 2（聪明的懒人）",
      'zh-TW': "Type 2（聰明的懶人）",
      vi: "Type 2 (Người lười biếng thông minh)",
      id: "Type 2 (Pemalas Pintar)"
    }
  },
  {
    type: "Type5",
    emoji: "🔋",
    title: {
      ko: "의욕 제로, 방전된 배터리",
      en: "Zero Motivation, Dead Battery",
      ja: "やる気ゼロ、放電されたバッテリー",
      'zh-CN': "零动力，没电的电池",
      'zh-TW': "零動力，沒電的電池",
      vi: "Không có động lực, pin hết điện",
      id: "Motivasi Nol, Baterai Mati"
    },
    shortDescription: {
      ko: "\"숨 쉬는 것도 귀찮아...\"",
      en: "\"Even breathing is bothersome...\"",
      ja: "「息をするのも面倒...」",
      'zh-CN': "「连呼吸都麻烦...」",
      'zh-TW': "「連呼吸都麻煩...」",
      vi: "\"Ngay cả thở cũng phiền...\"",
      id: "\"Bahkan bernapas pun merepotkan...\""
    },
    description: {
      ko: "당신은 현재 만사 귀찮음의 끝판왕 상태입니다. 해야 할 일이 산더미처럼 쌓여 있어도 \"내일의 내가 하겠지\"라며 미루기 일쑤입니다. 단순한 게으름을 넘어 번아웃이 온 건 아닌지 점검이 필요합니다. 손가락 하나 까딱하기 싫은 상태입니다.",
      en: "You are currently in the ultimate state of being bothered by everything. Even when tasks pile up like a mountain, you keep procrastinating saying \"Tomorrow's me will do it.\" Beyond simple laziness, you may need to check if you're experiencing burnout. You're in a state where you don't even want to lift a finger.",
      ja: "あなたは現在、万事面倒くささの極致状態です。やらなければならないことが山のように積み重なっていても、「明日の自分がやるだろう」と先延ばしにすることばかりです。単純な怠けを超えて、燃え尽き症候群が来ているのではないか点検が必要です。指一本動かすのも嫌な状態です。",
      'zh-CN': "你目前处于万事都嫌麻烦的极致状态。即使要做的事情堆积如山，你也总是拖延说'明天的我会做的'。超越单纯的懒惰，你可能需要检查是否出现了倦怠。你处于连一根手指都不想动的状态。",
      'zh-TW': "你目前處於萬事都嫌麻煩的極致狀態。即使要做的事情堆積如山，你也總是拖延說'明天的我會做的'。超越單純的懶惰，你可能需要檢查是否出現了倦怠。你處於連一根手指都不想動的狀態。",
      vi: "Bạn hiện đang ở trạng thái tột cùng của việc cảm thấy phiền phức với mọi thứ. Ngay cả khi công việc chất đống như núi, bạn vẫn tiếp tục trì hoãn nói \"Ngày mai mình sẽ làm.\" Vượt quá sự lười biếng đơn giản, bạn có thể cần kiểm tra xem mình có đang bị kiệt sức không. Bạn đang ở trạng thái không muốn nhấc một ngón tay.",
      id: "Anda saat ini berada dalam keadaan tertinggi merasa terganggu oleh segalanya. Bahkan ketika tugas menumpuk seperti gunung, Anda terus menunda-nunda dengan mengatakan \"Saya yang besok akan melakukannya.\" Di luar kemalasan sederhana, Anda mungkin perlu memeriksa apakah Anda mengalami kelelahan. Anda berada dalam keadaan di mana Anda bahkan tidak ingin mengangkat satu jari."
    },
    lazinessLevel: {
      ko: "85% (위험 단계)",
      en: "85% (Danger Zone)",
      ja: "85%（危険段階）",
      'zh-CN': "85%（危险阶段）",
      'zh-TW': "85%（危險階段）",
      vi: "85% (Vùng nguy hiểm)",
      id: "85% (Zona Bahaya)"
    },
    characteristics: {
      ko: "미루기의 달인, 누워서 폰 보다가 얼굴에 떨어뜨림",
      en: "Master of procrastination, drop phone on face while lying down",
      ja: "先延ばしの達人、横になってスマホを見ていて顔に落とす",
      'zh-CN': "拖延大师，躺着看手机掉到脸上",
      'zh-TW': "拖延大師，躺著看手機掉到臉上",
      vi: "Bậc thầy trì hoãn, nằm xem điện thoại rồi làm rơi vào mặt",
      id: "Master penunda, menjatuhkan ponsel ke wajah sambil berbaring"
    },
    goodMatch: {
      ko: "Type 6 (액체 괴물)",
      en: "Type 6 (Liquid Monster)",
      ja: "Type 6（液体モンスター）",
      'zh-CN': "Type 6（液体怪物）",
      'zh-TW': "Type 6（液體怪物）",
      vi: "Type 6 (Quái vật lỏng)",
      id: "Type 6 (Monster Cair)"
    },
    badMatch: {
      ko: "Type 1 (갓생 사는 일개미)",
      en: "Type 1 (Living the Best Life Ant)",
      ja: "Type 1（最高の人生を生きるアリ）",
      'zh-CN': "Type 1（过最好生活的蚂蚁）",
      'zh-TW': "Type 1（過最好生活的螞蟻）",
      vi: "Type 1 (Kiến sống cuộc sống tốt nhất)",
      id: "Type 1 (Semut Hidup Terbaik)"
    }
  },
  {
    type: "Type6",
    emoji: "🫠",
    title: {
      ko: "물아일체, 흐물거리는 액체 괴물",
      en: "One with Matter, Flowing Liquid Monster",
      ja: "物我一如、とろとろの液体モンスター",
      'zh-CN': "物我一体，流动的液体怪物",
      'zh-TW': "物我一體，流動的液體怪物",
      vi: "Hợp nhất với vật chất, quái vật lỏng chảy",
      id: "Satu dengan Materi, Monster Cair Mengalir"
    },
    shortDescription: {
      ko: "\"나는 이미 침대와 한 몸이다\"",
      en: "\"I am already one with the bed\"",
      ja: "「私はすでにベッドと一体だ」",
      'zh-CN': "「我已经和床融为一体了」",
      'zh-TW': "「我已經和床融為一體了」",
      vi: "\"Mình đã hợp nhất với giường rồi\"",
      id: "\"Saya sudah menyatu dengan tempat tidur\""
    },
    description: {
      ko: "당신은 인간의 형상을 하고 있지만 사실 액체에 가깝습니다. 중력을 거스르지 않고 바닥이나 침대에 붙어 있으며, 이동할 때도 굴러서 다닙니다. 생존에 필요한 최소한의 활동 외에는 모든 기능을 정지한 상태입니다. 게으름의 신(God)으로 추앙받아 마땅합니다.",
      en: "You have a human form but are actually close to being a liquid. You don't resist gravity and stick to the floor or bed, and when you move, you roll around. All functions are stopped except for the minimum activities needed for survival. You deserve to be revered as the God of Laziness.",
      ja: "あなたは人間の形をしていますが、実際には液体に近いです。重力に逆らわず床やベッドに張り付いており、移動するときも転がって移動します。生存に必要な最小限の活動以外は、すべての機能が停止した状態です。怠けの神として崇拝されるにふさわしいです。",
      'zh-CN': "你拥有人类的外形，但实际上接近液体。你不抵抗重力，粘在地板或床上，移动时也是滚来滚去。除了生存所需的最少活动外，所有功能都处于停止状态。你值得被尊为懒惰之神。",
      'zh-TW': "你擁有人類的外形，但實際上接近液體。你不抵抗重力，粘在地板或床上，移動時也是滾來滾去。除了生存所需的最少活動外，所有功能都處於停止狀態。你值得被尊為懶惰之神。",
      vi: "Bạn có hình dạng con người nhưng thực tế gần như là chất lỏng. Bạn không chống lại trọng lực và dính vào sàn hoặc giường, và khi di chuyển, bạn lăn xung quanh. Tất cả các chức năng đều dừng lại ngoại trừ các hoạt động tối thiểu cần thiết để sinh tồn. Bạn xứng đáng được tôn sùng như Thần Lười Biếng.",
      id: "Anda memiliki bentuk manusia tetapi sebenarnya mendekati cairan. Anda tidak melawan gravitasi dan menempel di lantai atau tempat tidur, dan saat bergerak, Anda berguling-guling. Semua fungsi dihentikan kecuali aktivitas minimum yang diperlukan untuk bertahan hidup. Anda pantas dipuja sebagai Dewa Kemalasan."
    },
    lazinessLevel: {
      ko: "99.9% (해탈의 경지)",
      en: "99.9% (State of Enlightenment)",
      ja: "99.9%（解脱の境地）",
      'zh-CN': "99.9%（解脱的境界）",
      'zh-TW': "99.9%（解脫的境界）",
      vi: "99.9% (Cảnh giới giải thoát)",
      id: "99.9% (Keadaan Pencerahan)"
    },
    characteristics: {
      ko: "화장실 참기 챌린지, 밥 먹는 것도 귀찮음",
      en: "Bathroom holding challenge, even eating is bothersome",
      ja: "トイレを我慢するチャレンジ、ご飯を食べるのも面倒",
      'zh-CN': "憋厕所挑战，连吃饭都麻烦",
      'zh-TW': "憋廁所挑戰，連吃飯都麻煩",
      vi: "Thử thách nhịn đi vệ sinh, ngay cả ăn cũng phiền",
      id: "Tantangan menahan toilet, bahkan makan pun merepotkan"
    },
    goodMatch: {
      ko: "Type 5 (방전된 배터리)",
      en: "Type 5 (Dead Battery)",
      ja: "Type 5（放電されたバッテリー）",
      'zh-CN': "Type 5（没电的电池）",
      'zh-TW': "Type 5（沒電的電池）",
      vi: "Type 5 (Pin hết điện)",
      id: "Type 5 (Baterai Mati)"
    },
    badMatch: {
      ko: "Type 1 (갓생 사는 일개미)",
      en: "Type 1 (Living the Best Life Ant)",
      ja: "Type 1（最高の人生を生きるアリ）",
      'zh-CN': "Type 1（过最好生活的蚂蚁）",
      'zh-TW': "Type 1（過最好生活的螞蟻）",
      vi: "Type 1 (Kiến sống cuộc sống tốt nhất)",
      id: "Type 1 (Semut Hidup Terbaik)"
    }
  }
];

export function calculatePhase2LazinessLevelResult(answers: number[]): string {
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
    // Fallback for any unexpected scores
    return "Type6";
  }
}

