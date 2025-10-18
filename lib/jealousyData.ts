// 질투심 테스트 데이터 (한국어만 - 1단계)

export interface JealousyQuestion {
  id: number;
  question: string | Record<string, string>;
  options: {
    text: string | Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface JealousyResult {
  type: string;
  title: string | Record<string, string>;
  description: string | Record<string, string>;
  emoji: string;
  characteristics: string | Record<string, string>;
  pros: string | Record<string, string>;
  cons: string | Record<string, string>;
  advice: string | Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

// 질문 데이터
export const jealousyQuestions: JealousyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "연인이 이성 친구와 단둘이 식사한다고 하면?",
      en: "Your partner says they're having dinner alone with an opposite-sex friend?",
      ja: "恋人が異性の友達と二人で食事すると言ったら？",
      'zh-CN': "你的伴侣说要和异性朋友单独吃饭？",
      'zh-TW': "你的伴侶說要和異性朋友單獨吃飯？",
      vi: "Người yêu nói họ sẽ ăn tối một mình với bạn khác giới?",
      id: "Pasangan Anda bilang mereka akan makan malam berdua dengan teman lawan jenis?"
    },
    options: [
      { 
        text: {
          ko: "그래, 재밌게 먹어",
          en: "Sure, have fun",
          ja: "いいよ、楽しんで",
          'zh-CN': "好的，玩得开心",
          'zh-TW': "好的，玩得開心",
          vi: "Được, vui vẻ nhé",
          id: "Baik, bersenang-senang"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "누구랑?",
          en: "Who is it?",
          ja: "誰と？",
          'zh-CN': "和谁？",
          'zh-TW': "和誰？",
          vi: "Với ai?",
          id: "Dengan siapa?"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "왜 꼭 둘이서?",
          en: "Why just the two of you?",
          ja: "なぜ二人だけ？",
          'zh-CN': "为什么只有你们两个？",
          'zh-TW': "為什麼只有你們兩個？",
          vi: "Tại sao chỉ hai người?",
          id: "Mengapa hanya berdua?"
        },
        scores: { Type3: 6, Type4: 2 } 
      },
      { 
        text: {
          ko: "안 돼, 나도 같이 갈래",
          en: "No way, I'm coming too",
          ja: "ダメ、私も一緒に行く",
          'zh-CN': "不行，我也要去",
          'zh-TW': "不行，我也要去",
          vi: "Không được, tôi cũng đi",
          id: "Tidak boleh, saya juga ikut"
        },
        scores: { Type4: 5, Type5: 3, Type6: 2 } 
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연인의 휴대폰을 볼 수 있다면?",
      en: "If you could look at your partner's phone?",
      ja: "恋人の携帯電話を見ることができるなら？",
      'zh-CN': "如果你能看伴侣的手机？",
      'zh-TW': "如果你能看伴侶的手機？",
      vi: "Nếu bạn có thể xem điện thoại của người yêu?",
      id: "Jika Anda bisa melihat ponsel pasangan?"
    },
    options: [
      { 
        text: {
          ko: "볼 생각도 없다, 사생활 존중",
          en: "No way, respect privacy",
          ja: "見る気もない、プライバシー尊重",
          'zh-CN': "不想看，尊重隐私",
          'zh-TW': "不想看，尊重隱私",
          vi: "Không muốn xem, tôn trọng riêng tư",
          id: "Tidak mau lihat, menghormati privasi"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "궁금하지만 참는다, 믿는다",
          en: "Curious but I resist, I trust them",
          ja: "気になるけど我慢する、信じてる",
          'zh-CN': "好奇但忍住，我相信他们",
          'zh-TW': "好奇但忍住，我相信他們",
          vi: "Tò mò nhưng cố gắng, tôi tin họ",
          id: "Penasaran tapi menahan diri, percaya"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "가끔 몰래 보고 싶은 충동이 있다",
          en: "Sometimes I have the urge to peek secretly",
          ja: "たまにこっそり見たい衝動がある",
          'zh-CN': "有时有偷偷看的冲动",
          'zh-TW': "有時有偷偷看的衝動",
          vi: "Thỉnh thoảng muốn xem lén",
          id: "Kadang ada dorongan untuk mengintip diam-diam"
        },
        scores: { Type3: 6, Type4: 2 } 
      },
      { 
        text: {
          ko: "비밀번호도 알고 자주 확인한다",
          en: "I know the password and check often",
          ja: "パスワードも知っててよく確認する",
          'zh-CN': "知道密码经常查看",
          'zh-TW': "知道密碼經常查看",
          vi: "Biết mật khẩu và thường xuyên kiểm tra",
          id: "Tahu password dan sering cek"
        },
        scores: { Type5: 8, Type6: 4 } 
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "연인의 SNS에 이성이 좋아요를 누르면?",
      en: "When someone of the opposite sex likes your partner's SNS?",
      ja: "恋人のSNSに異性がいいねを押すと？",
      'zh-CN': "当异性给你的伴侣的SNS点赞时？",
      'zh-TW': "當異性給你的伴侶的SNS點讚時？",
      vi: "Khi người khác giới thích SNS của người yêu?",
      id: "Ketika orang lawan jenis menyukai SNS pasangan Anda?"
    },
    options: [
      { 
        text: {
          ko: "전혀 신경 안 쓴다",
          en: "Don't care at all",
          ja: "全く気にしない",
          'zh-CN': "完全不在乎",
          'zh-TW': "完全不在乎",
          vi: "Không quan tâm chút nào",
          id: "Tidak peduli sama sekali"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "누군지 한 번 확인하지만 별로 신경 안 쓴다",
          en: "Check who it is but don't really care",
          ja: "誰か確認するけどあまり気にしない",
          'zh-CN': "确认是谁但不太在意",
          'zh-TW': "確認是誰但不太在意",
          vi: "Kiểm tra xem ai nhưng không thực sự quan tâm",
          id: "Cek siapa tapi tidak terlalu peduli"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "누군지 확인하고 은근히 신경 쓴다",
          en: "Check who it is and secretly care",
          ja: "誰か確認して密かに気になる",
          'zh-CN': "确认是谁并暗中在意",
          'zh-TW': "確認是誰並暗中在意",
          vi: "Kiểm tra xem ai và bí mật quan tâm",
          id: "Cek siapa dan diam-diam peduli"
        },
        scores: { Type3: 6, Type4: 2 } 
      },
      { 
        text: {
          ko: "저 사람 누구야? 물어본다",
          en: "Who is that person? I ask",
          ja: "あの人誰？聞く",
          'zh-CN': "那个人是谁？我问",
          'zh-TW': "那個人是誰？我問",
          vi: "Người đó là ai? Tôi hỏi",
          id: "Siapa orang itu? Saya tanya"
        },
        scores: { Type4: 6, Type5: 3 } 
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "연인이 과거 연애 이야기를 하면?",
      en: "When your partner talks about past relationships?",
      ja: "恋人が過去の恋愛話をすると？",
      'zh-CN': "当你的伴侣谈论过去的恋情时？",
      'zh-TW': "當你的伴侶談論過去的戀情時？",
      vi: "Khi người yêu kể về những mối tình cũ?",
      id: "Ketika pasangan bercerita tentang hubungan masa lalu?"
    },
    options: [
      { 
        text: {
          ko: "그랬구나 편하게 듣는다",
          en: "I see, I listen comfortably",
          ja: "そうだったのか、気楽に聞く",
          'zh-CN': "原来如此，轻松地听着",
          'zh-TW': "原來如此，輕鬆地聽著",
          vi: "Thế à, tôi nghe thoải mái",
          id: "Begitu ya, saya dengar dengan nyaman"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "듣기 싫지만 내색 안 한다",
          en: "I don't want to hear but don't show it",
          ja: "聞きたくないけど顔に出さない",
          'zh-CN': "不想听但不表现出来",
          'zh-TW': "不想聽但不表現出來",
          vi: "Không muốn nghe nhưng không thể hiện",
          id: "Tidak mau dengar tapi tidak menunjukkan"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "그만 얘기하면 안 돼? 불편하다",
          en: "Can't you stop talking? It's uncomfortable",
          ja: "もう話すのやめない？不快だ",
          'zh-CN': "能不能别说了？不舒服",
          'zh-TW': "能不能別說了？不舒服",
          vi: "Có thể dừng nói không? Khó chịu",
          id: "Bisa berhenti bicara tidak? Tidak nyaman"
        },
        scores: { Type3: 6, Type4: 2 } 
      },
      { 
        text: {
          ko: "왜 옛날 애기를 해? 화가 난다",
          en: "Why are you talking about the past? I'm angry",
          ja: "なんで昔の話をするの？怒る",
          'zh-CN': "为什么要说过去的事？我很生气",
          'zh-TW': "為什麼要說過去的事？我很生氣",
          vi: "Tại sao lại nói về chuyện cũ? Tôi tức giận",
          id: "Kenapa cerita masa lalu? Saya marah"
        },
        scores: { Type5: 8, Type6: 4 } 
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "연인이 바빠서 연락이 늦을 때?",
      en: "When your partner is busy and contacts you late?",
      ja: "恋人が忙しくて連絡が遅い時？",
      'zh-CN': "当你的伴侣很忙联系很晚时？",
      'zh-TW': "當你的伴侶很忙聯繫很晚時？",
      vi: "Khi người yêu bận rộn và liên lạc muộn?",
      id: "Ketika pasangan sibuk dan terlambat menghubungi?"
    },
    options: [
      { 
        text: {
          ko: "바쁘겠지 편하게 기다린다",
          en: "They must be busy, I wait comfortably",
          ja: "忙しいだろう、気楽に待つ",
          'zh-CN': "一定很忙，轻松地等待",
          'zh-TW': "一定很忙，輕鬆地等待",
          vi: "Chắc họ bận, tôi chờ thoải mái",
          id: "Pasti sibuk, saya tunggu dengan nyaman"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "한두 번 확인 연락은 한다",
          en: "I check once or twice",
          ja: "1、2回確認連絡する",
          'zh-CN': "会确认一两次",
          'zh-TW': "會確認一兩次",
          vi: "Tôi kiểm tra một hai lần",
          id: "Saya cek sekali dua kali"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "계속 궁금해서 여러 번 연락한다",
          en: "I keep wondering and contact multiple times",
          ja: "ずっと気になって何度も連絡する",
          'zh-CN': "一直好奇所以多次联系",
          'zh-TW': "一直好奇所以多次聯繫",
          vi: "Tôi cứ tò mò và liên lạc nhiều lần",
          id: "Saya terus penasaran dan menghubungi berkali-kali"
        },
        scores: { Type4: 6, Type5: 3 } 
      },
      { 
        text: {
          ko: "왜 연락 안 해? 따지듯 물어본다",
          en: "Why aren't you contacting me? I ask accusingly",
          ja: "なんで連絡しないの？詰め寄るように聞く",
          'zh-CN': "为什么不联系？我质问",
          'zh-TW': "為什麼不聯繫？我質問",
          vi: "Tại sao không liên lạc? Tôi hỏi như tra hỏi",
          id: "Kenapa tidak menghubungi? Saya tanya seperti menginterogasi"
        },
        scores: { Type5: 8, Type6: 4 } 
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "연인이 이성이 많이 모이는 모임에 간다면?",
      en: "If your partner goes to a gathering with many opposite-sex people?",
      ja: "恋人が異性が多く集まる会合に行くなら？",
      'zh-CN': "如果你的伴侣去有很多异性的聚会？",
      'zh-TW': "如果你的伴侶去有很多異性的聚會？",
      vi: "Nếu người yêu đi đến một cuộc tụ tập có nhiều người khác giới?",
      id: "Jika pasangan pergi ke pertemuan dengan banyak orang lawan jenis?"
    },
    options: [
      { 
        text: {
          ko: "즐겁게 놀다 와 편하게 보낸다",
          en: "Have fun and come back, I send them off comfortably",
          ja: "楽しんで来て、気楽に見送る",
          'zh-CN': "玩得开心回来，轻松地送他们",
          'zh-TW': "玩得開心回來，輕鬆地送他們",
          vi: "Chơi vui vẻ và về, tôi tiễn họ thoải mái",
          id: "Bersenang-senang dan pulang, saya antar dengan nyaman"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "조심해 한마디만 하고 보낸다",
          en: "Be careful, I just say one word and send them off",
          ja: "気をつけて、一言だけ言って見送る",
          'zh-CN': "小心点，只说一句话就送他们",
          'zh-TW': "小心點，只說一句話就送他們",
          vi: "Cẩn thận nhé, tôi chỉ nói một câu và tiễn họ",
          id: "Hati-hati, saya hanya bilang satu kata dan antar"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "모임 끝날 때까지 신경 쓰인다",
          en: "I worry until the gathering ends",
          ja: "会合が終わるまで気になる",
          'zh-CN': "聚会结束前一直担心",
          'zh-TW': "聚會結束前一直擔心",
          vi: "Tôi lo lắng cho đến khi cuộc tụ tập kết thúc",
          id: "Saya khawatir sampai pertemuan selesai"
        },
        scores: { Type4: 6, Type5: 3 } 
      },
      { 
        text: {
          ko: "안 가면 안 돼? 막고 싶다",
          en: "Can't you not go? I want to stop them",
          ja: "行かないとダメ？止めたい",
          'zh-CN': "不能不去吗？我想阻止",
          'zh-TW': "不能不去嗎？我想阻止",
          vi: "Không đi được không? Tôi muốn ngăn họ",
          id: "Tidak bisa tidak pergi? Saya ingin menghentikan"
        },
        scores: { Type5: 8, Type6: 4 } 
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "길거리에서 연인이 이성을 처다보면?",
      en: "If your partner stares at someone of the opposite sex on the street?",
      ja: "街で恋人が異性を見つめていたら？",
      'zh-CN': "如果你的伴侣在街上盯着异性看？",
      'zh-TW': "如果你的伴侶在街上盯著異性看？",
      vi: "Nếu người yêu nhìn chằm chằm vào người khác giới trên phố?",
      id: "Jika pasangan menatap orang lawan jenis di jalan?"
    },
    options: [
      { 
        text: {
          ko: "전혀 신경 안 쓴다",
          en: "Don't care at all",
          ja: "全く気にしない",
          'zh-CN': "完全不在乎",
          'zh-TW': "完全不在乎",
          vi: "Không quan tâm chút nào",
          id: "Tidak peduli sama sekali"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "약간 신경 쓰이지만 넘어간다",
          en: "It bothers me a bit but I let it go",
          ja: "少し気になるけど流す",
          'zh-CN': "有点在意但算了",
          'zh-TW': "有點在意但算了",
          vi: "Hơi khó chịu nhưng tôi bỏ qua",
          id: "Agak mengganggu tapi saya biarkan"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "저 사람 왜 봐? 물어본다",
          en: "Why are you looking at that person? I ask",
          ja: "あの人なんで見るの？聞く",
          'zh-CN': "为什么看那个人？我问",
          'zh-TW': "為什麼看那個人？我問",
          vi: "Tại sao lại nhìn người đó? Tôi hỏi",
          id: "Kenapa lihat orang itu? Saya tanya"
        },
        scores: { Type3: 6, Type4: 3 } 
      },
      { 
        text: {
          ko: "기분 나빠서 삐진다",
          en: "I feel bad and get sulky",
          ja: "気分悪くてすねる",
          'zh-CN': "心情不好所以生气",
          'zh-TW': "心情不好所以生氣",
          vi: "Tôi cảm thấy tồi tệ và hờn dỗi",
          id: "Saya merasa tidak enak dan cemberut"
        },
        scores: { Type4: 6, Type5: 3, Type6: 2 } 
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "연인의 이성 친구가 많다는 것을 알게 되면?",
      en: "When you find out your partner has many opposite-sex friends?",
      ja: "恋人の異性の友達が多いことを知ったら？",
      'zh-CN': "当你发现你的伴侣有很多异性朋友时？",
      'zh-TW': "當你發現你的伴侶有很多異性朋友時？",
      vi: "Khi bạn biết người yêu có nhiều bạn khác giới?",
      id: "Ketika Anda tahu pasangan punya banyak teman lawan jenis?"
    },
    options: [
      { 
        text: {
          ko: "사교적이네 긍정적으로 본다",
          en: "They're sociable, I see it positively",
          ja: "社交的だね、肯定的に見る",
          'zh-CN': "很社交，我积极看待",
          'zh-TW': "很社交，我積極看待",
          vi: "Họ hòa đồng, tôi nhìn tích cực",
          id: "Mereka sosial, saya lihat positif"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "약간 불안하지만 믿는다",
          en: "I'm a bit anxious but I trust them",
          ja: "少し不安だけど信じる",
          'zh-CN': "有点不安但我相信他们",
          'zh-TW': "有點不安但我相信他們",
          vi: "Hơi lo lắng nhưng tôi tin tưởng họ",
          id: "Agak cemas tapi saya percaya"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "불안해서 자주 확인하게 된다",
          en: "I get anxious and check frequently",
          ja: "不安でよく確認するようになる",
          'zh-CN': "因为不安所以经常确认",
          'zh-TW': "因為不安所以經常確認",
          vi: "Lo lắng nên tôi thường xuyên kiểm tra",
          id: "Cemas jadi sering cek"
        },
        scores: { Type4: 6, Type5: 3 } 
      },
      { 
        text: {
          ko: "친구 좀 줄여 요구한다",
          en: "I demand they reduce their friends",
          ja: "友達減らしてと要求する",
          'zh-CN': "我要求他们减少朋友",
          'zh-TW': "我要求他們減少朋友",
          vi: "Tôi yêu cầu họ giảm bạn bè",
          id: "Saya minta mereka kurangi teman"
        },
        scores: { Type6: 10, Type5: 4 } 
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "연인이 옛 연인과 우연히 마주쳤다고 하면?",
      en: "If your partner says they accidentally met their ex?",
      ja: "恋人が元恋人と偶然会ったと言ったら？",
      'zh-CN': "如果你的伴侣说他们偶然遇到了前任？",
      'zh-TW': "如果你的伴侶說他們偶然遇到了前任？",
      vi: "Nếu người yêu nói họ tình cờ gặp người yêu cũ?",
      id: "Jika pasangan bilang mereka tidak sengaja bertemu mantan?"
    },
    options: [
      { 
        text: {
          ko: "그럴 수 있지 아무렇지 않다",
          en: "That can happen, I don't care",
          ja: "そういうこともあるよね、気にしない",
          'zh-CN': "那可能发生，我不在乎",
          'zh-TW': "那可能發生，我不在乎",
          vi: "Điều đó có thể xảy ra, tôi không quan tâm",
          id: "Itu bisa terjadi, saya tidak peduli"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "은근히 궁금하지만 대수롭지 않게 넘긴다",
          en: "I'm secretly curious but let it go casually",
          ja: "密かに気になるけど大したことなく流す",
          'zh-CN': "暗中好奇但轻松地算了",
          'zh-TW': "暗中好奇但輕鬆地算了",
          vi: "Bí mật tò mò nhưng tôi bỏ qua một cách bình thường",
          id: "Diam-diam penasaran tapi saya biarkan biasa saja"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "무슨 얘기 했는지 자세히 물어본다",
          en: "I ask in detail what they talked about",
          ja: "何の話をしたか詳しく聞く",
          'zh-CN': "我详细询问他们谈了什么",
          'zh-TW': "我詳細詢問他們談了什麼",
          vi: "Tôi hỏi chi tiết họ đã nói gì",
          id: "Saya tanya detail apa yang mereka bicarakan"
        },
        scores: { Type3: 6, Type4: 3 } 
      },
      { 
        text: {
          ko: "왜 얘기를 해? 기분 나쁘다",
          en: "Why are you telling me? I feel bad",
          ja: "なんで話すの？気分悪い",
          'zh-CN': "为什么要说？我心情不好",
          'zh-TW': "為什麼要說？我心情不好",
          vi: "Tại sao lại nói? Tôi cảm thấy tồi tệ",
          id: "Kenapa cerita? Saya merasa tidak enak"
        },
        scores: { Type6: 10, Type5: 3 } 
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신의 질투를 한 문장으로 표현하면?",
      en: "If you express your jealousy in one sentence?",
      ja: "あなたの嫉妬を一文で表現すると？",
      'zh-CN': "如果你用一句话表达你的嫉妒？",
      'zh-TW': "如果你用一句話表達你的嫉妒？",
      vi: "Nếu bạn thể hiện sự ghen tuông của mình bằng một câu?",
      id: "Jika Anda mengekspresikan cemburu Anda dalam satu kalimat?"
    },
    options: [
      { 
        text: {
          ko: "질투? 그게 뭐야?",
          en: "Jealousy? What's that?",
          ja: "嫉妬？それ何？",
          'zh-CN': "嫉妒？那是什么？",
          'zh-TW': "嫉妒？那是什麼？",
          vi: "Ghen tuông? Đó là gì?",
          id: "Cemburu? Apa itu?"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "가끔 신경 쓰이지만 참아",
          en: "Sometimes it bothers me but I endure",
          ja: "時々気になるけど我慢する",
          'zh-CN': "有时在意但我忍耐",
          'zh-TW': "有時在意但我忍耐",
          vi: "Đôi khi khó chịu nhưng tôi chịu đựng",
          id: "Kadang mengganggu tapi saya tahan"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "솔직히 질투 좀 많이 해",
          en: "Honestly, I get quite jealous",
          ja: "正直に嫉妬する方だ",
          'zh-CN': "老实说，我比较嫉妒",
          'zh-TW': "老實說，我比較嫉妒",
          vi: "Thành thật mà nói, tôi khá ghen tuông",
          id: "Jujur, saya cukup cemburu"
        },
        scores: { Type4: 6, Type5: 3 } 
      },
      { 
        text: {
          ko: "질투는 사랑의 증거야",
          en: "Jealousy is proof of love",
          ja: "嫉妬は愛の証拠だ",
          'zh-CN': "嫉妒是爱的证明",
          'zh-TW': "嫉妒是愛的證明",
          vi: "Ghen tuông là bằng chứng của tình yêu",
          id: "Cemburu adalah bukti cinta"
        },
        scores: { Type5: 8, Type6: 4 } 
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "연인이 \"넌 질투가 없냐?\" 물어보면?",
      en: "If your partner asks \"Don't you get jealous?\"?",
      ja: "恋人が「あなたは嫉妬しないの？」と聞いたら？",
      'zh-CN': "如果你的伴侣问\"你不嫉妒吗？\"？",
      'zh-TW': "如果你的伴侶問「你不嫉妒嗎？」？",
      vi: "Nếu người yêu hỏi \"Bạn không ghen tuông à?\"?",
      id: "Jika pasangan tanya \"Kamu tidak cemburu?\"?"
    },
    options: [
      { 
        text: {
          ko: "응, 널 믿으니까",
          en: "Yes, because I trust you",
          ja: "うん、あなたを信じてるから",
          'zh-CN': "是的，因为我信任你",
          'zh-TW': "是的，因為我信任你",
          vi: "Ừ, vì tôi tin tưởng bạn",
          id: "Ya, karena saya percaya kamu"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "있지만 표현 안 해",
          en: "I have it but don't express it",
          ja: "あるけど表現しない",
          'zh-CN': "有但我不会表达",
          'zh-TW': "有但我不會表達",
          vi: "Có nhưng tôi không thể hiện",
          id: "Ada tapi tidak mengekspresikan"
        },
        scores: { Type2: 5, Type3: 2 } 
      },
      { 
        text: {
          ko: "있어, 많이 질투해",
          en: "Yes, I get very jealous",
          ja: "あるよ、よく嫉妬する",
          'zh-CN': "有，我很嫉妒",
          'zh-TW': "有，我很嫉妒",
          vi: "Có, tôi rất ghen tuông",
          id: "Ada, saya sangat cemburu"
        },
        scores: { Type3: 6, Type4: 3 } 
      },
      { 
        text: {
          ko: "당연하지, 네가 내 사람인데",
          en: "Of course, you're mine",
          ja: "当然だよ、あなたは私の人だから",
          'zh-CN': "当然，你是我的",
          'zh-TW': "當然，你是我的",
          vi: "Tất nhiên, bạn là của tôi",
          id: "Tentu saja, kamu milikku"
        },
        scores: { Type6: 10, Type5: 3 } 
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "연인과 싸웠을 때 가장 많이 하는 말은?",
      en: "What do you say most when fighting with your partner?",
      ja: "恋人と喧嘩した時、一番多く言う言葉は？",
      'zh-CN': "当你和伴侣吵架时最常说什么？",
      'zh-TW': "當你和伴侶吵架時最常說什麼？",
      vi: "Khi cãi nhau với người yêu, bạn thường nói gì nhất?",
      id: "Apa yang paling sering Anda katakan saat bertengkar dengan pasangan?"
    },
    options: [
      { 
        text: {
          ko: "내가 잘못했어 질투와 무관",
          en: "I was wrong, unrelated to jealousy",
          ja: "私が悪かった、嫉妬とは無関係",
          'zh-CN': "我错了，与嫉妒无关",
          'zh-TW': "我錯了，與嫉妒無關",
          vi: "Tôi đã sai, không liên quan đến ghen tuông",
          id: "Saya salah, tidak terkait cemburu"
        },
        scores: { Type1: 5, Type2: 2 } 
      },
      { 
        text: {
          ko: "네가 나를 불안하게 해서",
          en: "You make me anxious",
          ja: "あなたが私を不安にさせるから",
          'zh-CN': "你让我感到不安",
          'zh-TW': "你讓我感到不安",
          vi: "Bạn làm tôi lo lắng",
          id: "Kamu membuat saya cemas"
        },
        scores: { Type3: 6, Type2: 3 } 
      },
      { 
        text: {
          ko: "너 요즘 이상해, 누구 있어?",
          en: "You've been acting strange lately, is there someone else?",
          ja: "最近おかしいよ、誰かいるの？",
          'zh-CN': "你最近很奇怪，有别人吗？",
          'zh-TW': "你最近很奇怪，有別人嗎？",
          vi: "Gần đây bạn lạ lắm, có ai khác không?",
          id: "Kamu aneh akhir-akhir ini, ada orang lain?"
        },
        scores: { Type4: 6, Type5: 3 } 
      },
      { 
        text: {
          ko: "내 말 안 들으면 끝이야",
          en: "If you don't listen to me, it's over",
          ja: "私の言うことを聞かなければ終わりだ",
          'zh-CN': "如果你不听我的话就结束了",
          'zh-TW': "如果你不聽我的話就結束了",
          vi: "Nếu bạn không nghe lời tôi thì kết thúc",
          id: "Kalau tidak dengar kata saya, selesai"
        },
        scores: { Type6: 10, Type5: 3 } 
      }
    ]
  }
];

// 결과 데이터
export const jealousyResults: JealousyResult[] = [
  {
    type: "Type1",
    title: {
      ko: "질투 제로형",
      en: "Zero Jealousy Type",
      ja: "嫉妬ゼロ型",
      'zh-CN': "零嫉妒型",
      'zh-TW': "零嫉妒型",
      vi: "Kiểu Không Ghen",
      id: "Tipe Tanpa Cemburu"
    },
    description: {
      ko: "질투? 그게 뭐죠? 완전 쿨한 당신\n질투가 거의 없습니다. 연인을 완전히 신뢰하며 독립적 관계를 선호합니다. 이성 친구가 많아도, 연락이 늦어도 전혀 신경 쓰지 않습니다. \"네 인생, 네가 알아서\"라는 마음가짐입니다. 건강하고 성숙하지만, 때로는 무관심해 보일 수 있습니다.",
      en: "Jealousy? What's that? You're completely cool\nYou have almost no jealousy. You completely trust your partner and prefer independent relationships. You don't care if they have many opposite-sex friends or if they're late to contact. You have a mindset of \"Your life, you handle it.\" You're healthy and mature, but sometimes you may seem indifferent.",
      ja: "嫉妬？それ何？完全にクールなあなた\n嫉妬がほとんどありません。恋人を完全に信頼し、独立した関係を好みます。異性の友達が多くても、連絡が遅くても全く気にしません。「あなたの人生、あなたが決めて」という心構えです。健康的で成熟していますが、時々無関心に見えるかもしれません。",
      'zh-CN': "嫉妒？那是什么？完全酷的你\n你几乎没有嫉妒心。你完全信任伴侣，喜欢独立的关系。即使他们有很多异性朋友，或者联系很晚，你也不在乎。你有\"你的人生，你自己决定\"的心态。你健康成熟，但有时可能显得冷漠。",
      'zh-TW': "嫉妒？那是什麼？完全酷的你\n你幾乎沒有嫉妒心。你完全信任伴侶，喜歡獨立的關係。即使他們有很多異性朋友，或者聯繫很晚，你也不在乎。你有「你的人生，你自己決定」的心態。你健康成熟，但有時可能顯得冷漠。",
      vi: "Ghen tuông? Đó là gì? Bạn hoàn toàn mát mẻ\nBạn hầu như không có ghen tuông. Bạn hoàn toàn tin tưởng người yêu và thích mối quan hệ độc lập. Bạn không quan tâm nếu họ có nhiều bạn khác giới hoặc liên lạc muộn. Bạn có tâm lý \"Cuộc sống của bạn, bạn tự quyết định.\" Bạn khỏe mạnh và trưởng thành, nhưng đôi khi có thể trông thờ ơ.",
      id: "Cemburu? Apa itu? Anda benar-benar keren\nAnda hampir tidak memiliki rasa cemburu. Anda sepenuhnya mempercayai pasangan dan menyukai hubungan yang mandiri. Anda tidak peduli jika mereka memiliki banyak teman lawan jenis atau terlambat menghubungi. Anda memiliki pola pikir \"Hidup Anda, Anda yang atur.\" Anda sehat dan dewasa, tapi kadang mungkin terlihat acuh tak acuh."
    },
    emoji: "😌",
    characteristics: {
      ko: "신뢰, 독립성, 쿨함, 여유, 성숙함",
      en: "Trust, Independence, Coolness, Relaxation, Maturity",
      ja: "信頼、独立性、クールさ、余裕、成熟",
      'zh-CN': "信任、独立性、酷、放松、成熟",
      'zh-TW': "信任、獨立性、酷、放鬆、成熟",
      vi: "Tin tưởng, Độc lập, Mát mẻ, Thư giãn, Trưởng thành",
      id: "Kepercayaan, Kemandirian, Keren, Santai, Kedewasaan"
    },
    pros: {
      ko: "관계 편함, 자유로움, 싸움 적음, 스트레스 없음",
      en: "Comfortable relationship, Freedom, Few fights, No stress",
      ja: "関係が楽、自由、喧嘩少ない、ストレスなし",
      'zh-CN': "关系舒适、自由、争吵少、无压力",
      'zh-TW': "關係舒適、自由、爭吵少、無壓力",
      vi: "Mối quan hệ thoải mái, Tự do, Ít cãi nhau, Không căng thẳng",
      id: "Hubungan nyaman, Kebebasan, Sedikit pertengkaran, Tidak stres"
    },
    cons: {
      ko: "무관심해 보임, 사랑 표현 부족, 상대방 서운함",
      en: "Seems indifferent, Lack of love expression, Partner feels hurt",
      ja: "無関心に見える、愛情表現不足、相手が寂しい",
      'zh-CN': "显得冷漠、缺乏爱的表达、伴侣感到受伤",
      'zh-TW': "顯得冷漠、缺乏愛的表達、伴侶感到受傷",
      vi: "Trông thờ ơ, Thiếu biểu hiện tình yêu, Đối phương buồn",
      id: "Terlihat acuh tak acuh, Kurang ekspresi cinta, Pasangan sedih"
    },
    advice: {
      ko: "쿨한 건 좋지만 가끔은 관심 표현도 필요해요. \"네가 신경 쓰여\"라는 말도 사랑입니다.",
      en: "Being cool is good, but sometimes you need to show interest. Saying \"I care about you\" is also love.",
      ja: "クールなのはいいけど、たまには関心を示すのも必要です。「あなたが気になる」という言葉も愛です。",
      'zh-CN': "酷是好的，但有时也需要表达关心。说\"我在乎你\"也是爱。",
      'zh-TW': "酷是好的，但有時也需要表達關心。說「我在乎你」也是愛。",
      vi: "Mát mẻ là tốt, nhưng đôi khi cần thể hiện sự quan tâm. Nói \"Tôi quan tâm đến bạn\" cũng là tình yêu.",
      id: "Keren itu bagus, tapi kadang perlu menunjukkan perhatian. Mengatakan \"Saya peduli padamu\" juga cinta."
    },
    compatibility: {
      best: ["Type1"],
      good: ["Type2"],
      careful: ["Type4"],
      difficult: ["Type5", "Type6"]
    }
  },
  {
    type: "Type2",
    title: {
      ko: "쿨한 신뢰형",
      en: "Cool Trust Type",
      ja: "クール信頼型",
      'zh-CN': "酷信任型",
      'zh-TW': "酷信任型",
      vi: "Kiểu Tin Tưởng Mát Mẻ",
      id: "Tipe Kepercayaan Keren"
    },
    description: {
      ko: "약간 질투하지만 쿨하게 넘기는 스타일\n적당히 질투하지만 표현하지 않고 쿨하게 넘깁니다. 신경 쓰이는 순간은 있지만 연인을 믿고 참습니다. 건강한 수준의 질투로 관계에 활력을 줍니다. 대부분의 사람들이 이 정도 수준입니다. 균형 잡힌 이상적인 질투 레벨입니다.",
      en: "A style that gets a bit jealous but coolly moves on\nYou get moderately jealous but don't express it and coolly move on. There are moments when you care, but you trust your partner and endure. Healthy level of jealousy that brings vitality to the relationship. Most people are at this level. It's a balanced, ideal jealousy level.",
      ja: "少し嫉妬するけどクールに流すスタイル\n適度に嫉妬するけど表現せずにクールに流します。気になる瞬間はありますが、恋人を信じて我慢します。健康的なレベルの嫉妬で関係に活気を与えます。ほとんどの人がこの程度のレベルです。バランスの取れた理想的な嫉妬レベルです。",
      'zh-CN': "有点嫉妒但酷酷地过去的风格\n适度嫉妒但不表达，酷酷地过去。有在意的瞬间，但相信伴侣并忍耐。健康水平的嫉妒为关系带来活力。大多数人都是这个水平。这是平衡的理想嫉妒水平。",
      'zh-TW': "有點嫉妒但酷酷地過去的風格\n適度嫉妒但不表達，酷酷地過去。有在意的瞬間，但相信伴侶並忍耐。健康水平的嫉妒為關係帶來活力。大多數人都是這個水平。這是平衡的理想嫉妒水平。",
      vi: "Phong cách hơi ghen tuông nhưng mát mẻ bỏ qua\nBạn ghen tuông vừa phải nhưng không thể hiện và mát mẻ bỏ qua. Có những khoảnh khắc bạn quan tâm, nhưng bạn tin tưởng người yêu và chịu đựng. Mức độ ghen tuông lành mạnh mang lại sức sống cho mối quan hệ. Hầu hết mọi người đều ở mức này. Đây là mức độ ghen tuông lý tưởng cân bằng.",
      id: "Gaya sedikit cemburu tapi keren mengalir\nAnda cemburu cukup tapi tidak mengekspresikannya dan keren mengalir. Ada momen yang mengganggu, tapi Anda percaya pasangan dan bertahan. Level cemburu sehat yang memberi vitalitas pada hubungan. Kebanyakan orang di level ini. Ini adalah level cemburu ideal yang seimbang."
    },
    emoji: "😊",
    characteristics: {
      ko: "신뢰, 균형감, 이성적, 표현 절제, 여유",
      en: "Trust, Balance, Rational, Expression Control, Relaxation",
      ja: "信頼、バランス感、理性的、表現抑制、余裕",
      'zh-CN': "信任、平衡感、理性、表达克制、从容",
      'zh-TW': "信任、平衡感、理性、表達克制、從容",
      vi: "Tin tưởng, Cân bằng, Lý trí, Kiềm chế biểu hiện, Thư giãn",
      id: "Kepercayaan, Keseimbangan, Rasional, Kontrol Ekspresi, Santai"
    },
    pros: {
      ko: "건강한 관계, 적당한 관심, 스트레스 적음, 성숙함",
      en: "Healthy relationship, Appropriate concern, Low stress, Maturity",
      ja: "健康的な関係、適度な関心、ストレス少ない、成熟",
      'zh-CN': "健康的关系、适度的关心、压力小、成熟",
      'zh-TW': "健康的關係、適度的關心、壓力小、成熟",
      vi: "Mối quan hệ khỏe mạnh, Quan tâm vừa phải, Ít căng thẳng, Trưởng thành",
      id: "Hubungan sehat, Perhatian tepat, Stres rendah, Kedewasaan"
    },
    cons: {
      ko: "속으로 참아서 가끔 힘들 수 있음",
      en: "Sometimes hard to suppress internally",
      ja: "内心で我慢して時々辛い",
      'zh-CN': "内心忍耐有时会辛苦",
      'zh-TW': "內心忍耐有時會辛苦",
      vi: "Đôi khi khó khăn khi phải kìm nén bên trong",
      id: "Kadang sulit menahan diri di dalam"
    },
    advice: {
      ko: "완벽합니다! 가끔 불편한 감정도 솔직하게 얘기하면 더 좋아요.",
      en: "Perfect! It's better to be honest about uncomfortable feelings sometimes.",
      ja: "完璧です！時々不快な感情も正直に話すとより良いです。",
      'zh-CN': "完美！有时诚实地说出不舒适的感受会更好。",
      'zh-TW': "完美！有時誠實地說出不舒適的感受會更好。",
      vi: "Hoàn hảo! Đôi khi thành thật về những cảm xúc khó chịu sẽ tốt hơn.",
      id: "Sempurna! Kadang jujur tentang perasaan tidak nyaman akan lebih baik."
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type1", "Type3"],
      careful: ["Type5"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type3",
    title: {
      ko: "적당한 관심형",
      en: "Moderate Interest Type",
      ja: "適度な関心型",
      'zh-CN': "适度关心型",
      'zh-TW': "適度關心型",
      vi: "Kiểu Quan Tâm Vừa Phải",
      id: "Tipe Perhatian Sedang"
    },
    description: {
      ko: "솔직히 질투 좀 해요, 보통 수준\n질투를 솔직하게 인정하고 표현합니다. 연인의 이성 관계가 신경 쓰이고, 연락 늦으면 궁금합니다. 하지만 과하지 않고 대화로 해결하려 합니다. 질투를 애교로 표현할 줄 압니다. 대부분의 연인들이 받아들일 수 있는 수준입니다.",
      en: "Honestly, I get a bit jealous, normal level\nYou honestly admit and express jealousy. You care about your partner's opposite-sex relationships and get curious when they're late to contact. But you don't go overboard and try to solve it through conversation. You know how to express jealousy as a cute gesture. Most partners can accept this level.",
      ja: "正直に嫉妬します、普通レベル\n嫉妬を正直に認めて表現します。恋人の異性関係が気になり、連絡が遅いと気になります。でも過度ではなく、会話で解決しようとします。嫉妬を愛嬌で表現することを知っています。ほとんどの恋人が受け入れられるレベルです。",
      'zh-CN': "老实说有点嫉妒，正常水平\n你诚实承认并表达嫉妒。你关心伴侣的异性关系，联系晚了会好奇。但不过度，试图通过对话解决。你知道如何将嫉妒表达为可爱的姿态。大多数伴侣都能接受这个水平。",
      'zh-TW': "老實說有點嫉妒，正常水平\n你誠實承認並表達嫉妒。你關心伴侶的異性關係，聯繫晚了會好奇。但不過度，試圖通過對話解決。你知道如何將嫉妒表達為可愛的姿態。大多數伴侶都能接受這個水平。",
      vi: "Thành thật mà nói, tôi hơi ghen tuông, mức bình thường\nBạn thành thật thừa nhận và thể hiện sự ghen tuông. Bạn quan tâm đến mối quan hệ khác giới của người yêu và tò mò khi họ liên lạc muộn. Nhưng bạn không quá đà và cố gắng giải quyết thông qua trò chuyện. Bạn biết cách thể hiện sự ghen tuông như một cử chỉ dễ thương. Hầu hết các đối tác đều có thể chấp nhận mức này.",
      id: "Jujur, saya agak cemburu, level normal\nAnda jujur mengakui dan mengekspresikan cemburu. Anda peduli dengan hubungan lawan jenis pasangan dan penasaran ketika mereka terlambat menghubungi. Tapi Anda tidak berlebihan dan mencoba menyelesaikannya melalui percakapan. Anda tahu cara mengekspresikan cemburu sebagai gestur yang lucu. Kebanyakan pasangan bisa menerima level ini."
    },
    emoji: "🤔",
    characteristics: {
      ko: "솔직함, 표현력, 애교, 관심, 정직함",
      en: "Honesty, Expressiveness, Cuteness, Interest, Integrity",
      ja: "正直さ、表現力、愛嬌、関心、誠実さ",
      'zh-CN': "诚实、表达力、可爱、关心、正直",
      'zh-TW': "誠實、表達力、可愛、關心、正直",
      vi: "Thành thật, Khả năng biểu hiện, Dễ thương, Quan tâm, Chính trực",
      id: "Kejujuran, Ekspresif, Lucu, Perhatian, Integritas"
    },
    pros: {
      ko: "사랑 표현, 관심 확인, 솔직한 대화 가능",
      en: "Love expression, Interest confirmation, Honest conversation possible",
      ja: "愛情表現、関心確認、正直な会話可能",
      'zh-CN': "爱的表达、关心确认、诚实对话可能",
      'zh-TW': "愛的表達、關心確認、誠實對話可能",
      vi: "Biểu hiện tình yêu, Xác nhận sự quan tâm, Trò chuyện thành thật có thể",
      id: "Ekspresi cinta, Konfirmasi perhatian, Percakapan jujur memungkinkan"
    },
    cons: {
      ko: "가끔 과해서 상대방 부담, 불안감",
      en: "Sometimes excessive, burdening partner, anxiety",
      ja: "時々過度で相手に負担、不安感",
      'zh-CN': "有时过度，给伴侣负担，焦虑",
      'zh-TW': "有時過度，給伴侶負擔，焦慮",
      vi: "Đôi khi quá đà, gây gánh nặng cho đối phương, lo lắng",
      id: "Kadang berlebihan, membebani pasangan, kecemasan"
    },
    advice: {
      ko: "질투를 표현하되 상대방을 믿는 모습도 보여주세요. 균형이 중요합니다.",
      en: "Express jealousy but also show that you trust your partner. Balance is important.",
      ja: "嫉妬を表現するけど、相手を信じる姿も見せてください。バランスが重要です。",
      'zh-CN': "表达嫉妒但也要表现出你信任伴侣。平衡很重要。",
      'zh-TW': "表達嫉妒但也要表現出你信任伴侶。平衡很重要。",
      vi: "Thể hiện sự ghen tuông nhưng cũng thể hiện rằng bạn tin tưởng đối phương. Cân bằng rất quan trọng.",
      id: "Ekspresikan cemburu tapi juga tunjukkan bahwa Anda percaya pasangan. Keseimbangan penting."
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type1"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type4",
    title: {
      ko: "예민한 감시형",
      en: "Sensitive Surveillance Type",
      ja: "敏感監視型",
      'zh-CN': "敏感监视型",
      'zh-TW': "敏感監視型",
      vi: "Kiểu Giám Sát Nhạy Cảm",
      id: "Tipe Pengawasan Sensitif"
    },
    description: {
      ko: "많이 질투해요, 자주 확인하는 스타일\n질투가 많은 편입니다. 연인의 일거수일투족이 신경 쓰이고, SNS도 자주 확인합니다. 불안해서 자주 연락하고, 이성 친구와의 만남을 불편해합니다. 사랑하기 때문이지만, 상대방은 감시받는다고 느낄 수 있습니다. 관계가 피곤해질 수 있습니다.",
      en: "I get very jealous, frequently checking style\nYou're quite jealous. You care about your partner's every move and frequently check their SNS. You contact them often due to anxiety and feel uncomfortable with their opposite-sex friends. It's because you love them, but your partner may feel like they're being watched. The relationship can become exhausting.",
      ja: "よく嫉妬します、頻繁に確認するスタイル\n嫉妬が多い方です。恋人の一挙手一投足が気になり、SNSも頻繁に確認します。不安でよく連絡し、異性の友達との会うことを不快に感じます。愛しているからですが、相手は監視されていると感じるかもしれません。関係が疲れる可能性があります。",
      'zh-CN': "很嫉妒，经常检查的风格\n你比较嫉妒。你关心伴侣的一举一动，经常检查他们的SNS。由于焦虑你经常联系，对异性朋友的见面感到不舒服。这是因为爱，但伴侣可能感觉被监视。关系可能会变得疲惫。",
      'zh-TW': "很嫉妒，經常檢查的風格\n你比較嫉妒。你關心伴侶的一舉一動，經常檢查他們的SNS。由於焦慮你經常聯繫，對異性朋友的見面感到不舒服。這是因為愛，但伴侶可能感覺被監視。關係可能會變得疲憊。",
      vi: "Tôi rất ghen tuông, phong cách kiểm tra thường xuyên\nBạn khá ghen tuông. Bạn quan tâm đến mọi hành động của người yêu và thường xuyên kiểm tra SNS của họ. Bạn liên lạc thường xuyên do lo lắng và cảm thấy không thoải mái với bạn bè khác giới của họ. Đó là vì yêu, nhưng đối phương có thể cảm thấy như bị theo dõi. Mối quan hệ có thể trở nên mệt mỏi.",
      id: "Saya sangat cemburu, gaya sering cek\nAnda cukup cemburu. Anda peduli dengan setiap gerakan pasangan dan sering cek SNS mereka. Anda sering menghubungi karena kecemasan dan merasa tidak nyaman dengan teman lawan jenis mereka. Ini karena cinta, tapi pasangan mungkin merasa diawasi. Hubungan bisa menjadi melelahkan."
    },
    emoji: "🔍",
    characteristics: {
      ko: "예민함, 불안감, 확인 욕구, 소유욕, 의심",
      en: "Sensitivity, Anxiety, Need to confirm, Possessiveness, Suspicion",
      ja: "敏感さ、不安感、確認欲求、所有欲、疑い",
      'zh-CN': "敏感、焦虑、确认需求、占有欲、怀疑",
      'zh-TW': "敏感、焦慮、確認需求、佔有慾、懷疑",
      vi: "Nhạy cảm, Lo lắng, Nhu cầu xác nhận, Sở hữu, Nghi ngờ",
      id: "Sensitif, Kecemasan, Kebutuhan konfirmasi, Kepemilikan, Kecurigaan"
    },
    pros: {
      ko: "관심 많음, 사랑의 표현",
      en: "Lots of interest, Expression of love",
      ja: "関心多い、愛情表現",
      'zh-CN': "很多关心、爱的表达",
      'zh-TW': "很多關心、愛的表達",
      vi: "Nhiều quan tâm, Biểu hiện tình yêu",
      id: "Banyak perhatian, Ekspresi cinta"
    },
    cons: {
      ko: "상대방 부담, 감시, 불신, 관계 피로, 싸움 잦음",
      en: "Partner burden, Surveillance, Distrust, Relationship fatigue, Frequent fights",
      ja: "相手負担、監視、不信、関係疲労、喧嘩頻繁",
      'zh-CN': "伴侣负担、监视、不信任、关系疲劳、频繁争吵",
      'zh-TW': "伴侶負擔、監視、不信任、關係疲勞、頻繁爭吵",
      vi: "Gánh nặng cho đối phương, Giám sát, Không tin tưởng, Mệt mỏi trong mối quan hệ, Cãi nhau thường xuyên",
      id: "Beban pasangan, Pengawasan, Ketidakpercayaan, Kelelahan hubungan, Pertengkaran sering"
    },
    advice: {
      ko: "불안함을 질투로 표현하지 마세요. 신뢰가 필요합니다. 전문가 도움도 고려해보세요.",
      en: "Don't express anxiety as jealousy. Trust is needed. Consider professional help too.",
      ja: "不安を嫉妬で表現しないでください。信頼が必要です。専門家の助けも考えてみてください。",
      'zh-CN': "不要将焦虑表达为嫉妒。需要信任。也考虑专业帮助。",
      'zh-TW': "不要將焦慮表達為嫉妒。需要信任。也考慮專業幫助。",
      vi: "Đừng thể hiện sự lo lắng như ghen tuông. Cần có sự tin tưởng. Cũng nên cân nhắc sự giúp đỡ chuyên nghiệp.",
      id: "Jangan ekspresikan kecemasan sebagai cemburu. Perlu kepercayaan. Pertimbangkan juga bantuan profesional."
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type1"],
      difficult: ["Type4", "Type5", "Type6"]
    }
  },
  {
    type: "Type5",
    title: {
      ko: "집착 소유형",
      en: "Obsessive Possessive Type",
      ja: "執着所有型",
      'zh-CN': "执着占有型",
      'zh-TW': "執著佔有型",
      vi: "Kiểu Sở Hữu Ám Ảnh",
      id: "Tipe Kepemilikan Obsesif"
    },
    description: {
      ko: "당신은 내 거야! 집착 수준의 질투\n매우 심한 질투입니다. 연인을 소유물처럼 생각하고, 이성 관계를 거의 허락하지 않습니다. 휴대폰을 자주 확인하고, 행동을 제한합니다. \"넌 내 거야\"라는 생각이 강합니다. 사랑이 아니라 집착에 가깝습니다. 관계가 건강하지 못하고, 상대방이 질식할 수 있습니다.",
      en: "You're mine! Obsessive level jealousy\nVery severe jealousy. You think of your partner as a possession and hardly allow opposite-sex relationships. You frequently check their phone and restrict their actions. The thought \"You're mine\" is strong. This is closer to obsession than love. The relationship is unhealthy and your partner may feel suffocated.",
      ja: "あなたは私のもの！執着レベルの嫉妬\n非常に深刻な嫉妬です。恋人を所有物のように考え、異性関係をほとんど許可しません。携帯電話を頻繁に確認し、行動を制限します。「あなたは私のもの」という考えが強いです。愛ではなく執着に近いです。関係は健康的ではなく、相手が窒息感を感じる可能性があります。",
      'zh-CN': "你是我的！执着水平的嫉妒\n非常严重的嫉妒。你把伴侣当作财产，几乎不允许异性关系。你经常检查他们的手机并限制他们的行为。\"你是我的\"这种想法很强烈。这更接近痴迷而不是爱。关系不健康，伴侣可能感到窒息。",
      'zh-TW': "你是我的！執著水平的嫉妒\n非常嚴重的嫉妒。你把伴侶當作財產，幾乎不允許異性關係。你經常檢查他們的手機並限制他們的行為。「你是我的」這種想法很強烈。這更接近痴迷而不是愛。關係不健康，伴侶可能感到窒息。",
      vi: "Bạn là của tôi! Ghen tuông ở mức ám ảnh\nGhen tuông rất nghiêm trọng. Bạn coi người yêu như tài sản và hầu như không cho phép mối quan hệ khác giới. Bạn thường xuyên kiểm tra điện thoại của họ và hạn chế hành động của họ. Suy nghĩ \"Bạn là của tôi\" rất mạnh mẽ. Đây gần với ám ảnh hơn là tình yêu. Mối quan hệ không lành mạnh và đối phương có thể cảm thấy ngạt thở.",
      id: "Kamu milikku! Cemburu level obsesif\nCemburu yang sangat parah. Anda menganggap pasangan sebagai milik dan hampir tidak mengizinkan hubungan lawan jenis. Anda sering cek ponsel mereka dan membatasi tindakan mereka. Pikiran \"Kamu milikku\" sangat kuat. Ini lebih dekat dengan obsesi daripada cinta. Hubungan tidak sehat dan pasangan mungkin merasa tercekik."
    },
    emoji: "😤",
    characteristics: {
      ko: "집착, 소유욕, 통제, 의심, 불안",
      en: "Obsession, Possessiveness, Control, Suspicion, Anxiety",
      ja: "執着、所有欲、コントロール、疑い、不安",
      'zh-CN': "痴迷、占有欲、控制、怀疑、焦虑",
      'zh-TW': "痴迷、佔有慾、控制、懷疑、焦慮",
      vi: "Ám ảnh, Sở hữu, Kiểm soát, Nghi ngờ, Lo lắng",
      id: "Obsesi, Kepemilikan, Kontrol, Kecurigaan, Kecemasan"
    },
    pros: {
      ko: "사랑이 강하다고 착각",
      en: "Mistakenly think love is strong",
      ja: "愛が強いと錯覚",
      'zh-CN': "错误地认为爱很强烈",
      'zh-TW': "錯誤地認為愛很強烈",
      vi: "Nhầm tưởng tình yêu mạnh mẽ",
      id: "Salah mengira cinta kuat"
    },
    cons: {
      ko: "관계 파괴, 상대방 질식, 불신, 폭력 가능성, 이별 확률 높음",
      en: "Relationship destruction, Partner suffocation, Distrust, Violence possibility, High breakup probability",
      ja: "関係破壊、相手窒息、不信、暴力可能性、別れ確率高い",
      'zh-CN': "关系破坏、伴侣窒息、不信任、暴力可能性、分手概率高",
      'zh-TW': "關係破壞、伴侶窒息、不信任、暴力可能性、分手概率高",
      vi: "Phá hủy mối quan hệ, Đối phương ngạt thở, Không tin tưởng, Khả năng bạo lực, Xác suất chia tay cao",
      id: "Penghancuran hubungan, Pasangan tercekik, Ketidakpercayaan, Kemungkinan kekerasan, Probabilitas putus tinggi"
    },
    advice: {
      ko: "이건 사랑이 아니라 집착입니다. 전문가 상담이 시급합니다. 스스로 인정하고 변화가 필요해요.",
      en: "This is not love but obsession. Professional counseling is urgent. You need to acknowledge it yourself and change.",
      ja: "これは愛ではなく執着です。専門家のカウンセリングが急務です。自分で認めて変化が必要です。",
      'zh-CN': "这不是爱而是痴迷。专业咨询很紧急。你需要自己承认并改变。",
      'zh-TW': "這不是愛而是痴迷。專業諮詢很緊急。你需要自己承認並改變。",
      vi: "Đây không phải tình yêu mà là ám ảnh. Tư vấn chuyên nghiệp rất cấp thiết. Bạn cần tự thừa nhận và thay đổi.",
      id: "Ini bukan cinta tapi obsesi. Konseling profesional sangat mendesak. Anda perlu mengakui sendiri dan berubah."
    },
    compatibility: {
      best: [],
      good: [],
      careful: ["Type6"],
      difficult: ["Type1", "Type2", "Type3", "Type4", "Type5"]
    }
  },
  {
    type: "Type6",
    title: {
      ko: "극한 질투형",
      en: "Extreme Jealousy Type",
      ja: "極限嫉妬型",
      'zh-CN': "极端嫉妒型",
      'zh-TW': "極端嫉妒型",
      vi: "Kiểu Ghen Tuông Cực Đoan",
      id: "Tipe Cemburu Ekstrem"
    },
    description: {
      ko: "통제 불능! 극단적 질투의 위험 수준\n극도로 심각한 수준의 질투입니다. 연인의 모든 것을 통제하려 하고, 이성과의 대화조차 용납하지 않습니다. 의심이 극심하고, 감정 조절이 안 됩니다. 이 수준은 관계 폭력으로 이어질 수 있어 매우 위험합니다. 즉시 전문가 도움이 필요합니다.",
      en: "Out of control! Dangerous level of extreme jealousy\nExtremely serious level of jealousy. You try to control everything about your partner and don't even allow conversations with the opposite sex. Suspicion is extreme and emotional control is impossible. This level can lead to relationship violence and is very dangerous. Immediate professional help is needed.",
      ja: "制御不能！極端な嫉妬の危険レベル\n極めて深刻なレベルの嫉妬です。恋人のすべてをコントロールしようとし、異性との会話さえ許容しません。疑いは極度で、感情のコントロールができません。このレベルは関係暴力につながる可能性があり、非常に危険です。即座に専門家の助けが必要です。",
      'zh-CN': "失控！极端嫉妒的危险水平\n极其严重的嫉妒水平。你试图控制伴侣的一切，甚至不允许与异性的对话。怀疑极其严重，无法控制情绪。这个水平可能导致关系暴力，非常危险。需要立即的专业帮助。",
      'zh-TW': "失控！極端嫉妒的危險水平\n極其嚴重的嫉妒水平。你試圖控制伴侶的一切，甚至不允許與異性的對話。懷疑極其嚴重，無法控制情緒。這個水平可能導致關係暴力，非常危險。需要立即的專業幫助。",
      vi: "Mất kiểm soát! Mức độ nguy hiểm của sự ghen tuông cực đoan\nMức độ ghen tuông cực kỳ nghiêm trọng. Bạn cố gắng kiểm soát mọi thứ về người yêu và thậm chí không cho phép trò chuyện với người khác giới. Sự nghi ngờ cực độ và không thể kiểm soát cảm xúc. Mức này có thể dẫn đến bạo lực trong mối quan hệ và rất nguy hiểm. Cần sự giúp đỡ chuyên nghiệp ngay lập tức.",
      id: "Di luar kendali! Level berbahaya cemburu ekstrem\nLevel cemburu yang sangat serius. Anda mencoba mengontrol segalanya tentang pasangan dan bahkan tidak mengizinkan percakapan dengan lawan jenis. Kecurigaan ekstrem dan kontrol emosi tidak mungkin. Level ini dapat menyebabkan kekerasan dalam hubungan dan sangat berbahaya. Bantuan profesional segera diperlukan."
    },
    emoji: "🔥",
    characteristics: {
      ko: "극심한 의심, 통제, 감정 폭발, 폭력 가능성, 병적 집착",
      en: "Extreme suspicion, Control, Emotional outburst, Violence possibility, Pathological obsession",
      ja: "極度の疑い、コントロール、感情爆発、暴力可能性、病的執着",
      'zh-CN': "极度怀疑、控制、情绪爆发、暴力可能性、病态痴迷",
      'zh-TW': "極度懷疑、控制、情緒爆發、暴力可能性、病態痴迷",
      vi: "Nghi ngờ cực độ, Kiểm soát, Bùng nổ cảm xúc, Khả năng bạo lực, Ám ảnh bệnh lý",
      id: "Kecurigaan ekstrem, Kontrol, Ledakan emosi, Kemungkinan kekerasan, Obsesi patologis"
    },
    pros: {
      ko: "없음",
      en: "None",
      ja: "なし",
      'zh-CN': "无",
      'zh-TW': "無",
      vi: "Không có",
      id: "Tidak ada"
    },
    cons: {
      ko: "관계 파괴, 범죄 가능성, 상대방 트라우마, 법적 문제",
      en: "Relationship destruction, Crime possibility, Partner trauma, Legal issues",
      ja: "関係破壊、犯罪可能性、相手トラウマ、法的問題",
      'zh-CN': "关系破坏、犯罪可能性、伴侣创伤、法律问题",
      'zh-TW': "關係破壞、犯罪可能性、伴侶創傷、法律問題",
      vi: "Phá hủy mối quan hệ, Khả năng tội phạm, Chấn thương đối phương, Vấn đề pháp lý",
      id: "Penghancuran hubungan, Kemungkinan kejahatan, Trauma pasangan, Masalah hukum"
    },
    advice: {
      ko: "이것은 심각한 문제입니다. 즉시 정신건강 전문가의 도움을 받으세요. 연애보다 치료가 우선입니다.",
      en: "This is a serious problem. Seek immediate help from mental health professionals. Treatment is more important than dating.",
      ja: "これは深刻な問題です。すぐに精神保健専門家の助けを求めてください。恋愛より治療が優先です。",
      'zh-CN': "这是一个严重的问题。立即寻求心理健康专家的帮助。治疗比恋爱更重要。",
      'zh-TW': "這是一個嚴重的問題。立即尋求心理健康專家的幫助。治療比戀愛更重要。",
      vi: "Đây là vấn đề nghiêm trọng. Tìm kiếm sự giúp đỡ ngay lập tức từ các chuyên gia sức khỏe tâm thần. Điều trị quan trọng hơn hẹn hò.",
      id: "Ini adalah masalah serius. Segera cari bantuan dari profesional kesehatan mental. Perawatan lebih penting daripada pacaran."
    },
    compatibility: {
      best: [],
      good: [],
      careful: [],
      difficult: ["Type1", "Type2", "Type3", "Type4", "Type5", "Type6"]
    }
  }
];

// 결과 계산 함수
export function calculateJealousyResult(answers: Record<string, number>[]): string {
  const scores: Record<string, number> = {};
  
  answers.forEach(answer => {
    Object.entries(answer).forEach(([type, score]) => {
      scores[type] = (scores[type] || 0) + score;
    });
  });
  
  // 최고 점수 타입 찾기
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type] === maxScore);
  
  return resultType || 'Type1';
}
