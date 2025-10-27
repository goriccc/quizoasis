// 멘사 극한 도전 퀴즈 테스트 데이터 타입 정의
export interface MensaExtremeQuestion {
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
  options: {
    text: {
      ko: string;
      en: string;
      ja: string;
      'zh-CN': string;
      'zh-TW': string;
      vi: string;
      id: string;
    };
    isCorrect: boolean;
  }[];
  correctAnswer: string;
  hint: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

export interface MensaExtremeResult {
  type: string;
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
  emoji: string;
  scoreRange: [number, number];
  strengths: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  }[];
  recommendations: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  }[];
  advice: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    vi: string;
    id: string;
  };
}

// 멘사 극한 도전 퀴즈 질문 데이터
export const mensaExtremeQuestions: MensaExtremeQuestion[] = [
  {
    id: 1,
    question: {
      ko: "다음 수열의 규칙은? 2, 12, 36, 80, 150, ?",
      en: "What is the rule of the following sequence? 2, 12, 36, 80, 150, ?",
      ja: "次の数列の規則は？ 2, 12, 36, 80, 150, ?",
      "zh-CN": "以下数列的规律是什么？2, 12, 36, 80, 150, ?",
      "zh-TW": "以下數列的規律是什麼？2, 12, 36, 80, 150, ?",
      vi: "Quy luật của dãy số sau là gì? 2, 12, 36, 80, 150, ?",
      id: "Apa aturan dari barisan berikut? 2, 12, 36, 80, 150, ?"
    },
    options: [
      {
        text: {
          ko: "210",
          en: "210",
          ja: "210",
          "zh-CN": "210",
          "zh-TW": "210",
          vi: "210",
          id: "210"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "224",
          en: "224",
          ja: "224",
          "zh-CN": "224",
          "zh-TW": "224",
          vi: "224",
          id: "224"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "252",
          en: "252",
          ja: "252",
          "zh-CN": "252",
          "zh-TW": "252",
          vi: "252",
          id: "252"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "280",
          en: "280",
          ja: "280",
          "zh-CN": "280",
          "zh-TW": "280",
          vi: "280",
          id: "280"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "n³ + 3n² + n",
      en: "n³ + 3n² + n",
      ja: "n³ + 3n² + n",
      "zh-CN": "n³ + 3n² + n",
      "zh-TW": "n³ + 3n² + n",
      vi: "n³ + 3n² + n",
      id: "n³ + 3n² + n"
    }
  },
  {
    id: 2,
    question: {
      ko: "A, B, C 세 사람이 있습니다. A는 항상 진실만 말하고, B는 항상 거짓만 말하고, C는 랜덤으로 진실이나 거짓을 말합니다. 세 번의 예/아니오 질문으로 누가 누구인지 알아낼 수 있나요?",
      en: "There are three people A, B, C. A always tells the truth, B always lies, and C randomly tells the truth or lies. Can you determine who is who with three yes/no questions?",
      ja: "A、B、Cの3人がいます。Aは常に真実を話し、Bは常に嘘を話し、Cはランダムに真実か嘘を話します。3回のはい/いいえ質問で誰が誰かを特定できますか？",
      "zh-CN": "有A、B、C三个人。A总是说真话，B总是说谎，C随机说真话或假话。你能用三个是/否问题确定谁是谁吗？",
      "zh-TW": "有A、B、C三個人。A總是說真話，B總是說謊，C隨機說真話或假話。你能用三個是/否問題確定誰是誰嗎？",
      vi: "Có ba người A, B, C. A luôn nói thật, B luôn nói dối, C ngẫu nhiên nói thật hoặc dối. Bạn có thể xác định ai là ai với ba câu hỏi có/không không?",
      id: "Ada tiga orang A, B, C. A selalu berkata jujur, B selalu berbohong, C secara acak berkata jujur atau bohong. Bisakah Anda menentukan siapa siapa dengan tiga pertanyaan ya/tidak?"
    },
    options: [
      {
        text: {
          ko: "불가능",
          en: "Impossible",
          ja: "不可能",
          "zh-CN": "不可能",
          "zh-TW": "不可能",
          vi: "Không thể",
          id: "Tidak mungkin"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "가능하다",
          en: "Possible",
          ja: "可能",
          "zh-CN": "可能",
          "zh-TW": "可能",
          vi: "Có thể",
          id: "Mungkin"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "C를 특정하는 것만 가능",
          en: "Only C can be identified",
          ja: "Cを特定することのみ可能",
          "zh-CN": "只能确定C",
          "zh-TW": "只能確定C",
          vi: "Chỉ có thể xác định C",
          id: "Hanya C yang bisa diidentifikasi"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "A와 B만 구별 가능",
          en: "Only A and B can be distinguished",
          ja: "AとBのみ区別可能",
          "zh-CN": "只能区分A和B",
          "zh-TW": "只能區分A和B",
          vi: "Chỉ có thể phân biệt A và B",
          id: "Hanya A dan B yang bisa dibedakan"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "복잡한 메타 질문 전략으로 가능",
      en: "Possible with complex meta-question strategy",
      ja: "複雑なメタ質問戦略で可能",
      "zh-CN": "通过复杂的元问题策略可能",
      "zh-TW": "通過複雜的元問題策略可能",
      vi: "Có thể với chiến lược câu hỏi meta phức tạp",
      id: "Mungkin dengan strategi pertanyaan meta yang kompleks"
    }
  },
  {
    id: 3,
    question: {
      ko: "빈칸에 들어갈 숫자는? 1, 1, 2, 6, 24, 120, ?",
      en: "What number goes in the blank? 1, 1, 2, 6, 24, 120, ?",
      ja: "空白に入る数字は？ 1, 1, 2, 6, 24, 120, ?",
      "zh-CN": "空白处应该填入什么数字？1, 1, 2, 6, 24, 120, ?",
      "zh-TW": "空白處應該填入什麼數字？1, 1, 2, 6, 24, 120, ?",
      vi: "Số nào điền vào chỗ trống? 1, 1, 2, 6, 24, 120, ?",
      id: "Angka apa yang masuk ke tempat kosong? 1, 1, 2, 6, 24, 120, ?"
    },
    options: [
      {
        text: {
          ko: "600",
          en: "600",
          ja: "600",
          "zh-CN": "600",
          "zh-TW": "600",
          vi: "600",
          id: "600"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "720",
          en: "720",
          ja: "720",
          "zh-CN": "720",
          "zh-TW": "720",
          vi: "720",
          id: "720"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "840",
          en: "840",
          ja: "840",
          "zh-CN": "840",
          "zh-TW": "840",
          vi: "840",
          id: "840"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "5040",
          en: "5040",
          ja: "5040",
          "zh-CN": "5040",
          "zh-TW": "5040",
          vi: "5040",
          id: "5040"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "팩토리얼: 1!, 1!, 2!, 3!, 4!, 5!, 6!=720",
      en: "Factorial: 1!, 1!, 2!, 3!, 4!, 5!, 6!=720",
      ja: "階乗: 1!, 1!, 2!, 3!, 4!, 5!, 6!=720",
      "zh-CN": "阶乘: 1!, 1!, 2!, 3!, 4!, 5!, 6!=720",
      "zh-TW": "階乘: 1!, 1!, 2!, 3!, 4!, 5!, 6!=720",
      vi: "Giai thừa: 1!, 1!, 2!, 3!, 4!, 5!, 6!=720",
      id: "Faktorial: 1!, 1!, 2!, 3!, 4!, 5!, 6!=720"
    }
  },
  {
    id: 4,
    question: {
      ko: "정육면체를 한 꼭짓점에서 대각선 반대편 꼭짓점까지 자르면, 자른 면의 모양은?",
      en: "If you cut a cube from one vertex to the opposite diagonal vertex, what shape is the cut face?",
      ja: "立方体を一つの頂点から対角線の反対側の頂点まで切ると、切った面の形は？",
      "zh-CN": "从立方体的一个顶点切到对角线的另一个顶点，切面的形状是什么？",
      "zh-TW": "從立方體的一個頂點切到對角線的另一個頂點，切面的形狀是什麼？",
      vi: "Nếu bạn cắt một hình lập phương từ một đỉnh đến đỉnh đối diện chéo, hình dạng của mặt cắt là gì?",
      id: "Jika Anda memotong kubus dari satu titik ke titik diagonal yang berlawanan, bentuk permukaan potongannya adalah?"
    },
    options: [
      {
        text: {
          ko: "정삼각형",
          en: "Equilateral triangle",
          ja: "正三角形",
          "zh-CN": "等边三角形",
          "zh-TW": "等邊三角形",
          vi: "Tam giác đều",
          id: "Segitiga sama sisi"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "정육각형",
          en: "Regular hexagon",
          ja: "正六角形",
          "zh-CN": "正六边形",
          "zh-TW": "正六邊形",
          vi: "Lục giác đều",
          id: "Segi enam beraturan"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "오각형",
          en: "Pentagon",
          ja: "五角形",
          "zh-CN": "五边形",
          "zh-TW": "五邊形",
          vi: "Ngũ giác",
          id: "Segi lima"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "부등변 육각형",
          en: "Irregular hexagon",
          ja: "不等辺六角形",
          "zh-CN": "不规则六边形",
          "zh-TW": "不規則六邊形",
          vi: "Lục giác không đều",
          id: "Segi enam tidak beraturan"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "정육각형",
      en: "Regular hexagon",
      ja: "正六角形",
      "zh-CN": "正六边形",
      "zh-TW": "正六邊形",
      vi: "Lục giác đều",
      id: "Segi enam beraturan"
    }
  },
  {
    id: 5,
    question: {
      ko: "다음 논리 명제가 참일 때, 반드시 거짓인 것은? \"모든 P는 Q이고, 어떤 Q는 R이 아니다\"",
      en: "When the following logical proposition is true, what must be false? \"All P are Q, and some Q are not R\"",
      ja: "次の論理命題が真のとき、必ず偽であるものは？「すべてのPはQであり、あるQはRではない」",
      "zh-CN": "当以下逻辑命题为真时，必然为假的是什么？\"所有P都是Q，有些Q不是R\"",
      "zh-TW": "當以下邏輯命題為真時，必然為假的是什麼？「所有P都是Q，有些Q不是R」",
      vi: "Khi mệnh đề logic sau đây đúng, điều gì chắc chắn sai? \"Tất cả P là Q, và một số Q không phải R\"",
      id: "Ketika proposisi logis berikut benar, apa yang pasti salah? \"Semua P adalah Q, dan beberapa Q bukan R\""
    },
    options: [
      {
        text: {
          ko: "모든 P는 R이다",
          en: "All P are R",
          ja: "すべてのPはRである",
          "zh-CN": "所有P都是R",
          "zh-TW": "所有P都是R",
          vi: "Tất cả P là R",
          id: "Semua P adalah R"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "어떤 P는 R이 아니다",
          en: "Some P are not R",
          ja: "あるPはRではない",
          "zh-CN": "有些P不是R",
          "zh-TW": "有些P不是R",
          vi: "Một số P không phải R",
          id: "Beberapa P bukan R"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "모든 R은 P가 아니다",
          en: "All R are not P",
          ja: "すべてのRはPではない",
          "zh-CN": "所有R都不是P",
          "zh-TW": "所有R都不是P",
          vi: "Tất cả R không phải P",
          id: "Semua R bukan P"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "확실히 거짓인 것은 없다",
          en: "Nothing is definitely false",
          ja: "確実に偽であるものはない",
          "zh-CN": "没有确定为假的东西",
          "zh-TW": "沒有確定為假的東西",
          vi: "Không có gì chắc chắn sai",
          id: "Tidak ada yang pasti salah"
        },
        isCorrect: true
      }
    ],
    correctAnswer: "D",
    hint: {
      ko: "모든 P는 R이다 진위를 확정할 수 없음",
      en: "Cannot determine truth of 'All P are R'",
      ja: "「すべてのPはRである」の真偽を確定できない",
      "zh-CN": "无法确定「所有P都是R」的真假",
      "zh-TW": "無法確定「所有P都是R」的真假",
      vi: "Không thể xác định tính đúng sai của 'Tất cả P là R'",
      id: "Tidak dapat menentukan kebenaran A"
    }
  },
  {
    id: 6,
    question: {
      ko: "5명이 원탁에 앉는데, A와 B는 이웃하면 안 되고, C와 D는 반드시 이웃해야 합니다. 가능한 배치는? (회전은 같은 것)",
      en: "5 people sit at a round table. A and B cannot be neighbors, and C and D must be neighbors. How many possible arrangements? (rotations are the same)",
      ja: "5人が円卓に座る。AとBは隣り合ってはいけず、CとDは必ず隣り合わなければならない。可能な配置は？(回転は同じ)",
      "zh-CN": "5个人围圆桌而坐，A和B不能相邻，C和D必须相邻。可能的安排有多少种？(旋转算同一种)",
      "zh-TW": "5個人圍圓桌而坐，A和B不能相鄰，C和D必須相鄰。可能的安排有多少種？(旋轉算同一種)",
      vi: "5 người ngồi quanh bàn tròn. A và B không được ngồi cạnh nhau, C và D phải ngồi cạnh nhau. Có bao nhiêu cách sắp xếp? (xoay vòng tính là giống nhau)",
      id: "5 orang duduk di meja bundar. A dan B tidak boleh bertetangga, C dan D harus bertetangga. Berapa banyak pengaturan yang mungkin? (rotasi dihitung sama)"
    },
    options: [
      {
        text: {
          ko: "2가지",
          en: "2 ways",
          ja: "2通り",
          "zh-CN": "2种",
          "zh-TW": "2種",
          vi: "2 cách",
          id: "2 cara"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "3가지",
          en: "3 ways",
          ja: "3通り",
          "zh-CN": "3种",
          "zh-TW": "3種",
          vi: "3 cách",
          id: "3 cara"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "4가지",
          en: "4 ways",
          ja: "4通り",
          "zh-CN": "4种",
          "zh-TW": "4種",
          vi: "4 cách",
          id: "4 cara"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "6가지",
          en: "6 ways",
          ja: "6通り",
          "zh-CN": "6种",
          "zh-TW": "6種",
          vi: "6 cách",
          id: "6 cara"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "복잡한 조합 계산",
      en: "Complex combination calculation",
      ja: "複雑な組み合わせ計算",
      "zh-CN": "复杂的组合计算",
      "zh-TW": "複雜的組合計算",
      vi: "Tính toán tổ hợp phức tạp",
      id: "Perhitungan kombinasi yang kompleks"
    }
  },
  {
    id: 7,
    question: {
      ko: "x² + y² = z²를 만족하는 양의 정수 x, y, z 중 x < 20일 때 가능한 조합의 개수는?",
      en: "How many combinations of positive integers x, y, z satisfy x² + y² = z² with x < 20?",
      ja: "x² + y² = z²を満たす正の整数x, y, zでx < 20のとき、可能な組み合わせの個数は？",
      "zh-CN": "满足x² + y² = z²的正整数x, y, z中，当x < 20时可能的组合个数是多少？",
      "zh-TW": "滿足x² + y² = z²的正整數x, y, z中，當x < 20時可能的組合個數是多少？",
      vi: "Có bao nhiêu tổ hợp số nguyên dương x, y, z thỏa mãn x² + y² = z² với x < 20?",
      id: "Berapa banyak kombinasi bilangan bulat positif x, y, z yang memenuhi x² + y² = z² dengan x < 20?"
    },
    options: [
      {
        text: {
          ko: "5개",
          en: "5",
          ja: "5個",
          "zh-CN": "5个",
          "zh-TW": "5個",
          vi: "5",
          id: "5"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "6개",
          en: "6",
          ja: "6個",
          "zh-CN": "6个",
          "zh-TW": "6個",
          vi: "6",
          id: "6"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "7개",
          en: "7",
          ja: "7個",
          "zh-CN": "7个",
          "zh-TW": "7個",
          vi: "7",
          id: "7"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "8개",
          en: "8",
          ja: "8個",
          "zh-CN": "8个",
          "zh-TW": "8個",
          vi: "8",
          id: "8"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "피타고라스 수: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10), (9,12,15), (12,16,20)",
      en: "Pythagorean triples: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10), (9,12,15), (12,16,20)",
      ja: "ピタゴラス数: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10), (9,12,15), (12,16,20)",
      "zh-CN": "毕达哥拉斯数: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10), (9,12,15), (12,16,20)",
      "zh-TW": "畢達哥拉斯數: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10), (9,12,15), (12,16,20)",
      vi: "Bộ ba Pythagore: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10), (9,12,15), (12,16,20)",
      id: "Tripel Pythagoras: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (6,8,10), (9,12,15), (12,16,20)"
    }
  },
  {
    id: 8,
    question: {
      ko: "무한 급수 1 - 1/2 + 1/3 - 1/4 + 1/5 - ... 의 합은?",
      en: "What is the sum of the infinite series 1 - 1/2 + 1/3 - 1/4 + 1/5 - ...?",
      ja: "無限級数 1 - 1/2 + 1/3 - 1/4 + 1/5 - ... の和は？",
      "zh-CN": "无穷级数 1 - 1/2 + 1/3 - 1/4 + 1/5 - ... 的和是多少？",
      "zh-TW": "無窮級數 1 - 1/2 + 1/3 - 1/4 + 1/5 - ... 的和是多少？",
      vi: "Tổng của chuỗi vô hạn 1 - 1/2 + 1/3 - 1/4 + 1/5 - ... là gì?",
      id: "Berapa jumlah deret tak hingga 1 - 1/2 + 1/3 - 1/4 + 1/5 - ...?"
    },
    options: [
      {
        text: {
          ko: "0",
          en: "0",
          ja: "0",
          "zh-CN": "0",
          "zh-TW": "0",
          vi: "0",
          id: "0"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "ln(2)",
          en: "ln(2)",
          ja: "ln(2)",
          "zh-CN": "ln(2)",
          "zh-TW": "ln(2)",
          vi: "ln(2)",
          id: "ln(2)"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "π/4",
          en: "π/4",
          ja: "π/4",
          "zh-CN": "π/4",
          "zh-TW": "π/4",
          vi: "π/4",
          id: "π/4"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "발산한다",
          en: "Diverges",
          ja: "発散する",
          "zh-CN": "发散",
          "zh-TW": "發散",
          vi: "Phân kỳ",
          id: "Divergen"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "교대 조화급수 = ln(2)",
      en: "Alternating harmonic series = ln(2)",
      ja: "交代調和級数 = ln(2)",
      "zh-CN": "交错调和级数 = ln(2)",
      "zh-TW": "交錯調和級數 = ln(2)",
      vi: "Chuỗi điều hòa xen kẽ = ln(2)",
      id: "Deret harmonik bergantian = ln(2)"
    }
  },
  {
    id: 9,
    question: {
      ko: "체스판(8×8)의 두 대각 반대편 칸을 제거했습니다. 2×1 도미노로 나머지를 덮는 것이 불가능한 이유는?",
      en: "Two diagonally opposite squares are removed from a chessboard (8×8). Why is it impossible to cover the rest with 2×1 dominoes?",
      ja: "チェス盤(8×8)の対角反対側の2つのマスを削除しました。2×1ドミノで残りを覆うことが不可能な理由は？",
      "zh-CN": "从棋盘(8×8)上移除两个对角相对的方格。为什么不能用2×1多米诺骨牌覆盖其余部分？",
      "zh-TW": "從棋盤(8×8)上移除兩個對角相對的方格。為什麼不能用2×1多米諾骨牌覆蓋其餘部分？",
      vi: "Hai ô chéo đối diện được loại bỏ khỏi bàn cờ (8×8). Tại sao không thể phủ phần còn lại bằng domino 2×1?",
      id: "Dua kotak diagonal berlawanan dihapus dari papan catur (8×8). Mengapa tidak mungkin menutupi sisanya dengan domino 2×1?"
    },
    options: [
      {
        text: {
          ko: "칸 수가 홀수여서",
          en: "Odd number of squares",
          ja: "マス数が奇数だから",
          "zh-CN": "方格数是奇数",
          "zh-TW": "方格數是奇數",
          vi: "Số ô lẻ",
          id: "Jumlah kotak ganjil"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "대칭이 깨져서",
          en: "Symmetry is broken",
          ja: "対称が崩れているから",
          "zh-CN": "对称性被破坏",
          "zh-TW": "對稱性被破壞",
          vi: "Tính đối xứng bị phá vỡ",
          id: "Simetri rusak"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "같은 색 칸을 제거해서",
          en: "Same color squares removed",
          ja: "同じ色のマスを削除したから",
          "zh-CN": "移除了相同颜色的方格",
          "zh-TW": "移除了相同顏色的方格",
          vi: "Loại bỏ các ô cùng màu",
          id: "Menghapus kotak warna yang sama"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "항상 가능하다",
          en: "Always possible",
          ja: "常に可能",
          "zh-CN": "总是可能的",
          "zh-TW": "總是可能的",
          vi: "Luôn có thể",
          id: "Selalu mungkin"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "도미노는 다른 색 2칸, 제거한 2칸은 같은 색",
      en: "Domino covers 2 squares of different colors, removed squares are same color",
      ja: "ドミノは異なる色の2マス、削除した2マスは同じ色",
      "zh-CN": "多米诺覆盖不同颜色的2个方格，移除的2个方格是相同颜色",
      "zh-TW": "多米諾覆蓋不同顏色的2個方格，移除的2個方格是相同顏色",
      vi: "Domino phủ 2 ô khác màu, 2 ô bị loại bỏ cùng màu",
      id: "Domino menutupi 2 kotak warna berbeda, kotak yang dihapus warna sama"
    }
  },
  {
    id: 10,
    question: {
      ko: "다음 명제의 대우는? \"비가 오면 축구 경기가 취소된다\"",
      en: "What is the contrapositive of \"If it rains, the soccer game is cancelled\"?",
      ja: "次の命題の対偶は？「雨が降るとサッカーの試合が中止される」",
      "zh-CN": "以下命题的逆否命题是什么？\"如果下雨，足球比赛就取消\"",
      "zh-TW": "以下命題的逆否命題是什麼？「如果下雨，足球比賽就取消」",
      vi: "Phản đảo của mệnh đề sau là gì? \"Nếu trời mưa thì trận bóng đá bị hủy\"",
      id: "Apa kontrapositif dari \"Jika hujan, pertandingan sepak bola dibatalkan\"?"
    },
    options: [
      {
        text: {
          ko: "축구 경기가 취소되면 비가 온다",
          en: "If soccer game is cancelled, it rains",
          ja: "サッカーの試合が中止されると雨が降る",
          "zh-CN": "如果足球比赛取消，就下雨",
          "zh-TW": "如果足球比賽取消，就下雨",
          vi: "Nếu trận bóng đá bị hủy thì trời mưa",
          id: "Jika pertandingan sepak bola dibatalkan, hujan"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "비가 안 오면 축구 경기가 취소 안 된다",
          en: "If it doesn't rain, soccer game is not cancelled",
          ja: "雨が降らなければサッカーの試合は中止されない",
          "zh-CN": "如果不下雨，足球比赛不取消",
          "zh-TW": "如果不下雨，足球比賽不取消",
          vi: "Nếu trời không mưa thì trận bóng đá không bị hủy",
          id: "Jika tidak hujan, pertandingan sepak bola tidak dibatalkan"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "축구 경기가 취소 안 되면 비가 안 온다",
          en: "If soccer game is not cancelled, it doesn't rain",
          ja: "サッカーの試合が中止されなければ雨が降らない",
          "zh-CN": "如果足球比赛不取消，就不下雨",
          "zh-TW": "如果足球比賽不取消，就不下雨",
          vi: "Nếu trận bóng đá không bị hủy thì trời không mưa",
          id: "Jika pertandingan sepak bola tidak dibatalkan, tidak hujan"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "비가 오지 않거나 축구 경기가 취소된다",
          en: "It doesn't rain or soccer game is cancelled",
          ja: "雨が降らないかサッカーの試合が中止される",
          "zh-CN": "不下雨或足球比赛取消",
          "zh-TW": "不下雨或足球比賽取消",
          vi: "Trời không mưa hoặc trận bóng đá bị hủy",
          id: "Tidak hujan atau pertandingan sepak bola dibatalkan"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "대우: not Q → not P",
      en: "Contrapositive: not Q → not P",
      ja: "対偶: not Q → not P",
      "zh-CN": "逆否命题: not Q → not P",
      "zh-TW": "逆否命題: not Q → not P",
      vi: "Phản đảo: not Q → not P",
      id: "Kontrapositif: not Q → not P"
    }
  },
  {
    id: 11,
    question: {
      ko: "1부터 100까지의 곱에서 끝에 0이 몇 개 붙나요?",
      en: "How many zeros are at the end of the product from 1 to 100?",
      ja: "1から100までの積の末尾に0はいくつ付きますか？",
      "zh-CN": "1到100的乘积末尾有多少个0？",
      "zh-TW": "1到100的乘積末尾有多少個0？",
      vi: "Tích từ 1 đến 100 có bao nhiêu số 0 ở cuối?",
      id: "Berapa banyak nol di akhir perkalian dari 1 sampai 100?"
    },
    options: [
      {
        text: {
          ko: "20개",
          en: "20",
          ja: "20個",
          "zh-CN": "20个",
          "zh-TW": "20個",
          vi: "20",
          id: "20"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "22개",
          en: "22",
          ja: "22個",
          "zh-CN": "22个",
          "zh-TW": "22個",
          vi: "22",
          id: "22"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "24개",
          en: "24",
          ja: "24個",
          "zh-CN": "24个",
          "zh-TW": "24個",
          vi: "24",
          id: "24"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "25개",
          en: "25",
          ja: "25個",
          "zh-CN": "25个",
          "zh-TW": "25個",
          vi: "25",
          id: "25"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "5의 개수: 20개(5의 배수) + 4개(25의 배수) = 24개",
      en: "Number of 5s: 20 (multiples of 5) + 4 (multiples of 25) = 24",
      ja: "5の個数: 20個(5の倍数) + 4個(25の倍数) = 24個",
      "zh-CN": "5的个数: 20个(5的倍数) + 4个(25的倍数) = 24个",
      "zh-TW": "5的個數: 20個(5的倍數) + 4個(25的倍數) = 24個",
      vi: "Số lượng 5: 20 (bội của 5) + 4 (bội của 25) = 24",
      id: "Jumlah 5: 20 (kelipatan 5) + 4 (kelipatan 25) = 24"
    }
  },
  {
    id: 12,
    question: {
      ko: "다음 패턴의 ?는? △○□, ○□△, □△○, ?",
      en: "What is ? in the pattern? △○□, ○□△, □△○, ?",
      ja: "次のパターンの?は？ △○□, ○□△, □△○, ?",
      "zh-CN": "以下模式中的?是什么？△○□, ○□△, □△○, ?",
      "zh-TW": "以下模式中的?是什麼？△○□, ○□△, □△○, ?",
      vi: "? trong mẫu sau là gì? △○□, ○□△, □△○, ?",
      id: "Apa ? dalam pola berikut? △○□, ○□△, □△○, ?"
    },
    options: [
      {
        text: {
          ko: "△□○",
          en: "△□○",
          ja: "△□○",
          "zh-CN": "△□○",
          "zh-TW": "△□○",
          vi: "△□○",
          id: "△□○"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "○△□",
          en: "○△□",
          ja: "○△□",
          "zh-CN": "○△□",
          "zh-TW": "○△□",
          vi: "○△□",
          id: "○△□"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "□○△",
          en: "□○△",
          ja: "□○△",
          "zh-CN": "□○△",
          "zh-TW": "□○△",
          vi: "□○△",
          id: "□○△"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "△○□",
          en: "△○□",
          ja: "△○□",
          "zh-CN": "△○□",
          "zh-TW": "△○□",
          vi: "△○□",
          id: "△○□"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "A",
    hint: {
      ko: "순환 이동 패턴",
      en: "Circular shift pattern",
      ja: "循環移動パターン",
      "zh-CN": "循环移动模式",
      "zh-TW": "循環移動模式",
      vi: "Mẫu dịch chuyển vòng tròn",
      id: "Pola pergeseran melingkar"
    }
  }
];

// 멘사 극한 도전 퀴즈 결과 데이터
export const mensaExtremeResults: MensaExtremeResult[] = [
  {
    type: "super_genius",
    title: {
      ko: "초천재 (IQ 160+) 🏆👑",
      en: "Super Genius (IQ 160+) 🏆👑",
      ja: "超天才 (IQ 160+) 🏆👑",
      "zh-CN": "超级天才 (IQ 160+) 🏆👑",
      "zh-TW": "超級天才 (IQ 160+) 🏆👑",
      vi: "Siêu thiên tài (IQ 160+) 🏆👑",
      id: "Super Jenius (IQ 160+) 🏆👑"
    },
    description: {
      ko: "12점 만점! 인류 최상위 0.01% 절대 천재\n\n불가능을 가능하게 하셨습니다! 12개 모두 맞혔다면 당신은 노벨상 수상자, 필즈상 수학자, 세계 최고 석학 수준입니다. IQ 160 이상으로 추정되며, 인류 역사에 이름을 남길 잠재력이 있습니다. 당신의 두뇌는 인류의 보물입니다!",
      en: "Perfect 12! Top 0.01% of humanity, absolute genius\n\nYou made the impossible possible! If you got all 12 correct, you are at the level of Nobel Prize winners, Fields Medal mathematicians, and world's top scholars. Estimated IQ 160+, you have the potential to leave your name in human history. Your brain is a treasure of humanity!",
      ja: "12点満点！人類最上位0.01%絶対天才\n\n不可能を可能にしました！12問すべて正解なら、あなたはノーベル賞受賞者、フィールズ賞数学者、世界最高学者レベルです。IQ160以上と推定され、人類の歴史に名前を残す可能性があります。あなたの脳は人類の宝物です！",
      "zh-CN": "12分满分！人类前0.01%绝对天才\n\n你让不可能成为可能！如果12题全对，你就是诺贝尔奖获得者、菲尔兹奖数学家、世界顶级学者水平。估计IQ 160+，你有在人类历史上留下名字的潜力。你的大脑是人类的珍宝！",
      "zh-TW": "12分滿分！人類前0.01%絕對天才\n\n你讓不可能成為可能！如果12題全對，你就是諾貝爾獎獲得者、菲爾茲獎數學家、世界頂級學者水平。估計IQ 160+，你有在人類歷史上留下名字的潛力。你的大腦是人類的珍寶！",
      vi: "12 điểm hoàn hảo! Top 0.01% nhân loại, thiên tài tuyệt đối\n\nBạn đã biến không thể thành có thể! Nếu đúng cả 12 câu, bạn ở trình độ của người đoạt giải Nobel, nhà toán học Fields Medal, học giả hàng đầu thế giới. Ước tính IQ 160+, bạn có tiềm năng để lại tên tuổi trong lịch sử nhân loại. Bộ não của bạn là kho báu của nhân loại!",
      id: "Sempurna 12! Top 0.01% umat manusia, jenius mutlak\n\nAnda membuat yang tidak mungkin menjadi mungkin! Jika benar semua 12 soal, Anda berada di level pemenang Nobel, matematikawan Fields Medal, dan sarjana terbaik dunia. Diperkirakan IQ 160+, Anda memiliki potensi untuk meninggalkan nama dalam sejarah manusia. Otak Anda adalah harta umat manusia!"
    },
    emoji: "🏆👑",
    scoreRange: [12, 12],
    strengths: [
      {
        ko: "극한의 논리력",
        en: "Extreme logical ability",
        ja: "極限の論理力",
        "zh-CN": "极限逻辑力",
        "zh-TW": "極限邏輯力",
        vi: "Khả năng logic cực hạn",
        id: "Kemampuan logika ekstrem"
      },
      {
        ko: "수학적 천재성",
        en: "Mathematical genius",
        ja: "数学的天才性",
        "zh-CN": "数学天才性",
        "zh-TW": "數學天才性",
        vi: "Thiên tài toán học",
        id: "Jenius matematika"
      },
      {
        ko: "추상적 사고의 정점",
        en: "Peak of abstract thinking",
        ja: "抽象的思考の頂点",
        "zh-CN": "抽象思维的顶峰",
        "zh-TW": "抽象思維的頂峰",
        vi: "Đỉnh cao của tư duy trừu tượng",
        id: "Puncak pemikiran abstrak"
      }
    ],
    recommendations: [
      {
        ko: "학계 연구",
        en: "Academic research",
        ja: "学界研究",
        "zh-CN": "学术研究",
        "zh-TW": "學術研究",
        vi: "Nghiên cứu học thuật",
        id: "Penelitian akademik"
      },
      {
        ko: "수학 연구소",
        en: "Mathematics institute",
        ja: "数学研究所",
        "zh-CN": "数学研究所",
        "zh-TW": "數學研究所",
        vi: "Viện toán học",
        id: "Institut matematika"
      },
      {
        ko: "노벨상 도전",
        en: "Nobel Prize challenge",
        ja: "ノーベル賞挑戦",
        "zh-CN": "诺贝尔奖挑战",
        "zh-TW": "諾貝爾獎挑戰",
        vi: "Thử thách Nobel",
        id: "Tantangan Nobel"
      }
    ],
    advice: {
      ko: "학계나 연구소에서 인류 발전에 기여해주세요!",
      en: "Please contribute to human development in academia or research institutes!",
      ja: "学界や研究所で人類の発展に貢献してください！",
      "zh-CN": "请在学术界或研究所为人类发展做出贡献！",
      "zh-TW": "請在學術界或研究所為人類發展做出貢獻！",
      vi: "Hãy đóng góp cho sự phát triển của nhân loại trong giới học thuật hoặc viện nghiên cứu!",
      id: "Silakan berkontribusi pada pengembangan umat manusia di dunia akademik atau lembaga penelitian!"
    }
  },
  {
    type: "mensa_top",
    title: {
      ko: "멘사 최상위 (IQ 150-159) 🧠⚡",
      en: "Mensa Top (IQ 150-159) 🧠⚡",
      ja: "メンサ最上位 (IQ 150-159) 🧠⚡",
      "zh-CN": "门萨顶级 (IQ 150-159) 🧠⚡",
      "zh-TW": "門薩頂級 (IQ 150-159) 🧠⚡",
      vi: "Mensa Top (IQ 150-159) 🧠⚡",
      id: "Mensa Top (IQ 150-159) 🧠⚡"
    },
    description: {
      ko: "10-11점! 상위 0.1% 슈퍼 천재\n\n거의 완벽합니다! 한두 문제를 놓쳤지만 당신은 분명 천재입니다. IQ 150-159 수준으로, 멘사 회원 중에서도 최상위권입니다. 박사 학위 소지자, 교수, 연구원 수준의 지적 능력을 보유하고 있습니다. 세계 최고 대학에서도 환영받을 수준입니다.",
      en: "10-11 points! Top 0.1% super genius\n\nAlmost perfect! You missed one or two questions but you are clearly a genius. At IQ 150-159 level, you are among the top tier of Mensa members. You have the intellectual ability of PhD holders, professors, and researchers. You are welcome at the world's top universities.",
      ja: "10-11点！上位0.1%スーパー天才\n\nほぼ完璧です！1-2問を間違えましたが、あなたは明らかに天才です。IQ150-159レベルで、メンサ会員の中でも最上位層です。博士号取得者、教授、研究員レベルの知的能力を持っています。世界最高の大学でも歓迎されるレベルです。",
      "zh-CN": "10-11分！前0.1%超级天才\n\n几乎完美！你错过了一两道题，但你显然是天才。在IQ 150-159水平，你是门萨会员中的顶级。你拥有博士、教授、研究员水平的智力能力。你在世界顶级大学也会受到欢迎。",
      "zh-TW": "10-11分！前0.1%超級天才\n\n幾乎完美！你錯過了一兩道題，但你顯然是天才。在IQ 150-159水平，你是門薩會員中的頂級。你擁有博士、教授、研究員水平的智力能力。你在世界頂級大學也會受到歡迎。",
      vi: "10-11 điểm! Top 0.1% siêu thiên tài\n\nGần như hoàn hảo! Bạn đã bỏ lỡ một hoặc hai câu hỏi nhưng bạn rõ ràng là thiên tài. Ở mức IQ 150-159, bạn thuộc tầng lớp cao nhất của thành viên Mensa. Bạn có khả năng trí tuệ của người có bằng tiến sĩ, giáo sư và nhà nghiên cứu. Bạn được chào đón tại các trường đại học hàng đầu thế giới.",
      id: "10-11 poin! Top 0.1% super jenius\n\nHampir sempurna! Anda melewatkan satu atau dua soal tetapi Anda jelas jenius. Pada level IQ 150-159, Anda berada di tingkat teratas anggota Mensa. Anda memiliki kemampuan intelektual setara pemegang PhD, profesor, dan peneliti. Anda disambut di universitas terbaik dunia."
    },
    emoji: "🧠⚡",
    scoreRange: [10, 11],
    strengths: [
      {
        ko: "뛰어난 논리력",
        en: "Excellent logical ability",
        ja: "優れた論理力",
        "zh-CN": "出色的逻辑力",
        "zh-TW": "出色的邏輯力",
        vi: "Khả năng logic xuất sắc",
        id: "Kemampuan logika yang luar biasa"
      },
      {
        ko: "복잡한 문제 해결",
        en: "Complex problem solving",
        ja: "複雑な問題解決",
        "zh-CN": "复杂问题解决",
        "zh-TW": "複雜問題解決",
        vi: "Giải quyết vấn đề phức tạp",
        id: "Pemecahan masalah kompleks"
      },
      {
        ko: "수학적 재능",
        en: "Mathematical talent",
        ja: "数学的才能",
        "zh-CN": "数学天赋",
        "zh-TW": "數學天賦",
        vi: "Tài năng toán học",
        id: "Bakat matematika"
      }
    ],
    recommendations: [
      {
        ko: "전문 분야 연구",
        en: "Professional field research",
        ja: "専門分野研究",
        "zh-CN": "专业领域研究",
        "zh-TW": "專業領域研究",
        vi: "Nghiên cứu lĩnh vực chuyên môn",
        id: "Penelitian bidang profesional"
      },
      {
        ko: "고급 엔지니어링",
        en: "Advanced engineering",
        ja: "高度エンジニアリング",
        "zh-CN": "高级工程",
        "zh-TW": "高級工程",
        vi: "Kỹ thuật cao cấp",
        id: "Teknik tingkat lanjut"
      },
      {
        ko: "학술 논문 작성",
        en: "Academic paper writing",
        ja: "学術論文執筆",
        "zh-CN": "学术论文写作",
        "zh-TW": "學術論文寫作",
        vi: "Viết bài báo học thuật",
        id: "Penulisan makalah akademik"
      }
    ],
    advice: {
      ko: "전문 분야에서 최고가 되세요. 충분한 능력이 있습니다!",
      en: "Become the best in your field. You have sufficient ability!",
      ja: "専門分野で最高になりましょう。十分な能力があります！",
      "zh-CN": "在你的专业领域成为最好。你有足够的能力！",
      "zh-TW": "在你的專業領域成為最好。你有足夠的能力！",
      vi: "Hãy trở thành người giỏi nhất trong lĩnh vực của bạn. Bạn có đủ khả năng!",
      id: "Jadilah yang terbaik di bidang Anda. Anda memiliki kemampuan yang cukup!"
    }
  },
  {
    type: "mensa_level",
    title: {
      ko: "멘사급 천재 (IQ 140-149) 🎯",
      en: "Mensa Level Genius (IQ 140-149) 🎯",
      ja: "メンサ級天才 (IQ 140-149) 🎯",
      "zh-CN": "门萨级天才 (IQ 140-149) 🎯",
      "zh-TW": "門薩級天才 (IQ 140-149) 🎯",
      vi: "Thiên tài cấp Mensa (IQ 140-149) 🎯",
      id: "Jenius Level Mensa (IQ 140-149) 🎯"
    },
    description: {
      ko: "8-9점! 상위 1% 진짜 천재\n\n축하합니다! 당신은 진정한 천재입니다. IQ 140-149 수준으로 멘사 가입이 충분히 가능합니다. 대부분의 사람들이 이해하지 못하는 문제를 풉니다. 학계, 의학, 법조계, 고급 엔지니어링 분야에서 최고가 될 수 있습니다.",
      en: "8-9 points! Top 1% true genius\n\nCongratulations! You are a true genius. At IQ 140-149 level, Mensa membership is fully possible. You solve problems that most people cannot understand. You can become the best in academia, medicine, law, and advanced engineering fields.",
      ja: "8-9点！上位1%真の天才\n\nおめでとうございます！あなたは真の天才です。IQ140-149レベルで、メンサ入会が十分可能です。ほとんどの人が理解できない問題を解きます。学界、医学、法曹界、高度エンジニアリング分野で最高になれます。",
      "zh-CN": "8-9分！前1%真正天才\n\n恭喜！你是真正的天才。在IQ 140-149水平，门萨会员资格完全可能。你解决大多数人无法理解的问题。你可以在学术界、医学、法律、高级工程领域成为最好。",
      "zh-TW": "8-9分！前1%真正天才\n\n恭喜！你是真正的天才。在IQ 140-149水平，門薩會員資格完全可能。你解決大多數人無法理解的問題。你可以在學術界、醫學、法律、高級工程領域成為最好。",
      vi: "8-9 điểm! Top 1% thiên tài thực sự\n\nChúc mừng! Bạn là thiên tài thực sự. Ở mức IQ 140-149, việc gia nhập Mensa hoàn toàn có thể. Bạn giải quyết những vấn đề mà hầu hết mọi người không thể hiểu. Bạn có thể trở thành người giỏi nhất trong giới học thuật, y học, luật và kỹ thuật cao cấp.",
      id: "8-9 poin! Top 1% jenius sejati\n\nSelamat! Anda adalah jenius sejati. Pada level IQ 140-149, keanggotaan Mensa sangat mungkin. Anda memecahkan masalah yang tidak dapat dipahami kebanyakan orang. Anda bisa menjadi yang terbaik di bidang akademik, kedokteran, hukum, dan teknik tingkat lanjut."
    },
    emoji: "🎯",
    scoreRange: [8, 9],
    strengths: [
      {
        ko: "고급 논리력",
        en: "Advanced logical ability",
        ja: "高度な論理力",
        "zh-CN": "高级逻辑力",
        "zh-TW": "高級邏輯力",
        vi: "Khả năng logic cao cấp",
        id: "Kemampuan logika tingkat lanjut"
      },
      {
        ko: "복잡한 추론",
        en: "Complex reasoning",
        ja: "複雑な推論",
        "zh-CN": "复杂推理",
        "zh-TW": "複雜推理",
        vi: "Lý luận phức tạp",
        id: "Penalaran kompleks"
      },
      {
        ko: "수학적 사고",
        en: "Mathematical thinking",
        ja: "数学的思考",
        "zh-CN": "数学思维",
        "zh-TW": "數學思維",
        vi: "Tư duy toán học",
        id: "Pemikiran matematis"
      }
    ],
    recommendations: [
      {
        ko: "멘사 가입",
        en: "Mensa membership",
        ja: "メンサ入会",
        "zh-CN": "门萨会员",
        "zh-TW": "門薩會員",
        vi: "Thành viên Mensa",
        id: "Keanggotaan Mensa"
      },
      {
        ko: "전문직 진출",
        en: "Professional career",
        ja: "専門職進出",
        "zh-CN": "专业职业",
        "zh-TW": "專業職業",
        vi: "Nghề nghiệp chuyên môn",
        id: "Karier profesional"
      },
      {
        ko: "고급 연구",
        en: "Advanced research",
        ja: "高度研究",
        "zh-CN": "高级研究",
        "zh-TW": "高級研究",
        vi: "Nghiên cứu cao cấp",
        id: "Penelitian tingkat lanjut"
      }
    ],
    advice: {
      ko: "멘사 가입을 고려해보세요! 당신은 자격이 충분합니다.",
      en: "Consider joining Mensa! You are fully qualified.",
      ja: "メンサ入会を検討してください！あなたは十分な資格があります。",
      "zh-CN": "考虑加入门萨！你完全有资格。",
      "zh-TW": "考慮加入門薩！你完全有資格。",
      vi: "Hãy cân nhắc gia nhập Mensa! Bạn hoàn toàn đủ điều kiện.",
      id: "Pertimbangkan bergabung dengan Mensa! Anda sepenuhnya memenuhi syarat."
    }
  },
  {
    type: "excellent_intelligence",
    title: {
      ko: "우수한 지능 (IQ 130-139) 💎",
      en: "Excellent Intelligence (IQ 130-139) 💎",
      ja: "優秀な知能 (IQ 130-139) 💎",
      "zh-CN": "优秀智力 (IQ 130-139) 💎",
      "zh-TW": "優秀智力 (IQ 130-139) 💎",
      vi: "Trí thông minh xuất sắc (IQ 130-139) 💎",
      id: "Kecerdasan Luar Biasa (IQ 130-139) 💎"
    },
    description: {
      ko: "6-7점! 상위 3% 매우 우수\n\n절반 이상 맞혔습니다! 당신은 확실히 평균 이상입니다. IQ 130-139 수준으로 대학원 수준의 문제를 해결할 수 있습니다. 전문직에 종사하거나 고급 기술 분야에서 일할 수 있는 능력이 있습니다. 계속 훈련하면 더 높은 경지에 도달할 수 있습니다.",
      en: "6-7 points! Top 3% very excellent\n\nYou got more than half right! You are definitely above average. At IQ 130-139 level, you can solve graduate-level problems. You have the ability to work in professional fields or advanced technology sectors. With continued training, you can reach higher levels.",
      ja: "6-7点！上位3%非常に優秀\n\n半分以上正解しました！あなたは確実に平均以上です。IQ130-139レベルで、大学院レベルの問題を解決できます。専門職に従事したり、高度技術分野で働く能力があります。継続的な訓練でより高い境地に到達できます。",
      "zh-CN": "6-7分！前3%非常优秀\n\n你答对了一半以上！你确实高于平均水平。在IQ 130-139水平，你能解决研究生水平的问题。你有从事专业工作或高级技术领域的能力。通过持续训练，你能达到更高境界。",
      "zh-TW": "6-7分！前3%非常優秀\n\n你答對了一半以上！你確實高於平均水平。在IQ 130-139水平，你能解決研究生水平的問題。你有從事專業工作或高級技術領域的能力。通過持續訓練，你能達到更高境界。",
      vi: "6-7 điểm! Top 3% rất xuất sắc\n\nBạn đã trả lời đúng hơn một nửa! Bạn chắc chắn trên mức trung bình. Ở mức IQ 130-139, bạn có thể giải quyết các vấn đề ở trình độ sau đại học. Bạn có khả năng làm việc trong các lĩnh vực chuyên môn hoặc công nghệ cao. Với việc rèn luyện liên tục, bạn có thể đạt đến trình độ cao hơn.",
      id: "6-7 poin! Top 3% sangat luar biasa\n\nAnda menjawab benar lebih dari setengah! Anda pasti di atas rata-rata. Pada level IQ 130-139, Anda dapat memecahkan masalah tingkat pascasarjana. Anda memiliki kemampuan untuk bekerja di bidang profesional atau teknologi canggih. Dengan latihan berkelanjutan, Anda dapat mencapai level yang lebih tinggi."
    },
    emoji: "💎",
    scoreRange: [6, 7],
    strengths: [
      {
        ko: "우수한 논리력",
        en: "Excellent logical ability",
        ja: "優秀な論理力",
        "zh-CN": "优秀逻辑力",
        "zh-TW": "優秀邏輯力",
        vi: "Khả năng logic xuất sắc",
        id: "Kemampuan logika yang sangat baik"
      },
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
        ko: "분석적 사고",
        en: "Analytical thinking",
        ja: "分析的思考",
        "zh-CN": "分析思维",
        "zh-TW": "分析思維",
        vi: "Tư duy phân tích",
        id: "Pemikiran analitis"
      }
    ],
    recommendations: [
      {
        ko: "대학원 진학",
        en: "Graduate school",
        ja: "大学院進学",
        "zh-CN": "研究生院",
        "zh-TW": "研究生院",
        vi: "Học sau đại học",
        id: "Sekolah pascasarjana"
      },
      {
        ko: "전문 자격증",
        en: "Professional certification",
        ja: "専門資格",
        "zh-CN": "专业资格",
        "zh-TW": "專業資格",
        vi: "Chứng chỉ chuyên môn",
        id: "Sertifikasi profesional"
      },
      {
        ko: "고급 기술 분야",
        en: "Advanced technology field",
        ja: "高度技術分野",
        "zh-CN": "高级技术领域",
        "zh-TW": "高級技術領域",
        vi: "Lĩnh vực công nghệ cao",
        id: "Bidang teknologi canggih"
      }
    ],
    advice: {
      ko: "꾸준히 도전하세요. 상위 1%도 가능합니다!",
      en: "Keep challenging yourself. Top 1% is possible!",
      ja: "継続的に挑戦してください。上位1%も可能です！",
      "zh-CN": "继续挑战。前1%也是可能的！",
      "zh-TW": "繼續挑戰。前1%也是可能的！",
      vi: "Hãy tiếp tục thách thức bản thân. Top 1% cũng có thể!",
      id: "Terus tantang diri sendiri. Top 1% juga mungkin!"
    }
  },
  {
    type: "above_average",
    title: {
      ko: "평균 이상 (IQ 115-129) ⭐",
      en: "Above Average (IQ 115-129) ⭐",
      ja: "平均以上 (IQ 115-129) ⭐",
      "zh-CN": "高于平均 (IQ 115-129) ⭐",
      "zh-TW": "高於平均 (IQ 115-129) ⭐",
      vi: "Trên trung bình (IQ 115-129) ⭐",
      id: "Di Atas Rata-rata (IQ 115-129) ⭐"
    },
    description: {
      ko: "4-5점! 상위 15% 준수한 수준\n\n이 어려운 문제들 중 몇 개를 맞혔다는 것 자체가 대단합니다! IQ 115-129 수준으로 평균보다 확실히 높습니다. 대학 교육을 받고 전문 분야에서 일할 수 있는 지적 능력이 있습니다. 논리 훈련으로 더 발전할 수 있습니다.",
      en: "4-5 points! Top 15% decent level\n\nIt's amazing that you got some of these difficult problems right! At IQ 115-129 level, you are definitely above average. You have the intellectual ability to receive college education and work in professional fields. You can develop further through logic training.",
      ja: "4-5点！上位15%まあまあのレベル\n\nこんな難しい問題のうちいくつかを正解したこと自体が素晴らしいです！IQ115-129レベルで、平均より確実に高いです。大学教育を受け、専門分野で働く知的能力があります。論理訓練でさらに発展できます。",
      "zh-CN": "4-5分！前15%不错水平\n\n你能答对这些困难问题中的几个已经很棒了！在IQ 115-129水平，你确实高于平均水平。你有接受大学教育并在专业领域工作的智力能力。通过逻辑训练可以进一步发展。",
      "zh-TW": "4-5分！前15%不錯水平\n\n你能答對這些困難問題中的幾個已經很棒了！在IQ 115-129水平，你確實高於平均水平。你有接受大學教育並在專業領域工作的智力能力。通過邏輯訓練可以進一步發展。",
      vi: "4-5 điểm! Top 15% mức độ khá\n\nThật tuyệt vời khi bạn trả lời đúng một số câu hỏi khó này! Ở mức IQ 115-129, bạn chắc chắn trên mức trung bình. Bạn có khả năng trí tuệ để nhận giáo dục đại học và làm việc trong các lĩnh vực chuyên môn. Bạn có thể phát triển thêm thông qua rèn luyện logic.",
      id: "4-5 poin! Top 15% level yang cukup baik\n\nLuar biasa bahwa Anda menjawab benar beberapa soal sulit ini! Pada level IQ 115-129, Anda pasti di atas rata-rata. Anda memiliki kemampuan intelektual untuk menerima pendidikan perguruan tinggi dan bekerja di bidang profesional. Anda dapat berkembang lebih lanjut melalui latihan logika."
    },
    emoji: "⭐",
    scoreRange: [4, 5],
    strengths: [
      {
        ko: "좋은 학습 능력",
        en: "Good learning ability",
        ja: "良い学習能力",
        "zh-CN": "良好学习能力",
        "zh-TW": "良好學習能力",
        vi: "Khả năng học tập tốt",
        id: "Kemampuan belajar yang baik"
      },
      {
        ko: "논리적 사고",
        en: "Logical thinking",
        ja: "論理的思考",
        "zh-CN": "逻辑思维",
        "zh-TW": "邏輯思維",
        vi: "Tư duy logic",
        id: "Pemikiran logis"
      },
      {
        ko: "문제 해결",
        en: "Problem solving",
        ja: "問題解決",
        "zh-CN": "问题解决",
        "zh-TW": "問題解決",
        vi: "Giải quyết vấn đề",
        id: "Pemecahan masalah"
      }
    ],
    recommendations: [
      {
        ko: "논리 퍼즐",
        en: "Logic puzzles",
        ja: "論理パズル",
        "zh-CN": "逻辑谜题",
        "zh-TW": "邏輯謎題",
        vi: "Câu đố logic",
        id: "Teka-teki logika"
      },
      {
        ko: "수학 학습",
        en: "Math learning",
        ja: "数学学習",
        "zh-CN": "数学学习",
        "zh-TW": "數學學習",
        vi: "Học toán",
        id: "Belajar matematika"
      },
      {
        ko: "두뇌 훈련",
        en: "Brain training",
        ja: "脳トレーニング",
        "zh-CN": "大脑训练",
        "zh-TW": "大腦訓練",
        vi: "Rèn luyện não",
        id: "Latihan otak"
      }
    ],
    advice: {
      ko: "이런 어려운 문제에 도전하는 것 자체가 발전입니다!",
      en: "Challenging yourself with such difficult problems itself is development!",
      ja: "こんな難しい問題に挑戦すること自体が発展です！",
      "zh-CN": "挑战这样困难的问题本身就是发展！",
      "zh-TW": "挑戰這樣困難的問題本身就是發展！",
      vi: "Việc thách thức bản thân với những vấn đề khó như vậy chính là phát triển!",
      id: "Menantang diri sendiri dengan masalah sulit seperti ini sendiri adalah pengembangan!"
    }
  },
  {
    type: "general_level",
    title: {
      ko: "일반 수준 (IQ 100-114) 💪",
      en: "General Level (IQ 100-114) 💪",
      ja: "一般レベル (IQ 100-114) 💪",
      "zh-CN": "一般水平 (IQ 100-114) 💪",
      "zh-TW": "一般水平 (IQ 100-114) 💪",
      vi: "Mức độ chung (IQ 100-114) 💪",
      id: "Level Umum (IQ 100-114) 💪"
    },
    description: {
      ko: "0-3점! 용감한 도전자\n\n이 문제들은 정말 어렵습니다. 멘사 회원들도 어려워하는 문제들입니다. 0-3개 맞혔다면 당신은 일반적인 수준이지만, 포기하지 않고 도전한 용기가 대단합니다. IQ는 고정되지 않으며 훈련으로 향상될 수 있습니다.",
      en: "0-3 points! Brave challenger\n\nThese problems are really difficult. Even Mensa members find them challenging. If you got 0-3 correct, you are at a general level, but your courage to challenge without giving up is amazing. IQ is not fixed and can be improved through training.",
      ja: "0-3点！勇敢な挑戦者\n\nこれらの問題は本当に難しいです。メンサ会員も困難に感じる問題です。0-3問正解なら、あなたは一般的なレベルですが、諦めずに挑戦した勇気は素晴らしいです。IQは固定されておらず、訓練で向上できます。",
      "zh-CN": "0-3分！勇敢的挑战者\n\n这些问题真的很难。连门萨会员都觉得困难。如果你答对了0-3题，你是一般水平，但你不放弃挑战的勇气很棒。IQ不是固定的，可以通过训练提高。",
      "zh-TW": "0-3分！勇敢的挑戰者\n\n這些問題真的很難。連門薩會員都覺得困難。如果你答對了0-3題，你是一般水平，但你不放棄挑戰的勇氣很棒。IQ不是固定的，可以通過訓練提高。",
      vi: "0-3 điểm! Người thách thức dũng cảm\n\nNhững vấn đề này thực sự rất khó. Ngay cả các thành viên Mensa cũng thấy chúng khó khăn. Nếu bạn trả lời đúng 0-3 câu, bạn ở mức độ chung, nhưng lòng dũng cảm khi thách thức mà không bỏ cuộc thật tuyệt vời. IQ không cố định và có thể cải thiện thông qua rèn luyện.",
      id: "0-3 poin! Penantang berani\n\nSoal-soal ini benar-benar sulit. Bahkan anggota Mensa pun merasa kesulitan. Jika Anda menjawab benar 0-3 soal, Anda berada di level umum, tetapi keberanian Anda untuk menantang tanpa menyerah luar biasa. IQ tidak tetap dan dapat ditingkatkan melalui latihan."
    },
    emoji: "💪",
    scoreRange: [0, 3],
    strengths: [
      {
        ko: "평균 수준",
        en: "Average level",
        ja: "平均レベル",
        "zh-CN": "平均水平",
        "zh-TW": "平均水平",
        vi: "Mức trung bình",
        id: "Level rata-rata"
      },
      {
        ko: "발전 가능성",
        en: "Development potential",
        ja: "発展可能性",
        "zh-CN": "发展潜力",
        "zh-TW": "發展潛力",
        vi: "Tiềm năng phát triển",
        id: "Potensi pengembangan"
      }
    ],
    recommendations: [
      {
        ko: "기초 논리",
        en: "Basic logic",
        ja: "基礎論理",
        "zh-CN": "基础逻辑",
        "zh-TW": "基礎邏輯",
        vi: "Logic cơ bản",
        id: "Logika dasar"
      },
      {
        ko: "쉬운 수학",
        en: "Easy math",
        ja: "簡単な数学",
        "zh-CN": "简单数学",
        "zh-TW": "簡單數學",
        vi: "Toán học dễ",
        id: "Matematika mudah"
      },
      {
        ko: "패턴 인식",
        en: "Pattern recognition",
        ja: "パターン認識",
        "zh-CN": "模式识别",
        "zh-TW": "模式識別",
        vi: "Nhận dạng mẫu",
        id: "Pengenalan pola"
      }
    ],
    advice: {
      ko: "쉬운 문제부터 단계적으로 훈련하세요. 충분히 발전할 수 있습니다!",
      en: "Start with easy problems and train step by step. You can develop sufficiently!",
      ja: "簡単な問題から段階的に訓練してください。十分に発展できます！",
      "zh-CN": "从简单问题开始逐步训练。你可以充分发展！",
      "zh-TW": "從簡單問題開始逐步訓練。你可以充分發展！",
      vi: "Hãy bắt đầu với những vấn đề dễ và rèn luyện từng bước. Bạn có thể phát triển đủ!",
      id: "Mulai dengan masalah mudah dan latih langkah demi langkah. Anda bisa berkembang dengan cukup!"
    }
  }
];

// 점수 계산 함수
export const calculateMensaExtremeResult = (answers: boolean[]): string => {
  const correctCount = answers.filter(answer => answer).length;
  
  if (correctCount === 12) return "super_genius";
  if (correctCount >= 10) return "mensa_top";
  if (correctCount >= 8) return "mensa_level";
  if (correctCount >= 6) return "excellent_intelligence";
  if (correctCount >= 4) return "above_average";
  return "general_level";
};
