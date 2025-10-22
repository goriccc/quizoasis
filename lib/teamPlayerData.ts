export interface TeamPlayerQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface TeamPlayerResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  recommendedRole: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const teamPlayerQuestions: TeamPlayerQuestion[] = [
  {
    id: 1,
    question: {
      ko: "새로운 팀 프로젝트가 시작되었습니다. 당신의 첫 반응은?",
      en: "A new team project has started. What's your first reaction?",
      ja: "新しいチームプロジェクトが始まりました。あなたの最初の反応は？",
      'zh-CN': "新的团队项目开始了。你的第一反应是？",
      'zh-TW': "新的團隊項目開始了。你的第一反應是？",
      id: "Proyek tim baru telah dimulai. Reaksi pertama Anda adalah?",
      vi: "Một dự án nhóm mới đã bắt đầu. Phản ứng đầu tiên của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "\"제가 리드하겠습니다\" 자연스럽게 주도권을 잡음",
          en: "\"I'll take the lead\" naturally taking initiative",
          ja: "「私がリードします」自然に主導権を握る",
          'zh-CN': "「我来领导」自然地掌握主导权",
          'zh-TW': "「我來領導」自然地掌握主導權",
          id: "\"Saya akan memimpin\" secara alami mengambil inisiatif",
          vi: "\"Tôi sẽ dẫn đầu\" một cách tự nhiên nắm quyền chủ động"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"어떻게 도와드릴까요?\" 필요한 역할 찾기",
          en: "\"How can I help?\" looking for needed role",
          ja: "「どうお手伝いしましょうか？」必要な役割を探す",
          'zh-CN': "「我能怎么帮助？」寻找需要的角色",
          'zh-TW': "「我能怎麼幫助？」尋找需要的角色",
          id: "\"Bagaimana saya bisa membantu?\" mencari peran yang dibutuhkan",
          vi: "\"Tôi có thể giúp gì?\" tìm kiếm vai trò cần thiết"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"이런 방법은 어떨까요?\" 아이디어 제시",
          en: "\"How about this approach?\" suggesting ideas",
          ja: "「こんな方法はいかがですか？」アイデアを提示",
          'zh-CN': "「这种方法怎么样？」提出想法",
          'zh-TW': "「這種方法怎麼樣？」提出想法",
          id: "\"Bagaimana dengan pendekatan ini?\" menyarankan ide",
          vi: "\"Cách tiếp cận này thế nào?\" đề xuất ý tưởng"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"일단 시작해봅시다\" 바로 실행 준비",
          en: "\"Let's start right away\" preparing for immediate action",
          ja: "「とりあえず始めてみましょう」すぐに実行準備",
          'zh-CN': "「先开始吧」立即准备执行",
          'zh-TW': "「先開始吧」立即準備執行",
          id: "\"Mari kita mulai saja\" langsung mempersiapkan eksekusi",
          vi: "\"Hãy bắt đầu ngay\" chuẩn bị thực hiện ngay lập tức"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "팀 회의에서 당신은 주로?",
      en: "In team meetings, you mainly?",
      ja: "チーム会議で、あなたは主に？",
      'zh-CN': "在团队会议中，你主要？",
      'zh-TW': "在團隊會議中，你主要？",
      id: "Dalam rapat tim, Anda terutama?",
      vi: "Trong cuộc họp nhóm, bạn chủ yếu?"
    },
    options: [
      {
        text: {
          ko: "회의를 이끌고 결론을 도출함",
          en: "Lead the meeting and draw conclusions",
          ja: "会議をリードして結論を導く",
          'zh-CN': "主持会议并得出结论",
          'zh-TW': "主持會議並得出結論",
          id: "Memimpin rapat dan menarik kesimpulan",
          vi: "Dẫn dắt cuộc họp và rút ra kết luận"
        },
        scores: { Type1: 3, Type6: 2 }
      },
      {
        text: {
          ko: "모두의 의견을 경청하고 정리함",
          en: "Listen to everyone's opinions and organize them",
          ja: "みんなの意見を傾聴して整理する",
          'zh-CN': "倾听所有人的意见并整理",
          'zh-TW': "傾聽所有人的意見並整理",
          id: "Mendengarkan pendapat semua orang dan mengorganisirnya",
          vi: "Lắng nghe ý kiến của mọi người và tổ chức chúng"
        },
        scores: { Type2: 3, Type5: 2 }
      },
      {
        text: {
          ko: "창의적인 아이디어를 많이 제시함",
          en: "Present many creative ideas",
          ja: "創造的なアイデアをたくさん提示する",
          'zh-CN': "提出很多创意想法",
          'zh-TW': "提出很多創意想法",
          id: "Menyajikan banyak ide kreatif",
          vi: "Đưa ra nhiều ý tưởng sáng tạo"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "실행 가능성을 현실적으로 검토함",
          en: "Realistically review feasibility",
          ja: "実行可能性を現実的に検討する",
          'zh-CN': "现实地审查可行性",
          'zh-TW': "現實地審查可行性",
          id: "Mengevaluasi kelayakan secara realistis",
          vi: "Đánh giá tính khả thi một cách thực tế"
        },
        scores: { Type6: 8, Type4: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "업무 분담을 할 때 당신이 선호하는 역할은?",
      en: "When dividing tasks, what role do you prefer?",
      ja: "業務分担をする時、あなたが好む役割は？",
      'zh-CN': "在分配任务时，你偏好的角色是？",
      'zh-TW': "在分配任務時，你偏好的角色是？",
      id: "Saat membagi tugas, peran apa yang Anda sukai?",
      vi: "Khi phân chia công việc, bạn thích vai trò nào?"
    },
    options: [
      {
        text: {
          ko: "전체적인 방향 설정과 총괄",
          en: "Setting overall direction and general management",
          ja: "全体的な方向設定と総括",
          'zh-CN': "设定整体方向和总管理",
          'zh-TW': "設定整體方向和總管理",
          id: "Menetapkan arah keseluruhan dan manajemen umum",
          vi: "Thiết lập định hướng tổng thể và quản lý chung"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀원들이 필요로 하는 지원",
          en: "Support that team members need",
          ja: "チームメンバーが必要とする支援",
          'zh-CN': "团队成员需要的支持",
          'zh-TW': "團隊成員需要的支持",
          id: "Dukungan yang dibutuhkan anggota tim",
          vi: "Hỗ trợ mà các thành viên nhóm cần"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "기획과 전략 수립",
          en: "Planning and strategy development",
          ja: "企画と戦略の策定",
          'zh-CN': "规划和战略制定",
          'zh-TW': "規劃和戰略制定",
          id: "Perencanaan dan pengembangan strategi",
          vi: "Lập kế hoạch và phát triển chiến lược"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "구체적인 실행과 완성",
          en: "Specific execution and completion",
          ja: "具体的な実行と完成",
          'zh-CN': "具体执行和完成",
          'zh-TW': "具體執行和完成",
          id: "Eksekusi spesifik dan penyelesaian",
          vi: "Thực hiện cụ thể và hoàn thành"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "팀원들과 의견이 충돌할 때?",
      en: "When you have conflicting opinions with team members?",
      ja: "チームメンバーと意見が衝突する時？",
      'zh-CN': "当与团队成员意见冲突时？",
      'zh-TW': "當與團隊成員意見衝突時？",
      id: "Ketika Anda memiliki pendapat yang bertentangan dengan anggota tim?",
      vi: "Khi bạn có ý kiến xung đột với các thành viên nhóm?"
    },
    options: [
      {
        text: {
          ko: "명확한 기준으로 결정을 내림",
          en: "Make decisions based on clear criteria",
          ja: "明確な基準で決定を下す",
          'zh-CN': "基于明确标准做决定",
          'zh-TW': "基於明確標準做決定",
          id: "Membuat keputusan berdasarkan kriteria yang jelas",
          vi: "Đưa ra quyết định dựa trên tiêu chí rõ ràng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "양측 의견을 조율하고 중재함",
          en: "Coordinate and mediate both opinions",
          ja: "両方の意見を調整して仲介する",
          'zh-CN': "协调和调解双方意见",
          'zh-TW': "協調和調解雙方意見",
          id: "Mengkoordinasikan dan memediasi kedua pendapat",
          vi: "Điều phối và hòa giải cả hai ý kiến"
        },
        scores: { Type5: 8, Type2: 2 }
      },
      {
        text: {
          ko: "새로운 대안을 제시함",
          en: "Present new alternatives",
          ja: "新しい代替案を提示する",
          'zh-CN': "提出新的替代方案",
          'zh-TW': "提出新的替代方案",
          id: "Menyajikan alternatif baru",
          vi: "Đưa ra các giải pháp thay thế mới"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "빠른 테스트로 최선을 찾음",
          en: "Find the best through quick testing",
          ja: "素早いテストで最善を見つける",
          'zh-CN': "通过快速测试找到最佳方案",
          'zh-TW': "通過快速測試找到最佳方案",
          id: "Mencari yang terbaik melalui pengujian cepat",
          vi: "Tìm ra giải pháp tốt nhất thông qua thử nghiệm nhanh"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "프로젝트 마감이 코앞인데 문제가 발생했다면?",
      en: "If a problem occurs right before the project deadline?",
      ja: "プロジェクト締切が目の前なのに問題が発生したら？",
      'zh-CN': "如果项目截止日期前出现问题？",
      'zh-TW': "如果項目截止日期前出現問題？",
      id: "Jika masalah terjadi tepat sebelum tenggat waktu proyek?",
      vi: "Nếu vấn đề xảy ra ngay trước thời hạn dự án?"
    },
    options: [
      {
        text: {
          ko: "즉시 팀을 모아 대책 회의",
          en: "Immediately gather the team for a countermeasure meeting",
          ja: "すぐにチームを集めて対策会議",
          'zh-CN': "立即召集团队开对策会议",
          'zh-TW': "立即召集團隊開對策會議",
          id: "Segera kumpulkan tim untuk rapat penanggulangan",
          vi: "Ngay lập tức tập hợp nhóm để họp đối phó"
        },
        scores: { Type1: 3, Type5: 2 }
      },
      {
        text: {
          ko: "각자 할 수 있는 일을 찾아 분담",
          en: "Find what each person can do and divide tasks",
          ja: "それぞれができることを見つけて分担",
          'zh-CN': "找到每个人能做的事并分工",
          'zh-TW': "找到每個人能做的事並分工",
          id: "Mencari apa yang bisa dilakukan masing-masing dan membagi tugas",
          vi: "Tìm việc mỗi người có thể làm và phân chia"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "문제를 다른 관점에서 접근",
          en: "Approach the problem from a different perspective",
          ja: "問題を別の視点からアプローチ",
          'zh-CN': "从不同角度处理问题",
          'zh-TW': "從不同角度處理問題",
          id: "Mendekati masalah dari perspektif yang berbeda",
          vi: "Tiếp cận vấn đề từ góc độ khác"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "밤을 새워서라도 해결",
          en: "Solve it even if it means staying up all night",
          ja: "徹夜してでも解決する",
          'zh-CN': "即使熬夜也要解决",
          'zh-TW': "即使熬夜也要解決",
          id: "Menyelesaikannya meski harus begadang",
          vi: "Giải quyết ngay cả khi phải thức cả đêm"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "팀 분위기가 가장 좋을 때는?",
      en: "When is the team atmosphere at its best?",
      ja: "チームの雰囲気が最も良い時は？",
      'zh-CN': "团队氛围最好的时候是？",
      'zh-TW': "團隊氛圍最好的時候是？",
      id: "Kapan suasana tim paling baik?",
      vi: "Khi nào bầu không khí nhóm tốt nhất?"
    },
    options: [
      {
        text: {
          ko: "목표가 명확하고 방향이 잡혔을 때",
          en: "When goals are clear and direction is set",
          ja: "目標が明確で方向が定まった時",
          'zh-CN': "当目标明确、方向确定时",
          'zh-TW': "當目標明確、方向確定時",
          id: "Ketika tujuan jelas dan arah sudah ditetapkan",
          vi: "Khi mục tiêu rõ ràng và định hướng đã được thiết lập"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "서로 배려하며 협력할 때",
          en: "When caring for each other and cooperating",
          ja: "お互いを思いやり協力する時",
          'zh-CN': "当相互关怀和合作时",
          'zh-TW': "當相互關懷和合作時",
          id: "Ketika saling peduli dan bekerja sama",
          vi: "Khi quan tâm lẫn nhau và hợp tác"
        },
        scores: { Type2: 3, Type5: 2 }
      },
      {
        text: {
          ko: "자유롭게 아이디어를 나눌 때",
          en: "When freely sharing ideas",
          ja: "自由にアイデアを共有する時",
          'zh-CN': "当自由分享想法时",
          'zh-TW': "當自由分享想法時",
          id: "Ketika bebas berbagi ide",
          vi: "Khi tự do chia sẻ ý tưởng"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "성과가 눈에 보일 때",
          en: "When results are visible",
          ja: "成果が見える時",
          'zh-CN': "当成果可见时",
          'zh-TW': "當成果可見時",
          id: "Ketika hasil terlihat",
          vi: "Khi kết quả có thể nhìn thấy"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "당신이 가장 스트레스 받는 상황은?",
      en: "What situation stresses you out the most?",
      ja: "あなたが最もストレスを感じる状況は？",
      'zh-CN': "什么情况让你压力最大？",
      'zh-TW': "什麼情況讓你壓力最大？",
      id: "Situasi apa yang paling membuat Anda stres?",
      vi: "Tình huống nào khiến bạn căng thẳng nhất?"
    },
    options: [
      {
        text: {
          ko: "방향성 없이 흐지부지될 때",
          en: "When there's no direction and things fall apart",
          ja: "方向性がなくてだらだらする時",
          'zh-CN': "当没有方向、事情散乱时",
          'zh-TW': "當沒有方向、事情散亂時",
          id: "Ketika tidak ada arah dan semuanya berantakan",
          vi: "Khi không có định hướng và mọi thứ rối tung"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀 내 갈등과 불화가 있을 때",
          en: "When there's conflict and discord in the team",
          ja: "チーム内に葛藤と不和がある時",
          'zh-CN': "当团队内有冲突和不和时",
          'zh-TW': "當團隊內有衝突和不和時",
          id: "Ketika ada konflik dan perselisihan dalam tim",
          vi: "Khi có xung đột và bất hòa trong nhóm"
        },
        scores: { Type5: 8, Type2: 2 }
      },
      {
        text: {
          ko: "창의성이 억압당할 때",
          en: "When creativity is suppressed",
          ja: "創造性が抑圧される時",
          'zh-CN': "当创造力被压制时",
          'zh-TW': "當創造力被壓制時",
          id: "Ketika kreativitas ditekan",
          vi: "Khi sự sáng tạo bị đàn áp"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "계획만 하고 실행이 안 될 때",
          en: "When only planning and no execution",
          ja: "計画だけして実行されない時",
          'zh-CN': "当只计划不执行时",
          'zh-TW': "當只計劃不執行時",
          id: "Ketika hanya merencanakan tanpa eksekusi",
          vi: "Khi chỉ lập kế hoạch mà không thực hiện"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "팀원이 실수를 했을 때 당신은?",
      en: "When a team member makes a mistake, you?",
      ja: "チームメンバーがミスをした時、あなたは？",
      'zh-CN': "当团队成员犯错时，你？",
      'zh-TW': "當團隊成員犯錯時，你？",
      id: "Ketika anggota tim melakukan kesalahan, Anda?",
      vi: "Khi thành viên nhóm mắc lỗi, bạn?"
    },
    options: [
      {
        text: {
          ko: "원인을 파악하고 재발 방지책 마련",
          en: "Identify the cause and prepare prevention measures",
          ja: "原因を把握して再発防止策を準備",
          'zh-CN': "找出原因并制定预防措施",
          'zh-TW': "找出原因並制定預防措施",
          id: "Mengidentifikasi penyebab dan menyiapkan langkah pencegahan",
          vi: "Xác định nguyên nhân và chuẩn bị biện pháp phòng ngừa"
        },
        scores: { Type6: 8, Type1: 2 }
      },
      {
        text: {
          ko: "\"괜찮아요\" 격려하며 함께 해결",
          en: "\"It's okay\" encourage and solve together",
          ja: "「大丈夫」励ましながら一緒に解決",
          'zh-CN': "「没关系」鼓励并一起解决",
          'zh-TW': "「沒關係」鼓勵並一起解決",
          id: "\"Tidak apa-apa\" semangati dan selesaikan bersama",
          vi: "\"Không sao\" động viên và giải quyết cùng nhau"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"이렇게 해보면 어떨까요?\" 대안 제시",
          en: "\"How about trying this?\" suggest alternatives",
          ja: "「こうしてみたらどう？」代替案を提示",
          'zh-CN': "「试试这样做怎么样？」提出替代方案",
          'zh-TW': "「試試這樣做怎麼樣？」提出替代方案",
          id: "\"Bagaimana kalau mencoba ini?\" menyarankan alternatif",
          vi: "\"Thử cách này thì sao?\" đề xuất giải pháp thay thế"
        },
        scores: { Type3: 3, Type5: 2 }
      },
      {
        text: {
          ko: "직접 나서서 빠르게 수습",
          en: "Step forward and quickly fix it",
          ja: "直接出て素早く収拾",
          'zh-CN': "直接出面快速处理",
          'zh-TW': "直接出面快速處理",
          id: "Langsung maju dan cepat memperbaikinya",
          vi: "Trực tiếp ra tay và nhanh chóng khắc phục"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "당신이 팀에 기여하는 가장 큰 부분은?",
      en: "What's the biggest part you contribute to the team?",
      ja: "あなたがチームに貢献する最大の部分は？",
      'zh-CN': "你对团队贡献最大的部分是？",
      'zh-TW': "你對團隊貢獻最大的部分是？",
      id: "Bagian terbesar yang Anda kontribusikan kepada tim?",
      vi: "Phần lớn nhất bạn đóng góp cho nhóm là gì?"
    },
    options: [
      {
        text: {
          ko: "명확한 방향 제시와 의사결정",
          en: "Clear direction and decision making",
          ja: "明確な方向提示と意思決定",
          'zh-CN': "明确的方向指导和决策",
          'zh-TW': "明確的方向指導和決策",
          id: "Arah yang jelas dan pengambilan keputusan",
          vi: "Định hướng rõ ràng và ra quyết định"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "팀 분위기와 사기 관리",
          en: "Team atmosphere and morale management",
          ja: "チームの雰囲気と士気管理",
          'zh-CN': "团队氛围和士气管理",
          'zh-TW': "團隊氛圍和士氣管理",
          id: "Suasana tim dan manajemen moral",
          vi: "Bầu không khí nhóm và quản lý tinh thần"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "참신한 아이디어와 혁신",
          en: "Fresh ideas and innovation",
          ja: "斬新なアイデアと革新",
          'zh-CN': "新颖的想法和创新",
          'zh-TW': "新穎的想法和創新",
          id: "Ide segar dan inovasi",
          vi: "Ý tưởng mới mẻ và đổi mới"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "확실한 결과물 완성",
          en: "Reliable completion of deliverables",
          ja: "確実な成果物の完成",
          'zh-CN': "可靠地完成交付物",
          'zh-TW': "可靠地完成交付物",
          id: "Penyelesaian hasil yang dapat diandalkan",
          vi: "Hoàn thành kết quả đáng tin cậy"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "팀 회식에서 당신의 모습은?",
      en: "What are you like at team dinners?",
      ja: "チーム懇親会でのあなたの姿は？",
      'zh-CN': "在团队聚餐中你是什么样子？",
      'zh-TW': "在團隊聚餐中你是什麼樣子？",
      id: "Seperti apa Anda di makan malam tim?",
      vi: "Bạn như thế nào trong bữa tối nhóm?"
    },
    options: [
      {
        text: {
          ko: "자리를 주도하며 분위기 리드",
          en: "Lead the atmosphere and take charge",
          ja: "席を主導して雰囲気をリード",
          'zh-CN': "主导座位并引领氛围",
          'zh-TW': "主導座位並引領氛圍",
          id: "Memimpin suasana dan mengambil alih",
          vi: "Dẫn dắt bầu không khí và nắm quyền"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "조용한 팀원들도 챙기며 배려",
          en: "Take care of quiet team members with consideration",
          ja: "静かなチームメンバーも気にかけて配慮",
          'zh-CN': "照顾安静的团队成员",
          'zh-TW': "照顧安靜的團隊成員",
          id: "Memperhatikan anggota tim yang pendiam",
          vi: "Chăm sóc các thành viên nhóm im lặng"
        },
        scores: { Type2: 3, Type5: 2 }
      },
      {
        text: {
          ko: "재미있는 이야깃거리 제공",
          en: "Provide interesting conversation topics",
          ja: "面白い話のネタを提供",
          'zh-CN': "提供有趣的话题",
          'zh-TW': "提供有趣的話題",
          id: "Memberikan topik pembicaraan yang menarik",
          vi: "Cung cấp chủ đề trò chuyện thú vị"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "편하게 즐기되 너무 늦지 않게 귀가",
          en: "Enjoy comfortably but go home not too late",
          ja: "楽しく過ごすが遅くならないよう帰宅",
          'zh-CN': "舒适地享受但不会太晚回家",
          'zh-TW': "舒適地享受但不會太晚回家",
          id: "Menikmati dengan nyaman tapi pulang tidak terlalu malam",
          vi: "Thưởng thức thoải mái nhưng về nhà không quá muộn"
        },
        scores: { Type6: 8, Type4: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "새로운 팀원이 합류했을 때?",
      en: "When a new team member joins?",
      ja: "新しいチームメンバーが参加した時？",
      'zh-CN': "当新团队成员加入时？",
      'zh-TW': "當新團隊成員加入時？",
      id: "Ketika anggota tim baru bergabung?",
      vi: "Khi thành viên nhóm mới tham gia?"
    },
    options: [
      {
        text: {
          ko: "팀 규칙과 프로세스를 설명",
          en: "Explain team rules and processes",
          ja: "チームルールとプロセスを説明",
          'zh-CN': "解释团队规则和流程",
          'zh-TW': "解釋團隊規則和流程",
          id: "Menjelaskan aturan dan proses tim",
          vi: "Giải thích quy tắc và quy trình nhóm"
        },
        scores: { Type6: 8, Type1: 2 }
      },
      {
        text: {
          ko: "적응할 수 있도록 세심하게 케어",
          en: "Carefully care so they can adapt",
          ja: "適応できるよう細心にケア",
          'zh-CN': "细心照顾让他们适应",
          'zh-TW': "細心照顧讓他們適應",
          id: "Merawat dengan hati-hati agar mereka bisa beradaptasi",
          vi: "Chăm sóc cẩn thận để họ có thể thích nghi"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "새로운 시각을 환영하며 의견 경청",
          en: "Welcome new perspectives and listen to opinions",
          ja: "新しい視点を歓迎し意見を傾聴",
          'zh-CN': "欢迎新视角并倾听意见",
          'zh-TW': "歡迎新視角並傾聽意見",
          id: "Menyambut perspektif baru dan mendengarkan pendapat",
          vi: "Chào đón góc nhìn mới và lắng nghe ý kiến"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "실무를 통해 자연스럽게 적응하도록",
          en: "Let them adapt naturally through actual work",
          ja: "実務を通じて自然に適応させる",
          'zh-CN': "通过实际工作自然适应",
          'zh-TW': "通過實際工作自然適應",
          id: "Biarkan mereka beradaptasi secara alami melalui pekerjaan nyata",
          vi: "Để họ thích nghi tự nhiên thông qua công việc thực tế"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "이상적인 팀이란?",
      en: "What is an ideal team?",
      ja: "理想的なチームとは？",
      'zh-CN': "理想的团队是什么？",
      'zh-TW': "理想的團隊是什麼？",
      id: "Apa itu tim yang ideal?",
      vi: "Nhóm lý tưởng là gì?"
    },
    options: [
      {
        text: {
          ko: "명확한 리더십과 체계가 있는 팀",
          en: "A team with clear leadership and systems",
          ja: "明確なリーダーシップとシステムがあるチーム",
          'zh-CN': "有明确领导和系统的团队",
          'zh-TW': "有明確領導和系統的團隊",
          id: "Tim dengan kepemimpinan dan sistem yang jelas",
          vi: "Nhóm có lãnh đạo rõ ràng và hệ thống"
        },
        scores: { Type1: 3, Type6: 2 }
      },
      {
        text: {
          ko: "서로 존중하고 배려하는 팀",
          en: "A team that respects and cares for each other",
          ja: "お互いを尊重し配慮するチーム",
          'zh-CN': "相互尊重和关怀的团队",
          'zh-TW': "相互尊重和關懷的團隊",
          id: "Tim yang saling menghormati dan peduli",
          vi: "Nhóm tôn trọng và quan tâm lẫn nhau"
        },
        scores: { Type5: 8, Type2: 2 }
      },
      {
        text: {
          ko: "자유롭고 창의적인 팀",
          en: "A free and creative team",
          ja: "自由で創造的なチーム",
          'zh-CN': "自由和创新的团队",
          'zh-TW': "自由和創新的團隊",
          id: "Tim yang bebas dan kreatif",
          vi: "Nhóm tự do và sáng tạo"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "빠르게 실행하고 성과 내는 팀",
          en: "A team that executes quickly and produces results",
          ja: "素早く実行し成果を出すチーム",
          'zh-CN': "快速执行并产生成果的团队",
          'zh-TW': "快速執行並產生成果的團隊",
          id: "Tim yang mengeksekusi dengan cepat dan menghasilkan hasil",
          vi: "Nhóm thực hiện nhanh chóng và tạo ra kết quả"
        },
        scores: { Type4: 3 }
      }
    ]
  }
];

export const teamPlayerResults: TeamPlayerResult[] = [
  {
    type: "Type1",
    emoji: "👑",
    title: {
      ko: "타고난 리더형",
      en: "Natural Leader",
      ja: "生まれつきのリーダー型",
      'zh-CN': "天生的领导者型",
      'zh-TW': "天生的領導者型",
      id: "Pemimpin Alami",
      vi: "Kiểu Lãnh Đạo Bẩm Sinh"
    },
    description: {
      ko: "팀을 이끄는 카리스마! 방향을 제시하는 리더십의 소유자",
      en: "Charismatic team leader! Owner of leadership that provides direction",
      ja: "チームを導くカリスマ！方向性を示すリーダーシップの持ち主",
      'zh-CN': "有魅力的团队领导者！拥有提供方向的领导力",
      'zh-TW': "有魅力的團隊領導者！擁有提供方向的領導力",
      id: "Pemimpin tim yang karismatik! Pemilik kepemimpinan yang memberikan arah",
      vi: "Lãnh đạo nhóm đầy sức hút! Người sở hữu khả năng lãnh đạo định hướng"
    },
    characteristics: {
      ko: "명확한 방향성과 결단력으로 팀을 이끕니다. 전체를 조망하며 의사결정을 내리고, 책임감이 강해 끝까지 책임집니다. 목표 지향적이며 팀을 동기부여하는 능력이 뛰어납니다. 때로 독단적으로 보일 수 있지만 결과로 증명합니다.",
      en: "Leads the team with clear direction and decisiveness. Oversees the whole picture, makes decisions, and has strong responsibility to see things through. Goal-oriented with excellent ability to motivate the team. May seem autocratic at times but proves it with results.",
      ja: "明確な方向性と決断力でチームを導きます。全体を見渡して意思決定を行い、責任感が強く最後まで責任を持ちます。目標志向でチームを動機づける能力に優れています。時には独断的に見えることもありますが、結果で証明します。",
      'zh-CN': "以明确的方向性和决断力领导团队。纵观全局做出决策，责任感强，坚持到底。目标导向，具有出色的团队激励能力。有时可能显得独断，但用结果证明。",
      'zh-TW': "以明確的方向性和決斷力領導團隊。縱觀全局做出決策，責任感強，堅持到底。目標導向，具有出色的團隊激勵能力。有時可能顯得獨斷，但用結果證明。",
      id: "Memimpin tim dengan arah yang jelas dan ketegasan. Mengawasi keseluruhan, membuat keputusan, dan memiliki tanggung jawab yang kuat untuk menyelesaikan. Berorientasi tujuan dengan kemampuan luar biasa untuk memotivasi tim. Terkadang terlihat otoriter tapi membuktikannya dengan hasil.",
      vi: "Dẫn dắt nhóm với định hướng rõ ràng và quyết đoán. Quan sát toàn cảnh, đưa ra quyết định và có trách nhiệm mạnh mẽ để hoàn thành. Định hướng mục tiêu với khả năng động viên nhóm xuất sắc. Đôi khi có thể trông độc đoán nhưng chứng minh bằng kết quả."
    },
    pros: [
      {
        ko: "결단력",
        en: "Decisiveness",
        ja: "決断力",
        'zh-CN': "决断力",
        'zh-TW': "決斷力",
        id: "Ketegasan",
        vi: "Quyết đoán"
      },
      {
        ko: "책임감",
        en: "Responsibility",
        ja: "責任感",
        'zh-CN': "责任感",
        'zh-TW': "責任感",
        id: "Tanggung Jawab",
        vi: "Trách nhiệm"
      },
      {
        ko: "방향 제시",
        en: "Direction Setting",
        ja: "方向性の提示",
        'zh-CN': "方向设定",
        'zh-TW': "方向設定",
        id: "Penetapan Arah",
        vi: "Định hướng"
      },
      {
        ko: "추진력",
        en: "Drive",
        ja: "推進力",
        'zh-CN': "推动力",
        'zh-TW': "推動力",
        id: "Dorongan",
        vi: "Động lực"
      }
    ],
    cons: [
      {
        ko: "독단적",
        en: "Autocratic",
        ja: "独断的",
        'zh-CN': "独断",
        'zh-TW': "獨斷",
        id: "Otoriter",
        vi: "Độc đoán"
      },
      {
        ko: "경청 부족",
        en: "Lack of Listening",
        ja: "傾聴不足",
        'zh-CN': "倾听不足",
        'zh-TW': "傾聽不足",
        id: "Kurang Mendengarkan",
        vi: "Thiếu lắng nghe"
      },
      {
        ko: "부담 과다",
        en: "Excessive Burden",
        ja: "負担過多",
        'zh-CN': "负担过重",
        'zh-TW': "負擔過重",
        id: "Beban Berlebihan",
        vi: "Gánh nặng quá mức"
      }
    ],
    advice: {
      ko: "팀원들의 의견에도 귀 기울여보세요. 함께 만드는 결정이 더 강력합니다!",
      en: "Listen to your team members' opinions. Decisions made together are more powerful!",
      ja: "チームメンバーの意見にも耳を傾けてみてください。一緒に作る決定はより強力です！",
      'zh-CN': "倾听团队成员的意見。一起做出的決定更強大！",
      'zh-TW': "傾聽團隊成員的意見。一起做出的決定更強大！",
      id: "Dengarkan pendapat anggota tim. Keputusan yang dibuat bersama lebih kuat!",
      vi: "Hãy lắng nghe ý kiến của các thành viên nhóm. Quyết định được tạo ra cùng nhau mạnh mẽ hơn!"
    },
    recommendedRole: {
      ko: "팀장, PM, 프로젝트 리더",
      en: "Team Leader, PM, Project Leader",
      ja: "チームリーダー、PM、プロジェクトリーダー",
      'zh-CN': "团队领导、PM、项目领导",
      'zh-TW': "團隊領導、PM、項目領導",
      id: "Ketua Tim, PM, Pemimpin Proyek",
      vi: "Trưởng nhóm, PM, Lãnh đạo dự án"
    },
    compatibility: {
      best: ["Type2", "Type4"],
      good: ["Type5", "Type6"],
      careful: ["Type1"],
      difficult: ["Type3"]
    }
  },
  {
    type: "Type2",
    emoji: "🤝",
    title: {
      ko: "따뜻한 서포터형",
      en: "Warm Supporter",
      ja: "温かいサポーター型",
      'zh-CN': "温暖支持者型",
      'zh-TW': "溫暖支持者型",
      id: "Pendukung Hangat",
      vi: "Kiểu Hỗ Trợ Ấm Áp"
    },
    description: {
      ko: "팀의 분위기 메이커! 모두를 배려하는 마음 따뜻한 조력자",
      en: "Team atmosphere maker! Warm-hearted helper who cares for everyone",
      ja: "チームの雰囲気メーカー！みんなを思いやる心温かい協力者",
      'zh-CN': "团队氛围制造者！关心所有人的温暖助手",
      'zh-TW': "團隊氛圍製造者！關心所有人的溫暖助手",
      id: "Pembuat suasana tim! Penolong yang hangat yang peduli pada semua orang",
      vi: "Người tạo bầu không khí nhóm! Người hỗ trợ ấm áp quan tâm đến mọi người"
    },
    characteristics: {
      ko: "팀원들의 감정과 상태를 세심하게 챙기며 협력을 이끌어냅니다. 갈등을 중재하고 분위기를 부드럽게 만듭니다. 경청 능력이 뛰어나고 누구와도 잘 지냅니다. 눈에 띄지 않지만 없으면 안 되는 팀의 필수 요소입니다.",
      en: "Carefully looks after team members' emotions and conditions while fostering cooperation. Mediates conflicts and creates a gentle atmosphere. Has excellent listening skills and gets along with anyone. Though not prominent, it's an essential element of the team that cannot be missing.",
      ja: "チームメンバーの感情と状態を細心に気にかけながら協力を導きます。対立を仲介し、雰囲気を和らげます。傾聴能力に優れ、誰とでも仲良くできます。目立たないが、なくてはならないチームの必須要素です。",
      'zh-CN': "细心照顾团队成员的情感和状态，促进合作。调解冲突，营造温和氛围。倾听能力强，与任何人都相处融洽。虽然不显眼，但却是团队不可缺少的要素。",
      'zh-TW': "細心照顧團隊成員的情感和狀態，促進合作。調解衝突，營造溫和氛圍。傾聽能力強，與任何人都相處融洽。雖然不顯眼，但卻是團隊不可缺少的要素。",
      id: "Memperhatikan emosi dan kondisi anggota tim dengan cermat sambil memupuk kerjasama. Memediasi konflik dan menciptakan suasana yang lembut. Memiliki keterampilan mendengarkan yang luar biasa dan bergaul dengan siapa pun. Meski tidak menonjol, ini adalah elemen penting tim yang tidak boleh hilang.",
      vi: "Chăm sóc cẩn thận cảm xúc và tình trạng của các thành viên nhóm trong khi thúc đẩy hợp tác. Hòa giải xung đột và tạo ra bầu không khí nhẹ nhàng. Có kỹ năng lắng nghe xuất sắc và hòa hợp với bất kỳ ai. Mặc dù không nổi bật nhưng là yếu tố thiết yếu của nhóm không thể thiếu."
    },
    pros: [
      {
        ko: "배려심",
        en: "Consideration",
        ja: "思いやり",
        'zh-CN': "关怀",
        'zh-TW': "關懷",
        id: "Pertimbangan",
        vi: "Sự quan tâm"
      },
      {
        ko: "경청력",
        en: "Listening Skills",
        ja: "傾聴力",
        'zh-CN': "倾听能力",
        'zh-TW': "傾聽能力",
        id: "Keterampilan Mendengarkan",
        vi: "Kỹ năng lắng nghe"
      },
      {
        ko: "중재 능력",
        en: "Mediation Skills",
        ja: "仲介能力",
        'zh-CN': "调解能力",
        'zh-TW': "調解能力",
        id: "Keterampilan Mediasi",
        vi: "Kỹ năng hòa giải"
      },
      {
        ko: "친화력",
        en: "Affability",
        ja: "親和力",
        'zh-CN': "亲和力",
        'zh-TW': "親和力",
        id: "Keramahan",
        vi: "Sự thân thiện"
      }
    ],
    cons: [
      {
        ko: "주장 약함",
        en: "Weak Assertiveness",
        ja: "主張が弱い",
        'zh-CN': "主张弱",
        'zh-TW': "主張弱",
        id: "Ketegasan Lemah",
        vi: "Tính quyết đoán yếu"
      },
      {
        ko: "희생 과다",
        en: "Excessive Sacrifice",
        ja: "犠牲過多",
        'zh-CN': "牺牲过多",
        'zh-TW': "犧牲過多",
        id: "Pengorbanan Berlebihan",
        vi: "Hy sinh quá mức"
      },
      {
        ko: "결정력 부족",
        en: "Lack of Decision-making",
        ja: "決定力不足",
        'zh-CN': "决策力不足",
        'zh-TW': "決策力不足",
        id: "Kurang Pengambilan Keputusan",
        vi: "Thiếu khả năng quyết định"
      }
    ],
    advice: {
      ko: "당신의 의견도 중요해요! 가끔은 주도적으로 제안해보세요.",
      en: "Your opinion matters too! Sometimes try to take the initiative and suggest things.",
      ja: "あなたの意見も大切です！時には主導的に提案してみてください。",
      'zh-CN': "你的意见也很重要！有时要主动提出建议。",
      'zh-TW': "你的意見也很重要！有時要主動提出建議。",
      id: "Pendapat Anda juga penting! Terkadang cobalah mengambil inisiatif dan menyarankan sesuatu.",
      vi: "Ý kiến của bạn cũng quan trọng! Đôi khi hãy chủ động đề xuất."
    },
    recommendedRole: {
      ko: "팀 코디네이터, HR, 고객 관리",
      en: "Team Coordinator, HR, Customer Management",
      ja: "チームコーディネーター、HR、顧客管理",
      'zh-CN': "团队协调员、HR、客户管理",
      'zh-TW': "團隊協調員、HR、客戶管理",
      id: "Koordinator Tim, HR, Manajemen Pelanggan",
      vi: "Điều phối viên nhóm, HR, Quản lý khách hàng"
    },
    compatibility: {
      best: ["Type1", "Type3"],
      good: ["Type5", "Type6"],
      careful: ["Type4"],
      difficult: ["Type2"]
    }
  },
  {
    type: "Type3",
    emoji: "💡",
    title: {
      ko: "창의적 크리에이터형",
      en: "Creative Creator",
      ja: "創造的クリエイター型",
      'zh-CN': "创意创造者型",
      'zh-TW': "創意創造者型",
      id: "Kreator Kreatif",
      vi: "Kiểu Người Sáng Tạo"
    },
    description: {
      ko: "아이디어 뱅크! 혁신과 창의성으로 팀을 빛내는 발명가",
      en: "Idea bank! Inventor who brightens the team with innovation and creativity",
      ja: "アイデアバンク！革新と創造性でチームを輝かせる発明家",
      'zh-CN': "创意银行！用创新和创造力照亮团队的发明家",
      'zh-TW': "創意銀行！用創新和創造力照亮團隊的發明家",
      id: "Bank ide! Penemu yang menerangi tim dengan inovasi dan kreativitas",
      vi: "Ngân hàng ý tưởng! Nhà phát minh làm sáng nhóm bằng đổi mới và sáng tạo"
    },
    characteristics: {
      ko: "기존의 틀을 깨는 참신한 아이디어로 팀에 활력을 줍니다. 문제를 다양한 관점에서 접근하며 창의적 해결책을 제시합니다. 자유로운 분위기에서 최고의 능력을 발휘하지만 실행보다는 기획에 강합니다.",
      en: "Brings vitality to the team with fresh ideas that break existing frameworks. Approaches problems from various perspectives and presents creative solutions. Shows best abilities in a free atmosphere but is stronger in planning than execution.",
      ja: "既存の枠を破る斬新なアイデアでチームに活力を与えます。問題を様々な視点からアプローチし、創造的な解決策を提示します。自由な雰囲気で最高の能力を発揮しますが、実行よりも企画に強いです。",
      'zh-CN': "用打破现有框架的新颖想法为团队带来活力。从各种角度处理问题，提出创造性解决方案。在自由氛围中发挥最佳能力，但在规划方面比执行更强。",
      'zh-TW': "用打破現有框架的新穎想法為團隊帶來活力。從各種角度處理問題，提出創造性解決方案。在自由氛圍中發揮最佳能力，但在規劃方面比執行更強。",
      id: "Memberikan vitalitas pada tim dengan ide segar yang memecahkan kerangka yang ada. Mendekati masalah dari berbagai perspektif dan menyajikan solusi kreatif. Menunjukkan kemampuan terbaik dalam suasana bebas tetapi lebih kuat dalam perencanaan daripada eksekusi.",
      vi: "Mang lại sức sống cho nhóm bằng những ý tưởng mới mẻ phá vỡ khuôn khổ hiện có. Tiếp cận vấn đề từ nhiều góc độ khác nhau và đưa ra giải pháp sáng tạo. Thể hiện khả năng tốt nhất trong bầu không khí tự do nhưng mạnh về lập kế hoạch hơn là thực hiện."
    },
    pros: [
      {
        ko: "창의성",
        en: "Creativity",
        ja: "創造性",
        'zh-CN': "创造力",
        'zh-TW': "創造力",
        id: "Kreativitas",
        vi: "Sự sáng tạo"
      },
      {
        ko: "혁신성",
        en: "Innovation",
        ja: "革新性",
        'zh-CN': "创新性",
        'zh-TW': "創新性",
        id: "Inovasi",
        vi: "Sự đổi mới"
      },
      {
        ko: "문제 해결",
        en: "Problem Solving",
        ja: "問題解決",
        'zh-CN': "问题解决",
        'zh-TW': "問題解決",
        id: "Pemecahan Masalah",
        vi: "Giải quyết vấn đề"
      },
      {
        ko: "통찰력",
        en: "Insight",
        ja: "洞察力",
        'zh-CN': "洞察力",
        'zh-TW': "洞察力",
        id: "Wawasan",
        vi: "Sự sáng suốt"
      }
    ],
    cons: [
      {
        ko: "실행력 부족",
        en: "Lack of Execution",
        ja: "実行力不足",
        'zh-CN': "执行力不足",
        'zh-TW': "執行力不足",
        id: "Kurang Eksekusi",
        vi: "Thiếu khả năng thực hiện"
      },
      {
        ko: "현실성 약함",
        en: "Weak Realism",
        ja: "現実性が弱い",
        'zh-CN': "现实性弱",
        'zh-TW': "現實性弱",
        id: "Realisme Lemah",
        vi: "Tính thực tế yếu"
      },
      {
        ko: "일관성 결여",
        en: "Lack of Consistency",
        ja: "一貫性欠如",
        'zh-CN': "缺乏一致性",
        'zh-TW': "缺乏一致性",
        id: "Kurang Konsistensi",
        vi: "Thiếu tính nhất quán"
      }
    ],
    advice: {
      ko: "멋진 아이디어를 현실로 만들려면 실행력도 필요해요!",
      en: "To turn great ideas into reality, you also need execution power!",
      ja: "素晴らしいアイデアを現実にするには実行力も必要です！",
      'zh-CN': "要把好想法变成现实，也需要执行力！",
      'zh-TW': "要把好想法變成現實，也需要執行力！",
      id: "Untuk mengubah ide hebat menjadi kenyataan, Anda juga membutuhkan kekuatan eksekusi!",
      vi: "Để biến ý tưởng tuyệt vời thành hiện thực, bạn cũng cần sức mạnh thực hiện!"
    },
    recommendedRole: {
      ko: "기획자, 디자이너, 전략가",
      en: "Planner, Designer, Strategist",
      ja: "企画者、デザイナー、戦略家",
      'zh-CN': "规划师、设计师、战略家",
      'zh-TW': "規劃師、設計師、戰略家",
      id: "Perencana, Desainer, Strategis",
      vi: "Người lập kế hoạch, Nhà thiết kế, Chiến lược gia"
    },
    compatibility: {
      best: ["Type4"],
      good: ["Type1", "Type2"],
      careful: ["Type6"],
      difficult: ["Type3"]
    }
  },
  {
    type: "Type4",
    emoji: "⚡",
    title: {
      ko: "믿음직한 실행자형",
      en: "Reliable Executor",
      ja: "信頼できる実行者型",
      'zh-CN': "可靠执行者型",
      'zh-TW': "可靠執行者型",
      id: "Eksekutor Terpercaya",
      vi: "Kiểu Người Thực Hiện Đáng Tin Cậy"
    },
    description: {
      ko: "말보다 행동! 확실한 결과로 증명하는 실행력의 달인",
      en: "Actions speak louder than words! Master of execution who proves with solid results",
      ja: "言葉より行動！確実な結果で証明する実行力の達人",
      'zh-CN': "行动胜过言语！用可靠结果证明的执行力大师",
      'zh-TW': "行動勝過言語！用可靠結果證明的執行力大師",
      id: "Tindakan lebih keras daripada kata-kata! Master eksekusi yang membuktikan dengan hasil yang solid",
      vi: "Hành động nói to hơn lời nói! Bậc thầy thực hiện chứng minh bằng kết quả vững chắc"
    },
    characteristics: {
      ko: "계획을 현실로 만드는 실행 전문가입니다. 꼼꼼하고 책임감 있게 맡은 일을 완수합니다. 실질적이고 현실적인 판단력이 뛰어나며 마감을 놓치지 않습니다. 화려하진 않지만 팀의 든든한 기둥입니다.",
      en: "An execution specialist who turns plans into reality. Completes assigned tasks meticulously and responsibly. Has excellent practical and realistic judgment and never misses deadlines. Though not flashy, it's a solid pillar of the team.",
      ja: "計画を現実にする実行専門家です。細心で責任感を持って任された仕事を完遂します。実質的で現実的な判断力に優れ、締切を逃しません。華やかではありませんが、チームの頼もしい柱です。",
      'zh-CN': "将计划变为现实的执行专家。细致负责地完成分配的任务。具有出色的实用和现实判断力，从不错过截止日期。虽然不华丽，但是团队的坚实支柱。",
      'zh-TW': "將計劃變為現實的執行專家。細緻負責地完成分配的任務。具有出色的實用和現實判斷力，從不錯過截止日期。雖然不華麗，但是團隊的堅實支柱。",
      id: "Spesialis eksekusi yang mengubah rencana menjadi kenyataan. Menyelesaikan tugas yang diberikan dengan teliti dan bertanggung jawab. Memiliki penilaian praktis dan realistis yang luar biasa dan tidak pernah melewatkan tenggat waktu. Meski tidak mencolok, ini adalah pilar solid tim.",
      vi: "Chuyên gia thực hiện biến kế hoạch thành hiện thực. Hoàn thành nhiệm vụ được giao một cách cẩn thận và có trách nhiệm. Có khả năng phán đoán thực tế và thực tiễn xuất sắc và không bao giờ bỏ lỡ thời hạn. Mặc dù không nổi bật nhưng là trụ cột vững chắc của nhóm."
    },
    pros: [
      {
        ko: "실행력",
        en: "Execution Power",
        ja: "実行力",
        'zh-CN': "执行力",
        'zh-TW': "執行力",
        id: "Kekuatan Eksekusi",
        vi: "Sức mạnh thực hiện"
      },
      {
        ko: "책임감",
        en: "Responsibility",
        ja: "責任感",
        'zh-CN': "责任感",
        'zh-TW': "責任感",
        id: "Tanggung Jawab",
        vi: "Trách nhiệm"
      },
      {
        ko: "신뢰성",
        en: "Reliability",
        ja: "信頼性",
        'zh-CN': "可靠性",
        'zh-TW': "可靠性",
        id: "Keandalan",
        vi: "Độ tin cậy"
      },
      {
        ko: "완성도",
        en: "Completeness",
        ja: "完成度",
        'zh-CN': "完成度",
        'zh-TW': "完成度",
        id: "Kelengkapan",
        vi: "Mức độ hoàn thiện"
      }
    ],
    cons: [
      {
        ko: "융통성 부족",
        en: "Lack of Flexibility",
        ja: "柔軟性不足",
        'zh-CN': "灵活性不足",
        'zh-TW': "靈活性不足",
        id: "Kurang Fleksibilitas",
        vi: "Thiếu tính linh hoạt"
      },
      {
        ko: "창의성 약함",
        en: "Weak Creativity",
        ja: "創造性が弱い",
        'zh-CN': "创造力弱",
        'zh-TW': "創造力弱",
        id: "Kreativitas Lemah",
        vi: "Sự sáng tạo yếu"
      },
      {
        ko: "과로 위험",
        en: "Overwork Risk",
        ja: "過労リスク",
        'zh-CN': "过劳风险",
        'zh-TW': "過勞風險",
        id: "Risiko Kelelahan",
        vi: "Nguy cơ quá tải"
      }
    ],
    advice: {
      ko: "완벽주의도 좋지만 가끔은 80%로도 충분합니다!",
      en: "Perfectionism is good, but sometimes 80% is enough!",
      ja: "完璧主義も良いですが、時には80%でも十分です！",
      'zh-CN': "完美主义很好，但有时80%就足够了！",
      'zh-TW': "完美主義很好，但有時80%就足夠了！",
      id: "Perfeksionisme itu baik, tapi terkadang 80% sudah cukup!",
      vi: "Chủ nghĩa hoàn hảo cũng tốt, nhưng đôi khi 80% là đủ!"
    },
    recommendedRole: {
      ko: "실무 담당자, 오퍼레이터, 엔지니어",
      en: "Field Officer, Operator, Engineer",
      ja: "実務担当者、オペレーター、エンジニア",
      'zh-CN': "实务负责人、操作员、工程师",
      'zh-TW': "實務負責人、操作員、工程師",
      id: "Petugas Lapangan, Operator, Insinyur",
      vi: "Cán bộ thực địa, Vận hành viên, Kỹ sư"
    },
    compatibility: {
      best: ["Type1", "Type3"],
      good: ["Type5", "Type6"],
      careful: ["Type2"],
      difficult: ["Type4"]
    }
  },
  {
    type: "Type5",
    emoji: "⚖️",
    title: {
      ko: "지혜로운 중재자형",
      en: "Wise Mediator",
      ja: "賢い仲介者型",
      'zh-CN': "智慧调解者型",
      'zh-TW': "智慧調解者型",
      id: "Mediator Bijaksana",
      vi: "Kiểu Người Hòa Giải Khôn Ngoan"
    },
    description: {
      ko: "팀의 밸런서! 갈등을 조율하고 조화를 만드는 평화주의자",
      en: "Team balancer! Peacemaker who coordinates conflicts and creates harmony",
      ja: "チームのバランサー！対立を調整し調和を作る平和主義者",
      'zh-CN': "团队平衡者！协调冲突、创造和谐的和平主义者",
      'zh-TW': "團隊平衡者！協調衝突、創造和諧的和平主義者",
      id: "Penyeimbang tim! Pembuat perdamaian yang mengoordinasikan konflik dan menciptakan harmoni",
      vi: "Người cân bằng nhóm! Người tạo hòa bình điều phối xung đột và tạo ra sự hài hòa"
    },
    characteristics: {
      ko: "양쪽 의견을 객관적으로 듣고 최선의 합의점을 찾습니다. 감정적이지 않고 논리적으로 상황을 판단합니다. 팀 내 갈등을 해소하고 분위기를 안정시킵니다. 모두가 만족하는 결론을 이끌어내는 능력이 탁월합니다.",
      en: "Objectively listens to both opinions and finds the best compromise. Judges situations logically without being emotional. Resolves team conflicts and stabilizes the atmosphere. Has excellent ability to lead to conclusions that satisfy everyone.",
      ja: "両方の意見を客観的に聞き、最善の合意点を見つけます。感情的にならず論理的に状況を判断します。チーム内の対立を解消し、雰囲気を安定させます。みんなが満足する結論を導き出す能力に優れています。",
      'zh-CN': "客观地听取双方意见，找到最佳妥协点。不带感情地逻辑判断情况。解决团队冲突，稳定氛围。具有出色的能力，能得出让所有人满意的结论。",
      'zh-TW': "客觀地聽取雙方意見，找到最佳妥協點。不帶感情地邏輯判斷情況。解決團隊衝突，穩定氛圍。具有出色的能力，能得出讓所有人滿意的結論。",
      id: "Mendengarkan kedua pendapat secara objektif dan menemukan kompromi terbaik. Menilai situasi secara logis tanpa emosional. Menyelesaikan konflik tim dan menstabilkan suasana. Memiliki kemampuan luar biasa untuk mengarahkan pada kesimpulan yang memuaskan semua orang.",
      vi: "Lắng nghe cả hai ý kiến một cách khách quan và tìm ra thỏa hiệp tốt nhất. Đánh giá tình huống một cách logic mà không cảm xúc. Giải quyết xung đột nhóm và ổn định bầu không khí. Có khả năng xuất sắc dẫn đến kết luận làm hài lòng mọi người."
    },
    pros: [
      {
        ko: "중재력",
        en: "Mediation Skills",
        ja: "仲介力",
        'zh-CN': "调解能力",
        'zh-TW': "調解能力",
        id: "Keterampilan Mediasi",
        vi: "Kỹ năng hòa giải"
      },
      {
        ko: "객관성",
        en: "Objectivity",
        ja: "客観性",
        'zh-CN': "客观性",
        'zh-TW': "客觀性",
        id: "Objektivitas",
        vi: "Tính khách quan"
      },
      {
        ko: "균형감",
        en: "Sense of Balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        id: "Rasa Keseimbangan",
        vi: "Cảm giác cân bằng"
      },
      {
        ko: "냉정함",
        en: "Calmness",
        ja: "冷静さ",
        'zh-CN': "冷静",
        'zh-TW': "冷靜",
        id: "Ketenangan",
        vi: "Sự bình tĩnh"
      }
    ],
    cons: [
      {
        ko: "우유부단",
        en: "Indecisiveness",
        ja: "優柔不断",
        'zh-CN': "优柔寡断",
        'zh-TW': "優柔寡斷",
        id: "Keragu-raguan",
        vi: "Tính do dự"
      },
      {
        ko: "결정 지연",
        en: "Decision Delay",
        ja: "決定遅延",
        'zh-CN': "决策延迟",
        'zh-TW': "決策延遲",
        id: "Penundaan Keputusan",
        vi: "Trì hoãn quyết định"
      },
      {
        ko: "주도성 부족",
        en: "Lack of Initiative",
        ja: "主導性不足",
        'zh-CN': "主动性不足",
        'zh-TW': "主動性不足",
        id: "Kurang Inisiatif",
        vi: "Thiếu tính chủ động"
      }
    ],
    advice: {
      ko: "때로는 빠른 결정이 완벽한 중재보다 나을 수 있어요!",
      en: "Sometimes a quick decision can be better than perfect mediation!",
      ja: "時には素早い決定が完璧な仲介よりも良い場合があります！",
      'zh-CN': "有时快速决策比完美调解更好！",
      'zh-TW': "有時快速決策比完美調解更好！",
      id: "Terkadang keputusan cepat bisa lebih baik daripada mediasi yang sempurna!",
      vi: "Đôi khi quyết định nhanh có thể tốt hơn hòa giải hoàn hảo!"
    },
    recommendedRole: {
      ko: "조정자, 컨설턴트, 관리자",
      en: "Coordinator, Consultant, Manager",
      ja: "調整者、コンサルタント、管理者",
      'zh-CN': "协调员、顾问、管理者",
      'zh-TW': "協調員、顧問、管理者",
      id: "Koordinator, Konsultan, Manajer",
      vi: "Điều phối viên, Tư vấn viên, Quản lý"
    },
    compatibility: {
      best: ["Type1", "Type3"],
      good: ["Type2", "Type6"],
      careful: ["Type4"],
      difficult: ["Type5"]
    }
  },
  {
    type: "Type6",
    emoji: "🔍",
    title: {
      ko: "냉철한 관찰자형",
      en: "Cool Observer",
      ja: "冷静な観察者型",
      'zh-CN': "冷静观察者型",
      'zh-TW': "冷靜觀察者型",
      id: "Pengamat Dingin",
      vi: "Kiểu Người Quan Sát Lạnh Lùng"
    },
    description: {
      ko: "팀의 분석가! 객관적 시각으로 팀을 보완하는 전략가",
      en: "Team analyst! Strategist who complements the team with objective perspective",
      ja: "チームのアナリスト！客観的視点でチームを補完する戦略家",
      'zh-CN': "团队分析师！用客观视角补充团队的战略家",
      'zh-TW': "團隊分析師！用客觀視角補充團隊的戰略家",
      id: "Analis tim! Strategis yang melengkapi tim dengan perspektif objektif",
      vi: "Nhà phân tích nhóm! Chiến lược gia bổ sung nhóm bằng góc nhìn khách quan"
    },
    characteristics: {
      ko: "한 발짝 물러서서 전체를 관찰하고 분석합니다. 데이터와 사실에 기반한 의견을 제시하며 팀의 맹점을 발견합니다. 감정보다는 논리로 판단하고 장기적 관점에서 조언합니다. 조용하지만 깊이 있는 기여를 합니다.",
      en: "Steps back to observe and analyze the whole picture. Presents opinions based on data and facts, discovering team blind spots. Judges with logic rather than emotion and advises from a long-term perspective. Makes quiet but deep contributions.",
      ja: "一歩引いて全体を観察し分析します。データと事実に基づいた意見を提示し、チームの盲点を発見します。感情よりも論理で判断し、長期的視点から助言します。静かですが深い貢献をします。",
      'zh-CN': "退后一步观察和分析整体情况。基于数据和事实提出意见，发现团队盲点。用逻辑而非情感判断，从长期角度提供建议。虽然安静但做出深度贡献。",
      'zh-TW': "退後一步觀察和分析整體情況。基於數據和事實提出意見，發現團隊盲點。用邏輯而非情感判斷，從長期角度提供建議。雖然安靜但做出深度貢獻。",
      id: "Mundur selangkah untuk mengamati dan menganalisis keseluruhan. Menyajikan pendapat berdasarkan data dan fakta, menemukan titik buta tim. Menilai dengan logika daripada emosi dan menasihati dari perspektif jangka panjang. Memberikan kontribusi yang tenang tetapi mendalam.",
      vi: "Lùi lại một bước để quan sát và phân tích toàn bộ. Đưa ra ý kiến dựa trên dữ liệu và sự thật, phát hiện điểm mù của nhóm. Đánh giá bằng logic thay vì cảm xúc và tư vấn từ góc độ dài hạn. Đóng góp im lặng nhưng sâu sắc."
    },
    pros: [
      {
        ko: "분석력",
        en: "Analytical Skills",
        ja: "分析力",
        'zh-CN': "分析能力",
        'zh-TW': "分析能力",
        id: "Keterampilan Analitis",
        vi: "Kỹ năng phân tích"
      },
      {
        ko: "객관성",
        en: "Objectivity",
        ja: "客観性",
        'zh-CN': "客观性",
        'zh-TW': "客觀性",
        id: "Objektivitas",
        vi: "Tính khách quan"
      },
      {
        ko: "통찰력",
        en: "Insight",
        ja: "洞察力",
        'zh-CN': "洞察力",
        'zh-TW': "洞察力",
        id: "Wawasan",
        vi: "Sự sáng suốt"
      },
      {
        ko: "전략적 사고",
        en: "Strategic Thinking",
        ja: "戦略的思考",
        'zh-CN': "战略思维",
        'zh-TW': "戰略思維",
        id: "Pemikiran Strategis",
        vi: "Tư duy chiến lược"
      }
    ],
    cons: [
      {
        ko: "소극적",
        en: "Passive",
        ja: "消極的",
        'zh-CN': "消极",
        'zh-TW': "消極",
        id: "Pasif",
        vi: "Thụ động"
      },
      {
        ko: "감정 표현 부족",
        en: "Lack of Emotional Expression",
        ja: "感情表現不足",
        'zh-CN': "情感表达不足",
        'zh-TW': "情感表達不足",
        id: "Kurang Ekspresi Emosional",
        vi: "Thiếu biểu cảm cảm xúc"
      },
      {
        ko: "실행력 약함",
        en: "Weak Execution",
        ja: "実行力が弱い",
        'zh-CN': "执行力弱",
        'zh-TW': "執行力弱",
        id: "Eksekusi Lemah",
        vi: "Khả năng thực hiện yếu"
      }
    ],
    advice: {
      ko: "분석도 중요하지만 때로는 직관도 필요해요. 더 적극적으로 참여해보세요!",
      en: "Analysis is important, but sometimes intuition is needed too. Try to participate more actively!",
      ja: "分析も重要ですが、時には直感も必要です。もっと積極的に参加してみてください！",
      'zh-CN': "分析很重要，但有时也需要直觉。更积极地参与吧！",
      'zh-TW': "分析很重要，但有時也需要直覺。更積極地參與吧！",
      id: "Analisis penting, tapi terkadang intuisi juga dibutuhkan. Cobalah berpartisipasi lebih aktif!",
      vi: "Phân tích quan trọng, nhưng đôi khi trực giác cũng cần thiết. Hãy tham gia tích cực hơn!"
    },
    recommendedRole: {
      ko: "분석가, 전략 기획자, 리서처",
      en: "Analyst, Strategic Planner, Researcher",
      ja: "アナリスト、戦略企画者、リサーチャー",
      'zh-CN': "分析师、战略规划师、研究员",
      'zh-TW': "分析師、戰略規劃師、研究員",
      id: "Analis, Perencana Strategis, Peneliti",
      vi: "Nhà phân tích, Người lập kế hoạch chiến lược, Nhà nghiên cứu"
    },
    compatibility: {
      best: ["Type1", "Type4"],
      good: ["Type2", "Type5"],
      careful: ["Type3"],
      difficult: ["Type6"]
    }
  }
];

// 팀 플레이어 테스트 결과 계산 함수
export function calculateTeamPlayerResult(answers: any[], results: TeamPlayerResult[]): TeamPlayerResult {
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변의 점수를 합산
  answers.forEach(answer => {
    if (answer.scores) {
      Object.entries(answer.scores).forEach(([type, score]) => {
        scores[type] += score as number;
      });
    }
  });

  // 최고 점수를 가진 타입 찾기
  let maxScore = 0;
  let resultType = 'Type1';
  
  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 질문)
  if (Object.values(scores).filter(score => score === maxScore).length > 1) {
    const lastThreeAnswers = answers.slice(-3);
    let priorityScore = 0;
    let priorityType = resultType;
    
    lastThreeAnswers.forEach(answer => {
      if (answer.scores) {
        Object.entries(answer.scores).forEach(([type, score]) => {
          if ((score as number) > priorityScore) {
            priorityScore = score as number;
            priorityType = type;
          }
        });
      }
    });
    
    resultType = priorityType;
  }

  // 결과 반환
  const result = results.find(r => r.type === resultType);
  return result || results[0];
}
