export interface JobStrengthQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface JobStrengthResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  strengths: Record<string, string>[];
  weaknesses: Record<string, string>[];
  recommendedJobs: Record<string, string>;
  recommendedCompanies: Record<string, string>;
  advice: Record<string, string>;
}

export const jobStrengthQuestions: JobStrengthQuestion[] = [
  {
    id: 1,
    question: {
      ko: "새로운 프로젝트가 주어졌을 때 가장 먼저 하는 일은?",
      en: "When given a new project, what do you do first?",
      ja: "新しいプロジェクトが与えられた時、最初にすることは？",
      'zh-CN': "当给你一个新项目时，你首先做什么？",
      'zh-TW': "當給你一個新項目時，你首先做什麼？",
      id: "Ketika diberi proyek baru, hal pertama yang Anda lakukan adalah?",
      vi: "Khi được giao một dự án mới, việc đầu tiên bạn làm là gì?"
    },
    options: [
      {
        text: {
          ko: "전체 계획과 로드맵 수립",
          en: "Establish overall plan and roadmap",
          ja: "全体計画とロードマップの策定",
          'zh-CN': "制定整体计划和路线图",
          'zh-TW': "制定整體計劃和路線圖",
          id: "Membuat rencana keseluruhan dan roadmap",
          vi: "Lập kế hoạch tổng thể và lộ trình"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "사람들을 설득하고 지지 얻기",
          en: "Persuade people and gain support",
          ja: "人々を説得して支持を得る",
          'zh-CN': "说服人们并获得支持",
          'zh-TW': "說服人們並獲得支持",
          id: "Meyakinkan orang dan mendapatkan dukungan",
          vi: "Thuyết phục mọi người và giành được sự ủng hộ"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "자료 조사와 데이터 분석",
          en: "Research materials and analyze data",
          ja: "資料調査とデータ分析",
          'zh-CN': "研究材料和数据分析",
          'zh-TW': "研究材料和數據分析",
          id: "Menyelidiki bahan dan menganalisis data",
          vi: "Nghiên cứu tài liệu và phân tích dữ liệu"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "실행 가능성과 리소스 확인",
          en: "Check feasibility and resources",
          ja: "実行可能性とリソースの確認",
          'zh-CN': "检查可行性和资源",
          'zh-TW': "檢查可行性和資源",
          id: "Memeriksa kelayakan dan sumber daya",
          vi: "Kiểm tra tính khả thi và nguồn lực"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "당신이 가장 자신 있는 능력은?",
      en: "What ability are you most confident in?",
      ja: "最も自信のある能力は？",
      'zh-CN': "你最自信的能力是什么？",
      'zh-TW': "你最自信的能力是什麼？",
      id: "Kemampuan apa yang paling Anda percayai?",
      vi: "Khả năng nào bạn tự tin nhất?"
    },
    options: [
      {
        text: {
          ko: "큰 그림을 보고 전략 짜기",
          en: "Looking at the big picture and creating strategy",
          ja: "大きな絵を見て戦略を立てる",
          'zh-CN': "看大局制定战略",
          'zh-TW': "看大局制定戰略",
          id: "Melihat gambaran besar dan membuat strategi",
          vi: "Nhìn bức tranh lớn và lập chiến lược"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "사람들과 소통하고 설득하기",
          en: "Communicating and persuading people",
          ja: "人々とコミュニケーションを取り説得する",
          'zh-CN': "与人沟通和说服",
          'zh-TW': "與人溝通和說服",
          id: "Berkomunikasi dan meyakinkan orang",
          vi: "Giao tiếp và thuyết phục mọi người"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "깊이 있게 파고들어 분석하기",
          en: "Digging deep and analyzing",
          ja: "深く掘り下げて分析する",
          'zh-CN': "深入挖掘和分析",
          'zh-TW': "深入挖掘和分析",
          id: "Menggali dalam dan menganalisis",
          vi: "Đào sâu và phân tích"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "일을 체계적으로 정리하고 실행하기",
          en: "Organizing and executing work systematically",
          ja: "仕事を体系的に整理して実行する",
          'zh-CN': "系统性地整理和执行工作",
          'zh-TW': "系統性地整理和執行工作",
          id: "Mengatur dan mengeksekusi pekerjaan secara sistematis",
          vi: "Tổ chức và thực hiện công việc một cách có hệ thống"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "회의에서 당신의 역할은?",
      en: "What is your role in meetings?",
      ja: "会議でのあなたの役割は？",
      'zh-CN': "你在会议中的角色是什么？",
      'zh-TW': "你在會議中的角色是什麼？",
      id: "Apa peran Anda dalam rapat?",
      vi: "Vai trò của bạn trong cuộc họp là gì?"
    },
    options: [
      {
        text: {
          ko: "방향성과 목표 제시",
          en: "Presenting direction and goals",
          ja: "方向性と目標の提示",
          'zh-CN': "提出方向和目标",
          'zh-TW': "提出方向和目標",
          id: "Menyajikan arah dan tujuan",
          vi: "Đưa ra định hướng và mục tiêu"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "아이디어 제안과 분위기 주도",
          en: "Proposing ideas and leading the atmosphere",
          ja: "アイデア提案と雰囲気主導",
          'zh-CN': "提出想法和主导氛围",
          'zh-TW': "提出想法和主導氛圍",
          id: "Mengusulkan ide dan memimpin suasana",
          vi: "Đề xuất ý tưởng và dẫn dắt không khí"
        },
        scores: { Type5: 8, Type2: 2 }
      },
      {
        text: {
          ko: "데이터와 근거로 의견 뒷받침",
          en: "Supporting opinions with data and evidence",
          ja: "データと根拠で意見をサポート",
          'zh-CN': "用数据和证据支持意见",
          'zh-TW': "用數據和證據支持意見",
          id: "Mendukung pendapat dengan data dan bukti",
          vi: "Hỗ trợ ý kiến bằng dữ liệu và bằng chứng"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "실행 계획과 일정 정리",
          en: "Organizing execution plans and schedules",
          ja: "実行計画とスケジュール整理",
          'zh-CN': "整理执行计划和日程",
          'zh-TW': "整理執行計劃和日程",
          id: "Mengatur rencana eksekusi dan jadwal",
          vi: "Tổ chức kế hoạch thực hiện và lịch trình"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "가장 보람을 느끼는 순간은?",
      en: "When do you feel most fulfilled?",
      ja: "最もやりがいを感じる瞬間は？",
      'zh-CN': "什么时候最有成就感？",
      'zh-TW': "什麼時候最有成就感？",
      id: "Kapan Anda merasa paling puas?",
      vi: "Khi nào bạn cảm thấy hài lòng nhất?"
    },
    options: [
      {
        text: {
          ko: "내 전략이 성공적으로 실행될 때",
          en: "When my strategy is successfully executed",
          ja: "私の戦略が成功裏に実行された時",
          'zh-CN': "当我的战略成功执行时",
          'zh-TW': "當我的戰略成功執行時",
          id: "Ketika strategi saya berhasil dieksekusi",
          vi: "Khi chiến lược của tôi được thực hiện thành công"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "사람들을 설득하고 성과를 냈을 때",
          en: "When I persuade people and achieve results",
          ja: "人々を説得して成果を出した時",
          'zh-CN': "当我说服人们并取得成果时",
          'zh-TW': "當我說服人們並取得成果時",
          id: "Ketika saya meyakinkan orang dan mencapai hasil",
          vi: "Khi tôi thuyết phục mọi người và đạt được kết quả"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "문제의 원인을 찾고 해결했을 때",
          en: "When I find the cause of a problem and solve it",
          ja: "問題の原因を見つけて解決した時",
          'zh-CN': "当我找到问题原因并解决时",
          'zh-TW': "當我找到問題原因並解決時",
          id: "Ketika saya menemukan penyebab masalah dan menyelesaikannya",
          vi: "Khi tôi tìm ra nguyên nhân vấn đề và giải quyết nó"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "모든 일이 계획대로 진행될 때",
          en: "When everything goes according to plan",
          ja: "すべてが計画通りに進んだ時",
          'zh-CN': "当一切按计划进行时",
          'zh-TW': "當一切按計劃進行時",
          id: "Ketika semuanya berjalan sesuai rencana",
          vi: "Khi mọi thứ diễn ra theo kế hoạch"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "업무 스타일은?",
      en: "What is your work style?",
      ja: "仕事のスタイルは？",
      'zh-CN': "你的工作风格是什么？",
      'zh-TW': "你的工作風格是什麼？",
      id: "Bagaimana gaya kerja Anda?",
      vi: "Phong cách làm việc của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "장기적 관점에서 계획하고 실행",
          en: "Plan and execute from a long-term perspective",
          ja: "長期的視点で計画し実行",
          'zh-CN': "从长期角度规划和执行",
          'zh-TW': "從長期角度規劃和執行",
          id: "Merencanakan dan mengeksekusi dari perspektif jangka panjang",
          vi: "Lập kế hoạch và thực hiện từ góc độ dài hạn"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "역동적이고 사람 중심적",
          en: "Dynamic and people-centered",
          ja: "動的で人中心",
          'zh-CN': "动态且以人为本",
          'zh-TW': "動態且以人為本",
          id: "Dinamis dan berpusat pada orang",
          vi: "Năng động và lấy con người làm trung tâm"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "집중적이고 분석적",
          en: "Focused and analytical",
          ja: "集中力があり分析的",
          'zh-CN': "专注且分析性强",
          'zh-TW': "專注且分析性強",
          id: "Fokus dan analitis",
          vi: "Tập trung và phân tích"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "체계적이고 안정적",
          en: "Systematic and stable",
          ja: "体系的で安定",
          'zh-CN': "系统且稳定",
          'zh-TW': "系統且穩定",
          id: "Sistematis dan stabil",
          vi: "Có hệ thống và ổn định"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "스트레스를 받는 상황은?",
      en: "What situations stress you out?",
      ja: "ストレスを感じる状況は？",
      'zh-CN': "什么情况让你有压力？",
      'zh-TW': "什麼情況讓你有壓力？",
      id: "Situasi apa yang membuat Anda stres?",
      vi: "Tình huống nào khiến bạn căng thẳng?"
    },
    options: [
      {
        text: {
          ko: "방향성 없이 즉흥적으로 일할 때",
          en: "When working without direction and improvisationally",
          ja: "方向性なく即興的に働く時",
          'zh-CN': "当没有方向即兴工作时",
          'zh-TW': "當沒有方向即興工作時",
          id: "Ketika bekerja tanpa arah dan improvisasi",
          vi: "Khi làm việc không có định hướng và ứng biến"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "혼자서 조용히 일해야 할 때",
          en: "When I have to work alone quietly",
          ja: "一人で静かに働かなければならない時",
          'zh-CN': "当我必须独自安静工作时",
          'zh-TW': "當我必須獨自安靜工作時",
          id: "Ketika saya harus bekerja sendirian dengan tenang",
          vi: "Khi tôi phải làm việc một mình trong yên lặng"
        },
        scores: { Type6: 8, Type2: 2 }
      },
      {
        text: {
          ko: "근거 없이 감으로 결정할 때",
          en: "When making decisions without evidence based on intuition",
          ja: "根拠なく直感で決める時",
          'zh-CN': "当没有根据凭直觉决定时",
          'zh-TW': "當沒有根據憑直覺決定時",
          id: "Ketika membuat keputusan tanpa bukti berdasarkan intuisi",
          vi: "Khi đưa ra quyết định không có căn cứ dựa trên trực giác"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "계획 없이 혼란스러울 때",
          en: "When it's chaotic without a plan",
          ja: "計画なく混乱している時",
          'zh-CN': "当没有计划混乱时",
          'zh-TW': "當沒有計劃混亂時",
          id: "Ketika kacau tanpa rencana",
          vi: "Khi hỗn loạn không có kế hoạch"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "팀에서 당신이 기여하는 부분은?",
      en: "What do you contribute to the team?",
      ja: "チームで貢献する部分は？",
      'zh-CN': "你在团队中贡献什么？",
      'zh-TW': "你在團隊中貢獻什麼？",
      id: "Bagian apa yang Anda kontribusikan dalam tim?",
      vi: "Bạn đóng góp gì cho nhóm?"
    },
    options: [
      {
        text: {
          ko: "비전과 방향 제시",
          en: "Presenting vision and direction",
          ja: "ビジョンと方向性の提示",
          'zh-CN': "提出愿景和方向",
          'zh-TW': "提出願景和方向",
          id: "Menyajikan visi dan arah",
          vi: "Đưa ra tầm nhìn và định hướng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀 사기 진작과 대외 협력",
          en: "Boosting team morale and external cooperation",
          ja: "チーム士気向上と対外協力",
          'zh-CN': "提升团队士气和对外合作",
          'zh-TW': "提升團隊士氣和對外合作",
          id: "Meningkatkan semangat tim dan kerjasama eksternal",
          vi: "Nâng cao tinh thần nhóm và hợp tác đối ngoại"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "전문성과 정확한 분석",
          en: "Expertise and accurate analysis",
          ja: "専門性と正確な分析",
          'zh-CN': "专业性和准确分析",
          'zh-TW': "專業性和準確分析",
          id: "Keahlian dan analisis yang akurat",
          vi: "Chuyên môn và phân tích chính xác"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "업무 조율과 일정 관리",
          en: "Work coordination and schedule management",
          ja: "業務調整とスケジュール管理",
          'zh-CN': "工作协调和日程管理",
          'zh-TW': "工作協調和日程管理",
          id: "Koordinasi kerja dan manajemen jadwal",
          vi: "Điều phối công việc và quản lý lịch trình"
        },
        scores: { Type6: 8, Type4: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "선호하는 업무 환경은?",
      en: "What work environment do you prefer?",
      ja: "好む職場環境は？",
      'zh-CN': "你偏好什么工作环境？",
      'zh-TW': "你偏好什麼工作環境？",
      id: "Lingkungan kerja apa yang Anda sukai?",
      vi: "Bạn thích môi trường làm việc nào?"
    },
    options: [
      {
        text: {
          ko: "전략을 세우고 의사결정하는 환경",
          en: "Environment for setting strategy and making decisions",
          ja: "戦略を立て意思決定する環境",
          'zh-CN': "制定战略和决策的环境",
          'zh-TW': "制定戰略和決策的環境",
          id: "Lingkungan untuk membuat strategi dan keputusan",
          vi: "Môi trường lập chiến lược và ra quyết định"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "사람들과 자주 만나는 역동적 환경",
          en: "Dynamic environment where I meet people frequently",
          ja: "人々と頻繁に会う動的環境",
          'zh-CN': "经常与人见面的动态环境",
          'zh-TW': "經常與人見面的動態環境",
          id: "Lingkungan dinamis di mana saya sering bertemu orang",
          vi: "Môi trường năng động nơi tôi thường xuyên gặp gỡ mọi người"
        },
        scores: { Type5: 8, Type2: 2 }
      },
      {
        text: {
          ko: "집중해서 연구할 수 있는 조용한 환경",
          en: "Quiet environment where I can focus on research",
          ja: "集中して研究できる静かな環境",
          'zh-CN': "可以专注研究的安静环境",
          'zh-TW': "可以專注研究的安靜環境",
          id: "Lingkungan tenang di mana saya bisa fokus meneliti",
          vi: "Môi trường yên tĩnh nơi tôi có thể tập trung nghiên cứu"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "체계적이고 안정적인 환경",
          en: "Systematic and stable environment",
          ja: "体系的で安定した環境",
          'zh-CN': "系统且稳定的环境",
          'zh-TW': "系統且穩定的環境",
          id: "Lingkungan sistematis dan stabil",
          vi: "Môi trường có hệ thống và ổn định"
        },
        scores: { Type4: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "업무 성과를 측정하는 기준은?",
      en: "What criteria do you use to measure work performance?",
      ja: "業務成果を測る基準は？",
      'zh-CN': "你用什么标准衡量工作绩效？",
      'zh-TW': "你用什麼標準衡量工作績效？",
      id: "Kriteria apa yang Anda gunakan untuk mengukur kinerja kerja?",
      vi: "Bạn sử dụng tiêu chí nào để đo lường hiệu suất công việc?"
    },
    options: [
      {
        text: {
          ko: "목표 달성과 전략 실행",
          en: "Goal achievement and strategy execution",
          ja: "目標達成と戦略実行",
          'zh-CN': "目标达成和战略执行",
          'zh-TW': "目標達成和戰略執行",
          id: "Pencapaian tujuan dan eksekusi strategi",
          vi: "Đạt được mục tiêu và thực hiện chiến lược"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "관계 구축과 영향력",
          en: "Relationship building and influence",
          ja: "関係構築と影響力",
          'zh-CN': "关系建设和影响力",
          'zh-TW': "關係建設和影響力",
          id: "Membangun hubungan dan pengaruh",
          vi: "Xây dựng mối quan hệ và ảnh hưởng"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "문제 해결과 혁신",
          en: "Problem solving and innovation",
          ja: "問題解決と革新",
          'zh-CN': "问题解决和创新",
          'zh-TW': "問題解決和創新",
          id: "Pemecahan masalah dan inovasi",
          vi: "Giải quyết vấn đề và đổi mới"
        },
        scores: { Type5: 8, Type3: 2 }
      },
      {
        text: {
          ko: "효율성과 정확성",
          en: "Efficiency and accuracy",
          ja: "効率性と正確性",
          'zh-CN': "效率和准确性",
          'zh-TW': "效率和準確性",
          id: "Efisiensi dan akurasi",
          vi: "Hiệu quả và chính xác"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "경력 개발에서 중요하게 생각하는 것은?",
      en: "What do you consider important in career development?",
      ja: "キャリア開発で重要に考えることは？",
      'zh-CN': "你认为职业发展中什么重要？",
      'zh-TW': "你認為職業發展中什麼重要？",
      id: "Apa yang Anda anggap penting dalam pengembangan karier?",
      vi: "Bạn coi trọng điều gì trong phát triển sự nghiệp?"
    },
    options: [
      {
        text: {
          ko: "의사결정권과 영향력",
          en: "Decision-making authority and influence",
          ja: "意思決定権と影響力",
          'zh-CN': "决策权和影响力",
          'zh-TW': "決策權和影響力",
          id: "Otoritas pengambilan keputusan dan pengaruh",
          vi: "Quyền ra quyết định và ảnh hưởng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "네트워크와 대외 활동",
          en: "Network and external activities",
          ja: "ネットワークと対外活動",
          'zh-CN': "人脉网络和对外活动",
          'zh-TW': "人脈網絡和對外活動",
          id: "Jaringan dan aktivitas eksternal",
          vi: "Mạng lưới và hoạt động đối ngoại"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "전문성과 깊이",
          en: "Expertise and depth",
          ja: "専門性と深さ",
          'zh-CN': "专业性和深度",
          'zh-TW': "專業性和深度",
          id: "Keahlian dan kedalaman",
          vi: "Chuyên môn và độ sâu"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "안정성과 체계",
          en: "Stability and system",
          ja: "安定性と体系",
          'zh-CN': "稳定性和系统性",
          'zh-TW': "穩定性和系統性",
          id: "Stabilitas dan sistem",
          vi: "Tính ổn định và hệ thống"
        },
        scores: { Type4: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "새로운 것을 배울 때?",
      en: "When learning something new?",
      ja: "新しいことを学ぶ時は？",
      'zh-CN': "学习新东西时？",
      'zh-TW': "學習新東西時？",
      id: "Ketika mempelajari hal baru?",
      vi: "Khi học điều mới?"
    },
    options: [
      {
        text: {
          ko: "전체 구조와 원리부터",
          en: "From the overall structure and principles",
          ja: "全体構造と原理から",
          'zh-CN': "从整体结构和原理开始",
          'zh-TW': "從整體結構和原理開始",
          id: "Dari struktur keseluruhan dan prinsip",
          vi: "Từ cấu trúc tổng thể và nguyên lý"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "사람들과 경험 공유하며",
          en: "Sharing experiences with people",
          ja: "人々と経験を共有しながら",
          'zh-CN': "与人们分享经验",
          'zh-TW': "與人們分享經驗",
          id: "Berbagi pengalaman dengan orang",
          vi: "Chia sẻ kinh nghiệm với mọi người"
        },
        scores: { Type6: 8, Type2: 2 }
      },
      {
        text: {
          ko: "이론과 원리를 깊이 연구",
          en: "Deeply studying theory and principles",
          ja: "理論と原理を深く研究",
          'zh-CN': "深入研究理论和原理",
          'zh-TW': "深入研究理論和原理",
          id: "Mempelajari teori dan prinsip secara mendalam",
          vi: "Nghiên cứu sâu lý thuyết và nguyên lý"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "단계별로 체계적으로",
          en: "Step by step systematically",
          ja: "段階的に体系的に",
          'zh-CN': "按步骤系统性地",
          'zh-TW': "按步驟系統性地",
          id: "Langkah demi langkah secara sistematis",
          vi: "Từng bước một cách có hệ thống"
        },
        scores: { Type4: 3, Type5: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "10년 후 이상적인 모습은?",
      en: "What is your ideal self in 10 years?",
      ja: "10年後の理想的な姿は？",
      'zh-CN': "10年后你的理想样子是什么？",
      'zh-TW': "10年後你的理想樣子是什麼？",
      id: "Seperti apa diri ideal Anda dalam 10 tahun?",
      vi: "Bạn lý tưởng trong 10 năm nữa là gì?"
    },
    options: [
      {
        text: {
          ko: "전략을 수립하는 임원",
          en: "Executive who formulates strategy",
          ja: "戦略を立案する役員",
          'zh-CN': "制定战略的高管",
          'zh-TW': "制定戰略的高管",
          id: "Eksekutif yang merumuskan strategi",
          vi: "Giám đốc điều hành lập chiến lược"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "영향력 있는 리더",
          en: "Influential leader",
          ja: "影響力のあるリーダー",
          'zh-CN': "有影响力的领导者",
          'zh-TW': "有影響力的領導者",
          id: "Pemimpin yang berpengaruh",
          vi: "Lãnh đạo có ảnh hưởng"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "분야 최고 전문가",
          en: "Top expert in the field",
          ja: "分野最高専門家",
          'zh-CN': "领域顶级专家",
          'zh-TW': "領域頂級專家",
          id: "Ahli teratas di bidang",
          vi: "Chuyên gia hàng đầu trong lĩnh vực"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "안정적이고 효율적인 관리자",
          en: "Stable and efficient manager",
          ja: "安定で効率的な管理者",
          'zh-CN': "稳定且高效的管理者",
          'zh-TW': "穩定且高效的管理者",
          id: "Manajer yang stabil dan efisien",
          vi: "Người quản lý ổn định và hiệu quả"
        },
        scores: { Type4: 3, Type6: 2 }
      }
    ]
  }
];

export const jobStrengthResults: JobStrengthResult[] = [
  {
    type: 'Type1',
    emoji: '🎯',
    title: {
      ko: '전략 기획자형',
      en: 'Strategic Planner Type',
      ja: '戦略企画者型',
      'zh-CN': '战略规划者型',
      'zh-TW': '戰略規劃者型',
      id: 'Tipe Perencana Strategis',
      vi: 'Kiểu Nhà Hoạch Định Chiến Lược'
    },
    description: {
      ko: '큰 그림을 보는 전략가! 조직의 방향을 설계하는 브레인',
      en: 'Strategic thinker who sees the big picture! The brain that designs organizational direction',
      ja: '大きな絵を見る戦略家！組織の方向性を設計するブレイン',
      'zh-CN': '看大局的战略家！设计组织方向的智囊',
      'zh-TW': '看大局的戰略家！設計組織方向的智囊',
      id: 'Pemikir strategis yang melihat gambaran besar! Otak yang merancang arah organisasi',
      vi: 'Nhà tư duy chiến lược nhìn thấy bức tranh lớn! Bộ não thiết kế hướng đi của tổ chức'
    },
    longDescription: {
      ko: '당신은 전체를 조망하고 장기적 전략을 수립하는 데 탁월합니다. 복잡한 상황에서 핵심을 파악하고 명확한 방향을 제시합니다. 데이터 분석부터 미래 예측까지, 전략 기획에 필요한 모든 역량을 갖췄습니다. 경영 기획, 사업 전략, 컨설팅 분야에서 빛을 발할 것입니다.',
      en: 'You excel at seeing the big picture and establishing long-term strategies. You can identify key points in complex situations and provide clear direction. You have all the capabilities needed for strategic planning, from data analysis to future prediction. You will shine in business planning, business strategy, and consulting fields.',
      ja: 'あなたは全体を見渡し、長期的な戦略を立てることに卓越しています。複雑な状況で核心を把握し、明確な方向性を提示します。データ分析から未来予測まで、戦略企画に必要なすべての能力を備えています。経営企画、事業戦略、コンサルティング分野で光を放つでしょう。',
      'zh-CN': '你擅长纵观全局并制定长期战略。你能在复杂情况下把握关键点并提供明确方向。你具备战略规划所需的所有能力，从数据分析到未来预测。你将在经营规划、业务战略、咨询领域发光发热。',
      'zh-TW': '你擅長縱觀全局並制定長期戰略。你能在複雜情況下把握關鍵點並提供明確方向。你具備戰略規劃所需的所有能力，從數據分析到未來預測。你將在經營規劃、業務戰略、諮詢領域發光發熱。',
      id: 'Anda unggul dalam melihat gambaran besar dan menetapkan strategi jangka panjang. Anda dapat mengidentifikasi poin-poin kunci dalam situasi kompleks dan memberikan arahan yang jelas. Anda memiliki semua kemampuan yang dibutuhkan untuk perencanaan strategis, dari analisis data hingga prediksi masa depan. Anda akan bersinar di bidang perencanaan bisnis, strategi bisnis, dan konsultasi.',
      vi: 'Bạn xuất sắc trong việc nhìn thấy bức tranh lớn và thiết lập các chiến lược dài hạn. Bạn có thể xác định các điểm then chốt trong tình huống phức tạp và đưa ra hướng dẫn rõ ràng. Bạn có tất cả khả năng cần thiết cho lập kế hoạch chiến lược, từ phân tích dữ liệu đến dự đoán tương lai. Bạn sẽ tỏa sáng trong lĩnh vực lập kế hoạch kinh doanh, chiến lược kinh doanh và tư vấn.'
    },
    strengths: [
      {
        ko: '전략적 사고',
        en: 'Strategic thinking',
        ja: '戦略的思考',
        'zh-CN': '战略思维',
        'zh-TW': '戰略思維',
        id: 'Pemikiran strategis',
        vi: 'Tư duy chiến lược'
      },
      {
        ko: '큰 그림',
        en: 'Big picture',
        ja: '大きな絵',
        'zh-CN': '大局观',
        'zh-TW': '大局觀',
        id: 'Gambaran besar',
        vi: 'Bức tranh lớn'
      },
      {
        ko: '의사결정력',
        en: 'Decision making',
        ja: '意思決定力',
        'zh-CN': '决策力',
        'zh-TW': '決策力',
        id: 'Pengambilan keputusan',
        vi: 'Ra quyết định'
      },
      {
        ko: '분석력',
        en: 'Analytical skills',
        ja: '分析力',
        'zh-CN': '分析能力',
        'zh-TW': '分析能力',
        id: 'Kemampuan analisis',
        vi: 'Kỹ năng phân tích'
      }
    ],
    weaknesses: [
      {
        ko: '실행력 부족',
        en: 'Lack of execution',
        ja: '実行力不足',
        'zh-CN': '执行力不足',
        'zh-TW': '執行力不足',
        id: 'Kurang eksekusi',
        vi: 'Thiếu khả năng thực thi'
      },
      {
        ko: '디테일 놓침',
        en: 'Missing details',
        ja: '詳細を見落とす',
        'zh-CN': '忽略细节',
        'zh-TW': '忽略細節',
        id: 'Melewatkan detail',
        vi: 'Bỏ sót chi tiết'
      },
      {
        ko: '현장 감각 약함',
        en: 'Weak field sense',
        ja: '現場感覚が弱い',
        'zh-CN': '现场感觉弱',
        'zh-TW': '現場感覺弱',
        id: 'Indra lapangan lemah',
        vi: 'Cảm giác thực địa yếu'
      }
    ],
    recommendedJobs: {
      ko: '• 경영 기획: 전략 수립, 사업 계획, 조직 설계\n• 전략 기획: 시장 분석, 경쟁 전략, 미래 예측\n• 사업 개발: 신규 사업 발굴, 파트너십 구축\n• 컨설턴트: 기업 컨설팅, 전략 자문',
      en: '• Business Planning: Strategy development, business planning, organizational design\n• Strategic Planning: Market analysis, competitive strategy, future prediction\n• Business Development: New business discovery, partnership building\n• Consultant: Corporate consulting, strategic advisory',
      ja: '• 経営企画: 戦略策定、事業計画、組織設計\n• 戦略企画: 市場分析、競争戦略、未来予測\n• 事業開発: 新規事業発掘、パートナーシップ構築\n• コンサルタント: 企業コンサルティング、戦略アドバイザリー',
      'zh-CN': '• 经营规划：战略制定、业务规划、组织设计\n• 战略规划：市场分析、竞争策略、未来预测\n• 业务开发：新业务发现、合作伙伴建设\n• 顾问：企业咨询、战略咨询',
      'zh-TW': '• 經營規劃：戰略制定、業務規劃、組織設計\n• 戰略規劃：市場分析、競爭策略、未來預測\n• 業務開發：新業務發現、合作夥伴建設\n• 顧問：企業諮詢、戰略諮詢',
      id: '• Perencanaan Bisnis: Pengembangan strategi, perencanaan bisnis, desain organisasi\n• Perencanaan Strategis: Analisis pasar, strategi kompetitif, prediksi masa depan\n• Pengembangan Bisnis: Penemuan bisnis baru, pembangunan kemitraan\n• Konsultan: Konsultasi korporat, penasihat strategis',
      vi: '• Hoạch định Kinh doanh: Phát triển chiến lược, lập kế hoạch kinh doanh, thiết kế tổ chức\n• Hoạch định Chiến lược: Phân tích thị trường, chiến lược cạnh tranh, dự đoán tương lai\n• Phát triển Kinh doanh: Khám phá kinh doanh mới, xây dựng đối tác\n• Tư vấn: Tư vấn doanh nghiệp, cố vấn chiến lược'
    },
    recommendedCompanies: {
      ko: '• 대기업 전략팀: 글로벌 대기업의 전략 기획 부서\n• 컨설팅 회사: 글로벌 컨설팅 회사, 전략 컨설팅 전문 기업\n• 스타트업 COO: 성장 단계의 스타트업에서 운영 전략 담당\n• 투자 회사: 벤처캐피털, 사모펀드에서 투자 전략 수립',
      en: '• Corporate Strategy Teams: Strategy planning departments at large multinational corporations\n• Consulting Companies: Global consulting firms, strategic consulting specialized companies\n• Startup COO: Operations strategy at growth-stage startups\n• Investment Companies: Investment strategy at venture capital and private equity firms',
      ja: '• 大企業戦略チーム: グローバル大企業の戦略企画部門\n• コンサルティング会社: グローバルコンサルティング会社、戦略コンサルティング専門企業\n• スタートアップCOO: 成長段階のスタートアップでの運営戦略担当\n• 投資会社: ベンチャーキャピタル、プライベートエクイティでの投資戦略策定',
      'zh-CN': '• 大企业战略团队：跨国大企业的战略规划部门\n• 咨询公司：全球咨询公司、战略咨询专业企业\n• 初创公司COO：成长阶段初创公司的运营策略负责人\n• 投资公司：风险投资、私募股权公司的投资策略制定',
      'zh-TW': '• 大企業戰略團隊：跨國大企業的戰略規劃部門\n• 諮詢公司：全球諮詢公司、戰略諮詢專業企業\n• 初創公司COO：成長階段初創公司的運營策略負責人\n• 投資公司：風險投資、私募股權公司的投資策略制定',
      id: '• Tim Strategi Perusahaan Besar: Departemen perencanaan strategis di perusahaan multinasional besar\n• Perusahaan Konsultan: Perusahaan konsultan global, perusahaan khusus konsultasi strategis\n• COO Startup: Strategi operasional di startup tahap pertumbuhan\n• Perusahaan Investasi: Strategi investasi di venture capital dan private equity',
      vi: '• Đội ngũ Chiến lược Tập đoàn: Bộ phận lập kế hoạch chiến lược tại các tập đoàn đa quốc gia lớn\n• Công ty Tư vấn: Các công ty tư vấn toàn cầu, công ty chuyên tư vấn chiến lược\n• COO Khởi nghiệp: Chiến lược vận hành tại các startup giai đoạn tăng trưởng\n• Công ty Đầu tư: Chiến lược đầu tư tại các quỹ đầu tư mạo hiểm và tư nhân'
    },
    advice: {
      ko: '전략과 실행의 균형을 맞추세요. 현장 경험도 중요합니다!',
      en: 'Balance strategy and execution. Field experience is also important!',
      ja: '戦略と実行のバランスを取りましょう。現場経験も重要です！',
      'zh-CN': '平衡战略和执行。现场经验也很重要！',
      'zh-TW': '平衡戰略和執行。現場經驗也很重要！',
      id: 'Seimbangkan strategi dan eksekusi. Pengalaman lapangan juga penting!',
      vi: 'Cân bằng giữa chiến lược và thực thi. Kinh nghiệm thực địa cũng quan trọng!'
    }
  },
  {
    type: 'Type2',
    emoji: '💼',
    title: {
      ko: '영업 마케팅형',
      en: 'Sales Marketing Type',
      ja: '営業マーケティング型',
      'zh-CN': '销售营销型',
      'zh-TW': '銷售營銷型',
      id: 'Tipe Penjualan Pemasaran',
      vi: 'Kiểu Bán Hàng Marketing'
    },
    description: {
      ko: '사람을 움직이는 설득가! 성과를 만드는 영향력의 달인',
      en: 'Persuader who moves people! Master of influence who creates results',
      ja: '人を動かす説得家！成果を作る影響力の達人',
      'zh-CN': '调动人的说服者！创造成果的影响力大师',
      'zh-TW': '調動人的說服者！創造成果的影響力大師',
      id: 'Pembujuk yang menggerakkan orang! Master pengaruh yang menciptakan hasil',
      vi: 'Người thuyết phục di chuyển mọi người! Bậc thầy về ảnh hưởng tạo ra kết quả'
    },
    longDescription: {
      ko: '당신은 사람들과의 관계에서 에너지를 얻고 설득에 능숙합니다. 커뮤니케이션 능력이 뛰어나고 네트워킹을 즐깁니다. 목표 지향적이며 성과에 대한 열정이 강합니다. 영업, 마케팅, 사업 개발, 대외 협력 분야에서 최고가 될 수 있습니다.',
      en: 'You gain energy from relationships with people and are skilled at persuasion. You have excellent communication skills and enjoy networking. You are goal-oriented and have a strong passion for results. You can become the best in sales, marketing, business development, and external cooperation.',
      ja: 'あなたは人との関係からエネルギーを得て、説得に長けています。コミュニケーション能力が優れており、ネットワーキングを楽しみます。目標志向的で、成果に対する情熱が強いです。営業、マーケティング、事業開発、対外協力分野で最高になれます。',
      'zh-CN': '你从与人的关系中获取能量，擅长说服。你拥有出色的沟通能力，喜欢建立人脉。你目标导向，对成果有强烈的热情。你可以在销售、营销、业务开发、对外合作领域成为最优秀的。',
      'zh-TW': '你從與人的關係中獲取能量，擅長說服。你擁有出色的溝通能力，喜歡建立人脈。你目標導向，對成果有強烈的熱情。你可以在銷售、營銷、業務開發、對外合作領域成為最優秀的。',
      id: 'Anda mendapatkan energi dari hubungan dengan orang dan terampil dalam persuasi. Anda memiliki kemampuan komunikasi yang luar biasa dan menikmati networking. Anda berorientasi pada tujuan dan memiliki hasrat yang kuat untuk hasil. Anda bisa menjadi yang terbaik di bidang penjualan, pemasaran, pengembangan bisnis, dan kerjasama eksternal.',
      vi: 'Bạn có được năng lượng từ mối quan hệ với mọi người và giỏi thuyết phục. Bạn có kỹ năng giao tiếp xuất sắc và thích kết nối. Bạn có định hướng mục tiêu và có niềm đam mê mạnh mẽ với kết quả. Bạn có thể trở thành người giỏi nhất trong lĩnh vực bán hàng, marketing, phát triển kinh doanh và hợp tác đối ngoại.'
    },
    strengths: [
      {
        ko: '설득력',
        en: 'Persuasion',
        ja: '説得力',
        'zh-CN': '说服力',
        'zh-TW': '說服力',
        id: 'Kemampuan persuasi',
        vi: 'Khả năng thuyết phục'
      },
      {
        ko: '소통력',
        en: 'Communication',
        ja: 'コミュニケーション力',
        'zh-CN': '沟通能力',
        'zh-TW': '溝通能力',
        id: 'Kemampuan komunikasi',
        vi: 'Kỹ năng giao tiếp'
      },
      {
        ko: '네트워킹',
        en: 'Networking',
        ja: 'ネットワーキング',
        'zh-CN': '人脉网络',
        'zh-TW': '人脈網絡',
        id: 'Jaringan',
        vi: 'Mạng lưới'
      },
      {
        ko: '추진력',
        en: 'Drive',
        ja: '推進力',
        'zh-CN': '推动力',
        'zh-TW': '推動力',
        id: 'Dorongan',
        vi: 'Động lực'
      },
      {
        ko: '성과 지향',
        en: 'Results-oriented',
        ja: '成果志向',
        'zh-CN': '结果导向',
        'zh-TW': '結果導向',
        id: 'Berorientasi hasil',
        vi: 'Định hướng kết quả'
      }
    ],
    weaknesses: [
      {
        ko: '세밀함 부족',
        en: 'Lack of attention to detail',
        ja: '細かさ不足',
        'zh-CN': '缺乏细致',
        'zh-TW': '缺乏細緻',
        id: 'Kurang detail',
        vi: 'Thiếu chi tiết'
      },
      {
        ko: '혼자 일하기 어려움',
        en: 'Difficulty working alone',
        ja: '一人で働くのが苦手',
        'zh-CN': '难以独自工作',
        'zh-TW': '難以獨自工作',
        id: 'Sulit bekerja sendirian',
        vi: 'Khó làm việc một mình'
      },
      {
        ko: '분석 약함',
        en: 'Weak analysis',
        ja: '分析が弱い',
        'zh-CN': '分析能力弱',
        'zh-TW': '分析能力弱',
        id: 'Analisis lemah',
        vi: 'Phân tích yếu'
      }
    ],
    recommendedJobs: {
      ko: '• 영업: B2B 영업, 대기업 영업, 해외 영업\n• 마케팅: 디지털 마케팅, 브랜드 마케팅, 콘텐츠 마케팅\n• 사업 개발: 신규 사업 발굴, 파트너십 구축, 시장 확장\n• PR: 기업 홍보, 미디어 관계, 이벤트 기획\n• 파트너십: 전략적 제휴, 협력 관계 구축',
      en: '• Sales: B2B sales, corporate sales, international sales\n• Marketing: Digital marketing, brand marketing, content marketing\n• Business Development: New business discovery, partnership building, market expansion\n• PR: Corporate promotion, media relations, event planning\n• Partnership: Strategic alliances, cooperation relationship building',
      ja: '• 営業: B2B営業、企業営業、海外営業\n• マーケティング: デジタルマーケティング、ブランドマーケティング、コンテンツマーケティング\n• 事業開発: 新規事業発掘、パートナーシップ構築、市場拡大\n• PR: 企業広報、メディア関係、イベント企画\n• パートナーシップ: 戦略的提携、協力関係構築',
      'zh-CN': '• 销售：B2B销售、企业销售、海外销售\n• 营销：数字营销、品牌营销、内容营销\n• 业务开发：新业务发现、合作伙伴建设、市场扩张\n• 公关：企业宣传、媒体关系、活动策划\n• 合作伙伴：战略联盟、合作关系建设',
      'zh-TW': '• 銷售：B2B銷售、企業銷售、海外銷售\n• 營銷：數字營銷、品牌營銷、內容營銷\n• 業務開發：新業務發現、合作夥伴建設、市場擴張\n• 公關：企業宣傳、媒體關係、活動策劃\n• 合作夥伴：戰略聯盟、合作關係建設',
      id: '• Penjualan: Penjualan B2B, penjualan korporat, penjualan internasional\n• Pemasaran: Pemasaran digital, pemasaran merek, pemasaran konten\n• Pengembangan Bisnis: Penemuan bisnis baru, pembangunan kemitraan, ekspansi pasar\n• PR: Promosi korporat, hubungan media, perencanaan acara\n• Kemitraan: Aliansi strategis, pembangunan hubungan kerja sama',
      vi: '• Bán hàng: Bán hàng B2B, bán hàng doanh nghiệp, bán hàng quốc tế\n• Marketing: Marketing số, marketing thương hiệu, marketing nội dung\n• Phát triển Kinh doanh: Khám phá kinh doanh mới, xây dựng đối tác, mở rộng thị trường\n• PR: Quảng bá doanh nghiệp, quan hệ truyền thông, lập kế hoạch sự kiện\n• Đối tác: Liên minh chiến lược, xây dựng mối quan hệ hợp tác'
    },
    recommendedCompanies: {
      ko: '• B2B 영업: 대기업 영업팀, B2B 전문 영업 회사\n• 광고 대행사: 글로벌 광고 대행사, 대형 광고 대행사\n• 마케팅 에이전시: 디지털 마케팅 전문 회사, 브랜드 컨설팅\n• IT 기업: 플랫폼 기업의 영업팀, 테크 스타트업',
      en: '• B2B Sales: Corporate sales teams, B2B specialized sales companies\n• Advertising Agencies: Global advertising agencies, major advertising agencies\n• Marketing Agencies: Digital marketing specialized companies, brand consulting\n• IT Companies: Sales teams at platform companies, tech startups',
      ja: '• B2B営業: 企業営業チーム、B2B専門営業会社\n• 広告代理店: グローバル広告代理店、大手広告代理店\n• マーケティングエージェンシー: デジタルマーケティング専門会社、ブランドコンサルティング\n• IT企業: プラットフォーム企業の営業チーム、テックスタートアップ',
      'zh-CN': '• B2B销售：企业销售团队、B2B专业销售公司\n• 广告代理：全球广告代理、大型广告代理\n• 营销代理：数字营销专业公司、品牌咨询\n• IT企业：平台企业的销售团队、科技初创公司',
      'zh-TW': '• B2B銷售：企業銷售團隊、B2B專業銷售公司\n• 廣告代理：全球廣告代理、大型廣告代理\n• 營銷代理：數字營銷專業公司、品牌諮詢\n• IT企業：平台企業的銷售團隊、科技初創公司',
      id: '• Penjualan B2B: Tim penjualan korporat, perusahaan penjualan khusus B2B\n• Agensi Periklanan: Agensi periklanan global, agensi periklanan besar\n• Agensi Pemasaran: Perusahaan khusus pemasaran digital, konsultasi merek\n• Perusahaan IT: Tim penjualan di perusahaan platform, startup teknologi',
      vi: '• Bán hàng B2B: Đội ngũ bán hàng doanh nghiệp, công ty bán hàng chuyên B2B\n• Công ty Quảng cáo: Công ty quảng cáo toàn cầu, công ty quảng cáo lớn\n• Công ty Marketing: Công ty chuyên marketing số, tư vấn thương hiệu\n• Công ty IT: Đội ngũ bán hàng tại các công ty nền tảng, startup công nghệ'
    },
    advice: {
      ko: '감성적 접근도 좋지만 데이터 기반 사고도 필요합니다!',
      en: 'Emotional approach is good, but data-driven thinking is also needed!',
      ja: '感情的アプローチも良いですが、データベース思考も必要です！',
      'zh-CN': '情感方法很好，但也需要基于数据的思考！',
      'zh-TW': '情感方法很好，但也需要基於數據的思考！',
      id: 'Pendekatan emosional bagus, tapi pemikiran berbasis data juga diperlukan!',
      vi: 'Cách tiếp cận cảm xúc tốt, nhưng tư duy dựa trên dữ liệu cũng cần thiết!'
    }
  },
  {
    type: 'Type3',
    emoji: '🔬',
    title: {
      ko: '연구 개발형',
      en: 'Research Development Type',
      ja: '研究開発型',
      'zh-CN': '研究开发型',
      'zh-TW': '研究開發型',
      id: 'Tipe Penelitian Pengembangan',
      vi: 'Kiểu Nghiên Cứu Phát Triển'
    },
    description: {
      ko: '깊이 파는 전문가! 혁신을 만드는 연구자',
      en: 'Expert who digs deep! Researcher who creates innovation',
      ja: '深く掘る専門家！革新を作る研究者',
      'zh-CN': '深入挖掘的专家！创造创新的研究者',
      'zh-TW': '深入挖掘的專家！創造創新的研究者',
      id: 'Ahli yang menggali dalam! Peneliti yang menciptakan inovasi',
      vi: 'Chuyên gia đào sâu! Nhà nghiên cứu tạo ra đổi mới'
    },
    longDescription: {
      ko: '당신은 한 분야를 깊이 파고드는 전문가형입니다. 호기심이 많고 원리와 본질을 이해하려 합니다. 집중력이 뛰어나고 논리적 사고가 강합니다. 연구 개발, 데이터 분석, 기술 개발 분야에서 전문성을 발휘할 수 있습니다. 학문적 깊이와 기술력으로 차별화됩니다.',
      en: 'You are an expert type who digs deep into one field. You are very curious and try to understand principles and essence. You have excellent concentration and strong logical thinking. You can demonstrate expertise in research and development, data analysis, and technology development. You differentiate yourself through academic depth and technical skills.',
      ja: 'あなたは一つの分野を深く掘り下げる専門家型です。好奇心が強く、原理と本質を理解しようとします。集中力が優れており、論理的思考が強いです。研究開発、データ分析、技術開発分野で専門性を発揮できます。学問的深さと技術力で差別化されます。',
      'zh-CN': '你是深入挖掘某一领域的专家型。你好奇心强，努力理解原理和本质。你专注力出色，逻辑思维强。你可以在研发、数据分析、技术开发领域发挥专业性。你通过学术深度和技术力实现差异化。',
      'zh-TW': '你是深入挖掘某一領域的專家型。你好奇心強，努力理解原理和本質。你專注力出色，邏輯思維強。你可以在研發、數據分析、技術開發領域發揮專業性。你通過學術深度和技術力實現差異化。',
      id: 'Anda adalah tipe ahli yang menggali dalam ke satu bidang. Anda sangat penasaran dan berusaha memahami prinsip dan esensi. Anda memiliki konsentrasi yang sangat baik dan pemikiran logis yang kuat. Anda dapat menunjukkan keahlian di bidang penelitian dan pengembangan, analisis data, dan pengembangan teknologi. Anda membedakan diri melalui kedalaman akademik dan keterampilan teknis.',
      vi: 'Bạn là kiểu chuyên gia đào sâu vào một lĩnh vực. Bạn rất tò mò và cố gắng hiểu nguyên lý và bản chất. Bạn có khả năng tập trung xuất sắc và tư duy logic mạnh mẽ. Bạn có thể thể hiện chuyên môn trong lĩnh vực nghiên cứu và phát triển, phân tích dữ liệu và phát triển công nghệ. Bạn phân biệt mình thông qua chiều sâu học thuật và kỹ năng kỹ thuật.'
    },
    strengths: [
      {
        ko: '전문성',
        en: 'Expertise',
        ja: '専門性',
        'zh-CN': '专业性',
        'zh-TW': '專業性',
        id: 'Keahlian',
        vi: 'Chuyên môn'
      },
      {
        ko: '분석력',
        en: 'Analytical skills',
        ja: '分析力',
        'zh-CN': '分析能力',
        'zh-TW': '分析能力',
        id: 'Kemampuan analisis',
        vi: 'Kỹ năng phân tích'
      },
      {
        ko: '집중력',
        en: 'Focus',
        ja: '集中力',
        'zh-CN': '专注力',
        'zh-TW': '專注力',
        id: 'Fokus',
        vi: 'Tập trung'
      },
      {
        ko: '논리적 사고',
        en: 'Logical thinking',
        ja: '論理的思考',
        'zh-CN': '逻辑思维',
        'zh-TW': '邏輯思維',
        id: 'Pemikiran logis',
        vi: 'Tư duy logic'
      },
      {
        ko: '문제 해결',
        en: 'Problem solving',
        ja: '問題解決',
        'zh-CN': '问题解决',
        'zh-TW': '問題解決',
        id: 'Pemecahan masalah',
        vi: 'Giải quyết vấn đề'
      }
    ],
    weaknesses: [
      {
        ko: '소통 부족',
        en: 'Lack of communication',
        ja: 'コミュニケーション不足',
        'zh-CN': '沟通不足',
        'zh-TW': '溝通不足',
        id: 'Kurang komunikasi',
        vi: 'Thiếu giao tiếp'
      },
      {
        ko: '현실 감각 약함',
        en: 'Weak sense of reality',
        ja: '現実感覚が弱い',
        'zh-CN': '现实感觉弱',
        'zh-TW': '現實感覺弱',
        id: 'Indra realitas lemah',
        vi: 'Cảm giác thực tế yếu'
      },
      {
        ko: '사회성 낮음',
        en: 'Low social skills',
        ja: '社会性が低い',
        'zh-CN': '社交能力低',
        'zh-TW': '社交能力低',
        id: 'Keterampilan sosial rendah',
        vi: 'Kỹ năng xã hội thấp'
      }
    ],
    recommendedJobs: {
      ko: '• R&D: 제품 개발, 기술 연구, 혁신 프로젝트\n• 데이터 분석: 빅데이터 분석, 통계 분석, 예측 모델링\n• 품질 관리: 품질 보증, 테스트, 표준화\n• 연구원: 학술 연구, 기술 개발, 특허 연구',
      en: '• R&D: Product development, technology research, innovation projects\n• Data Analysis: Big data analysis, statistical analysis, predictive modeling\n• Quality Management: Quality assurance, testing, standardization\n• Researcher: Academic research, technology development, patent research',
      ja: '• R&D: 製品開発、技術研究、イノベーションプロジェクト\n• データ分析: ビッグデータ分析、統計分析、予測モデリング\n• 品質管理: 品質保証、テスト、標準化\n• 研究員: 学術研究、技術開発、特許研究',
      'zh-CN': '• 研发：产品开发、技术研究、创新项目\n• 数据分析：大数据分析、统计分析、预测建模\n• 质量管理：质量保证、测试、标准化\n• 研究员：学术研究、技术开发、专利研究',
      'zh-TW': '• 研發：產品開發、技術研究、創新項目\n• 數據分析：大數據分析、統計分析、預測建模\n• 質量管理：質量保證、測試、標準化\n• 研究員：學術研究、技術開發、專利研究',
      id: '• R&D: Pengembangan produk, penelitian teknologi, proyek inovasi\n• Analisis Data: Analisis big data, analisis statistik, pemodelan prediktif\n• Manajemen Kualitas: Jaminan kualitas, pengujian, standardisasi\n• Peneliti: Penelitian akademik, pengembangan teknologi, penelitian paten',
      vi: '• R&D: Phát triển sản phẩm, nghiên cứu công nghệ, dự án đổi mới\n• Phân tích Dữ liệu: Phân tích big data, phân tích thống kê, mô hình dự đoán\n• Quản lý Chất lượng: Đảm bảo chất lượng, kiểm thử, tiêu chuẩn hóa\n• Nhà nghiên cứu: Nghiên cứu học thuật, phát triển công nghệ, nghiên cứu bằng sáng chế'
    },
    recommendedCompanies: {
      ko: '• 연구소: 정부출연연구소, 민간 연구소, 국제 연구기관\n• IT 기업: 반도체/디스플레이 기업, 하드웨어 제조사, 테크 기업\n• 제약회사: 글로벌 제약회사, 바이오테크 기업, 의료기기 회사\n• 대학: 연구중심대학, 공과대학, 자연과학대학',
      en: '• Research Institutes: Government-funded research institutes, private research institutes, international research organizations\n• IT Companies: Semiconductor/display companies, hardware manufacturers, tech companies\n• Pharmaceutical Companies: Global pharmaceutical companies, biotech companies, medical device companies\n• Universities: Research-focused universities, engineering colleges, natural science colleges',
      ja: '• 研究所: 政府出資研究所、民間研究所、国際研究機関\n• IT企業: 半導体/ディスプレイ企業、ハードウェアメーカー、テック企業\n• 製薬会社: グローバル製薬会社、バイオテック企業、医療機器会社\n• 大学: 研究重点大学、工科大学、自然科学大学',
      'zh-CN': '• 研究所：政府出资研究所、民间研究所、国际研究机构\n• IT企业：半导体/显示器企业、硬件制造商、科技企业\n• 制药公司：全球制药公司、生物技术企业、医疗器械公司\n• 大学：研究型大学、工学院、自然科学院',
      'zh-TW': '• 研究所：政府出資研究所、民間研究所、國際研究機構\n• IT企業：半導體/顯示器企業、硬體製造商、科技企業\n• 製藥公司：全球製藥公司、生物技術企業、醫療器械公司\n• 大學：研究型大學、工學院、自然科學院',
      id: '• Lembaga Penelitian: Lembaga penelitian pemerintah, lembaga penelitian swasta, organisasi penelitian internasional\n• Perusahaan IT: Perusahaan semikonduktor/display, produsen hardware, perusahaan teknologi\n• Perusahaan Farmasi: Perusahaan farmasi global, perusahaan bioteknologi, perusahaan peralatan medis\n• Universitas: Universitas fokus penelitian, fakultas teknik, fakultas ilmu alam',
      vi: '• Viện Nghiên cứu: Viện nghiên cứu do chính phủ tài trợ, viện nghiên cứu tư nhân, tổ chức nghiên cứu quốc tế\n• Công ty IT: Công ty bán dẫn/màn hình, nhà sản xuất phần cứng, công ty công nghệ\n• Công ty Dược phẩm: Công ty dược phẩm toàn cầu, công ty công nghệ sinh học, công ty thiết bị y tế\n• Đại học: Đại học tập trung nghiên cứu, trường kỹ thuật, trường khoa học tự nhiên'
    },
    advice: {
      ko: '전문성도 중요하지만 협업 능력도 키우세요!',
      en: 'Expertise is important, but also develop collaboration skills!',
      ja: '専門性も重要ですが、協力能力も育てましょう！',
      'zh-CN': '专业性很重要，但也要培养协作能力！',
      'zh-TW': '專業性很重要，但也要培養協作能力！',
      id: 'Keahlian penting, tapi juga kembangkan kemampuan kolaborasi!',
      vi: 'Chuyên môn quan trọng, nhưng cũng phát triển kỹ năng hợp tác!'
    }
  },
  {
    type: 'Type4',
    emoji: '⚙️',
    title: {
      ko: '운영 관리형',
      en: 'Operations Management Type',
      ja: '運営管理型',
      'zh-CN': '运营管理型',
      'zh-TW': '運營管理型',
      id: 'Tipe Manajemen Operasi',
      vi: 'Kiểu Quản Lý Vận Hành'
    },
    description: {
      ko: '완벽한 실행자! 조직을 움직이는 오퍼레이터',
      en: 'Perfect executor! Operator who moves organizations',
      ja: '完璧な実行者！組織を動かすオペレーター',
      'zh-CN': '完美的执行者！推动组织的运营者',
      'zh-TW': '完美的執行者！推動組織的運營者',
      id: 'Eksekutor sempurna! Operator yang menggerakkan organisasi',
      vi: 'Người thực thi hoàn hảo! Người vận hành di chuyển tổ chức'
    },
    longDescription: {
      ko: '당신은 일을 체계적으로 정리하고 효율적으로 실행하는 데 능숙합니다. 계획과 일정 관리가 뛰어나고 디테일을 놓치지 않습니다. 프로세스를 최적화하고 리소스를 효율적으로 배분합니다. 운영 관리, 프로젝트 관리, 생산 관리 분야에서 없어서는 안 될 핵심 인재입니다.',
      en: 'You are skilled at organizing work systematically and executing it efficiently. You excel at planning and schedule management, and you don\'t miss details. You optimize processes and allocate resources efficiently. You are an essential core talent in operations management, project management, and production management.',
      ja: 'あなたは仕事を体系的に整理し、効率的に実行することに長けています。計画とスケジュール管理が優れており、細部を見逃しません。プロセスを最適化し、リソースを効率的に配分します。運営管理、プロジェクト管理、生産管理分野で欠かせない核心人材です。',
      'zh-CN': '你擅长系统性地整理工作并高效执行。你计划和时间管理出色，不会遗漏细节。你优化流程并高效分配资源。你是运营管理、项目管理、生产管理领域不可或缺的核心人才。',
      'zh-TW': '你擅長系統性地整理工作並高效執行。你計劃和時間管理出色，不會遺漏細節。你優化流程並高效分配資源。你是運營管理、項目管理、生產管理領域不可或缺的核心人才。',
      id: 'Anda terampil dalam mengatur pekerjaan secara sistematis dan mengeksekusinya dengan efisien. Anda unggul dalam perencanaan dan manajemen jadwal, dan tidak melewatkan detail. Anda mengoptimalkan proses dan mengalokasikan sumber daya secara efisien. Anda adalah talenta inti yang sangat diperlukan di bidang manajemen operasi, manajemen proyek, dan manajemen produksi.',
      vi: 'Bạn giỏi trong việc tổ chức công việc một cách có hệ thống và thực hiện hiệu quả. Bạn xuất sắc trong lập kế hoạch và quản lý lịch trình, và không bỏ lỡ chi tiết. Bạn tối ưu hóa quy trình và phân bổ tài nguyên hiệu quả. Bạn là nhân tài cốt lõi không thể thiếu trong lĩnh vực quản lý vận hành, quản lý dự án và quản lý sản xuất.'
    },
    strengths: [
      {
        ko: '체계성',
        en: 'Systematic approach',
        ja: '体系性',
        'zh-CN': '系统性',
        'zh-TW': '系統性',
        id: 'Pendekatan sistematis',
        vi: 'Cách tiếp cận có hệ thống'
      },
      {
        ko: '실행력',
        en: 'Execution power',
        ja: '実行力',
        'zh-CN': '执行力',
        'zh-TW': '執行力',
        id: 'Kekuatan eksekusi',
        vi: 'Sức mạnh thực thi'
      },
      {
        ko: '정확성',
        en: 'Accuracy',
        ja: '正確性',
        'zh-CN': '准确性',
        'zh-TW': '準確性',
        id: 'Akurasi',
        vi: 'Độ chính xác'
      },
      {
        ko: '효율성',
        en: 'Efficiency',
        ja: '効率性',
        'zh-CN': '效率',
        'zh-TW': '效率',
        id: 'Efisiensi',
        vi: 'Hiệu quả'
      },
      {
        ko: '일정 관리',
        en: 'Schedule management',
        ja: 'スケジュール管理',
        'zh-CN': '日程管理',
        'zh-TW': '日程管理',
        id: 'Manajemen jadwal',
        vi: 'Quản lý lịch trình'
      }
    ],
    weaknesses: [
      {
        ko: '창의성 부족',
        en: 'Lack of creativity',
        ja: '創造性不足',
        'zh-CN': '缺乏创造性',
        'zh-TW': '缺乏創造性',
        id: 'Kurang kreativitas',
        vi: 'Thiếu sáng tạo'
      },
      {
        ko: '변화 적응 어려움',
        en: 'Difficulty adapting to change',
        ja: '変化適応困難',
        'zh-CN': '难以适应变化',
        'zh-TW': '難以適應變化',
        id: 'Sulit beradaptasi dengan perubahan',
        vi: 'Khó thích ứng với thay đổi'
      },
      {
        ko: '융통성 낮음',
        en: 'Low flexibility',
        ja: '柔軟性が低い',
        'zh-CN': '灵活性低',
        'zh-TW': '靈活性低',
        id: 'Fleksibilitas rendah',
        vi: 'Tính linh hoạt thấp'
      }
    ],
    recommendedJobs: {
      ko: '• 운영 관리: 전사 운영, 프로세스 최적화, 리소스 관리\n• 프로젝트 매니저: 프로젝트 기획, 일정 관리, 팀 조율\n• 생산 관리: 생산 계획, 공정 관리, 효율성 개선\n• 품질 관리: 품질 보증, 표준화, 지속적 개선',
      en: '• Operations Management: Company operations, process optimization, resource management\n• Project Manager: Project planning, schedule management, team coordination\n• Production Management: Production planning, process management, efficiency improvement\n• Quality Management: Quality assurance, standardization, continuous improvement',
      ja: '• 運営管理: 全社運営、プロセス最適化、リソース管理\n• プロジェクトマネージャー: プロジェクト企画、スケジュール管理、チーム調整\n• 生産管理: 生産計画、工程管理、効率性改善\n• 品質管理: 品質保証、標準化、継続的改善',
      'zh-CN': '• 运营管理：全公司运营、流程优化、资源管理\n• 项目经理：项目规划、进度管理、团队协调\n• 生产管理：生产计划、工艺管理、效率提升\n• 质量管理：质量保证、标准化、持续改进',
      'zh-TW': '• 運營管理：全公司運營、流程優化、資源管理\n• 項目經理：項目規劃、進度管理、團隊協調\n• 生產管理：生產計劃、工藝管理、效率提升\n• 質量管理：質量保證、標準化、持續改進',
      id: '• Manajemen Operasi: Operasi perusahaan, optimasi proses, manajemen sumber daya\n• Manajer Proyek: Perencanaan proyek, manajemen jadwal, koordinasi tim\n• Manajemen Produksi: Perencanaan produksi, manajemen proses, peningkatan efisiensi\n• Manajemen Kualitas: Jaminan kualitas, standardisasi, perbaikan berkelanjutan',
      vi: '• Quản lý Vận hành: Vận hành công ty, tối ưu hóa quy trình, quản lý tài nguyên\n• Quản lý Dự án: Lập kế hoạch dự án, quản lý tiến độ, phối hợp nhóm\n• Quản lý Sản xuất: Lập kế hoạch sản xuất, quản lý quy trình, cải thiện hiệu quả\n• Quản lý Chất lượng: Đảm bảo chất lượng, tiêu chuẩn hóa, cải tiến liên tục'
    },
    recommendedCompanies: {
      ko: '• 제조업: 대기업 제조업체, 글로벌 제조사, 자동차 회사\n• 물류: 물류 전문 기업, 글로벌 물류 회사, 운송 기업\n• 서비스 운영: 플랫폼 기업의 운영팀, 서비스 기업, 이커머스 회사\n• IT 운영팀: 대기업 IT 부서, 클라우드 서비스 기업',
      en: '• Manufacturing: Large manufacturing corporations, global manufacturers, automotive companies\n• Logistics: Logistics specialized companies, global logistics companies, transportation companies\n• Service Operations: Platform companies operations teams, service companies, e-commerce companies\n• IT Operations Teams: Large corporation IT departments, cloud service companies',
      ja: '• 製造業: 大企業製造業者、グローバル製造業者、自動車会社\n• 物流: 物流専門企業、グローバル物流会社、運輸企業\n• サービス運営: プラットフォーム企業の運営チーム、サービス企業、EC企業\n• IT運営チーム: 大企業IT部門、クラウドサービス企業',
      'zh-CN': '• 制造业：大型制造企业、全球制造商、汽车公司\n• 物流：物流专业企业、全球物流公司、运输企业\n• 服务运营：平台企业的运营团队、服务企业、电商公司\n• IT运营团队：大企业IT部门、云服务企业',
      'zh-TW': '• 製造業：大型製造企業、全球製造商、汽車公司\n• 物流：物流專業企業、全球物流公司、運輸企業\n• 服務運營：平台企業的運營團隊、服務企業、電商公司\n• IT運營團隊：大企業IT部門、雲服務企業',
      id: '• Manufaktur: Perusahaan manufaktur besar, produsen global, perusahaan otomotif\n• Logistik: Perusahaan khusus logistik, perusahaan logistik global, perusahaan transportasi\n• Operasi Layanan: Tim operasi platform, perusahaan layanan, perusahaan e-commerce\n• Tim Operasi IT: Departemen IT perusahaan besar, perusahaan layanan cloud',
      vi: '• Sản xuất: Các tập đoàn sản xuất lớn, nhà sản xuất toàn cầu, công ty ô tô\n• Hậu cần: Các công ty chuyên hậu cần, công ty hậu cần toàn cầu, công ty vận tải\n• Vận hành Dịch vụ: Đội ngũ vận hành nền tảng, công ty dịch vụ, công ty thương mại điện tử\n• Đội ngũ Vận hành IT: Bộ phận IT tập đoàn lớn, công ty dịch vụ đám mây'
    },
    advice: {
      ko: '효율성도 중요하지만 혁신을 위한 유연성도 필요합니다!',
      en: 'Efficiency is important, but flexibility for innovation is also needed!',
      ja: '効率性も重要ですが、革新のための柔軟性も必要です！',
      'zh-CN': '效率很重要，但创新所需的灵活性也很必要！',
      'zh-TW': '效率很重要，但創新所需的靈活性也很必要！',
      id: 'Efisiensi penting, tapi fleksibilitas untuk inovasi juga diperlukan!',
      vi: 'Hiệu quả quan trọng, nhưng tính linh hoạt cho đổi mới cũng cần thiết!'
    }
  },
  {
    type: 'Type5',
    emoji: '🎨',
    title: {
      ko: '창작 크리에이터형',
      en: 'Creative Creator Type',
      ja: '創作クリエイター型',
      'zh-CN': '创作创造者型',
      'zh-TW': '創作創造者型',
      id: 'Tipe Kreator Kreatif',
      vi: 'Kiểu Sáng Tạo Sáng Tạo'
    },
    description: {
      ko: '무에서 유를 창조! 혁신과 창의성의 아티스트',
      en: 'Creating something from nothing! Artist of innovation and creativity',
      ja: '無から有を創造！革新と創造性のアーティスト',
      'zh-CN': '从无到有创造！创新和创造性的艺术家',
      'zh-TW': '從無到有創造！創新和創造性的藝術家',
      id: 'Menciptakan sesuatu dari ketiadaan! Seniman inovasi dan kreativitas',
      vi: 'Tạo ra từ hư không! Nghệ sĩ của đổi mới và sáng tạo'
    },
    longDescription: {
      ko: '당신은 새로운 것을 만들어내는 창작자입니다. 아이디어가 풍부하고 고정관념에 얽매이지 않습니다. 미적 감각과 창의성이 뛰어나며 독창적인 결과물을 만듭니다. 디자인, 콘텐츠 제작, 브랜딩, UX/UI 분야에서 당신만의 색깔을 보여줄 수 있습니다.',
      en: 'You are a creator who makes new things. You have abundant ideas and are not bound by stereotypes. You have excellent aesthetic sense and creativity, and create original results. You can show your own color in design, content production, branding, and UX/UI fields.',
      ja: 'あなたは新しいものを作り出す創作者です。アイデアが豊富で、固定観念に縛られません。美的感覚と創造性に優れ、独創的な結果物を作ります。デザイン、コンテンツ制作、ブランディング、UX/UI分野で自分だけの色を見せることができます。',
      'zh-CN': '你是创造新事物的创作者。你想法丰富，不受刻板印象束缚。你审美感和创造力出色，创造原创成果。你可以在设计、内容制作、品牌、UX/UI领域展现自己的特色。',
      'zh-TW': '你是創造新事物的創作者。你想法豐富，不受刻板印象束縛。你審美感和創造力出色，創造原創成果。你可以在設計、內容製作、品牌、UX/UI領域展現自己的特色。',
      id: 'Anda adalah kreator yang membuat hal-hal baru. Anda memiliki ide yang melimpah dan tidak terikat oleh stereotip. Anda memiliki kepekaan estetika dan kreativitas yang luar biasa, dan menciptakan hasil yang orisinal. Anda dapat menunjukkan warna Anda sendiri di bidang desain, produksi konten, branding, dan UX/UI.',
      vi: 'Bạn là người sáng tạo tạo ra những điều mới. Bạn có ý tưởng phong phú và không bị ràng buộc bởi định kiến. Bạn có cảm quan thẩm mỹ và sáng tạo xuất sắc, tạo ra kết quả độc đáo. Bạn có thể thể hiện màu sắc riêng của mình trong lĩnh vực thiết kế, sản xuất nội dung, xây dựng thương hiệu và UX/UI.'
    },
    strengths: [
      {
        ko: '창의성',
        en: 'Creativity',
        ja: '創造性',
        'zh-CN': '创造性',
        'zh-TW': '創造性',
        id: 'Kreativitas',
        vi: 'Sáng tạo'
      },
      {
        ko: '독창성',
        en: 'Originality',
        ja: '独創性',
        'zh-CN': '独创性',
        'zh-TW': '獨創性',
        id: 'Orisinalitas',
        vi: 'Độc đáo'
      },
      {
        ko: '예술적 감각',
        en: 'Artistic sense',
        ja: '芸術的感覚',
        'zh-CN': '艺术感觉',
        'zh-TW': '藝術感覺',
        id: 'Rasa artistik',
        vi: 'Cảm giác nghệ thuật'
      },
      {
        ko: '아이디어',
        en: 'Ideas',
        ja: 'アイデア',
        'zh-CN': '想法',
        'zh-TW': '想法',
        id: 'Ide',
        vi: 'Ý tưởng'
      },
      {
        ko: '혁신',
        en: 'Innovation',
        ja: '革新',
        'zh-CN': '创新',
        'zh-TW': '創新',
        id: 'Inovasi',
        vi: 'Đổi mới'
      }
    ],
    weaknesses: [
      {
        ko: '체계성 부족',
        en: 'Lack of systematic approach',
        ja: '体系性不足',
        'zh-CN': '缺乏系统性',
        'zh-TW': '缺乏系統性',
        id: 'Kurang pendekatan sistematis',
        vi: 'Thiếu cách tiếp cận có hệ thống'
      },
      {
        ko: '실행력 약함',
        en: 'Weak execution',
        ja: '実行力が弱い',
        'zh-CN': '执行力弱',
        'zh-TW': '執行力弱',
        id: 'Eksekusi lemah',
        vi: 'Thực thi yếu'
      },
      {
        ko: '마감 지키기 어려움',
        en: 'Difficulty meeting deadlines',
        ja: '締切を守るのが困難',
        'zh-CN': '难以遵守截止日期',
        'zh-TW': '難以遵守截止日期',
        id: 'Sulit memenuhi tenggat waktu',
        vi: 'Khó tuân thủ thời hạn'
      }
    ],
    recommendedJobs: {
      ko: '• 디자이너: 그래픽 디자인, 웹 디자인, 제품 디자인\n• 크리에이터: 콘텐츠 제작, 영상 편집, 창작 활동\n• UX/UI: 사용자 경험 설계, 인터페이스 디자인, 프로토타이핑\n• 브랜딩: 브랜드 아이덴티티, 로고 디자인, 브랜드 전략\n• 콘텐츠: 콘텐츠 기획, 마케팅 콘텐츠, 스토리텔링',
      en: '• Designer: Graphic design, web design, product design\n• Creator: Content creation, video editing, creative activities\n• UX/UI: User experience design, interface design, prototyping\n• Branding: Brand identity, logo design, brand strategy\n• Content: Content planning, marketing content, storytelling',
      ja: '• デザイナー: グラフィックデザイン、ウェブデザイン、製品デザイン\n• クリエイター: コンテンツ制作、動画編集、創作活動\n• UX/UI: ユーザー体験設計、インターフェースデザイン、プロトタイピング\n• ブランディング: ブランドアイデンティティ、ロゴデザイン、ブランド戦略\n• コンテンツ: コンテンツ企画、マーケティングコンテンツ、ストーリーテリング',
      'zh-CN': '• 设计师：平面设计、网页设计、产品设计\n• 创造者：内容创作、视频编辑、创作活动\n• UX/UI：用户体验设计、界面设计、原型制作\n• 品牌设计：品牌标识、标志设计、品牌策略\n• 内容：内容策划、营销内容、故事叙述',
      'zh-TW': '• 設計師：平面設計、網頁設計、產品設計\n• 創造者：內容創作、影片編輯、創作活動\n• UX/UI：用戶體驗設計、介面設計、原型製作\n• 品牌設計：品牌識別、標誌設計、品牌策略\n• 內容：內容策劃、營銷內容、故事敘述',
      id: '• Desainer: Desain grafis, desain web, desain produk\n• Kreator: Pembuatan konten, editing video, aktivitas kreatif\n• UX/UI: Desain pengalaman pengguna, desain antarmuka, prototyping\n• Branding: Identitas merek, desain logo, strategi merek\n• Konten: Perencanaan konten, konten pemasaran, storytelling',
      vi: '• Nhà thiết kế: Thiết kế đồ họa, thiết kế web, thiết kế sản phẩm\n• Người sáng tạo: Tạo nội dung, chỉnh sửa video, hoạt động sáng tạo\n• UX/UI: Thiết kế trải nghiệm người dùng, thiết kế giao diện, tạo mẫu thử\n• Thiết kế thương hiệu: Nhận dạng thương hiệu, thiết kế logo, chiến lược thương hiệu\n• Nội dung: Lập kế hoạch nội dung, nội dung marketing, kể chuyện'
    },
    recommendedCompanies: {
      ko: '• 광고 대행사: 글로벌 광고 대행사, 대형 광고 대행사, 크리에이티브 에이전시\n• 디자인 스튜디오: 독립 디자인 스튜디오, 브랜딩 전문 회사, 크리에이티브 스튜디오\n• IT 기업: 플랫폼 기업의 디자인팀, 테크 스타트업, 디지털 기업\n• 미디어: 방송사, 출판사, 온라인 미디어의 크리에이티브팀',
      en: '• Advertising Agencies: Global advertising agencies, major advertising agencies, creative agencies\n• Design Studios: Independent design studios, branding specialized companies, creative studios\n• IT Companies: Design teams at platform companies, tech startups, digital companies\n• Media: Creative teams at broadcasters, publishers, online media',
      ja: '• 広告代理店: グローバル広告代理店、大手広告代理店、クリエイティブエージェンシー\n• デザインスタジオ: 独立デザインスタジオ、ブランディング専門会社、クリエイティブスタジオ\n• IT企業: プラットフォーム企業のデザインチーム、テックスタートアップ、デジタル企業\n• メディア: 放送局、出版社、オンラインメディアのクリエイティブチーム',
      'zh-CN': '• 广告代理：全球广告代理、大型广告代理、创意代理\n• 设计工作室：独立设计工作室、品牌专业公司、创意工作室\n• IT企业：平台企业的设计团队、科技初创公司、数字企业\n• 媒体：广播公司、出版社、在线媒体的创意团队',
      'zh-TW': '• 廣告代理：全球廣告代理、大型廣告代理、創意代理\n• 設計工作室：獨立設計工作室、品牌專業公司、創意工作室\n• IT企業：平台企業的設計團隊、科技初創公司、數字企業\n• 媒體：廣播公司、出版社、在線媒體的創意團隊',
      id: '• Agensi Periklanan: Agensi periklanan global, agensi periklanan besar, agensi kreatif\n• Studio Desain: Studio desain independen, perusahaan khusus branding, studio kreatif\n• Perusahaan IT: Tim desain di perusahaan platform, startup teknologi, perusahaan digital\n• Media: Tim kreatif di stasiun TV, penerbit, media online',
      vi: '• Công ty Quảng cáo: Công ty quảng cáo toàn cầu, công ty quảng cáo lớn, công ty sáng tạo\n• Studio Thiết kế: Studio thiết kế độc lập, công ty chuyên thương hiệu, studio sáng tạo\n• Công ty IT: Đội ngũ thiết kế tại các công ty nền tảng, startup công nghệ, công ty số\n• Truyền thông: Đội ngũ sáng tạo tại đài truyền hình, nhà xuất bản, truyền thông trực tuyến'
    },
    advice: {
      ko: '창의성과 체계성의 균형을 맞추세요. 협업이 중요합니다!',
      en: 'Balance creativity and systematic approach. Collaboration is important!',
      ja: '創造性と体系性のバランスを取りましょう。協力が重要です！',
      'zh-CN': '平衡创造性和系统性。协作很重要！',
      'zh-TW': '平衡創造性和系統性。協作很重要！',
      id: 'Seimbangkan kreativitas dan pendekatan sistematis. Kolaborasi penting!',
      vi: 'Cân bằng sáng tạo và cách tiếp cận có hệ thống. Hợp tác quan trọng!'
    }
  },
  {
    type: 'Type6',
    emoji: '👥',
    title: {
      ko: '교육 상담형',
      en: 'Education Counseling Type',
      ja: '教育相談型',
      'zh-CN': '教育咨询型',
      'zh-TW': '教育諮詢型',
      id: 'Tipe Konseling Pendidikan',
      vi: 'Kiểu Tư Vấn Giáo Dục'
    },
    description: {
      ko: '사람을 성장시키는 조력자! 따뜻한 멘토',
      en: 'Helper who grows people! Warm mentor',
      ja: '人を成長させる支援者！温かいメンター',
      'zh-CN': '帮助人们成长的助手！温暖的导师',
      'zh-TW': '幫助人們成長的助手！溫暖的導師',
      id: 'Pembantu yang menumbuhkan orang! Mentor yang hangat',
      vi: 'Người giúp đỡ phát triển con người! Người cố vấn ấm áp'
    },
    longDescription: {
      ko: '당신은 사람의 성장과 발전을 돕는 데서 보람을 느낍니다. 경청과 공감 능력이 뛰어나고 인내심이 있습니다. 지식을 전달하고 사람들을 이해하며 문제를 함께 해결합니다. 교육, 상담, HR, 코칭 분야에서 사람들에게 긍정적 영향을 줄 수 있습니다.',
      en: 'You find fulfillment in helping people grow and develop. You have excellent listening and empathy skills, and patience. You transfer knowledge, understand people, and solve problems together. You can have a positive impact on people in education, counseling, HR, and coaching fields.',
      ja: 'あなたは人の成長と発展を助けることにやりがいを感じます。傾聴と共感能力に優れており、忍耐力があります。知識を伝達し、人を理解し、問題を一緒に解決します。教育、相談、HR、コーチング分野で人々にポジティブな影響を与えることができます。',
      'zh-CN': '你在帮助人们成长和发展中找到成就感。你倾听和共情能力出色，有耐心。你传递知识，理解人们，一起解决问题。你可以在教育、咨询、人力资源、教练领域对人们产生积极影响。',
      'zh-TW': '你在幫助人們成長和發展中找到成就感。你傾聽和共情能力出色，有耐心。你傳遞知識，理解人們，一起解決問題。你可以在教育、諮詢、人力資源、教練領域對人們產生積極影響。',
      id: 'Anda menemukan kepuasan dalam membantu orang tumbuh dan berkembang. Anda memiliki keterampilan mendengarkan dan empati yang luar biasa, dan kesabaran. Anda mentransfer pengetahuan, memahami orang, dan memecahkan masalah bersama. Anda dapat memiliki dampak positif pada orang di bidang pendidikan, konseling, HR, dan pelatihan.',
      vi: 'Bạn tìm thấy sự thỏa mãn trong việc giúp mọi người phát triển và trưởng thành. Bạn có khả năng lắng nghe và đồng cảm xuất sắc, và kiên nhẫn. Bạn truyền đạt kiến thức, hiểu mọi người và cùng nhau giải quyết vấn đề. Bạn có thể tạo ra tác động tích cực cho mọi người trong lĩnh vực giáo dục, tư vấn, nhân sự và huấn luyện.'
    },
    strengths: [
      {
        ko: '공감력',
        en: 'Empathy',
        ja: '共感力',
        'zh-CN': '同理心',
        'zh-TW': '同理心',
        id: 'Empati',
        vi: 'Đồng cảm'
      },
      {
        ko: '경청력',
        en: 'Listening skills',
        ja: '傾聴力',
        'zh-CN': '倾听能力',
        'zh-TW': '傾聽能力',
        id: 'Kemampuan mendengarkan',
        vi: 'Kỹ năng lắng nghe'
      },
      {
        ko: '인내심',
        en: 'Patience',
        ja: '忍耐力',
        'zh-CN': '耐心',
        'zh-TW': '耐心',
        id: 'Kesabaran',
        vi: 'Kiên nhẫn'
      },
      {
        ko: '소통력',
        en: 'Communication skills',
        ja: 'コミュニケーション力',
        'zh-CN': '沟通能力',
        'zh-TW': '溝通能力',
        id: 'Kemampuan komunikasi',
        vi: 'Kỹ năng giao tiếp'
      },
      {
        ko: '따뜻함',
        en: 'Warmth',
        ja: '温かさ',
        'zh-CN': '温暖',
        'zh-TW': '溫暖',
        id: 'Kehangatan',
        vi: 'Sự ấm áp'
      }
    ],
    weaknesses: [
      {
        ko: '성과 압박 약함',
        en: 'Weak under performance pressure',
        ja: '成果圧迫に弱い',
        'zh-CN': '在绩效压力下较弱',
        'zh-TW': '在績效壓力下較弱',
        id: 'Lemah di bawah tekanan kinerja',
        vi: 'Yếu dưới áp lực hiệu suất'
      },
      {
        ko: '비즈니스 감각 부족',
        en: 'Lack of business sense',
        ja: 'ビジネス感覚不足',
        'zh-CN': '缺乏商业感觉',
        'zh-TW': '缺乏商業感覺',
        id: 'Kurang indra bisnis',
        vi: 'Thiếu cảm giác kinh doanh'
      },
      {
        ko: '우유부단',
        en: 'Indecisive',
        ja: '優柔不断',
        'zh-CN': '优柔寡断',
        'zh-TW': '優柔寡斷',
        id: 'Tidak tegas',
        vi: 'Không quyết đoán'
      }
    ],
    recommendedJobs: {
      ko: '• 교육: 학교 교사, 교육 컨설턴트, 교육 프로그램 개발\n• 상담: 심리 상담, 진로 상담, 가족 상담\n• HR: 인사 담당, 채용 담당, 조직 개발\n• 코치: 라이프 코치, 비즈니스 코치, 퍼스널 트레이너\n• 고객 지원: 고객 서비스, 고객 상담, 고객 만족도 관리\n• CS: 고객 응대, 문의 처리, 고객 관계 관리',
      en: '• Education: School teachers, education consultants, educational program development\n• Counseling: Psychological counseling, career counseling, family counseling\n• HR: Personnel management, recruitment, organizational development\n• Coach: Life coach, business coach, personal trainer\n• Customer Support: Customer service, customer consultation, customer satisfaction management\n• CS: Customer response, inquiry handling, customer relationship management',
      ja: '• 教育: 学校教師、教育コンサルタント、教育プログラム開発\n• 相談: 心理相談、進路相談、家族相談\n• HR: 人事担当、採用担当、組織開発\n• コーチ: ライフコーチ、ビジネスコーチ、パーソナルトレーナー\n• 顧客サポート: 顧客サービス、顧客相談、顧客満足度管理\n• CS: 顧客対応、問い合わせ処理、顧客関係管理',
      'zh-CN': '• 教育：学校教师、教育顾问、教育项目开发\n• 咨询：心理咨询、职业咨询、家庭咨询\n• 人力资源：人事管理、招聘、组织发展\n• 教练：生活教练、商业教练、私人教练\n• 客户支持：客户服务、客户咨询、客户满意度管理\n• 客户服务：客户响应、咨询处理、客户关系管理',
      'zh-TW': '• 教育：學校教師、教育顧問、教育項目開發\n• 諮詢：心理諮詢、職業諮詢、家庭諮詢\n• 人力資源：人事管理、招聘、組織發展\n• 教練：生活教練、商業教練、私人教練\n• 客戶支持：客戶服務、客戶諮詢、客戶滿意度管理\n• 客戶服務：客戶響應、諮詢處理、客戶關係管理',
      id: '• Pendidikan: Guru sekolah, konsultan pendidikan, pengembangan program pendidikan\n• Konseling: Konseling psikologis, konseling karier, konseling keluarga\n• HR: Manajemen personalia, rekrutmen, pengembangan organisasi\n• Pelatih: Pelatih kehidupan, pelatih bisnis, pelatih pribadi\n• Dukungan Pelanggan: Layanan pelanggan, konsultasi pelanggan, manajemen kepuasan pelanggan\n• CS: Respons pelanggan, penanganan pertanyaan, manajemen hubungan pelanggan',
      vi: '• Giáo dục: Giáo viên trường học, tư vấn giáo dục, phát triển chương trình giáo dục\n• Tư vấn: Tư vấn tâm lý, tư vấn nghề nghiệp, tư vấn gia đình\n• Nhân sự: Quản lý nhân sự, tuyển dụng, phát triển tổ chức\n• Huấn luyện viên: Huấn luyện viên cuộc sống, huấn luyện viên kinh doanh, huấn luyện viên cá nhân\n• Hỗ trợ Khách hàng: Dịch vụ khách hàng, tư vấn khách hàng, quản lý sự hài lòng khách hàng\n• CS: Phản hồi khách hàng, xử lý yêu cầu, quản lý mối quan hệ khách hàng'
    },
    recommendedCompanies: {
      ko: '• 교육 기관: 초등학교, 중학교, 고등학교, 대학교\n• HR 컨설팅: 인사 컨설팅 회사, 조직 개발 전문 기업\n• 상담 센터: 심리 상담 센터, 진로 상담 센터, 가족 상담 센터\n• 고객 서비스: 대기업 고객 서비스팀, 콜센터, 고객 지원 센터',
      en: '• Educational Institutions: Elementary schools, middle schools, high schools, universities\n• HR Consulting: HR consulting companies, organizational development specialized companies\n• Counseling Centers: Psychological counseling centers, career counseling centers, family counseling centers\n• Customer Service: Corporate customer service teams, call centers, customer support centers',
      ja: '• 教育機関: 小学校、中学校、高校、大学\n• HRコンサルティング: 人事コンサルティング会社、組織開発専門企業\n• 相談センター: 心理相談センター、進路相談センター、家族相談センター\n• 顧客サービス: 大企業顧客サービスチーム、コールセンター、顧客サポートセンター',
      'zh-CN': '• 教育机构：小学、中学、高中、大学\n• 人力资源咨询：人事咨询公司、组织发展专业企业\n• 咨询中心：心理咨询中心、职业咨询中心、家庭咨询中心\n• 客户服务：大企业客户服务团队、呼叫中心、客户支持中心',
      'zh-TW': '• 教育機構：小學、中學、高中、大學\n• 人力資源諮詢：人事諮詢公司、組織發展專業企業\n• 諮詢中心：心理諮詢中心、職業諮詢中心、家庭諮詢中心\n• 客戶服務：大企業客戶服務團隊、呼叫中心、客戶支持中心',
      id: '• Lembaga Pendidikan: Sekolah dasar, sekolah menengah, sekolah menengah atas, universitas\n• Konsultasi HR: Perusahaan konsultasi HR, perusahaan khusus pengembangan organisasi\n• Pusat Konseling: Pusat konseling psikologis, pusat konseling karier, pusat konseling keluarga\n• Layanan Pelanggan: Tim layanan pelanggan perusahaan besar, pusat panggilan, pusat dukungan pelanggan',
      vi: '• Tổ chức Giáo dục: Trường tiểu học, trường trung học cơ sở, trường trung học phổ thông, đại học\n• Tư vấn Nhân sự: Công ty tư vấn nhân sự, công ty chuyên phát triển tổ chức\n• Trung tâm Tư vấn: Trung tâm tư vấn tâm lý, trung tâm tư vấn nghề nghiệp, trung tâm tư vấn gia đình\n• Dịch vụ Khách hàng: Đội ngũ dịch vụ khách hàng tập đoàn lớn, trung tâm cuộc gọi, trung tâm hỗ trợ khách hàng'
    },
    advice: {
      ko: '따뜻함과 전문성을 모두 갖추세요. 경계 설정도 중요합니다!',
      en: 'Have both warmth and professionalism. Setting boundaries is also important!',
      ja: '温かさと専門性を両方備えましょう。境界設定も重要です！',
      'zh-CN': '既要有温暖又要有专业性。设定界限也很重要！',
      'zh-TW': '既要有溫暖又要有專業性。設定界限也很重要！',
      id: 'Miliki kehangatan dan profesionalisme. Menetapkan batasan juga penting!',
      vi: 'Có cả sự ấm áp và chuyên nghiệp. Thiết lập ranh giới cũng quan trọng!'
    }
  }
];

// 점수 계산 함수
export function calculateJobStrengthResult(answers: any[]): string {
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변에 따라 점수 계산
  answers.forEach((answer) => {
    if (answer) {
      Object.entries(answer).forEach(([type, score]) => {
        if (scores[type] !== undefined) {
          scores[type] += score as number;
        }
      });
    }
  });

  // 최고 점수 찾기
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type] === maxScore) || 'Type1';

  return resultType;
}
