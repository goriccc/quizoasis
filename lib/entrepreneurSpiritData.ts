// 창업가 기질 테스트 데이터

export interface EntrepreneurSpiritQuestion {
  id: number;
  question: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  options: Array<{
    text: {
      ko: string;
      en: string;
      ja: string;
      'zh-CN': string;
      'zh-TW': string;
      vi: string;
      id: string;
    };
    scores: {
      Type1: number;
      Type2: number;
      Type3: number;
      Type4: number;
      Type5: number;
      Type6: number;
    };
  }>;
}

export interface EntrepreneurSpiritResult {
  type: string;
  emoji: string;
  title: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  longDescription: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  pros: Array<{
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  }>;
  cons: Array<{
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  }>;
  recommendedFields: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  advice: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
  successRate: string;
}

// 결과 계산 함수
export function calculateEntrepreneurSpiritResult(answers: any[]): string {
  const scores = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0,
  };

  // 각 답변의 점수를 합산
  answers.forEach((answer) => {
    Object.keys(answer).forEach((type) => {
      scores[type as keyof typeof scores] += answer[type];
    });
  });

  // 최고 점수 찾기
  let maxScore = 0;
  let resultType = 'Type1';

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 동점일 경우 Q10-Q12 우선 반영 (마지막 3개 질문)
  if (answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const tieBreakerScores = {
      Type1: 0,
      Type2: 0,
      Type3: 0,
      Type4: 0,
      Type5: 0,
      Type6: 0,
    };

    lastThreeAnswers.forEach((answer) => {
      Object.keys(answer).forEach((type) => {
        tieBreakerScores[type as keyof typeof tieBreakerScores] += answer[type];
      });
    });

    let maxTieBreakerScore = 0;
    Object.entries(tieBreakerScores).forEach(([type, score]) => {
      if (score > maxTieBreakerScore) {
        maxTieBreakerScore = score;
        resultType = type;
      }
    });
  }

  return resultType;
}

// 질문 데이터 (1-4번)
export const entrepreneurSpiritQuestions: EntrepreneurSpiritQuestion[] = [
  {
    id: 1,
    question: {
      ko: "새로운 프로젝트 제안을 받았을 때 첫 반응은?",
      en: "What is your first reaction when you receive a new project proposal?",
      ja: "新しいプロジェクトの提案を受けた時の最初の反応は？",
      "zh-CN": "收到新项目提案时的第一反应是什么？",
      "zh-TW": "收到新專案提案時的第一反應是什麼？",
      vi: "Phản ứng đầu tiên của bạn khi nhận được đề xuất dự án mới là gì?",
      id: "Apa reaksi pertama Anda ketika menerima proposal proyek baru?"
    },
    options: [
      {
        text: {
          ko: "\"해보겠습니다!\" 즉시 도전",
          en: "\"I'll do it!\" Challenge immediately",
          ja: "「やってみます！」すぐに挑戦",
          "zh-CN": "\"我来做！\"立即挑战",
          "zh-TW": "\"我來做！\"立即挑戰",
          vi: "\"Tôi sẽ làm!\" Thử thách ngay lập tức",
          id: "\"Saya akan melakukannya!\" Tantangan langsung"
        },
        scores: { Type1: 3, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "\"어떻게 하면 더 좋을까?\" 개선 방법 고민",
          en: "\"How can I make it better?\" Think about improvement methods",
          ja: "「どうすればもっと良くなるか？」改善方法を考える",
          "zh-CN": "\"怎样才能做得更好？\"思考改进方法",
          "zh-TW": "\"怎樣才能做得更好？\"思考改進方法",
          vi: "\"Làm thế nào để tốt hơn?\" Suy nghĩ về phương pháp cải thiện",
          id: "\"Bagaimana cara membuatnya lebih baik?\" Memikirkan metode perbaikan"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "\"위험 요소는?\" 리스크 먼저 분석",
          en: "\"What are the risks?\" Analyze risks first",
          ja: "「リスクは何か？」リスクを先に分析",
          "zh-CN": "\"风险是什么？\"先分析风险",
          "zh-TW": "\"風險是什麼？\"先分析風險",
          vi: "\"Rủi ro là gì?\" Phân tích rủi ro trước",
          id: "\"Apa risikonya?\" Analisis risiko terlebih dahulu"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "\"팀원들 의견은?\" 함께 논의하고 싶음",
          en: "\"What do team members think?\" Want to discuss together",
          ja: "「チームメンバーの意見は？」一緒に議論したい",
          "zh-CN": "\"团队成员的意见是什么？\"想一起讨论",
          "zh-TW": "\"團隊成員的意見是什麼？\"想一起討論",
          vi: "\"Ý kiến của các thành viên nhóm là gì?\" Muốn thảo luận cùng nhau",
          id: "\"Apa pendapat anggota tim?\" Ingin berdiskusi bersama"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "실패에 대한 당신의 생각은?",
      en: "What do you think about failure?",
      ja: "失敗についてあなたの考えは？",
      "zh-CN": "你对失败的看法是什么？",
      "zh-TW": "你對失敗的看法是什麼？",
      vi: "Bạn nghĩ gì về thất bại?",
      id: "Apa yang Anda pikirkan tentang kegagalan?"
    },
    options: [
      {
        text: {
          ko: "실패는 성공의 어머니, 배움의 기회",
          en: "Failure is the mother of success, an opportunity to learn",
          ja: "失敗は成功の母、学びの機会",
          "zh-CN": "失败是成功之母，学习的机会",
          "zh-TW": "失敗是成功之母，學習的機會",
          vi: "Thất bại là mẹ của thành công, cơ hội học hỏi",
          id: "Kegagalan adalah ibu dari kesuksesan, kesempatan untuk belajar"
        },
        scores: { Type1: 3, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "실패를 줄이기 위해 철저히 준비",
          en: "Prepare thoroughly to reduce failure",
          ja: "失敗を減らすために徹底的に準備",
          "zh-CN": "彻底准备以减少失败",
          "zh-TW": "徹底準備以減少失敗",
          vi: "Chuẩn bị kỹ lưỡng để giảm thất bại",
          id: "Persiapkan dengan matang untuk mengurangi kegagalan"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "실패는 최대한 피해야 할 것",
          en: "Failure is something to be avoided as much as possible",
          ja: "失敗はできるだけ避けるべきもの",
          "zh-CN": "失败是应该尽可能避免的",
          "zh-TW": "失敗是應該盡可能避免的",
          vi: "Thất bại là điều nên tránh càng nhiều càng tốt",
          id: "Kegagalan adalah sesuatu yang harus dihindari sebanyak mungkin"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 2, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "함께라면 극복 가능",
          en: "If we work together, we can overcome it",
          ja: "一緒なら乗り越えられる",
          "zh-CN": "如果一起努力就能克服",
          "zh-TW": "如果一起努力就能克服",
          vi: "Nếu cùng nhau thì có thể vượt qua",
          id: "Jika bersama-sama, kita bisa mengatasinya"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "아이디어가 떠올랐을 때 당신은?",
      en: "When you have an idea, what do you do?",
      ja: "アイデアが浮かんだ時、あなたは？",
      "zh-CN": "当你有想法时，你会怎么做？",
      "zh-TW": "當你有想法時，你會怎麼做？",
      vi: "Khi bạn có ý tưởng, bạn sẽ làm gì?",
      id: "Ketika Anda memiliki ide, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "바로 실행에 옮김",
          en: "Put it into action immediately",
          ja: "すぐに実行に移す",
          "zh-CN": "立即付诸行动",
          "zh-TW": "立即付諸行動",
          vi: "Ngay lập tức thực hiện",
          id: "Langsung diimplementasikan"
        },
        scores: { Type1: 3, Type2: 0, Type3: 3, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "더 나은 방법을 계속 고민",
          en: "Keep thinking about better ways",
          ja: "より良い方法を考え続ける",
          "zh-CN": "继续思考更好的方法",
          "zh-TW": "繼續思考更好的方法",
          vi: "Tiếp tục suy nghĩ về cách tốt hơn",
          id: "Terus memikirkan cara yang lebih baik"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "성공 가능성을 먼저 계산",
          en: "Calculate the possibility of success first",
          ja: "成功の可能性を先に計算",
          "zh-CN": "先计算成功的可能性",
          "zh-TW": "先計算成功的可能性",
          vi: "Tính toán khả năng thành công trước",
          id: "Hitung kemungkinan kesuksesan terlebih dahulu"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "주변 사람들에게 의견 구함",
          en: "Ask for opinions from people around you",
          ja: "周りの人に意見を求める",
          "zh-CN": "征求周围人的意见",
          "zh-TW": "徵求周圍人的意見",
          vi: "Xin ý kiến từ những người xung quanh",
          id: "Minta pendapat dari orang-orang di sekitar"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "업무 중 예상치 못한 문제가 발생하면?",
      en: "When an unexpected problem occurs during work?",
      ja: "業務中に予期しない問題が発生したら？",
      "zh-CN": "工作中出现意外问题时？",
      "zh-TW": "工作中出現意外問題時？",
      vi: "Khi có vấn đề bất ngờ xảy ra trong công việc?",
      id: "Ketika masalah tak terduga terjadi selama bekerja?"
    },
    options: [
      {
        text: {
          ko: "\"기회다!\" 새로운 방법 시도",
          en: "\"It's an opportunity!\" Try a new method",
          ja: "「チャンスだ！」新しい方法を試す",
          "zh-CN": "\"这是机会！\"尝试新方法",
          "zh-TW": "\"這是機會！\"嘗試新方法",
          vi: "\"Đây là cơ hội!\" Thử phương pháp mới",
          id: "\"Ini kesempatan!\" Coba metode baru"
        },
        scores: { Type1: 3, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "창의적 해결책 찾기",
          en: "Find creative solutions",
          ja: "創造的な解決策を見つける",
          "zh-CN": "寻找创造性解决方案",
          "zh-TW": "尋找創造性解決方案",
          vi: "Tìm giải pháp sáng tạo",
          id: "Mencari solusi kreatif"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "매뉴얼대로 차근차근 해결",
          en: "Solve step by step according to the manual",
          ja: "マニュアル通りに着実に解決",
          "zh-CN": "按照手册逐步解决",
          "zh-TW": "按照手冊逐步解決",
          vi: "Giải quyết từng bước theo hướng dẫn",
          id: "Selesaikan langkah demi langkah sesuai manual"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "팀원들과 협력해서 해결",
          en: "Solve by cooperating with team members",
          ja: "チームメンバーと協力して解決",
          "zh-CN": "与团队成员合作解决",
          "zh-TW": "與團隊成員合作解決",
          vi: "Giải quyết bằng cách hợp tác với các thành viên nhóm",
          id: "Selesaikan dengan bekerja sama dengan anggota tim"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "일을 시작할 때 가장 중요하게 생각하는 것은?",
      en: "What do you think is most important when starting work?",
      ja: "仕事を始める時、最も重要だと思うことは？",
      "zh-CN": "开始工作时你认为最重要的是什么？",
      "zh-TW": "開始工作時你認為最重要的是什麼？",
      vi: "Bạn nghĩ điều gì quan trọng nhất khi bắt đầu công việc?",
      id: "Apa yang Anda anggap paling penting saat memulai pekerjaan?"
    },
    options: [
      {
        text: {
          ko: "빠른 실행과 결과",
          en: "Quick execution and results",
          ja: "迅速な実行と結果",
          "zh-CN": "快速执行和结果",
          "zh-TW": "快速執行和結果",
          vi: "Thực hiện nhanh và kết quả",
          id: "Ekseskusi cepat dan hasil"
        },
        scores: { Type1: 3, Type2: 0, Type3: 3, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "독창성과 차별화",
          en: "Originality and differentiation",
          ja: "独創性と差別化",
          "zh-CN": "独创性和差异化",
          "zh-TW": "獨創性和差異化",
          vi: "Tính độc đáo và khác biệt",
          id: "Keaslian dan diferensiasi"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "안정성과 확실성",
          en: "Stability and certainty",
          ja: "安定性と確実性",
          "zh-CN": "稳定性和确定性",
          "zh-TW": "穩定性和確定性",
          vi: "Tính ổn định và chắc chắn",
          id: "Stabilitas dan kepastian"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "팀워크와 협력",
          en: "Teamwork and cooperation",
          ja: "チームワークと協力",
          "zh-CN": "团队合作和协作",
          "zh-TW": "團隊合作和協作",
          vi: "Làm việc nhóm và hợp tác",
          id: "Kerja tim dan kerja sama"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "돈을 벌 수 있는 기회가 있지만 위험이 있다면?",
      en: "If there's an opportunity to make money but with risks?",
      ja: "お金を稼ぐ機会があるがリスクもあるなら？",
      "zh-CN": "如果有赚钱的机会但有风险？",
      "zh-TW": "如果有賺錢的機會但有風險？",
      vi: "Nếu có cơ hội kiếm tiền nhưng có rủi ro?",
      id: "Jika ada kesempatan menghasilkan uang tetapi ada risiko?"
    },
    options: [
      {
        text: {
          ko: "과감하게 도전",
          en: "Challenge boldly",
          ja: "大胆に挑戦",
          "zh-CN": "大胆挑战",
          "zh-TW": "大膽挑戰",
          vi: "Ssỹ thách dũng cảm",
          id: "Tantang dengan berani"
        },
        scores: { Type1: 3, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "기존과 다른 방식 고민",
          en: "Think about ways different from the existing ones",
          ja: "既存とは異なる方法を考える",
          "zh-CN": "思考与现有方式不同的方法",
          "zh-TW": "思考與現有方式不同的方法",
          vi: "Suy nghĩ về cách khác với cách hiện tại",
          id: "Memikirkan cara yang berbeda dari yang ada"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "위험 대비 수익 계산 후 결정",
          en: "Calculate profit vs risk and then decide",
          ja: "リスク対収益を計算してから決定",
          "zh-CN": "计算风险与收益后决定",
          "zh-TW": "計算風險與收益後決定",
          vi: "Tính toán lợi nhuận so với rủi ro rồi quyết định",
          id: "Hitung profit vs risiko lalu putuskan"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "신뢰할 수 있는 사람과 함께라면 도전",
          en: "Challenge if I'm with someone I can trust",
          ja: "信頼できる人と一緒なら挑戦",
          "zh-CN": "如果与可信的人一起就挑战",
          "zh-TW": "如果與可信的人一起就挑戰",
          vi: "Nếu cùng với người đáng tin cậy thì thách thức",
          id: "Tantang jika bersama orang yang bisa dipercaya"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "당신의 업무 스타일은?",
      en: "What is your work style?",
      ja: "あなたの仕事のスタイルは？",
      "zh-CN": "你的工作风格是什么？",
      "zh-TW": "你的工作風格是什麼？",
      vi: "Phong cách làm việc của bạn là gì?",
      id: "Apa gaya kerja Anda?"
    },
    options: [
      {
        text: {
          ko: "빠르게 결정하고 즉시 행동",
          en: "Make quick decisions and act immediately",
          ja: "素早く決断してすぐに行動",
          "zh-CN": "快速决定并立即行动",
          "zh-TW": "快速決定並立即行動",
          vi: "Quyết định nhanh và hành động ngay lập tức",
          id: "Putuskan dengan cepat dan bertindak langsung"
        },
        scores: { Type1: 3, Type2: 0, Type3: 3, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "기존 방식을 개선하고 혁신",
          en: "Improve existing methods and innovate",
          ja: "既存の方法を改善し革新",
          "zh-CN": "改进现有方法并创新",
          "zh-TW": "改進現有方法amp;創新",
          vi: "Cải thiện phương pháp hiện có và đổi mới",
          id: "Perbaiki metode yang ada dan berinovasi"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "계획을 세우고 단계적으로 진행",
          en: "Make plans and proceed step by step",
          ja: "計画を立てて段階的に進行",
          "zh-CN": "制定计划并逐步进行",
          "zh-TW": "制定計劃並逐步進行",
          vi: "Lập kế hoạch và tiến hành từng bước",
          id: "Buat rencana dan lakukan langkah demi langkah"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "팀원들과 소통하며 협력",
          en: "Communicate and cooperate with team members",
          ja: "チームメンバーとコミュニケーションを取り協力",
          "zh-CN": "与团队成员沟通并合作",
          "zh-TW": "與團隊成員溝通並合作",
          vi: "Giao tiếp và hợp tác với các thành viên nhóm",
          id: "Berkomunikasi dan bekerja sama dengan anggota tim"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "비판이나 반대 의견을 들었을 때?",
      en: "When you hear criticism or opposing opinions?",
      ja: "批判や反対意見を聞いた時？",
      "zh-CN": "当你听到批评或反对意见时？",
      "zh-TW": "當你聽到批評或反對意見時？",
      vi: "Khi bạn nghe thấy lời chỉ trích hoặc ý kiến phản đối?",
      id: "Ketika Anda mendengar kritik atau pendapat yang menentang?"
    },
    options: [
      {
        text: {
          ko: "내 방식대로 밀고 나감",
          en: "Push forward with my way",
          ja: "自分の方法で押し進める",
          "zh-CN": "按照我的方式推进",
          "zh-TW": "按照我的方式推進",
          vi: "Tiếp tục theo cách của tôi",
          id: "Terus maju dengan cara saya"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "더 나은 아이디어로 발전",
          en: "Develop into better ideas",
          ja: "より良いアイデアに発展",
          "zh-CN": "发展成更好的想法",
          "zh-TW": "發展成更好的想法",
          vi: "Phát triển thành ý tưởng tốt hơn",
          id: "Kembangkan menjadi ide yang lebih baik"
        },
        scores: { Type1: 0, Type2: 3, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "신중하게 재검토",
          en: "Carefully review again",
          ja: "慎重に再検討",
          "zh-CN": "谨慎地重新审查",
          "zh-TW": "謹慎地重新審查",
          vi: "Xem xét lại một cách cẩn thận",
          id: "Tinjau kembali dengan hati-hati"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "다른 의견도 수용하려 노력",
          en: "Try to accept other opinions too",
          ja: "他の意見も受け入れようと努力",
          "zh-CN": "努力接受其他意见",
          "zh-TW": "努力接受其他意見",
          vi: "Cố gắng chấp nhận ý kiến khác",
          id: "Berusaha menerima pendapat lain juga"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "스트레스를 받는 상황은?",
      en: "What situations stress you out?",
      ja: "ストレスを感じる状況は？",
      "zh-CN": "什么情况会让你感到压力？",
      "zh-TW": "什麼情況會讓你感到壓力？",
      vi: "Tình huống nào khiến bạn căng thẳng?",
      id: "Situasi apa yang membuat Anda stres?"
    },
    options: [
      {
        text: {
          ko: "아무것도 하지 않고 기다릴 때",
          en: "When waiting without doing anything",
          ja: "何もせずに待っている時",
          "zh-CN": "什么都不做等待的时候",
          "zh-TW": "什麼都不做等待的時候",
          vi: "Khi chờ đợi mà không làm gì",
          id: "Ketika menunggu tanpa melakukan apa-apa"
        },
        scores: { Type1: 3, Type2: 0, Type3: 3, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "창의성을 발휘할 수 없을 때",
          en: "When I can't express my creativity",
          ja: "創造性を発揮できない時",
          "zh-CN": "当无法发挥创造力时",
          "zh-TW": "當無法發揮創造力時",
          vi: "Khi không thể phát huy sự sáng tạo",
          id: "Ketika tidak bisa mengekspresikan kreativitas"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "불확실하고 예측 불가능할 때",
          en: "When it's uncertain and unpredictable",
          ja: "不確実で予測不可能な時",
          "zh-CN": "当不确定且不可预测时",
          "zh-TW": "當不確定且不可預測時",
          vi: "Khi không chắc chắn và không thể dự đoán",
          id: "Ketika tidak pasti dan tidak dapat diprediksi"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "혼자서 모든 걸 해야 할 때",
          en: "When I have to do everything alone",
          ja: "一人ですべてをしなければならない時",
          "zh-CN": "当必须独自完成一切时",
          "zh-TW": "當必須獨自完成一切時",
          vi: "Khi phải làm tất cả một mình",
          id: "Ketika harus melakukan segalanya sendirian"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "성공의 기준은?",
      en: "What is your standard of success?",
      ja: "成功の基準は？",
      "zh-CN": "成功的标准是什么？",
      "zh-TW": "成功的標準是什麼？",
      vi: "Tiêu chuẩn thành công là gì?",
      id: "Apa standar kesuksesan Anda?"
    },
    options: [
      {
        text: {
          ko: "빠른 성장과 확장",
          en: "Rapid growth and expansion",
          ja: "迅速な成長と拡張",
          "zh-CN": "快速增长和扩张",
          "zh-TW": "快速增長和擴張",
          vi: "Tăng trưởng nhanh và mở rộng",
          id: "Pertumbuhan cepat dan ekspansi"
        },
        scores: { Type1: 3, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "업계에 새로운 기준 제시",
          en: "Set new standards in the industry",
          ja: "業界に新しい基準を提示",
          "zh-CN": "为行业设定新标准",
          "zh-TW": "為行業設定新標準",
          vi: "Đặt ra tiêu chuẩn mới cho ngành",
          id: "Menetapkan standar baru di industri"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "안정적이고 지속 가능한 수익",
          en: "Stable and sustainable profits",
          ja: "安定した持続可能な収益",
          "zh-CN": "稳定和可持续的利润",
          "zh-TW": "穩定和可持續的利潤",
          vi: "Lợi nhuận ổn định và bền vững",
          id: "Keuntungan yang stabil dan berkelanjutan"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "함께 성장하고 행복한 조직",
          en: "An organization that grows together and is happy",
          ja: "共に成長し幸せな組織",
          "zh-CN": "一起成长和快乐的组织",
          "zh-TW": "一起成長和快樂的組織",
          vi: "Tổ chức cùng phát triển và hạnh phúc",
          id: "Organisasi yang tumbuh bersama dan bahagia"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "새로운 기술이나 트렌드에 대해?",
      en: "What about new technologies or trends?",
      ja: "新しい技術やトレンドについて？",
      "zh-CN": "对于新技术或趋势？",
      "zh-TW": "對於新技術或趨勢？",
      vi: "Về công nghệ mới hoặc xu hướng?",
      id: "Bagaimana dengan teknologi atau tren baru?"
    },
    options: [
      {
        text: {
          ko: "가장 먼저 도입해봄",
          en: "Try to introduce it first",
          ja: "一番最初に導入してみる",
          "zh-CN": "最先尝试引入",
          "zh-TW": "最先嘗試引入",
          vi: "Thử áp dụng đầu tiên",
          id: "Coba perkenalkan pertama kali"
        },
        scores: { Type1: 3, Type2: 0, Type3: 2, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "우리만의 방식으로 활용",
          en: "Use it in our own way",
          ja: "自分たちだけの方法で活用",
          "zh-CN": "以我们自己的方式利用",
          "zh-TW": "以我們自己的方式利用",
          vi: "Sử dụng theo cách riêng của chúng ta",
          id: "Gunakan dengan cara kita sendiri"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "검증된 후에 도입",
          en: "Introduce after verification",
          ja: "検証後に導入",
          "zh-CN": "验证后引入",
          "zh-TW": "驗證後引入",
          vi: "Áp dụng sau khi được xác minh",
          id: "Perkenalkan setelah verifikasi"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 2 }
      },
      {
        text: {
          ko: "팀원들과 학습하고 적용",
          en: "Learn and apply with team members",
          ja: "チームメンバーと学習して適用",
          "zh-CN": "与团队成员学习并应用",
          "zh-TW": "與團隊成員學習並應用",
          vi: "Học và áp dụng cùng các thành viên nhóm",
          id: "Belajar dan terapkan dengan anggota tim"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "10년 후 이상적인 모습은?",
      en: "What is your ideal self in 10 years?",
      ja: "10年後の理想的な姿は？",
      "zh-CN": "10年后理想的样子是什么？",
      "zh-TW": "10年後理想的樣子是什麼？",
      vi: "Hình mẫu lý tưởng sau 10 năm là gì?",
      id: "Bagaimana diri ideal Anda dalam 10 tahun?"
    },
    options: [
      {
        text: {
          ko: "여러 사업을 운영하는 연쇄 창업가",
          en: "A serial entrepreneur running multiple businesses",
          ja: "複数の事業を運営する連続起業家",
          "zh-CN": "经营多个企业的连续创业者",
          "zh-TW": "經營多個企業的連續創業者",
          vi: "Doanh nhân liên tiếp điều hành nhiều doanh nghiệp",
          id: "Entrepreneur serial yang menjalankan banyak bisnis"
        },
        scores: { Type1: 3, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "업계를 바꾼 혁신가",
          en: "An innovator who changed the industry",
          ja: "業界を変えた革新者",
          "zh-CN": "改变行业的创新者",
          "zh-TW": "改變行業的創新者",
          vi: "Nhà đổi mới đã thay đổi ngành công nghiệp",
          id: "Inovator yang mengubah industri"
        },
        scores: { Type1: 0, Type2: 3, Type3: 0, Type4: 0, Type5: 0, Type6: 0 }
      },
      {
        text: {
          ko: "안정적인 전문가",
          en: "A stable expert",
          ja: "安定した専門家",
          "zh-CN": "稳定的专家",
          "zh-TW": "穩定的專家",
          vi: "Chuyên gia ổn định",
          id: "Ahli yang stabil"
        },
        scores: { Type1: 0, Type2: 0, Type3: 0, Type4: 3, Type5: 0, Type6: 3 }
      },
      {
        text: {
          ko: "훌륭한 팀을 이끄는 리더",
          en: "A leader leading a great team",
          ja: "素晴らしいチームを率いるリーダー",
          "zh-CN": "领导优秀团队的领导者",
          "zh-TW": "領導優秀團隊的領導者",
          vi: "Người lãnh đạo dẫn dắt một đội ngũ tuyệt vời",
          id: "Pemimpin yang memimpin tim hebat"
        },
        scores: { Type1: 0, Type2: 0, Type3: 2, Type4: 0, Type5: 3, Type6: 0 }
      }
    ]
  }
];

// 결과 데이터 (Type1-Type3)
export const entrepreneurSpiritResults: EntrepreneurSpiritResult[] = [
  {
    type: "Type1",
    emoji: "🏆",
    title: {
      ko: "타고난 CEO형",
      en: "Born CEO Type",
      ja: "生まれながらのCEO型",
      "zh-CN": "天生的CEO型",
      "zh-TW": "天生的CEO型",
      vi: "Loại CEO bẩm sinh",
      id: "Tipe CEO Alamiah"
    },
    description: {
      ko: "빠른 실행력과 강력한 추진력의 소유자",
      en: "Owner of quick execution and powerful drive",
      ja: "迅速な実行力と強力な推進力の所有者",
      "zh-CN": "快速执行力和强大推动力的拥有者",
      "zh-TW": "快速執行力和強大推動力的擁有者",
      vi: "Chủ sở hữu khả năng thực hiện nhanh và động lực mạnh mẽ",
      id: "Pemilik eksekusi cepat dan dorongan yang kuat"
    },
    longDescription: {
      ko: "당신은 타고난 리더이자 실행가입니다! 위험을 두려워하지 않고 과감하게 도전하며, 빠른 의사결정으로 기회를 놓치지 않습니다. 강한 추진력으로 아이디어를 현실로 만드는 능력이 뛰어납니다. 자신감과 결단력이 최고의 무기입니다.",
      en: "You are a born leader and executor! You are not afraid of risks and boldly take on challenges, making quick decisions without missing opportunities. You have excellent ability to turn ideas into reality with strong drive. Confidence and determination are your greatest weapons.",
      ja: "あなたは生まれながらのリーダーであり実行者です！リスクを恐れず大胆に挑戦し、機会を逃さない迅速な意思決定を行います。強い推進力でアイデアを現実に変える能力に優れています。自信と決断力があなたの最高の武器です。",
      "zh-CN": "你是天生的领导者和执行者！你不惧怕风险，勇敢地接受挑战，快速决策而不错过机会。你拥有出色的能力，能用强大的推动力将想法变为现实。自信和决断力是你最大的武器。",
      "zh-TW": "你是天生的領導者和執行者！你不懼怕風險，勇敢地接受挑戰，快速決策而不錯過機會。你擁有出色的能力，能用強大的推動力將想法變為現實。自信和決斷力是你最大的武器。",
      vi: "Bạn là một nhà lãnh đạo và người thực hiện bẩm sinh! Bạn không sợ rủi ro và dũng cảm đối mặt với thách thức, đưa ra quyết định nhanh chóng mà không bỏ lỡ cơ hội. Bạn có khả năng tuyệt vời để biến ý tưởng thành hiện thực với động lực mạnh mẽ. Sự tự tin và quyết tâm là vũ khí tốt nhất của bạn.",
      id: "Anda adalah pemimpin dan eksekutor yang lahir! Anda tidak takut mengambil risiko dan berani menghadapi tantangan, membuat keputusan cepat tanpa melewatkan peluang. Anda memiliki kemampuan luar biasa untuk mengubah ide menjadi kenyataan dengan dorongan yang kuat. Kepercayaan diri dan tekad adalah senjata terbaik Anda."
    },
    pros: [
      {
        ko: "결단력",
        en: "Decision-making ability",
        ja: "決断力",
        "zh-CN": "决断力",
        "zh-TW": "決斷力",
        vi: "Khả năng quyết định",
        id: "Kemampuan pengambilan keputusan"
      },
      {
        ko: "추진력",
        en: "Drive",
        ja: "推進力",
        "zh-CN": "推动力",
        "zh-TW": "推動力",
        vi: "Động lực",
        id: "Dorongan"
      },
      {
        ko: "리더십",
        en: "Leadership",
        ja: "リーダーシップ",
        "zh-CN": "领导力",
        "zh-TW": "領導力",
        vi: "Khả năng lãnh đạo",
        id: "Kepemimpinan"
      },
      {
        ko: "실행력",
        en: "Execution ability",
        ja: "実行力",
        "zh-CN": "执行力",
        "zh-TW": "執行力",
        vi: "Khả năng thực hiện",
        id: "Kemampuan eksekusi"
      }
    ],
    cons: [
      {
        ko: "독단적 결정",
        en: "Arbitrary decisions",
        ja: "独断的な決定",
        "zh-CN": "独断决定",
        "zh-TW": "獨斷決定",
        vi: "Quyết định độc đoán",
        id: "Keputusan sewenang-wenang"
      },
      {
        ko: "신중함 부족",
        en: "Lack of caution",
        ja: "慎重さの欠如",
        "zh-CN": "缺乏谨慎",
        "zh-TW": "缺乏謹慎",
        vi: "Thiếu thận trọng",
        id: "Kurang kehati-hatian"
      },
      {
        ko: "팀원 의견 경시 가능",
        en: "May disregard team opinions",
        ja: "チームメンバーの意見を軽視する可能性",
        "zh-CN": "可能轻视团队成员意见",
        "zh-TW": "可能輕視團隊成員意見",
        vi: "Có thể coi thường ý kiến của thành viên nhóm",
        id: "Mungkin mengabaikan pendapat tim"
      }
    ],
    recommendedFields: {
      ko: "스타트업 창업, 연쇄 창업, 투자, M&A",
      en: "Startup entrepreneurship, serial entrepreneurship, investment, M&A",
      ja: "スタートアップ起業、連続起業、投資、M&A",
      "zh-CN": "初创企业，连续创业，投资，并购",
      "zh-TW": "初創企業，連續創業，投資，併購",
      vi: "Khởi nghiệp startup, khởi nghiệp liên tiếp, đầu tư, M&A",
      id: "Kewirausahaan startup, kewirausahaan serial, investasi, M&A"
    },
    advice: {
      ko: "때로는 속도보다 방향이 중요합니다. 주변 의견에도 귀 기울여보세요!",
      en: "Sometimes direction is more important than speed. Listen to the opinions of those around you!",
      ja: "時にはスピードよりも方向が重要です。周りの意見にも耳を傾けてみてください！",
      "zh-CN": "有时方向比速度更重要。请倾听周围人的意见！",
      "zh-TW": "有時方向比速度更重要。請傾聽周圍人的意見！",
      vi: "Đôi khi hướng đi quan trọng hơn tốc độ. Hãy lắng nghe ý kiến của những người xung quanh!",
      id: "Terkadang arah lebih penting daripada kecepatan. Dengarkan jalan pendapat orang-orang di sekitar Anda!"
    },
    successRate: "⭐⭐⭐⭐⭐ - 95%"
  },
  {
    type: "Type2",
    emoji: "💡",
    title: {
      ko: "혁신적 아이디어형",
      en: "Innovative Ideas Type",
      ja: "革新的アイデア型",
      "zh-CN": "创新想法型",
      "zh-TW": "創新想法型",
      vi: "Loại ý tưởng đổi mới",
      id: "Tipe Ide Inovatif"
    },
    description: {
      ko: "세상을 바꿀 창의성을 가진 미래 지향적 혁신가",
      en: "Future-oriented innovator with creativity to change the world",
      ja: "世界を変える創造性を持つ未来志向の革新者",
      "zh-CN": "拥有改变世界的创造力的未来导向创新者",
      "zh-TW": "擁有改變世界的創造力的未來導向創新者",
      vi: "Nhà đổi mới hướng tương lai với sự sáng tạo để thay đổi thế giới",
      id: "Inovator berorientasi masa depan dengan kreativitas untuk mengubah dunia"
    },
    longDescription: {
      ko: "기존의 틀을 깨는 창의적 사고의 소유자입니다. 남들이 생각하지 못한 아이디어로 새로운 가치를 창출합니다. 혁신과 차별화를 추구하며 업계의 판도를 바꿀 잠재력이 있습니다. 창의성이 당신의 가장 큰 자산입니다.",
      en: "You are a creative thinker who breaks existing frameworks. You create new value with ideas that others don't think of. You pursue innovation and differentiation, and have the potential to change the industry landscape. Creativity is your greatest asset.",
      ja: "あなたは既存の枠を破る創造的思考の持ち主です。他の人が考えないアイデアで新しい価値を創造します。革新と差別化を追求し、業界のパワーバランスを変える可能性を持っています。創造性があなたの最大の資産です。",
      "zh-CN": "你是打破现有框架的创造性思考者。你用别人想不到的想法创造新价值。你追求创新和差异化，拥有改变行业格局的潜力。创造力是你最大的资产。",
      "zh-TW": "你是打破現有框架的創造性思考者。你用別人想不到的想法創造新價值。你追求創新和差異化，擁有改變行業格局的潛力。創造力是你最大的資產。",
      vi: "Bạn là người sở hữu tư duy sáng tạo phá vỡ các khuôn khổ hiện có. Bạn tạo ra giá trị mới với những ý tưởng mà người khác không nghĩ đến. Bạn theo đuổi đổi mới và khác biệt hóa, và có tiềm năng thay đổi bối cảnh ngành. Sự sáng tạo là tài sản lớn nhất của bạn.",
      id: "Anda adalah pemilik pemikiran kreatif yang meruntuhkan kerangka yang ada. Anda menciptakan nilai baru dengan ide-ide yang tidak dipikirkan orang lain. Anda mengejar inovasi dan diferensiasi, dan memiliki potensi untuk mengubah lanskap industri. Kreativitas adalah aset terbesar Anda."
    },
    pros: [
      {
        ko: "창의성",
        en: "Creativity",
        ja: "創造性",
        "zh-CN": "创造力",
        "zh-TW": "創造力",
        vi: "Sự sáng tạo",
        id: "Kreativitas"
      },
      {
        ko: "혁신성",
        en: "Innovation",
        ja: "革新性",
        "zh-CN": "创新性",
        "zh-TW": "創新性",
        vi: "Tính đổi mới",
        id: "Inovasi"
      },
      {
        ko: "차별화",
        en: "Differentiation",
        ja: "差別化",
        "zh-CN": "差异化",
        "zh-TW": "差異化",
        vi: "Sự khác biệt",
        id: "Diferensiasi"
      },
      {
        ko: "통찰력",
        en: "Insight",
        ja: "洞察力",
        "zh-CN": "洞察力",
        "zh-TW": "洞察力",
        vi: "Sự sáng suốt",
        id: "Wawasan"
      }
    ],
    cons: [
      {
        ko: "실행력 부족",
        en: "Lack of execution ability",
        ja: "実行力の欠如",
        "zh-CN": "缺乏执行力",
        "zh-TW": "缺乏執行力",
        vi: "Thiếu khả năng thực hiện",
        id: "Kurang kemampuan eksekusi"
      },
      {
        ko: "완벽주의",
        en: "Perfectionism",
        ja: "完璧主義",
        "zh-CN": "完美主义",
        "zh-TW": "完美主義",
        vi: "Chủ nghĩa hoàn hảo",
        id: "Perfeksionisme"
      },
      {
        ko: "아이디어만 많고 실행 적음",
        en: "Many ideas but little execution",
        ja: "アイデアは多いが実行は少ない",
        "zh-CN": "想法多但执行少",
        "zh-TW": "想法多但執行少",
        vi: "Nhiều ý tưởng nhưng ít thực hiện",
        id: "Banyak ide tetapi sedikit eksekusi"
      }
    ],
    recommendedFields: {
      ko: "테크 스타트업, 제품 개발, 서비스 혁신, 디자인",
      en: "Tech startups, product development, service innovation, design",
      ja: "テックスタートアップ、製品開発、サービス革新、デザイン",
      "zh-CN": "科技初创企业，产品开发，服务创新，设计",
      "zh-TW": "科技初創企業，產品開發，服務創新，設計",
      vi: "Khởi nghiệp công nghệ, phát triển sản phẩm, đổi mới dịch vụ, thiết kế",
      id: "Startup teknologi, pengembangan produk, inovasi layanan, desain"
    },
    advice: {
      ko: "완벽한 아이디어보다 실행된 좋은 아이디어가 낫습니다. 일단 시작해보세요!",
      en: "A good executed idea is better than a perfect idea. Just start!",
      ja: "完璧なアイデアよりも実行された良いアイデアの方が良いです。まず始めてみてください！",
      "zh-CN": "执行的好想法比完美的想法更好。先开始吧！",
      "zh-TW": "執行的好想法比完美的想法更好。先開始吧！",
      vi: "Một ý tưởng tốt được thực hiện tốt hơn một ý tưởng hoàn hảo. Hãy bắt đầu thôi!",
      id: "Ide bagus yang dieksekusi lebih baik daripada ide sempurna. Mulai saja!"
    },
    successRate: "⭐⭐⭐⭐ - 80%"
  },
  {
    type: "Type3",
    emoji: "⚡",
    title: {
      ko: "실행력 강한 실천형",
      en: "Strong Execution Practice Type",
      ja: "実行力の強い実践型",
      "zh-CN": "执行力强的实践型",
      "zh-TW": "執行力強的實踐型",
      vi: "Loại thực hành có khả năng thực hiện mạnh",
      id: "Tipe Praktik Eksekusi Kuat"
    },
    description: {
      ko: "말보다 행동이 빠른 추진력의 달인",
      en: "Master of drive with actions faster than words",
      ja: "言葉よりも行動が速い推進力の達人",
      "zh-CN": "行动比言语更快的推动力大师",
      "zh-TW": "行動比言語更快的推動力大師",
      vi: "Bậc thầy về động lực với hành động nhanh hơn lời nói",
      id: "Master dorongan dengan aksi lebih cepat daripada kata-kata"
    },
    longDescription: {
      ko: "생각이 떠오르면 즉시 행동으로 옮기는 실행가입니다. 계획보다는 실행을 중시하며 빠르게 시행착오를 겪으며 배웁니다. 높은 에너지와 끈기로 목표를 달성합니다. 실패해도 다시 일어서는 회복력이 뛰어납니다.",
      en: "You are a strong execution practice type entrepreneur. You are an executor who immediately puts thoughts into action when they come to mind. You value execution over planning and learn quickly through trial and error. You achieve your goals with high energy and perseverance, and you have excellent resilience to get back up even after failure. Because of these characteristics, you have a high possibility of becoming an entrepreneur who can achieve rapid growth and innovation.",
      ja: "あなたは実行力の強い実践型起業家です。考えが浮かんだらすぐに行動に移す実行者で、計画よりも実行を重視し、迅速に試行錯誤を経験しながら学びます。高いエネルギーと粘り強さで目標を達成し、失敗しても再び立ち上がる回復力に優れています。これらの特性により、急速な成長と革新を成し遂げることができる起業家になる可能性が高いです。",
      "zh-CN": "你是执行力强的实践型企业家。你是想到就立即付诸行动的执行者，重视执行胜过计划，通过快速试错来学习。你用高能量和毅力实现目标，即使失败也有出色的恢复力重新站起来。由于这些特性，你很有可能成为能够实现快速成长和创新的企业家。",
      "zh-TW": "你是執行力強的實踐型企業家。你是想到就立即付諸行動的執行者，重視執行勝過計劃，通過快速試錯來學習。你用高能量和毅力實現目標，即使失敗也有出色的恢復力重新站起來。由於這些特性，你很有可能成為能夠實現快速成長和創新的企業家。",
      vi: "Bạn là một doanh nhân loại thực hành có khả năng thực hiện mạnh. Bạn là người thực hiện ngay lập tức đưa suy nghĩ thành hành động khi chúng xuất hiện trong tâm trí. Bạn coi trọng việc thực hiện hơn lập kế hoạch và học hỏi nhanh chóng thông qua thử và sai. Bạn đạt được mục tiêu với năng lượng cao và sự kiên trì, và bạn có khả năng phục hồi tuyệt vời để đứng dậy ngay cả sau khi thất bại. Vì những đặc điểm này, bạn có khả năng cao trở thành một doanh nhân có thể đạt được tăng trưởng nhanh và đổi mới.",
      id: "Anda adalah seorang pengusaha tipe praktik eksekusi yang kuat. Anda adalah eksekutor yang segera mengubah pikiran menjadi aksi ketika muncul di benak. Anda menghargai eksekusi daripada perencanaan dan belajar dengan cepat melalui trial and error. Anda mencapai tujuan dengan energi tinggi dan ketekunan, dan Anda memiliki ketahanan yang luar biasa untuk bangkit kembali bahkan setelah kegagalan. Karena karakteristik ini, Anda memiliki kemungkinan tinggi menjadi pengusaha yang dapat mencapai pertumbuhan cepat dan inovasi."
    },
    pros: [
      {
        ko: "실행력",
        en: "Execution ability",
        ja: "実行力",
        "zh-CN": "执行力",
        "zh-TW": "執行力",
        vi: "Khả năng thực hiện",
        id: "Kemampuan eksekusi"
      },
      {
        ko: "추진력",
        en: "Drive",
        ja: "推進力",
        "zh-CN": "推动力",
        "zh-TW": "推動力",
        vi: "Động lực",
        id: "Dorongan"
      },
      {
        ko: "끈기",
        en: "Perseverance",
        ja: "粘り強さ",
        "zh-CN": "毅力",
        "zh-TW": "毅力",
        vi: "Sự kiên trì",
        id: "Ketekunan"
      },
      {
        ko: "회복탄력성",
        en: "Resilience",
        ja: "回復力",
        "zh-CN": "恢复力",
        "zh-TW": "恢復力",
        vi: "Khả năng phục hồi",
        id: "Ketahanan"
      }
    ],
    cons: [
      {
        ko: "계획 부족",
        en: "Lack of planning",
        ja: "計画不足",
        "zh-CN": "缺乏计划",
        "zh-TW": "缺乏計劃",
        vi: "Thiếu kế hoạch",
        id: "Kurang perencanaan"
      },
      {
        ko: "충동적",
        en: "Impulsive",
        ja: "衝動的",
        "zh-CN": "冲动",
        "zh-TW": "衝動",
        vi: "Bốc đồng",
        id: "Impulsif"
      },
      {
        ko: "리스크 관리 약함",
        en: "Weak risk management",
        ja: "リスク管理が弱い",
        "zh-CN": "风险管理薄弱",
        "zh-TW": "風險管理薄弱",
        vi: "Quản lý rủi ro yếu",
        id: "Manajemen risiko lemah"
      }
    ],
    recommendedFields: {
      ko: "프랜차이즈, 온라인 사업, 유통, 서비스업",
      en: "Franchise, online business, distribution, service industry",
      ja: "フランチャイズ、オンラインビジネス、流通、サービス業",
      "zh-CN": "特许经营，在线业务，分销，服务业",
      "zh-TW": "特許經營，在線業務，分銷，服務業",
      vi: "Nhượng quyền, kinh doanh trực tuyến, phân phối, ngành dịch vụ",
      id: "Waralaba, bisnis online, distribusi, industri jasa"
    },
    advice: {
      ko: "가끔은 멈춰서 방향을 점검해보세요. 속도만큼 방향도 중요합니다!",
      en: "Sometimes stop and check your direction. Direction is as important as speed!",
      ja: "時々立ち止まって方向を確認してください。スピードと同じくらい方向も重要です！",
      "zh-CN": "有时停下来检查方向。方向与速度同样重要！",
      "zh-TW": "有時停下來檢查方向。方向與速度同樣重要！",
      vi: "Đôi khi hãy dừng lại và kiểm tra hướng đi. Hướng đi cũng quan trọng như tốc độ!",
      id: "Terkadang berhenti dan periksa arah Anda. Arah sama pentingnya dengan kecepatan!"
    },
    successRate: "⭐⭐⭐⭐ - 75%"
  },
  {
    type: "Type4",
    emoji: "🛡️",
    title: {
      ko: "안정 추구형",
      en: "Stability Seeking Type",
      ja: "安定追求型",
      "zh-CN": "稳定追求型",
      "zh-TW": "穩定追求型",
      vi: "Loại tìm kiếm sự ổn định",
      id: "Tipe Pencari Stabilitas"
    },
    description: {
      ko: "신중한 계획가, 리스크 관리의 전문가",
      en: "Cautious planner and risk management expert",
      ja: "慎重な計画者でリスク管理の専門家",
      "zh-CN": "谨慎的计划者，风险管理专家",
      "zh-TW": "謹慎的計劃者，風險管理專家",
      vi: "Người lập kế hoạch thận trọng và chuyên gia quản lý rủi ro",
      id: "Perencana hati-hati dan ahli manajemen risiko"
    },
    longDescription: {
      ko: "철저한 준비와 리스크 관리로 안정적인 성공을 추구합니다. 실패 확률을 최소화하며 단계적으로 성장합니다. 급하지 않지만 꾸준하게 목표를 달성합니다. 신중함이 때로는 기회를 놓칠 수 있지만 실패 확률도 낮습니다.",
      en: "You pursue stable success through thorough preparation and risk management. You minimize the probability of failure and grow step by step. You achieve your goals steadily without rushing. While your caution may sometimes cause you to miss opportunities, it also reduces the probability of failure.",
      ja: "徹底した準備とリスク管理で安定した成功を追求します。失敗の確率を最小限に抑えながら段階的に成長します。急がずに着実に目標を達成します。慎重さが時には機会を逃すこともありますが、失敗の確率も低く抑えられます。",
      "zh-CN": "通过彻底准备和风险管理追求稳定成功。最小化失败概率并逐步成长。不急不躁但持续实现目标。谨慎有时会让你错过机会，但失败概率也较低。",
      "zh-TW": "通過徹底準備和風險管理追求穩定成功。最小化失敗概率並逐步成長。不急不躁但持續實現目標。謹慎有時會讓你錯過機會，但失敗概率也較低。",
      vi: "Bạn theo đuổi thành công ổn định thông qua chuẩn bị kỹ lưỡng và quản lý rủi ro. Bạn giảm thiểu xác suất thất bại và phát triển từng bước. Bạn đạt được mục tiêu một cách ổn định mà không vội vàng. Mặc dù sự thận trọng của bạn đôi khi có thể khiến bạn bỏ lỡ cơ hội, nhưng xác suất thất bại cũng thấp.",
      id: "Anda mengejar kesuksesan yang stabil melalui persiapan yang matang dan manajemen risiko. Anda meminimalkan probabilitas kegagalan dan tumbuh selangkah demi selangkah. Anda mencapai tujuan dengan mantap tanpa terburu-buru. Meskipun kehati-hatian Anda terkadang dapat menyebabkan Anda melewatkan peluang, tetapi probabilitas kegagalan juga rendah."
    },
    pros: [
      {
        ko: "신중함",
        en: "Caution",
        ja: "慎重さ",
        "zh-CN": "谨慎",
        "zh-TW": "謹慎",
        vi: "Sự thận trọng",
        id: "Kehati-hatian"
      },
      {
        ko: "계획성",
        en: "Planning ability",
        ja: "計画性",
        "zh-CN": "计划性",
        "zh-TW": "計劃性",
        vi: "Khả năng lập kế hoạch",
        id: "Kemampuan perencanaan"
      },
      {
        ko: "리스크 관리",
        en: "Risk management",
        ja: "リスク管理",
        "zh-CN": "风险管理",
        "zh-TW": "風險管理",
        vi: "Quản lý rủi ro",
        id: "Manajemen risiko"
      },
      {
        ko: "안정성",
        en: "Stability",
        ja: "安定性",
        "zh-CN": "稳定性",
        "zh-TW": "穩定性",
        vi: "Tính ổn định",
        id: "Stabilitas"
      }
    ],
    cons: [
      {
        ko: "기회 상실",
        en: "Opportunity loss",
        ja: "機会損失",
        "zh-CN": "机会损失",
        "zh-TW": "機會損失",
        vi: "Mất cơ hội",
        id: "Kehilangan peluang"
      },
      {
        ko: "느린 실행",
        en: "Slow execution",
        ja: "実行の遅さ",
        "zh-CN": "执行缓慢",
        "zh-TW": "執行緩慢",
        vi: "Thực hiện chậm",
        id: "Eksekusi lambat"
      },
      {
        ko: "과도한 걱정",
        en: "Excessive worry",
        ja: "過度な心配",
        "zh-CN": "过度担心",
        "zh-TW": "過度擔心",
        vi: "Lo lắng quá mức",
        id: "Kekhawatiran berlebihan"
      }
    ],
    recommendedFields: {
      ko: "컨설팅, 전문 서비스, 교육, 안정적 프랜차이즈",
      en: "Consulting, professional services, education, stable franchises",
      ja: "コンサルティング、専門サービス、教育、安定したフランチャイズ",
      "zh-CN": "咨询，专业服务，教育，稳定特许经营",
      "zh-TW": "諮詢，專業服務，教育，穩定特許經營",
      vi: "Tư vấn, dịch vụ chuyên nghiệp, giáo dục, nhượng quyền ổn định",
      id: "Konsultasi, layanan profesional, pendidikan, waralaba stabil"
    },
    advice: {
      ko: "완벽한 준비는 없습니다. 70% 준비되면 시작하세요!",
      en: "There is no perfect preparation. Start when you're 70% ready!",
      ja: "完璧な準備はありません。70%準備できたら始めてください！",
      "zh-CN": "没有完美的准备。准备好70%就开始吧！",
      "zh-TW": "沒有完美的準備。準備好70%就開始吧！",
      vi: "Không có sự chuẩn bị hoàn hảo. Hãy bắt đầu khi bạn đã sẵn sàng 70%!",
      id: "Tidak ada persiapan yang sempurna. Mulai ketika Anda 70% siap!"
    },
    successRate: "⭐⭐⭐ - 60%"
  },
  {
    type: "Type5",
    emoji: "🤝",
    title: {
      ko: "협력형 팀플레이어",
      en: "Cooperative Team Player Type",
      ja: "協力型チームプレイヤー",
      "zh-CN": "合作型团队玩家",
      "zh-TW": "合作型團隊玩家",
      vi: "Loại người chơi nhóm hợp tác",
      id: "Tipe Pemain Tim Kooperatif"
    },
    description: {
      ko: "함께 성장하는 조화로운 리더",
      en: "Harmonious leader who grows together",
      ja: "共に成長する調和のとれたリーダー",
      "zh-CN": "一起成长的和谐领导者",
      "zh-TW": "一起成長的和諧領導者",
      vi: "Người lãnh đạo hài hòa cùng phát triển",
      id: "Pemimpin harmonis yang tumbuh bersama"
    },
    longDescription: {
      ko: "혼자보다 함께할 때 더 큰 힘을 발휘합니다. 팀원들의 의견을 존중하고 협력을 통해 목표를 달성합니다. 소통 능력이 뛰어나고 조직 문화를 중시합니다. 사람이 곧 자산이라는 걸 아는 현명한 리더입니다.",
      en: "You exert greater power when working together rather than alone. You respect team members' opinions and achieve goals through cooperation. You have excellent communication skills and value organizational culture. You are a wise leader who knows that people are assets.",
      ja: "一人でいるよりも一緒にいる時により大きな力を発揮します。チームメンバーの意見を尊重し、協力を通じて目標を達成します。コミュニケーション能力に優れ、組織文化を重視します。人が資産であることを知る賢いリーダーです。",
      "zh-CN": "你与团队合作时比独自工作时发挥更大的力量。你尊重团队成员的意见，通过合作实现目标。你拥有出色的沟通能力，重视组织文化。你是知道人就是资产的明智领导者。",
      "zh-TW": "你與團隊合作時比獨自工作時發揮更大的力量。你尊重團隊成員的意見，通過合作實現目標。你擁有出色的溝通能力，重視組織文化。你是知道人就是資產的明智領導者。",
      vi: "Bạn phát huy sức mạnh lớn hơn khi làm việc cùng nhau thay vì một mình. Bạn tôn trọng ý kiến của các thành viên nhóm và đạt được mục tiêu thông qua hợp tác. Bạn có kỹ năng giao tiếp xuất sắc và coi trọng văn hóa tổ chức. Bạn là một nhà lãnh đạo khôn ngoan biết rằng con người là tài sản.",
      id: "Anda mengerahkan kekuatan yang lebih besar ketika bekerja sama daripada sendirian. Anda menghormati pendapat anggota tim dan mencapai tujuan melalui kerjasama. Anda memiliki keterampilan komunikasi yang luar biasa dan menghargai budaya organisasi. Anda adalah pemimpin bijak yang tahu bahwa orang adalah aset."
    },
    pros: [
      {
        ko: "소통력",
        en: "Communication skills",
        ja: "コミュニケーション力",
        "zh-CN": "沟通能力",
        "zh-TW": "溝通能力",
        vi: "Kỹ năng giao tiếp",
        id: "Keterampilan komunikasi"
      },
      {
        ko: "협력",
        en: "Cooperation",
        ja: "協力",
        "zh-CN": "合作",
        "zh-TW": "合作",
        vi: "Hợp tác",
        id: "Kerjasama"
      },
      {
        ko: "팀워크",
        en: "Teamwork",
        ja: "チームワーク",
        "zh-CN": "团队合作",
        "zh-TW": "團隊合作",
        vi: "Làm việc nhóm",
        id: "Kerja tim"
      },
      {
        ko: "조직 문화",
        en: "Organizational culture",
        ja: "組織文化",
        "zh-CN": "组织文化",
        "zh-TW": "組織文化",
        vi: "Văn hóa tổ chức",
        id: "Budaya organisasi"
      }
    ],
    cons: [
      {
        ko: "결단력 부족",
        en: "Lack of decision-making ability",
        ja: "決断力の欠如",
        "zh-CN": "缺乏决断力",
        "zh-TW": "缺乏決斷力",
        vi: "Thiếu khả năng quyết định",
        id: "Kurang kemampuan pengambilan keputusan"
      },
      {
        ko: "우유부단",
        en: "Indecisive",
        ja: "優柔不断",
        "zh-CN": "优柔寡断",
        "zh-TW": "優柔寡斷",
        vi: "Do dự",
        id: "Ragu-ragu"
      },
      {
        ko: "독립성 약함",
        en: "Weak independence",
        ja: "独立性が弱い",
        "zh-CN": "独立性弱",
        "zh-TW": "獨立性弱",
        vi: "Tính độc lập yếu",
        id: "Kemandirian lemah"
      }
    ],
    recommendedFields: {
      ko: "협동조합, 소셜벤처, 팀 기반 사업",
      en: "Cooperatives, social ventures, team-based business",
      ja: "協同組合、ソーシャルベンチャー、チームベースの事業",
      "zh-CN": "合作社，社会企业，基于团队的业务",
      "zh-TW": "合作社，社會企業，基於團隊的業務",
      vi: "Hợp tác xã, doanh nghiệp xã hội, kinh doanh dựa trên nhóm",
      id: "Koperasi, usaha sosial, bisnis berbasis tim"
    },
    advice: {
      ko: "리더는 때로 외로운 결정을 해야 합니다. 주도성을 키워보세요!",
      en: "Leaders sometimes have to make lonely decisions. Develop your initiative!",
      ja: "リーダーは時々孤独な決断をしなければなりません。主導性を育ててください！",
      "zh-CN": "领导者有时必须做出孤独的决定。培养你的主动性！",
      "zh-TW": "領導者有時必須做出孤獨的決定。培養你的主動性！",
      vi: "Nhà lãnh đạo đôi khi phải đưa ra quyết định cô đơn. Hãy phát triển tính chủ động của bạn!",
      id: "Pemimpin terkadang harus membuat keputusan yang kesepian. Kembangkan inisiatif Anda!"
    },
    successRate: "⭐⭐⭐ - 65%"
  },
  {
    type: "Type6",
    emoji: "🌱",
    title: {
      ko: "숨은 잠재력형",
      en: "Hidden Potential Type",
      ja: "隠された潜在力型",
      "zh-CN": "隐藏潜力型",
      "zh-TW": "隱藏潛力型",
      vi: "Loại tiềm năng ẩn",
      id: "Tipe Potensi Tersembunyi"
    },
    description: {
      ko: "때를 기다리는 미래의 창업가",
      en: "Future entrepreneur waiting for the right time",
      ja: "時を待つ未来の起業家",
      "zh-CN": "等待时机的未来企业家",
      "zh-TW": "等待時機的未來企業家",
      vi: "Doanh nhân tương lai đang chờ đợi thời cơ",
      id: "Pengusaha masa depan yang menunggu waktu yang tepat"
    },
    longDescription: {
      ko: "아직 발현되지 않은 큰 잠재력을 가지고 있습니다. 다양한 경험을 쌓으며 자신만의 스타일을 찾아가는 중입니다. 조급하지 않아도 됩니다. 충분한 준비와 경험이 쌓이면 폭발적으로 성장할 가능성이 있습니다.",
      en: "You have great potential that has not yet been revealed. You are accumulating various experiences and finding your own style. You don't need to be impatient. When you accumulate sufficient preparation and experience, you have the potential to grow explosively.",
      ja: "まだ発現されていない大きな潜在力を持っています。様々な経験を積みながら自分だけのスタイルを見つけている最中です。焦る必要はありません。十分な準備と経験が積まれれば爆発的に成長する可能性があります。",
      "zh-CN": "你拥有尚未显现的巨大潜力。你正在积累各种经验，寻找自己的风格。你不必着急。当你积累了足够的准备和经验时，你就有爆发性增长的潜力。",
      "zh-TW": "你擁有尚未顯現的巨大潛力。你正在積累各種經驗，尋找自己的風格。你不必著急。當你積累了足夠的準備和經驗時，你就有爆發性增長的潛力。",
      vi: "Bạn có tiềm năng lớn chưa được bộc lộ. Bạn đang tích lũy nhiều kinh nghiệm và tìm kiếm phong cách riêng của mình. Bạn không cần phải vội vàng. Khi bạn tích lũy đủ sự chuẩn bị và kinh nghiệm, bạn có tiềm năng phát triển bùng nổ.",
      id: "Anda memiliki potensi besar yang belum terungkap. Anda mengumpulkan berbagai pengalaman dan menemukan gaya Anda sendiri. Anda tidak perlu terburu-buru. Ketika Anda mengumpulkan persiapan dan pengalaman yang cukup, Anda memiliki potensi untuk tumbuh secara eksplosif."
    },
    pros: [
      {
        ko: "학습 능력",
        en: "Learning ability",
        ja: "学習能力",
        "zh-CN": "学习能力",
        "zh-TW": "學習能力",
        vi: "Khả năng học tập",
        id: "Kemampuan belajar"
      },
      {
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        "zh-CN": "灵活性",
        "zh-TW": "靈活性",
        vi: "Tính linh hoạt",
        id: "Fleksibilitas"
      },
      {
        ko: "성장 가능성",
        en: "Growth potential",
        ja: "成長可能性",
        "zh-CN": "成长潜力",
        "zh-TW": "成長潛力",
        vi: "Tiềm năng phát triển",
        id: "Potensi pertumbuhan"
      },
      {
        ko: "균형감",
        en: "Sense of balance",
        ja: "バランス感覚",
        "zh-CN": "平衡感",
        "zh-TW": "平衡感",
        vi: "Cảm giác cân bằng",
        id: "Rasa keseimbangan"
      }
    ],
    cons: [
      {
        ko: "명확한 방향 부재",
        en: "Lack of clear direction",
        ja: "明確な方向の欠如",
        "zh-CN": "缺乏明确方向",
        "zh-TW": "缺乏明確方向",
        vi: "Thiếu hướng rõ ràng",
        id: "Kurang arah yang jelas"
      },
      {
        ko: "우유부단",
        en: "Indecisive",
        ja: "優柔不断",
        "zh-CN": "优柔寡断",
        "zh-TW": "優柔寡斷",
        vi: "Do dự",
        id: "Ragu-ragu"
      },
      {
        ko: "실행 지연",
        en: "Execution delay",
        ja: "実行の遅延饤",
        "zh-CN": "执行延迟",
        "zh-TW": "執行延遲",
        vi: "Trì hoãn thực hiện",
        id: "Penundaan eksekusi"
      }
    ],
    recommendedFields: {
      ko: "경험 축적 후 본인에게 맞는 분야",
      en: "Fields that suit you after accumulating experience",
      ja: "経験を積んだ後に自分に合う分野",
      "zh-CN": "积累经验后适合你的领域",
      "zh-TW": "積累經驗後適合你的領域",
      vi: "Các lĩnh vực phù hợp với bạn sau khi tích lũy kinh nghiệm",
      id: "Bidang yang cocok untuk Anda setelah mengumpulkan pengalaman"
    },
    advice: {
      ko: "일단 시작해보세요! 완벽한 준비는 없습니다. 경험이 답을 알려줄 것입니다.",
      en: "Just start! There is no perfect preparation. Experience will tell you the answer.",
      ja: "まず始めてみてください！完璧な準備はありません。経験が答えを教えてくれます。",
      "zh-CN": "先开始吧！没有完美的准备。经验会告诉你答案。",
      "zh-TW": "先開始吧！沒有完美的準備。經驗會告訴你答案。",
      vi: "Hãy bắt đầu thôi! Không có sự chuẩn bị hoàn hảo. Kinh nghiệm sẽ cho bạn biết câu trả lời.",
      id: "Mulai saja! Tidak ada persiapan yang sempurna. Pengalaman akan memberi tahu Anda jawabannya."
    },
    successRate: "⭐⭐⭐ - 50% → 경험 후 80%"
  }
];
