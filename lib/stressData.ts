// 스트레스 반응 테스트 데이터

export interface StressQuestion {
  id: number;
  question: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    id: string;
    vi: string;
  };
  options: Array<{
    text: {
      ko: string;
      en: string;
      ja: string;
      'zh-CN': string;
      'zh-TW': string;
      id: string;
      vi: string;
    };
    type: string; // 'A', 'B', 'C', 'D'
  }>;
}

export interface StressResult {
  type: string;
  emoji: string;
  title: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    id: string;
    vi: string;
  };
  description: {
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    id: string;
    vi: string;
  };
  traits: Array<{
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    id: string;
    vi: string;
  }>;
  coping: Array<{
    ko: string;
    en: string;
    ja: string;
    'zh-CN': string;
    'zh-TW': string;
    id: string;
    vi: string;
  }>;
}

// 스트레스 반응 질문 (12문항)
export const stressQuestions: StressQuestion[] = [
  {
    id: 1,
    question: {
      ko: '예상치 못한 문제가 발생했을 때 당신의 첫 반응은?',
      en: 'When an unexpected problem occurs, what is your first reaction?',
      ja: '予期せぬ問題が発生したとき、あなたの最初の反応は？',
      'zh-CN': '当出现意外问题时，你的第一反应是？',
      'zh-TW': '當出現意外問題時，你的第一反應是？',
      id: 'Ketika masalah tak terduga terjadi, reaksi pertama Anda adalah?',
      vi: 'Khi có vấn đề bất ngờ xảy ra, phản ứng đầu tiên của bạn là?'
    },
    options: [
      {
        text: {
          ko: '침착하게 상황을 분석하고 해결책을 찾는다',
          en: 'Calmly analyze the situation and find a solution',
          ja: '冷静に状況を分析し、解決策を見つける',
          'zh-CN': '冷静分析情况并寻找解决方案',
          'zh-TW': '冷靜分析情況並尋找解決方案',
          id: 'Menganalisis situasi dengan tenang dan mencari solusi',
          vi: 'Bình tĩnh phân tích tình huống và tìm giải pháp'
        },
        type: 'A'
      },
      {
        text: {
          ko: '주변 사람들에게 도움을 요청한다',
          en: 'Ask for help from people around me',
          ja: '周りの人に助けを求める',
          'zh-CN': '向周围的人寻求帮助',
          'zh-TW': '向周圍的人尋求幫助',
          id: 'Meminta bantuan dari orang-orang di sekitar',
          vi: 'Nhờ mọi người xung quanh giúp đỡ'
        },
        type: 'B'
      },
      {
        text: {
          ko: '일단 당황하지만 곧 마음을 다잡는다',
          en: 'Feel flustered at first but soon regain composure',
          ja: '一旦慌てるがすぐに気持ちを立て直す',
          'zh-CN': '一开始会慌张但很快恢复冷静',
          'zh-TW': '一開始會慌張但很快恢復冷靜',
          id: 'Panik pada awalnya tapi segera tenang kembali',
          vi: 'Ban đầu hoảng loạn nhưng nhanh chóng lấy lại bình tĩnh'
        },
        type: 'C'
      },
      {
        text: {
          ko: '스트레스를 느끼고 회피하고 싶어진다',
          en: 'Feel stressed and want to avoid it',
          ja: 'ストレスを感じて回避したくなる',
          'zh-CN': '感到压力想要逃避',
          'zh-TW': '感到壓力想要逃避',
          id: 'Merasa stres dan ingin menghindarinya',
          vi: 'Cảm thấy căng thẳng và muốn tránh né'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: '업무나 학업에서 압박감을 느낄 때 어떻게 대처하나요?',
      en: 'How do you cope when you feel pressure at work or school?',
      ja: '仕事や学業でプレッシャーを感じたとき、どのように対処しますか？',
      'zh-CN': '在工作或学习中感到压力时，你如何应对？',
      'zh-TW': '在工作或學習中感到壓力時，你如何應對？',
      id: 'Bagaimana Anda mengatasi tekanan di pekerjaan atau sekolah?',
      vi: 'Bạn xử lý như thế nào khi cảm thấy áp lực trong công việc hoặc học tập?'
    },
    options: [
      {
        text: {
          ko: '계획을 세워 체계적으로 처리한다',
          en: 'Make a plan and handle it systematically',
          ja: '計画を立てて体系的に処理する',
          'zh-CN': '制定计划系统地处理',
          'zh-TW': '制定計劃系統地處理',
          id: 'Membuat rencana dan menanganinya secara sistematis',
          vi: 'Lập kế hoạch và xử lý có hệ thống'
        },
        type: 'A'
      },
      {
        text: {
          ko: '친구나 동료와 이야기하며 풀어낸다',
          en: 'Talk it out with friends or colleagues',
          ja: '友達や同僚と話して解消する',
          'zh-CN': '与朋友或同事交谈来缓解',
          'zh-TW': '與朋友或同事交談來緩解',
          id: 'Membicarakannya dengan teman atau rekan kerja',
          vi: 'Trò chuyện với bạn bè hoặc đồng nghiệp'
        },
        type: 'B'
      },
      {
        text: {
          ko: '휴식을 취하고 다시 집중한다',
          en: 'Take a break and refocus',
          ja: '休憩を取って再び集中する',
          'zh-CN': '休息一下再重新集中',
          'zh-TW': '休息一下再重新集中',
          id: 'Beristirahat dan fokus kembali',
          vi: 'Nghỉ ngơi và tập trung lại'
        },
        type: 'C'
      },
      {
        text: {
          ko: '미루거나 다른 일로 주의를 돌린다',
          en: 'Procrastinate or distract myself with other things',
          ja: '先延ばしにするか他のことに気を向ける',
          'zh-CN': '拖延或转移注意力到其他事情',
          'zh-TW': '拖延或轉移注意力到其他事情',
          id: 'Menunda atau mengalihkan perhatian ke hal lain',
          vi: 'Trì hoãn hoặc chuyển hướng sang việc khác'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: '갑자기 마감 기한이 앞당겨졌다면?',
      en: 'If a deadline is suddenly moved up?',
      ja: '突然締め切りが早まったら？',
      'zh-CN': '如果截止日期突然提前了？',
      'zh-TW': '如果截止日期突然提前了？',
      id: 'Jika tenggat waktu tiba-tiba dimajukan?',
      vi: 'Nếu hạn chót đột ngột được rút ngắn?'
    },
    options: [
      {
        text: {
          ko: '우선순위를 재조정하고 효율적으로 일한다',
          en: 'Reprioritize and work efficiently',
          ja: '優先順位を再調整して効率的に働く',
          'zh-CN': '重新调整优先级并高效工作',
          'zh-TW': '重新調整優先級並高效工作',
          id: 'Menyesuaikan prioritas dan bekerja efisien',
          vi: 'Sắp xếp lại ưu tiên và làm việc hiệu quả'
        },
        type: 'A'
      },
      {
        text: {
          ko: '팀원들과 협력하여 분담한다',
          en: 'Collaborate with team members to share the work',
          ja: 'チームメンバーと協力して分担する',
          'zh-CN': '与团队成员合作分担',
          'zh-TW': '與團隊成員合作分擔',
          id: 'Berkolaborasi dengan anggota tim untuk berbagi pekerjaan',
          vi: 'Hợp tác với thành viên nhóm để chia sẻ công việc'
        },
        type: 'B'
      },
      {
        text: {
          ko: '스트레스를 받지만 최선을 다한다',
          en: 'Feel stressed but do my best',
          ja: 'ストレスを受けるが最善を尽くす',
          'zh-CN': '感到压力但尽力而为',
          'zh-TW': '感到壓力但盡力而為',
          id: 'Merasa stres tapi berusaha sebaik mungkin',
          vi: 'Cảm thấy căng thẳng nhưng cố gắng hết sức'
        },
        type: 'C'
      },
      {
        text: {
          ko: '압박감에 불안해하고 집중하기 어렵다',
          en: 'Feel anxious and have difficulty concentrating',
          ja: 'プレッシャーに不安を感じ集中しにくい',
          'zh-CN': '感到焦虑难以集中注意力',
          'zh-TW': '感到焦慮難以集中注意力',
          id: 'Merasa cemas dan sulit berkonsentrasi',
          vi: 'Cảm thấy lo lắng và khó tập trung'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: '중요한 발표나 시험을 앞두고 있을 때?',
      en: 'When you have an important presentation or exam coming up?',
      ja: '重要な発表や試験を控えているとき？',
      'zh-CN': '面临重要演讲或考试时？',
      'zh-TW': '面臨重要演講或考試時？',
      id: 'Ketika menghadapi presentasi atau ujian penting?',
      vi: 'Khi có bài thuyết trình hoặc kỳ thi quan trọng sắp tới?'
    },
    options: [
      {
        text: {
          ko: '철저히 준비하고 시뮬레이션해본다',
          en: 'Prepare thoroughly and simulate',
          ja: '徹底的に準備してシミュレーションする',
          'zh-CN': '充分准备并进行模拟',
          'zh-TW': '充分準備並進行模擬',
          id: 'Mempersiapkan secara menyeluruh dan berlatih simulasi',
          vi: 'Chuẩn bị kỹ lưỡng và mô phỏng'
        },
        type: 'A'
      },
      {
        text: {
          ko: '다른 사람들과 함께 공부하거나 연습한다',
          en: 'Study or practice with others',
          ja: '他の人と一緒に勉強したり練習する',
          'zh-CN': '与他人一起学习或练习',
          'zh-TW': '與他人一起學習或練習',
          id: 'Belajar atau berlatih bersama orang lain',
          vi: 'Học hoặc luyện tập cùng người khác'
        },
        type: 'B'
      },
      {
        text: {
          ko: '긴장되지만 나름의 방식으로 준비한다',
          en: 'Feel nervous but prepare in my own way',
          ja: '緊張するが自分なりの方法で準備する',
          'zh-CN': '感到紧张但以自己的方式准备',
          'zh-TW': '感到緊張但以自己的方式準備',
          id: 'Merasa gugup tapi mempersiapkan dengan cara sendiri',
          vi: 'Cảm thấy lo lắng nhưng chuẩn bị theo cách riêng'
        },
        type: 'C'
      },
      {
        text: {
          ko: '불안해서 잠을 잘 못 자거나 집중이 안 된다',
          en: 'Feel anxious and have trouble sleeping or concentrating',
          ja: '不安で眠れなかったり集中できない',
          'zh-CN': '焦虑导致睡眠不好或无法集中',
          'zh-TW': '焦慮導致睡眠不好或無法集中',
          id: 'Merasa cemas hingga sulit tidur atau berkonsentrasi',
          vi: 'Lo lắng đến mức khó ngủ hoặc tập trung'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: '갈등 상황에서 당신의 태도는?',
      en: 'What is your attitude in conflict situations?',
      ja: '対立状況でのあなたの態度は？',
      'zh-CN': '在冲突情况下你的态度是？',
      'zh-TW': '在衝突情況下你的態度是？',
      id: 'Bagaimana sikap Anda dalam situasi konflik?',
      vi: 'Thái độ của bạn trong tình huống xung đột là gì?'
    },
    options: [
      {
        text: {
          ko: '논리적으로 대화하며 해결책을 찾는다',
          en: 'Have a logical discussion and find a solution',
          ja: '論理的に話し合って解決策を見つける',
          'zh-CN': '进行逻辑讨论并寻找解决方案',
          'zh-TW': '進行邏輯討論並尋找解決方案',
          id: 'Berdiskusi secara logis dan mencari solusi',
          vi: 'Thảo luận logic và tìm giải pháp'
        },
        type: 'A'
      },
      {
        text: {
          ko: '상대방의 감정을 이해하려 노력한다',
          en: 'Try to understand the other person\'s feelings',
          ja: '相手の感情を理解しようと努力する',
          'zh-CN': '努力理解对方的感受',
          'zh-TW': '努力理解對方的感受',
          id: 'Berusaha memahami perasaan orang lain',
          vi: 'Cố gắng hiểu cảm xúc của người khác'
        },
        type: 'B'
      },
      {
        text: {
          ko: '시간을 두고 천천히 해결하려 한다',
          en: 'Take time to resolve it slowly',
          ja: '時間をかけてゆっくり解決しようとする',
          'zh-CN': '花时间慢慢解决',
          'zh-TW': '花時間慢慢解決',
          id: 'Meluangkan waktu untuk menyelesaikannya perlahan',
          vi: 'Dành thời gian để giải quyết từ từ'
        },
        type: 'C'
      },
      {
        text: {
          ko: '갈등 자체가 부담스러워 피하려 한다',
          en: 'Find conflict burdensome and try to avoid it',
          ja: '対立そのものが負担で避けようとする',
          'zh-CN': '觉得冲突本身很有负担想要避免',
          'zh-TW': '覺得衝突本身很有負擔想要避免',
          id: 'Merasa konflik itu sendiri membebani dan mencoba menghindarinya',
          vi: 'Thấy xung đột quá nặng nề và cố tránh'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: '피곤하고 지칠 때 주로 어떻게 하나요?',
      en: 'What do you usually do when you\'re tired and exhausted?',
      ja: '疲れて消耗したとき、主にどうしますか？',
      'zh-CN': '当你疲惫不堪时通常会做什么？',
      'zh-TW': '當你疲憊不堪時通常會做什麼？',
      id: 'Apa yang biasanya Anda lakukan saat lelah dan kehabisan tenaga?',
      vi: 'Bạn thường làm gì khi mệt mỏi và kiệt sức?'
    },
    options: [
      {
        text: {
          ko: '충분한 수면과 규칙적인 생활로 회복한다',
          en: 'Recover with enough sleep and a regular routine',
          ja: '十分な睡眠と規則正しい生活で回復する',
          'zh-CN': '通过充足睡眠和规律生活来恢复',
          'zh-TW': '通過充足睡眠和規律生活來恢復',
          id: 'Pulih dengan tidur cukup dan rutinitas teratur',
          vi: 'Phục hồi bằng giấc ngủ đủ và lịch trình đều đặn'
        },
        type: 'A'
      },
      {
        text: {
          ko: '친구들을 만나 수다를 떨며 풀어낸다',
          en: 'Meet friends and chat to relieve stress',
          ja: '友達に会っておしゃべりして発散する',
          'zh-CN': '见朋友聊天来释放压力',
          'zh-TW': '見朋友聊天來釋放壓力',
          id: 'Bertemu teman dan mengobrol untuk melepas stres',
          vi: 'Gặp bạn bè và trò chuyện để giải tỏa căng thẳng'
        },
        type: 'B'
      },
      {
        text: {
          ko: '혼자만의 시간을 가지며 재충전한다',
          en: 'Have alone time and recharge',
          ja: '一人の時間を持って充電する',
          'zh-CN': '独处时间来充电',
          'zh-TW': '獨處時間來充電',
          id: 'Memiliki waktu sendiri dan mengisi ulang energi',
          vi: 'Có thời gian một mình và nạp lại năng lượng'
        },
        type: 'C'
      },
      {
        text: {
          ko: '계속 피곤하고 회복이 더딘 편이다',
          en: 'Stay tired and recover slowly',
          ja: 'ずっと疲れていて回復が遅い方だ',
          'zh-CN': '持续疲劳恢复较慢',
          'zh-TW': '持續疲勞恢復較慢',
          id: 'Terus merasa lelah dan pulih dengan lambat',
          vi: 'Vẫn mệt mỏi và phục hồi chậm'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: '실수를 했을 때 당신의 반응은?',
      en: 'What is your reaction when you make a mistake?',
      ja: 'ミスをしたときのあなたの反応は？',
      'zh-CN': '当你犯错时你的反应是？',
      'zh-TW': '當你犯錯時你的反應是？',
      id: 'Bagaimana reaksi Anda ketika membuat kesalahan?',
      vi: 'Phản ứng của bạn khi mắc lỗi là gì?'
    },
    options: [
      {
        text: {
          ko: '원인을 분석하고 재발 방지책을 세운다',
          en: 'Analyze the cause and make a prevention plan',
          ja: '原因を分析して再発防止策を立てる',
          'zh-CN': '分析原因并制定防范措施',
          'zh-TW': '分析原因並制定防範措施',
          id: 'Menganalisis penyebab dan membuat rencana pencegahan',
          vi: 'Phân tích nguyên nhân và lập kế hoạch phòng ngừa'
        },
        type: 'A'
      },
      {
        text: {
          ko: '주변에 사과하고 조언을 구한다',
          en: 'Apologize to others and seek advice',
          ja: '周りに謝罪して助言を求める',
          'zh-CN': '向他人道歉并寻求建议',
          'zh-TW': '向他人道歉並尋求建議',
          id: 'Meminta maaf kepada orang lain dan mencari saran',
          vi: 'Xin lỗi người khác và tìm lời khuyên'
        },
        type: 'B'
      },
      {
        text: {
          ko: '일시적으로 속상하지만 곧 털어낸다',
          en: 'Feel upset temporarily but soon shake it off',
          ja: '一時的に落ち込むがすぐに立ち直る',
          'zh-CN': '暂时感到沮丧但很快振作',
          'zh-TW': '暫時感到沮喪但很快振作',
          id: 'Merasa kesal sementara tapi segera move on',
          vi: 'Cảm thấy buồn tạm thời nhưng nhanh chóng vượt qua'
        },
        type: 'C'
      },
      {
        text: {
          ko: '자책하며 오래 끌고 간다',
          en: 'Blame myself and dwell on it for a long time',
          ja: '自責して長く引きずる',
          'zh-CN': '自责并长时间纠结',
          'zh-TW': '自責並長時間糾結',
          id: 'Menyalahkan diri sendiri dan terus memikirkannya',
          vi: 'Tự trách mình và đắn đo lâu dài'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: '여러 일이 한꺼번에 몰려올 때?',
      en: 'When multiple things pile up at once?',
      ja: 'いくつもの仕事が一度に押し寄せてきたとき？',
      'zh-CN': '当多件事情同时涌来时？',
      'zh-TW': '當多件事情同時湧來時？',
      id: 'Ketika banyak hal menumpuk sekaligus?',
      vi: 'Khi nhiều việc ùa đến cùng lúc?'
    },
    options: [
      {
        text: {
          ko: '리스트를 만들어 하나씩 처리한다',
          en: 'Make a list and handle them one by one',
          ja: 'リストを作って一つずつ処理する',
          'zh-CN': '列清单逐一处理',
          'zh-TW': '列清單逐一處理',
          id: 'Membuat daftar dan menanganinya satu per satu',
          vi: 'Lập danh sách và xử lý từng cái một'
        },
        type: 'A'
      },
      {
        text: {
          ko: '다른 사람에게 도움을 요청하거나 나눈다',
          en: 'Ask for help or share with others',
          ja: '他の人に助けを求めたり分担する',
          'zh-CN': '向他人寻求帮助或分担',
          'zh-TW': '向他人尋求幫助或分擔',
          id: 'Meminta bantuan atau berbagi dengan orang lain',
          vi: 'Nhờ người khác giúp đỡ hoặc chia sẻ'
        },
        type: 'B'
      },
      {
        text: {
          ko: '스트레스를 받지만 어떻게든 해낸다',
          en: 'Feel stressed but somehow get it done',
          ja: 'ストレスを受けるがどうにかやり遂げる',
          'zh-CN': '感到压力但总能完成',
          'zh-TW': '感到壓力但總能完成',
          id: 'Merasa stres tapi entah bagaimana berhasil',
          vi: 'Cảm thấy căng thẳng nhưng bằng cách nào đó hoàn thành'
        },
        type: 'C'
      },
      {
        text: {
          ko: '압도되어 어디서부터 시작할지 모르겠다',
          en: 'Feel overwhelmed and don\'t know where to start',
          ja: '圧倒されてどこから始めればいいかわからない',
          'zh-CN': '感到不知所措不知从何开始',
          'zh-TW': '感到不知所措不知從何開始',
          id: 'Merasa kewalahan dan tidak tahu harus mulai dari mana',
          vi: 'Cảm thấy choáng ngợp và không biết bắt đầu từ đâu'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: '비판이나 부정적인 피드백을 받았을 때?',
      en: 'When you receive criticism or negative feedback?',
      ja: '批判や否定的なフィードバックを受けたとき？',
      'zh-CN': '当收到批评或负面反馈时？',
      'zh-TW': '當收到批評或負面反饋時？',
      id: 'Ketika menerima kritik atau umpan balik negatif?',
      vi: 'Khi nhận được phê bình hoặc phản hồi tiêu cực?'
    },
    options: [
      {
        text: {
          ko: '객관적으로 받아들이고 개선점을 찾는다',
          en: 'Accept it objectively and find areas for improvement',
          ja: '客観的に受け入れて改善点を見つける',
          'zh-CN': '客观接受并寻找改进点',
          'zh-TW': '客觀接受並尋找改進點',
          id: 'Menerima secara objektif dan mencari area perbaikan',
          vi: 'Chấp nhận khách quan và tìm điểm cải thiện'
        },
        type: 'A'
      },
      {
        text: {
          ko: '다른 사람들과 이야기하며 감정을 정리한다',
          en: 'Talk with others to process emotions',
          ja: '他の人と話しながら感情を整理する',
          'zh-CN': '与他人交谈来整理情绪',
          'zh-TW': '與他人交談來整理情緒',
          id: 'Berbicara dengan orang lain untuk memproses emosi',
          vi: 'Nói chuyện với người khác để xử lý cảm xúc'
        },
        type: 'B'
      },
      {
        text: {
          ko: '순간 기분이 나쁘지만 곧 잊는다',
          en: 'Feel bad momentarily but soon forget',
          ja: '瞬間気分が悪いがすぐ忘れる',
          'zh-CN': '瞬间心情不好但很快忘记',
          'zh-TW': '瞬間心情不好但很快忘記',
          id: 'Merasa buruk sejenak tapi segera lupa',
          vi: 'Cảm thấy tồi tệ nhất thời nhưng sớm quên'
        },
        type: 'C'
      },
      {
        text: {
          ko: '상처받고 오랫동안 신경 쓰인다',
          en: 'Feel hurt and worry about it for a long time',
          ja: '傷ついて長い間気になる',
          'zh-CN': '感到受伤并长时间在意',
          'zh-TW': '感到受傷並長時間在意',
          id: 'Merasa terluka dan khawatir untuk waktu yang lama',
          vi: 'Cảm thấy tổn thương và lo lắng trong thời gian dài'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: '중요한 결정을 내려야 할 때?',
      en: 'When you need to make an important decision?',
      ja: '重要な決定を下さなければならないとき？',
      'zh-CN': '当需要做重要决定时？',
      'zh-TW': '當需要做重要決定時？',
      id: 'Ketika harus membuat keputusan penting?',
      vi: 'Khi cần đưa ra quyết định quan trọng?'
    },
    options: [
      {
        text: {
          ko: '장단점을 분석하고 합리적으로 결정한다',
          en: 'Analyze pros and cons and decide rationally',
          ja: '長所と短所を分析して合理的に決定する',
          'zh-CN': '分析利弊并理性决定',
          'zh-TW': '分析利弊並理性決定',
          id: 'Menganalisis pro dan kontra dan memutuskan secara rasional',
          vi: 'Phân tích ưu nhược điểm và quyết định hợp lý'
        },
        type: 'A'
      },
      {
        text: {
          ko: '주변 사람들의 의견을 참고한다',
          en: 'Consult with people around me',
          ja: '周りの人の意見を参考にする',
          'zh-CN': '参考周围人的意见',
          'zh-TW': '參考周圍人的意見',
          id: 'Berkonsultasi dengan orang-orang di sekitar',
          vi: 'Tham khảo ý kiến người xung quanh'
        },
        type: 'B'
      },
      {
        text: {
          ko: '직감을 따르는 편이다',
          en: 'Tend to follow my intuition',
          ja: '直感に従う方だ',
          'zh-CN': '倾向于跟随直觉',
          'zh-TW': '傾向於跟隨直覺',
          id: 'Cenderung mengikuti intuisi',
          vi: 'Có xu hướng theo trực giác'
        },
        type: 'C'
      },
      {
        text: {
          ko: '결정하기 어려워 계속 고민한다',
          en: 'Find it hard to decide and keep worrying',
          ja: '決めるのが難しくてずっと悩む',
          'zh-CN': '难以决定持续烦恼',
          'zh-TW': '難以決定持續煩惱',
          id: 'Sulit memutuskan dan terus khawatir',
          vi: 'Khó quyết định và cứ lo lắng mãi'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: '계획이 틀어졌을 때 당신의 대응은?',
      en: 'How do you respond when plans go awry?',
      ja: '計画が狂ったときのあなたの対応は？',
      'zh-CN': '当计划出现偏差时你如何应对？',
      'zh-TW': '當計劃出現偏差時你如何應對？',
      id: 'Bagaimana respons Anda ketika rencana tidak berjalan sesuai?',
      vi: 'Bạn phản ứng thế nào khi kế hoạch sai lệch?'
    },
    options: [
      {
        text: {
          ko: '빠르게 대안을 찾아 조정한다',
          en: 'Quickly find alternatives and adjust',
          ja: '素早く代案を見つけて調整する',
          'zh-CN': '快速寻找替代方案并调整',
          'zh-TW': '快速尋找替代方案並調整',
          id: 'Cepat menemukan alternatif dan menyesuaikan',
          vi: 'Nhanh chóng tìm phương án thay thế và điều chỉnh'
        },
        type: 'A'
      },
      {
        text: {
          ko: '함께하는 사람들과 상의하며 해결한다',
          en: 'Consult and resolve with people involved',
          ja: '一緒にいる人たちと相談して解決する',
          'zh-CN': '与相关人员商量解决',
          'zh-TW': '與相關人員商量解決',
          id: 'Berkonsultasi dan menyelesaikan dengan orang yang terlibat',
          vi: 'Bàn bạc và giải quyết với những người liên quan'
        },
        type: 'B'
      },
      {
        text: {
          ko: '유연하게 상황에 맞춰 대응한다',
          en: 'Respond flexibly to the situation',
          ja: '柔軟に状況に合わせて対応する',
          'zh-CN': '灵活应对情况',
          'zh-TW': '靈活應對情況',
          id: 'Merespons dengan fleksibel sesuai situasi',
          vi: 'Phản ứng linh hoạt theo tình huống'
        },
        type: 'C'
      },
      {
        text: {
          ko: '당황스럽고 어떻게 해야 할지 혼란스럽다',
          en: 'Feel flustered and confused about what to do',
          ja: '慌ててどうすればいいか混乱する',
          'zh-CN': '感到慌乱不知所措',
          'zh-TW': '感到慌亂不知所措',
          id: 'Merasa bingung dan kacau tentang apa yang harus dilakukan',
          vi: 'Cảm thấy hoang mang và bối rối về việc phải làm gì'
        },
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: '스트레스 상황 후 회복하는 데 얼마나 걸리나요?',
      en: 'How long does it take you to recover after a stressful situation?',
      ja: 'ストレス状況の後、回復するのにどのくらいかかりますか？',
      'zh-CN': '压力情况后你需要多长时间恢复？',
      'zh-TW': '壓力情況後你需要多長時間恢復？',
      id: 'Berapa lama waktu yang Anda butuhkan untuk pulih setelah situasi stres?',
      vi: 'Bạn mất bao lâu để phục hồi sau tình huống căng thẳng?'
    },
    options: [
      {
        text: {
          ko: '빠르게 회복하고 다음으로 넘어간다',
          en: 'Recover quickly and move on',
          ja: '素早く回復して次に進む',
          'zh-CN': '快速恢复并继续前进',
          'zh-TW': '快速恢復並繼續前進',
          id: 'Pulih dengan cepat dan melanjutkan',
          vi: 'Phục hồi nhanh và tiếp tục'
        },
        type: 'A'
      },
      {
        text: {
          ko: '주변 사람들과 소통하며 회복한다',
          en: 'Recover by communicating with people around me',
          ja: '周りの人とコミュニケーションを取りながら回復する',
          'zh-CN': '通过与周围人交流来恢复',
          'zh-TW': '通過與周圍人交流來恢復',
          id: 'Pulih dengan berkomunikasi dengan orang di sekitar',
          vi: 'Phục hồi bằng cách giao tiếp với mọi người xung quanh'
        },
        type: 'B'
      },
      {
        text: {
          ko: '하루 이틀 정도면 괜찮아진다',
          en: 'Feel better after a day or two',
          ja: '一日二日くらいで大丈夫になる',
          'zh-CN': '一两天就会好起来',
          'zh-TW': '一兩天就會好起來',
          id: 'Merasa lebih baik setelah satu atau dua hari',
          vi: 'Cảm thấy khá hơn sau một hoặc hai ngày'
        },
        type: 'C'
      },
      {
        text: {
          ko: '회복하는 데 오래 걸리는 편이다',
          en: 'Take a long time to recover',
          ja: '回復するのに時間がかかる方だ',
          'zh-CN': '恢复需要较长时间',
          'zh-TW': '恢復需要較長時間',
          id: 'Membutuhkan waktu lama untuk pulih',
          vi: 'Mất nhiều thời gian để phục hồi'
        },
        type: 'D'
      }
    ]
  }
];

// 스트레스 반응 유형별 결과
export const stressResults: StressResult[] = [
  {
    type: 'A',
    emoji: '🧠',
    title: {
      ko: '이성적 해결사형',
      en: 'Rational Problem Solver 🧠',
      ja: '理性的解決者タイプ 🧠',
      'zh-CN': '理性解决者型 🧠',
      'zh-TW': '理性解決者型 🧠',
      id: 'Pemecah Masalah Rasional 🧠',
      vi: 'Người Giải Quyết Vấn Đề Lý Trí 🧠'
    },
    description: {
      ko: '스트레스 상황에서도 냉정함을 유지하며 논리적으로 문제를 해결하는 당신! 체계적인 접근으로 어려움을 극복합니다.',
      en: 'You maintain composure even in stressful situations and solve problems logically! You overcome difficulties with a systematic approach.',
      ja: 'ストレス状況でも冷静さを保ち、論理的に問題を解決するあなた！体系的なアプローチで困難を克服します。',
      'zh-CN': '即使在压力情况下也能保持冷静，逻辑地解决问题！通过系统的方法克服困难。',
      'zh-TW': '即使在壓力情況下也能保持冷靜，邏輯地解決問題！通過系統的方法克服困難。',
      id: 'Anda tetap tenang bahkan dalam situasi stres dan memecahkan masalah secara logis! Mengatasi kesulitan dengan pendekatan sistematis.',
      vi: 'Bạn giữ được bình tĩnh ngay cả trong tình huống căng thẳng và giải quyết vấn đề một cách logic! Vượt qua khó khăn bằng phương pháp có hệ thống.'
    },
    traits: [
      {
        ko: '📊 체계적이고 계획적인 대응',
        en: '📊 Systematic and planned response',
        ja: '📊 体系的で計画的な対応',
        'zh-CN': '📊 系统且有计划的应对',
        'zh-TW': '📊 系統且有計劃的應對',
        id: '📊 Respons sistematis dan terencana',
        vi: '📊 Phản ứng có hệ thống và kế hoạch'
      },
      {
        ko: '🎯 문제의 본질을 빠르게 파악',
        en: '🎯 Quickly grasp the essence of problems',
        ja: '🎯 問題の本質を素早く把握',
        'zh-CN': '🎯 快速把握问题本质',
        'zh-TW': '🎯 快速把握問題本質',
        id: '🎯 Cepat memahami inti masalah',
        vi: '🎯 Nhanh chóng nắm bắt bản chất vấn đề'
      },
      {
        ko: '💪 감정에 휘둘리지 않는 강한 멘탈',
        en: '💪 Strong mentality not swayed by emotions',
        ja: '💪 感情に左右されない強いメンタル',
        'zh-CN': '💪 不被情绪左右的强大心态',
        'zh-TW': '💪 不被情緒左右的強大心態',
        id: '💪 Mentalitas kuat yang tidak terpengaruh emosi',
        vi: '💪 Tinh thần mạnh mẽ không bị cảm xúc chi phối'
      },
      {
        ko: '⚡ 빠른 회복력과 적응력',
        en: '⚡ Fast resilience and adaptability',
        ja: '⚡ 素早い回復力と適応力',
        'zh-CN': '⚡ 快速恢复力和适应力',
        'zh-TW': '⚡ 快速恢復力和適應力',
        id: '⚡ Ketahanan dan kemampuan beradaptasi yang cepat',
        vi: '⚡ Khả năng phục hồi và thích nghi nhanh'
      }
    ],
    coping: [
      {
        ko: '🌟 때로는 감정을 표현하고 공감받는 것도 필요해요',
        en: '🌟 Sometimes you need to express emotions and receive empathy',
        ja: '🌟 時には感情を表現し共感を受けることも必要です',
        'zh-CN': '🌟 有时需要表达情感并获得共鸣',
        'zh-TW': '🌟 有時需要表達情感並獲得共鳴',
        id: '🌟 Terkadang Anda perlu mengekspresikan emosi dan menerima empati',
        vi: '🌟 Đôi khi bạn cần bày tỏ cảm xúc và nhận được sự đồng cảm'
      },
      {
        ko: '💝 완벽을 추구하기보다 적당한 휴식도 중요합니다',
        en: '💝 Adequate rest is important rather than pursuing perfection',
        ja: '💝 完璧を追求するより適度な休息も重要です',
        'zh-CN': '💝 适当的休息比追求完美更重要',
        'zh-TW': '💝 適當的休息比追求完美更重要',
        id: '💝 Istirahat yang cukup penting daripada mengejar kesempurnaan',
        vi: '💝 Nghỉ ngơi đầy đủ quan trọng hơn là theo đuổi sự hoàn hảo'
      },
      {
        ko: '🎨 취미 활동으로 스트레스를 해소하세요',
        en: '🎨 Relieve stress through hobby activities',
        ja: '🎨 趣味活動でストレスを解消しましょう',
        'zh-CN': '🎨 通过爱好活动缓解压力',
        'zh-TW': '🎨 通過愛好活動緩解壓力',
        id: '🎨 Hilangkan stres melalui kegiatan hobi',
        vi: '🎨 Giải tỏa căng thẳng thông qua hoạt động sở thích'
      }
    ]
  },
  {
    type: 'B',
    emoji: '🤝',
    title: {
      ko: '관계 중심 협력자형',
      en: 'Relationship-Centered Collaborator 🤝',
      ja: '関係中心協力者タイプ 🤝',
      'zh-CN': '关系中心协作者型 🤝',
      'zh-TW': '關係中心協作者型 🤝',
      id: 'Kolaborator Berpusat pada Hubungan 🤝',
      vi: 'Người Cộng Tác Trọng Quan Hệ 🤝'
    },
    description: {
      ko: '스트레스를 받을 때 주변 사람들과 소통하며 함께 해결하는 당신! 공감과 협력으로 어려움을 극복합니다.',
      en: 'When stressed, you communicate with people around you and solve together! You overcome difficulties through empathy and collaboration.',
      ja: 'ストレスを受けたとき周りの人とコミュニケーションを取り一緒に解決するあなた！共感と協力で困難を克服します。',
      'zh-CN': '当有压力时，你与周围的人沟通并一起解决！通过共鸣和合作克服困难。',
      'zh-TW': '當有壓力時，你與周圍的人溝通並一起解決！通過共鳴和合作克服困難。',
      id: 'Saat stres, Anda berkomunikasi dengan orang di sekitar dan menyelesaikannya bersama! Mengatasi kesulitan melalui empati dan kolaborasi.',
      vi: 'Khi căng thẳng, bạn giao tiếp với mọi người xung quanh và cùng giải quyết! Vượt qua khó khăn thông qua sự đồng cảm và hợp tác.'
    },
    traits: [
      {
        ko: '❤️ 뛰어난 공감 능력과 소통 능력',
        en: '❤️ Excellent empathy and communication skills',
        ja: '❤️ 優れた共感能力とコミュニケーション能力',
        'zh-CN': '❤️ 出色的共鸣和沟通能力',
        'zh-TW': '❤️ 出色的共鳴和溝通能力',
        id: '❤️ Kemampuan empati dan komunikasi yang sangat baik',
        vi: '❤️ Khả năng đồng cảm và giao tiếp xuất sắc'
      },
      {
        ko: '🌈 팀워크를 통한 문제 해결',
        en: '🌈 Problem solving through teamwork',
        ja: '🌈 チームワークを通じた問題解決',
        'zh-CN': '🌈 通过团队合作解决问题',
        'zh-TW': '🌈 通過團隊合作解決問題',
        id: '🌈 Pemecahan masalah melalui kerja tim',
        vi: '🌈 Giải quyết vấn đề thông qua làm việc nhóm'
      },
      {
        ko: '🎭 타인의 감정을 잘 이해하고 배려함',
        en: '🎭 Understand and considerate of others\' feelings',
        ja: '🎭 他人の感情をよく理解し配慮する',
        'zh-CN': '🎭 理解并体贴他人的感受',
        'zh-TW': '🎭 理解並體貼他人的感受',
        id: '🎭 Memahami dan mempertimbangkan perasaan orang lain',
        vi: '🎭 Hiểu và quan tâm đến cảm xúc của người khác'
      },
      {
        ko: '☀️ 긍정적인 에너지로 주변을 밝힘',
        en: '☀️ Brighten surroundings with positive energy',
        ja: '☀️ ポジティブなエネルギーで周りを明るくする',
        'zh-CN': '☀️ 用积极的能量照亮周围',
        'zh-TW': '☀️ 用積極的能量照亮周圍',
        id: '☀️ Mencerahkan sekitar dengan energi positif',
        vi: '☀️ Làm sáng xung quanh bằng năng lượng tích cực'
      }
    ],
    coping: [
      {
        ko: '🌟 때로는 혼자만의 시간도 필요해요',
        en: '🌟 Sometimes you need time alone',
        ja: '🌟 時には一人の時間も必要です',
        'zh-CN': '🌟 有时你需要独处时间',
        'zh-TW': '🌟 有時你需要獨處時間',
        id: '🌟 Terkadang Anda membutuhkan waktu sendiri',
        vi: '🌟 Đôi khi bạn cần thời gian một mình'
      },
      {
        ko: '💝 타인에게 의존하기보다 자신의 힘도 믿어보세요',
        en: '💝 Trust your own strength rather than depending on others',
        ja: '💝 他人に依存するより自分の力も信じてみましょう',
        'zh-CN': '💝 相信自己的力量而不是依赖他人',
        'zh-TW': '💝 相信自己的力量而不是依賴他人',
        id: '💝 Percayai kekuatan Anda sendiri daripada bergantung pada orang lain',
        vi: '💝 Tin vào sức mạnh của bạn hơn là phụ thuộc vào người khác'
      },
      {
        ko: '🎨 명상이나 요가로 내면의 평화를 찾으세요',
        en: '🎨 Find inner peace through meditation or yoga',
        ja: '🎨 瞑想やヨガで内なる平和を見つけましょう',
        'zh-CN': '🎨 通过冥想或瑜伽找到内心平静',
        'zh-TW': '🎨 通過冥想或瑜伽找到內心平靜',
        id: '🎨 Temukan kedamaian batin melalui meditasi atau yoga',
        vi: '🎨 Tìm sự bình yên nội tâm thông qua thiền hoặc yoga'
      }
    ]
  },
  {
    type: 'C',
    emoji: '🌊',
    title: {
      ko: '유연한 적응자형',
      en: 'Flexible Adapter 🌊',
      ja: '柔軟な適応者タイプ 🌊',
      'zh-CN': '灵活适应者型 🌊',
      'zh-TW': '靈活適應者型 🌊',
      id: 'Adaptor Fleksibel 🌊',
      vi: 'Người Thích Nghi Linh Hoạt 🌊'
    },
    description: {
      ko: '스트레스 상황에 유연하게 대처하며 빠르게 적응하는 당신! 탄력적인 마음가짐으로 어려움을 이겨냅니다.',
      en: 'You respond flexibly to stressful situations and adapt quickly! You overcome difficulties with a resilient mindset.',
      ja: 'ストレス状況に柔軟に対処し素早く適応するあなた！弾力的な心構えで困難を乗り越えます。',
      'zh-CN': '你灵活应对压力情况并快速适应！用有弹性的心态克服困难。',
      'zh-TW': '你靈活應對壓力情況並快速適應！用有彈性的心態克服困難。',
      id: 'Anda merespons situasi stres secara fleksibel dan beradaptasi dengan cepat! Mengatasi kesulitan dengan pola pikir yang tangguh.',
      vi: 'Bạn phản ứng linh hoạt với tình huống căng thẳng và thích nghi nhanh! Vượt qua khó khăn với tâm thế kiên cường.'
    },
    traits: [
      {
        ko: '🌸 변화에 잘 적응하는 능력',
        en: '🌸 Ability to adapt well to changes',
        ja: '🌸 変化によく適応する能力',
        'zh-CN': '🌸 很好地适应变化的能力',
        'zh-TW': '🌸 很好地適應變化的能力',
        id: '🌸 Kemampuan beradaptasi dengan baik terhadap perubahan',
        vi: '🌸 Khả năng thích nghi tốt với thay đổi'
      },
      {
        ko: '🎯 긍정적이고 낙관적인 태도',
        en: '🎯 Positive and optimistic attitude',
        ja: '🎯 ポジティブで楽観的な態度',
        'zh-CN': '🎯 积极乐观的态度',
        'zh-TW': '🎯 積極樂觀的態度',
        id: '🎯 Sikap positif dan optimis',
        vi: '🎯 Thái độ tích cực và lạc quan'
      },
      {
        ko: '💪 스트레스에서 비교적 빨리 회복',
        en: '💪 Recover relatively quickly from stress',
        ja: '💪 ストレスから比較的早く回復',
        'zh-CN': '💪 从压力中相对快速恢复',
        'zh-TW': '💪 從壓力中相對快速恢復',
        id: '💪 Pulih relatif cepat dari stres',
        vi: '💪 Phục hồi tương đối nhanh từ căng thẳng'
      },
      {
        ko: '⚡ 상황에 따라 대처 방식을 바꿀 수 있음',
        en: '⚡ Can change coping methods according to situation',
        ja: '⚡ 状況に応じて対処方法を変えられる',
        'zh-CN': '⚡ 能根据情况改变应对方式',
        'zh-TW': '⚡ 能根據情況改變應對方式',
        id: '⚡ Dapat mengubah metode penanganan sesuai situasi',
        vi: '⚡ Có thể thay đổi phương pháp đối phó theo tình huống'
      }
    ],
    coping: [
      {
        ko: '🌟 더 깊이 문제를 분석하는 습관을 들여보세요',
        en: '🌟 Try to develop a habit of analyzing problems more deeply',
        ja: '🌟 より深く問題を分析する習慣をつけてみましょう',
        'zh-CN': '🌟 尝试养成更深入分析问题的习惯',
        'zh-TW': '🌟 嘗試養成更深入分析問題的習慣',
        id: '🌟 Cobalah mengembangkan kebiasaan menganalisis masalah lebih dalam',
        vi: '🌟 Hãy thử phát triển thói quen phân tích vấn đề sâu hơn'
      },
      {
        ko: '💝 장기적인 계획과 목표 설정이 도움이 됩니다',
        en: '💝 Long-term planning and goal setting will help',
        ja: '💝 長期的な計画と目標設定が役立ちます',
        'zh-CN': '💝 长期规划和目标设定会有帮助',
        'zh-TW': '💝 長期規劃和目標設定會有幫助',
        id: '💝 Perencanaan jangka panjang dan penetapan tujuan akan membantu',
        vi: '💝 Lập kế hoạch dài hạn và đặt mục tiêu sẽ giúp ích'
      },
      {
        ko: '🎨 규칙적인 운동으로 스트레스를 관리하세요',
        en: '🎨 Manage stress with regular exercise',
        ja: '🎨 規則的な運動でストレスを管理しましょう',
        'zh-CN': '🎨 通过规律运动管理压力',
        'zh-TW': '🎨 通過規律運動管理壓力',
        id: '🎨 Kelola stres dengan olahraga teratur',
        vi: '🎨 Quản lý căng thẳng bằng tập thể dục đều đặn'
      }
    ]
  },
  {
    type: 'D',
    emoji: '🌙',
    title: {
      ko: '민감한 수용자형',
      en: 'Sensitive Receiver 🌙',
      ja: '敏感な受容者タイプ 🌙',
      'zh-CN': '敏感接受者型 🌙',
      'zh-TW': '敏感接受者型 🌙',
      id: 'Penerima Sensitif 🌙',
      vi: 'Người Tiếp Nhận Nhạy Cảm 🌙'
    },
    description: {
      ko: '스트레스에 민감하게 반응하지만, 그만큼 섬세하고 깊이 있는 당신! 자신만의 페이스로 천천히 회복합니다.',
      en: 'You react sensitively to stress, but you are delicate and deep! You recover slowly at your own pace.',
      ja: 'ストレスに敏感に反応しますが、それだけ繊細で深いあなた！自分のペースでゆっくり回復します。',
      'zh-CN': '你对压力反应敏感，但同样细腻深刻！以自己的步调慢慢恢复。',
      'zh-TW': '你對壓力反應敏感，但同樣細膩深刻！以自己的步調慢慢恢復。',
      id: 'Anda bereaksi sensitif terhadap stres, tetapi Anda halus dan mendalam! Pulih perlahan dengan kecepatan Anda sendiri.',
      vi: 'Bạn phản ứng nhạy cảm với căng thẳng, nhưng bạn tinh tế và sâu sắc! Phục hồi từ từ theo nhịp của riêng bạn.'
    },
    traits: [
      {
        ko: '🎨 섬세하고 깊은 감수성',
        en: '🎨 Delicate and deep sensitivity',
        ja: '🎨 繊細で深い感受性',
        'zh-CN': '🎨 细腻而深刻的感性',
        'zh-TW': '🎨 細膩而深刻的感性',
        id: '🎨 Sensitivitas yang halus dan mendalam',
        vi: '🎨 Sự nhạy cảm tinh tế và sâu sắc'
      },
      {
        ko: '💭 신중하고 사려 깊은 성격',
        en: '💭 Careful and thoughtful personality',
        ja: '💭 慎重で思慮深い性格',
        'zh-CN': '💭 谨慎而深思熟虑的性格',
        'zh-TW': '💭 謹慎而深思熟慮的性格',
        id: '💭 Kepribadian yang hati-hati dan bijaksana',
        vi: '💭 Tính cách cẩn thận và chu đáo'
      },
      {
        ko: '🌱 타인의 고통에 공감하는 능력',
        en: '🌱 Ability to empathize with others\' pain',
        ja: '🌱 他人の苦しみに共感する能力',
        'zh-CN': '🌱 能够共鸣他人痛苦的能力',
        'zh-TW': '🌱 能夠共鳴他人痛苦的能力',
        id: '🌱 Kemampuan berempati dengan penderitaan orang lain',
        vi: '🌱 Khả năng đồng cảm với nỗi đau của người khác'
      },
      {
        ko: '🌙 내면의 세계가 풍부함',
        en: '🌙 Rich inner world',
        ja: '🌙 内面の世界が豊か',
        'zh-CN': '🌙 内心世界丰富',
        'zh-TW': '🌙 內心世界豐富',
        id: '🌙 Dunia batin yang kaya',
        vi: '🌙 Thế giới nội tâm phong phú'
      }
    ],
    coping: [
      {
        ko: '🌟 전문가의 도움을 받는 것도 좋은 방법입니다',
        en: '🌟 Seeking professional help is also a good way',
        ja: '🌟 専門家の助けを受けるのも良い方法です',
        'zh-CN': '🌟 寻求专业帮助也是一个好方法',
        'zh-TW': '🌟 尋求專業幫助也是一個好方法',
        id: '🌟 Mencari bantuan profesional juga merupakan cara yang baik',
        vi: '🌟 Tìm kiếm sự giúp đỡ chuyên nghiệp cũng là một cách tốt'
      },
      {
        ko: '💝 작은 성공을 축하하며 자신감을 키워가세요',
        en: '💝 Celebrate small successes and build confidence',
        ja: '💝 小さな成功を祝い自信をつけていきましょう',
        'zh-CN': '💝 庆祝小成功并建立信心',
        'zh-TW': '💝 慶祝小成功並建立信心',
        id: '💝 Rayakan kesuksesan kecil dan bangun kepercayaan diri',
        vi: '💝 Kỷ niệm những thành công nhỏ và xây dựng sự tự tin'
      },
      {
        ko: '🎨 일기 쓰기나 예술 활동으로 감정을 표현하세요',
        en: '🎨 Express emotions through journaling or artistic activities',
        ja: '🎨 日記を書いたり芸術活動で感情を表現しましょう',
        'zh-CN': '🎨 通过写日记或艺术活动表达情感',
        'zh-TW': '🎨 通過寫日記或藝術活動表達情感',
        id: '🎨 Ekspresikan emosi melalui menulis jurnal atau kegiatan artistik',
        vi: '🎨 Bày tỏ cảm xúc thông qua viết nhật ký hoặc hoạt động nghệ thuật'
      }
    ]
  }
];

// 답변 점수 계산 함수
export function calculateStressResult(answers: string[]): string {
  const scores: { [key: string]: number } = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };

  // 각 답변의 유형별 점수 계산
  answers.forEach(answer => {
    scores[answer] = (scores[answer] || 0) + 1;
  });

  // 가장 높은 점수의 유형 찾기
  let maxScore = 0;
  let resultType = 'A';
  
  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 유형 문자열 반환
  return resultType;
}

