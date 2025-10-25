export interface IndependenceQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    a: Record<string, string>;
    b: Record<string, string>;
  };
}

export interface IndependenceResult {
  type: number;
  emoji: string;
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
  strengths: {
    ko: string[];
    en: string[];
    ja: string[];
    zh: string[];
    zhTW: string[];
    vi: string[];
    id: string[];
  };
  weaknesses: {
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
  independenceScore: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
}

export const independenceQuestions: IndependenceQuestion[] = [
  {
    id: 1,
    question: {
      ko: "중요한 결정을 내려야 할 때?",
      en: "When you need to make an important decision?",
      ja: "重要な決定を下すとき？",
      zh: "当你需要做出重要决定时？",
      zhTW: "當你需要做出重要決定時？",
      vi: "Khi bạn cần đưa ra quyết định quan trọng?",
      id: "Ketika Anda perlu membuat keputusan penting?"
    },
    options: {
      a: {
        ko: "혼자 생각하고 결정함",
        en: "Think and decide alone",
        ja: "一人で考えて決める",
        zh: "独自思考并决定",
        zhTW: "獨自思考並決定",
        vi: "Suy nghĩ và quyết định một mình",
        id: "Berpikir dan memutuskan sendiri"
      },
      b: {
        ko: "주변 사람들과 상의해서 결정함",
        en: "Discuss with people around and decide",
        ja: "周りの人と相談して決める",
        zh: "与周围的人商量后决定",
        zhTW: "與周圍的人商量後決定",
        vi: "Thảo luận với người xung quanh rồi quyết định",
        id: "Berdiskusi dengan orang sekitar dan memutuskan"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "혼자 있는 시간에 대해?",
      en: "About time alone?",
      ja: "一人の時間について？",
      zh: "关于独处时间？",
      zhTW: "關於獨處時間？",
      vi: "Về thời gian ở một mình?",
      id: "Tentang waktu sendirian?"
    },
    options: {
      a: {
        ko: "편하고 필요함",
        en: "Comfortable and necessary",
        ja: "快適で必要",
        zh: "舒适且必要",
        zhTW: "舒適且必要",
        vi: "Thoải mái và cần thiết",
        id: "Nyaman dan perlu"
      },
      b: {
        ko: "외롭고 불편함",
        en: "Lonely and uncomfortable",
        ja: "寂しくて不快",
        zh: "孤独且不舒服",
        zhTW: "孤獨且不舒服",
        vi: "Cô đơn và khó chịu",
        id: "Kesepian dan tidak nyaman"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "문제가 생겼을 때?",
      en: "When a problem occurs?",
      ja: "問題が発生したとき？",
      zh: "当问题发生时？",
      zhTW: "當問題發生時？",
      vi: "Khi có vấn đề xảy ra?",
      id: "Ketika masalah terjadi?"
    },
    options: {
      a: {
        ko: "일단 혼자 해결 시도",
        en: "Try to solve it alone first",
        ja: "まず一人で解決を試みる",
        zh: "先尝试独自解决",
        zhTW: "先嘗試獨自解決",
        vi: "Cố gắng tự giải quyết trước",
        id: "Coba selesaikan sendiri dulu"
      },
      b: {
        ko: "바로 누군가에게 도움 요청",
        en: "Ask someone for help right away",
        ja: "すぐに誰かに助けを求める",
        zh: "立即向某人求助",
        zhTW: "立即向某人求助",
        vi: "Yêu cầu ai đó giúp đỡ ngay lập tức",
        id: "Langsung minta bantuan pada seseorang"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "여행을 갈 때?",
      en: "When traveling?",
      ja: "旅行に行くとき？",
      zh: "去旅行时？",
      zhTW: "去旅行時？",
      vi: "Khi đi du lịch?",
      id: "Ketika bepergian?"
    },
    options: {
      a: {
        ko: "혼자 가도 전혀 불편 없음",
        en: "Not uncomfortable at all traveling alone",
        ja: "一人で行っても全く不快ではない",
        zh: "独自旅行完全没有不适",
        zhTW: "獨自旅行完全沒有不適",
        vi: "Hoàn toàn không khó chịu khi đi một mình",
        id: "Tidak merasa tidak nyaman sama sekali pergi sendiri"
      },
      b: {
        ko: "누군가와 함께 가야 안심됨",
        en: "Feel at ease when going with someone",
        ja: "誰かと一緒に行くべきで安心する",
        zh: "需要有人陪伴才能安心",
        zhTW: "需要有人陪伴才能安心",
        vi: "Cảm thấy yên tâm khi đi cùng ai đó",
        id: "Perlu pergi bersama seseorang agar tenang"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "식사 시간에?",
      en: "At meal time?",
      ja: "食事の時間に？",
      zh: "用餐时间？",
      zhTW: "用餐時間？",
      vi: "Vào giờ ăn?",
      id: "Saat waktu makan?"
    },
    options: {
      a: {
        ko: "혼자 먹는 것도 괜찮음",
        en: "Okay to eat alone",
        ja: "一人で食べるのも大丈夫",
        zh: "独自用餐也可以",
        zhTW: "獨自用餐也可以",
        vi: "Ổn khi ăn một mình",
        id: "Tidak apa-apa makan sendiri"
      },
      b: {
        ko: "누군가와 함께 먹고 싶음",
        en: "Want to eat with someone",
        ja: "誰かと一緒に食べたい",
        zh: "想要有人一起用餐",
        zhTW: "想要有人一起用餐",
        vi: "Muốn ăn cùng ai đó",
        id: "Ingin makan bersama seseorang"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "새로운 환경에 처했을 때?",
      en: "When facing a new environment?",
      ja: "新しい環境に置かれたとき？",
      zh: "面对新环境时？",
      zhTW: "面對新環境時？",
      vi: "Khi đối mặt với môi trường mới?",
      id: "Ketika menghadapi lingkungan baru?"
    },
    options: {
      a: {
        ko: "스스로 적응하고 해쳐나감",
        en: "Adapt and overcome by myself",
        ja: "自分で適応して乗り越える",
        zh: "独自适应并克服",
        zhTW: "獨自適應並克服",
        vi: "Tự thích ứng và vượt qua",
        id: "Beradaptasi dan mengatasi sendiri"
      },
      b: {
        ko: "누군가의 도움이나 조언 필요",
        en: "Need someone's help or advice",
        ja: "誰かの助けやアドバイスが必要",
        zh: "需要他人的帮助或建议",
        zhTW: "需要他人的幫助或建議",
        vi: "Cần sự giúp đỡ hoặc lời khuyên của ai đó",
        id: "Perlu bantuan atau saran seseorang"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "경제적인 면에서?",
      en: "In financial matters?",
      ja: "経済的な面で？",
      zh: "在经济方面？",
      zhTW: "在經濟方面？",
      vi: "Về mặt tài chính?",
      id: "Dalam hal keuangan?"
    },
    options: {
      a: {
        ko: "독립적으로 관리함",
        en: "Manage independently",
        ja: "独立して管理する",
        zh: "独立管理",
        zhTW: "獨立管理",
        vi: "Quản lý độc lập",
        id: "Mengelola secara mandiri"
      },
      b: {
        ko: "누군가와 의논하거나 도움받음",
        en: "Discuss with someone or get help",
        ja: "誰かと相談したり助けを得たりする",
        zh: "与他人商议或寻求帮助",
        zhTW: "與他人商議或尋求幫助",
        vi: "Thảo luận với ai đó hoặc nhận giúp đỡ",
        id: "Berdiskusi dengan seseorang atau mendapat bantuan"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "감정적으로 힘들 때?",
      en: "When emotionally difficult?",
      ja: "感情的に辛いとき？",
      zh: "当情感困难时？",
      zhTW: "當情感困難時？",
      vi: "Khi khó khăn về mặt cảm xúc?",
      id: "Ketika secara emosional sulit?"
    },
    options: {
      a: {
        ko: "혼자서 정리하고 극복",
        en: "Sort out and overcome alone",
        ja: "一人で整理して克服する",
        zh: "独自整理并克服",
        zhTW: "獨自整理並克服",
        vi: "Tự sắp xếp và vượt qua",
        id: "Menyusun dan mengatasi sendiri"
      },
      b: {
        ko: "누군가의 위로와 지지 필요",
        en: "Need someone's comfort and support",
        ja: "誰かの慰めと支えが必要",
        zh: "需要他人的安慰和支持",
        zhTW: "需要他人的安慰和支持",
        vi: "Cần sự an ủi và hỗ trợ của ai đó",
        id: "Perlu kenyamanan dan dukungan seseorang"
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "당신의 하루 일과는?",
      en: "Your daily routine?",
      ja: "あなたの一日の日課は？",
      zh: "你的一天日程？",
      zhTW: "你的一天日程？",
      vi: "Thói quen hàng ngày của bạn?",
      id: "Rutinitas harian Anda?"
    },
    options: {
      a: {
        ko: "대부분 혼자 보내도 괜찮음",
        en: "Okay to spend most time alone",
        ja: "ほとんど一人で過ごしても大丈夫",
        zh: "大部分时间独处也可以",
        zhTW: "大部分時間獨處也可以",
        vi: "Ổn khi dành phần lớn thời gian một mình",
        id: "Tidak apa-apa menghabiskan sebagian besar waktu sendirian"
      },
      b: {
        ko: "누군가와 함께하는 시간 필요",
        en: "Need time with someone",
        ja: "誰かと一緒に過ごす時間が必要",
        zh: "需要与他人共度时光",
        zhTW: "需要與他人共度時光",
        vi: "Cần thời gian với ai đó",
        id: "Perlu waktu bersama seseorang"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "인생의 방향을 정할 때?",
      en: "When setting life direction?",
      ja: "人生の方向を決めるとき？",
      zh: "确定人生方向时？",
      zhTW: "確定人生方向時？",
      vi: "Khi xác định hướng đi cuộc sống?",
      id: "Ketika menentukan arah hidup?"
    },
    options: {
      a: {
        ko: "내 생각과 판단이 최우선",
        en: "My thoughts and judgment come first",
        ja: "私の考えと判断が最優先",
        zh: "我的想法和判断优先",
        zhTW: "我的想法和判斷優先",
        vi: "Suy nghĩ và phán đoán của tôi là ưu tiên",
        id: "Pikiran dan penilaian saya yang utama"
      },
      b: {
        ko: "중요한 사람들 의견 중요함",
        en: "Important people's opinions matter",
        ja: "重要な人々の意見が重要",
        zh: "重要的人的意见很重要",
        zhTW: "重要的人的意見很重要",
        vi: "Ý kiến của những người quan trọng là quan trọng",
        id: "Pendapat orang penting itu penting"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "연인이나 친구가 바쁠 때?",
      en: "When your partner or friend is busy?",
      ja: "恋人や友達が忙しいとき？",
      zh: "当恋人或朋友忙碌时？",
      zhTW: "當戀人或朋友忙碌時？",
      vi: "Khi người yêu hoặc bạn bè bận?",
      id: "Ketika pasangan atau teman sibuk?"
    },
    options: {
      a: {
        ko: "혼자 시간 잘 보냄",
        en: "Spend time alone well",
        ja: "一人で時間をうまく過ごす",
        zh: "独自度过时光",
        zhTW: "獨自度過時光",
        vi: "Dành thời gian một mình tốt",
        id: "Menghabiskan waktu sendirian dengan baik"
      },
      b: {
        ko: "외롭고 심심함",
        en: "Feel lonely and bored",
        ja: "寂しくて退屈",
        zh: "感到孤独和无聊",
        zhTW: "感到孤獨和無聊",
        vi: "Cảm thấy cô đơn và buồn chán",
        id: "Merasa kesepian dan bosan"
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "당신의 삶의 태도는?",
      en: "Your attitude toward life?",
      ja: "あなたの人生の態度は？",
      zh: "你对生活的态度？",
      zhTW: "你對生活的態度？",
      vi: "Thái độ của bạn đối với cuộc sống?",
      id: "Sikap Anda terhadap hidup?"
    },
    options: {
      a: {
        ko: "나 자신에게 의지함",
        en: "Rely on myself",
        ja: "自分自身に頼る",
        zh: "依靠自己",
        zhTW: "依靠自己",
        vi: "Dựa vào chính mình",
        id: "Mengandalkan diri sendiri"
      },
      b: {
        ko: "소중한 사람들에게 의지함",
        en: "Rely on precious people",
        ja: "大切な人々に頼る",
        zh: "依靠重要的人",
        zhTW: "依靠重要的人",
        vi: "Dựa vào những người quý giá",
        id: "Mengandalkan orang-orang berharga"
      }
    }
  }
];

export const independenceResults: IndependenceResult[] = [
  {
    type: 1,
    emoji: "🦅",
    title: {
      ko: "극단적 독립형",
      en: "Extreme Independent",
      ja: "極端な独立型",
      zh: "极端独立型",
      zhTW: "極端獨立型",
      vi: "Độc lập Cực đoan",
      id: "Mandiri Ekstrem"
    },
    description: {
      ko: "완전 독립! 혼자가 가장 편한 사람",
      en: "Complete independence! Most comfortable alone",
      ja: "完全独立！一人が最も快適な人",
      zh: "完全独立！独处最舒适的人",
      zhTW: "完全獨立！獨處最舒適的人",
      vi: "Hoàn toàn độc lập! Người cảm thấy thoải mái nhất khi ở một mình",
      id: "Kemandirian penuh! Orang yang paling nyaman sendirian"
    },
    characteristics: {
      ko: "모든 것을 혼자 해결합니다. 누구에게도 의지하지 않고 스스로 결정하고 행동합니다. 혼자 있는 것이 가장 편하고 타인의 도움을 거의 필요로 하지 않습니다. 독립적이고 강하지만 때로는 외롭고 관계가 피상적일 수 있습니다. 의존하는 것도 약점이 아니라는 걸 기억하세요.",
      en: "You solve everything alone. You make decisions and act on your own without relying on anyone. Being alone is most comfortable and you rarely need others' help. You're independent and strong, but sometimes lonely and relationships can be superficial. Remember that depending on others is not a weakness.",
      ja: "すべてを一人で解決します。誰にも頼らず自分で決めて行動します。一人でいることが最も快適で、他人の助けをほとんど必要としません。独立していて強いですが、時には孤独で関係が表面的な場合があります。依存することも弱点ではないことを覚えておいてください。",
      zh: "你独自解决一切。你独立做决定和行动，不依赖任何人。独处最舒适，很少需要他人帮助。你独立且坚强，但有时会孤独，关系可能肤浅。记住，依赖他人不是弱点。",
      zhTW: "你獨自解決一切。你獨立做決定和行動，不依賴任何人。獨處最舒適，很少需要他人幫助。你獨立且堅強，但有時會孤獨，關係可能膚淺。記住，依賴他人不是弱點。",
      vi: "Bạn giải quyết mọi thứ một mình. Bạn tự quyết định và hành động mà không dựa vào ai. Ở một mình là thoải mái nhất và bạn hiếm khi cần sự giúp đỡ của người khác. Bạn độc lập và mạnh mẽ, nhưng đôi khi cô đơn và các mối quan hệ có thể hời hợt. Hãy nhớ rằng phụ thuộc vào người khác không phải là điểm yếu.",
      id: "Anda menyelesaikan segalanya sendiri. Anda membuat keputusan dan bertindak sendiri tanpa bergantung pada siapa pun. Sendirian paling nyaman dan Anda jarang membutuhkan bantuan orang lain. Anda mandiri dan kuat, tapi kadang kesepian dan hubungan bisa dangkal. Ingat bahwa bergantung pada orang lain bukanlah kelemahan."
    },
    strengths: {
      ko: ["자립심", "강함", "자유로움", "책임감"],
      en: ["Self-reliance", "Strength", "Freedom", "Responsibility"],
      ja: ["自立心", "強さ", "自由", "責任感"],
      zh: ["自立", "坚强", "自由", "责任感"],
      zhTW: ["自立", "堅強", "自由", "責任感"],
      vi: ["Tự lực", "Mạnh mẽ", "Tự do", "Trách nhiệm"],
      id: ["Mandiri", "Kuat", "Kebebasan", "Tanggung jawab"]
    },
    weaknesses: {
      ko: ["외로움", "고립", "관계 어려움", "도움 못 받음"],
      en: ["Loneliness", "Isolation", "Relationship difficulties", "Can't receive help"],
      ja: ["孤独", "孤立", "関係の困難", "助けを受けられない"],
      zh: ["孤独", "孤立", "关系困难", "无法接受帮助"],
      zhTW: ["孤獨", "孤立", "關係困難", "無法接受幫助"],
      vi: ["Cô đơn", "Cô lập", "Khó khăn trong mối quan hệ", "Không thể nhận giúp đỡ"],
      id: ["Kesepian", "Isolasi", "Kesulitan hubungan", "Tidak bisa menerima bantuan"]
    },
    advice: {
      ko: "독립은 좋지만 때로는 의지하는 것도 용기예요. 혼자 다 짊어지지 마세요. 도움 청하는 것도 강함입니다!",
      en: "Independence is good, but sometimes relying on others is also courage. Don't carry everything alone. Asking for help is also strength!",
      ja: "独立は良いですが、時には頼ることも勇気です。一人で全部背負わないでください。助けを求めることも強さです！",
      zh: "独立是好的，但有时依赖他人也是勇气。不要独自承担一切。寻求帮助也是力量！",
      zhTW: "獨立是好的，但有時依賴他人也是勇氣。不要獨自承擔一切。尋求幫助也是力量！",
      vi: "Độc lập là tốt, nhưng đôi khi dựa vào người khác cũng là dũng khí. Đừng mang hết một mình. Yêu cầu giúp đỡ cũng là sức mạnh!",
      id: "Kemandirian itu baik, tapi kadang bergantung pada orang lain juga keberanian. Jangan memikul segalanya sendiri. Meminta bantuan juga kekuatan!"
    },
    independenceScore: {
      ko: "독립 100% / 의존 0%",
      en: "Independence 100% / Dependence 0%",
      ja: "独立100% / 依存0%",
      zh: "独立 100% / 依赖 0%",
      zhTW: "獨立 100% / 依賴 0%",
      vi: "Độc lập 100% / Phụ thuộc 0%",
      id: "Kemandirian 100% / Ketergantungan 0%"
    }
  },
  {
    type: 2,
    emoji: "🌳",
    title: {
      ko: "독립 우선형",
      en: "Independence Priority",
      ja: "独立優先型",
      zh: "独立优先型",
      zhTW: "獨立優先型",
      vi: "Ưu tiên Độc lập",
      id: "Prioritas Mandiri"
    },
    description: {
      ko: "기본은 독립! 필요하면 도움받는 사람",
      en: "Independence is basic! Accept help when needed",
      ja: "基本は独立！必要なら助けを受ける人",
      zh: "基础是独立！需要时接受帮助的人",
      zhTW: "基礎是獨立！需要時接受幫助的人",
      vi: "Độc lập là cơ bản! Người chấp nhận giúp đỡ khi cần",
      id: "Dasar kemandirian! Orang yang menerima bantuan saat diperlukan"
    },
    characteristics: {
      ko: "대체로 독립적이지만 필요하면 도움을 청할 줄 압니다. 혼자서도 잘 해내지만 타인과의 관계도 소중히 여깁니다. 자립적이면서도 유연한 가장 이상적인 독립성을 가진 타입입니다. 강하면서도 인간적이며, 균형잡힌 삶을 살아갑니다.",
      en: "Generally independent but able to ask for help when needed. You do well alone but also value relationships with others. You have the most ideal independence - self-reliant yet flexible. Strong yet human, you live a balanced life.",
      ja: "概ね独立していますが、必要なら助けを求めることができます。一人でも上手くやりますが、他人との関係も大切にします。自立しながらも柔軟な最も理想的な独立性を持つタイプです。強くて人間的で、バランスの取れた人生を送ります。",
      zh: "通常独立但需要时能够寻求帮助。你能独自完成，但也重视与他人的关系。你拥有最理想的独立性——自立而灵活。坚强而人性化，过着平衡的生活。",
      zhTW: "通常獨立但需要時能夠尋求幫助。你能獨自完成，但也重視與他人的關係。你擁有最理想的獨立性——自立而靈活。堅強而人性化，過著平衡的生活。",
      vi: "Nói chung độc lập nhưng có thể yêu cầu giúp đỡ khi cần. Bạn làm tốt một mình nhưng cũng coi trọng mối quan hệ với người khác. Bạn có sự độc lập lý tưởng nhất - tự lực nhưng linh hoạt. Mạnh mẽ mà nhân văn, bạn sống một cuộc sống cân bằng.",
      id: "Umumnya mandiri tapi bisa meminta bantuan saat diperlukan. Anda baik-baik saja sendirian tapi juga menghargai hubungan dengan orang lain. Anda memiliki kemandirian paling ideal - mandiri tapi fleksibel. Kuat tapi manusiawi, Anda menjalani hidup seimbang."
    },
    strengths: {
      ko: ["독립적", "유연성", "관계 능력", "균형감"],
      en: ["Independent", "Flexibility", "Relationship skills", "Balance"],
      ja: ["独立", "柔軟性", "関係能力", "バランス感覚"],
      zh: ["独立", "灵活性", "关系能力", "平衡感"],
      zhTW: ["獨立", "靈活性", "關係能力", "平衡感"],
      vi: ["Độc lập", "Linh hoạt", "Kỹ năng quan hệ", "Cân bằng"],
      id: ["Mandiri", "Fleksibilitas", "Kemampuan hubungan", "Keseimbangan"]
    },
    weaknesses: {
      ko: ["거의 없음"],
      en: ["Almost none"],
      ja: ["ほとんどなし"],
      zh: ["几乎没有"],
      zhTW: ["幾乎沒有"],
      vi: ["Hầu như không có"],
      id: ["Hampir tidak ada"]
    },
    advice: {
      ko: "완벽해요! 독립적이되 필요할 때 도움받는 당신의 태도가 최고입니다!",
      en: "Perfect! Your attitude of being independent yet accepting help when needed is the best!",
      ja: "完璧です！独立しつつ必要なら助けを受けるあなたの態度が最高です！",
      zh: "完美！你在独立的同时能在需要时接受帮助的态度是最好的！",
      zhTW: "完美！你在獨立的同時能在需要時接受幫助的態度是最好的！",
      vi: "Hoàn hảo! Thái độ của bạn là độc lập nhưng chấp nhận giúp đỡ khi cần là tốt nhất!",
      id: "Sempurna! Sikap Anda mandiri tapi menerima bantuan saat diperlukan adalah yang terbaik!"
    },
    independenceScore: {
      ko: "독립 75% / 의존 25%",
      en: "Independence 75% / Dependence 25%",
      ja: "独立75% / 依存25%",
      zh: "独立 75% / 依赖 25%",
      zhTW: "獨立 75% / 依賴 25%",
      vi: "Độc lập 75% / Phụ thuộc 25%",
      id: "Kemandirian 75% / Ketergantungan 25%"
    }
  },
  {
    type: 3,
    emoji: "⚖️",
    title: {
      ko: "균형잡힌 상호형",
      en: "Balanced Interdependent",
      ja: "バランス型相互依存型",
      zh: "平衡互依型",
      zhTW: "平衡互依型",
      vi: "Cân bằng Tương thuộc",
      id: "Seimbang Saling Bergantung"
    },
    description: {
      ko: "때로는 독립, 때로는 의존! 상황 따라",
      en: "Sometimes independent, sometimes dependent! Depends on the situation",
      ja: "時には独立、時には依存！状況に応じて",
      zh: "有时独立，有时依赖！视情况而定",
      zhTW: "有時獨立，有時依賴！視情況而定",
      vi: "Đôi khi độc lập, đôi khi phụ thuộc! Tùy theo tình huống",
      id: "Kadang mandiri, kadang bergantung! Tergantung situasi"
    },
    characteristics: {
      ko: "독립성과 의존성의 완벽한 균형을 가졌습니다. 혼자 할 수 있는 것은 하고, 도움이 필요하면 청합니다. 관계를 소중히 여기면서도 자신의 독립성을 유지합니다. 가장 건강하고 성숙한 태도입니다. 유연하고 적응력이 뛰어납니다.",
      en: "You have a perfect balance of independence and dependence. You do what you can alone, and ask for help when needed. You value relationships while maintaining your independence. This is the healthiest and most mature attitude. Flexible and highly adaptable.",
      ja: "独立と依存の完璧なバランスを持っています。一人でできることはし、助けが必要なら求めます。関係を大切にしながらも自分の独立性を維持します。最も健康で成熟した態度です。柔軟で適応力に優れています。",
      zh: "你拥有独立和依赖的完美平衡。你能独自做的就做，需要帮助时就寻求。你重视关系的同时保持独立。这是最健康、最成熟的态度。灵活且适应力强。",
      zhTW: "你擁有獨立和依賴的完美平衡。你能獨自做的就做，需要幫助時就尋求。你重視關係的同時保持獨立。這是最健康、最成熟的態度。靈活且適應力強。",
      vi: "Bạn có sự cân bằng hoàn hảo giữa độc lập và phụ thuộc. Bạn làm những gì có thể một mình, và yêu cầu giúp đỡ khi cần. Bạn coi trọng mối quan hệ trong khi duy trì sự độc lập của mình. Đây là thái độ lành mạnh và trưởng thành nhất. Linh hoạt và thích ứng cao.",
      id: "Anda memiliki keseimbangan sempurna antara kemandirian dan ketergantungan. Anda melakukan apa yang bisa sendirian, dan meminta bantuan saat diperlukan. Anda menghargai hubungan sambil mempertahankan kemandirian Anda. Ini adalah sikap paling sehat dan dewasa. Fleksibel dan sangat beradaptasi."
    },
    strengths: {
      ko: ["균형감", "유연성", "성숙함", "관계 능력"],
      en: ["Balance", "Flexibility", "Maturity", "Relationship skills"],
      ja: ["バランス感覚", "柔軟性", "成熟", "関係能力"],
      zh: ["平衡感", "灵活性", "成熟", "关系能力"],
      zhTW: ["平衡感", "靈活性", "成熟", "關係能力"],
      vi: ["Cân bằng", "Linh hoạt", "Trưởng thành", "Kỹ năng quan hệ"],
      id: ["Keseimbangan", "Fleksibilitas", "Kedewasaan", "Kemampuan hubungan"]
    },
    weaknesses: {
      ko: ["때로 우유부단"],
      en: ["Sometimes indecisive"],
      ja: ["時には優柔不断"],
      zh: ["有时优柔寡断"],
      zhTW: ["有時優柔寡斷"],
      vi: ["Đôi khi do dự"],
      id: ["Kadang tidak tegas"]
    },
    advice: {
      ko: "이상적인 균형이에요! 혼자도, 함께도 행복한 당신이 멋집니다!",
      en: "Perfect balance! You're amazing - happy alone and together!",
      ja: "理想的なバランスです！一人でも、一緒でも幸せなあなたが素敵です！",
      zh: "理想平衡！你很棒——独自或在一起都快乐！",
      zhTW: "理想平衡！你很棒——獨自或在一起都快樂！",
      vi: "Cân bằng lý tưởng! Bạn thật tuyệt vời - hạnh phúc một mình và cùng nhau!",
      id: "Keseimbangan sempurna! Anda luar biasa - bahagia sendirian dan bersama!"
    },
    independenceScore: {
      ko: "독립 50% / 의존 50%",
      en: "Independence 50% / Dependence 50%",
      ja: "独立50% / 依存50%",
      zh: "独立 50% / 依赖 50%",
      zhTW: "獨立 50% / 依賴 50%",
      vi: "Độc lập 50% / Phụ thuộc 50%",
      id: "Kemandirian 50% / Ketergantungan 50%"
    }
  },
  {
    type: 4,
    emoji: "🤝",
    title: {
      ko: "의존 우선형",
      en: "Dependence Priority",
      ja: "依存優先型",
      zh: "依赖优先型",
      zhTW: "依賴優先型",
      vi: "Ưu tiên Phụ thuộc",
      id: "Prioritas Ketergantungan"
    },
    description: {
      ko: "함께가 좋아! 관계 중심의 사람",
      en: "Together is better! Relationship-centered person",
      ja: "一緒が好き！関係中心の人",
      zh: "在一起更好！以关系为中心的人",
      zhTW: "在一起更好！以關係為中心的人",
      vi: "Cùng nhau tốt hơn! Người coi trọng mối quan hệ",
      id: "Bersama lebih baik! Orang yang berpusat pada hubungan"
    },
    characteristics: {
      ko: "대체로 타인과의 관계에서 안정감을 찾습니다. 혼자보다 함께할 때 편하고, 중요한 결정을 혼자 내리기 어렵습니다. 사람들과의 유대가 중요하고 도움을 자주 청합니다. 따뜻하고 관계 지향적이지만 때로는 독립성을 키울 필요가 있습니다.",
      en: "You generally find stability in relationships with others. You feel more comfortable together than alone, and find it difficult to make important decisions alone. Bonds with people are important and you often ask for help. You're warm and relationship-oriented, but sometimes need to develop independence.",
      ja: "概ね他人との関係で安定感を見つけます。一人より一緒にいる時に快適で、重要な決定を一人で下すのが難しいです。人々との絆が重要で、助けをよく求めます。温かく関係志向ですが、時には独立性を高める必要があります。",
      zh: "你通常在与他人的关系中找到稳定。与独自相比，在一起时更舒适，独自做重要决定很困难。与人们的联系很重要，你经常寻求帮助。你温暖且以关系为导向，但有时需要培养独立性。",
      zhTW: "你通常在與他人的關係中找到穩定。與獨自相比，在一起時更舒適，獨自作重要決定很困難。與人們的聯繫很重要，你經常尋求幫助。你溫暖且以關係為導向，但有時需要培養獨立性。",
      vi: "Bạn thường tìm thấy sự ổn định trong mối quan hệ với người khác. Bạn cảm thấy thoải mái hơn khi cùng nhau hơn là một mình, và khó khăn khi đưa ra quyết định quan trọng một mình. Liên kết với mọi người là quan trọng và bạn thường yêu cầu giúp đỡ. Bạn ấm áp và hướng về mối quan hệ, nhưng đôi khi cần phát triển tính độc lập.",
      id: "Anda umumnya menemukan stabilitas dalam hubungan dengan orang lain. Anda merasa lebih nyaman bersama daripada sendirian, dan sulit membuat keputusan penting sendirian. Ikatan dengan orang penting dan Anda sering meminta bantuan. Anda hangat dan berorientasi hubungan, tapi kadang perlu mengembangkan kemandirian."
    },
    strengths: {
      ko: ["관계 능력", "따뜻함", "협력적", "유대감"],
      en: ["Relationship skills", "Warmth", "Cooperative", "Bonding"],
      ja: ["関係能力", "温かさ", "協力的", "絆"],
      zh: ["关系能力", "温暖", "合作", "纽带"],
      zhTW: ["關係能力", "溫暖", "合作", "紐帶"],
      vi: ["Kỹ năng quan hệ", "Ấm áp", "Hợp tác", "Gắn kết"],
      id: ["Kemampuan hubungan", "Kehangatan", "Kooperatif", "Ikatan"]
    },
    weaknesses: {
      ko: ["독립성 부족", "의존적", "혼자 불안"],
      en: ["Lack of independence", "Dependent", "Anxious alone"],
      ja: ["独立性不足", "依存性", "一人で不安"],
      zh: ["缺乏独立性", "依赖", "独自不安"],
      zhTW: ["缺乏獨立性", "依賴", "獨自不安"],
      vi: ["Thiếu độc lập", "Phụ thuộc", "Lo lắng khi một mình"],
      id: ["Kurang kemandirian", "Bergantung", "Cemas sendirian"]
    },
    advice: {
      ko: "관계도 중요하지만 혼자서도 괜찮아질 수 있어요. 작은 것부터 스스로 해보는 연습을 해보세요!",
      en: "Relationships are important, but you can learn to be okay alone. Practice doing small things by yourself!",
      ja: "関係も重要ですが、一人でも大丈夫になれます。小さなことから自分でやってみる練習をしてください！",
      zh: "关系很重要，但你可以学会独自面对。练习自己做小事！",
      zhTW: "關係很重要，但你可以學會獨自面對。練習自己做小事！",
      vi: "Mối quan hệ cũng quan trọng, nhưng bạn có thể học cách ổn khi một mình. Hãy thực hành làm những việc nhỏ một mình!",
      id: "Hubungan juga penting, tapi Anda bisa belajar baik-baik saja sendirian. Berlatihlah melakukan hal-hal kecil sendiri!"
    },
    independenceScore: {
      ko: "독립 25% / 의존 75%",
      en: "Independence 25% / Dependence 75%",
      ja: "独立25% / 依存75%",
      zh: "独立 25% / 依赖 75%",
      zhTW: "獨立 25% / 依賴 75%",
      vi: "Độc lập 25% / Phụ thuộc 75%",
      id: "Kemandirian 25% / Ketergantungan 75%"
    }
  },
  {
    type: 5,
    emoji: "🌱",
    title: {
      ko: "극단적 의존형",
      en: "Extreme Dependent",
      ja: "極端な依存型",
      zh: "极端依赖型",
      zhTW: "極端依賴型",
      vi: "Phụ thuộc Cực đoan",
      id: "Ketergantungan Ekstrem"
    },
    description: {
      ko: "혼자는 무서워! 누군가 필요한 사람",
      en: "Scared to be alone! Need someone",
      ja: "一人は怖い！誰かが必要な人",
      zh: "害怕独处！需要陪伴的人",
      zhTW: "害怕獨處！需要陪伴的人",
      vi: "Sợ ở một mình! Người cần ai đó",
      id: "Takut sendirian! Orang yang membutuhkan seseorang"
    },
    characteristics: {
      ko: "거의 모든 면에서 타인에게 의존합니다. 혼자 있는 것을 극도로 두려워하고, 결정을 혼자 내리지 못합니다. 항상 누군가의 도움과 지지가 필요하며, 독립적으로 살아가기 어렵습니다. 관계는 좋지만 자립심이 부족해 문제가 될 수 있습니다. 독립성을 키워야 합니다.",
      en: "You depend on others in almost every aspect. You're extremely afraid of being alone and can't make decisions alone. You always need someone's help and support, and find it difficult to live independently. Relationships are good, but lack of self-reliance can be a problem. You need to develop independence.",
      ja: "ほぼすべての面で他人に依存します。一人でいることを極度に恐れ、一人で決定を下せません。常に誰かの助けと支えが必要で、独立して生きることが困難です。関係は良いですが、自立心の欠如が問題になる可能性があります。独立性を高める必要があります。",
      zh: "你在几乎所有方面都依赖他人。你极度害怕独处，无法独自做决定。你总是需要他人的帮助和支持，难以独立生活。关系很好，但缺乏自立可能成为问题。你需要培养独立性。",
      zhTW: "你在幾乎所有方面都依賴他人。你極度害怕獨處，無法獨自作決定。你總是需要他人的幫助和支持，難以獨立生活。關係很好，但缺乏自立可能成為問題。你需要培養獨立性。",
      vi: "Bạn phụ thuộc vào người khác trong hầu hết mọi khía cạnh. Bạn cực kỳ sợ ở một mình và không thể đưa ra quyết định một mình. Bạn luôn cần sự giúp đỡ và hỗ trợ của ai đó, và khó khăn trong việc sống độc lập. Mối quan hệ là tốt, nhưng thiếu tự lực có thể là vấn đề. Bạn cần phát triển tính độc lập.",
      id: "Anda bergantung pada orang lain di hampir semua aspek. Anda sangat takut sendirian dan tidak bisa membuat keputusan sendirian. Anda selalu membutuhkan bantuan dan dukungan seseorang, dan sulit hidup mandiri. Hubungan baik, tapi kurang kemandirian bisa jadi masalah. Anda perlu mengembangkan kemandirian."
    },
    strengths: {
      ko: ["따뜻함", "관계 중시"],
      en: ["Warmth", "Relationship-oriented"],
      ja: ["温かさ", "関係重視"],
      zh: ["温暖", "重视关系"],
      zhTW: ["溫暖", "重視關係"],
      vi: ["Ấm áp", "Hướng về mối quan hệ"],
      id: ["Kehangatan", "Berorientasi hubungan"]
    },
    weaknesses: {
      ko: ["과도한 의존", "자립 불가", "불안", "관계 부담"],
      en: ["Excessive dependence", "Cannot be independent", "Anxiety", "Relationship burden"],
      ja: ["過度な依存", "自立不可", "不安", "関係の負担"],
      zh: ["过度依赖", "无法自立", "焦虑", "关系负担"],
      zhTW: ["過度依賴", "無法自立", "焦慮", "關係負擔"],
      vi: ["Phụ thuộc quá mức", "Không thể độc lập", "Lo âu", "Gánh nặng mối quan hệ"],
      id: ["Ketergantungan berlebihan", "Tidak bisa mandiri", "Kecemasan", "Beban hubungan"]
    },
    advice: {
      ko: "혼자서도 할 수 있어요! 작은 것부터 시도해보세요. 독립은 자유를 줍니다. 필요시 상담도 도움이 됩니다.",
      en: "You can do it alone too! Try small things first. Independence gives freedom. Counseling can also help if needed.",
      ja: "一人でもできます！小さなことから試してみてください。独立は自由を与えます。必要に応じてカウンセリングも役立ちます。",
      zh: "你也可以独自完成！先尝试小事。独立带来自由。必要时咨询也有帮助。",
      zhTW: "你也可以獨自完成！先嘗試小事。獨立帶來自由。必要時諮詢也有幫助。",
      vi: "Bạn cũng có thể làm một mình! Hãy thử những việc nhỏ trước. Độc lập mang lại tự do. Tư vấn cũng có thể giúp ích nếu cần.",
      id: "Anda juga bisa melakukannya sendiri! Coba hal-hal kecil dulu. Kemandirian memberi kebebasan. Konseling juga bisa membantu jika diperlukan."
    },
    independenceScore: {
      ko: "독립 0% / 의존 100%",
      en: "Independence 0% / Dependence 100%",
      ja: "独立0% / 依存100%",
      zh: "独立 0% / 依赖 100%",
      zhTW: "獨立 0% / 依賴 100%",
      vi: "Độc lập 0% / Phụ thuộc 100%",
      id: "Kemandirian 0% / Ketergantungan 100%"
    }
  }
];

export function calculateIndependenceResult(answers: string[]): IndependenceResult {
  let independenceScore = 0;
  let dependenceScore = 0;
  
  // Count answers
  answers.forEach(answer => {
    if (answer === 'a') {
      independenceScore += 2;
    } else if (answer === 'b') {
      dependenceScore += 2;
    }
  });
  
  // Determine result based on scores
  // Type 1: 22-24점 독립
  if (independenceScore >= 22) {
    return independenceResults[0]; // 극단적 독립형
  }
  
  // Type 2: 16-20점 독립
  if (independenceScore >= 16 && independenceScore <= 20) {
    return independenceResults[1]; // 독립 우선형
  }
  
  // Type 3: 10-14점 (균형)
  if (independenceScore >= 10 && independenceScore <= 14) {
    return independenceResults[2]; // 균형잡힌 상호형
  }
  
  // Type 4: 4-8점 의존
  if (dependenceScore >= 16 && dependenceScore <= 20) {
    return independenceResults[3]; // 의존 우선형
  }
  
  // Type 5: 0-2점 의존
  if (dependenceScore >= 22) {
    return independenceResults[4]; // 극단적 의존형
  }
  
  // Default fallback
  return independenceResults[2]; // 균형잡힌 상호형
}

