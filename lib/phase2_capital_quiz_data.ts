export interface Phase2CapitalQuizQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
  }[];
  correctAnswer: number; // 0=A, 1=B, 2=C, 3=D
}

export interface Phase2CapitalQuizResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  correctCount: Record<string, string>; // "0 ~ 2개"
  knowledgeLevel: Record<string, string>; // "Lv. 1"
  recommendation: Record<string, string>; // 추천 내용
}

export const phase2CapitalQuizQuestions: Phase2CapitalQuizQuestion[] = [
  {
    id: 1,
    question: {
      ko: "[난이도 하] 미국의 수도는 어디일까요?",
      en: "[Easy] What is the capital of the United States?",
      ja: "[難易度低] アメリカの首都はどこですか？",
      'zh-CN': "[难度低] 美国的首都是哪里？",
      'zh-TW': "[難度低] 美國的首都是哪裡？",
      vi: "[Dễ] Thủ đô của Hoa Kỳ là đâu?",
      id: "[Mudah] Apa ibu kota Amerika Serikat?"
    },
    options: [
      {
        text: {
          ko: "뉴욕 (New York)",
          en: "New York",
          ja: "ニューヨーク",
          'zh-CN': "纽约",
          'zh-TW': "紐約",
          vi: "New York",
          id: "New York"
        }
      },
      {
        text: {
          ko: "워싱턴 D.C. (Washington D.C.)",
          en: "Washington D.C.",
          ja: "ワシントンD.C.",
          'zh-CN': "华盛顿特区",
          'zh-TW': "華盛頓特區",
          vi: "Washington D.C.",
          id: "Washington D.C."
        }
      },
      {
        text: {
          ko: "로스앤젤레스 (LA)",
          en: "Los Angeles (LA)",
          ja: "ロサンゼルス (LA)",
          'zh-CN': "洛杉矶 (LA)",
          'zh-TW': "洛杉磯 (LA)",
          vi: "Los Angeles (LA)",
          id: "Los Angeles (LA)"
        }
      },
      {
        text: {
          ko: "시카고 (Chicago)",
          en: "Chicago",
          ja: "シカゴ",
          'zh-CN': "芝加哥",
          'zh-TW': "芝加哥",
          vi: "Chicago",
          id: "Chicago"
        }
      }
    ],
    correctAnswer: 1 // B (워싱턴 D.C.)
  },
  {
    id: 2,
    question: {
      ko: "[난이도 하] '캥거루의 나라' 호주의 수도는?",
      en: "[Easy] What is the capital of Australia, 'the land of kangaroos'?",
      ja: "[難易度低] 「カンガルーの国」オーストラリアの首都は？",
      'zh-CN': "[难度低] '袋鼠之国'澳大利亚的首都是？",
      'zh-TW': "[難度低] 「袋鼠之國」澳洲的首都是？",
      vi: "[Dễ] Thủ đô của Australia, 'đất nước của kangaroo' là gì?",
      id: "[Mudah] Apa ibu kota Australia, 'negeri kanguru'?"
    },
    options: [
      {
        text: {
          ko: "시드니 (Sydney)",
          en: "Sydney",
          ja: "シドニー",
          'zh-CN': "悉尼",
          'zh-TW': "雪梨",
          vi: "Sydney",
          id: "Sydney"
        }
      },
      {
        text: {
          ko: "멜버른 (Melbourne)",
          en: "Melbourne",
          ja: "メルボルン",
          'zh-CN': "墨尔本",
          'zh-TW': "墨爾本",
          vi: "Melbourne",
          id: "Melbourne"
        }
      },
      {
        text: {
          ko: "캔버라 (Canberra)",
          en: "Canberra",
          ja: "キャンベラ",
          'zh-CN': "堪培拉",
          'zh-TW': "坎培拉",
          vi: "Canberra",
          id: "Canberra"
        }
      },
      {
        text: {
          ko: "브리즈번 (Brisbane)",
          en: "Brisbane",
          ja: "ブリスベン",
          'zh-CN': "布里斯班",
          'zh-TW': "布里斯本",
          vi: "Brisbane",
          id: "Brisbane"
        }
      }
    ],
    correctAnswer: 2 // C (캔버라)
  },
  {
    id: 3,
    question: {
      ko: "[난이도 하] 쌀국수로 유명한 베트남의 수도는?",
      en: "[Easy] What is the capital of Vietnam, famous for pho?",
      ja: "[難易度低] フォーで有名なベトナムの首都は？",
      'zh-CN': "[难度低] 以米粉闻名的越南首都是？",
      'zh-TW': "[難度低] 以米粉聞名的越南首都是？",
      vi: "[Dễ] Thủ đô của Việt Nam, nổi tiếng với phở là gì?",
      id: "[Mudah] Apa ibu kota Vietnam, terkenal dengan pho?"
    },
    options: [
      {
        text: {
          ko: "하노이 (Hanoi)",
          en: "Hanoi",
          ja: "ハノイ",
          'zh-CN': "河内",
          'zh-TW': "河內",
          vi: "Hà Nội",
          id: "Hanoi"
        }
      },
      {
        text: {
          ko: "호찌민 (Ho Chi Minh)",
          en: "Ho Chi Minh City",
          ja: "ホーチミン",
          'zh-CN': "胡志明市",
          'zh-TW': "胡志明市",
          vi: "Thành phố Hồ Chí Minh",
          id: "Ho Chi Minh City"
        }
      },
      {
        text: {
          ko: "다낭 (Da Nang)",
          en: "Da Nang",
          ja: "ダナン",
          'zh-CN': "岘港",
          'zh-TW': "峴港",
          vi: "Đà Nẵng",
          id: "Da Nang"
        }
      },
      {
        text: {
          ko: "나트랑 (Nha Trang)",
          en: "Nha Trang",
          ja: "ニャチャン",
          'zh-CN': "芽庄",
          'zh-TW': "芽莊",
          vi: "Nha Trang",
          id: "Nha Trang"
        }
      }
    ],
    correctAnswer: 0 // A (하노이)
  },
  {
    id: 4,
    question: {
      ko: "[난이도 중] 튀르키예(터키)의 수도는?",
      en: "[Medium] What is the capital of Türkiye (Turkey)?",
      ja: "[難易度中] トルコの首都は？",
      'zh-CN': "[难度中] 土耳其的首都是？",
      'zh-TW': "[難度中] 土耳其的首都是？",
      vi: "[Trung bình] Thủ đô của Thổ Nhĩ Kỳ là gì?",
      id: "[Sedang] Apa ibu kota Turki?"
    },
    options: [
      {
        text: {
          ko: "이스탄불 (Istanbul)",
          en: "Istanbul",
          ja: "イスタンブール",
          'zh-CN': "伊斯坦布尔",
          'zh-TW': "伊斯坦堡",
          vi: "Istanbul",
          id: "Istanbul"
        }
      },
      {
        text: {
          ko: "앙카라 (Ankara)",
          en: "Ankara",
          ja: "アンカラ",
          'zh-CN': "安卡拉",
          'zh-TW': "安卡拉",
          vi: "Ankara",
          id: "Ankara"
        }
      },
      {
        text: {
          ko: "카파도키아 (Cappadocia)",
          en: "Cappadocia",
          ja: "カッパドキア",
          'zh-CN': "卡帕多西亚",
          'zh-TW': "卡帕多奇亞",
          vi: "Cappadocia",
          id: "Cappadocia"
        }
      },
      {
        text: {
          ko: "이즈미르 (Izmir)",
          en: "Izmir",
          ja: "イズミル",
          'zh-CN': "伊兹密尔",
          'zh-TW': "伊茲密爾",
          vi: "Izmir",
          id: "Izmir"
        }
      }
    ],
    correctAnswer: 1 // B (앙카라)
  },
  {
    id: 5,
    question: {
      ko: "[난이도 중] 단풍국 캐나다의 수도는?",
      en: "[Medium] What is the capital of Canada, the land of maple leaves?",
      ja: "[難易度中] 紅葉の国カナダの首都は？",
      'zh-CN': "[难度中] 枫叶之国加拿大的首都是？",
      'zh-TW': "[難度中] 楓葉之國加拿大的首都是？",
      vi: "[Trung bình] Thủ đô của Canada, đất nước lá phong là gì?",
      id: "[Sedang] Apa ibu kota Kanada, negeri daun maple?"
    },
    options: [
      {
        text: {
          ko: "토론토 (Toronto)",
          en: "Toronto",
          ja: "トロント",
          'zh-CN': "多伦多",
          'zh-TW': "多倫多",
          vi: "Toronto",
          id: "Toronto"
        }
      },
      {
        text: {
          ko: "밴쿠버 (Vancouver)",
          en: "Vancouver",
          ja: "バンクーバー",
          'zh-CN': "温哥华",
          'zh-TW': "溫哥華",
          vi: "Vancouver",
          id: "Vancouver"
        }
      },
      {
        text: {
          ko: "몬트리올 (Montreal)",
          en: "Montreal",
          ja: "モントリオール",
          'zh-CN': "蒙特利尔",
          'zh-TW': "蒙特婁",
          vi: "Montreal",
          id: "Montreal"
        }
      },
      {
        text: {
          ko: "오타와 (Ottawa)",
          en: "Ottawa",
          ja: "オタワ",
          'zh-CN': "渥太华",
          'zh-TW': "渥太華",
          vi: "Ottawa",
          id: "Ottawa"
        }
      }
    ],
    correctAnswer: 3 // D (오타와)
  },
  {
    id: 6,
    question: {
      ko: "[난이도 중] 정열의 나라 스페인의 수도는?",
      en: "[Medium] What is the capital of Spain, the passionate country?",
      ja: "[難易度中] 情熱の国スペインの首都は？",
      'zh-CN': "[难度中] 热情之国西班牙的首都是？",
      'zh-TW': "[難度中] 熱情之國西班牙的首都是？",
      vi: "[Trung bình] Thủ đô của Tây Ban Nha, đất nước đam mê là gì?",
      id: "[Sedang] Apa ibu kota Spanyol, negara yang penuh gairah?"
    },
    options: [
      {
        text: {
          ko: "바르셀로나 (Barcelona)",
          en: "Barcelona",
          ja: "バルセロナ",
          'zh-CN': "巴塞罗那",
          'zh-TW': "巴塞隆納",
          vi: "Barcelona",
          id: "Barcelona"
        }
      },
      {
        text: {
          ko: "마드리드 (Madrid)",
          en: "Madrid",
          ja: "マドリード",
          'zh-CN': "马德里",
          'zh-TW': "馬德里",
          vi: "Madrid",
          id: "Madrid"
        }
      },
      {
        text: {
          ko: "세비야 (Seville)",
          en: "Seville",
          ja: "セビリア",
          'zh-CN': "塞维利亚",
          'zh-TW': "塞維利亞",
          vi: "Seville",
          id: "Seville"
        }
      },
      {
        text: {
          ko: "발렌시아 (Valencia)",
          en: "Valencia",
          ja: "バレンシア",
          'zh-CN': "瓦伦西亚",
          'zh-TW': "瓦倫西亞",
          vi: "Valencia",
          id: "Valencia"
        }
      }
    ],
    correctAnswer: 1 // B (마드리드)
  },
  {
    id: 7,
    question: {
      ko: "[난이도 중] 삼바 축제의 나라, 브라질의 수도는?",
      en: "[Medium] What is the capital of Brazil, the land of samba festivals?",
      ja: "[難易度中] サンバ祭りの国ブラジルの首都は？",
      'zh-CN': "[难度中] 桑巴节之國巴西的首都是？",
      'zh-TW': "[難度中] 森巴節之國巴西的首都是？",
      vi: "[Trung bình] Thủ đô của Brazil, đất nước lễ hội samba là gì?",
      id: "[Sedang] Apa ibu kota Brasil, negeri festival samba?"
    },
    options: [
      {
        text: {
          ko: "리우데자네이루 (Rio de Janeiro)",
          en: "Rio de Janeiro",
          ja: "リオデジャネイロ",
          'zh-CN': "里约热内卢",
          'zh-TW': "里約熱內盧",
          vi: "Rio de Janeiro",
          id: "Rio de Janeiro"
        }
      },
      {
        text: {
          ko: "상파울루 (Sao Paulo)",
          en: "São Paulo",
          ja: "サンパウロ",
          'zh-CN': "圣保罗",
          'zh-TW': "聖保羅",
          vi: "São Paulo",
          id: "São Paulo"
        }
      },
      {
        text: {
          ko: "브라질리아 (Brasilia)",
          en: "Brasília",
          ja: "ブラジリア",
          'zh-CN': "巴西利亚",
          'zh-TW': "巴西利亞",
          vi: "Brasília",
          id: "Brasília"
        }
      },
      {
        text: {
          ko: "살바도르 (Salvador)",
          en: "Salvador",
          ja: "サルバドール",
          'zh-CN': "萨尔瓦多",
          'zh-TW': "薩爾瓦多",
          vi: "Salvador",
          id: "Salvador"
        }
      }
    ],
    correctAnswer: 2 // C (브라질리아)
  },
  {
    id: 8,
    question: {
      ko: "[난이도 상] 알프스 소녀 하이디! 스위스의 수도는?",
      en: "[Hard] Heidi of the Alps! What is the capital of Switzerland?",
      ja: "[難易度高] アルプスの少女ハイジ！スイスの首都は？",
      'zh-CN': "[难度高] 阿尔卑斯山的少女海蒂！瑞士的首都是？",
      'zh-TW': "[難度高] 阿爾卑斯山的少女海蒂！瑞士的首都是？",
      vi: "[Khó] Heidi của dãy Alps! Thủ đô của Thụy Sĩ là gì?",
      id: "[Sulit] Heidi dari Pegunungan Alpen! Apa ibu kota Swiss?"
    },
    options: [
      {
        text: {
          ko: "취리히 (Zurich)",
          en: "Zurich",
          ja: "チューリッヒ",
          'zh-CN': "苏黎世",
          'zh-TW': "蘇黎世",
          vi: "Zurich",
          id: "Zurich"
        }
      },
      {
        text: {
          ko: "제네바 (Geneva)",
          en: "Geneva",
          ja: "ジュネーヴ",
          'zh-CN': "日内瓦",
          'zh-TW': "日內瓦",
          vi: "Geneva",
          id: "Geneva"
        }
      },
      {
        text: {
          ko: "베른 (Bern)",
          en: "Bern",
          ja: "ベルン",
          'zh-CN': "伯尔尼",
          'zh-TW': "伯恩",
          vi: "Bern",
          id: "Bern"
        }
      },
      {
        text: {
          ko: "바젤 (Basel)",
          en: "Basel",
          ja: "バーゼル",
          'zh-CN': "巴塞尔",
          'zh-TW': "巴塞爾",
          vi: "Basel",
          id: "Basel"
        }
      }
    ],
    correctAnswer: 2 // C (베른)
  },
  {
    id: 9,
    question: {
      ko: "[난이도 상] 중동의 부호, 아랍에미리트(UAE)의 수도는?",
      en: "[Hard] What is the capital of the UAE, the wealthy country of the Middle East?",
      ja: "[難易度高] 中東の富豪、アラブ首長国連邦（UAE）の首都は？",
      'zh-CN': "[难度高] 中东富豪阿联酋(UAE)的首都是？",
      'zh-TW': "[難度高] 中東富豪阿拉伯聯合大公國(UAE)的首都是？",
      vi: "[Khó] Thủ đô của UAE, quốc gia giàu có ở Trung Đông là gì?",
      id: "[Sulit] Apa ibu kota UAE, negara kaya di Timur Tengah?"
    },
    options: [
      {
        text: {
          ko: "두바이 (Dubai)",
          en: "Dubai",
          ja: "ドバイ",
          'zh-CN': "迪拜",
          'zh-TW': "杜拜",
          vi: "Dubai",
          id: "Dubai"
        }
      },
      {
        text: {
          ko: "아부다비 (Abu Dhabi)",
          en: "Abu Dhabi",
          ja: "アブダビ",
          'zh-CN': "阿布扎比",
          'zh-TW': "阿布達比",
          vi: "Abu Dhabi",
          id: "Abu Dhabi"
        }
      },
      {
        text: {
          ko: "도하 (Doha)",
          en: "Doha",
          ja: "ドーハ",
          'zh-CN': "多哈",
          'zh-TW': "杜哈",
          vi: "Doha",
          id: "Doha"
        }
      },
      {
        text: {
          ko: "리야드 (Riyadh)",
          en: "Riyadh",
          ja: "リヤド",
          'zh-CN': "利雅得",
          'zh-TW': "利雅德",
          vi: "Riyadh",
          id: "Riyadh"
        }
      }
    ],
    correctAnswer: 1 // B (아부다비)
  },
  {
    id: 10,
    question: {
      ko: "[난이도 상] 아프리카의 붉은 보석, 모로코의 수도는?",
      en: "[Hard] What is the capital of Morocco, the red gem of Africa?",
      ja: "[難易度高] アフリカの赤い宝石、モロッコの首都は？",
      'zh-CN': "[难度高] 非洲的红宝石摩洛哥的首都是？",
      'zh-TW': "[難度高] 非洲的紅寶石摩洛哥的首都是？",
      vi: "[Khó] Thủ đô của Morocco, viên ngọc đỏ của châu Phi là gì?",
      id: "[Sulit] Apa ibu kota Maroko, permata merah Afrika?"
    },
    options: [
      {
        text: {
          ko: "카사블랑카 (Casablanca)",
          en: "Casablanca",
          ja: "カサブランカ",
          'zh-CN': "卡萨布兰卡",
          'zh-TW': "卡薩布蘭卡",
          vi: "Casablanca",
          id: "Casablanca"
        }
      },
      {
        text: {
          ko: "마라케시 (Marrakech)",
          en: "Marrakech",
          ja: "マラケシュ",
          'zh-CN': "马拉喀什",
          'zh-TW': "馬拉喀什",
          vi: "Marrakech",
          id: "Marrakech"
        }
      },
      {
        text: {
          ko: "라바트 (Rabat)",
          en: "Rabat",
          ja: "ラバト",
          'zh-CN': "拉巴特",
          'zh-TW': "拉巴特",
          vi: "Rabat",
          id: "Rabat"
        }
      },
      {
        text: {
          ko: "카이로 (Cairo)",
          en: "Cairo",
          ja: "カイロ",
          'zh-CN': "开罗",
          'zh-TW': "開羅",
          vi: "Cairo",
          id: "Cairo"
        }
      }
    ],
    correctAnswer: 2 // C (라바트)
  },
  {
    id: 11,
    question: {
      ko: "[난이도 최상] 중앙아시아의 거인, 카자흐스탄의 수도는?",
      en: "[Very Hard] What is the capital of Kazakhstan, the giant of Central Asia?",
      ja: "[難易度最高] 中央アジアの巨人、カザフスタンの首都は？",
      'zh-CN': "[难度最高] 中亚巨人哈萨克斯坦的首都是？",
      'zh-TW': "[難度最高] 中亞巨人哈薩克的首都是？",
      vi: "[Rất khó] Thủ đô của Kazakhstan, người khổng lồ của Trung Á là gì?",
      id: "[Sangat Sulit] Apa ibu kota Kazakhstan, raksasa Asia Tengah?"
    },
    options: [
      {
        text: {
          ko: "알마티 (Almaty)",
          en: "Almaty",
          ja: "アルマトイ",
          'zh-CN': "阿拉木图",
          'zh-TW': "阿拉木圖",
          vi: "Almaty",
          id: "Almaty"
        }
      },
      {
        text: {
          ko: "아스타나 (Astana)",
          en: "Astana",
          ja: "アスタナ",
          'zh-CN': "阿斯塔纳",
          'zh-TW': "阿斯塔納",
          vi: "Astana",
          id: "Astana"
        }
      },
      {
        text: {
          ko: "타슈켄트 (Tashkent)",
          en: "Tashkent",
          ja: "タシュケント",
          'zh-CN': "塔什干",
          'zh-TW': "塔什干",
          vi: "Tashkent",
          id: "Tashkent"
        }
      },
      {
        text: {
          ko: "비슈케크 (Bishkek)",
          en: "Bishkek",
          ja: "ビシュケク",
          'zh-CN': "比什凯克",
          'zh-TW': "比什凱克",
          vi: "Bishkek",
          id: "Bishkek"
        }
      }
    ],
    correctAnswer: 1 // B (아스타나)
  },
  {
    id: 12,
    question: {
      ko: "[난이도 최상] 동유럽의 보석, 폴란드의 수도는?",
      en: "[Very Hard] What is the capital of Poland, the gem of Eastern Europe?",
      ja: "[難易度最高] 東ヨーロッパの宝石、ポーランドの首都は？",
      'zh-CN': "[难度最高] 东欧宝石波兰的首都是？",
      'zh-TW': "[難度最高] 東歐寶石波蘭的首都是？",
      vi: "[Rất khó] Thủ đô của Ba Lan, viên ngọc của Đông Âu là gì?",
      id: "[Sangat Sulit] Apa ibu kota Polandia, permata Eropa Timur?"
    },
    options: [
      {
        text: {
          ko: "프라하 (Prague)",
          en: "Prague",
          ja: "プラハ",
          'zh-CN': "布拉格",
          'zh-TW': "布拉格",
          vi: "Prague",
          id: "Prague"
        }
      },
      {
        text: {
          ko: "부다페스트 (Budapest)",
          en: "Budapest",
          ja: "ブダペスト",
          'zh-CN': "布达佩斯",
          'zh-TW': "布達佩斯",
          vi: "Budapest",
          id: "Budapest"
        }
      },
      {
        text: {
          ko: "바르샤바 (Warsaw)",
          en: "Warsaw",
          ja: "ワルシャワ",
          'zh-CN': "华沙",
          'zh-TW': "華沙",
          vi: "Warsaw",
          id: "Warsaw"
        }
      },
      {
        text: {
          ko: "크라쿠프 (Krakow)",
          en: "Krakow",
          ja: "クラクフ",
          'zh-CN': "克拉科夫",
          'zh-TW': "克拉科夫",
          vi: "Krakow",
          id: "Krakow"
        }
      }
    ],
    correctAnswer: 2 // C (바르샤바)
  }
];

export const phase2CapitalQuizResults: Phase2CapitalQuizResult[] = [
  {
    type: "Type1",
    emoji: "🏠",
    title: {
      ko: "방구석 1열, 집돌이/집순이",
      en: "Homebody, Home Lover",
      ja: "おうち派、家好き",
      'zh-CN': "宅家一族",
      'zh-TW': "宅家一族",
      vi: "Người thích ở nhà",
      id: "Pecinta Rumah"
    },
    shortDescription: {
      ko: "\"외국이요? 저는 우리 집이 제일 좋아요.\"",
      en: "\"Abroad? I love my home the most.\"",
      ja: "「海外？私は家が一番好きです。」",
      'zh-CN': "「国外？我最喜欢我的家。」",
      'zh-TW': "「國外？我最喜歡我的家。」",
      vi: "\"Nước ngoài? Tôi yêu nhà mình nhất.\"",
      id: "\"Luar negeri? Saya paling suka rumah saya.\""
    },
    description: {
      ko: "당신은 해외여행이나 세계 지리에 큰 관심이 없는 평화주의자입니다. 미국의 수도가 뉴욕이면 어떻고 워싱턴이면 어떻습니까? 내가 사는 동네 지리만 잘 알면 사는 데 아무 지장 없다고 생각합니다. 상식보다는 본인의 행복에 집중하는 타입입니다.",
      en: "You are a peace-loving person who has little interest in overseas travel or world geography. What does it matter if the capital of the US is New York or Washington? You think it's enough to know the geography of your own neighborhood. You focus more on your own happiness than general knowledge.",
      ja: "あなたは海外旅行や世界地理にあまり興味のない平和主義者です。アメリカの首都がニューヨークでもワシントンでも、どうでもいいと思っています。自分が住む地域の地理さえ知っていれば、生活に支障はないと考えています。常識よりも自分の幸せに集中するタイプです。",
      'zh-CN': "你是一个对海外旅行或世界地理不太感兴趣的和平主义者。美国的首都是纽约还是华盛顿又有什么关系？你认为只要了解自己居住的社区地理就足够了。你更专注于自己的幸福而不是常识。",
      'zh-TW': "你是一個對海外旅行或世界地理不太感興趣的和平主義者。美國的首都是紐約還是華盛頓又有什麼關係？你認為只要了解自己居住的社區地理就足夠了。你更專注於自己的幸福而不是常識。",
      vi: "Bạn là người yêu hòa bình, không quan tâm nhiều đến du lịch nước ngoài hay địa lý thế giới. Thủ đô của Mỹ là New York hay Washington thì sao? Bạn nghĩ chỉ cần biết địa lý khu vực mình sống là đủ. Bạn tập trung vào hạnh phúc của mình hơn là kiến thức chung.",
      id: "Anda adalah orang yang cinta damai yang tidak terlalu tertarik pada perjalanan ke luar negeri atau geografi dunia. Apa bedanya jika ibu kota AS adalah New York atau Washington? Anda pikir cukup mengetahui geografi lingkungan Anda sendiri. Anda lebih fokus pada kebahagiaan Anda sendiri daripada pengetahuan umum."
    },
    correctCount: {
      ko: "0 ~ 2개",
      en: "0 ~ 2",
      ja: "0 ~ 2個",
      'zh-CN': "0 ~ 2个",
      'zh-TW': "0 ~ 2個",
      vi: "0 ~ 2",
      id: "0 ~ 2"
    },
    knowledgeLevel: {
      ko: "Lv. 1",
      en: "Lv. 1",
      ja: "Lv. 1",
      'zh-CN': "Lv. 1",
      'zh-TW': "Lv. 1",
      vi: "Lv. 1",
      id: "Lv. 1"
    },
    recommendation: {
      ko: "세계지도 퍼즐 맞추기 취미를 추천합니다.",
      en: "I recommend trying world map puzzles as a hobby.",
      ja: "世界地図パズルを趣味にすることをお勧めします。",
      'zh-CN': "建议尝试世界地图拼图作为爱好。",
      'zh-TW': "建議嘗試世界地圖拼圖作為愛好。",
      vi: "Tôi khuyên bạn nên thử chơi ghép hình bản đồ thế giới như một sở thích.",
      id: "Saya merekomendasikan puzzle peta dunia sebagai hobi."
    }
  },
  {
    type: "Type2",
    emoji: "✈️",
    title: {
      ko: "설레는 여권 발급, 초보 여행자",
      en: "Excited Passport Holder, Beginner Traveler",
      ja: "パスポート発行が楽しみ、初心者旅行者",
      'zh-CN': "兴奋的护照持有者，新手旅行者",
      'zh-TW': "興奮的護照持有者，新手旅行者",
      vi: "Người mới có hộ chiếu, du khách mới bắt đầu",
      id: "Pemegang Paspor yang Antusias, Wisatawan Pemula"
    },
    shortDescription: {
      ko: "\"어디서 들어본 것 같긴 한데...?\"",
      en: "\"I think I've heard of it somewhere...?\"",
      ja: "「どこかで聞いたことがあるような...？」",
      'zh-CN': "「好像在哪里听过...？」",
      'zh-TW': "「好像在哪裡聽過...？」",
      vi: "\"Hình như tôi đã nghe ở đâu đó...?\"",
      id: "\"Sepertinya pernah dengar di suatu tempat...?\""
    },
    description: {
      ko: "당신은 뉴스나 예능 프로그램에서 주요 국가의 이름 정도는 들어봤습니다. 하지만 정확한 수도를 묻는다면 헷갈려 합니다. 대표적인 관광 도시를 수도로 착각하는 경우가 많습니다. 이제 막 넓은 세상에 관심을 두기 시작한 단계입니다.",
      en: "You've heard the names of major countries from news or entertainment programs. But if asked about the exact capital, you get confused. You often mistake famous tourist cities for capitals. You're just starting to take an interest in the wider world.",
      ja: "あなたはニュースやエンターテインメント番組で主要国の名前は聞いたことがあります。しかし、正確な首都を聞かれると混乱します。代表的な観光都市を首都と間違えることが多いです。今まさに広い世界に興味を持ち始めた段階です。",
      'zh-CN': "你从新闻或娱乐节目中听说过主要国家的名字。但如果被问及确切的首都，你会感到困惑。你经常把著名的旅游城市误认为是首都。你刚刚开始对更广阔的世界产生兴趣。",
      'zh-TW': "你從新聞或娛樂節目中聽說過主要國家的名字。但如果被問及確切的首都，你會感到困惑。你經常把著名的旅遊城市誤認為是首都。你剛剛開始對更廣闊的世界產生興趣。",
      vi: "Bạn đã nghe tên các quốc gia lớn từ tin tức hoặc chương trình giải trí. Nhưng nếu được hỏi về thủ đô chính xác, bạn sẽ bối rối. Bạn thường nhầm các thành phố du lịch nổi tiếng với thủ đô. Bạn mới bắt đầu quan tâm đến thế giới rộng lớn hơn.",
      id: "Anda pernah mendengar nama negara-negara besar dari berita atau program hiburan. Tetapi jika ditanya tentang ibu kota yang tepat, Anda bingung. Anda sering salah mengira kota wisata terkenal sebagai ibu kota. Anda baru mulai tertarik pada dunia yang lebih luas."
    },
    correctCount: {
      ko: "3 ~ 4개",
      en: "3 ~ 4",
      ja: "3 ~ 4個",
      'zh-CN': "3 ~ 4个",
      'zh-TW': "3 ~ 4個",
      vi: "3 ~ 4",
      id: "3 ~ 4"
    },
    knowledgeLevel: {
      ko: "Lv. 10",
      en: "Lv. 10",
      ja: "Lv. 10",
      'zh-CN': "Lv. 10",
      'zh-TW': "Lv. 10",
      vi: "Lv. 10",
      id: "Lv. 10"
    },
    recommendation: {
      ko: "여행 유튜버들의 영상을 보며 안목을 넓혀보세요.",
      en: "Watch travel YouTubers' videos to broaden your horizons.",
      ja: "旅行ユーチューバーの動画を見て視野を広げてみてください。",
      'zh-CN': "观看旅行YouTuber的视频来开阔视野。",
      'zh-TW': "觀看旅行YouTuber的影片來開闊視野。",
      vi: "Xem video của các YouTuber du lịch để mở rộng tầm nhìn.",
      id: "Tonton video YouTuber perjalanan untuk memperluas wawasan Anda."
    }
  },
  {
    type: "Type3",
    emoji: "📸",
    title: {
      ko: "패키지 여행 매니아, 관광객",
      en: "Package Tour Enthusiast, Tourist",
      ja: "パッケージツアー好き、観光客",
      'zh-CN': "跟团游爱好者，游客",
      'zh-TW': "跟團遊愛好者，遊客",
      vi: "Người đam mê tour trọn gói, khách du lịch",
      id: "Penggemar Paket Wisata, Wisatawan"
    },
    shortDescription: {
      ko: "\"유명한 곳은 다 가봤거나 들어봤어요!\"",
      en: "\"I've been to or heard of all the famous places!\"",
      ja: "「有名な場所は全部行ったか聞いたことがあります！」",
      'zh-CN': "「著名的地方我都去过或听说过！」",
      'zh-TW': "「著名的地方我都去過或聽說過！」",
      vi: "\"Tôi đã đến hoặc nghe nói về tất cả những nơi nổi tiếng!\"",
      id: "\"Saya sudah pergi atau mendengar tentang semua tempat terkenal!\""
    },
    description: {
      ko: "당신은 일반적인 상식 수준을 갖추고 있습니다. 미국, 영국, 일본 등 주요 선진국의 수도는 꿰뚫고 있지만, 조금 생소한 나라가 나오면 당황합니다. 퀴즈를 풀면서 \"아, 거기가 수도가 아니었어?\"라고 놀랐을 확률이 높습니다.",
      en: "You have a general level of common knowledge. You know the capitals of major developed countries like the US, UK, and Japan, but you get flustered when less familiar countries come up. You probably said \"Oh, that wasn't the capital?\" while taking this quiz.",
      ja: "あなたは一般的な常識レベルを持っています。アメリカ、イギリス、日本などの主要先進国の首都は知っていますが、少し馴染みのない国が出てくると慌てます。クイズを解きながら「あ、そこが首都じゃなかったの？」と驚いた確率が高いです。",
      'zh-CN': "你具备一般的常识水平。你知道美国、英国、日本等主要发达国家的首都，但当出现不太熟悉的国家时，你会感到困惑。在做这个测验时，你很可能说过\"哦，那不是首都吗？\"。",
      'zh-TW': "你具備一般的常識水平。你知道美國、英國、日本等主要發達國家的首都，但當出現不太熟悉的國家時，你會感到困惑。在做這個測驗時，你很可能說過「哦，那不是首都嗎？」。",
      vi: "Bạn có mức độ kiến thức chung. Bạn biết thủ đô của các nước phát triển lớn như Mỹ, Anh, Nhật Bản, nhưng bạn sẽ bối rối khi gặp các nước ít quen thuộc hơn. Bạn có thể đã nói \"Ồ, đó không phải là thủ đô?\" khi làm bài kiểm tra này.",
      id: "Anda memiliki tingkat pengetahuan umum. Anda tahu ibu kota negara maju utama seperti AS, Inggris, dan Jepang, tetapi Anda bingung ketika negara yang kurang familiar muncul. Anda mungkin berkata \"Oh, itu bukan ibu kota?\" saat mengerjakan kuis ini."
    },
    correctCount: {
      ko: "5 ~ 6개",
      en: "5 ~ 6",
      ja: "5 ~ 6個",
      'zh-CN': "5 ~ 6个",
      'zh-TW': "5 ~ 6個",
      vi: "5 ~ 6",
      id: "5 ~ 6"
    },
    knowledgeLevel: {
      ko: "Lv. 30",
      en: "Lv. 30",
      ja: "Lv. 30",
      'zh-CN': "Lv. 30",
      'zh-TW': "Lv. 30",
      vi: "Lv. 30",
      id: "Lv. 30"
    },
    recommendation: {
      ko: "이제 남들이 잘 모르는 여행지를 탐구해 볼 차례입니다.",
      en: "It's time to explore travel destinations that others don't know well.",
      ja: "今度は他の人があまり知らない旅行先を探求してみる時です。",
      'zh-CN': "现在是探索别人不太了解的旅行目的地的时候了。",
      'zh-TW': "現在是探索別人不太了解的旅行目的地的時候了。",
      vi: "Đã đến lúc khám phá những điểm đến du lịch mà người khác ít biết đến.",
      id: "Saatnya menjelajahi destinasi wisata yang tidak banyak diketahui orang lain."
    }
  },
  {
    type: "Type4",
    emoji: "🗺️",
    title: {
      ko: "지도 좀 볼 줄 아는, 세계지리 우등생",
      en: "Map Reader, World Geography Honor Student",
      ja: "地図が読める、世界地理優等生",
      'zh-CN': "会看地图，世界地理优等生",
      'zh-TW': "會看地圖，世界地理優等生",
      vi: "Biết đọc bản đồ, học sinh giỏi địa lý thế giới",
      id: "Pembaca Peta, Siswa Berprestasi Geografi Dunia"
    },
    shortDescription: {
      ko: "\"이 정도는 기본 상식 아닌가요?\"",
      en: "\"Isn't this basic common knowledge?\"",
      ja: "「これくらいは基本常識じゃないの？」",
      'zh-CN': "「这不是基本常识吗？」",
      'zh-TW': "「這不是基本常識嗎？」",
      vi: "\"Đây không phải là kiến thức cơ bản sao?\"",
      id: "\"Bukankah ini pengetahuan umum dasar?\""
    },
    description: {
      ko: "당신은 학창 시절 사회나 지리 과목을 꽤 좋아했을 것입니다. 헷갈리기 쉬운 함정 문제들도 척척 피해 가는 센스가 있습니다. 친구들이 여행을 갈 때 조언을 해주거나 일정을 짜주는 역할을 맡기도 합니다. 상당히 박학다식한 편입니다.",
      en: "You probably liked social studies and geography in school. You have a good sense for avoiding tricky trap questions. You often give advice or plan itineraries when friends travel. You're quite knowledgeable.",
      ja: "あなたは学生時代、社会や地理の科目がかなり好きだったでしょう。混乱しやすい罠の問題もすらすらと避けていくセンスがあります。友達が旅行に行くとき、アドバイスをしたりスケジュールを組んだりする役割を担うこともあります。かなり博学多識な方です。",
      'zh-CN': "你在学生时代可能很喜欢社会研究和地理课程。你有很好的直觉来避开棘手的陷阱问题。当朋友旅行时，你经常提供建议或制定行程。你相当博学。",
      'zh-TW': "你在學生時代可能很喜歡社會研究和地理課程。你有很好的直覺來避開棘手的陷阱問題。當朋友旅行時，你經常提供建議或制定行程。你相當博學。",
      vi: "Bạn có lẽ đã thích các môn xã hội và địa lý ở trường. Bạn có khả năng tránh các câu hỏi bẫy khó. Bạn thường đưa ra lời khuyên hoặc lập lịch trình khi bạn bè đi du lịch. Bạn khá uyên bác.",
      id: "Anda mungkin menyukai pelajaran IPS dan geografi di sekolah. Anda memiliki kemampuan untuk menghindari pertanyaan jebakan yang membingungkan. Anda sering memberikan nasihat atau merencanakan itinerary ketika teman-teman bepergian. Anda cukup berpengetahuan luas."
    },
    correctCount: {
      ko: "7 ~ 8개",
      en: "7 ~ 8",
      ja: "7 ~ 8個",
      'zh-CN': "7 ~ 8个",
      'zh-TW': "7 ~ 8個",
      vi: "7 ~ 8",
      id: "7 ~ 8"
    },
    knowledgeLevel: {
      ko: "Lv. 60",
      en: "Lv. 60",
      ja: "Lv. 60",
      'zh-CN': "Lv. 60",
      'zh-TW': "Lv. 60",
      vi: "Lv. 60",
      id: "Lv. 60"
    },
    recommendation: {
      ko: "세계사 공부까지 병행하면 완벽한 지식인이 될 수 있습니다.",
      en: "If you also study world history, you can become a perfect intellectual.",
      ja: "世界史の勉強まで並行すれば、完璧な知識人になれます。",
      'zh-CN': "如果同时学习世界历史，你就能成为完美的知识分子。",
      'zh-TW': "如果同時學習世界歷史，你就能成為完美的知識分子。",
      vi: "Nếu bạn cũng học lịch sử thế giới, bạn có thể trở thành một trí thức hoàn hảo.",
      id: "Jika Anda juga mempelajari sejarah dunia, Anda bisa menjadi intelektual yang sempurna."
    }
  },
  {
    type: "Type5",
    emoji: "🏛️",
    title: {
      ko: "걸어 다니는 내비게이션, 외교관급 지성인",
      en: "Walking Navigation, Diplomat-Level Intellectual",
      ja: "歩くナビゲーション、外交官級の知識人",
      'zh-CN': "行走的导航，外交官级知识分子",
      'zh-TW': "行走的導航，外交官級知識分子",
      vi: "Bản đồ sống, trí thức cấp ngoại giao",
      id: "Navigasi Berjalan, Intelektual Tingkat Diplomat"
    },
    shortDescription: {
      ko: "\"뉴스 국제면이 가장 재미있어요.\"",
      en: "\"The international news section is the most interesting.\"",
      ja: "「ニュースの国際面が一番面白いです。」",
      'zh-CN': "「国际新闻版最有趣。」",
      'zh-TW': "「國際新聞版最有趣。」",
      vi: "\"Phần tin tức quốc tế là thú vị nhất.\"",
      id: "\"Bagian berita internasional adalah yang paling menarik.\""
    },
    description: {
      ko: "당신은 국제 정세와 세계 문화에 관심이 많은 지식인입니다. 남들이 흔히 착각하는 이스탄불, 시드니, 뉴욕 등의 함정에 절대 빠지지 않습니다. 사석에서 뽐내도 될 만큼 훌륭한 상식을 갖추고 있습니다. 주변에서 \"너 진짜 똑똑하다\"는 소리를 자주 듣습니다.",
      en: "You are an intellectual with great interest in international affairs and world culture. You never fall into common traps like Istanbul, Sydney, or New York. You have excellent general knowledge that you can show off in private. People around you often say \"You're really smart.\"",
      ja: "あなたは国際情勢と世界文化に興味の多い知識人です。他の人がよく間違えるイスタンブール、シドニー、ニューヨークなどの罠に絶対に陥りません。私的な場で自慢できるほど素晴らしい常識を持っています。周りから「あなた本当に頭がいい」という言葉をよく聞きます。",
      'zh-CN': "你是一个对国际事务和世界文化非常感兴趣的知识分子。你永远不会陷入常见的陷阱，如伊斯坦布尔、悉尼或纽约。你拥有出色的常识，可以在私下场合炫耀。你周围的人经常说\"你真聪明\"。",
      'zh-TW': "你是一個對國際事務和世界文化非常感興趣的知識分子。你永遠不會陷入常見的陷阱，如伊斯坦堡、雪梨或紐約。你擁有出色的常識，可以在私下場合炫耀。你周圍的人經常說「你真聰明」。",
      vi: "Bạn là một trí thức có quan tâm lớn đến các vấn đề quốc tế và văn hóa thế giới. Bạn không bao giờ rơi vào các bẫy phổ biến như Istanbul, Sydney hay New York. Bạn có kiến thức chung xuất sắc mà bạn có thể khoe trong các cuộc trò chuyện riêng. Mọi người xung quanh thường nói \"Bạn thực sự thông minh.\"",
      id: "Anda adalah intelektual dengan minat besar pada urusan internasional dan budaya dunia. Anda tidak pernah jatuh ke dalam jebakan umum seperti Istanbul, Sydney, atau New York. Anda memiliki pengetahuan umum yang sangat baik yang bisa Anda pamerkan secara pribadi. Orang di sekitar Anda sering berkata \"Anda benar-benar pintar.\""
    },
    correctCount: {
      ko: "9 ~ 10개",
      en: "9 ~ 10",
      ja: "9 ~ 10個",
      'zh-CN': "9 ~ 10个",
      'zh-TW': "9 ~ 10個",
      vi: "9 ~ 10",
      id: "9 ~ 10"
    },
    knowledgeLevel: {
      ko: "Lv. 85",
      en: "Lv. 85",
      ja: "Lv. 85",
      'zh-CN': "Lv. 85",
      'zh-TW': "Lv. 85",
      vi: "Lv. 85",
      id: "Lv. 85"
    },
    recommendation: {
      ko: "퀴즈 프로그램에 나가보는 건 어떠신가요?",
      en: "How about appearing on a quiz show?",
      ja: "クイズ番組に出てみるのはいかがですか？",
      'zh-CN': "参加智力竞赛节目怎么样？",
      'zh-TW': "參加智力競賽節目怎麼樣？",
      vi: "Bạn nghĩ sao về việc tham gia một chương trình đố vui?",
      id: "Bagaimana kalau muncul di acara kuis?"
    }
  },
  {
    type: "Type6",
    emoji: "🌍",
    title: {
      ko: "인간 구글 어스, 살아있는 지구본",
      en: "Human Google Earth, Living Globe",
      ja: "人間グーグルアース、生きている地球儀",
      'zh-CN': "人类谷歌地球，活地球仪",
      'zh-TW': "人類谷歌地球，活地球儀",
      vi: "Google Earth sống, quả địa cầu biết đi",
      id: "Google Earth Manusia, Globe Hidup"
    },
    shortDescription: {
      ko: "\"전 세계 수도? 자다가도 외울 수 있죠.\"",
      en: "\"World capitals? I can recite them in my sleep.\"",
      ja: "「世界中の首都？寝ながらでも覚えられますよ。」",
      'zh-CN': "「世界首都？我睡着也能背出来。」",
      'zh-TW': "「世界首都？我睡著也能背出來。」",
      vi: "\"Thủ đô thế giới? Tôi có thể đọc thuộc ngay cả khi ngủ.\"",
      id: "\"Ibu kota dunia? Saya bisa menghafalnya sambil tidur.\""
    },
    description: {
      ko: "축하합니다! 당신은 상위 1%에 해당하는 지리 덕후입니다. 카자흐스탄이나 모로코 같은 고난도 문제까지 맞힌 당신의 머릿속에는 이미 세계지도가 펼쳐져 있습니다. 지리 선생님이나 여행 작가를 해도 손색이 없을 정도의 엄청난 지식 소유자입니다.",
      en: "Congratulations! You are a geography enthusiast in the top 1%. You've even answered difficult questions about Kazakhstan and Morocco. A world map is already spread out in your mind. You have such vast knowledge that you could be a geography teacher or travel writer without any problem.",
      ja: "おめでとうございます！あなたは上位1%に該当する地理オタクです。カザフスタンやモロッコのような高難度の問題まで正解したあなたの頭の中には、すでに世界地図が広がっています。地理の先生や旅行作家をしても遜色がないほどの膨大な知識の所有者です。",
      'zh-CN': "恭喜！你是前1%的地理爱好者。你甚至答对了关于哈萨克斯坦和摩洛哥等困难问题。你的脑海中已经展开了一张世界地图。你拥有如此丰富的知识，完全可以成为一名地理老师或旅行作家。",
      'zh-TW': "恭喜！你是前1%的地理愛好者。你甚至答對了關於哈薩克和摩洛哥等困難問題。你的腦海中已經展開了一張世界地圖。你擁有如此豐富的知識，完全可以成為一名地理老師或旅行作家。",
      vi: "Chúc mừng! Bạn là người đam mê địa lý thuộc top 1%. Bạn thậm chí đã trả lời đúng các câu hỏi khó về Kazakhstan và Morocco. Một bản đồ thế giới đã được trải ra trong tâm trí bạn. Bạn có kiến thức rộng lớn đến mức có thể trở thành giáo viên địa lý hoặc nhà văn du lịch mà không có vấn đề gì.",
      id: "Selamat! Anda adalah penggemar geografi di 1% teratas. Anda bahkan menjawab pertanyaan sulit tentang Kazakhstan dan Maroko. Peta dunia sudah terpampang di pikiran Anda. Anda memiliki pengetahuan yang sangat luas sehingga bisa menjadi guru geografi atau penulis perjalanan tanpa masalah."
    },
    correctCount: {
      ko: "11 ~ 12개 (만점 수준)",
      en: "11 ~ 12 (Perfect Score)",
      ja: "11 ~ 12個（満点レベル）",
      'zh-CN': "11 ~ 12个（满分水平）",
      'zh-TW': "11 ~ 12個（滿分水平）",
      vi: "11 ~ 12 (Điểm tuyệt đối)",
      id: "11 ~ 12 (Skor Sempurna)"
    },
    knowledgeLevel: {
      ko: "Lv. 99 (MAX)",
      en: "Lv. 99 (MAX)",
      ja: "Lv. 99 (MAX)",
      'zh-CN': "Lv. 99 (MAX)",
      'zh-TW': "Lv. 99 (MAX)",
      vi: "Lv. 99 (MAX)",
      id: "Lv. 99 (MAX)"
    },
    recommendation: {
      ko: "당신이 바로 이 구역의 뇌섹남/뇌섹녀입니다.",
      en: "You are the brainy person of this area.",
      ja: "あなたがまさにこのエリアの脳セク男/脳セク女です。",
      'zh-CN': "你就是这个区域的聪明人。",
      'zh-TW': "你就是這個區域的聰明人。",
      vi: "Bạn chính là người thông minh của khu vực này.",
      id: "Anda adalah orang pintar di area ini."
    }
  }
];

export function calculatePhase2CapitalQuizResult(answers: Record<number, number>, questions: Phase2CapitalQuizQuestion[]): string {
  let correctCount = 0;
  
  // answers는 원래 질문 인덱스를 키로, 선택한 옵션 인덱스를 값으로 가짐
  Object.keys(answers).forEach(originalIndexStr => {
    const originalIndex = parseInt(originalIndexStr);
    const selectedOption = answers[originalIndex];
    const question = questions[originalIndex];
    
    if (question && selectedOption === question.correctAnswer) {
      correctCount++;
    }
  });
  
  // 정답 개수에 따라 결과 결정
  if (correctCount >= 0 && correctCount <= 2) {
    return "Type1";
  } else if (correctCount >= 3 && correctCount <= 4) {
    return "Type2";
  } else if (correctCount >= 5 && correctCount <= 6) {
    return "Type3";
  } else if (correctCount >= 7 && correctCount <= 8) {
    return "Type4";
  } else if (correctCount >= 9 && correctCount <= 10) {
    return "Type5";
  } else if (correctCount >= 11 && correctCount <= 12) {
    return "Type6";
  } else {
    // Fallback
    return "Type1";
  }
}
