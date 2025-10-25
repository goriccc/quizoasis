export interface DecisionSpeedQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    a: Record<string, string>;
    b: Record<string, string>;
  };
}

export interface DecisionSpeedResult {
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
  decisionSpeed: {
    ko: string;
    en: string;
    ja: string;
    zh: string;
    zhTW: string;
    vi: string;
    id: string;
  };
}

export const decisionSpeedQuestions: DecisionSpeedQuestion[] = [
  {
    id: 1,
    question: {
      ko: "식당 메뉴를 고를 때?",
      en: "When choosing a restaurant menu?",
      ja: "レストランのメニューを選ぶとき？",
      zh: "选择餐厅菜单时？",
      zhTW: "選擇餐廳菜單時？",
      vi: "Khi chọn thực đơn nhà hàng?",
      id: "Ketika memilih menu restoran?"
    },
    options: {
      a: {
        ko: "바로 결정함",
        en: "Decide immediately",
        ja: "すぐに決める",
        zh: "立即决定",
        zhTW: "立即決定",
        vi: "Quyết định ngay lập tức",
        id: "Putuskan segera"
      },
      b: {
        ko: "한참 고민함",
        en: "Think for a while",
        ja: "しばらく悩む",
        zh: "思考一会儿",
        zhTW: "思考一會兒",
        vi: "Suy nghĩ một lúc",
        id: "Berpikir sebentar"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "옷을 살 때 마음에 드는 것을 봤다면?",
      en: "When you see something you like while shopping?",
      ja: "買い物中に気に入ったものを見つけたら？",
      zh: "购物时看到喜欢的东西？",
      zhTW: "購物時看到喜歡的東西？",
      vi: "Khi bạn thấy thứ gì đó bạn thích khi mua sắm?",
      id: "Ketika Anda melihat sesuatu yang Anda sukai saat berbelanja?"
    },
    options: {
      a: {
        ko: "즉시 구매 결정",
        en: "Buy immediately",
        ja: "すぐに購入を決める",
        zh: "立即购买",
        zhTW: "立即購買",
        vi: "Mua ngay lập tức",
        id: "Beli segera"
      },
      b: {
        ko: "다른 가게도 둘러본 후 결정",
        en: "Look around other stores first",
        ja: "他の店も見てから決める",
        zh: "先看看其他商店",
        zhTW: "先看看其他商店",
        vi: "Xem các cửa hàng khác trước",
        id: "Lihat toko lain dulu"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "중요한 결정을 내려야 할 때?",
      en: "When you need to make an important decision?",
      ja: "重要な決定を下すとき？",
      zh: "需要做出重要决定时？",
      zhTW: "需要做出重要決定時？",
      vi: "Khi bạn cần đưa ra quyết định quan trọng?",
      id: "Ketika Anda perlu membuat keputusan penting?"
    },
    options: {
      a: {
        ko: "직감을 믿고 빠르게 결정",
        en: "Trust intuition and decide quickly",
        ja: "直感を信じて素早く決める",
        zh: "相信直觉并快速决定",
        zhTW: "相信直覺並快速決定",
        vi: "Tin tưởng trực giác và quyết định nhanh",
        id: "Percayai intuisi dan putuskan cepat"
      },
      b: {
        ko: "충분히 고민한 후 결정",
        en: "Think thoroughly before deciding",
        ja: "十分に考えてから決める",
        zh: "充分考虑后决定",
        zhTW: "充分考慮後決定",
        vi: "Suy nghĩ kỹ trước khi quyết định",
        id: "Berpikir matang sebelum memutuskan"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "여행지를 정할 때?",
      en: "When choosing a travel destination?",
      ja: "旅行先を決めるとき？",
      zh: "选择旅行目的地时？",
      zhTW: "選擇旅行目的地時？",
      vi: "Khi chọn điểm đến du lịch?",
      id: "Ketika memilih destinasi perjalanan?"
    },
    options: {
      a: {
        ko: "\"거기 좋겠다\" 싶으면 바로 결정",
        en: "Decide immediately if it looks good",
        ja: "「そこ良さそう」と思ったらすぐ決める",
        zh: "看起来不错就立即决定",
        zhTW: "看起來不錯就立即決定",
        vi: "Quyết định ngay nếu có vẻ tốt",
        id: "Putuskan segera jika terlihat bagus"
      },
      b: {
        ko: "여러 옵션 비교하고 신중히 선택",
        en: "Compare options and choose carefully",
        ja: "複数の選択肢を比較して慎重に選ぶ",
        zh: "比较多个选项并谨慎选择",
        zhTW: "比較多個選項並謹慎選擇",
        vi: "So sánh các lựa chọn và chọn cẩn thận",
        id: "Bandingkan opsi dan pilih dengan hati-hati"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "새로운 기회가 왔을 때?",
      en: "When a new opportunity comes?",
      ja: "新しい機会が来たとき？",
      zh: "新机会来临时？",
      zhTW: "新機會來臨時？",
      vi: "Khi có cơ hội mới đến?",
      id: "Ketika peluang baru datang?"
    },
    options: {
      a: {
        ko: "망설이지 않고 바로 도전",
        en: "Take the challenge without hesitation",
        ja: "迷わずすぐに挑戦する",
        zh: "毫不犹豫地接受挑战",
        zhTW: "毫不猶豫地接受挑戰",
        vi: "Nhận thử thách không do dự",
        id: "Terima tantangan tanpa ragu"
      },
      b: {
        ko: "장단점 분석하고 결정",
        en: "Analyze pros and cons first",
        ja: "長所と短所を分析してから決める",
        zh: "先分析优缺点",
        zhTW: "先分析優缺點",
        vi: "Phân tích ưu nhược điểm trước",
        id: "Analisis pro dan kontra dulu"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "친구들과 약속 장소를 정할 때?",
      en: "When deciding a meeting place with friends?",
      ja: "友達と待ち合わせ場所を決めるとき？",
      zh: "与朋友决定见面地点时？",
      zhTW: "與朋友決定見面地點時？",
      vi: "Khi quyết định địa điểm gặp mặt với bạn bè?",
      id: "친구들과 약속 장소를 정할 때?"
    },
    options: {
      a: {
        ko: "\"거기!\" 빠르게 제안",
        en: "Quickly suggest \"There!\"",
        ja: "「そこ！」と素早く提案する",
        zh: "快速建议\"那里！\"",
        zhTW: "快速建議\"那裡！\"",
        vi: "Nhanh chóng đề xuất \"Ở đó!\"",
        id: "Cepat sarankan \"Di sana!\""
      },
      b: {
        ko: "모두 의견 들어보고 결정",
        en: "Hear everyone's opinions",
        ja: "みんなの意見を聞いてから決める",
        zh: "听取大家的意见",
        zhTW: "聽取大家的意見",
        vi: "Nghe ý kiến mọi người",
        id: "Dengarkan pendapat semua orang"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "직장이나 학교 선택을 할 때?",
      en: "When choosing a job or school?",
      ja: "職場や学校を選ぶとき？",
      zh: "选择工作或学校时？",
      zhTW: "選擇工作或學校時？",
      vi: "Khi chọn công việc hoặc trường học?",
      id: "Ketika memilih pekerjaan atau sekolah?"
    },
    options: {
      a: {
        ko: "마음에 들면 빠르게 결정",
        en: "Decide quickly if you like it",
        ja: "気に入ったら素早く決める",
        zh: "喜欢就快速决定",
        zhTW: "喜歡就快速決定",
        vi: "Quyết định nhanh nếu bạn thích",
        id: "Putuskan cepat jika Anda suka"
      },
      b: {
        ko: "오랜 시간 고민하고 비교",
        en: "Think and compare for a long time",
        ja: "長い時間悩んで比較する",
        zh: "长时间思考和比较",
        zhTW: "長時間思考和比較",
        vi: "Suy nghĩ và so sánh lâu dài",
        id: "Berpikir dan bandingkan untuk waktu lama"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "실수했을 때 당신은?",
      en: "When you make a mistake?",
      ja: "間違いをしたときあなたは？",
      zh: "犯错误时你是？",
      zhTW: "犯錯誤時你是？",
      vi: "Khi bạn mắc lỗi?",
      id: "Ketika Anda membuat kesalahan?"
    },
    options: {
      a: {
        ko: "\"다음엔 잘하지 뭐\" 빠르게 넘어감",
        en: "Quickly move on saying \"Better next time\"",
        ja: "「次はちゃんとやろう」と素早く切り替える",
        zh: "快速过去说\"下次会做得更好\"",
        zhTW: "快速過去說\"下次會做得更好\"",
        vi: "Nhanh chóng chuyển sang nói \"Lần sau sẽ tốt hơn\"",
        id: "Cepat lanjutkan dengan bilang \"Lebih baik lain kali\""
      },
      b: {
        ko: "\"왜 그랬을까\" 오래 생각함",
        en: "Think long about \"Why did that happen?\"",
        ja: "「なぜそうなったのか」と長く考える",
        zh: "长时间思考\"为什么会这样？\"",
        zhTW: "長時間思考\"為什麼會這樣？\"",
        vi: "Suy nghĩ lâu về \"Tại sao điều đó xảy ra?\"",
        id: "Berpikir lama tentang \"Mengapa itu terjadi?\""
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "투자나 재테크 결정을 할 때?",
      en: "When making investment decisions?",
      ja: "投資や資産運用の決定をするとき？",
      zh: "做投资决策时？",
      zhTW: "做投資決策時？",
      vi: "Khi đưa ra quyết định đầu tư?",
      id: "Ketika membuat keputusan investasi?"
    },
    options: {
      a: {
        ko: "기회다 싶으면 빠르게 결정",
        en: "Decide quickly if it seems like an opportunity",
        ja: "チャンスだと思ったら素早く決める",
        zh: "看起来是机会就快速决定",
        zhTW: "看起來是機會就快速決定",
        vi: "Quyết định nhanh nếu có vẻ là cơ hội",
        id: "Putuskan cepat jika terlihat seperti peluang"
      },
      b: {
        ko: "충분히 조사하고 신중히 결정",
        en: "Research thoroughly and decide carefully",
        ja: "十分に調査して慎重に決める",
        zh: "充分调查后谨慎决定",
        zhTW: "充分調查後謹慎決定",
        vi: "Nghiên cứu kỹ và quyết định cẩn thận",
        id: "Riset dengan matang dan putuskan dengan hati-hati"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "갈림길에서 길을 선택할 때?",
      en: "When choosing a path at a crossroads?",
      ja: "分かれ道で道を選ぶとき？",
      zh: "在岔路口选择道路时？",
      zhTW: "在岔路口選擇道路時？",
      vi: "Khi chọn đường ở ngã ba?",
      id: "Ketika memilih jalan di persimpangan?"
    },
    options: {
      a: {
        ko: "직감으로 빠르게 선택",
        en: "Choose quickly by intuition",
        ja: "直感で素早く選ぶ",
        zh: "凭直觉快速选择",
        zhTW: "憑直覺快速選擇",
        vi: "Chọn nhanh bằng trực giác",
        id: "Pilih cepat dengan intuisi"
      },
      b: {
        ko: "지도 보거나 생각하고 선택",
        en: "Check map or think before choosing",
        ja: "地図を見たり考えてから選ぶ",
        zh: "查看地图或思考后选择",
        zhTW: "查看地圖或思考後選擇",
        vi: "Xem bản đồ hoặc suy nghĩ trước khi chọn",
        id: "Periksa peta atau pikirkan sebelum memilih"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "사람들이 당신을 뭐라고 평가할까?",
      en: "How would people evaluate you?",
      ja: "人々はあなたをどう評価するだろうか？",
      zh: "人们会如何评价你？",
      zhTW: "人們會如何評價你？",
      vi: "Mọi người sẽ đánh giá bạn như thế nào?",
      id: "Bagaimana orang akan mengevaluasi Anda?"
    },
    options: {
      a: {
        ko: "\"결정이 빨라\"",
        en: "\"Decides quickly\"",
        ja: "「決断が早い」",
        zh: "\"决定很快\"",
        zhTW: "\"決定很快\"",
        vi: "\"Quyết định nhanh\"",
        id: "\"Putuskan cepat\""
      },
      b: {
        ko: "\"신중하고 꼼꼼해\"",
        en: "\"Careful and thorough\"",
        ja: "「慎重で几帳面」",
        zh: "\"谨慎且细致\"",
        zhTW: "\"謹慎且細緻\"",
        vi: "\"Cẩn thận và kỹ lưỡng\"",
        id: "\"Hati-hati dan teliti\""
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "당신의 의사결정 철학은?",
      en: "What is your decision-making philosophy?",
      ja: "あなたの意思決定の哲学は？",
      zh: "你的决策哲学是什么？",
      zhTW: "你的決策哲學是什麼？",
      vi: "Triết lý ra quyết định của bạn là gì?",
      id: "Apa filosofi pengambilan keputusan Anda?"
    },
    options: {
      a: {
        ko: "빠른 결정이 좋은 결정",
        en: "Fast decisions are good decisions",
        ja: "早い決断が良い決断",
        zh: "快速决定就是好决定",
        zhTW: "快速決定就是好決定",
        vi: "Quyết định nhanh là quyết định tốt",
        id: "Keputusan cepat adalah keputusan baik"
      },
      b: {
        ko: "신중한 결정이 좋은 결정",
        en: "Careful decisions are good decisions",
        ja: "慎重な決断が良い決断",
        zh: "谨慎决定才是好决定",
        zhTW: "謹慎決定才是好決定",
        vi: "Quyết định cẩn thận là quyết định tốt",
        id: "Keputusan hati-hati adalah keputusan baik"
      }
    }
  }
];

export const decisionSpeedResults: DecisionSpeedResult[] = [
  {
    type: 1,
    emoji: "⚡",
    title: {
      ko: "초고속 결정형",
      en: "Ultra-Fast Decision Maker",
      ja: "超高速決定型",
      zh: "超快速决策型",
      zhTW: "超快速決策型",
      vi: "Kiểu Quyết định Siêu Nhanh",
      id: "Pembuat Keputusan Ultra-Cepat"
    },
    description: {
      ko: "3초 컷! 생각보다 행동이 빠른 사람",
      en: "3-second cut! Someone who acts faster than they think",
      ja: "3秒カット！考えるより行動が速い人",
      zh: "3秒截断！行动比思考快的人",
      zhTW: "3秒截斷！行動比思考快的人",
      vi: "Cắt trong 3 giây! Người hành động nhanh hơn suy nghĩ",
      id: "Potong 3 detik! Seseorang yang bertindak lebih cepat dari berpikir"
    },
    characteristics: {
      ko: "거의 모든 것을 즉시 결정합니다. 직감을 믿고 빠르게 행동하며, 고민하는 시간을 낭비라고 생각합니다. 결단력이 뛰어나고 기회를 빠르게 잡지만, 충동적인 선택으로 후회할 때가 많습니다. 실수해도 빠르게 털고 일어나지만, 중요한 결정에서는 최소한의 고민이 필요합니다.",
      en: "You decide almost everything immediately. You trust intuition and act quickly, thinking time spent thinking is wasted. You have excellent decisiveness and quickly seize opportunities, but often regret impulsive choices. Even when you make mistakes, you brush them off quickly, but important decisions need at least some consideration.",
      ja: "ほぼすべてを即座に決定します。直感を信じて素早く行動し、悩む時間を無駄だと考えます。決断力に優れ、機会を素早く掴みますが、衝動的な選択で後悔することが多くあります。失敗しても素早く立ち直りますが、重要な決定では最低限の考慮が必要です。",
      zh: "你几乎立即决定一切。你相信直觉并快速行动，认为思考时间是浪费。你决策力出色，快速抓住机会，但常常后悔冲动选择。即使犯错误也快速振作，但重要决定至少需要一些考虑。",
      zhTW: "你幾乎立即決定一切。你相信直覺並快速行動，認為思考時間是浪費。你決策力出色，快速抓住機會，但常常後悔衝動選擇。即使犯錯誤也快速振作，但重要決定至少需要一些考慮。",
      vi: "Bạn quyết định hầu hết mọi thứ ngay lập tức. Bạn tin tưởng trực giác và hành động nhanh, nghĩ rằng thời gian suy nghĩ là lãng phí. Bạn có khả năng quyết định xuất sắc và nhanh chóng nắm bắt cơ hội, nhưng thường hối tiếc về những lựa chọn bốc đồng. Ngay cả khi mắc lỗi, bạn cũng nhanh chóng vượt qua, nhưng các quyết định quan trọng cần ít nhất một số cân nhắc.",
      id: "Anda memutuskan hampir semuanya segera. Anda percaya intuisi dan bertindak cepat, berpikir waktu berpikir adalah sia-sia. Anda memiliki ketegasan yang luar biasa dan cepat memanfaatkan peluang, tapi sering menyesali pilihan impulsif. Bahkan saat Anda membuat kesalahan, Anda cepat mengabaikannya, tapi keputusan penting membutuhkan setidaknya beberapa pertimbangan."
    },
    strengths: {
      ko: ["결단력", "기회 포착", "빠른 행동", "시간 절약"],
      en: ["Decisiveness", "Opportunity capture", "Fast action", "Time saving"],
      ja: ["決断力", "機会の掴み", "迅速な行動", "時間の節約"],
      zh: ["决断力", "抓住机会", "快速行动", "节省时间"],
      zhTW: ["決斷力", "抓住機會", "快速行動", "節省時間"],
      vi: ["Quyết đoán", "Nắm bắt cơ hội", "Hành động nhanh", "Tiết kiệm thời gian"],
      id: ["Ketegasan", "Menangkap peluang", "Tindakan cepat", "Menghemat waktu"]
    },
    weaknesses: {
      ko: ["충동적", "실수 많음", "후회 가능성"],
      en: ["Impulsive", "Many mistakes", "Regret potential"],
      ja: ["衝動的", "失敗が多い", "後悔の可能性"],
      zh: ["冲动", "错误多", "可能后悔"],
      zhTW: ["衝動", "錯誤多", "可能後悔"],
      vi: ["Bốc đồng", "Nhiều sai lầm", "Khả năng hối tiếc"],
      id: ["Impulsif", "Banyak kesalahan", "Potensi penyesalan"]
    },
    advice: {
      ko: "빠른 것도 좋지만 중요한 결정은 하루만 생각해보세요. 3초가 아닌 3분만 고민해도 후회가 줄어듭니다!",
      en: "Being fast is good, but for important decisions, think for at least a day. Just 3 minutes of consideration instead of 3 seconds can reduce regrets!",
      ja: "速いことも良いですが、重要な決定は1日だけ考えてみてください。3秒ではなく3分だけ悩んでも後悔が減ります！",
      zh: "快速很好，但对于重要决定，至少思考一天。只需要3分钟而不是3秒的考虑就能减少后悔！",
      zhTW: "快速很好，但對於重要決定，至少思考一天。只需要3分鐘而不是3秒的考慮就能減少後悔！",
      vi: "Nhanh cũng tốt, nhưng đối với các quyết định quan trọng, hãy suy nghĩ ít nhất một ngày. Chỉ cần 3 phút cân nhắc thay vì 3 giây có thể giảm hối tiếc!",
      id: "Cepat itu bagus, tapi untuk keputusan penting, pikirkan setidaknya sehari. Hanya 3 menit pertimbangan alih-alih 3 detik dapat mengurangi penyesalan!"
    },
    decisionSpeed: {
      ko: "초고속 ⚡⚡⚡⚡⚡",
      en: "Ultra-Fast ⚡⚡⚡⚡⚡",
      ja: "超高速 ⚡⚡⚡⚡⚡",
      zh: "超快速 ⚡⚡⚡⚡⚡",
      zhTW: "超快速 ⚡⚡⚡⚡⚡",
      vi: "Siêu nhanh ⚡⚡⚡⚡⚡",
      id: "Ultra-Cepat ⚡⚡⚡⚡⚡"
    }
  },
  {
    type: 2,
    emoji: "🚀",
    title: {
      ko: "빠른 결정형",
      en: "Fast Decision Maker",
      ja: "高速決定型",
      zh: "快速决策型",
      zhTW: "快速決策型",
      vi: "Kiểu Quyết định Nhanh",
      id: "Pembuat Keputusan Cepat"
    },
    description: {
      ko: "직감 믿고! 빠르지만 합리적인 결정가",
      en: "Trust intuition! Fast but rational decision maker",
      ja: "直感を信じる！速いが合理的な決定者",
      zh: "相信直觉！快速但理性的决策者",
      zhTW: "相信直覺！快速但理性的決策者",
      vi: "Tin tưởng trực giác! Người quyết định nhanh nhưng hợp lý",
      id: "Percayai intuisi! Pembuat keputusan cepat tapi rasional"
    },
    characteristics: {
      ko: "대체로 빠르게 결정하지만 최소한의 생각은 합니다. 직감을 믿되 완전히 무모하지는 않습니다. 결정이 빠르고 기회를 잘 잡지만, 중요한 일은 한 번 더 생각합니다. 가장 이상적인 빠른 결정 스타일로, 효율적이면서도 후회가 적습니다.",
      en: "You generally decide quickly but do think at least a little. You trust intuition but aren't completely reckless. You decide fast and catch opportunities well, but think once more for important matters. This is the most ideal fast decision style, efficient while having few regrets.",
      ja: "概ね素早く決定しますが、最低限の思考はします。直感を信じますが、完全に無謀ではありません。決定が速く、機会をうまく掴みますが、重要なことはもう一度考えます。最も理想的な速い決定スタイルで、効率的でありながら後悔が少ないです。",
      zh: "你通常快速决定但至少会思考一下。你相信直觉但不会完全鲁莽。你决定快速并能很好地抓住机会，但对重要事情会再想一次。这是最理想的快速决策风格，高效且后悔少。",
      zhTW: "你通常快速決定但至少會思考一下。你相信直覺但不會完全魯莽。你決定快速並能很好地抓住機會，但對重要事情會再想一次。這是最理想的快速決策風格，高效且後悔少。",
      vi: "Bạn thường quyết định nhanh nhưng có suy nghĩ ít nhất một chút. Bạn tin tưởng trực giác nhưng không hoàn toàn liều lĩnh. Bạn quyết định nhanh và nắm bắt cơ hội tốt, nhưng suy nghĩ thêm một lần nữa cho những việc quan trọng. Đây là phong cách quyết định nhanh lý tưởng nhất, hiệu quả trong khi có ít hối tiếc.",
      id: "Anda umumnya memutuskan cepat tapi berpikir setidaknya sedikit. Anda percaya intuisi tapi tidak benar-benar ceroboh. Anda memutuskan cepat dan menangkap peluang dengan baik, tapi berpikir sekali lagi untuk hal penting. Ini adalah gaya keputusan cepat paling ideal, efisien sambil memiliki sedikit penyesalan."
    },
    strengths: {
      ko: ["효율적", "결단력", "균형감"],
      en: ["Efficient", "Decisiveness", "Balance"],
      ja: ["効率的", "決断力", "バランス感覚"],
      zh: ["高效", "决断力", "平衡感"],
      zhTW: ["高效", "決斷力", "平衡感"],
      vi: ["Hiệu quả", "Quyết đoán", "Cân bằng"],
      id: ["Efisien", "Ketegasan", "Keseimbangan"]
    },
    weaknesses: {
      ko: ["가끔 성급함"],
      en: ["Sometimes hasty"],
      ja: ["時々せっかち"],
      zh: ["有时急躁"],
      zhTW: ["有時急躁"],
      vi: ["Đôi khi vội vàng"],
      id: ["Kadang terburu-buru"]
    },
    advice: {
      ko: "완벽해요! 빠르되 생각도 하는 당신의 스타일이 최고입니다!",
      en: "Perfect! Your style of being fast yet thoughtful is the best!",
      ja: "完璧です！速いが考えるあなたのスタイルが最高です！",
      zh: "完美！你快速但深思熟虑的风格是最好的！",
      zhTW: "完美！你快速但深思熟慮的風格是最好的！",
      vi: "Hoàn hảo! Phong cách nhanh nhưng suy nghĩ của bạn là tốt nhất!",
      id: "Sempurna! Gaya Anda yang cepat tapi penuh pertimbangan adalah yang terbaik!"
    },
    decisionSpeed: {
      ko: "빠름 ⚡⚡⚡⚡",
      en: "Fast ⚡⚡⚡⚡",
      ja: "速い ⚡⚡⚡⚡",
      zh: "快速 ⚡⚡⚡⚡",
      zhTW: "快速 ⚡⚡⚡⚡",
      vi: "Nhanh ⚡⚡⚡⚡",
      id: "Cepat ⚡⚡⚡⚡"
    }
  },
  {
    type: 3,
    emoji: "⚖️",
    title: {
      ko: "균형잡힌 중도형",
      en: "Balanced Moderate Type",
      ja: "バランス型中道型",
      zh: "平衡中庸型",
      zhTW: "平衡中庸型",
      vi: "Kiểu Trung dung Cân bằng",
      id: "Tipe Moderat Seimbang"
    },
    description: {
      ko: "상황 따라! 유연한 의사결정자",
      en: "Depends on situation! Flexible decision maker",
      ja: "状況次第！柔軟な意思決定者",
      zh: "视情况而定！灵活的决策者",
      zhTW: "視情況而定！靈活的決策者",
      vi: "Tùy tình huống! Người quyết định linh hoạt",
      id: "Tergantung situasi! Pembuat keputusan fleksibel"
    },
    characteristics: {
      ko: "상황에 따라 빠르게 또는 신중하게 결정합니다. 작은 일은 빠르게, 큰 일은 신중하게 접근합니다. 직관과 논리를 모두 활용하며, 가장 현명하고 적응력 높은 의사결정 스타일입니다. 유연하고 균형잡혔지만 때로는 우유부단해 보일 수 있습니다.",
      en: "You decide quickly or carefully depending on the situation. You approach small matters quickly and big matters carefully. You utilize both intuition and logic, making this the wisest and most adaptable decision-making style. You're flexible and balanced, but may sometimes appear indecisive.",
      ja: "状況に応じて速くまたは慎重に決定します。小さなことは速く、大きなことは慎重にアプローチします。直感と論理の両方を活用し、最も賢明で適応力の高い意思決定スタイルです。柔軟でバランスが取れていますが、時には優柔不断に見えることがあります。",
      zh: "你根据情况快速或谨慎地决定。你对小事快速处理，对大事谨慎对待。你同时运用直觉和逻辑，这是最明智和最具适应性的决策风格。你灵活且平衡，但有时可能显得优柔寡断。",
      zhTW: "你根據情況快速或謹慎地決定。你對小事快速處理，對大事謹慎對待。你同時運用直覺和邏輯，這是最明智和最具適應性的決策風格。你靈活且平衡，但有時可能顯得優柔寡斷。",
      vi: "Bạn quyết định nhanh hoặc cẩn thận tùy theo tình huống. Bạn tiếp cận những việc nhỏ nhanh chóng và những việc lớn cẩn thận. Bạn sử dụng cả trực giác và logic, khiến đây là phong cách quyết định khôn ngoan và thích ứng nhất. Bạn linh hoạt và cân bằng, nhưng đôi khi có thể có vẻ do dự.",
      id: "Anda memutuskan cepat atau hati-hati tergantung situasi. Anda mendekati hal kecil dengan cepat dan hal besar dengan hati-hati. Anda memanfaatkan intuisi dan logika, menjadikan ini gaya pengambilan keputusan paling bijaksana dan paling mudah beradaptasi. Anda fleksibel dan seimbang, tapi kadang mungkin tampak tidak tegas."
    },
    strengths: {
      ko: ["균형감", "유연성", "적응력", "지혜"],
      en: ["Balance", "Flexibility", "Adaptability", "Wisdom"],
      ja: ["バランス感覚", "柔軟性", "適応力", "知恵"],
      zh: ["平衡感", "灵活性", "适应力", "智慧"],
      zhTW: ["平衡感", "靈活性", "適應力", "智慧"],
      vi: ["Cân bằng", "Linh hoạt", "Khả năng thích ứng", "Trí tuệ"],
      id: ["Keseimbangan", "Fleksibilitas", "Kemampuan beradaptasi", "Kebijaksanaan"]
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
      ko: "이상적인 균형이에요! 상황 판단력을 계속 키워가세요!",
      en: "This is an ideal balance! Keep developing your situational judgment!",
      ja: "理想的なバランスです！状況判断力を続けて育ててください！",
      zh: "这是理想的平衡！继续培养你的情况判断力！",
      zhTW: "這是理想的平衡！繼續培養你的情況判斷力！",
      vi: "Đây là sự cân bằng lý tưởng! Tiếp tục phát triển khả năng phán đoán tình huống của bạn!",
      id: "Ini adalah keseimbangan ideal! Terus kembangkan penilaian situasional Anda!"
    },
    decisionSpeed: {
      ko: "중간 ⚖️⚖️⚖️",
      en: "Moderate ⚖️⚖️⚖️",
      ja: "中程度 ⚖️⚖️⚖️",
      zh: "中等 ⚖️⚖️⚖️",
      zhTW: "中等 ⚖️⚖️⚖️",
      vi: "Trung bình ⚖️⚖️⚖️",
      id: "Sedang ⚖️⚖️⚖️"
    }
  },
  {
    type: 4,
    emoji: "🤔",
    title: {
      ko: "신중한 결정형",
      en: "Careful Decision Maker",
      ja: "慎重な決定型",
      zh: "谨慎决策型",
      zhTW: "謹慎決策型",
      vi: "Kiểu Quyết định Cẩn thận",
      id: "Pembuat Keputusan Hati-hati"
    },
    description: {
      ko: "생각이 먼저! 꼼꼼한 분석가",
      en: "Think first! Thorough analyst",
      ja: "考えることが先！几帳面な分析者",
      zh: "先思考！细致的分析者",
      zhTW: "先思考！細緻的分析者",
      vi: "Suy nghĩ trước! Nhà phân tích kỹ lưỡng",
      id: "Pikirkan dulu! Analis teliti"
    },
    characteristics: {
      ko: "대체로 신중하게 결정합니다. 여러 옵션을 비교하고 장단점을 따진 후 선택합니다. 실수가 적고 후회도 적지만, 기회를 놓치거나 결정이 늦을 때가 있습니다. 안전하고 합리적이지만 때로는 과감함도 필요합니다.",
      en: "You generally decide carefully. You compare multiple options and weigh pros and cons before choosing. You make few mistakes and have few regrets, but sometimes miss opportunities or decide too late. You're safe and rational, but sometimes boldness is also needed.",
      ja: "概ね慎重に決定します。複数の選択肢を比較し、長所と短所を考慮してから選択します。失敗が少なく後悔も少ないですが、機会を逃したり決定が遅れたりすることがあります。安全で合理的ですが、時には大胆さも必要です。",
      zh: "你通常谨慎地决定。你在选择前比较多个选项并权衡利弊。你犯错少且后悔少，但有时会错过机会或决定太晚。你安全且理性，但有时也需要大胆。",
      zhTW: "你通常謹慎地決定。你在選擇前比較多個選項並權衡利弊。你犯錯少且後悔少，但有時會錯過機會或決定太晚。你安全且理性，但有時也需要大膽。",
      vi: "Bạn thường quyết định cẩn thận. Bạn so sánh nhiều lựa chọn và cân nhắc ưu nhược điểm trước khi chọn. Bạn mắc ít sai lầm và có ít hối tiếc, nhưng đôi khi bỏ lỡ cơ hội hoặc quyết định quá muộn. Bạn an toàn và hợp lý, nhưng đôi khi cũng cần táo bạo.",
      id: "Anda umumnya memutuskan dengan hati-hati. Anda membandingkan beberapa opsi dan mempertimbangkan pro dan kontra sebelum memilih. Anda membuat sedikit kesalahan dan memiliki sedikit penyesalan, tapi kadang melewatkan peluang atau memutuskan terlalu terlambat. Anda aman dan rasional, tapi kadang keberanian juga diperlukan."
    },
    strengths: {
      ko: ["신중함", "실수 적음", "합리적"],
      en: ["Carefulness", "Few mistakes", "Rational"],
      ja: ["慎重さ", "失敗が少ない", "合理的"],
      zh: ["谨慎", "错误少", "理性"],
      zhTW: ["謹慎", "錯誤少", "理性"],
      vi: ["Cẩn thận", "Ít sai lầm", "Hợp lý"],
      id: ["Kehati-hatian", "Sedikit kesalahan", "Rasional"]
    },
    weaknesses: {
      ko: ["느림", "기회 놓침", "우유부단"],
      en: ["Slow", "Miss opportunities", "Indecisive"],
      ja: ["遅い", "機会を逃す", "優柔不断"],
      zh: ["慢", "错过机会", "优柔寡断"],
      zhTW: ["慢", "錯過機會", "優柔寡斷"],
      vi: ["Chậm", "Bỏ lỡ cơ hội", "Do dự"],
      id: ["Lambat", "Melewatkan peluang", "Tidak tegas"]
    },
    advice: {
      ko: "신중함은 좋지만 모든 결정이 완벽할 순 없어요. 작은 것부터 빠르게 결정하는 연습을 해보세요!",
      en: "Being careful is good, but not every decision can be perfect. Practice making quick decisions on small things!",
      ja: "慎重さは良いですが、すべての決定が完璧とは限りません。小さなことから速く決定する練習をしてみてください！",
      zh: "谨慎很好，但不是每个决定都能完美。练习在小事上快速做决定！",
      zhTW: "謹慎很好，但不是每個決定都能完美。練習在小事上快速做決定！",
      vi: "Cẩn thận là tốt, nhưng không phải mọi quyết định đều có thể hoàn hảo. Hãy thực hành đưa ra quyết định nhanh cho những việc nhỏ!",
      id: "Berhati-hati itu bagus, tapi tidak setiap keputusan bisa sempurna. Berlatihlah membuat keputusan cepat untuk hal-hal kecil!"
    },
    decisionSpeed: {
      ko: "느림 🐢🐢🐢🐢",
      en: "Slow 🐢🐢🐢🐢",
      ja: "遅い 🐢🐢🐢🐢",
      zh: "慢 🐢🐢🐢🐢",
      zhTW: "慢 🐢🐢🐢🐢",
      vi: "Chậm 🐢🐢🐢🐢",
      id: "Lambat 🐢🐢🐢🐢"
    }
  },
  {
    type: 5,
    emoji: "🦥",
    title: {
      ko: "극도의 신중형",
      en: "Extremely Careful Type",
      ja: "極度の慎重型",
      zh: "极度谨慎型",
      zhTW: "極度謹慎型",
      vi: "Kiểu Cực kỳ Cẩn thận",
      id: "Tipe Sangat Hati-hati"
    },
    description: {
      ko: "한참 고민! 모든 것을 따져보는 완벽주의자",
      en: "Long deliberation! Perfectionist who weighs everything",
      ja: "長い悩み！すべてを考慮する完璧主義者",
      zh: "长期考虑！衡量一切的完美主义者",
      zhTW: "長期考慮！衡量一切的完美主義者",
      vi: "Xem xét lâu dài! Người cầu toàn cân nhắc mọi thứ",
      id: "Deliberasi panjang! Perfeksionis yang mempertimbangkan segalanya"
    },
    characteristics: {
      ko: "거의 모든 것을 오래 고민합니다. 작은 결정도 신중하게 하고, 모든 가능성을 따져봅니다. 실수는 거의 없지만 결정이 너무 느려 기회를 많이 놓칩니다. 과도한 신중함으로 스트레스를 받고, 결정 장애처럼 보일 수 있습니다. 과감함을 키워야 합니다.",
      en: "You ponder almost everything for a long time. You make even small decisions carefully and consider all possibilities. You make almost no mistakes, but decide too slowly and miss many opportunities. You suffer stress from excessive caution and may appear to have decision-making disorder. You need to develop boldness.",
      ja: "ほぼすべてを長く悩みます。小さな決定も慎重にし、すべての可能性を考慮します。失敗はほとんどありませんが、決定が遅すぎて多くの機会を逃します。過度な慎重さでストレスを受けており、決定障害のように見えることがあります。大胆さを育てる必要があります。",
      zh: "你对几乎所有事情都考虑很久。即使是小决定也很谨慎，考虑所有可能性。你几乎不犯错，但决定太慢，错过很多机会。过度谨慎导致压力，可能看起来像决策障碍。你需要培养大胆。",
      zhTW: "你對幾乎所有事情都考慮很久。即使是小決定也很謹慎，考慮所有可能性。你幾乎不犯錯，但決定太慢，錯過很多機會。過度謹慎導致壓力，可能看起來像決策障礙。你需要培養大膽。",
      vi: "Bạn cân nhắc hầu hết mọi thứ trong thời gian dài. Bạn đưa ra quyết định kể cả những việc nhỏ một cách cẩn thận và xem xét mọi khả năng. Bạn hầu như không mắc sai lầm, nhưng quyết định quá chậm và bỏ lỡ nhiều cơ hội. Bạn chịu đựng căng thẳng từ sự thận trọng quá mức và có thể có vẻ như rối loạn quyết định. Bạn cần phát triển sự táo bạo.",
      id: "Anda mempertimbangkan hampir segalanya untuk waktu yang lama. Anda membuat keputusan bahkan kecil dengan hati-hati dan mempertimbangkan semua kemungkinan. Anda hampir tidak membuat kesalahan, tapi memutuskan terlalu lambat dan melewatkan banyak peluang. Anda menderita stres dari kehati-hatian yang berlebihan dan mungkin tampak memiliki gangguan pengambilan keputusan. Anda perlu mengembangkan keberanian."
    },
    strengths: {
      ko: ["실수 거의 없음", "철저함"],
      en: ["Almost no mistakes", "Thoroughness"],
      ja: ["失敗がほとんどない", "徹底性"],
      zh: ["几乎无错误", "彻底性"],
      zhTW: ["幾乎無錯誤", "徹底性"],
      vi: ["Hầu như không sai lầm", "Tính kỹ lưỡng"],
      id: ["Hampir tidak ada kesalahan", "Ketelitian"]
    },
    weaknesses: {
      ko: ["매우 느림", "기회 상실", "스트레스", "우유부단"],
      en: ["Very slow", "Miss opportunities", "Stress", "Indecisive"],
      ja: ["非常に遅い", "機会損失", "ストレス", "優柔不断"],
      zh: ["非常慢", "错过机会", "压力", "优柔寡断"],
      zhTW: ["非常慢", "錯過機會", "壓力", "優柔寡斷"],
      vi: ["Rất chậm", "Bỏ lỡ cơ hội", "Căng thẳng", "Do dự"],
      id: ["Sangat lambat", "Melewatkan peluang", "Stres", "Tidak tegas"]
    },
    advice: {
      ko: "완벽한 선택은 없어요. 80% 확신이 들면 결정하세요. 고민하는 시간도 비용입니다!",
      en: "There is no perfect choice. Decide when you are 80% confident. Time spent deliberating is also a cost!",
      ja: "完璧な選択はありません。80%の確信があれば決定してください。悩む時間もコストです！",
      zh: "没有完美的选择。当你有80%的信心时就决定。思考的时间也是成本！",
      zhTW: "沒有完美的選擇。當你有80%的信心時就決定。思考的時間也是成本！",
      vi: "Không có lựa chọn hoàn hảo. Hãy quyết định khi bạn tự tin 80%. Thời gian suy nghĩ cũng là chi phí!",
      id: "Tidak ada pilihan sempurna. Putuskan saat Anda percaya diri 80%. Waktu yang dihabiskan untuk mempertimbangkan juga merupakan biaya!"
    },
    decisionSpeed: {
      ko: "매우 느림 🦥🦥🦥🦥🦥",
      en: "Very Slow 🦥🦥🦥🦥🦥",
      ja: "非常に遅い 🦥🦥🦥🦥🦥",
      zh: "非常慢 🦥🦥🦥🦥🦥",
      zhTW: "非常慢 🦥🦥🦥🦥🦥",
      vi: "Rất chậm 🦥🦥🦥🦥🦥",
      id: "Sangat Lambat 🦥🦥🦥🦥🦥"
    }
  }
];

export function calculateDecisionSpeedResult(answers: string[]): DecisionSpeedResult {
  let fastScore = 0;
  let carefulScore = 0;
  
  // Count answers
  answers.forEach(answer => {
    if (answer === 'a') {
      fastScore += 2;
    } else if (answer === 'b') {
      carefulScore += 2;
    }
  });
  
  // Determine result based on scores
  // Type 1: 22-24점 빠름
  if (fastScore >= 22) {
    return decisionSpeedResults[0]; // 초고속 결정형
  }
  
  // Type 2: 16-20점 빠름
  if (fastScore >= 16 && fastScore <= 20) {
    return decisionSpeedResults[1]; // 빠른 결정형
  }
  
  // Type 3: 10-14점 (균형)
  if (fastScore >= 10 && fastScore <= 14) {
    return decisionSpeedResults[2]; // 균형잡힌 중도형
  }
  
  // Type 4: 4-8점 신중
  if (carefulScore >= 16 && carefulScore <= 20) {
    return decisionSpeedResults[3]; // 신중한 결정형
  }
  
  // Type 5: 0-2점 신중
  if (carefulScore >= 22) {
    return decisionSpeedResults[4]; // 극도의 신중형
  }
  
  // Default fallback
  return decisionSpeedResults[2]; // 균형잡힌 중도형
}

