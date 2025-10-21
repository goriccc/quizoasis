export interface CareerQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface CareerResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  strengths: Record<string, string>[];
  fields: Record<string, string>[];
  jobs: Record<string, string>;
}

export const careerQuestions: CareerQuestion[] = [
  {
    id: 1,
    question: {
      ko: "학창 시절 가장 좋아했던 과목은?",
      en: "What was your favorite subject in school?",
      ja: "学生時代に最も好きだった科目は？",
      'zh-CN': "学生时代最喜欢的科目是？",
      'zh-TW': "學生時代最喜歡的科目是？",
      id: "Mata pelajaran apa yang paling Anda sukai saat sekolah?",
      vi: "Môn học nào bạn thích nhất thời học sinh?"
    },
    options: [
      {
        text: {
          ko: "미술, 음악 같은 예술 과목",
          en: "Art subjects like art, music",
          ja: "美術、音楽などの芸術科目",
          'zh-CN': "美术、音乐等艺术科目",
          'zh-TW': "美術、音樂等藝術科目",
          id: "Mata pelajaran seni seperti seni rupa, musik",
          vi: "Các môn nghệ thuật như mỹ thuật, âm nhạc"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "수학, 과학 같은 이과 과목",
          en: "Science subjects like math, science",
          ja: "数学、理科などの理系科目",
          'zh-CN': "数学、科学等理科科目",
          'zh-TW': "數學、科學等理科科目",
          id: "Mata pelajaran sains seperti matematika, IPA",
          vi: "Các môn khoa học như toán, khoa học"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "국어, 사회 같은 문과 과목",
          en: "Liberal arts subjects like language, social studies",
          ja: "国語、社会などの文系科目",
          'zh-CN': "语文、社会等文科科目",
          'zh-TW': "語文、社會等文科科目",
          id: "Mata pelajaran bahasa dan sosial",
          vi: "Các môn xã hội như ngữ văn, xã hội học"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "리더십이 필요한 학생회 활동",
          en: "Student council activities requiring leadership",
          ja: "リーダーシップが必要な生徒会活動",
          'zh-CN': "需要领导力的学生会活动",
          'zh-TW': "需要領導力的學生會活動",
          id: "Kegiatan OSIS yang memerlukan kepemimpinan",
          vi: "Hoạt động hội học sinh cần lãnh đạo"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "자유 시간에 주로 무엇을 하나요?",
      en: "What do you mainly do in your free time?",
      ja: "自由時間に主に何をしますか？",
      'zh-CN': "空闲时间主要做什么？",
      'zh-TW': "空閒時間主要做什麼？",
      id: "Apa yang biasanya Anda lakukan di waktu luang?",
      vi: "Bạn thường làm gì trong thời gian rảnh?"
    },
    options: [
      {
        text: {
          ko: "그림 그리기, 글쓰기, 만들기",
          en: "Drawing, writing, making things",
          ja: "絵を描く、文章を書く、物を作る",
          'zh-CN': "画画、写作、制作",
          'zh-TW': "畫畫、寫作、製作",
          id: "Menggambar, menulis, membuat sesuatu",
          vi: "Vẽ, viết, làm đồ thủ công"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "책 읽기, 자료 조사, 분석하기",
          en: "Reading books, researching, analyzing",
          ja: "読書、資料調査、分析",
          'zh-CN': "读书、资料调查、分析",
          'zh-TW': "讀書、資料調查、分析",
          id: "Membaca buku, riset, menganalisis",
          vi: "Đọc sách, nghiên cứu, phân tích"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "친구 만나기, 대화하기, 모임 참여",
          en: "Meeting friends, talking, participating in gatherings",
          ja: "友達に会う、話す、集まりに参加",
          'zh-CN': "见朋友、聊天、参加聚会",
          'zh-TW': "見朋友、聊天、參加聚會",
          id: "Bertemu teman, mengobrol, ikut pertemuan",
          vi: "Gặp bạn bè, trò chuyện, tham gia họp mặt"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "계획 세우기, 목표 달성하기",
          en: "Making plans, achieving goals",
          ja: "計画を立てる、目標達成",
          'zh-CN': "制定计划、实现目标",
          'zh-TW': "制定計劃、實現目標",
          id: "Membuat rencana, mencapai tujuan",
          vi: "Lập kế hoạch, đạt mục tiêu"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "팀 프로젝트에서 당신의 역할은?",
      en: "What is your role in team projects?",
      ja: "チームプロジェクトでのあなたの役割は？",
      'zh-CN': "在团队项目中你的角色是？",
      'zh-TW': "在團隊項目中你的角色是？",
      id: "Apa peran Anda dalam proyek tim?",
      vi: "Vai trò của bạn trong dự án nhóm là gì?"
    },
    options: [
      {
        text: {
          ko: "창의적인 아이디어 내는 사람",
          en: "The person who comes up with creative ideas",
          ja: "創造的なアイデアを出す人",
          'zh-CN': "提出创意想法的人",
          'zh-TW': "提出創意想法的人",
          id: "Orang yang memberikan ide kreatif",
          vi: "Người đưa ra ý tưởng sáng tạo"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "자료 조사하고 분석하는 사람",
          en: "The person who researches and analyzes data",
          ja: "資料を調査し分析する人",
          'zh-CN': "调查和分析资料的人",
          'zh-TW': "調查和分析資料的人",
          id: "Orang yang meneliti dan menganalisis data",
          vi: "Người nghiên cứu và phân tích dữ liệu"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "의견 조율하고 소통하는 사람",
          en: "The person who coordinates opinions and communicates",
          ja: "意見を調整しコミュニケーションを取る人",
          'zh-CN': "协调意见和沟通的人",
          'zh-TW': "協調意見和溝通的人",
          id: "Orang yang mengoordinasi pendapat dan berkomunikasi",
          vi: "Người điều phối ý kiến và giao tiếp"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "전체 계획하고 이끄는 리더",
          en: "The leader who plans overall and leads",
          ja: "全体を計画し導くリーダー",
          'zh-CN': "整体规划并领导的领导者",
          'zh-TW': "整體規劃並領導的領導者",
          id: "Pemimpin yang merencanakan keseluruhan dan memimpin",
          vi: "Người lãnh đạo lập kế hoạch tổng thể và dẫn dắt"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "가장 자신있는 능력은?",
      en: "What is your most confident ability?",
      ja: "最も自信のある能力は？",
      'zh-CN': "最有信心的能力是？",
      'zh-TW': "最有信心的能力是？",
      id: "Kemampuan apa yang paling Anda percayai?",
      vi: "Khả năng nào bạn tự tin nhất?"
    },
    options: [
      {
        text: {
          ko: "창의력과 상상력",
          en: "Creativity and imagination",
          ja: "創造力と想像力",
          'zh-CN': "创造力和想象力",
          'zh-TW': "創造力和想像力",
          id: "Kreativitas dan imajinasi",
          vi: "Sáng tạo và trí tưởng tượng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "논리력과 분석력",
          en: "Logic and analytical skills",
          ja: "論理力と分析力",
          'zh-CN': "逻辑力和分析力",
          'zh-TW': "邏輯力和分析力",
          id: "Logika dan kemampuan analisis",
          vi: "Logic và khả năng phân tích"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "공감력과 소통 능력",
          en: "Empathy and communication skills",
          ja: "共感力とコミュニケーション能力",
          'zh-CN': "共情力和沟通能力",
          'zh-TW': "共情力和溝通能力",
          id: "Empati dan kemampuan komunikasi",
          vi: "Đồng cảm và kỹ năng giao tiếp"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "리더십과 기획력",
          en: "Leadership and planning skills",
          ja: "リーダーシップと企画力",
          'zh-CN': "领导力和策划力",
          'zh-TW': "領導力和策劃力",
          id: "Kepemimpinan dan kemampuan perencanaan",
          vi: "Lãnh đạo và kỹ năng lập kế hoạch"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "일할 때 가장 중요한 것은?",
      en: "What is most important when working?",
      ja: "仕事をする時最も重要なことは？",
      'zh-CN': "工作时最重要的是什么？",
      'zh-TW': "工作時最重要的是什麼？",
      id: "Apa yang paling penting saat bekerja?",
      vi: "Điều gì quan trọng nhất khi làm việc?"
    },
    options: [
      {
        text: {
          ko: "창의적으로 표현할 수 있는 것",
          en: "Being able to express creatively",
          ja: "創造的に表現できること",
          'zh-CN': "能够创造性表达",
          'zh-TW': "能夠創造性表達",
          id: "Bisa mengekspresikan secara kreatif",
          vi: "Có thể thể hiện sáng tạo"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "정확하고 체계적인 것",
          en: "Being accurate and systematic",
          ja: "正確で体系的なこと",
          'zh-CN': "准确和系统化",
          'zh-TW': "準確和系統化",
          id: "Akurat dan sistematis",
          vi: "Chính xác và có hệ thống"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "사람들에게 도움이 되는 것",
          en: "Being helpful to people",
          ja: "人々の役に立つこと",
          'zh-CN': "对人们有帮助",
          'zh-TW': "對人們有幫助",
          id: "Membantu orang lain",
          vi: "Hữu ích cho mọi người"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "목표를 달성하고 성과를 내는 것",
          en: "Achieving goals and producing results",
          ja: "目標を達成し成果を出すこと",
          'zh-CN': "实现目标和产生成果",
          'zh-TW': "實現目標和產生成果",
          id: "Mencapai tujuan dan menghasilkan hasil",
          vi: "Đạt mục tiêu và tạo kết quả"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "이상적인 근무 환경은?",
      en: "What is your ideal work environment?",
      ja: "理想的な職場環境は？",
      'zh-CN': "理想的工作环境是？",
      'zh-TW': "理想的工作環境是？",
      id: "Lingkungan kerja ideal Anda adalah?",
      vi: "Môi trường làm việc lý tưởng của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "자유롭고 창의적인 분위기",
          en: "Free and creative atmosphere",
          ja: "自由で創造的な雰囲気",
          'zh-CN': "自由和创造性的氛围",
          'zh-TW': "自由和創造性的氛圍",
          id: "Suasana bebas dan kreatif",
          vi: "Không khí tự do và sáng tạo"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "조용하고 집중할 수 있는 곳",
          en: "Quiet place where you can focus",
          ja: "静かで集中できる場所",
          'zh-CN': "安静可以专注的地方",
          'zh-TW': "安靜可以專注的地方",
          id: "Tempat tenang untuk fokus",
          vi: "Nơi yên tĩnh có thể tập trung"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "사람들과 협업하는 활기찬 곳",
          en: "Lively place for collaboration with people",
          ja: "人々と協力する活気のある場所",
          'zh-CN': "与人协作的热闹地方",
          'zh-TW': "與人協作的熱鬧地方",
          id: "Tempat ramai untuk berkolaborasi",
          vi: "Nơi sôi động để cộng tác với mọi người"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "체계적이고 목표 지향적인 곳",
          en: "Systematic and goal-oriented place",
          ja: "体系的で目標指向的な場所",
          'zh-CN': "系统化和目标导向的地方",
          'zh-TW': "系統化和目標導向的地方",
          id: "Tempat sistematis dan berorientasi tujuan",
          vi: "Nơi có hệ thống và định hướng mục tiêu"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "새로운 문제가 생겼을 때?",
      en: "When a new problem arises?",
      ja: "新しい問題が生じた時？",
      'zh-CN': "当新问题出现时？",
      'zh-TW': "當新問題出現時？",
      id: "Ketika masalah baru muncul?",
      vi: "Khi có vấn đề mới phát sinh?"
    },
    options: [
      {
        text: {
          ko: "독창적인 해결 방법 생각",
          en: "Think of original solutions",
          ja: "独創的な解決方法を考える",
          'zh-CN': "想出独创的解决方法",
          'zh-TW': "想出獨創的解決方法",
          id: "Memikirkan solusi orisinal",
          vi: "Nghĩ ra giải pháp độc đáo"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "데이터 분석하고 논리적 접근",
          en: "Analyze data and approach logically",
          ja: "データを分析し論理的にアプローチ",
          'zh-CN': "分析数据并逻辑性接近",
          'zh-TW': "分析數據並邏輯性接近",
          id: "Menganalisis data dan pendekatan logis",
          vi: "Phân tích dữ liệu và tiếp cận logic"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "다른 사람들과 상의하며 해결",
          en: "Consult with others to solve",
          ja: "他の人々と相談して解決",
          'zh-CN': "与他人商议解决",
          'zh-TW': "與他人商議解決",
          id: "Berdiskusi dengan orang lain untuk menyelesaikan",
          vi: "Thảo luận với người khác để giải quyết"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "빠르게 판단하고 실행",
          en: "Quickly judge and execute",
          ja: "素早く判断し実行",
          'zh-CN': "快速判断并执行",
          'zh-TW': "快速判斷並執行",
          id: "Cepat menilai dan melaksanakan",
          vi: "Nhanh chóng phán đoán và thực hiện"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "칭찬받고 싶은 부분은?",
      en: "What part would you like to be praised for?",
      ja: "褒められたい部分は？",
      'zh-CN': "希望被称赞的部分是？",
      'zh-TW': "希望被稱讚的部分是？",
      id: "Bagian mana yang ingin dipuji?",
      vi: "Phần nào bạn muốn được khen ngợi?"
    },
    options: [
      {
        text: {
          ko: "\"정말 창의적이네요\"",
          en: "\"You're really creative\"",
          ja: "「本当に創造的ですね」",
          'zh-CN': "\"真的很创造性\"",
          'zh-TW': "\"真的很創造性\"",
          id: "\"Anda benar-benar kreatif\"",
          vi: "\"Bạn thực sự sáng tạo\""
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"분석이 정확하네요\"",
          en: "\"Your analysis is accurate\"",
          ja: "「分析が正確ですね」",
          'zh-CN': "\"分析很准确\"",
          'zh-TW': "\"分析很準確\"",
          id: "\"Analisis Anda akurat\"",
          vi: "\"Phân tích của bạn chính xác\""
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"사람들과 잘 어울리네요\"",
          en: "\"You get along well with people\"",
          ja: "「人々とよく合いますね」",
          'zh-CN': "\"与人们相处得很好\"",
          'zh-TW': "\"與人們相處得很好\"",
          id: "\"Anda cocok dengan orang lain\"",
          vi: "\"Bạn hòa hợp tốt với mọi người\""
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"리더십이 뛰어나네요\"",
          en: "\"You have excellent leadership\"",
          ja: "「リーダーシップが優れていますね」",
          'zh-CN': "\"领导力很出色\"",
          'zh-TW': "\"領導力很出色\"",
          id: "\"Kepemimpinan Anda luar biasa\"",
          vi: "\"Khả năng lãnh đạo của bạn xuất sắc\""
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "스트레스 받는 상황은?",
      en: "What situations stress you out?",
      ja: "ストレスを感じる状況は？",
      'zh-CN': "什么情况会让你有压力？",
      'zh-TW': "什麼情況會讓你有壓力？",
      id: "Situasi apa yang membuat stres?",
      vi: "Tình huống nào khiến bạn căng thẳng?"
    },
    options: [
      {
        text: {
          ko: "창의성을 발휘할 수 없을 때",
          en: "When you can't express creativity",
          ja: "創造性を発揮できない時",
          'zh-CN': "无法发挥创造性时",
          'zh-TW': "無法發揮創造性時",
          id: "Ketika tidak bisa mengekspresikan kreativitas",
          vi: "Khi không thể thể hiện sáng tạo"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "정확한 정보가 없을 때",
          en: "When there's no accurate information",
          ja: "正確な情報がない時",
          'zh-CN': "没有准确信息时",
          'zh-TW': "沒有準確信息時",
          id: "Ketika tidak ada informasi akurat",
          vi: "Khi không có thông tin chính xác"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "혼자 일해야 할 때",
          en: "When you have to work alone",
          ja: "一人で働かなければならない時",
          'zh-CN': "必须独自工作时",
          'zh-TW': "必須獨自工作時",
          id: "Ketika harus bekerja sendiri",
          vi: "Khi phải làm việc một mình"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "목표가 불명확할 때",
          en: "When goals are unclear",
          ja: "目標が不明確な時",
          'zh-CN': "目标不明确时",
          'zh-TW': "目標不明確時",
          id: "Ketika tujuan tidak jelas",
          vi: "Khi mục tiêu không rõ ràng"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "직업 선택 시 우선순위는?",
      en: "What is your priority when choosing a career?",
      ja: "職業選択時の優先順位は？",
      'zh-CN': "选择职业时的优先顺序是？",
      'zh-TW': "選擇職業時的優先順序是？",
      id: "Apa prioritas saat memilih karir?",
      vi: "Ưu tiên khi chọn nghề nghiệp là gì?"
    },
    options: [
      {
        text: {
          ko: "내 재능을 발휘할 수 있는가",
          en: "Can I utilize my talents?",
          ja: "自分の才能を発揮できるか",
          'zh-CN': "能否发挥我的才能",
          'zh-TW': "能否發揮我的才能",
          id: "Bisakah saya menggunakan bakat saya?",
          vi: "Có thể phát huy tài năng của mình không?"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "전문성을 키울 수 있는가",
          en: "Can I develop expertise?",
          ja: "専門性を育てることができるか",
          'zh-CN': "能否培养专业性",
          'zh-TW': "能否培養專業性",
          id: "Bisakah saya mengembangkan keahlian?",
          vi: "Có thể phát triển chuyên môn không?"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "사람들에게 의미있는 일인가",
          en: "Is it meaningful work for people?",
          ja: "人々にとって意味のある仕事か",
          'zh-CN': "对人们有意义的工作吗",
          'zh-TW': "對人們有意義的工作嗎",
          id: "Apakah pekerjaan yang bermakna bagi orang lain?",
          vi: "Có phải công việc có ý nghĩa với mọi người không?"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "성장 가능성이 있는가",
          en: "Is there growth potential?",
          ja: "成長の可能性があるか",
          'zh-CN': "有成长可能性吗",
          'zh-TW': "有成長可能性嗎",
          id: "Apakah ada potensi pertumbuhan?",
          vi: "Có tiềm năng phát triển không?"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "5년 후 당신의 모습은?",
      en: "What will you be like in 5 years?",
      ja: "5年後のあなたの姿は？",
      'zh-CN': "5年后你的样子是？",
      'zh-TW': "5年後你的樣子是？",
      id: "Bagaimana Anda 5 tahun mendatang?",
      vi: "Bạn sẽ như thế nào sau 5 năm nữa?"
    },
    options: [
      {
        text: {
          ko: "나만의 작품이나 콘텐츠 만드는 사람",
          en: "A person creating my own works or content",
          ja: "自分の作品やコンテンツを作る人",
          'zh-CN': "创作自己作品或内容的人",
          'zh-TW': "創作自己作品或內容的人",
          id: "Orang yang membuat karya atau konten sendiri",
          vi: "Người tạo ra tác phẩm hoặc nội dung riêng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "전문 분야에서 인정받는 전문가",
          en: "A recognized expert in a specialized field",
          ja: "専門分野で認められる専門家",
          'zh-CN': "在专业领域被认可的专业人士",
          'zh-TW': "在專業領域被認可的專業人士",
          id: "Ahli yang diakui di bidang spesialisasi",
          vi: "Chuyên gia được công nhận trong lĩnh vực chuyên môn"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "많은 사람들과 소통하는 사람",
          en: "A person communicating with many people",
          ja: "多くの人々とコミュニケーションを取る人",
          'zh-CN': "与许多人沟通的人",
          'zh-TW': "與許多人溝通的人",
          id: "Orang yang berkomunikasi dengan banyak orang",
          vi: "Người giao tiếp với nhiều người"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "팀이나 조직을 이끄는 리더",
          en: "A leader leading teams or organizations",
          ja: "チームや組織を導くリーダー",
          'zh-CN': "领导团队或组织的领导者",
          'zh-TW': "領導團隊或組織的領導者",
          id: "Pemimpin yang memimpin tim atau organisasi",
          vi: "Người lãnh đạo dẫn dắt đội ngũ hoặc tổ chức"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 일하는 스타일은?",
      en: "What is your working style?",
      ja: "あなたの働くスタイルは？",
      'zh-CN': "你的工作风格是？",
      'zh-TW': "你的工作風格是？",
      id: "Bagaimana gaya kerja Anda?",
      vi: "Phong cách làm việc của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "자유롭게 창의적으로",
          en: "Freely and creatively",
          ja: "自由に創造的に",
          'zh-CN': "自由和创造性地",
          'zh-TW': "自由和創造性地",
          id: "Bebas dan kreatif",
          vi: "Tự do và sáng tạo"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "체계적으로 꼼꼼하게",
          en: "Systematically and meticulously",
          ja: "体系的に細かく",
          'zh-CN': "系统化和细致地",
          'zh-TW': "系統化和細緻地",
          id: "Sistematis dan teliti",
          vi: "Có hệ thống và tỉ mỉ"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "협력하며 함께",
          en: "Collaboratively together",
          ja: "協力して一緒に",
          'zh-CN': "协作一起",
          'zh-TW': "協作一起",
          id: "Berkolaborasi bersama",
          vi: "Hợp tác cùng nhau"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "목표 지향적으로 효율적으로",
          en: "Goal-oriented and efficiently",
          ja: "目標指向的で効率的に",
          'zh-CN': "目标导向和高效地",
          'zh-TW': "目標導向和高效地",
          id: "Berorientasi tujuan dan efisien",
          vi: "Định hướng mục tiêu và hiệu quả"
        },
        scores: { Type4: 3 }
      }
    ]
  }
];

export const careerResults: CareerResult[] = [
  {
    type: 'Type1',
    emoji: '🎨',
    title: {
      ko: '창의 표현형',
      en: 'Creative Expression Type',
      ja: '創造表現型',
      'zh-CN': '创意表达型',
      'zh-TW': '創意表達型',
      id: 'Tipe Ekspresi Kreatif',
      vi: 'Kiểu Biểu Đạt Sáng Tạo'
    },
    description: {
      ko: '예술가의 영혼! 창의력으로 승부하는 당신',
      en: 'Artist\'s soul! You compete with creativity',
      ja: '芸術家の魂！創造力で勝負するあなた',
      'zh-CN': '艺术家的灵魂！用创造力竞争的您',
      'zh-TW': '藝術家的靈魂！用創造力競爭的您',
      id: 'Jiwa seniman! Anda bersaing dengan kreativitas',
      vi: 'Tâm hồn nghệ sĩ! Bạn cạnh tranh bằng sáng tạo'
    },
    longDescription: {
      ko: '창의력과 상상력이 뛰어난 당신은 예술적이고 독창적인 직업이 잘 맞습니다. 자유롭게 자신을 표현하고, 새로운 것을 만들어내는 일에 행복을 느낍니다. 틀에 박힌 일보다는 창의성을 발휘할 수 있는 환경을 선호하며, 독특한 시각과 감각을 가지고 있습니다.',
      en: 'You with excellent creativity and imagination are well-suited for artistic and original careers. You find happiness in freely expressing yourself and creating new things. You prefer environments where you can demonstrate creativity rather than routine work, and you have unique vision and sensibility.',
      ja: '創造力と想像力に優れたあなたは、芸術的で独創的な職業がよく合います。自由に自分を表現し、新しいものを作り出すことに幸せを感じます。型にはまった仕事よりも創造性を発揮できる環境を好み、独特な視覚と感覚を持っています。',
      'zh-CN': '具有出色创造力和想象力的您适合艺术性和独创性的职业。您喜欢自由表达自己，在创造新事物中找到快乐。您更喜欢能够发挥创造力的环境，而不是按部就班的工作，您拥有独特的视觉和感觉。',
      'zh-TW': '具有出色創造力和想像力的您適合藝術性和獨創性的職業。您喜歡自由表達自己，在創造新事物中找到快樂。您更喜歡能夠發揮創造力的環境，而不是按部就班的工作，您擁有獨特的視覺和感覺。',
      id: 'Anda dengan kreativitas dan imajinasi yang luar biasa cocok untuk karir artistik dan orisinal. Anda menemukan kebahagiaan dalam mengekspresikan diri secara bebas dan menciptakan hal-hal baru. Anda lebih suka lingkungan di mana Anda dapat menunjukkan kreativitas daripada pekerjaan rutin, dan Anda memiliki visi dan kepekaan yang unik.',
      vi: 'Bạn với khả năng sáng tạo và trí tưởng tượng xuất sắc rất phù hợp với các nghề nghiệp nghệ thuật và độc đáo. Bạn tìm thấy hạnh phúc trong việc tự do thể hiện bản thân và tạo ra những điều mới mẻ. Bạn thích môi trường có thể phát huy sáng tạo hơn là công việc theo khuôn mẫu, và bạn có tầm nhìn và cảm quan độc đáo.'
    },
    strengths: [
      {
        ko: '창의력',
        en: 'Creativity',
        ja: '創造力',
        'zh-CN': '创造力',
        'zh-TW': '創造力',
        id: 'Kreativitas',
        vi: 'Sáng tạo'
      },
      {
        ko: '상상력',
        en: 'Imagination',
        ja: '想像力',
        'zh-CN': '想象力',
        'zh-TW': '想像力',
        id: 'Imajinasi',
        vi: 'Trí tưởng tượng'
      },
      {
        ko: '표현력',
        en: 'Expression',
        ja: '表現力',
        'zh-CN': '表达力',
        'zh-TW': '表達力',
        id: 'Ekspresi',
        vi: 'Khả năng biểu đạt'
      },
      {
        ko: '예술 감각',
        en: 'Artistic sense',
        ja: '芸術センス',
        'zh-CN': '艺术感觉',
        'zh-TW': '藝術感覺',
        id: 'Rasa seni',
        vi: 'Cảm quan nghệ thuật'
      }
    ],
    fields: [
      {
        ko: '예술',
        en: 'Arts',
        ja: '芸術',
        'zh-CN': '艺术',
        'zh-TW': '藝術',
        id: 'Seni',
        vi: 'Nghệ thuật'
      },
      {
        ko: '디자인',
        en: 'Design',
        ja: 'デザイン',
        'zh-CN': '设计',
        'zh-TW': '設計',
        id: 'Desain',
        vi: 'Thiết kế'
      },
      {
        ko: '콘텐츠',
        en: 'Content',
        ja: 'コンテンツ',
        'zh-CN': '内容',
        'zh-TW': '內容',
        id: 'Konten',
        vi: 'Nội dung'
      },
      {
        ko: '창작',
        en: 'Creation',
        ja: '創作',
        'zh-CN': '创作',
        'zh-TW': '創作',
        id: 'Kreasi',
        vi: 'Sáng tác'
      }
    ],
    jobs: {
      ko: '• 예술 분야: 화가, 조각가, 일러스트레이터, 사진작가\n• 디자인: 그래픽 디자이너, 제품 디자이너, UX/UI 디자이너\n• 콘텐츠: 유튜버, 작가, 시나리오 작가, 웹툰 작가\n• 미디어: 영상 감독, 광고 크리에이터, 방송 PD\n• 패션: 패션 디자이너, 스타일리스트, 메이크업 아티스트',
      en: '• Arts: Painter, Sculptor, Illustrator, Photographer\n• Design: Graphic Designer, Product Designer, UX/UI Designer\n• Content: YouTuber, Writer, Screenwriter, Webtoon Artist\n• Media: Video Director, Ad Creator, Broadcasting PD\n• Fashion: Fashion Designer, Stylist, Makeup Artist',
      ja: '• 芸術分野: 画家、彫刻家、イラストレーター、写真家\n• デザイン: グラフィックデザイナー、プロダクトデザイナー、UX/UIデザイナー\n• コンテンツ: ユーチューバー、作家、シナリオライター、ウェブトゥーン作家\n• メディア: 映像監督、広告クリエイター、放送PD\n• ファッション: ファッションデザイナー、スタイリスト、メイクアップアーティスト',
      'zh-CN': '• 艺术领域: 画家、雕塑家、插画师、摄影师\n• 设计: 平面设计师、产品设计师、UX/UI设计师\n• 内容: 视频博主、作家、编剧、网络漫画家\n• 媒体: 视频导演、广告创作者、广播PD\n• 时尚: 时装设计师、造型师、化妆师',
      'zh-TW': '• 藝術領域: 畫家、雕塑家、插畫師、攝影師\n• 設計: 平面設計師、產品設計師、UX/UI設計師\n• 內容: 視頻博主、作家、編劇、網路漫畫家\n• 媒體: 視頻導演、廣告創作者、廣播PD\n• 時尚: 時裝設計師、造型師、化妝師',
      id: '• Seni: Pelukis, Pematung, Ilustrator, Fotografer\n• Desain: Desainer Grafis, Desainer Produk, Desainer UX/UI\n• Konten: YouTuber, Penulis, Penulis Skenario, Artis Webtoon\n• Media: Sutradara Video, Kreator Iklan, PD Penyiaran\n• Fashion: Desainer Fashion, Stylist, Artis Makeup',
      vi: '• Nghệ thuật: Họa sĩ, Điêu khắc gia, Họa sĩ minh họa, Nhiếp ảnh gia\n• Thiết kế: Nhà thiết kế đồ họa, Nhà thiết kế sản phẩm, Nhà thiết kế UX/UI\n• Nội dung: YouTuber, Nhà văn, Biên kịch, Họa sĩ webtoon\n• Truyền thông: Đạo diễn video, Người tạo quảng cáo, PD phát sóng\n• Thời trang: Nhà thiết kế thời trang, Stylist, Nghệ sĩ trang điểm'
    }
  },
  {
    type: 'Type2',
    emoji: '🔬',
    title: {
      ko: '분석 전문형',
      en: 'Analytical Expert Type',
      ja: '分析専門型',
      'zh-CN': '分析专业型',
      'zh-TW': '分析專業型',
      id: 'Tipe Ahli Analisis',
      vi: 'Kiểu Chuyên Gia Phân Tích'
    },
    description: {
      ko: '논리의 달인! 데이터와 기술로 승부하는 당신',
      en: 'Master of logic! You compete with data and technology',
      ja: '論理の達人！データと技術で勝負するあなた',
      'zh-CN': '逻辑大师！用数据和技术竞争的您',
      'zh-TW': '邏輯大師！用數據和技術競爭的您',
      id: 'Master logika! Anda bersaing dengan data dan teknologi',
      vi: 'Bậc thầy logic! Bạn cạnh tranh bằng dữ liệu và công nghệ'
    },
    longDescription: {
      ko: '논리적이고 분석적인 당신은 전문성이 필요한 기술직이 잘 맞습니다. 정확하고 체계적으로 일하며, 문제를 논리적으로 해결하는 것을 즐깁니다. 데이터를 분석하고 패턴을 찾아내며, 깊이 있는 전문 지식을 쌓는 것을 좋아합니다.',
      en: 'You are logical and analytical, well-suited for technical careers that require expertise. You work accurately and systematically, and enjoy solving problems logically. You analyze data, find patterns, and like to build deep professional knowledge.',
      ja: '論理的で分析的なあなたは、専門性が必要な技術職がよく合います。正確で体系的に働き、問題を論理的に解決することを楽しみます。データを分析し、パターンを見つけ出し、深い専門知識を積むことを好みます。',
      'zh-CN': '您逻辑性强且善于分析，适合需要专业性的技术职业。您工作准确且系统，喜欢逻辑性地解决问题。您分析数据，寻找模式，喜欢积累深厚的专业知识。',
      'zh-TW': '您邏輯性強且善於分析，適合需要專業性的技術職業。您工作準確且系統，喜歡邏輯性地解決問題。您分析數據，尋找模式，喜歡積累深厚的專業知識。',
      id: 'Anda logis dan analitis, cocok untuk karir teknis yang memerlukan keahlian. Anda bekerja dengan akurat dan sistematis, dan menikmati menyelesaikan masalah secara logis. Anda menganalisis data, menemukan pola, dan suka membangun pengetahuan profesional yang mendalam.',
      vi: 'Bạn logic và phân tích, rất phù hợp với các nghề nghiệp kỹ thuật cần chuyên môn. Bạn làm việc chính xác và có hệ thống, thích giải quyết vấn đề một cách logic. Bạn phân tích dữ liệu, tìm ra các mẫu, và thích xây dựng kiến thức chuyên môn sâu sắc.'
    },
    strengths: [
      {
        ko: '논리력',
        en: 'Logic',
        ja: '論理力',
        'zh-CN': '逻辑力',
        'zh-TW': '邏輯力',
        id: 'Logika',
        vi: 'Logic'
      },
      {
        ko: '분석력',
        en: 'Analytical skills',
        ja: '分析力',
        'zh-CN': '分析力',
        'zh-TW': '分析力',
        id: 'Kemampuan analisis',
        vi: 'Kỹ năng phân tích'
      },
      {
        ko: '문제 해결',
        en: 'Problem solving',
        ja: '問題解決',
        'zh-CN': '问题解决',
        'zh-TW': '問題解決',
        id: 'Pemecahan masalah',
        vi: 'Giải quyết vấn đề'
      },
      {
        ko: '전문성',
        en: 'Expertise',
        ja: '専門性',
        'zh-CN': '专业性',
        'zh-TW': '專業性',
        id: 'Keahlian',
        vi: 'Chuyên môn'
      }
    ],
    fields: [
      {
        ko: 'IT',
        en: 'IT',
        ja: 'IT',
        'zh-CN': 'IT',
        'zh-TW': 'IT',
        id: 'IT',
        vi: 'IT'
      },
      {
        ko: '연구',
        en: 'Research',
        ja: '研究',
        'zh-CN': '研究',
        'zh-TW': '研究',
        id: 'Penelitian',
        vi: 'Nghiên cứu'
      },
      {
        ko: '공학',
        en: 'Engineering',
        ja: '工学',
        'zh-CN': '工程',
        'zh-TW': '工程',
        id: 'Teknik',
        vi: 'Kỹ thuật'
      },
      {
        ko: '금융',
        en: 'Finance',
        ja: '金融',
        'zh-CN': '金融',
        'zh-TW': '金融',
        id: 'Keuangan',
        vi: 'Tài chính'
      }
    ],
    jobs: {
      ko: '• IT 분야: 개발자, 데이터 분석가, AI 엔지니어, 보안 전문가\n• 연구: 연구원, 과학자, 실험실 전문가\n• 공학: 전기 엔지니어, 기계 엔지니어, 건축가\n• 금융: 애널리스트, 회계사, 세무사, 재무 전문가\n• 의료: 의사, 약사, 의료 기기 전문가',
      en: '• IT: Developer, Data Analyst, AI Engineer, Security Expert\n• Research: Researcher, Scientist, Laboratory Specialist\n• Engineering: Electrical Engineer, Mechanical Engineer, Architect\n• Finance: Analyst, Accountant, Tax Specialist, Financial Expert\n• Medical: Doctor, Pharmacist, Medical Device Specialist',
      ja: '• IT分野: 開発者、データアナリスト、AIエンジニア、セキュリティ専門家\n• 研究: 研究員、科学者、実験室専門家\n• 工学: 電気エンジニア、機械エンジニア、建築家\n• 金融: アナリスト、会計士、税務士、財務専門家\n• 医療: 医師、薬剤師、医療機器専門家',
      'zh-CN': '• IT领域: 开发者、数据分析师、AI工程师、安全专家\n• 研究: 研究员、科学家、实验室专家\n• 工程: 电气工程师、机械工程师、建筑师\n• 金融: 分析师、会计师、税务师、财务专家\n• 医疗: 医生、药剂师、医疗设备专家',
      'zh-TW': '• IT領域: 開發者、數據分析師、AI工程師、安全專家\n• 研究: 研究員、科學家、實驗室專家\n• 工程: 電氣工程師、機械工程師、建築師\n• 金融: 分析師、會計師、稅務師、財務專家\n• 醫療: 醫生、藥劑師、醫療設備專家',
      id: '• IT: Pengembang, Analis Data, Insinyur AI, Ahli Keamanan\n• Penelitian: Peneliti, Ilmuwan, Spesialis Laboratorium\n• Teknik: Insinyur Listrik, Insinyur Mesin, Arsitek\n• Keuangan: Analis, Akuntan, Spesialis Pajak, Ahli Keuangan\n• Medis: Dokter, Apoteker, Spesialis Peralatan Medis',
      vi: '• IT: Lập trình viên, Nhà phân tích dữ liệu, Kỹ sư AI, Chuyên gia bảo mật\n• Nghiên cứu: Nhà nghiên cứu, Nhà khoa học, Chuyên gia phòng thí nghiệm\n• Kỹ thuật: Kỹ sư điện, Kỹ sư cơ khí, Kiến trúc sư\n• Tài chính: Nhà phân tích, Kế toán, Chuyên gia thuế, Chuyên gia tài chính\n• Y tế: Bác sĩ, Dược sĩ, Chuyên gia thiết bị y tế'
    }
  },
  {
    type: 'Type3',
    emoji: '💬',
    title: {
      ko: '소통 서비스형',
      en: 'Communication Service Type',
      ja: 'コミュニケーションサービス型',
      'zh-CN': '沟通服务型',
      'zh-TW': '溝通服務型',
      id: 'Tipe Layanan Komunikasi',
      vi: 'Kiểu Dịch Vụ Giao Tiếp'
    },
    description: {
      ko: '사람이 좋아! 관계와 소통으로 승부하는 당신',
      en: 'You love people! You compete with relationships and communication',
      ja: '人が好き！関係とコミュニケーションで勝負するあなた',
      'zh-CN': '喜欢人！用关系和沟通竞争的您',
      'zh-TW': '喜歡人！用關係和溝通競爭的您',
      id: 'Anda suka orang! Anda bersaing dengan hubungan dan komunikasi',
      vi: 'Bạn yêu mọi người! Bạn cạnh tranh bằng mối quan hệ và giao tiếp'
    },
    longDescription: {
      ko: '공감 능력과 소통 능력이 뛰어난 당신은 사람을 대하는 직업이 잘 맞습니다. 다른 사람을 돕고, 소통하며, 관계를 맺는 일에서 보람을 느낍니다. 따뜻하고 친절하며, 사람들에게 긍정적인 영향을 주는 것을 좋아합니다.',
      en: 'You with excellent empathy and communication skills are well-suited for careers involving people. You find fulfillment in helping others, communicating, and building relationships. You are warm and kind, and like to have a positive impact on people.',
      ja: '共感能力とコミュニケーション能力に優れたあなたは、人を扱う職業がよく合います。他の人を助け、コミュニケーションを取り、関係を築くことにやりがいを感じます。温かく親切で、人々にポジティブな影響を与えることを好みます。',
      'zh-CN': '具有出色共情力和沟通能力的您适合与人打交道的职业。您喜欢帮助他人、沟通和建立关系，从中获得满足感。您温暖友善，喜欢对人们产生积极影响。',
      'zh-TW': '具有出色共情力和溝通能力的您適合與人打交道的職業。您喜歡幫助他人、溝通和建立關係，從中獲得滿足感。您溫暖友善，喜歡對人們產生積極影響。',
      id: 'Anda dengan kemampuan empati dan komunikasi yang luar biasa cocok untuk karir yang melibatkan orang. Anda menemukan kepuasan dalam membantu orang lain, berkomunikasi, dan membangun hubungan. Anda hangat dan baik hati, dan suka memberikan dampak positif pada orang.',
      vi: 'Bạn với khả năng đồng cảm và giao tiếp xuất sắc rất phù hợp với các nghề nghiệp liên quan đến con người. Bạn tìm thấy sự thỏa mãn trong việc giúp đỡ người khác, giao tiếp và xây dựng mối quan hệ. Bạn ấm áp và tốt bụng, thích tạo tác động tích cực đến mọi người.'
    },
    strengths: [
      {
        ko: '공감력',
        en: 'Empathy',
        ja: '共感力',
        'zh-CN': '共情力',
        'zh-TW': '共情力',
        id: 'Empati',
        vi: 'Đồng cảm'
      },
      {
        ko: '소통 능력',
        en: 'Communication skills',
        ja: 'コミュニケーション能力',
        'zh-CN': '沟通能力',
        'zh-TW': '溝通能力',
        id: 'Kemampuan komunikasi',
        vi: 'Kỹ năng giao tiếp'
      },
      {
        ko: '친화력',
        en: 'Affinity',
        ja: '親和力',
        'zh-CN': '亲和力',
        'zh-TW': '親和力',
        id: 'Kemampuan afinitas',
        vi: 'Khả năng thân thiện'
      },
      {
        ko: '설득력',
        en: 'Persuasion',
        ja: '説得力',
        'zh-CN': '说服力',
        'zh-TW': '說服力',
        id: 'Kemampuan persuasi',
        vi: 'Khả năng thuyết phục'
      }
    ],
    fields: [
      {
        ko: '교육',
        en: 'Education',
        ja: '教育',
        'zh-CN': '教育',
        'zh-TW': '教育',
        id: 'Pendidikan',
        vi: 'Giáo dục'
      },
      {
        ko: '상담',
        en: 'Counseling',
        ja: 'カウンセリング',
        'zh-CN': '咨询',
        'zh-TW': '諮詢',
        id: 'Konseling',
        vi: 'Tư vấn'
      },
      {
        ko: '서비스',
        en: 'Service',
        ja: 'サービス',
        'zh-CN': '服务',
        'zh-TW': '服務',
        id: 'Layanan',
        vi: 'Dịch vụ'
      },
      {
        ko: '의료',
        en: 'Healthcare',
        ja: '医療',
        'zh-CN': '医疗',
        'zh-TW': '醫療',
        id: 'Kesehatan',
        vi: 'Y tế'
      }
    ],
    jobs: {
      ko: '• 교육: 교사, 교수, 강사, 교육 컨설턴트\n• 상담: 심리 상담가, 진로 상담가, 코치\n• 의료: 간호사, 물리 치료사, 작업 치료사\n• 서비스: 승무원, 호텔리어, 고객 서비스 전문가\n• HR: 인사 담당자, 채용 전문가, 조직 문화 담당\n• 마케팅: 브랜드 매니저, PR 전문가, 고객 관리',
      en: '• Education: Teacher, Professor, Instructor, Education Consultant\n• Counseling: Psychological Counselor, Career Counselor, Coach\n• Medical: Nurse, Physical Therapist, Occupational Therapist\n• Service: Flight Attendant, Hotelier, Customer Service Specialist\n• HR: HR Manager, Recruitment Specialist, Organizational Culture Manager\n• Marketing: Brand Manager, PR Specialist, Customer Manager',
      ja: '• 教育: 教師、教授、講師、教育コンサルタント\n• カウンセリング: 心理カウンセラー、キャリアカウンセラー、コーチ\n• 医療: 看護師、理学療法士、作業療法士\n• サービス: 客室乗務員、ホテリアー、カスタマーサービス専門家\n• HR: 人事担当者、採用専門家、組織文化担当\n• マーケティング: ブランドマネージャー、PR専門家、顧客管理',
      'zh-CN': '• 教育: 教师、教授、讲师、教育顾问\n• 咨询: 心理咨询师、职业咨询师、教练\n• 医疗: 护士、物理治疗师、职业治疗师\n• 服务: 空乘、酒店管理、客户服务专家\n• HR: 人事负责人、招聘专家、组织文化负责人\n• 营销: 品牌经理、PR专家、客户管理',
      'zh-TW': '• 教育: 教師、教授、講師、教育顧問\n• 諮詢: 心理諮詢師、職業諮詢師、教練\n• 醫療: 護士、物理治療師、職業治療師\n• 服務: 空乘、酒店管理、客戶服務專家\n• HR: 人事負責人、招聘專家、組織文化負責人\n• 營銷: 品牌經理、PR專家、客戶管理',
      id: '• Pendidikan: Guru, Profesor, Instruktur, Konsultan Pendidikan\n• Konseling: Konselor Psikologi, Konselor Karir, Pelatih\n• Medis: Perawat, Terapis Fisik, Terapis Okupasi\n• Layanan: Pramugari, Hotelir, Spesialis Layanan Pelanggan\n• HR: Manajer HR, Spesialis Rekrutmen, Manajer Budaya Organisasi\n• Pemasaran: Manajer Merek, Spesialis PR, Manajer Pelanggan',
      vi: '• Giáo dục: Giáo viên, Giáo sư, Giảng viên, Tư vấn giáo dục\n• Tư vấn: Tư vấn tâm lý, Tư vấn nghề nghiệp, Huấn luyện viên\n• Y tế: Y tá, Vật lý trị liệu, Liệu pháp nghề nghiệp\n• Dịch vụ: Tiếp viên hàng không, Quản lý khách sạn, Chuyên gia dịch vụ khách hàng\n• HR: Quản lý nhân sự, Chuyên gia tuyển dụng, Quản lý văn hóa tổ chức\n• Marketing: Quản lý thương hiệu, Chuyên gia PR, Quản lý khách hàng'
    }
  },
  {
    type: 'Type4',
    emoji: '👔',
    title: {
      ko: '리더 경영형',
      en: 'Leadership Management Type',
      ja: 'リーダーシップ経営型',
      'zh-CN': '领导管理型',
      'zh-TW': '領導管理型',
      id: 'Tipe Kepemimpinan Manajemen',
      vi: 'Kiểu Lãnh Đạo Quản Lý'
    },
    description: {
      ko: '타고난 리더! 전략과 실행으로 승부하는 당신',
      en: 'Born leader! You compete with strategy and execution',
      ja: '生まれながらのリーダー！戦略と実行で勝負するあなた',
      'zh-CN': '天生的领导者！用战略和执行竞争的您',
      'zh-TW': '天生的領導者！用戰略和執行競爭的您',
      id: 'Pemimpin alami! Anda bersaing dengan strategi dan eksekusi',
      vi: 'Lãnh đạo bẩm sinh! Bạn cạnh tranh bằng chiến lược và thực thi'
    },
    longDescription: {
      ko: '리더십과 기획력이 뛰어난 당신은 조직을 이끌고 관리하는 직업이 잘 맞습니다. 목표를 세우고 달성하며, 사람들을 이끌고 조직하는 것을 즐깁니다. 전략적이고 추진력이 강하며, 결과를 만들어내는 데 재능이 있습니다.',
      en: 'You with excellent leadership and planning skills are well-suited for careers that involve leading and managing organizations. You enjoy setting and achieving goals, leading and organizing people. You are strategic and have strong drive, with talent for producing results.',
      ja: 'リーダーシップと企画力に優れたあなたは、組織をリードし管理する職業がよく合います。目標を設定し達成し、人々をリードし組織することを楽しみます。戦略的で推進力が強く、結果を生み出す才能があります。',
      'zh-CN': '具有出色领导力和策划力的您适合领导和管理组织的职业。您喜欢设定和实现目标，领导和组织人员。您具有战略性，执行力强，在产生结果方面有天赋。',
      'zh-TW': '具有出色領導力和策劃力的您適合領導和管理組織的職業。您喜歡設定和實現目標，領導和組織人員。您具有戰略性，執行力強，在產生結果方面有天賦。',
      id: 'Anda dengan kepemimpinan dan keterampilan perencanaan yang luar biasa cocok untuk karir yang melibatkan memimpin dan mengelola organisasi. Anda menikmati menetapkan dan mencapai tujuan, memimpin dan mengorganisir orang. Anda strategis dan memiliki dorongan yang kuat, dengan bakat untuk menghasilkan hasil.',
      vi: 'Bạn với khả năng lãnh đạo và lập kế hoạch xuất sắc rất phù hợp với các nghề nghiệp liên quan đến lãnh đạo và quản lý tổ chức. Bạn thích đặt và đạt được mục tiêu, lãnh đạo và tổ chức mọi người. Bạn có tính chiến lược và động lực mạnh mẽ, với tài năng tạo ra kết quả.'
    },
    strengths: [
      {
        ko: '리더십',
        en: 'Leadership',
        ja: 'リーダーシップ',
        'zh-CN': '领导力',
        'zh-TW': '領導力',
        id: 'Kepemimpinan',
        vi: 'Lãnh đạo'
      },
      {
        ko: '기획력',
        en: 'Planning skills',
        ja: '企画力',
        'zh-CN': '策划力',
        'zh-TW': '策劃力',
        id: 'Kemampuan perencanaan',
        vi: 'Kỹ năng lập kế hoạch'
      },
      {
        ko: '의사결정',
        en: 'Decision making',
        ja: '意思決定',
        'zh-CN': '决策',
        'zh-TW': '決策',
        id: 'Pengambilan keputusan',
        vi: 'Ra quyết định'
      },
      {
        ko: '실행력',
        en: 'Execution',
        ja: '実行力',
        'zh-CN': '执行力',
        'zh-TW': '執行力',
        id: 'Eksekusi',
        vi: 'Thực thi'
      }
    ],
    fields: [
      {
        ko: '경영',
        en: 'Management',
        ja: '経営',
        'zh-CN': '经营',
        'zh-TW': '經營',
        id: 'Manajemen',
        vi: 'Quản lý'
      },
      {
        ko: '기획',
        en: 'Planning',
        ja: '企画',
        'zh-CN': '策划',
        'zh-TW': '策劃',
        id: 'Perencanaan',
        vi: 'Lập kế hoạch'
      },
      {
        ko: '창업',
        en: 'Entrepreneurship',
        ja: '起業',
        'zh-CN': '创业',
        'zh-TW': '創業',
        id: 'Kewirausahaan',
        vi: 'Khởi nghiệp'
      },
      {
        ko: '컨설팅',
        en: 'Consulting',
        ja: 'コンサルティング',
        'zh-CN': '咨询',
        'zh-TW': '諮詢',
        id: 'Konsultasi',
        vi: 'Tư vấn'
      }
    ],
    jobs: {
      ko: '• 경영: CEO, COO, 경영 관리자, 팀장\n• 기획: 전략 기획자, 사업 기획자, 프로젝트 매니저\n• 창업: 스타트업 창업자, 사업가, 프랜차이즈 운영\n• 컨설팅: 경영 컨설턴트, 전략 컨설턴트\n• 영업: 영업 관리자, 비즈니스 개발 담당\n• 금융: 펀드 매니저, 투자 전문가, 벤처 캐피탈',
      en: '• Management: CEO, COO, Management Manager, Team Leader\n• Planning: Strategic Planner, Business Planner, Project Manager\n• Entrepreneurship: Startup Founder, Businessman, Franchise Operator\n• Consulting: Management Consultant, Strategy Consultant\n• Sales: Sales Manager, Business Development Manager\n• Finance: Fund Manager, Investment Specialist, Venture Capital',
      ja: '• 経営: CEO、COO、経営管理者、チームリーダー\n• 企画: 戦略企画者、事業企画者、プロジェクトマネージャー\n• 起業: スタートアップ創設者、実業家、フランチャイズ運営\n• コンサルティング: 経営コンサルタント、戦略コンサルタント\n• 営業: 営業管理者、ビジネス開発担当\n• 金融: ファンドマネージャー、投資専門家、ベンチャーキャピタル',
      'zh-CN': '• 管理: CEO、COO、经营管理、团队领导\n• 策划: 战略策划、业务策划、项目经理\n• 创业: 初创企业创始人、实业家、特许经营运营\n• 咨询: 管理顾问、战略顾问\n• 销售: 销售经理、业务开发经理\n• 金融: 基金经理、投资专家、风险投资',
      'zh-TW': '• 管理: CEO、COO、經營管理、團隊領導\n• 策劃: 戰略策劃、業務策劃、項目經理\n• 創業: 初創企業創始人、實業家、特許經營運營\n• 諮詢: 管理顧問、戰略顧問\n• 銷售: 銷售經理、業務開發經理\n• 金融: 基金經理、投資專家、風險投資',
      id: '• Manajemen: CEO, COO, Manajer Manajemen, Pemimpin Tim\n• Perencanaan: Perencana Strategis, Perencana Bisnis, Manajer Proyek\n• Kewirausahaan: Pendiri Startup, Pengusaha, Operator Waralaba\n• Konsultasi: Konsultan Manajemen, Konsultan Strategis\n• Penjualan: Manajer Penjualan, Manajer Pengembangan Bisnis\n• Keuangan: Manajer Dana, Spesialis Investasi, Modal Ventura',
      vi: '• Quản lý: CEO, COO, Quản lý điều hành, Trưởng nhóm\n• Lập kế hoạch: Hoạch định chiến lược, Hoạch định kinh doanh, Quản lý dự án\n• Khởi nghiệp: Người sáng lập startup, Doanh nhân, Người vận hành nhượng quyền\n• Tư vấn: Tư vấn quản lý, Tư vấn chiến lược\n• Bán hàng: Quản lý bán hàng, Quản lý phát triển kinh doanh\n• Tài chính: Quản lý quỹ, Chuyên gia đầu tư, Vốn mạo hiểm'
    }
  }
];

export function calculateCareerResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0 };
  
  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      if (scores[type as keyof typeof scores] !== undefined) {
        scores[type as keyof typeof scores] += answer[type];
      }
    });
  });
  
  // 최고 점수 찾기
  let maxScore = 0;
  let resultType = 'Type1';
  
  Object.keys(scores).forEach(type => {
    if (scores[type as keyof typeof scores] > maxScore) {
      maxScore = scores[type as keyof typeof scores];
      resultType = type;
    }
  });
  
  return resultType;
}
