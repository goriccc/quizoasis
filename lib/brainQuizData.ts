// 두뇌 퀴즈 테스트 데이터 타입 정의
export interface BrainQuizQuestion {
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

export interface BrainQuizResult {
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

// 두뇌 퀴즈 질문 데이터
export const brainQuizQuestions: BrainQuizQuestion[] = [
  {
    id: 1,
    question: {
      ko: "다음 중 나머지 셋과 다른 하나는?",
      en: "Which one is different from the other three?",
      ja: "次のうち、他の3つと異なるものは？",
      "zh-CN": "以下哪个与其他三个不同？",
      "zh-TW": "以下哪個與其他三個不同？",
      vi: "Cái nào khác với ba cái còn lại?",
      id: "Mana yang berbeda dari ketiga lainnya?"
    },
    options: [
      {
        text: {
          ko: "사과",
          en: "Apple",
          ja: "りんご",
          "zh-CN": "苹果",
          "zh-TW": "蘋果",
          vi: "Táo",
          id: "Apel"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "바나나",
          en: "Banana",
          ja: "バナナ",
          "zh-CN": "香蕉",
          "zh-TW": "香蕉",
          vi: "Chuối",
          id: "Pisang"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "토마토",
          en: "Tomato",
          ja: "トマト",
          "zh-CN": "西红柿",
          "zh-TW": "番茄",
          vi: "Cà chua",
          id: "Tomat"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "포도",
          en: "Grape",
          ja: "ぶどう",
          "zh-CN": "葡萄",
          "zh-TW": "葡萄",
          vi: "Nho",
          id: "Anggur"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "토마토는 채소로 분류되기도 함, 나머지는 과일",
      en: "Tomato is sometimes classified as a vegetable, others are fruits",
      ja: "トマトは野菜に分類されることもあり、他は果物",
      "zh-CN": "西红柿有时被归类为蔬菜，其他是水果",
      "zh-TW": "番茄有時被歸類為蔬菜，其他是水果",
      vi: "Cà chua đôi khi được phân loại là rau, còn lại là trái cây",
      id: "Tomat kadang diklasifikasikan sebagai sayuran, yang lain adalah buah"
    }
  },
  {
    id: 2,
    question: {
      ko: "1, 4, 9, 16, ? 다음에 올 숫자는?",
      en: "1, 4, 9, 16, ? What number comes next?",
      ja: "1, 4, 9, 16, ? 次に来る数字は？",
      "zh-CN": "1, 4, 9, 16, ? 下一个数字是什么？",
      "zh-TW": "1, 4, 9, 16, ? 下一個數字是什麼？",
      vi: "1, 4, 9, 16, ? Số tiếp theo là gì?",
      id: "1, 4, 9, 16, ? Angka selanjutnya adalah?"
    },
    options: [
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
          ko: "25",
          en: "25",
          ja: "25",
          "zh-CN": "25",
          "zh-TW": "25",
          vi: "25",
          id: "25"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "30",
          en: "30",
          ja: "30",
          "zh-CN": "30",
          "zh-TW": "30",
          vi: "30",
          id: "30"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "36",
          en: "36",
          ja: "36",
          "zh-CN": "36",
          "zh-TW": "36",
          vi: "36",
          id: "36"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "제곱수: 1², 2², 3², 4², 5²=25",
      en: "Square numbers: 1², 2², 3², 4², 5²=25",
      ja: "平方数: 1², 2², 3², 4², 5²=25",
      "zh-CN": "平方数: 1², 2², 3², 4², 5²=25",
      "zh-TW": "平方數: 1², 2², 3², 4², 5²=25",
      vi: "Số bình phương: 1², 2², 3², 4², 5²=25",
      id: "Bilangan kuadrat: 1², 2², 3², 4², 5²=25"
    }
  },
  {
    id: 3,
    question: {
      ko: "\"책상 위에 있는 것은 모두 빨간색이다. 연필은 책상 위에 있다.\" 다음 중 반드시 참인 것은?",
      en: "\"Everything on the desk is red. The pencil is on the desk.\" Which of the following must be true?",
      ja: "\"机の上にあるものはすべて赤い。鉛筆は机の上にある。\" 次のうち必ず真であるものは？",
      "zh-CN": "\"桌子上的一切都是红色的。铅笔在桌子上。\" 以下哪个必须为真？",
      "zh-TW": "\"桌子上的一切都是紅色的。鉛筆在桌子上。\" 以下哪個必須為真？",
      vi: "\"Mọi thứ trên bàn đều màu đỏ. Bút chì ở trên bàn.\" Điều nào sau đây chắc chắn đúng?",
      id: "\"Semua yang ada di atas meja berwarna merah. Pensil ada di atas meja.\" Mana yang pasti benar?"
    },
    options: [
      {
        text: {
          ko: "연필은 빨간색이다",
          en: "The pencil is red",
          ja: "鉛筆は赤い",
          "zh-CN": "铅笔是红色的",
          "zh-TW": "鉛筆是紅色的",
          vi: "Bút chì màu đỏ",
          id: "Pensil berwarna merah"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "빨간색인 것은 모두 책상 위에 있다",
          en: "Everything red is on the desk",
          ja: "赤いものはすべて机の上にある",
          "zh-CN": "红色的东西都在桌子上",
          "zh-TW": "紅色的東西都在桌子上",
          vi: "Mọi thứ màu đỏ đều ở trên bàn",
          id: "Semua yang merah ada di atas meja"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "책상 아래에는 빨간색이 없다",
          en: "There is no red under the desk",
          ja: "机の下には赤いものはない",
          "zh-CN": "桌子下面没有红色的",
          "zh-TW": "桌子下面沒有紅色的",
          vi: "Không có màu đỏ dưới bàn",
          id: "Tidak ada warna merah di bawah meja"
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
      ko: "논리적 연역: 책상 위의 모든 것이 빨간색이고, 연필이 책상 위에 있으므로 연필은 빨간색",
      en: "Logical deduction: Everything on the desk is red, and the pencil is on the desk, so the pencil is red",
      ja: "論理的演繹: 机の上のすべてが赤く、鉛筆が机の上にあるので、鉛筆は赤い",
      "zh-CN": "逻辑演绎：桌子上的一切都是红色的，铅笔在桌子上，所以铅笔是红色的",
      "zh-TW": "邏輯演繹：桌子上的一切都是紅色的，鉛筆在桌子上，所以鉛筆是紅色的",
      vi: "Suy luận logic: Mọi thứ trên bàn đều màu đỏ, bút chì ở trên bàn nên bút chì màu đỏ",
      id: "Deduksi logis: Semua di atas meja berwarna merah, pensil ada di atas meja jadi pensil berwarna merah"
    }
  },
  {
    id: 4,
    question: {
      ko: "거울에 비친 시계가 3시 15분을 가리킨다면, 실제 시간은?",
      en: "If a clock reflected in a mirror shows 3:15, what is the actual time?",
      ja: "鏡に映った時計が3時15分を指している場合、実際の時間は？",
      "zh-CN": "如果镜子里的时钟显示3点15分，实际时间是？",
      "zh-TW": "如果鏡子裡的時鐘顯示3點15分，實際時間是？",
      vi: "Nếu đồng hồ phản chiếu trong gương hiển thị 3:15, thời gian thực tế là gì?",
      id: "Jika jam yang terpantul di cermin menunjukkan 3:15, berapa waktu sebenarnya?"
    },
    options: [
      {
        text: {
          ko: "3시 15분",
          en: "3:15",
          ja: "3時15分",
          "zh-CN": "3点15分",
          "zh-TW": "3點15分",
          vi: "3:15",
          id: "3:15"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "8시 45분",
          en: "8:45",
          ja: "8時45分",
          "zh-CN": "8点45分",
          "zh-TW": "8點45分",
          vi: "8:45",
          id: "8:45"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "9시 45분",
          en: "9:45",
          ja: "9時45分",
          "zh-CN": "9点45分",
          "zh-TW": "9點45分",
          vi: "9:45",
          id: "9:45"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "6시 45분",
          en: "6:45",
          ja: "6時45分",
          "zh-CN": "6点45分",
          "zh-TW": "6點45分",
          vi: "6:45",
          id: "6:45"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "12시 기준 대칭, 12-3:15 = 8:45",
      en: "Symmetry based on 12 o'clock, 12-3:15 = 8:45",
      ja: "12時基準の対称、12-3:15 = 8:45",
      "zh-CN": "以12点为基准的对称，12-3:15 = 8:45",
      "zh-TW": "以12點為基準的對稱，12-3:15 = 8:45",
      vi: "Đối xứng dựa trên 12 giờ, 12-3:15 = 8:45",
      id: "Simetri berdasarkan jam 12, 12-3:15 = 8:45"
    }
  },
  {
    id: 5,
    question: {
      ko: "A는 B보다 키가 크고, C는 A보다 키가 작다. B와 C 중 누가 더 큰지 알 수 있나요?",
      en: "A is taller than B, and C is shorter than A. Can we know who is taller between B and C?",
      ja: "AはBより背が高く、CはAより背が低い。BとCのどちらがより背が高いかわかりますか？",
      "zh-CN": "A比B高，C比A矮。我们能知道B和C中谁更高吗？",
      "zh-TW": "A比B高，C比A矮。我們能知道B和C中誰更高嗎？",
      vi: "A cao hơn B, và C thấp hơn A. Chúng ta có thể biết ai cao hơn giữa B và C không?",
      id: "A lebih tinggi dari B, dan C lebih pendek dari A. Bisakah kita tahu siapa yang lebih tinggi antara B dan C?"
    },
    options: [
      {
        text: {
          ko: "B가 더 크다",
          en: "B is taller",
          ja: "Bの方が背が高い",
          "zh-CN": "B更高",
          "zh-TW": "B更高",
          vi: "B cao hơn",
          id: "B lebih tinggi"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "C가 더 크다",
          en: "C is taller",
          ja: "Cの方が背が高い",
          "zh-CN": "C更高",
          "zh-TW": "C更高",
          vi: "C cao hơn",
          id: "C lebih tinggi"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "둘이 같다",
          en: "They are the same",
          ja: "同じ",
          "zh-CN": "一样高",
          "zh-TW": "一樣高",
          vi: "Bằng nhau",
          id: "Sama tinggi"
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
        isCorrect: true
      }
    ],
    correctAnswer: "D",
    hint: {
      ko: "B와 C의 직접 비교 정보 없음",
      en: "No direct comparison information between B and C",
      ja: "BとCの直接比較情報なし",
      "zh-CN": "B和C之间没有直接比较信息",
      "zh-TW": "B和C之間沒有直接比較信息",
      vi: "Không có thông tin so sánh trực tiếp giữa B và C",
      id: "Tidak ada informasi perbandingan langsung antara B dan C"
    }
  },
  {
    id: 6,
    question: {
      ko: "다음 중 \"차가운 얼음\"과 같은 구조의 표현은?",
      en: "Which of the following has the same structure as \"cold ice\"?",
      ja: "次のうち「冷たい氷」と同じ構造の表現は？",
      "zh-CN": "以下哪个与\"冰冷的冰\"结构相同？",
      "zh-TW": "以下哪個與\"冰冷的冰\"結構相同？",
      vi: "Cái nào trong số sau có cấu trúc giống như \"nước đá lạnh\"?",
      id: "Mana dari berikut ini yang memiliki struktur yang sama dengan \"es dingin\"?"
    },
    options: [
      {
        text: {
          ko: "뜨거운 불",
          en: "Hot fire",
          ja: "熱い火",
          "zh-CN": "火热的火",
          "zh-TW": "火熱的火",
          vi: "Lửa nóng",
          id: "Api panas"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "높은 산",
          en: "High mountain",
          ja: "高い山",
          "zh-CN": "高山",
          "zh-TW": "高山",
          vi: "Núi cao",
          id: "Gunung tinggi"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "맑은 하늘",
          en: "Clear sky",
          ja: "晴れた空",
          "zh-CN": "晴朗的天空",
          "zh-TW": "晴朗的天空",
          vi: "Bầu trời trong",
          id: "Langit cerah"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "빠른 토끼",
          en: "Fast rabbit",
          ja: "速いウサギ",
          "zh-CN": "快兔子",
          "zh-TW": "快兔子",
          vi: "Thỏ nhanh",
          id: "Kelinci cepat"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "A",
    hint: {
      ko: "형용사가 명사의 본질적 속성을 중복 설명",
      en: "Adjective redundantly describes the essential property of the noun",
      ja: "形容詞が名詞の本質的性質を重複して説明",
      "zh-CN": "形容词重复描述名词的本质属性",
      "zh-TW": "形容詞重複描述名詞的本質屬性",
      vi: "Tính từ mô tả thừa thuộc tính cơ bản của danh từ",
      id: "Kata sifat secara berlebihan menggambarkan sifat esensial dari kata benda"
    }
  },
  {
    id: 7,
    question: {
      ko: "8명이 악수를 한다. 모두가 서로 한 번씩만 악수한다면 총 몇 번의 악수가 일어날까요?",
      en: "8 people shake hands. If everyone shakes hands with each other only once, how many handshakes occur in total?",
      ja: "8人が握手する。全員がお互いに一度だけ握手する場合、合計何回の握手が起こるでしょうか？",
      "zh-CN": "8个人握手。如果每个人都只握一次手，总共会发生多少次握手？",
      "zh-TW": "8個人握手。如果每個人都只握一次手，總共會發生多少次握手？",
      vi: "8 người bắt tay. Nếu mọi người chỉ bắt tay với nhau một lần, tổng cộng có bao nhiêu cái bắt tay?",
      id: "8 orang berjabat tangan. Jika semua orang hanya berjabat tangan satu kali, berapa total jabat tangan yang terjadi?"
    },
    options: [
      {
        text: {
          ko: "16번",
          en: "16 times",
          ja: "16回",
          "zh-CN": "16次",
          "zh-TW": "16次",
          vi: "16 lần",
          id: "16 kali"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "28번",
          en: "28 times",
          ja: "28回",
          "zh-CN": "28次",
          "zh-TW": "28次",
          vi: "28 lần",
          id: "28 kali"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "32번",
          en: "32 times",
          ja: "32回",
          "zh-CN": "32次",
          "zh-TW": "32次",
          vi: "32 lần",
          id: "32 kali"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "64번",
          en: "64 times",
          ja: "64回",
          "zh-CN": "64次",
          "zh-TW": "64次",
          vi: "64 lần",
          id: "64 kali"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "조합 공식: 8×7÷2 = 28",
      en: "Combination formula: 8×7÷2 = 28",
      ja: "組み合わせの公式：8×7÷2 = 28",
      "zh-CN": "组合公式：8×7÷2 = 28",
      "zh-TW": "組合公式：8×7÷2 = 28",
      vi: "Công thức tổ hợp: 8×7÷2 = 28",
      id: "Rumus kombinasi: 8×7÷2 = 28"
    }
  },
  {
    id: 8,
    question: {
      ko: "다음 패턴에서 ?에 들어갈 것은? ○△○△○?",
      en: "What should go in the ? in the following pattern? ○△○△○?",
      ja: "次のパターンで？に入るものは？○△○△○？",
      "zh-CN": "在以下模式中，？应该填入什么？○△○△○？",
      "zh-TW": "在以下模式中，？應該填入什麼？○△○△○？",
      vi: "Trong mẫu sau, cái gì nên điền vào ? ○△○△○?",
      id: "Dalam pola berikut, apa yang harus dimasukkan ke ? ○△○△○?"
    },
    options: [
      {
        text: {
          ko: "○",
          en: "○",
          ja: "○",
          "zh-CN": "○",
          "zh-TW": "○",
          vi: "○",
          id: "○"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "△",
          en: "△",
          ja: "△",
          "zh-CN": "△",
          "zh-TW": "△",
          vi: "△",
          id: "△"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "○○",
          en: "○○",
          ja: "○○",
          "zh-CN": "○○",
          "zh-TW": "○○",
          vi: "○○",
          id: "○○"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "△△",
          en: "△△",
          ja: "△△",
          "zh-CN": "△△",
          "zh-TW": "△△",
          vi: "△△",
          id: "△△"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "○△ 반복 패턴",
      en: "○△ repeating pattern",
      ja: "○△繰り返しパターン",
      "zh-CN": "○△重复模式",
      "zh-TW": "○△重複模式",
      vi: "Mẫu lặp lại ○△",
      id: "Pola berulang ○△"
    }
  },
  {
    id: 9,
    question: {
      ko: "어떤 수에 5를 곱한 후 7을 빼면 38이 된다. 이 수는?",
      en: "A number multiplied by 5 and then 7 is subtracted equals 38. What is this number?",
      ja: "ある数に5をかけてから7を引くと38になる。この数は？",
      "zh-CN": "一个数乘以5再减去7等于38。这个数是多少？",
      "zh-TW": "一個數乘以5再減去7等於38。這個數是多少？",
      vi: "Một số nhân với 5 rồi trừ đi 7 bằng 38. Số này là bao nhiêu?",
      id: "Suatu bilangan dikalikan 5 kemudian dikurangi 7 sama dengan 38. Berapa bilangan ini?"
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
      ko: "역산: (38+7)÷5 = 9",
      en: "Reverse calculation: (38+7)÷5 = 9",
      ja: "逆算：(38+7)÷5 = 9",
      "zh-CN": "逆算：(38+7)÷5 = 9",
      "zh-TW": "逆算：(38+7)÷5 = 9",
      vi: "Tính ngược: (38+7)÷5 = 9",
      id: "Perhitungan terbalik: (38+7)÷5 = 9"
    }
  },
  {
    id: 10,
    question: {
      ko: "\"모든 고양이는 동물이다\"가 참일 때, 다음 중 반드시 거짓인 것은?",
      en: "When \"All cats are animals\" is true, which of the following must be false?",
      ja: "「すべての猫は動物である」が真のとき、次のうち必ず偽であるものは？",
      "zh-CN": "当\"所有猫都是动物\"为真时，以下哪个必然为假？",
      "zh-TW": "當\"所有貓都是動物\"為真時，以下哪個必然為假？",
      vi: "Khi \"Tất cả mèo đều là động vật\" là đúng, cái nào sau đây nhất định là sai?",
      id: "Ketika \"Semua kucing adalah hewan\" benar, manakah dari berikut ini yang pasti salah?"
    },
    options: [
      {
        text: {
          ko: "어떤 고양이는 동물이 아니다",
          en: "Some cats are not animals",
          ja: "ある猫は動物ではない",
          "zh-CN": "有些猫不是动物",
          "zh-TW": "有些貓不是動物",
          vi: "Một số con mèo không phải là động vật",
          id: "Beberapa kucing bukan hewan"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "어떤 동물은 고양이가 아니다",
          en: "Some animals are not cats",
          ja: "ある動物は猫ではない",
          "zh-CN": "有些动物不是猫",
          "zh-TW": "有些動物不是貓",
          vi: "Một số động vật không phải là mèo",
          id: "Beberapa hewan bukan kucing"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "모든 동물은 고양이다",
          en: "All animals are cats",
          ja: "すべての動物は猫である",
          "zh-CN": "所有动物都是猫",
          "zh-TW": "所有動物都是貓",
          vi: "Tất cả động vật đều là mèo",
          id: "Semua hewan adalah kucing"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "어떤 고양이는 동물이다",
          en: "Some cats are animals",
          ja: "ある猫は動物である",
          "zh-CN": "有些猫是动物",
          "zh-TW": "有些貓是動物",
          vi: "Một số con mèo là động vật",
          id: "Beberapa kucing adalah hewan"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "A",
    hint: {
      ko: "모순 명제",
      en: "Contradictory proposition",
      ja: "矛盾命題",
      "zh-CN": "矛盾命题",
      "zh-TW": "矛盾命題",
      vi: "Mệnh đề mâu thuẫn",
      id: "Proposisi kontradiktif"
    }
  },
  {
    id: 11,
    question: {
      ko: "정육면체 주사위를 바닥에 굴렸을 때, 위 면이 6이고 앞면이 2라면, 오른쪽 면은? (주사위는 마주보는 면의 합이 7)",
      en: "When rolling a cube dice on the floor, if the top face is 6 and the front face is 2, what is the right face? (Opposite faces of a dice sum to 7)",
      ja: "立方体のサイコロを床で転がしたとき、上面が6で前面が2なら、右面は？(サイコロの向かい合う面の和は7)",
      "zh-CN": "当立方体骰子在地板上滚动时，如果顶面是6，前面是2，那么右面是什么？(骰子相对面的和是7)",
      "zh-TW": "當立方體骰子在地板上滾動時，如果頂面是6，前面是2，那麼右面是什麼？(骰子相對面的和是7)",
      vi: "Khi lăn xúc xắc lập phương trên sàn, nếu mặt trên là 6 và mặt trước là 2, thì mặt bên phải là gì? (Các mặt đối diện của xúc xắc có tổng là 7)",
      id: "Saat melempar dadu kubus di lantai, jika sisi atas adalah 6 dan sisi depan adalah 2, berapa sisi kanan? (Sisi yang berlawanan pada dadu berjumlah 7)"
    },
    options: [
      {
        text: {
          ko: "1",
          en: "1",
          ja: "1",
          "zh-CN": "1",
          "zh-TW": "1",
          vi: "1",
          id: "1"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "3",
          en: "3",
          ja: "3",
          "zh-CN": "3",
          "zh-TW": "3",
          vi: "3",
          id: "3"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "4",
          en: "4",
          ja: "4",
          "zh-CN": "4",
          "zh-TW": "4",
          vi: "4",
          id: "4"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "5",
          en: "5",
          ja: "5",
          "zh-CN": "5",
          "zh-TW": "5",
          vi: "5",
          id: "5"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "6의 반대=1(아래), 2의 반대=5(뒤), 남은 3과 4 중 오른쪽=3",
      en: "Opposite of 6=1(bottom), opposite of 2=5(back), right side among remaining 3 and 4=3",
      ja: "6の反対=1(下)、2の反対=5(後ろ)、残りの3と4の中で右=3",
      "zh-CN": "6的对面=1(下)，2的对面=5(后)，剩余3和4中右边=3",
      "zh-TW": "6的對面=1(下)，2的對面=5(後)，剩餘3和4中右邊=3",
      vi: "Đối diện của 6=1(dưới), đối diện của 2=5(sau), bên phải trong số 3 và 4 còn lại=3",
      id: "Berlawanan dengan 6=1(bawah), berlawanan dengan 2=5(belakang), sisi kanan di antara 3 dan 4 yang tersisa=3"
    }
  },
  {
    id: 12,
    question: {
      ko: "5명이 일렬로 줄을 선다. 철수는 영희보다 앞에 있고, 민수는 철수보다 뒤에 있으며, 영희는 가장 앞이 아니다. 영희는 최소 몇 번째인가?",
      en: "5 people line up in a row. Chulsoo is in front of Younghee, Minsoo is behind Chulsoo, and Younghee is not at the front. What is the minimum position of Younghee?",
      ja: "5人が一列に並ぶ。チュルスはヨンヒより前にいて、ミンスはチュルスの後ろにいて、ヨンヒは一番前ではない。ヨンヒは最低何番目か？",
      "zh-CN": "5个人排成一队。哲洙在英姬前面，民洙在哲洙后面，英姬不是最前面。英姬最少是第几位？",
      "zh-TW": "5個人排成一隊。哲洙在英姬前面，民洙在哲洙後面，英姬不是最前面。英姬最少是第幾位？",
      vi: "5 người xếp hàng. Chulsoo đứng trước Younghee, Minsoo đứng sau Chulsoo, và Younghee không đứng đầu. Vị trí tối thiểu của Younghee là gì?",
      id: "5 orang berbaris. Chulsoo di depan Younghee, Minsoo di belakang Chulsoo, dan Younghee bukan yang paling depan. Posisi minimum Younghee adalah?"
    },
    options: [
      {
        text: {
          ko: "1번째",
          en: "1st",
          ja: "1番目",
          "zh-CN": "第1位",
          "zh-TW": "第1位",
          vi: "Vị trí 1",
          id: "Posisi 1"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "2번째",
          en: "2nd",
          ja: "2番目",
          "zh-CN": "第2位",
          "zh-TW": "第2位",
          vi: "Vị trí 2",
          id: "Posisi 2"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "3번째",
          en: "3rd",
          ja: "3番目",
          "zh-CN": "第3位",
          "zh-TW": "第3位",
          vi: "Vị trí 3",
          id: "Posisi 3"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "4번째",
          en: "4th",
          ja: "4番目",
          "zh-CN": "第4位",
          "zh-TW": "第4位",
          vi: "Vị trí 4",
          id: "Posisi 4"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "영희는 앞이 아니므로 최소 2번째, 철수는 영희 앞이므로 최소 1번째",
      en: "Younghee is not at the front so minimum 2nd, Chulsoo is in front of Younghee so minimum 1st",
      ja: "ヨンヒは一番前ではないので最低2番目、チュルスはヨンヒの前なので最低1番目",
      "zh-CN": "英姬不是最前面所以最少第2位，哲洙在英姬前面所以最少第1位",
      "zh-TW": "英姬不是最前面所以最少第2位，哲洙在英姬前面所以最少第1位",
      vi: "Younghee không đứng đầu nên tối thiểu vị trí 2, Chulsoo đứng trước Younghee nên tối thiểu vị trí 1",
      id: "Younghee bukan yang paling depan jadi minimum posisi 2, Chulsoo di depan Younghee jadi minimum posisi 1"
    }
  }
];

// 두뇌 퀴즈 결과 데이터
export const brainQuizResults: BrainQuizResult[] = [
  {
    type: "genius",
    title: {
      ko: "천재형 브레인",
      en: "Genius Brain",
      ja: "天才型ブレイン",
      "zh-CN": "天才型大脑",
      "zh-TW": "天才型大腦",
      vi: "Bộ não thiên tài",
      id: "Otak Jenius"
    },
    description: {
      ko: "12점 만점! 완벽한 두뇌, 당신은 천재입니다\n모든 영역에서 탁월한 능력을 보입니다! 논리, 수학, 언어, 공간지각 모두 완벽합니다. 빠른 사고와 정확한 판단력이 뛰어납니다. 복잡한 문제도 쉽게 해결하는 당신, 멘사에 도전해보는 건 어떨까요?",
      en: "Perfect score! Perfect brain, you are a genius\nYou show excellent abilities in all areas! Logic, math, language, spatial perception are all perfect. You have excellent quick thinking and accurate judgment. You who easily solve complex problems, how about challenging Mensa?",
      ja: "満点！完璧な脳、あなたは天才です\nすべての領域で優れた能力を示します！論理、数学、言語、空間知覚すべて完璧です。素早い思考と正確な判断力に優れています。複雑な問題も簡単に解決するあなた、メンサに挑戦してみませんか？",
      "zh-CN": "满分！完美的大脑，你是天才\n在所有领域都表现出色！逻辑、数学、语言、空间知觉都很完美。你具有出色的快速思考和准确判断力。能轻松解决复杂问题的你，要不要挑战门萨？",
      "zh-TW": "滿分！完美的大腦，你是天才\n在所有領域都表現出色！邏輯、數學、語言、空間知覺都很完美。你具有出色的快速思考和準確判斷力。能輕鬆解決複雜問題的你，要不要挑戰門薩？",
      vi: "Điểm tuyệt đối! Bộ não hoàn hảo, bạn là thiên tài\nBạn thể hiện khả năng xuất sắc trong mọi lĩnh vực! Logic, toán học, ngôn ngữ, nhận thức không gian đều hoàn hảo. Bạn có tư duy nhanh và khả năng phán đoán chính xác. Bạn dễ dàng giải quyết các vấn đề phức tạp, thử thách Mensa nhé?",
      id: "Skor sempurna! Otak sempurna, Anda adalah jenius\nAnda menunjukkan kemampuan luar biasa di semua bidang! Logika, matematika, bahasa, persepsi spasial semuanya sempurna. Anda memiliki pemikiran cepat dan penilaian yang akurat. Anda yang mudah menyelesaikan masalah kompleks, bagaimana dengan menantang Mensa?"
    },
    emoji: "🧠⚡",
    scoreRange: [11, 12],
    strengths: [
      {
        ko: "종합 사고력",
        en: "Comprehensive thinking",
        ja: "総合思考力",
        "zh-CN": "综合思考力",
        "zh-TW": "綜合思考力",
        vi: "Tư duy tổng hợp",
        id: "Pemikiran komprehensif"
      },
      {
        ko: "문제 해결",
        en: "Problem solving",
        ja: "問題解決",
        "zh-CN": "问题解决",
        "zh-TW": "問題解決",
        vi: "Giải quyết vấn đề",
        id: "Pemecahan masalah"
      },
      {
        ko: "패턴 인식",
        en: "Pattern recognition",
        ja: "パターン認識",
        "zh-CN": "模式识别",
        "zh-TW": "模式識別",
        vi: "Nhận dạng mẫu",
        id: "Pengenalan pola"
      },
      {
        ko: "논리적 추론",
        en: "Logical reasoning",
        ja: "論理的推論",
        "zh-CN": "逻辑推理",
        "zh-TW": "邏輯推理",
        vi: "Lý luận logic",
        id: "Penalaran logis"
      }
    ],
    recommendations: [
      {
        ko: "전략 게임",
        en: "Strategy games",
        ja: "戦略ゲーム",
        "zh-CN": "策略游戏",
        "zh-TW": "策略遊戲",
        vi: "Trò chơi chiến thuật",
        id: "Permainan strategi"
      },
      {
        ko: "수학 퍼즐",
        en: "Math puzzles",
        ja: "数学パズル",
        "zh-CN": "数学谜题",
        "zh-TW": "數學謎題",
        vi: "Câu đố toán học",
        id: "Teka-teki matematika"
      },
      {
        ko: "체스",
        en: "Chess",
        ja: "チェス",
        "zh-CN": "国际象棋",
        "zh-TW": "國際象棋",
        vi: "Cờ vua",
        id: "Catur"
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
      ko: "지속적인 두뇌 자극으로 능력을 더 발전시키세요!",
      en: "Develop your abilities further with continuous brain stimulation!",
      ja: "継続的な脳刺激で能力をさらに発展させてください！",
      "zh-CN": "通过持续的大脑刺激进一步发展你的能力！",
      "zh-TW": "通過持續的大腦刺激進一步發展你的能力！",
      vi: "Phát triển khả năng hơn nữa với sự kích thích não bộ liên tục!",
      id: "Kembangkan kemampuan Anda lebih lanjut dengan stimulasi otak yang berkelanjutan!"
    }
  },
  {
    type: "logic_master",
    title: {
      ko: "논리 마스터형",
      en: "Logic Master",
      ja: "論理マスター型",
      "zh-CN": "逻辑大师型",
      "zh-TW": "邏輯大師型",
      vi: "Bậc thầy logic",
      id: "Master Logika"
    },
    description: {
      ko: "뛰어난 논리력의 소유자\n논리적 사고와 추론 능력이 매우 우수합니다. 복잡한 상황도 체계적으로 분석하며 합리적 결론을 도출합니다. 수학적 사고와 패턴 인식도 뛰어납니다. 전략적 직업이나 분석 업무에 최적화된 두뇌입니다.",
      en: "Owner of excellent logical ability\nYou have excellent logical thinking and reasoning abilities. You systematically analyze complex situations and draw rational conclusions. You also excel in mathematical thinking and pattern recognition. Your brain is optimized for strategic jobs or analytical work.",
      ja: "優れた論理力の持ち主\n論理的思考と推論能力が非常に優れています。複雑な状況も体系的に分析し、合理的な結論を導きます。数学的思考とパターン認識も優れています。戦略的職業や分析業務に最適化された脳です。",
      "zh-CN": "优秀逻辑能力的拥有者\n你具有出色的逻辑思维和推理能力。你能系统地分析复杂情况并得出合理结论。你在数学思维和模式识别方面也很出色。你的大脑最适合战略职业或分析工作。",
      "zh-TW": "優秀邏輯能力的擁有者\n你具有出色的邏輯思維和推理能力。你能系統地分析複雜情況並得出合理結論。你在數學思維和模式識別方面也很出色。你的大腦最適合戰略職業或分析工作。",
      vi: "Chủ sở hữu khả năng logic xuất sắc\nBạn có khả năng tư duy logic và suy luận rất tốt. Bạn phân tích có hệ thống các tình huống phức tạp và đưa ra kết luận hợp lý. Bạn cũng xuất sắc trong tư duy toán học và nhận dạng mẫu. Bộ não của bạn được tối ưu hóa cho công việc chiến lược hoặc phân tích.",
      id: "Pemilik kemampuan logika yang luar biasa\nAnda memiliki kemampuan berpikir logis dan penalaran yang sangat baik. Anda menganalisis situasi kompleks secara sistematis dan menarik kesimpulan yang rasional. Anda juga unggul dalam pemikiran matematis dan pengenalan pola. Otak Anda dioptimalkan untuk pekerjaan strategis atau analitis."
    },
    emoji: "🎯",
    scoreRange: [9, 10],
    strengths: [
      {
        ko: "논리적 추론",
        en: "Logical reasoning",
        ja: "論理的推論",
        "zh-CN": "逻辑推理",
        "zh-TW": "邏輯推理",
        vi: "Lý luận logic",
        id: "Penalaran logis"
      },
      {
        ko: "분석력",
        en: "Analytical ability",
        ja: "分析力",
        "zh-CN": "分析能力",
        "zh-TW": "分析能力",
        vi: "Khả năng phân tích",
        id: "Kemampuan analisis"
      },
      {
        ko: "체계적 사고",
        en: "Systematic thinking",
        ja: "体系的思考",
        "zh-CN": "系统思维",
        "zh-TW": "系統思維",
        vi: "Tư duy có hệ thống",
        id: "Pemikiran sistematis"
      }
    ],
    recommendations: [
      {
        ko: "추리 소설",
        en: "Mystery novels",
        ja: "推理小説",
        "zh-CN": "推理小说",
        "zh-TW": "推理小說",
        vi: "Tiểu thuyết trinh thám",
        id: "Novel misteri"
      },
      {
        ko: "전략 게임",
        en: "Strategy games",
        ja: "戦略ゲーム",
        "zh-CN": "策略游戏",
        "zh-TW": "策略遊戲",
        vi: "Trò chơi chiến thuật",
        id: "Permainan strategi"
      },
      {
        ko: "논리 퍼즐",
        en: "Logic puzzles",
        ja: "論理パズル",
        "zh-CN": "逻辑谜题",
        "zh-TW": "邏輯謎題",
        vi: "Câu đố logic",
        id: "Teka-teki logika"
      }
    ],
    advice: {
      ko: "창의적 사고 훈련으로 균형을 맞춰보세요!",
      en: "Try to balance with creative thinking training!",
      ja: "創造的思考訓練でバランスを取ってみてください！",
      "zh-CN": "通过创造性思维训练来平衡！",
      "zh-TW": "通過創造性思維訓練來平衡！",
      vi: "Hãy thử cân bằng với việc rèn luyện tư duy sáng tạo!",
      id: "Coba seimbangkan dengan latihan pemikiran kreatif!"
    }
  },
  {
    type: "balanced",
    title: {
      ko: "균형잡힌 올라운더형",
      en: "Balanced All-Rounder",
      ja: "バランス型オールラウンダー",
      "zh-CN": "平衡型全能选手",
      "zh-TW": "平衡型全能選手",
      vi: "Cân bằng toàn diện",
      id: "Seimbang Serbaguna"
    },
    description: {
      ko: "골고루 발달한 안정적인 두뇌\n모든 영역에서 고른 능력을 보입니다. 특별히 약한 부분 없이 균형잡힌 사고를 합니다. 실수도 적고 안정적인 판단을 내립니다. 다양한 상황에 잘 대처하는 실용적인 두뇌 유형입니다.",
      en: "Stable brain that has developed evenly\nYou show balanced abilities in all areas. You think in a balanced way without any particularly weak areas. You make few mistakes and make stable judgments. It's a practical brain type that handles various situations well.",
      ja: "バランスよく発達した安定した脳\nすべての領域でバランスの取れた能力を示します。特に弱い部分なくバランスの取れた思考をします。ミスも少なく安定した判断を下します。様々な状況にうまく対処する実用的な脳タイプです。",
      "zh-CN": "均衡发展的稳定大脑\n在所有领域都表现出平衡的能力。没有特别薄弱的部分，思维平衡。失误少，判断稳定。是能很好应对各种情况的实用大脑类型。",
      "zh-TW": "均衡發展的穩定大腦\n在所有領域都表現出平衡的能力。沒有特別薄弱的部分，思維平衡。失誤少，判斷穩定。是能很好應對各種情況的實用大腦類型。",
      vi: "Bộ não ổn định phát triển đều\nBạn thể hiện khả năng cân bằng trong mọi lĩnh vực. Bạn suy nghĩ cân bằng mà không có phần nào đặc biệt yếu. Bạn ít mắc lỗi và đưa ra phán đoán ổn định. Đây là loại não thực tế xử lý tốt các tình huống khác nhau.",
      id: "Otak stabil yang berkembang merata\nAnda menunjukkan kemampuan seimbang di semua bidang. Anda berpikir seimbang tanpa area yang lemah. Anda jarang membuat kesalahan dan membuat penilaian yang stabil. Ini adalah tipe otak praktis yang menangani berbagai situasi dengan baik."
    },
    emoji: "⚖️",
    scoreRange: [7, 8],
    strengths: [
      {
        ko: "균형감",
        en: "Sense of balance",
        ja: "バランス感覚",
        "zh-CN": "平衡感",
        "zh-TW": "平衡感",
        vi: "Cảm giác cân bằng",
        id: "Rasa keseimbangan"
      },
      {
        ko: "안정성",
        en: "Stability",
        ja: "安定性",
        "zh-CN": "稳定性",
        "zh-TW": "穩定性",
        vi: "Tính ổn định",
        id: "Stabilitas"
      },
      {
        ko: "적응력",
        en: "Adaptability",
        ja: "適応力",
        "zh-CN": "适应力",
        "zh-TW": "適應力",
        vi: "Khả năng thích ứng",
        id: "Kemampuan adaptasi"
      },
      {
        ko: "실용성",
        en: "Practicality",
        ja: "実用性",
        "zh-CN": "实用性",
        "zh-TW": "實用性",
        vi: "Tính thực tế",
        id: "Kepraktisan"
      }
    ],
    recommendations: [
      {
        ko: "다양한 장르의 퍼즐",
        en: "Various genre puzzles",
        ja: "様々なジャンルのパズル",
        "zh-CN": "各种类型的谜题",
        "zh-TW": "各種類型的謎題",
        vi: "Câu đố đa dạng thể loại",
        id: "Teka-teki berbagai genre"
      },
      {
        ko: "보드게임",
        en: "Board games",
        ja: "ボードゲーム",
        "zh-CN": "棋盘游戏",
        "zh-TW": "棋盤遊戲",
        vi: "Trò chơi bàn cờ",
        id: "Permainan papan"
      },
      {
        ko: "퀴즈",
        en: "Quizzes",
        ja: "クイズ",
        "zh-CN": "测验",
        "zh-TW": "測驗",
        vi: "Câu đố",
        id: "Kuis"
      }
    ],
    advice: {
      ko: "한 영역을 집중 개발하면 전문가가 될 수 있어요!",
      en: "If you focus on developing one area, you can become an expert!",
      ja: "一つの領域に集中して開発すれば専門家になれます！",
      "zh-CN": "如果专注于开发一个领域，你就能成为专家！",
      "zh-TW": "如果專注於開發一個領域，你就能成為專家！",
      vi: "Nếu tập trung phát triển một lĩnh vực, bạn có thể trở thành chuyên gia!",
      id: "Jika fokus mengembangkan satu area, Anda bisa menjadi ahli!"
    }
  },
  {
    type: "intuitive",
    title: {
      ko: "감각형 직관러형",
      en: "Intuitive Sensitive Type",
      ja: "感覚型直感型",
      "zh-CN": "感觉型直觉者",
      "zh-TW": "感覺型直覺者",
      vi: "Kiểu trực giác cảm tính",
      id: "Tipe Intuitif Sensitif"
    },
    description: {
      ko: "직관과 감각이 발달한 창의적 두뇌\n논리보다는 직관과 감각으로 세상을 이해합니다. 패턴을 느끼고 분위기를 읽는 능력이 뛰어납니다. 창의적이고 예술적 감각이 있지만 논리적 분석은 약할 수 있습니다. 우뇌형 인간의 전형적 특징입니다.",
      en: "Creative brain with developed intuition and senses\nYou understand the world through intuition and senses rather than logic. You excel at feeling patterns and reading the atmosphere. You have creative and artistic sensibilities, but logical analysis may be weak. It's a typical characteristic of right-brain people.",
      ja: "直感と感覚が発達した創造的脳\n論理よりも直感と感覚で世界を理解します。パターンを感じ、雰囲気を読む能力に優れています。創造的で芸術的感覚がありますが、論理的分析は弱いかもしれません。右脳型人間の典型的な特徴です。",
      "zh-CN": "直觉和感觉发达的创造性大脑\n你通过直觉和感觉而不是逻辑来理解世界。你善于感受模式和阅读氛围。你有创造性和艺术感觉，但逻辑分析可能较弱。这是右脑型人的典型特征。",
      "zh-TW": "直覺和感覺發達的創造性大腦\n你通過直覺和感覺而不是邏輯來理解世界。你善於感受模式和閱讀氛圍。你有創造性和藝術感覺，但邏輯分析可能較弱。這是右腦型人的典型特徵。",
      vi: "Bộ não sáng tạo với trực giác và cảm giác phát triển\nBạn hiểu thế giới thông qua trực giác và cảm giác hơn là logic. Bạn xuất sắc trong việc cảm nhận mẫu và đọc không khí. Bạn có cảm quan sáng tạo và nghệ thuật, nhưng phân tích logic có thể yếu. Đây là đặc điểm điển hình của người não phải.",
      id: "Otak kreatif dengan intuisi dan indra yang berkembang\nAnda memahami dunia melalui intuisi dan indra daripada logika. Anda unggul dalam merasakan pola dan membaca suasana. Anda memiliki kepekaan kreatif dan artistik, tetapi analisis logis mungkin lemah. Ini adalah karakteristik khas orang otak kanan."
    },
    emoji: "💡",
    scoreRange: [5, 6],
    strengths: [
      {
        ko: "직관력",
        en: "Intuition",
        ja: "直感力",
        "zh-CN": "直觉力",
        "zh-TW": "直覺力",
        vi: "Trực giác",
        id: "Intuisi"
      },
      {
        ko: "창의성",
        en: "Creativity",
        ja: "創造性",
        "zh-CN": "创造性",
        "zh-TW": "創造性",
        vi: "Tính sáng tạo",
        id: "Kreativitas"
      },
      {
        ko: "감수성",
        en: "Sensitivity",
        ja: "感受性",
        "zh-CN": "敏感性",
        "zh-TW": "敏感性",
        vi: "Tính nhạy cảm",
        id: "Kepekaan"
      },
      {
        ko: "패턴 감각",
        en: "Pattern sense",
        ja: "パターン感覚",
        "zh-CN": "模式感觉",
        "zh-TW": "模式感覺",
        vi: "Cảm giác mẫu",
        id: "Rasa pola"
      }
    ],
    recommendations: [
      {
        ko: "예술 활동",
        en: "Art activities",
        ja: "芸術活動",
        "zh-CN": "艺术活动",
        "zh-TW": "藝術活動",
        vi: "Hoạt động nghệ thuật",
        id: "Aktivitas seni"
      },
      {
        ko: "창작",
        en: "Creative work",
        ja: "創作",
        "zh-CN": "创作",
        "zh-TW": "創作",
        vi: "Sáng tác",
        id: "Karya kreatif"
      },
      {
        ko: "디자인",
        en: "Design",
        ja: "デザイン",
        "zh-CN": "设计",
        "zh-TW": "設計",
        vi: "Thiết kế",
        id: "Desain"
      },
      {
        ko: "음악",
        en: "Music",
        ja: "音楽",
        "zh-CN": "音乐",
        "zh-TW": "音樂",
        vi: "Âm nhạc",
        id: "Musik"
      }
    ],
    advice: {
      ko: "논리 훈련으로 좌뇌도 함께 발달시키세요!",
      en: "Develop your left brain too with logic training!",
      ja: "論理訓練で左脳も一緒に発達させてください！",
      "zh-CN": "通过逻辑训练也发展你的左脑！",
      "zh-TW": "通過邏輯訓練也發展你的左腦！",
      vi: "Phát triển não trái của bạn với việc rèn luyện logic!",
      id: "Kembangkan otak kiri Anda juga dengan latihan logika!"
    }
  },
  {
    type: "practical",
    title: {
      ko: "실용적 현실형",
      en: "Practical Realist",
      ja: "実用的現実型",
      "zh-CN": "实用现实型",
      "zh-TW": "實用現實型",
      vi: "Kiểu thực tế thực dụng",
      id: "Tipe Realis Praktis"
    },
    description: {
      ko: "경험과 상식으로 판단하는 현실주의자\n\n복잡한 논리보다는 경험과 상식을 중시합니다. 실생활에서 필요한 판단은 잘하지만 추상적 문제는 어려워합니다. 실용적이고 현실적인 사고를 하는 타입으로, 이론보다는 경험이 강점입니다.",
      en: "Realist who judges based on experience and common sense\nYou value experience and common sense over complex logic. You make good judgments needed in real life, but abstract problems are difficult. You're a type that thinks practically and realistically, with experience being your strength rather than theory.",
      ja: "経験と常識で判断する現実主義者\n複雑な論理よりも経験と常識を重視します。実生活で必要な判断はよくしますが、抽象的な問題は困難です。実用的で現実的な思考をするタイプで、理論よりも経験が強みです。",
      "zh-CN": "基于经验和常识判断的现实主义者\n你重视经验和常识胜过复杂逻辑。你在现实生活中做出良好判断，但抽象问题很困难。你是实用和现实思考的类型，经验比理论更有优势。",
      "zh-TW": "基於經驗和常識判斷的現實主義者\n你重視經驗和常識勝過複雜邏輯。你在現實生活中做出良好判斷，但抽象問題很困難。你是實用和現實思考的類型，經驗比理論更有優勢。",
      vi: "Người thực tế đánh giá dựa trên kinh nghiệm và lẽ thường\nBạn coi trọng kinh nghiệm và lẽ thường hơn logic phức tạp. Bạn đưa ra phán đoán tốt cần thiết trong cuộc sống thực, nhưng các vấn đề trừu tượng thì khó khăn. Bạn là kiểu suy nghĩ thực tế và hiện thực, với kinh nghiệm là điểm mạnh hơn lý thuyết.",
      id: "Realist yang menilai berdasarkan pengalaman dan akal sehat\nAnda menghargai pengalaman dan akal sehat daripada logika kompleks. Anda membuat penilaian yang baik yang dibutuhkan dalam kehidupan nyata, tetapi masalah abstrak sulit. Anda adalah tipe yang berpikir praktis dan realistis, dengan pengalaman sebagai kekuatan daripada teori."
    },
    emoji: "🔧",
    scoreRange: [3, 4],
    strengths: [
      {
        ko: "실용성",
        en: "Practicality",
        ja: "実用性",
        "zh-CN": "实用性",
        "zh-TW": "實用性",
        vi: "Tính thực tế",
        id: "Kepraktisan"
      },
      {
        ko: "현실감각",
        en: "Sense of reality",
        ja: "現実感覚",
        "zh-CN": "现实感",
        "zh-TW": "現實感",
        vi: "Cảm giác thực tế",
        id: "Rasa realitas"
      },
      {
        ko: "상식",
        en: "Common sense",
        ja: "常識",
        "zh-CN": "常识",
        "zh-TW": "常識",
        vi: "Lẽ thường",
        id: "Akal sehat"
      },
      {
        ko: "경험",
        en: "Experience",
        ja: "経験",
        "zh-CN": "经验",
        "zh-TW": "經驗",
        vi: "Kinh nghiệm",
        id: "Pengalaman"
      }
    ],
    recommendations: [
      {
        ko: "일상 퍼즐",
        en: "Daily puzzles",
        ja: "日常パズル",
        "zh-CN": "日常谜题",
        "zh-TW": "日常謎題",
        vi: "Câu đố hàng ngày",
        id: "Teka-teki sehari-hari"
      },
      {
        ko: "실용 지식",
        en: "Practical knowledge",
        ja: "実用知識",
        "zh-CN": "实用知识",
        "zh-TW": "實用知識",
        vi: "Kiến thức thực tế",
        id: "Pengetahuan praktis"
      },
      {
        ko: "상식 퀴즈",
        en: "Common sense quizzes",
        ja: "常識クイズ",
        "zh-CN": "常识测验",
        "zh-TW": "常識測驗",
        vi: "Câu đố lẽ thường",
        id: "Kuis akal sehat"
      }
    ],
    advice: {
      ko: "조금씩 논리 문제에 도전해보세요. 두뇌는 훈련으로 발달합니다!",
      en: "Try challenging logic problems little by little. The brain develops through training!",
      ja: "少しずつ論理問題に挑戦してみてください。脳は訓練で発達します！",
      "zh-CN": "慢慢挑战逻辑问题。大脑通过训练发展！",
      "zh-TW": "慢慢挑戰邏輯問題。大腦通過訓練發展！",
      vi: "Hãy thử thách thức các vấn đề logic từng chút một. Bộ não phát triển thông qua rèn luyện!",
      id: "Coba tantang masalah logika sedikit demi sedikit. Otak berkembang melalui latihan!"
    }
  },
  {
    type: "sleeping",
    title: {
      ko: "잠자는 두뇌형",
      en: "Sleeping Brain",
      ja: "眠っている脳型",
      "zh-CN": "沉睡大脑型",
      "zh-TW": "沉睡大腦型",
      vi: "Kiểu não ngủ",
      id: "Tipe Otak Tidur"
    },
    description: {
      ko: "지금 두뇌를 깨워야 할 시간!\n두뇌가 깊은 잠에 빠져있습니다! 하지만 걱정 마세요. 두뇌는 사용할수록 발달합니다. 꾸준한 훈련으로 충분히 발전할 수 있습니다. 오늘부터 간단한 퍼즐이나 퀴즈로 두뇌를 깨워보세요. 잠재력은 무한합니다!",
      en: "It's time to wake up your brain!\nYour brain is in a deep sleep! But don't worry. The brain develops the more you use it. You can develop sufficiently through steady training. Starting today, wake up your brain with simple puzzles or quizzes. Your potential is infinite!",
      ja: "今、脳を起こす時です！\n脳が深い眠りに落ちています！でも心配しないでください。脳は使えば使うほど発達します。着実な訓練で十分に発達できます。今日から簡単なパズルやクイズで脳を起こしてみてください。可能性は無限です！",
      "zh-CN": "现在是唤醒大脑的时候！\n你的大脑正在沉睡！但别担心。大脑越用越发达。通过持续训练可以充分发展。从今天开始，用简单的谜题或测验唤醒你的大脑。潜力是无限的！",
      "zh-TW": "現在是喚醒大腦的時候！\n你的大腦正在沉睡！但別擔心。大腦越用越發達。通過持續訓練可以充分發展。從今天開始，用簡單的謎題或測驗喚醒你的大腦。潛力是無限的！",
      vi: "Đã đến lúc đánh thức bộ não của bạn!\nBộ não của bạn đang trong giấc ngủ sâu! Nhưng đừng lo lắng. Bộ não phát triển càng nhiều khi bạn sử dụng. Bạn có thể phát triển đầy đủ thông qua rèn luyện đều đặn. Bắt đầu từ hôm nay, hãy đánh thức bộ não với những câu đố hoặc câu hỏi đơn giản. Tiềm năng là vô hạn!",
      id: "Saatnya membangunkan otak Anda!\nOtak Anda tertidur lelap! Tapi jangan khawatir. Otak berkembang semakin banyak digunakan. Anda bisa berkembang cukup melalui latihan yang konsisten. Mulai hari ini, bangunkan otak Anda dengan teka-teki atau kuis sederhana. Potensinya tak terbatas!"
    },
    emoji: "😴",
    scoreRange: [0, 2],
    strengths: [
      {
        ko: "무한한 발전 가능성",
        en: "Infinite development potential",
        ja: "無限の発展可能性",
        "zh-CN": "无限发展潜力",
        "zh-TW": "無限發展潛力",
        vi: "Tiềm năng phát triển vô hạn",
        id: "Potensi pengembangan tak terbatas"
      }
    ],
    recommendations: [
      {
        ko: "쉬운 퍼즐부터 시작",
        en: "Start with easy puzzles",
        ja: "簡単なパズルから始める",
        "zh-CN": "从简单谜题开始",
        "zh-TW": "從簡單謎題開始",
        vi: "Bắt đầu với câu đố dễ",
        id: "Mulai dengan teka-teki mudah"
      },
      {
        ko: "두뇌 훈련 앱",
        en: "Brain training apps",
        ja: "脳トレアプリ",
        "zh-CN": "大脑训练应用",
        "zh-TW": "大腦訓練應用",
        vi: "Ứng dụng rèn luyện não",
        id: "Aplikasi latihan otak"
      },
      {
        ko: "간단한 수학",
        en: "Simple math",
        ja: "簡単な数学",
        "zh-CN": "简单数学",
        "zh-TW": "簡單數學",
        vi: "Toán học đơn giản",
        id: "Matematika sederhana"
      }
    ],
    advice: {
      ko: "매일 10분씩 두뇌 운동을 해보세요. 한 달 후 놀라운 변화를 경험할 거예요!",
      en: "Try 10 minutes of brain exercise every day. You'll experience amazing changes after a month!",
      ja: "毎日10分ずつ脳運動をしてみてください。一ヶ月後に驚くような変化を体験するでしょう！",
      "zh-CN": "每天做10分钟大脑运动。一个月后你会体验到惊人的变化！",
      "zh-TW": "每天做10分鐘大腦運動。一個月後你會體驗到驚人的變化！",
      vi: "Hãy thử tập thể dục cho não 10 phút mỗi ngày. Bạn sẽ trải nghiệm những thay đổi đáng kinh ngạc sau một tháng!",
      id: "Coba latihan otak 10 menit setiap hari. Anda akan mengalami perubahan menakjubkan setelah sebulan!"
    }
  }
];

// 점수 계산 함수
export const calculateBrainQuizResult = (answers: boolean[]): string => {
  const correctCount = answers.filter(answer => answer).length;
  
  if (correctCount >= 11) return "genius";
  if (correctCount >= 9) return "logic_master";
  if (correctCount >= 7) return "balanced";
  if (correctCount >= 5) return "intuitive";
  if (correctCount >= 3) return "practical";
  return "sleeping";
};
