export interface KpopExamQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    isCorrect: boolean;
  }[];
  correctAnswer: string; // 'A', 'B', 'C', 'D'
}

export interface KpopExamResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  scoreRange: Record<string, string>; // "0~2개", "3~4개" 등
  level: Record<string, string>; // "Lv. 1", "Lv. 10" 등
  recommendation: Record<string, string>;
}

export const kpopExamQuestions: KpopExamQuestion[] = [
  {
    id: 1,
    question: {
      ko: "방탄소년단(BTS)의 공식 팬덤 이름은?",
      en: "What is the official fandom name of BTS?",
      ja: "防弾少年団(BTS)の公式ファンダム名は？",
      'zh-CN': "防弹少年团(BTS)的官方粉丝名是？",
      'zh-TW': "防彈少年團(BTS)的官方粉絲名是？",
      vi: "Tên fandom chính thức của BTS là gì?",
      id: "Apa nama fandom resmi BTS?"
    },
    options: [
      {
        text: {
          ko: "VIP",
          en: "VIP",
          ja: "VIP",
          'zh-CN': "VIP",
          'zh-TW': "VIP",
          vi: "VIP",
          id: "VIP"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "EXO-L",
          en: "EXO-L",
          ja: "EXO-L",
          'zh-CN': "EXO-L",
          'zh-TW': "EXO-L",
          vi: "EXO-L",
          id: "EXO-L"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "ARMY",
          en: "ARMY",
          ja: "ARMY",
          'zh-CN': "ARMY",
          'zh-TW': "ARMY",
          vi: "ARMY",
          id: "ARMY"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "BLINK",
          en: "BLINK",
          ja: "BLINK",
          'zh-CN': "BLINK",
          'zh-TW': "BLINK",
          vi: "BLINK",
          id: "BLINK"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'C',
  },
  {
    id: 2,
    question: {
      ko: "다음 중 그룹과 데뷔곡이 잘못 짝지어진 것은?",
      en: "Which of the following has an incorrect pairing of group and debut song?",
      ja: "次のうち、グループとデビュー曲の組み合わせが間違っているのは？",
      'zh-CN': "以下哪组组合和出道曲的配对是错误的？",
      'zh-TW': "以下哪組組合和出道曲的配對是錯誤的？",
      vi: "Cặp nhóm và bài hát debut nào sau đây không đúng?",
      id: "Manakah dari berikut ini yang memiliki pasangan grup dan lagu debut yang salah?"
    },
    options: [
      {
        text: {
          ko: "트와이스 - OOH-AHH하게",
          en: "TWICE - OOH-AHH하게",
          ja: "TWICE - OOH-AHH하게",
          'zh-CN': "TWICE - OOH-AHH하게",
          'zh-TW': "TWICE - OOH-AHH하게",
          vi: "TWICE - OOH-AHH하게",
          id: "TWICE - OOH-AHH하게"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "뉴진스 - Hype Boy",
          en: "NewJeans - Hype Boy",
          ja: "NewJeans - Hype Boy",
          'zh-CN': "NewJeans - Hype Boy",
          'zh-TW': "NewJeans - Hype Boy",
          vi: "NewJeans - Hype Boy",
          id: "NewJeans - Hype Boy"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "블랙핑크 - 붐바야",
          en: "BLACKPINK - 붐바야",
          ja: "BLACKPINK - 붐바야",
          'zh-CN': "BLACKPINK - 붐바야",
          'zh-TW': "BLACKPINK - 붐바야",
          vi: "BLACKPINK - 붐바야",
          id: "BLACKPINK - 붐바야"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "아이브 - Next Level",
          en: "IVE - Next Level",
          ja: "IVE - Next Level",
          'zh-CN': "IVE - Next Level",
          'zh-TW': "IVE - Next Level",
          vi: "IVE - Next Level",
          id: "IVE - Next Level"
        },
        isCorrect: true,
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 3,
    question: {
      ko: "세븐틴(SEVENTEEN)의 멤버 수는 총 몇 명일까요?",
      en: "How many members are in SEVENTEEN?",
      ja: "SEVENTEENのメンバー数は合計何人ですか？",
      'zh-CN': "SEVENTEEN有多少名成员？",
      'zh-TW': "SEVENTEEN有多少名成員？",
      vi: "SEVENTEEN có tổng cộng bao nhiêu thành viên?",
      id: "Berapa jumlah anggota SEVENTEEN?"
    },
    options: [
      {
        text: {
          ko: "17명",
          en: "17 members",
          ja: "17人",
          'zh-CN': "17名",
          'zh-TW': "17名",
          vi: "17 thành viên",
          id: "17 anggota"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "13명",
          en: "13 members",
          ja: "13人",
          'zh-CN': "13名",
          'zh-TW': "13名",
          vi: "13 thành viên",
          id: "13 anggota"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "11명",
          en: "11 members",
          ja: "11人",
          'zh-CN': "11名",
          'zh-TW': "11名",
          vi: "11 thành viên",
          id: "11 anggota"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "7명",
          en: "7 members",
          ja: "7人",
          'zh-CN': "7名",
          'zh-TW': "7名",
          vi: "7 thành viên",
          id: "7 anggota"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 4,
    question: {
      ko: "SM 엔터테인먼트 걸그룹 '에스파(aespa)'의 세계관에서, 멤버들을 위협하는 악당의 이름은?",
      en: "In the universe of SM Entertainment's girl group 'aespa', what is the name of the villain that threatens the members?",
      ja: "SMエンターテインメントのガールグループ「aespa」の世界観で、メンバーを脅かす悪役の名前は？",
      'zh-CN': "在SM娱乐女团'aespa'的世界观中，威胁成员的反派名字是？",
      'zh-TW': "在SM娛樂女團'aespa'的世界觀中，威脅成員的反派名字是？",
      vi: "Trong vũ trụ của nhóm nữ 'aespa' của SM Entertainment, tên của nhân vật phản diện đe dọa các thành viên là gì?",
      id: "Dalam alam semesta grup wanita 'aespa' dari SM Entertainment, apa nama penjahat yang mengancam para anggota?"
    },
    options: [
      {
        text: {
          ko: "블랙맘바",
          en: "Black Mamba",
          ja: "ブラックマンバ",
          'zh-CN': "黑曼巴",
          'zh-TW': "黑曼巴",
          vi: "Black Mamba",
          id: "Black Mamba"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "나이비스",
          en: "Naevis",
          ja: "ナエビス",
          'zh-CN': "Naevis",
          'zh-TW': "Naevis",
          vi: "Naevis",
          id: "Naevis"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "광야",
          en: "광야 (KWANGYA)",
          ja: "광야 (KWANGYA)",
          'zh-CN': "광야 (KWANGYA)",
          'zh-TW': "광야 (KWANGYA)",
          vi: "광야 (KWANGYA)",
          id: "광야 (KWANGYA)"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "마이",
          en: "MY",
          ja: "MY",
          'zh-CN': "MY",
          'zh-TW': "MY",
          vi: "MY",
          id: "MY"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'A',
  },
  {
    id: 5,
    question: {
      ko: "다음 중 응원봉 별명이 잘못 연결된 것은?",
      en: "Which of the following has an incorrect pairing of group and lightstick nickname?",
      ja: "次のうち、応援棒のニックネームの組み合わせが間違っているのは？",
      'zh-CN': "以下哪组组合和应援棒昵称的配对是错误的？",
      'zh-TW': "以下哪組組合和應援棒暱稱的配對是錯誤的？",
      vi: "Cặp nhóm và biệt danh lightstick nào sau đây không đúng?",
      id: "Manakah dari berikut ini yang memiliki pasangan grup dan julukan lightstick yang salah?"
    },
    options: [
      {
        text: {
          ko: "빅뱅 - 뱅봉",
          en: "BIGBANG - 뱅봉",
          ja: "BIGBANG - 뱅봉",
          'zh-CN': "BIGBANG - 뱅봉",
          'zh-TW': "BIGBANG - 뱅봉",
          vi: "BIGBANG - 뱅봉",
          id: "BIGBANG - 뱅봉"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "블랙핑크 - 뿅봉",
          en: "BLACKPINK - 뿅봉",
          ja: "BLACKPINK - 뿅봉",
          'zh-CN': "BLACKPINK - 뿅봉",
          'zh-TW': "BLACKPINK - 뿅봉",
          vi: "BLACKPINK - 뿅봉",
          id: "BLACKPINK - 뿅봉"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "트와이스 - 캔디봉",
          en: "TWICE - 캔디봉",
          ja: "TWICE - 캔디봉",
          'zh-CN': "TWICE - 캔디봉",
          'zh-TW': "TWICE - 캔디봉",
          vi: "TWICE - 캔디봉",
          id: "TWICE - 캔디봉"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "NCT - 아미밤",
          en: "NCT - 아미밤",
          ja: "NCT - 아미밤",
          'zh-CN': "NCT - 아미밤",
          'zh-TW': "NCT - 아미밤",
          vi: "NCT - 아미밤",
          id: "NCT - 아미밤"
        },
        isCorrect: true,
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 6,
    question: {
      ko: "팬들이 좋아하는 아이돌의 생일이나 기념일에 지하철 전광판 등에 광고를 거는 문화를 무엇이라 할까요?",
      en: "What is the culture called where fans place advertisements on subway displays and other places for their favorite idol's birthday or anniversary?",
      ja: "ファンが好きなアイドルの誕生日や記念日に地下鉄の電光掲示板などに広告を出す文化を何と言いますか？",
      'zh-CN': "粉丝在喜欢的偶像生日或纪念日在地铁显示屏等地方投放广告的文化叫什么？",
      'zh-TW': "粉絲在喜歡的偶像生日或紀念日在地鐵顯示屏等地方投放廣告的文化叫什麼？",
      vi: "Văn hóa mà fan đặt quảng cáo trên màn hình tàu điện ngầm và các nơi khác vào sinh nhật hoặc kỷ niệm của thần tượng yêu thích được gọi là gì?",
      id: "Apa nama budaya di mana penggemar memasang iklan di layar kereta bawah tanah dan tempat lain untuk ulang tahun atau peringatan idola favorit mereka?"
    },
    options: [
      {
        text: {
          ko: "조공",
          en: "Tribute (Old term)",
          ja: "貢物（旧用語）",
          'zh-CN': "贡物（旧词）",
          'zh-TW': "貢物（舊詞）",
          vi: "Cống vật (Thuật ngữ cũ)",
          id: "Upeti (Istilah lama)"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "서포트",
          en: "Support",
          ja: "サポート",
          'zh-CN': "应援",
          'zh-TW': "應援",
          vi: "Ủng hộ",
          id: "Dukungan"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "스밍 (스트리밍)",
          en: "Streaming",
          ja: "ストリーミング",
          'zh-CN': "刷流",
          'zh-TW': "刷流",
          vi: "Streaming",
          id: "Streaming"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "공방 (공개 방송)",
          en: "Public Broadcast",
          ja: "公開放送",
          'zh-CN': "公开放送",
          'zh-TW': "公開放送",
          vi: "Phát sóng công khai",
          id: "Siaran Publik"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 7,
    question: {
      ko: "다음 중 리더가 없는 그룹은?",
      en: "Which of the following groups has no leader?",
      ja: "次のうち、リーダーがいないグループは？",
      'zh-CN': "以下哪个组合没有队长？",
      'zh-TW': "以下哪個組合沒有隊長？",
      vi: "Nhóm nào sau đây không có leader?",
      id: "Manakah dari grup berikut yang tidak memiliki leader?"
    },
    options: [
      {
        text: {
          ko: "방탄소년단 (BTS)",
          en: "BTS",
          ja: "BTS",
          'zh-CN': "BTS",
          'zh-TW': "BTS",
          vi: "BTS",
          id: "BTS"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "뉴진스 (NewJeans)",
          en: "NewJeans",
          ja: "NewJeans",
          'zh-CN': "NewJeans",
          'zh-TW': "NewJeans",
          vi: "NewJeans",
          id: "NewJeans"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "스트레이 키즈 (Stray Kids)",
          en: "Stray Kids",
          ja: "Stray Kids",
          'zh-CN': "Stray Kids",
          'zh-TW': "Stray Kids",
          vi: "Stray Kids",
          id: "Stray Kids"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "(여자)아이들",
          en: "(G)I-DLE",
          ja: "(G)I-DLE",
          'zh-CN': "(G)I-DLE",
          'zh-TW': "(G)I-DLE",
          vi: "(G)I-DLE",
          id: "(G)I-DLE"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 8,
    question: {
      ko: "아이돌 포토카드를 예절 샷으로 찍을 때, 음식과 함께 찍는 투명한 카드를 무엇이라 부를까요?",
      en: "What is the transparent card called that is photographed with food when taking a 'manners shot' of an idol photocard?",
      ja: "アイドルのフォトカードをマナーショットで撮る時、食べ物と一緒に撮る透明なカードを何と言いますか？",
      'zh-CN': "拍摄偶像小卡礼仪照时，与食物一起拍摄的透明卡片叫什么？",
      'zh-TW': "拍攝偶像小卡禮儀照時，與食物一起拍攝的透明卡片叫什麼？",
      vi: "Tấm thẻ trong suốt được chụp cùng thức ăn khi chụp ảnh 'lịch sự' của photocard thần tượng được gọi là gì?",
      id: "Apa nama kartu transparan yang difoto bersama makanan saat mengambil 'foto sopan' dari photocard idola?"
    },
    options: [
      {
        text: {
          ko: "탑로더",
          en: "Toploader",
          ja: "トップローダー",
          'zh-CN': "卡套",
          'zh-TW': "卡套",
          vi: "Toploader",
          id: "Toploader"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "예절포카",
          en: "Manners Photocard",
          ja: "マナーポカ",
          'zh-CN': "礼仪卡",
          'zh-TW': "禮儀卡",
          vi: "Photocard lịch sự",
          id: "Photocard Sopan"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "투명포카",
          en: "Transparent Photocard",
          ja: "透明ポカ",
          'zh-CN': "透明卡",
          'zh-TW': "透明卡",
          vi: "Photocard trong suốt",
          id: "Photocard Transparan"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "슬리브",
          en: "Sleeve",
          ja: "スリーブ",
          'zh-CN': "卡套",
          'zh-TW': "卡套",
          vi: "Sleeve",
          id: "Sleeve"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'B',
  },
  {
    id: 9,
    question: {
      ko: "'엔딩 요정'의 뜻으로 가장 적절한 것은?",
      en: "What is the most appropriate meaning of 'ending fairy'?",
      ja: "「エンディング妖精」の意味として最も適切なのは？",
      'zh-CN': "'ending fairy'最恰当的含义是什么？",
      'zh-TW': "'ending fairy'最恰當的含義是什麼？",
      vi: "Ý nghĩa phù hợp nhất của 'ending fairy' là gì?",
      id: "Apa arti yang paling tepat dari 'ending fairy'?"
    },
    options: [
      {
        text: {
          ko: "무대 마지막에 카메라 원샷을 받으며 매력을 발산하는 멤버",
          en: "A member who receives a camera close-up at the end of the stage and radiates charm",
          ja: "ステージの最後にカメラのクローズアップを受け、魅力を放つメンバー",
          'zh-CN': "在舞台结束时获得镜头特写并散发魅力的成员",
          'zh-TW': "在舞台結束時獲得鏡頭特寫並散發魅力的成員",
          vi: "Thành viên nhận được cận cảnh camera ở cuối sân khấu và tỏa sáng sức hút",
          id: "Anggota yang menerima close-up kamera di akhir panggung dan memancarkan pesona"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "팀에서 가장 키가 작은 요정 같은 멤버",
          en: "The smallest, fairy-like member in the team",
          ja: "チームで最も背が低い妖精のようなメンバー",
          'zh-CN': "团队中最矮小的像精灵一样的成员",
          'zh-TW': "團隊中最矮小的像精靈一樣的成員",
          vi: "Thành viên nhỏ nhất, giống tiên trong nhóm",
          id: "Anggota terkecil seperti peri dalam tim"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "무대 실수를 가장 많이 해서 요주의 인물인 멤버",
          en: "A member who makes the most stage mistakes and is a person of concern",
          ja: "ステージで最もミスをして要注意人物であるメンバー",
          'zh-CN': "在舞台上失误最多需要关注的成员",
          'zh-TW': "在舞台上失誤最多需要關注的成員",
          vi: "Thành viên mắc nhiều lỗi trên sân khấu nhất và là người cần chú ý",
          id: "Anggota yang paling banyak melakukan kesalahan di panggung dan menjadi perhatian"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "팀에서 가장 마지막에 합류한 멤버",
          en: "The member who joined the team last",
          ja: "チームに最後に加入したメンバー",
          'zh-CN': "最后加入团队的成员",
          'zh-TW': "最後加入團隊的成員",
          vi: "Thành viên tham gia nhóm cuối cùng",
          id: "Anggota yang bergabung dengan tim terakhir"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'A',
  },
  {
    id: 10,
    question: {
      ko: "노래 가사 중 \"Shy Shy Shy (샤샤샤)\" 열풍을 일으킨 트와이스의 곡은?",
      en: "Which TWICE song caused the \"Shy Shy Shy (샤샤샤)\" craze in the lyrics?",
      ja: "歌詞の中で「Shy Shy Shy (샤샤샤)」ブームを起こしたTWICEの曲は？",
      'zh-CN': "歌词中引起\"Shy Shy Shy (샤샤샤)\"热潮的TWICE歌曲是？",
      'zh-TW': "歌詞中引起\"Shy Shy Shy (샤샤샤)\"熱潮的TWICE歌曲是？",
      vi: "Bài hát nào của TWICE gây ra cơn sốt \"Shy Shy Shy (샤샤샤)\" trong lời bài hát?",
      id: "Lagu TWICE mana yang menyebabkan demam \"Shy Shy Shy (샤샤샤)\" dalam lirik?"
    },
    options: [
      {
        text: {
          ko: "TT",
          en: "TT",
          ja: "TT",
          'zh-CN': "TT",
          'zh-TW': "TT",
          vi: "TT",
          id: "TT"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "LIKEY",
          en: "LIKEY",
          ja: "LIKEY",
          'zh-CN': "LIKEY",
          'zh-TW': "LIKEY",
          vi: "LIKEY",
          id: "LIKEY"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "CHEER UP",
          en: "CHEER UP",
          ja: "CHEER UP",
          'zh-CN': "CHEER UP",
          'zh-TW': "CHEER UP",
          vi: "CHEER UP",
          id: "CHEER UP"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "FANCY",
          en: "FANCY",
          ja: "FANCY",
          'zh-CN': "FANCY",
          'zh-TW': "FANCY",
          vi: "FANCY",
          id: "FANCY"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'C',
  },
  {
    id: 11,
    question: {
      ko: "남자 아이돌 그룹 'EXO(엑소)'의 데뷔 초창기 세계관 컨셉은?",
      en: "What was the universe concept of the boy group 'EXO' in their early debut?",
      ja: "男性アイドルグループ「EXO」のデビュー初期の世界観コンセプトは？",
      'zh-CN': "男团'EXO'出道初期的世界观概念是？",
      'zh-TW': "男團'EXO'出道初期的世界觀概念是？",
      vi: "Khái niệm vũ trụ của nhóm nam 'EXO' trong thời kỳ debut ban đầu là gì?",
      id: "Apa konsep alam semesta dari grup idola pria 'EXO' pada awal debut mereka?"
    },
    options: [
      {
        text: {
          ko: "초능력을 가진 외계 행성 소년들",
          en: "Boys from an alien planet with superpowers",
          ja: "超能力を持つ異星の惑星の少年たち",
          'zh-CN': "拥有超能力的外星少年",
          'zh-TW': "擁有超能力的外星少年",
          vi: "Những chàng trai từ hành tinh ngoài hành tinh có siêu năng lực",
          id: "Anak laki-laki dari planet alien dengan kekuatan super"
        },
        isCorrect: true,
      },
      {
        text: {
          ko: "학교를 점령한 반항아들",
          en: "Rebels who took over a school",
          ja: "学校を占領した反抗者たち",
          'zh-CN': "占领学校的叛逆者",
          'zh-TW': "佔領學校的叛逆者",
          vi: "Những kẻ nổi loạn chiếm lấy trường học",
          id: "Pemberontak yang mengambil alih sekolah"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "중세 시대 기사단",
          en: "Medieval knights",
          ja: "中世時代の騎士団",
          'zh-CN': "中世纪骑士团",
          'zh-TW': "中世紀騎士團",
          vi: "Hiệp sĩ thời trung cổ",
          id: "Kesatria abad pertengahan"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "미래에서 온 사이보그",
          en: "Cyborgs from the future",
          ja: "未来から来たサイボーグ",
          'zh-CN': "来自未来的机器人",
          'zh-TW': "來自未來的機器人",
          vi: "Người máy từ tương lai",
          id: "Cyborg dari masa depan"
        },
        isCorrect: false,
      },
    ],
    correctAnswer: 'A',
  },
  {
    id: 12,
    question: {
      ko: "서바이벌 프로그램 '프로듀스 101'을 통해 결성된 그룹이 아닌 것은?",
      en: "Which of the following groups was NOT formed through the survival program 'Produce 101'?",
      ja: "サバイバルプログラム「プロデュース101」を通じて結成されたグループではないのは？",
      'zh-CN': "以下哪个组合不是通过生存节目'Produce 101'组成的？",
      'zh-TW': "以下哪個組合不是通過生存節目'Produce 101'組成的？",
      vi: "Nhóm nào sau đây KHÔNG được thành lập thông qua chương trình sống còn 'Produce 101'?",
      id: "Manakah dari grup berikut yang TIDAK dibentuk melalui program survival 'Produce 101'?"
    },
    options: [
      {
        text: {
          ko: "I.O.I",
          en: "I.O.I",
          ja: "I.O.I",
          'zh-CN': "I.O.I",
          'zh-TW': "I.O.I",
          vi: "I.O.I",
          id: "I.O.I"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "Wanna One",
          en: "Wanna One",
          ja: "Wanna One",
          'zh-CN': "Wanna One",
          'zh-TW': "Wanna One",
          vi: "Wanna One",
          id: "Wanna One"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "IZ*ONE",
          en: "IZ*ONE",
          ja: "IZ*ONE",
          'zh-CN': "IZ*ONE",
          'zh-TW': "IZ*ONE",
          vi: "IZ*ONE",
          id: "IZ*ONE"
        },
        isCorrect: false,
      },
      {
        text: {
          ko: "ITZY",
          en: "ITZY",
          ja: "ITZY",
          'zh-CN': "ITZY",
          'zh-TW': "ITZY",
          vi: "ITZY",
          id: "ITZY"
        },
        isCorrect: true,
      },
    ],
    correctAnswer: 'D',
  },
];

export const kpopExamResults: KpopExamResult[] = [
  {
    type: "Type1",
    emoji: "👶",
    title: {
      ko: "K-POP 입문자, 머글 (Muggle)",
      en: "K-POP Beginner, Muggle",
      ja: "K-POP入門者、マグル",
      'zh-CN': "K-POP入门者，麻瓜",
      'zh-TW': "K-POP入門者，麻瓜",
      vi: "Người mới K-POP, Muggle",
      id: "Pemula K-POP, Muggle"
    },
    shortDescription: {
      ko: "\"노래는 들어봤는데... 얼굴은 잘 몰라요\"",
      en: "\"I've heard the songs... but I don't know the faces well\"",
      ja: "「歌は聞いたことがあるけど...顔はよく知らない」",
      'zh-CN': "\"听过歌...但不太认识脸\"",
      'zh-TW': "\"聽過歌...但不太認識臉\"",
      vi: "\"Đã nghe nhạc... nhưng không biết mặt\"",
      id: "\"Sudah dengar lagunya... tapi tidak kenal wajahnya\""
    },
    description: {
      ko: "당신은 K-POP에 큰 관심이 없는 일반인, 일명 '머글'입니다. 길거리에 나오는 유명한 노래 정도는 흥얼거리지만, 가수의 이름이나 멤버 수까지는 잘 모릅니다. 하지만 괜찮습니다! 이제부터 매력에 빠져들 일만 남았으니까요.",
      en: "You are a regular person with little interest in K-POP, a so-called 'muggle'. You might hum along to famous songs you hear on the street, but you don't know the singers' names or member counts well. But that's okay! There's only the charm left to fall into from now on.",
      ja: "あなたはK-POPにあまり興味のない一般人、いわゆる「マグル」です。街で流れる有名な曲くらいは口ずさめますが、歌手の名前やメンバー数まではよく知りません。でも大丈夫です！これから魅力にハマるだけですから。",
      'zh-CN': "你是一个对K-POP不太感兴趣的普通人，也就是所谓的'麻瓜'。你可能会哼唱街上听到的流行歌曲，但不太了解歌手的名字或成员数量。但没关系！从现在开始，你只需要被魅力吸引就可以了。",
      'zh-TW': "你是一個對K-POP不太感興趣的普通人，也就是所謂的'麻瓜'。你可能會哼唱街上聽到的流行歌曲，但不太了解歌手的名字或成員數量。但沒關係！從現在開始，你只需要被魅力吸引就可以了。",
      vi: "Bạn là người bình thường không quan tâm nhiều đến K-POP, còn gọi là 'muggle'. Bạn có thể ngân nga những bài hát nổi tiếng nghe trên phố, nhưng không biết rõ tên ca sĩ hay số thành viên. Nhưng không sao! Từ giờ chỉ cần bị cuốn hút bởi sức hút thôi.",
      id: "Anda adalah orang biasa yang tidak terlalu tertarik pada K-POP, yang disebut 'muggle'. Anda mungkin bersenandung mengikuti lagu terkenal yang didengar di jalan, tetapi tidak tahu nama penyanyi atau jumlah anggota dengan baik. Tapi tidak apa-apa! Dari sekarang hanya tersisa pesona untuk terpikat."
    },
    scoreRange: {
      ko: "0 ~ 2개",
      en: "0 ~ 2 correct",
      ja: "0〜2個",
      'zh-CN': "0 ~ 2题",
      'zh-TW': "0 ~ 2題",
      vi: "0 ~ 2 câu",
      id: "0 ~ 2 benar"
    },
    level: {
      ko: "Lv. 1",
      en: "Lv. 1",
      ja: "Lv. 1",
      'zh-CN': "Lv. 1",
      'zh-TW': "Lv. 1",
      vi: "Lv. 1",
      id: "Lv. 1"
    },
    recommendation: {
      ko: "유튜브에서 뮤직비디오 모음 영상을 보세요. 신세계가 열립니다.",
      en: "Watch music video compilation videos on YouTube. A new world will open.",
      ja: "YouTubeでミュージックビデオのまとめ動画を見てください。新世界が開かれます。",
      'zh-CN': "在YouTube上观看音乐视频合集。新世界将为你打开。",
      'zh-TW': "在YouTube上觀看音樂視頻合集。新世界將為你打開。",
      vi: "Xem các video tổng hợp MV trên YouTube. Một thế giới mới sẽ mở ra.",
      id: "Tonton video kompilasi musik video di YouTube. Dunia baru akan terbuka."
    },
  },
  {
    type: "Type2",
    emoji: "🐣",
    title: {
      ko: "갓 입덕한 신입생, 라이트 팬",
      en: "Newly Entered Fandom, Light Fan",
      ja: "入ったばかりの新入生、ライトファン",
      'zh-CN': "刚入坑的新人，轻度粉丝",
      'zh-TW': "剛入坑的新人，輕度粉絲",
      vi: "Fan mới vào fandom, fan nhẹ",
      id: "Penggemar Baru Masuk Fandom, Penggemar Ringan"
    },
    shortDescription: {
      ko: "\"어? 이 노래 좋은데? 누구지?\"",
      en: "\"Huh? This song is good! Who is this?\"",
      ja: "「あれ？この曲いいね！誰だっけ？」",
      'zh-CN': "\"嗯？这首歌不错！是谁来着？\"",
      'zh-TW': "\"嗯？這首歌不錯！是誰來著？\"",
      vi: "\"Ồ? Bài này hay đấy! Ai đây nhỉ?\"",
      id: "\"Hah? Lagu ini bagus! Siapa ya?\""
    },
    description: {
      ko: "당신은 이제 막 K-POP에 흥미를 느끼기 시작했습니다. 유명한 그룹의 이름과 타이틀곡 정도는 알고 있습니다. 알고리즘의 선택을 받아 아이돌 영상 한두 개를 클릭하기 시작했군요. 조만간 '최애'가 생길 가능성이 높습니다.",
      en: "You've just started to become interested in K-POP. You know the names of famous groups and their title tracks. You've started clicking on one or two idol videos thanks to algorithm recommendations. You're likely to have a 'bias' soon.",
      ja: "あなたは今、K-POPに興味を持ち始めました。有名なグループの名前とタイトル曲くらいは知っています。アルゴリズムの選択を受けて、アイドルの動画を1、2本クリックし始めました。まもなく「推し」ができる可能性が高いです。",
      'zh-CN': "你刚刚开始对K-POP产生兴趣。你知道一些知名组合的名字和主打歌。由于算法推荐，你开始点击一两个偶像视频。你很可能很快就会有一个'本命'了。",
      'zh-TW': "你剛剛開始對K-POP產生興趣。你知道一些知名組合的名字和主打歌。由於算法推薦，你開始點擊一兩個偶像視頻。你很可能很快就會有一個'本命'了。",
      vi: "Bạn vừa bắt đầu quan tâm đến K-POP. Bạn biết tên các nhóm nổi tiếng và bài hát chủ đề của họ. Bạn đã bắt đầu click vào một hai video thần tượng nhờ gợi ý của thuật toán. Bạn có khả năng sẽ có 'bias' sớm thôi.",
      id: "Anda baru mulai tertarik pada K-POP. Anda tahu nama grup terkenal dan lagu utama mereka. Anda mulai mengklik satu atau dua video idola berkat rekomendasi algoritma. Kemungkinan besar Anda akan memiliki 'bias' segera."
    },
    scoreRange: {
      ko: "3 ~ 4개",
      en: "3 ~ 4 correct",
      ja: "3〜4個",
      'zh-CN': "3 ~ 4题",
      'zh-TW': "3 ~ 4題",
      vi: "3 ~ 4 câu",
      id: "3 ~ 4 benar"
    },
    level: {
      ko: "Lv. 10",
      en: "Lv. 10",
      ja: "Lv. 10",
      'zh-CN': "Lv. 10",
      'zh-TW': "Lv. 10",
      vi: "Lv. 10",
      id: "Lv. 10"
    },
    recommendation: {
      ko: "마음에 드는 그룹의 자컨(자체 콘텐츠)을 찾아보세요.",
      en: "Look for self-produced content from groups you like.",
      ja: "気に入ったグループの自コンテンツを探してみてください。",
      'zh-CN': "寻找你喜欢的组合的自制内容。",
      'zh-TW': "尋找你喜歡的組合的自製內容。",
      vi: "Tìm nội dung tự sản xuất của các nhóm bạn thích.",
      id: "Cari konten yang diproduksi sendiri dari grup yang Anda sukai."
    },
  },
  {
    type: "Type3",
    emoji: "🎧",
    title: {
      ko: "즐겨 듣는 대중 픽, 리스너 (Listener)",
      en: "Popular Pick Listener",
      ja: "よく聞く大衆ピック、リスナー",
      'zh-CN': "大众喜爱的听众",
      'zh-TW': "大眾喜愛的聽眾",
      vi: "Người nghe phổ biến",
      id: "Pendengar Pilihan Populer"
    },
    shortDescription: {
      ko: "\"신곡 나왔다! 플레이리스트 추가 완료\"",
      en: "\"New song released! Added to playlist\"",
      ja: "「新曲出た！プレイリスト追加完了」",
      'zh-CN': "\"新歌出来了！已添加到播放列表\"",
      'zh-TW': "\"新歌出來了！已添加到播放列表\"",
      vi: "\"Bài mới ra rồi! Đã thêm vào playlist\"",
      id: "\"Lagu baru keluar! Ditambahkan ke playlist\""
    },
    description: {
      ko: "당신은 팬덤 활동을 깊게 하진 않지만, K-POP 트렌드에 밝은 대중입니다. 멜론 차트 TOP 100을 꿰뚫고 있으며, 화제가 되는 밈이나 춤도 잘 알고 있습니다. 노래방에서 아이돌 노래 메들리가 가능한 수준입니다.",
      en: "You don't engage deeply in fandom activities, but you're well-versed in K-POP trends. You know the Melon Chart TOP 100 inside out, and you're familiar with trending memes and dances. You can sing idol song medleys at karaoke.",
      ja: "あなたはファンダム活動を深くはしませんが、K-POPのトレンドに明るい大衆です。MelonチャートTOP 100を把握しており、話題のミームやダンスもよく知っています。カラオケでアイドル曲のメドレーができるレベルです。",
      'zh-CN': "你虽然不深入参与粉丝活动，但对K-POP趋势很了解。你熟悉Melon排行榜TOP 100，也了解热门表情包和舞蹈。你可以在KTV唱偶像歌曲串烧。",
      'zh-TW': "你雖然不深入參與粉絲活動，但對K-POP趨勢很了解。你熟悉Melon排行榜TOP 100，也了解熱門表情包和舞蹈。你可以在KTV唱偶像歌曲串燒。",
      vi: "Bạn không tham gia sâu vào hoạt động fandom, nhưng bạn am hiểu xu hướng K-POP. Bạn nắm rõ Melon Chart TOP 100, và quen thuộc với các meme và vũ đạo đang hot. Bạn có thể hát medley bài hát thần tượng ở karaoke.",
      id: "Anda tidak terlibat dalam aktivitas fandom secara mendalam, tetapi Anda memahami tren K-POP. Anda mengetahui Melon Chart TOP 100, dan akrab dengan meme dan tarian yang sedang tren. Anda bisa menyanyikan medley lagu idola di karaoke."
    },
    scoreRange: {
      ko: "5 ~ 7개",
      en: "5 ~ 7 correct",
      ja: "5〜7個",
      'zh-CN': "5 ~ 7题",
      'zh-TW': "5 ~ 7題",
      vi: "5 ~ 7 câu",
      id: "5 ~ 7 benar"
    },
    level: {
      ko: "Lv. 30",
      en: "Lv. 30",
      ja: "Lv. 30",
      'zh-CN': "Lv. 30",
      'zh-TW': "Lv. 30",
      vi: "Lv. 30",
      id: "Lv. 30"
    },
    recommendation: {
      ko: "이제 한 그룹을 정해서 깊게 파보는 건 어떨까요?",
      en: "How about picking one group and diving deep into them?",
      ja: "今度は一つのグループを決めて深く掘り下げてみませんか？",
      'zh-CN': "现在选一个组合深入了解怎么样？",
      'zh-TW': "現在選一個組合深入了解怎麼樣？",
      vi: "Bây giờ chọn một nhóm và tìm hiểu sâu hơn thì sao?",
      id: "Bagaimana kalau memilih satu grup dan menyelaminya lebih dalam?"
    },
  },
  {
    type: "Type4",
    emoji: "💖",
    title: {
      ko: "앨범 좀 사본, 덕후 (Fan)",
      en: "Album Buyer, True Fan",
      ja: "アルバムを買う人、オタク",
      'zh-CN': "买专辑的人，真粉丝",
      'zh-TW': "買專輯的人，真粉絲",
      vi: "Người mua album, fan thật",
      id: "Pembeli Album, Penggemar Sejati"
    },
    shortDescription: {
      ko: "\"내 가수는 내가 지킨다! 스밍 돌려!\"",
      en: "\"I'll protect my artist! Keep streaming!\"",
      ja: "「私のアーティストは私が守る！ストリーミング回せ！」",
      'zh-CN': "\"我的歌手我来守护！继续刷流！\"",
      'zh-TW': "\"我的歌手我來守護！繼續刷流！\"",
      vi: "\"Thần tượng của tôi tôi sẽ bảo vệ! Tiếp tục streaming!\"",
      id: "\"Artis saya akan saya lindungi! Terus streaming!\""
    },
    description: {
      ko: "당신은 확실한 '최애'가 있는 진정한 팬입니다. 앨범 구매, 스밍(스트리밍), 투표 등 팬 활동에 적극적입니다. 응원봉을 흔들며 콘서트에 가본 경험이 있거나, 방 안에 포토카드가 전시되어 있을 확률이 높습니다. K-POP은 당신의 삶의 활력소입니다.",
      en: "You are a true fan with a definite 'bias'. You're active in fan activities like buying albums, streaming, and voting. You've likely been to concerts waving lightsticks, or have photocards displayed in your room. K-POP is the energy of your life.",
      ja: "あなたは確かな「推し」がいる真のファンです。アルバム購入、ストリーミング、投票などのファン活動に積極的です。応援棒を振ってコンサートに行った経験があるか、部屋にフォトカードが展示されている可能性が高いです。K-POPはあなたの人生の活力源です。",
      'zh-CN': "你是一个有明确'本命'的真粉丝。你积极参与粉丝活动，如购买专辑、刷流、投票等。你可能挥舞应援棒参加过演唱会，或者房间里展示着小卡。K-POP是你生活的活力源泉。",
      'zh-TW': "你是一個有明確'本命'的真粉絲。你積極參與粉絲活動，如購買專輯、刷流、投票等。你可能揮舞應援棒參加過演唱會，或者房間裡展示著小卡。K-POP是你生活的活力源泉。",
      vi: "Bạn là fan thật sự với 'bias' rõ ràng. Bạn tích cực tham gia hoạt động fan như mua album, streaming, bình chọn. Bạn có thể đã từng đi concert vẫy lightstick, hoặc có photocard trưng bày trong phòng. K-POP là nguồn năng lượng của cuộc sống bạn.",
      id: "Anda adalah penggemar sejati dengan 'bias' yang pasti. Anda aktif dalam aktivitas penggemar seperti membeli album, streaming, dan voting. Anda mungkin pernah pergi ke konser mengayunkan lightstick, atau memiliki photocard yang dipajang di kamar. K-POP adalah energi hidup Anda."
    },
    scoreRange: {
      ko: "8 ~ 9개",
      en: "8 ~ 9 correct",
      ja: "8〜9個",
      'zh-CN': "8 ~ 9题",
      'zh-TW': "8 ~ 9題",
      vi: "8 ~ 9 câu",
      id: "8 ~ 9 benar"
    },
    level: {
      ko: "Lv. 70",
      en: "Lv. 70",
      ja: "Lv. 70",
      'zh-CN': "Lv. 70",
      'zh-TW': "Lv. 70",
      vi: "Lv. 70",
      id: "Lv. 70"
    },
    recommendation: {
      ko: "덕질은 인생을 풍요롭게 합니다. 계속 정진하세요!",
      en: "Being a fan enriches life. Keep going!",
      ja: "オタク活動は人生を豊かにします。頑張って続けてください！",
      'zh-CN': "追星让生活更丰富。继续努力！",
      'zh-TW': "追星讓生活更豐富。繼續努力！",
      vi: "Làm fan làm phong phú cuộc sống. Tiếp tục cố gắng!",
      id: "Menjadi penggemar memperkaya hidup. Terus lanjutkan!"
    },
  },
  {
    type: "Type5",
    emoji: "🧙‍♂️",
    title: {
      ko: "걸어 다니는 위키백과, 고인물 (Expert)",
      en: "Walking Wikipedia, Expert",
      ja: "歩くウィキペディア、古参",
      'zh-CN': "行走的维基百科，老粉",
      'zh-TW': "行走的維基百科，老粉",
      vi: "Wikipedia biết đi, fan lão làng",
      id: "Wikipedia Berjalan, Ahli"
    },
    shortDescription: {
      ko: "\"라떼는 말이야... 1세대부터 섭렵했지\"",
      en: "\"Back in my day... I've covered everything from 1st gen\"",
      ja: "「昔はね...1世代から全部網羅したんだよ」",
      'zh-CN': "\"想当年...我从一代开始就全追了\"",
      'zh-TW': "\"想當年...我從一代開始就全追了\"",
      vi: "\"Ngày xưa... tôi đã theo dõi từ thế hệ 1\"",
      id: "\"Dulu... saya sudah mengikuti dari generasi 1\""
    },
    description: {
      ko: "당신은 K-POP의 역사와 흐름을 꿰뚫고 있는 고수입니다. 본진(최애 그룹) 뿐만 아니라 다른 그룹의 정보까지 박학다식합니다. 아이돌의 TMI, 세계관, 과거 예능까지 모르는 게 없습니다. 친구들이 연예계 소식을 당신에게 물어볼 정도입니다.",
      en: "You are an expert who knows K-POP history and trends inside out. You're knowledgeable not only about your bias group but also about other groups. You know everything from idols' TMI, universe concepts, to past variety shows. Your friends ask you for entertainment news.",
      ja: "あなたはK-POPの歴史と流れを完全に把握している達人です。本命（推しグループ）だけでなく、他のグループの情報まで博識です。アイドルのTMI、世界観、過去のバラエティまで知らないことはありません。友達が芸能ニュースをあなたに聞くほどです。",
      'zh-CN': "你是精通K-POP历史和潮流的专家。你不仅了解你的本命组合，还了解其他组合的信息。从偶像的TMI、世界观到过去的综艺，你无所不知。朋友们会向你询问娱乐新闻。",
      'zh-TW': "你是精通K-POP歷史和潮流的專家。你不僅了解你的本命組合，還了解其他組合的信息。從偶像的TMI、世界觀到過去的綜藝，你無所不知。朋友們會向你詢問娛樂新聞。",
      vi: "Bạn là chuyên gia nắm rõ lịch sử và xu hướng K-POP. Bạn am hiểu không chỉ nhóm bias mà còn cả các nhóm khác. Bạn biết mọi thứ từ TMI của thần tượng, khái niệm vũ trụ, đến các chương trình giải trí cũ. Bạn bè hỏi bạn về tin tức giải trí.",
      id: "Anda adalah ahli yang mengetahui sejarah dan tren K-POP dengan sempurna. Anda berpengetahuan tidak hanya tentang grup bias Anda tetapi juga tentang grup lain. Anda tahu segalanya dari TMI idola, konsep alam semesta, hingga acara varietas masa lalu. Teman-teman bertanya kepada Anda tentang berita hiburan."
    },
    scoreRange: {
      ko: "10 ~ 11개",
      en: "10 ~ 11 correct",
      ja: "10〜11個",
      'zh-CN': "10 ~ 11题",
      'zh-TW': "10 ~ 11題",
      vi: "10 ~ 11 câu",
      id: "10 ~ 11 benar"
    },
    level: {
      ko: "Lv. 90",
      en: "Lv. 90",
      ja: "Lv. 90",
      'zh-CN': "Lv. 90",
      'zh-TW': "Lv. 90",
      vi: "Lv. 90",
      id: "Lv. 90"
    },
    recommendation: {
      ko: "연예부 기자나 엔터테인먼트 입사를 고려해 보세요.",
      en: "Consider becoming an entertainment journalist or working in the entertainment industry.",
      ja: "芸能部記者やエンターテインメント業界への就職を考えてみてください。",
      'zh-CN': "考虑成为娱乐记者或进入娱乐行业工作。",
      'zh-TW': "考慮成為娛樂記者或進入娛樂行業工作。",
      vi: "Hãy cân nhắc trở thành phóng viên giải trí hoặc làm việc trong ngành giải trí.",
      id: "Pertimbangkan menjadi jurnalis hiburan atau bekerja di industri hiburan."
    },
  },
  {
    type: "Type6",
    emoji: "🎓",
    title: {
      ko: "신의 경지, K-POP 교수님",
      en: "Divine Level, K-POP Professor",
      ja: "神の境地、K-POP教授",
      'zh-CN': "神级，K-POP教授",
      'zh-TW': "神級，K-POP教授",
      vi: "Cấp độ thần thánh, Giáo sư K-POP",
      id: "Tingkat Ilahi, Profesor K-POP"
    },
    shortDescription: {
      ko: "\"숨소리만 들어도 누군지 맞힙니다\"",
      en: "\"I can tell who it is just by the breathing sound\"",
      ja: "「息遣いだけで誰だか当てられます」",
      'zh-CN': "\"只听呼吸声就能猜出是谁\"",
      'zh-TW': "\"只聽呼吸聲就能猜出是誰\"",
      vi: "\"Chỉ nghe tiếng thở là biết ai rồi\"",
      id: "\"Hanya dengan suara napas saja saya bisa menebak siapa\""
    },
    description: {
      ko: "축하합니다! 당신은 상위 1%에 해당하는 K-POP 마스터입니다. 난이도 높은 문제들도 가볍게 통과하셨군요. 당신의 덕력은 가히 존경스러울 정도입니다. 혹시 현직 아이돌 매니저나 관계자이신가요? 당신에게 K-POP은 종교이자 인생입니다.",
      en: "Congratulations! You are a K-POP master in the top 1%. You easily passed even the difficult questions. Your fan knowledge is truly admirable. Are you perhaps a current idol manager or industry professional? To you, K-POP is both religion and life.",
      ja: "おめでとうございます！あなたは上位1%に該当するK-POPマスターです。難易度の高い問題も軽々と通過しました。あなたのオタク力はまさに尊敬に値します。もしかして現役のアイドルマネージャーや関係者ですか？あなたにとってK-POPは宗教であり人生です。",
      'zh-CN': "恭喜！你是排名前1%的K-POP大师。你轻松通过了高难度问题。你的粉丝知识令人敬佩。你可能是现役偶像经纪人或业内人士？对你来说，K-POP既是宗教也是人生。",
      'zh-TW': "恭喜！你是排名前1%的K-POP大師。你輕鬆通過了高難度問題。你的粉絲知識令人敬佩。你可能是現役偶像經紀人或業內人士？對你來說，K-POP既是宗教也是人生。",
      vi: "Chúc mừng! Bạn là bậc thầy K-POP thuộc top 1%. Bạn đã vượt qua cả những câu hỏi khó một cách dễ dàng. Kiến thức fan của bạn thật đáng ngưỡng mộ. Có phải bạn là quản lý thần tượng hoặc người trong ngành? Với bạn, K-POP vừa là tôn giáo vừa là cuộc sống.",
      id: "Selamat! Anda adalah master K-POP di top 1%. Anda dengan mudah melewati bahkan pertanyaan yang sulit. Pengetahuan penggemar Anda benar-benar mengagumkan. Apakah Anda mungkin manajer idola aktif atau profesional industri? Bagi Anda, K-POP adalah agama dan kehidupan."
    },
    scoreRange: {
      ko: "12개 (만점)",
      en: "12 (Perfect Score)",
      ja: "12個（満点）",
      'zh-CN': "12题（满分）",
      'zh-TW': "12題（滿分）",
      vi: "12 câu (Điểm tuyệt đối)",
      id: "12 (Skor Sempurna)"
    },
    level: {
      ko: "Lv. 99 (MAX)",
      en: "Lv. 99 (MAX)",
      ja: "Lv. 99 (MAX)",
      'zh-CN': "Lv. 99 (MAX)",
      'zh-TW': "Lv. 99 (MAX)",
      vi: "Lv. 99 (MAX)",
      id: "Lv. 99 (MAX)"
    },
    recommendation: {
      ko: "당신이 바로 이 구역의 짱입니다.",
      en: "You are the boss of this area.",
      ja: "あなたがこのエリアのボスです。",
      'zh-CN': "你就是这个领域的王者。",
      'zh-TW': "你就是這個領域的王者。",
      vi: "Bạn chính là boss của khu vực này.",
      id: "Anda adalah bos di area ini."
    },
  },
];

export function calculateKpopExamResult(answers: boolean[]): string {
  const correctCount = answers.filter(answer => answer === true).length;
  
  if (correctCount >= 0 && correctCount <= 2) {
    return "Type1";
  } else if (correctCount >= 3 && correctCount <= 4) {
    return "Type2";
  } else if (correctCount >= 5 && correctCount <= 7) {
    return "Type3";
  } else if (correctCount >= 8 && correctCount <= 9) {
    return "Type4";
  } else if (correctCount >= 10 && correctCount <= 11) {
    return "Type5";
  } else {
    return "Type6";
  }
}
