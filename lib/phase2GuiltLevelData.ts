export interface Phase2GuiltLevelQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2GuiltLevelResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription?: Record<string, string>;
  description: Record<string, string>;
  guiltLevel: Record<string, string>; // "0%", "20%" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2GuiltLevelQuestions: Phase2GuiltLevelQuestion[] = [
  {
    id: 1,
    question: {
      ko: "피곤한 주말, 친구가 만나자고 연락이 왔다. 거절할 때 당신의 마음은?",
      en: "A tired weekend, a friend contacts you to meet up. How do you feel when refusing?",
      ja: "疲れた週末、友達から会おうと連絡が来た。断るとき、あなたの気持ちは？",
      'zh-CN': "疲惫的周末，朋友联系你想见面。拒绝时你的心情是？",
      'zh-TW': "疲憊的週末，朋友聯繫你想見面。拒絕時你的心情是？",
      vi: "Cuối tuần mệt mỏi, bạn bè liên lạc muốn gặp. Bạn cảm thấy thế nào khi từ chối?",
      id: "Akhir pekan yang lelah, teman menghubungi untuk bertemu. Bagaimana perasaan Anda saat menolak?"
    },
    options: [
      {
        text: { 
          ko: "\"나 오늘 좀 쉴게!\" 당당하게 거절하고 푹 쉰다", 
          en: "\"I'm resting today!\" I confidently refuse and rest well",
          ja: "「今日は休むね！」堂々と断ってゆっくり休む",
          'zh-CN': "\"我今天要休息！\"自信地拒绝并好好休息",
          'zh-TW': "「我今天要休息！」自信地拒絕並好好休息",
          vi: "\"Hôm nay mình nghỉ!\" Tự tin từ chối và nghỉ ngơi",
          id: "\"Saya istirahat hari ini!\" Saya dengan percaya diri menolak dan beristirahat dengan baik"
        },
        score: 0
      },
      {
        text: { 
          ko: "\"미안해, 다음엔 내가 살게!\" 아쉬움과 대안을 전한다", 
          en: "\"Sorry, next time I'll treat!\" I express regret and offer an alternative",
          ja: "「ごめん、次は私がおごる！」残念さと代替案を伝える",
          'zh-CN': "\"抱歉，下次我请！\"表达遗憾并提供替代方案",
          'zh-TW': "「抱歉，下次我請！」表達遺憾並提供替代方案",
          vi: "\"Xin lỗi, lần sau mình sẽ đãi!\" Bày tỏ tiếc nuối và đưa ra phương án thay thế",
          id: "\"Maaf, lain kali saya yang traktir!\" Saya mengungkapkan penyesalan dan menawarkan alternatif"
        },
        score: 1
      },
      {
        text: { 
          ko: "거절하고 나서도 '친구가 실망했으면 어쩌지?' 계속 신경 쓰인다", 
          en: "Even after refusing, I keep worrying 'What if my friend is disappointed?'",
          ja: "断った後も「友達ががっかりしたらどうしよう？」と気になる",
          'zh-CN': "拒绝后仍担心'朋友会不会失望？'",
          'zh-TW': "拒絕後仍擔心「朋友會不會失望？」",
          vi: "Sau khi từ chối vẫn lo lắng 'Bạn bè có thất vọng không?'",
          id: "Bahkan setelah menolak, saya terus khawatir 'Bagaimana jika teman saya kecewa?'"
        },
        score: 2
      },
      {
        text: { 
          ko: "거절을 못 해서 \"으응... 알겠어...\" 하고 억지로 나간다", 
          en: "I can't refuse, so I say \"Um... okay...\" and force myself to go",
          ja: "断れなくて「うーん...わかった...」と無理やり出かける",
          'zh-CN': "无法拒绝，只好说\"嗯...好吧...\"勉强出门",
          'zh-TW': "無法拒絕，只好說「嗯...好吧...」勉強出門",
          vi: "Không thể từ chối nên nói \"Ừm... được...\" và miễn cưỡng đi",
          id: "Saya tidak bisa menolak, jadi saya bilang \"Um... oke...\" dan memaksa diri untuk pergi"
        },
        score: 3
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "식당에서 주문한 메뉴가 잘못 나왔다.",
      en: "The wrong dish came out at the restaurant.",
      ja: "レストランで注文したメニューが間違って出てきた。",
      'zh-CN': "餐厅上错了你点的菜。",
      'zh-TW': "餐廳上錯了你點的菜。",
      vi: "Món ăn bạn gọi ở nhà hàng bị sai.",
      id: "Menu yang dipesan di restoran salah keluar."
    },
    options: [
      {
        text: { 
          ko: "\"저기요, 이거 안 시켰는데요.\" 즉시 바꿔달라고 요청한다", 
          en: "\"Excuse me, I didn't order this.\" I immediately ask them to change it",
          ja: "「すみません、これ注文してないんですけど。」すぐに変えてもらうよう頼む",
          'zh-CN': "\"不好意思，我没点这个。\"立即要求更换",
          'zh-TW': "「不好意思，我沒點這個。」立即要求更換",
          vi: "\"Xin lỗi, tôi không gọi món này.\" Ngay lập tức yêu cầu đổi",
          id: "\"Maaf, saya tidak memesan ini.\" Saya segera meminta untuk menggantinya"
        },
        score: 0
      },
      {
        text: { 
          ko: "직원이 바빠 보이면 그냥 먹거나, 정중하게 이야기한다", 
          en: "If the staff looks busy, I just eat it or politely mention it",
          ja: "店員が忙しそうならそのまま食べるか、丁寧に話す",
          'zh-CN': "如果服务员看起来很忙，就吃下去或礼貌地说明",
          'zh-TW': "如果服務員看起來很忙，就吃下去或禮貌地說明",
          vi: "Nếu nhân viên trông bận, cứ ăn hoặc lịch sự nói ra",
          id: "Jika staf terlihat sibuk, saya hanya memakannya atau menyebutkannya dengan sopan"
        },
        score: 1
      },
      {
        text: { 
          ko: "말하면 직원이 혼날까 봐 걱정돼서 그냥 참고 먹는다", 
          en: "I'm worried the staff will get scolded if I say something, so I just endure and eat it",
          ja: "言うと店員が怒られるかもしれないと心配で、我慢して食べる",
          'zh-CN': "担心说出来会让服务员挨骂，所以忍着吃下去",
          'zh-TW': "擔心說出來會讓服務員挨罵，所以忍著吃下去",
          vi: "Lo nhân viên bị mắng nếu nói ra nên nhịn và ăn",
          id: "Saya khawatir staf akan dimarahi jika saya mengatakan sesuatu, jadi saya hanya menahan dan memakannya"
        },
        score: 2
      },
      {
        text: { 
          ko: "내가 주문을 잘못했나 싶어서 내 탓을 하며 억지로 먹는다", 
          en: "I think I might have ordered wrong, blame myself, and force myself to eat it",
          ja: "自分が注文を間違えたのかと思い、自分を責めて無理やり食べる",
          'zh-CN': "觉得可能是自己点错了，自责并勉强吃下去",
          'zh-TW': "覺得可能是自己點錯了，自責並勉強吃下去",
          vi: "Nghĩ mình đã gọi sai, tự trách và miễn cưỡng ăn",
          id: "Saya pikir saya mungkin salah memesan, menyalahkan diri sendiri, dan memaksa diri untuk memakannya"
        },
        score: 3
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "직장 동료(혹은 친구)가 옆에서 한숨을 푹푹 쉰다.",
      en: "A colleague (or friend) next to you keeps sighing heavily.",
      ja: "職場の同僚（または友達）が隣で深いため息をついている。",
      'zh-CN': "同事（或朋友）在旁边深深叹气。",
      'zh-TW': "同事（或朋友）在旁邊深深嘆氣。",
      vi: "Đồng nghiệp (hoặc bạn bè) bên cạnh thở dài sâu sắc.",
      id: "Rekan kerja (atau teman) di sebelah menghela napas dalam-dalam."
    },
    options: [
      {
        text: { 
          ko: "'무슨 일 있나 보네.' 신경 끄고 내 할 일을 한다", 
          en: "'Something must be going on.' I ignore it and do my work",
          ja: "「何かあるんだろうな。」気にせず自分の仕事をする",
          'zh-CN': "\"可能有什么事吧。\"不理会，做自己的事",
          'zh-TW': "「可能有什麼事吧。」不理會，做自己的事",
          vi: "'Có chuyện gì đó.' Bỏ qua và làm việc của mình",
          id: "'Pasti ada sesuatu yang terjadi.' Saya mengabaikannya dan melakukan pekerjaan saya"
        },
        score: 0
      },
      {
        text: { 
          ko: "\"무슨 일 있어?\" 가볍게 물어본다", 
          en: "\"What's wrong?\" I ask lightly",
          ja: "「どうしたの？」軽く聞く",
          'zh-CN': "\"怎么了？\"轻松地问",
          'zh-TW': "「怎麼了？」輕鬆地問",
          vi: "\"Có chuyện gì vậy?\" Hỏi nhẹ nhàng",
          id: "\"Ada apa?\" Saya bertanya dengan ringan"
        },
        score: 1
      },
      {
        text: { 
          ko: "'나 때문에 그런가? 내가 뭐 실수했나?' 눈치를 본다", 
          en: "'Is it because of me? Did I do something wrong?' I watch for cues",
          ja: "「私のせい？何か間違えた？」空気を読む",
          'zh-CN': "\"是因为我吗？我做错什么了？\"观察情况",
          'zh-TW': "「是因為我嗎？我做錯什麼了？」觀察情況",
          vi: "'Có phải vì mình không? Mình làm sai gì à?' Quan sát",
          id: "'Apakah karena saya? Apakah saya melakukan kesalahan?' Saya mengawasi petunjuk"
        },
        score: 2
      },
      {
        text: { 
          ko: "분위기를 풀기 위해 안절부절못하며 과하게 텐션을 높인다", 
          en: "I fidget restlessly and excessively raise the energy to lighten the mood",
          ja: "雰囲気を和らげるため、落ち着かず過度にテンションを上げる",
          'zh-CN': "为了缓和气氛，坐立不安并过度提高情绪",
          'zh-TW': "為了緩和氣氛，坐立不安並過度提高情緒",
          vi: "Để làm nhẹ không khí, bồn chồn và tăng năng lượng quá mức",
          id: "Saya gelisah dan secara berlebihan meningkatkan energi untuk meringankan suasana"
        },
        score: 3
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "길을 가다 실수로 누군가와 살짝 부딪혔다.",
      en: "You accidentally bumped into someone while walking.",
      ja: "歩いていて誤って誰かと軽くぶつかった。",
      'zh-CN': "走路时不小心轻轻撞到了别人。",
      'zh-TW': "走路時不小心輕輕撞到了別人。",
      vi: "Vô tình va nhẹ vào ai đó khi đi đường.",
      id: "Anda tidak sengaja menabrak seseorang saat berjalan."
    },
    options: [
      {
        text: { 
          ko: "상대방이 사과 안 하면 째려보고 간다", 
          en: "If the other person doesn't apologize, I glare and leave",
          ja: "相手が謝らなければ睨んで行く",
          'zh-CN': "如果对方不道歉，就瞪一眼然后离开",
          'zh-TW': "如果對方不道歉，就瞪一眼然後離開",
          vi: "Nếu đối phương không xin lỗi, nhìn chằm chằm rồi đi",
          id: "Jika orang lain tidak meminta maaf, saya melotot dan pergi"
        },
        score: 0
      },
      {
        text: { 
          ko: "가볍게 목례나 \"죄송합니다\" 하고 갈 길 간다", 
          en: "I nod lightly or say \"Sorry\" and go on my way",
          ja: "軽く会釈するか「すみません」と言って行く",
          'zh-CN': "轻轻点头或说\"对不起\"然后继续走",
          'zh-TW': "輕輕點頭或說「對不起」然後繼續走",
          vi: "Gật đầu nhẹ hoặc nói \"Xin lỗi\" rồi đi tiếp",
          id: "Saya mengangguk ringan atau mengatakan \"Maaf\" dan melanjutkan perjalanan"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"어머! 괜찮으세요? 죄송해요 ㅠㅠ\" 과하게 사과한다", 
          en: "\"Oh! Are you okay? I'm so sorry!\" I over-apologize",
          ja: "「あら！大丈夫ですか？ごめんなさい！」過剰に謝る",
          'zh-CN': "\"哦！您没事吧？对不起！\"过度道歉",
          'zh-TW': "「哦！您沒事吧？對不起！」過度道歉",
          vi: "\"Ồ! Bạn có sao không? Xin lỗi!\" Xin lỗi quá mức",
          id: "\"Oh! Apakah Anda baik-baik saja? Maaf!\" Saya meminta maaf berlebihan"
        },
        score: 2
      },
      {
        text: { 
          ko: "집에 가서도 '아까 그 사람 기분 나빴겠지?' 계속 생각난다", 
          en: "Even after going home, I keep thinking 'That person must have felt bad earlier'",
          ja: "家に帰っても「さっきの人は気分悪かっただろうな」とずっと考えてしまう",
          'zh-CN': "回到家后仍一直想'刚才那个人肯定不高兴了'",
          'zh-TW': "回到家後仍一直想「剛才那個人肯定不高興了」",
          vi: "Về nhà vẫn nghĩ 'Người đó chắc buồn lắm'",
          id: "Bahkan setelah pulang, saya terus memikirkan 'Orang itu pasti merasa tidak enak tadi'"
        },
        score: 3
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "나를 위한 비싼 선물을 샀을 때 기분은?",
      en: "How do you feel when you buy an expensive gift for yourself?",
      ja: "自分のための高価なプレゼントを買ったときの気分は？",
      'zh-CN': "为自己买昂贵的礼物时心情如何？",
      'zh-TW': "為自己買昂貴的禮物時心情如何？",
      vi: "Bạn cảm thấy thế nào khi mua quà đắt tiền cho chính mình?",
      id: "Bagaimana perasaan Anda saat membeli hadiah mahal untuk diri sendiri?"
    },
    options: [
      {
        text: { 
          ko: "\"난 이 정도 가치가 있어!\" 뿌듯하고 기분 좋다", 
          en: "\"I'm worth this much!\" I feel proud and good",
          ja: "「私はこれくらいの価値がある！」誇らしく気分がいい",
          'zh-CN': "\"我值得这个！\"感到自豪和开心",
          'zh-TW': "「我值得這個！」感到自豪和開心",
          vi: "\"Mình xứng đáng với điều này!\" Tự hào và vui",
          id: "\"Saya layak mendapatkannya!\" Saya merasa bangga dan baik"
        },
        score: 0
      },
      {
        text: { 
          ko: "조금 비싸지만 필요했으니까 괜찮다고 생각한다", 
          en: "It's a bit expensive but I needed it, so I think it's okay",
          ja: "少し高いけど必要だったから大丈夫だと思う",
          'zh-CN': "有点贵但需要，所以觉得可以",
          'zh-TW': "有點貴但需要，所以覺得可以",
          vi: "Hơi đắt nhưng cần thiết nên nghĩ là ổn",
          id: "Agak mahal tapi saya membutuhkannya, jadi saya pikir tidak apa-apa"
        },
        score: 1
      },
      {
        text: { 
          ko: "'돈 아껴야 하는데...' 결제하고 나서도 찜찜하다", 
          en: "'I should save money...' I feel uneasy even after paying",
          ja: "「お金を節約しなきゃ...」支払った後も気持ち悪い",
          'zh-CN': "\"应该省钱的...\"付款后仍感到不安",
          'zh-TW': "「應該省錢的...」付款後仍感到不安",
          vi: "'Nên tiết kiệm tiền...' Sau khi thanh toán vẫn cảm thấy không yên",
          id: "'Saya harus menghemat uang...' Saya merasa tidak nyaman bahkan setelah membayar"
        },
        score: 2
      },
      {
        text: { 
          ko: "'내가 사치 부린 건가?' 죄책감이 들어서 환불을 고민한다", 
          en: "'Did I splurge?' I feel guilty and consider returning it",
          ja: "「贅沢しすぎた？」罪悪感を感じて返品を考える",
          'zh-CN': "\"我是不是太奢侈了？\"感到内疚并考虑退货",
          'zh-TW': "「我是不是太奢侈了？」感到內疚並考慮退貨",
          vi: "'Mình có phung phí không?' Cảm thấy tội lỗi và nghĩ đến việc trả lại",
          id: "'Apakah saya boros?' Saya merasa bersalah dan mempertimbangkan untuk mengembalikannya"
        },
        score: 3
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "카톡 답장을 늦게 했을 때?",
      en: "When you reply late to a message?",
      ja: "メッセージの返信が遅れたときは？",
      'zh-CN': "回复消息晚了时？",
      'zh-TW': "回覆消息晚了時？",
      vi: "Khi bạn trả lời tin nhắn muộn?",
      id: "Ketika Anda membalas pesan terlambat?"
    },
    options: [
      {
        text: { 
          ko: "\"나 지금 봤어.\" 별다른 해명 없이 용건을 말한다", 
          en: "\"I just saw it.\" I say what I need to say without much explanation",
          ja: "「今見た。」特に説明せず用件を言う",
          'zh-CN': "\"我刚看到。\"直接说正事，不做太多解释",
          'zh-TW': "「我剛看到。」直接說正事，不做太多解釋",
          vi: "\"Mình vừa thấy.\" Nói việc cần nói mà không giải thích nhiều",
          id: "\"Saya baru melihatnya.\" Saya mengatakan apa yang perlu tanpa banyak penjelasan"
        },
        score: 0
      },
      {
        text: { 
          ko: "\"바빠서 못 봤어~\" 가볍게 이유를 설명한다", 
          en: "\"I was busy so I couldn't see it~\" I lightly explain the reason",
          ja: "「忙しくて見られなかった～」軽く理由を説明する",
          'zh-CN': "\"太忙了没看到~\"轻松地解释原因",
          'zh-TW': "「太忙了沒看到～」輕鬆地解釋原因",
          vi: "\"Bận quá nên không thấy~\" Giải thích nhẹ nhàng lý do",
          id: "\"Saya sibuk jadi tidak bisa melihatnya~\" Saya menjelaskan alasannya dengan ringan"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"너무 늦었지 ㅠㅠ 미안해 ㅠㅠ\" 구구절절 변명하고 사과한다", 
          en: "\"I'm so late, sorry!\" I make lengthy excuses and apologize",
          ja: "「遅すぎてごめん！」くどくど言い訳して謝る",
          'zh-CN': "\"太晚了，对不起！\"详细解释并道歉",
          'zh-TW': "「太晚了，對不起！」詳細解釋並道歉",
          vi: "\"Quá muộn rồi, xin lỗi!\" Giải thích dài dòng và xin lỗi",
          id: "\"Saya sangat terlambat, maaf!\" Saya membuat alasan panjang dan meminta maaf"
        },
        score: 2
      },
      {
        text: { 
          ko: "늦게 보낸 게 미안해서 답장을 더 못하고 미루게 된다", 
          en: "I feel so sorry for replying late that I can't reply anymore and keep postponing it",
          ja: "遅く送ったのが申し訳なくて、返信をさらにできず先延ばしにしてしまう",
          'zh-CN': "因为回复晚了感到抱歉，反而更不敢回复，一直拖延",
          'zh-TW': "因為回覆晚了感到抱歉，反而更不敢回覆，一直拖延",
          vi: "Cảm thấy tội lỗi vì trả lời muộn nên không dám trả lời nữa và trì hoãn",
          id: "Saya merasa sangat menyesal karena membalas terlambat sehingga tidak bisa membalas lagi dan terus menundanya"
        },
        score: 3
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "누군가 나에게 호의를 베풀거나 선물을 주면?",
      en: "When someone shows you kindness or gives you a gift?",
      ja: "誰かが親切にしてくれたりプレゼントをくれたときは？",
      'zh-CN': "当有人对你示好或送礼物时？",
      'zh-TW': "當有人對你示好或送禮物時？",
      vi: "Khi ai đó tỏ lòng tốt hoặc tặng quà cho bạn?",
      id: "Ketika seseorang menunjukkan kebaikan atau memberi Anda hadiah?"
    },
    options: [
      {
        text: { 
          ko: "\"땡큐!\" 당연하게 받고 즐긴다", 
          en: "\"Thanks!\" I naturally accept and enjoy it",
          ja: "「ありがとう！」当然のように受け取って楽しむ",
          'zh-CN': "\"谢谢！\"自然地接受并享受",
          'zh-TW': "「謝謝！」自然地接受並享受",
          vi: "\"Cảm ơn!\" Tự nhiên nhận và tận hưởng",
          id: "\"Terima kasih!\" Saya secara alami menerima dan menikmatinya"
        },
        score: 0
      },
      {
        text: { 
          ko: "\"고마워, 잘 쓸게!\" 기쁘게 받고 나중에 보답한다", 
          en: "\"Thanks, I'll use it well!\" I happily accept and repay later",
          ja: "「ありがとう、大事に使うね！」喜んで受け取り、後でお返しする",
          'zh-CN': "\"谢谢，我会好好用的！\"高兴地接受，之后回报",
          'zh-TW': "「謝謝，我會好好用的！」高興地接受，之後回報",
          vi: "\"Cảm ơn, mình sẽ dùng tốt!\" Vui vẻ nhận và sau đó đền đáp",
          id: "\"Terima kasih, saya akan menggunakannya dengan baik!\" Saya dengan senang menerima dan membalas nanti"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"안 주셔도 되는데...\" 고맙지만 갚아야 할 빚처럼 느껴진다", 
          en: "\"You didn't have to...\" I'm grateful but feel like I owe a debt",
          ja: "「くれなくてもいいのに...」感謝しているが返さなければならない借りのように感じる",
          'zh-CN': "\"不用给的...\"虽然感激但感觉像欠了债",
          'zh-TW': "「不用給的...」雖然感激但感覺像欠了債",
          vi: "\"Không cần đâu...\" Biết ơn nhưng cảm thấy như mắc nợ",
          id: "\"Anda tidak perlu...\" Saya bersyukur tapi merasa seperti berhutang"
        },
        score: 2
      },
      {
        text: { 
          ko: "부담스러워서 거절하거나, 받은 것보다 더 큰 걸로 돌려줘야 마음이 편하다", 
          en: "I feel burdened so I refuse, or I need to give back something bigger to feel at ease",
          ja: "負担に感じて断るか、もらったものより大きいものを返さないと気が済まない",
          'zh-CN': "感到负担所以拒绝，或者必须回赠更大的东西才能安心",
          'zh-TW': "感到負擔所以拒絕，或者必須回贈更大的東西才能安心",
          vi: "Cảm thấy áp lực nên từ chối, hoặc phải trả lại thứ lớn hơn mới yên tâm",
          id: "Saya merasa terbebani jadi saya menolak, atau saya perlu memberikan kembali sesuatu yang lebih besar untuk merasa tenang"
        },
        score: 3
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "내가 아파서 약속을 취소해야 할 때?",
      en: "When you have to cancel an appointment because you're sick?",
      ja: "自分が病気で約束をキャンセルしなければならないときは？",
      'zh-CN': "当你因为生病必须取消约定时？",
      'zh-TW': "當你因為生病必須取消約定時？",
      vi: "Khi bạn phải hủy hẹn vì bị ốm?",
      id: "Ketika Anda harus membatalkan janji karena sakit?"
    },
    options: [
      {
        text: { 
          ko: "아픈 건 어쩔 수 없는 일이다. 당당하게 말한다", 
          en: "Being sick is unavoidable. I say it confidently",
          ja: "病気は仕方ないことだ。堂々と言う",
          'zh-CN': "生病是没办法的事。自信地说出来",
          'zh-TW': "生病是沒辦法的事。自信地說出來",
          vi: "Ốm là điều không thể tránh. Nói một cách tự tin",
          id: "Sakit adalah hal yang tidak bisa dihindari. Saya mengatakannya dengan percaya diri"
        },
        score: 0
      },
      {
        text: { 
          ko: "상황을 잘 설명하고 양해를 구한다", 
          en: "I explain the situation well and ask for understanding",
          ja: "状況をよく説明して理解を求める",
          'zh-CN': "详细说明情况并请求理解",
          'zh-TW': "詳細說明情況並請求理解",
          vi: "Giải thích tình huống rõ ràng và xin sự thông cảm",
          id: "Saya menjelaskan situasinya dengan baik dan meminta pengertian"
        },
        score: 1
      },
      {
        text: { 
          ko: "아픈 내가 원망스럽고 친구에게 너무 미안하다", 
          en: "I resent my sick self and feel very sorry to my friend",
          ja: "病気の自分が恨めしく、友達に申し訳なく思う",
          'zh-CN': "讨厌生病的自己，对朋友感到非常抱歉",
          'zh-TW': "討厭生病的自己，對朋友感到非常抱歉",
          vi: "Ghét bản thân bị ốm và cảm thấy rất có lỗi với bạn",
          id: "Saya membenci diri sendiri yang sakit dan merasa sangat menyesal kepada teman"
        },
        score: 2
      },
      {
        text: { 
          ko: "꾀병이라고 생각할까 봐 아픈 티를 내거나 증거 사진을 보낸다", 
          en: "I worry they'll think I'm faking, so I show I'm sick or send proof photos",
          ja: "仮病だと思われるかもしれないと心配で、病気の様子を見せたり証拠写真を送る",
          'zh-CN': "担心被认为装病，所以表现出病态或发送证据照片",
          'zh-TW': "擔心被認為裝病，所以表現出病態或發送證據照片",
          vi: "Lo bị nghĩ giả bệnh nên thể hiện vẻ ốm hoặc gửi ảnh chứng cứ",
          id: "Saya khawatir mereka akan mengira saya berpura-pura, jadi saya menunjukkan bahwa saya sakit atau mengirim foto bukti"
        },
        score: 3
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "과거의 실수나 흑역사가 떠오를 때?",
      en: "When past mistakes or embarrassing memories come to mind?",
      ja: "過去の失敗や黒歴史が思い浮かぶときは？",
      'zh-CN': "当想起过去的错误或黑历史时？",
      'zh-TW': "當想起過去的錯誤或黑歷史時？",
      vi: "Khi nhớ lại những sai lầm hoặc quá khứ đen tối?",
      id: "Ketika kesalahan masa lalu atau kenangan memalukan muncul di pikiran?"
    },
    options: [
      {
        text: { 
          ko: "\"그땐 그랬지 ㅋㅋ\" 웃어넘긴다", 
          en: "\"That's how it was back then lol\" I laugh it off",
          ja: "「あの頃はそうだったな」笑ってやり過ごす",
          'zh-CN': "\"那时候就是那样哈哈\"一笑而过",
          'zh-TW': "「那時候就是那樣哈哈」一笑而過",
          vi: "\"Hồi đó thế mà\" Cười và bỏ qua",
          id: "\"Begitulah dulu\" Saya tertawa dan melupakannya"
        },
        score: 0
      },
      {
        text: { 
          ko: "\"다음엔 안 그러면 돼.\" 교훈으로 삼는다", 
          en: "\"I just won't do it next time.\" I take it as a lesson",
          ja: "「次はそうしなければいい。」教訓にする",
          'zh-CN': "\"下次不这样就行了。\"当作教训",
          'zh-TW': "「下次不這樣就行了。」當作教訓",
          vi: "\"Lần sau không làm thế nữa là được.\" Coi như bài học",
          id: "\"Saya tidak akan melakukannya lagi lain kali.\" Saya menjadikannya pelajaran"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"아... 미쳤지...\" 이불을 걷어차며 괴로워한다", 
          en: "\"Ah... I was crazy...\" I kick the blanket and suffer",
          ja: "「ああ...バカだった...」布団を蹴りながら苦しむ",
          'zh-CN': "\"啊...我疯了...\"踢被子并痛苦",
          'zh-TW': "「啊...我瘋了...」踢被子並痛苦",
          vi: "\"Ồ... Mình điên thật...\" Đá chăn và đau khổ",
          id: "\"Ah... Saya gila...\" Saya menendang selimut dan menderita"
        },
        score: 2
      },
      {
        text: { 
          ko: "\"난 구제불능이야.\" 그 실수 때문에 지금도 불행하다고 느낀다", 
          en: "\"I'm beyond help.\" I still feel unhappy because of that mistake",
          ja: "「私は救いようがない。」その失敗のために今も不幸だと感じる",
          'zh-CN': "\"我无药可救了。\"因为那个错误至今仍感到不幸",
          'zh-TW': "「我無藥可救了。」因為那個錯誤至今仍感到不幸",
          vi: "\"Mình vô phương cứu chữa.\" Vẫn cảm thấy bất hạnh vì sai lầm đó",
          id: "\"Saya tidak bisa ditolong.\" Saya masih merasa tidak bahagia karena kesalahan itu"
        },
        score: 3
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "누군가 나를 싫어한다는 것을 알게 되었을 때?",
      en: "When you find out someone dislikes you?",
      ja: "誰かが自分を嫌っていると知ったときは？",
      'zh-CN': "当你发现有人讨厌你时？",
      'zh-TW': "當你發現有人討厭你時？",
      vi: "Khi bạn biết ai đó ghét mình?",
      id: "Ketika Anda mengetahui seseorang tidak menyukai Anda?"
    },
    options: [
      {
        text: { 
          ko: "\"나도 걔 싫어. 상관없어.\"", 
          en: "\"I don't like them either. I don't care.\"",
          ja: "「私もあの人嫌い。関係ない。」",
          'zh-CN': "\"我也不喜欢他们。无所谓。\"",
          'zh-TW': "「我也不喜歡他們。無所謂。」",
          vi: "\"Mình cũng ghét họ. Không sao cả.\"",
          id: "\"Saya juga tidak menyukai mereka. Tidak peduli.\""
        },
        score: 0
      },
      {
        text: { 
          ko: "\"모든 사람이 나를 좋아할 순 없지.\" 쿨하게 넘긴다", 
          en: "\"Not everyone can like me.\" I coolly let it go",
          ja: "「みんなが私を好きになるわけない。」クールにやり過ごす",
          'zh-CN': "\"不是所有人都能喜欢我。\"冷静地放下",
          'zh-TW': "「不是所有人都能喜歡我。」冷靜地放下",
          vi: "\"Không phải ai cũng thích mình được.\" Bình tĩnh bỏ qua",
          id: "\"Tidak semua orang bisa menyukai saya.\" Saya dengan tenang melupakannya"
        },
        score: 1
      },
      {
        text: { 
          ko: "\"내가 뭘 잘못했나?\" 이유를 찾으려 애쓴다", 
          en: "\"What did I do wrong?\" I try hard to find the reason",
          ja: "「私が何か間違えた？」理由を探そうと努力する",
          'zh-CN': "\"我做错了什么？\"努力寻找原因",
          'zh-TW': "「我做錯了什麼？」努力尋找原因",
          vi: "\"Mình đã làm sai gì?\" Cố gắng tìm lý do",
          id: "\"Apa yang saya lakukan salah?\" Saya berusaha keras mencari alasannya"
        },
        score: 2
      },
      {
        text: { 
          ko: "그 사람의 마음을 돌리기 위해 비굴할 정도로 노력한다", 
          en: "I try desperately, even humiliating myself, to change that person's mind",
          ja: "その人の気持ちを変えるため、卑屈になるほど努力する",
          'zh-CN': "为了改变那个人的想法，甚至卑躬屈膝地努力",
          'zh-TW': "為了改變那個人的想法，甚至卑躬屈膝地努力",
          vi: "Cố gắng một cách hèn mọn để thay đổi suy nghĩ của người đó",
          id: "Saya berusaha dengan putus asa, bahkan merendahkan diri, untuk mengubah pikiran orang itu"
        },
        score: 3
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "평소 \"죄송합니다\"라는 말을 얼마나 자주 하나요?",
      en: "How often do you usually say \"I'm sorry\"?",
      ja: "普段「すみません」という言葉をどれくらい頻繁に言いますか？",
      'zh-CN': "你平时说\"对不起\"的频率如何？",
      'zh-TW': "你平時說「對不起」的頻率如何？",
      vi: "Bạn thường nói \"Xin lỗi\" bao nhiêu lần?",
      id: "Seberapa sering Anda biasanya mengatakan \"Maaf\"?"
    },
    options: [
      {
        text: { 
          ko: "진짜 잘못했을 때만 한다. 거의 안 함", 
          en: "Only when I really did something wrong. Almost never",
          ja: "本当に間違えたときだけ。ほとんど言わない",
          'zh-CN': "只在真正做错的时候。几乎不说",
          'zh-TW': "只在真正做錯的時候。幾乎不說",
          vi: "Chỉ khi thực sự làm sai. Hầu như không nói",
          id: "Hanya ketika saya benar-benar melakukan kesalahan. Hampir tidak pernah"
        },
        score: 0
      },
      {
        text: { 
          ko: "예의상 필요한 경우에만 한다", 
          en: "Only when it's necessary for politeness",
          ja: "礼儀上必要な場合にだけ言う",
          'zh-CN': "只在礼貌上需要的时候说",
          'zh-TW': "只在禮貌上需要的時候說",
          vi: "Chỉ khi cần thiết về mặt lịch sự",
          id: "Hanya ketika diperlukan untuk kesopanan"
        },
        score: 1
      },
      {
        text: { 
          ko: "습관적으로 입에 붙어 있다", 
          en: "It's habitually stuck to my mouth",
          ja: "習慣的に口に付いている",
          'zh-CN': "习惯性地挂在嘴边",
          'zh-TW': "習慣性地掛在嘴邊",
          vi: "Thói quen dính trên miệng",
          id: "Secara kebiasaan menempel di mulut"
        },
        score: 2
      },
      {
        text: { 
          ko: "하루에도 수십 번 한다. 숨 쉬는 것도 죄송할 지경이다", 
          en: "I say it dozens of times a day. I feel sorry even for breathing",
          ja: "一日に何十回も言う。息をするのも申し訳ないほど",
          'zh-CN': "一天说几十次。连呼吸都感到抱歉",
          'zh-TW': "一天說幾十次。連呼吸都感到抱歉",
          vi: "Nói hàng chục lần mỗi ngày. Ngay cả thở cũng cảm thấy có lỗi",
          id: "Saya mengatakannya puluhan kali sehari. Saya merasa menyesal bahkan untuk bernapas"
        },
        score: 3
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 생각하는 '이기적인 것'은?",
      en: "What do you think is 'selfish'?",
      ja: "あなたが考える「自己中心的」なことは？",
      'zh-CN': "你认为什么是'自私'？",
      'zh-TW': "你認為什麼是「自私」？",
      vi: "Bạn nghĩ gì là 'ích kỷ'?",
      id: "Apa yang Anda pikirkan sebagai 'egois'?"
    },
    options: [
      {
        text: { 
          ko: "남한테 피해 주면서 자기 이득 챙기는 것", 
          en: "Gaining personal benefit while harming others",
          ja: "他人に害を与えながら自分の利益を得ること",
          'zh-CN': "在伤害别人的同时为自己谋利",
          'zh-TW': "在傷害別人的同時為自己謀利",
          vi: "Gây hại cho người khác để thu lợi cho mình",
          id: "Mendapatkan keuntungan pribadi sambil menyakiti orang lain"
        },
        score: 0
      },
      {
        text: { 
          ko: "배려가 조금 부족한 것", 
          en: "Being slightly lacking in consideration",
          ja: "配慮が少し足りないこと",
          'zh-CN': "稍微缺乏考虑",
          'zh-TW': "稍微缺乏考慮",
          vi: "Thiếu một chút quan tâm",
          id: "Sedikit kurang pertimbangan"
        },
        score: 1
      },
      {
        text: { 
          ko: "내 의견을 먼저 말하는 것", 
          en: "Stating my opinion first",
          ja: "自分の意見を先に言うこと",
          'zh-CN': "先说出自己的意见",
          'zh-TW': "先說出自己的意見",
          vi: "Nói ý kiến của mình trước",
          id: "Menyatakan pendapat saya terlebih dahulu"
        },
        score: 2
      },
      {
        text: { 
          ko: "남의 부탁을 거절하는 것", 
          en: "Refusing someone's request",
          ja: "他人の頼みを断ること",
          'zh-CN': "拒绝别人的请求",
          'zh-TW': "拒絕別人的請求",
          vi: "Từ chối yêu cầu của người khác",
          id: "Menolak permintaan seseorang"
        },
        score: 3
      }
    ]
  }
];

export const phase2GuiltLevelResults: Phase2GuiltLevelResult[] = [
  {
    type: "Type1",
    emoji: "😎",
    title: {
      ko: "강철 멘탈, 마이웨이 (Shameless)",
      en: "Steel Mentality, My Way (Shameless)",
      ja: "鋼のメンタル、マイウェイ（恥知らず）",
      'zh-CN': "钢铁心态，我行我素（不知羞耻）",
      'zh-TW': "鋼鐵心態，我行我素（不知羞恥）",
      vi: "Tinh thần thép, theo cách của tôi (Vô liêm sỉ)",
      id: "Mentalitas Baja, Cara Saya (Tanpa Malu)"
    },
    shortDescription: {
      ko: "\"내가 뭘? 내 인생 내가 사는데 뭐 어때?\"",
      en: "\"What did I do? It's my life, what's wrong with that?\"",
      ja: "「私が何を？私の人生、何が悪い？」",
      'zh-CN': "\"我怎么了？我的人生我做主，有什么问题？\"",
      'zh-TW': "「我怎麼了？我的人生我做主，有什麼問題？」",
      vi: "\"Mình làm gì? Cuộc sống của mình, có gì sai?\"",
      id: "\"Apa yang saya lakukan? Hidup saya, apa salahnya?\""
    },
    description: {
      ko: "당신은 죄책감을 거의 느끼지 않는 자유로운 영혼입니다. 타인의 시선보다는 나의 감정과 이득이 최우선입니다. 스트레스를 잘 받지 않고 자존감이 높지만, 가끔은 \"너무 이기적이다\"라는 오해를 받을 수도 있습니다.",
      en: "You are a free spirit who rarely feels guilt. Your emotions and benefits come first over others' opinions. You don't get stressed easily and have high self-esteem, but sometimes you might be misunderstood as \"too selfish.\"",
      ja: "あなたは罪悪感をほとんど感じない自由な魂です。他人の視線より、自分の感情と利益が最優先です。ストレスをあまり受けず、自尊心が高いですが、時々「自己中心的すぎる」と誤解されることもあります。",
      'zh-CN': "你是一个几乎不感到内疚的自由灵魂。你的情感和利益优先于他人的眼光。你不容易感到压力，自尊心很高，但有时可能会被误解为\"太自私\"。",
      'zh-TW': "你是一個幾乎不感到內疚的自由靈魂。你的情感和利益優先於他人的眼光。你不容易感到壓力，自尊心很高，但有時可能會被誤解為「太自私」。",
      vi: "Bạn là linh hồn tự do hầu như không cảm thấy tội lỗi. Cảm xúc và lợi ích của bạn được ưu tiên hơn ánh mắt người khác. Bạn không dễ bị căng thẳng và có lòng tự trọng cao, nhưng đôi khi có thể bị hiểu lầm là \"quá ích kỷ\".",
      id: "Anda adalah jiwa bebas yang jarang merasa bersalah. Emosi dan keuntungan Anda didahulukan daripada pendapat orang lain. Anda tidak mudah stres dan memiliki harga diri yang tinggi, tetapi kadang-kadang Anda mungkin disalahpahami sebagai \"terlalu egois\"."
    },
    guiltLevel: {
      ko: "0% (청정 구역)",
      en: "0% (Clean Zone)",
      ja: "0%（清浄区域）",
      'zh-CN': "0%（清净区域）",
      'zh-TW': "0%（清淨區域）",
      vi: "0% (Vùng sạch)",
      id: "0% (Zona Bersih)"
    },
    characteristics: {
      ko: "사과 잘 안 함, 멘탈 갑, 뒤끝 없음",
      en: "Rarely apologizes, strong mentality, no grudges",
      ja: "謝罪しない、メンタル強い、後味悪くない",
      'zh-CN': "很少道歉，心态强，不记仇",
      'zh-TW': "很少道歉，心態強，不記仇",
      vi: "Ít xin lỗi, tinh thần mạnh, không để bụng",
      id: "Jarang meminta maaf, mentalitas kuat, tidak menyimpan dendam"
    },
    goodMatch: {
      ko: "Type 2 (합리적 판단)",
      en: "Type 2 (Rational Judgment)",
      ja: "タイプ2（合理的判断）",
      'zh-CN': "类型2（理性判断）",
      'zh-TW': "類型2（理性判斷）",
      vi: "Loại 2 (Phán đoán hợp lý)",
      id: "Tipe 2 (Penilaian Rasional)"
    },
    badMatch: {
      ko: "Type 6 (답답해 죽음)",
      en: "Type 6 (Frustrating)",
      ja: "タイプ6（イライラする）",
      'zh-CN': "类型6（令人沮丧）",
      'zh-TW': "類型6（令人沮喪）",
      vi: "Loại 6 (Bực bội)",
      id: "Tipe 6 (Frustasi)"
    }
  },
  {
    type: "Type2",
    emoji: "⚖️",
    title: {
      ko: "쿨한 이성주의자, 합리적 판단 (Rational)",
      en: "Cool Rationalist, Rational Judgment (Rational)",
      ja: "クールな合理主義者、合理的判断（合理的）",
      'zh-CN': "冷静的理性主义者，理性判断（理性）",
      'zh-TW': "冷靜的理性主義者，理性判斷（理性）",
      vi: "Người duy lý lạnh lùng, phán đoán hợp lý (Duy lý)",
      id: "Rasionalis Keren, Penilaian Rasional (Rasional)"
    },
    shortDescription: {
      ko: "\"잘못한 건 사과하고, 아니면 말고.\"",
      en: "\"Apologize for what I did wrong, otherwise forget it.\"",
      ja: "「間違えたことは謝る、そうでなければ言わない。」",
      'zh-CN': "\"做错了就道歉，否则就算了。\"",
      'zh-TW': "「做錯了就道歉，否則就算了。」",
      vi: "\"Làm sai thì xin lỗi, không thì thôi.\"",
      id: "\"Minta maaf untuk yang salah, kalau tidak lupakan saja.\""
    },
    description: {
      ko: "당신은 죄책감도 논리적으로 따집니다. 내가 명백히 실수한 부분에 대해서는 깔끔하게 사과하지만, 내 책임이 아닌 일에 대해서는 절대 사과하지 않습니다. 공과 사가 확실하고 감정 소모를 싫어하는 스마트한 타입입니다.",
      en: "You approach guilt logically. You cleanly apologize for parts where you clearly made a mistake, but you never apologize for things that aren't your responsibility. You clearly separate public and private matters and hate emotional drain. You're a smart type.",
      ja: "あなたは罪悪感も論理的に判断します。自分が明らかに間違えた部分についてはきれいに謝りますが、自分の責任ではないことには絶対に謝りません。公私がはっきりしていて、感情の消耗を嫌うスマートなタイプです。",
      'zh-CN': "你也会逻辑地处理内疚感。对于你明显犯错的部分，你会干净利落地道歉，但对于不是你责任的事情，你绝对不会道歉。公私分明，讨厌情感消耗的聪明类型。",
      'zh-TW': "你也會邏輯地處理內疚感。對於你明顯犯錯的部分，你會乾淨利落地道歉，但對於不是你責任的事情，你絕對不會道歉。公私分明，討厭情感消耗的聰明類型。",
      vi: "Bạn tiếp cận cảm giác tội lỗi một cách logic. Bạn xin lỗi rõ ràng cho những phần mình rõ ràng đã sai, nhưng không bao giờ xin lỗi cho những việc không phải trách nhiệm của mình. Phân biệt rõ công tư và ghét hao tổn cảm xúc. Bạn là kiểu thông minh.",
      id: "Anda mendekati rasa bersalah secara logis. Anda dengan jelas meminta maaf untuk bagian di mana Anda jelas melakukan kesalahan, tetapi Anda tidak pernah meminta maaf untuk hal-hal yang bukan tanggung jawab Anda. Anda jelas memisahkan urusan publik dan pribadi dan membenci drain emosional. Anda adalah tipe pintar."
    },
    guiltLevel: {
      ko: "20% (적정 수준)",
      en: "20% (Appropriate Level)",
      ja: "20%（適切なレベル）",
      'zh-CN': "20%（适当水平）",
      'zh-TW': "20%（適當水平）",
      vi: "20% (Mức phù hợp)",
      id: "20% (Tingkat yang Tepat)"
    },
    characteristics: {
      ko: "깔끔한 사과, 선 긋기 잘함",
      en: "Clean apologies, good at drawing boundaries",
      ja: "きれいな謝罪、線引きが上手",
      'zh-CN': "干净利落的道歉，善于划清界限",
      'zh-TW': "乾淨利落的道歉，善於劃清界限",
      vi: "Xin lỗi rõ ràng, giỏi vạch ranh giới",
      id: "Permintaan maaf yang jelas, pandai menetapkan batas"
    },
    goodMatch: {
      ko: "Type 1 (쿨해서 좋음)",
      en: "Type 1 (Good because cool)",
      ja: "タイプ1（クールでいい）",
      'zh-CN': "类型1（因为冷静所以好）",
      'zh-TW': "類型1（因為冷靜所以好）",
      vi: "Loại 1 (Tốt vì lạnh lùng)",
      id: "Tipe 1 (Bagus karena keren)"
    },
    badMatch: {
      ko: "Type 5 (왜 자꾸 미안해하는지 이해 안 됨)",
      en: "Type 5 (Can't understand why they keep apologizing)",
      ja: "タイプ5（なぜいつも謝るのか理解できない）",
      'zh-CN': "类型5（无法理解为什么总是道歉）",
      'zh-TW': "類型5（無法理解為什麼總是道歉）",
      vi: "Loại 5 (Không hiểu tại sao cứ xin lỗi)",
      id: "Tipe 5 (Tidak mengerti mengapa mereka terus meminta maaf)"
    }
  },
  {
    type: "Type3",
    emoji: "📚",
    title: {
      ko: "건강한 양심, 도덕 교과서 (Conscientious)",
      en: "Healthy Conscience, Moral Textbook (Conscientious)",
      ja: "健全な良心、道徳の教科書（良心的）",
      'zh-CN': "健康的良心，道德教科书（有良心的）",
      'zh-TW': "健康的良心，道德教科書（有良心的）",
      vi: "Lương tâm lành mạnh, sách giáo khoa đạo đức (Có lương tâm)",
      id: "Hati Nurani Sehat, Buku Teks Moral (Berhati Nurani)"
    },
    shortDescription: {
      ko: "\"사람 된 도리는 지키고 살아야지.\"",
      en: "\"We should live by the proper way of being human.\"",
      ja: "「人としての道は守って生きるべきだ。」",
      'zh-CN': "\"应该遵守做人的道理。\"",
      'zh-TW': "「應該遵守做人的道理。」",
      vi: "\"Phải sống theo đạo lý làm người.\"",
      id: "\"Kita harus hidup dengan cara yang benar sebagai manusia.\""
    },
    description: {
      ko: "당신은 사회적 규범과 예의를 중요시하는 바른 생활 사나이/숙녀입니다. 남에게 피해 주는 것을 싫어하고 적당한 배려심을 가지고 있습니다. 건강한 죄책감은 당신을 더 나은 사람으로 성장시키는 원동력이 됩니다.",
      en: "You are a proper gentleman/lady who values social norms and etiquette. You dislike harming others and have appropriate consideration. Healthy guilt is the driving force that makes you grow into a better person.",
      ja: "あなたは社会的規範と礼儀を大切にする正しい生活の紳士/淑女です。他人に害を与えることを嫌い、適度な配慮を持っています。健全な罪悪感は、あなたをより良い人に成長させる原動力となります。",
      'zh-CN': "你是一个重视社会规范和礼仪的正直人士。你讨厌伤害别人，拥有适当的关怀。健康的愧疚感是推动你成长为更好的人的动力。",
      'zh-TW': "你是一個重視社會規範和禮儀的正直人士。你討厭傷害別人，擁有適當的關懷。健康的愧疚感是推動你成長為更好的人的動力。",
      vi: "Bạn là người đàng hoàng coi trọng quy tắc xã hội và lễ nghĩa. Bạn ghét làm hại người khác và có sự quan tâm vừa phải. Cảm giác tội lỗi lành mạnh là động lực giúp bạn trở thành người tốt hơn.",
      id: "Anda adalah pria/wanita terhormat yang menghargai norma sosial dan etiket. Anda tidak suka menyakiti orang lain dan memiliki pertimbangan yang tepat. Rasa bersalah yang sehat adalah kekuatan pendorong yang membuat Anda tumbuh menjadi orang yang lebih baik."
    },
    guiltLevel: {
      ko: "40% (매우 건강)",
      en: "40% (Very Healthy)",
      ja: "40%（非常に健康）",
      'zh-CN': "40%（非常健康）",
      'zh-TW': "40%（非常健康）",
      vi: "40% (Rất lành mạnh)",
      id: "40% (Sangat Sehat)"
    },
    characteristics: {
      ko: "예의 바름, 책임감 강함, 역지사지",
      en: "Polite, strong sense of responsibility, empathetic",
      ja: "礼儀正しい、責任感が強い、逆に考える",
      'zh-CN': "有礼貌，责任感强，换位思考",
      'zh-TW': "有禮貌，責任感強，換位思考",
      vi: "Lịch sự, trách nhiệm cao, đặt mình vào vị trí người khác",
      id: "Sopan, rasa tanggung jawab yang kuat, empati"
    },
    goodMatch: {
      ko: "Type 4 (서로 배려함)",
      en: "Type 4 (Mutual consideration)",
      ja: "タイプ4（お互いに配慮する）",
      'zh-CN': "类型4（互相体谅）",
      'zh-TW': "類型4（互相體諒）",
      vi: "Loại 4 (Quan tâm lẫn nhau)",
      id: "Tipe 4 (Pertimbangan timbal balik)"
    },
    badMatch: {
      ko: "Type 1 (무례해 보임)",
      en: "Type 1 (Seems rude)",
      ja: "タイプ1（無礼に見える）",
      'zh-CN': "类型1（显得无礼）",
      'zh-TW': "類型1（顯得無禮）",
      vi: "Loại 1 (Trông vô lễ)",
      id: "Tipe 1 (Terlihat kasar)"
    }
  },
  {
    type: "Type4",
    emoji: "☁️",
    title: {
      ko: "마음 약한 평화주의자, 소심한 배려 (Sensitive)",
      en: "Weak-hearted Pacifist, Timid Consideration (Sensitive)",
      ja: "心の弱い平和主義者、小心な配慮（敏感）",
      'zh-CN': "心软的和平主义者，胆小的关怀（敏感）",
      'zh-TW': "心軟的和平主義者，膽小的關懷（敏感）",
      vi: "Người yêu hòa bình yếu lòng, quan tâm nhút nhát (Nhạy cảm)",
      id: "Pasifis Berhati Lemah, Pertimbangan Pemalu (Sensitif)"
    },
    shortDescription: {
      ko: "\"혹시 기분 나빴을까? 신경 쓰여...\"",
      en: "\"I wonder if they felt bad? It bothers me...\"",
      ja: "「もしかして気分悪かった？気になる...」",
      'zh-CN': "\"他们会不会不高兴？我很在意...\"",
      'zh-TW': "「他們會不會不高興？我很在意...」",
      vi: "\"Họ có buồn không? Mình lo lắng...\"",
      id: "\"Apakah mereka merasa tidak enak? Itu mengganggu saya...\""
    },
    description: {
      ko: "당신은 타인의 감정에 민감하고 공감 능력이 뛰어납니다. 갈등을 싫어해서 웬만하면 내가 참고 넘어가는 편입니다. 상대방의 작은 표정 변화에도 \"나 때문인가?\" 하고 걱정하는 경향이 있어, 가끔은 피곤함을 느낍니다.",
      en: "You are sensitive to others' emotions and have excellent empathy. You dislike conflict, so you usually endure and let things pass. You tend to worry \"Is it because of me?\" even at small changes in others' expressions, and sometimes feel tired.",
      ja: "あなたは他人の感情に敏感で、共感能力が優れています。対立を嫌うので、できるだけ我慢してやり過ごす傾向があります。相手の小さな表情の変化にも「私のせい？」と心配する傾向があり、時々疲れを感じます。",
      'zh-CN': "你对别人的情绪很敏感，共情能力很强。你讨厌冲突，所以通常会忍耐并让事情过去。你倾向于担心\"是因为我吗？\"即使是对方面部表情的微小变化，有时会感到疲惫。",
      'zh-TW': "你對別人的情緒很敏感，共情能力很強。你討厭衝突，所以通常會忍耐並讓事情過去。你傾向於擔心「是因為我嗎？」即使是對方面部表情的微小變化，有時會感到疲憊。",
      vi: "Bạn nhạy cảm với cảm xúc người khác và có khả năng đồng cảm xuất sắc. Bạn ghét xung đột nên thường nhịn và để mọi thứ trôi qua. Bạn có xu hướng lo lắng \"Có phải vì mình không?\" ngay cả với những thay đổi nhỏ trong biểu cảm của người khác, và đôi khi cảm thấy mệt mỏi.",
      id: "Anda sensitif terhadap emosi orang lain dan memiliki empati yang sangat baik. Anda tidak suka konflik, jadi Anda biasanya menahan dan membiarkan hal-hal berlalu. Anda cenderung khawatir \"Apakah karena saya?\" bahkan pada perubahan kecil dalam ekspresi orang lain, dan kadang-kadang merasa lelah."
    },
    guiltLevel: {
      ko: "60% (주의 필요)",
      en: "60% (Caution Needed)",
      ja: "60%（注意が必要）",
      'zh-CN': "60%（需要注意）",
      'zh-TW': "60%（需要注意）",
      vi: "60% (Cần chú ý)",
      id: "60% (Perhatian Diperlukan)"
    },
    characteristics: {
      ko: "눈치 많이 봄, 거절 어려움",
      en: "Very observant, difficulty refusing",
      ja: "空気を読みすぎる、断りにくい",
      'zh-CN': "过于察言观色，难以拒绝",
      'zh-TW': "過於察言觀色，難以拒絕",
      vi: "Quan sát nhiều, khó từ chối",
      id: "Sangat waspada, sulit menolak"
    },
    goodMatch: {
      ko: "Type 3 (안정감을 줌)",
      en: "Type 3 (Gives stability)",
      ja: "タイプ3（安定感を与える）",
      'zh-CN': "类型3（给予稳定感）",
      'zh-TW': "類型3（給予穩定感）",
      vi: "Loại 3 (Cho cảm giác ổn định)",
      id: "Tipe 3 (Memberikan stabilitas)"
    },
    badMatch: {
      ko: "Type 1 (상처받음)",
      en: "Type 1 (Gets hurt)",
      ja: "タイプ1（傷つく）",
      'zh-CN': "类型1（受到伤害）",
      'zh-TW': "類型1（受到傷害）",
      vi: "Loại 1 (Bị tổn thương)",
      id: "Tipe 1 (Terluka)"
    }
  },
  {
    type: "Type5",
    emoji: "🙇",
    title: {
      ko: "착한 아이 콤플렉스, 프로 사과러 (Guilt Complex)",
      en: "Good Child Complex, Professional Apologizer (Guilt Complex)",
      ja: "良い子コンプレックス、プロ謝罪者（罪悪感コンプレックス）",
      'zh-CN': "好孩子情结，专业道歉者（内疚情结）",
      'zh-TW': "好孩子情結，專業道歉者（內疚情結）",
      vi: "Phức cảm đứa trẻ ngoan, chuyên gia xin lỗi (Phức cảm tội lỗi)",
      id: "Kompleks Anak Baik, Peminta Maaf Profesional (Kompleks Rasa Bersalah)"
    },
    shortDescription: {
      ko: "\"죄송해요, 제가 다 잘못했어요 ㅠㅠ\"",
      en: "\"I'm sorry, I did everything wrong\"",
      ja: "「ごめんなさい、私が全部間違えました」",
      'zh-CN': "\"对不起，都是我的错\"",
      'zh-TW': "「對不起，都是我的錯」",
      vi: "\"Xin lỗi, mình đã làm sai tất cả\"",
      id: "\"Maaf, saya melakukan semuanya salah\""
    },
    description: {
      ko: "당신은 \"미안해\"를 입에 달고 삽니다. 자신의 욕구보다 타인의 기분을 먼저 살피며, 모든 갈등의 원인을 자신에게서 찾습니다. 착하다는 말을 듣지만, 정작 본인은 속으로 곪아가고 있습니다. 당신은 죄지은 게 없습니다. 당당해지세요!",
      en: "You have \"I'm sorry\" stuck to your mouth. You check others' feelings before your own needs, and find the cause of all conflicts in yourself. You hear people say you're good, but you're actually rotting inside. You haven't done anything wrong. Be confident!",
      ja: "あなたは「ごめんなさい」を口に付けて生きています。自分の欲求より他人の気持ちを先に見て、すべての対立の原因を自分の中に見つけます。良い子だと言われますが、実際には心の中で腐っています。あなたは何も悪いことをしていません。堂々としていてください！",
      'zh-CN': "你把\"对不起\"挂在嘴边。你在他人的感受之前先考虑自己的需求，并在自己身上寻找所有冲突的原因。你听到别人说你很好，但实际上你内心在腐烂。你没有做错任何事。要自信！",
      'zh-TW': "你把「對不起」掛在嘴邊。你在他人的感受之前先考慮自己的需求，並在自己身上尋找所有衝突的原因。你聽到別人說你很好，但實際上你內心在腐爛。你沒有做錯任何事。要自信！",
      vi: "Bạn có \"Xin lỗi\" dính trên miệng. Bạn kiểm tra cảm xúc người khác trước nhu cầu của mình, và tìm nguyên nhân của mọi xung đột ở chính mình. Bạn nghe người ta nói bạn tốt, nhưng thực ra bạn đang thối rữa bên trong. Bạn không làm gì sai. Hãy tự tin lên!",
      id: "Anda memiliki \"Maaf\" menempel di mulut. Anda memeriksa perasaan orang lain sebelum kebutuhan Anda sendiri, dan menemukan penyebab semua konflik dalam diri Anda. Anda mendengar orang mengatakan Anda baik, tetapi sebenarnya Anda membusuk di dalam. Anda tidak melakukan kesalahan. Percaya dirilah!"
    },
    guiltLevel: {
      ko: "80% (위험 단계)",
      en: "80% (Danger Zone)",
      ja: "80%（危険段階）",
      'zh-CN': "80%（危险阶段）",
      'zh-TW': "80%（危險階段）",
      vi: "80% (Giai đoạn nguy hiểm)",
      id: "80% (Zona Bahaya)"
    },
    characteristics: {
      ko: "습관성 사과, 과한 저자세, 호구 잡힘",
      en: "Habitual apologies, excessive humility, being taken advantage of",
      ja: "習慣的な謝罪、過度な謙虚さ、利用される",
      'zh-CN': "习惯性道歉，过度谦逊，被利用",
      'zh-TW': "習慣性道歉，過度謙遜，被利用",
      vi: "Xin lỗi theo thói quen, khiêm tốn quá mức, bị lợi dụng",
      id: "Permintaan maaf kebiasaan, kerendahan hati berlebihan, dimanfaatkan"
    },
    goodMatch: {
      ko: "Type 6 (동병상련)",
      en: "Type 6 (Comrades in suffering)",
      ja: "タイプ6（同病相憐）",
      'zh-CN': "类型6（同病相怜）",
      'zh-TW': "類型6（同病相憐）",
      vi: "Loại 6 (Đồng cảnh ngộ)",
      id: "Tipe 6 (Teman dalam penderitaan)"
    },
    badMatch: {
      ko: "Type 2 (답답해함)",
      en: "Type 2 (Frustrated)",
      ja: "タイプ2（イライラする）",
      'zh-CN': "类型2（感到沮丧）",
      'zh-TW': "類型2（感到沮喪）",
      vi: "Loại 2 (Bực bội)",
      id: "Tipe 2 (Frustrasi)"
    }
  },
  {
    type: "Type6",
    emoji: "⛓️",
    title: {
      ko: "걸어 다니는 죄인, 도비 (Self-Blame)",
      en: "Walking Sinner, Dobby (Self-Blame)",
      ja: "歩く罪人、ドビー（自己非難）",
      'zh-CN': "行走的罪人，多比（自我责备）",
      'zh-TW': "行走的罪人，多比（自我責備）",
      vi: "Tội nhân biết đi, Dobby (Tự trách)",
      id: "Pendosa Berjalan, Dobby (Menyalahkan Diri)"
    },
    shortDescription: {
      ko: "\"제가 감히... 저는 행복할 자격이 없어요...\"",
      en: "\"How dare I... I don't deserve to be happy...\"",
      ja: "「私がよくも...私は幸せになる資格がありません...」",
      'zh-CN': "\"我怎么敢...我没有资格幸福...\"",
      'zh-TW': "「我怎麼敢...我沒有資格幸福...」",
      vi: "\"Sao mình dám... Mình không xứng đáng được hạnh phúc...\"",
      id: "\"Berani-beraninya saya... Saya tidak pantas bahagia...\""
    },
    description: {
      ko: "당신은 존재 자체에 죄책감을 느끼는 수준입니다. 타인의 부탁을 거절하면 큰일이 날 것 같고, 나를 위한 소비나 휴식조차 죄스럽게 느낍니다. 과도한 책임감과 자기 비하에 빠져 있습니다. 이제 그 무거운 짐을 내려놓고 자신을 용서할 때입니다.",
      en: "You feel guilt at the level of your very existence. You feel like something terrible will happen if you refuse others' requests, and even spending or resting for yourself feels guilty. You're trapped in excessive responsibility and self-deprecation. It's time to put down that heavy burden and forgive yourself.",
      ja: "あなたは存在そのものに罪悪感を感じるレベルです。他人の頼みを断ると大変なことになりそうで、自分のための消費や休息さえ罪悪感を感じます。過度な責任感と自己卑下に陥っています。今こそその重い荷物を下ろして、自分を許す時です。",
      'zh-CN': "你对自己的存在本身都感到内疚。你觉得如果拒绝别人的请求就会出大事，甚至为自己消费或休息都感到内疚。你陷入了过度的责任感和自我贬低。现在是放下那个沉重负担并原谅自己的时候了。",
      'zh-TW': "你對自己的存在本身都感到內疚。你覺得如果拒絕別人的請求就會出大事，甚至為自己消費或休息都感到內疚。你陷入了過度的責任感和自我貶低。現在是放下那個沉重負擔並原諒自己的時候了。",
      vi: "Bạn cảm thấy tội lỗi ở mức độ chính sự tồn tại của mình. Bạn cảm thấy như sẽ có chuyện tồi tệ xảy ra nếu từ chối yêu cầu của người khác, và ngay cả chi tiêu hay nghỉ ngơi cho bản thân cũng cảm thấy có lỗi. Bạn đang mắc kẹt trong trách nhiệm quá mức và tự hạ thấp bản thân. Đã đến lúc đặt gánh nặng đó xuống và tha thứ cho chính mình.",
      id: "Anda merasa bersalah pada tingkat keberadaan Anda sendiri. Anda merasa seperti sesuatu yang mengerikan akan terjadi jika Anda menolak permintaan orang lain, dan bahkan menghabiskan atau beristirahat untuk diri sendiri terasa bersalah. Anda terjebak dalam tanggung jawab yang berlebihan dan merendahkan diri. Saatnya meletakkan beban berat itu dan memaafkan diri sendiri."
    },
    guiltLevel: {
      ko: "99% (긴급 처방 필요)",
      en: "99% (Emergency Treatment Needed)",
      ja: "99%（緊急処置が必要）",
      'zh-CN': "99%（需要紧急治疗）",
      'zh-TW': "99%（需要緊急治療）",
      vi: "99% (Cần điều trị khẩn cấp)",
      id: "99% (Perawatan Darurat Diperlukan)"
    },
    characteristics: {
      ko: "자기 학대, 노예 근성, 불안",
      en: "Self-abuse, slave mentality, anxiety",
      ja: "自己虐待、奴隷根性、不安",
      'zh-CN': "自我虐待，奴隶性格，焦虑",
      'zh-TW': "自我虐待，奴隸性格，焦慮",
      vi: "Tự hành hạ, tâm lý nô lệ, lo âu",
      id: "Penyiksaan diri, mentalitas budak, kecemasan"
    },
    goodMatch: {
      ko: "Type 5 (서로 위로함)",
      en: "Type 5 (Comfort each other)",
      ja: "タイプ5（お互いに慰め合う）",
      'zh-CN': "类型5（互相安慰）",
      'zh-TW': "類型5（互相安慰）",
      vi: "Loại 5 (An ủi lẫn nhau)",
      id: "Tipe 5 (Saling menghibur)"
    },
    badMatch: {
      ko: "Type 1 (나를 이용할 수 있음)",
      en: "Type 1 (Can take advantage of me)",
      ja: "タイプ1（私を利用できる）",
      'zh-CN': "类型1（可以利用我）",
      'zh-TW': "類型1（可以利用我）",
      vi: "Loại 1 (Có thể lợi dụng mình)",
      id: "Tipe 1 (Dapat memanfaatkan saya)"
    }
  }
];

export function calculatePhase2GuiltLevelResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore <= 5) {
    return "Type1";
  } else if (totalScore <= 11) {
    return "Type2";
  } else if (totalScore <= 19) {
    return "Type3";
  } else if (totalScore <= 27) {
    return "Type4";
  } else if (totalScore <= 33) {
    return "Type5";
  } else if (totalScore >= 34) {
    return "Type6";
  } else {
    return "Type3"; // Fallback
  }
}
