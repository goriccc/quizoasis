import { stressQuestions, stressResults } from './stressData';
import { datingQuestions, datingResults } from './datingData';
import { signalQuestions, signalResults } from './signalData';
import { attachmentQuestions, attachmentResults } from './attachmentData';
import { friendQuestions, friendResults } from './friendData';
import { conflictQuestions, conflictResults } from './conflictData';
import { loveFlavorQuestions, loveFlavorResults } from './loveFlavorData';
import { idealTypeQuestions, idealTypeResults } from './idealTypeData';
import { crushQuestions, crushResults } from './crushData';

// MBTI 질문 데이터
export interface MBTIQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    A: {
      text: Record<string, string>;
      score: string;
    };
    B: {
      text: Record<string, string>;
      score: string;
    };
  };
}

// MBTI 결과 데이터
export interface MBTIResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  traits: Record<string, string[]>;
}

// MBTI 질문들 (10개)
export const mbtiQuestions: MBTIQuestion[] = [
  {
    id: 1,
    question: {
      ko: "새로운 환경에서 당신은?",
      en: "In a new environment, you are?",
      ja: "新しい環境で、あなたは？",
      'zh-CN': "在新环境中，你是？",
      'zh-TW': "在新環境中，你是？",
      vi: "Trong môi trường mới, bạn là?",
      id: "Dalam lingkungan baru, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "적극적으로 사람들과 어울린다",
          en: "Actively socialize with people",
          ja: "積極的に人々と交流する",
          'zh-CN': "积极与他人交往",
          'zh-TW': "積極與他人交往",
          vi: "Tích cực giao lưu với mọi người",
          id: "Aktif bergaul dengan orang-orang"
        },
        score: "E"
      },
      B: {
        text: {
          ko: "조용히 상황을 관찰한다",
          en: "Quietly observe the situation",
          ja: "静かに状況を観察する",
          'zh-CN': "安静地观察情况",
          'zh-TW': "安靜地觀察情況",
          vi: "Quan sát tình huống một cách yên lặng",
          id: "Mengamati situasi dengan tenang"
        },
        score: "I"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "문제를 해결할 때 당신은?",
      en: "When solving problems, you?",
      ja: "問題を解決する時、あなたは？",
      'zh-CN': "解决问题时，你是？",
      'zh-TW': "解決問題時，你是？",
      vi: "Khi giải quyết vấn đề, bạn là?",
      id: "Saat memecahkan masalah, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "구체적인 사실과 데이터를 중시한다",
          en: "Value concrete facts and data",
          ja: "具体的な事実とデータを重視する",
          'zh-CN': "重视具体事实和数据",
          'zh-TW': "重視具體事實和數據",
          vi: "Coi trọng sự kiện cụ thể và dữ liệu",
          id: "Menghargai fakta konkret dan data"
        },
        score: "S"
      },
      B: {
        text: {
          ko: "새로운 가능성과 아이디어를 추구한다",
          en: "Pursue new possibilities and ideas",
          ja: "新しい可能性とアイデアを追求する",
          'zh-CN': "追求新的可能性和想法",
          'zh-TW': "追求新的可能性和想法",
          vi: "Theo đuổi những khả năng và ý tưởng mới",
          id: "Mengejar kemungkinan dan ide baru"
        },
        score: "N"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "중요한 결정을 내릴 때 당신은?",
      en: "When making important decisions, you?",
      ja: "重要な決定をする時、あなたは？",
      'zh-CN': "做重要决定时，你是？",
      'zh-TW': "做重要決定時，你是？",
      vi: "Khi đưa ra quyết định quan trọng, bạn là?",
      id: "Saat membuat keputusan penting, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "논리와 객관적 분석을 우선한다",
          en: "Prioritize logic and objective analysis",
          ja: "論理と客観的分析を優先する",
          'zh-CN': "优先考虑逻辑和客观分析",
          'zh-TW': "優先考慮邏輯和客觀分析",
          vi: "Ưu tiên logic và phân tích khách quan",
          id: "Memprioritaskan logika dan analisis objektif"
        },
        score: "T"
      },
      B: {
        text: {
          ko: "사람들의 감정과 가치를 고려한다",
          en: "Consider people's emotions and values",
          ja: "人々の感情と価値観を考慮する",
          'zh-CN': "考虑人们的情感和价值观",
          'zh-TW': "考慮人們的情感和價值觀",
          vi: "Xem xét cảm xúc và giá trị của mọi người",
          id: "Mempertimbangkan emosi dan nilai orang lain"
        },
        score: "F"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "일상생활에서 당신은?",
      en: "In daily life, you are?",
      ja: "日常生活で、あなたは？",
      'zh-CN': "在日常生活中，你是？",
      'zh-TW': "在日常生活中，你是？",
      vi: "Trong cuộc sống hàng ngày, bạn là?",
      id: "Dalam kehidupan sehari-hari, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "계획을 세우고 체계적으로 진행한다",
          en: "Make plans and proceed systematically",
          ja: "計画を立てて体系的に進める",
          'zh-CN': "制定计划并系统地进行",
          'zh-TW': "制定計劃並系統地進行",
          vi: "Lập kế hoạch và tiến hành một cách có hệ thống",
          id: "Membuat rencana dan melanjutkan secara sistematis"
        },
        score: "J"
      },
      B: {
        text: {
          ko: "유연하게 상황에 맞춰 대응한다",
          en: "Adapt flexibly to situations",
          ja: "柔軟に状況に合わせて対応する",
          'zh-CN': "灵活地适应情况",
          'zh-TW': "靈活地適應情況",
          vi: "Thích ứng linh hoạt với tình huống",
          id: "Beradaptasi secara fleksibel dengan situasi"
        },
        score: "P"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "스트레스를 받을 때 당신은?",
      en: "When stressed, you?",
      ja: "ストレスを受けた時、あなたは？",
      'zh-CN': "承受压力时，你是？",
      'zh-TW': "承受壓力時，你是？",
      vi: "Khi bị căng thẳng, bạn là?",
      id: "Saat stres, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "다른 사람들과 이야기하며 해소한다",
          en: "Relieve by talking to others",
          ja: "他の人と話して解消する",
          'zh-CN': "通过与他人交谈来缓解",
          'zh-TW': "通過與他人交談來緩解",
          vi: "Giải tỏa bằng cách nói chuyện với người khác",
          id: "Meredakan dengan berbicara dengan orang lain"
        },
        score: "E"
      },
      B: {
        text: {
          ko: "혼자만의 시간을 가지며 회복한다",
          en: "Recover by having time alone",
          ja: "一人の時間を持って回復する",
          'zh-CN': "通过独处时间来恢复",
          'zh-TW': "通過獨處時間來恢復",
          vi: "Hồi phục bằng cách có thời gian một mình",
          id: "Pulih dengan memiliki waktu sendiri"
        },
        score: "I"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "새로운 프로젝트를 시작할 때 당신은?",
      en: "When starting a new project, you?",
      ja: "新しいプロジェクトを始める時、あなたは？",
      'zh-CN': "开始新项目时，你是？",
      'zh-TW': "開始新項目時，你是？",
      vi: "Khi bắt đầu một dự án mới, bạn là?",
      id: "Saat memulai proyek baru, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "기존의 검증된 방법을 활용한다",
          en: "Use proven existing methods",
          ja: "既存の検証済み方法を活用する",
          'zh-CN': "使用经过验证的现有方法",
          'zh-TW': "使用經過驗證的現有方法",
          vi: "Sử dụng các phương pháp đã được chứng minh",
          id: "Menggunakan metode yang sudah terbukti"
        },
        score: "S"
      },
      B: {
        text: {
          ko: "새로운 접근 방식을 시도한다",
          en: "Try new approaches",
          ja: "新しいアプローチを試す",
          'zh-CN': "尝试新的方法",
          'zh-TW': "嘗試新的方法",
          vi: "Thử các cách tiếp cận mới",
          id: "Mencoba pendekatan baru"
        },
        score: "N"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "갈등 상황에서 당신은?",
      en: "In conflict situations, you?",
      ja: "対立状況で、あなたは？",
      'zh-CN': "在冲突情况下，你是？",
      'zh-TW': "在衝突情況下，你是？",
      vi: "Trong tình huống xung đột, bạn là?",
      id: "Dalam situasi konflik, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "사실과 원칙에 따라 판단한다",
          en: "Judge based on facts and principles",
          ja: "事実と原則に基づいて判断する",
          'zh-CN': "根据事实和原则判断",
          'zh-TW': "根據事實和原則判斷",
          vi: "Đánh giá dựa trên sự kiện và nguyên tắc",
          id: "Menilai berdasarkan fakta dan prinsip"
        },
        score: "T"
      },
      B: {
        text: {
          ko: "상대방의 입장을 이해하려 한다",
          en: "Try to understand the other's position",
          ja: "相手の立場を理解しようとする",
          'zh-CN': "试图理解对方的立场",
          'zh-TW': "試圖理解對方的立場",
          vi: "Cố gắng hiểu quan điểm của đối phương",
          id: "Berusaha memahami posisi lawan"
        },
        score: "F"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "여행을 계획할 때 당신은?",
      en: "When planning a trip, you?",
      ja: "旅行を計画する時、あなたは？",
      'zh-CN': "计划旅行时，你是？",
      'zh-TW': "計劃旅行時，你是？",
      vi: "Khi lên kế hoạch du lịch, bạn là?",
      id: "Saat merencanakan perjalanan, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "상세한 일정표를 미리 만든다",
          en: "Make a detailed schedule in advance",
          ja: "詳細なスケジュールを事前に作る",
          'zh-CN': "提前制定详细的时间表",
          'zh-TW': "提前制定詳細的時間表",
          vi: "Làm lịch trình chi tiết trước",
          id: "Membuat jadwal detail sebelumnya"
        },
        score: "J"
      },
      B: {
        text: {
          ko: "즉흥적으로 즐거운 순간을 만든다",
          en: "Create enjoyable moments spontaneously",
          ja: "即興的に楽しい瞬間を作る",
          'zh-CN': "即兴创造愉快的时刻",
          'zh-TW': "即興創造愉快的時刻",
          vi: "Tạo ra những khoảnh khắc vui vẻ một cách ngẫu hứng",
          id: "Menciptakan momen menyenangkan secara spontan"
        },
        score: "P"
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "회의나 모임에서 당신은?",
      en: "In meetings or gatherings, you?",
      ja: "会議や集まりで、あなたは？",
      'zh-CN': "在会议或聚会中，你是？",
      'zh-TW': "在會議或聚會中，你是？",
      vi: "Trong các cuộc họp hoặc tụ tập, bạn là?",
      id: "Dalam rapat atau pertemuan, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "적극적으로 의견을 제시한다",
          en: "Actively present opinions",
          ja: "積極的に意見を提示する",
          'zh-CN': "积极提出意见",
          'zh-TW': "積極提出意見",
          vi: "Tích cực đưa ra ý kiến",
          id: "Aktif menyampaikan pendapat"
        },
        score: "E"
      },
      B: {
        text: {
          ko: "신중하게 듣고 깊이 생각한다",
          en: "Listen carefully and think deeply",
          ja: "慎重に聞いて深く考える",
          'zh-CN': "仔细倾听并深入思考",
          'zh-TW': "仔細傾聽並深入思考",
          vi: "Lắng nghe cẩn thận và suy nghĩ sâu sắc",
          id: "Mendengarkan dengan hati-hati dan berpikir mendalam"
        },
        score: "I"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "새로운 정보를 접할 때 당신은?",
      en: "When encountering new information, you?",
      ja: "新しい情報に接する時、あなたは？",
      'zh-CN': "接触新信息时，你是？",
      'zh-TW': "接觸新信息時，你是？",
      vi: "Khi tiếp xúc với thông tin mới, bạn là?",
      id: "Saat menemui informasi baru, Anda adalah?"
    },
    options: {
      A: {
        text: {
          ko: "실용적이고 구체적인 내용을 선호한다",
          en: "Prefer practical and specific content",
          ja: "実用的で具体的な内容を好む",
          'zh-CN': "偏好实用和具体的内容",
          'zh-TW': "偏好實用和具體的內容",
          vi: "Thích nội dung thực tế và cụ thể",
          id: "Lebih suka konten praktis dan spesifik"
        },
        score: "S"
      },
      B: {
        text: {
          ko: "이론적이고 추상적인 개념에 흥미를 느낀다",
          en: "Find theoretical and abstract concepts interesting",
          ja: "理論的で抽象的な概念に興味を持つ",
          'zh-CN': "对理论和抽象概念感兴趣",
          'zh-TW': "對理論和抽象概念感興趣",
          vi: "Thấy hứng thú với các khái niệm lý thuyết và trừu tượng",
          id: "Menemukan konsep teoretis dan abstrak menarik"
        },
        score: "N"
      }
    }
  }
];

// MBTI 결과들
export const mbtiResults: MBTIResult[] = [
  {
    type: "INTJ",
    emoji: "🧠",
    title: {
      ko: "건축가",
      en: "Architect",
      ja: "建築家",
      'zh-CN': "建筑师",
      'zh-TW': "建築師",
      vi: "Kiến trúc sư",
      id: "Arsitek"
    },
    description: {
      ko: "독창적이고 전략적인 사고를 가진 완벽주의자입니다. 복잡한 문제를 체계적으로 해결하며, 장기적인 비전을 추구합니다.",
      en: "An original and strategic thinking perfectionist. Systematically solves complex problems and pursues long-term vision.",
      ja: "独創的で戦略的思考を持つ完璧主義者です。複雑な問題を体系的に解決し、長期的なビジョンを追求します。",
      'zh-CN': "具有原创性和战略性思维的完美主义者。系统性地解决复杂问题，追求长期愿景。",
      'zh-TW': "具有原創性和戰略性思維的完美主義者。系統性地解決複雜問題，追求長期願景。",
      vi: "Một người theo chủ nghĩa hoàn hảo với tư duy độc đáo và chiến lược. Giải quyết các vấn đề phức tạp một cách có hệ thống và theo đuổi tầm nhìn dài hạn.",
      id: "Seorang perfeksionis dengan pemikiran orisinal dan strategis. Menyelesaikan masalah kompleks secara sistematis dan mengejar visi jangka panjang."
    },
    traits: {
      ko: ["독창적", "체계적", "비전가", "독립적", "논리적"],
      en: ["Original", "Systematic", "Visionary", "Independent", "Logical"],
      ja: ["独創的", "体系的", "ビジョナリー", "独立的", "論理的"],
      'zh-CN': ["原创", "系统", "有远见", "独立", "逻辑"],
      'zh-TW': ["原創", "系統", "有遠見", "獨立", "邏輯"],
      vi: ["Độc đáo", "Có hệ thống", "Có tầm nhìn", "Độc lập", "Logic"],
      id: ["Orisinal", "Sistematis", "Berwawasan", "Mandiri", "Logis"]
    }
  },
  {
    type: "INTP",
    emoji: "🔬",
    title: {
      ko: "논리학자",
      en: "Thinker",
      ja: "論理学者",
      'zh-CN': "逻辑学家",
      'zh-TW': "邏輯學家",
      vi: "Nhà logic học",
      id: "Ahli logika"
    },
    description: {
      ko: "호기심이 많고 분석적인 사고를 가진 혁신가입니다. 이론과 개념을 탐구하며, 지식에 대한 깊은 이해를 추구합니다.",
      en: "A curious and analytical thinking innovator. Explores theories and concepts, pursuing deep understanding of knowledge.",
      ja: "好奇心が強く分析的思考を持つ革新者です。理論と概念を探究し、知識への深い理解を追求します。",
      'zh-CN': "好奇心强、分析性思维的创新者。探索理论和概念，追求对知识的深刻理解。",
      'zh-TW': "好奇心強、分析性思維的創新者。探索理論和概念，追求對知識的深刻理解。",
      vi: "Một nhà đổi mới có tư duy tò mò và phân tích. Khám phá các lý thuyết và khái niệm, theo đuổi sự hiểu biết sâu sắc về kiến thức.",
      id: "Seorang inovator dengan pemikiran yang penasaran dan analitis. Menjelajahi teori dan konsep, mengejar pemahaman mendalam tentang pengetahuan."
    },
    traits: {
      ko: ["호기심", "분석적", "혁신적", "객관적", "독립적"],
      en: ["Curious", "Analytical", "Innovative", "Objective", "Independent"],
      ja: ["好奇心", "分析的", "革新的", "客観的", "独立的"],
      'zh-CN': ["好奇", "分析", "创新", "客观", "独立"],
      'zh-TW': ["好奇", "分析", "創新", "客觀", "獨立"],
      vi: ["Tò mò", "Phân tích", "Đổi mới", "Khách quan", "Độc lập"],
      id: ["Penasaran", "Analitis", "Inovatif", "Objektif", "Mandiri"]
    }
  },
  {
    type: "ENTJ",
    emoji: "👑",
    title: {
      ko: "통솔자",
      en: "Commander",
      ja: "統率者",
      'zh-CN': "指挥官",
      'zh-TW': "指揮官",
      vi: "Chỉ huy",
      id: "Komandan"
    },
    description: {
      ko: "대담하고 의지가 강한 지도자입니다. 목표 달성을 위해 효율적으로 조직을 이끌며, 도전적인 상황을 즐깁니다.",
      en: "A bold and strong-willed leader. Efficiently leads organizations to achieve goals and enjoys challenging situations.",
      ja: "大胆で意志の強いリーダーです。目標達成のために効率的に組織を導き、挑戦的な状況を楽しみます。",
      'zh-CN': "大胆而意志坚强的领导者。为了达成目标高效地领导组织，享受挑战性的情况。",
      'zh-TW': "大膽而意志堅強的領導者。為了達成目標高效地領導組織，享受挑戰性的情況。",
      vi: "Một nhà lãnh đạo táo bạo và có ý chí mạnh mẽ. Dẫn dắt tổ chức một cách hiệu quả để đạt được mục tiêu và thích thú với những tình huống thử thách.",
      id: "Seorang pemimpin yang berani dan berkeinginan kuat. Memimpin organisasi secara efisien untuk mencapai tujuan dan menikmati situasi yang menantang."
    },
    traits: {
      ko: ["리더십", "결단력", "목표지향", "효율적", "자신감"],
      en: ["Leadership", "Decisive", "Goal-oriented", "Efficient", "Confident"],
      ja: ["リーダーシップ", "決断力", "目標指向", "効率的", "自信"],
      'zh-CN': ["领导力", "果断", "目标导向", "高效", "自信"],
      'zh-TW': ["領導力", "果斷", "目標導向", "高效", "自信"],
      vi: ["Khả năng lãnh đạo", "Quyết đoán", "Hướng mục tiêu", "Hiệu quả", "Tự tin"],
      id: ["Kepemimpinan", "Tegas", "Berorientasi tujuan", "Efisien", "Percaya diri"]
    }
  },
  {
    type: "ENTP",
    emoji: "💡",
    title: {
      ko: "토론가",
      en: "Debater",
      ja: "討論家",
      'zh-CN': "辩论家",
      'zh-TW': "辯論家",
      vi: "Nhà tranh luận",
      id: "Debater"
    },
    description: {
      ko: "똑똑하고 호기심이 많은 사상가입니다. 새로운 아이디어를 탐구하며, 지적 토론과 창의적 문제 해결을 즐깁니다.",
      en: "A smart and curious thinker. Explores new ideas and enjoys intellectual debates and creative problem solving.",
      ja: "賢く好奇心旺盛な思想家です。新しいアイデアを探究し、知的討論と創造的問題解決を楽しみます。",
      'zh-CN': "聪明而好奇心强的思想家。探索新想法，享受智力辩论和创造性问题解决。",
      'zh-TW': "聰明而好奇心強的思想家。探索新想法，享受智力辯論和創造性問題解決。",
      vi: "Một nhà tư tưởng thông minh và tò mò. Khám phá những ý tưởng mới và thích thú với các cuộc tranh luận trí tuệ và giải quyết vấn đề sáng tạo.",
      id: "Seorang pemikir yang cerdas dan penasaran. Menjelajahi ide-ide baru dan menikmati debat intelektual serta pemecahan masalah kreatif."
    },
    traits: {
      ko: ["창의적", "호기심", "적응력", "에너지", "독창적"],
      en: ["Creative", "Curious", "Adaptable", "Energetic", "Original"],
      ja: ["創造的", "好奇心", "適応力", "エネルギッシュ", "独創的"],
      'zh-CN': ["创造性", "好奇", "适应", "精力充沛", "原创"],
      'zh-TW': ["創造性", "好奇", "適應", "精力充沛", "原創"],
      vi: ["Sáng tạo", "Tò mò", "Thích ứng", "Năng động", "Độc đáo"],
      id: ["Kreatif", "Penasaran", "Adaptif", "Bertenaga", "Orisinal"]
    }
  },
  {
    type: "INFJ",
    emoji: "🎭",
    title: {
      ko: "옹호자",
      en: "Advocate",
      ja: "擁護者",
      'zh-CN': "倡导者",
      'zh-TW': "倡導者",
      vi: "Người ủng hộ",
      id: "Pembela"
    },
    description: {
      ko: "창의적이고 영감을 주는 이상주의자입니다. 다른 사람들을 도우려는 강한 동기를 가지며, 깊은 의미와 목적을 추구합니다.",
      en: "A creative and inspiring idealist. Has a strong motivation to help others and pursues deep meaning and purpose.",
      ja: "創造的でインスピレーションを与える理想主義者です。他者を助けたい強い動機を持ち、深い意味と目的を追求します。",
      'zh-CN': "富有创造性和启发性的理想主义者。有强烈的帮助他人的动机，追求深刻的意义和目标。",
      'zh-TW': "富有創造性和啟發性的理想主義者。有強烈的幫助他人的動機，追求深刻的意義和目標。",
      vi: "Một người theo chủ nghĩa lý tưởng sáng tạo và truyền cảm hứng. Có động lực mạnh mẽ để giúp đỡ người khác và theo đuổi ý nghĩa sâu sắc và mục đích.",
      id: "Seorang idealis yang kreatif dan menginspirasi. Memiliki motivasi kuat untuk membantu orang lain dan mengejar makna mendalam dan tujuan."
    },
    traits: {
      ko: ["이상주의", "창의적", "결단력", "통찰력", "원칙적"],
      en: ["Idealistic", "Creative", "Decisive", "Insightful", "Principled"],
      ja: ["理想主義", "創造的", "決断力", "洞察力", "原則的"],
      'zh-CN': ["理想主义", "创造性", "果断", "洞察力", "有原则"],
      'zh-TW': ["理想主義", "創造性", "果斷", "洞察力", "有原則"],
      vi: ["Lý tưởng", "Sáng tạo", "Quyết đoán", "Sâu sắc", "Có nguyên tắc"],
      id: ["Idealistis", "Kreatif", "Tegas", "Berwawasan", "Berprinsip"]
    }
  },
  {
    type: "INFP",
    emoji: "🌸",
    title: {
      ko: "중재자",
      en: "Mediator",
      ja: "仲介者",
      'zh-CN': "调停者",
      'zh-TW': "調停者",
      vi: "Người hòa giải",
      id: "Mediator"
    },
    description: {
      ko: "시적이고 친절한 이상주의자입니다. 항상 성장하려 노력하며, 자신의 가치관과 일치하는 일을 찾습니다.",
      en: "A poetic and kind idealist. Always strives to grow and seeks work that aligns with personal values.",
      ja: "詩的で親切な理想主義者です。常に成長しようと努力し、自分の価値観と一致する仕事を求めます。",
      'zh-CN': "富有诗意和善良的理想主义者。总是努力成长，寻求与个人价值观一致的工作。",
      'zh-TW': "富有詩意和善良的理想主義者。總是努力成長，尋求與個人價值觀一致的工作。",
      vi: "Một người theo chủ nghĩa lý tưởng thi vị và tốt bụng. Luôn cố gắng phát triển và tìm kiếm công việc phù hợp với giá trị cá nhân.",
      id: "Seorang idealis yang puitis dan baik hati. Selalu berusaha untuk berkembang dan mencari pekerjaan yang sesuai dengan nilai-nilai pribadi."
    },
    traits: {
      ko: ["이상주의", "창의적", "열정적", "유연한", "충성심"],
      en: ["Idealistic", "Creative", "Passionate", "Flexible", "Loyal"],
      ja: ["理想主義", "創造的", "情熱的", "柔軟", "忠実"],
      'zh-CN': ["理想主义", "创造性", "热情", "灵活", "忠诚"],
      'zh-TW': ["理想主義", "創造性", "熱情", "靈活", "忠誠"],
      vi: ["Lý tưởng", "Sáng tạo", "Đam mê", "Linh hoạt", "Trung thành"],
      id: ["Idealistis", "Kreatif", "Bersemangat", "Fleksibel", "Loyal"]
    }
  },
  {
    type: "ENFJ",
    emoji: "🌟",
    title: {
      ko: "주인공",
      en: "Protagonist",
      ja: "主人公",
      'zh-CN': "主人公",
      'zh-TW': "主人公",
      vi: "Nhân vật chính",
      id: "Protagonis"
    },
    description: {
      ko: "카리스마 있고 영감을 주는 지도자입니다. 다른 사람들의 성장을 돕는 것을 즐기며, 긍정적인 변화를 만들어냅니다.",
      en: "A charismatic and inspiring leader. Enjoys helping others grow and creates positive change.",
      ja: "カリスマがありインスピレーションを与えるリーダーです。他者の成長を助けることを楽しみ、ポジティブな変化を生み出します。",
      'zh-CN': "富有魅力和启发性的领导者。喜欢帮助他人成长，创造积极的变化。",
      'zh-TW': "富有魅力和啟發性的領導者。喜歡幫助他人成長，創造積極的變化。",
      vi: "Một nhà lãnh đạo có sức hút và truyền cảm hứng. Thích giúp đỡ người khác phát triển và tạo ra những thay đổi tích cực.",
      id: "Seorang pemimpin yang karismatik dan menginspirasi. Menikmati membantu orang lain berkembang dan menciptakan perubahan positif."
    },
    traits: {
      ko: ["카리스마", "영감적", "이타적", "결단력", "열정적"],
      en: ["Charismatic", "Inspiring", "Altruistic", "Decisive", "Passionate"],
      ja: ["カリスマ", "インスピレーション", "利他的", "決断力", "情熱的"],
      'zh-CN': ["魅力", "启发", "利他", "果断", "热情"],
      'zh-TW': ["魅力", "啟發", "利他", "果斷", "熱情"],
      vi: ["Có sức hút", "Truyền cảm hứng", "Vị tha", "Quyết đoán", "Đam mê"],
      id: ["Karismatik", "Menginspirasi", "Altruistik", "Tegas", "Bersemangat"]
    }
  },
  {
    type: "ENFP",
    emoji: "🎪",
    title: {
      ko: "활동가",
      en: "Campaigner",
      ja: "活動家",
      'zh-CN': "竞选者",
      'zh-TW': "競選者",
      vi: "Nhà hoạt động",
      id: "Kampanye"
    },
    description: {
      ko: "열정적이고 창의적인 자유로운 영혼입니다. 새로운 가능성을 탐구하며, 사람들과의 깊은 연결을 중요하게 생각합니다.",
      en: "An enthusiastic and creative free spirit. Explores new possibilities and values deep connections with people.",
      ja: "情熱的で創造的な自由な魂です。新しい可能性を探究し、人々との深いつながりを大切にします。",
      'zh-CN': "热情而富有创造力的自由灵魂。探索新的可能性，重视与人们的深层联系。",
      'zh-TW': "熱情而富有創造力的自由靈魂。探索新的可能性，重視與人們的深層聯繫。",
      vi: "Một tinh thần tự do nhiệt tình và sáng tạo. Khám phá những khả năng mới và coi trọng kết nối sâu sắc với mọi người.",
      id: "Semangat bebas yang antusias dan kreatif. Menjelajahi kemungkinan baru dan menghargai koneksi mendalam dengan orang-orang."
    },
    traits: {
      ko: ["열정적", "창의적", "사교적", "직관적", "적응력"],
      en: ["Enthusiastic", "Creative", "Social", "Intuitive", "Adaptable"],
      ja: ["情熱的", "創造的", "社交的", "直感的", "適応力"],
      'zh-CN': ["热情", "创造性", "社交", "直觉", "适应"],
      'zh-TW': ["熱情", "創造性", "社交", "直覺", "適應"],
      vi: ["Nhiệt tình", "Sáng tạo", "Hòa đồng", "Trực giác", "Thích ứng"],
      id: ["Antusias", "Kreatif", "Sosial", "Intuitif", "Adaptif"]
    }
  },
  {
    type: "ISTJ",
    emoji: "📋",
    title: {
      ko: "물류관리자",
      en: "Logistician",
      ja: "物流管理者",
      'zh-CN': "物流师",
      'zh-TW': "物流師",
      vi: "Nhà hậu cần",
      id: "Logistik"
    },
    description: {
      ko: "실용적이고 사실적인 관리자입니다. 책임감이 강하며, 전통과 질서를 중시하는 신뢰할 수 있는 사람입니다.",
      en: "A practical and fact-focused administrator. Strong sense of responsibility and a reliable person who values tradition and order.",
      ja: "実用的で事実重視の管理者です。責任感が強く、伝統と秩序を重視する信頼できる人です。",
      'zh-CN': "实用而注重事实的管理者。责任感强，是重视传统和秩序的可信赖的人。",
      'zh-TW': "實用而注重事實的管理者。責任感強，是重視傳統和秩序的可信賴的人。",
      vi: "Một nhà quản lý thực tế và tập trung vào sự kiện. Có ý thức trách nhiệm mạnh mẽ và là người đáng tin cậy coi trọng truyền thống và trật tự.",
      id: "Seorang administrator yang praktis dan berfokus pada fakta. Memiliki rasa tanggung jawab yang kuat dan orang yang dapat dipercaya yang menghargai tradisi dan keteraturan."
    },
    traits: {
      ko: ["책임감", "체계적", "신뢰성", "실용적", "일관성"],
      en: ["Responsible", "Systematic", "Reliable", "Practical", "Consistent"],
      ja: ["責任感", "体系的", "信頼性", "実用的", "一貫性"],
      'zh-CN': ["负责任", "系统", "可靠", "实用", "一致"],
      'zh-TW': ["負責任", "系統", "可靠", "實用", "一致"],
      vi: ["Có trách nhiệm", "Có hệ thống", "Đáng tin cậy", "Thực tế", "Nhất quán"],
      id: ["Bertanggung jawab", "Sistematis", "Dapat diandalkan", "Praktis", "Konsisten"]
    }
  },
  {
    type: "ISFJ",
    emoji: "🛡️",
    title: {
      ko: "수호자",
      en: "Protector",
      ja: "守護者",
      'zh-CN': "守护者",
      'zh-TW': "守護者",
      vi: "Người bảo vệ",
      id: "Pelindung"
    },
    description: {
      ko: "따뜻하고 헌신적인 수호자입니다. 다른 사람들의 필요를 돌보며, 안정적이고 조화로운 환경을 만들려 노력합니다.",
      en: "A warm and dedicated protector. Cares for others' needs and strives to create a stable and harmonious environment.",
      ja: "温かく献身的な守護者です。他者のニーズを気にかけ、安定した調和のとれた環境を作ろうと努力します。",
      'zh-CN': "温暖而专注的守护者。关心他人的需求，努力创造稳定和谐的环境。",
      'zh-TW': "溫暖而專注的守護者。關心他人的需求，努力創造穩定和諧的環境。",
      vi: "Một người bảo vệ ấm áp và tận tụy. Quan tâm đến nhu cầu của người khác và cố gắng tạo ra một môi trường ổn định và hài hòa.",
      id: "Seorang pelindung yang hangat dan berdedikasi. Peduli terhadap kebutuhan orang lain dan berusaha menciptakan lingkungan yang stabil dan harmonis."
    },
    traits: {
      ko: ["헌신적", "따뜻함", "책임감", "협조적", "안정적"],
      en: ["Dedicated", "Warm", "Responsible", "Cooperative", "Stable"],
      ja: ["献身的", "温かい", "責任感", "協調的", "安定"],
      'zh-CN': ["专注", "温暖", "负责任", "合作", "稳定"],
      'zh-TW': ["專注", "溫暖", "負責任", "合作", "穩定"],
      vi: ["Tận tụy", "Ấm áp", "Có trách nhiệm", "Hợp tác", "Ổn định"],
      id: ["Berdedikasi", "Hangat", "Bertanggung jawab", "Kooperatif", "Stabil"]
    }
  },
  {
    type: "ESTJ",
    emoji: "👔",
    title: {
      ko: "경영자",
      en: "Executive",
      ja: "経営者",
      'zh-CN': "总经理",
      'zh-TW': "總經理",
      vi: "Giám đốc điều hành",
      id: "Eksekutif"
    },
    description: {
      ko: "훌륭한 관리자이자 전통적인 가치를 중시하는 지도자입니다. 질서와 효율성을 추구하며, 목표 달성을 위해 체계적으로 일합니다.",
      en: "An excellent administrator and leader who values traditional values. Pursues order and efficiency, works systematically to achieve goals.",
      ja: "優秀な管理者で伝統的価値を重視するリーダーです。秩序と効率を追求し、目標達成のために体系的に働きます。",
      'zh-CN': "优秀的管理者和重视传统价值的领导者。追求秩序和效率，系统地工作以实现目标。",
      'zh-TW': "優秀的管理者和重視傳統價值的領導者。追求秩序和效率，系統地工作以實現目標。",
      vi: "Một nhà quản lý xuất sắc và nhà lãnh đạo coi trọng các giá trị truyền thống. Theo đuổi trật tự và hiệu quả, làm việc một cách có hệ thống để đạt được mục tiêu.",
      id: "Seorang administrator yang sangat baik dan pemimpin yang menghargai nilai-nilai tradisional. Mengejar keteraturan dan efisiensi, bekerja secara sistematis untuk mencapai tujuan."
    },
    traits: {
      ko: ["리더십", "체계적", "책임감", "효율적", "결단력"],
      en: ["Leadership", "Systematic", "Responsible", "Efficient", "Decisive"],
      ja: ["リーダーシップ", "体系的", "責任感", "効率的", "決断力"],
      'zh-CN': ["领导力", "系统", "负责任", "高效", "果断"],
      'zh-TW': ["領導力", "系統", "負責任", "高效", "果斷"],
      vi: ["Khả năng lãnh đạo", "Có hệ thống", "Có trách nhiệm", "Hiệu quả", "Quyết đoán"],
      id: ["Kepemimpinan", "Sistematis", "Bertanggung jawab", "Efisien", "Tegas"]
    }
  },
  {
    type: "ESFJ",
    emoji: "🤝",
    title: {
      ko: "집정관",
      en: "Consul",
      ja: "領事",
      'zh-CN': "执政官",
      'zh-TW': "執政官",
      vi: "Lãnh sự",
      id: "Konsul"
    },
    description: {
      ko: "따뜻하고 사교적인 협력자입니다. 다른 사람들을 도우려는 강한 욕구를 가지며, 조화로운 관계를 만들어냅니다.",
      en: "A warm and sociable collaborator. Has a strong desire to help others and creates harmonious relationships.",
      ja: "温かく社交的な協力者です。他者を助けたい強い欲求を持ち、調和のとれた関係を作り出します。",
      'zh-CN': "温暖而善于交际的合作者。有强烈的帮助他人的愿望，创造和谐的关系。",
      'zh-TW': "溫暖而善於交際的合作者。有強烈的幫助他人的願望，創造和諧的關係。",
      vi: "Một người cộng tác ấm áp và hòa đồng. Có mong muốn mạnh mẽ giúp đỡ người khác và tạo ra những mối quan hệ hài hòa.",
      id: "Seorang kolaborator yang hangat dan bersosialisasi. Memiliki keinginan kuat untuk membantu orang lain dan menciptakan hubungan yang harmonis."
    },
    traits: {
      ko: ["사교적", "협조적", "따뜻함", "책임감", "조화로운"],
      en: ["Sociable", "Cooperative", "Warm", "Responsible", "Harmonious"],
      ja: ["社交的", "協調的", "温かい", "責任感", "調和"],
      'zh-CN': ["善于交际", "合作", "温暖", "负责任", "和谐"],
      'zh-TW': ["善於交際", "合作", "溫暖", "負責任", "和諧"],
      vi: ["Hòa đồng", "Hợp tác", "Ấm áp", "Có trách nhiệm", "Hài hòa"],
      id: ["Bersosialisasi", "Kooperatif", "Hangat", "Bertanggung jawab", "Harmonis"]
    }
  },
  {
    type: "ISTP",
    emoji: "🔧",
    title: {
      ko: "장인",
      en: "Virtuoso",
      ja: "職人",
      'zh-CN': "鉴赏家",
      'zh-TW': "鑑賞家",
      vi: "Nghệ nhân",
      id: "Virtuoso"
    },
    description: {
      ko: "대담하고 실용적인 실험가입니다. 손으로 만드는 것을 즐기며, 문제를 창의적으로 해결하는 데 탁월합니다.",
      en: "A bold and practical experimenter. Enjoys hands-on work and excels at creative problem solving.",
      ja: "大胆で実用的な実験者です。手作業を楽しみ、創造的問題解決に優れています。",
      'zh-CN': "大胆而实用的实验者。喜欢动手工作，擅长创造性问题解决。",
      'zh-TW': "大膽而實用的實驗者。喜歡動手工作，擅長創造性問題解決。",
      vi: "Một nhà thực nghiệm táo bạo và thực tế. Thích công việc thực hành và xuất sắc trong việc giải quyết vấn đề sáng tạo.",
      id: "Seorang eksperimenter yang berani dan praktis. Menikmati pekerjaan hands-on dan unggul dalam pemecahan masalah kreatif."
    },
    traits: {
      ko: ["실용적", "독립적", "적응력", "분석적", "침착한"],
      en: ["Practical", "Independent", "Adaptable", "Analytical", "Calm"],
      ja: ["実用的", "独立的", "適応力", "分析的", "冷静"],
      'zh-CN': ["实用", "独立", "适应", "分析", "冷静"],
      'zh-TW': ["實用", "獨立", "適應", "分析", "冷靜"],
      vi: ["Thực tế", "Độc lập", "Thích ứng", "Phân tích", "Bình tĩnh"],
      id: ["Praktis", "Mandiri", "Adaptif", "Analitis", "Tenang"]
    }
  },
  {
    type: "ISFP",
    emoji: "🎨",
    title: {
      ko: "모험가",
      en: "Adventurer",
      ja: "冒険家",
      'zh-CN': "探险家",
      'zh-TW': "探險家",
      vi: "Nhà thám hiểm",
      id: "Petualang"
    },
    description: {
      ko: "유연하고 매력적인 예술가입니다. 아름다움을 추구하며, 자신의 가치관에 따라 행동하는 자유로운 영혼입니다.",
      en: "A flexible and charming artist. Pursues beauty and is a free spirit who acts according to personal values.",
      ja: "柔軟で魅力的な芸術家です。美しさを追求し、自分の価値観に従って行動する自由な魂です。",
      'zh-CN': "灵活而有魅力的艺术家。追求美丽，是根据个人价值观行动的自由灵魂。",
      'zh-TW': "靈活而有魅力的藝術家。追求美麗，是根據個人價值觀行動的自由靈魂。",
      vi: "Một nghệ sĩ linh hoạt và quyến rũ. Theo đuổi vẻ đẹp và là một tâm hồn tự do hành động theo giá trị cá nhân.",
      id: "Seorang seniman yang fleksibel dan menawan. Mengejar keindahan dan merupakan semangat bebas yang bertindak sesuai dengan nilai-nilai pribadi."
    },
    traits: {
      ko: ["창의적", "유연한", "민감한", "독립적", "예술적"],
      en: ["Creative", "Flexible", "Sensitive", "Independent", "Artistic"],
      ja: ["創造的", "柔軟", "敏感", "独立的", "芸術的"],
      'zh-CN': ["创造性", "灵活", "敏感", "独立", "艺术"],
      'zh-TW': ["創造性", "靈活", "敏感", "獨立", "藝術"],
      vi: ["Sáng tạo", "Linh hoạt", "Nhạy cảm", "Độc lập", "Nghệ thuật"],
      id: ["Kreatif", "Fleksibel", "Sensitif", "Mandiri", "Artistik"]
    }
  },
  {
    type: "ESTP",
    emoji: "🎯",
    title: {
      ko: "사업가",
      en: "Entrepreneur",
      ja: "事業家",
      'zh-CN': "企业家",
      'zh-TW': "企業家",
      vi: "Doanh nhân",
      id: "Wirausaha"
    },
    description: {
      ko: "똑똑하고 에너지 넘치는 인식가입니다. 행동 지향적이며, 위험을 감수하고 새로운 도전을 즐깁니다.",
      en: "A smart and energetic perceiver. Action-oriented and enjoys taking risks and new challenges.",
      ja: "賢くエネルギッシュな認知者です。行動指向で、リスクを取ることと新しい挑戦を楽しみます。",
      'zh-CN': "聪明而充满活力的感知者。以行动为导向，喜欢冒险和新的挑战。",
      'zh-TW': "聰明而充滿活力的感知者。以行動為導向，喜歡冒險和新的挑戰。",
      vi: "Một người nhận thức thông minh và năng động. Hướng hành động và thích chấp nhận rủi ro và thử thách mới.",
      id: "Seorang pengamat yang cerdas dan energik. Berorientasi pada tindakan dan menikmati mengambil risiko serta tantangan baru."
    },
    traits: {
      ko: ["에너지", "실용적", "사교적", "적응력", "자신감"],
      en: ["Energetic", "Practical", "Sociable", "Adaptable", "Confident"],
      ja: ["エネルギッシュ", "実用的", "社交的", "適応力", "自信"],
      'zh-CN': ["精力充沛", "实用", "善于交际", "适应", "自信"],
      'zh-TW': ["精力充沛", "實用", "善於交際", "適應", "自信"],
      vi: ["Năng động", "Thực tế", "Hòa đồng", "Thích ứng", "Tự tin"],
      id: ["Bertenaga", "Praktis", "Bersosialisasi", "Adaptif", "Percaya diri"]
    }
  },
  {
    type: "ESFP",
    emoji: "🎪",
    title: {
      ko: "연예인",
      en: "Entertainer",
      ja: "芸能人",
      'zh-CN': "表演者",
      'zh-TW': "表演者",
      vi: "Nghệ sĩ",
      id: "Penghibur"
    },
    description: {
      ko: "자유로운 영혼의 연예인입니다. 즉흥적이고 열정적이며, 사람들과 함께하는 시간을 즐깁니다.",
      en: "A free-spirited entertainer. Spontaneous and passionate, enjoys time with people.",
      ja: "自由な魂の芸能人です。即興的で情熱的、人々と過ごす時間を楽しみます。",
      'zh-CN': "自由灵魂的表演者。自发而热情，享受与人们在一起的时光。",
      'zh-TW': "自由靈魂的表演者。自發而熱情，享受與人們在一起的時光。",
      vi: "Một nghệ sĩ có tinh thần tự do. Tự phát và đam mê, thích thú với thời gian bên mọi người.",
      id: "Seorang penghibur berjiwa bebas. Spontan dan bersemangat, menikmati waktu bersama orang-orang."
    },
    traits: {
      ko: ["열정적", "사교적", "즉흥적", "따뜻함", "활동적"],
      en: ["Passionate", "Sociable", "Spontaneous", "Warm", "Active"],
      ja: ["情熱的", "社交的", "即興的", "温かい", "活動的"],
      'zh-CN': ["热情", "善于交际", "自发", "温暖", "活跃"],
      'zh-TW': ["熱情", "善於交際", "自發", "溫暖", "活躍"],
      vi: ["Đam mê", "Hòa đồng", "Tự phát", "Ấm áp", "Hoạt động"],
      id: ["Bersemangat", "Bersosialisasi", "Spontan", "Hangat", "Aktif"]
    }
  }
];

// 테스트 데이터 맵 (슬러그로 빠른 검색)
export const testDataMap: Record<string, { questions: any[]; results: any[] }> = {
  'mbti-light': {
    questions: mbtiQuestions,
    results: mbtiResults
  },
  'stress-reaction-test': {
    questions: stressQuestions,
    results: stressResults
  },
  'dating-style-test': {
    questions: datingQuestions,
    results: datingResults
  },
  'catch-lover-signals': {
    questions: signalQuestions,
    results: signalResults
  },
  'attachment-style-test': {
    questions: attachmentQuestions,
    results: attachmentResults
  },
  'friend-test': {
    questions: friendQuestions,
    results: friendResults
  },
  'conflict-response-test': {
    questions: conflictQuestions,
    results: conflictResults
  }
  ,
  'love-flavor-test': {
    questions: loveFlavorQuestions,
    results: loveFlavorResults
  },
  'ideal-type-test': {
    questions: idealTypeQuestions,
    results: idealTypeResults
  },
  'crush-success-test': {
    questions: crushQuestions,
    results: crushResults
  }
};

// 테스트 데이터 가져오기 함수
export function getTestData(slug: string): { questions: any[]; results: any[] } | null {
  return testDataMap[slug] || null;
}

// 질문 섞기 함수 (전체 10개 완전 랜덤)
export function getShuffledQuestions(slug: string) {
  const testData = testDataMap[slug];
  if (!testData) return null;

  const shuffled = [...testData.questions];

  // Fisher-Yates 알고리즘 (전체 10개 완전 랜덤)
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return {
    questions: shuffled,
    results: testData.results,
  };
}
