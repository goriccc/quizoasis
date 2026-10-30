/** 거절할 때 나의 말투 테스트 — 외국어 번역 (문항·선택지 순서는 phase3RefusalToneData RAW_QUESTIONS와 동일) */

export type Phase3RefusalToneForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3RefusalToneResultText {
  title: string;
  typeName: string;
  refusalTone: string;
  shortDescription: string;
  description: string;
  keywords: string;
  frequentSaying: string;
  partnerImpression: string;
  strengths: string;
  caution: string;
  emotionLabel: string;
  rewriteLine: string;
  changeTips: string;
  oneLiner: string;
  shareLine: string;
  counselingNote?: string;
}

export interface Phase3RefusalToneLocaleBundle {
  meta: { title: string; description: string; tags: [string, string, string] };
  questions: { q: string; opts: [string, string, string, string] }[];
  results: Phase3RefusalToneResultText[];
}

const EN: Phase3RefusalToneLocaleBundle = {
  "meta": {
    "title": "How You Say No — Your Refusal Style",
    "description": "The same \"no\" can sound totally different depending on how you say it. Twelve situations reveal whether you're a straight talker, a softie, an excuse-maker, or someone who just can't refuse.",
    "tags": [
      "refusal style",
      "dating talk",
      "relationship test"
    ]
  },
  "questions": [
    {
      "q": "Your partner suddenly says, \"Let's hang out tonight,\" but you want to rest. You…",
      "opts": [
        "\"I want to rest tonight—see you tomorrow\"",
        "\"I miss you, but I'm wiped today… sorry ㅠ\"",
        "\"Something suddenly came up—I don't think I can make it\"",
        "\"Okay, I'm tired but I'll come\""
      ]
    },
    {
      "q": "A friend asks to borrow a large amount of money. You…",
      "opts": [
        "\"I'd love to help, but money's tight for me right now—sorry\"",
        "\"I'm kind of mid–account cleanup and my cash is tied up…\"",
        "\"…Okay, how much do you need?\"",
        "\"I don't do money between friends—sorry\""
      ]
    },
    {
      "q": "A coworker asks for a favor right before you leave. You…",
      "opts": [
        "\"Oh, I have plans—I need to head out now\"",
        "\"Sure… I'll do it…\"",
        "\"I can't today. Let's look at it tomorrow morning\"",
        "\"I'd help if I could, but I've got something tonight\""
      ]
    },
    {
      "q": "Your partner wants you to join a friends meetup. You don't want to go. You…",
      "opts": [
        "Say \"Sure, let's go\"—and regret it inside",
        "\"I'm sitting this one out—have fun\"",
        "\"I like seeing your friends, but I need a rest this time—sorry\"",
        "\"Something family-related might come up that day…\""
      ]
    },
    {
      "q": "Your partner asks for your phone password. It feels uncomfortable. You…",
      "opts": [
        "\"That makes me uncomfortable—I don't want to share my password\"",
        "Feel uneasy but hand it over without saying anything",
        "\"I can't remember it—I'll tell you later\"",
        "\"I get why it matters to you, but that's hard for me—sorry\""
      ]
    },
    {
      "q": "A friend invites you on a trip, but the dates don't work. You…",
      "opts": [
        "\"I'd love to go, but this schedule won't work—bummer\"",
        "\"I can't this time—next trip for sure\"",
        "You know you can't go, but you still say okay",
        "\"There might be a family thing then, so I can't confirm\""
      ]
    },
    {
      "q": "Your partner wants the whole weekend together. You want alone time. You…",
      "opts": [
        "\"Something suddenly came up I have to do this weekend\"",
        "\"I want to be with you, but I need one day alone—sorry\"",
        "\"Saturday alone, Sunday together\"",
        "Say \"Sure, whole weekend\" and swallow how you feel"
      ]
    },
    {
      "q": "A sales call pushes you to sign up for something. You…",
      "opts": [
        "Can't hang up, listen to the whole pitch, and end up signing",
        "Say \"I'm driving\" and hang up",
        "\"Sounds nice, but I can't sign up right now\"",
        "\"Not interested—thanks\" and hang up"
      ]
    },
    {
      "q": "A friend keeps digging into your love life. You don't want to talk. You…",
      "opts": [
        "\"I don't want to talk about that\"",
        "\"I would, but it's still messy—I'll tell you later\"",
        "You hate it, but you spill everything anyway",
        "\"My battery's dying—gotta go\" and dodge the topic"
      ]
    },
    {
      "q": "Your partner bought a gift that isn't your taste. You want to exchange it. You…",
      "opts": [
        "\"Thank you—could we swap sizes? It's a little off\"",
        "\"It's not really my style—I'd like to exchange it. Thank you though\"",
        "\"I might lose this, so I'll just put it away for now\"",
        "Pretend you love it and keep using it"
      ]
    },
    {
      "q": "Your partner asks, \"Can you pick me up after overtime tomorrow?\" You're exhausted. You…",
      "opts": [
        "\"My car might have issues tomorrow—not sure I can\"",
        "Say \"Okay, I'll come\" and drag your tired body there",
        "\"I want to pick you up, but I don't have the energy tomorrow—sorry\"",
        "\"I can't tomorrow—what about a taxi?\""
      ]
    },
    {
      "q": "Which sentence feels closest to how you refuse?",
      "opts": [
        "\"I say yes first so they won't feel hurt\"",
        "\"It's easier to invent a reason than to say no directly\"",
        "\"A short, clear no is better for both of us\"",
        "\"I try to refuse softly, with apology in my voice\""
      ]
    }
  ],
  "results": [
    {
      "title": "The one who keeps it short and clear — Pumpkin Straight-Talker",
      "typeName": "Pumpkin Straight-Talker",
      "refusalTone": "A clear type who gives a short reason and says \"no\" without fog",
      "shortDescription": "You don't drag out a refusal—you draw the line in one sentence.",
      "description": "You leave little room for false hope, so misunderstandings stay low and you protect your time. The flip side: a short, cool tone can feel like your heart said no too.",
      "keywords": "clear·short reason·drawing a line·protecting time",
      "frequentSaying": "\"I can't today\", \"I'm not going\"",
      "partnerImpression": "Easy to read—but sometimes feels a bit cold",
      "strengths": "Honesty that prevents false hope, plus solid self-protection",
      "caution": "Short words can land as emotional rejection",
      "emotionLabel": "I want to protect my time right now",
      "rewriteLine": "I want to rest tonight. Let's do tomorrow instead—I still want to see you",
      "changeTips": "Add one warm line before the no—\"thanks\" or \"I hear you\"\nAfter refusing, offer one alternative so it doesn't feel like a rejection of them\nIf your tone gets sharp, soften to \"I can't right now\"",
      "oneLiner": "A clear no protects both of you. Add one line that it's not about your feelings for them.",
      "shareLine": "How I say no: Pumpkin Straight-Talker 🎃 Short and clear, boom—line drawn lol. How do YOU refuse? Send me yours"
    },
    {
      "title": "The one who softens the edges — Soft Roundabout Type",
      "typeName": "Soft Roundabout Type",
      "refusalTone": "A caring type who wraps the real reason in apology and warmth",
      "shortDescription": "Even while saying no, you check first that the other person won't get hurt.",
      "description": "People feel respected, so relationships stay smooth. But circling too much can blur the no—and they may ask again or get the wrong idea.",
      "keywords": "care·apology·soft wording·explaining the real reason",
      "frequentSaying": "\"I'd love to help, but I don't think I can—sorry\"",
      "partnerImpression": "Warm and thoughtful—but you sometimes have to double-check what they meant",
      "strengths": "Delicate care that keeps the relationship intact",
      "caution": "Softness can keep the refusal from landing clearly",
      "emotionLabel": "I'm careful right now because I don't want to disappoint them",
      "rewriteLine": "Sorry—I can't this time. Let's do it together next time for sure",
      "changeTips": "After the caring line, end clearly with \"I can't this time\"\nCut \"maybe\" and \"I might not be able to\"—say \"I can't this time\" once\nIf they ask again, repeat the same reason and hold the line",
      "oneLiner": "A soft no is a strength. One clear closing sentence keeps misunderstandings away.",
      "shareLine": "How I say no: Soft Roundabout Type 🌸 Soft, careful, kinda circling… How do YOU refuse? Send me yours"
    },
    {
      "title": "The one who invents a reason — Excuse-Making Avoider",
      "typeName": "Excuse-Making Avoider",
      "refusalTone": "You dodge a direct no by making up a situation or delaying the answer",
      "shortDescription": "Saying \"circumstances make it hard\" feels easier than saying \"I don't want to.\"",
      "description": "You skip the awkward direct refusal and shrink conflict in the moment. But stacked excuses shake trust—and the same bind keeps coming back.",
      "keywords": "excuses·delaying·dodging a firm answer·avoiding conflict",
      "frequentSaying": "\"Something suddenly came up\", \"I can't confirm yet\"",
      "partnerImpression": "Seems busy—but hard to know what's really going on",
      "strengths": "Peace-seeking and quick situational judgment",
      "caution": "Excuses that pile up can blur trust and sincerity",
      "emotionLabel": "Saying it directly scares me right now",
      "rewriteLine": "Honestly, I just want to rest today—sorry",
      "changeTips": "Trade the excuse for one real word—e.g. \"I'm tired\"\nIf you can't confirm, set a deadline: \"I'll tell you by tomorrow morning\"\nPractice telling the truth on small nos first",
      "oneLiner": "Excuses save the moment; honesty saves the relationship. One real word is the start.",
      "shareLine": "How I say no: Excuse-Making Avoider 🌀 Invent a reason and dodge lol… called out. How do YOU refuse? Send me yours"
    },
    {
      "title": "The one who can't refuse — Always-Yes Accepter",
      "typeName": "Always-Yes Accepter",
      "refusalTone": "Inside you don't want to—but you still end up saying \"okay\"",
      "shortDescription": "Afraid they'll be disappointed, you fold your own feelings instead of saying no.",
      "description": "You look reliable and kind—but swallowed nos stack up and can burst later as fatigue or resentment.",
      "keywords": "saying yes·enduring·reading the room·building fatigue",
      "frequentSaying": "\"Okay, I'll come\", \"It's fine, I'll do it\"",
      "partnerImpression": "The easy person who always adjusts",
      "strengths": "Devotion and care that puts the other person first",
      "caution": "Bottled-up feelings can lead to burnout or a sudden blow-up",
      "emotionLabel": "I'm scared they'll dislike me if I say I don't want to",
      "rewriteLine": "I can't today. But I can help with this instead",
      "changeTips": "Don't answer instantly—buy time with \"Let me think and get back to you\"\nPractice one small no and notice the relationship still holds\nAfter saying yes, name the fatigue the same day: \"That was actually hard\"",
      "oneLiner": "Care matters—and so do you. \"Let me think about it\" is the first step.",
      "shareLine": "How I say no: Always-Yes Accepter 🤲 I just… can't refuse… How do YOU refuse? Send me yours"
    }
  ]
};

const JA: Phase3RefusalToneLocaleBundle = {
  "meta": {
    "title": "断るときの私の話し方テスト",
    "description": "同じ「無理」でも話し方で印象は変わります。12の断り場面で、直球・遠回し・言い訳回避・引き受け型のうち自分の断り方を見つけます。",
    "tags": [
      "断り方",
      "恋愛トーク",
      "恋愛テスト"
    ]
  },
  "questions": [
    {
      "q": "恋人がいきなり「今日会おう」と言った。休みたい。あなたは？",
      "opts": [
        "「今日は休みたい、明日会おう」",
        "「会いたいけど今日は体が重くてごめん…」",
        "「あ、今日急に用事ができて行けなさそう」",
        "「わかった、疲れてるけど行くね」"
      ]
    },
    {
      "q": "友達が大きなお金を貸してほしいと言った。あなたは？",
      "opts": [
        "「助けたいけど今の余裕がなくて難しそう、ごめん」",
        "「今口座整理中でお金が動けなくて…」",
        "「…とりあえずわかった、いくら必要？」",
        "「お金の貸し借りはしないことにしてる、ごめん」"
      ]
    },
    {
      "q": "同僚が退勤直前に仕事を頼んできた。あなたは？",
      "opts": [
        "「あ、今日約束があるので今出なきゃいけなくて」",
        "「はい、やります…」",
        "「今日は難しいです。明日の午前に見ます」",
        "「手伝いたいのですが今日は予定があって難しそうです」"
      ]
    },
    {
      "q": "恋人が友達の集まりに一緒に行こうと言った。行きたくない。あなたは？",
      "opts": [
        "「うん、一緒に行こう」と言って心の中で後悔する",
        "「今回は行かない、楽しんできて」",
        "「友達に会うのはいいけど今回は休みたくてごめん」",
        "「その日急に家族の予定が入るかもで…」"
      ]
    },
    {
      "q": "恋人がスマホのパスワードを教えてほしいと言った。気が進まない。あなたは？",
      "opts": [
        "「それは困る、パスワードは教えたくない」",
        "嫌だけど黙って教える",
        "「パスワード忘れた、あとで教えるね」",
        "「気になるのはわかるけど、それは少し難しい、ごめん」"
      ]
    },
    {
      "q": "友達が旅行に誘ってきたが日程が合わない。あなたは？",
      "opts": [
        "「行きたいけど今回の日程は厳しそう、残念」",
        "「今回は無理、次は絶対行こう」",
        "行けないと思うのに断れず了解してしまう",
        "「その頃家族行事があるかもで確約できなさそう」"
      ]
    },
    {
      "q": "恋人が週末ずっと一緒にいようと言った。一人でいたい。あなたは？",
      "opts": [
        "「週末急にやらなきゃいけないことができた」",
        "「一緒にいたいけど一日は一人で休みたくてごめん」",
        "「土曜は一人で過ごして日曜に会おう」",
        "「うん、週末ずっと一緒にいよう」と気持ちを押し殺す"
      ]
    },
    {
      "q": "営業電話で商品加入を勧められた。あなたは？",
      "opts": [
        "断れず説明を最後まで聞いて加入してしまう",
        "「今運転中なので」と言って切る",
        "「良さそうですが今は加入が難しそうです」",
        "「興味ないです、ありがとうございます」と言って切る"
      ]
    },
    {
      "q": "友達が自分の恋愛をしつこく聞いてくる。話したくない。あなたは？",
      "opts": [
        "「それは話したくない」",
        "「話したいけどまだ整理できてなくて、また後で」",
        "嫌なのに結局全部話してしまう",
        "「電池切れそうだから切るね」と話題をそらす"
      ]
    },
    {
      "q": "恋人がくれたプレゼントが好みじゃない。交換したい。あなたは？",
      "opts": [
        "「ありがとう、サイズが少し合わなくて替えてもいい？」",
        "「好みじゃなくて替えたい、でもありがとう」",
        "「なくしそうだからとりあえずしまっておくね」",
        "何も言わず好きなフリをして使い続ける"
      ]
    },
    {
      "q": "恋人が「明日残業の日、迎えに来てくれる？」と言った。きつい。あなたは？",
      "opts": [
        "「明日車の調子が悪いかもで確約できなくて」",
        "「わかった、行くね」と疲れた体を引きずって行く",
        "「迎えに行きたいけど明日は体力がもたなくてごめん」",
        "「明日は無理、タクシーはどう？」"
      ]
    },
    {
      "q": "断るとき、いちばん近い文は？",
      "opts": [
        "「断ると傷つくかもと思ってとりあえず受けちゃう」",
        "「直接断るより事情があると言った方が楽」",
        "「無理なことは短くはっきり言った方がお互いのため」",
        "「ごめんねを込めてやさしく断ろうとする」"
      ]
    }
  ],
  "results": [
    {
      "title": "短くはっきり言う人、単カボチャ直球型",
      "typeName": "単カボチャ直球型",
      "refusalTone": "理由を短く添えて「無理」をはっきり言う明瞭タイプ",
      "shortDescription": "あなたは断りを引き延ばさず、一言で線を引く人です。",
      "description": "相手に余計な期待を持たせないので誤解が少なく、自分の時間も守れます。ただ短く冷たく聞こえて、心まで拒まれたと感じさせてしまうこともあります。",
      "keywords": "明瞭・短い理由・線引き・時間を守る",
      "frequentSaying": "「今日は無理」「私は行かない」",
      "partnerImpression": "はっきりしていて楽だけど、たまに冷たく感じる人",
      "strengths": "期待や誤解を生まない正直さと自己防衛力",
      "caution": "短い言葉が、心の拒絶に聞こえることがある",
      "emotionLabel": "今の私は、自分の時間を守りたいんだな",
      "rewriteLine": "今日は休みたい。代わりに明日会おう、会いたい気持ちはあるよ",
      "changeTips": "断る前に「ありがとう」や「気持ちはわかる」を一文足す\n断ったあとに代替案を一つ出して、相手そのものを拒んでいないと伝える\n口調が尖ったら「今は難しい」に柔らかく変える",
      "oneLiner": "はっきりした断りはお互いを守ります。心ではないよ、の一文を足してみて",
      "shareLine": "断るときの私の話し方：単カボチャ直球型 🎃 短くはっきり線引きするタイプらしい笑 あなたはどう断る？結果送って"
    },
    {
      "title": "やわらかく遠回しに言う人、遠回し婉曲型",
      "typeName": "遠回し婉曲型",
      "refusalTone": "ごめんねと惜しさを込めて、本当の理由をやさしく伝える配慮タイプ",
      "shortDescription": "あなたは断りながらも、相手の心が傷つかないかを先に見る人です。",
      "description": "相手は尊重されていると感じ、関係はなめらかに続きます。ただ遠回しすぎると断りがぼやけて、また頼まれたり誤解されたりします。",
      "keywords": "配慮・ごめんね・婉曲表現・本当の理由",
      "frequentSaying": "「助けたいけど難しそう、ごめん」",
      "partnerImpression": "温かくて配慮があるけど、本音をもう一度確認したくなる人",
      "strengths": "関係を壊さない繊細な配慮",
      "caution": "婉曲すぎて断りがはっきり届かないことがある",
      "emotionLabel": "今の私は、相手を悲しませるのが怖くて慎重なんだな",
      "rewriteLine": "ごめん、今回は無理。次は絶対一緒にやろう",
      "changeTips": "配慮のあとに「今回は無理」という結論を最後にはっきり言う\n「たぶん」「難しそう」を減らし、「今回はできない」を一度入れる\nまた頼まれたら同じ理由を繰り返して線を守る",
      "oneLiner": "やさしい断りは大きな強みです。結論の一文がはっきりしていれば誤解も減ります",
      "shareLine": "断るときの私の話し方：遠回し婉曲型 🌸 やさしく遠回しに断るタイプらしい… あなたはどう断る？結果送って"
    },
    {
      "title": "事情をつくって逃げる人、言い訳回避型",
      "typeName": "言い訳回避型",
      "refusalTone": "ない事情を作ったり答えを先延ばしして、直接の断りを避ける",
      "shortDescription": "あなたは「したくない」より「事情で難しい」と言う方が楽な人です。",
      "description": "直接断る気まずさを避け、その場の衝突を減らせます。ただ言い訳が続くと信頼が揺れ、同じ状況が何度も戻ってきます。",
      "keywords": "言い訳・先延ばし・確約回避・衝突回避",
      "frequentSaying": "「急に用事ができた」「確約はできなさそう」",
      "partnerImpression": "忙しそうだけど、本音が読めない人",
      "strengths": "衝突を避けたい平和志向と状況判断力",
      "caution": "言い訳が積もると信頼と真心がぼやける",
      "emotionLabel": "今の私は、直接言うのが怖いんだな",
      "rewriteLine": "実は今日はちょっと休みたくてごめん",
      "changeTips": "言い訳の代わりに本当の理由を一言でも言う。例：「疲れてる」\n確約が難しいときは「明日の午前までに連絡する」と期限を決める\n小さな断りから事実どおり言う練習をする",
      "oneLiner": "言い訳はその場を救いますが、本音は関係を救います。本当の理由の一言から",
      "shareLine": "断るときの私の話し方：言い訳回避型 🌀 事情を作って逃げるタイプらしい笑 刺さる… あなたはどう断る？結果送って"
    },
    {
      "title": "断れず引き受けてしまう人、引き受け型",
      "typeName": "引き受け型",
      "refusalTone": "心では嫌でも結局「わかった」で受け入れる",
      "shortDescription": "あなたは相手ががっかりするのを恐れて、断る代わりに自分の気持ちを折る人です。",
      "description": "頼もしく良い人に見えますが、断れなかった感情は積もり、いつか疲れや寂しさとして噴き出すことがあります。",
      "keywords": "引き受け・我慢・空気読み・積もる疲れ",
      "frequentSaying": "「わかった、行くね」「大丈夫、やるよ」",
      "partnerImpression": "いつも合わせてくれる楽な人",
      "strengths": "相手を先に考える献身と配慮",
      "caution": "抑え込んだ感情がバーンアウトや突然の爆発につながることも",
      "emotionLabel": "今の私は、嫌だと言うと嫌われそうで怖いんだな",
      "rewriteLine": "今日は無理。代わりにこれは手伝うね",
      "changeTips": "すぐ答えず「ちょっと考えてから連絡するね」と時間を稼ぐ\n小さな頼みから一度ずつ断ってみて、関係が大丈夫だと確かめる\n引き受けたあとの疲れをその日のうちに「実はちょっときつかった」と伝える",
      "oneLiner": "配慮は大切ですが、自分の心も大切です。「ちょっと考えるね」が第一歩です",
      "shareLine": "断るときの私の話し方：引き受け型 🤲 断れず受けちゃうタイプらしい… あなたはどう断る？結果送って"
    }
  ]
};

const ZH_CN: Phase3RefusalToneLocaleBundle = {
  "meta": {
    "title": "拒绝时的我的语气测试",
    "description": "同样一句「不行」，语气却各不相同。通过12个拒绝场景，找出你是直说、绕弯、编理由，还是很难说不。",
    "tags": [
      "拒绝语气",
      "恋爱说话",
      "恋爱测试"
    ]
  },
  "questions": [
    {
      "q": "对象突然说「今天见一面吧」，但你想休息。你会？",
      "opts": [
        "「今天想休息，明天见」",
        "「想见你，但今天身体有点沉，抱歉ㅠ」",
        "「啊今天突然有事，好像去不了」",
        "「好，虽然累但我去」"
      ]
    },
    {
      "q": "朋友要借一大笔钱。你会？",
      "opts": [
        "「想帮你，但我手头紧，恐怕不行，抱歉」",
        "「我在整理账户，钱暂时动不了…」",
        "「…好吧，你需要多少？」",
        "「我约定了不做金钱往来，抱歉」"
      ]
    },
    {
      "q": "同事临下班拜托你做事。你会？",
      "opts": [
        "「啊我今天有约，现在得走了」",
        "「好的，我来做…」",
        "「今天不行，明天上午再看」",
        "「想帮忙，但今天有安排，恐怕难」"
      ]
    },
    {
      "q": "对象约你去朋友局，你不想去。你会？",
      "opts": [
        "说「好，一起去」然后心里后悔",
        "「这次我不去了，你们玩开心」",
        "「见你朋友挺好，但这回想休息，抱歉」",
        "「那天可能突然有家庭安排…」"
      ]
    },
    {
      "q": "对象要你的手机密码，你觉得不舒服。你会？",
      "opts": [
        "「这让我不舒服，不想告诉密码」",
        "不舒服但默默告诉对方",
        "「密码想不起来了，以后再说」",
        "「懂你在意，但这对我有点难，抱歉」"
      ]
    },
    {
      "q": "朋友约旅行，但档期对不上。你会？",
      "opts": [
        "「想一起去，但这趟日程好像不行，可惜」",
        "「这次去不了，下次一定」",
        "明知去不了却还是答应",
        "「那时候可能有家族活动，没法确定」"
      ]
    },
    {
      "q": "对象想周末一直腻在一起，你想独处。你会？",
      "opts": [
        "「周末突然有事要做」",
        "「想待一起，但想有一天自己休息，抱歉」",
        "「周六自己过，周日见面」",
        "说「好啊整周末都在一起」然后压下心情"
      ]
    },
    {
      "q": "推销电话要你办业务。你会？",
      "opts": [
        "拒不了，听完整介绍后办了",
        "说「我在开车」然后挂断",
        "「听起来不错，但现在不太方便办」",
        "「没兴趣，谢谢」然后挂断"
      ]
    },
    {
      "q": "朋友一直追问你的恋爱，你不想说。你会？",
      "opts": [
        "「这个不想聊」",
        "「想说但还没理清，以后再讲」",
        "不想说最后还是全倒出来",
        "「电池快没了，先挂了」岔开话题"
      ]
    },
    {
      "q": "对象送的礼物不合口味，想换。你会？",
      "opts": [
        "「谢谢，尺寸有点不合，可以换吗？」",
        "「不太合我的风格，想换一下，但谢谢你」",
        "「怕弄丢，先收着」",
        "什么都不说，装喜欢继续用"
      ]
    },
    {
      "q": "对象说「明天加班，能来接我吗？」你很累。你会？",
      "opts": [
        "「明天车可能有问题，不确定」",
        "说「好，我去」拖着累坏的身体去",
        "「想接你，但明天体力不行，抱歉」",
        "「明天不行，打车怎么样？」"
      ]
    },
    {
      "q": "现在哪句最接近你拒绝时的样子？",
      "opts": [
        "「怕对方受伤，就先答应」",
        "「编个理由比直接拒绝舒服」",
        "「不行的事短而清楚地说，对彼此更好」",
        "「带着抱歉，尽量温柔地拒绝」"
      ]
    }
  ],
  "results": [
    {
      "title": "说得又短又清楚的人，南瓜直球型",
      "typeName": "南瓜直球型",
      "refusalTone": "简短给理由、把「不行」说清楚的明朗型",
      "shortDescription": "你不会把拒绝拖很长，而是一句话就把线划清。",
      "description": "不给对方留误会的期待，也守住了自己的时间。只是语气短而冷时，对方可能觉得连心也被拒了。",
      "keywords": "清楚·短理由·划线·守时间",
      "frequentSaying": "「今天不行」「我不去」",
      "partnerImpression": "清楚好懂，但偶尔觉得有点冷",
      "strengths": "不制造虚假期待的坦诚，以及自我保护",
      "caution": "短句有时听起来像情感上的拒绝",
      "emotionLabel": "我现在是想守住自己的时间",
      "rewriteLine": "今天想休息。改成明天见吧，我还是想见你的",
      "changeTips": "拒绝前加一句「谢谢」或「我懂你的意思」\n拒绝后再给一个替代方案，表明不是拒绝这个人\n语气变尖时，改成「现在有点难」",
      "oneLiner": "清楚的拒绝保护彼此。再加一句「不是心的问题」就更好。",
      "shareLine": "拒绝时的我的语气：南瓜直球型 🎃 据说又短又清楚直接划线哈哈 你怎么拒绝？把结果发我"
    },
    {
      "title": "轻轻绕着说的人，委婉绕弯型",
      "typeName": "委婉绕弯型",
      "refusalTone": "带着抱歉和可惜、把真实理由轻轻说出来的体贴型",
      "shortDescription": "你一边拒绝，一边先留意对方会不会受伤。",
      "description": "对方感到被尊重，关系也更顺。但绕太久，拒绝会变糊，对方可能再提一次或产生误会。",
      "keywords": "体贴·抱歉·委婉·说清真实理由",
      "frequentSaying": "「想帮你，但恐怕不行，抱歉」",
      "partnerImpression": "温暖体贴，但有时得再确认一遍真意",
      "strengths": "不伤关系的细致体贴",
      "caution": "太委婉时，拒绝可能传不到位",
      "emotionLabel": "我现在是怕对方难过，所以小心翼翼",
      "rewriteLine": "抱歉，这次不行。下次一定一起",
      "changeTips": "体贴之后，用「这次不行」把结论说死\n少用「大概」「可能不行」，至少说一次「这次做不到」\n对方再提时，重复同一理由守住界线",
      "oneLiner": "温柔的拒绝是长处。结论那一句够清楚，误会就少。",
      "shareLine": "拒绝时的我的语气：委婉绕弯型 🌸 据说轻轻绕着拒绝… 你怎么拒绝？把结果发我"
    },
    {
      "title": "编出情况来躲开的人，借口回避型",
      "typeName": "借口回避型",
      "refusalTone": "靠编情况或拖延答复，避开直接拒绝",
      "shortDescription": "对你来说，说「情况不允许」比说「我不想」更轻松。",
      "description": "躲开直接拒绝的尴尬，当下冲突也少。但借口堆多了，信任会晃，同样的局还会再来。",
      "keywords": "借口·拖延·躲确定答复·避冲突",
      "frequentSaying": "「突然有事」「没法确定」",
      "partnerImpression": "看起来很忙，但摸不准真心",
      "strengths": "想避开冲突的和平取向与临场判断",
      "caution": "借口堆积会让信任和真心变糊",
      "emotionLabel": "我现在是害怕直接说出口",
      "rewriteLine": "其实今天只是想休息一下，抱歉",
      "changeTips": "用一个真实词代替借口，比如「太累了」\n没法确定时，设期限：「明天上午前告诉你」\n从小拒绝开始练习照实说",
      "oneLiner": "借口救当场，真心救关系。一个真实词就是开始。",
      "shareLine": "拒绝时的我的语气：借口回避型 🌀 据说爱编情况躲开哈哈 被戳中… 你怎么拒绝？把结果发我"
    },
    {
      "title": "拒绝不了只好答应的人，照单全收型",
      "typeName": "照单全收型",
      "refusalTone": "心里不想，最后还是「好」地收下",
      "shortDescription": "你怕对方失望，于是用压下自己的心来代替拒绝。",
      "description": "看起来可靠又好说话，但吞下去的拒绝会堆积，某天可能以疲劳或委屈爆出来。",
      "keywords": "答应·忍耐·看眼色·堆积的疲劳",
      "frequentSaying": "「好，我去」「没事，我来」",
      "partnerImpression": "总是配合、很好说话的人",
      "strengths": "把对方放在前面的付出与体贴",
      "caution": "压抑的情绪可能变成燃尽或突然爆发",
      "emotionLabel": "我现在是怕说不想会被讨厌",
      "rewriteLine": "今天不行。但这件事我可以帮",
      "changeTips": "别马上答，先说「我想一下再回你」争取时间\n从小请求开始练习拒绝一次，确认关系还在\n答应后的疲劳当天说出来：「其实有点累」",
      "oneLiner": "体贴很珍贵，你的心也同样珍贵。「我想一下」就是第一步。",
      "shareLine": "拒绝时的我的语气：照单全收型 🤲 据说拒绝不了只好答应… 你怎么拒绝？把结果发我"
    }
  ]
};

const ZH_TW: Phase3RefusalToneLocaleBundle = {
  "meta": {
    "title": "拒絕時的我的語氣測驗",
    "description": "同樣一句「不行」，語氣卻各不相同。透過12個拒絕場景，找出你是直說、繞彎、編理由，還是很難說不。",
    "tags": [
      "拒絕語氣",
      "戀愛說話",
      "戀愛測驗"
    ]
  },
  "questions": [
    {
      "q": "對象突然說「今天見一面吧」，但你想休息。你會？",
      "opts": [
        "「今天想休息，明天見」",
        "「想見你，但今天身體有點沉，抱歉ㅠ」",
        "「啊今天突然有事，好像去不了」",
        "「好，雖然累但我去」"
      ]
    },
    {
      "q": "朋友要借一大筆錢。你會？",
      "opts": [
        "「想幫你，但我手頭緊，恐怕不行，抱歉」",
        "「我在整理帳戶，錢暫時動不了…」",
        "「…好吧，你需要多少？」",
        "「我約定了不做金錢往來，抱歉」"
      ]
    },
    {
      "q": "同事臨下班拜託你做事。你會？",
      "opts": [
        "「啊我今天有約，現在得走了」",
        "「好的，我來做…」",
        "「今天不行，明天上午再看」",
        "「想幫忙，但今天有安排，恐怕難」"
      ]
    },
    {
      "q": "對象約你去朋友局，你不想去。你會？",
      "opts": [
        "說「好，一起去」然後心裡後悔",
        "「這次我不去了，你們玩開心」",
        "「見你朋友挺好，但這回想休息，抱歉」",
        "「那天可能突然有家庭安排…」"
      ]
    },
    {
      "q": "對象要你的手機密碼，你覺得不舒服。你會？",
      "opts": [
        "「這讓我不舒服，不想告訴密碼」",
        "不舒服但默默告訴對方",
        "「密碼想不起來了，以後再說」",
        "「懂你在意，但這對我有點難，抱歉」"
      ]
    },
    {
      "q": "朋友約旅行，但檔期對不上。你會？",
      "opts": [
        "「想一起去，但這趟日程好像不行，可惜」",
        "「這次去不了，下次一定」",
        "明知去不了卻還是答應",
        "「那時候可能有家族活動，沒法確定」"
      ]
    },
    {
      "q": "對象想週末一直膩在一起，你想獨處。你會？",
      "opts": [
        "「週末突然有事要做」",
        "「想待一起，但想有一天自己休息，抱歉」",
        "「週六自己過，週日見面」",
        "說「好啊整週末都在一起」然後壓下心情"
      ]
    },
    {
      "q": "推銷電話要你辦業務。你會？",
      "opts": [
        "拒不了，聽完整介紹後辦了",
        "說「我在開車」然後掛斷",
        "「聽起來不錯，但現在不太方便辦」",
        "「沒興趣，謝謝」然後掛斷"
      ]
    },
    {
      "q": "朋友一直追問你的戀愛，你不想說。你會？",
      "opts": [
        "「這個不想聊」",
        "「想說但還沒理清，以後再講」",
        "不想說最後還是全倒出來",
        "「電池快沒了，先掛了」岔開話題"
      ]
    },
    {
      "q": "對象送的禮物不合口味，想換。你會？",
      "opts": [
        "「謝謝，尺寸有點不合，可以換嗎？」",
        "「不太合我的風格，想換一下，但謝謝你」",
        "「怕弄丟，先收著」",
        "什麼都不說，裝喜歡繼續用"
      ]
    },
    {
      "q": "對象說「明天加班，能來接我嗎？」你很累。你會？",
      "opts": [
        "「明天車可能有問題，不確定」",
        "說「好，我去」拖著累壞的身體去",
        "「想接你，但明天體力不行，抱歉」",
        "「明天不行，打車怎麼樣？」"
      ]
    },
    {
      "q": "現在哪句最接近你拒絕時的樣子？",
      "opts": [
        "「怕對方受傷，就先答應」",
        "「編個理由比直接拒絕舒服」",
        "「不行的事短而清楚地說，對彼此更好」",
        "「帶著抱歉，盡量溫柔地拒絕」"
      ]
    }
  ],
  "results": [
    {
      "title": "說得又短又清楚的人，南瓜直球型",
      "typeName": "南瓜直球型",
      "refusalTone": "簡短給理由、把「不行」說清楚的明朗型",
      "shortDescription": "你不會把拒絕拖很長，而是一句話就把線劃清。",
      "description": "不給對方留誤會的期待，也守住了自己的時間。只是語氣短而冷時，對方可能覺得連心也被拒了。",
      "keywords": "清楚·短理由·劃線·守時間",
      "frequentSaying": "「今天不行」「我不去」",
      "partnerImpression": "清楚好懂，但偶爾覺得有點冷",
      "strengths": "不製造虛假期待的坦誠，以及自我保護",
      "caution": "短句有時聽起來像情感上的拒絕",
      "emotionLabel": "我現在是想守住自己的時間",
      "rewriteLine": "今天想休息。改成明天見吧，我還是想見你的",
      "changeTips": "拒絕前加一句「謝謝」或「我懂你的意思」\n拒絕後再給一個替代方案，表明不是拒絕這個人\n語氣變尖時，改成「現在有點難」",
      "oneLiner": "清楚的拒絕保護彼此。再加一句「不是心的問題」就更好。",
      "shareLine": "拒絕時的我的語氣：南瓜直球型 🎃 據說又短又清楚直接劃線哈哈 你怎麼拒絕？把結果傳我"
    },
    {
      "title": "輕輕繞著說的人，委婉繞彎型",
      "typeName": "委婉繞彎型",
      "refusalTone": "帶著抱歉和可惜、把真實理由輕輕說出來的體貼型",
      "shortDescription": "你一邊拒絕，一邊先留意對方會不會受傷。",
      "description": "對方感到被尊重，關係也更順。但繞太久，拒絕會變糊，對方可能再提一次或產生誤會。",
      "keywords": "體貼·抱歉·委婉·說清真實理由",
      "frequentSaying": "「想幫你，但恐怕不行，抱歉」",
      "partnerImpression": "溫暖體貼，但有時得再確認一遍真意",
      "strengths": "不傷關係的細緻體貼",
      "caution": "太委婉時，拒絕可能傳不到位",
      "emotionLabel": "我現在是怕對方難過，所以小心翼翼",
      "rewriteLine": "抱歉，這次不行。下次一定一起",
      "changeTips": "體貼之後，用「這次不行」把結論說死\n少用「大概」「可能不行」，至少說一次「這次做不到」\n對方再提時，重複同一理由守住界線",
      "oneLiner": "溫柔的拒絕是長處。結論那一句夠清楚，誤會就少。",
      "shareLine": "拒絕時的我的語氣：委婉繞彎型 🌸 據說輕輕繞著拒絕… 你怎麼拒絕？把結果傳我"
    },
    {
      "title": "編出情況來躲開的人，藉口迴避型",
      "typeName": "藉口迴避型",
      "refusalTone": "靠編情況或拖延答覆，避開直接拒絕",
      "shortDescription": "對你來說，說「情況不允許」比說「我不想」更輕鬆。",
      "description": "躲開直接拒絕的尷尬，當下衝突也少。但藉口堆多了，信任會晃，同樣的局還會再來。",
      "keywords": "藉口·拖延·躲確定答覆·避衝突",
      "frequentSaying": "「突然有事」「沒法確定」",
      "partnerImpression": "看起來很忙，但摸不準真心",
      "strengths": "想避開衝突的和平取向與臨場判斷",
      "caution": "藉口堆積會讓信任和真心變糊",
      "emotionLabel": "我現在是害怕直接說出口",
      "rewriteLine": "其實今天只是想休息一下，抱歉",
      "changeTips": "用一個真實詞代替藉口，例如「太累了」\n沒法確定時，設期限：「明天上午前告訴你」\n從小拒絕開始練習照實說",
      "oneLiner": "藉口救當場，真心救關係。一個真實詞就是開始。",
      "shareLine": "拒絕時的我的語氣：藉口迴避型 🌀 據說愛編情況躲開哈哈 被戳中… 你怎麼拒絕？把結果傳我"
    },
    {
      "title": "拒絕不了只好答應的人，照單全收型",
      "typeName": "照單全收型",
      "refusalTone": "心裡不想，最後還是「好」地收下",
      "shortDescription": "你怕對方失望，於是用壓下自己的心來代替拒絕。",
      "description": "看起來可靠又好說話，但吞下去的拒絕會堆積，某天可能以疲勞或委屈爆出來。",
      "keywords": "答應·忍耐·看眼色·堆積的疲勞",
      "frequentSaying": "「好，我去」「沒事，我來」",
      "partnerImpression": "總是配合、很好說話的人",
      "strengths": "把對方放在前面的付出與體貼",
      "caution": "壓抑的情緒可能變成燃盡或突然爆發",
      "emotionLabel": "我現在是怕說不想會被討厭",
      "rewriteLine": "今天不行。但這件事我可以幫",
      "changeTips": "別馬上答，先說「我想一下再回你」爭取時間\n從小請求開始練習拒絕一次，確認關係還在\n答應後的疲勞當天說出來：「其實有點累」",
      "oneLiner": "體貼很珍貴，你的心也同樣珍貴。「我想一下」就是第一步。",
      "shareLine": "拒絕時的我的語氣：照單全收型 🤲 據說拒絕不了只好答應… 你怎麼拒絕？把結果傳我"
    }
  ]
};

const VI: Phase3RefusalToneLocaleBundle = {
  "meta": {
    "title": "Cách nói khi từ chối",
    "description": "Cùng một câu \"không\" cũng khác nhau tùy cách nói. 12 tình huống cho biết bạn thuộc kiểu thẳng thắn, vòng vo, viện cớ hay khó từ chối.",
    "tags": [
      "cách từ chối",
      "nói chuyện tình cảm",
      "trắc nghiệm tình yêu"
    ]
  },
  "questions": [
    {
      "q": "Người yêu bất ngờ bảo \"hôm nay gặp đi\", nhưng bạn muốn nghỉ. Bạn thì sao?",
      "opts": [
        "\"Hôm nay muốn nghỉ, mai gặp nhé\"",
        "\"Muốn gặp lắm nhưng hôm nay người mệt… xin lỗiㅠ\"",
        "\"À hôm nay đột nhiên có việc, chắc không đi được\"",
        "\"Được, dù mệt mình vẫn đi\""
      ]
    },
    {
      "q": "Bạn bè muốn mượn một khoản lớn. Bạn thì sao?",
      "opts": [
        "\"Muốn giúp nhưng túi mình đang eo hẹp, xin lỗi\"",
        "\"Đang dọn sổ thì tiền đang bị kẹt…\"",
        "\"…Thôi được, cần bao nhiêu?\"",
        "\"Mình không vay mượn tiền với bạn bè, xin lỗi\""
      ]
    },
    {
      "q": "Đồng nghiệp nhờ việc ngay trước giờ về. Bạn thì sao?",
      "opts": [
        "\"À hôm nay mình có hẹn, phải đi ngay\"",
        "\"Vâng, để mình làm…\"",
        "\"Hôm nay khó rồi, sáng mai xem nhé\"",
        "\"Muốn giúp nhưng hôm nay có lịch, chắc không được\""
      ]
    },
    {
      "q": "Người yêu rủ đi họp bạn. Bạn không muốn. Bạn thì sao?",
      "opts": [
        "Nói \"Được, đi cùng\" rồi hối trong lòng",
        "\"Lần này mình không đi đâu, vui vẻ nhé\"",
        "\"Gặp bạn của bạn cũng vui, nhưng lần này muốn nghỉ, xin lỗi\"",
        "\"Hôm đó có thể đột nhiên có lịch gia đình…\""
      ]
    },
    {
      "q": "Người yêu hỏi mật khẩu điện thoại. Bạn thấy khó chịu. Bạn thì sao?",
      "opts": [
        "\"Cái đó làm mình khó chịu, không muốn cho mật khẩu\"",
        "Khó chịu nhưng vẫn im lặng đưa",
        "\"Quên mật khẩu rồi, sau nói nhé\"",
        "\"Hiểu bạn quan tâm, nhưng với mình hơi khó, xin lỗi\""
      ]
    },
    {
      "q": "Bạn rủ đi du lịch nhưng lịch không khớp. Bạn thì sao?",
      "opts": [
        "\"Muốn đi lắm nhưng lịch lần này khó rồi, tiếc quá\"",
        "\"Lần này không đi được, lần sau chắc chắn\"",
        "Biết không đi được mà vẫn gật đầu",
        "\"Lúc đó có thể có việc gia đình, chưa chốt được\""
      ]
    },
    {
      "q": "Người yêu muốn cả cuối tuần bên nhau. Bạn muốn ở một mình. Bạn thì sao?",
      "opts": [
        "\"Cuối tuần đột nhiên có việc phải làm\"",
        "\"Muốn ở cùng nhưng muốn một ngày nghỉ một mình, xin lỗi\"",
        "\"Thứ bảy ở một mình, chủ nhật gặp\"",
        "Nói \"Được, cả cuối tuần\" rồi đè cảm xúc xuống"
      ]
    },
    {
      "q": "Cuộc gọi bán hàng mời đăng ký. Bạn thì sao?",
      "opts": [
        "Không từ chối nổi, nghe hết rồi đăng ký",
        "Nói \"Đang lái xe\" rồi cúp",
        "\"Nghe hay đấy nhưng giờ khó đăng ký\"",
        "\"Không quan tâm, cảm ơn\" rồi cúp"
      ]
    },
    {
      "q": "Bạn cứ moi chuyện tình cảm. Bạn không muốn nói. Bạn thì sao?",
      "opts": [
        "\"Cái đó mình không muốn nói\"",
        "\"Muốn nói nhưng chưa sắp xếp xong, sau nhé\"",
        "Không muốn nhưng cuối cùng vẫn kể hết",
        "\"Pin sắp hết, mình cúp đây\" rồi đổi chủ đề"
      ]
    },
    {
      "q": "Người yêu tặng quà không hợp gu. Bạn muốn đổi. Bạn thì sao?",
      "opts": [
        "\"Cảm ơn, size hơi lệch, đổi được không?\"",
        "\"Không hợp gu mình lắm, muốn đổi—nhưng cảm ơn nha\"",
        "\"Sợ làm mất, để mình cất tạm\"",
        "Không nói gì, giả thích rồi cứ dùng"
      ]
    },
    {
      "q": "Người yêu hỏi \"Mai tăng ca, đón giúp được không?\" Bạn mệt. Bạn thì sao?",
      "opts": [
        "\"Mai xe có thể lỗi, chưa chắc\"",
        "Nói \"Được, mình đi\" rồi kéo thân mệt đi",
        "\"Muốn đón nhưng mai hết sức rồi, xin lỗi\"",
        "\"Mai khó rồi, đi taxi được không?\""
      ]
    },
    {
      "q": "Câu nào gần cách bạn từ chối nhất?",
      "opts": [
        "\"Sợ họ tổn thương nên cứ nhận lời trước\"",
        "\"Nói có chuyện dễ hơn từ chối trực tiếp\"",
        "\"Cái không được thì nói ngắn rõ là tốt cho cả hai\"",
        "\"Mình cố từ chối nhẹ nhàng, kèm xin lỗi\""
      ]
    }
  ],
  "results": [
    {
      "title": "Người nói ngắn và rõ — Kiểu thẳng thắn bí ngô",
      "typeName": "Kiểu thẳng thắn bí ngô",
      "refusalTone": "Kiểu rõ ràng: đưa lý do ngắn rồi nói \"không\" dứt khoát",
      "shortDescription": "Bạn không kéo dài việc từ chối—một câu là đủ để kẻ vạch.",
      "description": "Đối phương ít có chỗ để hy vọng sai, hiểu lầm cũng ít và bạn giữ được thời gian của mình. Đổi lại, giọng ngắn lạnh có thể khiến họ cảm giác cả tấm lòng cũng bị từ chối.",
      "keywords": "rõ ràng·lý do ngắn·kẻ vạch·giữ thời gian",
      "frequentSaying": "\"Hôm nay khó rồi\", \"Mình không đi\"",
      "partnerImpression": "Rõ ràng dễ chịu—nhưng đôi khi hơi lạnh",
      "strengths": "Thành thật không tạo kỳ vọng giả, cùng khả năng tự bảo vệ",
      "caution": "Câu ngắn có thể nghe như từ chối về mặt cảm xúc",
      "emotionLabel": "Lúc này mình muốn giữ thời gian của bản thân",
      "rewriteLine": "Hôm nay muốn nghỉ. Mai gặp nhé—mình vẫn muốn gặp bạn",
      "changeTips": "Trước khi từ chối, thêm một câu \"cảm ơn\" hoặc \"mình hiểu\"\nSau khi từ chối, đề xuất một phương án thay để họ biết không phải bị từ chối con người\nNếu giọng sắc, đổi thành \"giờ hơi khó\"",
      "oneLiner": "Từ chối rõ ràng bảo vệ cả hai. Thêm một câu rằng không phải chuyện tấm lòng.",
      "shareLine": "Cách nói khi từ chối: Kiểu thẳng thắn bí ngô 🎃 Ngắn rõ kẻ vạch luôn á ha ha. Bạn từ chối thế nào? Gửi kết quả đi"
    },
    {
      "title": "Người nói vòng nhẹ — Kiểu vòng vo mềm",
      "typeName": "Kiểu vòng vo mềm",
      "refusalTone": "Kiểu chu đáo: gói lý do thật trong lời xin lỗi và sự ấm áp",
      "shortDescription": "Dù đang từ chối, bạn vẫn để ý trước xem đối phương có bị tổn thương không.",
      "description": "Họ cảm thấy được tôn trọng nên quan hệ êm. Nhưng vòng quá nhiều làm \"không\" bị mờ—họ có thể hỏi lại hoặc hiểu nhầm.",
      "keywords": "chu đáo·xin lỗi·nói vòng·giải thích lý do thật",
      "frequentSaying": "\"Muốn giúp nhưng chắc khó rồi, xin lỗi\"",
      "partnerImpression": "Ấm và chu đáo—nhưng đôi khi phải hỏi lại ý thật",
      "strengths": "Sự tinh tế giữ quan hệ không rạn",
      "caution": "Quá mềm có thể khiến từ chối không tới",
      "emotionLabel": "Lúc này mình e làm họ buồn nên đang dè chừng",
      "rewriteLine": "Xin lỗi, lần này khó rồi. Lần sau mình cùng chắc chắn",
      "changeTips": "Sau câu chu đáo, kết bằng \"lần này không được\" cho rõ\nBớt \"có lẽ\", \"chắc khó\"—nói một lần \"lần này không làm được\"\nNếu họ hỏi lại, lặp lại cùng lý do và giữ ranh giới",
      "oneLiner": "Từ chối mềm là điểm mạnh. Một câu kết luận rõ là hết hiểu nhầm.",
      "shareLine": "Cách nói khi từ chối: Kiểu vòng vo mềm 🌸 Nói nhẹ vòng quanh… Bạn từ chối thế nào? Gửi kết quả đi"
    },
    {
      "title": "Người bịa tình huống để né — Kiểu viện cớ",
      "typeName": "Kiểu viện cớ",
      "refusalTone": "Né từ chối trực tiếp bằng cách bịa chuyện hoặc trì câu trả lời",
      "shortDescription": "Với bạn, nói \"hoàn cảnh không cho phép\" dễ hơn nói \"mình không muốn\".",
      "description": "Tránh được cái khó của từ chối thẳng và giảm xung đột lúc đó. Nhưng cớ chất chồng làm lung lay niềm tin—và cảnh cũ lại quay lại.",
      "keywords": "viện cớ·trì hoãn·né câu chốt·tránh xung đột",
      "frequentSaying": "\"Đột nhiên có việc\", \"Chưa chốt được\"",
      "partnerImpression": "Trông bận—nhưng khó biết lòng thật",
      "strengths": "Hướng hòa bình và phán đoán tình huống nhanh",
      "caution": "Cớ tích tụ làm mờ niềm tin và sự chân thành",
      "emotionLabel": "Lúc này mình sợ nói thẳng",
      "rewriteLine": "Thật ra hôm nay chỉ muốn nghỉ một chút, xin lỗi",
      "changeTips": "Đổi cớ bằng một từ thật, ví dụ \"mệt\"\nKhi chưa chốt được, đặt hạn: \"sáng mai mình báo\"\nLuyện nói thật từ những lần từ chối nhỏ",
      "oneLiner": "Cớ cứu lúc đó; thật lòng cứu quan hệ. Một từ thật là khởi đầu.",
      "shareLine": "Cách nói khi từ chối: Kiểu viện cớ 🌀 Bịa chuyện để né á ha ha. Đau… Bạn từ chối thế nào? Gửi kết quả đi"
    },
    {
      "title": "Người không từ chối nổi — Kiểu nhận hết",
      "typeName": "Kiểu nhận hết",
      "refusalTone": "Trong lòng không muốn nhưng cuối cùng vẫn \"được\"",
      "shortDescription": "Sợ họ thất vọng, bạn gập tấm lòng mình thay vì nói không.",
      "description": "Trông đáng tin và dễ chịu—nhưng những lần nuốt \"không\" chất lại, có ngày thành mệt mỏi hay ấm ức bật ra.",
      "keywords": "nhận lời·chịu đựng·đoán ý·mệt chất chồng",
      "frequentSaying": "\"Được, mình đi\", \"Không sao, mình làm\"",
      "partnerImpression": "Người luôn chiều, dễ nói chuyện",
      "strengths": "Sự tận tụy và chu đáo đặt đối phương lên trước",
      "caution": "Cảm xúc nén có thể thành burnout hoặc bùng nổ đột ngột",
      "emotionLabel": "Lúc này mình sợ nói không muốn sẽ bị ghét",
      "rewriteLine": "Hôm nay khó rồi. Nhưng cái này mình giúp được",
      "changeTips": "Đừng trả lời ngay—câu giờ bằng \"Để mình nghĩ rồi báo\"\nLuyện từ chối một lần nhỏ và thấy quan hệ vẫn ổn\nSau khi nhận lời, nói mệt trong ngày: \"Thật ra hơi mệt\"",
      "oneLiner": "Chu đáo quý giá—và tấm lòng bạn cũng vậy. \"Để mình nghĩ\" là bước đầu.",
      "shareLine": "Cách nói khi từ chối: Kiểu nhận hết 🤲 Không từ chối nổi rồi nhận… Bạn từ chối thế nào? Gửi kết quả đi"
    }
  ]
};

const ID: Phase3RefusalToneLocaleBundle = {
  "meta": {
    "title": "Gaya Bicara Saat Menolak",
    "description": "\"Tidak\" yang sama terdengar beda tergantung caranya. 12 situasi mengungkap apakah kamu blak-blakan, berputar, bikin alasan, atau susah menolak.",
    "tags": [
      "gaya menolak",
      "cara bicara pacaran",
      "tes hubungan"
    ]
  },
  "questions": [
    {
      "q": "Pasangan tiba-tiba bilang \"ketemuan hari ini yuk\", tapi kamu mau istirahat. Kamu…",
      "opts": [
        "\"Hari ini mau istirahat, ketemu besok ya\"",
        "\"Pengin ketemu, tapi badan lagi berat banget… maafㅠ\"",
        "\"Eh hari ini tiba-tiba ada urusan, kayaknya nggak bisa\"",
        "\"Oke, capek sih tapi aku datang\""
      ]
    },
    {
      "q": "Teman minta pinjam uang dalam jumlah besar. Kamu…",
      "opts": [
        "\"Pengin bantu, tapi kondisi keuangan lagi mepet—maaf\"",
        "\"Lagi beres-beres rekening, uangnya lagi terkunci…\"",
        "\"…Oke deh, butuh berapa?\"",
        "\"Aku nggak pinjam-meminjam uang sama teman—maaf\""
      ]
    },
    {
      "q": "Rekan kerja minta tolong tepat sebelum pulang. Kamu…",
      "opts": [
        "\"Eh aku ada janji, harus berangkat sekarang\"",
        "\"Baik… aku yang kerjakan…\"",
        "\"Hari ini sulit. Besok pagi kita lihat ya\"",
        "\"Pengin bantu, tapi hari ini ada jadwal—kayaknya susah\""
      ]
    },
    {
      "q": "Pasangan mengajak ke kumpulan teman. Kamu enggan. Kamu…",
      "opts": [
        "Bilang \"Yuk, ikut\" lalu menyesal dalam hati",
        "\"Kali ini aku nggak ikut—selamat bersenang-senang\"",
        "\"Senang ketemu temanmu, tapi kali ini mau istirahat—maaf\"",
        "\"Hari itu mungkin tiba-tiba ada agenda keluarga…\""
      ]
    },
    {
      "q": "Pasangan minta password HP. Kamu merasa tidak nyaman. Kamu…",
      "opts": [
        "\"Itu membuatku tidak nyaman—aku nggak mau kasih password\"",
        "Tidak nyaman tapi diam-diam tetap kasih",
        "\"Passwordnya lupa, nanti aku kasih tahu\"",
        "\"Aku paham kamu peduli, tapi itu agak sulit buatku—maaf\""
      ]
    },
    {
      "q": "Teman mengajak traveling tapi jadwal bentrok. Kamu…",
      "opts": [
        "\"Pengin banget ikut, tapi jadwal kali ini susah—sayang banget\"",
        "\"Kali ini nggak bisa, next trip pasti\"",
        "Tahu nggak bisa pergi tapi tetap bilang oke",
        "\"Waktu itu mungkin ada acara keluarga, belum bisa pastikan\""
      ]
    },
    {
      "q": "Pasangan ingin seharian weekend bareng. Kamu mau sendirian. Kamu…",
      "opts": [
        "\"Weekend tiba-tiba ada kerjaan yang harus dikerjakan\"",
        "\"Pengin bareng, tapi mau satu hari istirahat sendiri—maaf\"",
        "\"Sabtu sendiri, Minggu ketemu\"",
        "Bilang \"Oke, weekend penuh bareng\" lalu menelan perasaan"
      ]
    },
    {
      "q": "Telepon sales menawarkan pendaftaran. Kamu…",
      "opts": [
        "Tidak bisa menolak, dengarkan sampai habis, lalu daftar",
        "Bilang \"Lagi nyetir\" lalu tutup",
        "\"Kedengarannya bagus, tapi sekarang susah daftar\"",
        "\"Tidak tertarik, terima kasih\" lalu tutup"
      ]
    },
    {
      "q": "Teman terus mengorek soal hubunganmu. Kamu enggan cerita. Kamu…",
      "opts": [
        "\"Itu nggak mau aku bahas\"",
        "\"Pengin cerita tapi belum beres di kepala—nanti ya\"",
        "Enggan tapi akhirnya tumpah semua",
        "\"Baterai mau habis, aku tutup dulu\" lalu mengalihkan topik"
      ]
    },
    {
      "q": "Hadiah dari pasangan tidak sesuai selera. Kamu mau tukar. Kamu…",
      "opts": [
        "\"Makasih—ukurannya agak kurang pas, boleh ditukar?\"",
        "\"Kurang ke selera aku, mau tukar—tapi makasih ya\"",
        "\"Takut hilang, aku simpan dulu deh\"",
        "Diam saja, pura-pura suka, terus dipakai"
      ]
    },
    {
      "q": "Pasangan bilang \"Besok lembur, bisa jemput?\" Kamu kelelahan. Kamu…",
      "opts": [
        "\"Besok mobil mungkin bermasalah—belum pasti\"",
        "Bilang \"Oke, aku datang\" lalu menyeret badan lelah",
        "\"Pengin jemput, tapi besok tenagaku nggak cukup—maaf\"",
        "\"Besok sulit—gimana kalau taksi?\""
      ]
    },
    {
      "q": "Kalimat mana yang paling dekat dengan cara kamu menolak?",
      "opts": [
        "\"Aku bilang iya dulu supaya mereka nggak sakit hati\"",
        "\"Lebih enak bilang ada alasan daripada menolak langsung\"",
        "\"Yang nggak bisa sebaiknya dikatakan singkat dan jelas\"",
        "\"Aku coba menolak lembut, dengan nada minta maaf\""
      ]
    }
  ],
  "results": [
    {
      "title": "Yang bilang singkat dan jelas — Tipe Blak-blakan Labu",
      "typeName": "Tipe Blak-blakan Labu",
      "refusalTone": "Tipe jelas yang kasih alasan singkat lalu bilang \"tidak\" tanpa kabut",
      "shortDescription": "Kamu tidak berlama-lama menolak—satu kalimat sudah cukup untuk menarik garis.",
      "description": "Kamu tidak kasih ruang harapan palsu, jadi salah paham sedikit dan waktumu terjaga. Sisi lainnya: nada pendek dan dingin bisa terasa seperti hati mereka juga ditolak.",
      "keywords": "jelas·alasan singkat·garis batas·jaga waktu",
      "frequentSaying": "\"Hari ini nggak bisa\", \"Aku nggak ikut\"",
      "partnerImpression": "Jelas dan enak—tapi kadang terasa agak dingin",
      "strengths": "Kejujuran yang mencegah harapan palsu plus proteksi diri yang kuat",
      "caution": "Kata singkat bisa terdengar seperti penolakan emosional",
      "emotionLabel": "Sekarang aku ingin menjaga waktuku",
      "rewriteLine": "Hari ini mau istirahat. Ketemu besok saja—aku tetap ingin ketemu",
      "changeTips": "Sebelum menolak, tambah satu kalimat hangat—\"makasih\" atau \"aku paham\"\nSetelah menolak, tawarkan satu alternatif supaya tidak terasa menolak orangnya\nKalau nadamu tajam, soften jadi \"sekarang sulit\"",
      "oneLiner": "Penolakan yang jelas melindungi kalian berdua. Tambah satu baris bahwa ini bukan soal perasaanmu pada mereka.",
      "shareLine": "Gaya menolakku: Tipe Blak-blakan Labu 🎃 Singkat jelas, garis ditarik langsung wkwk. Kamu menolaknya bagaimana? Kirim hasilmu"
    },
    {
      "title": "Yang memperhalus sudut — Tipe Berputar Lembut",
      "typeName": "Tipe Berputar Lembut",
      "refusalTone": "Tipe peduli yang membungkus alasan asli dengan maaf dan kehangatan",
      "shortDescription": "Meski sedang menolak, kamu dulu memastikan orang lain tidak tersakiti.",
      "description": "Mereka merasa dihargai jadi hubungan tetap mulus. Tapi terlalu berputar bisa mengaburkan \"tidak\"—mereka mungkin bertanya lagi atau salah paham.",
      "keywords": "peduli·maaf·kalimat lembut·jelaskan alasan asli",
      "frequentSaying": "\"Pengin bantu, tapi kayaknya susah—maaf\"",
      "partnerImpression": "Hangat dan penuh perhatian—tapi kadang harus dicek lagi maksudnya",
      "strengths": "Kehalusan yang menjaga hubungan tetap utuh",
      "caution": "Terlalu lembut bisa membuat penolakan tidak sampai",
      "emotionLabel": "Sekarang aku hati-hati karena takut membuat mereka kecewa",
      "rewriteLine": "Maaf—kali ini nggak bisa. Next time pasti bareng",
      "changeTips": "Setelah kalimat peduli, akhiri jelas dengan \"kali ini nggak bisa\"\nKurangi \"mungkin\" dan \"kayaknya susah\"—bilang sekali \"kali ini aku nggak bisa\"\nKalau mereka minta lagi, ulang alasan yang sama dan jaga batas",
      "oneLiner": "Menolak dengan lembut adalah kekuatan. Satu kalimat penutup yang jelas mengurangi salah paham.",
      "shareLine": "Gaya menolakku: Tipe Berputar Lembut 🌸 Lembut, hati-hati, agak muter… Kamu menolaknya bagaimana? Kirim hasilmu"
    },
    {
      "title": "Yang bikin alasan untuk kabur — Tipe Pembuat Alasan",
      "typeName": "Tipe Pembuat Alasan",
      "refusalTone": "Kamu menghindari penolakan langsung dengan mengarang situasi atau menunda jawaban",
      "shortDescription": "Bagimu \"keadaannya yang sulit\" terasa lebih enak daripada \"aku nggak mau\".",
      "description": "Kamu menghindari kecanggungan menolak langsung dan meredam konflik saat itu. Tapi alasan yang menumpuk mengguncang kepercayaan—dan situasi yang sama terus kembali.",
      "keywords": "alasan·menunda·hindari jawaban pasti·hindari konflik",
      "frequentSaying": "\"Tiba-tiba ada urusan\", \"Belum bisa pastikan\"",
      "partnerImpression": "Kelihatan sibuk—tapi sulit dibaca isinya",
      "strengths": "Orientasi damai dan penilaian situasi yang cepat",
      "caution": "Alasan yang menumpuk bisa mengaburkan kepercayaan dan ketulusan",
      "emotionLabel": "Sekarang aku takut bilang secara langsung",
      "rewriteLine": "Sejujurnya hari ini cuma mau istirahat—maaf",
      "changeTips": "Ganti alasan dengan satu kata jujur—misalnya \"capek\"\nKalau belum bisa pastikan, pasang tenggat: \"Besok pagi aku kabari\"\nLatihan bilang jujur dulu di penolakan kecil",
      "oneLiner": "Alasan menyelamatkan momen; kejujuran menyelamatkan hubungan. Satu kata jujur adalah awalnya.",
      "shareLine": "Gaya menolakku: Tipe Pembuat Alasan 🌀 Bikin alasan terus kabur wkwk. Nyinyir… Kamu menolaknya bagaimana? Kirim hasilmu"
    },
    {
      "title": "Yang tidak bisa menolak — Tipe Selalu Ya",
      "typeName": "Tipe Selalu Ya",
      "refusalTone": "Dalam hati tidak mau—tapi akhirnya tetap bilang \"oke\"",
      "shortDescription": "Takut mereka kecewa, kamu melipat perasaan sendiri alih-alih bilang tidak.",
      "description": "Kamu kelihatan andal dan baik—tapi \"tidak\" yang ditelan menumpuk dan suatu hari bisa meledak jadi lelah atau sakit hati.",
      "keywords": "mengiyakan·menahan·baca suasana·kelelahan menumpuk",
      "frequentSaying": "\"Oke, aku datang\", \"Nggak apa-apa, aku kerjakan\"",
      "partnerImpression": "Orang yang selalu menyesuaikan diri, enak diajak",
      "strengths": "Pengabdian dan kepedulian yang mendahulukan orang lain",
      "caution": "Perasaan yang ditekan bisa jadi burnout atau ledakan mendadak",
      "emotionLabel": "Sekarang aku takut bilang tidak mau lalu dibenci",
      "rewriteLine": "Hari ini sulit. Tapi yang ini aku bisa bantu",
      "changeTips": "Jangan jawab langsung—beli waktu dengan \"Biar aku pikir dulu, nanti aku kabari\"\nLatihan satu penolakan kecil dan lihat hubungannya tetap baik-baik saja\nSetelah mengiyakan, sebutkan kelelahan di hari yang sama: \"Sebenernya agak berat\"",
      "oneLiner": "Peduli itu berharga—dan hatimu juga. \"Biar aku pikir dulu\" adalah langkah pertama.",
      "shareLine": "Gaya menolakku: Tipe Selalu Ya 🤲 Nggak bisa menolak… terus bilang oke. Kamu menolaknya bagaimana? Kirim hasilmu"
    }
  ]
};

export const PHASE3_REFUSAL_TONE_I18N: Record<
  Phase3RefusalToneForeignLocale,
  Phase3RefusalToneLocaleBundle
> = {
  en: EN,
  ja: JA,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  vi: VI,
  id: ID,
};
