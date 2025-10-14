export interface AttachmentQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    a: Record<string, string>;
    b: Record<string, string>;
    c: Record<string, string>;
    d: Record<string, string>;
  };
}

export interface AttachmentResult {
  type: number;
  title: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
  characteristics: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
  relationshipPattern: {
    ko: string[];
    en: string[];
    ja: string[];
    zh: string[];
    zhTW: string[];
    vi: string[];
    id: string[];
  };
  advice: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
  bestMatch: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
  goodMatch: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
  carefulMatch: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
  difficultMatch: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
}

export const attachmentQuestions: AttachmentQuestion[] = [
  {
    id: 1,
    question: {
      ko: "연인에게 연락이 안 올 때, 나는?",
      en: "When my partner doesn't contact me, I...",
      ja: "恋人が連絡してこないとき、私は？",
      zh: "当恋人没有联系我时，我...",
      zhTW: "當戀人沒有聯繫我時，我...",
      vi: "Khi người yêu không liên lạc, tôi...",
      id: "Ketika pasangan tidak menghubungi saya, saya..."
    },
    options: {
      a: {
        ko: '"바쁘겠지" 여유롭게 기다림',
        en: '"They must be busy" and wait calmly',
        ja: '「忙しいんだろう」と余裕を持って待つ',
        zh: '「他们一定很忙」 平静地等待',
        zhTW: '「他們一定很忙」 平靜地等待',
        vi: '「Họ chắc đang bận」 và chờ đợi bình tĩnh',
        id: '「Mereka pasti sibuk」 dan menunggu dengan tenang'
      },
      b: {
        ko: "불안해서 계속 확인하고 연락함",
        en: "Feel anxious and keep checking and contacting",
        ja: "不安で何度も確認して連絡する",
        zh: "感到焦虑并不断查看和联系",
        zhTW: "感到焦慮並不斷查看和聯繫",
        vi: "Lo lắng và liên tục kiểm tra và liên lạc",
        id: "Merasa cemas dan terus mengecek serta menghubungi"
      },
      c: {
        ko: "별로 신경 안 씀",
        en: "Don't really care",
        ja: "あまり気にしない",
        zh: "不太在意",
        zhTW: "不太在意",
        vi: "Không thực sự quan tâm",
        id: "Tidak terlalu peduli"
      },
      d: {
        ko: "불안하지만 연락하기 싫음",
        en: "Feel anxious but don't want to contact",
        ja: "不安だが連絡したくない",
        zh: "感到焦虑但不想联系",
        zhTW: "感到焦慮但不想聯繫",
        vi: "Lo lắng nhưng không muốn liên lạc",
        id: "Merasa cemas tapi tidak ingin menghubungi"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "연인이 \"사랑해\"라고 말하면?",
      en: "When my partner says \"I love you\"?",
      ja: "恋人が「愛してる」と言ったら？",
      zh: "当恋人说「我爱你」时？",
      zhTW: "當戀人說「我愛你」時？",
      vi: "Khi người yêu nói 「Anh yêu em」?",
      id: "Ketika pasangan mengatakan 「Aku mencintaimu」?"
    },
    options: {
      a: {
        ko: "\"나도 사랑해\" 자연스럽게 답함",
        en: "Naturally reply \"I love you too\"",
        ja: "「私も愛してる」と自然に答える",
        zh: "自然地回答「我也爱你」",
        zhTW: "自然地回答「我也愛你」",
        vi: "Tự nhiên trả lời 「Em cũng yêu anh」",
        id: "Secara alami menjawab 「Aku juga mencintaimu」"
      },
      b: {
        ko: "정말? 진심? 계속 확인하고 싶음",
        en: "Really? Sincerely? Want to keep confirming",
        ja: "本当？本気？ずっと確認したくなる",
        zh: "真的吗？真心吗？想不断确认",
        zhTW: "真的嗎？真心嗎？想不斷確認",
        vi: "Thật không? Thật lòng? Muốn liên tục xác nhận",
        id: "Benarkah? Tulus? Ingin terus mengonfirmasi"
      },
      c: {
        ko: "부담스럽고 불편함",
        en: "Feel burdened and uncomfortable",
        ja: "負担に感じて不快",
        zh: "感到负担和不舒服",
        zhTW: "感到負擔和不舒服",
        vi: "Cảm thấy gánh nặng và khó chịu",
        id: "Merasa terbebani dan tidak nyaman"
      },
      d: {
        ko: "기쁘지만 믿기 어려움",
        en: "Happy but hard to believe",
        ja: "嬉しいけど信じにくい",
        zh: "高兴但难以相信",
        zhTW: "高興但難以相信",
        vi: "Vui nhưng khó tin",
        id: "Senang tapi sulit percaya"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "관계가 가까워질수록?",
      en: "As the relationship gets closer?",
      ja: "関係が近くなるほど？",
      zh: "随着关系变得亲密？",
      zhTW: "隨著關係變得親密？",
      vi: "Khi mối quan hệ trở nên gần gũi hơn?",
      id: "Saat hubungan semakin dekat?"
    },
    options: {
      a: {
        ko: "더 편안하고 행복함",
        en: "Feel more comfortable and happy",
        ja: "より快適で幸せ",
        zh: "感到更舒适和快乐",
        zhTW: "感到更舒適和快樂",
        vi: "Cảm thấy thoải mái và hạnh phúc hơn",
        id: "Merasa lebih nyaman dan bahagia"
      },
      b: {
        ko: "버림받을까 더 불안함",
        en: "Worry more about being abandoned",
        ja: "見捨てられるかもとより不安",
        zh: "更担心被抛弃",
        zhTW: "更擔心被拋棄",
        vi: "Lo lắng hơn về việc bị bỏ rơi",
        id: "Lebih khawatir akan ditinggalkan"
      },
      c: {
        ko: "숨 막히고 거리를 두고 싶음",
        en: "Feel suffocated and want distance",
        ja: "息苦しくて距離を置きたくなる",
        zh: "感到窒息想保持距离",
        zhTW: "感到窒息想保持距離",
        vi: "Cảm thấy ngột ngạt và muốn giữ khoảng cách",
        id: "Merasa sesak dan ingin menjaga jarak"
      },
      d: {
        ko: "가까워지고 싶지만 동시에 두려움",
        en: "Want to get closer but also fear it",
        ja: "近づきたいけど同時に恐れも",
        zh: "想要靠近但同时也害怕",
        zhTW: "想要靠近但同時也害怕",
        vi: "Muốn gần gũi hơn nhưng đồng thời cũng sợ hãi",
        id: "Ingin lebih dekat tapi juga takut"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "연인과 다툰 후에는?",
      en: "After arguing with my partner?",
      ja: "恋人とけんかをした後は？",
      zh: "与恋人争吵后？",
      zhTW: "與戀人爭吵後？",
      vi: "Sau khi cãi nhau với người yêu?",
      id: "Setelah bertengkar dengan pasangan?"
    },
    options: {
      a: {
        ko: "대화로 풀고 금방 회복함",
        en: "Resolve through conversation and recover quickly",
        ja: "会話で解決してすぐに回復",
        zh: "通过对话解决并快速恢复",
        zhTW: "通過對話解決並快速恢復",
        vi: "Giải quyết qua trò chuyện và hồi phục nhanh chóng",
        id: "Menyelesaikan melalui percakapan dan pulih dengan cepat"
      },
      b: {
        ko: "계속 생각하고 불안해함",
        en: "Keep thinking about it and feel anxious",
        ja: "ずっと考えて不安になる",
        zh: "不断思考并感到焦虑",
        zhTW: "不斷思考並感到焦慮",
        vi: "Tiếp tục nghĩ về nó và cảm thấy lo lắng",
        id: "Terus memikirkan dan merasa cemas"
      },
      c: {
        ko: "혼자 있고 싶음",
        en: "Want to be alone",
        ja: "一人でいたい",
        zh: "想一个人待着",
        zhTW: "想一個人待著",
        vi: "Muốn ở một mình",
        id: "Ingin sendirian"
      },
      d: {
        ko: "먼저 연락하기 힘들지만 불안함",
        en: "Hard to contact first but feel anxious",
        ja: "先に連絡するのは難しいけど不安",
        zh: "很难先联系但感到焦虑",
        zhTW: "很難先聯繫但感到焦慮",
        vi: "Khó liên lạc trước nhưng cảm thấy lo lắng",
        id: "Sulit menghubungi duluan tapi merasa cemas"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "\"우리 잠깐 떨어져 있자\"는 말에?",
      en: "When they say \"Let's take a break\"?",
      ja: "「ちょっと距離を置こう」と言われたら？",
      zh: "当说「我们暂时分开吧」时？",
      zhTW: "當說「我們暫時分開吧」時？",
      vi: "Khi họ nói 「Chúng ta tạm thời xa nhau nhé」?",
      id: "Ketika mereka mengatakan 「Mari kita berpisah sementara」?"
    },
    options: {
      a: {
        ko: "이유를 듣고 이해하려 함",
        en: "Listen to the reason and try to understand",
        ja: "理由を聞いて理解しようとする",
        zh: "倾听原因并尝试理解",
        zhTW: "傾聽原因並嘗試理解",
        vi: "Lắng nghe lý do và cố gắng hiểu",
        id: "Mendengarkan alasan dan mencoba memahami"
      },
      b: {
        ko: "이별 신호? 완전 패닉",
        en: "Breakup signal? Complete panic",
        ja: "別れのサイン？完全パニック",
        zh: "分手信号？完全恐慌",
        zhTW: "分手信號？完全恐慌",
        vi: "Tín hiệu chia tay? Hoàn toàn hoảng loạn",
        id: "Sinyal putus? Panik total"
      },
      c: {
        ko: "오히려 편안함",
        en: "Actually feel comfortable",
        ja: "むしろ安心",
        zh: "反而感到舒适",
        zhTW: "反而感到舒適",
        vi: "Thực ra cảm thấy thoải mái",
        id: "Justru merasa nyaman"
      },
      d: {
        ko: "두렵지만 \"그래\" 라고 말함",
        en: "Scared but say \"Okay\"",
        ja: "怖いけど「そうだね」と言う",
        zh: "害怕但说「好吧」",
        zhTW: "害怕但說「好吧」",
        vi: "Sợ hãi nhưng nói 「Được thôi」",
        id: "Takut tapi bilang 「Baik」"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "연인이 다른 사람과 친하게 지내면?",
      en: "When my partner gets close to someone else?",
      ja: "恋人が他の人と親しくしていたら？",
      zh: "当恋人与其他人关系亲密时？",
      zhTW: "當戀人與其他人關係親密時？",
      vi: "Khi người yêu thân thiết với người khác?",
      id: "Ketika pasangan akrab dengan orang lain?"
    },
    options: {
      a: {
        ko: "믿고 괜찮음",
        en: "Trust and it's okay",
        ja: "信じて大丈夫",
        zh: "信任并觉得没问题",
        zhTW: "信任並覺得沒問題",
        vi: "Tin tưởng và ổn",
        id: "Mempercayai dan baik-baik saja"
      },
      b: {
        ko: "질투 나고 불안함",
        en: "Feel jealous and anxious",
        ja: "嫉妬して不安",
        zh: "感到嫉妒和焦虑",
        zhTW: "感到嫉妒和焦慮",
        vi: "Cảm thấy ghen tị và lo lắng",
        id: "Merasa cemburu dan cemas"
      },
      c: {
        ko: "관심 없음",
        en: "Not interested",
        ja: "関心なし",
        zh: "不感兴趣",
        zhTW: "不感興趣",
        vi: "Không quan tâm",
        id: "Tidak tertarik"
      },
      d: {
        ko: "신경 쓰이지만 표현 안 함",
        en: "It bothers me but don't express it",
        ja: "気になるけど表現しない",
        zh: "在意但不表达",
        zhTW: "在意但不表達",
        vi: "Quan tâm nhưng không biểu lộ",
        id: "Mengganggu tapi tidak mengungkapkan"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "내가 힘들 때 연인에게?",
      en: "When I'm having a hard time, with my partner?",
      ja: "私が辛い時、恋人には？",
      zh: "当我困难时，对恋人？",
      zhTW: "當我困難時，對戀人？",
      vi: "Khi tôi khó khăn, với người yêu?",
      id: "Ketika saya kesulitan, dengan pasangan?"
    },
    options: {
      a: {
        ko: "자연스럽게 의지함",
        en: "Naturally rely on them",
        ja: "自然に頼る",
        zh: "自然地依靠他们",
        zhTW: "自然地依靠他們",
        vi: "Tự nhiên dựa vào họ",
        id: "Secara alami mengandalkan mereka"
      },
      b: {
        ko: "빨리 와달라고 자주 말함",
        en: "Often ask them to come quickly",
        ja: "早く来てと言うことが多い",
        zh: "经常要求他们快来",
        zhTW: "經常要求他們快來",
        vi: "Thường xuyên yêu cầu họ đến nhanh",
        id: "Sering meminta mereka datang cepat"
      },
      c: {
        ko: "혼자 해결하고 싶음",
        en: "Want to solve it alone",
        ja: "一人で解決したい",
        zh: "想独自解决",
        zhTW: "想獨自解決",
        vi: "Muốn tự giải quyết",
        id: "Ingin menyelesaikan sendiri"
      },
      d: {
        ko: "도움받고 싶지만 말 못함",
        en: "Want help but can't say it",
        ja: "助けが欲しいけど言えない",
        zh: "想要帮助但说不出口",
        zhTW: "想要幫助但說不出口",
        vi: "Muốn được giúp đỡ nhưng không thể nói",
        id: "Ingin bantuan tapi tidak bisa mengatakannya"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "관계에서 나의 모습은?",
      en: "My appearance in the relationship?",
      ja: "関係での私の姿は？",
      zh: "在关系中的我是什么样子？",
      zhTW: "在關係中的我是什麼樣子？",
      vi: "Hình ảnh của tôi trong mối quan hệ?",
      id: "Penampilan saya dalam hubungan?"
    },
    options: {
      a: {
        ko: "독립적이면서도 친밀함",
        en: "Independent yet intimate",
        ja: "独立しつつも親密",
        zh: "独立但亲密",
        zhTW: "獨立但親密",
        vi: "Độc lập nhưng thân mật",
        id: "Mandiri tapi intim"
      },
      b: {
        ko: "항상 확인하고 집착하는 편",
        en: "Always checking and obsessing",
        ja: "いつも確認して執着するタイプ",
        zh: "总是确认和执着的类型",
        zhTW: "總是確認和執著的類型",
        vi: "Luôn kiểm tra và ám ảnh",
        id: "Selalu mengecek dan terobsesi"
      },
      c: {
        ko: "거리 두고 독립적",
        en: "Keep distance and independent",
        ja: "距離を置いて独立",
        zh: "保持距离并独立",
        zhTW: "保持距離並獨立",
        vi: "Giữ khoảng cách và độc lập",
        id: "Menjaga jarak dan mandiri"
      },
      d: {
        ko: "다가갔다 멀어졌다 반복",
        en: "Repeatedly getting close and distant",
        ja: "近づいたり離れたりを繰り返す",
        zh: "反复接近和疏远",
        zhTW: "反復接近和疏遠",
        vi: "Lặp lại việc gần gũi và xa cách",
        id: "Berulang kali mendekat dan menjauh"
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "연인이 바쁘다고 만나주지 않으면?",
      en: "When my partner says they're busy and won't meet?",
      ja: "恋人が忙しいと言って会ってくれないと？",
      zh: "当恋人说忙而不愿见面时？",
      zhTW: "當戀人說忙而不願見面時？",
      vi: "Khi người yêu nói bận và không muốn gặp?",
      id: "Ketika pasangan bilang sibuk dan tidak mau bertemu?"
    },
    options: {
      a: {
        ko: "다음에 만나면 됨",
        en: "It's okay to meet next time",
        ja: "次回会えばいい",
        zh: "下次见面就好",
        zhTW: "下次見面就好",
        vi: "Lần sau gặp cũng được",
        id: "Tidak apa-apa bertemu lain kali"
      },
      b: {
        ko: "나를 안 좋아하나? 불안",
        en: "Don't they like me? Feel anxious",
        ja: "私を好きじゃない？不安",
        zh: "他们不喜欢我吗？感到焦虑",
        zhTW: "他們不喜歡我嗎？感到焦慮",
        vi: "Họ không thích tôi sao? Lo lắng",
        id: "Mereka tidak suka saya? Merasa cemas"
      },
      c: {
        ko: "나도 내 일 함",
        en: "I'll do my own thing too",
        ja: "私も自分のことをする",
        zh: "我也做自己的事",
        zhTW: "我也做自己的事",
        vi: "Tôi cũng làm việc của mình",
        id: "Saya juga melakukan urusan sendiri"
      },
      d: {
        ko: "서운하지만 이해하는 척",
        en: "Feel hurt but pretend to understand",
        ja: "寂しいけど理解するふり",
        zh: "感到难过但假装理解",
        zhTW: "感到難過但假裝理解",
        vi: "Buồn nhưng giả vờ hiểu",
        id: "Sedih tapi pura-pura mengerti"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "이별을 경험하면?",
      en: "When I experience a breakup?",
      ja: "別れを経験したら？",
      zh: "当我经历分手时？",
      zhTW: "當我經歷分手時？",
      vi: "Khi tôi trải qua chia tay?",
      id: "Ketika saya mengalami putus?"
    },
    options: {
      a: {
        ko: "아프지만 시간이 지나면 회복함",
        en: "It hurts but recover over time",
        ja: "痛いけど時間が経てば回復",
        zh: "很痛苦但随时间恢复",
        zhTW: "很痛苦但隨時間恢復",
        vi: "Đau nhưng sẽ hồi phục theo thời gian",
        id: "Sakit tapi pulih seiring waktu"
      },
      b: {
        ko: "세상이 무너짐, 오래 힘듦",
        en: "The world collapses, suffer for a long time",
        ja: "世界が崩壊、長く苦しむ",
        zh: "世界崩塌，痛苦很久",
        zhTW: "世界崩塌，痛苦很久",
        vi: "Thế giới sụp đổ, đau khổ lâu dài",
        id: "Dunia runtuh, menderita lama"
      },
      c: {
        ko: "생각보다 괜찮음",
        en: "Better than expected",
        ja: "思ったより大丈夫",
        zh: "比想象的好",
        zhTW: "比想像的好",
        vi: "Tốt hơn mong đợi",
        id: "Lebih baik dari yang diperkirakan"
      },
      d: {
        ko: "고통스럽지만 표현 못함",
        en: "Painful but can't express it",
        ja: "苦しいけど表現できない",
        zh: "痛苦但无法表达",
        zhTW: "痛苦但無法表達",
        vi: "Đau đớn nhưng không thể biểu lộ",
        id: "Menyakitkan tapi tidak bisa mengekspresikan"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "나에게 관계란?",
      en: "What does a relationship mean to me?",
      ja: "私にとって関係とは？",
      zh: "对我而言关系是什么？",
      zhTW: "對我而言關係是什麼？",
      vi: "Đối với tôi mối quan hệ là gì?",
      id: "Apa arti hubungan bagi saya?"
    },
    options: {
      a: {
        ko: "삶의 일부, 중요하지만 전부는 아님",
        en: "Part of life, important but not everything",
        ja: "人生の一部、重要だけど全部ではない",
        zh: "生活的一部分，重要但不是全部",
        zhTW: "生活的一部分，重要但不是全部",
        vi: "Một phần của cuộc sống, quan trọng nhưng không phải tất cả",
        id: "Bagian dari hidup, penting tapi bukan segalanya"
      },
      b: {
        ko: "내 삶의 전부, 없으면 안 됨",
        en: "Everything in my life, can't live without it",
        ja: "私の人生の全て、なくてはならない",
        zh: "我生活的全部，没有它不行",
        zhTW: "我生活的全部，沒有它不行",
        vi: "Tất cả cuộc sống của tôi, không thể sống thiếu nó",
        id: "Segalanya dalam hidup saya, tidak bisa hidup tanpanya"
      },
      c: {
        ko: "부담스럽고 불편함",
        en: "Burdening and uncomfortable",
        ja: "負担で不快",
        zh: "负担和不舒服",
        zhTW: "負擔和不舒服",
        vi: "Gánh nặng và khó chịu",
        id: "Membebani dan tidak nyaman"
      },
      d: {
        ko: "원하지만 두려움",
        en: "Want it but fear it",
        ja: "欲しいけど怖い",
        zh: "想要但害怕",
        zhTW: "想要但害怕",
        vi: "Muốn nhưng sợ hãi",
        id: "Ingin tapi takut"
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "미래의 관계를 상상하면?",
      en: "When I imagine future relationships?",
      ja: "将来の関係を想像したら？",
      zh: "当我想象未来的关系时？",
      zhTW: "當我想像未來的關係時？",
      vi: "Khi tôi tưởng tượng về mối quan hệ tương lai?",
      id: "Ketika saya membayangkan hubungan di masa depan?"
    },
    options: {
      a: {
        ko: "행복한 모습이 그려짐",
        en: "Happy scenes come to mind",
        ja: "幸せな姿が浮かぶ",
        zh: "浮现幸福的画面",
        zhTW: "浮現幸福的畫面",
        vi: "Hình ảnh hạnh phúc hiện lên",
        id: "Gambaran bahagia muncul"
      },
      b: {
        ko: "버림받을까 불안함",
        en: "Worry about being abandoned",
        ja: "見捨てられるかもと不安",
        zh: "担心被抛弃",
        zhTW: "擔心被拋棄",
        vi: "Lo lắng về việc bị bỏ rơi",
        id: "Khawatir akan ditinggalkan"
      },
      c: {
        ko: "잘 모르겠고 부담됨",
        en: "Don't know and feel burdened",
        ja: "よく分からず負担",
        zh: "不知道并感到负担",
        zhTW: "不知道並感到負擔",
        vi: "Không biết rõ và cảm thấy gánh nặng",
        id: "Tidak tahu dan merasa terbebani"
      },
      d: {
        ko: "원하지만 상처받을까 두려움",
        en: "Want it but fear getting hurt",
        ja: "欲しいけど傷つくのが怖い",
        zh: "想要但害怕受伤",
        zhTW: "想要但害怕受傷",
        vi: "Muốn nhưng sợ bị tổn thương",
        id: "Ingin tapi takut terluka"
      }
    }
  }
];

export const attachmentResults: AttachmentResult[] = [
  {
    type: 1,
    title: {
      ko: "🌟 안정형 애착 (Secure Attachment)",
      en: "🌟 Secure Attachment",
      ja: "🌟 安全型アタッチメント",
      zh: "🌟 安全型依恋",
      zhTW: "🌟 安全型依戀",
      vi: "🌟 Gắn bó An toàn",
      id: "🌟 Kelekatan Aman"
    },
    description: {
      ko: "건강한 사랑의 달인! 가장 이상적인 애착 스타일",
      en: "Master of healthy love! The most ideal attachment style",
      ja: "健康的な愛の達人！最も理想的なアタッチメントスタイル",
      zh: "健康爱情的大师！最理想的依恋风格",
      zhTW: "健康愛情的大師！最理想的依戀風格",
      vi: "Bậc thầy của tình yêu lành mạnh! Phong cách gắn bó lý tưởng nhất",
      id: "Master cinta yang sehat! Gaya kelekatan yang paling ideal"
    },
    characteristics: {
      ko: "자신과 타인 모두를 신뢰하며 친밀함과 독립성의 완벽한 균형을 유지합니다. 사랑받을 자격이 있다고 믿고, 상대방도 신뢰합니다.",
      en: "Trusts both self and others, maintaining perfect balance between intimacy and independence. Believes in deserving love and trusts their partner.",
      ja: "自分と他人の両方を信頼し、親密さと独立性の完璧なバランスを保ちます。愛される資格があると信じ、相手も信頼します。",
      zh: "信任自己和他人，保持亲密与独立的完美平衡。相信自己值得被爱，也信任伴侣。",
      zhTW: "信任自己和他人，保持親密與獨立的完美平衡。相信自己值得被愛，也信任伴侶。",
      vi: "Tin tưởng cả bản thân và người khác, duy trì sự cân bằng hoàn hảo giữa thân mật và độc lập. Tin rằng mình xứng đáng được yêu và tin tưởng đối phương.",
      id: "Mempercayai diri sendiri dan orang lain, mempertahankan keseimbangan sempurna antara keintiman dan kemandirian. Percaya layak dicintai dan mempercayai pasangan."
    },
    relationshipPattern: {
      ko: [
        "✅ 감정을 건강하게 표현",
        "✅ 갈등을 성숙하게 해결",
        "✅ 거절을 개인적으로 받아들이지 않음",
        "✅ 필요할 때 도움 요청 가능",
        "✅ 파트너의 독립성 존중"
      ],
      en: [
        "✅ Express emotions healthily",
        "✅ Resolve conflicts maturely",
        "✅ Don't take rejection personally",
        "✅ Can ask for help when needed",
        "✅ Respect partner's independence"
      ],
      ja: [
        "✅ 感情を健康的に表現",
        "✅ 葛藤を成熟して解決",
        "✅ 拒絶を個人的に受け取らない",
        "✅ 必要な時に助けを求められる",
        "✅ パートナーの独立性を尊重"
      ],
      zh: [
        "✅ 健康地表达情感",
        "✅ 成熟地解决冲突",
        "✅ 不把拒绝当个人问题",
        "✅ 需要时能寻求帮助",
        "✅ 尊重伴侣的独立性"
      ],
      zhTW: [
        "✅ 健康地表達情感",
        "✅ 成熟地解決衝突",
        "✅ 不把拒絕當個人問題",
        "✅ 需要時能尋求幫助",
        "✅ 尊重伴侶的獨立性"
      ],
      vi: [
        "✅ Bày tỏ cảm xúc một cách lành mạnh",
        "✅ Giải quyết xung đột một cách chín chắn",
        "✅ Không coi việc bị từ chối là vấn đề cá nhân",
        "✅ Có thể yêu cầu giúp đỡ khi cần",
        "✅ Tôn trọng sự độc lập của đối phương"
      ],
      id: [
        "✅ Mengekspresikan emosi dengan sehat",
        "✅ Menyelesaikan konflik dengan dewasa",
        "✅ Tidak menganggap penolakan secara pribadi",
        "✅ Bisa meminta bantuan saat dibutuhkan",
        "✅ Menghormati kemandirian pasangan"
      ]
    },
    advice: {
      ko: "현재 모습 그대로 훌륭합니다! 불안정 애착을 가진 파트너를 만나면 인내심을 가지고 안정감을 제공해주세요.",
      en: "You're wonderful as you are! When meeting partners with insecure attachment, provide stability with patience.",
      ja: "現在の姿のままで素晴らしいです！不安定なアタッチメントを持つパートナーに出会ったら、忍耐強く安定感を提供してください。",
      zh: "你现在的样子很棒！遇到不安全依恋的伴侣时，要有耐心地提供稳定感。",
      zhTW: "你現在的樣子很棒！遇到不安全依戀的伴侶時，要有耐心地提供穩定感。",
      vi: "Bạn tuyệt vời như hiện tại! Khi gặp đối phương có sự gắn bó không an toàn, hãy kiên nhẫn và cung cấp sự ổn định.",
      id: "Anda luar biasa seperti sekarang! Ketika bertemu pasangan dengan kelekatan tidak aman, berikan stabilitas dengan kesabaran."
    },
    bestMatch: {
      ko: "안정형",
      en: "Secure type",
      ja: "安全型",
      zh: "安全型",
      zhTW: "安全型",
      vi: "Kiểu an toàn",
      id: "Tipe aman"
    },
    goodMatch: {
      ko: "모든 타입 (안정형이 긍정적 영향)",
      en: "All types (secure type has positive influence)",
      ja: "すべてのタイプ（安全型がポジティブな影響）",
      zh: "所有类型（安全型有积极影响）",
      zhTW: "所有類型（安全型有積極影響）",
      vi: "Tất cả các kiểu (kiểu an toàn có ảnh hưởng tích cực)",
      id: "Semua tipe (tipe aman memiliki pengaruh positif)"
    },
    carefulMatch: {
      ko: "공포형 (많은 인내 필요)",
      en: "Fearful type (needs much patience)",
      ja: "恐怖型（多くの忍耐が必要）",
      zh: "恐惧型（需要很多耐心）",
      zhTW: "恐懼型（需要很多耐心）",
      vi: "Kiểu sợ hãi (cần nhiều kiên nhẫn)",
      id: "Tipe takut (butuh banyak kesabaran)"
    },
    difficultMatch: {
      ko: "없음",
      en: "None",
      ja: "なし",
      zh: "无",
      zhTW: "無",
      vi: "Không có",
      id: "Tidak ada"
    }
  },
  {
    type: 2,
    title: {
      ko: "💜 불안형 애착 (Anxious Attachment)",
      en: "💜 Anxious Attachment",
      ja: "💜 不安型アタッチメント",
      zh: "💜 焦虑型依恋",
      zhTW: "💜 焦慮型依戀",
      vi: "💜 Gắn bó Lo âu",
      id: "💜 Kelekatan Cemas"
    },
    description: {
      ko: "사랑에 목마른 당신, 끊임없는 확인이 필요해요",
      en: "Love-starved you, constantly need reassurance",
      ja: "愛に飢えたあなた、絶え間ない確認が必要です",
      zh: "渴望爱的你，需要不断的确认",
      zhTW: "渴望愛的妳，需要不斷的確認",
      vi: "Bạn khao khát tình yêu, cần sự xác nhận liên tục",
      id: "Anda lapar akan cinta, butuh konfirmasi terus-menerus"
    },
    characteristics: {
      ko: "버림받을까 항상 불안하고 상대방 기분에 과도하게 민감합니다. 관계가 삶의 전부가 되고, 자존감이 연애에 좌우됩니다.",
      en: "Always anxious about being abandoned, overly sensitive to partner's mood. Relationships become life itself, and self-esteem depends on romance.",
      ja: "見捨てられるのではないかと常に不安で、相手の気分に過度に敏感です。関係が人生のすべてとなり、自尊心が恋愛に左右されます。",
      zh: "总是担心被抛弃，对伴侣情绪过度敏感。关系成为生活的全部，自尊心取决于恋爱。",
      zhTW: "總是擔心被拋棄，對伴侶情緒過度敏感。關係成為生活的全部，自尊心取決於戀愛。",
      vi: "Luôn lo lắng về việc bị bỏ rơi, quá nhạy cảm với tâm trạng của đối phương. Mối quan hệ trở thành toàn bộ cuộc sống, lòng tự trọng phụ thuộc vào tình yêu.",
      id: "Selalu cemas akan ditinggalkan, terlalu sensitif terhadap suasana hati pasangan. Hubungan menjadi seluruh hidup, harga diri bergantung pada percintaan."
    },
    relationshipPattern: {
      ko: [
        "⚠️ \"나를 사랑해? 정말?\" 반복 확인",
        "⚠️ 연락 없으면 최악 상상",
        "⚠️ SNS 체크, 질투 많음",
        "⚠️ 집착과 의존 경향",
        "⚠️ 헤어짐 두려워 참음"
      ],
      en: [
        "⚠️ Repeatedly asking 'Do you love me? Really?'",
        "⚠️ Worst case scenarios when no contact",
        "⚠️ Social media checking, lots of jealousy",
        "⚠️ Tendency to obsess and depend",
        "⚠️ Fear of breakup, tolerating everything"
      ],
      ja: [
        "⚠️ 「私を愛してる？本当？」を繰り返し確認",
        "⚠️ 連絡がないと最悪のシナリオを想像",
        "⚠️ SNSチェック、嫉妬が多い",
        "⚠️ 執着と依存の傾向",
        "⚠️ 別れを恐れて我慢"
      ],
      zh: [
        "⚠️ 反复询问「你爱我吗？真的吗？」",
        "⚠️ 没联系时想象最坏情况",
        "⚠️ 社交媒体检查，嫉妒很多",
        "⚠️ 执着和依赖倾向",
        "⚠️ 害怕分手，容忍一切"
      ],
      zhTW: [
        "⚠️ 反覆詢問「你愛我嗎？真的嗎？」",
        "⚠️ 沒聯繫時想像最壞情況",
        "⚠️ 社群媒體檢查，嫉妒很多",
        "⚠️ 執著和依賴傾向",
        "⚠️ 害怕分手，容忍一切"
      ],
      vi: [
        "⚠️ Liên tục hỏi 'Anh có yêu em không? Thật sự?'",
        "⚠️ Tưởng tượng tình huống xấu nhất khi không liên lạc",
        "⚠️ Kiểm tra mạng xã hội, ghen tuông nhiều",
        "⚠️ Xu hướng ám ảnh và phụ thuộc",
        "⚠️ Sợ chia tay, chịu đựng mọi thứ"
      ],
      id: [
        "⚠️ Berulang kali bertanya 'Apakah kamu mencintaiku? Benarkah?'",
        "⚠️ Membayangkan skenario terburuk saat tidak ada kontak",
        "⚠️ Mengecek media sosial, banyak cemburu",
        "⚠️ Kecenderungan obsesi dan ketergantungan",
        "⚠️ Takut putus, menoleransi segalanya"
      ]
    },
    advice: {
      ko: "자기 가치를 관계 밖에서 찾기, 불안 대처법 배우기, 혼자 있는 시간 연습하기. 전문 상담을 적극 권장합니다.",
      en: "Find self-worth outside relationships, learn anxiety coping strategies, practice being alone. Professional counseling is strongly recommended.",
      ja: "関係の外で自己価値を見つける、不安対処法を学ぶ、一人の時間を練習する。専門カウンセリングを強く推奨します。",
      zh: "在关系之外寻找自我价值，学习焦虑应对策略，练习独处。强烈推荐专业咨询。",
      zhTW: "在關係之外尋找自我價值，學習焦慮應對策略，練習獨處。強烈推薦專業諮詢。",
      vi: "Tìm giá trị bản thân bên ngoài mối quan hệ, học cách đối phó với lo âu, thực hành ở một mình. Khuyến khích mạnh mẽ việc tư vấn chuyên nghiệp.",
      id: "Temukan nilai diri di luar hubungan, pelajari strategi mengatasi kecemasan, latihan menghabiskan waktu sendiri. Konseling profesional sangat direkomendasikan."
    },
    bestMatch: {
      ko: "안정형 (안정감 제공)",
      en: "Secure type (provides stability)",
      ja: "安全型（安定感を提供）",
      zh: "安全型（提供稳定感）",
      zhTW: "安全型（提供穩定感）",
      vi: "Kiểu an toàn (cung cấp sự ổn định)",
      id: "Tipe aman (memberikan stabilitas)"
    },
    goodMatch: {
      ko: "없음",
      en: "None",
      ja: "なし",
      zh: "无",
      zhTW: "無",
      vi: "Không có",
      id: "Tidak ada"
    },
    carefulMatch: {
      ko: "불안형 (서로 지침)",
      en: "Anxious type (exhaust each other)",
      ja: "不安型（お互いに消耗）",
      zh: "焦虑型（相互消耗）",
      zhTW: "焦慮型（相互消耗）",
      vi: "Kiểu lo âu (làm kiệt sức lẫn nhau)",
      id: "Tipe cemas (saling menguras energi)"
    },
    difficultMatch: {
      ko: "회피형 (파괴적 조합)",
      en: "Avoidant type (destructive combination)",
      ja: "回避型（破壊的な組み合わせ）",
      zh: "回避型（破坏性组合）",
      zhTW: "迴避型（破壞性組合）",
      vi: "Kiểu tránh né (sự kết hợp phá hoại)",
      id: "Tipe menghindar (kombinasi merusak)"
    }
  },
  {
    type: 3,
    title: {
      ko: "💙 회피형 애착 (Avoidant Attachment)",
      en: "💙 Avoidant Attachment",
      ja: "💙 回避型アタッチメント",
      zh: "💙 回避型依恋",
      zhTW: "💙 迴避型依戀",
      vi: "💙 Gắn bó Tránh né",
      id: "💙 Kelekatan Menghindar"
    },
    description: {
      ko: "거리를 두는 외로운 독립가, 친밀함이 불편해요",
      en: "Distant lonely independent, intimacy is uncomfortable",
      ja: "距離を置く孤独な独立家、親密さが不快です",
      zh: "保持距离的孤独独立者，亲密关系让人不舒服",
      zhTW: "保持距離的孤獨獨立者，親密關係讓人不舒服",
      vi: "Người độc lập cô đơn giữ khoảng cách, sự thân mật khiến khó chịu",
      id: "Independen kesepian yang menjaga jarak, keintiman membuat tidak nyaman"
    },
    characteristics: {
      ko: "혼자가 편하고 감정 표현이 어렵습니다. 독립성을 과도하게 강조하며, 가까워지면 도망칩니다. 의존을 약함으로 봅니다.",
      en: "Prefer being alone and find emotional expression difficult. Overemphasize independence and flee when getting close. See dependency as weakness.",
      ja: "一人が楽で感情表現が困難です。独立性を過度に強調し、近づくと逃げます。依存を弱さとして見ます。",
      zh: "喜欢独处，情感表达困难。过度强调独立性，亲近时逃避。将依赖视为软弱。",
      zhTW: "喜歡獨處，情感表達困難。過度強調獨立性，親近時逃避。將依賴視為軟弱。",
      vi: "Thích ở một mình và khó khăn trong việc thể hiện cảm xúc. Nhấn mạnh quá mức tính độc lập và chạy trốn khi gần gũi. Coi sự phụ thuộc là điểm yếu.",
      id: "Lebih nyaman sendirian dan sulit mengekspresikan emosi. Terlalu menekankan kemandirian dan lari ketika mendekat. Melihat ketergantungan sebagai kelemahan."
    },
    relationshipPattern: {
      ko: [
        "⚠️ \"혼자가 편해\" 자주 말함",
        "⚠️ 감정 차단, 비밀 많음",
        "⚠️ 연락 잘 안 함",
        "⚠️ \"바빠\" 핑계",
        "⚠️ 취약함 보이기 싫음"
      ],
      en: [
        "⚠️ Often say 'I'm better alone'",
        "⚠️ Emotional blocking, many secrets",
        "⚠️ Don't contact much",
        "⚠️ 'Busy' excuses",
        "⚠️ Don't want to show vulnerability"
      ],
      ja: [
        "⚠️ 「一人が楽」をよく言う",
        "⚠️ 感情ブロック、秘密が多い",
        "⚠️ 連絡をあまりしない",
        "⚠️ 「忙しい」言い訳",
        "⚠️ 脆弱さを見せたくない"
      ],
      zh: [
        "⚠️ 经常说「一个人更舒服」",
        "⚠️ 情感阻断，很多秘密",
        "⚠️ 很少联系",
        "⚠️ 「很忙」借口",
        "⚠️ 不想显示脆弱"
      ],
      zhTW: [
        "⚠️ 經常說「一個人更舒服」",
        "⚠️ 情感阻斷，很多秘密",
        "⚠️ 很少聯繫",
        "⚠️ 「很忙」藉口",
        "⚠️ 不想顯示脆弱"
      ],
      vi: [
        "⚠️ Thường nói 'Ở một mình thoải mái hơn'",
        "⚠️ Chặn cảm xúc, nhiều bí mật",
        "⚠️ Ít liên lạc",
        "⚠️ Lấy cớ 'bận'",
        "⚠️ Không muốn thể hiện sự dễ bị tổn thương"
      ],
      id: [
        "⚠️ Sering bilang 'Sendirian lebih nyaman'",
        "⚠️ Memblokir emosi, banyak rahasia",
        "⚠️ Jarang kontak",
        "⚠️ Alasan 'sibuk'",
        "⚠️ Tidak ingin menunjukkan kerapuhan"
      ]
    },
    advice: {
      ko: "친밀함이 위험이 아님을 배우기, 감정 표현 연습하기, 취약함을 보여도 괜찮다는 것 인식하기. 전문 상담 필요합니다.",
      en: "Learn that intimacy is not dangerous, practice emotional expression, recognize it's okay to show vulnerability. Professional counseling needed.",
      ja: "親密さが危険ではないことを学ぶ、感情表現を練習する、脆弱さを見せても大丈夫だと認識する。専門カウンセリングが必要です。",
      zh: "学习亲密关系不危险，练习情感表达，认识到显示脆弱也没关系。需要专业咨询。",
      zhTW: "學習親密關係不危險，練習情感表達，認識到顯示脆弱也沒關係。需要專業諮詢。",
      vi: "Học rằng sự thân mật không nguy hiểm, thực hành thể hiện cảm xúc, nhận ra việc thể hiện sự dễ bị tổn thương là ổn. Cần tư vấn chuyên nghiệp.",
      id: "Belajar bahwa keintiman tidak berbahaya, latihan mengekspresikan emosi, menyadari bahwa menunjukkan kerapuhan itu baik-baik saja. Butuh konseling profesional."
    },
    bestMatch: {
      ko: "안정형 (시간 걸리지만 가능)",
      en: "Secure type (takes time but possible)",
      ja: "安全型（時間はかかるが可能）",
      zh: "安全型（需要时间但可能）",
      zhTW: "安全型（需要時間但可能）",
      vi: "Kiểu an toàn (mất thời gian nhưng có thể)",
      id: "Tipe aman (butuh waktu tapi mungkin)"
    },
    goodMatch: {
      ko: "없음",
      en: "None",
      ja: "なし",
      zh: "无",
      zhTW: "無",
      vi: "Không có",
      id: "Tidak ada"
    },
    carefulMatch: {
      ko: "회피형 (관계 발전 없음)",
      en: "Avoidant type (no relationship development)",
      ja: "回避型（関係の発展なし）",
      zh: "回避型（关系无发展）",
      zhTW: "迴避型（關係無發展）",
      vi: "Kiểu tránh né (không phát triển mối quan hệ)",
      id: "Tipe menghindar (tidak ada perkembangan hubungan)"
    },
    difficultMatch: {
      ko: "불안형 (극과 극 충돌)",
      en: "Anxious type (extreme opposites clash)",
      ja: "不安型（極と極の衝突）",
      zh: "焦虑型（极端对立冲突）",
      zhTW: "焦慮型（極端對立衝突）",
      vi: "Kiểu lo âu (xung đột cực đoan)",
      id: "Tipe cemas (benturan ekstrem)"
    }
  },
  {
    type: 4,
    title: {
      ko: "💔 공포형 애착 (Fearful-Avoidant Attachment)",
      en: "💔 Fearful-Avoidant Attachment",
      ja: "💔 恐怖回避型アタッチメント",
      zh: "💔 恐惧回避型依恋",
      zhTW: "💔 恐懼迴避型依戀",
      vi: "💔 Gắn bó Sợ-Tránh",
      id: "💔 Kelekatan Takut-Menghindar"
    },
    description: {
      ko: "가까이 하고 싶지만 두려운 모순의 당신",
      en: "You who want to be close but are afraid - a contradiction",
      ja: "近づきたいが恐れる矛盾したあなた",
      zh: "想要亲近却害怕的矛盾的你",
      zhTW: "想要親近卻害怕的矛盾的你",
      vi: "Bạn muốn gần gũi nhưng lại sợ hãi - một mâu thuẫn",
      id: "Anda yang ingin dekat tapi takut - sebuah kontradiksi"
    },
    characteristics: {
      ko: "친밀함을 원하면서도 두려워합니다. 불안형과 회피형이 혼합된 가장 복잡한 스타일입니다. 다가갔다 멀어졌다 반복하며 극심한 혼란을 겪습니다.",
      en: "Want intimacy but also fear it. The most complex style combining anxious and avoidant types. Alternates between approaching and distancing with extreme confusion.",
      ja: "親密さを求めながらも恐れます。不安型と回避型が混合した最も複雑なスタイルです。近づいたり離れたりを繰り返し、極度の混乱を経験します。",
      zh: "渴望亲密却害怕。焦虑型和回避型混合的最复杂风格。反复接近和疏远，经历极度混乱。",
      zhTW: "渴望親密卻害怕。焦慮型和迴避型混合的最複雜風格。反覆接近和疏遠，經歷極度混亂。",
      vi: "Muốn sự thân mật nhưng cũng sợ hãi nó. Phong cách phức tạp nhất kết hợp giữa lo âu và tránh né. Luân phiên giữa tiến gần và xa cách với sự bối rối cực độ.",
      id: "Ingin keintiman tapi juga takut. Gaya paling kompleks yang menggabungkan tipe cemas dan menghindar. Bergantian mendekat dan menjauh dengan kebingungan ekstrem."
    },
    relationshipPattern: {
      ko: [
        "⚠️ \"사랑받고 싶지만 상처받을까 두려워\"",
        "⚠️ 의도치 않은 밀당",
        "⚠️ 뜨겁다가 차가워짐",
        "⚠️ 예측 불가능한 행동",
        "⚠️ 자신과 타인 모두 불신"
      ],
      en: [
        "⚠️ 'Want to be loved but afraid of being hurt'",
        "⚠️ Unintentional push-pull",
        "⚠️ Hot then cold",
        "⚠️ Unpredictable behavior",
        "⚠️ Distrust both self and others"
      ],
      ja: [
        "⚠️ 「愛されたいが傷つくのが怖い」",
        "⚠️ 意図しないプッシュプル",
        "⚠️ 熱くなったり冷たくなったり",
        "⚠️ 予測不可能な行動",
        "⚠️ 自分と他人の両方を不信"
      ],
      zh: [
        "⚠️ 「想要被爱却害怕受伤」",
        "⚠️ 无意的推拉",
        "⚠️ 忽热忽冷",
        "⚠️ 不可预测的行为",
        "⚠️ 不信任自己和他人"
      ],
      zhTW: [
        "⚠️ 「想要被愛卻害怕受傷」",
        "⚠️ 無意的推拉",
        "⚠️ 忽熱忽冷",
        "⚠️ 不可預測的行為",
        "⚠️ 不信任自己和他人"
      ],
      vi: [
        "⚠️ 'Muốn được yêu nhưng sợ bị tổn thương'",
        "⚠️ Đẩy-kéo không chủ ý",
        "⚠️ Nóng rồi lạnh",
        "⚠️ Hành vi không thể đoán trước",
        "⚠️ Không tin tưởng cả bản thân và người khác"
      ],
      id: [
        "⚠️ 'Ingin dicintai tapi takut terluka'",
        "⚠️ Push-pull yang tidak disengaja",
        "⚠️ Panas lalu dingin",
        "⚠️ Perilaku yang tidak dapat diprediksi",
        "⚠️ Tidak mempercayai diri sendiri dan orang lain"
      ]
    },
    advice: {
      ko: "전문 심리치료 필수입니다. 트라우마 치료 (EMDR 등), 안전한 관계 경험 쌓기, 자기 조절 능력 배우기가 필요합니다.",
      en: "Professional psychotherapy is essential. Trauma therapy (EMDR, etc.), building safe relationship experiences, learning self-regulation skills are needed.",
      ja: "専門心理療法が必須です。トラウマ治療（EMDRなど）、安全な関係経験の積み重ね、自己調節能力の習得が必要です。",
      zh: "专业心理治疗必不可少。创伤治疗（EMDR等）、建立安全关系体验、学习自我调节能力。",
      zhTW: "專業心理治療必不可少。創傷治療（EMDR等）、建立安全關係體驗、學習自我調節能力。",
      vi: "Liệu pháp tâm lý chuyên nghiệp là bắt buộc. Điều trị chấn thương (EMDR, v.v.), xây dựng trải nghiệm mối quan hệ an toàn, học kỹ năng tự điều chỉnh.",
      id: "Psikoterapi profesional sangat penting. Terapi trauma (EMDR, dll), membangun pengalaman hubungan yang aman, mempelajari keterampilan regulasi diri."
    },
    bestMatch: {
      ko: "안정형 (많은 인내 필요)",
      en: "Secure type (needs much patience)",
      ja: "安全型（多くの忍耐が必要）",
      zh: "安全型（需要很多耐心）",
      zhTW: "安全型（需要很多耐心）",
      vi: "Kiểu an toàn (cần nhiều kiên nhẫn)",
      id: "Tipe aman (butuh banyak kesabaran)"
    },
    goodMatch: {
      ko: "없음",
      en: "None",
      ja: "なし",
      zh: "无",
      zhTW: "無",
      vi: "Không có",
      id: "Tidak ada"
    },
    carefulMatch: {
      ko: "불안형, 회피형",
      en: "Anxious type, Avoidant type",
      ja: "不安型、回避型",
      zh: "焦虑型、回避型",
      zhTW: "焦慮型、迴避型",
      vi: "Kiểu lo âu, kiểu tránh né",
      id: "Tipe cemas, tipe menghindar"
    },
    difficultMatch: {
      ko: "공포형 (매우 파괴적)",
      en: "Fearful type (very destructive)",
      ja: "恐怖型（非常に破壊的）",
      zh: "恐惧型（非常破坏性）",
      zhTW: "恐懼型（非常破壞性）",
      vi: "Kiểu sợ hãi (rất phá hoại)",
      id: "Tipe takut (sangat merusak)"
    }
  }
];

export function calculateAttachmentResult(answers: string[]): AttachmentResult {
  const scores = { a: 0, b: 0, c: 0, d: 0 };
  
  // Count answers
  answers.forEach(answer => {
    if (answer === 'a') scores.a++;
    else if (answer === 'b') scores.b++;
    else if (answer === 'c') scores.c++;
    else if (answer === 'd') scores.d++;
  });
  
  // Determine result based on criteria
  // 안정형: A 선택 9개 이상
  if (scores.a >= 9) {
    return attachmentResults[0]; // 안정형
  }
  
  // 불안형: B 선택 7개 이상
  if (scores.b >= 7) {
    return attachmentResults[1]; // 불안형
  }
  
  // 회피형: C 선택 7개 이상
  if (scores.c >= 7) {
    return attachmentResults[2]; // 회피형
  }
  
  // 공포형: D 선택 7개 이상
  if (scores.d >= 7) {
    return attachmentResults[3]; // 공포형
  }
  
  // 두 타입 점수가 비슷하면 (차이 8점 이하) 혼합형으로, Q10-Q12에 가중치를 부여하여 최종 결정
  const maxScore = Math.max(scores.a, scores.b, scores.c, scores.d);
  const secondMaxScore = [scores.a, scores.b, scores.c, scores.d]
    .sort((a, b) => b - a)[1];
  
  if (maxScore - secondMaxScore <= 2) {
    // Q10-Q12에 가중치 부여
    const weightedScores = { a: 0, b: 0, c: 0, d: 0 };
    
    // Q10-Q12에 2배 가중치
    for (let i = 9; i < 12; i++) {
      if (answers[i] === 'a') weightedScores.a += 2;
      else if (answers[i] === 'b') weightedScores.b += 2;
      else if (answers[i] === 'c') weightedScores.c += 2;
      else if (answers[i] === 'd') weightedScores.d += 2;
    }
    
    // 전체 점수와 가중치 점수 합산
    const finalScores = {
      a: scores.a + weightedScores.a,
      b: scores.b + weightedScores.b,
      c: scores.c + weightedScores.c,
      d: scores.d + weightedScores.d
    };
    
    const maxFinalScore = Math.max(finalScores.a, finalScores.b, finalScores.c, finalScores.d);
    
    if (finalScores.a === maxFinalScore) return attachmentResults[0]; // 안정형
    if (finalScores.b === maxFinalScore) return attachmentResults[1]; // 불안형
    if (finalScores.c === maxFinalScore) return attachmentResults[2]; // 회피형
    if (finalScores.d === maxFinalScore) return attachmentResults[3]; // 공포형
  }
  
  // 기본값: 가장 높은 점수의 타입
  if (scores.a >= scores.b && scores.a >= scores.c && scores.a >= scores.d) {
    return attachmentResults[0]; // 안정형
  }
  if (scores.b >= scores.c && scores.b >= scores.d) {
    return attachmentResults[1]; // 불안형
  }
  if (scores.c >= scores.d) {
    return attachmentResults[2]; // 회피형
  }
  return attachmentResults[3]; // 공포형
}
