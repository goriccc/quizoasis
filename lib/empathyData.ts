export interface EmpathyQuestion {
  id: number;
  question: Record<string, string>;
  options: Array<{
    text: Record<string, string>;
    scores: Record<string, number>;
  }>;
}

export interface EmpathyResult {
  type: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Array<Record<string, string>>;
  cons: Array<Record<string, string>>;
  advice: Record<string, string>;
  recommendedJobs: Record<string, string>;
  compatibility: {
    good: string[];
    careful: string[];
  };
  emoji: string;
  level: Record<string, string>;
  maxScore: number;
}

export const empathyQuestions: EmpathyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 울고 있을 때 당신은?",
      en: "When your friend is crying, you:",
      ja: "友達が泣いている時、あなたは？",
      "zh-CN": "朋友哭泣时，你会：",
      "zh-TW": "朋友哭泣時，你會：",
      vi: "Khi bạn bè khóc, bạn sẽ：",
      id: "Ketika teman menangis, Anda akan："
    },
    options: [
      {
        text: {
          ko: "같이 눈물이 나고 감정이 전달됨",
          en: "I cry too and feel the emotion",
          ja: "一緒に涙が出て感情が伝わる",
          "zh-CN": "也会流泪并感受到情感",
          "zh-TW": "也會流淚並感受到情感",
          vi: "Cũng khóc theo và cảm nhận được cảm xúc",
          id: "Juga ikut menangis dan merasakan emosi"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "마음이 아프고 위로하고 싶음",
          en: "My heart hurts and I want to comfort them",
          ja: "心が痛くて慰めたくなる",
          "zh-CN": "心里难受想安慰他们",
          "zh-TW": "心裡難受想安慰他們",
          vi: "Thấy đau lòng và muốn an ủi",
          id: "Hati sakit dan ingin menghibur mereka"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "안됐다고 생각하지만 어떻게 해야 할지 모름",
          en: "I feel sorry but don't know what to do",
          ja: "気の毒に思うがどうすればいいかわからない",
          "zh-CN": "感到抱歉但不知道该怎么办",
          "zh-TW": "感到抱歉但不知道該怎麼辦",
          vi: "Thấy tội nghiệp nhưng không biết phải làm gì",
          id: "Merasa kasihan tapi tidak tahu harus berbuat apa"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 3,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "왜 우는지 이해가 안 됨",
          en: "I don't understand why they're crying",
          ja: "なぜ泣いているのか理解できない",
          "zh-CN": "不明白为什么哭",
          "zh-TW": "不明白為什麼哭",
          vi: "Không hiểu tại sao họ lại khóc",
          id: "Tidak mengerti mengapa mereka menangis"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 2,
          "Level1": 8
        }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "누군가의 표정만 봐도?",
      en: "Just by looking at someone's expression:",
      ja: "誰かの表情だけ見ても？",
      "zh-CN": "仅仅看表情就能：",
      "zh-TW": "僅僅看表情就能：",
      vi: "Chỉ nhìn biểu cảm của ai đó thôi：",
      id: "Hanya dengan melihat ekspresi seseorang："
    },
    options: [
      {
        text: {
          ko: "기분을 정확히 알 수 있음",
          en: "I can accurately know their mood",
          ja: "気持ちを正確に知ることができる",
          "zh-CN": "能准确知道他们的心情",
          "zh-TW": "能準確知道他們的心情",
          vi: "Có thể biết chính xác tâm trạng của họ",
          id: "Dapat mengetahui suasana hati mereka dengan akurat"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "대략 어떤 감정인지 파악 가능",
          en: "I can roughly understand what emotion it is",
          ja: "大体どんな感情か把握可能",
          "zh-CN": "能大致了解是什么情感",
          "zh-TW": "能大致了解是什麼情感",
          vi: "Có thể nắm bắt được đại khái là cảm xúc gì",
          id: "Dapat memahami kira-kira emosi apa itu"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "명확하게 말해줘야 알 수 있음",
          en: "I need them to tell me clearly to understand",
          ja: "明確に言ってもらわないとわからない",
          "zh-CN": "需要明确说出来才能知道",
          "zh-TW": "需要明確說出來才能知道",
          vi: "Cần họ nói rõ ràng mới biết được",
          id: "Perlu mereka jelaskan dengan jelas baru tahu"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 3,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "잘 모르겠음",
          en: "I don't really know",
          ja: "よくわからない",
          "zh-CN": "不太清楚",
          "zh-TW": "不太清楚",
          vi: "Không biết rõ",
          id: "Tidak begitu tahu"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 8,
          "Level1": 2
        }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구가 좋은 소식을 전할 때?",
      en: "When a friend shares good news:",
      ja: "友達が良い知らせを伝える時？",
      "zh-CN": "朋友分享好消息时：",
      "zh-TW": "朋友分享好消息時：",
      vi: "Khi bạn bè chia sẻ tin tốt：",
      id: "Ketika teman berbagi kabar baik："
    },
    options: [
      {
        text: {
          ko: "내 일처럼 진심으로 기쁨",
          en: "I'm genuinely happy as if it's my own news",
          ja: "自分のことのように心から嬉しい",
          "zh-CN": "像自己的事一样真心高兴",
          "zh-TW": "像自己的事一樣真心高興",
          vi: "Vui mừng chân thành như chuyện của mình",
          id: "Sungguh-sungguh bahagia seperti berita sendiri"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "축하하고 함께 기뻐함",
          en: "I congratulate them and celebrate together",
          ja: "お祝いして一緒に喜ぶ",
          "zh-CN": "祝贺并一起高兴",
          "zh-TW": "祝賀並一起高興",
          vi: "Chúc mừng và cùng vui mừng",
          id: "Memberi selamat dan bergembira bersama"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "\"잘됐네\" 하고 반응함",
          en: "I react with \"That's nice\"",
          ja: "「よかったね」と反応する",
          "zh-CN": "反应说「不错」",
          "zh-TW": "反應說「不錯」",
          vi: "Phản ứng bằng cách nói \"Tốt quá\"",
          id: "Bereaksi dengan mengatakan \"Bagus\""
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 3,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "별 감정이 들지 않음",
          en: "I don't feel any particular emotion",
          ja: "特に感情がわかない",
          "zh-CN": "没有特别的感受",
          "zh-TW": "沒有特別的感受",
          vi: "Không có cảm xúc gì đặc biệt",
          id: "Tidak merasakan emosi khusus"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 2,
          "Level1": 8
        }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "영화나 드라마를 볼 때?",
      en: "When watching movies or dramas:",
      ja: "映画やドラマを見る時？",
      "zh-CN": "看电影或电视剧时：",
      "zh-TW": "看電影或電視劇時：",
      vi: "Khi xem phim hoặc phim truyền hình：",
      id: "Saat menonton film atau drama："
    },
    options: [
      {
        text: {
          ko: "등장인물에 완전히 감정이입됨",
          en: "I completely empathize with the characters",
          ja: "登場人物に完全に感情移入する",
          "zh-CN": "完全代入角色情感",
          "zh-TW": "完全代入角色情感",
          vi: "Hoàn toàn đồng cảm với các nhân vật",
          id: "Sepenuhnya berempati dengan karakter"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "슬픈 장면에서 눈물 날 때 있음",
          en: "I sometimes cry during sad scenes",
          ja: "悲しいシーンで涙が出ることがある",
          "zh-CN": "悲伤场景时会流泪",
          "zh-TW": "悲傷場景時會流淚",
          vi: "Đôi khi khóc trong những cảnh buồn",
          id: "Kadang menangis di adegan sedih"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "이야기로만 받아들임",
          en: "I take it just as a story",
          ja: "話として受け取る",
          "zh-CN": "只是当作故事来看",
          "zh-TW": "只是當作故事來看",
          vi: "Chỉ coi như một câu chuyện",
          id: "Hanya menerimanya sebagai cerita"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 8,
          "Level3": 2,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "감정 이입이 잘 안 됨",
          en: "I don't empathize well",
          ja: "感情移入がうまくできない",
          "zh-CN": "不容易产生共鸣",
          "zh-TW": "不容易產生共鳴",
          vi: "Không dễ dàng đồng cảm",
          id: "Tidak mudah berempati"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 8,
          "Level1": 2
        }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "누군가 화났을 때?",
      en: "When someone is angry:",
      ja: "誰かが怒っている時？",
      "zh-CN": "有人生气时：",
      "zh-TW": "有人生氣時：",
      vi: "Khi ai đó tức giận：",
      id: "Ketika seseorang marah："
    },
    options: [
      {
        text: {
          ko: "그 사람의 화난 감정이 느껴짐",
          en: "I can feel their angry emotion",
          ja: "その人の怒りの感情が感じられる",
          "zh-CN": "能感受到他们的愤怒情绪",
          "zh-TW": "能感受到他們的憤怒情緒",
          vi: "Có thể cảm nhận được cảm xúc tức giận của họ",
          id: "Dapat merasakan emosi marah mereka"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "왜 화났는지 이해하려 함",
          en: "I try to understand why they're angry",
          ja: "なぜ怒っているのか理解しようとする",
          "zh-CN": "试图理解为什么生气",
          "zh-TW": "試圖理解為什麼生氣",
          vi: "Cố gắng hiểu tại sao họ tức giận",
          id: "Mencoba memahami mengapa mereka marah"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "화났다는 것만 인지함",
          en: "I only recognize that they're angry",
          ja: "怒っているということだけ認識する",
          "zh-CN": "只是知道他们生气了",
          "zh-TW": "只是知道他們生氣了",
          vi: "Chỉ nhận biết được rằng họ đang tức giận",
          id: "Hanya menyadari bahwa mereka marah"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 3,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "잘 모르겠음",
          en: "I don't really know",
          ja: "よくわからない",
          "zh-CN": "不太清楚",
          "zh-TW": "不太清楚",
          vi: "Không biết rõ",
          id: "Tidak begitu tahu"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 2,
          "Level1": 8
        }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구의 고민을 들을 때?",
      en: "When listening to a friend's worries:",
      ja: "友達の悩みを聞く時？",
      "zh-CN": "听朋友烦恼时：",
      "zh-TW": "聽朋友煩惱時：",
      vi: "Khi nghe bạn bè tâm sự：",
      id: "Saat mendengarkan kekhawatiran teman："
    },
    options: [
      {
        text: {
          ko: "완전히 빠져들어 함께 고민함",
          en: "I get completely absorbed and worry together",
          ja: "完全にのめり込んで一緒に悩む",
          "zh-CN": "完全投入并一起烦恼",
          "zh-TW": "完全投入並一起煩惱",
          vi: "Hoàn toàn chìm đắm và cùng lo lắng",
          id: "Sepenuhnya terlibat dan khawatir bersama"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "진심으로 들어주고 공감함",
          en: "I listen sincerely and empathize",
          ja: "心から聞いて共感する",
          "zh-CN": "真心倾听并共情",
          "zh-TW": "真心傾聽並共情",
          vi: "Lắng nghe chân thành và đồng cảm",
          id: "Mendengarkan dengan tulus dan berempati"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "들어주지만 해결책 위주로 생각",
          en: "I listen but focus on solutions",
          ja: "聞くが解決策中心で考える",
          "zh-CN": "倾听但主要想解决方案",
          "zh-TW": "傾聽但主要想解決方案",
          vi: "Lắng nghe nhưng tập trung vào giải pháp",
          id: "Mendengarkan tapi fokus pada solusi"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 8,
          "Level3": 2,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "듣기는 하지만 잘 이해 못함",
          en: "I listen but don't understand well",
          ja: "聞くがよく理解できない",
          "zh-CN": "在听但不太理解",
          "zh-TW": "在聽但不太理解",
          vi: "Có lắng nghe nhưng không hiểu rõ",
          id: "Mendengarkan tapi tidak terlalu memahami"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 8,
          "Level1": 2
        }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "타인의 고통을 봤을 때?",
      en: "When you see someone else's pain:",
      ja: "他人の苦痛を見た時？",
      "zh-CN": "看到别人的痛苦时：",
      "zh-TW": "看到別人的痛苦時：",
      vi: "Khi nhìn thấy nỗi đau của người khác：",
      id: "Ketika melihat penderitaan orang lain："
    },
    options: [
      {
        text: {
          ko: "가슴이 아프고 도와주고 싶음",
          en: "My heart hurts and I want to help them",
          ja: "胸が痛くて助けてあげたい",
          "zh-CN": "心里难受想帮助他们",
          "zh-TW": "心裡難受想幫助他們",
          vi: "Thấy đau lòng và muốn giúp đỡ họ",
          id: "Hati sakit dan ingin membantu mereka"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "안타깝고 걱정됨",
          en: "I feel sorry and worried",
          ja: "気の毒で心配になる",
          "zh-CN": "感到遗憾和担心",
          "zh-TW": "感到遺憾和擔心",
          vi: "Thấy tội nghiệp và lo lắng",
          id: "Merasa kasihan dan khawatir"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "불쌍하다고 생각함",
          en: "I think they're pitiable",
          ja: "可哀想だと思う",
          "zh-CN": "觉得他们可怜",
          "zh-TW": "覺得他們可憐",
          vi: "Thấy họ đáng thương",
          id: "Merasa mereka menyedihkan"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 3,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "별로 감정이 안 듦",
          en: "I don't feel much emotion",
          ja: "特に感情がわかない",
          "zh-CN": "没有特别的感受",
          "zh-TW": "沒有特別的感受",
          vi: "Không có cảm xúc gì đặc biệt",
          id: "Tidak merasakan emosi khusus"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 2,
          "Level1": 8
        }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "대화 중 상대방이 불편해 보이면?",
      en: "If the other person looks uncomfortable during conversation:",
      ja: "会話中相手が不快そうに見えたら？",
      "zh-CN": "对话中对方看起来不舒服时：",
      "zh-TW": "對話中對方看起來不舒服時：",
      vi: "Nếu đối phương trông khó chịu trong cuộc trò chuyện：",
      id: "Jika lawan bicara terlihat tidak nyaman saat berbicara："
    },
    options: [
      {
        text: {
          ko: "즉시 알아채고 화제를 바꿈",
          en: "I immediately notice and change the topic",
          ja: "すぐに気づいて話題を変える",
          "zh-CN": "立即察觉并改变话题",
          "zh-TW": "立即察覺並改變話題",
          vi: "Ngay lập tức nhận ra và chuyển chủ đề",
          id: "Segera menyadari dan mengubah topik"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "금방 눈치채고 배려함",
          en: "I quickly notice and show consideration",
          ja: "すぐに気づいて気遣う",
          "zh-CN": "很快察觉并体贴",
          "zh-TW": "很快察覺並體貼",
          vi: "Nhanh chóng nhận ra và quan tâm",
          id: "Cepat menyadari dan menunjukkan perhatian"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "말해줘야 알아챔",
          en: "I need them to tell me to notice",
          ja: "言ってもらわないと気づかない",
          "zh-CN": "需要说出来才能察觉",
          "zh-TW": "需要說出來才能察覺",
          vi: "Cần họ nói ra mới nhận ra",
          id: "Perlu mereka katakan baru menyadari"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 3,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "잘 모름",
          en: "I don't really know",
          ja: "よくわからない",
          "zh-CN": "不太清楚",
          "zh-TW": "不太清楚",
          vi: "Không biết rõ",
          id: "Tidak begitu tahu"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 8,
          "Level1": 2
        }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "갈등 상황에서?",
      en: "In conflict situations:",
      ja: "対立状況で？",
      "zh-CN": "在冲突情况下：",
      "zh-TW": "在衝突情況下：",
      vi: "Trong tình huống xung đột：",
      id: "Dalam situasi konflik："
    },
    options: [
      {
        text: {
          ko: "양쪽 입장이 다 이해됨",
          en: "I understand both sides' positions",
          ja: "両方の立場が理解できる",
          "zh-CN": "理解双方的立场",
          "zh-TW": "理解雙方的立場",
          vi: "Hiểu được lập trường của cả hai bên",
          id: "Memahami posisi kedua belah pihak"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "각자의 감정을 이해하려 노력",
          en: "I try to understand each person's emotions",
          ja: "それぞれの感情を理解しようとする",
          "zh-CN": "努力理解每个人的情感",
          "zh-TW": "努力理解每個人的情感",
          vi: "Cố gắng hiểu cảm xúc của từng người",
          id: "Berusaha memahami emosi masing-masing"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "논리적으로 누가 맞는지 판단",
          en: "I logically judge who is right",
          ja: "論理的に誰が正しいか判断する",
          "zh-CN": "逻辑性地判断谁是对的",
          "zh-TW": "邏輯性地判斷誰是對的",
          vi: "Phán đoán một cách logic ai đúng",
          id: "Menilai secara logis siapa yang benar"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 8,
          "Level3": 2,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "잘 이해 안 됨",
          en: "I don't understand well",
          ja: "よく理解できない",
          "zh-CN": "不太理解",
          "zh-TW": "不太理解",
          vi: "Không hiểu rõ",
          id: "Tidak terlalu memahami"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 2,
          "Level1": 8
        }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "모르는 사람의 힘든 이야기를 들었을 때?",
      en: "When you hear a stranger's difficult story:",
      ja: "知らない人の辛い話を聞いた時？",
      "zh-CN": "听到陌生人的困难故事时：",
      "zh-TW": "聽到陌生人的困難故事時：",
      vi: "Khi nghe câu chuyện khó khăn của người lạ：",
      id: "Ketika mendengar cerita sulit orang asing："
    },
    options: [
      {
        text: {
          ko: "모르는 사람인데도 마음이 아픔",
          en: "My heart hurts even though they're a stranger",
          ja: "知らない人なのに心が痛む",
          "zh-CN": "虽然是陌生人但心里难受",
          "zh-TW": "雖然是陌生人但心裡難受",
          vi: "Dù là người lạ nhưng thấy đau lòng",
          id: "Meskipun orang asing tapi hati sakit"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "안타깝고 동정심 듦",
          en: "I feel sorry and sympathetic",
          ja: "気の毒で同情心がわく",
          "zh-CN": "感到遗憾和同情",
          "zh-TW": "感到遺憾和同情",
          vi: "Thấy tội nghiệp và có lòng thương cảm",
          id: "Merasa kasihan dan simpati"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "\"그렇구나\" 정도",
          en: "Just think \"I see\"",
          ja: "「そうか」程度",
          "zh-CN": "只是觉得「原来如此」",
          "zh-TW": "只是覺得「原來如此」",
          vi: "Chỉ nghĩ \"Thế à\"",
          id: "Hanya berpikir \"Begitu ya\""
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 8,
          "Level3": 2,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "별 감정 없음",
          en: "No particular emotion",
          ja: "特に感情がない",
          "zh-CN": "没有特别的感受",
          "zh-TW": "沒有特別的感受",
          vi: "Không có cảm xúc gì đặc biệt",
          id: "Tidak ada emosi khusus"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 8,
          "Level1": 2
        }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "동물이나 아이가 우는 소리를 들으면?",
      en: "When you hear animals or children crying:",
      ja: "動物や子供が泣く声を聞くと？",
      "zh-CN": "听到动物或孩子哭泣时：",
      "zh-TW": "聽到動物或孩子哭泣時：",
      vi: "Khi nghe tiếng khóc của động vật hoặc trẻ em：",
      id: "Ketika mendengar hewan atau anak menangis："
    },
    options: [
      {
        text: {
          ko: "가슴이 찢어지고 당장 도와주고 싶음",
          en: "My heart breaks and I want to help immediately",
          ja: "胸が張り裂けて今すぐ助けてあげたい",
          "zh-CN": "心都要碎了想立刻帮助",
          "zh-TW": "心都要碎了想立刻幫助",
          vi: "Tim như bị xé nát và muốn giúp ngay lập tức",
          id: "Hati seperti terkoyak dan ingin membantu segera"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "안쓰럽고 걱정됨",
          en: "I feel sorry and worried",
          ja: "可哀想で心配になる",
          "zh-CN": "感到可怜和担心",
          "zh-TW": "感到可憐和擔心",
          vi: "Thấy tội nghiệp và lo lắng",
          id: "Merasa kasihan dan khawatir"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "불쌍하긴 한데 특별한 감정 없음",
          en: "They're pitiable but no special emotion",
          ja: "可哀想だが特別な感情はない",
          "zh-CN": "虽然可怜但没有特别感受",
          "zh-TW": "雖然可憐但沒有特別感受",
          vi: "Đáng thương nhưng không có cảm xúc đặc biệt",
          id: "Menyedihkan tapi tidak ada emosi khusus"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 3,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "별로 신경 안 씀",
          en: "I don't really care",
          ja: "特に気にしない",
          "zh-CN": "不太在意",
          "zh-TW": "不太在意",
          vi: "Không quan tâm lắm",
          id: "Tidak terlalu peduli"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 8,
          "Level1": 2
        }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 공감 능력에 대해 어떻게 생각하나요?",
      en: "What do you think about your empathy ability?",
      ja: "あなたの共感能力についてどう思いますか？",
      "zh-CN": "你认为自己的共情能力如何？",
      "zh-TW": "你認為自己的共情能力如何？",
      vi: "Bạn nghĩ gì về khả năng đồng cảm của mình？",
      id: "Apa pendapat Anda tentang kemampuan empati Anda？"
    },
    options: [
      {
        text: {
          ko: "매우 높고 때로는 힘들 정도",
          en: "Very high and sometimes difficult to handle",
          ja: "非常に高くて時々辛いほど",
          "zh-CN": "非常高有时甚至难以承受",
          "zh-TW": "非常高有時甚至難以承受",
          vi: "Rất cao và đôi khi khó chịu đựng",
          id: "Sangat tinggi dan kadang sulit ditangani"
        },
        scores: {
          "Level6": 3,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "높은 편이고 다른 사람을 잘 이해함",
          en: "Quite high and I understand others well",
          ja: "高い方で他の人をよく理解する",
          "zh-CN": "比较高能很好地理解别人",
          "zh-TW": "比較高能很好地理解別人",
          vi: "Khá cao và hiểu người khác tốt",
          id: "Cukup tinggi dan memahami orang lain dengan baik"
        },
        scores: {
          "Level6": 0,
          "Level5": 3,
          "Level4": 0,
          "Level3": 0,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "보통 수준",
          en: "Average level",
          ja: "普通のレベル",
          "zh-CN": "普通水平",
          "zh-TW": "普通水平",
          vi: "Mức độ bình thường",
          id: "Tingkat rata-rata"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 8,
          "Level3": 2,
          "Level2": 0,
          "Level1": 0
        }
      },
      {
        text: {
          ko: "낮은 편이고 잘 이해 못함",
          en: "Low and I don't understand well",
          ja: "這裡の方でよく理解できない",
          "zh-CN": "比较低不太理解",
          "zh-TW": "比較低不太理解",
          vi: "Thấp và không hiểu rõ",
          id: "Rendah dan tidak terlalu memahami"
        },
        scores: {
          "Level6": 0,
          "Level5": 0,
          "Level4": 0,
          "Level3": 0,
          "Level2": 2,
          "Level1": 2
        }
      }
    ]
  }
];

export const empathyResults: EmpathyResult[] = [
  {
    type: "Level6",
    title: {
      ko: "공감 마스터",
      en: "Empathy Master",
      ja: "共感マスター",
      "zh-CN": "共情大师",
      "zh-TW": "共情大師",
      vi: "Bậc thầy đồng cảm",
      id: "Master Empati"
    },
    description: {
      ko: "최고 레벨! 타인의 감정을 완벽히 이해하는 공감의 달인",
      en: "Highest level! A master of empathy who perfectly understands others' emotions",
      ja: "最高レベル！他人の感情を完璧に理解する共感の達人",
      "zh-CN": "最高级别！完美理解他人情感的共情大师",
      "zh-TW": "最高級別！完美理解他人情感的共情大師",
      vi: "Cấp độ cao nhất! Bậc thầy đồng cảm hiểu hoàn hảo cảm xúc người khác",
      id: "Level tertinggi! Master empati yang memahami emosi orang lain dengan sempurna"
    },
    longDescription: {
      ko: "타인의 감정을 자신의 것처럼 깊이 느낍니다. 표정만 봐도 기분을 알 수 있고, 상대방의 입장을 완벽하게 이해합니다. 최고 수준의 EQ를 가졌으며, 관계에서 뛰어난 능력을 발휘합니다. 상담가, 심리학자 같은 직업에 적합합니다. 다만 과도한 공감으로 감정 소진 주의가 필요합니다.",
      en: "You deeply feel others' emotions as if they were your own. You can tell someone's mood just by looking at their expression and perfectly understand their perspective. You have the highest level of EQ and excel in relationships. You're suitable for careers like counseling or psychology. However, you need to be careful about emotional burnout from excessive empathy.",
      ja: "他人の感情を自分のもののように深く感じます。表情だけ見ても気分がわかり、相手の立場を完璧に理解します。最高レベルのEQを持ち、人間関係で優れた能力を発揮します。カウンセラーや心理学者のような職業に適しています。ただし、過度な共感による感情の消耗に注意が必要です。",
      "zh-CN": "你能像感受自己的情感一样深刻感受他人的情感。仅看表情就能知道心情，完美理解对方的立场。拥有最高水平的EQ，在人际关系中表现出色。适合咨询师、心理学家等职业。但需要注意过度共情导致的情绪消耗。",
      "zh-TW": "你能像感受自己的情感一樣深刻感受他人的情感。僅看表情就能知道心情，完美理解對方的立場。擁有最高水平的EQ，在人際關係中表現出色。適合諮詢師、心理學家等職業。但需要注意過度共情導致的情緒消耗。",
      vi: "Bạn cảm nhận sâu sắc cảm xúc của người khác như thể đó là của chính mình. Chỉ nhìn biểu cảm cũng có thể biết tâm trạng và hiểu hoàn hảo quan điểm của đối phương. Bạn có EQ cao nhất và xuất sắc trong các mối quan hệ. Phù hợp với nghề tư vấn, tâm lý học. Tuy nhiên cần cẩn thận với việc kiệt sức cảm xúc do đồng cảm quá mức.",
      id: "Anda merasakan emosi orang lain secara mendalam seolah-olah itu adalah milik Anda sendiri. Hanya dengan melihat ekspresi, Anda bisa mengetahui suasana hati dan memahami perspektif mereka dengan sempurna. Anda memiliki EQ tertinggi dan unggul dalam hubungan. Cocok untuk karir seperti konseling atau psikologi. Namun, Anda perlu berhati-hati dengan kelelahan emosional dari empati yang berlebihan."
    },
    pros: [
      { 
        ko: "완벽한 이해",
        en: "Perfect understanding",
        ja: "完璧な理解",
        "zh-CN": "完美理解",
        "zh-TW": "完美理解",
        vi: "Hiểu biết hoàn hảo",
        id: "Pemahaman sempurna"
      },
      {
        ko: "깊은 유대감",
        en: "Deep bonds",
        ja: "深い絆",
        "zh-CN": "深厚纽带",
        "zh-TW": "深厚紐帶",
        vi: "Mối liên kết sâu sắc",
        id: "Ikatan mendalam"
      },
      {
        ko: "뛰어난 관계 능력",
        en: "Excellent relationship skills",
        ja: "優れた人間関係能力",
        "zh-CN": "出色的人际关系能力",
        "zh-TW": "出色的人際關係能力",
        vi: "Kỹ năng quan hệ xuất sắc",
        id: "Keterampilan hubungan yang luar biasa"
      }
    ],
    cons: [
      { 
        ko: "감정 소진",
        en: "Emotional burnout",
        ja: "感情の消耗",
        "zh-CN": "情绪消耗",
        "zh-TW": "情緒消耗",
        vi: "Kiệt sức cảm xúc",
        id: "Kelelahan emosional"
      },
      { 
        ko: "경계 부족",
        en: "Lack of boundaries",
        ja: "境界の欠如",
        "zh-CN": "缺乏边界",
        "zh-TW": "缺乏邊界",
        vi: "Thiếu ranh giới",
        id: "Kurang batasan"
      }
    ],
    advice: {
      ko: "타인도 중요하지만 당신 자신도 보호하세요. 경계선 설정이 필요합니다.",
      en: "Others are important, but you also need to protect yourself. Setting boundaries is necessary.",
      ja: "他人も大切ですが、あなた自身も守ってください。境界線の設定が必要です。",
      "zh-CN": "别人很重要，但你也要保护自己。需要设定边界。",
      "zh-TW": "別人很重要，但你也要保護自己。需要設定邊界。",
      vi: "Người khác cũng quan trọng, nhưng bạn cũng cần bảo vệ chính mình. Cần thiết lập ranh giới.",
      id: "Orang lain penting, tetapi Anda juga perlu melindungi diri sendiri. Menetapkan batasan adalah hal yang perlu."
    },
    recommendedJobs: {
      ko: "심리상담사, 사회복지사, 교사, 의료인",
      en: "Psychological counselor, social worker, teacher, medical professional",
      ja: "心理カウンセラー、社会福祉士、教師、医療従事者",
      "zh-CN": "心理咨询师、社会工作者、教师、医疗人员",
      "zh-TW": "心理諮詢師、社會工作者、教師、醫療人員",
      vi: "Tư vấn tâm lý, nhân viên xã hội, giáo viên, nhân viên y tế",
      id: "Konselor psikologi, pekerja sosial, guru, profesional medis"
    },
    compatibility: {
      good: ["Level5", "Level4"],
      careful: ["Level2", "Level1"]
    },
    emoji: "💗",
    level: {
      ko: "★★★★★★ (6/6) 마스터",
      en: "★★★★★★ (6/6) Master",
      ja: "★★★★★★ (6/6) マスター",
      "zh-CN": "★★★★★★ (6/6) 大师",
      "zh-TW": "★★★★★★ (6/6) 大師",
      vi: "★★★★★★ (6/6) Bậc thầy",
      id: "★★★★★★ (6/6) Master"
    },
    maxScore: 36
  },
  {
    type: "Level5",
    title: {
      ko: "높은 공감형",
      en: "High Empathy Type",
      ja: "高い共感型",
      "zh-CN": "高共情型",
      "zh-TW": "高共情型",
      vi: "Kiểu đồng cảm cao",
      id: "Tipe Empati Tinggi"
    },
    description: {
      ko: "전문가 수준! 뛰어난 감성 지능의 소유자",
      en: "Expert level! Owner of excellent emotional intelligence",
      ja: "専門家レベル！優れた感情知能の所有者",
      "zh-CN": "专家水平！拥有出色情感智能",
      "zh-TW": "專家水平！擁有出色情感智能",
      vi: "Cấp độ chuyên gia! Sở hữu trí tuệ cảm xúc xuất sắc",
      id: "Level ahli! Pemilik kecerdasan emosional yang luar biasa"
    },
    longDescription: {
      ko: "공감 능력이 매우 뛰어납니다. 타인의 감정을 잘 이해하고 적절히 반응할 줄 압니다. 관계에서 신뢰받고 사람들이 편안해합니다. 높은 EQ로 리더십도 뛰어나며, 갈등 해결 능력도 탁월합니다. 가장 이상적인 공감 수준입니다.",
      en: "Your empathy ability is very excellent. You understand others' emotions well and know how to respond appropriately. You are trusted in relationships and people feel comfortable around you. With high EQ, you also have excellent leadership and outstanding conflict resolution abilities. This is the most ideal empathy level.",
      ja: "共感能力が非常に優れています。他人の感情をよく理解し、適切に反応する方法を知っています。人間関係で信頼され、人々が快適に感じます。高いEQでリーダーシップも優れており、対立解決能力も卓越しています。最も理想的な共感レベルです。",
      "zh-CN": "你的共情能力非常出色。你很好地理解他人的情感并知道如何适当回应。在人际关系中受到信任，人们在你身边感到舒适。凭借高EQ，你还有出色的领导力和卓越的冲突解决能力。这是最理想的共情水平。",
      "zh-TW": "你的共情能力非常出色。你很好地理解他人的情感並知道如何適當回應。在人際關係中受到信任，人們在你身邊感到舒適。憑藉高EQ，你還有出色的領導力和卓越的衝突解決能力。這是最理想的共情水平。",
      vi: "Khả năng đồng cảm của bạn rất xuất sắc. Bạn hiểu rõ cảm xúc của người khác và biết cách phản ứng phù hợp. Bạn được tin tưởng trong các mối quan hệ và mọi người cảm thấy thoải mái khi ở bên bạn. Với EQ cao, bạn cũng có khả năng lãnh đạo xuất sắc và khả năng giải quyết xung đột tuyệt vời. Đây là mức độ đồng cảm lý tưởng nhất.",
      id: "Kemampuan empati Anda sangat luar biasa. Anda memahami emosi orang lain dengan baik dan tahu cara merespons dengan tepat. Anda dipercaya dalam hubungan dan orang-orang merasa nyaman di sekitar Anda. Dengan EQ tinggi, Anda juga memiliki kepemimpinan yang luar biasa dan kemampuan resolusi konflik yang luar biasa. Ini adalah level empati yang paling ideal."
    },
    pros: [
      { 
        ko: "뛰어난 이해력",
        en: "Excellent understanding",
        ja: "優れた理解力",
        "zh-CN": "出色的理解力",
        "zh-TW": "出色的理解力",
        vi: "Khả năng hiểu biết xuất sắc",
        id: "Pemahaman luar biasa"
      },
      {
        ko: "좋은 관계",
        en: "Good relationships",
        ja: "良い関係",
        "zh-CN": "良好的关系",
        "zh-TW": "良好的關係",
        vi: "Mối quan hệ tốt",
        id: "Hubungan baik"
      },
      { 
        ko: "신뢰",
        en: "Trust",
        ja: "信頼",
        "zh-CN": "信任",
        "zh-TW": "信任",
        vi: "Sự tin tưởng",
        id: "Kepercayaan"
      },
      {
        ko: "리더십",
        en: "Leadership",
        ja: "リーダーシップ",
        "zh-CN": "领导力",
        "zh-TW": "領導力",
        vi: "Khả năng lãnh đạo",
        id: "Kepemimpinan"
      }
    ],
    cons: [
      { 
        ko: "거의 없음",
        en: "Almost none",
        ja: "ほとんどない",
        "zh-CN": "几乎没有",
        "zh-TW": "幾乎沒有",
        vi: "Hầu như không có",
        id: "Hampir không có"
      }
    ],
    advice: {
      ko: "완벽한 수준이에요! 지금의 공감 능력을 잘 유지하세요.",
      en: "Perfect level! Keep maintaining your current empathy ability well.",
      ja: "完璧なレベルです！今の共感能力をよく維持してください。",
      "zh-CN": "完美水平！好好保持你现在的共情能力。",
      "zh-TW": "完美水平！好好保持你現在的共情能力。",
      vi: "Cấp độ hoàn hảo! Hãy duy trì tốt khả năng đồng cảm hiện tại của bạn.",
      id: "Level sempurna! Pertahankan kemampuan empati Anda saat ini dengan baik."
    },
    recommendedJobs: {
      ko: "관리자, 교사, 상담가, HR",
      en: "Manager, teacher, counselor, HR",
      ja: "管理者、教師、カウンセラー、HR",
      "zh-CN": "管理者，教师，咨询师，HR",
      "zh-TW": "管理者，教師，諮詢師，HR",
      vi: "Quản lý, giáo viên, tư vấn viên, HR",
      id: "Manajer, guru, konselor, HR"
    },
    compatibility: {
      good: ["Level6", "Level4"],
      careful: ["Level2", "Level1"]
    },
    emoji: "💙",
    level: {
      ko: "★★★★★☆ (5/6) 전문가",
      en: "★★★★★☆ (5/6) Expert",
      ja: "★★★★★☆ (5/6) エキスパート",
      "zh-CN": "★★★★★☆ (5/6) 专家",
      "zh-TW": "★★★★★☆ (5/6) 專家",
      vi: "★★★★★☆ (5/6) Chuyên gia",
      id: "★★★★★☆ (5/6) Ahli"
    },
    maxScore: 36
  },
  {
    type: "Level4",
    title: {
      ko: "좋은 공감형",
      en: "Good Empathy Type",
      ja: "良い共感型",
      "zh-CN": "良好共情型",
      "zh-TW": "良好共情型",
      vi: "Kiểu đồng cảm tốt",
      id: "Tipe Empati Baik"
    },
    description: {
      ko: "평균 이상! 균형잡힌 공감 능력",
      en: "Above average! Balanced empathy ability",
      ja: "平均以上！バランスの取れた共感能力",
      "zh-CN": "高于平均！平衡的共情能力",
      "zh-TW": "高於平均！平衡的共情能力",
      vi: "Trên mức trung bình! Khả năng đồng cảm cân bằng",
      id: "Di atas rata-rata! Kemampuan empati yang seimbang"
    },
    longDescription: {
      ko: "평균 이상의 공감 능력을 가지고 있습니다. 대부분의 상황에서 타인을 이해하고 배려할 줄 압니다. 관계가 원만하고 갈등도 적습니다. 조금만 더 노력하면 전문가 레벨에 도달할 수 있습니다.",
      en: "You have above-average empathy ability. You understand and care for others in most situations. Your relationships are harmonious and conflicts are few. With just a little more effort, you can reach expert level.",
      ja: "平均以上の共感能力を持っています。ほとんどの状況で他人を理解し、気遣うことができます。関係は円満で対立も少ないです。もう少し努力すれば専門家レベルに到達できます。",
      "zh-CN": "你拥有高于平均的共情能力。在大多数情况下你都能理解并关心他人。人际关系和谐，冲突很少。只要再努力一点，你就能达到专家水平。",
      "zh-TW": "你擁有高於平均的共情能力。在大多數情況下你都能理解並關心他人。人際關係和諧，衝突很少。只要再努力一點，你就能達到專家水平。",
      vi: "Bạn có khả năng đồng cảm trên mức trung bình. Trong hầu hết các tình huống, bạn hiểu và quan tâm đến người khác. Các mối quan hệ của bạn hài hòa và ít xung đột. Chỉ cần nỗ lực thêm một chút, bạn có thể đạt đến cấp độ chuyên gia.",
      id: "Anda memiliki kemampuan empati di atas rata-rata. Dalam sebagian besar situasi, Anda memahami dan peduli pada orang lain. Hubungan Anda harmonis dan konflik sedikit. Dengan sedikit usaha lagi, Anda bisa mencapai level ahli."
    },
    pros: [
      { 
        ko: "좋은 이해력",
        en: "Good understanding",
        ja: "良い理解力",
        "zh-CN": "良好的理解力",
        "zh-TW": "良好的理解力",
        vi: "Khả năng hiểu biết tốt",
        id: "Pemahaman yang baik"
      },
      {
        ko: "원만한 관계",
        en: "Harmonious relationships",
        ja: "円満な関係",
        "zh-CN": "和谐的关系",
        "zh-TW": "和諧的關係",
        vi: "Mối quan hệ hài hòa",
        id: "Hubungan harmonis"
      },
      {
        ko: "배려심",
        en: "Consideration",
        ja: "思いやり",
        "zh-CN": "体贴",
        "zh-TW": "體貼",
        vi: "Sự quan tâm",
        id: "Pertimbangan"
      }
    ],
    cons: [
      { 
        ko: "때때로 둔감할 수 있음",
        en: "Sometimes can be insensitive",
        ja: "時々鈍感になることがある",
        "zh-CN": "有时可能比较迟钝",
        "zh-TW": "有時可能比較遲鈍",
        vi: "Đôi khi có thể thiếu nhạy cảm",
        id: "Kadang bisa tidak sensitif"
      }
    ],
    advice: {
      ko: "조금만 더 타인의 감정에 집중하면 완벽해질 거예요!",
      en: "Just focus a little more on others' emotions and you'll be perfect!",
      ja: "もう少し他人の感情に集中すれば完璧になります！",
      "zh-CN": "只要再多关注一点他人的情感，你就会完美！",
      "zh-TW": "只要再多關注一點他人的情感，你就會完美！",
      vi: "Chỉ cần tập trung thêm một chút vào cảm xúc của người khác, bạn sẽ hoàn hảo!",
      id: "Cukup fokus sedikit lebih pada emosi orang lain dan Anda akan sempurna!"
    },
    recommendedJobs: {
      ko: "대부분의 직업에 적합",
      en: "Suitable for most careers",
      ja: "ほとんどの職業に適している",
      "zh-CN": "适合大多数职业",
      "zh-TW": "適合大多數職業",
      vi: "Phù hợp với hầu hết các nghề nghiệp",
      id: "Cocok untuk sebagian besar karir"
    },
    compatibility: {
      good: ["Level5", "Level3"],
      careful: ["Level2", "Level1"]
    },
    emoji: "💚",
    level: {
      ko: "★★★★☆☆ (4/6) 우수",
      en: "★★★★☆☆ (4/6) Excellent",
      ja: "★★★★☆☆ (4/6) 優秀",
      "zh-CN": "★★★★☆☆ (4/6) 优秀",
      "zh-TW": "★★★★☆☆ (4/6) 優秀",
      vi: "★★★★☆☆ (4/6) Xuất sắc",
      id: "★★★★☆☆ (4/6) Luar biasa"
    },
    maxScore: 40
  },
  {
    type: "Level3",
    title: {
      ko: "보통 공감형",
      en: "Average Empathy Type",
      ja: "普通の共感型",
      "zh-CN": "普通共情型",
      "zh-TW": "普通共情型",
      vi: "Kiểu đồng cảm bình thường",
      id: "Tipe Empati Rata-rata"
    },
    description: {
      ko: "평균 수준! 기본적인 공감 능력",
      en: "Average level! Basic empathy ability",
      ja: "平均レベル！基本的な共感能力",
      "zh-CN": "普通水平！基本的共情能力",
      "zh-TW": "普通水平！基本的共情能力",
      vi: "Mức độ bình thường! Khả năng đồng cảm cơ bản",
      id: "Level rata-rata! Kemampuan empati dasar"
    },
    longDescription: {
      ko: "보통 수준의 공감 능력을 가지고 있습니다. 명확한 상황에서는 이해하지만, 미묘한 감정은 놓칠 수 있습니다. 일상적인 관계는 무난하지만, 깊은 유대감 형성은 어려울 수 있습니다. 의식적으로 노력하면 향상 가능합니다.",
      en: "You have average-level empathy ability. You understand in clear situations, but may miss subtle emotions. Daily relationships are fine, but forming deep bonds may be difficult. You can improve with conscious effort.",
      ja: "平均レベルの共感能力を持っています。明確な状況では理解しますが、微妙な感情は見落とす可能性があります。日常的な関係は問題ありませんが、深い絆の形成は困難かもしれません。意識的に努力すれば向上できます。",
      "zh-CN": "你拥有普通水平的共情能力。在明确的情况下你能理解，但可能会错过微妙的情感。日常关系没问题，但形成深厚纽带可能比较困难。通过有意识的努力可以改善。",
      "zh-TW": "你擁有普通水平的共情能力。在明確的情況下你能理解，但可能會錯過微妙的情感。日常關係沒問題，但形成深厚紐帶可能比較困難。通過有意識的努力可以改善。",
      vi: "Bạn có khả năng đồng cảm ở mức bình thường. Trong những tình huống rõ ràng, bạn hiểu được, nhưng có thể bỏ lỡ những cảm xúc tinh tế. Các mối quan hệ hàng ngày ổn, nhưng việc hình thành mối liên kết sâu sắc có thể khó khăn. Bạn có thể cải thiện bằng nỗ lực có ý thức.",
      id: "Anda memiliki kemampuan empati pada tingkat rata-rata. Dalam situasi yang jelas, Anda memahami, tetapi mungkin melewatkan emosi yang halus. Hubungan sehari-hari baik-baik saja, tetapi membentuk ikatan mendalam mungkin sulit. Anda bisa meningkatkan dengan usaha sadar."
    },
    pros: [
      { 
        ko: "기본적인 사회성",
        en: "Basic social skills",
        ja: "基本的な社会性",
        "zh-CN": "基本的社会技能",
        "zh-TW": "基本的社會技能",
        vi: "Kỹ năng xã hội cơ bản",
        id: "Keterampilan sosial dasar"
      }
    ],
    cons: [
      { 
        ko: "깊은 이해 부족",
        en: "Lack of deep understanding",
        ja: "深い理解の欠如",
        "zh-CN": "缺乏深度理解",
        "zh-TW": "缺乏深度理解",
        vi: "Thiếu hiểu biết sâu sắc",
        id: "Kurang pemahaman mendalam"
      },
      {
        ko: "둔감함",
        en: "Insensitivity",
        ja: "鈍感さ",
        "zh-CN": "迟钝",
        "zh-TW": "遲鈍",
        vi: "Thiếu nhạy cảm",
        id: "Ketidakpekaan"
      }
    ],
    advice: {
      ko: "타인의 표정과 말투에 더 관심을 가져보세요. 공감은 연습으로 향상됩니다!",
      en: "Pay more attention to others' expressions and tone. Empathy improves with practice!",
      ja: "他人の表情や話し方にもっと関心を持ってみてください。共感は練習で向上します！",
      "zh-CN": "多关注他人的表情和语调。共情通过练习可以提高！",
      "zh-TW": "多關注他人的表情和語調。共情通過練習可以提高！",
      vi: "Hãy chú ý nhiều hơn đến biểu cảm và giọng điệu của người khác. Đồng cảm sẽ cải thiện qua luyện tập!",
      id: "Perhatikan lebih banyak ekspresi dan nada bicara orang lain. Empati meningkat dengan latihan!"
    },
    recommendedJobs: {
      ko: "기술직, 전문직",
      en: "Technical, professional jobs",
      ja: "技術職、専門職",
      "zh-CN": "技术工作，专业工作",
      "zh-TW": "技術工作，專業工作",
      vi: "Công việc kỹ thuật, chuyên môn",
      id: "Pekerjaan teknis, profesional"
    },
    compatibility: {
      good: ["Level4", "Level2"],
      careful: ["Level6", "Level1"]
    },
    emoji: "💛",
    level: {
      ko: "★★★☆☆☆ (3/6) 보통",
      en: "★★★☆☆☆ (3/6) Average",
      ja: "★★★☆☆☆ (3/6) 普通",
      "zh-CN": "★★★☆☆☆ (3/6) 普通",
      "zh-TW": "★★★☆☆☆ (3/6) 普通",
      vi: "★★★☆☆☆ (3/6) Trung bình",
      id: "★★★☆☆☆ (3/6) Rata-rata"
    },
    maxScore: 31
  },
  {
    type: "Level2",
    title: {
      ko: "낮은 공감형",
      en: "Low Empathy Type",
      ja: "低い共感型",
      "zh-CN": "低共情型",
      "zh-TW": "低共情型",
      vi: "Kiểu đồng cảm thấp",
      id: "Tipe Empati Rendah"
    },
    description: {
      ko: "향상 필요! 공감 능력 개발이 필요함",
      en: "Improvement needed! Empathy ability development required",
      ja: "向上が必要！共感能力の開発が必要",
      "zh-CN": "需要改进！需要发展共情能力",
      "zh-TW": "需要改進！需要發展共情能力",
      vi: "Cần cải thiện! Cần phát triển khả năng đồng cảm",
      id: "Perlu peningkatan! Perlu pengembangan kemampuan empati"
    },
    longDescription: {
      ko: "공감 능력이 낮은 편입니다. 타인의 감정을 이해하기 어렵고, 왜 그런 감정인지 파악이 힘듭니다. 관계에서 오해가 자주 생기고, 무심하다는 말을 들을 수 있습니다. 의식적인 노력과 훈련이 필요합니다.",
      en: "Your empathy ability is low. It's difficult to understand others' emotions and hard to figure out why they feel that way. Misunderstandings often occur in relationships, and you may be called insensitive. Conscious effort and training are needed.",
      ja: "共感能力が低いです。他人の感情を理解することが困難で、なぜそのような感情なのかを把握することが困難です。関係で誤解が頻繁に発生し、無神経だと言われることがあります。意識的な努力と訓練が必要です。",
      "zh-CN": "你的共情能力较低。很难理解他人的情感，也很难弄清楚他们为什么会有那样的感受。关系中经常产生误解，可能会被说成冷漠。需要意识的努力和训练。",
      "zh-TW": "你的共情能力較低。很難理解他人的情感，也很難弄清楚他們為什麼會有那樣的感受。關係中經常產生誤解，可能會被說成冷漠。需要意識的努力和訓練。",
      vi: "Khả năng đồng cảm của bạn thấp. Khó hiểu cảm xúc của người khác và khó tìm hiểu tại sao họ cảm thấy như vậy. Hiểu lầm thường xảy ra trong các mối quan hệ, và bạn có thể bị gọi là thiếu nhạy cảm. Cần nỗ lực có ý thức và luyện tập.",
      id: "Kemampuan empati Anda rendah. Sulit memahami emosi orang lain dan sulit mencari tahu mengapa mereka merasa seperti itu. Kesalahpahaman sering terjadi dalam hubungan, dan Anda mungkin disebut tidak peka. Diperlukan usaha sadar dan pelatihan."
    },
    pros: [
      { 
        ko: "객관적",
        en: "Objective",
        ja: "客観的",
        "zh-CN": "客观",
        "zh-TW": "客觀",
        vi: "Khách quan",
        id: "Objektif"
      },
      { 
        ko: "감정에 휘둘리지 않음",
        en: "Not swayed by emotions",
        ja: "感情に左右されない",
        "zh-CN": "不被情绪左右",
        "zh-TW": "不被情緒左右",
        vi: "Không bị cảm xúc chi phối",
        id: "Tidak terpengaruh emosi"
      }
    ],
    cons: [
      { 
        ko: "관계 어려움",
        en: "Relationship difficulties",
        ja: "関係の困難",
        "zh-CN": "关系困难",
        "zh-TW": "關係困難",
        vi: "Khó khăn trong mối quan hệ",
        id: "Kesulitan hubungan"
      },
      {
        ko: "오해 많음",
        en: "Many misunderstandings",
        ja: "多くの誤解",
        "zh-CN": "很多误解",
        "zh-TW": "很多誤解",
        vi: "Nhiều hiểu lầm",
        id: "Banyak kesalahpahaman"
      },
      { 
        ko: "외로움",
        en: "Loneliness",
        ja: "孤独",
        "zh-CN": "孤独",
        "zh-TW": "孤獨",
        vi: "Cô đơn",
        id: "Kesepian"
      }
    ],
    advice: {
      ko: "공감은 학습 가능합니다. \"상대가 어떤 기분일까?\" 자주 물어보세요.",
      en: "Empathy can be learned. Ask yourself \"How is the other person feeling?\" frequently.",
      ja: "共感は学習可能です。「相手はどんな気持ちかな？」と頻繁に自問してください。",
      "zh-CN": "共情是可以学习的。经常问自己「对方是什么感受？」",
      "zh-TW": "共情是可以學習的。經常問自己「對方是什麼感受？」",
      vi: "Đồng cảm có thể học được. Hãy thường xuyên tự hỏi \"Người kia đang cảm thấy thế nào?\"",
      id: "Empati bisa dipelajari. Sering-sering bertanya pada diri sendiri \"Bagaimana perasaan orang lain?\""
    },
    recommendedJobs: {
      ko: "연구직, 데이터 분석",
      en: "Research, data analysis",
      ja: "研究職、データ分析",
      "zh-CN": "研究工作，数据分析",
      "zh-TW": "研究工作，數據分析",
      vi: "Nghiên cứu, phân tích dữ liệu",
      id: "Penelitian, analisis data"
    },
    compatibility: {
      good: ["Level3", "Level1"],
      careful: ["Level6", "Level5"]
    },
    emoji: "🧡",
    level: {
      ko: "★★☆☆☆☆ (2/6) 낮음",
      en: "★★☆☆☆☆ (2/6) Low",
      ja: "★★☆☆☆☆ (2/6) 低い",
      "zh-CN": "★★☆☆☆☆ (2/6) 低",
      "zh-TW": "★★☆☆☆☆ (2/6) 低",
      vi: "★★☆☆☆☆ (2/6) Thấp",
      id: "★★☆☆☆☆ (2/6) Rendah"
    },
    maxScore: 60
  },
  {
    type: "Level1",
    title: {
      ko: "매우 낮은 공감형",
      en: "Very Low Empathy Type",
      ja: "非常に低い共感型",
      "zh-CN": "非常低共情型",
      "zh-TW": "非常低共情型",
      vi: "Kiểu đồng cảm rất thấp",
      id: "Tipe Empati Sangat Rendah"
    },
    description: {
      ko: "전문가 도움 권장! 공감 능력 개발 시급",
      en: "Professional help recommended! Urgent empathy ability development needed",
      ja: "専門家の助けをお勧め！共感能力の開発が急務",
      "zh-CN": "建议寻求专业帮助！急需发展共情能力",
      "zh-TW": "建議尋求專業幫助！急需發展共情能力",
      vi: "Khuyến nghị tìm kiếm sự giúp đỡ chuyên nghiệp! Cần phát triển khả năng đồng cảm khẩn cấp",
      id: "Direkomendasikan bantuan profesional! Perlu pengembangan kemampuan empati yang mendesak"
    },
    longDescription: {
      ko: "공감 능력이 매우 낮습니다. 타인의 감정을 거의 이해하지 못하고, 관계 형성이 매우 어렵습니다. 사회생활에서 어려움이 많고, 외롭거나 고립될 수 있습니다. 전문가의 도움을 받아 EQ를 향상시키는 것을 권장합니다.",
      en: "Your empathy ability is very low. You hardly understand others' emotions and forming relationships is very difficult. You face many difficulties in social life and may feel lonely or isolated. It's recommended to seek professional help to improve your EQ.",
      ja: "共感能力が非常に低いです。他人の感情をほとんど理解できず、関係の形成が非常に困難です。社会生活で多くの困難に直面し、孤独感や孤立感を感じる可能性があります。EQを向上させるために専門家の助けを求めることをお勧めします。",
      "zh-CN": "你的共情能力非常低。几乎无法理解他人的情感，关系形成非常困难。在社会生活中面临很多困难，可能会感到孤独或被孤立。建议寻求专业帮助来提高你的EQ。",
      "zh-TW": "你的共情能力非常低。幾乎無法理解他人的情感，關係形成非常困難。在社會生活中面臨很多困難，可能會感到孤獨或被孤立。建議尋求專業幫助來提高你的EQ。",
      vi: "Khả năng đồng cảm của bạn rất thấp. Bạn hầu như không hiểu cảm xúc của người khác và việc hình thành mối quan hệ rất khó khăn. Bạn gặp nhiều khó khăn trong cuộc sống xã hội và có thể cảm thấy cô đơn hoặc bị cô lập. Nên tìm kiếm sự giúp đỡ chuyên nghiệp để cải thiện EQ.",
      id: "Kemampuan empati Anda sangat rendah. Anda hampir tidak memahami emosi orang lain dan pembentukan hubungan sangat sulit. Anda menghadapi banyak kesulitan dalam kehidupan sosial dan mungkin merasa kesepian atau terisolasi. Disarankan untuk mencari bantuan profesional untuk meningkatkan EQ Anda."
    },
    pros: [
      { 
        ko: "매우 객관적",
        en: "Very objective",
        ja: "非常に客観的",
        "zh-CN": "非常客观",
        "zh-TW": "非常客觀",
        vi: "Rất khách quan",
        id: "Sangat objektif"
      }
    ],
    cons: [
      { 
        ko: "관계 매우 어려움",
        en: "Very difficult relationships",
        ja: "関係が非常に困難",
        "zh-CN": "关系非常困难",
        "zh-TW": "關係非常困難",
        vi: "Mối quan hệ rất khó khăn",
        id: "Hubungan sangat sulit"
      },
      { 
        ko: "고립",
        en: "Isolation",
        ja: "孤立",
        "zh-CN": "孤立",
        "zh-TW": "孤立",
        vi: "Cô lập",
        id: "Isolasi"
      },
      { 
        ko: "오해",
        en: "Misunderstandings",
        ja: "誤解",
        "zh-CN": "误解",
        "zh-TW": "誤解",
        vi: "Hiểu lầm",
        id: "Kesalahpahaman"
      }
    ],
    advice: {
      ko: "공감은 배울 수 있어요. 심리 상담이나 EQ 향상 프로그램을 시도해보세요.",
      en: "Empathy can be learned. Try psychological counseling or EQ improvement programs.",
      ja: "共感は学べます。心理カウンセリングやEQ向上プログラムを試してみてください。",
      "zh-CN": "共情是可以学习的。尝试心理咨询或EQ提升项目。",
      "zh-TW": "共情是可以學習的。嘗試心理諮詢或EQ提升項目。",
      vi: "Đồng cảm có thể học được. Hãy thử tư vấn tâm lý hoặc các chương trình cải thiện EQ.",
      id: "Empati bisa dipelajari. Coba konseling psikologi atau program peningkatan EQ."
    },
    recommendedJobs: {
      ko: "연구직, 데이터 분석",
      en: "Research, data analysis",
      ja: "研究職、データ分析",
      "zh-CN": "研究工作，数据分析",
      "zh-TW": "研究工作，數據分析",
      vi: "Nghiên cứu, phân tích dữ liệu",
      id: "Penelitian, analisis data"
    },
    compatibility: {
      good: ["Level2", "Level1"],
      careful: ["Level6", "Level5", "Level4"]
    },
    emoji: "❤️",
    level: {
      ko: "★☆☆☆☆☆ (1/6) 매우 낮음",
      en: "★☆☆☆☆☆ (1/6) Very Low",
      ja: "★☆☆☆☆☆ (1/6) 非常に低い",
      "zh-CN": "★☆☆☆☆☆ (1/6) 非常低",
      "zh-TW": "★☆☆☆☆☆ (1/6) 非常低",
      vi: "★☆☆☆☆☆ (1/6) Rất thấp",
      id: "★☆☆☆☆☆ (1/6) Sangat rendah"
    },
    maxScore: 54
  }
];

export function calculateEmpathyResult(answers: Array<{ questionId: number; scores: Record<string, number> }>): EmpathyResult {
  const scores = {
    "Level6": 0,
    "Level5": 0,
    "Level4": 0,
    "Level3": 0,
    "Level2": 0,
    "Level1": 0
  };

  // 점수 계산
  answers.forEach(answer => {
    Object.entries(answer.scores).forEach(([level, score]) => {
      if (scores.hasOwnProperty(level)) {
        scores[level as keyof typeof scores] += score;
      }
    });
  });
  
  // 최고 점수 Level 찾기
  let maxScore = 0;
  let resultType = "Level3"; // 기본값

  Object.entries(scores).forEach(([level, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = level;
    }
  });

  // 결과 찾기
  const result = empathyResults.find(r => r.type === resultType);
  return result || empathyResults[2]; // 기본값으로 Level3 반환
}