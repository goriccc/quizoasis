export interface LeadershipQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface LeadershipResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  subtitle: Record<string, string>;
  description: Record<string, string>;
  traits: Record<string, string>;
  strengths: Record<string, string>;
  weaknesses: Record<string, string>;
  advice: Record<string, string>;
  famousLeaders: Record<string, string>;
}

export const leadershipQuestions: LeadershipQuestion[] = [
  {
    id: 1,
    question: {
      ko: "팀 프로젝트를 시작할 때 당신은?",
      en: "When starting a team project, you?",
      ja: "チームプロジェクトを始める時、あなたは？",
      'zh-CN': "开始团队项目时，你会？",
      'zh-TW': "開始團隊項目時，你會？",
      id: "Saat memulai proyek tim, Anda?",
      vi: "Khi bắt đầu dự án nhóm, bạn?"
    },
    options: [
      {
        text: {
          ko: "비전을 제시하고 열정적으로 동기부여",
          en: "Present a vision and motivate passionately",
          ja: "ビジョンを提示し情熱的に動機付けする",
          'zh-CN': "提出愿景并热情激励",
          'zh-TW': "提出願景並熱情激勵",
          id: "Menyajikan visi dan memotivasi dengan penuh semangat",
          vi: "Trình bày tầm nhìn và thúc đẩy một cách đam mê"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀원들과 함께 방향 논의하고 결정",
          en: "Discuss direction together with team members and decide",
          ja: "チームメンバーと一緒に方向性を議論し決定する",
          'zh-CN': "与团队成员一起讨论方向并决定",
          'zh-TW': "與團隊成員一起討論方向並決定",
          id: "Mendiskusikan arah bersama anggota tim dan memutuskan",
          vi: "Thảo luận hướng đi cùng các thành viên nhóm và quyết định"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "각자의 강점을 파악하고 성장 목표 설정",
          en: "Identify each person's strengths and set growth goals",
          ja: "各自の強みを把握し成長目標を設定する",
          'zh-CN': "识别每个人的优势并设定成长目标",
          'zh-TW': "識別每個人的優勢並設定成長目標",
          id: "Mengidentifikasi kekuatan setiap orang dan menetapkan tujuan pertumbuhan",
          vi: "Xác định điểm mạnh của từng người và đặt mục tiêu phát triển"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "팀원들이 필요한 것 먼저 파악하고 지원",
          en: "First identify what team members need and support them",
          ja: "チームメンバーが必要なものをまず把握し支援する",
          'zh-CN': "首先识别团队成员需要什么并支持他们",
          'zh-TW': "首先識別團隊成員需要什麼並支持他們",
          id: "Pertama-tama identifikasi yang dibutuhkan anggota tim dan dukung mereka",
          vi: "Đầu tiên xác định điều các thành viên nhóm cần và hỗ trợ họ"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "의사결정을 할 때?",
      en: "When making decisions?",
      ja: "意思決定をする時？",
      'zh-CN': "做决策时？",
      'zh-TW': "做決策時？",
      id: "Saat membuat keputusan?",
      vi: "Khi đưa ra quyết định?"
    },
    options: [
      {
        text: {
          ko: "빠르고 단호하게 방향 제시",
          en: "Present direction quickly and decisively",
          ja: "素早く断固として方向性を示す",
          'zh-CN': "快速果断地提出方向",
          'zh-TW': "快速果斷地提出方向",
          id: "Menyajikan arah dengan cepat dan tegas",
          vi: "Trình bày hướng đi nhanh chóng và quyết đoán"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀원들의 의견 충분히 수렴 후 결정",
          en: "Gather team members' opinions sufficiently and then decide",
          ja: "チームメンバーの意見を十分に集約してから決定する",
          'zh-CN': "充分收集团队成员意见后决定",
          'zh-TW': "充分收集團隊成員意見後決定",
          id: "Mengumpulkan pendapat anggota tim dengan cukup lalu memutuskan",
          vi: "Thu thập đủ ý kiến của các thành viên nhóm rồi quyết định"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "팀원들이 스스로 결정하도록 유도하고 조언",
          en: "Guide team members to decide themselves and advise",
          ja: "チームメンバーが自分で決められるよう導き助言する",
          'zh-CN': "引导团队成员自主决定并给予建议",
          'zh-TW': "引導團隊成員自主決定並給予建議",
          id: "Memandu anggota tim untuk memutuskan sendiri dan memberi nasihat",
          vi: "Hướng dẫn các thành viên nhóm tự quyết định và đưa ra lời khuyên"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "팀에 가장 이로운 방향으로 신중히 결정",
          en: "Decide carefully in the direction most beneficial to the team",
          ja: "チームにとって最も有益な方向で慎重に決定する",
          'zh-CN': "谨慎地选择对团队最有利的方向",
          'zh-TW': "謹慎地選擇對團隊最有利的方向",
          id: "Memutuskan dengan hati-hati ke arah yang paling menguntungkan tim",
          vi: "Quyết định cẩn thận theo hướng có lợi nhất cho nhóm"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "팀원이 실수했을 때?",
      en: "When a team member makes a mistake?",
      ja: "チームメンバーが失敗した時？",
      'zh-CN': "当团队成员犯错时？",
      'zh-TW': "當團隊成員犯錯時？",
      id: "Ketika anggota tim melakukan kesalahan?",
      vi: "Khi một thành viên nhóm mắc lỗi?"
    },
    options: [
      {
        text: {
          ko: "명확한 방향과 해결책 제시",
          en: "Present clear direction and solution",
          ja: "明確な方向性と解決策を示す",
          'zh-CN': "提出明确的方向和解决方案",
          'zh-TW': "提出明確的方向和解決方案",
          id: "Menyajikan arah dan solusi yang jelas",
          vi: "Trình bày hướng đi và giải pháp rõ ràng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "함께 원인 분석하고 대안 논의",
          en: "Analyze causes together and discuss alternatives",
          ja: "一緒に原因を分析し代替案を議論する",
          'zh-CN': "一起分析原因并讨论替代方案",
          'zh-TW': "一起分析原因並討論替代方案",
          id: "Menganalisis penyebab bersama dan mendiskusikan alternatif",
          vi: "Cùng phân tích nguyên nhân và thảo luận giải pháp thay thế"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "무엇을 배웠는지 성장 기회로 전환",
          en: "Transform it into a growth opportunity of what was learned",
          ja: "何を学んだかを成長の機会に変える",
          'zh-CN': "将其转化为成长机会",
          'zh-TW': "將其轉化為成長機會",
          id: "Mengubahnya menjadi peluang pertumbuhan dari apa yang dipelajari",
          vi: "Biến nó thành cơ hội phát triển từ những gì đã học"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "격려하며 실수를 만회할 기회 제공",
          en: "Encourage and provide opportunity to recover from the mistake",
          ja: "励ましながら失敗を取り戻す機会を提供する",
          'zh-CN': "鼓励并提供弥补错误的机会",
          'zh-TW': "鼓勵並提供彌補錯誤的機會",
          id: "Memberi semangat dan memberikan kesempatan untuk memulihkan diri dari kesalahan",
          vi: "Khuyến khích và tạo cơ hội khắc phục sai lầm"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "팀의 목표 설정 시?",
      en: "When setting team goals?",
      ja: "チームの目標設定の時？",
      'zh-CN': "设定团队目标时？",
      'zh-TW': "設定團隊目標時？",
      id: "Saat menetapkan tujuan tim?",
      vi: "Khi đặt mục tiêu nhóm?"
    },
    options: [
      {
        text: {
          ko: "도전적이고 영감을 주는 큰 목표",
          en: "Challenging and inspiring big goals",
          ja: "挑戦的でインスピレーションを与える大きな目標",
          'zh-CN': "具有挑战性和启发性的远大目标",
          'zh-TW': "具有挑戰性和啟發性的遠大目標",
          id: "Tujuan besar yang menantang dan menginspirasi",
          vi: "Mục tiêu lớn thách thức và truyền cảm hứng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "모두가 동의하고 참여하는 목표",
          en: "Goals that everyone agrees with and participates in",
          ja: "皆が同意し参加する目標",
          'zh-CN': "大家都同意并参与的目标",
          'zh-TW': "大家都同意並參與的目標",
          id: "Tujuan yang disetujui dan diikuti semua orang",
          vi: "Mục tiêu mà mọi người đồng ý và tham gia"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "각자의 성장을 촉진하는 목표",
          en: "Goals that promote each person's growth",
          ja: "各自の成長を促進する目標",
          'zh-CN': "促进每个人成长的目标",
          'zh-TW': "促進每個人成長的目標",
          id: "Tujuan yang mempromosikan pertumbuhan setiap orang",
          vi: "Mục tiêu thúc đẩy sự phát triển của từng người"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "팀원들의 행복과 안정을 고려한 목표",
          en: "Goals considering team members' happiness and stability",
          ja: "チームメンバーの幸福と安定を考慮した目標",
          'zh-CN': "考虑团队成员幸福和稳定的目标",
          'zh-TW': "考慮團隊成員幸福和穩定的目標",
          id: "Tujuan yang mempertimbangkan kebahagiaan dan stabilitas anggota tim",
          vi: "Mục tiêu cân nhắc hạnh phúc và ổn định của các thành viên nhóm"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "갈등 상황에서?",
      en: "In conflict situations?",
      ja: "対立状況で？",
      'zh-CN': "在冲突情况下？",
      'zh-TW': "在衝突情況下？",
      id: "Dalam situasi konflik?",
      vi: "Trong tình huống xung đột?"
    },
    options: [
      {
        text: {
          ko: "명확한 방향 제시하고 이끌어감",
          en: "Present clear direction and lead",
          ja: "明確な方向性を示し導く",
          'zh-CN': "提出明确方向并引导",
          'zh-TW': "提出明確方向並引導",
          id: "Menyajikan arah yang jelas dan memimpin",
          vi: "Trình bày hướng đi rõ ràng và dẫn dắt"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "양쪽 의견 듣고 합의점 찾기",
          en: "Listen to both sides and find agreement",
          ja: "両方の意見を聞き合意点を見つける",
          'zh-CN': "听取双方意见并找到共识",
          'zh-TW': "聽取雙方意見並找到共識",
          id: "Mendengarkan kedua belah pihak dan menemukan kesepakatan",
          vi: "Lắng nghe cả hai bên và tìm điểm đồng thuận"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "갈등의 원인 분석하고 학습 기회로",
          en: "Analyze causes of conflict and turn into learning opportunity",
          ja: "対立の原因を分析し学習の機会に変える",
          'zh-CN': "分析冲突原因并转化为学习机会",
          'zh-TW': "分析衝突原因並轉化為學習機會",
          id: "Menganalisis penyebab konflik dan mengubahnya menjadi peluang belajar",
          vi: "Phân tích nguyên nhân xung đột và biến thành cơ hội học tập"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "팀 화합 우선, 중재하고 보듬음",
          en: "Prioritize team harmony, mediate and comfort",
          ja: "チームの調和を優先し仲裁し包み込む",
          'zh-CN': "优先考虑团队和谐，调解并安抚",
          'zh-TW': "優先考慮團隊和諧，調解並安撫",
          id: "Memprioritaskan harmoni tim, memediasi dan menghibur",
          vi: "Ưu tiên sự hòa hợp nhóm, hòa giải và an ủi"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "팀원에게 동기부여할 때?",
      en: "When motivating team members?",
      ja: "チームメンバーに動機付けをする時？",
      'zh-CN': "激励团队成员时？",
      'zh-TW': "激勵團隊成員時？",
      id: "Saat memotivasi anggota tim?",
      vi: "Khi thúc đẩy các thành viên nhóm?"
    },
    options: [
      {
        text: {
          ko: "큰 비전과 성공의 그림 제시",
          en: "Present big vision and picture of success",
          ja: "大きなビジョンと成功の絵を提示する",
          'zh-CN': "提出远大愿景和成功蓝图",
          'zh-TW': "提出遠大願景和成功藍圖",
          id: "Menyajikan visi besar dan gambaran kesuksesan",
          vi: "Trình bày tầm nhìn lớn và bức tranh thành công"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "함께 세운 목표 상기시키며 격려",
          en: "Remind them of goals set together and encourage",
          ja: "一緒に立てた目標を思い出させ励ます",
          'zh-CN': "提醒共同设定的目标并鼓励",
          'zh-TW': "提醒共同設定的目標並鼓勵",
          id: "Mengingatkan mereka tentang tujuan yang ditetapkan bersama dan memberi semangat",
          vi: "Nhắc nhở về mục tiêu đã đặt cùng nhau và khuyến khích"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "개인별 성장과 발전 강조",
          en: "Emphasize individual growth and development",
          ja: "個人の成長と発展を強調する",
          'zh-CN': "强调个人成长和发展",
          'zh-TW': "強調個人成長和發展",
          id: "Menekankan pertumbuhan dan pengembangan individu",
          vi: "Nhấn mạnh sự phát triển và phát triển cá nhân"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "진심 어린 인정과 칭찬",
          en: "Sincere recognition and praise",
          ja: "心からの認識と称賛",
          'zh-CN': "真诚的认可和赞扬",
          'zh-TW': "真誠的認可和讚揚",
          id: "Pengakuan dan pujian yang tulus",
          vi: "Sự công nhận và khen ngợi chân thành"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "당신의 리더십 스타일은?",
      en: "What is your leadership style?",
      ja: "あなたのリーダーシップスタイルは？",
      'zh-CN': "你的领导风格是？",
      'zh-TW': "你的領導風格是？",
      id: "Apa gaya kepemimpinan Anda?",
      vi: "Phong cách lãnh đạo của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "강력한 영향력으로 이끄는 리더십",
          en: "Leadership that leads with strong influence",
          ja: "強力な影響力で導くリーダーシップ",
          'zh-CN': "以强大影响力领导的领导力",
          'zh-TW': "以強大影響力領導的領導力",
          id: "Kepemimpinan yang memimpin dengan pengaruh kuat",
          vi: "Lãnh đạo dẫn dắt bằng ảnh hưởng mạnh mẽ"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "함께 만들어가는 참여형 리더십",
          en: "Participatory leadership that creates together",
          ja: "一緒に作る参加型リーダーシップ",
          'zh-CN': "共同创造的参与式领导力",
          'zh-TW': "共同創造的參與式領導力",
          id: "Kepemimpinan partisipatif yang menciptakan bersama",
          vi: "Lãnh đạo tham gia cùng nhau tạo ra"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "가르치고 성장시키는 멘토 리더십",
          en: "Mentor leadership that teaches and nurtures growth",
          ja: "教え成長させるメンターリーダーシップ",
          'zh-CN': "教授并培养成长的导师式领导力",
          'zh-TW': "教授並培養成長的導師式領導力",
          id: "Kepemimpinan mentor yang mengajar dan menumbuhkan pertumbuhan",
          vi: "Lãnh đạo cố vấn dạy dỗ và nuôi dưỡng sự phát triển"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "섬기며 지원하는 봉사 리더십",
          en: "Servant leadership that serves and supports",
          ja: "奉仕し支援するサーバントリーダーシップ",
          'zh-CN': "服务和支持的仆人式领导力",
          'zh-TW': "服務和支持的僕人式領導力",
          id: "Kepemimpinan pelayan yang melayani dan mendukung",
          vi: "Lãnh đạo phục vụ phục vụ và hỗ trợ"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "새로운 프로젝트 제안 시?",
      en: "When proposing a new project?",
      ja: "新しいプロジェクトを提案する時？",
      'zh-CN': "提出新项目时？",
      'zh-TW': "提出新項目時？",
      id: "Saat mengusulkan proyek baru?",
      vi: "Khi đề xuất dự án mới?"
    },
    options: [
      {
        text: {
          ko: "대담하고 혁신적인 도전 과제",
          en: "Bold and innovative challenge",
          ja: "大胆で革新的な挑戦課題",
          'zh-CN': "大胆且创新的挑战性任务",
          'zh-TW': "大膽且創新的挑戰性任務",
          id: "Tantangan yang berani dan inovatif",
          vi: "Thách thức táo bạo và đổi mới"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀원들의 아이디어를 모아서 발전",
          en: "Gather team members' ideas and develop them",
          ja: "チームメンバーのアイデアを集めて発展させる",
          'zh-CN': "收集团队成员的想法并发展",
          'zh-TW': "收集團隊成員的想法並發展",
          id: "Mengumpulkan ide anggota tim dan mengembangkannya",
          vi: "Thu thập ý tưởng của các thành viên nhóm và phát triển"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "팀원들이 성장할 수 있는 기회 제공",
          en: "Provide opportunities for team members to grow",
          ja: "チームメンバーが成長できる機会を提供する",
          'zh-CN': "为团队成员提供成长机会",
          'zh-TW': "為團隊成員提供成長機會",
          id: "Memberikan peluang bagi anggota tim untuk tumbuh",
          vi: "Cung cấp cơ hội cho các thành viên nhóm phát triển"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "팀에 무리 없는 현실적 계획",
          en: "Realistic plan that doesn't burden the team",
          ja: "チームに無理のない現実的な計画",
          'zh-CN': "不加重团队负担的现实计划",
          'zh-TW': "不加重團隊負擔的現實計劃",
          id: "Rencana realistis yang tidak membebani tim",
          vi: "Kế hoạch thực tế không gây gánh nặng cho nhóm"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "회의를 진행할 때?",
      en: "When conducting meetings?",
      ja: "会議を進行する時？",
      'zh-CN': "主持会议时？",
      'zh-TW': "主持會議時？",
      id: "Saat mengadakan rapat?",
      vi: "Khi tiến hành cuộc họp?"
    },
    options: [
      {
        text: {
          ko: "명확한 안건으로 효율적 진행",
          en: "Progress efficiently with clear agenda",
          ja: "明確な議題で効率的に進行する",
          'zh-CN': "按明确议程高效进行",
          'zh-TW': "按明確議程高效進行",
          id: "Berjalan efisien dengan agenda yang jelas",
          vi: "Tiến hành hiệu quả với chương trình nghị sự rõ ràng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "모두가 자유롭게 발언할 기회 제공",
          en: "Provide opportunity for everyone to speak freely",
          ja: "皆が自由に発言できる機会を提供する",
          'zh-CN': "为每个人提供自由发言的机会",
          'zh-TW': "為每個人提供自由發言的機會",
          id: "Memberikan kesempatan bagi semua orang untuk berbicara bebas",
          vi: "Tạo cơ hội cho mọi người phát biểu tự do"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "브레인스토밍과 학습 위주",
          en: "Focus on brainstorming and learning",
          ja: "ブレインストーミングと学習を中心に",
          'zh-CN': "以头脑风暴和学习为主",
          'zh-TW': "以頭腦風暴和學習為主",
          id: "Fokus pada brainstorming dan pembelajaran",
          vi: "Tập trung vào động não và học tập"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "편안한 분위기에서 부담 없이",
          en: "In comfortable atmosphere without burden",
          ja: "快適な雰囲気で負担なく",
          'zh-CN': "在舒适的氛围中轻松进行",
          'zh-TW': "在舒適的氛圍中輕鬆進行",
          id: "Dalam suasana nyaman tanpa beban",
          vi: "Trong bầu không khí thoải mái không gánh nặng"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "팀원 평가 시 가장 중요한 것은?",
      en: "What is most important when evaluating team members?",
      ja: "チームメンバー評価で最も重要なことは？",
      'zh-CN': "评估团队成员时最重要的是？",
      'zh-TW': "評估團隊成員時最重要的是？",
      id: "Apa yang paling penting saat mengevaluasi anggota tim?",
      vi: "Điều quan trọng nhất khi đánh giá các thành viên nhóm là gì?"
    },
    options: [
      {
        text: {
          ko: "목표 달성도와 성과",
          en: "Goal achievement and performance",
          ja: "目標達成度と成果",
          'zh-CN': "目标达成度和绩效",
          'zh-TW': "目標達成度和績效",
          id: "Pencapaian tujuan dan kinerja",
          vi: "Mức độ đạt mục tiêu và hiệu suất"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "협업과 팀워크 기여도",
          en: "Collaboration and teamwork contribution",
          ja: "協力とチームワーク貢献度",
          'zh-CN': "协作和团队合作贡献度",
          'zh-TW': "協作和團隊合作貢獻度",
          id: "Kontribusi kolaborasi dan kerja tim",
          vi: "Đóng góp hợp tác và làm việc nhóm"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "성장과 발전 정도",
          en: "Degree of growth and development",
          ja: "成長と発展の程度",
          'zh-CN': "成长和发展程度",
          'zh-TW': "成長和發展程度",
          id: "Tingkat pertumbuhan dan pengembangan",
          vi: "Mức độ phát triển và tiến bộ"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "노력과 긍정적 태도",
          en: "Effort and positive attitude",
          ja: "努力と前向きな姿勢",
          'zh-CN': "努力和积极态度",
          'zh-TW': "努力和積極態度",
          id: "Usaha dan sikap positif",
          vi: "Nỗ lực và thái độ tích cực"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "위기 상황에서?",
      en: "In crisis situations?",
      ja: "危機状況で？",
      'zh-CN': "在危机情况下？",
      'zh-TW': "在危機情況下？",
      id: "Dalam situasi krisis?",
      vi: "Trong tình huống khủng hoảng?"
    },
    options: [
      {
        text: {
          ko: "단호하게 결단하고 돌파",
          en: "Decide decisively and break through",
          ja: "断固として決断し突破する",
          'zh-CN': "果断决策并突破",
          'zh-TW': "果斷決策並突破",
          id: "Memutuskan dengan tegas dan menerobos",
          vi: "Quyết định quyết đoán và đột phá"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀과 함께 해결책 모색",
          en: "Search for solutions together with the team",
          ja: "チームと一緒に解決策を模索する",
          'zh-CN': "与团队一起寻找解决方案",
          'zh-TW': "與團隊一起尋找解決方案",
          id: "Mencari solusi bersama tim",
          vi: "Tìm kiếm giải pháp cùng nhóm"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "위기를 배움과 성장의 기회로",
          en: "Turn crisis into opportunity for learning and growth",
          ja: "危機を学びと成長の機会に変える",
          'zh-CN': "将危机转化为学习和成长的机会",
          'zh-TW': "將危機轉化為學習和成長的機會",
          id: "Mengubah krisis menjadi peluang belajar dan pertumbuhan",
          vi: "Biến khủng hoảng thành cơ hội học tập và phát triển"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "팀원들 보호와 지원 최우선",
          en: "Prioritize protection and support of team members",
          ja: "チームメンバーの保護と支援を最優先",
          'zh-CN': "优先保护和支援团队成员",
          'zh-TW': "優先保護和支援團隊成員",
          id: "Memprioritaskan perlindungan dan dukungan anggota tim",
          vi: "Ưu tiên bảo vệ và hỗ trợ các thành viên nhóm"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이상적인 팀 문화는?",
      en: "What is ideal team culture?",
      ja: "理想的なチーム文化は？",
      'zh-CN': "理想的团队文化是？",
      'zh-TW': "理想的團隊文化是？",
      id: "Apa budaya tim yang ideal?",
      vi: "Văn hóa nhóm lý tưởng là gì?"
    },
    options: [
      {
        text: {
          ko: "도전적이고 역동적인 분위기",
          en: "Challenging and dynamic atmosphere",
          ja: "挑戦的で動的な雰囲気",
          'zh-CN': "具有挑战性和活力的氛围",
          'zh-TW': "具有挑戰性和活力的氛圍",
          id: "Suasana yang menantang dan dinamis",
          vi: "Bầu không khí thách thức và năng động"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "민주적이고 수평적인 분위기",
          en: "Democratic and horizontal atmosphere",
          ja: "民主的で水平的な雰囲気",
          'zh-CN': "民主和平等的氛围",
          'zh-TW': "民主和平等的氛圍",
          id: "Suasana demokratis dan horizontal",
          vi: "Bầu không khí dân chủ và bình đẳng"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "배우고 성장하는 분위기",
          en: "Atmosphere of learning and growing",
          ja: "学び成長する雰囲気",
          'zh-CN': "学习和成长的氛围",
          'zh-TW': "學習和成長的氛圍",
          id: "Suasana belajar dan berkembang",
          vi: "Bầu không khí học tập và phát triển"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "따뜻하고 서로 지지하는 분위기",
          en: "Warm and mutually supportive atmosphere",
          ja: "温かくお互いに支え合う雰囲気",
          'zh-CN': "温暖和相互支持的氛围",
          'zh-TW': "溫暖和相互支持的氛圍",
          id: "Suasana hangat dan saling mendukung",
          vi: "Bầu không khí ấm áp và hỗ trợ lẫn nhau"
        },
        scores: { Type4: 3 }
      }
    ]
  }
];

export const leadershipResults: LeadershipResult[] = [
  {
    type: "Type1",
    emoji: "⚡",
    title: {
      ko: "카리스마 리더형",
      en: "Charismatic Leader",
      ja: "カリスマリーダー型",
      'zh-CN': "魅力型领导",
      'zh-TW': "魅力型領導",
      id: "Pemimpin Karismatik",
      vi: "Lãnh đạo Có sức hút"
    },
    subtitle: {
      ko: "강력한 비전! 열정으로 이끄는 영감의 리더",
      en: "Strong vision! Inspiring leader driven by passion",
      ja: "強力なビジョン！情熱で導くインスピレーションのリーダー",
      'zh-CN': "强大的愿景！以激情驱动的启发性领导者",
      'zh-TW': "強大的願景！以激情驅動的啟發性領導者",
      id: "Visi kuat! Pemimpin inspiratif yang digerakkan oleh semangat",
      vi: "Tầm nhìn mạnh mẽ! Lãnh đạo truyền cảm hứng được thúc đẩy bởi đam mê"
    },
    description: {
      ko: "강력한 카리스마와 비전으로 팀을 이끕니다. 열정적이고 자신감 넘치며, 큰 그림을 제시하여 사람들에게 영감을 줍니다. 위기 상황에서 빛을 발하고, 도전적인 목표를 달성합니다. 결단력이 뛰어나고 추진력이 강합니다. 다만 독단적으로 보일 수 있고 팀원 의견을 간과할 수 있으니 소통을 강화하세요.",
      en: "Leads the team with strong charisma and vision. Passionate and confident, inspiring people by presenting the big picture. Shines in crisis situations and achieves challenging goals. Excellent decision-making and strong drive. However, may appear autocratic and overlook team members' opinions, so strengthen communication.",
      ja: "強力なカリスマとビジョンでチームを導きます。情熱的で自信に満ち、大きな絵を提示して人々にインスピレーションを与えます。危機状況で光を放ち、挑戦的な目標を達成します。決断力に優れ推進力が強いです。ただし独断的に見えたりチームメンバーの意見を見落とす可能性があるので、コミュニケーションを強化してください。",
      'zh-CN': "以强大的魅力和愿景领导团队。充满激情和自信，通过呈现宏大蓝图激励人们。在危机情况下表现出色，实现具有挑战性的目标。决策能力强，推动力强。但可能显得独断，忽视团队成员意见，因此需要加强沟通。",
      'zh-TW': "以強大的魅力和願景領導團隊。充滿激情和自信，通過呈現宏大藍圖激勵人們。在危機情況下表現出色，實現具有挑戰性的目標。決策能力強，推動力強。但可能顯得獨斷，忽視團隊成員意見，因此需要加強溝通。",
      id: "Memimpin tim dengan karisma dan visi yang kuat. Penuh semangat dan percaya diri, menginspirasi orang dengan menyajikan gambaran besar. Bersinar dalam situasi krisis dan mencapai tujuan yang menantang. Keputusan yang sangat baik dan dorongan yang kuat. Namun, mungkin tampak otokratis dan mengabaikan pendapat anggota tim, jadi perkuat komunikasi.",
      vi: "Dẫn dắt nhóm bằng sức hút và tầm nhìn mạnh mẽ. Đam mê và tự tin, truyền cảm hứng cho mọi người bằng cách trình bày bức tranh lớn. Tỏa sáng trong tình huống khủng hoảng và đạt được các mục tiêu thách thức. Quyết định xuất sắc và động lực mạnh mẽ. Tuy nhiên, có thể xuất hiện độc đoán và bỏ qua ý kiến của các thành viên nhóm, vì vậy hãy tăng cường giao tiếp."
    },
    traits: {
      ko: "비전 제시, 열정, 영감, 영향력, 결단력",
      en: "Vision presentation, passion, inspiration, influence, decisiveness",
      ja: "ビジョン提示、情熱、インスピレーション、影響力、決断力",
      'zh-CN': "愿景呈现、激情、启发、影响力、决断力",
      'zh-TW': "願景呈現、激情、啟發、影響力、決斷力",
      id: "Presentasi visi, semangat, inspirasi, pengaruh, ketegasan",
      vi: "Trình bày tầm nhìn, đam mê, truyền cảm hứng, ảnh hưởng, quyết đoán"
    },
    strengths: {
      ko: "강력한 동기부여, 위기 대처, 큰 성과 달성",
      en: "Strong motivation, crisis management, achieving big results",
      ja: "強力な動機付け、危機対応、大きな成果達成",
      'zh-CN': "强大的激励、危机应对、实现重大成果",
      'zh-TW': "強大的激勵、危機應對、實現重大成果",
      id: "Motivasi kuat, manajemen krisis, mencapai hasil besar",
      vi: "Động lực mạnh mẽ, quản lý khủng hoảng, đạt được kết quả lớn"
    },
    weaknesses: {
      ko: "독단적 결정, 소통 부족, 팀원 의존성",
      en: "Autocratic decisions, lack of communication, team member dependency",
      ja: "独断的な決定、コミュニケーション不足、チームメンバー依存性",
      'zh-CN': "专断决策、沟通不足、团队成员依赖性",
      'zh-TW': "專斷決策、溝通不足、團隊成員依賴性",
      id: "Keputusan otokratis, kurang komunikasi, ketergantungan anggota tim",
      vi: "Quyết định độc đoán, thiếu giao tiếp, phụ thuộc thành viên nhóm"
    },
    advice: {
      ko: "비전도 중요하지만 팀원의 목소리에도 귀 기울이세요. 일방적 지시보다 설득과 공감이 더 강력합니다.",
      en: "Vision is important, but also listen to your team members' voices. Persuasion and empathy are more powerful than one-sided instructions.",
      ja: "ビジョンも重要ですが、チームメンバーの声にも耳を傾けてください。一方的な指示よりも説得と共感がより強力です。",
      'zh-CN': "愿景很重要，但也要倾听团队成员的声音。说服和同理心比单方面的指示更强大。",
      'zh-TW': "願景很重要，但也要傾聽團隊成員的聲音。說服和同理心比單方面的指示更強大。",
      id: "Visi penting, tetapi juga dengarkan suara anggota tim Anda. Persuasi dan empati lebih kuat daripada instruksi sepihak.",
      vi: "Tầm nhìn rất quan trọng, nhưng cũng hãy lắng nghe tiếng nói của các thành viên nhóm. Thuyết phục và đồng cảm mạnh mẽ hơn các chỉ dẫn một chiều."
    },
    famousLeaders: {
      ko: "스티브 잡스, 일론 머스크, 잭 마",
      en: "Steve Jobs, Elon Musk, Jack Ma",
      ja: "スティーブ・ジョブズ、イーロン・マスク、ジャック・マー",
      'zh-CN': "史蒂夫·乔布斯、埃隆·马斯克、马云",
      'zh-TW': "史蒂夫·喬布斯、埃隆·馬斯克、馬雲",
      id: "Steve Jobs, Elon Musk, Jack Ma",
      vi: "Steve Jobs, Elon Musk, Jack Ma"
    }
  },
  {
    type: "Type2",
    emoji: "🤝",
    title: {
      ko: "민주적 리더형",
      en: "Democratic Leader",
      ja: "民主的リーダー型",
      'zh-CN': "民主型领导",
      'zh-TW': "民主型領導",
      id: "Pemimpin Demokratis",
      vi: "Lãnh đạo Dân chủ"
    },
    subtitle: {
      ko: "함께 만드는 리더십! 소통과 합의의 달인",
      en: "Leadership created together! Master of communication and consensus",
      ja: "一緒に作るリーダーシップ！コミュニケーションと合意の達人",
      'zh-CN': "共同创造的领导力！沟通与共识的大师",
      'zh-TW': "共同創造的領導力！溝通與共識的大師",
      id: "Kepemimpinan yang diciptakan bersama! Master komunikasi dan konsensus",
      vi: "Lãnh đạo được tạo ra cùng nhau! Bậc thầy về giao tiếp và đồng thuận"
    },
    description: {
      ko: "팀원들의 의견을 존중하고 함께 결정합니다. 민주적이고 수평적인 문화를 만들며, 모두가 참여하는 리더십을 발휘합니다. 소통이 원활하고 팀워크가 좋으며, 팀원 만족도가 높습니다. 창의적인 아이디어가 많이 나오고 팀 결속력이 강합니다. 다만 의사결정이 느릴 수 있고 위기 시 우유부단할 수 있으니 때로는 결단도 필요합니다.",
      en: "Respects team members' opinions and makes decisions together. Creates democratic and horizontal culture, exercising participatory leadership. Smooth communication, good teamwork, and high team member satisfaction. Creative ideas emerge frequently and team cohesion is strong. However, decision-making may be slow and indecisive in crises, so decisive action is needed at times.",
      ja: "チームメンバーの意見を尊重し一緒に決定します。民主的で水平的な文化を作り、皆が参加するリーダーシップを発揮します。コミュニケーションが円滑でチームワークが良く、チームメンバーの満足度が高いです。創造的なアイデアが多く出てチームの結束力が強いです。ただし意思決定が遅れることがあり危機時に優柔不断になる可能性があるので、時には決断も必要です。",
      'zh-CN': "尊重团队成员的意见并共同决策。创造民主和平等的文化，发挥参与式领导力。沟通顺畅，团队合作良好，团队成员满意度高。创意想法频出，团队凝聚力强。但决策可能较慢，危机时可能优柔寡断，因此有时需要果断行动。",
      'zh-TW': "尊重團隊成員的意見並共同決策。創造民主和平等的文化，發揮參與式領導力。溝通順暢，團隊合作良好，團隊成員滿意度高。創意想法頻出，團隊凝聚力強。但決策可能較慢，危機時可能優柔寡斷，因此有時需要果斷行動。",
      id: "Menghormati pendapat anggota tim dan membuat keputusan bersama. Menciptakan budaya demokratis dan horizontal, menjalankan kepemimpinan partisipatif. Komunikasi lancar, kerja tim yang baik, dan kepuasan anggota tim yang tinggi. Ide kreatif sering muncul dan kohesi tim kuat. Namun, pengambilan keputusan mungkin lambat dan tidak tegas dalam krisis, jadi tindakan tegas diperlukan sesekali.",
      vi: "Tôn trọng ý kiến của các thành viên nhóm và đưa ra quyết định cùng nhau. Tạo ra văn hóa dân chủ và bình đẳng, thực hiện lãnh đạo tham gia. Giao tiếp suôn sẻ, làm việc nhóm tốt và mức độ hài lòng của thành viên nhóm cao. Ý tưởng sáng tạo xuất hiện thường xuyên và sự gắn kết nhóm mạnh mẽ. Tuy nhiên, việc ra quyết định có thể chậm và thiếu quyết đoán trong khủng hoảng, vì vậy đôi khi cần hành động quyết đoán."
    },
    traits: {
      ko: "소통, 합의, 참여, 수평, 존중",
      en: "Communication, consensus, participation, horizontal, respect",
      ja: "コミュニケーション、合意、参加、水平的、尊重",
      'zh-CN': "沟通、共识、参与、平等、尊重",
      'zh-TW': "溝通、共識、參與、平等、尊重",
      id: "Komunikasi, konsensus, partisipasi, horizontal, rasa hormat",
      vi: "Giao tiếp, đồng thuận, tham gia, bình đẳng, tôn trọng"
    },
    strengths: {
      ko: "높은 팀워크, 만족도, 창의성, 주인의식",
      en: "High teamwork, satisfaction, creativity, sense of ownership",
      ja: "高いチームワーク、満足度、創造性、主体性",
      'zh-CN': "高团队合作、满意度、创造力、主人翁意识",
      'zh-TW': "高團隊合作、滿意度、創造力、主人翁意識",
      id: "Kerja tim tinggi, kepuasan, kreativitas, rasa kepemilikan",
      vi: "Làm việc nhóm cao, sự hài lòng, sáng tạo, ý thức làm chủ"
    },
    weaknesses: {
      ko: "느린 의사결정, 위기 대처 약함",
      en: "Slow decision-making, weak crisis response",
      ja: "遅い意思決定、危機対応が弱い",
      'zh-CN': "决策缓慢、危机应对薄弱",
      'zh-TW': "決策緩慢、危機應對薄弱",
      id: "Pengambilan keputusan lambat, respons krisis lemah",
      vi: "Ra quyết định chậm, phản ứng khủng hoảng yếu"
    },
    advice: {
      ko: "합의도 중요하지만 완벽한 합의는 없어요. 때로는 과감한 결단도 리더의 역할입니다.",
      en: "Consensus is important, but perfect consensus doesn't exist. Sometimes bold decisions are also a leader's role.",
      ja: "合意も重要ですが完璧な合意はありません。時には大胆な決断もリーダーの役割です。",
      'zh-CN': "共识很重要，但不存在完美的共识。有时大胆的决策也是领导者的职责。",
      'zh-TW': "共識很重要，但不存在完美的共識。有時大膽的決策也是領導者的職責。",
      id: "Konsensus penting, tetapi konsensus sempurna tidak ada. Terkadang keputusan berani juga peran seorang pemimpin.",
      vi: "Đồng thuận rất quan trọng, nhưng không có sự đồng thuận hoàn hảo. Đôi khi quyết định táo bạo cũng là vai trò của nhà lãnh đạo."
    },
    famousLeaders: {
      ko: "사티아 나델라, 팀 쿡, 하워드 슐츠",
      en: "Satya Nadella, Tim Cook, Howard Schultz",
      ja: "サティア・ナデラ、ティム・クック、ハワード・シュルツ",
      'zh-CN': "萨蒂亚·纳德拉、蒂姆·库克、霍华德·舒尔茨",
      'zh-TW': "薩蒂亞·納德拉、蒂姆·庫克、霍華德·舒爾茨",
      id: "Satya Nadella, Tim Cook, Howard Schultz",
      vi: "Satya Nadella, Tim Cook, Howard Schultz"
    }
  },
  {
    type: "Type3",
    emoji: "🎓",
    title: {
      ko: "코칭형 리더",
      en: "Coaching Leader",
      ja: "コーチングリーダー型",
      'zh-CN': "教练型领导",
      'zh-TW': "教練型領導",
      id: "Pemimpin Pelatih",
      vi: "Lãnh đạo Huấn luyện"
    },
    subtitle: {
      ko: "성장이 목표! 가르치고 키우는 멘토 리더",
      en: "Growth is the goal! Mentor leader who teaches and nurtures",
      ja: "成長が目標！教え育てるメンターリーダー",
      'zh-CN': "成长是目标！教授和培养的导师式领导者",
      'zh-TW': "成長是目標！教授和培養的導師式領導者",
      id: "Pertumbuhan adalah tujuan! Pemimpin mentor yang mengajar dan membina",
      vi: "Phát triển là mục tiêu! Lãnh đạo cố vấn dạy dỗ và nuôi dưỡng"
    },
    description: {
      ko: "팀원의 성장과 발전에 집중합니다. 가르치고 피드백하며, 개인의 잠재력을 끌어냅니다. 장기적 관점으로 인재를 육성하고, 실수도 배움의 기회로 만듭니다. 1대1 소통이 많고 개인별 맞춤 지도를 제공합니다. 팀원들의 충성도가 높고 장기적으로 강한 팀을 만듭니다. 다만 시간이 많이 걸리고 단기 성과는 낮을 수 있으니 균형이 필요합니다.",
      en: "Focuses on team members' growth and development. Teaches and provides feedback, drawing out individual potential. Nurtures talent from a long-term perspective, turning mistakes into learning opportunities. Frequent one-on-one communication and personalized guidance. High team member loyalty and builds strong teams long-term. However, it takes time and short-term results may be low, so balance is needed.",
      ja: "チームメンバーの成長と発展に集中します。教えフィードバックし、個人の潜在能力を引き出します。長期的視点で人材を育成し、失敗も学びの機会にします。1対1のコミュニケーションが多く個人別のカスタマイズ指導を提供します。チームメンバーの忠誠度が高く長期的に強いチームを作ります。ただし時間がかかり短期の成果は低い可能性があるので、バランスが必要です。",
      'zh-CN': "专注于团队成员的成长和发展。教授并提供反馈，激发个人潜力。从长期角度培养人才，将错误转化为学习机会。大量一对一的沟通和个性化指导。团队成员忠诚度高，长期构建强大的团队。但需要时间，短期成果可能较低，因此需要平衡。",
      'zh-TW': "專注於團隊成員的成長和發展。教授並提供反饋，激發個人潛力。從長期角度培養人才，將錯誤轉化為學習機會。大量一對一的溝通和個性化指導。團隊成員忠誠度高，長期構建強大的團隊。但需要時間，短期成果可能較低，因此需要平衡。",
      id: "Fokus pada pertumbuhan dan pengembangan anggota tim. Mengajar dan memberikan umpan balik, mengeluarkan potensi individu. Membina bakat dari perspektif jangka panjang, mengubah kesalahan menjadi peluang belajar. Komunikasi satu-satu yang sering dan bimbingan yang dipersonalisasi. Loyalitas anggota tim yang tinggi dan membangun tim yang kuat dalam jangka panjang. Namun, membutuhkan waktu dan hasil jangka pendek mungkin rendah, jadi keseimbangan diperlukan.",
      vi: "Tập trung vào sự phát triển và tiến bộ của các thành viên nhóm. Dạy dỗ và cung cấp phản hồi, khơi dậy tiềm năng cá nhân. Nuôi dưỡng tài năng từ góc độ dài hạn, biến sai lầm thành cơ hội học tập. Giao tiếp một đối một thường xuyên và hướng dẫn cá nhân hóa. Lòng trung thành của các thành viên nhóm cao và xây dựng nhóm mạnh mẽ về lâu dài. Tuy nhiên, mất thời gian và kết quả ngắn hạn có thể thấp, vì vậy cần cân bằng."
    },
    traits: {
      ko: "멘토링, 피드백, 성장, 교육, 인내",
      en: "Mentoring, feedback, growth, education, patience",
      ja: "メンタリング、フィードバック、成長、教育、忍耐",
      'zh-CN': "指导、反馈、成长、教育、耐心",
      'zh-TW': "指導、反饋、成長、教育、耐心",
      id: "Mentoring, umpan balik, pertumbuhan, pendidikan, kesabaran",
      vi: "Cố vấn, phản hồi, phát triển, giáo dục, kiên nhẫn"
    },
    strengths: {
      ko: "인재 육성, 장기 성과, 높은 충성도",
      en: "Talent development, long-term results, high loyalty",
      ja: "人材育成、長期成果、高い忠誠度",
      'zh-CN': "人才培养、长期成果、高忠诚度",
      'zh-TW': "人才培養、長期成果、高忠誠度",
      id: "Pengembangan bakat, hasil jangka panjang, loyalitas tinggi",
      vi: "Phát triển tài năng, kết quả dài hạn, lòng trung thành cao"
    },
    weaknesses: {
      ko: "시간 소요 많음, 단기 성과 부족",
      en: "Time-consuming, lack of short-term results",
      ja: "時間を要する、短期成果不足",
      'zh-CN': "耗时、缺乏短期成果",
      'zh-TW': "耗時、缺乏短期成果",
      id: "Memakan waktu, kurang hasil jangka pendek",
      vi: "Tốn thời gian, thiếu kết quả ngắn hạn"
    },
    advice: {
      ko: "성장도 중요하지만 당장의 결과도 필요해요. 장기와 단기의 균형을 맞추세요.",
      en: "Growth is important, but immediate results are also needed. Balance long-term and short-term.",
      ja: "成長も重要ですが、今すぐの結果も必要です。長期と短期のバランスを取ってください。",
      'zh-CN': "成长很重要，但也需要立即的成果。平衡长期和短期。",
      'zh-TW': "成長很重要，但也需要立即的成果。平衡長期和短期。",
      id: "Pertumbuhan penting, tetapi hasil segera juga diperlukan. Seimbangkan jangka panjang dan jangka pendek.",
      vi: "Phát triển rất quan trọng, nhưng cũng cần kết quả ngay lập tức. Cân bằng dài hạn và ngắn hạn."
    },
    famousLeaders: {
      ko: "빌 게이츠, 워렌 버핏, 셰릴 샌드버그",
      en: "Bill Gates, Warren Buffett, Sheryl Sandberg",
      ja: "ビル・ゲイツ、ウォーレン・バフェット、シェリル・サンドバーグ",
      'zh-CN': "比尔·盖茨、沃伦·巴菲特、雪莉·桑德伯格",
      'zh-TW': "比爾·蓋茨、沃倫·巴菲特、雪莉·桑德伯格",
      id: "Bill Gates, Warren Buffett, Sheryl Sandberg",
      vi: "Bill Gates, Warren Buffett, Sheryl Sandberg"
    }
  },
  {
    type: "Type4",
    emoji: "💙",
    title: {
      ko: "서번트 리더형",
      en: "Servant Leader",
      ja: "サーバントリーダー型",
      'zh-CN': "仆人型领导",
      'zh-TW': "僕人型領導",
      id: "Pemimpin Pelayan",
      vi: "Lãnh đạo Phục vụ"
    },
    subtitle: {
      ko: "섬기는 리더십! 팀을 위해 봉사하는 리더",
      en: "Servant leadership! Leader who serves the team",
      ja: "奉仕するリーダーシップ！チームのために奉仕するリーダー",
      'zh-CN': "仆人式领导力！为团队服务的领导者",
      'zh-TW': "僕人式領導力！為團隊服務的領導者",
      id: "Kepemimpinan pelayan! Pemimpin yang melayani tim",
      vi: "Lãnh đạo phục vụ! Người lãnh đạo phục vụ nhóm"
    },
    description: {
      ko: "팀원을 먼저 생각하고 섬기는 리더십을 발휘합니다. 지원하고 보살피며, 팀원의 행복과 안정을 최우선으로 합니다. 겸손하고 배려심 깊으며, 팀원들을 위해 희생할 줄 압니다. 신뢰와 충성도가 매우 높고 팀 분위기가 따뜻합니다. 다만 때로는 결단력이 부족하고 성과 압박에 약할 수 있으니 적절한 균형이 필요합니다.",
      en: "Exercises leadership that thinks of team members first and serves them. Supports and cares for them, prioritizing team members' happiness and stability. Humble and deeply considerate, willing to sacrifice for team members. Very high trust and loyalty, warm team atmosphere. However, may lack decisiveness at times and be weak against performance pressure, so appropriate balance is needed.",
      ja: "チームメンバーを最優先に考え奉仕するリーダーシップを発揮します。支援し世話をし、チームメンバーの幸福と安定を最優先にします。謙虚で思いやりが深く、チームメンバーのために犠牲を惜しみません。信頼と忠誠度が非常に高くチームの雰囲気が温かいです。ただし時には決断力が不足し成果の圧力に弱い可能性があるので、適切なバランスが必要です。",
      'zh-CN': "发挥优先考虑团队成员并服务他们的领导力。支持并照顾他们，优先考虑团队成员的幸福和稳定。谦逊且深思熟虑，愿意为团队成员牺牲。信任和忠诚度非常高，团队氛围温暖。但有时可能缺乏决断力，在绩效压力面前较弱，因此需要适当的平衡。",
      'zh-TW': "發揮優先考慮團隊成員並服務他們的領導力。支持並照顧他們，優先考慮團隊成員的幸福和穩定。謙遜且深思熟慮，願意為團隊成員犧牲。信任和忠誠度非常高，團隊氛圍溫暖。但有時可能缺乏決斷力，在績效壓力面前較弱，因此需要適當的平衡。",
      id: "Menjalankan kepemimpinan yang memikirkan anggota tim terlebih dahulu dan melayani mereka. Mendukung dan merawat mereka, memprioritaskan kebahagiaan dan stabilitas anggota tim. Rendah hati dan sangat perhatian, bersedia berkorban untuk anggota tim. Kepercayaan dan loyalitas sangat tinggi, suasana tim yang hangat. Namun, mungkin kurang tegas kadang-kadang dan lemah terhadap tekanan kinerja, jadi keseimbangan yang tepat diperlukan.",
      vi: "Thực hiện lãnh đạo đặt thành viên nhóm lên hàng đầu và phục vụ họ. Hỗ trợ và chăm sóc họ, ưu tiên hạnh phúc và ổn định của các thành viên nhóm. Khiêm tốn và chu đáo sâu sắc, sẵn sàng hy sinh cho các thành viên nhóm. Niềm tin và lòng trung thành rất cao, bầu không khí nhóm ấm áp. Tuy nhiên, có thể thiếu quyết đoán đôi khi và yếu trước áp lực hiệu suất, vì vậy cần cân bằng thích hợp."
    },
    traits: {
      ko: "봉사, 지원, 배려, 겸손, 희생",
      en: "Service, support, consideration, humility, sacrifice",
      ja: "奉仕、支援、配慮、謙虚、犠牲",
      'zh-CN': "服务、支持、体贴、谦逊、牺牲",
      'zh-TW': "服務、支持、體貼、謙遜、犧牲",
      id: "Pelayanan, dukungan, pertimbangan, kerendahan hati, pengorbanan",
      vi: "Phục vụ, hỗ trợ, quan tâm, khiêm tốn, hy sinh"
    },
    strengths: {
      ko: "높은 신뢰, 충성도, 좋은 분위기, 안정감",
      en: "High trust, loyalty, good atmosphere, stability",
      ja: "高い信頼、忠誠度、良い雰囲気、安定感",
      'zh-CN': "高信任、忠诚度、良好氛围、稳定感",
      'zh-TW': "高信任、忠誠度、良好氛圍、穩定感",
      id: "Kepercayaan tinggi, loyalitas, suasana baik, stabilitas",
      vi: "Niềm tin cao, lòng trung thành, bầu không khí tốt, sự ổn định"
    },
    weaknesses: {
      ko: "결단력 부족, 성과 압박 약함, 과도한 희생",
      en: "Lack of decisiveness, weak against performance pressure, excessive sacrifice",
      ja: "決断力不足、成果圧力に弱い、過度な犠牲",
      'zh-CN': "缺乏决断力、在绩效压力面前较弱、过度牺牲",
      'zh-TW': "缺乏決斷力、在績效壓力面前較弱、過度犧牲",
      id: "Kurang ketegasan, lemah terhadap tekanan kinerja, pengorbanan berlebihan",
      vi: "Thiếu quyết đoán, yếu trước áp lực hiệu suất, hy sinh quá mức"
    },
    advice: {
      ko: "섬기는 것도 좋지만 때로는 엄격함과 원칙도 필요합니다. 자신을 너무 희생하지 마세요.",
      en: "Serving is good, but sometimes strictness and principles are also needed. Don't sacrifice yourself too much.",
      ja: "奉仕することも良いですが、時には厳しさと原則も必要です。自分をあまり犠牲にしないでください。",
      'zh-CN': "服务很好，但有时也需要严格和原则。不要过度牺牲自己。",
      'zh-TW': "服務很好，但有時也需要嚴格和原則。不要過度犧牲自己。",
      id: "Melayani itu baik, tetapi kadang-kadang ketegasan dan prinsip juga diperlukan. Jangan mengorbankan diri Anda terlalu banyak.",
      vi: "Phục vụ là tốt, nhưng đôi khi cũng cần sự nghiêm khắc và nguyên tắc. Đừng hy sinh bản thân quá nhiều."
    },
    famousLeaders: {
      ko: "넬슨 만델라, 마더 테레사, 토니 셰이",
      en: "Nelson Mandela, Mother Teresa, Tony Hsieh",
      ja: "ネルソン・マンデラ、マザー・テレサ、トニー・シェイ",
      'zh-CN': "纳尔逊·曼德拉、特蕾莎修女、谢家华",
      'zh-TW': "納爾遜·曼德拉、特蕾莎修女、謝家華",
      id: "Nelson Mandela, Mother Teresa, Tony Hsieh",
      vi: "Nelson Mandela, Mẹ Teresa, Tony Hsieh"
    }
  }
];

export function calculateLeadershipResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0 };
  
  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      if (scores[type as keyof typeof scores] !== undefined) {
        scores[type as keyof typeof scores] += answer[type];
      }
    });
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 답변 확인)
  if (resultType && answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0 };
    
    lastThreeAnswers.forEach(answer => {
      Object.keys(answer).forEach(type => {
        if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
          lastThreeScores[type as keyof typeof lastThreeScores] += answer[type];
        }
      });
    });
    
    const maxLastScore = Math.max(...Object.values(lastThreeScores));
    const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
    
    return lastResultType || resultType;
  }
  
  return resultType || "Type1";
}
