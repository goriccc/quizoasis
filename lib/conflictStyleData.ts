export interface ConflictStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    type: string; // Type1, Type2, Type3, Type4, Type5, Type6
  }[];
}

export interface ConflictStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const conflictStyleQuestions: ConflictStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "상대방과 의견이 충돌해서 분위기가 싸해졌다.",
      en: "The atmosphere became tense due to conflicting opinions.",
      ja: "相手と意見が衝突して雰囲気が冷たくなった。",
      'zh-CN': "与对方意见冲突，气氛变得紧张。",
      'zh-TW': "與對方意見衝突，氣氛變得緊張。",
      vi: "Không khí trở nên căng thẳng do ý kiến xung đột với đối phương.",
      id: "Suasana menjadi tegang karena perbedaan pendapat dengan lawan bicara."
    },
    options: [
      {
        text: {
          ko: "\"잠깐 시간 좀 갖자.\" 자리를 피하거나 침묵한다.",
          en: "\"Let me have some time.\" I avoid the situation or stay silent.",
          ja: "「ちょっと時間をください。」席を外すか沈黙する。",
          'zh-CN': "「让我静一静。」我会避开或保持沉默。",
          'zh-TW': "「讓我靜一靜。」我會避開或保持沉默。",
          vi: "\"Để tôi có thời gian.\" Tôi tránh tình huống hoặc im lặng.",
          id: "\"Beri saya waktu sebentar.\" Saya menghindari situasi atau diam."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"내 말이 맞다니까?\" 내 주장을 더 강력하게 어필한다.",
          en: "\"I'm right, aren't I?\" I assert my position more strongly.",
          ja: "「私の言う通りでしょ？」自分の主張をより強く訴える。",
          'zh-CN': "「我说的对吧？」我会更强烈地坚持自己的观点。",
          'zh-TW': "「我說的對吧？」我會更強烈地堅持自己的觀點。",
          vi: "\"Tôi đúng mà, phải không?\" Tôi khẳng định lập trường của mình mạnh mẽ hơn.",
          id: "\"Saya benar, kan?\" Saya menegaskan posisi saya lebih kuat."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "\"그래, 네 말이 맞을 수도 있어.\" 일단 상대방 의견에 동조한다.",
          en: "\"Yeah, you might be right.\" I agree with the other person's opinion for now.",
          ja: "「そうだね、君の言う通りかもしれない。」とりあえず相手の意見に同調する。",
          'zh-CN': "「好吧，也许你说得对。」我会先附和对方的意见。",
          'zh-TW': "「好吧，也許你說得對。」我會先附和對方的意見。",
          vi: "\"Ừ, có thể bạn đúng.\" Tôi đồng ý với ý kiến của đối phương tạm thời.",
          id: "\"Ya, kamu mungkin benar.\" Saya setuju dengan pendapat lawan bicara untuk sementara."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "\"그럼 우리 중간 지점을 찾아보자.\" 타협안을 제시한다.",
          en: "\"Then let's find a middle ground.\" I propose a compromise.",
          ja: "「じゃあ、中間点を見つけよう。」妥協案を提示する。",
          'zh-CN': "「那我们找个折中方案吧。」我会提出妥协方案。",
          'zh-TW': "「那我們找個折衷方案吧。」我會提出妥協方案。",
          vi: "\"Vậy thì hãy tìm điểm giữa.\" Tôi đề xuất một thỏa hiệp.",
          id: "\"Kalau begitu, mari kita cari titik tengah.\" Saya mengusulkan kompromi."
        },
        type: "Type4"
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "상대방이 나에게 화를 낼 때 나의 반응은?",
      en: "What is my reaction when someone gets angry at me?",
      ja: "相手が私に怒ったとき、私の反応は？",
      'zh-CN': "当别人对我生气时，我的反应是？",
      'zh-TW': "當別人對我生氣時，我的反應是？",
      vi: "Phản ứng của tôi khi ai đó tức giận với tôi là gì?",
      id: "Apa reaksi saya ketika seseorang marah kepada saya?"
    },
    options: [
      {
        text: {
          ko: "당황해서 아무 말도 못 하고 멍해진다.",
          en: "I'm flustered and can't say anything, just stare blankly.",
          ja: "慌てて何も言えず、ぼーっとする。",
          'zh-CN': "我惊慌失措，说不出话来，只是发呆。",
          'zh-TW': "我驚慌失措，說不出話來，只是發呆。",
          vi: "Tôi bối rối và không thể nói gì, chỉ nhìn chằm chằm.",
          id: "Saya bingung dan tidak bisa mengatakan apa-apa, hanya menatap kosong."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"너는 뭐 잘했어?\" 같이 화를 내며 맞받아친다.",
          en: "\"What did you do right?\" I get angry back and fight back.",
          ja: "「お前は何ができたんだ？」同じように怒って反撃する。",
          'zh-CN': "「你做得很好吗？」我会同样生气并反击。",
          'zh-TW': "「你做得很好嗎？」我會同樣生氣並反擊。",
          vi: "\"Bạn đã làm gì đúng?\" Tôi tức giận và phản công lại.",
          id: "\"Apa yang kamu lakukan dengan benar?\" Saya marah kembali dan melawan."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "\"미안해, 화 풀어.\" 빨리 상황을 종료시키기 위해 사과한다.",
          en: "\"I'm sorry, calm down.\" I apologize to quickly end the situation.",
          ja: "「ごめん、怒りを解いて。」状況を早く終わらせるために謝罪する。",
          'zh-CN': "「对不起，消消气。」我会道歉以快速结束情况。",
          'zh-TW': "「對不起，消消氣。」我會道歉以快速結束情況。",
          vi: "\"Xin lỗi, bình tĩnh lại.\" Tôi xin lỗi để nhanh chóng kết thúc tình huống.",
          id: "\"Maaf, tenang.\" Saya meminta maaf untuk segera mengakhiri situasi."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "\"구체적으로 뭐가 기분 나빴어?\" 이유를 묻고 대화한다.",
          en: "\"Specifically, what made you feel bad?\" I ask for the reason and have a conversation.",
          ja: "「具体的に何が気分悪かった？」理由を聞いて対話する。",
          'zh-CN': "「具体是什么让你不高兴？」我会询问原因并进行对话。",
          'zh-TW': "「具體是什麼讓你不高興？」我會詢問原因並進行對話。",
          vi: "\"Cụ thể điều gì làm bạn khó chịu?\" Tôi hỏi lý do và trò chuyện.",
          id: "\"Secara spesifik, apa yang membuatmu merasa tidak enak?\" Saya bertanya alasannya dan berbicara."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "내가 생각하는 최악의 갈등 상황은?",
      en: "What is the worst conflict situation I can think of?",
      ja: "私が考える最悪の葛藤状況は？",
      'zh-CN': "我认为最糟糕的冲突情况是？",
      'zh-TW': "我認為最糟糕的衝突情況是？",
      vi: "Tình huống xung đột tồi tệ nhất mà tôi nghĩ đến là gì?",
      id: "Situasi konflik terburuk yang saya pikirkan adalah?"
    },
    options: [
      {
        text: {
          ko: "감정적으로 소리 지르고 폭언이 오가는 상황.",
          en: "A situation where people are emotionally shouting and exchanging harsh words.",
          ja: "感情的に叫び合い、暴言が飛び交う状況。",
          'zh-CN': "情绪激动地大喊大叫、恶语相向的情况。",
          'zh-TW': "情緒激動地大喊大叫、惡語相向的情況。",
          vi: "Tình huống mọi người la hét về mặt cảm xúc và trao đổi lời lẽ gay gắt.",
          id: "Situasi di mana orang berteriak secara emosional dan saling bertukar kata-kata kasar."
        },
        type: "Type5"
      },
      {
        text: {
          ko: "내 자존심이 짓밟히고 무시당하는 상황.",
          en: "A situation where my self-esteem is trampled and I'm ignored.",
          ja: "私の自尊心が踏みにじられ、無視される状況。",
          'zh-CN': "我的自尊心被践踏、被忽视的情况。",
          'zh-TW': "我的自尊心被踐踏、被忽視的情況。",
          vi: "Tình huống lòng tự trọng của tôi bị chà đạp và tôi bị bỏ qua.",
          id: "Situasi di mana harga diri saya diinjak-injak dan saya diabaikan."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "상대방이 나에게 실망해서 떠나갈 것 같은 상황.",
          en: "A situation where the other person seems disappointed in me and might leave.",
          ja: "相手が私に失望して去っていきそうな状況。",
          'zh-CN': "对方对我失望、可能会离开的情况。",
          'zh-TW': "對方對我失望、可能會離開的情況。",
          vi: "Tình huống đối phương có vẻ thất vọng về tôi và có thể rời đi.",
          id: "Situasi di mana orang lain tampak kecewa pada saya dan mungkin pergi."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "아무런 해결책 없이 시간만 낭비하는 상황.",
          en: "A situation where time is wasted with no solution.",
          ja: "何の解決策もなく時間だけが無駄になる状況。",
          'zh-CN': "没有任何解决方案、只是浪费时间的情况。",
          'zh-TW': "沒有任何解決方案、只是浪費時間的情況。",
          vi: "Tình huống lãng phí thời gian mà không có giải pháp nào.",
          id: "Situasi di mana waktu terbuang tanpa solusi."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "싸우고 난 뒤, 화해는 어떻게?",
      en: "After a fight, how do you make up?",
      ja: "喧嘩の後、仲直りはどうする？",
      'zh-CN': "吵架后，你们如何和好？",
      'zh-TW': "吵架後，你們如何和好？",
      vi: "Sau khi cãi nhau, bạn làm hòa như thế nào?",
      id: "Setelah bertengkar, bagaimana cara berdamai?"
    },
    options: [
      {
        text: {
          ko: "시간이 해결해 줄 때까지 연락을 안 한다.",
          en: "I don't contact them until time solves it.",
          ja: "時間が解決してくれるまで連絡しない。",
          'zh-CN': "在时间解决问题之前，我不会联系他们。",
          'zh-TW': "在時間解決問題之前，我不會聯繫他們。",
          vi: "Tôi không liên lạc với họ cho đến khi thời gian giải quyết vấn đề.",
          id: "Saya tidak menghubungi mereka sampai waktu menyelesaikannya."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "내가 이겼다는 확신이 들 때까지 냉전 상태를 유지한다.",
          en: "I maintain a cold war until I'm sure I won.",
          ja: "自分が勝ったという確信が持てるまで冷戦状態を維持する。",
          'zh-CN': "我会保持冷战状态，直到确信我赢了。",
          'zh-TW': "我會保持冷戰狀態，直到確信我贏了。",
          vi: "Tôi duy trì tình trạng chiến tranh lạnh cho đến khi chắc chắn tôi đã thắng.",
          id: "Saya mempertahankan perang dingin sampai saya yakin menang."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "눈치를 보다가 슬그머니 다가가서 애교를 부린다.",
          en: "I watch for cues, then sneakily approach and act cute.",
          ja: "空気を読みながら、こっそり近づいて甘える。",
          'zh-CN': "我会观察气氛，然后悄悄接近并撒娇。",
          'zh-TW': "我會觀察氣氛，然後悄悄接近並撒嬌。",
          vi: "Tôi quan sát tín hiệu, sau đó lén lút tiếp cận và làm nũng.",
          id: "Saya memperhatikan isyarat, lalu diam-diam mendekat dan bertingkah manis."
        },
        type: "Type5"
      },
      {
        text: {
          ko: "진지하게 대화를 요청해서 앙금을 푼다.",
          en: "I seriously request a conversation to resolve the grudge.",
          ja: "真剣に対話を求めて、わだかまりを解く。",
          'zh-CN': "我会认真请求对话以化解怨恨。",
          'zh-TW': "我會認真請求對話以化解怨恨。",
          vi: "Tôi nghiêm túc yêu cầu một cuộc trò chuyện để giải quyết mối hận thù.",
          id: "Saya dengan serius meminta percakapan untuk menyelesaikan dendam."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구들과 점심 메뉴를 정하는데 의견이 안 맞는다.",
      en: "When deciding on lunch with friends, opinions don't match.",
      ja: "友達と昼食のメニューを決めるのに意見が合わない。",
      'zh-CN': "和朋友们决定午餐菜单时，意见不一致。",
      'zh-TW': "和朋友們決定午餐菜單時，意見不一致。",
      vi: "Khi quyết định thực đơn bữa trưa với bạn bè, ý kiến không khớp.",
      id: "Saat memutuskan menu makan siang dengan teman, pendapat tidak cocok."
    },
    options: [
      {
        text: {
          ko: "\"아무거나 괜찮아.\" 대세에 따르거나 기권한다.",
          en: "\"Anything is fine.\" I follow the majority or give up.",
          ja: "「何でもいいよ。」大勢に従うか、降参する。",
          'zh-CN': "「什么都行。」我会跟随大多数或放弃。",
          'zh-TW': "「什麼都行。」我會跟隨大多數或放棄。",
          vi: "\"Cái gì cũng được.\" Tôi theo đa số hoặc từ bỏ.",
          id: "\"Apa saja boleh.\" Saya mengikuti mayoritas atau menyerah."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"오늘은 무조건 이거 먹어야 해.\" 내 의견을 관철시킨다.",
          en: "\"We absolutely have to eat this today.\" I push through my opinion.",
          ja: "「今日は絶対これ食べなきゃ。」自分の意見を通す。",
          'zh-CN': "「今天必须吃这个。」我会坚持自己的意见。",
          'zh-TW': "「今天必須吃這個。」我會堅持自己的意見。",
          vi: "\"Hôm nay chắc chắn phải ăn cái này.\" Tôi ép buộc ý kiến của mình.",
          id: "\"Hari ini harus makan ini.\" Saya memaksakan pendapat saya."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "\"그럼 가위바위보로 정하자.\" 공평한 방법을 제안한다.",
          en: "\"Then let's decide by rock-paper-scissors.\" I suggest a fair method.",
          ja: "「じゃあ、じゃんけんで決めよう。」公平な方法を提案する。",
          'zh-CN': "「那我们用石头剪刀布决定吧。」我会建议一个公平的方法。",
          'zh-TW': "「那我們用石頭剪刀布決定吧。」我會建議一個公平的方法。",
          vi: "\"Vậy thì quyết định bằng oẳn tù tì.\" Tôi đề xuất một phương pháp công bằng.",
          id: "\"Kalau begitu, mari kita putuskan dengan suit.\" Saya menyarankan metode yang adil."
        },
        type: "Type4"
      },
      {
        text: {
          ko: "\"A도 좋고 B도 좋으니까, 둘 다 파는 곳 갈까?\" 절충한다.",
          en: "\"Both A and B are good, so shall we go somewhere that serves both?\" I compromise.",
          ja: "「AもBもいいから、両方売ってる店行かない？」折衷する。",
          'zh-CN': "「A和B都很好，我们去两家都有的地方吧？」我会妥协。",
          'zh-TW': "「A和B都很好，我們去兩家都有的地方吧？」我會妥協。",
          vi: "\"Cả A và B đều tốt, vậy chúng ta đi chỗ nào có cả hai nhé?\" Tôi thỏa hiệp.",
          id: "\"A dan B sama-sama bagus, jadi kita pergi ke tempat yang menjual keduanya?\" Saya berkompromi."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "평소 당신의 말투나 화법은?",
      en: "What is your usual speaking style or way of talking?",
      ja: "普段のあなたの話し方や口調は？",
      'zh-CN': "你平时的说话方式或语气是？",
      'zh-TW': "你平時的說話方式或語氣是？",
      vi: "Phong cách nói chuyện hoặc cách nói thông thường của bạn là gì?",
      id: "Bagaimana gaya bicara atau cara berbicara Anda biasanya?"
    },
    options: [
      {
        text: {
          ko: "말수가 적고 듣는 편이다.",
          en: "I speak little and prefer to listen.",
          ja: "話すことが少なく、聞く方だ。",
          'zh-CN': "我说话少，更喜欢倾听。",
          'zh-TW': "我說話少，更喜歡傾聽。",
          vi: "Tôi nói ít và thích lắng nghe hơn.",
          id: "Saya sedikit bicara dan lebih suka mendengarkan."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "직설적이고 단호하다.",
          en: "I'm direct and firm.",
          ja: "率直で断固としている。",
          'zh-CN': "我直接而坚定。",
          'zh-TW': "我直接而堅定。",
          vi: "Tôi trực tiếp và kiên quyết.",
          id: "Saya langsung dan tegas."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "부드럽고 우회적이다.",
          en: "I'm gentle and indirect.",
          ja: "優しくて回りくどい。",
          'zh-CN': "我温和而间接。",
          'zh-TW': "我溫和而間接。",
          vi: "Tôi nhẹ nhàng và gián tiếp.",
          id: "Saya lembut dan tidak langsung."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "논리적이고 차분하다.",
          en: "I'm logical and calm.",
          ja: "論理的で冷静だ。",
          'zh-CN': "我逻辑性强且冷静。",
          'zh-TW': "我邏輯性強且冷靜。",
          vi: "Tôi logic và bình tĩnh.",
          id: "Saya logis dan tenang."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "상대방의 잘못이 명백할 때 당신은?",
      en: "When the other person's mistake is obvious, what do you do?",
      ja: "相手の間違いが明らかなとき、あなたは？",
      'zh-CN': "当对方的错误很明显时，你会怎么做？",
      'zh-TW': "當對方的錯誤很明顯時，你會怎麼做？",
      vi: "Khi sai lầm của đối phương rõ ràng, bạn làm gì?",
      id: "Ketika kesalahan lawan bicara jelas, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "굳이 지적해서 싸우기 싫어 넘어간다.",
          en: "I don't want to point it out and fight, so I let it go.",
          ja: "わざわざ指摘して喧嘩したくないので、見逃す。",
          'zh-CN': "我不想指出来引发争吵，所以就算了。",
          'zh-TW': "我不想指出來引發爭吵，所以就算了。",
          vi: "Tôi không muốn chỉ ra và cãi nhau, nên tôi bỏ qua.",
          id: "Saya tidak ingin menunjukkannya dan bertengkar, jadi saya biarkan saja."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "조목조목 따져서 잘못을 인정하게 만든다.",
          en: "I go through it point by point to make them admit their mistake.",
          ja: "一つ一つ追及して、間違いを認めさせる。",
          'zh-CN': "我会逐条追究，让他们承认错误。",
          'zh-TW': "我會逐條追究，讓他們承認錯誤。",
          vi: "Tôi đi từng điểm một để buộc họ thừa nhận sai lầm.",
          id: "Saya menelusuri poin demi poin untuk membuat mereka mengakui kesalahan."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "기분 상하지 않게 돌려서 말해준다.",
          en: "I tell them indirectly so they don't feel bad.",
          ja: "気分を害さないように遠回しに伝える。",
          'zh-CN': "我会委婉地告诉他们，以免他们感到不快。",
          'zh-TW': "我會委婉地告訴他們，以免他們感到不快。",
          vi: "Tôi nói với họ một cách gián tiếp để họ không cảm thấy tồi tệ.",
          id: "Saya memberitahu mereka secara tidak langsung agar mereka tidak merasa buruk."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "왜 그랬는지 이유를 들어보고 판단한다.",
          en: "I listen to why they did it and then judge.",
          ja: "なぜそうしたのか理由を聞いて判断する。",
          'zh-CN': "我会听取他们这样做的原因，然后判断。",
          'zh-TW': "我會聽取他們這樣做的原因，然後判斷。",
          vi: "Tôi lắng nghe lý do tại sao họ làm vậy rồi mới phán xét.",
          id: "Saya mendengarkan alasan mengapa mereka melakukannya dan kemudian menilai."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "갈등 상황에서 스트레스를 푸는 방법은?",
      en: "How do you relieve stress in conflict situations?",
      ja: "葛藤状況でストレスを解消する方法は？",
      'zh-CN': "在冲突情况下，你如何缓解压力？",
      'zh-TW': "在衝突情況下，你如何緩解壓力？",
      vi: "Bạn làm thế nào để giảm căng thẳng trong tình huống xung đột?",
      id: "Bagaimana cara Anda menghilangkan stres dalam situasi konflik?"
    },
    options: [
      {
        text: {
          ko: "잠을 자거나 혼자만의 시간을 갖는다.",
          en: "I sleep or have time alone.",
          ja: "寝るか、一人の時間を持つ。",
          'zh-CN': "我会睡觉或独处。",
          'zh-TW': "我會睡覺或獨處。",
          vi: "Tôi ngủ hoặc có thời gian một mình.",
          id: "Saya tidur atau memiliki waktu sendiri."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "운동, 게임 등으로 에너지를 발산한다.",
          en: "I release energy through exercise, games, etc.",
          ja: "運動、ゲームなどでエネルギーを発散する。",
          'zh-CN': "我会通过运动、游戏等方式释放能量。",
          'zh-TW': "我會通過運動、遊戲等方式釋放能量。",
          vi: "Tôi giải phóng năng lượng thông qua tập thể dục, trò chơi, v.v.",
          id: "Saya melepaskan energi melalui olahraga, permainan, dll."
        },
        type: "Type5"
      },
      {
        text: {
          ko: "다른 친구에게 하소연하며 위로받는다.",
          en: "I complain to other friends and receive comfort.",
          ja: "他の友達に愚痴を言って慰めてもらう。",
          'zh-CN': "我会向其他朋友抱怨并获得安慰。",
          'zh-TW': "我會向其他朋友抱怨並獲得安慰。",
          vi: "Tôi phàn nàn với bạn bè khác và nhận được sự an ủi.",
          id: "Saya mengeluh kepada teman lain dan mendapat kenyamanan."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "문제 해결을 위한 계획을 세우거나 정보를 찾는다.",
          en: "I make plans to solve the problem or search for information.",
          ja: "問題解決のための計画を立てるか、情報を探す。",
          'zh-CN': "我会制定解决问题的计划或查找信息。",
          'zh-TW': "我會制定解決問題的計劃或查找信息。",
          vi: "Tôi lập kế hoạch để giải quyết vấn đề hoặc tìm kiếm thông tin.",
          id: "Saya membuat rencana untuk menyelesaikan masalah atau mencari informasi."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "당신에게 '토론'이란?",
      en: "What does 'debate' mean to you?",
      ja: "あなたにとって「討論」とは？",
      'zh-CN': "对你来说'讨论'是什么？",
      'zh-TW': "對你來說「討論」是什麼？",
      vi: "'Tranh luận' đối với bạn là gì?",
      id: "Apa arti 'debat' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "피곤하고 기 빨리는 것.",
          en: "Something tiring and draining.",
          ja: "疲れるし、気が滅入るもの。",
          'zh-CN': "令人疲惫和消耗精力的事情。",
          'zh-TW': "令人疲憊和消耗精力的事情。",
          vi: "Điều gì đó mệt mỏi và kiệt sức.",
          id: "Sesuatu yang melelahkan dan menguras tenaga."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "승패를 가리는 지적 전쟁.",
          en: "An intellectual war to determine victory or defeat.",
          ja: "勝敗を決める知的戦争。",
          'zh-CN': "决定胜负的智力战争。",
          'zh-TW': "決定勝負的智力戰爭。",
          vi: "Một cuộc chiến trí tuệ để xác định thắng thua.",
          id: "Perang intelektual untuk menentukan kemenangan atau kekalahan."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "서로를 알아가는 대화 과정.",
          en: "A conversation process to get to know each other.",
          ja: "お互いを知る対話の過程。",
          'zh-CN': "互相了解对方的对话过程。",
          'zh-TW': "互相了解對方的對話過程。",
          vi: "Quá trình trò chuyện để hiểu nhau.",
          id: "Proses percakapan untuk saling mengenal."
        },
        type: "Type5"
      },
      {
        text: {
          ko: "더 나은 결론을 위한 과정.",
          en: "A process to reach a better conclusion.",
          ja: "より良い結論に達するための過程。",
          'zh-CN': "达成更好结论的过程。",
          'zh-TW': "達成更好結論的過程。",
          vi: "Quá trình để đạt được kết luận tốt hơn.",
          id: "Proses untuk mencapai kesimpulan yang lebih baik."
        },
        type: "Type4"
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "상대방이 말도 안 되는 고집을 부릴 때?",
      en: "When the other person is being unreasonably stubborn?",
      ja: "相手が理不尽な頑固さを見せるとき？",
      'zh-CN': "当对方无理取闹地固执时？",
      'zh-TW': "當對方無理取鬧地固執時？",
      vi: "Khi đối phương tỏ ra cứng đầu một cách vô lý?",
      id: "Ketika lawan bicara menunjukkan keras kepala yang tidak masuk akal?"
    },
    options: [
      {
        text: {
          ko: "\"어휴...\" 속으로만 욕하고 포기한다.",
          en: "\"Ugh...\" I curse internally and give up.",
          ja: "「はあ...」心の中で呪い、諦める。",
          'zh-CN': "「唉...」我在心里骂人然后放弃。",
          'zh-TW': "「唉...」我在心裡罵人然後放棄。",
          vi: "\"Ừm...\" Tôi chửi thầm trong lòng và từ bỏ.",
          id: "\"Ugh...\" Saya mengutuk dalam hati dan menyerah."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"말이 안 통하네.\" 답답해하며 화를 낸다.",
          en: "\"This doesn't make sense.\" I get frustrated and angry.",
          ja: "「話が通じないね。」イライラして怒る。",
          'zh-CN': "「说不通。」我会感到沮丧和生气。",
          'zh-TW': "「說不通。」我會感到沮喪和生氣。",
          vi: "\"Không thể nói chuyện được.\" Tôi thất vọng và tức giận.",
          id: "\"Ini tidak masuk akal.\" Saya frustrasi dan marah."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "\"그래그래, 알겠어.\" 달래주며 맞춰준다.",
          en: "\"Okay, okay, I got it.\" I soothe them and go along.",
          ja: "「わかった、わかった。」なだめながら合わせる。",
          'zh-CN': "「好吧好吧，我知道了。」我会安抚他们并配合。",
          'zh-TW': "「好吧好吧，我知道了。」我會安撫他們並配合。",
          vi: "\"Ừ ừ, tôi hiểu rồi.\" Tôi xoa dịu họ và chiều theo.",
          id: "\"Oke, oke, saya mengerti.\" Saya menenangkan mereka dan mengikuti."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "\"그건 사실과 달라.\" 팩트와 증거를 제시한다.",
          en: "\"That's different from the facts.\" I present facts and evidence.",
          ja: "「それは事実と違う。」事実と証拠を提示する。",
          'zh-CN': "「那与事实不符。」我会提出事实和证据。",
          'zh-TW': "「那與事實不符。」我會提出事實和證據。",
          vi: "\"Điều đó khác với sự thật.\" Tôi đưa ra sự thật và bằng chứng.",
          id: "\"Itu berbeda dari fakta.\" Saya menyajikan fakta dan bukti."
        },
        type: "Type4"
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "누군가와 손절을 결심하는 순간은?",
      en: "When do you decide to cut ties with someone?",
      ja: "誰かと縁を切る決心をする瞬間は？",
      'zh-CN': "你什么时候决定与某人断绝关系？",
      'zh-TW': "你什麼時候決定與某人斷絕關係？",
      vi: "Khi nào bạn quyết định cắt đứt quan hệ với ai đó?",
      id: "Kapan Anda memutuskan untuk memutuskan hubungan dengan seseorang?"
    },
    options: [
      {
        text: {
          ko: "나를 귀찮게 하거나 피곤하게 할 때.",
          en: "When they bother or exhaust me.",
          ja: "私を煩わせたり、疲れさせたりするとき。",
          'zh-CN': "当他们打扰或让我疲惫时。",
          'zh-TW': "當他們打擾或讓我疲憊時。",
          vi: "Khi họ làm phiền hoặc làm tôi kiệt sức.",
          id: "Ketika mereka mengganggu atau melelahkan saya."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "내 자존심을 건드리거나 무시할 때.",
          en: "When they hurt my self-esteem or ignore me.",
          ja: "私の自尊心を傷つけたり、無視したりするとき。",
          'zh-CN': "当他们伤害我的自尊心或忽视我时。",
          'zh-TW': "當他們傷害我的自尊心或忽視我時。",
          vi: "Khi họ làm tổn thương lòng tự trọng của tôi hoặc bỏ qua tôi.",
          id: "Ketika mereka menyakiti harga diri saya atau mengabaikan saya."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "나에게 마음이 떴다고 느껴질 때.",
          en: "When I feel they've lost interest in me.",
          ja: "私への気持ちが冷めたと感じるとき。",
          'zh-CN': "当我感觉他们对我不再有兴趣时。",
          'zh-TW': "當我感覺他們對我不再有興趣時。",
          vi: "Khi tôi cảm thấy họ đã mất hứng thú với tôi.",
          id: "Ketika saya merasa mereka sudah kehilangan minat pada saya."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "대화가 전혀 통하지 않고 개선의 여지가 없을 때.",
          en: "When communication doesn't work at all and there's no room for improvement.",
          ja: "対話が全く通じず、改善の余地がないとき。",
          'zh-CN': "当沟通完全无效且没有改善余地时。",
          'zh-TW': "當溝通完全無效且沒有改善餘地時。",
          vi: "Khi giao tiếp hoàn toàn không hiệu quả và không có cơ hội cải thiện.",
          id: "Ketika komunikasi sama sekali tidak berfungsi dan tidak ada ruang untuk perbaikan."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신이 추구하는 인간관계는?",
      en: "What kind of relationship do you pursue?",
      ja: "あなたが求める人間関係は？",
      'zh-CN': "你追求什么样的人际关系？",
      'zh-TW': "你追求什麼樣的人際關係？",
      vi: "Bạn theo đuổi loại mối quan hệ nào?",
      id: "Jenis hubungan seperti apa yang Anda kejar?"
    },
    options: [
      {
        text: {
          ko: "적당한 거리를 유지하는 평온한 관계.",
          en: "A peaceful relationship maintaining appropriate distance.",
          ja: "適度な距離を保つ平穏な関係。",
          'zh-CN': "保持适当距离的平静关系。",
          'zh-TW': "保持適當距離的平靜關係。",
          vi: "Một mối quan hệ bình yên duy trì khoảng cách phù hợp.",
          id: "Hubungan yang damai dengan menjaga jarak yang tepat."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "솔직하고 뒤끝 없는 쿨한 관계.",
          en: "An honest, cool relationship with no hard feelings.",
          ja: "正直で後味の悪くないクールな関係。",
          'zh-CN': "诚实、没有后患的酷关系。",
          'zh-TW': "誠實、沒有後患的酷關係。",
          vi: "Một mối quan hệ chân thành, mát mẻ không có hậu quả.",
          id: "Hubungan yang jujur dan keren tanpa dendam."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "서로 아껴주고 배려하는 따뜻한 관계.",
          en: "A warm relationship where we care for and consider each other.",
          ja: "お互いを大切にし、思いやり合う温かい関係。",
          'zh-CN': "互相珍惜和关怀的温暖关系。",
          'zh-TW': "互相珍惜和關懷的溫暖關係。",
          vi: "Một mối quan hệ ấm áp nơi chúng ta quan tâm và chăm sóc lẫn nhau.",
          id: "Hubungan yang hangat di mana kita saling peduli dan mempertimbangkan satu sama lain."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "서로 성장하고 발전하는 성숙한 관계.",
          en: "A mature relationship where we grow and develop together.",
          ja: "お互いに成長し、発展する成熟した関係。",
          'zh-CN': "共同成长和发展的成熟关系。",
          'zh-TW': "共同成長和發展的成熟關係。",
          vi: "Một mối quan hệ trưởng thành nơi chúng ta cùng nhau phát triển.",
          id: "Hubungan yang matang di mana kita tumbuh dan berkembang bersama."
        },
        type: "Type6"
      }
    ]
  }
];

export const conflictStyleResults: ConflictStyleResult[] = [
  {
    type: "Type1",
    emoji: "🐢",
    title: {
      ko: "동굴 속 은둔자, 회피형 (Avoiding)",
      en: "Cave Hermit, Avoiding Type",
      ja: "洞窟の隠者、回避型",
      'zh-CN': "洞穴隐士，回避型",
      'zh-TW': "洞穴隱士，迴避型",
      vi: "Ẩn sĩ trong hang, Kiểu Tránh né",
      id: "Pertapa Gua, Tipe Menghindar"
    },
    shortDescription: {
      ko: "\"일단 피하고 보자. 시간 지나면 괜찮아지겠지.\"",
      en: "\"Let's avoid it first. It'll be fine once time passes.\"",
      ja: "「とりあえず避けよう。時間が経てば大丈夫だろう。」",
      'zh-CN': "「先避开吧。时间过去就会好的。」",
      'zh-TW': "「先避開吧。時間過去就會好的。」",
      vi: "\"Hãy tránh né trước đã. Thời gian trôi qua sẽ ổn thôi.\"",
      id: "\"Mari kita hindari dulu. Akan baik-baik saja setelah waktu berlalu.\""
    },
    description: {
      ko: "당신은 갈등 자체를 극도로 싫어합니다. 싸울 조짐이 보이면 입을 다물거나 자리를 피해버립니다. 문제를 직면하기보다 덮어두는 것을 선호하며, '평화 유지'가 아닌 '전쟁 회피'가 목적입니다. 상대방은 당신의 침묵에 답답함을 느낄 수 있습니다.",
      en: "You extremely dislike conflict itself. When you see signs of a fight, you shut your mouth or leave the situation. You prefer to cover up problems rather than face them, and your goal is 'war avoidance' rather than 'peace maintenance'. The other person may feel frustrated by your silence.",
      ja: "あなたは葛藤そのものを極度に嫌います。喧嘩の兆しが見えると、口を閉ざすか、その場を離れてしまいます。問題に直面するよりも覆い隠すことを好み、'平和維持'ではなく'戦争回避'が目的です。相手はあなたの沈黙にイライラを感じるかもしれません。",
      'zh-CN': "你极度厌恶冲突本身。当你看到争吵的迹象时，你会闭嘴或离开。你宁愿掩盖问题而不是面对它们，你的目标是'避免战争'而不是'维持和平'。对方可能会因为你的沉默而感到沮丧。",
      'zh-TW': "你極度厭惡衝突本身。當你看到爭吵的跡象時，你會閉嘴或離開。你寧願掩蓋問題而不是面對它們，你的目標是「避免戰爭」而不是「維持和平」。對方可能會因為你的沉默而感到沮喪。",
      vi: "Bạn cực kỳ ghét xung đột. Khi thấy dấu hiệu cãi nhau, bạn im lặng hoặc rời khỏi tình huống. Bạn thích che đậy vấn đề hơn là đối mặt, và mục tiêu là 'tránh chiến tranh' chứ không phải 'duy trì hòa bình'. Đối phương có thể cảm thấy bực bội vì sự im lặng của bạn.",
      id: "Anda sangat membenci konflik itu sendiri. Ketika Anda melihat tanda-tanda pertengkaran, Anda menutup mulut atau meninggalkan situasi. Anda lebih suka menutupi masalah daripada menghadapinya, dan tujuan Anda adalah 'menghindari perang' daripada 'mempertahankan perdamaian'. Orang lain mungkin merasa frustrasi dengan keheningan Anda."
    },
    characteristics: {
      ko: "잠수, 묵비권, 읽씹",
      en: "Ghosting, Right to remain silent, Ignoring messages",
      ja: "既読スルー、黙秘権、メッセージ無視",
      'zh-CN': "已读不回、保持沉默权、忽略消息",
      'zh-TW': "已讀不回、保持沉默權、忽略消息",
      vi: "Trốn tránh, Quyền im lặng, Bỏ qua tin nhắn",
      id: "Menghilang, Hak untuk tetap diam, Mengabaikan pesan"
    },
    goodMatch: {
      ko: "Type 3 (알아서 리드함)",
      en: "Type 3 (Takes the lead)",
      ja: "タイプ3（自らリードする）",
      'zh-CN': "类型3（主动引导）",
      'zh-TW': "類型3（主動引導）",
      vi: "Type 3 (Tự dẫn dắt)",
      id: "Tipe 3 (Mengambil alih)"
    },
    badMatch: {
      ko: "Type 6 (끝까지 대화하자고 함)",
      en: "Type 6 (Wants to talk until the end)",
      ja: "タイプ6（最後まで話そうとする）",
      'zh-CN': "类型6（坚持要谈到底）",
      'zh-TW': "類型6（堅持要談到底）",
      vi: "Type 6 (Muốn nói chuyện đến cùng)",
      id: "Tipe 6 (Ingin berbicara sampai akhir)"
    }
  },
  {
    type: "Type2",
    emoji: "🦈",
    title: {
      ko: "전투력 만렙, 승부사형 (Competing)",
      en: "Max Combat Power, Competitive Type",
      ja: "戦闘力満点、勝負師型",
      'zh-CN': "战斗力满级，竞争型",
      'zh-TW': "戰鬥力滿級，競爭型",
      vi: "Sức chiến đấu tối đa, Kiểu Cạnh tranh",
      id: "Kekuatan Tempur Maksimal, Tipe Kompetitif"
    },
    shortDescription: {
      ko: "\"지는 건 죽기보다 싫어. 내가 맞잖아!\"",
      en: "\"I hate losing more than death. I'm right!\"",
      ja: "「負けるのは死ぬより嫌だ。俺が正しいんだ！」",
      'zh-CN': "「我宁愿死也不愿输。我是对的！」",
      'zh-TW': "「我寧願死也不願輸。我是對的！」",
      vi: "\"Tôi ghét thua hơn cả chết. Tôi đúng mà!\"",
      id: "\"Saya benci kalah lebih dari mati. Saya benar!\""
    },
    description: {
      ko: "당신에게 갈등은 승패가 걸린 게임입니다. 자신의 주장을 굽히지 않으며, 상대방을 논리나 힘으로 눌러야 직성이 풀립니다. 시원시원한 성격이지만, 타인의 감정을 상하게 할 수 있으며 관계가 파국으로 치달을 위험이 있습니다.",
      en: "To you, conflict is a game where victory or defeat is at stake. You don't bend your position and need to suppress the other person with logic or force to feel satisfied. You have a refreshing personality, but you can hurt others' feelings and there's a risk of relationships heading toward disaster.",
      ja: "あなたにとって葛藤は勝敗がかかったゲームです。自分の主張を曲げず、相手を論理や力で押さえつけなければ気が済みません。さっぱりした性格ですが、他人の感情を傷つける可能性があり、関係が破局に向かうリスクがあります。",
      'zh-CN': "对你来说，冲突是一场关乎胜负的游戏。你不会改变自己的立场，需要用逻辑或力量压制对方才能满足。你性格直爽，但可能会伤害他人的感情，关系有走向灾难的风险。",
      'zh-TW': "對你來說，衝突是一場關乎勝負的遊戲。你不會改變自己的立場，需要用邏輯或力量壓制對方才能滿足。你性格直爽，但可能會傷害他人的感情，關係有走向災難的風險。",
      vi: "Đối với bạn, xung đột là một trò chơi mà thắng thua đang bị đe dọa. Bạn không uốn cong lập trường của mình và cần phải đè nén đối phương bằng logic hoặc sức mạnh để cảm thấy thỏa mãn. Bạn có tính cách thẳng thắn, nhưng có thể làm tổn thương cảm xúc của người khác và có nguy cơ mối quan hệ đi đến thảm họa.",
      id: "Bagi Anda, konflik adalah permainan di mana kemenangan atau kekalahan dipertaruhkan. Anda tidak menekuk posisi Anda dan perlu menekan lawan dengan logika atau kekuatan untuk merasa puas. Anda memiliki kepribadian yang menyegarkan, tetapi Anda dapat menyakiti perasaan orang lain dan ada risiko hubungan menuju bencana."
    },
    characteristics: {
      ko: "독설, 고집, 자기주장 강함",
      en: "Harsh words, Stubborn, Strong self-assertion",
      ja: "毒舌、頑固、自己主張が強い",
      'zh-CN': "毒舌、固执、自我主张强",
      'zh-TW': "毒舌、固執、自我主張強",
      vi: "Lời lẽ gay gắt, Cứng đầu, Tự khẳng định mạnh mẽ",
      id: "Kata-kata kasar, Keras kepala, Penegasan diri yang kuat"
    },
    goodMatch: {
      ko: "Type 5 (맞춰줌)",
      en: "Type 5 (Accommodates)",
      ja: "タイプ5（合わせてくれる）",
      'zh-CN': "类型5（会配合）",
      'zh-TW': "類型5（會配合）",
      vi: "Type 5 (Chiều theo)",
      id: "Tipe 5 (Mengakomodasi)"
    },
    badMatch: {
      ko: "Type 2 (파국)",
      en: "Type 2 (Disaster)",
      ja: "タイプ2（破局）",
      'zh-CN': "类型2（灾难）",
      'zh-TW': "類型2（災難）",
      vi: "Type 2 (Thảm họa)",
      id: "Tipe 2 (Bencana)"
    }
  },
  {
    type: "Type3",
    emoji: "🐻",
    title: {
      ko: "천사표 예스맨, 순응형 (Accommodating)",
      en: "Angel Yes-Man, Accommodating Type",
      ja: "天使のイエスマン、順応型",
      'zh-CN': "天使型应声虫，顺应型",
      'zh-TW': "天使型應聲蟲，順應型",
      vi: "Thiên thần Yes-Man, Kiểu Nhượng bộ",
      id: "Malaikat Yes-Man, Tipe Akomodatif"
    },
    shortDescription: {
      ko: "\"네가 좋으면 나도 좋아. 내가 참을게.\"",
      en: "\"If you're happy, I'm happy. I'll endure it.\"",
      ja: "「あなたが良ければ私も良い。私が我慢する。」",
      'zh-CN': "「你高兴我就高兴。我会忍耐的。」",
      'zh-TW': "「你高興我就高興。我會忍耐的。」",
      vi: "\"Nếu bạn vui thì tôi cũng vui. Tôi sẽ chịu đựng.\"",
      id: "\"Jika kamu senang, saya juga senang. Saya akan menahannya.\""
    },
    description: {
      ko: "당신은 자신의 욕구보다 상대방의 욕구를 우선시합니다. 관계가 깨지는 것이 두려워 무조건 양보하고 희생합니다. 겉으로는 평화로워 보이지만, 속으로는 불만이 쌓여 곪아갈 수 있습니다. 착한 사람 콤플렉스를 주의하세요.",
      en: "You prioritize the other person's needs over your own. You're afraid of relationships breaking, so you unconditionally give in and sacrifice. It may look peaceful on the outside, but inside, dissatisfaction can accumulate and fester. Be careful of the 'nice person' complex.",
      ja: "あなたは自分の欲求よりも相手の欲求を優先します。関係が壊れることを恐れて、無条件に譲歩し、犠牲を払います。外見上は平和に見えますが、内面では不満が蓄積して化膿する可能性があります。良い人コンプレックスに注意してください。",
      'zh-CN': "你优先考虑对方的需求而不是自己的。你害怕关系破裂，所以无条件让步和牺牲。表面上看起来和平，但内心可能会积累不满并恶化。注意'好人'情结。",
      'zh-TW': "你優先考慮對方的需求而不是自己的。你害怕關係破裂，所以無條件讓步和犧牲。表面上看起來和平，但內心可能會積累不滿並惡化。注意「好人」情結。",
      vi: "Bạn ưu tiên nhu cầu của đối phương hơn nhu cầu của chính mình. Bạn sợ mối quan hệ tan vỡ, nên vô điều kiện nhượng bộ và hy sinh. Bên ngoài có vẻ hòa bình, nhưng bên trong, sự bất mãn có thể tích tụ và làm mưng mủ. Hãy cẩn thận với phức cảm 'người tốt'.",
      id: "Anda memprioritaskan kebutuhan orang lain daripada kebutuhan Anda sendiri. Anda takut hubungan akan rusak, jadi Anda menyerah tanpa syarat dan berkorban. Di luar mungkin terlihat damai, tetapi di dalam, ketidakpuasan dapat menumpuk dan membusuk. Hati-hati dengan kompleks 'orang baik'."
    },
    characteristics: {
      ko: "거절 못 함, 사과봇, 희생",
      en: "Can't refuse, Apology bot, Sacrifice",
      ja: "断れない、謝罪ボット、犠牲",
      'zh-CN': "无法拒绝、道歉机器人、牺牲",
      'zh-TW': "無法拒絕、道歉機器人、犧牲",
      vi: "Không thể từ chối, Bot xin lỗi, Hy sinh",
      id: "Tidak bisa menolak, Bot permintaan maaf, Pengorbanan"
    },
    goodMatch: {
      ko: "Type 4 (적절히 조율해줌)",
      en: "Type 4 (Properly coordinates)",
      ja: "タイプ4（適切に調整してくれる）",
      'zh-CN': "类型4（会适当协调）",
      'zh-TW': "類型4（會適當協調）",
      vi: "Type 4 (Điều phối phù hợp)",
      id: "Tipe 4 (Mengkoordinasikan dengan baik)"
    },
    badMatch: {
      ko: "Type 1 (나를 무시하는 느낌)",
      en: "Type 1 (Feels like ignoring me)",
      ja: "タイプ1（私を無視している感じ）",
      'zh-CN': "类型1（感觉在忽视我）",
      'zh-TW': "類型1（感覺在忽視我）",
      vi: "Type 1 (Cảm giác như bỏ qua tôi)",
      id: "Tipe 1 (Terasa seperti mengabaikan saya)"
    }
  },
  {
    type: "Type4",
    emoji: "🦊",
    title: {
      ko: "50대 50의 미학, 타협가형 (Compromising)",
      en: "The Aesthetics of 50-50, Compromising Type",
      ja: "50対50の美学、妥協型",
      'zh-CN': "50对50的美学，妥协型",
      'zh-TW': "50對50的美學，妥協型",
      vi: "Thẩm mỹ 50-50, Kiểu Thỏa hiệp",
      id: "Estetika 50-50, Tipe Kompromi"
    },
    shortDescription: {
      ko: "\"좋게 좋게 가자. 반반씩 양보해.\"",
      en: "\"Let's go easy. Let's each give in half.\"",
      ja: "「良い感じで行こう。半分ずつ譲ろう。」",
      'zh-CN': "「我们好好相处吧。各让一半。」",
      'zh-TW': "「我們好好相處吧。各讓一半。」",
      vi: "\"Hãy điều hòa. Mỗi người nhượng bộ một nửa.\"",
      id: "\"Mari kita berjalan dengan baik. Mari kita masing-masing mengalah setengah.\""
    },
    description: {
      ko: "당신은 빠르고 실용적인 해결책을 찾습니다. \"너 하나, 나 하나\" 식으로 서로 조금씩 양보해서 합의점을 찾으려 합니다. 갈등을 오래 끌지 않는 장점이 있지만, 근본적인 원인을 해결하지 않고 미봉책으로 끝날 수도 있습니다.",
      en: "You find quick and practical solutions. You try to find a middle ground by each giving in a little, like \"you one, me one.\" The advantage is that you don't drag out conflicts, but it may end as a temporary fix without solving the root cause.",
      ja: "あなたは迅速で実用的な解決策を見つけます。「あなた一つ、私一つ」というように、お互いに少しずつ譲歩して合意点を見つけようとします。葛藤を長引かせない利点がありますが、根本的な原因を解決せずに応急処置で終わる可能性もあります。",
      'zh-CN': "你寻找快速实用的解决方案。你试图通过各自稍微让步来找到中间点，就像「你一个，我一个」。优点是不会拖长冲突，但可能以临时解决方案告终，而没有解决根本原因。",
      'zh-TW': "你尋找快速實用的解決方案。你試圖通過各自稍微讓步來找到中間點，就像「你一個，我一個」。優點是不會拖長衝突，但可能以臨時解決方案告終，而沒有解決根本原因。",
      vi: "Bạn tìm giải pháp nhanh chóng và thực tế. Bạn cố gắng tìm điểm giữa bằng cách mỗi người nhượng bộ một chút, như \"bạn một, tôi một\". Ưu điểm là bạn không kéo dài xung đột, nhưng có thể kết thúc như một giải pháp tạm thời mà không giải quyết nguyên nhân gốc rễ.",
      id: "Anda menemukan solusi yang cepat dan praktis. Anda mencoba menemukan titik tengah dengan masing-masing mengalah sedikit, seperti \"kamu satu, saya satu\". Keuntungannya adalah Anda tidak memperpanjang konflik, tetapi mungkin berakhir sebagai perbaikan sementara tanpa menyelesaikan akar penyebabnya."
    },
    characteristics: {
      ko: "협상, 더치페이 마인드, 융통성",
      en: "Negotiation, Dutch pay mindset, Flexibility",
      ja: "交渉、割り勘マインド、柔軟性",
      'zh-CN': "谈判、AA制心态、灵活性",
      'zh-TW': "談判、AA制心態、靈活性",
      vi: "Đàm phán, Tư duy chia đều, Linh hoạt",
      id: "Negosiasi, Pola pikir bayar sendiri, Fleksibilitas"
    },
    goodMatch: {
      ko: "Type 6 (논리적으로 맞음)",
      en: "Type 6 (Logically matches)",
      ja: "タイプ6（論理的に合う）",
      'zh-CN': "类型6（逻辑上匹配）",
      'zh-TW': "類型6（邏輯上匹配）",
      vi: "Type 6 (Khớp về mặt logic)",
      id: "Tipe 6 (Cocok secara logis)"
    },
    badMatch: {
      ko: "Type 2 (양보를 안 함)",
      en: "Type 2 (Won't compromise)",
      ja: "タイプ2（譲歩しない）",
      'zh-CN': "类型2（不妥协）",
      'zh-TW': "類型2（不妥協）",
      vi: "Type 2 (Không nhượng bộ)",
      id: "Tipe 2 (Tidak mau berkompromi)"
    }
  },
  {
    type: "Type5",
    emoji: "🌊",
    title: {
      ko: "감정의 소용돌이, 호소형 (Expressing)",
      en: "Emotional Whirlpool, Expressing Type",
      ja: "感情の渦、訴求型",
      'zh-CN': "情感漩涡，表达型",
      'zh-TW': "情感漩渦，表達型",
      vi: "Vòng xoáy cảm xúc, Kiểu Bày tỏ",
      id: "Pusaran Emosional, Tipe Mengekspresikan"
    },
    shortDescription: {
      ko: "\"내 마음 좀 알아달라고! ㅠㅠ\"",
      en: "\"Please understand my feelings! 😭\"",
      ja: "「私の気持ちを分かってほしい！😭」",
      'zh-CN': "「请理解我的感受！😭」",
      'zh-TW': "「請理解我的感受！😭」",
      vi: "\"Hãy hiểu cảm xúc của tôi! 😭\"",
      id: "\"Tolong pahami perasaan saya! 😭\""
    },
    description: {
      ko: "당신은 갈등 상황에서 감정 표현이 매우 중요합니다. 논리적인 해결보다는 내 서운한 감정을 상대방이 공감해주길 바랍니다. 울거나 화내거나 호소하며 감정을 쏟아냅니다. 감정이 해소되면 금방 풀리지만, 상대방은 지칠 수 있습니다.",
      en: "Emotional expression is very important to you in conflict situations. Rather than logical solutions, you want the other person to empathize with your hurt feelings. You pour out your emotions by crying, getting angry, or appealing. Once your emotions are released, you resolve quickly, but the other person may get exhausted.",
      ja: "あなたは葛藤状況で感情表現が非常に重要です。論理的な解決よりも、自分の悔しい感情を相手に共感してほしいと願います。泣いたり、怒ったり、訴えたりして感情を吐き出します。感情が解消されるとすぐに解決しますが、相手は疲れるかもしれません。",
      'zh-CN': "在冲突情况下，情感表达对你来说非常重要。比起逻辑解决方案，你更希望对方能理解你受伤的感受。你会通过哭泣、生气或恳求来倾泻情感。一旦情感得到释放，你会很快解决，但对方可能会感到疲惫。",
      'zh-TW': "在衝突情況下，情感表達對你來說非常重要。比起邏輯解決方案，你更希望對方能理解你受傷的感受。你會通過哭泣、生氣或懇求來傾瀉情感。一旦情感得到釋放，你會很快解決，但對方可能會感到疲憊。",
      vi: "Bày tỏ cảm xúc rất quan trọng đối với bạn trong tình huống xung đột. Thay vì giải pháp logic, bạn muốn đối phương đồng cảm với cảm xúc bị tổn thương của bạn. Bạn trút cảm xúc bằng cách khóc, tức giận hoặc kêu gọi. Một khi cảm xúc được giải phóng, bạn giải quyết nhanh chóng, nhưng đối phương có thể kiệt sức.",
      id: "Ekspresi emosional sangat penting bagi Anda dalam situasi konflik. Daripada solusi logis, Anda ingin orang lain berempati dengan perasaan terluka Anda. Anda menuangkan emosi dengan menangis, marah, atau mengajukan banding. Setelah emosi Anda dilepaskan, Anda menyelesaikannya dengan cepat, tetapi orang lain mungkin menjadi lelah."
    },
    characteristics: {
      ko: "눈물, 하소연, 감정 기복",
      en: "Tears, Complaining, Emotional ups and downs",
      ja: "涙、愚痴、感情の起伏",
      'zh-CN': "眼泪、抱怨、情绪波动",
      'zh-TW': "眼淚、抱怨、情緒波動",
      vi: "Nước mắt, Than vãn, Thăng trầm cảm xúc",
      id: "Air mata, Mengeluh, Naik turun emosional"
    },
    goodMatch: {
      ko: "Type 3 (다 받아줌)",
      en: "Type 3 (Accepts everything)",
      ja: "タイプ3（全部受け入れてくれる）",
      'zh-CN': "类型3（全部接受）",
      'zh-TW': "類型3（全部接受）",
      vi: "Type 3 (Chấp nhận tất cả)",
      id: "Tipe 3 (Menerima segalanya)"
    },
    badMatch: {
      ko: "Type 1 (반응 없어서 더 화남)",
      en: "Type 1 (No response, gets angrier)",
      ja: "タイプ1（反応がなくてさらに怒る）",
      'zh-CN': "类型1（没有反应，更生气）",
      'zh-TW': "類型1（沒有反應，更生氣）",
      vi: "Type 1 (Không phản ứng, càng tức giận hơn)",
      id: "Tipe 1 (Tidak ada respons, semakin marah)"
    }
  },
  {
    type: "Type6",
    emoji: "🦉",
    title: {
      ko: "현명한 판사님, 문제 해결형 (Collaborating)",
      en: "Wise Judge, Problem-Solving Type",
      ja: "賢い判事、問題解決型",
      'zh-CN': "明智的法官，问题解决型",
      'zh-TW': "明智的法官，問題解決型",
      vi: "Thẩm phán thông thái, Kiểu Giải quyết vấn đề",
      id: "Hakim Bijak, Tipe Pemecah Masalah"
    },
    shortDescription: {
      ko: "\"원인이 뭘까? 같이 해결해보자.\"",
      en: "\"What's the cause? Let's solve it together.\"",
      ja: "「原因は何だろう？一緒に解決しよう。」",
      'zh-CN': "「原因是什么？让我们一起解决吧。」",
      'zh-TW': "「原因是什麼？讓我們一起解決吧。」",
      vi: "\"Nguyên nhân là gì? Hãy cùng giải quyết.\"",
      id: "\"Apa penyebabnya? Mari kita selesaikan bersama.\""
    },
    description: {
      ko: "당신은 갈등을 성장의 기회로 봅니다. 감정을 배제하고 문제의 본질을 파악하려 노력하며, 양쪽 모두가 만족할 수 있는 최선의 해결책(Win-Win)을 찾습니다. 가장 이상적이지만, 에너지가 많이 들고 시간이 오래 걸리는 스타일입니다.",
      en: "You see conflict as an opportunity for growth. You try to exclude emotions and grasp the essence of the problem, seeking the best solution (Win-Win) where both sides can be satisfied. It's the most ideal style, but it requires a lot of energy and takes a long time.",
      ja: "あなたは葛藤を成長の機会として見ます。感情を排除し、問題の本質を把握しようと努め、両方とも満足できる最善の解決策（Win-Win）を探します。最も理想的ですが、エネルギーが多く、時間がかかるスタイルです。",
      'zh-CN': "你将冲突视为成长的机会。你试图排除情感并把握问题的本质，寻找双方都能满意的最佳解决方案（双赢）。这是最理想的风格，但需要大量精力且耗时较长。",
      'zh-TW': "你將衝突視為成長的機會。你試圖排除情感並把握問題的本質，尋找雙方都能滿意的最佳解決方案（雙贏）。這是最理想的風格，但需要大量精力且耗時較長。",
      vi: "Bạn xem xung đột như một cơ hội để phát triển. Bạn cố gắng loại bỏ cảm xúc và nắm bắt bản chất của vấn đề, tìm kiếm giải pháp tốt nhất (Win-Win) nơi cả hai bên đều có thể hài lòng. Đây là phong cách lý tưởng nhất, nhưng đòi hỏi nhiều năng lượng và mất nhiều thời gian.",
      id: "Anda melihat konflik sebagai peluang untuk tumbuh. Anda mencoba mengecualikan emosi dan memahami esensi masalah, mencari solusi terbaik (Win-Win) di mana kedua belah pihak dapat puas. Ini adalah gaya yang paling ideal, tetapi membutuhkan banyak energi dan memakan waktu lama."
    },
    characteristics: {
      ko: "대화 시도, 분석, 끈기",
      en: "Attempts dialogue, Analysis, Persistence",
      ja: "対話の試み、分析、粘り強さ",
      'zh-CN': "尝试对话、分析、坚持",
      'zh-TW': "嘗試對話、分析、堅持",
      vi: "Cố gắng đối thoại, Phân tích, Kiên trì",
      id: "Mencoba dialog, Analisis, Ketekunan"
    },
    goodMatch: {
      ko: "Type 4 (합리적임)",
      en: "Type 4 (Rational)",
      ja: "タイプ4（合理的）",
      'zh-CN': "类型4（理性）",
      'zh-TW': "類型4（理性）",
      vi: "Type 4 (Hợp lý)",
      id: "Tipe 4 (Rasional)"
    },
    badMatch: {
      ko: "Type 1 (대화를 거부함)",
      en: "Type 1 (Refuses dialogue)",
      ja: "タイプ1（対話を拒否する）",
      'zh-CN': "类型1（拒绝对话）",
      'zh-TW': "類型1（拒絕對話）",
      vi: "Type 1 (Từ chối đối thoại)",
      id: "Tipe 1 (Menolak dialog)"
    }
  }
];

export function calculateConflictStyleResult(answers: string[]): string {
  // 각 Type별 점수 계산
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변에 해당하는 Type에 점수 추가
  answers.forEach(type => {
    if (scores.hasOwnProperty(type)) {
      scores[type]++;
    }
  });

  // 가장 높은 점수를 가진 Type 찾기
  let maxScore = 0;
  let resultType = "Type3"; // 기본값 (우선순위 1위)

  // 동점일 경우 우선순위: Type 3 > Type 4 > Type 1 > Type 5 > Type 2 > Type 6
  const priority = ["Type3", "Type4", "Type1", "Type5", "Type2", "Type6"];

  for (const type of priority) {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = type;
    }
  }

  return resultType;
}

