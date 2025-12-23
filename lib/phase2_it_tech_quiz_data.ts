export interface Phase2ItTechQuizQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
  }[];
  correctAnswer: number; // 0=A, 1=B, 2=C, 3=D
}

export interface Phase2ItTechQuizResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  correctCount: Record<string, string>; // "0 ~ 2개"
  itLevel: Record<string, string>; // "Lv. 1"
  recommendation: Record<string, string>; // 추천 내용
}

export const phase2ItTechQuizQuestions: Phase2ItTechQuizQuestion[] = [
  {
    id: 1,
    question: {
      ko: "[난이도 하] 아이폰, 아이패드, 맥북 등을 만든 미국의 IT 기업은?",
      en: "[Easy] Which US IT company makes iPhone, iPad, MacBook, etc.?",
      ja: "[難易度低] iPhone、iPad、MacBookなどを製造している米国のIT企業は？",
      'zh-CN': "[难度低] 制造iPhone、iPad、MacBook等的美国IT公司是？",
      'zh-TW': "[難度低] 製造iPhone、iPad、MacBook等的美國IT公司是？",
      vi: "[Dễ] Công ty IT Mỹ nào sản xuất iPhone, iPad, MacBook, v.v.?",
      id: "[Mudah] Perusahaan IT AS mana yang membuat iPhone, iPad, MacBook, dll.?"
    },
    options: [
      {
        text: {
          ko: "삼성전자 (Samsung)",
          en: "Samsung",
          ja: "サムスン電子",
          'zh-CN': "三星电子",
          'zh-TW': "三星電子",
          vi: "Samsung",
          id: "Samsung"
        }
      },
      {
        text: {
          ko: "애플 (Apple)",
          en: "Apple",
          ja: "アップル",
          'zh-CN': "苹果",
          'zh-TW': "蘋果",
          vi: "Apple",
          id: "Apple"
        }
      },
      {
        text: {
          ko: "마이크로소프트 (Microsoft)",
          en: "Microsoft",
          ja: "マイクロソフト",
          'zh-CN': "微软",
          'zh-TW': "微軟",
          vi: "Microsoft",
          id: "Microsoft"
        }
      },
      {
        text: {
          ko: "소니 (Sony)",
          en: "Sony",
          ja: "ソニー",
          'zh-CN': "索尼",
          'zh-TW': "索尼",
          vi: "Sony",
          id: "Sony"
        }
      }
    ],
    correctAnswer: 1 // B (애플)
  },
  {
    id: 2,
    question: {
      ko: "[난이도 하] 전 세계에서 가장 많이 쓰이는 PC 운영체제 '윈도우(Windows)'를 만든 회사는?",
      en: "[Easy] Which company created Windows, the most widely used PC operating system in the world?",
      ja: "[難易度低] 世界中で最も広く使われているPCオペレーティングシステム「Windows」を作った会社は？",
      'zh-CN': "[难度低] 创造了世界上使用最广泛的PC操作系统'Windows'的公司是？",
      'zh-TW': "[難度低] 創造了世界上使用最廣泛的PC作業系統「Windows」的公司是？",
      vi: "[Dễ] Công ty nào đã tạo ra Windows, hệ điều hành PC được sử dụng rộng rãi nhất thế giới?",
      id: "[Mudah] Perusahaan mana yang menciptakan Windows, sistem operasi PC yang paling banyak digunakan di dunia?"
    },
    options: [
      {
        text: {
          ko: "구글 (Google)",
          en: "Google",
          ja: "グーグル",
          'zh-CN': "谷歌",
          'zh-TW': "谷歌",
          vi: "Google",
          id: "Google"
        }
      },
      {
        text: {
          ko: "아마존 (Amazon)",
          en: "Amazon",
          ja: "アマゾン",
          'zh-CN': "亚马逊",
          'zh-TW': "亞馬遜",
          vi: "Amazon",
          id: "Amazon"
        }
      },
      {
        text: {
          ko: "마이크로소프트 (Microsoft)",
          en: "Microsoft",
          ja: "マイクロソフト",
          'zh-CN': "微软",
          'zh-TW': "微軟",
          vi: "Microsoft",
          id: "Microsoft"
        }
      },
      {
        text: {
          ko: "IBM",
          en: "IBM",
          ja: "IBM",
          'zh-CN': "IBM",
          'zh-TW': "IBM",
          vi: "IBM",
          id: "IBM"
        }
      }
    ],
    correctAnswer: 2 // C (마이크로소프트)
  },
  {
    id: 3,
    question: {
      ko: "[난이도 하] 페이스북(Facebook)이 사명을 변경했습니다. 인스타그램과 왓츠앱을 보유한 이 기업의 새로운 이름은?",
      en: "[Easy] Facebook changed its company name. What is the new name of this company that owns Instagram and WhatsApp?",
      ja: "[難易度低] Facebookが社名を変更しました。InstagramとWhatsAppを所有するこの企業の新しい名前は？",
      'zh-CN': "[难度低] Facebook更改了公司名称。拥有Instagram和WhatsApp的这家公司的新名称是？",
      'zh-TW': "[難度低] Facebook更改了公司名稱。擁有Instagram和WhatsApp的這家公司的新名稱是？",
      vi: "[Dễ] Facebook đã đổi tên công ty. Tên mới của công ty sở hữu Instagram và WhatsApp là gì?",
      id: "[Mudah] Facebook mengubah nama perusahaan. Apa nama baru perusahaan yang memiliki Instagram dan WhatsApp?"
    },
    options: [
      {
        text: {
          ko: "메타 (Meta)",
          en: "Meta",
          ja: "メタ",
          'zh-CN': "Meta",
          'zh-TW': "Meta",
          vi: "Meta",
          id: "Meta"
        }
      },
      {
        text: {
          ko: "알파벳 (Alphabet)",
          en: "Alphabet",
          ja: "アルファベット",
          'zh-CN': "Alphabet",
          'zh-TW': "Alphabet",
          vi: "Alphabet",
          id: "Alphabet"
        }
      },
      {
        text: {
          ko: "트위터 (Twitter)",
          en: "Twitter",
          ja: "ツイッター",
          'zh-CN': "Twitter",
          'zh-TW': "Twitter",
          vi: "Twitter",
          id: "Twitter"
        }
      },
      {
        text: {
          ko: "틱톡 (TikTok)",
          en: "TikTok",
          ja: "ティックトック",
          'zh-CN': "TikTok",
          'zh-TW': "TikTok",
          vi: "TikTok",
          id: "TikTok"
        }
      }
    ],
    correctAnswer: 0 // A (메타)
  },
  {
    id: 4,
    question: {
      ko: "[난이도 중] 세계 최대의 동영상 공유 플랫폼 '유튜브(YouTube)'를 소유한 모기업은?",
      en: "[Medium] Which parent company owns YouTube, the world's largest video sharing platform?",
      ja: "[難易度中] 世界最大の動画共有プラットフォーム「YouTube」を所有する親会社は？",
      'zh-CN': "[难度中] 拥有世界上最大的视频分享平台'YouTube'的母公司是？",
      'zh-TW': "[難度中] 擁有世界上最大的影片分享平台「YouTube」的母公司是？",
      vi: "[Trung bình] Công ty mẹ nào sở hữu YouTube, nền tảng chia sẻ video lớn nhất thế giới?",
      id: "[Sedang] Perusahaan induk mana yang memiliki YouTube, platform berbagi video terbesar di dunia?"
    },
    options: [
      {
        text: {
          ko: "넷플릭스 (Netflix)",
          en: "Netflix",
          ja: "ネットフリックス",
          'zh-CN': "Netflix",
          'zh-TW': "Netflix",
          vi: "Netflix",
          id: "Netflix"
        }
      },
      {
        text: {
          ko: "구글 (Google)",
          en: "Google",
          ja: "グーグル",
          'zh-CN': "谷歌",
          'zh-TW': "谷歌",
          vi: "Google",
          id: "Google"
        }
      },
      {
        text: {
          ko: "디즈니 (Disney)",
          en: "Disney",
          ja: "ディズニー",
          'zh-CN': "迪士尼",
          'zh-TW': "迪士尼",
          vi: "Disney",
          id: "Disney"
        }
      },
      {
        text: {
          ko: "애플 (Apple)",
          en: "Apple",
          ja: "アップル",
          'zh-CN': "苹果",
          'zh-TW': "蘋果",
          vi: "Apple",
          id: "Apple"
        }
      }
    ],
    correctAnswer: 1 // B (구글)
  },
  {
    id: 5,
    question: {
      ko: "[난이도 중] 전기차 회사 '테슬라(Tesla)'와 우주 탐사 기업 '스페이스X'를 이끄는 CEO는?",
      en: "[Medium] Who is the CEO leading the electric car company Tesla and the space exploration company SpaceX?",
      ja: "[難易度中] 電気自動車会社「テスラ」と宇宙探査企業「スペースX」を率いるCEOは？",
      'zh-CN': "[难度中] 领导电动汽车公司'特斯拉'和太空探索公司'SpaceX'的CEO是？",
      'zh-TW': "[難度中] 領導電動汽車公司「特斯拉」和太空探索公司「SpaceX」的CEO是？",
      vi: "[Trung bình] CEO nào đang lãnh đạo công ty xe điện Tesla và công ty khám phá vũ trụ SpaceX?",
      id: "[Sedang] Siapa CEO yang memimpin perusahaan mobil listrik Tesla dan perusahaan eksplorasi ruang angkasa SpaceX?"
    },
    options: [
      {
        text: {
          ko: "제프 베이조스",
          en: "Jeff Bezos",
          ja: "ジェフ・ベゾス",
          'zh-CN': "杰夫·贝索斯",
          'zh-TW': "傑夫·貝索斯",
          vi: "Jeff Bezos",
          id: "Jeff Bezos"
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
          ko: "팀 쿡",
          en: "Tim Cook",
          ja: "ティム・クック",
          'zh-CN': "蒂姆·库克",
          'zh-TW': "提姆·庫克",
          vi: "Tim Cook",
          id: "Tim Cook"
        }
      }
    ],
    correctAnswer: 2 // C (일론 머스크)
  },
  {
    id: 6,
    question: {
      ko: "[난이도 중] 2022년 등장하여 전 세계에 생성형 AI 열풍을 일으킨 대화형 인공지능 서비스의 이름은?",
      en: "[Medium] What is the name of the conversational AI service that appeared in 2022 and sparked a generative AI craze worldwide?",
      ja: "[難易度中] 2022年に登場し、世界中に生成AIブームを巻き起こした対話型人工知能サービスの名前は？",
      'zh-CN': "[难度中] 2022年出现并在全球引发生成式AI热潮的对话式人工智能服务名称是？",
      'zh-TW': "[難度中] 2022年出現並在全球引發生成式AI熱潮的對話式人工智慧服務名稱是？",
      vi: "[Trung bình] Tên dịch vụ AI đàm thoại xuất hiện năm 2022 và gây ra cơn sốt AI tạo sinh trên toàn thế giới là gì?",
      id: "[Sedang] Apa nama layanan AI percakapan yang muncul pada tahun 2022 dan memicu demam AI generatif di seluruh dunia?"
    },
    options: [
      {
        text: {
          ko: "알파고 (AlphaGo)",
          en: "AlphaGo",
          ja: "アルファ碁",
          'zh-CN': "AlphaGo",
          'zh-TW': "AlphaGo",
          vi: "AlphaGo",
          id: "AlphaGo"
        }
      },
      {
        text: {
          ko: "시리 (Siri)",
          en: "Siri",
          ja: "Siri",
          'zh-CN': "Siri",
          'zh-TW': "Siri",
          vi: "Siri",
          id: "Siri"
        }
      },
      {
        text: {
          ko: "챗GPT (ChatGPT)",
          en: "ChatGPT",
          ja: "ChatGPT",
          'zh-CN': "ChatGPT",
          'zh-TW': "ChatGPT",
          vi: "ChatGPT",
          id: "ChatGPT"
        }
      },
      {
        text: {
          ko: "빅스비 (Bixby)",
          en: "Bixby",
          ja: "Bixby",
          'zh-CN': "Bixby",
          'zh-TW': "Bixby",
          vi: "Bixby",
          id: "Bixby"
        }
      }
    ],
    correctAnswer: 2 // C (챗GPT)
  },
  {
    id: 7,
    question: {
      ko: "[난이도 상] '챗GPT'를 개발한 인공지능 연구소/기업의 이름은?",
      en: "[Hard] What is the name of the AI research lab/company that developed ChatGPT?",
      ja: "[難易度高] 「ChatGPT」を開発した人工知能研究所/企業の名前は？",
      'zh-CN': "[难度高] 开发'ChatGPT'的人工智能研究实验室/公司名称是？",
      'zh-TW': "[難度高] 開發「ChatGPT」的人工智慧研究實驗室/公司名稱是？",
      vi: "[Khó] Tên phòng thí nghiệm/công ty AI phát triển ChatGPT là gì?",
      id: "[Sulit] Apa nama laboratorium/perusahaan AI yang mengembangkan ChatGPT?"
    },
    options: [
      {
        text: {
          ko: "OpenAI (오픈AI)",
          en: "OpenAI",
          ja: "OpenAI",
          'zh-CN': "OpenAI",
          'zh-TW': "OpenAI",
          vi: "OpenAI",
          id: "OpenAI"
        }
      },
      {
        text: {
          ko: "DeepMind (딥마인드)",
          en: "DeepMind",
          ja: "DeepMind",
          'zh-CN': "DeepMind",
          'zh-TW': "DeepMind",
          vi: "DeepMind",
          id: "DeepMind"
        }
      },
      {
        text: {
          ko: "Boston Dynamics (보스턴 다이내믹스)",
          en: "Boston Dynamics",
          ja: "ボストン・ダイナミクス",
          'zh-CN': "Boston Dynamics",
          'zh-TW': "Boston Dynamics",
          vi: "Boston Dynamics",
          id: "Boston Dynamics"
        }
      },
      {
        text: {
          ko: "Nvidia (엔비디아)",
          en: "NVIDIA",
          ja: "NVIDIA",
          'zh-CN': "NVIDIA",
          'zh-TW': "NVIDIA",
          vi: "NVIDIA",
          id: "NVIDIA"
        }
      }
    ],
    correctAnswer: 0 // A (OpenAI)
  },
  {
    id: 8,
    question: {
      ko: "[난이도 상] 컴퓨터의 두뇌 역할을 하는 CPU 말고, AI 학습에 필수적인 그래픽 처리 장치(GPU) 시장을 장악한 기업은?",
      en: "[Hard] Which company dominates the GPU (Graphics Processing Unit) market, which is essential for AI training, aside from CPUs that act as the computer's brain?",
      ja: "[難易度高] コンピューターの頭脳として機能するCPU以外で、AI学習に不可欠なグラフィック処理装置（GPU）市場を支配している企業は？",
      'zh-CN': "[难度高] 除了作为计算机大脑的CPU外，主导AI训练所必需的图形处理设备(GPU)市场的公司是？",
      'zh-TW': "[難度高] 除了作為電腦大腦的CPU外，主導AI訓練所必需的圖形處理設備（GPU）市場的公司是？",
      vi: "[Khó] Công ty nào thống trị thị trường GPU (Bộ xử lý đồ họa), thiết bị thiết yếu cho việc huấn luyện AI, ngoài CPU đóng vai trò bộ não của máy tính?",
      id: "[Sulit] Perusahaan mana yang mendominasi pasar GPU (Graphics Processing Unit), yang penting untuk pelatihan AI, selain CPU yang berfungsi sebagai otak komputer?"
    },
    options: [
      {
        text: {
          ko: "인텔 (Intel)",
          en: "Intel",
          ja: "インテル",
          'zh-CN': "英特尔",
          'zh-TW': "英特爾",
          vi: "Intel",
          id: "Intel"
        }
      },
      {
        text: {
          ko: "엔비디아 (NVIDIA)",
          en: "NVIDIA",
          ja: "NVIDIA",
          'zh-CN': "NVIDIA",
          'zh-TW': "NVIDIA",
          vi: "NVIDIA",
          id: "NVIDIA"
        }
      },
      {
        text: {
          ko: "AMD",
          en: "AMD",
          ja: "AMD",
          'zh-CN': "AMD",
          'zh-TW': "AMD",
          vi: "AMD",
          id: "AMD"
        }
      },
      {
        text: {
          ko: "퀄컴 (Qualcomm)",
          en: "Qualcomm",
          ja: "クアルコム",
          'zh-CN': "高通",
          'zh-TW': "高通",
          vi: "Qualcomm",
          id: "Qualcomm"
        }
      }
    ],
    correctAnswer: 1 // B (엔비디아)
  },
  {
    id: 9,
    question: {
      ko: "[난이도 상] 스타트업 용어 중, 기업 가치가 10억 달러(약 1조 원) 이상인 비상장 스타트업을 부르는 말은?",
      en: "[Hard] In startup terminology, what is the term for an unlisted startup with a company value of $1 billion or more?",
      ja: "[難易度高] スタートアップ用語で、企業価値が10億ドル（約1兆円）以上の未上場スタートアップを指す言葉は？",
      'zh-CN': "[难度高] 在创业公司术语中，企业价值达到10亿美元（约1万亿韩元）以上的未上市创业公司被称为？",
      'zh-TW': "[難度高] 在創業公司術語中，企業價值達到10億美元（約1兆韓元）以上的未上市創業公司被稱為？",
      vi: "[Khó] Trong thuật ngữ khởi nghiệp, thuật ngữ chỉ công ty khởi nghiệp chưa niêm yết có giá trị công ty từ 1 tỷ USD trở lên là gì?",
      id: "[Sulit] Dalam terminologi startup, apa istilah untuk startup yang tidak terdaftar dengan nilai perusahaan $1 miliar atau lebih?"
    },
    options: [
      {
        text: {
          ko: "드래곤 (Dragon)",
          en: "Dragon",
          ja: "ドラゴン",
          'zh-CN': "Dragon",
          'zh-TW': "Dragon",
          vi: "Dragon",
          id: "Dragon"
        }
      },
      {
        text: {
          ko: "유니콘 (Unicorn)",
          en: "Unicorn",
          ja: "ユニコーン",
          'zh-CN': "Unicorn",
          'zh-TW': "Unicorn",
          vi: "Unicorn",
          id: "Unicorn"
        }
      },
      {
        text: {
          ko: "몬스터 (Monster)",
          en: "Monster",
          ja: "モンスター",
          'zh-CN': "Monster",
          'zh-TW': "Monster",
          vi: "Monster",
          id: "Monster"
        }
      },
      {
        text: {
          ko: "자이언트 (Giant)",
          en: "Giant",
          ja: "ジャイアント",
          'zh-CN': "Giant",
          'zh-TW': "Giant",
          vi: "Giant",
          id: "Giant"
        }
      }
    ],
    correctAnswer: 1 // B (유니콘)
  },
  {
    id: 10,
    question: {
      ko: "[난이도 최상] 인터넷 웹 브라우저가 웹 서버에 접속할 때 정보를 주고받기 위해 웹사이트가 사용자의 컴퓨터에 저장하는 작은 데이터 파일은?",
      en: "[Very Hard] What is the small data file that websites store on a user's computer to exchange information when a web browser connects to a web server?",
      ja: "[難易度最高] インターネットのウェブブラウザがウェブサーバーに接続する際、情報をやり取りするためにウェブサイトがユーザーのコンピューターに保存する小さなデータファイルは？",
      'zh-CN': "[难度最高] 当互联网网络浏览器连接到网络服务器时，网站为了交换信息而在用户计算机上存储的小数据文件是？",
      'zh-TW': "[難度最高] 當網際網路網頁瀏覽器連接到網頁伺服器時，網站為了交換資訊而在使用者電腦上儲存的小資料檔案是？",
      vi: "[Rất khó] Tệp dữ liệu nhỏ mà trang web lưu trên máy tính của người dùng để trao đổi thông tin khi trình duyệt web kết nối với máy chủ web là gì?",
      id: "[Sangat Sulit] Apa file data kecil yang disimpan situs web di komputer pengguna untuk bertukar informasi ketika browser web terhubung ke server web?"
    },
    options: [
      {
        text: {
          ko: "스팸 (Spam)",
          en: "Spam",
          ja: "スパム",
          'zh-CN': "Spam",
          'zh-TW': "Spam",
          vi: "Spam",
          id: "Spam"
        }
      },
      {
        text: {
          ko: "바이러스 (Virus)",
          en: "Virus",
          ja: "ウイルス",
          'zh-CN': "Virus",
          'zh-TW': "Virus",
          vi: "Virus",
          id: "Virus"
        }
      },
      {
        text: {
          ko: "쿠키 (Cookie)",
          en: "Cookie",
          ja: "クッキー",
          'zh-CN': "Cookie",
          'zh-TW': "Cookie",
          vi: "Cookie",
          id: "Cookie"
        }
      },
      {
        text: {
          ko: "버그 (Bug)",
          en: "Bug",
          ja: "バグ",
          'zh-CN': "Bug",
          'zh-TW': "Bug",
          vi: "Bug",
          id: "Bug"
        }
      }
    ],
    correctAnswer: 2 // C (쿠키)
  },
  {
    id: 11,
    question: {
      ko: "[난이도 최상] 반도체 위탁 생산(파운드리) 분야에서 세계 점유율 1위를 차지하고 있는 대만의 기업은?",
      en: "[Very Hard] Which Taiwanese company ranks first in global market share in the semiconductor foundry (contract manufacturing) sector?",
      ja: "[難易度最高] 半導体受託製造（ファウンドリ）分野で世界シェア1位を占めている台湾の企業は？",
      'zh-CN': "[难度最高] 在半导体代工(Foundry)领域占据全球市场份额第一位的台湾公司是？",
      'zh-TW': "[難度最高] 在半導體代工（Foundry）領域佔據全球市場份額第一位的台灣公司是？",
      vi: "[Rất khó] Công ty Đài Loan nào đứng đầu thị phần toàn cầu trong lĩnh vực sản xuất bán dẫn theo hợp đồng (foundry)?",
      id: "[Sangat Sulit] Perusahaan Taiwan mana yang menempati peringkat pertama dalam pangsa pasar global di sektor foundry (kontrak manufaktur) semikonduktor?"
    },
    options: [
      {
        text: {
          ko: "TSMC",
          en: "TSMC",
          ja: "TSMC",
          'zh-CN': "TSMC",
          'zh-TW': "TSMC",
          vi: "TSMC",
          id: "TSMC"
        }
      },
      {
        text: {
          ko: "UMC",
          en: "UMC",
          ja: "UMC",
          'zh-CN': "UMC",
          'zh-TW': "UMC",
          vi: "UMC",
          id: "UMC"
        }
      },
      {
        text: {
          ko: "삼성전자",
          en: "Samsung Electronics",
          ja: "サムスン電子",
          'zh-CN': "三星电子",
          'zh-TW': "三星電子",
          vi: "Samsung Electronics",
          id: "Samsung Electronics"
        }
      },
      {
        text: {
          ko: "글로벌파운드리",
          en: "GlobalFoundries",
          ja: "グローバルファウンドリーズ",
          'zh-CN': "GlobalFoundries",
          'zh-TW': "GlobalFoundries",
          vi: "GlobalFoundries",
          id: "GlobalFoundries"
        }
      }
    ],
    correctAnswer: 0 // A (TSMC)
  },
  {
    id: 12,
    question: {
      ko: "[난이도 최상] \"반도체 집적회로의 성능은 24개월마다 2배로 증가한다\"는 반도체 산업의 경험칙을 무엇이라 할까요?",
      en: "[Very Hard] What is the empirical rule in the semiconductor industry that states \"the performance of semiconductor integrated circuits doubles every 24 months\"?",
      ja: "[難易度最高] 「半導体集積回路の性能は24ヶ月ごとに2倍になる」という半導体産業の経験則を何と呼びますか？",
      'zh-CN': "[难度最高] 半导体行业的经验法则，即\"半导体集成电路的性能每24个月翻倍\"，这被称为什么？",
      'zh-TW': "[難度最高] 半導體行業的經驗法則，即「半導體積體電路的性能每24個月翻倍」，這被稱為什麼？",
      vi: "[Rất khó] Quy tắc thực nghiệm trong ngành bán dẫn nói rằng \"hiệu suất của mạch tích hợp bán dẫn tăng gấp đôi mỗi 24 tháng\" được gọi là gì?",
      id: "[Sangat Sulit] Apa aturan empiris dalam industri semikonduktor yang menyatakan \"kinerja sirkuit terintegrasi semikonduktor berlipat ganda setiap 24 bulan\"?"
    },
    options: [
      {
        text: {
          ko: "머피의 법칙",
          en: "Murphy's Law",
          ja: "マーフィーの法則",
          'zh-CN': "墨菲定律",
          'zh-TW': "墨菲定律",
          vi: "Định luật Murphy",
          id: "Hukum Murphy"
        }
      },
      {
        text: {
          ko: "무어의 법칙",
          en: "Moore's Law",
          ja: "ムーアの法則",
          'zh-CN': "摩尔定律",
          'zh-TW': "摩爾定律",
          vi: "Định luật Moore",
          id: "Hukum Moore"
        }
      },
      {
        text: {
          ko: "하인리히의 법칙",
          en: "Heinrich's Law",
          ja: "ハインリッヒの法則",
          'zh-CN': "海因里希法则",
          'zh-TW': "海因里希法則",
          vi: "Định luật Heinrich",
          id: "Hukum Heinrich"
        }
      },
      {
        text: {
          ko: "깨진 유리창의 법칙",
          en: "Broken Windows Theory",
          ja: "割れた窓の理論",
          'zh-CN': "破窗理论",
          'zh-TW': "破窗理論",
          vi: "Lý thuyết cửa sổ vỡ",
          id: "Teori Jendela Pecah"
        }
      }
    ],
    correctAnswer: 1 // B (무어의 법칙)
  }
];

export const phase2ItTechQuizResults: Phase2ItTechQuizResult[] = [
  {
    type: "Type1",
    emoji: "🗿",
    title: {
      ko: "2G폰 쓰는 자연인, 디지털 원시인",
      en: "2G Phone User, Digital Primitive",
      ja: "2G携帯を使う自然人、デジタル原始人",
      'zh-CN': "使用2G手机的自然人，数字原始人",
      'zh-TW': "使用2G手機的自然人，數位原始人",
      vi: "Người dùng điện thoại 2G, Người nguyên thủy số",
      id: "Pengguna Ponsel 2G, Primitif Digital"
    },
    shortDescription: {
      ko: "\"로그인이 뭐죠? 저는 아날로그가 좋아요.\"",
      en: "\"What's a login? I prefer analog.\"",
      ja: "「ログインって何？私はアナログが好きです。」",
      'zh-CN': "\"登录是什么？我喜欢模拟的。\"",
      'zh-TW': "「登入是什麼？我喜歡類比的。」",
      vi: "\"Đăng nhập là gì? Tôi thích analog hơn.\"",
      id: "\"Login itu apa? Saya lebih suka analog.\""
    },
    description: {
      ko: "당신은 IT 기기보다는 종이와 펜이 더 편한 타입입니다. 애플이 과일이 아니라 회사라는 건 알지만, 그 이상은 관심이 없습니다. 키오스크 주문이 두렵고, 스마트폰 기능의 10%도 못 쓰고 있을 확률이 높습니다. 하지만 디지털 디톡스가 필요 없는 평화로운 삶을 살고 계시네요.",
      en: "You prefer paper and pen over IT devices. You know Apple is a company, not a fruit, but beyond that, you're not interested. You're probably afraid of kiosk ordering and can't use even 10% of your smartphone's features. But you're living a peaceful life that doesn't require digital detox.",
      ja: "あなたはIT機器よりも紙とペンの方が快適なタイプです。Appleが果物ではなく会社だということは知っていますが、それ以上は興味がありません。キオスク注文が怖く、スマートフォンの機能の10%も使えていない可能性が高いです。しかし、デジタルデトックスが不要な平和な生活を送っていますね。",
      'zh-CN': "你更喜欢纸和笔而不是IT设备。你知道苹果是一家公司而不是水果，但除此之外，你没有兴趣。你可能害怕自助点餐，甚至无法使用智能手机10%的功能。但你过着不需要数字排毒的平静生活。",
      'zh-TW': "你更喜歡紙和筆而不是IT設備。你知道蘋果是一家公司而不是水果，但除此之外，你沒有興趣。你可能害怕自助點餐，甚至無法使用智慧型手機10%的功能。但你過著不需要數位排毒的平靜生活。",
      vi: "Bạn thích giấy và bút hơn thiết bị IT. Bạn biết Apple là công ty, không phải trái cây, nhưng ngoài ra, bạn không quan tâm. Bạn có thể sợ đặt hàng qua kiosk và không thể sử dụng thậm chí 10% chức năng điện thoại thông minh. Nhưng bạn đang sống một cuộc sống bình yên không cần giải độc kỹ thuật số.",
      id: "Anda lebih suka kertas dan pena daripada perangkat IT. Anda tahu Apple adalah perusahaan, bukan buah, tetapi selain itu, Anda tidak tertarik. Anda mungkin takut memesan melalui kios dan tidak bisa menggunakan bahkan 10% fitur smartphone Anda. Tapi Anda menjalani kehidupan yang damai yang tidak memerlukan detoks digital."
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
    itLevel: {
      ko: "Lv. 1",
      en: "Lv. 1",
      ja: "Lv. 1",
      'zh-CN': "Lv. 1",
      'zh-TW': "Lv. 1",
      vi: "Lv. 1",
      id: "Lv. 1"
    },
    recommendation: {
      ko: "스마트폰 활용 강좌 들어보기.",
      en: "Try taking a smartphone usage course.",
      ja: "スマートフォン活用講座を受けてみる。",
      'zh-CN': "尝试参加智能手机使用课程。",
      'zh-TW': "嘗試參加智慧型手機使用課程。",
      vi: "Thử tham gia khóa học sử dụng smartphone.",
      id: "Coba ikuti kursus penggunaan smartphone."
    }
  },
  {
    type: "Type2",
    emoji: "📱",
    title: {
      ko: "와이파이만 있으면 돼, 라이트 유저",
      en: "Just Need Wi-Fi, Light User",
      ja: "Wi-Fiさえあればいい、ライトユーザー",
      'zh-CN': "只要有Wi-Fi就行，轻度用户",
      'zh-TW': "只要有Wi-Fi就行，輕度用戶",
      vi: "Chỉ Cần Wi-Fi, Người Dùng Nhẹ",
      id: "Hanya Perlu Wi-Fi, Pengguna Ringan"
    },
    shortDescription: {
      ko: "\"유튜브랑 카톡만 되면 되는 거 아닌가요?\"",
      en: "\"Isn't YouTube and KakaoTalk enough?\"",
      ja: "「YouTubeとカカオトークだけでいいんじゃない？」",
      'zh-CN': "\"只要有YouTube和KakaoTalk不就行了吗？\"",
      'zh-TW': "「只要有YouTube和KakaoTalk不就行了嗎？」",
      vi: "\"YouTube và KakaoTalk là đủ rồi phải không?\"",
      id: "\"Bukankah YouTube dan KakaoTalk sudah cukup?\""
    },
    description: {
      ko: "당신은 현대인으로서 살아가기에 딱 필요한 만큼의 지식만 가지고 있습니다. 유명한 기업 이름 정도는 들어봤지만, CEO가 누구인지나 구체적인 기술 용어는 잘 모릅니다. 기계가 고장 나면 껐다 켜는 게 유일한 해결책인 당신, 조금만 더 관심을 가져볼까요?",
      en: "You have just enough knowledge to get by as a modern person. You've heard of famous company names, but you don't know who the CEOs are or specific technical terms. When a machine breaks down, turning it off and on is your only solution. How about showing a bit more interest?",
      ja: "あなたは現代人として生きていくのに必要なだけの知識を持っています。有名な企業名は聞いたことがありますが、CEOが誰かや具体的な技術用語はよく知りません。機械が故障したら、電源を切って入れ直すのが唯一の解決策です。もう少し興味を持ってみませんか？",
      'zh-CN': "你拥有作为现代人生活所需的知识。你听说过一些知名公司名称，但不知道CEO是谁或具体的技术术语。当机器出现故障时，重启是你唯一的解决方案。要不要多关注一点？",
      'zh-TW': "你擁有作為現代人生活所需的知識。你聽說過一些知名公司名稱，但不知道CEO是誰或具體的技術術語。當機器出現故障時，重啟是你唯一的解決方案。要不要多關注一點？",
      vi: "Bạn có đủ kiến thức để sống như một người hiện đại. Bạn đã nghe tên các công ty nổi tiếng, nhưng không biết CEO là ai hoặc các thuật ngữ kỹ thuật cụ thể. Khi máy hỏng, tắt và bật lại là giải pháp duy nhất của bạn. Bạn có muốn quan tâm thêm một chút không?",
      id: "Anda memiliki cukup pengetahuan untuk hidup sebagai orang modern. Anda pernah mendengar nama perusahaan terkenal, tetapi tidak tahu siapa CEO-nya atau istilah teknis spesifik. Ketika mesin rusak, mematikan dan menyalakan kembali adalah satu-satunya solusi Anda. Bagaimana kalau menunjukkan sedikit lebih banyak minat?"
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
    itLevel: {
      ko: "Lv. 10",
      en: "Lv. 10",
      ja: "Lv. 10",
      'zh-CN': "Lv. 10",
      'zh-TW': "Lv. 10",
      vi: "Lv. 10",
      id: "Lv. 10"
    },
    recommendation: {
      ko: "IT 뉴스 헤드라인 읽어보기.",
      en: "Read IT news headlines.",
      ja: "ITニュースの見出しを読む。",
      'zh-CN': "阅读IT新闻标题。",
      'zh-TW': "閱讀IT新聞標題。",
      vi: "Đọc tiêu đề tin tức IT.",
      id: "Baca headline berita IT."
    }
  },
  {
    type: "Type3",
    emoji: "💻",
    title: {
      ko: "검색 능력자, 스마트 컨슈머",
      en: "Search Expert, Smart Consumer",
      ja: "検索能力者、スマートコンシューマー",
      'zh-CN': "搜索能力者，智能消费者",
      'zh-TW': "搜尋能力者，智慧消費者",
      vi: "Chuyên Gia Tìm Kiếm, Người Tiêu Dùng Thông Minh",
      id: "Ahli Pencarian, Konsumen Cerdas"
    },
    shortDescription: {
      ko: "\"가성비 좋은 전자기기는 다 꿰뚫고 있죠.\"",
      en: "\"I know all the best value electronics.\"",
      ja: "「コスパの良い電子機器は全部把握してますよ。」",
      'zh-CN': "\"性价比好的电子产品我都了如指掌。\"",
      'zh-TW': "「性價比好的電子產品我都了如指掌。」",
      vi: "\"Tôi biết tất cả các thiết bị điện tử có giá trị tốt.\"",
      id: "\"Saya tahu semua elektronik dengan nilai terbaik.\""
    },
    description: {
      ko: "당신은 IT 트렌드에 뒤처지지 않는 평균 이상의 상식을 가졌습니다. 챗GPT가 뭔지 알고 있고, 새로운 어플이 나오면 한 번쯤 써보기도 합니다. 전자기기를 살 때 스펙을 비교할 줄 아는 현명한 소비자입니다. 어디 가서 \"컴맹\" 소리는 절대 듣지 않겠네요.",
      en: "You have above-average common sense and keep up with IT trends. You know what ChatGPT is and try out new apps when they come out. You're a smart consumer who can compare specs when buying electronics. You'll never be called \"tech-illiterate\" anywhere.",
      ja: "あなたはITトレンドに遅れを取らない平均以上の常識を持っています。ChatGPTが何か知っていて、新しいアプリが出たら試してみることもあります。電子機器を買うときにスペックを比較できる賢い消費者です。どこに行っても「コンピューター音痴」とは呼ばれません。",
      'zh-CN': "你拥有高于平均水平的常识，不会落后于IT趋势。你知道ChatGPT是什么，新应用出现时会尝试。你是购买电子产品时能够比较规格的聪明消费者。无论走到哪里，你都不会被称为\"电脑盲\"。",
      'zh-TW': "你擁有高於平均水準的常識，不會落後於IT趨勢。你知道ChatGPT是什麼，新應用出現時會嘗試。你是購買電子產品時能夠比較規格的聰明消費者。無論走到哪裡，你都不會被稱為「電腦盲」。",
      vi: "Bạn có kiến thức thông thường trên mức trung bình và theo kịp xu hướng IT. Bạn biết ChatGPT là gì và thử các ứng dụng mới khi chúng ra mắt. Bạn là người tiêu dùng thông minh có thể so sánh thông số kỹ thuật khi mua thiết bị điện tử. Bạn sẽ không bao giờ bị gọi là \"mù công nghệ\" ở bất cứ đâu.",
      id: "Anda memiliki akal sehat di atas rata-rata dan mengikuti tren IT. Anda tahu apa itu ChatGPT dan mencoba aplikasi baru ketika mereka keluar. Anda adalah konsumen yang cerdas yang dapat membandingkan spesifikasi saat membeli elektronik. Anda tidak akan pernah disebut \"buta teknologi\" di mana pun."
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
    itLevel: {
      ko: "Lv. 40",
      en: "Lv. 40",
      ja: "Lv. 40",
      'zh-CN': "Lv. 40",
      'zh-TW': "Lv. 40",
      vi: "Lv. 40",
      id: "Lv. 40"
    },
    recommendation: {
      ko: "코딩 기초 배워보기.",
      en: "Learn the basics of coding.",
      ja: "コーディングの基礎を学ぶ。",
      'zh-CN': "学习编程基础。",
      'zh-TW': "學習程式設計基礎。",
      vi: "Học những điều cơ bản về lập trình.",
      id: "Pelajari dasar-dasar coding."
    }
  },
  {
    type: "Type4",
    emoji: "🎧",
    title: {
      ko: "얼리어답터, 테크 리뷰어",
      en: "Early Adopter, Tech Reviewer",
      ja: "アーリーアダプター、テックレビュアー",
      'zh-CN': "早期采用者，科技评论员",
      'zh-TW': "早期採用者，科技評論員",
      vi: "Người Dùng Sớm, Người Đánh Giá Công Nghệ",
      id: "Early Adopter, Reviewer Teknologi"
    },
    shortDescription: {
      ko: "\"신상 기기는 못 참지! 스펙 줄줄 꿸 수 있어요.\"",
      en: "\"I can't resist new devices! I can rattle off all the specs.\"",
      ja: "「新商品の機器は我慢できない！スペックを次々と暗唱できますよ。」",
      'zh-CN': "\"新设备我忍不住！我可以滔滔不绝地说出所有规格。\"",
      'zh-TW': "「新設備我忍不住！我可以滔滔不絕地說出所有規格。」",
      vi: "\"Tôi không thể cưỡng lại thiết bị mới! Tôi có thể đọc vanh vách tất cả các thông số kỹ thuật.\"",
      id: "\"Saya tidak bisa menahan perangkat baru! Saya bisa menyebutkan semua spesifikasinya.\""
    },
    description: {
      ko: "당신은 IT 분야에 상당한 관심과 지식을 가지고 있습니다. 엔비디아나 TSMC 같은 기업의 중요성을 알고 있으며, 친구들이 노트북이나 폰을 살 때 조언을 구하는 대상입니다. 새로운 기술이 나오면 누구보다 먼저 경험해보고 싶어 하는 호기심 대장입니다.",
      en: "You have considerable interest and knowledge in the IT field. You understand the importance of companies like NVIDIA and TSMC, and friends come to you for advice when buying laptops or phones. You're a curiosity leader who wants to experience new technologies before anyone else.",
      ja: "あなたはIT分野にかなりの関心と知識を持っています。NVIDIAやTSMCのような企業の重要性を理解しており、友人がノートパソコンやスマートフォンを買うときにアドバイスを求める対象です。新しい技術が出ると、誰よりも先に体験したい好奇心のリーダーです。",
      'zh-CN': "你对IT领域有相当大的兴趣和知识。你了解NVIDIA和TSMC等公司的重要性，朋友们在购买笔记本电脑或手机时会向你寻求建议。你是一个好奇心领袖，想要比任何人都先体验新技术。",
      'zh-TW': "你對IT領域有相當大的興趣和知識。你了解NVIDIA和TSMC等公司的重要性，朋友們在購買筆記型電腦或手機時會向你尋求建議。你是一個好奇心領袖，想要比任何人都先體驗新技術。",
      vi: "Bạn có sự quan tâm và kiến thức đáng kể trong lĩnh vực IT. Bạn hiểu tầm quan trọng của các công ty như NVIDIA và TSMC, và bạn bè đến hỏi ý kiến bạn khi mua laptop hoặc điện thoại. Bạn là người dẫn đầu tò mò muốn trải nghiệm công nghệ mới trước bất kỳ ai khác.",
      id: "Anda memiliki minat dan pengetahuan yang cukup besar di bidang IT. Anda memahami pentingnya perusahaan seperti NVIDIA dan TSMC, dan teman-teman datang kepada Anda untuk meminta saran saat membeli laptop atau ponsel. Anda adalah pemimpin rasa ingin tahu yang ingin mengalami teknologi baru sebelum siapa pun."
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
    itLevel: {
      ko: "Lv. 70",
      en: "Lv. 70",
      ja: "Lv. 70",
      'zh-CN': "Lv. 70",
      'zh-TW': "Lv. 70",
      vi: "Lv. 70",
      id: "Lv. 70"
    },
    recommendation: {
      ko: "테크 블로그나 유튜브 시작하기.",
      en: "Start a tech blog or YouTube channel.",
      ja: "テックブログやYouTubeを始める。",
      'zh-CN': "开始写科技博客或YouTube频道。",
      'zh-TW': "開始寫科技部落格或YouTube頻道。",
      vi: "Bắt đầu blog công nghệ hoặc kênh YouTube.",
      id: "Mulai blog teknologi atau saluran YouTube."
    }
  },
  {
    type: "Type5",
    emoji: "🏢",
    title: {
      ko: "판교의 등불, IT 현직자 포스",
      en: "Pangyo's Light, IT Professional Aura",
      ja: "パンギョの灯、IT現職者のオーラ",
      'zh-CN': "板桥之光，IT从业者气场",
      'zh-TW': "板橋之光，IT從業者氣場",
      vi: "Ánh Sáng Pangyo, Khí Chất Chuyên Gia IT",
      id: "Cahaya Pangyo, Aura Profesional IT"
    },
    shortDescription: {
      ko: "\"이건 업계 상식 아닌가요? (안경 척)\"",
      en: "\"Isn't this common knowledge in the industry? (adjusts glasses)\"",
      ja: "「これは業界の常識じゃないですか？（メガネを押し上げる）」",
      'zh-CN': "\"这不是行业常识吗？（推眼镜）\"",
      'zh-TW': "「這不是行業常識嗎？（推眼鏡）」",
      vi: "\"Đây không phải là kiến thức thông thường trong ngành sao? (điều chỉnh kính)\"",
      id: "\"Bukankah ini pengetahuan umum di industri? (menyesuaikan kacamata)\""
    },
    description: {
      ko: "당신은 IT 생태계의 흐름을 정확히 파악하고 있습니다. 유니콘 기업의 정의나 반도체 시장 상황까지 알고 있는 당신은 관련 전공자이거나 현직 개발자일 가능성이 높습니다. 전문적인 대화가 통하는 뇌섹남/뇌섹녀입니다.",
      en: "You accurately understand the flow of the IT ecosystem. You know the definition of unicorn companies and even the semiconductor market situation. You're likely a related major or a current developer. You're a brainy person who can have professional conversations.",
      ja: "あなたはITエコシステムの流れを正確に把握しています。ユニコーン企業の定義や半導体市場の状況まで知っているあなたは、関連専攻者または現職開発者である可能性が高いです。専門的な会話が通じる脳セク男/脳セク女です。",
      'zh-CN': "你准确地把握了IT生态系统的流动。你知道独角兽公司的定义，甚至了解半导体市场情况。你很可能是相关专业或现任开发者。你是一个能够进行专业对话的聪明人。",
      'zh-TW': "你準確地把握了IT生態系統的流動。你知道獨角獸公司的定義，甚至了解半導體市場情況。你很可能是相關專業或現任開發者。你是一個能夠進行專業對話的聰明人。",
      vi: "Bạn hiểu chính xác dòng chảy của hệ sinh thái IT. Bạn biết định nghĩa của các công ty kỳ lân và thậm chí cả tình hình thị trường bán dẫn. Bạn có khả năng là chuyên ngành liên quan hoặc nhà phát triển hiện tại. Bạn là người thông minh có thể trò chuyện chuyên nghiệp.",
      id: "Anda memahami alur ekosistem IT dengan akurat. Anda tahu definisi perusahaan unicorn dan bahkan situasi pasar semikonduktor. Anda kemungkinan besar adalah jurusan terkait atau pengembang saat ini. Anda adalah orang yang cerdas yang dapat melakukan percakapan profesional."
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
    itLevel: {
      ko: "Lv. 90",
      en: "Lv. 90",
      ja: "Lv. 90",
      'zh-CN': "Lv. 90",
      'zh-TW': "Lv. 90",
      vi: "Lv. 90",
      id: "Lv. 90"
    },
    recommendation: {
      ko: "IT 관련 주식 투자 분석하기.",
      en: "Analyze IT-related stock investments.",
      ja: "IT関連株式投資を分析する。",
      'zh-CN': "分析IT相关股票投资。",
      'zh-TW': "分析IT相關股票投資。",
      vi: "Phân tích đầu tư cổ phiếu liên quan đến IT.",
      id: "Analisis investasi saham terkait IT."
    }
  },
  {
    type: "Type6",
    emoji: "🤖",
    title: {
      ko: "22세기에서 온 미래인, 특이점 도달자",
      en: "Future Person from the 22nd Century, Singularity Reacher",
      ja: "22世紀から来た未来人、特異点到達者",
      'zh-CN': "来自22世纪的未来人，奇点达成者",
      'zh-TW': "來自22世紀的未來人，奇點達成者",
      vi: "Người Tương Lai Từ Thế Kỷ 22, Người Đạt Điểm Kỳ Dị",
      id: "Orang Masa Depan dari Abad ke-22, Pencapai Singularitas"
    },
    shortDescription: {
      ko: "\"AI와 대화하는 게 사람보다 편해요.\"",
      en: "\"Talking to AI is more comfortable than talking to people.\"",
      ja: "「AIと話す方が人より楽です。」",
      'zh-CN': "\"与AI对话比与人对话更舒适。\"",
      'zh-TW': "「與AI對話比與人對話更舒適。」",
      vi: "\"Nói chuyện với AI thoải mái hơn nói chuyện với con người.\"",
      id: "\"Berbicara dengan AI lebih nyaman daripada berbicara dengan orang.\""
    },
    description: {
      ko: "축하합니다! 만점입니다. 당신은 IT/테크 분야의 걸어 다니는 백과사전입니다. 무어의 법칙 같은 전문 용어는 물론, 글로벌 빅테크 기업의 계보를 완벽하게 꿰뚫고 있습니다. 미래 기술이 가져올 변화를 예측할 수 있는 통찰력까지 갖춘 당신은 진정한 마스터입니다.",
      en: "Congratulations! Perfect score. You're a walking encyclopedia in the IT/tech field. You perfectly understand professional terms like Moore's Law, as well as the lineage of global big tech companies. You're a true master with the insight to predict the changes that future technologies will bring.",
      ja: "おめでとうございます！満点です。あなたはIT/テック分野の歩く百科事典です。ムーアの法則のような専門用語はもちろん、グローバルビッグテック企業の系譜を完璧に把握しています。未来技術がもたらす変化を予測できる洞察力まで備えたあなたは真のマスターです。",
      'zh-CN': "恭喜！满分。你是IT/科技领域的活百科全书。你完美理解像摩尔定律这样的专业术语，以及全球大型科技公司的谱系。你是一位真正的大师，拥有预测未来技术将带来变化的洞察力。",
      'zh-TW': "恭喜！滿分。你是IT/科技領域的活百科全書。你完美理解像摩爾定律這樣的專業術語，以及全球大型科技公司的譜系。你是一位真正的大師，擁有預測未來技術將帶來變化的洞察力。",
      vi: "Chúc mừng! Điểm tuyệt đối. Bạn là một bách khoa toàn thư biết đi trong lĩnh vực IT/công nghệ. Bạn hiểu hoàn hảo các thuật ngữ chuyên nghiệp như Định luật Moore, cũng như dòng dõi của các công ty công nghệ lớn toàn cầu. Bạn là một bậc thầy thực sự với khả năng dự đoán những thay đổi mà công nghệ tương lai sẽ mang lại.",
      id: "Selamat! Skor sempurna. Anda adalah ensiklopedia berjalan di bidang IT/teknologi. Anda memahami dengan sempurna istilah-istilah profesional seperti Hukum Moore, serta garis keturunan perusahaan teknologi besar global. Anda adalah master sejati dengan wawasan untuk memprediksi perubahan yang akan dibawa oleh teknologi masa depan."
    },
    correctCount: {
      ko: "12개 (만점)",
      en: "12 (Perfect Score)",
      ja: "12個（満点）",
      'zh-CN': "12个（满分）",
      'zh-TW': "12個（滿分）",
      vi: "12 (Điểm Tuyệt Đối)",
      id: "12 (Skor Sempurna)"
    },
    itLevel: {
      ko: "Lv. 99 (MAX)",
      en: "Lv. 99 (MAX)",
      ja: "Lv. 99 (MAX)",
      'zh-CN': "Lv. 99 (MAX)",
      'zh-TW': "Lv. 99 (MAX)",
      vi: "Lv. 99 (MAX)",
      id: "Lv. 99 (MAX)"
    },
    recommendation: {
      ko: "직접 스타트업 창업하기.",
      en: "Start your own startup.",
      ja: "自分でスタートアップを創業する。",
      'zh-CN': "自己创办创业公司。",
      'zh-TW': "自己創辦創業公司。",
      vi: "Tự mình khởi nghiệp startup.",
      id: "Mulai startup Anda sendiri."
    }
  }
];

export function calculatePhase2ItTechQuizResult(answers: Record<number, number>, questions: Phase2ItTechQuizQuestion[]): string {
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



