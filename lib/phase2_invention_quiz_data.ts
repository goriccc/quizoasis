export interface Phase2InventionQuizQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
  }[];
  correctAnswer: number; // 0=A, 1=B, 2=C, 3=D
}

export interface Phase2InventionQuizResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  correctCount: Record<string, string>; // "0 ~ 2개"
  inventionLevel: Record<string, string>; // "Lv. 1"
  recommendation: Record<string, string>; // 추천 내용
}

export const phase2InventionQuizQuestions: Phase2InventionQuizQuestion[] = [
  {
    id: 1,
    question: {
      ko: "[난이도 하] \"천재는 1%의 영감과 99%의 땀으로 이루어진다.\" 전구, 축음기 등을 발명한 발명왕은?",
      en: "[Easy] \"Genius is 1% inspiration and 99% perspiration.\" Who is the inventor king who invented the light bulb, phonograph, etc.?",
      ja: "[難易度低] 「天才は1%のひらめきと99%の努力」電球、蓄音機などを発明した発明王は？",
      'zh-CN': "[难度低] \"天才是1%的灵感加99%的汗水。\"发明了电灯、留声机等的发明王是？",
      'zh-TW': "[難度低] 「天才是1%的靈感加99%的汗水。」發明了電燈、留聲機等的發明王是？",
      vi: "[Dễ] \"Thiên tài là 1% cảm hứng và 99% mồ hôi.\" Ai là vua phát minh đã phát minh ra bóng đèn, máy hát, v.v.?",
      id: "[Mudah] \"Jenius adalah 1% inspirasi dan 99% keringat.\" Siapa raja penemu yang menemukan bola lampu, fonograf, dll?"
    },
    options: [
      {
        text: {
          ko: "알베르트 아인슈타인",
          en: "Albert Einstein",
          ja: "アルベルト・アインシュタイン",
          'zh-CN': "阿尔伯特·爱因斯坦",
          'zh-TW': "阿爾伯特·愛因斯坦",
          vi: "Albert Einstein",
          id: "Albert Einstein"
        }
      },
      {
        text: {
          ko: "토머스 에디슨",
          en: "Thomas Edison",
          ja: "トーマス・エジソン",
          'zh-CN': "托马斯·爱迪生",
          'zh-TW': "湯瑪斯·愛迪生",
          vi: "Thomas Edison",
          id: "Thomas Edison"
        }
      },
      {
        text: {
          ko: "니콜라 테슬라",
          en: "Nikola Tesla",
          ja: "ニコラ・テスラ",
          'zh-CN': "尼古拉·特斯拉",
          'zh-TW': "尼古拉·特斯拉",
          vi: "Nikola Tesla",
          id: "Nikola Tesla"
        }
      },
      {
        text: {
          ko: "아이작 뉴턴",
          en: "Isaac Newton",
          ja: "アイザック・ニュートン",
          'zh-CN': "艾萨克·牛顿",
          'zh-TW': "艾薩克·牛頓",
          vi: "Isaac Newton",
          id: "Isaac Newton"
        }
      }
    ],
    correctAnswer: 1 // B (에디슨)
  },
  {
    id: 2,
    question: {
      ko: "[난이도 하] 인류 최초의 동력 비행기를 발명하여 하늘을 나는 꿈을 실현시킨 형제는?",
      en: "[Easy] Which brothers invented the world's first powered aircraft, realizing the dream of flying?",
      ja: "[難易度低] 人類初の動力飛行機を発明し、空を飛ぶ夢を実現させた兄弟は？",
      'zh-CN': "[难度低] 发明了人类第一架动力飞机，实现飞行梦想的兄弟是？",
      'zh-TW': "[難度低] 發明了人類第一架動力飛機，實現飛行夢想的兄弟是？",
      vi: "[Dễ] Những anh em nào đã phát minh ra máy bay có động cơ đầu tiên của nhân loại, thực hiện ước mơ bay?",
      id: "[Mudah] Saudara mana yang menemukan pesawat bertenaga pertama di dunia, mewujudkan mimpi terbang?"
    },
    options: [
      {
        text: {
          ko: "뤼미에르 형제",
          en: "Lumière Brothers",
          ja: "リュミエール兄弟",
          'zh-CN': "卢米埃尔兄弟",
          'zh-TW': "盧米埃兄弟",
          vi: "Anh em Lumière",
          id: "Saudara Lumière"
        }
      },
      {
        text: {
          ko: "그림 형제",
          en: "Grimm Brothers",
          ja: "グリム兄弟",
          'zh-CN': "格林兄弟",
          'zh-TW': "格林兄弟",
          vi: "Anh em Grimm",
          id: "Saudara Grimm"
        }
      },
      {
        text: {
          ko: "라이트 형제",
          en: "Wright Brothers",
          ja: "ライト兄弟",
          'zh-CN': "莱特兄弟",
          'zh-TW': "萊特兄弟",
          vi: "Anh em Wright",
          id: "Saudara Wright"
        }
      },
      {
        text: {
          ko: "몽골피에 형제",
          en: "Montgolfier Brothers",
          ja: "モンゴルフィエ兄弟",
          'zh-CN': "蒙哥尔费兄弟",
          'zh-TW': "蒙哥爾費兄弟",
          vi: "Anh em Montgolfier",
          id: "Saudara Montgolfier"
        }
      }
    ],
    correctAnswer: 2 // C (라이트 형제)
  },
  {
    id: 3,
    question: {
      ko: "[난이도 하] \"여보세요?\" 멀리 있는 사람과 목소리로 대화할 수 있는 전화기를 발명한 사람은?",
      en: "[Easy] Who invented the telephone that allows people to talk with their voices over long distances?",
      ja: "[難易度低] 「もしもし？」遠くにいる人と声で会話できる電話を発明した人は？",
      'zh-CN': "[难度低] \"喂？\"发明了可以与远方的人用声音对话的电话的人是？",
      'zh-TW': "[難度低] 「喂？」發明了可以與遠方的人用聲音對話的電話的人是？",
      vi: "[Dễ] Ai đã phát minh ra điện thoại cho phép mọi người nói chuyện bằng giọng nói ở khoảng cách xa?",
      id: "[Mudah] Siapa yang menemukan telepon yang memungkinkan orang berbicara dengan suara mereka dari jarak jauh?"
    },
    options: [
      {
        text: {
          ko: "알렉산더 그레이엄 벨",
          en: "Alexander Graham Bell",
          ja: "アレクサンダー・グラハム・ベル",
          'zh-CN': "亚历山大·格雷厄姆·贝尔",
          'zh-TW': "亞歷山大·格雷厄姆·貝爾",
          vi: "Alexander Graham Bell",
          id: "Alexander Graham Bell"
        }
      },
      {
        text: {
          ko: "사무엘 모스",
          en: "Samuel Morse",
          ja: "サミュエル・モース",
          'zh-CN': "塞缪尔·莫尔斯",
          'zh-TW': "塞繆爾·摩斯",
          vi: "Samuel Morse",
          id: "Samuel Morse"
        }
      },
      {
        text: {
          ko: "굴리엘모 마르코니",
          en: "Guglielmo Marconi",
          ja: "グリエルモ・マルコーニ",
          'zh-CN': "古列尔莫·马可尼",
          'zh-TW': "古列爾莫·馬可尼",
          vi: "Guglielmo Marconi",
          id: "Guglielmo Marconi"
        }
      },
      {
        text: {
          ko: "스티브 잡스",
          en: "Steve Jobs",
          ja: "スティーブ・ジョブズ",
          'zh-CN': "史蒂夫·乔布斯",
          'zh-TW': "史蒂夫·賈伯斯",
          vi: "Steve Jobs",
          id: "Steve Jobs"
        }
      }
    ],
    correctAnswer: 0 // A (벨)
  },
  {
    id: 4,
    question: {
      ko: "[난이도 중] 다이너마이트를 발명하여 거대한 부를 쌓았지만, 평화를 위해 노벨상을 제정한 인물은?",
      en: "[Medium] Who invented dynamite, amassed great wealth, but established the Nobel Prize for peace?",
      ja: "[難易度中] ダイナマイトを発明して巨額の富を築いたが、平和のためにノーベル賞を制定した人物は？",
      'zh-CN': "[难度中] 发明了炸药并积累了巨大财富，但为了和平而设立诺贝尔奖的人物是？",
      'zh-TW': "[難度中] 發明了炸藥並積累了巨大財富，但為了和平而設立諾貝爾獎的人物是？",
      vi: "[Trung bình] Ai đã phát minh ra thuốc nổ, tích lũy được khối tài sản lớn, nhưng thành lập giải Nobel vì hòa bình?",
      id: "[Sedang] Siapa yang menemukan dinamit, mengumpulkan kekayaan besar, tetapi mendirikan Hadiah Nobel untuk perdamaian?"
    },
    options: [
      {
        text: {
          ko: "알프레드 노벨",
          en: "Alfred Nobel",
          ja: "アルフレッド・ノーベル",
          'zh-CN': "阿尔弗雷德·诺贝尔",
          'zh-TW': "阿爾弗雷德·諾貝爾",
          vi: "Alfred Nobel",
          id: "Alfred Nobel"
        }
      },
      {
        text: {
          ko: "마리 퀴리",
          en: "Marie Curie",
          ja: "マリー・キュリー",
          'zh-CN': "玛丽·居里",
          'zh-TW': "瑪麗·居里",
          vi: "Marie Curie",
          id: "Marie Curie"
        }
      },
      {
        text: {
          ko: "루이 파스퇴르",
          en: "Louis Pasteur",
          ja: "ルイ・パスツール",
          'zh-CN': "路易·巴斯德",
          'zh-TW': "路易·巴斯德",
          vi: "Louis Pasteur",
          id: "Louis Pasteur"
        }
      },
      {
        text: {
          ko: "찰스 다윈",
          en: "Charles Darwin",
          ja: "チャールズ・ダーウィン",
          'zh-CN': "查尔斯·达尔文",
          'zh-TW': "查爾斯·達爾文",
          vi: "Charles Darwin",
          id: "Charles Darwin"
        }
      }
    ],
    correctAnswer: 0 // A (노벨)
  },
  {
    id: 5,
    question: {
      ko: "[난이도 중] 금속 활자를 발명하여 책의 대량 생산을 가능하게 하고, 지식의 보급에 기여한 인물은?",
      en: "[Medium] Who invented movable type, enabling mass production of books and contributing to the spread of knowledge?",
      ja: "[難易度中] 金属活字を発明し、本の大量生産を可能にし、知識の普及に貢献した人物は？",
      'zh-CN': "[难度中] 发明了金属活字，使书籍的大规模生产成为可能，并为知识传播做出贡献的人物是？",
      'zh-TW': "[難度中] 發明了金屬活字，使書籍的大規模生產成為可能，並為知識傳播做出貢獻的人物是？",
      vi: "[Trung bình] Ai đã phát minh ra chữ in kim loại, cho phép sản xuất hàng loạt sách và góp phần phổ biến kiến thức?",
      id: "[Sedang] Siapa yang menemukan huruf logam bergerak, memungkinkan produksi massal buku dan berkontribusi pada penyebaran pengetahuan?"
    },
    options: [
      {
        text: {
          ko: "레오나르도 다빈치",
          en: "Leonardo da Vinci",
          ja: "レオナルド・ダ・ヴィンチ",
          'zh-CN': "列奥纳多·达·芬奇",
          'zh-TW': "李奧納多·達文西",
          vi: "Leonardo da Vinci",
          id: "Leonardo da Vinci"
        }
      },
      {
        text: {
          ko: "요하네스 구텐베르크",
          en: "Johannes Gutenberg",
          ja: "ヨハネス・グーテンベルク",
          'zh-CN': "约翰内斯·古腾堡",
          'zh-TW': "約翰內斯·古騰堡",
          vi: "Johannes Gutenberg",
          id: "Johannes Gutenberg"
        }
      },
      {
        text: {
          ko: "마르틴 루터",
          en: "Martin Luther",
          ja: "マルティン・ルター",
          'zh-CN': "马丁·路德",
          'zh-TW': "馬丁·路德",
          vi: "Martin Luther",
          id: "Martin Luther"
        }
      },
      {
        text: {
          ko: "코페르니쿠스",
          en: "Nicolaus Copernicus",
          ja: "ニコラウス・コペルニクス",
          'zh-CN': "尼古拉·哥白尼",
          'zh-TW': "尼古拉·哥白尼",
          vi: "Nicolaus Copernicus",
          id: "Nicolaus Copernicus"
        }
      }
    ],
    correctAnswer: 1 // B (구텐베르크)
  },
  {
    id: 6,
    question: {
      ko: "[난이도 중] 증기 기관을 개량하여 산업 혁명의 핵심 동력을 제공한 인물은?",
      en: "[Medium] Who improved the steam engine, providing the key power for the Industrial Revolution?",
      ja: "[難易度中] 蒸気機関を改良し、産業革命の核心動力をもたらした人物は？",
      'zh-CN': "[难度中] 改良了蒸汽机，为工业革命提供核心动力的人物是？",
      'zh-TW': "[難度中] 改良了蒸汽機，為工業革命提供核心動力的人物是？",
      vi: "[Trung bình] Ai đã cải tiến động cơ hơi nước, cung cấp nguồn động lực chính cho Cách mạng Công nghiệp?",
      id: "[Sedang] Siapa yang meningkatkan mesin uap, menyediakan tenaga kunci untuk Revolusi Industri?"
    },
    options: [
      {
        text: {
          ko: "제임스 와트",
          en: "James Watt",
          ja: "ジェームズ・ワット",
          'zh-CN': "詹姆斯·瓦特",
          'zh-TW': "詹姆斯·瓦特",
          vi: "James Watt",
          id: "James Watt"
        }
      },
      {
        text: {
          ko: "조지 스티븐슨",
          en: "George Stephenson",
          ja: "ジョージ・スティーブンソン",
          'zh-CN': "乔治·斯蒂芬森",
          'zh-TW': "喬治·史蒂芬森",
          vi: "George Stephenson",
          id: "George Stephenson"
        }
      },
      {
        text: {
          ko: "로버트 풀턴",
          en: "Robert Fulton",
          ja: "ロバート・フルトン",
          'zh-CN': "罗伯特·富尔顿",
          'zh-TW': "羅伯特·富爾頓",
          vi: "Robert Fulton",
          id: "Robert Fulton"
        }
      },
      {
        text: {
          ko: "벤자민 프랭클린",
          en: "Benjamin Franklin",
          ja: "ベンジャミン・フランクリン",
          'zh-CN': "本杰明·富兰克林",
          'zh-TW': "班傑明·富蘭克林",
          vi: "Benjamin Franklin",
          id: "Benjamin Franklin"
        }
      }
    ],
    correctAnswer: 0 // A (제임스 와트)
  },
  {
    id: 7,
    question: {
      ko: "[난이도 중] 시각 장애인을 위한 점자(Braille)를 발명하여 맹인들의 세상을 밝혀준 인물은?",
      en: "[Medium] Who invented Braille for the visually impaired, illuminating the world for the blind?",
      ja: "[難易度中] 視覚障害者のための点字（ブライユ）を発明し、盲人の世界を明るくした人物は？",
      'zh-CN': "[难度中] 为视障人士发明了盲文(Braille)，为盲人世界带来光明的人物是？",
      'zh-TW': "[難度中] 為視障人士發明了盲文(Braille)，為盲人世界帶來光明的人物是？",
      vi: "[Trung bình] Ai đã phát minh ra chữ nổi Braille cho người khiếm thị, soi sáng thế giới cho người mù?",
      id: "[Sedang] Siapa yang menemukan Braille untuk tunanetra, menerangi dunia bagi orang buta?"
    },
    options: [
      {
        text: {
          ko: "헬렌 켈러",
          en: "Helen Keller",
          ja: "ヘレン・ケラー",
          'zh-CN': "海伦·凯勒",
          'zh-TW': "海倫·凱勒",
          vi: "Helen Keller",
          id: "Helen Keller"
        }
      },
      {
        text: {
          ko: "루이 브라이유",
          en: "Louis Braille",
          ja: "ルイ・ブライユ",
          'zh-CN': "路易·布莱叶",
          'zh-TW': "路易·布萊葉",
          vi: "Louis Braille",
          id: "Louis Braille"
        }
      },
      {
        text: {
          ko: "안네 프랑크",
          en: "Anne Frank",
          ja: "アンネ・フランク",
          'zh-CN': "安妮·弗兰克",
          'zh-TW': "安妮·法蘭克",
          vi: "Anne Frank",
          id: "Anne Frank"
        }
      },
      {
        text: {
          ko: "나이팅게일",
          en: "Florence Nightingale",
          ja: "フローレンス・ナイチンゲール",
          'zh-CN': "弗洛伦斯·南丁格尔",
          'zh-TW': "佛羅倫斯·南丁格爾",
          vi: "Florence Nightingale",
          id: "Florence Nightingale"
        }
      }
    ],
    correctAnswer: 1 // B (루이 브라이유)
  },
  {
    id: 8,
    question: {
      ko: "[난이도 상] \"유레카!\" 목욕탕에서 부력의 원리를 발견하고, 지렛대의 원리를 설명한 고대 그리스의 발명가는?",
      en: "[Hard] \"Eureka!\" Which ancient Greek inventor discovered the principle of buoyancy in a bathtub and explained the principle of the lever?",
      ja: "[難易度高] 「エウレカ！」お風呂で浮力の原理を発見し、てこの原理を説明した古代ギリシャの発明家は？",
      'zh-CN': "[难度高] \"尤里卡！\"在浴缸中发现浮力原理并解释杠杆原理的古希腊发明家是？",
      'zh-TW': "[難度高] 「尤里卡！」在浴缸中發現浮力原理並解釋槓桿原理的古希臘發明家是？",
      vi: "[Khó] \"Eureka!\" Nhà phát minh Hy Lạp cổ đại nào đã phát hiện ra nguyên lý lực đẩy trong bồn tắm và giải thích nguyên lý đòn bẩy?",
      id: "[Sulit] \"Eureka!\" Penemu Yunani kuno mana yang menemukan prinsip daya apung di bak mandi dan menjelaskan prinsip tuas?"
    },
    options: [
      {
        text: {
          ko: "피타고라스",
          en: "Pythagoras",
          ja: "ピタゴラス",
          'zh-CN': "毕达哥拉斯",
          'zh-TW': "畢達哥拉斯",
          vi: "Pythagoras",
          id: "Pythagoras"
        }
      },
      {
        text: {
          ko: "아르키메데스",
          en: "Archimedes",
          ja: "アルキメデス",
          'zh-CN': "阿基米德",
          'zh-TW': "阿基米德",
          vi: "Archimedes",
          id: "Archimedes"
        }
      },
      {
        text: {
          ko: "유클리드",
          en: "Euclid",
          ja: "ユークリッド",
          'zh-CN': "欧几里得",
          'zh-TW': "歐幾里得",
          vi: "Euclid",
          id: "Euclid"
        }
      },
      {
        text: {
          ko: "히포크라테스",
          en: "Hippocrates",
          ja: "ヒポクラテス",
          'zh-CN': "希波克拉底",
          'zh-TW': "希波克拉底",
          vi: "Hippocrates",
          id: "Hippocrates"
        }
      }
    ],
    correctAnswer: 1 // B (아르키메데스)
  },
  {
    id: 9,
    question: {
      ko: "[난이도 상] 페니실린(항생제)을 우연히 발견하여 수많은 생명을 감염병으로부터 구한 인물은?",
      en: "[Hard] Who accidentally discovered penicillin (antibiotic), saving countless lives from infectious diseases?",
      ja: "[難易度高] ペニシリン（抗生物質）を偶然発見し、無数の命を感染症から救った人物は？",
      'zh-CN': "[难度高] 偶然发现了青霉素(抗生素)，从传染病中拯救了无数生命的人物是？",
      'zh-TW': "[難度高] 偶然發現了青黴素(抗生素)，從傳染病中拯救了無數生命的人物是？",
      vi: "[Khó] Ai đã tình cờ phát hiện ra penicillin (kháng sinh), cứu sống vô số sinh mạng khỏi các bệnh truyền nhiễm?",
      id: "[Sulit] Siapa yang secara tidak sengaja menemukan penisilin (antibiotik), menyelamatkan banyak nyawa dari penyakit menular?"
    },
    options: [
      {
        text: {
          ko: "알렉산더 플레밍",
          en: "Alexander Fleming",
          ja: "アレクサンダー・フレミング",
          'zh-CN': "亚历山大·弗莱明",
          'zh-TW': "亞歷山大·弗萊明",
          vi: "Alexander Fleming",
          id: "Alexander Fleming"
        }
      },
      {
        text: {
          ko: "로베르트 코흐",
          en: "Robert Koch",
          ja: "ロベルト・コッホ",
          'zh-CN': "罗伯特·科赫",
          'zh-TW': "羅伯特·科赫",
          vi: "Robert Koch",
          id: "Robert Koch"
        }
      },
      {
        text: {
          ko: "에드워드 제너",
          en: "Edward Jenner",
          ja: "エドワード・ジェンナー",
          'zh-CN': "爱德华·詹纳",
          'zh-TW': "愛德華·詹納",
          vi: "Edward Jenner",
          id: "Edward Jenner"
        }
      },
      {
        text: {
          ko: "조셉 리스터",
          en: "Joseph Lister",
          ja: "ジョセフ・リスター",
          'zh-CN': "约瑟夫·利斯特",
          'zh-TW': "約瑟夫·利斯特",
          vi: "Joseph Lister",
          id: "Joseph Lister"
        }
      }
    ],
    correctAnswer: 0 // A (플레밍)
  },
  {
    id: 10,
    question: {
      ko: "[난이도 상] 무선 통신(라디오)을 발명하여 전파를 이용한 통신 시대를 연 이탈리아의 발명가는?",
      en: "[Hard] Which Italian inventor invented wireless communication (radio), ushering in the era of communication using radio waves?",
      ja: "[難易度高] 無線通信（ラジオ）を発明し、電波を利用した通信時代を開いたイタリアの発明家は？",
      'zh-CN': "[难度高] 发明了无线通信(无线电)，开启了使用电波进行通信时代的意大利发明家是？",
      'zh-TW': "[難度高] 發明了無線通信(無線電)，開啟了使用電波進行通信時代的義大利發明家是？",
      vi: "[Khó] Nhà phát minh người Ý nào đã phát minh ra thông tin vô tuyến (radio), mở ra kỷ nguyên thông tin sử dụng sóng vô tuyến?",
      id: "[Sulit] Penemu Italia mana yang menemukan komunikasi nirkabel (radio), membuka era komunikasi menggunakan gelombang radio?"
    },
    options: [
      {
        text: {
          ko: "하인리히 헤르츠",
          en: "Heinrich Hertz",
          ja: "ハインリヒ・ヘルツ",
          'zh-CN': "海因里希·赫兹",
          'zh-TW': "海因里希·赫茲",
          vi: "Heinrich Hertz",
          id: "Heinrich Hertz"
        }
      },
      {
        text: {
          ko: "굴리엘모 마르코니",
          en: "Guglielmo Marconi",
          ja: "グリエルモ・マルコーニ",
          'zh-CN': "古列尔莫·马可尼",
          'zh-TW': "古列爾莫·馬可尼",
          vi: "Guglielmo Marconi",
          id: "Guglielmo Marconi"
        }
      },
      {
        text: {
          ko: "마이클 패러데이",
          en: "Michael Faraday",
          ja: "マイケル・ファラデー",
          'zh-CN': "迈克尔·法拉第",
          'zh-TW': "麥可·法拉第",
          vi: "Michael Faraday",
          id: "Michael Faraday"
        }
      },
      {
        text: {
          ko: "토머스 에디슨",
          en: "Thomas Edison",
          ja: "トーマス・エジソン",
          'zh-CN': "托马斯·爱迪生",
          'zh-TW': "湯瑪斯·愛迪生",
          vi: "Thomas Edison",
          id: "Thomas Edison"
        }
      }
    ],
    correctAnswer: 1 // B (마르코니)
  },
  {
    id: 11,
    question: {
      ko: "[난이도 최상] 교류(AC) 전기 시스템을 고안하여 에디슨과 경쟁했으며, '시대를 앞서간 천재'로 불리는 인물은?",
      en: "[Very Hard] Who designed the AC (alternating current) electrical system, competed with Edison, and is called a 'genius ahead of his time'?",
      ja: "[難易度最高] 交流（AC）電気システムを考案し、エジソンと競争し、「時代を先取りした天才」と呼ばれる人物は？",
      'zh-CN': "[难度最高] 设计了交流(AC)电力系统，与爱迪生竞争，被称为'超越时代的天才'的人物是？",
      'zh-TW': "[難度最高] 設計了交流(AC)電力系統，與愛迪生競爭，被稱為「超越時代的天才」的人物是？",
      vi: "[Rất khó] Ai đã thiết kế hệ thống điện AC (dòng điện xoay chiều), cạnh tranh với Edison, và được gọi là 'thiên tài đi trước thời đại'?",
      id: "[Sangat Sulit] Siapa yang merancang sistem listrik AC (arus bolak-balik), bersaing dengan Edison, dan disebut 'jenius yang melampaui zamannya'?"
    },
    options: [
      {
        text: {
          ko: "니콜라 테슬라",
          en: "Nikola Tesla",
          ja: "ニコラ・テスラ",
          'zh-CN': "尼古拉·特斯拉",
          'zh-TW': "尼古拉·特斯拉",
          vi: "Nikola Tesla",
          id: "Nikola Tesla"
        }
      },
      {
        text: {
          ko: "조지 웨스팅하우스",
          en: "George Westinghouse",
          ja: "ジョージ・ウェスティングハウス",
          'zh-CN': "乔治·威斯汀豪斯",
          'zh-TW': "喬治·西屋",
          vi: "George Westinghouse",
          id: "George Westinghouse"
        }
      },
      {
        text: {
          ko: "일론 머스크",
          en: "Elon Musk",
          ja: "イーロン・マスク",
          'zh-CN': "埃隆·马斯克",
          'zh-TW': "伊隆·馬斯克",
          vi: "Elon Musk",
          id: "Elon Musk"
        }
      },
      {
        text: {
          ko: "제임스 맥스웰",
          en: "James Clerk Maxwell",
          ja: "ジェームズ・クラーク・マクスウェル",
          'zh-CN': "詹姆斯·克拉克·麦克斯韦",
          'zh-TW': "詹姆斯·克拉克·馬克士威",
          vi: "James Clerk Maxwell",
          id: "James Clerk Maxwell"
        }
      }
    ],
    correctAnswer: 0 // A (테슬라)
  },
  {
    id: 12,
    question: {
      ko: "[난이도 최상] 월드 와이드 웹(WWW)을 창시하여 오늘날 우리가 사용하는 인터넷 세상을 만든 인물은?",
      en: "[Very Hard] Who created the World Wide Web (WWW), building the internet world we use today?",
      ja: "[難易度最高] ワールド・ワイド・ウェブ（WWW）を創始し、今日私たちが使用するインターネット世界を作った人物は？",
      'zh-CN': "[难度最高] 创建了万维网(WWW)，构建了我们今天使用的互联网世界的人物是？",
      'zh-TW': "[難度最高] 創建了全球資訊網(WWW)，構建了我們今天使用的網際網路世界的人物是？",
      vi: "[Rất khó] Ai đã tạo ra World Wide Web (WWW), xây dựng thế giới internet mà chúng ta sử dụng ngày nay?",
      id: "[Sangat Sulit] Siapa yang menciptakan World Wide Web (WWW), membangun dunia internet yang kita gunakan hari ini?"
    },
    options: [
      {
        text: {
          ko: "빌 게이츠",
          en: "Bill Gates",
          ja: "ビル・ゲイツ",
          'zh-CN': "比尔·盖茨",
          'zh-TW': "比爾·蓋茲",
          vi: "Bill Gates",
          id: "Bill Gates"
        }
      },
      {
        text: {
          ko: "팀 버너스 리",
          en: "Tim Berners-Lee",
          ja: "ティム・バーナーズ＝リー",
          'zh-CN': "蒂姆·伯纳斯-李",
          'zh-TW': "提姆·柏納茲-李",
          vi: "Tim Berners-Lee",
          id: "Tim Berners-Lee"
        }
      },
      {
        text: {
          ko: "마크 저커버그",
          en: "Mark Zuckerberg",
          ja: "マーク・ザッカーバーグ",
          'zh-CN': "马克·扎克伯格",
          'zh-TW': "馬克·祖克柏",
          vi: "Mark Zuckerberg",
          id: "Mark Zuckerberg"
        }
      },
      {
        text: {
          ko: "스티브 워즈니악",
          en: "Steve Wozniak",
          ja: "スティーブ・ウォズニアック",
          'zh-CN': "史蒂夫·沃兹尼亚克",
          'zh-TW': "史蒂夫·沃茲尼克",
          vi: "Steve Wozniak",
          id: "Steve Wozniak"
        }
      }
    ],
    correctAnswer: 1 // B (팀 버너스 리)
  }
];

export const phase2InventionQuizResults: Phase2InventionQuizResult[] = [
  {
    type: "Type1",
    emoji: "📱",
    title: {
      ko: "문명의 혜택을 누리는, 현대인",
      en: "Modern Person Enjoying the Benefits of Civilization",
      ja: "文明の恩恵を受ける現代人",
      'zh-CN': "享受文明好处的现代人",
      'zh-TW': "享受文明好處的現代人",
      vi: "Người hiện đại tận hưởng lợi ích của nền văn minh",
      id: "Orang Modern yang Menikmati Manfaat Peradaban"
    },
    shortDescription: {
      ko: "\"편하면 됐지, 누가 만든 게 중요해?\"",
      en: "\"As long as it's convenient, who cares who made it?\"",
      ja: "「便利ならいいじゃん、誰が作ったかなんて重要？\"",
      'zh-CN': "\"方便就行，谁做的有什么关系？\"",
      'zh-TW': "「方便就行，誰做的有什麼關係？\"",
      vi: "\"Tiện lợi là được, ai làm có quan trọng gì?\"",
      id: "\"Selama nyaman, siapa peduli siapa yang membuatnya?\""
    },
    description: {
      ko: "당신은 발명품의 역사보다는 현재의 편리함에 만족하는 타입입니다. 에디슨이나 라이트 형제 정도는 알지만, 그 외의 발명가들은 생소하게 느껴집니다. 하지만 괜찮습니다. 스마트폰 사용법만 잘 알면 사는 데 아무 지장 없으니까요!",
      en: "You are the type who is satisfied with current convenience rather than the history of inventions. You know about Edison or the Wright brothers, but other inventors feel unfamiliar. But that's okay. As long as you know how to use a smartphone well, there's no problem in life!",
      ja: "あなたは発明品の歴史よりも現在の便利さに満足するタイプです。エジソンやライト兄弟くらいは知っていますが、その他の発明家は馴染みがありません。でも大丈夫です。スマートフォンの使い方さえ分かれば、生活に何の支障もありません！",
      'zh-CN': "你是满足于当前便利而非发明历史的类型。你知道爱迪生或莱特兄弟，但其他发明家对你来说很陌生。但没关系。只要你会用智能手机，生活就没什么问题！",
      'zh-TW': "你是滿足於當前便利而非發明歷史的類型。你知道愛迪生或萊特兄弟，但其他發明家對你來說很陌生。但沒關係。只要你會用手機，生活就沒什麼問題！",
      vi: "Bạn là kiểu người hài lòng với sự tiện lợi hiện tại hơn là lịch sử của các phát minh. Bạn biết về Edison hoặc anh em nhà Wright, nhưng các nhà phát minh khác cảm thấy xa lạ. Nhưng không sao. Chỉ cần biết cách sử dụng điện thoại thông minh tốt, cuộc sống không có vấn đề gì!",
      id: "Anda adalah tipe yang puas dengan kenyamanan saat ini daripada sejarah penemuan. Anda tahu tentang Edison atau Wright bersaudara, tetapi penemu lain terasa asing. Tapi tidak apa-apa. Selama Anda tahu cara menggunakan smartphone dengan baik, tidak ada masalah dalam hidup!"
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
    inventionLevel: {
      ko: "Lv. 1",
      en: "Lv. 1",
      ja: "Lv. 1",
      'zh-CN': "Lv. 1",
      'zh-TW': "Lv. 1",
      vi: "Lv. 1",
      id: "Lv. 1"
    },
    recommendation: {
      ko: "위인전 만화 읽어보기.",
      en: "Read biographies in comic form.",
      ja: "偉人伝の漫画を読んでみる。",
      'zh-CN': "阅读伟人传记漫画。",
      'zh-TW': "閱讀偉人傳記漫畫。",
      vi: "Đọc truyện tranh về tiểu sử các vĩ nhân.",
      id: "Baca biografi dalam bentuk komik."
    }
  },
  {
    type: "Type2",
    emoji: "🌱",
    title: {
      ko: "호기심 새싹, 발명 꿈나무",
      en: "Curious Sprout, Invention Dreamer",
      ja: "好奇心の新芽、発明の夢の木",
      'zh-CN': "好奇心萌芽，发明梦想家",
      'zh-TW': "好奇心萌芽，發明夢想家",
      vi: "Mầm non tò mò, người mơ ước phát minh",
      id: "Tunas Penasaran, Pemimpi Penemuan"
    },
    shortDescription: {
      ko: "\"어? 이 이름 어디서 들어봤는데?\"",
      en: "\"Huh? Where have I heard this name?\"",
      ja: "「あれ？この名前どこかで聞いたことあるような...\"",
      'zh-CN': "\"咦？这个名字在哪里听过？\"",
      'zh-TW': "「咦？這個名字在哪裡聽過？\"",
      vi: "\"Hả? Tên này tôi đã nghe ở đâu rồi nhỉ?\"",
      id: "\"Hah? Di mana saya pernah mendengar nama ini?\""
    },
    description: {
      ko: "당신은 발명에 대한 기본적인 호기심을 가지고 있습니다. 전화기나 다이너마이트 같은 유명한 발명품의 주인은 알고 있지만, 구체적인 업적이나 덜 알려진 발명가는 헷갈려 합니다. 조금만 더 관심을 가지면 상식왕이 될 수 있습니다.",
      en: "You have a basic curiosity about inventions. You know the inventors of famous inventions like the telephone or dynamite, but you get confused about specific achievements or lesser-known inventors. With a little more interest, you could become a knowledge king.",
      ja: "あなたは発明に対する基本的な好奇心を持っています。電話やダイナマイトのような有名な発明品の主は知っていますが、具体的な業績やあまり知られていない発明家は混乱します。もう少し興味を持てば、常識王になれます。",
      'zh-CN': "你对发明有基本的好奇心。你知道电话或炸药等著名发明的发明者，但对具体成就或不太知名的发明家感到困惑。再多一点兴趣，你就能成为常识王。",
      'zh-TW': "你對發明有基本的好奇心。你知道電話或炸藥等著名發明的發明者，但對具體成就或不太知名的發明家感到困惑。再多一點興趣，你就能成為常識王。",
      vi: "Bạn có sự tò mò cơ bản về các phát minh. Bạn biết các nhà phát minh của những phát minh nổi tiếng như điện thoại hoặc thuốc nổ, nhưng bạn bối rối về những thành tựu cụ thể hoặc các nhà phát minh ít được biết đến. Với một chút quan tâm hơn, bạn có thể trở thành vua kiến thức.",
      id: "Anda memiliki rasa ingin tahu dasar tentang penemuan. Anda tahu penemu penemuan terkenal seperti telepon atau dinamit, tetapi Anda bingung tentang pencapaian spesifik atau penemu yang kurang dikenal. Dengan sedikit lebih banyak minat, Anda bisa menjadi raja pengetahuan."
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
    inventionLevel: {
      ko: "Lv. 10",
      en: "Lv. 10",
      ja: "Lv. 10",
      'zh-CN': "Lv. 10",
      'zh-TW': "Lv. 10",
      vi: "Lv. 10",
      id: "Lv. 10"
    },
    recommendation: {
      ko: "과학 다큐멘터리 시청하기.",
      en: "Watch science documentaries.",
      ja: "科学ドキュメンタリーを視聴する。",
      'zh-CN': "观看科学纪录片。",
      'zh-TW': "觀看科學紀錄片。",
      vi: "Xem phim tài liệu khoa học.",
      id: "Tonton dokumenter sains."
    }
  },
  {
    type: "Type3",
    emoji: "💡",
    title: {
      ko: "상식 튼튼, 교양 있는 시민",
      en: "Solid Common Sense, Cultured Citizen",
      ja: "常識しっかり、教養ある市民",
      'zh-CN': "常识扎实，有教养的市民",
      'zh-TW': "常識紮實，有教養的市民",
      vi: "Kiến thức vững chắc, công dân có học thức",
      id: "Pengetahuan Umum Kuat, Warga Berbudaya"
    },
    shortDescription: {
      ko: "\"기본적인 건 다 꿰뚫고 있죠!\"",
      en: "\"I've got all the basics covered!\"",
      ja: "「基本的なことは全部理解してるよ！\"",
      'zh-CN': "\"基础知识我都掌握了！\"",
      'zh-TW': "「基礎知識我都掌握了！\"",
      vi: "\"Tôi đã nắm vững tất cả những điều cơ bản!\"",
      id: "\"Saya sudah menguasai semua dasar!\""
    },
    description: {
      ko: "당신은 학교에서 배운 내용을 잘 기억하고 있는 모범생 타입입니다. 구텐베르크의 금속 활자나 제임스 와트의 증기 기관 같은 역사적인 발명품들을 정확히 알고 있습니다. 어디 가서 상식 부족하다는 소리는 듣지 않을 수준입니다.",
      en: "You are the type of model student who remembers well what you learned in school. You accurately know about historical inventions like Gutenberg's movable type or James Watt's steam engine. You won't hear that you lack common sense anywhere.",
      ja: "あなたは学校で学んだ内容をよく覚えている模範生タイプです。グーテンベルクの金属活字やジェームズ・ワットの蒸気機関のような歴史的な発明品を正確に知っています。どこに行っても常識不足だと言われることはないレベルです。",
      'zh-CN': "你是模范学生类型，能很好地记住在学校学到的内容。你准确地知道像古腾堡的活字或詹姆斯·瓦特的蒸汽机这样的历史发明。你不会在任何地方听到说你缺乏常识。",
      'zh-TW': "你是模範學生類型，能很好地記住在學校學到的內容。你準確地知道像古騰堡的活字或詹姆斯·瓦特的蒸汽機這樣的歷史發明。你不會在任何地方聽到說你缺乏常識。",
      vi: "Bạn là kiểu học sinh gương mẫu nhớ rõ những gì đã học ở trường. Bạn biết chính xác về các phát minh lịch sử như chữ in kim loại của Gutenberg hay động cơ hơi nước của James Watt. Bạn sẽ không nghe thấy ai nói rằng bạn thiếu kiến thức thông thường ở bất cứ đâu.",
      id: "Anda adalah tipe siswa teladan yang mengingat dengan baik apa yang dipelajari di sekolah. Anda tahu dengan akurat tentang penemuan bersejarah seperti huruf logam bergerak Gutenberg atau mesin uap James Watt. Anda tidak akan mendengar bahwa Anda kurang pengetahuan umum di mana pun."
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
    inventionLevel: {
      ko: "Lv. 40",
      en: "Lv. 40",
      ja: "Lv. 40",
      'zh-CN': "Lv. 40",
      'zh-TW': "Lv. 40",
      vi: "Lv. 40",
      id: "Lv. 40"
    },
    recommendation: {
      ko: "발명 박물관 관람하기.",
      en: "Visit an invention museum.",
      ja: "発明博物館を観覧する。",
      'zh-CN': "参观发明博物馆。",
      'zh-TW': "參觀發明博物館。",
      vi: "Tham quan bảo tàng phát minh.",
      id: "Kunjungi museum penemuan."
    }
  },
  {
    type: "Type4",
    emoji: "🔬",
    title: {
      ko: "숨겨진 연결고리, 과학 영재",
      en: "Hidden Connection, Science Prodigy",
      ja: "隠されたつながり、科学の英才",
      'zh-CN': "隐藏的联系，科学天才",
      'zh-TW': "隱藏的聯繫，科學天才",
      vi: "Liên kết ẩn, thần đồng khoa học",
      id: "Koneksi Tersembunyi, Jenius Sains"
    },
    shortDescription: {
      ko: "\"원리와 역사까지 이해하고 있네요!\"",
      en: "\"You even understand the principles and history!\"",
      ja: "「原理と歴史まで理解してるね！\"",
      'zh-CN': "\"你甚至理解了原理和历史！\"",
      'zh-TW': "「你甚至理解了原理和歷史！\"",
      vi: "\"Bạn thậm chí còn hiểu cả nguyên lý và lịch sử!\"",
      id: "\"Anda bahkan memahami prinsip dan sejarahnya!\""
    },
    description: {
      ko: "당신은 단순히 발명가 이름을 외우는 것을 넘어, 그 발명이 가져온 변화까지 이해하고 있습니다. 점자를 만든 루이 브라이유나 페니실린을 발견한 플레밍 같은 인물들도 척척 맞히는 당신은 상당한 지식인입니다.",
      en: "You go beyond simply memorizing inventor names and understand the changes their inventions brought. You can easily identify figures like Louis Braille who created Braille or Fleming who discovered penicillin. You are quite a knowledgeable person.",
      ja: "あなたは単に発明家の名前を暗記することを超えて、その発明がもたらした変化まで理解しています。点字を作ったルイ・ブライユやペニシリンを発見したフレミングのような人物もすらすら当てるあなたは、かなりの知識人です。",
      'zh-CN': "你超越了仅仅记住发明家名字，还理解他们的发明带来的变化。你能轻松识别像创造盲文的路易·布莱叶或发现青霉素的弗莱明这样的人物。你是一个相当有知识的人。",
      'zh-TW': "你超越了僅僅記住發明家名字，還理解他們的發明帶來的變化。你能輕鬆識別像創造盲文的路易·布萊葉或發現青黴素的弗萊明這樣的人物。你是一個相當有知識的人。",
      vi: "Bạn vượt xa việc chỉ ghi nhớ tên các nhà phát minh và hiểu được những thay đổi mà phát minh của họ mang lại. Bạn có thể dễ dàng xác định các nhân vật như Louis Braille, người tạo ra chữ nổi, hoặc Fleming, người phát hiện ra penicillin. Bạn là một người khá hiểu biết.",
      id: "Anda melampaui sekadar menghafal nama penemu dan memahami perubahan yang dibawa oleh penemuan mereka. Anda dapat dengan mudah mengidentifikasi tokoh-tokoh seperti Louis Braille yang menciptakan Braille atau Fleming yang menemukan penisilin. Anda adalah orang yang cukup berpengetahuan."
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
    inventionLevel: {
      ko: "Lv. 70",
      en: "Lv. 70",
      ja: "Lv. 70",
      'zh-CN': "Lv. 70",
      'zh-TW': "Lv. 70",
      vi: "Lv. 70",
      id: "Lv. 70"
    },
    recommendation: {
      ko: "아이디어 노트 써보기.",
      en: "Try writing an ideas notebook.",
      ja: "アイデアノートを書いてみる。",
      'zh-CN': "尝试写想法笔记。",
      'zh-TW': "嘗試寫想法筆記。",
      vi: "Thử viết sổ tay ý tưởng.",
      id: "Coba tulis buku catatan ide."
    }
  },
  {
    type: "Type5",
    emoji: "🚀",
    title: {
      ko: "시대를 앞서가는, 혁신가 (Innovator)",
      en: "Ahead of the Times, Innovator",
      ja: "時代を先取りする、イノベーター",
      'zh-CN': "走在时代前列，创新者",
      'zh-TW': "走在時代前列，創新者",
      vi: "Đi trước thời đại, Nhà đổi mới",
      id: "Mendahului Zaman, Inovator"
    },
    shortDescription: {
      ko: "\"테슬라와 에디슨의 관계까지 알다니!\"",
      en: "\"You even know about the relationship between Tesla and Edison!\"",
      ja: "「テスラとエジソンの関係まで知ってるの！\"",
      'zh-CN': "\"你甚至知道特斯拉和爱迪生的关系！\"",
      'zh-TW': "「你甚至知道特斯拉和愛迪生的關係！\"",
      vi: "\"Bạn thậm chí còn biết về mối quan hệ giữa Tesla và Edison!\"",
      id: "\"Anda bahkan tahu tentang hubungan antara Tesla dan Edison!\""
    },
    description: {
      ko: "당신은 과학과 역사에 대한 깊은 조예가 있습니다. 니콜라 테슬라나 마르코니 같은 다소 까다로운 문제들도 가볍게 통과했습니다. 발명가들의 열정과 도전 정신을 존경하며, 당신 또한 새로운 것을 창조할 잠재력을 가지고 있습니다.",
      en: "You have deep knowledge of science and history. You easily passed even somewhat tricky questions like Nikola Tesla or Marconi. You admire the passion and spirit of challenge of inventors, and you also have the potential to create something new.",
      ja: "あなたは科学と歴史に対する深い造詣があります。ニコラ・テスラやマルコーニのようなやや難しい問題も軽々と通過しました。発明家たちの情熱と挑戦精神を尊敬し、あなたも新しいものを創造する可能性を持っています。",
      'zh-CN': "你对科学和历史有深厚的造诣。你轻松通过了像尼古拉·特斯拉或马可尼这样有些棘手的问题。你钦佩发明家的热情和挑战精神，你也有创造新事物的潜力。",
      'zh-TW': "你對科學和歷史有深厚的造詣。你輕鬆通過了像尼古拉·特斯拉或馬可尼這樣有些棘手的問題。你欽佩發明家的熱情和挑戰精神，你也有創造新事物的潛力。",
      vi: "Bạn có kiến thức sâu sắc về khoa học và lịch sử. Bạn dễ dàng vượt qua cả những câu hỏi hơi khó như Nikola Tesla hay Marconi. Bạn ngưỡng mộ niềm đam mê và tinh thần thách thức của các nhà phát minh, và bạn cũng có tiềm năng tạo ra điều gì đó mới.",
      id: "Anda memiliki pengetahuan mendalam tentang sains dan sejarah. Anda dengan mudah melewati bahkan pertanyaan yang agak rumit seperti Nikola Tesla atau Marconi. Anda mengagumi semangat dan jiwa tantangan para penemu, dan Anda juga memiliki potensi untuk menciptakan sesuatu yang baru."
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
    inventionLevel: {
      ko: "Lv. 90",
      en: "Lv. 90",
      ja: "Lv. 90",
      'zh-CN': "Lv. 90",
      'zh-TW': "Lv. 90",
      vi: "Lv. 90",
      id: "Lv. 90"
    },
    recommendation: {
      ko: "발명 대회나 해커톤 참여하기.",
      en: "Participate in invention competitions or hackathons.",
      ja: "発明大会やハッカソンに参加する。",
      'zh-CN': "参加发明竞赛或黑客马拉松。",
      'zh-TW': "參加發明競賽或黑客馬拉松。",
      vi: "Tham gia các cuộc thi phát minh hoặc hackathon.",
      id: "Ikuti kompetisi penemuan atau hackathon."
    }
  },
  {
    type: "Type6",
    emoji: "👑",
    title: {
      ko: "21세기 다빈치, 마스터 오브 인벤션",
      en: "21st Century Da Vinci, Master of Invention",
      ja: "21世紀のダ・ヴィンチ、発明のマスター",
      'zh-CN': "21世纪的达芬奇，发明大师",
      'zh-TW': "21世紀的達文西，發明大師",
      vi: "Da Vinci thế kỷ 21, Bậc thầy phát minh",
      id: "Da Vinci Abad 21, Master Penemuan"
    },
    shortDescription: {
      ko: "\"당신의 뇌 구조가 궁금합니다.\"",
      en: "\"I'm curious about your brain structure.\"",
      ja: "「あなたの脳構造が気になります。\"",
      'zh-CN': "\"我对你的大脑结构很好奇。\"",
      'zh-TW': "「我對你的大腦結構很好奇。\"",
      vi: "\"Tôi tò mò về cấu trúc não của bạn.\"",
      id: "\"Saya penasaran dengan struktur otak Anda.\""
    },
    description: {
      ko: "축하합니다! 만점입니다. 당신은 고대 아르키메데스부터 현대의 팀 버너스 리까지, 인류 발명사를 완벽하게 마스터했습니다. 사소한 힌트만 줘도 어떤 발명품인지 맞힐 수 있는 당신은 걸어 다니는 백과사전입니다.",
      en: "Congratulations! Perfect score. You have perfectly mastered the history of human inventions from ancient Archimedes to modern Tim Berners-Lee. You can identify any invention with just a small hint - you are a walking encyclopedia.",
      ja: "おめでとうございます！満点です。あなたは古代のアルキメデスから現代のティム・バーナーズ＝リーまで、人類の発明史を完璧にマスターしています。小さなヒントだけでどんな発明品か当てられるあなたは、歩く百科事典です。",
      'zh-CN': "恭喜！满分。你完美掌握了从古代阿基米德到现代蒂姆·伯纳斯-李的人类发明史。只需一个小提示就能识别任何发明的你，就是一部行走的百科全书。",
      'zh-TW': "恭喜！滿分。你完美掌握了從古代阿基米德到現代提姆·柏納茲-李的人類發明史。只需一個小提示就能識別任何發明的你，就是一部行走的百科全書。",
      vi: "Chúc mừng! Điểm tuyệt đối. Bạn đã nắm vững hoàn hảo lịch sử phát minh của nhân loại từ Archimedes cổ đại đến Tim Berners-Lee hiện đại. Bạn có thể xác định bất kỳ phát minh nào chỉ với một gợi ý nhỏ - bạn là một bách khoa toàn thư biết đi.",
      id: "Selamat! Nilai sempurna. Anda telah menguasai dengan sempurna sejarah penemuan umat manusia dari Archimedes kuno hingga Tim Berners-Lee modern. Anda dapat mengidentifikasi penemuan apa pun hanya dengan petunjuk kecil - Anda adalah ensiklopedia berjalan."
    },
    correctCount: {
      ko: "12개 (만점)",
      en: "12 (Perfect)",
      ja: "12個（満点）",
      'zh-CN': "12个（满分）",
      'zh-TW': "12個（滿分）",
      vi: "12 (Hoàn hảo)",
      id: "12 (Sempurna)"
    },
    inventionLevel: {
      ko: "Lv. 99 (MAX)",
      en: "Lv. 99 (MAX)",
      ja: "Lv. 99 (MAX)",
      'zh-CN': "Lv. 99 (MAX)",
      'zh-TW': "Lv. 99 (MAX)",
      vi: "Lv. 99 (MAX)",
      id: "Lv. 99 (MAX)"
    },
    recommendation: {
      ko: "제2의 에디슨이 되어주세요.",
      en: "Become the second Edison.",
      ja: "第二のエジソンになってください。",
      'zh-CN': "成为第二个爱迪生。",
      'zh-TW': "成為第二個愛迪生。",
      vi: "Hãy trở thành Edison thứ hai.",
      id: "Jadilah Edison kedua."
    }
  }
];

export function calculatePhase2InventionQuizResult(answers: Record<number, number>, questions: Phase2InventionQuizQuestion[]): string {
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
  } else if (correctCount === 12) {
    return "Type6";
  } else {
    // Fallback
    return "Type1";
  }
}
