/** Auto-built from scripts/_love_eyeing_i18n/*.json — do not hand-edit */
export type Phase3LoveEyeingReasonForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3LoveEyeingReasonResultText = {
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
  results: Phase3LoveEyeingReasonResultText[];
};

export const PHASE3_LOVE_EYEING_REASON_I18N: Record<Phase3LoveEyeingReasonForeignLocale, LocaleBundle> = {
  "en": {
    "meta": {
      "title": "Why Do I Keep Reading the Room So Much When Dating?",
      "description": "Why do you check their mood first the moment you're dating? These 10 scenarios reveal the real reason you keep reading the room — and how to feel freer.",
      "tags": [
        "Dating Nunchi",
        "Dating Psychology",
        "Dating Types"
      ]
    },
    "questions": [
      {
        "q": "They ask, \"What do you want to eat today?\" You...",
        "opts": [
          "Recall what they said they wanted yesterday and suggest that",
          "Say \"anything's fine\" — scared a split opinion will make things awkward",
          "Watch their face first to see if they like the menu you picked",
          "Rewrite the answer in your head several times, scared it'll sound weird"
        ]
      },
      {
        "q": "They show up looking more tense than usual. You...",
        "opts": [
          "Brighten the topic so the mood doesn't sink",
          "Wonder if you did something wrong and try harder than usual",
          "Want to ask, but rewrite the question until you miss the moment",
          "Feel anxious — if it's because of you, they might start disliking you"
        ]
      },
      {
        "q": "They walk past your new haircut with no comment. You...",
        "opts": [
          "End up asking if they like it, or waiting for a compliment",
          "Want to ask, but swallow it — scared you'll look needy",
          "Worry they hate it and just won't say — or that they like you less",
          "Care, but they look tired, so you shelve your story and check on them first"
        ]
      },
      {
        "q": "They book friends for the weekend you left open. You...",
        "opts": [
          "Draft \"I'm hurt\" for ages, then just say \"Have fun~\" — scared you'll seem petty",
          "Act fine — scared that holding them back will annoy them or make them leave",
          "Shift your plans right away to match them, since they rarely see friends",
          "Say nothing — scared bringing it up will turn into a fight"
        ]
      },
      {
        "q": "They ask, \"Where do you want to go for this trip?\" You...",
        "opts": [
          "Match what they'd want — scared they'll hate your pick",
          "Figure out where they want to go first, then answer that way",
          "Say \"whatever works for you\" — scared a disagreement will clash",
          "Calculate which answer will please them and pick the praise-worthy option"
        ]
      },
      {
        "q": "They say, \"I'm tired — let's keep the call short tonight.\" You...",
        "opts": [
          "Worry you're boring them, and plan funnier topics next time",
          "Feel hurt but swallow it — scared it'll sound like nagging",
          "Say \"get some rest\" and shelve your own stories so you don't burden them",
          "Say \"okay, night~\" — scared saying you're disappointed will make it awkward"
        ]
      },
      {
        "q": "They say about your idea, \"I'm not sure about that.\" You...",
        "opts": [
          "Replay what you said in your head and regret it — was that weird?",
          "Panic they think less of you and quickly say \"maybe I got it wrong\"",
          "Fold with \"yeah, that could be\" — scared pushing back will start a fight",
          "Wanted recognition, so a cold reaction sticks with you all day"
        ]
      },
      {
        "q": "You don't love the anniversary gift, but they're watching with hopeful eyes. You...",
        "opts": [
          "Overact how much you love it — scared disappointment will hurt them and push them away",
          "Put their feelings first and thank them big — they chose carefully",
          "Calculate which reaction will please them most and give a praise-worthy response",
          "Rewrite your honest take again and again, scared the words will wound them"
        ]
      },
      {
        "q": "You're at their friends' gathering for the first time. You...",
        "opts": [
          "Read the room and care for them so much you barely enjoy yourself",
          "Laugh off awkward questions and dodge anything that could clash",
          "Censor every story before speaking until you barely talk",
          "Tense up — if their friends dislike you, they might pull away"
        ]
      },
      {
        "q": "They say, \"You always seem to be reading me.\" What's closest to your gut?",
        "opts": [
          "I was matching to avoid fights — so that's how it looked",
          "Feels like they caught me trying so hard to seem like a good person",
          "I kept reading the room because showing my real self might make them leave",
          "I wanted them comfortable, so my own feelings always came second"
        ]
      }
    ],
    "results": [
      {
        "title": "Someone who flinches first from fear of being disliked, the Rejection-Fear Type 🥀",
        "typeName": "Rejection-Fear Type",
        "realReason": "You're scared that showing your real self will get you rejected or left",
        "shortDescription": "You're not \"too sensitive.\" You're shrinking first because you're scared they'll dislike the real you.",
        "description": "Voicing an opinion or showing disappointment can feel like risking the love itself. So you scan their reactions and move toward matching them. Reading the room becomes a shield — but that shield also keeps your real self from reaching them.",
        "keywords": "Fear of being disliked, Fear they'll pull away, Hiding the real you, Matching, Fear of abandonment",
        "strengths": "You treasure the bond and carefully tend to how they feel",
        "reasonDetail": "When their face hardens, when opinions split, when you need to show real emotion",
        "frequentSaying": "\"You're not mad at me because of me, right?\"",
        "changeTips": "Pick one tiny preference today (menu, movie) and say it honestly\nWhen they disagree, write only the facts — is there real proof they dislike you?\nWhen anxiety rises, say it plain: \"I'm worried you might dislike me right now\"\nIf fear of being disliked repeats across relationships or weighs on daily life, explore its roots safely with a counseling professional",
        "oneLiner": "The ones who stay after seeing the real you are the real ones. Start honest with the small stuff",
        "shareLine": "Why do I keep reading the room so much when dating? Result: Rejection-Fear Type 🥀 Apparently I flinch because I'm scared they'll dislike the real me... this is so you lol try it — what'd you get?"
      },
      {
        "title": "Someone who puts their mood before yours, the Over-Caring Type 🌷",
        "typeName": "Over-Caring Type",
        "realReason": "Wanting them comfortable comes first — so your feelings keep getting pushed back",
        "shortDescription": "You're not \"reading the room.\" You want them comfortable so badly that you put yourself last.",
        "description": "If they look tired, you shelve your stories. You figure out what they want and match it first. It looks kind and mature — but when care stacks up, only you keep enduring. They may never learn what you actually want.",
        "keywords": "Them first, Your feelings last, Matching moods, Caregiving, Carrying it alone",
        "strengths": "Warm, quick to notice needs, and gifted at making the relationship feel easy",
        "reasonDetail": "When they look tired, when a choice is needed, when it's their moment to feel happy",
        "frequentSaying": "\"I'm fine — whatever works for you\"",
        "changeTips": "Before recalling their answer, write one line of what you want\nPractice saying \"I'd love this too\" once a day\nRemind yourself: caring doesn't mean you're not allowed to receive",
        "oneLiner": "Your care is precious — care that doesn't erase you is the kind that lasts",
        "shareLine": "Why do I keep reading the room so much when dating? Result: Over-Caring Type 🌷 Their mood comes before mine so I burn out... this is so you. Send me your result"
      },
      {
        "title": "Someone who swallows words for peace, the Conflict-Avoider Type 🕊️",
        "typeName": "Conflict-Avoider Type",
        "realReason": "You fold first because a clash feels like it will turn into a fight",
        "shortDescription": "You're not \"reading the room.\" You're moving to protect the vibe before conflict even starts.",
        "description": "When opinions might split, you say \"anything's fine.\" When hurt, you go with \"it's okay.\" Peace holds — but unresolved feelings don't vanish; they stack. Reading the room can block fights and also block getting to know each other.",
        "keywords": "Protecting the vibe, Anything's fine, It's okay, Dodging clashes, Stacking feelings",
        "strengths": "You create calm and make the other person feel at ease",
        "reasonDetail": "When opinions might diverge, when hurt rises, when the mood turns awkward",
        "frequentSaying": "\"No, let's just drop it\"",
        "changeTips": "When hurt, start with \"I'm not fighting — I just want you to know\"\nTry two sentences only: fact + feeling. Example: \"Plans changed and I felt a little hurt\"\nPractice small disagreements so you learn speaking doesn't break the bond",
        "oneLiner": "Speaking isn't fighting. The more often you speak small, the fewer big fights you get",
        "shareLine": "Why do I keep reading the room so much when dating? Result: Conflict-Avoider Type 🕊️ I swallow words first so we won't fight... \"anything's fine\" people — this is so you lol try it"
      },
      {
        "title": "Someone who wants to look like a good person, the Approval-Seeker Type ⭐",
        "typeName": "Approval-Seeker Type",
        "realReason": "You only feel safe when you're approved of and pleasing them",
        "shortDescription": "You're not \"reading the room.\" You're hunting their face for a \"you're doing well\" signal.",
        "description": "You keep checking whether they liked your choice, whether you're fun, whether your reaction earned praise. A cold response sticks all day, and next time you try even harder. Their approval starts to feel like your score.",
        "keywords": "Waiting for praise, Looking good, Pleasing them, Checking reactions, Keeping score",
        "strengths": "Effort and social sense to make them happy, plus sincere commitment to the relationship",
        "reasonDetail": "When they evaluate your choice, when their reaction runs colder than usual",
        "frequentSaying": "\"Was I okay? How was I?\"",
        "changeTips": "Even without praise, give yourself three wins from today first\nWhen you want to check their reaction, ask: do I want praise — or calm?\nAdd one weekly activity that's fun for you alone, with or without their approval",
        "oneLiner": "Wanting recognition is natural. Getting some of it from yourself makes the radar much lighter",
        "shareLine": "Why do I keep reading the room so much when dating? Result: Approval-Seeker Type ⭐ I hunt their face for a \"you're doing well\" signal... this is so you lol What's your type?"
      },
      {
        "title": "Someone who censors themselves before speaking, the Self-Censor Type ✂️",
        "typeName": "Self-Censor Type",
        "realReason": "You filter your words before their reaction even arrives",
        "shortDescription": "You're not \"reading the room.\" You're rewriting your lines while imagining a reaction that hasn't happened yet.",
        "description": "\"Will this sound weird?\" \"Will I seem needy?\" — you polish sentences endlessly before speaking. Afterward you replay what you said and regret it. They're fine — you're the only one burning energy and getting drained.",
        "keywords": "Rewriting lines, Swallowing words, Replaying, Imagined reactions, Draining yourself",
        "strengths": "Careful with words, never careless, and thoughtful about how you express yourself",
        "reasonDetail": "Right before speaking, right after speaking, when you need to share hurt or ask for something",
        "frequentSaying": "\"Is it okay to say this?\"",
        "changeTips": "Cap rewrites to once, then say it as is\nWhen replay starts after speaking, recall only their actual reaction as fact\nThrow one light line unpolished on purpose and notice nothing bad happens",
        "oneLiner": "Perfect lines aren't required. A slightly clumsy sentence with sincerity lands closer",
        "shareLine": "Why do I keep reading the room so much when dating? Result: Self-Censor Type ✂️ I filter my sentences before I even speak... this is so you. Try it and tell me"
      }
    ]
  },
  "ja": {
    "meta": {
      "title": "なぜ恋愛するとつい空気を読みすぎるの？",
      "description": "恋愛になると、なぜ相手の機嫌から気にしちゃうの？ 10の場面で、空気を読んでしまう本当の理由と楽になる方法を教えます。",
      "tags": [
        "恋愛の空気読み",
        "恋愛心理",
        "恋愛タイプ"
      ]
    },
    "questions": [
      {
        "q": "恋人に「今日なに食べる？」と聞かれた。自分は？",
        "opts": [
          "昨日食べたいと言っていたものを思い出して、それを提案する",
          "意見が分かれると空気が悪くなりそうで「なんでもいいよ」で終わる",
          "自分が選んだメニューを相手が気に入っているか、まず表情を見る",
          "このメニューを言うと変に思われそうで、頭の中で何度も直してから言う"
        ]
      },
      {
        "q": "約束の場所に来た恋人の表情が、いつもより硬い。自分は？",
        "opts": [
          "空気が沈まないよう、何事もないように話題を明るく変える",
          "自分が何かしたのか、がっかりされたのか気になって、いつもより頑張る",
          "聞こうとして、この質問が負担に思われそうで言葉を選んでいるうちにタイミングを逃す",
          "自分のせいで機嫌が悪いなら嫌われるのでは、と不安になる"
        ]
      },
      {
        "q": "新しい髪型について、恋人が何も言わずに通り過ぎた。自分は？",
        "opts": [
          "気に入ったか直接聞いたり、褒めの一言が出るまで待ってしまう",
          "どうかと聞きたいのに、そんなことを聞く人に見られそうで口の中で飲み込む",
          "気に入らないのに言えないのか、自分が嫌われたのか心配する",
          "気になるけど相手が疲れて見えるので、自分の話はしまってコンディションを先に気遣う"
        ]
      },
      {
        "q": "自分が空けておいた週末に、恋人が友達の約束を入れたと言う。自分は？",
        "opts": [
          "寂しいと言うと狭量に見えそうで、文を何度も直してから「いってらっしゃい〜」と言う",
          "引き留めたら面倒がられたり離れられそうで、平気なふりをする",
          "久しぶりの友達だから、すぐ自分の予定を変えて相手に合わせる",
          "切り出すと喧嘩になりそうで、何も言わずに流す"
        ]
      },
      {
        "q": "恋人に「今度の旅行、どこ行きたい？」と聞かれた。自分は？",
        "opts": [
          "自分の希望を言って嫌われたらと思うと、相手が喜びそうな方に合わせる",
          "相手がどこに行きたいかを先に探って、そちらで答える",
          "意見が違うとぶつかるのが怖くて「君の都合でいいよ」と言う",
          "どの答えが相手の心に刺さるか計算し、褒められそうな選択をする"
        ]
      },
      {
        "q": "恋人に「今日は疲れたから通話短めで」と言われた。自分は？",
        "opts": [
          "自分がつまらなくて疲れたのではと気になり、次はもっと面白い話を用意する",
          "寂しくても言うと愚痴っぽく聞こえそうで、頭の中で検閲して言葉を飲み込む",
          "疲れた相手に負担をかけたくなくて「ゆっくり休んで」と自分の話はしまう",
          "寂しいと言うと空気が悪くなりそうで「うん、おやすみ〜」で終わる"
        ]
      },
      {
        "q": "自分の意見に恋人が「それはちょっと違うかも」と言った。自分は？",
        "opts": [
          "さっきの発言が変だったのか、頭の中で何度も巻き戻して後悔する",
          "これで印象が悪くなるのではとドキッとして、すぐ「あ、私の考え違ったかも」と言う",
          "言い返すと喧嘩になりそうで「そうかもね」と引く",
          "認めてほしかったのに反応が冷たくて、その日一日中気になる"
        ]
      },
      {
        "q": "記念日のプレゼントがあまり好きじゃないのに、恋人が期待の目で見ている。自分は？",
        "opts": [
          "がっかりした顔が出ると相手が傷つき距離を置かれそうで、過剰に喜ぶふりをする",
          "丁寧に選んだはずだから、相手の気持ちを最優先して大きくありがとうを伝える",
          "どのリアクションが一番相手を満足させるか計算し、褒められそうな反応をする",
          "本音を言おうとして、この言葉が傷になるか何度も文を直す"
        ]
      },
      {
        "q": "恋人の友達の集まりに初めて参加した。自分は？",
        "opts": [
          "恋人が楽になるよう空気を読み、必要なものを気遣いすぎて、自分が楽しめない",
          "気まずい質問も笑って流し、ぶつかりそうな話題は避ける",
          "話す前に「この話していい？」とずっと検閲して、だんだん無口になる",
          "この人たちの目に自分がダメだと、恋人が離れてしまうのではと緊張する"
        ]
      },
      {
        "q": "恋人に「いつも僕（私）の顔色を伺ってる気がする」と言われた。本音に近いのは？",
        "opts": [
          "喧嘩したくなくて合わせてきたのが、そう見えたんだなと思う",
          "良い人に見えようと頑張ってきたのがバレた気がする",
          "本当の自分を見せたら離れられるのが怖くて、ずっと空気を読んでいた",
          "相手が楽でいてほしかったから、自分の気持ちはずっと後回しにしてきた"
        ]
      }
    ],
    "results": [
      {
        "title": "嫌われるのが怖くて先に縮こまる人、拒絶恐怖タイプ 🥀",
        "typeName": "拒絶恐怖タイプ",
        "realReason": "ありのままを見せたら拒絶されたり離れられたりするのが怖い",
        "shortDescription": "あなたは過敏なのではありません。ありのままを見せたら嫌われるのが怖くて、先に体を縮めているのです。",
        "description": "意見を言うことやがっかりした顔を見せることが、愛を失うことのように感じます。だから相手の反応を読み、合わせる方向に動きます。空気読みは自分を守る盾になりますが、その盾のせいで本当の自分は相手に届きにくくなります。",
        "keywords": "嫌われるのが怖い, 嫌われたらどうしよう, 本当の自分を隠す, 合わせる, 捨てられる恐れ",
        "strengths": "関係を大切にし、相手の気持ちを丁寧に察する繊細さ",
        "reasonDetail": "相手の表情が固いとき、意見が分かれそうなとき、本当の感情を見せるとき",
        "frequentSaying": "「私のせいで嫌いになったんじゃないよね？」",
        "changeTips": "今日は小さな好み（メニュー・映画）をひとつ、正直に言ってみる\n相手が違う意見を言ったとき、「嫌われた証拠」が本当にあるか事実だけ書く\n不安が上がったら「今、嫌われるかもって心配」とそのまま伝える\n嫌われる恐れが恋愛のたびに繰り返す／日常全体で重いなら、心理カウンセリングの専門家とその根を安全に探ってみてください",
        "oneLiner": "本当の自分を見せてもそばに残る人が、本当の縁です。小さなことから正直になってみて",
        "shareLine": "なぜ恋愛するとつい空気を読みすぎるの？結果：拒絶恐怖タイプ🥀 本当の自分を見せたら嫌われるのが怖くて縮こまるらしい…これ君っぽいwww 一緒にやって、何が出る？"
      },
      {
        "title": "相手の機嫌が自分の機嫌より先の人、配慮過多タイプ 🌷",
        "typeName": "配慮過多タイプ",
        "realReason": "相手が楽でいてほしい気持ちが先で、自分の気持ちはずっと後回しになる",
        "shortDescription": "あなたは空気を読んでいるのではありません。相手が楽でいてほしくて、自分を後ろに下げすぎています。",
        "description": "相手が疲れて見えると自分の話はしまい、相手の望みを先に探って合わせます。優しく成熟した態度に見えますが、この配慮が積もると自分だけが我慢する関係になりやすい。肝心の自分が欲しいものは、相手が知らないこともあります。",
        "keywords": "相手優先, 自分の気持ちは後回し, 機嫌合わせ, 気遣い, 一人で抱える",
        "strengths": "温かく、相手の必要にすぐ気づき、関係を楽に整える力",
        "reasonDetail": "相手が疲れて見えるとき、選択が必要なとき、相手が喜ぶべき場面のとき",
        "frequentSaying": "「私は大丈夫、君の都合でいいよ」",
        "changeTips": "選ぶ瞬間、相手の答えを思い浮かべる前に「自分が欲しいもの」を一行書く\n「私もこれがいい」と言う練習を一日一回だけする\n配慮した分、自分も受け取っていい人だという文を思い出す",
        "oneLiner": "あなたの配慮は大切です。自分を消さない配慮が、長く続く配慮です",
        "shareLine": "なぜ恋愛するとつい空気を読みすぎるの？結果：配慮過多タイプ🌷 相手の機嫌が自分より先で疲れるらしい…これ君っぽい本当に。結果送って"
      },
      {
        "title": "平和のために言葉を飲み込む人、衝突回避タイプ 🕊️",
        "typeName": "衝突回避タイプ",
        "realReason": "ぶつかる瞬間が喧嘩になるのが怖くて、先に引く",
        "shortDescription": "あなたは空気を読んでいるのではありません。衝突が生まれる前に、空気を守ろうと動いています。",
        "description": "意見が分かれそうだと「なんでもいいよ」と言い、寂しくても「大丈夫」で流します。平和な空気は守れますが、解けない気持ちは消えずに積み上がります。空気読みは喧嘩を防ぐ代わりに、お互いを知る機会も塞いでしまうことがあります。",
        "keywords": "空気を守る, なんでもいい, 大丈夫, 衝突回避, 積み上がる気持ち",
        "strengths": "平和な空気をつくり、相手を楽にさせる力",
        "reasonDetail": "意見が分かれそうなとき、寂しい気持ちが上がるとき、空気が気まずくなるとき",
        "frequentSaying": "「ううん、もういいよ」",
        "changeTips": "寂しいことがあったら責める代わりに「喧嘩したいんじゃなく、伝えたいだけ」から始める\n「事実＋自分の感情」の二文だけ言ってみる。例：「予定が変わって少し寂しかった」\n小さな意見の違いから話し、話しても関係が壊れない経験を積む",
        "oneLiner": "話すことと喧嘩することは違います。小さく頻繁に話すほど、大きな喧嘩は減ります",
        "shareLine": "なぜ恋愛するとつい空気を読みすぎるの？結果：衝突回避タイプ🕊️ 喧嘩になるのが怖くて言葉を先に飲み込むらしい…なんでもいいよ族、これ君っぽいwww やってみて"
      },
      {
        "title": "良い人に見られたい人、承認渇望タイプ ⭐",
        "typeName": "承認渇望タイプ",
        "realReason": "相手に認められ、満足させないと安心できない",
        "shortDescription": "あなたは空気を読んでいるのではありません。相手の表情から「うまくやれている」サインを探しています。",
        "description": "自分の選択が相手の心に入ったか、面白い人か、褒められる反応をしたかをずっと点検します。反応が冷たいと一日中気になり、次はもっと頑張ろうとします。相手の承認が、自分の点数のように感じられるタイプです。",
        "keywords": "褒め待ち, 良く見せる, 満足させる, 反応チェック, 点数づけ",
        "strengths": "相手を喜ばせようとする努力とセンスがあり、関係に誠実",
        "reasonDetail": "自分の選択が評価されるとき、相手の反応がいつもより冷たいとき",
        "frequentSaying": "「私、大丈夫だった？どうだった？」",
        "changeTips": "褒めがなくても「今日自分がやったこと」を3つ、自分で先に褒める\n相手の反応を点検したくなったら「今欲しいのは褒め？それとも安心？」を分ける\n相手の満足と関係なく、一人で楽しいことを週にひとつ作る",
        "oneLiner": "認められたい気持ちは自然です。承認の一部を自分から受け取ると、空気読みはずっと軽くなります",
        "shareLine": "なぜ恋愛するとつい空気を読みすぎるの？結果：承認渇望タイプ⭐ 相手の表情から「うまくやれている」サインを探すらしい…これ君っぽいwww 君は何タイプ？"
      },
      {
        "title": "話す前に自分で検閲する人、自己検閲タイプ ✂️",
        "typeName": "自己検閲タイプ",
        "realReason": "相手の反応が来る前に、自分の言葉を自分が先にふるいにかける",
        "shortDescription": "あなたは空気を読んでいるのではありません。まだ出ていない相手の反応を先に想像して、言葉を自分で直しています。",
        "description": "「この言い方変？」「愚痴っぽく聞こえない？」と、話す前に文を何度も直します。話したあとも頭の中で巻き戻して後悔します。相手は平気なのに、自分だけエネルギーを使い果たして疲れるタイプです。",
        "keywords": "文の書き直し, 言葉を飲み込む, 巻き戻し, 想像上の反応, 一人で消耗",
        "strengths": "慎重で、言葉を軽くせず、相手を思いやって表現を選ぶ繊細さ",
        "reasonDetail": "話し出す直前、話し終わった直後、寂しさやお願いを伝えるとき",
        "frequentSaying": "「この話して大丈夫かな？」",
        "changeTips": "話す前の直し回数を「一度」と決めて、そのあとはそのまま言う\n話したあとの巻き戻しが始まったら、相手の実際の反応だけを事実として思い出す\n軽い一言をわざと直さずに投げてみて、何も起きない経験を積む",
        "oneLiner": "完璧な文はいりません。少し不器用でも、真心のある一言の方が近くに届きます",
        "shareLine": "なぜ恋愛するとつい空気を読みすぎるの？結果：自己検閲タイプ✂️ 話す前に自分が先に文をふるいにかけるらしい…これ君っぽい。やって教えて"
      }
    ]
  },
  "zh-CN": {
    "meta": {
      "title": "为什么一恋爱就总爱察言观色？",
      "description": "一恋爱，为什么总先看对方脸色？用10个情境找出你总爱察言观色的真正原因，以及让自己轻松下来的方法。",
      "tags": [
        "恋爱察言观色",
        "恋爱心理",
        "恋爱类型"
      ]
    },
    "questions": [
      {
        "q": "恋人问「今天想吃什么？」你会？",
        "opts": [
          "想起对方昨天说想吃的，就提议那个",
          "怕意见不合气氛尴尬，于是说「什么都行」",
          "先看对方表情，确认自己选的菜单对方满不满意",
          "怕说出来显得奇怪，在心里改好几遍才开口"
        ]
      },
      {
        "q": "赴约时恋人表情比平时僵。你会？",
        "opts": [
          "怕气氛沉下去，装作没事把话题往亮处转",
          "担心自己做错了、对方失望了，于是比平时更用力",
          "想问又怕问题显得沉重，挑词挑到错过时机",
          "怕是自己害对方心情不好、会被讨厌，变得不安"
        ]
      },
      {
        "q": "换了新发型，恋人没评价就过去了。你会？",
        "opts": [
          "会直接问喜不喜欢，或等一句夸奖",
          "想问却咽回去——怕显得爱计较",
          "担心对方其实不喜欢只是不说，或开始不喜欢自己",
          "在意，但对方看起来累，于是收起自己的事先照顾对方"
        ]
      },
      {
        "q": "恋人把你空出的周末约了朋友。你会？",
        "opts": [
          "怕说委屈显得小气，改了半天句子最后说「去玩吧～」",
          "怕挽留会惹烦或被离开，于是装作没事",
          "难得见朋友，马上改自己的行程去配合",
          "怕一提就吵起来，于是什么都不说翻篇"
        ]
      },
      {
        "q": "恋人问「这次旅行你想去哪？」你会？",
        "opts": [
          "怕自己说的对方不喜欢，于是往对方可能想去的方向靠",
          "先摸清对方想去哪，再往那边答",
          "怕意见不同会冲突，说「你方便就好」",
          "计算哪种答案更讨对方喜欢，选能被夸的选项"
        ]
      },
      {
        "q": "恋人说「今天累了，通话短一点」。你会？",
        "opts": [
          "担心自己无聊才让对方累，下次准备更有趣的话题",
          "委屈但怕像撒娇抱怨，于是自我审查后把话咽下",
          "不想给累的人添负担，说「好好休息」并收起自己的事",
          "怕说可惜会尴尬，回「好，晚安～」就结束"
        ]
      },
      {
        "q": "恋人说你的意见「好像不太对」。你会？",
        "opts": [
          "觉得刚才的话是不是奇怪，在脑子里反复回放后悔",
          "怕因此被看低，立刻说「啊可能是我想错了」",
          "怕反驳会吵起来，说「也可能吧」就收起",
          "想被认可，却遇冷反应，整天都耿耿于怀"
        ]
      },
      {
        "q": "纪念日礼物不太喜欢，但恋人用期待的眼神看着你。你会？",
        "opts": [
          "怕失望的表情伤到对方、被疏远，于是夸张地表现喜欢",
          "知道对方用心挑过，把对方心情放第一，大力道谢",
          "计算哪种反应最能让对方满意，做出能被夸的回应",
          "想说真话，却反复改句子，怕话会伤人"
        ]
      },
      {
        "q": "第一次参加恋人朋友的聚会。你会？",
        "opts": [
          "为了让恋人轻松，忙着看气氛、照顾，自己反而玩不起来",
          "尴尬问题也笑着带过，避开可能冲突的话题",
          "开口前一直审查「这话能不能说」，话越来越少",
          "紧张：如果这些人觉得自己不行，恋人会不会疏远自己"
        ]
      },
      {
        "q": "恋人说「你好像总在看我脸色」。最接近你的真心是？",
        "opts": [
          "不想吵架才一直配合，原来看起来是这样",
          "像是努力当「好人」被抓包了",
          "怕露出真我对方会走，所以一直察言观色",
          "想让对方舒服，所以自己的心情总往后放"
        ]
      }
    ],
    "results": [
      {
        "title": "怕被讨厌而先缩起来的人，拒绝恐惧型 🥀",
        "typeName": "拒绝恐惧型",
        "realReason": "怕露出真我会被拒绝或离开",
        "shortDescription": "你不是太敏感。你是怕对方看到真实的你会讨厌，所以先把身体缩起来。",
        "description": "说出意见、露出失望的表情，都像在拿爱冒险。于是你盯着对方的反应，往配合的方向走。察言观色成了保护自己的盾——但这面盾也让真正的你更难到达对方。",
        "keywords": "怕被讨厌, 怕被疏远, 隐藏真我, 配合, 被弃恐惧",
        "strengths": "珍惜关系，细致体察对方心情",
        "reasonDetail": "对方表情变僵时、意见可能分歧时、需要露出真感情时",
        "frequentSaying": "「不是因为我才讨厌我吧？」",
        "changeTips": "今天选一个很小的偏好（菜单、电影）诚实说出来\n对方提出不同意见时，只写事实：有没有「被讨厌」的真证据？\n不安升起时直接说「我现在怕你会讨厌我」\n若怕被讨厌在每段恋爱反复，或压得日常很沉，可与心理咨询专业人士安全地看清恐惧的根",
        "oneLiner": "看到真我仍留下的人，才是真缘分。从小事开始诚实一点",
        "shareLine": "为什么一恋爱就总爱察言观色？结果：拒绝恐惧型🥀 怕露出真我被讨厌所以先缩起来……太像你了哈哈哈，一起测，你出什么？"
      },
      {
        "title": "对方心情排在自己前面的人，过度体贴型 🌷",
        "typeName": "过度体贴型",
        "realReason": "想让对方舒服的心太靠前，自己的心总被往后推",
        "shortDescription": "你不是在察言观色。你太想让对方舒服，把自己放得太靠后了。",
        "description": "对方看起来累，你就收起自己的事；先摸清对方想要什么再配合。看起来温柔成熟，但这种体贴一堆积，容易变成只有你在忍。你真正想要的，对方可能根本不知道。",
        "keywords": "对方优先, 自己心情靠后, 配合情绪, 照顾, 独自扛",
        "strengths": "温暖、很快察觉需要，能把关系照顾得很舒服",
        "reasonDetail": "对方看起来累时、需要做选择时、该让对方开心的场合",
        "frequentSaying": "「我都行，你方便就好」",
        "changeTips": "做选择前，先写一行「我想要的」，再去想对方\n每天练习一次说「我也喜欢这个」\n提醒自己：体贴过，自己也有资格被接住",
        "oneLiner": "你的体贴很珍贵。不抹掉自己的体贴，才走得久",
        "shareLine": "为什么一恋爱就总爱察言观色？结果：过度体贴型🌷 对方心情排自己前面所以累……太像你了，把结果发我"
      },
      {
        "title": "为了和平把话咽回去的人，冲突回避型 🕊️",
        "typeName": "冲突回避型",
        "realReason": "怕一碰撞就变成吵架，于是先收起",
        "shortDescription": "你不是在察言观色。你是在冲突出现之前，先去守住气氛。",
        "description": "意见可能不合就说「什么都行」，委屈了也用「没事」翻篇。气氛保住了，未解决的心却不会消失，只会堆着。察言观色挡住冲突，也可能挡住彼此了解的机会。",
        "keywords": "守气氛, 什么都行, 没事, 回避碰撞, 堆积的心情",
        "strengths": "能营造平和，让对方感到轻松",
        "reasonDetail": "意见可能分歧时、委屈升起时、气氛变尴尬时",
        "frequentSaying": "「没事，就这样吧」",
        "changeTips": "有委屈时别先质问，用「不是想吵，只是想让你知道」开头\n只说两句：事实＋感受。例：「计划变了，我有点失落」\n从小分歧开始练习说，积累「说了关系也不会散」的经验",
        "oneLiner": "说话不等于吵架。小话说得多，大吵才会少",
        "shareLine": "为什么一恋爱就总爱察言观色？结果：冲突回避型🕊️ 怕吵架先把话咽回去……「什么都行」的人太像你了哈哈哈，你也测"
      },
      {
        "title": "想当好人的人，寻求认可型 ⭐",
        "typeName": "寻求认可型",
        "realReason": "被认可、让对方满意，才能安心",
        "shortDescription": "你不是在察言观色。你在对方脸上寻找「我做得很好」的信号。",
        "description": "你不断检查：选择对方满不满意、自己有没有趣、反应够不够被夸。遇冷反应就整天挂心，下次更用力。对方的认可开始像你的分数。",
        "keywords": "等夸奖, 表现好, 讨对方满意, 检查反应, 打分",
        "strengths": "有让对方开心的努力与分寸感，对关系认真",
        "reasonDetail": "自己的选择被评估时、对方反应比平时冷时",
        "frequentSaying": "「我刚才还行吗？怎么样？」",
        "changeTips": "没有夸奖时，也先给自己列三件今天做到的事\n想检查对方反应时，分清：我要的是夸奖，还是安心？\n每周做一件不靠对方满意也能让自己开心的事",
        "oneLiner": "想被认可很自然。从自己那里领一部分认可，察言观色会轻松很多",
        "shareLine": "为什么一恋爱就总爱察言观色？结果：寻求认可型⭐ 在对方脸上找「做得很好」的信号……太像你了哈哈哈，你是什么类型？"
      },
      {
        "title": "开口前就自我审查的人，自我审查型 ✂️",
        "typeName": "自我审查型",
        "realReason": "对方还没反应，你就先把自己的话筛掉了",
        "shortDescription": "你不是在察言观色。你在预想还没出现的反应，并自己改措辞。",
        "description": "「这话会不会怪？」「会不会像抱怨？」——开口前改无数遍。说完又在脑里回放后悔。对方没事，只有你耗尽能量、越来越累。",
        "keywords": "改句子, 把话咽下, 回放, 想象中的反应, 独自耗尽",
        "strengths": "谨慎、不轻率开口，会体贴地挑选表达",
        "reasonDetail": "即将开口时、刚说完时、要传达委屈或请求时",
        "frequentSaying": "「这话能说吗？」",
        "changeTips": "把改句子的次数限成「一次」，然后直接说\n说完开始回放时，只回想对方真实反应作为事实\n故意扔一句不打磨的轻话，积累「其实没事」的经验",
        "oneLiner": "不需要完美句子。稍微笨拙但真诚的一句话，往往更近",
        "shareLine": "为什么一恋爱就总爱察言观色？结果：自我审查型✂️ 开口前就先筛掉自己的句子……太像你了，测完告诉我"
      }
    ]
  },
  "zh-TW": {
    "meta": {
      "title": "為什麼一戀愛就總愛察言觀色？",
      "description": "一戀愛，為什麼總先看對方臉色？用10個情境找出你總愛察言觀色的真正原因，以及讓自己輕鬆下來的方法。",
      "tags": [
        "戀愛察言觀色",
        "戀愛心理",
        "戀愛類型"
      ]
    },
    "questions": [
      {
        "q": "戀人問「今天想吃什麼？」你會？",
        "opts": [
          "想起對方昨天說想吃的，就提議那個",
          "怕意見不合氣氛尷尬，於是說「什麼都行」",
          "先看對方表情，確認自己選的菜單對方滿不滿意",
          "怕說出來顯得奇怪，在心裡改好幾遍才開口"
        ]
      },
      {
        "q": "赴約時戀人表情比平時僵。你會？",
        "opts": [
          "怕氣氛沉下去，裝作沒事把話題往亮處轉",
          "擔心自己做錯了、對方失望了，於是比平時更用力",
          "想問又怕問題顯得沉重，挑詞挑到錯過時機",
          "怕是自己害對方心情不好、會被討厭，變得不安"
        ]
      },
      {
        "q": "換了新發型，戀人沒評價就過去了。你會？",
        "opts": [
          "會直接問喜不喜歡，或等一句誇獎",
          "想問卻咽回去——怕顯得愛計較",
          "擔心對方其實不喜歡只是不說，或開始不喜歡自己",
          "在意，但對方看起來累，於是收起自己的事先照顧對方"
        ]
      },
      {
        "q": "戀人把你空出的週末約了朋友。你會？",
        "opts": [
          "怕說委屈顯得小氣，改了半天句子最後說「去玩吧～」",
          "怕挽留會惹煩或被離開，於是裝作沒事",
          "難得見朋友，馬上改自己的行程去配合",
          "怕一提就吵起來，於是什麼都不說翻篇"
        ]
      },
      {
        "q": "戀人問「這次旅行你想去哪？」你會？",
        "opts": [
          "怕自己說的對方不喜歡，於是往對方可能想去的方向靠",
          "先摸清對方想去哪，再往那邊答",
          "怕意見不同會衝突，說「你方便就好」",
          "計算哪種答案更討對方喜歡，選能被誇的選項"
        ]
      },
      {
        "q": "戀人說「今天累了，通話短一點」。你會？",
        "opts": [
          "擔心自己無聊才讓對方累，下次準備更有趣的話題",
          "委屈但怕像撒嬌抱怨，於是自我審查後把話嚥下",
          "不想給累的人添負擔，說「好好休息」並收起自己的事",
          "怕說可惜會尷尬，回「好，晚安～」就結束"
        ]
      },
      {
        "q": "戀人說你的意見「好像不太對」。你會？",
        "opts": [
          "覺得剛才的話是不是奇怪，在腦子裡反覆回放後悔",
          "怕因此被看低，立刻說「啊可能是我想錯了」",
          "怕反駁會吵起來，說「也可能吧」就收起",
          "想被認可，卻遇冷反應，整天都耿耿於懷"
        ]
      },
      {
        "q": "紀念日禮物不太喜歡，但戀人用期待的眼神看著你。你會？",
        "opts": [
          "怕失望的表情傷到對方、被疏遠，於是誇張地表現喜歡",
          "知道對方用心挑過，把對方心情放第一，大力道謝",
          "計算哪種反應最能讓對方滿意，做出能被誇的回應",
          "想說真話，卻反覆改句子，怕話會傷人"
        ]
      },
      {
        "q": "第一次參加戀人朋友的聚會。你會？",
        "opts": [
          "為了讓戀人輕鬆，忙著看氣氛、照顧，自己反而玩不起來",
          "尷尬問題也笑著帶過，避開可能衝突的話題",
          "開口前一直審查「這話能不能說」，話越來越少",
          "緊張：如果這些人覺得自己不行，戀人會不會疏遠自己"
        ]
      },
      {
        "q": "戀人說「你好像總在看我臉色」。最接近你的真心是？",
        "opts": [
          "不想吵架才一直配合，原來看起來是這樣",
          "像是努力當「好人」被抓包了",
          "怕露出真我對方會走，所以一直察言觀色",
          "想讓對方舒服，所以自己的心情總往後放"
        ]
      }
    ],
    "results": [
      {
        "title": "怕被討厭而先縮起來的人，拒絕恐懼型 🥀",
        "typeName": "拒絕恐懼型",
        "realReason": "怕露出真我會被拒絕或離開",
        "shortDescription": "你不是太敏感。你是怕對方看到真實的你會討厭，所以先把身體縮起來。",
        "description": "說出意見、露出失望的表情，都像在拿愛冒險。於是你盯著對方的反應，往配合的方向走。察言觀色成了保護自己的盾——但這面盾也讓真正的你更難到達對方。",
        "keywords": "怕被討厭, 怕被疏遠, 隱藏真我, 配合, 被棄恐懼",
        "strengths": "珍惜關係，細緻體察對方心情",
        "reasonDetail": "對方表情變僵時、意見可能分歧時、需要露出真感情時",
        "frequentSaying": "「不是因為我才討厭我吧？」",
        "changeTips": "今天選一個很小的偏好（菜單、電影）誠實說出來\n對方提出不同意見時，只寫事實：有沒有「被討厭」的真證據？\n不安升起時直接說「我現在怕你會討厭我」\n若怕被討厭在每段戀愛反覆，或壓得日常很沉，可與心理諮詢專業人士安全地看清恐懼的根",
        "oneLiner": "看到真我仍留下的人，才是真緣分。從小事開始誠實一點",
        "shareLine": "為什麼一戀愛就總愛察言觀色？結果：拒絕恐懼型🥀 怕露出真我被討厭所以先縮起來……太像你了哈哈哈，一起測，你出什麼？"
      },
      {
        "title": "對方心情排在自己前面的人，過度體貼型 🌷",
        "typeName": "過度體貼型",
        "realReason": "想讓對方舒服的心太靠前，自己的心總被往後推",
        "shortDescription": "你不是在察言觀色。你太想讓對方舒服，把自己放得太靠後了。",
        "description": "對方看起來累，你就收起自己的事；先摸清對方想要什麼再配合。看起來溫柔成熟，但這種體貼一堆積，容易變成只有你在忍。你真正想要的，對方可能根本不知道。",
        "keywords": "對方優先, 自己心情靠後, 配合情緒, 照顧, 獨自扛",
        "strengths": "溫暖、很快察覺需要，能把關係照顧得很舒服",
        "reasonDetail": "對方看起來累時、需要做選擇時、該讓對方開心的場合",
        "frequentSaying": "「我都行，你方便就好」",
        "changeTips": "做選擇前，先寫一行「我想要的」，再去想對方\n每天練習一次說「我也喜歡這個」\n提醒自己：體貼過，自己也有資格被接住",
        "oneLiner": "你的體貼很珍貴。不抹掉自己的體貼，才走得久",
        "shareLine": "為什麼一戀愛就總愛察言觀色？結果：過度體貼型🌷 對方心情排自己前面所以累……太像你了，把結果發我"
      },
      {
        "title": "為了和平把話咽回去的人，衝突迴避型 🕊️",
        "typeName": "衝突迴避型",
        "realReason": "怕一碰撞就變成吵架，於是先收起",
        "shortDescription": "你不是在察言觀色。你是在衝突出現之前，先去守住氣氛。",
        "description": "意見可能不合就說「什麼都行」，委屈了也用「沒事」翻篇。氣氛保住了，未解決的心卻不會消失，只會堆著。察言觀色擋住衝突，也可能擋住彼此瞭解的機會。",
        "keywords": "守氣氛, 什麼都行, 沒事, 迴避碰撞, 堆積的心情",
        "strengths": "能營造平和，讓對方感到輕鬆",
        "reasonDetail": "意見可能分歧時、委屈升起時、氣氛變尷尬時",
        "frequentSaying": "「沒事，就這樣吧」",
        "changeTips": "有委屈時別先質問，用「不是想吵，只是想讓你知道」開頭\n只說兩句：事實＋感受。例：「計劃變了，我有點失落」\n從小分歧開始練習說，積累「說了關係也不會散」的經驗",
        "oneLiner": "說話不等於吵架。小話說得多，大吵才會少",
        "shareLine": "為什麼一戀愛就總愛察言觀色？結果：衝突迴避型🕊️ 怕吵架先把話咽回去……「什麼都行」的人太像你了哈哈哈，你也測"
      },
      {
        "title": "想當好人的人，尋求認可型 ⭐",
        "typeName": "尋求認可型",
        "realReason": "被認可、讓對方滿意，才能安心",
        "shortDescription": "你不是在察言觀色。你在對方臉上尋找「我做得很好」的信號。",
        "description": "你不斷檢查：選擇對方滿不滿意、自己有沒有趣、反應夠不夠被誇。遇冷反應就整天掛心，下次更用力。對方的認可開始像你的分數。",
        "keywords": "等誇獎, 表現好, 討對方滿意, 檢查反應, 打分",
        "strengths": "有讓對方開心的努力與分寸感，對關係認真",
        "reasonDetail": "自己的選擇被評估時、對方反應比平時冷時",
        "frequentSaying": "「我剛才還行嗎？怎麼樣？」",
        "changeTips": "沒有誇獎時，也先給自己列三件今天做到的事\n想檢查對方反應時，分清：我要的是誇獎，還是安心？\n每週做一件不靠對方滿意也能讓自己開心的事",
        "oneLiner": "想被認可很自然。從自己那裡領一部分認可，察言觀色會輕鬆很多",
        "shareLine": "為什麼一戀愛就總愛察言觀色？結果：尋求認可型⭐ 在對方臉上找「做得很好」的信號……太像你了哈哈哈，你是什麼類型？"
      },
      {
        "title": "開口前就自我審查的人，自我審查型 ✂️",
        "typeName": "自我審查型",
        "realReason": "對方還沒反應，你就先把自己的話篩掉了",
        "shortDescription": "你不是在察言觀色。你在預想還沒出現的反應，並自己改措辭。",
        "description": "「這話會不會怪？」「會不會像抱怨？」——開口前改無數遍。說完又在腦裡回放後悔。對方沒事，只有你耗盡能量、越來越累。",
        "keywords": "改句子, 把話嚥下, 回放, 想象中的反應, 獨自耗盡",
        "strengths": "謹慎、不輕率開口，會體貼地挑選表達",
        "reasonDetail": "即將開口時、剛說完時、要傳達委屈或請求時",
        "frequentSaying": "「這話能說嗎？」",
        "changeTips": "把改句子的次數限成「一次」，然後直接說\n說完開始回放時，只回想對方真實反應作為事實\n故意扔一句不打磨的輕話，積累「其實沒事」的經驗",
        "oneLiner": "不需要完美句子。稍微笨拙但真誠的一句話，往往更近",
        "shareLine": "為什麼一戀愛就總愛察言觀色？結果：自我審查型✂️ 開口前就先篩掉自己的句子……太像你了，測完告訴我"
      }
    ]
  },
  "vi": {
    "meta": {
      "title": "Tại sao yêu rồi lại cứ dò xét sắc mặt đối phương?",
      "description": "Vừa yêu, sao lại nhìn sắc mặt đối phương trước? 10 tình huống giúp bạn tìm ra lý do thật sự và cách sống nhẹ nhàng hơn.",
      "tags": [
        "Đọc vị trong tình yêu",
        "Tâm lý tình yêu",
        "Kiểu yêu"
      ]
    },
    "questions": [
      {
        "q": "Họ hỏi «Hôm nay muốn ăn gì?» Bạn sẽ?",
        "opts": [
          "Nhớ món họ muốn hôm qua rồi đề xuất món đó",
          "Sợ ý kiến lệch làm không khí ngại nên bảo «Gì cũng được»",
          "Nhìn biểu cảm trước xem họ có hài lòng món mình chọn không",
          "Sợ nói ra nghe kỳ nên sửa câu trong đầu nhiều lần mới nói"
        ]
      },
      {
        "q": "Họ đến chỗ hẹn với vẻ mặt căng hơn thường. Bạn sẽ?",
        "opts": [
          "Chuyển chủ đề vui để không khí khỏi lắng",
          "Lo mình làm sai gì đó nên cố gắng hơn thường",
          "Muốn hỏi nhưng sợ câu hỏi nặng nề, chọn lời đến mất timing",
          "Lo nếu vì mình mà họ khó chịu thì sẽ bị ghét"
        ]
      },
      {
        "q": "Đổi kiểu tóc mới mà họ không nói gì. Bạn sẽ?",
        "opts": [
          "Hỏi thẳng có thích không, hoặc chờ một lời khen",
          "Muốn hỏi nhưng nuốt lời — sợ trông như hay đòi hỏi",
          "Lo họ không thích mà không nói, hoặc bắt đầu kém thích mình",
          "Bận tâm nhưng họ trông mệt nên gác chuyện mình, chăm họ trước"
        ]
      },
      {
        "q": "Họ đặt lịch bạn bè vào cuối tuần bạn để trống. Bạn sẽ?",
        "opts": [
          "Sợ nói buồn trông hẹp hòi nên sửa câu mãi rồi chỉ bảo «Đi vui nhé~»",
          "Giả vờ ổn — sợ níu sẽ làm họ phiền hoặc bỏ đi",
          "Hiếm khi gặp bạn nên đổi lịch mình ngay để chiều họ",
          "Không nói gì — sợ mở miệng sẽ thành cãi nhau"
        ]
      },
      {
        "q": "Họ hỏi «Chuyến này bạn muốn đi đâu?» Bạn sẽ?",
        "opts": [
          "Chiều hướng họ có thể thích — sợ nói chỗ mình họ sẽ ghét",
          "Dò trước nơi họ muốn rồi trả lời theo đó",
          "Bảo «Anh/Em tiện sao cũng được» — sợ lệch ý sẽ va chạm",
          "Tính câu nào dễ được khen rồi chọn đáp án đó"
        ]
      },
      {
        "q": "Họ bảo «Hôm nay mệt, gọi ngắn thôi». Bạn sẽ?",
        "opts": [
          "Lo mình chán nên họ mệt, lần sau chuẩn bị chuyện vui hơn",
          "Buồn nhưng sợ nghe như làm nũng nên tự kiểm duyệt rồi nuốt lời",
          "Nói «Nghỉ đi» và gác chuyện mình để khỏi làm họ nặng",
          "Bảo «Ừ, ngủ ngon~» — sợ nói tiếc sẽ làm ngại"
        ]
      },
      {
        "q": "Họ nói về ý bạn: «Hình như hơi không ổn». Bạn sẽ?",
        "opts": [
          "Tưởng câu vừa rồi kỳ quá, tua lại trong đầu và hối",
          "Sợ bị nhìn xấu nên vội «À chắc mình nghĩ sai»",
          "Gác lại bằng «Cũng có thể» — sợ phản bác sẽ thành cãi",
          "Muốn được công nhận nhưng phản ứng lạnh khiến cả ngày bận lòng"
        ]
      },
      {
        "q": "Quà kỷ niệm không hợp gu nhưng họ nhìn đầy kỳ vọng. Bạn sẽ?",
        "opts": [
          "Giả thích quá mức — sợ lộ thất vọng sẽ tổn thương và đẩy họ xa",
          "Biết họ chọn kỹ nên ưu tiên cảm xúc họ và cảm ơn lớn",
          "Tính phản ứng nào làm họ hài lòng nhất rồi diễn theo",
          "Muốn nói thật nhưng sửa câu nhiều lần vì sợ lời làm tổn thương"
        ]
      },
      {
        "q": "Lần đầu dự buổi gặp bạn của họ. Bạn sẽ?",
        "opts": [
          "Đọc không khí và chăm họ đến mức mình chẳng vui nổi",
          "Cười xòa câu hỏi ngại và tránh chủ đề dễ va chạm",
          "Kiểm duyệt trước khi nói đến mức ít nói dần",
          "Căng thẳng — nếu nhóm này thấy mình dở, họ sẽ xa mình"
        ]
      },
      {
        "q": "Họ nói «Em/Anh lúc nào cũng như đang dò mình». Gần với lòng bạn nhất?",
        "opts": [
          "Mình chiều để khỏi cãi — hóa ra nhìn vậy",
          "Như bị bắt quả tang đang cố làm người tốt",
          "Sợ lộ bản thật họ sẽ đi nên cứ dò xét",
          "Muốn họ thoải mái nên cảm xúc mình luôn để sau"
        ]
      }
    ],
    "results": [
      {
        "title": "Người co lại trước vì sợ bị ghét, Kiểu sợ bị từ chối 🥀",
        "typeName": "Kiểu sợ bị từ chối",
        "realReason": "Sợ lộ bản thật rồi bị từ chối hoặc bị bỏ",
        "shortDescription": "Bạn không «quá nhạy». Bạn co lại trước vì sợ họ ghét con người thật của bạn.",
        "description": "Nói ý kiến hay lộ thất vọng đều như đang đánh cược tình yêu. Vì thế bạn soi phản ứng và chiều theo. Đọc vị thành tấm khiên — nhưng khiên ấy cũng khiến bản thật khó chạm tới họ.",
        "keywords": "Sợ bị ghét, Sợ bị xa lánh, Giấu bản thật, Chiều theo, Sợ bị bỏ",
        "strengths": "Quý quan hệ và tinh tế với cảm xúc đối phương",
        "reasonDetail": "Khi mặt họ cứng lại, khi ý kiến lệch, khi cần lộ cảm xúc thật",
        "frequentSaying": "«Không phải vì mình mà anh/em ghét mình chứ?»",
        "changeTips": "Hôm nay chọn một sở thích nhỏ (món, phim) và nói thật\nKhi họ phản đối, chỉ viết sự thật: có bằng chứng họ ghét mình không?\nKhi lo dâng, nói thẳng «Giờ mình đang sợ bị ghét»\nNếu sợ bị ghét lặp lại mỗi lần yêu hoặc đè nặng đời sống, hãy cùng chuyên gia tư vấn tâm lý tìm gốc nỗi sợ một cách an toàn",
        "oneLiner": "Người còn ở lại sau khi thấy bản thật mới là duyên thật. Hãy thành thật từ chuyện nhỏ",
        "shareLine": "Tại sao yêu rồi lại cứ dò xét? Kết quả: Kiểu sợ bị từ chối 🥀 Co lại vì sợ lộ bản thật bị ghét... đúng bạn quá lol thử đi — bạn ra gì?"
      },
      {
        "title": "Người để tâm trạng họ trước mình, Kiểu chiều chuộng quá mức 🌷",
        "typeName": "Kiểu chiều chuộng quá mức",
        "realReason": "Muốn họ thoải mái đến mức cảm xúc mình luôn bị đẩy lùi",
        "shortDescription": "Bạn không đang «đọc vị». Bạn muốn họ thoải mái đến mức đẩy mình ra sau.",
        "description": "Họ mệt thì bạn gác chuyện mình; dò họ muốn gì rồi chiều trước. Trông dịu dàng chín chắn — nhưng chiều chuộng chất chồng dễ thành chỉ mình chịu. Điều bạn muốn, họ có thể chẳng biết.",
        "keywords": "Họ trước, Cảm xúc mình sau, Chiều tâm trạng, Chăm sóc, Tự gánh",
        "strengths": "Ấm áp, nhanh nhận ra nhu cầu, giữ quan hệ dễ chịu",
        "reasonDetail": "Khi họ mệt, khi cần chọn, khi đến lượt họ vui",
        "frequentSaying": "«Mình ổn, anh/em tiện sao cũng được»",
        "changeTips": "Trước khi nhớ đáp án của họ, viết một dòng điều mình muốn\nMỗi ngày tập nói một lần «Mình cũng thích cái này»\nNhắc mình: đã chiều thì mình cũng được quyền nhận lại",
        "oneLiner": "Sự chiều chuộng của bạn quý giá. Chiều mà không xóa mình mới bền",
        "shareLine": "Tại sao yêu rồi lại cứ dò xét? Kết quả: Kiểu chiều chuộng quá mức 🌷 Tâm trạng họ trước mình nên mệt... đúng bạn. Gửi kết quả cho mình"
      },
      {
        "title": "Người nuốt lời vì hòa bình, Kiểu tránh xung đột 🕊️",
        "typeName": "Kiểu tránh xung đột",
        "realReason": "Sợ va chạm sẽ thành cãi nhau nên gác trước",
        "shortDescription": "Bạn không đang «đọc vị». Bạn đang giữ không khí trước khi xung đột kịp nảy.",
        "description": "Sắp lệch ý thì «gì cũng được»; buồn thì «không sao». Hòa khí giữ được, nhưng cảm xúc chưa giải không biến mất — nó chất chồng. Đọc vị chặn cãi, cũng có thể chặn cơ hội hiểu nhau.",
        "keywords": "Giữ không khí, Gì cũng được, Không sao, Tránh va chạm, Cảm xúc chất chồng",
        "strengths": "Tạo không khí yên và làm đối phương thoải mái",
        "reasonDetail": "Khi ý kiến sắp lệch, khi buồn dâng, khi không khí ngại",
        "frequentSaying": "«Thôi được rồi, bỏ qua đi»",
        "changeTips": "Khi buồn, mở đầu bằng «Không phải muốn cãi — chỉ muốn cho anh/em biết»\nChỉ nói hai câu: sự thật + cảm xúc. Ví dụ: «Đổi lịch nên mình hơi buồn»\nTập nói khác biệt nhỏ để thấy nói ra quan hệ vẫn không vỡ",
        "oneLiner": "Nói không phải là cãi. Càng nói nhỏ và thường xuyên, càng ít cãi lớn",
        "shareLine": "Tại sao yêu rồi lại cứ dò xét? Kết quả: Kiểu tránh xung đột 🕊️ Sợ cãi nên nuốt lời trước... dân «gì cũng được» đúng bạn lol thử đi"
      },
      {
        "title": "Người muốn được nhìn nhận là tốt, Kiểu khát công nhận ⭐",
        "typeName": "Kiểu khát công nhận",
        "realReason": "Phải được công nhận và làm họ hài lòng mới yên",
        "shortDescription": "Bạn không đang «đọc vị». Bạn đang tìm trên mặt họ tín hiệu «mình đang làm tốt».",
        "description": "Bạn liên tục kiểm: lựa chọn có vừa lòng không, mình có vui không, phản ứng có đáng khen không. Phản ứng lạnh khiến cả ngày bận lòng, lần sau cố hơn. Sự công nhận của họ trở thành điểm số của bạn.",
        "keywords": "Chờ lời khen, Thể hiện tốt, Làm vừa lòng, Kiểm phản ứng, Chấm điểm",
        "strengths": "Nỗ lực và tinh tế làm họ vui, chân thành với quan hệ",
        "reasonDetail": "Khi lựa chọn bị đánh giá, khi phản ứng lạnh hơn thường",
        "frequentSaying": "«Mình ổn chứ? Thế nào?»",
        "changeTips": "Dù không được khen, tự khen mình ba việc hôm nay đã làm\nKhi muốn kiểm phản ứng, hỏi: mình cần lời khen hay cần yên tâm?\nMỗi tuần một hoạt động vui một mình, không phụ thuộc họ hài lòng",
        "oneLiner": "Muốn được công nhận là tự nhiên. Nhận một phần từ chính mình thì radar sẽ nhẹ hơn nhiều",
        "shareLine": "Tại sao yêu rồi lại cứ dò xét? Kết quả: Kiểu khát công nhận ⭐ Tìm tín hiệu «làm tốt» trên mặt họ... đúng bạn lol Bạn thuộc kiểu nào?"
      },
      {
        "title": "Người tự kiểm duyệt trước khi nói, Kiểu tự kiểm duyệt ✂️",
        "typeName": "Kiểu tự kiểm duyệt",
        "realReason": "Họ chưa phản ứng, bạn đã tự lọc lời mình trước",
        "shortDescription": "Bạn không đang «đọc vị». Bạn tưởng tượng phản ứng chưa tới rồi tự sửa câu.",
        "description": "«Nói vậy có kỳ không?», «Có giống làm nũng không?» — sửa câu vô số lần trước khi nói. Nói xong lại tua lại và hối. Họ chẳng sao — chỉ bạn tốn năng lượng đến kiệt.",
        "keywords": "Sửa câu, Nuốt lời, Tua lại, Phản ứng tưởng tượng, Tự kiệt sức",
        "strengths": "Thận trọng, không nói nhẹ dạ, chọn cách diễn đạt vì đối phương",
        "reasonDetail": "Ngay trước khi nói, ngay sau khi nói, khi cần nói buồn hoặc nhờ vả",
        "frequentSaying": "«Nói vậy được không?»",
        "changeTips": "Giới hạn sửa câu còn «một lần» rồi nói luôn\nKhi tua lại sau khi nói, chỉ nhớ phản ứng thật của họ như sự thật\nCố tình ném một câu nhẹ không sửa và thấy chẳng có gì xảy ra",
        "oneLiner": "Không cần câu hoàn hảo. Một câu hơi vụng nhưng thật lòng thường gần hơn",
        "shareLine": "Tại sao yêu rồi lại cứ dò xét? Kết quả: Kiểu tự kiểm duyệt ✂️ Lọc câu trước khi nói... đúng bạn. Thử rồi báo mình nhé"
      }
    ]
  },
  "id": {
    "meta": {
      "title": "Kenapa Pacaran Selalu Baca Situasi Berlebihan?",
      "description": "Begitu pacaran, kenapa selalu cek mood mereka dulu? Lewat 10 situasi, temukan alasan sejati kenapa kamu terus baca situasi — dan cara merasa lebih lega.",
      "tags": [
        "Baca Situasi Pacaran",
        "Psikologi Pacaran",
        "Tipe Pacaran"
      ]
    },
    "questions": [
      {
        "q": "Mereka bertanya, «Hari ini mau makan apa?» Kamu…",
        "opts": [
          "Ingat yang mereka bilang mau makan kemarin, lalu usulkan itu",
          "Bilang «apa aja boleh» — takut beda pendapat bikin awkward",
          "Lihat wajah mereka dulu, apakah menu pilihanmu disukai",
          "Tulis ulang jawaban di kepala berkali-kali, takut kedengarannya aneh"
        ]
      },
      {
        "q": "Mereka datang dengan wajah lebih tegang dari biasanya. Kamu…",
        "opts": [
          "Cerahkan topik supaya suasana tak merosot",
          "Khawatir kamu salah, jadi berusaha lebih dari biasanya",
          "Ingin bertanya, tapi memilih kata sampai momennya lewat",
          "Cemas — kalau karena kamu, mereka bisa jadi tidak suka padamu"
        ]
      },
      {
        "q": "Gaya rambut baru, mereka lewat tanpa komentar. Kamu…",
        "opts": [
          "Akhirnya bertanya suka atau tidak, atau menunggu pujian",
          "Ingin bertanya tapi ditelan — takut kelihatan rewel",
          "Khawatir mereka tak suka tapi tak bilang — atau mulai kurang suka padamu",
          "Peduli, tapi mereka kelihatan lelah, jadi cerita sendiri disimpan dan rawat mereka dulu"
        ]
      },
      {
        "q": "Mereka isi weekend yang kamu kosongkan dengan janji teman. Kamu…",
        "opts": [
          "Draft «aku tersinggung» lama, lalu cuma bilang «Selamat main~» — takut kelihatan kecil hati",
          "Pura-pura oke — takut menahan mereka bikin sebal atau pergi",
          "Langsung ubah jadwalmu agar cocok, karena jarang ketemu teman",
          "Diam saja — takut dibahas jadi ribut"
        ]
      },
      {
        "q": "Mereka bertanya, «Liburan ini kamu mau ke mana?» Kamu…",
        "opts": [
          "Sesuaikan yang mungkin mereka suka — takut pilihanmu dibenci",
          "Cari dulu mau mereka ke mana, lalu jawab ke situ",
          "Bilang «sesuai kamu aja» — takut beda pendapat bentrok",
          "Hitung jawaban mana yang paling menyenangkan, pilih yang pantas dipuji"
        ]
      },
      {
        "q": "Mereka bilang, «Hari ini capek — telepon singkat aja.» Kamu…",
        "opts": [
          "Khawatir kamu membosankan, jadi siapkan topik lebih seru lain kali",
          "Tersinggung tapi ditelan — takut kedengarannya ngambek",
          "Bilang «istirahat ya» dan simpan ceritamu supaya tak membebani",
          "Bilang «oke, good night~» — takut bilang kecewa bikin awkward"
        ]
      },
      {
        "q": "Mereka bilang soal ide kamu, «Kayaknya kurang pas.» Kamu…",
        "opts": [
          "Putar ulang ucapanmu di kepala dan menyesal — aneh banget ya?",
          "Panik dianggap jelek, cepat bilang «ah mungkin aku salah pikir»",
          "Mundur dengan «iya, bisa juga» — takut membantah jadi ribut",
          "Ingin diakui, jadi reaksi dingin nempel seharian"
        ]
      },
      {
        "q": "Hadiah anniversary kurang suka, tapi mereka menatap penuh harapan. Kamu…",
        "opts": [
          "Berlebihan pura-pura suka — takut wajah kecewa menyakiti dan menjauhkan mereka",
          "Utamakan perasaan mereka dan berterima kasih besar — mereka memilih hati-hati",
          "Hitung reaksi mana yang paling menyenangkan, lalu kasih respons yang pantas dipuji",
          "Ingin jujur tapi terus rewrite kalimat, takut kata-kata melukai"
        ]
      },
      {
        "q": "Pertama kali ikut kumpulan teman mereka. Kamu…",
        "opts": [
          "Baca suasana dan rawat mereka sampai kamu sendiri tak menikmati",
          "Tertawa lewat pertanyaan canggung dan hindari topik yang bisa bentrok",
          "Sensor setiap cerita sebelum bicara sampai makin pendiam",
          "Tegang — kalau teman-teman tak suka, mereka bisa menjauh"
        ]
      },
      {
        "q": "Mereka bilang, «Kamu kayaknya selalu baca aku.» Mana yang paling dekat isi hatimu?",
        "opts": [
          "Aku menyesuaikan biar nggak ribut — jadi kelihatannya begitu",
          "Seperti ketahuan berusaha keras jadi orang baik",
          "Aku terus baca situasi karena takut versi asliku bikin mereka pergi",
          "Aku ingin mereka nyaman, jadi perasaanku selalu nomor dua"
        ]
      }
    ],
    "results": [
      {
        "title": "Orang yang mengerut duluan karena takut dibenci, Tipe Takut Ditolak 🥀",
        "typeName": "Tipe Takut Ditolak",
        "realReason": "Takut menunjukkan diri asli lalu ditolak atau ditinggal",
        "shortDescription": "Kamu bukan «terlalu sensitif.» Kamu mengerut duluan karena takut mereka membenci diri aslimu.",
        "description": "Menyuarakan pendapat atau menunjukkan kecewa bisa terasa seperti mempertaruhkan cinta. Jadi kamu scan reaksi mereka dan bergerak ke arah menyesuaikan. Baca situasi jadi perisai — tapi perisai itu juga membuat diri asli sulit sampai ke mereka.",
        "keywords": "Takut dibenci, Takut dijauhi, Menyembunyikan diri asli, Menyesuaikan, Takut ditinggalkan",
        "strengths": "Menghargai hubungan dan cermat menjaga perasaan mereka",
        "reasonDetail": "Saat wajah mereka mengeras, saat pendapat berbeda, saat harus menunjukkan emosi asli",
        "frequentSaying": "«Kamu nggak benci aku karena aku kan?»",
        "changeTips": "Hari ini pilih satu preferensi kecil (menu, film) dan bilang jujur\nSaat mereka beda pendapat, tulis fakta saja — adakah bukti nyata mereka membencimu?\nSaat cemas naik, bilang apa adanya: «Sekarang aku takut kamu nggak suka aku»\nKalau takut dibenci berulang di tiap hubungan atau menekan hidup sehari-hari, jelajahi akarnya dengan aman bersama profesional konseling",
        "oneLiner": "Yang tetap tinggal setelah melihat diri aslimu adalah yang sejati. Mulai jujur dari hal kecil",
        "shareLine": "Kenapa pacaran selalu baca situasi berlebihan? Hasil: Tipe Takut Ditolak 🥀 Aku mengerut karena takut diri asli dibenci... ini banget kamu wkwk cobain — dapat apa?"
      },
      {
        "title": "Orang yang menaruh mood mereka di atas milikmu, Tipe Terlalu Peduli 🌷",
        "typeName": "Tipe Terlalu Peduli",
        "realReason": "Ingin mereka nyaman lebih dulu — jadi perasaanmu terus terdorong ke belakang",
        "shortDescription": "Kamu bukan sedang «baca situasi.» Kamu ingin mereka nyaman sampai menaruh diri di belakang.",
        "description": "Kalau mereka kelihatan lelah, ceritamu disimpan. Kamu cari dulu yang mereka mau lalu menyesuaikan. Terlihat hangat dan dewasa — tapi kepedulian yang menumpuk mudah jadi hanya kamu yang menahan. Yang kamu mau, mereka mungkin tak tahu.",
        "keywords": "Mereka dulu, Perasaanmu belakangan, Menyesuaikan mood, Merawat, Menanggung sendiri",
        "strengths": "Hangat, cepat menangkap kebutuhan, membuat hubungan terasa nyaman",
        "reasonDetail": "Saat mereka kelihatan lelah, saat harus memilih, saat giliran mereka bahagia",
        "frequentSaying": "«Aku gapapa, sesuai kamu aja»",
        "changeTips": "Sebelum mengingat jawaban mereka, tulis satu baris yang kamu mau\nLatih bilang «Aku juga suka ini» sekali sehari\nIngatkan diri: sudah peduli, kamu juga boleh menerima",
        "oneLiner": "Kepedulianmu berharga. Peduli yang tidak menghapus dirimu yang bertahan lama",
        "shareLine": "Kenapa pacaran selalu baca situasi berlebihan? Hasil: Tipe Terlalu Peduli 🌷 Mood mereka di atas milikku jadi aku lelah... ini banget kamu. Kirim hasilmu"
      },
      {
        "title": "Orang yang menelan kata demi damai, Tipe Hindari Konflik 🕊️",
        "typeName": "Tipe Hindari Konflik",
        "realReason": "Kamu mundur duluan karena bentrok terasa akan jadi ribut",
        "shortDescription": "Kamu bukan sedang «baca situasi.» Kamu bergerak menjaga suasana sebelum konflik sempat lahir.",
        "description": "Kalau pendapat bisa pecah, kamu bilang «apa aja boleh.» Kalau tersinggung, kamu lewat dengan «gapapa.» Damai terjaga — tapi perasaan yang tak selesai tidak hilang; ia menumpuk. Baca situasi bisa menahan ribut dan sekaligus menutup kesempatan saling kenal.",
        "keywords": "Jaga suasana, Apa aja boleh, Gapapa, Hindari bentrok, Perasaan menumpuk",
        "strengths": "Menciptakan ketenangan dan membuat pasangan merasa nyaman",
        "reasonDetail": "Saat pendapat bisa pecah, saat tersinggung naik, saat suasana jadi canggung",
        "frequentSaying": "«Nggak apa, lewatin aja»",
        "changeTips": "Saat tersinggung, mulai dengan «Aku nggak mau ribut — cuma mau kasih tahu»\nCoba dua kalimat saja: fakta + perasaan. Contoh: «Jadwal berubah, aku agak tersinggung»\nLatih perbedaan kecil supaya belajar bicara tidak merusak hubungan",
        "oneLiner": "Bicara bukan ribut. Makin sering bicara kecil, makin sedikit ribut besar",
        "shareLine": "Kenapa pacaran selalu baca situasi berlebihan? Hasil: Tipe Hindari Konflik 🕊️ Aku telan kata duluan biar nggak ribut... orang «apa aja boleh» ini banget kamu wkwk cobain"
      },
      {
        "title": "Orang yang ingin terlihat baik, Tipe Butuh Pengakuan ⭐",
        "typeName": "Tipe Butuh Pengakuan",
        "realReason": "Baru tenang kalau diakui dan berhasil menyenangkan mereka",
        "shortDescription": "Kamu bukan sedang «baca situasi.» Kamu mencari di wajah mereka sinyal «kamu sudah bagus.»",
        "description": "Kamu terus cek apakah pilihanmu mereka suka, apakah kamu menyenangkan, apakah reaksiimu pantas dipuji. Reaksi dingin nempel seharian, dan lain kali kamu berusaha lebih keras. Pengakuan mereka mulai terasa seperti skor milikmu.",
        "keywords": "Menunggu pujian, Tampil baik, Menyenangkan mereka, Cek reaksi, Menilai skor",
        "strengths": "Usaha dan sense membuat mereka senang, serta tulus menjaga hubungan",
        "reasonDetail": "Saat pilihanmu dinilai, saat reaksi mereka lebih dingin dari biasanya",
        "frequentSaying": "«Aku oke nggak tadi? Gimana?»",
        "changeTips": "Tanpa pujian pun, puji diri dulu dengan tiga hal yang kamu lakukan hari ini\nSaat ingin cek reaksi, tanya: aku butuh pujian — atau ketenangan?\nSetiap minggu buat satu aktivitas yang menyenangkanmu sendiri, dengan atau tanpa persetujuan mereka",
        "oneLiner": "Ingin diakui itu alami. Ambil sebagian pengakuan dari diri sendiri, radar jadi jauh lebih ringan",
        "shareLine": "Kenapa pacaran selalu baca situasi berlebihan? Hasil: Tipe Butuh Pengakuan ⭐ Aku cari sinyal «sudah bagus» di wajah mereka... ini banget kamu wkwk Tipe kamu apa?"
      },
      {
        "title": "Orang yang menyensor diri sebelum bicara, Tipe Sensor Diri ✂️",
        "typeName": "Tipe Sensor Diri",
        "realReason": "Sebelum reaksi mereka datang, kamu sudah menyaring kata-katamu sendiri",
        "shortDescription": "Kamu bukan sedang «baca situasi.» Kamu membayangkan reaksi yang belum ada lalu menulis ulang kalimat.",
        "description": "«Ini kedengarannya aneh?» «Kayak ngambek nggak ya?» — kamu poles kalimat berkali-kali sebelum bicara. Setelahnya kamu putar ulang dan menyesal. Mereka baik-baik saja — hanya kamu yang menguras energi sampai lelah.",
        "keywords": "Rewrite kalimat, Menelan kata, Putar ulang, Reaksi imajiner, Lelah sendiri",
        "strengths": "Hati-hati dengan kata, tidak bicara sembarangan, dan memilih ungkapan dengan empati",
        "reasonDetail": "Tepat sebelum bicara, tepat sesudah bicara, saat harus sampaikan tersinggung atau permintaan",
        "frequentSaying": "«Boleh nggak ya bilang ini?»",
        "changeTips": "Batasi rewrite jadi sekali, lalu bilang apa adanya\nSaat putar ulang mulai setelah bicara, ingat hanya reaksi nyata mereka sebagai fakta\nSengaja lempar satu kalimat ringan tanpa polesan dan lihat tak ada yang buruk terjadi",
        "oneLiner": "Kalimat sempurna tak wajib. Satu kalimat agak kaku tapi tulus justru lebih dekat",
        "shareLine": "Kenapa pacaran selalu baca situasi berlebihan? Hasil: Tipe Sensor Diri ✂️ Aku saring kalimat sebelum bicara... ini banget kamu. Cobain terus kabarin"
      }
    ]
  }
};
