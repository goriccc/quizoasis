/** Auto-built from scripts/_anxious_when_loved_i18n/*.json — do not hand-edit */
export type Phase3AnxiousWhenLovedForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3AnxiousWhenLovedResultText = {
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
  results: Phase3AnxiousWhenLovedResultText[];
};

export const PHASE3_ANXIOUS_WHEN_LOVED_I18N: Record<Phase3AnxiousWhenLovedForeignLocale, LocaleBundle> = {
  "en": {
    "meta": {
      "title": "Why Do I Get Anxious the More My Partner Treats Me Well?",
      "description": "You're with someone who treats you so well — so why does part of you keep feeling anxious? These 10 scenarios reveal the real reason happiness makes you uneasy, and how to steady your heart.",
      "tags": [
        "Dating Anxiety",
        "Attachment",
        "Dating Psychology"
      ]
    },
    "questions": [
      {
        "q": "Your partner threw you a heartfelt, thoughtful event for your anniversary. You're happy, but part of you feels anxious. What's closest to your thought?",
        "opts": [
          "I'm not sure I'm good enough to deserve love like this",
          "Pressure creeps in — now I have to give back just as much",
          "I start worrying about what happens if this builds up my hopes and then falls apart",
          "A memory surfaces of things being this good once before — right before it suddenly ended"
        ]
      },
      {
        "q": "Your partner said, \"Being with you lately makes me so happy.\" You...",
        "opts": [
          "Feel weighed down, like you have to live up to those words",
          "Feel more wary than happy, afraid you'll get hurt if you let yourself believe it",
          "Remember how a breakup once followed those exact same words before",
          "Sense that a good stretch like this never lasts, and it'll end soon"
        ]
      },
      {
        "q": "A whole week has gone by, peaceful with no fights at all. You...",
        "opts": [
          "Deliberately hold your feelings in check, worried the longer the peace lasts, the more your hopes will grow",
          "Feel your guard go up first, because this calm resembles how it ended before",
          "Feel a growing sense that a good stretch like this can't last and will suddenly end",
          "Wonder whether you even deserve to enjoy this kind of peace"
        ]
      },
      {
        "q": "Your partner handled something for you and said, \"Don't worry about it, I've got this.\" You...",
        "opts": [
          "Picture someone who used to take care of you like this — right before they suddenly disappeared",
          "Hurt in advance, thinking the kinder they are now, the harder it'll hit when it ends",
          "Feel doubtful and a little ashamed, unsure you deserve this kind of help",
          "Feel weighed down by the thought that you owe them now and need to pay it back"
        ]
      },
      {
        "q": "Your partner said, \"Let's travel together again next year too.\" You...",
        "opts": [
          "The moment the promise is made, you sense you might not even make it that far",
          "Start doubting whether you're even worth a promise like this",
          "Feel the pressure to measure up and do just as much in return",
          "Hold back your hope, afraid it'll hurt too much if the promise breaks later"
        ]
      },
      {
        "q": "Your partner opened up about something hard and said, \"You're the only one I can tell this to.\" You...",
        "opts": [
          "Feel happy about the trust, but picture it breaking someday and get scared to even let yourself hope",
          "Feel anxious, remembering someone who trusted you like this once suddenly left",
          "Lack confidence that you're really someone who can listen well enough to deserve that trust",
          "Feel a growing pressure to listen even better, to pay back the trust you've been given"
        ]
      },
      {
        "q": "Your partner got off work early and showed up to surprise you. You...",
        "opts": [
          "Feel a sudden urgency, remembering that moments this good were always followed by something bad",
          "Already start imagining the ending, sure this happiness won't last long",
          "Feel pressured by the thought that you owe them the same effort back",
          "React deliberately low-key, afraid that leaning into this happiness will just set you up to crash later"
        ]
      },
      {
        "q": "Your partner said, \"You're truly precious to me.\" You...",
        "opts": [
          "A thought flickers through that this happiness won't last and will end soon",
          "Doubt whether those words even fit you, so you can't just take them in comfortably",
          "Take a step back from believing it, afraid you'll get hurt if you let yourself trust it",
          "An old memory resurfaces — of hearing those same words once, and that person leaving anyway"
        ]
      },
      {
        "q": "You're on your way home after a perfect day with your partner. You...",
        "opts": [
          "Have a moment of doubting whether you really deserve a day this good",
          "Feel a to-do list settle on your mind — next time, you have to do even more than what you got today",
          "Feel heavy, remembering a breakup that once followed a perfect day just like this",
          "Feel a rush of urgency, sensing this good day might turn out to be the last one"
        ]
      },
      {
        "q": "Your partner asked, \"Why do you seem anxious lately?\" What's closest to what's really going on inside you?",
        "opts": [
          "You're scared you can't give back as much as you've received, so you always feel like you're in debt",
          "You're scared of hope itself, worried it'll collapse if you lean into this happiness",
          "You sense that the bigger the happiness gets, the closer the ending must be",
          "You keep doubting whether you're really good enough for someone this good"
        ]
      }
    ],
    "results": [
      {
        "title": "Someone who senses the ending the happier things get, the Separation-Foreshadow Type ⏳",
        "typeName": "Separation-Foreshadow Type",
        "realReason": "The better a moment gets, the more you start picturing the day it ends",
        "shortDescription": "You're not uncomfortable with happiness. The bigger it grows, the closer the day you might lose it feels, and your heart tenses up in advance.",
        "description": "In moments like a thoughtful event, a peaceful week, or a perfect day, the thought \"maybe this is the last one\" creeps in instead of pure joy. Imagining the ending early feels like it'll soften the blow, but it also shrinks the happiness you're living right now. Time meant for enjoying happiness easily turns into time spent bracing for anxiety.",
        "keywords": "Sensing the end, Feels like the last time, Imagining ahead, Bracing, Happiness as anxiety",
        "strengths": "A deep appreciation for the relationship and the value of this exact moment",
        "reasonDetail": "When receiving a big gesture, hearing a future promise, or going through a peaceful stretch with no fights",
        "frequentSaying": "\"Is it okay for things to be this good?\"",
        "changeTips": "When the anxious thought hits, name it out loud: \"This is my mind previewing an ending that hasn't happened yet\"\nTry putting a number on today's happiness instead of jumping to the future — \"Right now, in this moment, I'm a 9 out of 10\"\nTell your partner directly: \"I get anxious when things are really good — it's not about you, it's just how my mind works\"\nIf this foreshadowing feeling keeps hijacking your good days and won't ease up on its own, it helps to sort through it with a counseling professional",
        "oneLiner": "Bracing for an ending is actually a sign of how deeply you love. Try pointing just a little of that energy back toward today's happiness",
        "shareLine": "Why do I get anxious the more my partner treats me well? Result: Separation-Foreshadow Type ⏳ Apparently the happier I get, the more I preview the ending... this is so me. Drop your result!"
      },
      {
        "title": "Someone who feels they don't deserve this love, the Worthiness-Doubt Type 🪞",
        "typeName": "Worthiness-Doubt Type",
        "realReason": "The thought that this love is too good for you is what makes love feel anxious",
        "shortDescription": "You're not anxious because love is lacking. You're anxious because the love you're getting doesn't feel like it belongs to you.",
        "description": "In front of a heartfelt gesture, the words \"you're precious to me,\" or a perfect day, the doubt \"am I really someone who deserves this?\" rises before anything else. The bigger the love, the more it feels like too much for you — and part of you worries that once your \"real self\" gets found out, it'll all disappear.",
        "keywords": "Feeling undeserving, Worthiness, Fear of being found out, Uncomfortable with praise, Self-doubt",
        "strengths": "Humility, honest self-reflection, and a deep sense of care for the people around you",
        "reasonDetail": "When receiving compliments, generous gestures, or being told you're valued",
        "frequentSaying": "\"Why would someone like that like someone like me?\"",
        "changeTips": "When the doubt rises, ask yourself directly: \"Is this really about my worth — or just an old belief I never checked?\"\nKeep a running list of specific reasons they chose you, in their own words, and reread it when doubt creeps in\nPractice simply saying \"thank you\" to compliments instead of deflecting or arguing against them\nIf this feeling of not deserving good things shows up across most areas of your life, not just this relationship, it's worth exploring the roots of it with a counseling professional",
        "oneLiner": "Love isn't a reward you have to qualify for. The more you practice simply receiving it, the steadier your heart gets",
        "shareLine": "Why do I get anxious the more my partner treats me well? Result: Worthiness-Doubt Type 🪞 Apparently I keep wondering if I even deserve this... this is so me lol try it and tell me your result"
      },
      {
        "title": "Someone who feels love as something to repay, the Debt-Feeling Type 🎒",
        "typeName": "Debt-Feeling Type",
        "realReason": "Every bit of love you receive turns into something you feel you owe",
        "shortDescription": "You're not anxious about love itself. You're anxious about the invisible bill you feel like you have to pay back.",
        "description": "A thoughtful gesture, a kind word, or help with something hard all land the same way: \"now I have to give back just as much.\" Love starts to feel less like a gift and more like a ledger, and the relationship quietly turns into a tally of favors given and owed. The more you receive, the heavier that invisible debt feels.",
        "keywords": "Feeling indebted, Needing to repay, Keeping score, Favor ledger, Heavy heart",
        "strengths": "A strong sense of fairness and real effort to take care of the people who take care of you",
        "reasonDetail": "After receiving help, a gift, trust, or any gesture that feels generous",
        "frequentSaying": "\"I owe them this much, so I have to do at least this much back\"",
        "changeTips": "When the pressure to repay hits, pause and ask: \"Did they actually ask for something back — or is this my own rule?\"\nRemind yourself that love given freely doesn't come with a repayment schedule attached\nTry receiving one kind gesture without immediately planning how to pay it back, just this once\nIf this constant feeling of owing people shows up in most of your close relationships and leaves you exhausted, talk it through with a counseling professional",
        "oneLiner": "Love isn't a loan. The moment you stop keeping score, the relationship starts feeling lighter",
        "shareLine": "Why do I get anxious the more my partner treats me well? Result: Debt-Feeling Type 🎒 Apparently every nice thing they do turns into a bill I feel like I owe... this is so me. Send me your result"
      },
      {
        "title": "Someone afraid to hope in case it all falls apart, the Expectation-Fear Type 🌫️",
        "typeName": "Expectation-Fear Type",
        "realReason": "You're not scared of happiness — you're scared of how much it'll hurt if the hope you built on it collapses",
        "shortDescription": "You're not pushing happiness away. You're protecting yourself in advance from how much it'll hurt if that happiness doesn't last.",
        "description": "When your partner makes a promise or says something sweet, instead of feeling fully happy, a quiet caution kicks in first: \"what if I believe this and it breaks?\" So you hold back from leaning all the way into good moments, keeping one foot outside the happiness just in case. It's a way of protecting your heart, but it also keeps you from fully living in the good moments while they're happening.",
        "keywords": "Fear of hope, Holding back, Guarding against disappointment, Staying cautious, Half-in happiness",
        "strengths": "Careful judgment and genuine emotional honesty with yourself",
        "reasonDetail": "When hearing a future promise, a sweet confession, or getting unexpectedly good treatment",
        "frequentSaying": "\"I don't want to get my hopes up and then get hurt\"",
        "changeTips": "When you feel yourself holding back, name it: \"I'm not avoiding happiness — I'm just scared of how much hoping might cost\"\nTry leaning into just 70% of the happiness instead of 0% or 100%, and see how that feels\nTell your partner honestly: \"I get cautious when things are going really well — it's not that I don't trust you, I'm just protecting myself\"\nIf this fear keeps you from ever fully enjoying good moments in your relationships, it's worth working through with a counseling professional",
        "oneLiner": "Hope that never gets risked never gets to come true either. Letting yourself hope just a little more is worth the risk",
        "shareLine": "Why do I get anxious the more my partner treats me well? Result: Expectation-Fear Type 🌫️ Apparently I'm scared to even hope in case it all falls apart... this is so me lol what'd you get?"
      },
      {
        "title": "Someone whose old heartbreak replays in good moments, the Past-Replay Type 🕰️",
        "typeName": "Past-Replay Type",
        "realReason": "A past experience quietly rises back up and colors how you feel about today's happiness",
        "shortDescription": "You're not overreacting to today. An old memory is reacting to today's happiness before you even get the chance to.",
        "description": "A happy moment right now — a sweet surprise, a kind word, a perfect day — pulls up a nearly identical memory from before: the good part, and the ending that followed it. That old feeling arrives faster and louder than what's actually happening today, so today's happiness gets tangled up with yesterday's heartbreak. Once you can tell the two apart, today's moment gets to stand on its own.",
        "keywords": "Old memories, Replaying the past, Déjà vu heartbreak, Past-present overlap, Old wounds",
        "strengths": "A strong memory for relationships and real emotional depth",
        "reasonDetail": "When today's situation closely resembles a happy memory from a past relationship that ended",
        "frequentSaying": "\"This happened before, right before everything fell apart\"",
        "changeTips": "When an old memory surfaces, ask yourself clearly: \"Is this about today, or about something that happened back then?\"\nWrite down one or two concrete differences between your past relationship and this one, to anchor yourself in the present\nTell your partner: \"Something about this reminded me of an old memory — it's not about you, I just need a second to separate the two\"\nIf old relationship memories keep resurfacing and are making it hard to trust the relationship you're in now, it's worth working through that history with a counseling professional",
        "oneLiner": "The past already ended. Separating back then from right now is what lets today's happiness finally be just yours",
        "shareLine": "Why do I get anxious the more my partner treats me well? Result: Past-Replay Type 🕰️ Apparently good moments keep triggering an old memory I haven't let go of... this is so me. What's your type?"
      }
    ]
  },
  "ja": {
    "meta": {
      "title": "なぜ恋人に優しくされるほど不安になるの？",
      "description": "大切にしてくれる人のそばなのに、なぜ心の片隅がざわつくの？10の場面で、幸せなほど不安になる本当の理由と、心を落ち着ける方法をお伝えします。",
      "tags": [
        "恋愛不安",
        "愛着",
        "恋愛心理"
      ]
    },
    "questions": [
      {
        "q": "記念日に恋人が心のこもったイベントを用意してくれた。幸せなのに、心の片隅が不安になる。いちばん近い考えは？",
        "opts": [
          "こんな愛を受けるほど自分がちゃんとした人間なのか、確信が持てない",
          "これだけしてもらったから、自分も同じくらい返さなきゃという気持ちが込み上げる",
          "こうやって期待させておいて、あとで崩れたらどうしようと思ってしまう",
          "前にもこうやって幸せだったのに急に終わったことを思い出す"
        ]
      },
      {
        "q": "恋人が「最近君といると本当に幸せ」と言った。私は？",
        "opts": [
          "言われた分だけ自分もちゃんとしなきゃいけない気がして、心が重くなる",
          "この言葉を信じて期待したら傷つくんじゃないかと、嬉しさより慎重さが先に立つ",
          "前にも幸せだと言われたあとに別れが来た記憶が重なる",
          "こんなに良い時間は長く続かず、もうすぐ終わる気がする"
        ]
      },
      {
        "q": "一週間ずっとケンカもなく、穏やかな日々が続いた。私は？",
        "opts": [
          "平和が続くほど期待が膨らみそうで、わざと気持ちを抑えてしまう",
          "この穏やかさが昔終わったときのパターンと似ていて、心が先に警戒する",
          "こんなに良い時間が長く続かず、急に終わる気がしてだんだん不安が大きくなる",
          "自分にこんな穏やかな時間を楽しむ資格があるのか疑ってしまう"
        ]
      },
      {
        "q": "恋人が自分の用事を代わりに片付けながら「気にしないで、僕(私)がやるから」と言った。私は？",
        "opts": [
          "前にもこうやって気にかけてくれた人が、ある日突然いなくなった場面を思い出す",
          "こうして優しくされるほど、終わるときの衝撃が大きくなりそうで先に心が痛む",
          "こんな助けを受ける資格が自分にあるのか疑わしくて、恥ずかしくなる",
          "すっかり世話になったから返さなきゃという思いで心が重くなる"
        ]
      },
      {
        "q": "恋人が「来年も一緒に旅行に行こうね」と言った。私は？",
        "opts": [
          "約束をした瞬間、それまでに終わってしまうんじゃないかという予感がよぎる",
          "こんな約束をしてもらえるほど自分に価値があるのか疑わしくなる",
          "約束をもらった分、自分もそれにふさわしくしなきゃという気がして負担に感じる",
          "約束に期待をかけて崩れたらつらすぎるので、あらかじめ期待をしまっておく"
        ]
      },
      {
        "q": "恋人がつらいことを打ち明けながら「君にしか話せない」と言った。私は？",
        "opts": [
          "信じてくれる気持ちが大きくて嬉しい反面、その信頼がいつか崩れることを想像すると期待するのが怖くなる",
          "こうして信じてくれていた人が、ある日突然去っていった前の記憶がよみがえって不安になる",
          "こんな信頼を受けるほど自分がちゃんと聞いてあげられる人間なのか自信がない",
          "受け取った信頼の分、もっとちゃんと聞いて返さなきゃという負担が大きくなる"
        ]
      },
      {
        "q": "恋人が早く仕事を終えてサプライズで訪ねてきた。私は？",
        "opts": [
          "こんなに良かった瞬間のあとには必ず良くないことが来ていた経験を思い出し、心が焦り出す",
          "この幸せが長く続かない気がして、今この瞬間からもう終わりを想像してしまう",
          "こんなに気にかけてもらった分、自分も同じように返さなきゃという気がして負担に感じる",
          "こんな幸せに期待をかけてあとで崩れるのが怖くて、わざと淡々とした反応をしてしまう"
        ]
      },
      {
        "q": "恋人が「君は僕(私)にとって本当に大切な人だよ」と言った。私は？",
        "opts": [
          "この幸せが長く続かず、もうすぐ終わってしまう気がよぎる",
          "この言葉が自分にふさわしいのか疑わしくて、素直に受け取れない",
          "この言葉を信じて期待したら傷つきそうで、信じることから一歩引いてしまう",
          "前にも大切だと言われたのに、結局去っていった記憶がよみがえる"
        ]
      },
      {
        "q": "恋人と完璧な一日を過ごして帰る途中。私は？",
        "opts": [
          "こんなに良い一日を過ごす資格が自分にあるのか、ふと疑わしくなる瞬間がある",
          "今日もらった分、次はもっと頑張らなきゃという宿題が心にのしかかる",
          "前にも完璧だった日のあとに別れが来た記憶が浮かび、心が重くなる",
          "こんなに良い一日が最後になりそうな予感がして、心が焦り出す"
        ]
      },
      {
        "q": "恋人が「最近なんで不安そうなの？」と聞いた。本音にいちばん近いのは？",
        "opts": [
          "もらった分を返せていない気がして、いつも心に借りがあるように感じる",
          "幸せに期待をかけて崩れるのが怖くて、期待すること自体が怖い",
          "幸せが大きくなるほど終わる日も近づいてくる気がする",
          "こんなに良い人に自分がふさわしいのか、何度も疑ってしまう"
        ]
      }
    ],
    "results": [
      {
        "title": "幸せなほど終わりを予感する人、別れ予感タイプ ⏳",
        "typeName": "別れ予感タイプ",
        "realReason": "良い瞬間が大きくなるほど、終わる日を先回りして想像してしまう",
        "shortDescription": "あなたは幸せが苦手なわけではありません。幸せが大きくなるほど、失う日もそれだけ近づいている気がして、先に心が緊張してしまうのです。",
        "description": "イベント、穏やかな一週間、完璧な一日のような良い瞬間に、むしろ「これが最後かもしれない」という考えがついてきます。終わりを先に想像すれば衝撃が減る気がしますが、今の幸せも一緒に小さくなってしまいます。幸せを味わうはずの時間が、不安に備える時間に変わりやすいタイプです。",
        "keywords": "終わりの予感、最後かもという思い、先回りした想像、緊張、幸せが不安",
        "strengths": "関係を大切にし、今この瞬間の価値を深く感じ取れる心",
        "reasonDetail": "大きなイベントをしてもらったとき、将来の約束を聞いたとき、ケンカもなく穏やかなとき",
        "frequentSaying": "「こんなに良くてもいいのかな」",
        "changeTips": "終わりを予感したとき「今、実際に悪いことが起きているか」を事実で確認する\n幸せな瞬間を写真やメモに残して「今」にとどまる練習をする\n「幸せだからこそ不安になる」と恋人に素直に話してみる\n良い瞬間のたびに終わりを想像する不安が繰り返され、睡眠や集中など日常に影響しているなら、一人で抱え込まずに心理カウンセリングの専門家に相談してみてください",
        "oneLiner": "終わりに備える気持ちは、愛情が深い証拠でもあります。そのエネルギーを少しだけ、今日の幸せに向けてみてください",
        "shareLine": "なぜ恋人に優しくされるほど不安になるの？結果：別れ予感タイプ ⏳ 幸せなほど終わりを先に想像しちゃうらしい…これ私じゃんガチで 一緒にやろう、何タイプ出た？"
      },
      {
        "title": "受ける資格がないと感じる人、資格疑いタイプ 🪞",
        "typeName": "資格疑いタイプ",
        "realReason": "こんな愛情は自分には過ぎたものだという思いが、愛を不安にさせる",
        "shortDescription": "あなたは愛情が足りなくて不安なのではありません。受け取る愛が自分のもののように感じられなくて、不安になるのです。",
        "description": "心のこもったイベント、大切だという言葉、完璧な一日を前にすると、「自分はこれを受け取る人間なのか」という疑いが先に込み上げます。愛が大きければ大きいほど、それだけ過分に感じられ、いつか本当の姿がバレたら消えてしまいそうで、心が落ち着きません。",
        "keywords": "身に余る感じ、受け取る資格、バレそうな不安、褒め言葉の居心地悪さ、自己不信",
        "strengths": "謙虚で、受け取った分を大切にし、相手に誠実に向き合う実直さ",
        "reasonDetail": "気遣いや褒め言葉をもらったとき、大切だと言われたとき、穏やかな時間が続くとき",
        "frequentSaying": "「自分みたいな人のどこがいいの？」",
        "changeTips": "恋人がくれた良い言葉をそのままメモしておき、疑わずに事実として読み返す\n褒められたら「そんなことないよ」の代わりに、まず「ありがとう」の一言で受け取ってみる\n恋愛の外で自分が成し遂げたことや認められた経験を書き出し、自分を信じる根拠を積み重ねる\n自分には価値がないという思いが恋愛だけでなく日常全体で強く続くなら、心理カウンセリングの専門家に相談してみてください",
        "oneLiner": "愛が入る場所は、もうあなたの中にあります。受け取ってもいい人間なんだと、時々確かめてあげてください",
        "shareLine": "なぜ恋人に優しくされるほど不安になるの？結果：資格疑いタイプ 🪞 もらう愛が自分のものだと思えないらしい…これ図星すぎｗ 一緒にやって教えて"
      },
      {
        "title": "もらった分を返さなきゃと思う人、借りがある気持ちタイプ 🎒",
        "typeName": "借りがある気持ちタイプ",
        "realReason": "受け取った愛を同じだけ返さなきゃという負担が、心を重くしている",
        "shortDescription": "あなたは愛情そのものが負担なのではありません。もらった分だけ返さなきゃという気持ちが、愛を宿題のように感じさせているのです。",
        "description": "イベント、助け、信頼をもらうたびに「自分もそれだけしなきゃ」という計算が始まります。愛が自然なやり取りではなく、借金と返済のように感じられ、優しくされるほど心が重くなります。返しきれない日が来たら関係が揺らぐんじゃないかという不安もついてきます。",
        "keywords": "もらった分の返済、宿題、負担、計算、恩を感じる気持ち",
        "strengths": "責任感が強く、関係の中で公平にやり取りしようとする誠実さ",
        "reasonDetail": "イベントや助けをもらったとき、信頼や悩みを打ち明けられたとき、完璧な一日のあと",
        "frequentSaying": "「自分もそれくらいしてあげなきゃ」",
        "changeTips": "もらったときは「ありがとう」で一度区切り、すぐに返す方法を探さない\n「返さなきゃという気がして負担に感じる」と恋人に素直に話してみる\nやり取りを数字ではなく「お互いが心地いいか」で確かめる\nもらうことがずっと負担で、関係全体で返さなきゃというプレッシャーが大きいなら、心理カウンセリングの専門家とその根っこを一緒に見つめてみてください",
        "oneLiner": "愛は返すものではなく、分かち合うものです。受け取っても大丈夫だった日が積み重なれば、負担も軽くなっていきます",
        "shareLine": "なぜ恋人に優しくされるほど不安になるの？結果：借りがある気持ちタイプ 🎒 もらった分を返さなきゃで心が重いらしい…わかりすぎるｗ 一緒にやろう、何タイプだった？"
      },
      {
        "title": "期待して崩れるのが怖い人、期待恐怖タイプ 🌫️",
        "typeName": "期待恐怖タイプ",
        "realReason": "幸せに期待して、それが崩れたときの痛みが怖くて、期待すること自体を抑え込んでしまう",
        "shortDescription": "あなたは幸せが嫌いなわけではありません。期待して崩れたときの痛みが怖くて、幸せに心を全部預けられないのです。",
        "description": "約束、信頼、穏やかさを前にすると、喜びより慎重さが先に来て、わざと淡々と反応してしまいます。期待を下げれば傷は浅くなりますが、今の幸せも感じにくくなります。期待と傷を同じものとして結びつけてしまう、一種の防御反応に近い心です。",
        "keywords": "期待が怖い、淡々とした反応、気持ちを抑え込む、一歩引く、防御",
        "strengths": "慎重で衝動に流されず、一度心を開けば深く愛せる人",
        "reasonDetail": "将来の約束を聞いたとき、信頼されたとき、穏やかな時間が続くとき",
        "frequentSaying": "「あんまり期待しちゃダメな気がして」",
        "changeTips": "期待が湧いてきたら「期待していい根拠」と「心配な根拠」を二行に分けて書いてみる\n小さな期待（今週末の約束など）から一つずつ開いてみて、「何も起きなかった」経験を積み重ねる\n「期待するのが怖くて淡々としちゃう」と恋人に伝えて誤解を減らす\n期待すること自体が繰り返し怖く、日常に影響しているなら、心理カウンセリングの専門家とその不安の根っこを安全に見つめてみてください",
        "oneLiner": "期待は傷の種ではなく、愛への扉です。少しずつ開いていっても大丈夫です",
        "shareLine": "なぜ恋人に優しくされるほど不安になるの？結果：期待恐怖タイプ 🌫️ 期待して崩れるのが怖くて期待を抑えてるらしい…図星すぎて黙るｗ 一緒にやろう、何出た？"
      },
      {
        "title": "昔の別れがよみがえる人、過去再現タイプ 🕰️",
        "typeName": "過去再現タイプ",
        "realReason": "昔、良かったのに終わってしまった経験が、今の幸せの上に重なっている",
        "shortDescription": "あなたは今の恋人を信じられないわけではありません。昔、良かったのに終わった記憶が、今の幸せに警告を送っているのです。",
        "description": "優しい言葉、穏やかな日々、大切だという告白が、以前の別れ直前の場面と似ているように感じられます。今の相手の行動よりも、過去のパターンのほうが強く反応してしまい、同じ結末がまた来るんじゃないかという不安が生まれます。",
        "keywords": "昔の記憶、似た場面、警告、繰り返されそうな予感、影",
        "strengths": "経験から学ぶ力があり、慎重で、心を開いたときには深く安定した恋愛ができる人",
        "reasonDetail": "昔と似た言葉や状況に出会ったとき、良い瞬間のあとに訪れる静けさ",
        "frequentSaying": "「前もこういうときに終わったんだよね」",
        "changeTips": "今の恋人の行動の中で「確認できた事実」と「昔の記憶からくる心配」を二行に分けて書く\n不安が湧いたら「今、自分を傷つけることが実際にあったか」をまず確認する\n前の別れと今の違いを三つ書き出しておき、必要なときに読み返す\n過去の別れの記憶が何度もよみがえり、今の恋愛や日常がつらいなら、心理カウンセリングの専門家とその記憶を安全に整理してみてください",
        "oneLiner": "影があるということは、かつて光があったということです。今の光も、少しずつ信じてみても大丈夫です",
        "shareLine": "なぜ恋人に優しくされるほど不安になるの？結果：過去再現タイプ 🕰️ 昔の別れの記憶が今の幸せに重なるらしい…これガチで私 一緒にやろう、何タイプだった？"
      }
    ]
  },
  "zh-CN": {
    "meta": {
      "title": "为什么恋人越对我好，我反而越不安？",
      "description": "明明身边是对你好的人，为什么心里还是会发慌？用10个情境，告诉你越幸福越不安的真正原因，以及让心安定下来的方法。",
      "tags": [
        "恋爱焦虑",
        "依恋",
        "恋爱心理"
      ]
    },
    "questions": [
      {
        "q": "恋人在纪念日为你精心准备了惊喜活动。明明很开心，心里却有一角不安。最接近你的想法是？",
        "opts": [
          "不确定自己是不是配得上这样的爱",
          "收到这么多，就觉得自己也要同等回报的负担涌上来",
          "担心这样抱有期待，万一以后破灭了该怎么办",
          "想起以前也是这样甜蜜，却突然结束的记忆"
        ]
      },
      {
        "q": "恋人说「最近和你在一起真的很幸福」。你会？",
        "opts": [
          "觉得自己也要做得更好才配得上这句话，心里变得沉重",
          "怕相信了这句话、满怀期待后会受伤，比起开心更先感到小心翼翼",
          "想起以前也是听到幸福的话之后，紧接着就分手了",
          "有种预感，这么好的时光维持不了多久，很快就会结束"
        ]
      },
      {
        "q": "一整周都没有吵架，平静的日子一直持续着。你会？",
        "opts": [
          "怕平静持续得越久、期待也会越大，所以故意把心情压下去",
          "这种平静和以前感情结束前的样子很像，心里先警觉起来",
          "越来越觉得这么好的时光撑不了多久，会突然结束",
          "怀疑自己是不是真的配得上这样的平静"
        ]
      },
      {
        "q": "恋人主动替你解决了事情，说「别操心，我来就行」。你会？",
        "opts": [
          "想起以前也有这样照顾自己的人，却突然消失不见的画面",
          "觉得对方越好，结束时的打击会越大，提前就开始心痛",
          "怀疑自己是不是配得上被这样帮助，心里又羞又疑",
          "觉得欠了对方太多人情，总要还回去，心里变得沉重"
        ]
      },
      {
        "q": "恋人说「我们明年也一起去旅行吧」。你会？",
        "opts": [
          "许下约定的那一刻，反而预感两人撑不到那时候",
          "怀疑自己值不值得拥有这样的约定",
          "觉得既然收到了这样的约定，自己也要付出同等的努力，压力很大",
          "怕对这个约定抱了期待，万一落空会太痛，所以干脆不敢期待"
        ]
      },
      {
        "q": "恋人向你倾诉了烦心事，说「这种话只能跟你说」。你会？",
        "opts": [
          "被这么信任很开心，但一想到信任有天会破碎，就害怕继续抱有期待",
          "想起以前也有这样信任自己的人，却突然离开，心里跟着不安起来",
          "怀疑自己是不是真的能好好倾听，配得上这份信任",
          "觉得收到了这么多信任，自己也要更努力地倾听来回报，压力越来越大"
        ]
      },
      {
        "q": "恋人提前下班，给你来了个惊喜。你会？",
        "opts": [
          "想起以前每次这么美好的瞬间之后都会发生不好的事，心一下子揪紧",
          "觉得这份幸福撑不了多久，从现在这一刻就开始想象结局",
          "觉得对方这么用心，自己也要同等地回报，心里有压力",
          "怕对这份幸福抱了期待以后会落空，所以故意表现得淡淡的"
        ]
      },
      {
        "q": "恋人说「你对我来说真的很重要」。你会？",
        "opts": [
          "脑中闪过一个念头：这份幸福撑不了多久，很快就会结束",
          "怀疑这句话是不是真的适合自己，没办法坦然地接受",
          "怕相信了这句话、抱了期待之后会受伤，于是在信任面前先退一步",
          "想起以前也听过「很重要」这句话，结果对方最终还是离开了"
        ]
      },
      {
        "q": "和恋人度过了完美的一天，正走在回家的路上。你会？",
        "opts": [
          "偶尔会怀疑，自己配不配拥有这么美好的一天",
          "想到今天收到了这么多，下次自己要做得更多，心里像压了一份作业",
          "想起以前也是完美的一天之后迎来了分手，心情变得沉重",
          "有种预感，这么美好的一天会是最后一次，心一下子急了起来"
        ]
      },
      {
        "q": "恋人问你「最近怎么看起来不安？」。最接近你真实想法的是？",
        "opts": [
          "总觉得没能把收到的都还回去，心里像一直欠着什么",
          "怕对幸福抱了期待以后会落空，所以连期待本身都觉得害怕",
          "幸福越大，越觉得结束的日子也在靠近",
          "总是怀疑自己配不配这么好的人"
        ]
      }
    ],
    "results": [
      {
        "title": "越幸福越预感结局的人，预感分手型 ⏳",
        "typeName": "预感分手型",
        "realReason": "美好的瞬间越多，就越会提前想象结束的那一天",
        "shortDescription": "你并不是对幸福感到不舒服。而是幸福越大，就越觉得失去的那天也在靠近，于是心提前绷紧了。",
        "description": "惊喜活动、平静的一周、完美的一天——面对这些美好时刻，脑子里反而先冒出「这会不会是最后一次」的念头。提前想象结局，似乎能减轻打击，但也会让此刻的幸福跟着变少。享受幸福的时间，很容易就变成了准备不安的时间。",
        "keywords": "预感结局，像是最后一次，提前想象，紧绷，幸福变不安",
        "strengths": "珍惜关系，能深深感受当下每一刻的价值",
        "reasonDetail": "收到大惊喜的时候、听到未来的约定时、没有争吵、一片平静的时候",
        "frequentSaying": "「这么好，真的可以吗？」",
        "changeTips": "预感结局时，先确认一个事实：「现在真的发生了什么不好的事吗？」\n用照片或文字把幸福的瞬间记录下来，练习停留在「此刻」\n坦诚地告诉恋人：「我是因为太幸福了，反而觉得不安」\n如果每一个美好瞬间都会引发想象结局的不安，并反复影响到睡眠、专注等日常生活，请不要一个人硬扛，找心理咨询专业人士聊一聊",
        "oneLiner": "提前准备结局的心，其实是爱得很深的信号。把这份心力，分一点给今天的幸福吧",
        "shareLine": "为什么恋人越对我好，我反而越不安？结果：预感分手型 ⏳ 原来是越幸福就越提前想象结局……好准啊哈哈 发到群里测一下，你们测出什么？"
      },
      {
        "title": "觉得自己不配被爱的人，资格怀疑型 🪞",
        "typeName": "资格怀疑型",
        "realReason": "觉得这份爱对自己来说太过奢侈，于是让爱变得令人不安",
        "shortDescription": "你并不是因为爱得不够才不安。而是因为收到的爱，总感觉不像是属于自己的。",
        "description": "面对精心准备的惊喜、「你很重要」这样的话，还有完美的一天，心里先冒出来的是「我配得上这些吗」的怀疑。爱越深，就越觉得自己受之有愧，总担心哪天真实的自己被看穿，这份爱就会消失，心里始终不踏实。",
        "keywords": "受之有愧，配不配，怕被看穿，不敢接受夸奖，自我怀疑",
        "strengths": "谦虚，懂得珍惜所得到的，待人真诚踏实",
        "reasonDetail": "收到用心或夸奖的时候、被说「很重要」的时候、平静的时光持续下去的时候",
        "frequentSaying": "「像我这样的人，有什么地方值得喜欢？」",
        "changeTips": "把恋人说过的好话原样记下来，不带怀疑地当作事实重新读一遍\n被夸奖时，先用一句「谢谢」接住，而不是马上说「没有啦」\n在恋爱之外，写下自己取得的成绩和被认可的经历，为信任自己积累依据\n如果「自己没有价值」的想法不只出现在恋爱中，在日常生活里也频繁而强烈，请和心理咨询专业人士聊一聊",
        "oneLiner": "爱早就有位置留给你了。偶尔也确认一下，自己是个值得被爱的人",
        "shareLine": "为什么恋人越对我好，我反而越不安？结果：资格怀疑型 🪞 原来是因为不觉得这份爱是自己的才不安……扎心了 发到群里测一下，你们呢？"
      },
      {
        "title": "觉得受之必还的人，亏欠感型 🎒",
        "typeName": "亏欠感型",
        "realReason": "觉得收到多少爱，就得同等地还回去，这份负担压得心很重",
        "shortDescription": "你并不是觉得爱很有负担。而是「收到多少就要还多少」的念头，让爱变成了一份作业。",
        "description": "每次收到惊喜、帮助或信任，心里就开始盘算「我也要做到同等程度」。爱不再是你来我往的自然流动，而更像欠债和还债，对方越好，心里反而越沉重。一想到哪天还不上，关系会不会因此动摇，不安也随之而来。",
        "keywords": "收多少还多少，作业感，负担，盘算，亏欠感",
        "strengths": "责任感强，在关系里懂得公平地付出与回报",
        "reasonDetail": "收到惊喜或帮助的时候、被信任或听到对方倾诉烦恼的时候、度过完美一天之后",
        "frequentSaying": "「我也该做点什么还给对方才行」",
        "changeTips": "接受好意时，用一句「谢谢」收尾，不急着马上想办法回报\n坦诚告诉恋人：「总觉得自己该还点什么，心里有点负担」\n检查彼此的付出时，不用「数量」衡量，而是看「双方是不是都觉得自在」\n如果接受别人的好意一直让你有负担，并且在各种关系里都觉得必须偿还，请和心理咨询专业人士一起梳理这份心情的根源",
        "oneLiner": "爱不是用来偿还的，而是用来分享的。积累下「收下也没关系」的日子，负担自然会变轻",
        "shareLine": "为什么恋人越对我好，我反而越不安？结果：亏欠感型 🎒 原来是因为觉得收多少就要还多少才心累……承认了哈哈 发到群里测一下，你是哪一型？"
      },
      {
        "title": "害怕期待落空的人，期待恐惧型 🌫️",
        "typeName": "期待恐惧型",
        "realReason": "害怕满怀期待后落空的那份痛，所以干脆先压下期待本身",
        "shortDescription": "你并不是讨厌幸福。而是害怕满怀期待后又落空的痛，所以不敢把心完全交给幸福。",
        "description": "面对约定、信任和平静的时光，比起开心，你会先感到小心翼翼，甚至故意表现得淡淡的。降低期待，确实能少受点伤，但也会让此刻的幸福感变淡。这其实是一种把「期待」和「受伤」绑在一起的自我保护。",
        "keywords": "害怕期待，反应淡淡的，压下心情，先退一步，自我保护",
        "strengths": "谨慎稳重，不会被一时冲动左右，一旦敞开心扉就会爱得很深",
        "reasonDetail": "听到未来的约定时、被信任的时候、平静的日子持续下去时",
        "frequentSaying": "「好像不能抱太大期待」",
        "changeTips": "期待升起时，把「值得期待的理由」和「担心的理由」分两行写下来\n从小的期待（比如这个周末的约定）开始一点点尝试，积累「什么事都没发生」的经验\n告诉恋人：「我是因为害怕期待，才故意表现得淡淡的」，减少彼此的误会\n如果连抱有期待这件事本身都反复让你害怕，并影响到日常生活，请和心理咨询专业人士一起，安全地探究这份不安的根源",
        "oneLiner": "期待不是伤痛的种子，而是通往爱的门。一点一点打开也没关系",
        "shareLine": "为什么恋人越对我好，我反而越不安？结果：期待恐惧型 🌫️ 原来是害怕期待落空才故意淡定……说中了安静了ᅲ 发到群里测一下，你们测出什么？"
      },
      {
        "title": "旧日分手不断重现的人，旧情重现型 🕰️",
        "typeName": "旧情重现型",
        "realReason": "以前那段先甜后散的经历，叠在了现在的幸福之上",
        "shortDescription": "你并不是不信任现在的恋人。而是以前那段先甜后散的记忆，正在对现在的幸福发出警报。",
        "description": "温柔的话语、平静的日子、「你很重要」这样的告白，都让你联想到以前分手前夕的场景。比起眼前恋人的行动，过去的模式反而反应更大，于是担心同样的结局会再次上演。",
        "keywords": "旧日记忆，相似场景，警报，像会重演，阴影",
        "strengths": "从经历中学到了经验，为人谨慎，一旦敞开心扉就能谈一场深沉而稳定的恋爱",
        "reasonDetail": "遇到和以前相似的话语或情境时、美好瞬间之后随之而来的安静时刻",
        "frequentSaying": "「以前也是这样，然后就结束了」",
        "changeTips": "把恋人现在行动里「已确认的事实」和「因旧日记忆产生的担心」分两行写下来\n不安升起时，先确认一下：「现在真的有让我受伤的事情发生吗？」\n写下以前那段分手和现在这段感情的三个不同之处，需要时拿出来读一读\n如果过去分手的记忆频繁浮现，影响到现在的恋爱和日常生活，请和心理咨询专业人士一起，安全地梳理那段记忆",
        "oneLiner": "有阴影，说明曾经有过光。慢慢去相信眼前这束光，也没关系",
        "shareLine": "为什么恋人越对我好，我反而越不安？结果：旧情重现型 🕰️ 原来是旧日分手的记忆叠在现在的幸福上……好准啊 发到群里测一下，你是什么原因？"
      }
    ]
  },
  "zh-TW": {
    "meta": {
      "title": "為什麼戀人越對我好，我反而越不安？",
      "description": "明明身邊是對你好的人，為什麼心裡還是會發慌？用10個情境，告訴你越幸福越不安的真正原因，以及讓心安定下來的方法。",
      "tags": [
        "戀愛焦慮",
        "依戀",
        "戀愛心理"
      ]
    },
    "questions": [
      {
        "q": "戀人在紀念日為你精心準備了驚喜活動。明明很開心，心裡卻有一角不安。最接近你的想法是？",
        "opts": [
          "不確定自己是不是配得上這樣的愛",
          "收到這麼多，就覺得自己也要同等回報的負擔湧上來",
          "擔心這樣抱有期待，萬一以後破滅了該怎麼辦",
          "想起以前也是這樣甜蜜，卻突然結束的記憶"
        ]
      },
      {
        "q": "戀人說「最近和你在一起真的很幸福」。你會？",
        "opts": [
          "覺得自己也要做得更好才配得上這句話，心裡變得沉重",
          "怕相信了這句話、滿懷期待後會受傷，比起開心更先感到小心翼翼",
          "想起以前也是聽到幸福的話之後，緊接著就分手了",
          "有種預感，這麼好的時光維持不了多久，很快就會結束"
        ]
      },
      {
        "q": "一整週都沒有吵架，平靜的日子一直持續著。你會？",
        "opts": [
          "怕平靜持續得越久、期待也會越大，所以故意把心情壓下去",
          "這種平靜和以前感情結束前的樣子很像，心裡先警覺起來",
          "越來越覺得這麼好的時光撐不了多久，會突然結束",
          "懷疑自己是不是真的配得上這樣的平靜"
        ]
      },
      {
        "q": "戀人主動替你解決了事情，說「別操心，我來就行」。你會？",
        "opts": [
          "想起以前也有這樣照顧自己的人，卻突然消失不見的畫面",
          "覺得對方越好，結束時的打擊會越大，提前就開始心痛",
          "懷疑自己是不是配得上被這樣幫助，心裡又羞又疑",
          "覺得欠了對方太多人情，總要還回去，心裡變得沉重"
        ]
      },
      {
        "q": "戀人說「我們明年也一起去旅行吧」。你會？",
        "opts": [
          "許下約定的那一刻，反而預感兩人撐不到那時候",
          "懷疑自己值不值得擁有這樣的約定",
          "覺得既然收到了這樣的約定，自己也要付出同等的努力，壓力很大",
          "怕對這個約定抱了期待，萬一落空會太痛，所以乾脆不敢期待"
        ]
      },
      {
        "q": "戀人向你傾訴了煩心事，說「這種話只能跟你說」。你會？",
        "opts": [
          "被這麼信任很開心，但一想到信任有天會破碎，就害怕繼續抱有期待",
          "想起以前也有這樣信任自己的人，卻突然離開，心裡跟著不安起來",
          "懷疑自己是不是真的能好好傾聽，配得上這份信任",
          "覺得收到了這麼多信任，自己也要更努力地傾聽來回報，壓力越來越大"
        ]
      },
      {
        "q": "戀人提前下班，給你來了個驚喜。你會？",
        "opts": [
          "想起以前每次這麼美好的瞬間之後都會發生不好的事，心一下子揪緊",
          "覺得這份幸福撐不了多久，從現在這一刻就開始想象結局",
          "覺得對方這麼用心，自己也要同等地回報，心裡有壓力",
          "怕對這份幸福抱了期待以後會落空，所以故意表現得淡淡的"
        ]
      },
      {
        "q": "戀人說「你對我來說真的很重要」。你會？",
        "opts": [
          "腦中閃過一個念頭：這份幸福撐不了多久，很快就會結束",
          "懷疑這句話是不是真的適合自己，沒辦法坦然地接受",
          "怕相信了這句話、抱了期待之後會受傷，於是在信任面前先退一步",
          "想起以前也聽過「很重要」這句話，結果對方最終還是離開了"
        ]
      },
      {
        "q": "和戀人度過了完美的一天，正走在回家的路上。你會？",
        "opts": [
          "偶爾會懷疑，自己配不配擁有這麼美好的一天",
          "想到今天收到了這麼多，下次自己要做得更多，心裡像壓了一份作業",
          "想起以前也是完美的一天之後迎來了分手，心情變得沉重",
          "有種預感，這麼美好的一天會是最後一次，心一下子急了起來"
        ]
      },
      {
        "q": "戀人問你「最近怎麼看起來不安？」。最接近你真實想法的是？",
        "opts": [
          "總覺得沒能把收到的都還回去，心裡像一直欠著什麼",
          "怕對幸福抱了期待以後會落空，所以連期待本身都覺得害怕",
          "幸福越大，越覺得結束的日子也在靠近",
          "總是懷疑自己配不配這麼好的人"
        ]
      }
    ],
    "results": [
      {
        "title": "越幸福越預感結局的人，預感分手型 ⏳",
        "typeName": "預感分手型",
        "realReason": "美好的瞬間越多，就越會提前想象結束的那一天",
        "shortDescription": "你並不是對幸福感到不舒服。而是幸福越大，就越覺得失去的那天也在靠近，於是心提前繃緊了。",
        "description": "驚喜活動、平靜的一週、完美的一天——面對這些美好時刻，腦子裡反而先冒出「這會不會是最後一次」的念頭。提前想象結局，似乎能減輕打擊，但也會讓此刻的幸福跟著變少。享受幸福的時間，很容易就變成了準備不安的時間。",
        "keywords": "預感結局，像是最後一次，提前想象，緊繃，幸福變不安",
        "strengths": "珍惜關係，能深深感受當下每一刻的價值",
        "reasonDetail": "收到大驚喜的時候、聽到未來的約定時、沒有爭吵、一片平靜的時候",
        "frequentSaying": "「這麼好，真的可以嗎？」",
        "changeTips": "預感結局時，先確認一個事實：「現在真的發生了什麼不好的事嗎？」\n用照片或文字把幸福的瞬間記錄下來，練習停留在「此刻」\n坦誠地告訴戀人：「我是因為太幸福了，反而覺得不安」\n如果每一個美好瞬間都會引發想象結局的不安，並反覆影響到睡眠、專注等日常生活，請不要一個人硬扛，找心理諮詢專業人士聊一聊",
        "oneLiner": "提前準備結局的心，其實是愛得很深的信號。把這份心力，分一點給今天的幸福吧",
        "shareLine": "為什麼戀人越對我好，我反而越不安？結果：預感分手型 ⏳ 原來是越幸福就越提前想象結局……好準啊哈哈 發到群裡測一下，你們測出什麼？"
      },
      {
        "title": "覺得自己不配被愛的人，資格懷疑型 🪞",
        "typeName": "資格懷疑型",
        "realReason": "覺得這份愛對自己來說太過奢侈，於是讓愛變得令人不安",
        "shortDescription": "你並不是因為愛得不夠才不安。而是因為收到的愛，總感覺不像是屬於自己的。",
        "description": "面對精心準備的驚喜、「你很重要」這樣的話，還有完美的一天，心裡先冒出來的是「我配得上這些嗎」的懷疑。愛越深，就越覺得自己受之有愧，總擔心哪天真實的自己被看穿，這份愛就會消失，心裡始終不踏實。",
        "keywords": "受之有愧，配不配，怕被看穿，不敢接受誇獎，自我懷疑",
        "strengths": "謙虛，懂得珍惜所得到的，待人真誠踏實",
        "reasonDetail": "收到用心或誇獎的時候、被說「很重要」的時候、平靜的時光持續下去的時候",
        "frequentSaying": "「像我這樣的人，有什麼地方值得喜歡？」",
        "changeTips": "把戀人說過的好話原樣記下來，不帶懷疑地當作事實重新讀一遍\n被誇獎時，先用一句「謝謝」接住，而不是馬上說「沒有啦」\n在戀愛之外，寫下自己取得的成績和被認可的經歷，為信任自己積累依據\n如果「自己沒有價值」的想法不只出現在戀愛中，在日常生活裡也頻繁而強烈，請和心理諮詢專業人士聊一聊",
        "oneLiner": "愛早就有位置留給你了。偶爾也確認一下，自己是個值得被愛的人",
        "shareLine": "為什麼戀人越對我好，我反而越不安？結果：資格懷疑型 🪞 原來是因為不覺得這份愛是自己的才不安……扎心了 發到群裡測一下，你們呢？"
      },
      {
        "title": "覺得受之必還的人，虧欠感型 🎒",
        "typeName": "虧欠感型",
        "realReason": "覺得收到多少愛，就得同等地還回去，這份負擔壓得心很重",
        "shortDescription": "你並不是覺得愛很有負擔。而是「收到多少就要還多少」的念頭，讓愛變成了一份作業。",
        "description": "每次收到驚喜、幫助或信任，心裡就開始盤算「我也要做到同等程度」。愛不再是你來我往的自然流動，而更像欠債和還債，對方越好，心裡反而越沉重。一想到哪天還不上，關係會不會因此動搖，不安也隨之而來。",
        "keywords": "收多少還多少，作業感，負擔，盤算，虧欠感",
        "strengths": "責任感強，在關係裡懂得公平地付出與回報",
        "reasonDetail": "收到驚喜或幫助的時候、被信任或聽到對方傾訴煩惱的時候、度過完美一天之後",
        "frequentSaying": "「我也該做點什麼還給對方才行」",
        "changeTips": "接受好意時，用一句「謝謝」收尾，不急著馬上想辦法回報\n坦誠告訴戀人：「總覺得自己該還點什麼，心裡有點負擔」\n檢查彼此的付出時，不用「數量」衡量，而是看「雙方是不是都覺得自在」\n如果接受別人的好意一直讓你有負擔，並且在各種關係裡都覺得必須償還，請和心理諮詢專業人士一起梳理這份心情的根源",
        "oneLiner": "愛不是用來償還的，而是用來分享的。積累下「收下也沒關係」的日子，負擔自然會變輕",
        "shareLine": "為什麼戀人越對我好，我反而越不安？結果：虧欠感型 🎒 原來是因為覺得收多少就要還多少才心累……承認了哈哈 發到群裡測一下，你是哪一型？"
      },
      {
        "title": "害怕期待落空的人，期待恐懼型 🌫️",
        "typeName": "期待恐懼型",
        "realReason": "害怕滿懷期待後落空的那份痛，所以乾脆先壓下期待本身",
        "shortDescription": "你並不是討厭幸福。而是害怕滿懷期待後又落空的痛，所以不敢把心完全交給幸福。",
        "description": "面對約定、信任和平靜的時光，比起開心，你會先感到小心翼翼，甚至故意表現得淡淡的。降低期待，確實能少受點傷，但也會讓此刻的幸福感變淡。這其實是一種把「期待」和「受傷」綁在一起的自我保護。",
        "keywords": "害怕期待，反應淡淡的，壓下心情，先退一步，自我保護",
        "strengths": "謹慎穩重，不會被一時衝動左右，一旦敞開心扉就會愛得很深",
        "reasonDetail": "聽到未來的約定時、被信任的時候、平靜的日子持續下去時",
        "frequentSaying": "「好像不能抱太大期待」",
        "changeTips": "期待升起時，把「值得期待的理由」和「擔心的理由」分兩行寫下來\n從小的期待（比如這個週末的約定）開始一點點嘗試，積累「什麼事都沒發生」的經驗\n告訴戀人：「我是因為害怕期待，才故意表現得淡淡的」，減少彼此的誤會\n如果連抱有期待這件事本身都反覆讓你害怕，並影響到日常生活，請和心理諮詢專業人士一起，安全地探究這份不安的根源",
        "oneLiner": "期待不是傷痛的種子，而是通往愛的門。一點一點打開也沒關係",
        "shareLine": "為什麼戀人越對我好，我反而越不安？結果：期待恐懼型 🌫️ 原來是害怕期待落空才故意淡定……說中了安靜了ᅲ 發到群裡測一下，你們測出什麼？"
      },
      {
        "title": "舊日分手不斷重現的人，舊情重現型 🕰️",
        "typeName": "舊情重現型",
        "realReason": "以前那段先甜後散的經歷，疊在了現在的幸福之上",
        "shortDescription": "你並不是不信任現在的戀人。而是以前那段先甜後散的記憶，正在對現在的幸福發出警報。",
        "description": "溫柔的話語、平靜的日子、「你很重要」這樣的告白，都讓你聯想到以前分手前夕的場景。比起眼前戀人的行動，過去的模式反而反應更大，於是擔心同樣的結局會再次上演。",
        "keywords": "舊日記憶，相似場景，警報，像會重演，陰影",
        "strengths": "從經歷中學到了經驗，為人謹慎，一旦敞開心扉就能談一場深沉而穩定的戀愛",
        "reasonDetail": "遇到和以前相似的話語或情境時、美好瞬間之後隨之而來的安靜時刻",
        "frequentSaying": "「以前也是這樣，然後就結束了」",
        "changeTips": "把戀人現在行動裡「已確認的事實」和「因舊日記憶產生的擔心」分兩行寫下來\n不安升起時，先確認一下：「現在真的有讓我受傷的事情發生嗎？」\n寫下以前那段分手和現在這段感情的三個不同之處，需要時拿出來讀一讀\n如果過去分手的記憶頻繁浮現，影響到現在的戀愛和日常生活，請和心理諮詢專業人士一起，安全地梳理那段記憶",
        "oneLiner": "有陰影，說明曾經有過光。慢慢去相信眼前這束光，也沒關係",
        "shareLine": "為什麼戀人越對我好，我反而越不安？結果：舊情重現型 🕰️ 原來是舊日分手的記憶疊在現在的幸福上……好準啊 發到群裡測一下，你是什麼原因？"
      }
    ]
  },
  "vi": {
    "meta": {
      "title": "Tại sao càng được người yêu chiều chuộng, tôi càng bất an?",
      "description": "Bên cạnh người đối tốt với mình, sao một góc lòng vẫn thấp thỏm? 10 tình huống giúp bạn thấy lý do thật sự vì sao càng hạnh phúc càng bất an, và cách để lòng dịu lại.",
      "tags": [
        "Lo âu tình cảm",
        "Gắn bó",
        "Tâm lý yêu"
      ]
    },
    "questions": [
      {
        "q": "Người yêu chuẩn bị một sự kiện công phu cho ngày kỷ niệm. Bạn hạnh phúc, nhưng một góc lòng vẫn bất an. Suy nghĩ gần nhất với bạn là?",
        "opts": [
          "Không chắc mình có đủ tốt để nhận được tình yêu như thế này",
          "Nhận nhiều như vậy rồi, mình cũng phải đáp lại tương xứng mới được — áp lực dồn lên",
          "Càng để mình kỳ vọng thế này, lỡ sau này sụp đổ thì sao",
          "Nhớ lại lần trước cũng tốt đẹp như vậy rồi bất ngờ kết thúc"
        ]
      },
      {
        "q": "Người yêu nói: 'Gần đây ở cạnh em/anh thật sự rất hạnh phúc'. Bạn...",
        "opts": [
          "Nhận được lời này rồi, mình cũng phải cố gắng tương xứng — lòng thấy nặng",
          "Sợ tin vào lời này rồi kỳ vọng, cuối cùng lại bị tổn thương, nên thận trọng hơn là vui",
          "Nhớ lại lần trước cũng nghe lời hạnh phúc như vậy rồi chia tay",
          "Có cảm giác thời gian tốt đẹp này sẽ không kéo dài mà sắp kết thúc"
        ]
      },
      {
        "q": "Suốt một tuần liền không cãi vã, chỉ toàn những ngày yên bình. Bạn...",
        "opts": [
          "Sợ bình yên kéo dài sẽ khiến mình kỳ vọng nhiều hơn, nên cố tình nén lòng lại",
          "Sự bình yên này giống cách mối quan hệ cũ từng kết thúc, nên lòng cảnh giác trước",
          "Cảm giác thời gian tốt đẹp này sẽ không kéo dài mà bất ngờ kết thúc, ngày càng lớn dần",
          "Nghi ngờ liệu mình có xứng đáng được hưởng sự bình yên này không"
        ]
      },
      {
        "q": "Người yêu nói 'Đừng lo, để anh/em làm cho' rồi giải quyết việc thay bạn. Bạn...",
        "opts": [
          "Nhớ lại cảnh người từng chăm sóc mình như vậy bỗng biến mất",
          "Người ấy càng tốt với mình, lúc chia xa sẽ càng đau — lòng đau sẵn từ bây giờ",
          "Nghi ngờ và xấu hổ, không biết mình có đáng được giúp đỡ như vậy không",
          "Nghĩ mình mang nợ quá nhiều rồi, phải trả lại mới được — lòng thấy nặng"
        ]
      },
      {
        "q": "Người yêu nói: 'Sang năm mình lại đi du lịch cùng nhau nhé'. Bạn...",
        "opts": [
          "Ngay khoảnh khắc nghe lời hứa, lại nghĩ liệu đến lúc đó có còn bên nhau không",
          "Nghi ngờ mình có đủ giá trị để nhận được lời hứa như vậy không",
          "Nhận được lời hứa rồi, cảm thấy áp lực phải làm điều gì tương xứng",
          "Sợ đặt kỳ vọng vào lời hứa rồi nó tan vỡ sẽ quá đau, nên thôi không mong đợi nữa"
        ]
      },
      {
        "q": "Người yêu trải lòng về chuyện khó khăn và nói: 'Chỉ có thể nói điều này với em/anh thôi'. Bạn...",
        "opts": [
          "Vui vì được tin tưởng nhiều như vậy, nhưng lại sợ hãi khi tưởng tượng đến lúc niềm tin đó tan vỡ",
          "Nhớ lại lần trước người tin tưởng mình như vậy đột nhiên rời đi, nên thấy bất an",
          "Không tự tin liệu mình có đủ khả năng lắng nghe để xứng với sự tin tưởng đó không",
          "Cảm thấy áp lực phải lắng nghe tốt hơn nữa, đền đáp tương xứng với niềm tin đã nhận"
        ]
      },
      {
        "q": "Người yêu về sớm và bất ngờ đến thăm bạn. Bạn...",
        "opts": [
          "Nhớ lại kinh nghiệm rằng sau những khoảnh khắc tốt đẹp như vậy luôn có chuyện không hay xảy đến, lòng vội vã lo lắng",
          "Cảm thấy hạnh phúc này sẽ không kéo dài, nên bắt đầu tưởng tượng về hồi kết ngay từ lúc này",
          "Nghĩ mình cũng phải đáp lại tương xứng với sự quan tâm ấy, nên cảm thấy áp lực",
          "Sợ đặt kỳ vọng vào hạnh phúc này rồi sau sụp đổ, nên cố tình phản ứng thật dửng dưng"
        ]
      },
      {
        "q": "Người yêu nói: 'Em/anh thật sự là người quan trọng với anh/em'. Bạn...",
        "opts": [
          "Thoáng nghĩ hạnh phúc này sẽ không kéo dài mà sắp kết thúc",
          "Nghi ngờ liệu lời này có xứng với mình không, nên không thể đón nhận một cách thoải mái",
          "Sợ tin và đặt kỳ vọng vào lời này rồi lại tổn thương, nên lùi một bước khỏi niềm tin đó",
          "Nhớ lại lần trước cũng từng được nghe lời quan trọng ấy, rồi cuối cùng người đó vẫn rời đi"
        ]
      },
      {
        "q": "Trên đường về sau một ngày hoàn hảo cùng người yêu. Bạn...",
        "opts": [
          "Có lúc nghi ngờ liệu mình có xứng đáng được hưởng một ngày tốt đẹp như vậy không",
          "Nghĩ rằng nhận được bao nhiêu hôm nay, lần sau mình phải làm nhiều hơn — như một bài tập đè nặng lên lòng",
          "Nhớ lại ngày hoàn hảo trước đây rồi sau đó chia tay, lòng thấy nặng nề",
          "Có cảm giác ngày tốt đẹp này sẽ là lần cuối, lòng trở nên vội vã"
        ]
      },
      {
        "q": "Người yêu hỏi: 'Sao gần đây trông em/anh có vẻ bất an vậy?'. Điều gần nhất với lòng bạn là?",
        "opts": [
          "Sợ không thể đáp lại tương xứng với những gì đã nhận, nên lòng luôn cảm thấy như mang nợ",
          "Sợ đặt kỳ vọng vào hạnh phúc rồi nó sụp đổ, nên chính việc kỳ vọng cũng khiến mình sợ",
          "Hạnh phúc càng lớn, lại càng có cảm giác ngày kết thúc cũng đang đến gần",
          "Cứ nghi ngờ liệu mình có xứng với một người tốt như vậy không"
        ]
      }
    ],
    "results": [
      {
        "title": "Người dự cảm hồi kết ngay khi đang hạnh phúc, Kiểu dự cảm chia tay ⏳",
        "typeName": "Kiểu dự cảm chia tay",
        "realReason": "Khoảnh khắc tốt đẹp càng lớn, bạn lại càng tưởng tượng trước về ngày nó kết thúc",
        "shortDescription": "Bạn không khó chịu với hạnh phúc. Hạnh phúc càng lớn, bạn lại càng cảm thấy ngày mất đi nó cũng đang đến gần, nên lòng căng lên từ trước.",
        "description": "Trong những khoảnh khắc tốt đẹp như một sự kiện, một tuần yên bình, hay một ngày hoàn hảo, suy nghĩ 'có khi đây là lần cuối' lại xuất hiện. Tưởng tượng trước về hồi kết có vẻ sẽ giảm bớt cú sốc, nhưng hạnh phúc hiện tại cũng vì thế mà giảm đi. Thời gian để tận hưởng hạnh phúc dễ biến thành thời gian để chuẩn bị cho nỗi bất an.",
        "keywords": "Dự cảm hồi kết, Cảm giác có thể là lần cuối, Tưởng tượng trước, Căng lòng, Hạnh phúc thành bất an",
        "strengths": "Trân trọng mối quan hệ và cảm nhận sâu sắc giá trị của từng khoảnh khắc hiện tại",
        "reasonDetail": "Khi nhận một sự kiện lớn, khi nghe lời hứa về tương lai, khi mọi thứ yên bình không cãi vã",
        "frequentSaying": "\"Không biết có nên tốt đẹp thế này không nữa\"",
        "changeTips": "Khi dự cảm hồi kết, hãy kiểm tra thực tế: 'Có chuyện xấu nào thực sự đang xảy ra ngay bây giờ không'\nGhi lại khoảnh khắc hạnh phúc bằng ảnh hoặc ghi chú để luyện cách ở lại với 'hiện tại'\nNói thật lòng với người yêu: \"Em/anh hạnh phúc nên lại thấy bất an\"\nNếu nỗi bất an tưởng tượng hồi kết lặp lại ở mọi khoảnh khắc tốt đẹp và ảnh hưởng đến đời sống (giấc ngủ, sự tập trung), đừng cố tự mình giải quyết, hãy trò chuyện với chuyên gia tư vấn tâm lý",
        "oneLiner": "Tâm lý chuẩn bị cho hồi kết là dấu hiệu cho thấy tình yêu rất sâu đậm. Hãy dành một chút năng lượng đó cho hạnh phúc của hôm nay",
        "shareLine": "Tại sao càng được người yêu chiều chuộng, tôi càng bất an? Kết quả: Kiểu dự cảm chia tay ⏳ Hóa ra mình hay tưởng tượng trước về hồi kết ngay khi đang hạnh phúc... rùng mình. Khoe kết quả lên nhóm chat! Các bạn ra gì?"
      },
      {
        "title": "Người cảm thấy mình không có tư cách để nhận yêu thương, Kiểu nghi ngờ tư cách 🪞",
        "typeName": "Kiểu nghi ngờ tư cách",
        "realReason": "Suy nghĩ rằng tình yêu này quá tốt so với mình khiến tình yêu trở nên bất an",
        "shortDescription": "Bạn không bất an vì thiếu tình yêu. Bạn bất an vì tình yêu mình nhận được không cảm thấy thật sự thuộc về mình.",
        "description": "Trước một sự kiện công phu, một lời nói quý trọng, hay một ngày hoàn hảo, nghi ngờ 'liệu mình có phải người đáng được nhận điều này' lại trỗi lên đầu tiên. Tình yêu càng lớn, bạn càng cảm thấy nó quá sức với mình, và lo sợ rằng một ngày bản chất thật của mình bị phát hiện, tình yêu ấy sẽ biến mất, nên lòng không thể thoải mái.",
        "keywords": "Quá tốt so với mình, Tư cách để nhận, Sợ bị phát hiện, Khó chịu khi được khen, Tự nghi ngờ",
        "strengths": "Khiêm tốn, trân trọng những gì nhận được và chân thành với người mình yêu",
        "reasonDetail": "Khi nhận được sự chăm chút hay lời khen, khi nghe lời nói quý trọng, khi thời gian yên bình kéo dài",
        "frequentSaying": "\"Người như mình thì có gì đáng để yêu đâu?\"",
        "changeTips": "Ghi lại nguyên văn lời tốt đẹp người yêu đã nói, và đọc lại như một sự thật, không nghi ngờ\nKhi được khen, hãy thử nói \"Cảm ơn\" trước, thay vì \"Không phải đâu\"\nViết ra những điều mình đã đạt được và được công nhận ngoài phạm vi tình yêu, để xây nền tảng tin tưởng vào bản thân\nNếu suy nghĩ bản thân không có giá trị cứ lặp lại mạnh mẽ không chỉ trong tình yêu mà cả trong đời sống hằng ngày, hãy trò chuyện với chuyên gia tư vấn tâm lý",
        "oneLiner": "Chỗ trống để tình yêu đi vào đã luôn tồn tại trong bạn. Hãy thỉnh thoảng tự nhắc mình là người đáng được nhận yêu thương",
        "shareLine": "Tại sao càng được người yêu chiều chuộng, tôi càng bất an? Kết quả: Kiểu nghi ngờ tư cách 🪞 Hóa ra bất an vì cảm thấy tình yêu nhận được không phải của mình... nhột quá. Khoe kết quả lên nhóm chat! Còn các bạn thì sao?"
      },
      {
        "title": "Người cảm thấy nhận bao nhiêu phải trả lại bấy nhiêu, Kiểu mang nợ cảm xúc 🎒",
        "typeName": "Kiểu mang nợ cảm xúc",
        "realReason": "Áp lực phải đáp lại tương xứng với tình yêu đã nhận khiến lòng trở nên nặng nề",
        "shortDescription": "Bạn không thấy tình yêu là gánh nặng. Chính suy nghĩ phải đền đáp tương xứng với những gì đã nhận khiến tình yêu trở thành một bài tập phải hoàn thành.",
        "description": "Mỗi khi nhận được một sự kiện, sự giúp đỡ, hay sự tin tưởng, phép tính 'mình cũng phải làm tương xứng' lại bắt đầu trong đầu. Tình yêu không còn là dòng chảy cho và nhận tự nhiên, mà giống như một món nợ cần trả, nên người yêu càng tốt với bạn, lòng bạn lại càng nặng nề. Nỗi bất an rằng mối quan hệ sẽ lung lay nếu một ngày không thể trả hết cũng theo đó xuất hiện.",
        "keywords": "Trả lại tương xứng, Bài tập phải làm, Áp lực, Phép tính, Cảm giác mắc nợ",
        "strengths": "Trách nhiệm cao và sự chân thành muốn cho-nhận công bằng trong mối quan hệ",
        "reasonDetail": "Khi nhận một sự kiện hay sự giúp đỡ, khi được tin tưởng chia sẻ nỗi lòng, sau một ngày hoàn hảo",
        "frequentSaying": "\"Mình cũng phải làm cho người ta tương xứng như vậy chứ\"",
        "changeTips": "Khi nhận điều gì, chỉ cần nói \"Cảm ơn\" rồi dừng lại, không lập tức tìm cách trả lại ngay\nNói thật lòng với người yêu: \"Em/anh thấy áp lực vì nghĩ mình phải trả lại\"\nKiểm tra việc cho-nhận bằng cảm giác 'cả hai có thoải mái không', thay vì đếm số lượng\nNếu việc nhận điều gì luôn khiến bạn thấy áp lực và cảm giác phải trả nợ lan rộng trong toàn bộ mối quan hệ, hãy cùng chuyên gia tư vấn tâm lý tìm hiểu gốc rễ của nó",
        "oneLiner": "Tình yêu không phải để trả nợ, mà để chia sẻ. Khi những ngày được nhận mà không áp lực tích lũy dần, gánh nặng cũng sẽ nhẹ đi",
        "shareLine": "Tại sao càng được người yêu chiều chuộng, tôi càng bất an? Kết quả: Kiểu mang nợ cảm xúc 🎒 Hóa ra lòng nặng nề vì nghĩ nhận bao nhiêu phải trả lại bấy nhiêu... đúng mình quá. Khoe kết quả lên nhóm chat! Các bạn ra kiểu gì?"
      },
      {
        "title": "Người sợ kỳ vọng rồi sụp đổ, Kiểu sợ kỳ vọng 🌫️",
        "typeName": "Kiểu sợ kỳ vọng",
        "realReason": "Nỗi đau khi kỳ vọng rồi tan vỡ khiến bạn sợ hãi và tự nén chính sự kỳ vọng của mình",
        "shortDescription": "Bạn không ghét hạnh phúc. Bạn chỉ sợ nỗi đau khi đặt kỳ vọng rồi nó sụp đổ, nên không thể trao hết lòng mình cho hạnh phúc.",
        "description": "Trước một lời hứa, một niềm tin, hay sự yên bình, sự thận trọng luôn đến trước niềm vui, và bạn cố tình phản ứng dửng dưng. Hạ thấp kỳ vọng thì ít bị tổn thương hơn, nhưng cũng khiến bạn cảm nhận hạnh phúc hiện tại ít đi. Đây là một kiểu phòng vệ gần như gắn liền kỳ vọng với tổn thương thành một.",
        "keywords": "Sợ kỳ vọng, Phản ứng dửng dưng, Tự nén lòng, Lùi một bước, Phòng vệ",
        "strengths": "Cẩn trọng, không dễ bị cảm xúc lôi kéo, và yêu rất sâu đậm khi đã mở lòng",
        "reasonDetail": "Khi nghe lời hứa về tương lai, khi được tin tưởng, khi sự yên bình kéo dài",
        "frequentSaying": "\"Chắc không nên kỳ vọng nhiều quá\"",
        "changeTips": "Khi kỳ vọng trỗi lên, hãy viết ra hai dòng riêng biệt: 'lý do nên kỳ vọng' và 'lý do lo lắng'\nThử mở lòng từng chút với những kỳ vọng nhỏ (như lời hẹn cuối tuần này), để tích lũy kinh nghiệm rằng chẳng có chuyện gì xảy ra cả\nNói với người yêu: \"Em/anh sợ kỳ vọng nên hay phản ứng dửng dưng\" để giảm hiểu lầm\nNếu việc kỳ vọng tự nó liên tục khiến bạn sợ hãi và ảnh hưởng đến đời sống hằng ngày, hãy tìm hiểu an toàn gốc rễ của nỗi bất an này cùng chuyên gia tư vấn tâm lý",
        "oneLiner": "Kỳ vọng không phải hạt giống của tổn thương, mà là cánh cửa của tình yêu. Mở từng chút một cũng không sao cả",
        "shareLine": "Tại sao càng được người yêu chiều chuộng, tôi càng bất an? Kết quả: Kiểu sợ kỳ vọng 🌫️ Hóa ra mình hay nén kỳ vọng vì sợ nó sụp đổ... đúng quá nên im luôn. Khoe kết quả lên nhóm chat! Các bạn ra gì?"
      },
      {
        "title": "Người thấy ký ức chia tay cũ sống lại, Kiểu tái hiện quá khứ 🕰️",
        "typeName": "Kiểu tái hiện quá khứ",
        "realReason": "Trải nghiệm từng tốt đẹp rồi kết thúc trong quá khứ đang chồng lên hạnh phúc hiện tại",
        "shortDescription": "Bạn không phải không tin người yêu hiện tại. Ký ức từng tốt đẹp rồi kết thúc trong quá khứ đang gửi tín hiệu cảnh báo đến hạnh phúc bây giờ.",
        "description": "Lời nói dịu dàng, những ngày yên bình, lời thổ lộ quý trọng lại khiến bạn cảm thấy giống với khoảnh khắc ngay trước khi chia tay trước đây. Khuôn mẫu của quá khứ phản ứng mạnh hơn hành động hiện tại, nên nỗi bất an rằng kết cục tương tự sẽ lặp lại lại xuất hiện.",
        "keywords": "Ký ức cũ, Khung cảnh tương tự, Lời cảnh báo, Cảm giác sẽ lặp lại, Bóng đổ",
        "strengths": "Có sức mạnh học được từ trải nghiệm, cẩn trọng, và yêu sâu đậm, vững chắc khi đã mở lòng",
        "reasonDetail": "Khi gặp lời nói hay tình huống giống trước đây, khi sự tĩnh lặng đến sau một khoảnh khắc tốt đẹp",
        "frequentSaying": "\"Trước đây cũng kết thúc vào lúc như thế này\"",
        "changeTips": "Viết ra hai dòng riêng biệt: 'điều đã được xác nhận là sự thật' và 'nỗi lo xuất phát từ ký ức cũ' trong hành động của người yêu hiện tại\nKhi bất an trỗi lên, hãy tự hỏi trước: 'Có chuyện gì thực sự làm mình đau ngay bây giờ không?'\nViết ra ba điểm khác biệt giữa cuộc chia tay cũ và hiện tại, và đọc lại khi cần\nNếu ký ức chia tay cũ thường xuyên trỗi lên và khiến tình yêu cùng đời sống hiện tại trở nên khó khăn, hãy cùng chuyên gia tư vấn tâm lý sắp xếp lại ký ức đó một cách an toàn",
        "oneLiner": "Có bóng đổ nghĩa là từng có ánh sáng ở đó. Hãy thử tin tưởng ánh sáng hiện tại một cách chậm rãi, điều đó không sao cả",
        "shareLine": "Tại sao càng được người yêu chiều chuộng, tôi càng bất an? Kết quả: Kiểu tái hiện quá khứ 🕰️ Hóa ra ký ức chia tay cũ đang chồng lên hạnh phúc hiện tại... rùng mình. Khoe kết quả lên nhóm chat! Các bạn vì lý do gì?"
      }
    ]
  },
  "id": {
    "meta": {
      "title": "Kenapa Semakin Dicintai, Malah Semakin Cemas?",
      "description": "Di samping orang yang baik padamu, kenapa satu sudut hati tetap gelisah? Lewat 10 situasi, ketahui alasan asli kenapa semakin bahagia justru semakin cemas — dan cara menenangkan hati.",
      "tags": [
        "Kecemasan Cinta",
        "Attachment",
        "Psikologi Pacaran"
      ]
    },
    "questions": [
      {
        "q": "Pasanganmu menyiapkan acara yang penuh perhatian untuk hari jadi. Kamu bahagia, tapi satu sudut hatimu tetap cemas. Pikiran yang paling dekat denganmu?",
        "opts": [
          "Tidak yakin apakah aku cukup baik untuk menerima cinta seperti ini",
          "Sudah menerima sebanyak ini, aku juga harus membalas yang setara — rasanya jadi beban",
          "Kalau terus berharap seperti ini, bagaimana kalau nanti semuanya runtuh",
          "Teringat dulu juga sebaik ini lalu tiba-tiba berakhir"
        ]
      },
      {
        "q": "Pasanganmu bilang, 'Belakangan ini senang banget bisa bersamamu'. Kamu...",
        "opts": [
          "Merasa harus membalas usaha sebesar kata-kata itu — hatinya jadi berat",
          "Takut percaya dan berharap lalu malah terluka, jadi lebih berhati-hati daripada senang",
          "Teringat dulu juga dengar kata 'bahagia' lalu setelahnya putus",
          "Merasa waktu indah ini tidak akan bertahan lama dan segera berakhir"
        ]
      },
      {
        "q": "Satu minggu penuh berlalu tanpa pertengkaran, hanya hari-hari yang damai. Kamu...",
        "opts": [
          "Takut kedamaian yang berlanjut akan membuat harapanmu makin besar, jadi sengaja menahan hati",
          "Kedamaian ini terasa mirip dengan cara hubungan lama berakhir, jadi hati jadi waspada lebih dulu",
          "Perasaan bahwa waktu baik ini tidak akan bertahan dan tiba-tiba berakhir makin membesar",
          "Ragu apakah kamu pantas menikmati ketenangan seperti ini"
        ]
      },
      {
        "q": "Pasanganmu menyelesaikan urusanmu dan bilang, 'Nggak usah khawatir, biar aku yang urus'. Kamu...",
        "opts": [
          "Teringat momen dulu orang yang begitu baik padamu tiba-tiba menghilang",
          "Semakin baik dia padamu, semakin besar rasanya kalau nanti berakhir — hati sudah sakit lebih dulu",
          "Ragu dan malu, merasa tidak pantas menerima bantuan seperti ini",
          "Merasa sudah terlalu banyak berutang, jadi harus membalasnya — hati jadi berat"
        ]
      },
      {
        "q": "Pasanganmu bilang, 'Tahun depan kita jalan-jalan bareng lagi ya'. Kamu...",
        "opts": [
          "Begitu mendengar janji itu, langsung muncul firasat apakah hubungan masih berlanjut sampai saat itu",
          "Muncul keraguan apakah kamu cukup berharga untuk menerima janji seperti itu",
          "Merasa terbebani, seolah harus melakukan sesuatu yang setara karena sudah menerima janji itu",
          "Takut berharap pada janji itu lalu kecewa kalau tidak terwujud, jadi memilih tidak berharap sama sekali"
        ]
      },
      {
        "q": "Pasanganmu bercerita tentang hal berat dan bilang, 'Aku hanya bisa cerita ini padamu'. Kamu...",
        "opts": [
          "Senang karena dipercaya sebesar itu, tapi takut membayangkan saat kepercayaan itu hancur, sehingga ragu untuk berharap",
          "Teringat dulu orang yang mempercayaimu seperti itu tiba-tiba pergi, jadi merasa cemas",
          "Tidak percaya diri apakah kamu cukup bisa mendengarkan dengan baik untuk pantas menerima kepercayaan itu",
          "Merasa beban makin besar untuk mendengarkan lebih baik lagi demi membalas kepercayaan yang diterima"
        ]
      },
      {
        "q": "Pasanganmu pulang kerja lebih awal dan datang mengunjungimu secara mendadak. Kamu...",
        "opts": [
          "Teringat pengalaman bahwa setelah momen indah seperti ini selalu datang sesuatu yang buruk, jadi hati jadi gelisah",
          "Merasa kebahagiaan ini tidak akan bertahan lama, jadi mulai membayangkan akhirnya sejak sekarang",
          "Merasa terbebani karena berpikir harus membalas perhatian itu dengan hal yang setara",
          "Takut berharap pada kebahagiaan ini lalu nanti hancur, jadi sengaja bersikap datar"
        ]
      },
      {
        "q": "Pasanganmu bilang, 'Kamu benar-benar orang yang berharga bagiku'. Kamu...",
        "opts": [
          "Sekilas berpikir kebahagiaan ini tidak akan bertahan lama dan segera berakhir",
          "Ragu apakah kata-kata itu memang pantas untukmu, sehingga tidak bisa menerimanya dengan nyaman",
          "Takut percaya dan berharap pada kata-kata itu lalu terluka, jadi mundur selangkah dari kepercayaan itu",
          "Teringat dulu juga pernah mendengar kata 'berharga' itu, tapi akhirnya orang itu tetap pergi"
        ]
      },
      {
        "q": "Dalam perjalanan pulang setelah menghabiskan hari yang sempurna dengan pasangan. Kamu...",
        "opts": [
          "Ada momen ragu apakah kamu pantas menikmati hari yang sebaik ini",
          "Merasa harus melakukan lebih banyak lagi lain kali karena sudah menerima sebanyak ini hari ini — seperti tugas yang membebani hati",
          "Teringat hari sempurna dulu yang justru diikuti perpisahan, hati jadi berat",
          "Muncul firasat hari baik ini akan menjadi yang terakhir, hati jadi gelisah"
        ]
      },
      {
        "q": "Pasanganmu bertanya, 'Kenapa belakangan ini kamu terlihat cemas?'. Hal yang paling dekat dengan isi hatimu?",
        "opts": [
          "Takut tidak bisa membalas sebesar yang diterima, jadi hati selalu merasa seperti berutang",
          "Takut berharap pada kebahagiaan lalu hancur, sehingga berharap itu sendiri yang menakutkan",
          "Semakin besar kebahagiaan, semakin muncul firasat bahwa hari berakhirnya juga semakin dekat",
          "Terus-menerus ragu apakah kamu pantas untuk orang yang baik seperti itu"
        ]
      }
    ],
    "results": [
      {
        "title": "Orang yang merasakan firasat akhir saat sedang bahagia, Tipe Firasa Perpisahan ⏳",
        "typeName": "Tipe Firasa Perpisahan",
        "realReason": "Semakin besar momen baik, kamu semakin membayangkan lebih dulu hari semuanya berakhir",
        "shortDescription": "Kamu tidak merasa tidak nyaman dengan kebahagiaan. Semakin besar kebahagiaan, semakin kamu merasa hari kehilangannya juga semakin dekat, sehingga hatimu tegang lebih dulu.",
        "description": "Di momen-momen baik seperti sebuah acara, seminggu yang damai, atau hari yang sempurna, justru muncul pikiran 'mungkin ini yang terakhir'. Membayangkan akhir lebih dulu terasa seperti mengurangi dampak kekecewaan, tapi kebahagiaan saat ini pun ikut berkurang. Waktu untuk menikmati kebahagiaan mudah berubah menjadi waktu untuk bersiap menghadapi kecemasan.",
        "keywords": "Firasat akhir, Rasa 'mungkin terakhir', Membayangkan lebih dulu, Hati tegang, Bahagia jadi cemas",
        "strengths": "Menghargai hubungan dan merasakan nilai momen saat ini secara mendalam",
        "reasonDetail": "Saat menerima acara besar, saat mendengar janji tentang masa depan, saat semua damai tanpa pertengkaran",
        "frequentSaying": "\"Apa boleh ya sebahagia ini?\"",
        "changeTips": "Saat merasakan firasat akhir, periksa faktanya: 'Apakah benar-benar ada hal buruk yang terjadi sekarang?'\nSimpan momen bahagia lewat foto atau catatan untuk melatih diri tetap berada di 'saat ini'\nKatakan dengan jujur pada pasangan, \"Aku jadi cemas justru karena bahagia\"\nJika kecemasan membayangkan akhir ini terus berulang di setiap momen baik dan memengaruhi keseharian (tidur, konsentrasi), jangan coba selesaikan sendirian — bicaralah dengan profesional konseling",
        "oneLiner": "Hati yang bersiap menghadapi akhir adalah tanda cintamu sangat dalam. Coba alihkan sedikit energi itu untuk kebahagiaan hari ini",
        "shareLine": "Kenapa Semakin Dicintai, Malah Semakin Cemas? Hasil: Tipe Firasa Perpisahan ⏳ Ternyata aku suka membayangkan akhir duluan saat sedang bahagia... merinding. Pamer kartu hasil di grup chat! Kalian dapat tipe apa?"
      },
      {
        "title": "Orang yang merasa tidak pantas menerima cinta, Tipe Ragu Kelayakan 🪞",
        "typeName": "Tipe Ragu Kelayakan",
        "realReason": "Pikiran bahwa cinta ini terlalu berlebihan untukmu membuat cinta itu terasa mencemaskan",
        "shortDescription": "Kamu tidak cemas karena kurang cinta. Kamu cemas karena cinta yang kamu terima tidak terasa benar-benar milikmu.",
        "description": "Di hadapan acara yang penuh perhatian, kata-kata yang menghargaimu, atau hari yang sempurna, keraguan 'apakah aku ini orang yang pantas menerima ini' justru muncul lebih dulu. Semakin besar cintanya, semakin terasa berlebihan untukmu, dan kamu takut suatu hari sosok asli dirimu terbongkar lalu cinta itu hilang, sehingga hatimu tidak bisa tenang.",
        "keywords": "Terasa berlebihan, Kelayakan menerima, Takut terbongkar, Tidak nyaman dipuji, Ragu pada diri sendiri",
        "strengths": "Rendah hati, menghargai apa yang diterima, dan tulus terhadap pasangan",
        "reasonDetail": "Saat menerima perhatian atau pujian, saat mendengar kata-kata yang menghargaimu, saat waktu tenang berlanjut",
        "frequentSaying": "\"Orang seperti aku ini apanya yang bagus sih?\"",
        "changeTips": "Catat kata-kata baik yang diucapkan pasangan apa adanya, lalu baca ulang sebagai fakta tanpa meragukannya\nSaat dipuji, coba jawab \"Terima kasih\" lebih dulu, bukan \"Enggak kok\"\nTulis pencapaian dan pengakuan yang kamu dapat di luar hubungan untuk membangun dasar kepercayaan pada dirimu sendiri\nJika pikiran bahwa dirimu tidak berharga terus muncul kuat tidak hanya dalam hubungan tapi di keseharian secara umum, bicaralah dengan profesional konseling",
        "oneLiner": "Tempat untuk cinta masuk sudah ada dalam dirimu. Sesekali, yakinkan dirimu bahwa kamu pantas menerimanya",
        "shareLine": "Kenapa Semakin Dicintai, Malah Semakin Cemas? Hasil: Tipe Ragu Kelayakan 🪞 Ternyata cemas karena cinta yang diterima tidak terasa milikku... agak nyesek sih. Pamer kartu hasil di grup chat! Kalian gimana?"
      },
      {
        "title": "Orang yang merasa harus membalas sebesar yang diterima, Tipe Merasa Berutang 🎒",
        "typeName": "Tipe Merasa Berutang",
        "realReason": "Tekanan untuk membalas cinta yang diterima secara setara membuat hatimu terasa berat",
        "shortDescription": "Kamu tidak merasa cinta itu memberatkan. Pikiran bahwa kamu harus membalas sebesar yang diterima yang membuat cinta terasa seperti tugas.",
        "description": "Setiap kali menerima acara, bantuan, atau kepercayaan, hitungan 'aku juga harus melakukan hal yang setara' langsung dimulai di kepalamu. Cinta tidak lagi terasa sebagai aliran memberi dan menerima secara alami, tapi seperti utang yang harus dibayar, sehingga semakin baik pasanganmu padamu, semakin berat pula hatimu. Kecemasan bahwa hubungan akan goyah jika suatu hari kamu tidak bisa membalasnya pun ikut muncul.",
        "keywords": "Membalas setara, Tugas yang harus diselesaikan, Tekanan, Hitung-hitungan, Rasa berutang",
        "strengths": "Rasa tanggung jawab yang tinggi dan ketulusan untuk memberi serta menerima secara adil dalam hubungan",
        "reasonDetail": "Saat menerima acara atau bantuan, saat dipercaya untuk mendengar cerita berat, setelah hari yang sempurna",
        "frequentSaying": "\"Aku juga harus melakukan hal yang setara untuk dia\"",
        "changeTips": "Saat menerima sesuatu, cukup ucapkan \"Terima kasih\" dan berhenti di situ, jangan langsung mencari cara membalasnya\nKatakan dengan jujur pada pasangan, \"Aku merasa terbebani karena berpikir harus membalas ini\"\nPeriksa hubungan memberi-menerima dengan pertanyaan 'apakah kami berdua nyaman', bukan dengan menghitung angka\nJika rasa harus membalas ini terus menekanmu dan menyebar ke seluruh hubungan, cari tahu akarnya bersama profesional konseling",
        "oneLiner": "Cinta bukan untuk dibayar, tapi untuk dibagi. Saat hari-hari menerima tanpa beban semakin bertumpuk, tekanannya pun akan mengecil",
        "shareLine": "Kenapa Semakin Dicintai, Malah Semakin Cemas? Hasil: Tipe Merasa Berutang 🎒 Ternyata hati berat karena merasa harus membalas sebesar yang diterima... bener banget. Pamer kartu hasil di grup chat! Kalian tipe apa?"
      },
      {
        "title": "Orang yang takut berharap lalu kecewa, Tipe Takut Berharap 🌫️",
        "typeName": "Tipe Takut Berharap",
        "realReason": "Rasa sakit saat berharap lalu harapan itu hancur membuatmu menekan harapan itu sendiri",
        "shortDescription": "Kamu tidak membenci kebahagiaan. Kamu hanya takut pada rasa sakit saat berharap lalu harapan itu runtuh, sehingga tidak bisa menyerahkan hatimu sepenuhnya pada kebahagiaan.",
        "description": "Di hadapan sebuah janji, kepercayaan, atau kedamaian, kehati-hatian selalu datang lebih dulu daripada kebahagiaan, dan kamu sengaja bersikap datar. Menurunkan harapan memang membuatmu lebih sedikit terluka, tapi juga membuatmu merasakan kebahagiaan saat ini lebih sedikit. Ini adalah bentuk pertahanan diri yang hampir menyatukan harapan dan luka menjadi satu hal yang sama.",
        "keywords": "Takut berharap, Sikap datar, Menekan hati, Mundur selangkah, Pertahanan diri",
        "strengths": "Hati-hati, tidak mudah terombang-ambing oleh impuls, dan mencintai dengan sangat dalam saat sudah membuka hati",
        "reasonDetail": "Saat mendengar janji tentang masa depan, saat dipercaya, saat kedamaian berlanjut",
        "frequentSaying": "\"Kayaknya nggak boleh terlalu berharap deh\"",
        "changeTips": "Saat harapan muncul, tulis dua baris terpisah: 'alasan boleh berharap' dan 'alasan yang mencemaskan'\nCoba buka harapan kecil satu per satu (seperti janji akhir pekan ini), untuk mengumpulkan pengalaman bahwa tidak terjadi apa-apa\nBeri tahu pasangan, \"Aku takut berharap jadi sering bersikap datar\" untuk mengurangi kesalahpahaman\nJika rasa takut berharap ini terus berulang dan memengaruhi keseharianmu, telusuri akar kecemasan ini dengan aman bersama profesional konseling",
        "oneLiner": "Harapan bukan benih dari luka, melainkan pintu menuju cinta. Membukanya sedikit demi sedikit juga tidak masalah",
        "shareLine": "Kenapa Semakin Dicintai, Malah Semakin Cemas? Hasil: Tipe Takut Berharap 🌫️ Ternyata aku suka menekan harapan karena takut hancur... bener banget jadi diem. Pamer kartu hasil di grup chat! Kalian dapat tipe apa?"
      },
      {
        "title": "Orang yang kenangan perpisahan lama kembali hidup, Tipe Kilas Balik Masa Lalu 🕰️",
        "typeName": "Tipe Kilas Balik Masa Lalu",
        "realReason": "Pengalaman dulu yang pernah baik lalu berakhir kini menimpa kebahagiaan yang sedang kamu rasakan",
        "shortDescription": "Kamu bukan tidak percaya pada pasangan saat ini. Kenangan dulu yang pernah baik lalu berakhir sedang mengirim sinyal peringatan pada kebahagiaanmu sekarang.",
        "description": "Kata-kata lembut, hari yang damai, pengakuan yang menghargaimu justru terasa mirip dengan momen tepat sebelum perpisahan di masa lalu. Pola masa lalu bereaksi lebih kuat daripada tindakan saat ini, sehingga muncul kecemasan bahwa akhir yang sama akan terulang lagi.",
        "keywords": "Kenangan lama, Suasana yang mirip, Sinyal peringatan, Rasa akan terulang, Bayangan masa lalu",
        "strengths": "Memiliki kekuatan dari pengalaman, berhati-hati, dan mencintai dengan dalam serta kokoh saat sudah membuka hati",
        "reasonDetail": "Saat menghadapi kata-kata atau situasi yang mirip masa lalu, saat keheningan datang setelah momen baik",
        "frequentSaying": "\"Dulu juga berakhir di saat seperti ini\"",
        "changeTips": "Tulis dua baris terpisah dalam tindakan pasangan saat ini: 'fakta yang sudah terkonfirmasi' dan 'kekhawatiran yang muncul karena kenangan lama'\nSaat kecemasan muncul, tanyakan dulu: 'Apakah benar-benar ada hal yang menyakitiku sekarang?'\nTulis tiga perbedaan antara perpisahan dulu dan sekarang, lalu baca kembali saat diperlukan\nJika kenangan perpisahan masa lalu sering muncul dan membuat hubungan serta keseharianmu sekarang terasa berat, rapikan kenangan itu dengan aman bersama profesional konseling",
        "oneLiner": "Adanya bayangan berarti pernah ada cahaya di sana. Coba percayai cahaya saat ini perlahan-lahan, itu tidak masalah",
        "shareLine": "Kenapa Semakin Dicintai, Malah Semakin Cemas? Hasil: Tipe Kilas Balik Masa Lalu 🕰️ Ternyata kenangan perpisahan lama menimpa kebahagiaan sekarang... merinding. Pamer kartu hasil di grup chat! Kalian karena alasan apa?"
      }
    ]
  }
};
