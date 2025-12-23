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
      ko: "[고대 이집트] 고대 이집트의 왕(통치자)을 부르는 명칭은 무엇일까요?",
      en: "[Ancient Egypt] What is the title for the king (ruler) of ancient Egypt?",
      ja: "[古代エジプト] 古代エジプトの王（統治者）を呼ぶ名称は何でしょうか？",
      'zh-CN': "[古埃及] 古埃及国王（统治者）的称呼是什么？",
      'zh-TW': "[古埃及] 古埃及國王（統治者）的稱呼是什麼？",
      vi: "[Ai Cập cổ đại] Danh xưng của vua (người cai trị) Ai Cập cổ đại là gì?",
      id: "[Mesir Kuno] Apa sebutan untuk raja (penguasa) Mesir kuno?"
    },
    options: [
      {
        text: {
          ko: "술탄 (Sultan)",
          en: "Sultan",
          ja: "スルタン",
          'zh-CN': "苏丹",
          'zh-TW': "蘇丹",
          vi: "Sultan",
          id: "Sultan"
        }
      },
      {
        text: {
          ko: "황제 (Emperor)",
          en: "Emperor",
          ja: "皇帝",
          'zh-CN': "皇帝",
          'zh-TW': "皇帝",
          vi: "Hoàng đế",
          id: "Kaisar"
        }
      },
      {
        text: {
          ko: "파라오 (Pharaoh)",
          en: "Pharaoh",
          ja: "ファラオ",
          'zh-CN': "法老",
          'zh-TW': "法老",
          vi: "Pharaoh",
          id: "Firaun"
        }
      },
      {
        text: {
          ko: "차르 (Tsar)",
          en: "Tsar",
          ja: "ツァーリ",
          'zh-CN': "沙皇",
          'zh-TW': "沙皇",
          vi: "Sa hoàng",
          id: "Tsar"
        }
      }
    ],
    correctAnswer: 2 // C (파라오)
  },
  {
    id: 2,
    question: {
      ko: "[고대 중국] 중국 최초의 통일 제국인 '진나라'를 세우고, 만리장성을 쌓기 시작한 황제는?",
      en: "[Ancient China] Which emperor established the Qin Dynasty, China's first unified empire, and began building the Great Wall?",
      ja: "[古代中国] 中国最初の統一帝国「秦」を建て、万里の長城を築き始めた皇帝は？",
      'zh-CN': "[古代中国] 建立中国第一个统一帝国'秦朝'并开始修建长城的皇帝是？",
      'zh-TW': "[古代中國] 建立中國第一個統一帝國「秦朝」並開始修建長城的皇帝是？",
      vi: "[Trung Quốc cổ đại] Hoàng đế nào đã thành lập nhà Tần, đế quốc thống nhất đầu tiên của Trung Quốc, và bắt đầu xây dựng Vạn Lý Trường Thành?",
      id: "[Tiongkok Kuno] Kaisar mana yang mendirikan Dinasti Qin, kekaisaran bersatu pertama Tiongkok, dan mulai membangun Tembok Besar?"
    },
    options: [
      {
        text: {
          ko: "유방",
          en: "Liu Bang",
          ja: "劉邦",
          'zh-CN': "刘邦",
          'zh-TW': "劉邦",
          vi: "Lưu Bang",
          id: "Liu Bang"
        }
      },
      {
        text: {
          ko: "진시황 (시황제)",
          en: "Qin Shi Huang (First Emperor)",
          ja: "始皇帝（しこうてい）",
          'zh-CN': "秦始皇",
          'zh-TW': "秦始皇",
          vi: "Tần Thủy Hoàng",
          id: "Qin Shi Huang (Kaisar Pertama)"
        }
      },
      {
        text: {
          ko: "한무제",
          en: "Emperor Wu of Han",
          ja: "漢武帝",
          'zh-CN': "汉武帝",
          'zh-TW': "漢武帝",
          vi: "Hán Vũ Đế",
          id: "Kaisar Wu dari Han"
        }
      },
      {
        text: {
          ko: "징기스칸",
          en: "Genghis Khan",
          ja: "チンギス・ハン",
          'zh-CN': "成吉思汗",
          'zh-TW': "成吉思汗",
          vi: "Thành Cát Tư Hãn",
          id: "Genghis Khan"
        }
      }
    ],
    correctAnswer: 1 // B (진시황)
  },
  {
    id: 3,
    question: {
      ko: "[고대 그리스] 알렉산더 대왕의 스승이자, \"인간은 사회적 동물이다\"라는 명언을 남긴 철학자는?",
      en: "[Ancient Greece] Who was the philosopher who was Alexander the Great's teacher and left the famous saying \"Man is a social animal\"?",
      ja: "[古代ギリシャ] アレクサンドロス大王の師であり、「人間は社会的動物である」という名言を残した哲学者は？",
      'zh-CN': "[古希腊] 亚历山大大帝的老师，留下名言\"人是社会性动物\"的哲学家是？",
      'zh-TW': "[古希臘] 亞歷山大大帝的老師，留下名言「人是社會性動物」的哲學家是？",
      vi: "[Hy Lạp cổ đại] Triết gia nào là thầy của Alexander Đại đế và để lại câu nói nổi tiếng \"Con người là động vật xã hội\"?",
      id: "[Yunani Kuno] Siapa filsuf yang merupakan guru Alexander Agung dan meninggalkan pepatah terkenal \"Manusia adalah hewan sosial\"?"
    },
    options: [
      {
        text: {
          ko: "소크라테스",
          en: "Socrates",
          ja: "ソクラテス",
          'zh-CN': "苏格拉底",
          'zh-TW': "蘇格拉底",
          vi: "Socrates",
          id: "Socrates"
        }
      },
      {
        text: {
          ko: "플라톤",
          en: "Plato",
          ja: "プラトン",
          'zh-CN': "柏拉图",
          'zh-TW': "柏拉圖",
          vi: "Plato",
          id: "Plato"
        }
      },
      {
        text: {
          ko: "아리스토텔레스",
          en: "Aristotle",
          ja: "アリストテレス",
          'zh-CN': "亚里士多德",
          'zh-TW': "亞里士多德",
          vi: "Aristotle",
          id: "Aristoteles"
        }
      },
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
      }
    ],
    correctAnswer: 2 // C (아리스토텔레스)
  },
  {
    id: 4,
    question: {
      ko: "[고대 로마] 로마의 장군 율리우스 카이사르가 남긴 유명한 명언은?",
      en: "[Ancient Rome] What is the famous saying left by the Roman general Julius Caesar?",
      ja: "[古代ローマ] ローマの将軍ユリウス・カエサルが残した有名な名言は？",
      'zh-CN': "[古罗马] 罗马将军尤利乌斯·凯撒留下的名言是？",
      'zh-TW': "[古羅馬] 羅馬將軍尤利烏斯·凱撒留下的名言是？",
      vi: "[La Mã cổ đại] Câu nói nổi tiếng của tướng La Mã Julius Caesar là gì?",
      id: "[Roma Kuno] Apa pepatah terkenal yang ditinggalkan oleh jenderal Romawi Julius Caesar?"
    },
    options: [
      {
        text: {
          ko: "\"왔노라, 보았노라, 이겼노라.\" (Veni, Vidi, Vici)",
          en: "\"I came, I saw, I conquered.\" (Veni, Vidi, Vici)",
          ja: "「来た、見た、勝った。」（Veni, Vidi, Vici）",
          'zh-CN': "\"我来了，我看见了，我征服了。\" (Veni, Vidi, Vici)",
          'zh-TW': "「我來了，我看見了，我征服了。」(Veni, Vidi, Vici)",
          vi: "\"Tôi đến, tôi thấy, tôi chinh phục.\" (Veni, Vidi, Vici)",
          id: "\"Aku datang, aku melihat, aku menaklukkan.\" (Veni, Vidi, Vici)"
        }
      },
      {
        text: {
          ko: "\"내 사전에 불가능이란 없다.\"",
          en: "\"Nothing is impossible in my dictionary.\"",
          ja: "「私の辞書に不可能という言葉はない。」",
          'zh-CN': "\"我的字典里没有不可能。\"",
          'zh-TW': "「我的字典裡沒有不可能。」",
          vi: "\"Trong từ điển của tôi không có từ 'không thể'.\"",
          id: "\"Tidak ada yang mustahil dalam kamus saya.\""
        }
      },
      {
        text: {
          ko: "\"너 자신을 알라.\"",
          en: "\"Know thyself.\"",
          ja: "「汝自身を知れ。」",
          'zh-CN': "\"认识你自己。\"",
          'zh-TW': "「認識你自己。」",
          vi: "\"Hãy biết chính mình.\"",
          id: "\"Kenali dirimu sendiri.\""
        }
      },
      {
        text: {
          ko: "\"국가가 나를 위해 무엇을 해줄 수 있는지 묻지 말라.\"",
          en: "\"Ask not what your country can do for you.\"",
          ja: "「国家があなたのために何ができるかを尋ねるな。」",
          'zh-CN': "\"不要问国家能为你做什么。\"",
          'zh-TW': "「不要問國家能為你做什麼。」",
          vi: "\"Đừng hỏi đất nước có thể làm gì cho bạn.\"",
          id: "\"Jangan tanya apa yang negara bisa lakukan untukmu.\""
        }
      }
    ],
    correctAnswer: 0 // A (왔노라, 보았노라, 이겼노라)
  },
  {
    id: 5,
    question: {
      ko: "[고대 법전] \"눈에는 눈, 이에는 이.\" 복수법으로 유명한 바빌로니아의 법전은?",
      en: "[Ancient Legal Code] What is the Babylonian legal code famous for the law of retaliation \"an eye for an eye, a tooth for a tooth\"?",
      ja: "[古代法典] 「目には目を、歯には歯を」復讐法で有名なバビロニアの法典は？",
      'zh-CN': "[古代法典] \"以眼还眼，以牙还牙\"的复仇法而闻名的巴比伦法典是？",
      'zh-TW': "[古代法典] 「以眼還眼，以牙還牙」的復仇法而聞名的巴比倫法典是？",
      vi: "[Bộ luật cổ đại] Bộ luật Babylon nổi tiếng với luật trả thù \"mắt đền mắt, răng đền răng\" là gì?",
      id: "[Kitab Hukum Kuno] Apa kitab hukum Babilonia yang terkenal dengan hukum pembalasan \"mata ganti mata, gigi ganti gigi\"?"
    },
    options: [
      {
        text: {
          ko: "나폴레옹 법전",
          en: "Napoleonic Code",
          ja: "ナポレオン法典",
          'zh-CN': "拿破仑法典",
          'zh-TW': "拿破崙法典",
          vi: "Bộ luật Napoleon",
          id: "Kitab Hukum Napoleon"
        }
      },
      {
        text: {
          ko: "함무라비 법전",
          en: "Code of Hammurabi",
          ja: "ハンムラビ法典",
          'zh-CN': "汉谟拉比法典",
          'zh-TW': "漢謨拉比法典",
          vi: "Bộ luật Hammurabi",
          id: "Kitab Hukum Hammurabi"
        }
      },
      {
        text: {
          ko: "로마법 대전",
          en: "Corpus Juris Civilis",
          ja: "ローマ法大全",
          'zh-CN': "查士丁尼法典",
          'zh-TW': "查士丁尼法典",
          vi: "Bộ luật La Mã",
          id: "Corpus Juris Civilis"
        }
      },
      {
        text: {
          ko: "마누 법전",
          en: "Laws of Manu",
          ja: "マヌ法典",
          'zh-CN': "摩奴法典",
          'zh-TW': "摩奴法典",
          vi: "Bộ luật Manu",
          id: "Hukum Manu"
        }
      }
    ],
    correctAnswer: 1 // B (함무라비 법전)
  },
  {
    id: 6,
    question: {
      ko: "[중세 유럽] 14세기 중반, 유럽 인구의 3분의 1을 사망에 이르게 한 전염병은?",
      en: "[Medieval Europe] What epidemic in the mid-14th century killed one-third of Europe's population?",
      ja: "[中世ヨーロッパ] 14世紀半ば、ヨーロッパ人口の3分の1を死亡させた伝染病は？",
      'zh-CN': "[中世纪欧洲] 14世纪中期，导致欧洲三分之一人口死亡的传染病是？",
      'zh-TW': "[中世紀歐洲] 14世紀中期，導致歐洲三分之一人口死亡的傳染病是？",
      vi: "[Châu Âu Trung cổ] Bệnh dịch nào vào giữa thế kỷ 14 đã giết chết một phần ba dân số châu Âu?",
      id: "[Eropa Abad Pertengahan] Wabah apa di pertengahan abad ke-14 yang membunuh sepertiga populasi Eropa?"
    },
    options: [
      {
        text: {
          ko: "스페인 독감",
          en: "Spanish Flu",
          ja: "スペイン風邪",
          'zh-CN': "西班牙流感",
          'zh-TW': "西班牙流感",
          vi: "Cúm Tây Ban Nha",
          id: "Flu Spanyol"
        }
      },
      {
        text: {
          ko: "콜레라",
          en: "Cholera",
          ja: "コレラ",
          'zh-CN': "霍乱",
          'zh-TW': "霍亂",
          vi: "Bệnh tả",
          id: "Kolera"
        }
      },
      {
        text: {
          ko: "천연두",
          en: "Smallpox",
          ja: "天然痘",
          'zh-CN': "天花",
          'zh-TW': "天花",
          vi: "Bệnh đậu mùa",
          id: "Cacar"
        }
      },
      {
        text: {
          ko: "흑사병 (페스트)",
          en: "Black Death (Plague)",
          ja: "黒死病（ペスト）",
          'zh-CN': "黑死病（鼠疫）",
          'zh-TW': "黑死病（鼠疫）",
          vi: "Cái chết đen (Dịch hạch)",
          id: "Kematian Hitam (Wabah)"
        }
      }
    ],
    correctAnswer: 3 // D (흑사병)
  },
  {
    id: 7,
    question: {
      ko: "[중세 전쟁] 프랑스를 구한 영웅 '잔 다르크'가 활약했던, 영국과 프랑스 사이의 전쟁은?",
      en: "[Medieval War] What was the war between England and France in which the hero Joan of Arc, who saved France, was active?",
      ja: "[中世戦争] フランスを救った英雄「ジャンヌ・ダルク」が活躍した、イギリスとフランスの間の戦争は？",
      'zh-CN': "[中世纪战争] 拯救法国的英雄'圣女贞德'活跃的英法之间的战争是？",
      'zh-TW': "[中世紀戰爭] 拯救法國的英雄「聖女貞德」活躍的英法之間的戰爭是？",
      vi: "[Chiến tranh Trung cổ] Cuộc chiến giữa Anh và Pháp mà nữ anh hùng Joan of Arc, người đã cứu nước Pháp, hoạt động là gì?",
      id: "[Perang Abad Pertengahan] Perang apa antara Inggris dan Prancis di mana pahlawan Joan of Arc, yang menyelamatkan Prancis, aktif?"
    },
    options: [
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
          ko: "백년 전쟁",
          en: "Hundred Years' War",
          ja: "百年戦争",
          'zh-CN': "百年战争",
          'zh-TW': "百年戰爭",
          vi: "Chiến tranh Trăm năm",
          id: "Perang Seratus Tahun"
        }
      },
      {
        text: {
          ko: "30년 전쟁",
          en: "Thirty Years' War",
          ja: "三十年戦争",
          'zh-CN': "三十年战争",
          'zh-TW': "三十年戰爭",
          vi: "Chiến tranh Ba mươi năm",
          id: "Perang Tiga Puluh Tahun"
        }
      }
    ],
    correctAnswer: 2 // C (백년 전쟁)
  },
  {
    id: 8,
    question: {
      ko: "[중세 이슬람] 이슬람교의 창시자는 누구일까요?",
      en: "[Medieval Islam] Who is the founder of Islam?",
      ja: "[中世イスラム] イスラム教の創始者は誰でしょうか？",
      'zh-CN': "[中世纪伊斯兰] 伊斯兰教的创始人是？",
      'zh-TW': "[中世紀伊斯蘭] 伊斯蘭教的創始人是？",
      vi: "[Hồi giáo Trung cổ] Ai là người sáng lập Hồi giáo?",
      id: "[Islam Abad Pertengahan] Siapa pendiri Islam?"
    },
    options: [
      {
        text: {
          ko: "무함마드",
          en: "Muhammad",
          ja: "ムハンマド",
          'zh-CN': "穆罕默德",
          'zh-TW': "穆罕默德",
          vi: "Muhammad",
          id: "Muhammad"
        }
      },
      {
        text: {
          ko: "알라",
          en: "Allah",
          ja: "アッラー",
          'zh-CN': "安拉",
          'zh-TW': "安拉",
          vi: "Allah",
          id: "Allah"
        }
      },
      {
        text: {
          ko: "예수",
          en: "Jesus",
          ja: "イエス",
          'zh-CN': "耶稣",
          'zh-TW': "耶穌",
          vi: "Jesus",
          id: "Yesus"
        }
      },
      {
        text: {
          ko: "싯다르타",
          en: "Siddhartha",
          ja: "シッダールタ",
          'zh-CN': "悉达多",
          'zh-TW': "悉達多",
          vi: "Siddhartha",
          id: "Siddhartha"
        }
      }
    ],
    correctAnswer: 0 // A (무함마드)
  },
  {
    id: 9,
    question: {
      ko: "[고대 전쟁] 로마와 카르타고의 전쟁(포에니 전쟁)에서, 코끼리 부대를 이끌고 알프스산맥을 넘은 카르타고의 장군은?",
      en: "[Ancient War] In the war between Rome and Carthage (Punic Wars), which Carthaginian general led an elephant army across the Alps?",
      ja: "[古代戦争] ローマとカルタゴの戦争（ポエニ戦争）で、象の部隊を率いてアルプス山脈を越えたカルタゴの将軍は？",
      'zh-CN': "[古代战争] 在罗马与迦太基的战争（布匿战争）中，率领象军翻越阿尔卑斯山脉的迦太基将军是？",
      'zh-TW': "[古代戰爭] 在羅馬與迦太基的戰爭（布匿戰爭）中，率領象軍翻越阿爾卑斯山脈的迦太基將軍是？",
      vi: "[Chiến tranh cổ đại] Trong cuộc chiến giữa La Mã và Carthage (Chiến tranh Punic), vị tướng Carthage nào đã dẫn quân voi vượt qua dãy Alps?",
      id: "[Perang Kuno] Dalam perang antara Roma dan Kartago (Perang Punisia), jenderal Kartago mana yang memimpin pasukan gajah melintasi Pegunungan Alpen?"
    },
    options: [
      {
        text: {
          ko: "한니발",
          en: "Hannibal",
          ja: "ハンニバル",
          'zh-CN': "汉尼拔",
          'zh-TW': "漢尼拔",
          vi: "Hannibal",
          id: "Hannibal"
        }
      },
      {
        text: {
          ko: "스키피오",
          en: "Scipio",
          ja: "スキピオ",
          'zh-CN': "西庇阿",
          'zh-TW': "西庇阿",
          vi: "Scipio",
          id: "Scipio"
        }
      },
      {
        text: {
          ko: "폼페이우스",
          en: "Pompey",
          ja: "ポンペイウス",
          'zh-CN': "庞培",
          'zh-TW': "龐培",
          vi: "Pompey",
          id: "Pompey"
        }
      },
      {
        text: {
          ko: "스파르타쿠스",
          en: "Spartacus",
          ja: "スパルタクス",
          'zh-CN': "斯巴达克斯",
          'zh-TW': "斯巴達克斯",
          vi: "Spartacus",
          id: "Spartacus"
        }
      }
    ],
    correctAnswer: 0 // A (한니발)
  },
  {
    id: 10,
    question: {
      ko: "[중세 제국] 서로마 제국 멸망 후, 콘스탄티노폴리스를 수도로 하여 약 1,000년간 존속한 제국은?",
      en: "[Medieval Empire] After the fall of the Western Roman Empire, which empire lasted for about 1,000 years with Constantinople as its capital?",
      ja: "[中世帝国] 西ローマ帝国滅亡後、コンスタンティノープルを首都として約1000年間存続した帝国は？",
      'zh-CN': "[中世纪帝国] 西罗马帝国灭亡后，以君士坦丁堡为首都持续约1000年的帝国是？",
      'zh-TW': "[中世紀帝國] 西羅馬帝國滅亡後，以君士坦丁堡為首都持續約1000年的帝國是？",
      vi: "[Đế quốc Trung cổ] Sau khi Đế quốc Tây La Mã sụp đổ, đế quốc nào đã tồn tại khoảng 1,000 năm với Constantinople làm thủ đô?",
      id: "[Kekaisaran Abad Pertengahan] Setelah kejatuhan Kekaisaran Romawi Barat, kekaisaran mana yang bertahan sekitar 1.000 tahun dengan Konstantinopel sebagai ibu kotanya?"
    },
    options: [
      {
        text: {
          ko: "신성 로마 제국",
          en: "Holy Roman Empire",
          ja: "神聖ローマ帝国",
          'zh-CN': "神圣罗马帝国",
          'zh-TW': "神聖羅馬帝國",
          vi: "Đế quốc La Mã Thần thánh",
          id: "Kekaisaran Romawi Suci"
        }
      },
      {
        text: {
          ko: "비잔티움 제국 (동로마 제국)",
          en: "Byzantine Empire (Eastern Roman Empire)",
          ja: "ビザンツ帝国（東ローマ帝国）",
          'zh-CN': "拜占庭帝国（东罗马帝国）",
          'zh-TW': "拜占庭帝國（東羅馬帝國）",
          vi: "Đế quốc Byzantine (Đế quốc Đông La Mã)",
          id: "Kekaisaran Bizantium (Kekaisaran Romawi Timur)"
        }
      },
      {
        text: {
          ko: "오스만 제국",
          en: "Ottoman Empire",
          ja: "オスマン帝国",
          'zh-CN': "奥斯曼帝国",
          'zh-TW': "鄂圖曼帝國",
          vi: "Đế quốc Ottoman",
          id: "Kekaisaran Ottoman"
        }
      },
      {
        text: {
          ko: "몽골 제국",
          en: "Mongol Empire",
          ja: "モンゴル帝国",
          'zh-CN': "蒙古帝国",
          'zh-TW': "蒙古帝國",
          vi: "Đế quốc Mông Cổ",
          id: "Kekaisaran Mongol"
        }
      }
    ],
    correctAnswer: 1 // B (비잔티움 제국)
  },
  {
    id: 11,
    question: {
      ko: "[중세 몽골] 흩어져 있던 몽골 부족을 통일하고, 역사상 가장 넓은 영토를 정복한 정복자는?",
      en: "[Medieval Mongolia] Who was the conqueror who unified the scattered Mongol tribes and conquered the largest territory in history?",
      ja: "[中世モンゴル] 散らばっていたモンゴル部族を統一し、歴史上最も広い領土を征服した征服者は？",
      'zh-CN': "[中世纪蒙古] 统一分散的蒙古部落，征服历史上最广阔领土的征服者是？",
      'zh-TW': "[中世紀蒙古] 統一分散的蒙古部落，征服歷史上最廣闊領土的征服者是？",
      vi: "[Mông Cổ Trung cổ] Ai là người chinh phục đã thống nhất các bộ lạc Mông Cổ rải rác và chinh phục lãnh thổ rộng lớn nhất trong lịch sử?",
      id: "[Mongolia Abad Pertengahan] Siapa penakluk yang menyatukan suku-suku Mongol yang tersebar dan menaklukkan wilayah terluas dalam sejarah?"
    },
    options: [
      {
        text: {
          ko: "쿠빌라이 칸",
          en: "Kublai Khan",
          ja: "クビライ・ハン",
          'zh-CN': "忽必烈",
          'zh-TW': "忽必烈",
          vi: "Hốt Tất Liệt",
          id: "Kublai Khan"
        }
      },
      {
        text: {
          ko: "티무르",
          en: "Timur",
          ja: "ティムール",
          'zh-CN': "帖木儿",
          'zh-TW': "帖木兒",
          vi: "Timur",
          id: "Timur"
        }
      },
      {
        text: {
          ko: "칭기즈 칸 (테무친)",
          en: "Genghis Khan (Temujin)",
          ja: "チンギス・ハン（テムジン）",
          'zh-CN': "成吉思汗（铁木真）",
          'zh-TW': "成吉思汗（鐵木真）",
          vi: "Thành Cát Tư Hãn (Temujin)",
          id: "Genghis Khan (Temujin)"
        }
      },
      {
        text: {
          ko: "아틸라",
          en: "Attila",
          ja: "アッティラ",
          'zh-CN': "阿提拉",
          'zh-TW': "阿提拉",
          vi: "Attila",
          id: "Attila"
        }
      }
    ],
    correctAnswer: 2 // C (칭기즈 칸)
  },
  {
    id: 12,
    question: {
      ko: "[중세 문화] 십자군 원정 실패 이후 교황권이 쇠퇴하고, 인간 중심의 문화가 부활하기 시작한 운동을 무엇이라 할까요?",
      en: "[Medieval Culture] After the failure of the Crusades, what is the movement called in which papal power declined and human-centered culture began to revive?",
      ja: "[中世文化] 十字軍遠征失敗後、教皇権が衰退し、人間中心の文化が復活し始めた運動を何といいますか？",
      'zh-CN': "[中世纪文化] 十字军东征失败后，教权衰落，以人为中心的文化开始复兴的运动是什么？",
      'zh-TW': "[中世紀文化] 十字軍東征失敗後，教權衰落，以人為中心的文化開始復興的運動是什麼？",
      vi: "[Văn hóa Trung cổ] Sau thất bại của Thập tự chinh, phong trào nào mà quyền lực giáo hoàng suy yếu và văn hóa lấy con người làm trung tâm bắt đầu hồi sinh?",
      id: "[Budaya Abad Pertengahan] Setelah kegagalan Perang Salib, gerakan apa yang disebut di mana kekuasaan kepausan menurun dan budaya yang berpusat pada manusia mulai bangkit kembali?"
    },
    options: [
      {
        text: {
          ko: "종교 개혁",
          en: "Reformation",
          ja: "宗教改革",
          'zh-CN': "宗教改革",
          'zh-TW': "宗教改革",
          vi: "Cải cách Tôn giáo",
          id: "Reformasi"
        }
      },
      {
        text: {
          ko: "산업 혁명",
          en: "Industrial Revolution",
          ja: "産業革命",
          'zh-CN': "工业革命",
          'zh-TW': "工業革命",
          vi: "Cách mạng Công nghiệp",
          id: "Revolusi Industri"
        }
      },
      {
        text: {
          ko: "대항해 시대",
          en: "Age of Discovery",
          ja: "大航海時代",
          'zh-CN': "大航海时代",
          'zh-TW': "大航海時代",
          vi: "Thời đại Khám phá",
          id: "Zaman Penjelajahan"
        }
      },
      {
        text: {
          ko: "르네상스",
          en: "Renaissance",
          ja: "ルネサンス",
          'zh-CN': "文艺复兴",
          'zh-TW': "文藝復興",
          vi: "Phục hưng",
          id: "Renaissance"
        }
      }
    ],
    correctAnswer: 3 // D (르네상스)
  }
];

export const phase2WorldHistoryQuizResults: Phase2WorldHistoryQuizResult[] = [
  {
    type: "Type1",
    emoji: "🍖",
    title: {
      ko: "역알못, 석기시대 원시인",
      en: "History Illiterate, Stone Age Primitive",
      ja: "歴史オタク無知、石器時代の原始人",
      'zh-CN': "历史盲，石器时代原始人",
      'zh-TW': "歷史盲，石器時代原始人",
      vi: "Người mù lịch sử, người nguyên thủy thời kỳ đồ đá",
      id: "Buta Sejarah, Manusia Primitif Zaman Batu"
    },
    shortDescription: {
      ko: "\"역사? 먹는 건가요? 우가우가!\"",
      en: "\"History? Is it something to eat? Uga uga!\"",
      ja: "「歴史？食べるものですか？ウガウガ！」",
      'zh-CN': "\"历史？能吃吗？呜嘎呜嘎！\"",
      'zh-TW': "「歷史？能吃嗎？嗚嘎嗚嘎！」",
      vi: "\"Lịch sử? Có phải là thứ để ăn không? Uga uga!\"",
      id: "\"Sejarah? Apakah itu sesuatu yang bisa dimakan? Uga uga!\""
    },
    description: {
      ko: "당신은 역사에 대해 전혀 관심이 없거나, 기억이 '리셋'된 상태입니다. 파라오가 이집트 왕이라는 것도 헷갈릴 정도라면, 타임머신을 타고 과거로 갔을 때 생존하기 힘들지도 모릅니다. 하지만 괜찮습니다. 역사는 지금부터 써 내려가면 되니까요!",
      en: "You have no interest in history at all, or your memory has been 'reset'. If you're confused about something as basic as the pharaoh being the king of Egypt, you might have trouble surviving if you travel to the past in a time machine. But that's okay. You can start writing history from now on!",
      ja: "あなたは歴史に全く興味がないか、記憶が「リセット」された状態です。ファラオがエジプトの王だということも混乱する程度なら、タイムマシンで過去に行ったとき、生き残るのが難しいかもしれません。でも大丈夫です。歴史は今から書き始めればいいのですから！",
      'zh-CN': "你对历史完全没有兴趣，或者记忆被'重置'了。如果你连法老是埃及国王这样基本的事情都搞不清楚，那么乘坐时光机回到过去时可能很难生存。但没关系。历史从现在开始写就可以了！",
      'zh-TW': "你對歷史完全沒有興趣，或者記憶被「重置」了。如果你連法老是埃及國王這樣基本的事情都搞不清楚，那麼乘坐時光機回到過去時可能很難生存。但沒關係。歷史從現在開始寫就可以了！",
      vi: "Bạn hoàn toàn không quan tâm đến lịch sử, hoặc ký ức của bạn đã bị 'reset'. Nếu bạn còn bối rối về điều cơ bản như pharaoh là vua của Ai Cập, bạn có thể gặp khó khăn khi sống sót nếu đi du hành về quá khứ bằng cỗ máy thời gian. Nhưng không sao. Bạn có thể bắt đầu viết lịch sử từ bây giờ!",
      id: "Anda sama sekali tidak tertarik pada sejarah, atau ingatan Anda telah 'direset'. Jika Anda bingung tentang sesuatu yang mendasar seperti firaun adalah raja Mesir, Anda mungkin kesulitan bertahan hidup jika bepergian ke masa lalu dengan mesin waktu. Tapi tidak apa-apa. Anda bisa mulai menulis sejarah dari sekarang!"
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
      ko: "만화로 보는 세계사 책을 추천합니다.",
      en: "I recommend reading world history books in comic format.",
      ja: "漫画で見る世界史の本をお勧めします。",
      'zh-CN': "建议阅读漫画形式的世界史书籍。",
      'zh-TW': "建議閱讀漫畫形式的世界史書籍。",
      vi: "Tôi khuyên bạn nên đọc sách lịch sử thế giới dạng truyện tranh.",
      id: "Saya merekomendasikan membaca buku sejarah dunia dalam format komik."
    }
  },
  {
    type: "Type2",
    emoji: "⏳",
    title: {
      ko: "가물가물한 기억, 초보 시간여행자",
      en: "Vague Memory, Beginner Time Traveler",
      ja: "ぼんやりした記憶、初心者タイムトラベラー",
      'zh-CN': "模糊的记忆，新手时间旅行者",
      'zh-TW': "模糊的記憶，新手時間旅行者",
      vi: "Ký ức mơ hồ, người du hành thời gian mới bắt đầu",
      id: "Ingatan Kabur, Penjelajah Waktu Pemula"
    },
    shortDescription: {
      ko: "\"아... 들어본 것 같은데... 뭐였더라?\"",
      en: "\"Hmm... I think I've heard of it... What was it?\"",
      ja: "「ああ...聞いたことがあるような...何だったっけ？」",
      'zh-CN': "\"嗯...好像听过...是什么来着？\"",
      'zh-TW': "「嗯...好像聽過...是什麼來著？」",
      vi: "\"Hmm... Hình như tôi đã nghe... Là gì nhỉ?\"",
      id: "\"Hmm... Sepertinya pernah dengar... Apa ya?\""
    },
    description: {
      ko: "학교 다닐 때 수업은 들었지만, 시험이 끝나자마자 지식도 함께 증발해 버렸군요. 진시황이나 흑사병 같은 아주 유명한 키워드만 기억하고 있습니다. 역사 영화나 드라마를 보면서 흥미를 다시 붙여보는 건 어떨까요?",
      en: "You attended classes in school, but as soon as the exams ended, your knowledge evaporated. You only remember very famous keywords like Qin Shi Huang or the Black Death. How about rekindling your interest by watching historical movies or dramas?",
      ja: "学校に通っていたときは授業を受けていましたが、試験が終わるとすぐに知識も一緒に蒸発してしまいました。始皇帝や黒死病のような非常に有名なキーワードだけを覚えています。歴史映画やドラマを見ながら興味を再び持つのはいかがでしょうか？",
      'zh-CN': "你在学校时上过课，但考试一结束，知识就一起蒸发了。你只记得像秦始皇或黑死病这样非常著名的关键词。通过观看历史电影或电视剧来重新培养兴趣怎么样？",
      'zh-TW': "你在學校時上過課，但考試一結束，知識就一起蒸發了。你只記得像秦始皇或黑死病這樣非常著名的關鍵詞。通過觀看歷史電影或電視劇來重新培養興趣怎麼樣？",
      vi: "Bạn đã tham gia các lớp học ở trường, nhưng ngay sau khi kỳ thi kết thúc, kiến thức của bạn cũng bay hơi. Bạn chỉ nhớ những từ khóa rất nổi tiếng như Tần Thủy Hoàng hay Cái chết đen. Bạn nghĩ sao về việc khơi dậy lại sự quan tâm bằng cách xem phim hoặc phim truyền hình lịch sử?",
      id: "Anda menghadiri kelas di sekolah, tetapi begitu ujian berakhir, pengetahuan Anda menguap. Anda hanya mengingat kata kunci yang sangat terkenal seperti Qin Shi Huang atau Kematian Hitam. Bagaimana kalau menumbuhkan kembali minat dengan menonton film atau drama sejarah?"
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
      ko: "'글래디에이터' 같은 명작 영화 다시 보기.",
      en: "Rewatch masterpiece films like 'Gladiator'.",
      ja: "「グラディエーター」のような名作映画を再視聴する。",
      'zh-CN': "重新观看像《角斗士》这样的经典电影。",
      'zh-TW': "重新觀看像《神鬼戰士》這樣的經典電影。",
      vi: "Xem lại các bộ phim kiệt tác như 'Gladiator'.",
      id: "Tonton ulang film-film masterpiece seperti 'Gladiator'."
    }
  },
  {
    type: "Type3",
    emoji: "📜",
    title: {
      ko: "일반인 평균, 상식적인 시민",
      en: "Average Person, Common-Sense Citizen",
      ja: "一般人平均、常識的な市民",
      'zh-CN': "普通人平均水平，有常识的市民",
      'zh-TW': "普通人平均水平，有常識的市民",
      vi: "Người bình thường, công dân có kiến thức chung",
      id: "Rata-rata Orang, Warga yang Berakal Sehat"
    },
    shortDescription: {
      ko: "\"이 정도는 기본 상식이죠!\"",
      en: "\"This is basic common knowledge!\"",
      ja: "「これくらいは基本常識です！」",
      'zh-CN': "\"这是基本常识！\"",
      'zh-TW': "「這是基本常識！」",
      vi: "\"Đây là kiến thức cơ bản!\"",
      id: "\"Ini adalah pengetahuan umum dasar!\""
    },
    description: {
      ko: "당신은 딱 평균적인 역사 상식을 가지고 있습니다. 어디 가서 \"무식하다\"는 소리는 듣지 않을 수준입니다. 굵직한 사건들은 알고 있지만, 디테일한 연도나 인물 이름에서 살짝 헷갈리는 경향이 있습니다.",
      en: "You have exactly average historical knowledge. You won't hear people say you're 'ignorant' anywhere. You know major events, but tend to get slightly confused about specific years or names of historical figures.",
      ja: "あなたはちょうど平均的な歴史常識を持っています。どこに行っても「無知だ」と言われることはないレベルです。大きな出来事は知っていますが、詳細な年号や人物名で少し混乱する傾向があります。",
      'zh-CN': "你拥有恰好平均的历史常识。你不会在任何地方听到别人说你'无知'。你知道重大事件，但往往在具体的年份或历史人物名字上有点困惑。",
      'zh-TW': "你擁有恰好平均的歷史常識。你不會在任何地方聽到別人說你「無知」。你知道重大事件，但往往在具體的年份或歷史人物名字上有點困惑。",
      vi: "Bạn có kiến thức lịch sử trung bình. Bạn sẽ không nghe ai nói bạn 'ngu dốt' ở đâu cả. Bạn biết các sự kiện lớn, nhưng có xu hướng hơi bối rối về các năm cụ thể hoặc tên của các nhân vật lịch sử.",
      id: "Anda memiliki pengetahuan sejarah yang rata-rata. Anda tidak akan mendengar orang mengatakan Anda 'bodoh' di mana pun. Anda tahu peristiwa-peristiwa besar, tetapi cenderung sedikit bingung tentang tahun-tahun spesifik atau nama tokoh sejarah."
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
      ko: "유튜브 역사 채널 구독하기.",
      en: "Subscribe to history YouTube channels.",
      ja: "YouTubeの歴史チャンネルを購読する。",
      'zh-CN': "订阅历史YouTube频道。",
      'zh-TW': "訂閱歷史YouTube頻道。",
      vi: "Đăng ký các kênh YouTube về lịch sử.",
      id: "Berlangganan saluran YouTube sejarah."
    }
  },
  {
    type: "Type4",
    emoji: "🎓",
    title: {
      ko: "역사 좀 아는, 세계사 우등생",
      en: "History Knower, World History Honor Student",
      ja: "歴史がわかる、世界史優等生",
      'zh-CN': "懂历史，世界史优等生",
      'zh-TW': "懂歷史，世界史優等生",
      vi: "Người hiểu lịch sử, học sinh giỏi lịch sử thế giới",
      id: "Pemaham Sejarah, Siswa Berprestasi Sejarah Dunia"
    },
    shortDescription: {
      ko: "\"흐름이 딱 잡혀있네요!\"",
      en: "\"You've got the flow down perfectly!\"",
      ja: "「流れがしっかりと掴めていますね！」",
      'zh-CN': "\"你完全掌握了历史脉络！\"",
      'zh-TW': "「你完全掌握了歷史脈絡！」",
      vi: "\"Bạn đã nắm bắt được dòng chảy một cách hoàn hảo!\"",
      id: "\"Anda sudah menguasai alurnya dengan sempurna!\""
    },
    description: {
      ko: "당신은 학창 시절 역사 과목 점수가 꽤 좋았을 것입니다. 고대부터 중세까지 시대적 흐름을 잘 파악하고 있으며, 주요 인물들의 업적도 잘 알고 있습니다. 친구들이 역사에 대해 물어보면 대답해 줄 수 있는 수준입니다.",
      en: "You probably had pretty good grades in history during school. You have a good grasp of the historical flow from ancient times to the Middle Ages, and you also know the achievements of major figures well. You're at a level where you can answer when friends ask about history.",
      ja: "あなたは学生時代、歴史の科目の点数がかなり良かったでしょう。古代から中世まで時代的な流れをよく把握しており、主要人物の業績もよく知っています。友達が歴史について尋ねると答えられるレベルです。",
      'zh-CN': "你在学生时代的历史科目成绩可能相当不错。你很好地掌握了从古代到中世纪的历史脉络，也很好地了解主要人物的成就。当朋友询问历史时，你能够回答的水平。",
      'zh-TW': "你在學生時代的歷史科目成績可能相當不錯。你很好地掌握了從古代到中世紀的歷史脈絡，也很好地了解主要人物的成就。當朋友詢問歷史時，你能夠回答的水平。",
      vi: "Bạn có lẽ đã có điểm số khá tốt trong môn lịch sử ở trường. Bạn nắm bắt tốt dòng chảy lịch sử từ thời cổ đại đến Trung cổ, và bạn cũng biết rõ các thành tựu của các nhân vật lớn. Bạn ở mức có thể trả lời khi bạn bè hỏi về lịch sử.",
      id: "Anda mungkin mendapat nilai yang cukup baik dalam pelajaran sejarah di sekolah. Anda memiliki pemahaman yang baik tentang alur sejarah dari zaman kuno hingga Abad Pertengahan, dan Anda juga mengetahui dengan baik pencapaian tokoh-tokoh utama. Anda berada pada tingkat yang dapat menjawab ketika teman-teman bertanya tentang sejarah."
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
      ko: "심화된 역사 서적 읽어보기.",
      en: "Read advanced history books.",
      ja: "深化された歴史書を読んでみる。",
      'zh-CN': "阅读深入的历史书籍。",
      'zh-TW': "閱讀深入的歷史書籍。",
      vi: "Đọc các cuốn sách lịch sử nâng cao.",
      id: "Baca buku sejarah yang lebih mendalam."
    }
  },
  {
    type: "Type5",
    emoji: "📚",
    title: {
      ko: "걸어 다니는 역사책, 역덕후 (History Geek)",
      en: "Walking History Book, History Geek",
      ja: "歩く歴史書、歴史オタク",
      'zh-CN': "行走的历史书，历史迷",
      'zh-TW': "行走的歷史書，歷史迷",
      vi: "Cuốn sách lịch sử biết đi, người đam mê lịch sử",
      id: "Buku Sejarah Berjalan, Penggemar Sejarah"
    },
    shortDescription: {
      ko: "\"역사는 반복된다... 통찰력이 대단해요!\"",
      en: "\"History repeats itself... Your insight is amazing!\"",
      ja: "「歴史は繰り返す...洞察力が素晴らしいですね！」",
      'zh-CN': "\"历史会重演...你的洞察力太棒了！\"",
      'zh-TW': "「歷史會重演...你的洞察力太棒了！」",
      vi: "\"Lịch sử lặp lại... Sự hiểu biết của bạn thật tuyệt vời!\"",
      id: "\"Sejarah berulang... Wawasan Anda luar biasa!\""
    },
    description: {
      ko: "당신은 역사를 단순 암기가 아닌, 인과 관계와 스토리로 이해하고 있습니다. 한니발 장군의 전술이나 비잔티움 제국의 흥망성쇠 같은 디테일한 지식도 갖추고 있군요. 당신과 함께 박물관에 가면 도슨트가 필요 없을 것 같습니다.",
      en: "You understand history not as simple memorization, but through cause-and-effect relationships and stories. You also have detailed knowledge like General Hannibal's tactics or the rise and fall of the Byzantine Empire. If you go to a museum together, you probably won't need a docent.",
      ja: "あなたは歴史を単純な暗記ではなく、因果関係とストーリーで理解しています。ハンニバル将軍の戦術やビザンツ帝国の興亡のような詳細な知識も備えていますね。あなたと一緒に博物館に行けば、ガイドが必要ないかもしれません。",
      'zh-CN': "你理解历史不是简单的记忆，而是通过因果关系和故事。你也拥有详细的知识，比如汉尼拔将军的战术或拜占庭帝国的兴衰。如果和你一起去博物馆，可能不需要讲解员。",
      'zh-TW': "你理解歷史不是簡單的記憶，而是通過因果關係和故事。你也擁有詳細的知識，比如漢尼拔將軍的戰術或拜占庭帝國的興衰。如果和你一起去博物館，可能不需要講解員。",
      vi: "Bạn hiểu lịch sử không phải là ghi nhớ đơn giản, mà thông qua các mối quan hệ nhân quả và câu chuyện. Bạn cũng có kiến thức chi tiết như chiến thuật của tướng Hannibal hay sự thịnh suy của Đế quốc Byzantine. Nếu đi cùng bạn đến bảo tàng, có lẽ sẽ không cần hướng dẫn viên.",
      id: "Anda memahami sejarah bukan sebagai hafalan sederhana, tetapi melalui hubungan sebab-akibat dan cerita. Anda juga memiliki pengetahuan detail seperti taktik Jenderal Hannibal atau naik turunnya Kekaisaran Bizantium. Jika pergi ke museum bersama Anda, mungkin tidak perlu pemandu."
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
      ko: "역사 관련 퀴즈 대회 나가기.",
      en: "Participate in history quiz competitions.",
      ja: "歴史関連のクイズ大会に出る。",
      'zh-CN': "参加历史相关的智力竞赛。",
      'zh-TW': "參加歷史相關的智力競賽。",
      vi: "Tham gia các cuộc thi đố vui về lịch sử.",
      id: "Ikuti kompetisi kuis sejarah."
    }
  },
  {
    type: "Type6",
    emoji: "🏛️",
    title: {
      ko: "시대를 초월한 현자, 마스터 오브 히스토리",
      en: "Transcendent Sage, Master of History",
      ja: "時代を超越した賢者、マスター・オブ・ヒストリー",
      'zh-CN': "超越时代的智者，历史大师",
      'zh-TW': "超越時代的智者，歷史大師",
      vi: "Bậc hiền triết vượt thời gian, Bậc thầy Lịch sử",
      id: "Bijak yang Melampaui Zaman, Master Sejarah"
    },
    shortDescription: {
      ko: "\"당신, 혹시 과거에서 오셨나요?\"",
      en: "\"Did you come from the past, perhaps?\"",
      ja: "「あなた、もしかして過去から来たのですか？」",
      'zh-CN': "\"你，是不是从过去来的？\"",
      'zh-TW': "「你，是不是從過去來的？」",
      vi: "\"Bạn, có phải đến từ quá khứ không?\"",
      id: "\"Apakah Anda datang dari masa lalu?\""
    },
    description: {
      ko: "축하합니다! 만점입니다. 당신은 고대와 중세를 넘나드는 방대한 지식을 소유하고 있습니다. 사소한 함정 문제들도 가볍게 피해 가는 당신의 능력은 존경스러울 정도입니다. 역사학자나 교수를 꿈꿔도 될 실력입니다.",
      en: "Congratulations! Perfect score. You possess vast knowledge spanning from ancient times to the Middle Ages. Your ability to easily avoid even minor trap questions is admirable. You have the skills to dream of becoming a historian or professor.",
      ja: "おめでとうございます！満点です。あなたは古代から中世を超える膨大な知識を持っています。些細な罠の問題も軽々と避けていくあなたの能力は尊敬に値します。歴史学者や教授を夢見てもいい実力です。",
      'zh-CN': "恭喜！满分。你拥有从古代到中世纪的广博知识。你轻松避开甚至微小陷阱问题的能力令人钦佩。你有能力梦想成为历史学家或教授。",
      'zh-TW': "恭喜！滿分。你擁有從古代到中世紀的廣博知識。你輕鬆避開甚至微小陷阱問題的能力令人欽佩。你有能力夢想成為歷史學家或教授。",
      vi: "Chúc mừng! Điểm tuyệt đối. Bạn sở hữu kiến thức rộng lớn trải dài từ thời cổ đại đến Trung cổ. Khả năng của bạn để dễ dàng tránh ngay cả những câu hỏi bẫy nhỏ là đáng ngưỡng mộ. Bạn có kỹ năng để mơ ước trở thành nhà sử học hoặc giáo sư.",
      id: "Selamat! Skor sempurna. Anda memiliki pengetahuan luas yang mencakup dari zaman kuno hingga Abad Pertengahan. Kemampuan Anda untuk dengan mudah menghindari bahkan pertanyaan jebakan kecil sangat mengagumkan. Anda memiliki keterampilan untuk bermimpi menjadi sejarawan atau profesor."
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
      ko: "이제 당신이 역사를 가르칠 차례입니다.",
      en: "Now it's your turn to teach history.",
      ja: "今度はあなたが歴史を教える番です。",
      'zh-CN': "现在轮到你教历史了。",
      'zh-TW': "現在輪到你教歷史了。",
      vi: "Bây giờ đến lượt bạn dạy lịch sử.",
      id: "Sekarang giliran Anda untuk mengajar sejarah."
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


