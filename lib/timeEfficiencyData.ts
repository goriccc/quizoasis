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
  longDescription: Record<string, string>;
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
      'zh-CN': "早上起床后最先做什么？",
      'zh-TW': "早上起床後最先做什麼？",
      vi: "Việc đầu tiên bạn làm khi thức dậy vào buổi sáng là gì?",
      id: "Apa yang pertama kali Anda lakukan saat bangun pagi?"
    },
    options: [
      {
        text: {
          ko: "오늘 할 일 체크리스트 확인",
          en: "Check today's to-do list",
          ja: "今日のやることリストを確認",
          'zh-CN': "查看今天的待办清单",
          'zh-TW': "查看今天的待辦清單",
          vi: "Kiểm tra danh sách việc cần làm hôm nay",
          id: "Periksa daftar tugas hari ini"
        },
        scores: { Type1: 8, Type2: 2 }
      },
      {
        text: {
          ko: "간단히 하루 계획 생각",
          en: "Think about the day's plan briefly",
          ja: "簡単に一日の計画を考える",
          'zh-CN': "简单思考一天的计划",
          'zh-TW': "簡單思考一天的計劃",
          vi: "Suy nghĩ đơn giản về kế hoạch trong ngày",
          id: "Berpikir sederhana tentang rencana hari ini"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "일단 씻고 준비하며 생각",
          en: "Wash and prepare while thinking",
          ja: "とりあえず洗って準備しながら考える",
          'zh-CN': "先洗漱准备，边做边想",
          'zh-TW': "先洗漱準備，邊做邊想",
          vi: "Tắm rửa và chuẩn bị trong khi suy nghĩ",
          id: "Mandi dan persiapan sambil berpikir"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "스마트폰 보다가 시간 가는 줄 모름",
          en: "Look at smartphone without realizing time passing",
          ja: "スマホを見ていて時間が経つのも忘れる",
          'zh-CN': "看手机不知不觉时间就过去了",
          'zh-TW': "看手機不知不覺時間就過去了",
          vi: "Xem điện thoại mà không nhận ra thời gian trôi qua",
          id: "Melihat smartphone tanpa menyadari waktu berlalu"
        },
        scores: { Type5: 2, Type6: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "하루 일과를 계획할 때?",
      en: "When planning your daily schedule?",
      ja: "一日のスケジュールを計画する時は？",
      'zh-CN': "计划一天的工作时？",
      'zh-TW': "計劃一天的工作時？",
      vi: "Khi lập kế hoạch cho công việc trong ngày?",
      id: "Saat merencanakan jadwal harian?"
    },
    options: [
      {
        text: {
          ko: "시간 단위로 상세하게 계획",
          en: "Plan in detail by time units",
          ja: "時間単位で詳細に計画",
          'zh-CN': "按时间单位详细规划",
          'zh-TW': "按時間單位詳細規劃",
          vi: "Lập kế hoạch chi tiết theo từng giờ",
          id: "Rencanakan secara detail berdasarkan satuan waktu"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "주요 업무만 정리",
          en: "Organize only main tasks",
          ja: "主要な業務のみ整理",
          'zh-CN': "只整理主要工作",
          'zh-TW': "只整理主要工作",
          vi: "Chỉ sắp xếp các công việc chính",
          id: "Atur hanya tugas-tugas utama"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "대충 머릿속으로만 생각",
          en: "Think roughly in my head only",
          ja: "大まかに頭の中だけで考える",
          'zh-CN': "只在脑海里大概想想",
          'zh-TW': "只在腦海裡大概想想",
          vi: "Chỉ nghĩ đại khái trong đầu",
          id: "Berpikir kasar hanya di kepala"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "계획 안 세움, 그때그때 처리",
          en: "Don't make plans, handle as needed",
          ja: "計画は立てず、その都度処理",
          'zh-CN': "不制定计划，随时处理",
          'zh-TW': "不制定計劃，隨時處理",
          vi: "Không lập kế hoạch, xử lý khi cần",
          id: "Tidak membuat rencana, tangani sesuai kebutuhan"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "중요한 프로젝트 마감이 일주일 남았습니다. 당신은?",
      en: "An important project deadline is one week away. You?",
      ja: "重要なプロジェクトの締切が一週間後にあります。あなたは？",
      'zh-CN': "重要项目还有一周截止。你？",
      'zh-TW': "重要項目還有一週截止。你？",
      vi: "Thời hạn của dự án quan trọng còn một tuần. Bạn?",
      id: "Tenggat proyek penting tinggal seminggu lagi. Anda?"
    },
    options: [
      {
        text: {
          ko: "이미 80% 완료, 검토 중",
          en: "Already 80% complete, reviewing",
          ja: "すでに80%完了、レビュー中",
          'zh-CN': "已经完成80%，正在审查",
          'zh-TW': "已經完成80%，正在審查",
          vi: "Đã hoàn thành 80%, đang xem xét",
          id: "Sudah 80% selesai, sedang review"
        },
        scores: { Type1: 8 }
      },
      {
        text: {
          ko: "계획대로 50% 진행 중",
          en: "50% progress as planned",
          ja: "計画通り50%進行中",
          'zh-CN': "按计划进行50%",
          'zh-TW': "按計劃進行50%",
          vi: "Đang tiến hành 50% theo kế hoạch",
          id: "50% kemajuan sesuai rencana"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "이제 본격적으로 시작",
          en: "Just starting seriously now",
          ja: "今本格的に開始",
          'zh-CN': "现在才开始认真做",
          'zh-TW': "現在才開始認真做",
          vi: "Bây giờ mới bắt đầu nghiêm túc",
          id: "Baru mulai serius sekarang"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "아직 시작도 안 함",
          en: "Haven't started yet",
          ja: "まだ開始していない",
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
      ja: "一日の中で最も生産的な時間は？",
      'zh-CN': "一天中最有效率的时间是？",
      'zh-TW': "一天中最有效率的時間是？",
      vi: "Thời gian hiệu quả nhất trong ngày của bạn là gì?",
      id: "Waktu paling produktif dalam sehari adalah?"
    },
    options: [
      {
        text: {
          ko: "명확히 알고 그 시간 활용",
          en: "Know clearly and utilize that time",
          ja: "明確に知っていてその時間を活用",
          'zh-CN': "明确知道并利用那个时间",
          'zh-TW': "明確知道並利用那個時間",
          vi: "Biết rõ và tận dụng thời gian đó",
          id: "Tahu jelas dan memanfaatkan waktu itu"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "대체로 오전이나 오후",
          en: "Generally morning or afternoon",
          ja: "大体午前か午後",
          'zh-CN': "一般是上午或下午",
          'zh-TW': "一般是上午或下午",
          vi: "Thường là buổi sáng hoặc buổi chiều",
          id: "Umumnya pagi atau sore"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "잘 모르겠음",
          en: "Not sure",
          ja: "よく分からない",
          'zh-CN': "不太确定",
          'zh-TW': "不太確定",
          vi: "Không chắc chắn",
          id: "Tidak yakin"
        },
        scores: { Type4: 2, Type5: 2 }
      },
      {
        text: {
          ko: "생산적인 시간이 없음",
          en: "No productive time",
          ja: "生産的な時間がない",
          'zh-CN': "没有有效率的时间",
          'zh-TW': "沒有有效率的時間",
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
      ja: "会議や約束の時間には？",
      'zh-CN': "对于会议或约会时间？",
      'zh-TW': "對於會議或約會時間？",
      vi: "Đối với cuộc họp hoặc cuộc hẹn?",
      id: "Untuk rapat atau janji temu?"
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
          en: "Arrive exactly on time",
          ja: "ちょうど時間通りに到着",
          'zh-CN': "正好准时到达",
          'zh-TW': "正好準時到達",
          vi: "Đến đúng giờ",
          id: "Tiba tepat waktu"
        },
        scores: { Type2: 3, Type3: 3 }
      },
      {
        text: {
          ko: "가끔 5-10분 늦음",
          en: "Sometimes 5-10 minutes late",
          ja: "たまに5-10分遅れる",
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
          ja: "よく遅れたり忘れたりする",
          'zh-CN': "经常迟到或忘记",
          'zh-TW': "經常遲到或忘記",
          vi: "Thường trễ hoặc quên",
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
      en: "How much SNS or YouTube per day?",
      ja: "SNSやYouTubeを一日にどのくらい？",
      'zh-CN': "每天使用SNS或YouTube多长时间？",
      'zh-TW': "每天使用SNS或YouTube多長時間？",
      vi: "Sử dụng SNS hoặc YouTube bao lâu mỗi ngày?",
      id: "Berapa lama SNS atau YouTube per hari?"
    },
    options: [
      {
        text: {
          ko: "30분 이하, 통제 가능",
          en: "30 minutes or less, controllable",
          ja: "30分以下、コントロール可能",
          'zh-CN': "30分钟以下，可以控制",
          'zh-TW': "30分鐘以下，可以控制",
          vi: "30 phút trở xuống, có thể kiểm soát",
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
          en: "3 hours or more or uncountable",
          ja: "3時間以上または数えられない",
          'zh-CN': "3小时以上或数不清",
          'zh-TW': "3小時以上或數不清",
          vi: "3 giờ trở lên hoặc không đếm được",
          id: "3 jam atau lebih atau tidak terhitung"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "\"지금 해야 할 일\"과 \"하고 싶은 일\"이 다를 때?",
      en: "When \"things I need to do\" and \"things I want to do\" are different?",
      ja: "「今やるべきこと」と「やりたいこと」が違う時は？",
      'zh-CN': "当「必须做的事」和「想做的事」不同时？",
      'zh-TW': "當「必須做的事」和「想做的事」不同時？",
      vi: "Khi \"việc cần làm\" và \"việc muốn làm\" khác nhau?",
      id: "Ketika \"hal yang harus dilakukan\" dan \"hal yang ingin dilakukan\" berbeda?"
    },
    options: [
      {
        text: {
          ko: "해야 할 일 먼저 끝내고 함",
          en: "Finish what I need to do first",
          ja: "やるべきことを先に終わらせてから",
          'zh-CN': "先完成必须做的事",
          'zh-TW': "先完成必須做的事",
          vi: "Làm xong việc cần làm trước",
          id: "Selesaikan yang harus dilakukan dulu"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "해야 할 일 하다가 적당히 쉬며 함",
          en: "Do what I need to do, then take breaks appropriately",
          ja: "やるべきことをしながら適度に休んで",
          'zh-CN': "做必须做的事时适当休息",
          'zh-TW': "做必須做的事時適當休息",
          vi: "Làm việc cần làm rồi nghỉ ngơi hợp lý",
          id: "Lakukan yang harus dilakukan sambil istirahat secukupnya"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "하고 싶은 일부터 하고 나중에",
          en: "Do what I want to do first, later",
          ja: "やりたいことからやって後で",
          'zh-CN': "先做想做的事，以后再说",
          'zh-TW': "先做想做的事，以後再說",
          vi: "Làm việc muốn làm trước, để sau",
          id: "Lakukan yang ingin dilakukan dulu, nanti"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "하고 싶은 일만 하고 미룸",
          en: "Only do what I want to do, postpone",
          ja: "やりたいことだけやって先延ばし",
          'zh-CN': "只做想做的事，推迟",
          'zh-TW': "只做想做的事，推遲",
          vi: "Chỉ làm việc muốn làm, trì hoãn",
          id: "Hanya lakukan yang ingin dilakukan, tunda"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "업무 중 예상치 못한 일이 생기면?",
      en: "When unexpected things happen during work?",
      ja: "仕事中に予期しないことが起こったら？",
      'zh-CN': "工作中发生意外情况时？",
      'zh-TW': "工作中發生意外情況時？",
      vi: "Khi có việc bất ngờ xảy ra trong công việc?",
      id: "Ketika hal tak terduga terjadi saat bekerja?"
    },
    options: [
      {
        text: {
          ko: "우선순위 재조정 후 처리",
          en: "Reorganize priorities then handle",
          ja: "優先順位を再調整してから処理",
          'zh-CN': "重新调整优先级后处理",
          'zh-TW': "重新調整優先級後處理",
          vi: "Sắp xếp lại ưu tiên rồi xử lý",
          id: "Atur ulang prioritas lalu tangani"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "급한 것부터 처리",
          en: "Handle urgent things first",
          ja: "急なことから処理",
          'zh-CN': "先处理紧急的事",
          'zh-TW': "先處理緊急的事",
          vi: "Xử lý việc khẩn cấp trước",
          id: "Tangani yang mendesak dulu"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "당황하며 이것저것 처리",
          en: "Panic and handle various things",
          ja: "慌ててあれこれ処理",
          'zh-CN': "慌张地处理各种事情",
          'zh-TW': "慌張地處理各種事情",
          vi: "Hoảng loạn và xử lý nhiều việc",
          id: "Panik dan tangani berbagai hal"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "패닉 상태로 엉망",
          en: "In panic state, messy",
          ja: "パニック状態でめちゃくちゃ",
          'zh-CN': "处于恐慌状态，一团糟",
          'zh-TW': "處於恐慌狀態，一團糟",
          vi: "Trong trạng thái hoảng loạn, lộn xộn",
          id: "Dalam keadaan panik, berantakan"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "하루를 마치고 자기 전?",
      en: "After finishing the day, before sleep?",
      ja: "一日を終えて寝る前は？",
      'zh-CN': "一天结束后睡觉前？",
      'zh-TW': "一天結束後睡覺前？",
      vi: "Sau khi kết thúc ngày, trước khi ngủ?",
      id: "Setelah menyelesaikan hari, sebelum tidur?"
    },
    options: [
      {
        text: {
          ko: "오늘 성과 체크, 내일 계획",
          en: "Check today's results, plan tomorrow",
          ja: "今日の成果チェック、明日の計画",
          'zh-CN': "检查今天的成果，计划明天",
          'zh-TW': "檢查今天的成果，計劃明天",
          vi: "Kiểm tra kết quả hôm nay, lập kế hoạch ngày mai",
          id: "Cek hasil hari ini, rencanakan besok"
        },
        scores: { Type1: 8 }
      },
      {
        text: {
          ko: "간단히 오늘 돌아봄",
          en: "Briefly look back on today",
          ja: "簡単に今日を振り返る",
          'zh-CN': "简单回顾今天",
          'zh-TW': "簡單回顧今天",
          vi: "Nhìn lại ngày hôm nay một cách đơn giản",
          id: "Melihat kembali hari ini secara singkat"
        },
        scores: { Type2: 3, Type3: 3 }
      },
      {
        text: {
          ko: "그냥 피곤해서 바로 잠",
          en: "Just tired, sleep right away",
          ja: "ただ疲れていてすぐ寝る",
          'zh-CN': "只是累了，直接睡觉",
          'zh-TW': "只是累了，直接睡覺",
          vi: "Chỉ mệt mỏi nên ngủ ngay",
          id: "Hanya lelah, langsung tidur"
        },
        scores: { Type4: 2, Type5: 2 }
      },
      {
        text: {
          ko: "스마트폰 보다 늦게 잠",
          en: "Look at smartphone, sleep late",
          ja: "スマホを見て遅く寝る",
          'zh-CN': "看手机，晚睡",
          'zh-TW': "看手機，晚睡",
          vi: "Xem điện thoại, ngủ muộn",
          id: "Lihat smartphone, tidur larut"
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
      ja: "マルチタスキングについてどう思いますか？",
      'zh-CN': "你对多任务处理有什么看法？",
      'zh-TW': "你對多任務處理有什麼看法？",
      vi: "Bạn nghĩ gì về đa nhiệm?",
      id: "Apa pendapat Anda tentang multitasking?"
    },
    options: [
      {
        text: {
          ko: "효율 떨어져서 한 가지만",
          en: "Efficiency drops, so only one thing",
          ja: "効率が落ちるので一つだけ",
          'zh-CN': "效率下降，所以只做一件事",
          'zh-TW': "效率下降，所以只做一件事",
          vi: "Hiệu quả giảm nên chỉ làm một việc",
          id: "Efisiensi turun, jadi hanya satu hal"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "필요할 때만 간단히",
          en: "Only when needed, briefly",
          ja: "必要な時だけ簡単に",
          'zh-CN': "只在需要时简单做",
          'zh-TW': "只在需要時簡單做",
          vi: "Chỉ khi cần thiết, một cách đơn giản",
          id: "Hanya ketika diperlukan, secara singkat"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "자주 여러 일 동시 진행",
          en: "Often do multiple things simultaneously",
          ja: "よく複数のことを同時に進行",
          'zh-CN': "经常同时进行多件事",
          'zh-TW': "經常同時進行多件事",
          vi: "Thường làm nhiều việc cùng lúc",
          id: "Sering melakukan beberapa hal bersamaan"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "항상 여러 가지 동시에",
          en: "Always multiple things simultaneously",
          ja: "いつも複数のことを同時に",
          'zh-CN': "总是同时做多件事",
          'zh-TW': "總是同時做多件事",
          vi: "Luôn làm nhiều việc cùng lúc",
          id: "Selalu beberapa hal bersamaan"
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
      ja: "「時間が足りない」という言葉をどのくらい頻繁に？",
      'zh-CN': "你多久说一次「时间不够」？",
      'zh-TW': "你多久說一次「時間不夠」？",
      vi: "Bạn thường nói \"không có đủ thời gian\" bao lâu một lần?",
      id: "Seberapa sering Anda mengatakan \"tidak punya cukup waktu\"?"
    },
    options: [
      {
        text: {
          ko: "거의 안 함",
          en: "Almost never",
          ja: "ほとんど言わない",
          'zh-CN': "几乎不说",
          'zh-TW': "幾乎不說",
          vi: "Hầu như không nói",
          id: "Hampir tidak pernah"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "가끔 바쁠 때만",
          en: "Sometimes only when busy",
          ja: "たまに忙しい時だけ",
          'zh-CN': "有时只在忙碌时",
          'zh-TW': "有時只在忙碌時",
          vi: "Thỉnh thoảng chỉ khi bận",
          id: "Kadang hanya ketika sibuk"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "자주 함",
          en: "Often",
          ja: "よく言う",
          'zh-CN': "经常说",
          'zh-TW': "經常說",
          vi: "Thường nói",
          id: "Sering"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "항상 시간이 부족함",
          en: "Always lacking time",
          ja: "いつも時間が不足",
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
      ja: "退勤・下校後の余暇時間を？",
      'zh-CN': "下班/放学后的休闲时间？",
      'zh-TW': "下班/放學後的休閒時間？",
      vi: "Thời gian rảnh sau giờ làm/giờ học?",
      id: "Waktu luang setelah pulang kerja/sekolah?"
    },
    options: [
      {
        text: {
          ko: "계획한 자기계발이나 취미",
          en: "Planned self-development or hobbies",
          ja: "計画した自己啓発や趣味",
          'zh-CN': "计划的自我发展或爱好",
          'zh-TW': "計劃的自我發展或愛好",
          vi: "Tự phát triển hoặc sở thích có kế hoạch",
          id: "Pengembangan diri atau hobi yang direncanakan"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "적절히 쉬면서 활용",
          en: "Rest appropriately and utilize",
          ja: "適度に休みながら活用",
          'zh-CN': "适当休息并利用",
          'zh-TW': "適當休息並利用",
          vi: "Nghỉ ngơi hợp lý và tận dụng",
          id: "Istirahat secukupnya dan memanfaatkan"
        },
        scores: { Type3: 8, Type2: 2 }
      },
      {
        text: {
          ko: "대부분 TV나 누워서 휴대폰",
          en: "Mostly TV or lying down with phone",
          ja: "ほとんどTVや横になってスマホ",
          'zh-CN': "大部分看电视或躺着玩手机",
          'zh-TW': "大部分看電視或躺著玩手機",
          vi: "Hầu hết xem TV hoặc nằm dùng điện thoại",
          id: "Kebanyakan TV atau berbaring dengan HP"
        },
        scores: { Type4: 2, Type5: 2, Type6: 2 }
      },
      {
        text: {
          ko: "어떻게 보냈는지 기억 안 남",
          en: "Don't remember how I spent it",
          ja: "どう過ごしたか覚えていない",
          'zh-CN': "不记得是怎么度过的",
          'zh-TW': "不記得是怎麼度過的",
          vi: "Không nhớ đã trải qua như thế nào",
          id: "Tidak ingat bagaimana menghabiskannya"
        },
        scores: { Type6: 3 }
      }
    ]
  }
];

export const timeEfficiencyResults: TimeEfficiencyResult[] = [
  {
    type: "Type1",
    emoji: "⏰👑",
    title: {
      ko: "타임 마스터형",
      en: "Time Master",
      ja: "タイムマスター型",
      'zh-CN': "时间大师型",
      'zh-TW': "時間大師型",
      vi: "Bậc thầy thời gian",
      id: "Master Waktu"
    },
    description: {
      ko: "완벽한 시간 지배자! 모든 시간을 통제하는 생산성의 신",
      en: "Perfect time dominator! God of productivity who controls all time",
      ja: "完璧な時間支配者！すべての時間をコントロールする生産性の神",
      'zh-CN': "完美的时间支配者！控制所有时间的生产力之神",
      'zh-TW': "完美的時間支配者！控制所有時間的生產力之神",
      vi: "Bậc thầy thời gian hoàn hảo! Thần năng suất kiểm soát mọi thời gian",
      id: "Penguasa waktu sempurna! Dewa produktivitas yang mengontrol semua waktu"
    },
    longDescription: {
      ko: "시간을 완벽하게 관리합니다. 세밀한 계획과 철저한 실행으로 항상 여유 있게 일을 끝냅니다. 우선순위가 명확하고 시간 낭비가 거의 없습니다. 마감을 여유 있게 지키며 높은 생산성을 자랑합니다. CEO, 임원급에게 필요한 완벽한 시간 관리 능력을 보유하고 있습니다.",
      en: "Manages time perfectly. Always finishes work comfortably with detailed planning and thorough execution. Clear priorities and almost no time waste. Maintains deadlines comfortably and boasts high productivity. Possesses the perfect time management skills needed for CEOs and executives.",
      ja: "時間を完璧に管理します。細密な計画と徹底した実行で、常に余裕を持って仕事を終えます。優先順位が明確で、時間の無駄がほとんどありません。締切を余裕を持って守り、高い生産性を誇ります。CEO、役員クラスに必要な完璧な時間管理能力を持っています。",
      'zh-CN': "完美地管理时间。通过细致的规划和彻底的执行，总是轻松地完成工作。优先顺序明确，几乎没有时间浪费。轻松地遵守截止日期，拥有高生产力。具备CEO、高管级别所需的完美时间管理能力。",
      'zh-TW': "完美地管理時間。通過細緻的規劃和徹底的執行，總是輕鬆地完成工作。優先順序明確，幾乎沒有時間浪費。輕鬆地遵守截止日期，擁有高生產力。具備CEO、高管級別所需的完美時間管理能力。",
      vi: "Quản lý thời gian hoàn hảo. Luôn hoàn thành công việc một cách thoải mái với kế hoạch chi tiết và thực hiện triệt để. Ưu tiên rõ ràng và hầu như không lãng phí thời gian. Duy trì thời hạn một cách thoải mái và tự hào về năng suất cao. Sở hữu kỹ năng quản lý thời gian hoàn hảo cần thiết cho CEO và giám đốc điều hành.",
      id: "Mengelola waktu dengan sempurna. Selalu menyelesaikan pekerjaan dengan nyaman dengan perencanaan detail dan eksekusi menyeluruh. Prioritas yang jelas dan hampir tidak ada pemborosan waktu. Mempertahankan tenggat waktu dengan nyaman dan bangga dengan produktivitas tinggi. Memiliki keterampilan manajemen waktu sempurna yang dibutuhkan untuk CEO dan eksekutif."
    },
    pros: [
      {
        ko: "높은 생산성",
        en: "High productivity",
        ja: "高い生産性",
        'zh-CN': "高生产力",
        'zh-TW': "高生產力",
        vi: "Năng suất cao",
        id: "Produktivitas tinggi"
      },
      {
        ko: "여유로움",
        en: "Comfortable",
        ja: "余裕",
        'zh-CN': "舒适",
        'zh-TW': "舒適",
        vi: "Thoải mái",
        id: "Nyaman"
      },
      {
        ko: "신뢰감",
        en: "Trust",
        ja: "信頼感",
        'zh-CN': "信任感",
        'zh-TW': "信任感",
        vi: "Cảm giác tin tưởng",
        id: "Perasaan percaya"
      },
      {
        ko: "성취감",
        en: "Achievement",
        ja: "達成感",
        'zh-CN': "成就感",
        'zh-TW': "成就感",
        vi: "Cảm giác thành tựu",
        id: "Perasaan pencapaian"
      }
    ],
    cons: [
      {
        ko: "완벽주의",
        en: "Perfectionism",
        ja: "完璧主義",
        'zh-CN': "完美主义",
        'zh-TW': "完美主義",
        vi: "Chủ nghĩa hoàn hảo",
        id: "Perfeksionisme"
      },
      {
        ko: "융통성 부족",
        en: "Lack of flexibility",
        ja: "柔軟性不足",
        'zh-CN': "缺乏灵活性",
        'zh-TW': "缺乏靈活性",
        vi: "Thiếu linh hoạt",
        id: "Kurang fleksibilitas"
      },
      {
        ko: "타인에게 엄격할 수 있음",
        en: "Can be strict with others",
        ja: "他人に厳しくなることがある",
        'zh-CN': "可能对他人严格",
        'zh-TW': "可能對他人嚴格",
        vi: "Có thể nghiêm khắc với người khác",
        id: "Bisa ketat dengan orang lain"
      }
    ],
    advice: {
      ko: "완벽하지만 가끔은 계획 없는 여유도 즐기세요!",
      en: "Perfect but sometimes enjoy unplanned leisure too!",
      ja: "完璧ですが、時々計画のない余裕も楽しんでください！",
      'zh-CN': "完美但有时也要享受无计划的休闲！",
      'zh-TW': "完美但有時也要享受無計劃的休閒！",
      vi: "Hoàn hảo nhưng đôi khi hãy tận hưởng thời gian rảnh không có kế hoạch!",
      id: "Sempurna tapi kadang nikmati waktu luang tanpa rencana juga!"
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type4", "Type5"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type2",
    emoji: "⚡",
    title: {
      ko: "효율적 실용형",
      en: "Efficient Practical Type",
      ja: "効率的実用型",
      'zh-CN': "高效实用型",
      'zh-TW': "高效實用型",
      vi: "Thực tế hiệu quả",
      id: "Praktis Efisien"
    },
    description: {
      ko: "스마트한 시간 관리자! 효율성과 실용성의 균형",
      en: "Smart time manager! Balance of efficiency and practicality",
      ja: "スマートな時間管理者！効率性と実用性のバランス",
      'zh-CN': "智能时间管理者！效率与实用性的平衡",
      'zh-TW': "智能時間管理者！效率與實用性的平衡",
      vi: "Người quản lý thời gian thông minh! Cân bằng hiệu quả và thực tế",
      id: "Manajer waktu cerdas! Keseimbangan efisiensi dan praktis"
    },
    longDescription: {
      ko: "중요한 것에 집중하며 효율적으로 시간을 씁니다. 완벽하지는 않지만 대부분 마감을 지키고 필요한 것을 해냅니다. 계획과 실행의 균형이 좋으며 유연하게 대처합니다. 현실적이고 지속 가능한 시간 관리를 합니다.",
      en: "Focuses on important things and uses time efficiently. Not perfect but mostly meets deadlines and gets things done. Good balance between planning and execution, and handles flexibly. Manages time realistically and sustainably.",
      ja: "重要なことに集中し、効率的に時間を使います。完璧ではありませんが、ほとんどの締切を守り、必要なことを成し遂げます。計画と実行のバランスが良く、柔軟に対処します。現実的で持続可能な時間管理をします。",
      'zh-CN': "专注于重要的事情，高效地利用时间。虽然不是完美的，但大多数情况下都能遵守截止日期并完成必要的事情。计划与执行的平衡良好，能够灵活应对。进行现实且可持续的时间管理。",
      'zh-TW': "專注於重要的事情，高效地利用時間。雖然不是完美的，但大多數情況下都能遵守截止日期並完成必要的事情。計劃與執行的平衡良好，能夠靈活應對。進行現實且可持續的時間管理。",
      vi: "Tập trung vào những điều quan trọng và sử dụng thời gian hiệu quả. Không hoàn hảo nhưng hầu hết đều tuân thủ thời hạn và hoàn thành những gì cần thiết. Cân bằng tốt giữa lập kế hoạch và thực hiện, và xử lý linh hoạt. Quản lý thời gian một cách thực tế và bền vững.",
      id: "Fokus pada hal-hal penting dan menggunakan waktu secara efisien. Tidak sempurna tetapi sebagian besar mematuhi tenggat waktu dan menyelesaikan hal-hal yang diperlukan. Keseimbangan yang baik antara perencanaan dan eksekusi, dan menangani dengan fleksibel. Mengelola waktu secara realistis dan berkelanjutan."
    },
    pros: [
      {
        ko: "효율성",
        en: "Efficiency",
        ja: "効率性",
        'zh-CN': "效率",
        'zh-TW': "效率",
        vi: "Hiệu quả",
        id: "Efisiensi"
      },
      {
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        'zh-CN': "灵活性",
        'zh-TW': "靈活性",
        vi: "Linh hoạt",
        id: "Fleksibilitas"
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
        ko: "지속 가능성",
        en: "Sustainability",
        ja: "持続可能性",
        'zh-CN': "可持续性",
        'zh-TW': "可持續性",
        vi: "Tính bền vững",
        id: "Keberlanjutan"
      }
    ],
    cons: [
      {
        ko: "가끔 우선순위 혼란",
        en: "Sometimes confused priorities",
        ja: "時々優先順位の混乱",
        'zh-CN': "有时优先级混乱",
        'zh-TW': "有時優先級混亂",
        vi: "Thỉnh thoảng ưu tiên bị lộn xộn",
        id: "Kadang prioritas bingung"
      },
      {
        ko: "작은 낭비",
        en: "Small waste",
        ja: "小さな無駄",
        'zh-CN': "小浪费",
        'zh-TW': "小浪費",
        vi: "Lãng phí nhỏ",
        id: "Pemborosan kecil"
      }
    ],
    advice: {
      ko: "이미 훌륭합니다! 작은 낭비만 줄이면 완벽!",
      en: "Already excellent! Just reduce small waste and it's perfect!",
      ja: "すでに素晴らしい！小さな無駄を減らせば完璧！",
      'zh-CN': "已经很棒了！只要减少小浪费就完美了！",
      'zh-TW': "已經很棒了！只要減少小浪費就完美了！",
      vi: "Đã rất tuyệt vời! Chỉ cần giảm lãng phí nhỏ là hoàn hảo!",
      id: "Sudah bagus! Cukup kurangi pemborosan kecil dan sempurna!"
    },
    compatibility: {
      best: ["Type1", "Type3"],
      good: ["Type2"],
      careful: ["Type4", "Type5"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type3",
    emoji: "⭐",
    title: {
      ko: "평범한 일반형",
      en: "Average Normal Type",
      ja: "平凡な一般型",
      'zh-CN': "平凡普通型",
      'zh-TW': "平凡普通型",
      vi: "Bình thường trung bình",
      id: "Normal Rata-rata"
    },
    description: {
      ko: "보통의 시간 관리! 평균적인 효율성",
      en: "Normal time management! Average efficiency",
      ja: "普通の時間管理！平均的な効率性",
      'zh-CN': "普通的时间管理！平均效率",
      'zh-TW': "普通的時間管理！平均效率",
      vi: "Quản lý thời gian bình thường! Hiệu quả trung bình",
      id: "Manajemen waktu normal! Efisiensi rata-rata"
    },
    longDescription: {
      ko: "대부분의 사람들과 비슷한 수준입니다. 중요한 일은 대체로 하지만 시간 낭비도 있습니다. 가끔 마감에 쫓기고 계획대로 안 될 때도 있습니다. 개선 여지가 충분하며 조금만 노력하면 크게 발전할 수 있습니다.",
      en: "Similar level to most people. Generally does important things but also wastes time. Sometimes gets chased by deadlines and things don't go according to plan. There's plenty of room for improvement and can make great progress with just a little effort.",
      ja: "ほとんどの人と同じレベルです。重要なことは大体やりますが、時間の無駄もあります。時々締切に追われ、計画通りにいかないこともあります。改善の余地が十分にあり、少し努力すれば大きく進歩できます。",
      'zh-CN': "与大多数人的水平相似。一般会做重要的事情，但也会浪费时间。有时会被截止日期追赶，事情不会按计划进行。有足够的改进空间，只要稍作努力就能取得很大进步。",
      'zh-TW': "與大多數人的水平相似。一般會做重要的事情，但也會浪費時間。有時會被截止日期追趕，事情不會按計劃進行。有足夠的改進空間，只要稍作努力就能取得很大進步。",
      vi: "Mức độ tương tự như hầu hết mọi người. Thường làm những việc quan trọng nhưng cũng lãng phí thời gian. Đôi khi bị đuổi theo bởi thời hạn và mọi thứ không diễn ra theo kế hoạch. Có nhiều cơ hội cải thiện và có thể tiến bộ lớn chỉ với một chút nỗ lực.",
      id: "Tingkat yang mirip dengan kebanyakan orang. Umumnya melakukan hal-hal penting tetapi juga membuang waktu. Kadang-kadang dikejar tenggat waktu dan hal-hal tidak berjalan sesuai rencana. Ada banyak ruang untuk perbaikan dan dapat membuat kemajuan besar dengan sedikit usaha."
    },
    pros: [
      {
        ko: "평범함",
        en: "Normalcy",
        ja: "平凡さ",
        'zh-CN': "平凡",
        'zh-TW': "平凡",
        vi: "Bình thường",
        id: "Normal"
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
        ko: "개선 가능성",
        en: "Improvement potential",
        ja: "改善可能性",
        'zh-CN': "改进可能性",
        'zh-TW': "改進可能性",
        vi: "Tiềm năng cải thiện",
        id: "Potensi perbaikan"
      }
    ],
    cons: [
      {
        ko: "시간 낭비",
        en: "Time waste",
        ja: "時間の無駄",
        'zh-CN': "时间浪费",
        'zh-TW': "時間浪費",
        vi: "Lãng phí thời gian",
        id: "Pemborosan waktu"
      },
      {
        ko: "가끔 지각",
        en: "Sometimes late",
        ja: "時々遅刻",
        'zh-CN': "有时迟到",
        'zh-TW': "有時遲到",
        vi: "Thỉnh thoảng trễ",
        id: "Kadang terlambat"
      },
      {
        ko: "미루기",
        en: "Procrastination",
        ja: "先延ばし",
        'zh-CN': "拖延",
        'zh-TW': "拖延",
        vi: "Trì hoãn",
        id: "Penundaan"
      }
    ],
    advice: {
      ko: "작은 습관부터 바꿔보세요. 하루 30분만 아껴도 일주일에 3.5시간!",
      en: "Start changing small habits. Just saving 30 minutes a day equals 3.5 hours a week!",
      ja: "小さな習慣から変えてみてください。一日30分節約するだけで週に3.5時間！",
      'zh-CN': "从小习惯开始改变。每天节省30分钟就等于每周3.5小时！",
      'zh-TW': "從小習慣開始改變。每天節省30分鐘就等於每週3.5小時！",
      vi: "Hãy bắt đầu thay đổi những thói quen nhỏ. Chỉ tiết kiệm 30 phút mỗi ngày cũng bằng 3.5 giờ mỗi tuần!",
      id: "Mulai ubah kebiasaan kecil. Hanya menghemat 30 menit sehari sama dengan 3.5 jam seminggu!"
    },
    compatibility: {
      best: [],
      good: ["Type2", "Type3", "Type4"],
      careful: ["Type1"],
      difficult: ["Type5", "Type6"]
    }
  },
  {
    type: "Type4",
    emoji: "🎈",
    title: {
      ko: "즉흥적 자유형",
      en: "Spontaneous Free Type",
      ja: "即興的自由型",
      'zh-CN': "即兴自由型",
      'zh-TW': "即興自由型",
      vi: "Tự do ngẫu hứng",
      id: "Bebas Spontan"
    },
    description: {
      ko: "계획은 무슨! 그때그때 살아가는 자유로운 영혼",
      en: "What plans! Free spirit living moment by moment",
      ja: "計画なんて何！その時々を生きる自由な魂",
      'zh-CN': "什么计划！随遇而安的自由灵魂",
      'zh-TW': "什麼計劃！隨遇而安的自由靈魂",
      vi: "Kế hoạch là gì! Linh hồn tự do sống từng khoảnh khắc",
      id: "Apa rencana! Jiwa bebas yang hidup sesaat demi sesaat"
    },
    longDescription: {
      ko: "계획 없이 즉흥적으로 삽니다. 시간 관리보다는 현재의 기분과 상황을 중시합니다. 마감을 종종 놓치고 시간 약속이 불확실합니다. 자유롭지만 비효율적이며 중요한 일을 놓칠 수 있습니다.",
      en: "Lives spontaneously without plans. Values current mood and situation more than time management. Often misses deadlines and time commitments are uncertain. Free but inefficient and may miss important things.",
      ja: "計画なしに即興的に生きています。時間管理よりも現在の気分と状況を重視します。締切をしばしば逃し、時間の約束が不確実です。自由ですが非効率的で、重要なことを逃す可能性があります。",
      'zh-CN': "没有计划地即兴生活。比时间管理更重视当前的心情和情况。经常错过截止日期，时间承诺不确定。自由但效率低下，可能会错过重要的事情。",
      'zh-TW': "沒有計劃地即興生活。比時間管理更重視當前的心情和情況。經常錯過截止日期，時間承諾不確定。自由但效率低下，可能會錯過重要的事情。",
      vi: "Sống ngẫu hứng không có kế hoạch. Coi trọng tâm trạng và tình huống hiện tại hơn quản lý thời gian. Thường xuyên bỏ lỡ thời hạn và cam kết thời gian không chắc chắn. Tự do nhưng không hiệu quả và có thể bỏ lỡ những điều quan trọng.",
      id: "Hidup spontan tanpa rencana. Menghargai suasana hati dan situasi saat ini lebih dari manajemen waktu. Sering melewatkan tenggat waktu dan komitmen waktu tidak pasti. Bebas tetapi tidak efisien dan mungkin melewatkan hal-hal penting."
    },
    pros: [
      {
        ko: "자유로움",
        en: "Freedom",
        ja: "自由さ",
        'zh-CN': "自由",
        'zh-TW': "自由",
        vi: "Tự do",
        id: "Kebebasan"
      },
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
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        'zh-CN': "灵活性",
        'zh-TW': "靈活性",
        vi: "Linh hoạt",
        id: "Fleksibilitas"
      },
      {
        ko: "스트레스 적음",
        en: "Low stress",
        ja: "ストレス少なさ",
        'zh-CN': "压力小",
        'zh-TW': "壓力小",
        vi: "Ít căng thẳng",
        id: "Stres rendah"
      }
    ],
    cons: [
      {
        ko: "낮은 생산성",
        en: "Low productivity",
        ja: "低い生産性",
        'zh-CN': "低生产力",
        'zh-TW': "低生產力",
        vi: "Năng suất thấp",
        id: "Produktivitas rendah"
      },
      {
        ko: "신뢰도 하락",
        en: "Decreased reliability",
        ja: "信頼性の低下",
        'zh-CN': "可靠性下降",
        'zh-TW': "可靠性下降",
        vi: "Giảm độ tin cậy",
        id: "Keandalan menurun"
      },
      {
        ko: "기회 상실",
        en: "Missed opportunities",
        ja: "機会の損失",
        'zh-CN': "错失机会",
        'zh-TW': "錯失機會",
        vi: "Mất cơ hội",
        id: "Kehilangan peluang"
      }
    ],
    advice: {
      ko: "최소한의 루틴만이라도 만들어보세요!",
      en: "Try creating at least minimal routines!",
      ja: "最低限のルーティンでも作ってみてください！",
      'zh-CN': "试着创建至少最小的例行程序！",
      'zh-TW': "試著創建至少最小的例行程序！",
      vi: "Hãy thử tạo ít nhất những thói quen tối thiểu!",
      id: "Coba buat setidaknya rutinitas minimal!"
    },
    compatibility: {
      best: ["Type4"],
      good: ["Type3", "Type5"],
      careful: ["Type2"],
      difficult: ["Type1", "Type6"]
    }
  },
  {
    type: "Type5",
    emoji: "⏱️😰",
    title: {
      ko: "만성 지각형",
      en: "Chronic Late Type",
      ja: "慢性遅刻型",
      'zh-CN': "慢性迟到型",
      'zh-TW': "慢性遲到型",
      vi: "Trễ kinh niên",
      id: "Terlambat Kronis"
    },
    description: {
      ko: "항상 늦는 사람! 시간에 쫓기며 사는 급한 불 끄기형",
      en: "Always late person! Fire-fighting type living chased by time",
      ja: "いつも遅れる人！時間に追われて生きる火消し型",
      'zh-CN': "总是迟到的人！被时间追赶的救火型",
      'zh-TW': "總是遲到的人！被時間追趕的救火型",
      vi: "Người luôn trễ! Kiểu chữa cháy sống bị thời gian đuổi theo",
      id: "Orang yang selalu terlambat! Tipe pemadam kebakaran yang hidup dikejar waktu"
    },
    longDescription: {
      ko: "항상 시간이 부족하고 쫓깁니다. 자주 지각하고 마감을 놓칩니다. 벼락치기와 급한 불 끄기가 일상입니다. 시간 감각이 부족하고 예상보다 일이 오래 걸립니다. 스트레스가 높고 신뢰도가 떨어질 수 있습니다.",
      en: "Always short of time and chased. Frequently late and misses deadlines. Cramming and fire-fighting are daily routines. Lacks time sense and things take longer than expected. High stress and may lose trust.",
      ja: "いつも時間が不足し、追われています。頻繁に遅刻し、締切を逃します。詰め込みと火消しが日常です。時間感覚が不足し、予想より物事に時間がかかります。ストレスが高く、信頼を失う可能性があります。",
      'zh-CN': "总是时间不足，被追赶。经常迟到，错过截止日期。临时抱佛脚和救火是日常。缺乏时间感，事情比预期花费更长时间。压力高，可能失去信任。",
      'zh-TW': "總是時間不足，被追趕。經常遲到，錯過截止日期。臨時抱佛腳和救火是日常。缺乏時間感，事情比預期花費更長時間。壓力高，可能失去信任。",
      vi: "Luôn thiếu thời gian và bị đuổi theo. Thường xuyên trễ và bỏ lỡ thời hạn. Học cấp tốc và chữa cháy là thói quen hàng ngày. Thiếu cảm giác thời gian và mọi thứ mất nhiều thời gian hơn dự kiến. Căng thẳng cao và có thể mất lòng tin.",
      id: "Selalu kekurangan waktu dan dikejar. Sering terlambat dan melewatkan tenggat waktu. Belajar dadakan dan pemadam kebakaran adalah rutinitas sehari-hari. Kurang memiliki rasa waktu dan hal-hal membutuhkan waktu lebih lama dari yang diharapkan. Stres tinggi dan mungkin kehilangan kepercayaan."
    },
    pros: [
      {
        ko: "압박 속 순발력",
        en: "Quick reflexes under pressure",
        ja: "プレッシャー下での俊敏性",
        'zh-CN': "压力下的快速反应",
        'zh-TW': "壓力下的快速反應",
        vi: "Phản xạ nhanh dưới áp lực",
        id: "Refleks cepat di bawah tekanan"
      },
      {
        ko: "위기 대응",
        en: "Crisis response",
        ja: "危機対応",
        'zh-CN': "危机应对",
        'zh-TW': "危機應對",
        vi: "Ứng phó khủng hoảng",
        id: "Respons krisis"
      }
    ],
    cons: [
      {
        ko: "높은 스트레스",
        en: "High stress",
        ja: "高いストレス",
        'zh-CN': "高压力",
        'zh-TW': "高壓力",
        vi: "Căng thẳng cao",
        id: "Stres tinggi"
      },
      {
        ko: "낮은 신뢰",
        en: "Low trust",
        ja: "低い信頼",
        'zh-CN': "低信任",
        'zh-TW': "低信任",
        vi: "Tin cậy thấp",
        id: "Kepercayaan rendah"
      },
      {
        ko: "품질 저하",
        en: "Quality degradation",
        ja: "品質低下",
        'zh-CN': "质量下降",
        'zh-TW': "質量下降",
        vi: "Chất lượng giảm",
        id: "Penurunan kualitas"
      }
    ],
    advice: {
      ko: "모든 일에 30% 시간을 더 잡으세요. 늦는 습관을 고칠 수 있어요!",
      en: "Add 30% more time to everything. You can break the late habit!",
      ja: "すべてのことに30％時間を追加してください。遅刻の習慣を直すことができます！",
      'zh-CN': "为所有事情增加30%的时间。你可以改掉迟到的习惯！",
      'zh-TW': "為所有事情增加30%的時間。你可以改掉遲到的習慣！",
      vi: "Thêm 30% thời gian cho mọi việc. Bạn có thể sửa thói quen trễ!",
      id: "Tambahkan 30% waktu untuk semua hal. Anda bisa mengatasi kebiasaan terlambat!"
    },
    compatibility: {
      best: ["Type5"],
      good: ["Type3", "Type4"],
      careful: ["Type1", "Type2"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type6",
    emoji: "📱⏳",
    title: {
      ko: "시간 낭비형",
      en: "Time Waste Type",
      ja: "時間浪費型",
      'zh-CN': "时间浪费型",
      'zh-TW': "時間浪費型",
      vi: "Lãng phí thời gian",
      id: "Pemboros Waktu"
    },
    description: {
      ko: "시간이 새는 구멍! 효율성 제로의 시간 낭비자",
      en: "Time leak hole! Zero efficiency time waster",
      ja: "時間が漏れる穴！効率性ゼロの時間浪費者",
      'zh-CN': "时间泄漏洞！零效率的时间浪费者",
      'zh-TW': "時間洩漏洞！零效率的時間浪費者",
      vi: "Lỗ rò thời gian! Kẻ lãng phí thời gian hiệu quả bằng không",
      id: "Lubang kebocoran waktu! Pemboros waktu dengan efisiensi nol"
    },
    longDescription: {
      ko: "대부분의 시간을 의미 없이 보냅니다. SNS, 유튜브, 게임 등에 시간을 쏟으며 정작 중요한 일은 미룹니다. 하루가 어떻게 갔는지 모르고 성취감이 없습니다. 심각한 시간 관리 문제가 있으며 즉시 개선이 필요합니다.",
      en: "Spends most of the time meaninglessly. Pours time into SNS, YouTube, games, etc., while postponing important things. Doesn't know how the day passed and has no sense of achievement. Has serious time management problems and needs immediate improvement.",
      ja: "ほとんどの時間を意味なく過ごします。SNS、YouTube、ゲームなどに時間を注ぎ、肝心なことを先延ばしにします。一日がどのように過ぎたかわからず、達成感がありません。深刻な時間管理の問題があり、即座に改善が必要です。",
      'zh-CN': "大部分时间都毫无意义地度过。把时间花在社交媒体、YouTube、游戏等上，而推迟重要的事情。不知道一天是怎么过去的，没有成就感。有严重的时间管理问题，需要立即改进。",
      'zh-TW': "大部分時間都毫無意義地度過。把時間花在社交媒體、YouTube、遊戲等上，而推遲重要的事情。不知道一天是怎麼過去的，沒有成就感。有嚴重的時間管理問題，需要立即改進。",
      vi: "Dành hầu hết thời gian một cách vô nghĩa. Đổ thời gian vào SNS, YouTube, game, v.v., trong khi trì hoãn những việc quan trọng. Không biết ngày đã trôi qua như thế nào và không có cảm giác thành tựu. Có vấn đề nghiêm trọng về quản lý thời gian và cần cải thiện ngay lập tức.",
      id: "Menghabiskan sebagian besar waktu dengan sia-sia. Menuangkan waktu ke SNS, YouTube, game, dll., sambil menunda hal-hal penting. Tidak tahu bagaimana hari berlalu dan tidak memiliki rasa pencapaian. Memiliki masalah serius dalam manajemen waktu dan memerlukan perbaikan segera."
    },
    pros: [
      {
        ko: "휴식은 충분함",
        en: "Sufficient rest",
        ja: "休息は十分",
        'zh-CN': "休息充足",
        'zh-TW': "休息充足",
        vi: "Nghỉ ngơi đủ",
        id: "Istirahat cukup"
      }
    ],
    cons: [
      {
        ko: "생산성 제로",
        en: "Zero productivity",
        ja: "生産性ゼロ",
        'zh-CN': "生产力为零",
        'zh-TW': "生產力為零",
        vi: "Năng suất bằng không",
        id: "Produktivitas nol"
      },
      {
        ko: "목표 미달성",
        en: "Unmet goals",
        ja: "目標未達成",
        'zh-CN': "目标未达成",
        'zh-TW': "目標未達成",
        vi: "Không đạt mục tiêu",
        id: "Tujuan tidak tercapai"
      },
      {
        ko: "후회",
        en: "Regret",
        ja: "後悔",
        'zh-CN': "后悔",
        'zh-TW': "後悔",
        vi: "Hối tiếc",
        id: "Penyesalan"
      },
      {
        ko: "낮은 자존감",
        en: "Low self-esteem",
        ja: "低い自尊心",
        'zh-CN': "低自尊",
        'zh-TW': "低自尊",
        vi: "Tự trọng thấp",
        id: "Harga diri rendah"
      }
    ],
    advice: {
      ko: "지금 시작하세요! 하루 1시간만 의미 있게 써도 인생이 바뀝니다!",
      en: "Start now! Just using 1 hour meaningfully a day can change your life!",
      ja: "今始めてください！一日1時間だけ意味のあることに使っても人生が変わります！",
      'zh-CN': "现在开始！每天只用1小时做有意义的事就能改变你的人生！",
      'zh-TW': "現在開始！每天只用1小時做有意義的事就能改變你的人生！",
      vi: "Hãy bắt đầu ngay bây giờ! Chỉ cần sử dụng 1 giờ có ý nghĩa mỗi ngày cũng có thể thay đổi cuộc đời!",
      id: "Mulai sekarang! Hanya menggunakan 1 jam bermakna sehari bisa mengubah hidup Anda!"
    },
    compatibility: {
      best: ["Type6"],
      good: [],
      careful: ["Type4", "Type5"],
      difficult: ["Type1", "Type2", "Type3"]
    }
  }
];

export function calculateTimeEfficiencyResult(answers: any[]): string {
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
