export interface LoveObstacleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface LoveObstacleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  symptoms: Record<string, string>;
  patterns: Record<string, string>;
  causes: Record<string, string>;
  solutions: Record<string, string>;
  advice: Record<string, string>;
}

export const loveObstacleQuestions: LoveObstacleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "마음에 드는 사람이 생겼을 때 당신의 첫 생각은?",
      en: "When you meet someone you like, what's your first thought?",
      ja: "気になる人ができた時、あなたの最初の考えは？",
      'zh-CN': "当你遇到喜欢的人时，你的第一个想法是什么？",
      'zh-TW': "當你遇到喜歡的人時，你的第一個想法是什麼？",
      id: "Ketika Anda bertemu seseorang yang Anda sukai, apa pikiran pertama Anda?",
      vi: "Khi bạn gặp người mình thích, suy nghĩ đầu tiên của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "\"내가 과연 그 사람한테 어울릴까?\"",
          en: "\"Am I really good enough for them?\"",
          ja: "「私って本当にその人にふさわしいのかな？」",
          'zh-CN': "\"我真的配得上那个人吗？\"",
          'zh-TW': "「我真的配得上那個人嗎？」",
          id: "\"Apakah saya benar-benar cocok dengan mereka?\"",
          vi: "\"Tôi có thực sự xứng đáng với họ không?\""
        },
        scores: { Type1: 4, Type3: 1 }
      },
      {
        text: {
          ko: "\"또 상처받으면 어쩌지...\"",
          en: "\"What if I get hurt again...\"",
          ja: "「また傷ついたらどうしよう...」",
          'zh-CN': "\"如果再受伤怎么办...\"",
          'zh-TW': "「如果再受傷怎麼辦...」",
          id: "\"Bagaimana jika saya terluka lagi...\"",
          vi: "\"Nếu tôi bị tổn thương lần nữa thì sao...\""
        },
        scores: { Type2: 4, Type5: 1 }
      },
      {
        text: {
          ko: "\"완벽하게 준비해서 다가가야지\"",
          en: "\"I need to prepare perfectly before approaching\"",
          ja: "「完璧に準備してから近づこう」",
          'zh-CN': "\"我需要完美准备后再接近\"",
          'zh-TW': "「我需要完美準備後再接近」",
          id: "\"Saya perlu mempersiapkan diri dengan sempurna sebelum mendekati\"",
          vi: "\"Tôi cần chuẩn bị hoàn hảo trước khi tiếp cận\""
        },
        scores: { Type3: 6, Type1: 1 }
      },
      {
        text: {
          ko: "\"현실적으로 잘 될까? 조건이...\"",
          en: "\"Will it work realistically? What about conditions...\"",
          ja: "「現実的にうまくいくかな？条件は...」",
          'zh-CN': "\"现实地讲会顺利吗？条件...\"",
          'zh-TW': "「現實地講會順利嗎？條件...」",
          id: "\"Akankah berhasil secara realistis? Bagaimana dengan kondisi...\"",
          vi: "\"Liệu có thực tế không? Còn điều kiện...\""
        },
        scores: { Type4: 6, Type6: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "데이트 중 상대방이 실수를 했을 때?",
      en: "When your date makes a mistake?",
      ja: "デート中に相手がミスをした時は？",
      'zh-CN': "约会中对方犯错时？",
      'zh-TW': "約會中對方犯錯時？",
      id: "Ketika kencan Anda melakukan kesalahan?",
      vi: "Khi người hẹn hò của bạn mắc lỗi?"
    },
    options: [
      {
        text: {
          ko: "\"이 정도면 괜찮아\" 너그럽게 넘긴다",
          en: "\"This is fine\" and let it go generously",
          ja: "「この程度なら大丈夫」と寛大に受け流す",
          'zh-CN': "\"这种程度还好\" 宽容地放过",
          'zh-TW': "「這種程度還好」寬容地放過",
          id: "\"Tingkat ini tidak apa-apa\" dan biarkan dengan murah hati",
          vi: "\"Mức này ổn\" và bỏ qua một cách rộng lượng"
        },
        scores: { Type5: 8, Type6: 1 }
      },
      {
        text: {
          ko: "\"이런 건 좀...\" 마음에 걸린다",
          en: "\"This is a bit...\" it bothers me",
          ja: "「こういうのはちょっと...」気になる",
          'zh-CN': "\"这样有点...\" 心里在意",
          'zh-TW': "「這樣有點...」心裡在意",
          id: "\"Yang seperti ini agak...\" mengganggu saya",
          vi: "\"Điều này hơi...\" làm tôi khó chịu"
        },
        scores: { Type3: 6, Type4: 1 }
      },
      {
        text: {
          ko: "\"괜찮아?\" 상대방 감정을 먼저 살핀다",
          en: "\"Are you okay?\" I check their feelings first",
          ja: "「大丈夫？」相手の気持ちをまず確認する",
          'zh-CN': "\"你还好吗？\" 先关心对方的感受",
          'zh-TW': "「你還好嗎？」先關心對方的感受",
          id: "\"Apakah kamu baik-baik saja?\" Saya periksa perasaan mereka dulu",
          vi: "\"Bạn có ổn không?\" Tôi kiểm tra cảm xúc của họ trước"
        },
        scores: { Type1: 4, Type2: 1 }
      },
      {
        text: {
          ko: "\"다음엔 이렇게 하면 어때?\" 조언한다",
          en: "\"How about doing it this way next time?\" I give advice",
          ja: "「次はこうやってみたらどう？」アドバイスする",
          'zh-CN': "\"下次这样做怎么样？\" 给出建议",
          'zh-TW': "「下次這樣做怎麼樣？」給出建議",
          id: "\"Bagaimana jika melakukan seperti ini lain kali?\" Saya memberi saran",
          vi: "\"Lần sau làm như thế này thì sao?\" Tôi đưa ra lời khuyên"
        },
        scores: { Type4: 6, Type6: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "연애가 잘 안 풀릴 때 당신의 생각은?",
      en: "When love doesn't work out, what do you think?",
      ja: "恋愛がうまくいかない時、あなたの考えは？",
      'zh-CN': "当恋爱不顺利时，你的想法是什么？",
      'zh-TW': "當戀愛不順利時，你的想法是什麼？",
      id: "Ketika cinta tidak berjalan dengan baik, apa yang Anda pikirkan?",
      vi: "Khi tình yêu không thành công, bạn nghĩ gì?"
    },
    options: [
      {
        text: {
          ko: "\"역시 나는 안 되는 건가...\"",
          en: "\"I guess I'm just not good enough...\"",
          ja: "「やっぱり私はダメなのか...」",
          'zh-CN': "\"果然我不行...\"",
          'zh-TW': "「果然我不行...」",
          id: "\"Ternyata saya memang tidak bisa...\"",
          vi: "\"Có lẽ tôi không được...\""
        },
        scores: { Type1: 4, Type5: 1 }
      },
      {
        text: {
          ko: "\"내가 뭘 잘못한 거지?\" 자책한다",
          en: "\"What did I do wrong?\" I blame myself",
          ja: "「私が何を間違えたの？」自分を責める",
          'zh-CN': "\"我做错了什么？\" 自责",
          'zh-TW': "「我做錯了什麼？」自責",
          id: "\"Apa yang salah saya lakukan?\" Menyalahkan diri sendiri",
          vi: "\"Tôi đã làm gì sai?\" Tự trách mình"
        },
        scores: { Type2: 4, Type1: 1 }
      },
      {
        text: {
          ko: "\"타이밍이 안 맞았나봐\" 담담하게 받아들인다",
          en: "\"The timing wasn't right\" I accept it calmly",
          ja: "「タイミングが合わなかったのかな」冷静に受け入れる",
          'zh-CN': "\"时机不对\" 冷静接受",
          'zh-TW': "「時機不對」冷靜接受",
          id: "\"Waktunya tidak tepat\" Menerima dengan tenang",
          vi: "\"Thời điểm không đúng\" Chấp nhận một cách bình tĩnh"
        },
        scores: { Type5: 8, Type6: 2 }
      },
      {
        text: {
          ko: "\"조건이 안 맞았어\" 합리화한다",
          en: "\"The conditions didn't match\" I rationalize",
          ja: "「条件が合わなかった」合理化する",
          'zh-CN': "\"条件不匹配\" 合理化",
          'zh-TW': "「條件不匹配」合理化",
          id: "\"Kondisinya tidak cocok\" Merasionalisasi",
          vi: "\"Điều kiện không phù hợp\" Hợp lý hóa"
        },
        scores: { Type4: 6, Type3: 1 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "상대방에게 기대하는 것은?",
      en: "What do you expect from your partner?",
      ja: "相手に期待することは？",
      'zh-CN': "你对对方有什么期待？",
      'zh-TW': "你對對方有什麼期待？",
      id: "Apa yang Anda harapkan dari pasangan?",
      vi: "Bạn mong đợi gì từ đối phương?"
    },
    options: [
      {
        text: {
          ko: "나의 모든 것을 이해해주기",
          en: "Understanding everything about me",
          ja: "私のすべてを理解してくれること",
          'zh-CN': "理解我的一切",
          'zh-TW': "理解我的一切",
          id: "Memahami segalanya tentang saya",
          vi: "Hiểu mọi thứ về tôi"
        },
        scores: { Type1: 4, Type2: 1 }
      },
      {
        text: {
          ko: "항상 나를 우선순위에 두기",
          en: "Always putting me first",
          ja: "いつも私を最優先にすること",
          'zh-CN': "总是把我放在第一位",
          'zh-TW': "總是把我看在第一位",
          id: "Selalu mengutamakan saya",
          vi: "Luôn ưu tiên tôi"
        },
        scores: { Type2: 4, Type5: 1 }
      },
      {
        text: {
          ko: "드라마 같은 완벽한 연애",
          en: "Perfect love like in dramas",
          ja: "ドラマのような完璧な恋愛",
          'zh-CN': "像电视剧一样的完美恋爱",
          'zh-TW': "像電視劇一樣的完美戀愛",
          id: "Cinta sempurna seperti di drama",
          vi: "Tình yêu hoàn hảo như trong phim"
        },
        scores: { Type4: 6, Type3: 3 }
      },
      {
        text: {
          ko: "특별한 기대 없이 자연스럽게",
          en: "Naturally without special expectations",
          ja: "特別な期待なしに自然に",
          'zh-CN': "没有特别期待，自然相处",
          'zh-TW': "沒有特別期待，自然相處",
          id: "Secara alami tanpa ekspektasi khusus",
          vi: "Tự nhiên không có kỳ vọng đặc biệt"
        },
        scores: { Type5: 8, Type6: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "고백을 받았을 때 주저하는 이유는?",
      en: "When you receive a confession, why do you hesitate?",
      ja: "告白された時、ためらう理由は？",
      'zh-CN': "收到告白时犹豫的原因是什么？",
      'zh-TW': "收到告白時猶豫的原因是什麼？",
      id: "Ketika menerima pengakuan, mengapa Anda ragu-ragu?",
      vi: "Khi nhận được lời tỏ tình, tại sao bạn do dự?"
    },
    options: [
      {
        text: {
          ko: "\"나를 진짜 좋아하는 게 맞나?\" 의심",
          en: "\"Do they really like me?\" I doubt",
          ja: "「本当に私のことが好きなのかな？」疑う",
          'zh-CN': "\"他们真的喜欢我吗？\" 怀疑",
          'zh-TW': "「他們真的喜歡我嗎？」懷疑",
          id: "\"Apakah mereka benar-benar menyukai saya?\" Meragukan",
          vi: "\"Họ có thực sự thích tôi không?\" Nghi ngờ"
        },
        scores: { Type1: 4, Type2: 1 }
      },
      {
        text: {
          ko: "\"또 실패하면 어쩌지\" 두려움",
          en: "\"What if I fail again\" fear",
          ja: "「また失敗したらどうしよう」恐れ",
          'zh-CN': "\"如果再失败怎么办\" 恐惧",
          'zh-TW': "「如果再失敗怎麼辦」恐懼",
          id: "\"Bagaimana jika saya gagal lagi\" Takut",
          vi: "\"Nếu tôi thất bại lần nữa thì sao\" Sợ hãi"
        },
        scores: { Type2: 4, Type1: 1 }
      },
      {
        text: {
          ko: "\"조금 더 완벽하게 준비하고 싶어\"",
          en: "\"I want to prepare more perfectly\"",
          ja: "「もう少し完璧に準備したい」",
          'zh-CN': "\"我想准备得更完美\"",
          'zh-TW': "「我想準備得更完美」",
          id: "\"Saya ingin mempersiapkan diri lebih sempurna\"",
          vi: "\"Tôi muốn chuẩn bị hoàn hảo hơn\""
        },
        scores: { Type3: 6, Type4: 2 }
      },
      {
        text: {
          ko: "\"지금은 시간이 없어\" 다른 우선순위",
          en: "\"I don't have time now\" other priorities",
          ja: "「今は時間がない」他の優先順位",
          'zh-CN': "\"现在没时间\" 其他优先事项",
          'zh-TW': "「現在沒時間」其他優先事項",
          id: "\"Sekarang tidak ada waktu\" prioritas lain",
          vi: "\"Bây giờ không có thời gian\" ưu tiên khác"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "연애 초반 당신의 모습은?",
      en: "How are you in the early stages of a relationship?",
      ja: "恋愛初期のあなたの姿は？",
      'zh-CN': "恋爱初期的你是什么样子？",
      'zh-TW': "戀愛初期的你是什麼樣子？",
      id: "Bagaimana Anda di tahap awal hubungan?",
      vi: "Bạn như thế nào trong giai đoạn đầu của mối quan hệ?"
    },
    options: [
      {
        text: {
          ko: "상대방 눈치를 많이 본다",
          en: "I watch their reactions carefully",
          ja: "相手の顔色をよく見る",
          'zh-CN': "很在意对方的反应",
          'zh-TW': "很在意對方的反應",
          id: "Saya memperhatikan reaksi mereka",
          vi: "Tôi quan sát phản ứng của họ cẩn thận"
        },
        scores: { Type1: 4, Type5: 1 }
      },
      {
        text: {
          ko: "과거 연애와 비교하게 된다",
          en: "I compare with past relationships",
          ja: "過去の恋愛と比較してしまう",
          'zh-CN': "会与过去的恋爱比较",
          'zh-TW': "會與過去的戀愛比較",
          id: "Saya membandingkan dengan hubungan masa lalu",
          vi: "Tôi so sánh với những mối quan hệ trước đây"
        },
        scores: { Type2: 4, Type4: 1 }
      },
      {
        text: {
          ko: "완벽한 모습만 보여주려 한다",
          en: "I try to show only my perfect side",
          ja: "完璧な姿だけを見せようとする",
          'zh-CN': "只想展现完美的一面",
          'zh-TW': "只想展現完美的一面",
          id: "Saya mencoba menunjukkan sisi sempurna saja",
          vi: "Tôi cố gắng chỉ thể hiện mặt hoàn hảo"
        },
        scores: { Type3: 6, Type1: 1 }
      },
      {
        text: {
          ko: "너무 현실적으로 계산한다",
          en: "I calculate too realistically",
          ja: "現実的に計算しすぎる",
          'zh-CN': "过于现实地计算",
          'zh-TW': "過於現實地計算",
          id: "Saya menghitung terlalu realistis",
          vi: "Tôi tính toán quá thực tế"
        },
        scores: { Type4: 6, Type6: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "싸웠을 때 당신의 패턴은?",
      en: "When you fight, what's your pattern?",
      ja: "喧嘩した時のあなたのパターンは？",
      'zh-CN': "吵架时你的模式是什么？",
      'zh-TW': "吵架時你的模式是什麼？",
      id: "Ketika bertengkar, apa pola Anda?",
      vi: "Khi cãi nhau, mô hình của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "\"내 잘못이야\" 무조건 사과",
          en: "\"It's my fault\" I apologize unconditionally",
          ja: "「私のせいだ」無条件に謝る",
          'zh-CN': "\"是我的错\" 无条件道歉",
          'zh-TW': "「是我的錯」無條件道歉",
          id: "\"Ini salah saya\" Minta maaf tanpa syarat",
          vi: "\"Lỗi của tôi\" Xin lỗi vô điều kiện"
        },
        scores: { Type1: 4, Type3: 1 }
      },
      {
        text: {
          ko: "\"또 이렇게 되네\" 패배감",
          en: "\"This happened again\" feeling defeated",
          ja: "「またこうなった」敗北感",
          'zh-CN': "\"又变成这样了\" 挫败感",
          'zh-TW': "「又變成這樣了」挫敗感",
          id: "\"Ini terjadi lagi\" Merasa kalah",
          vi: "\"Lại như thế này\" Cảm giác thất bại"
        },
        scores: { Type2: 4, Type4: 1 }
      },
      {
        text: {
          ko: "\"말을 잘 못 해서...\" 표현 서툼",
          en: "\"I can't express myself well...\" poor at expressing",
          ja: "「うまく話せなくて...」表現が下手",
          'zh-CN': "\"我不太会表达...\" 表达笨拙",
          'zh-TW': "「我不太會表達...」表達笨拙",
          id: "\"Saya tidak bisa mengungkapkan dengan baik...\" Buruk dalam mengekspresikan",
          vi: "\"Tôi không biết diễn đạt tốt...\" Kém trong việc thể hiện"
        },
        scores: { Type5: 8, Type3: 1 }
      },
      {
        text: {
          ko: "\"이해가 안 돼\" 감정보다 논리",
          en: "\"I don't understand\" logic over emotion",
          ja: "「理解できない」感情より論理",
          'zh-CN': "\"无法理解\" 逻辑胜过情感",
          'zh-TW': "「無法理解」邏輯勝過情感",
          id: "\"Saya tidak mengerti\" Logika daripada emosi",
          vi: "\"Tôi không hiểu\" Logic hơn cảm xúc"
        },
        scores: { Type6: 8, Type4: 1 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "연애에서 가장 힘든 점은?",
      en: "What's the hardest part about love?",
      ja: "恋愛で最も辛い点は？",
      'zh-CN': "恋爱中最困难的是什么？",
      'zh-TW': "戀愛中最困難的是什麼？",
      id: "Apa bagian tersulit dalam cinta?",
      vi: "Điều khó khăn nhất trong tình yêu là gì?"
    },
    options: [
      {
        text: {
          ko: "거절당할까봐 두려움",
          en: "Fear of being rejected",
          ja: "拒否されることへの恐れ",
          'zh-CN': "害怕被拒绝",
          'zh-TW': "害怕被拒絕",
          id: "Takut ditolak",
          vi: "Sợ bị từ chối"
        },
        scores: { Type1: 4, Type3: 1 }
      },
      {
        text: {
          ko: "또 상처받을까봐 불안함",
          en: "Anxiety about getting hurt again",
          ja: "また傷つくことへの不安",
          'zh-CN': "担心再次受伤",
          'zh-TW': "擔心再次受傷",
          id: "Cemas akan terluka lagi",
          vi: "Lo lắng bị tổn thương lần nữa"
        },
        scores: { Type2: 4, Type4: 1 }
      },
      {
        text: {
          ko: "내 마음을 제대로 표현 못 함",
          en: "Can't express my feelings properly",
          ja: "自分の気持ちをうまく表現できない",
          'zh-CN': "无法正确表达我的感受",
          'zh-TW': "無法正確表達我的感受",
          id: "Tidak bisa mengekspresikan perasaan dengan baik",
          vi: "Không thể diễn đạt cảm xúc đúng cách"
        },
        scores: { Type5: 8, Type1: 1 }
      },
      {
        text: {
          ko: "연애할 시간과 에너지 부족",
          en: "Lack of time and energy for love",
          ja: "恋愛する時間とエネルギーが不足",
          'zh-CN': "缺乏恋爱的时间和精力",
          'zh-TW': "缺乏戀愛的時間和精力",
          id: "Kurang waktu dan energi untuk cinta",
          vi: "Thiếu thời gian và năng lượng cho tình yêu"
        },
        scores: { Type6: 8, Type4: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "상대방이 당신에게 섭섭함을 표현하면?",
      en: "When your partner expresses disappointment?",
      ja: "相手があなたに残念さを表現したら？",
      'zh-CN': "当对方对你表达失望时？",
      'zh-TW': "當對方對你表達失望時？",
      id: "Ketika pasangan mengungkapkan kekecewaan?",
      vi: "Khi đối phương thể hiện sự thất vọng với bạn?"
    },
    options: [
      {
        text: {
          ko: "\"미안해\" 과도하게 사과하고 불안해한다",
          en: "\"Sorry\" I apologize excessively and feel anxious",
          ja: "「ごめん」過度に謝って不安になる",
          'zh-CN': "\"对不起\" 过度道歉并感到不安",
          'zh-TW': "「對不起」過度道歉並感到不安",
          id: "\"Maaf\" Minta maaf berlebihan dan merasa cemas",
          vi: "\"Xin lỗi\" Xin lỗi quá mức và cảm thấy lo lắng"
        },
        scores: { Type1: 4, Type5: 1 }
      },
      {
        text: {
          ko: "\"또 내가 잘못했구나\" 자책한다",
          en: "\"I messed up again\" I blame myself",
          ja: "「また私が間違えた」自分を責める",
          'zh-CN': "\"我又搞错了\" 自责",
          'zh-TW': "「我又搞錯了」自責",
          id: "\"Saya salah lagi\" Menyalahkan diri sendiri",
          vi: "\"Tôi lại sai rồi\" Tự trách mình"
        },
        scores: { Type2: 4, Type3: 1 }
      },
      {
        text: {
          ko: "\"뭘 어떻게 말해야 할지...\" 당황한다",
          en: "\"What should I say...\" I'm confused",
          ja: "「何をどう言えばいいか...」困惑する",
          'zh-CN': "\"该说什么...\" 困惑",
          'zh-TW': "「該說什麼...」困惑",
          id: "\"Apa yang harus saya katakan...\" Bingung",
          vi: "\"Nên nói gì...\" Bối rối"
        },
        scores: { Type5: 8, Type6: 2 }
      },
      {
        text: {
          ko: "\"왜 그런 건지 이해가 안 돼\" 의아해한다",
          en: "\"I don't understand why\" I'm puzzled",
          ja: "「なぜそうなるのか理解できない」不思議に思う",
          'zh-CN': "\"不明白为什么会这样\" 疑惑",
          'zh-TW': "「不明白為什麼會這樣」疑惑",
          id: "\"Saya tidak mengerti mengapa\" Bingung",
          vi: "\"Không hiểu tại sao lại như vậy\" Thắc mắc"
        },
        scores: { Type4: 6, Type3: 1 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "연애 관계에서 자주 드는 생각은?",
      en: "What do you often think about in a relationship?",
      ja: "恋愛関係でよく思うことは？",
      'zh-CN': "在恋爱关系中你经常想什么？",
      'zh-TW': "在戀愛關係中你經常想什麼？",
      id: "Apa yang sering Anda pikirkan dalam hubungan?",
      vi: "Bạn thường nghĩ gì trong mối quan hệ?"
    },
    options: [
      {
        text: {
          ko: "\"내가 부족한 건 아닐까\"",
          en: "\"Maybe I'm not good enough\"",
          ja: "「私が足りないんじゃないか」",
          'zh-CN': "\"也许我不够好\"",
          'zh-TW': "「也許我不夠好」",
          id: "\"Mungkin saya tidak cukup baik\"",
          vi: "\"Có lẽ tôi không đủ tốt\""
        },
        scores: { Type1: 4, Type5: 1 }
      },
      {
        text: {
          ko: "\"언젠간 또 끝나겠지\"",
          en: "\"It will end someday anyway\"",
          ja: "「いつかまた終わるだろう」",
          'zh-CN': "\"总有一天又会结束\"",
          'zh-TW': "「總有一天又會結束」",
          id: "\"Akan berakhir suatu hari nanti\"",
          vi: "\"Rồi cũng sẽ kết thúc thôi\""
        },
        scores: { Type2: 4, Type6: 1 }
      },
      {
        text: {
          ko: "\"더 완벽했으면 좋겠는데\"",
          en: "\"I wish it were more perfect\"",
          ja: "「もっと完璧だったらいいのに」",
          'zh-CN': "\"如果能更完美就好了\"",
          'zh-TW': "「如果能更完美就好了」",
          id: "\"Seandainya lebih sempurna\"",
          vi: "\"Ước gì hoàn hảo hơn\""
        },
        scores: { Type3: 6, Type4: 3 }
      },
      {
        text: {
          ko: "\"현실적으로 맞지 않는 것 같아\"",
          en: "\"It doesn't seem realistic\"",
          ja: "「現実的に合わないようだ」",
          'zh-CN': "\"看起来不太现实\"",
          'zh-TW': "「看起來不太現實」",
          id: "\"Sepertinya tidak realistis\"",
          vi: "\"Có vẻ không thực tế\""
        },
        scores: { Type4: 6, Type6: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "이별 후 당신의 반응은?",
      en: "How do you react after a breakup?",
      ja: "別れの後のあなたの反応は？",
      'zh-CN': "分手后你的反应是什么？",
      'zh-TW': "分手後你的反應是什麼？",
      id: "Bagaimana reaksi Anda setelah putus?",
      vi: "Phản ứng của bạn sau khi chia tay là gì?"
    },
    options: [
      {
        text: {
          ko: "\"역시 나는 사랑받을 자격이 없나봐\"",
          en: "\"I guess I don't deserve to be loved\"",
          ja: "「やっぱり私は愛される資格がないんだ」",
          'zh-CN': "\"果然我不值得被爱\"",
          'zh-TW': "「果然我不值得被愛」",
          id: "\"Ternyata saya tidak layak dicintai\"",
          vi: "\"Có lẽ tôi không xứng đáng được yêu\""
        },
        scores: { Type1: 4, Type5: 1 }
      },
      {
        text: {
          ko: "\"예상했어, 또 그렇게 되더라\"",
          en: "\"I expected it, it happened again\"",
          ja: "「予想通り、またそうなった」",
          'zh-CN': "\"预料到了，又变成这样\"",
          'zh-TW': "「預料到了，又變成這樣」",
          id: "\"Sudah diduga, terjadi lagi\"",
          vi: "\"Đã dự đoán trước, lại như thế\""
        },
        scores: { Type2: 4, Type4: 1 }
      },
      {
        text: {
          ko: "\"내가 더 잘했으면...\" 후회와 자책",
          en: "\"If I had done better...\" regret and self-blame",
          ja: "「もっとうまくやっていれば...」後悔と自責",
          'zh-CN': "\"如果我做得更好...\" 后悔和自责",
          'zh-TW': "「如果我做得更好...」後悔和自責",
          id: "\"Seandainya saya lebih baik...\" Penyesalan dan menyalahkan diri",
          vi: "\"Nếu tôi làm tốt hơn...\" Hối hận và tự trách"
        },
        scores: { Type3: 6, Type5: 3 }
      },
      {
        text: {
          ko: "\"처음부터 안 맞았어\" 분석적으로 정리",
          en: "\"We weren't right from the start\" analyze rationally",
          ja: "「最初から合わなかった」分析的に整理",
          'zh-CN': "\"从一开始就不合适\" 理性分析",
          'zh-TW': "「從一開始就不合適」理性分析",
          id: "\"Dari awal memang tidak cocok\" Menganalisis secara rasional",
          vi: "\"Từ đầu đã không phù hợp\" Phân tích một cách hợp lý"
        },
        scores: { Type6: 8, Type4: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "연애를 시작하기 전 가장 걱정되는 것은?",
      en: "What worries you most before starting a relationship?",
      ja: "恋愛を始める前に最も心配なことは？",
      'zh-CN': "开始恋爱前你最担心的是什么？",
      'zh-TW': "開始戀愛前你最擔心的是什麼？",
      id: "Apa yang paling Anda khawatirkan sebelum memulai hubungan?",
      vi: "Điều gì khiến bạn lo lắng nhất trước khi bắt đầu mối quan hệ?"
    },
    options: [
      {
        text: {
          ko: "내가 상대방 기대에 못 미칠까봐",
          en: "Worried I won't meet their expectations",
          ja: "相手の期待に応えられないのではないか",
          'zh-CN': "担心我达不到对方的期望",
          'zh-TW': "擔心我達不到對方的期望",
          id: "Khawatir tidak memenuhi harapan mereka",
          vi: "Lo lắng không đáp ứng được kỳ vọng của họ"
        },
        scores: { Type1: 4, Type3: 1 }
      },
      {
        text: {
          ko: "또 상처받고 힘들까봐",
          en: "Worried about getting hurt and struggling again",
          ja: "また傷ついて辛くなるのではないか",
          'zh-CN': "担心再次受伤和痛苦",
          'zh-TW': "擔心再次受傷和痛苦",
          id: "Khawatir terluka dan kesulitan lagi",
          vi: "Lo lắng bị tổn thương và khó khăn lần nữa"
        },
        scores: { Type2: 4, Type5: 1 }
      },
      {
        text: {
          ko: "완벽하지 못한 내 모습 보일까봐",
          en: "Worried about showing my imperfect side",
          ja: "完璧でない自分の姿を見せてしまうのではないか",
          'zh-CN': "担心展现我不完美的一面",
          'zh-TW': "擔心展現我不完美的一面",
          id: "Khawatir menunjukkan sisi tidak sempurna",
          vi: "Lo lắng thể hiện mặt không hoàn hảo của mình"
        },
        scores: { Type3: 6, Type4: 2 }
      },
      {
        text: {
          ko: "현실적으로 잘 안 될 것 같아서",
          en: "Because it doesn't seem realistic",
          ja: "現実的にうまくいかないような気がするから",
          'zh-CN': "因为看起来不太现实",
          'zh-TW': "因為看起來不太現實",
          id: "Karena sepertinya tidak realistis",
          vi: "Vì có vẻ không thực tế"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  }
];

export const loveObstacleResults: LoveObstacleResult[] = [
  {
    type: "Type1",
    emoji: "😔",
    title: {
      ko: "자존감 부족형",
      en: "Low Self-Esteem Type",
      ja: "自尊心不足型",
      'zh-CN': "自尊心不足型",
      'zh-TW': "自尊心不足型",
      id: "Tipe Harga Diri Rendah",
      vi: "Loại Tự Ti"
    },
    description: {
      ko: "\"나는 부족해... 자존감이 연애를 막고 있어요\"\n당신의 가장 큰 장애물은 낮은 자존감입니다. \"내가 과연 사랑받을 자격이 있을까?\", \"나는 부족한데...\"라는 생각이 먼저 듭니다. 상대방이 좋아해줘도 믿지 못하고, 작은 실수에도 \"역시 나는 안 돼\"라고 생각합니다. 거절이 두렵고 눈치를 많이 보며, 관계에서 항상 불안합니다.",
      en: "\"I'm not good enough... low self-esteem is blocking my love life\"\nYour biggest obstacle is low self-esteem. Thoughts like \"Do I really deserve to be loved?\", \"I'm not good enough...\" come first. Even when someone likes you, you can't believe it, and with small mistakes you think \"I'm no good after all.\" You're afraid of rejection, watch others' reactions too much, and always feel anxious in relationships.",
      ja: "「私は足りない...自尊心が恋愛を妨げている」\nあなたの最大の障害は低い自尊心です。「私は本当に愛される資格があるのか？」「私は足りない...」という考えが最初に浮かびます。相手が好きだと言っても信じられず、小さな失敗でも「やっぱり私はダメだ」と思ってしまいます。拒絶を恐れ、相手の顔色を伺い、関係では常に不安です。",
      'zh-CN': "\"我不够好...自尊心在阻碍我的恋爱\"\n你最大的障碍是低自尊心。\"我真的值得被爱吗？\"、\"我不够好...\"这样的想法首先出现。即使对方喜欢你，你也不相信，小小的错误也会让你想\"我果然不行\"。你害怕被拒绝，过于在意别人的反应，在关系中总是感到不安。",
      'zh-TW': "「我不夠好...自尊心在阻礙我的戀愛」\n你最大的障礙是低自尊心。「我真的值得被愛嗎？」、「我不夠好...」這樣的想法首先出現。即使對方喜歡你，你也不相信，小小的錯誤也會讓你想「我果然不行」。你害怕被拒絕，過於在意別人的反應，在關係中總是感到不安。",
      id: "\"Saya tidak cukup baik... harga diri rendah menghalangi kehidupan cinta saya\"\nHambatan terbesar Anda adalah harga diri yang rendah. Pikiran seperti \"Apakah saya benar-benar layak dicintai?\", \"Saya tidak cukup baik...\" muncul pertama. Bahkan ketika seseorang menyukai Anda, Anda tidak percaya, dan dengan kesalahan kecil Anda berpikir \"Saya memang tidak baik.\" Anda takut ditolak, terlalu memperhatikan reaksi orang lain, dan selalu merasa cemas dalam hubungan.",
      vi: "\"Tôi không đủ tốt... lòng tự trọng thấp đang cản trở tình yêu của tôi\"\nTrở ngại lớn nhất của bạn là lòng tự trọng thấp. Những suy nghĩ như \"Tôi có thực sự xứng đáng được yêu không?\", \"Tôi không đủ tốt...\" xuất hiện đầu tiên. Ngay cả khi ai đó thích bạn, bạn không thể tin được, và với những lỗi nhỏ bạn nghĩ \"Tôi thực sự không tốt.\" Bạn sợ bị từ chối, quá chú ý đến phản ứng của người khác, và luôn cảm thấy lo lắng trong các mối quan hệ."
    },
    symptoms: {
      ko: "과도한 눈치, 거절 두려움, 과도한 사과, 의존적 태도, 불안감",
      en: "Excessive attention to others' reactions, fear of rejection, excessive apologies, dependent attitude, anxiety",
      ja: "過度な顔色伺い、拒絶への恐れ、過度な謝罪、依存的な態度、不安感",
      'zh-CN': "过度在意他人反应、害怕被拒绝、过度道歉、依赖态度、焦虑",
      'zh-TW': "過度在意他人反應、害怕被拒絕、過度道歉、依賴態度、焦慮",
      id: "Perhatian berlebihan pada reaksi orang lain, takut ditolak, permintaan maaf berlebihan, sikap dependen, kecemasan",
      vi: "Chú ý quá mức đến phản ứng của người khác, sợ bị từ chối, xin lỗi quá mức, thái độ phụ thuộc, lo lắng"
    },
    patterns: {
      ko: "집착 or 회피, 짝사랑만 반복, 관계 오래 못 감",
      en: "Obsession or avoidance, only one-sided love, can't maintain relationships long",
      ja: "執着または回避、片思いだけの繰り返し、関係を長く続けられない",
      'zh-CN': "执着或回避、只有单恋、无法维持长久关系",
      'zh-TW': "執著或迴避、只有單戀、無法維持長久關係",
      id: "Obsesi atau menghindar, hanya cinta sepihak, tidak bisa mempertahankan hubungan lama",
      vi: "Ám ảnh hoặc tránh né, chỉ có tình yêu đơn phương, không thể duy trì mối quan hệ lâu dài"
    },
    causes: {
      ko: "어린 시절 경험, 반복된 거절, 비교 습관",
      en: "Childhood experiences, repeated rejections, comparison habits",
      ja: "幼少期の経験、繰り返される拒絶、比較の習慣",
      'zh-CN': "童年经历、重复被拒绝、比较习惯",
      'zh-TW': "童年經歷、重複被拒絕、比較習慣",
      id: "Pengalaman masa kecil, penolakan berulang, kebiasaan membandingkan",
      vi: "Trải nghiệm thời thơ ấu, bị từ chối lặp đi lặp lại, thói quen so sánh"
    },
    solutions: {
      ko: "자기 수용, 작은 성공 경험 쌓기, 상담 고려, 자기 돌봄",
      en: "Self-acceptance, building small success experiences, considering counseling, self-care",
      ja: "自己受容、小さな成功体験の積み重ね、カウンセリング検討、セルフケア",
      'zh-CN': "自我接纳、积累小成功经验、考虑咨询、自我照顾",
      'zh-TW': "自我接納、累積小成功經驗、考慮諮詢、自我照顧",
      id: "Penerimaan diri, membangun pengalaman sukses kecil, mempertimbangkan konseling, perawatan diri",
      vi: "Chấp nhận bản thân, xây dựng kinh nghiệm thành công nhỏ, cân nhắc tư vấn, tự chăm sóc"
    },
    advice: {
      ko: "당신은 충분히 사랑받을 자격이 있습니다. 자신을 먼저 사랑하는 연습이 필요해요. 작은 것부터 시작하세요. \"나는 괜찮은 사람이야\"라고 매일 말해보세요. 전문가 도움도 좋습니다.",
      en: "You are worthy of love. You need to practice loving yourself first. Start small. Say \"I am a good person\" every day. Professional help is also good.",
      ja: "あなたは十分に愛される価値があります。まず自分を愛する練習が必要です。小さなことから始めましょう。「私は良い人だ」と毎日言ってみてください。専門家の助けも良いです。",
      'zh-CN': "你值得被爱。你需要先练习爱自己。从小事开始。每天说\"我是个好人\"。专业帮助也很好。",
      'zh-TW': "你值得被愛。你需要先練習愛自己。從小事開始。每天說「我是個好人」。專業幫助也很好。",
      id: "Anda layak dicintai. Anda perlu berlatih mencintai diri sendiri terlebih dahulu. Mulai dari hal kecil. Katakan \"Saya adalah orang baik\" setiap hari. Bantuan profesional juga baik.",
      vi: "Bạn xứng đáng được yêu. Bạn cần thực hành yêu bản thân trước. Bắt đầu từ những điều nhỏ. Nói \"Tôi là người tốt\" mỗi ngày. Sự giúp đỡ chuyên nghiệp cũng tốt."
    }
  },
  {
    type: "Type2",
    emoji: "💔",
    title: {
      ko: "과거 트라우마형",
      en: "Past Trauma Type",
      ja: "過去トラウマ型",
      'zh-CN': "过去创伤型",
      'zh-TW': "過去創傷型",
      id: "Tipe Trauma Masa Lalu",
      vi: "Loại Chấn Thương Quá Khứ"
    },
    description: {
      ko: "\"또 상처받을까봐... 과거가 현재를 막고 있어요\"\n당신의 가장 큰 장애물은 과거의 상처입니다. 이전 연애나 상처 때문에 마음의 벽을 쌓았습니다. \"또 똑같이 되면 어쩌지\", \"어차피 끝날 거야\"라는 불안이 앞섭니다. 새로운 사람을 만나도 과거와 비교하고, 상처받기 전에 먼저 관계를 끊어버립니다. 사랑하고 싶지만 두렵습니다.",
      en: "\"What if I get hurt again... the past is blocking the present\"\nYour biggest obstacle is past wounds. You've built walls around your heart due to previous relationships or hurts. Anxiety like \"What if it happens again\", \"It will end anyway\" comes first. Even when meeting new people, you compare with the past and cut off relationships before getting hurt. You want to love but you're afraid.",
      ja: "「また傷つくのではないか...過去が現在を妨げている」\nあなたの最大の障害は過去の傷です。以前の恋愛や傷のために心の壁を築いてしまいました。「また同じようになったらどうしよう」「どうせ終わるだろう」という不安が先に立ちます。新しい人に会っても過去と比較し、傷つく前に先に関係を断ち切ってしまいます。愛したいけれど恐れています。",
      'zh-CN': "\"担心再次受伤...过去在阻碍现在\"\n你最大的障碍是过去的创伤。由于之前的恋爱或伤害，你筑起了心墙。\"如果再发生同样的事怎么办\"、\"反正会结束的\"这样的不安先出现。即使遇到新的人，你也会与过去比较，在受伤前先切断关系。你想爱但很害怕。",
      'zh-TW': "「擔心再次受傷...過去在阻礙現在」\n你最大的障礙是過去的創傷。由於之前的戀愛或傷害，你築起了心牆。「如果再發生同樣的事怎麼辦」、「反正會結束的」這樣的不安先出現。即使遇到新的人，你也會與過去比較，在受傷前先切斷關係。你想愛但很害怕。",
      id: "\"Bagaimana jika saya terluka lagi... masa lalu menghalangi masa kini\"\nHambatan terbesar Anda adalah luka masa lalu. Anda telah membangun tembok di sekitar hati karena hubungan atau luka sebelumnya. Kecemasan seperti \"Bagaimana jika terjadi lagi\", \"Bagaimanapun akan berakhir\" muncul pertama. Bahkan ketika bertemu orang baru, Anda membandingkan dengan masa lalu dan memutuskan hubungan sebelum terluka. Anda ingin mencintai tetapi takut.",
      vi: "\"Nếu tôi bị tổn thương lần nữa... quá khứ đang cản trở hiện tại\"\nTrở ngại lớn nhất của bạn là những vết thương quá khứ. Bạn đã xây dựng những bức tường xung quanh trái tim do những mối quan hệ hoặc tổn thương trước đó. Lo lắng như \"Nếu nó xảy ra lần nữa thì sao\", \"Dù sao cũng sẽ kết thúc\" xuất hiện đầu tiên. Ngay cả khi gặp người mới, bạn so sánh với quá khứ và cắt đứt mối quan hệ trước khi bị tổn thương. Bạn muốn yêu nhưng sợ hãi."
    },
    symptoms: {
      ko: "회피 패턴, 감정 차단, 과거 비교, 예상된 이별, 신뢰 어려움",
      en: "Avoidance patterns, emotional blocking, past comparison, expected breakups, difficulty trusting",
      ja: "回避パターン、感情ブロック、過去比較、予想される別れ、信頼の困難",
      'zh-CN': "回避模式、情感阻断、过去比较、预期分手、信任困难",
      'zh-TW': "迴避模式、情感阻斷、過去比較、預期分手、信任困難",
      id: "Pola menghindar, blokir emosional, perbandingan masa lalu, putus yang diharapkan, kesulitan mempercayai",
      vi: "Mô hình tránh né, chặn cảm xúc, so sánh quá khứ, chia tay dự kiến, khó tin tưởng"
    },
    patterns: {
      ko: "관계 초반 도망, 깊이 못 들어감, 반복된 단기 연애",
      en: "Running away early in relationships, can't go deep, repeated short-term relationships",
      ja: "関係初期の逃避、深く入れない、短期恋愛の繰り返し",
      'zh-CN': "关系初期逃避、无法深入、重复短期恋爱",
      'zh-TW': "關係初期逃避、無法深入、重複短期戀愛",
      id: "Lari di awal hubungan, tidak bisa masuk dalam, hubungan jangka pendek berulang",
      vi: "Chạy trốn trong giai đoạn đầu mối quan hệ, không thể đi sâu, các mối quan hệ ngắn hạn lặp lại"
    },
    causes: {
      ko: "과거 배신, 이별 트라우마, 가족 관계 문제",
      en: "Past betrayal, breakup trauma, family relationship issues",
      ja: "過去の裏切り、別れのトラウマ、家族関係の問題",
      'zh-CN': "过去背叛、分手创伤、家庭关系问题",
      'zh-TW': "過去背叛、分手創傷、家庭關係問題",
      id: "Pengkhianatan masa lalu, trauma putus, masalah hubungan keluarga",
      vi: "Sự phản bội quá khứ, chấn thương chia tay, vấn đề mối quan hệ gia đình"
    },
    solutions: {
      ko: "과거 치유, 현재 집중, 전문 상담, 천천히 신뢰 쌓기",
      en: "Healing the past, focusing on the present, professional counseling, building trust slowly",
      ja: "過去の癒し、現在に集中、専門カウンセリング、ゆっくり信頼構築",
      'zh-CN': "治愈过去、专注现在、专业咨询、慢慢建立信任",
      'zh-TW': "治癒過去、專注現在、專業諮詢、慢慢建立信任",
      id: "Menyembuhkan masa lalu, fokus pada masa kini, konseling profesional, membangun kepercayaan perlahan",
      vi: "Chữa lành quá khứ, tập trung vào hiện tại, tư vấn chuyên nghiệp, xây dựng niềm tin từ từ"
    },
    advice: {
      ko: "과거는 과거일 뿐, 모든 사람이 같지 않습니다. 새로운 사람에게 기회를 주세요. 천천히, 조금씩 마음을 열어보세요. 필요하다면 전문가의 도움을 받는 것도 좋습니다.",
      en: "The past is just the past, not everyone is the same. Give new people a chance. Slowly, little by little, open your heart. If needed, professional help is also good.",
      ja: "過去は過去に過ぎず、すべての人が同じではありません。新しい人にチャンスを与えてください。ゆっくりと、少しずつ心を開いてみてください。必要であれば、専門家の助けも良いです。",
      'zh-CN': "过去只是过去，不是每个人都一样。给新的人一个机会。慢慢地，一点一点地敞开心扉。如果需要，专业帮助也很好。",
      'zh-TW': "過去只是過去，不是每個人都一樣。給新的人一個機會。慢慢地，一點一點地敞開心扉。如果需要，專業幫助也很好。",
      id: "Masa lalu hanyalah masa lalu, tidak semua orang sama. Beri kesempatan pada orang baru. Perlahan, sedikit demi sedikit, buka hati Anda. Jika diperlukan, bantuan profesional juga baik.",
      vi: "Quá khứ chỉ là quá khứ, không phải ai cũng giống nhau. Hãy cho người mới một cơ hội. Từ từ, từng chút một, hãy mở lòng. Nếu cần, sự giúp đỡ chuyên nghiệp cũng tốt."
    }
  },
  {
    type: "Type3",
    emoji: "🎯",
    title: {
      ko: "완벽주의형",
      en: "Perfectionist Type",
      ja: "完璧主義型",
      'zh-CN': "完美主义型",
      'zh-TW': "完美主義型",
      id: "Tipe Perfeksionis",
      vi: "Loại Chủ nghĩa Hoàn hảo"
    },
    description: {
      ko: "\"완벽해야만... 완벽주의가 사랑을 막고 있어요\"\n당신의 가장 큰 장애물은 완벽주의입니다. 자신도, 상대방도, 관계도 모두 완벽하기를 원합니다. \"준비가 덜 됐어\", \"더 완벽하게\"라며 기회를 놓칩니다. 작은 결점도 용납하기 어렵고, 자신의 약점 보이는 것을 두려워합니다. 완벽한 타이밍을 기다리다 아무것도 시작하지 못합니다.",
      en: "\"It has to be perfect... perfectionism is blocking my love life\"\nYour biggest obstacle is perfectionism. You want yourself, your partner, and the relationship to all be perfect. You miss opportunities saying \"I'm not ready yet\", \"I need to be more perfect\". It's hard to accept small flaws and you fear showing your weaknesses. You wait for the perfect timing and end up starting nothing.",
      ja: "「完璧でなければ...完璧主義が恋愛を妨げている」\nあなたの最大の障害は完璧主義です。自分も、相手も、関係もすべて完璧であることを望みます。「準備が足りない」「もっと完璧に」と言って機会を逃します。小さな欠点も受け入れがたく、自分の弱さを見せることを恐れます。完璧なタイミングを待って何も始められません。",
      'zh-CN': "\"必须完美...完美主义在阻碍我的恋爱\"\n你最大的障碍是完美主义。你希望自己、对方、关系都完美。\"准备不足\"、\"需要更完美\"而错过机会。难以接受小缺点，害怕展现自己的弱点。等待完美时机却什么也做不了。",
      'zh-TW': "「必須完美...完美主義在阻礙我的戀愛」\n你最大的障礙是完美主義。你希望自己、對方、關係都完美。「準備不足」、「需要更完美」而錯過機會。難以接受小缺點，害怕展現自己的弱點。等待完美時機卻什麼也做不了。",
      id: "\"Harus sempurna... perfeksionisme menghalangi kehidupan cinta saya\"\nHambatan terbesar Anda adalah perfeksionisme. Anda menginginkan diri sendiri, pasangan, dan hubungan semuanya sempurna. Anda melewatkan kesempatan dengan mengatakan \"Belum siap\", \"Perlu lebih sempurna\". Sulit menerima kekurangan kecil dan takut menunjukkan kelemahan diri. Menunggu waktu yang sempurna dan akhirnya tidak memulai apa-apa.",
      vi: "\"Phải hoàn hảo... chủ nghĩa hoàn hảo đang cản trở tình yêu của tôi\"\nTrở ngại lớn nhất của bạn là chủ nghĩa hoàn hảo. Bạn muốn bản thân, đối phương và mối quan hệ đều hoàn hảo. Bạn bỏ lỡ cơ hội nói \"Chưa sẵn sàng\", \"Cần hoàn hảo hơn\". Khó chấp nhận những thiếu sót nhỏ và sợ thể hiện điểm yếu của mình. Chờ đợi thời điểm hoàn hảo và cuối cùng không bắt đầu gì cả."
    },
    symptoms: {
      ko: "높은 기준, 결점 불허, 과도한 준비, 타이밍 집착, 실수 두려움",
      en: "High standards, no flaws allowed, excessive preparation, timing obsession, fear of mistakes",
      ja: "高い基準、欠点不許可、過度な準備、タイミング執着、失敗への恐れ",
      'zh-CN': "高标准、不允许缺点、过度准备、时机执着、害怕错误",
      'zh-TW': "高標準、不允許缺點、過度準備、時機執著、害怕錯誤",
      id: "Standar tinggi, tidak mengizinkan kekurangan, persiapan berlebihan, obsesi waktu, takut kesalahan",
      vi: "Tiêu chuẩn cao, không cho phép thiếu sót, chuẩn bị quá mức, ám ảnh thời gian, sợ sai lầm"
    },
    patterns: {
      ko: "시작 못 함, 사소한 것으로 끝냄, 피곤한 관계",
      en: "Can't start, ending over trivial things, exhausting relationships",
      ja: "始められない、些細なことで終わる、疲れる関係",
      'zh-CN': "无法开始、因琐事结束、疲惫的关系",
      'zh-TW': "無法開始、因瑣事結束、疲憊的關係",
      id: "Tidak bisa memulai, berakhir karena hal sepele, hubungan yang melelahkan",
      vi: "Không thể bắt đầu, kết thúc vì những việc nhỏ nhặt, mối quan hệ mệt mỏi"
    },
    causes: {
      ko: "성공 집착, 실패 두려움, 인정 욕구",
      en: "Success obsession, fear of failure, need for recognition",
      ja: "成功への執着、失敗への恐れ、承認欲求",
      'zh-CN': "成功执着、害怕失败、需要认可",
      'zh-TW': "成功執著、害怕失敗、需要認可",
      id: "Obsesi sukses, takut kegagalan, kebutuhan pengakuan",
      vi: "Ám ảnh thành công, sợ thất bại, nhu cầu được công nhận"
    },
    solutions: {
      ko: "불완전함 수용, 과정 즐기기, 실수 허용, 기준 낮추기",
      en: "Accept imperfection, enjoy the process, allow mistakes, lower standards",
      ja: "不完全さの受容、プロセスを楽しむ、失敗の許容、基準を下げる",
      'zh-CN': "接受不完美、享受过程、允许错误、降低标准",
      'zh-TW': "接受不完美、享受過程、允許錯誤、降低標準",
      id: "Menerima ketidaksempurnaan, menikmati proses, mengizinkan kesalahan, menurunkan standar",
      vi: "Chấp nhận sự không hoàn hảo, tận hưởng quá trình, cho phép sai lầm, hạ thấp tiêu chuẩn"
    },
    advice: {
      ko: "완벽한 사람도, 완벽한 연애도 없습니다. 불완전함이 오히려 인간적 매력이에요. \"70점이면 충분해\"라는 마음으로 시작해보세요. 실수해도 괜찮습니다.",
      en: "There are no perfect people or perfect relationships. Imperfection is actually human charm. Start with the mindset that \"70 points is enough.\" It's okay to make mistakes.",
      ja: "完璧な人も、完璧な恋愛もありません。不完全さがむしろ人間的な魅力です。「70点で十分」という気持ちで始めてみてください。失敗しても大丈夫です。",
      'zh-CN': "没有完美的人，也没有完美的恋爱。不完美反而是人性魅力。以\"70分就足够\"的心态开始吧。犯错也没关系。",
      'zh-TW': "沒有完美的人，也沒有完美的戀愛。不完美反而是人性魅力。以「70分就足夠」的心態開始吧。犯錯也沒關係。",
      id: "Tidak ada orang atau hubungan yang sempurna. Ketidaksempurnaan justru daya tarik manusia. Mulai dengan pola pikir bahwa \"70 poin sudah cukup.\" Tidak apa-apa membuat kesalahan.",
      vi: "Không có người hoàn hảo hay mối quan hệ hoàn hảo. Sự không hoàn hảo thực sự là sức hấp dẫn của con người. Bắt đầu với suy nghĩ rằng \"70 điểm là đủ.\" Không sao nếu mắc lỗi."
    }
  },
  {
    type: "Type4",
    emoji: "🌟",
    title: {
      ko: "이상형 집착형",
      en: "Ideal Type Obsession Type",
      ja: "理想型執着型",
      'zh-CN': "理想型执着型",
      'zh-TW': "理想型執著型",
      id: "Tipe Obsesi Tipe Ideal",
      vi: "Loại Ám ảnh Kiểu Lý tưởng"
    },
    description: {
      ko: "\"이상과 현실의 차이... 높은 기준이 발목을 잡아요\"\n당신의 가장 큰 장애물은 현실과 동떨어진 이상입니다. 드라마 같은 완벽한 연애를 꿈꾸며, 이상형 조건이 너무 많고 높습니다. 좋은 사람을 만나도 \"뭔가 아쉬워\", \"내 이상형이 아닌데\"라며 놓칩니다. 현실의 사랑보다 머릿속 환상에 빠져있습니다.",
      en: "\"The gap between ideal and reality... high standards are holding me back\"\nYour biggest obstacle is ideals that are disconnected from reality. You dream of perfect love like in dramas, with too many and too high ideal type conditions. Even when you meet good people, you miss them saying \"Something's missing\", \"They're not my ideal type\". You're caught up in fantasies rather than real love.",
      ja: "「理想と現実の差...高い基準が足を引っ張る」\nあなたの最大の障害は現実からかけ離れた理想です。ドラマのような完璧な恋愛を夢見て、理想型の条件が多すぎて高すぎます。良い人に会っても「何か物足りない」「私の理想型じゃない」と言って逃します。現実の愛より頭の中の幻想に浸っています。",
      'zh-CN': "\"理想与现实的差距...高标准在拖后腿\"\n你最大的障碍是与现实脱节的理想。梦想着像电视剧一样的完美恋爱，理想型条件太多太高。即使遇到好人也会错过，说\"总觉得缺什么\"、\"不是我的理想型\"。沉迷于脑海中的幻想而不是现实的爱。",
      'zh-TW': "「理想與現實的差距...高標準在拖後腿」\n你最大的障礙是與現實脫節的理想。夢想著像電視劇一樣的完美戀愛，理想型條件太多太高。即使遇到好人也會錯過，說「總覺得缺什麼」、「不是我的理想型」。沉迷於腦海中的幻想而不是現實的愛。",
      id: "\"Perbedaan antara ideal dan kenyataan... standar tinggi menghambat\"\nHambatan terbesar Anda adalah ideal yang terputus dari kenyataan. Anda bermimpi tentang cinta sempurna seperti dalam drama, dengan terlalu banyak dan terlalu tinggi kondisi tipe ideal. Bahkan ketika bertemu orang baik, Anda melewatkannya dengan mengatakan \"Ada yang kurang\", \"Bukan tipe ideal saya\". Anda terperangkap dalam fantasi daripada cinta nyata.",
      vi: "\"Khoảng cách giữa lý tưởng và thực tế... tiêu chuẩn cao đang kéo chân\"\nTrở ngại lớn nhất của bạn là những lý tưởng tách rời khỏi thực tế. Bạn mơ về tình yêu hoàn hảo như trong phim, với quá nhiều và quá cao các điều kiện kiểu lý tưởng. Ngay cả khi gặp người tốt, bạn cũng bỏ lỡ họ nói \"Thiếu gì đó\", \"Không phải kiểu lý tưởng của tôi\". Bạn bị cuốn vào những ảo tưởng thay vì tình yêu thực tế."
    },
    symptoms: {
      ko: "높은 이상, 조건 집착, 비현실적 기대, 감정보다 조건, 만족 없음",
      en: "High ideals, condition obsession, unrealistic expectations, conditions over emotions, no satisfaction",
      ja: "高い理想、条件への執着、非現実的期待、感情より条件、満足なし",
      'zh-CN': "高理想、条件执着、不现实期望、条件胜过情感、不满足",
      'zh-TW': "高理想、條件執著、不現實期望、條件勝過情感、不滿足",
      id: "Ideal tinggi, obsesi kondisi, ekspektasi tidak realistis, kondisi di atas emosi, tidak puas",
      vi: "Lý tưởng cao, ám ảnh điều kiện, kỳ vọng không thực tế, điều kiện hơn cảm xúc, không hài lòng"
    },
    patterns: {
      ko: "이상형 찾다 시간만 감, 좋은 사람 놓침, 영원한 솔로",
      en: "Time passes looking for ideal type, missing good people, forever single",
      ja: "理想型を探して時間だけ過ぎる、良い人を逃す、永遠の独身",
      'zh-CN': "寻找理想型时间流逝、错过好人、永远单身",
      'zh-TW': "尋找理想型時間流逝、錯過好人、永遠單身",
      id: "Waktu berlalu mencari tipe ideal, melewatkan orang baik, selamanya single",
      vi: "Thời gian trôi qua tìm kiểu lý tưởng, bỏ lỡ người tốt, mãi mãi độc thân"
    },
    causes: {
      ko: "로맨스 환상, 비교 습관, 현실 도피",
      en: "Romance fantasies, comparison habits, reality escape",
      ja: "ロマンス幻想、比較習慣、現実逃避",
      'zh-CN': "浪漫幻想、比较习惯、逃避现实",
      'zh-TW': "浪漫幻想、比較習慣、逃避現實",
      id: "Fantasi romantis, kebiasaan membandingkan, melarikan diri dari kenyataan",
      vi: "Ảo tưởng lãng mạn, thói quen so sánh, trốn tránh thực tế"
    },
    solutions: {
      ko: "현실 직시, 기준 재정립, 내면 중시, 경험 쌓기",
      en: "Face reality, reestablish standards, value inner qualities, gain experience",
      ja: "現実直視、基準再確立、内面重視、経験積み",
      'zh-CN': "正视现实、重新确立标准、重视内在、积累经验",
      'zh-TW': "正視現實、重新確立標準、重視內在、積累經驗",
      id: "Hadapi kenyataan, tetapkan kembali standar, hargai kualitas batin, dapatkan pengalaman",
      vi: "Đối mặt với thực tế, thiết lập lại tiêu chuẩn, coi trọng phẩm chất bên trong, tích lũy kinh nghiệm"
    },
    advice: {
      ko: "이상형은 참고일 뿐입니다. 사람은 조건이 아니라 만나서 느껴야 알 수 있어요. 마음이 통하는 사람이 진짜 이상형입니다. 조건 내려놓고 만나보세요.",
      en: "Ideal types are just references. You can only know people by meeting them, not by conditions. Someone who connects with your heart is the real ideal type. Lower your conditions and meet people.",
      ja: "理想型は参考程度です。人は条件ではなく会って感じることで分かります。心が通じ合う人が本当の理想型です。条件を下げて会ってみてください。",
      'zh-CN': "理想型只是参考。人不是通过条件而是通过见面感受才能了解。心灵相通的人才是真正的理想型。放下条件去见面吧。",
      'zh-TW': "理想型只是參考。人不是通過條件而是通過見面感受才能了解。心靈相通的人才是真正的理想型。放下條件去見面吧。",
      id: "Tipe ideal hanya referensi. Anda hanya bisa mengenal orang dengan bertemu mereka, bukan dengan kondisi. Seseorang yang terhubung dengan hati Anda adalah tipe ideal yang sebenarnya. Turunkan kondisi Anda dan bertemu orang.",
      vi: "Kiểu lý tưởng chỉ là tham khảo. Bạn chỉ có thể biết người ta bằng cách gặp họ, không phải bằng điều kiện. Người kết nối với trái tim bạn mới là kiểu lý tưởng thực sự. Hạ thấp điều kiện và gặp gỡ mọi người."
    }
  },
  {
    type: "Type5",
    emoji: "🤐",
    title: {
      ko: "소통 장애형",
      en: "Communication Disorder Type",
      ja: "コミュニケーション障害型",
      'zh-CN': "沟通障碍型",
      'zh-TW': "溝通障礙型",
      id: "Tipe Gangguan Komunikasi",
      vi: "Loại Rối loạn Giao tiếp"
    },
    description: {
      ko: "\"말을 못 하겠어... 소통 부족이 문제예요\"\n당신의 가장 큰 장애물은 소통 능력 부족입니다. 감정을 표현하는 것이 어렵고, 속마음을 말로 전하지 못합니다. \"어떻게 말해야 할지 모르겠어\"라며 침묵하다가 오해가 쌓입니다. 좋아해도 표현 못 하고, 싫어도 참다가 폭발합니다. 대화가 필요한 순간에 회피합니다.",
      en: "\"I can't speak... lack of communication is the problem\"\nYour biggest obstacle is lack of communication skills. It's difficult to express emotions and you can't convey your true feelings in words. You stay silent saying \"I don't know how to say it\" and misunderstandings accumulate. You can't express love and suppress anger until it explodes. You avoid moments when conversation is needed.",
      ja: "「話せない...コミュニケーション不足が問題」\nあなたの最大の障害はコミュニケーション能力の不足です。感情を表現することが難しく、本音を言葉で伝えることができません。「どう話せばいいかわからない」と沈黙し、誤解が積み重なります。好きでも表現できず、嫌でも我慢して爆発します。会話が必要な瞬間を避けます。",
      'zh-CN': "\"说不出来...沟通不足是问题\"\n你最大的障碍是沟通能力不足。表达情感很困难，无法用语言传达内心想法。\"不知道怎么说\"而保持沉默，误解不断积累。喜欢也表达不出来，讨厌也忍着直到爆发。回避需要对话的时刻。",
      'zh-TW': "「說不出來...溝通不足是問題」\n你最大的障礙是溝通能力不足。表達情感很困難，無法用語言傳達內心想法。「不知道怎麼說」而保持沉默，誤解不斷累積。喜歡也表達不出來，討厭也忍著直到爆發。迴避需要對話的時刻。",
      id: "\"Tidak bisa bicara... kurang komunikasi adalah masalahnya\"\nHambatan terbesar Anda adalah kurangnya kemampuan komunikasi. Sulit mengekspresikan emosi dan tidak bisa menyampaikan perasaan sejati dengan kata-kata. Diam mengatakan \"Tidak tahu bagaimana mengatakannya\" dan kesalahpahaman menumpuk. Tidak bisa mengekspresikan cinta dan menahan amarah sampai meledak. Menghindari momen ketika percakapan dibutuhkan.",
      vi: "\"Không thể nói... thiếu giao tiếp là vấn đề\"\nTrở ngại lớn nhất của bạn là thiếu kỹ năng giao tiếp. Khó khăn trong việc thể hiện cảm xúc và không thể truyền đạt cảm xúc thật bằng lời nói. Im lặng nói \"Không biết nói thế nào\" và hiểu lầm tích tụ. Không thể thể hiện tình yêu và kìm nén cơn giận cho đến khi bùng nổ. Tránh những khoảnh khắc cần trò chuyện."
    },
    symptoms: {
      ko: "감정 표현 서툼, 대화 회피, 오해 누적, 침묵, 답답함",
      en: "Poor emotional expression, conversation avoidance, accumulated misunderstandings, silence, frustration",
      ja: "感情表現が下手、会話回避、誤解の蓄積、沈黙、もどかしさ",
      'zh-CN': "情感表达笨拙、回避对话、误解累积、沉默、沮丧",
      'zh-TW': "情感表達笨拙、迴避對話、誤解累積、沉默、沮喪",
      id: "Ekspresi emosi buruk, menghindari percakapan, kesalahpahaman menumpuk, diam, frustrasi",
      vi: "Biểu hiện cảm xúc kém, tránh trò chuyện, hiểu lầm tích tụ, im lặng, thất vọng"
    },
    patterns: {
      ko: "관계 진전 어려움, 오해로 끝남, 답답한 관계",
      en: "Difficulty progressing relationships, ending in misunderstandings, frustrating relationships",
      ja: "関係の進展困難、誤解で終わる、もどかしい関係",
      'zh-CN': "关系进展困难、因误解而结束、令人沮丧的关系",
      'zh-TW': "關係進展困難、因誤解而結束、令人沮喪的關係",
      id: "Kesulitan memajukan hubungan, berakhir dengan kesalahpahaman, hubungan yang membuat frustrasi",
      vi: "Khó khăn trong việc phát triển mối quan hệ, kết thúc vì hiểu lầm, mối quan hệ gây thất vọng"
    },
    causes: {
      ko: "표현 교육 부족, 상처 두려움, 소극적 성격",
      en: "Lack of expression education, fear of hurt, passive personality",
      ja: "表現教育不足、傷つく恐れ、消極的性格",
      'zh-CN': "表达教育不足、害怕受伤、被动性格",
      'zh-TW': "表達教育不足、害怕受傷、被動性格",
      id: "Kurangnya pendidikan ekspresi, takut terluka, kepribadian pasif",
      vi: "Thiếu giáo dục biểu hiện, sợ bị tổn thương, tính cách thụ động"
    },
    solutions: {
      ko: "표현 연습, 글로 시작, 대화 배우기, 솔직함 훈련",
      en: "Expression practice, start with writing, learn conversation, honesty training",
      ja: "表現練習、文章から始める、会話を学ぶ、正直さの訓練",
      'zh-CN': "表达练习、从写作开始、学习对话、诚实训练",
      'zh-TW': "表達練習、從寫作開始、學習對話、誠實訓練",
      id: "Latihan ekspresi, mulai dengan menulis, belajar percakapan, latihan kejujuran",
      vi: "Luyện tập biểu hiện, bắt đầu bằng viết, học trò chuyện, rèn luyện sự trung thực"
    },
    advice: {
      ko: "마음은 표현해야 전해집니다. 서툴러도 괜찮아요. \"나는 이렇게 느꼈어\"부터 시작하세요. 말이 어렵다면 편지나 메시지로 시작해도 좋습니다. 연습하면 나아집니다.",
      en: "Feelings must be expressed to be conveyed. It's okay to be awkward. Start with \"I felt this way.\" If speaking is difficult, you can start with letters or messages. You'll improve with practice.",
      ja: "心は表現しなければ伝わりません。下手でも大丈夫です。「私はこう感じた」から始めてください。話すのが難しいなら手紙やメッセージから始めてもいいです。練習すれば上達します。",
      'zh-CN': "情感必须表达才能传达。笨拙也没关系。从\"我是这样感觉的\"开始。如果说话困难，也可以从写信或发消息开始。练习就会进步。",
      'zh-TW': "情感必須表達才能傳達。笨拙也沒關係。從「我是這樣感覺的」開始。如果說話困難，也可以從寫信或發訊息開始。練習就會進步。",
      id: "Perasaan harus diekspresikan untuk disampaikan. Tidak apa-apa jika canggung. Mulai dengan \"Saya merasa seperti ini.\" Jika berbicara sulit, Anda bisa mulai dengan surat atau pesan. Anda akan membaik dengan latihan.",
      vi: "Cảm xúc phải được thể hiện để được truyền đạt. Vụng về cũng không sao. Bắt đầu với \"Tôi cảm thấy như thế này.\" Nếu nói chuyện khó khăn, bạn có thể bắt đầu bằng thư hoặc tin nhắn. Bạn sẽ cải thiện với luyện tập."
    }
  },
  {
    type: "Type6",
    emoji: "⏰",
    title: {
      ko: "우선순위 혼란형",
      en: "Priority Confusion Type",
      ja: "優先順位混乱型",
      'zh-CN': "优先级混乱型",
      'zh-TW': "優先級混亂型",
      id: "Tipe Kebingungan Prioritas",
      vi: "Loại Rối loạn Ưu tiên"
    },
    description: {
      ko: "\"시간이 없어... 연애보다 다른 게 먼저예요\"\n당신의 가장 큰 장애물은 잘못된 우선순위입니다. 일, 공부, 커리어, 취미가 연애보다 항상 우선입니다. \"지금은 때가 아니야\", \"바빠서 시간이 없어\"라며 미룹니다. 연애를 하고 싶지만 투자할 시간과 에너지가 없습니다. 만나도 소홀해지고 결국 끝납니다.",
      en: "\"I don't have time... other things come before love\"\nYour biggest obstacle is wrong priorities. Work, study, career, hobbies always come before love. You postpone saying \"It's not the right time now\", \"I'm too busy to have time\". You want to date but don't have time and energy to invest. Even when you meet, you become neglectful and it ends eventually.",
      ja: "「時間がない...恋愛より他のことが先」\nあなたの最大の障害は間違った優先順位です。仕事、勉強、キャリア、趣味が恋愛より常に優先されます。「今は時期じゃない」「忙しくて時間がない」と先延ばしにします。恋愛をしたいが投資する時間とエネルギーがありません。会ってもおろそかになり、結局終わります。",
      'zh-CN': "\"没有时间...其他事情比恋爱更重要\"\n你最大的障碍是错误的优先级。工作、学习、事业、爱好总是比恋爱优先。\"现在不是时候\"、\"太忙了没时间\"而推迟。想要恋爱但没有时间和精力投入。即使见面也会变得疏忽，最终结束。",
      'zh-TW': "「沒有時間...其他事情比戀愛更重要」\n你最大的障礙是錯誤的優先級。工作、學習、事業、愛好總是比戀愛優先。「現在不是時候」、「太忙了沒時間」而推遲。想要戀愛但沒有時間和精力投入。即使見面也會變得疏忽，最終結束。",
      id: "\"Tidak ada waktu... hal lain lebih dulu dari cinta\"\nHambatan terbesar Anda adalah prioritas yang salah. Pekerjaan, studi, karier, hobi selalu lebih diutamakan dari cinta. Anda menunda dengan mengatakan \"Sekarang bukan waktunya\", \"Terlalu sibuk tidak ada waktu\". Anda ingin pacaran tetapi tidak punya waktu dan energi untuk berinvestasi. Bahkan ketika bertemu, Anda menjadi lalai dan akhirnya berakhir.",
      vi: "\"Không có thời gian... những việc khác quan trọng hơn tình yêu\"\nTrở ngại lớn nhất của bạn là ưu tiên sai. Công việc, học tập, sự nghiệp, sở thích luôn được ưu tiên hơn tình yêu. Bạn trì hoãn nói \"Bây giờ chưa phải lúc\", \"Quá bận không có thời gian\". Bạn muốn hẹn hò nhưng không có thời gian và năng lượng để đầu tư. Ngay cả khi gặp nhau, bạn trở nên lơ là và cuối cùng kết thúc."
    },
    symptoms: {
      ko: "시간 부족, 우선순위 낮음, 약속 지키기 어려움, 소홀함, 일 중독",
      en: "Time shortage, low priority, difficulty keeping promises, neglect, work addiction",
      ja: "時間不足、優先順位低、約束を守るのが困難、おろそか、仕事中毒",
      'zh-CN': "时间不足、优先级低、难以守约、疏忽、工作成瘾",
      'zh-TW': "時間不足、優先級低、難以守約、疏忽、工作成癮",
      id: "Kekurangan waktu, prioritas rendah, kesulitan menepati janji, lalai, kecanduan kerja",
      vi: "Thiếu thời gian, ưu tiên thấp, khó giữ lời hứa, lơ là, nghiện công việc"
    },
    patterns: {
      ko: "시작 못 함, 만나도 소홀, 자연스럽게 끝남",
      en: "Can't start, neglectful even when meeting, naturally ends",
      ja: "始められない、会ってもおろそか、自然に終わる",
      'zh-CN': "无法开始、即使见面也疏忽、自然结束",
      'zh-TW': "無法開始、即使見面也疏忽、自然結束",
      id: "Tidak bisa memulai, lalai bahkan saat bertemu, berakhir secara alami",
      vi: "Không thể bắt đầu, lơ là ngay cả khi gặp nhau, kết thúc một cách tự nhiên"
    },
    causes: {
      ko: "일 중독, 목표 집착, 관계 가치 낮게 평가",
      en: "Work addiction, goal obsession, low relationship value",
      ja: "仕事中毒、目標への執着、関係の価値を低く評価",
      'zh-CN': "工作成瘾、目标执着、低估关系价值",
      'zh-TW': "工作成癮、目標執著、低估關係價值",
      id: "Kecanduan kerja, obsesi tujuan, menilai hubungan rendah",
      vi: "Nghiện công việc, ám ảnh mục tiêu, đánh giá thấp giá trị mối quan hệ"
    },
    solutions: {
      ko: "우선순위 재정립, 시간 관리, 균형 찾기, 관계 투자",
      en: "Reestablish priorities, time management, find balance, relationship investment",
      ja: "優先順位の再確立、時間管理、バランスを見つける、関係への投資",
      'zh-CN': "重新确立优先级、时间管理、寻找平衡、关系投资",
      'zh-TW': "重新確立優先級、時間管理、尋找平衡、關係投資",
      id: "Menetapkan kembali prioritas, manajemen waktu, menemukan keseimbangan, investasi hubungan",
      vi: "Thiết lập lại ưu tiên, quản lý thời gian, tìm sự cân bằng, đầu tư mối quan hệ"
    },
    advice: {
      ko: "지금이 아니면 언제인가요? 완벽한 타이밍은 없습니다. 연애도 인생의 중요한 부분이에요. 하루 30분이라도 상대방에게 집중하는 시간을 만들어보세요. 균형이 필요합니다.",
      en: "If not now, when? There's no perfect timing. Love is also an important part of life. Try to make time to focus on your partner for even 30 minutes a day. Balance is needed.",
      ja: "今でなければいつですか？完璧なタイミングはありません。恋愛も人生の重要な部分です。一日30分でも相手に集中する時間を作ってみてください。バランスが必要です。",
      'zh-CN': "如果不是现在，那是什么时候？没有完美的时机。恋爱也是人生的重要组成部分。试着每天花30分钟专注于对方。需要平衡。",
      'zh-TW': "如果不是現在，那是什麼時候？沒有完美的時機。戀愛也是人生的重要組成部分。試著每天花30分鐘專注於對方。需要平衡。",
      id: "Jika bukan sekarang, kapan? Tidak ada waktu yang sempurna. Cinta juga bagian penting dari kehidupan. Coba luangkan waktu untuk fokus pada pasangan bahkan 30 menit sehari. Keseimbangan diperlukan.",
      vi: "Nếu không phải bây giờ thì khi nào? Không có thời điểm hoàn hảo. Tình yêu cũng là phần quan trọng của cuộc sống. Hãy thử dành thời gian tập trung vào đối phương dù chỉ 30 phút mỗi ngày. Cần có sự cân bằng."
    }
  }
];

export function calculateLoveObstacleResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  answers.forEach(answer => {
    if (answer && typeof answer === 'object') {
      Object.keys(answer).forEach(type => {
        if (scores[type as keyof typeof scores] !== undefined) {
          scores[type as keyof typeof scores] += answer[type];
        }
      });
    }
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 답변 확인)
  if (resultType && answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
    
    lastThreeAnswers.forEach(answer => {
      if (answer && typeof answer === 'object') {
        Object.keys(answer).forEach(type => {
          if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
            lastThreeScores[type as keyof typeof lastThreeScores] += answer[type];
          }
        });
      }
    });
    
    const maxLastScore = Math.max(...Object.values(lastThreeScores));
    const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
    
    return lastResultType || resultType;
  }
  
  return resultType || "Type1";
}
