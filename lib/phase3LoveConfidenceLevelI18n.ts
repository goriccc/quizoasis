/** 나의 연애 자신감 레벨 테스트 — 외국어 번역 (문항 순서는 phase3LoveConfidenceLevelData RAW_QUESTIONS와 동일) */

export type Phase3LoveConfidenceLevelForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3LoveConfidenceLevelResultText {
  title: string;
  gaugeLabel: string;
  levelLine: string;
  shortDescription: string;
  description: string;
  scoreRange: string;
  keywords: string;
  strengths: string;
  tips: string;
  counseling: string;
  oneLiner: string;
  shareLine: string;
}

export interface Phase3LoveConfidenceLevelLocaleBundle {
  questions: { q: string; opts: [string, string, string, string] }[];
  results: Phase3LoveConfidenceLevelResultText[];
  areas: {
    approach: string;
    praise: string;
    hurt: string;
    voice: string;
    compare: string;
    self: string;
  };
}

const EN: Phase3LoveConfidenceLevelLocaleBundle = {
  questions: [
    {
      q: `You're about to text the person you like first. What do you do?`,
      opts: [
        `I send a light text first. If it feels like too much, I'll deal with that then`,
        `I agonize over whether I'm allowed to text first, then send it`,
        `I often wait for them and never send it`,
        `I give up. They'd probably find my text annoying`,
      ],
    },
    {
      q: `They say you look good today. What do you do?`,
      opts: [
        `I wave it off with "no, I'm not." It feels like an empty compliment`,
        `I smile and say, "Thanks. I like how I look today too"`,
        `I say thanks, but part of me doesn't quite believe it`,
        `It feels good, but I get awkward and mumble past it`,
      ],
    },
    {
      q: `Something hurt your feelings. What do you do?`,
      opts: [
        `I swallow it and wait for them to notice`,
        `I say I'm fine, because bringing it up might make things awkward`,
        `That same day, I calmly say what hurt`,
        `After turning it over several times, I hint at it carefully`,
      ],
    },
    {
      q: `They ask what you like about yourself. What do you do?`,
      opts: [
        `I name one or two things modestly, then change the subject`,
        `I barely manage one strength other people have told me`,
        `Nothing comes to mind, so I dodge the question`,
        `I talk about a few of my strengths as if it's natural`,
      ],
    },
    {
      q: `They're out with friends and texting less. What do you do?`,
      opts: [
        `I tell them to have fun and spend the time on myself`,
        `It stings, but I hide it and sit with it`,
        `I get anxious that their heart might be with someone else and want to check`,
        `I shrink, wondering if I'm just not fun enough`,
      ],
    },
    {
      q: `You have to pick a date plan. What do you do?`,
      opts: [
        `I go wherever they want, no question`,
        `I suggest where I want to go, then hear what they think`,
        `I figure out their taste and suggest something close to it`,
        `I have a place in mind, but I can't get the words out`,
      ],
    },
    {
      q: `You and your partner disagree. What do you do?`,
      opts: [
        `I assume I'm wrong and drop it quickly`,
        `I don't say what I think, in case the mood turns`,
        `I name the difference and look for a middle`,
        `I say my view, but fold easily if they push back`,
      ],
    },
    {
      q: `They say you've seemed different lately. What do you do?`,
      opts: [
        `I'm worried, but I act like I'm fine`,
        `I replay what I might have done wrong and blame myself`,
        `I get anxious that they're disappointed in me`,
        `I ask, easily, what seems different`,
      ],
    },
    {
      q: `An ex, or someone more attractive, comes up. What do you do?`,
      opts: [
        `People are attractive in different ways. I don't dwell on it`,
        `It sticks, but I try not to compare`,
        `I start comparing, and it stays in my head for a while`,
        `I feel smaller, like I come up short next to them`,
      ],
    },
    {
      q: `They make a big show of loving you. What do you do?`,
      opts: [
        `I get anxious about whether I deserve love like this`,
        `I take it gladly and say how I feel too`,
        `I'm happy, but I feel I have to match what I received`,
        `I'm grateful, but I can't open all the way. It feels like it could vanish`,
      ],
    },
    {
      q: `You start thinking the relationship might end. What do you do?`,
      opts: [
        `I drop my own view and try to hold on however I can`,
        `I blame myself. It must be because I'm not enough`,
        `I think we'll talk it through, and I'll choose what fits me`,
        `I'm anxious, but I watch how things go for now`,
      ],
    },
    {
      q: `Which line sounds most like you right now?`,
      opts: [
        `"I still wobble sometimes, but I'm learning to trust myself"`,
        `"I feel okay only as much as they like me"`,
        `"I don't know if I'm someone worth loving"`,
        `"I can be loved as I am"`,
      ],
    },
  ],
  results: [
    {
      title: `Level 1 Sprout`,
      gaugeLabel: `Sprout`,
      levelLine: `Just starting to sprout`,
      shortDescription: `Your dating confidence is a sprout that just broke the soil. It's small, and it has the most room to grow.`,
      description: `Around texting, compliments, and saying you felt hurt, you shrink and sway hard with their reaction. You sometimes doubt you deserve to be loved. This isn't your personality. It comes from experience and belief, and it can grow.`,
      scoreRange: `12–19 pts`,
      keywords: `Shrinking, self-doubt, hanging on their reaction, swallowing words`,
      strengths: `You notice them carefully and treat the relationship as something precious`,
      tips: `Once a day, write one thing you did well\nWhen they compliment you, try "thank you" before "no, I'm not"\nStart by saying the hurt in one short, factual line`,
      counseling: `If the feeling that you're not enough shows up strongly outside dating too, it can help to talk with a counselor.`,
      oneLiner: `A sprout grows when you water it. A small compliment you give yourself is the first watering`,
      shareLine: `My dating confidence: Level 1 Sprout 🌱 ({score}/48, top {percent}%) It says I'm just sprouting... this is too real 😭 What level are you? Send a screenshot`,
    },
    {
      title: `Level 2 Shy`,
      gaugeLabel: `Shy`,
      levelLine: `The heart is there, the words are careful`,
      shortDescription: `Your feelings run deep, and that's why you say them carefully.`,
      description: `You turn a sentence over several times, and you check their reaction before you share your own view. Care is a strength, but swallowed words pile up into swallowed hurt. A little practice saying things out loud can change this level fast.`,
      scoreRange: `20–27 pts`,
      keywords: `Careful, cautious words, reading them, acting after you think`,
      strengths: `You're thoughtful, precise, and good at reading how they feel`,
      tips: `Let one small choice, like the menu or the place, be yours first\nWhen you keep hesitating, use a "send it within 3 minutes" rule\nWrite three signs they like you, and read them when you wobble`,
      counseling: `If saying what you feel scares you enough to weigh on daily life, it can help to talk with a counselor.`,
      oneLiner: `Being shy means the feeling runs deep. One more sentence can change the relationship`,
      shareLine: `My dating confidence: Level 2 Shy 🌸 ({score}/48, top {percent}%) Big feelings, careful words lol What level are you? Screenshot it`,
    },
    {
      title: `Level 3 Steady`,
      gaugeLabel: `Steady`,
      levelLine: `You wobble, then find your footing`,
      shortDescription: `You wobble sometimes, and you find your center again quickly.`,
      description: `Most of the time you say how you feel and hear their view too. Comparison or anxiety can still shrink you. You bounce back well, so the steadiness grows with experience. Knowing where you wobble is already the next step up.`,
      scoreRange: `28–34 pts`,
      keywords: `Steady, bounce-back, balance, the occasional wobble, still growing`,
      strengths: `You regulate feelings, talk them through, and recover quickly`,
      tips: `Note the moments you wobbled and write your own "this is how I come back"\nWhen comparison shows up, name three things you like about yourself first\nDon't save the hurt for later. Say it briefly the same day`,
      counseling: `If the wobble lasts long enough to affect daily life, it can help to talk with a counselor.`,
      oneLiner: `You already have the strength to come back. You can trust that`,
      shareLine: `My dating confidence: Level 3 Steady 🌿 ({score}/48, top {percent}%) I wobble, then I come back... What level are you? Send a screenshot`,
    },
    {
      title: `Level 4 Assured`,
      gaugeLabel: `Assured`,
      levelLine: `You trust yourself and say it plainly`,
      shortDescription: `In dating, you can say what you feel and what you think without shrinking.`,
      description: `You say what hurt, take a compliment gladly, and talk through a difference until you meet in the middle. Their reaction doesn't decide your worth. Keep a little time for listening, so being assured doesn't miss how they feel.`,
      scoreRange: `35–41 pts`,
      keywords: `Assured, honest words, meeting in the middle, self-trust, a steady sense of worth`,
      strengths: `You say how you feel and still talk with them as an equal`,
      tips: `After you say your view, ask what they think\nShare your steadiness with a partner who's wobbling, without taking their feelings on as your job\nOn a hard day, you're allowed to lean. You don't have to act assured`,
      counseling: `If you've been pressing feelings down behind that assured front, it can help to talk with a counselor.`,
      oneLiner: `Being assured isn't about winning. It's about standing together. Listening makes it sturdier`,
      shareLine: `My dating confidence: Level 4 Assured 🌳 ({score}/48, top {percent}%) I trust myself and say it lol What level are you? Screenshot your percentile`,
    },
    {
      title: `Level 5 Maxed Out`,
      gaugeLabel: `Maxed`,
      levelLine: `You trust yourself as you are`,
      shortDescription: `You believe you can be loved as you are. That's confidence at full level.`,
      description: `Comparison and judgment don't run you. You say both the hurt and the love, and even if the relationship might end, you choose what fits you. Healthy confidence puts the other person at ease and sets the tone. You don't have to be perfect. Leave room for a wobble now and then.`,
      scoreRange: `42–48 pts`,
      keywords: `Self-trust, honesty, a healthy boundary, unshaken by comparison, steadiness`,
      strengths: `You trust your worth, keep a healthy line, and make them feel steady`,
      tips: `A wobble is normal. If you need help, ask for it without a speech\nWatch their pace too, so your confidence doesn't become pressure\nShare how you do this. Your way might be someone else's hint`,
      counseling: `Even at the top, you don't have to carry a hard stretch alone. Talk with a counselor when you need to.`,
      oneLiner: `Confidence isn't never wobbling. It's trusting yourself when you do. You already shine`,
      shareLine: `My dating confidence: Level 5 Maxed Out 👑 ({score}/48, top {percent}%) I trust myself as I am lol What level are you? Send a screenshot`,
    },
  ],
  areas: {
    approach: `Reaching out first`,
    praise: `Taking a compliment`,
    hurt: `Saying you felt hurt`,
    voice: `Saying what you think`,
    compare: `Handling comparison`,
    self: `Trusting yourself`,
  },
};

const JA: Phase3LoveConfidenceLevelLocaleBundle = {
  questions: [
    {
      q: `好きな人に先に連絡しようとする瞬間、自分は？`,
      opts: [
        `負担に感じるならそのとき考えよう、と軽く先に連絡する`,
        `先に送っていいかかなり悩んでから送る`,
        `相手から来るのを待って、送れないことが多い`,
        `自分が送ると面倒がられそうで、最初からあきらめる`,
      ],
    },
    {
      q: `恋人が「今日、きれいだね／かっこいいね」とほめた。自分は？`,
      opts: [
        `お世辞だと思って「そんなことない」と手を振る`,
        `「ありがとう。今日の自分、気に入ってる」と笑って受け取る`,
        `ありがとうと言うけれど、内心は少し信じきれない`,
        `うれしいのに照れて、言葉を濁す`,
      ],
    },
    {
      q: `寂しい気持ちになることがあった。自分は？`,
      opts: [
        `相手が気づいてくれるのを待ち、言葉を飲み込む`,
        `言うと関係がぎこちなくなりそうで、大丈夫と言う`,
        `その日のうちに「ここが寂しかった」と落ち着いて伝える`,
        `何度も悩んだ末、遠回しにそっと伝える`,
      ],
    },
    {
      q: `恋人が「自分のどこが好き？」と聞いた。自分は？`,
      opts: [
        `控えめに一つか二つ言って、すぐ話題を変える`,
        `人から言われた長所を、かろうじて一つ出す`,
        `長所が思いつかず、答えを避ける`,
        `自分の長所をいくつか、自然に話す`,
      ],
    },
    {
      q: `恋人が友達と遊んでいて、連絡が減った。自分は？`,
      opts: [
        `楽しんできて、と応援して自分の時間を過ごす`,
        `寂しいけれど、顔には出さず我慢する`,
        `他の人に気持ちが向いたのではと不安で、確かめたくなる`,
        `自分がつまらなくてそうなのかと、縮こまる`,
      ],
    },
    {
      q: `デートの行き先を決めないといけない。自分は？`,
      opts: [
        `相手の行きたいところに、とにかく合わせる`,
        `自分が行きたい場所を先に出して、相手の意見も聞く`,
        `相手の好みをつかんでから、近い案を出す`,
        `行きたい場所があっても、言葉にできない`,
      ],
    },
    {
      q: `恋人と意見が違った。自分は？`,
      opts: [
        `自分の意見が間違っている気がして、すぐ引っ込める`,
        `空気が悪くなりそうで、意見を言わない`,
        `違う点を話して、落としどころを探す`,
        `意見は言うけれど、反対されるとすぐ揺らぐ`,
      ],
    },
    {
      q: `恋人が「最近、なんか変わったね」と言った。自分は？`,
      opts: [
        `心配だけれど、表では平気なふりをする`,
        `何を間違えたのか反芻して、自分を責める`,
        `失望されたのかと不安になる`,
        `どこが違って見えるのか、気軽に聞いてみる`,
      ],
    },
    {
      q: `元恋人や、もっと魅力的な人の話が出た。自分は？`,
      opts: [
        `魅力は人それぞれだと思って、あまり気にしない`,
        `引っかかるけれど、比べないようにする`,
        `比べてしまい、しばらく頭から離れない`,
        `あの人より自分は足りない気がして、沈む`,
      ],
    },
    {
      q: `恋人が大きな愛情表現をしてくれた。自分は？`,
      opts: [
        `こんな愛情を受ける資格があるのか不安になる`,
        `うれしく受け取って、自分の気持ちも伝える`,
        `うれしいけれど、受け取った分を返さなきゃと負担に感じる`,
        `感謝しているのに、すぐ消えそうで心を開ききれない`,
      ],
    },
    {
      q: `この恋愛、終わるかもしれないと思った。自分は？`,
      opts: [
        `どうにかつなぎ止めようと、自分の意見を折る`,
        `自分が足りないからだ、と自分を責める`,
        `話し合って、自分に合う選択をしようと考える`,
        `不安だけれど、とりあえず様子を見る`,
      ],
    },
    {
      q: `いまの自分にいちばん近い文は？`,
      opts: [
        `「たまに揺れるけれど、少しずつ自分を信じている」`,
        `「相手が好きでいてくれる分だけ、自分も大丈夫な気がする」`,
        `「自分は愛されるだけの人なのか、わからない」`,
        `「ありのままでも、愛されていい」`,
      ],
    },
  ],
  results: [
    {
      title: `レベル1 新芽`,
      gaugeLabel: `新芽`,
      levelLine: `芽が出たばかりの段階`,
      shortDescription: `あなたの恋愛自信は、いま芽を出した新芽です。まだ小さいぶん、伸びしろが一番大きいです。`,
      description: `連絡、ほめ言葉、寂しい気持ちを伝える場面で自分を低く見て、相手の反応に大きく揺れます。愛される資格を疑うこともあります。これは性格ではなく、経験と信念から来ているので、育てられます。`,
      scoreRange: `12〜19点`,
      keywords: `縮こまる、自己疑い、相手の反応頼み、言葉を飲み込む`,
      strengths: `相手を細やかに気遣い、関係を大切にする心`,
      tips: `一日一回「今日よくやったこと」を一つ書く\nほめられたら「そんなことない」の前に「ありがとう」を言ってみる\n寂しい気持ちは、事実を一行だけ短く伝える練習から始める`,
      counseling: `自分が足りないという感覚が恋愛の外でも強く続くなら、心理の専門家に話してみてください。`,
      oneLiner: `新芽は水をあげれば育ちます。自分にかける小さなほめ言葉が、最初の水です`,
      shareLine: `私の恋愛自信レベル: レベル1 新芽 🌱 ({score}点/48, 上位{percent}%) まだ芽が出たばかりだって… これ私そのもの あなたは何レベル？スクショ送って`,
    },
    {
      title: `レベル2 照れ`,
      gaugeLabel: `照れ`,
      levelLine: `気持ちはあるのに、伝え方が慎重な段階`,
      shortDescription: `気持ちが大きいぶん、言葉が慎重な人です。`,
      description: `言いたいことを何度も考え、自分の意見の前に相手の反応を見ます。慎重さは強みですが、言葉を飲み込むと寂しさもたまります。小さな表現の練習だけで、目に見えて伸びる段階です。`,
      scoreRange: `20〜27点`,
      keywords: `慎重、控えめな表現、相手の顔色、悩んでから動く`,
      strengths: `慎重で繊細、相手の気持ちを汲む力`,
      tips: `メニューや場所など、小さな選択は一つ自分から言ってみる\n悩みが長引いたら「3分以内に送る」ルールを決める\n相手が自分を好きな証拠を三つ書いて、揺れたときに読む`,
      counseling: `伝えることが怖くて日常まで大きくつらいなら、心理の専門家に話してみてください。`,
      oneLiner: `照れは、気持ちが深いということです。一文足すだけで関係は変わります`,
      shareLine: `私の恋愛自信レベル: レベル2 照れ 🌸 ({score}点/48, 上位{percent}%) 気持ちは大きいのに表現が慎重なタイプだって笑 あなたは何レベル？スクショして`,
    },
    {
      title: `レベル3 安定`,
      gaugeLabel: `安定`,
      levelLine: `揺れても戻ってくる安定の段階`,
      shortDescription: `たまに揺れても、すぐ自分の中心に戻れる人です。`,
      description: `たいてい自分の気持ちを言い、相手の意見も聞きます。ただ比較や不安が上がると縮こまることもあります。回復が早いので、経験が積むほど安定は大きくなります。揺れる地点がわかるだけで、一段上がります。`,
      scoreRange: `28〜34点`,
      keywords: `安定、回復、バランス、たまに揺れる、成長中`,
      strengths: `感情を整え、会話でほどき、揺れから早く戻る力`,
      tips: `揺れた瞬間を記録して「このときはこう戻る」という自分の型を作る\n比較が上がったら、自分の魅力を三つ先に思い浮かべる\n寂しい気持ちはその日のうちに短く伝える`,
      counseling: `たまに揺れる程度を超えて、不安が日常に影響するなら、心理の専門家に話してみてください。`,
      oneLiner: `揺れても戻る力は、もうあります。その力を信じて大丈夫です`,
      shareLine: `私の恋愛自信レベル: レベル3 安定 🌿 ({score}点/48, 上位{percent}%) 揺れても戻るタイプだって… あなたは何レベル？スクショ送って`,
    },
    {
      title: `レベル4 堂々`,
      gaugeLabel: `堂々`,
      levelLine: `自分を信じて、堂々と伝える段階`,
      shortDescription: `恋愛で、自分の気持ちと意見を堂々と言える人です。`,
      description: `寂しい気持ちは落ち着いて伝え、ほめ言葉はうれしく受け取り、違う点は会話で調整します。相手の反応で自分の価値が大きく揺れません。堂々さが相手の気持ちを取りこぼさないよう、聞く時間も残すとさらに良くなります。`,
      scoreRange: `35〜41点`,
      keywords: `堂々、率直な表現、調整、自己信頼、安定した価値`,
      strengths: `気持ちを率直に伝え、相手とバランスよく話す力`,
      tips: `意見を言ったあと「あなたはどう思う？」ともう一度聞く\n揺れている相手に安定を分けても、代わりに背負おうとしない\nつらい日は堂々としなくていい。頼っていいと許可する`,
      counseling: `堂々さの裏で気持ちを押し込めているなら、心理の専門家に話してみてください。`,
      oneLiner: `堂々さは相手に勝つ力ではなく、一緒に立つ力です。聞く耳を足すと、もっと丈夫になります`,
      shareLine: `私の恋愛自信レベル: レベル4 堂々 🌳 ({score}点/48, 上位{percent}%) 自分を信じて伝えるタイプだって笑 あなたは何レベル？上位何%かスクショして`,
    },
    {
      title: `レベル5 自信カンスト`,
      gaugeLabel: `カンスト`,
      levelLine: `ありのままの自分を信じる最高段階`,
      shortDescription: `ありのままでも愛されていいと信じている、自信カンストです。`,
      description: `比較や評価に振り回されず、寂しさも愛情も率直に伝え、終わる可能性の前でも自分に合う選択をします。健全な自信は相手を楽にし、関係の基準になります。完璧でいなきゃ、という負担は置いて、たまに揺れる瞬間も許してください。`,
      scoreRange: `42〜48点`,
      keywords: `自己信頼、率直さ、健全な境界、比較に揺れない、安定感`,
      strengths: `自分の価値を信じ、健全な線を引き、相手に安定を渡す力`,
      tips: `たまに揺れるのも普通だと許して、助けが必要なら気軽に頼む\n自信が相手への圧力にならないよう、相手のペースも見る\nこのやり方を周りと分ける。あなたの伝え方が、誰かのヒントになります`,
      counseling: `カンストでも、つらいことがあれば一人で抱えず、必要なときに心理の専門家に話してみてください。`,
      oneLiner: `自信は揺れないことではなく、揺れても自分を信じることです。いまのあなたは、もう十分に光っています`,
      shareLine: `私の恋愛自信レベル: レベル5 自信カンスト 👑 ({score}点/48, 上位{percent}%) ありのままの自分を信じる段階だって笑 あなたは何レベル？スクショ送って`,
    },
  ],
  areas: {
    approach: `先に連絡`,
    praise: `ほめ言葉`,
    hurt: `寂しい気持ち`,
    voice: `意見を言う`,
    compare: `比べない`,
    self: `自分を信じる`,
  },
};

const ZH_CN: Phase3LoveConfidenceLevelLocaleBundle = {
  questions: [
    {
      q: `想先给喜欢的人发消息时，你会？`,
      opts: [
        `先轻轻发一条，要是对方觉得有压力再想`,
        `纠结很久能不能先发，最后还是发出去`,
        `经常等对方先发，自己就没发出去`,
        `觉得自己发过去会烦人，干脆放弃`,
      ],
    },
    {
      q: `对方说你今天很好看。你会？`,
      opts: [
        `觉得是客套，摆手说“没有啦”`,
        `笑着接住：“谢谢，我今天也挺喜欢自己的”`,
        `嘴上说谢谢，心里却有点不信`,
        `开心，但不好意思，含糊过去`,
      ],
    },
    {
      q: `有件事让你委屈了。你会？`,
      opts: [
        `把话咽回去，等对方自己发觉`,
        `怕说了关系变别扭，就说没事`,
        `当天平静地说“这件事让我委屈了”`,
        `想了好几遍，再小心翼翼地绕着说`,
      ],
    },
    {
      q: `对方问“你喜欢自己哪里？”你会？`,
      opts: [
        `谦虚地说一两样，赶紧换话题`,
        `勉强说出别人告诉过你的一个优点`,
        `想不到优点，把问题岔开`,
        `自然地说出自己的几个优点`,
      ],
    },
    {
      q: `对方和朋友玩，消息变少了。你会？`,
      opts: [
        `让对方玩得开心，自己过自己的时间`,
        `委屈，但不表现出来，自己忍着`,
        `担心对方心里有别人，想去确认`,
        `怀疑是自己不够有趣，整个人缩起来`,
      ],
    },
    {
      q: `要定约会去哪。你会？`,
      opts: [
        `对方想去哪就无条件跟着`,
        `先说自己想去的地方，再听对方的想法`,
        `摸清对方口味，再提一个接近的方案`,
        `心里有想去的地方，却说不出口`,
      ],
    },
    {
      q: `和对方意见不一样。你会？`,
      opts: [
        `觉得是自己错了，很快收回`,
        `怕气氛变差，干脆不说`,
        `把不同的地方说开，一起找中间点`,
        `会说自己的看法，对方一反对就容易动摇`,
      ],
    },
    {
      q: `对方说“你最近好像变了”。你会？`,
      opts: [
        `心里担心，表面装得没事`,
        `反复想自己哪里做错了，责怪自己`,
        `担心对方是对你失望了`,
        `轻松地问，哪里看起来不一样`,
      ],
    },
    {
      q: `聊到前任，或一个更有魅力的人。你会？`,
      opts: [
        `觉得每个人的魅力不一样，不太往心里去`,
        `有点在意，但尽量不去比`,
        `开始比较，而且会想好一阵子`,
        `觉得自己比不过那个人，心情沉下去`,
      ],
    },
    {
      q: `对方给了你很大的爱意。你会？`,
      opts: [
        `不安，觉得自己不配被这样爱`,
        `高兴地收下，也说出自己的心意`,
        `高兴，但觉得收到多少就得还多少，有负担`,
        `感激，却怕它很快消失，没法完全敞开`,
      ],
    },
    {
      q: `你觉得这段恋爱也许会结束。你会？`,
      opts: [
        `为了留住，把自己的想法放下`,
        `责怪自己，一定是因为自己不够好`,
        `想着先谈谈，再做适合自己的选择`,
        `不安，但先看看情况`,
      ],
    },
    {
      q: `哪一句最像现在的你？`,
      opts: [
        `“有时会晃，但我在慢慢相信自己”`,
        `“对方有多喜欢我，我才觉得自己还行”`,
        `“我不知道自己是不是值得被爱”`,
        `“我本来的样子，也值得被爱”`,
      ],
    },
  ],
  results: [
    {
      title: `1级 新芽`,
      gaugeLabel: `新芽`,
      levelLine: `刚刚发芽的阶段`,
      shortDescription: `你的恋爱自信像刚出土的新芽。还小，可生长的空间最大。`,
      description: `在联系、接受夸奖、说出委屈时，你会把自己放低，也被对方的反应晃得很厉害。有时会怀疑自己配不配被爱。这不是性格，而是经验和信念带来的，所以可以长大。`,
      scoreRange: `12～19分`,
      keywords: `退缩，自我怀疑，看对方反应，把话咽回去`,
      strengths: `会细细照顾对方，也很珍惜这段关系`,
      tips: `每天写下今天自己做好的一件事\n被夸时，先说“谢谢”，再考虑要不要说“没有”\n委屈先用一句事实说出来，短一点就好`,
      counseling: `如果“我不够好”不只出现在恋爱里，而且经常很重，可以和心理咨询师聊聊。`,
      oneLiner: `新芽浇了水就会长。给自己的一句小夸奖，就是第一口水`,
      shareLine: `我的恋爱自信等级：1级 新芽 🌱（{score}分/48，前{percent}%）说我才刚刚发芽… 太真实了呜 你是几级？截图发我`,
    },
    {
      title: `2级 害羞`,
      gaugeLabel: `害羞`,
      levelLine: `心里有话，说出来却很小心`,
      shortDescription: `你的心意很大，所以表达才会这么小心。`,
      description: `想说的话会在心里过好几遍，开口前先看对方的反应。谨慎是优点，可话一次次咽回去，委屈也会攒下来。只要练习小小地表达，这一级就能明显长高。`,
      scoreRange: `20～27分`,
      keywords: `谨慎，表达小心，看对方脸色，想完再做`,
      strengths: `谨慎、细腻，也懂得体谅对方的心`,
      tips: `菜单或地点这类小选择，先说一个自己的意见\n犹豫太久时，定一条“3分钟内发出去”\n写下对方喜欢你的三个证据，晃的时候拿出来看`,
      counseling: `如果因为害怕表达，连日常生活都变得很难，可以和心理咨询师聊聊。`,
      oneLiner: `害羞说明心意很深。多说一句，关系就会不一样`,
      shareLine: `我的恋爱自信等级：2级 害羞 🌸（{score}分/48，前{percent}%）说我心意大、表达却很小心哈哈 你是几级？截个图`,
    },
    {
      title: `3级 稳定`,
      gaugeLabel: `稳定`,
      levelLine: `会晃，但能回到自己的中心`,
      shortDescription: `你偶尔会晃，但很快就能找回自己的中心。`,
      description: `多数时候你说得出自己的心意，也听得进对方的看法。比较和不安冒出来时，还是会缩一下。你的恢复力不错，经验越多越稳。知道自己在哪里会晃，就已经往上走了一步。`,
      scoreRange: `28～34分`,
      keywords: `稳定，恢复，平衡，偶尔会晃，正在长大`,
      strengths: `能调节情绪，用对话解开，也能很快从晃动里回来`,
      tips: `记下晃过的时刻，写成“这时候我这样回来”\n一开始比较，就先想起自己的三个魅力\n委屈别拖，当天短短说完`,
      counseling: `如果已经不只是偶尔晃一下，焦虑久到影响生活，可以和心理咨询师聊聊。`,
      oneLiner: `你已经有晃了还能回来的力气。这份力气，可以信`,
      shareLine: `我的恋爱自信等级：3级 稳定 🌿（{score}分/48，前{percent}%）说我晃了也能回来… 你是几级？截图发我`,
    },
    {
      title: `4级 坦然`,
      gaugeLabel: `坦然`,
      levelLine: `相信自己，也能坦然说出来`,
      shortDescription: `在恋爱里，你说得出自己的心意和看法。`,
      description: `委屈能平静地说，夸奖能高兴地接住，不同的地方也能谈出一个中间。对方的反应不会大幅改写你的价值。坦然之外，也留一点听的时间，才不会错过对方的心情。`,
      scoreRange: `35～41分`,
      keywords: `坦然，诚实表达，协调，相信自己，价值稳定`,
      strengths: `能诚实说出心意，也能和对方平等地谈`,
      tips: `说完自己的看法，再问一次“你怎么想”\n对方在晃时，可以分享你的稳定，但别把对方的情绪揽成自己的责任\n难的日子不必装得坦然，依靠一下也没关系`,
      counseling: `如果坦然的背后一直在压着情绪，可以和心理咨询师聊聊。`,
      oneLiner: `坦然不是赢过对方，而是一起站着。再加上倾听，会更稳`,
      shareLine: `我的恋爱自信等级：4级 坦然 🌳（{score}分/48，前{percent}%）说我相信自己、也说得出口哈哈 你是几级？把前百分之几截个图`,
    },
    {
      title: `5级 自信满级`,
      gaugeLabel: `满级`,
      levelLine: `相信本来的自己`,
      shortDescription: `你相信本来的自己也值得被爱。这是自信满级。`,
      description: `你不被比较和评价带着走，委屈和爱意都能诚实地说，就算这段关系可能结束，也会做适合自己的选择。健康的自信让对方放松，也成了关系的基准。不必完美，偶尔晃一下也允许自己。`,
      scoreRange: `42～48分`,
      keywords: `相信自己，诚实，健康的边界，不被比较带走，稳定感`,
      strengths: `相信自己的价值，守住健康的界线，也让对方感到安定`,
      tips: `偶尔晃一下也很正常，需要帮助就直接说\n也看看对方的节奏，别让自信变成压力\n把这套做法分给身边的人。你的方式也许就是别人的提示`,
      counseling: `就算满级，遇到难的事也不必一个人扛。需要的时候，和心理咨询师聊聊。`,
      oneLiner: `自信不是从不晃，而是晃了仍然相信自己。现在的你，已经足够亮`,
      shareLine: `我的恋爱自信等级：5级 自信满级 👑（{score}分/48，前{percent}%）说我相信本来的自己哈哈 你是几级？截图发我`,
    },
  ],
  areas: {
    approach: `先开口`,
    praise: `接住夸奖`,
    hurt: `说出委屈`,
    voice: `说出想法`,
    compare: `面对比较`,
    self: `相信自己`,
  },
};

const ZH_TW: Phase3LoveConfidenceLevelLocaleBundle = {
  questions: [
    {
      q: `想先傳訊息給喜歡的人時，你會？`,
      opts: [
        `先輕輕傳一則，對方如果有壓力再想`,
        `糾結很久能不能先傳，最後還是傳出去`,
        `常常等對方先傳，自己就沒送出`,
        `覺得自己傳過去會煩人，乾脆放棄`,
      ],
    },
    {
      q: `對方說你今天很好看。你會？`,
      opts: [
        `覺得是客套，擺手說「沒有啦」`,
        `笑著接住：「謝謝，我今天也挺喜歡自己的」`,
        `嘴上說謝謝，心裡卻有點不信`,
        `開心，但不好意思，含糊過去`,
      ],
    },
    {
      q: `有件事讓你委屈了。你會？`,
      opts: [
        `把話嚥回去，等對方自己發現`,
        `怕說了關係變彆扭，就說沒事`,
        `當天平靜地說「這件事讓我委屈了」`,
        `想了好幾遍，再小心翼翼地繞著說`,
      ],
    },
    {
      q: `對方問「你喜歡自己哪裡？」你會？`,
      opts: [
        `謙虛地說一兩樣，趕緊換話題`,
        `勉強說出別人告訴過你的一個優點`,
        `想不到優點，把問題岔開`,
        `自然地說出自己的幾個優點`,
      ],
    },
    {
      q: `對方和朋友出去玩，訊息變少了。你會？`,
      opts: [
        `讓對方玩得開心，自己過自己的時間`,
        `委屈，但不表現出來，自己忍著`,
        `擔心對方心裡有別人，想去確認`,
        `懷疑是自己不夠有趣，整個人縮起來`,
      ],
    },
    {
      q: `要定約會去哪。你會？`,
      opts: [
        `對方想去哪就無條件跟著`,
        `先說自己想去的地方，再聽對方的想法`,
        `摸清對方口味，再提一個接近的方案`,
        `心裡有想去的地方，卻說不出口`,
      ],
    },
    {
      q: `和對方意見不一樣。你會？`,
      opts: [
        `覺得是自己錯了，很快收回`,
        `怕氣氛變差，乾脆不說`,
        `把不同的地方說開，一起找中間點`,
        `會說自己的看法，對方一反對就容易動搖`,
      ],
    },
    {
      q: `對方說「你最近好像變了」。你會？`,
      opts: [
        `心裡擔心，表面裝得沒事`,
        `反覆想自己哪裡做錯了，責怪自己`,
        `擔心對方是對你失望了`,
        `輕鬆地問，哪裡看起來不一樣`,
      ],
    },
    {
      q: `聊到前任，或一個更有魅力的人。你會？`,
      opts: [
        `覺得每個人的魅力不一樣，不太往心裡去`,
        `有點在意，但盡量不去比`,
        `開始比較，而且會想好一陣子`,
        `覺得自己比不過那個人，心情沉下去`,
      ],
    },
    {
      q: `對方給了你很大的愛意。你會？`,
      opts: [
        `不安，覺得自己不配被這樣愛`,
        `高興地收下，也說出自己的心意`,
        `高興，但覺得收到多少就得還多少，有負擔`,
        `感激，卻怕它很快消失，沒法完全敞開`,
      ],
    },
    {
      q: `你覺得這段戀愛也許會結束。你會？`,
      opts: [
        `為了留住，把自己的想法放下`,
        `責怪自己，一定是因為自己不夠好`,
        `想著先談談，再做適合自己的選擇`,
        `不安，但先看看情況`,
      ],
    },
    {
      q: `哪一句最像現在的你？`,
      opts: [
        `「有時會晃，但我在慢慢相信自己」`,
        `「對方有多喜歡我，我才覺得自己還行」`,
        `「我不知道自己是不是值得被愛」`,
        `「我本來的樣子，也值得被愛」`,
      ],
    },
  ],
  results: [
    {
      title: `1級 新芽`,
      gaugeLabel: `新芽`,
      levelLine: `剛剛發芽的階段`,
      shortDescription: `你的戀愛自信像剛出土的新芽。還小，可生長的空間最大。`,
      description: `在聯絡、接受誇獎、說出委屈時，你會把自己放低，也被對方的反應晃得很厲害。有時會懷疑自己配不配被愛。這不是性格，而是經驗和信念帶來的，所以可以長大。`,
      scoreRange: `12～19分`,
      keywords: `退縮，自我懷疑，看對方反應，把話嚥回去`,
      strengths: `會細細照顧對方，也很珍惜這段關係`,
      tips: `每天寫下今天自己做好的一件事\n被誇時，先說「謝謝」，再考慮要不要說「沒有」\n委屈先用一句事實說出來，短一點就好`,
      counseling: `如果「我不夠好」不只出現在戀愛裡，而且常常很重，可以和心理諮商師聊聊。`,
      oneLiner: `新芽澆了水就會長。給自己的一句小誇獎，就是第一口水`,
      shareLine: `我的戀愛自信等級：1級 新芽 🌱（{score}分/48，前{percent}%）說我才剛剛發芽… 太真實了嗚 你是幾級？截圖傳我`,
    },
    {
      title: `2級 害羞`,
      gaugeLabel: `害羞`,
      levelLine: `心裡有話，說出來卻很小心`,
      shortDescription: `你的心意很大，所以表達才會這麼小心。`,
      description: `想說的話會在心裡過好幾遍，開口前先看對方的反應。謹慎是優點，可話一次次嚥回去，委屈也會攢下來。只要練習小小地表達，這一級就能明顯長高。`,
      scoreRange: `20～27分`,
      keywords: `謹慎，表達小心，看對方臉色，想完再做`,
      strengths: `謹慎、細膩，也懂得體諒對方的心`,
      tips: `菜單或地點這類小選擇，先說一個自己的意見\n猶豫太久時，定一條「3分鐘內傳出去」\n寫下對方喜歡你的三個證據，晃的時候拿出來看`,
      counseling: `如果因為害怕表達，連日常生活都變得很難，可以和心理諮商師聊聊。`,
      oneLiner: `害羞說明心意很深。多說一句，關係就會不一樣`,
      shareLine: `我的戀愛自信等級：2級 害羞 🌸（{score}分/48，前{percent}%）說我心意大、表達卻很小心哈哈 你是幾級？截個圖`,
    },
    {
      title: `3級 穩定`,
      gaugeLabel: `穩定`,
      levelLine: `會晃，但能回到自己的中心`,
      shortDescription: `你偶爾會晃，但很快就能找回自己的中心。`,
      description: `多數時候你說得出自己的心意，也聽得進對方的看法。比較和不安冒出來時，還是會縮一下。你的恢復力不錯，經驗越多越穩。知道自己在哪裡會晃，就已經往上走了一步。`,
      scoreRange: `28～34分`,
      keywords: `穩定，恢復，平衡，偶爾會晃，正在長大`,
      strengths: `能調節情緒，用對話解開，也能很快從晃動裡回來`,
      tips: `記下晃過的時刻，寫成「這時候我這樣回來」\n一開始比較，就先想起自己的三個魅力\n委屈別拖，當天短短說完`,
      counseling: `如果已經不只是偶爾晃一下，焦慮久到影響生活，可以和心理諮商師聊聊。`,
      oneLiner: `你已經有晃了還能回來的力氣。這份力氣，可以信`,
      shareLine: `我的戀愛自信等級：3級 穩定 🌿（{score}分/48，前{percent}%）說我晃了也能回來… 你是幾級？截圖傳我`,
    },
    {
      title: `4級 坦然`,
      gaugeLabel: `坦然`,
      levelLine: `相信自己，也能坦然說出來`,
      shortDescription: `在戀愛裡，你說得出自己的心意和看法。`,
      description: `委屈能平靜地說，誇獎能高興地接住，不同的地方也能談出一個中間。對方的反應不會大幅改寫你的價值。坦然之外，也留一點聽的時間，才不會錯過對方的心情。`,
      scoreRange: `35～41分`,
      keywords: `坦然，誠實表達，協調，相信自己，價值穩定`,
      strengths: `能誠實說出心意，也能和對方平等地談`,
      tips: `說完自己的看法，再問一次「你怎麼想」\n對方在晃時，可以分享你的穩定，但別把對方的情緒攬成自己的責任\n難的日子不必裝得坦然，依靠一下也沒關係`,
      counseling: `如果坦然的背後一直在壓著情緒，可以和心理諮商師聊聊。`,
      oneLiner: `坦然不是贏過對方，而是一起站著。再加上傾聽，會更穩`,
      shareLine: `我的戀愛自信等級：4級 坦然 🌳（{score}分/48，前{percent}%）說我相信自己、也說得出口哈哈 你是幾級？把前百分之幾截個圖`,
    },
    {
      title: `5級 自信滿等`,
      gaugeLabel: `滿等`,
      levelLine: `相信本來的自己`,
      shortDescription: `你相信本來的自己也值得被愛。這是自信滿等。`,
      description: `你不被比較和評價帶著走，委屈和愛意都能誠實地說，就算這段關係可能結束，也會做適合自己的選擇。健康的自信讓對方放鬆，也成了關係的基準。不必完美，偶爾晃一下也允許自己。`,
      scoreRange: `42～48分`,
      keywords: `相信自己，誠實，健康的邊界，不被比較帶走，穩定感`,
      strengths: `相信自己的價值，守住健康的界線，也讓對方感到安定`,
      tips: `偶爾晃一下也很正常，需要幫助就直接說\n也看看對方的節奏，別讓自信變成壓力\n把這套做法分給身邊的人。你的方式也許就是別人的提示`,
      counseling: `就算滿等，遇到難的事也不必一個人扛。需要的時候，和心理諮商師聊聊。`,
      oneLiner: `自信不是從不晃，而是晃了仍然相信自己。現在的你，已經足夠亮`,
      shareLine: `我的戀愛自信等級：5級 自信滿等 👑（{score}分/48，前{percent}%）說我相信本來的自己哈哈 你是幾級？截圖傳我`,
    },
  ],
  areas: {
    approach: `先開口`,
    praise: `接住誇獎`,
    hurt: `說出委屈`,
    voice: `說出想法`,
    compare: `面對比較`,
    self: `相信自己`,
  },
};

const VI: Phase3LoveConfidenceLevelLocaleBundle = {
  questions: [
    {
      q: `Lúc định nhắn trước cho người mình thích, bạn sẽ?`,
      opts: [
        `Nhắn nhẹ trước. Nếu người đó thấy nặng thì tính sau`,
        `Phân vân rất lâu có được nhắn trước không, rồi mới gửi`,
        `Thường chờ người đó nhắn, rồi cuối cùng không gửi`,
        `Bỏ luôn, vì nghĩ mình nhắn sẽ làm người đó thấy phiền`,
      ],
    },
    {
      q: `Người ấy khen hôm nay bạn đẹp. Bạn sẽ?`,
      opts: [
        `Nghĩ là khen cho có, xua tay "không có đâu"`,
        `Cười nhận: "Cảm ơn, hôm nay mình cũng thích bản thân"`,
        `Nói cảm ơn, nhưng trong lòng chưa tin hẳn`,
        `Vui, nhưng ngượng nên nói cho qua`,
      ],
    },
    {
      q: `Có chuyện khiến bạn tủi. Bạn sẽ?`,
      opts: [
        `Nuốt lời, chờ người đó tự nhận ra`,
        `Sợ nói ra mối quan hệ thành gượng, nên bảo không sao`,
        `Trong ngày hôm đó, bình tĩnh nói điều làm mình tủi`,
        `Nghĩ đi nghĩ lại nhiều lần, rồi nói vòng một cách cẩn thận`,
      ],
    },
    {
      q: `Người ấy hỏi "Bạn thích điểm nào ở mình?" Bạn sẽ?`,
      opts: [
        `Khiêm tốn nói một hai điểm rồi đổi chuyện ngay`,
        `Khó khăn lắm mới kể được một điểm mạnh người khác từng nói`,
        `Không nghĩ ra điểm mạnh nào, nên né câu hỏi`,
        `Kể vài điểm mạnh của mình một cách tự nhiên`,
      ],
    },
    {
      q: `Người ấy đi chơi với bạn bè, nhắn ít hơn. Bạn sẽ?`,
      opts: [
        `Bảo người đó chơi vui, rồi dành thời gian cho mình`,
        `Tủi, nhưng không để lộ, tự chịu`,
        `Lo người đó để lòng ở chỗ khác, muốn kiểm tra`,
        `Thu mình, nghĩ có phải mình không đủ vui`,
      ],
    },
    {
      q: `Phải chọn chỗ hẹn. Bạn sẽ?`,
      opts: [
        `Người đó muốn đi đâu thì mình theo đó`,
        `Nói trước chỗ mình muốn đi, rồi nghe ý người đó`,
        `Nắm gu của người đó rồi đề xuất chỗ gần giống`,
        `Có chỗ muốn đi, nhưng không mở lời được`,
      ],
    },
    {
      q: `Bạn và người ấy khác ý. Bạn sẽ?`,
      opts: [
        `Nghĩ mình sai, rút ý rất nhanh`,
        `Không nói, vì sợ không khí xấu đi`,
        `Nói chỗ khác nhau, rồi tìm điểm giữa`,
        `Có nói ý mình, nhưng người đó phản đối là dễ lung lay`,
      ],
    },
    {
      q: `Người ấy nói "Dạo này bạn khác rồi". Bạn sẽ?`,
      opts: [
        `Lo, nhưng bên ngoài giả vờ ổn`,
        `Nghĩ đi nghĩ lại mình sai chỗ nào, rồi tự trách`,
        `Lo người đó thất vọng về mình`,
        `Hỏi nhẹ, chỗ nào trông khác`,
      ],
    },
    {
      q: `Chuyện người yêu cũ, hoặc một người hấp dẫn hơn, được nhắc tới. Bạn sẽ?`,
      opts: [
        `Mỗi người một vẻ, mình không bận tâm nhiều`,
        `Có vướng, nhưng cố không so`,
        `Bắt đầu so, và nghĩ mãi một lúc`,
        `Thấy mình thua người đó, lòng chùng xuống`,
      ],
    },
    {
      q: `Người ấy thể hiện tình cảm rất lớn. Bạn sẽ?`,
      opts: [
        `Lo mình không xứng được yêu như vậy`,
        `Nhận một cách vui, và cũng nói lòng mình`,
        `Vui, nhưng thấy phải đáp lại đúng phần đã nhận, thành gánh`,
        `Biết ơn, nhưng sợ nó sắp mất, nên không mở lòng hết`,
      ],
    },
    {
      q: `Bạn nghĩ mối quan hệ này có thể kết thúc. Bạn sẽ?`,
      opts: [
        `Gác ý mình để cố giữ bằng được`,
        `Tự trách, chắc vì mình chưa đủ tốt`,
        `Nghĩ sẽ nói chuyện, rồi chọn điều hợp với mình`,
        `Lo, nhưng tạm xem tình hình đã`,
      ],
    },
    {
      q: `Câu nào gần bạn lúc này nhất?`,
      opts: [
        `"Thỉnh thoảng vẫn lung lay, nhưng mình đang dần tin mình"`,
        `"Người đó thích mình đến đâu, mình mới thấy mình ổn đến đó"`,
        `"Mình không biết mình có đáng được yêu không"`,
        `"Mình như vốn vậy cũng đáng được yêu"`,
      ],
    },
  ],
  results: [
    {
      title: `Cấp 1 Mầm non`,
      gaugeLabel: `Mầm`,
      levelLine: `Mới vừa nhú mầm`,
      shortDescription: `Sự tự tin khi yêu của bạn như mầm vừa nhú. Còn nhỏ, nhưng chỗ để lớn là nhiều nhất.`,
      description: `Trước tin nhắn, lời khen và việc nói ra nỗi tủi, bạn hạ mình xuống và nghiêng theo phản ứng của người đó. Đôi khi bạn nghi mình không đáng được yêu. Đây không phải tính cách. Nó đến từ trải nghiệm và niềm tin, nên có thể lớn.`,
      scoreRange: `12–19 điểm`,
      keywords: `Thu mình, tự nghi ngờ, dựa vào phản ứng, nuốt lời`,
      strengths: `Bạn để ý người đó rất kỹ, và trân trọng mối quan hệ`,
      tips: `Mỗi ngày viết một việc hôm nay mình làm tốt\nKhi được khen, nói "cảm ơn" trước khi nói "không có đâu"\nNỗi tủi thì bắt đầu bằng một câu sự thật, ngắn thôi`,
      counseling: `Nếu cảm giác "mình chưa đủ" còn mạnh cả ngoài chuyện tình cảm, hãy nói chuyện với chuyên gia tâm lý.`,
      oneLiner: `Mầm được tưới là lớn. Một lời khen nhỏ bạn dành cho mình là giọt nước đầu tiên`,
      shareLine: `Cấp độ tự tin khi yêu của mình: Cấp 1 Mầm non 🌱 ({score} điểm/48, top {percent}%) Bảo là mới nhú mầm... đúng mình quá 😭 Bạn cấp mấy? Chụp màn hình gửi mình`,
    },
    {
      title: `Cấp 2 E thẹn`,
      gaugeLabel: `E thẹn`,
      levelLine: `Lòng có, lời thì còn dè`,
      shortDescription: `Lòng bạn lớn, nên cách nói mới thận trọng đến vậy.`,
      description: `Bạn nghĩ đi nghĩ lại câu muốn nói, và nhìn phản ứng người đó trước khi đưa ý mình. Thận trọng là điểm mạnh, nhưng lời nuốt lại sẽ thành nỗi tủi chất thêm. Chỉ cần tập nói những câu nhỏ, cấp này đã lớn rõ.`,
      scoreRange: `20–27 điểm`,
      keywords: `Thận trọng, nói dè, nhìn sắc mặt, nghĩ rồi mới làm`,
      strengths: `Thận trọng, tinh tế, và biết đọc lòng người đó`,
      tips: `Một lựa chọn nhỏ như món ăn hay địa điểm, hãy nói ý mình trước\nKhi phân vân quá lâu, đặt luật "gửi trong 3 phút"\nViết ba dấu hiệu người đó thích mình, lúc lung lay thì đọc lại`,
      counseling: `Nếu sợ nói ra đến mức cuộc sống hằng ngày cũng nặng, hãy nói chuyện với chuyên gia tâm lý.`,
      oneLiner: `E thẹn nghĩa là lòng sâu. Thêm một câu, mối quan hệ đã khác`,
      shareLine: `Cấp độ tự tin khi yêu của mình: Cấp 2 E thẹn 🌸 ({score} điểm/48, top {percent}%) Lòng lớn mà lời thì dè 😆 Bạn cấp mấy? Chụp màn hình đi`,
    },
    {
      title: `Cấp 3 Vững`,
      gaugeLabel: `Vững`,
      levelLine: `Có lung lay, rồi lại về được`,
      shortDescription: `Bạn thỉnh thoảng lung lay, nhưng nhanh chóng tìm lại trọng tâm.`,
      description: `Phần lớn bạn nói được lòng mình và cũng nghe ý người đó. Khi so sánh hay lo âu dâng lên, bạn vẫn có lúc thu lại. Bạn hồi lại tốt, nên trải nghiệm càng nhiều thì càng vững. Biết chỗ mình lung lay đã là một bậc.`,
      scoreRange: `28–34 điểm`,
      keywords: `Vững, hồi lại, cân bằng, thỉnh thoảng lung lay, đang lớn`,
      strengths: `Bạn điều được cảm xúc, gỡ bằng lời, và trở lại nhanh`,
      tips: `Ghi lại lúc mình lung lay, viết công thức "lúc ấy mình trở lại thế này"\nKhi bắt đầu so, nhớ trước ba điểm mình thấy quý ở mình\nNỗi tủi đừng để dành. Nói ngắn trong ngày hôm đó`,
      counseling: `Nếu không còn là lung lay thoáng qua, mà lo kéo dài đến mức ảnh hưởng ngày thường, hãy nói chuyện với chuyên gia tâm lý.`,
      oneLiner: `Bạn đã có sức trở lại sau khi lung lay. Sức ấy, tin được`,
      shareLine: `Cấp độ tự tin khi yêu của mình: Cấp 3 Vững 🌿 ({score} điểm/48, top {percent}%) Lung lay rồi mình trở lại... Bạn cấp mấy? Chụp màn hình gửi mình`,
    },
    {
      title: `Cấp 4 Thẳng`,
      gaugeLabel: `Thẳng`,
      levelLine: `Tin mình, và nói ra được`,
      shortDescription: `Trong chuyện yêu, bạn nói được lòng mình và ý mình.`,
      description: `Bạn nói nỗi tủi một cách bình tĩnh, nhận lời khen một cách vui, và nói chỗ khác nhau để tìm điểm giữa. Phản ứng của người đó không quyết định giá trị của bạn. Giữ thêm chút thời gian để nghe, để sự thẳng thắn không bỏ lỡ cảm xúc của họ.`,
      scoreRange: `35–41 điểm`,
      keywords: `Thẳng, nói thật, điều chỉnh, tin mình, giá trị vững`,
      strengths: `Bạn nói lòng mình thật, và vẫn nói chuyện với người đó như người ngang hàng`,
      tips: `Nói ý mình xong, hỏi thêm "bạn nghĩ sao"\nChia sự vững của mình cho người đang lung lay, đừng ôm cảm xúc của họ thành việc của mình\nNgày khó, không cần giả vờ thẳng. Dựa vào cũng được`,
      counseling: `Nếu phía sau vẻ thẳng thắn bạn đang nén cảm xúc, hãy nói chuyện với chuyên gia tâm lý.`,
      oneLiner: `Thẳng không phải để thắng người kia, mà để đứng cùng nhau. Thêm biết nghe, sẽ chắc hơn`,
      shareLine: `Cấp độ tự tin khi yêu của mình: Cấp 4 Thẳng 🌳 ({score} điểm/48, top {percent}%) Mình tin mình và nói ra được 😆 Bạn cấp mấy? Chụp top bao nhiêu phần trăm gửi mình`,
    },
    {
      title: `Cấp 5 Tự tin đỉnh`,
      gaugeLabel: `Đỉnh`,
      levelLine: `Tin mình đúng như vốn vậy`,
      shortDescription: `Bạn tin mình như vốn vậy cũng đáng được yêu. Đây là tự tin ở mức đỉnh.`,
      description: `Bạn không bị so sánh và đánh giá kéo đi. Nỗi tủi và tình cảm đều nói thật, và dù mối quan hệ có thể kết thúc, bạn vẫn chọn điều hợp với mình. Tự tin lành mạnh làm người kia nhẹ lòng, và thành chuẩn của mối quan hệ. Không cần hoàn hảo. Hãy cho phép mình thỉnh thoảng lung lay.`,
      scoreRange: `42–48 điểm`,
      keywords: `Tin mình, thật, ranh giới lành, không bị so sánh kéo, sự vững`,
      strengths: `Bạn tin giá trị của mình, giữ ranh giới lành, và làm người kia thấy yên`,
      tips: `Lung lay đôi lúc là bình thường. Cần giúp thì cứ nói\nNhìn cả nhịp của người đó, để tự tin không thành áp lực\nChia cách này với người quanh mình. Cách của bạn có thể là gợi ý của ai đó`,
      counseling: `Dù ở mức đỉnh, chuyện khó đến thì đừng gánh một mình. Khi cần, hãy nói chuyện với chuyên gia tâm lý.`,
      oneLiner: `Tự tin không phải không bao giờ lung lay, mà là lung lay vẫn tin mình. Bạn bây giờ đã đủ sáng`,
      shareLine: `Cấp độ tự tin khi yêu của mình: Cấp 5 Tự tin đỉnh 👑 ({score} điểm/48, top {percent}%) Mình tin mình đúng như vốn vậy 😆 Bạn cấp mấy? Chụp màn hình gửi mình`,
    },
  ],
  areas: {
    approach: `Chủ động nhắn`,
    praise: `Nhận lời khen`,
    hurt: `Nói nỗi tủi`,
    voice: `Nói ý mình`,
    compare: `Đối mặt so sánh`,
    self: `Tin mình`,
  },
};

const ID: Phase3LoveConfidenceLevelLocaleBundle = {
  questions: [
    {
      q: `Saat mau chat duluan ke orang yang kamu suka, kamu?`,
      opts: [
        `Kirim chat ringan dulu. Kalau dia merasa berat, dipikirkan nanti`,
        `Lama banget mikir boleh chat duluan atau tidak, baru kirim`,
        `Sering menunggu dia yang chat, sampai akhirnya tidak terkirim`,
        `Menyerah. Rasanya chatku cuma bikin dia kesal`,
      ],
    },
    {
      q: `Dia bilang hari ini kamu kelihatan bagus. Kamu?`,
      opts: [
        `Menganggapnya basa-basi, lalu mengelak "ah, tidak kok"`,
        `Tersenyum dan menerima, "Makasih. Hari ini aku juga suka sama diriku"`,
        `Bilang makasih, tapi di dalam hati masih kurang percaya`,
        `Senang, tapi canggung, jadi jawabnya menggantung`,
      ],
    },
    {
      q: `Ada hal yang bikin kamu kecewa. Kamu?`,
      opts: [
        `Menelan kata-kata, menunggu dia yang sadar`,
        `Bilang tidak apa-apa, karena takut hubungan jadi canggung`,
        `Hari itu juga, dengan tenang bilang bagian yang membuatmu kecewa`,
        `Dipikir berkali-kali, lalu disampaikan dengan hati-hati dan tidak langsung`,
      ],
    },
    {
      q: `Dia bertanya, "Kamu suka apa dari dirimu?" Kamu?`,
      opts: [
        `Menyebut satu dua hal dengan rendah hati, lalu cepat ganti topik`,
        `Hanya berhasil menyebut satu kelebihan yang pernah orang lain bilang`,
        `Tidak ada kelebihan yang terpikir, jadi menghindar`,
        `Menceritakan beberapa kelebihanku dengan wajar`,
      ],
    },
    {
      q: `Dia main dengan teman-temannya dan chatnya jadi jarang. Kamu?`,
      opts: [
        `Menyuruhnya bersenang-senang, lalu mengisi waktuku sendiri`,
        `Kecewa, tapi tidak ditunjukkan dan ditahan`,
        `Cemas hatinya pindah ke orang lain, dan ingin memastikan`,
        `Mengerut, merasa mungkin aku tidak cukup menyenangkan`,
      ],
    },
    {
      q: `Harus menentukan tempat kencan. Kamu?`,
      opts: [
        `Mengikuti tempat yang dia mau, tanpa tanya`,
        `Mengusulkan tempat yang aku mau dulu, lalu mendengar pendapatnya`,
        `Membaca seleranya, lalu mengusulkan yang mirip`,
        `Ada tempat yang ingin kudatangi, tapi tidak bisa mengatakannya`,
      ],
    },
    {
      q: `Pendapatmu beda dengan dia. Kamu?`,
      opts: [
        `Merasa pendapatku salah, lalu cepat menariknya`,
        `Tidak menyampaikan pendapat, takut suasananya rusak`,
        `Membicarakan perbedaannya dan mencari titik tengah`,
        `Menyampaikan pendapat, tapi mudah goyah kalau dia menolak`,
      ],
    },
    {
      q: `Dia bilang, "Belakangan kamu kelihatan beda." Kamu?`,
      opts: [
        `Khawatir, tapi di luar pura-pura baik-baik saja`,
        `Mengulang-ulang kesalahanku dan menyalahkan diri`,
        `Cemas, jangan-jangan dia kecewa padaku`,
        `Dengan ringan bertanya, bagian mana yang kelihatan beda`,
      ],
    },
    {
      q: `Pembicaraan soal mantan, atau orang yang lebih menarik, muncul. Kamu?`,
      opts: [
        `Daya tarik tiap orang beda. Aku tidak terlalu memikirkannya`,
        `Sempat mengganjal, tapi aku berusaha tidak membandingkan`,
        `Jadi membandingkan, dan pikirannya bertahan cukup lama`,
        `Merasa aku kalah dari orang itu, hati jadi turun`,
      ],
    },
    {
      q: `Dia menunjukkan rasa sayang yang besar. Kamu?`,
      opts: [
        `Cemas, apakah aku pantas menerima cinta sebesar ini`,
        `Menerimanya dengan senang, dan ikut mengatakan perasaanku`,
        `Senang, tapi merasa harus membalas sebanyak yang kuterima`,
        `Bersyukur, tapi tidak bisa membuka hati penuh karena takut rasanya hilang`,
      ],
    },
    {
      q: `Kamu merasa hubungan ini mungkin akan berakhir. Kamu?`,
      opts: [
        `Mengalahkan pendapatku sendiri supaya bisa dipertahankan`,
        `Menyalahkan diri. Pasti karena aku belum cukup`,
        `Berpikir kita bicara dulu, lalu aku memilih yang cocok untukku`,
        `Cemas, tapi untuk sementara melihat bagaimana jadinya`,
      ],
    },
    {
      q: `Kalimat mana yang paling mirip denganmu sekarang?`,
      opts: [
        `"Kadang goyah, tapi aku pelan-pelan percaya pada diriku"`,
        `"Aku merasa baik-baik saja hanya sebesar dia menyukaiku"`,
        `"Aku tidak tahu apakah aku orang yang pantas dicintai"`,
        `"Aku apa adanya juga pantas dicintai"`,
      ],
    },
  ],
  results: [
    {
      title: `Level 1 Tunas`,
      gaugeLabel: `Tunas`,
      levelLine: `Baru mulai bertunas`,
      shortDescription: `Kepercayaan dirimu saat pacaran seperti tunas yang baru muncul. Masih kecil, dan ruang tumbuhnya paling besar.`,
      description: `Saat chat, menerima pujian, atau mengatakan kekecewaan, kamu merendahkan diri dan mudah goyah oleh respons dia. Kadang kamu ragu apakah kamu pantas dicintai. Ini bukan sifat. Ini datang dari pengalaman dan keyakinan, jadi bisa tumbuh.`,
      scoreRange: `12–19 poin`,
      keywords: `Mengerut, meragukan diri, bergantung pada respons dia, menelan kata`,
      strengths: `Kamu memperhatikan dia dengan teliti dan menghargai hubungan ini`,
      tips: `Sehari sekali, tulis satu hal yang hari ini kamu lakukan dengan baik\nSaat dipuji, coba "makasih" sebelum "ah, tidak"\nKekecewaan mulai dari satu kalimat fakta, singkat saja`,
      counseling: `Kalau rasa "aku belum cukup" juga kuat di luar pacaran, bicara dengan konselor bisa membantu.`,
      oneLiner: `Tunas tumbuh kalau disiram. Pujian kecil untuk dirimu adalah siraman pertama`,
      shareLine: `Level percaya diriku saat pacaran: Level 1 Tunas 🌱 ({score} poin/48, {percent}% teratas) Katanya baru mulai bertunas... ini aku banget 😭 Kamu level berapa? Kirim screenshotnya`,
    },
    {
      title: `Level 2 Malu-malu`,
      gaugeLabel: `Malu`,
      levelLine: `Perasaannya ada, cara bilangnya masih hati-hati`,
      shortDescription: `Perasaanmu besar, makanya cara menyampaikannya jadi hati-hati.`,
      description: `Kata yang ingin diucapkan dipikir berkali-kali, dan respons dia dicek dulu sebelum pendapatmu keluar. Hati-hati itu kekuatan, tapi kata yang ditelan akan menumpuk jadi kecewa. Latihan menyampaikan hal kecil saja sudah bisa menumbuhkan level ini.`,
      scoreRange: `20–27 poin`,
      keywords: `Hati-hati, kata yang dijaga, membaca dia, bertindak setelah berpikir`,
      strengths: `Kamu teliti, peka, dan pandai membaca perasaan dia`,
      tips: `Satu pilihan kecil, seperti menu atau tempat, sampaikan dulu pendapatmu\nKalau ragu terlalu lama, buat aturan "kirim dalam 3 menit"\nTulis tiga tanda dia suka kamu, baca saat kamu goyah`,
      counseling: `Kalau takut menyampaikan perasaan sampai kehidupan sehari-hari ikut berat, bicara dengan konselor bisa membantu.`,
      oneLiner: `Malu berarti perasaannya dalam. Satu kalimat lagi bisa mengubah hubungan`,
      shareLine: `Level percaya diriku saat pacaran: Level 2 Malu-malu 🌸 ({score} poin/48, {percent}% teratas) Perasaannya besar, cara bilangnya hati-hati wkwk Kamu level berapa? Screenshot, yuk`,
    },
    {
      title: `Level 3 Stabil`,
      gaugeLabel: `Stabil`,
      levelLine: `Goyah, lalu kembali ke tengah`,
      shortDescription: `Kamu kadang goyah, tapi cepat menemukan pusatmu lagi.`,
      description: `Sebagian besar kamu bisa bilang perasaanmu dan juga mendengar pendapat dia. Saat membandingkan atau cemas, kamu masih bisa mengerut. Kamu cepat pulih, jadi semakin banyak pengalaman, semakin stabil. Tahu di mana kamu goyah sudah satu tingkat naik.`,
      scoreRange: `28–34 poin`,
      keywords: `Stabil, pulih, seimbang, sesekali goyah, sedang tumbuh`,
      strengths: `Kamu mengatur emosi, mengurainya dengan bicara, dan cepat kembali`,
      tips: `Catat momen kamu goyah, lalu buat rumus "begini cara aku kembali"\nSaat mulai membandingkan, ingat dulu tiga hal yang kamu suka dari dirimu\nJangan menunda kecewa. Sampaikan singkat di hari yang sama`,
      counseling: `Kalau bukan lagi goyah sesaat, dan cemasnya lama sampai mengganggu hari-hari, bicara dengan konselor bisa membantu.`,
      oneLiner: `Kamu sudah punya kekuatan untuk kembali. Kekuatan itu boleh dipercaya`,
      shareLine: `Level percaya diriku saat pacaran: Level 3 Stabil 🌿 ({score} poin/48, {percent}% teratas) Aku goyah, lalu kembali... Kamu level berapa? Kirim screenshotnya`,
    },
    {
      title: `Level 4 Pede`,
      gaugeLabel: `Pede`,
      levelLine: `Percaya diri, dan bisa mengatakannya`,
      shortDescription: `Saat pacaran, kamu bisa mengatakan perasaan dan pendapatmu dengan tenang.`,
      description: `Kekecewaan disampaikan dengan tenang, pujian diterima dengan senang, dan perbedaan dibicarakan sampai ketemu tengahnya. Respons dia tidak menentukan nilaimu. Sisakan waktu untuk mendengar, supaya pede tidak melewatkan perasaan dia.`,
      scoreRange: `35–41 poin`,
      keywords: `Pede, jujur, menyesuaikan, percaya diri, nilai yang stabil`,
      strengths: `Kamu jujur soal perasaanmu, dan tetap bicara dengan dia secara seimbang`,
      tips: `Setelah menyampaikan pendapat, tanya sekali lagi "kamu bagaimana"\nBagikan ketenanganmu pada pasangan yang goyah, tanpa menanggung perasaannya\nDi hari yang berat, tidak perlu pura-pura pede. Bersandar juga boleh`,
      counseling: `Kalau di balik sikap pede kamu menahan emosi terus-menerus, bicara dengan konselor bisa membantu.`,
      oneLiner: `Pede bukan untuk mengalahkan dia, melainkan untuk berdiri bersama. Ditambah mau mendengar, jadinya lebih kokoh`,
      shareLine: `Level percaya diriku saat pacaran: Level 4 Pede 🌳 ({score} poin/48, {percent}% teratas) Aku percaya diri dan bisa mengatakannya wkwk Kamu level berapa? Screenshot persen teratasnya`,
    },
    {
      title: `Level 5 Pede Maksimal`,
      gaugeLabel: `Maks`,
      levelLine: `Percaya pada dirimu apa adanya`,
      shortDescription: `Kamu percaya dirimu apa adanya juga pantas dicintai. Ini kepercayaan diri di level maksimal.`,
      description: `Kamu tidak terbawa perbandingan dan penilaian. Kecewa dan sayang sama-sama bisa dikatakan dengan jujur, dan meski hubungan ini mungkin berakhir, kamu memilih yang cocok untukmu. Kepercayaan diri yang sehat membuat dia lebih ringan, dan jadi patokan hubungan. Tidak harus sempurna. Sesekali goyah juga boleh.`,
      scoreRange: `42–48 poin`,
      keywords: `Percaya diri, jujur, batas yang sehat, tidak goyah oleh perbandingan, rasa stabil`,
      strengths: `Kamu percaya nilaimu, menjaga batas yang sehat, dan membuat dia merasa tenang`,
      tips: `Goyah sesekali itu wajar. Kalau butuh bantuan, minta dengan ringan\nPerhatikan juga temponya, supaya kepercayaan dirimu tidak jadi tekanan\nBagikan cara ini ke orang sekitar. Caramu bisa jadi petunjuk orang lain`,
      counseling: `Meski di level maksimal, hal yang berat tidak harus dipikul sendiri. Bicara dengan konselor saat kamu membutuhkannya.`,
      oneLiner: `Percaya diri bukan tidak pernah goyah, melainkan tetap percaya pada diri saat goyah. Kamu yang sekarang sudah cukup bersinar`,
      shareLine: `Level percaya diriku saat pacaran: Level 5 Pede Maksimal 👑 ({score} poin/48, {percent}% teratas) Aku percaya diriku apa adanya wkwk Kamu level berapa? Kirim screenshotnya`,
    },
  ],
  areas: {
    approach: `Chat duluan`,
    praise: `Menerima pujian`,
    hurt: `Mengatakan kecewa`,
    voice: `Menyampaikan pendapat`,
    compare: `Menghadapi perbandingan`,
    self: `Percaya pada diri`,
  },
};

export const PHASE3_LOVE_CONFIDENCE_LEVEL_I18N: Record<
  Phase3LoveConfidenceLevelForeignLocale,
  Phase3LoveConfidenceLevelLocaleBundle
> = {
  en: EN,
  ja: JA,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  vi: VI,
  id: ID,
};
