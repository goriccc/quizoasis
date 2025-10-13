// 데이트 스타일 테스트 데이터 (시나리오 기반)

export interface DatingQuestion {
  id: number;
  question: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  options: Array<{
    text: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
    scores: { planner: number; spontaneous: number; homecafe: number; romantic: number; active: number; balanced: number; };
  }>;
}

export interface DatingResult {
  type: string;
  emoji: string;
  title: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  description: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  traits: Array<{ ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; }>;
  idealDate: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  compatibility: { best: string[]; good: string[]; careful: string[]; difficult: string[]; };
}

// 12개 질문 (시나리오 기반)
export const datingQuestions: DatingQuestion[] = [
  {
    id: 1,
    question: {
      ko: '주말 데이트 계획을 세울 때, 당신은?',
      en: 'When planning a weekend date, you are?',
      ja: '週末デートの計画を立てる時、あなたは？',
      'zh-CN': '计划周末约会时，你是？',
      'zh-TW': '計劃週末約會時，你是？',
      id: 'Saat merencanakan kencan akhir pekan, Anda?',
      vi: 'Khi lên kế hoạch hẹn hò cuối tuần, bạn?'
    },
    options: [
      {
        text: {
          ko: '일주일 전부터 완벽하게 계획',
          en: 'Plan perfectly from a week ago',
          ja: '一週間前から完璧に計画',
          'zh-CN': '提前一周完美计划',
          'zh-TW': '提前一周完美計劃',
          id: 'Merencanakan sempurna sejak seminggu sebelumnya',
          vi: 'Lập kế hoạch hoàn hảo từ một tuần trước'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '대략 정하고 즉흥적으로',
          en: 'Roughly decide and improvise',
          ja: '大体決めて即興的に',
          'zh-CN': '大致决定并即兴发挥',
          'zh-TW': '大致決定並即興發揮',
          id: 'Kurang lebih memutuskan dan berimprovisasi',
          vi: 'Quyết định sơ bộ và ứng biến'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '연인 의견 따름',
          en: 'Follow partner\'s opinion',
          ja: '恋人の意見に従う',
          'zh-CN': '听从恋人的意见',
          'zh-TW': '聽從戀人的意見',
          id: 'Mengikuti pendapat pasangan',
          vi: 'Theo ý kiến người yêu'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      },
      {
        text: {
          ko: '당일 기분 따라',
          en: 'Depending on mood that day',
          ja: '当日の気分次第',
          'zh-CN': '根据当天心情',
          'zh-TW': '根據當天心情',
          id: 'Tergantung suasana hati hari itu',
          vi: 'Tùy tâm trạng ngày hôm đó'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: '데이트 중 갑자기 비가 온다면?',
      en: 'If it suddenly rains during a date?',
      ja: 'デート中に突然雨が降ったら？',
      'zh-CN': '约会时突然下雨怎么办？',
      'zh-TW': '約會時突然下雨怎麼辦？',
      id: 'Jika tiba-tiba hujan saat kencan?',
      vi: 'Nếu đột nhiên mưa trong buổi hẹn hò?'
    },
    options: [
      {
        text: {
          ko: '실내 대안 이미 준비됨',
          en: 'Indoor alternative already prepared',
          ja: '室内の代案はすでに準備済み',
          'zh-CN': '已准备好室内替代方案',
          'zh-TW': '已準備好室內替代方案',
          id: 'Alternatif indoor sudah disiapkan',
          vi: 'Đã chuẩn bị phương án trong nhà'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '오히려 좋아! 낭만적',
          en: 'Even better! Romantic',
          ja: 'むしろ良い！ロマンチック',
          'zh-CN': '更好！很浪漫',
          'zh-TW': '更好！很浪漫',
          id: 'Malah lebih baik! Romantis',
          vi: 'Càng tốt! Lãng mạn'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '집에 가고 싶음',
          en: 'Want to go home',
          ja: '家に帰りたい',
          'zh-CN': '想回家',
          'zh-TW': '想回家',
          id: 'Ingin pulang',
          vi: 'Muốn về nhà'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '당황하지만 어떻게든 해결',
          en: 'Flustered but somehow solve it',
          ja: '慌てるがどうにか解決',
          'zh-CN': '慌乱但设法解决',
          'zh-TW': '慌亂但設法解決',
          id: 'Bingung tapi entah bagaimana menyelesaikannya',
          vi: 'Hoảng hốt nhưng giải quyết được'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: '이상적인 첫 데이트 장소는?',
      en: 'Ideal first date location?',
      ja: '理想的な初デートの場所は？',
      'zh-CN': '理想的第一次约会地点？',
      'zh-TW': '理想的第一次約會地點？',
      id: 'Lokasi kencan pertama yang ideal?',
      vi: 'Địa điểm hẹn hò đầu tiên lý tưởng?'
    },
    options: [
      {
        text: {
          ko: '조용한 카페나 전시회',
          en: 'Quiet cafe or exhibition',
          ja: '静かなカフェや展示会',
          'zh-CN': '安静的咖啡馆或展览',
          'zh-TW': '安靜的咖啡館或展覽',
          id: 'Kafe tenang atau pameran',
          vi: 'Quán cà phê yên tĩnh hoặc triển lãm'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '놀이공원이나 체험활동',
          en: 'Amusement park or activity',
          ja: '遊園地や体験活動',
          'zh-CN': '游乐园或体验活动',
          'zh-TW': '遊樂園或體驗活動',
          id: 'Taman hiburan atau aktivitas',
          vi: 'Công viên giải trí hoặc hoạt động'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 3, balanced: 0 }
      },
      {
        text: {
          ko: '유명 맛집이나 인기 카페',
          en: 'Famous restaurant or popular cafe',
          ja: '有名グルメや人気カフェ',
          'zh-CN': '著名餐厅或热门咖啡馆',
          'zh-TW': '著名餐廳或熱門咖啡館',
          id: 'Restoran terkenal atau kafe populer',
          vi: 'Nhà hàng nổi tiếng hoặc quán cà phê phổ biến'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 3, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '집에서 요리하거나 영화 보기',
          en: 'Cook at home or watch movies',
          ja: '家で料理や映画鑑賞',
          'zh-CN': '在家做饭或看电影',
          'zh-TW': '在家做飯或看電影',
          id: 'Masak di rumah atau nonton film',
          vi: 'Nấu ăn ở nhà hoặc xem phim'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: '데이트 비용 해결은?',
      en: 'How about date expenses?',
      ja: 'デート費用の解決は？',
      'zh-CN': '约会费用如何处理？',
      'zh-TW': '約會費用如何處理？',
      id: 'Bagaimana dengan biaya kencan?',
      vi: 'Chi phí hẹn hò như thế nào?'
    },
    options: [
      {
        text: {
          ko: '예산 정하고 계획적으로',
          en: 'Set budget and plan',
          ja: '予算を決めて計画的に',
          'zh-CN': '制定预算并计划',
          'zh-TW': '制定預算並計劃',
          id: 'Tetapkan anggaran dan rencanakan',
          vi: 'Đặt ngân sách và lập kế hoạch'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '그때그때 자연스럽게',
          en: 'Naturally each time',
          ja: 'その都度自然に',
          'zh-CN': '每次自然而然',
          'zh-TW': '每次自然而然',
          id: 'Secara alami setiap saat',
          vi: 'Tự nhiên mỗi lần'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '특별한 날만 신경씀',
          en: 'Only care on special days',
          ja: '特別な日だけ気にする',
          'zh-CN': '只在特殊日子关心',
          'zh-TW': '只在特殊日子關心',
          id: 'Hanya peduli di hari spesial',
          vi: 'Chỉ quan tâm vào những ngày đặc biệt'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 3, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '경제적 방법 우선',
          en: 'Economical method first',
          ja: '経済的方法を優先',
          'zh-CN': '优先经济方法',
          'zh-TW': '優先經濟方法',
          id: 'Metode ekonomis terlebih dahulu',
          vi: 'Phương pháp tiết kiệm trước'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: '연인 생일 준비는?',
      en: 'Partner\'s birthday preparation?',
      ja: '恋人の誕生日の準備は？',
      'zh-CN': '恋人生日准备？',
      'zh-TW': '戀人生日準備？',
      id: 'Persiapan ulang tahun pasangan?',
      vi: 'Chuẩn bị sinh nhật người yêu?'
    },
    options: [
      {
        text: {
          ko: '한 달 전부터 이벤트 계획',
          en: 'Plan event from a month ago',
          ja: '一ヶ月前からイベント計画',
          'zh-CN': '提前一个月策划活动',
          'zh-TW': '提前一個月策劃活動',
          id: 'Rencanakan acara sejak sebulan sebelumnya',
          vi: 'Lập kế hoạch sự kiện từ một tháng trước'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '평소처럼 편하게',
          en: 'Comfortably as usual',
          ja: '普段通り気楽に',
          'zh-CN': '像平常一样舒适',
          'zh-TW': '像平常一樣舒適',
          id: 'Santai seperti biasa',
          vi: 'Thoải mái như thường lệ'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '상대가 원하는 것 물어봄',
          en: 'Ask what partner wants',
          ja: '相手が望むものを聞く',
          'zh-CN': '询问对方想要什么',
          'zh-TW': '詢問對方想要什麼',
          id: 'Tanya apa yang pasangan inginkan',
          vi: 'Hỏi người yêu muốn gì'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      },
      {
        text: {
          ko: '집에서 특별한 요리 준비',
          en: 'Prepare special food at home',
          ja: '家で特別な料理を準備',
          'zh-CN': '在家准备特别的食物',
          'zh-TW': '在家準備特別的食物',
          id: 'Siapkan makanan spesial di rumah',
          vi: 'Chuẩn bị món ăn đặc biệt ở nhà'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: '데이트 중 의견이 다르면?',
      en: 'If opinions differ during date?',
      ja: 'デート中に意見が違ったら？',
      'zh-CN': '约会时意见不同怎么办？',
      'zh-TW': '約會時意見不同怎麼辦？',
      id: 'Jika pendapat berbeda saat kencan?',
      vi: 'Nếu ý kiến khác nhau trong buổi hẹn hò?'
    },
    options: [
      {
        text: {
          ko: '논리적으로 대화하고 결정',
          en: 'Discuss logically and decide',
          ja: '論理的に話し合って決定',
          'zh-CN': '逻辑讨论并决定',
          'zh-TW': '邏輯討論並決定',
          id: 'Diskusikan secara logis dan putuskan',
          vi: 'Thảo luận logic và quyết định'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '바로 풀고 금방 잊음',
          en: 'Resolve quickly and forget',
          ja: 'すぐ解決してすぐ忘れる',
          'zh-CN': '快速解决并忘记',
          'zh-TW': '快速解決並忘記',
          id: 'Selesaikan dengan cepat dan lupakan',
          vi: 'Giải quyết nhanh và quên'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '먼저 양보함',
          en: 'Yield first',
          ja: '先に譲る',
          'zh-CN': '先让步',
          'zh-TW': '先讓步',
          id: 'Mengalah terlebih dahulu',
          vi: 'Nhường nhịn trước'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      },
      {
        text: {
          ko: '둘 다 만족할 방법 찾기',
          en: 'Find way to satisfy both',
          ja: '両方満足する方法を見つける',
          'zh-CN': '找到双方满意的方法',
          'zh-TW': '找到雙方滿意的方法',
          id: 'Cari cara memuaskan keduanya',
          vi: 'Tìm cách thỏa mãn cả hai'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: '이상적인 데이트 빈도는?',
      en: 'Ideal date frequency?',
      ja: '理想的なデート頻度は？',
      'zh-CN': '理想的约会频率？',
      'zh-TW': '理想的約會頻率？',
      id: 'Frekuensi kencan ideal?',
      vi: 'Tần suất hẹn hò lý tưởng?'
    },
    options: [
      {
        text: {
          ko: '주 2-3회 규칙적으로',
          en: '2-3 times a week regularly',
          ja: '週2-3回定期的に',
          'zh-CN': '每周2-3次定期',
          'zh-TW': '每週2-3次定期',
          id: '2-3 kali seminggu secara teratur',
          vi: '2-3 lần một tuần đều đặn'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '가능하면 매일',
          en: 'Every day if possible',
          ja: '可能なら毎日',
          'zh-CN': '如果可能每天',
          'zh-TW': '如果可能每天',
          id: 'Setiap hari jika memungkinkan',
          vi: 'Mỗi ngày nếu có thể'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 3, balanced: 0 }
      },
      {
        text: {
          ko: '주 1회, 각자 시간도 중요',
          en: 'Once a week, personal time important',
          ja: '週1回、各自の時間も大切',
          'zh-CN': '每周一次，个人时间也重要',
          'zh-TW': '每週一次，個人時間也重要',
          id: 'Sekali seminggu, waktu pribadi juga penting',
          vi: 'Một lần một tuần, thời gian cá nhân cũng quan trọng'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '만나고 싶을 때마다',
          en: 'Whenever want to meet',
          ja: '会いたい時に',
          'zh-CN': '想见面的时候',
          'zh-TW': '想見面的時候',
          id: 'Kapan pun ingin bertemu',
          vi: 'Bất cứ khi nào muốn gặp'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: '데이트 중 사진은?',
      en: 'Photos during date?',
      ja: 'デート中の写真は？',
      'zh-CN': '约会时拍照？',
      'zh-TW': '約會時拍照？',
      id: 'Foto saat kencan?',
      vi: 'Chụp ảnh trong buổi hẹn hò?'
    },
    options: [
      {
        text: {
          ko: '기록용 몇 장만',
          en: 'Just a few for record',
          ja: '記録用に数枚だけ',
          'zh-CN': '只拍几张作为记录',
          'zh-TW': '只拍幾張作為記錄',
          id: 'Hanya beberapa untuk rekaman',
          vi: 'Chỉ vài tấm để lưu'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '거의 안 찍음',
          en: 'Rarely take',
          ja: 'ほとんど撮らない',
          'zh-CN': '几乎不拍',
          'zh-TW': '幾乎不拍',
          id: 'Jarang mengambil',
          vi: 'Hiếm khi chụp'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '상대가 원하면 찍어줌',
          en: 'Take if partner wants',
          ja: '相手が望めば撮る',
          'zh-CN': '如果对方想要就拍',
          'zh-TW': '如果對方想要就拍',
          id: 'Ambil jika pasangan mau',
          vi: 'Chụp nếu người yêu muốn'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      },
      {
        text: {
          ko: '추억 남기기 위해 자주',
          en: 'Often to keep memories',
          ja: '思い出のために頻繁に',
          'zh-CN': '经常拍照留念',
          'zh-TW': '經常拍照留念',
          id: 'Sering untuk kenangan',
          vi: 'Thường xuyên để lưu kỷ niệm'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 3, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: '연인이 피곤해 보이면?',
      en: 'If partner looks tired?',
      ja: '恋人が疲れて見えたら？',
      'zh-CN': '如果恋人看起来疲惫？',
      'zh-TW': '如果戀人看起來疲憊？',
      id: 'Jika pasangan terlihat lelah?',
      vi: 'Nếu người yêu trông mệt mỏi?'
    },
    options: [
      {
        text: {
          ko: '일찍 집에 가라고 함',
          en: 'Tell to go home early',
          ja: '早く家に帰るように言う',
          'zh-CN': '让早点回家',
          'zh-TW': '讓早點回家',
          id: 'Suruh pulang lebih awal',
          vi: 'Bảo về nhà sớm'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '그래도 좀만 더 있자',
          en: 'Stay a bit more anyway',
          ja: 'それでももう少しいよう',
          'zh-CN': '还是再待一会儿',
          'zh-TW': '還是再待一會兒',
          id: 'Tetap tinggal lebih lama',
          vi: 'Ở lại thêm một chút'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 3, balanced: 0 }
      },
      {
        text: {
          ko: '집에서 편하게 쉬자고 함',
          en: 'Suggest resting comfortably at home',
          ja: '家で楽に休もうと言う',
          'zh-CN': '建议在家舒适休息',
          'zh-TW': '建議在家舒適休息',
          id: 'Sarankan istirahat dengan nyaman di rumah',
          vi: 'Đề nghị nghỉ ngơi thoải mái ở nhà'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '상대 의견 물어봄',
          en: 'Ask partner\'s opinion',
          ja: '相手の意見を聞く',
          'zh-CN': '询问对方意见',
          'zh-TW': '詢問對方意見',
          id: 'Tanya pendapat pasangan',
          vi: 'Hỏi ý kiến người yêu'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: '데이트에서 가장 중요한 것은?',
      en: 'Most important thing in dating?',
      ja: 'デートで最も重要なことは？',
      'zh-CN': '约会中最重要的是？',
      'zh-TW': '約會中最重要的是？',
      id: 'Hal terpenting dalam kencan?',
      vi: 'Điều quan trọng nhất trong hẹn hò?'
    },
    options: [
      {
        text: {
          ko: '효율적인 시간 활용',
          en: 'Efficient time use',
          ja: '効率的な時間活用',
          'zh-CN': '有效利用时间',
          'zh-TW': '有效利用時間',
          id: 'Penggunaan waktu yang efisien',
          vi: 'Sử dụng thời gian hiệu quả'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '편하고 행복한 분위기',
          en: 'Comfortable and happy atmosphere',
          ja: '快適で幸せな雰囲気',
          'zh-CN': '舒适愉快的氛围',
          'zh-TW': '舒適愉快的氛圍',
          id: 'Suasana nyaman dan bahagia',
          vi: 'Bầu không khí thoải mái và vui vẻ'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '상대방 만족',
          en: 'Partner satisfaction',
          ja: '相手の満足',
          'zh-CN': '对方满意',
          'zh-TW': '對方滿意',
          id: 'Kepuasan pasangan',
          vi: 'Sự hài lòng của người yêu'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      },
      {
        text: {
          ko: '특별한 경험과 추억',
          en: 'Special experience and memories',
          ja: '特別な経験と思い出',
          'zh-CN': '特别的经历和回忆',
          'zh-TW': '特別的經歷和回憶',
          id: 'Pengalaman dan kenangan spesial',
          vi: 'Trải nghiệm và kỷ niệm đặc biệt'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 3, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: '커플 아이템에 대한 생각은?',
      en: 'Thoughts on couple items?',
      ja: 'カップルアイテムについての考えは？',
      'zh-CN': '对情侣物品的看法？',
      'zh-TW': '對情侶物品的看法？',
      id: 'Pendapat tentang barang couple?',
      vi: 'Suy nghĩ về đồ đôi?'
    },
    options: [
      {
        text: {
          ko: '필요 없음',
          en: 'Not necessary',
          ja: '必要ない',
          'zh-CN': '不需要',
          'zh-TW': '不需要',
          id: 'Tidak perlu',
          vi: 'Không cần thiết'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '은근한 정도는 괜찮음',
          en: 'Subtle ones are okay',
          ja: 'さりげない程度なら大丈夫',
          'zh-CN': '低调一点可以',
          'zh-TW': '低調一點可以',
          id: 'Yang halus tidak apa-apa',
          vi: 'Loại nhẹ nhàng thì được'
        },
        scores: { planner: 0, spontaneous: 3, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '상대가 원하면 당연히',
          en: 'Of course if partner wants',
          ja: '相手が望めば当然',
          'zh-CN': '如果对方想要当然可以',
          'zh-TW': '如果對方想要當然可以',
          id: 'Tentu saja jika pasangan mau',
          vi: 'Dĩ nhiên nếu người yêu muốn'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 3 }
      },
      {
        text: {
          ko: '완전 찬성!',
          en: 'Totally agree!',
          ja: '完全賛成！',
          'zh-CN': '完全赞成！',
          'zh-TW': '完全贊成！',
          id: 'Sangat setuju!',
          vi: 'Hoàn toàn đồng ý!'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 3, active: 0, balanced: 0 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: '장거리 연애가 된다면?',
      en: 'If it becomes long distance?',
      ja: '遠距離恋愛になったら？',
      'zh-CN': '如果变成异地恋？',
      'zh-TW': '如果變成異地戀？',
      id: 'Jika menjadi hubungan jarak jauh?',
      vi: 'Nếu trở thành tình yêu đường dài?'
    },
    options: [
      {
        text: {
          ko: '만날 때마다 알차게 계획',
          en: 'Plan well whenever we meet',
          ja: '会う度に充実した計画',
          'zh-CN': '每次见面都好好计划',
          'zh-TW': '每次見面都好好計劃',
          id: 'Rencanakan dengan baik setiap bertemu',
          vi: 'Lên kế hoạch chu đáo mỗi lần gặp'
        },
        scores: { planner: 3, spontaneous: 0, homecafe: 0, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '만날 때 마음껏 즐김',
          en: 'Enjoy to the fullest when meeting',
          ja: '会う時思いっきり楽しむ',
          'zh-CN': '见面时尽情享受',
          'zh-TW': '見面時盡情享受',
          id: 'Nikmati sepenuhnya saat bertemu',
          vi: 'Tận hưởng hết mình khi gặp nhau'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 0, active: 3, balanced: 0 }
      },
      {
        text: {
          ko: '영상통화로 자주 소통',
          en: 'Communicate often via video call',
          ja: 'ビデオ通話で頻繁に連絡',
          'zh-CN': '经常通过视频通话',
          'zh-TW': '經常通過視頻通話',
          id: 'Sering berkomunikasi via video call',
          vi: 'Thường xuyên giao tiếp qua video call'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 3, romantic: 0, active: 0, balanced: 0 }
      },
      {
        text: {
          ko: '특별한 추억 만들기에 집중',
          en: 'Focus on making special memories',
          ja: '特別な思い出作りに集中',
          'zh-CN': '专注于创造特别的回忆',
          'zh-TW': '專注於創造特別的回憶',
          id: 'Fokus membuat kenangan spesial',
          vi: 'Tập trung tạo kỷ niệm đặc biệt'
        },
        scores: { planner: 0, spontaneous: 0, homecafe: 0, romantic: 3, active: 0, balanced: 0 }
      }
    ]
  }
];

// 6가지 결과 (시나리오 기반)
export const datingResults: DatingResult[] = [
  {
    type: 'planner',
    emoji: '📋',
    title: {
      ko: '완벽주의 플래너',
      en: 'Perfect Planner',
      ja: '完璧主義プランナー',
      'zh-CN': '完美主义策划者',
      'zh-TW': '完美主義策劃者',
      id: 'Perencana Perfeksionis',
      vi: 'Nhà Hoạch Định Hoàn Hảo'
    },
    description: {
      ko: '모든 게 계획대로! 실패 없는 데이트의 프로. 일주일 전부터 완벽하게 계획하고 플랜B까지 준비합니다. 효율적이고 알찬 데이트를 추구하며 예약과 시간 관리가 완벽합니다. 실패가 없고 신뢰감 있지만 즉흥성이 부족할 수 있습니다.',
      en: 'Everything goes as planned! Pro of fail-proof dates. Plans perfectly from a week ahead with Plan B ready. Pursues efficient dates with perfect reservations and time management. Reliable but may lack spontaneity.',
      ja: 'すべて計画通り！失敗のないデートのプロ。一週間前から完璧に計画しプランBまで準備。効率的で充実したデートを追求し、予約と時間管理が完璧。失敗がなく信頼感があるが即興性に欠けることも。',
      'zh-CN': '一切按计划！零失误约会专家。提前一周完美规划并准备B计划。追求高效充实的约会，预约和时间管理完美。可靠但可能缺乏即兴性。',
      'zh-TW': '一切按計劃！零失誤約會專家。提前一週完美規劃並準備B計劃。追求高效充實的約會，預約和時間管理完美。可靠但可能缺乏即興性。',
      id: 'Semua sesuai rencana! Profesional kencan tanpa gagal. Merencanakan sempurna sejak seminggu sebelumnya dengan Rencana B siap. Mengejar kencan efisien dengan reservasi dan manajemen waktu sempurna. Dapat diandalkan tapi mungkin kurang spontan.',
      vi: 'Mọi thứ đều theo kế hoạch! Chuyên gia hẹn hò không thất bại. Lập kế hoạch hoàn hảo từ một tuần trước với Kế hoạch B sẵn sàng. Theo đuổi buổi hẹn hiệu quả với đặt chỗ và quản lý thời gian hoàn hảo. Đáng tin cậy nhưng có thể thiếu tính ngẫu hứng.'
    },
    traits: [
      { ko: '실패 없음', en: 'No failures', ja: '失敗なし', 'zh-CN': '零失误', 'zh-TW': '零失誤', id: 'Tanpa gagal', vi: 'Không thất bại' },
      { ko: '신뢰감', en: 'Reliability', ja: '信頼感', 'zh-CN': '可靠', 'zh-TW': '可靠', id: 'Dapat dipercaya', vi: 'Đáng tin' },
      { ko: '효율적', en: 'Efficient', ja: '効率的', 'zh-CN': '高效', 'zh-TW': '高效', id: 'Efisien', vi: 'Hiệu quả' },
      { ko: '안정감', en: 'Stability', ja: '安定感', 'zh-CN': '稳定', 'zh-TW': '穩定', id: 'Stabilitas', vi: 'Ổn định' }
    ],
    idealDate: {
      ko: '예약 필수 맛집, 전시회, 뮤지컬, 계획 여행',
      en: 'Must-reserve restaurants, exhibitions, musicals, planned trips',
      ja: '予約必須レストラン、展示会、ミュージカル、計画旅行',
      'zh-CN': '必须预订的餐厅、展览、音乐剧、计划旅行',
      'zh-TW': '必須預訂的餐廳、展覽、音樂劇、計劃旅行',
      id: 'Restoran reservasi wajib, pameran, musikal, perjalanan terencana',
      vi: 'Nhà hàng phải đặt chỗ, triển lãm, nhạc kịch, chuyến đi có kế hoạch'
    },
    compatibility: {
      best: ['spontaneous'],
      good: ['balanced'],
      careful: ['homecafe'],
      difficult: ['active']
    }
  },
  {
    type: 'spontaneous',
    emoji: '🎈',
    title: {
      ko: '자유로운 즉흥파',
      en: 'Free Spontaneous',
      ja: '自由な即興派',
      'zh-CN': '自由即兴派',
      'zh-TW': '自由即興派',
      id: 'Spontan Bebas',
      vi: 'Người Ngẫu Hứng Tự Do'
    },
    description: {
      ko: '계획? 그게 뭔데? 오늘 기분대로 가는 자유 영혼. 그날 기분 따라 움직이며 예상 못한 모험을 즐깁니다. 유연하고 신선한 데이트를 만들지만 상대방이 불안해할 수 있습니다. 매 순간이 새롭고 재미있지만 준비 부족으로 당황할 때도 있습니다.',
      en: 'Plan? What\'s that? Free spirit moving by today\'s mood. Moves by daily mood and enjoys unexpected adventures. Creates flexible and fresh dates but may worry partner. Every moment is new and fun but may get flustered from lack of preparation.',
      ja: '計画？それは何？今日の気分で動く自由な魂。その日の気分で動き、予想外の冒険を楽しむ。柔軟で新鮮なデートを作るが相手を不安にさせることも。毎瞬間が新しく楽しいが準備不足で慌てることも。',
      'zh-CN': '计划？那是什么？按今天心情走的自由灵魂。根据当天心情行动并享受意外冒险。创造灵活新鲜的约会但可能让对方不安。每一刻都新鲜有趣但可能因准备不足而慌张。',
      'zh-TW': '計劃？那是什麼？按今天心情走的自由靈魂。根據當天心情行動並享受意外冒險。創造靈活新鮮的約會但可能讓對方不安。每一刻都新鮮有趣但可能因準備不足而慌張。',
      id: 'Rencana? Apa itu? Jiwa bebas bergerak sesuai suasana hati hari ini. Bergerak mengikuti suasana hati dan menikmati petualangan tak terduga. Menciptakan kencan fleksibel dan segar tapi mungkin membuat pasangan khawatir. Setiap momen baru dan menyenangkan tapi mungkin panik karena kurang persiapan.',
      vi: 'Kế hoạch? Đó là gì? Linh hồn tự do di chuyển theo tâm trạng hôm nay. Di chuyển theo tâm trạng hàng ngày và thích những cuộc phiêu lưu bất ngờ. Tạo ra buổi hẹn linh hoạt và mới mẻ nhưng có thể làm lo lắng đối phương. Mỗi khoảnh khắc đều mới và vui nhưng có thể hoảng sợ vì thiếu chuẩn bị.'
    },
    traits: [
      { ko: '신선함', en: 'Freshness', ja: '新鮮さ', 'zh-CN': '新鲜', 'zh-TW': '新鮮', id: 'Kesegaran', vi: 'Mới mẻ' },
      { ko: '자유로움', en: 'Freedom', ja: '自由', 'zh-CN': '自由', 'zh-TW': '自由', id: 'Kebebasan', vi: 'Tự do' },
      { ko: '재미', en: 'Fun', ja: '楽しさ', 'zh-CN': '乐趣', 'zh-TW': '樂趣', id: 'Kesenangan', vi: 'Vui vẻ' },
      { ko: '유연성', en: 'Flexibility', ja: '柔軟性', 'zh-CN': '灵活', 'zh-TW': '靈活', id: 'Fleksibilitas', vi: 'Linh hoạt' }
    ],
    idealDate: {
      ko: '드라이브, 산책, 즉석 여행, 축제',
      en: 'Drive, walk, impromptu trip, festival',
      ja: 'ドライブ、散歩、即席旅行、祭り',
      'zh-CN': '开车、散步、即兴旅行、节日',
      'zh-TW': '開車、散步、即興旅行、節日',
      id: 'Berkendara, jalan kaki, perjalanan dadakan, festival',
      vi: 'Lái xe, đi bộ, chuyến đi ngẫu hứng, lễ hội'
    },
    compatibility: {
      best: ['planner'],
      good: ['romantic', 'active'],
      careful: ['homecafe'],
      difficult: ['balanced']
    }
  },
  {
    type: 'homecafe',
    emoji: '🏠',
    title: {
      ko: '홈카페 안정형',
      en: 'Homecafe Stable',
      ja: 'ホームカフェ安定型',
      'zh-CN': '家庭咖啡稳定型',
      'zh-TW': '家庭咖啡穩定型',
      id: 'Homecafe Stabil',
      vi: 'Quán Cà Phê Tại Nhà Ổn Định'
    },
    description: {
      ko: '역시 집이 최고! 편안함을 추구하는 아늑한 사랑. 집에서 편하게 시간 보내는 것을 선호합니다. 배달 음식과 영화, 게임 등 아늑한 데이트를 좋아합니다. 경제적이고 깊은 대화가 가능하지만 단조로울 수 있습니다.',
      en: 'Home is the best! Cozy love pursuing comfort. Prefers spending time comfortably at home. Likes cozy dates with delivery food, movies, games. Economical and allows deep conversation but may be monotonous.',
      ja: 'やっぱり家が最高！快適さを追求する居心地の良い愛。家で快適に時間を過ごすことを好む。配達料理、映画、ゲームなど居心地の良いデートが好き。経済的で深い会話が可能だが単調になることも。',
      'zh-CN': '还是家里最好！追求舒适的温馨爱情。喜欢在家舒适地度过时间。喜欢外卖、电影、游戏等温馨约会。经济且可以深入对话但可能单调。',
      'zh-TW': '還是家裡最好！追求舒適的溫馨愛情。喜歡在家舒適地度過時間。喜歡外賣、電影、遊戲等溫馨約會。經濟且可以深入對話但可能單調。',
      id: 'Rumah tetap yang terbaik! Cinta nyaman mengejar kenyamanan. Lebih suka menghabiskan waktu dengan nyaman di rumah. Suka kencan nyaman dengan makanan pesan antar, film, game. Ekonomis dan memungkinkan percakapan mendalam tapi mungkin monoton.',
      vi: 'Nhà vẫn là tốt nhất! Tình yêu ấm cúng theo đuổi sự thoải mái. Thích dành thời gian thoải mái ở nhà. Thích buổi hẹn ấm cúng với đồ ăn giao hàng, phim, trò chơi. Tiết kiệm và cho phép trò chuyện sâu sắc nhưng có thể đơn điệu.'
    },
    traits: [
      { ko: '편안함', en: 'Comfort', ja: '快適さ', 'zh-CN': '舒适', 'zh-TW': '舒適', id: 'Kenyamanan', vi: 'Thoải mái' },
      { ko: '경제적', en: 'Economical', ja: '経済的', 'zh-CN': '经济', 'zh-TW': '經濟', id: 'Ekonomis', vi: 'Tiết kiệm' },
      { ko: '깊은 대화', en: 'Deep talk', ja: '深い会話', 'zh-CN': '深入对话', 'zh-TW': '深入對話', id: 'Percakapan mendalam', vi: 'Trò chuyện sâu' },
      { ko: '프라이버시', en: 'Privacy', ja: 'プライバシー', 'zh-CN': '隐私', 'zh-TW': '隱私', id: 'Privasi', vi: 'Riêng tư' }
    ],
    idealDate: {
      ko: '홈 파티, 쿠킹 데이트, 영화 마라톤, 게임',
      en: 'Home party, cooking date, movie marathon, games',
      ja: 'ホームパーティ、クッキングデート、映画マラソン、ゲーム',
      'zh-CN': '家庭聚会、烹饪约会、电影马拉松、游戏',
      'zh-TW': '家庭聚會、烹飪約會、電影馬拉松、遊戲',
      id: 'Pesta rumah, kencan memasak, maraton film, game',
      vi: 'Tiệc tại nhà, hẹn hò nấu ăn, xem phim marathon, trò chơi'
    },
    compatibility: {
      best: ['balanced'],
      good: ['planner'],
      careful: ['spontaneous', 'romantic'],
      difficult: ['active']
    }
  },
  {
    type: 'romantic',
    emoji: '💕',
    title: {
      ko: '로맨틱 감성파',
      en: 'Romantic Emotional',
      ja: 'ロマンチック感性派',
      'zh-CN': '浪漫感性派',
      'zh-TW': '浪漫感性派',
      id: 'Romantis Emosional',
      vi: 'Người Lãng Mạn Cảm Tính'
    },
    description: {
      ko: '드라마 같은 연애! 분위기와 감성을 중시하는 로맨티스트. 낭만을 추구하며 야경, 감성 카페, 특별한 이벤트를 중시합니다. SNS 인증샷과 추억 만들기를 좋아하고 특별한 순간을 소중히 여깁니다. 로맨틱하지만 비용 부담이 클 수 있습니다.',
      en: 'Drama-like romance! Romanticist valuing atmosphere and emotion. Pursues romance valuing night views, emotional cafes, special events. Likes SNS proof shots and making memories, cherishes special moments. Romantic but may burden with cost.',
      ja: 'ドラマのような恋愛！雰囲気と感性を重視するロマンチスト。ロマンスを追求し夜景、感性カフェ、特別イベントを重視。SNS認証ショットと思い出作りが好きで特別な瞬間を大切にする。ロマンチックだが費用負担が大きいことも。',
      'zh-CN': '像电视剧的恋爱！重视氛围和情感的浪漫主义者。追求浪漫重视夜景、感性咖啡馆、特别活动。喜欢社交媒体打卡和创造回忆，珍惜特别时刻。浪漫但可能费用负担大。',
      'zh-TW': '像電視劇的戀愛！重視氛圍和情感的浪漫主義者。追求浪漫重視夜景、感性咖啡館、特別活動。喜歡社交媒體打卡和創造回憶，珍惜特別時刻。浪漫但可能費用負擔大。',
      id: 'Romansa seperti drama! Romantis menghargai suasana dan emosi. Mengejar romansa menghargai pemandangan malam, kafe emosional, acara spesial. Suka foto bukti SNS dan membuat kenangan, menghargai momen spesial. Romantis tapi mungkin membebani dengan biaya.',
      vi: 'Tình yêu như phim! Người lãng mạn coi trọng bầu không khí và cảm xúc. Theo đuổi sự lãng mạn coi trọng cảnh đêm, quán cà phê cảm tính, sự kiện đặc biệt. Thích ảnh chứng minh SNS và tạo kỷ niệm, trân trọng khoảnh khắc đặc biệt. Lãng mạn nhưng có thể gánh nặng chi phí.'
    },
    traits: [
      { ko: '로맨틱', en: 'Romantic', ja: 'ロマンチック', 'zh-CN': '浪漫', 'zh-TW': '浪漫', id: 'Romantis', vi: 'Lãng mạn' },
      { ko: '특별함', en: 'Special', ja: '特別さ', 'zh-CN': '特别', 'zh-TW': '特別', id: 'Spesial', vi: 'Đặc biệt' },
      { ko: '추억', en: 'Memories', ja: '思い出', 'zh-CN': '回忆', 'zh-TW': '回憶', id: 'Kenangan', vi: 'Kỷ niệm' },
      { ko: '감성적', en: 'Emotional', ja: '感性的', 'zh-CN': '感性', 'zh-TW': '感性', id: 'Emosional', vi: 'Cảm tính' }
    ],
    idealDate: {
      ko: '야경 명소, 루프탑 바, 감성 카페, 이벤트',
      en: 'Night view spots, rooftop bar, emotional cafe, events',
      ja: '夜景スポット、ルーフトップバー、感性カフェ、イベント',
      'zh-CN': '夜景景点、屋顶酒吧、感性咖啡馆、活动',
      'zh-TW': '夜景景點、屋頂酒吧、感性咖啡館、活動',
      id: 'Tempat pemandangan malam, bar rooftop, kafe emosional, acara',
      vi: 'Địa điểm cảnh đêm, quầy bar trên sân thượng, quán cà phê cảm tính, sự kiện'
    },
    compatibility: {
      best: ['spontaneous'],
      good: ['planner'],
      careful: ['homecafe'],
      difficult: ['balanced']
    }
  },
  {
    type: 'active',
    emoji: '⚡',
    title: {
      ko: '액티브 모험가',
      en: 'Active Adventurer',
      ja: 'アクティブ冒険家',
      'zh-CN': '活跃冒险家',
      'zh-TW': '活躍冒險家',
      id: 'Petualang Aktif',
      vi: 'Nhà Thám Hiểm Năng Động'
    },
    description: {
      ko: '가만히 있으면 심심해! 에너지 넘치는 체험 중심 데이트. 체험 중심의 활동적인 데이트를 선호합니다. 놀이공원, 방탈출, 클라이밍 등 에너지 넘치는 활동을 즐깁니다. 다양한 추억을 만들지만 상대방이 피곤할 수 있습니다.',
      en: 'Can\'t stay still! Energetic experience-centered date. Prefers active experience-centered dates. Enjoys energetic activities like amusement parks, escape rooms, climbing. Makes various memories but partner may get tired.',
      ja: 'じっとしていられない！エネルギッシュな体験中心デート。体験中心の活動的なデートを好む。遊園地、脱出ゲーム、クライミングなどエネルギッシュな活動を楽しむ。様々な思い出を作るが相手が疲れることも。',
      'zh-CN': '静不下来！充满活力的体验中心约会。喜欢以体验为中心的活跃约会。享受游乐园、密室逃脱、攀岩等充满活力的活动。创造各种回忆但对方可能疲惫。',
      'zh-TW': '靜不下來！充滿活力的體驗中心約會。喜歡以體驗為中心的活躍約會。享受遊樂園、密室逃脫、攀岩等充滿活力的活動。創造各種回憶但對方可能疲憊。',
      id: 'Tidak bisa diam! Kencan berpusat pada pengalaman yang energik. Lebih suka kencan aktif berpusat pada pengalaman. Menikmati aktivitas energik seperti taman hiburan, escape room, panjat tebing. Membuat berbagai kenangan tapi pasangan mungkin lelah.',
      vi: 'Không thể ngồi yên! Buổi hẹn tập trung vào trải nghiệm đầy năng lượng. Thích buổi hẹn năng động tập trung vào trải nghiệm. Thích hoạt động đầy năng lượng như công viên giải trí, phòng thoát hiểm, leo núi. Tạo ra nhiều kỷ niệm nhưng đối phương có thể mệt mỏi.'
    },
    traits: [
      { ko: '활기참', en: 'Energetic', ja: '活気', 'zh-CN': '活力', 'zh-TW': '活力', id: 'Energi', vi: 'Năng động' },
      { ko: '다양한 추억', en: 'Various memories', ja: '様々な思い出', 'zh-CN': '各种回忆', 'zh-TW': '各種回憶', id: 'Berbagai kenangan', vi: 'Nhiều kỷ niệm' },
      { ko: '에너지', en: 'Energy', ja: 'エネルギー', 'zh-CN': '能量', 'zh-TW': '能量', id: 'Energi', vi: 'Năng lượng' },
      { ko: '신선함', en: 'Freshness', ja: '新鮮さ', 'zh-CN': '新鲜', 'zh-TW': '新鮮', id: 'Kesegaran', vi: 'Mới mẻ' }
    ],
    idealDate: {
      ko: '놀이공원, 클라이밍, 서핑, 등산, 방탈출',
      en: 'Amusement park, climbing, surfing, hiking, escape room',
      ja: '遊園地、クライミング、サーフィン、登山、脱出ゲーム',
      'zh-CN': '游乐园、攀岩、冲浪、登山、密室逃脱',
      'zh-TW': '遊樂園、攀岩、衝浪、登山、密室逃脫',
      id: 'Taman hiburan, panjat tebing, selancar, mendaki, escape room',
      vi: 'Công viên giải trí, leo núi, lướt sóng, leo núi, phòng thoát hiểm'
    },
    compatibility: {
      best: ['spontaneous'],
      good: ['romantic'],
      careful: ['planner'],
      difficult: ['homecafe']
    }
  },
  {
    type: 'balanced',
    emoji: '⚖️',
    title: {
      ko: '균형잡힌 조화형',
      en: 'Balanced Harmonious',
      ja: 'バランス調和型',
      'zh-CN': '平衡和谐型',
      'zh-TW': '平衡和諧型',
      id: 'Harmonis Seimbang',
      vi: 'Người Hài Hòa Cân Bằng'
    },
    description: {
      ko: '때로는 계획, 때로는 즉흥! 완벽한 밸런스의 소유자. 상황에 맞게 유연하게 대처하는 이상적인 데이트 스타일입니다. 계획과 즉흥, 외출과 집, 활동과 휴식의 균형이 완벽합니다. 상대방을 배려하며 조화로운 관계를 만듭니다.',
      en: 'Sometimes planned, sometimes spontaneous! Owner of perfect balance. Ideal dating style flexibly adapting to situations. Perfect balance of planning and improvisation, going out and home, activity and rest. Creates harmonious relationship considering partner.',
      ja: '時には計画、時には即興！完璧なバランスの持ち主。状況に応じて柔軟に対処する理想的なデートスタイル。計画と即興、外出と家、活動と休息のバランスが完璧。相手を配慮して調和のとれた関係を作る。',
      'zh-CN': '有时计划，有时即兴！完美平衡的拥有者。理想的约会风格灵活应对情况。计划与即兴、外出与在家、活动与休息的完美平衡。考虑对方创造和谐关系。',
      'zh-TW': '有時計劃，有時即興！完美平衡的擁有者。理想的約會風格靈活應對情況。計劃與即興、外出與在家、活動與休息的完美平衡。考慮對方創造和諧關係。',
      id: 'Kadang terencana, kadang spontan! Pemilik keseimbangan sempurna. Gaya kencan ideal yang beradaptasi fleksibel dengan situasi. Keseimbangan sempurna antara perencanaan dan improvisasi, keluar dan rumah, aktivitas dan istirahat. Menciptakan hubungan harmonis mempertimbangkan pasangan.',
      vi: 'Đôi khi có kế hoạch, đôi khi ngẫu hứng! Người sở hữu sự cân bằng hoàn hảo. Phong cách hẹn hò lý tưởng linh hoạt thích ứng với tình huống. Cân bằng hoàn hảo giữa kế hoạch và ứng biến, ra ngoài và ở nhà, hoạt động và nghỉ ngơi. Tạo ra mối quan hệ hài hòa cân nhắc đối phương.'
    },
    traits: [
      { ko: '유연성', en: 'Flexibility', ja: '柔軟性', 'zh-CN': '灵活', 'zh-TW': '靈活', id: 'Fleksibilitas', vi: 'Linh hoạt' },
      { ko: '배려심', en: 'Consideration', ja: '配慮心', 'zh-CN': '体贴', 'zh-TW': '體貼', id: 'Perhatian', vi: 'Quan tâm' },
      { ko: '균형감', en: 'Balance', ja: 'バランス感', 'zh-CN': '平衡', 'zh-TW': '平衡', id: 'Keseimbangan', vi: 'Cân bằng' },
      { ko: '적응력', en: 'Adaptability', ja: '適応力', 'zh-CN': '适应力', 'zh-TW': '適應力', id: 'Kemampuan beradaptasi', vi: 'Khả năng thích nghi' }
    ],
    idealDate: {
      ko: '모든 종류의 데이트 가능',
      en: 'All types of dates possible',
      ja: 'あらゆる種類のデートが可能',
      'zh-CN': '所有类型的约会都可以',
      'zh-TW': '所有類型的約會都可以',
      id: 'Semua jenis kencan memungkinkan',
      vi: 'Mọi loại hẹn hò đều được'
    },
    compatibility: {
      best: ['homecafe', 'planner'],
      good: ['romantic', 'spontaneous', 'active'],
      careful: ['active'],
      difficult: ['spontaneous']
    }
  }
];

// 점수 계산 함수
export function calculateDatingResult(answers: Array<{ planner: number; spontaneous: number; homecafe: number; romantic: number; active: number; balanced: number; }>): string {
  const totalScores = {
    planner: 0,
    spontaneous: 0,
    homecafe: 0,
    romantic: 0,
    active: 0,
    balanced: 0
  };

  answers.forEach(answer => {
    totalScores.planner += answer.planner;
    totalScores.spontaneous += answer.spontaneous;
    totalScores.homecafe += answer.homecafe;
    totalScores.romantic += answer.romantic;
    totalScores.active += answer.active;
    totalScores.balanced += answer.balanced;
  });

  let maxScore = 0;
  let resultType = 'balanced';

  Object.entries(totalScores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 동점일 경우 Q10-Q12의 선택을 우선 반영
  const tieTypes: string[] = [];
  Object.entries(totalScores).forEach(([type, score]) => {
    if (score === maxScore) {
      tieTypes.push(type);
    }
  });

  if (tieTypes.length > 1) {
    const lastThreeScores = {
      planner: 0,
      spontaneous: 0,
      homecafe: 0,
      romantic: 0,
      active: 0,
      balanced: 0
    };

    for (let i = 9; i < 12 && i < answers.length; i++) {
      lastThreeScores.planner += answers[i].planner;
      lastThreeScores.spontaneous += answers[i].spontaneous;
      lastThreeScores.homecafe += answers[i].homecafe;
      lastThreeScores.romantic += answers[i].romantic;
      lastThreeScores.active += answers[i].active;
      lastThreeScores.balanced += answers[i].balanced;
    }

    let maxLastScore = 0;
    tieTypes.forEach(type => {
      if (lastThreeScores[type as keyof typeof lastThreeScores] > maxLastScore) {
        maxLastScore = lastThreeScores[type as keyof typeof lastThreeScores];
        resultType = type;
      }
    });
  }

  return resultType;
}

