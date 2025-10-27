// 초고난도 퀴즈 테스트 데이터 타입 정의
export interface ExtremeQuizQuestion {
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

export interface ExtremeQuizResult {
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

// 초고난도 퀴즈 질문 데이터
export const extremeQuizQuestions: ExtremeQuizQuestion[] = [
  {
    id: 1,
    question: {
      ko: "다음 수열의 규칙을 찾아 ?를 구하세요: 2, 3, 5, 7, 11, 13, ?",
      en: "Find the rule of the following sequence and find ?: 2, 3, 5, 7, 11, 13, ?",
      ja: "次の数列の規則を見つけて?を求めなさい: 2, 3, 5, 7, 11, 13, ?",
      "zh-CN": "找出以下数列的规律并求?：2, 3, 5, 7, 11, 13, ?",
      "zh-TW": "找出以下數列的規律並求?：2, 3, 5, 7, 11, 13, ?",
      vi: "Tìm quy luật của dãy số sau và tìm ?: 2, 3, 5, 7, 11, 13, ?",
      id: "Temukan aturan dari barisan berikut dan cari ?: 2, 3, 5, 7, 11, 13, ?"
    },
    options: [
      {
        text: {
          ko: "15",
          en: "15",
          ja: "15",
          "zh-CN": "15",
          "zh-TW": "15",
          vi: "15",
          id: "15"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "17",
          en: "17",
          ja: "17",
          "zh-CN": "17",
          "zh-TW": "17",
          vi: "17",
          id: "17"
        },
        isCorrect: true
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
          ko: "21",
          en: "21",
          ja: "21",
          "zh-CN": "21",
          "zh-TW": "21",
          vi: "21",
          id: "21"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "소수 수열, 다음 소수는 17",
      en: "Prime number sequence, next prime is 17",
      ja: "素数数列、次の素数は17",
      "zh-CN": "素数数列，下一个素数是17",
      "zh-TW": "素數數列，下一個素數是17",
      vi: "Dãy số nguyên tố, số nguyên tố tiếp theo là 17",
      id: "Barisan bilangan prima, bilangan prima berikutnya adalah 17"
    }
  },
  {
    id: 2,
    question: {
      ko: "A는 B의 아버지입니다. C는 A의 딸입니다. D는 C의 아들입니다. B와 D의 관계는?",
      en: "A is B's father. C is A's daughter. D is C's son. What is the relationship between B and D?",
      ja: "AはBの父親です。CはAの娘です。DはCの息子です。BとDの関係は？",
      "zh-CN": "A是B的父亲。C是A的女儿。D是C的儿子。B和D的关系是什么？",
      "zh-TW": "A是B的父親。C是A的女兒。D是C的兒子。B和D的關係是什麼？",
      vi: "A là cha của B. C là con gái của A. D là con trai của C. Mối quan hệ giữa B và D là gì?",
      id: "A adalah ayah B. C adalah putri A. D adalah putra C. Apa hubungan antara B dan D?"
    },
    options: [
      {
        text: {
          ko: "삼촌과 조카",
          en: "Uncle and nephew",
          ja: "おじと甥",
          "zh-CN": "叔叔和侄子",
          "zh-TW": "叔叔和侄子",
          vi: "Chú và cháu trai",
          id: "Paman dan keponakan"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "고모와 조카",
          en: "Aunt and nephew",
          ja: "おばと甥",
          "zh-CN": "姑姑和侄子",
          "zh-TW": "姑姑和侄子",
          vi: "Cô và cháu trai",
          id: "Bibi dan keponakan"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "할아버지와 손자",
          en: "Grandfather and grandson",
          ja: "祖父と孫",
          "zh-CN": "爷爷和孙子",
          "zh-TW": "爺爺和孫子",
          vi: "Ông và cháu trai",
          id: "Kakek dan cucu"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "아버지와 아들",
          en: "Father and son",
          ja: "父と子",
          "zh-CN": "父亲和儿子",
          "zh-TW": "父親和兒子",
          vi: "Cha và con trai",
          id: "Ayah dan anak"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "A",
    hint: {
      ko: "B는 D의 삼촌",
      en: "B is D's uncle",
      ja: "BはDのおじ",
      "zh-CN": "B是D的叔叔",
      "zh-TW": "B是D的叔叔",
      vi: "B là chú của D",
      id: "B adalah paman D"
    }
  },
  {
    id: 3,
    question: {
      ko: "1000을 8로 나눈 나머지는?",
      en: "What is the remainder when 1000 is divided by 8?",
      ja: "1000を8で割った余りは？",
      "zh-CN": "1000除以8的余数是多少？",
      "zh-TW": "1000除以8的餘數是多少？",
      vi: "Số dư khi chia 1000 cho 8 là bao nhiêu?",
      id: "Berapa sisa ketika 1000 dibagi 8?"
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
        isCorrect: true
      },
      {
        text: {
          ko: "2",
          en: "2",
          ja: "2",
          "zh-CN": "2",
          "zh-TW": "2",
          vi: "2",
          id: "2"
        },
        isCorrect: false
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
          ko: "6",
          en: "6",
          ja: "6",
          "zh-CN": "6",
          "zh-TW": "6",
          vi: "6",
          id: "6"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "A",
    hint: {
      ko: "1000 = 8×125, 나머지 0",
      en: "1000 = 8×125, remainder 0",
      ja: "1000 = 8×125、余り0",
      "zh-CN": "1000 = 8×125，余数0",
      "zh-TW": "1000 = 8×125，餘數0",
      vi: "1000 = 8×125, số dư 0",
      id: "1000 = 8×125, sisa 0"
    }
  },
  {
    id: 4,
    question: {
      ko: "진실을 말하는 사람과 거짓말하는 사람이 있습니다. 한 사람에게 한 질문만으로 다른 한 사람이 누구인지 알 수 있는 질문은?",
      en: "There are truth-tellers and liars. What question can you ask one person to find out who the other person is?",
      ja: "真実を話す人と嘘つきがいます。一人に一つの質問だけで、もう一人が誰かを知ることができる質問は？",
      "zh-CN": "有说真话的人和说谎的人。只问一个人一个问题就能知道另一个人是谁的问题是什么？",
      "zh-TW": "有說真話的人和說謊的人。只問一個人一個問題就能知道另一個人是誰的問題是什麼？",
      vi: "Có người nói thật và người nói dối. Câu hỏi nào có thể hỏi một người để biết người kia là ai?",
      id: "Ada orang yang berkata jujur dan pembohong. Pertanyaan apa yang bisa ditanyakan kepada satu orang untuk mengetahui siapa orang lain itu?"
    },
    options: [
      {
        text: {
          ko: "\"당신은 진실을 말하나요?\"",
          en: "\"Do you tell the truth?\"",
          ja: "「あなたは真実を話しますか？」",
          "zh-CN": "\"你说真话吗？\"",
          "zh-TW": "\"你說真話嗎？\"",
          vi: "\"Bạn có nói thật không?\"",
          id: "\"Apakah Anda berkata jujur?\""
        },
        isCorrect: false
      },
      {
        text: {
          ko: "\"저 사람은 거짓말쟁이인가요?\"",
          en: "\"Is that person a liar?\"",
          ja: "「あの人は嘘つきですか？」",
          "zh-CN": "\"那个人是骗子吗？\"",
          "zh-TW": "\"那個人是騙子嗎？\"",
          vi: "\"Người đó có phải là kẻ nói dối không?\"",
          id: "\"Apakah orang itu pembohong?\""
        },
        isCorrect: false
      },
      {
        text: {
          ko: "\"당신이 저 사람이라면 제가 거짓말쟁이라고 말하겠습니까?\"",
          en: "\"If you were that person, would you say I'm a liar?\"",
          ja: "「あなたがその人なら、私を嘘つきだと言いますか？」",
          "zh-CN": "\"如果你是那个人，你会说我是骗子吗？\"",
          "zh-TW": "\"如果你是那個人，你會說我是騙子嗎？\"",
          vi: "\"Nếu bạn là người đó, bạn có nói tôi là kẻ nói dối không?\"",
          id: "\"Jika Anda adalah orang itu, apakah Anda akan mengatakan saya pembohong?\""
        },
        isCorrect: true
      },
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
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "양쪽 모두 같은 답을 함",
      en: "Both give the same answer",
      ja: "両方とも同じ答えをする",
      "zh-CN": "两边都给出相同的答案",
      "zh-TW": "兩邊都給出相同的答案",
      vi: "Cả hai đều đưa ra câu trả lời giống nhau",
      id: "Keduanya memberikan jawaban yang sama"
    }
  },
  {
    id: 5,
    question: {
      ko: "3개의 스위치가 방 밖에 있고, 3개의 전구가 방 안에 있습니다. 방에 한 번만 들어가서 어느 스위치가 어느 전구인지 모두 알아낼 수 있나요?",
      en: "There are 3 switches outside a room and 3 light bulbs inside the room. Can you determine which switch controls which bulb by entering the room only once?",
      ja: "部屋の外に3つのスイッチがあり、部屋の中に3つの電球があります。部屋に一度だけ入って、どのスイッチがどの電球を制御するかをすべて知ることができますか？",
      "zh-CN": "房间外有3个开关，房间内有3个灯泡。只进房间一次就能知道哪个开关控制哪个灯泡吗？",
      "zh-TW": "房間外有3個開關，房間內有3個燈泡。只進房間一次就能知道哪個開關控制哪個燈泡嗎？",
      vi: "Có 3 công tắc bên ngoài phòng và 3 bóng đèn bên trong phòng. Bạn có thể xác định công tắc nào điều khiển bóng đèn nào chỉ bằng cách vào phòng một lần không?",
      id: "Ada 3 saklar di luar ruangan dan 3 bola lampu di dalam ruangan. Bisakah Anda menentukan saklar mana yang mengontrol bola lampu mana hanya dengan masuk ke ruangan sekali?"
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
          ko: "가능: 2개를 동시에 켜고 들어간다",
          en: "Possible: Turn on 2 at the same time and enter",
          ja: "可能：2つを同時に点灯して入る",
          "zh-CN": "可能：同时打开2个然后进入",
          "zh-TW": "可能：同時打開2個然後進入",
          vi: "Có thể: Bật 2 cái cùng lúc và vào",
          id: "Mungkin: Nyalakan 2 sekaligus dan masuk"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "가능: 1개를 오래 켜고, 1개를 짧게 켜고 들어간다",
          en: "Possible: Turn on 1 for a long time, turn on 1 briefly, then enter",
          ja: "可能：1つを長く点灯し、1つを短く点灯して入る",
          "zh-CN": "可能：长时间打开1个，短暂打开1个然后进入",
          "zh-TW": "可能：長時間打開1個，短暫打開1個然後進入",
          vi: "Có thể: Bật 1 cái lâu, bật 1 cái ngắn rồi vào",
          id: "Mungkin: Nyalakan 1 lama, nyalakan 1 sebentar lalu masuk"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "가능: 1개씩 순서대로 켠다",
          en: "Possible: Turn on one by one in order",
          ja: "可能：1つずつ順番に点灯する",
          "zh-CN": "可能：按顺序一个一个打开",
          "zh-TW": "可能：按順序一個一個打開",
          vi: "Có thể: Bật từng cái một theo thứ tự",
          id: "Mungkin: Nyalakan satu per satu secara berurutan"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "전구 온도로 구분: 켜짐, 따뜻함, 차가움",
      en: "Distinguish by bulb temperature: on, warm, cold",
      ja: "電球の温度で区別：点灯、温かい、冷たい",
      "zh-CN": "通过灯泡温度区分：亮着、温热、冷",
      "zh-TW": "通過燈泡溫度區分：亮著、溫熱、冷",
      vi: "Phân biệt bằng nhiệt độ bóng đèn: sáng, ấm, lạnh",
      id: "Berdasarkan suhu bola lampu: menyala, hangat, dingin"
    }
  },
  {
    id: 6,
    question: {
      ko: "다음 패턴의 ?에 들어갈 숫자는? 1, 11, 21, 1211, 111221, ?",
      en: "What number should go in the ? in the following pattern? 1, 11, 21, 1211, 111221, ?",
      ja: "次のパターンの？に入る数字は？1, 11, 21, 1211, 111221, ?",
      "zh-CN": "以下模式中？应该填入什么数字？1, 11, 21, 1211, 111221, ?",
      "zh-TW": "以下模式中？應該填入什麼數字？1, 11, 21, 1211, 111221, ?",
      vi: "Số nào nên điền vào ? trong mẫu sau? 1, 11, 21, 1211, 111221, ?",
      id: "Angka berapa yang harus dimasukkan ke ? dalam pola berikut? 1, 11, 21, 1211, 111221, ?"
    },
    options: [
      {
        text: {
          ko: "211231",
          en: "211231",
          ja: "211231",
          "zh-CN": "211231",
          "zh-TW": "211231",
          vi: "211231",
          id: "211231"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "312211",
          en: "312211",
          ja: "312211",
          "zh-CN": "312211",
          "zh-TW": "312211",
          vi: "312211",
          id: "312211"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "312213",
          en: "312213",
          ja: "312213",
          "zh-CN": "312213",
          "zh-TW": "312213",
          vi: "312213",
          id: "312213"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "211211",
          en: "211211",
          ja: "211211",
          "zh-CN": "211211",
          "zh-TW": "211211",
          vi: "211211",
          id: "211211"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "Look-and-say 수열: 이전 수를 읽는 방식",
      en: "Look-and-say sequence: way of reading the previous number",
      ja: "Look-and-say数列：前の数を読む方法",
      "zh-CN": "Look-and-say数列：读前一个数的方式",
      "zh-TW": "Look-and-say數列：讀前一個數的方式",
      vi: "Dãy Look-and-say: cách đọc số trước đó",
      id: "Barisan Look-and-say: cara membaca angka sebelumnya"
    }
  },
  {
    id: 7,
    question: {
      ko: "100명의 죄수가 일렬로 서 있고, 각자 흰색 또는 검은색 모자를 씁니다. 뒤 사람은 앞 사람의 모자를 볼 수 있지만 자기 것은 볼 수 없습니다. 맨 뒤부터 자기 모자 색을 말해야 하는데, 최대한 많은 사람을 살리려면?",
      en: "100 prisoners stand in a line, each wearing a white or black hat. Those behind can see the hats in front but not their own. Starting from the back, they must say their hat color. To save as many as possible?",
      ja: "100人の囚人が一列に並び、それぞれ白または黒の帽子をかぶっています。後ろの人は前の人の帽子は見えますが、自分の帽子は見えません。後ろから自分の帽子の色を言わなければなりませんが、できるだけ多くの人を救うには？",
      "zh-CN": "100名囚犯排成一队，每人戴白色或黑色帽子。后面的人可以看到前面人的帽子但看不到自己的。从后面开始必须说出自己帽子的颜色，要尽可能救更多人？",
      "zh-TW": "100名囚犯排成一隊，每人戴白色或黑色帽子。後面的人可以看到前面人的帽子但看不到自己的。從後面開始必須說出自己帽子的顏色，要盡可能救更多人？",
      vi: "100 tù nhân xếp hàng, mỗi người đội mũ trắng hoặc đen. Người phía sau có thể thấy mũ của người phía trước nhưng không thấy mũ của mình. Từ phía sau phải nói màu mũ của mình, để cứu được nhiều người nhất có thể?",
      id: "100 tahanan berbaris, masing-masing memakai topi putih atau hitam. Yang di belakang bisa melihat topi di depan tapi tidak bisa melihat topi sendiri. Dari belakang harus mengatakan warna topi sendiri, untuk menyelamatkan sebanyak mungkin?"
    },
    options: [
      {
        text: {
          ko: "50명만 살릴 수 있다",
          en: "Can only save 50 people",
          ja: "50人しか救えない",
          "zh-CN": "只能救50人",
          "zh-TW": "只能救50人",
          vi: "Chỉ có thể cứu 50 người",
          id: "Hanya bisa menyelamatkan 50 orang"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "99명을 확실히 살릴 수 있다",
          en: "Can definitely save 99 people",
          ja: "99人を確実に救える",
          "zh-CN": "肯定能救99人",
          "zh-TW": "肯定能救99人",
          vi: "Chắc chắn có thể cứu 99 người",
          id: "Pasti bisa menyelamatkan 99 orang"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "100명을 살릴 수 있다",
          en: "Can save 100 people",
          ja: "100人を救える",
          "zh-CN": "能救100人",
          "zh-TW": "能救100人",
          vi: "Có thể cứu 100 người",
          id: "Bisa menyelamatkan 100 orang"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "75명 정도 살릴 수 있다",
          en: "Can save about 75 people",
          ja: "75人程度救える",
          "zh-CN": "能救大约75人",
          "zh-TW": "能救大約75人",
          vi: "Có thể cứu khoảng 75 người",
          id: "Bisa menyelamatkan sekitar 75 orang"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "맨 뒤 사람이 앞 사람들의 흰색 개수 홀짝 신호",
      en: "The last person signals odd/even count of white hats in front",
      ja: "最後の人が前の人の白い帽子の数の奇数偶数を信号",
      "zh-CN": "最后一个人发出前面人白帽子数量的奇偶信号",
      "zh-TW": "最後一個人發出前面人白帽子數量的奇偶信號",
      vi: "Người cuối cùng báo hiệu số chẵn/lẻ của mũ trắng phía trước",
      id: "Orang terakhir memberi sinyal ganjil/genap jumlah topi putih di depan"
    }
  },
  {
    id: 8,
    question: {
      ko: "1부터 100까지 숫자를 쓸 때, 숫자 1은 총 몇 번 쓰이나요?",
      en: "When writing numbers from 1 to 100, how many times is the digit 1 written in total?",
      ja: "1から100までの数字を書くとき、数字1は合計何回書かれますか？",
      "zh-CN": "写1到100的数字时，数字1总共写了几次？",
      "zh-TW": "寫1到100的數字時，數字1總共寫了幾次？",
      vi: "Khi viết các số từ 1 đến 100, chữ số 1 được viết tổng cộng bao nhiêu lần?",
      id: "Saat menulis angka dari 1 sampai 100, berapa kali total digit 1 ditulis?"
    },
    options: [
      {
        text: {
          ko: "11번",
          en: "11 times",
          ja: "11回",
          "zh-CN": "11次",
          "zh-TW": "11次",
          vi: "11 lần",
          id: "11 kali"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "20번",
          en: "20 times",
          ja: "20回",
          "zh-CN": "20次",
          "zh-TW": "20次",
          vi: "20 lần",
          id: "20 kali"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "21번",
          en: "21 times",
          ja: "21回",
          "zh-CN": "21次",
          "zh-TW": "21次",
          vi: "21 lần",
          id: "21 kali"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "23번",
          en: "23 times",
          ja: "23回",
          "zh-CN": "23次",
          "zh-TW": "23次",
          vi: "23 lần",
          id: "23 kali"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "일의 자리 10번 + 십의 자리 10번 + 100의 1 = 21번",
      en: "Units place 10 times + tens place 10 times + 1 in 100 = 21 times",
      ja: "一の位10回 + 十の位10回 + 100の1 = 21回",
      "zh-CN": "个位10次 + 十位10次 + 100的1 = 21次",
      "zh-TW": "個位10次 + 十位10次 + 100的1 = 21次",
      vi: "Hàng đơn vị 10 lần + hàng chục 10 lần + 1 trong 100 = 21 lần",
      id: "Posisi satuan 10 kali + posisi puluhan 10 kali + 1 dalam 100 = 21 kali"
    }
  },
  {
    id: 9,
    question: {
      ko: "5개의 해적이 100개의 금화를 나눕니다. 가장 선임자가 분배안을 제시하면 과반수가 찬성하면 실행, 아니면 선임자를 죽이고 다음 사람이 제안합니다. 모두 이성적이고 자기 이익을 최대화하려 할 때, 가장 선임 해적의 최적 전략은?",
      en: "5 pirates divide 100 gold coins. The senior pirate proposes a distribution, if majority agrees it's executed, otherwise the senior is killed and the next person proposes. When all are rational and maximize their own benefit, what is the senior pirate's optimal strategy?",
      ja: "5人の海賊が100個の金貨を分けます。最年長者が分配案を提示し、過半数が賛成すれば実行、そうでなければ年長者を殺して次の人が提案します。全員が合理的で自分の利益を最大化しようとするとき、最年長海賊の最適戦略は？",
      "zh-CN": "5个海盗分100个金币。最资深者提出分配方案，如果多数同意就执行，否则杀死资深者让下一个人提议。当所有人都理性且最大化自己利益时，最资深海盗的最优策略是什么？",
      "zh-TW": "5個海盜分100個金幣。最資深者提出分配方案，如果多數同意就執行，否則殺死資深者讓下一個人提議。當所有人都理性且最大化自己利益時，最資深海盜的最優策略是什麼？",
      vi: "5 tên cướp biển chia 100 đồng tiền vàng. Tên cướp biển cao cấp nhất đề xuất cách phân chia, nếu đa số đồng ý thì thực hiện, nếu không thì giết tên cao cấp và người tiếp theo đề xuất. Khi tất cả đều hợp lý và tối đa hóa lợi ích của mình, chiến lược tối ưu của tên cướp biển cao cấp nhất là gì?",
      id: "5 bajak laut membagi 100 koin emas. Bajak laut senior mengusulkan distribusi, jika mayoritas setuju maka dilaksanakan, jika tidak maka senior dibunuh dan orang berikutnya mengusulkan. Ketika semua rasional dan memaksimalkan kepentingan sendiri, apa strategi optimal bajak laut senior?"
    },
    options: [
      {
        text: {
          ko: "20, 20, 20, 20, 20",
          en: "20, 20, 20, 20, 20",
          ja: "20, 20, 20, 20, 20",
          "zh-CN": "20, 20, 20, 20, 20",
          "zh-TW": "20, 20, 20, 20, 20",
          vi: "20, 20, 20, 20, 20",
          id: "20, 20, 20, 20, 20"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "98, 0, 1, 0, 1",
          en: "98, 0, 1, 0, 1",
          ja: "98, 0, 1, 0, 1",
          "zh-CN": "98, 0, 1, 0, 1",
          "zh-TW": "98, 0, 1, 0, 1",
          vi: "98, 0, 1, 0, 1",
          id: "98, 0, 1, 0, 1"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "97, 0, 1, 0, 2",
          en: "97, 0, 1, 0, 2",
          ja: "97, 0, 1, 0, 2",
          "zh-CN": "97, 0, 1, 0, 2",
          "zh-TW": "97, 0, 1, 0, 2",
          vi: "97, 0, 1, 0, 2",
          id: "97, 0, 1, 0, 2"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "96, 0, 1, 1, 2",
          en: "96, 0, 1, 1, 2",
          ja: "96, 0, 1, 1, 2",
          "zh-CN": "96, 0, 1, 1, 2",
          "zh-TW": "96, 0, 1, 1, 2",
          vi: "96, 0, 1, 1, 2",
          id: "96, 0, 1, 1, 2"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "역방향 귀납법, 3번과 5번 해적 매수",
      en: "Backward induction, bribe pirates 3 and 5",
      ja: "後ろ向き帰納法、3番と5番の海賊を買収",
      "zh-CN": "逆向归纳法，收买第3和第5个海盗",
      "zh-TW": "逆向歸納法，收買第3和第5個海盜",
      vi: "Quy nạp ngược, mua chuộc tên cướp biển thứ 3 và 5",
      id: "Induksi mundur, menyuap bajak laut ke-3 dan ke-5"
    }
  },
  {
    id: 10,
    question: {
      ko: "두 기차가 100km 떨어진 곳에서 시속 50km로 마주 달립니다. 동시에 한 기차에서 파리가 시속 75km로 날아 다른 기차까지 갔다가 돌아오기를 반복합니다. 기차가 충돌할 때 파리가 날아간 총 거리는?",
      en: "Two trains approach each other at 50 km/h from 100 km apart. A fly flies at 75 km/h from one train to the other and back repeatedly. What is the total distance the fly travels when the trains collide?",
      ja: "2つの電車が100km離れた場所から時速50kmで向かい合って走ります。同時に一つの電車からハエが時速75kmで飛んで他の電車まで行って戻ることを繰り返します。電車が衝突するときハエが飛んだ総距離は？",
      "zh-CN": "两列火车从相距100公里处以每小时50公里的速度相向而行。同时一只苍蝇以每小时75公里的速度从一列火车飞向另一列火车并反复往返。火车相撞时苍蝇飞行的总距离是多少？",
      "zh-TW": "兩列火車從相距100公里處以每小時50公里的速度相向而行。同時一隻蒼蠅以每小時75公里的速度從一列火車飛向另一列火車並反覆往返。火車相撞時蒼蠅飛行的總距離是多少？",
      vi: "Hai đoàn tàu chạy về phía nhau với tốc độ 50 km/h từ khoảng cách 100 km. Đồng thời một con ruồi bay với tốc độ 75 km/h từ một đoàn tàu đến đoàn tàu kia và bay đi bay lại. Tổng quãng đường con ruồi bay khi hai đoàn tàu va chạm là bao nhiêu?",
      id: "Dua kereta mendekati satu sama lain dengan kecepatan 50 km/jam dari jarak 100 km. Secara bersamaan seekor lalat terbang dengan kecepatan 75 km/jam dari satu kereta ke kereta lain dan bolak-balik. Berapa total jarak yang ditempuh lalat ketika kereta bertabrakan?"
    },
    options: [
      {
        text: {
          ko: "50km",
          en: "50km",
          ja: "50km",
          "zh-CN": "50公里",
          "zh-TW": "50公里",
          vi: "50km",
          id: "50km"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "75km",
          en: "75km",
          ja: "75km",
          "zh-CN": "75公里",
          "zh-TW": "75公里",
          vi: "75km",
          id: "75km"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "100km",
          en: "100km",
          ja: "100km",
          "zh-CN": "100公里",
          "zh-TW": "100公里",
          vi: "100km",
          id: "100km"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "150km",
          en: "150km",
          ja: "150km",
          "zh-CN": "150公里",
          "zh-TW": "150公里",
          vi: "150km",
          id: "150km"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "B",
    hint: {
      ko: "충돌까지 1시간, 파리는 75km",
      en: "Collision in 1 hour, fly travels 75km",
      ja: "衝突まで1時間、ハエは75km",
      "zh-CN": "1小时后相撞，苍蝇飞行75公里",
      "zh-TW": "1小時後相撞，蒼蠅飛行75公里",
      vi: "Va chạm sau 1 giờ, ruồi bay 75km",
      id: "Tabrakan dalam 1 jam, lalat terbang 75km"
    }
  },
  {
    id: 11,
    question: {
      ko: "체스판에서 한 귀퉁이의 두 칸을 제거했습니다. 2×1 크기의 도미노로 남은 62칸을 완전히 덮을 수 있나요?",
      en: "Two squares are removed from one corner of a chessboard. Can the remaining 62 squares be completely covered with 2×1 dominoes?",
      ja: "チェス盤の一つの角から2つのマスを削除しました。2×1サイズのドミノで残りの62マスを完全に覆うことができますか？",
      "zh-CN": "从棋盘的一个角落移除了两个方格。能用2×1大小的多米诺骨牌完全覆盖剩余的62个方格吗？",
      "zh-TW": "從棋盤的一個角落移除了兩個方格。能用2×1大小的多米諾骨牌完全覆蓋剩餘的62個方格嗎？",
      vi: "Hai ô vuông được loại bỏ khỏi một góc của bàn cờ. Có thể phủ hoàn toàn 62 ô còn lại bằng các domino 2×1 không?",
      id: "Dua kotak dihapus dari satu sudut papan catur. Bisakah 62 kotak yang tersisa ditutupi sepenuhnya dengan domino 2×1?"
    },
    options: [
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
        isCorrect: false
      },
      {
        text: {
          ko: "불가능하다",
          en: "Impossible",
          ja: "不可能",
          "zh-CN": "不可能",
          "zh-TW": "不可能",
          vi: "Không thể",
          id: "Tidak mungkin"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "경우에 따라 다르다",
          en: "Depends on the case",
          ja: "場合による",
          "zh-CN": "视情况而定",
          "zh-TW": "視情況而定",
          vi: "Tùy trường hợp",
          id: "Tergantung kasusnya"
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
    correctAnswer: "B",
    hint: {
      ko: "같은 색 2칸 제거, 도미노는 다른 색 2칸",
      en: "Two squares of same color removed, domino covers two squares of different colors",
      ja: "同じ色の2マス削除、ドミノは異なる色の2マス",
      "zh-CN": "移除同色两格，多米诺覆盖不同色两格",
      "zh-TW": "移除同色兩格，多米諾覆蓋不同色兩格",
      vi: "Loại bỏ 2 ô cùng màu, domino phủ 2 ô khác màu",
      id: "Menghapus 2 kotak warna sama, domino menutupi 2 kotak warna berbeda"
    }
  },
  {
    id: 12,
    question: {
      ko: "무한히 많은 사람이 있고, 각자 1부터 시작하는 자연수 모자를 씁니다. 동시에 자기 모자 번호를 추측하는데, 다른 사람 것은 모두 보이지만 자기 것은 안 보입니다. 무한히 많은 사람 중 최대 몇 명만 틀릴 수 있나요?",
      en: "There are infinitely many people, each wearing a hat with a natural number starting from 1. They simultaneously guess their own hat number, seeing everyone else's but not their own. What is the maximum number of people who can be wrong among infinitely many people?",
      ja: "無限に多くの人がいて、それぞれ1から始まる自然数の帽子をかぶっています。同時に自分の帽子の番号を推測しますが、他の人の帽子はすべて見えますが自分の帽子は見えません。無限に多くの人の中で最大何人まで間違えることができますか？",
      "zh-CN": "有无限多的人，每人戴一顶从1开始的自然数帽子。他们同时猜测自己的帽子号码，能看到其他人的但看不到自己的。在无限多的人中最多有多少人可能猜错？",
      "zh-TW": "有無限多的人，每人戴一頂從1開始的自然數帽子。他們同時猜測自己的帽子號碼，能看到其他人的但看不到自己的。在無限多的人中最多有多少人可能猜錯？",
      vi: "Có vô số người, mỗi người đội một chiếc mũ có số tự nhiên bắt đầu từ 1. Họ đồng thời đoán số mũ của mình, nhìn thấy mũ của người khác nhưng không thấy mũ của mình. Trong vô số người, tối đa bao nhiêu người có thể đoán sai?",
      id: "Ada tak terhingga banyak orang, masing-masing memakai topi dengan bilangan asli mulai dari 1. Mereka secara bersamaan menebak nomor topi sendiri, melihat topi orang lain tapi tidak melihat topi sendiri. Dari tak terhingga banyak orang, berapa maksimal orang yang bisa salah?"
    },
    options: [
      {
        text: {
          ko: "무한히 많이 틀린다",
          en: "Infinitely many can be wrong",
          ja: "無限に多く間違える",
          "zh-CN": "无限多的人会猜错",
          "zh-TW": "無限多的人會猜錯",
          vi: "Vô số người có thể đoán sai",
          id: "Tak terhingga banyak yang bisa salah"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "최대 1명",
          en: "Maximum 1 person",
          ja: "最大1人",
          "zh-CN": "最多1人",
          "zh-TW": "最多1人",
          vi: "Tối đa 1 người",
          id: "Maksimal 1 orang"
        },
        isCorrect: false
      },
      {
        text: {
          ko: "최대 유한명",
          en: "Maximum finite number",
          ja: "最大有限数",
          "zh-CN": "最多有限人",
          "zh-TW": "最多有限人",
          vi: "Tối đa số hữu hạn người",
          id: "Maksimal jumlah terbatas"
        },
        isCorrect: true
      },
      {
        text: {
          ko: "모두 맞출 수 있다",
          en: "Everyone can be correct",
          ja: "全員正解できる",
          "zh-CN": "所有人都能猜对",
          "zh-TW": "所有人都能猜對",
          vi: "Tất cả đều có thể đoán đúng",
          id: "Semua bisa benar"
        },
        isCorrect: false
      }
    ],
    correctAnswer: "C",
    hint: {
      ko: "선택 공리와 동치류 사용",
      en: "Using axiom of choice and equivalence classes",
      ja: "選択公理と同値類を使用",
      "zh-CN": "使用选择公理和等价类",
      "zh-TW": "使用選擇公理和等價類",
      vi: "Sử dụng tiên đề chọn và lớp tương đương",
      id: "Menggunakan aksioma pilihan dan kelas ekuivalensi"
    }
  }
];

// 초고난도 퀴즈 결과 데이터
export const extremeQuizResults: ExtremeQuizResult[] = [
  {
    type: "super_genius",
    title: {
      ko: "초천재 🏆👑",
      en: "Super Genius 🏆👑",
      ja: "超天才 🏆👑",
      "zh-CN": "超级天才 🏆👑",
      "zh-TW": "超級天才 🏆👑",
      vi: "Siêu thiên tài 🏆👑",
      id: "Super Jenius 🏆👑"
    },
    description: {
      ko: "IQ: 160+ (인류 상위 0.1% 절대 천재)\n\n불가능을 가능하게 만드는 당신! 12개 모두 맞혔다면 당신은 진정한 천재입니다. 노벨상 수상자, 세계 최고 수학자, 멘사 최상위권 수준입니다. 당신의 두뇌는 인류의 보물입니다. IQ 160 이상으로 추정되며, 학계나 연구소에서 당신을 기다리고 있습니다!",
      en: "IQ: 160+ (Top 0.1% of humanity, absolute genius)\nYou who make the impossible possible! If you got all 12 correct, you are a true genius. You are at the level of Nobel Prize winners, world's top mathematicians, and top-tier Mensa members. Your brain is a treasure of humanity. Estimated IQ 160+, academia and research institutes are waiting for you!",
      ja: "IQ: 160+ (人類上位0.1%絶対天才)\n不可能を可能にするあなた！12問すべて正解なら、あなたは真の天才です。ノーベル賞受賞者、世界最高の数学者、メンサ最上位レベルです。あなたの脳は人類の宝物です。IQ160以上と推定され、学界や研究所があなたを待っています！",
      "zh-CN": "IQ: 160+ (人类前0.1%绝对天才)\n让不可能成为可能的你！如果12题全对，你就是真正的天才。你是诺贝尔奖获得者、世界顶级数学家、门萨顶级水平的层次。你的大脑是人类的珍宝。估计IQ 160+，学术界和研究所在等待着你！",
      "zh-TW": "IQ: 160+ (人類前0.1%絕對天才)\n讓不可能成為可能的你！如果12題全對，你就是真正的天才。你是諾貝爾獎獲得者、世界頂級數學家、門薩頂級水平的層次。你的大腦是人類的珍寶。估計IQ 160+，學術界和研究所在等待著你！",
      vi: "IQ: 160+ (Top 0.1% nhân loại, thiên tài tuyệt đối)\nBạn là người biến không thể thành có thể! Nếu đúng cả 12 câu, bạn là thiên tài thực sự. Bạn ở trình độ của người đoạt giải Nobel, nhà toán học hàng đầu thế giới, thành viên Mensa cấp cao nhất. Bộ não của bạn là kho báu của nhân loại. Ước tính IQ 160+, giới học thuật và viện nghiên cứu đang chờ đợi bạn!",
      id: "IQ: 160+ (Top 0.1% umat manusia, jenius mutlak)\nAnda yang membuat yang tidak mungkin menjadi mungkin! Jika benar semua 12 soal, Anda adalah jenius sejati. Anda berada di level pemenang Nobel, matematikawan terbaik dunia, anggota Mensa tingkat tertinggi. Otak Anda adalah harta umat manusia. Diperkirakan IQ 160+, dunia akademik dan lembaga penelitian menunggu Anda!"
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
        ko: "복잡한 추론",
        en: "Complex reasoning",
        ja: "複雑な推論",
        "zh-CN": "复杂推理",
        "zh-TW": "複雜推理",
        vi: "Lý luận phức tạp",
        id: "Penalaran kompleks"
      },
      {
        ko: "수학적 천재성",
        en: "Mathematical genius",
        ja: "数学的天才性",
        "zh-CN": "数学天才性",
        "zh-TW": "數學天才性",
        vi: "Thiên tài toán học",
        id: "Jenius matematika"
      }
    ],
    recommendations: [
      {
        ko: "수학 올림피아드",
        en: "Math Olympiad",
        ja: "数学オリンピック",
        "zh-CN": "数学奥林匹克",
        "zh-TW": "數學奧林匹克",
        vi: "Olympic toán học",
        id: "Olimpiade Matematika"
      },
      {
        ko: "멘사",
        en: "Mensa",
        ja: "メンサ",
        "zh-CN": "门萨",
        "zh-TW": "門薩",
        vi: "Mensa",
        id: "Mensa"
      },
      {
        ko: "학술 연구",
        en: "Academic research",
        ja: "学術研究",
        "zh-CN": "学术研究",
        "zh-TW": "學術研究",
        vi: "Nghiên cứu học thuật",
        id: "Penelitian akademik"
      },
      {
        ko: "양자컴퓨팅",
        en: "Quantum computing",
        ja: "量子コンピューティング",
        "zh-CN": "量子计算",
        "zh-TW": "量子計算",
        vi: "Máy tính lượng tử",
        id: "Komputasi kuantum"
      }
    ],
    advice: {
      ko: "당신의 능력으로 세상을 바꿔주세요!",
      en: "Change the world with your abilities!",
      ja: "あなたの能力で世界を変えてください！",
      "zh-CN": "用你的能力改变世界！",
      "zh-TW": "用你的能力改變世界！",
      vi: "Hãy thay đổi thế giới bằng khả năng của bạn!",
      id: "Ubah dunia dengan kemampuan Anda!"
    }
  },
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
      ko: "IQ 150-159 (상위 1% 슈퍼 천재)\n\n거의 완벽합니다! 당신은 세계 최고 수준의 지능을 가지고 있습니다. 복잡한 논리와 수학 문제를 거의 완벽하게 해결합니다. IQ 150+ 수준이며, 멘사 가입은 기본입니다. 학계, 연구소, 첨단 기술 분야에서 놀라운 성과를 낼 것입니다.",
      en: "IQ 150-159 (Top 1% super genius)\nAlmost perfect! You have world-class intelligence. You solve complex logic and math problems almost perfectly. You're at IQ 150+ level, and Mensa membership is basic. You will achieve amazing results in academia, research institutes, and cutting-edge technology fields.",
      ja: "IQ 150-159 (上位1%スーパー天才)\nほぼ完璧です！あなたは世界最高レベルの知性を持っています。複雑な論理と数学問題をほぼ完璧に解決します。IQ150+レベルで、メンサ入会は基本です。学界、研究所、先端技術分野で驚くべき成果を上げるでしょう。",
      "zh-CN": "IQ 150-159 (前1%超级天才)\n几乎完美！你拥有世界级的智力。你几乎完美地解决复杂的逻辑和数学问题。你是IQ 150+水平，门萨会员是基本。你将在学术界、研究所、尖端技术领域取得惊人成果。",
      "zh-TW": "IQ 150-159 (前1%超級天才)\n幾乎完美！你擁有世界級的智力。你幾乎完美地解決複雜的邏輯和數學問題。你是IQ 150+水平，門薩會員是基本。你將在學術界、研究所、尖端技術領域取得驚人成果。",
      vi: "IQ 150-159 (Top 1% siêu thiên tài)\nGần như hoàn hảo! Bạn có trí thông minh đẳng cấp thế giới. Bạn giải quyết các vấn đề logic và toán học phức tạp gần như hoàn hảo. Bạn ở mức IQ 150+, và thành viên Mensa là cơ bản. Bạn sẽ đạt được kết quả đáng kinh ngạc trong giới học thuật, viện nghiên cứu và lĩnh vực công nghệ tiên tiến.",
      id: "IQ 150-159 (Top 1% super jenius)\nHampir sempurna! Anda memiliki kecerdasan kelas dunia. Anda menyelesaikan masalah logika dan matematika kompleks hampir sempurna. Anda berada di level IQ 150+, dan keanggotaan Mensa adalah dasar. Anda akan mencapai hasil menakjubkan di dunia akademik, lembaga penelitian, dan bidang teknologi canggih."
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
        id: "Kemampuan logika luar biasa"
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
        "zh-CN": "数学才能",
        "zh-TW": "數學才能",
        vi: "Tài năng toán học",
        id: "Bakat matematika"
      }
    ],
    recommendations: [
      {
        ko: "물리학",
        en: "Physics",
        ja: "物理学",
        "zh-CN": "物理学",
        "zh-TW": "物理學",
        vi: "Vật lý học",
        id: "Fisika"
      },
      {
        ko: "수학",
        en: "Mathematics",
        ja: "数学",
        "zh-CN": "数学",
        "zh-TW": "數學",
        vi: "Toán học",
        id: "Matematika"
      },
      {
        ko: "컴퓨터과학",
        en: "Computer Science",
        ja: "コンピュータサイエンス",
        "zh-CN": "计算机科学",
        "zh-TW": "計算機科學",
        vi: "Khoa học máy tính",
        id: "Ilmu Komputer"
      },
      {
        ko: "전략 분야",
        en: "Strategy field",
        ja: "戦略分野",
        "zh-CN": "战略领域",
        "zh-TW": "戰略領域",
        vi: "Lĩnh vực chiến lược",
        id: "Bidang strategi"
      }
    ],
    advice: {
      ko: "계속 도전하세요. 당신은 더 높이 올라갈 수 있습니다!",
      en: "Keep challenging yourself. You can go even higher!",
      ja: "挑戦し続けてください。あなたはもっと高く登ることができます！",
      "zh-CN": "继续挑战。你能爬得更高！",
      "zh-TW": "繼續挑戰。你能爬得更高！",
      vi: "Hãy tiếp tục thách thức bản thân. Bạn có thể lên cao hơn nữa!",
      id: "Terus tantang diri Anda. Anda bisa naik lebih tinggi!"
    }
  },
  {
    type: "top_3_percent",
    title: {
      ko: "상위 3% 도전자 🎯",
      en: "Top 3% Challenger 🎯",
      ja: "上位3%チャレンジャー 🎯",
      "zh-CN": "前3%挑战者 🎯",
      "zh-TW": "前3%挑戰者 🎯",
      vi: "Thách thức top 3% 🎯",
      id: "Penantang Top 3% 🎯"
    },
    description: {
      ko: "IQ 140-149 (극소수만 도달하는 영역)\n\n축하합니다! 당신은 진짜로 상위 3%에 속합니다! 대부분의 사람들이 절반도 못 맞히는 문제를 8개 이상 맞혔습니다. IQ 140+ 수준이며, 고도의 논리적 사고가 가능합니다. 전문 분야에서 최고가 될 잠재력이 있습니다.",
      en: "IQ 140-149 (Area reached by very few)\nCongratulations! You truly belong to the top 3%! You got 8 or more correct on problems that most people can't even get half right. You're at IQ 140+ level and capable of high-level logical thinking. You have the potential to become the best in your field.",
      ja: "IQ 140-149 (極少数しか到達できない領域)\nおめでとうございます！あなたは本当に上位3%に属しています！ほとんどの人が半分も正解できない問題を8問以上正解しました。IQ140+レベルで、高度な論理的思考が可能です。専門分野で最高になる可能性があります。",
      "zh-CN": "IQ 140-149 (极少数人能达到的领域)\n恭喜！你真正属于前3%！你在大多数人连一半都答不出的问题上答对了8题以上。你是IQ 140+水平，能够进行高水平的逻辑思维。你有在专业领域成为顶尖的潜力。",
      "zh-TW": "IQ 140-149 (極少數人能達到的領域)\n恭喜！你真正屬於前3%！你在大多數人連一半都答不出的問題上答對了8題以上。你是IQ 140+水平，能夠進行高水平的邏輯思維。你有在專業領域成為頂尖的潛力。",
      vi: "IQ 140-149 (Lĩnh vực chỉ có rất ít người đạt được)\nChúc mừng! Bạn thực sự thuộc top 3%! Bạn đã trả lời đúng 8 câu trở lên trong những câu hỏi mà hầu hết mọi người không thể trả lời đúng được một nửa. Bạn ở mức IQ 140+ và có khả năng tư duy logic cao cấp. Bạn có tiềm năng trở thành người giỏi nhất trong lĩnh vực chuyên môn.",
      id: "IQ 140-149 (Area yang hanya dicapai oleh sangat sedikit orang)\nSelamat! Anda benar-benar termasuk dalam top 3%! Anda menjawab benar 8 soal atau lebih dari soal-soal yang kebanyakan orang bahkan tidak bisa menjawab setengahnya dengan benar. Anda berada di level IQ 140+ dan mampu berpikir logis tingkat tinggi. Anda memiliki potensi menjadi yang terbaik di bidang spesialisasi."
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
        vi: "Khả năng logic nâng cao",
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
        ko: "연구",
        en: "Research",
        ja: "研究",
        "zh-CN": "研究",
        "zh-TW": "研究",
        vi: "Nghiên cứu",
        id: "Penelitian"
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
        ko: "고급 엔지니어링",
        en: "Advanced engineering",
        ja: "高度エンジニアリング",
        "zh-CN": "高级工程",
        "zh-TW": "高級工程",
        vi: "Kỹ thuật nâng cao",
        id: "Teknik tingkat lanjut"
      }
    ],
    advice: {
      ko: "당신은 이미 뛰어납니다. 지속적인 학습으로 더 발전하세요!",
      en: "You are already excellent. Develop further through continuous learning!",
      ja: "あなたはすでに優秀です。継続的な学習でさらに発展してください！",
      "zh-CN": "你已经很优秀了。通过持续学习进一步发展！",
      "zh-TW": "你已經很優秀了。通過持續學習進一步發展！",
      vi: "Bạn đã xuất sắc rồi. Hãy phát triển hơn nữa thông qua việc học tập liên tục!",
      id: "Anda sudah luar biasa. Kembangkan lebih lanjut melalui pembelajaran berkelanjutan!"
    }
  },
  {
    type: "top_10_percent",
    title: {
      ko: "상위 10% 도전형 💪",
      en: "Top 10% Challenger 💪",
      ja: "上位10%チャレンジャー 💪",
      "zh-CN": "前10%挑战者 💪",
      "zh-TW": "前10%挑戰者 💪",
      vi: "Thách thức top 10% 💪",
      id: "Penantang Top 10% 💪"
    },
    description: {
      ko: "IQ 130-139 (범하지 않은 두뇌)\n\n절반 이상 맞혔습니다! 당신은 확실히 평균 이상입니다. IQ 130+ 수준이며, 복잡한 문제도 어느 정도 해결할 수 있습니다. 몇 문제는 정말 어려웠을 것입니다. 계속 도전하면 더 높은 경지에 도달할 수 있습니다!",
      en: "IQ 130-139 (Uncommon brain)\nYou got more than half right! You are definitely above average. You're at IQ 130+ level and can solve complex problems to some extent. Some problems must have been really difficult. If you keep challenging yourself, you can reach higher levels!",
      ja: "IQ 130-139 (非凡な脳)\n半分以上正解しました！あなたは確実に平均以上です。IQ130+レベルで、複雑な問題もある程度解決できます。いくつかの問題は本当に難しかったでしょう。挑戦し続ければ、より高い境地に到達できます！",
      "zh-CN": "IQ 130-139 (非凡的大脑)\n你答对了一半以上！你确实高于平均水平。你是IQ 130+水平，能在一定程度上解决复杂问题。有些问题一定很难。如果你继续挑战，你能达到更高的境界！",
      "zh-TW": "IQ 130-139 (非凡的大腦)\n你答對了一半以上！你確實高於平均水平。你是IQ 130+水平，能在一定程度上解決複雜問題。有些問題一定很難。如果你繼續挑戰，你能達到更高的境界！",
      vi: "IQ 130-139 (Bộ não phi thường)\nBạn đã trả lời đúng hơn một nửa! Bạn chắc chắn trên mức trung bình. Bạn ở mức IQ 130+ và có thể giải quyết các vấn đề phức tạp ở một mức độ nào đó. Một số câu hỏi chắc chắn rất khó. Nếu bạn tiếp tục thách thức bản thân, bạn có thể đạt đến trình độ cao hơn!",
      id: "IQ 130-139 (Otak yang luar biasa)\nAnda menjawab benar lebih dari setengah! Anda pasti di atas rata-rata. Anda berada di level IQ 130+ dan dapat menyelesaikan masalah kompleks sampai batas tertentu. Beberapa soal pasti sangat sulit. Jika Anda terus menantang diri sendiri, Anda bisa mencapai level yang lebih tinggi!"
    },
    emoji: "💪",
    scoreRange: [6, 7],
    strengths: [
      {
        ko: "우수한 논리력",
        en: "Excellent logical ability",
        ja: "優れた論理力",
        "zh-CN": "优秀的逻辑力",
        "zh-TW": "優秀的邏輯力",
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
        ko: "도전 정신",
        en: "Challenge spirit",
        ja: "挑戦精神",
        "zh-CN": "挑战精神",
        "zh-TW": "挑戰精神",
        vi: "Tinh thần thách thức",
        id: "Semangat tantangan"
      }
    ],
    recommendations: [
      {
        ko: "전문직",
        en: "Professional work",
        ja: "専門職",
        "zh-CN": "专业工作",
        "zh-TW": "專業工作",
        vi: "Công việc chuyên môn",
        id: "Pekerjaan profesional"
      },
      {
        ko: "관리직",
        en: "Management position",
        ja: "管理職",
        "zh-CN": "管理职位",
        "zh-TW": "管理職位",
        vi: "Vị trí quản lý",
        id: "Posisi manajemen"
      },
      {
        ko: "분석 업무",
        en: "Analytical work",
        ja: "分析業務",
        "zh-CN": "分析工作",
        "zh-TW": "分析工作",
        vi: "Công việc phân tích",
        id: "Pekerjaan analitis"
      }
    ],
    advice: {
      ko: "포기하지 마세요. 꾸준한 훈련으로 상위 3%에 진입할 수 있습니다!",
      en: "Don't give up. You can enter the top 3% through steady training!",
      ja: "諦めないでください。着実な訓練で上位3%に入ることができます！",
      "zh-CN": "不要放弃。通过持续训练你能进入前3%！",
      "zh-TW": "不要放棄。通過持續訓練你能進入前3%！",
      vi: "Đừng bỏ cuộc. Bạn có thể vào top 3% thông qua việc rèn luyện đều đặn!",
      id: "Jangan menyerah. Anda bisa masuk top 3% melalui latihan yang konsisten!"
    }
  },
  {
    type: "general_challenger",
    title: {
      ko: "상위 50% 일반 도전자 ⭐",
      en: "Top 50% General Challenger ⭐",
      ja: "上位50%一般チャレンジャー ⭐",
      "zh-CN": "前50%普通挑战者 ⭐",
      "zh-TW": "前50%普通挑戰者 ⭐",
      vi: "Top 50% Thách thức chung ⭐",
      id: "Top 50% Penantang Umum ⭐"
    },
    description: {
      ko: "IQ 110-129 (용기 있는 도전)\n\n쉽지 않았죠? 이 문제들은 정말 어렵습니다! 3-5개 맞혔다면 당신은 일반적인 수준입니다. 하지만 포기하지 않고 끝까지 도전한 당신의 용기가 훌륭합니다. IQ는 고정된 것이 아닙니다. 계속 훈련하면 향상됩니다!",
      en: "IQ 110-129 (Courageous challenge)\nIt wasn't easy, was it? These problems are really difficult! If you got 3-5 correct, you're at a general level. But your courage to challenge yourself to the end without giving up is excellent. IQ is not fixed. It improves with continued training!",
      ja: "IQ 110-129 (勇気ある挑戦)\n簡単ではありませんでしたね？これらの問題は本当に難しいです！3-5問正解なら、あなたは一般的なレベルです。しかし諦めずに最後まで挑戦したあなたの勇気は素晴らしいです。IQは固定されたものではありません。継続的な訓練で向上します！",
      "zh-CN": "IQ 110-129 (勇敢的挑战)\n不容易吧？这些问题真的很难！如果你答对了3-5题，你是一般水平。但你不放弃一直挑战到最后的勇气很棒。IQ不是固定的。通过持续训练会提高！",
      "zh-TW": "IQ 110-129 (勇敢的挑戰)\n不容易吧？這些問題真的很難！如果你答對了3-5題，你是一般水平。但你不放棄一直挑戰到最後的勇氣很棒。IQ不是固定的。通過持續訓練會提高！",
      vi: "IQ 110-129 (Thách thức dũng cảm)\nKhông dễ dàng phải không? Những câu hỏi này thực sự rất khó! Nếu bạn trả lời đúng 3-5 câu, bạn ở mức độ chung. Nhưng lòng dũng cảm của bạn khi thách thức bản thân đến cuối mà không bỏ cuộc thật tuyệt vời. IQ không cố định. Nó sẽ cải thiện với việc rèn luyện liên tục!",
      id: "IQ 110-129 (Tantangan berani)\nTidak mudah, bukan? Soal-soal ini benar-benar sulit! Jika Anda menjawab benar 3-5 soal, Anda berada di level umum. Tapi keberanian Anda untuk menantang diri sendiri sampai akhir tanpa menyerah sangat luar biasa. IQ tidak tetap. Itu akan meningkat dengan latihan berkelanjutan!"
    },
    emoji: "⭐",
    scoreRange: [3, 5],
    strengths: [
      {
        ko: "기본 논리력",
        en: "Basic logical ability",
        ja: "基本的論理力",
        "zh-CN": "基本逻辑力",
        "zh-TW": "基本邏輯力",
        vi: "Khả năng logic cơ bản",
        id: "Kemampuan logika dasar"
      },
      {
        ko: "도전 정신",
        en: "Challenge spirit",
        ja: "挑戦精神",
        "zh-CN": "挑战精神",
        "zh-TW": "挑戰精神",
        vi: "Tinh thần thách thức",
        id: "Semangat tantangan"
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
      ko: "이런 어려운 문제에 도전하는 것 자체가 두뇌를 발달시킵니다!",
      en: "Challenging yourself with such difficult problems itself develops your brain!",
      ja: "こんな難しい問題に挑戦すること自体が脳を発達させます！",
      "zh-CN": "挑战这样困难的问题本身就发展你的大脑！",
      "zh-TW": "挑戰這樣困難的問題本身就發展你的大腦！",
      vi: "Việc thách thức bản thân với những vấn đề khó như vậy chính là phát triển bộ não!",
      id: "Menantang diri sendiri dengan masalah sulit seperti ini sendiri mengembangkan otak Anda!"
    }
  },
  {
    type: "brave_beginner",
    title: {
      ko: "하위 50% 용감한 초보자 🌱",
      en: "Bottom 50% Brave Beginner 🌱",
      ja: "下位50%勇敢な初心者 🌱",
      "zh-CN": "后50%勇敢的初学者 🌱",
      "zh-TW": "後50%勇敢的初學者 🌱",
      vi: "Bottom 50% Người mới dũng cảm 🌱",
      id: "Bottom 50% Pemula Berani 🌱"
    },
    description: {
      ko: "IQ 90-110 (새로운 시작)\n\n정말 어려웠죠? 걱정하지 마세요. 이 문제들은 97%의 사람들이 어려워합니다. 0-2개 맞혔다면 지금은 기초가 필요한 단계입니다. 하지만 포기하지 마세요! 논리력은 훈련으로 향상됩니다. 쉬운 퍼즐부터 시작해서 단계별로 올라가세요!",
      en: "IQ 90-110 (New beginning)\nIt was really difficult, wasn't it? Don't worry. 97% of people find these problems difficult. If you got 0-2 correct, you're at a stage where you need basics. But don't give up! Logical ability improves through training. Start with easy puzzles and work your way up step by step!",
      ja: "IQ 90-110 (新しい始まり)\n本当に難しかったですね？心配しないでください。これらの問題は97%の人が困難に感じます。0-2問正解なら、今は基礎が必要な段階です。しかし諦めないでください！論理力は訓練で向上します。簡単なパズルから始めて段階的に上がっていきましょう！",
      "zh-CN": "IQ 90-110 (新的开始)\n真的很难吧？别担心。97%的人觉得这些问题很难。如果你答对了0-2题，你现在是需要基础的阶段。但不要放弃！逻辑能力通过训练会提高。从简单的谜题开始，逐步提高！",
      "zh-TW": "IQ 90-110 (新的開始)\n真的很難吧？別擔心。97%的人覺得這些問題很難。如果你答對了0-2題，你現在是需要基礎的階段。但不要放棄！邏輯能力通過訓練會提高。從簡單的謎題開始，逐步提高！",
      vi: "IQ 90-110 (Khởi đầu mới)\nThực sự rất khó phải không? Đừng lo lắng. 97% mọi người thấy những vấn đề này khó. Nếu bạn trả lời đúng 0-2 câu, bạn đang ở giai đoạn cần nền tảng. Nhưng đừng bỏ cuộc! Khả năng logic sẽ cải thiện thông qua rèn luyện. Hãy bắt đầu với những câu đố dễ và từng bước nâng cao!",
      id: "IQ 90-110 (Awal baru)\nBenar-benar sulit, bukan? Jangan khawatir. 97% orang merasa soal-soal ini sulit. Jika Anda menjawab benar 0-2 soal, Anda berada di tahap yang membutuhkan dasar. Tapi jangan menyerah! Kemampuan logika meningkat melalui latihan. Mulai dengan teka-teki mudah dan naik secara bertahap!"
    },
    emoji: "🌱",
    scoreRange: [0, 2],
    strengths: [
      {
        ko: "기초 학습 필요",
        en: "Need basic learning",
        ja: "基礎学習が必要",
        "zh-CN": "需要基础学习",
        "zh-TW": "需要基礎學習",
        vi: "Cần học cơ bản",
        id: "Perlu pembelajaran dasar"
      },
      {
        ko: "무한한 가능성",
        en: "Infinite potential",
        ja: "無限の可能性",
        "zh-CN": "无限潜力",
        "zh-TW": "無限潛力",
        vi: "Tiềm năng vô hạn",
        id: "Potensi tak terbatas"
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
      ko: "매일 조금씩 두뇌 운동을 하세요. 6개월 후 다시 도전해보세요!",
      en: "Do a little brain exercise every day. Try challenging again after 6 months!",
      ja: "毎日少しずつ脳運動をしてください。6ヶ月後に再挑戦してみてください！",
      "zh-CN": "每天做一点大脑运动。6个月后再挑战一次！",
      "zh-TW": "每天做一點大腦運動。6個月後再挑戰一次！",
      vi: "Hãy tập thể dục cho não một chút mỗi ngày. Thử thách lại sau 6 tháng!",
      id: "Lakukan sedikit latihan otak setiap hari. Coba tantang lagi setelah 6 bulan!"
    }
  }
];

// 점수 계산 함수
export const calculateExtremeQuizResult = (answers: boolean[]): string => {
  const correctCount = answers.filter(answer => answer).length;
  
  if (correctCount === 12) return "super_genius";
  if (correctCount >= 10) return "genius";
  if (correctCount >= 8) return "top_3_percent";
  if (correctCount >= 6) return "top_10_percent";
  if (correctCount >= 3) return "general_challenger";
  return "brave_beginner";
};
