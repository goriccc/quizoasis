export interface ConflictQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface ConflictResult {
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

export const conflictQuestions: ConflictQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구가 약속을 또 취소했습니다. 당신의 첫 반응은?",
      en: "Your friend cancels plans again. What's your first reaction?",
      ja: "友達が約束をまたキャンセルしました。あなたの最初の反応は？",
      'zh-CN': "朋友又取消约会了。你的第一反应是？",
      'zh-TW': "朋友又取消約會了。你的第一反应是？",
      id: "Teman membatalkan janji lagi. Reaksi pertama Anda adalah?",
      vi: "Bạn bè lại hủy hẹn. Phản ứng đầu tiên của bạn là gì?"
    },
    options: [
      {
        text: {
          ko: "바로 전화해서 왜 그런지 물어본다",
          en: "Call immediately to ask why",
          ja: "すぐに電話して理由を聞く",
          'zh-CN': "立即打电话询问原因",
          'zh-TW': "立即打電話詢問原因",
          id: "Segera menelepon untuk bertanya mengapa",
          vi: "Gọi ngay để hỏi tại sao"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "속상하지만 일단 이해하려고 노력한다",
          en: "Feel hurt but try to understand",
          ja: "残念だが理解しようと努力する",
          'zh-CN': "虽然难过但努力理解",
          'zh-TW': "雖然難過但努力理解",
          id: "Sedih tapi berusaha memahami",
          vi: "Buồn nhưng cố gắng hiểu"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "친구 사정이 있겠지, 다음 기회를 기다린다",
          en: "Friend must have circumstances, wait for next opportunity",
          ja: "友達に事情があるだろう、次の機会を待つ",
          'zh-CN': "朋友肯定有情况，等下次机会",
          'zh-TW': "朋友肯定有情況，等下次機會",
          id: "Teman pasti ada keadaan, tunggu kesempatan berikutnya",
          vi: "Bạn chắc có hoàn cảnh, đợi cơ hội sau"
        },
        scores: { Type4: 3 }
      },
      {
        text: {
          ko: "화가 나서 당분간 연락하고 싶지 않다",
          en: "Angry and don't want to contact for a while",
          ja: "怒ってしばらく連絡したくない",
          'zh-CN': "生气，暂时不想联系",
          'zh-TW': "生氣，暫時不想聯繫",
          id: "Marah dan tidak ingin menghubungi sementara",
          vi: "Tức giận và không muốn liên lạc một lúc"
        },
        scores: { Type4: 2, Type6: 1 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연인과 데이트 장소로 의견이 다를 때?",
      en: "When you disagree with your partner about a date location?",
      ja: "恋人とデート場所で意見が違う時？",
      'zh-CN': "与恋人关于约会地点意见不同时？",
      'zh-TW': "與戀人關於約會地點意見不同時？",
      id: "Ketika Anda tidak setuju dengan pasangan tentang lokasi kencan?",
      vi: "Khi bạn không đồng ý với người yêu về địa điểm hẹn hò?"
    },
    options: [
      {
        text: {
          ko: "내 의견의 장점을 논리적으로 설명한다",
          en: "Explain the advantages of my opinion logically",
          ja: "私の意見の利点を論理的に説明する",
          'zh-CN': "逻辑性地解释我观点的优点",
          'zh-TW': "邏輯性地解釋我觀點的優點",
          id: "Menjelaskan keunggulan pendapat saya secara logis",
          vi: "Giải thích ưu điểm của ý kiến tôi một cách logic"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"너는 어디가 가고 싶어?\" 상대 마음을 먼저 듣는다",
          en: "\"Where do you want to go?\" Listen to partner's feelings first",
          ja: "「どこに行きたい？」相手の気持ちをまず聞く",
          'zh-CN': "「你想去哪里？」先倾听对方的想法",
          'zh-TW': "「你想去哪裡？」先傾聽對方的想法",
          id: "「Kamu mau ke mana?」 Mendengarkan perasaan pasangan terlebih dahulu",
          vi: "「Bạn muốn đi đâu?」 Lắng nghe cảm xúc của đối phương trước"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"그럼 이번엔 네 의견, 다음엔 내 의견 어때?\" 제안한다",
          en: "\"How about your opinion this time, my opinion next time?\" Suggest",
          ja: "「今度は君の意見、次は私の意見はどう？」提案する",
          'zh-CN': "「这次听你的，下次听我的怎么样？」提议",
          'zh-TW': "「這次聽你的，下次聽我的怎麼樣？」提議",
          id: "「Kalau kali ini pendapatmu, lain kali pendapatku gimana?」 Menyarankan",
          vi: "「Vậy lần này ý kiến của bạn, lần sau ý kiến của tôi thì sao?」 Đề xuất"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "\"뭐든 좋아, 네가 좋으면 돼\" 양보한다",
          en: "\"Anything is fine, whatever you like\" Give in",
          ja: "「何でもいいよ、君が好きなら」譲る",
          'zh-CN': "「什么都行，你喜欢就好」让步",
          'zh-TW': "「什麼都行，你喜歡就好」讓步",
          id: "「Apa saja boleh, yang penting kamu suka」 Mengalah",
          vi: "「Gì cũng được, bạn thích là được」 Nhượng bộ"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "회의 중 당신의 의견이 무시당했다면?",
      en: "If your opinion was ignored during a meeting?",
      ja: "会議中にあなたの意見が無視されたら？",
      'zh-CN': "如果会议中你的意见被忽视？",
      'zh-TW': "如果會議中你的意見被忽視？",
      id: "Jika pendapat Anda diabaikan selama rapat?",
      vi: "Nếu ý kiến của bạn bị bỏ qua trong cuộc họp?"
    },
    options: [
      {
        text: {
          ko: "즉시 \"제 의견에 대해 다시 말씀드리고 싶은데요\" 라고 말한다",
          en: "Immediately say \"I'd like to say something about my opinion again\"",
          ja: "すぐに「私の意見についてもう一度申し上げたいのですが」と言う",
          'zh-CN': "立即说「我想再次谈谈我的观点」",
          'zh-TW': "立即說「我想再次談談我的觀點」",
          id: "Segera mengatakan \"Saya ingin menyampaikan pendapat saya lagi\"",
          vi: "Ngay lập tức nói \"Tôi muốn nói lại về ý kiến của tôi\""
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "일단 참고 회의 후 관련자와 따로 이야기한다",
          en: "Hold back for now and talk separately with relevant parties after the meeting",
          ja: "とりあえず我慢して会議後に関係者と別途話し合う",
          'zh-CN': "先忍一忍，会议后与相关人员单独交谈",
          'zh-TW': "先忍一忍，會議後與相關人員單獨交談",
          id: "Sabar dulu dan bicara terpisah dengan pihak terkait setelah rapat",
          vi: "Tạm thời chịu đựng và nói chuyện riêng với các bên liên quan sau cuộc họp"
        },
        scores: { Type4: 2, Type2: 1 }
      },
      {
        text: {
          ko: "내 의견이 부족했나 다시 생각해본다",
          en: "Think again if my opinion was insufficient",
          ja: "私の意見が不十分だったかもう一度考える",
          'zh-CN': "重新思考我的观点是否不够充分",
          'zh-TW': "重新思考我的觀點是否不夠充分",
          id: "Memikirkan lagi apakah pendapat saya kurang",
          vi: "Suy nghĩ lại xem ý kiến của tôi có thiếu sót không"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "기분 나쁘지만 표현하지 않고 넘어간다",
          en: "Feel bad but don't express it and move on",
          ja: "気分が悪いが表現せずにやり過ごす",
          'zh-CN': "虽然不爽但不表达，就这样过去",
          'zh-TW': "雖然不爽但不表達，就這樣過去",
          id: "Merasa tidak enak tapi tidak mengekspresikan dan melupakan",
          vi: "Cảm thấy không vui nhưng không bộc lộ và bỏ qua"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "부모님이 당신의 선택을 반대할 때?",
      en: "When your parents oppose your choice?",
      ja: "両親があなたの選択に反対する時？",
      'zh-CN': "当父母反对你的选择时？",
      'zh-TW': "當父母反對你的選擇時？",
      id: "Ketika orang tua menentang pilihan Anda?",
      vi: "Khi cha mẹ phản đối lựa chọn của bạn?"
    },
    options: [
      {
        text: {
          ko: "내 결정의 이유와 계획을 차근차근 설명한다",
          en: "Explain the reasons and plans for my decision step by step",
          ja: "私の決定の理由と計画を順序立てて説明する",
          'zh-CN': "逐步解释我决定的理由和计划",
          'zh-TW': "逐步解釋我決定的理由和計劃",
          id: "Menjelaskan alasan dan rencana keputusan saya selangkah demi selangkah",
          vi: "Giải thích từng bước lý do và kế hoạch của quyết định tôi"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "부모님이 왜 걱정하시는지 대화로 풀어본다",
          en: "Try to resolve through conversation why parents are worried",
          ja: "なぜ両親が心配しているのか対話で解決しようとする",
          'zh-CN': "通过对话了解父母为什么担心",
          'zh-TW': "通過對話了解父母為什麼擔心",
          id: "Mencoba menyelesaikan melalui percakapan mengapa orang tua khawatir",
          vi: "Cố gắng giải quyết qua cuộc trò chuyện tại sao cha mẹ lo lắng"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "시간을 두고 천천히 설득한다",
          en: "Persuade slowly over time",
          ja: "時間をかけてゆっくり説得する",
          'zh-CN': "花时间慢慢说服",
          'zh-TW': "花時間慢慢說服",
          id: "Membujuk perlahan-lahan seiring waktu",
          vi: "Thuyết phục từ từ theo thời gian"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "일단 부모님 의견을 따르는 게 편하다",
          en: "It's easier to follow parents' opinion for now",
          ja: "とりあえず両親の意見に従う方が楽だ",
          'zh-CN': "暂时听从父母的意见比较轻松",
          'zh-TW': "暫時聽從父母的意見比較輕鬆",
          id: "Lebih mudah mengikuti pendapat orang tua untuk sementara",
          vi: "Tạm thời nghe theo ý kiến của cha mẹ thì dễ hơn"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "동료가 당신 업무에 부당한 비난을 한다면?",
      en: "If a colleague unfairly criticizes your work?",
      ja: "同僚があなたの仕事に不当な批判をしたら？",
      'zh-CN': "如果同事对你的工作有不公平的批评？",
      'zh-TW': "如果同事對你的工作有不公平的批評？",
      id: "Jika rekan kerja mengkritik pekerjaan Anda secara tidak adil?",
      vi: "Nếu đồng nghiệp chỉ trích công việc của bạn một cách không công bằng?"
    },
    options: [
      {
        text: {
          ko: "\"정확한 사실은 이렇습니다\" 즉시 반박한다",
          en: "\"The accurate facts are as follows\" Immediately refute",
          ja: "「正確な事実はこうです」すぐに反論する",
          'zh-CN': "「准确的事实是这样的」立即反驳",
          'zh-TW': "「準確的事實是這樣的」立即反駁",
          id: "「Fakta yang akurat adalah seperti ini」 Segera membantah",
          vi: "「Sự thật chính xác là như thế này」 Ngay lập tức phản bác"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"왜 그렇게 생각하시나요?\" 상대 입장을 듣는다",
          en: "\"Why do you think so?\" Listen to the other person's position",
          ja: "「なぜそう思うのですか？」相手の立場を聞く",
          'zh-CN': "「你为什么这么想？」倾听对方的立场",
          'zh-TW': "「你為什麼這麼想？」傾聽對方的立場",
          id: "「Mengapa Anda berpikir seperti itu?」 Mendengarkan posisi lawan",
          vi: "「Tại sao bạn nghĩ như vậy?」 Lắng nghe quan điểm của đối phương"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"제가 부족한 부분이 있었나요?\" 확인한다",
          en: "\"Was there something lacking in my part?\" Confirm",
          ja: "「私に不足していた部分がありましたか？」確認する",
          'zh-CN': "「我有什么不足的地方吗？」确认",
          'zh-TW': "「我有什麼不足的地方嗎？」確認",
          id: "「Apakah ada bagian yang kurang dari saya?」 Memastikan",
          vi: "「Tôi có phần nào thiếu sót không?」 Xác nhận"
        },
        scores: { Type6: 2, Type5: 1 }
      },
      {
        text: {
          ko: "기분 나쁘지만 크게 문제 삼지 않는다",
          en: "Feel bad but don't make a big deal out of it",
          ja: "気分が悪いが大げさに問題にしない",
          'zh-CN': "虽然不爽但不小题大做",
          'zh-TW': "雖然不爽但不小題大做",
          id: "Merasa tidak enak tapi tidak membuat masalah besar",
          vi: "Cảm thấy không vui nhưng không làm to chuyện"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "친구 그룹에서 나만 소외된 느낌이 들 때?",
      en: "When you feel excluded in a friend group?",
      ja: "友達グループで自分だけが疎外感を感じる時？",
      'zh-CN': "当你在朋友群中感到被排斥时？",
      'zh-TW': "當你在朋友群中感到被排斥時？",
      id: "Ketika Anda merasa dikucilkan dalam grup teman?",
      vi: "Khi bạn cảm thấy bị loại trừ trong nhóm bạn?"
    },
    options: [
      {
        text: {
          ko: "\"요즘 나한테 뭔가 불만 있어?\" 직접 물어본다",
          en: "\"Do you have any complaints about me lately?\" Ask directly",
          ja: "「最近私に何か不満がある？」直接聞く",
          'zh-CN': "「最近对我有什么不满吗？」直接询问",
          'zh-TW': "「最近對我有什么不滿嗎？」直接詢問",
          id: "「Akhir-akhir ini ada keluhan tentang saya?」 Bertanya langsung",
          vi: "「Gần đây có gì không hài lòng về tôi không?」 Hỏi trực tiếp"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "친한 친구 한 명에게 조심스럽게 물어본다",
          en: "Carefully ask one close friend",
          ja: "親しい友達一人に慎重に聞く",
          'zh-CN': "小心地向一个亲密朋友询问",
          'zh-TW': "小心地向一個親密朋友詢問",
          id: "Hati-hati bertanya kepada satu teman dekat",
          vi: "Cẩn thận hỏi một người bạn thân"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "혹시 내가 실수한 게 있나 돌아본다",
          en: "Reflect if I made any mistakes",
          ja: "もしかして私が何か失敗したか振り返る",
          'zh-CN': "反思是否犯了什么错误",
          'zh-TW': "反思是否犯了什麼錯誤",
          id: "Merefleksikan apakah saya melakukan kesalahan",
          vi: "Suy ngẫm xem mình có mắc lỗi gì không"
        },
        scores: { Type4: 3 }
      },
      {
        text: {
          ko: "괜히 오해일 수도 있으니 그냥 지켜본다",
          en: "It might be a misunderstanding, so just observe",
          ja: "ただの誤解かもしれないので様子を見る",
          'zh-CN': "可能只是误会，所以先观察",
          'zh-TW': "可能只是誤會，所以先觀察",
          id: "Mungkin hanya kesalahpahaman, jadi hanya mengamati",
          vi: "Có thể chỉ là hiểu lầm, nên chỉ quan sát"
        },
        scores: { Type4: 2, Type6: 1 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "갈등이 생겼을 때 당신의 우선순위는?",
      en: "What is your priority when conflict arises?",
      ja: "対立が生じた時、あなたの優先順位は？",
      'zh-CN': "当冲突发生时，你的优先事项是什么？",
      'zh-TW': "當衝突發生時，你的優先事項是什麼？",
      id: "Apa prioritas Anda ketika konflik muncul?",
      vi: "Ưu tiên của bạn khi xảy ra xung đột là gì?"
    },
    options: [
      {
        text: {
          ko: "문제의 원인과 해결책 찾기",
          en: "Finding the cause and solution to the problem",
          ja: "問題の原因と解決策を見つける",
          'zh-CN': "寻找问题的原因和解决方案",
          'zh-TW': "尋找問題的原因和解決方案",
          id: "Mencari penyebab dan solusi masalah",
          vi: "Tìm nguyên nhân và giải pháp cho vấn đề"
        },
        scores: { Type1: 3, Type3: 2 }
      },
      {
        text: {
          ko: "상대방 감정 이해하고 위로하기",
          en: "Understanding and comforting the other person's feelings",
          ja: "相手の感情を理解し慰める",
          'zh-CN': "理解并安慰对方的感受",
          'zh-TW': "理解並安慰對方的感受",
          id: "Memahami dan menghibur perasaan lawan",
          vi: "Hiểu và an ủi cảm xúc của đối phương"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "관계 유지가 가장 중요",
          en: "Maintaining the relationship is most important",
          ja: "関係維持が最も重要",
          'zh-CN': "维持关系最重要",
          'zh-TW': "維持關係最重要",
          id: "Mempertahankan hubungan adalah yang paling penting",
          vi: "Duy trì mối quan hệ là quan trọng nhất"
        },
        scores: { Type6: 3 }
      },
      {
        text: {
          ko: "일단 시간을 두고 감정 정리하기",
          en: "Take time to organize emotions first",
          ja: "とりあえず時間をかけて感情を整理する",
          'zh-CN': "先花时间整理情绪",
          'zh-TW': "先花時間整理情緒",
          id: "Untuk sementara luangkan waktu mengatur emosi",
          vi: "Tạm thời dành thời gian sắp xếp cảm xúc"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "연인이 화났을 때 당신의 행동은?",
      en: "When your partner is angry, what do you do?",
      ja: "恋人が怒っている時、あなたの行動は？",
      'zh-CN': "当恋人生气时，你的行为是？",
      'zh-TW': "當戀人生氣時，你的行為是？",
      id: "Ketika pasangan Anda marah, apa yang Anda lakukan?",
      vi: "Khi người yêu tức giận, bạn làm gì?"
    },
    options: [
      {
        text: {
          ko: "\"무슨 일이야? 말해봐\" 즉시 대화 시도",
          en: "\"What's wrong? Tell me\" Try to talk immediately",
          ja: "「何があったの？話して」すぐに会話を試みる",
          'zh-CN': "「怎么了？告诉我」立即尝试对话",
          'zh-TW': "「怎麼了？告訴我」立即嘗試對話",
          id: "「Ada apa? Ceritakan」 Mencoba bicara langsung",
          vi: "「Có chuyện gì? Kể tôi nghe」 Cố gắng nói chuyện ngay"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"화났구나, 무슨 일인지 얘기해줄래?\" 공감하며 경청",
          en: "\"You're angry, can you tell me what happened?\" Listen with empathy",
          ja: "「怒ってるね、何があったか話してくれる？」共感しながら聞く",
          'zh-CN': "「你生气了，能告诉我发生了什么吗？」带着同理心倾听",
          'zh-TW': "「你生氣了，能告訴我發生了什麼嗎？」帶著同理心傾聽",
          id: "「Kamu marah, bisa ceritakan apa yang terjadi?」 Mendengarkan dengan empati",
          vi: "「Bạn tức giận, có thể kể tôi nghe chuyện gì không?」 Lắng nghe với sự đồng cảm"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"미안해, 내가 뭘 잘못했어?\" 먼저 사과",
          en: "\"Sorry, what did I do wrong?\" Apologize first",
          ja: "「ごめん、私が何を間違えた？」まず謝る",
          'zh-CN': "「对不起，我做错了什么？」先道歉",
          'zh-TW': "「對不起，我做錯了什麼？」先道歉",
          id: "「Maaf, apa yang saya lakukan salah?」 Minta maaf dulu",
          vi: "「Xin lỗi, tôi đã làm sai gì?」 Xin lỗi trước"
        },
        scores: { Type6: 3 }
      },
      {
        text: {
          ko: "일단 감정이 가라앉을 때까지 기다린다",
          en: "Wait until emotions calm down first",
          ja: "とりあえず感情が落ち着くまで待つ",
          'zh-CN': "先等情绪平静下来",
          'zh-TW': "先等情緒平靜下來",
          id: "Untuk sementara menunggu sampai emosi tenang",
          vi: "Tạm thời đợi cho đến khi cảm xúc bình tĩnh"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "가족 모임에서 민감한 주제로 논쟁이 시작되면?",
      en: "When a debate starts with a sensitive topic at a family gathering?",
      ja: "家族の集まりでセンシティブな話題で論争が始まったら？",
      'zh-CN': "当家庭聚会上敏感话题引发争论时？",
      'zh-TW': "當家庭聚會上敏感話題引發爭論時？",
      id: "Ketika perdebatan dimulai dengan topik sensitif di pertemuan keluarga?",
      vi: "Khi một cuộc tranh luận bắt đầu với chủ đề nhạy cảm tại buổi họp gia đình?"
    },
    options: [
      {
        text: {
          ko: "내 의견을 분명히 밝히고 근거를 제시한다",
          en: "Clearly state my opinion and provide evidence",
          ja: "私の意見を明確に述べて根拠を提示する",
          'zh-CN': "明确表达我的观点并提供证据",
          'zh-TW': "明確表達我的觀點並提供證據",
          id: "Menjelaskan pendapat saya dengan jelas dan memberikan bukti",
          vi: "Nêu rõ ý kiến của tôi và đưa ra bằng chứng"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"그럴 수도 있고 이럴 수도 있죠\" 중립적 태도",
          en: "\"It could be that way or this way\" Neutral attitude",
          ja: "「そういうこともあるし、こういうこともあるよね」中立的態度",
          'zh-CN': "「可能是那样也可能是这样」中立态度",
          'zh-TW': "「可能是那樣也可能是這樣」中立態度",
          id: "「Bisa saja begitu atau begini」 Sikap netral",
          vi: "「Có thể như vậy hoặc như thế này」 Thái độ trung lập"
        },
        scores: { Type5: 3 }
      },
      {
        text: {
          ko: "분위기 전환을 위해 화제를 바꾼다",
          en: "Change the topic to shift the atmosphere",
          ja: "雰囲気転換のために話題を変える",
          'zh-CN': "为了转换气氛而改变话题",
          'zh-TW': "為了轉換氣氛而改變話題",
          id: "Mengubah topik untuk mengalihkan suasana",
          vi: "Thay đổi chủ đề để chuyển không khí"
        },
        scores: { Type5: 2, Type6: 1 }
      },
      {
        text: {
          ko: "조용히 듣기만 한다",
          en: "Just listen quietly",
          ja: "静かに聞いているだけ",
          'zh-CN': "只是安静地听着",
          'zh-TW': "只是安靜地聽著",
          id: "Hanya mendengarkan dengan tenang",
          vi: "Chỉ lắng nghe một cách im lặng"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "친구가 당신에게 섭섭한 감정을 표현했을 때?",
      en: "When a friend expresses disappointed feelings toward you?",
      ja: "友達があなたに残念な感情を表現した時？",
      'zh-CN': "当朋友对你表达失望的情感时？",
      'zh-TW': "當朋友對你表達失望的情感時？",
      id: "Ketika teman mengekspresikan perasaan kecewa kepada Anda?",
      vi: "Khi bạn bè thể hiện cảm xúc thất vọng với bạn?"
    },
    options: [
      {
        text: {
          ko: "\"내가 언제 그랬어?\" 사실 확인부터 한다",
          en: "\"When did I do that?\" Check the facts first",
          ja: "「私がいつそんなことした？」まず事実確認する",
          'zh-CN': "「我什么时候那样了？」先确认事实",
          'zh-TW': "「我什麼時候那樣了？」先確認事實",
          id: "「Kapan saya melakukan itu?」 Cek fakta dulu",
          vi: "「Tôi đã làm vậy khi nào?」 Kiểm tra sự thật trước"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "\"그렇게 느꼈구나, 미안해\" 감정부터 수용한다",
          en: "\"You felt that way, I'm sorry\" Accept the emotions first",
          ja: "「そう感じたんだね、ごめん」まず感情を受け入れる",
          'zh-CN': "「你有那样的感觉，对不起」先接受情感",
          'zh-TW': "「你有那樣的感覺，對不起」先接受情感",
          id: "「Kamu merasa seperti itu, maaf」 Menerima emosi dulu",
          vi: "「Bạn cảm thấy như vậy, xin lỗi」 Chấp nhận cảm xúc trước"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"내가 그런 의도는 아니었는데...\" 해명한다",
          en: "\"That wasn't my intention...\" Explain",
          ja: "「私にそんな意図はなかったのに...」説明する",
          'zh-CN': "「我没有那样的意图...」解释",
          'zh-TW': "「我沒有那樣的意圖...」解釋",
          id: "「Saya tidak bermaksud seperti itu...」 Menjelaskan",
          vi: "「Tôi không có ý định như vậy...」 Giải thích"
        },
        scores: { Type3: 2, Type5: 1 }
      },
      {
        text: {
          ko: "\"정말 미안해\" 일단 사과하고 본다",
          en: "\"I'm really sorry\" Apologize first and see",
          ja: "「本当にごめん」とりあえず謝ってみる",
          'zh-CN': "「真的很对不起」先道歉再说",
          'zh-TW': "「真的很對不起」先道歉再說",
          id: "「Benar-benar maaf」 Minta maaf dulu dan lihat",
          vi: "「Thật sự xin lỗi」 Xin lỗi trước rồi xem"
        },
        scores: { Type6: 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "갈등 후 화해하는 당신의 방식은?",
      en: "What is your way of reconciling after conflict?",
      ja: "対立後の和解のあなたの方法は？",
      'zh-CN': "冲突后你的和解方式是？",
      'zh-TW': "衝突後你的和解方式是？",
      id: "Apa cara Anda berdamai setelah konflik?",
      vi: "Cách hòa giải của bạn sau xung đột là gì?"
    },
    options: [
      {
        text: {
          ko: "\"우리 이 문제에 대해 다시 정리해보자\" 논의 제안",
          en: "\"Let's organize this problem again\" Suggest discussion",
          ja: "「この問題についてもう一度整理しよう」議論を提案",
          'zh-CN': "「让我们重新整理这个问题」提议讨论",
          'zh-TW': "「讓我們重新整理這個問題」提議討論",
          id: "「Mari kita atur masalah ini lagi」 Mengusulkan diskusi",
          vi: "「Hãy sắp xếp lại vấn đề này」 Đề xuất thảo luận"
        },
        scores: { Type1: 3, Type3: 2 }
      },
      {
        text: {
          ko: "\"그때 내 감정은...\" 솔직한 대화 시도",
          en: "\"My emotions at that time were...\" Try honest conversation",
          ja: "「あの時の私の感情は...」正直な対話を試みる",
          'zh-CN': "「那时候我的情感是...」尝试坦诚对话",
          'zh-TW': "「那時候我的情感是...」嘗試坦誠對話",
          id: "「Emosi saya saat itu adalah...」 Mencoba percakapan jujur",
          vi: "「Cảm xúc của tôi lúc đó là...」 Cố gắng cuộc trò chuyện chân thành"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"이제 괜찮아?\" 자연스럽게 평소처럼 대화",
          en: "\"Are you okay now?\" Talk naturally like usual",
          ja: "「今は大丈夫？」自然に普段のように話す",
          'zh-CN': "「现在还好吗？」自然地像平时一样对话",
          'zh-TW': "「現在還好嗎？」自然地像平時一樣對話",
          id: "「Sekarang baik-baik saja?」 Bicara secara alami seperti biasa",
          vi: "「Bây giờ ổn chưa?」 Nói chuyện tự nhiên như bình thường"
        },
        scores: { Type5: 2, Type6: 1 }
      },
      {
        text: {
          ko: "시간이 해결해주길 기다린다",
          en: "Wait for time to solve it",
          ja: "時間が解決してくれるのを待つ",
          'zh-CN': "等待时间来解决",
          'zh-TW': "等待時間來解決",
          id: "Menunggu waktu menyelesaikannya",
          vi: "Chờ đợi thời gian giải quyết"
        },
        scores: { Type4: 3 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "갈등 상황에서 가장 힘든 점은?",
      en: "What is the most difficult thing in conflict situations?",
      ja: "対立状況で最も困難なことは？",
      'zh-CN': "冲突情况下最困难的是什么？",
      'zh-TW': "衝突情況下最困難的是什麼？",
      id: "Apa hal yang paling sulit dalam situasi konflik?",
      vi: "Điều khó khăn nhất trong tình huống xung đột là gì?"
    },
    options: [
      {
        text: {
          ko: "상대방이 논리적으로 대화하지 않을 때",
          en: "When the other person doesn't engage in logical conversation",
          ja: "相手が論理的に話し合わない時",
          'zh-CN': "当对方不进行逻辑对话时",
          'zh-TW': "當對方不進行邏輯對話時",
          id: "Ketika lawan tidak terlibat dalam percakapan logis",
          vi: "Khi đối phương không tham gia cuộc trò chuyện logic"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "내 감정과 상대 감정 사이에서 균형 잡기",
          en: "Balancing between my emotions and the other person's emotions",
          ja: "私の感情と相手の感情のバランスを取ること",
          'zh-CN': "在我的情感和对方情感之间保持平衡",
          'zh-TW': "在我的情感和對方情感之間保持平衡",
          id: "Menyeimbangkan antara emosi saya dan emosi lawan",
          vi: "Cân bằng giữa cảm xúc của tôi và cảm xúc của đối phương"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "관계가 나빠질까봐 걱정되는 것",
          en: "Worrying that the relationship might deteriorate",
          ja: "関係が悪くなるのではないかと心配すること",
          'zh-CN': "担心关系可能会恶化",
          'zh-TW': "擔心關係可能會惡化",
          id: "Khawatir hubungan mungkin memburuk",
          vi: "Lo lắng rằng mối quan hệ có thể xấu đi"
        },
        scores: { Type6: 3 }
      },
      {
        text: {
          ko: "갈등 자체가 불편하고 스트레스받는 것",
          en: "Conflict itself being uncomfortable and stressful",
          ja: "対立自体が不快でストレスになること",
          'zh-CN': "冲突本身让人不舒服和有压力",
          'zh-TW': "衝突本身讓人舒服和有壓力",
          id: "Konflik itu sendiri tidak nyaman dan membuat stres",
          vi: "Bản thân xung đột gây khó chịu và căng thẳng"
        },
        scores: { Type4: 3 }
      }
    ]
  }
];

export const conflictResults: ConflictResult[] = [
  {
    type: "Type1",
    emoji: "🎯",
    title: {
      ko: "직면 해결형",
      en: "Direct Problem-Solver",
      ja: "直面对决型",
      'zh-CN': "直面解决型",
      'zh-TW': "直面解決型",
      id: "Penyelesai Masalah Langsung",
      vi: "Người Giải Quyết Trực Tiếp"
    },
    description: {
      ko: "갈등을 회피하지 않고 즉시 대화로 해결하려는 적극적 스타일입니다. 문제의 원인을 파악하고 솔루션을 찾는 데 집중하며, 명확한 의사소통을 선호합니다. 오해를 빨리 풀고 효율적이지만, 상대방이 부담스러워할 수 있습니다.",
      en: "An active style that avoids conflicts and immediately seeks to resolve them through dialogue. Focuses on identifying the cause of problems and finding solutions, preferring clear communication. Quickly resolves misunderstandings and is efficient, but may make others feel burdened.",
      ja: "対立を避けず、即座に対話で解決しようとする積極的なスタイルです。問題の原因を把握し、解決策を見つけることに集中し、明確なコミュニケーションを好みます。誤解を早く解き、効率的ですが、相手が負担に感じることもあります。",
      'zh-CN': "不回避冲突，立即通过对话寻求解决的积极风格。专注于识别问题原因和寻找解决方案，偏好清晰的沟通。快速解决误解且高效，但可能让对方感到负担。",
      'zh-TW': "不迴避衝突，立即透過對話尋求解決的積極風格。專注於識別問題原因和尋找解決方案，偏好清晰的溝通。快速解決誤解且高效，但可能讓對方感到負擔。",
      id: "Gaya aktif yang tidak menghindari konflik dan langsung mencari penyelesaian melalui dialog. Fokus pada mengidentifikasi penyebab masalah dan mencari solusi, lebih menyukai komunikasi yang jelas. Cepat menyelesaikan kesalahpahaman dan efisien, tetapi mungkin membuat orang lain merasa terbebani.",
      vi: "Phong cách tích cực không tránh né xung đột và ngay lập tức tìm cách giải quyết thông qua đối thoại. Tập trung vào việc xác định nguyên nhân vấn đề và tìm giải pháp, ưa thích giao tiếp rõ ràng. Nhanh chóng giải quyết hiểu lầm và hiệu quả, nhưng có thể khiến người khác cảm thấy gánh nặng."
    },
    pros: [
      {
        ko: "빠른 해결",
        en: "Quick resolution",
        ja: "迅速な解決",
        'zh-CN': "快速解决",
        'zh-TW': "快速解決",
        id: "Penyelesaian cepat",
        vi: "Giải quyết nhanh chóng"
      },
      {
        ko: "명확함",
        en: "Clarity",
        ja: "明確さ",
        'zh-CN': "清晰",
        'zh-TW': "清晰",
        id: "Kejelasan",
        vi: "Rõ ràng"
      },
      {
        ko: "정직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        id: "Kejujuran",
        vi: "Trung thực"
      },
      {
        ko: "오해 방지",
        en: "Prevents misunderstandings",
        ja: "誤解防止",
        'zh-CN': "防止误解",
        'zh-TW': "防止誤解",
        id: "Mencegah kesalahpahaman",
        vi: "Ngăn ngừa hiểu lầm"
      }
    ],
    cons: [
      {
        ko: "직설적",
        en: "Direct",
        ja: "率直",
        'zh-CN': "直接",
        'zh-TW': "直接",
        id: "Langsung",
        vi: "Thẳng thắn"
      },
      {
        ko: "감정 배려 부족",
        en: "Lack of emotional consideration",
        ja: "感情への配慮不足",
        'zh-CN': "缺乏情感考虑",
        'zh-TW': "缺乏情感考慮",
        id: "Kurang pertimbangan emosional",
        vi: "Thiếu cân nhắc cảm xúc"
      },
      {
        ko: "상대방 압박감",
        en: "Pressure on others",
        ja: "相手への圧迫感",
        'zh-CN': "给对方压力",
        'zh-TW': "給對方壓力",
        id: "Tekanan pada orang lain",
        vi: "Áp lực cho người khác"
      }
    ],
    advice: {
      ko: "때로는 상대방의 감정이 진정될 시간도 필요합니다. 해결보다 공감이 먼저일 때도 있어요.",
      en: "Sometimes the other person needs time for their emotions to calm down. Sometimes empathy comes before resolution.",
      ja: "時には相手の感情が落ち着く時間も必要です。解決より共感が先の時もあります。",
      'zh-CN': "有时对方需要时间让情绪平静下来。有时同理心比解决问题更重要。",
      'zh-TW': "有時對方需要時間讓情緒平靜下來。有時同理心比解決問題更重要。",
      id: "Kadang-kadang orang lain membutuhkan waktu untuk emosi mereka tenang. Terkadang empati datang sebelum penyelesaian.",
      vi: "Đôi khi người khác cần thời gian để cảm xúc bình tĩnh. Đôi khi sự đồng cảm đến trước việc giải quyết."
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type5"],
      difficult: ["Type4"]
    }
  },
  {
    type: "Type2",
    emoji: "💝",
    title: {
      ko: "감정 공감형",
      en: "Emotional Empath",
      ja: "感情共感型",
      'zh-CN': "情感共情型",
      'zh-TW': "情感共情型",
      id: "Empati Emosional",
      vi: "Người Đồng Cảm Cảm Xúc"
    },
    description: {
      ko: "갈등 상황에서 상대방의 감정을 먼저 이해하고 공감하는 스타일입니다. \"왜 그렇게 느꼈을까?\"를 중시하며 감정적 안정을 우선합니다. 신뢰받고 편안하지만 문제 해결이 느릴 수 있습니다.",
      en: "A style that first understands and empathizes with the other person's emotions in conflict situations. Values \"why did they feel that way?\" and prioritizes emotional stability. Trusted and comfortable, but problem-solving may be slow.",
      ja: "対立状況で相手の感情をまず理解し共感するスタイルです。「なぜそう感じたのだろう？」を重視し、感情的安定を優先します。信頼され、安心感がありますが、問題解決が遅くなることもあります。",
      'zh-CN': "在冲突情况下首先理解和共情对方情感的风格。重视「为什么会有那样的感受？」并优先考虑情感稳定。被信任且舒适，但问题解决可能较慢。",
      'zh-TW': "在衝突情況下首先理解和共情對方情感的風格。重視「為什麼會有那樣的感受？」並優先考慮情感穩定。被信任且舒適，但問題解決可能較慢。",
      id: "Gaya yang pertama-tama memahami dan berempati dengan emosi orang lain dalam situasi konflik. Menghargai \"mengapa mereka merasa seperti itu?\" dan memprioritaskan stabilitas emosional. Dipercaya dan nyaman, tetapi pemecahan masalah mungkin lambat.",
      vi: "Phong cách đầu tiên hiểu và đồng cảm với cảm xúc của người khác trong tình huống xung đột. Coi trọng \"tại sao họ cảm thấy như vậy?\" và ưu tiên sự ổn định cảm xúc. Được tin tưởng và thoải mái, nhưng việc giải quyết vấn đề có thể chậm."
    },
    pros: [
      {
        ko: "공감 능력",
        en: "Empathy ability",
        ja: "共感能力",
        'zh-CN': "共情能力",
        'zh-TW': "共情能力",
        id: "Kemampuan empati",
        vi: "Khả năng đồng cảm"
      },
      {
        ko: "신뢰 형성",
        en: "Trust building",
        ja: "信頼形成",
        'zh-CN': "建立信任",
        'zh-TW': "建立信任",
        id: "Pembangunan kepercayaan",
        vi: "Xây dựng niềm tin"
      },
      {
        ko: "따뜻함",
        en: "Warmth",
        ja: "温かさ",
        'zh-CN': "温暖",
        'zh-TW': "溫暖",
        id: "Kehangatan",
        vi: "Sự ấm áp"
      },
      {
        ko: "안정감",
        en: "Stability",
        ja: "安定感",
        'zh-CN': "稳定感",
        'zh-TW': "穩定感",
        id: "Stabilitas",
        vi: "Sự ổn định"
      }
    ],
    cons: [
      {
        ko: "문제 해결 지연",
        en: "Delayed problem solving",
        ja: "問題解決の遅延",
        'zh-CN': "问题解决延迟",
        'zh-TW': "問題解決延遲",
        id: "Penyelesaian masalah tertunda",
        vi: "Giải quyết vấn đề chậm trễ"
      },
      {
        ko: "자기 감정 억압",
        en: "Self-emotion suppression",
        ja: "自分の感情抑制",
        'zh-CN': "自我情感压抑",
        'zh-TW': "自我情感壓抑",
        id: "Penekanan emosi diri",
        vi: "Ức chế cảm xúc bản thân"
      },
      {
        ko: "명확성 부족",
        en: "Lack of clarity",
        ja: "明確性の不足",
        'zh-CN': "缺乏清晰度",
        'zh-TW': "缺乏清晰度",
        id: "Kurang kejelasan",
        vi: "Thiếu rõ ràng"
      }
    ],
    advice: {
      ko: "공감도 중요하지만 명확한 해결도 필요합니다. 당신의 감정도 소중해요!",
      en: "Empathy is important, but clear resolution is also needed. Your emotions are precious too!",
      ja: "共感も重要ですが、明確な解決も必要です。あなたの感情も大切です！",
      'zh-CN': "共情很重要，但清晰的解决方案也是需要的。你的情感也很珍贵！",
      'zh-TW': "共情很重要，但清晰的解決方案也是需要的。你的情感也很珍貴！",
      id: "Empati penting, tetapi penyelesaian yang jelas juga diperlukan. Emosi Anda juga berharga!",
      vi: "Đồng cảm rất quan trọng, nhưng cũng cần giải pháp rõ ràng. Cảm xúc của bạn cũng quý giá!"
    },
    compatibility: {
      best: ["Type1"],
      good: ["Type6"],
      careful: ["Type3"],
      difficult: ["Type4"]
    }
  },
  {
    type: "Type3",
    emoji: "🧠",
    title: {
      ko: "논리 분석형",
      en: "Logical Analyzer",
      ja: "論理分析型",
      'zh-CN': "逻辑分析型",
      'zh-TW': "邏輯分析型",
      id: "Analis Logis",
      vi: "Người Phân Tích Logic"
    },
    description: {
      ko: "감정보다 사실과 논리를 우선시하는 분석적 스타일입니다. 원인을 파악하고 객관적으로 상황을 정리하며, 합리적 해결책을 찾습니다. 공정하고 효율적이지만 차갑게 느껴질 수 있습니다.",
      en: "An analytical style that prioritizes facts and logic over emotions. Identifies causes, objectively organizes situations, and finds rational solutions. Fair and efficient, but may feel cold.",
      ja: "感情より事実と論理を優先する分析的スタイルです。原因を把握し、客観的に状況を整理し、合理的な解決策を見つけます。公正で効率的ですが、冷たく感じられることもあります。",
      'zh-CN': "优先考虑事实和逻辑而非情感的分析风格。识别原因，客观地整理情况，寻找理性解决方案。公正且高效，但可能感觉冷淡。",
      'zh-TW': "優先考慮事實和邏輯而非情感的分析風格。識別原因，客觀地整理情況，尋找理性解決方案。公正且高效，但可能感覺冷淡。",
      id: "Gaya analitis yang mengutamakan fakta dan logika daripada emosi. Mengidentifikasi penyebab, mengatur situasi secara objektif, dan menemukan solusi rasional. Adil dan efisien, tetapi mungkin terasa dingin.",
      vi: "Phong cách phân tích ưu tiên sự thật và logic hơn cảm xúc. Xác định nguyên nhân, tổ chức tình huống một cách khách quan, và tìm giải pháp hợp lý. Công bằng và hiệu quả, nhưng có thể cảm thấy lạnh lùng."
    },
    pros: [
      {
        ko: "객관성",
        en: "Objectivity",
        ja: "客観性",
        'zh-CN': "客观性",
        'zh-TW': "客觀性",
        id: "Objektivitas",
        vi: "Tính khách quan"
      },
      {
        ko: "공정함",
        en: "Fairness",
        ja: "公平さ",
        'zh-CN': "公平",
        'zh-TW': "公平",
        id: "Keadilan",
        vi: "Tính công bằng"
      },
      {
        ko: "효율적",
        en: "Efficiency",
        ja: "効率性",
        'zh-CN': "高效",
        'zh-TW': "高效",
        id: "Efisiensi",
        vi: "Hiệu quả"
      },
      {
        ko: "재발 방지",
        en: "Prevents recurrence",
        ja: "再発防止",
        'zh-CN': "防止复发",
        'zh-TW': "防止復發",
        id: "Mencegah kekambuhan",
        vi: "Ngăn ngừa tái phát"
      }
    ],
    cons: [
      {
        ko: "감정 무시",
        en: "Ignoring emotions",
        ja: "感情無視",
        'zh-CN': "忽视情感",
        'zh-TW': "忽視情感",
        id: "Mengabaikan emosi",
        vi: "Bỏ qua cảm xúc"
      },
      {
        ko: "차가움",
        en: "Coldness",
        ja: "冷たさ",
        'zh-CN': "冷淡",
        'zh-TW': "冷淡",
        id: "Kedinginan",
        vi: "Lạnh lùng"
      },
      {
        ko: "융통성 부족",
        en: "Lack of flexibility",
        ja: "柔軟性の不足",
        'zh-CN': "缺乏灵活性",
        'zh-TW': "缺乏靈活性",
        id: "Kurang fleksibilitas",
        vi: "Thiếu linh hoạt"
      }
    ],
    advice: {
      ko: "논리도 중요하지만 감정도 현실입니다. 때로는 \"네 말이 맞아\"보다 \"힘들었겠다\"가 필요해요.",
      en: "Logic is important, but emotions are also reality. Sometimes \"that must have been hard\" is needed more than \"you're right\".",
      ja: "論理も重要ですが、感情も現実です。時には「あなたが正しい」よりも「大変だったでしょうね」が必要です。",
      'zh-CN': "逻辑很重要，但情感也是现实。有时「你一定很辛苦」比「你说得对」更重要。",
      'zh-TW': "邏輯很重要，但情感也是現實。有時「你一定很辛苦」比「你說得對」更重要。",
      id: "Logika penting, tetapi emosi juga realitas. Terkadang \"itu pasti sulit\" lebih dibutuhkan daripada \"kamu benar\".",
      vi: "Logic rất quan trọng, nhưng cảm xúc cũng là thực tế. Đôi khi \"chắc là khó khăn\" cần thiết hơn \"bạn nói đúng\"."
    },
    compatibility: {
      best: ["Type1"],
      good: ["Type5"],
      careful: ["Type2"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type4",
    emoji: "⏰",
    title: {
      ko: "회피 시간형",
      en: "Time-Processing Type",
      ja: "回避時間型",
      'zh-CN': "回避时间型",
      'zh-TW': "迴避時間型",
      id: "Tipe Pengolah Waktu",
      vi: "Kiểu Xử Lý Thời Gian"
    },
    description: {
      ko: "즉각 대응보다 시간을 두고 생각하는 스타일입니다. 감정 정리와 상황 파악 후 대화하며, 충동적 반응을 피합니다. 신중하고 실수가 적지만 갈등이 장기화될 수 있습니다.",
      en: "A style that takes time to think rather than immediate response. Organizes emotions and understands the situation before talking, avoiding impulsive reactions. Careful and makes fewer mistakes, but conflicts may be prolonged.",
      ja: "即座に対応するよりも時間をかけて考えるスタイルです。感情を整理し、状況を把握してから話し合い、衝動的な反応を避けます。慎重で失敗が少ないですが、対立が長期化する可能性があります。",
      'zh-CN': "花时间思考而非立即回应的风格。整理情感和了解情况后再对话，避免冲动反应。谨慎且错误较少，但冲突可能会延长。",
      'zh-TW': "花時間思考而非立即回應的風格。整理情感和了解情況後再對話，避免衝動反應。謹慎且錯誤較少，但衝突可能會延長。",
      id: "Gaya yang meluangkan waktu untuk berpikir daripada merespons langsung. Mengatur emosi dan memahami situasi sebelum berbicara, menghindari reaksi impulsif. Hati-hati dan membuat lebih sedikit kesalahan, tetapi konflik mungkin berlarut-larut.",
      vi: "Phong cách dành thời gian suy nghĩ thay vì phản ứng ngay lập tức. Sắp xếp cảm xúc và hiểu tình huống trước khi nói chuyện, tránh phản ứng bốc đồng. Cẩn thận và ít mắc lỗi hơn, nhưng xung đột có thể kéo dài."
    },
    pros: [
      {
        ko: "신중함",
        en: "Caution",
        ja: "慎重さ",
        'zh-CN': "谨慎",
        'zh-TW': "謹慎",
        id: "Kehati-hatian",
        vi: "Thận trọng"
      },
      {
        ko: "감정 조절",
        en: "Emotional control",
        ja: "感情調整",
        'zh-CN': "情感控制",
        'zh-TW': "情感控制",
        id: "Kontrol emosi",
        vi: "Kiểm soát cảm xúc"
      },
      {
        ko: "충동 방지",
        en: "Prevents impulsiveness",
        ja: "衝動防止",
        'zh-CN': "防止冲动",
        'zh-TW': "防止衝動",
        id: "Mencegah impulsivitas",
        vi: "Ngăn ngừa bốc đồng"
      },
      {
        ko: "깊은 성찰",
        en: "Deep reflection",
        ja: "深い省察",
        'zh-CN': "深度反思",
        'zh-TW': "深度反思",
        id: "Refleksi mendalam",
        vi: "Suy ngẫm sâu sắc"
      }
    ],
    cons: [
      {
        ko: "문제 장기화",
        en: "Prolonged problems",
        ja: "問題の長期化",
        'zh-CN': "问题长期化",
        'zh-TW': "問題長期化",
        id: "Masalah berkepanjangan",
        vi: "Vấn đề kéo dài"
      },
      {
        ko: "답답함 유발",
        en: "Causes frustration",
        ja: "もどかしさを誘発",
        'zh-CN': "引起挫败感",
        'zh-TW': "引起挫敗感",
        id: "Menyebabkan frustrasi",
        vi: "Gây thất vọng"
      },
      {
        ko: "회피로 보일 수 있음",
        en: "May appear evasive",
        ja: "回避に見える可能性",
        'zh-CN': "可能显得回避",
        'zh-TW': "可能顯得迴避",
        id: "Mungkin terlihat menghindar",
        vi: "Có thể trông như tránh né"
      }
    ],
    advice: {
      ko: "시간도 필요하지만 너무 미루면 문제가 더 커집니다. 작은 대화부터 시도해보세요.",
      en: "Time is needed, but if you delay too much, problems get bigger. Try starting with small conversations.",
      ja: "時間も必要ですが、あまり遅らせると問題が大きくなります。小さな会話から試してみてください。",
      'zh-CN': "时间也需要，但拖延太久问题会变得更大。从小对话开始尝试。",
      'zh-TW': "時間也需要，但拖延太久問題會變得更大。從小對話開始嘗試。",
      id: "Waktu juga diperlukan, tetapi jika terlalu ditunda, masalah menjadi lebih besar. Coba mulai dengan percakapan kecil.",
      vi: "Thời gian cũng cần thiết, nhưng nếu trì hoãn quá lâu, vấn đề sẽ trở nên lớn hơn. Hãy thử bắt đầu với những cuộc trò chuyện nhỏ."
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type6"],
      careful: ["Type5"],
      difficult: ["Type1"]
    }
  },
  {
    type: "Type5",
    emoji: "⚖️",
    title: {
      ko: "타협 조정형",
      en: "Compromise Mediator",
      ja: "妥協調整型",
      'zh-CN': "妥协调解型",
      'zh-TW': "妥協調解型",
      id: "Mediator Kompromi",
      vi: "Người Hòa Giải Thỏa Hiệp"
    },
    description: {
      ko: "서로 양보하며 중간 지점을 찾는 균형 감각의 소유자입니다. \"이번엔 이렇게, 다음엔 저렇게\" 식의 유연한 해결을 선호합니다. 실용적이고 공정하지만 근본 해결은 안 될 수 있습니다.",
      en: "A person with a sense of balance who finds middle ground through mutual compromise. Prefers flexible solutions like \"this time like this, next time like that.\" Practical and fair, but may not achieve fundamental resolution.",
      ja: "お互いに譲歩しながら中間地点を見つけるバランス感覚の持ち主です。「今回はこうして、次はああして」という柔軟な解決を好みます。実用的で公正ですが、根本的な解決はできないかもしれません。",
      'zh-CN': "通过相互妥协寻找中间点的平衡感拥有者。偏好「这次这样，下次那样」的灵活解决方案。实用且公平，但可能无法实现根本解决。",
      'zh-TW': "透過相互妥協尋找中間點的平衡感擁有者。偏好「這次這樣，下次那樣」的靈活解決方案。實用且公平，但可能無法實現根本解決。",
      id: "Orang dengan rasa keseimbangan yang menemukan titik tengah melalui kompromi bersama. Lebih menyukai solusi fleksibel seperti \"kali ini begini, lain kali begitu.\" Praktis dan adil, tetapi mungkin tidak mencapai resolusi fundamental.",
      vi: "Người có cảm giác cân bằng tìm điểm giữa thông qua thỏa hiệp lẫn nhau. Thích các giải pháp linh hoạt như \"lần này như thế này, lần sau như thế kia.\" Thực tế và công bằng, nhưng có thể không đạt được giải pháp cơ bản."
    },
    pros: [
      {
        ko: "유연성",
        en: "Flexibility",
        ja: "柔軟性",
        'zh-CN': "灵活性",
        'zh-TW': "靈活性",
        id: "Fleksibilitas",
        vi: "Tính linh hoạt"
      },
      {
        ko: "공정함",
        en: "Fairness",
        ja: "公平さ",
        'zh-CN': "公平",
        'zh-TW': "公平",
        id: "Keadilan",
        vi: "Tính công bằng"
      },
      {
        ko: "빠른 합의",
        en: "Quick agreement",
        ja: "迅速な合意",
        'zh-CN': "快速达成一致",
        'zh-TW': "快速達成一致",
        id: "Kesepakatan cepat",
        vi: "Thỏa thuận nhanh chóng"
      },
      {
        ko: "실용성",
        en: "Practicality",
        ja: "実用性",
        'zh-CN': "实用性",
        'zh-TW': "實用性",
        id: "Praktis",
        vi: "Tính thực tế"
      }
    ],
    cons: [
      {
        ko: "원칙 없어 보임",
        en: "May appear without principles",
        ja: "原則がないように見える",
        'zh-CN': "可能显得没有原则",
        'zh-TW': "可能顯得沒有原則",
        id: "Mungkin terlihat tanpa prinsip",
        vi: "Có thể trông như không có nguyên tắc"
      },
      {
        ko: "근본 해결 안 됨",
        en: "No fundamental resolution",
        ja: "根本的解決にならない",
        'zh-CN': "无法根本解决",
        'zh-TW': "無法根本解決",
        id: "Tidak ada resolusi fundamental",
        vi: "Không có giải pháp cơ bản"
      },
      {
        ko: "불만 누적 가능",
        en: "Possible accumulation of complaints",
        ja: "不満の蓄積の可能性",
        'zh-CN': "可能累积不满",
        'zh-TW': "可能累積不滿",
        id: "Kemungkinan akumulasi keluhan",
        vi: "Có thể tích lũy bất mãn"
      }
    ],
    advice: {
      ko: "타협도 좋지만 때로는 원칙이 필요합니다. 중요한 문제는 근본적으로 해결하세요.",
      en: "Compromise is good, but sometimes principles are needed. Solve important problems fundamentally.",
      ja: "妥協も良いですが、時には原則が必要です。重要な問題は根本的に解決してください。",
      'zh-CN': "妥协很好，但有时需要原则。从根本上解决重要问题。",
      'zh-TW': "妥協很好，但有時需要原則。從根本上解決重要問題。",
      id: "Kompromi itu baik, tetapi kadang-kadang prinsip diperlukan. Selesaikan masalah penting secara fundamental.",
      vi: "Thỏa hiệp cũng tốt, nhưng đôi khi cần nguyên tắc. Giải quyết các vấn đề quan trọng một cách cơ bản."
    },
    compatibility: {
      best: ["Type3"],
      good: ["Type1"],
      careful: ["Type4"],
      difficult: ["Type6"]
    }
  },
  {
    type: "Type6",
    emoji: "🕊️",
    title: {
      ko: "평화 순응형",
      en: "Peace-Seeking Conformist",
      ja: "平和順応型",
      'zh-CN': "和平顺从型",
      'zh-TW': "和平順從型",
      id: "Konformis Pencari Damai",
      vi: "Người Tuân Thủ Hòa Bình"
    },
    description: {
      ko: "갈등 자체를 불편해하며 관계 유지를 최우선으로 하는 스타일입니다. 양보와 이해로 평화를 지키며, 자신의 의견보다 상대방 감정을 배려합니다. 편안하고 갈등이 적지만 자신의 불만이 쌓일 수 있습니다.",
      en: "A style that finds conflict itself uncomfortable and prioritizes maintaining relationships above all. Maintains peace through compromise and understanding, caring for the other person's emotions more than their own opinions. Comfortable and has fewer conflicts, but their own dissatisfaction may accumulate.",
      ja: "対立そのものを不快に思い、関係維持を最優先するスタイルです。譲歩と理解で平和を守り、自分の意見より相手の感情を配慮します。快適で対立は少ないですが、自分の不満が蓄積される可能性があります。",
      'zh-CN': "认为冲突本身令人不适，将维持关系放在首位。通过妥协和理解维护和平，比自己的意见更关心对方的情感。舒适且冲突较少，但自己的不满可能会累积。",
      'zh-TW': "認為衝突本身令人不適，將維持關係放在首位。透過妥協和理解維護和平，比自己的意見更關心對方的情感。舒適且衝突較少，但自己的不滿可能會累積。",
      id: "Gaya yang merasa tidak nyaman dengan konflik itu sendiri dan memprioritaskan menjaga hubungan di atas segalanya. Mempertahankan perdamaian melalui kompromi dan pemahaman, merawat emosi orang lain lebih dari pendapat mereka sendiri. Nyaman dan memiliki lebih sedikit konflik, tetapi ketidakpuasan mereka sendiri dapat menumpuk.",
      vi: "Phong cách cảm thấy không thoải mái với chính xung đột và ưu tiên duy trì mối quan hệ trên hết. Duy trì hòa bình thông qua thỏa hiệp và hiểu biết, quan tâm đến cảm xúc của người khác hơn ý kiến của chính mình. Thoải mái và ít xung đột hơn, nhưng sự bất mãn của chính họ có thể tích lũy."
    },
    pros: [
      {
        ko: "배려심",
        en: "Consideration",
        ja: "配慮",
        'zh-CN': "体贴",
        'zh-TW': "體貼",
        id: "Pertimbangan",
        vi: "Sự quan tâm"
      },
      {
        ko: "조화",
        en: "Harmony",
        ja: "調和",
        'zh-CN': "和谐",
        'zh-TW': "和諧",
        id: "Harmoni",
        vi: "Sự hòa hợp"
      },
      {
        ko: "편안함",
        en: "Comfort",
        ja: "快適さ",
        'zh-CN': "舒适",
        'zh-TW': "舒適",
        id: "Kenyamanan",
        vi: "Sự thoải mái"
      },
      {
        ko: "갈등 최소화",
        en: "Conflict minimization",
        ja: "対立最小化",
        'zh-CN': "冲突最小化",
        'zh-TW': "衝突最小化",
        id: "Minimisasi konflik",
        vi: "Tối thiểu hóa xung đột"
      }
    ],
    cons: [
      {
        ko: "자기 억압",
        en: "Self-suppression",
        ja: "自己抑制",
        'zh-CN': "自我压抑",
        'zh-TW': "自我壓抑",
        id: "Penekanan diri",
        vi: "Ức chế bản thân"
      },
      {
        ko: "불만 누적",
        en: "Accumulation of complaints",
        ja: "不満の蓄積",
        'zh-CN': "不满累积",
        'zh-TW': "不滿累積",
        id: "Akumulasi keluhan",
        vi: "Tích lũy bất mãn"
      },
      {
        ko: "의견 없어 보임",
        en: "May appear opinionless",
        ja: "意見がないように見える",
        'zh-CN': "可能显得没有意见",
        'zh-TW': "可能顯得沒有意見",
        id: "Mungkin terlihat tanpa pendapat",
        vi: "Có thể trông như không có ý kiến"
      },
      {
        ko: "스트레스 내재화",
        en: "Internalized stress",
        ja: "ストレス内在化",
        'zh-CN': "压力内化",
        'zh-TW': "壓力內化",
        id: "Stres yang diinternalisasi",
        vi: "Căng thẳng nội tâm hóa"
      }
    ],
    advice: {
      ko: "당신의 의견과 감정도 중요합니다! 양보만이 해결책은 아니에요. 가끔은 솔직하게 표현하세요.",
      en: "Your opinions and emotions are also important! Compromise isn't the only solution. Sometimes express yourself honestly.",
      ja: "あなたの意見と感情も大切です！譲歩だけが解決策ではありません。時には正直に表現してください。",
      'zh-CN': "你的意见和情感也很重要！妥协不是唯一的解决方案。有时要诚实地表达自己。",
      'zh-TW': "你的意見和情感也很重要！妥協不是唯一的解決方案。有時要誠實地表達自己。",
      id: "Pendapat dan emosi Anda juga penting! Kompromi bukan satu-satunya solusi. Terkadang ekspresikan diri Anda dengan jujur.",
      vi: "Ý kiến và cảm xúc của bạn cũng quan trọng! Thỏa hiệp không phải là giải pháp duy nhất. Đôi khi hãy thể hiện bản thân một cách thành thật."
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type4"],
      careful: ["Type1"],
      difficult: ["Type3"]
    }
  }
];

export function calculateConflictResult(answers: any[]): string {
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