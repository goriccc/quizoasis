export interface TimeEfficiencyQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface TimeEfficiencyResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const timeEfficiencyQuestions: TimeEfficiencyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "아침에 일어나서 가장 먼저 하는 것은?",
      en: "What do you do first when you wake up in the morning?",
      ja: "朝起きて最初にすることは？",
      'zh-CN': "早上起床后第一件事是什么？",
      'zh-TW': "早上起床後第一件事是什麼？",
      vi: "Điều đầu tiên bạn làm khi thức dậy vào buổi sáng là gì?",
      id: "Apa yang Anda lakukan pertama kali saat bangun pagi?"
    },
    options: [
      {
        text: {
          ko: "오늘 할 일 체크리스트 확인",
          en: "Check today's to-do list",
          ja: "今日やることのチェックリスト確認",
          'zh-CN': "查看今天的待办事项清单",
          'zh-TW': "查看今天的待辦事項清單",
          vi: "Kiểm tra danh sách việc cần làm hôm nay",
          id: "Periksa daftar tugas hari ini"
        },
        scores: { Type1: 8, Type2: 2 }
      },
      {
        text: {
          ko: "간단히 하루 계획 생각",
          en: "Think briefly about the day's plan",
          ja: "簡単に一日の計画を考える",
          'zh-CN': "简单思考一天的计划",
          'zh-TW': "簡單思考一天的計劃",
          vi: "Suy nghĩ ngắn gọn về kế hoạch trong ngày",
          id: "Berpikir sebentar tentang rencana hari ini"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "일단 씻고 준비하며 생각",
          en: "Just wash up and think while preparing",
          ja: "とりあえず身支度しながら考える",
          'zh-CN': "先洗漱边准备边思考",
          'zh-TW': "先洗漱邊準備邊思考",
          vi: "Rửa mặt và suy nghĩ trong khi chuẩn bị",
          id: "Cuci muka dan berpikir sambil bersiap"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "스마트폰 보다가 시간 가는 줄 모름",
          en: "Look at smartphone and lose track of time",
          ja: "スマートフォンを見て時間が経つのを忘れる",
          'zh-CN': "看手机不知不觉时间就过了",
          'zh-TW': "看手機不知不覺時間就過了",
          vi: "Xem điện thoại và quên mất thời gian",
          id: "Lihat smartphone dan lupa waktu"
        },
        scores: { Type5: 2, Type6: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "하루 일과를 계획할 때?",
      en: "When planning your daily routine?",
      ja: "一日の予定を計画する時？",
      'zh-CN': "计划一天的日程时？",
      'zh-TW': "計劃一天的日程時？",
      vi: "Khi lập kế hoạch cho ngày của bạn?",
      id: "Saat merencanakan rutinitas harian Anda?"
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
          id: "Rencanakan secara detail per jam"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "주요 업무만 정리",
          en: "Organize only major tasks",
          ja: "主要な業務だけ整理",
          'zh-CN': "只整理主要任务",
          'zh-TW': "只整理主要任務",
          vi: "Chỉ sắp xếp các công việc chính",
          id: "Hanya mengatur tugas utama"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "대충 머릿속으로만 생각",
          en: "Just think roughly in my head",
          ja: "大体頭の中だけで考える",
          'zh-CN': "只是在脑子里大概想想",
          'zh-TW': "只是在腦子裡大概想想",
          vi: "Chỉ nghĩ sơ sơ trong đầu",
          id: "Hanya berpikir kira-kira di kepala"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "계획 안 세움, 그때그때 처리",
          en: "Don't plan, deal with things as they come",
          ja: "計画を立てず、その時その時で対応",
          'zh-CN': "不做计划，随机应变",
          'zh-TW': "不做計劃，隨機應變",
          vi: "Không lập kế hoạch, xử lý theo tình huống",
          id: "Tidak merencanakan, tangani saat itu juga"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "중요한 프로젝트 마감이 일주일 남았습니다. 당신은?",
      en: "An important project deadline is one week away. You are?",
      ja: "重要なプロジェクトの締め切りまで一週間です。あなたは？",
      'zh-CN': "重要项目截止日期还有一周。你是？",
      'zh-TW': "重要專案截止日期還有一週。你是？",
      vi: "Hạn chót của dự án quan trọng còn một tuần. Bạn thì?",
      id: "Tenggat proyek penting tinggal seminggu. Anda?"
    },
    options: [
      {
        text: {
          ko: "이미 80% 완료, 검토 중",
          en: "Already 80% complete, reviewing",
          ja: "既に80%完了、レビュー中",
          'zh-CN': "已经完成80%，正在审查",
          'zh-TW': "已經完成80%，正在審查",
          vi: "Đã hoàn thành 80%, đang xem xét",
          id: "Sudah 80% selesai, sedang meninjau"
        },
        scores: { Type1: 8 }
      },
      {
        text: {
          ko: "계획대로 50% 진행 중",
          en: "50% in progress as planned",
          ja: "計画通り50%進行中",
          'zh-CN': "按计划进行50%",
          'zh-TW': "按計劃進行50%",
          vi: "Đang tiến hành 50% theo kế hoạch",
          id: "50% sedang berlangsung sesuai rencana"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "이제 본격적으로 시작",
          en: "Just starting in earnest now",
          ja: "今から本格的に開始",
          'zh-CN': "现在才正式开始",
          'zh-TW': "現在才正式開始",
          vi: "Bây giờ mới bắt đầu nghiêm túc",
          id: "Baru mulai dengan serius sekarang"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "아직 시작도 안 함",
          en: "Haven't even started yet",
          ja: "まだ始めてもいない",
          'zh-CN': "还没开始",
          'zh-TW': "還沒開始",
          vi: "Chưa bắt đầu",
          id: "Belum mulai sama sekali"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "하루 중 가장 생산적인 시간은?",
      en: "What is your most productive time of day?",
      ja: "一日で最も生産的な時間は？",
      'zh-CN': "一天中最有生产力的时间是？",
      'zh-TW': "一天中最有生產力的時間是？",
      vi: "Thời gian hiệu quả nhất trong ngày của bạn là?",
      id: "Waktu paling produktif Anda dalam sehari?"
    },
    options: [
      {
        text: {
          ko: "명확히 알고 그 시간 활용",
          en: "Know clearly and utilize that time",
          ja: "明確に分かってその時間を活用",
          'zh-CN': "清楚知道并利用那个时间",
          'zh-TW': "清楚知道並利用那個時間",
          vi: "Biết rõ và tận dụng thời gian đó",
          id: "Tahu dengan jelas dan memanfaatkan waktu itu"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "대체로 오전이나 오후",
          en: "Generally morning or afternoon",
          ja: "大体午前か午後",
          'zh-CN': "大致是上午或下午",
          'zh-TW': "大致是上午或下午",
          vi: "Thường là buổi sáng hoặc chiều",
          id: "Umumnya pagi atau sore"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "잘 모르겠음",
          en: "Not sure",
          ja: "よく分からない",
          'zh-CN': "不太清楚",
          'zh-TW': "不太清楚",
          vi: "Không chắc",
          id: "Tidak yakin"
        },
        scores: { Type4: 2, Type5: 2 }
      },
      {
        text: {
          ko: "생산적인 시간이 없음",
          en: "No productive time",
          ja: "生産的な時間がない",
          'zh-CN': "没有生产时间",
          'zh-TW': "沒有生產時間",
          vi: "Không có thời gian hiệu quả",
          id: "Tidak ada waktu produktif"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "회의나 약속 시간에?",
      en: "For meetings or appointments?",
      ja: "会議や約束の時間に？",
      'zh-CN': "对于会议或约会？",
      'zh-TW': "對於會議或約會？",
      vi: "Đối với cuộc họp hoặc hẹn?",
      id: "Untuk rapat atau janji?"
    },
    options: [
      {
        text: {
          ko: "항상 10분 전 도착",
          en: "Always arrive 10 minutes early",
          ja: "いつも10分前に到着",
          'zh-CN': "总是提前10分钟到达",
          'zh-TW': "總是提前10分鐘到達",
          vi: "Luôn đến sớm 10 phút",
          id: "Selalu tiba 10 menit lebih awal"
        },
        scores: { Type1: 8 }
      },
      {
        text: {
          ko: "딱 맞춰 도착",
          en: "Arrive right on time",
          ja: "ちょうど時間通りに到着",
          'zh-CN': "准时到达",
          'zh-TW': "準時到達",
          vi: "Đến đúng giờ",
          id: "Tiba tepat waktu"
        },
        scores: { Type2: 3, Type3: 3 }
      },
      {
        text: {
          ko: "가끔 5-10분 늦음",
          en: "Sometimes 5-10 minutes late",
          ja: "時々5-10分遅れる",
          'zh-CN': "有时迟到5-10分钟",
          'zh-TW': "有時遲到5-10分鐘",
          vi: "Thỉnh thoảng trễ 5-10 phút",
          id: "Kadang terlambat 5-10 menit"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "자주 늦거나 까먹음",
          en: "Often late or forget",
          ja: "よく遅れるか忘れる",
          'zh-CN': "经常迟到或忘记",
          'zh-TW': "經常遲到或忘記",
          vi: "Thường xuyên trễ hoặc quên",
          id: "Sering terlambat atau lupa"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "SNS나 유튜브를 하루에 얼마나?",
      en: "How much time do you spend on SNS or YouTube per day?",
      ja: "SNSやYouTubeを一日にどれくらい？",
      'zh-CN': "每天花多少时间在社交媒体或YouTube上？",
      'zh-TW': "每天花多少時間在社群媒體或YouTube上？",
      vi: "Bạn dành bao nhiêu thời gian cho mạng xã hội hoặc YouTube mỗi ngày?",
      id: "Berapa banyak waktu yang Anda habiskan untuk media sosial atau YouTube per hari?"
    },
    options: [
      {
        text: {
          ko: "30분 이하, 통제 가능",
          en: "30 minutes or less, controllable",
          ja: "30分以下、コントロール可能",
          'zh-CN': "30分钟或更少，可控",
          'zh-TW': "30分鐘或更少，可控",
          vi: "30 phút hoặc ít hơn, có thể kiểm soát",
          id: "30 menit atau kurang, dapat dikontrol"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "1시간 정도",
          en: "About 1 hour",
          ja: "1時間くらい",
          'zh-CN': "大约1小时",
          'zh-TW': "大約1小時",
          vi: "Khoảng 1 giờ",
          id: "Sekitar 1 jam"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "2-3시간",
          en: "2-3 hours",
          ja: "2-3時間",
          'zh-CN': "2-3小时",
          'zh-TW': "2-3小時",
          vi: "2-3 giờ",
          id: "2-3 jam"
        },
        scores: { Type4: 2, Type5: 2 }
      },
      {
        text: {
          ko: "3시간 이상 또는 셀 수 없음",
          en: "3 hours or more, or can't count",
          ja: "3時間以上または数えられない",
          'zh-CN': "3小时以上或无法计数",
          'zh-TW': "3小時以上或無法計數",
          vi: "3 giờ trở lên hoặc không đếm được",
          id: "3 jam atau lebih, atau tidak bisa dihitung"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "\"지금 해야 할 일\"과 \"하고 싶은 일\"이 다를 때?",
      en: "When \"what you need to do\" and \"what you want to do\" are different?",
      ja: "「今やるべきこと」と「やりたいこと」が違う時？",
      'zh-CN': "当「现在应该做的事」和「想做的事」不同时？",
      'zh-TW': "當「現在應該做的事」和「想做的事」不同時？",
      vi: "Khi「việc cần làm」và「việc muốn làm」khác nhau?",
      id: "Ketika「yang harus dilakukan」dan「yang ingin dilakukan」berbeda?"
    },
    options: [
      {
        text: {
          ko: "해야 할 일 먼저 끝내고 함",
          en: "Finish what needs to be done first",
          ja: "やるべきことを先に終わらせる",
          'zh-CN': "先完成应该做的事",
          'zh-TW': "先完成應該做的事",
          vi: "Hoàn thành việc cần làm trước",
          id: "Selesaikan yang harus dilakukan dulu"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "해야 할 일 하다가 적당히 쉬며 함",
          en: "Do what needs to be done while taking breaks",
          ja: "やるべきことをしながら適度に休む",
          'zh-CN': "做应该做的事同时适当休息",
          'zh-TW': "做應該做的事同時適當休息",
          vi: "Làm việc cần làm trong khi nghỉ ngơi hợp lý",
          id: "Lakukan yang harus dilakukan sambil istirahat"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "하고 싶은 일부터 하고 나중에",
          en: "Do what you want first, then later",
          ja: "やりたいことを先にして後で",
          'zh-CN': "先做想做的事，然后再说",
          'zh-TW': "先做想做的事，然後再說",
          vi: "Làm việc muốn làm trước, sau đó mới làm",
          id: "Lakukan yang ingin dilakukan dulu, nanti"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "하고 싶은 일만 하고 미룸",
          en: "Only do what you want and procrastinate",
          ja: "やりたいことだけして先延ばし",
          'zh-CN': "只做想做的事，拖延其他",
          'zh-TW': "只做想做的事，拖延其他",
          vi: "Chỉ làm việc muốn làm và trì hoãn",
          id: "Hanya lakukan yang ingin dilakukan dan tunda"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "업무 중 예상치 못한 일이 생기면?",
      en: "When something unexpected happens during work?",
      ja: "業務中に予想外のことが起きたら？",
      'zh-CN': "工作中出现意外情况时？",
      'zh-TW': "工作中出現意外情況時？",
      vi: "Khi có chuyện bất ngờ xảy ra trong công việc?",
      id: "Ketika sesuatu yang tidak terduga terjadi saat bekerja?"
    },
    options: [
      {
        text: {
          ko: "우선순위 재조정 후 처리",
          en: "Readjust priorities and handle",
          ja: "優先順位を再調整して対応",
          'zh-CN': "重新调整优先级后处理",
          'zh-TW': "重新調整優先級後處理",
          vi: "Điều chỉnh lại ưu tiên và xử lý",
          id: "Sesuaikan ulang prioritas dan tangani"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "급한 것부터 처리",
          en: "Handle urgent things first",
          ja: "急ぎのものから対応",
          'zh-CN': "先处理紧急的事",
          'zh-TW': "先處理緊急的事",
          vi: "Xử lý việc khẩn cấp trước",
          id: "Tangani hal mendesak dulu"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "당황하며 이것저것 처리",
          en: "Panic and handle various things",
          ja: "慌ててあれこれ対応",
          'zh-CN': "慌乱地处理各种事情",
          'zh-TW': "慌亂地處理各種事情",
          vi: "Hoảng sợ và xử lý nhiều thứ",
          id: "Panik dan tangani berbagai hal"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "패닉 상태로 엉망",
          en: "Panic and mess up",
          ja: "パニック状態でめちゃくちゃ",
          'zh-CN': "恐慌状态一团糟",
          'zh-TW': "恐慌狀態一團糟",
          vi: "Hoảng loạn và làm lộn xộn",
          id: "Panik dan kacau"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "하루를 마치고 자기 전?",
      en: "Before going to bed after finishing the day?",
      ja: "一日を終えて寝る前？",
      'zh-CN': "结束一天睡觉前？",
      'zh-TW': "結束一天睡覺前？",
      vi: "Trước khi đi ngủ sau khi kết thúc ngày?",
      id: "Sebelum tidur setelah menyelesaikan hari?"
    },
    options: [
      {
        text: {
          ko: "오늘 성과 체크, 내일 계획",
          en: "Check today's achievements, plan tomorrow",
          ja: "今日の成果チェック、明日の計画",
          'zh-CN': "检查今天的成果，计划明天",
          'zh-TW': "檢查今天的成果，計劃明天",
          vi: "Kiểm tra thành tựu hôm nay, lập kế hoạch ngày mai",
          id: "Periksa pencapaian hari ini, rencanakan besok"
        },
        scores: { Type1: 8 }
      },
      {
        text: {
          ko: "간단히 오늘 돌아봄",
          en: "Briefly reflect on today",
          ja: "簡単に今日を振り返る",
          'zh-CN': "简单回顾今天",
          'zh-TW': "簡單回顧今天",
          vi: "Suy ngẫm ngắn gọn về hôm nay",
          id: "Refleksi singkat tentang hari ini"
        },
        scores: { Type2: 3, Type3: 3 }
      },
      {
        text: {
          ko: "그냥 피곤해서 바로 잠",
          en: "Just tired and sleep right away",
          ja: "ただ疲れてすぐ寝る",
          'zh-CN': "只是累了马上睡觉",
          'zh-TW': "只是累了馬上睡覺",
          vi: "Chỉ mệt và ngủ ngay",
          id: "Hanya lelah dan langsung tidur"
        },
        scores: { Type4: 2, Type5: 2 }
      },
      {
        text: {
          ko: "스마트폰 보다 늦게 잠",
          en: "Look at smartphone and sleep late",
          ja: "スマートフォンを見て遅く寝る",
          'zh-CN': "看手机晚睡",
          'zh-TW': "看手機晚睡",
          vi: "Xem điện thoại và ngủ muộn",
          id: "Lihat smartphone dan tidur larut"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "멀티태스킹에 대한 생각은?",
      en: "What do you think about multitasking?",
      ja: "マルチタスクについての考えは？",
      'zh-CN': "对多任务处理的看法是？",
      'zh-TW': "對多任務處理的看法是？",
      vi: "Bạn nghĩ gì về đa nhiệm?",
      id: "Apa pendapat Anda tentang multitasking?"
    },
    options: [
      {
        text: {
          ko: "효율 떨어져서 한 가지만",
          en: "Inefficient, so focus on one thing",
          ja: "効率が落ちるので一つだけ",
          'zh-CN': "效率低，所以只专注一件事",
          'zh-TW': "效率低，所以只專注一件事",
          vi: "Không hiệu quả, nên chỉ tập trung vào một việc",
          id: "Tidak efisien, jadi fokus pada satu hal"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "필요할 때만 간단히",
          en: "Only when necessary, briefly",
          ja: "必要な時だけ簡単に",
          'zh-CN': "只在必要时简单处理",
          'zh-TW': "只在必要時簡單處理",
          vi: "Chỉ khi cần thiết, ngắn gọn",
          id: "Hanya saat diperlukan, secara singkat"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "자주 여러 일 동시 진행",
          en: "Often work on multiple things simultaneously",
          ja: "よく複数のことを同時進行",
          'zh-CN': "经常同时处理多件事",
          'zh-TW': "經常同時處理多件事",
          vi: "Thường làm nhiều việc đồng thời",
          id: "Sering mengerjakan banyak hal secara bersamaan"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "항상 여러 가지 동시에",
          en: "Always multiple things at once",
          ja: "いつも複数のことを同時に",
          'zh-CN': "总是同时处理多件事",
          'zh-TW': "總是同時處理多件事",
          vi: "Luôn làm nhiều việc cùng lúc",
          id: "Selalu banyak hal sekaligus"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "\"시간이 부족해\"라는 말을 얼마나 자주?",
      en: "How often do you say \"I don't have enough time\"?",
      ja: "「時間が足りない」という言葉をどれくらい頻繁に？",
      'zh-CN': "你多久说一次「时间不够」？",
      'zh-TW': "你多久說一次「時間不夠」？",
      vi: "Bạn nói「không đủ thời gian」bao nhiêu lần?",
      id: "Seberapa sering Anda mengatakan「tidak punya cukup waktu」?"
    },
    options: [
      {
        text: {
          ko: "거의 안 함",
          en: "Rarely",
          ja: "ほとんどしない",
          'zh-CN': "几乎不说",
          'zh-TW': "幾乎不說",
          vi: "Hiếm khi",
          id: "Jarang"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "가끔 바쁠 때만",
          en: "Only when occasionally busy",
          ja: "たまに忙しい時だけ",
          'zh-CN': "只在偶尔忙的时候",
          'zh-TW': "只在偶爾忙的時候",
          vi: "Chỉ khi thỉnh thoảng bận",
          id: "Hanya saat kadang sibuk"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "자주 함",
          en: "Often",
          ja: "よくする",
          'zh-CN': "经常说",
          'zh-TW': "經常說",
          vi: "Thường xuyên",
          id: "Sering"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "항상 시간이 부족함",
          en: "Always lack time",
          ja: "いつも時間が足りない",
          'zh-CN': "总是时间不够",
          'zh-TW': "總是時間不夠",
          vi: "Luôn thiếu thời gian",
          id: "Selalu kekurangan waktu"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "퇴근/하교 후 여가 시간을?",
      en: "How do you spend leisure time after work/school?",
      ja: "退勤/下校後の余暇時間を？",
      'zh-CN': "下班/放学后的闲暇时间？",
      'zh-TW': "下班/放學後的閒暇時間？",
      vi: "Bạn dành thời gian rảnh rỗi sau giờ làm/học như thế nào?",
      id: "Bagaimana Anda menghabiskan waktu luang setelah kerja/sekolah?"
    },
    options: [
      {
        text: {
          ko: "계획한 자기계발이나 취미",
          en: "Planned self-development or hobbies",
          ja: "計画した自己啓発や趣味",
          'zh-CN': "计划好的自我发展或爱好",
          'zh-TW': "計劃好的自我發展或愛好",
          vi: "Phát triển bản thân hoặc sở thích đã lập kế hoạch",
          id: "Pengembangan diri atau hobi yang direncanakan"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "적절히 쉬면서 활용",
          en: "Utilize while resting appropriately",
          ja: "適度に休みながら活用",
          'zh-CN': "适当休息的同时利用",
          'zh-TW': "適當休息的同時利用",
          vi: "Tận dụng trong khi nghỉ ngơi hợp lý",
          id: "Manfaatkan sambil istirahat dengan baik"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "대부분 TV나 누워서 휴대폰",
          en: "Mostly TV or lying down with phone",
          ja: "ほとんどTVか寝転んで携帯",
          'zh-CN': "大多看电视或躺着玩手机",
          'zh-TW': "大多看電視或躺著玩手機",
          vi: "Chủ yếu xem TV hoặc nằm xem điện thoại",
          id: "Kebanyakan TV atau berbaring dengan ponsel"
        },
        scores: { Type4: 2, Type5: 2, Type6: 2 }
      },
      {
        text: {
          ko: "어떻게 보냈는지 기억 안 남",
          en: "Don't remember how it was spent",
          ja: "どう過ごしたか覚えていない",
          'zh-CN': "不记得怎么度过的",
          'zh-TW': "不記得怎麼度過的",
          vi: "Không nhớ đã dành thời gian như thế nào",
          id: "Tidak ingat bagaimana menghabiskannya"
        },
        scores: { Type6: 3 }
      }
    ]
  }
];

export const timeEfficiencyResults: TimeEfficiencyResult[] = [];

export function calculateTimeEfficiencyResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      if (scores[type as keyof typeof scores] !== undefined) {
        scores[type as keyof typeof scores] += answer[type];
      }
    });
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 답변 확인)
  if (resultType && answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
    
    lastThreeAnswers.forEach(answer => {
      Object.keys(answer).forEach(type => {
        if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
          lastThreeScores[type as keyof typeof lastThreeScores] += answer[type];
        }
      });
    });
    
    const maxLastScore = Math.max(...Object.values(lastThreeScores));
    const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
    
    return lastResultType || resultType;
  }
  
  return resultType || "Type1";
}
