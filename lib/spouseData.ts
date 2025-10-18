export interface SpouseQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface SpouseResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>;
  idealJob: Record<string, string>;
  marriageLife: Record<string, string>;
  caution: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const spouseQuestions: SpouseQuestion[] = [
  {
    id: 1,
    question: {
      ko: "결혼 생활에서 가장 중요하게 생각하는 것은?",
      en: "What do you consider most important in married life?",
      ja: "結婚生活で最も重要だと思うことは？",
      "zh-CN": "你认为婚姻生活中最重要的是什么？",
      "zh-TW": "你認為婚姻生活中最重要的是什麼？",
      id: "Apa yang Anda anggap paling penting dalam kehidupan pernikahan?",
      vi: "Bạn coi điều gì là quan trọng nhất trong cuộc sống hôn nhân?"
    },
    options: [
      {
        text: {
          ko: "경제적 안정과 미래 계획",
          en: "Economic stability and future planning",
          ja: "経済的安定と将来計画",
          "zh-CN": "经济稳定和未来规划",
          "zh-TW": "經濟穩定和未來規劃",
          id: "Stabilitas ekonomi dan perencanaan masa depan",
          vi: "Ổn định kinh tế và kế hoạch tương lai"
        },
        scores: { Type1: 6, Type5: 1 }
      },
      {
        text: {
          ko: "서로에 대한 열정과 설렘",
          en: "Passion and excitement for each other",
          ja: "お互いへの情熱とドキドキ感",
          "zh-CN": "彼此的激情和心动",
          "zh-TW": "彼此的激情和心動",
          id: "Gairah dan kegembiraan satu sama lain",
          vi: "Đam mê và hồi hộp với nhau"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "깊은 대화와 정신적 교감",
          en: "Deep conversation and spiritual connection",
          ja: "深い対話と精神的な交流",
          "zh-CN": "深度对话和精神交流",
          "zh-TW": "深度對話和精神交流",
          id: "Percakapan mendalam dan koneksi spiritual",
          vi: "Trò chuyện sâu sắc và kết nối tinh thần"
        },
        scores: { Type3: 5 }
      },
      {
        text: {
          ko: "각자의 독립성과 자유로움",
          en: "Each other's independence and freedom",
          ja: "お互いの独立性と自由",
          "zh-CN": "彼此的独立性和自由",
          "zh-TW": "彼此的獨立性和自由",
          id: "Kemandirian dan kebebasan masing-masing",
          vi: "Tính độc lập và tự do của nhau"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "이상적인 주말 오후는?",
      en: "What is your ideal weekend afternoon?",
      ja: "理想的な週末の午後は？",
      "zh-CN": "你理想的周末下午是什么？",
      "zh-TW": "你理想的週末下午是什麼？",
      id: "Apa sore hari Sabtu ideal Anda?",
      vi: "Chiều cuối tuần lý tưởng của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "집에서 편하게 쉬거나 집안일",
          en: "Relaxing at home or doing housework",
          ja: "家でゆっくり休むか家事をする",
          "zh-CN": "在家放松或做家务",
          "zh-TW": "在家放鬆或做家務",
          id: "Bersantai di rumah atau melakukan pekerjaan rumah",
          vi: "Thư giãn ở nhà hoặc làm việc nhà"
        },
        scores: { Type5: 10, Type1: 1 }
      },
      {
        text: {
          ko: "새로운 곳으로 여행이나 액티비티",
          en: "Traveling to new places or activities",
          ja: "新しい場所への旅行やアクティビティ",
          "zh-CN": "去新地方旅行或活动",
          "zh-TW": "去新地方旅行或活動",
          id: "Bepergian ke tempat baru atau aktivitas",
          vi: "Du lịch đến những nơi mới hoặc hoạt động"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "책 읽거나 전시회, 영화 관람",
          en: "Reading books, visiting exhibitions, or watching movies",
          ja: "本を読むか展覧会、映画鑑賞",
          "zh-CN": "读书、看展览或看电影",
          "zh-TW": "讀書、看展覽或看電影",
          id: "Membaca buku, mengunjungi pameran, atau menonton film",
          vi: "Đọc sách, tham quan triển lãm hoặc xem phim"
        },
        scores: { Type3: 5 }
      },
      {
        text: {
          ko: "각자 취미 생활 후 저녁에 만남",
          en: "Each pursuing hobbies then meeting in the evening",
          ja: "それぞれ趣味を楽しんで夕方に会う",
          "zh-CN": "各自爱好生活后晚上见面",
          "zh-TW": "各自愛好生活後晚上見面",
          id: "Masing-masing mengejar hobi lalu bertemu di malam hari",
          vi: "Mỗi người theo đuổi sở thích rồi gặp nhau vào buổi tối"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "배우자가 직장 문제로 힘들어할 때 당신의 반응은?",
      en: "When your spouse is struggling with work problems, your reaction is?",
      ja: "配偶者が職場の問題で苦労している時、あなたの反応は？",
      "zh-CN": "当配偶因工作问题而困扰时，你的反应是？",
      "zh-TW": "當配偶因工作問題而困擾時，你的反應是？",
      id: "Ketika pasangan Anda kesulitan dengan masalah pekerjaan, reaksi Anda adalah?",
      vi: "Khi người bạn đời gặp khó khăn với vấn đề công việc, phản ứng của bạn là?"
    },
    options: [
      {
        text: {
          ko: "현실적인 해결책과 조언 제시",
          en: "Present realistic solutions and advice",
          ja: "現実的な解決策とアドバイスを提示",
          "zh-CN": "提供现实的解决方案和建议",
          "zh-TW": "提供現實的解決方案和建議",
          id: "Memberikan solusi realistis dan saran",
          vi: "Đưa ra giải pháp thực tế và lời khuyên"
        },
        scores: { Type1: 6, Type6: 4 }
      },
      {
        text: {
          ko: "\"당장 그만둬도 내가 있잖아\" 지지",
          en: "\"You can quit right now, I'm here for you\" support",
          ja: "「今すぐ辞めても私がいるから」と支持",
          "zh-CN": "\"现在就可以辞职，有我在\"支持",
          "zh-TW": "「現在就可以辭職，有我在」支持",
          id: "\"Kamu bisa berhenti sekarang, aku ada di sini\" dukungan",
          vi: "\"Bạn có thể nghỉ việc ngay bây giờ, tôi ở đây\" ủng hộ"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "깊이 있게 대화하며 함께 고민",
          en: "Have deep conversations and worry together",
          ja: "深く話し合い、一緒に悩む",
          "zh-CN": "深入对话并一起思考",
          "zh-TW": "深入對話並一起思考",
          id: "Berbicara mendalam dan khawatir bersama",
          vi: "Trò chuyện sâu sắc và cùng lo lắng"
        },
        scores: { Type3: 5 }
      },
      {
        text: {
          ko: "\"네가 결정할 문제야\" 존중과 믿음",
          en: "\"It's your decision\" respect and trust",
          ja: "「あなたが決める問題だ」尊重と信頼",
          "zh-CN": "\"这是你的决定\"尊重和信任",
          "zh-TW": "「這是你的決定」尊重和信任",
          id: "\"Ini masalah yang kamu putuskan\" menghormati dan percaya",
          vi: "\"Đây là vấn đề bạn quyết định\" tôn trọng và tin tưởng"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "결혼 후 자녀 계획에 대한 생각은?",
      en: "What do you think about having children after marriage?",
      ja: "結婚後の子供計画についてどう思いますか？",
      "zh-CN": "你对婚后生育计划有什么想法？",
      "zh-TW": "你對婚後生育計劃有什麼想法？",
      id: "Apa pendapat Anda tentang rencana memiliki anak setelah menikah?",
      vi: "Bạn nghĩ gì về kế hoạch có con sau khi kết hôn?"
    },
    options: [
      {
        text: {
          ko: "계획적으로 준비해서 책임감 있게",
          en: "Prepare systematically and responsibly",
          ja: "計画的に準備して責任感を持って",
          "zh-CN": "有计划地准备并负责任",
          "zh-TW": "有計劃地準備並負責任",
          id: "Bersiap secara sistematis dan bertanggung jawab",
          vi: "Chuẩn bị có hệ thống và có trách nhiệm"
        },
        scores: { Type1: 6, Type5: 5 }
      },
      {
        text: {
          ko: "생기면 키우고 없어도 괜찮아",
          en: "If we have children, we'll raise them; if not, that's fine too",
          ja: "生まれれば育てるし、なくても大丈夫",
          "zh-CN": "有了就养，没有也没关系",
          "zh-TW": "有了就養，沒有也沒關係",
          id: "Jika ada anak, kita akan membesarkannya; jika tidak, tidak apa-apa",
          vi: "Nếu có con thì nuôi, không có cũng không sao"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "교육과 양육에 대해 깊이 고민 필요",
          en: "Need to deeply consider education and parenting",
          ja: "教育と育児について深く考える必要がある",
          "zh-CN": "需要深入思考教育和育儿",
          "zh-TW": "需要深入思考教育和育兒",
          id: "Perlu mempertimbangkan pendidikan dan pengasuhan secara mendalam",
          vi: "Cần suy nghĩ sâu sắc về giáo dục và nuôi dạy con"
        },
        scores: { Type3: 5 }
      },
      {
        text: {
          ko: "서로 합의하에 유연하게 결정",
          en: "Decide flexibly through mutual agreement",
          ja: "お互いの合意の下で柔軟に決定",
          "zh-CN": "通过相互协商灵活决定",
          "zh-TW": "通過相互協商靈活決定",
          id: "Memutuskan secara fleksibel melalui kesepakatan bersama",
          vi: "Quyết định linh hoạt thông qua thỏa thuận chung"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "배우자의 이상적인 성격은?",
      en: "What is your spouse's ideal personality?",
      ja: "配偶者の理想的な性格は？",
      "zh-CN": "配偶的理想性格是什么？",
      "zh-TW": "配偶的理想性格是什麼？",
      id: "Apa kepribadian ideal pasangan Anda?",
      vi: "Tính cách lý tưởng của người bạn đời là gì?"
    },
    options: [
      {
        text: {
          ko: "성실하고 책임감 있는",
          en: "Sincere and responsible",
          ja: "誠実で責任感のある",
          "zh-CN": "诚实有责任感",
          "zh-TW": "誠實有責任感",
          id: "Jujur dan bertanggung jawab",
          vi: "Chân thành và có trách nhiệm"
        },
        scores: { Type1: 6 }
      },
      {
        text: {
          ko: "열정적이고 긍정적인",
          en: "Passionate and positive",
          ja: "情熱的でポジティブな",
          "zh-CN": "热情积极",
          "zh-TW": "熱情積極",
          id: "Bersemangat dan positif",
          vi: "Đam mê và tích cực"
        },
        scores: { Type2: 4, Type6: 1 }
      },
      {
        text: {
          ko: "지적이고 사려 깊은",
          en: "Intellectual and thoughtful",
          ja: "知的で思慮深い",
          "zh-CN": "智慧深思",
          "zh-TW": "智慧深思",
          id: "Intelektual dan bijaksana",
          vi: "Trí tuệ và sâu sắc"
        },
        scores: { Type3: 5 }
      },
      {
        text: {
          ko: "독립적이고 존중하는",
          en: "Independent and respectful",
          ja: "独立していて尊重する",
          "zh-CN": "独立尊重",
          "zh-TW": "獨立尊重",
          id: "Mandiri dan menghormati",
          vi: "Độc lập và tôn trọng"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "결혼 후 거주지 선택 기준은?",
      en: "What are your criteria for choosing a place to live after marriage?",
      ja: "結婚後の居住地選択基準は？",
      "zh-CN": "婚后居住地选择标准是什么？",
      "zh-TW": "婚後居住地選擇標準是什麼？",
      id: "Apa kriteria Anda untuk memilih tempat tinggal setelah menikah?",
      vi: "Tiêu chí lựa chọn nơi ở sau khi kết hôn là gì?"
    },
    options: [
      {
        text: {
          ko: "직장 접근성과 생활 편의성",
          en: "Work accessibility and living convenience",
          ja: "職場へのアクセスと生活の利便性",
          "zh-CN": "工作便利性和生活便利性",
          "zh-TW": "工作便利性和生活便利性",
          id: "Aksesibilitas tempat kerja dan kenyamanan hidup",
          vi: "Khả năng tiếp cận nơi làm việc và tiện nghi cuộc sống"
        },
        scores: { Type1: 6 }
      },
      {
        text: {
          ko: "새로운 경험 가능한 곳",
          en: "A place where new experiences are possible",
          ja: "新しい経験ができる場所",
          "zh-CN": "可以体验新经历的地方",
          "zh-TW": "可以體驗新經歷的地方",
          id: "Tempat di mana pengalaman baru dimungkinkan",
          vi: "Nơi có thể trải nghiệm những điều mới"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "문화 시설과 교육 환경",
          en: "Cultural facilities and educational environment",
          ja: "文化施設と教育環境",
          "zh-CN": "文化设施和教育环境",
          "zh-TW": "文化設施和教育環境",
          id: "Fasilitas budaya dan lingkungan pendidikan",
          vi: "Cơ sở văn hóa và môi trường giáo dục"
        },
        scores: { Type3: 5, Type5: 1 }
      },
      {
        text: {
          ko: "서로의 생활권 존중하는 위치",
          en: "A location that respects each other's living areas",
          ja: "お互いの生活圏を尊重する位置",
          "zh-CN": "尊重彼此生活圈的位置",
          "zh-TW": "尊重彼此生活圈的位置",
          id: "Lokasi yang menghormati area hidup masing-masing",
          vi: "Vị trí tôn trọng khu vực sống của nhau"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "명절이나 가족 행사에 대한 생각은?",
      en: "What do you think about holidays and family events?",
      ja: "祝日や家族行事についてどう思いますか？",
      "zh-CN": "你对节假日和家庭活动有什么想法？",
      "zh-TW": "你對節假日和家庭活動有什麼想法？",
      id: "Apa pendapat Anda tentang hari libur dan acara keluarga?",
      vi: "Bạn nghĩ gì về ngày lễ và sự kiện gia đình?"
    },
    options: [
      {
        text: {
          ko: "양가 균형 맞춰 규칙적으로",
          en: "Regularly balancing both families",
          ja: "両家のバランスを取って規則的に",
          "zh-CN": "平衡双方家庭，规律进行",
          "zh-TW": "平衡雙方家庭，規律進行",
          id: "Secara teratur menyeimbangkan kedua keluarga",
          vi: "Cân bằng hai bên gia đình một cách đều đặn"
        },
        scores: { Type5: 10 }
      },
      {
        text: {
          ko: "분위기 보며 유연하게",
          en: "Flexibly according to the atmosphere",
          ja: "雰囲気を見て柔軟に",
          "zh-CN": "根据氛围灵活处理",
          "zh-TW": "根據氛圍靈活處理",
          id: "Fleksibel sesuai suasana",
          vi: "Linh hoạt theo không khí"
        },
        scores: { Type2: 4, Type6: 1 }
      },
      {
        text: {
          ko: "대화로 서로 이해하며 조율",
          en: "Coordinate through dialogue and mutual understanding",
          ja: "対話でお互いを理解しながら調整",
          "zh-CN": "通过对话相互理解并协调",
          "zh-TW": "通過對話相互理解並協調",
          id: "Koordinasi melalui dialog dan saling memahami",
          vi: "Phối hợp thông qua đối thoại và hiểu nhau"
        },
        scores: { Type3: 5 }
      },
      {
        text: {
          ko: "각자 선택권 존중",
          en: "Respect each other's right to choose",
          ja: "お互いの選択権を尊重",
          "zh-CN": "尊重彼此的选择权",
          "zh-TW": "尊重彼此的選擇權",
          id: "Menghormati hak pilih masing-masing",
          vi: "Tôn trọng quyền lựa chọn của nhau"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "부부 갈등 해결 방식으로 선호하는 것은?",
      en: "What do you prefer as a way to resolve marital conflicts?",
      ja: "夫婦の葛藤解決方法として好むのは？",
      "zh-CN": "你偏好的夫妻冲突解决方式是什么？",
      "zh-TW": "你偏好的夫妻衝突解決方式是什麼？",
      id: "Apa yang Anda sukai sebagai cara menyelesaikan konflik pernikahan?",
      vi: "Bạn thích cách nào để giải quyết xung đột vợ chồng?"
    },
    options: [
      {
        text: {
          ko: "논리적으로 원인 분석 후 해결",
          en: "Analyze the cause logically and then solve it",
          ja: "論理的に原因分析してから解決",
          "zh-CN": "逻辑分析原因后解决",
          "zh-TW": "邏輯分析原因後解決",
          id: "Analisis penyebab secara logis lalu selesaikan",
          vi: "Phân tích nguyên nhân một cách logic rồi giải quyết"
        },
        scores: { Type1: 6, Type6: 4 }
      },
      {
        text: {
          ko: "빠르게 풀고 다시 사랑하기",
          en: "Resolve quickly and love again",
          ja: "早く解決してまた愛し合う",
          "zh-CN": "快速解决并重新相爱",
          "zh-TW": "快速解決並重新相愛",
          id: "Selesaikan dengan cepat dan cinta lagi",
          vi: "Giải quyết nhanh chóng và yêu lại"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "시간 두고 깊이 대화하기",
          en: "Take time and have deep conversations",
          ja: "時間をかけて深く話し合う",
          "zh-CN": "花时间深度对话",
          "zh-TW": "花時間深度對話",
          id: "Luangkan waktu dan berbicara mendalam",
          vi: "Dành thời gian và trò chuyện sâu sắc"
        },
        scores: { Type3: 5 }
      },
      {
        text: {
          ko: "서로 공간 주며 자연스럽게",
          en: "Give each other space and let it happen naturally",
          ja: "お互いにスペースを与えて自然に",
          "zh-CN": "给彼此空间，自然发展",
          "zh-TW": "給彼此空間，自然發展",
          id: "Berikan ruang satu sama lain dan biarkan alami",
          vi: "Cho nhau không gian và để tự nhiên"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "결혼 후 경제 관리는?",
      en: "How do you manage finances after marriage?",
      ja: "結婚後の経済管理は？",
      "zh-CN": "婚后的经济管理如何？",
      "zh-TW": "婚後的經濟管理如何？",
      id: "Bagaimana Anda mengelola keuangan setelah menikah?",
      vi: "Quản lý tài chính sau khi kết hôn như thế nào?"
    },
    options: [
      {
        text: {
          ko: "공동 계좌로 투명하게 관리",
          en: "Manage transparently with joint account",
          ja: "共同口座で透明に管理",
          "zh-CN": "用共同账户透明管理",
          "zh-TW": "用共同賬戶透明管理",
          id: "Kelola secara transparan dengan rekening bersama",
          vi: "Quản lý minh bạch với tài khoản chung"
        },
        scores: { Type1: 6, Type5: 1 }
      },
      {
        text: {
          ko: "필요할 때 자유롭게 쓰기",
          en: "Spend freely when needed",
          ja: "必要な時に自由に使う",
          "zh-CN": "需要时自由使用",
          "zh-TW": "需要時自由使用",
          id: "Gunakan dengan bebas saat diperlukan",
          vi: "Sử dụng tự do khi cần thiết"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "합리적으로 계획하며 논의",
          en: "Plan rationally and discuss",
          ja: "合理的に計画して議論",
          "zh-CN": "合理规划并讨论",
          "zh-TW": "合理規劃並討論",
          id: "Rencanakan secara rasional dan diskusikan",
          vi: "Lập kế hoạch hợp lý và thảo luận"
        },
        scores: { Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "각자 관리하고 필요시 분담",
          en: "Manage separately and share when needed",
          ja: "それぞれ管理し必要時に分担",
          "zh-CN": "各自管理，需要时分担",
          "zh-TW": "各自管理，需要時分擔",
          id: "Kelola terpisah dan bagi saat diperlukan",
          vi: "Quản lý riêng và chia sẻ khi cần"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "배우자와 함께 성장한다는 의미는?",
      en: "What does it mean to grow together with your spouse?",
      ja: "配偶者と一緒に成長するという意味は？",
      "zh-CN": "与配偶一起成长意味着什么？",
      "zh-TW": "與配偶一起成長意味著什麼？",
      id: "Apa artinya tumbuh bersama dengan pasangan Anda?",
      vi: "Cùng phát triển với người bạn đời có nghĩa là gì?"
    },
    options: [
      {
        text: {
          ko: "함께 재산을 모으고 미래 준비",
          en: "Build wealth together and prepare for the future",
          ja: "一緒に財産を築き未来を準備",
          "zh-CN": "共同积累财富并为未来做准备",
          "zh-TW": "共同積累財富並為未來做準備",
          id: "Bangun kekayaan bersama dan persiapkan masa depan",
          vi: "Cùng xây dựng tài sản và chuẩn bị cho tương lai"
        },
        scores: { Type1: 6 }
      },
      {
        text: {
          ko: "다양한 경험과 추억 쌓기",
          en: "Build various experiences and memories",
          ja: "様々な経験と思い出を積み重ねる",
          "zh-CN": "积累各种经验和回忆",
          "zh-TW": "積累各種經驗和回憶",
          id: "Bangun berbagai pengalaman dan kenangan",
          vi: "Xây dựng các trải nghiệm và kỷ niệm đa dạng"
        },
        scores: { Type2: 4, Type6: 1 }
      },
      {
        text: {
          ko: "서로 지적으로 자극하며 발전",
          en: "Stimulate each other intellectually and develop",
          ja: "お互いに知的に刺激し合い発展",
          "zh-CN": "相互智力刺激并发展",
          "zh-TW": "相互智力刺激並發展",
          id: "Saling merangsang secara intelektual dan berkembang",
          vi: "Kích thích lẫn nhau về mặt trí tuệ và phát triển"
        },
        scores: { Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "각자 발전하며 존중하기",
          en: "Develop individually while respecting each other",
          ja: "それぞれ発展しながら尊重し合う",
          "zh-CN": "各自发展并相互尊重",
          "zh-TW": "各自發展並相互尊重",
          id: "Berkembang secara individual sambil saling menghormati",
          vi: "Phát triển cá nhân trong khi tôn trọng lẫn nhau"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "결혼식과 신혼여행에 대한 생각은?",
      en: "What do you think about weddings and honeymoons?",
      ja: "結婚式と新婚旅行についてどう思いますか？",
      "zh-CN": "你对婚礼和蜜月有什么想法？",
      "zh-TW": "你對婚禮和蜜月有什麼想法？",
      id: "Apa pendapat Anda tentang pernikahan dan bulan madu?",
      vi: "Bạn nghĩ gì về đám cưới và tuần trăng mật?"
    },
    options: [
      {
        text: {
          ko: "예산 내에서 실속 있게",
          en: "Practical within budget",
          ja: "予算内で実用的に",
          "zh-CN": "在预算内实用",
          "zh-TW": "在預算內實用",
          id: "Praktis dalam anggaran",
          vi: "Thực tế trong ngân sách"
        },
        scores: { Type5: 10, Type1: 1 }
      },
      {
        text: {
          ko: "평생 기억에 남을 특별하게",
          en: "Special and memorable for a lifetime",
          ja: "生涯記憶に残る特別に",
          "zh-CN": "终生难忘的特殊",
          "zh-TW": "終生難忘的特殊",
          id: "Khusus dan berkesan seumur hidup",
          vi: "Đặc biệt và đáng nhớ suốt đời"
        },
        scores: { Type2: 4, Type6: 1 }
      },
      {
        text: {
          ko: "의미 있고 품격 있게",
          en: "Meaningful and dignified",
          ja: "意味があり品格のある",
          "zh-CN": "有意义且有品位",
          "zh-TW": "有意義且有品位",
          id: "Bermakna dan bermartabat",
          vi: "Có ý nghĩa và phẩm giá"
        },
        scores: { Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "서로 원하는 스타일 존중",
          en: "Respect each other's preferred style",
          ja: "お互いが望むスタイルを尊重",
          "zh-CN": "尊重彼此喜欢的风格",
          "zh-TW": "尊重彼此喜歡的風格",
          id: "Hormati gaya yang diinginkan masing-masing",
          vi: "Tôn trọng phong cách mà nhau muốn"
        },
        scores: { Type4: 4 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "50년 후 배우자와의 이상적인 모습은?",
      en: "What is your ideal image with your spouse 50 years later?",
      ja: "50年後の配偶者との理想的な姿は？",
      "zh-CN": "50年后与配偶的理想形象是什么？",
      "zh-TW": "50年後與配偶的理想形象是什麼？",
      id: "Bagaimana gambaran ideal Anda dengan pasangan 50 tahun kemudian?",
      vi: "Hình ảnh lý tưởng với người bạn đời sau 50 năm là gì?"
    },
    options: [
      {
        text: {
          ko: "편안한 노후를 함께 즐기는 모습",
          en: "Enjoying a comfortable retirement together",
          ja: "穏やかな老後を一緒に楽しむ姿",
          "zh-CN": "一起享受舒适的晚年",
          "zh-TW": "一起享受舒適的晚年",
          id: "Menikmati masa pensiun yang nyaman bersama",
          vi: "Cùng tận hưởng tuổi già thoải mái"
        },
        scores: { Type5: 10, Type1: 1 }
      },
      {
        text: {
          ko: "여전히 손잡고 세계여행 하는 모습",
          en: "Still holding hands and traveling the world",
          ja: "まだ手を繋いで世界旅行する姿",
          "zh-CN": "仍然手牵手环游世界",
          "zh-TW": "仍然手牽手環遊世界",
          id: "Masih berpegangan tangan dan berkeliling dunia",
          vi: "Vẫn nắm tay nhau và du lịch thế giới"
        },
        scores: { Type2: 4 }
      },
      {
        text: {
          ko: "깊은 대화를 나누는 지혜로운 모습",
          en: "Wise appearance sharing deep conversations",
          ja: "深い対話を交わす賢い姿",
          "zh-CN": "进行深度对话的智慧形象",
          "zh-TW": "進行深度對話的智慧形象",
          id: "Penampilan bijaksana berbagi percakapan mendalam",
          vi: "Hình ảnh khôn ngoan chia sẻ cuộc trò chuyện sâu sắc"
        },
        scores: { Type6: 8, Type3: 2 }
      },
      {
        text: {
          ko: "각자 하고 싶은 일 하며 존중하는 모습",
          en: "Respecting each other while doing what each wants",
          ja: "それぞれがしたいことをしながら尊重する姿",
          "zh-CN": "各自做想做的事并相互尊重",
          "zh-TW": "各自做想做的事並相互尊重",
          id: "Saling menghormati sambil melakukan yang diinginkan masing-masing",
          vi: "Tôn trọng lẫn nhau trong khi làm những gì mỗi người muốn"
        },
        scores: { Type4: 4 }
      }
    ]
  }
];

export const spouseResults: SpouseResult[] = [
  {
    type: "Type1",
    emoji: "🏠",
    title: {
      ko: "안정형 파트너",
      en: "Stable Partner",
      ja: "安定型パートナー",
      "zh-CN": "稳定型伴侣",
      "zh-TW": "穩定型伴侶",
      id: "Pasangan Stabil",
      vi: "Đối tác ổn định"
    },
    description: {
      ko: "믿음직한 동반자, 평생 든든한 버팀목",
      en: "Reliable companion, lifelong strong support",
      ja: "信頼できるパートナー、生涯の強い支え",
      "zh-CN": "可靠的伴侣，终身的坚强支柱",
      "zh-TW": "可靠的伴侶，終身的堅強支柱",
      id: "Pendamping yang dapat diandalkan, dukungan kuat seumur hidup",
      vi: "Bạn đồng hành đáng tin cậy, hỗ trợ mạnh mẽ suốt đời"
    },
    characteristics: {
      ko: "성실함, 책임감, 계획성, 경제관념, 신뢰감",
      en: "Sincerity, responsibility, planning, economic sense, trust",
      ja: "誠実さ、責任感、計画性、経済観念、信頼感",
      "zh-CN": "诚实、责任感、计划性、经济观念、信任感",
      "zh-TW": "誠實、責任感、計劃性、經濟觀念、信任感",
      id: "Kejujuran, tanggung jawab, perencanaan, pemahaman ekonomi, kepercayaan",
      vi: "Chân thành, trách nhiệm, lập kế hoạch, ý thức kinh tế, tin tưởng"
    },
    idealJob: {
      ko: "공무원, 대기업 직장인, 전문직, 안정적 자영업",
      en: "Civil servant, corporate employee, professional, stable self-employment",
      ja: "公務員、大企業社員、専門職、安定した自営業",
      "zh-CN": "公务员、大企业员工、专业职业、稳定自营",
      "zh-TW": "公務員、大企業員工、專業職業、穩定自營",
      id: "PNS, karyawan korporat, profesional, wiraswasta stabil",
      vi: "Công chức, nhân viên công ty, chuyên nghiệp, tự kinh doanh ổn định"
    },
    marriageLife: {
      ko: "규칙적인 생활, 계획적인 저축, 안정적인 육아, 노후 준비",
      en: "Regular life, planned savings, stable parenting, retirement preparation",
      ja: "規則正しい生活、計画的な貯蓄、安定した子育て、老後準備",
      "zh-CN": "规律生活、计划储蓄、稳定育儿、退休准备",
      "zh-TW": "規律生活、計劃儲蓄、穩定育兒、退休準備",
      id: "Hidup teratur, tabungan terencana, pengasuhan stabil, persiapan pensiun",
      vi: "Cuộc sống đều đặn, tiết kiệm có kế hoạch, nuôi dạy con ổn định, chuẩn bị hưu trí"
    },
    caution: {
      ko: "지나친 안정 추구로 모험과 낭만이 부족할 수 있음",
      en: "May lack adventure and romance due to excessive pursuit of stability",
      ja: "安定を追求しすぎて冒険とロマンスが不足する可能性",
      "zh-CN": "过度追求稳定可能缺乏冒险和浪漫",
      "zh-TW": "過度追求穩定可能缺乏冒險和浪漫",
      id: "Mungkin kurang petualangan dan romansa karena terlalu mengejar stabilitas",
      vi: "Có thể thiếu phiêu lưu và lãng mạn do theo đuổi sự ổn định quá mức"
    },
    compatibility: {
      best: ["Type5"],
      good: ["Type3"],
      careful: ["Type2"],
      difficult: ["Type4"]
    }
  },
  {
    type: "Type2",
    emoji: "🔥",
    title: {
      ko: "열정형 파트너",
      en: "Passionate Partner",
      ja: "情熱型パートナー",
      "zh-CN": "热情型伴侣",
      "zh-TW": "熱情型伴侶",
      id: "Pasangan Berapi-api",
      vi: "Đối tác nhiệt tình"
    },
    description: {
      ko: "영원한 연인, 매일이 설레는 인생",
      en: "Eternal lovers, every day is exciting",
      ja: "永遠の恋人、毎日がドキドキする人生",
      "zh-CN": "永恒的恋人，每天都令人兴奋的生活",
      "zh-TW": "永恆的戀人，每天都令人興奮的生活",
      id: "Kekasih abadi, setiap hari penuh kegembiraan",
      vi: "Người yêu vĩnh cửu, mỗi ngày đều thú vị"
    },
    characteristics: {
      ko: "열정, 긍정성, 모험심, 낭만, 에너지",
      en: "Passion, positivity, adventurous spirit, romance, energy",
      ja: "情熱、ポジティブ、冒険心、ロマンス、エネルギー",
      "zh-CN": "激情、积极性、冒险精神、浪漫、活力",
      "zh-TW": "激情、積極性、冒險精神、浪漫、活力",
      id: "Gairah, positif, jiwa petualang, romantis, energi",
      vi: "Đam mê, tích cực, tinh thần phiêu lưu, lãng mạn, năng lượng"
    },
    idealJob: {
      ko: "크리에이터, 기획자, 여행업, 프리랜서, 예술가",
      en: "Creator, planner, travel industry, freelancer, artist",
      ja: "クリエイター、企画者、旅行業、フリーランサー、芸術家",
      "zh-CN": "创作者、策划者、旅游业、自由职业者、艺术家",
      "zh-TW": "創作者、策劃者、旅遊業、自由職業者、藝術家",
      id: "Kreator, perencana, industri pariwisata, freelancer, seniman",
      vi: "Người sáng tạo, lập kế hoạch, ngành du lịch, tự do, nghệ sĩ"
    },
    marriageLife: {
      ko: "다양한 경험, 즉흥 여행, 활기찬 일상, 추억 중시",
      en: "Diverse experiences, spontaneous trips, vibrant daily life, valuing memories",
      ja: "多様な経験、即興旅行、活気ある日常、思い出重視",
      "zh-CN": "多样化体验、即兴旅行、充满活力的日常生活、重视回忆",
      "zh-TW": "多樣化體驗、即興旅行、充滿活力的日常生活、重視回憶",
      id: "Pengalaman beragam, perjalanan spontan, kehidupan sehari-hari yang hidup, menghargai kenangan",
      vi: "Trải nghiệm đa dạng, chuyến đi tự phát, cuộc sống hàng ngày sôi động, coi trọng kỷ niệm"
    },
    caution: {
      ko: "경제적 불안정, 계획 부족, 현실 문제 회피 가능",
      en: "Economic instability, lack of planning, possible avoidance of real problems",
      ja: "経済的不安定、計画不足、現実問題回避の可能性",
      "zh-CN": "经济不稳定、缺乏计划、可能回避现实问题",
      "zh-TW": "經濟不穩定、缺乏計劃、可能迴避現實問題",
      id: "Ketidakstabilan ekonomi, kurang perencanaan, kemungkinan menghindari masalah nyata",
      vi: "Bất ổn kinh tế, thiếu kế hoạch, có thể tránh né vấn đề thực tế"
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type4"],
      careful: ["Type5"],
      difficult: ["Type1"]
    }
  },
  {
    type: "Type3",
    emoji: "🧠",
    title: {
      ko: "지적형 파트너",
      en: "Intellectual Partner",
      ja: "知的型パートナー",
      "zh-CN": "智慧型伴侣",
      "zh-TW": "智慧型伴侶",
      id: "Pasangan Intelektual",
      vi: "Đối tác trí tuệ"
    },
    description: {
      ko: "평생 대화 상대, 함께 성장하는 동료",
      en: "Lifelong conversation partner, growing together as colleagues",
      ja: "生涯の対話相手、一緒に成長する同僚",
      "zh-CN": "终身的对话伙伴，共同成长的同事",
      "zh-TW": "終身的對話夥伴，共同成長的同事",
      id: "Rekan percakapan seumur hidup, tumbuh bersama sebagai kolega",
      vi: "Đối tác trò chuyện suốt đời, cùng phát triển như đồng nghiệp"
    },
    characteristics: {
      ko: "지성, 교양, 깊이, 사려 깊음, 통찰력",
      en: "Intelligence, culture, depth, thoughtfulness, insight",
      ja: "知性、教養、深さ、思慮深さ、洞察力",
      "zh-CN": "智慧、修养、深度、深思熟虑、洞察力",
      "zh-TW": "智慧、修養、深度、深思熟慮、洞察力",
      id: "Kecerdasan, budaya, kedalaman, bijaksana, wawasan",
      vi: "Trí tuệ, văn hóa, chiều sâu, suy nghĩ sâu sắc, sự sáng suốt"
    },
    idealJob: {
      ko: "교수, 연구원, 작가, 변호사, 의사, 교육자",
      en: "Professor, researcher, writer, lawyer, doctor, educator",
      ja: "教授、研究者、作家、弁護士、医師、教育者",
      "zh-CN": "教授、研究员、作家、律师、医生、教育者",
      "zh-TW": "教授、研究員、作家、律師、醫生、教育者",
      id: "Profesor, peneliti, penulis, pengacara, dokter, pendidik",
      vi: "Giáo sư, nhà nghiên cứu, nhà văn, luật sư, bác sĩ, nhà giáo dục"
    },
    marriageLife: {
      ko: "깊은 대화, 문화 생활, 자녀 교육 중시, 지적 성장",
      en: "Deep conversations, cultural life, emphasis on children's education, intellectual growth",
      ja: "深い対話、文化的生活、子供の教育重視、知的成長",
      "zh-CN": "深度对话、文化生活、重视子女教育、智力成长",
      "zh-TW": "深度對話、文化生活、重視子女教育、智力成長",
      id: "Percakapan mendalam, kehidupan budaya, menekankan pendidikan anak, pertumbuhan intelektual",
      vi: "Trò chuyện sâu sắc, đời sống văn hóa, coi trọng giáo dục con cái, phát triển trí tuệ"
    },
    caution: {
      ko: "감정 표현 부족, 지나친 이성 중심, 실용성 약함",
      en: "Lack of emotional expression, excessive rationality, weak practicality",
      ja: "感情表現不足、過度な理性中心、実用性弱い",
      "zh-CN": "情感表达不足、过度理性、实用性弱",
      "zh-TW": "情感表達不足、過度理性、實用性弱",
      id: "Kurang ekspresi emosional, terlalu rasional, praktis lemah",
      vi: "Thiếu biểu hiện cảm xúc, quá lý trí, thực tế yếu"
    },
    compatibility: {
      best: ["Type3"],
      good: ["Type1"],
      careful: ["Type2"],
      difficult: ["Type5"]
    }
  },
  {
    type: "Type4",
    emoji: "🌈",
    title: {
      ko: "자유형 파트너",
      en: "Free-spirited Partner",
      ja: "自由型パートナー",
      "zh-CN": "自由型伴侣",
      "zh-TW": "自由型伴侶",
      id: "Pasangan Bebas",
      vi: "Đối tác tự do"
    },
    description: {
      ko: "독립적 동반자, 서로를 존중하는 관계",
      en: "Independent companion, relationship of mutual respect",
      ja: "独立したパートナー、お互いを尊重する関係",
      "zh-CN": "独立的伴侣，相互尊重的关系",
      "zh-TW": "獨立的伴侶，相互尊重的關係",
      id: "Pendamping mandiri, hubungan saling menghormati",
      vi: "Bạn đồng hành độc lập, mối quan hệ tôn trọng lẫn nhau"
    },
    characteristics: {
      ko: "독립성, 존중, 개성, 자유로움, 유연함",
      en: "Independence, respect, individuality, freedom, flexibility",
      ja: "独立性、尊重、個性、自由、柔軟性",
      "zh-CN": "独立性、尊重、个性、自由、灵活性",
      "zh-TW": "獨立性、尊重、個性、自由、靈活性",
      id: "Kemandirian, rasa hormat, individualitas, kebebasan, fleksibilitas",
      vi: "Tính độc lập, tôn trọng, cá tính, tự do, linh hoạt"
    },
    idealJob: {
      ko: "프리랜서, 예술가, 창업가, 작가, 독립 사업가",
      en: "Freelancer, artist, entrepreneur, writer, independent businessman",
      ja: "フリーランサー、芸術家、起業家、作家、独立事業家",
      "zh-CN": "自由职业者、艺术家、企业家、作家、独立商人",
      "zh-TW": "自由職業者、藝術家、企業家、作家、獨立商人",
      id: "Freelancer, seniman, pengusaha, penulis, pengusaha mandiri",
      vi: "Tự do, nghệ sĩ, doanh nhân, nhà văn, thương nhân độc lập"
    },
    marriageLife: {
      ko: "독립적 생활, 각자 취미, 여유로운 관계, 상호 존중",
      en: "Independent life, individual hobbies, relaxed relationship, mutual respect",
      ja: "独立した生活、それぞれの趣味、余裕のある関係、相互尊重",
      "zh-CN": "独立生活、各自爱好、轻松关系、相互尊重",
      "zh-TW": "獨立生活、各自愛好、輕鬆關係、相互尊重",
      id: "Kehidupan mandiri, hobi masing-masing, hubungan santai, saling menghormati",
      vi: "Cuộc sống độc lập, sở thích riêng, mối quan hệ thoải mái, tôn trọng lẫn nhau"
    },
    caution: {
      ko: "지나친 거리감, 관계 소홀, 가족 우선순위 낮음",
      en: "Excessive distance, neglect of relationship, low family priority",
      ja: "過度な距離感、関係の軽視、家族優先度低い",
      "zh-CN": "过度距离感、忽视关系、家庭优先级低",
      "zh-TW": "過度距離感、忽視關係、家庭優先級低",
      id: "Jarak berlebihan, mengabaikan hubungan, prioritas keluarga rendah",
      vi: "Khoảng cách quá xa, coi nhẹ mối quan hệ, ưu tiên gia đình thấp"
    },
    compatibility: {
      best: ["Type4"],
      good: ["Type2"],
      careful: ["Type6"],
      difficult: ["Type1"]
    }
  },
  {
    type: "Type5",
    emoji: "💝",
    title: {
      ko: "가정형 파트너",
      en: "Family-oriented Partner",
      ja: "家庭型パートナー",
      "zh-CN": "家庭型伴侣",
      "zh-TW": "家庭型伴侶",
      id: "Pasangan Berorientasi Keluarga",
      vi: "Đối tác hướng gia đình"
    },
    description: {
      ko: "따뜻한 집, 아늑한 사랑의 보금자리",
      en: "Warm home, cozy nest of love",
      ja: "温かい家、居心地の良い愛の巣",
      "zh-CN": "温暖的家，舒适的爱情港湾",
      "zh-TW": "溫暖的家，舒適的愛情港灣",
      id: "Rumah hangat, sarang cinta yang nyaman",
      vi: "Ngôi nhà ấm áp, tổ ấm tình yêu ấm cúng"
    },
    characteristics: {
      ko: "가정적, 따뜻함, 양육 능력, 배려심, 실용성",
      en: "Family-oriented, warmth, parenting ability, consideration, practicality",
      ja: "家庭的、温かさ、育児能力、思いやり、実用性",
      "zh-CN": "家庭导向、温暖、育儿能力、体贴、实用性",
      "zh-TW": "家庭導向、溫暖、育兒能力、體貼、實用性",
      id: "Berorientasi keluarga, kehangatan, kemampuan mengasuh, perhatian, praktis",
      vi: "Hướng gia đình, ấm áp, khả năng nuôi dạy con, quan tâm, thực tế"
    },
    idealJob: {
      ko: "선생님, 간호사, 요리사, 유치원 교사, 가정 중시 직업",
      en: "Teacher, nurse, chef, kindergarten teacher, family-oriented profession",
      ja: "教師、看護師、シェフ、幼稚園教師、家庭重視職業",
      "zh-CN": "教师、护士、厨师、幼儿园教师、重视家庭的职业",
      "zh-TW": "教師、護士、廚師、幼稚園教師、重視家庭的職業",
      id: "Guru, perawat, koki, guru taman kanak-kanak, profesi berorientasi keluarga",
      vi: "Giáo viên, y tá, đầu bếp, giáo viên mầm non, nghề nghiệp hướng gia đình"
    },
    marriageLife: {
      ko: "홈 중심, 육아 열정, 명절 중시, 가족 행복 우선",
      en: "Home-centered, passionate about parenting, emphasis on holidays, family happiness first",
      ja: "ホーム中心、育児情熱、祝日重視、家族の幸せ優先",
      "zh-CN": "以家为中心、育儿热情、重视节日、家庭幸福优先",
      "zh-TW": "以家為中心、育兒熱情、重視節日、家庭幸福優先",
      id: "Berpusat di rumah, semangat mengasuh anak, menekankan hari libur, kebahagiaan keluarga diutamakan",
      vi: "Tập trung vào nhà, đam mê nuôi dạy con, coi trọng ngày lễ, hạnh phúc gia đình ưu tiên"
    },
    caution: {
      ko: "개인 시간 부족, 외부 활동 적음, 변화 적음",
      en: "Lack of personal time, few external activities, little change",
      ja: "個人時間不足、外部活動少ない、変化少ない",
      "zh-CN": "个人时间不足、外部活动少、变化少",
      "zh-TW": "個人時間不足、外部活動少、變化少",
      id: "Kurang waktu pribadi, sedikit aktivitas eksternal, sedikit perubahan",
      vi: "Thiếu thời gian cá nhân, ít hoạt động bên ngoài, ít thay đổi"
    },
    compatibility: {
      best: ["Type1"],
      good: ["Type5"],
      careful: ["Type2"],
      difficult: ["Type4"]
    }
  },
  {
    type: "Type6",
    emoji: "📈",
    title: {
      ko: "성장형 파트너",
      en: "Growth-oriented Partner",
      ja: "成長型パートナー",
      "zh-CN": "成长型伴侣",
      "zh-TW": "成長型伴侶",
      id: "Pasangan Berorientasi Pertumbuhan",
      vi: "Đối tác hướng phát triển"
    },
    description: {
      ko: "함께 성장, 서로를 응원하는 최고의 팀",
      en: "Growing together, the best team supporting each other",
      ja: "一緒に成長、お互いを応援する最高のチーム",
      "zh-CN": "共同成长，相互支持的最佳团队",
      "zh-TW": "共同成長，相互支持的最佳團隊",
      id: "Berkembang bersama, tim terbaik yang saling mendukung",
      vi: "Cùng phát triển, đội ngũ tốt nhất hỗ trợ lẫn nhau"
    },
    characteristics: {
      ko: "성장 지향, 동기부여, 야망, 상호 발전, 균형감",
      en: "Growth-oriented, motivation, ambition, mutual development, sense of balance",
      ja: "成長志向、動機付け、野心、相互発展、バランス感覚",
      "zh-CN": "成长导向、动机、野心、相互发展、平衡感",
      "zh-TW": "成長導向、動機、野心、相互發展、平衡感",
      id: "Berorientasi pertumbuhan, motivasi, ambisi, pengembangan timbal balik, rasa keseimbangan",
      vi: "Hướng phát triển, động lực, tham vọng, phát triển lẫn nhau, cảm giác cân bằng"
    },
    idealJob: {
      ko: "기업가, 임원, 전문가, 스타트업, 성장형 직업",
      en: "Entrepreneur, executive, specialist, startup, growth-oriented profession",
      ja: "起業家、役員、専門家、スタートアップ、成長型職業",
      "zh-CN": "企业家、高管、专家、初创公司、成长型职业",
      "zh-TW": "企業家、高管、專家、初創公司、成長型職業",
      id: "Pengusaha, eksekutif, spesialis, startup, profesi berorientasi pertumbuhan",
      vi: "Doanh nhân, điều hành, chuyên gia, khởi nghiệp, nghề nghiệp hướng phát triển"
    },
    marriageLife: {
      ko: "상호 응원, 목표 달성, 균형 발전, 성장 중시",
      en: "Mutual support, goal achievement, balanced development, emphasis on growth",
      ja: "相互応援、目標達成、バランス発展、成長重視",
      "zh-CN": "相互支持、目标达成、平衡发展、重视成长",
      "zh-TW": "相互支持、目標達成、平衡發展、重視成長",
      id: "Dukungan timbal balik, pencapaian tujuan, pengembangan seimbang, menekankan pertumbuhan",
      vi: "Hỗ trợ lẫn nhau, đạt mục tiêu, phát triển cân bằng, coi trọng tăng trưởng"
    },
    caution: {
      ko: "일 중독, 가정 소홀, 과도한 경쟁 의식",
      en: "Work addiction, neglect of family, excessive competitive spirit",
      ja: "仕事中毒、家庭軽視、過度な競争意識",
      "zh-CN": "工作成瘾、忽视家庭、过度竞争意识",
      "zh-TW": "工作成癮、忽視家庭、過度競爭意識",
      id: "Kecanduan kerja, mengabaikan keluarga, semangat kompetitif berlebihan",
      vi: "Nghiện công việc, coi nhẹ gia đình, tinh thần cạnh tranh quá mức"
    },
    compatibility: {
      best: ["Type6"],
      good: ["Type3"],
      careful: ["Type4"],
      difficult: ["Type5"]
    }
  }
];

export function calculateSpouseResult(answers: any[]): string {
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
  
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
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
