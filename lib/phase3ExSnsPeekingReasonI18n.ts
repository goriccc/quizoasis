/** Auto-built from scripts/_ex_sns_peeking_i18n/*.json — do not hand-edit */
export type Phase3ExSnsPeekingReasonForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3ExSnsPeekingReasonResultText = {
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
  results: Phase3ExSnsPeekingReasonResultText[];
};

export const PHASE3_EX_SNS_PEEKING_REASON_I18N: Record<Phase3ExSnsPeekingReasonForeignLocale, LocaleBundle> = {
  "en": {
    "meta": {
      "title": "Why Do I Still Peek at My Ex's SNS After the Breakup?",
      "description": "It's over — so why do you keep opening that profile? These 10 scenarios reveal the real reason you keep checking, and how to settle your heart.",
      "tags": [
        "SNS Peeking",
        "Breakup Psychology"
      ]
    },
    "questions": [
      {
        "q": "One month after the breakup, your ex's account pops into your head on the commute. You...",
        "opts": [
          "Want to compare how they're doing vs you",
          "Open it for comfort because checking soothes you a bit",
          "Hand opens the app before the thought finishes",
          "Unfinished story keeps pulling your mind there"
        ]
      },
      {
        "q": "1 a.m., can't sleep. You...",
        "opts": [
          "Look for old photos still up and soothe yourself with that warmth",
          "Scroll aimlessly and somehow land on their account",
          "Unsaid words rise so you check what changed",
          "Hunt for traces they posted thinking of you"
        ]
      },
      {
        "q": "New post notification from your ex. You...",
        "opts": [
          "Can't not look just because it's new — check immediately",
          "Want to confirm if your story is really over",
          "Read line by line for anything that might be about you",
          "First weigh whether they look happier than you"
        ]
      },
      {
        "q": "Their account went private. You...",
        "opts": [
          "Feel unfinished and hollow — is this how it ends?",
          "Wonder if they did it as a signal for you",
          "Wonder if they're hiding a new person and how they compare to you",
          "Tell yourself it's a relief you can't see anymore"
        ]
      },
      {
        "q": "Friend asks how they're doing. You...",
        "opts": [
          "First wonder if they talk about you and how",
          "Compare your life to theirs",
          "Hearing about them oddly settles you",
          "Say you don't know while itching to check your phone"
        ]
      },
      {
        "q": "Day three of swearing not to look. You...",
        "opts": [
          "Tried to hold out but habit opens the app",
          "Feel unfinished unless you check",
          "Still wonder if their life looks better than yours",
          "Soft moments after checking make it hard to quit"
        ]
      },
      {
        "q": "You reopen the last chat. You...",
        "opts": [
          "Linger on the awkward ending",
          "Scan for signs they might reach out / still think of you",
          "Warmth returns reading old messages",
          "Want to check small changes like last active / profile pic"
        ]
      },
      {
        "q": "They posted a fun photo with friends. You...",
        "opts": [
          "Hunt for regret or a look that recalls you",
          "Compare — you're still hurting and they seem fine",
          "One post leads to scrolling more posts",
          "Questions about how it ended come back"
        ]
      },
      {
        "q": "A month later, signs of a new romance. You...",
        "opts": [
          "Compare yourself and wonder if you weren't enough",
          "Tell yourself it's settled but want one more look for peace",
          "The finality hits and unfinished feelings rise",
          "Want to know if it's truly over / if they forgot you"
        ]
      },
      {
        "q": "Friend asks if you still check their account. Closest inner truth?",
        "opts": [
          "Honestly checking became a soothing habit",
          "More hand-habit than reason — hard to stop",
          "Want to confirm they still think of you",
          "Want to compare how they live without you"
        ]
      }
    ],
    "results": [
      {
        "title": "The One Who Wants to Know If You're Still on Their Mind, Lingering-Check Type 🔍",
        "typeName": "Lingering-Check Type",
        "realReason": "You want to know if you're still on their mind.",
        "shortDescription": "You're not stalking. You just want proof they still think about you — some lingering trace.",
        "description": "The wording of a new post, an account going private, a tiny profile change — each one feels like a signal aimed at you. Checking gives you a brief flicker of movement in your heart, but since there's never a clear answer, you end up going back in again. This feeling is proof that love still lingers, but it also burns a lot of energy on interpretation.",
        "keywords": "Looking for Clues, Reading Signals, Do They Think of Me, Unfinished Feelings, Overanalyzing",
        "strengths": "A deep heart that took the relationship seriously and doesn't erase people easily",
        "reasonDetail": "When you spot a new post, a profile change, or an active-status ping — or reopen your last chat",
        "frequentSaying": "\"I wonder if they're still thinking about me.\"",
        "changeTips": "When the urge to check hits, write down in one sentence what answer you're actually looking for.\nMute or hide their account so new notifications never reach your eyes.\nWrite two columns side by side: what you interpreted as a signal, and what's actually confirmed fact.",
        "oneLiner": "The more you read into clues, the bigger they grow. The answer isn't in their profile — it's in your own heart.",
        "shareLine": "Why do I still stalk my ex's SNS after the breakup? My result: Lingering-Check Type 🔍 Apparently I just want to know if they still think about me... this is SO me, I got chills. Saved it. What'd you get?"
      },
      {
        "title": "The One Who Puts Themselves and Their Ex on a Scale, Comparison Type ⚖️",
        "typeName": "Comparison Type",
        "realReason": "You're measuring yourself by comparing your life to theirs.",
        "shortDescription": "You're not curious about them. You're placing your life next to theirs to measure where you stand.",
        "description": "A happy-looking photo, a hint of someone new, signs they're doing well — any of it can sink your mood. Comparison piles on top of heartbreak, and the thought \"Am I the only one falling behind?\" grows bigger. Checking their account rarely brings comfort — it usually just wears you out more.",
        "keywords": "Comparing Updates, Feeling Left Behind, Curious About Their New Person, Weighing Yourself, Self-Evaluation",
        "strengths": "Clear personal standards and a strong drive to keep growing and improving",
        "reasonDetail": "When you see a happy-looking post, or spot a clue they've started dating someone new",
        "frequentSaying": "\"They're doing great and I'm the only one still a mess.\"",
        "changeTips": "The moment comparison kicks in, write down three things you've accomplished this month.\nRemember that what's posted online is just an edited highlight reel, not the full picture.\nSwap your point of comparison from them to 'yourself a month ago' instead.",
        "oneLiner": "Their updates are the edited version; your heart is the original. Spend more time taking care of the original.",
        "shareLine": "Why do I still stalk my ex's SNS after the breakup? My result: Comparison Type ⚖️ Apparently I'm putting their life and mine on a scale... this is literally me, I got chills. Saving this. What'd you get?"
      },
      {
        "title": "The One Who Soothes Themselves by Looking, Self-Comfort Type 🫶",
        "typeName": "Self-Comfort Type",
        "realReason": "Watching gives your mind a brief moment of ease — it's become a form of comfort.",
        "shortDescription": "You're not trying to deepen the wound. That account has quietly become a familiar comfort that soothes you.",
        "description": "Old photos, old messages, that familiar profile — they make you feel a little warmer, a little steadier. It's as if that account fills the empty space the breakup left behind. But the more you lean on it for comfort, the harder it gets to stop — and moving on gets pushed further back.",
        "keywords": "Comfort, Familiarity, Warm Memories, A Sense of Calm, Hard to Quit",
        "strengths": "A warmth that treasures good memories and knows how to soothe your own emotions",
        "reasonDetail": "On sleepless nights, when you feel hollow inside, or when old photos and messages come to mind",
        "frequentSaying": "\"Looking at it just... makes me feel a little better.\"",
        "changeTips": "For the hours you tend to need comfort (like at night), pre-plan a replacement routine — a walk, music, or calling a friend.\nKeep the good memories in your own notes or photo album instead of on their account.\nThis week, make at least one real connection — with a friend or family member — where you can get comfort from an actual person.",
        "oneLiner": "Of course you need comfort. It's just that now, you're allowed to get it from the present version of yourself.",
        "shareLine": "Why do I still stalk my ex's SNS after the breakup? My result: Self-Comfort Type 🫶 Apparently checking became my go-to comfort routine... this is SO me, I got chills. Saved. What'd you get?"
      },
      {
        "title": "The One Whose Hand Moves First, Curiosity-Habit Type 📱",
        "typeName": "Curiosity-Habit Type",
        "realReason": "You open the app out of habit more than reason, just wanting to see what's new.",
        "shortDescription": "You might not even be going in because of lingering feelings. It's a repeated habit where your hand moves before your mind does.",
        "description": "When a new post shows up, you simply can't not look — and one post leads to the next, and the next. The scrolling has already started before you even figure out why. The small hit of stimulation each time you check has repeated into a loop that's hard to break.",
        "keywords": "Habit, Autopilot Scrolling, Curious About New Posts, Binge-Checking, Hard to Stop",
        "strengths": "Quick to pick up on new information and endlessly curious, which makes it easy for you to get absorbed in all kinds of things",
        "reasonDetail": "When a notification pops up, when you're mindlessly scrolling your phone, or in any idle, bored moment",
        "frequentSaying": "\"I didn't even realize it — I was on their page again.\"",
        "changeTips": "Move the app, or mute/block their account, to add extra steps before you can even open it.\nWhen your hand reaches for it, do something else first for three minutes — drink water, stretch, anything.\nSet a specific time of day for scrolling, and keep notifications off the rest of the time.",
        "oneLiner": "If it's your hand's habit rather than your heart, changing your environment is the fastest fix.",
        "shareLine": "Why do I still stalk my ex's SNS after the breakup? My result: Curiosity-Habit Type 📱 Apparently it's my hand that moves first, not my feelings... this is literally me LOL, saving this. What'd you get?"
      },
      {
        "title": "The One Whose Story Isn't Over Yet, Unfinished-Story Type 🧩",
        "typeName": "Unfinished-Story Type",
        "realReason": "Unsaid words and unanswered questions are still hanging there — your heart hasn't gotten closure.",
        "shortDescription": "You don't actually miss them. It's an unfinished story still searching for its period.",
        "description": "Why it ended the way it did, what you never got to say, whether this breakup is really final — questions like these are still sitting in a corner of your heart. Opening their account is, in a way, an attempt to find the ending to that story. But the ending isn't written on their SNS — it's written in the sentences you put together yourself.",
        "keywords": "The Final Period, Words Left Unsaid, Unanswered Questions, An Awkward Ending, Searching for Closure",
        "strengths": "A conscientious drive to close relationships responsibly, and the will to actually work through your emotions",
        "reasonDetail": "When you remember your last conversation, recall the words you never said, or when the breakup finally feels real",
        "frequentSaying": "\"I should have said that one thing before it ended.\"",
        "changeTips": "Write the words you never said as a letter you'll never send — and finish it all the way through.\nList out your unanswered questions, then sort them into 'ones I can answer myself' and 'ones only they would know.'\nPick a day to call it done, and treat muting or hiding their account that day as your official period.",
        "oneLiner": "The ending isn't something they hand you — it's something you write and close yourself. Line by line, the period eventually lands.",
        "shareLine": "Why do I still stalk my ex's SNS after the breakup? My result: Unfinished-Story Type 🧩 Apparently my story just hasn't found its period yet... this is literally me, chills. Saved it. What'd you get?"
      }
    ]
  },
  "ja": {
    "meta": {
      "title": "なぜ別れても元恋人のSNSを覗いてしまうの？",
      "description": "終わった間柄なのに、なぜあのアカウントを開いてしまうの？10の場面で、つい見てしまう本当の理由と、心を整理する方法をお伝えします。",
      "tags": [
        "SNS覗き",
        "別れの心理"
      ]
    },
    "questions": [
      {
        "q": "別れて1か月、仕事帰りにふと元恋人のアカウントが頭に浮かんだ。自分は？",
        "opts": [
          "今どう過ごしているか、自分より上手くいっているように見えるか比べてみたくなる",
          "見ると少し心が落ち着く気がして、慰められたくて開いてしまう",
          "考えるより先に、手が勝手にアプリを開いている",
          "きちんと終われなかった話が残っていて、気持ちがついそちらに向いてしまう"
        ]
      },
      {
        "q": "午前1時、眠れない夜。自分は？",
        "opts": [
          "一緒に撮った写真がまだ残っているか確かめて、あの頃の温かさで気持ちを落ち着ける",
          "特に理由もなくスクロールしているうちに、気づけばそのアカウントの前にいる",
          "結局言えなかった言葉が思い出されて、何か変わっていないか確かめてしまう",
          "もしかして自分を思い出して何か投稿していないか、その痕跡を探してしまう"
        ]
      },
      {
        "q": "元恋人の新しい投稿の通知が来た。自分は？",
        "opts": [
          "新しく投稿されたというだけで見ずにいられず、すぐに確認してしまう",
          "自分たちの関係が本当に終わったのか、確かめたい気持ちになる",
          "もしかして自分を思わせる内容ではないかと、一行ずつ読んでしまう",
          "写真の様子が自分よりずっと幸せそうに見えないか、まずそこを確かめる"
        ]
      },
      {
        "q": "元恋人のアカウントが非公開に変わっていたことに気づいた。自分は？",
        "opts": [
          "このまま終わるのかと思うと、気持ちの整理がつかず虚しさが残る",
          "わざと自分に見せるために変えたのでは、何かのサインではと意味を探してしまう",
          "新しい相手ができて隠しているのか、その人は自分とどう違うのか気になる",
          "どうせもう見られないと思うと少し肩の荷が下りた気がして、自分にそう言い聞かせる"
        ]
      },
      {
        "q": "友達が「あの子、最近どうしてるか知ってる？」と聞いてきた。自分は？",
        "opts": [
          "自分の話をしていないか、自分のことをどう話しているかがまず気になる",
          "自分はこうして過ごしているのに、相手はどうなのか比べる気持ちが湧いてくる",
          "その話を聞くと、むしろ心が落ち着いて大丈夫な気持ちになる",
          "知らないと答えながらも、内心すぐ調べたくてスマホを触ってしまう"
        ]
      },
      {
        "q": "アカウントをもう見ないと決めて3日目。自分は？",
        "opts": [
          "我慢しようとしたのに、気づけば手が習慣のようにアプリを開いている",
          "心のどこかが整理できておらず、確認しないと終わった気がしない",
          "決めたはずなのに、あの人の近況が自分より良く見えるのではと気になってしまう",
          "決めてはみたものの、見た後に心が落ち着く瞬間があってなかなかやめられない"
        ]
      },
      {
        "q": "元恋人との最後のトーク画面をもう一度開いてみた。自分は？",
        "opts": [
          "最後が中途半端に終わったことが心残りで、気持ちがそこにとどまってしまう",
          "もしかして連絡が来る兆しはないか、あの人も自分を思っているのか確かめる",
          "昔のやり取りを読んでいるとあの頃が思い出されて、心が少し温かくなる",
          "最終ログイン時間やプロフィール写真など、小さな変化がないか確かめたくなる"
        ]
      },
      {
        "q": "元恋人が友達と撮った楽しそうな写真を投稿した。自分は？",
        "opts": [
          "写真の中に後悔するような気配や、自分を思わせる表情がないか探してしまう",
          "自分はまだつらいのに、あの人は元気そうでつい比べてしまう",
          "一つの投稿から始まり、他の投稿まで次々と見てしまう",
          "写真を見ながら、自分たちは一体どうして終わったのかという問いがまた浮かんでくる"
        ]
      },
      {
        "q": "1か月後、元恋人に新しい恋をしているような兆しが見えた。自分は？",
        "opts": [
          "その人と自分を比べながら、自分に足りないところがあったのではと考えてしまう",
          "もう終わったことだと自分に言い聞かせつつも、もう一度見て安心したくなる",
          "本当にもう終わりなんだと実感して、整理しきれなかった気持ちがこみ上げてくる",
          "この関係が本当に終わったのか、あの人は自分を完全に忘れたのか、もっと知りたくなる"
        ]
      },
      {
        "q": "友達に「あなた、まだあの子のアカウント見てるの？」と聞かれた。一番近い本音は？",
        "opts": [
          "正直、見た後は心が落ち着くので、ひとつの慰めのような習慣になっている",
          "理由というより手が動いてしまう習慣なので、自分でもなかなかやめられない",
          "まだあの人が自分のことを考えているか、確かめたい気持ちがある",
          "その人が自分なしでどう過ごしているか、比べてみたい気持ちが大きい"
        ]
      }
    ],
    "results": [
      {
        "title": "まだ自分を思っているか確かめたい人、未練確認タイプ🔍",
        "typeName": "未練確認タイプ",
        "realReason": "あの人の心にまだ自分が残っているか確かめたい",
        "shortDescription": "あなたは覗き見しているのではありません。まだ自分のことを考えているか、痕跡が残っているか確かめたい気持ちなのです。",
        "description": "新しい投稿の一文、非公開への切り替え、プロフィールの変化ひとつひとつが、自分に向けたサインのように感じられます。確認すると一瞬心が動きますが、はっきりした答えはないので、また開いてしまいます。この気持ちは愛情が残っている証でもありますが、意味を読み取ることに使うエネルギーはとても大きいものです。",
        "keywords": "痕跡探し, サインの解釈, 自分を思っているか, まだ終わっていない気持ち, 意味づけ",
        "strengths": "関係に真剣で、人を簡単には忘れない深い心",
        "reasonDetail": "新しい投稿・プロフィールの変化・ログイン記録が見えたとき、最後のトーク画面をもう一度開くとき",
        "frequentSaying": "「もしかして自分のこと考えてるんじゃないかな？」",
        "changeTips": "確認したくなったら『今知りたい答えは何か』を一文で書き出してみる\nそのアカウントを非表示・ミュートにして、新しい通知が目に入らないようにする\n自分が解釈した内容と、実際に確認できた事実を二行に分けて書いてみる",
        "oneLiner": "痕跡は読み解けば読み解くほど大きくなります。答えはそのアカウントの中ではなく、自分の心の中で見つかるものです",
        "shareLine": "なぜ別れても元恋人のSNSを覗いてしまうの？結果：未練確認タイプ🔍 まだ自分のこと考えてるか確かめたい気持ちらしい…これ私じゃん鳥肌、保存した 君は何タイプだった？"
      },
      {
        "title": "自分とあの人を天秤にかける人、比較心理タイプ⚖️",
        "typeName": "比較心理タイプ",
        "realReason": "あの人の近況と自分の近況を比べながら、自分を測っている",
        "shortDescription": "あなたはあの人が気になっているのではありません。あの人の人生の隣に自分の人生を並べて、自分の位置を測っているのです。",
        "description": "幸せそうな写真、新しい恋人の気配、元気そうな様子を見ると気持ちが沈みます。別れのつらさに比較が重なり、「自分だけ取り残されているのでは」という思いが大きくなります。アカウントを開く行動は、心を楽にするどころか、むしろ疲れさせてしまうことがあります。",
        "keywords": "近況の比較, 自分だけ取り残された感覚, 新しい恋人への関心, 天秤にかける, 自己評価",
        "strengths": "自己成長への基準が明確で、もっと良くなろうとする意志が強い",
        "reasonDetail": "幸せそうな投稿を見たとき、新しい恋愛の気配を見つけたとき",
        "frequentSaying": "「あの子は元気にやってるのに、自分だけこうなんだ」",
        "changeTips": "比較が始まったら『今月自分が成し遂げたこと』を3つ先に書いてみる\nSNSに映る姿は編集されたハイライトにすぎないことをもう一度思い出す\n比較の相手をあの人ではなく『1か月前の自分』に変えてみる",
        "oneLiner": "他人の近況は編集版で、自分の気持ちは原本です。原本を大切にする時間を増やしてみてください",
        "shareLine": "なぜ別れても元恋人のSNSを覗いてしまうの？結果：比較心理タイプ⚖️ あの人の近況と自分の近況を天秤にかけてるらしい…これ私じゃん泣ける、保存必須"
      },
      {
        "title": "見ながら心を慰める人、自己慰めタイプ🫶",
        "typeName": "自己慰めタイプ",
        "realReason": "見ている間だけ少し心が楽になって、慰めになっている",
        "shortDescription": "あなたは傷を大きくしようとしているのではありません。そのアカウントが、いつの間にか心を落ち着ける馴染みの慰めになっているのです。",
        "description": "昔の写真、昔のやり取り、見慣れたプロフィールを見ると、少し心が温かくなったり落ち着いたりします。別れでできた心の隙間を、そのアカウントが代わりに埋めてくれているような感覚です。ただ、慰めとして使うほどやめづらくなり、別れの整理はその分後回しになりがちです。",
        "keywords": "慰め, 慣れ親しんだもの, 温かい記憶, 安心感, やめづらさ",
        "strengths": "良かった記憶を大切にし、自分で感情を落ち着ける術を知っている温かさ",
        "reasonDetail": "眠れない夜、心が寂しいとき、昔の写真や会話を思い出すとき",
        "frequentSaying": "「見てるとちょっと落ち着くから」",
        "changeTips": "慰めが必要な時間帯（夜など）に使える代わりの習慣（散歩・音楽・友達との電話）を前もって決めておく\n良かった記憶はアカウントではなく、自分で整理したメモや写真アルバムに残しておく\n『人から』慰めをもらえるつながり（友達・家族）を今週一度作ってみる",
        "oneLiner": "慰めが必要なのは当たり前のことです。ただ、その慰めはもう今の自分自身から受け取っても大丈夫です",
        "shareLine": "なぜ別れても元恋人のSNSを覗いてしまうの？結果：自己慰めタイプ🫶 見ながら心を落ち着ける慰めのルーティンになってるらしい…これ私じゃん鳥肌、保存した 君は？"
      },
      {
        "title": "手が先に動いてしまう人、好奇心習慣タイプ📱",
        "typeName": "好奇心習慣タイプ",
        "realReason": "理由よりも習慣でアプリを開き、新しい情報を確かめたくなる",
        "shortDescription": "あなたは未練が大きくて開いているとは限りません。考えるより先に手が動いてしまう、繰り返しの習慣なのです。",
        "description": "新しい投稿があると見ずにいられず、一つ見ると次の投稿まで続けて見てしまいます。気持ちの理由を探すより先に、すでにスクロールが始まっています。確認するたびの小さな刺激が繰り返され、やめづらいループができあがっているタイプです。",
        "keywords": "習慣, 自動スクロール, 新着投稿への関心, 続けて見てしまう, やめにくさ",
        "strengths": "新しい情報に敏感で好奇心が強く、いろいろなことに夢中になりやすい",
        "reasonDetail": "通知が来たとき、ぼんやりスマホを触っているとき、暇な時間",
        "frequentSaying": "「気づいたらまた開いてた」",
        "changeTips": "アプリの位置を変えたり、そのアカウントをミュート・ブロックして『開くまでの手順』を増やす\n手が動きそうになったら、3分間だけ別の行動（水を飲む・ストレッチ）を先にしてみる\n1日のうちスクロールする時間帯を決めて、それ以外の時間は通知をオフにする",
        "oneLiner": "心の問題ではなく手の習慣なら、環境を変えるのが一番の近道です",
        "shareLine": "なぜ別れても元恋人のSNSを覗いてしまうの？結果：好奇心習慣タイプ📱 心じゃなくて手が先に動いちゃう習慣らしい…これ私じゃんwww 保存しとく 君は何タイプ？"
      },
      {
        "title": "物語が終わっていない人、整理未完タイプ🧩",
        "typeName": "整理未完タイプ",
        "realReason": "言えなかった言葉と解けない疑問が残っていて、気持ちに区切りがついていない",
        "shortDescription": "あなたはあの人に会いたいわけではありません。終われなかった物語が、句点を探しているのです。",
        "description": "なぜあんな終わり方をしたのか、最後に言えなかった言葉は何だったのか、この別れは本当に確定したことなのか、そんな問いが心の片隅に残っています。アカウントを開く行動は、その物語の結末を探そうとする試みでもあります。結末は相手のSNSの中ではなく、自分が綴る文章の中で作られていくものです。",
        "keywords": "句点, 言えなかった言葉, 解けない疑問, 中途半端な終わり, 結末探し",
        "strengths": "関係を責任を持って終わらせようとする誠実さと、感情を整理しようとする意志",
        "reasonDetail": "最後の会話を思い出すとき、結局言えなかった言葉が頭をよぎるとき、別れを実感するとき",
        "frequentSaying": "「あのとき、あの言葉だけは言って終わらせるべきだった」",
        "changeTips": "言えなかった言葉を、送らない手紙として最後まで書いてみる\n解けない疑問をリストにして『自分で答えを作れること』と『相手にしか分からないこと』に分ける\n整理を終える日を決めて、その日にアカウントの整理（ミュート・非表示）を句点にする",
        "oneLiner": "結末は相手がくれるものではなく、自分で書いて閉じるものです。一行ずつ書いていくうちに、句点が打たれていきます",
        "shareLine": "なぜ別れても元恋人のSNSを覗いてしまうの？結果：整理未完タイプ🧩 終われなかった物語が句点を探してるらしい…これ私じゃん泣ける、保存した 君は何が出た？"
      }
    ]
  },
  "zh-CN": {
    "meta": {
      "title": "为什么分手后还总是偷看前任的社交账号？",
      "description": "明明已经结束了，为什么还总忍不住点开那个主页？用10个情境，告诉你总想去看的真正原因，以及怎样把心整理好。",
      "tags": [
        "偷看社交账号",
        "分手心理"
      ]
    },
    "questions": [
      {
        "q": "分手一个月了，下班路上突然想起前任的账号。你会？",
        "opts": [
          "很想看看他现在过得怎样，是不是比我过得好，忍不住去比较",
          "看一眼心里会舒服一点，带着想被安慰的心情点进去",
          "念头还没转过来，手已经先打开了那个App",
          "总觉得还有话没说完，心思不自觉就飘向那边"
        ]
      },
      {
        "q": "凌晨1点，怎么也睡不着。你会？",
        "opts": [
          "翻一翻有没有留着的合照，靠那份暖意安慰自己",
          "没什么特别的理由，刷着刷着就滑到了那个账号前",
          "想起那句没说完的话，去看看是不是还有什么变化",
          "想知道他是不是也想到我，发了什么新动态，找找痕迹"
        ]
      },
      {
        "q": "收到前任发新动态的提醒。你会？",
        "opts": [
          "一看到有更新就忍不住点开，马上确认内容",
          "心里冒出一个念头：我们是不是真的就这样结束了",
          "一字一句地看，想知道里面是不是藏着关于我的暗示",
          "先看他照片里是不是过得比我幸福，忍不住比较"
        ]
      },
      {
        "q": "发现前任把账号设成了私密。你会？",
        "opts": [
          "心里空落落的，好像事情就这样结束了却还没整理好",
          "会忍不住想，是不是故意不想让我看到，是不是某种暗示",
          "好奇是不是有了新对象才藏起来，那个人跟我有什么不一样",
          "告诉自己反正现在也看不到了，顺势让自己松口气"
        ]
      },
      {
        "q": "朋友问你：「你知道他最近过得怎么样吗？」你会？",
        "opts": [
          "最先好奇的是他有没有提到我，是怎么说我的",
          "忍不住拿自己现在的状态跟他比较一番",
          "听到这些反而心里踏实一点，觉得没那么难受了",
          "嘴上说不知道，手却已经摸着手机想马上去查"
        ]
      },
      {
        "q": "告诉自己不看他账号，已经坚持第三天了。你会？",
        "opts": [
          "本想忍住，结果手已经习惯性地打开了App",
          "心里有一块一直没放下，不去确认就觉得没个结束",
          "明明下了决心，还是忍不住想知道他是不是过得比我好",
          "虽然决定不看，但看一眼心里会舒服，所以很难真正戒掉"
        ]
      },
      {
        "q": "又点开了和前任的最后一条聊天记录。你会？",
        "opts": [
          "因为结尾结束得不清不楚而感到遗憾，心思总停在那里",
          "想看看有没有他会联系我的迹象，他是不是也在想我",
          "翻看以前的聊天，想起当时的感觉，心里会暖一下",
          "想确认最近上线时间、头像这些小细节有没有变化"
        ]
      },
      {
        "q": "前任发了和朋友们一起拍的开心照片。你会？",
        "opts": [
          "仔细找照片里有没有后悔的神情，或是让人联想到我的表情",
          "明明自己还没走出来，看他过得这么好，忍不住拿来比较",
          "从这条动态开始，一不小心就一条接一条地往下看",
          "看着照片，又忍不住想：我们到底是怎么走到分手的"
        ]
      },
      {
        "q": "一个月后，发现前任好像开始了新恋情的迹象。你会？",
        "opts": [
          "忍不住拿自己和那个人比较，怀疑是不是自己哪里不够好",
          "告诉自己早就放下了，但还是想再确认一次才能安心",
          "真切感受到这段关系彻底结束了，心里那份没整理好的情绪又涌上来",
          "更想知道这段关系是不是真的结束了，他是不是已经完全忘了我"
        ]
      },
      {
        "q": "朋友问：「你还在看他账号啊？」最贴近你心里话的是？",
        "opts": [
          "说实话，看一眼心里会舒服一点，已经变成一种习惯性的安慰",
          "与其说是有理由，不如说是手习惯性地点开，自己也很难停下来",
          "心里还是想确认他是不是也在想我",
          "更想拿他没有我的生活跟自己比一比，看看谁过得更好"
        ]
      }
    ],
    "results": [
      {
        "title": "想确认自己是不是还没被忘记的人，确认未了情型 🔍",
        "typeName": "确认未了情型",
        "realReason": "想确认自己是不是还留在他心里",
        "shortDescription": "你不是在偷窥。你只是想确认他是不是还在想你，心里还留着什么痕迹。",
        "description": "新动态里的一句话、账号突然变成私密、头像换了——每一个细节都像是在对你发出信号。看一眼心里会有点触动，但因为没有确切的答案，所以又忍不住一次次点进去。这份心思也是你还爱着的证明，只是用来猜来猜去的精力实在太多了。",
        "keywords": "找痕迹, 解读信号, 他是不是在想我, 还没结束的心, 过度解读",
        "strengths": "对感情很认真，不会轻易把一个人从心里抹掉，情感深厚",
        "reasonDetail": "看到新动态、头像变化、上线记录的时候，以及重新翻开最后一条聊天记录的时候",
        "frequentSaying": "「他该不会也在想我吧？」",
        "changeTips": "想去确认的时候，先用一句话写下「我现在到底想要什么答案」\n把那个账号设为免打扰或屏蔽，让新动态不再出现在眼前\n把「自己解读出来的信号」和「实际确认到的事实」分成两行写下来，看清差别",
        "oneLiner": "越解读，痕迹就显得越大。答案不在那个账号里，而是在你自己心里慢慢理清的",
        "shareLine": "为什么分手后还总是偷看前任的社交账号？结果：确认未了情型🔍 据说是想确认他还有没有在想我……也太准了吧，先收藏了，你测出来是什么？"
      },
      {
        "title": "总爱拿自己和对方比较的人，比较心理型 ⚖️",
        "typeName": "比较心理型",
        "realReason": "总是拿他的近况和自己的现状比较，用这个来衡量自己",
        "shortDescription": "你好奇的不是他本身。你是在把自己的生活和他的生活摆在一起，悄悄衡量自己的位置。",
        "description": "看到他看起来很幸福的照片、新恋情的蛛丝马迹、过得不错的样子，心情就会往下沉。分手的痛苦再加上比较心理，「是不是只有我被落下了」的想法会越来越强烈。点开那个账号这个动作，往往不是让你变轻松，反而会让你更疲惫。",
        "keywords": "比较近况, 只有我被落下的感觉, 好奇新恋情, 暗自衡量, 自我评价",
        "strengths": "对自我成长有明确的标准，很有想变得更好的意愿",
        "reasonDetail": "看到他发看起来幸福的动态时，发现他可能有新恋情迹象的时候",
        "frequentSaying": "「他过得挺好的，怎么只有我这样」",
        "changeTips": "一开始想比较，先写下「这个月我自己做到的3件事」\n再提醒自己一次，社交账号里看到的只是精心挑选过的片段，不是全部\n把比较的对象从「他」换成「一个月前的自己」",
        "oneLiner": "别人的近况是剪辑过的版本，你的心才是原版。多花点时间好好照顾这个原版吧",
        "shareLine": "为什么分手后还总是偷看前任的社交账号？结果：比较心理型⚖️ 据说是总爱拿他的近况和自己比较……被说中了有点扎心，先存一下，你测出来的是哪个？"
      },
      {
        "title": "看一看心里就会好受点的人，自我安慰型 🫶",
        "typeName": "自我安慰型",
        "realReason": "看着的时候心里会暂时舒服一点，像是得到了安慰",
        "shortDescription": "你不是想让自己更难受。那个账号不知不觉变成了一种熟悉的安慰，让心情能稍微平静下来。",
        "description": "看着以前的合照、旧聊天记录、熟悉的头像，心里会觉得暖一点、安定一点。那个账号像是在替你填补分手留下的空缺。只是，越把它当成安慰来用，就越难戒掉，整理这段感情的时间也会因此一再往后拖。",
        "keywords": "安慰, 熟悉感, 温暖的回忆, 安定感, 很难戒掉",
        "strengths": "珍惜曾经美好的回忆，也懂得用自己的方式安抚情绪，内心很温柔",
        "reasonDetail": "睡不着的夜晚，心里感到空落落的时候，想起以前的照片或聊天记录时",
        "frequentSaying": "「看着看着心里就会好受一点」",
        "changeTips": "提前想好在需要安慰的时间段（比如深夜）能做的替代方式，比如散步、听音乐、给朋友打电话\n把美好的回忆自己整理进备忘录或相册里，而不是靠那个账号\n这周至少安排一次能让自己从真人身上获得安慰的机会，比如朋友或家人",
        "oneLiner": "需要安慰是很自然的事。只是这份安慰，现在也可以试着从当下的自己身上去找",
        "shareLine": "为什么分手后还总是偷看前任的社交账号？结果：自我安慰型🫶 据说是靠看他账号来安慰自己的类型……有被看穿到，先收藏了，你是哪一种？"
      },
      {
        "title": "手比脑子先动的人，好奇习惯型 📱",
        "typeName": "好奇习惯型",
        "realReason": "与其说是有理由，不如说是出于习惯打开App，想第一时间看到新动态",
        "shortDescription": "你不一定是因为还很放不下才点进去。更多时候，是手已经比脑子先行动的一种习惯。",
        "description": "一旦有新动态，就忍不住点开；看完一条，又会接着往下滑看下一条。常常还没来得及想清楚自己为什么要看，手指已经开始滑动了。每次确认带来的小小刺激反复出现，慢慢形成了一个很难停下来的循环。",
        "keywords": "习惯, 无意识划屏, 好奇新动态, 连续往下看, 很难停下来",
        "strengths": "对新信息很敏感，好奇心旺盛，容易对各种事情投入专注",
        "reasonDetail": "收到提醒的时候，无意识地滑手机的时候，觉得无聊的空档",
        "frequentSaying": "「我也不知道怎么又点进去了」",
        "changeTips": "把App挪到别的文件夹，或者把那个账号设为免打扰、屏蔽，增加打开它的步骤\n手不自觉想点开时，先花3分钟做点别的事，比如喝口水、伸展一下\n给自己划定固定的刷手机时间段，其他时间段就关掉通知",
        "oneLiner": "如果不是心里的事，而是手的习惯，那改变环境就是最快的办法",
        "shareLine": "为什么分手后还总是偷看前任的社交账号？结果：好奇习惯型📱 据说根本不是放不下，是手先动了的习惯……笑死，先收藏，你是哪个类型？"
      },
      {
        "title": "故事还没讲完的人，未完结型 🧩",
        "typeName": "未完结型",
        "realReason": "还有没说出口的话、没解开的疑问，所以这段心情一直没能画上句号",
        "shortDescription": "你想看的，其实不是他这个人。而是那段没讲完的故事，一直在找一个能画上句号的地方。",
        "description": "为什么会走到这一步、当时有什么话没能说出口、这段感情是不是真的彻底结束了——这些疑问一直留在心里某个角落。点开他账号这个举动，其实也是在试图为这段故事找到一个结局。而真正的结局，不是写在他的社交账号里，而是靠你自己写下的那句话来画上的。",
        "keywords": "句号, 没说完的话, 没解开的疑问, 不清不楚的结尾, 寻找结局",
        "strengths": "想要负责任地好好结束一段关系的认真，以及愿意整理情绪的意志力",
        "reasonDetail": "回想起最后一次对话时，想起那句终究没能说出口的话时，突然真切感受到分手这件事时",
        "frequentSaying": "「那时候应该把那句话说出来再结束的」",
        "changeTips": "把没能说出口的话写成一封不会寄出的信，完整地写到最后\n把没解开的疑问列成清单，分成「我自己能找到答案的」和「只有对方才知道的」两类\n给自己定一个整理完的日子，那天就把账号设为免打扰或屏蔽，当作一个句号",
        "oneLiner": "结局不是对方给你的，而是你自己写下来、亲手合上的。一行一行写下去，句号自然会出现",
        "shareLine": "为什么分手后还总是偷看前任的社交账号？结果：未完结型🧩 据说是因为故事还没讲完，一直在找句号……也太准了，先存一下，你测出来是什么？"
      }
    ]
  },
  "zh-TW": {
    "meta": {
      "title": "為什麼分手後還總是偷看前任的社交賬號？",
      "description": "明明已經結束了，為什麼還總忍不住點開那個主頁？用10個情境，告訴你總想去看的真正原因，以及怎樣把心整理好。",
      "tags": [
        "偷看社交賬號",
        "分手心理"
      ]
    },
    "questions": [
      {
        "q": "分手一個月了，下班路上突然想起前任的賬號。你會？",
        "opts": [
          "很想看看他現在過得怎樣，是不是比我過得好，忍不住去比較",
          "看一眼心裡會舒服一點，帶著想被安慰的心情點進去",
          "念頭還沒轉過來，手已經先打開了那個App",
          "總覺得還有話沒說完，心思不自覺就飄向那邊"
        ]
      },
      {
        "q": "凌晨1點，怎麼也睡不著。你會？",
        "opts": [
          "翻一翻有沒有留著的合照，靠那份暖意安慰自己",
          "沒什麼特別的理由，刷著刷著就滑到了那個賬號前",
          "想起那句沒說完的話，去看看是不是還有什麼變化",
          "想知道他是不是也想到我，發了什麼新動態，找找痕跡"
        ]
      },
      {
        "q": "收到前任發新動態的提醒。你會？",
        "opts": [
          "一看到有更新就忍不住點開，馬上確認內容",
          "心裡冒出一個念頭：我們是不是真的就這樣結束了",
          "一字一句地看，想知道里面是不是藏著關於我的暗示",
          "先看他照片裡是不是過得比我幸福，忍不住比較"
        ]
      },
      {
        "q": "發現前任把賬號設成了私密。你會？",
        "opts": [
          "心裡空落落的，好像事情就這樣結束了卻還沒整理好",
          "會忍不住想，是不是故意不想讓我看到，是不是某種暗示",
          "好奇是不是有了新對象才藏起來，那個人跟我有什麼不一樣",
          "告訴自己反正現在也看不到了，順勢讓自己鬆口氣"
        ]
      },
      {
        "q": "朋友問你：「你知道他最近過得怎麼樣嗎？」你會？",
        "opts": [
          "最先好奇的是他有沒有提到我，是怎麼說我的",
          "忍不住拿自己現在的狀態跟他比較一番",
          "聽到這些反而心裡踏實一點，覺得沒那麼難受了",
          "嘴上說不知道，手卻已經摸著手機想馬上去查"
        ]
      },
      {
        "q": "告訴自己不看他賬號，已經堅持第三天了。你會？",
        "opts": [
          "本想忍住，結果手已經習慣性地打開了App",
          "心裡有一塊一直沒放下，不去確認就覺得沒個結束",
          "明明下了決心，還是忍不住想知道他是不是過得比我好",
          "雖然決定不看，但看一眼心裡會舒服，所以很難真正戒掉"
        ]
      },
      {
        "q": "又點開了和前任的最後一條聊天記錄。你會？",
        "opts": [
          "因為結尾結束得不清不楚而感到遺憾，心思總停在那裡",
          "想看看有沒有他會聯繫我的跡象，他是不是也在想我",
          "翻看以前的聊天，想起當時的感覺，心裡會暖一下",
          "想確認最近上線時間、頭像這些小細節有沒有變化"
        ]
      },
      {
        "q": "前任發了和朋友們一起拍的開心照片。你會？",
        "opts": [
          "仔細找照片裡有沒有後悔的神情，或是讓人聯想到我的表情",
          "明明自己還沒走出來，看他過得這麼好，忍不住拿來比較",
          "從這條動態開始，一不小心就一條接一條地往下看",
          "看著照片，又忍不住想：我們到底是怎麼走到分手的"
        ]
      },
      {
        "q": "一個月後，發現前任好像開始了新戀情的跡象。你會？",
        "opts": [
          "忍不住拿自己和那個人比較，懷疑是不是自己哪裡不夠好",
          "告訴自己早就放下了，但還是想再確認一次才能安心",
          "真切感受到這段關係徹底結束了，心裡那份沒整理好的情緒又湧上來",
          "更想知道這段關係是不是真的結束了，他是不是已經完全忘了我"
        ]
      },
      {
        "q": "朋友問：「你還在看他賬號啊？」最貼近你心裡話的是？",
        "opts": [
          "說實話，看一眼心裡會舒服一點，已經變成一種習慣性的安慰",
          "與其說是有理由，不如說是手習慣性地點開，自己也很難停下來",
          "心裡還是想確認他是不是也在想我",
          "更想拿他沒有我的生活跟自己比一比，看看誰過得更好"
        ]
      }
    ],
    "results": [
      {
        "title": "想確認自己是不是還沒被忘記的人，確認未了情型 🔍",
        "typeName": "確認未了情型",
        "realReason": "想確認自己是不是還留在他心裡",
        "shortDescription": "你不是在偷窺。你只是想確認他是不是還在想你，心裡還留著什麼痕跡。",
        "description": "新動態裡的一句話、賬號突然變成私密、頭像換了——每一個細節都像是在對你發出信號。看一眼心裡會有點觸動，但因為沒有確切的答案，所以又忍不住一次次點進去。這份心思也是你還愛著的證明，只是用來猜來猜去的精力實在太多了。",
        "keywords": "找痕跡, 解讀信號, 他是不是在想我, 還沒結束的心, 過度解讀",
        "strengths": "對感情很認真，不會輕易把一個人從心裡抹掉，情感深厚",
        "reasonDetail": "看到新動態、頭像變化、上線記錄的時候，以及重新翻開最後一條聊天記錄的時候",
        "frequentSaying": "「他該不會也在想我吧？」",
        "changeTips": "想去確認的時候，先用一句話寫下「我現在到底想要什麼答案」\n把那個賬號設為免打擾或屏蔽，讓新動態不再出現在眼前\n把「自己解讀出來的信號」和「實際確認到的事實」分成兩行寫下來，看清差別",
        "oneLiner": "越解讀，痕跡就顯得越大。答案不在那個賬號裡，而是在你自己心裡慢慢理清的",
        "shareLine": "為什麼分手後還總是偷看前任的社交賬號？結果：確認未了情型🔍 據說是想確認他還有沒有在想我……也太準了吧，先收藏了，你測出來是什麼？"
      },
      {
        "title": "總愛拿自己和對方比較的人，比較心理型 ⚖️",
        "typeName": "比較心理型",
        "realReason": "總是拿他的近況和自己的現狀比較，用這個來衡量自己",
        "shortDescription": "你好奇的不是他本身。你是在把自己的生活和他的生活擺在一起，悄悄衡量自己的位置。",
        "description": "看到他看起來很幸福的照片、新戀情的蛛絲馬跡、過得不錯的樣子，心情就會往下沉。分手的痛苦再加上比較心理，「是不是隻有我被落下了」的想法會越來越強烈。點開那個賬號這個動作，往往不是讓你變輕鬆，反而會讓你更疲憊。",
        "keywords": "比較近況, 只有我被落下的感覺, 好奇新戀情, 暗自衡量, 自我評價",
        "strengths": "對自我成長有明確的標準，很有想變得更好的意願",
        "reasonDetail": "看到他發看起來幸福的動態時，發現他可能有新戀情跡象的時候",
        "frequentSaying": "「他過得挺好的，怎麼只有我這樣」",
        "changeTips": "一開始想比較，先寫下「這個月我自己做到的3件事」\n再提醒自己一次，社交賬號裡看到的只是精心挑選過的片段，不是全部\n把比較的對象從「他」換成「一個月前的自己」",
        "oneLiner": "別人的近況是剪輯過的版本，你的心才是原版。多花點時間好好照顧這個原版吧",
        "shareLine": "為什麼分手後還總是偷看前任的社交賬號？結果：比較心理型⚖️ 據說是總愛拿他的近況和自己比較……被說中了有點扎心，先存一下，你測出來的是哪個？"
      },
      {
        "title": "看一看心裡就會好受點的人，自我安慰型 🫶",
        "typeName": "自我安慰型",
        "realReason": "看著的時候心裡會暫時舒服一點，像是得到了安慰",
        "shortDescription": "你不是想讓自己更難受。那個賬號不知不覺變成了一種熟悉的安慰，讓心情能稍微平靜下來。",
        "description": "看著以前的合照、舊聊天記錄、熟悉的頭像，心裡會覺得暖一點、安定一點。那個賬號像是在替你填補分手留下的空缺。只是，越把它當成安慰來用，就越難戒掉，整理這段感情的時間也會因此一再往後拖。",
        "keywords": "安慰, 熟悉感, 溫暖的回憶, 安定感, 很難戒掉",
        "strengths": "珍惜曾經美好的回憶，也懂得用自己的方式安撫情緒，內心很溫柔",
        "reasonDetail": "睡不著的夜晚，心裡感到空落落的時候，想起以前的照片或聊天記錄時",
        "frequentSaying": "「看著看著心裡就會好受一點」",
        "changeTips": "提前想好在需要安慰的時間段（比如深夜）能做的替代方式，比如散步、聽音樂、給朋友打電話\n把美好的回憶自己整理進備忘錄或相冊裡，而不是靠那個賬號\n這周至少安排一次能讓自己從真人身上獲得安慰的機會，比如朋友或家人",
        "oneLiner": "需要安慰是很自然的事。只是這份安慰，現在也可以試著從當下的自己身上去找",
        "shareLine": "為什麼分手後還總是偷看前任的社交賬號？結果：自我安慰型🫶 據說是靠看他賬號來安慰自己的類型……有被看穿到，先收藏了，你是哪一種？"
      },
      {
        "title": "手比腦子先動的人，好奇習慣型 📱",
        "typeName": "好奇習慣型",
        "realReason": "與其說是有理由，不如說是出於習慣打開App，想第一時間看到新動態",
        "shortDescription": "你不一定是因為還很放不下才點進去。更多時候，是手已經比腦子先行動的一種習慣。",
        "description": "一旦有新動態，就忍不住點開；看完一條，又會接著往下滑看下一條。常常還沒來得及想清楚自己為什麼要看，手指已經開始滑動了。每次確認帶來的小小刺激反覆出現，慢慢形成了一個很難停下來的循環。",
        "keywords": "習慣, 無意識劃屏, 好奇新動態, 連續往下看, 很難停下來",
        "strengths": "對新信息很敏感，好奇心旺盛，容易對各種事情投入專注",
        "reasonDetail": "收到提醒的時候，無意識地滑手機的時候，覺得無聊的空檔",
        "frequentSaying": "「我也不知道怎麼又點進去了」",
        "changeTips": "把App挪到別的文件夾，或者把那個賬號設為免打擾、屏蔽，增加打開它的步驟\n手不自覺想點開時，先花3分鐘做點別的事，比如喝口水、伸展一下\n給自己劃定固定的刷手機時間段，其他時間段就關掉通知",
        "oneLiner": "如果不是心裡的事，而是手的習慣，那改變環境就是最快的辦法",
        "shareLine": "為什麼分手後還總是偷看前任的社交賬號？結果：好奇習慣型📱 據說根本不是放不下，是手先動了的習慣……笑死，先收藏，你是哪個類型？"
      },
      {
        "title": "故事還沒講完的人，未完結型 🧩",
        "typeName": "未完結型",
        "realReason": "還有沒說出口的話、沒解開的疑問，所以這段心情一直沒能畫上句號",
        "shortDescription": "你想看的，其實不是他這個人。而是那段沒講完的故事，一直在找一個能畫上句號的地方。",
        "description": "為什麼會走到這一步、當時有什麼話沒能說出口、這段感情是不是真的徹底結束了——這些疑問一直留在心裡某個角落。點開他賬號這個舉動，其實也是在試圖為這段故事找到一個結局。而真正的結局，不是寫在他的社交賬號裡，而是靠你自己寫下的那句話來畫上的。",
        "keywords": "句號, 沒說完的話, 沒解開的疑問, 不清不楚的結尾, 尋找結局",
        "strengths": "想要負責任地好好結束一段關係的認真，以及願意整理情緒的意志力",
        "reasonDetail": "回想起最後一次對話時，想起那句終究沒能說出口的話時，突然真切感受到分手這件事時",
        "frequentSaying": "「那時候應該把那句話說出來再結束的」",
        "changeTips": "把沒能說出口的話寫成一封不會寄出的信，完整地寫到最後\n把沒解開的疑問列成清單，分成「我自己能找到答案的」和「只有對方才知道的」兩類\n給自己定一個整理完的日子，那天就把賬號設為免打擾或屏蔽，當作一個句號",
        "oneLiner": "結局不是對方給你的，而是你自己寫下來、親手合上的。一行一行寫下去，句號自然會出現",
        "shareLine": "為什麼分手後還總是偷看前任的社交賬號？結果：未完結型🧩 據說是因為故事還沒講完，一直在找句號……也太準了，先存一下，你測出來是什麼？"
      }
    ]
  },
  "vi": {
    "meta": {
      "title": "Tại sao sau chia tay vẫn lén xem SNS người yêu cũ?",
      "description": "Đã kết thúc rồi, sao vẫn cứ mở trang của họ? 10 tình huống giúp bạn thấy lý do thật sự và cách sắp xếp lại lòng mình.",
      "tags": [
        "Lén xem SNS",
        "Tâm lý chia tay"
      ]
    },
    "questions": [
      {
        "q": "Chia tay đã một tháng, trên đường đi làm về bỗng nhớ tới trang của người yêu cũ. Bạn...",
        "opts": [
          "Muốn xem họ đang sống thế nào, có vẻ ổn hơn mình không, để so sánh",
          "Xem xong thấy lòng nhẹ hơn một chút, nên mở ra như một cách tự an ủi",
          "Chưa kịp nghĩ gì, tay đã mở app từ lúc nào",
          "Vẫn còn chuyện chưa kết thúc trọn vẹn nên lòng cứ hướng về đó"
        ]
      },
      {
        "q": "1 giờ sáng, một đêm mất ngủ. Bạn...",
        "opts": [
          "Xem lại những tấm ảnh chụp cùng nhau còn lưu, để hơi ấm ngày đó xoa dịu lòng mình",
          "Lướt mạng không vì lý do gì cụ thể, rồi không biết từ lúc nào đã đứng trước trang của họ",
          "Nhớ tới lời chưa kịp nói, nên xem thử có gì thay đổi không",
          "Tìm xem có phải vì nhớ mình mà họ đăng gì đó không"
        ]
      },
      {
        "q": "Có thông báo người yêu cũ vừa đăng bài mới. Bạn...",
        "opts": [
          "Chỉ cần biết có bài mới là không thể không xem, mở ngay lập tức",
          "Muốn chắc chắn xem chuyện giữa hai người đã thật sự kết thúc chưa",
          "Đọc từng câu xem có phải nội dung nhắc đến mình không",
          "Trước tiên xem trong ảnh họ có vẻ hạnh phúc hơn mình nhiều không"
        ]
      },
      {
        "q": "Bạn phát hiện trang của người yêu cũ đã chuyển sang chế độ riêng tư. Bạn...",
        "opts": [
          "Thấy như chuyện kết thúc thật rồi, lòng chưa sắp xếp được và để lại cảm giác trống trải",
          "Tự hỏi có phải họ cố tình làm vậy để mình thấy, hay đó là một tín hiệu nào đó",
          "Tò mò không biết có phải vì có người mới nên giấu, và người đó khác mình thế nào",
          "Nghĩ dù sao cũng không xem được nữa, tự nhủ lòng thấy nhẹ nhõm hơn một chút"
        ]
      },
      {
        "q": "Bạn bè hỏi \"Cậu có biết dạo này người đó sống thế nào không?\". Bạn...",
        "opts": [
          "Trước tiên tò mò không biết họ có nhắc đến mình không, và nói về mình như thế nào",
          "Mình đang sống thế này, còn họ ra sao — bỗng muốn so sánh",
          "Nghe chuyện đó xong lòng lại thấy ổn định và dễ chịu hơn",
          "Trả lời là không biết nhưng trong lòng đã muốn tra ngay, tay cứ mân mê điện thoại"
        ]
      },
      {
        "q": "Đã quyết tâm không xem trang đó được ba ngày. Bạn...",
        "opts": [
          "Đã cố nhịn nhưng tay vẫn mở app như một thói quen lúc nào không hay",
          "Một góc lòng vẫn chưa được sắp xếp, nếu không xem thì cảm giác như chưa xong",
          "Dù đã quyết tâm nhưng vẫn tò mò cuộc sống của họ có tốt hơn mình không",
          "Đã quyết tâm rồi nhưng xem xong lại có lúc thấy lòng nhẹ hơn, nên khó dứt ra được"
        ]
      },
      {
        "q": "Bạn mở lại đoạn tin nhắn cuối cùng với người yêu cũ. Bạn...",
        "opts": [
          "Tiếc vì chuyện kết thúc dở dang, nên lòng cứ mãi dừng lại ở đó",
          "Xem thử có dấu hiệu họ sẽ liên lạc lại không, và họ có nghĩ đến mình không",
          "Đọc lại tin nhắn cũ, nhớ về khoảng thời gian đó khiến lòng ấm lên một chút",
          "Muốn kiểm tra xem có thay đổi nhỏ nào như thời gian truy cập cuối hay ảnh đại diện không"
        ]
      },
      {
        "q": "Người yêu cũ đăng ảnh vui vẻ chụp cùng bạn bè. Bạn...",
        "opts": [
          "Tìm trong ảnh xem có nét hối tiếc hay biểu cảm nào gợi nhớ đến mình không",
          "Mình vẫn còn khó khăn mà họ có vẻ ổn, nên bỗng so sánh với bản thân",
          "Bắt đầu từ một bài, rồi xem tiếp hết bài này đến bài khác",
          "Nhìn ảnh mà câu hỏi rốt cuộc chuyện giữa hai người đã kết thúc thế nào lại hiện lên"
        ]
      },
      {
        "q": "Một tháng sau, bạn thấy dấu hiệu người yêu cũ hình như đang hẹn hò mới. Bạn...",
        "opts": [
          "So sánh người đó với mình, cứ nghĩ mãi không biết có phải tại mình thiếu sót",
          "Tự nhủ chuyện đã qua rồi, nhưng vẫn muốn xem thêm lần nữa cho yên lòng",
          "Cảm nhận rõ rằng chuyện này thật sự đã kết thúc, và những cảm xúc chưa trọn vẹn trỗi dậy",
          "Muốn biết thêm mối quan hệ này đã thật sự kết thúc chưa, và họ đã quên hẳn mình chưa"
        ]
      },
      {
        "q": "Bạn bè hỏi \"Cậu vẫn còn xem trang của người đó à?\". Điều gần với lòng bạn nhất là?",
        "opts": [
          "Thật ra xem xong lòng thấy nhẹ hơn, nó đã thành một thói quen an ủi",
          "Không hẳn vì lý do gì, chỉ là tay cứ tự động mở nên bản thân cũng khó dừng",
          "Vẫn còn muốn biết chắc liệu người đó có đang nghĩ đến mình không",
          "Rất muốn xem thử không có mình thì họ sống ra sao để so sánh"
        ]
      }
    ],
    "results": [
      {
        "title": "Người muốn biết liệu họ còn nghĩ đến mình không, Kiểu xác nhận luyến tiếc 🔍",
        "typeName": "Kiểu xác nhận luyến tiếc",
        "realReason": "Bạn muốn biết chắc liệu mình có còn ở lại trong lòng họ hay không",
        "shortDescription": "Bạn không phải đang rình rập. Đó là mong muốn biết liệu họ còn nghĩ đến mình, còn để lại dấu vết nào không.",
        "description": "Từng câu chữ trong bài đăng mới, việc chuyển sang riêng tư, hay một thay đổi nhỏ trên ảnh đại diện đều như tín hiệu hướng về bạn. Xem xong lòng dịu lại một chút, nhưng vì chưa có câu trả lời chắc chắn nên lại tiếp tục mở ra xem. Cảm xúc này vừa là bằng chứng tình cảm vẫn còn, vừa tiêu tốn rất nhiều năng lượng để diễn giải.",
        "keywords": "Tìm dấu vết, Diễn giải tín hiệu, Liệu họ có nghĩ đến mình, Lòng chưa khép lại, Gán ý nghĩa",
        "strengths": "Từng rất chân thành trong mối quan hệ, và là người không dễ dàng xóa bỏ ai khỏi lòng mình",
        "reasonDetail": "Khi thấy bài đăng mới, đổi quyền riêng tư, hay thay đổi hồ sơ; khi mở lại đoạn tin nhắn cuối cùng",
        "frequentSaying": "\"Không biết họ có đang nghĩ đến mình không?\"",
        "changeTips": "Khi muốn kiểm tra, hãy viết ra một câu: 'Mình đang muốn có câu trả lời gì ngay lúc này?'\nẨn hoặc tắt thông báo từ trang đó để bài đăng mới không lọt vào mắt mình\nViết riêng hai dòng: một dòng là tín hiệu mình tự diễn giải, một dòng là sự thật thực sự xác nhận được",
        "oneLiner": "Dấu vết càng diễn giải càng lớn thêm. Câu trả lời không nằm ở trang đó, mà nằm ở việc sắp xếp lại chính lòng mình",
        "shareLine": "Tại sao sau chia tay vẫn lén xem SNS người yêu cũ? Kết quả: Kiểu xác nhận luyến tiếc 🔍 Hình như là muốn biết họ còn nghĩ đến mình không... đúng bạn luôn haha lưu lại liền, bạn ra gì?"
      },
      {
        "title": "Người đặt mình và người đó lên bàn cân, Kiểu so sánh ⚖️",
        "typeName": "Kiểu so sánh",
        "realReason": "Bạn đang so sánh cuộc sống hiện tại của họ với cuộc sống của mình để đo lường bản thân",
        "shortDescription": "Bạn không tò mò về họ. Bạn đang đặt cuộc sống của mình cạnh cuộc sống của họ để đo xem mình đang ở đâu.",
        "description": "Nhìn những tấm ảnh có vẻ hạnh phúc, dấu hiệu mối tình mới, hay cuộc sống có vẻ ổn của họ khiến lòng bạn chùng xuống. Nỗi đau chia tay cộng thêm sự so sánh làm suy nghĩ 'chỉ mình mình tụt lại phía sau' càng lớn hơn. Việc mở trang của họ có thể khiến bạn mệt mỏi hơn là được an ủi.",
        "keywords": "So sánh cuộc sống, Cảm giác chỉ mình tụt lại, Tò mò người mới, Cân đo, Tự đánh giá bản thân",
        "strengths": "Có tiêu chuẩn rõ ràng về sự phát triển bản thân và ý chí mạnh mẽ muốn trở nên tốt hơn",
        "reasonDetail": "Khi thấy bài đăng có vẻ hạnh phúc, khi phát hiện dấu hiệu tình mới",
        "frequentSaying": "\"Người đó sống tốt vậy mà sao chỉ mình thế này\"",
        "changeTips": "Khi bắt đầu so sánh, hãy viết ra trước 3 điều mình đã làm được trong tháng này\nNhắc bản thân rằng hình ảnh trên SNS chỉ là những khoảnh khắc được chọn lọc, đã qua chỉnh sửa\nĐổi đối tượng so sánh từ người đó thành 'chính mình của một tháng trước'",
        "oneLiner": "Cuộc sống của người khác là bản đã chỉnh sửa, còn lòng mình là bản gốc. Hãy dành nhiều thời gian hơn để chăm sóc bản gốc đó",
        "shareLine": "Tại sao sau chia tay vẫn lén xem SNS người yêu cũ? Kết quả: Kiểu so sánh ⚖️ Hình như là đặt cuộc sống của họ và mình lên bàn cân... đúng bạn luôn á, lưu gấp"
      },
      {
        "title": "Người xem để xoa dịu lòng mình, Kiểu tự an ủi 🫶",
        "typeName": "Kiểu tự an ủi",
        "realReason": "Trong lúc xem, lòng tạm thời nhẹ nhõm hơn nên bạn đang được an ủi",
        "shortDescription": "Bạn không cố làm cho vết thương lớn thêm. Trang đó đã trở thành một sự an ủi quen thuộc để xoa dịu lòng mình lúc nào không hay.",
        "description": "Nhìn những tấm ảnh cũ, đoạn tin nhắn cũ, hay hồ sơ quen thuộc khiến lòng ấm lên hoặc ổn định hơn một chút. Cảm giác như trang đó đang lấp đầy khoảng trống mà sự chia tay để lại. Nhưng càng dùng nó như một liều an ủi thì càng khó dứt ra, và việc sắp xếp lại cảm xúc sau chia tay cũng bị trì hoãn theo.",
        "keywords": "An ủi, Sự quen thuộc, Ký ức ấm áp, Cảm giác ổn định, Khó dứt ra",
        "strengths": "Trân trọng những kỷ niệm đẹp và biết cách tự xoa dịu cảm xúc của chính mình",
        "reasonDetail": "Những đêm mất ngủ, khi lòng cảm thấy trống trải, khi nhớ lại ảnh hay tin nhắn cũ",
        "frequentSaying": "\"Xem xong thì thấy đỡ hơn một chút\"",
        "changeTips": "Chuẩn bị trước một việc thay thế (đi dạo, nghe nhạc, gọi điện cho bạn bè) cho khung giờ cần an ủi, chẳng hạn ban đêm\nLưu giữ những kỷ niệm đẹp trong ghi chú hoặc album riêng của mình, thay vì trong trang của họ\nTrong tuần này, hãy tạo một lần kết nối (với bạn bè, gia đình) để nhận được an ủi từ 'người thật'",
        "oneLiner": "Cần được an ủi là điều tự nhiên. Nhưng giờ đây bạn hoàn toàn có thể nhận sự an ủi đó từ chính con người hiện tại của mình",
        "shareLine": "Tại sao sau chia tay vẫn lén xem SNS người yêu cũ? Kết quả: Kiểu tự an ủi 🫶 Hình như xem là để xoa dịu lòng, thành thói quen an ủi rồi... đúng bạn luôn, lưu lại, bạn thì sao?"
      },
      {
        "title": "Người để tay di chuyển trước cả suy nghĩ, Kiểu thói quen tò mò 📱",
        "typeName": "Kiểu thói quen tò mò",
        "realReason": "Bạn muốn mở app và xem thông tin mới theo thói quen hơn là vì lý do gì",
        "shortDescription": "Có thể bạn mở trang đó không phải vì còn luyến tiếc nhiều. Đó là một thói quen lặp lại, nơi tay di chuyển trước cả khi kịp suy nghĩ.",
        "description": "Hễ có bài đăng mới là không thể không xem, và xem một bài lại kéo theo xem tiếp các bài khác. Trước khi kịp tìm ra lý do trong lòng, việc lướt đã bắt đầu từ lúc nào. Kích thích nhỏ mỗi lần kiểm tra lặp đi lặp lại đã tạo thành một vòng lặp khó dứt.",
        "keywords": "Thói quen, Lướt tự động, Tò mò bài đăng mới, Xem liên tục, Khó dừng lại",
        "strengths": "Nhạy bén với thông tin mới, giàu tò mò và dễ dàng chú tâm vào nhiều việc khác nhau",
        "reasonDetail": "Khi có thông báo, khi lơ đãng cầm điện thoại, trong những lúc rảnh rỗi",
        "frequentSaying": "\"Không biết từ lúc nào đã lại mở lên xem\"",
        "changeTips": "Di chuyển vị trí app hoặc tắt thông báo/chặn trang đó để tăng thêm bước trước khi mở ra\nKhi tay chuẩn bị với lấy điện thoại, hãy làm việc khác (uống nước, giãn cơ) trong 3 phút trước\nĐặt sẵn khung giờ lướt mạng trong ngày, và tắt thông báo ngoài khung giờ đó",
        "oneLiner": "Nếu đây là thói quen của tay chứ không phải của lòng, thì thay đổi môi trường xung quanh là cách nhanh nhất",
        "shareLine": "Tại sao sau chia tay vẫn lén xem SNS người yêu cũ? Kết quả: Kiểu thói quen tò mò 📱 Hình như không phải lòng mà là tay di chuyển trước... đúng bạn luôn haha lưu lại, bạn kiểu nào?"
      },
      {
        "title": "Người có câu chuyện chưa kết thúc, Kiểu chưa khép lại 🧩",
        "typeName": "Kiểu chưa khép lại",
        "realReason": "Những lời chưa nói và câu hỏi chưa có lời giải khiến lòng bạn chưa thể khép lại",
        "shortDescription": "Bạn không phải đang nhớ người đó. Câu chuyện chưa kết thúc đang tìm một dấu chấm hết.",
        "description": "Những câu hỏi như tại sao lại kết thúc như vậy, lời cuối chưa kịp nói là gì, liệu cuộc chia tay này đã thật sự chắc chắn chưa — vẫn còn đọng lại một góc trong lòng bạn. Việc mở trang của họ cũng là một cách để tìm kiếm cái kết cho câu chuyện đó. Nhưng cái kết không được tạo ra từ SNS của người kia, mà từ chính những dòng bạn tự viết ra để khép lại.",
        "keywords": "Dấu chấm hết, Lời chưa nói, Câu hỏi chưa có lời giải, Kết thúc dở dang, Tìm kiếm hồi kết",
        "strengths": "Có trách nhiệm trong việc khép lại mối quan hệ và nỗ lực sắp xếp lại cảm xúc của mình",
        "reasonDetail": "Khi nhớ lại cuộc trò chuyện cuối cùng, khi nghĩ đến lời chưa kịp nói, khi cảm nhận rõ sự chia tay",
        "frequentSaying": "\"Lẽ ra lúc đó nên nói hết lời rồi kết thúc\"",
        "changeTips": "Viết hết những lời chưa nói thành một lá thư không gửi đi\nLiệt kê những câu hỏi chưa có lời giải, rồi chia thành 'điều mình có thể tự trả lời' và 'điều chỉ người kia mới biết'\nChọn một ngày để hoàn tất việc sắp xếp, và lấy việc dọn dẹp trang đó (tắt thông báo, ẩn đi) trong ngày đó làm dấu chấm hết",
        "oneLiner": "Cái kết không phải do người kia trao cho, mà do chính mình viết ra để khép lại. Viết từng dòng một rồi dấu chấm hết sẽ dần hiện ra",
        "shareLine": "Tại sao sau chia tay vẫn lén xem SNS người yêu cũ? Kết quả: Kiểu chưa khép lại 🧩 Hình như câu chuyện chưa kết thúc đang tìm dấu chấm hết... đúng bạn luôn, lưu lại, bạn ra gì?"
      }
    ]
  },
  "id": {
    "meta": {
      "title": "Kenapa Setelah Putus Masih Intip SNS Mantan?",
      "description": "Sudah berakhir, kenapa masih membuka akun itu? Lewat 10 situasi, ketahui alasan asli dan cara merapikan hati.",
      "tags": [
        "Intip SNS",
        "Psikologi Putus"
      ]
    },
    "questions": [
      {
        "q": "Sebulan setelah putus, dalam perjalanan pulang kerja tiba-tiba teringat akun mantan. Kamu...",
        "opts": [
          "Ingin lihat dia sekarang hidup seperti apa, apakah kelihatan lebih baik dari aku, untuk dibandingkan",
          "Setelah melihat hati jadi sedikit lebih lega, jadi membuka dengan niat menghibur diri",
          "Belum sempat mikir, tangan sudah membuka aplikasi duluan",
          "Masih ada cerita yang belum selesai dengan baik, jadi hati terus tertarik ke sana"
        ]
      },
      {
        "q": "Jam 1 pagi, malam yang susah tidur. Kamu...",
        "opts": [
          "Melihat apakah foto bersama masih tersimpan, menenangkan hati dengan kehangatan saat itu",
          "Scroll tanpa alasan jelas, lalu tanpa sadar sudah ada di depan akun itu",
          "Teringat kata yang belum sempat diucapkan, jadi cek apakah ada yang berubah",
          "Mencari jejak, jangan-jangan dia posting sesuatu karena teringat aku"
        ]
      },
      {
        "q": "Muncul notifikasi mantan baru posting. Kamu...",
        "opts": [
          "Hanya karena tahu ada postingan baru, tidak bisa tidak lihat, langsung cek",
          "Muncul keinginan untuk memastikan apakah hubungan kalian benar-benar sudah berakhir",
          "Membaca baris demi baris, siapa tahu ada isi yang mengingatkan pada aku",
          "Lebih dulu menilai apakah di foto itu dia terlihat jauh lebih bahagia dari aku"
        ]
      },
      {
        "q": "Kamu tahu akun mantan sudah diubah jadi privat. Kamu...",
        "opts": [
          "Merasa seperti ini akhirnya berakhir, hati belum tertata dan menyisakan rasa kosong",
          "Jadi bertanya-tanya, jangan-jangan sengaja diubah supaya aku lihat, atau ini semacam sinyal",
          "Penasaran apakah karena ada orang baru sehingga disembunyikan, dan orang itu beda apa dari aku",
          "Berpikir toh sekarang sudah tidak bisa lihat lagi, menghibur diri bahwa ini malah membuat lebih lega"
        ]
      },
      {
        "q": "Teman bertanya, \"Kamu tahu dia sekarang gimana kabarnya?\" Kamu...",
        "opts": [
          "Lebih dulu penasaran apakah dia membicarakan aku, dan bagaimana dia bercerita tentang aku",
          "Muncul rasa ingin membandingkan, aku hidup begini, dia bagaimana",
          "Mendengar cerita itu justru membuat hati lebih tenang dan merasa lebih baik",
          "Menjawab tidak tahu, tapi dalam hati langsung ingin mencari tahu, jari pun gatal pegang HP"
        ]
      },
      {
        "q": "Sudah hari ketiga sejak berjanji tidak akan melihat akun itu lagi. Kamu...",
        "opts": [
          "Sudah berusaha menahan, tapi tanpa sadar tangan sudah membuka aplikasi seperti kebiasaan",
          "Satu sisi hati belum tertata, jadi kalau tidak dicek rasanya belum selesai",
          "Sudah berjanji, tapi tetap penasaran apakah kabar dia lebih baik dari kabarku",
          "Sudah berjanji, tapi ada momen setelah melihat hati jadi lega, jadi susah berhenti total"
        ]
      },
      {
        "q": "Kamu membuka lagi chat terakhir dengan mantan. Kamu...",
        "opts": [
          "Menyesal karena berakhir dengan canggung, jadi hati terus tertahan di situ",
          "Memeriksa apakah ada tanda dia akan menghubungi lagi, dan apakah dia juga memikirkan aku",
          "Membaca obrolan lama membuat teringat masa itu dan hati jadi sedikit hangat",
          "Ingin memeriksa apakah ada perubahan kecil seperti waktu online terakhir atau foto profil"
        ]
      },
      {
        "q": "Mantan posting foto seru bersama teman-temannya. Kamu...",
        "opts": [
          "Mencari apakah ada raut menyesal atau ekspresi yang mengingatkan pada aku di foto itu",
          "Aku masih berat, tapi dia kelihatan baik-baik saja, jadi jadi membandingkan diri",
          "Mulai dari satu postingan, lalu lanjut melihat postingan lain secara beruntun",
          "Melihat foto itu, muncul lagi pertanyaan sebenarnya kenapa hubungan kita bisa berakhir begini"
        ]
      },
      {
        "q": "Sebulan kemudian, muncul tanda mantan sepertinya sudah punya hubungan baru. Kamu...",
        "opts": [
          "Membandingkan diri dengan orang itu, terus memikirkan jangan-jangan karena aku yang kurang",
          "Menghibur diri bahwa ini sudah selesai, tapi tetap ingin lihat sekali lagi supaya lega",
          "Merasa nyata bahwa ini benar-benar sudah berakhir, dan perasaan yang belum tuntas pun naik",
          "Ingin tahu lebih jauh apakah hubungan ini benar-benar berakhir, dan apakah dia sudah melupakan aku sepenuhnya"
        ]
      },
      {
        "q": "Teman bertanya, \"Kamu masih suka lihat akun dia ya?\" Perasaan yang paling dekat dengan hatimu?",
        "opts": [
          "Sebenarnya setelah lihat hati jadi lega, sudah jadi semacam kebiasaan menghibur diri",
          "Bukan soal alasan, lebih ke kebiasaan tangan, jadi aku sendiri susah berhenti",
          "Masih ada keinginan untuk memastikan apakah dia masih memikirkan aku",
          "Sangat ingin tahu bagaimana dia menjalani hidup tanpa aku, untuk dibandingkan"
        ]
      }
    ],
    "results": [
      {
        "title": "Orang yang ingin tahu apakah dia masih memikirkanmu, Tipe Cek Sisa Perasaan 🔍",
        "typeName": "Tipe Cek Sisa Perasaan",
        "realReason": "Kamu ingin memastikan apakah kamu masih tersisa di hati mereka",
        "shortDescription": "Kamu bukan sedang mengintai. Ini adalah keinginan untuk memastikan apakah mereka masih memikirkanmu, apakah masih ada jejak yang tersisa.",
        "description": "Setiap kata di postingan baru, perubahan ke akun privat, atau perubahan kecil di foto profil terasa seperti sinyal yang mengarah padamu. Setelah memastikan, hati sedikit tergerak, tapi karena belum ada jawaban pasti, kamu kembali membuka akun itu lagi. Perasaan ini memang bukti bahwa cinta masih ada, tapi energi yang terpakai untuk menafsirkan sinyal itu cukup besar.",
        "keywords": "Mencari jejak, Menafsirkan sinyal, Apakah dia memikirkanku, Hati yang belum selesai, Memberi makna",
        "strengths": "Tulus dalam hubungan dan bukan tipe yang mudah menghapus seseorang dari hati",
        "reasonDetail": "Saat muncul postingan baru, perubahan akun, atau jejak aktivitas; saat membuka lagi chat terakhir",
        "frequentSaying": "\"Jangan-jangan dia lagi mikirin aku?\"",
        "changeTips": "Saat ingin memastikan, tulis dulu satu kalimat: 'Jawaban apa sebenarnya yang ingin aku dapatkan sekarang?'\nMute atau sembunyikan akun itu supaya notifikasi baru tidak terlihat olehmu\nPisahkan dalam dua baris: satu baris sinyal yang kamu tafsirkan, satu baris lagi fakta yang benar-benar terkonfirmasi",
        "oneLiner": "Jejak akan terasa makin besar kalau terus ditafsirkan. Jawabannya bukan di akun itu, tapi di dalam hatimu sendiri",
        "shareLine": "Kenapa setelah putus masih intip SNS mantan? Hasil: Tipe Cek Sisa Perasaan 🔍 Katanya ini soal ingin tahu apakah dia masih mikirin aku... ini banget aku wkwk langsung disimpan, kamu dapat apa?"
      },
      {
        "title": "Orang yang menimbang diri sendiri dan dia di atas timbangan, Tipe Membandingkan ⚖️",
        "typeName": "Tipe Membandingkan",
        "realReason": "Kamu membandingkan kabar terbaru mereka dengan kabarmu untuk mengukur posisi dirimu",
        "shortDescription": "Kamu bukan penasaran dengan mereka. Kamu sedang meletakkan hidupmu di samping hidup mereka untuk mengukur posisimu.",
        "description": "Foto yang kelihatan bahagia, tanda hubungan baru, atau kehidupan yang tampak baik-baik saja membuat hatimu turun. Rasa sakit putus cinta bercampur dengan rasa membandingkan membuat pikiran 'cuma aku yang ketinggalan' makin besar. Membuka akun itu malah bisa membuatmu makin lelah, bukan makin tenang.",
        "keywords": "Membandingkan kabar, Rasa hanya aku yang tertinggal, Penasaran orang baru, Menimbang, Menilai diri sendiri",
        "strengths": "Punya standar jelas soal perkembangan diri dan keinginan kuat untuk menjadi lebih baik",
        "reasonDetail": "Saat melihat postingan yang kelihatan bahagia, saat menemukan tanda hubungan baru",
        "frequentSaying": "\"Dia kelihatan baik-baik aja, kok cuma aku yang gini\"",
        "changeTips": "Saat mulai membandingkan, tulis dulu 3 hal yang sudah kamu capai bulan ini\nIngatkan diri lagi bahwa yang ada di SNS hanyalah momen pilihan yang sudah diedit\nUbah objek pembandingmu, bukan lagi dia, tapi 'dirimu sebulan yang lalu'",
        "oneLiner": "Kabar orang lain adalah versi yang sudah diedit, dan hatimu adalah versi aslinya. Luangkan lebih banyak waktu untuk merawat versi aslimu",
        "shareLine": "Kenapa setelah putus masih intip SNS mantan? Hasil: Tipe Membandingkan ⚖️ Katanya ini soal naruh hidupnya dan hidupku di atas timbangan... ini banget aku, langsung disimpan"
      },
      {
        "title": "Orang yang menenangkan hati sambil melihat, Tipe Menghibur Diri 🫶",
        "typeName": "Tipe Menghibur Diri",
        "realReason": "Selama melihat, hatimu sedikit lega, dan itu terasa seperti hiburan",
        "shortDescription": "Kamu bukan sedang memperbesar luka. Akun itu tanpa sadar sudah jadi hiburan yang familiar untuk menenangkan hatimu.",
        "description": "Melihat foto lama, chat lama, atau profil yang familiar membuat hati sedikit hangat atau lebih tenang. Rasanya seperti akun itu mengisi kekosongan yang ditinggalkan putus cinta. Tapi makin sering dipakai sebagai hiburan, makin sulit berhenti, dan proses menata hati setelah putus pun jadi makin tertunda.",
        "keywords": "Hiburan, Kefamiliaran, Kenangan hangat, Rasa tenang, Susah berhenti",
        "strengths": "Menghargai kenangan indah dan tahu cara menenangkan emosi diri sendiri",
        "reasonDetail": "Malam yang susah tidur, saat hati terasa kosong, saat teringat foto atau chat lama",
        "frequentSaying": "\"Setelah lihat jadi agak mendingan\"",
        "changeTips": "Siapkan dulu rutinitas pengganti (jalan-jalan, dengar musik, telepon teman) untuk waktu kamu biasanya butuh hiburan, seperti malam hari\nSimpan kenangan indah di catatan atau album fotomu sendiri, bukan di akun itu\nMinggu ini, buat sekali kesempatan terhubung dengan 'orang nyata' (teman, keluarga) untuk mendapat hiburan",
        "oneLiner": "Wajar kalau kamu butuh dihibur. Tapi sekarang hiburan itu boleh kamu dapatkan dari dirimu sendiri yang sekarang",
        "shareLine": "Kenapa setelah putus masih intip SNS mantan? Hasil: Tipe Menghibur Diri 🫶 Katanya melihat sudah jadi rutinitas buat menenangkan hati... ini banget aku, sudah disimpan, kamu gimana?"
      },
      {
        "title": "Orang yang tangannya bergerak lebih dulu, Tipe Kebiasaan Penasaran 📱",
        "typeName": "Tipe Kebiasaan Penasaran",
        "realReason": "Kamu ingin membuka aplikasi dan cek info baru lebih karena kebiasaan daripada alasan tertentu",
        "shortDescription": "Mungkin kamu membuka akun itu bukan karena masih sangat berharap. Ini kebiasaan berulang di mana tangan bergerak lebih dulu daripada pikiran.",
        "description": "Kalau ada postingan baru, tidak mungkin tidak dilihat, dan setelah lihat satu, lanjut lihat postingan lain beruntun. Sebelum sempat mencari alasan di hati, scrolling sudah dimulai duluan. Rangsangan kecil setiap kali cek berulang-ulang hingga membentuk lingkaran yang susah dihentikan.",
        "keywords": "Kebiasaan, Scroll otomatis, Penasaran postingan baru, Melihat beruntun, Susah berhenti",
        "strengths": "Peka terhadap informasi baru, penuh rasa ingin tahu, dan mudah larut dalam berbagai hal",
        "reasonDetail": "Saat ada notifikasi, saat memegang HP tanpa pikiran, di waktu senggang",
        "frequentSaying": "\"Tanpa sadar aku udah buka lagi\"",
        "changeTips": "Pindahkan posisi aplikasi atau mute/blokir akun itu supaya ada langkah tambahan sebelum membukanya\nSaat tangan mau meraih HP, lakukan hal lain dulu selama 3 menit (minum air, peregangan)\nTentukan jam tertentu dalam sehari untuk scrolling, dan matikan notifikasi di luar jam itu",
        "oneLiner": "Kalau ini kebiasaan tangan, bukan hati, mengubah lingkungan sekitar adalah cara tercepat",
        "shareLine": "Kenapa setelah putus masih intip SNS mantan? Hasil: Tipe Kebiasaan Penasaran 📱 Katanya bukan hati, tapi tangan yang bergerak duluan... ini banget aku wkwk disimpan, kamu tipe apa?"
      },
      {
        "title": "Orang yang ceritanya belum berakhir, Tipe Belum Selesai 🧩",
        "typeName": "Tipe Belum Selesai",
        "realReason": "Kata-kata yang belum terucap dan pertanyaan yang belum terjawab membuat hatimu belum selesai",
        "shortDescription": "Kamu bukan rindu pada orang itu. Cerita yang belum selesai sedang mencari titik akhirnya.",
        "description": "Pertanyaan seperti kenapa bisa berakhir seperti itu, kata terakhir apa yang belum sempat diucapkan, apakah putus ini benar-benar sudah pasti — masih tersisa di satu sudut hatimu. Membuka akun itu juga merupakan usaha untuk mencari akhir dari cerita tersebut. Tapi akhir cerita bukan tercipta dari SNS orang lain, melainkan dari kalimat yang kamu tulis sendiri untuk menutupnya.",
        "keywords": "Titik akhir, Kata yang belum terucap, Pertanyaan belum terjawab, Akhir yang menggantung, Mencari penutup",
        "strengths": "Tekun bertanggung jawab menyelesaikan hubungan dan punya kemauan untuk menata emosinya",
        "reasonDetail": "Saat teringat obrolan terakhir, saat teringat kata yang belum sempat diucapkan, saat putus terasa nyata",
        "frequentSaying": "\"Harusnya waktu itu aku bilang dulu baru selesai\"",
        "changeTips": "Tulis kata-kata yang belum terucap jadi surat yang tidak akan dikirim, sampai tuntas\nTulis daftar pertanyaan yang belum terjawab, lalu pisahkan jadi 'yang bisa aku jawab sendiri' dan 'yang hanya dia yang tahu'\nTentukan satu hari sebagai penutup, dan jadikan beres-beres akun itu (mute, sembunyikan) pada hari itu sebagai titik akhirnya",
        "oneLiner": "Akhir cerita bukan diberikan oleh orang lain, tapi ditulis dan ditutup oleh dirimu sendiri. Tulis satu per satu, dan titik akhirnya akan perlahan muncul",
        "shareLine": "Kenapa setelah putus masih intip SNS mantan? Hasil: Tipe Belum Selesai 🧩 Katanya cerita yang belum selesai lagi cari titik akhir... ini banget aku, disimpan, kamu dapat apa?"
      }
    ]
  }
};
