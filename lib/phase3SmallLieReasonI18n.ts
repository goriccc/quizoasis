/** Auto-built from scripts/_small_lie_i18n/*.json — do not hand-edit */
export type Phase3SmallLieReasonForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export type Phase3SmallLieReasonResultText = {
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
  results: Phase3SmallLieReasonResultText[];
};

export const PHASE3_SMALL_LIE_REASON_I18N: Record<Phase3SmallLieReasonForeignLocale, LocaleBundle> = {
  "en": {
    "meta": {
      "title": "Why Do I Keep Telling Little Lies to My Partner?",
      "description": "Why do you keep spinning stories you didn't need to tell? These 10 scenarios reveal the real reason behind your little lies — and how to get more honest.",
      "tags": [
        "Dating Lies",
        "Dating Psychology",
        "Dating Types"
      ]
    },
    "questions": [
      {
        "q": "You're out late having a drink with a friend. They text, \"Are you already heading home?\" You...",
        "opts": [
          "Say \"yeah, on my way\" — telling the truth would get long and awkward",
          "Say \"yeah, heading home, nothing's wrong\" — you don't want them to worry",
          "\"Yeah, on my way\" pops out before you even think",
          "Say \"yeah, heading in early\" to match the responsible person they expect — late nights would disappoint them"
        ]
      },
      {
        "q": "They gave you a gift that isn't your taste. \"Do you like it?\" You...",
        "opts": [
          "Say you love it — you know they chose carefully and don't want them hurt",
          "\"Yeah, I like it\" comes out on autopilot",
          "Put on a big happy face to match the \"you're supposed to be thrilled\" expectation",
          "Invent reasons you like it — admitting it's not your style would make you look tactless"
        ]
      },
      {
        "q": "They ask, \"What'd you have for lunch?\" You actually grabbed convenience-store food. You...",
        "opts": [
          "\"Just had a simple meal\" slips out before you think",
          "Say \"I ate properly\" to match the \"someone who takes care of themselves\" image",
          "Upgrade the menu a little so you don't look pathetic for eating so casually",
          "Say \"I packed a lunch\" — otherwise you'll get the \"take better care of yourself\" lecture"
        ]
      },
      {
        "q": "They're late and apologize: \"Did you wait long?\" You waited 30 minutes. You...",
        "opts": [
          "Fold the hurt and say \"I barely waited\" — you feel like you should always be the chill one",
          "Laugh it off with \"I just got here too\" — you want to look cool",
          "Say \"nah, I just got here\" — admitting you waited feels like starting a fight",
          "Say \"it's fine, not long\" — their guilt bothers you"
        ]
      },
      {
        "q": "They ask, \"Something going on? You look off.\" Work was rough. You...",
        "opts": [
          "Say \"nothing's wrong\" — you don't want to look weak; with them you always seem fine",
          "Say \"nah, just tired\" — opening up would make things heavy",
          "Say \"nothing's wrong\" — you don't want them worrying about you",
          "\"It's nothing\" shoots out the second they ask"
        ]
      },
      {
        "q": "They casually ask, \"Were you with someone today?\" You had a one-on-one lunch with a coworker. You...",
        "opts": [
          "\"No\" jumps out habitually the moment they ask",
          "Say \"no, I ate alone\" — you don't want to break the steady image they expect",
          "Say \"I ate alone\" — the truth would get misunderstood and make things awkward",
          "Say \"I was alone\" like it's nothing — you don't want them overthinking"
        ]
      },
      {
        "q": "They ask, \"Do you know about this?\" You actually don't. You...",
        "opts": [
          "Play along like you know — saying you don't would make it awkward and disappoint them",
          "Nod like you know — admitting you don't would make you look clueless",
          "Say \"yeah, I know\" — you feel bad making them explain",
          "\"Yeah, I know~\" comes out first, then you regret it"
        ]
      },
      {
        "q": "The bouquet they gave you already wilted and you tossed it. They ask, \"Still looking good?\" You...",
        "opts": [
          "Say \"yeah, I'm keeping it nicely\" — you don't want to look like someone who throws gifts away",
          "Say \"yeah, it's fine\" — admitting you tossed it would start a long hurt conversation",
          "\"Yeah~ still good\" comes out by habit",
          "Say \"yeah, I'm taking care of it\" to match the \"I treasure your gifts\" expectation"
        ]
      },
      {
        "q": "They ask, \"You're not hiding anything from me, right?\" You are hiding something small. You...",
        "opts": [
          "Cut it short with \"nope\" — saying it would blow up",
          "Say \"yeah, nothing\" — not wanting them to worry comes first",
          "Say \"of course not\" to match the \"I'm totally open\" expectation",
          "Act clean with \"nope, don't worry\" — looking like a secretive person feels embarrassing"
        ]
      },
      {
        "q": "A little lie gets caught and they ask, \"Why did you hide that?\" What's closest to your gut?",
        "opts": [
          "I hid it because I didn't want to see them worry",
          "It wasn't a planned lie — it just came out as a habit",
          "I wanted to paint myself a little better so I wouldn't look bad",
          "I just wanted to dodge a fight"
        ]
      }
    ],
    "results": [
      {
        "title": "Someone who only wants to show the good side, the Face-Saving Type 🛡️",
        "typeName": "Face-Saving Type",
        "realReason": "You touch up the truth because being seen as lacking feels uncomfortable",
        "shortDescription": "You're not trying to deceive. Wanting to look a little better in front of them is what creates the tiny touch-ups.",
        "description": "You upgrade a casual lunch, pretend you know a topic, or say you're fine when you're not. It's not malice — it's protecting your image. But when touch-ups stack up, they get fewer chances to know the real you.",
        "keywords": "Image management, Pretending to know, Acting fine, Touch-ups, Hiding flaws",
        "strengths": "You care about self-management and earnestly want to show them your better side",
        "reasonDetail": "When everyday moments might look lacking, when you don't know something, when weakness might show",
        "frequentSaying": "\"Yeah I know, I do that too\"",
        "changeTips": "Deliberately share one small flaw first. Example: \"Honestly, I ate whatever today\"\nWhen you don't know something, try once: \"I don't really know — explain it to me\"\nRecall a time they saw your weak side and didn't pull away",
        "oneLiner": "The unpolished you actually feels closer. Start with one small honesty",
        "shareLine": "Why do I keep telling little lies to my partner? Result: Face-Saving Type 🛡️ Apparently I touch things up so I won't look lacking... I got Face-Saving lol what'd you get?"
      },
      {
        "title": "Someone who folds first to avoid a fight, the Conflict-Avoider Type 🕊️",
        "typeName": "Conflict-Avoider Type",
        "realReason": "You cover because telling the truth might create an awkward vibe",
        "shortDescription": "You're not a liar. The fight or long talk that might follow the truth feels heavier than a quick cover.",
        "description": "Saying you stayed out late, waited long, or felt hurt feels like conflict starting — so you fold with \"it's fine\" and \"nah.\" The vibe holds, but unspoken facts don't disappear. When they come out later, trust takes a bigger hit.",
        "keywords": "Vibe first, It's fine, Long-talk dread, Preventing conflict, Blowback when caught",
        "strengths": "You have a knack for keeping peace and cutting unnecessary fights",
        "reasonDetail": "When the truth might bring lectures or arguments, when you need to voice hurt or discomfort",
        "frequentSaying": "\"Let's just drop it, it's nothing\"",
        "changeTips": "When sharing an uncomfortable fact, start with \"I'm not fighting — I just want you to know\"\nKeep it short: one line of fact + one line of feeling\nPractice telling small truths the same day so you learn speaking doesn't break the bond",
        "oneLiner": "Speaking isn't fighting. The sooner you say the small stuff, the smaller the fight when you're caught",
        "shareLine": "Why do I keep telling little lies to my partner? Result: Conflict-Avoider Type 🕊️ Apparently I cover so we won't fight... I got Conflict-Avoider lol you too?"
      },
      {
        "title": "Someone who hides things so you won't worry, the Worry-Shield Type 🌂",
        "typeName": "Worry-Shield Type",
        "realReason": "You block the truth first so they won't worry or feel hurt",
        "shortDescription": "You're not hiding to deceive. You're trying to shield them from worry ahead of time.",
        "description": "Even when things are hard you say \"nothing's wrong,\" and anything that might worry them gets waved off as \"it's nothing.\" It's a tender choice — but they may never know you're struggling, and finding out later can leave them feeling left out.",
        "keywords": "Blocking worry, Protecting their heart, Nothing's wrong, Kind lies, Carrying it alone",
        "strengths": "Warm, quick to sense their feelings, and careful not to add burden",
        "reasonDetail": "When something is hard, when a fact might make them ache for you",
        "frequentSaying": "\"I didn't say it because I didn't want you to worry\"",
        "changeTips": "Open lightly without dumping everything: \"Today was rough — can you listen?\"\nRemember: them worrying isn't the same as you sharing your heart\nBefore hiding, ask once: would this really burden them?",
        "oneLiner": "Worry gets lighter when shared. Sharing care builds a stronger bond than hiding care",
        "shareLine": "Why do I keep telling little lies to my partner? Result: Worry-Shield Type 🌂 Apparently my little lies are kind ones so you won't worry... I got Worry-Shield lol what's your type?"
      },
      {
        "title": "Someone whose mouth jumps first, the Reflex Habit Type ⚡",
        "typeName": "Reflex Habit Type",
        "realReason": "It's a habit — the words leave your mouth before you even think why",
        "shortDescription": "You're not trying to deceive on purpose. Your mouth answers before the question even finishes.",
        "description": "\"Yeah I know,\" \"it's nothing,\" \"still looking good\" slip out with no plan — then later you think \"wait, that wasn't true.\" It's less a heart reason and more a hardened answering habit.",
        "keywords": "Reflex answers, Mouth first, Out before thinking, Late regret, Locked-in habit",
        "strengths": "Quick wit that keeps conversation light and moving",
        "reasonDetail": "When you feel you must answer instantly, when chat is flying back and forth",
        "frequentSaying": "\"Oh wait — actually...\"",
        "changeTips": "Make a rule: take one breath and answer after three seconds\nIf a reflex answer was wrong, correct it right away: \"Hang on — here's what really happened\"\nWrite down one or two frequent fibs and prepare the true line for those moments",
        "oneLiner": "If it's habit, not heart, three seconds of pause can change it",
        "shareLine": "Why do I keep telling little lies to my partner? Result: Reflex Habit Type ⚡ Apparently my mouth jumps first for no reason... I got Reflex Habit lol creepy — what's yours?"
      },
      {
        "title": "Someone who reshapes the truth to match expectations, the Expectation-Matcher Type 🎯",
        "typeName": "Expectation-Matcher Type",
        "realReason": "You change the facts trying to match the person they expect you to be",
        "shortDescription": "You're not trying to deceive. Stepping outside what they expect of you feels unsafe, so you reshape yourself.",
        "description": "You feel you must always be the chill one, the open one, the steady one — so you can't voice hurt or mistakes. Disappointing their expectations feels like love shrinking, so you edit the truth into a version they'd like.",
        "keywords": "Matching expectations, Fear of disappointing, Always steady, Being who they want, Pressure",
        "strengths": "Strong sense of responsibility and earnest effort to meet what they hope for",
        "reasonDetail": "When their expectations of you are clear, when you need to admit a mistake or hurt",
        "frequentSaying": "\"I didn't want to disappoint you\"",
        "changeTips": "Ask directly: \"What do you actually want from me?\" and check the size of the imagined expectation\nDeliberately show one imperfect side and notice their real reaction\nRewrite \"I must be this to be loved\" into \"I can still be loved as this\"",
        "oneLiner": "Love that only matches expectations wears you out. The real ones stay even when you look different",
        "shareLine": "Why do I keep telling little lies to my partner? Result: Expectation-Matcher Type 🎯 Apparently I rewrite facts to match what they expect... I got Expectation-Matcher lol that hits — you?"
      }
    ]
  },
  "ja": {
    "meta": {
      "title": "なぜ恋人に小さな嘘をついてしまうの？",
      "description": "言わなくてもいいのに、ついごまかしちゃうのはなぜ？ 10の場面で、小さな嘘の本当の理由と正直になれる方法を教えます。",
      "tags": [
        "恋愛の嘘",
        "恋愛心理",
        "恋愛タイプ"
      ]
    },
    "questions": [
      {
        "q": "帰りが遅くなり、恋人が「もう家に向かってる？」と聞いてきた。実は友達と飲んでいる最中。あなたは？",
        "opts": [
          "正直に言うと話が長くなって空気が重くなりそうで「うん、向かってるよ」と言う",
          "心配させたくなくてとりあえず「うん、向かってる。大丈夫だよ」と言う",
          "考える前に「うん、向かってるよ」が口から先に出る",
          "遅くまで遊んでたと言うとがっかりされそうで、期待される真面目な姿に合わせて「うん、早めに帰るよ」と言う"
        ]
      },
      {
        "q": "恋人がくれたプレゼントが好みじゃない。「気に入った？」と聞かれて、あなたは？",
        "opts": [
          "丁寧に選んでくれたのを知ってるし、がっかりした顔を見せたら傷つくと思うので気に入ったと言う",
          "特に考えず「うん、好き」が先に出る",
          "もらったら喜ぶべきという期待に合わせて、大げさに喜ぶ顔をする",
          "好みじゃないと分かるとセンスがないと思われそうで、気に入った理由を作って付ける"
        ]
      },
      {
        "q": "恋人が「今日のお昼なに食べた？」と聞いた。実はコンビニで適当に済ませた。あなたは？",
        "opts": [
          "考える前に「定食食べたよ」が口から先に出る",
          "ちゃんと食べてる人という期待に合わせて「ちゃんと食べたよ」と言う",
          "適当に食べた姿が情けなく見えそうで、少しマシなメニューに言い換える",
          "健康を気にしろという説教が続きそうで「お弁当食べたよ」と流す"
        ]
      },
      {
        "q": "恋人が遅刻して謝りながら「すごく待った？」と聞く。実は30分待った。あなたは？",
        "opts": [
          "いつも大丈夫な人でいなきゃと思って寂しさをしまい、「全然待ってないよ」と言う",
          "クールな人に見せたくて「私も今来たところ」と笑ってごまかす",
          "正直に待ったと言うと喧嘩になりそうで「ううん、私も今来た」と言う",
          "申し訳なさそうな顔が気になって「大丈夫、そんな待ってないよ」と言う"
        ]
      },
      {
        "q": "恋人が「最近なにかあった？表情がよくないよ」と聞く。実は仕事で辛いことがあった。あなたは？",
        "opts": [
          "辛い姿は見せたくなくて、恋人の前ではいつも元気な人みたいに「なんでもないよ」と言う",
          "話し出すと話が大きくなって空気が重くなりそうで「ううん、疲れてるだけ」と言う",
          "辛い話をすると気にして心配しそうで「なんでもないよ」と言う",
          "質問が来た瞬間「なんでもない」が反射的に出る"
        ]
      },
      {
        "q": "恋人が「今日ほかの人と一緒にいた？」と軽く聞いた。実は同僚と二人で食事した。あなたは？",
        "opts": [
          "質問が来た瞬間、習慣で「ううん」が先に出る",
          "恋人が期待する一途な姿からズレたくなくて「ううん、一人で食べた」と言う",
          "正直に言うと誤解されて空気が悪くなりそうで「一人で食べた」と言う",
          "余計に気にさせたくなくて、大したことない感じで「一人だったよ」と言う"
        ]
      },
      {
        "q": "恋人が「これ知ってる？」と聞いてきたが、実はよく知らない話。あなたは？",
        "opts": [
          "知らないと言うと会話が気まずくなってがっかりされそうで、期待どおり知ってるフリで相づちを打つ",
          "知らないと言うと無知に見えそうで、知ってるフリをしてうなずく",
          "知らないと言うと相手が説明に頑張ってしまいそうで申し訳なく、「うん、知ってる」と流す",
          "考えるより先に「うん、知ってる〜」が出てしまってから後悔する"
        ]
      },
      {
        "q": "恋人がくれた花束が枯れて、実はもう捨てた。「まだ元気？」と聞かれて、あなたは？",
        "opts": [
          "プレゼントを捨てた人みたいに見られたくなくて、大切にしている人のフリで「うん、ちゃんと飾ってるよ」と言う",
          "捨てたと言うと寂しがられて長い話になりそうで「うん、元気だよ」と言う",
          "聞かれると特に考えず「うん〜元気だよ」が習慣のように出る",
          "プレゼントを大切にする人でいなきゃという期待に合わせて「うん、ちゃんと飾ってるよ」と言う"
        ]
      },
      {
        "q": "恋人が「私に隠してることないよね？」と聞いた。実は些細なことを隠している。あなたは？",
        "opts": [
          "言ったら大きくなりそうで「ないよ」と切り捨てて流す",
          "心配させたくない気持ちが先に立って「うん、ないよ」と言う",
          "隠し事のない素直な人でいなきゃという期待に合わせて「もちろんないよ」と言う",
          "隠してる人に見られるのが恥ずかしくて、堂々としたフリで「ないよ、心配しないで」と言う"
        ]
      },
      {
        "q": "小さな嘘がバレて、恋人が「なんで隠したの？」と聞く。いちばん近い本音は？",
        "opts": [
          "心配する顔を見たくなくて隠した",
          "考えてついた嘘というより、自分でも気づかないうちに習慣のように出た",
          "ありのままを言うとダメな人に見えそうで、少しマシに見せたくて塗りたくなった",
          "そのまま言うと喧嘩になりそうで避けたかった"
        ]
      }
    ],
    "results": [
      {
        "title": "いいところだけ見せたい人、体面ガード型 🛡️",
        "typeName": "体面ガード型",
        "realReason": "足りない自分がバレるのが居心地悪くて、大丈夫なフリで塗り替える",
        "shortDescription": "あなたは騙そうとしているのではありません。恋人の前でもう少しちゃんとした自分でいたい気持ちが、小さな塗り替えを生んでいます。",
        "description": "適当に済ませた昼ごはんを少しマシなメニューに言い換えたり、知らない話に知ったかぶりしたり、大丈夫じゃないのに大丈夫と言ったりします。悪意ではなく、イメージを守りたい心から出る行動です。ただ塗り替えが積もると、相手は本当の自分を知る機会が減ります。",
        "keywords": "イメージ管理、知ったかぶり、大丈夫なフリ、塗り替え、足りなさ隠し",
        "strengths": "自己管理に気を配り、相手にいい姿を見せようとする誠実さ",
        "reasonDetail": "足りなく見えそうな日常や知らない話が出たとき、弱い姿を見せそうなとき",
        "frequentSaying": "「うん知ってる、私もそれくらいやるよ」",
        "changeTips": "小さな足りなさのひとつをわざと先に言ってみる。例：「実は今日適当に食べた」\n知らない話が出たら「それよく知らない、教えて」と一度言ってみる\n相手が弱い姿を見ても離れなかった経験を思い浮かべてみる",
        "oneLiner": "塗り替えのない姿のほうが、かえって近く感じます。小さな正直さから始めてみて",
        "shareLine": "なぜ恋人に小さな嘘をついてしまうの？結果：体面ガード型 🛡️ 足りなく見えそうで大丈夫なフリで塗り替えるらしい…私、体面ガード型出たwww あなたはなに出た？"
      },
      {
        "title": "喧嘩になりそうで先に折る人、衝突回避型 🕊️",
        "typeName": "衝突回避型",
        "realReason": "正直に言ったあとに来る気まずい空気を避けたくてごまかす",
        "shortDescription": "あなたは嘘つきではありません。事実を言ったあとに続く口論や長い話が負担で、いちばん早い道を選んでいます。",
        "description": "遅くまで遊んだ話、長く待った話、寂しかった話が出る瞬間に衝突が始まりそうで、「大丈夫」「ううん」で折ります。空気は守られますが、言わなかった事実は消えず、バレたときはもっと大きな信頼問題として戻ってくることもあります。",
        "keywords": "空気優先、大丈夫、長い話が負担、衝突予防、バレたときの後始末",
        "strengths": "平和な空気をつくり、いらない喧嘩を減らすセンス",
        "reasonDetail": "事実を言うと説教や口論が続きそうなとき、寂しさや不快を伝えなきゃいけないとき",
        "frequentSaying": "「もういいよ、大したことない」",
        "changeTips": "気まずい事実を言うとき「喧嘩したいんじゃなくて、知ってほしくて」から始める\n「事実ひとこと＋気持ちひとこと」だけ短く言って、話を長く引きずらない\n小さな事実からその日のうちに言ってみて、言っても関係が壊れない経験を積む",
        "oneLiner": "話すことと喧嘩することは違います。小さく先に言うほど、バレたときの喧嘩は減ります",
        "shareLine": "なぜ恋人に小さな嘘をついてしまうの？結果：衝突回避型 🕊️ 喧嘩になりそうでごまかすらしい…私、衝突回避型出たwww わかる、あなたは？"
      },
      {
        "title": "心配させたくなくて隠す人、心配シャット型 🌂",
        "typeName": "心配シャット型",
        "realReason": "相手が心配したり心を痛めたりするのを先に止めたい",
        "shortDescription": "あなたは隠そうとしているのではありません。相手が心配することを先に防ぎたい気持ちです。",
        "description": "辛いことがあっても「なんでもない」と言い、気にさせそうなことは「大したことない」で流します。相手の心を大切にしたい優しい選択ですが、相手はあなたの辛さを知らないまま過ぎてしまい、あとで知るとむしろ寂しく感じることもあります。",
        "keywords": "心配止め、心をいたわる、なんでもない、優しい嘘、一人で抱える",
        "strengths": "温かく、相手の気持ちを先に察し、負担をかけまいとする思いやり",
        "reasonDetail": "辛いことがあるとき、相手が心を痛めそうな事実があるとき",
        "frequentSaying": "「心配させたくなくて言わなかった」",
        "changeTips": "心配させすぎない範囲で「今日ちょっとつらかった、聞いてくれる？」と軽く先に出す\n相手が心配することと、自分の気持ちを分かち合うことは違うと覚えておく\n隠したくなったとき「言ったら相手は本当に負担かな？」を一度確かめてみる",
        "oneLiner": "心配は分かち合うほど軽くなります。隠す思いやりより、分け合う思いやりのほうが関係を強くします",
        "shareLine": "なぜ恋人に小さな嘘をついてしまうの？結果：心配シャット型 🌂 心配させたくなくて隠す優しい嘘らしい…私、心配シャット型出たwww あなたはどのタイプ？"
      },
      {
        "title": "口が先に出ちゃう人、反射習慣型 ⚡",
        "typeName": "反射習慣型",
        "realReason": "理由を考える前に口から先に出てしまう習慣",
        "shortDescription": "あなたはわざと騙そうとしているのではありません。質問が終わる前に口が先に答えてしまう反射の習慣です。",
        "description": "「うん知ってる」「大したことない」「ちゃんと飾ってるよ」が意図なく先に出て、しばらくしてから「あ、本当は違った」と後悔がついてきます。心の理由というより、答え方のクセが固まってできたパターンです。",
        "keywords": "反射的な答え、口が先、考える前に出る、あとからの後悔、固まった習慣",
        "strengths": "会話の流れを素早くつなぎ、空気を軽くする瞬発力",
        "reasonDetail": "質問を受けた瞬間すぐ答えなきゃと思ったとき、会話がテンポよく飛び交うとき",
        "frequentSaying": "「あ、そうだ、本当は…」",
        "changeTips": "質問を受けたら一呼吸おいて、3秒あとで答えるルールをつくる\n反射で出た言葉が事実と違ったらすぐ「あ待って、本当はこうだった」と訂正する\nよくつく嘘を一二個書き出して、その場面で使う本当の一文を決めておく",
        "oneLiner": "心の問題じゃなく習慣の問題なら、3秒のゆとりだけで変わります",
        "shareLine": "なぜ恋人に小さな嘘をついてしまうの？結果：反射習慣型 ⚡ 理由もなく口が先に出るらしい…私、反射習慣型出たwww こわ、あなたはなに？"
      },
      {
        "title": "期待に合わせて形を変える人、期待合わせ型 🎯",
        "typeName": "期待合わせ型",
        "realReason": "恋人が期待する姿に合わせようとして事実を変えてしまう",
        "shortDescription": "あなたは騙そうとしているのではありません。相手が期待する姿から外れるのが不安で、形を合わせています。",
        "description": "いつも大丈夫な人、隠し事のない人、一途な人でいなきゃと感じて、寂しさやミスを言えません。相手の期待を裏切った瞬間に愛が減りそうで、事実を相手が好きそうな姿に変えて話します。",
        "keywords": "期待合わせ、がっかりさせたくない、一途な人、相手が望む姿、プレッシャー",
        "strengths": "責任感が強く、相手の期待に誠実に応えようとする努力",
        "reasonDetail": "相手が自分に期待する姿がはっきりしているとき、ミスや寂しさを言わなきゃいけないとき",
        "frequentSaying": "「がっかりさせたくなかった」",
        "changeTips": "相手に「私に何を期待してる？」と直接聞いて、想像の中の期待の大きさを確かめる\n完璧じゃない姿をひとつわざと見せて、相手の反応を確認する\n「こうでなきゃ愛されない」という文を「こうでも愛されうる」に書き換えてみる",
        "oneLiner": "期待に合わせる愛は長く疲れます。違って見えてもそばに残る人が本物です",
        "shareLine": "なぜ恋人に小さな嘘をついてしまうの？結果：期待合わせ型 🎯 相手の期待に合わせて事実を変えるらしい…私、期待合わせ型出たwww 刺さる、あなたは？"
      }
    ]
  },
  "zh-CN": {
    "meta": {
      "title": "为什么总对恋人说些无关紧要的小谎？",
      "description": "明明不用说，为什么还是会随口圆过去？用10个情境找出你说小谎的真正原因，以及怎样变得更坦诚。",
      "tags": [
        "恋爱小谎",
        "恋爱心理",
        "恋爱类型"
      ]
    },
    "questions": [
      {
        "q": "你下班晚了，恋人问「已经在回家路上了吗？」其实你正和朋友喝酒。你会？",
        "opts": [
          "说实话会扯很久、气氛也尴尬，于是说「嗯，在路上了」",
          "不想让对方担心，先说「嗯，在路上，没事」",
          "还没想清楚，「嗯，在路上了」就先脱口而出",
          "说玩到很晚会让对方失望，于是顺着对方期待的靠谱样子说「嗯，早点回去了」"
        ]
      },
      {
        "q": "恋人送的礼物不合你口味。「喜欢吗？」你会？",
        "opts": [
          "知道对方精心挑过，怕对方伤心，就说喜欢",
          "没多想，「嗯，喜欢」先出口",
          "为了符合「收到礼物就该开心」的期待，故意表现得很高兴",
          "怕显得没品位，就编几个喜欢的理由"
        ]
      },
      {
        "q": "恋人问「今天中午吃了什么？」其实你随便吃了便利店。你会？",
        "opts": [
          "还没想，「随便吃了点」就先出口",
          "为了符合「会好好吃饭」的期待，说「好好吃了」",
          "怕随便吃显得邋遢，就换成听起来体面一点的菜",
          "怕对方唠叨让你注意身体，就说「吃便当了」糊弄过去"
        ]
      },
      {
        "q": "恋人迟到了，一边道歉一边问「等很久了吗？」其实你等了30分钟。你会？",
        "opts": [
          "觉得自己该一直是「没事」的人，收起委屈说「几乎没等」",
          "想显得很酷，笑着说「我也刚到」",
          "说实话怕吵起来，就说「没有，我也刚到」",
          "看对方内疚心疼，就说「没事，没等多久」"
        ]
      },
      {
        "q": "恋人问「最近有事吗？脸色不太好。」其实工作很难受。你会？",
        "opts": [
          "不想显得脆弱，在恋人面前总像一切都好，说「没事」",
          "一说出来事情会变大、气氛变沉，于是说「没有，就是累」",
          "怕对方操心担心，说「没事」",
          "一被问到，「没事」就反射性蹦出来"
        ]
      },
      {
        "q": "恋人随口问「你今天是不是跟别人在一起？」其实你和同事单独吃了饭。你会？",
        "opts": [
          "一被问到，习惯性先说「没有」",
          "怕偏离对方期待的专一形象，说「没有，自己吃的」",
          "说实话怕被误会、气氛尴尬，说「自己吃的」",
          "不想让对方瞎想，轻描淡写说「一个人待着」"
        ]
      },
      {
        "q": "恋人问「这个你知道吗？」其实你不太懂。你会？",
        "opts": [
          "说不知道会尴尬、对方也会失望，就顺着对方期待假装知道地附和",
          "说不知道显得没见识，于是装懂点头",
          "说不知道对方还要费劲解释，心里过意不去，就说「嗯，知道」",
          "还没想清楚，「嗯，知道～」就先出来，然后才后悔"
        ]
      },
      {
        "q": "恋人送的花已经蔫了，其实你扔了。对方问「还好好的吗？」你会？",
        "opts": [
          "不想被看成扔掉礼物的人，假装很珍惜地说「嗯，好好摆着」",
          "说扔了对方会难过、聊很久，于是说「嗯，还好」",
          "一被问到，习惯性地「嗯～还好」就出来",
          "为了符合「会珍惜礼物」的期待，说「嗯，好好摆着」"
        ]
      },
      {
        "q": "恋人问「你没有瞒着我什么吧？」其实你瞒了件小事。你会？",
        "opts": [
          "一说就会闹大，干脆说「没有」带过",
          "不想让对方担心的心思抢先，说「嗯，没有」",
          "为了符合「毫无隐瞒」的期待，说「当然没有」",
          "被当成藏事的人很丢脸，装坦然说「没有，别担心」"
        ]
      },
      {
        "q": "小谎被发现了，恋人问「为什么要瞒？」最接近你的真心是？",
        "opts": [
          "不想看到对方担心的样子，所以瞒了",
          "不是想好了才说的谎，更像自己也不知道就习惯性说出口",
          "照实说会显得自己很差，想稍微修饰一下",
          "直接说怕吵起来，想躲开"
        ]
      }
    ],
    "results": [
      {
        "title": "只想展示好的一面的人，面子防御型 🛡️",
        "typeName": "面子防御型",
        "realReason": "怕被看出自己不够好，就用「没事」的样子稍微粉饰",
        "shortDescription": "你不是想骗人。只是想在恋人面前看起来更像样一点，于是出现了小小的粉饰。",
        "description": "你会把随便吃的午餐说得体面一点，不懂也装懂，明明不好也说没事。不是恶意，是想守住形象。可粉饰一多，对方就越难看到真实的你。",
        "keywords": "形象管理、装懂、装作没事、粉饰、藏起不足",
        "strengths": "在意自我管理，认真想给对方看更好的一面",
        "reasonDetail": "日常里可能显得不够好、遇到不懂的话题、可能露出软弱时",
        "frequentSaying": "「嗯知道，这点我也会」",
        "changeTips": "故意先说出一个小不足。例：「其实今天随便吃的」\n遇到不懂的话题，试一次说「这个我不太懂，你讲讲」\n回想对方见过你软弱却没有变心的经历",
        "oneLiner": "不粉饰的样子反而更亲近。从小小的坦诚开始吧",
        "shareLine": "为什么总对恋人说些无关紧要的小谎？结果：面子防御型 🛡️ 怕显得不够好就粉饰一下……我测出面子防御型哈哈 你呢？"
      },
      {
        "title": "怕吵起来先软下去的人，回避冲突型 🕊️",
        "typeName": "回避冲突型",
        "realReason": "怕说实话后气氛尴尬，所以先圆过去",
        "shortDescription": "你不是骗子。只是觉得说实话后面可能跟着争执或长谈，负担太重，于是选了最快的路。",
        "description": "一提到玩到很晚、等了很久、心里委屈，就觉得冲突要开始了，于是用「没事」「没有」收住。气氛保住了，没说出口的事实却不会消失；一旦被发现，信任问题会更大。",
        "keywords": "气氛优先、没事、怕长谈、预防冲突、被发现后的反噬",
        "strengths": "会制造平和气氛，减少不必要的争吵",
        "reasonDetail": "说实话可能招来唠叨或争执时，需要表达委屈或不适时",
        "frequentSaying": "「算了吧，没什么」",
        "changeTips": "说尴尬事实时，用「不是想吵，只是想让你知道」开头\n只说「事实一句 + 心情一句」，别把对话拖很长\n从小事当天说起，积累「说了关系也不会垮」的经验",
        "oneLiner": "说话和吵架不是一回事。越小越早说，被发现时的吵就越少",
        "shareLine": "为什么总对恋人说些无关紧要的小谎？结果：回避冲突型 🕊️ 怕吵就先圆过去……我测出回避冲突型哈哈 你懂吗？"
      },
      {
        "title": "不想让对方担心而隐瞒的人，挡忧型 🌂",
        "typeName": "挡忧型",
        "realReason": "怕对方担心或心疼，就先把事挡在外面",
        "shortDescription": "你不是想隐瞒。你是想提前挡住会让对方担心的事。",
        "description": "再难受也说「没事」，可能让对方操心的事一律「没什么」。这是心疼对方的温柔选择，可对方可能不知道你在撑；事后知道了，反而会觉得被排除在外。",
        "keywords": "挡住担心、心疼对方、没事、温柔的谎、独自扛",
        "strengths": "温暖、先体察对方心情、尽量不添负担",
        "reasonDetail": "自己难受时，有可能让对方心疼的事实时",
        "frequentSaying": "「怕你担心就没说」",
        "changeTips": "轻一点先开口：「今天有点难受，你能听听吗？」\n记住：对方担心，和你分享心情，不是一回事\n想隐瞒时先问一次：说出来对方真的会有负担吗？",
        "oneLiner": "担心越分享越轻。分享式的体贴，比隐瞒式的体贴更让关系稳固",
        "shareLine": "为什么总对恋人说些无关紧要的小谎？结果：挡忧型 🌂 怕你担心才隐瞒的温柔小谎……我测出挡忧型哈哈 你是哪一型？"
      },
      {
        "title": "嘴比脑子快的人，习惯反射型 ⚡",
        "typeName": "习惯反射型",
        "realReason": "还没想清楚原因，话已经先出口的习惯",
        "shortDescription": "你不是故意骗人。问题还没问完，嘴已经先答上了——这是反射习惯。",
        "description": "「嗯知道」「没事」「还好好摆着」没有预谋就先出来，过一会儿才后悔「其实不是那样」。与其说是心里的理由，不如说是回答方式固化成了习惯。",
        "keywords": "反射回答、嘴先走、未想先说、事后后悔、固化习惯",
        "strengths": "能快速接住对话、让气氛轻松的反应力",
        "reasonDetail": "觉得必须立刻回答时，对话来回很快时",
        "frequentSaying": "「啊对了，其实……」",
        "changeTips": "定个规矩：被问到先深呼吸，三秒后再答\n反射说错了立刻改：「等下，其实是这样」\n把常说的一两句谎写下来，提前准备好真话句子",
        "oneLiner": "如果是习惯问题而不是心的问题，三秒的空隙就够改变",
        "shareLine": "为什么总对恋人说些无关紧要的小谎？结果：习惯反射型 ⚡ 没理由嘴就先出去……我测出习惯反射型哈哈 细思极恐，你呢？"
      },
      {
        "title": "为迎合期待而改写事实的人，迎合期待型 🎯",
        "typeName": "迎合期待型",
        "realReason": "想符合恋人期待的样子，于是改写了事实",
        "shortDescription": "你不是想骗人。只是偏离对方期待让你不安，于是把样子往对方想要的方向靠。",
        "description": "觉得自己必须一直是没事的人、毫无隐瞒的人、始终如一的人，于是说不出委屈和失误。一想到让对方失望，爱好像就会变少，于是把事实改成对方喜欢听的版本。",
        "keywords": "迎合期待、怕让人失望、始终如一、对方想要的样子、压力",
        "strengths": "责任感强，认真努力回应对方的期待",
        "reasonDetail": "对方对你的期待很清楚时，需要说出失误或委屈时",
        "frequentSaying": "「不想让你失望」",
        "changeTips": "直接问对方「你对我有什么期待？」核对想象中的期待有多大\n故意露出一点不完美，看看对方真实反应\n把「必须这样才被爱」改写成「这样也能被爱」",
        "oneLiner": "只靠迎合期待的爱会很累。就算样子不同仍留下的人，才是真的",
        "shareLine": "为什么总对恋人说些无关紧要的小谎？结果：迎合期待型 🎯 为了符合期待就改写事实……我测出迎合期待型哈哈 扎心，你呢？"
      }
    ]
  },
  "zh-TW": {
    "meta": {
      "title": "為什麼總對戀人說些無關緊要的小謊？",
      "description": "明明不用說，為什麼還是會隨口圓過去？用10個情境找出你說小謊的真正原因，以及怎樣變得更坦誠。",
      "tags": [
        "戀愛小謊",
        "戀愛心理",
        "戀愛類型"
      ]
    },
    "questions": [
      {
        "q": "你下班晚了，戀人問「已經在回家路上了嗎？」其實你正和朋友喝酒。你會？",
        "opts": [
          "說實話會扯很久、氣氛也尷尬，於是說「嗯，在路上了」",
          "不想讓對方擔心，先說「嗯，在路上，沒事」",
          "還沒想清楚，「嗯，在路上了」就先脫口而出",
          "說玩到很晚會讓對方失望，於是順著對方期待的靠譜樣子說「嗯，早點回去了」"
        ]
      },
      {
        "q": "戀人送的禮物不合你口味。「喜歡嗎？」你會？",
        "opts": [
          "知道對方精心挑過，怕對方傷心，就說喜歡",
          "沒多想，「嗯，喜歡」先出口",
          "為了符合「收到禮物就該開心」的期待，故意表現得很高興",
          "怕顯得沒品位，就編幾個喜歡的理由"
        ]
      },
      {
        "q": "戀人問「今天中午吃了什麼？」其實你隨便吃了便利店。你會？",
        "opts": [
          "還沒想，「隨便吃了點」就先出口",
          "為了符合「會好好吃飯」的期待，說「好好吃了」",
          "怕隨便吃顯得邋遢，就換成聽起來體面一點的菜",
          "怕對方嘮叨讓你注意身體，就說「吃便當了」糊弄過去"
        ]
      },
      {
        "q": "戀人遲到了，一邊道歉一邊問「等很久了嗎？」其實你等了30分鐘。你會？",
        "opts": [
          "覺得自己該一直是「沒事」的人，收起委屈說「幾乎沒等」",
          "想顯得很酷，笑著說「我也剛到」",
          "說實話怕吵起來，就說「沒有，我也剛到」",
          "看對方內疚心疼，就說「沒事，沒等多久」"
        ]
      },
      {
        "q": "戀人問「最近有事嗎？臉色不太好。」其實工作很難受。你會？",
        "opts": [
          "不想顯得脆弱，在戀人面前總像一切都好，說「沒事」",
          "一說出來事情會變大、氣氛變沉，於是說「沒有，就是累」",
          "怕對方操心擔心，說「沒事」",
          "一被問到，「沒事」就反射性蹦出來"
        ]
      },
      {
        "q": "戀人隨口問「你今天是不是跟別人在一起？」其實你和同事單獨吃了飯。你會？",
        "opts": [
          "一被問到，習慣性先說「沒有」",
          "怕偏離對方期待的專一形象，說「沒有，自己吃的」",
          "說實話怕被誤會、氣氛尷尬，說「自己吃的」",
          "不想讓對方瞎想，輕描淡寫說「一個人待著」"
        ]
      },
      {
        "q": "戀人問「這個你知道嗎？」其實你不太懂。你會？",
        "opts": [
          "說不知道會尷尬、對方也會失望，就順著對方期待假裝知道地附和",
          "說不知道顯得沒見識，於是裝懂點頭",
          "說不知道對方還要費勁解釋，心裡過意不去，就說「嗯，知道」",
          "還沒想清楚，「嗯，知道～」就先出來，然後才後悔"
        ]
      },
      {
        "q": "戀人送的花已經蔫了，其實你扔了。對方問「還好好的嗎？」你會？",
        "opts": [
          "不想被看成扔掉禮物的人，假裝很珍惜地說「嗯，好好擺著」",
          "說扔了對方會難過、聊很久，於是說「嗯，還好」",
          "一被問到，習慣性地「嗯～還好」就出來",
          "為了符合「會珍惜禮物」的期待，說「嗯，好好擺著」"
        ]
      },
      {
        "q": "戀人問「你沒有瞞著我什麼吧？」其實你瞞了件小事。你會？",
        "opts": [
          "一說就會鬧大，乾脆說「沒有」帶過",
          "不想讓對方擔心的心思搶先，說「嗯，沒有」",
          "為了符合「毫無隱瞞」的期待，說「當然沒有」",
          "被當成藏事的人很丟臉，裝坦然說「沒有，別擔心」"
        ]
      },
      {
        "q": "小謊被發現了，戀人問「為什麼要瞞？」最接近你的真心是？",
        "opts": [
          "不想看到對方擔心的樣子，所以瞞了",
          "不是想好了才說的謊，更像自己也不知道就習慣性說出口",
          "照實說會顯得自己很差，想稍微修飾一下",
          "直接說怕吵起來，想躲開"
        ]
      }
    ],
    "results": [
      {
        "title": "只想展示好的一面的人，面子防禦型 🛡️",
        "typeName": "面子防禦型",
        "realReason": "怕被看出自己不夠好，就用「沒事」的樣子稍微粉飾",
        "shortDescription": "你不是想騙人。只是想在戀人面前看起來更像樣一點，於是出現了小小的粉飾。",
        "description": "你會把隨便吃的午餐說得體面一點，不懂也裝懂，明明不好也說沒事。不是惡意，是想守住形象。可粉飾一多，對方就越難看到真實的你。",
        "keywords": "形象管理、裝懂、裝作沒事、粉飾、藏起不足",
        "strengths": "在意自我管理，認真想給對方看更好的一面",
        "reasonDetail": "日常裡可能顯得不夠好、遇到不懂的話題、可能露出軟弱時",
        "frequentSaying": "「嗯知道，這點我也會」",
        "changeTips": "故意先說出一個小不足。例：「其實今天隨便吃的」\n遇到不懂的話題，試一次說「這個我不太懂，你講講」\n回想對方見過你軟弱卻沒有變心的經歷",
        "oneLiner": "不粉飾的樣子反而更親近。從小小的坦誠開始吧",
        "shareLine": "為什麼總對戀人說些無關緊要的小謊？結果：面子防禦型 🛡️ 怕顯得不夠好就粉飾一下……我測出面子防禦型哈哈 你呢？"
      },
      {
        "title": "怕吵起來先軟下去的人，迴避衝突型 🕊️",
        "typeName": "迴避衝突型",
        "realReason": "怕說實話後氣氛尷尬，所以先圓過去",
        "shortDescription": "你不是騙子。只是覺得說實話後面可能跟著爭執或長談，負擔太重，於是選了最快的路。",
        "description": "一提到玩到很晚、等了很久、心裡委屈，就覺得衝突要開始了，於是用「沒事」「沒有」收住。氣氛保住了，沒說出口的事實卻不會消失；一旦被發現，信任問題會更大。",
        "keywords": "氣氛優先、沒事、怕長談、預防衝突、被發現後的反噬",
        "strengths": "會製造平和氣氛，減少不必要的爭吵",
        "reasonDetail": "說實話可能招來嘮叨或爭執時，需要表達委屈或不適時",
        "frequentSaying": "「算了吧，沒什麼」",
        "changeTips": "說尷尬事實時，用「不是想吵，只是想讓你知道」開頭\n只說「事實一句 + 心情一句」，別把對話拖很長\n從小事當天說起，積累「說了關係也不會垮」的經驗",
        "oneLiner": "說話和吵架不是一回事。越小越早說，被發現時的吵就越少",
        "shareLine": "為什麼總對戀人說些無關緊要的小謊？結果：迴避衝突型 🕊️ 怕吵就先圓過去……我測出迴避衝突型哈哈 你懂嗎？"
      },
      {
        "title": "不想讓對方擔心而隱瞞的人，擋憂型 🌂",
        "typeName": "擋憂型",
        "realReason": "怕對方擔心或心疼，就先把事擋在外面",
        "shortDescription": "你不是想隱瞞。你是想提前擋住會讓對方擔心的事。",
        "description": "再難受也說「沒事」，可能讓對方操心的事一律「沒什麼」。這是心疼對方的溫柔選擇，可對方可能不知道你在撐；事後知道了，反而會覺得被排除在外。",
        "keywords": "擋住擔心、心疼對方、沒事、溫柔的謊、獨自扛",
        "strengths": "溫暖、先體察對方心情、儘量不添負擔",
        "reasonDetail": "自己難受時，有可能讓對方心疼的事實時",
        "frequentSaying": "「怕你擔心就沒說」",
        "changeTips": "輕一點先開口：「今天有點難受，你能聽聽嗎？」\n記住：對方擔心，和你分享心情，不是一回事\n想隱瞞時先問一次：說出來對方真的會有負擔嗎？",
        "oneLiner": "擔心越分享越輕。分享式的體貼，比隱瞞式的體貼更讓關係穩固",
        "shareLine": "為什麼總對戀人說些無關緊要的小謊？結果：擋憂型 🌂 怕你擔心才隱瞞的溫柔小謊……我測出擋憂型哈哈 你是哪一型？"
      },
      {
        "title": "嘴比腦子快的人，習慣反射型 ⚡",
        "typeName": "習慣反射型",
        "realReason": "還沒想清楚原因，話已經先出口的習慣",
        "shortDescription": "你不是故意騙人。問題還沒問完，嘴已經先答上了——這是反射習慣。",
        "description": "「嗯知道」「沒事」「還好好擺著」沒有預謀就先出來，過一會兒才後悔「其實不是那樣」。與其說是心裡的理由，不如說是回答方式固化成了習慣。",
        "keywords": "反射回答、嘴先走、未想先說、事後後悔、固化習慣",
        "strengths": "能快速接住對話、讓氣氛輕鬆的反應力",
        "reasonDetail": "覺得必須立刻回答時，對話來回很快時",
        "frequentSaying": "「啊對了，其實……」",
        "changeTips": "定個規矩：被問到先深呼吸，三秒後再答\n反射說錯了立刻改：「等下，其實是這樣」\n把常說的一兩句謊寫下來，提前準備好真話句子",
        "oneLiner": "如果是習慣問題而不是心的問題，三秒的空隙就夠改變",
        "shareLine": "為什麼總對戀人說些無關緊要的小謊？結果：習慣反射型 ⚡ 沒理由嘴就先出去……我測出習慣反射型哈哈 細思極恐，你呢？"
      },
      {
        "title": "為迎合期待而改寫事實的人，迎合期待型 🎯",
        "typeName": "迎合期待型",
        "realReason": "想符合戀人期待的樣子，於是改寫了事實",
        "shortDescription": "你不是想騙人。只是偏離對方期待讓你不安，於是把樣子往對方想要的方向靠。",
        "description": "覺得自己必須一直是沒事的人、毫無隱瞞的人、始終如一的人，於是說不出委屈和失誤。一想到讓對方失望，愛好像就會變少，於是把事實改成對方喜歡聽的版本。",
        "keywords": "迎合期待、怕讓人失望、始終如一、對方想要的樣子、壓力",
        "strengths": "責任感強，認真努力回應對方的期待",
        "reasonDetail": "對方對你的期待很清楚時，需要說出失誤或委屈時",
        "frequentSaying": "「不想讓你失望」",
        "changeTips": "直接問對方「你對我有什麼期待？」核對想象中的期待有多大\n故意露出一點不完美，看看對方真實反應\n把「必須這樣才被愛」改寫成「這樣也能被愛」",
        "oneLiner": "只靠迎合期待的愛會很累。就算樣子不同仍留下的人，才是真的",
        "shareLine": "為什麼總對戀人說些無關緊要的小謊？結果：迎合期待型 🎯 為了符合期待就改寫事實……我測出迎合期待型哈哈 扎心，你呢？"
      }
    ]
  },
  "vi": {
    "meta": {
      "title": "Tại sao lại hay nói dối nhỏ với người yêu?",
      "description": "Chẳng cần nói vậy mà sao vẫn hay viện cớ? 10 tình huống giúp bạn tìm ra lý do thật sự đằng sau lời nói dối nhỏ — và cách thành thật hơn.",
      "tags": [
        "Nói dối khi yêu",
        "Tâm lý tình yêu",
        "Kiểu yêu"
      ]
    },
    "questions": [
      {
        "q": "Bạn về muộn, đang nhậu với bạn. Người yêu hỏi \"Đã trên đường về chưa?\" Bạn...",
        "opts": [
          "Nói \"Ừ, đang về\" — nói thật sẽ dài dòng và không khí khó chịu",
          "Nói \"Ừ, đang về, không sao đâu\" — không muốn họ lo",
          "\"Ừ, đang về\" tuột miệng trước khi kịp nghĩ",
          "Nói \"Ừ, về sớm rồi\" để khớp hình ảnh đứng đắn họ kỳ vọng — về muộn sẽ làm họ thất vọng"
        ]
      },
      {
        "q": "Quà người yêu tặng không hợp gu. \"Có thích không?\" Bạn...",
        "opts": [
          "Nói thích — biết họ chọn kỹ, không muốn họ buồn",
          "\"Ừ, thích\" tuột miệng không kịp nghĩ",
          "Cố làm mặt vui để khớp kỳ vọng \"nhận quà phải vui\"",
          "Bịa lý do thích — thừa nhận không hợp sẽ trông kém tinh tế"
        ]
      },
      {
        "q": "Họ hỏi \"Trưa nay ăn gì?\" Thực ra bạn ăn tạm tiện lợi. Bạn...",
        "opts": [
          "\"Ăn tạm thôi\" tuột miệng trước khi nghĩ",
          "Nói \"Ăn tử tế rồi\" để khớp hình ảnh biết chăm sóc bản thân",
          "Nâng menu lên một chút để khỏi trông tội nghiệp vì ăn tạm",
          "Nói \"Ăn cơm hộp\" — không thì lại bị dặn \"phải biết giữ gìn sức khỏe\""
        ]
      },
      {
        "q": "Họ đến muộn, xin lỗi rồi hỏi \"Đợi lâu không?\" Bạn đã đợi 30 phút. Bạn...",
        "opts": [
          "Nuốt cảm giác tổn thương, nói \"Hầu như không đợi\" — cảm thấy mình phải luôn là người dễ chịu",
          "Cười xòa \"Tôi cũng vừa tới\" — muốn trông cool",
          "Nói \"Không, tôi cũng vừa tới\" — thừa nhận đợi lâu sợ thành cãi nhau",
          "Nói \"Không sao, không lâu đâu\" — thấy họ áy náy thì lòng cũng khó"
        ]
      },
      {
        "q": "Họ hỏi \"Gần đây có chuyện gì à? Trông mặt không ổn.\" Công việc thật sự nặng. Bạn...",
        "opts": [
          "Nói \"Không có gì\" — không muốn lộ yếu đuối; trước người yêu luôn trông ổn",
          "Nói \"Không, chỉ mệt thôi\" — mở ra sẽ làm không khí nặng",
          "Nói \"Không có gì\" — không muốn họ lo cho mình",
          "\"Không có gì\" bật ra phản xạ ngay khi bị hỏi"
        ]
      },
      {
        "q": "Họ hỏi nhẹ \"Hôm nay có đi với ai không?\" Thực ra bạn ăn riêng với đồng nghiệp. Bạn...",
        "opts": [
          "\"Không\" tuột miệng theo thói quen ngay khi bị hỏi",
          "Nói \"Không, ăn một mình\" — sợ lệch hình ảnh thủy chung họ kỳ vọng",
          "Nói \"Ăn một mình\" — nói thật dễ bị hiểu nhầm, không khí khó chịu",
          "Nói \"Ở một mình\" như chuyện nhỏ — không muốn họ nghĩ lung tung"
        ]
      },
      {
        "q": "Họ hỏi \"Cái này bạn biết không?\" Thực ra bạn không rõ. Bạn...",
        "opts": [
          "Gật theo như biết — nói không biết sẽ ngại và làm họ thất vọng",
          "Gật giả vờ biết — thừa nhận không biết sẽ trông kém hiểu biết",
          "Nói \"Ừ, biết\" — sợ họ phải mất công giải thích",
          "\"Ừ, biết~\" tuột miệng trước, rồi mới hối"
        ]
      },
      {
        "q": "Bó hoa họ tặng đã héo và bạn đã vứt. Họ hỏi \"Vẫn còn đẹp chứ?\" Bạn...",
        "opts": [
          "Nói \"Ừ, vẫn giữ đẹp\" — không muốn bị xem là người vứt quà",
          "Nói \"Ừ, vẫn ổn\" — thừa nhận đã vứt sẽ dẫn tới chuyện dài và tổn thương",
          "\"Ừ~ vẫn đẹp\" tuột miệng theo thói quen",
          "Nói \"Ừ, vẫn giữ đẹp\" để khớp kỳ vọng \"mình trân trọng quà của bạn\""
        ]
      },
      {
        "q": "Họ hỏi \"Không giấu gì chứ?\" Thực ra bạn đang giấu chuyện nhỏ. Bạn...",
        "opts": [
          "Cắt ngắn \"Không\" — nói ra sẽ phình to",
          "Nói \"Ừ, không\" — không muốn họ lo chiếm trước",
          "Nói \"Tất nhiên là không\" để khớp kỳ vọng \"mình luôn thẳng thắn\"",
          "Làm vẻ trong sạch \"Không, đừng lo\" — bị xem là người giấu chuyện thì xấu hổ"
        ]
      },
      {
        "q": "Lời nói dối nhỏ bị bắt, họ hỏi \"Sao lại giấu?\" Điều gần lòng bạn nhất là?",
        "opts": [
          "Giấu vì không muốn thấy họ lo",
          "Không phải nói dối có chủ đích — nó tuột miệng như thói quen",
          "Muốn tô đẹp một chút để khỏi trông tệ",
          "Chỉ muốn tránh một trận cãi"
        ]
      }
    ],
    "results": [
      {
        "title": "Người chỉ muốn hiện diện tốt đẹp, Kiểu bảo vệ thể diện 🛡️",
        "typeName": "Kiểu bảo vệ thể diện",
        "realReason": "Bạn tô thêm sự thật vì bị thấy là thiếu sót thì khó chịu",
        "shortDescription": "Bạn không cố lừa. Chỉ muốn trông khá hơn một chút trước người yêu, nên mới có những lớp tô nhỏ.",
        "description": "Bạn nâng bữa trưa tạm bợ lên cho nghe ổn hơn, giả vờ biết chuyện chưa rõ, nói \"không sao\" khi thật ra không ổn. Không phải ác ý — là muốn giữ hình ảnh. Nhưng tô càng nhiều, họ càng ít cơ hội biết bạn thật.",
        "keywords": "Quản lý hình ảnh, Giả vờ biết, Làm vẻ ổn, Tô điểm, Giấu thiếu sót",
        "strengths": "Quan tâm tự quản và chân thành muốn hiện diện tốt hơn với đối phương",
        "reasonDetail": "Khi chuyện thường ngày có thể trông thiếu sót, khi gặp chuyện chưa biết, khi yếu đuối có thể lộ",
        "frequentSaying": "\"Ừ biết, mình cũng làm được thế\"",
        "changeTips": "Cố ý nói trước một thiếu sót nhỏ. Ví dụ: \"Thật ra hôm nay ăn tạm thôi\"\nKhi không biết, thử một lần: \"Cái này mình không rõ lắm, kể đi\"\nNhớ lại lần họ thấy bạn yếu mà không quay đi",
        "oneLiner": "Bạn không tô điểm lại gần gũi hơn. Hãy bắt đầu từ một lần thành thật nhỏ",
        "shareLine": "Tại sao lại hay nói dối nhỏ với người yêu? Kết quả: Kiểu bảo vệ thể diện 🛡️ Hình như tô điểm để khỏi trông thiếu sót... mình ra kiểu này luôn haha bạn ra gì?"
      },
      {
        "title": "Người gập mình trước để tránh cãi, Kiểu tránh xung đột 🕊️",
        "typeName": "Kiểu tránh xung đột",
        "realReason": "Bạn viện vì sợ nói thật sẽ tạo không khí khó chịu",
        "shortDescription": "Bạn không phải kẻ nói dối. Chỉ là cuộc cãi hay cuộc nói dài sau sự thật nghe nặng hơn một lời viện nhanh.",
        "description": "Nói đi chơi muộn, đợi lâu, hay tổn thương cảm giác như xung đột sắp bắt đầu — nên bạn gập bằng \"không sao\" và \"không\". Không khí giữ được, sự thật không nói vẫn còn đó. Khi bị lộ, niềm tin tổn thương nặng hơn.",
        "keywords": "Ưu tiên không khí, Không sao, Ngại nói dài, Ngăn xung đột, Phản đòn khi bị lộ",
        "strengths": "Khéo giữ hòa khí và giảm những trận cãi không cần",
        "reasonDetail": "Khi nói thật có thể dẫn tới la mắng hay cãi, khi cần nói tổn thương hay khó chịu",
        "frequentSaying": "\"Thôi đi, chẳng có gì đâu\"",
        "changeTips": "Khi nói sự thật khó, mở đầu bằng \"Không phải muốn cãi — chỉ muốn bạn biết\"\nGiữ ngắn: một câu sự thật + một câu cảm xúc\nTập nói nhỏ ngay trong ngày để thấy nói ra không làm vỡ mối quan hệ",
        "oneLiner": "Nói và cãi không giống nhau. Càng nói nhỏ sớm, trận cãi khi bị lộ càng nhỏ",
        "shareLine": "Tại sao lại hay nói dối nhỏ với người yêu? Kết quả: Kiểu tránh xung đột 🕊️ Hình như viện để khỏi cãi... mình ra kiểu tránh xung đột haha bạn nữa chứ?"
      },
      {
        "title": "Người giấu để khỏi làm lo, Kiểu chặn lo lắng 🌂",
        "typeName": "Kiểu chặn lo lắng",
        "realReason": "Bạn chặn sự thật trước để họ khỏi lo hay đau lòng",
        "shortDescription": "Bạn không giấu để lừa. Bạn muốn chắn trước những gì có thể làm họ lo.",
        "description": "Dù khó khăn vẫn nói \"không có gì\", chuyện dễ làm họ lo đều \"chẳng sao\". Đó là lựa chọn dịu dàng — nhưng họ có thể không biết bạn đang nặng lòng; khi biết sau, lại thấy bị để ngoài cuộc.",
        "keywords": "Chặn lo, Thương lòng họ, Không có gì, Lời dối dịu dàng, Tự gánh một mình",
        "strengths": "Ấm áp, nhanh cảm nhận cảm xúc họ, cố không thêm gánh nặng",
        "reasonDetail": "Khi bản thân đang khó, khi có sự thật dễ làm họ đau lòng vì bạn",
        "frequentSaying": "\"Không nói vì sợ bạn lo\"",
        "changeTips": "Mở nhẹ, không đổ hết: \"Hôm nay hơi nặng, nghe mình được không?\"\nNhớ: họ lo và bạn chia sẻ lòng mình là hai việc khác nhau\nTrước khi giấu, hỏi một lần: nói ra thật sự làm họ nặng không?",
        "oneLiner": "Lo lắng càng chia sẻ càng nhẹ. Quan tâm chia sẻ vững hơn quan tâm bằng cách giấu",
        "shareLine": "Tại sao lại hay nói dối nhỏ với người yêu? Kết quả: Kiểu chặn lo lắng 🌂 Hình như lời dối nhỏ là dịu dàng vì sợ bạn lo... mình ra kiểu chặn lo haha bạn kiểu nào?"
      },
      {
        "title": "Người miệng chạy trước, Kiểu phản xạ thói quen ⚡",
        "typeName": "Kiểu phản xạ thói quen",
        "realReason": "Đó là thói quen — miệng nói trước khi kịp nghĩ vì sao",
        "shortDescription": "Bạn không cố lừa có chủ đích. Miệng trả lời trước khi câu hỏi kịp kết thúc.",
        "description": "\"Ừ biết\", \"không sao\", \"vẫn đẹp\" tuột ra không chủ đích — rồi sau mới nghĩ \"ủa, không đúng\". Ít là lý do trong lòng, nhiều hơn là thói quen trả lời đã cứng.",
        "keywords": "Trả lời phản xạ, Miệng trước, Nói trước khi nghĩ, Hối muộn, Thói quen cứng",
        "strengths": "Phản xạ nhanh giúp cuộc trò chuyện nhẹ và chảy",
        "reasonDetail": "Khi cảm giác phải trả lời ngay, khi hội thoại đang nhanh",
        "frequentSaying": "\"À đúng rồi, thật ra...\"",
        "changeTips": "Đặt luật: hít một hơi, trả lời sau ba giây\nNếu câu phản xạ sai, sửa ngay: \"Khoan — thật ra là thế này\"\nViết sẵn một hai lời dối hay gặp và chuẩn bị câu thật cho khoảnh khắc đó",
        "oneLiner": "Nếu là thói quen chứ không phải lòng, ba giây dừng cũng đủ đổi",
        "shareLine": "Tại sao lại hay nói dối nhỏ với người yêu? Kết quả: Kiểu phản xạ thói quen ⚡ Hình như miệng chạy trước không lý do... mình ra kiểu phản xạ haha lạnh sống lưng — bạn ra gì?"
      },
      {
        "title": "Người chỉnh sự thật để khớp kỳ vọng, Kiểu đáp ứng kỳ vọng 🎯",
        "typeName": "Kiểu đáp ứng kỳ vọng",
        "realReason": "Bạn đổi sự thật vì muốn khớp hình ảnh họ kỳ vọng",
        "shortDescription": "Bạn không cố lừa. Lệch khỏi những gì họ kỳ vọng khiến bạn bất an, nên bạn chỉnh lại hình dạng.",
        "description": "Bạn cảm thấy phải luôn là người dễ chịu, thẳng thắn, thủy chung — nên không nói được tổn thương hay sai sót. Làm họ thất vọng như thể tình yêu sẽ teo lại, nên bạn chỉnh sự thật thành phiên bản họ thích nghe.",
        "keywords": "Khớp kỳ vọng, Sợ làm thất vọng, Luôn thủy chung, Hình ảnh họ muốn, Áp lực",
        "strengths": "Trách nhiệm cao và nỗ lực chân thành đáp ứng kỳ vọng của họ",
        "reasonDetail": "Khi kỳ vọng của họ về bạn rõ ràng, khi cần thừa nhận sai sót hay tổn thương",
        "frequentSaying": "\"Không muốn làm bạn thất vọng\"",
        "changeTips": "Hỏi thẳng: \"Bạn kỳ vọng gì ở mình?\" để kiểm kích thước kỳ vọng trong đầu\nCố ý lộ một mặt chưa hoàn hảo và xem phản ứng thật của họ\nViết lại \"phải thế này mới được yêu\" thành \"thế này vẫn có thể được yêu\"",
        "oneLiner": "Tình yêu chỉ để khớp kỳ vọng sẽ làm bạn kiệt. Người thật ở lại kể cả khi bạn khác đi",
        "shareLine": "Tại sao lại hay nói dối nhỏ với người yêu? Kết quả: Kiểu đáp ứng kỳ vọng 🎯 Hình như chỉnh sự thật để khớp kỳ vọng... mình ra kiểu đáp ứng kỳ vọng haha đau — bạn?"
      }
    ]
  },
  "id": {
    "meta": {
      "title": "Kenapa Suka Bohong Kecil ke Pacar?",
      "description": "Nggak perlu dibohongi, kenapa tetap suka mengelak? Lewat 10 situasi, temukan alasan sejati di balik bohong kecilmu — dan cara jadi lebih jujur.",
      "tags": [
        "Bohong Pacaran",
        "Psikologi Pacaran",
        "Tipe Pacaran"
      ]
    },
    "questions": [
      {
        "q": "Kamu pulang terlambat, lagi minum dengan teman. Pacar nanya, \"Udah di jalan pulang?\" Kamu...",
        "opts": [
          "Bilang \"iya, lagi jalan\" — jujur bakal panjang dan suasana canggung",
          "Bilang \"iya, lagi pulang, nggak ada apa-apa\" — nggak mau bikin mereka khawatir",
          "\"Iya, lagi jalan\" keluar sebelum sempat mikir",
          "Bilang \"iya, pulang lebih awal\" biar cocok sama citra yang diharapkan — main malam bikin kecewa"
        ]
      },
      {
        "q": "Hadiah dari pacar nggak sesuai selera. \"Suka nggak?\" Kamu...",
        "opts": [
          "Bilang suka — tahu mereka pilih hati-hati dan nggak mau bikin sedih",
          "\"Iya, suka\" keluar otomatis",
          "Pakai wajah senang besar biar cocok ekspektasi \"harusnya senang dapat hadiah\"",
          "Bikin alasan suka — ngaku nggak cocok bakal kelihatan kurang peka"
        ]
      },
      {
        "q": "Mereka nanya, \"Makan siang apa?\" Padahal kamu makan seadanya di minimarket. Kamu...",
        "opts": [
          "\"Makan seadanya aja\" keluar sebelum mikir",
          "Bilang \"makan yang bener\" biar cocok citra orang yang jaga diri",
          "Sedikit \"upgrade\" menu biar nggak kelihatan payah makan asal",
          "Bilang \"makan bekal\" — kalau nggak nanti dikuliahi \"jaga kesehatan\""
        ]
      },
      {
        "q": "Mereka terlambat lalu minta maaf: \"Nunggu lama?\" Kamu nunggu 30 menit. Kamu...",
        "opts": [
          "Simpan rasa kecewa, bilang \"hampir nggak nunggu\" — merasa harus selalu yang santai",
          "Tertawa \"aku juga baru datang\" — mau kelihatan cool",
          "Bilang \"nggak, aku juga baru datang\" — ngaku nunggu lama takut jadi ribut",
          "Bilang \"nggak apa-apa, nggak lama\" — rasa bersalah mereka bikin kamu ikut tidak enak"
        ]
      },
      {
        "q": "Mereka nanya, \"Ada apa belakangan? Mukamu kurang enak.\" Kerjaan memang berat. Kamu...",
        "opts": [
          "Bilang \"nggak ada apa-apa\" — nggak mau kelihatan lemah; di depan mereka selalu terlihat baik-baik saja",
          "Bilang \"nggak, cuma capek\" — dibuka bakal bikin suasana berat",
          "Bilang \"nggak ada apa-apa\" — nggak mau mereka khawatir",
          "\"Nggak ada apa-apa\" keluar refleks begitu ditanya"
        ]
      },
      {
        "q": "Mereka nanya santai, \"Hari ini bareng orang lain?\" Padahal kamu makan berdua dengan rekan kerja. Kamu...",
        "opts": [
          "\"Nggak\" keluar karena kebiasaan begitu ditanya",
          "Bilang \"nggak, makan sendiri\" — takut keluar dari citra setia yang mereka harapkan",
          "Bilang \"makan sendiri\" — jujur takut disalahpahami dan suasana jadi canggung",
          "Bilang \"sendiri aja\" seperti biasa — nggak mau mereka overthinking"
        ]
      },
      {
        "q": "Mereka nanya, \"Kamu tahu ini?\" Padahal kamu kurang paham. Kamu...",
        "opts": [
          "Ikut-ikutan seperti tahu — bilang tidak tahu bakal canggung dan mengecewakan",
          "Mengangguk pura-pura tahu — ngaku tidak tahu bakal kelihatan gaptek",
          "Bilang \"iya, tahu\" — merasa tidak enak bikin mereka jelasin",
          "\"Iya, tahu~\" keluar dulu, baru menyesal"
        ]
      },
      {
        "q": "Buket yang mereka kasih sudah layu dan kamu buang. Mereka nanya, \"Masih bagus kan?\" Kamu...",
        "opts": [
          "Bilang \"iya, masih kujaga baik-baik\" — nggak mau kelihatan orang yang buang hadiah",
          "Bilang \"iya, masih oke\" — ngaku dibuang bakal bikin cerita panjang dan sakit hati",
          "\"Iya~ masih bagus\" keluar karena kebiasaan",
          "Bilang \"iya, masih kujaga\" biar cocok ekspektasi \"aku menghargai hadiahmu\""
        ]
      },
      {
        "q": "Mereka nanya, \"Nggak nyembunyiin sesuatu kan?\" Padahal kamu nyembunyiin hal kecil. Kamu...",
        "opts": [
          "Potong singkat \"nggak\" — dibuka bakal membesar",
          "Bilang \"iya, nggak ada\" — tidak mau bikin khawatir lebih dulu",
          "Bilang \"tentu saja tidak\" biar cocok ekspektasi \"aku selalu terbuka\"",
          "Bertindak bersih \"nggak, jangan khawatir\" — kelihatan seperti orang yang rahasia itu memalukan"
        ]
      },
      {
        "q": "Bohong kecil ketahuan dan mereka nanya, \"Kenapa disembunyiin?\" Yang paling dekat dengan hatimu?",
        "opts": [
          "Kusembunyiin karena nggak mau lihat mereka khawatir",
          "Bukan bohong yang direncanakan — keluar seperti kebiasaan tanpa sadar",
          "Mau sedikit dipoles biar nggak kelihatan jelek",
          "Cuma mau menghindari ribut"
        ]
      }
    ],
    "results": [
      {
        "title": "Orang yang hanya mau tampil sisi baik, Tipe Jaga Muka 🛡️",
        "typeName": "Tipe Jaga Muka",
        "realReason": "Kamu poles kebenaran karena tidak nyaman terlihat kurang",
        "shortDescription": "Kamu tidak sedang menipu. Ingin terlihat sedikit lebih oke di depan mereka yang membuat sentuhan kecil itu muncul.",
        "description": "Kamu \"upgrade\" makan siang seadanya, pura-pura tahu topik, atau bilang baik-baik saja padahal tidak. Bukan niat jahat — mau jaga citra. Tapi kalau polesan menumpuk, mereka semakin jarang kenal kamu yang asli.",
        "keywords": "Manajemen citra, Pura-pura tahu, Bertindak oke, Polesan, Menyembunyikan kekurangan",
        "strengths": "Peduli manajemen diri dan sungguh ingin menampilkan sisi baik ke pasangan",
        "reasonDetail": "Saat momen sehari-hari bisa terlihat kurang, saat ada topik yang tidak kamu tahu, saat kelemahan bisa terlihat",
        "frequentSaying": "\"Iya tahu, aku juga bisa gitu\"",
        "changeTips": "Sengaja bilang satu kekurangan kecil dulu. Contoh: \"Sebenarnya hari ini makan seadanya\"\nKalau tidak tahu, coba sekali: \"Aku kurang paham — jelasin dong\"\nIngat saat mereka melihat sisi lemahmu dan tidak menjauh",
        "oneLiner": "Dirimu tanpa polesan justru terasa lebih dekat. Mulai dari kejujuran kecil",
        "shareLine": "Kenapa suka bohong kecil ke pacar? Hasil: Tipe Jaga Muka 🛡️ Katanya aku poles biar nggak kelihatan kurang... aku dapat Jaga Muka wkwk kamu dapat apa?"
      },
      {
        "title": "Orang yang mengalah dulu biar tidak ribut, Tipe Hindari Konflik 🕊️",
        "typeName": "Tipe Hindari Konflik",
        "realReason": "Kamu mengelak karena takut jujur bikin suasana canggung",
        "shortDescription": "Kamu bukan pembohong. Ribut atau omongan panjang setelah kejujuran terasa lebih berat daripada mengelak cepat.",
        "description": "Bilang main malam, nunggu lama, atau perasaan sakit seperti konflik mau mulai — jadi kamu lipat dengan \"nggak apa-apa\" dan \"nggak.\" Suasana aman, fakta yang tidak diucapkan tetap ada. Saat ketahuan, kepercayaan bisa lebih rusak.",
        "keywords": "Suasana dulu, Nggak apa-apa, Takut omongan panjang, Cegah konflik, Imbas saat ketahuan",
        "strengths": "Punya sense menjaga damai dan mengurangi ribut yang tidak perlu",
        "reasonDetail": "Saat jujur bisa memicu ceramah atau ribut, saat harus menyuarakan sakit atau tidak nyaman",
        "frequentSaying": "\"Sudahlah, nggak apa-apa\"",
        "changeTips": "Saat bilang fakta yang canggung, mulai dengan \"Bukan mau ribut — cuma ingin kamu tahu\"\nPendek saja: satu baris fakta + satu baris perasaan\nLatih bilang fakta kecil di hari yang sama supaya belajar bicara tidak merusak hubungan",
        "oneLiner": "Bicara dan ribut itu beda. Semakin cepat bilang yang kecil, semakin kecil ribut saat ketahuan",
        "shareLine": "Kenapa suka bohong kecil ke pacar? Hasil: Tipe Hindari Konflik 🕊️ Katanya aku mengelak biar nggak ribut... aku dapat Hindari Konflik wkwk kamu juga?"
      },
      {
        "title": "Orang yang menyembunyikan supaya tidak bikin khawatir, Tipe Blokir Khawatir 🌂",
        "typeName": "Tipe Blokir Khawatir",
        "realReason": "Kamu blokir kebenaran dulu supaya mereka tidak khawatir atau sakit hati",
        "shortDescription": "Kamu tidak menyembunyikan untuk menipu. Kamu ingin melindungi mereka dari khawatir lebih dulu.",
        "description": "Meski berat tetap bilang \"nggak ada apa-apa\", dan yang mungkin bikin khawatir diloloskan sebagai \"nggak apa.\" Pilihan lembut — tapi mereka bisa tidak tahu kamu sedang sulit; kalau tahu belakangan, justru merasa dikesampingkan.",
        "keywords": "Blokir khawatir, Jaga hati mereka, Nggak ada apa-apa, Bohong lembut, Menanggung sendiri",
        "strengths": "Hangat, cepat tangkap perasaan mereka, dan berusaha tidak menambah beban",
        "reasonDetail": "Saat ada yang berat, saat ada fakta yang bisa membuat mereka sedih karenamu",
        "frequentSaying": "\"Nggak kubilang karena takut kamu khawatir\"",
        "changeTips": "Buka ringan tanpa menumpahkan semua: \"Hari ini agak berat — mau dengerin?\"\nIngat: mereka khawatir beda dengan kamu berbagi isi hati\nSebelum menyembunyikan, tanya sekali: apakah ini benar-benar membebani mereka?",
        "oneLiner": "Khawatir jadi lebih ringan saat dibagi. Peduli dengan berbagi lebih kuat daripada peduli dengan menyembunyikan",
        "shareLine": "Kenapa suka bohong kecil ke pacar? Hasil: Tipe Blokir Khawatir 🌂 Katanya bohong kecilku lembut biar kamu nggak khawatir... aku dapat Blokir Khawatir wkwk tipemu apa?"
      },
      {
        "title": "Orang yang mulutnya duluan, Tipe Refleks Kebiasaan ⚡",
        "typeName": "Tipe Refleks Kebiasaan",
        "realReason": "Ini kebiasaan — kata keluar sebelum sempat mikir kenapa",
        "shortDescription": "Kamu tidak sengaja menipu. Mulut menjawab sebelum pertanyaan selesai.",
        "description": "\"Iya tahu,\" \"nggak apa-apa,\" \"masih bagus\" keluar tanpa rencana — lalu belakangan mikir \"eh, itu sebenarnya salah.\" Lebih ke kebiasaan menjawab yang sudah mengeras, bukan alasan di hati.",
        "keywords": "Jawaban refleks, Mulut duluan, Keluar sebelum mikir, Sesal belakangan, Kebiasaan mengeras",
        "strengths": "Refleks cepat yang menjaga percakapan ringan dan mengalir",
        "reasonDetail": "Saat merasa harus jawab langsung, saat chat saling balas cepat",
        "frequentSaying": "\"Oh iya — sebenarnya...\"",
        "changeTips": "Buat aturan: tarik napas sekali, jawab setelah tiga detik\nKalau jawaban refleks salah, koreksi langsung: \"Tunggu — sebenarnya begini\"\nTulis satu-dua bohong yang sering muncul dan siapkan kalimat jujurnya",
        "oneLiner": "Kalau itu kebiasaan, bukan hati, jeda tiga detik saja bisa mengubahnya",
        "shareLine": "Kenapa suka bohong kecil ke pacar? Hasil: Tipe Refleks Kebiasaan ⚡ Katanya mulutku duluan tanpa alasan... aku dapat Refleks Kebiasaan wkwk merinding — kamu dapat apa?"
      },
      {
        "title": "Orang yang mengubah fakta biar cocok ekspektasi, Tipe Sesuaikan Ekspektasi 🎯",
        "typeName": "Tipe Sesuaikan Ekspektasi",
        "realReason": "Kamu mengubah fakta karena mau cocok dengan sosok yang mereka harapkan",
        "shortDescription": "Kamu tidak sedang menipu. Keluar dari yang mereka harapkan terasa tidak aman, jadi kamu menyesuaikan bentuk.",
        "description": "Kamu merasa harus selalu orang yang santai, terbuka, setia — jadi sulit bilang sakit hati atau kesalahan. Mengecewakan ekspektasi mereka seperti cinta menyusut, jadi kamu edit fakta jadi versi yang mereka suka.",
        "keywords": "Cocokkan ekspektasi, Takut mengecewakan, Selalu setia, Sosok yang mereka mau, Tekanan",
        "strengths": "Tanggung jawab kuat dan usaha tulus memenuhi harapan mereka",
        "reasonDetail": "Saat ekspektasi mereka tentangmu jelas, saat harus mengakui kesalahan atau sakit hati",
        "frequentSaying": "\"Nggak mau bikin kamu kecewa\"",
        "changeTips": "Tanya langsung: \"Kamu sebenarnya harap apa dariku?\" dan cek seberapa besar ekspektasi di bayangan\nSengaja tunjukkan satu sisi yang tidak sempurna dan lihat reaksi nyata mereka\nTulis ulang \"harus begini baru dicintai\" jadi \"begini pun masih bisa dicintai\"",
        "oneLiner": "Cinta yang hanya menyesuaikan ekspektasi akan melelahkan. Yang tinggal meski kamu terlihat beda — itulah yang nyata",
        "shareLine": "Kenapa suka bohong kecil ke pacar? Hasil: Tipe Sesuaikan Ekspektasi 🎯 Katanya aku rewrite fakta biar cocok ekspektasi... aku dapat Sesuaikan Ekspektasi wkwk nyesek — kamu?"
      }
    ]
  }
};
