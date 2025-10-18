export interface FlirtingQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface FlirtingResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>;
  impression: Record<string, string>;
  pros: Record<string, string>;
  cons: Record<string, string>;
  advice: Record<string, string>;
}

export const flirtingQuestions: FlirtingQuestion[] = [
  {
    id: 1,
    question: {
      ko: "좋아하는 사람에게 메시지가 왔을 때?",
      en: "When you receive a message from someone you like?",
      ja: "好きな人からメッセージが来た時？",
      'zh-CN': "收到喜欢的人的消息时？",
      'zh-TW': "收到喜歡的人的消息時？",
      id: "Ketika Anda menerima pesan dari orang yang Anda sukai?",
      vi: "Khi bạn nhận được tin nhắn từ người bạn thích?"
    },
    options: [
      {
        text: {
          ko: "일부러 조금 시간 두고 답장한다",
          en: "Intentionally wait a bit before replying",
          ja: "わざと少し時間を置いて返信する",
          'zh-CN': "故意等一会儿再回复",
          'zh-TW': "故意等一會兒再回覆",
          id: "Sengaja menunggu sebentar sebelum membalas",
          vi: "Cố tình đợi một chút trước khi trả lời"
        },
        scores: { Type1: 5, Type2: 3 }
      },
      {
        text: {
          ko: "바로 확인하고 바로 답장한다",
          en: "Check immediately and reply right away",
          ja: "すぐに確認してすぐに返信する",
          'zh-CN': "立即查看并立即回复",
          'zh-TW': "立即查看並立即回覆",
          id: "Segera periksa dan balas langsung",
          vi: "Kiểm tra ngay lập tức và trả lời ngay"
        },
        scores: { Type4: 4, Type6: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "썸 타는 상대와 대화할 때 내 모습은?",
      en: "How do I appear when talking to someone I'm flirting with?",
      ja: "フリートしている相手と話す時の私の姿は？",
      'zh-CN': "与暧昧对象聊天时我的样子是？",
      'zh-TW': "與曖昧對象聊天時我的樣子是？",
      id: "Bagaimana penampilan saya saat berbicara dengan seseorang yang sedang saya rayu?",
      vi: "Tôi trông như thế nào khi nói chuyện với người tôi đang tán tỉnh?"
    },
    options: [
      {
        text: {
          ko: "관심 있는 척하면서도 쿨한 척한다",
          en: "Act interested but also act cool",
          ja: "興味があるふりをしながらもクールなふりをする",
          'zh-CN': "装作感兴趣但也装作很酷",
          'zh-TW': "裝作感興趣但也裝作很酷",
          id: "Berpura-pura tertarik tapi juga berpura-pura keren",
          vi: "Giả vờ quan tâm nhưng cũng giả vờ mát mẻ"
        },
        scores: { Type1: 5, Type2: 3 }
      },
      {
        text: {
          ko: "관심이 너무 티 나서 숨길 수가 없다",
          en: "My interest is too obvious to hide",
          ja: "興味が露骨すぎて隠せない",
          'zh-CN': "兴趣太明显无法隐藏",
          'zh-TW': "興趣太明顯無法隱藏",
          id: "Ketertarikan saya terlalu jelas untuk disembunyikan",
          vi: "Sự quan tâm của tôi quá rõ ràng không thể che giấu"
        },
        scores: { Type4: 4, Type6: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "상대방이 답장을 늦게 하면?",
      en: "When the other person replies late?",
      ja: "相手が返信を遅くしたら？",
      'zh-CN': "当对方回复很慢时？",
      'zh-TW': "當對方回覆很慢時？",
      id: "Ketika lawan membalas terlambat?",
      vi: "Khi đối phương trả lời muộn?"
    },
    options: [
      {
        text: {
          ko: "\"바쁜가 보네\" 여유롭게 기다린다",
          en: "\"They must be busy\" Wait calmly",
          ja: "「忙しいのかな」余裕を持って待つ",
          'zh-CN': "「应该很忙吧」从容地等待",
          'zh-TW': "「應該很忙吧」從容地等待",
          id: "\"Pasti sibuk\" Menunggu dengan tenang",
          vi: "\"Chắc là bận\" Chờ đợi một cách bình tĩnh"
        },
        scores: { Type2: 5, Type1: 4, Type3: 3 }
      },
      {
        text: {
          ko: "\"왜 안 읽지?\" 계속 확인한다",
          en: "\"Why aren't they reading?\" Keep checking",
          ja: "「なぜ読まないの？」ずっと確認する",
          'zh-CN': "「为什么不读？」一直查看",
          'zh-TW': "「為什麼不讀？」一直查看",
          id: "\"Kenapa tidak dibaca?\" Terus memeriksa",
          vi: "\"Tại sao không đọc?\" Liên tục kiểm tra"
        },
        scores: { Type4: 2, Type5: 8, Type6: 1 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "좋아한다는 티를 내는 정도는?",
      en: "How much do you show that you like them?",
      ja: "好きだということを示す程度は？",
      'zh-CN': "表现出喜欢他们的程度是？",
      'zh-TW': "表現出喜歡他們的程度是？",
      id: "Seberapa banyak Anda menunjukkan bahwa Anda menyukai mereka?",
      vi: "Bạn thể hiện sự thích họ ở mức độ nào?"
    },
    options: [
      {
        text: {
          ko: "애매하게, 알듯 말듯 하게",
          en: "Ambiguously, somewhat obvious but not clear",
          ja: "曖昧に、分かるような分からないような",
          'zh-CN': "暧昧地，似懂非懂",
          'zh-TW': "曖昧地，似懂非懂",
          id: "Samar-samar, agak jelas tapi tidak jelas",
          vi: "Mơ hồ, có vẻ rõ ràng nhưng không rõ ràng"
        },
        scores: { Type1: 5, Type2: 3 }
      },
      {
        text: {
          ko: "노골적으로, 숨기지 못하고",
          en: "Obviously, unable to hide it",
          ja: "露骨に、隠せずに",
          'zh-CN': "露骨地，无法隐藏",
          'zh-TW': "露骨地，無法隱藏",
          id: "Terang-terangan, tidak bisa disembunyikan",
          vi: "Lộ liễu, không thể che giấu"
        },
        scores: { Type4: 4, Type6: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "둘만의 약속을 잡을 때?",
      en: "When making plans for just the two of you?",
      ja: "二人だけの約束を決める時？",
      'zh-CN': "制定只有你们两人的计划时？",
      'zh-TW': "制定只有你們兩人的計劃時？",
      id: "Ketika membuat rencana hanya berdua?",
      vi: "Khi lập kế hoạch chỉ có hai người?"
    },
    options: [
      {
        text: {
          ko: "\"시간 되면 한번 보자\" 가볍게",
          en: "\"Let's meet when we have time\" Casually",
          ja: "「時間がある時に会おう」軽く",
          'zh-CN': "「有时间的时候见面吧」轻松地",
          'zh-TW': "「有時間的時候見面吧」輕鬆地",
          id: "\"Kalau ada waktu kita ketemu\" Santai",
          vi: "\"Khi nào có thời gian thì gặp nhau\" Nhẹ nhàng"
        },
        scores: { Type1: 5, Type2: 3 }
      },
      {
        text: {
          ko: "\"언제 만날래?\" 적극적으로",
          en: "\"When do you want to meet?\" Actively",
          ja: "「いつ会う？」積極的に",
          'zh-CN': "「什么时候见面？」积极地",
          'zh-TW': "「什麼時候見面？」積極地",
          id: "\"Kapan mau ketemu?\" Aktif",
          vi: "\"Khi nào muốn gặp?\" Tích cực"
        },
        scores: { Type4: 4, Type6: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "상대방의 SNS를 보면?",
      en: "When looking at the other person's SNS?",
      ja: "相手のSNSを見ると？",
      'zh-CN': "看对方的社交媒体时？",
      'zh-TW': "看對方的社交媒體時？",
      id: "Ketika melihat SNS lawan?",
      vi: "Khi xem mạng xã hội của đối phương?"
    },
    options: [
      {
        text: {
          ko: "본 티 안 나게 가끔 확인",
          en: "Check occasionally without showing it",
          ja: "見たことがバレないように時々確認",
          'zh-CN': "偶尔查看不露痕迹",
          'zh-TW': "偶爾查看不露痕跡",
          id: "Periksa sesekali tanpa terlihat",
          vi: "Kiểm tra thỉnh thoảng mà không lộ"
        },
        scores: { Type1: 5, Type2: 3 }
      },
      {
        text: {
          ko: "올라오면 바로 확인하고 좋아요",
          en: "Check immediately when posted and like",
          ja: "投稿されたらすぐに確認していいね",
          'zh-CN': "发布后立即查看并点赞",
          'zh-TW': "發布後立即查看並點讚",
          id: "Segera periksa saat diposting dan like",
          vi: "Kiểm tra ngay khi đăng và thích"
        },
        scores: { Type4: 4, Type6: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "상대방이 다른 이성 얘기를 하면?",
      en: "When the other person talks about other people of the opposite sex?",
      ja: "相手が他の異性の話をしたら？",
      'zh-CN': "当对方谈论其他异性时？",
      'zh-TW': "當對方談論其他異性時？",
      id: "Ketika lawan membicarakan lawan jenis lain?",
      vi: "Khi đối phương nói về người khác giới khác?"
    },
    options: [
      {
        text: {
          ko: "\"그래? 좋겠네\" 쿨하게 넘긴다",
          en: "\"Really? That's nice\" Coolly dismiss it",
          ja: "「そう？いいね」クールに流す",
          'zh-CN': "「是吗？不错」酷酷地略过",
          'zh-TW': "「是嗎？不錯」酷酷地略過",
          id: "\"Benarkah? Bagus\" Dingin mengabaikannya",
          vi: "\"Thật sao? Tốt nhỉ\" Mát mẻ bỏ qua"
        },
        scores: { Type2: 5, Type1: 4, Type3: 4 }
      },
      {
        text: {
          ko: "\"누구?\" 질투 티가 난다",
          en: "\"Who?\" Show signs of jealousy",
          ja: "「誰？」嫉妬の色が見える",
          'zh-CN': "「谁？」露出嫉妒的迹象",
          'zh-TW': "「誰？」露出嫉妒的跡象",
          id: "\"Siapa?\" Menunjukkan tanda cemburu",
          vi: "\"Ai?\" Thể hiện dấu hiệu ghen tuông"
        },
        scores: { Type4: 2, Type6: 8, Type5: 1 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "연락 빈도는?",
      en: "How often do you contact them?",
      ja: "連絡頻度は？",
      'zh-CN': "联系频率是？",
      'zh-TW': "聯繫頻率是？",
      id: "Seberapa sering Anda menghubungi mereka?",
      vi: "Tần suất liên lạc là bao nhiêu?"
    },
    options: [
      {
        text: {
          ko: "적당히 조절하며 당기고 밀고",
          en: "Moderately control, push and pull",
          ja: "適度に調節して引っ張ったり押したり",
          'zh-CN': "适度调节，推拉有度",
          'zh-TW': "適度調節，推拉有度",
          id: "Mengontrol dengan moderat, tarik dan dorong",
          vi: "Điều chỉnh vừa phải, kéo và đẩy"
        },
        scores: { Type1: 5, Type2: 3 }
      },
      {
        text: {
          ko: "거의 매일 먼저 연락한다",
          en: "Contact them first almost every day",
          ja: "ほぼ毎日先に連絡する",
          'zh-CN': "几乎每天主动联系",
          'zh-TW': "幾乎每天主動聯繫",
          id: "Hampir setiap hari menghubungi duluan",
          vi: "Gần như mỗi ngày đều liên lạc trước"
        },
        scores: { Type4: 4, Type6: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "상대방 앞에서 내 모습은?",
      en: "How do I appear in front of the other person?",
      ja: "相手の前での私の姿は？",
      'zh-CN': "在对方面前我的样子是？",
      'zh-TW': "在對方面前我的樣子是？",
      id: "Bagaimana penampilan saya di depan lawan?",
      vi: "Tôi trông như thế nào trước mặt đối phương?"
    },
    options: [
      {
        text: {
          ko: "평소보다 더 쿨하고 여유롭게",
          en: "Cooler and more relaxed than usual",
          ja: "普段よりクールで余裕がある",
          'zh-CN': "比平时更酷更从容",
          'zh-TW': "比平時更酷更從容",
          id: "Lebih keren dan santai dari biasanya",
          vi: "Mát mẻ và thoải mái hơn bình thường"
        },
        scores: { Type2: 5, Type1: 4, Type3: 3 }
      },
      {
        text: {
          ko: "평소보다 더 긴장하고 신경 쓰게",
          en: "More nervous and concerned than usual",
          ja: "普段より緊張して気を使う",
          'zh-CN': "比平时更紧张更在意",
          'zh-TW': "比平時更緊張更在意",
          id: "Lebih gugup dan khawatir dari biasanya",
          vi: "Căng thẳng và lo lắng hơn bình thường"
        },
        scores: { Type5: 6, Type4: 4, Type6: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "고백 타이밍에 대한 생각은?",
      en: "What do you think about confession timing?",
      ja: "告白のタイミングについての考えは？",
      'zh-CN': "关于告白时机的想法是？",
      'zh-TW': "關於告白時機的想法是？",
      id: "Apa pendapat Anda tentang timing pengakuan?",
      vi: "Bạn nghĩ gì về thời điểm tỏ tình?"
    },
    options: [
      {
        text: {
          ko: "확실한 호감 신호 확인 후",
          en: "After confirming clear signs of interest",
          ja: "確実な好意のサインを確認してから",
          'zh-CN': "确认明确的好感信号后",
          'zh-TW': "確認明確的好感信號後",
          id: "Setelah memastikan sinyal ketertarikan yang jelas",
          vi: "Sau khi xác nhận tín hiệu quan tâm rõ ràng"
        },
        scores: { Type1: 5, Type2: 4, Type3: 2 }
      },
      {
        text: {
          ko: "빨리 확실하게 하고 싶다",
          en: "Want to make it clear quickly",
          ja: "早く確実にしたい",
          'zh-CN': "想快点确定",
          'zh-TW': "想快點確定",
          id: "Ingin membuatnya jelas dengan cepat",
          vi: "Muốn làm rõ nhanh chóng"
        },
        scores: { Type4: 4, Type6: 4, Type3: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "상대방이 바쁘다고 하면?",
      en: "When the other person says they're busy?",
      ja: "相手が忙しいと言ったら？",
      'zh-CN': "当对方说很忙时？",
      'zh-TW': "當對方說很忙時？",
      id: "Ketika lawan mengatakan mereka sibuk?",
      vi: "Khi đối phương nói họ bận?"
    },
    options: [
      {
        text: {
          ko: "\"응 천천히 연락해\" 여유롭게",
          en: "\"Okay, contact me when you have time\" Calmly",
          ja: "「うん、ゆっくり連絡して」余裕を持って",
          'zh-CN': "「好的，有空再联系」从容地",
          'zh-TW': "「好的，有空再聯繫」從容地",
          id: "\"Oke, hubungi saya kalau ada waktu\" Tenang",
          vi: "\"Được, liên lạc khi có thời gian\" Bình tĩnh"
        },
        scores: { Type2: 5, Type1: 4, Type3: 4 }
      },
      {
        text: {
          ko: "\"알겠어 ㅠㅠ\" 아쉬움 표현",
          en: "\"Okay ㅠㅠ\" Express disappointment",
          ja: "「わかったㅠㅠ」残念な気持ちを表現",
          'zh-CN': "「知道了ㅠㅠ」表达遗憾",
          'zh-TW': "「知道了ㅠㅠ」表達遺憾",
          id: "\"Oke ㅠㅠ\" Mengekspresikan kekecewaan",
          vi: "\"Được rồi ㅠㅠ\" Thể hiện sự thất vọng"
        },
        scores: { Type4: 2, Type5: 8, Type3: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "썸을 탈 때 당신의 목표는?",
      en: "What is your goal when flirting?",
      ja: "フリートする時のあなたの目標は？",
      'zh-CN': "暧昧时的目标是？",
      'zh-TW': "曖昧時的目標是？",
      id: "Apa tujuan Anda saat merayu?",
      vi: "Mục tiêu của bạn khi tán tỉnh là gì?"
    },
    options: [
      {
        text: {
          ko: "상대방이 나를 더 좋아하게 만들기",
          en: "Make the other person like me more",
          ja: "相手が私をもっと好きになるようにする",
          'zh-CN': "让对方更喜欢我",
          'zh-TW': "讓對方更喜歡我",
          id: "Membuat lawan lebih menyukai saya",
          vi: "Làm cho đối phương thích tôi hơn"
        },
        scores: { Type1: 5, Type2: 4, Type3: 2 }
      },
      {
        text: {
          ko: "빨리 확실한 관계가 되기",
          en: "Quickly establish a definite relationship",
          ja: "早く確実な関係になる",
          'zh-CN': "快速建立确定的关系",
          'zh-TW': "快速建立確定的關係",
          id: "Cepat membangun hubungan yang pasti",
          vi: "Nhanh chóng thiết lập mối quan hệ xác định"
        },
        scores: { Type4: 4, Type6: 4, Type3: 2 }
      }
    ]
  }
];

export const flirtingResults: FlirtingResult[] = [
  {
    type: "Type1",
    emoji: "👑",
    title: {
      ko: "썸의 전설급 마스터",
      en: "Legendary Flirting Master",
      ja: "フリートの伝説級マスター",
      'zh-CN': "暧昧传说级大师",
      'zh-TW': "曖昧傳說級大師",
      id: "Master Flirting Legendaris",
      vi: "Bậc Thầy Tán Tỉnh Huyền Thoại"
    },
    description: {
      ko: "밀당의 신! 당신은 연애 고수! 완벽합니다! 당신은 썸의 모든 것을 꿰뚫고 있는 고수입니다. 적당한 관심과 거리, 타이밍까지 완벽하게 조절합니다. 상대방이 당신에게 더 빠져들게 만드는 마법 같은 능력이 있습니다. 너무 적극적이지도, 소극적이지도 않은 완벽한 밸런스로 상대방을 설레게 합니다. 카톡 답장 타이밍, 만남 빈도, 감정 표현까지 모두 계산된 전략입니다.",
      en: "God of push and pull! You are a dating expert! Perfect! You are a master who understands everything about flirting. You perfectly control appropriate interest, distance, and timing. You have a magical ability to make the other person fall deeper for you. With perfect balance that's neither too aggressive nor too passive, you make the other person's heart flutter. Everything from text reply timing, meeting frequency, to emotional expression is a calculated strategy.",
      ja: "押し引きの神！あなたは恋愛の達人！完璧です！あなたはフリートのすべてを理解しているマスターです。適度な関心と距離、タイミングまで完璧にコントロールします。相手をあなたにもっと惹きつける魔法のような能力があります。積極的すぎず、消極的すぎない完璧なバランスで相手をドキドキさせます。メッセージ返信のタイミング、会う頻度、感情表現まで全て計算された戦略です。",
      'zh-CN': "推拉之神！你是恋爱高手！完美！你是完全掌握暧昧技巧的大师。你完美地控制着适当的关心、距离和时机。你拥有让对方向你更着迷的魔法般能力。以既不过于积极也不过于被动的完美平衡，让对方心动不已。从消息回复时机、见面频率到情感表达，一切都是经过计算的策略。",
      'zh-TW': "推拉之神！你是戀愛高手！完美！你是完全掌握曖昧技巧的大師。你完美地控制著適當的關心、距離和時機。你擁有讓對方向你更著迷的魔法般能力。以既不過於積極也不過於被動的完美平衡，讓對方心動不已。從訊息回覆時機、見面頻率到情感表達，一切都是經過計算的策略。",
      id: "Dewa tarik ulur! Anda adalah ahli kencan! Sempurna! Anda adalah master yang memahami segalanya tentang merayu. Anda mengontrol dengan sempurna ketertarikan yang tepat, jarak, dan waktu. Anda memiliki kemampuan ajaib untuk membuat lawan semakin terpikat pada Anda. Dengan keseimbangan sempurna yang tidak terlalu agresif atau terlalu pasif, Anda membuat hati lawan berdebar. Semuanya dari timing balasan pesan, frekuensi bertemu, hingga ekspresi emosi adalah strategi yang terhitung.",
      vi: "Thần của kéo đẩy! Bạn là chuyên gia hẹn hò! Hoàn hảo! Bạn là bậc thầy hiểu rõ mọi thứ về tán tỉnh. Bạn kiểm soát hoàn hảo sự quan tâm phù hợp, khoảng cách và thời điểm. Bạn có khả năng ma thuật khiến đối phương ngày càng say mê bạn. Với sự cân bằng hoàn hảo không quá tích cực cũng không quá thụ động, bạn khiến trái tim đối phương rung động. Từ thời điểm trả lời tin nhắn, tần suất gặp mặt đến biểu cảm cảm xúc, tất cả đều là chiến lược được tính toán."
    },
    characteristics: {
      ko: "여유로움, 전략적, 쿨함, 밀당 능력자, 감정 조절 완벽",
      en: "Relaxed, strategic, cool, push-pull expert, perfect emotional control",
      ja: "余裕、戦略的、クール、押し引きの達人、感情コントロール完璧",
      'zh-CN': "从容、战略性、酷、推拉高手、完美情感控制",
      'zh-TW': "從容、戰略性、酷、推拉高手、完美情感控制",
      id: "Santai, strategis, keren, ahli tarik ulur, kontrol emosi sempurna",
      vi: "Thoải mái, chiến lược, mát mẻ, chuyên gia kéo đẩy, kiểm soát cảm xúc hoàn hảo"
    },
    impression: {
      ko: "쿨한데 나한테 관심 있나?, 신경 쓰이는 사람, 매력적",
      en: "Cool but interested in me?, Someone I think about, Attractive",
      ja: "クールだけど私に興味がある？、気になる人、魅力的",
      'zh-CN': "酷但对我有兴趣？、让我在意的人、有魅力",
      'zh-TW': "酷但對我感興趣？、讓我在意的人、有魅力",
      id: "Keren tapi tertarik padaku?, Orang yang kupikirkan, Menarik",
      vi: "Mát mẻ nhưng quan tâm đến tôi?, Người tôi nghĩ đến, Hấp dẫn"
    },
    pros: {
      ko: "상대방이 먼저 빠짐, 주도권 장악, 관계 컨트롤",
      en: "Other person falls first, Take control, Relationship control",
      ja: "相手が先に落ちる、主導権を握る、関係をコントロール",
      'zh-CN': "对方先沦陷、掌握主导权、关系控制",
      'zh-TW': "對方先淪陷、掌握主導權、關係控制",
      id: "Lawan jatuh duluan, Menguasai kendali, Mengontrol hubungan",
      vi: "Đối phương yêu trước, Nắm quyền chủ động, Kiểm soát mối quan hệ"
    },
    cons: {
      ko: "너무 쿨해서 무관심해 보일 수 있음, 가끔은 진심 표현도 필요",
      en: "May appear uninterested because too cool, Sometimes need to show sincerity",
      ja: "クールすぎて無関心に見える可能性、時には本心表現も必要",
      'zh-CN': "可能因太酷而显得不关心、有时也需要表达真心",
      'zh-TW': "可能因太酷而顯得不在乎、有時也需要表達真心",
      id: "Mungkin terlihat tidak peduli karena terlalu keren, Kadang perlu menunjukkan ketulusan",
      vi: "Có thể trông không quan tâm vì quá mát mẻ, Đôi khi cần thể hiện sự chân thành"
    },
    advice: {
      ko: "완벽합니다! 하지만 가끔은 진심을 보여주세요. 너무 전략적이면 상대방이 지칠 수 있어요.",
      en: "Perfect! But sometimes show your sincerity. If you're too strategic, the other person might get tired.",
      ja: "完璧です！でも時には本心を見せてください。戦略的すぎると相手が疲れるかもしれません。",
      'zh-CN': "完美！但有时要展现真心。太战略化可能会让对方疲惫。",
      'zh-TW': "完美！但有時要展現真心。太戰略化可能會讓對方疲憊。",
      id: "Sempurna! Tapi kadang tunjukkan ketulusan Anda. Jika terlalu strategis, lawan mungkin lelah.",
      vi: "Hoàn hảo! Nhưng đôi khi hãy thể hiện sự chân thành. Nếu quá chiến lược, đối phương có thể mệt mỏi."
    }
  },
  {
    type: "Type2",
    emoji: "😎",
    title: {
      ko: "썸의 고수",
      en: "Flirting Expert",
      ja: "フリートの達人",
      'zh-CN': "暧昧高手",
      'zh-TW': "曖昧高手",
      id: "Ahli Flirting",
      vi: "Chuyên Gia Tán Tỉnh"
    },
    description: {
      ko: "밀당 잘하는 당신! 꽤 능숙해요. 당신은 썸을 잘 타는 편입니다! 기본기가 탄탄하고 상대방의 마음을 읽을 줄 압니다. 적당히 당기고 밀면서 관계를 발전시킵니다. 대부분의 상황에서 현명하게 대처하지만, 가끔 감정이 앞서서 실수할 때도 있습니다. 그래도 전체적으로는 균형 잡힌 썸 스타일입니다.",
      en: "You're good at push and pull! Quite skilled. You're good at flirting! You have solid basics and know how to read the other person's heart. You develop relationships by appropriately pulling and pushing. You handle most situations wisely, but sometimes emotions get ahead and you make mistakes. Still, overall you have a balanced flirting style.",
      ja: "押し引きが上手なあなた！かなり熟練しています。あなたはフリートが得意です！基本がしっかりしていて、相手の心を読むことができます。適度に引っ張ったり押したりしながら関係を発展させます。ほとんどの状況で賢明に対処しますが、時々感情が先走って失敗することもあります。それでも全体的にはバランスの取れたフリートスタイルです。",
      'zh-CN': "你很擅长推拉！相当熟练。你很会暧昧！基础扎实，懂得读懂对方的心。通过适当的推拉来发展关系。在大多数情况下都能明智地处理，但有时情绪会占上风而犯错。不过总体来说，你有着平衡的暧昧风格。",
      'zh-TW': "你很擅長推拉！相當熟練。你很會曖昧！基礎紮實，懂得讀懂對方的心。通過適當的推拉來發展關係。在大多數情況下都能明智地處理，但有時情緒會佔上風而犯錯。不過總體來說，你有著平衡的曖昧風格。",
      id: "Anda pandai tarik ulur! Cukup terampil. Anda pandai merayu! Dasar yang solid dan tahu cara membaca hati lawan. Anda mengembangkan hubungan dengan menarik dan mendorong yang tepat. Anda menangani sebagian besar situasi dengan bijak, tetapi kadang-kadang emosi mendahului dan Anda membuat kesalahan. Namun secara keseluruhan, Anda memiliki gaya merayu yang seimbang.",
      vi: "Bạn giỏi kéo đẩy! Khá thành thạo. Bạn giỏi tán tỉnh! Có nền tảng vững chắc và biết cách đọc hiểu trái tim đối phương. Bạn phát triển mối quan hệ bằng cách kéo và đẩy phù hợp. Bạn xử lý hầu hết các tình huống một cách khôn ngoan, nhưng đôi khi cảm xúc lấn át và bạn mắc lỗi. Tuy nhiên, nhìn chung bạn có phong cách tán tỉnh cân bằng."
    },
    characteristics: {
      ko: "적당한 밀당, 균형감, 센스, 상황 판단력",
      en: "Moderate push-pull, sense of balance, sensibility, situational judgment",
      ja: "適度な押し引き、バランス感覚、センス、状況判断力",
      'zh-CN': "适度的推拉、平衡感、品味、情境判断力",
      'zh-TW': "適度的推拉、平衡感、品味、情境判斷力",
      id: "Tarik ulur moderat, rasa keseimbangan, kepekaan, penilaian situasi",
      vi: "Kéo đẩy vừa phải, cảm giác cân bằng, nhạy cảm, đánh giá tình huống"
    },
    impression: {
      ko: "매력적인 사람, 같이 있으면 편한데 설레는, 센스 있어",
      en: "Attractive person, comfortable but exciting to be with, has sensibility",
      ja: "魅力的な人、一緒にいると楽だけどドキドキする、センスがある",
      'zh-CN': "有魅力的人，在一起很舒服但会心动，有品味",
      'zh-TW': "有魅力的人，在一起很舒服但會心動，有品味",
      id: "Orang yang menarik, nyaman tapi menggairahkan untuk bersama, punya kepekaan",
      vi: "Người hấp dẫn, thoải mái nhưng thú vị khi ở cùng, có sự nhạy cảm"
    },
    pros: {
      ko: "안정적인 관계 발전, 실수 적음, 편안함",
      en: "Stable relationship development, few mistakes, comfort",
      ja: "安定した関係発展、失敗が少ない、快適",
      'zh-CN': "稳定的关系发展，错误少，舒适",
      'zh-TW': "穩定的關係發展，錯誤少，舒適",
      id: "Perkembangan hubungan yang stabil, sedikit kesalahan, kenyamanan",
      vi: "Phát triển mối quan hệ ổn định, ít lỗi lầm, thoải mái"
    },
    cons: {
      ko: "가끔 예측 가능해서 지루할 수 있음",
      en: "Sometimes predictable and can be boring",
      ja: "時々予測可能で退屈になる可能性",
      'zh-CN': "有时可预测，可能无聊",
      'zh-TW': "有時可預測，可能無聊",
      id: "Kadang-kadang dapat diprediksi dan bisa membosankan",
      vi: "Đôi khi có thể dự đoán và có thể nhàm chán"
    },
    advice: {
      ko: "잘하고 있어요! 가끔 예상 못한 행동으로 신선함을 더하면 완벽합니다.",
      en: "You're doing well! Adding freshness with unexpected actions occasionally would be perfect.",
      ja: "よくやっています！時々予想外の行動で新鮮さを加えれば完璧です。",
      'zh-CN': "做得很好！偶尔用意想不到的行动增添新鲜感就完美了。",
      'zh-TW': "做得很好！偶爾用意想不到的行動增添新鮮感就完美了。",
      id: "Anda melakukannya dengan baik! Menambahkan kesegaran dengan tindakan tak terduga sesekali akan sempurna.",
      vi: "Bạn đang làm tốt! Thỉnh thoảng thêm sự tươi mới bằng những hành động bất ngờ sẽ hoàn hảo."
    }
  },
  {
    type: "Type3",
    emoji: "🤷",
    title: {
      ko: "썸의 중수",
      en: "Average Flirter",
      ja: "フリートの中級者",
      'zh-CN': "暧昧中等生",
      'zh-TW': "曖昧中等生",
      id: "Flirter Menengah",
      vi: "Người Tán Tỉnh Trung Bình"
    },
    description: {
      ko: "평범한 썸남썸녀! 보통 수준이에요. 나쁘지 않지만 특별하지도 않은 평범한 수준입니다. 썸을 타는 방법은 알지만 능숙하게 실행하지는 못합니다. 가끔은 쿨한 척하다가 티가 나고, 밀당하려다가 마음이 약해집니다. 전략은 있지만 감정이 앞서서 자주 깨집니다. 그래도 솔직한 모습이 오히려 매력이 될 수 있습니다.",
      en: "Average flirter! Normal level. Not bad but not special either - just average level. You know how to flirt but can't execute it skillfully. Sometimes you try to act cool but it shows, and when you try to push and pull, your heart gets weak. You have strategies but emotions often get ahead and break them. Still, your honest appearance can actually be charming.",
      ja: "普通のフリート！普通レベルです。悪くはないが特別でもない普通のレベルです。フリートの方法は知っているが上手に実行できません。時々クールなふりをしてもバレて、押し引きしようとしても心が弱くなります。戦略はあるが感情が先走ってよく壊れます。それでも正直な姿がかえって魅力になることがあります。",
      'zh-CN': "普通的暧昧者！普通水平。不坏但也不特别——只是普通水平。你知道如何暧昧但无法熟练执行。有时你试图装酷但会露馅，当你试图推拉时，心会变软。你有策略但情绪经常占上风并破坏它们。不过，你诚实的样子实际上可能很有魅力。",
      'zh-TW': "普通的曖昧者！普通水平。不壞但也不特別——只是普通水平。你知道如何曖昧但無法熟練執行。有時你試圖裝酷但會露餡，當你試圖推拉時，心會變軟。你有策略但情緒經常佔上風並破壞它們。不過，你誠實的樣子實際上可能很有魅力。",
      id: "Merayu rata-rata! Level normal. Tidak buruk tapi tidak istimewa juga - hanya level rata-rata. Anda tahu cara merayu tapi tidak bisa mengeksekusinya dengan terampil. Kadang-kadang Anda mencoba bertindak keren tapi terlihat, dan ketika Anda mencoba tarik ulur, hati Anda melemah. Anda punya strategi tapi emosi sering mendahului dan merusaknya. Namun, penampilan jujur Anda sebenarnya bisa menawan.",
      vi: "Người tán tỉnh bình thường! Mức độ bình thường. Không tệ nhưng cũng không đặc biệt - chỉ là mức độ bình thường. Bạn biết cách tán tỉnh nhưng không thể thực hiện một cách khéo léo. Đôi khi bạn cố gắng tỏ ra mát mẻ nhưng bị lộ, và khi bạn cố gắng kéo đẩy, trái tim bạn yếu đi. Bạn có chiến lược nhưng cảm xúc thường lấn át và phá vỡ chúng. Tuy nhiên, vẻ ngoài thành thật của bạn thực sự có thể quyến rũ."
    },
    characteristics: {
      ko: "평범함, 솔직함, 감정 기복, 전략 vs 진심 사이",
      en: "Ordinariness, honesty, emotional ups and downs, between strategy and sincerity",
      ja: "平凡さ、正直さ、感情の浮き沈み、戦略と本心の間",
      'zh-CN': "平凡、诚实、情绪起伏、策略与真心之间",
      'zh-TW': "平凡、誠實、情緒起伏、策略與真心之間",
      id: "Kebiasaan, kejujuran, naik turun emosi, antara strategi dan ketulusan",
      vi: "Bình thường, thành thật, cảm xúc lên xuống, giữa chiến lược và chân thành"
    },
    impression: {
      ko: "순수한 사람, 솔직해서 좋아, 예측 가능",
      en: "Pure person, good because honest, predictable",
      ja: "純粋な人、正直でいい、予測可能",
      'zh-CN': "纯真的人，诚实很好，可预测",
      'zh-TW': "純真的人，誠實很好，可預測",
      id: "Orang murni, baik karena jujur, dapat diprediksi",
      vi: "Người thuần khiết, tốt vì thành thật, có thể dự đoán"
    },
    pros: {
      ko: "진심이 전해짐, 신뢰감",
      en: "Sincerity comes through, sense of trust",
      ja: "本心が伝わる、信頼感",
      'zh-CN': "真心传达，信任感",
      'zh-TW': "真心傳達，信任感",
      id: "Ketulusan tersampaikan, rasa percaya",
      vi: "Sự chân thành được truyền tải, cảm giác tin tưởng"
    },
    cons: {
      ko: "밀당 실패, 호기심 자극 부족, 설렘 적음",
      en: "Push-pull failure, lack of curiosity stimulation, less excitement",
      ja: "押し引き失敗、好奇心刺激不足、ドキドキ感が少ない",
      'zh-CN': "推拉失败，缺乏好奇心刺激，兴奋感少",
      'zh-TW': "推拉失敗，缺乏好奇心刺激，興奮感少",
      id: "Kegagalan tarik ulur, kurang stimulasi rasa ingin tahu, kurang kegembiraan",
      vi: "Thất bại kéo đẩy, thiếu kích thích tò mò, ít hứng thú"
    },
    advice: {
      ko: "너무 솔직한 것도 전략! 있는 그대로의 모습으로 승부하세요. 진심은 통합니다.",
      en: "Being too honest is also a strategy! Play with who you really are. Sincerity works.",
      ja: "正直すぎるのも戦略！ありのままの姿で勝負してください。本心は通じます。",
      'zh-CN': "太诚实也是策略！用真实的自己来较量。真心是有效的。",
      'zh-TW': "太誠實也是策略！用真實的自己來較量。真心是有效的。",
      id: "Terlalu jujur juga strategi! Mainkan dengan siapa Anda sebenarnya. Ketulusan berhasil.",
      vi: "Quá thành thật cũng là chiến lược! Hãy chơi với con người thật của bạn. Sự chân thành có hiệu quả."
    }
  },
  {
    type: "Type4",
    emoji: "😅",
    title: {
      ko: "썸 초보",
      en: "Flirting Beginner",
      ja: "フリート初心者",
      'zh-CN': "暧昧新手",
      'zh-TW': "曖昧新手",
      id: "Pemula Flirting",
      vi: "Người Mới Tán Tỉnh"
    },
    description: {
      ko: "아직 서툴러요! 연습이 필요해요. 썸이 뭔지는 알지만 실행이 어려운 초보입니다. 좋아하는 마음이 너무 티가 나서 숨길 수가 없습니다. 쿨한 척하고 싶지만 카톡은 1초 만에 읽고, 답장도 바로 하고, 만나자는 말에 너무 좋아합니다. 밀당은 무슨 밀당, 그냥 솔직하게 좋아합니다. 서툴지만 그 순수함이 오히려 매력이 될 수 있습니다.",
      en: "Still clumsy! Need practice. You're a beginner who knows what flirting is but finds it hard to execute. Your feelings are too obvious to hide. You want to act cool but read texts in 1 second, reply immediately, and get too excited when they suggest meeting. What push and pull? You just honestly like them. You're clumsy but that innocence can actually be charming.",
      ja: "まだ不器用です！練習が必要です。フリートが何かは知っているが実行が難しい初心者です。好きな気持ちが露骨すぎて隠せません。クールなふりをしたいがメッセージは1秒で読んで、すぐに返信し、会おうと言われると大喜びします。押し引きなんて、ただ正直に好きです。不器用ですがその純真さがかえって魅力になることがあります。",
      'zh-CN': "还很笨拙！需要练习。你是知道什么是暧昧但难以执行的初学者。你的感情太明显无法隐藏。你想装酷但1秒内读消息，立即回复，当对方建议见面时过于兴奋。什么推拉？你只是诚实地喜欢他们。你很笨拙但那种纯真实际上可能很有魅力。",
      'zh-TW': "還很笨拙！需要練習。你是知道什麼是曖昧但難以執行的初學者。你的感情太明顯無法隱藏。你想裝酷但1秒內讀訊息，立即回覆，當對方建議見面時過於興奮。什麼推拉？你只是誠實地喜歡他們。你很笨拙但那種純真實際上可能很有魅力。",
      id: "Masih canggung! Perlu latihan. Anda adalah pemula yang tahu apa itu merayu tapi sulit mengeksekusinya. Perasaan Anda terlalu jelas untuk disembunyikan. Anda ingin bertindak keren tapi membaca pesan dalam 1 detik, membalas langsung, dan terlalu bersemangat ketika mereka menyarankan bertemu. Tarik ulur apa? Anda hanya jujur menyukai mereka. Anda canggung tapi kepolosan itu sebenarnya bisa menawan.",
      vi: "Vẫn vụng về! Cần luyện tập. Bạn là người mới biết tán tỉnh là gì nhưng khó thực hiện. Cảm xúc của bạn quá rõ ràng không thể che giấu. Bạn muốn tỏ ra mát mẻ nhưng đọc tin nhắn trong 1 giây, trả lời ngay lập tức, và quá phấn khích khi họ đề xuất gặp mặt. Kéo đẩy gì? Bạn chỉ thành thật thích họ. Bạn vụng về nhưng sự ngây thơ đó thực sự có thể quyến rũ."
    },
    characteristics: {
      ko: "솔직함, 순수함, 티 나는 관심, 조급함",
      en: "Honesty, innocence, obvious interest, impatience",
      ja: "正直さ、純真さ、露骨な関心、せっかち",
      'zh-CN': "诚实、纯真、明显的兴趣、急躁",
      'zh-TW': "誠實、純真、明顯的興趣、急躁",
      id: "Kejujuran, kepolosan, ketertarikan yang jelas, ketidaksabaran",
      vi: "Thành thật, ngây thơ, sự quan tâm rõ ràng, thiếu kiên nhẫn"
    },
    impression: {
      ko: "귀여워, 순수해, 나 좋아하나봐",
      en: "Cute, innocent, seems to like me",
      ja: "可愛い、純粋、私を好きみたい",
      'zh-CN': "可爱、纯真、好像喜欢我",
      'zh-TW': "可愛、純真、好像喜歡我",
      id: "Lucu, polos, sepertinya suka saya",
      vi: "Dễ thương, ngây thơ, có vẻ thích tôi"
    },
    pros: {
      ko: "진심 전달, 귀여움, 호감 확실",
      en: "Sincere delivery, cuteness, clear affection",
      ja: "本心伝達、可愛さ、好意が確実",
      'zh-CN': "真心传达、可爱、好感确定",
      'zh-TW': "真心傳達、可愛、好感確定",
      id: "Penyampaian tulus, kelucuan, kasih sayang yang jelas",
      vi: "Truyền tải chân thành, dễ thương, tình cảm rõ ràng"
    },
    cons: {
      ko: "밀당 제로, 너무 빤한, 쉬워 보임, 주도권 없음",
      en: "Zero push-pull, too obvious, looks easy, no initiative",
      ja: "押し引きゼロ、露骨すぎ、簡単に見える、主導権なし",
      'zh-CN': "推拉为零、太明显、看起来容易、没有主导权",
      'zh-TW': "推拉為零、太明顯、看起來容易、沒有主導權",
      id: "Tarik ulur nol, terlalu jelas, terlihat mudah, tidak ada inisiatif",
      vi: "Kéo đẩy bằng không, quá rõ ràng, trông dễ dàng, không có chủ động"
    },
    advice: {
      ko: "조금만 여유를 가져보세요! 좋아하는 마음을 조금씩 나눠서 표현하면 더 효과적이에요.",
      en: "Take a little more time! Express your feelings little by little - it will be more effective.",
      ja: "少し余裕を持ってみてください！好きな気持ちを少しずつ分けて表現するとより効果的です。",
      'zh-CN': "稍微从容一点！一点点地表达你的感情会更有效。",
      'zh-TW': "稍微從容一點！一點點地表達你的感情會更有效。",
      id: "Ambil sedikit waktu! Ekspresikan perasaan Anda sedikit demi sedikit - akan lebih efektif.",
      vi: "Hãy dành một chút thời gian! Thể hiện cảm xúc của bạn từng chút một - sẽ hiệu quả hơn."
    }
  },
  {
    type: "Type5",
    emoji: "😰",
    title: {
      ko: "썸 불가능",
      en: "Flirting Impossible",
      ja: "フリート不可能",
      'zh-CN': "暧昧不可能",
      'zh-TW': "曖昧不可能",
      id: "Flirting Tidak Mungkin",
      vi: "Tán Tỉnh Không Thể"
    },
    description: {
      ko: "썸? 그게 뭐죠? 완전 초보! 솔직히 당신은 썸을 타기 어렵습니다. 너무 소극적이거나 아예 관심 없어 보이거나, 반대로 너무 적극적이어서 부담스럽습니다. 적당한 거리 조절을 못하고 극과 극을 오갑니다. 상대방 입장에서는 당신의 마음을 알 수가 없거나, 너무 뻔해서 재미가 없습니다. 썸의 기본부터 다시 배워야 할 것 같습니다.",
      en: "Flirting? What's that? Complete beginner! Honestly, you find it hard to flirt. You're either too passive or seem completely uninterested, or conversely too aggressive that it's burdensome. You can't control appropriate distance and swing between extremes. From the other person's perspective, they can't tell what you're thinking or you're too obvious to be interesting. You need to learn the basics of flirting from scratch.",
      ja: "フリート？それ何？完全初心者！正直に言うと、あなたはフリートが苦手です。消極的すぎるか全く関心がないように見えるか、逆に積極的すぎて負担になります。適度な距離調整ができず、極端と極端を行き来します。相手の立場ではあなたの気持ちがわからないか、露骨すぎて面白くありません。フリートの基本から学び直す必要がありそうです。",
      'zh-CN': "暧昧？那是什么？完全新手！老实说，你很难暧昧。你太被动或看起来完全不感兴趣，或者相反太积极而令人负担。你无法控制适当的距离，在极端之间摇摆。从对方的角度来看，他们无法知道你在想什么，或者你太明显而无聊。你需要从头学习暧昧的基础。",
      'zh-TW': "曖昧？那是什麼？完全新手！老實說，你很難曖昧。你太被動或看起來完全不感興趣，或者相反太積極而令人負擔。你無法控制適當的距離，在極端之間搖擺。從對方的角度來看，他們無法知道你在想什麼，或者你太明顯而無聊。你需要從頭學習曖昧的基礎。",
      id: "Merayu? Apa itu? Pemula total! Jujur saja, Anda sulit merayu. Anda terlalu pasif atau terlihat tidak tertarik sama sekali, atau sebaliknya terlalu agresif sehingga memberatkan. Anda tidak bisa mengontrol jarak yang tepat dan berayun antara ekstrem. Dari perspektif lawan, mereka tidak bisa tahu apa yang Anda pikirkan atau Anda terlalu jelas sehingga tidak menarik. Anda perlu mempelajari dasar-dasar merayu dari awal.",
      vi: "Tán tỉnh? Đó là gì? Hoàn toàn mới bắt đầu! Thành thật mà nói, bạn khó tán tỉnh. Bạn quá thụ động hoặc trông hoàn toàn không quan tâm, hoặc ngược lại quá tích cực đến mức gây gánh nặng. Bạn không thể kiểm soát khoảng cách phù hợp và dao động giữa các cực đoan. Từ góc độ đối phương, họ không thể biết bạn đang nghĩ gì hoặc bạn quá rõ ràng nên không thú vị. Bạn cần học những điều cơ bản về tán tỉnh từ đầu."
    },
    characteristics: {
      ko: "극단적, 거리 조절 실패, 타이밍 엉망, 센스 부족",
      en: "Extreme, distance control failure, timing messed up, lack of sensibility",
      ja: "極端、距離調整失敗、タイミングがめちゃくちゃ、センス不足",
      'zh-CN': "极端、距离控制失败、时机混乱、缺乏品味",
      'zh-TW': "極端、距離控制失敗、時機混亂、缺乏品味",
      id: "Ekstrem, kegagalan kontrol jarak, timing berantakan, kurang kepekaan",
      vi: "Cực đoan, thất bại kiểm soát khoảng cách, thời điểm lộn xộn, thiếu nhạy cảm"
    },
    impression: {
      ko: "뭐지 이 사람?, 관심 없나?, 너무 부담스러워",
      en: "What's with this person?, Not interested?, Too burdensome",
      ja: "この人何？、興味ない？、重すぎる",
      'zh-CN': "这人怎么回事？、不感兴趣？、太负担",
      'zh-TW': "這人怎麼回事？、不感興趣？、太負擔",
      id: "Ada apa dengan orang ini?, Tidak tertarik?, Terlalu memberatkan",
      vi: "Người này sao vậy?, Không quan tâm?, Quá gánh nặng"
    },
    pros: {
      ko: "솔직함? 예측 불가능?",
      en: "Honesty? Unpredictable?",
      ja: "正直さ？予測不可能？",
      'zh-CN': "诚实？不可预测？",
      'zh-TW': "誠實？不可預測？",
      id: "Kejujuran? Tidak dapat diprediksi?",
      vi: "Thành thật? Không thể dự đoán?"
    },
    cons: {
      ko: "밀당 불가, 관계 발전 어려움, 오해 유발",
      en: "Push-pull impossible, difficult relationship development, causes misunderstanding",
      ja: "押し引き不可能、関係発展困難、誤解を招く",
      'zh-CN': "推拉不可能、关系发展困难、引起误解",
      'zh-TW': "推拉不可能、關係發展困難、引起誤解",
      id: "Tarik ulur tidak mungkin, perkembangan hubungan sulit, menyebabkan kesalahpahaman",
      vi: "Kéo đẩy không thể, phát triển mối quan hệ khó khăn, gây hiểu lầm"
    },
    advice: {
      ko: "천천히 배워가세요! 상대방의 반응을 보면서 조금씩 조절하는 연습이 필요해요. 유튜브나 친구 조언을 참고하세요!",
      en: "Learn slowly! You need to practice adjusting little by little while watching the other person's reactions. Refer to YouTube or friends' advice!",
      ja: "ゆっくり学んでください！相手の反応を見ながら少しずつ調整する練習が必要です。YouTubeや友達のアドバイスを参考にしてください！",
      'zh-CN': "慢慢学习！你需要练习在观察对方反应的同时一点点调整。参考YouTube或朋友的建议！",
      'zh-TW': "慢慢學習！你需要練習在觀察對方反應的同時一點點調整。參考YouTube或朋友的建議！",
      id: "Belajar perlahan! Anda perlu berlatih menyesuaikan sedikit demi sedikit sambil melihat reaksi lawan. Rujuk YouTube atau saran teman!",
      vi: "Hãy học từ từ! Bạn cần luyện tập điều chỉnh từng chút một trong khi quan sát phản ứng của đối phương. Tham khảo YouTube hoặc lời khuyên của bạn bè!"
    }
  },
  {
    type: "Type6",
    emoji: "🌿",
    title: {
      ko: "썸 자연인",
      en: "Natural Flirter",
      ja: "フリート自然体",
      'zh-CN': "暧昧自然体",
      'zh-TW': "曖昧自然體",
      id: "Flirter Alami",
      vi: "Người Tán Tỉnh Tự Nhiên"
    },
    description: {
      ko: "전략 없는 솔직함! 자연스러운 매력. 당신은 썸이라는 개념 자체가 없습니다. 밀당도, 전략도 없이 그냥 좋으면 좋다고, 보고 싶으면 보고 싶다고 합니다. 어떻게 보면 가장 초보지만, 어떻게 보면 가장 고수입니다. 계산 없는 진심이 오히려 가장 강력한 무기가 될 수 있습니다. 상대방이 당신의 순수함에 매력을 느낄 수도, 너무 쉬워 보여서 관심을 잃을 수도 있습니다.",
      en: "Honesty without strategy! Natural charm. You don't have the concept of flirting itself. No push-pull, no strategy - you just say you like them if you like them, you want to see them if you want to see them. In a way you're the most beginner, but in a way you're the most expert. Sincere feelings without calculation can actually be the most powerful weapon. The other person might be attracted to your innocence, or lose interest because you seem too easy.",
      ja: "戦略のない正直さ！自然な魅力。あなたにはフリートという概念自体がありません。押し引きも戦略もなく、好きなら好きだと言い、会いたいなら会いたいと言います。ある意味では最も初心者ですが、ある意味では最も達人です。計算のない本心がかえって最も強力な武器になることがあります。相手はあなたの純真さに魅力を感じるかもしれませんし、簡単すぎて興味を失うかもしれません。",
      'zh-CN': "没有策略的诚实！自然魅力。你根本没有暧昧的概念。没有推拉，没有策略——喜欢就说喜欢，想见就说想见。从某种角度看你是最新手，但从某种角度看你是最专家。没有计算的真心实际上可能是最强大的武器。对方可能被你的纯真吸引，也可能因为你看起来太容易而失去兴趣。",
      'zh-TW': "沒有策略的誠實！自然魅力。你根本沒有曖昧的概念。沒有推拉，沒有策略——喜歡就說喜歡，想見就說想見。從某種角度看你是最新手，但從某種角度看你是最專家。沒有計算的真心實際上是可能最強大的武器。對方可能被你的純真吸引，也可能因為你看起來太容易而失去興趣。",
      id: "Kejujuran tanpa strategi! Daya tarik alami. Anda tidak memiliki konsep merayu itu sendiri. Tidak ada tarik ulur, tidak ada strategi - Anda hanya mengatakan suka jika suka, ingin bertemu jika ingin bertemu. Dalam arti tertentu Anda adalah pemula paling besar, tapi dalam arti tertentu Anda adalah ahli paling besar. Perasaan tulus tanpa perhitungan sebenarnya bisa menjadi senjata paling kuat. Lawan mungkin tertarik pada kepolosan Anda, atau kehilangan minat karena Anda terlihat terlalu mudah.",
      vi: "Thành thật không chiến lược! Sức hấp dẫn tự nhiên. Bạn không có khái niệm về tán tỉnh. Không kéo đẩy, không chiến lược - bạn chỉ nói thích nếu thích, muốn gặp nếu muốn gặp. Theo một cách nào đó bạn là người mới nhất, nhưng theo cách khác bạn là chuyên gia nhất. Cảm xúc chân thành không tính toán thực sự có thể là vũ khí mạnh nhất. Đối phương có thể bị thu hút bởi sự ngây thơ của bạn, hoặc mất hứng thú vì bạn trông quá dễ dàng."
    },
    characteristics: {
      ko: "무전략, 순수함, 솔직함, 자연스러움",
      en: "No strategy, innocence, honesty, naturalness",
      ja: "無戦略、純真さ、正直さ、自然さ",
      'zh-CN': "无策略、纯真、诚实、自然",
      'zh-TW': "無策略、純真、誠實、自然",
      id: "Tanpa strategi, kepolosan, kejujuran, kewajaran",
      vi: "Không chiến lược, ngây thơ, thành thật, tự nhiên"
    },
    impression: {
      ko: "진심인가봐, 순수해, 편해 또는 너무 쉬워",
      en: "Seems sincere, innocent, comfortable or too easy",
      ja: "本心みたい、純粋、楽または簡単すぎる",
      'zh-CN': "似乎真诚、纯真、舒适或太容易",
      'zh-TW': "似乎真誠、純真、舒適或太容易",
      id: "Sepertinya tulus, polos, nyaman atau terlalu mudah",
      vi: "Có vẻ chân thành, ngây thơ, thoải mái hoặc quá dễ dàng"
    },
    pros: {
      ko: "진심 전달, 편안함, 신뢰감",
      en: "Sincere delivery, comfort, sense of trust",
      ja: "本心伝達、快適さ、信頼感",
      'zh-CN': "真心传达、舒适、信任感",
      'zh-TW': "真心傳達、舒適、信任感",
      id: "Penyampaian tulus, kenyamanan, rasa percaya",
      vi: "Truyền tải chân thành, thoải mái, cảm giác tin tưởng"
    },
    cons: {
      ko: "설렘 부족, 너무 쉬움, 호기심 자극 제로",
      en: "Lack of excitement, too easy, zero curiosity stimulation",
      ja: "ドキドキ感不足、簡単すぎる、好奇心刺激ゼロ",
      'zh-CN': "缺乏兴奋、太容易、好奇心刺激为零",
      'zh-TW': "缺乏興奮、太容易、好奇心刺激為零",
      id: "Kurang kegembiraan, terlalu mudah, stimulasi rasa ingin tahu nol",
      vi: "Thiếu hứng thú, quá dễ dàng, kích thích tò mò bằng không"
    },
    advice: {
      ko: "당신의 솔직함이 매력입니다! 하지만 가끔은 조금 신비로움도 필요해요. 모든 걸 다 보여주지 말고 조금씩 알아가게 하세요.",
      en: "Your honesty is charming! But sometimes you need a little mystery too. Don't show everything at once, let them discover you little by little.",
      ja: "あなたの正直さが魅力です！でも時々は少しミステリーも必要です。すべてを見せずに、少しずつ知ってもらいましょう。",
      'zh-CN': "你的诚实很有魅力！但有时也需要一点神秘感。不要一下子展示所有，让他们一点点了解你。",
      'zh-TW': "你的誠實很有魅力！但有時也需要一點神秘感。不要一下子展示所有，讓他們一點點了解你。",
      id: "Kejujuran Anda menawan! Tapi kadang-kadang Anda juga perlu sedikit misteri. Jangan tunjukkan semuanya sekaligus, biarkan mereka mengenal Anda sedikit demi sedikit.",
      vi: "Sự thành thật của bạn rất quyến rũ! Nhưng đôi khi bạn cũng cần một chút bí ẩn. Đừng cho thấy tất cả cùng một lúc, hãy để họ khám phá bạn từng chút một."
    }
  }
];

export function calculateFlirtingResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  // 기본 점수 계산
  answers.forEach(answer => {
    if (answer && typeof answer === 'object') {
      Object.keys(answer).forEach(type => {
        if (scores[type as keyof typeof scores] !== undefined) {
          scores[type as keyof typeof scores] += answer[type];
        }
      });
    }
  });
  
  // 특별 보너스 계산
  // 조건 1: A를 5-7개 AND B를 5-7개 선택 시 → Type3(+30점)
  const aCount = answers.filter(answer => answer && answer.Type1 > 0).length;
  const bCount = answers.filter(answer => answer && answer.Type4 > 0).length;
  
  if (aCount >= 5 && aCount <= 7 && bCount >= 5 && bCount <= 7) {
    scores.Type3 += 30;
  }
  
  // 조건 2: Q3, Q9, Q11 중 B를 2개 이상 선택 시 → Type5(+20점)
  const q3B = answers[2] && answers[2].Type5 > 0;
  const q9B = answers[8] && answers[8].Type5 > 0;
  const q11B = answers[10] && answers[10].Type5 > 0;
  
  const bCountInSpecial = [q3B, q9B, q11B].filter(Boolean).length;
  if (bCountInSpecial >= 2) {
    scores.Type5 += 20;
  }
  
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
