export interface WorkValuesQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    A: Record<string, string>;
    B: Record<string, string>;
    C: Record<string, string>;
    D: Record<string, string>;
  };
}

export interface WorkValuesResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription?: Record<string, string>;
  coreValues: Record<string, string[]>;
  strengths: Record<string, string[]>;
  weaknesses: Record<string, string[]>;
  suitableJobs: Record<string, string[]>;
  advice: Record<string, string>;
  averageSatisfaction: Record<string, string>;
  turnoverFrequency: Record<string, string>;
  burnoutRisk: Record<string, string>;
}

export const workValuesQuestions: WorkValuesQuestion[] = [
  {
    id: 1,
    question: {
      ko: "직장을 선택할 때 가장 중요한 기준은?",
      en: "What is the most important criterion when choosing a workplace?",
      ja: "職場を選ぶ時、最も重要な基準は？",
      "zh-CN": "选择工作时最重要的标准是什么？",
      "zh-TW": "選擇工作時最重要的標準是什麼？",
      vi: "Tiêu chí quan trọng nhất khi chọn nơi làm việc là gì?",
      id: "Kriteria paling penting saat memilih tempat kerja adalah?"
    },
    options: {
      A: {
        ko: "연봉과 복리후생",
        en: "Salary and benefits",
        ja: "給料と福利厚生",
        "zh-CN": "薪资和福利",
        "zh-TW": "薪資和福利",
        vi: "Lương và phúc lợi",
        id: "Gaji dan tunjangan"
      },
      B: {
        ko: "일의 의미와 사회적 가치",
        en: "Meaning and social value of work",
        ja: "仕事の意味と社会的価値",
        "zh-CN": "工作的意义和社会价值",
        "zh-TW": "工作的意義和社會價值",
        vi: "Ý nghĩa và giá trị xã hội của công việc",
        id: "Makna dan nilai sosial pekerjaan"
      },
      C: {
        ko: "성장 가능성과 배울 것",
        en: "Growth potential and learning opportunities",
        ja: "成長可能性と学ぶこと",
        "zh-CN": "成长潜力和学习机会",
        "zh-TW": "成長潛力和學習機會",
        vi: "Tiềm năng phát triển và cơ hội học hỏi",
        id: "Potensi pertumbuhan dan peluang belajar"
      },
      D: {
        ko: "근무 환경과 워라밸",
        en: "Work environment and work-life balance",
        ja: "勤務環境とワークライフバランス",
        "zh-CN": "工作环境和工作生活平衡",
        "zh-TW": "工作環境和工作生活平衡",
        vi: "Môi trường làm việc và cân bằng công việc-cuộc sống",
        id: "Lingkungan kerja dan keseimbangan kerja-hidup"
      }
    }
  },
  {
    id: 2,
    question: {
      ko: "승진 제안을 받았는데 야근이 많아진다면?",
      en: "If you receive a promotion offer but have to work overtime frequently?",
      ja: "昇進の提案を受けたが、残業が多くなるとしたら？",
      "zh-CN": "如果收到升职提议但需要经常加班？",
      "zh-TW": "如果收到升職提議但需要經常加班？",
      vi: "Nếu bạn nhận được đề nghị thăng chức nhưng phải làm thêm giờ thường xuyên?",
      id: "Jika Anda menerima tawaran promosi tetapi harus lembur lebih sering?"
    },
    options: {
      A: {
        ko: "연봉 인상이 크면 수락",
        en: "Accept if salary increase is significant",
        ja: "給料アップが大きければ受諾",
        "zh-CN": "如果薪资涨幅大就接受",
        "zh-TW": "如果薪資漲幅大就接受",
        vi: "Chấp nhận nếu tăng lương đáng kể",
        id: "Terima jika kenaikan gaji signifikan"
      },
      B: {
        ko: "일의 의미가 있다면 수락",
        en: "Accept if the work is meaningful",
        ja: "仕事に意味があれば受諾",
        "zh-CN": "如果工作有意义就接受",
        "zh-TW": "如果工作有意義就接受",
        vi: "Chấp nhận nếu công việc có ý nghĩa",
        id: "Terima jika pekerjaan bermakna"
      },
      C: {
        ko: "성장 기회라면 수락",
        en: "Accept if it's a growth opportunity",
        ja: "成長機会なら受諾",
        "zh-CN": "如果是成长机会就接受",
        "zh-TW": "如果是成長機會就接受",
        vi: "Chấp nhận nếu đó là cơ hội phát triển",
        id: "Terima jika itu adalah peluang pertumbuhan"
      },
      D: {
        ko: "워라밸 깨지면 거절",
        en: "Reject if work-life balance is disrupted",
        ja: "ワークライフバランスが崩れるなら拒否",
        "zh-CN": "如果工作生活平衡被破坏就拒绝",
        "zh-TW": "如果工作生活平衡被破壞就拒絕",
        vi: "Từ chối nếu cân bằng công việc-cuộc sống bị phá vỡ",
        id: "Tolak jika keseimbangan kerja-hidup terganggu"
      }
    }
  },
  {
    id: 3,
    question: {
      ko: "월급날이 가장 기쁜 이유는?",
      en: "What makes payday the happiest?",
      ja: "給料日が最も嬉しい理由は？",
      "zh-CN": "发薪日最开心的原因是什么？",
      "zh-TW": "發薪日最開心的原因是什麼？",
      vi: "Lý do khiến ngày lương vui nhất là gì?",
      id: "Apa yang membuat hari gajian paling bahagia?"
    },
    options: {
      A: {
        ko: "돈을 벌었다는 것 자체",
        en: "The fact that I earned money",
        ja: "お金を稼いだということ自体",
        "zh-CN": "赚钱这个事实本身",
        "zh-TW": "賺錢這個事實本身",
        vi: "Bản thân việc kiếm được tiền",
        id: "Fakta bahwa saya menghasilkan uang"
      },
      B: {
        ko: "노력의 대가를 받는 것",
        en: "Getting rewarded for my efforts",
        ja: "努力の対価を受け取ること",
        "zh-CN": "得到努力付出的回报",
        "zh-TW": "得到努力付出的回報",
        vi: "Được thưởng cho nỗ lực của mình",
        id: "Mendapat imbalan atas usaha saya"
      },
      C: {
        ko: "목표 달성의 보상",
        en: "Reward for achieving goals",
        ja: "目標達成の報酬",
        "zh-CN": "实现目标的奖励",
        "zh-TW": "實現目標的獎勵",
        vi: "Phần thưởng cho việc đạt mục tiêu",
        id: "Imbalan untuk mencapai tujuan"
      },
      D: {
        ko: "한 달 열심히 일한 보람",
        en: "Satisfaction of working hard for a month",
        ja: "一ヶ月一生懸命働いたやりがい",
        "zh-CN": "一个月努力工作后的成就感",
        "zh-TW": "一個月努力工作後的成就感",
        vi: "Sự thỏa mãn khi làm việc chăm chỉ trong một tháng",
        id: "Kepuasan bekerja keras selama sebulan"
      }
    }
  },
  {
    id: 4,
    question: {
      ko: "힘든 프로젝트를 마쳤을 때 보람을 느끼는 순간은?",
      en: "When do you feel most fulfilled after completing a difficult project?",
      ja: "難しいプロジェクトを終えた時、やりがいを感じる瞬間は？",
      "zh-CN": "完成困难项目时最有成就感的时刻是什么？",
      "zh-TW": "完成困難項目時最有成就感的時刻是什麼？",
      vi: "Khi nào bạn cảm thấy thỏa mãn nhất sau khi hoàn thành một dự án khó khăn?",
      id: "Kapan Anda merasa paling puas setelah menyelesaikan proyek yang sulit?"
    },
    options: {
      A: {
        ko: "성과급이나 보너스를 받을 때",
        en: "When I receive performance pay or bonus",
        ja: "成果給やボーナスをもらう時",
        "zh-CN": "收到绩效工资或奖金时",
        "zh-TW": "收到績效工資或獎金時",
        vi: "Khi nhận được lương hiệu suất hoặc thưởng",
        id: "Ketika menerima gaji kinerja atau bonus"
      },
      B: {
        ko: "누군가에게 도움이 됐을 때",
        en: "When I helped someone",
        ja: "誰かに役に立った時",
        "zh-CN": "帮助了某人的时候",
        "zh-TW": "幫助了某人的時候",
        vi: "Khi giúp đỡ được ai đó",
        id: "Ketika membantu seseorang"
      },
      C: {
        ko: "새로운 역량을 배웠을 때",
        en: "When I learned new capabilities",
        ja: "新しい能力を学んだ時",
        "zh-CN": "学到新能力的时候",
        "zh-TW": "學到新能力的時候",
        vi: "Khi học được năng lực mới",
        id: "Ketika mempelajari kemampuan baru"
      },
      D: {
        ko: "이제 쉴 수 있을 때",
        en: "When I can finally rest",
        ja: "やっと休める時",
        "zh-CN": "终于可以休息的时候",
        "zh-TW": "終於可以休息的時候",
        vi: "Khi cuối cùng có thể nghỉ ngơi",
        id: "Ketika akhirnya bisa istirahat"
      }
    }
  },
  {
    id: 5,
    question: {
      ko: "이직을 고려하는 가장 큰 이유는?",
      en: "What is the biggest reason for considering a job change?",
      ja: "転職を考える最大の理由は？",
      "zh-CN": "考虑跳槽的最大原因是什么？",
      "zh-TW": "考慮跳槽的最大原因是什麼？",
      vi: "Lý do lớn nhất để cân nhắc chuyển việc là gì?",
      id: "Apa alasan terbesar untuk mempertimbangkan pindah kerja?"
    },
    options: {
      A: {
        ko: "더 높은 연봉",
        en: "Higher salary",
        ja: "より高い給料",
        "zh-CN": "更高的薪资",
        "zh-TW": "更高的薪資",
        vi: "Lương cao hơn",
        id: "Gaji yang lebih tinggi"
      },
      B: {
        ko: "더 의미있는 일",
        en: "More meaningful work",
        ja: "より意味のある仕事",
        "zh-CN": "更有意义的工作",
        "zh-TW": "更有意義的工作",
        vi: "Công việc có ý nghĩa hơn",
        id: "Pekerjaan yang lebih bermakna"
      },
      C: {
        ko: "더 큰 성장 기회",
        en: "Bigger growth opportunities",
        ja: "より大きな成長機会",
        "zh-CN": "更大的成长机会",
        "zh-TW": "更大的成長機會",
        vi: "Cơ hội phát triển lớn hơn",
        id: "Peluang pertumbuhan yang lebih besar"
      },
      D: {
        ko: "더 나은 근무 환경",
        en: "Better work environment",
        ja: "より良い勤務環境",
        "zh-CN": "更好的工作环境",
        "zh-TW": "更好的工作環境",
        vi: "Môi trường làm việc tốt hơn",
        id: "Lingkungan kerja yang lebih baik"
      }
    }
  },
  {
    id: 6,
    question: {
      ko: "직장에서 가장 스트레스 받는 상황은?",
      en: "What is the most stressful situation at work?",
      ja: "職場で最もストレスを受ける状況は？",
      "zh-CN": "工作中最压力大的情况是什么？",
      "zh-TW": "工作中最壓力大的情況是什麼？",
      vi: "Tình huống căng thẳng nhất tại nơi làm việc là gì?",
      id: "Situasi paling stres di tempat kerja adalah?"
    },
    options: {
      A: {
        ko: "노력 대비 낮은 보상",
        en: "Low reward compared to effort",
        ja: "努力に見合わない低い報酬",
        "zh-CN": "与努力相比的低回报",
        "zh-TW": "與努力相比的低回報",
        vi: "Phần thưởng thấp so với nỗ lực",
        id: "Imbalan rendah dibanding usaha"
      },
      B: {
        ko: "의미 없는 일을 할 때",
        en: "When doing meaningless work",
        ja: "意味のない仕事をする時",
        "zh-CN": "做无意义工作的时候",
        "zh-TW": "做無意義工作的時候",
        vi: "Khi làm công việc vô nghĩa",
        id: "Ketika melakukan pekerjaan yang tidak bermakna"
      },
      C: {
        ko: "배우는 것이 없을 때",
        en: "When there's nothing to learn",
        ja: "学ぶことがない時",
        "zh-CN": "没有东西可学的时候",
        "zh-TW": "沒有東西可學的時候",
        vi: "Khi không có gì để học",
        id: "Ketika tidak ada yang bisa dipelajari"
      },
      D: {
        ko: "개인 시간이 없을 때",
        en: "When there's no personal time",
        ja: "個人時間がない時",
        "zh-CN": "没有个人时间的时候",
        "zh-TW": "沒有個人時間的時候",
        vi: "Khi không có thời gian cá nhân",
        id: "Ketika tidak ada waktu pribadi"
      }
    }
  },
  {
    id: 7,
    question: {
      ko: "회사에서 인정받고 싶은 부분은?",
      en: "What aspect do you want to be recognized for at the company?",
      ja: "会社で認められたい部分は？",
      "zh-CN": "你想在公司被认可的是哪个方面？",
      "zh-TW": "你想在公司被認可的是哪個方面？",
      vi: "Bạn muốn được công ty công nhận ở khía cạnh nào?",
      id: "Aspek apa yang ingin Anda diakui di perusahaan?"
    },
    options: {
      A: {
        ko: "실적과 성과",
        en: "Performance and results",
        ja: "実績と成果",
        "zh-CN": "业绩和成果",
        "zh-TW": "業績和成果",
        vi: "Hiệu suất và kết quả",
        id: "Kinerja dan hasil"
      },
      B: {
        ko: "헌신과 기여",
        en: "Dedication and contribution",
        ja: "献身と貢献",
        "zh-CN": "奉献和贡献",
        "zh-TW": "奉獻和貢獻",
        vi: "Cống hiến và đóng góp",
        id: "Dedikasi dan kontribusi"
      },
      C: {
        ko: "전문성과 역량",
        en: "Expertise and capabilities",
        ja: "専門性と能力",
        "zh-CN": "专业性和能力",
        "zh-TW": "專業性和能力",
        vi: "Chuyên môn và năng lực",
        id: "Keahlian dan kemampuan"
      },
      D: {
        ko: "효율성과 균형",
        en: "Efficiency and balance",
        ja: "効率性とバランス",
        "zh-CN": "效率和平衡",
        "zh-TW": "效率和平衡",
        vi: "Hiệu quả và cân bằng",
        id: "Efisiensi dan keseimbangan"
      }
    }
  },
  {
    id: 8,
    question: {
      ko: "연봉 협상 시 우선순위는?",
      en: "What is your priority during salary negotiation?",
      ja: "年収交渉時の優先順位は？",
      "zh-CN": "薪资谈判时的优先事项是什么？",
      "zh-TW": "薪資談判時的優先事項是什麼？",
      vi: "Ưu tiên của bạn trong đàm phán lương là gì?",
      id: "Apa prioritas Anda dalam negosiasi gaji?"
    },
    options: {
      A: {
        ko: "기본급 최대한 높이기",
        en: "Maximizing base salary",
        ja: "基本給を最大限上げる",
        "zh-CN": "最大化基本工资",
        "zh-TW": "最大化基本工資",
        vi: "Tối đa hóa lương cơ bản",
        id: "Memaksimalkan gaji pokok"
      },
      B: {
        ko: "복지와 의미 모두 고려",
        en: "Considering both benefits and meaning",
        ja: "福利と意味の両方を考慮",
        "zh-CN": "同时考虑福利和意义",
        "zh-TW": "同時考慮福利和意義",
        vi: "Cân nhắc cả phúc lợi và ý nghĩa",
        id: "Mempertimbangkan tunjangan dan makna"
      },
      C: {
        ko: "교육비나 성장 지원",
        en: "Education expenses or growth support",
        ja: "教育費や成長支援",
        "zh-CN": "教育费用或成长支持",
        "zh-TW": "教育費用或成長支持",
        vi: "Chi phí giáo dục hoặc hỗ trợ phát triển",
        id: "Biaya pendidikan atau dukungan pertumbuhan"
      },
      D: {
        ko: "유연 근무나 휴가",
        en: "Flexible work or vacation",
        ja: "柔軟な勤務や休暇",
        "zh-CN": "灵活工作或假期",
        "zh-TW": "靈活工作或假期",
        vi: "Làm việc linh hoạt hoặc nghỉ phép",
        id: "Kerja fleksibel atau liburan"
      }
    }
  },
  {
    id: 9,
    question: {
      ko: "이상적인 직장 생활은?",
      en: "What is your ideal work life?",
      ja: "理想的な職場生活は？",
      "zh-CN": "理想的工作生活是什么？",
      "zh-TW": "理想的工作生活是什麼？",
      vi: "Cuộc sống công việc lý tưởng của bạn là gì?",
      id: "Kehidupan kerja ideal Anda adalah?"
    },
    options: {
      A: {
        ko: "일한 만큼 확실한 보상",
        en: "Clear reward for work done",
        ja: "働いた分の確実な報酬",
        "zh-CN": "工作得到明确回报",
        "zh-TW": "工作得到明確回報",
        vi: "Phần thưởng rõ ràng cho công việc đã làm",
        id: "Imbalan jelas untuk pekerjaan yang dilakukan"
      },
      B: {
        ko: "세상에 기여하는 일",
        en: "Work that contributes to the world",
        ja: "世界に貢献する仕事",
        "zh-CN": "为世界做贡献的工作",
        "zh-TW": "為世界做貢獻的工作",
        vi: "Công việc đóng góp cho thế giới",
        id: "Pekerjaan yang berkontribusi pada dunia"
      },
      C: {
        ko: "계속 배우고 발전하는 것",
        en: "Continuously learning and growing",
        ja: "継続的に学び成長すること",
        "zh-CN": "持续学习和成长",
        "zh-TW": "持續學習和成長",
        vi: "Liên tục học hỏi và phát triển",
        id: "Terus belajar dan berkembang"
      },
      D: {
        ko: "일과 삶의 완벽한 분리",
        en: "Perfect separation of work and life",
        ja: "仕事と生活の完璧な分離",
        "zh-CN": "工作与生活的完美分离",
        "zh-TW": "工作與生活的完美分離",
        vi: "Sự tách biệt hoàn hảo giữa công việc và cuộc sống",
        id: "Pemisahan sempurna antara kerja dan hidup"
      }
    }
  },
  {
    id: 10,
    question: {
      ko: "10년 후 당신의 모습은?",
      en: "What will you be like in 10 years?",
      ja: "10年後のあなたの姿は？",
      "zh-CN": "10年后的你会是什么样子？",
      "zh-TW": "10年後的你會是什麼樣子？",
      vi: "Bạn sẽ như thế nào sau 10 năm nữa?",
      id: "Seperti apa Anda dalam 10 tahun ke depan?"
    },
    options: {
      A: {
        ko: "경제적으로 여유로운 사람",
        en: "A financially comfortable person",
        ja: "経済的に余裕のある人",
        "zh-CN": "经济上宽裕的人",
        "zh-TW": "經濟上寬裕的人",
        vi: "Người có tài chính thoải mái",
        id: "Orang yang nyaman secara finansial"
      },
      B: {
        ko: "의미있는 일을 하는 사람",
        en: "A person doing meaningful work",
        ja: "意味のある仕事をする人",
        "zh-CN": "做有意义工作的人",
        "zh-TW": "做有意義工作的人",
        vi: "Người làm công việc có ý nghĩa",
        id: "Orang yang melakukan pekerjaan bermakna"
      },
      C: {
        ko: "전문가로 인정받는 사람",
        en: "A person recognized as an expert",
        ja: "専門家として認められる人",
        "zh-CN": "被认可为专家的人",
        "zh-TW": "被認可為專家的人",
        vi: "Người được công nhận là chuyên gia",
        id: "Orang yang diakui sebagai ahli"
      },
      D: {
        ko: "행복하고 균형잡힌 사람",
        en: "A happy and balanced person",
        ja: "幸せでバランスの取れた人",
        "zh-CN": "幸福和平衡的人",
        "zh-TW": "幸福和平衡的人",
        vi: "Người hạnh phúc và cân bằng",
        id: "Orang yang bahagia dan seimbang"
      }
    }
  },
  {
    id: 11,
    question: {
      ko: "야근을 요청받았을 때?",
      en: "When asked to work overtime?",
      ja: "残業を頼まれた時？",
      "zh-CN": "被要求加班时？",
      "zh-TW": "被要求加班時？",
      vi: "Khi được yêu cầu làm thêm giờ?",
      id: "Ketika diminta lembur?"
    },
    options: {
      A: {
        ko: "수당이 나오면 가능",
        en: "Possible if there's overtime pay",
        ja: "残業代が出れば可能",
        "zh-CN": "有加班费就可以",
        "zh-TW": "有加班費就可以",
        vi: "Có thể nếu có tiền làm thêm giờ",
        id: "Mungkin jika ada uang lembur"
      },
      B: {
        ko: "일이 중요하면 가능",
        en: "Possible if the work is important",
        ja: "仕事が重要なら可能",
        "zh-CN": "工作重要就可以",
        "zh-TW": "工作重要就可以",
        vi: "Có thể nếu công việc quan trọng",
        id: "Mungkin jika pekerjaan penting"
      },
      C: {
        ko: "배울 게 있으면 가능",
        en: "Possible if there's something to learn",
        ja: "学ぶことがあれば可能",
        "zh-CN": "有东西可学就可以",
        "zh-TW": "有東西可學就可以",
        vi: "Có thể nếu có gì đó để học",
        id: "Mungkin jika ada yang bisa dipelajari"
      },
      D: {
        ko: "최대한 피하고 싶음",
        en: "Want to avoid as much as possible",
        ja: "最大限避けたい",
        "zh-CN": "尽可能避免",
        "zh-TW": "盡可能避免",
        vi: "Muốn tránh càng nhiều càng tốt",
        id: "Ingin menghindari sebanyak mungkin"
      }
    }
  },
  {
    id: 12,
    question: {
      ko: "당신이 일하는 진짜 이유는?",
      en: "What is your real reason for working?",
      ja: "あなたが働く本当の理由は？",
      "zh-CN": "你工作的真正原因是什么？",
      "zh-TW": "你工作的真正原因是什麼？",
      vi: "Lý do thực sự bạn làm việc là gì?",
      id: "Apa alasan sebenarnya Anda bekerja?"
    },
    options: {
      A: {
        ko: "돈을 벌기 위해",
        en: "To earn money",
        ja: "お金を稼ぐため",
        "zh-CN": "为了赚钱",
        "zh-TW": "為了賺錢",
        vi: "Để kiếm tiền",
        id: "Untuk menghasilkan uang"
      },
      B: {
        ko: "가치를 만들기 위해",
        en: "To create value",
        ja: "価値を作るため",
        "zh-CN": "为了创造价值",
        "zh-TW": "為了創造價值",
        vi: "Để tạo ra giá trị",
        id: "Untuk menciptakan nilai"
      },
      C: {
        ko: "성장하기 위해",
        en: "To grow",
        ja: "成長するため",
        "zh-CN": "为了成长",
        "zh-TW": "為了成長",
        vi: "Để phát triển",
        id: "Untuk berkembang"
      },
      D: {
        ko: "살기 위해 일하는 것",
        en: "Working to live",
        ja: "生きるために働くこと",
        "zh-CN": "为了生活而工作",
        "zh-TW": "為了生活而工作",
        vi: "Làm việc để sống",
        id: "Bekerja untuk hidup"
      }
    }
  }
];

export const workValuesResults: WorkValuesResult[] = [
  {
    type: "Type1",
    emoji: "💰",
    title: {
      ko: "금전 보상형",
      en: "Financial Reward Type",
      ja: "金銭報酬型",
      "zh-CN": "金钱奖励型",
      "zh-TW": "金錢獎勵型",
      vi: "Loại thưởng tài chính",
      id: "Tipe Imbalan Finansial"
    },
    description: {
      ko: "돈이 목표! 확실한 보상을 원하는 현실주의자",
      en: "Money is the goal! A realist who wants clear rewards",
      ja: "お金が目標！確実な報酬を求める現実主義者",
      "zh-CN": "金钱是目标！寻求明确奖励的现实主义者",
      "zh-TW": "金錢是目標！尋求明確獎勵的現實主義者",
      vi: "Tiền là mục tiêu! Người thực tế muốn phần thưởng rõ ràng",
      id: "Uang adalah tujuan! Realis yang menginginkan imbalan yang jelas"
    },
    longDescription: {
      ko: "당신은 명확한 보상과 경제적 안정을 가장 중요하게 생각하는 현실주의자입니다. 높은 연봉, 성과급, 복리후생 등 구체적인 금전적 보상이 있을 때 가장 큰 동기를 느끼며, 불확실한 상황보다는 확실한 결과를 선호합니다. 이런 가치관은 현실적이고 실용적인 접근을 가능하게 하지만, 때로는 돈에만 집중하다가 다른 중요한 가치들을 놓칠 수 있습니다.",
      en: "You are a realist who values clear rewards and economic stability most. You feel most motivated when there are specific financial rewards like high salaries, performance bonuses, and benefits, and prefer certain outcomes over uncertain situations. This value system enables realistic and practical approaches, but sometimes you may focus only on money and miss other important values.",
      ja: "あなたは明確な報酬と経済的安定を最も重要視する現実主義者です。高い給料、成果給、福利厚生など具体的な金銭的報酬がある時に最も大きな動機を感じ、不確実な状況よりも確実な結果を好みます。この価値観は現実的で実用的なアプローチを可能にしますが、時にはお金にだけ集中して他の重要な価値を見逃すことがあります。",
      "zh-CN": "你是一个最重视明确奖励和经济稳定的现实主义者。当有高薪、绩效奖金、福利等具体金钱奖励时，你会感到最大的动力，并且更喜欢确定的结果而不是不确定的情况。这种价值观使现实和实用的方法成为可能，但有时你可能只关注金钱而错过其他重要价值。",
      "zh-TW": "你是一個最重視明確獎勵和經濟穩定的現實主義者。當有高薪、績效獎金、福利等具體金錢獎勵時，你會感到最大的動力，並且更喜歡確定的結果而不是不確定的情況。這種價值觀使現實和實用的方法成為可能，但有時你可能只關注金錢而錯過其他重要價值。",
      vi: "Bạn là người thực tế coi trọng phần thưởng rõ ràng và ổn định kinh tế nhất. Bạn cảm thấy động lực lớn nhất khi có những phần thưởng tài chính cụ thể như lương cao, thưởng hiệu suất và phúc lợi, và thích kết quả chắc chắn hơn tình huống không chắc chắn. Hệ thống giá trị này cho phép các cách tiếp cận thực tế và thực dụng, nhưng đôi khi bạn có thể chỉ tập trung vào tiền bạc và bỏ lỡ những giá trị quan trọng khác.",
      id: "Anda adalah seorang realis yang paling menghargai imbalan yang jelas dan stabilitas ekonomi. Anda merasa paling termotivasi ketika ada imbalan finansial spesifik seperti gaji tinggi, bonus kinerja, dan tunjangan, dan lebih menyukai hasil yang pasti daripada situasi yang tidak pasti. Sistem nilai ini memungkinkan pendekatan yang realistis dan praktis, tetapi terkadang Anda mungkin hanya fokus pada uang dan melewatkan nilai-nilai penting lainnya."
    },
    coreValues: {
      ko: ["금전", "보상", "실리", "안정성"],
      en: ["Money", "Reward", "Practicality", "Stability"],
      ja: ["金銭", "報酬", "実利", "安定性"],
      "zh-CN": ["金钱", "奖励", "实用", "稳定"],
      "zh-TW": ["金錢", "獎勵", "實用", "穩定"],
      vi: ["Tiền bạc", "Phần thưởng", "Thực dụng", "Ổn định"],
      id: ["Uang", "Imbalan", "Praktis", "Stabilitas"]
    },
    strengths: {
      ko: ["현실적", "명확한 목표", "동기 부여 확실"],
      en: ["Realistic", "Clear goals", "Motivation certain"],
      ja: ["現実的", "明確な目標", "動機付け確実"],
      "zh-CN": ["现实", "目标明确", "动机确定"],
      "zh-TW": ["現實", "目標明確", "動機確定"],
      vi: ["Thực tế", "Mục tiêu rõ ràng", "Động lực chắc chắn"],
      id: ["Realistis", "Tujuan jelas", "Motivasi pasti"]
    },
    weaknesses: {
      ko: ["돈에만 집중", "번아웃", "의미 상실"],
      en: ["Focus only on money", "Burnout", "Loss of meaning"],
      ja: ["お金にだけ集中", "バーンアウト", "意味の喪失"],
      "zh-CN": ["只关注金钱", "倦怠", "失去意义"],
      "zh-TW": ["只關注金錢", "倦怠", "失去意義"],
      vi: ["Chỉ tập trung vào tiền", "Kiệt sức", "Mất ý nghĩa"],
      id: ["Hanya fokus pada uang", "Kelelahan", "Kehilangan makna"]
    },
    suitableJobs: {
      ko: ["영업직", "금융권", "성과급 높은 직종"],
      en: ["Sales", "Finance", "High-performance jobs"],
      ja: ["営業職", "金融業", "成果給の高い職種"],
      "zh-CN": ["销售", "金融", "高绩效工作"],
      "zh-TW": ["銷售", "金融", "高績效工作"],
      vi: ["Bán hàng", "Tài chính", "Công việc hiệu suất cao"],
      id: ["Penjualan", "Keuangan", "Pekerjaan berkinerja tinggi"]
    },
    advice: {
      ko: "돈도 중요하지만 건강과 관계도 챙기세요. 돈만 쫓다가 정작 중요한 것을 잃을 수 있어요!",
      en: "Money is important, but take care of your health and relationships too. You might lose what's truly important by only chasing money!",
      ja: "お金も大切ですが、健康と関係も大切にしてください。お金だけを追いかけて、本当に大切なものを失うかもしれません！",
      "zh-CN": "金钱很重要，但也要照顾好你的健康和关系。只追求金钱可能会失去真正重要的东西！",
      "zh-TW": "金錢很重要，但也要照顧好你的健康和關係。只追求金錢可能會失去真正重要的東西！",
      vi: "Tiền bạc cũng quan trọng, nhưng hãy chăm sóc sức khỏe và các mối quan hệ của bạn. Chỉ đuổi theo tiền bạc có thể mất đi những thứ thực sự quan trọng!",
      id: "Uang juga penting, tetapi rawat juga kesehatan dan hubungan Anda. Hanya mengejar uang bisa kehilangan hal-hal yang benar-benar penting!"
    },
    averageSatisfaction: {
      ko: "연봉 상승 시 높음, 정체 시 불만",
      en: "High when salary increases, dissatisfied when stagnant",
      ja: "年収上昇時高く、停滞時不満",
      "zh-CN": "加薪时高，停滞时不满",
      "zh-TW": "加薪時高，停滯時不滿",
      vi: "Cao khi lương tăng, không hài lòng khi trì trệ",
      id: "Tinggi saat gaji naik, tidak puas saat stagnan"
    },
    turnoverFrequency: {
      ko: "높음 (더 나은 조건 추구)",
      en: "High (seeking better conditions)",
      ja: "高い（より良い条件を求める）",
      "zh-CN": "高（寻求更好条件）",
      "zh-TW": "高（尋求更好條件）",
      vi: "Cao (tìm kiếm điều kiện tốt hơn)",
      id: "Tinggi (mencari kondisi yang lebih baik)"
    },
    burnoutRisk: {
      ko: "높음 (과도한 업무)",
      en: "High (excessive work)",
      ja: "高い（過度な業務）",
      "zh-CN": "高（过度工作）",
      "zh-TW": "高（過度工作）",
      vi: "Cao (công việc quá mức)",
      id: "Tinggi (pekerjaan berlebihan)"
    }
  },
  {
    type: "Type2",
    emoji: "💝",
    title: {
      ko: "의미 가치형",
      en: "Meaning & Value Type",
      ja: "意味価値型",
      "zh-CN": "意义价值型",
      "zh-TW": "意義價值型",
      vi: "Loại ý nghĩa và giá trị",
      id: "Tipe Makna & Nilai"
    },
    description: {
      ko: "보람이 목표! 세상에 기여하고 싶은 이상주의자",
      en: "Fulfillment is the goal! An idealist who wants to contribute to the world",
      ja: "やりがいが目標！世界に貢献したい理想主義者",
      "zh-CN": "成就感是目标！想要为世界做贡献的理想主义者",
      "zh-TW": "成就感是目標！想要為世界做貢獻的理想主義者",
      vi: "Sự thỏa mãn là mục tiêu! Người lý tưởng muốn đóng góp cho thế giới",
      id: "Kepuasan adalah tujuan! Idealist yang ingin berkontribusi pada dunia"
    },
    longDescription: {
      ko: "당신은 일의 의미와 사회적 가치를 가장 중요하게 생각하는 이상주의자입니다. 단순한 돈이나 성공보다는 세상에 긍정적인 영향을 미치고, 다른 사람들에게 도움이 되는 일을 하고 싶어합니다. 이런 가치관은 높은 동기부여와 보람을 가져다주지만, 때로는 현실적인 고려 없이 이상만 쫓다가 번아웃에 빠질 수 있습니다.",
      en: "You are an idealist who values the meaning of work and social values most. Rather than simple money or success, you want to have a positive impact on the world and do work that helps others. This value system brings high motivation and fulfillment, but sometimes you may chase ideals without realistic consideration and fall into burnout.",
      ja: "あなたは仕事の意味と社会的価値を最も重要視する理想主義者です。単純なお金や成功よりも、世界にポジティブな影響を与え、他の人々に役立つ仕事をしたいと思っています。この価値観は高い動機づけとやりがいをもたらしますが、時には現実的な考慮なしに理想だけを追いかけてバーンアウトに陥ることがあります。",
      "zh-CN": "你是一个最重视工作意义和社会价值的理想主义者。比起简单的金钱或成功，你更想对世界产生积极影响，做帮助他人的工作。这种价值观带来高度的动机和成就感，但有时你可能不考虑现实情况而只追求理想，从而陷入倦怠。",
      "zh-TW": "你是一個最重視工作意義和社會價值的理想主義者。比起簡單的金錢或成功，你更想對世界產生積極影響，做幫助他人的工作。這種價值觀帶來高度的動機和成就感，但有時你可能不考慮現實情況而只追求理想，從而陷入倦怠。",
      vi: "Bạn là người lý tưởng coi trọng ý nghĩa công việc và giá trị xã hội nhất. Thay vì tiền bạc hay thành công đơn giản, bạn muốn tạo tác động tích cực đến thế giới và làm công việc giúp đỡ người khác. Hệ thống giá trị này mang lại động lực cao và sự thỏa mãn, nhưng đôi khi bạn có thể chỉ đuổi theo lý tưởng mà không cân nhắc thực tế và rơi vào tình trạng kiệt sức.",
      id: "Anda adalah seorang idealis yang paling menghargai makna pekerjaan dan nilai-nilai sosial. Daripada uang atau kesuksesan sederhana, Anda ingin memberikan dampak positif pada dunia dan melakukan pekerjaan yang membantu orang lain. Sistem nilai ini membawa motivasi tinggi dan kepuasan, tetapi terkadang Anda mungkin hanya mengejar idealisme tanpa pertimbangan realistis dan jatuh ke dalam kelelahan."
    },
    coreValues: {
      ko: ["의미", "가치", "기여", "보람"],
      en: ["Meaning", "Value", "Contribution", "Fulfillment"],
      ja: ["意味", "価値", "貢献", "やりがい"],
      "zh-CN": ["意义", "价值", "贡献", "成就感"],
      "zh-TW": ["意義", "價值", "貢獻", "成就感"],
      vi: ["Ý nghĩa", "Giá trị", "Đóng góp", "Sự thỏa mãn"],
      id: ["Makna", "Nilai", "Kontribusi", "Kepuasan"]
    },
    strengths: {
      ko: ["헌신적", "동기 지속", "만족도 높음"],
      en: ["Dedicated", "Sustained motivation", "High satisfaction"],
      ja: ["献身的", "動機持続", "満足度高い"],
      "zh-CN": ["奉献", "持续动机", "高满意度"],
      "zh-TW": ["奉獻", "持續動機", "高滿意度"],
      vi: ["Tận tụy", "Động lực bền vững", "Sự hài lòng cao"],
      id: ["Berkomitmen", "Motivasi berkelanjutan", "Kepuasan tinggi"]
    },
    weaknesses: {
      ko: ["현실적 어려움", "낮은 대우", "희생"],
      en: ["Realistic difficulties", "Low treatment", "Sacrifice"],
      ja: ["現実的困難", "低い待遇", "犠牲"],
      "zh-CN": ["现实困难", "待遇低", "牺牲"],
      "zh-TW": ["現實困難", "待遇低", "犧牲"],
      vi: ["Khó khăn thực tế", "Đối xử thấp", "Hy sinh"],
      id: ["Kesulitan realistis", "Perlakuan rendah", "Pengorbanan"]
    },
    suitableJobs: {
      ko: ["교사", "상담사", "의료인", "NGO", "사회적 기업"],
      en: ["Teacher", "Counselor", "Healthcare worker", "NGO", "Social enterprise"],
      ja: ["教師", "カウンセラー", "医療従事者", "NGO", "社会企業"],
      "zh-CN": ["教师", "咨询师", "医疗人员", "NGO", "社会企业"],
      "zh-TW": ["教師", "諮詢師", "醫療人員", "NGO", "社會企業"],
      vi: ["Giáo viên", "Tư vấn viên", "Nhân viên y tế", "NGO", "Doanh nghiệp xã hội"],
      id: ["Guru", "Konselor", "Tenaga medis", "NGO", "Perusahaan sosial"]
    },
    advice: {
      ko: "의미도 중요하지만 자신을 돌보는 것도 필요해요. 소진되지 않도록 경계를 지키세요!",
      en: "Meaning is important, but taking care of yourself is also necessary. Set boundaries so you don't get exhausted!",
      ja: "意味も大切ですが、自分を大切にすることも必要です。燃え尽きないように境界を守ってください！",
      "zh-CN": "意义很重要，但照顾自己也很必要。设定界限，这样你就不会精疲力尽！",
      "zh-TW": "意義很重要，但照顧自己也很必要。設定界限，這樣你就不會精疲力盡！",
      vi: "Ý nghĩa cũng quan trọng, nhưng chăm sóc bản thân cũng cần thiết. Hãy đặt ranh giới để không bị kiệt sức!",
      id: "Makna juga penting, tetapi merawat diri sendiri juga diperlukan. Tetapkan batasan agar tidak kelelahan!"
    },
    averageSatisfaction: {
      ko: "의미 느낄 때 매우 높음",
      en: "Very high when feeling meaning",
      ja: "意味を感じる時非常に高い",
      "zh-CN": "感受到意义时非常高",
      "zh-TW": "感受到意義時非常高",
      vi: "Rất cao khi cảm thấy ý nghĩa",
      id: "Sangat tinggi saat merasakan makna"
    },
    turnoverFrequency: {
      ko: "낮음 (가치관 일치 시)",
      en: "Low (when values align)",
      ja: "低い（価値観一致時）",
      "zh-CN": "低（价值观一致时）",
      "zh-TW": "低（價值觀一致時）",
      vi: "Thấp (khi giá trị phù hợp)",
      id: "Rendah (saat nilai selaras)"
    },
    burnoutRisk: {
      ko: "중간 (과도한 헌신 주의)",
      en: "Medium (beware of excessive dedication)",
      ja: "中程度（過度な献身に注意）",
      "zh-CN": "中等（注意过度奉献）",
      "zh-TW": "中等（注意過度奉獻）",
      vi: "Trung bình (cẩn thận với sự tận tụy quá mức)",
      id: "Sedang (hati-hati dengan dedikasi berlebihan)"
    }
  },
  {
    type: "Type3",
    emoji: "📈",
    title: {
      ko: "성장 발전형",
      en: "Growth & Development Type",
      ja: "成長発展型",
      "zh-CN": "成长发展型",
      "zh-TW": "成長發展型",
      vi: "Loại phát triển và tăng trưởng",
      id: "Tipe Pertumbuhan & Pengembangan"
    },
    description: {
      ko: "성장이 목표! 끊임없이 배우는 자기계발러",
      en: "Growth is the goal! A self-developer who never stops learning",
      ja: "成長が目標！絶えず学ぶ自己啓発者",
      "zh-CN": "成长是目标！不断学习的自我提升者",
      "zh-TW": "成長是目標！不斷學習的自我提升者",
      vi: "Phát triển là mục tiêu! Người tự phát triển không ngừng học hỏi",
      id: "Pertumbuhan adalah tujuan! Pengembang diri yang tidak pernah berhenti belajar"
    },
    longDescription: {
      ko: "당신은 지속적인 성장과 발전을 가장 중요하게 생각하는 자기계발러입니다. 새로운 것을 배우고, 도전적인 과제를 해결하며, 전문성을 쌓아가는 과정에서 가장 큰 만족을 느낍니다. 이런 가치관은 빠른 성장과 전문가로의 발전을 가능하게 하지만, 때로는 현재를 즐기지 못하고 항상 다음을 향해 달려가다가 번아웃에 빠질 수 있습니다.",
      en: "You are a self-developer who values continuous growth and development most. You feel the greatest satisfaction in the process of learning new things, solving challenging tasks, and building expertise. This value system enables rapid growth and development as an expert, but sometimes you may not enjoy the present and always run toward the next thing, leading to burnout.",
      ja: "あなたは持続的な成長と発展を最も重要視する自己啓発者です。新しいことを学び、挑戦的な課題を解決し、専門性を積み上げる過程で最も大きな満足を感じます。この価値観は急速な成長と専門家としての発展を可能にしますが、時には現在を楽しめず、常に次のことを目指して走り続けてバーンアウトに陥ることがあります。",
      "zh-CN": "你是一个最重视持续成长和发展的自我提升者。在学习新事物、解决挑战性任务、积累专业知识的过程中，你感受到最大的满足。这种价值观使快速成长和专家发展成为可能，但有时你可能无法享受当下，总是奔向下一件事，从而导致倦怠。",
      "zh-TW": "你是一個最重視持續成長和發展的自我提升者。在學習新事物、解決挑戰性任務、積累專業知識的過程中，你感受到最大的滿足。這種價值觀使快速成長和專家發展成為可能，但有時你可能無法享受當下，總是奔向下一件事，從而導致倦怠。",
      vi: "Bạn là người tự phát triển coi trọng sự tăng trưởng và phát triển liên tục nhất. Bạn cảm thấy sự thỏa mãn lớn nhất trong quá trình học hỏi những điều mới, giải quyết các nhiệm vụ thử thách và xây dựng chuyên môn. Hệ thống giá trị này cho phép tăng trưởng nhanh chóng và phát triển như một chuyên gia, nhưng đôi khi bạn có thể không tận hưởng hiện tại và luôn chạy theo điều tiếp theo, dẫn đến kiệt sức.",
      id: "Anda adalah pengembang diri yang paling menghargai pertumbuhan dan pengembangan berkelanjutan. Anda merasakan kepuasan terbesar dalam proses mempelajari hal-hal baru, menyelesaikan tugas-tugas menantang, dan membangun keahlian. Sistem nilai ini memungkinkan pertumbuhan cepat dan pengembangan sebagai ahli, tetapi terkadang Anda mungkin tidak menikmati saat ini dan selalu berlari menuju hal berikutnya, menyebabkan kelelahan."
    },
    coreValues: {
      ko: ["성장", "배움", "도전", "전문성"],
      en: ["Growth", "Learning", "Challenge", "Expertise"],
      ja: ["成長", "学習", "挑戦", "専門性"],
      "zh-CN": ["成长", "学习", "挑战", "专业性"],
      "zh-TW": ["成長", "學習", "挑戰", "專業性"],
      vi: ["Tăng trưởng", "Học hỏi", "Thử thách", "Chuyên môn"],
      id: ["Pertumbuhan", "Pembelajaran", "Tantangan", "Keahlian"]
    },
    strengths: {
      ko: ["발전 지속", "전문가 성장", "적응력"],
      en: ["Continuous development", "Expert growth", "Adaptability"],
      ja: ["発展持続", "専門家成長", "適応力"],
      "zh-CN": ["持续发展", "专家成长", "适应力"],
      "zh-TW": ["持續發展", "專家成長", "適應力"],
      vi: ["Phát triển liên tục", "Tăng trưởng chuyên gia", "Khả năng thích ứng"],
      id: ["Pengembangan berkelanjutan", "Pertumbuhan ahli", "Kemampuan beradaptasi"]
    },
    weaknesses: {
      ko: ["조급함", "불안정", "번아웃"],
      en: ["Impatience", "Instability", "Burnout"],
      ja: ["焦り", "不安定", "バーンアウト"],
      "zh-CN": ["急躁", "不稳定", "倦怠"],
      "zh-TW": ["急躁", "不穩定", "倦怠"],
      vi: ["Nóng vội", "Không ổn định", "Kiệt sức"],
      id: ["Tidak sabar", "Tidak stabil", "Kelelahan"]
    },
    suitableJobs: {
      ko: ["IT", "스타트업", "컨설팅", "교육"],
      en: ["IT", "Startup", "Consulting", "Education"],
      ja: ["IT", "スタートアップ", "コンサルティング", "教育"],
      "zh-CN": ["IT", "初创公司", "咨询", "教育"],
      "zh-TW": ["IT", "初創公司", "諮詢", "教育"],
      vi: ["IT", "Khởi nghiệp", "Tư vấn", "Giáo dục"],
      id: ["IT", "Startup", "Konsultasi", "Pendidikan"]
    },
    advice: {
      ko: "성장도 중요하지만 현재를 즐기는 것도 필요해요. 늘 다음을 향하면 지금이 불행해질 수 있어요!",
      en: "Growth is important, but enjoying the present is also necessary. If you always look toward the next thing, the present can become unhappy!",
      ja: "成長も大切ですが、現在を楽しむことも必要です。いつも次のことを向いていれば、今が不幸になるかもしれません！",
      "zh-CN": "成长很重要，但享受当下也很必要。如果总是展望未来，现在可能会变得不快乐！",
      "zh-TW": "成長很重要，但享受當下也很必要。如果總是展望未來，現在可能會變得不快樂！",
      vi: "Phát triển cũng quan trọng, nhưng tận hưởng hiện tại cũng cần thiết. Nếu luôn hướng về điều tiếp theo, hiện tại có thể trở nên không hạnh phúc!",
      id: "Pertumbuhan juga penting, tetapi menikmati saat ini juga diperlukan. Jika selalu mengarah ke hal berikutnya, saat ini bisa menjadi tidak bahagia!"
    },
    averageSatisfaction: {
      ko: "배울 것 많을 때 높음",
      en: "High when there's a lot to learn",
      ja: "学ぶことが多い時高い",
      "zh-CN": "有很多东西可学时高",
      "zh-TW": "有很多東西可學時高",
      vi: "Cao khi có nhiều thứ để học",
      id: "Tinggi saat ada banyak hal untuk dipelajari"
    },
    turnoverFrequency: {
      ko: "중간 (성장 기회 따라)",
      en: "Medium (following growth opportunities)",
      ja: "中程度（成長機会に従って）",
      "zh-CN": "中等（跟随成长机会）",
      "zh-TW": "中等（跟隨成長機會）",
      vi: "Trung bình (theo cơ hội phát triển)",
      id: "Sedang (mengikuti peluang pertumbuhan)"
    },
    burnoutRisk: {
      ko: "중간 (과도한 욕심 주의)",
      en: "Medium (beware of excessive ambition)",
      ja: "中程度（過度な野心に注意）",
      "zh-CN": "中等（注意过度野心）",
      "zh-TW": "中等（注意過度野心）",
      vi: "Trung bình (cẩn thận với tham vọng quá mức)",
      id: "Sedang (hati-hati dengan ambisi berlebihan)"
    }
  },
  {
    type: "Type4",
    emoji: "⚖️",
    title: {
      ko: "균형 워라밸형",
      en: "Balance & Work-Life Type",
      ja: "バランス・ワークライフ型",
      "zh-CN": "平衡工作生活型",
      "zh-TW": "平衡工作生活型",
      vi: "Loại cân bằng công việc-cuộc sống",
      id: "Tipe Keseimbangan Kerja-Hidup"
    },
    description: {
      ko: "삶이 목표! 일과 삶의 균형을 지키는 워라밸러",
      en: "Life is the goal! A work-life balancer who maintains work-life balance",
      ja: "人生が目標！仕事と生活のバランスを保つワークライフバランサー",
      "zh-CN": "生活是目标！保持工作生活平衡的工作生活平衡者",
      "zh-TW": "生活是目標！保持工作生活平衡的工作生活平衡者",
      vi: "Cuộc sống là mục tiêu! Người cân bằng công việc-cuộc sống duy trì sự cân bằng",
      id: "Hidup adalah tujuan! Penyeimbang kerja-hidup yang mempertahankan keseimbangan"
    },
    longDescription: {
      ko: "당신은 일과 삶의 균형을 가장 중요하게 생각하는 워라밸러입니다. 과도한 업무나 스트레스보다는 건강한 삶의 리듬과 개인 시간을 소중히 여기며, 지속 가능한 방식으로 일하고 싶어합니다. 이런 가치관은 건강하고 안정적인 삶을 가능하게 하지만, 때로는 성장 기회를 놓치거나 경쟁력이 약화될 수 있습니다.",
      en: "You are a work-life balancer who values work-life balance most. Rather than excessive work or stress, you cherish healthy life rhythms and personal time, and want to work in a sustainable way. This value system enables a healthy and stable life, but sometimes you may miss growth opportunities or your competitiveness may weaken.",
      ja: "あなたは仕事と生活のバランスを最も重要視するワークライフバランサーです。過度な業務やストレスよりも、健康的な生活リズムと個人時間を大切にし、持続可能な方法で働きたいと思っています。この価値観は健康的で安定した生活を可能にしますが、時には成長機会を逃したり、競争力が弱まる可能性があります。",
      "zh-CN": "你是一个最重视工作生活平衡的工作生活平衡者。比起过度工作或压力，你更珍惜健康的生活节奏和个人时间，希望以可持续的方式工作。这种价值观使健康稳定的生活成为可能，但有时你可能错过成长机会或竞争力可能减弱。",
      "zh-TW": "你是一個最重視工作生活平衡的工作生活平衡者。比起過度工作或壓力，你更珍惜健康的生活節奏和個人時間，希望以可持續的方式工作。這種價值觀使健康穩定的生活成為可能，但有時你可能錯過成長機會或競爭力可能減弱。",
      vi: "Bạn là người cân bằng công việc-cuộc sống coi trọng sự cân bằng công việc-cuộc sống nhất. Thay vì công việc quá mức hay căng thẳng, bạn trân trọng nhịp điệu sống lành mạnh và thời gian cá nhân, và muốn làm việc theo cách bền vững. Hệ thống giá trị này cho phép một cuộc sống lành mạnh và ổn định, nhưng đôi khi bạn có thể bỏ lỡ cơ hội phát triển hoặc khả năng cạnh tranh có thể yếu đi.",
      id: "Anda adalah penyeimbang kerja-hidup yang paling menghargai keseimbangan kerja-hidup. Daripada pekerjaan berlebihan atau stres, Anda menghargai ritme hidup yang sehat dan waktu pribadi, dan ingin bekerja dengan cara yang berkelanjutan. Sistem nilai ini memungkinkan kehidupan yang sehat dan stabil, tetapi terkadang Anda mungkin melewatkan peluang pertumbuhan atau daya saing Anda mungkin melemah."
    },
    coreValues: {
      ko: ["균형", "여유", "건강", "행복"],
      en: ["Balance", "Leisure", "Health", "Happiness"],
      ja: ["バランス", "余裕", "健康", "幸福"],
      "zh-CN": ["平衡", "悠闲", "健康", "幸福"],
      "zh-TW": ["平衡", "悠閒", "健康", "幸福"],
      vi: ["Cân bằng", "Thư giãn", "Sức khỏe", "Hạnh phúc"],
      id: ["Keseimbangan", "Santai", "Kesehatan", "Kebahagiaan"]
    },
    strengths: {
      ko: ["스트레스 적음", "건강 관리", "지속 가능"],
      en: ["Low stress", "Health management", "Sustainable"],
      ja: ["ストレス少ない", "健康管理", "持続可能"],
      "zh-CN": ["压力小", "健康管理", "可持续"],
      "zh-TW": ["壓力小", "健康管理", "可持續"],
      vi: ["Ít căng thẳng", "Quản lý sức khỏe", "Bền vững"],
      id: ["Stres rendah", "Manajemen kesehatan", "Berkelanjutan"]
    },
    weaknesses: {
      ko: ["성장 더딤", "경쟁력 약화 가능"],
      en: ["Slow growth", "Possible weakened competitiveness"],
      ja: ["成長遅い", "競争力弱化の可能性"],
      "zh-CN": ["成长缓慢", "竞争力可能减弱"],
      "zh-TW": ["成長緩慢", "競爭力可能減弱"],
      vi: ["Tăng trưởng chậm", "Khả năng cạnh tranh có thể yếu đi"],
      id: ["Pertumbuhan lambat", "Daya saing mungkin melemah"]
    },
    suitableJobs: {
      ko: ["공무원", "연구직", "교사", "대기업"],
      en: ["Public servant", "Research", "Teacher", "Large corporation"],
      ja: ["公務員", "研究職", "教師", "大企業"],
      "zh-CN": ["公务员", "研究职位", "教师", "大企业"],
      "zh-TW": ["公務員", "研究職位", "教師", "大企業"],
      vi: ["Công chức", "Nghiên cứu", "Giáo viên", "Tập đoàn lớn"],
      id: ["Pegawai negeri", "Penelitian", "Guru", "Korporasi besar"]
    },
    advice: {
      ko: "균형도 좋지만 가끔은 집중이 필요한 시기도 있어요. 유연하게 대응하세요!",
      en: "Balance is good, but sometimes there are times when focus is needed. Respond flexibly!",
      ja: "バランスも良いですが、時には集中が必要な時もあります。柔軟に対応してください！",
      "zh-CN": "平衡很好，但有时也需要专注的时候。灵活应对！",
      "zh-TW": "平衡很好，但有時也需要專注的時候。靈活應對！",
      vi: "Cân bằng cũng tốt, nhưng đôi khi có những lúc cần tập trung. Hãy phản ứng linh hoạt!",
      id: "Keseimbangan juga baik, tetapi terkadang ada saat-saat ketika fokus diperlukan. Tanggapi dengan fleksibel!"
    },
    averageSatisfaction: {
      ko: "워라밸 좋을 때 매우 높음",
      en: "Very high when work-life balance is good",
      ja: "ワークライフバランス良い時非常に高い",
      "zh-CN": "工作生活平衡好时非常高",
      "zh-TW": "工作生活平衡好時非常高",
      vi: "Rất cao khi cân bằng công việc-cuộc sống tốt",
      id: "Sangat tinggi saat keseimbangan kerja-hidup baik"
    },
    turnoverFrequency: {
      ko: "낮음 (좋은 환경 유지)",
      en: "Low (maintaining good environment)",
      ja: "低い（良い環境維持）",
      "zh-CN": "低（维持良好环境）",
      "zh-TW": "低（維持良好環境）",
      vi: "Thấp (duy trì môi trường tốt)",
      id: "Rendah (mempertahankan lingkungan yang baik)"
    },
    burnoutRisk: {
      ko: "낮음 (관리 잘함)",
      en: "Low (well managed)",
      ja: "低い（管理良好）",
      "zh-CN": "低（管理良好）",
      "zh-TW": "低（管理良好）",
      vi: "Thấp (quản lý tốt)",
      id: "Rendah (terkelola dengan baik)"
    }
  }
];

export function calculateWorkValuesResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0 };
  
  answers.forEach((answer, index) => {
    const questionNumber = index + 1;
    const choice = answer;
    
    // 모든 문항에서 A=Type1, B=Type2, C=Type3, D=Type4로 3점씩
    if (choice === 'A') scores.Type1 += 3;
    else if (choice === 'B') scores.Type2 += 3;
    else if (choice === 'C') scores.Type3 += 3;
    else if (choice === 'D') scores.Type4 += 3;
  });
  
  // 최고 점수 찾기
  const maxScore = Math.max(...Object.values(scores));
  const maxTypes = Object.entries(scores)
    .filter(([_, score]) => score === maxScore)
    .map(([type, _]) => type);
  
  // 동점일 경우 Q10-Q12 우선 반영
  if (maxTypes.length > 1) {
    const priorityAnswers = answers.slice(9, 12); // Q10, Q11, Q12
    for (const answer of priorityAnswers) {
      if (answer === 'A' && maxTypes.includes('Type1')) return 'Type1';
      if (answer === 'B' && maxTypes.includes('Type2')) return 'Type2';
      if (answer === 'C' && maxTypes.includes('Type3')) return 'Type3';
      if (answer === 'D' && maxTypes.includes('Type4')) return 'Type4';
    }
  }
  
  return maxTypes[0];
}
