export interface HonestyVsRestraintQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: {
      honesty: number;
      restraint: number;
    };
  }[];
}

export interface HonestyVsRestraintResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  strengths: Record<string, string>[];
  weaknesses: Record<string, string>[];
  score: Record<string, string>;
  advice: Record<string, string>;
}

export const honestyVsRestraintQuestions: HonestyVsRestraintQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 약속을 또 어겼을 때?",
      en: "When a friend breaks a promise again?",
      ja: "友達がまた約束を破った時？",
      'zh-CN': "朋友再次爽约时？",
      'zh-TW': "朋友再次爽約時？",
      vi: "Khi bạn bè lại thất hứa?",
      id: "Ketika teman mengingkari janji lagi?"
    },
    options: [
      {
        text: {
          ko: "\"진짜 화난다. 왜 맨날 이래?\"",
          en: "\"I'm really angry. Why do you always do this?\"",
          ja: "「本当に怒る。なんでいつもこんなの？」",
          'zh-CN': "「真的很生气。为什么总是这样？」",
          'zh-TW': "「真的很生氣。為什麼總是這樣？」",
          vi: "\"Thực sự tức giận. Sao bạn lúc nào cũng thế?\"",
          id: "\"Benar-benar marah. Kenapa kamu selalu begini?\""
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "\"괜찮아...\" 속으로 삭임",
          en: "\"It's okay...\" Bottle it up inside",
          ja: "「大丈夫...」中にためる",
          'zh-CN': "「没关系...」憋在心里",
          'zh-TW': "「沒關係...」憋在心裡",
          vi: "\"Không sao...\" Nuốt vào trong",
          id: "\"Tidak apa-apa...\" Menyimpan di dalam"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "누군가에게 호감이 생겼을 때?",
      en: "When you develop feelings for someone?",
      ja: "誰かに好意を持った時？",
      'zh-CN': "对某人有好感时？",
      'zh-TW': "對某人有好感時？",
      vi: "Khi có cảm tình với ai đó?",
      id: "Ketika punya perasaan pada seseorang?"
    },
    options: [
      {
        text: {
          ko: "관심 표현하고 먼저 다가감",
          en: "Express interest and approach first",
          ja: "関心を表現して先に近づく",
          'zh-CN': "表达好感并主动接近",
          'zh-TW': "表達好感並主動接近",
          vi: "Bày tỏ quan tâm và chủ động tiếp cận",
          id: "Ekspresikan ketertarikan dan mendekati duluan"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "티 안 내고 지켜봄",
          en: "Don't show it and just watch",
          ja: "気づかれないように観察する",
          'zh-CN': "不表现出来只默默关注",
          'zh-TW': "不表現出來只默默關注",
          vi: "Không thể hiện ra và chỉ quan sát",
          id: "Tidak menunjukkan dan hanya mengamati"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "상대방의 말이나 행동이 불편할 때?",
      en: "When someone's words or actions make you uncomfortable?",
      ja: "相手の言葉や行動が不快な時？",
      'zh-CN': "对方的言行让你不舒服时？",
      'zh-TW': "對方的言行讓你不舒服時？",
      vi: "Khi lời nói hoặc hành động của ai đó khiến bạn khó chịu?",
      id: "Ketika kata-kata atau tindakan seseorang membuat tidak nyaman?"
    },
    options: [
      {
        text: {
          ko: "\"그건 좀 별로인 것 같아\"",
          en: "\"That's not really good\"",
          ja: "「それはちょっと微妙だと思う」",
          'zh-CN': "「那不太好」",
          'zh-TW': "「那不太好」",
          vi: "\"Điều đó không ổn lắm\"",
          id: "\"Itu tidak terlalu baik\""
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "참고 넘어감",
          en: "Endure and let it pass",
          ja: "我慢して通り過ぎる",
          'zh-CN': "忍耐着过去",
          'zh-TW': "忍耐著過去",
          vi: "Chịu đựng và bỏ qua",
          id: "Tahan dan biarkan berlalu"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "기분이 안 좋을 때?",
      en: "When you're in a bad mood?",
      ja: "機嫌が悪い時？",
      'zh-CN': "心情不好时？",
      'zh-TW': "心情不好時？",
      vi: "Khi tâm trạng không tốt?",
      id: "Ketika suasana hati tidak baik?"
    },
    options: [
      {
        text: {
          ko: "표정이나 말투로 바로 드러남",
          en: "Shows immediately in expression or tone",
          ja: "表情や口調ですぐ現れる",
          'zh-CN': "立即表现在表情或语气上",
          'zh-TW': "立即表現在表情或語氣上",
          vi: "Thể hiện ngay trên nét mặt hoặc giọng điệu",
          id: "Langsung terlihat dari ekspresi atau nada suara"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "내색 안 하고 혼자 정리",
          en: "Don't show it and deal with it alone",
          ja: "表情に出さず一人で整理",
          'zh-CN': "不露声色独自消化",
          'zh-TW': "不露聲色獨自消化",
          vi: "Không thể hiện ra và tự xử lý một mình",
          id: "Tidak menunjukkan dan menyelesaikan sendiri"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "선물을 받았는데 마음에 안 들 때?",
      en: "When you receive a gift you don't like?",
      ja: "プレゼントをもらったけど気に入らない時？",
      'zh-CN': "收到不喜欢的礼物时？",
      'zh-TW': "收到不喜歡的禮物時？",
      vi: "Khi nhận được món quà không thích?",
      id: "Ketika menerima hadiah yang tidak disukai?"
    },
    options: [
      {
        text: {
          ko: "\"음... 내 스타일은 아닌데\"",
          en: "\"Um... It's not really my style\"",
          ja: "「うーん...私のスタイルじゃないな」",
          'zh-CN': "「嗯...不是我的风格」",
          'zh-TW': "「嗯...不是我的風格」",
          vi: "\"Ừm... Không phải phong cách của tôi\"",
          id: "\"Um... Bukan gaya saya\""
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "\"고마워!\" 좋은 척",
          en: "\"Thanks!\" Pretend to like it",
          ja: "「ありがとう！」気に入ったふり",
          'zh-CN': "「谢谢！」假装喜欢",
          'zh-TW': "「謝謝！」假裝喜歡",
          vi: "\"Cảm ơn!\" Giả vờ thích",
          id: "\"Terima kasih!\" Pura-pura suka"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구가 \"나 어때?\"라고 물었을 때?",
      en: "When a friend asks \"How do I look?\"?",
      ja: "友達が「私どう？」と聞いた時？",
      'zh-CN': "朋友问「我怎么样？」时？",
      'zh-TW': "朋友問「我怎麼樣？」時？",
      vi: "Khi bạn hỏi \"Tôi trông thế nào?\"?",
      id: "Ketika teman bertanya \"Bagaimana penampilanku?\"?"
    },
    options: [
      {
        text: {
          ko: "솔직하게 있는 그대로 말함",
          en: "Tell them honestly as it is",
          ja: "正直にありのままを言う",
          'zh-CN': "诚实地说出真实想法",
          'zh-TW': "誠實地說出真實想法",
          vi: "Nói thật như nó vốn có",
          id: "Katakan dengan jujur apa adanya"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "좋은 점만 골라서 말함",
          en: "Only pick out the good points",
          ja: "良い点だけ選んで言う",
          'zh-CN': "只挑好的说",
          'zh-TW': "只挑好的說",
          vi: "Chỉ chọn những điểm tốt để nói",
          id: "Hanya pilih poin bagus untuk dikatakan"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "화가 났을 때 당신은?",
      en: "When you're angry?",
      ja: "怒った時のあなたは？",
      'zh-CN': "你生气时？",
      'zh-TW': "你生氣時？",
      vi: "Khi bạn tức giận?",
      id: "Ketika Anda marah?"
    },
    options: [
      {
        text: {
          ko: "바로 말하고 풀어버림",
          en: "Speak up immediately and vent",
          ja: "すぐ言って発散する",
          'zh-CN': "立即说出来发泄",
          'zh-TW': "立即說出來發洩",
          vi: "Nói ngay và giải tỏa",
          id: "Bicara langsung dan melampiaskan"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "시간 두고 식힌 후 말함",
          en: "Take time to cool down before speaking",
          ja: "時間を置いて冷ましてから言う",
          'zh-CN': "等冷静下来再说",
          'zh-TW': "等冷靜下來再說",
          vi: "Chờ thời gian để nguội rồi mới nói",
          id: "Berikan waktu untuk mendingin dulu sebelum bicara"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "좋아하는 마음을 표현하는 방식은?",
      en: "How do you express affection?",
      ja: "好きな気持ちを表現する方法は？",
      'zh-CN': "你如何表达好感？",
      'zh-TW': "你如何表達好感？",
      vi: "Cách bạn thể hiện tình cảm thích là gì?",
      id: "Bagaimana cara Anda mengekspresikan perasaan suka?"
    },
    options: [
      {
        text: {
          ko: "\"좋아해\" 직접적으로 말함",
          en: "\"I like you\" Say it directly",
          ja: "「好き」と直接言う",
          'zh-CN': "「喜欢你」直接说出来",
          'zh-TW': "「喜歡你」直接說出來",
          vi: "\"Tôi thích bạn\" Nói trực tiếp",
          id: "\"Aku suka kamu\" Katakan langsung"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "행동으로 은근히 표현",
          en: "Express subtly through actions",
          ja: "行動で静かに表現",
          'zh-CN': "通过行动含蓄表达",
          'zh-TW': "通過行動含蓄表達",
          vi: "Thể hiện kín đáo qua hành động",
          id: "Ekspresikan secara halus melalui tindakan"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "비판을 해야 할 상황이라면?",
      en: "If you need to criticize?",
      ja: "批判をしなければならない状況なら？",
      'zh-CN': "如果需要批评时？",
      'zh-TW': "如果需要批評時？",
      vi: "Nếu cần phê bình?",
      id: "Jika perlu mengkritik?"
    },
    options: [
      {
        text: {
          ko: "할 말은 해야 한다고 생각",
          en: "Think it's necessary to speak up",
          ja: "言うべきことは言うべきだと思う",
          'zh-CN': "认为该说就得说",
          'zh-TW': "認為該說就得說",
          vi: "Nghĩ rằng cần phải nói",
          id: "Berpikir perlu mengatakan"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "굳이 말 안 해도 된다고 생각",
          en: "Think it's okay not to say anything",
          ja: "わざわざ言わなくてもいいと思う",
          'zh-CN': "认为没必要说",
          'zh-TW': "認為沒必要說",
          vi: "Nghĩ không nhất thiết phải nói",
          id: "Berpikir tidak perlu mengatakan"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "속상한 일이 있을 때?",
      en: "When something upsetting happens?",
      ja: "辛いことがある時？",
      'zh-CN': "有伤心事时？",
      'zh-TW': "有傷心事時？",
      vi: "Khi có chuyện buồn?",
      id: "Ketika ada hal yang menyedihkan?"
    },
    options: [
      {
        text: {
          ko: "누군가에게 바로 털어놓음",
          en: "Immediately vent to someone",
          ja: "誰かにすぐに打ち明ける",
          'zh-CN': "马上找人倾诉",
          'zh-TW': "馬上找人傾訴",
          vi: "Ngay lập tức trút bỏ với ai đó",
          id: "Segera curahkan kepada seseorang"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "혼자 삭이거나 일기로 정리",
          en: "Keep it to myself or write in diary",
          ja: "一人で抱え込むか日記に書く",
          'zh-CN': "独自消化或写日记",
          'zh-TW': "獨自消化或寫日記",
          vi: "Tự xử lý một mình hoặc viết nhật ký",
          id: "Simpan sendiri atau tulis di diary"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 감정 표현 철학은?",
      en: "What's your philosophy on expressing emotions?",
      ja: "あなたの感情表現の哲学は？",
      'zh-CN': "你的情感表达哲学是？",
      'zh-TW': "你的情感表達哲學是？",
      vi: "Triết lý biểu đạt cảm xúc của bạn là gì?",
      id: "Apa filosofi Anda dalam mengekspresikan emosi?"
    },
    options: [
      {
        text: {
          ko: "솔직한 게 진실된 관계다",
          en: "Honesty makes for genuine relationships",
          ja: "正直さが真実の関係を作る",
          'zh-CN': "诚实造就真诚的关系",
          'zh-TW': "誠實造就真誠的關係",
          vi: "Thành thật tạo nên mối quan hệ chân thật",
          id: "Kejujuran menciptakan hubungan yang tulus"
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "절제하는 게 성숙한 태도다",
          en: "Restraint is a mature attitude",
          ja: "自制することが成熟した態度",
          'zh-CN': "节制是成熟的态度",
          'zh-TW': "節制是成熟的態度",
          vi: "Tự chế là thái độ trưởng thành",
          id: "Menahan diri adalah sikap dewasa"
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "사람들이 당신을 어떻게 평가할까?",
      en: "How do people evaluate you?",
      ja: "人々はあなたをどう評価する？",
      'zh-CN': "人们如何评价你？",
      'zh-TW': "人們如何評價你？",
      vi: "Mọi người đánh giá bạn như thế nào?",
      id: "Bagaimana orang menilai Anda?"
    },
    options: [
      {
        text: {
          ko: "\"속마음 다 보여서 편해\"",
          en: "\"So easy to see what you're thinking\"",
          ja: "「本心が全部見えて楽」",
          'zh-CN': "「很容易看出你的想法」",
          'zh-TW': "「很容易看出你的想法」",
          vi: "\"Dễ thấy ý nghĩ nên thoải mái\"",
          id: "\"Mudah melihat apa yang dipikirkan\""
        },
        scores: { honesty: 2, restraint: 0 }
      },
      {
        text: {
          ko: "\"뭘 생각하는지 모르겠어\"",
          en: "\"Can't tell what you're thinking\"",
          ja: "「何を考えているかわからない」",
          'zh-CN': "「不知道你在想什么」",
          'zh-TW': "「不知道你在想什麼」",
          vi: "\"Không biết đang nghĩ gì\"",
          id: "\"Tidak tahu apa yang dipikirkan\""
        },
        scores: { honesty: 0, restraint: 2 }
      }
    ]
  }
];

export const honestyVsRestraintResults: HonestyVsRestraintResult[] = [
  {
    type: "Type1",
    emoji: "💥",
    title: {
      ko: "극단적 솔직형",
      en: "Extreme Honesty Type",
      ja: "極端な正直型",
      'zh-CN': "极端诚实型",
      'zh-TW': "極端誠實型",
      vi: "Kiểu Thành Thật Cực Đoan",
      id: "Tipe Kejujuran Ekstrem"
    },
    shortDescription: {
      ko: "필터 제로! 감정 그대로 표현하는 사람",
      en: "Zero filter! Expresses emotions as they are",
      ja: "フィルターゼロ！感情そのまま表現する人",
      'zh-CN': "零滤镜！如实表达情感的人",
      'zh-TW': "零濾鏡！如實表達情感的人",
      vi: "Không lọc! Người thể hiện cảm xúc như vốn có",
      id: "Tanpa filter! Mengekspresikan emosi apa adanya"
    },
    description: {
      ko: "모든 감정을 즉각적으로 표현합니다. 화나면 바로 화내고, 좋으면 바로 말합니다. 속마음을 숨기지 못하고 생각나는 대로 말합니다. 솔직하고 진솔하지만 때로는 충동적이고 상처를 줄 수 있습니다. 감정 조절이 부족해 관계에서 문제가 생길 수 있으니 최소한의 절제가 필요합니다.",
      en: "Expresses all emotions immediately. When angry, shows anger immediately. When happy, says it right away. Can't hide inner thoughts and speaks whatever comes to mind. Honest and sincere but sometimes impulsive and can hurt others. Lacks emotional regulation which can cause relationship problems, so minimal restraint is needed.",
      ja: "すべての感情を即座に表現します。怒ったらすぐ怒り、良いと思ったらすぐ言います。本心を隠せず、思いついたままを話します。正直で誠実ですが、時には衝動的で相手を傷つけることがあります。感情調節が不足し、関係で問題が生じる可能性があるため、最低限の自制が必要です。",
      'zh-CN': "立即表达所有情感。生气就表现出生气，喜欢就直接说。无法隐藏内心想法，想到什么说什么。诚实真诚但有时冲动且可能伤人。缺乏情绪调节，可能导致关系问题，需要最低限度的节制。",
      'zh-TW': "立即表達所有情感。生氣就表現出生氣，喜歡就直接說。無法隱藏內心想法，想到什麼說什麼。誠實真誠但有時衝動且可能傷人。缺乏情緒調節，可能導致關係問題，需要最低限度的節制。",
      vi: "Thể hiện mọi cảm xúc ngay lập tức. Giận là thể hiện giận, thích là nói ngay. Không thể giấu suy nghĩ bên trong và nói ra những gì nghĩ đến. Thành thật và chân thành nhưng đôi khi bốc đồng và có thể làm tổn thương. Thiếu điều tiết cảm xúc có thể gây vấn đề trong mối quan hệ, nên cần sự tự chế tối thiểu.",
      id: "Mengekspresikan semua emosi segera. Saat marah, langsung menunjukkan kemarahan. Saat senang, langsung mengatakannya. Tidak bisa menyembunyikan pikiran batin dan berbicara apa yang terlintas. Jujur dan tulus tapi kadang impulsif dan bisa menyakiti. Kurang regulasi emosi bisa menyebabkan masalah hubungan, jadi butuh sedikit pengekangan."
    },
    strengths: [
      {
        ko: "솔직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        vi: "Thành thật",
        id: "Kejujuran"
      },
      {
        ko: "진실됨",
        en: "Sincerity",
        ja: "誠実さ",
        'zh-CN': "真诚",
        'zh-TW': "真誠",
        vi: "Chân thành",
        id: "Ketulusan"
      },
      {
        ko: "스트레스 해소",
        en: "Stress relief",
        ja: "ストレス解消",
        'zh-CN': "减压",
        'zh-TW': "減壓",
        vi: "Giải tỏa căng thẳng",
        id: "Pelepasan stres"
      },
      {
        ko: "후련함",
        en: "Relief",
        ja: "すっきり",
        'zh-CN': "解脱",
        'zh-TW': "解脫",
        vi: "Sảng khoái",
        id: "Kelegaan"
      }
    ],
    weaknesses: [
      {
        ko: "충동적",
        en: "Impulsive",
        ja: "衝動的",
        'zh-CN': "冲动",
        'zh-TW': "衝動",
        vi: "Bốc đồng",
        id: "Impulsif"
      },
      {
        ko: "상처 주기 쉬움",
        en: "Easily hurts others",
        ja: "傷つけやすい",
        'zh-CN': "容易伤人",
        'zh-TW': "容易傷人",
        vi: "Dễ làm tổn thương",
        id: "Mudah menyakiti"
      },
      {
        ko: "후회 많음",
        en: "Lots of regrets",
        ja: "後悔が多い",
        'zh-CN': "后悔多",
        'zh-TW': "後悔多",
        vi: "Nhiều hối tiếc",
        id: "Banyak penyesalan"
      }
    ],
    score: {
      ko: "솔직 100% / 절제 0%",
      en: "Honesty 100% / Restraint 0%",
      ja: "正直100% / 自制0%",
      'zh-CN': "诚实100% / 节制0%",
      'zh-TW': "誠實100% / 節制0%",
      vi: "Thành thật 100% / Tự chế 0%",
      id: "Kejujuran 100% / Pengekangan 0%"
    },
    advice: {
      ko: "솔직함은 좋지만 3초만 생각하고 말하세요! \"이 말이 상대를 다치게 하진 않을까?\" 한 번만 생각해봐요.",
      en: "Honesty is good, but think for 3 seconds before speaking! 'Will this hurt the other person?' Just think once.",
      ja: "正直さは良いですが、3秒だけ考えてから話してください！「この言葉が相手を傷つけないか？」一度だけ考えてみてください。",
      'zh-CN': "诚实很好，但说话前想3秒！「这句话会伤害对方吗？」只想想就好。",
      'zh-TW': "誠實很好，但說話前想3秒！「這句話會傷害對方嗎？」只想想就好。",
      vi: "Thành thật là tốt, nhưng hãy nghĩ 3 giây trước khi nói! \"Câu này có làm người khác tổn thương không?\" Chỉ nghĩ một lần thôi.",
      id: "Kejujuran itu baik, tapi pikirkan 3 detik sebelum berbicara! 'Apakah ini akan menyakiti orang lain?' Pikirkan sekali saja."
    }
  },
  {
    type: "Type2",
    emoji: "🔥",
    title: {
      ko: "솔직 우선형",
      en: "Honesty Priority Type",
      ja: "正直優先型",
      'zh-CN': "诚实优先型",
      'zh-TW': "誠實優先型",
      vi: "Kiểu Ưu Tiên Thành Thật",
      id: "Tipe Prioritas Kejujuran"
    },
    shortDescription: {
      ko: "생각은 하지만 솔직하게! 표현하는 사람",
      en: "Thinks but expresses honestly!",
      ja: "考えるけど正直に！表現する人",
      'zh-CN': "会思考但诚实地表达！",
      'zh-TW': "會思考但誠實地表達！",
      vi: "Có suy nghĩ nhưng thể hiện thành thật!",
      id: "Berpikir tapi ekspresikan dengan jujur!"
    },
    description: {
      ko: "대체로 솔직하게 표현하지만 최소한의 절제는 있습니다. 감정을 숨기지 않되 전달 방식을 조금 고려합니다. \"화나는데\"보다 \"이 부분이 좀 불편했어\"라고 말합니다. 진실하면서도 배려있는 가장 이상적인 솔직함을 가진 타입입니다.",
      en: "Generally expresses honestly but has minimal restraint. Doesn't hide emotions but considers delivery slightly. Says \"This part was a bit uncomfortable\" rather than \"I'm angry.\" Has the most ideal honesty that's both genuine and considerate.",
      ja: "全体的に正直に表現しますが、最低限の自制はあります。感情を隠さないが、伝え方を少し考慮します。「怒っている」より「この部分がちょっと不快だった」と言います。真実でありながら配慮のある最も理想的な正直さを持つタイプです。",
      'zh-CN': "大体诚实表达但有最低限度的节制。不隐藏情感但稍微考虑表达方式。说「这部分有点不舒服」而不是「我生气了」。拥有最理想的既真诚又体贴的诚实。",
      'zh-TW': "大體誠實表達但有最低限度的節制。不隱藏情感但稍微考慮表達方式。說「這部分有點不舒服」而不是「我生氣了」。擁有最理想的既真誠又體貼的誠實。",
      vi: "Nhìn chung thể hiện thành thật nhưng có sự tự chế tối thiểu. Không giấu cảm xúc nhưng cân nhắc cách truyền đạt một chút. Nói \"Phần này hơi khó chịu\" thay vì \"Tôi đang giận\". Có sự thành thật lý tưởng nhất vừa chân thật vừa quan tâm.",
      id: "Umumnya mengekspresikan dengan jujur tapi ada sedikit pengekangan. Tidak menyembunyikan emosi tapi mempertimbangkan cara penyampaian sedikit. Mengatakan \"Bagian ini agak tidak nyaman\" daripada \"Saya marah\". Memiliki kejujuran paling ideal yang tulus dan penuh pertimbangan."
    },
    strengths: [
      {
        ko: "솔직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        vi: "Thành thật",
        id: "Kejujuran"
      },
      {
        ko: "신뢰",
        en: "Trust",
        ja: "信頼",
        'zh-CN': "信任",
        'zh-TW': "信任",
        vi: "Tin cậy",
        id: "Kepercayaan"
      },
      {
        ko: "최소한의 배려",
        en: "Minimal consideration",
        ja: "最低限の配慮",
        'zh-CN': "最低限度的体谅",
        'zh-TW': "最低限度的體諒",
        vi: "Quan tâm tối thiểu",
        id: "Pertimbangan minimal"
      }
    ],
    weaknesses: [
      {
        ko: "가끔 충동적",
        en: "Sometimes impulsive",
        ja: "時々衝動的",
        'zh-CN': "偶尔冲动",
        'zh-TW': "偶爾衝動",
        vi: "Đôi khi bốc đồng",
        id: "Kadang impulsif"
      },
      {
        ko: "말 실수",
        en: "Slip of tongue",
        ja: "口走り",
        'zh-CN': "失言",
        'zh-TW': "失言",
        vi: "Sơ suất lời nói",
        id: "Salah bicara"
      }
    ],
    score: {
      ko: "솔직 75% / 절제 25%",
      en: "Honesty 75% / Restraint 25%",
      ja: "正直75% / 自制25%",
      'zh-CN': "诚实75% / 节制25%",
      'zh-TW': "誠實75% / 節制25%",
      vi: "Thành thật 75% / Tự chế 25%",
      id: "Kejujuran 75% / Pengekangan 25%"
    },
    advice: {
      ko: "완벽해요! 솔직하되 배려하는 당신의 스타일이 최고입니다. 지금처럼만 유지하세요!",
      en: "Perfect! Your style of being honest yet considerate is the best. Just keep it as is!",
      ja: "完璧です！正直でありながら配慮するあなたのスタイルが最高です。今のまま維持してください！",
      'zh-CN': "完美！你既诚实又体贴的风格最好。就这样保持下去！",
      'zh-TW': "完美！你既誠實又體貼的風格最好。就這樣保持下去！",
      vi: "Hoàn hảo! Phong cách thành thật nhưng quan tâm của bạn là tốt nhất. Hãy giữ nguyên như vậy!",
      id: "Sempurna! Gaya Anda yang jujur namun penuh pertimbangan adalah yang terbaik. Pertahankan seperti sekarang!"
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "균형잡힌 중도형",
      en: "Balanced Middle Type",
      ja: "バランスの取れた中道型",
      'zh-CN': "平衡中庸型",
      'zh-TW': "平衡中庸型",
      vi: "Kiểu Cân Bằng Trung Dung",
      id: "Tipe Seimbang Tengah"
    },
    shortDescription: {
      ko: "때로는 솔직, 때로는 절제! 상황 따라",
      en: "Sometimes honest, sometimes restrained! Depends on situation",
      ja: "時には正直、時には自制！状況次第",
      'zh-CN': "有时诚实，有时节制！视情况而定",
      'zh-TW': "有時誠實，有時節制！視情況而定",
      vi: "Đôi khi thành thật, đôi khi tự chế! Tùy tình huống",
      id: "Kadang jujur, kadang menahan diri! Tergantung situasi"
    },
    description: {
      ko: "솔직함과 절제의 완벽한 균형을 가졌습니다. 중요한 것은 솔직하게 말하고, 사소한 것은 넘어갑니다. 상대와 상황을 보고 표현 수위를 조절합니다. 가장 현명하고 성숙한 감정 표현 방식입니다. 유연하고 적응력이 뛰어납니다.",
      en: "Has perfect balance between honesty and restraint. Speaks honestly about important things, lets minor things pass. Adjusts expression level based on the person and situation. The wisest and most mature way of expressing emotions. Flexible and highly adaptable.",
      ja: "正直さと自制の完璧なバランスを持っています。重要なことは正直に話し、些細なことは通り過ぎます。相手と状況を見て表現のレベルを調整します。最も賢明で成熟した感情表現の方法です。柔軟で適応力が優れています。",
      'zh-CN': "拥有诚实与节制的完美平衡。重要的事诚实说出来，小事就放过。根据对方和情况调整表达程度。最明智和成熟的表达情感方式。灵活且适应力强。",
      'zh-TW': "擁有誠實與節制的完美平衡。重要的事誠實說出來，小事就放過。根據對方和情況調整表達程度。最明智和成熟的表達情感方式。靈活且適應力強。",
      vi: "Có sự cân bằng hoàn hảo giữa thành thật và tự chế. Nói thành thật về điều quan trọng, bỏ qua điều nhỏ nhặt. Điều chỉnh mức độ biểu đạt theo người và tình huống. Cách thể hiện cảm xúc thông minh và trưởng thành nhất. Linh hoạt và thích ứng tốt.",
      id: "Memiliki keseimbangan sempurna antara kejujuran dan pengekangan. Bicara jujur tentang hal penting, biarkan hal kecil berlalu. Menyesuaikan tingkat ekspresi berdasarkan orang dan situasi. Cara mengekspresikan emosi paling bijak dan dewasa. Fleksibel dan sangat mudah beradaptasi."
    },
    strengths: [
      {
        ko: "균형감",
        en: "Sense of balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        vi: "Cảm giác cân bằng",
        id: "Rasa keseimbangan"
      },
      {
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        'zh-CN': "灵活性",
        'zh-TW': "靈活性",
        vi: "Linh hoạt",
        id: "Fleksibilitas"
      },
      {
        ko: "적응력",
        en: "Adaptability",
        ja: "適応力",
        'zh-CN': "适应力",
        'zh-TW': "適應力",
        vi: "Khả năng thích ứng",
        id: "Kemampuan beradaptasi"
      },
      {
        ko: "성숙함",
        en: "Maturity",
        ja: "成熟",
        'zh-CN': "成熟",
        'zh-TW': "成熟",
        vi: "Trưởng thành",
        id: "Kedewasaan"
      }
    ],
    weaknesses: [
      {
        ko: "때로 우유부단",
        en: "Sometimes indecisive",
        ja: "時々優柔不断",
        'zh-CN': "有时优柔寡断",
        'zh-TW': "有時優柔寡斷",
        vi: "Đôi khi lưỡng lự",
        id: "Kadang bimbang"
      },
      {
        ko: "입장 불명확",
        en: "Unclear stance",
        ja: "立場不明確",
        'zh-CN': "立场不明确",
        'zh-TW': "立場不明確",
        vi: "Lập trường không rõ ràng",
        id: "Posisi tidak jelas"
      }
    ],
    score: {
      ko: "솔직 50% / 절제 50%",
      en: "Honesty 50% / Restraint 50%",
      ja: "正直50% / 自制50%",
      'zh-CN': "诚实50% / 节制50%",
      'zh-TW': "誠實50% / 節制50%",
      vi: "Thành thật 50% / Tự chế 50%",
      id: "Kejujuran 50% / Pengekangan 50%"
    },
    advice: {
      ko: "이상적인 균형이에요! 상황 판단력을 계속 키워가세요!",
      en: "Ideal balance! Keep developing your judgment skills!",
      ja: "理想的なバランスです！状況判断力を続けて高めてください！",
      'zh-CN': "理想的平衡！继续培养你的判断力！",
      'zh-TW': "理想的平衡！繼續培養你的判斷力！",
      vi: "Cân bằng lý tưởng! Hãy tiếp tục phát triển khả năng phán đoán!",
      id: "Keseimbangan ideal! Terus kembangkan keterampilan penilaian Anda!"
    }
  },
  {
    type: "Type4",
    emoji: "🌊",
    title: {
      ko: "절제 우선형",
      en: "Restraint Priority Type",
      ja: "自制優先型",
      'zh-CN': "节制优先型",
      'zh-TW': "節制優先型",
      vi: "Kiểu Ưu Tiên Tự Chế",
      id: "Tipe Prioritas Pengekangan"
    },
    shortDescription: {
      ko: "한 번 생각하고! 신중한 표현가",
      en: "Think once! Careful expresser",
      ja: "一度考えて！慎重な表現者",
      'zh-CN': "想一下！谨慎的表达者",
      'zh-TW': "想一下！謹慎的表達者",
      vi: "Nghĩ một lần! Người thể hiện thận trọng",
      id: "Pikirkan sekali! Pengekspresi yang hati-hati"
    },
    description: {
      ko: "대체로 감정을 절제하고 신중하게 표현합니다. 충동적으로 말하지 않고 한참 생각한 후 말합니다. 화나도 참고, 좋아도 티 잘 안 냅니다. 성숙하고 안정적이지만 때로는 답답하거나 감정이 억압될 수 있습니다. 가끔은 솔직한 표현도 필요합니다.",
      en: "Generally restrains emotions and expresses carefully. Doesn't speak impulsively, thinks for a while before speaking. Even when angry, holds back. Even when happy, doesn't show it much. Mature and stable but sometimes frustrating or emotions can be suppressed. Sometimes honest expression is also needed.",
      ja: "全体的に感情を自制し、慎重に表現します。衝動的に話さず、しばらく考えてから話します。怒っても我慢し、好きでも気づかれにくいです。成熟していて安定していますが、時にはもどかしいか、感情が抑圧される可能性があります。時には正直な表現も必要です。",
      'zh-CN': "大体节制情感并谨慎表达。不冲动说话，想一阵子再说。生气也忍着，喜欢也不明显。成熟稳定但有时令人沮丧或情感可能被压抑。有时也需要诚实的表达。",
      'zh-TW': "大體節制情感並謹慎表達。不衝動說話，想一陣子再說。生氣也忍著，喜歡也不明顯。成熟穩定但有時令人沮喪或情感可能被壓抑。有時也需要誠實的表達。",
      vi: "Nhìn chung kiềm chế cảm xúc và thể hiện thận trọng. Không nói bốc đồng, suy nghĩ một lúc rồi mới nói. Giận cũng nhịn, thích cũng không thể hiện nhiều. Trưởng thành và ổn định nhưng đôi khi khó chịu hoặc cảm xúc có thể bị kìm nén. Đôi khi cũng cần thể hiện thành thật.",
      id: "Umumnya menahan emosi dan mengekspresikan dengan hati-hati. Tidak berbicara impulsif, berpikir sejenak sebelum berbicara. Bahkan saat marah, menahan diri. Bahkan saat senang, tidak terlalu menunjukkan. Dewasa dan stabil tapi kadang frustasi atau emosi bisa tertekan. Kadang ekspresi jujur juga diperlukan."
    },
    strengths: [
      {
        ko: "성숙함",
        en: "Maturity",
        ja: "成熟",
        'zh-CN': "成熟",
        'zh-TW': "成熟",
        vi: "Trưởng thành",
        id: "Kedewasaan"
      },
      {
        ko: "안정적",
        en: "Stable",
        ja: "安定",
        'zh-CN': "稳定",
        'zh-TW': "穩定",
        vi: "Ổn định",
        id: "Stabil"
      },
      {
        ko: "실수 적음",
        en: "Few mistakes",
        ja: "失敗が少ない",
        'zh-CN': "失误少",
        'zh-TW': "失誤少",
        vi: "Ít sai sót",
        id: "Sedikit kesalahan"
      },
      {
        ko: "신중함",
        en: "Caution",
        ja: "慎重さ",
        'zh-CN': "谨慎",
        'zh-TW': "謹慎",
        vi: "Thận trọng",
        id: "Kehati-hatian"
      }
    ],
    weaknesses: [
      {
        ko: "답답함",
        en: "Frustration",
        ja: "もどかしさ",
        'zh-CN': "憋闷",
        'zh-TW': "憋悶",
        vi: "Khó chịu",
        id: "Frustrasi"
      },
      {
        ko: "감정 억압",
        en: "Emotional suppression",
        ja: "感情抑圧",
        'zh-CN': "情感压抑",
        'zh-TW': "情感壓抑",
        vi: "Kìm nén cảm xúc",
        id: "Penekanan emosi"
      },
      {
        ko: "오해 가능",
        en: "Can be misunderstood",
        ja: "誤解される可能性",
        'zh-CN': "可能被误解",
        'zh-TW': "可能被誤解",
        vi: "Có thể bị hiểu lầm",
        id: "Bisa disalahpahami"
      }
    ],
    score: {
      ko: "솔직 25% / 절제 75%",
      en: "Honesty 25% / Restraint 75%",
      ja: "正直25% / 自制75%",
      'zh-CN': "诚实25% / 节制75%",
      'zh-TW': "誠實25% / 節制75%",
      vi: "Thành thật 25% / Tự chế 75%",
      id: "Kejujuran 25% / Pengekangan 75%"
    },
    advice: {
      ko: "절제도 좋지만 가끔은 솔직하게 표현하는 것도 건강해요. 감정을 너무 쌓아두지 마세요!",
      en: "Restraint is good, but sometimes honest expression is also healthy. Don't bottle up emotions too much!",
      ja: "自制も良いですが、時には正直に表現することも健康です。感情を溜め込みすぎないでください！",
      'zh-CN': "节制很好，但有时诚实的表达也健康。不要太过压抑情感！",
      'zh-TW': "節制很好，但有時誠實的表達也健康。不要太過壓抑情感！",
      vi: "Tự chế là tốt, nhưng đôi khi thể hiện thành thật cũng lành mạnh. Đừng tích tụ cảm xúc quá nhiều!",
      id: "Pengekangan itu baik, tapi kadang ekspresi jujur juga sehat. Jangan terlalu menyimpan emosi!"
    }
  },
  {
    type: "Type5",
    emoji: "🧊",
    title: {
      ko: "극단적 절제형",
      en: "Extreme Restraint Type",
      ja: "極端な自制型",
      'zh-CN': "极端节制型",
      'zh-TW': "極端節制型",
      vi: "Kiểu Tự Chế Cực Đoan",
      id: "Tipe Pengekangan Ekstrem"
    },
    shortDescription: {
      ko: "아무것도 안 보여! 감정을 숨기는 사람",
      en: "Shows nothing! Person who hides emotions",
      ja: "何も見せない！感情を隠す人",
      'zh-CN': "什么都不展现！隐藏情感的人",
      'zh-TW': "什麼都不展現！隱藏情感的人",
      vi: "Không thể hiện gì! Người giấu cảm xúc",
      id: "Tidak menunjukkan apa-apa! Orang yang menyembunyikan emosi"
    },
    description: {
      ko: "거의 모든 감정을 숨깁니다. 화나도, 좋아도, 슬퍼도 표현하지 않습니다. 속마음을 전혀 드러내지 않아 사람들이 당신을 이해하기 어렵습니다. 안전하지만 진실한 관계를 만들기 힘들고, 감정이 억압되어 폭발하거나 우울할 수 있습니다. 표현 연습이 필요합니다.",
      en: "Hides almost all emotions. Doesn't express anger, happiness, or sadness. Completely hides inner thoughts, making it hard for people to understand you. Safe but hard to build genuine relationships, and suppressed emotions can explode or lead to depression. Expression practice is needed.",
      ja: "ほぼすべての感情を隠します。怒っても、好きでも、悲しくても表現しません。本心を全く明かさないため、人々があなたを理解するのは困難です。安全ですが、真実の関係を築くのは難しく、感情が抑圧されて爆発したり、うつ病になる可能性があります。表現の練習が必要です。",
      'zh-CN': "几乎隐藏所有情感。不表达愤怒、喜欢或悲伤。完全不表露内心想法，让人难以理解你。安全但难以建立真实关系，被压抑的情感可能爆发或导致抑郁。需要练习表达。",
      'zh-TW': "幾乎隱藏所有情感。不表達憤怒、喜歡或悲傷。完全不表露內心想法，讓人難以理解你。安全但難以建立真實關係，被壓抑的情感可能爆發或導致抑鬱。需要練習表達。",
      vi: "Che giấu hầu hết mọi cảm xúc. Không thể hiện giận, thích, hay buồn. Hoàn toàn giấu suy nghĩ bên trong, khiến người khác khó hiểu bạn. An toàn nhưng khó xây dựng mối quan hệ chân thật, và cảm xúc bị kìm nén có thể bùng nổ hoặc dẫn đến trầm cảm. Cần thực hành thể hiện.",
      id: "Menyembunyikan hampir semua emosi. Tidak mengekspresikan kemarahan, kebahagiaan, atau kesedihan. Menyembunyikan pikiran batin sepenuhnya, membuat orang sulit memahami Anda. Aman tapi sulit membangun hubungan yang tulus, dan emosi yang tertekan bisa meledak atau menyebabkan depresi. Latihan ekspresi diperlukan."
    },
    strengths: [
      {
        ko: "안정적",
        en: "Stable",
        ja: "安定",
        'zh-CN': "稳定",
        'zh-TW': "穩定",
        vi: "Ổn định",
        id: "Stabil"
      },
      {
        ko: "신중함",
        en: "Caution",
        ja: "慎重さ",
        'zh-CN': "谨慎",
        'zh-TW': "謹慎",
        vi: "Thận trọng",
        id: "Kehati-hatian"
      },
      {
        ko: "실수 없음",
        en: "No mistakes",
        ja: "失敗なし",
        'zh-CN': "无失误",
        'zh-TW': "無失誤",
        vi: "Không sai sót",
        id: "Tidak ada kesalahan"
      }
    ],
    weaknesses: [
      {
        ko: "감정 억압",
        en: "Emotional suppression",
        ja: "感情抑圧",
        'zh-CN': "情感压抑",
        'zh-TW': "情感壓抑",
        vi: "Kìm nén cảm xúc",
        id: "Penekanan emosi"
      },
      {
        ko: "관계 어려움",
        en: "Relationship difficulties",
        ja: "関係困難",
        'zh-CN': "关系困难",
        'zh-TW': "關係困難",
        vi: "Khó khăn trong mối quan hệ",
        id: "Kesulitan hubungan"
      },
      {
        ko: "외로움",
        en: "Loneliness",
        ja: "孤独",
        'zh-CN': "孤独",
        'zh-TW': "孤獨",
        vi: "Cô đơn",
        id: "Kesepian"
      },
      {
        ko: "오해",
        en: "Misunderstanding",
        ja: "誤解",
        'zh-CN': "误解",
        'zh-TW': "誤解",
        vi: "Hiểu lầm",
        id: "Kesalahpahaman"
      }
    ],
    score: {
      ko: "솔직 0% / 절제 100%",
      en: "Honesty 0% / Restraint 100%",
      ja: "正直0% / 自制100%",
      'zh-CN': "诚实0% / 节制100%",
      'zh-TW': "誠實0% / 節制100%",
      vi: "Thành thật 0% / Tự chế 100%",
      id: "Kejujuran 0% / Pengekangan 100%"
    },
    advice: {
      ko: "감정은 표현해야 해요. 억압하면 폭발하거나 병이 됩니다. 작은 것부터 천천히 표현 연습을 해보세요!",
      en: "Emotions need to be expressed. If suppressed, they explode or become illness. Start practicing expression slowly from small things!",
      ja: "感情は表現する必要があります。抑圧すると爆発したり、病気になります。小さなことからゆっくり表現の練習をしてみてください！",
      'zh-CN': "情感需要表达。如果被压抑，会爆发或变成疾病。从小事开始慢慢练习表达！",
      'zh-TW': "情感需要表達。如果被壓抑，會爆發或變成疾病。從小事開始慢慢練習表達！",
      vi: "Cảm xúc cần được thể hiện. Nếu bị kìm nén, chúng sẽ bùng nổ hoặc trở thành bệnh. Hãy bắt đầu thực hành thể hiện từ những điều nhỏ nhặt!",
      id: "Emosi perlu diekspresikan. Jika ditekan, akan meledak atau menjadi penyakit. Mulai latihan ekspresi perlahan dari hal-hal kecil!"
    }
  }
];

export function calculateHonestyVsRestraintResult(answers: any[]): string {
  let honestyScore = 0;
  let restraintScore = 0;
  
  answers.forEach(answer => {
    if (answer.honesty) honestyScore += answer.honesty;
    if (answer.restraint) restraintScore += answer.restraint;
  });
  
  // 총 24점 만점 (솔직 vs 절제)
  // 22-24점 솔직: Type 1 (극단적 솔직형)
  // 16-20점 솔직: Type 2 (솔직 우선형)
  // 10-14점: Type 3 (균형잡힌 중도형)
  // 4-8점 절제: Type 4 (절제 우선형)
  // 0-2점 절제: Type 5 (극단적 절제형)
  
  if (honestyScore >= 22) return "Type1";
  if (honestyScore >= 16) return "Type2";
  if (honestyScore >= 10) return "Type3";
  if (honestyScore >= 4) return "Type4";
  return "Type5";
}

