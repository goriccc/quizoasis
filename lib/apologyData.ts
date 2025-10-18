// 사과 스타일 테스트 데이터 (한국어)
export interface ApologyQuestion {
  id: number;
  question: Record<string, string>;
  options: Array<{
    text: Record<string, string>;
    scores: Record<string, number>;
  }>;
}

export interface ApologyResult {
  type: string;
  title: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>;
  pros: Record<string, string>;
  cons: Record<string, string>;
  advice: Record<string, string>;
  improvement: Record<string, string>;
  emoji: string;
}

// 질문 데이터 (한국어만)
export const apologyQuestions: ApologyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "실수로 친구와의 약속을 깜빡했을 때?",
      en: "When you accidentally forgot a promise with a friend?",
      ja: "うっかり友達との約束を忘れてしまった時は？",
      "zh-CN": "当你意外忘记与朋友的约定时？",
      "zh-TW": "當你意外忘記與朋友的約定時？",
      vi: "Khi bạn vô tình quên lời hứa với bạn bè?",
      id: "Ketika Anda tidak sengaja lupa janji dengan teman?"
    },
    options: [
      {
        text: {
          ko: "즉시 전화해서 \"정말 미안해\" 사과한다",
          en: "Immediately call and apologize \"I'm really sorry\"",
          ja: "すぐに電話して「本当にごめん」と謝る",
          "zh-CN": "立即打电话道歉\"真的很抱歉\"",
          "zh-TW": "立即打電話道歉\"真的很抱歉\"",
          vi: "Gọi ngay và xin lỗi \"Thực sự xin lỗi\"",
          id: "Segera menelepon dan meminta maaf \"Benar-benar maaf\""
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "\"요즘 너무 바빠서 깜빡했어\" 사정을 설명한다",
          en: "Explain the situation \"I've been so busy lately that I forgot\"",
          ja: "「最近忙しくて忘れちゃった」と事情を説明する",
          "zh-CN": "解释情况\"最近太忙了所以忘记了\"",
          "zh-TW": "解釋情況\"最近太忙了所以忘記了\"",
          vi: "Giải thích tình huống \"Gần đây tôi quá bận nên quên mất\"",
          id: "Jelaskan situasinya \"Akhir-akhir ini terlalu sibuk sampai lupa\""
        },
        scores: { "Type2": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "어색해서 나중에 슬쩍 \"그때 미안\"이라고 한다",
          en: "Feel awkward and later casually say \"Sorry about that\"",
          ja: "気まずくて後でそっと「あの時ごめん」と言う",
          "zh-CN": "感到尴尬，后来悄悄说\"那时对不起\"",
          "zh-TW": "感到尷尬，後來悄悄說\"那時對不起\"",
          vi: "Cảm thấy khó xử và sau đó lén nói \"Lúc đó xin lỗi\"",
          id: "Merasa canggung dan nanti diam-diam bilang \"Maaf waktu itu\""
        },
        scores: { "Type3": 5, "Type6": 2 }
      },
      {
        text: {
          ko: "다음에 좋은 선물이나 밥을 사준다",
          en: "Buy them a nice gift or meal next time",
          ja: "次回いいプレゼントやご飯をご馳走する",
          "zh-CN": "下次给他们买好礼物或请吃饭",
          "zh-TW": "下次給他們買好禮物或請吃飯",
          vi: "Lần sau mua quà đẹp hoặc mời ăn",
          id: "Lain kali belikan hadiah bagus atau traktir makan"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연인과 싸웠을 때 당신의 첫 행동은?",
      en: "What is your first action when you fight with your partner?",
      ja: "恋人と喧嘩した時のあなたの最初の行動は？",
      "zh-CN": "当你和恋人吵架时，你的第一个行动是什么？",
      "zh-TW": "當你和戀人吵架時，你的第一個行動是什麼？",
      vi: "Hành động đầu tiên của bạn khi cãi nhau với người yêu là gì?",
      id: "Apa tindakan pertama Anda saat bertengkar dengan pasangan?"
    },
    options: [
      {
        text: {
          ko: "\"내 잘못이야, 미안해\" 먼저 사과한다",
          en: "Apologize first \"It's my fault, I'm sorry\"",
          ja: "「私のせいだ、ごめん」と先に謝る",
          "zh-CN": "先道歉\"是我的错，对不起\"",
          "zh-TW": "先道歉\"是我的錯，對不起\"",
          vi: "Xin lỗi trước \"Lỗi của tôi, xin lỗi\"",
          id: "Minta maaf dulu \"Salah saya, maaf\""
        },
        scores: { "Type1": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "\"내 잘못도 있지만 너도...\" 양쪽 잘못 지적",
          en: "Point out both sides' faults \"I was wrong too, but you...\"",
          ja: "「私も悪かったけど、あなたも...」と両方の間違いを指摘",
          "zh-CN": "指出双方的错误\"我也有错，但你...\"",
          "zh-TW": "指出雙方的錯誤\"我也有錯，但你...\"",
          vi: "Chỉ ra lỗi của cả hai \"Tôi cũng sai nhưng bạn...\"",
          id: "Tunjukkan kesalahan kedua belah pihak \"Saya juga salah tapi kamu...\""
        },
        scores: { "Type2": 3 }
      },
      {
        text: {
          ko: "시간을 두고 냉각기를 가진다",
          en: "Take time to cool down",
          ja: "時間を置いてクールダウンする",
          "zh-CN": "花时间冷静下来",
          "zh-TW": "花時間冷靜下來",
          vi: "Dành thời gian để bình tĩnh lại",
          id: "Luangkan waktu untuk mendinginkan diri"
        },
        scores: { "Type6": 8 }
      },
      {
        text: {
          ko: "말없이 좋아하는 음식을 사다준다",
          en: "Silently buy their favorite food",
          ja: "黙って好きな食べ物を買ってあげる",
          "zh-CN": "默默地买他们喜欢的食物",
          "zh-TW": "默默地買他們喜歡的食物",
          vi: "Im lặng mua đồ ăn họ thích",
          id: "Diam-diam membelikan makanan favorit mereka"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "회의에서 당신의 실수가 드러났을 때?",
      en: "When your mistake is revealed in a meeting?",
      ja: "会議であなたのミスが明らかになった時は？",
      "zh-CN": "当你在会议中的错误被发现时？",
      "zh-TW": "當你在會議中的錯誤被發現時？",
      vi: "Khi lỗi của bạn bị phát hiện trong cuộc họp?",
      id: "Ketika kesalahan Anda terungkap dalam rapat?"
    },
    options: [
      {
        text: {
          ko: "\"죄송합니다, 제 실수입니다\" 즉시 인정",
          en: "Immediately admit \"I'm sorry, it was my mistake\"",
          ja: "「申し訳ありません、私のミスです」と即座に認める",
          "zh-CN": "立即承认\"对不起，是我的错误\"",
          "zh-TW": "立即承認\"對不起，是我的錯誤\"",
          vi: "Ngay lập tức thừa nhận \"Xin lỗi, đó là lỗi của tôi\"",
          id: "Segera mengakui \"Maaf, itu kesalahan saya\""
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "\"그 부분은 이런 이유로...\" 상황 설명",
          en: "Explain the situation \"That part was because...\"",
          ja: "「その部分はこんな理由で...」と状況を説明",
          "zh-CN": "解释情况\"那部分是因为...\"",
          "zh-TW": "解釋情況\"那部分是因為...\"",
          vi: "Giải thích tình huống \"Phần đó là vì...\"",
          id: "Jelaskan situasinya \"Bagian itu karena...\""
        },
        scores: { "Type2": 3, "Type5": 2 }
      },
      {
        text: {
          ko: "\"다음엔 조심하겠습니다\" 짧게 마무리",
          en: "End briefly \"I'll be more careful next time\"",
          ja: "「次は気をつけます」と短く締める",
          "zh-CN": "简短结束\"下次我会小心\"",
          "zh-TW": "簡短結束\"下次我會小心\"",
          vi: "Kết thúc ngắn gọn \"Lần sau tôi sẽ cẩn thận hơn\"",
          id: "Akhiri dengan singkat \"Lain kali saya akan lebih hati-hati\""
        },
        scores: { "Type3": 5, "Type6": 2 }
      },
      {
        text: {
          ko: "야근해서라도 완벽하게 수정해서 보여준다",
          en: "Work overtime to fix it perfectly and show it",
          ja: "残業してでも完璧に修正して見せる",
          "zh-CN": "即使加班也要完美修正并展示",
          "zh-TW": "即使加班也要完美修正並展示",
          vi: "Làm thêm giờ để sửa chữa hoàn hảo và thể hiện",
          id: "Lembur untuk memperbaikinya dengan sempurna dan menunjukkan"
        },
        scores: { "Type4": 3, "Type5": 1 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "부모님께 서운한 말을 했을 때?",
      en: "When you said something hurtful to your parents?",
      ja: "両親に傷つく言葉を言った時は？",
      "zh-CN": "当你对父母说了伤人的话时？",
      "zh-TW": "當你對父母說了傷人的話時？",
      vi: "Khi bạn nói điều gì đó làm tổn thương cha mẹ?",
      id: "Ketika Anda mengatakan sesuatu yang menyakitkan kepada orang tua?"
    },
    options: [
      {
        text: {
          ko: "바로 \"죄송해요, 제가 잘못했어요\" 사과",
          en: "Immediately apologize \"I'm sorry, I was wrong\"",
          ja: "すぐに「申し訳ありません、私が間違っていました」と謝る",
          "zh-CN": "立即道歉\"对不起，我错了\"",
          "zh-TW": "立即道歉\"對不起，我錯了\"",
          vi: "Ngay lập tức xin lỗi \"Xin lỗi, tôi đã sai\"",
          id: "Segera minta maaf \"Maaf, saya salah\""
        },
        scores: { "Type1": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "\"화나서 그랬어요\" 감정 설명",
          en: "Explain emotions \"I was angry\"",
          ja: "「怒っていたから」と感情を説明",
          "zh-CN": "解释情绪\"我生气了\"",
          "zh-TW": "解釋情緒\"我生氣了\"",
          vi: "Giải thích cảm xúc \"Tôi đã tức giận\"",
          id: "Jelaskan emosi \"Saya marah\""
        },
        scores: { "Type2": 3 }
      },
      {
        text: {
          ko: "며칠 후 \"그때는 제가...\" 조심스럽게 사과",
          en: "A few days later carefully apologize \"At that time I...\"",
          ja: "数日後に「あの時は私が...」と慎重に謝る",
          "zh-CN": "几天后小心地道歉\"那时我...\"",
          "zh-TW": "幾天後小心地道歉\"那時我...\"",
          vi: "Vài ngày sau cẩn thận xin lỗi \"Lúc đó tôi...\"",
          id: "Beberapa hari kemudian hati-hati minta maaf \"Waktu itu saya...\""
        },
        scores: { "Type6": 8, "Type5": 2 }
      },
      {
        text: {
          ko: "집안일을 돕거나 맛있는 것을 사드린다",
          en: "Help with housework or buy them something delicious",
          ja: "家事を手伝うか美味しいものを買ってあげる",
          "zh-CN": "帮忙做家务或买好吃的给他们",
          "zh-TW": "幫忙做家務或買好吃的給他們",
          vi: "Giúp việc nhà hoặc mua đồ ngon cho họ",
          id: "Membantu pekerjaan rumah atau membelikan makanan enak"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "사과할 때 가장 중요하게 생각하는 것은?",
      en: "What do you think is most important when apologizing?",
      ja: "謝罪する時、最も重要だと思うことは？",
      "zh-CN": "道歉时你认为最重要的是什么？",
      "zh-TW": "道歉時你認為最重要的是什麼？",
      vi: "Bạn nghĩ điều gì quan trọng nhất khi xin lỗi?",
      id: "Apa yang Anda pikir paling penting saat meminta maaf?"
    },
    options: [
      {
        text: {
          ko: "빠르게 사과해서 관계 회복하기",
          en: "Quickly apologize to restore the relationship",
          ja: "素早く謝罪して関係を修復する",
          "zh-CN": "快速道歉以恢复关系",
          "zh-TW": "快速道歉以恢復關係",
          vi: "Nhanh chóng xin lỗi để khôi phục mối quan hệ",
          id: "Cepat minta maaf untuk memulihkan hubungan"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "왜 그랬는지 이해받기",
          en: "Being understood for why it happened",
          ja: "なぜそうなったのか理解してもらう",
          "zh-CN": "被理解为什么会这样",
          "zh-TW": "被理解為什麼會這樣",
          vi: "Được hiểu tại sao lại như vậy",
          id: "Dipahami mengapa hal itu terjadi"
        },
        scores: { "Type2": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "진심이 담긴 사과",
          en: "Sincere apology",
          ja: "真心のこもった謝罪",
          "zh-CN": "真诚的道歉",
          "zh-TW": "真誠的道歉",
          vi: "Lời xin lỗi chân thành",
          id: "Permintaan maaf yang tulus"
        },
        scores: { "Type5": 8 }
      },
      {
        text: {
          ko: "실질적인 보상이나 행동",
          en: "Practical compensation or action",
          ja: "実質的な補償や行動",
          "zh-CN": "实际的补偿或行动",
          "zh-TW": "實際的補償或行動",
          vi: "Bồi thường thực tế hoặc hành động",
          id: "Kompensasi atau tindakan praktis"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "\"미안해\"라는 말을 하는 빈도는?",
      en: "How often do you say \"sorry\"?",
      ja: "「ごめん」という言葉を言う頻度は？",
      "zh-CN": "你说\"对不起\"的频率是？",
      "zh-TW": "你說\"對不起\"的頻率是？",
      vi: "Bạn nói \"xin lỗi\" với tần suất như thế nào?",
      id: "Seberapa sering Anda mengatakan \"maaf\"?"
    },
    options: [
      {
        text: {
          ko: "자주 한다, 잘못하면 바로",
          en: "Often, immediately when I make a mistake",
          ja: "よく言う、間違えたらすぐに",
          "zh-CN": "经常说，犯错时立即说",
          "zh-TW": "經常說，犯錯時立即說",
          vi: "Thường xuyên, ngay khi mắc lỗi",
          id: "Sering, langsung saat melakukan kesalahan"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "필요할 때만, 이유와 함께",
          en: "Only when necessary, with reasons",
          ja: "必要な時だけ、理由と一緒に",
          "zh-CN": "只在必要时，带着理由",
          "zh-TW": "只在必要時，帶著理由",
          vi: "Chỉ khi cần thiết, kèm theo lý do",
          id: "Hanya saat diperlukan, dengan alasan"
        },
        scores: { "Type2": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "잘 안 한다, 어색하다",
          en: "Don't say it often, it's awkward",
          ja: "あまり言わない、気まずい",
          "zh-CN": "不常说，很尴尬",
          "zh-TW": "不常說，很尷尬",
          vi: "Không thường nói, cảm thấy khó xử",
          id: "Tidak sering mengatakannya, terasa canggung"
        },
        scores: { "Type3": 5 }
      },
      {
        text: {
          ko: "말보다 행동으로 표현한다",
          en: "Express through actions rather than words",
          ja: "言葉より行動で表現する",
          "zh-CN": "用行动而不是言语表达",
          "zh-TW": "用行動而不是言語表達",
          vi: "Thể hiện bằng hành động thay vì lời nói",
          id: "Mengekspresikan melalui tindakan daripada kata-kata"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "상대방이 \"사과가 진심이 아닌 것 같아\"라고 하면?",
      en: "When the other person says \"Your apology doesn't seem sincere\"?",
      ja: "相手が「謝罪が心からではないようだ」と言ったら？",
      "zh-CN": "当对方说\"你的道歉似乎不真诚\"时？",
      "zh-TW": "當對方說\"你的道歉似乎不真誠\"時？",
      vi: "Khi đối phương nói \"Lời xin lỗi có vẻ không chân thành\"?",
      id: "Ketika orang lain mengatakan \"Permintaan maaf Anda tidak terlihat tulus\"?"
    },
    options: [
      {
        text: {
          ko: "\"진심이야, 정말 미안해\" 더 강조한다",
          en: "Emphasize more \"I'm sincere, I'm really sorry\"",
          ja: "「心からだよ、本当にごめん」とより強調する",
          "zh-CN": "更强调\"我是真心的，真的很抱歉\"",
          "zh-TW": "更強調\"我是真心的，真的很抱歉\"",
          vi: "Nhấn mạnh hơn \"Tôi chân thành, thực sự xin lỗi\"",
          id: "Menekankan lebih \"Saya tulus, benar-benar maaf\""
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "\"왜 그렇게 생각해?\" 이유를 묻는다",
          en: "Ask for reasons \"Why do you think so?\"",
          ja: "「なぜそう思うの？」と理由を聞く",
          "zh-CN": "询问原因\"为什么这么想？\"",
          "zh-TW": "詢問原因\"為什麼這麼想？\"",
          vi: "Hỏi lý do \"Tại sao bạn nghĩ vậy?\"",
          id: "Bertanya alasannya \"Mengapa Anda berpikir begitu?\""
        },
        scores: { "Type2": 3 }
      },
      {
        text: {
          ko: "말을 잘 못 해서 답답하다",
          en: "Feel frustrated because I can't express myself well",
          ja: "うまく話せなくてもどかしい",
          "zh-CN": "因为不善于表达而沮丧",
          "zh-TW": "因為不善於表達而沮喪",
          vi: "Cảm thấy bực bội vì không thể diễn đạt tốt",
          id: "Merasa frustrasi karena tidak bisa mengekspresikan diri dengan baik"
        },
        scores: { "Type3": 5, "Type5": 3 }
      },
      {
        text: {
          ko: "\"뭘 해주면 돼?\" 행동으로 보여주려 한다",
          en: "Try to show through actions \"What should I do?\"",
          ja: "「何をしてあげればいい？」と行動で示そうとする",
          "zh-CN": "试图用行动表达\"我应该做什么？\"",
          "zh-TW": "試圖用行動表達\"我應該做什麼？\"",
          vi: "Cố gắng thể hiện bằng hành động \"Tôi nên làm gì?\"",
          id: "Mencoba menunjukkan melalui tindakan \"Apa yang harus saya lakukan?\""
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "잘못을 인정하기 어려운 이유는?",
      en: "What makes it difficult to admit mistakes?",
      ja: "間違いを認めるのが難しい理由は？",
      "zh-CN": "承认错误困难的原因是什么？",
      "zh-TW": "承認錯誤困難的原因是什麼？",
      vi: "Lý do gì khiến việc thừa nhận sai lầm trở nên khó khăn?",
      id: "Apa yang membuat sulit mengakui kesalahan?"
    },
    options: [
      {
        text: {
          ko: "별로 없다, 잘못하면 인정한다",
          en: "Not really, I admit when I'm wrong",
          ja: "特にない、間違えたら認める",
          "zh-CN": "没什么，犯错时我会承认",
          "zh-TW": "沒什麼，犯錯時我會承認",
          vi: "Không có gì đặc biệt, tôi thừa nhận khi sai",
          id: "Tidak ada, saya mengakui saat salah"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "내 상황도 이해해줬으면 좋겠다",
          en: "I wish they would understand my situation too",
          ja: "私の状況も理解してもらいたい",
          "zh-CN": "希望他们也能理解我的情况",
          "zh-TW": "希望他們也能理解我的情況",
          vi: "Tôi muốn họ cũng hiểu tình huống của tôi",
          id: "Saya ingin mereka juga memahami situasi saya"
        },
        scores: { "Type2": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "자존심이 상하고 창피하다",
          en: "My pride is hurt and I feel embarrassed",
          ja: "プライドが傷ついて恥ずかしい",
          "zh-CN": "自尊心受伤，感到尴尬",
          "zh-TW": "自尊心受傷，感到尷尬",
          vi: "Lòng tự trọng bị tổn thương và tôi cảm thấy xấu hổ",
          id: "Harga diri terluka dan saya merasa malu"
        },
        scores: { "Type3": 5 }
      },
      {
        text: {
          ko: "말보다 행동이 더 확실한 것 같다",
          en: "Actions seem more reliable than words",
          ja: "言葉より行動の方が確実だと思う",
          "zh-CN": "行动似乎比言语更可靠",
          "zh-TW": "行動似乎比言語更可靠",
          vi: "Hành động có vẻ đáng tin cậy hơn lời nói",
          id: "Tindakan tampaknya lebih dapat diandalkan daripada kata-kata"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "사과 후 관계 회복 방법은?",
      en: "How do you restore the relationship after apologizing?",
      ja: "謝罪後の関係修復方法は？",
      "zh-CN": "道歉后如何恢复关系？",
      "zh-TW": "道歉後如何恢復關係？",
      vi: "Làm thế nào để khôi phục mối quan hệ sau khi xin lỗi?",
      id: "Bagaimana cara memulihkan hubungan setelah meminta maaf?"
    },
    options: [
      {
        text: {
          ko: "\"정말 미안해\" 여러 번 말로 확인",
          en: "Confirm with words multiple times \"I'm really sorry\"",
          ja: "「本当にごめん」と何度も言葉で確認",
          "zh-CN": "多次用言语确认\"真的很抱歉\"",
          "zh-TW": "多次用言語確認\"真的很抱歉\"",
          vi: "Xác nhận bằng lời nói nhiều lần \"Thực sự xin lỗi\"",
          id: "Konfirmasi dengan kata-kata berkali-kali \"Benar-benar maaf\""
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "\"앞으론 이렇게 할게\" 계획 설명",
          en: "Explain plans \"I'll do it this way from now on\"",
          ja: "「今後はこうします」と計画を説明",
          "zh-CN": "解释计划\"以后我会这样做\"",
          "zh-TW": "解釋計劃\"以後我會這樣做\"",
          vi: "Giải thích kế hoạch \"Từ giờ tôi sẽ làm như vậy\"",
          id: "Jelaskan rencana \"Ke depannya saya akan melakukan seperti ini\""
        },
        scores: { "Type5": 8, "Type2": 1 }
      },
      {
        text: {
          ko: "시간이 해결해주길 기다린다",
          en: "Wait for time to solve it",
          ja: "時間が解決してくれるのを待つ",
          "zh-CN": "等待时间解决问题",
          "zh-TW": "等待時間解決問題",
          vi: "Chờ đợi thời gian giải quyết",
          id: "Menunggu waktu menyelesaikannya"
        },
        scores: { "Type6": 8 }
      },
      {
        text: {
          ko: "좋아하는 것을 해주며 챙긴다",
          en: "Take care of them by doing things they like",
          ja: "好きなことをしてあげながら気にかける",
          "zh-CN": "通过做他们喜欢的事情来照顾他们",
          "zh-TW": "通過做他們喜歡的事情來照顧他們",
          vi: "Chăm sóc họ bằng cách làm những điều họ thích",
          id: "Merawat mereka dengan melakukan hal-hal yang mereka sukai"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신의 사과를 한 단어로 표현하면?",
      en: "How would you express your apology in one word?",
      ja: "あなたの謝罪を一つの言葉で表現すると？",
      "zh-CN": "你会如何用一个词表达你的道歉？",
      "zh-TW": "你會如何用一個詞表達你的道歉？",
      vi: "Bạn sẽ diễn đạt lời xin lỗi của mình bằng một từ như thế nào?",
      id: "Bagaimana Anda mengekspresikan permintaan maaf Anda dalam satu kata?"
    },
    options: [
      {
        text: {
          ko: "빠른",
          en: "Quick",
          ja: "速い",
          "zh-CN": "快速",
          "zh-TW": "快速",
          vi: "Nhanh",
          id: "Cepat"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "설명하는",
          en: "Explaining",
          ja: "説明する",
          "zh-CN": "解释的",
          "zh-TW": "解釋的",
          vi: "Giải thích",
          id: "Menjelaskan"
        },
        scores: { "Type2": 3, "Type5": 2 }
      },
      {
        text: {
          ko: "어색한",
          en: "Awkward",
          ja: "気まずい",
          "zh-CN": "尴尬的",
          "zh-TW": "尷尬的",
          vi: "Khó xử",
          id: "Canggung"
        },
        scores: { "Type3": 5, "Type6": 2 }
      },
      {
        text: {
          ko: "행동하는",
          en: "Action-oriented",
          ja: "行動する",
          "zh-CN": "行动的",
          "zh-TW": "行動的",
          vi: "Hành động",
          id: "Berorientasi tindakan"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "사과했는데도 상대방이 화가 안 풀리면?",
      en: "What if the other person is still angry even after apologizing?",
      ja: "謝罪したのに相手の怒りが収まらない時は？",
      "zh-CN": "道歉后对方仍然生气怎么办？",
      "zh-TW": "道歉後對方仍然生氣怎麼辦？",
      vi: "Nếu đối phương vẫn tức giận dù đã xin lỗi thì sao?",
      id: "Bagaimana jika orang lain masih marah meskipun sudah meminta maaf?"
    },
    options: [
      {
        text: {
          ko: "\"정말정말 미안해\" 계속 사과한다",
          en: "Keep apologizing \"I'm really really sorry\"",
          ja: "「本当に本当にごめん」と謝り続ける",
          "zh-CN": "继续道歉\"真的很抱歉\"",
          "zh-TW": "繼續道歉\"真的很抱歉\"",
          vi: "Tiếp tục xin lỗi \"Thực sự thực sự xin lỗi\"",
          id: "Terus minta maaf \"Benar-benar benar-benar maaf\""
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "\"내가 뭘 더 해야 해?\" 물어본다",
          en: "Ask \"What more should I do?\"",
          ja: "「私は何をすればいい？」と聞く",
          "zh-CN": "询问\"我应该做什么？\"",
          "zh-TW": "詢問\"我應該做什麼？\"",
          vi: "Hỏi \"Tôi nên làm gì thêm?\"",
          id: "Bertanya \"Apa lagi yang harus saya lakukan?\""
        },
        scores: { "Type2": 3, "Type5": 3 }
      },
      {
        text: {
          ko: "\"시간이 필요한가보다\" 기다린다",
          en: "Wait thinking \"They need time\"",
          ja: "「時間が必要なんだろう」と待つ",
          "zh-CN": "等待，想着\"他们需要时间\"",
          "zh-TW": "等待，想著\"他們需要時間\"",
          vi: "Chờ đợi nghĩ \"Họ cần thời gian\"",
          id: "Menunggu sambil berpikir \"Mereka butuh waktu\""
        },
        scores: { "Type6": 8, "Type3": 3 }
      },
      {
        text: {
          ko: "더 큰 행동으로 보여준다",
          en: "Show through bigger actions",
          ja: "より大きな行動で示す",
          "zh-CN": "通过更大的行动来表现",
          "zh-TW": "通過更大的行動來表現",
          vi: "Thể hiện bằng hành động lớn hơn",
          id: "Menunjukkan melalui tindakan yang lebih besar"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이상적인 사과 방식은?",
      en: "What is the ideal way to apologize?",
      ja: "理想的な謝罪の仕方は？",
      "zh-CN": "理想的道歉方式是什么？",
      "zh-TW": "理想的道歉方式是什麼？",
      vi: "Cách xin lỗi lý tưởng là gì?",
      id: "Cara ideal untuk meminta maaf adalah?"
    },
    options: [
      {
        text: {
          ko: "즉시 솔직하게 \"미안해\"",
          en: "Immediately and honestly \"I'm sorry\"",
          ja: "即座に正直に「ごめん」",
          "zh-CN": "立即诚实地说\"对不起\"",
          "zh-TW": "立即誠實地說\"對不起\"",
          vi: "Ngay lập tức và thành thật \"Xin lỗi\"",
          id: "Segera dan jujur \"Maaf\""
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "상황 설명과 함께 진심 전달",
          en: "Convey sincerity along with explaining the situation",
          ja: "状況説明と一緒に真心を伝える",
          "zh-CN": "在解释情况的同时传达真诚",
          "zh-TW": "在解釋情況的同時傳達真誠",
          vi: "Truyền đạt sự chân thành cùng với việc giải thích tình huống",
          id: "Menyampaikan ketulusan bersama dengan menjelaskan situasi"
        },
        scores: { "Type2": 3, "Type5": 3 }
      },
      {
        text: {
          ko: "진심 담긴 깊은 대화",
          en: "Deep conversation filled with sincerity",
          ja: "真心のこもった深い対話",
          "zh-CN": "充满真诚的深度对话",
          "zh-TW": "充滿真誠的深度對話",
          vi: "Cuộc trò chuyện sâu sắc đầy chân thành",
          id: "Percakapan mendalam yang penuh ketulusan"
        },
        scores: { "Type5": 8, "Type6": 3 }
      },
      {
        text: {
          ko: "말과 행동 모두 보여주기",
          en: "Showing both words and actions",
          ja: "言葉と行動の両方を見せる",
          "zh-CN": "同时展现言语和行动",
          "zh-TW": "同時展現言語和行動",
          vi: "Thể hiện cả lời nói và hành động",
          id: "Menunjukkan baik kata-kata maupun tindakan"
        },
        scores: { "Type4": 3, "Type5": 2 }
      }
    ]
  }
];

// 결과 데이터 (한국어만)
export const apologyResults: ApologyResult[] = [
  {
    type: "Type1",
    title: {
      ko: "즉각 사과형",
      en: "Immediate Apologizer",
      ja: "即座謝罪型",
      "zh-CN": "立即道歉型",
      "zh-TW": "立即道歉型",
      vi: "Người xin lỗi ngay lập tức",
      id: "Peminta Maaf Langsung"
    },
    description: {
      ko: "\"미안해가 입에 붙었어요! 빠른 사과의 달인\"\n\n잘못을 인정하고 사과하는 것이 빠릅니다. \"미안해\"를 자주 말하며, 관계 회복을 최우선으로 생각합니다. 자존심보다 관계가 중요하고, 갈등을 빨리 해결하고 싶어합니다. 진심 어린 사과로 신뢰를 쌓지만, 때로는 너무 쉽게 사과해서 가볍게 보일 수 있습니다.",
      en: "\"Sorry is always on my lips! Master of quick apologies\"\n\nYou quickly admit mistakes and apologize. You often say \"sorry\" and prioritize relationship recovery. Relationships are more important than pride, and you want to resolve conflicts quickly. You build trust through sincere apologies, but sometimes you apologize too easily and may appear insincere.",
      ja: "\"ごめんなさいが口癖！素早い謝罪の達人\"\n\n間違いを認めて謝罪するのが早いです。「ごめんなさい」をよく言い、関係修復を最優先に考えます。プライドより関係が重要で、対立を早く解決したいと思っています。真心のこもった謝罪で信頼を築きますが、時には謝りすぎて軽く見られることがあります。",
      "zh-CN": "\"对不起挂在嘴边！快速道歉大师\"\n\n你快速承认错误并道歉。经常说\"对不起\"，优先考虑关系恢复。关系比自尊心更重要，你想快速解决冲突。通过真诚的道歉建立信任，但有时道歉太容易，可能显得不够真诚。",
      "zh-TW": "\"對不起掛在嘴邊！快速道歉大師\"\n\n你快速承認錯誤並道歉。經常說\"對不起\"，優先考慮關係恢復。關係比自尊心更重要，你想快速解決衝突。通過真誠的道歉建立信任，但有時道歉太容易，可能顯得不夠真誠。",
      vi: "\"Xin lỗi luôn ở trên môi! Bậc thầy xin lỗi nhanh chóng\"\n\nBạn nhanh chóng thừa nhận sai lầm và xin lỗi. Thường nói \"xin lỗi\" và ưu tiên khôi phục mối quan hệ. Mối quan hệ quan trọng hơn lòng tự trọng, và bạn muốn giải quyết xung đột nhanh chóng. Xây dựng niềm tin thông qua lời xin lỗi chân thành, nhưng đôi khi xin lỗi quá dễ dàng có thể trông không chân thành.",
      id: "\"Maaf selalu di bibir! Master permintaan maaf cepat\"\n\nAnda cepat mengakui kesalahan dan meminta maaf. Sering mengatakan \"maaf\" dan memprioritaskan pemulihan hubungan. Hubungan lebih penting daripada harga diri, dan Anda ingin menyelesaikan konflik dengan cepat. Membangun kepercayaan melalui permintaan maaf yang tulus, tetapi terkadang meminta maaf terlalu mudah bisa terlihat tidak tulus."
    },
    characteristics: {
      ko: "신속함, 솔직함, 관계 중시, 갈등 회피, 겸손",
      en: "Speed, Honesty, Relationship-focused, Conflict avoidance, Humility",
      ja: "迅速さ、正直さ、関係重視、対立回避、謙虚さ",
      "zh-CN": "迅速，诚实，重视关系，避免冲突，谦逊",
      "zh-TW": "迅速，誠實，重視關係，避免衝突，謙遜",
      vi: "Tốc độ, Trung thực, Tập trung vào mối quan hệ, Tránh xung đột, Khiêm tốn",
      id: "Kecepatan, Kejujuran, Fokus pada hubungan, Menghindari konflik, Kerendahan hati"
    },
    pros: {
      ko: "갈등 빠른 해결, 신뢰 형성, 편한 관계, 겸손함",
      en: "Quick conflict resolution, Trust building, Comfortable relationships, Humility",
      ja: "対立の迅速な解決、信頼形成、心地よい関係、謙虚さ",
      "zh-CN": "快速解决冲突，建立信任，舒适的关系，谦逊",
      "zh-TW": "快速解決衝突，建立信任，舒適的關係，謙遜",
      vi: "Giải quyết xung đột nhanh chóng, Xây dựng niềm tin, Mối quan hệ thoải mái, Khiêm tốn",
      id: "Penyelesaian konflik cepat, Membangun kepercayaan, Hubungan nyaman, Kerendahan hati"
    },
    cons: {
      ko: "가볍게 보임, 습관적 사과, 자존감 낮아 보임, 상대방이 이용할 수 있음",
      en: "Appears insincere, Habitual apologies, Low self-esteem, Can be taken advantage of",
      ja: "軽く見える、習慣的な謝罪、自尊心が低く見える、相手に利用される可能性",
      "zh-CN": "显得不真诚，习惯性道歉，自尊心低，可能被利用",
      "zh-TW": "顯得不真誠，習慣性道歉，自尊心低，可能被利用",
      vi: "Trông không chân thành, Xin lỗi theo thói quen, Tự trọng thấp, Có thể bị lợi dụng",
      id: "Terlihat tidak tulus, Permintaan maaf kebiasaan, Harga diri rendah, Bisa dimanfaatkan"
    },
    advice: {
      ko: "사과도 좋지만 매번 당신만 사과하는 건 아닌지 확인하세요. 때로는 당당함도 필요합니다.",
      en: "Apologizing is good, but check if you're the only one apologizing every time. Sometimes you need to be confident too.",
      ja: "謝罪も良いですが、毎回あなただけが謝っているのではないか確認してください。時には堂々とすることも必要です。",
      "zh-CN": "道歉是好的，但要检查是否每次都是你在道歉。有时也需要自信。",
      "zh-TW": "道歉是好的，但要檢查是否每次都是你在道歉。有時也需要自信。",
      vi: "Xin lỗi là tốt, nhưng hãy kiểm tra xem bạn có phải là người duy nhất xin lỗi mỗi lần không. Đôi khi bạn cũng cần tự tin.",
      id: "Meminta maaf itu baik, tapi periksa apakah Anda satu-satunya yang meminta maaf setiap kali. Terkadang Anda juga perlu percaya diri."
    },
    improvement: {
      ko: "잘못이 명확할 때만 사과하세요. 습관적으로 \"미안해\"하지 말고, 진심이 담긴 사과를 하세요.",
      en: "Only apologize when the mistake is clear. Don't habitually say \"sorry\" and make sincere apologies.",
      ja: "間違いが明確な時だけ謝罪してください。習慣的に「ごめんなさい」と言わず、真心のこもった謝罪をしてください。",
      "zh-CN": "只有在错误明确时才道歉。不要习惯性地说\"对不起\"，要真诚地道歉。",
      "zh-TW": "只有在錯誤明確時才道歉。不要習慣性地說\"對不起\"，要真誠地道歉。",
      vi: "Chỉ xin lỗi khi sai lầm rõ ràng. Đừng thường xuyên nói \"xin lỗi\" và hãy xin lỗi một cách chân thành.",
      id: "Hanya minta maaf ketika kesalahan jelas. Jangan secara kebiasaan mengatakan \"maaf\" dan lakukan permintaan maaf yang tulus."
    },
    emoji: "🙏"
  },
  {
    type: "Type2",
    title: {
      ko: "설명형 사과러",
      en: "Explanatory Apologizer",
      ja: "説明型謝罪者",
      "zh-CN": "解释型道歉者",
      "zh-TW": "解釋型道歉者",
      vi: "Người xin lỗi có giải thích",
      id: "Peminta Maaf Penjelas"
    },
    description: {
      ko: "\"하지만 그건... 이유를 설명하고 싶어요\"\n\n사과할 때 항상 이유와 상황을 설명합니다. \"미안해, 그런데 이건 이래서...\"라는 패턴입니다. 상대방이 자신의 상황을 이해해주길 바랍니다. 논리적이고 공정하지만, 상대방은 변명으로 들을 수 있습니다. 진심 어린 사과가 부족해 보일 수 있습니다.",
      en: "\"But that's... I want to explain the reason\"\n\nYou always explain the reason and situation when apologizing. The pattern is \"Sorry, but this is because...\" You want the other person to understand your situation. You're logical and fair, but the other person may hear it as an excuse. Your sincere apology may seem insufficient.",
      ja: "\"でもそれは...理由を説明したいです\"\n\n謝罪する時は常に理由と状況を説明します。「ごめんなさい、でもこれはこういう理由で...」というパターンです。相手が自分の状況を理解してくれることを望みます。論理的で公正ですが、相手は言い訳に聞こえるかもしれません。真心のこもった謝罪が不足しているように見えることがあります。",
      "zh-CN": "\"但是那是...我想解释原因\"\n\n道歉时总是解释原因和情况。模式是\"对不起，但这是因为...\"你希望对方理解你的情况。你逻辑性强且公正，但对方可能听起来像借口。你的真诚道歉可能显得不够。",
      "zh-TW": "\"但是那是...我想解釋原因\"\n\n道歉時總是解釋原因和情況。模式是\"對不起，但這是因為...\"你希望對方理解你的情況。你邏輯性強且公正，但對方可能聽起來像藉口。你的真誠道歉可能顯得不夠。",
      vi: "\"Nhưng đó là... Tôi muốn giải thích lý do\"\n\nBạn luôn giải thích lý do và tình huống khi xin lỗi. Mẫu là \"Xin lỗi, nhưng điều này là vì...\" Bạn muốn người khác hiểu tình huống của mình. Bạn logic và công bằng, nhưng người khác có thể nghe như lời bào chữa. Lời xin lỗi chân thành của bạn có thể trông không đủ.",
      id: "\"Tapi itu... Saya ingin menjelaskan alasannya\"\n\nAnda selalu menjelaskan alasan dan situasi saat meminta maaf. Polanya adalah \"Maaf, tapi ini karena...\" Anda ingin orang lain memahami situasi Anda. Anda logis dan adil, tapi orang lain mungkin mendengarnya sebagai alasan. Permintaan maaf tulus Anda mungkin terlihat tidak cukup."
    },
    characteristics: {
      ko: "논리적, 공정함, 이해 추구, 방어적, 분석적",
      en: "Logical, Fair, Seeks understanding, Defensive, Analytical",
      ja: "論理的、公正、理解を求める、防御的、分析的",
      "zh-CN": "逻辑性，公正，寻求理解，防御性，分析性",
      "zh-TW": "邏輯性，公正，尋求理解，防禦性，分析性",
      vi: "Logic, Công bằng, Tìm kiếm sự hiểu biết, Phòng thủ, Phân tích",
      id: "Logis, Adil, Mencari pengertian, Defensif, Analitis"
    },
    pros: {
      ko: "명확한 소통, 오해 방지, 합리적",
      en: "Clear communication, Misunderstanding prevention, Rational",
      ja: "明確なコミュニケーション、誤解防止、合理的",
      "zh-CN": "清晰的沟通，防止误解，理性",
      "zh-TW": "清晰的溝通，防止誤解，理性",
      vi: "Giao tiếp rõ ràng, Ngăn ngừa hiểu lầm, Hợp lý",
      id: "Komunikasi yang jelas, Mencegah kesalahpahaman, Rasional"
    },
    cons: {
      ko: "변명처럼 들림, 진심 부족, 상대방 화남, 관계 악화 가능",
      en: "Sounds like excuses, Lack of sincerity, Makes others angry, Relationship deterioration possible",
      ja: "言い訳のように聞こえる、真心不足、相手を怒らせる、関係悪化の可能性",
      "zh-CN": "听起来像借口，缺乏真诚，让对方生气，关系可能恶化",
      "zh-TW": "聽起來像藉口，缺乏真誠，讓對方生氣，關係可能惡化",
      vi: "Nghe như lời bào chữa, Thiếu chân thành, Làm người khác tức giận, Có thể làm xấu mối quan hệ",
      id: "Terdengar seperti alasan, Kurang ketulusan, Membuat orang lain marah, Hubungan bisa memburuk"
    },
    advice: {
      ko: "이유 설명 전에 먼저 진심으로 사과하세요. \"미안해\"가 먼저, 설명은 나중에!",
      en: "Apologize sincerely first before explaining the reason. \"Sorry\" first, explanation later!",
      ja: "理由を説明する前に、まず真心で謝罪してください。「ごめんなさい」が先、説明は後で！",
      "zh-CN": "在解释原因之前先真诚地道歉。\"对不起\"先，解释后！",
      "zh-TW": "在解釋原因之前先真誠地道歉。\"對不起\"先，解釋後！",
      vi: "Hãy xin lỗi chân thành trước khi giải thích lý do. \"Xin lỗi\" trước, giải thích sau!",
      id: "Minta maaf dengan tulus dulu sebelum menjelaskan alasan. \"Maaf\" dulu, penjelasan kemudian!"
    },
    improvement: {
      ko: "\"미안해, 하지만...\" 대신 \"미안해. (멈춤) 내가 이런 상황이었는데 그래도 내 잘못이야\"로 바꾸세요.",
      en: "Instead of \"Sorry, but...\" change to \"Sorry. (pause) I was in this situation, but it's still my fault.\"",
      ja: "\"ごめんなさい、でも...\"の代わりに「ごめんなさい。（間）私はこんな状況でしたが、それでも私の間違いです」に変えてください。",
      "zh-CN": "不要说\"对不起，但是...\"，改为\"对不起。（停顿）我处于这种情况，但仍然是我不对。\"",
      "zh-TW": "不要說\"對不起，但是...\"，改為\"對不起。（停頓）我處於這種情況，但仍然是我不對。\"",
      vi: "Thay vì \"Xin lỗi, nhưng...\" hãy đổi thành \"Xin lỗi. (dừng) Tôi đã ở trong tình huống này, nhưng vẫn là lỗi của tôi.\"",
      id: "Alih-alih \"Maaf, tapi...\" ubah menjadi \"Maaf. (jeda) Saya dalam situasi ini, tapi tetap salah saya.\""
    },
    emoji: "📝"
  },
  {
    type: "Type3",
    title: {
      ko: "회피형 사과러",
      en: "Avoidant Apologizer",
      ja: "回避型謝罪者",
      "zh-CN": "回避型道歉者",
      "zh-TW": "迴避型道歉者",
      vi: "Người xin lỗi tránh né",
      id: "Peminta Maaf Penghindar"
    },
    description: {
      ko: "\"말이 안 나와요... 사과가 너무 어려워요\"\n\n사과하는 것이 매우 어렵고 어색합니다. 자존심이 상하고 창피해서 \"미안해\"를 잘 못 합니다. 시간을 두고 나중에 슬쩍 사과하거나, 아예 못 하고 넘어갑니다. 잘못을 인정하는 것이 부담스럽고, 감정 표현이 서툽니다. 관계가 소원해지거나 오해가 쌓일 수 있습니다.",
      en: "\"Words don't come out... Apologizing is too difficult\"\n\nApologizing is very difficult and awkward. You can't say \"sorry\" well because your pride is hurt and you're embarrassed. You either apologize later after some time or can't do it at all and move on. Admitting mistakes is burdensome and you're not good at expressing emotions. Relationships may become distant or misunderstandings may accumulate.",
      ja: "\"言葉が出ない...謝罪がとても難しい\"\n\n謝罪することが非常に困難で不自然です。プライドが傷つき恥ずかしくて「ごめんなさい」が上手に言えません。時間を置いて後でそっと謝罪するか、全くできずにやり過ごします。間違いを認めることが負担で、感情表現が下手です。関係が疎遠になったり、誤解が積み重なることがあります。",
      "zh-CN": "\"说不出口...道歉太难了\"\n\n道歉非常困难和尴尬。因为自尊心受伤和尴尬，你无法很好地说出\"对不起\"。你要么过一段时间后悄悄道歉，要么完全做不到就过去了。承认错误是负担，你不善于表达情感。关系可能变得疏远或误解可能累积。",
      "zh-TW": "\"說不出口...道歉太難了\"\n\n道歉非常困難和尷尬。因為自尊心受傷和尷尬，你無法很好地說出\"對不起\"。你要麼過一段時間後悄悄道歉，要麼完全做不到就過去了。承認錯誤是負擔，你不善於表達情感。關係可能變得疏遠或誤解可能累積。",
      vi: "\"Không nói được... Xin lỗi quá khó\"\n\nXin lỗi rất khó khăn và khó xử. Bạn không thể nói \"xin lỗi\" tốt vì lòng tự trọng bị tổn thương và bạn xấu hổ. Bạn hoặc xin lỗi sau một thời gian hoặc không thể làm được và bỏ qua. Thừa nhận sai lầm là gánh nặng và bạn không giỏi thể hiện cảm xúc. Mối quan hệ có thể trở nên xa cách hoặc hiểu lầm có thể tích tụ.",
      id: "\"Tidak bisa mengucapkan... Meminta maaf terlalu sulit\"\n\nMeminta maaf sangat sulit dan canggung. Anda tidak bisa mengucapkan \"maaf\" dengan baik karena harga diri terluka dan Anda malu. Anda meminta maaf diam-diam setelah beberapa waktu atau tidak bisa melakukannya sama sekali dan melupakannya. Mengakui kesalahan adalah beban dan Anda tidak pandai mengekspresikan emosi. Hubungan bisa menjadi jauh atau kesalahpahaman bisa menumpuk."
    },
    characteristics: {
      ko: "자존심, 어색함, 감정 표현 서툼, 회피, 시간 필요",
      en: "Pride, Awkwardness, Poor emotional expression, Avoidance, Needs time",
      ja: "プライド、不自然さ、感情表現下手、回避、時間が必要",
      "zh-CN": "自尊心，尴尬，情感表达差，回避，需要时间",
      "zh-TW": "自尊心，尷尬，情感表達差，迴避，需要時間",
      vi: "Lòng tự trọng, Khó xử, Biểu hiện cảm xúc kém, Tránh né, Cần thời gian",
      id: "Harga diri, Canggung, Ekspresi emosi buruk, Menghindar, Butuh waktu"
    },
    pros: {
      ko: "신중함, 생각 많음",
      en: "Prudence, Thoughtful",
      ja: "慎重さ、思慮深さ",
      "zh-CN": "谨慎，深思熟虑",
      "zh-TW": "謹慎，深思熟慮",
      vi: "Thận trọng, Suy nghĩ nhiều",
      id: "Hati-hati, Banyak berpikir"
    },
    cons: {
      ko: "관계 악화, 오해 누적, 소원해짐, 미성숙해 보임",
      en: "Relationship deterioration, Misunderstanding accumulation, Becoming distant, Appearing immature",
      ja: "関係悪化、誤解蓄積、疎遠になる、未熟に見える",
      "zh-CN": "关系恶化，误解累积，变得疏远，显得不成熟",
      "zh-TW": "關係惡化，誤解累積，變得疏遠，顯得不成熟",
      vi: "Mối quan hệ xấu đi, Hiểu lầm tích tụ, Trở nên xa cách, Trông chưa trưởng thành",
      id: "Hubungan memburuk, Kesalahpahaman menumpuk, Menjadi jauh, Terlihat belum dewasa"
    },
    advice: {
      ko: "사과는 약함이 아니라 용기입니다. \"미안해\" 한마디가 관계를 살립니다. 연습이 필요해요.",
      en: "Apologizing is not weakness but courage. One word \"sorry\" can save a relationship. You need practice.",
      ja: "謝罪は弱さではなく勇気です。「ごめんなさい」の一言が関係を救います。練習が必要です。",
      "zh-CN": "道歉不是软弱而是勇气。一句\"对不起\"可以拯救关系。你需要练习。",
      "zh-TW": "道歉不是軟弱而是勇氣。一句\"對不起\"可以拯救關係。你需要練習。",
      vi: "Xin lỗi không phải là yếu đuối mà là dũng khí. Một từ \"xin lỗi\" có thể cứu mối quan hệ. Bạn cần luyện tập.",
      id: "Meminta maaf bukan kelemahan tapi keberanian. Satu kata \"maaf\" bisa menyelamatkan hubungan. Anda perlu latihan."
    },
    improvement: {
      ko: "작은 것부터 시작하세요. \"그때 내가 미안했어\" 짧게라도 말해보세요. 문자로 시작해도 좋습니다.",
      en: "Start small. Try saying \"I was sorry then\" even briefly. Starting with text is fine too.",
      ja: "小さなことから始めてください。「その時ごめんと思ってた」短くても言ってみてください。メッセージから始めても大丈夫です。",
      "zh-CN": "从小事开始。试着说\"那时我很抱歉\"，即使简短。从文字开始也可以。",
      "zh-TW": "從小事開始。試著說\"那時我很抱歉\"，即使簡短。從文字開始也可以。",
      vi: "Bắt đầu từ những điều nhỏ. Hãy thử nói \"Lúc đó tôi đã xin lỗi\" dù ngắn gọn. Bắt đầu bằng tin nhắn cũng được.",
      id: "Mulai dari hal kecil. Coba katakan \"Saat itu saya minta maaf\" meski singkat. Memulai dengan pesan juga tidak apa-apa."
    },
    emoji: "😶"
  },
  {
    type: "Type4",
    title: {
      ko: "행동형 사과러",
      en: "Action Apologizer",
      ja: "行動型謝罪者",
      "zh-CN": "行动型道歉者",
      "zh-TW": "行動型道歉者",
      vi: "Người xin lỗi bằng hành động",
      id: "Peminta Maaf dengan Tindakan"
    },
    description: {
      ko: "\"말보다 행동! 실질적으로 보여드릴게요\"\n\n말보다 행동으로 사과합니다. \"미안해\"라는 말 대신 선물, 도움, 친절로 표현합니다. 실질적이고 구체적인 보상을 중시합니다. 진심이 담겨있지만, 상대방이 말로 듣고 싶어 할 때는 부족해 보일 수 있습니다. 때로는 돈으로 해결하려는 것처럼 보입니다.",
      en: "\"Actions over words! I'll show you practically\"\n\nYou apologize through actions rather than words. Instead of saying \"sorry,\" you express through gifts, help, and kindness. You value practical and specific compensation. While sincere, it may seem insufficient when the other person wants to hear words. Sometimes it may look like you're trying to solve things with money.",
      ja: "\"言葉より行動！実質的に見せてあげます\"\n\n言葉より行動で謝罪します。「ごめんなさい」という言葉の代わりに、プレゼント、手伝い、親切で表現します。実質的で具体的な補償を重視します。真心が込められていますが、相手が言葉で聞きたがる時は不足に見えることがあります。時にはお金で解決しようとしているように見えることがあります。",
      "zh-CN": "\"行动胜过言语！我会实际展示给你\"\n\n你通过行动而不是言语来道歉。不是 saying \"对不起\"，而是通过礼物、帮助、善意来表达。你重视实际和具体的补偿。虽然真诚，但当对方想听到话语时可能显得不足。有时可能看起来像你想用金钱解决问题。",
      "zh-TW": "\"行動勝過言語！我會實際展示給你\"\n\n你通過行動而不是言語來道歉。不是說\"對不起\"，而是通過禮物、幫助、善意來表達。你重視實際和具體的補償。雖然真誠，但當對方想聽到話語時可能顯得不足。有時可能看起來像你想用金錢解決問題。",
      vi: "\"Hành động hơn lời nói! Tôi sẽ thể hiện thực tế\"\n\nBạn xin lỗi bằng hành động thay vì lời nói. Thay vì nói \"xin lỗi\", bạn thể hiện qua quà tặng, giúp đỡ, lòng tốt. Bạn coi trọng sự đền bù thực tế và cụ thể. Mặc dù chân thành, nhưng có thể trông không đủ khi người khác muốn nghe lời nói. Đôi khi có thể trông như bạn đang cố giải quyết bằng tiền.",
      id: "\"Tindakan lebih dari kata-kata! Saya akan tunjukkan secara praktis\"\n\nAnda meminta maaf melalui tindakan daripada kata-kata. Alih-alih mengatakan \"maaf\", Anda mengekspresikan melalui hadiah, bantuan, kebaikan. Anda menghargai kompensasi praktis dan spesifik. Meskipun tulus, mungkin terlihat tidak cukup ketika orang lain ingin mendengar kata-kata. Terkadang mungkin terlihat seperti Anda mencoba menyelesaikan dengan uang."
    },
    characteristics: {
      ko: "실용적, 행동 중심, 책임감, 구체적, 표현 서툼",
      en: "Practical, Action-oriented, Responsible, Specific, Poor expression",
      ja: "実用的、行動中心、責任感、具体的、表現下手",
      "zh-CN": "实用，行动导向，负责任，具体，表达差",
      "zh-TW": "實用，行動導向，負責任，具體，表達差",
      vi: "Thực tế, Hướng hành động, Có trách nhiệm, Cụ thể, Biểu hiện kém",
      id: "Praktis, Berorientasi tindakan, Bertanggung jawab, Spesifik, Ekspresi buruk"
    },
    pros: {
      ko: "실질적 보상, 진심 전달, 책임감 있음",
      en: "Practical compensation, Sincere delivery, Sense of responsibility",
      ja: "実質的補償、真心伝達、責任感",
      "zh-CN": "实际补偿，真诚传达，责任感",
      "zh-TW": "實際補償，真誠傳達，責任感",
      vi: "Đền bù thực tế, Truyền tải chân thành, Có trách nhiệm",
      id: "Kompensasi praktis, Penyampaian tulus, Rasa tanggung jawab"
    },
    cons: {
      ko: "말 부족, 물질적으로 보임, 상대방 감정 간과",
      en: "Lack of words, Appears materialistic, Overlooks other's emotions",
      ja: "言葉不足、物質的に見える、相手の感情見落とし",
      "zh-CN": "缺乏话语，显得物质化，忽视对方情感",
      "zh-TW": "缺乏話語，顯得物質化，忽視對方情感",
      vi: "Thiếu lời nói, Trông vật chất, Bỏ qua cảm xúc người khác",
      id: "Kurang kata-kata, Terlihat materialistis, Mengabaikan emosi orang lain"
    },
    advice: {
      ko: "행동도 좋지만 \"미안해\"라는 말도 필요합니다. 둘 다 하면 완벽해요!",
      en: "Actions are good, but the word \"sorry\" is also needed. Both together are perfect!",
      ja: "行動も良いですが、「ごめんなさい」という言葉も必要です。両方やれば完璧です！",
      "zh-CN": "行动很好，但\"对不起\"这个词也是需要的。两者结合就完美了！",
      "zh-TW": "行動很好，但\"對不起\"這個詞也是需要的。兩者結合就完美了！",
      vi: "Hành động cũng tốt, nhưng từ \"xin lỗi\" cũng cần thiết. Cả hai cùng nhau sẽ hoàn hảo!",
      id: "Tindakan bagus, tapi kata \"maaf\" juga diperlukan. Keduanya bersama akan sempurna!"
    },
    improvement: {
      ko: "행동 전에 먼저 \"미안해\"라고 말하세요. 그리고 \"뭘 해주면 좋을까?\"라고 물어보세요.",
      en: "Say \"sorry\" first before taking action. Then ask \"What can I do to help?\"",
      ja: "行動する前にまず「ごめんなさい」と言ってください。そして「何をしてあげればいい？」と聞いてください。",
      "zh-CN": "在行动之前先说\"对不起\"。然后问\"我能做什么来帮助？\"",
      "zh-TW": "在行動之前先說\"對不起\"。然後問\"我能做什麼來幫助？\"",
      vi: "Hãy nói \"xin lỗi\" trước khi hành động. Sau đó hỏi \"Tôi có thể làm gì để giúp?\"",
      id: "Katakan \"maaf\" dulu sebelum bertindak. Kemudian tanya \"Apa yang bisa saya lakukan untuk membantu?\""
    },
    emoji: "🎁"
  },
  {
    type: "Type5",
    title: {
      ko: "진심 표현형",
      en: "Sincere Expressor",
      ja: "真心表現型",
      "zh-CN": "真诚表达型",
      "zh-TW": "真誠表達型",
      vi: "Người thể hiện chân thành",
      id: "Pengekspresi Tulus"
    },
    description: {
      ko: "\"진심으로 미안해요... 깊이 있는 사과의 소유자\"\n\n사과할 때 진심을 깊이 담아 표현합니다. 단순히 \"미안해\"가 아니라, 왜 미안한지, 어떻게 할 것인지 진지하게 대화합니다. 상대방의 감정을 헤아리고 공감하며, 관계 회복을 위해 노력합니다. 가장 성숙하고 이상적인 사과 스타일입니다.",
      en: "\"I'm sincerely sorry... Owner of deep apologies\"\n\nYou express deep sincerity when apologizing. It's not just \"sorry,\" but you seriously discuss why you're sorry and what you'll do about it. You consider the other person's emotions and empathize, working hard for relationship recovery. This is the most mature and ideal apology style.",
      ja: "\"心から申し訳ありません...深い謝罪の持ち主\"\n\n謝罪する時に真心を深く込めて表現します。単純に「ごめんなさい」ではなく、なぜ申し訳ないのか、どうするのか真剣に話し合います。相手の感情を慮り共感し、関係修復のために努力します。最も成熟した理想的な謝罪スタイルです。",
      "zh-CN": "\"我真诚地抱歉...深度道歉的拥有者\"\n\n道歉时你表达深刻的真诚。不仅仅是\"对不起\"，而是认真讨论为什么抱歉以及你会怎么做。你考虑对方的情绪并产生共鸣，努力恢复关系。这是最成熟和理想的道歉风格。",
      "zh-TW": "\"我真誠地抱歉...深度道歉的擁有者\"\n\n道歉時你表達深刻的真誠。不僅僅是\"對不起\"，而是認真討論為什麼抱歉以及你會怎麼做。你考慮對方的情緒並產生共鳴，努力恢復關係。這是最成熟和理想的道歉風格。",
      vi: "\"Tôi chân thành xin lỗi... Chủ nhân của lời xin lỗi sâu sắc\"\n\nBạn thể hiện sự chân thành sâu sắc khi xin lỗi. Không chỉ đơn giản là \"xin lỗi\", mà bạn thảo luận nghiêm túc tại sao bạn xin lỗi và bạn sẽ làm gì về điều đó. Bạn cân nhắc cảm xúc của người khác và đồng cảm, nỗ lực để khôi phục mối quan hệ. Đây là phong cách xin lỗi trưởng thành và lý tưởng nhất.",
      id: "\"Saya dengan tulus minta maaf... Pemilik permintaan maaf yang mendalam\"\n\nAnda mengekspresikan ketulusan yang mendalam saat meminta maaf. Bukan hanya \"maaf\", tetapi Anda serius membahas mengapa Anda minta maaf dan apa yang akan Anda lakukan. Anda mempertimbangkan emosi orang lain dan berempati, bekerja keras untuk pemulihan hubungan. Ini adalah gaya permintaan maaf yang paling dewasa dan ideal."
    },
    characteristics: {
      ko: "진심, 성숙함, 공감, 책임감, 소통 능력",
      en: "Sincerity, Maturity, Empathy, Responsibility, Communication skills",
      ja: "真心、成熟、共感、責任感、コミュニケーション能力",
      "zh-CN": "真诚，成熟，共情，责任感，沟通能力",
      "zh-TW": "真誠，成熟，共情，責任感，溝通能力",
      vi: "Chân thành, Trưởng thành, Đồng cảm, Trách nhiệm, Kỹ năng giao tiếp",
      id: "Ketulusan, Kedewasaan, Empati, Tanggung jawab, Keterampilan komunikasi"
    },
    pros: {
      ko: "관계 회복 최고, 신뢰 형성, 재발 방지, 성숙함",
      en: "Best relationship recovery, Trust building, Prevention of recurrence, Maturity",
      ja: "関係修復最高、信頼形成、再発防止、成熟",
      "zh-CN": "最佳关系恢复，建立信任，防止复发，成熟",
      "zh-TW": "最佳關係恢復，建立信任，防止復發，成熟",
      vi: "Khôi phục mối quan hệ tốt nhất, Xây dựng niềm tin, Ngăn ngừa tái phát, Trưởng thành",
      id: "Pemulihan hubungan terbaik, Membangun kepercayaan, Mencegah kekambuhan, Kedewasaan"
    },
    cons: {
      ko: "시간이 오래 걸림, 감정 소모",
      en: "Takes a long time, Emotional exhaustion",
      ja: "時間がかかる、感情消耗",
      "zh-CN": "需要很长时间，情感消耗",
      "zh-TW": "需要很長時間，情感消耗",
      vi: "Mất nhiều thời gian, Kiệt quệ cảm xúc",
      id: "Memakan waktu lama, Kelelahan emosional"
    },
    advice: {
      ko: "완벽합니다! 하지만 너무 무겁게 받아들이지 마세요. 작은 잘못엔 가볍게 사과해도 돼요.",
      en: "Perfect! But don't take it too seriously. For small mistakes, you can apologize lightly.",
      ja: "完璧です！でも重く受け止めすぎないでください。小さな間違いは軽く謝罪しても大丈夫です。",
      "zh-CN": "完美！但不要过于严肃。对于小错误，你可以轻松道歉。",
      "zh-TW": "完美！但不要過於嚴肅。對於小錯誤，你可以輕鬆道歉。",
      vi: "Hoàn hảo! Nhưng đừng quá nghiêm trọng. Với những sai lầm nhỏ, bạn có thể xin lỗi nhẹ nhàng.",
      id: "Sempurna! Tapi jangan terlalu serius. Untuk kesalahan kecil, Anda bisa minta maaf dengan ringan."
    },
    improvement: {
      ko: "이미 잘하고 있어요! 가끔은 가볍게 \"미안, 내 실수야\"도 괜찮다는 것만 기억하세요.",
      en: "You're already doing well! Just remember that sometimes it's okay to say \"Sorry, my mistake\" lightly.",
      ja: "もう上手にやっています！時には軽く「ごめん、私のミス」と言っても大丈夫だということを覚えておいてください。",
      "zh-CN": "你已经做得很好了！只要记住有时轻松地说\"对不起，我的错\"也是可以的。",
      "zh-TW": "你已經做得很好了！只要記住有時輕鬆地說\"對不起，我的錯\"也是可以的。",
      vi: "Bạn đã làm tốt rồi! Chỉ cần nhớ rằng đôi khi nói nhẹ nhàng \"Xin lỗi, lỗi của tôi\" cũng được.",
      id: "Anda sudah melakukannya dengan baik! Ingat saja bahwa terkadang mengatakan ringan \"Maaf, kesalahan saya\" juga tidak apa-apa."
    },
    emoji: "💝"
  },
  {
    type: "Type6",
    title: {
      ko: "시간 필요형",
      en: "Time-Needing Type",
      ja: "時間必要型",
      "zh-CN": "需要时间型",
      "zh-TW": "需要時間型",
      vi: "Cần thời gian",
      id: "Butuh Waktu"
    },
    description: {
      ko: "\"생각할 시간이 필요해요... 신중한 사과러\"\n\n즉각적인 사과보다 시간을 두고 생각한 후 사과합니다. 감정 정리가 필요하고, 신중하게 접근합니다. 충동적으로 사과했다가 더 싸우는 것을 원하지 않습니다. 며칠 후 진지하게 대화를 청합니다. 신중하지만, 상대방은 답답하거나 화가 더 날 수 있습니다.",
      en: "\"I need time to think... Careful apologizer\"\n\nRather than immediate apologies, you take time to think before apologizing. You need emotional organization and approach carefully. You don't want to apologize impulsively and then fight more. You request serious conversation after a few days. While careful, the other person may feel frustrated or get more angry.",
      ja: "\"考える時間が必要です...慎重な謝罪者\"\n\n即座の謝罪より時間を置いて考えた後謝罪します。感情整理が必要で、慎重にアプローチします。衝動的に謝罪してさらに喧嘩することを望みません。数日後真剣に話し合いを求めます。慎重ですが、相手はイライラしたりさらに怒ったりするかもしれません。",
      "zh-CN": "\"我需要时间思考...谨慎的道歉者\"\n\n比起立即道歉，你花时间思考后再道歉。你需要情感整理，谨慎地接近。你不想冲动地道歉然后再次争吵。几天后你要求认真对话。虽然谨慎，但对方可能感到沮丧或更加愤怒。",
      "zh-TW": "\"我需要時間思考...謹慎的道歉者\"\n\n比起立即道歉，你花時間思考後再道歉。你需要情感整理，謹慎地接近。你不想衝動地道歉然後再次爭吵。幾天後你要求認真對話。雖然謹慎，但對方可能感到沮喪或更加憤怒。",
      vi: "\"Tôi cần thời gian để suy nghĩ... Người xin lỗi cẩn thận\"\n\nThay vì xin lỗi ngay lập tức, bạn dành thời gian suy nghĩ trước khi xin lỗi. Bạn cần tổ chức cảm xúc và tiếp cận một cách cẩn thận. Bạn không muốn xin lỗi một cách bốc đồng rồi lại cãi nhau thêm. Bạn yêu cầu cuộc trò chuyện nghiêm túc sau vài ngày. Mặc dù cẩn thận, người khác có thể cảm thấy bực bội hoặc tức giận hơn.",
      id: "\"Saya perlu waktu untuk berpikir... Peminta maaf yang hati-hati\"\n\nAlih-alih meminta maaf langsung, Anda meluangkan waktu untuk berpikir sebelum meminta maaf. Anda perlu mengatur emosi dan mendekati dengan hati-hati. Anda tidak ingin meminta maaf secara impulsif lalu bertengkar lagi. Anda meminta percakapan serius setelah beberapa hari. Meskipun hati-hati, orang lain mungkin merasa frustrasi atau lebih marah."
    },
    characteristics: {
      ko: "신중함, 사려 깊음, 감정 조절, 계획적, 느림",
      en: "Caution, Thoughtfulness, Emotional control, Planning, Slow",
      ja: "慎重さ、思慮深さ、感情制御、計画的、遅い",
      "zh-CN": "谨慎，深思熟虑，情感控制，计划性，缓慢",
      "zh-TW": "謹慎，深思熟慮，情感控制，計劃性，緩慢",
      vi: "Thận trọng, Suy nghĩ sâu sắc, Kiểm soát cảm xúc, Có kế hoạch, Chậm",
      id: "Hati-hati, Bijaksana, Kontrol emosi, Terencana, Lambat"
    },
    pros: {
      ko: "진심 담김, 재발 방지, 깊은 성찰, 성숙함",
      en: "Sincere, Prevents recurrence, Deep reflection, Maturity",
      ja: "真心込め、再発防止、深い省察、成熟",
      "zh-CN": "真诚，防止复发，深度反思，成熟",
      "zh-TW": "真誠，防止復發，深度反思，成熟",
      vi: "Chân thành, Ngăn ngừa tái phát, Suy ngẫm sâu sắc, Trưởng thành",
      id: "Tulus, Mencegah kekambuhan, Refleksi mendalam, Kedewasaan"
    },
    cons: {
      ko: "시간 오래 걸림, 답답함, 오해 깊어짐, 관계 악화 가능",
      en: "Takes a long time, Frustration, Deepening misunderstandings, Possible relationship deterioration",
      ja: "時間がかかる、イライラ、誤解深まる、関係悪化の可能性",
      "zh-CN": "需要很长时间，沮丧，误解加深，关系可能恶化",
      "zh-TW": "需要很長時間，沮喪，誤解加深，關係可能惡化",
      vi: "Mất nhiều thời gian, Bực bội, Hiểu lầm sâu sắc, Mối quan hệ có thể xấu đi",
      id: "Memakan waktu lama, Frustrasi, Kesalahpahaman mendalam, Hubungan bisa memburuk"
    },
    advice: {
      ko: "신중함도 좋지만 너무 늦으면 관계가 틀어집니다. \"시간 좀 줘, 정리하고 얘기하자\"라고 먼저 말하세요.",
      en: "Caution is good, but if you're too late, the relationship will break. Say \"Give me some time, let's talk after I organize my thoughts\" first.",
      ja: "慎重さも良いですが、遅すぎると関係が壊れます。「時間をください、整理して話しましょう」とまず言ってください。",
      "zh-CN": "谨慎是好的，但如果太晚，关系会破裂。先说\"给我一些时间，让我整理一下再谈\"。",
      "zh-TW": "謹慎是好的，但如果太晚，關係會破裂。先說\"給我一些時間，讓我整理一下再談\"。",
      vi: "Thận trọng cũng tốt, nhưng nếu quá muộn, mối quan hệ sẽ tan vỡ. Hãy nói \"Cho tôi một chút thời gian, hãy nói chuyện sau khi tôi sắp xếp suy nghĩ\" trước.",
      id: "Hati-hati itu baik, tapi jika terlalu terlambat, hubungan akan rusak. Katakan \"Beri saya waktu sebentar, mari bicara setelah saya mengatur pikiran\" dulu."
    },
    improvement: {
      ko: "\"지금 당장은 감정 정리가 안 돼. 내일 진지하게 얘기하자\"라고 의사를 표현하세요.",
      en: "Express your intention by saying \"I can't organize my emotions right now. Let's talk seriously tomorrow.\"",
      ja: "\"今すぐは感情整理ができない。明日真剣に話そう\"と意思を表現してください。",
      "zh-CN": "通过说\"现在无法整理情感。明天认真谈谈\"来表达你的意图。",
      "zh-TW": "通過說\"現在無法整理情感。明天認真談談\"來表達你的意圖。",
      vi: "Hãy thể hiện ý định bằng cách nói \"Bây giờ tôi không thể sắp xếp cảm xúc. Ngày mai hãy nói chuyện nghiêm túc.\"",
      id: "Ekspresikan niat Anda dengan mengatakan \"Sekarang saya tidak bisa mengatur emosi. Mari bicara serius besok.\""
    },
    emoji: "⏰"
  }
];

// 점수 계산 함수
export function calculateApologyResult(answers: number[]): ApologyResult {
  const scores: Record<string, number> = {
    "Type1": 0, "Type2": 0, "Type3": 0, 
    "Type4": 0, "Type5": 0, "Type6": 0
  };

  // 각 질문의 답변에 따라 점수 계산
  answers.forEach((answerIndex, questionIndex) => {
    const question = apologyQuestions[questionIndex];
    if (!question || !question.options || !question.options[answerIndex]) return;

    const selectedOption = question.options[answerIndex] as any;
    if (selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([type, score]) => {
        scores[type] += score as number;
      });
    }
  });

  // 최고 점수 타입 찾기
  let maxScore = 0;
  let resultType = "Type1";
  
  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 결과 반환
  const result = apologyResults.find(r => r.type === resultType);
  return result || apologyResults[0];
}
