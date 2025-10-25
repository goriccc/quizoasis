export interface PlannerVsSpontaneousQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    a: Record<string, string>;
    b: Record<string, string>;
  };
}

export interface PlannerVsSpontaneousResult {
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
}

export const plannerVsSpontaneousQuestions: PlannerVsSpontaneousQuestion[] = [
  {
    id: 1,
    question: {
      ko: "주말 계획을 세울 때?",
      en: "When planning your weekend?",
      ja: "週末の計画を立てる時？",
      zh: "制定周末计划时？",
      zhTW: "制定週末計劃時？",
      vi: "Khi lên kế hoạch cuối tuần?",
      id: "Saat merencanakan akhir pekan?"
    },
    options: {
      a: {
        ko: "미리 계획하고 일정 정함",
        en: "Plan ahead and schedule",
        ja: "事前に計画してスケジュールを決める",
        zh: "提前计划并安排日程",
        zhTW: "提前計劃並安排日程",
        vi: "Lên kế hoạch trước và lập lịch trình",
        id: "Rencanakan sebelumnya dan jadwalkan"
      },
      b: {
        ko: "그날 기분 따라 결정",
        en: "Decide based on mood",
        ja: "その日の気分に合わせて決める",
        zh: "根据当天心情决定",
        zhTW: "根據當天心情決定",
        vi: "Quyết định theo tâm trạng",
        id: "Putuskan berdasarkan suasana hati"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "여행을 갈 때?",
      en: "When traveling?",
      ja: "旅行する時？",
      zh: "旅行时？",
      zhTW: "旅行時？",
      vi: "Khi đi du lịch?",
      id: "Saat bepergian?"
    },
    options: {
      a: {
        ko: "일정과 숙소 미리 예약",
        en: "Book schedule and accommodation in advance",
        ja: "スケジュールと宿泊施設を事前に予約",
        zh: "提前预订行程和住宿",
        zhTW: "提前預訂行程和住宿",
        vi: "Đặt trước lịch trình và chỗ ở",
        id: "Pesan jadwal dan akomodasi sebelumnya"
      },
      b: {
        ko: "대충 정하고 즉흥적으로",
        en: "Decide roughly and spontaneously",
        ja: "大まかに決めて即興的に",
        zh: "粗略决定后即兴安排",
        zhTW: "粗略決定後即興安排",
        vi: "Quyết định đại khái và tùy hứng",
        id: "Putuskan kasar dan spontan"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "하루 일과는?",
      en: "Daily routine?",
      ja: "一日の日常は？",
      zh: "日常作息？",
      zhTW: "日常作息？",
      vi: "Thói quen hàng ngày?",
      id: "Rutinitas harian?"
    },
    options: {
      a: {
        ko: "정해진 루틴대로 움직임",
        en: "Follow a set routine",
        ja: "決まったルーティン通りに動く",
        zh: "按照固定日程进行",
        zhTW: "按照固定日程進行",
        vi: "Theo thói quen đã định",
        id: "Ikuti rutinitas yang sudah ditetapkan"
      },
      b: {
        ko: "그때그때 하고 싶은 대로",
        en: "Do whatever I want at the moment",
        ja: "その時その時でやりたいように",
        zh: "想做就做",
        zhTW: "想做就做",
        vi: "Làm những gì muốn làm lúc đó",
        id: "Lakukan apa yang ingin dilakukan saat itu"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "약속 시간에?",
      en: "Appointment time?",
      ja: "約束の時間に？",
      zh: "约会时间？",
      zhTW: "約會時間？",
      vi: "Thời gian hẹn?",
      id: "Waktu janji?"
    },
    options: {
      a: {
        ko: "항상 미리 도착",
        en: "Always arrive early",
        ja: "いつも早めに到着",
        zh: "总是提前到达",
        zhTW: "總是提前到達",
        vi: "Luôn đến sớm",
        id: "Selalu tiba lebih awal"
      },
      b: {
        ko: "딱 맞춰 가거나 조금 늦음",
        en: "Arrive on time or slightly late",
        ja: "ちょうど時間通りか少し遅れる",
        zh: "准时或稍微迟到",
        zhTW: "準時或稍微遲到",
        vi: "Đến đúng giờ hoặc hơi muộn",
        id: "Tiba tepat waktu atau sedikit terlambat"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "일을 처리할 때?",
      en: "When handling tasks?",
      ja: "仕事を処理する時？",
      zh: "处理工作时？",
      zhTW: "處理工作時？",
      vi: "Khi xử lý công việc?",
      id: "Saat menangani tugas?"
    },
    options: {
      a: {
        ko: "할 일 목록 만들고 체크",
        en: "Make a to-do list and check off",
        ja: "やることリストを作ってチェック",
        zh: "制定待办清单并勾选",
        zhTW: "制定待辦清單並勾選",
        vi: "Lập danh sách việc cần làm và đánh dấu",
        id: "Buat daftar tugas dan centang"
      },
      b: {
        ko: "생각나는 대로 처리",
        en: "Handle as I think of them",
        ja: "思い付いたまま処理する",
        zh: "想到什么就做什么",
        zhTW: "想到什麼就做什麼",
        vi: "Xử lý khi nghĩ đến",
        id: "Tangani saat saya memikirkannya"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "장을 보러 갈 때?",
      en: "When grocery shopping?",
      ja: "買い物に行く時？",
      zh: "购物时？",
      zhTW: "購物時？",
      vi: "Khi đi mua sắm?",
      id: "Saat berbelanja?"
    },
    options: {
      a: {
        ko: "필요한 물건 목록 작성",
        en: "Write a shopping list",
        ja: "必要な物のリストを作成",
        zh: "写下购物清单",
        zhTW: "寫下購物清單",
        vi: "Viết danh sách đồ cần mua",
        id: "Tulis daftar belanja"
      },
      b: {
        ko: "가서 필요한 거 구매",
        en: "Go and buy what I need",
        ja: "行って必要なものを買う",
        zh: "去了再买需要的",
        zhTW: "去了再買需要的",
        vi: "Đi rồi mua những gì cần",
        id: "Pergi dan beli yang diperlukan"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "시험이나 발표 준비는?",
      en: "Preparing for exams or presentations?",
      ja: "試験や発表の準備は？",
      zh: "准备考试或演讲？",
      zhTW: "準備考試或演講？",
      vi: "Chuẩn bị thi cử hoặc thuyết trình?",
      id: "Persiapan ujian atau presentasi?"
    },
    options: {
      a: {
        ko: "미리미리 계획적으로",
        en: "Plan well in advance",
        ja: "前もって計画的に",
        zh: "提前规划",
        zhTW: "提前規劃",
        vi: "Lên kế hoạch từ trước",
        id: "Rencanakan dengan baik sebelumnya"
      },
      b: {
        ko: "마감 직전에 몰아서",
        en: "Cram at the last minute",
        ja: "締切直前に集中して",
        zh: "临时抱佛脚",
        zhTW: "臨時抱佛腳",
        vi: "Dồn ép vào phút cuối",
        id: "Sempitkan saat-saat terakhir"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "저녁 메뉴는?",
      en: "Dinner menu?",
      ja: "夕食のメニューは？",
      zh: "晚餐菜单？",
      zhTW: "晚餐菜單？",
      vi: "Thực đơn bữa tối?",
      id: "Menu makan malam?"
    },
    options: {
      a: {
        ko: "미리 정하고 준비",
        en: "Decide in advance and prepare",
        ja: "事前に決めて準備",
        zh: "提前决定并准备",
        zhTW: "提前決定並準備",
        vi: "Quyết định trước và chuẩn bị",
        id: "Putuskan sebelumnya dan siapkan"
      },
      b: {
        ko: "그때 가서 결정",
        en: "Decide when I get there",
        ja: "その時行って決める",
        zh: "到了再决定",
        zhTW: "到了再決定",
        vi: "Đến nơi rồi mới quyết định",
        id: "Putuskan saat sampai di sana"
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "돈 관리는?",
      en: "Money management?",
      ja: "お金の管理は？",
      zh: "理财方式？",
      zhTW: "理財方式？",
      vi: "Quản lý tiền bạc?",
      id: "Manajemen uang?"
    },
    options: {
      a: {
        ko: "예산 세우고 계획적으로",
        en: "Set a budget and plan",
        ja: "予算を立てて計画的に",
        zh: "制定预算并规划",
        zhTW: "制定預算並規劃",
        vi: "Lập ngân sách và lên kế hoạch",
        id: "Tetapkan anggaran dan rencanakan"
      },
      b: {
        ko: "쓰고 싶을 때 쓰고 계산",
        en: "Spend and calculate later",
        ja: "使いたい時に使って後で計算",
        zh: "想花就花后再计算",
        zhTW: "想花就花後再計算",
        vi: "Tiêu khi muốn rồi tính sau",
        id: "Belanjakan dan hitung nanti"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "새로운 일을 시작할 때?",
      en: "When starting something new?",
      ja: "新しいことを始める時？",
      zh: "开始新事物时？",
      zhTW: "開始新事物時？",
      vi: "Khi bắt đầu việc mới?",
      id: "Saat memulai sesuatu yang baru?"
    },
    options: {
      a: {
        ko: "계획 세우고 준비 후 시작",
        en: "Plan and prepare before starting",
        ja: "計画を立てて準備してから始める",
        zh: "规划并准备后开始",
        zhTW: "規劃並準備後開始",
        vi: "Lên kế hoạch và chuẩn bị trước khi bắt đầu",
        id: "Rencanakan dan siapkan sebelum memulai"
      },
      b: {
        ko: "일단 시작하고 배워감",
        en: "Start and learn as I go",
        ja: "とりあえず始めて学んでいく",
        zh: "先开始边做边学",
        zhTW: "先開始邊做邊學",
        vi: "Bắt đầu đã rồi học dần",
        id: "Mulai dan pelajari sambil jalan"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "당신의 다이어리는?",
      en: "Your diary is?",
      ja: "あなたの日記は？",
      zh: "你的日记本？",
      zhTW: "你的日記本？",
      vi: "Cuốn nhật ký của bạn?",
      id: "Buku harian Anda?"
    },
    options: {
      a: {
        ko: "일정으로 빼곡함",
        en: "Packed with schedules",
        ja: "スケジュールで埋まっている",
        zh: "塞满日程",
        zhTW: "塞滿日程",
        vi: "Chật kín lịch trình",
        id: "Penuh dengan jadwal"
      },
      b: {
        ko: "거의 비어있거나 없음",
        en: "Almost empty or none",
        ja: "ほとんど空か存在しない",
        zh: "几乎空白或没有",
        zhTW: "幾乎空白或沒有",
        vi: "Gần như trống hoặc không có",
        id: "Hampir kosong atau tidak ada"
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "당신의 생활 철학은?",
      en: "Your life philosophy is?",
      ja: "あなたの人生哲学は？",
      zh: "你的人生哲学？",
      zhTW: "你的人生哲學？",
      vi: "Triết lý sống của bạn?",
      id: "Filsafat hidup Anda?"
    },
    options: {
      a: {
        ko: "계획적인 삶이 효율적",
        en: "Planned life is efficient",
        ja: "計画的生き方が効率的",
        zh: "计划的生活更高效",
        zhTW: "計劃的生活更高效",
        vi: "Cuộc sống có kế hoạch hiệu quả hơn",
        id: "Hidup terencana itu efisien"
      },
      b: {
        ko: "즉흥적인 삶이 자유로움",
        en: "Spontaneous life is free",
        ja: "即興的な生き方が自由",
        zh: "即兴的生活更自由",
        zhTW: "即興的生活更自由",
        vi: "Cuộc sống tùy hứng tự do hơn",
        id: "Hidup spontan itu bebas"
      }
    }
  }
];

export const plannerVsSpontaneousResults: PlannerVsSpontaneousResult[] = [
  {
    type: 1,
    emoji: "📋",
    title: {
      ko: "완벽 계획형",
      en: "Perfect Planner",
      ja: "完璧計画型",
      zh: "完美计划型",
      zhTW: "完美計劃型",
      vi: "Kiểu Lập Kế Hoạch Hoàn Hảo",
      id: "Perencana Sempurna"
    },
    description: {
      ko: "모든 것을 미리! 계획의 달인",
      en: "Everything in advance! Master of planning",
      ja: "すべてを事前に！計画の達人",
      zh: "一切提前！计划大师",
      zhTW: "一切提前！計劃大師",
      vi: "Mọi thứ trước đó! Bậc thầy về kế hoạch",
      id: "Semuanya sebelumnya! Master perencanaan"
    },
    characteristics: {
      ko: "모든 것을 미리 계획하고 준비합니다. 일정표가 빼곡하고 할 일 목록을 항상 작성합니다. 루틴을 철저히 지키고 예측 가능한 삶을 선호합니다. 효율적이고 실패가 적지만, 융통성이 부족하고 예상 밖의 일에 스트레스받을 수 있습니다. 가끔은 즉흥적인 순간도 필요합니다.",
      en: "Plans and prepares everything in advance. Schedule is packed and always writes to-do lists. Follows routines thoroughly and prefers predictable life. Efficient with fewer failures, but lacks flexibility and can be stressed by unexpected events. Sometimes needs spontaneous moments.",
      ja: "すべてを事前に計画し準備します。スケジュールが詰まっていて常にやることリストを作成します。ルーティンを徹底的に守り、予測可能な人生を好みます。効率的で失敗が少ないですが、柔軟性が不足し、予想外のことにストレスを感じることがあります。時には即興的な瞬間も必要です。",
      zh: "提前规划并准备一切。日程紧凑，总是制定待办清单。严格遵循常规，喜欢可预测的生活。高效且失败少，但缺乏灵活性，意外事件可能造成压力。有时需要即兴时刻。",
      zhTW: "提前規劃並準備一切。日程緊湊，總是制定待辦清單。嚴格遵循常規，喜歡可預測的生活。高效且失敗少，但缺乏靈活性，意外事件可能造成壓力。有時需要即興時刻。",
      vi: "Lên kế hoạch và chuẩn bị mọi thứ trước. Lịch trình kín mít và luôn viết danh sách việc cần làm. Tuân thủ nghiêm ngặt thói quen và thích cuộc sống có thể dự đoán. Hiệu quả với ít thất bại hơn, nhưng thiếu linh hoạt và có thể bị căng thẳng bởi các sự kiện bất ngờ. Đôi khi cần những khoảnh khắc tùy hứng.",
      id: "Merencanakan dan mempersiapkan segalanya sebelumnya. Jadwal penuh dan selalu menulis daftar tugas. Mengikuti rutinitas dengan teliti dan lebih suka hidup yang dapat diprediksi. Efisien dengan lebih sedikit kegagalan, tetapi kurang fleksibel dan dapat stres karena peristiwa tak terduga. Terkadang perlu momen spontan."
    },
    strengths: {
      ko: ["효율적", "체계적", "실패 적음", "시간 관리"],
      en: ["Efficient", "Systematic", "Few failures", "Time management"],
      ja: ["効率的", "体系的", "失敗が少ない", "時間管理"],
      zh: ["高效", "系统化", "失败少", "时间管理"],
      zhTW: ["高效", "系統化", "失敗少", "時間管理"],
      vi: ["Hiệu quả", "Có hệ thống", "Ít thất bại", "Quản lý thời gian"],
      id: ["Efisien", "Sistematis", "Sedikit kegagalan", "Manajemen waktu"]
    },
    weaknesses: {
      ko: ["융통성 부족", "스트레스", "재미 없음"],
      en: ["Lack of flexibility", "Stress", "Lack of fun"],
      ja: ["柔軟性の欠如", "ストレス", "楽しさの欠如"],
      zh: ["缺乏灵活性", "压力", "缺乏乐趣"],
      zhTW: ["缺乏靈活性", "壓力", "缺乏樂趣"],
      vi: ["Thiếu linh hoạt", "Căng thẳng", "Thiếu vui vẻ"],
      id: ["Kurang fleksibel", "Stres", "Kurang menyenangkan"]
    },
    advice: {
      ko: "완벽한 계획도 좋지만 가끔은 계획 없이 움직이는 재미도 느껴보세요!",
      en: "Perfect planning is good, but sometimes try the fun of moving without a plan!",
      ja: "完璧な計画も良いですが、時には計画なしで動く楽しさも感じてみてください！",
      zh: "完美计划很好，但有时也试试无计划行动的乐趣！",
      zhTW: "完美計劃很好，但有時也試試無計劃行動的樂趣！",
      vi: "Lập kế hoạch hoàn hảo cũng tốt, nhưng đôi khi hãy thử niềm vui di chuyển mà không có kế hoạch!",
      id: "Perencanaan sempurna itu bagus, tapi terkadang coba kesenangan bergerak tanpa rencana!"
    }
  },
  {
    type: 2,
    emoji: "📝",
    title: {
      ko: "계획 우선형",
      en: "Planning Priority",
      ja: "計画優先型",
      zh: "计划优先型",
      zhTW: "計劃優先型",
      vi: "Kiểu Ưu Tiên Kế Hoạch",
      id: "Prioritas Perencanaan"
    },
    description: {
      ko: "기본은 계획! 유연성도 있는 실용가",
      en: "Base is planning! Practical with flexibility",
      ja: "基本は計画！柔軟性もある実用家",
      zh: "基础是计划！灵活实用的实干家",
      zhTW: "基礎是計劃！靈活實用的實幹家",
      vi: "Cơ bản là lập kế hoạch! Thực tế với sự linh hoạt",
      id: "Dasar adalah perencanaan! Praktis dengan fleksibilitas"
    },
    characteristics: {
      ko: "대체로 계획을 세우지만 상황에 따라 유연하게 조절합니다. 준비는 하되 완벽하게 고집하지 않습니다. 가장 이상적인 계획 스타일로, 효율적이면서도 즉흥성을 즐길 줄 압니다. 안정적이면서도 재미있는 삶을 살아갑니다.",
      en: "Generally makes plans but adjusts flexibly according to the situation. Prepares but doesn't obsess over perfection. The most ideal planning style, enjoys both efficiency and spontaneity. Lives a stable yet fun life.",
      ja: "概ね計画を立てますが、状況に応じて柔軟に調整します。準備はしますが完璧にこだわりません。最も理想的な計画スタイルで、効率的でありながら即興性も楽しめます。安定していながらも楽しい人生を送ります。",
      zh: "一般会制定计划，但会根据情况灵活调整。会准备但不执着于完美。最理想的计划风格，既享受效率又享受即兴。过着稳定而有趣的生活。",
      zhTW: "一般會制定計劃，但會根據情況靈活調整。會準備但不執著於完美。最理想的計劃風格，既享受效率又享受即興。過著穩定而有趣的生活。",
      vi: "Nhìn chung lập kế hoạch nhưng điều chỉnh linh hoạt theo tình huống. Chuẩn bị nhưng không ám ảnh về sự hoàn hảo. Phong cách lập kế hoạch lý tưởng nhất, tận hưởng cả hiệu quả và sự tùy hứng. Sống một cuộc sống ổn định nhưng thú vị.",
      id: "Umumnya membuat rencana tetapi menyesuaikan dengan fleksibel sesuai situasi. Mempersiapkan tetapi tidak terobsesi dengan kesempurnaan. Gaya perencanaan yang paling ideal, menikmati efisiensi dan spontanitas. Hidup stabil namun menyenangkan."
    },
    strengths: {
      ko: ["효율적", "유연성", "균형감"],
      en: ["Efficient", "Flexibility", "Balance"],
      ja: ["効率的", "柔軟性", "バランス感覚"],
      zh: ["高效", "灵活性", "平衡感"],
      zhTW: ["高效", "靈活性", "平衡感"],
      vi: ["Hiệu quả", "Linh hoạt", "Cân bằng"],
      id: ["Efisien", "Fleksibilitas", "Keseimbangan"]
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
      ko: "완벽해요! 계획하되 유연한 당신의 스타일이 최고입니다!",
      en: "Perfect! Your flexible planning style is the best!",
      ja: "完璧です！計画しながらも柔軟なあなたのスタイルが最高です！",
      zh: "完美！你灵活的计划风格是最好的！",
      zhTW: "完美！你靈活的計劃風格是最好的！",
      vi: "Hoàn hảo! Phong cách lập kế hoạch linh hoạt của bạn là tuyệt nhất!",
      id: "Sempurna! Gaya perencanaan fleksibel Anda adalah yang terbaik!"
    }
  },
  {
    type: 3,
    emoji: "⚖️",
    title: {
      ko: "균형잡힌 중도형",
      en: "Balanced Moderate",
      ja: "バランスの取れた中道型",
      zh: "平衡中庸型",
      zhTW: "平衡中庸型",
      vi: "Kiểu Trung Dung Cân Bằng",
      id: "Moderat Seimbang"
    },
    description: {
      ko: "때로는 계획, 때로는 즉흥! 상황 따라",
      en: "Sometimes plan, sometimes spontaneous! Depends on situation",
      ja: "時には計画、時には即興！状況次第",
      zh: "有时计划，有时即兴！取决于情况",
      zhTW: "有時計劃，有時即興！取決於情況",
      vi: "Đôi khi lập kế hoạch, đôi khi tùy hứng! Tùy vào tình huống",
      id: "Terkadang rencana, terkadang spontan! Tergantung situasi"
    },
    characteristics: {
      ko: "계획과 즉흥의 완벽한 균형을 가졌습니다. 중요한 일은 계획하고, 일상은 즉흥적으로 즐깁니다. 상황에 맞게 유연하게 대처하며, 가장 현명하고 적응력 높은 생활 스타일입니다. 효율성과 재미를 모두 누립니다.",
      en: "Has a perfect balance between planning and spontaneity. Plans important things, enjoys daily life spontaneously. Adapts flexibly to situations, the wisest and most adaptable lifestyle. Enjoys both efficiency and fun.",
      ja: "計画と即興の完璧なバランスを持っています。重要なことは計画し、日常は即興的に楽しみます。状況に応じて柔軟に対処し、最も賢明で適応力の高い生活スタイルです。効率性と楽しさの両方を享受します。",
      zh: "拥有计划与即兴的完美平衡。计划重要的事情，即兴享受日常生活。灵活适应情况，最聪明和适应性最强的生活方式。享受效率和乐趣。",
      zhTW: "擁有計劃與即興的完美平衡。計劃重要的事情，即興享受日常生活。靈活適應情況，最聰明和適應性最強的生活方式。享受效率和樂趣。",
      vi: "Có sự cân bằng hoàn hảo giữa lập kế hoạch và tùy hứng. Lên kế hoạch cho những việc quan trọng, tận hưởng cuộc sống hàng ngày một cách tùy hứng. Thích ứng linh hoạt với tình huống, phong cách sống thông minh và thích ứng nhất. Tận hưởng cả hiệu quả và niềm vui.",
      id: "Memiliki keseimbangan sempurna antara perencanaan dan spontanitas. Merencanakan hal-hal penting, menikmati kehidupan sehari-hari secara spontan. Beradaptasi secara fleksibel dengan situasi, gaya hidup yang paling bijaksana dan paling mudah beradaptasi. Menikmati efisiensi dan kesenangan."
    },
    strengths: {
      ko: ["균형감", "유연성", "적응력"],
      en: ["Balance", "Flexibility", "Adaptability"],
      ja: ["バランス感覚", "柔軟性", "適応力"],
      zh: ["平衡感", "灵活性", "适应力"],
      zhTW: ["平衡感", "靈活性", "適應力"],
      vi: ["Cân bằng", "Linh hoạt", "Khả năng thích ứng"],
      id: ["Keseimbangan", "Fleksibilitas", "Kemampuan beradaptasi"]
    },
    weaknesses: {
      ko: ["때로 우유부단"],
      en: ["Sometimes indecisive"],
      ja: ["時には優柔不断"],
      zh: ["有时优柔寡断"],
      zhTW: ["有時優柔寡斷"],
      vi: ["Đôi khi do dự"],
      id: ["Terkadang tidak tegas"]
    },
    advice: {
      ko: "이상적인 균형이에요! 지금처럼 유연하게 살아가세요!",
      en: "Ideal balance! Keep living flexibly as you do now!",
      ja: "理想的なバランスです！今のように柔軟に生きてください！",
      zh: "理想的平衡！继续灵活地生活！",
      zhTW: "理想的平衡！繼續靈活地生活！",
      vi: "Sự cân bằng lý tưởng! Hãy tiếp tục sống linh hoạt như bạn đang làm!",
      id: "Keseimbangan ideal! Terus hidup dengan fleksibel seperti sekarang!"
    }
  },
  {
    type: 4,
    emoji: "🎈",
    title: {
      ko: "즉흥 우선형",
      en: "Spontaneous Priority",
      ja: "即興優先型",
      zh: "即兴优先型",
      zhTW: "即興優先型",
      vi: "Kiểu Ưu Tiên Tùy Hứng",
      id: "Prioritas Spontan"
    },
    description: {
      ko: "대충 정하고! 자유로운 흐름파",
      en: "Decide roughly! Free-flow type",
      ja: "大まかに決めて！自由な流れ派",
      zh: "粗略决定！自由流动派",
      zhTW: "粗略決定！自由流動派",
      vi: "Quyết định đại khái! Kiểu dòng chảy tự do",
      id: "Putuskan kasar! Tipe aliran bebas"
    },
    characteristics: {
      ko: "대체로 즉흥적으로 움직입니다. 계획은 최소한만 하고 그때그때 결정합니다. 자유롭고 유연하며 재미있지만, 가끔 준비 부족으로 당황할 때가 있습니다. 효율은 떨어지지만 스트레스 없이 삽니다. 중요한 일은 최소한의 계획이 필요합니다.",
      en: "Generally moves spontaneously. Makes minimal plans and decides on the spot. Free, flexible, and fun, but sometimes panics due to lack of preparation. Less efficient but lives stress-free. Important things need minimal planning.",
      ja: "概ね即興的に動きます。計画は最小限にしてその時その時で決めます。自由で柔軟で楽しいですが、時々準備不足で慌てることがあります。効率は落ちますがストレスなく暮らします。重要なことは最小限の計画が必要です。",
      zh: "通常即兴行动。做最少的计划，当场决定。自由、灵活、有趣，但有时会因准备不足而惊慌。效率较低但生活无压力。重要的事情需要最少的计划。",
      zhTW: "通常即興行動。做最少的計劃，當場決定。自由、靈活、有趣，但有時會因準備不足而驚慌。效率較低但生活無壓力。重要的事情需要最少的計劃。",
      vi: "Nhìn chung di chuyển tùy hứng. Lập kế hoạch tối thiểu và quyết định tại chỗ. Tự do, linh hoạt và thú vị, nhưng đôi khi hoảng loạn do thiếu chuẩn bị. Kém hiệu quả hơn nhưng sống không căng thẳng. Những việc quan trọng cần kế hoạch tối thiểu.",
      id: "Umumnya bergerak secara spontan. Membuat rencana minimal dan memutuskan di tempat. Bebas, fleksibel, dan menyenangkan, tetapi terkadang panik karena kurang persiapan. Kurang efisien tetapi hidup tanpa stres. Hal-hal penting memerlukan perencanaan minimal."
    },
    strengths: {
      ko: ["자유로움", "유연성", "스트레스 적음"],
      en: ["Freedom", "Flexibility", "Less stress"],
      ja: ["自由", "柔軟性", "ストレスが少ない"],
      zh: ["自由", "灵活性", "压力小"],
      zhTW: ["自由", "靈活性", "壓力小"],
      vi: ["Tự do", "Linh hoạt", "Ít căng thẳng"],
      id: ["Kebebasan", "Fleksibilitas", "Kurang stres"]
    },
    weaknesses: {
      ko: ["비효율", "준비 부족", "실수 많음"],
      en: ["Inefficiency", "Lack of preparation", "Many mistakes"],
      ja: ["非効率", "準備不足", "失敗が多い"],
      zh: ["低效", "准备不足", "错误多"],
      zhTW: ["低效", "準備不足", "錯誤多"],
      vi: ["Kém hiệu quả", "Thiếu chuẩn bị", "Nhiều sai sót"],
      id: ["Ketidakefisienan", "Kurang persiapan", "Banyak kesalahan"]
    },
    advice: {
      ko: "자유도 좋지만 중요한 일은 조금만 계획해보세요!",
      en: "Freedom is good, but plan a little for important things!",
      ja: "自由も良いですが、重要なことは少しだけ計画してみてください！",
      zh: "自由很好，但重要的事情稍微计划一下！",
      zhTW: "自由很好，但重要的事情稍微計劃一下！",
      vi: "Tự do cũng tốt, nhưng hãy lập kế hoạch một chút cho những việc quan trọng!",
      id: "Kebebasan itu bagus, tapi rencanakan sedikit untuk hal-hal penting!"
    }
  },
  {
    type: 5,
    emoji: "🌊",
    title: {
      ko: "완전 즉흥형",
      en: "Pure Spontaneous",
      ja: "完全即興型",
      zh: "完全即兴型",
      zhTW: "完全即興型",
      vi: "Kiểu Tùy Hứng Hoàn Toàn",
      id: "Spontan Murni"
    },
    description: {
      ko: "계획? 그게 뭔데? 흐름 따라 사는 자유인",
      en: "Plan? What's that? Free spirit who follows the flow",
      ja: "計画？それは何？流れに従って生きる自由人",
      zh: "计划？那是什么？随波逐流的自由人",
      zhTW: "計劃？那是什麼？隨波逐流的自由人",
      vi: "Kế hoạch? Cái đó là gì? Tự do theo dòng chảy",
      id: "Rencana? Apa itu? Orang bebas yang mengikuti aliran"
    },
    characteristics: {
      ko: "거의 모든 것을 즉흥적으로 합니다. 계획을 세우지 않고 그 순간의 기분대로 움직입니다. 매우 자유롭고 스트레스 없지만, 준비 부족으로 문제가 생기고 효율이 매우 낮습니다. 중요한 약속을 잊거나 마감을 놓칠 수 있습니다. 최소한의 계획 습관이 필요합니다.",
      en: "Does almost everything spontaneously. Doesn't make plans and moves according to mood at the moment. Very free and stress-free, but problems arise from lack of preparation and efficiency is very low. May forget important appointments or miss deadlines. Needs minimal planning habits.",
      ja: "ほとんどすべてを即興的に行います。計画を立てずにその瞬間の気分で動きます。非常に自由でストレスがありませんが、準備不足で問題が発生し、効率が非常に低いです。重要な約束を忘れたり、締切を逃したりする可能性があります。最小限の計画習慣が必要です。",
      zh: "几乎一切即兴行事。不制定计划，凭当下心情行动。非常自由无压力，但因准备不足而出现问题，效率极低。可能忘记重要约会或错过截止日期。需要最少的计划习惯。",
      zhTW: "幾乎一切即興行事。不制定計劃，憑當下心情行動。非常自由無壓力，但因準備不足而出現問題，效率極低。可能忘記重要約會或錯過截止日期。需要最少的計劃習慣。",
      vi: "Làm hầu hết mọi thứ một cách tùy hứng. Không lập kế hoạch và di chuyển theo tâm trạng vào lúc đó. Rất tự do và không căng thẳng, nhưng các vấn đề phát sinh do thiếu chuẩn bị và hiệu quả rất thấp. Có thể quên các cuộc hẹn quan trọng hoặc bỏ lỡ thời hạn. Cần thói quen lập kế hoạch tối thiểu.",
      id: "Melakukan hampir segalanya secara spontan. Tidak membuat rencana dan bergerak sesuai suasana hati saat itu. Sangat bebas dan tanpa stres, tetapi masalah muncul karena kurang persiapan dan efisiensi sangat rendah. Mungkin lupa janji penting atau melewatkan tenggat waktu. Membutuhkan kebiasaan perencanaan minimal."
    },
    strengths: {
      ko: ["자유로움", "스트레스 제로"],
      en: ["Freedom", "Zero stress"],
      ja: ["自由", "ストレスゼロ"],
      zh: ["自由", "零压力"],
      zhTW: ["自由", "零壓力"],
      vi: ["Tự do", "Không căng thẳng"],
      id: ["Kebebasan", "Stres nol"]
    },
    weaknesses: {
      ko: ["매우 비효율적", "실수 많음", "신뢰도 낮음"],
      en: ["Very inefficient", "Many mistakes", "Low reliability"],
      ja: ["非常に非効率", "失敗が多い", "信頼性が低い"],
      zh: ["非常低效", "错误多", "可靠性低"],
      zhTW: ["非常低效", "錯誤多", "可靠性低"],
      vi: ["Rất kém hiệu quả", "Nhiều sai sót", "Độ tin cậy thấp"],
      id: ["Sangat tidak efisien", "Banyak kesalahan", "Keandalan rendah"]
    },
    advice: {
      ko: "자유도 좋지만 최소한의 계획은 필요해요. 중요한 일만이라도 메모해보세요!",
      en: "Freedom is good, but minimal planning is needed. At least note down important things!",
      ja: "自由も良いですが、最小限の計画は必要です。少なくとも重要なことはメモしてみてください！",
      zh: "自由很好，但需要最少的计划。至少记下重要的事情！",
      zhTW: "自由很好，但需要最少的計劃。至少記下重要的事情！",
      vi: "Tự do cũng tốt, nhưng cần kế hoạch tối thiểu. Ít nhất hãy ghi chú những việc quan trọng!",
      id: "Kebebasan itu bagus, tapi perencanaan minimal diperlukan. Setidaknya catat hal-hal penting!"
    }
  }
];

export function calculatePlannerVsSpontaneousResult(answers: string[]): PlannerVsSpontaneousResult {
  let plannerScore = 0;
  let spontaneousScore = 0;
  
  // 각 질문에 대해 점수 계산
  answers.forEach((answer, index) => {
    if (answer === 'a') {
      plannerScore += 2;
    } else if (answer === 'b') {
      spontaneousScore += 2;
    }
  });
  
  // 총점은 24점 만점
  // 22-24점 계획: Type 1 (완벽 계획형)
  // 16-20점 계획: Type 2 (계획 우선형)
  // 10-14점: Type 3 (균형잡힌 중도형)
  // 4-8점 즉흥: Type 4 (즉흥 우선형)
  // 0-2점 즉흥: Type 5 (완전 즉흥형)
  
  if (plannerScore >= 22) {
    return plannerVsSpontaneousResults[0]; // 완벽 계획형
  } else if (plannerScore >= 16) {
    return plannerVsSpontaneousResults[1]; // 계획 우선형
  } else if (plannerScore >= 10 && spontaneousScore >= 10) {
    return plannerVsSpontaneousResults[2]; // 균형잡힌 중도형
  } else if (spontaneousScore >= 16) {
    return plannerVsSpontaneousResults[3]; // 즉흥 우선형
  } else {
    return plannerVsSpontaneousResults[4]; // 완전 즉흥형
  }
}

