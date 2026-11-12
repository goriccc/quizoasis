/** Auto-built from scripts/_hurt_by_small_words_i18n/*.json — do not hand-edit */
export type Phase3HurtBySmallWordsForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3HurtBySmallWordsResultText = {
  title: string;
  typeName: string;
  realReason: string;
  shortDescription: string;
  description: string;
  keywords: string;
  strengths: string;
  reasonDetail: string;
  frequentSaying: string;
  changeTips: string;
  oneLiner: string;
  shareLine: string;
};

type LocaleBundle = {
  meta: { title: string; description: string; tags: string[] };
  questions: { q: string; opts: string[] }[];
  results: Phase3HurtBySmallWordsResultText[];
};

export const PHASE3_HURT_BY_SMALL_WORDS_I18N: Record<Phase3HurtBySmallWordsForeignLocale, LocaleBundle> = {
  "en": {
    "meta": {
      "title": "Why Do Casual Words from My Partner Hurt So Much?",
      "description": "It was just a throwaway line — so why does your heart drop? These 10 scenarios reveal the real reason you get hurt, and how to protect your heart.",
      "tags": [
        "Dating Wounds",
        "Dating Psychology"
      ]
    },
    "questions": [
      {
        "q": "They see you at the meetup spot and say, \"You look a bit tired today.\" You...",
        "opts": [
          "Your heart drops — maybe they're not happy to see you",
          "You put effort into today's date and feel hurt they didn't notice",
          "You've been drained lately — the line hits like the final blow and you tear up",
          "You wonder if you look bad and keep checking mirrors"
        ]
      },
      {
        "q": "They laugh and say, \"That's just how you are.\" You...",
        "opts": [
          "It wasn't the warm response you hoped for — your expectation deflates",
          "You're exhausted body and mind, so the line hits harder and tears threaten",
          "It sounds like \"you're always lacking,\" and your mood sinks",
          "A similar line from the past flashes up and those old feelings return"
        ]
      },
      {
        "q": "While listening, they say \"Oh, okay?\" and check their phone. You...",
        "opts": [
          "After a draining day, even this small reaction feels like your limit",
          "It feels like they lost interest because you're boring — your self-worth dips",
          "It overlaps with a past moment of being ignored mid-talk and your chest drops",
          "It feels like a signal that your words don't matter, so you don't want to keep talking"
        ]
      },
      {
        "q": "They lightly say about your opinion, \"I'm not sure about that.\" You...",
        "opts": [
          "It sounds like your opinion has no value, and you shrink",
          "A memory of being dismissed for speaking up returns and you freeze",
          "It feels like rejection of your view — your heart door shuts for a second",
          "You expected them to side with you, and the miss leaves you hurt"
        ]
      },
      {
        "q": "They say, \"You should just handle that yourself.\" You...",
        "opts": [
          "Old times of carrying similar words alone come back and weigh on you",
          "Even asking for help feels rejected — next time it's harder to speak up",
          "You thought a partner would look after you first — the gap hurts",
          "You're already exhausted, so the line makes everything collapse at once"
        ]
      },
      {
        "q": "They text, \"I'm busy right now — let's talk later.\" You...",
        "opts": [
          "Fatigue has stacked for days — the line weakens you enough to cry",
          "You get that they're busy, but wonder if you're unimportant — your self-worth shakes",
          "It feels like being pushed aside before you even speak — rejection vibes",
          "It was important and you expected them to get that — the miss hurts"
        ]
      },
      {
        "q": "They say, \"You've been a bit sensitive lately.\" You...",
        "opts": [
          "You shrink — am I always the problem person?",
          "Past relationships where you heard \"sensitive\" come back and it hurts",
          "You expected understanding, but got criticism instead — disappointment hits",
          "You've been drained already — the line exhausts you further into tears"
        ]
      },
      {
        "q": "In a group photo they sit somewhere other than next to you. You...",
        "opts": [
          "It overlaps with an old scene of being left out and your heart freezes",
          "It feels like a distance signal — rejection drops your heart",
          "A full day of fatigue makes even this small thing break you emotionally",
          "You wonder if you're not someone they'd want beside them — self-worth dips"
        ]
      },
      {
        "q": "They say, \"Just understand me on this.\" You...",
        "opts": [
          "Your feelings always feel pushed back — your heart closes before you can ask",
          "You expected a partner to read your heart first — the miss hurts",
          "You feel small — are my emotions not worth understanding?",
          "Memories of always being the one who understands flood back and your chest aches"
        ]
      },
      {
        "q": "You're about to say \"That comment just hurt me.\" What's closest to your gut?",
        "opts": [
          "You worry about their reaction first — scared you'll fall short of expectations",
          "You feel too drained to speak — they'll probably brush it off anyway",
          "A past time you spoke up and got hurt worse makes you hesitate",
          "Fear of rejection stops the words in your throat"
        ]
      }
    ],
    "results": [
      {
        "title": "Someone whose old memories overlap today's words, the Past-Trigger Type 🕰️",
        "typeName": "Past-Trigger Type",
        "realReason": "Today's line pokes an old painful scene and those feelings rise again",
        "shortDescription": "You're not \"too sensitive.\" Today's line presses an old memory button, and those feelings rise with it.",
        "description": "They meant nothing — but your mind snaps back to a similar past scene. The old emotion reacts louder than today's words, so your response feels bigger than the moment. Noticing that link shrinks the wound.",
        "keywords": "Memory button, Similar scenes, Feelings from then, Past-present overlap, Bigger reactions",
        "strengths": "Deep memory, strong learning from experience, and a fine emotional texture",
        "reasonDetail": "Phrases or situations similar to what you heard before",
        "frequentSaying": "\"I've heard something like this before...\"",
        "changeTips": "When your heart drops, ask first: \"Is this about today's words — or an old memory?\"\nTell them: \"That line poked an old memory\" and share the reason\nWrite two lines on how past and present differ to separate now from then\nIf old memories keep rising and strain daily life or the relationship, safely sort them with a counseling professional",
        "oneLiner": "Separate today's words from then's memory, and your heart returns to real-world size",
        "shareLine": "Why do casual words from my partner hurt so much? Result: Past-Trigger Type 🕰️ Apparently today's line presses an old memory button... this is so you lol try it — what'd you get?"
      },
      {
        "title": "Someone who freezes when it feels like rejection, the Rejection-Sensitive Type 🚪",
        "typeName": "Rejection-Sensitive Type",
        "realReason": "You read small words or actions as a signal they're pushing you away",
        "shortDescription": "You're not \"too sensitive.\" Your heart's antenna for rejection signals is just set high.",
        "description": "\"Let's talk later,\" \"I'm busy,\" \"not sure about that\" land as \"I don't want you.\" Your heart shuts fast and speaking up next time gets harder. That sensitivity is also another face of valuing the bond.",
        "keywords": "Being pushed aside, Rejection signals, Heart shutting, Hard to speak up, Antenna",
        "strengths": "You take the bond seriously and catch small shifts in them quickly",
        "reasonDetail": "Rescheduled plans, \"I'm busy,\" disagreement with your view, distancing behavior",
        "frequentSaying": "\"You didn't start disliking me, right?\"",
        "changeTips": "When it reads as rejection, check the facts: \"Is this really rejection — or just a circumstance?\"\nAsk directly: \"That just sounded like rejection — is that what you meant?\"\nConfirm with what they do after (texts, plans) following a rejection-sounding line",
        "oneLiner": "Check once whether a rejection-sounding line really was rejection. Often the heart's reading was bigger",
        "shareLine": "Why do casual words from my partner hurt so much? Result: Rejection-Sensitive Type 🚪 Apparently I read small comments as push-away signals... this is so you. Send me your result"
      },
      {
        "title": "Someone hurt when unspoken expectations miss, the Expectation-Gap Type 🎨",
        "typeName": "Expectation-Gap Type",
        "realReason": "The gap between the reaction you expected and what you got becomes the wound",
        "shortDescription": "The words weren't the wound. The missing reaction you expected became the hurt.",
        "description": "Expectations that they'll notice, take your side, or care for you first stack up unspoken. They don't know the expectation exists and move on — you get wounded with \"why don't they get it?\" Putting expectations into words shrinks the disappointment.",
        "keywords": "Unspoken expectations, Faith they'll notice, Reaction gaps, Feeling let down",
        "strengths": "Clear standards for relationships and a big desire to give and receive love deeply",
        "reasonDetail": "When they don't notice, don't take your side, don't care for you first",
        "frequentSaying": "\"Shouldn't they get at least this much?\"",
        "changeTips": "When hurt, check first: have I actually told them this expectation?\nTurn it into a request: \"When this happens, I'd love it if you did this\"\nName three things they did for you before sharing what's missing",
        "oneLiner": "Unspoken expectations don't arrive. Turn them into requests and hurt becomes conversation",
        "shareLine": "Why do casual words from my partner hurt so much? Result: Expectation-Gap Type 🎨 Apparently it's not the words — it's the missing reaction I expected... this is so you lol try it"
      },
      {
        "title": "Someone whose stacked fatigue hit its limit, the Fatigue-Stack Type 🔋",
        "typeName": "Fatigue-Stack Type",
        "realReason": "You're already drained, so a small line becomes the last drop",
        "shortDescription": "You're not weak to words. Fatigue emptied your emotional bandwidth, and one line landed there.",
        "description": "A line you'd normally laugh off can feel tear-level huge after days of exhaustion. Reaction size tracks leftover emotional capacity more than word size. Check your condition on hurt days and the reaction shifts.",
        "keywords": "Last drop, No bandwidth, Condition, Tears, Limit",
        "strengths": "Strong responsibility, steady follow-through, and high endurance",
        "reasonDetail": "Words heard on exhausted days, busy seasons, or after days without rest",
        "frequentSaying": "\"I'm so drained lately that even little things feel hard\"",
        "changeTips": "On drained days, pause big talks: \"My condition's off today — let's talk tomorrow\"\nWhen hurt, check first: how exhausted was I today?\nPut sleep, meals, and rest into the schedule first to rebuild bandwidth\nIf fatigue and low drive linger and affect motivation, sleep, or eating, don't carry it alone — talk with a counseling professional or local mental health services",
        "oneLiner": "Wounds grow with your leftover bandwidth, not the word's size. Resting first is the fastest shield",
        "shareLine": "Why do casual words from my partner hurt so much? Result: Fatigue-Stack Type 🔋 Apparently one line became the last drop on stacked fatigue... this is so you lol What's your type?"
      },
      {
        "title": "Someone whose worth shakes from one line, the Self-Worth-Shake Type 🪞",
        "typeName": "Self-Worth-Shake Type",
        "realReason": "You take their words as proof that you're not enough",
        "shortDescription": "You're not just \"hurt by words.\" You're reading \"I'm not enough\" out of them.",
        "description": "\"You look tired\" becomes \"Do I look bad?\" \"Not sure about that\" becomes \"Is my opinion worthless?\" \"Sensitive\" becomes \"Am I the problem?\" The wound is where the line touches your self-worth more than the content. Separate their words from your value and your heart lightens.",
        "keywords": "I'm not enough, Shaking worth, Jumping to conclusions, Self-judgment, Shrinking",
        "strengths": "Humble, reflective about your own actions, and thoughtful toward others",
        "reasonDetail": "Casual evaluations or comments about looks, opinions, or personality",
        "frequentSaying": "\"Maybe it's because I'm just not that great?\"",
        "changeTips": "When hurt, separate: \"Did this define my worth — or comment on one moment?\"\nWrite three strengths independent of their words and reread them\nFor lines that stick, ask directly: \"What did you mean by that just now?\"\nIf \"I'm not enough\" thoughts run strong across daily life, not just dating, talk with a counseling professional",
        "oneLiner": "One line doesn't define your worth. Practicing separation between words and you becomes your heart's shield",
        "shareLine": "Why do casual words from my partner hurt so much? Result: Self-Worth-Shake Type 🪞 Apparently I read one line as proof I'm not enough... this is so you. Try it and tell me"
      }
    ]
  },
  "ja": {
    "meta": {
      "title": "なぜ恋人の何気ない一言に傷つくの？",
      "description": "大した意味のない一言なのに、なぜ心がドスンと落ちるの？ 10の場面で、傷つく本当の理由と心を守る方法を教えます。",
      "tags": [
        "恋愛の傷",
        "恋愛心理"
      ]
    },
    "questions": [
      {
        "q": "約束の場所で恋人に会い、「今日ちょっと疲れてるね」と言われた。あなたは？",
        "opts": [
          "会うのが嬉しくないのかな、と心が瞬間ドスンと落ちる",
          "今日のデートのために気を使ったのに気づいてもらえず寂しい",
          "最近ずっと疲れているのに、その言葉が最後の一撃のように感じて込み上げる",
          "自分がダメな姿に見えているのかと、鏡が気になって仕方ない"
        ]
      },
      {
        "q": "恋人が笑いながら「いつもそうだよね」と言った。あなたは？",
        "opts": [
          "望んでいた温かい反応じゃなくて、期待が折れた感じがする",
          "一日中心身ともに疲れていた日で、この言葉が余計に大きく届き涙が出そう",
          "自分はいつも足りない人、と言われたみたいで気持ちが沈む",
          "昔に似た言葉を聞いた記憶が浮かび、そのときの感情がそのまま上がってくる"
        ]
      },
      {
        "q": "恋人が話を聞きながら「あ、そう」と言ってスマホを見た。あなたは？",
        "opts": [
          "疲れた一日の終わりで、こんな些細な反応にも心が限界に触れる感じがする",
          "自分の話がつまらなくて関心を引いたのかと、自尊心が下がる",
          "以前会話の途中で無視された場面が重なって胸がざわつく",
          "自分の話が大事じゃないというサインみたいで、もう話したくなくなる"
        ]
      },
      {
        "q": "恋人が自分の意見に軽く「それはちょっと違うかも」と言った。あなたは？",
        "opts": [
          "自分の意見に価値がないみたいで、萎縮する",
          "昔意見を言って無視された記憶が浮かび、言葉が出なくなる",
          "意見を拒まれたみたいで、心のドアが一瞬閉じる",
          "味方になってくれると期待していたのにずれて寂しい"
        ]
      },
      {
        "q": "恋人が「それくらい自分でやってよ」と言った。あなたは？",
        "opts": [
          "昔似た言葉を聞きながら一人で抱えていた時間が浮かび、心が重くなる",
          "助けを求めること自体が拒まれたみたいで、次は切り出しにくい",
          "恋人なら先に気遣ってくれると思っていたのに、期待と違って寂しい",
          "すでに疲れ切った状態で聞いた言葉なので、心がまとめて崩れる感じがする"
        ]
      },
      {
        "q": "恋人から「今忙しい、あとで話そう」と連絡が来た。あなたは？",
        "opts": [
          "何日も疲れが積もっていて、この言葉に涙が出るほど心が弱くなる",
          "忙しいのは分かるけど、自分は大事じゃない人なのかと自尊心が揺れる",
          "話す前に押しのけられたみたいで、拒まれた気分になる",
          "大事な話なのに分かってくれると思っていたのに、違って寂しい"
        ]
      },
      {
        "q": "恋人が「最近ちょっと繊細すぎない？」と言った。あなたは？",
        "opts": [
          "自分はいつも問題のある人なのかと、自分が小さく感じる",
          "昔の恋愛でも繊細だと言われた記憶が浮かび、心が痛い",
          "気持ちを分かってくれると期待していたのに指摘が返ってきてがっかりする",
          "最近ずっと疲れているのに、その言葉でさらに疲れて涙が出る"
        ]
      },
      {
        "q": "団体写真で、恋人が自分の隣ではなく別の場所に座った。あなたは？",
        "opts": [
          "昔似たように疎外された場面が重なって、心が凍りつく",
          "距離を置かれているサインみたいで、拒まれた感じに心がドスンと落ちる",
          "一日中積もった疲れのせいで、こんな小さなことにも感情が崩れる",
          "隣に座りたい相手じゃないのかと、自尊心が下がる"
        ]
      },
      {
        "q": "恋人が「とりあえず分かってよ」と言った。あなたは？",
        "opts": [
          "自分の気持ちはいつも後ろに回されるみたいで、頼む前から心が閉じる",
          "恋人なら先に自分の気持ちを察してくれると期待していたのにずれて寂しい",
          "自分の感情は理解される価値もないのかと、自分が小さく感じる",
          "昔もいつも自分が理解する側だった記憶が浮かび、胸が詰まる"
        ]
      },
      {
        "q": "恋人に「さっきの言葉、傷ついた」と言おうとする瞬間、いちばん近い本音は？",
        "opts": [
          "こんなことを言うと期待に届かない人になるのではと、恋人の反応が先に心配になる",
          "言っても軽く流されそうで、話す力もなく口を閉じたくなる",
          "昔言ってかえって傷が深まった記憶が浮かび、ためらう",
          "言ったら拒まれるのが怖くて、言葉が喉で止まる"
        ]
      }
    ],
    "results": [
      {
        "title": "昔の記憶が今の言葉に重なる人、過去再生型 🕰️",
        "typeName": "過去再生型",
        "realReason": "今の一言が昔つらかった場面を触り、そのときの感情が上がってくる",
        "shortDescription": "あなたは繊細すぎるのではありません。今の一言が昔のつらい記憶のボタンを押し、そのときの感情が一緒に上がってくるのです。",
        "description": "恋人に悪気はないのに、心は過去の似た場面へ一瞬で戻ります。今の言葉より、そのときの感情のほうが大きく反応するので、状況より反応が大きく感じられます。このつながりに気づくと、傷の大きさは小さくなります。",
        "keywords": "記憶ボタン、似た場面、そのときの感情、過去と現在の重なり、反応が大きくなる",
        "strengths": "記憶が深く、経験から学ぶ力があり、感情の機微が繊細",
        "reasonDetail": "昔聞いた言葉と似た表現、似た状況",
        "frequentSaying": "「前にもこんなこと言われたことある」",
        "changeTips": "心が落ちたとき「今の言葉のせい？ 昔の記憶のせい？」を先に自分に聞く\n恋人に「その言葉が昔の記憶を触った」と理由も一緒に伝える\n過去の場面と今の場面の違いを二行で書いて、現在を切り分ける\n過去の記憶がよく上がってきて日常や関係がつらいなら、心理カウンセリングの専門家とその記憶を安全に整理してみてください",
        "oneLiner": "今の言葉と、そのときの記憶を分けると、心の大きさは現実の大きさに戻ります",
        "shareLine": "なぜ恋人の何気ない一言に傷つくの？結果：過去再生型 🕰️ 今の一言が昔の記憶ボタンを押すらしい…これあなたじゃんwww 一緒にやろう、何出る？"
      },
      {
        "title": "拒絶のように感じる瞬間に固まる人、拒絶敏感型 🚪",
        "typeName": "拒絶敏感型",
        "realReason": "些細な言動を「自分を押しのけるサイン」として読む",
        "shortDescription": "あなたは繊細すぎるのではありません。拒絶のサインを早く察知する心のアンテナが高い人です。",
        "description": "あとで話そう、忙しい、それは違うかも——そんな言葉が、自分には「あなたは欲しくない」と聞こえます。心が一瞬で閉じ、次に切り出すこと自体が難しくなります。拒絶への敏感さは、関係を大切にしている心の別の顔でもあります。",
        "keywords": "押しのけ、拒絶サイン、心が閉じる、切り出しにくい、アンテナ",
        "strengths": "関係を真剣に扱い、相手の小さな変化を早く気づく繊細さ",
        "reasonDetail": "約束の延期、「忙しい」という言葉、意見への反対、距離を置く行動",
        "frequentSaying": "「嫌いになったわけじゃないよね？」",
        "changeTips": "拒絶に聞こえる瞬間「これは本当に拒絶？ ただの事情？」を事実で確認する\n「さっきの言葉が拒絶みたいに聞こえたんだけど、そういう意味？」と直接聞く\n拒絶っぽい言葉のあとに続く恋人の行動（連絡・約束）で確かめる",
        "oneLiner": "拒絶に聞こえた言葉が本当に拒絶か、一度だけ確認してみて。多くの場合、心の解釈のほうが大きかったです",
        "shareLine": "なぜ恋人の何気ない一言に傷つくの？結果：拒絶敏感型 🚪 些細な言葉を押しのけサインに読むらしい…これあなただわ本気でㅠ 結果送って"
      },
      {
        "title": "言っていない期待がずれて寂しい人、期待過多型 🎨",
        "typeName": "期待過多型",
        "realReason": "恋人にしてくれると期待した反応と、実際の反応のすき間が傷になる",
        "shortDescription": "言葉が傷になったのではありません。期待した反応が出なかったというすき間が、寂しさになりました。",
        "description": "気づいてくれるはず、味方になってくれるはず、先に気遣ってくれるはず——そんな期待が言葉にならないまま積もります。恋人は期待の存在を知らずに通り過ぎ、自分は「なんで分かってくれないの」で傷を負います。期待を言葉にすると寂しさは減ります。",
        "keywords": "言っていない期待、気づいてくれるはずという信じ込み、反応のすき間、寂しさ",
        "strengths": "関係の基準がはっきりしていて、愛情を深くやり取りしたい気持ちが大きい",
        "reasonDetail": "気づいてもらえないとき、味方になってくれないとき、先に気遣ってもらえないとき",
        "frequentSaying": "「これくらい分かってくれるべきじゃない？」",
        "changeTips": "寂しいとき「この期待を恋人に言ったことある？」を先に確認する\n「こういうとき、こうしてくれると嬉しい」と期待をお願いの文に変える\n恋人がしてくれたこと3つを先に思い浮かべてから、惜しい点を話す",
        "oneLiner": "期待は言わないと伝わりません。お願い文に変えれば、寂しさは会話になります",
        "shareLine": "なぜ恋人の何気ない一言に傷つくの？結果：期待過多型 🎨 言葉じゃなく、期待した反応が来なくて寂しいらしい…これあなたじゃんwww やってみて"
      },
      {
        "title": "積もった疲れが限界に触れた人、疲労蓄積型 🔋",
        "typeName": "疲労蓄積型",
        "realReason": "すでに疲れ切っていて、小さな一言が最後の一滴になる",
        "shortDescription": "あなたは言葉に弱いのではありません。積もった疲れで心の余裕が底をついているところに、一言が届いたのです。",
        "description": "普段なら笑って流せる言葉も、何日も疲れてしんどい日には涙が出るほど大きく感じます。言葉そのものの大きさより、心の余裕がどれだけ残っているかが反応の大きさを決めます。傷ついた日のコンディションを見ると、反応は変わります。",
        "keywords": "最後の一滴、余裕がない、コンディション、涙、限界",
        "strengths": "責任感が強く、任されたことを誠実にこなし、我慢強い",
        "reasonDetail": "疲れた日、忙しい時期、何日も休めなかったときに聞いた言葉",
        "frequentSaying": "「最近疲れすぎて、大したことないのにしんどい」",
        "changeTips": "疲れた日は大事な話を後回しにし、「今日はコンディションが悪いから明日話そう」と言う\n傷ついた瞬間「今日どれくらい疲れてたっけ？」を先にチェックする\n睡眠・食事・休み時間を予定に先に入れて、心の余裕をつくる\n疲労や無気力が長く続き、日常の意欲や睡眠・食事に影響するなら、一人で抱えず心理カウンセリングの専門家や地域の精神保健窓口に相談してみてください",
        "oneLiner": "傷は言葉の大きさではなく、自分の余裕の大きさだけ大きくなります。まず休むことがいちばん早い盾です",
        "shareLine": "なぜ恋人の何気ない一言に傷つくの？結果：疲労蓄積型 🔋 積もった疲れの上に一言が最後の一滴になったらしい…これあなたじゃんwww 何タイプ出る？"
      },
      {
        "title": "一言で自分の価値が揺れる人、自尊揺らぎ型 🪞",
        "typeName": "自尊揺らぎ型",
        "realReason": "恋人の言葉を「自分が足りない証拠」として受け取る",
        "shortDescription": "あなたは言葉に傷ついているのではありません。その言葉の中から「自分は足りない人だ」という結論を読み取っています。",
        "description": "疲れてるねは「自分がダメなのか」、それは違うかもは「自分の意見に価値がないのか」、繊細すぎは「自分が問題なのか」に広がります。言葉の内容より、その言葉が自尊心に触れる地点が傷の正体です。相手の言葉と自分の価値を分けると、心が軽くなります。",
        "keywords": "自分は足りない、価値の揺らぎ、結論の飛躍、自己評価、萎縮",
        "strengths": "謙虚で、自分の行動を振り返れ、相手を思いやれる繊細さ",
        "reasonDetail": "見た目・意見・性格への些細な評価や指摘",
        "frequentSaying": "「自分がダメだからかな？」",
        "changeTips": "傷ついたとき「この言葉が自分の価値を決めた？ それともこの状況への一言？」を分ける\n恋人の言葉と関係なく、自分の長所3つを書いて読んでおく\n引っかかった言葉は「さっきの言葉、どういう意味だった？」と意図を直接確認する\n自分が足りないという思いが恋愛だけでなく日常全体で強く続くなら、心理カウンセリングの専門家と話してみてください",
        "oneLiner": "一言があなたの価値を決めません。言葉と自分を分ける練習が、心の盾になります",
        "shareLine": "なぜ恋人の何気ない一言に傷つくの？結果：自尊揺らぎ型 🪞 一言を「足りない証拠」に読むらしい…これあなただわㅠ やって教えて"
      }
    ]
  },
  "zh-CN": {
    "meta": {
      "title": "为什么总被恋人的一句闲话伤到？",
      "description": "明明没什么意思的一句话，为什么心会突然一沉？用10个情境找出你受伤的真正原因，以及怎样守住内心。",
      "tags": [
        "恋爱伤口",
        "恋爱心理"
      ]
    },
    "questions": [
      {
        "q": "恋人在约定地点看见你，说「你今天看起来有点累」。你会？",
        "opts": [
          "心突然一沉——是不是不太想见我？",
          "今天约会特意打扮过，没被看见有点委屈",
          "最近一直很累，这句话像最后一击，心里涌上来",
          "是不是自己看起来很差，镜子总忍不住看"
        ]
      },
      {
        "q": "恋人笑着说「你不就这样嘛」。你会？",
        "opts": [
          "不是自己期待的那种温暖回应，期待被折断了",
          "身心都累了一整天，这句话显得特别大，快要哭出来",
          "听起来像「你总是不够好」，心情沉下去",
          "以前听过类似的话，记忆浮上来，当时的情绪原样回来"
        ]
      },
      {
        "q": "恋人听你说话时「哦，是吗？」然后看手机。你会？",
        "opts": [
          "疲惫的一天结束，连这种小反应都像触到极限",
          "觉得自己的话题无聊对方才收回关注，自尊往下掉",
          "和以前说话被无视的画面重叠，胸口一紧",
          "像在暗示我的话不重要，不想再继续说了"
        ]
      },
      {
        "q": "恋人对你的意见随口说「这好像不太行」。你会？",
        "opts": [
          "听起来像意见没价值，整个人缩起来",
          "想起以前发表意见被无视，话卡在嘴里",
          "像意见被拒了，心门瞬间关上",
          "本期待对方站在自己这边，落空了就委屈"
        ]
      },
      {
        "q": "恋人说「这种事你自己处理就行」。你会？",
        "opts": [
          "想起以前听着类似的话一个人扛的日子，心里发沉",
          "连求助本身都像被拒绝，下次更难开口",
          "以为恋人会先照顾自己，期待落空很委屈",
          "已经很累，这句话让心一下子垮掉"
        ]
      },
      {
        "q": "恋人发消息「我现在忙，晚点再说」。你会？",
        "opts": [
          "连着几天的疲惫，这句话让人心软到想哭",
          "知道对方忙，却仍想自己是不是不重要，自尊晃动",
          "话还没说就被推开，像被拒绝的感觉",
          "明明是重要的事，以为对方会懂，结果没有，很委屈"
        ]
      },
      {
        "q": "恋人说「你最近是不是有点敏感」。你会？",
        "opts": [
          "是不是自己总是有问题，整个人变小",
          "以前恋爱也听过「敏感」，记忆浮上来心里疼",
          "期待对方理解自己，却得到指责，很失望",
          "最近已经很累，这句话让人更累，眼泪出来"
        ]
      },
      {
        "q": "合影时恋人没坐在你旁边，而是坐到别处。你会？",
        "opts": [
          "和以前被冷落的画面重叠，心像冻住",
          "像疏远的信号，被拒绝的感觉让心一沉",
          "一整天的疲惫叠加，连这种小事情绪也会垮",
          "是不是不想坐我旁边的人，自尊往下掉"
        ]
      },
      {
        "q": "恋人说「你就理解一下吧」。你会？",
        "opts": [
          "自己的心情总被往后推，还没开口心就关了",
          "以为恋人会先体谅自己，期待落空很委屈",
          "自己的情绪不值得被理解吗，整个人变小",
          "想起以前总是自己在理解的一方，心里堵得慌"
        ]
      },
      {
        "q": "正想对恋人说「刚才那句话伤到我了」，最接近你的真心是？",
        "opts": [
          "怕说了会被当成达不到期待的人，先担心对方反应",
          "说了大概也会被轻轻带过，连开口的力气都没有",
          "想起以前说过反而更受伤，于是犹豫",
          "怕说了会被拒绝，话卡在喉咙里"
        ]
      }
    ],
    "results": [
      {
        "title": "旧记忆叠到当下话语上的人，过去触发型 🕰️",
        "typeName": "过去触发型",
        "realReason": "眼前这句话触到从前的痛点，当时的情绪一起涌上来",
        "shortDescription": "你不是太敏感。眼前这句话按下了旧日伤痛的按钮，当时的情绪一起回来了。",
        "description": "恋人毫无恶意，可你的心一瞬间回到过去相似的场景。比起眼前这句话，那时的情绪反应更大，所以反应会显得比场面夸张。察觉到这条连线，伤口就会变小。",
        "keywords": "记忆按钮、相似场面、当时的情绪、过去与现在的重叠、反应变大",
        "strengths": "记忆深刻，善于从经验中学习，情感细腻",
        "reasonDetail": "与从前听过的话相似的表达、相似的情境",
        "frequentSaying": "「以前也听过类似的话……」",
        "changeTips": "心一沉时先问自己：「是因为现在这句话，还是因为旧记忆？」\n对恋人说：「那句话触到了我以前的记忆」并一起说明原因\n用两行写下过去场面和现在场面的不同，把当下分开\n如果旧记忆经常涌上来，让日常或关系很辛苦，请和心理咨询专业人士一起安全地整理那些记忆",
        "oneLiner": "把眼前的话和那时的记忆分开，心的尺寸就会回到现实大小",
        "shareLine": "为什么总被恋人的一句闲话伤到？结果：过去触发型 🕰️ 眼前这句话会按下旧记忆按钮……好你啊哈哈 一起测，你出什么？"
      },
      {
        "title": "感觉像被拒绝就僵住的人，拒绝敏感型 🚪",
        "typeName": "拒绝敏感型",
        "realReason": "把细小的言行读成「对方在推开我」的信号",
        "shortDescription": "你不是太敏感。你只是对拒绝信号特别灵敏的心天线开得很高。",
        "description": "「晚点再说」「我忙」「好像不太行」——在你听来像「我不想要你」。心瞬间关上，下次更难开口。对拒绝敏感，也是珍惜关系的另一种样子。",
        "keywords": "被推开、拒绝信号、心门关上、难以开口、天线",
        "strengths": "认真对待关系，能很快察觉对方细小变化",
        "reasonDetail": "改约、「我很忙」、对意见的反对、拉开距离的举动",
        "frequentSaying": "「你不是开始讨厌我了吧？」",
        "changeTips": "读成拒绝时，先用事实确认：「这真是拒绝，还是只是情况？」\n直接问：「刚才那句话听起来像拒绝，你是那个意思吗？」\n用拒绝感话语之后对方的行动（联系、约定）来核实",
        "oneLiner": "听起来像拒绝的话，真的是拒绝吗？确认一次就好。多数时候是心里的解读更大",
        "shareLine": "为什么总被恋人的一句闲话伤到？结果：拒绝敏感型 🚪 把闲话读成推开信号……真的好你啊 把结果发我"
      },
      {
        "title": "没说出口的期待落空而委屈的人，期待落差型 🎨",
        "typeName": "期待落差型",
        "realReason": "期待对方会有的反应，和实际反应之间的缝隙成了伤口",
        "shortDescription": "伤到你的不是那句话。是期待的反应没有出现，那道缝隙成了委屈。",
        "description": "会注意到我、会站在我这边、会先照顾我——这些期待没说出口就堆着。恋人不知道期待存在就走过了，你却用「为什么不懂我」受伤。把期待说出来，委屈就会变小。",
        "keywords": "没说出口的期待、会注意到我的相信、反应的缝隙、委屈",
        "strengths": "对关系有清晰标准，很想深深地给予和接受爱",
        "reasonDetail": "没有被看见时、没有站在你这边时、没有先照顾你时",
        "frequentSaying": "「这点总该懂吧？」",
        "changeTips": "委屈时先确认：这个期待我有没有跟恋人说过？\n把期待改成请求句：「这种时候，你这样对我就好」\n先想出恋人做过的三件事，再谈可惜的地方",
        "oneLiner": "期待不说就不会传到。改成请求，委屈就会变成对话",
        "shareLine": "为什么总被恋人的一句闲话伤到？结果：期待落差型 🎨 不是话，是期待的反应没来才委屈……好你啊哈哈 你也测"
      },
      {
        "title": "堆积的疲惫触到极限的人，疲劳叠加型 🔋",
        "typeName": "疲劳叠加型",
        "realReason": "已经很累了，小小一句话成了最后一滴",
        "shortDescription": "你不是对语言脆弱。是堆积的疲惫让心理余量见底，一句话刚好落在那里。",
        "description": "平时能笑着过去的话，连着几天累透时会大到想哭。决定反应大小的，往往是心里还剩多少余量，而不是话本身有多大。看看受伤那天的状态，反应就会不一样。",
        "keywords": "最后一滴、没有余量、状态、眼泪、极限",
        "strengths": "责任感强，做事踏实，忍耐力大",
        "reasonDetail": "疲惫的日子、忙碌的时期、连着几天没休息时听到的话",
        "frequentSaying": "「最近太累了，明明没什么事也很难受」",
        "changeTips": "累的日子把重要对话往后推，说「今天状态不好，明天再谈」\n受伤瞬间先检查：今天我到底累到什么程度？\n把睡眠、吃饭、休息时间先排进日程，给心里留余量\n如果疲劳和提不起劲持续很久，影响日常动力、睡眠或饮食，不要一个人硬扛，请找心理咨询专业人士或当地精神健康服务聊聊",
        "oneLiner": "伤口不是按话的大小长，而是按你余量的大小长。先休息，是最快的盾",
        "shareLine": "为什么总被恋人的一句闲话伤到？结果：疲劳叠加型 🔋 堆积的疲惫上，一句话成了最后一滴……好你啊哈哈 你是哪一型？"
      },
      {
        "title": "一句话就晃动自我价值的人，自尊晃动型 🪞",
        "typeName": "自尊晃动型",
        "realReason": "把恋人的话当成「我不够好」的证据",
        "shortDescription": "你不是单纯被话伤到。你是在那句话里读出了「我是不够好的人」。",
        "description": "「看起来累」变成「我是不是很差」，「好像不太行」变成「我的意见没价值吗」，「太敏感」变成「我是不是有问题」。伤口的本质，是那句话碰到了自尊的位置，而不只是内容本身。把对方的话和自己的价值分开，心就会轻一些。",
        "keywords": "我不够好、价值晃动、结论跳跃、自我评价、萎缩",
        "strengths": "谦逊，会反思自己的行为，对他人细心体贴",
        "reasonDetail": "对外貌、意见、性格的细小评价或指摘",
        "frequentSaying": "「是不是因为我不够好？」",
        "changeTips": "受伤时区分：「这句话是在定义我的价值，还是只针对这一刻？」\n不管恋人怎么说，先写下自己的三个优点并反复看\n对卡住的话直接问：「刚才那句是什么意思？」\n如果「我不够好」的想法不仅在恋爱里，在日常也经常很强，请和心理咨询专业人士聊聊",
        "oneLiner": "一句话定不了你的价值。练习把话和自己分开，会成为心里的盾",
        "shareLine": "为什么总被恋人的一句闲话伤到？结果：自尊晃动型 🪞 把一句话读成「我不够好」的证据……好你啊 测完告诉我"
      }
    ]
  },
  "zh-TW": {
    "meta": {
      "title": "為什麼總被戀人的一句閒話傷到？",
      "description": "明明沒什麼意思的一句話，為什麼心會突然一沉？用10個情境找出你受傷的真正原因，以及怎樣守住內心。",
      "tags": [
        "戀愛傷口",
        "戀愛心理"
      ]
    },
    "questions": [
      {
        "q": "戀人在約定地點看見你，說「你今天看起來有點累」。你會？",
        "opts": [
          "心突然一沉——是不是不太想見我？",
          "今天約會特意打扮過，沒被看見有點委屈",
          "最近一直很累，這句話像最後一擊，心裡湧上來",
          "是不是自己看起來很差，鏡子總忍不住看"
        ]
      },
      {
        "q": "戀人笑著說「你不就這樣嘛」。你會？",
        "opts": [
          "不是自己期待的那種溫暖回應，期待被折斷了",
          "身心都累了一整天，這句話顯得特別大，快要哭出來",
          "聽起來像「你總是不夠好」，心情沉下去",
          "以前聽過類似的話，記憶浮上來，當時的情緒原樣回來"
        ]
      },
      {
        "q": "戀人聽你說話時「哦，是嗎？」然後看手機。你會？",
        "opts": [
          "疲憊的一天結束，連這種小反應都像觸到極限",
          "覺得自己的話題無聊對方才收回關注，自尊往下掉",
          "和以前說話被無視的畫面重疊，胸口一緊",
          "像在暗示我的話不重要，不想再繼續說了"
        ]
      },
      {
        "q": "戀人對你的意見隨口說「這好像不太行」。你會？",
        "opts": [
          "聽起來像意見沒價值，整個人縮起來",
          "想起以前發表意見被無視，話卡在嘴裡",
          "像意見被拒了，心門瞬間關上",
          "本期待對方站在自己這邊，落空了就委屈"
        ]
      },
      {
        "q": "戀人說「這種事你自己處理就行」。你會？",
        "opts": [
          "想起以前聽著類似的話一個人扛的日子，心裡發沉",
          "連求助本身都像被拒絕，下次更難開口",
          "以為戀人會先照顧自己，期待落空很委屈",
          "已經很累，這句話讓心一下子垮掉"
        ]
      },
      {
        "q": "戀人發消息「我現在忙，晚點再說」。你會？",
        "opts": [
          "連著幾天的疲憊，這句話讓人心軟到想哭",
          "知道對方忙，卻仍想自己是不是不重要，自尊晃動",
          "話還沒說就被推開，像被拒絕的感覺",
          "明明是重要的事，以為對方會懂，結果沒有，很委屈"
        ]
      },
      {
        "q": "戀人說「你最近是不是有點敏感」。你會？",
        "opts": [
          "是不是自己總是有問題，整個人變小",
          "以前戀愛也聽過「敏感」，記憶浮上來心裡疼",
          "期待對方理解自己，卻得到指責，很失望",
          "最近已經很累，這句話讓人更累，眼淚出來"
        ]
      },
      {
        "q": "合影時戀人沒坐在你旁邊，而是坐到別處。你會？",
        "opts": [
          "和以前被冷落的畫面重疊，心像凍住",
          "像疏遠的信號，被拒絕的感覺讓心一沉",
          "一整天的疲憊疊加，連這種小事情緒也會垮",
          "是不是不想坐我旁邊的人，自尊往下掉"
        ]
      },
      {
        "q": "戀人說「你就理解一下吧」。你會？",
        "opts": [
          "自己的心情總被往後推，還沒開口心就關了",
          "以為戀人會先體諒自己，期待落空很委屈",
          "自己的情緒不值得被理解嗎，整個人變小",
          "想起以前總是自己在理解的一方，心裡堵得慌"
        ]
      },
      {
        "q": "正想對戀人說「剛才那句話傷到我了」，最接近你的真心是？",
        "opts": [
          "怕說了會被當成達不到期待的人，先擔心對方反應",
          "說了大概也會被輕輕帶過，連開口的力氣都沒有",
          "想起以前說過反而更受傷，於是猶豫",
          "怕說了會被拒絕，話卡在喉嚨裡"
        ]
      }
    ],
    "results": [
      {
        "title": "舊記憶疊到當下話語上的人，過去觸發型 🕰️",
        "typeName": "過去觸發型",
        "realReason": "眼前這句話觸到從前的痛點，當時的情緒一起湧上來",
        "shortDescription": "你不是太敏感。眼前這句話按下了舊日傷痛的按鈕，當時的情緒一起回來了。",
        "description": "戀人毫無惡意，可你的心一瞬間回到過去相似的場景。比起眼前這句話，那時的情緒反應更大，所以反應會顯得比場面誇張。察覺到這條連線，傷口就會變小。",
        "keywords": "記憶按鈕、相似場面、當時的情緒、過去與現在的重疊、反應變大",
        "strengths": "記憶深刻，善於從經驗中學習，情感細膩",
        "reasonDetail": "與從前聽過的話相似的表達、相似的情境",
        "frequentSaying": "「以前也聽過類似的話……」",
        "changeTips": "心一沉時先問自己：「是因為現在這句話，還是因為舊記憶？」\n對戀人說：「那句話觸到了我以前的記憶」並一起說明原因\n用兩行寫下過去場面和現在場面的不同，把當下分開\n如果舊記憶經常湧上來，讓日常或關係很辛苦，請和心理諮詢專業人士一起安全地整理那些記憶",
        "oneLiner": "把眼前的話和那時的記憶分開，心的尺寸就會回到現實大小",
        "shareLine": "為什麼總被戀人的一句閒話傷到？結果：過去觸發型 🕰️ 眼前這句話會按下舊記憶按鈕……好你啊哈哈 一起測，你出什麼？"
      },
      {
        "title": "感覺像被拒絕就僵住的人，拒絕敏感型 🚪",
        "typeName": "拒絕敏感型",
        "realReason": "把細小的言行讀成「對方在推開我」的信號",
        "shortDescription": "你不是太敏感。你只是對拒絕信號特別靈敏的心天線開得很高。",
        "description": "「晚點再說」「我忙」「好像不太行」——在你聽來像「我不想要你」。心瞬間關上，下次更難開口。對拒絕敏感，也是珍惜關係的另一種樣子。",
        "keywords": "被推開、拒絕信號、心門關上、難以開口、天線",
        "strengths": "認真對待關係，能很快察覺對方細小變化",
        "reasonDetail": "改約、「我很忙」、對意見的反對、拉開距離的舉動",
        "frequentSaying": "「你不是開始討厭我了吧？」",
        "changeTips": "讀成拒絕時，先用事實確認：「這真是拒絕，還是隻是情況？」\n直接問：「剛才那句話聽起來像拒絕，你是那個意思嗎？」\n用拒絕感話語之後對方的行動（聯繫、約定）來核實",
        "oneLiner": "聽起來像拒絕的話，真的是拒絕嗎？確認一次就好。多數時候是心裡的解讀更大",
        "shareLine": "為什麼總被戀人的一句閒話傷到？結果：拒絕敏感型 🚪 把閒話讀成推開信號……真的好你啊 把結果發我"
      },
      {
        "title": "沒說出口的期待落空而委屈的人，期待落差型 🎨",
        "typeName": "期待落差型",
        "realReason": "期待對方會有的反應，和實際反應之間的縫隙成了傷口",
        "shortDescription": "傷到你的不是那句話。是期待的反應沒有出現，那道縫隙成了委屈。",
        "description": "會注意到我、會站在我這邊、會先照顧我——這些期待沒說出口就堆著。戀人不知道期待存在就走過了，你卻用「為什麼不懂我」受傷。把期待說出來，委屈就會變小。",
        "keywords": "沒說出口的期待、會注意到我的相信、反應的縫隙、委屈",
        "strengths": "對關係有清晰標準，很想深深地給予和接受愛",
        "reasonDetail": "沒有被看見時、沒有站在你這邊時、沒有先照顧你時",
        "frequentSaying": "「這點總該懂吧？」",
        "changeTips": "委屈時先確認：這個期待我有沒有跟戀人說過？\n把期待改成請求句：「這種時候，你這樣對我就好」\n先想出戀人做過的三件事，再談可惜的地方",
        "oneLiner": "期待不說就不會傳到。改成請求，委屈就會變成對話",
        "shareLine": "為什麼總被戀人的一句閒話傷到？結果：期待落差型 🎨 不是話，是期待的反應沒來才委屈……好你啊哈哈 你也測"
      },
      {
        "title": "堆積的疲憊觸到極限的人，疲勞疊加型 🔋",
        "typeName": "疲勞疊加型",
        "realReason": "已經很累了，小小一句話成了最後一滴",
        "shortDescription": "你不是對語言脆弱。是堆積的疲憊讓心理餘量見底，一句話剛好落在那裡。",
        "description": "平時能笑著過去的話，連著幾天累透時會大到想哭。決定反應大小的，往往是心裡還剩多少餘量，而不是話本身有多大。看看受傷那天的狀態，反應就會不一樣。",
        "keywords": "最後一滴、沒有餘量、狀態、眼淚、極限",
        "strengths": "責任感強，做事踏實，忍耐力大",
        "reasonDetail": "疲憊的日子、忙碌的時期、連著幾天沒休息時聽到的話",
        "frequentSaying": "「最近太累了，明明沒什麼事也很難受」",
        "changeTips": "累的日子把重要對話往後推，說「今天狀態不好，明天再談」\n受傷瞬間先檢查：今天我到底累到什麼程度？\n把睡眠、吃飯、休息時間先排進日程，給心裡留餘量\n如果疲勞和提不起勁持續很久，影響日常動力、睡眠或飲食，不要一個人硬扛，請找心理諮詢專業人士或當地精神健康服務聊聊",
        "oneLiner": "傷口不是按話的大小長，而是按你餘量的大小長。先休息，是最快的盾",
        "shareLine": "為什麼總被戀人的一句閒話傷到？結果：疲勞疊加型 🔋 堆積的疲憊上，一句話成了最後一滴……好你啊哈哈 你是哪一型？"
      },
      {
        "title": "一句話就晃動自我價值的人，自尊晃動型 🪞",
        "typeName": "自尊晃動型",
        "realReason": "把戀人的話當成「我不夠好」的證據",
        "shortDescription": "你不是單純被話傷到。你是在那句話裡讀出了「我是不夠好的人」。",
        "description": "「看起來累」變成「我是不是很差」，「好像不太行」變成「我的意見沒價值嗎」，「太敏感」變成「我是不是有問題」。傷口的本質，是那句話碰到了自尊的位置，而不只是內容本身。把對方的話和自己的價值分開，心就會輕一些。",
        "keywords": "我不夠好、價值晃動、結論跳躍、自我評價、萎縮",
        "strengths": "謙遜，會反思自己的行為，對他人細心體貼",
        "reasonDetail": "對外貌、意見、性格的細小評價或指摘",
        "frequentSaying": "「是不是因為我不夠好？」",
        "changeTips": "受傷時區分：「這句話是在定義我的價值，還是隻針對這一刻？」\n不管戀人怎麼說，先寫下自己的三個優點並反覆看\n對卡住的話直接問：「剛才那句是什麼意思？」\n如果「我不夠好」的想法不僅在戀愛裡，在日常也經常很強，請和心理諮詢專業人士聊聊",
        "oneLiner": "一句話定不了你的價值。練習把話和自己分開，會成為心裡的盾",
        "shareLine": "為什麼總被戀人的一句閒話傷到？結果：自尊晃動型 🪞 把一句話讀成「我不夠好」的證據……好你啊 測完告訴我"
      }
    ]
  },
  "vi": {
    "meta": {
      "title": "Tại sao lại tổn thương vì lời nói vụn vặt của người yêu?",
      "description": "Chỉ là một câu chẳng có ý gì — sao tim lại thắt lại? 10 tình huống giúp bạn tìm ra lý do thật sự và cách giữ lấy trái tim mình.",
      "tags": [
        "Vết thương tình yêu",
        "Tâm lý tình yêu"
      ]
    },
    "questions": [
      {
        "q": "Họ nhìn bạn ở chỗ hẹn rồi nói \"Hôm nay trông mệt quá\". Bạn...",
        "opts": [
          "Tim thắt lại — có phải họ không vui khi gặp mình?",
          "Đã chăm chút cho buổi hẹn mà không được để ý, thấy tiếc",
          "Mấy hôm nay đã kiệt sức — câu đó như đòn cuối, nghẹn lên",
          "Sợ mình trông kém, cứ muốn nhìn gương"
        ]
      },
      {
        "q": "Họ cười nói \"Cậu lúc nào cũng vậy mà\". Bạn...",
        "opts": [
          "Không phải phản ứng ấm áp mình mong — kỳ vọng bị gãy",
          "Ngày mệt cả người lẫn tâm, câu này đập mạnh tới mức muốn khóc",
          "Nghe như \"cậu lúc nào cũng thiếu sót\", lòng chùng xuống",
          "Nhớ câu tương tự ngày trước, cảm xúc cũ trồi lên nguyên si"
        ]
      },
      {
        "q": "Họ nghe bạn nói rồi \"À vậy à?\" rồi nhìn điện thoại. Bạn...",
        "opts": [
          "Cuối ngày mệt mỏi, phản ứng nhỏ cũng như chạm ngưỡng",
          "Cảm giác chuyện mình chán nên họ rút sự chú ý — lòng tự trọng tụt",
          "Chồng lên cảnh từng bị bỏ mặc giữa câu chuyện, ngực thắt",
          "Như tín hiệu lời mình không quan trọng, không muốn nói tiếp"
        ]
      },
      {
        "q": "Họ nhẹ nhàng nói về ý kiến bạn \"Hình như không ổn\". Bạn...",
        "opts": [
          "Nghe như ý kiến mình vô giá trị, co lại",
          "Nhớ lần từng lên tiếng rồi bị bỏ qua, cứng họng",
          "Như ý kiến bị từ chối — cánh cửa lòng đóng sầm một nhịp",
          "Mong họ đứng về mình, lệch kỳ vọng nên tiếc"
        ]
      },
      {
        "q": "Họ nói \"Cỡ đó tự xử đi\". Bạn...",
        "opts": [
          "Nhớ những lần nghe câu tương tự rồi một mình gánh, lòng nặng",
          "Ngay cả xin giúp cũng như bị từ chối — lần sau khó mở miệng hơn",
          "Nghĩ người yêu sẽ chăm trước — lệch kỳ vọng nên tiếc",
          "Đã mệt sẵn, câu đó làm lòng sụp đổ một lần"
        ]
      },
      {
        "q": "Họ nhắn \"Đang bận, nói sau nhé\". Bạn...",
        "opts": [
          "Mệt chồng vài ngày — câu này yếu lòng đến muốn khóc",
          "Biết họ bận nhưng vẫn nghĩ mình không quan trọng — lòng tự trọng rung",
          "Như bị đẩy sang trước khi kịp nói — cảm giác bị từ chối",
          "Chuyện quan trọng, mong họ hiểu — không thì tiếc"
        ]
      },
      {
        "q": "Họ nói \"Dạo này cậu hơi nhạy cảm\". Bạn...",
        "opts": [
          "Mình lúc nào cũng là người có vấn đề sao — thấy mình nhỏ lại",
          "Nhớ mối quan hệ cũ cũng bị bảo nhạy cảm, lòng đau",
          "Mong được hiểu thì lại bị chỉ trích — thất vọng",
          "Đã mệt sẵn — câu này càng mệt và nước mắt ứa"
        ]
      },
      {
        "q": "Trong ảnh nhóm họ ngồi chỗ khác, không cạnh bạn. Bạn...",
        "opts": [
          "Chồng lên cảnh từng bị bỏ rơi, lòng đông cứng",
          "Như tín hiệu tránh xa — cảm giác từ chối làm tim thắt",
          "Mệt cả ngày khiến chuyện nhỏ cũng làm cảm xúc sụp",
          "Mình không phải người họ muốn ngồi cạnh sao — lòng tự trọng tụt"
        ]
      },
      {
        "q": "Họ nói \"Cậu thông cảm đi\". Bạn...",
        "opts": [
          "Lòng mình luôn bị đẩy lùi — chưa kịp xin thì đã đóng cửa",
          "Mong người yêu đọc lòng mình trước — lệch nên tiếc",
          "Cảm xúc mình không đáng được hiểu sao — thấy mình nhỏ",
          "Nhớ mình luôn là bên thông cảm, lòng nghẹn"
        ]
      },
      {
        "q": "Sắp nói \"Câu vừa rồi làm mình tổn thương\". Điều gần lòng nhất là?",
        "opts": [
          "Sợ nói ra sẽ thành người không đạt kỳ vọng — lo phản ứng họ trước",
          "Nói cũng bị bỏ qua nhẹ — hết sức để mở miệng",
          "Nhớ lần nói ra rồi càng đau hơn nên do dự",
          "Sợ bị từ chối nên lời dừng ở cổ họng"
        ]
      }
    ],
    "results": [
      {
        "title": "Người có ký ức cũ chồng lên lời hôm nay, Kiểu kích hoạt quá khứ 🕰️",
        "typeName": "Kiểu kích hoạt quá khứ",
        "realReason": "Một câu hôm nay chạm cảnh đau cũ và cảm xúc lúc ấy trồi lên",
        "shortDescription": "Bạn không \"quá nhạy cảm\". Câu hôm nay nhấn nút ký ức cũ, và cảm xúc lúc ấy cùng trồi lên.",
        "description": "Họ chẳng có ý gì — nhưng lòng bạn nhảy về cảnh tương tự trong quá khứ. Cảm xúc cũ phản ứng lớn hơn lời hôm nay, nên phản ứng trông lớn hơn tình huống. Nhận ra mối nối này, vết thương sẽ nhỏ lại.",
        "keywords": "Nút ký ức, Cảnh tương tự, Cảm xúc lúc ấy, Chồng quá khứ-hiện tại, Phản ứng lớn",
        "strengths": "Ký ức sâu, học từ trải nghiệm tốt, cảm xúc tinh tế",
        "reasonDetail": "Cách nói hoặc tình huống giống những gì từng nghe",
        "frequentSaying": "\"Trước đây cũng từng nghe câu kiểu này...\"",
        "changeTips": "Khi tim thắt, hỏi trước: \"Vì câu hôm nay — hay vì ký ức cũ?\"\nNói với họ: \"Câu đó chạm ký ức cũ của mình\" và chia sẻ lý do\nViết hai dòng khác biệt giữa cảnh cũ và cảnh nay để tách hiện tại\nNếu ký ức cũ thường trồi lên làm nặng đời sống hoặc mối quan hệ, hãy sắp xếp an toàn cùng chuyên gia tư vấn tâm lý",
        "oneLiner": "Tách lời hôm nay khỏi ký ức lúc ấy, kích thước lòng sẽ về đúng kích thước thực tế",
        "shareLine": "Tại sao lại tổn thương vì lời nói vụn vặt của người yêu? Kết quả: Kiểu kích hoạt quá khứ 🕰️ Hình như câu hôm nay nhấn nút ký ức cũ... đúng bạn luôn haha thử đi — ra gì?"
      },
      {
        "title": "Người đông cứng khi nghe như bị từ chối, Kiểu nhạy từ chối 🚪",
        "typeName": "Kiểu nhạy từ chối",
        "realReason": "Bạn đọc lời nói hoặc hành vi nhỏ thành tín hiệu đang bị đẩy ra",
        "shortDescription": "Bạn không \"quá nhạy cảm\". Ăng-ten trong lòng với tín hiệu từ chối chỉ được chỉnh cao.",
        "description": "\"Nói sau\", \"đang bận\", \"không chắc ổn\" — với bạn nghe như \"không muốn cậu\". Lòng đóng nhanh và lần sau khó mở miệng hơn. Sự nhạy với từ chối cũng là một mặt khác của việc trân trọng mối quan hệ.",
        "keywords": "Bị đẩy ra, Tín hiệu từ chối, Lòng đóng lại, Khó mở miệng, Ăng-ten",
        "strengths": "Nghiêm túc với mối quan hệ và nhanh bắt được thay đổi nhỏ của đối phương",
        "reasonDetail": "Dời hẹn, câu \"đang bận\", phản đối ý kiến, hành vi tạo khoảng cách",
        "frequentSaying": "\"Không phải bắt đầu không thích mình chứ?\"",
        "changeTips": "Khi đọc thành từ chối, kiểm sự thật: \"Đây thật sự là từ chối — hay chỉ là hoàn cảnh?\"\nHỏi thẳng: \"Câu vừa rồi nghe như từ chối — có phải ý đó không?\"\nXác nhận bằng hành động sau đó của họ (tin nhắn, lời hẹn)",
        "oneLiner": "Kiểm một lần xem câu nghe như từ chối có thật là từ chối không. Thường cách đọc trong lòng lớn hơn",
        "shareLine": "Tại sao lại tổn thương vì lời nói vụn vặt của người yêu? Kết quả: Kiểu nhạy từ chối 🚪 Hình như đọc lời nhỏ thành tín hiệu đẩy ra... đúng bạn luôn. Gửi kết quả cho mình"
      },
      {
        "title": "Người tiếc khi kỳ vọng chưa nói bị lệch, Kiểu lệch kỳ vọng 🎨",
        "typeName": "Kiểu lệch kỳ vọng",
        "realReason": "Khoảng cách giữa phản ứng bạn mong và phản ứng thật trở thành vết thương",
        "shortDescription": "Không phải lời nói làm bạn tổn thương. Khoảng trống khi phản ứng mong đợi không tới mới thành tiếc.",
        "description": "Kỳ vọng họ sẽ để ý, đứng về mình, chăm trước — chồng chất mà chưa nói. Họ không biết kỳ vọng tồn tại rồi đi qua; bạn bị thương vì \"sao không hiểu\". Đưa kỳ vọng thành lời, nỗi tiếc sẽ nhỏ lại.",
        "keywords": "Kỳ vọng chưa nói, Tin họ sẽ để ý, Khoảng cách phản ứng, Tiếc nuối",
        "strengths": "Chuẩn mực rõ về mối quan hệ và mong muốn cho-nhận tình yêu sâu",
        "reasonDetail": "Khi không được để ý, không được đứng về phía, không được chăm trước",
        "frequentSaying": "\"Chuyện này cũng phải hiểu chứ?\"",
        "changeTips": "Khi tiếc, hỏi trước: mình đã nói kỳ vọng này với họ chưa?\nĐổi thành câu yêu cầu: \"Lúc thế này, mình muốn bạn làm vậy\"\nNhắc ba việc họ đã làm trước khi nói điểm còn thiếu",
        "oneLiner": "Kỳ vọng không nói thì không tới. Đổi thành yêu cầu, tiếc sẽ thành đối thoại",
        "shareLine": "Tại sao lại tổn thương vì lời nói vụn vặt của người yêu? Kết quả: Kiểu lệch kỳ vọng 🎨 Hình như không phải lời — mà phản ứng mong đợi không tới... đúng bạn luôn haha thử đi"
      },
      {
        "title": "Người mệt chồng chất chạm ngưỡng, Kiểu mệt tích tụ 🔋",
        "typeName": "Kiểu mệt tích tụ",
        "realReason": "Bạn đã kiệt sẵn nên một câu nhỏ thành giọt cuối",
        "shortDescription": "Bạn không yếu với lời nói. Mệt tích tụ làm cạn dư lượng lòng, và một câu vừa chạm vào đó.",
        "description": "Câu bình thường cười qua được, sau vài ngày mệt mỏi lại lớn tới mức muốn khóc. Độ lớn phản ứng theo dư lượng lòng còn lại nhiều hơn theo độ lớn của lời. Kiểm trạng thái ngày tổn thương thì phản ứng sẽ khác.",
        "keywords": "Giọt cuối, Hết dư lượng, Tình trạng, Nước mắt, Ngưỡng",
        "strengths": "Trách nhiệm cao, làm việc chăm chỉ, sức chịu đựng lớn",
        "reasonDetail": "Lời nghe vào ngày mệt, mùa bận, hoặc sau nhiều ngày không nghỉ",
        "frequentSaying": "\"Dạo này mệt quá, chuyện nhỏ cũng thấy nặng\"",
        "changeTips": "Ngày mệt hãy hoãn chuyện lớn: \"Hôm nay trạng thái kém — mai nói nhé\"\nKhi tổn thương, kiểm trước: hôm nay mình mệt tới mức nào?\nXếp ngủ, ăn, nghỉ vào lịch trước để tạo dư lượng lòng\nNếu mệt và mất động lực kéo dài, ảnh hưởng ý chí, ngủ hoặc ăn, đừng gánh một mình — hãy nói với chuyên gia tư vấn tâm lý hoặc dịch vụ sức khỏe tâm thần địa phương",
        "oneLiner": "Vết thương lớn theo dư lượng lòng, không theo độ lớn lời nói. Nghỉ trước là tấm khiên nhanh nhất",
        "shareLine": "Tại sao lại tổn thương vì lời nói vụn vặt của người yêu? Kết quả: Kiểu mệt tích tụ 🔋 Hình như một câu thành giọt cuối trên mệt chồng... đúng bạn luôn haha bạn kiểu nào?"
      },
      {
        "title": "Người giá trị bản thân rung vì một câu, Kiểu lung lay lòng tự trọng 🪞",
        "typeName": "Kiểu lung lay lòng tự trọng",
        "realReason": "Bạn nhận lời của họ như bằng chứng \"mình không đủ\"",
        "shortDescription": "Bạn không chỉ \"bị lời làm tổn thương\". Bạn đang đọc ra \"mình không đủ\" từ câu đó.",
        "description": "\"Trông mệt\" thành \"mình kém chăng\", \"không ổn\" thành \"ý kiến mình vô giá trị chăng\", \"nhạy cảm\" thành \"mình có vấn đề chăng\". Bản chất vết thương là chỗ câu đó chạm lòng tự trọng hơn là nội dung. Tách lời họ khỏi giá trị của bạn thì lòng sẽ nhẹ.",
        "keywords": "Mình không đủ, Giá trị lung lay, Nhảy kết luận, Tự đánh giá, Co lại",
        "strengths": "Khiêm tốn, biết nhìn lại hành vi mình, tinh tế với người khác",
        "reasonDetail": "Nhận xét hay chỉ trích nhỏ về ngoại hình, ý kiến, tính cách",
        "frequentSaying": "\"Phải chăng vì mình không được tốt?\"",
        "changeTips": "Khi tổn thương, tách: \"Câu này định giá trị mình — hay chỉ nói về một khoảnh khắc?\"\nViết ba điểm mạnh không phụ thuộc lời họ và đọc lại\nVới câu bị kẹt, hỏi thẳng: \"Câu vừa rồi ý là gì?\"\nNếu nghĩ \"mình không đủ\" mạnh không chỉ trong yêu mà cả đời sống, hãy nói với chuyên gia tư vấn tâm lý",
        "oneLiner": "Một câu không định giá trị bạn. Luyện tách lời và mình sẽ thành tấm khiên cho lòng",
        "shareLine": "Tại sao lại tổn thương vì lời nói vụn vặt của người yêu? Kết quả: Kiểu lung lay lòng tự trọng 🪞 Hình như đọc một câu thành bằng chứng mình không đủ... đúng bạn luôn. Thử rồi báo mình"
      }
    ]
  },
  "id": {
    "meta": {
      "title": "Kenapa Sakit Hati karena Omongan Sepele Pacar?",
      "description": "Cuma satu kalimat tanpa makna besar — kenapa hati langsung turun? Lewat 10 situasi, temukan alasan sejati kenapa kamu terluka, dan cara menjaga hatimu.",
      "tags": [
        "Luka Pacaran",
        "Psikologi Pacaran"
      ]
    },
    "questions": [
      {
        "q": "Mereka melihatmu di tempat janji lalu bilang, \"Kamu kelihatan capek hari ini.\" Kamu...",
        "opts": [
          "Hati langsung turun — mungkin mereka tidak senang ketemu kamu",
          "Sudah berhias untuk kencan, sedih karena tidak diperhatikan",
          "Belakangan sudah lelah terus — kalimat itu seperti pukulan terakhir dan kamu hampir menangis",
          "Takut kelihatan jelek, terus saja ingin cek cermin"
        ]
      },
      {
        "q": "Mereka tertawa dan bilang, \"Ya emang kamu gitu.\" Kamu...",
        "opts": [
          "Bukan respons hangat yang kamu harapkan — ekspektasi patah",
          "Seharian tubuh dan hati capek, jadi kalimat ini terasa lebih besar sampai ingin menangis",
          "Kedengarannya seperti \"kamu selalu kurang,\" dan mood turun",
          "Ingatan mendengar kalimat mirip dulu muncul, dan perasaan lama ikut naik"
        ]
      },
      {
        "q": "Sambil mendengarkan, mereka bilang \"Oh, gitu?\" lalu cek HP. Kamu...",
        "opts": [
          "Akhir hari yang melelahkan, bahkan reaksi kecil ini terasa seperti batasmu",
          "Seolah ceritamu membosankan sehingga perhatian mereka hilang — harga diri turun",
          "Tumpang tindih dengan momen dulu diabaikan di tengah bicara, dada berdebar jelek",
          "Seperti sinyal kata-katamu tidak penting, jadi tidak ingin lanjut bicara"
        ]
      },
      {
        "q": "Mereka bilang ringan tentang pendapatmu, \"Kayaknya kurang deh.\" Kamu...",
        "opts": [
          "Kedengarannya pendapatmu tidak berharga, dan kamu menyusut",
          "Ingatan pernah bicara lalu diabaikan muncul, mulut terkunci",
          "Terasa seperti pendapat ditolak — pintu hati menutup sejenak",
          "Berharap mereka berpihak, tapi meleset jadi menyakitkan"
        ]
      },
      {
        "q": "Mereka bilang, \"Segitu mah kerjain sendiri aja.\" Kamu...",
        "opts": [
          "Waktu dulu mendengar kalimat mirip sambil menanggung sendiri muncul, hati berat",
          "Bahkan minta bantuan terasa ditolak — lain kali lebih sulit membuka mulut",
          "Kira pacar akan menjaga dulu — beda ekspektasi jadi menyakitkan",
          "Sudah kelelahan, jadi kalimat itu membuat hati ambruk sekaligus"
        ]
      },
      {
        "q": "Mereka chat, \"Aku lagi sibuk, nanti aja ngobrolnya.\" Kamu...",
        "opts": [
          "Kelelahan menumpuk beberapa hari — kalimat ini melemahkan sampai ingin menangis",
          "Paham mereka sibuk, tapi merasa tidak penting — harga diri goyah",
          "Seolah didorong sebelum sempat bicara — rasa ditolak",
          "Penting, dan kamu berharap mereka paham — ternyata tidak, jadi sedih"
        ]
      },
      {
        "q": "Mereka bilang, \"Akhir-akhir ini kamu agak sensitif ya.\" Kamu...",
        "opts": [
          "Merasa kecil — apakah aku selalu orang bermasalah?",
          "Ingatan hubungan lama juga dibilang sensitif muncul, hati sakit",
          "Berharap dipahami, malah dapat kritik — kecewa",
          "Sudah lelah belakangan — kalimat itu membuat semakin lelah sampai menangis"
        ]
      },
      {
        "q": "Di foto grup mereka duduk di tempat lain, bukan di sampingmu. Kamu...",
        "opts": [
          "Tumpang tindih dengan adegan dulu merasa tersisih, hati membeku",
          "Seperti sinyal menjauh — rasa ditolak membuat hati turun",
          "Kelelahan seharian membuat hal kecil ini pun meruntuhkan emosi",
          "Apakah aku bukan orang yang ingin diduduki di samping — harga diri turun"
        ]
      },
      {
        "q": "Mereka bilang, \"Kamu aja yang ngertiin.\" Kamu...",
        "opts": [
          "Perasaanmu selalu terdorong ke belakang — hati menutup sebelum sempat meminta",
          "Berharap pacar membaca hatimu dulu — meleset jadi menyakitkan",
          "Apakah emosiku tidak cukup berharga untuk dipahami — merasa kecil",
          "Ingatan selalu jadi pihak yang mengerti muncul, dada sesak"
        ]
      },
      {
        "q": "Hampir bilang \"Omonganmu barusan menyakitiku.\" Yang paling dekat dengan hatimu?",
        "opts": [
          "Takut terlihat gagal memenuhi ekspektasi — reaksi mereka dikhawatirkan dulu",
          "Nanti juga disepelekan — tenaga untuk bicara pun tidak ada",
          "Ingatan dulu bicara malah lebih sakit membuat ragu",
          "Takut ditolak, jadi kata-kata berhenti di tenggorokan"
        ]
      }
    ],
    "results": [
      {
        "title": "Orang yang memori lamanya tumpang tindih dengan kata hari ini, Tipe Picu Masa Lalu 🕰️",
        "typeName": "Tipe Picu Masa Lalu",
        "realReason": "Satu kalimat hari ini menyentuh adegan lama yang sakit, dan perasaan itu naik lagi",
        "shortDescription": "Kamu tidak \"terlalu sensitif.\" Kalimat hari ini menekan tombol memori lama, dan perasaan saat itu ikut naik.",
        "description": "Mereka tidak bermaksud apa-apa — tapi hatimu meloncat ke adegan mirip di masa lalu. Emosi dulu bereaksi lebih besar dari kata hari ini, jadi respons terasa lebih besar dari situasinya. Menyadari tautan itu mengecilkan lukanya.",
        "keywords": "Tombol memori, Adegan mirip, Perasaan saat itu, Tumpang tindih lalu-sekarang, Reaksi membesar",
        "strengths": "Memori dalam, kuat belajar dari pengalaman, dan tekstur emosi yang halus",
        "reasonDetail": "Ungkapan atau situasi mirip yang pernah kamu dengar",
        "frequentSaying": "\"Dulu juga pernah dengar yang kayak gini...\"",
        "changeTips": "Saat hati turun, tanya dulu: \"Ini karena kata hari ini — atau memori lama?\"\nKatakan ke mereka: \"Itu menyentuh memori lama\" dan bagikan alasannya\nTulis dua baris beda adegan dulu dan sekarang untuk memisahkan masa kini\nJika memori lama sering naik dan memberatkan hidup atau hubungan, susun dengan aman bersama profesional konseling",
        "oneLiner": "Pisahkan kata hari ini dari memori saat itu, dan ukuran hati kembali ke ukuran nyata",
        "shareLine": "Kenapa sakit hati karena omongan sepele pacar? Hasil: Tipe Picu Masa Lalu 🕰️ Katanya kalimat hari ini tekan tombol memori lama... ini banget kamu wkwk coba — dapat apa?"
      },
      {
        "title": "Orang yang membeku saat terasa seperti penolakan, Tipe Sensitif Penolakan 🚪",
        "typeName": "Tipe Sensitif Penolakan",
        "realReason": "Kamu membaca kata atau tindakan kecil sebagai sinyal mereka mendorongmu pergi",
        "shortDescription": "Kamu tidak \"terlalu sensitif.\" Antena hati untuk sinyal penolakan memang disetel tinggi.",
        "description": "\"Nanti aja,\" \"lagi sibuk,\" \"kurang deh\" terdengar seperti \"aku tidak mau kamu.\" Hati menutup cepat dan lain kali semakin sulit membuka mulut. Kepekaan pada penolakan juga wajah lain dari menghargai hubungan.",
        "keywords": "Didorong, Sinyal penolakan, Hati menutup, Sulit bicara, Antena",
        "strengths": "Serius pada hubungan dan cepat menangkap perubahan kecil pada mereka",
        "reasonDetail": "Janji ditunda, \"lagi sibuk,\" menolak pendapat, perilaku menjauh",
        "frequentSaying": "\"Kamu nggak mulai benci aku kan?\"",
        "changeTips": "Saat terbaca penolakan, cek fakta: \"Ini benar penolakan — atau cuma keadaan?\"\nTanya langsung: \"Barusan kedengarannya kayak penolakan — emang itu maksudnya?\"\nPastikan lewat tindakan mereka setelahnya (chat, janji)",
        "oneLiner": "Cek sekali apakah kalimat yang terdengar seperti penolakan memang penolakan. Sering bacaan hati yang lebih besar",
        "shareLine": "Kenapa sakit hati karena omongan sepele pacar? Hasil: Tipe Sensitif Penolakan 🚪 Katanya aku baca omongan kecil sebagai sinyal dorong pergi... ini banget kamu. Kirim hasilmu"
      },
      {
        "title": "Orang yang sedih saat ekspektasi tak terucap meleset, Tipe Celah Ekspektasi 🎨",
        "typeName": "Tipe Celah Ekspektasi",
        "realReason": "Jarak antara reaksi yang kamu harapkan dan yang kamu dapat jadi lukanya",
        "shortDescription": "Bukan kata-katanya yang melukai. Celah karena reaksi yang diharapkan tidak datang jadi rasa sakit.",
        "description": "Ekspektasi mereka akan memperhatikan, berpihak, atau menjaga dulu menumpuk tanpa diucapkan. Mereka tidak tahu ekspektasi itu ada lalu lewat — kamu terluka dengan \"kenapa tidak paham.\" Mengubah ekspektasi jadi kata mengecilkan rasa sakit.",
        "keywords": "Ekspektasi tak terucap, Keyakinan akan diperhatikan, Celah reaksi, Rasa kecewa",
        "strengths": "Standar hubungan jelas dan keinginan besar memberi-menerima cinta secara dalam",
        "reasonDetail": "Saat tidak diperhatikan, tidak dibela, tidak dijaga lebih dulu",
        "frequentSaying": "\"Segitu harusnya paham dong?\"",
        "changeTips": "Saat sedih, cek dulu: sudahkah aku bilang ekspektasi ini ke mereka?\nUbah jadi kalimat permintaan: \"Kalau begini, aku senang kalau kamu lakukan itu\"\nSebut tiga hal yang mereka lakukan dulu sebelum bicara yang kurang",
        "oneLiner": "Ekspektasi yang tidak diucapkan tidak sampai. Ubah jadi permintaan, rasa sakit jadi percakapan",
        "shareLine": "Kenapa sakit hati karena omongan sepele pacar? Hasil: Tipe Celah Ekspektasi 🎨 Katanya bukan kata — tapi reaksi yang diharapkan tidak datang... ini banget kamu wkwk coba juga"
      },
      {
        "title": "Orang yang kelelahan menumpuk sampai batas, Tipe Tumpukan Lelah 🔋",
        "typeName": "Tipe Tumpukan Lelah",
        "realReason": "Kamu sudah lelah, jadi satu kalimat kecil jadi tetes terakhir",
        "shortDescription": "Kamu tidak lemah pada kata. Kelelahan menumpuk mengosongkan ruang hati, dan satu kalimat mendarat di situ.",
        "description": "Kalimat yang biasanya bisa ditertawakan terasa sebesar air mata setelah hari-hari kelelahan. Besarnya reaksi mengikuti sisa ruang hati lebih dari besarnya kata. Cek kondisi di hari sakit hati, dan reaksi akan berubah.",
        "keywords": "Tetes terakhir, Tanpa ruang, Kondisi, Air mata, Batas",
        "strengths": "Tanggung jawab kuat, mengerjakan dengan tekun, daya tahan tinggi",
        "reasonDetail": "Kata yang didengar di hari lelah, musim sibuk, atau setelah berhari-hari tanpa istirahat",
        "frequentSaying": "\"Akhir-akhir ini capek banget, yang sepele aja terasa berat\"",
        "changeTips": "Di hari lelah, tunda obrolan penting: \"Kondisiku kurang bagus hari ini — besok yuk\"\nSaat sakit hati, cek dulu: seberapa lelah aku hari ini?\nMasukkan tidur, makan, dan istirahat ke jadwal lebih dulu untuk membangun ruang hati\nJika kelelahan dan kehilangan semangat lama berlanjut hingga memengaruhi motivasi, tidur, atau makan, jangan tanggung sendiri — bicara dengan profesional konseling atau layanan kesehatan jiwa setempat",
        "oneLiner": "Luka tumbuh seukuran sisa ruang hatimu, bukan seukuran kata. Istirahat dulu adalah perisai tercepat",
        "shareLine": "Kenapa sakit hati karena omongan sepele pacar? Hasil: Tipe Tumpukan Lelah 🔋 Katanya satu kalimat jadi tetes terakhir di atas lelah yang menumpuk... ini banget kamu wkwk tipemu apa?"
      },
      {
        "title": "Orang yang rasa berharganya goyah karena satu kalimat, Tipe Goyah Harga Diri 🪞",
        "typeName": "Tipe Goyah Harga Diri",
        "realReason": "Kamu menerima kata mereka sebagai bukti \"aku kurang\"",
        "shortDescription": "Kamu tidak sekadar \"terluka oleh kata.\" Kamu membaca \"aku kurang\" dari kalimat itu.",
        "description": "\"Kelihatan capek\" jadi \"apakah aku jelek,\" \"kurang deh\" jadi \"apakah pendapatku tak berharga,\" \"sensitif\" jadi \"apakah aku bermasalah.\" Inti lukanya adalah titik di mana kalimat itu menyentuh harga diri, lebih dari isinya. Pisahkan kata mereka dari nilaimu, dan hati jadi lebih ringan.",
        "keywords": "Aku kurang, Nilai goyah, Lompat kesimpulan, Penilaian diri, Menyusut",
        "strengths": "Rendah hati, mampu meninjau tindakannya sendiri, dan peka pada orang lain",
        "reasonDetail": "Evaluasi atau komentar sepele tentang penampilan, pendapat, atau kepribadian",
        "frequentSaying": "\"Jangan-jangan karena aku memang kurang ya?\"",
        "changeTips": "Saat sakit hati, pisahkan: \"Apakah ini mendefinisikan nilaiku — atau hanya komentar satu momen?\"\nTulis tiga kelebihanmu independen dari kata mereka dan baca ulang\nUntuk kalimat yang mengganjal, tanya langsung: \"Barusan maksudnya apa?\"\nJika pikiran \"aku kurang\" kuat tidak hanya di pacaran tapi di hidup sehari-hari, bicara dengan profesional konseling",
        "oneLiner": "Satu kalimat tidak menentukan nilaimu. Latihan memisahkan kata dan diri menjadi perisai hati",
        "shareLine": "Kenapa sakit hati karena omongan sepele pacar? Hasil: Tipe Goyah Harga Diri 🪞 Katanya aku baca satu kalimat sebagai bukti aku kurang... ini banget kamu. Coba terus kabari"
      }
    ]
  }
};
