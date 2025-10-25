export interface DatingStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    a: Record<string, string>;
    b: Record<string, string>;
    c: Record<string, string>;
    d: Record<string, string>;
  };
}

export interface DatingStyleResult {
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
  datingFeatures: {
    ko: string[];
    en: string[];
    ja: string[];
    zh: string[];
    zhTW: string[];
    vi: string[];
    id: string[];
  };
  pros: {
    ko: string[];
    en: string[];
    ja: string[];
    zh: string[];
    zhTW: string[];
    vi: string[];
    id: string[];
  };
  cons: {
    ko: string[];
    en: string[];
    ja: string[];
    zh: string[];
    zhTW: string[];
    vi: string[];
    id: string[];
  };
  recommendedPlaces: {
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
}

export const datingStyleQuestions: DatingStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "이상적인 첫 데이트는?",
      en: "What is your ideal first date?",
      ja: "理想的な最初のデートは？",
      zh: "理想的第一次约会是什么？",
      zhTW: "理想的第一次約會是什麼？",
      vi: "Cuộc hẹn đầu tiên lý tưởng của bạn là gì?",
      id: "Apa kencan pertama yang ideal untukmu?"
    },
    options: {
      a: {
        ko: "예약한 레스토랑에서 근사한 식사",
        en: "Fine dining at a reserved restaurant",
        ja: "予約したレストランでの素敵な食事",
        zh: "在预订的餐厅享用精致晚餐",
        zhTW: "在預訂的餐廳享用精緻晚餐",
        vi: "Bữa tối thịnh soạn tại nhà hàng đã đặt",
        id: "Makan malam mewah di restoran yang sudah dipesan"
      },
      b: {
        ko: "재미있는 곳 돌아다니며 즉흥적으로",
        en: "Spontaneously exploring fun places",
        ja: "面白い場所を歩き回って即興的に",
        zh: "自发地探索有趣的地方",
        zhTW: "自發地探索有趣的地方",
        vi: "Khám phá những nơi thú vị một cách tự phát",
        id: "Menjelajahi tempat-tempat menyenangkan secara spontan"
      },
      c: {
        ko: "조용한 카페에서 깊은 대화",
        en: "Deep conversation at a quiet cafe",
        ja: "静かなカフェで深い会話",
        zh: "在安静的咖啡厅深度交谈",
        zhTW: "在安靜的咖啡廳深度交談",
        vi: "Trò chuyện sâu sắc tại quán cà phê yên tĩnh",
        id: "Percakapan mendalam di kafe yang tenang"
      },
      d: {
        ko: "편한 동네 산책하며 자연스럽게",
        en: "Natural stroll in a comfortable neighborhood",
        ja: "心地よい近所を散歩しながら自然に",
        zh: "在舒适的社区自然散步",
        zhTW: "在舒適的社區自然散步",
        vi: "Đi dạo tự nhiên trong khu phố thoải mái",
        id: "Jalan-jalan santai di lingkungan yang nyaman"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "데이트 준비 시간은?",
      en: "How much time do you spend preparing for a date?",
      ja: "デートの準備時間は？",
      zh: "你花多少时间准备约会？",
      zhTW: "你花多少時間準備約會？",
      vi: "Bạn dành bao nhiêu thời gian chuẩn bị cho cuộc hẹn?",
      id: "Berapa lama waktu yang kamu habiskan untuk mempersiapkan kencan?"
    },
    options: {
      a: {
        ko: "며칠 전부터 계획하고 예약",
        en: "Plan and make reservations days in advance",
        ja: "数日前から計画して予約",
        zh: "提前几天计划和预订",
        zhTW: "提前幾天計劃和預訂",
        vi: "Lên kế hoạch và đặt chỗ từ vài ngày trước",
        id: "Merencanakan dan memesan dari beberapa hari sebelumnya"
      },
      b: {
        ko: "당일 아침에 정하기도 함",
        en: "Sometimes decide on the morning of",
        ja: "当日の朝に決めることもある",
        zh: "有时在当天早上决定",
        zhTW: "有時在當天早上決定",
        vi: "Đôi khi quyết định vào buổi sáng ngày hẹn",
        id: "Kadang-kadang memutuskan di pagi hari"
      },
      c: {
        ko: "대화할 주제나 분위기 생각",
        en: "Think about conversation topics and atmosphere",
        ja: "話すテーマや雰囲気を考える",
        zh: "思考谈话主题和氛围",
        zhTW: "思考談話主題和氛圍",
        vi: "Suy nghĩ về chủ đề trò chuyện và không khí",
        id: "Memikirkan topik percakapan dan suasana"
      },
      d: {
        ko: "편한 옷 입고 가벼운 마음으로",
        en: "Put on comfortable clothes with a light heart",
        ja: "楽な服を着て軽い気持ちで",
        zh: "穿上舒适的衣服，轻松的心情",
        zhTW: "穿上舒適的衣服，輕鬆的心情",
        vi: "Mặc quần áo thoải mái với tâm trạng nhẹ nhàng",
        id: "Memakai pakaian nyaman dengan hati yang ringan"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "데이트 중 가장 중요한 것은?",
      en: "What is most important during a date?",
      ja: "デート中で最も重要なことは？",
      zh: "约会中什么最重要？",
      zhTW: "約會中什麼最重要？",
      vi: "Điều gì quan trọng nhất trong cuộc hẹn?",
      id: "Apa yang paling penting saat kencan?"
    },
    options: {
      a: {
        ko: "계획대로 진행되는 것",
        en: "Following the plan",
        ja: "計画通りに進むこと",
        zh: "按计划进行",
        zhTW: "按計劃進行",
        vi: "Mọi thứ diễn ra theo kế hoạch",
        id: "Sesuai dengan rencana"
      },
      b: {
        ko: "즐겁고 재미있는 분위기",
        en: "Fun and exciting atmosphere",
        ja: "楽しくて面白い雰囲気",
        zh: "有趣和令人兴奋的氛围",
        zhTW: "有趣和令人興奮的氛圍",
        vi: "Không khí vui vẻ và thú vị",
        id: "Suasana yang menyenangkan dan seru"
      },
      c: {
        ko: "서로의 마음을 나누는 것",
        en: "Sharing each other's feelings",
        ja: "お互いの気持ちを分かち合うこと",
        zh: "分享彼此的感受",
        zhTW: "分享彼此的感受",
        vi: "Chia sẻ cảm xúc của nhau",
        id: "Berbagi perasaan satu sama lain"
      },
      d: {
        ko: "편안하고 부담 없는 것",
        en: "Comfortable and relaxed",
        ja: "心地よく負担のないこと",
        zh: "舒适放松",
        zhTW: "舒適放鬆",
        vi: "Thoải mái và không áp lực",
        id: "Nyaman dan santai"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "연인이 갑자기 계획을 바꾸자고 하면?",
      en: "What if your partner suddenly wants to change plans?",
      ja: "恋人が突然計画を変えたいと言ったら？",
      zh: "如果恋人突然想改变计划？",
      zhTW: "如果戀人突然想改變計劃？",
      vi: "Nếu người yêu đột nhiên muốn thay đổi kế hoạch?",
      id: "Bagaimana jika pasangan tiba-tiba ingin mengubah rencana?"
    },
    options: {
      a: {
        ko: "당황스럽지만 최대한 맞춰줌",
        en: "Surprised but try to accommodate as much as possible",
        ja: "戸惑うができる限り合わせる",
        zh: "惊讶但尽力配合",
        zhTW: "驚訝但盡力配合",
        vi: "Bối rối nhưng cố gắng chiều theo",
        id: "Terkejut tapi berusaha menyesuaikan sebisa mungkin"
      },
      b: {
        ko: "\"좋아!\" 즉시 수락하고 변경",
        en: "\"Sure!\" Immediately accept and change",
        ja: "「いいよ！」即座に了承して変更",
        zh: "「好的！」立即接受并改变",
        zhTW: "「好的！」立即接受並改變",
        vi: "\"Được!\" Ngay lập tức chấp nhận và thay đổi",
        id: "\"Baik!\" Langsung setuju dan mengubah"
      },
      c: {
        ko: "왜 바꾸고 싶은지 먼저 대화",
        en: "First discuss why they want to change",
        ja: "なぜ変えたいのかまず話し合う",
        zh: "先讨论为什么要改变",
        zhTW: "先討論為什麼要改變",
        vi: "Hỏi lý do muốn thay đổi trước",
        id: "Bahas dulu kenapa ingin mengubah"
      },
      d: {
        ko: "너무 번거로우면 다음에 하자고 함",
        en: "If too bothersome, suggest doing it next time",
        ja: "面倒なら次の時にしようと言う",
        zh: "如果太麻烦，建议下次再做",
        zhTW: "如果太麻煩，建議下次再做",
        vi: "Nếu quá phiền phức thì đề nghị làm lần sau",
        id: "Kalau terlalu merepotkan, sarankan lain kali"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "데이트 비용은?",
      en: "How do you handle dating expenses?",
      ja: "デート費用は？",
      zh: "你如何处理约会费用？",
      zhTW: "你如何處理約會費用？",
      vi: "Bạn xử lý chi phí cuộc hẹn như thế nào?",
      id: "Bagaimana kamu menangani biaya kencan?"
    },
    options: {
      a: {
        ko: "미리 예산 세우고 관리",
        en: "Set a budget in advance and manage it",
        ja: "事前に予算を立てて管理",
        zh: "提前制定预算并管理",
        zhTW: "提前制定預算並管理",
        vi: "Lập ngân sách trước và quản lý",
        id: "Membuat anggaran sebelumnya dan mengelolanya"
      },
      b: {
        ko: "그때그때 쓰고 싶은 대로",
        en: "Spend as you want in the moment",
        ja: "その場その場で思うように使う",
        zh: "随心所欲地消费",
        zhTW: "隨心所欲地消費",
        vi: "Chi tiêu tùy ý khi đó",
        id: "Mengeluarkan sesuai keinginan saat itu"
      },
      c: {
        ko: "의미 있는 경험에 집중 투자",
        en: "Focus investment on meaningful experiences",
        ja: "意味のある経験に集中投資",
        zh: "专注于有意义体验的投资",
        zhTW: "專注於有意義體驗的投資",
        vi: "Tập trung đầu tư vào trải nghiệm ý nghĩa",
        id: "Fokus investasi pada pengalaman bermakna"
      },
      d: {
        ko: "경제적이고 부담 없게",
        en: "Affordable and stress-free",
        ja: "経済的で負担なく",
        zh: "经济实惠且无压力",
        zhTW: "經濟實惠且無壓力",
        vi: "Tiết kiệm và không áp lực",
        id: "Ekonomis dan tidak membebani"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "주말 데이트로 선호하는 것은?",
      en: "What do you prefer for weekend dates?",
      ja: "週末のデートで好むことは？",
      zh: "你更喜欢什么样的周末约会？",
      zhTW: "你更喜歡什麼樣的週末約會？",
      vi: "Bạn thích kiểu cuộc hẹn cuối tuần nào?",
      id: "Apa yang kamu sukai untuk kencan akhir pekan?"
    },
    options: {
      a: {
        ko: "미리 예약한 전시회나 공연",
        en: "Pre-booked exhibitions or performances",
        ja: "事前に予約した展示会や公演",
        zh: "预先预订的展览或演出",
        zhTW: "預先預訂的展覽或演出",
        vi: "Triển lãm hoặc buổi biểu diễn đã đặt trước",
        id: "Pameran atau pertunjukan yang sudah dipesan"
      },
      b: {
        ko: "새로 생긴 핫플레이스 탐방",
        en: "Exploring newly opened hot spots",
        ja: "新しくできた人気スポット探索",
        zh: "探索新开的热门地点",
        zhTW: "探索新開的熱門地點",
        vi: "Khám phá những địa điểm mới nổi",
        id: "Menjelajahi tempat populer yang baru dibuka"
      },
      c: {
        ko: "조용한 곳에서 둘만의 깊은 시간",
        en: "Deep time together in a quiet place",
        ja: "静かな場所で二人だけの深い時間",
        zh: "在安静地方度过两个人的深度时光",
        zhTW: "在安靜地方度過兩個人的深度時光",
        vi: "Thời gian sâu sắc ở nơi yên tĩnh",
        id: "Waktu mendalam berdua di tempat yang tenang"
      },
      d: {
        ko: "집이나 근처에서 편하게",
        en: "Comfortably at home or nearby",
        ja: "家や近所で心地よく",
        zh: "在家或附近舒适地",
        zhTW: "在家或附近舒適地",
        vi: "Thoải mái ở nhà hoặc gần đó",
        id: "Nyaman di rumah atau dekat rumah"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "연인과 대화할 때?",
      en: "When talking with your partner?",
      ja: "恋人と話すときは？",
      zh: "与恋人交谈时？",
      zhTW: "與戀人交談時？",
      vi: "Khi trò chuyện với người yêu?",
      id: "Saat berbicara dengan pasangan?"
    },
    options: {
      a: {
        ko: "앞으로의 계획이나 목표 이야기",
        en: "Talk about future plans or goals",
        ja: "今後の計画や目標について話す",
        zh: "谈论未来计划或目标",
        zhTW: "談論未來計劃或目標",
        vi: "Nói về kế hoạch hoặc mục tiêu tương lai",
        id: "Membicarakan rencana atau tujuan masa depan"
      },
      b: {
        ko: "재미있고 가벼운 일상 주제",
        en: "Fun and light everyday topics",
        ja: "面白くて軽い日常の話題",
        zh: "有趣轻松的日常话题",
        zhTW: "有趣輕鬆的日常話題",
        vi: "Chủ đề thường ngày vui vẻ và nhẹ nhàng",
        id: "Topik sehari-hari yang menyenangkan dan ringan"
      },
      c: {
        ko: "감정과 생각을 깊이 나눔",
        en: "Deeply share feelings and thoughts",
        ja: "感情と思いを深く分かち合う",
        zh: "深度分享感受和想法",
        zhTW: "深度分享感受和想法",
        vi: "Chia sẻ sâu sắc cảm xúc và suy nghĩ",
        id: "Berbagi perasaan dan pikiran secara mendalam"
      },
      d: {
        ko: "편하게 있는 그대로의 이야기",
        en: "Casual conversation as we are",
        ja: "心地よくありのままの話",
        zh: "舒适的随意交谈",
        zhTW: "舒適的隨意交談",
        vi: "Trò chuyện tự nhiên như vốn có",
        id: "Percakapan santai apa adanya"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "기념일 데이트는?",
      en: "How do you celebrate anniversary dates?",
      ja: "記念日のデートは？",
      zh: "你如何庆祝纪念日约会？",
      zhTW: "你如何慶祝紀念日約會？",
      vi: "Bạn ăn mừng kỷ niệm như thế nào?",
      id: "Bagaimana kamu merayakan kencan peringatan?"
    },
    options: {
      a: {
        ko: "완벽하게 준비된 이벤트",
        en: "Perfectly prepared event",
        ja: "完璧に準備されたイベント",
        zh: "完美准备的活动",
        zhTW: "完美準備的活動",
        vi: "Sự kiện được chuẩn bị hoàn hảo",
        id: "Acara yang disiapkan dengan sempurna"
      },
      b: {
        ko: "즉흥적이지만 특별한 경험",
        en: "Spontaneous but special experience",
        ja: "即興的だが特別な経験",
        zh: "自发但特别的体验",
        zhTW: "自發但特別的體驗",
        vi: "Trải nghiệm tự phát nhưng đặc biệt",
        id: "Pengalaman spontan tapi spesial"
      },
      c: {
        ko: "진심 어린 편지와 대화 중심",
        en: "Heartfelt letters and conversation focused",
        ja: "心からの手紙と会話中心",
        zh: "以真心信件和对话为主",
        zhTW: "以真心信件和對話為主",
        vi: "Tập trung vào thư tay và trò chuyện chân thành",
        id: "Fokus pada surat tulus dan percakapan"
      },
      d: {
        ko: "집에서 의미 있게 조촐하게",
        en: "Meaningful and simple at home",
        ja: "家で意味のある簡素に",
        zh: "在家有意义且简单",
        zhTW: "在家有意義且簡單",
        vi: "Đơn giản và ý nghĩa ở nhà",
        id: "Bermakna dan sederhana di rumah"
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "데이트 중 침묵이 흐르면?",
      en: "What happens when silence flows during a date?",
      ja: "デート中に沈黙が流れたら？",
      zh: "约会中出现沉默时？",
      zhTW: "約會中出現沉默時？",
      vi: "Khi im lặng xuất hiện trong cuộc hẹn?",
      id: "Apa yang terjadi saat kesunyian mengalir saat kencan?"
    },
    options: {
      a: {
        ko: "미리 준비한 화제 꺼냄",
        en: "Bring up prepared topics",
        ja: "事前に準備した話題を取り出す",
        zh: "提出准备好的话题",
        zhTW: "提出準備好的話題",
        vi: "Đưa ra chủ đề đã chuẩn bị",
        id: "Mengangkat topik yang sudah disiapkan"
      },
      b: {
        ko: "즉흥적으로 재미있는 것 제안",
        en: "Spontaneously suggest something fun",
        ja: "即興的に面白いことを提案",
        zh: "自发地建议有趣的事",
        zhTW: "自發地建議有趣的事",
        vi: "Đề xuất điều gì đó thú vị một cách tự phát",
        id: "Spontan menyarankan sesuatu yang menyenangkan"
      },
      c: {
        ko: "침묵도 편안함의 표현",
        en: "Silence is also an expression of comfort",
        ja: "沈黙も心地よさの表現",
        zh: "沉默也是舒适的表达",
        zhTW: "沉默也是舒適的表達",
        vi: "Im lặng cũng là cách thể hiện sự thoải mái",
        id: "Diam juga ekspresi kenyamanan"
      },
      d: {
        ko: "자연스럽게 다른 얘기 시작",
        en: "Naturally start another conversation",
        ja: "自然に別の話を始める",
        zh: "自然地开始另一个话题也很舒服",
        zhTW: "自然地開始另一個話題也很舒服",
        vi: "Tự nhiên bắt đầu câu chuyện khác",
        id: "Secara alami memulai percakapan lain"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "연인이 피곤해 보일 때?",
      en: "What do you do when your partner looks tired?",
      ja: "恋人が疲れているように見えるときは？",
      zh: "当恋人看起来疲惫时？",
      zhTW: "當戀人看起來疲憊時？",
      vi: "Khi người yêu trông mệt mỏi?",
      id: "Apa yang kamu lakukan saat pasangan terlihat lelah?"
    },
    options: {
      a: {
        ko: "계획 취소하고 집에 가라고 함",
        en: "Cancel plans and suggest going home",
        ja: "計画をキャンセルして家に帰ろうと言う",
        zh: "取消计划并建议回家",
        zhTW: "取消計劃並建議回家",
        vi: "Hủy kế hoạch và đề nghị về nhà",
        id: "Batalkan rencana dan sarankan pulang"
      },
      b: {
        ko: "가벼운 활동으로 변경 제안",
        en: "Suggest changing to lighter activities",
        ja: "軽い活動に変更することを提案",
        zh: "建议改为更轻松的活动",
        zhTW: "建議改為更輕鬆的活動",
        vi: "Đề xuất đổi sang hoạt động nhẹ nhàng hơn",
        id: "Sarankan mengubah ke aktivitas ringan"
      },
      c: {
        ko: "\"괜찮아? 무슨 일 있어?\" 감정 확인",
        en: "\"Are you okay? What happened?\" Check feelings",
        ja: "「大丈夫？何かあった？」感情を確認",
        zh: "「还好吗？怎么了？」检查情绪",
        zhTW: "「還好嗎？怎麼了？」檢查情緒",
        vi: "\"Ổn không? Có chuyện gì?\" Kiểm tra cảm xúc",
        id: "\"Baik-baik saja? Ada apa?\" Periksa perasaan"
      },
      d: {
        ko: "\"우리 집에서 쉴까?\" 제안",
        en: "\"Let's rest at home?\" Suggest",
        ja: "「家で休む？」提案",
        zh: "「在家休息吧？」建议",
        zhTW: "「在家休息吧？」建議",
        vi: "\"Chúng ta nghỉ ở nhà nhé?\" Đề xuất",
        id: "\"Istirahat di rumah?\" Sarankan"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "당신에게 데이트란?",
      en: "What does dating mean to you?",
      ja: "あなたにとってデートとは？",
      zh: "约会对你意味着什么？",
      zhTW: "約會對你意味著什麼？",
      vi: "Cuộc hẹn có ý nghĩa gì với bạn?",
      id: "Apa arti kencan bagimu?"
    },
    options: {
      a: {
        ko: "계획하고 실행하는 즐거움",
        en: "Joy of planning and executing",
        ja: "計画して実行する楽しみ",
        zh: "计划和执行的乐趣",
        zhTW: "計劃和執行的樂趣",
        vi: "Niềm vui lên kế hoạch và thực hiện",
        id: "Kesenangan merencanakan dan melaksanakan"
      },
      b: {
        ko: "새로운 경험과 모험",
        en: "New experiences and adventures",
        ja: "新しい経験と冒険",
        zh: "新的体验和冒险",
        zhTW: "新的體驗和冒險",
        vi: "Trải nghiệm mới và phiêu lưu",
        id: "Pengalaman dan petualangan baru"
      },
      c: {
        ko: "감정을 나누는 소중한 시간",
        en: "Precious time to share emotions",
        ja: "感情を分かち合う大切な時間",
        zh: "分享情感的珍贵时光",
        zhTW: "分享情感的珍貴時光",
        vi: "Thời gian quý giá để chia sẻ cảm xúc",
        id: "Waktu berharga untuk berbagi emosi"
      },
      d: {
        ko: "편안하게 함께 있는 것",
        en: "Being together comfortably",
        ja: "心地よく一緒にいること",
        zh: "舒适地在一起",
        zhTW: "舒適地在一起",
        vi: "Ở bên nhau một cách thoải mái",
        id: "Bersama-sama dengan nyaman"
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "이상적인 데이트 빈도는?",
      en: "What is your ideal dating frequency?",
      ja: "理想的なデートの頻度は？",
      zh: "你理想的约会频率是？",
      zhTW: "你理想的約會頻率是？",
      vi: "Tần suất hẹn hò lý tưởng của bạn là gì?",
      id: "Berapa frekuensi kencan ideal untukmu?"
    },
    options: {
      a: {
        ko: "정해진 요일에 규칙적으로",
        en: "Regularly on set days",
        ja: "決まった曜日に規則的に",
        zh: "在固定日子定期约会",
        zhTW: "在固定日子定期約會",
        vi: "Đều đặn vào những ngày cố định",
        id: "Teratur pada hari yang ditentukan"
      },
      b: {
        ko: "하고 싶을 때마다 자주",
        en: "Often whenever we want",
        ja: "したいときはいつでも頻繁に",
        zh: "只要想就经常约会",
        zhTW: "只要想就經常約會",
        vi: "Thường xuyên khi nào muốn",
        id: "Sering kapanpun kita mau"
      },
      c: {
        ko: "깊이 있게 만날 수 있을 때",
        en: "When we can meet deeply",
        ja: "深く会えるとき",
        zh: "当我们能深度见面时",
        zhTW: "當我們能深度見面時",
        vi: "Khi có thể gặp gỡ sâu sắc",
        id: "Saat kita bisa bertemu secara mendalam"
      },
      d: {
        ko: "부담 없이 주 1-2회 적당히",
        en: "Moderately 1-2 times a week without burden",
        ja: "負担なく週1〜2回適度に",
        zh: "适度地每周1-2次，无压力",
        zhTW: "適度地每週1-2次，無壓力",
        vi: "Vừa phải 1-2 lần một tuần không áp lực",
        id: "Sedang 1-2 kali seminggu tanpa beban"
      }
    }
  }
];

export const datingStyleResults: DatingStyleResult[] = [
  {
    type: 1,
    emoji: "📋",
    title: {
      ko: "완벽 계획형",
      en: "Perfect Planner",
      ja: "完璧プランナー型",
      zh: "完美计划型",
      zhTW: "完美計劃型",
      vi: "Người Lập Kế Hoạch Hoàn Hảo",
      id: "Perencana Sempurna"
    },
    description: {
      ko: "모든 것이 완벽하게! 로맨틱 플래너",
      en: "Everything perfectly! Romantic planner",
      ja: "完璧な全て！ロマンチックプランナー",
      zh: "一切完美！浪漫规划者",
      zhTW: "一切完美！浪漫規劃者",
      vi: "Mọi thứ hoàn hảo! Người lập kế hoạch lãng mạn",
      id: "Semuanya sempurna! Perencana romantis"
    },
    characteristics: {
      ko: "데이트를 미리 계획하고 완벽하게 준비합니다. 예약부터 동선까지 치밀하게 짜고, 실패 없는 데이트를 만듭니다. 로맨틱하고 특별한 순간을 중요하게 여기며, 연인을 위해 많은 노력을 기울입니다. 신뢰감 있고 안정적이며, 상대방이 특별함을 느낍니다. 다만 너무 완벽을 추구하면 부담스러울 수 있고, 예상 밖의 일에 스트레스받을 수 있습니다.",
      en: "You plan dates in advance and prepare perfectly. You carefully organize everything from reservations to routes, creating flawless dates. You value romantic and special moments, putting great effort for your partner. You are trustworthy and stable, making your partner feel special. However, excessive pursuit of perfection can be burdensome, and unexpected events can cause stress.",
      ja: "デートを事前に計画し、完璧に準備します。予約からルートまで細かく組み立て、失敗のないデートを作ります。ロマンチックで特別な瞬間を大切にし、恋人のために多くの努力を払います。信頼感があり安定しており、相手に特別感を感じさせます。ただし、完璧を追求しすぎると負担になる可能性があり、予想外のことにストレスを感じる可能性があります。",
      zh: "你提前计划约会并完美准备。你仔细组织从预订到路线的所有事情，创造完美的约会。你重视浪漫和特殊的时刻，为伴侣付出巨大努力。你值得信赖且稳定，让伴侣感到特别。然而，过度追求完美可能成为负担，意外事件可能导致压力。",
      zhTW: "你提前計劃約會並完美準備。你仔細組織從預訂到路線的所有事情，創造完美的約會。你重視浪漫和特殊的時刻，為伴侶付出巨大努力。你值得信賴且穩定，讓伴侶感到特別。然而，過度追求完美可能成為負擔，意外事件可能導致壓力。",
      vi: "Bạn lên kế hoạch trước và chuẩn bị hoàn hảo. Bạn tổ chức cẩn thận mọi thứ từ đặt chỗ đến lộ trình, tạo ra những cuộc hẹn không tỳ vết. Bạn coi trọng những khoảnh khắc lãng mạn và đặc biệt, nỗ lực nhiều cho người yêu. Bạn đáng tin cậy và ổn định, khiến người yêu cảm thấy đặc biệt. Tuy nhiên, theo đuổi sự hoàn hảo quá mức có thể trở thành gánh nặng, và những sự kiện bất ngờ có thể gây căng thẳng.",
      id: "Kamu merencanakan kencan sebelumnya dan mempersiapkan dengan sempurna. Kamu mengatur dengan hati-hati segalanya dari reservasi hingga rute, menciptakan kencan yang sempurna. Kamu menghargai momen romantis dan istimewa, berusaha keras untuk pasangan. Kamu dapat dipercaya dan stabil, membuat pasangan merasa istimewa. Namun, mengejar kesempurnaan berlebihan bisa membebani, dan kejadian tak terduga bisa menyebabkan stres."
    },
    datingFeatures: {
      ko: ["계획적", "로맨틱", "완벽주의", "세심한 배려"],
      en: ["Planned", "Romantic", "Perfectionist", "Considerate"],
      ja: ["計画的", "ロマンチック", "完璧主義", "細やかな配慮"],
      zh: ["计划性", "浪漫", "完美主义", "细心体贴"],
      zhTW: ["計劃性", "浪漫", "完美主義", "細心體貼"],
      vi: ["Có kế hoạch", "Lãng mạn", "Chủ nghĩa hoàn hảo", "Chu đáo"],
      id: ["Terencana", "Romantis", "Perfeksionis", "Perhatian"]
    },
    pros: {
      ko: ["실패 없는 데이트", "특별함", "신뢰감", "로맨틱"],
      en: ["Flawless dates", "Special", "Trustworthy", "Romantic"],
      ja: ["失敗のないデート", "特別感", "信頼感", "ロマンチック"],
      zh: ["完美的约会", "特别", "值得信赖", "浪漫"],
      zhTW: ["完美的約會", "特別", "值得信賴", "浪漫"],
      vi: ["Cuộc hẹn hoàn hảo", "Đặc biệt", "Đáng tin cậy", "Lãng mạn"],
      id: ["Kencan sempurna", "Istimewa", "Dapat dipercaya", "Romantis"]
    },
    cons: {
      ko: ["융통성 부족", "상대방 부담", "완벽 스트레스"],
      en: ["Lack of flexibility", "Burden on partner", "Perfection stress"],
      ja: ["柔軟性の欠如", "相手への負担", "完璧ストレス"],
      zh: ["缺乏灵活性", "给伴侣负担", "完美压力"],
      zhTW: ["缺乏靈活性", "給伴侶負擔", "完美壓力"],
      vi: ["Thiếu linh hoạt", "Gánh nặng cho người yêu", "Căng thẳng hoàn hảo"],
      id: ["Kurang fleksibel", "Beban pasangan", "Stres kesempurnaan"]
    },
    recommendedPlaces: {
      ko: ["예약 필수 레스토랑", "공연", "전시회", "근사한 카페"],
      en: ["Reservation-required restaurants", "Performances", "Exhibitions", "Nice cafes"],
      ja: ["予約必須のレストラン", "公演", "展示会", "素敵なカフェ"],
      zh: ["需要预订的餐厅", "演出", "展览", "精美咖啡厅"],
      zhTW: ["需要預訂的餐廳", "演出", "展覽", "精美咖啡廳"],
      vi: ["Nhà hàng cần đặt trước", "Buổi biểu diễn", "Triển lãm", "Quán cà phê đẹp"],
      id: ["Restoran yang harus dipesan", "Pertunjukan", "Pameran", "Kafe bagus"]
    },
    advice: {
      ko: "완벽한 계획도 좋지만 즉흥적인 순간에서 더 특별한 추억이 생기기도 해요!",
      en: "Perfect plans are great, but spontaneous moments can create even more special memories!",
      ja: "完璧な計画も良いですが、即興的な瞬間により特別な思い出が生まれることもあります！",
      zh: "完美的计划很好，但自发时刻可能会创造更特别的回忆！",
      zhTW: "完美的計劃很好，但自發時刻可能會創造更特別的回憶！",
      vi: "Kế hoạch hoàn hảo rất tốt, nhưng những khoảnh khắc tự phát có thể tạo ra những kỷ niệm đặc biệt hơn!",
      id: "Rencana sempurna bagus, tapi momen spontan bisa menciptakan kenangan yang lebih istimewa!"
    },
    bestMatch: {
      ko: "💖 최고 궁합: Type 2 (자유 즉흥형) - 서로 완벽하게 보완",
      en: "💖 Best Match: Type 2 (Free Spontaneous) - Perfectly complement each other",
      ja: "💖 最高の相性: Type 2 (自由即興型) - お互いに完璧に補完",
      zh: "💖 最佳配对: Type 2 (自由即兴型) - 完美互补",
      zhTW: "💖 最佳配對: Type 2 (自由即興型) - 完美互補",
      vi: "💖 Kết hợp tốt nhất: Type 2 (Tự phát tự do) - Bổ sung hoàn hảo cho nhau",
      id: "💖 Kecocokan Terbaik: Type 2 (Spontan Bebas) - Saling melengkapi dengan sempurna"
    },
    goodMatch: {
      ko: "😊 좋은 궁합: Type 1 (완벽 계획형) - 안정적이고 체계적",
      en: "😊 Good Match: Type 1 (Perfect Planner) - Stable and systematic",
      ja: "😊 良い相性: Type 1 (完璧プランナー型) - 安定して体系的",
      zh: "😊 良好配对: Type 1 (完美计划型) - 稳定且系统",
      zhTW: "😊 良好配對: Type 1 (完美計劃型) - 穩定且系統",
      vi: "😊 Kết hợp tốt: Type 1 (Người Lập Kế Hoạch Hoàn Hảo) - Ổn định và có hệ thống",
      id: "😊 Kecocokan Baik: Type 1 (Perencana Sempurna) - Stabil dan sistematis"
    },
    carefulMatch: {
      ko: "⚠️ 주의 필요: Type 4 (편안 홈형) - 에너지 차이",
      en: "⚠️ Careful: Type 4 (Comfortable Home) - Energy difference",
      ja: "⚠️ 注意が必要: Type 4 (心地よいホーム型) - エネルギーの違い",
      zh: "⚠️ 需要注意: Type 4 (舒适居家型) - 能量差异",
      zhTW: "⚠️ 需要注意: Type 4 (舒適居家型) - 能量差異",
      vi: "⚠️ Cẩn thận: Type 4 (Ở Nhà Thoải Mái) - Khác biệt năng lượng",
      id: "⚠️ Hati-hati: Type 4 (Rumah Nyaman) - Perbedaan energi"
    }
  },
  {
    type: 2,
    emoji: "🎈",
    title: {
      ko: "자유 즉흥형",
      en: "Free Spontaneous",
      ja: "自由即興型",
      zh: "自由即兴型",
      zhTW: "自由即興型",
      vi: "Tự phát Tự do",
      id: "Spontan Bebas"
    },
    description: {
      ko: "지금 이 순간! 자유로운 로맨티스트",
      en: "Right now! Free romantic",
      ja: "今この瞬間！自由なロマンチスト",
      zh: "就在此刻！自由浪漫主义者",
      zhTW: "就在此刻！自由浪漫主義者",
      vi: "Ngay bây giờ! Lãng mạn tự do",
      id: "Sekarang! Romantis bebas"
    },
    characteristics: {
      ko: "계획 없이 그 순간의 기분대로 움직입니다. 즉흥적이고 자유로우며, 예상 못한 모험을 즐깁니다. 새로운 경험을 좋아하고 매 순간이 신선합니다. 틀에 박힌 데이트보다 자유롭고 다채로운 경험을 선호합니다. 재미있고 활기차며 상대방도 즐겁지만, 준비 부족으로 당황할 때가 있고 계획형 상대방은 불안해할 수 있습니다.",
      en: "You move according to your mood in the moment without plans. You are spontaneous and free, enjoying unexpected adventures. You love new experiences and every moment is fresh. You prefer free and diverse experiences over routine dates. You are fun and energetic, making your partner happy, but sometimes panic due to lack of preparation, and planned partners may feel anxious.",
      ja: "計画なしでその瞬間の気分で動きます。即興的で自由であり、予想外の冒険を楽しみます。新しい経験を好み、毎瞬間が新鮮です。型にはまったデートよりも自由で多様な経験を好みます。面白くて活気があり、相手も楽しめますが、準備不足で慌てることもあり、計画型の相手は不安になる可能性があります。",
      zh: "你没有计划，按当下的心情行动。你自发而自由，享受意想不到的冒险。你喜欢新体验，每一刻都新鲜。你更喜欢自由多样的体验，而不是例行约会。你有趣且充满活力，让伴侣快乐，但有时因准备不足而慌张，计划型伴侣可能会感到焦虑。",
      zhTW: "你沒有計劃，按當下的心情行動。你自發而自由，享受意想不到的冒險。你喜歡新體驗，每一刻都新鮮。你更喜歡自由多樣的體驗，而不是例行約會。你有趣且充滿活力，讓伴侶快樂，但有時因準備不足而慌張，計劃型伴侶可能會感到焦慮。",
      vi: "Bạn di chuyển theo tâm trạng trong khoảnh khắc không có kế hoạch. Bạn tự phát và tự do, tận hưởng những cuộc phiêu lưu bất ngờ. Bạn thích trải nghiệm mới và mỗi khoảnh khắc đều tươi mới. Bạn thích trải nghiệm tự do và đa dạng hơn là những cuộc hẹn theo lịch trình. Bạn vui vẻ và năng động, khiến người yêu hạnh phúc, nhưng đôi khi hoảng sợ vì thiếu chuẩn bị, và người yêu có kế hoạch có thể cảm thấy lo lắng.",
      id: "Kamu bergerak sesuai suasana hati saat itu tanpa rencana. Kamu spontan dan bebas, menikmati petualangan tak terduga. Kamu suka pengalaman baru dan setiap momen segar. Kamu lebih suka pengalaman bebas dan beragam daripada kencan rutin. Kamu menyenangkan dan energetik, membuat pasangan bahagia, tapi kadang panik karena kurang persiapan, dan pasangan yang terencana mungkin merasa cemas."
    },
    datingFeatures: {
      ko: ["즉흥적", "자유로움", "모험적", "신선한 경험"],
      en: ["Spontaneous", "Free", "Adventurous", "Fresh experiences"],
      ja: ["即興的", "自由", "冒険的", "新鮮な経験"],
      zh: ["即兴", "自由", "冒险", "新鲜体验"],
      zhTW: ["即興", "自由", "冒險", "新鮮體驗"],
      vi: ["Tự phát", "Tự do", "Phiêu lưu", "Trải nghiệm mới"],
      id: ["Spontan", "Bebas", "Petualang", "Pengalaman segar"]
    },
    pros: {
      ko: ["재미있음", "신선함", "자유로움", "높은 유연성"],
      en: ["Fun", "Fresh", "Free", "High flexibility"],
      ja: ["面白さ", "新鮮さ", "自由", "高い柔軟性"],
      zh: ["有趣", "新鲜", "自由", "高灵活性"],
      zhTW: ["有趣", "新鮮", "自由", "高靈活性"],
      vi: ["Vui vẻ", "Tươi mới", "Tự do", "Linh hoạt cao"],
      id: ["Menyenangkan", "Segar", "Bebas", "Fleksibilitas tinggi"]
    },
    cons: {
      ko: ["불안감 줄 수 있음", "준비 부족", "예측 불가"],
      en: ["Can cause anxiety", "Lack of preparation", "Unpredictable"],
      ja: ["不安を与える可能性", "準備不足", "予測不可能"],
      zh: ["可能引起焦虑", "准备不足", "不可预测"],
      zhTW: ["可能引起焦慮", "準備不足", "不可預測"],
      vi: ["Có thể gây lo lắng", "Thiếu chuẩn bị", "Không thể đoán trước"],
      id: ["Bisa menyebabkan kecemasan", "Kurang persiapan", "Tidak terduga"]
    },
    recommendedPlaces: {
      ko: ["새로운 핫플레이스", "즉석 여행", "드라이브", "시장"],
      en: ["New hot spots", "Impulsive trips", "Drives", "Markets"],
      ja: ["新しい人気スポット", "即興旅行", "ドライブ", "市場"],
      zh: ["新热门地点", "即兴旅行", "开车兜风", "市场"],
      zhTW: ["新熱門地點", "即興旅行", "開車兜風", "市場"],
      vi: ["Địa điểm mới nổi", "Chuyến đi tự phát", "Đi lái xe", "Chợ"],
      id: ["Tempat populer baru", "Perjalanan impulsif", "Mengemudi", "Pasar"]
    },
    advice: {
      ko: "자유도 좋지만 기념일이나 중요한 날은 조금 준비하면 더 특별해져요!",
      en: "Freedom is good, but preparing a bit for anniversaries or important days makes them more special!",
      ja: "自由も良いですが、記念日や重要な日は少し準備するとより特別になります！",
      zh: "自由很好，但在纪念日或重要日子稍微准备会让它们更特别！",
      zhTW: "自由很好，但在紀念日或重要日子稍微準備會讓它們更特別！",
      vi: "Tự do là tốt, nhưng chuẩn bị một chút cho ngày kỷ niệm hoặc ngày quan trọng sẽ làm chúng đặc biệt hơn!",
      id: "Kebebasan bagus, tapi mempersiapkan sedikit untuk hari jadi atau hari penting membuatnya lebih istimewa!"
    },
    bestMatch: {
      ko: "💖 최고 궁합: Type 1 (완벽 계획형) - 완벽한 보완 관계",
      en: "💖 Best Match: Type 1 (Perfect Planner) - Perfect complementary relationship",
      ja: "💖 最高の相性: Type 1 (完璧プランナー型) - 完璧な補完関係",
      zh: "💖 最佳配对: Type 1 (完美计划型) - 完美互补关系",
      zhTW: "💖 最佳配對: Type 1 (完美計劃型) - 完美互補關係",
      vi: "💖 Kết hợp tốt nhất: Type 1 (Người Lập Kế Hoạch Hoàn Hảo) - Mối quan hệ bổ sung hoàn hảo",
      id: "💖 Kecocokan Terbaik: Type 1 (Perencana戶戶戶戶戶) - Hubungan pelengkap sempurna"
    },
    goodMatch: {
      ko: "😊 좋은 궁합: Type 2 (자유 즉흥형) - 함께 즐거운 모험",
      en: "😊 Good Match: Type 2 (Free Spontaneous) - Enjoyable adventures together",
      ja: "😊 良い相性: Type 2 (自由即興型) - 一緒に楽しい冒険",
      zh: "😊 良好配对: Type 2 (自由即兴型) - 一起享受冒险",
      zhTW: "😊 良好配對: Type 2 (自由即興型) - 一起享受冒險",
      vi: "😊 Kết hợp tốt: Type 2 (Tự phát Tự do) - Cùng nhau phiêu lưu thú vị",
      id: "😊 Kecocokan Baik: Type 2 (Spontan Bebas) - Petualangan menyenangkan bersama"
    },
    carefulMatch: {
      ko: "⚠️ 주의 필요: Type 3 (감성 교류형) - 깊이 vs 가벼움",
      en: "⚠️ Careful: Type 3 (Emotional Exchange) - Depth vs lightness",
      ja: "⚠️ 注意が必要: Type 3 (感情交流型) - 深さ vs 軽さ",
      zh: "⚠️ 需要注意: Type 3 (情感交流型) - 深度 vs 轻松",
      zhTW: "⚠️ 需要注意: Type 3 (情感交流型) - 深度 vs 輕鬆",
      vi: "⚠️ Cẩn thận: Type 3 (Trao đổi Cảm xúc) - Chiều sâu vs Nhẹ nhàng",
      id: "⚠️ Hati-hati: Type 3 (Pertukaran Emosional) - Kedalaman vs ringan"
    }
  },
  {
    type: 3,
    emoji: "💗",
    title: {
      ko: "감성 교류형",
      en: "Emotional Exchange",
      ja: "感情交流型",
      zh: "情感交流型",
      zhTW: "情感交流型",
      vi: "Trao đổi Cảm xúc",
      id: "Pertukaran Emosional"
    },
    description: {
      ko: "마음이 통하는! 깊이 있는 감성파",
      en: "Connecting hearts! Deep emotional",
      ja: "心が通じる！深い感情派",
      zh: "心灵相通！深度情感型",
      zhTW: "心靈相通！深度情感型",
      vi: "Kết nối trái tim! Sâu sắc về cảm xúc",
      id: "Menghubungkan hati! Emosional mendalam"
    },
    characteristics: {
      ko: "감정 교류와 깊은 대화를 중시합니다. 어디를 가는지보다 어떤 대화를 나누는지가 중요합니다. 연인의 마음을 이해하고 공감하며, 진심 어린 소통을 추구합니다. 표면적인 만남보다 영혼의 교감을 원하고, 감정적으로 깊은 유대감을 형성합니다. 매우 의미 있고 깊은 관계를 만들지만, 때로는 너무 진지하거나 무거워 보일 수 있습니다.",
      en: "You value emotional exchange and deep conversations. What kind of conversation you have is more important than where you go. You understand and empathize with your partner's feelings, pursuing sincere communication. You want soul-to-soul connection rather than superficial meetings, forming deep emotional bonds. You create very meaningful and deep relationships, but sometimes may appear too serious or heavy.",
      ja: "感情の交流と深い会話を重視します。どこに行くかよりもどんな会話をするかが重要です。恋人の心を理解し共感し、心からのコミュニケーションを追求します。表面的な出会いよりも魂の交流を望み、感情的に深い絆を形成します。非常に意味があり深い関係を作りますが、時にはあまりにも真面目すぎたり重く見えることがあります。",
      zh: "你重视情感交流和深度对话。什么样的对话比去哪里更重要。你理解和共情伴侣的感受，追求真诚的沟通。你希望灵魂层面的连接，而不是表面的相遇，形成深层的情感纽带。你创造非常有意义和深刻的关系，但有时可能显得过于严肃或沉重。",
      zhTW: "你重視情感交流和深度對話。什麼樣的對話比去哪裡更重要。你理解和共情伴侶的感受，追求真誠的溝通。你希望靈魂層面的連接，而不是表面的相遇，形成深層的情感紐帶。你創造非常有意義和深刻的關係，但有時可能顯得過於嚴肅或沉重。",
      vi: "Bạn coi trọng trao đổi cảm xúc và những cuộc trò chuyện sâu sắc. Kiểu trò chuyện nào quan trọng hơn là nơi bạn đến. Bạn hiểu và đồng cảm với cảm xúc của người yêu, theo đuổi giao tiếp chân thành. Bạn muốn kết nối tâm hồn với tâm hồn hơn là những cuộc gặp gỡ hời hợt, hình thành những mối liên kết cảm xúc sâu sắc. Bạn tạo ra những mối quan hệ rất ý nghĩa và sâu sắc, nhưng đôi khi có thể trông quá nghiêm túc hoặc nặng nề.",
      id: "Kamu menghargai pertukaran emosional dan percakapan mendalam. Jenis percakapan apa yang kamu lakukan lebih penting daripada kemana kamu pergi. Kamu memahami dan berempati dengan perasaan pasangan, mengejar komunikasi yang tulus. Kamu ingin koneksi jiwa ke jiwa daripada pertemuan dangkal, membentuk ikatan emosional yang dalam. Kamu menciptakan hubungan yang sangat bermakna dan mendalam, tapi kadang mungkin terlihat terlalu serius atau berat."
    },
    datingFeatures: {
      ko: ["감성적", "깊이 있음", "진지한 소통", "공감"],
      en: ["Emotional", "Deep", "Serious communication", "Empathy"],
      ja: ["感情的", "深さ", "真面目なコミュニケーション", "共感"],
      zh: ["情感型", "深度", "严肃沟通", "共情"],
      zhTW: ["情感型", "深度", "嚴肅溝通", "共情"],
      vi: ["Cảm xúc", "Sâu sắc", "Giao tiếp nghiêm túc", "Đồng cảm"],
      id: ["Emosional", "Mendalam", "Komunikasi serius", "Empati"]
    },
    pros: {
      ko: ["깊은 유대감", "이해와 공감", "진심", "안정감"],
      en: ["Deep bond", "Understanding and empathy", "Sincerity", "Stability"],
      ja: ["深い絆", "理解と共感", "真心", "安定感"],
      zh: ["深层纽带", "理解与共情", "真诚", "稳定感"],
      zhTW: ["深層紐帶", "理解與共情", "真誠", "穩定感"],
      vi: ["Liên kết sâu sắc", "Hiểu biết và đồng cảm", "Chân thành", "Ổn định"],
      id: ["Ikatan mendalam", "Pemahaman dan empati", "Ketulusan", "Stabilitas"]
    },
    cons: {
      ko: ["무거울 수 있음", "재미 부족", "과도한 진지함"],
      en: ["Can be heavy", "Lack of fun", "Excessive seriousness"],
      ja: ["重くなりがち", "楽しさの欠如", "過度な真面目さ"],
      zh: ["可能沉重", "缺乏乐趣", "过度严肃"],
      zhTW: ["可能沉重", "缺乏樂趣", "過度嚴肅"],
      vi: ["Có thể nặng nề", "Thiếu vui vẻ", "Nghiêm túc quá mức"],
      id: ["Bisa menjadi berat", "Kurang menyenangkan", "Terlalu serius"]
    },
    recommendedPlaces: {
      ko: ["조용한 카페", "야경 명소", "미술관", "북카페"],
      en: ["Quiet cafes", "Night view spots", "Art galleries", "Book cafes"],
      ja: ["静かなカフェ", "夜景スポット", "美術館", "ブックカフェ"],
      zh: ["安静咖啡厅", "夜景景点", "美术馆", "书店咖啡厅"],
      zhTW: ["安靜咖啡廳", "夜景景點", "美術館", "書店咖啡廳"],
      vi: ["Quán cà phê yên tĩnh", "Điểm ngắm cảnh đêm", "Phòng triển lãm nghệ thuật", "Quán cà phê sách"],
      id: ["Kafe tenang", "Tempat pemandangan malam", "Galeri seni", "Kafe buku"]
    },
    advice: {
      ko: "깊은 대화도 좋지만 가끔은 가볍게 웃고 즐기는 것도 관계에 활력을 줘요!",
      en: "Deep conversations are great, but sometimes laughing and enjoying lightly also adds vitality to the relationship!",
      ja: "深い会話も良いですが、時には軽く笑って楽しむことも関係に活力を与えます！",
      zh: "深度对话很好，但有时轻松地笑和享受也会给关系带来活力！",
      zhTW: "深度對話很好，但有時輕鬆地笑和享受也會給關係帶來活力！",
      vi: "Những cuộc trò chuyện sâu sắc rất tốt, nhưng đôi khi cười và tận hưởng một cách nhẹ nhàng cũng tạo thêm sức sống cho mối quan hệ!",
      id: "Percakapan mendalam bagus, tapi kadang tertawa dan menikmati dengan ringan juga menambah vitalitas hubungan!"
    },
    bestMatch: {
      ko: "💖 최고 궁합: Type 3 (감성 교류형) - 서로 깊이 이해",
      en: "💖 Best Match: Type 3 (Emotional Exchange) - Deeply understand each other",
      ja: "💖 最高の相性: Type 3 (感情交流型) - お互いに深く理解",
      zh: "💖 最佳配对: Type 3 (情感交流型) - 深度理解彼此",
      zhTW: "💖 最佳配對: Type 3 (情感交流型) - 深度理解彼此",
      vi: "💖 Kết hợp tốt nhất: Type 3 (Trao đổi Cảm xúc) - Hiểu sâu về nhau",
      id: "💖 Kecocokan Terbaik: Type 3 (Pertukaran Emosional) - Saling memahami secara mendalam"
    },
    goodMatch: {
      ko: "😊 좋은 궁합: Type 4 (편안 홈형) - 안정적 유대",
      en: "😊 Good Match: Type 4 (Comfortable Home) - Stable bond",
      ja: "😊 良い相性: Type 4 (心地よいホーム型) - 安定した絆",
      zh: "😊 良好配对: Type 4 (舒适居家型) - 稳定纽带",
      zhTW: "😊 良好配對: Type 4 (舒適居家型) - 穩定紐帶",
      vi: "😊 Kết hợp tốt: Type 4 (Ở Nhà Thoải Mái) - Liên kết ổn định",
      id: "😊 Kecocokan Baik: Type 4 (Rumah Nyaman) - Ikatan stabil"
    },
    carefulMatch: {
      ko: "⚠️ 주의 필요: Type 2 (자유 즉흥형) - 깊이 vs 가벼움",
      en: "⚠️ Careful: Type 2 (Free Spontaneous) - Depth vs lightness",
      ja: "⚠️ 注意が必要: Type 2 (自由即興型) - 深さ vs 軽さ",
      zh: "⚠️ 需要注意: Type 2 (自由即兴型) - 深度 vs 轻松",
      zhTW: "⚠️ 需要注意: Type 2 (自由即興型) - 深度 vs 輕鬆",
      vi: "⚠️ Cẩn thận: Type 2 (Tự phát Tự do) - Chiều sâu vs Nhẹ nhàng",
      id: "⚠️ Hati-hati: Type 2 (Spontan Bebas) - Kedalaman vs ringan"
    }
  },
  {
    type: 4,
    emoji: "🏡",
    title: {
      ko: "편안 홈형",
      en: "Comfortable Home",
      ja: "心地よいホーム型",
      zh: "舒适居家型",
      zhTW: "舒適居家型",
      vi: "Ở Nhà Thoải Mái",
      id: "Rumah Nyaman"
    },
    description: {
      ko: "역시 집이 최고! 아늑한 연애파",
      en: "Home is the best! Cozy romantic",
      ja: "やはり家が最高！居心地の良い恋愛派",
      zh: "家是最好的！舒适浪漫型",
      zhTW: "家是最好的！舒適浪漫型",
      vi: "Nhà là nhất! Lãng mạn ấm cúng",
      id: "Rumah adalah yang terbaik! Romantis nyaman"
    },
    characteristics: {
      ko: "집에서 편하게 시간 보내는 것을 선호합니다. 홈 파티, 영화 감상, 함께 요리 등 아늑한 데이트를 좋아합니다. 깊은 대화와 편안한 분위기를 중시하며, 프라이버시와 안락함을 중요하게 여깁니다. 번잡한 외출보다 조용하고 평화로운 시간을 원합니다. 경제적이고 편안하며 친밀감이 깊지만, 단조로워질 수 있으니 가끔은 외출도 필요합니다.",
      en: "You prefer spending time comfortably at home. You like cozy dates like home parties, movie watching, cooking together. You value deep conversations and comfortable atmosphere, and consider privacy and comfort important. You want quiet and peaceful time rather than busy outings. You are economical and comfortable with deep intimacy, but can become monotonous, so occasional outings are needed.",
      ja: "家で心地よく過ごすことを好みます。ホームパーティー、映画鑑賞、一緒に料理など、居心地の良いデートが好きです。深い会話と心地よい雰囲気を重視し、プライバシーと快適さを重要視します。忙しい外出よりも静かで平和な時間を望みます。経済的で心地よく親密感が深いですが、単調になる可能性があるため、時々外出も必要です。",
      zh: "你更喜欢在家舒适地度过时光。你喜欢舒适的约会，如家庭聚会、看电影、一起做饭。你重视深度对话和舒适氛围，认为隐私和舒适很重要。你想要安静平和的时光，而不是忙碌的外出。你经济实惠且舒适，亲密度深，但可能变得单调，所以偶尔的外出是必要的。",
      zhTW: "你更喜歡在家舒適地度過時光。你喜歡舒適的約會，如家庭聚會、看電影、一起做飯。你重視深度對話和舒適氛圍，認為隱私和舒適很重要。你想要安靜平和的時光，而不是忙碌的外出。你經濟實惠且舒適，親密度深，但可能變得單調，所以偶爾的外出是必要的。",
      vi: "Bạn thích dành thời gian thoải mái ở nhà. Bạn thích những cuộc hẹn ấm cúng như tiệc tại nhà, xem phim, nấu ăn cùng nhau. Bạn coi trọng những cuộc trò chuyện sâu sắc và không khí thoải mái, và coi trọng sự riêng tư và thoải mái. Bạn muốn thời gian yên tĩnh và bình yên hơn là những chuyến đi nhộn nhịp. Bạn tiết kiệm và thoải mái với sự thân mật sâu sắc, nhưng có thể trở nên đơn điệu, vì vậy những chuyến đi chơi thỉnh thoảng là cần thiết.",
      id: "Kamu lebih suka menghabiskan waktu dengan nyaman di rumah. Kamu suka kencan yang nyaman seperti pesta rumah, menonton film, memasak bersama. Kamu menghargai percakapan mendalam dan suasana nyaman, dan menganggap privasi dan kenyamanan penting. Kamu ingin waktu yang tenang dan damai daripada keluar yang sibuk. Kamu ekonomis dan nyaman dengan keintiman yang dalam, tapi bisa menjadi monoton, jadi kadang-kadang keluar juga diperlukan."
    },
    datingFeatures: {
      ko: ["편안함", "아늑함", "프라이버시", "경제적"],
      en: ["Comfort", "Cozy", "Privacy", "Economical"],
      ja: ["心地よさ", "居心地の良さ", "プライバシー", "経済的"],
      zh: ["舒适", "温馨", "隐私", "经济实惠"],
      zhTW: ["舒適", "溫馨", "隱私", "經濟實惠"],
      vi: ["Thoải mái", "Ấm cúng", "Riêng tư", "Tiết kiệm"],
      id: ["Nyaman", "Hangat", "Privasi", "Ekonomis"]
    },
    pros: {
      ko: ["편안함", "깊은 대화", "경제적", "높은 친밀감"],
      en: ["Comfort", "Deep conversations", "Economical", "High intimacy"],
      ja: ["心地よさ", "深い会話", "経済的", "高い親密感"],
      zh: ["舒适", "深度对话", "经济实惠", "高亲密度"],
      zhTW: ["舒適", "深度對話", "經濟實惠", "高親密度"],
      vi: ["Thoải mái", "Trò chuyện sâu sắc", "Tiết kiệm", "Thân mật cao"],
      id: ["Nyaman", "Percakapan mendalam", "Ekonomis", "Keintiman tinggi"]
    },
    cons: {
      ko: ["단조로움", "매너리즘", "외출 기회 적음"],
      en: ["Monotony", "Routine", "Few outing opportunities"],
      ja: ["単調さ", "マンネリズム", "外出機会が少ない"],
      zh: ["单调", "例行公事", "外出机会少"],
      zhTW: ["單調", "例行公事", "外出機會少"],
      vi: ["Đơn điệu", "Thói quen", "Ít cơ hội ra ngoài"],
      id: ["Monoton", "Rutinitas", "Kesempatan keluar sedikit"]
    },
    recommendedPlaces: {
      ko: ["집", "동네 카페", "근처 공원", "조용한 식당"],
      en: ["Home", "Neighborhood cafe", "Nearby park", "Quiet restaurant"],
      ja: ["家", "近所のカフェ", "近くの公園", "静かなレストラン"],
      zh: ["家", "社区咖啡厅", "附近公园", "安静餐厅"],
      zhTW: ["家", "社區咖啡廳", "附近公園", "安靜餐廳"],
      vi: ["Nhà", "Quán cà phê gần nhà", "Công viên gần đó", "Nhà hàng yên tĩnh"],
      id: ["Rumah", "Kafe lingkungan", "Taman dekat", "Restoran tenang"]
    },
    advice: {
      ko: "집도 좋지만 가끔은 밖 공기도 쐬면 관계가 더 풍성해지고 새로워져요!",
      en: "Home is good, but sometimes getting fresh air outside makes the relationship richer and renewed!",
      ja: "家も良いですが、時々外の空気を吸うと関係がより豊かになり新しくなります！",
      zh: "家很好，但有时到外面呼吸新鲜空气会让关系更丰富和焕然一新！",
      zhTW: "家很好，但有時到外面呼吸新鮮空氣會讓關係更豐富和煥然一新！",
      vi: "Ở nhà rất tốt, nhưng đôi khi ra ngoài hít thở không khí trong lành sẽ làm mối quan hệ phong phú và mới mẻ hơn!",
      id: "Rumah bagus, tapi kadang keluar menghirup udara segar membuat hubungan lebih kaya dan baru!"
    },
    bestMatch: {
      ko: "💖 최고 궁합: Type 4 (편안 홈형) - 편안하고 안정적",
      en: "💖 Best Match: Type 4 (Comfortable Home) - Comfortable and stable",
      ja: "💖 最高の相性: Type 4 (心地よいホーム型) - 心地よく安定",
      zh: "💖 最佳配对: Type 4 (舒适居家型) - 舒适且稳定",
      zhTW: "💖 最佳配對: Type 4 (舒適居家型) - 舒適且穩定",
      vi: "💖 Kết hợp tốt nhất: Type 4 (Ở Nhà Thoải Mái) - Thoải mái và ổn định",
      id: "💖 Kecocokan Terbaik: Type 4 (Rumah Nyaman) - Nyaman dan stabil"
    },
    goodMatch: {
      ko: "😊 좋은 궁합: Type 3 (감성 교류형) - 깊은 대화와 유대",
      en: "😊 Good Match: Type 3 (Emotional Exchange) - Deep conversations and bond",
      ja: "😊 良い相性: Type 3 (感情交流型) - 深い会話と絆",
      zh: "😊 良好配对: Type 3 (情感交流型) - 深度对话和纽带",
      zhTW: "😊 良好配對: Type 3 (情感交流型) - 深度對話和紐帶",
      vi: "😊 Kết hợp tốt: Type 3 (Trao đổi Cảm xúc) - Trò chuyện sâu sắc và liên kết",
      id: "😊 Kecocokan Baik: Type 3 (Pertukaran Emosional) - Percakapan mendalam dan ikatan"
    },
    carefulMatch: {
      ko: "⚠️ 주의 필요: Type 1 (완벽 계획형) - 에너지 차이",
      en: "⚠️ Careful: Type 1 (Perfect Planner) - Energy difference",
      ja: "⚠️ 注意が必要: Type 1 (完璧プランナー型) - エネルギーの違い",
      zh: "⚠️ 需要注意: Type 1 (完美计划型) - 能量差异",
      zhTW: "⚠️ 需要注意: Type 1 (完美計劃型) - 能量差異",
      vi: "⚠️ Cẩn thận: Type 1 (Người Lập Kế Hoạch Hoàn Hảo) - Khác biệt năng lượng",
      id: "⚠️ Hati-hati: Type 1 (Perencana Sempurna) - Perbedaan energi"
    }
  }
];

export function calculateDatingStyleResult(answers: string[]): number {
  const scores = { type1: 0, type2: 0, type3: 0, type4: 0 };
  
  answers.forEach((answer, index) => {
    const questionNum = index + 1;
    
    if (answer === 'a') {
      scores.type1 += 3;
    } else if (answer === 'b') {
      scores.type2 += 3;
    } else if (answer === 'c') {
      scores.type3 += 3;
    } else if (answer === 'd') {
      scores.type4 += 3;
    }
  });
  
  // Find the highest score
  const maxScore = Math.max(scores.type1, scores.type2, scores.type3, scores.type4);
  
  // If there's a tie, prioritize last 3 questions (Q10-Q12)
  if (scores.type1 === maxScore && scores.type2 === maxScore) {
    const lastAnswers = answers.slice(9);
    const lastType1 = lastAnswers.filter(a => a === 'a').length;
    const lastType2 = lastAnswers.filter(a => a === 'b').length;
    if (lastType1 > lastType2) return 1;
    if (lastType2 > lastType1) return 2;
  }
  if (scores.type1 === maxScore && scores.type3 === maxScore) {
    const lastAnswers = answers.slice(9);
    const lastType1 = lastAnswers.filter(a => a === 'a').length;
    const lastType3 = lastAnswers.filter(a => a === 'c').length;
    if (lastType1 > lastType3) return 1;
    if (lastType3 > lastType1) return 3;
  }
  if (scores.type1 === maxScore && scores.type4 === maxScore) {
    const lastAnswers = answers.slice(9);
    const lastType1 = lastAnswers.filter(a => a === 'a').length;
    const lastType4 = lastAnswers.filter(a => a === 'd').length;
    if (lastType1 > lastType4) return 1;
    if (lastType4 > lastType1) return 4;
  }
  if (scores.type2 === maxScore && scores.type3 === maxScore) {
    const lastAnswers = answers.slice(9);
    const lastType2 = lastAnswers.filter(a => a === 'b').length;
    const lastType3 = lastAnswers.filter(a => a === 'c').length;
    if (lastType2 > lastType3) return 2;
    if (lastType3 > lastType2) return 3;
  }
  if (scores.type2 === maxScore && scores.type4 === maxScore) {
    const lastAnswers = answers.slice(9);
    const lastType2 = lastAnswers.filter(a => a === 'b').length;
    const lastType4 = lastAnswers.filter(a => a === 'd').length;
    if (lastType2 > lastType4) return 2;
    if (lastType4 > lastType2) return 4;
  }
  if (scores.type3 === maxScore && scores.type4 === maxScore) {
    const lastAnswers = answers.slice(9);
    const lastType3 = lastAnswers.filter(a => a === 'c').length;
    const lastType4 = lastAnswers.filter(a => a === 'd').length;
    if (lastType3 > lastType4) return 3;
    if (lastType4 > lastType3) return 4;
  }
  
  // Return the type with the highest score
  if (scores.type1 === maxScore) return 1;
  if (scores.type2 === maxScore) return 2;
  if (scores.type3 === maxScore) return 3;
  if (scores.type4 === maxScore) return 4;
  
  return 1; // Default fallback
}

