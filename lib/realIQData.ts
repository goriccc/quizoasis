// 실제 IQ 테스트 데이터 타입 정의
export interface RealIQQuestion {
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

export interface RealIQResult {
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

// 실제 IQ 테스트 질문 데이터
export const realIQQuestions: RealIQQuestion[] = [
  {
    id: 1,
    question: {
      ko: "다음 수열에서 ?에 들어갈 숫자는? 2, 4, 6, 8, ?",
      en: "What number should go in the ? in the sequence? 2, 4, 6, 8, ?",
      ja: "次の数列で？に入る数字は？ 2, 4, 6, 8, ?",
      "zh-CN": "在以下数列中，？应该填入什么数字？ 2, 4, 6, 8, ?",
      "zh-TW": "在以下數列中，？應該填入什麼數字？ 2, 4, 6, 8, ?",
      vi: "Trong dãy số sau, số nào nên điền vào ? 2, 4, 6, 8, ?",
      id: "Dalam deret angka berikut, angka berapa yang harus dimasukkan ke ? 2, 4, 6, 8, ?"
    },
    options: [
      {
        text: {
          ko: "9",
          en: "9",
          ja: "9",
          "zh-CN": "9",
          "zh-TW": "9",
          vi: "9",
          id: "9"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "10",
          en: "10",
          ja: "10",
          "zh-CN": "10",
          "zh-TW": "10",
          vi: "10",
          id: "10"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "11",
          en: "11",
          ja: "11",
          "zh-CN": "11",
          "zh-TW": "11",
          vi: "11",
          id: "11"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "12",
          en: "12",
          ja: "12",
          "zh-CN": "12",
          "zh-TW": "12",
          vi: "12",
          id: "12"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "짝수 수열, +2씩 증가",
      en: "Even number sequence, increasing by +2",
      ja: "偶数数列、+2ずつ増加",
      "zh-CN": "偶数数列，每次增加+2",
      "zh-TW": "偶數數列，每次增加+2",
      vi: "Dãy số chẵn, tăng +2 mỗi lần",
      id: "Deret angka genap, bertambah +2 setiap kali"
    }
  },
  {
    id: 2,
    question: {
      ko: "\"모든 A는 B이다. 일부 B는 C이다.\" 다음 중 반드시 참인 것은?",
      en: "\"All A are B. Some B are C.\" Which of the following must be true?",
      ja: "\"すべてのAはBである。一部のBはCである。\" 次のうち必ず真であるものは？",
      "zh-CN": "\"所有A都是B。一些B是C。\" 以下哪个必须为真？",
      "zh-TW": "\"所有A都是B。一些B是C。\" 以下哪個必須為真？",
      vi: "\"Tất cả A là B. Một số B là C.\" Điều nào sau đây chắc chắn đúng?",
      id: "\"Semua A adalah B. Beberapa B adalah C.\" Mana yang pasti benar?"
    },
    options: [
      {
        text: {
          ko: "모든 A는 C이다",
          en: "All A are C",
          ja: "すべてのAはCである",
          "zh-CN": "所有A都是C",
          "zh-TW": "所有A都是C",
          vi: "Tất cả A là C",
          id: "Semua A adalah C"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "일부 A는 C이다",
          en: "Some A are C",
          ja: "一部のAはCである",
          "zh-CN": "一些A是C",
          "zh-TW": "一些A是C",
          vi: "Một số A là C",
          id: "Beberapa A adalah C"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "모든 C는 A이다",
          en: "All C are A",
          ja: "すべてのCはAである",
          "zh-CN": "所有C都是A",
          "zh-TW": "所有C都是A",
          vi: "Tất cả C là A",
          id: "Semua C adalah A"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "위 모두 틀림",
          en: "All of the above are wrong",
          ja: "上記すべて間違い",
          "zh-CN": "以上都错",
          "zh-TW": "以上都錯",
          vi: "Tất cả trên đều sai",
          id: "Semua di atas salah"
        },
        isCorrect: true
      }
    ],
    correctAnswer: "D",
    hint: {
      ko: "A와 C의 관계는 알 수 없음",
      en: "The relationship between A and C cannot be determined",
      ja: "AとCの関係はわからない",
      "zh-CN": "A和C的关系无法确定",
      "zh-TW": "A和C的關係無法確定",
      vi: "Mối quan hệ giữa A và C không thể xác định",
      id: "Hubungan antara A dan C tidak dapat ditentukan"
    }
  },
  {
    id: 3,
    question: {
      ko: "12 ÷ 3 + 5 × 2 = ?",
      en: "12 ÷ 3 + 5 × 2 = ?",
      ja: "12 ÷ 3 + 5 × 2 = ?",
      "zh-CN": "12 ÷ 3 + 5 × 2 = ?",
      "zh-TW": "12 ÷ 3 + 5 × 2 = ?",
      vi: "12 ÷ 3 + 5 × 2 = ?",
      id: "12 ÷ 3 + 5 × 2 = ?"
    },
    options: [
      {
        text: {
          ko: "11",
          en: "11",
          ja: "11",
          "zh-CN": "11",
          "zh-TW": "11",
          vi: "11",
          id: "11"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "14",
          en: "14",
          ja: "14",
          "zh-CN": "14",
          "zh-TW": "14",
          vi: "14",
          id: "14"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "16",
          en: "16",
          ja: "16",
          "zh-CN": "16",
          "zh-TW": "16",
          vi: "16",
          id: "16"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "22",
          en: "22",
          ja: "22",
          "zh-CN": "22",
          "zh-TW": "22",
          vi: "22",
          id: "22"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "4 + 10 = 14, 곱셈/나눗셈 먼저",
      en: "4 + 10 = 14, multiplication/division first",
      ja: "4 + 10 = 14、掛け算/割り算が先",
      "zh-CN": "4 + 10 = 14，乘除优先",
      "zh-TW": "4 + 10 = 14，乘除優先",
      vi: "4 + 10 = 14, nhân/chia trước",
      id: "4 + 10 = 14, perkalian/pembagian dulu"
    }
  },
  {
    id: 4,
    question: {
      ko: "다음 중 나머지와 다른 하나는?",
      en: "Which one is different from the others?",
      ja: "次のうち他のものと違うのは？",
      "zh-CN": "以下哪个与其他不同？",
      "zh-TW": "以下哪個與其他不同？",
      vi: "Cái nào khác với những cái còn lại?",
      id: "Mana yang berbeda dari yang lain?"
    },
    options: [
      {
        text: {
          ko: "삼각형",
          en: "Triangle",
          ja: "三角形",
          "zh-CN": "三角形",
          "zh-TW": "三角形",
          vi: "Tam giác",
          id: "Segitiga"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "정사각형",
          en: "Square",
          ja: "正方形",
          "zh-CN": "正方形",
          "zh-TW": "正方形",
          vi: "Hình vuông",
          id: "Persegi"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "원",
          en: "Circle",
          ja: "円",
          "zh-CN": "圆形",
          "zh-TW": "圓形",
          vi: "Hình tròn",
          id: "Lingkaran"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "직사각형",
          en: "Rectangle",
          ja: "長方形",
          "zh-CN": "长方形",
          "zh-TW": "長方形",
          vi: "Hình chữ nhật",
          id: "Persegi panjang"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "원만 각이 없음",
      en: "Only circle has no angles",
      ja: "円だけ角がない",
      "zh-CN": "只有圆形没有角",
      "zh-TW": "只有圓形沒有角",
      vi: "Chỉ có hình tròn không có góc",
      id: "Hanya lingkaran yang tidak memiliki sudut"
    }
  },
  {
    id: 5,
    question: {
      ko: "1, 1, 2, 3, 5, 8, 13, ? (다음 숫자는?)",
      en: "1, 1, 2, 3, 5, 8, 13, ? (Next number?)",
      ja: "1, 1, 2, 3, 5, 8, 13, ? (次の数字は？)",
      "zh-CN": "1, 1, 2, 3, 5, 8, 13, ? (下一个数字？)",
      "zh-TW": "1, 1, 2, 3, 5, 8, 13, ? (下一個數字？)",
      vi: "1, 1, 2, 3, 5, 8, 13, ? (Số tiếp theo?)",
      id: "1, 1, 2, 3, 5, 8, 13, ? (Angka selanjutnya?)"
    },
    options: [
      {
        text: {
          ko: "18",
          en: "18",
          ja: "18",
          "zh-CN": "18",
          "zh-TW": "18",
          vi: "18",
          id: "18"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "19",
          en: "19",
          ja: "19",
          "zh-CN": "19",
          "zh-TW": "19",
          vi: "19",
          id: "19"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "20",
          en: "20",
          ja: "20",
          "zh-CN": "20",
          "zh-TW": "20",
          vi: "20",
          id: "20"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "21",
          en: "21",
          ja: "21",
          "zh-CN": "21",
          "zh-TW": "21",
          vi: "21",
          id: "21"
        },
        isCorrect: true
      }
    ],
    correctAnswer: "D",
    hint: {
      ko: "피보나치 수열, 앞 두 수의 합",
      en: "Fibonacci sequence, sum of previous two numbers",
      ja: "フィボナッチ数列、前の2つの数の和",
      "zh-CN": "斐波那契数列，前两个数的和",
      "zh-TW": "斐波那契數列，前兩個數的和",
      vi: "Dãy Fibonacci, tổng của hai số trước",
      id: "Deret Fibonacci, jumlah dua angka sebelumnya"
    }
  },
  {
    id: 6,
    question: {
      ko: "A는 B보다 크고, C는 B보다 작다. A와 C 중 누가 더 큰가?",
      en: "A is larger than B, and C is smaller than B. Which is larger between A and C?",
      ja: "AはBより大きく、CはBより小さい。AとCのどちらがより大きいか？",
      "zh-CN": "A比B大，C比B小。A和C中谁更大？",
      "zh-TW": "A比B大，C比B小。A和C中誰更大？",
      vi: "A lớn hơn B, và C nhỏ hơn B. A và C cái nào lớn hơn?",
      id: "A lebih besar dari B, dan C lebih kecil dari B. Mana yang lebih besar antara A dan C?"
    },
    options: [
      {
        text: {
          ko: "A가 더 크다",
          en: "A is larger",
          ja: "Aの方が大きい",
          "zh-CN": "A更大",
          "zh-TW": "A更大",
          vi: "A lớn hơn",
          id: "A lebih besar"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "C가 더 크다",
          en: "C is larger",
          ja: "Cの方が大きい",
          "zh-CN": "C更大",
          "zh-TW": "C更大",
          vi: "C lớn hơn",
          id: "C lebih besar"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "같다",
          en: "Same",
          ja: "同じ",
          "zh-CN": "一样",
          "zh-TW": "一樣",
          vi: "Bằng nhau",
          id: "Sama"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "알 수 없다",
          en: "Cannot be determined",
          ja: "わからない",
          "zh-CN": "无法确定",
          "zh-TW": "無法確定",
          vi: "Không thể xác định",
          id: "Tidak dapat ditentukan"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "A",
    hint: {
      ko: "A > B > C이므로 A > C",
      en: "A > B > C, so A > C",
      ja: "A > B > CなのでA > C",
      "zh-CN": "A > B > C，所以A > C",
      "zh-TW": "A > B > C，所以A > C",
      vi: "A > B > C nên A > C",
      id: "A > B > C jadi A > C"
    }
  },
  {
    id: 7,
    question: {
      ko: "어떤 수의 3배에서 7을 빼면 20이 된다. 이 수는?",
      en: "If 7 is subtracted from 3 times a number, the result is 20. What is this number?",
      ja: "ある数の3倍から7を引くと20になる。この数は？",
      "zh-CN": "一个数的3倍减去7等于20。这个数是多少？",
      "zh-TW": "一個數的3倍減去7等於20。這個數是多少？",
      vi: "Nếu lấy 3 lần một số trừ đi 7 thì được 20. Số này là bao nhiêu?",
      id: "Jika 3 kali suatu bilangan dikurangi 7 hasilnya 20. Berapa bilangan ini?"
    },
    options: [
      {
        text: {
          ko: "7",
          en: "7",
          ja: "7",
          "zh-CN": "7",
          "zh-TW": "7",
          vi: "7",
          id: "7"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "8",
          en: "8",
          ja: "8",
          "zh-CN": "8",
          "zh-TW": "8",
          vi: "8",
          id: "8"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "9",
          en: "9",
          ja: "9",
          "zh-CN": "9",
          "zh-TW": "9",
          vi: "9",
          id: "9"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "10",
          en: "10",
          ja: "10",
          "zh-CN": "10",
          "zh-TW": "10",
          vi: "10",
          id: "10"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "(20+7)÷3 = 9",
      en: "(20+7)÷3 = 9",
      ja: "(20+7)÷3 = 9",
      "zh-CN": "(20+7)÷3 = 9",
      "zh-TW": "(20+7)÷3 = 9",
      vi: "(20+7)÷3 = 9",
      id: "(20+7)÷3 = 9"
    }
  },
  {
    id: 8,
    question: {
      ko: "2, 6, 12, 20, 30, ? (다음 숫자는?)",
      en: "2, 6, 12, 20, 30, ? (Next number?)",
      ja: "2, 6, 12, 20, 30, ? (次の数字は？)",
      "zh-CN": "2, 6, 12, 20, 30, ? (下一个数字？)",
      "zh-TW": "2, 6, 12, 20, 30, ? (下一個數字？)",
      vi: "2, 6, 12, 20, 30, ? (Số tiếp theo?)",
      id: "2, 6, 12, 20, 30, ? (Angka selanjutnya?)"
    },
    options: [
      {
        text: {
          ko: "40",
          en: "40",
          ja: "40",
          "zh-CN": "40",
          "zh-TW": "40",
          vi: "40",
          id: "40"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "42",
          en: "42",
          ja: "42",
          "zh-CN": "42",
          "zh-TW": "42",
          vi: "42",
          id: "42"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "44",
          en: "44",
          ja: "44",
          "zh-CN": "44",
          "zh-TW": "44",
          vi: "44",
          id: "44"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "48",
          en: "48",
          ja: "48",
          "zh-CN": "48",
          "zh-TW": "48",
          vi: "48",
          id: "48"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "차이가 4, 6, 8, 10, 12... 등차수열",
      en: "Differences are 4, 6, 8, 10, 12... arithmetic sequence",
      ja: "差は4, 6, 8, 10, 12... 等差数列",
      "zh-CN": "差是4, 6, 8, 10, 12... 等差数列",
      "zh-TW": "差是4, 6, 8, 10, 12... 等差數列",
      vi: "Hiệu là 4, 6, 8, 10, 12... cấp số cộng",
      id: "Selisih 4, 6, 8, 10, 12... deret aritmatika"
    }
  },
  {
    id: 9,
    question: {
      ko: "정육면체의 모든 면에 색칠한 후, 같은 크기의 작은 정육면체 27개로 자릅니다. 2개 면만 색칠된 작은 정육면체는 몇 개?",
      en: "After coloring all faces of a cube, it is cut into 27 small cubes of the same size. How many small cubes have only 2 faces colored?",
      ja: "立方体のすべての面を色塗りした後、同じ大きさの小さな立方体27個に切ります。2つの面だけ色が塗られた小さな立方体はいくつ？",
      "zh-CN": "给立方体的所有面涂色后，将其切成27个相同大小的小立方体。有多少个小立方体只有2个面被涂色？",
      "zh-TW": "給立方體的所有面塗色後，將其切成27個相同大小的小立方體。有多少個小立方體只有2個面被塗色？",
      vi: "Sau khi tô màu tất cả các mặt của hình lập phương, cắt thành 27 hình lập phương nhỏ cùng kích thước. Có bao nhiêu hình lập phương nhỏ chỉ có 2 mặt được tô màu?",
      id: "Setelah mewarnai semua sisi kubus, dipotong menjadi 27 kubus kecil berukuran sama. Berapa kubus kecil yang hanya memiliki 2 sisi berwarna?"
    },
    options: [
      {
        text: {
          ko: "8개",
          en: "8",
          ja: "8個",
          "zh-CN": "8个",
          "zh-TW": "8個",
          vi: "8 cái",
          id: "8"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "12개",
          en: "12",
          ja: "12個",
          "zh-CN": "12个",
          "zh-TW": "12個",
          vi: "12 cái",
          id: "12"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "16개",
          en: "16",
          ja: "16個",
          "zh-CN": "16个",
          "zh-TW": "16個",
          vi: "16 cái",
          id: "16"
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
          vi: "24 cái",
          id: "24"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "모서리 중앙, 3×4=12개",
      en: "Edge centers, 3×4=12",
      ja: "辺の中央、3×4=12個",
      "zh-CN": "边缘中心，3×4=12个",
      "zh-TW": "邊緣中心，3×4=12個",
      vi: "Trung tâm cạnh, 3×4=12 cái",
      id: "Pusat tepi, 3×4=12"
    }
  },
  {
    id: 10,
    question: {
      ko: "\"A이면 B이다\"가 참일 때, 다음 중 반드시 참인 것은?",
      en: "When \"If A then B\" is true, which of the following must be true?",
      ja: "「AならばBである」が真のとき、次のうち必ず真であるものは？",
      "zh-CN": "当\"如果A则B\"为真时，以下哪个必然为真？",
      "zh-TW": "當\"如果A則B\"為真時，以下哪個必然為真？",
      vi: "Khi \"Nếu A thì B\" là đúng, cái nào sau đây chắc chắn đúng?",
      id: "Ketika \"Jika A maka B\" benar, manakah yang pasti benar?"
    },
    options: [
      {
        text: {
          ko: "B이면 A이다",
          en: "If B then A",
          ja: "BならばAである",
          "zh-CN": "如果B则A",
          "zh-TW": "如果B則A",
          vi: "Nếu B thì A",
          id: "Jika B maka A"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "A가 아니면 B가 아니다",
          en: "If not A then not B",
          ja: "AでなければBではない",
          "zh-CN": "如果非A则非B",
          "zh-TW": "如果非A則非B",
          vi: "Nếu không A thì không B",
          id: "Jika bukan A maka bukan B"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "B가 아니면 A가 아니다",
          en: "If not B then not A",
          ja: "BでなければAではない",
          "zh-CN": "如果非B则非A",
          "zh-TW": "如果非B則非A",
          vi: "Nếu không B thì không A",
          id: "Jika bukan B maka bukan A"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "위 모두 틀림",
          en: "All of the above are wrong",
          ja: "上記すべて間違い",
          "zh-CN": "以上都错",
          "zh-TW": "以上都錯",
          vi: "Tất cả trên đều sai",
          id: "Semua di atas salah"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "대우 명제는 원명제와 동치",
      en: "Contrapositive is equivalent to original proposition",
      ja: "対偶命題は元の命題と同値",
      "zh-CN": "逆否命题与原命题等价",
      "zh-TW": "逆否命題與原命題等價",
      vi: "Mệnh đề đảo ngược tương đương với mệnh đề gốc",
      id: "Kontrapositif setara dengan proposisi asli"
    }
  },
  {
    id: 11,
    question: {
      ko: "1, 4, 9, 16, 25, 36, ? 다음 패턴은?",
      en: "1, 4, 9, 16, 25, 36, ? What is the next pattern?",
      ja: "1, 4, 9, 16, 25, 36, ? 次のパターンは？",
      "zh-CN": "1, 4, 9, 16, 25, 36, ? 下一个模式是什么？",
      "zh-TW": "1, 4, 9, 16, 25, 36, ? 下一個模式是什麼？",
      vi: "1, 4, 9, 16, 25, 36, ? Mẫu tiếp theo là gì?",
      id: "1, 4, 9, 16, 25, 36, ? Pola selanjutnya adalah?"
    },
    options: [
      {
        text: {
          ko: "42",
          en: "42",
          ja: "42",
          "zh-CN": "42",
          "zh-TW": "42",
          vi: "42",
          id: "42"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "45",
          en: "45",
          ja: "45",
          "zh-CN": "45",
          "zh-TW": "45",
          vi: "45",
          id: "45"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "49",
          en: "49",
          ja: "49",
          "zh-CN": "49",
          "zh-TW": "49",
          vi: "49",
          id: "49"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "64",
          en: "64",
          ja: "64",
          "zh-CN": "64",
          "zh-TW": "64",
          vi: "64",
          id: "64"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "제곱수: 1², 2², 3², 4², 5², 6², 7²=49",
      en: "Square numbers: 1², 2², 3², 4², 5², 6², 7²=49",
      ja: "平方数: 1², 2², 3², 4², 5², 6², 7²=49",
      "zh-CN": "平方数: 1², 2², 3², 4², 5², 6², 7²=49",
      "zh-TW": "平方數: 1², 2², 3², 4², 5², 6², 7²=49",
      vi: "Số bình phương: 1², 2², 3², 4², 5², 6², 7²=49",
      id: "Bilangan kuadrat: 1², 2², 3², 4², 5², 6², 7²=49"
    }
  },
  {
    id: 12,
    question: {
      ko: "5명이 토너먼트 대진을 합니다. 우승자를 가리기 위해 필요한 최소 경기 수는?",
      en: "5 people participate in a tournament. What is the minimum number of matches needed to determine the winner?",
      ja: "5人がトーナメントに参加します。優勝者を決めるのに必要な最小試合数は？",
      "zh-CN": "5个人参加锦标赛。确定获胜者所需的最少比赛数是多少？",
      "zh-TW": "5個人參加錦標賽。確定獲勝者所需的最少比賽數是多少？",
      vi: "5 người tham gia giải đấu loại trực tiếp. Số trận đấu tối thiểu cần thiết để xác định người thắng là bao nhiêu?",
      id: "5 orang berpartisipasi dalam turnamen. Berapa jumlah pertandingan minimum yang dibutuhkan untuk menentukan pemenang?"
    },
    options: [
      {
        text: {
          ko: "3경기",
          en: "3 matches",
          ja: "3試合",
          "zh-CN": "3场比赛",
          "zh-TW": "3場比賽",
          vi: "3 trận",
          id: "3 pertandingan"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "4경기",
          en: "4 matches",
          ja: "4試合",
          "zh-CN": "4场比赛",
          "zh-TW": "4場比賽",
          vi: "4 trận",
          id: "4 pertandingan"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "5경기",
          en: "5 matches",
          ja: "5試合",
          "zh-CN": "5场比赛",
          "zh-TW": "5場比賽",
          vi: "5 trận",
          id: "5 pertandingan"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "10경기",
          en: "10 matches",
          ja: "10試合",
          "zh-CN": "10场比赛",
          "zh-TW": "10場比賽",
          vi: "10 trận",
          id: "10 pertandingan"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "5명 중 1명 우승 = 4명 탈락 = 4경기",
      en: "1 winner out of 5 = 4 eliminated = 4 matches",
      ja: "5人中1人優勝 = 4人脱落 = 4試合",
      "zh-CN": "5人中1人获胜 = 4人被淘汰 = 4场比赛",
      "zh-TW": "5人中1人獲勝 = 4人被淘汰 = 4場比賽",
      vi: "1 người thắng trong 5 người = 4 người bị loại = 4 trận",
      id: "1 pemenang dari 5 orang = 4 tereliminasi = 4 pertandingan"
    }
  }
];

// 실제 IQ 테스트 결과 데이터
export const realIQResults: RealIQResult[] = [
  {
    type: "genius",
    title: {
      ko: "천재 수준 🧠⚡",
      en: "Genius Level 🧠⚡",
      ja: "天才レベル 🧠⚡",
      "zh-CN": "天才水平 🧠⚡",
      "zh-TW": "天才水平 🧠⚡",
      vi: "Cấp độ thiên tài 🧠⚡",
      id: "Level Jenius 🧠⚡"
    },
    description: {
      ko: "IQ 140+ (상위 0.5% 초고지능)\n당신은 멘사 가입이 가능한 천재 수준의 지능을 보유하고 있습니다. 복잡한 논리 구조를 즉시 파악하고, 패턴을 빠르게 인식하며, 고차원적 사고가 가능합니다. 학계, 연구, 혁신 분야에서 탁월한 성과를 낼 잠재력이 있습니다.",
      en: "IQ 140+ (Top 0.5% super high intelligence)\nYou possess genius-level intelligence that qualifies for Mensa membership. You can immediately grasp complex logical structures, quickly recognize patterns, and engage in high-level thinking. You have the potential to achieve excellence in academia, research, and innovation.",
      ja: "IQ 140+ (上位0.5%の超高知能)\nあなたはメンサ入会が可能な天才レベルの知能を持っています。複雑な論理構造を即座に把握し、パターンを素早く認識し、高次元思考が可能です。学界、研究、革新分野で卓越した成果を上げる可能性があります。",
      "zh-CN": "IQ 140+ (前0.5%超高智商)\n你拥有可以加入门萨的天才级智商。你能立即掌握复杂的逻辑结构，快速识别模式，进行高维思考。你在学术界、研究、创新领域有取得卓越成就的潜力。",
      "zh-TW": "IQ 140+ (前0.5%超高智商)\n你擁有可以加入門薩的天才級智商。你能立即掌握複雜的邏輯結構，快速識別模式，進行高維思考。你在學術界、研究、創新領域有取得卓越成就的潛力。",
      vi: "IQ 140+ (Top 0.5% siêu trí tuệ)\nBạn sở hữu trí tuệ cấp độ thiên tài đủ điều kiện gia nhập Mensa. Bạn có thể nắm bắt ngay lập tức các cấu trúc logic phức tạp, nhận dạng mẫu nhanh chóng và tư duy cấp cao. Bạn có tiềm năng đạt được thành tựu xuất sắc trong học thuật, nghiên cứu và đổi mới.",
      id: "IQ 140+ (Top 0.5% kecerdasan super tinggi)\nAnda memiliki kecerdasan level jenius yang memenuhi syarat keanggotaan Mensa. Anda dapat langsung memahami struktur logika kompleks, mengenali pola dengan cepat, dan berpikir tingkat tinggi. Anda memiliki potensi untuk mencapai keunggulan di bidang akademik, penelitian, dan inovasi."
    },
    emoji: "🧠⚡",
    scoreRange: [11, 12],
    strengths: [
      {
        ko: "뛰어난 논리력",
        en: "Excellent logical ability",
        ja: "優れた論理力",
        "zh-CN": "出色的逻辑能力",
        "zh-TW": "出色的邏輯能力",
        vi: "Khả năng logic xuất sắc",
        id: "Kemampuan logika luar biasa"
      },
      {
        ko: "빠른 학습",
        en: "Fast learning",
        ja: "速い学習",
        "zh-CN": "快速学习",
        "zh-TW": "快速學習",
        vi: "Học nhanh",
        id: "Belajar cepat"
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
        ko: "창의적 사고",
        en: "Creative thinking",
        ja: "創造的思考",
        "zh-CN": "创造性思维",
        "zh-TW": "創造性思維",
        vi: "Tư duy sáng tạo",
        id: "Berpikir kreatif"
      }
    ],
    recommendations: [
      {
        ko: "연구원",
        en: "Researcher",
        ja: "研究者",
        "zh-CN": "研究员",
        "zh-TW": "研究員",
        vi: "Nhà nghiên cứu",
        id: "Peneliti"
      },
      {
        ko: "교수",
        en: "Professor",
        ja: "教授",
        "zh-CN": "教授",
        "zh-TW": "教授",
        vi: "Giáo sư",
        id: "Profesor"
      },
      {
        ko: "전략 기획",
        en: "Strategic planning",
        ja: "戦略企画",
        "zh-CN": "战略规划",
        "zh-TW": "戰略規劃",
        vi: "Lập kế hoạch chiến lược",
        id: "Perencanaan strategis"
      },
      {
        ko: "수학/과학",
        en: "Mathematics/Science",
        ja: "数学/科学",
        "zh-CN": "数学/科学",
        "zh-TW": "數學/科學",
        vi: "Toán học/Khoa học",
        id: "Matematika/Sains"
      },
      {
        ko: "프로그래밍",
        en: "Programming",
        ja: "プログラミング",
        "zh-CN": "编程",
        "zh-TW": "編程",
        vi: "Lập trình",
        id: "Pemrograman"
      }
    ],
    advice: {
      ko: "당신의 능력을 세상을 위해 사용하세요!",
      en: "Use your abilities for the world!",
      ja: "あなたの能力を世界のために使ってください！",
      "zh-CN": "将你的能力用于世界！",
      "zh-TW": "將你的能力用於世界！",
      vi: "Hãy sử dụng khả năng của bạn cho thế giới!",
      id: "Gunakan kemampuan Anda untuk dunia!"
    }
  },
  {
    type: "very_excellent",
    title: {
      ko: "매우 우수 🎓",
      en: "Very Excellent 🎓",
      ja: "非常に優秀 🎓",
      "zh-CN": "非常优秀 🎓",
      "zh-TW": "非常優秀 🎓",
      vi: "Rất xuất sắc 🎓",
      id: "Sangat Unggul 🎓"
    },
    description: {
      ko: "IQ 130-139 (상위 2% 고지능)\n당신은 매우 우수한 지능을 가지고 있습니다. 대부분의 지적 도전을 쉽게 해결하며, 학습 능력이 뛰어나고 논리적 사고가 탁월합니다. 전문직, 경영진, 고급 전문가로 성공할 가능성이 높습니다.",
      en: "IQ 130-139 (Top 2% high intelligence)\nYou have very excellent intelligence. You can easily solve most intellectual challenges, have outstanding learning abilities, and excel in logical thinking. You have a high potential for success as a professional, executive, or senior expert.",
      ja: "IQ 130-139 (上位2%の高知能)\nあなたは非常に優秀な知能を持っています。ほとんどの知的挑戦を簡単に解決し、優れた学習能力と卓越した論理的思考を持っています。専門職、経営陣、上級専門家として成功する可能性が高いです。",
      "zh-CN": "IQ 130-139 (前2%高智商)\n你拥有非常优秀的智商。你能轻松解决大部分智力挑战，学习能力出色，逻辑思维卓越。你在专业领域、管理层、高级专家方面有很高的成功潜力。",
      "zh-TW": "IQ 130-139 (前2%高智商)\n你擁有非常優秀的智商。你能輕鬆解決大部分智力挑戰，學習能力出色，邏輯思維卓越。你在專業領域、管理層、高級專家方面有很高的成功潛力。",
      vi: "IQ 130-139 (Top 2% trí tuệ cao)\nBạn có trí tuệ rất xuất sắc. Bạn có thể dễ dàng giải quyết hầu hết các thách thức trí tuệ, có khả năng học tập xuất sắc và tư duy logic vượt trội. Bạn có tiềm năng cao để thành công như một chuyên gia, giám đốc điều hành hoặc chuyên gia cấp cao.",
      id: "IQ 130-139 (Top 2% kecerdasan tinggi)\nAnda memiliki kecerdasan yang sangat unggul. Anda dapat dengan mudah menyelesaikan sebagian besar tantangan intelektual, memiliki kemampuan belajar yang luar biasa, dan unggul dalam berpikir logis. Anda memiliki potensi tinggi untuk sukses sebagai profesional, eksekutif, atau ahli senior."
    },
    emoji: "🎓",
    scoreRange: [9, 10],
    strengths: [
      {
        ko: "우수한 논리력",
        en: "Excellent logical ability",
        ja: "優れた論理力",
        "zh-CN": "优秀的逻辑能力",
        "zh-TW": "優秀的邏輯能力",
        vi: "Khả năng logic xuất sắc",
        id: "Kemampuan logika unggul"
      },
      {
        ko: "빠른 이해력",
        en: "Fast comprehension",
        ja: "速い理解力",
        "zh-CN": "快速理解力",
        "zh-TW": "快速理解力",
        vi: "Khả năng hiểu nhanh",
        id: "Pemahaman cepat"
      },
      {
        ko: "문제 해결 능력",
        en: "Problem solving ability",
        ja: "問題解決能力",
        "zh-CN": "问题解决能力",
        "zh-TW": "問題解決能力",
        vi: "Khả năng giải quyết vấn đề",
        id: "Kemampuan pemecahan masalah"
      }
    ],
    recommendations: [
      {
        ko: "의사",
        en: "Doctor",
        ja: "医師",
        "zh-CN": "医生",
        "zh-TW": "醫生",
        vi: "Bác sĩ",
        id: "Dokter"
      },
      {
        ko: "변호사",
        en: "Lawyer",
        ja: "弁護士",
        "zh-CN": "律师",
        "zh-TW": "律師",
        vi: "Luật sư",
        id: "Pengacara"
      },
      {
        ko: "경영진",
        en: "Executive",
        ja: "経営陣",
        "zh-CN": "管理层",
        "zh-TW": "管理層",
        vi: "Giám đốc điều hành",
        id: "Eksekutif"
      },
      {
        ko: "엔지니어",
        en: "Engineer",
        ja: "エンジニア",
        "zh-CN": "工程师",
        "zh-TW": "工程師",
        vi: "Kỹ sư",
        id: "Insinyur"
      },
      {
        ko: "분석가",
        en: "Analyst",
        ja: "アナリスト",
        "zh-CN": "分析师",
        "zh-TW": "分析師",
        vi: "Nhà phân tích",
        id: "Analis"
      }
    ],
    advice: {
      ko: "지속적인 도전으로 능력을 더 발전시키세요!",
      en: "Develop your abilities further through continuous challenges!",
      ja: "継続的な挑戦で能力をさらに発展させてください！",
      "zh-CN": "通过持续挑战进一步发展你的能力！",
      "zh-TW": "通過持續挑戰進一步發展你的能力！",
      vi: "Phát triển khả năng hơn nữa thông qua những thách thức liên tục!",
      id: "Kembangkan kemampuan Anda lebih lanjut melalui tantangan berkelanjutan!"
    }
  },
  {
    type: "excellent",
    title: {
      ko: "우수 📚",
      en: "Excellent 📚",
      ja: "優秀 📚",
      "zh-CN": "优秀 📚",
      "zh-TW": "優秀 📚",
      vi: "Xuất sắc 📚",
      id: "Unggul 📚"
    },
    description: {
      ko: "IQ 120-129 (상위 10% 평균 이상)\n당신은 평균보다 확실히 높은 지능을 가지고 있습니다. 학업과 업무에서 좋은 성과를 내며, 논리적 사고와 문제 해결 능력이 우수합니다. 대학 교육을 잘 이수하고 전문 분야에서 성공할 수 있는 수준입니다.",
      en: "IQ 120-129 (Top 10% above average)\nYou have intelligence that is clearly above average. You achieve good results in academics and work, with excellent logical thinking and problem-solving abilities. You can successfully complete university education and succeed in professional fields.",
      ja: "IQ 120-129 (上位10%平均以上)\nあなたは平均より確実に高い知能を持っています。学業と仕事で良い成果を上げ、論理的思考と問題解決能力が優秀です。大学教育をうまく修了し、専門分野で成功できるレベルです。",
      "zh-CN": "IQ 120-129 (前10%平均以上)\n你拥有明显高于平均水平的智商。在学业和工作中取得良好成绩，逻辑思维和解决问题的能力优秀。能够顺利完成大学教育并在专业领域取得成功。",
      "zh-TW": "IQ 120-129 (前10%平均以上)\n你擁有明顯高於平均水平的智商。在學業和工作中取得良好成績，邏輯思維和解決問題的能力優秀。能夠順利完成大學教育並在專業領域取得成功。",
      vi: "IQ 120-129 (Top 10% trên trung bình)\nBạn có trí tuệ rõ ràng cao hơn mức trung bình. Bạn đạt được kết quả tốt trong học tập và công việc, với khả năng tư duy logic và giải quyết vấn đề xuất sắc. Bạn có thể hoàn thành thành công giáo dục đại học và thành công trong các lĩnh vực chuyên môn.",
      id: "IQ 120-129 (Top 10% di atas rata-rata)\nAnda memiliki kecerdasan yang jelas di atas rata-rata. Anda mencapai hasil yang baik dalam akademik dan pekerjaan, dengan kemampuan berpikir logis dan pemecahan masalah yang unggul. Anda dapat berhasil menyelesaikan pendidikan universitas dan sukses di bidang profesional."
    },
    emoji: "📚",
    scoreRange: [7, 8],
    strengths: [
      {
        ko: "좋은 학습 능력",
        en: "Good learning ability",
        ja: "良い学習能力",
        "zh-CN": "良好的学习能力",
        "zh-TW": "良好的學習能力",
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
        id: "Berpikir logis"
      },
      {
        ko: "안정적 문제 해결",
        en: "Stable problem solving",
        ja: "安定した問題解決",
        "zh-CN": "稳定的问题解决",
        "zh-TW": "穩定的問題解決",
        vi: "Giải quyết vấn đề ổn định",
        id: "Pemecahan masalah yang stabil"
      }
    ],
    recommendations: [
      {
        ko: "관리자",
        en: "Manager",
        ja: "管理者",
        "zh-CN": "管理者",
        "zh-TW": "管理者",
        vi: "Quản lý",
        id: "Manajer"
      },
      {
        ko: "전문직",
        en: "Professional",
        ja: "専門職",
        "zh-CN": "专业工作",
        "zh-TW": "專業工作",
        vi: "Chuyên nghiệp",
        id: "Profesional"
      },
      {
        ko: "교사",
        en: "Teacher",
        ja: "教師",
        "zh-CN": "教师",
        "zh-TW": "教師",
        vi: "Giáo viên",
        id: "Guru"
      },
      {
        ko: "기술직",
        en: "Technical",
        ja: "技術職",
        "zh-CN": "技术工作",
        "zh-TW": "技術工作",
        vi: "Kỹ thuật",
        id: "Teknis"
      }
    ],
    advice: {
      ko: "꾸준한 학습으로 전문성을 키우세요!",
      en: "Develop your expertise through consistent learning!",
      ja: "着実な学習で専門性を高めてください！",
      "zh-CN": "通过持续学习发展你的专业技能！",
      "zh-TW": "通過持續學習發展你的專業技能！",
      vi: "Phát triển chuyên môn của bạn thông qua học tập đều đặn!",
      id: "Kembangkan keahlian Anda melalui pembelajaran yang konsisten!"
    }
  },
  {
    type: "above_average",
    title: {
      ko: "평균 상 ⭐",
      en: "Above Average ⭐",
      ja: "平均上 ⭐",
      "zh-CN": "平均以上 ⭐",
      "zh-TW": "平均以上 ⭐",
      vi: "Trên trung bình ⭐",
      id: "Di atas rata-rata ⭐"
    },
    description: {
      ko: "IQ 110-119 (상위 25% 평균 이상)\n당신은 평균보다 약간 높은 지능을 가지고 있습니다. 일상적인 문제는 잘 해결하며, 학습과 업무 수행에 큰 어려움이 없습니다. 노력과 경험으로 충분히 발전할 수 있는 좋은 기반을 가지고 있습니다.",
      en: "IQ 110-119 (Top 25% above average)\nYou have intelligence that is slightly above average. You solve everyday problems well and have no major difficulties in learning and work performance. You have a good foundation that can be developed sufficiently through effort and experience.",
      ja: "IQ 110-119 (上位25%平均以上)\nあなたは平均より少し高い知能を持っています。日常的な問題はうまく解決し、学習と業務遂行に大きな困難はありません。努力と経験で十分発展できる良い基盤を持っています。",
      "zh-CN": "IQ 110-119 (前25%平均以上)\n你拥有略高于平均水平的智商。你能很好地解决日常问题，在学习和工作表现上没有重大困难。你有一个良好的基础，可以通过努力和经验充分发展。",
      "zh-TW": "IQ 110-119 (前25%平均以上)\n你擁有略高於平均水平的智商。你能很好地解決日常問題，在學習和工作表現上沒有重大困難。你有一個良好的基礎，可以通過努力和經驗充分發展。",
      vi: "IQ 110-119 (Top 25% trên trung bình)\nBạn có trí tuệ hơi cao hơn mức trung bình. Bạn giải quyết tốt các vấn đề hàng ngày và không gặp khó khăn lớn trong học tập và thực hiện công việc. Bạn có nền tảng tốt có thể phát triển đủ thông qua nỗ lực và kinh nghiệm.",
      id: "IQ 110-119 (Top 25% di atas rata-rata)\nAnda memiliki kecerdasan yang sedikit di atas rata-rata. Anda menyelesaikan masalah sehari-hari dengan baik dan tidak memiliki kesulitan besar dalam pembelajaran dan kinerja kerja. Anda memiliki fondasi yang baik yang dapat dikembangkan cukup melalui usaha dan pengalaman."
    },
    emoji: "⭐",
    scoreRange: [5, 6],
    strengths: [
      {
        ko: "안정적 사고",
        en: "Stable thinking",
        ja: "安定した思考",
        "zh-CN": "稳定的思维",
        "zh-TW": "穩定的思維",
        vi: "Tư duy ổn định",
        id: "Berpikir stabil"
      },
      {
        ko: "실용적 문제 해결",
        en: "Practical problem solving",
        ja: "実用的な問題解決",
        "zh-CN": "实用的问题解决",
        "zh-TW": "實用的問題解決",
        vi: "Giải quyết vấn đề thực tế",
        id: "Pemecahan masalah praktis"
      },
      {
        ko: "학습 가능",
        en: "Learnable",
        ja: "学習可能",
        "zh-CN": "可学习",
        "zh-TW": "可學習",
        vi: "Có thể học",
        id: "Dapat dipelajari"
      }
    ],
    recommendations: [
      {
        ko: "대부분의 일반 직업",
        en: "Most general jobs",
        ja: "ほとんどの一般職",
        "zh-CN": "大多数一般工作",
        "zh-TW": "大多數一般工作",
        vi: "Hầu hết các công việc chung",
        id: "Sebagian besar pekerjaan umum"
      }
    ],
    advice: {
      ko: "지능은 고정되지 않습니다. 꾸준한 훈련으로 향상하세요!",
      en: "Intelligence is not fixed. Improve through consistent training!",
      ja: "知能は固定されていません。着実な訓練で向上させてください！",
      "zh-CN": "智力不是固定的。通过持续训练来提高！",
      "zh-TW": "智力不是固定的。通過持續訓練來提高！",
      vi: "Trí tuệ không cố định. Cải thiện thông qua rèn luyện đều đặn!",
      id: "Kecerdasan tidak tetap. Tingkatkan melalui pelatihan yang konsisten!"
    }
  },
  {
    type: "average",
    title: {
      ko: "평균 ⚖️",
      en: "Average ⚖️",
      ja: "平均 ⚖️",
      "zh-CN": "平均 ⚖️",
      "zh-TW": "平均 ⚖️",
      vi: "Trung bình ⚖️",
      id: "Rata-rata ⚖️"
    },
    description: {
      ko: "IQ 90-109 (중간 50% 일반적 수준)\n당신은 평균적인 지능을 가지고 있습니다. 대부분의 사람들이 이 범위에 속하며, 일상생활과 일반적인 업무를 수행하는 데 문제가 없습니다. 지능보다는 노력, 끈기, 태도가 성공을 결정합니다.",
      en: "IQ 90-109 (Middle 50% general level)\nYou have average intelligence. Most people fall into this range, and you have no problems performing daily life and general work. Effort, persistence, and attitude determine success more than intelligence.",
      ja: "IQ 90-109 (中間50%一般的レベル)\nあなたは平均的な知能を持っています。ほとんどの人がこの範囲に属し、日常生活と一般的な業務を遂行するのに問題はありません。知能よりも努力、粘り強さ、態度が成功を決定します。",
      "zh-CN": "IQ 90-109 (中间50%一般水平)\n你拥有平均水平的智商。大多数人属于这个范围，你在日常生活和一般工作中没有问题。努力、坚持和态度比智力更能决定成功。",
      "zh-TW": "IQ 90-109 (中間50%一般水平)\n你擁有平均水平的智商。大多數人屬於這個範圍，你在日常生活和一般工作中沒有問題。努力、堅持和態度比智力更能決定成功。",
      vi: "IQ 90-109 (Mức chung 50% giữa)\nBạn có trí tuệ trung bình. Hầu hết mọi người thuộc phạm vi này, và bạn không gặp vấn đề gì trong cuộc sống hàng ngày và công việc chung. Nỗ lực, kiên trì và thái độ quyết định thành công hơn là trí tuệ.",
      id: "IQ 90-109 (Level umum 50% tengah)\nAnda memiliki kecerdasan rata-rata. Kebanyakan orang termasuk dalam rentang ini, dan Anda tidak memiliki masalah dalam kehidupan sehari-hari dan pekerjaan umum. Usaha, ketekunan, dan sikap menentukan kesuksesan lebih dari kecerdasan."
    },
    emoji: "⚖️",
    scoreRange: [3, 4],
    strengths: [
      {
        ko: "일반적 사고",
        en: "General thinking",
        ja: "一般的思考",
        "zh-CN": "一般思维",
        "zh-TW": "一般思維",
        vi: "Tư duy chung",
        id: "Berpikir umum"
      },
      {
        ko: "경험으로 학습",
        en: "Learning through experience",
        ja: "経験による学習",
        "zh-CN": "通过经验学习",
        "zh-TW": "通過經驗學習",
        vi: "Học qua kinh nghiệm",
        id: "Belajar melalui pengalaman"
      },
      {
        ko: "실용적 접근",
        en: "Practical approach",
        ja: "実用的アプローチ",
        "zh-CN": "实用方法",
        "zh-TW": "實用方法",
        vi: "Cách tiếp cận thực tế",
        id: "Pendekatan praktis"
      }
    ],
    recommendations: [
      {
        ko: "다양한 일반 직업",
        en: "Various general jobs",
        ja: "様々な一般職",
        "zh-CN": "各种一般工作",
        "zh-TW": "各種一般工作",
        vi: "Các công việc chung đa dạng",
        id: "Berbagai pekerjaan umum"
      }
    ],
    advice: {
      ko: "IQ는 성공의 일부일 뿐입니다. 노력과 열정이 더 중요해요!",
      en: "IQ is only part of success. Effort and passion are more important!",
      ja: "IQは成功の一部に過ぎません。努力と情熱がより重要です！",
      "zh-CN": "智商只是成功的一部分。努力和激情更重要！",
      "zh-TW": "智商只是成功的一部分。努力和激情更重要！",
      vi: "IQ chỉ là một phần của thành công. Nỗ lực và đam mê quan trọng hơn!",
      id: "IQ hanya bagian dari kesuksesan. Usaha dan gairah lebih penting!"
    }
  },
  {
    type: "potential_development",
    title: {
      ko: "잠재력 개발형 🌱",
      en: "Potential Development 🌱",
      ja: "潜在力開発型 🌱",
      "zh-CN": "潜力开发型 🌱",
      "zh-TW": "潛力開發型 🌱",
      vi: "Phát triển tiềm năng 🌱",
      id: "Pengembangan Potensi 🌱"
    },
    description: {
      ko: "IQ 90 미만 (개발이 필요한 단계)\n현재 논리적 사고와 문제 해결 능력이 부족하지만, 걱정하지 마세요! IQ는 고정된 것이 아니며, 훈련으로 향상될 수 있습니다. 꾸준한 두뇌 훈련, 독서, 퍼즐 풀기로 지능을 개발할 수 있습니다. 지금부터 시작하세요!",
      en: "IQ below 90 (Stage requiring development)\nCurrently lacking in logical thinking and problem-solving abilities, but don't worry! IQ is not fixed and can be improved through training. You can develop intelligence through consistent brain training, reading, and puzzle solving. Start now!",
      ja: "IQ 90未満（開発が必要な段階）\n現在論理的思考と問題解決能力が不足していますが、心配しないでください！IQは固定されたものではなく、訓練で向上できます。着実な脳トレーニング、読書、パズル解きで知能を開発できます。今から始めてください！",
      "zh-CN": "IQ 90以下（需要开发的阶段）\n目前缺乏逻辑思维和解决问题的能力，但别担心！智商不是固定的，可以通过训练提高。你可以通过持续的脑力训练、阅读、解谜来开发智力。现在就开始吧！",
      "zh-TW": "IQ 90以下（需要開發的階段）\n目前缺乏邏輯思維和解決問題的能力，但別擔心！智商不是固定的，可以通過訓練提高。你可以通過持續的腦力訓練、閱讀、解謎來開發智力。現在就開始吧！",
      vi: "IQ dưới 90 (Giai đoạn cần phát triển)\nHiện tại thiếu khả năng tư duy logic và giải quyết vấn đề, nhưng đừng lo lắng! IQ không cố định và có thể cải thiện thông qua rèn luyện. Bạn có thể phát triển trí tuệ thông qua rèn luyện não bộ đều đặn, đọc sách và giải câu đố. Hãy bắt đầu ngay bây giờ!",
      id: "IQ di bawah 90 (Tahap yang memerlukan pengembangan)\nSaat ini kurang dalam kemampuan berpikir logis dan pemecahan masalah, tapi jangan khawatir! IQ tidak tetap dan dapat ditingkatkan melalui pelatihan. Anda dapat mengembangkan kecerdasan melalui pelatihan otak yang konsisten, membaca, dan memecahkan teka-teki. Mulai sekarang!"
    },
    emoji: "🌱",
    scoreRange: [0, 2],
    strengths: [
      {
        ko: "무한한 발전 가능성",
        en: "Infinite development potential",
        ja: "無限の発展可能性",
        "zh-CN": "无限的发展潜力",
        "zh-TW": "無限的發展潛力",
        vi: "Tiềm năng phát triển vô hạn",
        id: "Potensi pengembangan tak terbatas"
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
        ko: "수학 기초",
        en: "Basic math",
        ja: "数学基礎",
        "zh-CN": "数学基础",
        "zh-TW": "數學基礎",
        vi: "Toán cơ bản",
        id: "Matematika dasar"
      },
      {
        ko: "독서",
        en: "Reading",
        ja: "読書",
        "zh-CN": "阅读",
        "zh-TW": "閱讀",
        vi: "Đọc sách",
        id: "Membaca"
      },
      {
        ko: "두뇌 훈련 앱",
        en: "Brain training apps",
        ja: "脳トレアプリ",
        "zh-CN": "大脑训练应用",
        "zh-TW": "大腦訓練應用",
        vi: "Ứng dụng rèn luyện não bộ",
        id: "Aplikasi pelatihan otak"
      }
    ],
    advice: {
      ko: "매일 10분씩 두뇌 운동을 하세요. 6개월 후 놀라운 변화를!",
      en: "Do 10 minutes of brain exercise every day. Amazing changes after 6 months!",
      ja: "毎日10分間の脳トレをしてください。6ヶ月後に驚くべき変化が！",
      "zh-CN": "每天做10分钟的大脑运动。6个月后会有惊人的变化！",
      "zh-TW": "每天做10分鐘的大腦運動。6個月後會有驚人的變化！",
      vi: "Hãy tập luyện não bộ 10 phút mỗi ngày. Những thay đổi đáng kinh ngạc sau 6 tháng!",
      id: "Lakukan latihan otak 10 menit setiap hari. Perubahan menakjubkan setelah 6 bulan!"
    }
  }
];

// 점수 계산 함수
export const calculateRealIQResult = (answers: boolean[]): string => {
  const correctCount = answers.filter(answer => answer).length;
  
  if (correctCount >= 11) return "genius";
  if (correctCount >= 9) return "very_excellent";
  if (correctCount >= 7) return "excellent";
  if (correctCount >= 5) return "above_average";
  if (correctCount >= 3) return "average";
  return "potential_development";
};
