/** 나의 밀당 레벨 테스트 — 외국어 번역 (문항 순서는 phase3PushPullLevelData RAW_QUESTIONS와 동일) */

export type Phase3PushPullLevelForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3PushPullLevelResultText {
  title: string;
  levelLine: string;
  shortDescription: string;
  description: string;
  scoreRange: string;
  keywords: string;
  strengths: string;
  tips: string;
  oneLiner: string;
  shareLine: string;
}

export interface Phase3PushPullLevelLocaleBundle {
  questions: { q: string; opts: [string, string, string, string] }[];
  results: Phase3PushPullLevelResultText[];
  areas: { pace: string; test: string; hurt: string; progress: string };
  growth: { pace: string; test: string; hurt: string; progress: string };
  chemistry: [string, string, string, string];
}

const EN: Phase3PushPullLevelLocaleBundle = {
  questions: [
    {
      q: `The person you're talking to texts you first. What do you do?`,
      opts: [
        `I reply warmly, but I keep living my day and let the chat move at a natural pace`,
        `I'm happy, but I wait a little on purpose so my reply feels unhurried`,
        `I wait a few hours so I don't look too easy`,
        `I'm so glad I reply right away and keep the conversation going for a long time`,
      ],
    },
    {
      q: `Their reply is later than usual. What do you do?`,
      opts: [
        `I go quiet on purpose and wait for them to come to me first`,
        `I figure they might be busy, so I get on with my own day and wait`,
        `It bothers me, but I don't show it and carry on as usual`,
        `I get anxious and send follow-up messages one after another`,
      ],
    },
    {
      q: `They ask if you're free this weekend. What do you do?`,
      opts: [
        `Even if I am free, I act busy and play a little hard to get`,
        `I clear my whole schedule and answer as if I'm free no matter what`,
        `I tell them honestly when I'm free and say I'd like to see them`,
        `I share the times that work and adjust based on how they respond`,
      ],
    },
    {
      q: `They tell you they like you. What do you do?`,
      opts: [
        `I show I'm happy, but I let my feelings move at a slower pace`,
        `I like them, but I stay vague and keep watching a little longer`,
        `My feelings run ahead and I pour all of them out at once`,
        `I say thank you honestly and let them know I like them too, without overdoing it`,
      ],
    },
    {
      q: `The conversation clicks and you've been texting all day. What do you do?`,
      opts: [
        `I enjoy it, then wrap up naturally with something like, "I've got to get back to work"`,
        `I keep talking, but I ease up a little on how often we text the next day`,
        `I suddenly slow my replies so they don't get tired of me`,
        `I try to keep it going forever and hold onto the chat all night`,
      ],
    },
    {
      q: `They suddenly text less. What do you do?`,
      opts: [
        `I go cold on purpose to test whether they still care`,
        `I send a light check-in that shows I'm a little worried, then see how they respond`,
        `I give it a while, and reach out once if it still feels needed`,
        `I feel hurt and want to demand an explanation`,
      ],
    },
    {
      q: `They postpone seeing you because of another plan. What do you do?`,
      opts: [
        `I hide that I'm disappointed and just say "Yeah, sure" like I'm totally cool`,
        `I feel hurt, so I talk less for a few days as a kind of punishment`,
        `I mention I'm a little disappointed and suggest the next time myself`,
        `I say I understand, and add that I really want to see them next time`,
      ],
    },
    {
      q: `They bring up something that makes you jealous. What do you do?`,
      opts: [
        `It bothers me, but I don't make a big deal of it and keep talking as usual`,
        `I bring up someone else on purpose to hit back`,
        `I get angry and let sharp words come out first`,
        `I say lightly and honestly, "That story kind of got to me"`,
      ],
    },
    {
      q: `You want to take things to the next step. What do you do?`,
      opts: [
        `I watch how they respond and naturally suggest getting closer`,
        `I wait until their interest feels more certain, then I say something`,
        `I wait for them to say it first and only drop hints`,
        `Before I'm sure, I push to define the relationship`,
      ],
    },
    {
      q: `What do you think about playing it cool?`,
      opts: [
        `I believe you have to keep them guessing if you want their heart`,
        `I think it's the process of finding a distance that feels good for both of you`,
        `I think a little of it, only when you need it, can help`,
        `I find it hard and full of calculations, so it wears me out`,
      ],
    },
  ],
  results: [
    {
      title: `Push-Pull Rookie`,
      levelLine: `Swinging between charging in and testing them`,
      shortDescription: `You're at the stage where your feelings run ahead—or you test them and things go sideways.`,
      description: `When you're happy, you pour everything out. When you're anxious, you test them or pull away like a punishment. Your feelings are big, and the pacing just hasn't caught up yet. Distance is a skill that grows fast with practice.`,
      scoreRange: `10–16 pts`,
      keywords: `charging in, testing, feelings first, shaky pacing`,
      strengths: `Honest, sincere, and open—you don't hide how you feel`,
      tips: `Before you text, ask yourself once: "Am I here to talk, or to check their reaction?"\nWhen you're hurt, say "That hurt me" instead of testing them\nWhen your feelings spike, wait 30 minutes and reread the message before you send it`,
      oneLiner: `Sincerity is your best move. Add a little sense of distance, and everything feels easier`,
      shareLine: `My push-pull level: Push-Pull Rookie 🍼 ({score}/40) Apparently I charge in before my feelings catch up lol What's your level? Let's compare`,
    },
    {
      title: `Push-Pull Beginner`,
      levelLine: `Calculating and reading the room until you're tired`,
      shortDescription: `You're at the stage where thinking about the game makes you less natural.`,
      description: `You delay replies so you don't look too easy, or act cool and then your feelings get crossed. The more you calculate, the more tired you get—and the less fun it is.`,
      scoreRange: `17–22 pts`,
      keywords: `calculating, acting cool, reading the room, awkward, drained`,
      strengths: `Thoughtful effort—you really want to leave a good impression`,
      tips: `Instead of delaying on purpose, set a pace that matches your actual day\nSkip the cool act and add one honest sentence\nWhen the calculating starts, ask only this: "Does this make both of us more comfortable?"`,
      oneLiner: `Natural comes before technique. Cut the calculating, and this gets easier`,
      shareLine: `My push-pull level: Push-Pull Beginner 🐣 ({score}/40) Apparently I wear myself out calculating... What's your level? Let's compare`,
    },
    {
      title: `Push-Pull Intermediate`,
      levelLine: `Mostly finding the balance`,
      shortDescription: `You mostly adjust distance and warmth in a natural way.`,
      description: `You balance being glad to hear from them with giving things room, and anxiety doesn't shake you much. You only need to smooth the moments when your feelings run ahead or you overthink.`,
      scoreRange: `23–28 pts`,
      keywords: `balance, room to breathe, the occasional wobble, natural`,
      strengths: `A steady calm—you read both the feeling and the situation before you react`,
      tips: `Write down the moments you wobbled and look for the pattern\nDon't store up what bothers you—say it in one light sentence\nTry talking about matching their pace with yours`,
      oneLiner: `You already have a sense of balance. One honest sentence is what takes you to the next level`,
      shareLine: `My push-pull level: Push-Pull Intermediate 🌿 ({score}/40) Apparently I mostly keep the balance lol What's your level? Let's compare`,
    },
    {
      title: `Push-Pull Pro`,
      levelLine: `Using honesty and ease together`,
      shortDescription: `You're a pro who uses honesty and ease at the same time.`,
      description: `You show when you're happy, say the anxious part lightly, and match their pace. You know how to walk together more than how to push and pull.`,
      scoreRange: `29–34 pts`,
      keywords: `honesty, ease, matching pace, light words, trust`,
      strengths: `You can say how you feel and still respect their pace`,
      tips: `Once you know they like you, be the one to lightly suggest the next step\nWhen they come toward you a little clumsily, receive it warmly\nKeep checking that "managing the distance" hasn't turned into a strategy`,
      oneLiner: `Honesty is the best kind of push-pull. Go ahead and take one step first`,
      shareLine: `My push-pull level: Push-Pull Pro 🌳 ({score}/40) Apparently honesty is the best move! What's your level? Let's compare results`,
    },
    {
      title: `Push-Pull Master`,
      levelLine: `The top level: building a distance that feels good for both of you`,
      shortDescription: `You're a master at finding a comfortable distance together.`,
      description: `Texts, plans, hurt feelings, taking the next step—you handle them naturally and say what needs saying. Because you aren't trying to shake them, trust builds. Just keep some warmth next to the skill, so it never looks like a calculation.`,
      scoreRange: `35–40 pts`,
      keywords: `balance, respect, a natural pace, honesty, trust`,
      strengths: `A mature sense of respect, and of finding a distance that works for both of you`,
      tips: `Show a clumsy feeling now and then, so skill doesn't turn into distance\nWhen their pace is slower, keep the room to wait\nShare this with friends. Your way can be someone else's hint`,
      oneLiner: `The best push-pull isn't a technique. It's respect. Keep this temperature`,
      shareLine: `My push-pull level: Push-Pull Master 🔮 ({score}/40) Apparently I build a distance that feels good for both of us lol What's your level? Compare with your partner`,
    },
  ],
  areas: {
    pace: `Reply pace`,
    test: `Testing them`,
    hurt: `Saying you're hurt`,
    progress: `Moving things forward`,
  },
  growth: {
    pace: `Your reply pace and how you end a chat wobble the most. Pick a natural speed that fits your actual day.`,
    test: `This is where you score lowest: testing them when you feel anxious. One check-in is safer than going silent.`,
    hurt: `Acting cool or punishing them when you're hurt is the weak spot. Practice saying it in one sentence—that's how you level up.`,
    progress: `The hardest part is the timing of showing interest and suggesting a next step. Start with a light suggestion and watch how they respond.`,
  },
  chemistry: [
    `Your sense of pace is almost the same. There's little guessing, and a comfortable speed comes easily.`,
    `Your speeds are a little different. If the faster one pauses a beat and the slower one adds one honest line, you balance out.`,
    `One of you leans toward charging in, the other toward giving space. Don't test each other—say "this is my pace" out loud.`,
    `Your sense of distance is quite different. A big gap doesn't mean you don't fit. Start by talking about respecting each other's speed.`,
  ],
};

const JA: Phase3PushPullLevelLocaleBundle = {
  questions: [
    {
      q: `気になる人から先に連絡が来た。あなたは？`,
      opts: [
        `嬉しさは伝えつつ、自分の予定もこなして自然なテンポで続ける`,
        `嬉しくても、わざと少し間を置いて余裕のある返事をする`,
        `すぐ返すと軽く見られそうで、数時間後に送る`,
        `嬉しくてすぐ返し、会話を長く引っ張る`,
      ],
    },
    {
      q: `相手の返信がいつもより遅い。あなたは？`,
      opts: [
        `わざとこちらも連絡を絶ち、相手から来るのを待つ`,
        `忙しいのかもと思って、自分の用事をしながら待つ`,
        `気にはなるけど顔に出さず、いつもどおり過ごす`,
        `不安になって、様子を聞くメッセージを連投する`,
      ],
    },
    {
      q: `相手に「今週末、空いてる？」と聞かれた。あなたは？`,
      opts: [
        `空いていても忙しいふりをして、一度そっけなくする`,
        `何があっても空いているように、予定を全部空けて返す`,
        `空いている時間を正直に言って、会いたいと伝える`,
        `都合のいい時間は伝えつつ、反応を見ながら調整する`,
      ],
    },
    {
      q: `相手から好意を伝えられた。あなたは？`,
      opts: [
        `嬉しさは見せるけど、自分の気持ちの速度はゆっくり合わせる`,
        `好きなのに曖昧な反応をして、もう少し様子を見る`,
        `気持ちが先走って、感情を全部ぶちまける`,
        `ありがとうと正直に言って、自分も気になっていることをほどよく伝える`,
      ],
    },
    {
      q: `話が合って、一日中連絡が続いた。あなたは？`,
      opts: [
        `楽しみつつ、自然に「そろそろ仕事するね」と区切る`,
        `会話は続けるけど、翌日の連絡の量は少し抑える`,
        `べったりだと飽きられる気がして、急に返信の間隔を空ける`,
        `終わらせたくなくて、夜通し会話を引き止める`,
      ],
    },
    {
      q: `相手の連絡が急に減った。あなたは？`,
      opts: [
        `関心を試したくて、わざと冷たくする`,
        `心配している気持ちを込めて軽く様子を聞き、反応を見る`,
        `しばらく様子を見て、必要なら一度連絡する`,
        `寂しくて、理由を問い詰めたくなる`,
      ],
    },
    {
      q: `相手が別の予定で会う日をずらした。あなたは？`,
      opts: [
        `残念な気持ちを隠して、クールに「うん、いいよ」とだけ返す`,
        `寂しくて、数日わざと口数を減らして罰を与える`,
        `少し残念だと軽く伝えて、次の予定を自分から提案する`,
        `わかると言いつつ、次は絶対会おうと一言足す`,
      ],
    },
    {
      q: `相手がやきもちを焼くような話を出した。あなたは？`,
      opts: [
        `気にはなるけど大きく反応せず、いつもどおり話す`,
        `わざと自分もほかの人の話を出してやり返す`,
        `腹が立って、感情が先にトゲのある言葉になる`,
        `「その話、ちょっと気になっちゃった」と軽く正直に言う`,
      ],
    },
    {
      q: `関係を一段進めたい。あなたは？`,
      opts: [
        `相手の反応を見ながら、自然に距離を縮める提案をする`,
        `好意のサインがもっと確かになるまで待ってから言う`,
        `相手から言ってくれるのを待ち、サインだけ出す`,
        `確信が持てないうちに、関係を決めようと急かす`,
      ],
    },
    {
      q: `駆け引きについて、あなたの考えは？`,
      opts: [
        `相手をやきもきさせないと心はつかめないと思っている`,
        `お互いが心地いい距離を探していく過程だと思っている`,
        `必要なときだけ少しなら役に立つと思っている`,
        `難しくて計算が多く、つい疲れてしまう`,
      ],
    },
  ],
  results: [
    {
      title: `駆け引きルーキー`,
      levelLine: `直球と試し行動のあいだで揺れる段階`,
      shortDescription: `気持ちが先走る直球か、逆に試してすれ違う段階です。`,
      description: `嬉しいと感情を全部出して、不安になると相手を試したり、罰のように距離を置いたりします。本心が大きいぶん、調節がまだ下手なだけです。距離の感覚は練習すればすぐ伸びます。`,
      scoreRange: `10〜16点`,
      keywords: `直球、試し行動、気持ちが先、調節が苦手`,
      strengths: `正直で本心が大きく、気持ちを隠さない素直さ`,
      tips: `連絡する前に一度、「今の目的は会話？反応の確認？」と自分に聞く\n寂しいときは試す代わりに「それ、寂しかった」と言葉にする\n感情が上がったら30分置いて、送る文面をもう一度読む`,
      oneLiner: `本心は最強の武器です。距離の感覚が少し加われば、ずっと楽になります`,
      shareLine: `私の駆け引きレベル：駆け引きルーキー 🍼（{score}点/40）気持ちが先走る直球タイプなんだってw あなたは何レベル？比べてみよ`,
    },
    {
      title: `駆け引き初級`,
      levelLine: `計算して空気を読み、疲れてしまう段階`,
      shortDescription: `駆け引きを意識するほど、かえって不自然になる段階です。`,
      description: `軽く見られたくなくてわざと返信を遅らせたり、クールなふりをして気持ちがすれ違ったりします。計算が増えるほど、楽しさより疲れのほうが大きくなりがちです。`,
      scoreRange: `17〜22点`,
      keywords: `計算、クールなふり、空気読み、ぎこちなさ、疲れ`,
      strengths: `いい印象を残そうとする繊細さと努力`,
      tips: `わざと遅らせる代わりに、自分の予定に合わせた自然な速度を決める\nクールなふりより、正直な一言を足してみる\n計算が始まったら「この行動は相手と自分を楽にする？」だけ確認する`,
      oneLiner: `テクニックより自然さが先です。計算を減らすと、駆け引きは楽になります`,
      shareLine: `私の駆け引きレベル：駆け引き初級 🐣（{score}点/40）計算して疲れるタイプなんだって…あなたは何レベル？結果比べよ`,
    },
    {
      title: `駆け引き中級`,
      levelLine: `だいたいバランスを取れている段階`,
      shortDescription: `距離と温度を、だいたい自然に調節できる中級です。`,
      description: `嬉しさと余裕のあいだでバランスを取り、不安でも大きくは揺れません。気持ちが先走る瞬間や、空気を読みすぎる瞬間だけ整えれば十分です。`,
      scoreRange: `23〜28点`,
      keywords: `バランス、余裕、たまに揺れる、自然さ`,
      strengths: `感情と状況を両方見て、落ち着いて反応できる安定感`,
      tips: `揺れた瞬間をメモして、繰り返すパターンを探す\n気になることは溜めず、軽い一文で伝える\n相手の速度と自分の速度を合わせる会話を試してみる`,
      oneLiner: `バランス感覚はもうあります。正直な一言が、上級への鍵です`,
      shareLine: `私の駆け引きレベル：駆け引き中級 🌿（{score}点/40）だいたいバランス取れてるタイプなんだってw あなたは何レベル？比べてみて`,
    },
    {
      title: `駆け引き上級`,
      levelLine: `正直さと余裕を一緒に使う段階`,
      shortDescription: `正直さと余裕を一緒に使える駆け引き上級です。`,
      description: `嬉しさは伝え、不安は言葉で軽く出し、速度は相手に合わせます。押したり引いたりより、一緒に歩くやり方を知っています。`,
      scoreRange: `29〜34点`,
      keywords: `正直さ、余裕、速度合わせ、軽い伝え方、信頼`,
      strengths: `気持ちを正直に伝えながら、相手の速度も尊重できる`,
      tips: `好意が確かなら、次の一歩を軽く自分から提案する\n相手がぎこちなく近づいてきたら、あたたかく受け取る\n距離の調節が「戦略」にならないよう、本心を確認し続ける`,
      oneLiner: `正直さがいちばんの駆け引きです。今度は一歩、先に出てみてください`,
      shareLine: `私の駆け引きレベル：駆け引き上級 🌳（{score}点/40）正直さがいちばんの駆け引きなんだって！あなたは何レベル？結果比べよ`,
    },
    {
      title: `駆け引きマスター`,
      levelLine: `お互いが心地いい距離をつくる最上段階`,
      shortDescription: `相手と一緒に心地いい距離を探せる駆け引きマスターです。`,
      description: `連絡も、会うことも、寂しさも、関係を進めることも自然に調節し、必要な言葉は正直に言えます。相手を揺さぶろうとしないから、かえって信頼が積み上がります。ただし手際が計算に見えないよう、心のあたたかさをいつも添えてください。`,
      scoreRange: `35〜40点`,
      keywords: `バランス、尊重、自然な速度、正直さ、信頼`,
      strengths: `相手を尊重し、お互いが心地いい距離を見つける成熟した感覚`,
      tips: `手際が距離にならないよう、たまに不器用な気持ちも見せる\n相手の速度が遅いときは、待つ余裕を保つ\nこのやり方を友達と共有する。誰かのヒントになります`,
      oneLiner: `いちばんの駆け引きはテクニックではなく尊重です。今の温度を守ってください`,
      shareLine: `私の駆け引きレベル：駆け引きマスター 🔮（{score}点/40）お互いが心地いい距離をつくるタイプなんだってw あなたは何レベル？恋人と比べてみて`,
    },
  ],
  areas: {
    pace: `連絡のテンポ`,
    test: `試し行動`,
    hurt: `寂しさの伝え方`,
    progress: `関係の進め方`,
  },
  growth: {
    pace: `返信や会話の区切りのテンポがいちばん揺れます。自分の予定に合わせた自然な速度を決めてみてください。`,
    test: `不安なときに相手を試す反応がいちばん低いです。連絡を絶つより、軽い一声のほうが安全です。`,
    hurt: `寂しいのにクールなふりをしたり、罰のように距離を置いたりするほうが弱いです。一文で伝える練習がレベルを上げます。`,
    progress: `好意や次の一歩を伝えるタイミングがいちばん難しいです。反応を見ながら、軽い提案から始めてみてください。`,
  },
  chemistry: [
    `二人の距離感はほぼ同じです。空気を読み合うことが少なく、心地いい速度が合いやすいです。`,
    `速度が少し違います。速いほうがワンテンポ休み、遅いほうが一文だけ気持ちを足すとバランスが取れます。`,
    `一人は直球、もう一人は余裕寄りです。試すより「今の自分の速度」を言葉で合わせてみてください。`,
    `距離の感覚がかなり違います。点差が大きくても合わないわけではありません。まずはお互いの速度を尊重する会話から。`,
  ],
};

const ZH_CN: Phase3PushPullLevelLocaleBundle = {
  questions: [
    {
      q: `暧昧对象先给你发了消息。你会？`,
      opts: [
        `开心地回，同时过好自己的日子，用自然的节奏聊下去`,
        `虽然高兴，还是故意等一会儿，从容地回`,
        `怕回太快显得太好追，拖几个小时再发`,
        `一高兴就马上回，还把聊天拖得很长`,
      ],
    },
    {
      q: `对方回得比平时晚。你会？`,
      opts: [
        `故意也断联，等对方先来找我`,
        `觉得可能是忙，做自己的事，等着就好`,
        `在意，但不表现出来，照常过日子`,
        `一不安就连着发好几条问候`,
      ],
    },
    {
      q: `对方问你周末有没有空。你会？`,
      opts: [
        `明明有空也装忙，先推一下`,
        `好像随时都有空，把日程全空出来再回`,
        `老实说哪段时间可以，并说想见面`,
        `告诉对方有空的时间，再看反应慢慢调`,
      ],
    },
    {
      q: `对方向你表达了好感。你会？`,
      opts: [
        `高兴会表现出来，但自己的心意按慢一点的节奏来`,
        `喜欢，却给个暧昧的反应，再观察一阵`,
        `心意跑在前面，立刻把感情全倒出来`,
        `老实说谢谢，也适度让对方知道我也有好感`,
      ],
    },
    {
      q: `聊得很投缘，消息聊了一整天。你会？`,
      opts: [
        `开心地聊，然后自然地说“我去忙一下”收个尾`,
        `聊天继续，但第二天把联系的频率稍微收一收`,
        `怕黏太紧对方会腻，突然把回复间隔拉长`,
        `想一直聊下去，整晚都抓着对话不放`,
      ],
    },
    {
      q: `对方突然联系变少了。你会？`,
      opts: [
        `想试探对方还在不在意，故意冷淡`,
        `带着一点担心，轻轻问一句近况，再看反应`,
        `先观察一阵，有需要再联系一次`,
        `心里委屈，想追问原因`,
      ],
    },
    {
      q: `对方因为别的安排推迟了见面。你会？`,
      opts: [
        `藏起失落，装酷只回一句“嗯，好”`,
        `心里委屈，连着几天少说话，像在惩罚对方`,
        `轻轻说有点可惜，并自己先提出下次的时间`,
        `说理解，再补一句下次一定要见`,
      ],
    },
    {
      q: `对方说了让你吃醋的话。你会？`,
      opts: [
        `在意，但不大反应，照常聊天`,
        `故意也提起别人，反击回去`,
        `一生气，情绪先冲出来，话说得很冲`,
        `轻轻松松老实说：“这话我有点在意”`,
      ],
    },
    {
      q: `你想把关系往前推一步。你会？`,
      opts: [
        `看对方的反应，自然地提议再靠近一点`,
        `等好感的信号更明确了再说`,
        `等对方先开口，自己只放一点暗示`,
        `还没确定，就急着把关系定下来`,
      ],
    },
    {
      q: `你怎么看推拉？`,
      opts: [
        `觉得必须让对方着急，才能得到真心`,
        `觉得这是一起找到舒服距离的过程`,
        `觉得只在需要的时候用一点点，会有帮助`,
        `觉得又难又要算计，很容易累`,
      ],
    },
  ],
  results: [
    {
      title: `推拉萌新`,
      levelLine: `在直球和试探之间摇摆的阶段`,
      shortDescription: `你正处在心意跑在前面、或者反过来一试探就错位的阶段。`,
      description: `一高兴就把感情全倒出来，一不安就试探对方，或者像惩罚一样拉开距离。不是不够真心，只是还不太会调节。距离感练一练，会进步得很快。`,
      scoreRange: `10～16分`,
      keywords: `直球，试探，情绪先行，不太会调节`,
      strengths: `坦诚，真心很大，不藏心情的单纯`,
      tips: `发消息前问自己一次：我是想聊天，还是在确认对方的反应？\n委屈的时候别试探，直接说“这件事让我有点难受”\n情绪上来时先等30分钟，再读一遍要发的消息`,
      oneLiner: `真心是最好的武器。再加上一点距离感，会舒服很多`,
      shareLine: `我的推拉等级：推拉萌新 🍼（{score}分/40）原来我是心意跑在前面的直球型哈哈 你几级？来比比`,
    },
    {
      title: `推拉入门`,
      levelLine: `算计和看眼色看到累的阶段`,
      shortDescription: `你正处在越想推拉、反而越不自然的阶段。`,
      description: `怕显得太好追就故意晚回，或者装酷，结果心意对不上。算计越多，乐趣越少，累得越快。`,
      scoreRange: `17～22分`,
      keywords: `算计，装酷，看眼色，别扭，疲惫`,
      strengths: `想给对方留下好印象的细心和努力`,
      tips: `别故意拖回复，按自己的日程定一个自然的速度\n别装酷，多加一句真心话\n一开始算计，就只问一句：这样做会让我们都更舒服吗？`,
      oneLiner: `自然比技巧更重要。少算一点，推拉就会变轻松`,
      shareLine: `我的推拉等级：推拉入门 🐣（{score}分/40）原来我是算到自己累的类型……你几级？来比结果`,
    },
    {
      title: `推拉进阶`,
      levelLine: `大体上能找到平衡的阶段`,
      shortDescription: `你大体上能自然地调节距离和温度。`,
      description: `你能在高兴和从容之间找到平衡，不安的时候也不会晃得太厉害。只要修一修偶尔情绪跑太快、或者太看眼色的瞬间就好。`,
      scoreRange: `23～28分`,
      keywords: `平衡，从容，偶尔动摇，自然`,
      strengths: `能同时看情绪和场面，反应沉稳`,
      tips: `把动摇的瞬间记下来，找出重复的模式\n在意的事别攒着，用轻巧的一句话说出来\n试着聊聊，把对方的节奏和自己的节奏对上`,
      oneLiner: `你已经有平衡感了。一句实话，就是通往高手的钥匙`,
      shareLine: `我的推拉等级：推拉进阶 🌿（{score}分/40）原来我大体上能找平衡哈哈 你几级？来比比`,
    },
    {
      title: `推拉高手`,
      levelLine: `把坦诚和从容一起用上的阶段`,
      shortDescription: `你是能同时用上坦诚和从容的推拉高手。`,
      description: `高兴会说，不安会轻轻讲出来，节奏会跟着对方走。你更懂一起往前走，而不是推来拉去。`,
      scoreRange: `29～34分`,
      keywords: `坦诚，从容，对上节奏，轻轻表达，信任`,
      strengths: `能诚实表达感受，也尊重对方的节奏`,
      tips: `确认了好感，就轻轻先提议下一步\n对方笨拙地靠近时，温暖地接住\n时常确认：调节距离没有变成一种策略`,
      oneLiner: `坦诚就是最好的推拉。现在，先迈出一步吧`,
      shareLine: `我的推拉等级：推拉高手 🌳（{score}分/40）原来坦诚才是最好的推拉！你几级？来比结果`,
    },
    {
      title: `推拉大师`,
      levelLine: `一起找到舒服距离的最高阶段`,
      shortDescription: `你是能和对方一起找到舒服距离的推拉大师。`,
      description: `联系、见面、委屈、往前走，你都能自然调节，该说的话也会老实说。你并不想晃动对方，信任反而会积起来。只是别让熟练看起来像算计，心里的温度要一直带着。`,
      scoreRange: `35～40分`,
      keywords: `平衡，尊重，自然的节奏，坦诚，信任`,
      strengths: `尊重对方，能找到彼此都舒服的距离，感觉成熟`,
      tips: `别让熟练变成距离感，偶尔也露出笨拙的心意\n对方节奏慢的时候，留出等待的从容\n把这套方法分享给朋友。你的方式会成为别人的提示`,
      oneLiner: `最好的推拉不是技巧，是尊重。守住现在的温度`,
      shareLine: `我的推拉等级：推拉大师 🔮（{score}分/40）原来我是能一起找到舒服距离的类型哈哈 你几级？和对象比比看`,
    },
  ],
  areas: {
    pace: `回复节奏`,
    test: `试探`,
    hurt: `表达委屈`,
    progress: `推进关系`,
  },
  growth: {
    pace: `回复和收尾聊天的节奏最容易晃。按自己的日程，定一个自然的速度。`,
    test: `不安时试探对方，是你分数最低的地方。断联不如轻轻问一句近况。`,
    hurt: `委屈时装酷，或者用冷淡当惩罚，是比较弱的一块。练着用一句话讲出来，等级就会上去。`,
    progress: `表达好感和提议下一步的时机最难。先看反应，从轻轻的提议开始。`,
  },
  chemistry: [
    `两个人的推拉感觉几乎一样。不怎么需要猜，舒服的节奏很容易对上。`,
    `节奏有一点不同。快的人停半拍，慢的人多说一句心里话，平衡就回来了。`,
    `一个更偏直球，一个更偏从容。别互相试探，把“我现在的节奏”说出来。`,
    `距离感差得比较多。分差大不代表不合适。先聊聊，尊重彼此的速度。`,
  ],
};

const ZH_TW: Phase3PushPullLevelLocaleBundle = {
  questions: [
    {
      q: `曖昧對象先傳了訊息給你。你會？`,
      opts: [
        `開心地回，同時過好自己的日子，用自然的節奏聊下去`,
        `雖然高興，還是故意等一下，從容地回`,
        `怕回太快顯得太好追，拖幾個小時再傳`,
        `一高興就馬上回，還把聊天拖得很長`,
      ],
    },
    {
      q: `對方回得比平常晚。你會？`,
      opts: [
        `故意也斷聯，等對方先來找我`,
        `覺得可能在忙，做自己的事，等著就好`,
        `在意，但不表現出來，照常過日子`,
        `一不安就連著傳好幾則問候`,
      ],
    },
    {
      q: `對方問你週末有沒有空。你會？`,
      opts: [
        `明明有空也裝忙，先推一下`,
        `好像隨時都有空，把行程全空出來再回`,
        `老實說哪段時間可以，並說想見面`,
        `告訴對方有空的時間，再看反應慢慢調`,
      ],
    },
    {
      q: `對方向你表達了好感。你會？`,
      opts: [
        `高興會表現出來，但自己的心意按慢一點的節奏來`,
        `喜歡，卻給個曖昧的反應，再觀察一陣`,
        `心意跑在前面，立刻把感情全倒出來`,
        `老實說謝謝，也適度讓對方知道我也有好感`,
      ],
    },
    {
      q: `聊得很投緣，訊息聊了一整天。你會？`,
      opts: [
        `開心地聊，然後自然地說「我去忙一下」收個尾`,
        `聊天繼續，但隔天把聯絡的頻率稍微收一收`,
        `怕黏太緊對方會膩，突然把回覆間隔拉長`,
        `想一直聊下去，整晚都抓著對話不放`,
      ],
    },
    {
      q: `對方突然聯絡變少了。你會？`,
      opts: [
        `想試探對方還在不在意，故意冷淡`,
        `帶著一點擔心，輕輕問一句近況，再看反應`,
        `先觀察一陣，有需要再聯絡一次`,
        `心裡委屈，想追問原因`,
      ],
    },
    {
      q: `對方因為別的安排延後了見面。你會？`,
      opts: [
        `藏起失落，裝酷只回一句「嗯，好」`,
        `心裡委屈，連著幾天少說話，像在懲罰對方`,
        `輕輕說有點可惜，並自己先提出下次的時間`,
        `說理解，再補一句下次一定要見`,
      ],
    },
    {
      q: `對方說了讓你吃醋的話。你會？`,
      opts: [
        `在意，但不大反應，照常聊天`,
        `故意也提起別人，反擊回去`,
        `一生氣，情緒先衝出來，話說得很衝`,
        `輕輕地老實說：「這話我有點在意」`,
      ],
    },
    {
      q: `你想把關係往前推一步。你會？`,
      opts: [
        `看對方的反應，自然地提議再靠近一點`,
        `等好感的訊號更明確了再說`,
        `等對方先開口，自己只放一點暗示`,
        `還沒確定，就急著把關係定下來`,
      ],
    },
    {
      q: `你怎麼看推拉？`,
      opts: [
        `覺得必須讓對方著急，才能得到真心`,
        `覺得這是一起找到舒服距離的過程`,
        `覺得只在需要的時候用一點點，會有幫助`,
        `覺得又難又要算計，很容易累`,
      ],
    },
  ],
  results: [
    {
      title: `推拉新手`,
      levelLine: `在直球和試探之間搖擺的階段`,
      shortDescription: `你正處在心意跑在前面、或反過來一試探就錯位的階段。`,
      description: `一高興就把感情全倒出來，一不安就試探對方，或像懲罰一樣拉開距離。不是不夠真心，只是還不太會調節。距離感練一練，會進步得很快。`,
      scoreRange: `10～16分`,
      keywords: `直球，試探，情緒先行，不太會調節`,
      strengths: `坦誠，真心很大，不藏心情的單純`,
      tips: `傳訊息前問自己一次：我是想聊天，還是在確認對方的反應？\n委屈的時候別試探，直接說「這件事讓我有點難受」\n情緒上來時先等30分鐘，再讀一遍要傳的訊息`,
      oneLiner: `真心是最好的武器。再加上一點距離感，會舒服很多`,
      shareLine: `我的推拉等級：推拉新手 🍼（{score}分/40）原來我是心意跑在前面的直球型哈哈 你幾級？來比比`,
    },
    {
      title: `推拉入門`,
      levelLine: `算計和看臉色看到累的階段`,
      shortDescription: `你正處在越想推拉、反而越不自然的階段。`,
      description: `怕顯得太好追就故意晚回，或裝酷，結果心意對不上。算計越多，樂趣越少，累得越快。`,
      scoreRange: `17～22分`,
      keywords: `算計，裝酷，看臉色，彆扭，疲憊`,
      strengths: `想給對方留下好印象的細心和努力`,
      tips: `別故意拖回覆，按自己的行程定一個自然的速度\n別裝酷，多加一句真心話\n一開始算計，就只問一句：這樣做會讓我們都更舒服嗎？`,
      oneLiner: `自然比技巧更重要。少算一點，推拉就會變輕鬆`,
      shareLine: `我的推拉等級：推拉入門 🐣（{score}分/40）原來我是算到自己累的類型……你幾級？來比結果`,
    },
    {
      title: `推拉進階`,
      levelLine: `大體上能找到平衡的階段`,
      shortDescription: `你大體上能自然地調節距離和溫度。`,
      description: `你能在高興和從容之間找到平衡，不安的時候也不會晃得太厲害。只要修一修偶爾情緒跑太快、或太看臉色的瞬間就好。`,
      scoreRange: `23～28分`,
      keywords: `平衡，從容，偶爾動搖，自然`,
      strengths: `能同時看情緒和場面，反應沉穩`,
      tips: `把動搖的瞬間記下來，找出重複的模式\n在意的事別攢著，用輕巧的一句話說出來\n試著聊聊，把對方的節奏和自己的節奏對上`,
      oneLiner: `你已經有平衡感了。一句實話，就是通往高手的鑰匙`,
      shareLine: `我的推拉等級：推拉進階 🌿（{score}分/40）原來我大體上能找平衡哈哈 你幾級？來比比`,
    },
    {
      title: `推拉高手`,
      levelLine: `把坦誠和從容一起用上的階段`,
      shortDescription: `你是能同時用上坦誠和從容的推拉高手。`,
      description: `高興會說，不安會輕輕講出來，節奏會跟著對方走。你更懂一起往前走，而不是推來拉去。`,
      scoreRange: `29～34分`,
      keywords: `坦誠，從容，對上節奏，輕輕表達，信任`,
      strengths: `能誠實表達感受，也尊重對方的節奏`,
      tips: `確認了好感，就輕輕先提議下一步\n對方笨拙地靠近時，溫暖地接住\n時常確認：調節距離沒有變成一種策略`,
      oneLiner: `坦誠就是最好的推拉。現在，先踏出一步吧`,
      shareLine: `我的推拉等級：推拉高手 🌳（{score}分/40）原來坦誠才是最好的推拉！你幾級？來比結果`,
    },
    {
      title: `推拉大師`,
      levelLine: `一起找到舒服距離的最高階段`,
      shortDescription: `你是能和對方一起找到舒服距離的推拉大師。`,
      description: `聯絡、見面、委屈、往前走，你都能自然調節，該說的話也會老實說。你並不想晃動對方，信任反而會積起來。只是別讓熟練看起來像算計，心裡的溫度要一直帶著。`,
      scoreRange: `35～40分`,
      keywords: `平衡，尊重，自然的節奏，坦誠，信任`,
      strengths: `尊重對方，能找到彼此都舒服的距離，感覺成熟`,
      tips: `別讓熟練變成距離感，偶爾也露出笨拙的心意\n對方節奏慢的時候，留出等待的從容\n把這套方法分享給朋友。你的方式會成為別人的提示`,
      oneLiner: `最好的推拉不是技巧，是尊重。守住現在的溫度`,
      shareLine: `我的推拉等級：推拉大師 🔮（{score}分/40）原來我是能一起找到舒服距離的類型哈哈 你幾級？和對象比比看`,
    },
  ],
  areas: {
    pace: `回覆節奏`,
    test: `試探`,
    hurt: `表達委屈`,
    progress: `推進關係`,
  },
  growth: {
    pace: `回覆和收尾聊天的節奏最容易晃。按自己的行程，定一個自然的速度。`,
    test: `不安時試探對方，是你分數最低的地方。斷聯不如輕輕問一句近況。`,
    hurt: `委屈時裝酷，或用冷淡當懲罰，是比較弱的一塊。練著用一句話講出來，等級就會上去。`,
    progress: `表達好感和提議下一步的時機最難。先看反應，從輕輕的提議開始。`,
  },
  chemistry: [
    `兩個人的推拉感覺幾乎一樣。不太需要猜，舒服的節奏很容易對上。`,
    `節奏有一點不同。快的人停半拍，慢的人多說一句心裡話，平衡就回來了。`,
    `一個更偏直球，一個更偏從容。別互相試探，把「我現在的節奏」說出來。`,
    `距離感差得比較多。分差大不代表不合適。先聊聊，尊重彼此的速度。`,
  ],
};

const VI: Phase3PushPullLevelLocaleBundle = {
  questions: [
    {
      q: `Người bạn đang mập mờ nhắn tin trước. Bạn sẽ?`,
      opts: [
        `Trả lời vui vẻ, vẫn lo việc của mình và để cuộc trò chuyện đi theo nhịp tự nhiên`,
        `Vui thì vui, nhưng cố ý đợi một chút rồi trả lời thong thả`,
        `Sợ trả lời nhanh quá sẽ bị coi là dễ dãi, nên gửi sau vài tiếng`,
        `Vui quá nên trả lời ngay và kéo cuộc trò chuyện thật dài`,
      ],
    },
    {
      q: `Đối phương trả lời muộn hơn thường ngày. Bạn sẽ?`,
      opts: [
        `Cố ý cũng im luôn, đợi đối phương chủ động trước`,
        `Nghĩ có thể họ đang bận, làm việc của mình rồi chờ`,
        `Có để tâm nhưng không để lộ, sống như bình thường`,
        `Lo quá nên nhắn hỏi thăm liên tục`,
      ],
    },
    {
      q: `Đối phương hỏi cuối tuần bạn có rảnh không. Bạn sẽ?`,
      opts: [
        `Dù rảnh vẫn giả vờ bận và làm khó một chút`,
        `Trả lời như lúc nào cũng rảnh, dẹp hết lịch`,
        `Nói thật khung giờ rảnh và bảo là muốn gặp`,
        `Cho biết giờ rảnh, rồi tùy phản ứng mà điều chỉnh`,
      ],
    },
    {
      q: `Đối phương bày tỏ cảm tình. Bạn sẽ?`,
      opts: [
        `Thể hiện niềm vui, nhưng để cảm xúc của mình đi chậm hơn`,
        `Thích đấy, nhưng phản ứng mập mờ và quan sát thêm`,
        `Cảm xúc chạy trước, trút hết ra ngay`,
        `Nói thật lời cảm ơn và cho biết mình cũng có cảm tình, vừa đủ`,
      ],
    },
    {
      q: `Nói chuyện hợp, nhắn tin suốt cả ngày. Bạn sẽ?`,
      opts: [
        `Vui vẻ nói tiếp, rồi tự nhiên kết bằng câu "Mình đi làm việc đã"`,
        `Vẫn nói chuyện, nhưng hôm sau giảm bớt tần suất nhắn`,
        `Sợ dính quá sẽ bị chán, nên đột ngột giãn khoảng cách trả lời`,
        `Muốn nói mãi, níu cuộc trò chuyện suốt đêm`,
      ],
    },
    {
      q: `Đối phương đột nhiên nhắn ít đi. Bạn sẽ?`,
      opts: [
        `Cố ý lạnh nhạt để thử xem họ còn quan tâm không`,
        `Hỏi thăm nhẹ một câu, để lộ chút lo lắng, rồi xem phản ứng`,
        `Quan sát một lúc, cần thì liên lạc một lần`,
        `Hụt hẫng và muốn hỏi cho ra lý do`,
      ],
    },
    {
      q: `Đối phương hoãn gặp vì có việc khác. Bạn sẽ?`,
      opts: [
        `Giấu sự tiếc nuối, giả vờ cool chỉ trả lời "Ừ, được"`,
        `Hụt hẫng nên ít nói vài ngày, như đang phạt họ`,
        `Nói nhẹ là hơi tiếc, rồi tự đề xuất lần gặp sau`,
        `Bảo là hiểu, và thêm một câu lần sau nhất định phải gặp`,
      ],
    },
    {
      q: `Đối phương kể chuyện khiến bạn ghen. Bạn sẽ?`,
      opts: [
        `Có để tâm nhưng không phản ứng lớn, nói chuyện như thường`,
        `Cố ý cũng kể về người khác để đáp trả`,
        `Tức lên, cảm xúc chạy trước và nói những câu sắc`,
        `Nói thật một cách nhẹ: "Chuyện đó mình hơi để tâm"`,
      ],
    },
    {
      q: `Bạn muốn đẩy mối quan hệ lên một bước. Bạn sẽ?`,
      opts: [
        `Xem phản ứng của họ rồi tự nhiên đề nghị gần nhau hơn`,
        `Đợi tín hiệu thích rõ hơn rồi mới nói`,
        `Đợi họ nói trước, mình chỉ thả tín hiệu`,
        `Chưa chắc đã vội ép xác định mối quan hệ`,
      ],
    },
    {
      q: `Bạn nghĩ gì về chuyện kéo-đẩy?`,
      opts: [
        `Tin rằng phải khiến đối phương thấp thỏm mới giữ được trái tim họ`,
        `Coi đó là quá trình cùng tìm một khoảng cách dễ chịu`,
        `Nghĩ chỉ cần một chút, đúng lúc, là có ích`,
        `Thấy khó và phải tính toán nhiều nên hay mệt`,
      ],
    },
  ],
  results: [
    {
      title: `Tân binh kéo-đẩy`,
      levelLine: `Giai đoạn lúc thẳng, lúc thử lòng`,
      shortDescription: `Bạn đang ở giai đoạn cảm xúc chạy trước, hoặc ngược lại, thử lòng rồi lệch nhịp.`,
      description: `Vui thì trút hết cảm xúc, bất an thì thử lòng đối phương hoặc kéo khoảng cách như một hình phạt. Không phải thiếu chân thành, chỉ là chưa quen điều tiết. Cảm giác khoảng cách luyện là tiến bộ rất nhanh.`,
      scoreRange: `10–16 điểm`,
      keywords: `thẳng thắn quá đà, thử lòng, cảm xúc chạy trước, chưa biết điều tiết`,
      strengths: `Thật thà, chân thành lớn, không giấu cảm xúc`,
      tips: `Trước khi nhắn, hỏi mình một lần: mình muốn trò chuyện hay đang kiểm tra phản ứng?\nKhi hụt hẫng, đừng thử lòng. Hãy nói "Chuyện đó làm mình buồn"\nCảm xúc dâng lên thì đợi 30 phút, đọc lại tin nhắn rồi hãy gửi`,
      oneLiner: `Chân thành là vũ khí mạnh nhất. Thêm một chút cảm giác khoảng cách là nhẹ hơn nhiều`,
      shareLine: `Cấp độ kéo-đẩy của mình: Tân binh kéo-đẩy 🍼 ({score}/40) Hóa ra mình là kiểu cảm xúc chạy trước haha Bạn level mấy? So đi`,
    },
    {
      title: `Kéo-đẩy sơ cấp`,
      levelLine: `Giai đoạn tính toán và để ý ánh mắt đến mức mệt`,
      shortDescription: `Bạn đang ở giai đoạn càng để ý kéo-đẩy thì càng mất tự nhiên.`,
      description: `Sợ bị coi là dễ dãi nên cố tình trả lời muộn, hoặc giả vờ cool rồi cảm xúc lệch nhau. Càng tính toán, niềm vui càng ít và sự mệt càng nhiều.`,
      scoreRange: `17–22 điểm`,
      keywords: `tính toán, giả vờ cool, để ý, gượng gạo, mệt`,
      strengths: `Tinh tế và chịu khó, vì muốn để lại ấn tượng tốt`,
      tips: `Đừng cố tình trả lời muộn. Chọn nhịp hợp với lịch của mình\nBỏ kiểu giả vờ cool, thêm một câu thật lòng\nKhi bắt đầu tính toán, chỉ hỏi: việc này có khiến cả hai dễ chịu hơn không?`,
      oneLiner: `Tự nhiên quan trọng hơn kỹ thuật. Bớt tính toán, kéo-đẩy sẽ nhẹ hơn`,
      shareLine: `Cấp độ kéo-đẩy của mình: Kéo-đẩy sơ cấp 🐣 ({score}/40) Hóa ra mình tính đến mức mệt... Bạn level mấy? So kết quả đi`,
    },
    {
      title: `Kéo-đẩy trung cấp`,
      levelLine: `Giai đoạn nhìn chung đã giữ được cân bằng`,
      shortDescription: `Bạn nhìn chung điều chỉnh khoảng cách và nhiệt độ một cách tự nhiên.`,
      description: `Bạn cân bằng giữa niềm vui và sự thong thả, lo cũng không lung lay quá nhiều. Chỉ cần chỉnh những lúc cảm xúc chạy trước hoặc để ý hơi quá.`,
      scoreRange: `23–28 điểm`,
      keywords: `cân bằng, thong thả, thỉnh thoảng lung lay, tự nhiên`,
      strengths: `Điềm tĩnh, nhìn cả cảm xúc lẫn tình huống rồi mới phản ứng`,
      tips: `Ghi lại những lúc mình lung lay để tìm quy luật lặp lại\nĐừng để chuyện bận tâm chất lại, nói bằng một câu nhẹ\nThử nói chuyện để khớp nhịp của họ với nhịp của mình`,
      oneLiner: `Bạn đã có cảm giác cân bằng. Một câu thật lòng là chìa khóa lên cao thủ`,
      shareLine: `Cấp độ kéo-đẩy của mình: Kéo-đẩy trung cấp 🌿 ({score}/40) Hóa ra mình nhìn chung giữ được cân bằng haha Bạn level mấy? So đi`,
    },
    {
      title: `Cao thủ kéo-đẩy`,
      levelLine: `Giai đoạn dùng cả sự thật lòng lẫn sự thong thả`,
      shortDescription: `Bạn là cao thủ biết dùng cả sự thật lòng và sự thong thả.`,
      description: `Vui thì nói, lo thì khẽ thốt ra, nhịp thì khớp với đối phương. Bạn biết cách cùng đi hơn là kéo rồi đẩy.`,
      scoreRange: `29–34 điểm`,
      keywords: `thật lòng, thong thả, khớp nhịp, nói nhẹ, tin tưởng`,
      strengths: `Nói được cảm xúc thật mà vẫn tôn trọng nhịp của đối phương`,
      tips: `Khi đã chắc họ có cảm tình, hãy nhẹ nhàng đề xuất bước tiếp theo trước\nKhi họ lại gần một cách vụng về, hãy đón một cách ấm áp\nLuôn kiểm tra xem việc giữ khoảng cách có đang biến thành chiến thuật không`,
      oneLiner: `Thật lòng chính là cách kéo-đẩy hay nhất. Hãy bước một bước trước`,
      shareLine: `Cấp độ kéo-đẩy của mình: Cao thủ kéo-đẩy 🌳 ({score}/40) Hóa ra thật lòng mới là cách hay nhất! Bạn level mấy? So kết quả đi`,
    },
    {
      title: `Bậc thầy kéo-đẩy`,
      levelLine: `Cấp cao nhất: cùng tìm khoảng cách dễ chịu`,
      shortDescription: `Bạn là bậc thầy cùng đối phương tìm một khoảng cách dễ chịu.`,
      description: `Nhắn tin, gặp mặt, hụt hẫng, tiến thêm một bước, bạn đều điều chỉnh tự nhiên và nói điều cần nói. Vì không cố làm đối phương thấp thỏm, niềm tin lại tích lại. Chỉ đừng để sự thành thạo trông như tính toán. Hãy luôn kèm theo sự ấm áp.`,
      scoreRange: `35–40 điểm`,
      keywords: `cân bằng, tôn trọng, nhịp tự nhiên, thật lòng, tin tưởng`,
      strengths: `Trưởng thành: tôn trọng đối phương và tìm khoảng cách cả hai đều thấy dễ chịu`,
      tips: `Thỉnh thoảng cho thấy cảm xúc vụng về, để sự thành thạo không thành khoảng cách\nKhi nhịp của họ chậm, giữ sự thong thả để chờ\nChia sẻ cách này với bạn bè. Cách của bạn có thể là gợi ý cho người khác`,
      oneLiner: `Cách kéo-đẩy hay nhất không phải kỹ thuật, mà là sự tôn trọng. Hãy giữ nhiệt độ này`,
      shareLine: `Cấp độ kéo-đẩy của mình: Bậc thầy kéo-đẩy 🔮 ({score}/40) Hóa ra mình tạo được khoảng cách dễ chịu cho cả hai haha Bạn level mấy? So với người yêu đi`,
    },
  ],
  areas: {
    pace: `Nhịp trả lời`,
    test: `Thử lòng`,
    hurt: `Nói ra sự hụt hẫng`,
    progress: `Tiến triển mối quan hệ`,
  },
  growth: {
    pace: `Nhịp trả lời và cách kết thúc cuộc trò chuyện là chỗ bạn dễ lệch nhất. Hãy chọn tốc độ tự nhiên theo lịch của mình.`,
    test: `Điểm thấp nhất là lúc bất an thì thử lòng đối phương. Im lặng không an toàn bằng một câu hỏi thăm.`,
    hurt: `Giả vờ cool hoặc phạt bằng sự lạnh nhạt khi hụt hẫng là điểm yếu. Luyện nói trong một câu là cách lên cấp.`,
    progress: `Khó nhất là thời điểm bày tỏ cảm tình và đề nghị bước tiếp. Hãy bắt đầu bằng một lời rủ nhẹ và xem phản ứng.`,
  },
  chemistry: [
    `Cảm giác nhịp của hai người gần như giống nhau. Ít phải đoán, tốc độ dễ chịu dễ khớp.`,
    `Tốc độ hơi khác. Người nhanh nghỉ nửa nhịp, người chậm thêm một câu thật lòng là cân lại.`,
    `Một người thiên về thẳng, một người thiên về thong thả. Đừng thử lòng nhau. Hãy nói "nhịp của mình hiện giờ".`,
    `Cảm giác khoảng cách khác khá nhiều. Chênh điểm không có nghĩa là không hợp. Hãy bắt đầu bằng việc tôn trọng tốc độ của nhau.`,
  ],
};

const ID: Phase3PushPullLevelLocaleBundle = {
  questions: [
    {
      q: `Orang yang lagi kamu dekati chat duluan. Kamu?`,
      opts: [
        `Balas dengan senang, tetap jalani hari, dan lanjutkan obrolan dengan tempo yang alami`,
        `Senang sih, tapi sengaja nunggu sebentar supaya balasannya terasa santai`,
        `Takut kelihatan gampang, jadi baru kirim beberapa jam kemudian`,
        `Senang banget, langsung balas dan menarik obrolan sampai panjang`,
      ],
    },
    {
      q: `Balasan dia lebih lambat dari biasanya. Kamu?`,
      opts: [
        `Sengaja ikut putus kontak dan menunggu dia yang datang duluan`,
        `Menganggap dia mungkin sibuk, lanjutkan urusanku sendiri sambil menunggu`,
        `Kepikiran, tapi tidak ditunjukkan dan menjalani hari seperti biasa`,
        `Cemas, jadi mengirim pesan menyapa berturut-turut`,
      ],
    },
    {
      q: `Dia bertanya apakah kamu kosong akhir pekan ini. Kamu?`,
      opts: [
        `Meski kosong, pura-pura sibuk dan main susah sedikit`,
        `Menjawab seolah selalu bisa, dan mengosongkan semua jadwal`,
        `Jujur bilang jam yang kosong dan mengatakan ingin ketemu`,
        `Memberi tahu waktu yang bisa, lalu menyesuaikan sambil melihat responsnya`,
      ],
    },
    {
      q: `Dia bilang suka sama kamu. Kamu?`,
      opts: [
        `Menunjukkan rasa senang, tapi membiarkan perasaan sendiri berjalan lebih pelan`,
        `Suka, tapi reaksinya dibuat menggantung dan masih mengamati`,
        `Perasaan duluan, langsung menumpahkan semuanya`,
        `Jujur bilang terima kasih dan menyampaikan bahwa aku juga suka, secukupnya`,
      ],
    },
    {
      q: `Obrolannya nyambung dan chat berjalan seharian. Kamu?`,
      opts: [
        `Menikmatinya, lalu menutup secara alami dengan "Aku lanjut kerja dulu ya"`,
        `Tetap ngobrol, tapi besoknya frekuensi chat dikurangi sedikit`,
        `Takut bosen kalau terlalu nempel, jadi tiba-tiba memperlambat balasan`,
        `Ingin terus berlanjut dan menahan obrolan semalaman`,
      ],
    },
    {
      q: `Dia tiba-tiba jarang chat. Kamu?`,
      opts: [
        `Sengaja jadi dingin untuk menguji apakah dia masih peduli`,
        `Menyapa ringan sambil menunjukkan sedikit khawatir, lalu melihat responsnya`,
        `Mengamati dulu, dan menghubungi sekali kalau memang perlu`,
        `Kesal dan ingin menuntut penjelasannya`,
      ],
    },
    {
      q: `Dia menunda ketemuan karena ada janji lain. Kamu?`,
      opts: [
        `Menyembunyikan kecewa dan cuma membalas "Ya, oke" pura-pura santai`,
        `Kesal, jadi beberapa hari mengurangi bicara seperti menghukum`,
        `Mengatakan pelan bahwa aku sedikit kecewa, lalu mengusulkan jadwal berikutnya`,
        `Bilang mengerti, tapi menambahkan bahwa lain kali harus ketemu`,
      ],
    },
    {
      q: `Dia bercerita sesuatu yang bikin kamu cemburu. Kamu?`,
      opts: [
        `Terganggu, tapi tidak bereaksi besar dan tetap ngobrol seperti biasa`,
        `Sengaja juga menyebut orang lain untuk membalas`,
        `Marah, perasaan duluan dan kata-katanya jadi tajam`,
        `Mengatakan dengan ringan dan jujur, "Cerita itu agak mengganjal"`,
      ],
    },
    {
      q: `Kamu ingin menaikkan hubungan satu langkah. Kamu?`,
      opts: [
        `Melihat responsnya, lalu secara alami mengusulkan untuk lebih dekat`,
        `Menunggu sinyal sukanya lebih jelas, baru bicara`,
        `Menunggu dia yang bicara duluan dan hanya memberi isyarat`,
        `Belum yakin sudah mendesak untuk mengunci status`,
      ],
    },
    {
      q: `Bagaimana pendapatmu soal tarik-ulur?`,
      opts: [
        `Percaya harus membuat dia gelisah dulu supaya hatinya didapat`,
        `Menganggapnya proses mencari jarak yang nyaman untuk berdua`,
        `Menganggap sedikit saja, saat dibutuhkan, bisa membantu`,
        `Merasa sulit dan penuh perhitungan, jadi sering capek`,
      ],
    },
  ],
  results: [
    {
      title: `Pemula Tarik-Ulur`,
      levelLine: `Tahap yang goyah antara frontal dan menguji`,
      shortDescription: `Kamu ada di tahap perasaan duluan, atau sebaliknya, menguji lalu malah miss.`,
      description: `Kalau senang, semua perasaan ditumpahkan. Kalau cemas, kamu menguji dia atau menjauh seperti menghukum. Bukan kurang tulus, hanya belum lihai mengatur. Rasa jarak ini cepat berkembang kalau dilatih.`,
      scoreRange: `10–16 poin`,
      keywords: `frontal, menguji, perasaan duluan, belum bisa mengatur`,
      strengths: `Jujur, tulus, dan tidak menyembunyikan perasaan`,
      tips: `Sebelum chat, tanya sekali: "Aku mau ngobrol, atau cuma mengecek reaksinya?"\nKalau kecewa, jangan menguji. Katakan "Itu bikin aku sedih"\nSaat emosi naik, tunggu 30 menit dan baca ulang pesannya sebelum dikirim`,
      oneLiner: `Ketulusan adalah senjata terbaik. Tambahkan sedikit rasa jarak, semuanya jadi lebih ringan`,
      shareLine: `Level tarik-ulurku: Pemula Tarik-Ulur 🍼 ({score}/40) Ternyata aku tipe perasaan duluan wkwk Kamu level berapa? Yuk bandingkan`,
    },
    {
      title: `Tarik-Ulur Dasar`,
      levelLine: `Tahap menghitung dan membaca suasana sampai capek`,
      shortDescription: `Kamu ada di tahap yang makin memikirkan tarik-ulur, makin jadi tidak alami.`,
      description: `Kamu menunda balasan supaya tidak kelihatan gampang, atau pura-pura santai sampai perasaan jadi silang. Makin banyak perhitungan, capeknya lebih besar daripada senangnya.`,
      scoreRange: `17–22 poin`,
      keywords: `perhitungan, pura-pura santai, baca suasana, canggung, capek`,
      strengths: `Teliti dan berusaha, karena ingin meninggalkan kesan yang baik`,
      tips: `Jangan menunda dengan sengaja. Tentukan tempo yang sesuai jadwalmu\nAlih-alih pura-pura santai, tambahkan satu kalimat jujur\nKalau mulai menghitung, cek saja: "Apakah ini membuat kami berdua lebih nyaman?"`,
      oneLiner: `Yang alami lebih dulu daripada teknik. Kurangi perhitungan, tarik-ulurnya jadi lebih ringan`,
      shareLine: `Level tarik-ulurku: Tarik-Ulur Dasar 🐣 ({score}/40) Ternyata aku capek karena terlalu menghitung... Kamu level berapa? Bandingkan yuk`,
    },
    {
      title: `Tarik-Ulur Menengah`,
      levelLine: `Tahap yang umumnya sudah seimbang`,
      shortDescription: `Kamu umumnya mengatur jarak dan suhu dengan cukup alami.`,
      description: `Kamu menyeimbangkan rasa senang dan kelonggaran, dan kecemasan tidak menggoyahkanmu terlalu besar. Yang perlu dirapikan hanya saat perasaan duluan atau kamu terlalu membaca suasana.`,
      scoreRange: `23–28 poin`,
      keywords: `seimbang, longgar, sesekali goyah, alami`,
      strengths: `Tenang: melihat perasaan dan situasi sekaligus sebelum bereaksi`,
      tips: `Catat momen saat kamu goyah dan cari polanya\nJangan menimbun yang mengganjal. Ucapkan dalam satu kalimat ringan\nCoba bicara untuk menyamakan tempo dia dan tempomu`,
      oneLiner: `Rasa seimbangnya sudah ada. Satu kalimat jujur adalah kunci ke level berikutnya`,
      shareLine: `Level tarik-ulurku: Tarik-Ulur Menengah 🌿 ({score}/40) Ternyata aku umumnya bisa menjaga keseimbangan wkwk Kamu level berapa? Yuk bandingkan`,
    },
    {
      title: `Jago Tarik-Ulur`,
      levelLine: `Tahap yang memakai kejujuran dan kelonggaran bersamaan`,
      shortDescription: `Kamu jago memakai kejujuran dan kelonggaran sekaligus.`,
      description: `Rasa senang diungkapkan, rasa cemas diucapkan dengan ringan, dan tempo disesuaikan dengan dia. Kamu lebih tahu cara berjalan bersama daripada mendorong lalu menarik.`,
      scoreRange: `29–34 poin`,
      keywords: `jujur, longgar, menyamakan tempo, ucapan ringan, percaya`,
      strengths: `Bisa jujur soal perasaan sambil tetap menghormati tempo dia`,
      tips: `Kalau rasa sukanya sudah jelas, ajukan langkah berikutnya dengan ringan\nSaat dia mendekat dengan canggung, sambut dengan hangat\nTerus cek agar mengatur jarak tidak berubah jadi strategi`,
      oneLiner: `Kejujuran adalah tarik-ulur yang terbaik. Sekarang, langkahilah satu langkah lebih dulu`,
      shareLine: `Level tarik-ulurku: Jago Tarik-Ulur 🌳 ({score}/40) Ternyata kejujuran adalah cara terbaik! Kamu level berapa? Yuk bandingkan hasilnya`,
    },
    {
      title: `Master Tarik-Ulur`,
      levelLine: `Level tertinggi: membangun jarak yang nyaman untuk berdua`,
      shortDescription: `Kamu master dalam mencari jarak yang nyaman bersama.`,
      description: `Chat, ketemuan, rasa kecewa, sampai menaikkan hubungan, kamu atur dengan alami dan mengatakan hal yang perlu dikatakan. Karena kamu tidak berusaha menggoyahkan dia, kepercayaan justru bertumpuk. Hanya saja, jangan sampai kemahiran terlihat seperti perhitungan. Selalu sertakan kehangatan.`,
      scoreRange: `35–40 poin`,
      keywords: `seimbang, hormat, tempo alami, jujur, percaya`,
      strengths: `Dewasa: menghormati dia dan menemukan jarak yang nyaman untuk berdua`,
      tips: `Sesekali tunjukkan perasaan yang canggung, supaya kemahiran tidak jadi jarak\nSaat temponya lebih lambat, pertahankan kelonggaran untuk menunggu\nBagikan cara ini ke teman. Caramu bisa jadi petunjuk orang lain`,
      oneLiner: `Tarik-ulur terbaik bukan teknik, melainkan rasa hormat. Jaga suhu yang sekarang`,
      shareLine: `Level tarik-ulurku: Master Tarik-Ulur 🔮 ({score}/40) Ternyata aku membangun jarak yang nyaman untuk berdua wkwk Kamu level berapa? Bandingkan sama pasangan`,
    },
  ],
  areas: {
    pace: `Tempo balasan`,
    test: `Menguji`,
    hurt: `Mengungkapkan kecewa`,
    progress: `Memajukan hubungan`,
  },
  growth: {
    pace: `Tempo balasan dan cara menutup obrolan adalah yang paling goyah. Tentukan kecepatan alami yang sesuai jadwalmu.`,
    test: `Skor terendahmu ada di sini: menguji dia saat cemas. Satu sapaan lebih aman daripada putus kontak.`,
    hurt: `Pura-pura santai atau menghukum dengan sikap dingin saat kecewa adalah titik lemah. Latihan mengatakannya dalam satu kalimat akan menaikkan levelmu.`,
    progress: `Yang paling sulit adalah waktu menyampaikan rasa suka dan mengusulkan langkah berikutnya. Mulai dari ajakan ringan sambil melihat responsnya.`,
  },
  chemistry: [
    `Rasa tempo kalian hampir sama. Sedikit yang perlu ditebak, dan kecepatan yang nyaman mudah cocok.`,
    `Kecepatan kalian sedikit berbeda. Yang lebih cepat berhenti sejenak, yang lebih lambat menambah satu kalimat jujur, keseimbangannya kembali.`,
    `Satu orang lebih frontal, yang lain lebih memberi ruang. Jangan saling menguji. Ucapkan "ini tempo aku sekarang".`,
    `Rasa jarak kalian cukup berbeda. Selisih besar tidak berarti tidak cocok. Mulailah dengan menghormati kecepatan masing-masing.`,
  ],
};

export const PHASE3_PUSH_PULL_LEVEL_I18N: Record<Phase3PushPullLevelForeignLocale, Phase3PushPullLevelLocaleBundle> = {
  en: EN,
  ja: JA,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  vi: VI,
  id: ID,
};
