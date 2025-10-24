export interface BrainQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface BrainResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  recommendedJobs: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const brainQuestions: BrainQuestion[] = [
  {
    id: 1,
    question: {
      ko: "새로운 기기를 샀을 때 당신은?",
      en: "When you buy a new device, you:",
      ja: "新しい機器を買った時、あなたは？",
      'zh-CN': "当你买了新设备时，你会：",
      'zh-TW': "當你買了新設備時，你會：",
      vi: "Khi bạn mua một thiết bị mới, bạn:",
      id: "Ketika Anda membeli perangkat baru, Anda:"
    },
    options: [
      {
        text: {
          ko: "설명서를 처음부터 차근차근 읽음",
          en: "Read the manual carefully from the beginning",
          ja: "説明書を最初から丁寧に読む",
          'zh-CN': "从头仔细阅读说明书",
          'zh-TW': "從頭仔細閱讀說明書",
          vi: "Đọc hướng dẫn cẩn thận từ đầu",
          id: "Membaca manual dengan hati-hati dari awal"
        },
        scores: { Type1: 8, Type2: 2 }
      },
      {
        text: {
          ko: "중요한 부분만 읽고 시작",
          en: "Read only important parts and start",
          ja: "重要な部分だけ読んで開始",
          'zh-CN': "只读重要部分然后开始",
          'zh-TW': "只讀重要部分然後開始",
          vi: "Chỉ đọc phần quan trọng và bắt đầu",
          id: "Hanya membaca bagian penting dan mulai"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "설명서 안 보고 직관적으로 만지며 배움",
          en: "Learn by touching intuitively without manual",
          ja: "説明書を見ずに直感的に触って覚える",
          'zh-CN': "不看说明书，凭直觉摸索学习",
          'zh-TW': "不看說明書，憑直覺摸索學習",
          vi: "Học bằng cách chạm trực quan mà không cần hướng dẫn",
          id: "Belajar dengan menyentuh secara intuitif tanpa manual"
        },
        scores: { Type3: 2, Type4: 3 }
      },
      {
        text: {
          ko: "그림만 보고 감으로 작동",
          en: "Use it by feeling, looking only at pictures",
          ja: "絵だけ見て感で操作",
          'zh-CN': "只看图片凭感觉操作",
          'zh-TW': "只看圖片憑感覺操作",
          vi: "Chỉ nhìn hình ảnh và vận hành bằng cảm giác",
          id: "Hanya melihat gambar dan mengoperasikan dengan perasaan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "문제를 해결할 때 당신의 방식은?",
      en: "When solving problems, your approach is:",
      ja: "問題を解決する時、あなたの方法は？",
      'zh-CN': "解决问题时，你的方式是：",
      'zh-TW': "解決問題時，你的方式是：",
      vi: "Khi giải quyết vấn đề, cách tiếp cận của bạn là:",
      id: "Saat memecahkan masalah, pendekatan Anda adalah:"
    },
    options: [
      {
        text: {
          ko: "논리적으로 단계별 분석",
          en: "Logical step-by-step analysis",
          ja: "論理的に段階的に分析",
          'zh-CN': "逻辑性的分步分析",
          'zh-TW': "邏輯性的分步分析",
          vi: "Phân tích từng bước một cách logic",
          id: "Analisis langkah demi langkah secara logis"
        },
        scores: { Type1: 8, Type2: 2 }
      },
      {
        text: {
          ko: "경험과 상식으로 접근",
          en: "Approach with experience and common sense",
          ja: "経験と常識でアプローチ",
          'zh-CN': "用经验和常识来接近",
          'zh-TW': "用經驗和常識來接近",
          vi: "Tiếp cận bằng kinh nghiệm và lẽ thường",
          id: "Pendekatan dengan pengalaman dan akal sehat"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "창의적이고 새로운 방법 시도",
          en: "Try creative and new methods",
          ja: "創造的で新しい方法を試す",
          'zh-CN': "尝试创造性的新方法",
          'zh-TW': "嘗試創造性的新方法",
          vi: "Thử các phương pháp sáng tạo và mới",
          id: "Mencoba metode kreatif dan baru"
        },
        scores: { Type3: 2, Type4: 3 }
      },
      {
        text: {
          ko: "직관과 느낌을 따름",
          en: "Follow intuition and feeling",
          ja: "直感と感覚に従う",
          'zh-CN': "跟随直觉和感觉",
          'zh-TW': "跟隨直覺和感覺",
          vi: "Theo trực giác và cảm giác",
          id: "Mengikuti intuisi dan perasaan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "설명할 때 주로 사용하는 방식은?",
      en: "When explaining, you mainly use:",
      ja: "説明する時、主に使う方法は？",
      'zh-CN': "解释时，你主要使用：",
      'zh-TW': "解釋時，你主要使用：",
      vi: "Khi giải thích, bạn chủ yếu sử dụng:",
      id: "Saat menjelaskan, Anda terutama menggunakan:"
    },
    options: [
      {
        text: {
          ko: "숫자와 데이터로 설명",
          en: "Explain with numbers and data",
          ja: "数字とデータで説明",
          'zh-CN': "用数字和数据解释",
          'zh-TW': "用數字和數據解釋",
          vi: "Giải thích bằng số liệu và dữ liệu",
          id: "Menjelaskan dengan angka dan data"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "말로 논리적으로 설명",
          en: "Explain logically with words",
          ja: "言葉で論理的に説明",
          'zh-CN': "用语言逻辑地解释",
          'zh-TW': "用語言邏輯地解釋",
          vi: "Giải thích một cách logic bằng lời nói",
          id: "Menjelaskan secara logis dengan kata-kata"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "그림이나 비유로 설명",
          en: "Explain with pictures or analogies",
          ja: "絵や比喩で説明",
          'zh-CN': "用图片或比喻解释",
          'zh-TW': "用圖片或比喻解釋",
          vi: "Giải thích bằng hình ảnh hoặc ví dụ",
          id: "Menjelaskan dengan gambar atau analogi"
        },
        scores: { Type4: 3, Type3: 2 }
      },
      {
        text: {
          ko: "몸짓이나 이미지로 보여줌",
          en: "Show with gestures or images",
          ja: "身振りやイメージで見せる",
          'zh-CN': "用手势或图像展示",
          'zh-TW': "用手勢或圖像展示",
          vi: "Thể hiện bằng cử chỉ hoặc hình ảnh",
          id: "Menunjukkan dengan gerakan atau gambar"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "길을 찾을 때?",
      en: "When finding your way?",
      ja: "道を探す時は？",
      'zh-CN': "找路的时候？",
      'zh-TW': "找路的時候？",
      vi: "Khi tìm đường?",
      id: "Saat mencari jalan?"
    },
    options: [
      {
        text: {
          ko: "지도 앱의 경로를 정확히 따름",
          en: "Follow the map app route exactly",
          ja: "地図アプリのルートを正確に従う",
          'zh-CN': "准确跟随地图应用路线",
          'zh-TW': "準確跟隨地圖應用路線",
          vi: "Theo chính xác tuyến đường của ứng dụng bản đồ",
          id: "Mengikuti rute aplikasi peta dengan tepat"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "이정표와 표지판 확인하며 이동",
          en: "Check landmarks and signs while moving",
          ja: "目印と標識を確認しながら移動",
          'zh-CN': "一边确认地标和标志一边移动",
          'zh-TW': "一邊確認地標和標誌一邊移動",
          vi: "Kiểm tra các mốc và biển báo khi di chuyển",
          id: "Memeriksa penanda dan rambu saat bergerak"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "전체적인 방향 감각으로 이동",
          en: "Move with overall sense of direction",
          ja: "全体的な方向感覚で移動",
          'zh-CN': "凭整体方向感移动",
          'zh-TW': "憑整體方向感移動",
          vi: "Di chuyển với cảm giác hướng tổng thể",
          id: "Bergerak dengan rasa arah secara keseluruhan"
        },
        scores: { Type4: 3, Type3: 2 }
      },
      {
        text: {
          ko: "직관과 느낌으로 찾아감",
          en: "Find the way by intuition and feeling",
          ja: "直感と感覚で探す",
          'zh-CN': "凭直觉和感觉寻找",
          'zh-TW': "憑直覺和感覺尋找",
          vi: "Tìm đường bằng trực giác và cảm giác",
          id: "Mencari jalan dengan intuisi dan perasaan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "당신이 더 좋아하는 과목은?",
      en: "What subject do you prefer?",
      ja: "あなたがより好きな科目は？",
      'zh-CN': "你更喜欢哪个科目？",
      'zh-TW': "你更喜歡哪個科目？",
      vi: "Bạn thích môn học nào hơn?",
      id: "Mata pelajaran apa yang Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "수학, 과학",
          en: "Math, Science",
          ja: "数学、科学",
          'zh-CN': "数学、科学",
          'zh-TW': "數學、科學",
          vi: "Toán học, Khoa học",
          id: "Matematika, Sains"
        },
        scores: { Type1: 8, Type2: 2 }
      },
      {
        text: {
          ko: "언어, 논술",
          en: "Language, Writing",
          ja: "言語、論述",
          'zh-CN': "语言、论述",
          'zh-TW': "語言、論述",
          vi: "Ngôn ngữ, Viết luận",
          id: "Bahasa, Menulis"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "미술, 음악",
          en: "Art, Music",
          ja: "美術、音楽",
          'zh-CN': "美术、音乐",
          'zh-TW': "美術、音樂",
          vi: "Nghệ thuật, Âm nhạc",
          id: "Seni, Musik"
        },
        scores: { Type3: 2, Type4: 3 }
      },
      {
        text: {
          ko: "체육, 실기",
          en: "Physical Education, Practical",
          ja: "体育、実技",
          'zh-CN': "体育、实践",
          'zh-TW': "體育、實踐",
          vi: "Thể dục, Thực hành",
          id: "Olahraga, Praktik"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "일정을 관리할 때?",
      en: "When managing schedules?",
      ja: "スケジュールを管理する時は？",
      'zh-CN': "管理日程时？",
      'zh-TW': "管理日程時？",
      vi: "Khi quản lý lịch trình?",
      id: "Saat mengelola jadwal?"
    },
    options: [
      {
        text: {
          ko: "시간 단위로 상세하게 계획",
          en: "Plan in detail by hour",
          ja: "時間単位で詳細に計画",
          'zh-CN': "按小时详细计划",
          'zh-TW': "按小時詳細計劃",
          vi: "Lập kế hoạch chi tiết theo giờ",
          id: "Merencanakan secara detail per jam"
        },
        scores: { Type1: 8, Type2: 2 }
      },
      {
        text: {
          ko: "할 일 목록을 체계적으로 작성",
          en: "Write to-do list systematically",
          ja: "やることリストを体系的に作成",
          'zh-CN': "系统地写待办清单",
          'zh-TW': "系統地寫待辦清單",
          vi: "Viết danh sách việc cần làm một cách có hệ thống",
          id: "Membuat daftar tugas secara sistematis"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "대략적인 계획만 세움",
          en: "Make only rough plans",
          ja: "大まかな計画だけ立てる",
          'zh-CN': "只制定大概计划",
          'zh-TW': "只制定大概計劃",
          vi: "Chỉ lập kế hoạch sơ bộ",
          id: "Hanya membuat rencana kasar"
        },
        scores: { Type3: 2, Type4: 3 }
      },
      {
        text: {
          ko: "계획 없이 그때그때 처리",
          en: "Handle things as they come without plans",
          ja: "計画なしでその場その場で処理",
          'zh-CN': "没有计划，临时处理",
          'zh-TW': "沒有計劃，臨時處理",
          vi: "Xử lý tùy lúc mà không có kế hoạch",
          id: "Menangani hal-hal saat muncul tanpa rencana"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "영화를 볼 때 더 집중하는 것은?",
      en: "When watching movies, you focus more on:",
      ja: "映画を見る時、より集中するのは？",
      'zh-CN': "看电影时，你更关注：",
      'zh-TW': "看電影時，你更關注：",
      vi: "Khi xem phim, bạn tập trung hơn vào:",
      id: "Saat menonton film, Anda lebih fokus pada:"
    },
    options: [
      {
        text: {
          ko: "스토리의 논리와 개연성",
          en: "Logic and plausibility of the story",
          ja: "ストーリーの論理と妥当性",
          'zh-CN': "故事的逻辑和合理性",
          'zh-TW': "故事的邏輯和合理性",
          vi: "Logic và tính hợp lý của câu chuyện",
          id: "Logika dan kelayakan cerita"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "대사와 대화의 의미",
          en: "Meaning of dialogue and conversation",
          ja: "セリフと対話の意味",
          'zh-CN': "对话和谈话的含义",
          'zh-TW': "對話和談話的含義",
          vi: "Ý nghĩa của đối thoại và cuộc trò chuyện",
          id: "Makna dialog dan percakapan"
        },
        scores: { Type2: 3, Type3: 2, Type6: 8 }
      },
      {
        text: {
          ko: "영상미와 음악, 분위기",
          en: "Visual beauty, music, atmosphere",
          ja: "映像美と音楽、雰囲気",
          'zh-CN': "视觉美、音乐、氛围",
          'zh-TW': "視覺美、音樂、氛圍",
          vi: "Vẻ đẹp hình ảnh, âm nhạc, bầu không khí",
          id: "Keindahan visual, musik, suasana"
        },
        scores: { Type4: 3, Type3: 2, Type6: 2 }
      },
      {
        text: {
          ko: "감정과 느낌",
          en: "Emotions and feelings",
          ja: "感情と感覚",
          'zh-CN': "情感和感觉",
          'zh-TW': "情感和感覺",
          vi: "Cảm xúc và cảm giác",
          id: "Emosi dan perasaan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "팀 프로젝트에서 당신의 역할은?",
      en: "In team projects, your role is:",
      ja: "チームプロジェクトでのあなたの役割は？",
      'zh-CN': "在团队项目中，你的角色是：",
      'zh-TW': "在團隊項目中，你的角色是：",
      vi: "Trong các dự án nhóm, vai trò của bạn là:",
      id: "Dalam proyek tim, peran Anda adalah:"
    },
    options: [
      {
        text: {
          ko: "데이터 분석, 계산, 검증",
          en: "Data analysis, calculation, verification",
          ja: "データ分析、計算、検証",
          'zh-CN': "数据分析、计算、验证",
          'zh-TW': "數據分析、計算、驗證",
          vi: "Phân tích dữ liệu, tính toán, xác minh",
          id: "Analisis data, perhitungan, verifikasi"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "문서 작성, 논리적 구성",
          en: "Document writing, logical organization",
          ja: "文書作成、論理的構成",
          'zh-CN': "文档编写、逻辑组织",
          'zh-TW': "文檔編寫、邏輯組織",
          vi: "Viết tài liệu, tổ chức logic",
          id: "Penulisan dokumen, organisasi logis"
        },
        scores: { Type2: 3, Type3: 2, Type6: 8 }
      },
      {
        text: {
          ko: "디자인, 기획, 아이디어 제공",
          en: "Design, planning, providing ideas",
          ja: "デザイン、企画、アイデア提供",
          'zh-CN': "设计、规划、提供想法",
          'zh-TW': "設計、規劃、提供想法",
          vi: "Thiết kế, lập kế hoạch, cung cấp ý tưởng",
          id: "Desain, perencanaan, memberikan ide"
        },
        scores: { Type4: 3, Type3: 2, Type6: 2 }
      },
      {
        text: {
          ko: "전체 분위기 파악, 조율",
          en: "Understanding overall atmosphere, coordination",
          ja: "全体的な雰囲気の把握、調整",
          'zh-CN': "把握整体氛围、协调",
          'zh-TW': "把握整體氛圍、協調",
          vi: "Hiểu bầu không khí tổng thể, điều phối",
          id: "Memahami suasana keseluruhan, koordinasi"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "기억하기 쉬운 것은?",
      en: "What is easy for you to remember?",
      ja: "覚えやすいのは？",
      'zh-CN': "容易记住的是什么？",
      'zh-TW': "容易記住的是什麼？",
      vi: "Điều gì dễ nhớ với bạn?",
      id: "Apa yang mudah Anda ingat?"
    },
    options: [
      {
        text: {
          ko: "숫자, 날짜, 통계",
          en: "Numbers, dates, statistics",
          ja: "数字、日付、統計",
          'zh-CN': "数字、日期、统计",
          'zh-TW': "數字、日期、統計",
          vi: "Số liệu, ngày tháng, thống kê",
          id: "Angka, tanggal, statistik"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "이름, 단어, 개념",
          en: "Names, words, concepts",
          ja: "名前、単語、概念",
          'zh-CN': "姓名、词汇、概念",
          'zh-TW': "姓名、詞彙、概念",
          vi: "Tên, từ ngữ, khái niệm",
          id: "Nama, kata, konsep"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "얼굴, 장소, 이미지",
          en: "Faces, places, images",
          ja: "顔、場所、イメージ",
          'zh-CN': "面孔、地点、图像",
          'zh-TW': "面孔、地點、圖像",
          vi: "Khuôn mặt, địa điểm, hình ảnh",
          id: "Wajah, tempat, gambar"
        },
        scores: { Type3: 8, Type4: 3, Type6: 2 }
      },
      {
        text: {
          ko: "감정, 분위기, 느낌",
          en: "Emotions, atmosphere, feelings",
          ja: "感情、雰囲気、感覚",
          'zh-CN': "情感、氛围、感觉",
          'zh-TW': "情感、氛圍、感覺",
          vi: "Cảm xúc, bầu không khí, cảm giác",
          id: "Emosi, suasana, perasaan"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "예술 작품을 볼 때?",
      en: "When viewing artwork?",
      ja: "芸術作品を見る時は？",
      'zh-CN': "看艺术作品时？",
      'zh-TW': "看藝術作品時？",
      vi: "Khi xem tác phẩm nghệ thuật?",
      id: "Saat melihat karya seni?"
    },
    options: [
      {
        text: {
          ko: "기법과 구조를 분석",
          en: "Analyze techniques and structure",
          ja: "技法と構造を分析",
          'zh-CN': "分析技巧和结构",
          'zh-TW': "分析技巧和結構",
          vi: "Phân tích kỹ thuật và cấu trúc",
          id: "Menganalisis teknik dan struktur"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "작가의 의도와 메시지 해석",
          en: "Interpret artist's intention and message",
          ja: "作家の意図とメッセージを解釈",
          'zh-CN': "解读艺术家的意图和讯息",
          'zh-TW': "解讀藝術家的意圖和訊息",
          vi: "Giải thích ý định và thông điệp của nghệ sĩ",
          id: "Menafsirkan niat dan pesan seniman"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "색감과 구도를 감상",
          en: "Appreciate colors and composition",
          ja: "色彩と構図を鑑賞",
          'zh-CN': "欣赏色彩和构图",
          'zh-TW': "欣賞色彩和構圖",
          vi: "Thưởng thức màu sắc và bố cục",
          id: "Menghargai warna dan komposisi"
        },
        scores: { Type3: 8, Type4: 3, Type6: 2 }
      },
      {
        text: {
          ko: "느낌과 감동을 받음",
          en: "Feel emotions and be moved",
          ja: "感覚と感動を受ける",
          'zh-CN': "感受情感和感动",
          'zh-TW': "感受情感和感動",
          vi: "Cảm nhận cảm xúc và bị lay động",
          id: "Merasakan emosi dan terharu"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "스트레스를 받을 때?",
      en: "When stressed?",
      ja: "ストレスを受けた時は？",
      'zh-CN': "承受压力时？",
      'zh-TW': "承受壓力時？",
      vi: "Khi bị căng thẳng?",
      id: "Saat stres?"
    },
    options: [
      {
        text: {
          ko: "원인을 논리적으로 분석",
          en: "Analyze the cause logically",
          ja: "原因を論理的に分析",
          'zh-CN': "逻辑地分析原因",
          'zh-TW': "邏輯地分析原因",
          vi: "Phân tích nguyên nhân một cách logic",
          id: "Menganalisis penyebab secara logis"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "글로 정리하거나 대화",
          en: "Organize in writing or talk",
          ja: "文字で整理するか対話",
          'zh-CN': "用文字整理或对话",
          'zh-TW': "用文字整理或對話",
          vi: "Sắp xếp bằng văn bản hoặc nói chuyện",
          id: "Mengorganisir secara tertulis atau berbicara"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "그림 그리기, 음악 듣기",
          en: "Drawing, listening to music",
          ja: "絵を描く、音楽を聴く",
          'zh-CN': "画画、听音乐",
          'zh-TW': "畫畫、聽音樂",
          vi: "Vẽ tranh, nghe nhạc",
          id: "Menggambar, mendengarkan musik"
        },
        scores: { Type4: 8, Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "운동하거나 몸을 움직임",
          en: "Exercise or move your body",
          ja: "運動するか体を動かす",
          'zh-CN': "运动或活动身体",
          'zh-TW': "運動或活動身體",
          vi: "Tập thể dục hoặc vận động cơ thể",
          id: "Berolahraga atau menggerakkan tubuh"
        },
        scores: { Type5: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신의 강점은?",
      en: "Your strength is:",
      ja: "あなたの強みは？",
      'zh-CN': "你的强项是：",
      'zh-TW': "你的強項是：",
      vi: "Điểm mạnh của bạn là:",
      id: "Kekuatan Anda adalah:"
    },
    options: [
      {
        text: {
          ko: "논리적 사고, 문제 해결",
          en: "Logical thinking, problem solving",
          ja: "論理的思考、問題解決",
          'zh-CN': "逻辑思维、问题解决",
          'zh-TW': "邏輯思維、問題解決",
          vi: "Tư duy logic, giải quyết vấn đề",
          id: "Berpikir logis, memecahkan masalah"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "언어 능력, 설명력",
          en: "Language ability, explanatory power",
          ja: "言語能力、説明力",
          'zh-CN': "语言能力、解释力",
          'zh-TW': "語言能力、解釋力",
          vi: "Khả năng ngôn ngữ, sức thuyết phục",
          id: "Kemampuan bahasa, kekuatan penjelasan"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "창의성, 예술적 감각",
          en: "Creativity, artistic sense",
          ja: "創造性、芸術的感覚",
          'zh-CN': "创造力、艺术感觉",
          'zh-TW': "創造力、藝術感覺",
          vi: "Sáng tạo, cảm giác nghệ thuật",
          id: "Kreativitas, rasa seni"
        },
        scores: { Type4: 8, Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "직관, 공간 지각",
          en: "Intuition, spatial perception",
          ja: "直感、空間知覚",
          'zh-CN': "直觉、空间感知",
          'zh-TW': "直覺、空間感知",
          vi: "Trực giác, nhận thức không gian",
          id: "Intuisi, persepsi spasial"
        },
        scores: { Type5: 3 }
      }
    ]
  }
];

export const brainResults: BrainResult[] = [
  {
    type: "Type1",
    emoji: "🧮",
    title: {
      ko: "극좌뇌형",
      en: "Extreme Left Brain",
      ja: "極左脳型",
      'zh-CN': "极度左脑型",
      'zh-TW': "極度左腦型",
      vi: "Não trái cực đoan",
      id: "Otak Kiri Ekstrem"
    },
    description: {
      ko: "논리와 분석의 화신! 철저한 이성주의자",
      en: "Incarnation of logic and analysis! Thorough rationalist",
      ja: "論理と分析の化身！徹底的な合理主義者",
      'zh-CN': "逻辑和分析的化身！彻底理性主义者",
      'zh-TW': "邏輯和分析的化身！徹底理性主義者",
      vi: "Hiện thân của logic và phân tích! Người duy lý triệt để",
      id: "Perwujudan logika dan analisis! Rasionalis yang teliti"
    },
    longDescription: {
      ko: "당신은 좌뇌가 극도로 발달한 전형적인 논리형 인간입니다. 숫자, 데이터, 논리적 분석에 탁월하며 체계적이고 계획적입니다. 감정보다는 이성으로 판단하고 순차적 사고가 뛰어납니다. 수학자, 과학자, 프로그래머, 회계사에게 이상적인 두뇌 구조입니다.",
      en: "You are a typical logical person with extremely developed left brain. You excel at numbers, data, and logical analysis, and are systematic and planned. You judge with reason rather than emotion and have excellent sequential thinking. This is an ideal brain structure for mathematicians, scientists, programmers, and accountants.",
      ja: "あなたは左脳が極度に発達した典型的な論理型人間です。数字、データ、論理的分析に優れ、体系的で計画性があります。感情よりも理性で判断し、順次思考が優れています。数学者、科学者、プログラマー、会計士に理想的な脳構造です。",
      'zh-CN': "你是左脑极度发达的典型逻辑型人类。在数字、数据、逻辑分析方面表现卓越，具有系统性和计划性。用理性而非情感判断，具有出色的顺序思维。这是数学家、科学家、程序员、会计师的理想大脑结构。",
      'zh-TW': "你是左腦極度發達的典型邏輯型人類。在數字、數據、邏輯分析方面表現卓越，具有系統性和計劃性。用理性而非情感判斷，具有出色的順序思維。這是數學家、科學家、程序員、會計師的理想大腦結構。",
      vi: "Bạn là kiểu người logic điển hình với não trái phát triển cực độ. Bạn xuất sắc về số liệu, dữ liệu, phân tích logic và có tính hệ thống, có kế hoạch. Bạn phán đoán bằng lý trí thay vì cảm xúc và có tư duy tuần tự xuất sắc. Đây là cấu trúc não lý tưởng cho các nhà toán học, khoa học, lập trình viên và kế toán.",
      id: "Bagaimana pun, ini adalah struktur otak ideal untuk matematikawan, ilmuwan, programmer, dan akuntan."
    },
    pros: [
      {
        ko: "논리력",
        en: "Logical thinking",
        ja: "論理力",
        'zh-CN': "逻辑力",
        'zh-TW': "邏輯力",
        vi: "Tư duy logic",
        id: "Berpikir logis"
      },
      {
        ko: "분석력",
        en: "Analytical ability",
        ja: "分析力",
        'zh-CN': "分析力",
        'zh-TW': "分析力",
        vi: "Khả năng phân tích",
        id: "Kemampuan analisis"
      },
      {
        ko: "수학적 재능",
        en: "Mathematical talent",
        ja: "数学的才能",
        'zh-CN': "数学天赋",
        'zh-TW': "數學天賦",
        vi: "Tài năng toán học",
        id: "Bakat matematika"
      },
      {
        ko: "체계성",
        en: "Systematic nature",
        ja: "体系性",
        'zh-CN': "系统性",
        'zh-TW': "系統性",
        vi: "Tính hệ thống",
        id: "Sifat sistematis"
      },
      {
        ko: "문제 해결",
        en: "Problem solving",
        ja: "問題解決",
        'zh-CN': "问题解决",
        'zh-TW': "問題解決",
        vi: "Giải quyết vấn đề",
        id: "Memecahkan masalah"
      }
    ],
    cons: [
      {
        ko: "감성 부족",
        en: "Lack of emotion",
        ja: "感情不足",
        'zh-CN': "缺乏情感",
        'zh-TW': "缺乏情感",
        vi: "Thiếu cảm xúc",
        id: "Kurang emosi"
      },
      {
        ko: "융통성 약함",
        en: "Weak flexibility",
        ja: "柔軟性が弱い",
        'zh-CN': "灵活性弱",
        'zh-TW': "靈活性弱",
        vi: "Tính linh hoạt yếu",
        id: "Fleksibilitas lemah"
      },
      {
        ko: "창의성 낮음",
        en: "Low creativity",
        ja: "創造性が低い",
        'zh-CN': "创造力低",
        'zh-TW': "創造力低",
        vi: "Sáng tạo thấp",
        id: "Kreativitas rendah"
      },
      {
        ko: "딱딱함",
        en: "Rigidity",
        ja: "硬直性",
        'zh-CN': "僵硬",
        'zh-TW': "僵硬",
        vi: "Cứng nhắc",
        id: "Kekakuan"
      }
    ],
    advice: {
      ko: "가끔은 우뇌도 사용해보세요! 예술 활동이 도움이 됩니다.",
      en: "Sometimes try using your right brain too! Artistic activities help.",
      ja: "時々右脳も使ってみてください！芸術活動が役立ちます。",
      'zh-CN': "有时也试试使用右脑！艺术活动有帮助。",
      'zh-TW': "有時也試試使用右腦！藝術活動有幫助。",
      vi: "Đôi khi hãy thử sử dụng não phải! Các hoạt động nghệ thuật giúp ích.",
      id: "Kadang-kadang coba gunakan otak kanan! Aktivitas seni membantu."
    },
    recommendedJobs: {
      ko: "엔지니어, 회계사, 분석가, 프로그래머, 과학자",
      en: "Engineer, Accountant, Analyst, Programmer, Scientist",
      ja: "エンジニア、会計士、アナリスト、プログラマー、科学者",
      'zh-CN': "工程师、会计师、分析师、程序员、科学家",
      'zh-TW': "工程師、會計師、分析師、程序員、科學家",
      vi: "Kỹ sư, Kế toán, Phân tích, Lập trình viên, Nhà khoa học",
      id: "Insinyur, Akuntan, Analis, Programmer, Ilmuwan"
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type5"],
      difficult: []
    }
  },
  {
    type: "Type2",
    emoji: "📊",
    title: {
      ko: "좌뇌 우세형",
      en: "Left Brain Dominant",
      ja: "左脳優位型",
      'zh-CN': "左脑优势型",
      'zh-TW': "左腦優勢型",
      vi: "Não trái chiếm ưu thế",
      id: "Otak Kiri Dominan"
    },
    description: {
      ko: "이성과 논리가 강한 실용주의자",
      en: "Practical person with strong reason and logic",
      ja: "理性と論理が強い実用主義者",
      'zh-CN': "理性和逻辑强的实用主义者",
      'zh-TW': "理性和邏輯強的實用主義者",
      vi: "Người thực dụng với lý trí và logic mạnh mẽ",
      id: "Orang praktis dengan alasan dan logika yang kuat"
    },
    longDescription: {
      ko: "좌뇌가 우세하지만 우뇌도 어느 정도 사용합니다. 논리적이고 분석적이지만 완전히 딱딱하지는 않습니다. 언어 능력이 뛰어나고 체계적으로 일을 처리하지만 창의성도 있습니다. 대부분의 전문직에 적합한 균형 잡힌 좌뇌형입니다.",
      en: "Your left brain is dominant but you also use your right brain to some extent. You are logical and analytical but not completely rigid. You have excellent language skills and handle work systematically, but you also have creativity. This is a balanced left-brain type suitable for most professions.",
      ja: "左脳が優位ですが、右脳も一定程度使用します。論理的で分析的ですが、完全に硬直的ではありません。言語能力に優れ、体系的に仕事を処理しますが、創造性もあります。ほとんどの専門職に適したバランスの取れた左脳型です。",
      'zh-CN': "左脑占优势，但也会一定程度使用右脑。逻辑性强，分析性强，但不是完全僵化。语言能力出色，系统性处理工作，但也有创造力。这是适合大多数专业工作的平衡左脑型。",
      'zh-TW': "左腦佔優勢，但也會一定程度使用右腦。邏輯性強，分析性強，但不是完全僵化。語言能力出色，系統性處理工作，但也有創造力。這是適合大多數專業工作的平衡左腦型。",
      vi: "Não trái chiếm ưu thế nhưng bạn cũng sử dụng não phải ở mức độ nào đó. Bạn logic và phân tích nhưng không hoàn toàn cứng nhắc. Bạn có kỹ năng ngôn ngữ xuất sắc và xử lý công việc có hệ thống, nhưng cũng có sáng tạo. Đây là kiểu não trái cân bằng phù hợp với hầu hết các nghề nghiệp.",
      id: "Otak kiri dominan tetapi Anda juga menggunakan otak kanan sampai batas tertentu. Anda logis dan analitis tetapi tidak sepenuhnya kaku. Anda memiliki keterampilan bahasa yang luar biasa dan menangani pekerjaan secara sistematis, tetapi juga memiliki kreativitas. Ini adalah tipe otak kiri yang seimbang cocok untuk sebagian besar profesi."
    },
    pros: [
      {
        ko: "논리력",
        en: "Logical thinking",
        ja: "論理力",
        'zh-CN': "逻辑力",
        'zh-TW': "邏輯力",
        vi: "Tư duy logic",
        id: "Berpikir logis"
      },
      {
        ko: "언어 능력",
        en: "Language ability",
        ja: "言語能力",
        'zh-CN': "语言能力",
        'zh-TW': "語言能力",
        vi: "Khả năng ngôn ngữ",
        id: "Kemampuan bahasa"
      },
      {
        ko: "체계성",
        en: "Systematic nature",
        ja: "体系性",
        'zh-CN': "系统性",
        'zh-TW': "系統性",
        vi: "Tính hệ thống",
        id: "Sifat sistematis"
      },
      {
        ko: "적절한 창의성",
        en: "Appropriate creativity",
        ja: "適切な創造性",
        'zh-CN': "适当的创造力",
        'zh-TW': "適當的創造力",
        vi: "Sáng tạo phù hợp",
        id: "Kreativitas yang tepat"
      }
    ],
    cons: [
      {
        ko: "때로 경직됨",
        en: "Sometimes rigid",
        ja: "時々硬直",
        'zh-CN': "有时僵硬",
        'zh-TW': "有時僵硬",
        vi: "Đôi khi cứng nhắc",
        id: "Kadang-kadang kaku"
      },
      {
        ko: "감성 표현 약함",
        en: "Weak emotional expression",
        ja: "感情表現が弱い",
        'zh-CN': "情感表达弱",
        'zh-TW': "情感表達弱",
        vi: "Biểu cảm cảm xúc yếu",
        id: "Ekspresi emosional lemah"
      }
    ],
    advice: {
      ko: "이미 좋은 균형입니다. 취미로 예술 활동을 해보세요!",
      en: "You already have a good balance. Try artistic activities as a hobby!",
      ja: "すでに良いバランスです。趣味で芸術活動をしてみてください！",
      'zh-CN': "已经有很好的平衡。试试把艺术活动当爱好！",
      'zh-TW': "已經有很好的平衡。試試把藝術活動當愛好！",
      vi: "Bạn đã có sự cân bằng tốt. Hãy thử các hoạt động nghệ thuật như sở thích!",
      id: "Anda sudah memiliki keseimbangan yang baik. Coba aktivitas seni sebagai hobi!"
    },
    recommendedJobs: {
      ko: "법조인, 경영자, 컨설턴트, 교사, 연구원",
      en: "Lawyer, Manager, Consultant, Teacher, Researcher",
      ja: "法律家、経営者、コンサルタント、教師、研究者",
      'zh-CN': "法律人士、经理、顾问、教师、研究员",
      'zh-TW': "法律人士、經理、顧問、教師、研究員",
      vi: "Luật sư, Quản lý, Tư vấn, Giáo viên, Nghiên cứu viên",
      id: "Pengacara, Manajer, Konsultan, Guru, Peneliti"
    },
    compatibility: {
      best: ["Type3"],
      good: ["Type1", "Type2"],
      careful: ["Type4"],
      difficult: []
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "완벽한 균형형",
      en: "Perfect Balance",
      ja: "完璧なバランス型",
      'zh-CN': "完美平衡型",
      'zh-TW': "完美平衡型",
      vi: "Cân bằng hoàn hảo",
      id: "Keseimbangan Sempurna"
    },
    description: {
      ko: "좌뇌와 우뇌의 조화! 이상적인 전뇌형",
      en: "Harmony of left and right brain! Ideal whole-brain type",
      ja: "左脳と右脳の調和！理想的な全脳型",
      'zh-CN': "左右脑的和谐！理想的全脑型",
      'zh-TW': "左右腦的和諧！理想的全腦型",
      vi: "Sự hài hòa của não trái và não phải! Kiểu toàn não lý tưởng",
      id: "Harmoni otak kiri dan kanan! Tipe otak utuh yang ideal"
    },
    longDescription: {
      ko: "좌뇌와 우뇌가 완벽하게 균형을 이룹니다. 논리적이면서도 창의적이고, 분석적이면서도 감성적입니다. 상황에 따라 필요한 뇌를 유연하게 사용할 수 있습니다. 가장 이상적인 두뇌 구조로, 다양한 분야에서 성공할 수 있습니다.",
      en: "Your left and right brain are in perfect balance. You are logical yet creative, analytical yet emotional. You can flexibly use the brain you need depending on the situation. This is the most ideal brain structure, and you can succeed in various fields.",
      ja: "左脳と右脳が完璧にバランスを取っています。論理的でありながら創造的で、分析的でありながら感情的です。状況に応じて必要な脳を柔軟に使用できます。最も理想的な脳構造で、様々な分野で成功できます。",
      'zh-CN': "左右脑完美平衡。既逻辑又创意，既分析又感性。可以根据情况灵活使用需要的大脑。这是最理想的大脑结构，可以在各个领域取得成功。",
      'zh-TW': "左右腦完美平衡。既邏輯又創意，既分析又感性。可以根據情況靈活使用需要的大腦。這是最理想的大腦結構，可以在各個領域取得成功。",
      vi: "Não trái và não phải của bạn cân bằng hoàn hảo. Bạn logic nhưng sáng tạo, phân tích nhưng cảm xúc. Bạn có thể linh hoạt sử dụng não cần thiết tùy theo tình huống. Đây là cấu trúc não lý tưởng nhất, và bạn có thể thành công trong nhiều lĩnh vực.",
      id: "Otak kiri dan kanan Anda seimbang sempurna. Anda logis namun kreatif, analitis namun emosional. Anda dapat secara fleksibel menggunakan otak yang diperlukan tergantung pada situasi. Ini adalah struktur otak yang paling ideal, dan Anda dapat berhasil di berbagai bidang."
    },
    pros: [
      {
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        'zh-CN': "灵活性",
        'zh-TW': "靈活性",
        vi: "Tính linh hoạt",
        id: "Fleksibilitas"
      },
      {
        ko: "다재다능",
        en: "Versatility",
        ja: "多才多能",
        'zh-CN': "多才多艺",
        'zh-TW': "多才多藝",
        vi: "Đa tài đa năng",
        id: "Serbaguna"
      },
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
        ko: "종합적 사고",
        en: "Comprehensive thinking",
        ja: "総合的思考",
        'zh-CN': "综合思维",
        'zh-TW': "綜合思維",
        vi: "Tư duy tổng hợp",
        id: "Berpikir komprehensif"
      }
    ],
    cons: [
      {
        ko: "때로 우유부단",
        en: "Sometimes indecisive",
        ja: "時々優柔不断",
        'zh-CN': "有时优柔寡断",
        'zh-TW': "有時優柔寡斷",
        vi: "Đôi khi do dự",
        id: "Kadang-kadang ragu-ragu"
      },
      {
        ko: "전문성 부족 가능",
        en: "Possible lack of expertise",
        ja: "専門性不足の可能性",
        'zh-CN': "可能缺乏专业性",
        'zh-TW': "可能缺乏專業性",
        vi: "Có thể thiếu chuyên môn",
        id: "Kemungkinan kurang keahlian"
      }
    ],
    advice: {
      ko: "당신의 균형이 최고의 무기입니다. 계속 유지하세요!",
      en: "Your balance is your best weapon. Keep it up!",
      ja: "あなたのバランスが最高の武器です。続けてください！",
      'zh-CN': "你的平衡是最好的武器。继续保持！",
      'zh-TW': "你的平衡是最好的武器。繼續保持！",
      vi: "Sự cân bằng của bạn là vũ khí tốt nhất. Hãy tiếp tục duy trì!",
      id: "Keseimbangan Anda adalah senjata terbaik. Terus pertahankan!"
    },
    recommendedJobs: {
      ko: "경영자, 기획자, 멀티플레이어, 종합 예술가",
      en: "Manager, Planner, Multiplayer, Comprehensive Artist",
      ja: "経営者、企画者、マルチプレイヤー、総合芸術家",
      'zh-CN': "经理、策划者、多面手、综合艺术家",
      'zh-TW': "經理、策劃者、多面手、綜合藝術家",
      vi: "Quản lý, Người lập kế hoạch, Đa năng, Nghệ sĩ tổng hợp",
      id: "Manajer, Perencana, Multiplayer, Seniman Komprehensif"
    },
    compatibility: {
      best: [],
      good: ["Type1", "Type2", "Type3", "Type4", "Type5", "Type6"],
      careful: [],
      difficult: []
    }
  },
  {
    type: "Type4",
    emoji: "🎨",
    title: {
      ko: "우뇌 우세형",
      en: "Right Brain Dominant",
      ja: "右脳優位型",
      'zh-CN': "右脑优势型",
      'zh-TW': "右腦優勢型",
      vi: "Não phải chiếm ưu thế",
      id: "Otak Kanan Dominan"
    },
    description: {
      ko: "창의성과 감성이 풍부한 예술가 기질",
      en: "Artistic temperament rich in creativity and emotion",
      ja: "創造性と感性が豊かな芸術家気質",
      'zh-CN': "富有创造力和感性的艺术家气质",
      'zh-TW': "富有創造力和感性的藝術家氣質",
      vi: "Tính cách nghệ sĩ giàu sáng tạo và cảm xúc",
      id: "Temperamen seniman kaya kreativitas dan emosi"
    },
    longDescription: {
      ko: "우뇌가 우세하지만 좌뇌도 사용합니다. 창의적이고 감성적이지만 논리도 이해합니다. 예술적 감각이 뛰어나고 직관적이지만 필요할 때는 체계적으로 일할 수 있습니다. 창의적 직업에 적합하면서도 현실적입니다.",
      en: "Your right brain is dominant but you also use your left brain. You are creative and emotional but also understand logic. You have excellent artistic sense and are intuitive, but you can work systematically when needed. You are suitable for creative professions while being realistic.",
      ja: "右脳が優位ですが、左脳も使用します。創造的で感情的ですが、論理も理解します。芸術的感覚に優れ、直感的ですが、必要な時は体系的に働けます。創造的な職業に適していると同時に現実的です。",
      'zh-CN': "右脑占优势，但也会使用左脑。既创意又感性，但也理解逻辑。艺术感觉出色，直觉性强，但必要时可以系统性地工作。适合创意职业，同时也现实。",
      'zh-TW': "右腦佔優勢，但也會使用左腦。既創意又感性，但也理解邏輯。藝術感覺出色，直覺性強，但必要時可以系統性地工作。適合創意職業，同時也現實。",
      vi: "Não phải chiếm ưu thế nhưng bạn cũng sử dụng não trái. Bạn sáng tạo và cảm xúc nhưng cũng hiểu logic. Bạn có cảm giác nghệ thuật xuất sắc và trực quan, nhưng có thể làm việc có hệ thống khi cần thiết. Bạn phù hợp với các nghề sáng tạo đồng thời thực tế.",
      id: "Otak kanan dominan tetapi Anda juga menggunakan otak kiri. Anda kreatif dan emosional tetapi juga memahami logika. Anda memiliki rasa seni yang luar biasa dan intuitif, tetapi Anda dapat bekerja secara sistematis ketika diperlukan. Anda cocok untuk profesi kreatif sambil tetap realistis."
    },
    pros: [
      {
        ko: "창의성",
        en: "Creativity",
        ja: "創造性",
        'zh-CN': "创造力",
        'zh-TW': "創造力",
        vi: "Sáng tạo",
        id: "Kreativitas"
      },
      {
        ko: "감수성",
        en: "Sensitivity",
        ja: "感受性",
        'zh-CN': "敏感性",
        'zh-TW': "敏感性",
        vi: "Tính nhạy cảm",
        id: "Kepekaan"
      },
      {
        ko: "직관력",
        en: "Intuition",
        ja: "直感力",
        'zh-CN': "直觉力",
        'zh-TW': "直覺力",
        vi: "Trực giác",
        id: "Intuisi"
      },
      {
        ko: "예술적 재능",
        en: "Artistic talent",
        ja: "芸術的才能",
        'zh-CN': "艺术天赋",
        'zh-TW': "藝術天賦",
        vi: "Tài năng nghệ thuật",
        id: "Bakat seni"
      }
    ],
    cons: [
      {
        ko: "논리력 약함",
        en: "Weak logical thinking",
        ja: "論理力が弱い",
        'zh-CN': "逻辑力弱",
        'zh-TW': "邏輯力弱",
        vi: "Tư duy logic yếu",
        id: "Berpikir logis lemah"
      },
      {
        ko: "계획성 부족",
        en: "Lack of planning",
        ja: "計画性不足",
        'zh-CN': "缺乏计划性",
        'zh-TW': "缺乏計劃性",
        vi: "Thiếu tính kế hoạch",
        id: "Kurang perencanaan"
      },
      {
        ko: "산만할 수 있음",
        en: "Can be distracted",
        ja: "散漫になりがち",
        'zh-CN': "容易分心",
        'zh-TW': "容易分心",
        vi: "Có thể bị phân tâm",
        id: "Bisa terganggu"
      }
    ],
    advice: {
      ko: "약간의 체계성을 더하면 완벽해집니다!",
      en: "Add a little systematicity and it will be perfect!",
      ja: "少し体系性を加えれば完璧になります！",
      'zh-CN': "加上一点系统性就完美了！",
      'zh-TW': "加上一點系統性就完美了！",
      vi: "Thêm một chút tính hệ thống sẽ hoàn hảo!",
      id: "Tambahkan sedikit sistematisitas dan akan sempurna!"
    },
    recommendedJobs: {
      ko: "디자이너, 마케터, 작가, 음악가, 기획자",
      en: "Designer, Marketer, Writer, Musician, Planner",
      ja: "デザイナー、マーケター、作家、音楽家、企画者",
      'zh-CN': "设计师、营销人员、作家、音乐家、策划者",
      'zh-TW': "設計師、營銷人員、作家、音樂家、策劃者",
      vi: "Nhà thiết kế, Tiếp thị, Nhà văn, Nhạc sĩ, Người lập kế hoạch",
      id: "Desainer, Pemasaran, Penulis, Musisi, Perencana"
    },
    compatibility: {
      best: ["Type3", "Type5"],
      good: ["Type4"],
      careful: ["Type1"],
      difficult: []
    }
  },
  {
    type: "Type5",
    emoji: "🎭",
    title: {
      ko: "극우뇌형",
      en: "Extreme Right Brain",
      ja: "極右脳型",
      'zh-CN': "极度右脑型",
      'zh-TW': "極度右腦型",
      vi: "Não phải cực đoan",
      id: "Otak Kanan Ekstrem"
    },
    description: {
      ko: "감성과 예술의 화신! 순수 예술가",
      en: "Incarnation of emotion and art! Pure artist",
      ja: "感性と芸術の化身！純粋な芸術家",
      'zh-CN': "情感和艺术的化身！纯艺术家",
      'zh-TW': "情感和藝術的化身！純藝術家",
      vi: "Hiện thân của cảm xúc và nghệ thuật! Nghệ sĩ thuần túy",
      id: "Perwujudan emosi dan seni! Seniman murni"
    },
    longDescription: {
      ko: "당신은 우뇌가 극도로 발달한 전형적인 예술가형입니다. 논리보다는 감성과 직관으로 세상을 이해합니다. 창의성과 상상력이 무궁무진하고 예술적 재능이 탁월합니다. 숫자와 논리는 어렵지만 감정과 이미지로 소통합니다.",
      en: "You are a typical artist type with extremely developed right brain. You understand the world through emotion and intuition rather than logic. You have infinite creativity and imagination and excellent artistic talent. Numbers and logic are difficult for you, but you communicate through emotions and images.",
      ja: "あなたは右脳が極度に発達した典型的な芸術家型です。論理よりも感性と直感で世界を理解します。創造性と想像力が無限で、芸術的才能が卓越しています。数字と論理は難しいですが、感情とイメージでコミュニケーションします。",
      'zh-CN': "你是右脑极度发达的典型艺术家型。通过情感和直觉而非逻辑来理解世界。创造力和想象力无穷无尽，艺术天赋卓越。数字和逻辑对你来说很困难，但你通过情感和图像进行交流。",
      'zh-TW': "你是右腦極度發達的典型藝術家型。通過情感和直覺而非邏輯來理解世界。創造力和想像力無窮無盡，藝術天賦卓越。數字和邏輯對你來說很困難，但你通過情感和圖像進行交流。",
      vi: "Bạn là kiểu nghệ sĩ điển hình với não phải phát triển cực độ. Bạn hiểu thế giới thông qua cảm xúc và trực giác thay vì logic. Bạn có sáng tạo và trí tưởng tượng vô hạn và tài năng nghệ thuật xuất sắc. Số liệu và logic khó khăn với bạn, nhưng bạn giao tiếp thông qua cảm xúc và hình ảnh.",
      id: "Bagaimana pun, angka dan logika sulit bagi Anda, tetapi Anda berkomunikasi melalui emosi dan gambar."
    },
    pros: [
      {
        ko: "극강 창의성",
        en: "Extreme creativity",
        ja: "極強創造性",
        'zh-CN': "极强创造力",
        'zh-TW': "極強創造力",
        vi: "Sáng tạo cực mạnh",
        id: "Kreativitas ekstrem"
      },
      {
        ko: "예술적 천재성",
        en: "Artistic genius",
        ja: "芸術的天才性",
        'zh-CN': "艺术天才",
        'zh-TW': "藝術天才",
        vi: "Thiên tài nghệ thuật",
        id: "Genius seni"
      },
      {
        ko: "풍부한 감성",
        en: "Rich emotion",
        ja: "豊かな感性",
        'zh-CN': "丰富情感",
        'zh-TW': "豐富情感",
        vi: "Cảm xúc phong phú",
        id: "Emosi yang kaya"
      },
      {
        ko: "독창성",
        en: "Originality",
        ja: "独創性",
        'zh-CN': "独创性",
        'zh-TW': "獨創性",
        vi: "Tính độc đáo",
        id: "Orisinalitas"
      }
    ],
    cons: [
      {
        ko: "논리력 부족",
        en: "Lack of logical thinking",
        ja: "論理力不足",
        'zh-CN': "缺乏逻辑力",
        'zh-TW': "缺乏邏輯力",
        vi: "Thiếu tư duy logic",
        id: "Kurang berpikir logis"
      },
      {
        ko: "체계성 없음",
        en: "No systematicity",
        ja: "体系性なし",
        'zh-CN': "缺乏系统性",
        'zh-TW': "缺乏系統性",
        vi: "Không có tính hệ thống",
        id: "Tidak ada sistematisitas"
      },
      {
        ko: "현실 감각 약함",
        en: "Weak sense of reality",
        ja: "現実感覚が弱い",
        'zh-CN': "现实感弱",
        'zh-TW': "現實感弱",
        vi: "Cảm giác thực tế yếu",
        id: "Rasa realitas lemah"
      }
    ],
    advice: {
      ko: "현실적인 파트너나 매니저가 필요합니다!",
      en: "You need a realistic partner or manager!",
      ja: "現実的なパートナーやマネージャーが必要です！",
      'zh-CN': "你需要现实的伙伴或经理！",
      'zh-TW': "你需要現實的夥伴或經理！",
      vi: "Bạn cần một đối tác hoặc người quản lý thực tế!",
      id: "Anda membutuhkan pasangan atau manajer yang realistis!"
    },
    recommendedJobs: {
      ko: "예술가, 작가, 배우, 음악가, 디자이너",
      en: "Artist, Writer, Actor, Musician, Designer",
      ja: "芸術家、作家、俳優、音楽家、デザイナー",
      'zh-CN': "艺术家、作家、演员、音乐家、设计师",
      'zh-TW': "藝術家、作家、演員、音樂家、設計師",
      vi: "Nghệ sĩ, Nhà văn, Diễn viên, Nhạc sĩ, Nhà thiết kế",
      id: "Seniman, Penulis, Aktor, Musisi, Desainer"
    },
    compatibility: {
      best: ["Type4"],
      good: ["Type3"],
      careful: ["Type1"],
      difficult: []
    }
  },
  {
    type: "Type6",
    emoji: "🔄",
    title: {
      ko: "상황 전환형",
      en: "Situational Switch",
      ja: "状況転換型",
      'zh-CN': "情境转换型",
      'zh-TW': "情境轉換型",
      vi: "Chuyển đổi tình huống",
      id: "Peralihan Situasional"
    },
    description: {
      ko: "필요에 따라 좌우뇌를 자유자재로! 카멜레온 브레인",
      en: "Freely switch between left and right brain as needed! Chameleon brain",
      ja: "必要に応じて左右脳を自由自在に！カメレオンブレイン",
      'zh-CN': "根据需要自由切换左右脑！变色龙大脑",
      'zh-TW': "根據需要自由切換左右腦！變色龍大腦",
      vi: "Tự do chuyển đổi giữa não trái và não phải khi cần! Não tắc kè",
      id: "Beralih bebas antara otak kiri dan kanan sesuai kebutuhan! Otak bunglon"
    },
    longDescription: {
      ko: "좌뇌와 우뇌를 상황에 따라 전환하며 사용합니다. 일할 때는 논리적이고 분석적이지만, 취미나 예술 활동에서는 창의적이고 감성적입니다. 유연하게 사고방식을 바꿀 수 있는 적응형 두뇌입니다.",
      en: "You switch and use your left and right brain depending on the situation. You are logical and analytical when working, but creative and emotional in hobbies or artistic activities. This is an adaptive brain that can flexibly change thinking patterns.",
      ja: "状況に応じて左右脳を切り替えて使用します。仕事の時は論理的で分析的ですが、趣味や芸術活動では創造的で感情的です。柔軟に思考パターンを変えることができる適応型脳です。",
      'zh-CN': "根据情况切换使用左右脑。工作时逻辑性强，分析性强，但在爱好或艺术活动中却创意十足，感性十足。这是可以灵活改变思维模式的适应型大脑。",
      'zh-TW': "根據情況切換使用左右腦。工作時邏輯性強，分析性強，但在愛好或藝術活動中卻創意十足，感性十足。這是可以靈活改變思維模式的適應型大腦。",
      vi: "Bạn chuyển đổi và sử dụng não trái và não phải tùy theo tình huống. Bạn logic và phân tích khi làm việc, nhưng sáng tạo và cảm xúc trong sở thích hoặc hoạt động nghệ thuật. Đây là bộ não thích ứng có thể linh hoạt thay đổi các mô hình suy nghĩ.",
      id: "Anda beralih dan menggunakan otak kiri dan kanan tergantung pada situasi. Anda logis dan analitis saat bekerja, tetapi kreatif dan emosional dalam hobi atau aktivitas seni. Ini adalah otak adaptif yang dapat secara fleksibel mengubah pola berpikir."
    },
    pros: [
      {
        ko: "최고의 유연성",
        en: "Maximum flexibility",
        ja: "最高の柔軟性",
        'zh-CN': "最大灵活性",
        'zh-TW': "最大靈活性",
        vi: "Tính linh hoạt tối đa",
        id: "Fleksibilitas maksimal"
      },
      {
        ko: "적응력",
        en: "Adaptability",
        ja: "適応力",
        'zh-CN': "适应力",
        'zh-TW': "適應力",
        vi: "Khả năng thích ứng",
        id: "Kemampuan adaptasi"
      },
      {
        ko: "상황 판단력",
        en: "Situational judgment",
        ja: "状況判断力",
        'zh-CN': "情境判断力",
        'zh-TW': "情境判斷力",
        vi: "Khả năng phán đoán tình huống",
        id: "Penilaian situasional"
      },
      {
        ko: "전환 능력",
        en: "Switching ability",
        ja: "転換能力",
        'zh-CN': "转换能力",
        'zh-TW': "轉換能力",
        vi: "Khả năng chuyển đổi",
        id: "Kemampuan beralih"
      }
    ],
    cons: [
      {
        ko: "정체성 혼란 가능",
        en: "Possible identity confusion",
        ja: "アイデンティティ混乱の可能性",
        'zh-CN': "可能身份混乱",
        'zh-TW': "可能身份混亂",
        vi: "Có thể nhầm lẫn về bản sắc",
        id: "Kemungkinan kebingungan identitas"
      },
      {
        ko: "일관성 부족",
        en: "Lack of consistency",
        ja: "一貫性不足",
        'zh-CN': "缺乏一致性",
        'zh-TW': "缺乏一致性",
        vi: "Thiếu tính nhất quán",
        id: "Kurang konsistensi"
      }
    ],
    advice: {
      ko: "당신의 유연성이 강점입니다. 다양한 경험을 쌓으세요!",
      en: "Your flexibility is your strength. Accumulate diverse experiences!",
      ja: "あなたの柔軟性が強みです。多様な経験を積んでください！",
      'zh-CN': "你的灵活性是你的强项。积累多样化的经验！",
      'zh-TW': "你的靈活性是你的強項。積累多樣化的經驗！",
      vi: "Tính linh hoạt của bạn là điểm mạnh. Hãy tích lũy nhiều trải nghiệm đa dạng!",
      id: "Fleksibilitas Anda adalah kekuatan Anda. Kumpulkan pengalaman yang beragam!"
    },
    recommendedJobs: {
      ko: "멀티플레이어, 프리랜서, 컨설턴트",
      en: "Multiplayer, Freelancer, Consultant",
      ja: "マルチプレイヤー、フリーランサー、コンサルタント",
      'zh-CN': "多面手、自由职业者、顾问",
      'zh-TW': "多面手、自由職業者、顧問",
      vi: "Đa năng, Freelancer, Tư vấn",
      id: "Multiplayer, Freelancer, Konsultan"
    },
    compatibility: {
      best: ["Type3"],
      good: ["Type4", "Type6"],
      careful: ["Type1", "Type5"],
      difficult: []
    }
  }
];

export function calculateBrainResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  // 새로운 답변 형식 (questionId 포함)과 기존 형식 모두 지원
  answers.forEach(answer => {
    if (answer.questionId && answer.scores) {
      // 새로운 형식: { questionId: number, scores: any }
      Object.keys(answer.scores).forEach(type => {
        if (scores[type as keyof typeof scores] !== undefined) {
          scores[type as keyof typeof scores] += answer.scores[type];
        }
      });
    } else {
      // 기존 형식: { Type1: number, Type2: number, ... }
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
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (원래 질문 ID 10, 11, 12 확인)
  if (resultType && answers.length >= 10) {
    const q10to12Answers = answers.filter(answer => {
      if (answer.questionId) {
        return answer.questionId >= 10 && answer.questionId <= 12;
      }
      return false;
    });
    
    if (q10to12Answers.length > 0) {
      const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
      
      q10to12Answers.forEach(answer => {
        if (answer.scores) {
          Object.keys(answer.scores).forEach(type => {
            if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
              lastThreeScores[type as keyof typeof lastThreeScores] += answer.scores[type];
            }
          });
        }
      });
      
      const maxLastScore = Math.max(...Object.values(lastThreeScores));
      const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
      
      return lastResultType || resultType;
    }
  }
  
  return resultType || "Type1";
}
