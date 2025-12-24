export interface Phase2WorldHistoryQuizQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
  }[];
  correctAnswer: number; // 0=A, 1=B, 2=C, 3=D
}

export interface Phase2WorldHistoryQuizResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  correctCount: Record<string, string>; // "0 ~ 2개"
  historyLevel: Record<string, string>; // "Lv. 1"
  recommendation: Record<string, string>; // 추천 내용
}

export const phase2WorldHistoryQuizQuestions: Phase2WorldHistoryQuizQuestion[] = [
  {
    id: 1,
    question: {
      ko: "[산업 혁명] 18세기 후반, 증기기관의 개량으로 기계가 인간의 노동력을 대신하게 된 '산업 혁명'이 가장 먼저 시작된 나라는?",
      en: "[Industrial Revolution] In the late 18th century, which country did the 'Industrial Revolution' start first, where machines replaced human labor through improvements in steam engines?",
      ja: "[産業革命] 18世紀後半、蒸気機関の改良により機械が人間の労働力を代替するようになった「産業革命」が最も早く始まった国は？",
      'zh-CN': "[工业革命] 18世纪后期，通过改进蒸汽机使机器取代人类劳动力的'工业革命'最早在哪个国家开始？",
      'zh-TW': "[工業革命] 18世紀後期，通過改進蒸汽機使機器取代人類勞動力的「工業革命」最早在哪個國家開始？",
      vi: "[Cách mạng Công nghiệp] Vào cuối thế kỷ 18, quốc gia nào đã khởi đầu 'Cách mạng Công nghiệp' đầu tiên, nơi máy móc thay thế sức lao động con người thông qua cải tiến động cơ hơi nước?",
      id: "[Revolusi Industri] Pada akhir abad ke-18, negara mana yang memulai 'Revolusi Industri' pertama kali, di mana mesin menggantikan tenaga kerja manusia melalui perbaikan mesin uap?"
    },
    options: [
      {
        text: {
          ko: "프랑스",
          en: "France",
          ja: "フランス",
          'zh-CN': "法国",
          'zh-TW': "法國",
          vi: "Pháp",
          id: "Prancis"
        }
      },
      {
        text: {
          ko: "미국",
          en: "United States",
          ja: "アメリカ",
          'zh-CN': "美国",
          'zh-TW': "美國",
          vi: "Hoa Kỳ",
          id: "Amerika Serikat"
        }
      },
      {
        text: {
          ko: "영국",
          en: "United Kingdom",
          ja: "イギリス",
          'zh-CN': "英国",
          'zh-TW': "英國",
          vi: "Vương quốc Anh",
          id: "Inggris"
        }
      },
      {
        text: {
          ko: "독일",
          en: "Germany",
          ja: "ドイツ",
          'zh-CN': "德国",
          'zh-TW': "德國",
          vi: "Đức",
          id: "Jerman"
        }
      }
    ],
    correctAnswer: 2 // C (영국)
  },
  {
    id: 2,
    question: {
      ko: "[시민 혁명] 1789년, \"자유, 평등, 박애\"를 외치며 바스티유 감옥을 습격하면서 시작된 혁명은?",
      en: "[Citizen Revolution] What revolution began in 1789 by storming the Bastille prison while shouting \"Liberty, Equality, Fraternity\"?",
      ja: "[市民革命] 1789年、「自由、平等、博愛」を叫びながらバスティーユ監獄を襲撃して始まった革命は？",
      'zh-CN': "[市民革命] 1789年，高喊\"自由、平等、博爱\"并袭击巴士底狱而开始的革命是？",
      'zh-TW': "[市民革命] 1789年，高喊「自由、平等、博愛」並襲擊巴士底獄而開始的革命是？",
      vi: "[Cách mạng Dân sự] Cuộc cách mạng nào bắt đầu vào năm 1789 bằng việc tấn công nhà tù Bastille trong khi hô vang \"Tự do, Bình đẳng, Bác ái\"?",
      id: "[Revolusi Warga] Revolusi apa yang dimulai pada tahun 1789 dengan menyerbu penjara Bastille sambil meneriakkan \"Kebebasan, Kesetaraan, Persaudaraan\"?"
    },
    options: [
      {
        text: {
          ko: "프랑스 혁명",
          en: "French Revolution",
          ja: "フランス革命",
          'zh-CN': "法国大革命",
          'zh-TW': "法國大革命",
          vi: "Cách mạng Pháp",
          id: "Revolusi Prancis"
        }
      },
      {
        text: {
          ko: "명예 혁명",
          en: "Glorious Revolution",
          ja: "名誉革命",
          'zh-CN': "光荣革命",
          'zh-TW': "光榮革命",
          vi: "Cách mạng Vinh quang",
          id: "Revolusi Agung"
        }
      },
      {
        text: {
          ko: "러시아 혁명",
          en: "Russian Revolution",
          ja: "ロシア革命",
          'zh-CN': "俄国革命",
          'zh-TW': "俄國革命",
          vi: "Cách mạng Nga",
          id: "Revolusi Rusia"
        }
      },
      {
        text: {
          ko: "4.19 혁명",
          en: "April 19 Revolution",
          ja: "4.19革命",
          'zh-CN': "4.19革命",
          'zh-TW': "4.19革命",
          vi: "Cách mạng 19/4",
          id: "Revolusi 19 April"
        }
      }
    ],
    correctAnswer: 0 // A (프랑스 혁명)
  },
  {
    id: 3,
    question: {
      ko: "[미국 역사] 미국의 제16대 대통령으로, 남북 전쟁을 승리로 이끌고 노예 해방을 선언한 인물은?",
      en: "[American History] Who was the 16th President of the United States who led the Civil War to victory and declared the emancipation of slaves?",
      ja: "[アメリカ史] 南北戦争を勝利に導き、奴隷解放を宣言したアメリカの第16代大統領は？",
      'zh-CN': "[美国历史] 作为美国第16任总统，领导南北战争取得胜利并宣布解放奴隶的人物是？",
      'zh-TW': "[美國歷史] 作為美國第16任總統，領導南北戰爭取得勝利並宣布解放奴隸的人物是？",
      vi: "[Lịch sử Mỹ] Ai là Tổng thống thứ 16 của Hoa Kỳ, người đã dẫn dắt Nội chiến đến chiến thắng và tuyên bố giải phóng nô lệ?",
      id: "[Sejarah Amerika] Siapa Presiden ke-16 Amerika Serikat yang memimpin Perang Saudara menuju kemenangan dan menyatakan emansipasi budak?"
    },
    options: [
      {
        text: {
          ko: "조지 워싱턴",
          en: "George Washington",
          ja: "ジョージ・ワシントン",
          'zh-CN': "乔治·华盛顿",
          'zh-TW': "喬治·華盛頓",
          vi: "George Washington",
          id: "George Washington"
        }
      },
      {
        text: {
          ko: "토머스 제퍼슨",
          en: "Thomas Jefferson",
          ja: "トーマス・ジェファーソン",
          'zh-CN': "托马斯·杰斐逊",
          'zh-TW': "托馬斯·傑斐遜",
          vi: "Thomas Jefferson",
          id: "Thomas Jefferson"
        }
      },
      {
        text: {
          ko: "에이브러햄 링컨",
          en: "Abraham Lincoln",
          ja: "エイブラハム・リンカーン",
          'zh-CN': "亚伯拉罕·林肯",
          'zh-TW': "亞伯拉罕·林肯",
          vi: "Abraham Lincoln",
          id: "Abraham Lincoln"
        }
      },
      {
        text: {
          ko: "존 F. 케네디",
          en: "John F. Kennedy",
          ja: "ジョン・F・ケネディ",
          'zh-CN': "约翰·F·肯尼迪",
          'zh-TW': "約翰·F·甘迺迪",
          vi: "John F. Kennedy",
          id: "John F. Kennedy"
        }
      }
    ],
    correctAnswer: 2 // C (링컨)
  },
  {
    id: 4,
    question: {
      ko: "[제1차 세계대전] 1914년, 사라예보에서 오스트리아 황태자 부부가 암살당하며 제1차 세계대전의 도화선이 된 사건은?",
      en: "[World War I] In 1914, what event in Sarajevo where the Austrian crown prince and his wife were assassinated became the trigger for World War I?",
      ja: "[第一次世界大戦] 1914年、サラエボでオーストリア皇太子夫妻が暗殺され、第一次世界大戦の導火線となった事件は？",
      'zh-CN': "[第一次世界大战] 1914年，在萨拉热窝发生的奥地利皇储夫妇被暗杀并成为第一次世界大战导火索的事件是？",
      'zh-TW': "[第一次世界大戰] 1914年，在薩拉熱窩發生的奧地利皇儲夫婦被暗殺並成為第一次世界大戰導火索的事件是？",
      vi: "[Thế chiến I] Năm 1914, sự kiện nào ở Sarajevo nơi hoàng tử Áo và vợ bị ám sát đã trở thành ngòi nổ cho Thế chiến I?",
      id: "[Perang Dunia I] Pada tahun 1914, peristiwa apa di Sarajevo di mana putra mahkota Austria dan istrinya dibunuh menjadi pemicu Perang Dunia I?"
    },
    options: [
      {
        text: {
          ko: "사라예보 사건",
          en: "Sarajevo Incident",
          ja: "サラエボ事件",
          'zh-CN': "萨拉热窝事件",
          'zh-TW': "薩拉熱窩事件",
          vi: "Sự kiện Sarajevo",
          id: "Insiden Sarajevo"
        }
      },
      {
        text: {
          ko: "피의 일요일 사건",
          en: "Bloody Sunday",
          ja: "血の日曜日事件",
          'zh-CN': "血腥星期日",
          'zh-TW': "血腥星期日",
          vi: "Chủ nhật Đẫm máu",
          id: "Minggu Berdarah"
        }
      },
      {
        text: {
          ko: "보스턴 차 사건",
          en: "Boston Tea Party",
          ja: "ボストン茶会事件",
          'zh-CN': "波士顿倾茶事件",
          'zh-TW': "波士頓傾茶事件",
          vi: "Sự kiện Trà Boston",
          id: "Pesta Teh Boston"
        }
      },
      {
        text: {
          ko: "노르망디 상륙 작전",
          en: "D-Day (Normandy Landing)",
          ja: "ノルマンディー上陸作戦",
          'zh-CN': "诺曼底登陆",
          'zh-TW': "諾曼第登陸",
          vi: "Cuộc đổ bộ Normandy",
          id: "Pendaratan Normandia"
        }
      }
    ],
    correctAnswer: 0 // A (사라예보 사건)
  },
  {
    id: 5,
    question: {
      ko: "[러시아 혁명] 1917년 러시아 혁명을 주도하여 세계 최초의 사회주의 국가인 '소련'을 건국한 인물은?",
      en: "[Russian Revolution] Who led the Russian Revolution in 1917 and founded the Soviet Union, the world's first socialist state?",
      ja: "[ロシア革命] 1917年のロシア革命を主導し、世界初の社会主義国家「ソ連」を建国した人物は？",
      'zh-CN': "[俄国革命] 1917年领导俄国革命并建立世界上第一个社会主义国家'苏联'的人物是？",
      'zh-TW': "[俄國革命] 1917年領導俄國革命並建立世界上第一個社會主義國家「蘇聯」的人物是？",
      vi: "[Cách mạng Nga] Ai đã lãnh đạo Cách mạng Nga năm 1917 và thành lập Liên Xô, quốc gia xã hội chủ nghĩa đầu tiên trên thế giới?",
      id: "[Revolusi Rusia] Siapa yang memimpin Revolusi Rusia pada tahun 1917 dan mendirikan Uni Soviet, negara sosialis pertama di dunia?"
    },
    options: [
      {
        text: {
          ko: "스탈린",
          en: "Stalin",
          ja: "スターリン",
          'zh-CN': "斯大林",
          'zh-TW': "史達林",
          vi: "Stalin",
          id: "Stalin"
        }
      },
      {
        text: {
          ko: "레닌",
          en: "Lenin",
          ja: "レーニン",
          'zh-CN': "列宁",
          'zh-TW': "列寧",
          vi: "Lenin",
          id: "Lenin"
        }
      },
      {
        text: {
          ko: "고르바초프",
          en: "Gorbachev",
          ja: "ゴルバチョフ",
          'zh-CN': "戈尔巴乔夫",
          'zh-TW': "戈巴契夫",
          vi: "Gorbachev",
          id: "Gorbachev"
        }
      },
      {
        text: {
          ko: "푸틴",
          en: "Putin",
          ja: "プーチン",
          'zh-CN': "普京",
          'zh-TW': "普丁",
          vi: "Putin",
          id: "Putin"
        }
      }
    ],
    correctAnswer: 1 // B (레닌)
  },
  {
    id: 6,
    question: {
      ko: "[경제 대공황] 1929년 미국 월가에서 주가가 대폭락하며 전 세계적인 경제 위기를 불러온 사건은?",
      en: "[Great Depression] What event in 1929 when stock prices crashed on Wall Street in the United States caused a global economic crisis?",
      ja: "[世界恐慌] 1929年、アメリカのウォール街で株価が大暴落し、世界的な経済危機をもたらした事件は？",
      'zh-CN': "[经济大萧条] 1929年，美国华尔街股价暴跌并引发全球经济危机的事件是？",
      'zh-TW': "[經濟大蕭條] 1929年，美國華爾街股價暴跌並引發全球經濟危機的事件是？",
      vi: "[Đại suy thoái] Sự kiện nào vào năm 1929 khi giá cổ phiếu sụp đổ trên Phố Wall ở Hoa Kỳ đã gây ra cuộc khủng hoảng kinh tế toàn cầu?",
      id: "[Depresi Hebat] Peristiwa apa pada tahun 1929 ketika harga saham jatuh di Wall Street Amerika Serikat menyebabkan krisis ekonomi global?"
    },
    options: [
      {
        text: {
          ko: "오일 쇼크",
          en: "Oil Shock",
          ja: "オイルショック",
          'zh-CN': "石油危机",
          'zh-TW': "石油危機",
          vi: "Cú sốc dầu mỏ",
          id: "Guncangan Minyak"
        }
      },
      {
        text: {
          ko: "서브프라임 모기지 사태",
          en: "Subprime Mortgage Crisis",
          ja: "サブプライムローン危機",
          'zh-CN': "次贷危机",
          'zh-TW': "次貸危機",
          vi: "Khủng hoảng cho vay dưới chuẩn",
          id: "Krisis Subprime Mortgage"
        }
      },
      {
        text: {
          ko: "세계 대공황",
          en: "Great Depression",
          ja: "世界恐慌",
          'zh-CN': "大萧条",
          'zh-TW': "大蕭條",
          vi: "Đại suy thoái",
          id: "Depresi Hebat"
        }
      },
      {
        text: {
          ko: "IMF 외환 위기",
          en: "IMF Foreign Exchange Crisis",
          ja: "IMF通貨危機",
          'zh-CN': "IMF外汇危机",
          'zh-TW': "IMF外匯危機",
          vi: "Khủng hoảng ngoại hối IMF",
          id: "Krisis Valuta Asing IMF"
        }
      }
    ],
    correctAnswer: 2 // C (세계 대공황)
  },
  {
    id: 7,
    question: {
      ko: "[제2차 세계대전] 제2차 세계대전 당시 독일, 이탈리아, 일본이 맺은 군사 동맹을 무엇이라 부를까요?",
      en: "[World War II] What was the military alliance formed by Germany, Italy, and Japan during World War II called?",
      ja: "[第二次世界大戦] 第二次世界大戦中、ドイツ、イタリア、日本が結んだ軍事同盟を何と呼びますか？",
      'zh-CN': "[第二次世界大战] 第二次世界大战期间，德国、意大利、日本结成的军事同盟叫什么？",
      'zh-TW': "[第二次世界大戰] 第二次世界大戰期間，德國、義大利、日本結成的軍事同盟叫什麼？",
      vi: "[Thế chiến II] Liên minh quân sự được thành lập bởi Đức, Ý và Nhật Bản trong Thế chiến II được gọi là gì?",
      id: "[Perang Dunia II] Apa nama aliansi militer yang dibentuk oleh Jerman, Italia, dan Jepang selama Perang Dunia II?"
    },
    options: [
      {
        text: {
          ko: "연합국 (Allies)",
          en: "Allies",
          ja: "連合国",
          'zh-CN': "同盟国",
          'zh-TW': "同盟國",
          vi: "Đồng minh",
          id: "Sekutu"
        }
      },
      {
        text: {
          ko: "추축국 (Axis Powers)",
          en: "Axis Powers",
          ja: "枢軸国",
          'zh-CN': "轴心国",
          'zh-TW': "軸心國",
          vi: "Phe Trục",
          id: "Kekuatan Poros"
        }
      },
      {
        text: {
          ko: "나토 (NATO)",
          en: "NATO",
          ja: "NATO（北大西洋条約機構）",
          'zh-CN': "北约",
          'zh-TW': "北約",
          vi: "NATO",
          id: "NATO"
        }
      },
      {
        text: {
          ko: "유럽 연합 (EU)",
          en: "European Union (EU)",
          ja: "EU（欧州連合）",
          'zh-CN': "欧盟",
          'zh-TW': "歐盟",
          vi: "Liên minh châu Âu (EU)",
          id: "Uni Eropa (EU)"
        }
      }
    ],
    correctAnswer: 1 // B (추축국)
  },
  {
    id: 8,
    question: {
      ko: "[냉전 시대] 제2차 세계대전 이후 미국(자본주의)과 소련(사회주의)의 이념 대립이 극에 달했던, 총성 없는 전쟁 시기를 무엇이라 할까요?",
      en: "[Cold War Era] What do we call the period after World War II when the ideological confrontation between the United States (capitalism) and the Soviet Union (socialism) reached its peak, a war without gunfire?",
      ja: "[冷戦時代] 第二次世界大戦後、アメリカ（資本主義）とソ連（社会主義）のイデオロギー対立が極限に達した、銃声のない戦争の時期を何と呼びますか？",
      'zh-CN': "[冷战时代] 第二次世界大战后，美国（资本主义）和苏联（社会主义）的意识形态对立达到极点的、没有枪声的战争时期叫什么？",
      'zh-TW': "[冷戰時代] 第二次世界大戰後，美國（資本主義）和蘇聯（社會主義）的意識形態對立達到極點的、沒有槍聲的戰爭時期叫什麼？",
      vi: "[Thời kỳ Chiến tranh Lạnh] Chúng ta gọi thời kỳ sau Thế chiến II khi cuộc đối đầu ý thức hệ giữa Hoa Kỳ (chủ nghĩa tư bản) và Liên Xô (chủ nghĩa xã hội) đạt đến đỉnh điểm, một cuộc chiến không có tiếng súng là gì?",
      id: "[Era Perang Dingin] Apa yang kita sebut periode setelah Perang Dunia II ketika konfrontasi ideologis antara Amerika Serikat (kapitalisme) dan Uni Soviet (sosialisme) mencapai puncaknya, perang tanpa tembakan?"
    },
    options: [
      {
        text: {
          ko: "십자군 전쟁",
          en: "Crusades",
          ja: "十字軍",
          'zh-CN': "十字军东征",
          'zh-TW': "十字軍東征",
          vi: "Thập tự chinh",
          id: "Perang Salib"
        }
      },
      {
        text: {
          ko: "장미 전쟁",
          en: "Wars of the Roses",
          ja: "薔薇戦争",
          'zh-CN': "玫瑰战争",
          'zh-TW': "玫瑰戰爭",
          vi: "Chiến tranh Hoa hồng",
          id: "Perang Mawar"
        }
      },
      {
        text: {
          ko: "냉전 (Cold War)",
          en: "Cold War",
          ja: "冷戦",
          'zh-CN': "冷战",
          'zh-TW': "冷戰",
          vi: "Chiến tranh Lạnh",
          id: "Perang Dingin"
        }
      },
      {
        text: {
          ko: "열전 (Hot War)",
          en: "Hot War",
          ja: "熱戦",
          'zh-CN': "热战",
          'zh-TW': "熱戰",
          vi: "Chiến tranh Nóng",
          id: "Perang Panas"
        }
      }
    ],
    correctAnswer: 2 // C (냉전)
  },
  {
    id: 9,
    question: {
      ko: "[우주 경쟁] 1969년, 인류 최초로 달에 착륙한 아폴로 11호의 우주 비행사는?",
      en: "[Space Race] Who was the astronaut of Apollo 11 who first landed on the moon in 1969?",
      ja: "[宇宙競争] 1969年、人類初めて月に着陸したアポロ11号の宇宙飛行士は？",
      'zh-CN': "[太空竞赛] 1969年，首次登上月球的阿波罗11号宇航员是？",
      'zh-TW': "[太空競賽] 1969年，首次登上月球的阿波羅11號宇航員是？",
      vi: "[Cuộc đua vũ trụ] Ai là phi hành gia của Apollo 11, người đầu tiên đáp xuống mặt trăng vào năm 1969?",
      id: "[Perlombaan Antariksa] Siapa astronot Apollo 11 yang pertama kali mendarat di bulan pada tahun 1969?"
    },
    options: [
      {
        text: {
          ko: "유리 가가린",
          en: "Yuri Gagarin",
          ja: "ユーリ・ガガーリン",
          'zh-CN': "尤里·加加林",
          'zh-TW': "尤里·加加林",
          vi: "Yuri Gagarin",
          id: "Yuri Gagarin"
        }
      },
      {
        text: {
          ko: "닐 암스트롱",
          en: "Neil Armstrong",
          ja: "ニール・アームストロング",
          'zh-CN': "尼尔·阿姆斯特朗",
          'zh-TW': "尼爾·阿姆斯壯",
          vi: "Neil Armstrong",
          id: "Neil Armstrong"
        }
      },
      {
        text: {
          ko: "버즈 올드린",
          en: "Buzz Aldrin",
          ja: "バズ・オルドリン",
          'zh-CN': "巴兹·奥尔德林",
          'zh-TW': "巴茲·奧爾德林",
          vi: "Buzz Aldrin",
          id: "Buzz Aldrin"
        }
      },
      {
        text: {
          ko: "라이카",
          en: "Laika",
          ja: "ライカ",
          'zh-CN': "莱卡",
          'zh-TW': "萊卡",
          vi: "Laika",
          id: "Laika"
        }
      }
    ],
    correctAnswer: 1 // B (닐 암스트롱)
  },
  {
    id: 10,
    question: {
      ko: "[냉전 종식] 1989년, 동독과 서독의 분단을 상징하던 이것이 무너지면서 냉전 종식의 신호탄이 되었습니다. 이것은?",
      en: "[End of Cold War] In 1989, what fell and became a signal for the end of the Cold War, which had symbolized the division of East and West Germany?",
      ja: "[冷戦終結] 1989年、東ドイツと西ドイツの分断を象徴していたこれが崩壊し、冷戦終結の信号弾となりました。これは？",
      'zh-CN': "[冷战结束] 1989年，象征东西德分裂的这个倒塌，成为冷战结束的信号弹。这是什么？",
      'zh-TW': "[冷戰結束] 1989年，象徵東西德分裂的這個倒塌，成為冷戰結束的信號彈。這是什麼？",
      vi: "[Kết thúc Chiến tranh Lạnh] Năm 1989, cái gì đã sụp đổ và trở thành tín hiệu cho sự kết thúc Chiến tranh Lạnh, từng tượng trưng cho sự chia cắt Đông và Tây Đức?",
      id: "[Akhir Perang Dingin] Pada tahun 1989, apa yang runtuh dan menjadi sinyal berakhirnya Perang Dingin, yang melambangkan pembagian Jerman Timur dan Barat?"
    },
    options: [
      {
        text: {
          ko: "만리장성",
          en: "Great Wall of China",
          ja: "万里の長城",
          'zh-CN': "万里长城",
          'zh-TW': "萬里長城",
          vi: "Vạn Lý Trường Thành",
          id: "Tembok Besar China"
        }
      },
      {
        text: {
          ko: "통곡의 벽",
          en: "Wailing Wall",
          ja: "嘆きの壁",
          'zh-CN': "哭墙",
          'zh-TW': "哭牆",
          vi: "Bức tường Than khóc",
          id: "Tembok Ratapan"
        }
      },
      {
        text: {
          ko: "베를린 장벽",
          en: "Berlin Wall",
          ja: "ベルリンの壁",
          'zh-CN': "柏林墙",
          'zh-TW': "柏林圍牆",
          vi: "Bức tường Berlin",
          id: "Tembok Berlin"
        }
      },
      {
        text: {
          ko: "38선",
          en: "38th Parallel",
          ja: "38度線",
          'zh-CN': "三八线",
          'zh-TW': "三八線",
          vi: "Vĩ tuyến 38",
          id: "Garis 38"
        }
      }
    ],
    correctAnswer: 2 // C (베를린 장벽)
  },
  {
    id: 11,
    question: {
      ko: "[인권 운동] 남아프리카 공화국의 흑인 인권 운동가이자 최초의 흑인 대통령으로, 노벨 평화상을 수상한 인물은?",
      en: "[Human Rights Movement] Who was the black human rights activist and first black president of South Africa who won the Nobel Peace Prize?",
      ja: "[人権運動] 南アフリカ共和国の黒人人権活動家で、初の黒人大統領となり、ノーベル平和賞を受賞した人物は？",
      'zh-CN': "[人权运动] 南非的黑人人权活动家和首位黑人总统，获得诺贝尔和平奖的人物是？",
      'zh-TW': "[人權運動] 南非的黑人人權活動家和首位黑人總統，獲得諾貝爾和平獎的人物是？",
      vi: "[Phong trào Nhân quyền] Ai là nhà hoạt động nhân quyền da đen và là tổng thống da đen đầu tiên của Nam Phi, người đã đoạt giải Nobel Hòa bình?",
      id: "[Gerakan Hak Asasi Manusia] Siapa aktivis hak asasi manusia kulit hitam dan presiden kulit hitam pertama Afrika Selatan yang memenangkan Hadiah Nobel Perdamaian?"
    },
    options: [
      {
        text: {
          ko: "마틴 루터 킹",
          en: "Martin Luther King",
          ja: "マーティン・ルーサー・キング",
          'zh-CN': "马丁·路德·金",
          'zh-TW': "馬丁·路德·金",
          vi: "Martin Luther King",
          id: "Martin Luther King"
        }
      },
      {
        text: {
          ko: "넬슨 만델라",
          en: "Nelson Mandela",
          ja: "ネルソン・マンデラ",
          'zh-CN': "纳尔逊·曼德拉",
          'zh-TW': "納爾遜·曼德拉",
          vi: "Nelson Mandela",
          id: "Nelson Mandela"
        }
      },
      {
        text: {
          ko: "버락 오바마",
          en: "Barack Obama",
          ja: "バラク・オバマ",
          'zh-CN': "巴拉克·奥巴马",
          'zh-TW': "巴拉克·歐巴馬",
          vi: "Barack Obama",
          id: "Barack Obama"
        }
      },
      {
        text: {
          ko: "간디",
          en: "Gandhi",
          ja: "ガンディー",
          'zh-CN': "甘地",
          'zh-TW': "甘地",
          vi: "Gandhi",
          id: "Gandhi"
        }
      }
    ],
    correctAnswer: 1 // B (넬슨 만델라)
  },
  {
    id: 12,
    question: {
      ko: "[21세기] 2001년 9월 11일, 이슬람 테러 단체가 미국의 세계무역센터와 펜타곤을 공격한 사건은?",
      en: "[21st Century] What was the event on September 11, 2001, when an Islamic terrorist group attacked the World Trade Center and the Pentagon in the United States?",
      ja: "[21世紀] 2001年9月11日、イスラムテロ組織がアメリカの世界貿易センターとペンタゴンを攻撃した事件は？",
      'zh-CN': "[21世纪] 2001年9月11日，伊斯兰恐怖组织袭击美国世界贸易中心和五角大楼的事件是？",
      'zh-TW': "[21世紀] 2001年9月11日，伊斯蘭恐怖組織襲擊美國世界貿易中心和五角大樓的事件是？",
      vi: "[Thế kỷ 21] Sự kiện nào vào ngày 11 tháng 9 năm 2001, khi một tổ chức khủng bố Hồi giáo tấn công Trung tâm Thương mại Thế giới và Lầu Năm Góc của Hoa Kỳ?",
      id: "[Abad ke-21] Peristiwa apa pada 11 September 2001, ketika kelompok teroris Islam menyerang World Trade Center dan Pentagon di Amerika Serikat?"
    },
    options: [
      {
        text: {
          ko: "걸프전",
          en: "Gulf War",
          ja: "湾岸戦争",
          'zh-CN': "海湾战争",
          'zh-TW': "海灣戰爭",
          vi: "Chiến tranh Vùng Vịnh",
          id: "Perang Teluk"
        }
      },
      {
        text: {
          ko: "9.11 테러",
          en: "9/11 Attacks",
          ja: "9.11テロ",
          'zh-CN': "9.11恐怖袭击",
          'zh-TW': "9.11恐怖襲擊",
          vi: "Vụ tấn công 11/9",
          id: "Serangan 9/11"
        }
      },
      {
        text: {
          ko: "이라크 전쟁",
          en: "Iraq War",
          ja: "イラク戦争",
          'zh-CN': "伊拉克战争",
          'zh-TW': "伊拉克戰爭",
          vi: "Chiến tranh Iraq",
          id: "Perang Irak"
        }
      },
      {
        text: {
          ko: "아프가니스탄 전쟁",
          en: "Afghanistan War",
          ja: "アフガニスタン戦争",
          'zh-CN': "阿富汗战争",
          'zh-TW': "阿富汗戰爭",
          vi: "Chiến tranh Afghanistan",
          id: "Perang Afghanistan"
        }
      }
    ],
    correctAnswer: 1 // B (9.11 테러)
  }
];

export const phase2WorldHistoryQuizResults: Phase2WorldHistoryQuizResult[] = [
  {
    type: "Type1",
    emoji: "🌾",
    title: {
      ko: "과거에 사는 시간 여행자, 18세기 소작농",
      en: "Time Traveler Living in the Past, 18th Century Peasant",
      ja: "過去に住む時間旅行者、18世紀の小作農",
      'zh-CN': "生活在过去的时间旅行者，18世纪佃农",
      'zh-TW': "生活在過去的時間旅行者，18世紀佃農",
      vi: "Người du hành thời gian sống trong quá khứ, Nông dân thế kỷ 18",
      id: "Penjelajah Waktu yang Hidup di Masa Lalu, Petani Abad ke-18"
    },
    shortDescription: {
      ko: "\"세상이 어떻게 돌아가는지 모르겠어요...\"",
      en: "\"I don't know how the world works...\"",
      ja: "「世界がどう動いているのか分かりません...」",
      'zh-CN': "\"我不知道世界是如何运转的...\"",
      'zh-TW': "「我不知道世界是如何運轉的...」",
      vi: "\"Tôi không biết thế giới vận hành như thế nào...\"",
      id: "\"Saya tidak tahu bagaimana dunia bekerja...\""
    },
    description: {
      ko: "당신은 근현대사에 대한 지식이 거의 백지상태입니다. 산업 혁명이 뭔지, 세계대전이 왜 일어났는지 기억이 가물가물합니다. 뉴스를 볼 때 이해가 안 가는 부분이 많을 수 있습니다. 하지만 괜찮습니다. 역사는 지금부터 알아가면 되니까요!",
      en: "Your knowledge of modern and contemporary history is almost blank. You vaguely remember what the Industrial Revolution was and why the World Wars happened. You may find many parts of the news hard to understand. But that's okay. You can start learning history from now on!",
      ja: "あなたは近現代史に関する知識がほぼ白紙状態です。産業革命が何か、世界大戦がなぜ起こったのか、記憶がぼんやりしています。ニュースを見ると理解できない部分が多いかもしれません。でも大丈夫です。歴史は今から学べばいいのですから！",
      'zh-CN': "你对近现代史的知识几乎是空白。你模糊地记得工业革命是什么，世界大战为什么发生。看新闻时可能有很多不理解的部分。但没关系。历史从现在开始学习就可以了！",
      'zh-TW': "你對近現代史的知識幾乎是空白。你模糊地記得工業革命是什麼，世界大戰為什麼發生。看新聞時可能有很多不理解的部分。但沒關係。歷史從現在開始學習就可以了！",
      vi: "Kiến thức của bạn về lịch sử cận đại và hiện đại gần như trống rỗng. Bạn mơ hồ nhớ Cách mạng Công nghiệp là gì và tại sao các cuộc Thế chiến xảy ra. Bạn có thể thấy nhiều phần của tin tức khó hiểu. Nhưng không sao. Bạn có thể bắt đầu học lịch sử từ bây giờ!",
      id: "Pengetahuan Anda tentang sejarah modern dan kontemporer hampir kosong. Anda samar-samar ingat apa Revolusi Industri itu dan mengapa Perang Dunia terjadi. Anda mungkin menemukan banyak bagian berita yang sulit dipahami. Tapi tidak apa-apa. Anda bisa mulai belajar sejarah dari sekarang!"
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
    historyLevel: {
      ko: "Lv. 1",
      en: "Lv. 1",
      ja: "Lv. 1",
      'zh-CN': "Lv. 1",
      'zh-TW': "Lv. 1",
      vi: "Lv. 1",
      id: "Lv. 1"
    },
    recommendation: {
      ko: "쉬운 역사 만화나 유튜브 요약 영상 시청하기.",
      en: "Watch easy history comics or YouTube summary videos.",
      ja: "簡単な歴史漫画やYouTube要約動画を視聴する。",
      'zh-CN': "观看简单的历史漫画或YouTube摘要视频。",
      'zh-TW': "觀看簡單的歷史漫畫或YouTube摘要視頻。",
      vi: "Xem truyện tranh lịch sử dễ hiểu hoặc video tóm tắt trên YouTube.",
      id: "Tonton komik sejarah mudah atau video ringkasan YouTube."
    }
  },
  {
    type: "Type2",
    emoji: "💤",
    title: {
      ko: "역사 수업 때 졸았던, 기억상실증 환자",
      en: "Amnesia Patient Who Slept During History Class",
      ja: "歴史の授業で居眠りしていた、記憶喪失症患者",
      'zh-CN': "历史课上打瞌睡，失忆症患者",
      'zh-TW': "歷史課上打瞌睡，失憶症患者",
      vi: "Bệnh nhân mất trí nhớ ngủ gật trong giờ lịch sử",
      id: "Pasien Amnesia yang Tertidur Saat Pelajaran Sejarah"
    },
    shortDescription: {
      ko: "\"들어는 봤는데... 누구였더라?\"",
      en: "\"I've heard of it... but who was it?\"",
      ja: "「聞いたことはあるけど...誰だったっけ？」",
      'zh-CN': "\"好像听过...是谁来着？\"",
      'zh-TW': "「好像聽過...是誰來著？」",
      vi: "\"Tôi đã nghe nói... nhưng là ai nhỉ?\"",
      id: "\"Saya pernah dengar... tapi siapa ya?\""
    },
    description: {
      ko: "학교 다닐 때 한 번쯤은 들어본 키워드들이지만, 정확한 내용은 기억나지 않습니다. 링컨이 미국 대통령인 건 알겠는데, 무슨 일을 했는지는 헷갈리는 수준입니다. 조금만 관심을 가지면 금방 상식을 채울 수 있습니다.",
      en: "You've heard these keywords at least once during school, but you can't remember the exact details. You know Lincoln was a U.S. president, but you're confused about what he did. If you show a little interest, you can quickly fill in your common knowledge.",
      ja: "学校に通っていたとき、一度は聞いたことがあるキーワードですが、正確な内容は覚えていません。リンカーンがアメリカ大統領だったことは分かりますが、何をしたかは混乱するレベルです。少し興味を持てば、すぐに常識を埋めることができます。",
      'zh-CN': "你在学校时至少听过这些关键词，但记不清具体内容。你知道林肯是美国总统，但对他做了什么感到困惑。如果你稍加关注，很快就能填补常识。",
      'zh-TW': "你在學校時至少聽過這些關鍵詞，但記不清具體內容。你知道林肯是美國總統，但對他做了什麼感到困惑。如果你稍加關注，很快就能填補常識。",
      vi: "Bạn đã nghe những từ khóa này ít nhất một lần khi đi học, nhưng bạn không nhớ chi tiết chính xác. Bạn biết Lincoln là tổng thống Mỹ, nhưng bạn bối rối về những gì ông đã làm. Nếu bạn quan tâm một chút, bạn có thể nhanh chóng bổ sung kiến thức chung.",
      id: "Anda pernah mendengar kata kunci ini setidaknya sekali saat sekolah, tetapi Anda tidak ingat detail yang tepat. Anda tahu Lincoln adalah presiden AS, tetapi Anda bingung tentang apa yang dia lakukan. Jika Anda menunjukkan sedikit minat, Anda dapat dengan cepat mengisi pengetahuan umum."
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
    historyLevel: {
      ko: "Lv. 10",
      en: "Lv. 10",
      ja: "Lv. 10",
      'zh-CN': "Lv. 10",
      'zh-TW': "Lv. 10",
      vi: "Lv. 10",
      id: "Lv. 10"
    },
    recommendation: {
      ko: "'쉰들러 리스트', '라이언 일병 구하기' 등 명작 영화 보기.",
      en: "Watch masterpiece films like 'Schindler's List' and 'Saving Private Ryan'.",
      ja: "「シンドラーのリスト」「プライベート・ライアン」などの名作映画を見る。",
      'zh-CN': "观看像《辛德勒的名单》和《拯救大兵瑞恩》这样的经典电影。",
      'zh-TW': "觀看像《辛德勒的名單》和《搶救雷恩大兵》這樣的經典電影。",
      vi: "Xem các bộ phim kiệt tác như 'Danh sách Schindler' và 'Giải cứu binh nhì Ryan'.",
      id: "Tonton film-film masterpiece seperti 'Schindler's List' dan 'Saving Private Ryan'."
    }
  },
  {
    type: "Type3",
    emoji: "📰",
    title: {
      ko: "상식은 통하는, 평범한 시민",
      en: "Common-Sense Citizen with Basic Knowledge",
      ja: "常識が通じる、平凡な市民",
      'zh-CN': "有常识的普通市民",
      'zh-TW': "有常識的普通市民",
      vi: "Công dân bình thường có kiến thức cơ bản",
      id: "Warga Biasa dengan Pengetahuan Dasar"
    },
    shortDescription: {
      ko: "\"기본적인 건 다 알죠!\"",
      en: "\"I know the basics!\"",
      ja: "「基本的なことは分かります！」",
      'zh-CN': "\"基本的东西我都知道！\"",
      'zh-TW': "「基本的東西我都知道！」",
      vi: "\"Tôi biết những điều cơ bản!\"",
      id: "\"Saya tahu dasar-dasarnya!\""
    },
    description: {
      ko: "당신은 사회생활에 필요한 기본적인 역사 상식을 갖추고 있습니다. 세계대전이나 냉전 같은 굵직한 사건들은 잘 알고 있습니다. 다만, 세부적인 인물이나 연도 문제에서 살짝 헷갈릴 수 있습니다. 어디 가서 \"무식하다\"는 소리는 절대 듣지 않습니다.",
      en: "You have the basic historical knowledge needed for social life. You know major events like the World Wars and the Cold War well. However, you may get slightly confused about specific figures or years. You'll never hear anyone say you're 'ignorant'.",
      ja: "あなたは社会生活に必要な基本的な歴史常識を持っています。世界大戦や冷戦のような大きな出来事はよく知っています。ただし、詳細な人物や年号の問題で少し混乱するかもしれません。どこに行っても「無知だ」と言われることは絶対にありません。",
      'zh-CN': "你拥有社会生活所需的基本历史常识。你很好地了解像世界大战和冷战这样的大事件。不过，在具体人物或年份问题上可能会有点困惑。你绝不会听到有人说你'无知'。",
      'zh-TW': "你擁有社會生活所需的基本歷史常識。你很好地了解像世界大戰和冷戰這樣的大事件。不過，在具體人物或年份問題上可能會有點困惑。你絕不會聽到有人說你「無知」。",
      vi: "Bạn có kiến thức lịch sử cơ bản cần thiết cho cuộc sống xã hội. Bạn biết rõ các sự kiện lớn như Thế chiến và Chiến tranh Lạnh. Tuy nhiên, bạn có thể hơi bối rối về các nhân vật cụ thể hoặc năm. Bạn sẽ không bao giờ nghe ai nói bạn 'ngu dốt'.",
      id: "Anda memiliki pengetahuan sejarah dasar yang diperlukan untuk kehidupan sosial. Anda tahu dengan baik peristiwa-peristiwa besar seperti Perang Dunia dan Perang Dingin. Namun, Anda mungkin sedikit bingung tentang tokoh-tokoh spesifik atau tahun. Anda tidak akan pernah mendengar siapa pun mengatakan Anda 'bodoh'."
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
    historyLevel: {
      ko: "Lv. 40",
      en: "Lv. 40",
      ja: "Lv. 40",
      'zh-CN': "Lv. 40",
      'zh-TW': "Lv. 40",
      vi: "Lv. 40",
      id: "Lv. 40"
    },
    recommendation: {
      ko: "뉴스 국제면 기사 챙겨 보기.",
      en: "Keep up with international news articles.",
      ja: "ニュースの国際面記事を読む。",
      'zh-CN': "关注国际新闻文章。",
      'zh-TW': "關注國際新聞文章。",
      vi: "Theo dõi các bài báo tin tức quốc tế.",
      id: "Ikuti artikel berita internasional."
    }
  },
  {
    type: "Type4",
    emoji: "🎓",
    title: {
      ko: "역사의 흐름을 읽는, 지식인",
      en: "Intellectual Who Reads Historical Flow",
      ja: "歴史の流れを読む、知識人",
      'zh-CN': "读懂历史脉络的知识分子",
      'zh-TW': "讀懂歷史脈絡的知識分子",
      vi: "Trí thức đọc được dòng chảy lịch sử",
      id: "Intelektual yang Membaca Alur Sejarah"
    },
    shortDescription: {
      ko: "\"인과 관계가 딱딱 보이네요.\"",
      en: "\"The cause and effect relationships are clear.\"",
      ja: "「因果関係がはっきり見えますね。」",
      'zh-CN': "\"因果关系一目了然。\"",
      'zh-TW': "「因果關係一目了然。」",
      vi: "\"Mối quan hệ nhân quả rõ ràng.\"",
      id: "\"Hubungan sebab-akibat terlihat jelas.\""
    },
    description: {
      ko: "당신은 근현대사의 흐름을 꽤 잘 파악하고 있습니다. 사건의 원인과 결과를 연결할 줄 알며, 주요 인물들의 업적도 잘 기억하고 있습니다. 친구들이 역사 관련 질문을 하면 대답해 줄 수 있는 브레인입니다.",
      en: "You have a pretty good grasp of the flow of modern and contemporary history. You know how to connect the causes and effects of events, and you remember the achievements of major figures well. You're a brain who can answer when friends ask history-related questions.",
      ja: "あなたは近現代史の流れをかなりよく把握しています。出来事の原因と結果を結びつけることができ、主要人物の業績もよく覚えています。友達が歴史に関する質問をすると答えられる頭脳です。",
      'zh-CN': "你很好地掌握了近现代史的脉络。你知道如何连接事件的因果关系，也很好地记住了主要人物的成就。当朋友问历史相关问题时，你是一个能够回答的智囊。",
      'zh-TW': "你很好地掌握了近現代史的脈絡。你知道如何連接事件的因果關係，也很好地記住了主要人物的成就。當朋友問歷史相關問題時，你是一個能夠回答的智囊。",
      vi: "Bạn nắm bắt khá tốt dòng chảy của lịch sử cận đại và hiện đại. Bạn biết cách kết nối nguyên nhân và hậu quả của các sự kiện, và bạn nhớ rõ các thành tựu của các nhân vật lớn. Bạn là bộ não có thể trả lời khi bạn bè hỏi các câu hỏi liên quan đến lịch sử.",
      id: "Anda memiliki pemahaman yang cukup baik tentang alur sejarah modern dan kontemporer. Anda tahu cara menghubungkan penyebab dan akibat peristiwa, dan Anda mengingat dengan baik pencapaian tokoh-tokoh utama. Anda adalah otak yang dapat menjawab ketika teman-teman mengajukan pertanyaan terkait sejarah."
    },
    correctCount: {
      ko: "7 ~ 9개",
      en: "7 ~ 9",
      ja: "7 ~ 9個",
      'zh-CN': "7 ~ 9个",
      'zh-TW': "7 ~ 9個",
      vi: "7 ~ 9",
      id: "7 ~ 9"
    },
    historyLevel: {
      ko: "Lv. 70",
      en: "Lv. 70",
      ja: "Lv. 70",
      'zh-CN': "Lv. 70",
      'zh-TW': "Lv. 70",
      vi: "Lv. 70",
      id: "Lv. 70"
    },
    recommendation: {
      ko: "역사 관련 팟캐스트나 교양 서적 읽기.",
      en: "Listen to history-related podcasts or read educational books.",
      ja: "歴史関連のポッドキャストを聞くか、教養書を読む。",
      'zh-CN': "收听历史相关的播客或阅读教育书籍。",
      'zh-TW': "收聽歷史相關的播客或閱讀教育書籍。",
      vi: "Nghe podcast liên quan đến lịch sử hoặc đọc sách giáo dục.",
      id: "Dengarkan podcast terkait sejarah atau baca buku pendidikan."
    }
  },
  {
    type: "Type5",
    emoji: "🧠",
    title: {
      ko: "걸어 다니는 근현대사 교과서, 엘리트",
      en: "Walking Modern History Textbook, Elite",
      ja: "歩く近現代史教科書、エリート",
      'zh-CN': "行走的近现代史教科书，精英",
      'zh-TW': "行走的近現代史教科書，精英",
      vi: "Cuốn sách giáo khoa lịch sử cận đại biết đi, Tinh hoa",
      id: "Buku Pelajaran Sejarah Modern Berjalan, Elite"
    },
    shortDescription: {
      ko: "\"역사는 현재를 비추는 거울이죠.\"",
      en: "\"History is a mirror that reflects the present.\"",
      ja: "「歴史は現在を映す鏡です。」",
      'zh-CN': "\"历史是反映现在的镜子。\"",
      'zh-TW': "「歷史是反映現在的鏡子。」",
      vi: "\"Lịch sử là tấm gương phản chiếu hiện tại.\"",
      id: "\"Sejarah adalah cermin yang memantulkan masa kini.\""
    },
    description: {
      ko: "당신은 역사적 지식이 매우 풍부합니다. 단순히 사건을 아는 것을 넘어, 그 사건이 현재 세계에 미친 영향까지 통찰할 수 있습니다. 9.11 테러나 냉전 시대 문제도 가볍게 맞히는 당신은 상당한 엘리트입니다.",
      en: "You have very rich historical knowledge. Beyond simply knowing events, you can even insightfully understand the impact those events have had on the current world. You're quite an elite who can easily answer questions about the 9/11 attacks or the Cold War era.",
      ja: "あなたは歴史的知識が非常に豊富です。単に出来事を知ることを超えて、その出来事が現在の世界に与えた影響まで洞察できます。9.11テロや冷戦時代の問題も軽々と正解できるあなたは、かなりのエリートです。",
      'zh-CN': "你拥有非常丰富的历史知识。除了简单地了解事件，你还能洞察地理解这些事件对当今世界的影响。你能轻松回答9.11恐怖袭击或冷战时代的问题，你是一个相当优秀的精英。",
      'zh-TW': "你擁有非常豐富的歷史知識。除了簡單地了解事件，你還能洞察地理解這些事件對當今世界的影響。你能輕鬆回答9.11恐怖襲擊或冷戰時代的問題，你是一個相當優秀的精英。",
      vi: "Bạn có kiến thức lịch sử rất phong phú. Vượt ra ngoài việc chỉ biết các sự kiện, bạn thậm chí có thể hiểu một cách sâu sắc tác động mà những sự kiện đó đã có đối với thế giới hiện tại. Bạn là một tinh hoa khá xuất sắc, người có thể dễ dàng trả lời các câu hỏi về vụ tấn công 11/9 hoặc thời kỳ Chiến tranh Lạnh.",
      id: "Anda memiliki pengetahuan sejarah yang sangat kaya. Melampaui sekadar mengetahui peristiwa, Anda bahkan dapat memahami secara mendalam dampak yang dimiliki peristiwa-peristiwa tersebut terhadap dunia saat ini. Anda adalah elite yang cukup hebat yang dapat dengan mudah menjawab pertanyaan tentang serangan 9/11 atau era Perang Dingin."
    },
    correctCount: {
      ko: "10 ~ 11개",
      en: "10 ~ 11",
      ja: "10 ~ 11個",
      'zh-CN': "10 ~ 11个",
      'zh-TW': "10 ~ 11個",
      vi: "10 ~ 11",
      id: "10 ~ 11"
    },
    historyLevel: {
      ko: "Lv. 90",
      en: "Lv. 90",
      ja: "Lv. 90",
      'zh-CN': "Lv. 90",
      'zh-TW': "Lv. 90",
      vi: "Lv. 90",
      id: "Lv. 90"
    },
    recommendation: {
      ko: "세계사 퀴즈 대회나 토론 모임 참여.",
      en: "Participate in world history quiz competitions or discussion groups.",
      ja: "世界史クイズ大会や討論会に参加する。",
      'zh-CN': "参加世界史智力竞赛或讨论会。",
      'zh-TW': "參加世界史智力競賽或討論會。",
      vi: "Tham gia các cuộc thi đố vui lịch sử thế giới hoặc nhóm thảo luận.",
      id: "Ikuti kompetisi kuis sejarah dunia atau kelompok diskusi."
    }
  },
  {
    type: "Type6",
    emoji: "🌍",
    title: {
      ko: "시대를 꿰뚫는 통찰력, 마스터 오브 히스토리",
      en: "Master of History with Penetrating Insight",
      ja: "時代を貫く洞察力、マスター・オブ・ヒストリー",
      'zh-CN': "穿透时代的洞察力，历史大师",
      'zh-TW': "穿透時代的洞察力，歷史大師",
      vi: "Bậc thầy Lịch sử với sự hiểu biết sâu sắc",
      id: "Master Sejarah dengan Wawasan Menembus"
    },
    shortDescription: {
      ko: "\"당신은 혹시 미래에서 왔나요?\"",
      en: "\"Did you come from the future, perhaps?\"",
      ja: "「あなた、もしかして未来から来たのですか？」",
      'zh-CN': "\"你，是不是从未来来的？\"",
      'zh-TW': "「你，是不是從未來來的？」",
      vi: "\"Bạn, có phải đến từ tương lai không?\"",
      id: "\"Apakah Anda datang dari masa depan?\""
    },
    description: {
      ko: "축하합니다! 만점입니다. 당신은 지난 200년간의 인류 역사를 완벽하게 꿰뚫고 있습니다. 사소한 함정 문제도 당신을 속일 수 없습니다. 이 정도 지식이라면 외교관이나 국제부 기자를 해도 손색이 없을 정도입니다.",
      en: "Congratulations! Perfect score. You have perfectly mastered the last 200 years of human history. Even minor trap questions can't fool you. With this level of knowledge, you would be more than qualified to be a diplomat or international affairs journalist.",
      ja: "おめでとうございます！満点です。あなたは過去200年間の人類の歴史を完璧に理解しています。些細な罠の問題もあなたを騙すことはできません。このレベルの知識があれば、外交官や国際部記者をしても遜色がないほどです。",
      'zh-CN': "恭喜！满分。你完美地掌握了过去200年的人类历史。即使是微小的陷阱问题也骗不了你。拥有这种知识水平，你完全有资格成为外交官或国际事务记者。",
      'zh-TW': "恭喜！滿分。你完美地掌握了過去200年的人類歷史。即使是微小的陷阱問題也騙不了你。擁有這種知識水平，你完全有資格成為外交官或國際事務記者。",
      vi: "Chúc mừng! Điểm tuyệt đối. Bạn đã nắm vững hoàn hảo 200 năm lịch sử nhân loại vừa qua. Ngay cả những câu hỏi bẫy nhỏ cũng không thể đánh lừa bạn. Với trình độ kiến thức này, bạn hoàn toàn đủ tư cách để trở thành nhà ngoại giao hoặc phóng viên quốc tế.",
      id: "Selamat! Skor sempurna. Anda telah menguasai dengan sempurna 200 tahun terakhir sejarah manusia. Bahkan pertanyaan jebakan kecil pun tidak bisa menipu Anda. Dengan tingkat pengetahuan ini, Anda akan lebih dari memenuhi syarat untuk menjadi diplomat atau jurnalis urusan internasional."
    },
    correctCount: {
      ko: "12개 (만점)",
      en: "12 (Perfect Score)",
      ja: "12個（満点）",
      'zh-CN': "12个（满分）",
      'zh-TW': "12個（滿分）",
      vi: "12 (Điểm tuyệt đối)",
      id: "12 (Skor Sempurna)"
    },
    historyLevel: {
      ko: "Lv. 99 (MAX)",
      en: "Lv. 99 (MAX)",
      ja: "Lv. 99 (MAX)",
      'zh-CN': "Lv. 99 (MAX)",
      'zh-TW': "Lv. 99 (MAX)",
      vi: "Lv. 99 (MAX)",
      id: "Lv. 99 (MAX)"
    },
    recommendation: {
      ko: "당신의 지식을 널리 알려주세요.",
      en: "Share your knowledge widely.",
      ja: "あなたの知識を広く伝えてください。",
      'zh-CN': "广泛分享你的知识。",
      'zh-TW': "廣泛分享你的知識。",
      vi: "Hãy chia sẻ kiến thức của bạn rộng rãi.",
      id: "Bagikan pengetahuan Anda secara luas."
    }
  }
];

export function calculatePhase2WorldHistoryQuizResult(answers: Record<number, number>, questions: Phase2WorldHistoryQuizQuestion[]): string {
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
  } else if (correctCount >= 7 && correctCount <= 9) {
    return "Type4";
  } else if (correctCount >= 10 && correctCount <= 11) {
    return "Type5";
  } else if (correctCount >= 12) {
    return "Type6";
  } else {
    // Fallback
    return "Type1";
  }
}

