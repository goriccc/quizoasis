export interface ConcentrationQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface ConcentrationResult {
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

export const concentrationQuestions: ConcentrationQuestion[] = [
  {
    id: 1,
    question: {
      ko: "중요한 업무나 공부를 시작할 때, 얼마나 집중이 지속되나요?",
      en: "When starting important work or study, how long does your concentration last?",
      ja: "重要な仕事や勉強を始める時、どのくらい集中が続きますか？",
      'zh-CN': "开始重要工作或学习时，你的专注力能持续多久？",
      'zh-TW': "開始重要工作或學習時，你的專注力能持續多久？",
      id: "Saat memulai pekerjaan atau belajar yang penting, berapa lama konsentrasi Anda bertahan?",
      vi: "Khi bắt đầu công việc hoặc học tập quan trọng, sự tập trung của bạn kéo dài bao lâu?"
    },
    options: [
      {
        text: {
          ko: "2시간 이상 쉬지 않고 집중",
          en: "Focus for more than 2 hours without a break",
          ja: "2時間以上休まずに集中",
          'zh-CN': "专注超过2小时不休息",
          'zh-TW': "專注超過2小時不休息",
          id: "Fokus lebih dari 2 jam tanpa istirahat",
          vi: "Tập trung hơn 2 giờ không nghỉ"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "1시간 정도 집중 후 짧은 휴식",
          en: "Focus for about 1 hour then take a short break",
          ja: "1時間程度集中してから短い休憩",
          'zh-CN': "专注约1小时后短暂休息",
          'zh-TW': "專注約1小時後短暫休息",
          id: "Fokus sekitar 1 jam lalu istirahat sebentar",
          vi: "Tập trung khoảng 1 giờ rồi nghỉ ngắn"
        },
        scores: { Type3: 3, Type2: 2 }
      },
      {
        text: {
          ko: "30분마다 휴식이나 다른 일",
          en: "Take breaks or do other things every 30 minutes",
          ja: "30分ごとに休憩や他のこと",
          'zh-CN': "每30分钟休息或做其他事",
          'zh-TW': "每30分鐘休息或做其他事",
          id: "Istirahat atau melakukan hal lain setiap 30 menit",
          vi: "Nghỉ ngơi hoặc làm việc khác mỗi 30 phút"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "10-20분마다 딴짓하거나 확인",
          en: "Get distracted or check things every 10-20 minutes",
          ja: "10-20分ごとに他のことをしたり確認",
          'zh-CN': "每10-20分钟分心或查看其他事",
          'zh-TW': "每10-20分鐘分心或查看其他事",
          id: "Terganggu atau mengecek hal lain setiap 10-20 menit",
          vi: "Bị phân tâm hoặc kiểm tra việc khác mỗi 10-20 phút"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "스마트폰 알림이 울렸을 때?",
      en: "When your smartphone notification goes off?",
      ja: "スマートフォンの通知が鳴った時は？",
      'zh-CN': "当智能手机通知响起时？",
      'zh-TW': "當智慧手機通知響起時？",
      id: "Ketika notifikasi smartphone berbunyi?",
      vi: "Khi thông báo điện thoại thông minh kêu?"
    },
    options: [
      {
        text: {
          ko: "완전히 무시하고 계속 집중",
          en: "Completely ignore and continue focusing",
          ja: "完全に無視して集中を続ける",
          'zh-CN': "完全忽略并继续专注",
          'zh-TW': "完全忽略並繼續專注",
          id: "Abaikan sepenuhnya dan terus fokus",
          vi: "Hoàn toàn bỏ qua và tiếp tục tập trung"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "확인은 하지만 답장은 나중에",
          en: "Check but reply later",
          ja: "確認はするが返信は後で",
          'zh-CN': "查看但稍后回复",
          'zh-TW': "查看但稍後回覆",
          id: "Cek tapi balas nanti",
          vi: "Kiểm tra nhưng trả lời sau"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "바로 확인하고 간단히 답장",
          en: "Check immediately and reply briefly",
          ja: "すぐに確認して簡単に返信",
          'zh-CN': "立即查看并简短回复",
          'zh-TW': "立即查看並簡短回覆",
          id: "Langsung cek dan balas singkat",
          vi: "Kiểm tra ngay và trả lời ngắn gọn"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "확인하고 SNS까지 구경",
          en: "Check and browse SNS too",
          ja: "確認してSNSまで見る",
          'zh-CN': "查看并浏览社交媒体",
          'zh-TW': "查看並瀏覽社交媒體",
          id: "Cek dan browsing SNS juga",
          vi: "Kiểm tra và lướt mạng xã hội"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "조용한 도서관 vs 카페에서 공부한다면?",
      en: "If studying in a quiet library vs cafe?",
      ja: "静かな図書館 vs カフェで勉強するなら？",
      'zh-CN': "在安静的图书馆 vs 咖啡厅学习？",
      'zh-TW': "在安靜的圖書館 vs 咖啡廳學習？",
      id: "Jika belajar di perpustakaan sepi vs kafe?",
      vi: "Nếu học ở thư viện yên tĩnh vs quán cà phê?"
    },
    options: [
      {
        text: {
          ko: "완전히 조용한 곳이 최고",
          en: "Completely quiet place is best",
          ja: "完全に静かな場所が最高",
          'zh-CN': "完全安静的地方最好",
          'zh-TW': "完全安靜的地方最好",
          id: "Tempat yang benar-benar sepi adalah yang terbaik",
          vi: "Nơi hoàn toàn yên tĩnh là tốt nhất"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "약간의 백색소음은 괜찮음",
          en: "A little white noise is okay",
          ja: "少しのホワイトノイズは大丈夫",
          'zh-CN': "一点白噪音没关系",
          'zh-TW': "一點白噪音沒關係",
          id: "Sedikit white noise tidak apa-apa",
          vi: "Một chút tiếng ồn trắng không sao"
        },
        scores: { Type3: 3, Type2: 2 }
      },
      {
        text: {
          ko: "장소는 별로 상관없음",
          en: "Location doesn't matter much",
          ja: "場所はあまり関係ない",
          'zh-CN': "地点不太重要",
          'zh-TW': "地點不太重要",
          id: "Lokasi tidak terlalu penting",
          vi: "Địa điểm không quan trọng lắm"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "어디서든 집중이 잘 안 됨",
          en: "Can't focus well anywhere",
          ja: "どこでも集中できない",
          'zh-CN': "在哪里都难以专注",
          'zh-TW': "在哪裡都難以專注",
          id: "Tidak bisa fokus dengan baik di mana pun",
          vi: "Ở đâu cũng khó tập trung"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "책을 읽을 때 당신은?",
      en: "When reading a book, you?",
      ja: "本を読む時、あなたは？",
      'zh-CN': "读书时，你？",
      'zh-TW': "讀書時，你？",
      id: "Saat membaca buku, Anda?",
      vi: "Khi đọc sách, bạn?"
    },
    options: [
      {
        text: {
          ko: "한 번 시작하면 끝까지 읽음",
          en: "Once started, read to the end",
          ja: "一度始めたら最後まで読む",
          'zh-CN': "一旦开始就读到结尾",
          'zh-TW': "一旦開始就讀到結尾",
          id: "Sekali mulai, baca sampai selesai",
          vi: "Một khi bắt đầu thì đọc đến cuối"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "챕터 단위로 구분해서 읽음",
          en: "Read in chapter units",
          ja: "章単位で分けて読む",
          'zh-CN': "按章节分开阅读",
          'zh-TW': "按章節分開閱讀",
          id: "Baca per bab",
          vi: "Đọc theo chương"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "자주 딴 생각하다가 다시 읽음",
          en: "Often think about other things then re-read",
          ja: "よく他のことを考えてから再び読む",
          'zh-CN': "经常想其他事然后重读",
          'zh-TW': "經常想其他事然後重讀",
          id: "Sering memikirkan hal lain lalu membaca ulang",
          vi: "Thường nghĩ về việc khác rồi đọc lại"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "몇 페이지 못 읽고 다른 짓",
          en: "Can't read a few pages and do other things",
          ja: "数ページ読めずに他のことをする",
          'zh-CN': "读不了几页就做其他事",
          'zh-TW': "讀不了幾頁就做其他事",
          id: "Tidak bisa baca beberapa halaman dan melakukan hal lain",
          vi: "Không đọc được vài trang rồi làm việc khác"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "업무 중 동료가 말을 걸면?",
      en: "When a colleague talks to you during work?",
      ja: "仕事中に同僚が話しかけてきたら？",
      'zh-CN': "工作时同事找你说话？",
      'zh-TW': "工作時同事找你說話？",
      id: "Ketika rekan kerja mengajak bicara saat bekerja?",
      vi: "Khi đồng nghiệp nói chuyện với bạn trong giờ làm việc?"
    },
    options: [
      {
        text: {
          ko: "집중이 깨져서 짜증남",
          en: "Get annoyed because focus is broken",
          ja: "集中が途切れてイライラする",
          'zh-CN': "因为专注被打断而烦躁",
          'zh-TW': "因為專注被打斷而煩躁",
          id: "Kesal karena fokus terganggu",
          vi: "Khó chịu vì sự tập trung bị phá vỡ"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "답변 후 다시 집중",
          en: "Answer then focus again",
          ja: "返事してから再び集中",
          'zh-CN': "回答后重新专注",
          'zh-TW': "回答後重新專注",
          id: "Jawab lalu fokus lagi",
          vi: "Trả lời rồi tập trung lại"
        },
        scores: { Type3: 3, Type2: 2 }
      },
      {
        text: {
          ko: "대화하다 보면 시간 가는 줄 모름",
          en: "Don't realize time passing while talking",
          ja: "話していると時間が経つのを忘れる",
          'zh-CN': "聊天时忘记时间流逝",
          'zh-TW': "聊天時忘記時間流逝",
          id: "Tidak sadar waktu berlalu saat mengobrol",
          vi: "Không nhận ra thời gian trôi qua khi nói chuyện"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "반가워서 한참 이야기함",
          en: "Happy to talk for a while",
          ja: "嬉しくてしばらく話す",
          'zh-CN': "高兴地聊很久",
          'zh-TW': "高興地聊很久",
          id: "Senang dan mengobrol cukup lama",
          vi: "Vui vẻ và nói chuyện khá lâu"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "멀티태스킹에 대한 당신의 생각은?",
      en: "What do you think about multitasking?",
      ja: "マルチタスクについてあなたの考えは？",
      'zh-CN': "你对多任务处理的看法？",
      'zh-TW': "你對多任務處理的看法？",
      id: "Apa pendapat Anda tentang multitasking?",
      vi: "Bạn nghĩ gì về đa nhiệm?"
    },
    options: [
      {
        text: {
          ko: "절대 안 함, 한 가지만 집중",
          en: "Never do it, focus on one thing only",
          ja: "絶対しない、一つのことだけに集中",
          'zh-CN': "绝对不做，只专注一件事",
          'zh-TW': "絕對不做，只專注一件事",
          id: "Tidak pernah, fokus pada satu hal saja",
          vi: "Không bao giờ, chỉ tập trung vào một việc"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "가끔 필요할 때만",
          en: "Only when necessary sometimes",
          ja: "時々必要な時だけ",
          'zh-CN': "只是偶尔需要时",
          'zh-TW': "只是偶爾需要時",
          id: "Kadang-kadang hanya saat diperlukan",
          vi: "Thỉnh thoảng chỉ khi cần thiết"
        },
        scores: { Type3: 3, Type2: 2 }
      },
      {
        text: {
          ko: "자주 여러 일 동시 진행",
          en: "Often do multiple things simultaneously",
          ja: "よく複数のことを同時に進める",
          'zh-CN': "经常同时进行多项工作",
          'zh-TW': "經常同時進行多項工作",
          id: "Sering melakukan beberapa hal bersamaan",
          vi: "Thường làm nhiều việc cùng lúc"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "항상 여러 창 띄워놓고 작업",
          en: "Always work with multiple windows open",
          ja: "いつも複数のウィンドウを開いて作業",
          'zh-CN': "总是开着多个窗口工作",
          'zh-TW': "總是開著多個視窗工作",
          id: "Selalu bekerja dengan banyak jendela terbuka",
          vi: "Luôn làm việc với nhiều cửa sổ mở"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "중요한 시험이나 발표를 앞두고?",
      en: "Before an important exam or presentation?",
      ja: "重要な試験や発表を前にして？",
      'zh-CN': "面对重要考试或演讲前？",
      'zh-TW': "面對重要考試或演講前？",
      id: "Sebelum ujian atau presentasi penting?",
      vi: "Trước kỳ thi hoặc thuyết trình quan trọng?"
    },
    options: [
      {
        text: {
          ko: "완벽하게 준비할 때까지 몰입",
          en: "Immerse until perfectly prepared",
          ja: "完璧に準備できるまで没頭",
          'zh-CN': "沉浸直到完美准备",
          'zh-TW': "沉浸直到完美準備",
          id: "Terbenam sampai persiapan sempurna",
          vi: "Đắm chìm cho đến khi chuẩn bị hoàn hảo"
        },
        scores: { Type1: 3, Type2: 8 }
      },
      {
        text: {
          ko: "계획적으로 집중해서 준비",
          en: "Prepare systematically and focused",
          ja: "計画的に集中して準備",
          'zh-CN': "有计划地专注准备",
          'zh-TW': "有計劃地專注準備",
          id: "Persiapan sistematis dan fokus",
          vi: "Chuẩn bị có hệ thống và tập trung"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "집중했다 딴짓했다 반복",
          en: "Alternate between focus and distraction",
          ja: "集中したり他のことをしたりを繰り返す",
          'zh-CN': "专注和分心交替",
          'zh-TW': "專注和分心交替",
          id: "Bergantian antara fokus dan terganggu",
          vi: "Luân phiên giữa tập trung và phân tâm"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "집중이 안 돼서 벼락치기",
          en: "Can't focus so cram at the last minute",
          ja: "集中できずに一夜漬け",
          'zh-CN': "无法专注所以临时抱佛脚",
          'zh-TW': "無法專注所以臨時抱佛腳",
          id: "Tidak bisa fokus jadi belajar dadakan",
          vi: "Không thể tập trung nên học nhồi nhét"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "영화나 드라마를 볼 때?",
      en: "When watching movies or dramas?",
      ja: "映画やドラマを見る時は？",
      'zh-CN': "看电影或电视剧时？",
      'zh-TW': "看電影或電視劇時？",
      id: "Saat menonton film atau drama?",
      vi: "Khi xem phim hoặc phim truyền hình?"
    },
    options: [
      {
        text: {
          ko: "시작부터 끝까지 화면에 집중",
          en: "Focus on screen from start to finish",
          ja: "始まりから終わりまで画面に集中",
          'zh-CN': "从头到尾专注屏幕",
          'zh-TW': "從頭到尾專注螢幕",
          id: "Fokus pada layar dari awal sampai akhir",
          vi: "Tập trung vào màn hình từ đầu đến cuối"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "집중해서 보되 가끔 폰 확인",
          en: "Watch focused but occasionally check phone",
          ja: "集中して見るが時々スマホを確認",
          'zh-CN': "专注观看但偶尔查看手机",
          'zh-TW': "專注觀看但偶爾查看手機",
          id: "Tonton fokus tapi sesekali cek HP",
          vi: "Xem tập trung nhưng thỉnh thoảng kiểm tra điện thoại"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "보다가 다른 것도 자주 함",
          en: "Often do other things while watching",
          ja: "見ながら他のこともよくする",
          'zh-CN': "观看时经常做其他事",
          'zh-TW': "觀看時經常做其他事",
          id: "Sering melakukan hal lain sambil menonton",
          vi: "Thường làm việc khác khi xem"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "끊임없이 폰 보거나 딴짓",
          en: "Constantly check phone or do other things",
          ja: "絶えずスマホを見たり他のことをする",
          'zh-CN': "不断查看手机或做其他事",
          'zh-TW': "不斷查看手機或做其他事",
          id: "Terus-menerus cek HP atau hal lain",
          vi: "Liên tục kiểm tra điện thoại hoặc làm việc khác"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "회의나 강의 중 당신은?",
      en: "During meetings or lectures, you?",
      ja: "会議や講義中、あなたは？",
      'zh-CN': "在会议或讲座中，你？",
      'zh-TW': "在會議或講座中，你？",
      id: "Selama rapat atau kuliah, Anda?",
      vi: "Trong cuộc họp hoặc bài giảng, bạn?"
    },
    options: [
      {
        text: {
          ko: "처음부터 끝까지 집중해서 들음",
          en: "Listen attentively from start to finish",
          ja: "始まりから終わりまで集中して聞く",
          'zh-CN': "从头到尾专注聆听",
          'zh-TW': "從頭到尾專注聆聽",
          id: "Dengarkan dengan fokus dari awal sampai akhir",
          vi: "Lắng nghe tập trung từ đầu đến cuối"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "중요한 부분은 집중",
          en: "Focus on important parts",
          ja: "重要な部分は集中",
          'zh-CN': "专注重要部分",
          'zh-TW': "專注重要部分",
          id: "Fokus pada bagian penting",
          vi: "Tập trung vào phần quan trọng"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "중간중간 딴 생각",
          en: "Occasionally think about other things",
          ja: "時々他のことを考える",
          'zh-CN': "偶尔想其他事",
          'zh-TW': "偶爾想其他事",
          id: "Sesekali memikirkan hal lain",
          vi: "Thỉnh thoảng nghĩ về việc khác"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "대부분 딴 생각하거나 졸음",
          en: "Mostly think about other things or doze off",
          ja: "ほとんど他のことを考えたり居眠り",
          'zh-CN': "大部分时间想其他事或打瞌睡",
          'zh-TW': "大部分時間想其他事或打瞌睡",
          id: "Kebanyakan memikirkan hal lain atau mengantuk",
          vi: "Hầu hết thời gian nghĩ về việc khác hoặc ngủ gật"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "마감 시간이 촉박할 때?",
      en: "When the deadline is tight?",
      ja: "締切が迫っている時は？",
      'zh-CN': "当截止时间紧迫时？",
      'zh-TW': "當截止時間緊迫時？",
      id: "Ketika deadline mendesak?",
      vi: "Khi thời hạn gấp rút?"
    },
    options: [
      {
        text: {
          ko: "오히려 더 집중력이 높아짐",
          en: "Concentration actually increases",
          ja: "むしろ集中力が高まる",
          'zh-CN': "专注力反而提高",
          'zh-TW': "專注力反而提高",
          id: "Konsentrasi justru meningkat",
          vi: "Sự tập trung thực sự tăng lên"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "긴장하며 집중해서 마무리",
          en: "Focus tensely to finish",
          ja: "緊張しながら集中して仕上げる",
          'zh-CN': "紧张地专注完成",
          'zh-TW': "緊張地專注完成",
          id: "Fokus dengan tegang untuk menyelesaikan",
          vi: "Tập trung căng thẳng để hoàn thành"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "집중하려 하지만 불안함",
          en: "Try to focus but feel anxious",
          ja: "集中しようとするが不安",
          'zh-CN': "试图专注但感到焦虑",
          'zh-TW': "試圖專注但感到焦慮",
          id: "Coba fokus tapi merasa cemas",
          vi: "Cố gắng tập trung nhưng cảm thấy lo lắng"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "패닉 상태로 제대로 못 함",
          en: "Can't do it properly in panic state",
          ja: "パニック状態でうまくできない",
          'zh-CN': "恐慌状态下无法正常进行",
          'zh-TW': "恐慌狀態下無法正常進行",
          id: "Tidak bisa melakukan dengan baik dalam keadaan panik",
          vi: "Không thể làm tốt trong trạng thái hoảng loạn"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "하루 중 가장 집중이 잘 되는 시간은?",
      en: "What time of day do you focus best?",
      ja: "一日の中で最も集中できる時間は？",
      'zh-CN': "一天中什么时候最专注？",
      'zh-TW': "一天中什麼時候最專注？",
      id: "Waktu apa dalam sehari Anda paling fokus?",
      vi: "Thời gian nào trong ngày bạn tập trung tốt nhất?"
    },
    options: [
      {
        text: {
          ko: "명확히 있고, 그 시간을 활용함",
          en: "Have a clear time and utilize it",
          ja: "明確にあり、その時間を活用する",
          'zh-CN': "有明确时间并充分利用",
          'zh-TW': "有明確時間並充分利用",
          id: "Ada waktu yang jelas dan memanfaatkannya",
          vi: "Có thời gian rõ ràng và tận dụng nó"
        },
        scores: { Type1: 3, Type2: 8 }
      },
      {
        text: {
          ko: "대체로 오전이나 오후 중 일정 시간",
          en: "Generally a certain time in morning or afternoon",
          ja: "大体午前か午後の一定時間",
          'zh-CN': "通常是上午或下午的某个时间",
          'zh-TW': "通常是上午或下午的某個時間",
          id: "Umumnya waktu tertentu di pagi atau sore",
          vi: "Thường là thời gian nhất định vào buổi sáng hoặc chiều"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "기분 따라 다름",
          en: "Depends on mood",
          ja: "気分次第",
          'zh-CN': "取决于心情",
          'zh-TW': "取決於心情",
          id: "Tergantung suasana hati",
          vi: "Tùy thuộc vào tâm trạng"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "언제든 집중 안 됨",
          en: "Can't focus anytime",
          ja: "いつでも集中できない",
          'zh-CN': "任何时候都无法专注",
          'zh-TW': "任何時候都無法專注",
          id: "Tidak bisa fokus kapan pun",
          vi: "Không thể tập trung bất cứ lúc nào"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "관심 없는 일을 해야 할 때?",
      en: "When you have to do something you're not interested in?",
      ja: "興味のないことをしなければならない時は？",
      'zh-CN': "当你必须做不感兴趣的事时？",
      'zh-TW': "當你必須做不感興趣的事時？",
      id: "Ketika harus melakukan hal yang tidak menarik?",
      vi: "Khi phải làm việc không hứng thú?"
    },
    options: [
      {
        text: {
          ko: "해야 하니까 집중해서 끝냄",
          en: "Focus and finish because I have to",
          ja: "しなければならないから集中して終わらせる",
          'zh-CN': "因为必须做所以专注完成",
          'zh-TW': "因為必須做所以專注完成",
          id: "Fokus dan selesaikan karena harus",
          vi: "Tập trung và hoàn thành vì phải làm"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "억지로라도 집중 시도",
          en: "Try to focus even if forced",
          ja: "無理やりでも集中しようとする",
          'zh-CN': "即使勉强也尝试专注",
          'zh-TW': "即使勉強也嘗試專注",
          id: "Coba fokus meski terpaksa",
          vi: "Cố gắng tập trung dù bị ép buộc"
        },
        scores: { Type3: 3, Type2: 2 }
      },
      {
        text: {
          ko: "집중하기 매우 어려움",
          en: "Very difficult to focus",
          ja: "集中するのが非常に困難",
          'zh-CN': "很难专注",
          'zh-TW': "很難專注",
          id: "Sangat sulit untuk fokus",
          vi: "Rất khó tập trung"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "거의 불가능, 계속 미룸",
          en: "Almost impossible, keep postponing",
          ja: "ほぼ不可能、ずっと先延ばし",
          'zh-CN': "几乎不可能，一直拖延",
          'zh-TW': "幾乎不可能，一直拖延",
          id: "Hampir tidak mungkin, terus menunda",
          vi: "Gần như không thể, liên tục trì hoãn"
        },
        scores: { Type6: 3 }
      }
    ]
  }
];

export const concentrationResults: ConcentrationResult[] = [
  {
    type: "Type1",
    emoji: "🎯",
    title: {
      ko: "레이저 집중형",
      en: "Laser Focus Type",
      ja: "レーザー集中型",
      'zh-CN': "激光专注型",
      'zh-TW': "激光專注型",
      id: "Tipe Fokus Laser",
      vi: "Kiểu Tập Trung Laser"
    },
    description: {
      ko: "초집중 모드! 한 번 꽂히면 세상이 사라지는 몰입의 달인",
      en: "Ultra-focus mode! Once engaged, the world disappears - master of immersion",
      ja: "超集中モード！一度集中すると世界が消える没入の達人",
      'zh-CN': "超专注模式！一旦投入，世界消失的沉浸大师",
      'zh-TW': "超專注模式！一旦投入，世界消失的沉浸大師",
      id: "Mode ultra-fokus! Sekali terlibat, dunia menghilang - master imersi",
      vi: "Chế độ siêu tập trung! Một khi đắm chìm, thế giới biến mất - bậc thầy nhập định"
    },
    longDescription: {
      ko: "한 가지에 집중하면 주변이 보이지 않습니다. 외부 자극을 완벽하게 차단하고 몰입 상태에 진입합니다. 2시간 이상 쉬지 않고 집중 가능하며 효율이 극대화됩니다. 연구원, 개발자, 작가에게 필요한 최고의 집중력을 보유하고 있습니다.",
      en: "When focusing on one thing, you can't see your surroundings. You perfectly block out external stimuli and enter a state of immersion. You can focus for more than 2 hours without a break, maximizing efficiency. You possess the ultimate concentration power needed by researchers, developers, and writers.",
      ja: "一つのことに集中すると周りが見えません。外部刺激を完璧に遮断し、没入状態に入ります。2時間以上休まずに集中でき、効率が最大化されます。研究者、開発者、作家に必要な最高の集中力を保有しています。",
      'zh-CN': "专注一件事时，你看不到周围。你完美地屏蔽外部刺激并进入沉浸状态。你可以专注超过2小时不休息，效率最大化。你拥有研究人员、开发者和作家所需的最佳专注力。",
      'zh-TW': "專注一件事時，你看不到周圍。你完美地屏蔽外部刺激並進入沉浸狀態。你可以專注超過2小時不休息，效率最大化。你擁有研究人員、開發者和作家所需的最佳專注力。",
      id: "Ketika fokus pada satu hal, Anda tidak bisa melihat sekeliling. Anda memblokir stimulus eksternal dengan sempurna dan memasuki keadaan imersi. Anda bisa fokus lebih dari 2 jam tanpa istirahat, memaksimalkan efisiensi. Anda memiliki kekuatan konsentrasi tertinggi yang dibutuhkan peneliti, pengembang, dan penulis.",
      vi: "Khi tập trung vào một việc, bạn không thể nhìn thấy xung quanh. Bạn hoàn toàn chặn các kích thích bên ngoài và bước vào trạng thái nhập định. Bạn có thể tập trung hơn 2 giờ không nghỉ, tối đa hóa hiệu quả. Bạn sở hữu sức mạnh tập trung tối cao mà các nhà nghiên cứu, nhà phát triển và nhà văn cần."
    },
    pros: [
      {
        ko: "극강의 집중력",
        en: "Ultimate concentration",
        ja: "極強の集中力",
        'zh-CN': "极强专注力",
        'zh-TW': "極強專注力",
        id: "Konsentrasi tertinggi",
        vi: "Sức tập trung tối cao"
      },
      {
        ko: "높은 효율",
        en: "High efficiency",
        ja: "高い効率",
        'zh-CN': "高效率",
        'zh-TW': "高效率",
        id: "Efisiensi tinggi",
        vi: "Hiệu quả cao"
      },
      {
        ko: "완벽한 몰입",
        en: "Perfect immersion",
        ja: "完璧な没入",
        'zh-CN': "完美沉浸",
        'zh-TW': "完美沉浸",
        id: "Imersi sempurna",
        vi: "Nhập định hoàn hảo"
      },
      {
        ko: "깊이 있는 작업",
        en: "Deep work",
        ja: "深い作業",
        'zh-CN': "深度工作",
        'zh-TW': "深度工作",
        id: "Kerja mendalam",
        vi: "Công việc sâu sắc"
      }
    ],
    cons: [
      {
        ko: "주변 무시",
        en: "Ignore surroundings",
        ja: "周りを無視",
        'zh-CN': "忽略周围",
        'zh-TW': "忽略周圍",
        id: "Abaikan sekeliling",
        vi: "Bỏ qua xung quanh"
      },
      {
        ko: "융통성 부족",
        en: "Lack of flexibility",
        ja: "柔軟性不足",
        'zh-CN': "缺乏灵活性",
        'zh-TW': "缺乏靈活性",
        id: "Kurang fleksibilitas",
        vi: "Thiếu linh hoạt"
      },
      {
        ko: "번아웃 위험",
        en: "Burnout risk",
        ja: "バーンアウトリスク",
        'zh-CN': "倦怠风险",
        'zh-TW': "倦怠風險",
        id: "Risiko kelelahan",
        vi: "Nguy cơ kiệt sức"
      }
    ],
    advice: {
      ko: "너무 몰입하다 건강 해칠 수 있어요. 타이머 맞춰 휴식하세요!",
      en: "Too much immersion can harm your health. Set a timer and take breaks!",
      ja: "没入しすぎると健康を害する可能性があります。タイマーを設定して休憩してください！",
      'zh-CN': "过度沉浸可能损害健康。设置定时器休息！",
      'zh-TW': "過度沉浸可能損害健康。設置定時器休息！",
      id: "Terlalu imersi bisa merugikan kesehatan. Setel timer dan istirahat!",
      vi: "Quá nhập định có thể gây hại sức khỏe. Đặt hẹn giờ và nghỉ ngơi!"
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type4"],
      difficult: ["Type5", "Type6"]
    }
  },
  {
    type: "Type2",
    emoji: "💎",
    title: {
      ko: "선택적 몰입형",
      en: "Selective Immersion Type",
      ja: "選択的没入型",
      'zh-CN': "选择性沉浸型",
      'zh-TW': "選擇性沉浸型",
      id: "Tipe Imersi Selektif",
      vi: "Kiểu Nhập Định Có Chọn Lọc"
    },
    description: {
      ko: "관심사에 몰입! 좋아하는 일에는 무한 집중력 발휘",
      en: "Immerse in interests! Show infinite concentration for things you like",
      ja: "興味のあることに没入！好きなことには無限の集中力を発揮",
      'zh-CN': "沉浸于兴趣！对喜欢的事展现无限专注力",
      'zh-TW': "沉浸於興趣！對喜歡的事展現無限專注力",
      id: "Imersi dalam minat! Tunjukkan konsentrasi tak terbatas untuk hal yang disukai",
      vi: "Đắm chìm vào sở thích! Thể hiện sự tập trung vô hạn cho những gì bạn thích"
    },
    longDescription: {
      ko: "흥미 있는 분야에는 놀라운 집중력을 보이지만 관심 없는 일은 힘듭니다. 자신이 선택한 일에는 몇 시간이고 몰입하지만 강제된 일은 집중이 어렵습니다. 내적 동기가 집중력의 핵심입니다.",
      en: "You show amazing concentration in areas of interest but struggle with things you're not interested in. You can immerse for hours in things you choose, but find it difficult to focus on forced tasks. Internal motivation is the key to your concentration.",
      ja: "興味のある分野では驚くべき集中力を示しますが、興味のないことは苦労します。自分が選んだことには何時間でも没入できますが、強制的なことは集中が困難です。内的動機が集中力の核心です。",
      'zh-CN': "在感兴趣的领域展现惊人的专注力，但对不感兴趣的事很困难。对自己选择的事可以沉浸数小时，但对被迫的事难以专注。内在动机是你专注力的核心。",
      'zh-TW': "在感興趣的領域展現驚人的專注力，但對不感興趣的事很困難。對自己選擇的事可以沉浸數小時，但對被迫的事難以專注。內在動機是你專注力的核心。",
      id: "Anda menunjukkan konsentrasi menakjubkan di bidang yang menarik tetapi kesulitan dengan hal yang tidak menarik. Anda bisa imersi berjam-jam dalam hal yang dipilih, tetapi sulit fokus pada tugas paksa. Motivasi internal adalah kunci konsentrasi Anda.",
      vi: "Bạn thể hiện sự tập trung đáng kinh ngạc trong lĩnh vực quan tâm nhưng gặp khó khăn với những việc không hứng thú. Bạn có thể nhập định hàng giờ với những gì bạn chọn, nhưng khó tập trung vào công việc bị ép buộc. Động lực nội tại là chìa khóa của sự tập trung."
    },
    pros: [
      {
        ko: "관심 분야 전문성",
        en: "Expertise in areas of interest",
        ja: "興味分野の専門性",
        'zh-CN': "兴趣领域专业性",
        'zh-TW': "興趣領域專業性",
        id: "Keahlian di bidang minat",
        vi: "Chuyên môn trong lĩnh vực quan tâm"
      },
      {
        ko: "창의적 몰입",
        en: "Creative immersion",
        ja: "創造的没入",
        'zh-CN': "创造性沉浸",
        'zh-TW': "創造性沉浸",
        id: "Imersi kreatif",
        vi: "Nhập định sáng tạo"
      },
      {
        ko: "열정",
        en: "Passion",
        ja: "情熱",
        'zh-CN': "热情",
        'zh-TW': "熱情",
        id: "Gairah",
        vi: "Đam mê"
      }
    ],
    cons: [
      {
        ko: "관심 없는 일 집중 어려움",
        en: "Difficulty focusing on uninteresting tasks",
        ja: "興味のないことに集中困難",
        'zh-CN': "对不感兴趣的事难以专注",
        'zh-TW': "對不感興趣的事難以專注",
        id: "Sulit fokus pada tugas tidak menarik",
        vi: "Khó tập trung vào công việc không hứng thú"
      },
      {
        ko: "편차 큼",
        en: "Large variation",
        ja: "ばらつきが大きい",
        'zh-CN': "差异很大",
        'zh-TW': "差異很大",
        id: "Variasi besar",
        vi: "Chênh lệch lớn"
      }
    ],
    advice: {
      ko: "싫어하는 일도 재미 요소를 찾아보세요. 게임화하는 것도 방법!",
      en: "Try to find fun elements in things you dislike. Gamification is also a method!",
      ja: "嫌いなことでも面白い要素を見つけてみてください。ゲーミフィケーションも方法です！",
      'zh-CN': "尝试在不喜欢的事中找到有趣元素。游戏化也是方法！",
      'zh-TW': "嘗試在不喜歡的事中找到有趣元素。遊戲化也是方法！",
      id: "Coba temukan elemen menyenangkan dalam hal yang tidak disukai. Gamifikasi juga metode!",
      vi: "Hãy thử tìm yếu tố thú vị trong những việc không thích. Game hóa cũng là phương pháp!"
    },
    compatibility: {
      best: ["Type1"],
      good: ["Type3"],
      careful: ["Type4"],
      difficult: ["Type5", "Type6"]
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "균형잡힌 실용형",
      en: "Balanced Practical Type",
      ja: "バランスの取れた実用型",
      'zh-CN': "平衡实用型",
      'zh-TW': "平衡實用型",
      id: "Tipe Praktis Seimbang",
      vi: "Kiểu Thực Tế Cân Bằng"
    },
    description: {
      ko: "50분 집중 10분 휴식! 효율적으로 관리하는 현명한 타입",
      en: "50 minutes focus, 10 minutes break! Wise type that manages efficiently",
      ja: "50分集中10分休憩！効率的に管理する賢いタイプ",
      'zh-CN': "50分钟专注10分钟休息！高效管理的明智类型",
      'zh-TW': "50分鐘專注10分鐘休息！高效管理的明智類型",
      id: "50 menit fokus, 10 menit istirahat! Tipe bijak yang mengelola efisien",
      vi: "50 phút tập trung, 10 phút nghỉ! Kiểu khôn ngoan quản lý hiệu quả"
    },
    longDescription: {
      ko: "집중과 휴식의 균형을 잘 맞춥니다. 1시간 정도 집중 후 적절히 쉬며 지속 가능한 생산성을 유지합니다. 번아웃 없이 꾸준히 성과를 내는 실용적인 타입입니다. 포모도로 기법에 최적화된 스타일입니다.",
      en: "You balance focus and rest well. You focus for about an hour then take appropriate breaks, maintaining sustainable productivity. You're a practical type that consistently produces results without burnout. This style is optimized for the Pomodoro technique.",
      ja: "集中と休息のバランスを良く取ります。1時間程度集中してから適切に休み、持続可能な生産性を維持します。バーンアウトなしで着実に成果を出す実用的なタイプです。ポモドーロテクニックに最適化されたスタイルです。",
      'zh-CN': "你很好地平衡专注和休息。专注约一小时后适当休息，保持可持续的生产力。你是一个实用类型，在没有倦怠的情况下持续产生成果。这种风格最适合番茄工作法。",
      'zh-TW': "你很好地平衡專注和休息。專注約一小時後適當休息，保持可持續的生產力。你是一個實用類型，在沒有倦怠的情況下持續產生成果。這種風格最適合番茄工作法。",
      id: "Anda menyeimbangkan fokus dan istirahat dengan baik. Anda fokus sekitar satu jam lalu istirahat dengan tepat, mempertahankan produktivitas berkelanjutan. Anda tipe praktis yang konsisten menghasilkan hasil tanpa kelelahan. Gaya ini dioptimalkan untuk teknik Pomodoro.",
      vi: "Bạn cân bằng tốt giữa tập trung và nghỉ ngơi. Bạn tập trung khoảng một giờ rồi nghỉ ngơi phù hợp, duy trì năng suất bền vững. Bạn là kiểu thực tế liên tục tạo ra kết quả mà không bị kiệt sức. Phong cách này được tối ưu hóa cho kỹ thuật Pomodoro."
    },
    pros: [
      {
        ko: "지속 가능성",
        en: "Sustainability",
        ja: "持続可能性",
        'zh-CN': "可持续性",
        'zh-TW': "可持續性",
        id: "Keberlanjutan",
        vi: "Tính bền vững"
      },
      {
        ko: "번아웃 예방",
        en: "Burnout prevention",
        ja: "バーンアウト予防",
        'zh-CN': "预防倦怠",
        'zh-TW': "預防倦怠",
        id: "Pencegahan kelelahan",
        vi: "Ngăn ngừa kiệt sức"
      },
      {
        ko: "안정적 성과",
        en: "Stable results",
        ja: "安定した成果",
        'zh-CN': "稳定成果",
        'zh-TW': "穩定成果",
        id: "Hasil stabil",
        vi: "Kết quả ổn định"
      },
      {
        ko: "건강한 집중",
        en: "Healthy concentration",
        ja: "健康的な集中",
        'zh-CN': "健康专注",
        'zh-TW': "健康專注",
        id: "Konsentrasi sehat",
        vi: "Tập trung lành mạnh"
      }
    ],
    cons: [
      {
        ko: "극한의 몰입 어려움",
        en: "Difficulty with extreme immersion",
        ja: "極限の没入困難",
        'zh-CN': "难以极度沉浸",
        'zh-TW': "難以極度沉浸",
        id: "Kesulitan imersi ekstrem",
        vi: "Khó nhập định cực độ"
      },
      {
        ko: "때로 평범함",
        en: "Sometimes ordinary",
        ja: "時々平凡",
        'zh-CN': "有时平凡",
        'zh-TW': "有時平凡",
        id: "Kadang biasa-biasa saja",
        vi: "Thỉnh thoảng bình thường"
      }
    ],
    advice: {
      ko: "이미 이상적입니다! 이 패턴을 계속 유지하세요.",
      en: "You're already ideal! Keep maintaining this pattern.",
      ja: "すでに理想的です！このパターンを維持し続けてください。",
      'zh-CN': "你已经很理想了！继续维持这个模式。",
      'zh-TW': "你已經很理想了！繼續維持這個模式。",
      id: "Anda sudah ideal! Terus pertahankan pola ini.",
      vi: "Bạn đã lý tưởng rồi! Hãy tiếp tục duy trì mô hình này."
    },
    compatibility: {
      best: ["Type1", "Type2"],
      good: ["Type3", "Type4", "Type5"],
      careful: [],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type4",
    emoji: "🦋",
    title: {
      ko: "산만한 자유형",
      en: "Distracted Free Type",
      ja: "散漫な自由型",
      'zh-CN': "散漫自由型",
      'zh-TW': "散漫自由型",
      id: "Tipe Bebas Terganggu",
      vi: "Kiểu Tự Do Phân Tâm"
    },
    description: {
      ko: "쉽게 흐트러지는 집중력, 외부 자극에 민감한 타입",
      en: "Easily distracted concentration, sensitive to external stimuli",
      ja: "簡単に散漫になる集中力、外部刺激に敏感なタイプ",
      'zh-CN': "容易分散的专注力，对外部刺激敏感的类型",
      'zh-TW': "容易分散的專注力，對外部刺激敏感的類型",
      id: "Konsentrasi mudah terganggu, sensitif terhadap stimulus eksternal",
      vi: "Sự tập trung dễ bị phân tâm, nhạy cảm với kích thích bên ngoài"
    },
    longDescription: {
      ko: "집중하려 하지만 금방 딴 생각을 합니다. 스마트폰, 소음, 생각 등 모든 것이 방해 요소가 됩니다. 30분 이상 집중하기 어렵고 멀티태스킹 경향이 있습니다. ADHD 성향이 있을 수 있으며 집중력 훈련이 필요합니다.",
      en: "You try to focus but quickly think about other things. Smartphones, noise, thoughts - everything becomes a distraction. It's difficult to focus for more than 30 minutes and you tend to multitask. You may have ADHD tendencies and need concentration training.",
      ja: "集中しようとするがすぐに他のことを考えてしまいます。スマートフォン、騒音、思考などすべてが妨害要素になります。30分以上集中するのは困難で、マルチタスクの傾向があります。ADHDの傾向がある可能性があり、集中力の訓練が必要です。",
      'zh-CN': "你试图专注但很快想其他事。智能手机、噪音、想法等一切都成为干扰因素。很难专注超过30分钟，有多任务倾向。可能有ADHD倾向，需要专注力训练。",
      'zh-TW': "你試圖專注但很快想其他事。智慧手機、噪音、想法等一切都成為干擾因素。很難專注超過30分鐘，有多任務傾向。可能有ADHD傾向，需要專注力訓練。",
      id: "Anda mencoba fokus tetapi cepat memikirkan hal lain. Smartphone, kebisingan, pikiran - semuanya menjadi gangguan. Sulit fokus lebih dari 30 menit dan cenderung multitasking. Anda mungkin memiliki kecenderungan ADHD dan memerlukan pelatihan konsentrasi.",
      vi: "Bạn cố gắng tập trung nhưng nhanh chóng nghĩ về việc khác. Điện thoại thông minh, tiếng ồn, suy nghĩ - mọi thứ đều trở thành yếu tố gây phân tâm. Khó tập trung hơn 30 phút và có xu hướng đa nhiệm. Có thể có xu hướng ADHD và cần rèn luyện sự tập trung."
    },
    pros: [
      {
        ko: "창의성",
        en: "Creativity",
        ja: "創造性",
        'zh-CN': "创造力",
        'zh-TW': "創造力",
        id: "Kreativitas",
        vi: "Sáng tạo"
      },
      {
        ko: "유연한 사고",
        en: "Flexible thinking",
        ja: "柔軟な思考",
        'zh-CN': "灵活思维",
        'zh-TW': "靈活思維",
        id: "Pemikiran fleksibel",
        vi: "Tư duy linh hoạt"
      },
      {
        ko: "다양한 관심",
        en: "Diverse interests",
        ja: "多様な興味",
        'zh-CN': "多样化兴趣",
        'zh-TW': "多樣化興趣",
        id: "Minat beragam",
        vi: "Sở thích đa dạng"
      }
    ],
    cons: [
      {
        ko: "낮은 생산성",
        en: "Low productivity",
        ja: "低い生産性",
        'zh-CN': "低生产力",
        'zh-TW': "低生產力",
        id: "Produktivitas rendah",
        vi: "Năng suất thấp"
      },
      {
        ko: "마감 스트레스",
        en: "Deadline stress",
        ja: "締切ストレス",
        'zh-CN': "截止日期压力",
        'zh-TW': "截止日期壓力",
        id: "Stres deadline",
        vi: "Căng thẳng thời hạn"
      },
      {
        ko: "과제 미완성",
        en: "Incomplete tasks",
        ja: "課題未完成",
        'zh-CN': "任务未完成",
        'zh-TW': "任務未完成",
        id: "Tugas tidak selesai",
        vi: "Công việc chưa hoàn thành"
      }
    ],
    advice: {
      ko: "짧은 집중부터 시작하세요. 10분씩 늘려가는 훈련이 효과적!",
      en: "Start with short focus periods. Training to increase by 10 minutes at a time is effective!",
      ja: "短い集中から始めてください。10分ずつ増やしていく訓練が効果的です！",
      'zh-CN': "从短时间专注开始。每次增加10分钟的训练很有效！",
      'zh-TW': "從短時間專注開始。每次增加10分鐘的訓練很有效！",
      id: "Mulai dengan periode fokus pendek. Latihan menambah 10 menit setiap kali efektif!",
      vi: "Bắt đầu với thời gian tập trung ngắn. Rèn luyện tăng 10 phút mỗi lần rất hiệu quả!"
    },
    compatibility: {
      best: ["Type5"],
      good: ["Type3"],
      careful: ["Type1", "Type2"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type5",
    emoji: "🎭",
    title: {
      ko: "멀티태스킹형",
      en: "Multitasking Type",
      ja: "マルチタスク型",
      'zh-CN': "多任务型",
      'zh-TW': "多任務型",
      id: "Tipe Multitasking",
      vi: "Kiểu Đa Nhiệm"
    },
    description: {
      ko: "동시다발! 여러 일을 함께 처리하는 멀티플레이어",
      en: "Simultaneous! Multiplayer who handles multiple tasks together",
      ja: "同時多発！複数のことを一緒に処理するマルチプレイヤー",
      'zh-CN': "同时进行！一起处理多项任务的多任务者",
      'zh-TW': "同時進行！一起處理多項任務的多任務者",
      id: "Simultan! Pemain multi yang menangani beberapa tugas bersamaan",
      vi: "Đồng thời! Người đa nhiệm xử lý nhiều việc cùng lúc"
    },
    longDescription: {
      ko: "한 가지만 하면 지루합니다. 여러 창을 띄워놓고 동시에 작업하며 다양한 일을 번갈아 합니다. 단일 작업 집중력은 약하지만 전환 능력은 뛰어납니다. 창의적 업무나 고객 응대에 적합합니다.",
      en: "You get bored doing just one thing. You work with multiple windows open simultaneously, alternating between various tasks. Your single-task concentration is weak but your switching ability is excellent. You're suitable for creative work or customer service.",
      ja: "一つのことだけをしていると退屈します。複数のウィンドウを開いて同時に作業し、様々なことを交互に行います。単一作業の集中力は弱いですが、切り替え能力は優れています。創造的な仕事や顧客対応に適しています。",
      'zh-CN': "只做一件事会让你无聊。你同时打开多个窗口工作，交替进行各种任务。你的单任务专注力较弱，但转换能力出色。适合创意工作或客户服务。",
      'zh-TW': "只做一件事會讓你無聊。你同時打開多個視窗工作，交替進行各種任務。你的單任務專注力較弱，但轉換能力出色。適合創意工作或客戶服務。",
      id: "Anda bosan melakukan satu hal saja. Anda bekerja dengan beberapa jendela terbuka bersamaan, bergantian antara berbagai tugas. Konsentrasi tugas tunggal Anda lemah tetapi kemampuan beralih Anda sangat baik. Anda cocok untuk pekerjaan kreatif atau layanan pelanggan.",
      vi: "Bạn chán khi chỉ làm một việc. Bạn làm việc với nhiều cửa sổ mở đồng thời, luân phiên giữa các nhiệm vụ khác nhau. Sự tập trung đơn nhiệm của bạn yếu nhưng khả năng chuyển đổi xuất sắc. Bạn phù hợp với công việc sáng tạo hoặc dịch vụ khách hàng."
    },
    pros: [
      {
        ko: "빠른 전환",
        en: "Quick switching",
        ja: "素早い切り替え",
        'zh-CN': "快速转换",
        'zh-TW': "快速轉換",
        id: "Peralihan cepat",
        vi: "Chuyển đổi nhanh"
      },
      {
        ko: "다재다능",
        en: "Versatile",
        ja: "多才多芸",
        'zh-CN': "多才多艺",
        'zh-TW': "多才多藝",
        id: "Serbaguna",
        vi: "Đa tài"
      },
      {
        ko: "동시 처리",
        en: "Simultaneous processing",
        ja: "同時処理",
        'zh-CN': "同时处理",
        'zh-TW': "同時處理",
        id: "Pemrosesan simultan",
        vi: "Xử lý đồng thời"
      },
      {
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        'zh-CN': "灵活性",
        'zh-TW': "靈活性",
        id: "Fleksibilitas",
        vi: "Tính linh hoạt"
      }
    ],
    cons: [
      {
        ko: "깊이 부족",
        en: "Lack of depth",
        ja: "深さ不足",
        'zh-CN': "缺乏深度",
        'zh-TW': "缺乏深度",
        id: "Kurang kedalaman",
        vi: "Thiếu chiều sâu"
      },
      {
        ko: "실수 가능",
        en: "Mistake prone",
        ja: "ミスしやすい",
        'zh-CN': "容易出错",
        'zh-TW': "容易出錯",
        id: "Rentan kesalahan",
        vi: "Dễ mắc lỗi"
      },
      {
        ko: "진짜 집중 어려움",
        en: "Difficulty with real focus",
        ja: "本当の集中困難",
        'zh-CN': "真正专注困难",
        'zh-TW': "真正專注困難",
        id: "Kesulitan fokus nyata",
        vi: "Khó tập trung thực sự"
      }
    ],
    advice: {
      ko: "때로는 한 가지만 깊이 파는 연습도 필요해요!",
      en: "Sometimes you need to practice digging deep into just one thing!",
      ja: "時々は一つのことだけを深く掘り下げる練習も必要です！",
      'zh-CN': "有时你需要练习深入挖掘一件事！",
      'zh-TW': "有時你需要練習深入挖掘一件事！",
      id: "Kadang-kadang Anda perlu berlatih menggali dalam satu hal saja!",
      vi: "Thỉnh thoảng bạn cần luyện tập đào sâu vào một việc!"
    },
    compatibility: {
      best: ["Type4"],
      good: ["Type3"],
      careful: ["Type1", "Type2"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type6",
    emoji: "😴",
    title: {
      ko: "집중력 고갈형",
      en: "Concentration Depletion Type",
      ja: "集中力枯渇型",
      'zh-CN': "专注力枯竭型",
      'zh-TW': "專注力枯竭型",
      id: "Tipe Kelelahan Konsentrasi",
      vi: "Kiểu Cạn Kiệt Tập Trung"
    },
    description: {
      ko: "번아웃 직전! 집중력이 바닥난 상태",
      en: "Near burnout! Concentration at rock bottom",
      ja: "バーンアウト直前！集中力が底辺の状態",
      'zh-CN': "接近倦怠！专注力处于最低点",
      'zh-TW': "接近倦怠！專注力處於最低點",
      id: "Hampir kelelahan! Konsentrasi di titik terendah",
      vi: "Gần kiệt sức! Sự tập trung ở mức thấp nhất"
    },
    longDescription: {
      ko: "심각한 집중력 저하 상태입니다. 피로, 스트레스, 번아웃으로 집중이 거의 불가능합니다. 어떤 일을 해도 몰입되지 않고 계속 딴 생각을 하거나 졸립니다. 지금 필요한 건 집중 훈련이 아니라 충분한 휴식입니다.",
      en: "You're in a state of serious concentration decline. Due to fatigue, stress, and burnout, concentration is almost impossible. No matter what you do, you can't immerse yourself and keep thinking about other things or feeling sleepy. What you need now is not concentration training but sufficient rest.",
      ja: "深刻な集中力低下状態です。疲労、ストレス、バーンアウトにより集中がほぼ不可能です。何をしても没入できず、常に他のことを考えたり眠くなったりします。今必要なのは集中訓練ではなく十分な休息です。",
      'zh-CN': "你处于严重的专注力下降状态。由于疲劳、压力和倦怠，专注几乎不可能。无论做什么都无法沉浸，总是想其他事或感到困倦。现在需要的不是专注训练而是充分休息。",
      'zh-TW': "你處於嚴重的專注力下降狀態。由於疲勞、壓力和倦怠，專注幾乎不可能。無論做什麼都無法沉浸，總是想其他事或感到困倦。現在需要的不是專注訓練而是充分休息。",
      id: "Anda berada dalam keadaan penurunan konsentrasi yang serius. Karena kelelahan, stres, dan burnout, konsentrasi hampir tidak mungkin. Tidak peduli apa yang Anda lakukan, Anda tidak bisa terbenam dan terus memikirkan hal lain atau mengantuk. Yang Anda butuhkan sekarang bukan pelatihan konsentrasi tetapi istirahat yang cukup.",
      vi: "Bạn đang trong tình trạng suy giảm sự tập trung nghiêm trọng. Do mệt mỏi, căng thẳng và kiệt sức, việc tập trung gần như không thể. Dù làm gì cũng không thể nhập định và liên tục nghĩ về việc khác hoặc buồn ngủ. Điều bạn cần bây giờ không phải là rèn luyện tập trung mà là nghỉ ngơi đầy đủ."
    },
    pros: [
      {
        ko: "휴식이 필요하다는 신호",
        en: "Signal that rest is needed",
        ja: "休息が必要という信号",
        'zh-CN': "需要休息的信号",
        'zh-TW': "需要休息的信號",
        id: "Sinyal bahwa istirahat diperlukan",
        vi: "Tín hiệu cần nghỉ ngơi"
      }
    ],
    cons: [
      {
        ko: "생산성 제로",
        en: "Zero productivity",
        ja: "生産性ゼロ",
        'zh-CN': "生产力为零",
        'zh-TW': "生產力為零",
        id: "Produktivitas nol",
        vi: "Năng suất bằng không"
      },
      {
        ko: "업무 불가",
        en: "Unable to work",
        ja: "業務不可能",
        'zh-CN': "无法工作",
        'zh-TW': "無法工作",
        id: "Tidak bisa bekerja",
        vi: "Không thể làm việc"
      },
      {
        ko: "건강 위험",
        en: "Health risk",
        ja: "健康リスク",
        'zh-CN': "健康风险",
        'zh-TW': "健康風險",
        id: "Risiko kesehatan",
        vi: "Nguy cơ sức khỏe"
      }
    ],
    advice: {
      ko: "무리하지 마세요! 휴식이 최우선입니다. 회복 후 천천히 시작하세요.",
      en: "Don't push yourself! Rest is the top priority. Start slowly after recovery.",
      ja: "無理をしないでください！休息が最優先です。回復後にゆっくり始めてください。",
      'zh-CN': "不要勉强自己！休息是首要任务。恢复后慢慢开始。",
      'zh-TW': "不要勉強自己！休息是首要任務。恢復後慢慢開始。",
      id: "Jangan memaksa diri! Istirahat adalah prioritas utama. Mulai perlahan setelah pulih.",
      vi: "Đừng ép bản thân! Nghỉ ngơi là ưu tiên hàng đầu. Bắt đầu từ từ sau khi hồi phục."
    },
    compatibility: {
      best: ["Type2", "Type3", "Type4", "Type5"],
      good: [],
      careful: ["Type1"],
      difficult: []
    }
  }
];

export function calculateConcentrationResult(answers: Record<number, number>): ConcentrationResult {
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0,
  };

  // Calculate scores for all questions
  concentrationQuestions.forEach((question) => {
    const answerIndex = answers[question.id];
    if (answerIndex !== undefined) {
      const selectedOption = question.options[answerIndex];
      Object.entries(selectedOption.scores).forEach(([type, score]) => {
        scores[type] = (scores[type] || 0) + score;
      });
    }
  });

  // Find the highest score
  let maxScore = 0;
  let resultTypes: string[] = [];

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultTypes = [type];
    } else if (score === maxScore) {
      resultTypes.push(type);
    }
  });

  // If there's a tie, prioritize based on Q10-Q12
  if (resultTypes.length > 1) {
    const priorityScores: Record<string, number> = {};
    resultTypes.forEach((type) => {
      priorityScores[type] = 0;
    });

    [10, 11, 12].forEach((questionId) => {
      const answerIndex = answers[questionId];
      if (answerIndex !== undefined) {
        const question = concentrationQuestions.find((q) => q.id === questionId);
        if (question) {
          const selectedOption = question.options[answerIndex];
          Object.entries(selectedOption.scores).forEach(([type, score]) => {
            if (resultTypes.includes(type)) {
              priorityScores[type] = (priorityScores[type] || 0) + score;
            }
          });
        }
      }
    });

    let maxPriorityScore = 0;
    let finalType = resultTypes[0];

    Object.entries(priorityScores).forEach(([type, score]) => {
      if (score > maxPriorityScore) {
        maxPriorityScore = score;
        finalType = type;
      }
    });

    return concentrationResults.find((r) => r.type === finalType) || concentrationResults[0];
  }

  return concentrationResults.find((r) => r.type === resultTypes[0]) || concentrationResults[0];
}
