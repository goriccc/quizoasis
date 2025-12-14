export interface Phase2MentalAgeQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0 (아이), B=1 (어른)
  }[];
}

export interface Phase2MentalAgeResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription?: Record<string, string>; // 부제 ("세상은 놀이터!...")
  description: Record<string, string>;
  mentalAgeLevel: Record<string, string>; // "Lv. 5세 (응석받이)" 형태
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2MentalAgeQuestions: Phase2MentalAgeQuestion[] = [
  {
    id: 1,
    question: {
      ko: "눈이 펑펑 쏟아지는 날, 창밖을 보며 드는 생각은?",
      en: "On a day when snow is falling heavily, what do you think while looking out the window?",
      ja: "雪が降りしきる日、窓の外を見ながら何を考えますか？",
      'zh-CN': "下大雪的日子，看着窗外你会想什么？",
      'zh-TW': "下大雪的日子，看著窗外你會想什麼？",
      vi: "Vào ngày tuyết rơi nhiều, bạn nghĩ gì khi nhìn ra ngoài cửa sổ?",
      id: "Pada hari salju turun deras, apa yang Anda pikirkan saat melihat ke luar jendela?"
    },
    options: [
      {
        text: { 
          ko: "우와 눈이다! 나가서 놀고 싶다.", 
          en: "Wow, it's snowing! I want to go out and play.",
          ja: "わあ、雪だ！外に出て遊びたい。",
          'zh-CN': "哇，下雪了！我想出去玩。",
          'zh-TW': "哇，下雪了！我想出去玩。",
          vi: "Ồ, tuyết rơi! Tôi muốn ra ngoài chơi.",
          id: "Wah, salju! Saya ingin keluar dan bermain."
        },
        score: 0
      },
      {
        text: { 
          ko: "출퇴근길 미끄럽겠네. 차 막히겠다.", 
          en: "The commute will be slippery. Traffic will be jammed.",
          ja: "通勤路が滑りそうだ。渋滞するだろう。",
          'zh-CN': "上下班路会很滑。会堵车。",
          'zh-TW': "上下班路會很滑。會堵車。",
          vi: "Đường đi làm sẽ trơn trượt. Sẽ kẹt xe.",
          id: "Perjalanan akan licin. Lalu lintas akan macet."
        },
        score: 1
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "맛있는 간식(과자, 초콜릿)이 눈앞에 있다.",
      en: "There's delicious snacks (cookies, chocolate) right in front of you.",
      ja: "おいしいおやつ（お菓子、チョコレート）が目の前にある。",
      'zh-CN': "眼前有美味的零食（饼干、巧克力）。",
      'zh-TW': "眼前有美味的零食（餅乾、巧克力）。",
      vi: "Có đồ ăn vặt ngon (bánh kẹo, sô cô la) ngay trước mặt bạn.",
      id: "Ada camilan lezat (kue, cokelat) di depan mata Anda."
    },
    options: [
      {
        text: { 
          ko: "일단 먹고 본다. 당 충전이 최고다", 
          en: "I'll eat it first. Sugar boost is the best.",
          ja: "とりあえず食べる。糖分補給が最高だ。",
          'zh-CN': "先吃了再说。补充糖分最棒。",
          'zh-TW': "先吃了再說。補充糖分最棒。",
          vi: "Cứ ăn trước đã. Nạp đường là tuyệt nhất.",
          id: "Saya akan memakannya dulu. Mengisi gula adalah yang terbaik."
        },
        score: 0
      },
      {
        text: { 
          ko: "칼로리와 건강을 생각해서 참거나 조금만 먹는다", 
          en: "I resist or eat just a little, thinking about calories and health.",
          ja: "カロリーと健康を考えて我慢するか、少しだけ食べる。",
          'zh-CN': "考虑到卡路里和健康，忍住或只吃一点。",
          'zh-TW': "考慮到卡路里和健康，忍住或只吃一點。",
          vi: "Nghĩ đến calo và sức khỏe nên nhịn hoặc chỉ ăn một chút.",
          id: "Saya menahan diri atau makan sedikit saja, memikirkan kalori dan kesehatan."
        },
        score: 1
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구가 장난으로 나를 놀렸을 때 반응은?",
      en: "How do you react when a friend teases you as a joke?",
      ja: "友達が冗談でからかったときの反応は？",
      'zh-CN': "朋友开玩笑捉弄你时的反应是？",
      'zh-TW': "朋友開玩笑捉弄你時的反應是？",
      vi: "Bạn phản ứng thế nào khi bạn bè trêu chọc bạn?",
      id: "Bagaimana reaksi Anda ketika teman mengolok-olok Anda sebagai lelucon?"
    },
    options: [
      {
        text: { 
          ko: "\"하지 마!\" 삐지거나 똑같이 갚아준다", 
          en: "\"Stop it!\" I get upset or pay them back the same way.",
          ja: "「やめて！」とすねるか、同じように仕返しする。",
          'zh-CN': "\"别这样！\"生气或同样报复回去。",
          'zh-TW': "「別這樣！」生氣或同樣報復回去。",
          vi: "\"Đừng làm thế!\" Tôi giận hoặc trả đũa lại.",
          id: "\"Jangan!\" Saya kesal atau membalas dengan cara yang sama."
        },
        score: 0
      },
      {
        text: { 
          ko: "\"그래그래~\" 허허 웃으며 넘긴다", 
          en: "\"Yeah, yeah~\" I laugh it off and let it go.",
          ja: "「そうそう～」と笑ってやり過ごす。",
          'zh-CN': "\"好啦好啦~\"笑着带过。",
          'zh-TW': "「好啦好啦～」笑著帶過。",
          vi: "\"Ừm ừm~\" Cười và bỏ qua.",
          id: "\"Ya ya~\" Saya tertawa dan melupakannya."
        },
        score: 1
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "TV 채널을 돌리다가 멈추는 곳은?",
      en: "Where do you stop when flipping through TV channels?",
      ja: "テレビのチャンネルを回していて止まる場所は？",
      'zh-CN': "换台时会停在哪个频道？",
      'zh-TW': "換台時會停在哪個頻道？",
      vi: "Bạn dừng lại ở đâu khi lướt kênh TV?",
      id: "Di mana Anda berhenti saat membolak-balik saluran TV?"
    },
    options: [
      {
        text: { 
          ko: "아이돌 무대, 예능, 애니메이션", 
          en: "Idol performances, variety shows, anime",
          ja: "アイドルステージ、バラエティ、アニメ",
          'zh-CN': "偶像舞台、综艺、动画",
          'zh-TW': "偶像舞台、綜藝、動畫",
          vi: "Sân khấu thần tượng, giải trí, anime",
          id: "Pertunjukan idola, acara varietas, anime"
        },
        score: 0
      },
      {
        text: { 
          ko: "뉴스, 다큐멘터리, 건강 정보 프로그램", 
          en: "News, documentaries, health information programs",
          ja: "ニュース、ドキュメンタリー、健康情報番組",
          'zh-CN': "新闻、纪录片、健康信息节目",
          'zh-TW': "新聞、紀錄片、健康資訊節目",
          vi: "Tin tức, phim tài liệu, chương trình sức khỏe",
          id: "Berita, dokumenter, program informasi kesehatan"
        },
        score: 1
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "최신 유행하는 신조어나 밈(Meme)을 들었을 때?",
      en: "When you hear the latest trending slang or memes?",
      ja: "最新の流行語やミームを聞いたときは？",
      'zh-CN': "听到最新的流行语或梗时？",
      'zh-TW': "聽到最新的流行語或梗時？",
      vi: "Khi bạn nghe thấy từ lóng hoặc meme mới nhất?",
      id: "Ketika Anda mendengar istilah slang atau meme terbaru?"
    },
    options: [
      {
        text: { 
          ko: "이미 다 알고 있고 평소에도 자주 쓴다", 
          en: "I already know them all and use them often.",
          ja: "すでに全部知っていて、普段からよく使う。",
          'zh-CN': "已经全知道了，平时也经常用。",
          'zh-TW': "已經全知道了，平時也經常用。",
          vi: "Đã biết hết rồi và thường xuyên dùng.",
          id: "Saya sudah tahu semuanya dan sering menggunakannya."
        },
        score: 0
      },
      {
        text: { 
          ko: "무슨 뜻인지 몰라서 검색해 보거나 물어본다", 
          en: "I don't know what it means, so I search or ask someone.",
          ja: "意味がわからないので検索するか聞く。",
          'zh-CN': "不知道什么意思，所以搜索或询问。",
          'zh-TW': "不知道什麼意思，所以搜尋或詢問。",
          vi: "Không biết nghĩa nên tìm kiếm hoặc hỏi.",
          id: "Saya tidak tahu artinya, jadi saya mencari atau bertanya."
        },
        score: 1
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "생일 선물로 받고 싶은 것은?",
      en: "What would you like to receive as a birthday present?",
      ja: "誕生日プレゼントとして欲しいものは？",
      'zh-CN': "想要什么作为生日礼物？",
      'zh-TW': "想要什麼作為生日禮物？",
      vi: "Bạn muốn nhận gì làm quà sinh nhật?",
      id: "Apa yang ingin Anda terima sebagai hadiah ulang tahun?"
    },
    options: [
      {
        text: { 
          ko: "예쁜 쓰레기라도 내가 갖고 싶었던 장난감이나 굿즈", 
          en: "Even if it's pretty trash, toys or goods I wanted",
          ja: "きれいなゴミでも、欲しかったおもちゃやグッズ",
          'zh-CN': "即使是漂亮的垃圾，也想要我想要的玩具或周边",
          'zh-TW': "即使是漂亮的垃圾，也想要我想要的玩具或周邊",
          vi: "Dù là rác đẹp, nhưng là đồ chơi hoặc hàng hóa tôi muốn",
          id: "Bahkan jika itu sampah yang cantik, mainan atau barang yang saya inginkan"
        },
        score: 0
      },
      {
        text: { 
          ko: "현금, 상품권, 영양제 등 실용적인 것", 
          en: "Practical things like cash, gift cards, supplements",
          ja: "現金、ギフト券、サプリメントなど実用的なもの",
          'zh-CN': "现金、礼品卡、营养品等实用的东西",
          'zh-TW': "現金、禮品卡、營養品等實用的東西",
          vi: "Những thứ thực tế như tiền mặt, thẻ quà tặng, thực phẩm chức năng",
          id: "Hal-hal praktis seperti uang tunai, kartu hadiah, suplemen"
        },
        score: 1
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "놀이공원에 갔다! 당신의 행동은?",
      en: "You went to an amusement park! What do you do?",
      ja: "遊園地に行った！あなたの行動は？",
      'zh-CN': "去了游乐园！你的行为是？",
      'zh-TW': "去了遊樂園！你的行為是？",
      vi: "Bạn đã đến công viên giải trí! Bạn làm gì?",
      id: "Anda pergi ke taman hiburan! Apa yang Anda lakukan?"
    },
    options: [
      {
        text: { 
          ko: "머리띠 쓰고 뛰어다니며 놀이기구 풀코스를 즐긴다", 
          en: "Wear a headband and run around enjoying all the rides",
          ja: "ヘアバンドをして走り回り、アトラクションをフルコースで楽しむ。",
          'zh-CN': "戴上头带，跑来跑去，玩遍所有游乐设施",
          'zh-TW': "戴上頭帶，跑來跑去，玩遍所有遊樂設施",
          vi: "Đội băng đô và chạy nhảy, tận hưởng tất cả các trò chơi",
          id: "Memakai ikat kepala dan berlarian menikmati semua wahana"
        },
        score: 0
      },
      {
        text: { 
          ko: "벤치에 앉아서 짐을 지키거나 퍼레이드를 구경한다", 
          en: "Sit on a bench guarding the bags or watch the parade",
          ja: "ベンチに座って荷物を見守るか、パレードを見る。",
          'zh-CN': "坐在长椅上看包或看游行",
          'zh-TW': "坐在長椅上看包或看遊行",
          vi: "Ngồi trên ghế giữ đồ hoặc xem diễu hành",
          id: "Duduk di bangku menjaga tas atau menonton parade"
        },
        score: 1
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "낯선 사람이 말을 걸어올 때?",
      en: "When a stranger approaches you?",
      ja: "見知らぬ人が話しかけてきたときは？",
      'zh-CN': "陌生人搭话时？",
      'zh-TW': "陌生人搭話時？",
      vi: "Khi người lạ đến nói chuyện?",
      id: "Ketika orang asing mendekati Anda?"
    },
    options: [
      {
        text: { 
          ko: "호기심을 가지거나 해맑게 대답해 준다", 
          en: "I'm curious or answer cheerfully",
          ja: "好奇心を持つか、明るく答える。",
          'zh-CN': "感到好奇或开朗地回答",
          'zh-TW': "感到好奇或開朗地回答",
          vi: "Tò mò hoặc trả lời vui vẻ",
          id: "Saya penasaran atau menjawab dengan ceria"
        },
        score: 0
      },
      {
        text: { 
          ko: "경계심을 가지고 \"도를 아십니까?\"인지 의심한다", 
          en: "I'm cautious and suspect if it's a scam",
          ja: "警戒心を持ち、「詐欺ではないか」と疑う。",
          'zh-CN': "保持警惕，怀疑是否是诈骗",
          'zh-TW': "保持警惕，懷疑是否是詐騙",
          vi: "Cảnh giác và nghi ngờ có phải lừa đảo không",
          id: "Saya waspada dan curiga apakah itu penipuan"
        },
        score: 1
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "지금 당장 1억 원이 생긴다면?",
      en: "If you suddenly got 100 million won right now?",
      ja: "今すぐ1億ウォンが手に入ったら？",
      'zh-CN': "如果现在突然有1亿韩元？",
      'zh-TW': "如果現在突然有1億韓元？",
      vi: "Nếu ngay bây giờ bạn có 100 triệu won?",
      id: "Jika Anda tiba-tiba mendapat 100 juta won sekarang?"
    },
    options: [
      {
        text: { 
          ko: "사고 싶었던 것 다 사고, 여행 가고 플렉스(Flex) 한다", 
          en: "Buy everything I wanted, travel, and flex",
          ja: "欲しかったものを全部買って、旅行して、自慢する。",
          'zh-CN': "买所有想要的东西，去旅行，炫耀",
          'zh-TW': "買所有想要的東西，去旅行，炫耀",
          vi: "Mua tất cả những gì muốn, đi du lịch và khoe khoang",
          id: "Beli semua yang saya inginkan, bepergian, dan pamer"
        },
        score: 0
      },
      {
        text: { 
          ko: "대출금을 갚거나 노후 자금으로 저축/투자한다", 
          en: "Pay off loans or save/invest for retirement",
          ja: "ローンを返済するか、老後の資金として貯蓄・投資する。",
          'zh-CN': "还清贷款或作为养老资金储蓄/投资",
          'zh-TW': "還清貸款或作為養老資金儲蓄/投資",
          vi: "Trả nợ hoặc tiết kiệm/đầu tư cho tuổi già",
          id: "Melunasi pinjaman atau menabung/berinvestasi untuk pensiun"
        },
        score: 1
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "슬픈 일이 생겨서 울고 싶을 때?",
      en: "When something sad happens and you want to cry?",
      ja: "悲しいことがあって泣きたいときは？",
      'zh-CN': "发生伤心事想哭时？",
      'zh-TW': "發生傷心事想哭時？",
      vi: "Khi có chuyện buồn và muốn khóc?",
      id: "Ketika sesuatu yang menyedihkan terjadi dan Anda ingin menangis?"
    },
    options: [
      {
        text: { 
          ko: "엉엉 소리 내어 울며 감정을 표출한다", 
          en: "Cry out loud and express my emotions",
          ja: "声を出して泣き、感情を表現する。",
          'zh-CN': "放声大哭，表达情感",
          'zh-TW': "放聲大哭，表達情感",
          vi: "Khóc to và bộc lộ cảm xúc",
          id: "Menangis keras dan mengekspresikan emosi saya"
        },
        score: 0
      },
      {
        text: { 
          ko: "남들 앞에선 참고 혼자 삭히거나 눈물을 삼킨다", 
          en: "Hold back in front of others, suppress it alone or swallow tears",
          ja: "人前では我慢して、一人で抑え込むか涙を飲み込む。",
          'zh-CN': "在别人面前忍住，独自压抑或吞下眼泪",
          'zh-TW': "在別人面前忍住，獨自壓抑或吞下眼淚",
          vi: "Nhịn trước mặt người khác, một mình kìm nén hoặc nuốt nước mắt",
          id: "Menahan diri di depan orang lain, menekannya sendirian atau menelan air mata"
        },
        score: 1
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신이 생각하는 '행복'이란?",
      en: "What do you think 'happiness' is?",
      ja: "あなたが考える「幸せ」とは？",
      'zh-CN': "你认为的'幸福'是什么？",
      'zh-TW': "你認為的「幸福」是什麼？",
      vi: "Bạn nghĩ 'hạnh phúc' là gì?",
      id: "Apa yang Anda pikirkan tentang 'kebahagiaan'?"
    },
    options: [
      {
        text: { 
          ko: "매일매일 신나고 즐거운 일이 가득한 것", 
          en: "Every day being full of exciting and fun things",
          ja: "毎日毎日、ワクワクして楽しいことがいっぱいあること",
          'zh-CN': "每天都有很多兴奋和有趣的事",
          'zh-TW': "每天都有很多興奮和有趣的事",
          vi: "Mỗi ngày đều đầy những điều thú vị và vui vẻ",
          id: "Setiap hari penuh dengan hal-hal yang menyenangkan dan menyenangkan"
        },
        score: 0
      },
      {
        text: { 
          ko: "아무 일 없이 평온하고 안락한 상태", 
          en: "A peaceful and comfortable state with nothing happening",
          ja: "何もなく、平穏で安らかな状態",
          'zh-CN': "平静舒适，什么事都没有的状态",
          'zh-TW': "平靜舒適，什麼事都沒有的狀態",
          vi: "Trạng thái bình yên và thoải mái, không có gì xảy ra",
          id: "Keadaan damai dan nyaman tanpa ada yang terjadi"
        },
        score: 1
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "다시 어린 시절로 돌아갈 수 있다면?",
      en: "If you could go back to your childhood?",
      ja: "もう一度子供時代に戻れるなら？",
      'zh-CN': "如果能回到童年？",
      'zh-TW': "如果能回到童年？",
      vi: "Nếu bạn có thể quay lại thời thơ ấu?",
      id: "Jika Anda bisa kembali ke masa kanak-kanak?"
    },
    options: [
      {
        text: { 
          ko: "무조건 돌아간다. 그때가 좋았다", 
          en: "I'd definitely go back. Those times were good.",
          ja: "絶対に戻る。あの頃が良かった。",
          'zh-CN': "绝对要回去。那时候很好。",
          'zh-TW': "絕對要回去。那時候很好。",
          vi: "Chắc chắn quay lại. Thời đó tốt lắm.",
          id: "Saya pasti akan kembali. Masa itu bagus."
        },
        score: 0
      },
      {
        text: { 
          ko: "돌아가기 싫다. 지금이 편하거나 다시 겪기 힘들다", 
          en: "I don't want to go back. Now is comfortable or it's hard to go through again",
          ja: "戻りたくない。今が楽だし、もう一度経験するのは大変だ。",
          'zh-CN': "不想回去。现在更舒服，或者不想再经历一次",
          'zh-TW': "不想回去。現在更舒服，或者不想再經歷一次",
          vi: "Không muốn quay lại. Bây giờ thoải mái hơn hoặc khó trải qua lại",
          id: "Saya tidak ingin kembali. Sekarang lebih nyaman atau sulit untuk mengalaminya lagi"
        },
        score: 1
      }
    ]
  }
];

export const phase2MentalAgeResults: Phase2MentalAgeResult[] = [
  {
    type: "Type1",
    emoji: "👶",
    title: {
      ko: "순수 영혼, 5세 응석받이",
      en: "Pure Soul, 5-Year-Old Spoiled Child",
      ja: "純粋な魂、5歳の甘えん坊",
      'zh-CN': "纯真灵魂，5岁被宠坏的孩子",
      'zh-TW': "純真靈魂，5歲被寵壞的孩子",
      vi: "Linh hồn thuần khiết, 5 tuổi được nuông chiều",
      id: "Jiwa Murni, Anak Manja 5 Tahun"
    },
    shortDescription: {
      ko: "\"세상은 놀이터! 뽀로로가 친구 하자고 하겠네\"",
      en: "\"The world is a playground! Pororo would want to be friends\"",
      ja: "「世界は遊び場！ポロロが友達になりたいと言いそう」",
      'zh-CN': "\"世界是游乐场！波鲁鲁会想和我做朋友\"",
      'zh-TW': "「世界是遊樂場！波魯魯會想和我做朋友」",
      vi: "\"Thế giới là sân chơi! Pororo sẽ muốn làm bạn\"",
      id: "\"Dunia adalah taman bermain! Pororo akan ingin berteman\""
    },
    description: {
      ko: "당신의 정신 연령은 미취학 아동 수준입니다. 호기심이 많고 감정 표현이 솔직하며, 세상의 때가 묻지 않은 순수함을 간직하고 있습니다. 복잡한 계산보다는 당장의 즐거움이 중요합니다. 귀엽고 사랑스럽지만, 가끔은 철없다는 소리를 들을 수도 있습니다.",
      en: "Your mental age is at a preschool level. You're very curious, express emotions honestly, and maintain a pure innocence untouched by the world. Immediate joy is more important than complex calculations. You're cute and lovable, but sometimes people might say you're immature.",
      ja: "あなたの精神年齢は未就学児レベルです。好奇心旺盛で感情表現が素直で、世の中の汚れに染まっていない純粋さを保っています。複雑な計算より、今の楽しさが大切です。可愛くて愛らしいですが、時々「子供っぽい」と言われることもあります。",
      'zh-CN': "你的精神年龄处于学龄前水平。你充满好奇心，情感表达诚实，保持着未被世俗污染的纯真。当下的快乐比复杂的计算更重要。你可爱又讨人喜欢，但有时可能会被人说幼稚。",
      'zh-TW': "你的精神年齡處於學齡前水平。你充滿好奇心，情感表達誠實，保持著未被世俗污染的純真。當下的快樂比複雜的計算更重要。你可愛又討人喜歡，但有時可能會被人說幼稚。",
      vi: "Tuổi tinh thần của bạn ở mức trẻ mầm non. Bạn rất tò mò, bộc lộ cảm xúc chân thật và giữ được sự ngây thơ thuần khiết. Niềm vui ngay lập tức quan trọng hơn những tính toán phức tạp. Bạn dễ thương và đáng yêu, nhưng đôi khi có thể bị nói là chưa chín chắn.",
      id: "Usia mental Anda berada di tingkat prasekolah. Anda sangat penasaran, mengekspresikan emosi dengan jujur, dan mempertahankan kepolosan murni yang tidak tersentuh dunia. Kegembiraan langsung lebih penting daripada perhitungan kompleks. Anda lucu dan menggemaskan, tetapi kadang-kadang orang mungkin mengatakan Anda belum dewasa."
    },
    mentalAgeLevel: {
      ko: "5세 (응석받이)",
      en: "5 years old (Spoiled)",
      ja: "5歳（甘えん坊）",
      'zh-CN': "5岁（被宠坏）",
      'zh-TW': "5歲（被寵壞）",
      vi: "5 tuổi (Được nuông chiều)",
      id: "5 tahun (Manja)"
    },
    characteristics: {
      ko: "떼쓰기 장인, 해맑음, 단순함",
      en: "Master of tantrums, bright, simple",
      ja: "駄々こねの達人、明るさ、シンプル",
      'zh-CN': "撒娇高手，开朗，单纯",
      'zh-TW': "撒嬌高手，開朗，單純",
      vi: "Bậc thầy ăn vạ, tươi sáng, đơn giản",
      id: "Master mengamuk, cerah, sederhana"
    },
    goodMatch: {
      ko: "Type 5 (챙겨주는 어른)",
      en: "Type 5 (Caring Adult)",
      ja: "タイプ5（世話好きな大人）",
      'zh-CN': "类型5（照顾人的大人）",
      'zh-TW': "類型5（照顧人的大人）",
      vi: "Loại 5 (Người lớn chăm sóc)",
      id: "Tipe 5 (Dewasa yang Peduli)"
    },
    badMatch: {
      ko: "Type 6 (너무 진지함)",
      en: "Type 6 (Too Serious)",
      ja: "タイプ6（真面目すぎる）",
      'zh-CN': "类型6（太严肃）",
      'zh-TW': "類型6（太嚴肅）",
      vi: "Loại 6 (Quá nghiêm túc)",
      id: "Tipe 6 (Terlalu Serius)"
    }
  },
  {
    type: "Type2",
    emoji: "🎒",
    title: {
      ko: "천방지축, 10세 초등학생",
      en: "Energetic, 10-Year-Old Elementary Student",
      ja: "元気いっぱい、10歳の小学生",
      'zh-CN': "精力充沛，10岁小学生",
      'zh-TW': "精力充沛，10歲小學生",
      vi: "Năng động, học sinh tiểu học 10 tuổi",
      id: "Enerjik, Siswa SD 10 Tahun"
    },
    shortDescription: {
      ko: "\"궁금한 건 못 참아! 호기심 대장\"",
      en: "\"Can't resist curiosity! Captain of curiosity\"",
      ja: "「気になることは我慢できない！好奇心の隊長」",
      'zh-CN': "\"忍不住好奇！好奇心队长\"",
      'zh-TW': "「忍不住好奇！好奇心隊長」",
      vi: "\"Không thể chịu được sự tò mò! Đội trưởng tò mò\"",
      id: "\"Tidak bisa menahan rasa ingin tahu! Kapten rasa ingin tahu\""
    },
    description: {
      ko: "당신은 활동적이고 장난기가 넘치는 초등학생 멘탈입니다. 유행에 민감하고 친구들과 어울려 노는 것을 가장 좋아합니다. 아직 사회의 쓴맛을 잘 모르며, 상상력이 풍부합니다. 충동적인 면이 있어 갖고 싶은 건 가져야 직성이 풀립니다.",
      en: "You have an active, playful elementary school student mentality. You're sensitive to trends and love hanging out with friends the most. You don't know the bitterness of society yet, and have a rich imagination. You have an impulsive side, and need to get what you want to feel satisfied.",
      ja: "あなたは活動的で遊び心に満ちた小学生メンタルです。流行に敏感で、友達と遊ぶのが一番好きです。まだ社会の厳しさを知らず、想像力が豊かです。衝動的な面があり、欲しいものは手に入れないと気が済みません。",
      'zh-CN': "你有着活跃、顽皮的小学生心态。对流行很敏感，最喜欢和朋友一起玩。还不了解社会的苦涩，想象力丰富。有冲动的一面，想要的东西必须得到才能满足。",
      'zh-TW': "你有著活躍、頑皮的小學生心態。對流行很敏感，最喜歡和朋友一起玩。還不了解社會的苦澀，想像力豐富。有衝動的一面，想要的東西必須得到才能滿足。",
      vi: "Bạn có tinh thần học sinh tiểu học năng động và nghịch ngợm. Bạn nhạy cảm với xu hướng và thích chơi với bạn bè nhất. Bạn chưa biết đến sự cay đắng của xã hội và có trí tưởng tượng phong phú. Có phần bốc đồng, phải có được thứ mình muốn mới thỏa mãn.",
      id: "Anda memiliki mentalitas siswa SD yang aktif dan suka bermain. Anda sensitif terhadap tren dan paling suka bergaul dengan teman. Anda belum tahu kepahitan masyarakat, dan memiliki imajinasi yang kaya. Anda memiliki sisi impulsif, dan perlu mendapatkan apa yang Anda inginkan untuk merasa puas."
    },
    mentalAgeLevel: {
      ko: "10세 (초등학생)",
      en: "10 years old (Elementary Student)",
      ja: "10歳（小学生）",
      'zh-CN': "10岁（小学生）",
      'zh-TW': "10歲（小學生）",
      vi: "10 tuổi (Học sinh tiểu học)",
      id: "10 tahun (Siswa SD)"
    },
    characteristics: {
      ko: "유행어 사용, 승부욕 강함, 떡볶이 좋아함",
      en: "Uses trendy words, strong competitive spirit, loves tteokbokki",
      ja: "流行語を使う、勝負欲が強い、トッポッキが好き",
      'zh-CN': "使用流行语，好胜心强，喜欢炒年糕",
      'zh-TW': "使用流行語，好勝心強，喜歡炒年糕",
      vi: "Dùng từ lóng, tinh thần cạnh tranh mạnh, thích tteokbokki",
      id: "Menggunakan kata-kata tren, semangat kompetitif kuat, suka tteokbokki"
    },
    goodMatch: {
      ko: "Type 1 (같이 놀면 재밌음)",
      en: "Type 1 (Fun to play with)",
      ja: "タイプ1（一緒に遊ぶと楽しい）",
      'zh-CN': "类型1（一起玩很有趣）",
      'zh-TW': "類型1（一起玩很有趣）",
      vi: "Loại 1 (Vui khi chơi cùng)",
      id: "Tipe 1 (Menyenangkan untuk diajak bermain)"
    },
    badMatch: {
      ko: "Type 5 (잔소리함)",
      en: "Type 5 (Nagging)",
      ja: "タイプ5（小言を言う）",
      'zh-CN': "类型5（唠叨）",
      'zh-TW': "類型5（嘮叨）",
      vi: "Loại 5 (Hay cằn nhằn)",
      id: "Tipe 5 (Mengomel)"
    }
  },
  {
    type: "Type3",
    emoji: "🎸",
    title: {
      ko: "질풍노도, 17세 사춘기 소년/소녀",
      en: "Stormy Adolescence, 17-Year-Old Teen Boy/Girl",
      ja: "疾風怒濤、17歳の思春期の少年/少女",
      'zh-CN': "疾风怒涛，17岁青春期少年/少女",
      'zh-TW': "疾風怒濤，17歲青春期少年/少女",
      vi: "Tuổi dậy thì bão tố, thiếu niên/thiếu nữ 17 tuổi",
      id: "Badai Remaja, Remaja 17 Tahun"
    },
    shortDescription: {
      ko: "\"건드리지 마... 나 지금 센치해\"",
      en: "\"Don't touch me... I'm being sentimental right now\"",
      ja: "「触らないで...今、センチメンタルなの」",
      'zh-CN': "\"别碰我...我现在很感伤\"",
      'zh-TW': "「別碰我...我現在很感傷」",
      vi: "\"Đừng chạm vào... Tôi đang cảm động\"",
      id: "\"Jangan sentuh... Saya sedang sentimental sekarang\""
    },
    description: {
      ko: "당신은 감수성이 풍부하고 자아가 강한 청소년기 멘탈입니다. 남들의 시선을 많이 의식하면서도 남들과 다르고 싶어 하는 모순적인 심리를 가지고 있습니다. 세상에 대한 반항심과 미래에 대한 막연한 불안감이 공존합니다. 예술적 감각이 뛰어난 편입니다.",
      en: "You have a sensitive, strong-ego adolescent mentality. You have a contradictory psychology of being very conscious of others' gazes while wanting to be different from them. Rebellion against the world and vague anxiety about the future coexist. You have excellent artistic sense.",
      ja: "あなたは感受性が豊かで自我が強い思春期メンタルです。他人の視線をとても気にしながらも、他人とは違いたいという矛盾した心理を持っています。世界への反抗心と未来への漠然とした不安が共存しています。芸術的センスが優れています。",
      'zh-CN': "你有着敏感、自我强烈的青春期心态。既非常在意别人的眼光，又想和别人不同，有着矛盾的心理。对世界的反叛和对未来的模糊不安并存。艺术感很强。",
      'zh-TW': "你有著敏感、自我強烈的青春期心態。既非常在意別人的眼光，又想和別人不同，有著矛盾的心理。對世界的反叛和對未來的模糊不安並存。藝術感很強。",
      vi: "Bạn có tinh thần tuổi teen nhạy cảm và tự tôn cao. Bạn có tâm lý mâu thuẫn: rất ý thức về ánh mắt người khác nhưng lại muốn khác biệt. Sự nổi loạn với thế giới và nỗi lo lắng mơ hồ về tương lai cùng tồn tại. Bạn có cảm quan nghệ thuật xuất sắc.",
      id: "Anda memiliki mentalitas remaja yang sensitif dan ego yang kuat. Anda memiliki psikologi kontradiktif yang sangat sadar akan pandangan orang lain sambil ingin berbeda dari mereka. Pemberontakan terhadap dunia dan kecemasan samar tentang masa depan hidup berdampingan. Anda memiliki rasa artistik yang sangat baik."
    },
    mentalAgeLevel: {
      ko: "17세 (사춘기)",
      en: "17 years old (Adolescence)",
      ja: "17歳（思春期）",
      'zh-CN': "17岁（青春期）",
      'zh-TW': "17歲（青春期）",
      vi: "17 tuổi (Tuổi dậy thì)",
      id: "17 tahun (Remaja)"
    },
    characteristics: {
      ko: "감정 기복, 허세, 흑염룡",
      en: "Emotional ups and downs, showing off, dark dragon",
      ja: "感情の起伏、見栄、黒炎竜",
      'zh-CN': "情绪起伏，爱炫耀，黑龙",
      'zh-TW': "情緒起伏，愛炫耀，黑龍",
      vi: "Thay đổi cảm xúc, khoe khoang, rồng lửa đen",
      id: "Naik turun emosi, pamer, naga api hitam"
    },
    goodMatch: {
      ko: "Type 3 (서로 이해함)",
      en: "Type 3 (Understand each other)",
      ja: "タイプ3（お互いを理解する）",
      'zh-CN': "类型3（互相理解）",
      'zh-TW': "類型3（互相理解）",
      vi: "Loại 3 (Hiểu nhau)",
      id: "Tipe 3 (Saling memahami)"
    },
    badMatch: {
      ko: "Type 4 (현실적인 꼰대질)",
      en: "Type 4 (Realistic nagging)",
      ja: "タイプ4（現実的な小言）",
      'zh-CN': "类型4（现实的唠叨）",
      'zh-TW': "類型4（現實的嘮叨）",
      vi: "Loại 4 (Cằn nhằn thực tế)",
      id: "Tipe 4 (Mengomel realistis)"
    }
  },
  {
    type: "Type4",
    emoji: "💼",
    title: {
      ko: "현실 적응 완료, 25세 사회초년생",
      en: "Reality Adaptation Complete, 25-Year-Old New Adult",
      ja: "現実適応完了、25歳の社会人1年目",
      'zh-CN': "现实适应完成，25岁社会新人",
      'zh-TW': "現實適應完成，25歲社會新人",
      vi: "Thích ứng thực tế hoàn thành, người trẻ 25 tuổi mới vào đời",
      id: "Adaptasi Realitas Selesai, Dewasa Muda 25 Tahun"
    },
    shortDescription: {
      ko: "\"열정! 열정! 꿈과 현실 사이\"",
      en: "\"Passion! Passion! Between dreams and reality\"",
      ja: "「情熱！情熱！夢と現実の間」",
      'zh-CN': "\"热情！热情！梦想与现实之间\"",
      'zh-TW': "「熱情！熱情！夢想與現實之間」",
      vi: "\"Đam mê! Đam mê! Giữa giấc mơ và thực tế\"",
      id: "\"Semangat! Semangat! Antara mimpi dan kenyataan\""
    },
    description: {
      ko: "당신은 이제 막 어른의 세계에 발을 들인 청년 멘탈입니다. 현실적인 감각이 생기기 시작했지만, 여전히 꿈과 낭만을 잃지 않았습니다. 성공에 대한 욕구가 강하고 치열하게 살아갑니다. 트렌드를 따라가면서도 실속을 챙길 줄 아는 스마트한 타입입니다.",
      en: "You're a young adult who just stepped into the adult world. You're starting to develop realistic sense, but still haven't lost your dreams and romance. You have a strong desire for success and live intensely. You're a smart type who follows trends while also being practical.",
      ja: "あなたは今、大人の世界に足を踏み入れたばかりの若者メンタルです。現実的な感覚が生まれ始めましたが、まだ夢とロマンを失っていません。成功への欲求が強く、激しく生きています。トレンドを追いながらも実利を取ることを知っているスマートなタイプです。",
      'zh-CN': "你是刚踏入成人世界的年轻人。开始有了现实感，但还没有失去梦想和浪漫。对成功的渴望很强，生活得很激烈。是既跟随潮流又懂得实际的聪明类型。",
      'zh-TW': "你是剛踏入成人世界的年輕人。開始有了現實感，但還沒有失去夢想和浪漫。對成功的渴望很強，生活得很激烈。是既跟隨潮流又懂得實際的聰明類型。",
      vi: "Bạn là người trẻ vừa bước vào thế giới người lớn. Bạn bắt đầu có cảm giác thực tế nhưng vẫn chưa mất đi giấc mơ và sự lãng mạn. Bạn có khát vọng thành công mạnh mẽ và sống mãnh liệt. Bạn là kiểu thông minh, theo xu hướng nhưng cũng biết thực tế.",
      id: "Anda adalah orang dewasa muda yang baru saja memasuki dunia orang dewasa. Anda mulai mengembangkan rasa realistis, tetapi masih belum kehilangan mimpi dan romansa. Anda memiliki keinginan yang kuat untuk sukses dan hidup dengan intens. Anda adalah tipe pintar yang mengikuti tren sambil juga praktis."
    },
    mentalAgeLevel: {
      ko: "25세 (사회초년생)",
      en: "25 years old (New Adult)",
      ja: "25歳（社会人1年目）",
      'zh-CN': "25岁（社会新人）",
      'zh-TW': "25歲（社會新人）",
      vi: "25 tuổi (Người trẻ mới vào đời)",
      id: "25 tahun (Dewasa Muda)"
    },
    characteristics: {
      ko: "갓생 살기, 워라밸 중시, 가성비 따짐",
      en: "Living the 'god life', values work-life balance, cares about value for money",
      ja: "「神生活」を送る、ワークライフバランス重視、コスパを気にする",
      'zh-CN': "过「神生活」，重视工作生活平衡，在意性价比",
      'zh-TW': "過「神生活」，重視工作生活平衡，在意性價比",
      vi: "Sống cuộc sống 'thần thánh', coi trọng cân bằng công việc-cuộc sống, quan tâm giá trị",
      id: "Hidup 'kehidupan dewa', menghargai keseimbangan kerja-hidup, peduli nilai uang"
    },
    goodMatch: {
      ko: "Type 6 (지혜를 줌)",
      en: "Type 6 (Gives wisdom)",
      ja: "タイプ6（知恵を与える）",
      'zh-CN': "类型6（给予智慧）",
      'zh-TW': "類型6（給予智慧）",
      vi: "Loại 6 (Cho trí tuệ)",
      id: "Tipe 6 (Memberikan kebijaksanaan)"
    },
    badMatch: {
      ko: "Type 1 (철없어 보임)",
      en: "Type 1 (Seems immature)",
      ja: "タイプ1（子供っぽく見える）",
      'zh-CN': "类型1（看起来幼稚）",
      'zh-TW': "類型1（看起來幼稚）",
      vi: "Loại 1 (Trông chưa chín chắn)",
      id: "Tipe 1 (Terlihat belum dewasa)"
    }
  },
  {
    type: "Type5",
    emoji: "👔",
    title: {
      ko: "노련한 리더, 45세 중년의 어른",
      en: "Experienced Leader, 45-Year-Old Middle-Aged Adult",
      ja: "経験豊富なリーダー、45歳の中高年",
      'zh-CN': "经验丰富的领导者，45岁中年人",
      'zh-TW': "經驗豐富的領導者，45歲中年人",
      vi: "Lãnh đạo dày dạn, người trung niên 45 tuổi",
      id: "Pemimpin Berpengalaman, Dewasa Paruh Baya 45 Tahun"
    },
    shortDescription: {
      ko: "\"인생은 실전이야. 산전수전 다 겪은 바이브\"",
      en: "\"Life is real. I've been through it all vibe\"",
      ja: "「人生は実戦だ。山戦水戦すべて経験したバイブ」",
      'zh-CN': "\"人生是实战。经历过风风雨雨的氛围\"",
      'zh-TW': "「人生是實戰。經歷過風風雨雨的氛圍」",
      vi: "\"Cuộc sống là thực chiến. Vibe đã trải qua mọi thứ\"",
      id: "\"Hidup adalah pertempuran nyata. Vibe yang telah mengalami segalanya\""
    },
    description: {
      ko: "당신은 책임감이 강하고 안정을 추구하는 중년 멘탈입니다. 웬만한 일에는 놀라지 않으며, 감정보다는 이성적으로 문제를 해결합니다. 보수적인 성향이 있을 수 있지만, 경험에서 우러나오는 연륜으로 주변 사람들을 이끌어주는 리더십이 있습니다. 건강과 재테크에 관심이 많습니다.",
      en: "You have a responsible, stability-seeking middle-aged mentality. You don't get surprised by most things and solve problems rationally rather than emotionally. You may have conservative tendencies, but you have leadership that guides people around you with wisdom from experience. You're very interested in health and financial management.",
      ja: "あなたは責任感が強く、安定を求める中高年メンタルです。普通のことに驚かず、感情よりも理性的に問題を解決します。保守的な傾向があるかもしれませんが、経験から生まれる知恵で周りの人々を導くリーダーシップがあります。健康と資産運用に興味があります。",
      'zh-CN': "你有着责任感强、追求稳定的中年心态。对一般事情不会惊讶，理性地解决问题而不是感情用事。可能有保守倾向，但有着用经验中产生的智慧引导周围人的领导力。对健康和理财很感兴趣。",
      'zh-TW': "你有著責任感強、追求穩定的中年心態。對一般事情不會驚訝，理性地解決問題而不是感情用事。可能有保守傾向，但有著用經驗中產生的智慧引導周圍人的領導力。對健康和理財很感興趣。",
      vi: "Bạn có tinh thần trung niên có trách nhiệm và tìm kiếm sự ổn định. Bạn không ngạc nhiên trước hầu hết mọi thứ và giải quyết vấn đề một cách hợp lý hơn là cảm tính. Bạn có thể có xu hướng bảo thủ, nhưng có khả năng lãnh đạo dẫn dắt người xung quanh bằng trí tuệ từ kinh nghiệm. Bạn rất quan tâm đến sức khỏe và quản lý tài chính.",
      id: "Anda memiliki mentalitas paruh baya yang bertanggung jawab dan mencari stabilitas. Anda tidak terkejut dengan sebagian besar hal dan menyelesaikan masalah secara rasional daripada emosional. Anda mungkin memiliki kecenderungan konservatif, tetapi Anda memiliki kepemimpinan yang membimbing orang di sekitar Anda dengan kebijaksanaan dari pengalaman. Anda sangat tertarik pada kesehatan dan manajemen keuangan."
    },
    mentalAgeLevel: {
      ko: "45세 (중년의 어른)",
      en: "45 years old (Middle-Aged Adult)",
      ja: "45歳（中高年）",
      'zh-CN': "45岁（中年人）",
      'zh-TW': "45歲（中年人）",
      vi: "45 tuổi (Người trung niên)",
      id: "45 tahun (Dewasa Paruh Baya)"
    },
    characteristics: {
      ko: "뉴스 시청, 등산, \"라떼는 말이야\"",
      en: "Watching news, hiking, \"Back in my day...\"",
      ja: "ニュース視聴、登山、「昔はね...」",
      'zh-CN': "看新闻，登山，\"想当年...\"",
      'zh-TW': "看新聞，登山，「想當年...」",
      vi: "Xem tin tức, leo núi, \"Ngày xưa...\"",
      id: "Menonton berita, mendaki gunung, \"Dulu...\""
    },
    goodMatch: {
      ko: "Type 1 (챙겨주고 싶음)",
      en: "Type 1 (Wants to take care)",
      ja: "タイプ1（世話を焼きたがる）",
      'zh-CN': "类型1（想照顾）",
      'zh-TW': "類型1（想照顧）",
      vi: "Loại 1 (Muốn chăm sóc)",
      id: "Tipe 1 (Ingin merawat)"
    },
    badMatch: {
      ko: "Type 2 (정신 사나움)",
      en: "Type 2 (Too energetic)",
      ja: "タイプ2（元気すぎる）",
      'zh-CN': "类型2（太有活力）",
      'zh-TW': "類型2（太有活力）",
      vi: "Loại 2 (Quá năng động)",
      id: "Tipe 2 (Terlalu energik)"
    }
  },
  {
    type: "Type6",
    emoji: "🧘‍♂️",
    title: {
      ko: "해탈의 경지, 80세 산신령",
      en: "State of Enlightenment, 80-Year-Old Mountain Spirit",
      ja: "解脱の境地、80歳の山神",
      'zh-CN': "解脱境界，80岁山神",
      'zh-TW': "解脫境界，80歲山神",
      vi: "Cảnh giới giải thoát, thần núi 80 tuổi",
      id: "Keadaan Pencerahan, Roh Gunung 80 Tahun"
    },
    shortDescription: {
      ko: "\"허허... 다 부질없다. 물 흐르는 대로 살거라\"",
      en: "\"Haha... It's all meaningless. Live as the water flows\"",
      ja: "「ははは...すべて無意味だ。水の流れるままに生きよ」",
      'zh-CN': "\"哈哈...都没意义。顺其自然吧\"",
      'zh-TW': "「哈哈...都沒意義。順其自然吧」",
      vi: "\"Haha... Tất cả đều vô nghĩa. Sống như nước chảy\"",
      id: "\"Haha... Semuanya tidak berarti. Hidup seperti air mengalir\""
    },
    description: {
      ko: "당신은 인생 2회차, 아니 10회차쯤 되는 현자 멘탈입니다. 세상 만사에 통달하여 욕심이 없고 마음이 평온합니다. 친구들의 고민을 들어주면 \"시간이 해결해 줄 거야\" 같은 도인 같은 소리를 합니다. 겉모습은 젊을지 몰라도 속에는 영감님이 살고 있습니다.",
      en: "You have a sage mentality, like you're on your second, or maybe tenth life. You've mastered everything in the world, have no greed, and your mind is peaceful. When listening to friends' worries, you say things like \"Time will solve it\" like a Taoist master. You may look young on the outside, but a wise old man lives inside.",
      ja: "あなたは人生2回目、いや10回目くらいの賢者メンタルです。世の中のすべてに精通し、欲がなく、心が平穏です。友達の悩みを聞くと「時間が解決してくれる」のような仙人のようなことを言います。外見は若く見えるかもしれませんが、中には仙人が住んでいます。",
      'zh-CN': "你有着像是第二世，或者第十世的人生般的贤者心态。精通世间万事，没有贪欲，心境平和。听朋友烦恼时会说「时间会解决的」这样像得道者一样的话。外表可能看起来年轻，但内心住着一位仙人。",
      'zh-TW': "你有著像是第二世，或者第十世的人生般的賢者心態。精通世間萬事，沒有貪欲，心境平和。聽朋友煩惱時會說「時間會解決的」這樣像得道者一樣的話。外表可能看起來年輕，但內心住著一位仙人。",
      vi: "Bạn có tinh thần hiền triết như đang ở kiếp thứ hai, hoặc thứ mười. Bạn đã thông thạo mọi thứ trên đời, không tham lam và tâm trí bình yên. Khi nghe bạn bè tâm sự, bạn nói những điều như \"Thời gian sẽ giải quyết\" như một đạo sĩ. Bề ngoài có thể trẻ nhưng bên trong có một vị thánh sống.",
      id: "Anda memiliki mentalitas bijak, seperti Anda berada di kehidupan kedua, atau mungkin kesepuluh. Anda telah menguasai segalanya di dunia, tidak memiliki keserakahan, dan pikiran Anda damai. Saat mendengarkan kekhawatiran teman, Anda mengatakan hal-hal seperti \"Waktu akan menyelesaikannya\" seperti master Tao. Anda mungkin terlihat muda di luar, tetapi seorang pria bijak tua hidup di dalam."
    },
    mentalAgeLevel: {
      ko: "80세 (산신령)",
      en: "80 years old (Mountain Spirit)",
      ja: "80歳（山神）",
      'zh-CN': "80岁（山神）",
      'zh-TW': "80歲（山神）",
      vi: "80 tuổi (Thần núi)",
      id: "80 tahun (Roh Gunung)"
    },
    characteristics: {
      ko: "무소유, 초연함, 낮잠 좋아함",
      en: "Non-possession, detachment, loves naps",
      ja: "無所有、超然、昼寝が好き",
      'zh-CN': "无所有，超然，喜欢午睡",
      'zh-TW': "無所有，超然，喜歡午睡",
      vi: "Không sở hữu, siêu thoát, thích ngủ trưa",
      id: "Tanpa kepemilikan, terlepas, suka tidur siang"
    },
    goodMatch: {
      ko: "Type 4 (열정을 귀여워함)",
      en: "Type 4 (Finds passion cute)",
      ja: "タイプ4（情熱を可愛がる）",
      'zh-CN': "类型4（觉得热情可爱）",
      'zh-TW': "類型4（覺得熱情可愛）",
      vi: "Loại 4 (Thấy đam mê dễ thương)",
      id: "Tipe 4 (Menganggap semangat lucu)"
    },
    badMatch: {
      ko: "Type 1 (기가 빨림)",
      en: "Type 1 (Too fast-paced)",
      ja: "タイプ1（テンポが速すぎる）",
      'zh-CN': "类型1（节奏太快）",
      'zh-TW': "類型1（節奏太快）",
      vi: "Loại 1 (Nhịp độ quá nhanh)",
      id: "Tipe 1 (Terlalu cepat)"
    }
  }
];

export function calculatePhase2MentalAgeResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore <= 1) {
    return "Type1";
  } else if (totalScore <= 3) {
    return "Type2";
  } else if (totalScore <= 6) {
    return "Type3";
  } else if (totalScore <= 9) {
    return "Type4";
  } else if (totalScore <= 11) {
    return "Type5";
  } else if (totalScore >= 12) {
    return "Type6";
  } else {
    return "Type4"; // Fallback
  }
}
