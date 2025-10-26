export interface JealousyQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface JealousyResult {
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

export const jealousyQuestions: JealousyQuestion[] = [
  {
    id: 1,
    question: {
      ko: "연인이 이성 친구와 둘이서 식사한다고 하면?",
      en: "Your partner says they're having dinner with a friend of the opposite sex?",
      ja: "恋人が異性の友達と二人で食事すると言ったら？",
      'zh-CN': "恋人说要和异性朋友单独吃饭？",
      'zh-TW': "戀人說要和異性朋友單獨吃飯？",
      id: "Pasangan Anda mengatakan akan makan malam dengan teman lawan jenis?",
      vi: "Người yêu nói sẽ ăn tối với bạn khác giới?"
    },
    options: [
      {
        text: {
          ko: "\"좋은 시간 보내\" 전혀 신경 안 씀",
          en: "\"Have a good time\" - not concerned at all",
          ja: "「いい時間を過ごして」全く気にしない",
          'zh-CN': "「玩得开心」完全不介意",
          'zh-TW': "「玩得開心」完全不介意",
          id: "\"Selamat bersenang-senang\" - tidak peduli sama sekali",
          vi: "\"Vui vẻ nhé\" - hoàn toàn không lo lắng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"누구랑? 재미있게 놀다 와\" 궁금하지만 괜찮음",
          en: "\"Who with? Have fun\" - curious but okay",
          ja: "「誰と？楽しんで」気になるけど大丈夫",
          'zh-CN': "「和谁？玩得开心」好奇但没关系",
          'zh-TW': "「和誰？玩得開心」好奇但沒關係",
          id: "\"Siapa? Selamat bersenang-senang\" - penasaran tapi oke",
          vi: "\"Với ai? Vui vẻ nhé\" - tò mò nhưng ổn"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"어디서 만나? 몇 시에 끝나?\" 궁금하고 약간 불안",
          en: "\"Where? What time will it end?\" - curious and slightly anxious",
          ja: "「どこで？何時に終わる？」気になって少し不安",
          'zh-CN': "「在哪里？几点结束？」好奇且有点不安",
          'zh-TW': "「在哪裡？幾點結束？」好奇且有點不安",
          id: "\"Di mana? Jam berapa selesai?\" - penasaran dan sedikit cemas",
          vi: "\"Ở đâu? Mấy giờ xong?\" - tò mò và hơi lo lắng"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "\"왜 꼭 둘이? 나도 같이 가면 안 돼?\" 불편하고 가고 싶음",
          en: "\"Why just the two of you? Can't I come too?\" - uncomfortable and want to go",
          ja: "「なぜ二人だけ？私も一緒に行けない？」不快で一緒に行きたい",
          'zh-CN': "「为什么只有你们两个？我不能一起去吗？」不舒服且想去",
          'zh-TW': "「為什麼只有你們兩個？我不能一起去嗎？」不舒服且想去",
          id: "\"Mengapa hanya berdua? Aku tidak bisa ikut?\" - tidak nyaman dan ingin ikut",
          vi: "\"Tại sao chỉ hai người? Tôi không thể đi cùng?\" - không thoải mái và muốn đi"
        },
        scores: { Type5: 2, Type6: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연인의 휴대폰을 볼 수 있는 상황이라면?",
      en: "If you could see your partner's phone?",
      ja: "恋人の携帯電話を見ることができる状況なら？",
      'zh-CN': "如果能看恋人的手机？",
      'zh-TW': "如果能看戀人的手機？",
      id: "Jika Anda bisa melihat ponsel pasangan?",
      vi: "Nếu bạn có thể xem điện thoại của người yêu?"
    },
    options: [
      {
        text: {
          ko: "볼 생각도 안 함",
          en: "Wouldn't even think about it",
          ja: "見る気もない",
          'zh-CN': "根本不想看",
          'zh-TW': "根本不想看",
          id: "Tidak akan terpikir untuk melihat",
          vi: "Không bao giờ nghĩ đến việc xem"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "궁금하지만 안 봄",
          en: "Curious but won't look",
          ja: "気になるけど見ない",
          'zh-CN': "好奇但不看",
          'zh-TW': "好奇但不看",
          id: "Penasaran tapi tidak akan melihat",
          vi: "Tò mò nhưng không xem"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "슬쩍 보고 싶은 마음 있음",
          en: "Feel like taking a peek",
          ja: "ちょっと見たい気持ちがある",
          'zh-CN': "有点想偷看",
          'zh-TW': "有點想偷看",
          id: "Ada keinginan untuk mengintip",
          vi: "Có ý muốn xem lén"
        },
        scores: { Type4: 8, Type3: 2 }
      },
      {
        text: {
          ko: "보고 싶어서 참기 힘듦",
          en: "Hard to resist looking",
          ja: "見たくて我慢できない",
          'zh-CN': "想看忍不住",
          'zh-TW': "想看忍不住",
          id: "Sulit menahan diri untuk melihat",
          vi: "Khó cưỡng lại việc xem"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "연인이 과거 연애 이야기를 하면?",
      en: "When your partner talks about past relationships?",
      ja: "恋人が過去の恋愛話をする時は？",
      'zh-CN': "当恋人谈论过去的恋爱时？",
      'zh-TW': "當戀人談論過去的戀愛時？",
      id: "Ketika pasangan bercerita tentang hubungan masa lalu?",
      vi: "Khi người yêu kể về những mối tình cũ?"
    },
    options: [
      {
        text: {
          ko: "그저 지나간 이야기로 들음",
          en: "Just listen as past stories",
          ja: "ただ過去の話として聞く",
          'zh-CN': "只是当作过去的故事听",
          'zh-TW': "只是當作過去的故事聽",
          id: "Hanya mendengarkan sebagai cerita masa lalu",
          vi: "Chỉ nghe như những câu chuyện quá khứ"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "듣되 깊이 생각 안 함",
          en: "Listen but don't think deeply",
          ja: "聞くけど深く考えない",
          'zh-CN': "听但不深入思考",
          'zh-TW': "聽但不深入思考",
          id: "Mendengarkan tapi tidak memikirkan dalam-dalam",
          vi: "Nghe nhưng không suy nghĩ sâu"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "듣다 보면 기분이 좀 안 좋음",
          en: "Feel a bit bad while listening",
          ja: "聞いていると少し気分が悪い",
          'zh-CN': "听着听着心情有点不好",
          'zh-TW': "聽著聽著心情有點不好",
          id: "Merasa sedikit tidak enak saat mendengarkan",
          vi: "Cảm thấy hơi khó chịu khi nghe"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "듣기 싫고 화제를 바꿈",
          en: "Don't want to hear and change topic",
          ja: "聞きたくなくて話題を変える",
          'zh-CN': "不想听并转移话题",
          'zh-TW': "不想聽並轉移話題",
          id: "Tidak ingin mendengarkan dan mengubah topik",
          vi: "Không muốn nghe và chuyển chủ đề"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "연인의 SNS에 이성 친구가 친근한 댓글을 달면?",
      en: "When opposite-sex friends leave friendly comments on your partner's SNS?",
      ja: "恋人のSNSに異性の友達が親しみやすいコメントを残したら？",
      'zh-CN': "当异性朋友在恋人的SNS上留下友好评论时？",
      'zh-TW': "當異性朋友在戀人的SNS上留下友好評論時？",
      id: "Ketika teman lawan jenis meninggalkan komentar ramah di SNS pasangan?",
      vi: "Khi bạn khác giới để lại bình luận thân thiện trên SNS của người yêu?"
    },
    options: [
      {
        text: {
          ko: "전혀 신경 안 씀",
          en: "Don't care at all",
          ja: "全く気にしない",
          'zh-CN': "完全不在意",
          'zh-TW': "完全不在意",
          id: "Tidak peduli sama sekali",
          vi: "Hoàn toàn không quan tâm"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "보긴 하지만 괜찮음",
          en: "See it but it's okay",
          ja: "見るけど大丈夫",
          'zh-CN': "看到但没关系",
          'zh-TW': "看到但沒關係",
          id: "Melihatnya tapi tidak apa-apa",
          vi: "Thấy nhưng không sao"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "누군지 확인하고 약간 신경 쓰임",
          en: "Check who it is and feel a bit concerned",
          ja: "誰か確認して少し気になる",
          'zh-CN': "确认是谁并有点在意",
          'zh-TW': "確認是誰並有點在意",
          id: "Cek siapa itu dan sedikit khawatir",
          vi: "Kiểm tra xem ai và hơi lo lắng"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "누군지 물어보고 삭제 요청",
          en: "Ask who it is and request deletion",
          ja: "誰か聞いて削除を要求",
          'zh-CN': "询问是谁并要求删除",
          'zh-TW': "詢問是誰並要求刪除",
          id: "Tanya siapa itu dan minta dihapus",
          vi: "Hỏi ai và yêu cầu xóa"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "연인이 외모를 꾸미고 나갈 때?",
      en: "When your partner dresses up to go out?",
      ja: "恋人が身なりを整えて出かける時は？",
      'zh-CN': "当恋人打扮出门时？",
      'zh-TW': "當戀人打扮出門時？",
      id: "Ketika pasangan berdandan untuk keluar?",
      vi: "Khi người yêu trang điểm để ra ngoài?"
    },
    options: [
      {
        text: {
          ko: "\"예쁘다/멋있다\" 칭찬만",
          en: "Just compliment \"You look pretty/handsome\"",
          ja: "「きれい/かっこいい」と褒めるだけ",
          'zh-CN': "只是赞美「漂亮/帅气」",
          'zh-TW': "只是讚美「漂亮/帥氣」",
          id: "Hanya memuji \"Cantik/keren\"",
          vi: "Chỉ khen \"Đẹp/đẹp trai\""
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"어디 가?\" 가볍게 물어봄",
          en: "Lightly ask \"Where are you going?\"",
          ja: "「どこ行く？」軽く聞く",
          'zh-CN': "轻松问「去哪里？」",
          'zh-TW': "輕鬆問「去哪裡？」",
          id: "Bertanya ringan \"Mau ke mana?\"",
          vi: "Hỏi nhẹ \"Đi đâu?\""
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"나 만날 때보다 더 꾸민 것 같은데?\" 비교함",
          en: "Compare \"You dress up more than when meeting me\"",
          ja: "「私と会う時よりおしゃれしてる？」比較する",
          'zh-CN': "比较「比我见面时打扮得更漂亮」",
          'zh-TW': "比較「比我見面時打扮得更漂亮」",
          id: "Membandingkan \"Lebih berdandan dari saat ketemu aku\"",
          vi: "So sánh \"Trang điểm đẹp hơn khi gặp tôi\""
        },
        scores: { Type4: 8, Type3: 2 }
      },
      {
        text: {
          ko: "\"왜 이렇게 꾸며? 누구 만나?\" 의심함",
          en: "Suspect \"Why dress up so much? Who are you meeting?\"",
          ja: "「なぜそんなにおしゃれ？誰に会う？」疑う",
          'zh-CN': "怀疑「为什么打扮得这么漂亮？见谁？」",
          'zh-TW': "懷疑「為什麼打扮得這麼漂亮？見誰？」",
          id: "Mencurigai \"Kenapa berdandan? Ketemu siapa?\"",
          vi: "Nghi ngờ \"Tại sao trang điểm đẹp thế? Gặp ai?\""
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "연인이 당신보다 친구들과 더 자주 만나면?",
      en: "When your partner meets friends more often than you?",
      ja: "恋人があなたより友達と頻繁に会うなら？",
      'zh-CN': "当恋人比和你见面更频繁地见朋友时？",
      'zh-TW': "當戀人比和你見面更頻繁地見朋友時？",
      id: "Ketika pasangan lebih sering bertemu teman daripada Anda?",
      vi: "Khi người yêu gặp bạn bè thường xuyên hơn gặp bạn?"
    },
    options: [
      {
        text: {
          ko: "친구들도 중요하니까 괜찮음",
          en: "Friends are important too, so it's okay",
          ja: "友達も大切だから大丈夫",
          'zh-CN': "朋友也很重要，所以没关系",
          'zh-TW': "朋友也很重要，所以沒關係",
          id: "Teman juga penting, jadi tidak apa-apa",
          vi: "Bạn bè cũng quan trọng, nên không sao"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "좀 아쉽지만 이해함",
          en: "A bit disappointed but understand",
          ja: "少し残念だけど理解する",
          'zh-CN': "有点遗憾但理解",
          'zh-TW': "有點遺憾但理解",
          id: "Sedikit kecewa tapi mengerti",
          vi: "Hơi tiếc nhưng hiểu"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "나보다 친구가 중요한 건가 서운함",
          en: "Feel hurt thinking friends are more important than me",
          ja: "私より友達が大切なのか悲しい",
          'zh-CN': "朋友比我更重要吗？感到难过",
          'zh-TW': "朋友比我更重要嗎？感到難過",
          id: "Sedih karena teman lebih penting dari aku",
          vi: "Buồn vì bạn bè quan trọng hơn tôi"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "화가 나고 따지고 싶음",
          en: "Get angry and want to confront",
          ja: "怒って追求したくなる",
          'zh-CN': "生气并想要质问",
          'zh-TW': "生氣並想要質問",
          id: "Marah dan ingin menanyai",
          vi: "Tức giận và muốn chất vấn"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "길 가다가 연인이 다른 사람을 힐끗 보면?",
      en: "When walking, your partner glances at someone else?",
      ja: "歩いている時、恋人が他の人をちらっと見たら？",
      'zh-CN': "走路时，恋人瞥了别人一眼？",
      'zh-TW': "走路時，戀人瞥了別人一眼？",
      id: "Saat berjalan, pasangan melirik orang lain?",
      vi: "Khi đi đường, người yêu liếc nhìn người khác?"
    },
    options: [
      {
        text: {
          ko: "전혀 신경 안 씀",
          en: "Don't care at all",
          ja: "全く気にしない",
          'zh-CN': "完全不在意",
          'zh-TW': "完全不在意",
          id: "Tidak peduli sama sekali",
          vi: "Hoàn toàn không quan tâm"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "봤구나 하고 넘어감",
          en: "Notice and move on",
          ja: "見たなと思って通り過ぎる",
          'zh-CN': "看到了就过去了",
          'zh-TW': "看到了就過去了",
          id: "Melihat dan melanjutkan",
          vi: "Thấy và bỏ qua"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"방금 봤지?\" 확인함",
          en: "Confirm \"You just looked, right?\"",
          ja: "「今見たでしょ？」確認する",
          'zh-CN': "确认「刚才看了吧？」",
          'zh-TW': "確認「剛才看了吧？」",
          id: "Konfirmasi \"Tadi lihat kan?\"",
          vi: "Xác nhận \"Vừa nhìn phải không?\""
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "기분 나빠하며 따짐",
          en: "Feel bad and confront",
          ja: "機嫌を悪くして追求する",
          'zh-CN': "心情不好并质问",
          'zh-TW': "心情不好並質問",
          id: "Kesal dan menanyai",
          vi: "Khó chịu và chất vấn"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "연인이 답장이 늦으면?",
      en: "When your partner's reply is late?",
      ja: "恋人の返信が遅い時は？",
      'zh-CN': "当恋人的回复很慢时？",
      'zh-TW': "當戀人的回覆很慢時？",
      id: "Ketika balasan pasangan terlambat?",
      vi: "Khi người yêu trả lời chậm?"
    },
    options: [
      {
        text: {
          ko: "바쁘겠거니 생각함",
          en: "Think they must be busy",
          ja: "忙しいんだろうと思う",
          'zh-CN': "想着他们一定很忙",
          'zh-TW': "想著他們一定很忙",
          id: "Berpikir pasti sibuk",
          vi: "Nghĩ chắc đang bận"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "언제 답할까 궁금함",
          en: "Wonder when they'll reply",
          ja: "いつ返信するか気になる",
          'zh-CN': "好奇什么时候会回复",
          'zh-TW': "好奇什麼時候會回覆",
          id: "Penasaran kapan akan balas",
          vi: "Tò mò khi nào sẽ trả lời"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "왜 안 읽었나 확인함",
          en: "Check why they haven't read it",
          ja: "なぜ読んでないか確認する",
          'zh-CN': "确认为什么没读",
          'zh-TW': "確認為什麼沒讀",
          id: "Cek kenapa belum dibaca",
          vi: "Kiểm tra tại sao chưa đọc"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "불안하고 계속 연락함",
          en: "Feel anxious and keep contacting",
          ja: "不安で連絡し続ける",
          'zh-CN': "不安并持续联系",
          'zh-TW': "不安並持續聯繫",
          id: "Cemas dan terus menghubungi",
          vi: "Lo lắng và liên tục nhắn tin"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "연인의 이성 친구가 많으면?",
      en: "When your partner has many opposite-sex friends?",
      ja: "恋人の異性の友達が多いなら？",
      'zh-CN': "当恋人的异性朋友很多时？",
      'zh-TW': "當戀人的異性朋友很多時？",
      id: "Ketika pasangan memiliki banyak teman lawan jenis?",
      vi: "Khi người yêu có nhiều bạn khác giới?"
    },
    options: [
      {
        text: {
          ko: "사교적이네 생각함",
          en: "Think they're sociable",
          ja: "社交的だと思う",
          'zh-CN': "想着他们很社交",
          'zh-TW': "想著他們很社交",
          id: "Berpikir mereka sosial",
          vi: "Nghĩ họ rất hòa đồng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "별로 신경 안 씀",
          en: "Don't really care",
          ja: "あまり気にしない",
          'zh-CN': "不太在意",
          'zh-TW': "不太在意",
          id: "Tidak terlalu peduli",
          vi: "Không quan tâm lắm"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "조금 불안하고 궁금함",
          en: "Feel a bit anxious and curious",
          ja: "少し不安で気になる",
          'zh-CN': "有点不安和好奇",
          'zh-TW': "有點不安和好奇",
          id: "Sedikit cemas dan penasaran",
          vi: "Hơi lo lắng và tò mò"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "불편하고 만나지 말라고 함",
          en: "Feel uncomfortable and ask them not to meet",
          ja: "不快で会わないでと言う",
          'zh-CN': "不舒服并要求不要见面",
          'zh-TW': "不舒服並要求不要見面",
          id: "Tidak nyaman dan minta jangan ketemu",
          vi: "Không thoải mái và yêu cầu đừng gặp"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "연인이 \"예전 애인이 더 나았어\"라는 농담을 하면?",
      en: "When your partner jokes \"My ex was better\"?",
      ja: "恋人が「昔の恋人の方が良かった」と冗談を言ったら？",
      'zh-CN': "当恋人开玩笑说「前任更好」时？",
      'zh-TW': "當戀人開玩笑說「前任更好」時？",
      id: "Ketika pasangan bercanda \"Mantan pacar lebih baik\"?",
      vi: "Khi người yêu đùa \"Người yêu cũ tốt hơn\"?"
    },
    options: [
      {
        text: {
          ko: "웃으며 넘김",
          en: "Laugh and move on",
          ja: "笑って流す",
          'zh-CN': "笑着过去",
          'zh-TW': "笑著過去",
          id: "Tertawa dan melupakan",
          vi: "Cười và bỏ qua"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "농담인 줄 알지만 약간 기분 나쁨",
          en: "Know it's a joke but feel a bit bad",
          ja: "冗談だと分かるけど少し気分が悪い",
          'zh-CN': "知道是玩笑但有点不舒服",
          'zh-TW': "知道是玩笑但有點不舒服",
          id: "Tahu itu candaan tapi sedikit kesal",
          vi: "Biết là đùa nhưng hơi khó chịu"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "진담인가 싶어 기분 나쁨",
          en: "Feel bad thinking it might be serious",
          ja: "本気かもしれないと思って気分が悪い",
          'zh-CN': "想着可能是认真的，心情不好",
          'zh-TW': "想著可能是認真的，心情不好",
          id: "Kesal karena mungkin serius",
          vi: "Khó chịu vì có thể là thật"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "화내거나 삐침",
          en: "Get angry or sulk",
          ja: "怒ったりすねたりする",
          'zh-CN': "生气或闹别扭",
          'zh-TW': "生氣或鬧彆扭",
          id: "Marah atau cemberut",
          vi: "Tức giận hoặc hờn dỗi"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "파티에서 연인이 다른 사람과 대화에 빠져있으면?",
      en: "At a party, when your partner is engrossed in conversation with someone else?",
      ja: "パーティーで恋人が他の人と話に夢中になっていたら？",
      'zh-CN': "在派对上，当恋人沉迷于与别人的对话时？",
      'zh-TW': "在派對上，當戀人沉迷於與別人的對話時？",
      id: "Di pesta, ketika pasangan asyik berbicara dengan orang lain?",
      vi: "Tại bữa tiệc, khi người yêu say sưa nói chuyện với người khác?"
    },
    options: [
      {
        text: {
          ko: "자유롭게 두고 나도 다른 사람과 대화",
          en: "Leave them freely and talk to others too",
          ja: "自由にさせて私も他の人と話す",
          'zh-CN': "让他们自由，我也和别人聊天",
          'zh-TW': "讓他們自由，我也和別人聊天",
          id: "Biarkan bebas dan aku juga bicara dengan orang lain",
          vi: "Để họ tự do và tôi cũng nói chuyện với người khác"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "지켜보다 나중에 합류",
          en: "Watch and join later",
          ja: "見守って後で合流する",
          'zh-CN': "观察并稍后加入",
          'zh-TW': "觀察並稍後加入",
          id: "Mengawasi dan bergabung nanti",
          vi: "Quan sát và tham gia sau"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "자주 확인하고 곁에 있으려 함",
          en: "Check frequently and try to stay nearby",
          ja: "頻繁に確認して側にいようとする",
          'zh-CN': "频繁检查并试图待在附近",
          'zh-TW': "頻繁檢查並試圖待在附近",
          id: "Sering cek dan coba dekat",
          vi: "Thường xuyên kiểm tra và cố gắng ở gần"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "가서 대화를 끊거나 같이 있으려 함",
          en: "Go interrupt the conversation or try to stay together",
          ja: "行って会話を遮るか一緒にいようとする",
          'zh-CN': "去打断对话或试图待在一起",
          'zh-TW': "去打斷對話或試圖待在一起",
          id: "Datang mengganggu percakapan atau coba bersama",
          vi: "Đến ngắt cuộc trò chuyện hoặc cố gắng ở cùng nhau"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "질투에 대한 당신의 생각은?",
      en: "What do you think about jealousy?",
      ja: "嫉妬についてあなたの考えは？",
      'zh-CN': "你对嫉妒的看法是什么？",
      'zh-TW': "你對嫉妒的看法是什麼？",
      id: "Apa pendapat Anda tentang kecemburuan?",
      vi: "Bạn nghĩ gì về sự ghen tuông?"
    },
    options: [
      {
        text: {
          ko: "사랑이라면 질투하지 않아야 함",
          en: "If it's love, there should be no jealousy",
          ja: "愛なら嫉妬すべきではない",
          'zh-CN': "如果是爱，就不应该有嫉妒",
          'zh-TW': "如果是愛，就不應該有嫉妒",
          id: "Jika cinta, tidak boleh ada kecemburuan",
          vi: "Nếu là tình yêu thì không nên ghen tuông"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "약간의 질투는 자연스러움",
          en: "A little jealousy is natural",
          ja: "少しの嫉妬は自然",
          'zh-CN': "一点嫉妒是自然的",
          'zh-TW': "一點嫉妒是自然的",
          id: "Sedikit kecemburuan itu wajar",
          vi: "Một chút ghen tuông là tự nhiên"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "사랑하면 질투하는 게 당연함",
          en: "If you love, jealousy is natural",
          ja: "愛すれば嫉妬するのは当然",
          'zh-CN': "如果爱，嫉妒是理所当然的",
          'zh-TW': "如果愛，嫉妒是理所當然的",
          id: "Jika cinta, kecemburuan itu wajar",
          vi: "Nếu yêu thì ghen tuông là đương nhiên"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "질투는 사랑의 증거",
          en: "Jealousy is proof of love",
          ja: "嫉妬は愛の証拠",
          'zh-CN': "嫉妒是爱的证明",
          'zh-TW': "嫉妒是愛的證明",
          id: "Kecemburuan adalah bukti cinta",
          vi: "Ghen tuông là bằng chứng của tình yêu"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
];

export const jealousyResults: JealousyResult[] = [
  {
    type: "Type1",
    emoji: "🕊️",
    title: {
      ko: "초월적 신뢰형",
      en: "Transcendent Trust Type",
      ja: "超越的信頼型",
      'zh-CN': "超越信任型",
      'zh-TW': "超越信任型",
      id: "Tipe Kepercayaan Transendental",
      vi: "Kiểu Tin Tưởng Siêu Việt"
    },
    description: {
      ko: "질투심 제로! 완벽한 신뢰의 소유자",
      en: "Zero jealousy! Perfect trust owner",
      ja: "嫉妬心ゼロ！完璧な信頼の持ち主",
      'zh-CN': "零嫉妒！完美信任的拥有者",
      'zh-TW': "零嫉妒！完美信任的擁有者",
      id: "Kecemburuan nol! Pemilik kepercayaan sempurna",
      vi: "Ghen tuông bằng không! Chủ sở hữu niềm tin hoàn hảo"
    },
    longDescription: {
      ko: "당신은 거의 질투를 하지 않습니다. 연인을 완전히 신뢰하며 독립적인 관계를 중시합니다. 상대의 자유를 존중하고 소유욕이 거의 없습니다. 매우 성숙하고 건강한 태도이지만, 때로는 무관심해 보일 수 있습니다. 적절한 관심과 애정 표현도 필요합니다.",
      en: "You rarely feel jealous. You completely trust your partner and value independent relationships. You respect your partner's freedom and have almost no possessiveness. This is a very mature and healthy attitude, but sometimes it can seem indifferent. You also need to show appropriate interest and affection.",
      ja: "あなたはほとんど嫉妬をしません。恋人を完全に信頼し、独立した関係を重視します。相手の自由を尊重し、所有欲がほとんどありません。非常に成熟した健康的な態度ですが、時には無関心に見えることがあります。適切な関心と愛情表現も必要です。",
      'zh-CN': "你几乎不嫉妒。你完全信任你的伴侣，重视独立的关系。你尊重伴侣的自由，几乎没有占有欲。这是一个非常成熟和健康的态度，但有时可能显得冷漠。你也需要表现出适当的关心和爱意。",
      'zh-TW': "你幾乎不嫉妒。你完全信任你的伴侶，重視獨立的關係。你尊重伴侶的自由，幾乎沒有佔有欲。這是一個非常成熟和健康的態度，但有時可能顯得冷漠。你也需要表現出適當的關心和愛意。",
      id: "Anda jarang merasa cemburu. Anda sepenuhnya mempercayai pasangan dan menghargai hubungan yang mandiri. Anda menghormati kebebasan pasangan dan hampir tidak memiliki keinginan untuk memiliki. Ini adalah sikap yang sangat dewasa dan sehat, tetapi terkadang bisa terlihat acuh tak acuh. Anda juga perlu menunjukkan minat dan kasih sayang yang tepat.",
      vi: "Bạn hiếm khi ghen tuông. Bạn hoàn toàn tin tưởng người yêu và coi trọng mối quan hệ độc lập. Bạn tôn trọng tự do của người yêu và hầu như không có ham muốn sở hữu. Đây là thái độ rất trưởng thành và lành mạnh, nhưng đôi khi có thể trông thờ ơ. Bạn cũng cần thể hiện sự quan tâm và tình cảm phù hợp."
    },
    pros: [
      {
        ko: "높은 신뢰",
        en: "High trust",
        ja: "高い信頼",
        'zh-CN': "高度信任",
        'zh-TW': "高度信任",
        id: "Kepercayaan tinggi",
        vi: "Niềm tin cao"
      },
      {
        ko: "성숙함",
        en: "Maturity",
        ja: "成熟",
        'zh-CN': "成熟",
        'zh-TW': "成熟",
        id: "Kedewasaan",
        vi: "Trưởng thành"
      },
      {
        ko: "독립성",
        en: "Independence",
        ja: "独立性",
        'zh-CN': "独立性",
        'zh-TW': "獨立性",
        id: "Kemandirian",
        vi: "Độc lập"
      },
      {
        ko: "여유로움",
        en: "Composure",
        ja: "余裕",
        'zh-CN': "从容",
        'zh-TW': "從容",
        id: "Ketenangan",
        vi: "Bình tĩnh"
      }
    ],
    cons: [
      {
        ko: "무관심해 보일 수 있음",
        en: "May seem indifferent",
        ja: "無関心に見える可能性",
        'zh-CN': "可能显得冷漠",
        'zh-TW': "可能顯得冷漠",
        id: "Mungkin terlihat acuh tak acuh",
        vi: "Có thể trông thờ ơ"
      },
      {
        ko: "애정 표현 부족",
        en: "Lack of affection expression",
        ja: "愛情表現不足",
        'zh-CN': "缺乏情感表达",
        'zh-TW': "缺乏情感表達",
        id: "Kurang ekspresi kasih sayang",
        vi: "Thiếu biểu hiện tình cảm"
      }
    ],
    advice: {
      ko: "신뢰는 좋지만 관심도 표현하세요!",
      en: "Trust is good but also express interest!",
      ja: "信頼は良いですが、関心も表現してください！",
      'zh-CN': "信任很好，但也要表达关心！",
      'zh-TW': "信任很好，但也要表達關心！",
      id: "Kepercayaan bagus tapi juga ekspresikan perhatian!",
      vi: "Niềm tin tốt nhưng cũng hãy thể hiện sự quan tâm!"
    },
    compatibility: {
      best: ["Type1", "Type2"],
      good: [],
      careful: [],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type2",
    emoji: "💚",
    title: {
      ko: "건강한 균형형",
      en: "Healthy Balance Type",
      ja: "健康的バランス型",
      'zh-CN': "健康平衡型",
      'zh-TW': "健康平衡型",
      id: "Tipe Keseimbangan Sehat",
      vi: "Kiểu Cân Bằng Khỏe Mạnh"
    },
    description: {
      ko: "적절한 질투! 가장 이상적인 사랑의 형태",
      en: "Appropriate jealousy! The most ideal form of love",
      ja: "適度な嫉妬！最も理想的な愛の形",
      'zh-CN': "适度的嫉妒！最理想的爱情形式",
      'zh-TW': "適度的嫉妒！最理想的愛情形式",
      id: "Kecemburuan yang tepat! Bentuk cinta yang paling ideal",
      vi: "Ghen tuông vừa phải! Hình thức tình yêu lý tưởng nhất"
    },
    longDescription: {
      ko: "당신은 건강한 수준의 질투심을 가지고 있습니다. 연인을 신뢰하지만 적절한 관심도 보입니다. 질투를 느껴도 이성적으로 대처하며 상대의 자유를 존중합니다. 가장 이상적이고 성숙한 연애 스타일입니다. 신뢰와 애정의 완벽한 균형을 이루고 있습니다.",
      en: "You have a healthy level of jealousy. You trust your partner but also show appropriate interest. Even when you feel jealous, you handle it rationally and respect your partner's freedom. This is the most ideal and mature relationship style. You have achieved a perfect balance of trust and affection.",
      ja: "あなたは健康的なレベルの嫉妬心を持っています。恋人を信頼しながらも適切な関心を示します。嫉妬を感じても理性的に対処し、相手の自由を尊重します。最も理想的で成熟した恋愛スタイルです。信頼と愛情の完璧なバランスを保っています。",
      'zh-CN': "你拥有健康水平的嫉妒心。你信任你的伴侣，但也表现出适当的关心。即使感到嫉妒，你也能理性地处理并尊重伴侣的自由。这是最理想和成熟的恋爱风格。你实现了信任和爱意的完美平衡。",
      'zh-TW': "你擁有健康水平的嫉妒心。你信任你的伴侶，但也表現出適當的關心。即使感到嫉妒，你也能理性地處理並尊重伴侶的自由。這是最理想和成熟的戀愛風格。你實現了信任和愛意的完美平衡。",
      id: "Anda memiliki tingkat kecemburuan yang sehat. Anda mempercayai pasangan tetapi juga menunjukkan minat yang tepat. Bahkan ketika merasa cemburu, Anda menanganinya secara rasional dan menghormati kebebasan pasangan. Ini adalah gaya hubungan yang paling ideal dan dewasa. Anda telah mencapai keseimbangan sempurna antara kepercayaan dan kasih sayang.",
      vi: "Bạn có mức độ ghen tuông lành mạnh. Bạn tin tưởng người yêu nhưng cũng thể hiện sự quan tâm phù hợp. Ngay cả khi cảm thấy ghen tuông, bạn cũng xử lý một cách hợp lý và tôn trọng tự do của người yêu. Đây là phong cách tình yêu lý tưởng và trưởng thành nhất. Bạn đã đạt được sự cân bằng hoàn hảo giữa tin tưởng và tình cảm."
    },
    pros: [
      {
        ko: "균형감",
        en: "Balance",
        ja: "バランス感",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        id: "Keseimbangan",
        vi: "Cân bằng"
      },
      {
        ko: "성숙함",
        en: "Maturity",
        ja: "成熟",
        'zh-CN': "成熟",
        'zh-TW': "成熟",
        id: "Kedewasaan",
        vi: "Trưởng thành"
      },
      {
        ko: "신뢰와 관심의 조화",
        en: "Harmony of trust and care",
        ja: "信頼と関心の調和",
        'zh-CN': "信任与关心的和谐",
        'zh-TW': "信任與關心的和諧",
        id: "Harmoni kepercayaan dan perhatian",
        vi: "Hài hòa giữa tin tưởng và quan tâm"
      }
    ],
    cons: [
      {
        ko: "거의 없음",
        en: "Almost none",
        ja: "ほとんどなし",
        'zh-CN': "几乎没有",
        'zh-TW': "幾乎沒有",
        id: "Hampir tidak ada",
        vi: "Hầu như không có"
      }
    ],
    advice: {
      ko: "현재의 균형을 유지하세요!",
      en: "Maintain your current balance!",
      ja: "現在のバランスを維持してください！",
      'zh-CN': "保持你目前的平衡！",
      'zh-TW': "保持你目前的平衡！",
      id: "Pertahankan keseimbangan saat ini!",
      vi: "Duy trì sự cân bằng hiện tại!"
    },
    compatibility: {
      best: ["Type1", "Type2", "Type3", "Type4"],
      good: [],
      careful: [],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type3",
    emoji: "💛",
    title: {
      ko: "예민한 보통형",
      en: "Sensitive Normal Type",
      ja: "敏感な普通型",
      'zh-CN': "敏感普通型",
      'zh-TW': "敏感普通型",
      id: "Tipe Normal Sensitif",
      vi: "Kiểu Bình Thường Nhạy Cảm"
    },
    description: {
      ko: "평균적 질투심! 일반적인 연애 감정",
      en: "Average jealousy! Common relationship emotions",
      ja: "平均的な嫉妬心！一般的な恋愛感情",
      'zh-CN': "平均嫉妒心！常见恋爱情感",
      'zh-TW': "平均嫉妒心！常見戀愛情感",
      id: "Kecemburuan rata-rata! Emosi hubungan umum",
      vi: "Ghen tuông trung bình! Cảm xúc tình yêu phổ biến"
    },
    longDescription: {
      ko: "당신은 보통 사람들과 비슷한 수준의 질투심을 가지고 있습니다. 질투를 느끼지만 통제 가능한 범위입니다. 가끔 불안하고 확인하고 싶지만 크게 문제되지 않습니다. 조금만 더 신뢰를 키우면 더 편안한 관계를 만들 수 있습니다.",
      en: "You have a jealousy level similar to most people. You feel jealous but it's within a controllable range. Sometimes you feel anxious and want to check, but it's not a big problem. If you build a little more trust, you can create a more comfortable relationship.",
      ja: "あなたは普通の人と同程度の嫉妬心を持っています。嫉妬を感じますが、コントロール可能な範囲です。時々不安になって確認したくなりますが、大きな問題ではありません。もう少し信頼を築けば、より快適な関係を作ることができます。",
      'zh-CN': "你拥有与大多数人相似水平的嫉妒心。你会感到嫉妒，但在可控范围内。有时你会感到不安并想要确认，但这不是大问题。如果你能建立更多信任，就能创造更舒适的关系。",
      'zh-TW': "你擁有與大多數人相似水平的嫉妒心。你會感到嫉妒，但在可控範圍內。有時你會感到不安並想要確認，但這不是大問題。如果你能建立更多信任，就能創造更舒適的關係。",
      id: "Anda memiliki tingkat kecemburuan yang mirip dengan kebanyakan orang. Anda merasa cemburu tetapi dalam batas yang dapat dikontrol. Terkadang Anda merasa cemas dan ingin memeriksa, tetapi itu bukan masalah besar. Jika Anda membangun sedikit lebih banyak kepercayaan, Anda dapat menciptakan hubungan yang lebih nyaman.",
      vi: "Bạn có mức độ ghen tuông tương tự như hầu hết mọi người. Bạn cảm thấy ghen tuông nhưng trong phạm vi có thể kiểm soát. Thỉnh thoảng bạn cảm thấy lo lắng và muốn kiểm tra, nhưng đó không phải là vấn đề lớn. Nếu bạn xây dựng thêm một chút niềm tin, bạn có thể tạo ra mối quan hệ thoải mái hơn."
    },
    pros: [
      {
        ko: "평범함",
        en: "Normalcy",
        ja: "普通",
        'zh-CN': "普通",
        'zh-TW': "普通",
        id: "Normalitas",
        vi: "Bình thường"
      },
      {
        ko: "공감 가능",
        en: "Empathetic",
        ja: "共感可能",
        'zh-CN': "可共情",
        'zh-TW': "可共情",
        id: "Empatis",
        vi: "Đồng cảm"
      },
      {
        ko: "애정 표현",
        en: "Affection expression",
        ja: "愛情表現",
        'zh-CN': "情感表达",
        'zh-TW': "情感表達",
        id: "Ekspresi kasih sayang",
        vi: "Biểu hiện tình cảm"
      }
    ],
    cons: [
      {
        ko: "가끔 불안함",
        en: "Sometimes anxious",
        ja: "時々不安",
        'zh-CN': "有时不安",
        'zh-TW': "有時不安",
        id: "Kadang cemas",
        vi: "Thỉnh thoảng lo lắng"
      },
      {
        ko: "예민함",
        en: "Sensitivity",
        ja: "敏感",
        'zh-CN': "敏感",
        'zh-TW': "敏感",
        id: "Sensitivitas",
        vi: "Nhạy cảm"
      }
    ],
    advice: {
      ko: "불안할 때 대화로 해결하세요!",
      en: "When anxious, solve through communication!",
      ja: "不安な時は対話で解決してください！",
      'zh-CN': "不安时通过对话解决！",
      'zh-TW': "不安時通過對話解決！",
      id: "Saat cemas, selesaikan dengan komunikasi!",
      vi: "Khi lo lắng, hãy giải quyết bằng giao tiếp!"
    },
    compatibility: {
      best: ["Type2", "Type3"],
      good: [],
      careful: ["Type1"],
      difficult: []
    }
  },
  {
    type: "Type4",
    emoji: "🧡",
    title: {
      ko: "강한 경계형",
      en: "Strong Boundary Type",
      ja: "強い境界型",
      'zh-CN': "强边界型",
      'zh-TW': "強邊界型",
      id: "Tipe Batas Kuat",
      vi: "Kiểu Ranh Giới Mạnh"
    },
    description: {
      ko: "질투가 많은 편! 조절이 필요한 단계",
      en: "Quite jealous! Stage that needs control",
      ja: "嫉妬が多い方！コントロールが必要な段階",
      'zh-CN': "嫉妒较多！需要控制的阶段",
      'zh-TW': "嫉妒較多！需要控制的階段",
      id: "Cukup cemburu! Tahap yang perlu dikontrol",
      vi: "Khá ghen tuông! Giai đoạn cần kiểm soát"
    },
    longDescription: {
      ko: "당신은 질투심이 강한 편입니다. 연인의 행동을 자주 확인하고 불안해합니다. 이성 친구를 불편해하고 소유욕이 있습니다. 사랑하는 마음은 이해하지만 상대가 숨 막혀 할 수 있습니다. 신뢰를 키우고 질투를 조절하는 노력이 필요합니다.",
      en: "You have strong jealousy. You frequently check your partner's actions and feel anxious. You feel uncomfortable with opposite-sex friends and have possessiveness. While your loving heart is understandable, your partner may feel suffocated. You need to work on building trust and controlling jealousy.",
      ja: "あなたは嫉妬心が強い方です。恋人の行動を頻繁に確認し、不安になります。異性の友達を不快に思い、所有欲があります。愛する気持ちは理解できますが、相手が息苦しく感じるかもしれません。信頼を築き、嫉妬をコントロールする努力が必要です。",
      'zh-CN': "你的嫉妒心很强。你经常检查伴侣的行为并感到不安。你对异性朋友感到不舒服，有占有欲。虽然你的爱意是可以理解的，但伴侣可能会感到窒息。你需要努力建立信任并控制嫉妒。",
      'zh-TW': "你的嫉妒心很強。你經常檢查伴侶的行為並感到不安。你對異性朋友感到不舒服，有佔有欲。雖然你的愛意是可以理解的，但伴侶可能會感到窒息。你需要努力建立信任並控制嫉妒。",
      id: "Anda memiliki kecemburuan yang kuat. Anda sering memeriksa tindakan pasangan dan merasa cemas. Anda merasa tidak nyaman dengan teman lawan jenis dan memiliki keinginan untuk memiliki. Meskipun hati yang penuh cinta dapat dipahami, pasangan mungkin merasa tercekik. Anda perlu bekerja untuk membangun kepercayaan dan mengendalikan kecemburuan.",
      vi: "Bạn có sự ghen tuông mạnh mẽ. Bạn thường xuyên kiểm tra hành động của người yêu và cảm thấy lo lắng. Bạn cảm thấy không thoải mái với bạn khác giới và có ham muốn sở hữu. Mặc dù tình yêu của bạn có thể hiểu được, nhưng người yêu có thể cảm thấy ngạt thở. Bạn cần nỗ lực xây dựng niềm tin và kiểm soát sự ghen tuông."
    },
    pros: [
      {
        ko: "강한 애정",
        en: "Strong affection",
        ja: "強い愛情",
        'zh-CN': "强烈情感",
        'zh-TW': "強烈情感",
        id: "Kasih sayang kuat",
        vi: "Tình cảm mạnh mẽ"
      },
      {
        ko: "관심",
        en: "Care",
        ja: "関心",
        'zh-CN': "关心",
        'zh-TW': "關心",
        id: "Perhatian",
        vi: "Quan tâm"
      }
    ],
    cons: [
      {
        ko: "과한 질투",
        en: "Excessive jealousy",
        ja: "過度な嫉妬",
        'zh-CN': "过度嫉妒",
        'zh-TW': "過度嫉妒",
        id: "Kecemburuan berlebihan",
        vi: "Ghen tuông quá mức"
      },
      {
        ko: "불안",
        en: "Anxiety",
        ja: "不安",
        'zh-CN': "不安",
        'zh-TW': "不安",
        id: "Kecemasan",
        vi: "Lo lắng"
      },
      {
        ko: "의심",
        en: "Suspicion",
        ja: "疑い",
        'zh-CN': "怀疑",
        'zh-TW': "懷疑",
        id: "Kecurigaan",
        vi: "Nghi ngờ"
      },
      {
        ko: "통제 욕구",
        en: "Control desire",
        ja: "コントロール欲求",
        'zh-CN': "控制欲",
        'zh-TW': "控制欲",
        id: "Keinginan kontrol",
        vi: "Ham muốn kiểm soát"
      }
    ],
    advice: {
      ko: "신뢰 키우기 연습이 필요합니다!",
      en: "Need to practice building trust!",
      ja: "信頼を築く練習が必要です！",
      'zh-CN': "需要练习建立信任！",
      'zh-TW': "需要練習建立信任！",
      id: "Perlu latihan membangun kepercayaan!",
      vi: "Cần luyện tập xây dựng niềm tin!"
    },
    compatibility: {
      best: ["Type2"],
      good: [],
      careful: ["Type5", "Type6"],
      difficult: []
    }
  },
  {
    type: "Type5",
    emoji: "❤️‍🔥",
    title: {
      ko: "집착형",
      en: "Obsessive Type",
      ja: "執着型",
      'zh-CN': "执着型",
      'zh-TW': "執著型",
      id: "Tipe Obsesif",
      vi: "Kiểu Ám Ảnh"
    },
    description: {
      ko: "심각한 질투! 관계에 빨간불",
      en: "Serious jealousy! Red flag in relationship",
      ja: "深刻な嫉妬！関係に赤信号",
      'zh-CN': "严重嫉妒！关系亮红灯",
      'zh-TW': "嚴重嫉妒！關係亮紅燈",
      id: "Kecemburuan serius! Lampu merah dalam hubungan",
      vi: "Ghen tuông nghiêm trọng! Đèn đỏ trong mối quan hệ"
    },
    longDescription: {
      ko: "당신은 질투심이 매우 강합니다. 연인의 모든 것을 확인하고 싶어하며 통제하려 합니다. 이성 친구를 용납 못하고 항상 불안합니다. 사랑이지만 집착에 가깝습니다. 이대로라면 관계가 파괴될 수 있습니다. 전문가 상담이나 자기 성찰이 필요합니다.",
      en: "You have very strong jealousy. You want to check everything about your partner and try to control them. You cannot tolerate opposite-sex friends and are always anxious. It's love but close to obsession. If this continues, the relationship may be destroyed. You need professional counseling or self-reflection.",
      ja: "あなたは非常に強い嫉妬心を持っています。恋人のすべてを確認したがり、コントロールしようとします。異性の友達を許容できず、常に不安です。愛ですが、執着に近いです。このままでは関係が破壊される可能性があります。専門家のカウンセリングや自己省察が必要です。",
      'zh-CN': "你的嫉妒心非常强烈。你想检查伴侣的一切并试图控制他们。你无法容忍异性朋友，总是感到不安。这是爱，但接近执着。如果这样继续下去，关系可能会被破坏。你需要专业咨询或自我反思。",
      'zh-TW': "你的嫉妒心非常強烈。你想檢查伴侶的一切並試圖控制他們。你無法容忍異性朋友，總是感到不安。這是愛，但接近執著。如果這樣繼續下去，關係可能會被破壞。你需要專業諮詢或自我反思。",
      id: "Anda memiliki kecemburuan yang sangat kuat. Anda ingin memeriksa segalanya tentang pasangan dan mencoba mengendalikan mereka. Anda tidak dapat mentolerir teman lawan jenis dan selalu cemas. Ini adalah cinta tetapi dekat dengan obsesi. Jika ini berlanjut, hubungan mungkin hancur. Anda memerlukan konseling profesional atau refleksi diri.",
      vi: "Bạn có sự ghen tuông rất mạnh mẽ. Bạn muốn kiểm tra mọi thứ về người yêu và cố gắng kiểm soát họ. Bạn không thể chấp nhận bạn khác giới và luôn lo lắng. Đây là tình yêu nhưng gần với ám ảnh. Nếu điều này tiếp tục, mối quan hệ có thể bị phá hủy. Bạn cần tư vấn chuyên nghiệp hoặc tự suy ngẫm."
    },
    pros: [
      {
        ko: "강한 애정",
        en: "Strong affection",
        ja: "強い愛情",
        'zh-CN': "强烈情感",
        'zh-TW': "強烈情感",
        id: "Kasih sayang kuat",
        vi: "Tình cảm mạnh mẽ"
      }
    ],
    cons: [
      {
        ko: "집착",
        en: "Obsession",
        ja: "執着",
        'zh-CN': "执着",
        'zh-TW': "執著",
        id: "Obsesi",
        vi: "Ám ảnh"
      },
      {
        ko: "통제",
        en: "Control",
        ja: "コントロール",
        'zh-CN': "控制",
        'zh-TW': "控制",
        id: "Kontrol",
        vi: "Kiểm soát"
      },
      {
        ko: "의심",
        en: "Suspicion",
        ja: "疑い",
        'zh-CN': "怀疑",
        'zh-TW': "懷疑",
        id: "Kecurigaan",
        vi: "Nghi ngờ"
      },
      {
        ko: "불안",
        en: "Anxiety",
        ja: "不安",
        'zh-CN': "不安",
        'zh-TW': "不安",
        id: "Kecemasan",
        vi: "Lo lắng"
      },
      {
        ko: "관계 파괴",
        en: "Relationship destruction",
        ja: "関係破壊",
        'zh-CN': "关系破坏",
        'zh-TW': "關係破壞",
        id: "Penghancuran hubungan",
        vi: "Phá hủy mối quan hệ"
      }
    ],
    advice: {
      ko: "전문가 도움을 받으세요!",
      en: "Seek professional help!",
      ja: "専門家の助けを求めてください！",
      'zh-CN': "寻求专业帮助！",
      'zh-TW': "尋求專業幫助！",
      id: "Cari bantuan profesional!",
      vi: "Hãy tìm kiếm sự giúp đỡ chuyên nghiệp!"
    },
    compatibility: {
      best: [],
      good: [],
      careful: ["Type1", "Type2", "Type3", "Type4", "Type5", "Type6"],
      difficult: []
    }
  },
  {
    type: "Type6",
    emoji: "🔴",
    title: {
      ko: "병적 소유욕형",
      en: "Pathological Possessive Type",
      ja: "病的所有欲型",
      'zh-CN': "病态占有欲型",
      'zh-TW': "病態佔有欲型",
      id: "Tipe Posesif Patologis",
      vi: "Kiểu Chiếm Hữu Bệnh Hoạn"
    },
    description: {
      ko: "위험 수준! 즉각적인 변화가 필요",
      en: "Dangerous level! Immediate change needed",
      ja: "危険レベル！即座の変化が必要",
      'zh-CN': "危险级别！需要立即改变",
      'zh-TW': "危險級別！需要立即改變",
      id: "Tingkat berbahaya! Perubahan segera diperlukan",
      vi: "Mức độ nguy hiểm! Cần thay đổi ngay lập tức"
    },
    longDescription: {
      ko: "당신의 질투심은 병적 수준입니다. 연인을 소유물처럼 여기고 모든 것을 통제하려 합니다. 항상 의심하고 감시하며 자유를 주지 않습니다. 이것은 사랑이 아니라 집착입니다. 연인에게도 당신에게도 매우 불건강합니다. 즉시 전문가의 도움을 받아야 합니다.",
      en: "Your jealousy is at a pathological level. You treat your partner like a possession and try to control everything. You always suspect and monitor, giving no freedom. This is not love but obsession. It's very unhealthy for both your partner and yourself. You need immediate professional help.",
      ja: "あなたの嫉妬心は病的なレベルです。恋人を所有物のように扱い、すべてをコントロールしようとします。常に疑い、監視し、自由を与えません。これは愛ではなく執着です。恋人にとってもあなたにとっても非常に不健康です。即座に専門家の助けが必要です。",
      'zh-CN': "你的嫉妒心达到了病态水平。你把伴侣当作财产，试图控制一切。你总是怀疑和监视，不给自由。这不是爱，而是执着。这对你的伴侣和你自己都非常不健康。你需要立即寻求专业帮助。",
      'zh-TW': "你的嫉妒心達到了病態水平。你把伴侶當作財產，試圖控制一切。你總是懷疑和監視，不給自由。這不是愛，而是執著。這對你的伴侶和你自己都非常不健康。你需要立即尋求專業幫助。",
      id: "Kecemburuan Anda berada pada tingkat patologis. Anda memperlakukan pasangan seperti milik dan mencoba mengendalikan segalanya. Anda selalu curiga dan memantau, tidak memberikan kebebasan. Ini bukan cinta tetapi obsesi. Sangat tidak sehat untuk pasangan dan diri Anda sendiri. Anda memerlukan bantuan profesional segera.",
      vi: "Sự ghen tuông của bạn ở mức độ bệnh hoạn. Bạn coi người yêu như tài sản và cố gắng kiểm soát mọi thứ. Bạn luôn nghi ngờ và giám sát, không cho tự do. Đây không phải là tình yêu mà là ám ảnh. Rất không lành mạnh cho cả người yêu và chính bạn. Bạn cần sự giúp đỡ chuyên nghiệp ngay lập tức."
    },
    pros: [],
    cons: [
      {
        ko: "병적 집착",
        en: "Pathological obsession",
        ja: "病的執着",
        'zh-CN': "病态执着",
        'zh-TW': "病態執著",
        id: "Obsesi patologis",
        vi: "Ám ảnh bệnh hoạn"
      },
      {
        ko: "통제",
        en: "Control",
        ja: "コントロール",
        'zh-CN': "控制",
        'zh-TW': "控制",
        id: "Kontrol",
        vi: "Kiểm soát"
      },
      {
        ko: "감시",
        en: "Surveillance",
        ja: "監視",
        'zh-CN': "监视",
        'zh-TW': "監視",
        id: "Pengawasan",
        vi: "Giám sát"
      },
      {
        ko: "폭력 위험",
        en: "Violence risk",
        ja: "暴力リスク",
        'zh-CN': "暴力风险",
        'zh-TW': "暴力風險",
        id: "Risiko kekerasan",
        vi: "Nguy cơ bạo lực"
      }
    ],
    advice: {
      ko: "즉시 전문 상담을 받으세요!",
      en: "Seek professional counseling immediately!",
      ja: "直ちに専門カウンセリングを受けてください！",
      'zh-CN': "立即寻求专业咨询！",
      'zh-TW': "立即尋求專業諮詢！",
      id: "Segera cari konseling profesional!",
      vi: "Hãy tìm tư vấn chuyên nghiệp ngay lập tức!"
    },
    compatibility: {
      best: [],
      good: [],
      careful: ["Type1", "Type2", "Type3", "Type4", "Type5", "Type6"],
      difficult: []
    }
  },
];

export function calculateJealousyResult(answers: Record<number, number>): JealousyResult {
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0,
  };

  // Calculate scores for all questions
  jealousyQuestions.forEach((question) => {
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
        const question = jealousyQuestions.find((q) => q.id === questionId);
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

    return jealousyResults.find((r) => r.type === finalType) || jealousyResults[0];
  }

  return jealousyResults.find((r) => r.type === resultTypes[0]) || jealousyResults[0];
}
