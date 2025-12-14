export interface Phase2DreamCarQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2DreamCarResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  recommendedModels: Record<string, string>; // 추천 모델
  keywords: Record<string, string>; // 키워드
}

export const phase2DreamCarQuestions: Phase2DreamCarQuestion[] = [
  {
    id: 1,
    question: {
      ko: "당신이 차를 사는 가장 큰 이유는 무엇인가요?",
      en: "What is the biggest reason you buy a car?",
      ja: "車を買う最大の理由は何ですか？",
      "zh-CN": "你买车最大的原因是什么？",
      "zh-TW": "你買車最大的原因是什麼？",
      vi: "Lý do lớn nhất bạn mua xe là gì?",
      id: "Apa alasan terbesar Anda membeli mobil?"
    },
    options: [
      {
        text: {
          ko: "출퇴근이나 마트 장보기 등 실용적인 이동을 위해",
          en: "For practical transportation like commuting or grocery shopping",
          ja: "通勤や買い物など実用的な移動のため",
          "zh-CN": "为了实用的出行，如通勤或购物",
          "zh-TW": "為了實用的出行，如通勤或購物",
          vi: "Để di chuyển thực tế như đi làm hoặc mua sắm",
          id: "Untuk transportasi praktis seperti pergi kerja atau belanja"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "나만의 사회적 지위와 성공을 보여주기 위해",
          en: "To show my social status and success",
          ja: "自分の社会的地位と成功を示すため",
          "zh-CN": "为了展示我的社会地位和成功",
          "zh-TW": "為了展示我的社會地位和成功",
          vi: "Để thể hiện địa vị xã hội và thành công của mình",
          id: "Untuk menunjukkan status sosial dan kesuksesan saya"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "가족이나 친구들과 함께 여행을 떠나기 위해",
          en: "To travel with family or friends",
          ja: "家族や友人と一緒に旅行するため",
          "zh-CN": "为了与家人或朋友一起旅行",
          "zh-TW": "為了與家人或朋友一起旅行",
          vi: "Để đi du lịch cùng gia đình hoặc bạn bè",
          id: "Untuk bepergian bersama keluarga atau teman"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "운전 그 자체의 즐거움과 스피드를 느끼기 위해",
          en: "To feel the joy and speed of driving itself",
          ja: "運転そのものの楽しさとスピードを感じるため",
          "zh-CN": "为了感受驾驶本身的乐趣和速度",
          "zh-TW": "為了感受駕駛本身的樂趣和速度",
          vi: "Để cảm nhận niềm vui và tốc độ của việc lái xe",
          id: "Untuk merasakan kegembiraan dan kecepatan mengemudi itu sendiri"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "가장 선호하는 자동차 디자인 스타일은?",
      en: "What is your preferred car design style?",
      ja: "最も好む自動車デザインスタイルは？",
      "zh-CN": "你最喜欢的汽车设计风格是什么？",
      "zh-TW": "你最喜歡的汽車設計風格是什麼？",
      vi: "Phong cách thiết kế xe hơi bạn ưa thích nhất là gì?",
      id: "Apa gaya desain mobil yang paling Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "유행을 타지 않는 중후하고 고급스러운 디자인",
          en: "Dignified and luxurious design that doesn't follow trends",
          ja: "流行に左右されない重厚で高級感のあるデザイン",
          "zh-CN": "不随波逐流的庄重而豪华的设计",
          "zh-TW": "不隨波逐流的莊重而豪華的設計",
          vi: "Thiết kế trang trọng và sang trọng không theo xu hướng",
          id: "Desain yang bermartabat dan mewah yang tidak mengikuti tren"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "짐을 많이 실을 수 있는 크고 튼튼한 박스형 디자인",
          en: "Large and sturdy box-shaped design that can carry a lot of luggage",
          ja: "荷物をたくさん積める大きくて丈夫なボックス型デザイン",
          "zh-CN": "可以装载大量行李的大型坚固箱型设计",
          "zh-TW": "可以裝載大量行李的大型堅固箱型設計",
          vi: "Thiết kế hộp lớn và chắc chắn có thể chở nhiều hành lý",
          id: "Desain kotak besar dan kokoh yang dapat membawa banyak barang"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "공기 저항을 최소화한 날렵하고 섹시한 디자인",
          en: "Sleek and sexy design that minimizes air resistance",
          ja: "空気抵抗を最小化した流線型でセクシーなデザイン",
          "zh-CN": "最小化空气阻力的流线型性感设计",
          "zh-TW": "最小化空氣阻力的流線型性感設計",
          vi: "Thiết kế mượt mà và quyến rũ giảm thiểu lực cản không khí",
          id: "Desain yang ramping dan seksi yang meminimalkan hambatan udara"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "군더더기 없이 작고 귀여운 미니멀 디자인",
          en: "Small and cute minimal design without frills",
          ja: "無駄のない小さくて可愛いミニマルデザイン",
          "zh-CN": "简洁小巧可爱的极简设计",
          "zh-TW": "簡潔小巧可愛的極簡設計",
          vi: "Thiết kế tối giản nhỏ gọn và dễ thương không thừa thãi",
          id: "Desain minimal kecil dan lucu tanpa hiasan berlebihan"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "꽉 막힌 도로 위, 당신의 반응은?",
      en: "On a completely congested road, what's your reaction?",
      ja: "完全に渋滞している道路で、あなたの反応は？",
      "zh-CN": "在完全拥堵的道路上，你的反应是什么？",
      "zh-TW": "在完全擁堵的道路上，你的反應是什麼？",
      vi: "Trên con đường tắc nghẽn hoàn toàn, phản ứng của bạn là gì?",
      id: "Di jalan yang benar-benar macet, apa reaksi Anda?"
    },
    options: [
      {
        text: {
          ko: "\"어차피 막히는 거...\" 조용히 음악을 듣거나 생각에 잠긴다",
          en: "\"It's going to be stuck anyway...\" Quietly listen to music or get lost in thought",
          ja: "「どうせ渋滞だし...」静かに音楽を聞いたり考え事にふける",
          "zh-CN": "「反正会堵...」安静地听音乐或陷入沉思",
          "zh-TW": "「反正會堵...」安靜地聽音樂或陷入沉思",
          vi: "\"Dù sao cũng tắc...\" Lặng lẽ nghe nhạc hoặc chìm vào suy nghĩ",
          id: "\"Lagipula macet...\" Diam-diam mendengarkan musik atau tenggelam dalam pikiran"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"아 답답해!\" 차가 높아서 시야라도 트였으면 좋겠다",
          en: "\"Ah, so frustrating!\" I wish the car was higher so I could at least see better",
          ja: "「ああ、イライラする！」車が高ければ視界が開けるのに",
          "zh-CN": "「啊，真烦人！」希望车高一点，至少视野开阔",
          "zh-TW": "「啊，真煩人！」希望車高一點，至少視野開闊",
          vi: "\"Ồ, bực mình quá!\" Ước gì xe cao hơn để ít nhất tầm nhìn rộng hơn",
          id: "\"Ah, frustasi!\" Saya berharap mobil lebih tinggi agar setidaknya pandangan lebih terbuka"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "\"이 틈을 타서 쇽!\" 차선을 변경하며 조금이라도 빨리 간다",
          en: "\"Let me take this gap!\" Change lanes to go a little faster",
          ja: "「この隙を狙ってシュッ！」車線を変えて少しでも早く進む",
          "zh-CN": "「抓住这个空隙！」变道以加快速度",
          "zh-TW": "「抓住這個空隙！」變道以加快速度",
          vi: "\"Nắm lấy khoảng trống này!\" Đổi làn để đi nhanh hơn một chút",
          id: "\"Manfaatkan celah ini!\" Ganti jalur untuk pergi sedikit lebih cepat"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"자율주행 켜고 자고 싶다.\" 운전 자체가 노동이다",
          en: "\"I want to turn on autopilot and sleep.\" Driving itself is labor",
          ja: "「自動運転をオンにして寝たい」運転そのものが労働だ",
          "zh-CN": "「想开启自动驾驶然后睡觉」驾驶本身就是劳动",
          "zh-TW": "「想開啟自動駕駛然後睡覺」駕駛本身就是勞動",
          vi: "\"Muốn bật lái tự động và ngủ.\" Lái xe chính nó là lao động",
          id: "\"Saya ingin menyalakan autopilot dan tidur.\" Mengemudi itu sendiri adalah pekerjaan"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "주말에 드라이브를 간다면 어디로 갈까요?",
      en: "Where would you go for a weekend drive?",
      ja: "週末にドライブに行くならどこへ行きますか？",
      "zh-CN": "如果周末去兜风，你会去哪里？",
      "zh-TW": "如果週末去兜風，你會去哪裡？",
      vi: "Nếu đi lái xe vào cuối tuần, bạn sẽ đi đâu?",
      id: "Jika pergi jalan-jalan di akhir pekan, ke mana Anda akan pergi?"
    },
    options: [
      {
        text: {
          ko: "발렛파킹이 되는 고급 호텔이나 도심 백화점",
          en: "A luxury hotel or downtown department store with valet parking",
          ja: "バレーパーキングがある高級ホテルや都心のデパート",
          "zh-CN": "有代客泊车服务的高级酒店或市中心百货商店",
          "zh-TW": "有代客泊車服務的高級酒店或市中心百貨商店",
          vi: "Khách sạn cao cấp hoặc cửa hàng bách hóa trung tâm có dịch vụ đỗ xe",
          id: "Hotel mewah atau department store pusat kota dengan valet parking"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "비포장도로를 달려 도착하는 깊은 산속 캠핑장",
          en: "A deep mountain campsite reached by driving on unpaved roads",
          ja: "未舗装道路を走って到着する深い山の中のキャンプ場",
          "zh-CN": "通过未铺装道路到达的深山露营地",
          "zh-TW": "通過未鋪裝道路到達的深山露營地",
          vi: "Khu cắm trại sâu trong núi đến bằng đường đất",
          id: "Situs perkemahan di pegunungan dalam yang dicapai dengan mengemudi di jalan tidak beraspal"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "뻥 뚫린 해안 도로를 질주할 수 있는 곳",
          en: "A place where I can speed along an open coastal road",
          ja: "開けた海岸道路を疾走できる場所",
          "zh-CN": "可以在开阔的海岸公路上疾驰的地方",
          "zh-TW": "可以在開闊的海岸公路上疾馳的地方",
          vi: "Nơi có thể phóng nhanh trên đường bờ biển rộng mở",
          id: "Tempat di mana saya bisa melaju di jalan pantai yang terbuka"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "주차 걱정 없는 근교의 예쁜 카페",
          en: "A pretty cafe in the suburbs where parking is no worry",
          ja: "駐車の心配がない郊外の素敵なカフェ",
          "zh-CN": "郊区漂亮的咖啡馆，不用担心停车",
          "zh-TW": "郊區漂亮的咖啡館，不用擔心停車",
          vi: "Quán cà phê đẹp ở ngoại ô không lo đỗ xe",
          id: "Kafe cantik di pinggiran kota yang tidak perlu khawatir parkir"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "차 안에서 가장 중요하게 생각하는 옵션은?",
      en: "What option do you consider most important in a car?",
      ja: "車の中で最も重要だと思うオプションは？",
      "zh-CN": "你认为车内最重要的配置是什么？",
      "zh-TW": "你認為車內最重要的配置是什麼？",
      vi: "Tùy chọn nào bạn coi trọng nhất trong xe?",
      id: "Opsi apa yang paling penting menurut Anda di dalam mobil?"
    },
    options: [
      {
        text: {
          ko: "승차감과 정숙성, 최고급 가죽 시트",
          en: "Ride comfort and quietness, premium leather seats",
          ja: "乗り心地と静粛性、最高級の革シート",
          "zh-CN": "乘坐舒适性和静谧性，顶级真皮座椅",
          "zh-TW": "乘坐舒適性和靜謐性，頂級真皮座椅",
          vi: "Sự thoải mái khi ngồi và độ yên tĩnh, ghế da cao cấp",
          id: "Kenyamanan berkendara dan ketenangan, kursi kulit premium"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "넓은 트렁크 공간과 차박이 가능한 폴딩 시트",
          en: "Spacious trunk and foldable seats for car camping",
          ja: "広いトランクスペースと車中泊が可能な折りたたみシート",
          "zh-CN": "宽敞的后备箱空间和可折叠座椅，适合车内露营",
          "zh-TW": "寬敞的後備箱空間和可折疊座椅，適合車內露營",
          vi: "Khoang hành lý rộng và ghế gập để có thể ngủ trong xe",
          id: "Bagasi luas dan kursi lipat untuk berkemah di mobil"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "제로백(가속력)과 배기음, 엔진 성능",
          en: "Zero-to-sixty acceleration, exhaust sound, engine performance",
          ja: "ゼロ百（加速力）と排気音、エンジン性能",
          "zh-CN": "零百加速、排气声浪、发动机性能",
          "zh-TW": "零百加速、排氣聲浪、發動機性能",
          vi: "Khả năng tăng tốc 0-100, âm thanh ống xả, hiệu suất động cơ",
          id: "Akselerasi nol-ke-seratus, suara knalpot, performa mesin"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "최첨단 디스플레이와 AI 음성인식, 자율주행",
          en: "Cutting-edge display, AI voice recognition, autonomous driving",
          ja: "最先端ディスプレイとAI音声認識、自動運転",
          "zh-CN": "尖端显示屏、AI语音识别、自动驾驶",
          "zh-TW": "尖端顯示屏、AI語音識別、自動駕駛",
          vi: "Màn hình tối tân, nhận diện giọng nói AI, lái tự động",
          id: "Layar canggih, pengenalan suara AI, mengemudi otonom"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "평소 짐을 얼마나 챙겨 다니나요?",
      en: "How much luggage do you usually carry?",
      ja: "普段どのくらい荷物を持ち歩きますか？",
      "zh-CN": "你平时带多少行李？",
      "zh-TW": "你平時帶多少行李？",
      vi: "Bạn thường mang theo bao nhiêu hành lý?",
      id: "Berapa banyak barang yang biasanya Anda bawa?"
    },
    options: [
      {
        text: {
          ko: "서류 가방이나 핸드백 하나 정도 가볍게",
          en: "Lightly, just a briefcase or handbag",
          ja: "書類カバンやハンドバッグ一つ程度、軽く",
          "zh-CN": "轻便，只有一个公文包或手提包",
          "zh-TW": "輕便，只有一個公文包或手提包",
          vi: "Nhẹ nhàng, chỉ một chiếc cặp hoặc túi xách",
          id: "Ringan, hanya satu tas kerja atau tas tangan"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "텐트, 낚싯대, 골프백... 언제든 떠날 준비 완료",
          en: "Tent, fishing rod, golf bag... Always ready to leave",
          ja: "テント、釣り竿、ゴルフバッグ...いつでも出発準備完了",
          "zh-CN": "帐篷、鱼竿、高尔夫球包...随时准备出发",
          "zh-TW": "帳篷、魚竿、高爾夫球包...隨時準備出發",
          vi: "Lều, cần câu, túi golf... Luôn sẵn sàng lên đường",
          id: "Tenda, pancing, tas golf... Selalu siap untuk pergi"
        },
        types: ["Type2", "Type6"]
      },
      {
        text: {
          ko: "짐은 최소화! 차가 무거워지면 안 된다",
          en: "Minimize luggage! The car shouldn't get heavy",
          ja: "荷物は最小限！車が重くなってはいけない",
          "zh-CN": "行李最少化！不能让车变重",
          "zh-TW": "行李最少化！不能讓車變重",
          vi: "Tối thiểu hành lý! Xe không được nặng",
          id: "Minimalkan barang! Mobil tidak boleh menjadi berat"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "마트 장바구니나 우산 등 생활 필수품 정도",
          en: "Just daily essentials like shopping bags or an umbrella",
          ja: "スーパーの買い物かごや傘など生活必需品程度",
          "zh-CN": "只是日常必需品，如购物袋或雨伞",
          "zh-TW": "只是日常必需品，如購物袋或雨傘",
          vi: "Chỉ những thứ thiết yếu hàng ngày như túi mua sắm hoặc ô",
          id: "Hanya kebutuhan sehari-hari seperti tas belanja atau payung"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "당신의 운전 스타일은?",
      en: "What is your driving style?",
      ja: "あなたの運転スタイルは？",
      "zh-CN": "你的驾驶风格是什么？",
      "zh-TW": "你的駕駛風格是什麼？",
      vi: "Phong cách lái xe của bạn là gì?",
      id: "Apa gaya mengemudi Anda?"
    },
    options: [
      {
        text: {
          ko: "규정 속도 준수, 방어 운전의 정석",
          en: "Follow speed limits, the epitome of defensive driving",
          ja: "規定速度遵守、防御運転の典型",
          "zh-CN": "遵守限速，防御性驾驶的典范",
          "zh-TW": "遵守限速，防禦性駕駛的典範",
          vi: "Tuân thủ tốc độ quy định, mẫu mực của lái xe phòng thủ",
          id: "Patuhi batas kecepatan, contoh mengemudi defensif"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "거침없이 달린다. 험한 길도 두렵지 않다",
          en: "Drive without hesitation. Not afraid of rough roads",
          ja: "躊躇なく走る。険しい道も恐れない",
          "zh-CN": "毫不犹豫地行驶。不害怕崎岖的道路",
          "zh-TW": "毫不猶豫地行駛。不害怕崎嶇的道路",
          vi: "Lái xe không do dự. Không sợ đường gồ ghề",
          id: "Mengemudi tanpa ragu. Tidak takut jalan kasar"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "신호 바뀌면 1등으로 출발! 스피드를 즐긴다",
          en: "When the light changes, start first! I enjoy speed",
          ja: "信号が変わったら1番で発進！スピードを楽しむ",
          "zh-CN": "信号灯一变就第一个出发！享受速度",
          "zh-TW": "信號燈一變就第一個出發！享受速度",
          vi: "Khi đèn xanh, xuất phát đầu tiên! Tôi thích tốc độ",
          id: "Saat lampu berubah, start pertama! Saya menikmati kecepatan"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "연비 운전의 달인, 급가속/급정거는 없다",
          en: "Master of fuel-efficient driving, no sudden acceleration or braking",
          ja: "燃費運転の達人、急加速・急ブレーキはない",
          "zh-CN": "节油驾驶大师，没有急加速/急刹车",
          "zh-TW": "節油駕駛大師，沒有急加速/急剎車",
          vi: "Bậc thầy lái xe tiết kiệm nhiên liệu, không tăng tốc/phanh gấp",
          id: "Ahli mengemudi hemat bahan bakar, tidak ada akselerasi/pengereman mendadak"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "다음 중 가장 설레는 단어는?",
      en: "Which word excites you the most?",
      ja: "次のうち最もワクワクする言葉は？",
      "zh-CN": "以下哪个词最让你兴奋？",
      "zh-TW": "以下哪個詞最讓你興奮？",
      vi: "Từ nào trong số sau khiến bạn phấn khích nhất?",
      id: "Kata mana yang paling membuat Anda bersemangat?"
    },
    options: [
      {
        text: {
          ko: "품격",
          en: "Dignity",
          ja: "品格",
          "zh-CN": "品格",
          "zh-TW": "品格",
          vi: "Phẩm giá",
          id: "Martabat"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "모험",
          en: "Adventure",
          ja: "冒険",
          "zh-CN": "冒险",
          "zh-TW": "冒險",
          vi: "Phiêu lưu",
          id: "Petualangan"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "속도",
          en: "Speed",
          ja: "速度",
          "zh-CN": "速度",
          "zh-TW": "速度",
          vi: "Tốc độ",
          id: "Kecepatan"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "혁신",
          en: "Innovation",
          ja: "革新",
          "zh-CN": "创新",
          "zh-TW": "創新",
          vi: "Đổi mới",
          id: "Inovasi"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "주로 누구와 함께 차를 타나요?",
      en: "Who do you usually ride with?",
      ja: "主に誰と一緒に車に乗りますか？",
      "zh-CN": "你通常和谁一起乘车？",
      "zh-TW": "你通常和誰一起乘車？",
      vi: "Bạn thường đi cùng ai?",
      id: "Dengan siapa Anda biasanya naik mobil?"
    },
    options: [
      {
        text: {
          ko: "비즈니스 파트너나 연인, 혹은 혼자",
          en: "Business partners or a lover, or alone",
          ja: "ビジネスパートナーや恋人、または一人",
          "zh-CN": "商业伙伴或恋人，或者独自一人",
          "zh-TW": "商業夥伴或戀人，或者獨自一人",
          vi: "Đối tác kinh doanh hoặc người yêu, hoặc một mình",
          id: "Rekan bisnis atau kekasih, atau sendirian"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "가족, 아이들, 반려견까지 대가족 이동",
          en: "Family, kids, even pets - large family transportation",
          ja: "家族、子供、ペットまで大家族移動",
          "zh-CN": "家人、孩子，甚至宠物——大家庭出行",
          "zh-TW": "家人、孩子，甚至寵物——大家庭出行",
          vi: "Gia đình, trẻ em, cả thú cưng - vận chuyển gia đình lớn",
          id: "Keluarga, anak-anak, bahkan hewan peliharaan - transportasi keluarga besar"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "오로지 나 혼자, 혹은 조수석에 튜닝 전문가 친구",
          en: "Just me alone, or a tuning expert friend in the passenger seat",
          ja: "私一人だけ、または助手席にチューニング専門家の友人",
          "zh-CN": "只有我一个人，或者副驾驶座上的改装专家朋友",
          "zh-TW": "只有我一個人，或者副駕駛座上的改裝專家朋友",
          vi: "Chỉ một mình tôi, hoặc bạn chuyên về tuning ở ghế phụ",
          id: "Hanya saya sendiri, atau teman ahli tuning di kursi penumpang"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "동네 친구나 가까운 지인",
          en: "Neighborhood friends or close acquaintances",
          ja: "近所の友達や親しい知人",
          "zh-CN": "邻居朋友或亲密熟人",
          "zh-TW": "鄰居朋友或親密熟人",
          vi: "Bạn hàng xóm hoặc người quen thân",
          id: "Teman tetangga atau kenalan dekat"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "전기차(EV)에 대한 당신의 생각은?",
      en: "What do you think about electric vehicles (EV)?",
      ja: "電気自動車（EV）についてどう思いますか？",
      "zh-CN": "你对电动汽车（EV）有什么看法？",
      "zh-TW": "你對電動汽車（EV）有什麼看法？",
      vi: "Bạn nghĩ gì về xe điện (EV)?",
      id: "Apa pendapat Anda tentang kendaraan listrik (EV)?"
    },
    options: [
      {
        text: {
          ko: "아직은 시기상조. 충전도 불편하고 내연기관이 더 믿음직하다",
          en: "It's still too early. Charging is inconvenient and internal combustion engines are more reliable",
          ja: "まだ時期尚早。充電も不便で内燃機関の方が信頼できる",
          "zh-CN": "还为时过早。充电不方便，内燃机更可靠",
          "zh-TW": "還為時過早。充電不方便，內燃機更可靠",
          vi: "Vẫn còn quá sớm. Sạc bất tiện và động cơ đốt trong đáng tin cậy hơn",
          id: "Masih terlalu dini. Pengisian tidak nyaman dan mesin pembakaran internal lebih dapat diandalkan"
        },
        types: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "힘 좋고 조용해서 좋긴 한데, 장거리 여행이 걱정된다",
          en: "Good power and quiet, but I'm worried about long-distance travel",
          ja: "力強くて静かで良いけど、長距離旅行が心配",
          "zh-CN": "动力好且安静，但担心长途旅行",
          "zh-TW": "動力好且安靜，但擔心長途旅行",
          vi: "Mạnh mẽ và yên tĩnh, nhưng lo lắng về du lịch đường dài",
          id: "Kuat dan tenang, tapi saya khawatir tentang perjalanan jarak jauh"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "엔진 소리가 없는 차는 영혼이 없는 차다",
          en: "A car without engine sound is a car without a soul",
          ja: "エンジン音のない車は魂のない車だ",
          "zh-CN": "没有发动机声音的车是没有灵魂的车",
          "zh-TW": "沒有發動機聲音的車是沒有靈魂的車",
          vi: "Xe không có tiếng động cơ là xe không có linh hồn",
          id: "Mobil tanpa suara mesin adalah mobil tanpa jiwa"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "얼리어답터라면 필수! 유지비도 싸고 미래지향적이다",
          en: "Essential for early adopters! Low maintenance costs and future-oriented",
          ja: "アーリーアダプターなら必須！維持費も安く未来志向",
          "zh-CN": "对于早期采用者来说是必须的！维护成本低且面向未来",
          "zh-TW": "對於早期採用者來說是必須的！維護成本低且面向未來",
          vi: "Cần thiết cho người dùng sớm! Chi phí bảo trì thấp và hướng tương lai",
          id: "Penting untuk early adopter! Biaya perawatan murah dan berorientasi masa depan"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "차에 문제가 생겼을 때 당신은?",
      en: "When your car has a problem, what do you do?",
      ja: "車に問題が発生した時、あなたは？",
      "zh-CN": "当你的车出现问题时，你会怎么做？",
      "zh-TW": "當你的車出現問題時，你會怎麼做？",
      vi: "Khi xe có vấn đề, bạn làm gì?",
      id: "Ketika mobil Anda bermasalah, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "서비스 센터에 맡기고 라운지에서 커피를 마신다",
          en: "Leave it at the service center and drink coffee in the lounge",
          ja: "サービスセンターに預けてラウンジでコーヒーを飲む",
          "zh-CN": "送到服务中心，在休息室喝咖啡",
          "zh-TW": "送到服務中心，在休息室喝咖啡",
          vi: "Gửi ở trung tâm dịch vụ và uống cà phê ở phòng chờ",
          id: "Tinggalkan di pusat layanan dan minum kopi di lounge"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "보닛을 열고 내가 직접 고칠 수 있는 건 고친다",
          en: "Open the hood and fix what I can fix myself",
          ja: "ボンネットを開けて自分で直せるものは直す",
          "zh-CN": "打开引擎盖，自己修理能修的部分",
          "zh-TW": "打開引擎蓋，自己修理能修的部分",
          vi: "Mở nắp capo và tự sửa những gì có thể",
          id: "Buka kap mesin dan perbaiki apa yang bisa saya perbaiki sendiri"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "튜닝샵에 가서 더 좋은 부품으로 업그레이드한다",
          en: "Go to a tuning shop and upgrade with better parts",
          ja: "チューニングショップに行ってより良いパーツでアップグレード",
          "zh-CN": "去改装店，用更好的零件升级",
          "zh-TW": "去改裝店，用更好的零件升級",
          vi: "Đến cửa hàng tuning và nâng cấp bằng phụ tùng tốt hơn",
          id: "Pergi ke toko tuning dan upgrade dengan suku cadang yang lebih baik"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "보험사를 부르고 기다린다",
          en: "Call the insurance company and wait",
          ja: "保険会社に電話して待つ",
          "zh-CN": "打电话给保险公司并等待",
          "zh-TW": "打電話給保險公司並等待",
          vi: "Gọi công ty bảo hiểm và chờ đợi",
          id: "Hubungi perusahaan asuransi dan tunggu"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 자동차란?",
      en: "What is a car to you?",
      ja: "あなたにとって自動車とは？",
      "zh-CN": "对你来说，汽车是什么？",
      "zh-TW": "對你來說，汽車是什麼？",
      vi: "Xe hơi đối với bạn là gì?",
      id: "Apa itu mobil bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "나를 편안하게 쉬게 해주는 움직이는 스위트룸",
          en: "A moving suite that lets me rest comfortably",
          ja: "私を快適に休ませてくれる動くスイートルーム",
          "zh-CN": "让我舒适休息的移动套房",
          "zh-TW": "讓我舒適休息的移動套房",
          vi: "Một phòng suite di động cho tôi nghỉ ngơi thoải mái",
          id: "Suite bergerak yang membuat saya beristirahat dengan nyaman"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "나를 어디든 데려다주는 든든한 탱크",
          en: "A reliable tank that takes me anywhere",
          ja: "私をどこにでも連れて行ってくれる頼もしいタンク",
          "zh-CN": "带我去任何地方的可靠坦克",
          "zh-TW": "帶我去任何地方的可靠坦克",
          vi: "Một chiếc xe bọc thép đáng tin cậy đưa tôi đi mọi nơi",
          id: "Tank yang andal yang membawa saya ke mana pun"
        },
        types: ["Type2", "Type6"]
      },
      {
        text: {
          ko: "내 심장을 뛰게 하는 장난감",
          en: "A toy that makes my heart race",
          ja: "私の心臓を躍らせるおもちゃ",
          "zh-CN": "让我的心跳加速的玩具",
          "zh-TW": "讓我的心跳加速的玩具",
          vi: "Một món đồ chơi khiến tim tôi đập nhanh",
          id: "Mainan yang membuat jantung saya berdebar"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "효율적이고 똑똑한 이동 수단",
          en: "An efficient and smart means of transportation",
          ja: "効率的でスマートな移動手段",
          "zh-CN": "高效智能的交通工具",
          "zh-TW": "高效智能的交通工具",
          vi: "Phương tiện di chuyển hiệu quả và thông minh",
          id: "Sarana transportasi yang efisien dan cerdas"
        },
        types: ["Type5"]
      }
    ]
  }
];

export const phase2DreamCarResults: Phase2DreamCarResult[] = [
  {
    type: "Type1",
    emoji: "🎩",
    title: {
      ko: "성공의 상징, 럭셔리 세단",
      en: "Symbol of Success, Luxury Sedan",
      ja: "成功の象徴、ラグジュアリーセダン",
      "zh-CN": "成功的象征，豪华轿车",
      "zh-TW": "成功的象徵，豪華轎車",
      vi: "Biểu tượng Thành công, Sedan Hạng sang",
      id: "Simbol Kesuksesan, Sedan Mewah"
    },
    shortDescription: {
      ko: "\"도로 위의 퍼스트 클래스\"",
      en: "\"First Class on the Road\"",
      ja: "「道路の上のファーストクラス」",
      "zh-CN": "「路上的头等舱」",
      "zh-TW": "「路上的頭等艙」",
      vi: "\"Hạng nhất trên đường\"",
      id: "\"Kelas Satu di Jalan\""
    },
    description: {
      ko: "당신은 품격과 안락함을 최우선으로 생각합니다. 운전은 편안해야 하며, 차는 나의 사회적 지위를 보여주는 수단이라고 생각합니다. 정숙한 승차감과 고급스러운 인테리어가 갖춰진 세단이 당신에게 어울립니다.",
      en: "You prioritize dignity and comfort above all. Driving should be comfortable, and you think a car is a means to show your social status. A sedan with quiet ride comfort and luxurious interior suits you.",
      ja: "あなたは品格と快適さを最優先に考えます。運転は快適でなければならず、車は自分の社会的地位を示す手段だと考えています。静かな乗り心地と高級なインテリアが備わったセダンがあなたに似合います。",
      "zh-CN": "你优先考虑品格和舒适。驾驶应该是舒适的，你认为汽车是展示你社会地位的手段。拥有安静乘坐舒适性和豪华内饰的轿车适合你。",
      "zh-TW": "你優先考慮品格和舒適。駕駛應該是舒適的，你認為汽車是展示你社會地位的手段。擁有安靜乘坐舒適性和豪華內飾的轎車適合你。",
      vi: "Bạn ưu tiên phẩm giá và sự thoải mái trên hết. Lái xe phải thoải mái, và bạn nghĩ xe hơi là phương tiện thể hiện địa vị xã hội. Một chiếc sedan với độ thoải mái yên tĩnh và nội thất sang trọng phù hợp với bạn.",
      id: "Anda memprioritaskan martabat dan kenyamanan di atas segalanya. Mengemudi harus nyaman, dan Anda berpikir mobil adalah sarana untuk menunjukkan status sosial Anda. Sedan dengan kenyamanan berkendara yang tenang dan interior mewah cocok untuk Anda."
    },
    recommendedModels: {
      ko: "제네시스 G90, 벤츠 S클래스, 그랜저",
      en: "Genesis G90, Mercedes-Benz S-Class, Grandeur",
      ja: "ジェネシスG90、メルセデス・ベンツSクラス、グランドゥール",
      "zh-CN": "Genesis G90、梅赛德斯-奔驰S级、Grandeur",
      "zh-TW": "Genesis G90、梅賽德斯-奔馳S級、Grandeur",
      vi: "Genesis G90, Mercedes-Benz S-Class, Grandeur",
      id: "Genesis G90, Mercedes-Benz S-Class, Grandeur"
    },
    keywords: {
      ko: "승차감, 정숙성, 하차감, 성공",
      en: "Ride comfort, Quietness, Prestige, Success",
      ja: "乗り心地、静粛性、格調、成功",
      "zh-CN": "乘坐舒适性、静谧性、格调、成功",
      "zh-TW": "乘坐舒適性、靜謐性、格調、成功",
      vi: "Thoải mái, Yên tĩnh, Uy tín, Thành công",
      id: "Kenyamanan berkendara, Ketenangan, Prestise, Kesuksesan"
    }
  },
  {
    type: "Type2",
    emoji: "🚙",
    title: {
      ko: "든든한 가장, 패밀리 SUV",
      en: "Reliable Head of Family, Family SUV",
      ja: "頼もしい家長、ファミリーSUV",
      "zh-CN": "可靠的一家之主，家庭SUV",
      "zh-TW": "可靠的一家之主，家庭SUV",
      vi: "Người đứng đầu Đáng tin cậy, SUV Gia đình",
      id: "Kepala Keluarga yang Andal, SUV Keluarga"
    },
    shortDescription: {
      ko: "\"무엇이든 실을 수 있는 넉넉함\"",
      en: "\"Spacious enough to carry anything\"",
      ja: "「何でも積める余裕」",
      "zh-CN": "「宽敞到可以装载任何东西」",
      "zh-TW": "「寬敞到可以裝載任何東西」",
      vi: "\"Đủ rộng để chở mọi thứ\"",
      id: "\"Cukup luas untuk membawa apa pun\""
    },
    description: {
      ko: "당신은 실용성과 가족을 중요하게 생각합니다. 넓은 공간은 필수이며, 캠핑이나 여행 등 다양한 라이프스타일을 소화할 수 있어야 합니다. 튼튼하고 안전하며 어디든 갈 수 있는 SUV가 당신의 파트너입니다.",
      en: "You value practicality and family. Spacious space is essential, and it must be able to handle various lifestyles like camping or travel. A sturdy, safe SUV that can go anywhere is your partner.",
      ja: "あなたは実用性と家族を大切に考えます。広い空間は必須であり、キャンプや旅行など様々なライフスタイルに対応できなければなりません。丈夫で安全でどこへでも行けるSUVがあなたのパートナーです。",
      "zh-CN": "你重视实用性和家庭。宽敞的空间是必需的，必须能够应对各种生活方式，如露营或旅行。坚固、安全、可以去任何地方的SUV是你的伙伴。",
      "zh-TW": "你重視實用性和家庭。寬敞的空間是必需的，必須能夠應對各種生活方式，如露營或旅行。堅固、安全、可以去任何地方的SUV是你的夥伴。",
      vi: "Bạn coi trọng tính thực tế và gia đình. Không gian rộng rãi là điều cần thiết, và nó phải có thể đáp ứng nhiều lối sống như cắm trại hoặc du lịch. Một chiếc SUV chắc chắn, an toàn có thể đi mọi nơi là đối tác của bạn.",
      id: "Anda menghargai kepraktisan dan keluarga. Ruang yang luas sangat penting, dan harus mampu menangani berbagai gaya hidup seperti berkemah atau bepergian. SUV yang kokoh, aman, dan bisa pergi ke mana pun adalah partner Anda."
    },
    recommendedModels: {
      ko: "싼타페, 쏘렌토, 팰리세이드, 카니발",
      en: "Santa Fe, Sorento, Palisade, Carnival",
      ja: "サンタフェ、ソレント、パリセード、カーニバル",
      "zh-CN": "Santa Fe、Sorento、Palisade、Carnival",
      "zh-TW": "Santa Fe、Sorento、Palisade、Carnival",
      vi: "Santa Fe, Sorento, Palisade, Carnival",
      id: "Santa Fe, Sorento, Palisade, Carnival"
    },
    keywords: {
      ko: "공간감, 안전, 차박, 패밀리카",
      en: "Spaciousness, Safety, Car camping, Family car",
      ja: "空間感、安全性、車中泊、ファミリーカー",
      "zh-CN": "空间感、安全性、车内露营、家庭用车",
      "zh-TW": "空間感、安全性、車內露營、家庭用車",
      vi: "Không gian, An toàn, Ngủ trong xe, Xe gia đình",
      id: "Kelapangan, Keamanan, Kemah mobil, Mobil keluarga"
    }
  },
  {
    type: "Type3",
    emoji: "🏎️",
    title: {
      ko: "질주 본능, 고성능 스포츠카",
      en: "Racing Instinct, High-Performance Sports Car",
      ja: "疾走本能、高性能スポーツカー",
      "zh-CN": "疾驰本能，高性能跑车",
      "zh-TW": "疾馳本能，高性能跑車",
      vi: "Bản năng Tốc độ, Xe Thể thao Hiệu năng cao",
      id: "Insting Balapan, Mobil Sport Berperforma Tinggi"
    },
    shortDescription: {
      ko: "\"심장을 울리는 배기음의 낭만\"",
      en: "\"The Romance of Heart-Pounding Exhaust Sound\"",
      ja: "「心臓を打つ排気音のロマン」",
      "zh-CN": "「令人心跳加速的排气声浪的浪漫」",
      "zh-TW": "「令人心跳加速的排氣聲浪的浪漫」",
      vi: "\"Sự lãng mạn của âm thanh ống xả làm tim đập\"",
      id: "\"Romansa Suara Knalpot yang Membuat Jantung Berdebar\""
    },
    description: {
      ko: "당신에게 운전은 단순한 이동이 아니라 즐거움 그 자체입니다. 남들의 시선을 즐기며, 도로 위에서 가장 빠른 차가 되기를 원합니다. 답답한 일상에서 벗어나게 해 줄 날렵한 스포츠카나 쿠페가 제격입니다.",
      en: "To you, driving is not just transportation but joy itself. You enjoy others' attention and want to be the fastest car on the road. A sleek sports car or coupe that lets you escape from a frustrating daily life is perfect.",
      ja: "あなたにとって運転は単なる移動ではなく、楽しみそのものです。他人の視線を楽しみ、道路で最も速い車になりたいと思っています。退屈な日常から抜け出させてくれる流線型のスポーツカーやクーペが最適です。",
      "zh-CN": "对你来说，驾驶不仅仅是交通，而是乐趣本身。你享受别人的关注，想成为路上最快的车。让你从令人沮丧的日常生活中解脱出来的流线型跑车或轿跑车是完美的。",
      "zh-TW": "對你來說，駕駛不僅僅是交通，而是樂趣本身。你享受別人的關注，想成為路上最快的車。讓你從令人沮喪的日常生活中解脫出來的流線型跑車或轎跑車是完美的。",
      vi: "Đối với bạn, lái xe không chỉ là phương tiện di chuyển mà là niềm vui. Bạn thích sự chú ý của người khác và muốn trở thành chiếc xe nhanh nhất trên đường. Một chiếc xe thể thao hoặc coupe mượt mà giúp bạn thoát khỏi cuộc sống hàng ngày bực bội là hoàn hảo.",
      id: "Bagi Anda, mengemudi bukan hanya transportasi tetapi kegembiraan itu sendiri. Anda menikmati perhatian orang lain dan ingin menjadi mobil tercepat di jalan. Mobil sport atau coupe yang ramping yang membebaskan Anda dari kehidupan sehari-hari yang membuat frustrasi adalah sempurna."
    },
    recommendedModels: {
      ko: "포르쉐 911, 머스탱, 아반떼 N, BMW M시리즈",
      en: "Porsche 911, Mustang, Avante N, BMW M Series",
      ja: "ポルシェ911、マスタング、アバンテN、BMW Mシリーズ",
      "zh-CN": "保时捷911、野马、Avante N、宝马M系列",
      "zh-TW": "保時捷911、野馬、Avante N、寶馬M系列",
      vi: "Porsche 911, Mustang, Avante N, BMW M Series",
      id: "Porsche 911, Mustang, Avante N, BMW M Series"
    },
    keywords: {
      ko: "스피드, 펀드라이빙, 하차감, 스릴",
      en: "Speed, Fun driving, Prestige, Thrill",
      ja: "スピード、楽しい運転、格調、スリル",
      "zh-CN": "速度、驾驶乐趣、格调、刺激",
      "zh-TW": "速度、駕駛樂趣、格調、刺激",
      vi: "Tốc độ, Lái xe vui, Uy tín, Hồi hộp",
      id: "Kecepatan, Mengemudi menyenangkan, Prestise, Sensasi"
    }
  },
  {
    type: "Type4",
    emoji: "🚗",
    title: {
      ko: "합리적 미니멀리스트, 컴팩트/경차",
      en: "Rational Minimalist, Compact/Compact Car",
      ja: "合理的ミニマリスト、コンパクト/軽自動車",
      "zh-CN": "理性极简主义者，紧凑型/小型车",
      "zh-TW": "理性極簡主義者，緊湊型/小型車",
      vi: "Người Tối giản Hợp lý, Xe Nhỏ gọn/Xe Nhỏ",
      id: "Minimalis Rasional, Kompak/Mobil Kecil"
    },
    shortDescription: {
      ko: "\"작지만 알차고 똑똑한 선택\"",
      en: "\"Small but Substantial and Smart Choice\"",
      ja: "「小さくても充実していて賢い選択」",
      "zh-CN": "「小而充实且明智的选择」",
      "zh-TW": "「小而充實且明智的選擇」",
      vi: "\"Lựa chọn nhỏ nhưng đầy đủ và thông minh\"",
      id: "\"Pilihan Kecil tapi Berisi dan Cerdas\""
    },
    description: {
      ko: "당신은 가성비와 실용성을 중요하게 생각합니다. 복잡한 도심에서 주차하기 편하고, 유지비 걱정 없는 차가 최고입니다. 불필요한 허세보다는 내실을 다지는 당신에게는 귀엽고 실속 있는 경차나 소형차가 어울립니다.",
      en: "You value cost-effectiveness and practicality. A car that's easy to park in complex urban areas and worry-free maintenance is best. A cute and practical compact or small car suits you, who focuses on substance rather than unnecessary show-off.",
      ja: "あなたはコストパフォーマンスと実用性を大切に考えます。複雑な都心で駐車しやすく、維持費の心配がない車が最高です。不要な見栄よりも中身を重視するあなたには、可愛くて実用的な軽自動車や小型車が似合います。",
      "zh-CN": "你重视性价比和实用性。在复杂的城市中心容易停车、无需担心维护费用的车是最好的。对于注重实质而非不必要炫耀的你来说，可爱且实用的小型车或紧凑型车很适合。",
      "zh-TW": "你重視性價比和實用性。在複雜的城市中心容易停車、無需擔心維護費用的車是最好的。對於注重實質而非不必要炫耀的你來說，可愛且實用的小型車或緊湊型車很適合。",
      vi: "Bạn coi trọng giá trị và tính thực tế. Một chiếc xe dễ đỗ trong khu vực đô thị phức tạp và không lo bảo trì là tốt nhất. Một chiếc xe nhỏ gọn hoặc xe nhỏ dễ thương và thực tế phù hợp với bạn, người tập trung vào chất lượng hơn là khoe khoang không cần thiết.",
      id: "Anda menghargai nilai dan kepraktisan. Mobil yang mudah diparkir di area perkotaan yang kompleks dan bebas khawatir perawatan adalah yang terbaik. Mobil kompak atau kecil yang lucu dan praktis cocok untuk Anda, yang fokus pada substansi daripada pamer yang tidak perlu."
    },
    recommendedModels: {
      ko: "캐스퍼, 레이, 아반떼, 미니 쿠퍼",
      en: "Casper, Ray, Avante, Mini Cooper",
      ja: "キャスパー、レイ、アバンテ、ミニクーパー",
      "zh-CN": "Casper、Ray、Avante、Mini Cooper",
      "zh-TW": "Casper、Ray、Avante、Mini Cooper",
      vi: "Casper, Ray, Avante, Mini Cooper",
      id: "Casper, Ray, Avante, Mini Cooper"
    },
    keywords: {
      ko: "가성비, 주차편리, 혜택, 실속",
      en: "Cost-effectiveness, Easy parking, Benefits, Practicality",
      ja: "コストパフォーマンス、駐車便利、特典、実用性",
      "zh-CN": "性价比、停车便利、优惠、实用性",
      "zh-TW": "性價比、停車便利、優惠、實用性",
      vi: "Giá trị, Đỗ xe dễ, Lợi ích, Thực tế",
      id: "Nilai, Parkir mudah, Manfaat, Kepraktisan"
    }
  },
  {
    type: "Type5",
    emoji: "⚡",
    title: {
      ko: "얼리어답터, 전기차/테크카",
      en: "Early Adopter, Electric Vehicle/Tech Car",
      ja: "アーリーアダプター、電気自動車/テックカー",
      "zh-CN": "早期采用者，电动汽车/科技车",
      "zh-TW": "早期採用者，電動汽車/科技車",
      vi: "Người Dùng Sớm, Xe Điện/Xe Công nghệ",
      id: "Early Adopter, Kendaraan Listrik/Mobil Teknologi"
    },
    shortDescription: {
      ko: "\"미래를 먼저 경험하는 혁신가\"",
      en: "\"Innovator Who Experiences the Future First\"",
      ja: "「未来を先に体験する革新者」",
      "zh-CN": "「率先体验未来的创新者」",
      "zh-TW": "「率先體驗未來的創新者」",
      vi: "\"Nhà đổi mới trải nghiệm tương lai trước\"",
      id: "\"Inovator yang Mengalami Masa Depan Lebih Dulu\""
    },
    description: {
      ko: "당신은 새로운 기술과 트렌드에 민감합니다. 최첨단 자율주행 기능과 조용한 주행감, 그리고 친환경적인 가치까지 챙기는 스마트한 소비자입니다. 자동차를 '바퀴 달린 스마트폰'으로 활용하는 당신에게 딱입니다.",
      en: "You are sensitive to new technologies and trends. You are a smart consumer who values cutting-edge autonomous driving features, quiet ride, and eco-friendly values. A car that functions as a 'smartphone on wheels' is perfect for you.",
      ja: "あなたは新しい技術とトレンドに敏感です。最先端の自動運転機能と静かな乗り心地、そして環境に優しい価値まで重視するスマートな消費者です。自動車を「車輪付きスマートフォン」として活用するあなたにぴったりです。",
      "zh-CN": "你对新技术和趋势很敏感。你是一个聪明的消费者，重视尖端自动驾驶功能、安静的驾驶体验和环保价值。一辆作为「带轮子的智能手机」的汽车非常适合你。",
      "zh-TW": "你對新技術和趨勢很敏感。你是一個聰明的消費者，重視尖端自動駕駛功能、安靜的駕駛體驗和環保價值。一輛作為「帶輪子的智能手機」的汽車非常適合你。",
      vi: "Bạn nhạy cảm với công nghệ mới và xu hướng. Bạn là người tiêu dùng thông minh coi trọng tính năng lái tự động tối tân, trải nghiệm lái yên tĩnh và giá trị thân thiện môi trường. Một chiếc xe hoạt động như 'điện thoại thông minh có bánh xe' hoàn hảo cho bạn.",
      id: "Anda sensitif terhadap teknologi dan tren baru. Anda adalah konsumen cerdas yang menghargai fitur mengemudi otonom canggih, pengalaman berkendara yang tenang, dan nilai ramah lingkungan. Mobil yang berfungsi sebagai 'smartphone beroda' sempurna untuk Anda."
    },
    recommendedModels: {
      ko: "아이오닉 5, 테슬라 모델 3/Y, EV6",
      en: "Ioniq 5, Tesla Model 3/Y, EV6",
      ja: "アイオニック5、テスラモデル3/Y、EV6",
      "zh-CN": "Ioniq 5、特斯拉Model 3/Y、EV6",
      "zh-TW": "Ioniq 5、特斯拉Model 3/Y、EV6",
      vi: "Ioniq 5, Tesla Model 3/Y, EV6",
      id: "Ioniq 5, Tesla Model 3/Y, EV6"
    },
    keywords: {
      ko: "자율주행, 유지비절약, 친환경, 정숙성",
      en: "Autonomous driving, Low maintenance cost, Eco-friendly, Quietness",
      ja: "自動運転、維持費節約、環境に優しい、静粛性",
      "zh-CN": "自动驾驶、维护成本低、环保、静谧性",
      "zh-TW": "自動駕駛、維護成本低、環保、靜謐性",
      vi: "Lái tự động, Chi phí bảo trì thấp, Thân thiện môi trường, Yên tĩnh",
      id: "Mengemudi otonom, Biaya perawatan rendah, Ramah lingkungan, Ketenangan"
    }
  },
  {
    type: "Type6",
    emoji: "🏔️",
    title: {
      ko: "야생의 지배자, 오프로더/픽업트럭",
      en: "Ruler of the Wild, Off-Roader/Pickup Truck",
      ja: "野生の支配者、オフローダー/ピックアップトラック",
      "zh-CN": "野外的统治者，越野车/皮卡",
      "zh-TW": "野外的統治者，越野車/皮卡",
      vi: "Bá chủ Hoang dã, Xe Off-road/Xe Bán tải",
      id: "Penguasa Liar, Off-Roader/Truk Pickup"
    },
    shortDescription: {
      ko: "\"길이 아닌 곳도 내 길이다\"",
      en: "\"Even Places That Aren't Roads Are My Roads\"",
      ja: "「道ではない場所も私の道だ」",
      "zh-CN": "「不是路的地方也是我的路」",
      "zh-TW": "「不是路的地方也是我的路」",
      vi: "\"Những nơi không phải đường cũng là đường của tôi\"",
      id: "\"Tempat yang Bukan Jalan pun Adalah Jalanku\""
    },
    description: {
      ko: "당신은 자유로운 영혼과 모험심을 가지고 있습니다. 남들이 가지 않는 험한 길을 즐기며, 거친 자연과 함께하는 삶을 동경합니다. 흙먼지가 묻어도 멋있는 상남자 스타일의 정통 오프로더가 당신의 심장을 뛰게 합니다.",
      en: "You have a free spirit and adventurous heart. You enjoy rough roads that others don't take and yearn for a life with wild nature. An authentic off-roader with a cool, tough-guy style that makes your heart race, even when covered in dust.",
      ja: "あなたは自由な魂と冒険心を持っています。他人が行かない険しい道を楽しみ、荒々しい自然と共に生きる生活に憧れます。土埃がついてもかっこいい男前スタイルの正統派オフローダーがあなたの心を躍らせます。",
      "zh-CN": "你拥有自由的灵魂和冒险精神。你享受别人不走的崎岖道路，向往与狂野自然共处的生活。即使沾满尘土，酷炫硬汉风格的正宗越野车也会让你心跳加速。",
      "zh-TW": "你擁有自由的靈魂和冒險精神。你享受別人不走的崎嶇道路，嚮往與狂野自然共處的生活。即使沾滿塵土，酷炫硬漢風格的正宗越野車也會讓你心跳加速。",
      vi: "Bạn có tinh thần tự do và tâm hồn phiêu lưu. Bạn thích những con đường gồ ghề mà người khác không đi và khao khát cuộc sống với thiên nhiên hoang dã. Một chiếc xe off-road chính thống với phong cách nam tính mạnh mẽ khiến tim bạn đập nhanh, ngay cả khi phủ đầy bụi.",
      id: "Anda memiliki jiwa bebas dan hati petualang. Anda menikmati jalan kasar yang tidak dilalui orang lain dan merindukan kehidupan bersama alam liar. Off-roader otentik dengan gaya pria tangguh yang keren membuat jantung Anda berdebar, bahkan saat tertutup debu."
    },
    recommendedModels: {
      ko: "지프 랭글러, 렉스턴 스포츠, 포드 브롱코",
      en: "Jeep Wrangler, Rexton Sports, Ford Bronco",
      ja: "ジープ・ラングラー、レクストンスポーツ、フォード・ブロンコ",
      "zh-CN": "Jeep Wrangler、Rexton Sports、Ford Bronco",
      "zh-TW": "Jeep Wrangler、Rexton Sports、Ford Bronco",
      vi: "Jeep Wrangler, Rexton Sports, Ford Bronco",
      id: "Jeep Wrangler, Rexton Sports, Ford Bronco"
    },
    keywords: {
      ko: "모험, 자유, 4륜구동, 상남자",
      en: "Adventure, Freedom, 4WD, Tough guy",
      ja: "冒険、自由、四輪駆動、男前",
      "zh-CN": "冒险、自由、四轮驱动、硬汉",
      "zh-TW": "冒險、自由、四輪驅動、硬漢",
      vi: "Phiêu lưu, Tự do, 4WD, Nam tính",
      id: "Petualangan, Kebebasan, 4WD, Pria tangguh"
    }
  }
];

export function calculatePhase2DreamCarResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type5"; // Default value (highest priority)
  const priority = ["Type5", "Type2", "Type4", "Type1", "Type6", "Type3"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
