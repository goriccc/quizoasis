export interface LeadershipStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 여러 Type에 점수 부여 가능 (예: ["Type1", "Type5"])
  }[];
}

export interface LeadershipStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  leadershipStyle: Record<string, string>; // 리더십 스타일 (예: "지시형, 성과 중심")
  strengths: Record<string, string>; // 강점
  weaknesses: Record<string, string>; // 주의할 점
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const leadershipStyleQuestions: LeadershipStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "새로운 프로젝트를 맡았다. 팀원들에게 가장 먼저 할 말은?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"우리의 목표는 이것이고, 달성하면 이런 보상이 있습니다.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "\"일단 모여보세요. 각자 어떤 역할을 하고 싶은지 말해봅시다.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"제가 먼저 초안을 잡을 테니, 보시고 피드백 주세요.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"각자 맡은 바 최선을 다해주시고, 필요한 게 있으면 말해요.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "팀원이 치명적인 실수를 저질렀을 때 당신의 반응은?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"왜 이런 실수가 나왔지? 원인을 분석하고 보고해.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"괜찮아. 누구나 실수할 수 있어. 수습부터 하자.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"비켜봐. 내가 해결할게.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"이 실수를 통해 뭘 배웠는지 이야기해 보자.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "회의 시간이 길어지고 결론이 안 날 때?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"시간 없으니 다수결로 정합시다. 아니면 제가 정합니다.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"잠깐 쉬고 다시 할까? 다른 아이디어 있는 사람?\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "\"지금 나온 의견들을 정리해 보면...\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type4", "Type6"]
      },
      {
        text: {
          ko: "\"가장 효율적인 방법이 뭘까?\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3", "Type5"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "당신이 생각하는 '최고의 팀'은?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "일사불란하게 움직이며 목표를 초과 달성하는 엘리트 팀.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "서로 웃음이 끊이지 않고 가족처럼 화목한 팀.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "각자 분야에서 최고 실력을 가진 어벤져스 팀.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "서로의 부족한 점을 채워주며 함께 성장하는 팀.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type4", "Type6"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "업무 지시를 내릴 때 당신의 스타일은?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"언제까지, 이렇게 해주세요.\" 구체적이고 명확하게 지시한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"이런 방향은 어때요?\" 큰 그림만 주고 자율에 맡긴다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "\"이건 이렇게 하는 게 빨라.\" 노하우를 직접 전수한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"힘든 건 없어요?\" 업무량과 컨디션을 먼저 체크한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "성과가 부진한 팀원을 어떻게 관리할까?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "명확한 목표치를 다시 주고, 못하면 페널티를 준다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "따로 식사를 하며 개인적인 고민이 있는지 들어본다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "옆에 앉혀두고 일하는 방식을 하나하나 코칭한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "그 팀원이 잘할 수 있는 다른 업무로 재배치한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type4", "Type5"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "우리 팀이 타 부서와 경쟁해야 한다면?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"무조건 이겨야지.\" 승부욕을 불태우며 전략을 짠다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "\"우리는 우리 길을 가자.\" 남들 신경 안 쓰고 우리 페이스 유지.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "\"쟤네보다 우리가 뭐가 부족해?\" 팀원들의 사기를 북돋운다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type6"]
      },
      {
        text: {
          ko: "\"협력할 부분은 없을까?\" 윈윈 전략을 찾는다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 리더로서 가장 듣고 싶은 칭찬은?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"팀장님 덕분에 역대 최고 실적을 냈습니다.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type3"]
      },
      {
        text: {
          ko: "\"팀장님 밑에서 일할 때가 제일 행복했어요.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"역시 팀장님은 배울 점이 많아요. 존경합니다.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "\"팀장님 덕분에 제가 많이 성장했습니다.\"",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "야근이 필요한 급박한 상황, 당신은?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "\"오늘 끝내고 회식 가자! 내가 쏜다!\" 보상으로 동기부여.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "\"미안해요. 다 같이 힘냅시다.\" 감정적으로 호소하며 독려.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type6"]
      },
      {
        text: {
          ko: "\"나도 남을 테니까 같이 하자.\" 끝까지 자리를 지킨다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"효율적으로 하자. 불필요한 건 빼고 핵심만.\" 업무 다이어트.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type5"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "상사가 부당한 지시를 내렸을 때?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "팀을 대표해서 논리적으로 반박하고 팀원들을 보호한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "일단 알겠다고 하고, 우리 팀이 덜 힘들게 조용히 처리한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type6"]
      },
      {
        text: {
          ko: "상황을 팀원들에게 공유하고 함께 대책을 논의한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "상사의 의도를 파악해서 최대한 맞춰주려 노력한다.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 롤모델에 가까운 인물 유형은?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "스티브 잡스",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "유재석",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "손흥민",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "훌륭한 선생님",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "리더의 가장 중요한 덕목은 무엇일까요?",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    options: [
      {
        text: {
          ko: "통찰력과 결단력.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "공감 능력과 소통.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type2", "Type4"]
      },
      {
        text: {
          ko: "압도적인 업무 실력.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "인내심과 포용력.",
          en: "",
          ja: "",
          'zh-CN': "",
          'zh-TW': "",
          vi: "",
          id: ""
        },
        types: ["Type6"]
      }
    ]
  }
];

export const leadershipStyleResults: LeadershipStyleResult[] = [
  {
    type: "Type1",
    emoji: "🦁",
    title: {
      ko: "카리스마 제왕, 사자형 리더",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    shortDescription: {
      ko: "\"나를 따르라! 결과로 증명한다.\"",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    description: {
      ko: "당신은 목표 지향적이고 추진력이 강한 리더입니다. 확고한 비전을 가지고 팀을 이끌며, 위기 상황에서 더욱 빛을 발합니다. 결단력이 빠르고 통솔력이 뛰어나지만, 때로는 독단적으로 보일 수 있으니 팀원들의 의견에 귀 기울이는 여유가 필요합니다.",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    leadershipStyle: {
      ko: "지시형, 성과 중심",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    strengths: {
      ko: "추진력, 결단력, 책임감",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    weaknesses: {
      ko: "소통 부족, 강압적인 태도",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    goodMatch: {
      ko: "Type 2 (돌고래형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    badMatch: {
      ko: "Type 4 (꿀벌형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    }
  },
  {
    type: "Type2",
    emoji: "🐬",
    title: {
      ko: "부드러운 카리스마, 돌고래형 리더",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    shortDescription: {
      ko: "\"우리는 원팀! 행복하게 일하자.\"",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    description: {
      ko: "당신은 사람을 가장 중요하게 생각하는 관계 지향적 리더입니다. 팀원들의 감정을 세심하게 살피고, 화목한 분위기를 만드는 데 탁월합니다. 당신 곁에는 항상 사람들이 모이며, '서번트 리더십(섬기는 리더십)'의 표본입니다. 다만, 쓴소리를 못 해서 성과가 떨어질 수 있습니다.",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    leadershipStyle: {
      ko: "지원형, 관계 중심",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    strengths: {
      ko: "공감 능력, 팀워크, 인화 단결",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    weaknesses: {
      ko: "우유부단함, 공과 사 구분의 모호함",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    goodMatch: {
      ko: "Type 1 (사자형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    badMatch: {
      ko: "Type 3 (치타형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    }
  },
  {
    type: "Type3",
    emoji: "🐆",
    title: {
      ko: "실력파 에이스, 치타형 리더",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    shortDescription: {
      ko: "\"백 번 말하느니 내가 한번 보여줄게.\"",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    description: {
      ko: "당신은 누구보다 뛰어난 실무 능력을 가진 '플레이잉 코치'입니다. 말로만 지시하는 것이 아니라, 직접 행동으로 보여주며 팀원들을 이끕니다. 기준이 높고 속도가 빨라서, 따라오지 못하는 팀원들을 답답해할 수 있습니다. 혼자 다 하려 하지 말고 위임하는 법을 배워야 합니다.",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    leadershipStyle: {
      ko: "솔선수범형, 능력 중심",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    strengths: {
      ko: "전문성, 효율성, 높은 기준",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    weaknesses: {
      ko: "마이크로 매니징, 팀원들의 번아웃 유발",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    goodMatch: {
      ko: "Type 6 (정원사형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    badMatch: {
      ko: "Type 2 (돌고래형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    }
  },
  {
    type: "Type4",
    emoji: "🐝",
    title: {
      ko: "만능 조율자, 꿀벌형 리더",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    shortDescription: {
      ko: "\"여러분의 생각은 어때요? 같이 정해봐요.\"",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    description: {
      ko: "당신은 팀원들의 의견을 존중하고 합의를 이끌어내는 민주적인 리더입니다. 독단적인 결정을 내리지 않으며, 모든 구성원이 프로젝트에 참여하도록 독려합니다. 창의적인 아이디어가 많이 나오는 수평적인 조직 문화를 선호합니다. 결론을 내는 데 시간이 오래 걸릴 수 있습니다.",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    leadershipStyle: {
      ko: "참여형, 합의 중심",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    strengths: {
      ko: "경청, 존중, 창의성 증진",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    weaknesses: {
      ko: "의사결정 지연, 책임 소재 불분명",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    goodMatch: {
      ko: "Type 1 (사자형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    badMatch: {
      ko: "Type 3 (치타형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    }
  },
  {
    type: "Type5",
    emoji: "🦅",
    title: {
      ko: "큰 그림을 그리는, 독수리형 리더",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    shortDescription: {
      ko: "\"저 너머를 보세요. 미래는 우리 것입니다.\"",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    description: {
      ko: "당신은 현재의 문제보다 미래의 가능성을 보는 전략가입니다. 혁신적인 아이디어를 제시하고, 팀원들에게 새로운 영감을 불어넣습니다. 변화를 두려워하지 않고 도전하지만, 디테일한 현실 감각이 부족하여 팀원들이 구체적인 실행 방안을 찾는 데 애를 먹을 수 있습니다.",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    leadershipStyle: {
      ko: "비전 제시형, 혁신 중심",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    strengths: {
      ko: "통찰력, 영감 부여, 변화 주도",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    weaknesses: {
      ko: "현실성 부족, 뜬구름 잡는 이야기",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    goodMatch: {
      ko: "Type 3 (치타형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    badMatch: {
      ko: "Type 6 (정원사형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    }
  },
  {
    type: "Type6",
    emoji: "🌳",
    title: {
      ko: "잠재력을 키우는, 정원사형 리더",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    shortDescription: {
      ko: "\"당신은 더 잘할 수 있어요. 내가 도와줄게요.\"",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    description: {
      ko: "당신은 팀원의 성장을 최우선으로 생각하는 코칭형 리더입니다. 당장의 성과보다는 개인의 잠재력을 발견하고 키워주는 데 보람을 느낍니다. 인내심을 가지고 기다려주며, 멘토 역할을 자처합니다. 성과가 급한 상황에서는 다소 느긋해 보일 수 있습니다.",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    leadershipStyle: {
      ko: "코칭형, 교육 중심",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    strengths: {
      ko: "인재 육성, 동기부여, 신뢰 형성",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    weaknesses: {
      ko: "과도한 개입, 성과 압박에 취약",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    goodMatch: {
      ko: "Type 3 (치타형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    },
    badMatch: {
      ko: "Type 5 (독수리형 리더)",
      en: "",
      ja: "",
      'zh-CN': "",
      'zh-TW': "",
      vi: "",
      id: ""
    }
  }
];

export function calculateLeadershipStyleResult(answers: string[]): string {
  // 각 Type별 점수 계산
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변에 대해 해당하는 Type들에 점수 부여
  answers.forEach((answerTypes) => {
    // answerTypes는 "Type1,Type5" 같은 형식일 수 있음
    const types = answerTypes.split(',').map(t => t.trim());
    types.forEach(type => {
      if (scores.hasOwnProperty(type)) {
        scores[type]++;
      }
    });
  });

  // 가장 높은 점수를 가진 Type 찾기
  let maxScore = 0;
  let resultType = "Type1";

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 동점일 경우 우선순위: Type 2 > Type 4 > Type 6 > Type 1 > Type 5 > Type 3
  if (maxScore > 0) {
    const tiedTypes = Object.entries(scores)
      .filter(([_, score]) => score === maxScore)
      .map(([type, _]) => type);

    if (tiedTypes.length > 1) {
      const priority = ["Type2", "Type4", "Type6", "Type1", "Type5", "Type3"];
      for (const priorityType of priority) {
        if (tiedTypes.includes(priorityType)) {
          resultType = priorityType;
          break;
        }
      }
    }
  }

  return resultType;
}

