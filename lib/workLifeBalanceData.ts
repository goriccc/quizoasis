export interface WorkLifeBalanceQuestion {
  id: number;
  question: Record<string, string>;
  optionA: Record<string, string>;
  optionB: Record<string, string>;
  optionC: Record<string, string>;
  optionD: Record<string, string>;
}

export interface WorkLifeBalanceResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Record<string, string[]>;
  cons: Record<string, string[]>;
  recommendedJobs: Record<string, string>;
  advice: Record<string, string>;
  compatibility: {
    bestMatch: Record<string, string>;
    caution: Record<string, string>;
  };
}

export const workLifeBalanceQuestions: WorkLifeBalanceQuestion[] = [
  {
    id: 1,
    question: {
      ko: "평일 저녁 6시, 퇴근 시간입니다. 당신은?",
      en: "It's 6 PM on a weekday, time to leave work. What do you do?",
      ja: "平日の夕方6時、退社時間です。あなたは？",
      "zh-CN": "平日晚上6点，下班时间。你会怎么做？",
      "zh-TW": "平日晚上6點，下班時間。你會怎麼做？",
      vi: "6 giờ tối ngày thường, giờ tan làm. Bạn sẽ làm gì?",
      id: "Jam 6 sore hari kerja, waktu pulang. Apa yang akan Anda lakukan?"
    },
    optionA: {
      ko: "일이 남았다면 끝내고 퇴근",
      en: "Finish the work if there's any left, then leave",
      ja: "仕事が残っていれば終わらせて退社",
      "zh-CN": "有工作就完成再下班",
      "zh-TW": "有工作就完成再下班",
      vi: "Hoàn thành công việc nếu còn lại, rồi về",
      id: "Selesaikan pekerjaan jika masih ada, lalu pulang"
    },
    optionB: {
      ko: "정시 퇴근하지만 필요하면 집에서 마무리",
      en: "Leave on time but finish at home if necessary",
      ja: "定時退社するが、必要なら家で仕上げる",
      "zh-CN": "准时下班但必要时在家完成",
      "zh-TW": "準時下班但必要時在家完成",
      vi: "Về đúng giờ nhưng hoàn thành ở nhà nếu cần",
      id: "Pulang tepat waktu tapi selesaikan di rumah jika perlu"
    },
    optionC: {
      ko: "칼퇴근! 저녁 시간은 나의 것",
      en: "Sharp departure! Evening time is mine",
      ja: "定時退社！夕方の時間は私のもの",
      "zh-CN": "准时下班！晚上时间是我的",
      "zh-TW": "準時下班！晚上時間是我的",
      vi: "Về đúng giờ! Thời gian tối là của tôi",
      id: "Pulang tepat waktu! Waktu malam adalah milik saya"
    },
    optionD: {
      ko: "그날 상황과 기분에 따라 유동적으로",
      en: "Flexibly according to the day's situation and mood",
      ja: "その日の状況と気分に応じて柔軟に",
      "zh-CN": "根据当天情况和心情灵活处理",
      "zh-TW": "根據當天情況和心情靈活處理",
      vi: "Linh hoạt theo tình huống và tâm trạng ngày đó",
      id: "Fleksibel sesuai situasi dan suasana hati hari itu"
    }
  },
  {
    id: 2,
    question: {
      ko: "주말에 갑자기 업무 연락이 온다면?",
      en: "If you suddenly receive work contact on the weekend?",
      ja: "週末に突然仕事の連絡が来たら？",
      "zh-CN": "如果周末突然收到工作联系？",
      "zh-TW": "如果週末突然收到工作聯繫？",
      vi: "Nếu nhận được liên lạc công việc đột ngột vào cuối tuần?",
      id: "Jika tiba-tiba mendapat kontak kerja di akhir pekan?"
    },
    optionA: {
      ko: "바로 확인하고 처리",
      en: "Check and handle immediately",
      ja: "すぐに確認して処理",
      "zh-CN": "立即查看并处理",
      "zh-TW": "立即查看並處理",
      vi: "Kiểm tra và xử lý ngay lập tức",
      id: "Segera periksa dan tangani"
    },
    optionB: {
      ko: "긴급하면 처리, 아니면 월요일에",
      en: "Handle if urgent, otherwise on Monday",
      ja: "緊急なら処理、そうでなければ月曜日に",
      "zh-CN": "紧急就处理，否则周一再说",
      "zh-TW": "緊急就處理，否則週一再說",
      vi: "Xử lý nếu khẩn cấp, không thì để thứ hai",
      id: "Tangani jika mendesak, kalau tidak Senin"
    },
    optionC: {
      ko: "주말엔 업무 연락 자체가 불편함",
      en: "Work contact on weekends is inconvenient itself",
      ja: "週末の仕事連絡自体が迷惑",
      "zh-CN": "周末的工作联系本身就不方便",
      "zh-TW": "週末的工作聯繫本身就不方便",
      vi: "Liên lạc công việc vào cuối tuần vốn đã bất tiện",
      id: "Kontak kerja di akhir pekan itu sendiri merepotkan"
    },
    optionD: {
      ko: "프로젝트 상황에 따라 다름",
      en: "Depends on the project situation",
      ja: "プロジェクトの状況による",
      "zh-CN": "根据项目情况而定",
      "zh-TW": "根據專案情況而定",
      vi: "Tùy thuộc vào tình huống dự án",
      id: "Tergantung situasi proyek"
    }
  },
  {
    id: 3,
    question: {
      ko: "연봉 협상 시 더 중요한 것은?",
      en: "What's more important in salary negotiation?",
      ja: "年俸交渉でより重要なのは？",
      "zh-CN": "薪资谈判时更重要的是什么？",
      "zh-TW": "薪資談判時更重要的是什麼？",
      vi: "Điều gì quan trọng hơn trong đàm phán lương?",
      id: "Apa yang lebih penting dalam negosiasi gaji?"
    },
    optionA: {
      ko: "높은 연봉, 일이 많아도 괜찮음",
      en: "High salary, even if work is heavy",
      ja: "高い年俸、仕事が多くても構わない",
      "zh-CN": "高薪资，工作多也没关系",
      "zh-TW": "高薪資，工作多也沒關係",
      vi: "Lương cao, dù công việc nhiều cũng ổn",
      id: "Gaji tinggi, meski pekerjaan banyak juga tidak masalah"
    },
    optionB: {
      ko: "적정 연봉과 합리적인 업무량",
      en: "Appropriate salary and reasonable workload",
      ja: "適正な年俸と合理的な業務量",
      "zh-CN": "合适的薪资和合理的工作量",
      "zh-TW": "合適的薪資和合理的工作量",
      vi: "Lương phù hợp và khối lượng công việc hợp lý",
      id: "Gaji yang sesuai dan beban kerja yang wajar"
    },
    optionC: {
      ko: "낮아도 괜찮으니 자유로운 시간",
      en: "Even if low, free time is fine",
      ja: "低くても構わない、自由な時間",
      "zh-CN": "即使低也没关系，自由时间",
      "zh-TW": "即使低也沒關係，自由時間",
      vi: "Dù thấp cũng ổn, thời gian tự do",
      id: "Meski rendah juga tidak masalah, waktu bebas"
    },
    optionD: {
      ko: "성과에 따른 유연한 보상 체계",
      en: "Flexible compensation system based on performance",
      ja: "成果に応じた柔軟な報酬体系",
      "zh-CN": "基于绩效的灵活薪酬体系",
      "zh-TW": "基於績效的靈活薪酬體系",
      vi: "Hệ thống lương linh hoạt dựa trên thành tích",
      id: "Sistem kompensasi fleksibel berdasarkan kinerja"
    }
  },
  {
    id: 4,
    question: {
      ko: "당신이 꿈꾸는 이상적인 직장은?",
      en: "What is your ideal workplace?",
      ja: "あなたが夢見る理想的な職場は？",
      "zh-CN": "你梦想的理想职场是什么？",
      "zh-TW": "你夢想的理想職場是什麼？",
      vi: "Nơi làm việc lý tưởng mà bạn mơ ước là gì?",
      id: "Tempat kerja ideal yang Anda impikan adalah?"
    },
    optionA: {
      ko: "성장 가능성이 높고 배울 게 많은 곳",
      en: "High growth potential and lots to learn",
      ja: "成長可能性が高く、学ぶことが多い場所",
      "zh-CN": "成长潜力高，学习机会多的地方",
      "zh-TW": "成長潛力高，學習機會多的地方",
      vi: "Tiềm năng phát triển cao và nhiều thứ để học",
      id: "Potensi pertumbuhan tinggi dan banyak hal untuk dipelajari"
    },
    optionB: {
      ko: "안정적이고 체계가 잘 잡힌 곳",
      en: "Stable and well-organized place",
      ja: "安定していてシステムが整った場所",
      "zh-CN": "稳定且体系完善的地方",
      "zh-TW": "穩定且體系完善的地方",
      vi: "Nơi ổn định và có hệ thống tốt",
      id: "Tempat yang stabil dan terorganisir dengan baik"
    },
    optionC: {
      ko: "업무 강도가 낮고 여유로운 곳",
      en: "Low work intensity and relaxed place",
      ja: "業務強度が低く、余裕のある場所",
      "zh-CN": "工作强度低，轻松的地方",
      "zh-TW": "工作強度低，輕鬆的地方",
      vi: "Cường độ công việc thấp và thoải mái",
      id: "Intensitas kerja rendah dan tempat yang santai"
    },
    optionD: {
      ko: "자율성이 보장되는 곳",
      en: "Place where autonomy is guaranteed",
      ja: "自律性が保証される場所",
      "zh-CN": "自主性得到保障的地方",
      "zh-TW": "自主性得到保障的地方",
      vi: "Nơi đảm bảo tính tự chủ",
      id: "Tempat yang menjamin otonomi"
    }
  },
  {
    id: 5,
    question: {
      ko: "휴가를 사용하는 당신의 스타일은?",
      en: "What is your style of using vacation?",
      ja: "休暇を使うあなたのスタイルは？",
      "zh-CN": "你使用假期的风格是什么？",
      "zh-TW": "你使用假期的風格是什麼？",
      vi: "Phong cách sử dụng kỳ nghỉ của bạn là gì?",
      id: "Gaya Anda menggunakan liburan adalah?"
    },
    optionA: {
      ko: "꼭 필요할 때만 최소한으로",
      en: "Only when absolutely necessary, minimally",
      ja: "絶対に必要な時だけ最小限に",
      "zh-CN": "只在绝对必要时，最少使用",
      "zh-TW": "只在絕對必要時，最少使用",
      vi: "Chỉ khi thực sự cần thiết, tối thiểu",
      id: "Hanya saat benar-benar perlu, minimal"
    },
    optionB: {
      ko: "계획적으로 적절히 사용",
      en: "Use appropriately with planning",
      ja: "計画的に適切に使用",
      "zh-CN": "有计划地适当使用",
      "zh-TW": "有計劃地適當使用",
      vi: "Sử dụng một cách có kế hoạch và phù hợp",
      id: "Gunakan secara terencana dan tepat"
    },
    optionC: {
      ko: "최대한 많이 사용",
      en: "Use as much as possible",
      ja: "最大限多く使用",
      "zh-CN": "尽可能多地使用",
      "zh-TW": "盡可能多地使用",
      vi: "Sử dụng càng nhiều càng tốt",
      id: "Gunakan sebanyak mungkin"
    },
    optionD: {
      ko: "피곤하거나 필요할 때마다 자유롭게",
      en: "Freely whenever tired or needed",
      ja: "疲れたり必要になったりするたびに自由に",
      "zh-CN": "累了或需要时自由使用",
      "zh-TW": "累了或需要時自由使用",
      vi: "Tự do mỗi khi mệt mỏi hoặc cần thiết",
      id: "Bebas kapan saja lelah atau butuh"
    }
  },
  {
    id: 6,
    question: {
      ko: "업무 중 개인적인 일을 처리한다면?",
      en: "If you handle personal matters during work?",
      ja: "業務中に個人的な用事を処理するなら？",
      "zh-CN": "如果在工作中处理个人事务？",
      "zh-TW": "如果在工作中處理個人事務？",
      vi: "Nếu xử lý việc cá nhân trong giờ làm việc?",
      id: "Jika menangani urusan pribadi saat bekerja?"
    },
    optionA: {
      ko: "절대 안 함, 업무 시간은 일에만 집중",
      en: "Never, work time is only for work",
      ja: "絶対しない、業務時間は仕事にのみ集中",
      "zh-CN": "绝对不做，工作时间只专注工作",
      "zh-TW": "絕對不做，工作時間只專注工作",
      vi: "Không bao giờ, thời gian làm việc chỉ tập trung vào công việc",
      id: "Tidak pernah, waktu kerja hanya fokus pada pekerjaan"
    },
    optionB: {
      ko: "점심시간이나 쉬는 시간에만",
      en: "Only during lunch or break time",
      ja: "昼休みや休憩時間のみ",
      "zh-CN": "只在午餐时间或休息时间",
      "zh-TW": "只在午餐時間或休息時間",
      vi: "Chỉ trong giờ ăn trưa hoặc nghỉ giải lao",
      id: "Hanya saat makan siang atau waktu istirahat"
    },
    optionC: {
      ko: "필요하면 언제든 처리",
      en: "Handle whenever needed",
      ja: "必要ならいつでも処理",
      "zh-CN": "需要时随时处理",
      "zh-TW": "需要時隨時處理",
      vi: "Xử lý bất cứ khi nào cần thiết",
      id: "Tangani kapan saja dibutuhkan"
    },
    optionD: {
      ko: "업무에 지장 없으면 유연하게",
      en: "Flexibly if it doesn't interfere with work",
      ja: "業務に支障がなければ柔軟に",
      "zh-CN": "如果不影响工作就灵活处理",
      "zh-TW": "如果不影響工作就靈活處理",
      vi: "Linh hoạt nếu không ảnh hưởng đến công việc",
      id: "Fleksibel jika tidak mengganggu pekerjaan"
    }
  },
  {
    id: 7,
    question: {
      ko: "야근과 회식에 대한 생각은?",
      en: "What do you think about overtime and company dinners?",
      ja: "残業と懇親会についてどう思いますか？",
      "zh-CN": "你对加班和聚餐有什么看法？",
      "zh-TW": "你對加班和聚餐有什麼看法？",
      vi: "Bạn nghĩ gì về làm thêm giờ và tiệc công ty?",
      id: "Apa pendapat Anda tentang lembur dan makan malam kantor?"
    },
    optionA: {
      ko: "팀워크와 성과를 위해 적극 참여",
      en: "Actively participate for teamwork and performance",
      ja: "チームワークと成果のために積極的に参加",
      "zh-CN": "为了团队合作和绩效积极参与",
      "zh-TW": "為了團隊合作和績效積極參與",
      vi: "Tích cực tham gia vì tinh thần đồng đội và thành tích",
      id: "Aktif berpartisipasi untuk kerja tim dan kinerja"
    },
    optionB: {
      ko: "가끔은 괜찮지만 자주는 부담",
      en: "Occasionally okay but frequent is burdensome",
      ja: "たまになら大丈夫だが頻繁だと負担",
      "zh-CN": "偶尔可以但频繁就有负担",
      "zh-TW": "偶爾可以但頻繁就有負擔",
      vi: "Thỉnh thoảng ổn nhưng thường xuyên thì áp lực",
      id: "Kadang-kadang oke tapi sering jadi beban"
    },
    optionC: {
      ko: "최대한 피하고 싶음",
      en: "Want to avoid as much as possible",
      ja: "最大限避けたい",
      "zh-CN": "尽可能避免",
      "zh-TW": "盡可能避免",
      vi: "Muốn tránh càng nhiều càng tốt",
      id: "Ingin menghindari sebanyak mungkin"
    },
    optionD: {
      ko: "의미 있다면 참여, 형식적이면 거절",
      en: "Participate if meaningful, refuse if formal",
      ja: "意味があれば参加、形式的なら断る",
      "zh-CN": "有意义就参与，形式化就拒绝",
      "zh-TW": "有意義就參與，形式化就拒絕",
      vi: "Tham gia nếu có ý nghĩa, từ chối nếu chỉ là hình thức",
      id: "Ikut jika bermakna, tolak jika formal"
    }
  },
  {
    id: 8,
    question: {
      ko: "재택근무가 가능하다면?",
      en: "If remote work is possible?",
      ja: "在宅勤務が可能なら？",
      "zh-CN": "如果可以远程工作？",
      "zh-TW": "如果可以遠程工作？",
      vi: "Nếu có thể làm việc từ xa?",
      id: "Jika kerja jarak jauh memungkinkan?"
    },
    optionA: {
      ko: "사무실이 더 집중 잘됨",
      en: "Office is better for concentration",
      ja: "オフィスの方が集中しやすい",
      "zh-CN": "办公室更容易集中",
      "zh-TW": "辦公室更容易集中",
      vi: "Văn phòng tập trung tốt hơn",
      id: "Kantor lebih mudah fokus"
    },
    optionB: {
      ko: "주 1-2회 정도가 적당",
      en: "1-2 times a week is appropriate",
      ja: "週1-2回程度が適当",
      "zh-CN": "每周1-2次比较合适",
      "zh-TW": "每週1-2次比較合適",
      vi: "1-2 lần một tuần là phù hợp",
      id: "1-2 kali seminggu sudah cukup"
    },
    optionC: {
      ko: "매일 재택이 최고",
      en: "Working from home every day is the best",
      ja: "毎日在宅が最高",
      "zh-CN": "每天在家工作最好",
      "zh-TW": "每天在家工作最好",
      vi: "Làm việc từ nhà mỗi ngày là tốt nhất",
      id: "Kerja dari rumah setiap hari yang terbaik"
    },
    optionD: {
      ko: "프로젝트와 기분에 따라 선택",
      en: "Choose based on project and mood",
      ja: "プロジェクトと気分に応じて選択",
      "zh-CN": "根据项目和心情选择",
      "zh-TW": "根據專案和心情選擇",
      vi: "Chọn dựa trên dự án và tâm trạng",
      id: "Pilih berdasarkan proyek dan suasana hati"
    }
  },
  {
    id: 9,
    question: {
      ko: "퇴근 후 자기계발에 대한 생각은?",
      en: "What do you think about self-development after work?",
      ja: "退社後の自己啓発についてどう思いますか？",
      "zh-CN": "你对下班后的自我发展有什么看法？",
      "zh-TW": "你對下班後的自我發展有什麼看法？",
      vi: "Bạn nghĩ gì về phát triển bản thân sau giờ làm?",
      id: "Apa pendapat Anda tentang pengembangan diri setelah kerja?"
    },
    optionA: {
      ko: "매일 꾸준히 투자",
      en: "Invest consistently every day",
      ja: "毎日着実に投資",
      "zh-CN": "每天持续投资",
      "zh-TW": "每天持續投資",
      vi: "Đầu tư đều đặn mỗi ngày",
      id: "Investasi konsisten setiap hari"
    },
    optionB: {
      ko: "주 2-3회 적절히",
      en: "2-3 times a week appropriately",
      ja: "週2-3回適切に",
      "zh-CN": "每周2-3次适当进行",
      "zh-TW": "每週2-3次適當進行",
      vi: "2-3 lần một tuần một cách phù hợp",
      id: "2-3 kali seminggu dengan tepat"
    },
    optionC: {
      ko: "퇴근 후엔 쉬고 싶음",
      en: "Want to rest after work",
      ja: "退社後は休みたい",
      "zh-CN": "下班后想休息",
      "zh-TW": "下班後想休息",
      vi: "Muốn nghỉ ngơi sau giờ làm",
      id: "Ingin istirahat setelah kerja"
    },
    optionD: {
      ko: "하고 싶을 때만",
      en: "Only when I want to",
      ja: "したい時だけ",
      "zh-CN": "只在想做的时候",
      "zh-TW": "只在想做的時候",
      vi: "Chỉ khi muốn",
      id: "Hanya saat ingin"
    }
  },
  {
    id: 10,
    question: {
      ko: "직장에서 가장 중요하게 생각하는 것은?",
      en: "What do you consider most important at work?",
      ja: "職場で最も重要だと思うことは？",
      "zh-CN": "你认为工作中最重要的是什么？",
      "zh-TW": "你認為工作中最重要的是什麼？",
      vi: "Bạn coi điều gì là quan trọng nhất ở nơi làm việc?",
      id: "Apa yang Anda anggap paling penting di tempat kerja?"
    },
    optionA: {
      ko: "성장과 성과",
      en: "Growth and performance",
      ja: "成長と成果",
      "zh-CN": "成长和绩效",
      "zh-TW": "成長和績效",
      vi: "Phát triển và thành tích",
      id: "Pertumbuhan dan kinerja"
    },
    optionB: {
      ko: "안정과 체계",
      en: "Stability and system",
      ja: "安定とシステム",
      "zh-CN": "稳定和体系",
      "zh-TW": "穩定和體系",
      vi: "Ổn định và hệ thống",
      id: "Stabilitas dan sistem"
    },
    optionC: {
      ko: "여유와 행복",
      en: "Leisure and happiness",
      ja: "余裕と幸福",
      "zh-CN": "悠闲和幸福",
      "zh-TW": "悠閒和幸福",
      vi: "Thoải mái và hạnh phúc",
      id: "Santai dan kebahagiaan"
    },
    optionD: {
      ko: "자유와 자율성",
      en: "Freedom and autonomy",
      ja: "自由と自律性",
      "zh-CN": "自由和自主性",
      "zh-TW": "自由和自主性",
      vi: "Tự do và tự chủ",
      id: "Kebebasan dan otonomi"
    }
  },
  {
    id: 11,
    question: {
      ko: "업무 메신저 알림에 대한 생각은?",
      en: "What do you think about work messenger notifications?",
      ja: "業務メッセンジャーの通知についてどう思いますか？",
      "zh-CN": "你对工作消息通知有什么看法？",
      "zh-TW": "你對工作訊息通知有什麼看法？",
      vi: "Bạn nghĩ gì về thông báo tin nhắn công việc?",
      id: "Apa pendapat Anda tentang notifikasi messenger kerja?"
    },
    optionA: {
      ko: "항상 켜둠, 빠른 응답 중요",
      en: "Always on, quick response is important",
      ja: "常にオン、迅速な返信が重要",
      "zh-CN": "总是开启，快速回复很重要",
      "zh-TW": "總是開啟，快速回覆很重要",
      vi: "Luôn bật, phản hồi nhanh quan trọng",
      id: "Selalu nyala, respons cepat penting"
    },
    optionB: {
      ko: "근무 시간에만 켜둠",
      en: "Only on during work hours",
      ja: "勤務時間のみオン",
      "zh-CN": "只在工作时间开启",
      "zh-TW": "只在工作時間開啟",
      vi: "Chỉ bật trong giờ làm việc",
      id: "Hanya nyala saat jam kerja"
    },
    optionC: {
      ko: "최소한으로만 확인",
      en: "Check minimally only",
      ja: "最小限のみ確認",
      "zh-CN": "只做最少检查",
      "zh-TW": "只做最少檢查",
      vi: "Chỉ kiểm tra tối thiểu",
      id: "Cek minimal saja"
    },
    optionD: {
      ko: "상황에 따라 유동적으로",
      en: "Flexibly according to situation",
      ja: "状況に応じて柔軟に",
      "zh-CN": "根据情况灵活处理",
      "zh-TW": "根據情況靈活處理",
      vi: "Linh hoạt theo tình huống",
      id: "Fleksibel sesuai situasi"
    }
  },
  {
    id: 12,
    question: {
      ko: "10년 후 당신의 이상적인 모습은?",
      en: "What is your ideal self in 10 years?",
      ja: "10年後のあなたの理想的な姿は？",
      "zh-CN": "10年后你的理想样子是什么？",
      "zh-TW": "10年後你的理想樣子是什麼？",
      vi: "Hình ảnh lý tưởng của bạn sau 10 năm là gì?",
      id: "Diri ideal Anda dalam 10 tahun ke depan adalah?"
    },
    optionA: {
      ko: "전문성을 인정받는 리더",
      en: "Leader recognized for expertise",
      ja: "専門性を認められるリーダー",
      "zh-CN": "专业能力得到认可的领导者",
      "zh-TW": "專業能力得到認可的領導者",
      vi: "Lãnh đạo được công nhận về chuyên môn",
      id: "Pemimpin yang diakui keahliannya"
    },
    optionB: {
      ko: "안정적이고 균형잡힌 생활",
      en: "Stable and balanced life",
      ja: "安定していてバランスの取れた生活",
      "zh-CN": "稳定平衡的生活",
      "zh-TW": "穩定平衡的生活",
      vi: "Cuộc sống ổn định và cân bằng",
      id: "Kehidupan yang stabil dan seimbang"
    },
    optionC: {
      ko: "경제적 여유와 자유로운 삶",
      en: "Economically comfortable and free life",
      ja: "経済的余裕と自由な生活",
      "zh-CN": "经济宽裕自由的生活",
      "zh-TW": "經濟寬裕自由的生活",
      vi: "Cuộc sống kinh tế thoải mái và tự do",
      id: "Kehidupan yang nyaman secara ekonomi dan bebas"
    },
    optionD: {
      ko: "원하는 방식으로 일하는 삶",
      en: "Life working in the way I want",
      ja: "望む方法で働く生活",
      "zh-CN": "以想要的方式工作的生活",
      "zh-TW": "以想要的方式工作的生活",
      vi: "Cuộc sống làm việc theo cách mình muốn",
      id: "Kehidupan bekerja dengan cara yang diinginkan"
    }
  }
];

export const workLifeBalanceResults: WorkLifeBalanceResult[] = [
  {
    type: "Type1",
    emoji: "🔥",
    title: {
      ko: "열정 워커홀릭형",
      en: "Passionate Workaholic Type",
      ja: "情熱ワーカホリック型",
      "zh-CN": "热情工作狂型",
      "zh-TW": "熱情工作狂型",
      vi: "Kiểu cuồng công việc nhiệt tình",
      id: "Tipe workaholic penuh semangat"
    },
    description: {
      ko: "일이 곧 삶! 성장과 성과에 집중하는 커리어 중심형",
      en: "Work is life! Career-focused type focused on growth and performance",
      ja: "仕事こそが人生！成長と成果に集中するキャリア中心型",
      "zh-CN": "工作就是生活！专注于成长和成果的职业中心型",
      "zh-TW": "工作就是生活！專注於成長和成果的職業中心型",
      vi: "Công việc chính là cuộc sống! Kiểu tập trung vào sự nghiệp, tăng trưởng và thành tích",
      id: "Kerja adalah hidup! Tipe fokus karier yang berfokus pada pertumbuhan dan kinerja"
    },
    longDescription: {
      ko: "일을 통해 성취감과 보람을 느끼는 타입입니다. 야근도 마다하지 않고 끊임없이 배우고 성장합니다. 높은 몰입도와 열정으로 빠르게 전문성을 쌓지만, 번아웃 위험이 있습니다. 일과 삶의 경계가 모호하지만 그것이 행복의 원천입니다.",
      en: "A type that feels a sense of achievement and fulfillment through work. They don't mind overtime and constantly learn and grow. They build expertise quickly with high engagement and passion, but there's a risk of burnout. The boundary between work and life is blurred, but that's the source of happiness.",
      ja: "仕事を通じて達成感と充実感を感じるタイプです。残業も厭わず、絶えず学び成長します。高い没入度と情熱で専門性を素早く築きますが、燃え尽き症候群のリスクがあります。仕事と人生の境界が曖昧ですが、それが幸せの源です。",
      "zh-CN": "通过工作获得成就感和满足感的类型。不介意加班，不断学习和成长。以高度的投入和热情快速建立专业性，但存在倦怠风险。工作与生活的界限模糊，但这是幸福的源泉。",
      "zh-TW": "通過工作獲得成就感和滿足感的類型。不介意加班，不斷學習和成長。以高度的投入和熱情快速建立專業性，但存在倦怠風險。工作與生活的界限模糊，但這是幸福的源泉。",
      vi: "Kiểu người cảm thấy thành tựu và thỏa mãn thông qua công việc. Họ không ngại làm thêm giờ và liên tục học hỏi, phát triển. Họ xây dựng chuyên môn nhanh chóng với sự tập trung cao và đam mê, nhưng có nguy cơ kiệt sức. Ranh giới giữa công việc và cuộc sống mờ nhạt, nhưng đó là nguồn hạnh phúc.",
      id: "Tipe yang merasakan pencapaian dan kepuasan melalui kerja. Mereka tidak keberatan lembur dan terus belajar serta berkembang. Mereka membangun keahlian dengan cepat dengan keterlibatan tinggi dan semangat, tetapi ada risiko kelelahan. Batas antara kerja dan hidup kabur, tetapi itu adalah sumber kebahagiaan."
    },
    pros: {
      ko: ["빠른 성장", "높은 성과", "전문성", "커리어 발전"],
      en: ["Rapid growth", "High performance", "Expertise", "Career development"],
      ja: ["急速な成長", "高い成果", "専門性", "キャリア発展"],
      "zh-CN": ["快速成长", "高绩效", "专业性", "职业发展"],
      "zh-TW": ["快速成長", "高績效", "專業性", "職業發展"],
      vi: ["Tăng trưởng nhanh", "Hiệu suất cao", "Chuyên môn", "Phát triển sự nghiệp"],
      id: ["Pertumbuhan cepat", "Kinerja tinggi", "Keahlian", "Pengembangan karier"]
    },
    cons: {
      ko: ["번아웃 위험", "대인관계 소홀", "건강 관리 부족"],
      en: ["Burnout risk", "Neglected relationships", "Poor health management"],
      ja: ["燃え尽き症候群のリスク", "人間関係の軽視", "健康管理不足"],
      "zh-CN": ["倦怠风险", "忽视人际关系", "健康管理不足"],
      "zh-TW": ["倦怠風險", "忽視人際關係", "健康管理不足"],
      vi: ["Nguy cơ kiệt sức", "Bỏ bê mối quan hệ", "Quản lý sức khỏe kém"],
      id: ["Risiko kelelahan", "Mengabaikan hubungan", "Manajemen kesehatan buruk"]
    },
    recommendedJobs: {
      ko: "스타트업, 컨설팅, 금융, 법조계",
      en: "Startups, consulting, finance, legal",
      ja: "スタートアップ、コンサルティング、金融、法曹界",
      "zh-CN": "初创企业、咨询、金融、法律界",
      "zh-TW": "初創企業、諮詢、金融、法律界",
      vi: "Startup, tư vấn, tài chính, pháp lý",
      id: "Startup, konsultasi, keuangan, hukum"
    },
    advice: {
      ko: "가끔은 멈춰서 쉬어가세요. 지속 가능한 성장이 진짜 성장입니다!",
      en: "Sometimes stop and rest. Sustainable growth is real growth!",
      ja: "時々立ち止まって休んでください。持続可能な成長が真の成長です！",
      "zh-CN": "有时停下来休息。可持续的增长才是真正的增长！",
      "zh-TW": "有時停下來休息。可持續的增長才是真正的增長！",
      vi: "Thỉnh thoảng hãy dừng lại và nghỉ ngơi. Tăng trưởng bền vững mới là tăng trưởng thực sự!",
      id: "Kadang-kadang berhenti dan istirahat. Pertumbuhan berkelanjutan adalah pertumbuhan yang sesungguhnya!"
    },
    compatibility: {
      bestMatch: {
        ko: "📈 성장 지향 투자형 - 함께 발전하는 동료",
        en: "📈 Growth-oriented Investor - Colleagues who grow together",
        ja: "📈 成長志向投資型 - 共に成長する同僚",
        "zh-CN": "📈 成长导向投资型 - 共同发展的同事",
        "zh-TW": "📈 成長導向投資型 - 共同發展的同事",
        vi: "📈 Kiểu đầu tư hướng tăng trưởng - Đồng nghiệp cùng phát triển",
        id: "📈 Tipe investor berorientasi pertumbuhan - Rekan yang berkembang bersama"
      },
      caution: {
        ko: "🌴 힐링 라이프형 - 가치관 충돌로 이해 어려움",
        en: "🌴 Healing Life Type - Difficult to understand due to value conflicts",
        ja: "🌴 ヒーリングライフ型 - 価値観の衝突で理解困難",
        "zh-CN": "🌴 治愈生活型 - 价值观冲突难以理解",
        "zh-TW": "🌴 治癒生活型 - 價值觀衝突難以理解",
        vi: "🌴 Kiểu cuộc sống chữa lành - Khó hiểu do xung đột giá trị",
        id: "🌴 Tipe kehidupan penyembuhan - Sulit dipahami karena konflik nilai"
      }
    }
  },
  {
    type: "Type2", 
    emoji: "⚖️",
    title: {
      ko: "완벽한 밸런서형",
      en: "Perfect Balancer Type",
      ja: "完璧バランサー型",
      "zh-CN": "完美平衡者型",
      "zh-TW": "完美平衡者型",
      vi: "Kiểu cân bằng hoàn hảo",
      id: "Tipe penyeimbang sempurna"
    },
    description: {
      ko: "일도 삶도 놓치지 않는 균형의 달인",
      en: "Master of balance who doesn't miss work or life",
      ja: "仕事も人生も逃さないバランスの達人",
      "zh-CN": "不放过工作和生活的平衡大师",
      "zh-TW": "不放過工作和生活的平衡大師",
      vi: "Bậc thầy cân bằng không bỏ lỡ cả công việc và cuộc sống",
      id: "Master keseimbangan yang tidak melewatkan kerja dan hidup"
    },
    longDescription: {
      ko: "일과 삶의 완벽한 균형을 추구하는 이상적인 타입입니다. 업무 시간엔 집중하고 퇴근 후엔 자신의 시간을 즐깁니다. 계획적으로 휴가를 사용하고 자기계발도 적절히 합니다. 안정적이고 지속 가능한 커리어를 만들어갑니다.",
      en: "An ideal type that pursues perfect balance between work and life. They focus during work hours and enjoy their own time after work. They use vacation time systematically and engage in self-development appropriately. They build a stable and sustainable career.",
      ja: "仕事と人生の完璧なバランスを追求する理想的なタイプです。勤務時間は集中し、退勤後は自分の時間を楽しみます。計画的に休暇を使い、自己啓発も適度に行います。安定した持続可能なキャリアを築きます。",
      "zh-CN": "追求工作与生活完美平衡的理想类型。工作时间专注，下班后享受自己的时间。有计划地使用假期，适度进行自我发展。建立稳定可持续的职业。",
      "zh-TW": "追求工作與生活完美平衡的理想類型。工作時間專注，下班後享受自己的時間。有計劃地使用假期，適度進行自我發展。建立穩定可持續的職業。",
      vi: "Kiểu lý tưởng theo đuổi sự cân bằng hoàn hảo giữa công việc và cuộc sống. Họ tập trung trong giờ làm việc và tận hưởng thời gian riêng sau giờ làm. Họ sử dụng kỳ nghỉ một cách có kế hoạch và phát triển bản thân một cách phù hợp. Họ xây dựng sự nghiệp ổn định và bền vững.",
      id: "Tipe ideal yang mengejar keseimbangan sempurna antara kerja dan hidup. Mereka fokus selama jam kerja dan menikmati waktu sendiri setelah kerja. Mereka menggunakan liburan secara terencana dan melakukan pengembangan diri secara tepat. Mereka membangun karier yang stabil dan berkelanjutan."
    },
    pros: {
      ko: ["지속 가능성", "안정성", "계획성", "스트레스 관리"],
      en: ["Sustainability", "Stability", "Planning", "Stress management"],
      ja: ["持続可能性", "安定性", "計画性", "ストレス管理"],
      "zh-CN": ["可持续性", "稳定性", "计划性", "压力管理"],
      "zh-TW": ["可持續性", "穩定性", "計劃性", "壓力管理"],
      vi: ["Tính bền vững", "Ổn định", "Lập kế hoạch", "Quản lý căng thẳng"],
      id: ["Keberlanjutan", "Stabilitas", "Perencanaan", "Manajemen stres"]
    },
    cons: {
      ko: ["빠른 성장 어려움", "때로 애매한 포지션"],
      en: ["Difficulty in rapid growth", "Sometimes ambiguous position"],
      ja: ["急速な成長の困難", "時々曖昧なポジション"],
      "zh-CN": ["快速成长困难", "有时立场模糊"],
      "zh-TW": ["快速成長困難", "有時立場模糊"],
      vi: ["Khó khăn trong tăng trưởng nhanh", "Đôi khi vị trí mơ hồ"],
      id: ["Kesulitan pertumbuhan cepat", "Kadang posisi ambigu"]
    },
    recommendedJobs: {
      ko: "대기업, 공기업, 교육, 전문직",
      en: "Large corporations, public enterprises, education, professionals",
      ja: "大企業、公企業、教育、専門職",
      "zh-CN": "大企业、公共企业、教育、专业职业",
      "zh-TW": "大企業、公共企業、教育、專業職業",
      vi: "Tập đoàn lớn, doanh nghiệp nhà nước, giáo dục, chuyên nghiệp",
      id: "Korporasi besar, BUMN, pendidikan, profesional"
    },
    advice: {
      ko: "완벽한 균형을 유지하세요! 당신의 스타일이 가장 건강합니다.",
      en: "Maintain perfect balance! Your style is the healthiest.",
      ja: "完璧なバランスを維持してください！あなたのスタイルが最も健康的です。",
      "zh-CN": "保持完美平衡！你的风格最健康。",
      "zh-TW": "保持完美平衡！你的風格最健康。",
      vi: "Duy trì sự cân bằng hoàn hảo! Phong cách của bạn là lành mạnh nhất.",
      id: "Pertahankan keseimbangan sempurna! Gaya Anda adalah yang paling sehat."
    },
    compatibility: {
      bestMatch: {
        ko: "🎭 유연한 카멜레온형, 📈 성장 지향 투자형 - 안정적 협력",
        en: "🎭 Flexible Chameleon, 📈 Growth-oriented Investor - Stable cooperation",
        ja: "🎭 柔軟なカメレオン型、📈 成長志向投資型 - 安定した協力",
        "zh-CN": "🎭 灵活变色龙型，📈 成长导向投资型 - 稳定合作",
        "zh-TW": "🎭 靈活變色龍型，📈 成長導向投資型 - 穩定合作",
        vi: "🎭 Kiểu tắc kè linh hoạt, 📈 Kiểu đầu tư hướng tăng trưởng - Hợp tác ổn định",
        id: "🎭 Tipe bunglon fleksibel, 📈 Tipe investor berorientasi pertumbuhan - Kerja sama stabil"
      },
      caution: {
        ko: "🔥 열정 워커홀릭형 - 속도 차이로 압박감",
        en: "🔥 Passionate Workaholic - Pressure due to speed differences",
        ja: "🔥 情熱ワーカホリック型 - スピードの違いでプレッシャー",
        "zh-CN": "🔥 热情工作狂型 - 速度差异造成压力",
        "zh-TW": "🔥 熱情工作狂型 - 速度差異造成壓力",
        vi: "🔥 Kiểu cuồng công việc đam mê - Áp lực do khác biệt tốc độ",
        id: "🔥 Tipe workaholic penuh gairah - Tekanan karena perbedaan kecepatan"
      }
    }
  },
  {
    type: "Type3",
    emoji: "🌴", 
    title: {
      ko: "힐링 라이프형",
      en: "Healing Life Type",
      ja: "ヒーリングライフ型",
      "zh-CN": "治愈生活型",
      "zh-TW": "治癒生活型",
      vi: "Kiểu cuộc sống chữa lành",
      id: "Tipe kehidupan penyembuhan"
    },
    description: {
      ko: "삶이 우선! 여유와 행복을 추구하는 자유로운 영혼",
      en: "Life first! Free spirit pursuing leisure and happiness",
      ja: "人生優先！余裕と幸せを追求する自由な魂",
      "zh-CN": "生活优先！追求悠闲和幸福的自由灵魂",
      "zh-TW": "生活優先！追求悠閒和幸福的自由靈魂",
      vi: "Cuộc sống là ưu tiên! Tinh thần tự do theo đuổi sự nhàn rỗi và hạnh phúc",
      id: "Hidup yang utama! Jiwa bebas yang mengejar waktu luang dan kebahagiaan"
    },
    longDescription: {
      ko: "일은 생활을 위한 수단, 진짜 중요한 건 삶의 질입니다. 칼퇴근과 충분한 휴식을 중시하며 취미와 관계에 시간을 투자합니다. 스트레스가 적고 행복지수가 높지만 커리어 발전은 느릴 수 있습니다. 현재의 행복을 가장 중요하게 생각합니다.",
      en: "Work is a means for living, and what really matters is quality of life. They value leaving work on time and sufficient rest, investing time in hobbies and relationships. They have low stress and high happiness index, but career development may be slow. They consider current happiness most important.",
      ja: "仕事は生活のための手段であり、本当に重要なのは人生の質です。定時退社と十分な休息を重視し、趣味や人間関係に時間を投資します。ストレスが少なく幸福指数が高いですが、キャリア発展は遅いかもしれません。現在の幸せを最も重要と考えます。",
      "zh-CN": "工作是生活的手段，真正重要的是生活质量。重视准时下班和充分休息，在爱好和关系上投入时间。压力小，幸福指数高，但职业发展可能较慢。最重视当前的幸福。",
      "zh-TW": "工作是生活的手段，真正重要的是生活質量。重視準時下班和充分休息，在愛好和關係上投入時間。壓力小，幸福指數高，但職業發展可能較慢。最重視當前的幸福。",
      vi: "Công việc là phương tiện để sống, điều thực sự quan trọng là chất lượng cuộc sống. Họ coi trọng việc tan làm đúng giờ và nghỉ ngơi đầy đủ, đầu tư thời gian vào sở thích và các mối quan hệ. Họ có ít căng thẳng và chỉ số hạnh phúc cao, nhưng phát triển sự nghiệp có thể chậm. Họ coi hạnh phúc hiện tại là quan trọng nhất.",
      id: "Kerja adalah sarana untuk hidup, yang benar-benar penting adalah kualitas hidup. Mereka menghargai pulang kerja tepat waktu dan istirahat yang cukup, menginvestasikan waktu pada hobi dan hubungan. Mereka memiliki stres rendah dan indeks kebahagiaan tinggi, tetapi perkembangan karier mungkin lambat. Mereka menganggap kebahagiaan saat ini paling penting."
    },
    pros: {
      ko: ["높은 행복도", "낮은 스트레스", "풍부한 취미생활"],
      en: ["High happiness", "Low stress", "Rich hobby life"],
      ja: ["高い幸福度", "低ストレス", "豊富な趣味生活"],
      "zh-CN": ["高幸福感", "低压力", "丰富的业余生活"],
      "zh-TW": ["高幸福感", "低壓力", "豐富的業餘生活"],
      vi: ["Hạnh phúc cao", "Căng thẳng thấp", "Cuộc sống sở thích phong phú"],
      id: ["Kebahagiaan tinggi", "Stres rendah", "Kehidupan hobi yang kaya"]
    },
    cons: {
      ko: ["느린 커리어 발전", "경제적 제약", "동료와 온도차"],
      en: ["Slow career development", "Economic constraints", "Temperature difference with colleagues"],
      ja: ["キャリア発展の遅さ", "経済的制約", "同僚との温度差"],
      "zh-CN": ["职业发展缓慢", "经济约束", "与同事的温差"],
      "zh-TW": ["職業發展緩慢", "經濟約束", "與同事的溫差"],
      vi: ["Phát triển sự nghiệp chậm", "Ràng buộc kinh tế", "Chênh lệch nhiệt độ với đồng nghiệp"],
      id: ["Perkembangan karier lambat", "Kendala ekonomi", "Perbedaan suhu dengan rekan kerja"]
    },
    recommendedJobs: {
      ko: "공무원, 안정적 업종, 예술, 자영업",
      en: "Civil servants, stable industries, arts, self-employment",
      ja: "公務員、安定業界、芸術、自営業",
      "zh-CN": "公务员、稳定行业、艺术、自营",
      "zh-TW": "公務員、穩定行業、藝術、自營",
      vi: "Công chức, ngành ổn định, nghệ thuật, tự kinh doanh",
      id: "PNS, industri stabil, seni, wiraswasta"
    },
    advice: {
      ko: "행복이 최우선이지만 최소한의 준비도 필요합니다!",
      en: "Happiness is the top priority, but minimal preparation is also needed!",
      ja: "幸せが最優先ですが、最低限の準備も必要です！",
      "zh-CN": "幸福是首要的，但最低限度的准备也是必要的！",
      "zh-TW": "幸福是首要的，但最低限度的準備也是必要的！",
      vi: "Hạnh phúc là ưu tiên hàng đầu, nhưng cũng cần chuẩn bị tối thiểu!",
      id: "Kebahagiaan adalah prioritas utama, tapi persiapan minimal juga diperlukan!"
    },
    compatibility: {
      bestMatch: {
        ko: "⚖️ 완벽한 밸런서형 - 서로 존중하는 관계",
        en: "⚖️ Perfect Balancer - Mutual respect relationship",
        ja: "⚖️ 完璧なバランサー型 - お互いを尊重する関係",
        "zh-CN": "⚖️ 完美平衡者型 - 相互尊重的关系",
        "zh-TW": "⚖️ 完美平衡者型 - 相互尊重的關係",
        vi: "⚖️ Kiểu cân bằng hoàn hảo - Mối quan hệ tôn trọng lẫn nhau",
        id: "⚖️ Tipe penyeimbang sempurna - Hubungan saling menghormati"
      },
      caution: {
        ko: "🔥 열정 워커홀릭형 - 완전히 다른 세계관",
        en: "🔥 Passionate Workaholic - Completely different worldview",
        ja: "🔥 情熱ワーカホリック型 - 全く異なる世界観",
        "zh-CN": "🔥 热情工作狂型 - 完全不同的世界观",
        "zh-TW": "🔥 熱情工作狂型 - 完全不同的世界觀",
        vi: "🔥 Kiểu cuồng công việc đam mê - Thế giới quan hoàn toàn khác",
        id: "🔥 Tipe workaholic penuh gairah - Pandangan dunia yang sama sekali berbeda"
      }
    }
  },
  {
    type: "Type4",
    emoji: "🎭",
    title: {
      ko: "유연한 카멜레온형",
      en: "Flexible Chameleon Type", 
      ja: "柔軟カメレオン型",
      "zh-CN": "灵活变色龙型",
      "zh-TW": "靈活變色龍型",
      vi: "Kiểu tắc kè hoa linh hoạt",
      id: "Tipe bunglon fleksibel"
    },
    description: {
      ko: "상황에 맞춰 자유자재로! 적응력 최고의 전략가",
      en: "Freely adapt to situations! Strategic master with top adaptability",
      ja: "状況に合わせて自由自在に！適応力最高の戦略家",
      "zh-CN": "根据情况自由自在！适应力最强的战略家",
      "zh-TW": "根據情況自由自在！適應力最強的戰略家",
      vi: "Tự do thích ứng với tình huống! Nhà chiến lược có khả năng thích ứng cao nhất",
      id: "Beradaptasi bebas dengan situasi! Strategis master dengan adaptabilitas terbaik"
    },
    longDescription: {
      ko: "고정된 패턴 없이 상황과 프로젝트에 따라 유연하게 움직입니다. 바쁠 땐 집중하고 여유로울 땐 충분히 쉽니다. 적응력이 뛰어나고 스트레스 관리를 잘하지만 때로 일관성이 부족해 보일 수 있습니다. 변화를 두려워하지 않습니다.",
      en: "They move flexibly according to situations and projects without fixed patterns. They focus when busy and rest sufficiently when free. They have excellent adaptability and stress management, but may sometimes appear to lack consistency. They are not afraid of change.",
      ja: "固定されたパターンなしに状況とプロジェクトに応じて柔軟に動きます。忙しい時は集中し、余裕がある時は十分に休みます。適応力が優れておりストレス管理も上手ですが、時々一貫性が不足しているように見えることがあります。変化を恐れません。",
      "zh-CN": "没有固定模式，根据情况和项目灵活行动。忙碌时专注，空闲时充分休息。适应力强，压力管理好，但有时可能显得缺乏一致性。不惧怕变化。",
      "zh-TW": "沒有固定模式，根據情況和項目靈活行動。忙碌時專注，空閒時充分休息。適應力強，壓力管理好，但有時可能顯得缺乏一致性。不懼怕變化。",
      vi: "Họ di chuyển linh hoạt theo tình huống và dự án mà không có mẫu cố định. Họ tập trung khi bận rộn và nghỉ ngơi đầy đủ khi rảnh rỗi. Họ có khả năng thích ứng tuyệt vời và quản lý căng thẳng tốt, nhưng đôi khi có thể thiếu tính nhất quán. Họ không sợ thay đổi.",
      id: "Mereka bergerak fleksibel sesuai situasi dan proyek tanpa pola tetap. Mereka fokus saat sibuk dan istirahat cukup saat santai. Mereka memiliki adaptabilitas luar biasa dan manajemen stres yang baik, tetapi kadang-kadang mungkin tampak kurang konsisten. Mereka tidak takut perubahan."
    },
    pros: {
      ko: ["적응력", "유연성", "스트레스 관리", "다재다능"],
      en: ["Adaptability", "Flexibility", "Stress management", "Versatility"],
      ja: ["適応力", "柔軟性", "ストレス管理", "多才多芸"],
      "zh-CN": ["适应力", "灵活性", "压力管理", "多才多艺"],
      "zh-TW": ["適應力", "靈活性", "壓力管理", "多才多藝"],
      vi: ["Khả năng thích ứng", "Tính linh hoạt", "Quản lý căng thẳng", "Đa tài"],
      id: ["Kemampuan adaptasi", "Fleksibilitas", "Manajemen stres", "Serbaguna"]
    },
    cons: {
      ko: ["일관성 부족", "계획성 약함", "예측 어려움"],
      en: ["Lack of consistency", "Weak planning", "Difficult to predict"],
      ja: ["一貫性の欠如", "計画性の弱さ", "予測困難"],
      "zh-CN": ["缺乏一致性", "计划性弱", "难以预测"],
      "zh-TW": ["缺乏一致性", "計劃性弱", "難以預測"],
      vi: ["Thiếu tính nhất quán", "Kế hoạch yếu", "Khó dự đoán"],
      id: ["Kurang konsistensi", "Perencanaan lemah", "Sulit diprediksi"]
    },
    recommendedJobs: {
      ko: "프리랜서, 프로젝트형 업무, 컨설팅",
      en: "Freelance, project-based work, consulting",
      ja: "フリーランス、プロジェクト型業務、コンサルティング",
      "zh-CN": "自由职业、项目型工作、咨询",
      "zh-TW": "自由職業、項目型工作、諮詢",
      vi: "Freelance, công việc theo dự án, tư vấn",
      id: "Freelance, pekerjaan berbasis proyek, konsultasi"
    },
    advice: {
      ko: "유연함은 장점이지만 핵심 가치는 지켜야 합니다!",
      en: "Flexibility is an advantage, but core values must be maintained!",
      ja: "柔軟性は利点ですが、核心価値は守らなければなりません！",
      "zh-CN": "灵活性是优势，但必须保持核心价值！",
      "zh-TW": "靈活性是優勢，但必須保持核心價值！",
      vi: "Tính linh hoạt là ưu điểm, nhưng phải duy trì các giá trị cốt lõi!",
      id: "Fleksibilitas adalah keuntungan, tapi nilai-nilai inti harus dijaga!"
    },
    compatibility: {
      bestMatch: {
        ko: "⚖️ 완벽한 밸런서형, ✈️ 자유로운 노마드형 - 서로 이해 높음",
        en: "⚖️ Perfect Balancer, ✈️ Free Nomad - High mutual understanding",
        ja: "⚖️ 完璧なバランサー型、✈️ 自由なノマド型 - お互いの理解が高い",
        "zh-CN": "⚖️ 完美平衡者型，✈️ 自由游牧型 - 相互理解度高",
        "zh-TW": "⚖️ 完美平衡者型，✈️ 自由遊牧型 - 相互理解度高",
        vi: "⚖️ Kiểu cân bằng hoàn hảo, ✈️ Kiểu du mục tự do - Hiểu biết lẫn nhau cao",
        id: "⚖️ Tipe penyeimbang sempurna, ✈️ Tipe nomad bebas - Pemahaman timbal balik tinggi"
      },
      caution: {
        ko: "🔥 열정 워커홀릭형 - 태도가 불성실해 보일 수 있음",
        en: "🔥 Passionate Workaholic - May appear insincere in attitude",
        ja: "🔥 情熱ワーカホリック型 - 態度が不誠実に見える可能性",
        "zh-CN": "🔥 热情工作狂型 - 态度可能显得不真诚",
        "zh-TW": "🔥 熱情工作狂型 - 態度可能顯得真誠",
        vi: "🔥 Kiểu cuồng công việc đam mê - Thái độ có thể trông không chân thành",
        id: "🔥 Tipe workaholic penuh gairah - Sikap mungkin terlihat tidak tulus"
      }
    }
  },
  {
    type: "Type5",
    emoji: "✈️",
    title: {
      ko: "자유로운 노마드형",
      en: "Free Nomad Type",
      ja: "自由ノマド型", 
      "zh-CN": "自由游牧型",
      "zh-TW": "自由遊牧型",
      vi: "Kiểu du mục tự do",
      id: "Tipe nomad bebas"
    },
    description: {
      ko: "자율성이 생명! 나만의 방식으로 일하는 독립적 전문가",
      en: "Autonomy is life! Independent expert working in their own way",
      ja: "自律性が命！自分だけの方法で働く独立専門家",
      "zh-CN": "自主性是生命！以自己的方式工作的独立专家",
      "zh-TW": "自主性是生命！以自己的方式工作的獨立專家",
      vi: "Tự chủ là sự sống! Chuyên gia độc lập làm việc theo cách riêng",
      id: "Otonomi adalah hidup! Ahli independen yang bekerja dengan caranya sendiri"
    },
    longDescription: {
      ko: "시간과 장소에 구애받지 않고 자유롭게 일하기를 원합니다. 재택근무, 프리랜서, 1인 기업에 최적화된 타입입니다. 자율성과 독립성을 가장 중시하며 자신만의 리듬으로 일합니다. 창의성과 생산성이 높지만 협업이 어려울 수 있습니다.",
      en: "They want to work freely without being bound by time and place. They are optimized for remote work, freelancing, and solo entrepreneurship. They value autonomy and independence most and work at their own rhythm. They have high creativity and productivity, but collaboration may be difficult.",
      ja: "時間と場所に縛られず自由に働きたいと望みます。リモートワーク、フリーランス、一人起業に最適化されたタイプです。自律性と独立性を最も重視し、自分だけのリズムで働きます。創造性と生産性が高いですが、協力は難しいかもしれません。",
      "zh-CN": "希望不受时间和地点限制自由工作。优化用于远程工作、自由职业和单人创业。最重视自主性和独立性，以自己的节奏工作。创造力和生产力高，但协作可能困难。",
      "zh-TW": "希望不受時間和地點限制自由工作。優化用於遠程工作、自由職業和單人創業。最重視自主性和獨立性，以自己的節奏工作。創造力和生產力高，但協作可能困難。",
      vi: "Họ muốn làm việc tự do mà không bị ràng buộc bởi thời gian và địa điểm. Họ được tối ưu hóa cho làm việc từ xa, freelancing và khởi nghiệp một mình. Họ coi trọng tính tự chủ và độc lập nhất và làm việc theo nhịp điệu riêng của mình. Họ có tính sáng tạo và năng suất cao, nhưng hợp tác có thể khó khăn.",
      id: "Mereka ingin bekerja bebas tanpa terikat waktu dan tempat. Mereka dioptimalkan untuk kerja jarak jauh, freelancing, dan kewirausahaan solo. Mereka paling menghargai otonomi dan kemandirian dan bekerja dengan ritme mereka sendiri. Mereka memiliki kreativitas dan produktivitas tinggi, tetapi kolaborasi mungkin sulit."
    },
    pros: {
      ko: ["자율성", "창의성", "자유로움", "높은 만족도"],
      en: ["Autonomy", "Creativity", "Freedom", "High satisfaction"],
      ja: ["自律性", "創造性", "自由", "高い満足度"],
      "zh-CN": ["自主性", "创造性", "自由", "高满意度"],
      "zh-TW": ["自主性", "創造性", "自由", "高滿意度"],
      vi: ["Tự chủ", "Sáng tạo", "Tự do", "Hài lòng cao"],
      id: ["Otonomi", "Kreativitas", "Kebebasan", "Kepuasan tinggi"]
    },
    cons: {
      ko: ["불안정성", "협업 어려움", "경제적 변동"],
      en: ["Instability", "Collaboration difficulties", "Economic fluctuations"],
      ja: ["不安定性", "協力の困難", "経済的変動"],
      "zh-CN": ["不稳定性", "协作困难", "经济波动"],
      "zh-TW": ["不穩定性", "協作困難", "經濟波動"],
      vi: ["Không ổn định", "Khó khăn hợp tác", "Biến động kinh tế"],
      id: ["Ketidakstabilan", "Kesulitan kolaborasi", "Fluktuasi ekonomi"]
    },
    recommendedJobs: {
      ko: "프리랜서, 크리에이터, 원격근무, 스타트업",
      en: "Freelance, creator, remote work, startup",
      ja: "フリーランス、クリエイター、リモートワーク、スタートアップ",
      "zh-CN": "自由职业、创作者、远程工作、初创企业",
      "zh-TW": "自由職業、創作者、遠程工作、初創企業",
      vi: "Freelance, người sáng tạo, làm việc từ xa, startup",
      id: "Freelance, kreator, kerja remote, startup"
    },
    advice: {
      ko: "자유에는 책임이 따릅니다. 자기관리가 핵심입니다!",
      en: "Freedom comes with responsibility. Self-management is key!",
      ja: "自由には責任が伴います。自己管理が核心です！",
      "zh-CN": "自由伴随着责任。自我管理是关键！",
      "zh-TW": "自由伴隨著責任。自我管理是關鍵！",
      vi: "Tự do đi kèm với trách nhiệm. Quản lý bản thân là chìa khóa!",
      id: "Kebebasan datang dengan tanggung jawab. Manajemen diri adalah kuncinya!"
    },
    compatibility: {
      bestMatch: {
        ko: "🎭 유연한 카멜레온형 - 자유로운 협업",
        en: "🎭 Flexible Chameleon - Free collaboration",
        ja: "🎭 柔軟なカメレオン型 - 自由な協業",
        "zh-CN": "🎭 灵活变色龙型 - 自由合作",
        "zh-TW": "🎭 靈活變色龍型 - 自由合作",
        vi: "🎭 Kiểu tắc kè linh hoạt - Cộng tác tự do",
        id: "🎭 Tipe bunglon fleksibel - Kolaborasi bebas"
      },
      caution: {
        ko: "⚖️ 완벽한 밸런서형 - 체계 vs 자유 충돌",
        en: "⚖️ Perfect Balancer - System vs Freedom conflict",
        ja: "⚖️ 完璧なバランサー型 - システム対自由の衝突",
        "zh-CN": "⚖️ 完美平衡者型 - 系统与自由冲突",
        "zh-TW": "⚖️ 完美平衡者型 - 系統與自由衝突",
        vi: "⚖️ Kiểu cân bằng hoàn hảo - Xung đột hệ thống vs tự do",
        id: "⚖️ Tipe penyeimbang sempurna - Konflik sistem vs kebebasan"
      }
    }
  },
  {
    type: "Type6",
    emoji: "📈",
    title: {
      ko: "성장 지향 투자형",
      en: "Growth-Oriented Investment Type",
      ja: "成長志向投資型",
      "zh-CN": "成长导向投资型",
      "zh-TW": "成長導向投資型",
      vi: "Kiểu đầu tư hướng tăng trưởng",
      id: "Tipe investasi berorientasi pertumbuhan"
    },
    description: {
      ko: "미래를 위한 현재 투자! 장기적 관점의 전략가",
      en: "Current investment for the future! Strategic master with long-term perspective",
      ja: "未来のための現在投資！長期的視点の戦略家",
      "zh-CN": "为未来而进行的当前投资！具有长期眼光的战略家",
      "zh-TW": "為未來而進行的當前投資！具有長期眼光的戰略家",
      vi: "Đầu tư hiện tại cho tương lai! Nhà chiến lược có tầm nhìn dài hạn",
      id: "Investasi saat ini untuk masa depan! Strategis master dengan perspektif jangka panjang"
    },
    longDescription: {
      ko: "현재의 여유보다 미래의 성장을 선택하는 타입입니다. 퇴근 후에도 자기계발에 투자하고 의미 있는 야근은 마다하지 않습니다. 단기적으론 힘들지만 장기적으론 큰 성과를 냅니다. 계획적이고 목표지향적입니다.",
      en: "A type that chooses future growth over current leisure. They invest in self-development even after work and don't mind meaningful overtime. It's difficult in the short term but yields great results in the long term. They are systematic and goal-oriented.",
      ja: "現在の余裕より将来の成長を選ぶタイプです。退勤後も自己啓発に投資し、意味のある残業は厭いません。短期的には大変ですが、長期的には大きな成果を出します。計画的で目標志向です。",
      "zh-CN": "选择未来成长而非当前悠闲的类型。下班后也投资自我发展，不介意有意义的加班。短期困难但长期会有大成果。有计划性和目标导向。",
      "zh-TW": "選擇未來成長而非當前悠閒的類型。下班後也投資自我發展，不介意有意義的加班。短期困難但長期會有大成果。有計劃性和目標導向。",
      vi: "Kiểu người chọn sự phát triển tương lai hơn là sự nhàn rỗi hiện tại. Họ đầu tư vào phát triển bản thân ngay cả sau giờ làm việc và không ngại làm thêm giờ có ý nghĩa. Khó khăn trong ngắn hạn nhưng mang lại kết quả lớn trong dài hạn. Họ có tính kế hoạch và định hướng mục tiêu.",
      id: "Tipe yang memilih pertumbuhan masa depan daripada waktu luang saat ini. Mereka berinvestasi dalam pengembangan diri bahkan setelah jam kerja dan tidak keberatan lembur yang bermakna. Sulit dalam jangka pendek tetapi menghasilkan hasil besar dalam jangka panjang. Mereka sistematis dan berorientasi tujuan."
    },
    pros: {
      ko: ["장기적 성장", "전문성", "경쟁력", "계획성"],
      en: ["Long-term growth", "Expertise", "Competitiveness", "Planning"],
      ja: ["長期的成長", "専門性", "競争力", "計画性"],
      "zh-CN": ["长期成长", "专业性", "竞争力", "计划性"],
      "zh-TW": ["長期成長", "專業性", "競爭力", "計劃性"],
      vi: ["Tăng trưởng dài hạn", "Chuyên môn", "Năng lực cạnh tranh", "Lập kế hoạch"],
      id: ["Pertumbuhan jangka panjang", "Keahlian", "Daya saing", "Perencanaan"]
    },
    cons: {
      ko: ["현재 행복 희생", "번아웃 위험", "과도한 몰입"],
      en: ["Sacrificing current happiness", "Burnout risk", "Excessive immersion"],
      ja: ["現在の幸福の犠牲", "燃え尽き症候群のリスク", "過度な没入"],
      "zh-CN": ["牺牲当前幸福", "倦怠风险", "过度投入"],
      "zh-TW": ["犧牲當前幸福", "倦怠風險", "過度投入"],
      vi: ["Hy sinh hạnh phúc hiện tại", "Nguy cơ kiệt sức", "Đắm chìm quá mức"],
      id: ["Mengorbankan kebahagiaan saat ini", "Risiko kelelahan", "Imersi berlebihan"]
    },
    recommendedJobs: {
      ko: "전문직, 스타트업, 연구개발, 교육",
      en: "Professionals, startup, R&D, education",
      ja: "専門職、スタートアップ、研究開発、教育",
      "zh-CN": "专业职业、初创企业、研发、教育",
      "zh-TW": "專業職業、初創企業、研發、教育",
      vi: "Chuyên nghiệp, startup, R&D, giáo dục",
      id: "Profesional, startup, R&D, pendidikan"
    },
    advice: {
      ko: "미래도 중요하지만 현재의 행복도 소중합니다. 균형을 찾으세요!",
      en: "The future is important, but current happiness is also precious. Find balance!",
      ja: "未来も重要ですが、現在の幸せも大切です。バランスを見つけてください！",
      "zh-CN": "未来很重要，但现在的幸福也很珍贵。找到平衡！",
      "zh-TW": "未來很重要，但現在的幸福也很珍貴。找到平衡！",
      vi: "Tương lai quan trọng, nhưng hạnh phúc hiện tại cũng quý giá. Hãy tìm sự cân bằng!",
      id: "Masa depan penting, tapi kebahagiaan saat ini juga berharga. Temukan keseimbangan!"
    },
    compatibility: {
      bestMatch: {
        ko: "🔥 열정 워커홀릭형, ⚖️ 완벽한 밸런서형 - 함께 성장",
        en: "🔥 Passionate Workaholic, ⚖️ Perfect Balancer - Growing together",
        ja: "🔥 情熱ワーカホリック型、⚖️ 完璧なバランサー型 - 共に成長",
        "zh-CN": "🔥 热情工作狂型，⚖️ 完美平衡者型 - 共同成长",
        "zh-TW": "🔥 熱情工作狂型，⚖️ 完美平衡者型 - 共同成長",
        vi: "🔥 Kiểu cuồng công việc đam mê, ⚖️ Kiểu cân bằng hoàn hảo - Cùng phát triển",
        id: "🔥 Tipe workaholic penuh gairah, ⚖️ Tipe penyeimbang sempurna - Berkembang bersama"
      },
      caution: {
        ko: "🌴 힐링 라이프형 - 가치관 차이 큼",
        en: "🌴 Healing Life Type - Large value differences",
        ja: "🌴 ヒーリングライフ型 - 価値観の違いが大きい",
        "zh-CN": "🌴 治愈生活型 - 价值观差异大",
        "zh-TW": "🌴 治癒生活型 - 價值觀差異大",
        vi: "🌴 Kiểu cuộc sống chữa lành - Khác biệt giá trị lớn",
        id: "🌴 Tipe kehidupan penyembuhan - Perbedaan nilai yang besar"
      }
    }
  }
];

export function calculateWorkLifeBalanceResult(answers: string[], questions: WorkLifeBalanceQuestion[]): WorkLifeBalanceResult {
  const scores = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 채점 로직
  answers.forEach((answer, index) => {
    const question = questions[index];
    if (!question) return;

    switch (question.id) {
      case 1:
        if (answer === 'A') { scores.Type1 += 8; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; scores.Type4 += 2; }
        else if (answer === 'C') { scores.Type3 += 8; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 2:
        if (answer === 'A') { scores.Type1 += 3; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; scores.Type4 += 2; }
        else if (answer === 'C') { scores.Type3 += 8; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 3:
        if (answer === 'A') { scores.Type1 += 8; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; }
        else if (answer === 'C') { scores.Type3 += 3; scores.Type5 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 4:
        if (answer === 'A') { scores.Type6 += 8; scores.Type1 += 3; }
        else if (answer === 'B') { scores.Type2 += 3; }
        else if (answer === 'C') { scores.Type3 += 8; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 5:
        if (answer === 'A') { scores.Type1 += 3; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; scores.Type4 += 2; }
        else if (answer === 'C') { scores.Type3 += 3; scores.Type5 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 6:
        if (answer === 'A') { scores.Type1 += 8; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; }
        else if (answer === 'C') { scores.Type5 += 8; scores.Type3 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 7:
        if (answer === 'A') { scores.Type1 += 3; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; scores.Type4 += 2; }
        else if (answer === 'C') { scores.Type3 += 3; scores.Type5 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 8:
        if (answer === 'A') { scores.Type1 += 3; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; }
        else if (answer === 'C') { scores.Type5 += 8; scores.Type3 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 9:
        if (answer === 'A') { scores.Type6 += 8; scores.Type1 += 3; }
        else if (answer === 'B') { scores.Type2 += 3; scores.Type4 += 2; }
        else if (answer === 'C') { scores.Type3 += 8; scores.Type5 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 10:
        if (answer === 'A') { scores.Type6 += 8; scores.Type1 += 3; }
        else if (answer === 'B') { scores.Type2 += 3; }
        else if (answer === 'C') { scores.Type3 += 3; scores.Type5 += 2; }
        else if (answer === 'D') { scores.Type5 += 8; scores.Type4 += 2; }
        break;
      case 11:
        if (answer === 'A') { scores.Type1 += 8; scores.Type6 += 2; }
        else if (answer === 'B') { scores.Type2 += 3; }
        else if (answer === 'C') { scores.Type5 += 8; scores.Type3 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
      case 12:
        if (answer === 'A') { scores.Type6 += 8; scores.Type1 += 3; }
        else if (answer === 'B') { scores.Type2 += 3; }
        else if (answer === 'C') { scores.Type3 += 3; scores.Type5 += 2; }
        else if (answer === 'D') { scores.Type4 += 3; scores.Type5 += 2; }
        break;
    }
  });

  // 최고 점수 찾기
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore) || 'Type1';

  // 결과 반환
  const result = workLifeBalanceResults.find(r => r.type === resultType);
  return result || workLifeBalanceResults[0];
}
