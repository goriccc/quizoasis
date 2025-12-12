export interface TravelStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=1 (J 성향), B=0 (P 성향)
  }[];
}

export interface TravelStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  jScore: Record<string, string>; // J 지수
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const travelStyleQuestions: TravelStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "여행 짐을 쌀 때 당신의 모습은?",
      en: "When packing for a trip, what are you like?",
      ja: "旅行の荷造りをするとき、あなたの様子は？",
      'zh-CN': "打包旅行行李时，你是什么样子？",
      'zh-TW': "打包旅行行李時，你是什麼樣子？",
      vi: "Khi đóng gói hành lý cho chuyến đi, bạn như thế nào?",
      id: "Saat mengemas untuk perjalanan, seperti apa Anda?"
    },
    options: [
      {
        text: {
          ko: "며칠 전부터 체크리스트를 작성해서 하나씩 지워가며 싼다",
          en: "Make a checklist days in advance and pack by checking items off one by one",
          ja: "数日前からチェックリストを作成して、一つずつ消しながら詰める",
          'zh-CN': "提前几天制作清单，逐一勾选打包",
          'zh-TW': "提前幾天製作清單，逐一勾選打包",
          vi: "Làm danh sách kiểm tra vài ngày trước, đóng gói từng món một",
          id: "Buat daftar periksa beberapa hari sebelumnya dan kemas dengan mencentang item satu per satu"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "출발 전날 밤이나 당일에 눈에 보이는 대로 캐리어에 쓸어 담는다",
          en: "Pack the night before or on the day of departure, throwing in whatever I see",
          ja: "出発前夜や当日に目に入るものをそのままスーツケースに詰め込む",
          'zh-CN': "出发前一晚或当天，看到什么就往行李箱里塞",
          'zh-TW': "出發前一晚或當天，看到什麼就往行李箱裡塞",
          vi: "Đóng gói đêm hôm trước hoặc ngày đi, nhét bất cứ thứ gì nhìn thấy vào vali",
          id: "Kemas malam sebelumnya atau pada hari keberangkatan, memasukkan apa pun yang terlihat"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "공항(또는 기차역)에 도착하는 시간은?",
      en: "What time do you arrive at the airport (or train station)?",
      ja: "空港（または駅）に到着する時間は？",
      'zh-CN': "你什么时候到达机场（或火车站）？",
      'zh-TW': "你什麼時候到達機場（或火車站）？",
      vi: "Bạn đến sân bay (hoặc ga tàu) lúc mấy giờ?",
      id: "Jam berapa Anda tiba di bandara (atau stasiun kereta)?"
    },
    options: [
      {
        text: {
          ko: "변수를 대비해 최소 2~3시간 전에는 도착해서 대기한다",
          en: "Arrive at least 2-3 hours early to account for variables and wait",
          ja: "変数を考慮して最低2〜3時間前には到着して待機する",
          'zh-CN': "至少提前2-3小时到达，以防万一并等待",
          'zh-TW': "至少提前2-3小時到達，以防萬一並等待",
          vi: "Đến sớm ít nhất 2-3 giờ để phòng biến cố và chờ đợi",
          id: "Tiba setidaknya 2-3 jam sebelumnya untuk mengantisipasi variabel dan menunggu"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "비행기 놓치지 않을 정도로만 맞춰서 간다",
          en: "Just time it so I don't miss the flight",
          ja: "飛行機に乗り遅れない程度に合わせて行く",
          'zh-CN': "只卡在不会误机的时间",
          'zh-TW': "只卡在不會誤機的時間",
          vi: "Chỉ căn thời gian vừa đủ để không lỡ chuyến bay",
          id: "Hanya menyesuaikan waktu agar tidak ketinggalan pesawat"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "여행 일정을 짤 때 선호하는 방식은?",
      en: "What's your preferred way of planning a trip itinerary?",
      ja: "旅行のスケジュールを組むとき、好みの方法は？",
      'zh-CN': "制定旅行行程时，你偏好什么方式？",
      'zh-TW': "制定旅行行程時，你偏好什麼方式？",
      vi: "Cách bạn thích lập lịch trình du lịch là gì?",
      id: "Apa cara yang Anda sukai saat merencanakan itinerary perjalanan?"
    },
    options: [
      {
        text: {
          ko: "\"10시 기상, 11시 점심, 1시 카페...\" 시간 단위로 동선을 짠다",
          en: "\"Wake up at 10, lunch at 11, cafe at 1...\" Plan the route by the hour",
          ja: "「10時に起床、11時に昼食、1時にカフェ...」時間単位でルートを組む",
          'zh-CN': "\"10点起床，11点午餐，1点咖啡...\" 按小时规划路线",
          'zh-TW': "「10點起床，11點午餐，1點咖啡...」按小時規劃路線",
          vi: "\"10 giờ thức dậy, 11 giờ ăn trưa, 1 giờ cafe...\" Lập lộ trình theo giờ",
          id: "\"Bangun jam 10, makan siang jam 11, kafe jam 1...\" Rencanakan rute per jam"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "\"오전에 성수동, 오후에 홍대.\" 대략적인 지역이나 큰 틀만 잡는다",
          en: "\"Seongsu-dong in the morning, Hongdae in the afternoon.\" Just set rough areas or a general framework",
          ja: "「午前に聖水洞、午後に弘大。」大まかな地域や大きな枠組みだけを決める",
          'zh-CN': "\"上午圣水洞，下午弘大。\" 只设定大概区域或大框架",
          'zh-TW': "「上午聖水洞，下午弘大。」只設定大概區域或大框架",
          vi: "\"Sáng Seongsu-dong, chiều Hongdae.\" Chỉ định khu vực đại khái hoặc khung lớn",
          id: "\"Seongsu-dong di pagi hari, Hongdae di sore hari.\" Hanya menetapkan area kasar atau kerangka besar"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "꼭 가고 싶었던 맛집에 갔는데 대기가 2시간이라면?",
      en: "You go to a restaurant you really wanted to try, but there's a 2-hour wait. What do you do?",
      ja: "どうしても行きたかったレストランに行ったが、2時間待ちだったら？",
      'zh-CN': "去了很想去的餐厅，但要等2小时？",
      'zh-TW': "去了很想去的餐廳，但要等2小時？",
      vi: "Bạn đến nhà hàng rất muốn thử nhưng phải chờ 2 giờ?",
      id: "Anda pergi ke restoran yang sangat ingin dicoba, tetapi ada antrian 2 jam?"
    },
    options: [
      {
        text: {
          ko: "\"이럴 줄 알고 플랜 B를 준비했지.\" 바로 근처 다른 맛집으로 이동한다",
          en: "\"I knew this would happen, so I prepared Plan B.\" Immediately move to another nearby restaurant",
          ja: "「こうなると思ってプランBを準備したよ。」すぐ近くの別のレストランに移動する",
          'zh-CN': "\"我就知道会这样，所以准备了B计划。\" 立即转移到附近另一家餐厅",
          'zh-TW': "「我就知道會這樣，所以準備了B計劃。」立即轉移到附近另一家餐廳",
          vi: "\"Mình biết sẽ thế nên đã chuẩn bị kế hoạch B.\" Ngay lập tức chuyển sang nhà hàng khác gần đó",
          id: "\"Saya tahu ini akan terjadi, jadi saya siapkan Rencana B.\" Segera pindah ke restoran lain di dekatnya"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "\"냄새 미쳤다. 그냥 기다리자.\" 기다리거나 옆에 있는 아무 식당이나 간다",
          en: "\"It smells amazing. Let's just wait.\" Wait or go to any restaurant nearby",
          ja: "「匂いがすごい。そのまま待とう。」待つか、隣にあるどんなレストランでも行く",
          'zh-CN': "\"太香了。就等吧。\" 等待或去旁边任何一家餐厅",
          'zh-TW': "「太香了。就等吧。」等待或去旁邊任何一家餐廳",
          vi: "\"Mùi thơm quá. Cứ đợi thôi.\" Đợi hoặc vào bất kỳ nhà hàng nào bên cạnh",
          id: "\"Aromanya luar biasa. Mari kita tunggu saja.\" Tunggu atau pergi ke restoran mana pun di dekatnya"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "숙소를 예약할 때 당신의 기준은?",
      en: "What are your criteria when booking accommodation?",
      ja: "宿泊施設を予約するとき、あなたの基準は？",
      'zh-CN': "预订住宿时，你的标准是什么？",
      'zh-TW': "預訂住宿時，你的標準是什麼？",
      vi: "Tiêu chí của bạn khi đặt chỗ ở là gì?",
      id: "Apa kriteria Anda saat memesan akomodasi?"
    },
    options: [
      {
        text: {
          ko: "위치, 가격, 조식, 후기까지 꼼꼼하게 비교해서 미리 예약한다",
          en: "Carefully compare location, price, breakfast, reviews, and book in advance",
          ja: "場所、価格、朝食、レビューまで丁寧に比較して事前に予約する",
          'zh-CN': "仔细比较位置、价格、早餐、评价，提前预订",
          'zh-TW': "仔細比較位置、價格、早餐、評價，提前預訂",
          vi: "So sánh kỹ vị trí, giá, bữa sáng, đánh giá và đặt trước",
          id: "Bandingkan dengan teliti lokasi, harga, sarapan, ulasan, dan pesan sebelumnya"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "\"일단 가서 정할까?\" 당일 특가를 노리거나 분위기 보고 결정한다",
          en: "\"Should we just decide when we get there?\" Look for same-day deals or decide based on the vibe",
          ja: "「とりあえず行ってから決めようか？」当日の特価を狙うか、雰囲気を見て決める",
          'zh-CN': "\"到了再决定？\" 寻找当日特价或看氛围决定",
          'zh-TW': "「到了再決定？」尋找當日特價或看氛圍決定",
          vi: "\"Đến đó rồi quyết định?\" Tìm ưu đãi trong ngày hoặc quyết định theo cảm giác",
          id: "\"Haruskah kita putuskan setelah sampai di sana?\" Cari penawaran hari yang sama atau putuskan berdasarkan suasana"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "여행지에서 비가 쏟아져 계획이 틀어졌다면?",
      en: "If it rains heavily at your destination and your plans fall apart?",
      ja: "旅行先で大雨が降って計画が崩れたら？",
      'zh-CN': "如果目的地下大雨，计划被打乱？",
      'zh-TW': "如果目的地下大雨，計劃被打亂？",
      vi: "Nếu trời mưa to ở điểm đến và kế hoạch bị phá vỡ?",
      id: "Jika hujan deras di tujuan dan rencana Anda berantakan?"
    },
    options: [
      {
        text: {
          ko: "실내에서 할 수 있는 박물관이나 쇼핑몰 일정으로 빠르게 수정한다",
          en: "Quickly revise to indoor activities like museums or shopping malls",
          ja: "屋内でできる博物館やショッピングモールのスケジュールに素早く修正する",
          'zh-CN': "快速调整为室内活动，如博物馆或购物中心",
          'zh-TW': "快速調整為室內活動，如博物館或購物中心",
          vi: "Nhanh chóng điều chỉnh sang hoạt động trong nhà như bảo tàng hoặc trung tâm mua sắm",
          id: "Cepat revisi ke aktivitas dalam ruangan seperti museum atau mal"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "\"비 오는 날엔 파전에 막걸리지.\" 숙소에서 빗소리 들으며 쉰다",
          en: "\"Rainy days call for pajeon and makgeolli.\" Rest at the accommodation listening to the rain",
          ja: "「雨の日はパジョンにマッコリだね。」宿泊施設で雨音を聞きながら休む",
          'zh-CN': "\"下雨天就该吃煎饼配米酒。\" 在住处听雨声休息",
          'zh-TW': "「下雨天就該吃煎餅配米酒。」在住處聽雨聲休息",
          vi: "\"Ngày mưa thì ăn bánh xèo với rượu makgeolli.\" Nghỉ ở chỗ ở nghe tiếng mưa",
          id: "\"Hari hujan cocok untuk pajeon dan makgeolli.\" Istirahat di akomodasi sambil mendengarkan hujan"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "다음 날 아침 기상 시간은?",
      en: "What time do you wake up the next morning?",
      ja: "翌朝の起床時間は？",
      'zh-CN': "第二天早上几点起床？",
      'zh-TW': "第二天早上幾點起床？",
      vi: "Sáng hôm sau bạn thức dậy lúc mấy giờ?",
      id: "Jam berapa Anda bangun keesokan paginya?"
    },
    options: [
      {
        text: {
          ko: "알람을 맞춰두고 정해진 시간에 일어나서 조식을 먹는다",
          en: "Set an alarm and wake up at the set time to have breakfast",
          ja: "アラームをセットして決まった時間に起きて朝食を食べる",
          'zh-CN': "设好闹钟，按时起床吃早餐",
          'zh-TW': "設好鬧鐘，按時起床吃早餐",
          vi: "Đặt báo thức và thức dậy đúng giờ để ăn sáng",
          id: "Setel alarm dan bangun pada waktu yang ditentukan untuk sarapan"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "눈 떠지는 시간이 기상 시간이다. 조식은 못 먹을 수도 있다",
          en: "When my eyes open is when I wake up. I might miss breakfast",
          ja: "目が覚めた時間が起床時間。朝食は食べられないかもしれない",
          'zh-CN': "眼睛睁开就是起床时间。可能吃不到早餐",
          'zh-TW': "眼睛睜開就是起床時間。可能吃不到早餐",
          vi: "Khi mắt mở là lúc thức dậy. Có thể bỏ lỡ bữa sáng",
          id: "Ketika mata terbuka adalah waktu bangun. Saya mungkin melewatkan sarapan"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "길을 걷다 우연히 너무 예쁜 소품샵을 발견했다.",
      en: "While walking, you accidentally discover a really cute accessory shop.",
      ja: "歩いていると偶然、とても可愛い雑貨店を発見した。",
      'zh-CN': "走路时偶然发现一家很可爱的杂货店。",
      'zh-TW': "走路時偶然發現一家很可愛的雜貨店。",
      vi: "Đang đi bộ, bạn tình cờ phát hiện một cửa hàng phụ kiện rất dễ thương.",
      id: "Saat berjalan, Anda secara tidak sengaja menemukan toko aksesori yang sangat lucu."
    },
    options: [
      {
        text: {
          ko: "\"다음 일정이 빡빡해.\" 밖에서 사진만 찍고 지나간다",
          en: "\"The next schedule is tight.\" Just take a photo outside and move on",
          ja: "「次の予定が詰まってる。」外から写真だけ撮って通り過ぎる",
          'zh-CN': "\"下一个行程很紧。\" 只在外面拍照就走",
          'zh-TW': "「下一個行程很緊。」只在外面拍照就走",
          vi: "\"Lịch trình tiếp theo gấp.\" Chỉ chụp ảnh bên ngoài rồi đi tiếp",
          id: "\"Jadwal berikutnya ketat.\" Hanya foto dari luar dan lanjutkan"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "\"여긴 운명이야!\" 들어가서 구경하고 쇼핑하며 시간을 보낸다",
          en: "\"This is fate!\" Go in, look around, shop, and spend time there",
          ja: "「ここは運命だ！」入って見て回り、ショッピングして時間を過ごす",
          'zh-CN': "\"这是命运！\" 进去逛逛购物，在那里消磨时间",
          'zh-TW': "「這是命運！」進去逛逛購物，在那裡消磨時間",
          vi: "\"Đây là số phận!\" Vào trong, xem xung quanh, mua sắm và dành thời gian ở đó",
          id: "\"Ini adalah takdir!\" Masuk, melihat-lihat, berbelanja, dan menghabiskan waktu di sana"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "당신의 여행 가방 속 정리 상태는?",
      en: "What's the organization state of your travel bag?",
      ja: "あなたの旅行バッグの中の整理状態は？",
      'zh-CN': "你的旅行包整理得怎么样？",
      'zh-TW': "你的旅行包整理得怎麼樣？",
      vi: "Tình trạng sắp xếp trong túi du lịch của bạn như thế nào?",
      id: "Bagaimana keadaan organisasi tas perjalanan Anda?"
    },
    options: [
      {
        text: {
          ko: "파우치별로 용도를 나누어 칼각으로 정리되어 있다",
          en: "Organized by purpose in separate pouches, everything in its place",
          ja: "ポーチごとに用途を分けてきちんと整理されている",
          'zh-CN': "按用途分装在各个小包里，整理得井井有条",
          'zh-TW': "按用途分裝在各個小包裡，整理得井井有條",
          vi: "Được sắp xếp theo mục đích trong các túi riêng, mọi thứ đều đúng chỗ",
          id: "Diatur berdasarkan tujuan dalam kantong terpisah, semuanya pada tempatnya"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "어디에 뭐가 있는지 뒤져봐야 안다",
          en: "Have to dig around to find where anything is",
          ja: "どこに何があるか探さないとわからない",
          'zh-CN': "得翻找才知道东西在哪里",
          'zh-TW': "得翻找才知道東西在哪裡",
          vi: "Phải lục lọi mới biết thứ gì ở đâu",
          id: "Harus mencari-cari untuk menemukan di mana sesuatu berada"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "여행 마지막 날, 남은 예산(돈)은?",
      en: "On the last day of the trip, what's left of your budget (money)?",
      ja: "旅行の最終日、残りの予算（お金）は？",
      'zh-CN': "旅行最后一天，还剩多少预算（钱）？",
      'zh-TW': "旅行最後一天，還剩多少預算（錢）？",
      vi: "Ngày cuối cùng của chuyến đi, ngân sách (tiền) còn lại là bao nhiêu?",
      id: "Pada hari terakhir perjalanan, berapa sisa anggaran (uang) Anda?"
    },
    options: [
      {
        text: {
          ko: "예산 계획에 맞춰서 거의 딱 맞게 썼다",
          en: "Spent almost exactly according to the budget plan",
          ja: "予算計画に合わせてほぼぴったり使った",
          'zh-CN': "几乎完全按照预算计划花完了",
          'zh-TW': "幾乎完全按照預算計劃花完了",
          vi: "Đã chi gần như đúng theo kế hoạch ngân sách",
          id: "Habis hampir persis sesuai rencana anggaran"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "생각보다 많이 썼거나, 혹은 너무 많이 남았다",
          en: "Spent more than expected, or way too much left over",
          ja: "思ったより多く使ったか、あるいは多すぎるほど残った",
          'zh-CN': "花得比预期多，或者剩得太多",
          'zh-TW': "花得比預期多，或者剩得太多",
          vi: "Đã chi nhiều hơn dự kiến, hoặc còn lại quá nhiều",
          id: "Habis lebih dari yang diharapkan, atau terlalu banyak tersisa"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "여행이 끝나고 집에 돌아왔을 때?",
      en: "When you return home after the trip?",
      ja: "旅行が終わって家に帰ったとき？",
      'zh-CN': "旅行结束后回到家时？",
      'zh-TW': "旅行結束後回到家時？",
      vi: "Khi bạn trở về nhà sau chuyến đi?",
      id: "Ketika Anda kembali ke rumah setelah perjalanan?"
    },
    options: [
      {
        text: {
          ko: "캐리어부터 열어서 빨래를 돌리고 짐을 정리해야 쉴 수 있다",
          en: "Have to open the suitcase, do laundry, and organize luggage before I can rest",
          ja: "スーツケースから開けて洗濯を回し、荷物を整理しないと休めない",
          'zh-CN': "必须打开行李箱，洗衣服，整理行李才能休息",
          'zh-TW': "必須打開行李箱，洗衣服，整理行李才能休息",
          vi: "Phải mở vali, giặt quần áo và sắp xếp hành lý trước khi nghỉ",
          id: "Harus membuka koper, mencuci pakaian, dan mengatur bagasi sebelum bisa istirahat"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "일단 침대에 누워서 여행 사진을 보거나 쉰다",
          en: "Just lie on the bed and look at travel photos or rest",
          ja: "とりあえずベッドに横になって旅行の写真を見たり休んだりする",
          'zh-CN': "先躺在床上看旅行照片或休息",
          'zh-TW': "先躺在床上看旅行照片或休息",
          vi: "Cứ nằm trên giường xem ảnh du lịch hoặc nghỉ ngơi",
          id: "Hanya berbaring di tempat tidur dan melihat foto perjalanan atau istirahat"
        },
        score: 0 // P 성향
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 최고의 여행이란?",
      en: "What is the best trip for you?",
      ja: "あなたにとって最高の旅行とは？",
      'zh-CN': "对你来说最好的旅行是什么？",
      'zh-TW': "對你來說最好的旅行是什麼？",
      vi: "Chuyến đi tuyệt vời nhất đối với bạn là gì?",
      id: "Apa perjalanan terbaik bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "계획대로 착착 진행되어 시간을 알차게 쓴 효율적인 여행",
          en: "An efficient trip that goes smoothly according to plan, making good use of time",
          ja: "計画通りに順調に進んで時間を有効に使った効率的な旅行",
          'zh-CN': "按计划顺利进行，充分利用时间的高效旅行",
          'zh-TW': "按計劃順利進行，充分利用時間的高效旅行",
          vi: "Chuyến đi hiệu quả diễn ra suôn sẻ theo kế hoạch, tận dụng tốt thời gian",
          id: "Perjalanan yang efisien yang berjalan lancar sesuai rencana, memanfaatkan waktu dengan baik"
        },
        score: 1 // J 성향
      },
      {
        text: {
          ko: "우연한 만남과 뜻밖의 사건들이 가득한 낭만적인 여행",
          en: "A romantic trip full of chance encounters and unexpected events",
          ja: "偶然の出会いと予想外の出来事が満ちたロマンチックな旅行",
          'zh-CN': "充满偶然相遇和意外事件的浪漫旅行",
          'zh-TW': "充滿偶然相遇和意外事件的浪漫旅行",
          vi: "Chuyến đi lãng mạn đầy những cuộc gặp gỡ tình cờ và sự kiện bất ngờ",
          id: "Perjalanan romantis penuh pertemuan kebetulan dan peristiwa tak terduga"
        },
        score: 0 // P 성향
      }
    ]
  }
];

export const travelStyleResults: TravelStyleResult[] = [
  {
    type: "Type1",
    emoji: "📊",
    title: {
      ko: "걸어 다니는 엑셀, 초단위 계획러 (Extreme J)",
      en: "Walking Excel, Second-by-Second Planner (Extreme J)",
      ja: "歩くエクセル、秒単位プランナー（極端なJ）",
      'zh-CN': "行走的Excel，秒级计划者（极端J）",
      'zh-TW': "行走的Excel，秒級計劃者（極端J）",
      vi: "Excel biết đi, Người lập kế hoạch từng giây (J cực đoan)",
      id: "Excel Berjalan, Perencana Per Detik (J Ekstrem)"
    },
    shortDescription: {
      ko: "\"내 사전에 시간 낭비란 없다. 완벽 그 자체.\"",
      en: "\"There's no such thing as wasting time in my dictionary. Perfection itself.\"",
      ja: "「私の辞書に時間の無駄はない。完璧そのもの。」",
      'zh-CN': "\"我的字典里没有浪费时间。完美本身。\"",
      'zh-TW': "「我的字典裡沒有浪費時間。完美本身。」",
      vi: "\"Trong từ điển của tôi không có lãng phí thời gian. Chính là sự hoàn hảo.\"",
      id: "\"Tidak ada yang namanya membuang waktu dalam kamus saya. Kesempurnaan itu sendiri.\""
    },
    description: {
      ko: "당신은 여행사가 울고 갈 정도로 완벽한 계획표를 가지고 있습니다. 분 단위로 쪼개진 일정과 맛집, 포토 스팟, 플랜 B까지 모든 것이 준비되어 있습니다. 계획대로 딱딱 맞아떨어질 때 희열을 느끼며, 동행자들에게 \"너랑 오니까 진짜 편하다\"는 소리를 듣습니다.",
      en: "You have such a perfect itinerary that travel agencies would cry. Everything is prepared down to the minute: schedules, restaurants, photo spots, and even Plan B. You feel ecstatic when everything goes exactly according to plan, and your travel companions say \"It's so comfortable traveling with you.\"",
      ja: "あなたは旅行会社が泣いて帰るほど完璧なスケジュール表を持っています。分単位で細かく分けられたスケジュールとレストラン、フォトスポット、プランBまで全てが準備されています。計画通りにぴったり合うときに快感を感じ、同行者から「あなたと来ると本当に楽だ」と言われます。",
      'zh-CN': "你有一份完美到让旅行社都哭的行程表。一切都按分钟准备：行程、餐厅、拍照点，甚至B计划。当一切完全按计划进行时，你会感到兴奋，旅伴们会说\"和你一起旅行真的很舒服\"。",
      'zh-TW': "你有一份完美到讓旅行社都哭的行程表。一切都按分鐘準備：行程、餐廳、拍照點，甚至B計劃。當一切完全按計劃進行時，你會感到興奮，旅伴們會說「和你一起旅行真的很舒服」。",
      vi: "Bạn có một lịch trình hoàn hảo đến mức các công ty du lịch phải khóc. Mọi thứ đều được chuẩn bị từng phút: lịch trình, nhà hàng, điểm chụp ảnh, và cả kế hoạch B. Bạn cảm thấy hưng phấn khi mọi thứ diễn ra đúng như kế hoạch, và bạn đồng hành nói \"Đi với bạn thật thoải mái.\"",
      id: "Anda memiliki itinerary yang begitu sempurna sehingga agen perjalanan akan menangis. Semuanya disiapkan hingga menit: jadwal, restoran, spot foto, dan bahkan Rencana B. Anda merasa gembira ketika semuanya berjalan persis sesuai rencana, dan teman perjalanan Anda berkata \"Sangat nyaman bepergian dengan Anda.\""
    },
    jScore: {
      ko: "99% (파워 계획)",
      en: "99% (Power Planning)",
      ja: "99%（パワープラン）",
      'zh-CN': "99%（强力计划）",
      'zh-TW': "99%（強力計劃）",
      vi: "99% (Lập kế hoạch mạnh mẽ)",
      id: "99% (Perencanaan Kuat)"
    },
    characteristics: {
      ko: "엑셀 파일 공유, 인간 내비게이션",
      en: "Excel file sharing, human navigation",
      ja: "エクセルファイル共有、人間ナビゲーション",
      'zh-CN': "共享Excel文件，人工导航",
      'zh-TW': "共享Excel文件，人工導航",
      vi: "Chia sẻ file Excel, điều hướng con người",
      id: "Berbagi file Excel, navigasi manusia"
    },
    goodMatch: {
      ko: "Type 6 (시키는 대로 잘 따라옴)",
      en: "Type 6 (Follows instructions well)",
      ja: "Type 6（言う通りによく従う）",
      'zh-CN': "Type 6（很好地听从指示）",
      'zh-TW': "Type 6（很好地聽從指示）",
      vi: "Type 6 (Làm theo chỉ dẫn tốt)",
      id: "Type 6 (Mengikuti instruksi dengan baik)"
    },
    badMatch: {
      ko: "Type 5 (계속 딴길로 샘)",
      en: "Type 5 (Keeps going off track)",
      ja: "Type 5（ずっと脇道にそれる）",
      'zh-CN': "Type 5（总是偏离路线）",
      'zh-TW': "Type 5（總是偏離路線）",
      vi: "Type 5 (Liên tục đi lệch hướng)",
      id: "Type 5 (Terus menyimpang dari jalur)"
    }
  },
  {
    type: "Type2",
    emoji: "🚩",
    title: {
      ko: "든든한 리더, 깃발 부대 인솔자 (Strong J)",
      en: "Reliable Leader, Flag Team Guide (Strong J)",
      ja: "頼れるリーダー、旗部隊の引率者（強いJ）",
      'zh-CN': "可靠的领导者，旗帜队领队（强J）",
      'zh-TW': "可靠的領導者，旗幟隊領隊（強J）",
      vi: "Người dẫn đầu đáng tin cậy, Hướng dẫn viên đội cờ (J mạnh)",
      id: "Pemimpin yang Dapat Diandalkan, Pemandu Tim Bendera (J Kuat)"
    },
    shortDescription: {
      ko: "\"나만 믿고 따라와! 실패 없는 여행 보장.\"",
      en: "\"Just trust me and follow! I guarantee a trip without failures.\"",
      ja: "「私だけを信じてついて来て！失敗のない旅行を保証する。」",
      'zh-CN': "\"只要相信我跟着我就行！保证旅行不会失败。\"",
      'zh-TW': "「只要相信我跟著我就行！保證旅行不會失敗。」",
      vi: "\"Chỉ cần tin tôi và đi theo! Tôi đảm bảo chuyến đi không thất bại.\"",
      id: "\"Percayalah pada saya dan ikuti! Saya jamin perjalanan tanpa kegagalan.\""
    },
    description: {
      ko: "당신은 꼼꼼하지만 융통성도 갖춘 리더형입니다. 전체적인 큰 그림을 확실하게 잡고, 중요한 예약은 미리 마쳐둡니다. 돌발 상황이 생겨도 당황하지 않고 빠르게 대처합니다. 함께 여행 가면 가장 믿음직스러운 최고의 여행 메이트입니다.",
      en: "You are a thorough but flexible leader type. You firmly grasp the big picture and take care of important reservations in advance. Even when unexpected situations arise, you don't panic and handle them quickly. When traveling together, you are the most reliable and best travel mate.",
      ja: "あなたは几帳面だが柔軟性も備えたリーダー型です。全体的な大きな絵を確実に把握し、重要な予約は事前に済ませておきます。突発的な状況が発生しても慌てずに素早く対処します。一緒に旅行に行くと最も信頼できる最高の旅行メイトです。",
      'zh-CN': "你是一个细致但灵活的领导型。你牢牢把握大局，提前完成重要预订。即使出现突发情况，你也不会惊慌，能快速应对。一起旅行时，你是最可靠的最佳旅伴。",
      'zh-TW': "你是一個細緻但靈活的領導型。你牢牢把握大局，提前完成重要預訂。即使出現突發情況，你也不會驚慌，能快速應對。一起旅行時，你是最可靠的最佳旅伴。",
      vi: "Bạn là kiểu người dẫn đầu kỹ lưỡng nhưng linh hoạt. Bạn nắm chắc bức tranh tổng thể và xử lý các đặt chỗ quan trọng trước. Ngay cả khi tình huống bất ngờ xảy ra, bạn không hoảng sợ và xử lý nhanh chóng. Khi đi du lịch cùng nhau, bạn là bạn đồng hành đáng tin cậy nhất.",
      id: "Anda adalah tipe pemimpin yang teliti tetapi fleksibel. Anda dengan kuat memahami gambaran besar dan menangani reservasi penting sebelumnya. Bahkan ketika situasi tak terduga muncul, Anda tidak panik dan menanganinya dengan cepat. Saat bepergian bersama, Anda adalah teman perjalanan yang paling dapat diandalkan."
    },
    jScore: {
      ko: "80% (리더십)",
      en: "80% (Leadership)",
      ja: "80%（リーダーシップ）",
      'zh-CN': "80%（领导力）",
      'zh-TW': "80%（領導力）",
      vi: "80% (Khả năng lãnh đạo)",
      id: "80% (Kepemimpinan)"
    },
    characteristics: {
      ko: "맛집 예약 필수, 총무 담당",
      en: "Must book restaurants, handles finances",
      ja: "レストラン予約必須、総務担当",
      'zh-CN': "必须预订餐厅，负责财务",
      'zh-TW': "必須預訂餐廳，負責財務",
      vi: "Phải đặt nhà hàng, phụ trách tài chính",
      id: "Harus memesan restoran, menangani keuangan"
    },
    goodMatch: {
      ko: "Type 5 (리액션 좋음)",
      en: "Type 5 (Good reactions)",
      ja: "Type 5（リアクションが良い）",
      'zh-CN': "Type 5（反应好）",
      'zh-TW': "Type 5（反應好）",
      vi: "Type 5 (Phản ứng tốt)",
      id: "Type 5 (Reaksi bagus)"
    },
    badMatch: {
      ko: "Type 3 (사사건건 태클 검)",
      en: "Type 3 (Constantly nitpicks)",
      ja: "Type 3（些細なことに口出しする）",
      'zh-CN': "Type 3（总是挑刺）",
      'zh-TW': "Type 3（總是挑刺）",
      vi: "Type 3 (Luôn chỉ trích)",
      id: "Type 3 (Terus-menerus mengkritik)"
    }
  },
  {
    type: "Type3",
    emoji: "📱",
    title: {
      ko: "효율 추구, 스마트한 타협가 (Weak J)",
      en: "Efficiency Seeker, Smart Compromiser (Weak J)",
      ja: "効率追求、スマートな妥協者（弱いJ）",
      'zh-CN': "追求效率，聪明的妥协者（弱J）",
      'zh-TW': "追求效率，聰明的妥協者（弱J）",
      vi: "Người theo đuổi hiệu quả, Người thỏa hiệp thông minh (J yếu)",
      id: "Pencari Efisiensi, Kompromi Cerdas (J Lemah)"
    },
    shortDescription: {
      ko: "\"굵직한 건 정하고, 자잘한 건 가서 보자.\"",
      en: "\"Let's decide the big things, and see about the small things when we get there.\"",
      ja: "「大きなことは決めて、細かいことは行ってから見よう。」",
      'zh-CN': "\"重要的事先定好，小事到了再看。\"",
      'zh-TW': "「重要的事先定好，小事到了再看。」",
      vi: "\"Quyết định những việc lớn, còn việc nhỏ đến đó rồi tính.\"",
      id: "\"Mari putuskan hal-hal besar, dan lihat hal-hal kecil saat kita sampai di sana.\""
    },
    description: {
      ko: "당신은 빡빡한 일정보다는 효율을 중시합니다. 숙소와 교통편 같은 필수적인 것은 미리 예약하지만, 식사 메뉴나 세부 일정은 상황에 따라 유연하게 변경합니다. 계획과 자유의 균형을 잘 맞추는 스마트한 여행자입니다.",
      en: "You prioritize efficiency over tight schedules. You book essentials like accommodation and transportation in advance, but flexibly change meal menus or detailed schedules based on the situation. You are a smart traveler who balances planning and freedom well.",
      ja: "あなたは詰め込んだスケジュールよりも効率を重視します。宿泊施設や交通手段のような必須事項は事前に予約しますが、食事メニューや詳細なスケジュールは状況に応じて柔軟に変更します。計画と自由のバランスをうまく取るスマートな旅行者です。",
      'zh-CN': "你优先考虑效率而非紧凑的行程。你提前预订住宿和交通等必需品，但会根据情况灵活改变用餐菜单或详细行程。你是一个聪明旅行者，能很好地平衡计划与自由。",
      'zh-TW': "你優先考慮效率而非緊湊的行程。你提前預訂住宿和交通等必需品，但會根據情況靈活改變用餐菜單或詳細行程。你是一個聰明旅行者，能很好地平衡計劃與自由。",
      vi: "Bạn ưu tiên hiệu quả hơn lịch trình chặt chẽ. Bạn đặt trước những thứ cần thiết như chỗ ở và phương tiện đi lại, nhưng linh hoạt thay đổi thực đơn bữa ăn hoặc lịch trình chi tiết tùy tình huống. Bạn là một du khách thông minh cân bằng tốt giữa kế hoạch và tự do.",
      id: "Anda memprioritaskan efisiensi daripada jadwal yang ketat. Anda memesan hal-hal penting seperti akomodasi dan transportasi sebelumnya, tetapi secara fleksibel mengubah menu makanan atau jadwal detail berdasarkan situasi. Anda adalah pelancong cerdas yang menyeimbangkan perencanaan dan kebebasan dengan baik."
    },
    jScore: {
      ko: "60% (밸런스)",
      en: "60% (Balance)",
      ja: "60%（バランス）",
      'zh-CN': "60%（平衡）",
      'zh-TW': "60%（平衡）",
      vi: "60% (Cân bằng)",
      id: "60% (Keseimbangan)"
    },
    characteristics: {
      ko: "구글 맵 즐겨찾기, 현지 상황 반영",
      en: "Google Maps favorites, reflects local situation",
      ja: "Googleマップお気に入り、現地状況を反映",
      'zh-CN': "Google地图收藏，反映当地情况",
      'zh-TW': "Google地圖收藏，反映當地情況",
      vi: "Yêu thích Google Maps, phản ánh tình huống địa phương",
      id: "Favorit Google Maps, mencerminkan situasi lokal"
    },
    goodMatch: {
      ko: "Type 4 (비슷한 성향)",
      en: "Type 4 (Similar tendencies)",
      ja: "Type 4（似たような傾向）",
      'zh-CN': "Type 4（相似倾向）",
      'zh-TW': "Type 4（相似傾向）",
      vi: "Type 4 (Xu hướng tương tự)",
      id: "Type 4 (Kecenderungan serupa)"
    },
    badMatch: {
      ko: "Type 1 (너무 빡빡해서 숨 막힘)",
      en: "Type 1 (Too tight, can't breathe)",
      ja: "Type 1（詰め込みすぎて息が詰まる）",
      'zh-CN': "Type 1（太紧，喘不过气）",
      'zh-TW': "Type 1（太緊，喘不過氣）",
      vi: "Type 1 (Quá chặt, không thở được)",
      id: "Type 1 (Terlalu ketat, tidak bisa bernapas)"
    }
  },
  {
    type: "Type4",
    emoji: "📸",
    title: {
      ko: "감성 충만, 낭만 여행자 (Weak P)",
      en: "Emotion-Filled, Romantic Traveler (Weak P)",
      ja: "感性満載、ロマンチックな旅行者（弱いP）",
      'zh-CN': "感性满满，浪漫旅行者（弱P）",
      'zh-TW': "感性滿滿，浪漫旅行者（弱P）",
      vi: "Đầy cảm xúc, Du khách lãng mạn (P yếu)",
      id: "Penuh Emosi, Pelancong Romantis (P Lemah)"
    },
    shortDescription: {
      ko: "\"이 분위기, 이 조명... 여기가 오늘 내 누울 자리.\"",
      en: "\"This atmosphere, this lighting... This is where I'll rest today.\"",
      ja: "「この雰囲気、この照明...ここが今日の私の休む場所。」",
      'zh-CN': "\"这氛围，这灯光... 这就是我今天休息的地方。\"",
      'zh-TW': "「這氛圍，這燈光... 這就是我今天休息的地方。」",
      vi: "\"Không khí này, ánh sáng này... Đây là nơi mình sẽ nghỉ hôm nay.\"",
      id: "\"Suasana ini, pencahayaan ini... Ini adalah tempat saya akan beristirahat hari ini.\""
    },
    description: {
      ko: "당신은 계획보다는 그날의 기분과 분위기를 중요하게 생각합니다. 관광지를 찍고 다니는 것보다, 예쁜 카페에 앉아 멍 때리거나 골목길을 산책하는 것을 선호합니다. \"좋다~\"라는 말을 연발하며 여행의 낭만을 즐길 줄 아는 사람입니다.",
      en: "You value the day's mood and atmosphere more than plans. Rather than rushing around tourist spots, you prefer sitting in a cute cafe spacing out or strolling through alleys. You know how to enjoy the romance of travel, constantly saying \"Nice~\"",
      ja: "あなたは計画よりもその日の気分と雰囲気を大切にします。観光地を回るよりも、可愛いカフェに座ってぼーっとしたり、路地を散歩することを好みます。「いいな〜」という言葉を連発しながら旅行のロマンスを楽しむことができる人です。",
      'zh-CN': "你更重视当天的情绪和氛围，而不是计划。比起到处跑景点，你更喜欢坐在可爱的咖啡馆里发呆或在巷子里散步。你懂得享受旅行的浪漫，不断说\"真好~\"。",
      'zh-TW': "你更重視當天的情緒和氛圍，而不是計劃。比起到處跑景點，你更喜歡坐在可愛的咖啡館裡發呆或在巷子裡散步。你懂得享受旅行的浪漫，不斷說「真好~」。",
      vi: "Bạn coi trọng tâm trạng và không khí của ngày hôm đó hơn kế hoạch. Thay vì chạy khắp các điểm du lịch, bạn thích ngồi trong quán cà phê dễ thương để thả hồn hoặc đi dạo trong ngõ hẻm. Bạn biết cách tận hưởng sự lãng mạn của du lịch, liên tục nói \"Tuyệt~\"",
      id: "Anda menghargai suasana hati dan atmosfer hari itu lebih dari rencana. Daripada berkeliling ke tempat-tempat wisata, Anda lebih suka duduk di kafe yang lucu sambil melamun atau berjalan-jalan di gang. Anda tahu cara menikmati romansa perjalanan, terus-menerus mengatakan \"Bagus~\""
    },
    jScore: {
      ko: "40% (감성 중심)",
      en: "40% (Emotion-centered)",
      ja: "40%（感性中心）",
      'zh-CN': "40%（以感性为中心）",
      'zh-TW': "40%（以感性為中心）",
      vi: "40% (Tập trung cảm xúc)",
      id: "40% (Berpusat pada emosi)"
    },
    characteristics: {
      ko: "사진 백만 장, 카페 투어",
      en: "A million photos, cafe tours",
      ja: "写真100万枚、カフェツアー",
      'zh-CN': "百万张照片，咖啡馆之旅",
      'zh-TW': "百萬張照片，咖啡館之旅",
      vi: "Một triệu bức ảnh, tour cà phê",
      id: "Satu juta foto, tur kafe"
    },
    goodMatch: {
      ko: "Type 3 (적당히 잡아줌)",
      en: "Type 3 (Keeps things in check)",
      ja: "Type 3（適度に引っ張ってくれる）",
      'zh-CN': "Type 3（适度控制）",
      'zh-TW': "Type 3（適度控制）",
      vi: "Type 3 (Giữ mọi thứ trong tầm kiểm soát)",
      id: "Type 3 (Menjaga hal-hal tetap terkendali)"
    },
    badMatch: {
      ko: "Type 1 (빨리 이동하자고 재촉함)",
      en: "Type 1 (Urges to move quickly)",
      ja: "Type 1（早く移動しようと急かす）",
      'zh-CN': "Type 1（催促快速移动）",
      'zh-TW': "Type 1（催促快速移動）",
      vi: "Type 1 (Thúc giục di chuyển nhanh)",
      id: "Type 1 (Mendesak untuk bergerak cepat)"
    }
  },
  {
    type: "Type5",
    emoji: "🎒",
    title: {
      ko: "발길 닿는 대로, 자유로운 보헤미안 (Strong P)",
      en: "Wherever My Feet Take Me, Free Bohemian (Strong P)",
      ja: "足の向くまま、自由なボヘミアン（強いP）",
      'zh-CN': "随性而行，自由的波西米亚人（强P）",
      'zh-TW': "隨性而行，自由的波西米亞人（強P）",
      vi: "Đi theo bước chân, Người Bohemian tự do (P mạnh)",
      id: "Ke Mana Kaki Membawa, Bohemian Bebas (P Kuat)"
    },
    shortDescription: {
      ko: "\"지도가 왜 필요해? 길 잃은 곳이 곧 여행지야.\"",
      en: "\"Why do I need a map? The place where I get lost is the destination.\"",
      ja: "「地図がなぜ必要？道に迷った場所が旅行先だよ。」",
      'zh-CN': "\"为什么需要地图？迷路的地方就是目的地。\"",
      'zh-TW': "「為什麼需要地圖？迷路的地方就是目的地。」",
      vi: "\"Tại sao cần bản đồ? Nơi mình lạc đường chính là điểm đến.\"",
      id: "\"Mengapa saya perlu peta? Tempat di mana saya tersesat adalah tujuannya.\""
    },
    description: {
      ko: "당신은 호기심이 많고 모험을 즐깁니다. 유명한 관광지보다는 현지인들이 가는 로컬 플레이스를 선호합니다. 계획이 틀어져도 스트레스받지 않고, 오히려 \"재밌는 에피소드가 생겼네\"라고 생각합니다. 어디로 튈지 모르는 매력이 있습니다.",
      en: "You are very curious and enjoy adventure. You prefer local places where locals go rather than famous tourist spots. Even when plans fall apart, you don't get stressed and instead think \"This is an interesting episode.\" You have a charm that makes it unpredictable where you'll go.",
      ja: "あなたは好奇心が強く、冒険を楽しみます。有名な観光地よりも現地の人が行くローカルな場所を好みます。計画が崩れてもストレスを感じず、むしろ「面白いエピソードができたね」と考えます。どこに飛ぶかわからない魅力があります。",
      'zh-CN': "你非常好奇，喜欢冒险。你更喜欢当地人去的本地地方，而不是著名景点。即使计划被打乱，你也不会感到压力，反而认为\"这是一个有趣的插曲\"。你有一种魅力，让人不知道你会去哪里。",
      'zh-TW': "你非常好奇，喜歡冒險。你更喜歡當地人去的本地地方，而不是著名景點。即使計劃被打亂，你也不會感到壓力，反而認為「這是一個有趣的插曲」。你有一種魅力，讓人不知道你會去哪裡。",
      vi: "Bạn rất tò mò và thích phiêu lưu. Bạn thích những nơi địa phương mà người dân địa phương đến hơn là các điểm du lịch nổi tiếng. Ngay cả khi kế hoạch bị phá vỡ, bạn không căng thẳng và thay vào đó nghĩ \"Đây là một tập thú vị.\" Bạn có sức hút khiến người ta không biết bạn sẽ đi đâu.",
      id: "Anda sangat penasaran dan menikmati petualangan. Anda lebih suka tempat lokal yang dikunjungi penduduk setempat daripada tempat wisata terkenal. Bahkan ketika rencana berantakan, Anda tidak stres dan malah berpikir \"Ini adalah episode yang menarik.\" Anda memiliki pesona yang membuat tidak terduga ke mana Anda akan pergi."
    },
    jScore: {
      ko: "20% (즉흥적)",
      en: "20% (Spontaneous)",
      ja: "20%（即興的）",
      'zh-CN': "20%（即兴）",
      'zh-TW': "20%（即興）",
      vi: "20% (Tự phát)",
      id: "20% (Spontan)"
    },
    characteristics: {
      ko: "현지인과 친구 됨, 낮술 가능",
      en: "Becomes friends with locals, possible daytime drinking",
      ja: "現地人と友達になる、昼酒可能",
      'zh-CN': "和当地人交朋友，可能白天喝酒",
      'zh-TW': "和當地人交朋友，可能白天喝酒",
      vi: "Kết bạn với người địa phương, có thể uống rượu ban ngày",
      id: "Berteman dengan penduduk lokal, mungkin minum di siang hari"
    },
    goodMatch: {
      ko: "Type 2 (나를 챙겨줌)",
      en: "Type 2 (Takes care of me)",
      ja: "Type 2（私を気にかけてくれる）",
      'zh-CN': "Type 2（照顾我）",
      'zh-TW': "Type 2（照顧我）",
      vi: "Type 2 (Chăm sóc mình)",
      id: "Type 2 (Merawat saya)"
    },
    badMatch: {
      ko: "Type 1 (잔소리 폭탄)",
      en: "Type 1 (Nagging bomb)",
      ja: "Type 1（小言爆弾）",
      'zh-CN': "Type 1（唠叨炸弹）",
      'zh-TW': "Type 1（嘮叨炸彈）",
      vi: "Type 1 (Bom cằn nhằn)",
      id: "Type 1 (Bom omelan)"
    }
  },
  {
    type: "Type6",
    emoji: "🛌",
    title: {
      ko: "무계획이 상팔자, 침대와 물아일체 (Extreme P)",
      en: "No Plan is Best, One with the Bed (Extreme P)",
      ja: "無計画が上八、ベッドと一体化（極端なP）",
      'zh-CN': "无计划是上策，与床融为一体（极端P）",
      'zh-TW': "無計劃是上策，與床融為一體（極端P）",
      vi: "Không kế hoạch là tốt nhất, Hòa làm một với giường (P cực đoan)",
      id: "Tanpa Rencana Adalah Terbaik, Menyatu dengan Tempat Tidur (P Ekstrem)"
    },
    shortDescription: {
      ko: "\"일단 가서 생각하자. (가서도 생각 안 함)\"",
      en: "\"Let's just go and think about it. (Don't think about it even after going)\"",
      ja: "「とりあえず行って考えよう。（行っても考えない）」",
      'zh-CN': "\"先去了再想。（去了也不想）\"",
      'zh-TW': "「先去了再想。（去了也不想）」",
      vi: "\"Cứ đi đã rồi tính. (Đi rồi cũng không tính)\"",
      id: "\"Mari kita pergi dan pikirkan. (Tidak memikirkannya bahkan setelah pergi)\""
    },
    description: {
      ko: "당신에게 여행은 '휴식' 그 자체입니다. 바쁘게 돌아다니는 것은 질색이며, 숙소에서 늦잠 자고 배달 음식 시켜 먹는 것도 최고의 여행이라고 생각합니다. \"어디 갈까?\"라고 물으면 \"아무거나\"라고 대답하며 흐름에 몸을 맡깁니다.",
      en: "For you, travel is 'rest' itself. You hate rushing around, and think sleeping in at the accommodation and ordering delivery food is the best trip. When asked \"Where should we go?\" you answer \"Anything\" and go with the flow.",
      ja: "あなたにとって旅行は「休息」そのものです。忙しく動き回ることは大嫌いで、宿泊施設で遅くまで寝て出前を取ることも最高の旅行だと思っています。「どこに行こうか？」と聞かれると「何でもいい」と答えて流れに身を任せます。",
      'zh-CN': "对你来说，旅行就是'休息'本身。你讨厌到处奔波，认为在住处睡懒觉和点外卖也是最好的旅行。当被问\"去哪里？\"时，你回答\"随便\"，随波逐流。",
      'zh-TW': "對你來說，旅行就是「休息」本身。你討厭到處奔波，認為在住處睡懶覺和點外賣也是最好的旅行。當被問「去哪裡？」時，你回答「隨便」，隨波逐流。",
      vi: "Đối với bạn, du lịch chính là 'nghỉ ngơi'. Bạn ghét việc chạy vòng vòng, và nghĩ rằng ngủ nướng ở chỗ ở và gọi đồ ăn giao tận nơi cũng là chuyến đi tuyệt vời nhất. Khi được hỏi \"Đi đâu?\" bạn trả lời \"Gì cũng được\" và để mọi thứ tự nhiên.",
      id: "Bagi Anda, perjalanan adalah 'istirahat' itu sendiri. Anda benci berkeliling dengan sibuk, dan berpikir tidur sampai larut di akomodasi dan memesan makanan pesan antar adalah perjalanan terbaik. Ketika ditanya \"Ke mana kita harus pergi?\" Anda menjawab \"Apa saja\" dan mengikuti arus."
    },
    jScore: {
      ko: "1% (무소유)",
      en: "1% (Non-possession)",
      ja: "1%（無所有）",
      'zh-CN': "1%（无所有）",
      'zh-TW': "1%（無所有）",
      vi: "1% (Không sở hữu)",
      id: "1% (Tanpa kepemilikan)"
    },
    characteristics: {
      ko: "캐리어 당일 짐 싸기, 호캉스 선호",
      en: "Packs luggage on the day, prefers staycations",
      ja: "当日に荷造り、ステイケーション好み",
      'zh-CN': "当天打包行李，偏好宅度假",
      'zh-TW': "當天打包行李，偏好宅度假",
      vi: "Đóng gói hành lý trong ngày, thích staycation",
      id: "Mengemas bagasi pada hari yang sama, lebih suka staycation"
    },
    goodMatch: {
      ko: "Type 1 (알아서 다 해줌)",
      en: "Type 1 (Takes care of everything)",
      ja: "Type 1（全てやってくれる）",
      'zh-CN': "Type 1（包办一切）",
      'zh-TW': "Type 1（包辦一切）",
      vi: "Type 1 (Lo hết mọi thứ)",
      id: "Type 1 (Mengurus segalanya)"
    },
    badMatch: {
      ko: "Type 6 (둘이 가면 호텔 밖으로 안 나옴)",
      en: "Type 6 (If we go together, we won't leave the hotel)",
      ja: "Type 6（二人で行くとホテルから出ない）",
      'zh-CN': "Type 6（两人一起去就不出酒店）",
      'zh-TW': "Type 6（兩人一起去就不出酒店）",
      vi: "Type 6 (Nếu đi cùng nhau sẽ không ra khỏi khách sạn)",
      id: "Type 6 (Jika kita pergi bersama, kita tidak akan keluar dari hotel)"
    }
  }
];

// 답변 배열을 받아서 총점을 계산하고, 점수에 따라 Type을 반환
// 총점 0~12점
// 11~12점: Type 1
// 9~10점: Type 2
// 7~8점: Type 3
// 5~6점: Type 4
// 3~4점: Type 5
// 0~2점: Type 6
export function calculateTravelStyleResult(answers: number[]): string {
  // answers는 각 질문에 대한 선택된 option의 score 배열
  // 예: [1, 1, 0, 1, 0, ...]
  
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 11) {
    return "Type1";
  } else if (totalScore >= 9) {
    return "Type2";
  } else if (totalScore >= 7) {
    return "Type3";
  } else if (totalScore >= 5) {
    return "Type4";
  } else if (totalScore >= 3) {
    return "Type5";
  } else {
    return "Type6";
  }
}
