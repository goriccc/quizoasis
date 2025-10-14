// 연인 신호 포착 테스트 데이터

export interface SignalQuestion {
  id: number;
  question: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  options: Array<{
    text: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
    scores: { type1: number; type2: number; type3: number; type4: number; type5: number; type6: number; };
  }>;
}

export interface SignalResult {
  type: string;
  emoji: string;
  title: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  description: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  detectionRate: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  pros: Array<{ ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; }>;
  cons: Array<{ ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; }>;
  advice: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  emergency?: { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; };
  compatibility: { 
    best: string[] | { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; }; 
    good: string[] | { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; }; 
    careful: string[] | { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; }; 
    difficult: string[] | { ko: string; en: string; ja: string; 'zh-CN': string; 'zh-TW': string; id: string; vi: string; }; 
  };
}

// 12개 질문
export const signalQuestions: SignalQuestion[] = [
  {
    id: 1,
    question: {
      ko: '연인이 "아무거나 괜찮아"라고 말할 때, 실제 의미는?',
      en: 'When your partner says "Anything is fine", what does it really mean?',
      ja: '恋人が「何でもいいよ」と言う時、実際の意味は？',
      'zh-CN': '当恋人说"什么都可以"时，实际意思是？',
      'zh-TW': '當戀人說「什麼都可以」時，實際意思是？',
      id: 'Ketika pasangan berkata "Apa saja boleh", apa artinya sebenarnya?',
      vi: 'Khi người yêu nói "Gì cũng được", ý nghĩa thực sự là gì?'
    },
    options: [
      { 
        text: {
          ko: '정말 아무거나 괜찮다는 뜻',
          en: 'Really means anything is fine',
          ja: '本当に何でもいいという意味',
          'zh-CN': '真的什么都可以',
          'zh-TW': '真的什麼都可以',
          id: 'Benar-benar apa saja boleh',
          vi: 'Thực sự là gì cũng được'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '내가 결정해주길 원함',
          en: 'Wants me to decide',
          ja: '私が決めてほしい',
          'zh-CN': '希望我来决定',
          'zh-TW': '希望我來決定',
          id: 'Ingin saya yang memutuskan',
          vi: 'Muốn tôi quyết định'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '사실 먹고 싶은 게 있지만 배려 중',
          en: 'Actually has preference but being considerate',
          ja: '実は食べたいものがあるが配慮中',
          'zh-CN': '其实想吃什么但在体贴',
          'zh-TW': '其實想吃什麼但在體貼',
          id: 'Sebenarnya ada yang ingin dimakan tapi sedang mempertimbangkan',
          vi: 'Thực ra có thứ muốn ăn nhưng đang quan tâm'
        }, 
        scores: { type1: 0, type2: 3, type3: 0, type4: 2, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '기분이 안 좋을 수도 있음',
          en: 'Might be in a bad mood',
          ja: '気分が良くないかもしれない',
          'zh-CN': '可能心情不好',
          'zh-TW': '可能心情不好',
          id: 'Mungkin sedang tidak mood',
          vi: 'Có thể đang tâm trạng không tốt'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 } 
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: '연인이 갑자기 스킨십을 줄인다면?',
      en: 'If your partner suddenly reduces physical affection?',
      ja: '恋人が突然スキンシップを減らしたら？',
      'zh-CN': '如果恋人突然减少身体接触？',
      'zh-TW': '如果戀人突然減少身體接觸？',
      id: 'Jika pasangan tiba-tiba mengurangi skinship?',
      vi: 'Nếu người yêu đột ngột giảm sự thân mật?'
    },
    options: [
      { 
        text: {
          ko: '바빠서 피곤해서 그런 것',
          en: 'Just busy and tired',
          ja: '忙しくて疲れているだけ',
          'zh-CN': '只是忙和累',
          'zh-TW': '只是忙和累',
          id: 'Hanya sibuk dan lelah',
          vi: 'Chỉ là bận và mệt'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '관계에 문제가 생긴 신호',
          en: 'Signal of relationship problem',
          ja: '関係に問題が生じた信号',
          'zh-CN': '关系出现问题的信号',
          'zh-TW': '關係出現問題的信號',
          id: 'Sinyal masalah dalam hubungan',
          vi: 'Tín hiệu có vấn đề trong mối quan hệ'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 3, type6: 0 } 
      },
      { 
        text: {
          ko: '조심스럽게 대화 시도',
          en: 'Try to talk carefully',
          ja: '慎重に会話を試みる',
          'zh-CN': '小心尝试对话',
          'zh-TW': '小心嘗試對話',
          id: 'Coba bicara dengan hati-hati',
          vi: 'Thử nói chuyện cẩn thận'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 2, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '일단 지켜봄',
          en: 'Just wait and see',
          ja: 'とりあえず様子を見る',
          'zh-CN': '先观察看看',
          'zh-TW': '先觀察看看',
          id: 'Lihat dulu situasinya',
          vi: 'Quan sát trước'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 2 } 
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: '"나 오늘 힘들었어"라는 말에 어떻게 반응?',
      en: 'How do you respond to "I had a tough day today"?',
      ja: '「今日大変だった」という言葉にどう反応する？',
      'zh-CN': '对"我今天很辛苦"这句话如何反应？',
      'zh-TW': '對「我今天很辛苦」這句話如何反應？',
      id: 'Bagaimana Anda merespons "Hari ini berat"?',
      vi: 'Bạn phản ứng thế nào với "Hôm nay mệt quá"?'
    },
    options: [
      { 
        text: {
          ko: '"무슨 일 있었어?" 물어봄',
          en: 'Ask "What happened?"',
          ja: '「何があったの？」と聞く',
          'zh-CN': '问"发生什么事了？"',
          'zh-TW': '問「發生什麼事了？」',
          id: 'Tanya "Ada apa?"',
          vi: 'Hỏi "Chuyện gì thế?"'
        }, 
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '"고생했어" 위로',
          en: 'Comfort with "You did well"',
          ja: '「お疲れ様」と慰める',
          'zh-CN': '"辛苦了"安慰',
          'zh-TW': '「辛苦了」安慰',
          id: 'Hibur dengan "Sudah kerja keras"',
          vi: 'An ủi "Vất vả rồi"'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 3, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '해결책 제시',
          en: 'Offer solutions',
          ja: '解決策を提示',
          'zh-CN': '提供解决方案',
          'zh-TW': '提供解決方案',
          id: 'Tawarkan solusi',
          vi: 'Đưa ra giải pháp'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 3, type6: 0 } 
      },
      { 
        text: {
          ko: '그냥 들어줌',
          en: 'Just listen',
          ja: 'ただ聞いてあげる',
          'zh-CN': '只是倾听',
          'zh-TW': '只是傾聽',
          id: 'Hanya mendengarkan',
          vi: 'Chỉ lắng nghe'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 2, type5: 0, type6: 0 } 
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: '연인이 당신 SNS에 갑자기 댓글을 많이 달면?',
      en: 'If your partner suddenly comments a lot on your SNS?',
      ja: '恋人があなたのSNSに突然コメントをたくさんつけたら？',
      'zh-CN': '如果恋人突然在你的社交媒体上评论很多？',
      'zh-TW': '如果戀人突然在你的社交媒體上評論很多？',
      id: 'Jika pasangan tiba-tiba banyak berkomentar di SNS Anda?',
      vi: 'Nếu người yêu đột ngột comment nhiều trên mạng xã hội của bạn?'
    },
    options: [
      { 
        text: {
          ko: '그냥 심심해서',
          en: 'Just bored',
          ja: 'ただ暇だから',
          'zh-CN': '只是无聊',
          'zh-TW': '只是無聊',
          id: 'Hanya bosan',
          vi: 'Chỉ vì buồn'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '관심 표현',
          en: 'Showing interest',
          ja: '関心の表現',
          'zh-CN': '表达关心',
          'zh-TW': '表達關心',
          id: 'Menunjukkan perhatian',
          vi: 'Thể hiện sự quan tâm'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '뭔가 서운한 일 있었나 확인',
          en: 'Check if something upset them',
          ja: '何か不満があったか確認',
          'zh-CN': '确认是否有不高兴的事',
          'zh-TW': '確認是否有不高興的事',
          id: 'Cek apakah ada yang mengganggu',
          vi: 'Kiểm tra có chuyện gì buồn không'
        }, 
        scores: { type1: 3, type2: 2, type3: 0, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '특별한 의미 없음',
          en: 'No special meaning',
          ja: '特別な意味はない',
          'zh-CN': '没有特别意义',
          'zh-TW': '沒有特別意義',
          id: 'Tidak ada arti khusus',
          vi: 'Không có ý nghĩa đặc biệt'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 3, type6: 0 } 
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: '데이트 중 연인이 시계를 자주 본다면?',
      en: 'If your partner keeps checking the time during a date?',
      ja: 'デート中に恋人が時計を頻繁に見たら？',
      'zh-CN': '约会时恋人频繁看表？',
      'zh-TW': '約會時戀人頻繁看錶？',
      id: 'Jika pasangan sering melihat jam saat kencan?',
      vi: 'Nếu người yêu thường xuyên xem đồng hồ khi hẹn hò?'
    },
    options: [
      { 
        text: {
          ko: '시간 확인하는 것뿐',
          en: 'Just checking the time',
          ja: '時間確認しているだけ',
          'zh-CN': '只是确认时间',
          'zh-TW': '只是確認時間',
          id: 'Hanya mengecek waktu',
          vi: 'Chỉ kiểm tra giờ'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '다른 약속 생각 중',
          en: 'Thinking about other plans',
          ja: '他の約束を考え中',
          'zh-CN': '在想其他约定',
          'zh-TW': '在想其他約定',
          id: 'Memikirkan janji lain',
          vi: 'Đang nghĩ về hẹn khác'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 2, type6: 0 } 
      },
      { 
        text: {
          ko: '지루해하는 신호',
          en: 'Signal of boredom',
          ja: '退屈している信号',
          'zh-CN': '无聊的信号',
          'zh-TW': '無聊的信號',
          id: 'Sinyal bosan',
          vi: 'Tín hiệu chán'
        }, 
        scores: { type1: 0, type2: 3, type3: 0, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '걱정거리가 있음',
          en: 'Has something to worry about',
          ja: '心配事がある',
          'zh-CN': '有担心的事',
          'zh-TW': '有擔心的事',
          id: 'Ada yang dikhawatirkan',
          vi: 'Có chuyện lo lắng'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 2, type5: 0, type6: 0 } 
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: '"요즘 바빠?"라는 메시지의 진짜 의미는?',
      en: 'What\'s the real meaning of "Are you busy these days?"',
      ja: '「最近忙しい？」というメッセージの本当の意味は？',
      'zh-CN': '"最近忙吗？"这条消息的真正意思是？',
      'zh-TW': '「最近忙嗎？」這條訊息的真正意思是？',
      id: 'Apa arti sebenarnya dari pesan "Sibuk akhir-akhir ini?"',
      vi: 'Ý nghĩa thực sự của tin nhắn "Dạo này bận không?"'
    },
    options: [
      { 
        text: {
          ko: '정말 바쁜지 궁금함',
          en: 'Really curious if busy',
          ja: '本当に忙しいか気になる',
          'zh-CN': '真的好奇是否忙',
          'zh-TW': '真的好奇是否忙',
          id: 'Benar-benar penasaran apakah sibuk',
          vi: 'Thực sự tò mò có bận không'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 3, type6: 0 } 
      },
      { 
        text: {
          ko: '만나고 싶다는 뜻',
          en: 'Means wanting to meet',
          ja: '会いたいという意味',
          'zh-CN': '意思是想见面',
          'zh-TW': '意思是想見面',
          id: 'Artinya ingin bertemu',
          vi: 'Có nghĩa là muốn gặp'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 2, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '연락 적은 거 서운함',
          en: 'Upset about less contact',
          ja: '連絡が少なくて寂しい',
          'zh-CN': '对联系少感到难过',
          'zh-TW': '對聯繫少感到難過',
          id: 'Sedih karena jarang kontak',
          vi: 'Buồn vì ít liên lạc'
        }, 
        scores: { type1: 0, type2: 3, type3: 0, type4: 2, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '그냥 안부 인사',
          en: 'Just saying hi',
          ja: 'ただの挨拶',
          'zh-CN': '只是问候',
          'zh-TW': '只是問候',
          id: 'Hanya sapa',
          vi: 'Chỉ chào hỏi'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: '연인이 당신 친구에게 관심을 보이면?',
      en: 'If your partner shows interest in your friends?',
      ja: '恋人があなたの友達に関心を示したら？',
      'zh-CN': '如果恋人对你的朋友表现出兴趣？',
      'zh-TW': '如果戀人對你的朋友表現出興趣？',
      id: 'Jika pasangan menunjukkan minat pada teman Anda?',
      vi: 'Nếu người yêu quan tâm đến bạn bè của bạn?'
    },
    options: [
      { 
        text: {
          ko: '사교적이어서',
          en: 'Being sociable',
          ja: '社交的だから',
          'zh-CN': '因为善于社交',
          'zh-TW': '因為善於社交',
          id: 'Karena supel',
          vi: 'Vì hòa đồng'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '당신에 대해 더 알고 싶어서',
          en: 'Wants to know more about you',
          ja: 'あなたのことをもっと知りたくて',
          'zh-CN': '想更多了解你',
          'zh-TW': '想更多了解你',
          id: 'Ingin tahu lebih banyak tentang Anda',
          vi: 'Muốn hiểu thêm về bạn'
        }, 
        scores: { type1: 3, type2: 2, type3: 0, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '질투 유발?',
          en: 'Making you jealous?',
          ja: '嫉妬を誘っている？',
          'zh-CN': '引起嫉妒？',
          'zh-TW': '引起嫉妒？',
          id: 'Membuat cemburu?',
          vi: 'Gây ghen?'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 3, type6: 0 } 
      },
      { 
        text: {
          ko: '특별한 의미 없음',
          en: 'No special meaning',
          ja: '特別な意味はない',
          'zh-CN': '没有特别意义',
          'zh-TW': '沒有特別意義',
          id: 'Tidak ada arti khusus',
          vi: 'Không có ý nghĩa đặc biệt'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 } 
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: '"괜찮아, 화 안 났어"라고 말할 때?',
      en: 'When they say "I\'m fine, not angry"?',
      ja: '「大丈夫、怒ってない」と言う時？',
      'zh-CN': '当说"没事，没生气"时？',
      'zh-TW': '當說「沒事，沒生氣」時？',
      id: 'Ketika berkata "Tidak apa-apa, tidak marah"?',
      vi: 'Khi nói "Không sao, không giận đâu"?'
    },
    options: [
      { 
        text: {
          ko: '정말 괜찮은 것',
          en: 'Really fine',
          ja: '本当に大丈夫',
          'zh-CN': '真的没事',
          'zh-TW': '真的沒事',
          id: 'Benar-benar tidak apa-apa',
          vi: 'Thực sự không sao'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '화났지만 참는 중',
          en: 'Angry but holding it in',
          ja: '怒っているが我慢中',
          'zh-CN': '生气但在忍着',
          'zh-TW': '生氣但在忍著',
          id: 'Marah tapi menahan',
          vi: 'Giận nhưng đang nhịn'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '대화하고 싶지 않음',
          en: 'Doesn\'t want to talk',
          ja: '話したくない',
          'zh-CN': '不想说话',
          'zh-TW': '不想說話',
          id: 'Tidak ingin bicara',
          vi: 'Không muốn nói chuyện'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '시간 필요함',
          en: 'Needs time',
          ja: '時間が必要',
          'zh-CN': '需要时间',
          'zh-TW': '需要時間',
          id: 'Butuh waktu',
          vi: 'Cần thời gian'
        }, 
        scores: { type1: 0, type2: 3, type3: 0, type4: 3, type5: 0, type6: 0 } 
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: '연인이 좋아하는 음식을 기억하고 준비해왔다면?',
      en: 'If your partner remembers and prepares your favorite food?',
      ja: '恋人が好きな食べ物を覚えて準備してきたら？',
      'zh-CN': '如果恋人记住并准备了你喜欢的食物？',
      'zh-TW': '如果戀人記住並準備了你喜歡的食物？',
      id: 'Jika pasangan mengingat dan menyiapkan makanan favorit Anda?',
      vi: 'Nếu người yêu nhớ và chuẩn bị món ăn yêu thích của bạn?'
    },
    options: [
      { 
        text: {
          ko: '우연의 일치',
          en: 'Just a coincidence',
          ja: '偶然の一致',
          'zh-CN': '只是巧合',
          'zh-TW': '只是巧合',
          id: 'Hanya kebetulan',
          vi: 'Chỉ là trùng hợp'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '세심한 배려와 애정',
          en: 'Thoughtful care and affection',
          ja: '細やかな配慮と愛情',
          'zh-CN': '细心的关怀和爱意',
          'zh-TW': '細心的關懷和愛意',
          id: 'Perhatian dan kasih sayang yang detail',
          vi: 'Sự quan tâm và tình cảm tỉ mỉ'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 2, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '평소에 하던 행동',
          en: 'Usual behavior',
          ja: '普段の行動',
          'zh-CN': '平时的行为',
          'zh-TW': '平時的行為',
          id: 'Perilaku biasa',
          vi: 'Hành vi thường ngày'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 3, type6: 0 } 
      },
      { 
        text: {
          ko: '특별한 날이라서',
          en: 'Because it\'s a special day',
          ja: '特別な日だから',
          'zh-CN': '因为是特别的日子',
          'zh-TW': '因為是特別的日子',
          id: 'Karena hari spesial',
          vi: 'Vì là ngày đặc biệt'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 2 } 
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: '대화 중 눈을 마주치지 않는다면?',
      en: 'If they don\'t make eye contact during conversation?',
      ja: '会話中に目を合わせないなら？',
      'zh-CN': '对话时不看眼睛？',
      'zh-TW': '對話時不看眼睛？',
      id: 'Jika tidak menatap mata saat berbicara?',
      vi: 'Nếu không nhìn mắt khi nói chuyện?'
    },
    options: [
      { 
        text: {
          ko: '원래 그런 스타일',
          en: 'That\'s their style',
          ja: '元々そういうスタイル',
          'zh-CN': '本来就是那样的风格',
          'zh-TW': '本來就是那樣的風格',
          id: 'Memang gayanya begitu',
          vi: 'Vốn dĩ phong cách vậy'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 2 } 
      },
      { 
        text: {
          ko: '불편한 주제',
          en: 'Uncomfortable topic',
          ja: '不快な話題',
          'zh-CN': '不舒服的话题',
          'zh-TW': '不舒服的話題',
          id: 'Topik yang tidak nyaman',
          vi: 'Chủ đề không thoải mái'
        }, 
        scores: { type1: 0, type2: 3, type3: 0, type4: 2, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '숨기는 게 있음',
          en: 'Hiding something',
          ja: '隠し事がある',
          'zh-CN': '有隐瞒的事',
          'zh-TW': '有隱瞞的事',
          id: 'Menyembunyikan sesuatu',
          vi: 'Đang giấu điều gì đó'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '집중 안 함',
          en: 'Not focused',
          ja: '集中していない',
          'zh-CN': '不专注',
          'zh-TW': '不專注',
          id: 'Tidak fokus',
          vi: 'Không tập trung'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: '"나 살찐 것 같아"라고 말하면?',
      en: 'When they say "I think I gained weight"?',
      ja: '「太ったかも」と言ったら？',
      'zh-CN': '当说"我好像胖了"？',
      'zh-TW': '當說「我好像胖了」？',
      id: 'Ketika berkata "Aku kayaknya gemukan"?',
      vi: 'Khi nói "Mình hình như béo lên rồi"?'
    },
    options: [
      { 
        text: {
          ko: '"아니야" 부정',
          en: 'Deny "No you\'re not"',
          ja: '「そんなことない」否定',
          'zh-CN': '"不是"否定',
          'zh-TW': '「不是」否定',
          id: 'Menyangkal "Tidak kok"',
          vi: 'Phủ nhận "Không đâu"'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 3, type6: 0 } 
      },
      { 
        text: {
          ko: '"예쁜데/멋있는데" 칭찬',
          en: 'Compliment "You\'re beautiful/handsome"',
          ja: '「かわいい/かっこいい」褒める',
          'zh-CN': '"漂亮/帅"称赞',
          'zh-TW': '「漂亮/帥」稱讚',
          id: 'Puji "Kamu cantik/ganteng"',
          vi: 'Khen "Đẹp/đẹp trai mà"'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 3, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '"운동하자" 제안',
          en: 'Suggest "Let\'s exercise"',
          ja: '「運動しよう」提案',
          'zh-CN': '"一起运动吧"建议',
          'zh-TW': '「一起運動吧」建議',
          id: 'Sarankan "Ayo olahraga"',
          vi: 'Đề nghị "Tập thể dục đi"'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '"그래?" 솔직하게',
          en: 'Honestly "Really?"',
          ja: '「そう？」正直に',
          'zh-CN': '"是吗？"诚实',
          'zh-TW': '「是嗎？」誠實',
          id: 'Jujur "Benarkah?"',
          vi: 'Thành thật "Thật à?"'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 } 
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: '연락 없이 갑자기 집 앞에 나타나면?',
      en: 'If they suddenly appear at your home without notice?',
      ja: '連絡なしに突然家の前に現れたら？',
      'zh-CN': '如果突然不打招呼出现在家门前？',
      'zh-TW': '如果突然不打招呼出現在家門前？',
      id: 'Jika tiba-tiba muncul di depan rumah tanpa pemberitahuan?',
      vi: 'Nếu đột ngột xuất hiện trước nhà mà không báo trước?'
    },
    options: [
      { 
        text: {
          ko: '깜짝 이벤트',
          en: 'Surprise event',
          ja: 'サプライズイベント',
          'zh-CN': '惊喜活动',
          'zh-TW': '驚喜活動',
          id: 'Event kejutan',
          vi: 'Sự kiện bất ngờ'
        }, 
        scores: { type1: 0, type2: 0, type3: 3, type4: 0, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '보고 싶어서 참을 수 없었음',
          en: 'Couldn\'t resist wanting to see you',
          ja: '会いたくて我慢できなかった',
          'zh-CN': '想见你忍不住了',
          'zh-TW': '想見你忍不住了',
          id: 'Tidak tahan ingin bertemu',
          vi: 'Không thể nhịn được muốn gặp'
        }, 
        scores: { type1: 3, type2: 0, type3: 0, type4: 3, type5: 0, type6: 0 } 
      },
      { 
        text: {
          ko: '우연히 근처 왔음',
          en: 'Happened to be nearby',
          ja: 'たまたま近くに来た',
          'zh-CN': '正好来附近',
          'zh-TW': '正好來附近',
          id: 'Kebetulan lewat dekat sini',
          vi: 'Tình cờ đi gần đây'
        }, 
        scores: { type1: 0, type2: 0, type3: 0, type4: 0, type5: 0, type6: 3 } 
      },
      { 
        text: {
          ko: '걱정돼서 확인',
          en: 'Worried and checking',
          ja: '心配で確認',
          'zh-CN': '担心所以确认',
          'zh-TW': '擔心所以確認',
          id: 'Khawatir jadi mengecek',
          vi: 'Lo lắng nên kiểm tra'
        }, 
        scores: { type1: 0, type2: 3, type3: 0, type4: 2, type5: 0, type6: 0 } 
      }
    ]
  }
];

// 6가지 결과
export const signalResults: SignalResult[] = [
  {
    type: 'type1',
    emoji: '🔮',
    title: {
      ko: '신호 포착 천재',
      en: 'Signal Detection Genius',
      ja: '信号捕捉の天才',
      'zh-CN': '信号捕捉天才',
      'zh-TW': '信號捕捉天才',
      id: 'Jenius Deteksi Sinyal',
      vi: 'Thiên Tài Phát Hiện Tín Hiệu'
    },
    description: {
      ko: '연인의 마음을 꿰뚫어보는 마스터! 비언어 신호 95% 포착하며 미묘한 감정 변화를 즉시 감지합니다. 말하지 않아도 상대가 원하는 것을 먼저 알아채는 텔레파시 소유자입니다. 깊은 유대감과 섬세한 케어로 완벽한 관계를 만들지만, 과도한 분석으로 스트레스받을 수 있습니다.',
      en: 'Master of reading your lover\'s mind! Captures 95% of non-verbal signals and instantly detects subtle emotional changes. A telepathy owner who knows what the other wants without words. Creates perfect relationships with deep bonds and delicate care, but may stress from over-analysis.',
      ja: '恋人の心を見通すマスター！非言語信号を95%キャッチし、微妙な感情の変化を即座に検知します。言わなくても相手が望むことを先に察するテレパシーの持ち主です。深い絆と繊細なケアで完璧な関係を作りますが、過度な分析でストレスを受けることがあります。',
      'zh-CN': '看透恋人心思的大师！捕捉95%的非语言信号，立即察觉微妙的情绪变化。不用说话就能先察觉对方想要什么的心灵感应者。用深厚的纽带和细腻的关怀创造完美关系，但可能因过度分析而感到压力。',
      'zh-TW': '看透戀人心思的大師！捕捉95%的非語言信號，立即察覺微妙的情緒變化。不用說話就能先察覺對方想要什麼的心靈感應者。用深厚的紐帶和細膩的關懷創造完美關係，但可能因過度分析而感到壓力。',
      id: 'Master membaca pikiran kekasih! Menangkap 95% sinyal non-verbal dan langsung mendeteksi perubahan emosi yang halus. Pemilik telepati yang tahu apa yang diinginkan pasangan tanpa kata-kata. Menciptakan hubungan sempurna dengan ikatan mendalam dan perhatian halus, tapi mungkin stres karena analisis berlebihan.',
      vi: 'Bậc thầy đọc vị tâm lý người yêu! Bắt được 95% tín hiệu phi ngôn ngữ và phát hiện ngay những thay đổi cảm xúc tinh tế. Người sở hữu thần giao cách cảm, biết điều đối phương muốn mà không cần nói. Tạo mối quan hệ hoàn hảo với sự gắn kết sâu sắc và chăm sóc tỉ mỉ, nhưng có thể căng thẳng vì phân tích quá mức.'
    },
    detectionRate: {
      ko: '신호 포착률 95%',
      en: 'Detection Rate 95%',
      ja: '信号捕捉率95%',
      'zh-CN': '信号捕捉率95%',
      'zh-TW': '信號捕捉率95%',
      id: 'Tingkat Deteksi 95%',
      vi: 'Tỷ lệ phát hiện 95%'
    },
    pros: [
      { ko: '깊은 이해', en: 'Deep understanding', ja: '深い理解', 'zh-CN': '深刻理解', 'zh-TW': '深刻理解', id: 'Pemahaman mendalam', vi: 'Hiểu biết sâu sắc' },
      { ko: '섬세함', en: 'Delicacy', ja: '繊細さ', 'zh-CN': '细腻', 'zh-TW': '細膩', id: 'Kehalusan', vi: 'Tinh tế' },
      { ko: '갈등 예방', en: 'Conflict prevention', ja: '対立予防', 'zh-CN': '预防冲突', 'zh-TW': '預防衝突', id: 'Pencegahan konflik', vi: 'Phòng ngừa xung đột' },
      { ko: '케어 능력', en: 'Care ability', ja: 'ケア能力', 'zh-CN': '关怀能力', 'zh-TW': '關懷能力', id: 'Kemampuan merawat', vi: 'Khả năng chăm sóc' }
    ],
    cons: [
      { ko: '지나친 분석', en: 'Over-analysis', ja: '過度な分析', 'zh-CN': '过度分析', 'zh-TW': '過度分析', id: 'Analisis berlebihan', vi: 'Phân tích quá mức' },
      { ko: '스트레스', en: 'Stress', ja: 'ストレス', 'zh-CN': '压力', 'zh-TW': '壓力', id: 'Stres', vi: 'Căng thẳng' },
      { ko: '과도한 걱정', en: 'Excessive worry', ja: '過度な心配', 'zh-CN': '过度担心', 'zh-TW': '過度擔心', id: 'Kekhawatiran berlebihan', vi: 'Lo lắng quá mức' }
    ],
    advice: {
      ko: '가끔은 직접 물어보는 것도 좋아요. 모든 신호에 반응하지 않아도 됩니다. 지나친 해석은 오해를 만들 수 있어요.',
      en: 'It\'s good to ask directly sometimes. You don\'t have to respond to every signal. Over-interpretation can create misunderstandings.',
      ja: 'たまには直接聞くのも良いですよ。すべての信号に反応する必要はありません。過度な解釈は誤解を招くことがあります。',
      'zh-CN': '有时直接问也很好。不必对每个信号都做出反应。过度解读可能造成误解。',
      'zh-TW': '有時直接問也很好。不必對每個信號都做出反應。過度解讀可能造成誤解。',
      id: 'Kadang bertanya langsung juga baik. Tidak perlu merespons setiap sinyal. Interpretasi berlebihan bisa menciptakan kesalahpahaman.',
      vi: 'Đôi khi hỏi trực tiếp cũng tốt. Bạn không cần phản ứng với mọi tín hiệu. Giải thích quá mức có thể tạo hiểu lầm.'
    },
    compatibility: {
      best: ['type4'],
      good: ['type2', 'type3'],
      careful: ['type5'],
      difficult: ['type6']
    }
  },
  {
    type: 'type2',
    emoji: '👀',
    title: {
      ko: '센스있는 관찰형',
      en: 'Sensible Observer',
      ja: 'センスある観察型',
      'zh-CN': '敏锐观察型',
      'zh-TW': '敏銳觀察型',
      id: 'Pengamat Peka',
      vi: 'Người Quan Sát Tinh Tế'
    },
    description: {
      ko: '대부분의 신호를 잘 캐치하는 믿음직한 연인! 주요 신호 80% 포착하며 관찰력과 경청 능력이 우수합니다. 적절한 타이밍에 반응하고 균형 잡힌 소통 스타일을 가졌습니다. 안정적이고 실수가 적어 신뢰감을 주지만 가끔 놓치는 것이 있을 수 있습니다.',
      en: 'Reliable lover who catches most signals! Captures 80% of key signals with excellent observation and listening skills. Responds at appropriate timing with balanced communication style. Stable with few mistakes and trustworthy, but may occasionally miss things.',
      ja: 'ほとんどの信号をよくキャッチする信頼できる恋人！主要信号を80%キャッチし、観察力と傾聴能力に優れています。適切なタイミングで反応し、バランスの取れたコミュニケーションスタイルを持っています。安定していてミスが少なく信頼感を与えますが、たまに見逃すことがあるかもしれません。',
      'zh-CN': '能捕捉大多数信号的可靠恋人！捕捉80%的关键信号，观察力和倾听能力优秀。在适当时机反应，拥有平衡的沟通风格。稳定且失误少，值得信赖，但偶尔可能会遗漏。',
      'zh-TW': '能捕捉大多數信號的可靠戀人！捕捉80%的關鍵信號，觀察力和傾聽能力優秀。在適當時機反應，擁有平衡的溝通風格。穩定且失誤少，值得信賴，但偶爾可能會遺漏。',
      id: 'Kekasih yang dapat diandalkan yang menangkap sebagian besar sinyal! Menangkap 80% sinyal utama dengan keterampilan observasi dan mendengarkan yang sangat baik. Merespons pada waktu yang tepat dengan gaya komunikasi yang seimbang. Stabil dengan sedikit kesalahan dan dapat dipercaya, tapi kadang mungkin melewatkan sesuatu.',
      vi: 'Người yêu đáng tin cậy bắt được hầu hết tín hiệu! Bắt được 80% tín hiệu chính với kỹ năng quan sát và lắng nghe xuất sắc. Phản ứng đúng thời điểm với phong cách giao tiếp cân bằng. Ổn định với ít sai lầm và đáng tin, nhưng đôi khi có thể bỏ lỡ.'
    },
    detectionRate: {
      ko: '신호 포착률 80%',
      en: 'Detection Rate 80%',
      ja: '信号捕捉率80%',
      'zh-CN': '信号捕捉率80%',
      'zh-TW': '信號捕捉率80%',
      id: 'Tingkat Deteksi 80%',
      vi: 'Tỷ lệ phát hiện 80%'
    },
    pros: [
      { ko: '안정적', en: 'Stable', ja: '安定的', 'zh-CN': '稳定', 'zh-TW': '穩定', id: 'Stabil', vi: 'Ổn định' },
      { ko: '신뢰감', en: 'Trustworthy', ja: '信頼感', 'zh-CN': '可信赖', 'zh-TW': '可信賴', id: 'Dapat dipercaya', vi: 'Đáng tin' },
      { ko: '실수 적음', en: 'Few mistakes', ja: 'ミスが少ない', 'zh-CN': '失误少', 'zh-TW': '失誤少', id: 'Sedikit kesalahan', vi: 'Ít sai lầm' },
      { ko: '균형감', en: 'Balance', ja: 'バランス感', 'zh-CN': '平衡感', 'zh-TW': '平衡感', id: 'Keseimbangan', vi: 'Cân bằng' }
    ],
    cons: [
      { ko: '가끔 놓침', en: 'Occasionally miss', ja: 'たまに見逃す', 'zh-CN': '偶尔遗漏', 'zh-TW': '偶爾遺漏', id: 'Kadang terlewat', vi: 'Thỉnh thoảng bỏ lỡ' },
      { ko: '완벽하지 않음', en: 'Not perfect', ja: '完璧ではない', 'zh-CN': '不完美', 'zh-TW': '不完美', id: 'Tidak sempurna', vi: 'Không hoàn hảo' }
    ],
    advice: {
      ko: '현재 능력으로도 충분해요! 작은 변화에도 관심 갖고, 불확실하면 물어보는 게 최고입니다.',
      en: 'Your current ability is enough! Pay attention to small changes, and when uncertain, asking is the best.',
      ja: '現在の能力でも十分です！小さな変化にも関心を持ち、不確かな時は聞くのが一番です。',
      'zh-CN': '目前的能力已经足够了！关注小变化，不确定时问一问是最好的。',
      'zh-TW': '目前的能力已經足夠了！關注小變化，不確定時問一問是最好的。',
      id: 'Kemampuan saat ini sudah cukup! Perhatikan perubahan kecil, dan jika tidak yakin, bertanya adalah yang terbaik.',
      vi: 'Khả năng hiện tại đã đủ rồi! Chú ý đến những thay đổi nhỏ, và khi không chắc, hỏi là tốt nhất.'
    },
    compatibility: {
      best: ['type3'],
      good: { ko: '모든 타입과 무난', en: 'Good with all types', ja: '全タイプと無難', 'zh-CN': '与所有类型都不错', 'zh-TW': '與所有類型都不錯', id: 'Baik dengan semua tipe', vi: 'Ổn với mọi loại' },
      careful: ['type1'],
      difficult: { ko: '없음', en: 'None', ja: 'なし', 'zh-CN': '无', 'zh-TW': '無', id: 'Tidak ada', vi: 'Không có' }
    }
  },
  {
    type: 'type3',
    emoji: '💬',
    title: {
      ko: '평범한 소통형',
      en: 'Direct Communicator',
      ja: '平凡なコミュニケーション型',
      'zh-CN': '普通沟通型',
      'zh-TW': '普通溝通型',
      id: 'Komunikator Langsung',
      vi: 'Người Giao Tiếp Trực Tiếp'
    },
    description: {
      ko: '보통 수준의 신호 감지, 직접 소통 선호! 명확한 신호 60% 포착하며 직접적 대화를 선호합니다. 불확실하면 질문하는 솔직한 소통 스타일입니다. 오해가 적고 명확하며 편안하지만 미묘한 신호를 놓칠 수 있습니다. "무슨 일 있어?"는 마법의 질문입니다.',
      en: 'Average signal detection, prefers direct communication! Captures 60% of clear signals and prefers direct conversation. Honest communication style that asks when uncertain. Few misunderstandings, clear and comfortable, but may miss subtle signals. "What\'s wrong?" is the magic question.',
      ja: '平均レベルの信号検知、直接コミュニケーションを好む！明確な信号を60%キャッチし、直接的な会話を好みます。不確かな時は質問する正直なコミュニケーションスタイルです。誤解が少なく明確で快適ですが、微妙な信号を見逃す可能性があります。「何かあった？」は魔法の質問です。',
      'zh-CN': '普通水平的信号检测，偏好直接沟通！捕捉60%的明确信号，偏好直接对话。不确定时会问的诚实沟通风格。误解少、明确且舒适，但可能错过微妙信号。"怎么了？"是魔法问题。',
      'zh-TW': '普通水平的信號檢測，偏好直接溝通！捕捉60%的明確信號，偏好直接對話。不確定時會問的誠實溝通風格。誤解少、明確且舒適，但可能錯過微妙信號。「怎麼了？」是魔法問題。',
      id: 'Deteksi sinyal tingkat rata-rata, lebih suka komunikasi langsung! Menangkap 60% sinyal jelas dan lebih suka percakapan langsung. Gaya komunikasi jujur yang bertanya saat tidak yakin. Sedikit kesalahpahaman, jelas dan nyaman, tapi mungkin melewatkan sinyal halus. "Ada apa?" adalah pertanyaan ajaib.',
      vi: 'Phát hiện tín hiệu mức trung bình, thích giao tiếp trực tiếp! Bắt được 60% tín hiệu rõ ràng và thích đối thoại trực tiếp. Phong cách giao tiếp thành thật, hỏi khi không chắc. Ít hiểu lầm, rõ ràng và thoải mái, nhưng có thể bỏ lỡ tín hiệu tinh tế. "Có chuyện gì vậy?" là câu hỏi thần kỳ.'
    },
    detectionRate: {
      ko: '신호 포착률 60%',
      en: 'Detection Rate 60%',
      ja: '信号捕捉率60%',
      'zh-CN': '信号捕捉率60%',
      'zh-TW': '信號捕捉率60%',
      id: 'Tingkat Deteksi 60%',
      vi: 'Tỷ lệ phát hiện 60%'
    },
    pros: [
      { ko: '오해 적음', en: 'Few misunderstandings', ja: '誤解が少ない', 'zh-CN': '误解少', 'zh-TW': '誤解少', id: 'Sedikit kesalahpahaman', vi: 'Ít hiểu lầm' },
      { ko: '명확함', en: 'Clear', ja: '明確', 'zh-CN': '明确', 'zh-TW': '明確', id: 'Jelas', vi: 'Rõ ràng' },
      { ko: '편안함', en: 'Comfortable', ja: '快適', 'zh-CN': '舒适', 'zh-TW': '舒適', id: 'Nyaman', vi: 'Thoải mái' },
      { ko: '솔직함', en: 'Honest', ja: '正直', 'zh-CN': '诚实', 'zh-TW': '誠實', id: 'Jujur', vi: 'Thành thật' }
    ],
    cons: [
      { ko: '미묘한 신호 놓침', en: 'Miss subtle signals', ja: '微妙な信号を見逃す', 'zh-CN': '错过微妙信号', 'zh-TW': '錯過微妙信號', id: 'Lewatkan sinyal halus', vi: 'Bỏ lỡ tín hiệu tinh tế' },
      { ko: '둔감해 보일 수 있음', en: 'May seem insensitive', ja: '鈍感に見えることがある', 'zh-CN': '可能显得迟钝', 'zh-TW': '可能顯得遲鈍', id: 'Mungkin terlihat tidak peka', vi: 'Có thể trông chậm hiểu' }
    ],
    advice: {
      ko: '직접 소통이 나쁜 건 아니에요! 비언어 신호도 연습해보세요. 상대방 표정과 말투 변화를 주목하세요.',
      en: 'Direct communication isn\'t bad! Practice non-verbal signals too. Pay attention to changes in expressions and tone.',
      ja: '直接コミュニケーションは悪くありません！非言語信号も練習してみてください。相手の表情や口調の変化に注目してください。',
      'zh-CN': '直接沟通不是坏事！也练习非语言信号。注意对方表情和语气的变化。',
      'zh-TW': '直接溝通不是壞事！也練習非語言信號。注意對方表情和語氣的變化。',
      id: 'Komunikasi langsung tidak buruk! Latih juga sinyal non-verbal. Perhatikan perubahan ekspresi dan nada bicara pasangan.',
      vi: 'Giao tiếp trực tiếp không tồi! Hãy luyện tập tín hiệu phi ngôn ngữ. Chú ý đến thay đổi biểu cảm và giọng điệu.'
    },
    compatibility: {
      best: ['type2'],
      good: ['type3', 'type5'],
      careful: ['type4'],
      difficult: ['type1']
    }
  },
  {
    type: 'type4',
    emoji: '💝',
    title: {
      ko: '온화한 공감형',
      en: 'Gentle Empathizer',
      ja: '温和な共感型',
      'zh-CN': '温和共情型',
      'zh-TW': '溫和共情型',
      id: 'Empati Lembut',
      vi: 'Người Đồng Cảm Ôn Hòa'
    },
    description: {
      ko: '신호보다 감정에 집중하는 따뜻한 연인! 감정적 신호 70% 포착하며 공감과 위로에 특화되어 있습니다. 분위기로 파악하고 따뜻한 반응을 보입니다. 정서적 안정감과 위로를 잘 주지만 논리적 신호를 놓치고 해결책이 부족할 수 있습니다.',
      en: 'Warm lover who focuses on emotions over signals! Captures 70% of emotional signals, specialized in empathy and comfort. Understands by atmosphere and shows warm responses. Good at providing emotional stability and comfort, but may miss logical signals and lack solutions.',
      ja: '信号より感情に集中する温かい恋人！感情的信号を70%キャッチし、共感と慰めに特化しています。雰囲気で把握し、温かい反応を示します。情緒的安定感と慰めを上手に与えますが、論理的信号を見逃し、解決策が不足することがあります。',
      'zh-CN': '关注情感而非信号的温暖恋人！捕捉70%的情感信号，专门擅长共情和安慰。通过氛围理解并展现温暖的反应。善于提供情感稳定和安慰，但可能错过逻辑信号，缺乏解决方案。',
      'zh-TW': '關注情感而非信號的溫暖戀人！捕捉70%的情感信號，專門擅長共情和安慰。通過氛圍理解並展現溫暖的反應。善於提供情感穩定和安慰，但可能錯過邏輯信號，缺乏解決方案。',
      id: 'Kekasih hangat yang fokus pada emosi daripada sinyal! Menangkap 70% sinyal emosional, spesialisasi empati dan penghiburan. Memahami dari suasana dan menunjukkan respons hangat. Baik dalam memberikan stabilitas emosional dan penghiburan, tapi mungkin melewatkan sinyal logis dan kurang solusi.',
      vi: 'Người yêu ấm áp tập trung vào cảm xúc hơn tín hiệu! Bắt được 70% tín hiệu cảm xúc, chuyên về đồng cảm và an ủi. Hiểu qua bầu không khí và có phản ứng ấm áp. Giỏi mang lại sự ổn định cảm xúc và an ủi, nhưng có thể bỏ lỡ tín hiệu logic và thiếu giải pháp.'
    },
    detectionRate: {
      ko: '감정 신호 70%',
      en: 'Emotional Signal 70%',
      ja: '感情信号70%',
      'zh-CN': '情感信号70%',
      'zh-TW': '情感信號70%',
      id: 'Sinyal Emosional 70%',
      vi: 'Tín hiệu cảm xúc 70%'
    },
    pros: [
      { ko: '정서적 안정감', en: 'Emotional stability', ja: '情緒的安定感', 'zh-CN': '情感稳定', 'zh-TW': '情感穩定', id: 'Stabilitas emosional', vi: 'Ổn định cảm xúc' },
      { ko: '위로 능력', en: 'Comforting ability', ja: '慰める能力', 'zh-CN': '安慰能力', 'zh-TW': '安慰能力', id: 'Kemampuan menghibur', vi: 'Khả năng an ủi' },
      { ko: '따뜻함', en: 'Warmth', ja: '温かさ', 'zh-CN': '温暖', 'zh-TW': '溫暖', id: 'Kehangatan', vi: 'Ấm áp' },
      { ko: '공감', en: 'Empathy', ja: '共感', 'zh-CN': '共情', 'zh-TW': '共情', id: 'Empati', vi: 'Đồng cảm' }
    ],
    cons: [
      { ko: '논리적 신호 놓침', en: 'Miss logical signals', ja: '論理的信号を見逃す', 'zh-CN': '错过逻辑信号', 'zh-TW': '錯過邏輯信號', id: 'Lewatkan sinyal logis', vi: 'Bỏ lỡ tín hiệu logic' },
      { ko: '해결책 부족', en: 'Lack of solutions', ja: '解決策不足', 'zh-CN': '缺乏解决方案', 'zh-TW': '缺乏解決方案', id: 'Kurang solusi', vi: 'Thiếu giải pháp' }
    ],
    advice: {
      ko: '공감이 가장 중요한 신호예요! 실질적 도움도 필요합니다. "어떻게 하면 좋을까?" 물어보세요.',
      en: 'Empathy is the most important signal! Practical help is also needed. Ask "What can I do to help?"',
      ja: '共感が最も重要な信号です！実質的な助けも必要です。「どうすればいいかな？」と聞いてください。',
      'zh-CN': '共情是最重要的信号！实际帮助也是必要的。问"怎么办好呢？"',
      'zh-TW': '共情是最重要的信號！實際幫助也是必要的。問「怎麼辦好呢？」',
      id: 'Empati adalah sinyal paling penting! Bantuan praktis juga diperlukan. Tanya "Bagaimana sebaiknya?"',
      vi: 'Đồng cảm là tín hiệu quan trọng nhất! Cũng cần giúp đỡ thực tế. Hỏi "Làm thế nào thì tốt?"'
    },
    compatibility: {
      best: ['type1'],
      good: ['type2', 'type4'],
      careful: ['type3'],
      difficult: ['type6']
    }
  },
  {
    type: 'type5',
    emoji: '🌱',
    title: {
      ko: '서툰 초보형',
      en: 'Clumsy Beginner',
      ja: '不器用な初心者型',
      'zh-CN': '笨拙新手型',
      'zh-TW': '笨拙新手型',
      id: 'Pemula Canggung',
      vi: 'Người Mới Còn Vụng'
    },
    description: {
      ko: '아직 신호 읽기가 어려운 솔직한 당신! 명확한 신호만 40% 포착하며 눈치가 부족한 편입니다. 선의는 있지만 실수가 많고 배우려는 의지가 있습니다. 솔직하고 순수하며 발전 가능성이 있지만 자주 놓치고 오해가 발생합니다.',
      en: 'Honest you who still finds signal reading difficult! Captures only 40% of clear signals and lacks awareness. Has good intentions but makes many mistakes and willing to learn. Honest and pure with potential for growth, but often misses and creates misunderstandings.',
      ja: 'まだ信号を読むのが難しい正直なあなた！明確な信号だけを40%キャッチし、気配りが不足気味です。善意はありますがミスが多く、学ぼうとする意志があります。正直で純粋で成長の可能性がありますが、よく見逃して誤解が生じます。',
      'zh-CN': '还难以读取信号的诚实你！只捕捉40%的明确信号，缺乏察觉。有善意但错误多，愿意学习。诚实纯真有成长潜力，但经常错过并产生误解。',
      'zh-TW': '還難以讀取信號的誠實你！只捕捉40%的明確信號，缺乏察覺。有善意但錯誤多，願意學習。誠實純真有成長潛力，但經常錯過並產生誤解。',
      id: 'Anda yang jujur yang masih sulit membaca sinyal! Hanya menangkap 40% sinyal jelas dan kurang kesadaran. Punya niat baik tapi banyak kesalahan dan mau belajar. Jujur dan murni dengan potensi berkembang, tapi sering melewatkan dan menciptakan kesalahpahaman.',
      vi: 'Bạn thành thật vẫn còn khó đọc tín hiệu! Chỉ bắt được 40% tín hiệu rõ ràng và thiếu nhận thức. Có thiện ý nhưng mắc nhiều lỗi và sẵn sàng học hỏi. Thành thật và trong sáng với tiềm năng phát triển, nhưng thường bỏ lỡ và tạo hiểu lầm.'
    },
    detectionRate: {
      ko: '신호 포착률 40%',
      en: 'Detection Rate 40%',
      ja: '信号捕捉率40%',
      'zh-CN': '信号捕捉率40%',
      'zh-TW': '信號捕捉率40%',
      id: 'Tingkat Deteksi 40%',
      vi: 'Tỷ lệ phát hiện 40%'
    },
    pros: [
      { ko: '솔직함', en: 'Honest', ja: '正直', 'zh-CN': '诚实', 'zh-TW': '誠實', id: 'Jujur', vi: 'Thành thật' },
      { ko: '순수함', en: 'Pure', ja: '純粋', 'zh-CN': '纯真', 'zh-TW': '純真', id: 'Murni', vi: 'Trong sáng' },
      { ko: '발전 가능성', en: 'Growth potential', ja: '成長の可能性', 'zh-CN': '成长潜力', 'zh-TW': '成長潛力', id: 'Potensi berkembang', vi: 'Tiềm năng phát triển' },
      { ko: '진심', en: 'Sincerity', ja: '真心', 'zh-CN': '真心', 'zh-TW': '真心', id: 'Ketulusan', vi: 'Chân thành' }
    ],
    cons: [
      { ko: '자주 놓침', en: 'Often miss', ja: 'よく見逃す', 'zh-CN': '经常错过', 'zh-TW': '經常錯過', id: 'Sering terlewat', vi: 'Thường bỏ lỡ' },
      { ko: '오해 발생', en: 'Misunderstandings occur', ja: '誤解が生じる', 'zh-CN': '产生误解', 'zh-TW': '產生誤解', id: 'Terjadi kesalahpahaman', vi: 'Xảy ra hiểu lầm' },
      { ko: '상대 답답함', en: 'Partner frustration', ja: '相手がもどかしい', 'zh-CN': '对方着急', 'zh-TW': '對方著急', id: 'Pasangan frustrasi', vi: 'Đối phương bực bội' }
    ],
    advice: {
      ko: '배우려는 마음이 중요해요! "나 눈치 없는데 말해줘" 솔직히 말하세요. 관찰 연습이 필요합니다.',
      en: 'The willingness to learn is important! Honestly say "I\'m not good at reading signals, please tell me." Practice observation.',
      ja: '学ぼうとする心が大切です！「私、気が利かないから言ってね」と正直に言ってください。観察の練習が必要です。',
      'zh-CN': '愿意学习很重要！诚实地说"我不太会察言观色，请告诉我"。需要观察练习。',
      'zh-TW': '願意學習很重要！誠實地說「我不太會察言觀色，請告訴我」。需要觀察練習。',
      id: 'Kemauan belajar itu penting! Jujur katakan "Saya tidak peka, tolong beritahu saya." Perlu latihan observasi.',
      vi: 'Sự sẵn sàng học hỏi quan trọng! Thành thật nói "Mình không tinh ý lắm, hãy nói cho mình biết." Cần luyện tập quan sát.'
    },
    compatibility: {
      best: ['type2'],
      good: ['type3'],
      careful: ['type4'],
      difficult: ['type1']
    }
  },
  {
    type: 'type6',
    emoji: '🪨',
    title: {
      ko: '완전 둔감형',
      en: 'Totally Oblivious',
      ja: '完全鈍感型',
      'zh-CN': '完全迟钝型',
      'zh-TW': '完全遲鈍型',
      id: 'Benar-Benar Tidak Peka',
      vi: 'Hoàn Toàn Vô Cảm'
    },
    description: {
      ko: '연애계의 바위... 신호? 그게 뭔데? 신호 포착 20% 이하로 직접 말해야 이해합니다. 눈치가 제로이고 본인만의 세계에 있습니다. 솔직하고 단순하며 눈치 스트레스가 없지만 상대방이 매우 답답해하고 오해가 많으며 갈등이 자주 발생합니다.',
      en: 'The rock of the dating world... Signals? What\'s that? Detection rate below 20%, needs direct words to understand. Zero awareness, living in own world. Honest and simple with no signal stress, but partner gets very frustrated, many misunderstandings and frequent conflicts.',
      ja: '恋愛界の岩...信号？それ何？信号捕捉率20%以下で、直接言わないと理解できません。気配りゼロで自分の世界にいます。正直でシンプルで気遣いストレスがありませんが、相手が非常にもどかしく思い、誤解が多く対立がよく起こります。',
      'zh-CN': '恋爱界的石头...信号？那是什么？信号捕捉率20%以下，需要直接说才能理解。察觉为零，活在自己的世界。诚实简单无察觉压力，但对方非常着急，误解多且经常发生冲突。',
      'zh-TW': '戀愛界的石頭...信號？那是什麼？信號捕捉率20%以下，需要直接說才能理解。察覺為零，活在自己的世界。誠實簡單無察覺壓力，但對方非常著急，誤解多且經常發生衝突。',
      id: 'Batu dunia kencan... Sinyal? Apa itu? Tingkat deteksi di bawah 20%, perlu kata-kata langsung untuk mengerti. Kesadaran nol, hidup di dunia sendiri. Jujur dan sederhana tanpa stres sinyal, tapi pasangan sangat frustrasi, banyak kesalahpahaman dan sering konflik.',
      vi: 'Hòn đá của thế giới hẹn hò... Tín hiệu? Cái gì vậy? Tỷ lệ phát hiện dưới 20%, cần nói trực tiếp mới hiểu. Nhận thức bằng không, sống trong thế giới riêng. Thành thật và đơn giản không căng thẳng về tín hiệu, nhưng đối phương rất bực bội, nhiều hiểu lầm và xung đột thường xuyên.'
    },
    detectionRate: {
      ko: '신호 포착률 20% 이하',
      en: 'Detection Rate Below 20%',
      ja: '信号捕捉率20%以下',
      'zh-CN': '信号捕捉率20%以下',
      'zh-TW': '信號捕捉率20%以下',
      id: 'Tingkat Deteksi Di Bawah 20%',
      vi: 'Tỷ lệ phát hiện dưới 20%'
    },
    pros: [
      { ko: '솔직함', en: 'Honest', ja: '正直', 'zh-CN': '诚实', 'zh-TW': '誠實', id: 'Jujur', vi: 'Thành thật' },
      { ko: '단순함', en: 'Simple', ja: 'シンプル', 'zh-CN': '简单', 'zh-TW': '簡單', id: 'Sederhana', vi: 'Đơn giản' },
      { ko: '눈치 스트레스 없음', en: 'No signal stress', ja: '気遣いストレスなし', 'zh-CN': '无察觉压力', 'zh-TW': '無察覺壓力', id: 'Tanpa stres sinyal', vi: 'Không căng thẳng về tín hiệu' }
    ],
    cons: [
      { ko: '상대 답답함 극심', en: 'Extreme partner frustration', ja: '相手の苛立ち極度', 'zh-CN': '对方极度着急', 'zh-TW': '對方極度著急', id: 'Frustrasi pasangan ekstrem', vi: 'Đối phương cực kỳ bực bội' },
      { ko: '오해 많음', en: 'Many misunderstandings', ja: '誤解が多い', 'zh-CN': '误解多', 'zh-TW': '誤解多', id: 'Banyak kesalahpahaman', vi: 'Nhiều hiểu lầm' },
      { ko: '갈등 발생', en: 'Conflicts occur', ja: '対立発生', 'zh-CN': '发生冲突', 'zh-TW': '發生衝突', id: 'Konflik terjadi', vi: 'Xảy ra xung đột' }
    ],
    advice: {
      ko: '매일 "오늘 어땠어?" 묻기, 표정 변화 주목, "화났어?" 자주 확인, 연애 소통 공부 필요합니다.',
      en: 'Ask "How was your day?" daily, watch for expression changes, frequently check "Are you mad?", need to study relationship communication.',
      ja: '毎日「今日どうだった？」と聞く、表情の変化に注目、「怒ってる？」とよく確認、恋愛コミュニケーションの勉強が必要です。',
      'zh-CN': '每天问"今天怎么样？"，注意表情变化，经常确认"生气了吗？"，需要学习恋爱沟通。',
      'zh-TW': '每天問「今天怎麼樣？」，注意表情變化，經常確認「生氣了嗎？」，需要學習戀愛溝通。',
      id: 'Tanya "Bagaimana hari ini?" setiap hari, perhatikan perubahan ekspresi, sering cek "Marah?", perlu belajar komunikasi hubungan.',
      vi: 'Hỏi "Hôm nay thế nào?" mỗi ngày, chú ý thay đổi biểu cảm, thường xuyên kiểm tra "Giận à?", cần học giao tiếp tình cảm.'
    },
    emergency: {
      ko: '긴급 처방이 필요합니다!',
      en: 'Emergency prescription needed!',
      ja: '緊急処方が必要です！',
      'zh-CN': '需要紧急处方！',
      'zh-TW': '需要緊急處方！',
      id: 'Perlu resep darurat!',
      vi: 'Cần đơn thuốc khẩn cấp!'
    },
    compatibility: {
      best: ['type6'],
      good: { ko: '매우 직설적인 사람', en: 'Very direct person', ja: '非常に直接的な人', 'zh-CN': '非常直接的人', 'zh-TW': '非常直接的人', id: 'Orang yang sangat langsung', vi: 'Người rất trực tiếp' },
      careful: ['type3', 'type5'],
      difficult: { ko: '전부', en: 'All', ja: '全部', 'zh-CN': '全部', 'zh-TW': '全部', id: 'Semua', vi: 'Tất cả' }
    }
  }
];

// 점수 계산 함수
export function calculateSignalResult(answers: Array<{ type1: number; type2: number; type3: number; type4: number; type5: number; type6: number; }>): string {
  const totalScores = {
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    type5: 0,
    type6: 0
  };

  answers.forEach(answer => {
    totalScores.type1 += answer.type1;
    totalScores.type2 += answer.type2;
    totalScores.type3 += answer.type3;
    totalScores.type4 += answer.type4;
    totalScores.type5 += answer.type5;
    totalScores.type6 += answer.type6;
  });

  let maxScore = 0;
  let resultType = 'type3';

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
      type1: 0,
      type2: 0,
      type3: 0,
      type4: 0,
      type5: 0,
      type6: 0
    };

    for (let i = 9; i < 12 && i < answers.length; i++) {
      lastThreeScores.type1 += answers[i].type1;
      lastThreeScores.type2 += answers[i].type2;
      lastThreeScores.type3 += answers[i].type3;
      lastThreeScores.type4 += answers[i].type4;
      lastThreeScores.type5 += answers[i].type5;
      lastThreeScores.type6 += answers[i].type6;
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

