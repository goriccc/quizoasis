/** 나의 고백 성공 확률 — 외국어 번역 (문항 순서는 phase3ConfessionSuccessData RAW_QUESTIONS와 동일) */

export type Phase3ConfessionSuccessForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3ConfessionSuccessResultText {
  title: string;
  shortDescription: string;
  description: string;
  scoreRange: string;
  keywords: string;
  strengths: string;
  tips: string;
  oneLiner: string;
  shareLine: string;
}

export interface Phase3ConfessionSuccessLocaleBundle {
  questions: { q: string; opts: [string, string] }[];
  results: Phase3ConfessionSuccessResultText[];
  areas: { foundation: string; timing: string; method: string; rush: string; closing: string };
}

const EN: Phase3ConfessionSuccessLocaleBundle = {
  questions: [
    {
      q: `Before you tell them, where do things stand?`,
      opts: [
        `We've met one-on-one a few times and can talk easily`,
        `We still only say hi when the group is around`,
      ],
    },
    {
      q: `How do you pick the moment to say it?`,
      opts: [
        `The second my feelings overflow, I want to say it right then`,
        `I look at their situation and the mood, then decide`,
      ],
    },
    {
      q: `Have you noticed any sign they like you back?`,
      opts: [
        `Their texts or invites have felt like interest`,
        `I can't really tell. I only know how I feel`,
      ],
    },
    {
      q: `Where would you say it?`,
      opts: [
        `Somewhere crowded, with a big surprise`,
        `Somewhere quiet, where we can actually talk`,
      ],
    },
    {
      q: `How would you say it?`,
      opts: [`Face to face, and mean it`, `A light text first, so it doesn't feel too heavy`],
    },
    {
      q: `How would you prepare what to say?`,
      opts: [`I'd wing it and say whatever comes out`, `I'd boil my feelings down to a sentence or two`],
    },
    {
      q: `How do you feel about the chance they'll say no?`,
      opts: [
        `I plan ahead so a no doesn't end the relationship`,
        `I don't even want to think about being turned down`,
      ],
    },
    {
      q: `Once you say it, how do you think you'd act?`,
      opts: [
        `I'd push for an answer right away and steer the mood`,
        `I'd say how I feel, then give them time to think`,
      ],
    },
    {
      q: `Before saying it, what have you actually shown them?`,
      opts: [
        `I've been steady with check-ins and small signs I care`,
        `We've talked so little that saying it out of nowhere would surprise them`,
      ],
    },
    {
      q: `Right after, their reaction feels awkward. You...`,
      opts: [
        `Panic, take it back, and look for the exit`,
        `Smile, keep it light, and say they can take their time`,
      ],
    },
  ],
  results: [
    {
      title: `20% chance`,
      shortDescription: `This confession still needs more groundwork.`,
      description: `The feelings are real, but the buildup, the timing, and the way you'd say it aren't lined up yet. Slow down and build the process, and the odds jump.`,
      scoreRange: `0–2 pts`,
      keywords: `Not ready yet, winging it, thin groundwork, no plan for a no`,
      strengths: `Honest feelings and real enthusiasm`,
      tips: `Set up two or three one-on-one hangs before you say it\nSpend a month watching for signs they like you back, like texts or invites\nBoil it down to a line or two, and pick a way that doesn't put them on the spot`,
      oneLiner: `The feelings are enough. A little more groundwork and the same heart lands better`,
      shareLine: `My confession odds: 20% 🌧️ ({score}/10, top {percent}%) It says I need more prep 😭 What's yours? Send a screenshot`,
    },
    {
      title: `40% chance`,
      shortDescription: `The spark is there, but a few things are off.`,
      description: `There's a base of interest, mixed with timing or a style that could feel like pressure. Shift one or two things and it changes.`,
      scoreRange: `3–4 pts`,
      keywords: `Possible, off timing, pressure, needs a tweak`,
      strengths: `Courage, sincerity, and a real wish to say it`,
      tips: `Skip the big production and pick a quiet place to talk\nTell them up front they can take their time. Don't push for an answer\nLook back at how they've been lately and check whether now is actually a good moment`,
      oneLiner: `One or two adjustments raise the odds. Aim for the version that feels lighter for them`,
      shareLine: `My confession odds: 40% ⛅ ({score}/10, top {percent}%) It says a couple tweaks would do it... What's yours? Screenshot it`,
    },
    {
      title: `60% chance`,
      shortDescription: `This is worth trying.`,
      description: `The groundwork and the care are basically there. Only a few pieces are missing. One more check that they like you back makes it steadier.`,
      scoreRange: `5–6 pts`,
      keywords: `Worth a shot, considerate, basics in place, double-check`,
      strengths: `A balanced read: you care about them and stay realistic`,
      tips: `Before you say it, try a light "I'd like to see you again" and watch how they respond\nHave a closing line ready so a no doesn't have to end the relationship\nSay your line out loud once, just to hear it`,
      oneLiner: `Worth a try. Reading their reaction, plus a closing line, is the last piece`,
      shareLine: `My confession odds: 60% 🌤️ ({score}/10, top {percent}%) It says it's worth a shot lol What's yours? Send a screenshot`,
    },
    {
      title: `80% chance`,
      shortDescription: `This has a real shot at being a good confession.`,
      description: `The groundwork, the timing, and the way you'd say it mostly line up. It's the kind of confession they can sit with, without feeling cornered.`,
      scoreRange: `7–8 pts`,
      keywords: `Good timing, care, prepared, sincere`,
      strengths: `You read their situation and say it in a way that doesn't weigh on them`,
      tips: `Pick a day once you've actually seen signs they like you back\nLeave room to wait at their pace after you say it\nPicture the conversation that follows, whether it's a yes or a no`,
      oneLiner: `A prepared confession puts people at ease. All that's left is the nerve`,
      shareLine: `My confession odds: 80% ☀️ ({score}/10, top {percent}%) It says this could really land! What's yours? Screenshot it`,
    },
    {
      title: `95% chance`,
      shortDescription: `This is a very good moment to say it.`,
      description: `You've built the relationship step by step, you read their situation, and you know how to say something true without making it heavy. You could keep the relationship either way. Just don't let a high number talk you into moving faster than they do.`,
      scoreRange: `9–10 pts`,
      keywords: `Process, timing, sincerity, care, a grown-up approach`,
      strengths: `A steady way of saying what you feel while still respecting them`,
      tips: `Keep giving them time to think, all the way through\nIf they say yes, match their pace instead of racing ahead\nShare how you did it with friends. Your approach might be someone else's hint`,
      oneLiner: `Feelings with a real process behind them land best. Just respect their pace`,
      shareLine: `My confession odds: 95% 🌈 ({score}/10, top {percent}%) It says now is a great time lol What's yours? Screenshot your percentile`,
    },
  ],
  areas: {
    foundation: `Groundwork`,
    timing: `Timing`,
    method: `Delivery`,
    rush: `Rushing`,
    closing: `Follow-through`,
  },
};

const JA: Phase3ConfessionSuccessLocaleBundle = {
  questions: [
    {
      q: `告白する前、相手との関係は？`,
      opts: [`何度か二人で会って、気軽に話せる間柄`, `まだグループの集まりで挨拶するだけの間柄`],
    },
    {
      q: `告白のタイミングはどう決める？`,
      opts: [`気持ちがあふれた瞬間、すぐに伝えたい`, `相手の状況と空気を見てから決める`],
    },
    {
      q: `相手の脈ありサインを確認したことはある？`,
      opts: [`連絡や誘い方から、好意を感じたことがある`, `サインはよくわからず、自分の気持ちだけが確か`],
    },
    {
      q: `告白する場所はどう選びそう？`,
      opts: [`人が多い場所で、大きなイベントにして驚かせたい`, `静かで、落ち着いて話せる場所を選ぶ`],
    },
    {
      q: `告白の仕方は？`,
      opts: [`気持ちを込めて、直接顔を見て伝える`, `負担にならないよう、まずメッセージで軽く送る`],
    },
    {
      q: `告白の言葉はどう準備しそう？`,
      opts: [`その場の思いつきで話す`, `気持ちを一、二文にまとめておく`],
    },
    {
      q: `ふられる可能性について、自分の気持ちは？`,
      opts: [`断られても関係を失わないよう、備えておく`, `断られることなんて考えたくなくて、悩まない`],
    },
    {
      q: `告白するとき、相手にどんな態度を取りそう？`,
      opts: [`すぐ返事を求めて急かし、空気を引っ張っていく`, `気持ちを伝えたあと、考える時間を渡す`],
    },
    {
      q: `告白の前、相手に見せてきた自分は？`,
      opts: [`こまめに様子を聞いて、関心を示してきたほう`, `急に気持ちを伝えたら驚くほど、連絡が少なかった`],
    },
    {
      q: `告白のあと、相手の反応がぎこちなかった。自分は？`,
      opts: [`慌てて言葉を引っ込めて、その場を避ける`, `負担をかけないよう笑って、時間を置こうと言う`],
    },
  ],
  results: [
    {
      title: `成功確率20%`,
      shortDescription: `いまの告白は、もう少し準備がいる段階です。`,
      description: `気持ちは本物なのに、関係の積み重ねとタイミング、伝え方がまだ噛み合っていません。急ぐより過程を作ったほうが、確率は大きく上がります。`,
      scoreRange: `0〜2点`,
      keywords: `準備不足、その場しのぎ、積み重ね不足、振られたときの備えなし`,
      strengths: `正直で、熱のある本心`,
      tips: `告白の前に、二人で会う場を二、三回先に作る\n連絡や誘いなど、脈ありサインがないか一か月見てみる\n告白の言葉を一、二行にまとめ、負担の少ない伝え方を用意する`,
      oneLiner: `本心は足りています。過程を少し積めば、同じ気持ちがもっと届きます`,
      shareLine: `私の告白成功確率: 20% 🌧️ ({score}点/10, 上位{percent}%) まだ準備がいるって… あなたは何%？スクショ送って`,
    },
    {
      title: `成功確率40%`,
      shortDescription: `告白の種はあるのに、いくつか噛み合っていない段階です。`,
      description: `好意の土台はあるものの、タイミングや伝え方に負担になる要素が混ざっています。一、二個直すだけで変わります。`,
      scoreRange: `3〜4点`,
      keywords: `可能性あり、タイミングのずれ、負担になる要素、調整が必要`,
      strengths: `勇気と本心があり、伝える意志もある`,
      tips: `大きなイベントではなく、静かに話せる場所を選ぶ\n返事を急がず、考える時間を渡すと先に言う\n相手の最近の反応を整理して、いまが適切なときか確かめる`,
      oneLiner: `一、二個直すだけで確率は上がります。負担を軽くする方向に寄せてみてください`,
      shareLine: `私の告白成功確率: 40% ⛅ ({score}点/10, 上位{percent}%) 一、二個直せばいいって… あなたは何%？スクショして`,
    },
    {
      title: `成功確率60%`,
      shortDescription: `十分、試してみる価値がある段階です。`,
      description: `基本的な積み重ねと気配りはあります。惜しいのはいくつかだけ。相手の脈ありサインをもう一度確認すれば、より安定します。`,
      scoreRange: `5〜6点`,
      keywords: `試す価値あり、気配り、基本はできている、確認が必要`,
      strengths: `相手を思いやりつつ、現実的に近づくバランス感覚`,
      tips: `告白の前に「また会いたい」と軽く伝えて、反応を見てみる\n振られても関係が続くように、締めの一言を用意する\n気持ちをまとめた文を、一度声に出して練習する`,
      oneLiner: `試す価値はあります。反応の確認と締めの一言が、最後のひとかけらです`,
      shareLine: `私の告白成功確率: 60% 🌤️ ({score}点/10, 上位{percent}%) やってみる価値ありだって笑 あなたは何%？スクショ送って`,
    },
    {
      title: `成功確率80%`,
      shortDescription: `いい告白になりそうな段階です。`,
      description: `積み重ね、タイミング、伝え方がおおむね噛み合っています。相手が負担なく気持ちを考えられる告白です。`,
      scoreRange: `7〜8点`,
      keywords: `いいタイミング、気配り、準備、本心`,
      strengths: `相手の状況を見て、負担なく気持ちを伝える落ち着き`,
      tips: `脈ありサインが見えた時期に合わせて日を決める\n告白のあと、相手のペースを待てる心の余裕を持つ\nOKでも断りでも、その後の会話を先に想像しておく`,
      oneLiner: `準備された告白は、気持ちを楽にします。あとは勇気を足すだけです`,
      shareLine: `私の告白成功確率: 80% ☀️ ({score}点/10, 上位{percent}%) いい告白になりそうって！ あなたは何%？スクショして`,
    },
    {
      title: `成功確率95%`,
      shortDescription: `告白するのに、とてもいい段階です。`,
      description: `関係を一歩ずつ積み、相手の状況を見て、本心を負担なく伝えられます。どの結果でも関係を守れる態度です。ただ、確率が高いからと相手のペースを先回りしないように。`,
      scoreRange: `9〜10点`,
      keywords: `過程、タイミング、本心、気配り、大人の態度`,
      strengths: `相手を尊重しながら本心を伝える、安定した近づき方`,
      tips: `考える時間を渡す余裕を、最後まで保つ\nOKをもらったら、速度をゆっくり合わせて関係を続ける\nこのやり方を友達と分かち合う。あなたの伝え方が、誰かのヒントになります`,
      oneLiner: `過程を積んだ本心がいちばん届きます。相手のペースを尊重すれば十分です`,
      shareLine: `私の告白成功確率: 95% 🌈 ({score}点/10, 上位{percent}%) 告白するのにぴったりだって笑 あなたは何%？上位何%かスクショして`,
    },
  ],
  areas: {
    foundation: `積み重ね`,
    timing: `タイミング`,
    method: `伝え方`,
    rush: `急かし`,
    closing: `締め`,
  },
};

const ZH_CN: Phase3ConfessionSuccessLocaleBundle = {
  questions: [
    {
      q: `告白之前，你们是什么关系？`,
      opts: [`单独见过几次，聊得比较自在`, `还只是在集体场合打个招呼`],
    },
    {
      q: `你怎么选告白的时机？`,
      opts: [`心意一满，就想马上说出来`, `先看对方的情况和气氛再决定`],
    },
    {
      q: `你确认过对方的好感信号吗？`,
      opts: [`从联系、约见面里感觉到过好感`, `信号看不太出来，只有自己的心意很确定`],
    },
    {
      q: `告白的地方你会怎么选？`,
      opts: [`想在人多的地方搞个大惊喜`, `选个安静、能好好说话的地方`],
    },
    {
      q: `告白的方式呢？`,
      opts: [`当面把真心说出来`, `先发一条轻松的消息，免得给对方压力`],
    },
    {
      q: `告白要说的话，你会怎么准备？`,
      opts: [`到时候想到什么就说什么`, `事先把心意收成一两句话`],
    },
    {
      q: `面对可能被拒绝，你怎么想？`,
      opts: [`就算被拒，也准备好不让关系断掉`, `连想都不想被拒，所以不去想`],
    },
    {
      q: `告白时，你觉得自己会是什么态度？`,
      opts: [`催着马上要答案，把气氛往前推`, `说完心意，把思考的时间留给对方`],
    },
    {
      q: `告白之前，你在对方面前是什么样？`,
      opts: [`一直有问候、有在意`, `联系少到突然说心意会让对方吓一跳`],
    },
    {
      q: `告白之后对方的反应有点尴尬。你会？`,
      opts: [`慌得赶紧把话收回去，找机会离开`, `笑着说不用有压力，先各自缓一缓`],
    },
  ],
  results: [
    {
      title: `成功概率20%`,
      shortDescription: `现在告白，还需要再准备准备。`,
      description: `心意是真的，但关系铺垫、时机和说法还没对上。与其着急，不如先把过程做起来，概率会高很多。`,
      scoreRange: `0～2分`,
      keywords: `准备不足，即兴，铺垫不够，没想过被拒`,
      strengths: `心意坦白，也够热`,
      tips: `告白前先单独见两三次\n用一个月看看有没有好感信号，比如主动联系、约见面\n把要说的话收成一两句，选个不给压力的方式`,
      oneLiner: `真心已经够了。过程再垫一点，同样的心意会更容易送到`,
      shareLine: `我的告白成功概率：20% 🌧️（{score}分/10，前{percent}%）说我还得再准备准备呜 你是多少？截图发我`,
    },
    {
      title: `成功概率40%`,
      shortDescription: `告白的苗头有了，只是有几处没对齐。`,
      description: `好感的底子在，但时机或方式里夹着会让人有压力的部分。改一两处就会不一样。`,
      scoreRange: `3～4分`,
      keywords: `有可能，时机偏了，有压力点，需要调整`,
      strengths: `有勇气、有真心，也愿意说出口`,
      tips: `别搞大场面，选个能安静说话的地方\n先说不急着要答案，把想的时间留给对方\n整理对方最近的反应，看看现在是不是合适的时候`,
      oneLiner: `改一两处，概率就会上去。往让对方更轻松的方向调`,
      shareLine: `我的告白成功概率：40% ⛅（{score}分/10，前{percent}%）说改一两处就行了… 你是多少？截个图`,
    },
    {
      title: `成功概率60%`,
      shortDescription: `已经值得试一试。`,
      description: `基本的铺垫和体贴都有，可惜的只有几处。再确认一次对方的好感信号，会更稳。`,
      scoreRange: `5～6分`,
      keywords: `可以试，体贴，基本功在，还要确认`,
      strengths: `既照顾对方，又挺现实，分寸感不错`,
      tips: `告白前先轻声说一句“还想再见面”，看看反应\n准备一句收尾，就算被拒关系也能接着走\n把心里那句话出声练一遍`,
      oneLiner: `值得一试。看清反应，再加上一句收尾，就是最后那一块`,
      shareLine: `我的告白成功概率：60% 🌤️（{score}分/10，前{percent}%）说值得试一试哈哈 你是多少？截图发我`,
    },
    {
      title: `成功概率80%`,
      shortDescription: `很有可能是一次好告白。`,
      description: `铺垫、时机和方式大体都对上了。对方可以不带压力地想一想这份心意。`,
      scoreRange: `7～8分`,
      keywords: `时机好，体贴，有准备，真心`,
      strengths: `会看对方的处境，也能把心意说得不沉重`,
      tips: `等好感信号比较明确的时候再定日子\n告白之后留出心情，能等对方的节奏\n无论答应还是拒绝，先想好后面怎么聊`,
      oneLiner: `准备好的告白让人松一口气。剩下的就是勇气`,
      shareLine: `我的告白成功概率：80% ☀️（{score}分/10，前{percent}%）说很有可能是一次好告白！你是多少？截个图`,
    },
    {
      title: `成功概率95%`,
      shortDescription: `现在非常适合告白。`,
      description: `关系是一步步垫起来的，你会看对方的处境，也知道怎么把真心说得不沉重。不管结果如何，都有保住关系的态度。只是别因为概率高，就走在对方前面。`,
      scoreRange: `9～10分`,
      keywords: `过程，时机，真心，体贴，成熟的态度`,
      strengths: `尊重对方，又能把真心稳稳说出来`,
      tips: `把想的时间留给对方，这份从容走到最后\n如果答应了，慢慢对齐节奏，把关系续下去\n把这套做法分给朋友。你的方式也许就是别人的提示`,
      oneLiner: `有过程的真心最容易送到。只要尊重对方的节奏`,
      shareLine: `我的告白成功概率：95% 🌈（{score}分/10，前{percent}%）说现在告白刚刚好哈哈 你是多少？把前百分之几截图发我`,
    },
  ],
  areas: {
    foundation: `关系铺垫`,
    timing: `时机`,
    method: `方式`,
    rush: `催促`,
    closing: `收尾`,
  },
};

const ZH_TW: Phase3ConfessionSuccessLocaleBundle = {
  questions: [
    {
      q: `告白之前，你們是什麼關係？`,
      opts: [`單獨見過幾次，聊得比較自在`, `還只是在團體場合打個招呼`],
    },
    {
      q: `你怎麼選告白的時機？`,
      opts: [`心意一滿，就想馬上說出來`, `先看對方的情況和氣氛再決定`],
    },
    {
      q: `你確認過對方的好感訊號嗎？`,
      opts: [`從聯絡、約見面裡感覺到過好感`, `訊號看不太出來，只有自己的心意很確定`],
    },
    {
      q: `告白的地方你會怎麼選？`,
      opts: [`想在人多的地方搞個大驚喜`, `選個安靜、能好好說話的地方`],
    },
    {
      q: `告白的方式呢？`,
      opts: [`當面把真心說出來`, `先發一則輕鬆的訊息，免得給對方壓力`],
    },
    {
      q: `告白要說的話，你會怎麼準備？`,
      opts: [`到時候想到什麼就說什麼`, `事先把心意收成一兩句話`],
    },
    {
      q: `面對可能被拒絕，你怎麼想？`,
      opts: [`就算被拒，也準備好不讓關係斷掉`, `連想都不想被拒，所以不去想`],
    },
    {
      q: `告白時，你覺得自己會是什麼態度？`,
      opts: [`催著馬上要答案，把氣氛往前推`, `說完心意，把思考的時間留給對方`],
    },
    {
      q: `告白之前，你在對方面前是什麼樣？`,
      opts: [`一直有問候、有在意`, `聯絡少到突然說心意會讓對方嚇一跳`],
    },
    {
      q: `告白之後對方的反應有點尷尬。你會？`,
      opts: [`慌得趕緊把話收回去，找機會離開`, `笑著說不用有壓力，先各自緩一緩`],
    },
  ],
  results: [
    {
      title: `成功機率20%`,
      shortDescription: `現在告白，還需要再準備準備。`,
      description: `心意是真的，但關係鋪墊、時機和說法還沒對上。與其著急，不如先把過程做起來，機率會高很多。`,
      scoreRange: `0～2分`,
      keywords: `準備不足，即興，鋪墊不夠，沒想過被拒`,
      strengths: `心意坦白，也夠熱`,
      tips: `告白前先單獨見兩三次\n用一個月看看有沒有好感訊號，比如主動聯絡、約見面\n把要說的話收成一兩句，選個不給壓力的方式`,
      oneLiner: `真心已經夠了。過程再墊一點，同樣的心意會更容易送到`,
      shareLine: `我的告白成功機率：20% 🌧️（{score}分/10，前{percent}%）說我還得再準備準備嗚 你是多少？截圖傳我`,
    },
    {
      title: `成功機率40%`,
      shortDescription: `告白的苗頭有了，只是有幾處沒對齊。`,
      description: `好感的底子在，但時機或方式裡夾著會讓人有壓力的部分。改一兩處就會不一樣。`,
      scoreRange: `3～4分`,
      keywords: `有可能，時機偏了，有壓力點，需要調整`,
      strengths: `有勇氣、有真心，也願意說出口`,
      tips: `別搞大場面，選個能安靜說話的地方\n先說不急著要答案，把想的時間留給對方\n整理對方最近的反應，看看現在是不是合適的時候`,
      oneLiner: `改一兩處，機率就會上去。往讓對方更輕鬆的方向調`,
      shareLine: `我的告白成功機率：40% ⛅（{score}分/10，前{percent}%）說改一兩處就行了… 你是多少？截個圖`,
    },
    {
      title: `成功機率60%`,
      shortDescription: `已經值得試一試。`,
      description: `基本的鋪墊和體貼都有，可惜的只有幾處。再確認一次對方的好感訊號，會更穩。`,
      scoreRange: `5～6分`,
      keywords: `可以試，體貼，基本功在，還要確認`,
      strengths: `既照顧對方，又挺現實，分寸感不錯`,
      tips: `告白前先輕聲說一句「還想再見面」，看看反應\n準備一句收尾，就算被拒關係也能接著走\n把心裡那句話出聲練一遍`,
      oneLiner: `值得一試。看清反應，再加上一句收尾，就是最後那一塊`,
      shareLine: `我的告白成功機率：60% 🌤️（{score}分/10，前{percent}%）說值得試一試哈哈 你是多少？截圖傳我`,
    },
    {
      title: `成功機率80%`,
      shortDescription: `很有可能是一次好告白。`,
      description: `鋪墊、時機和方式大體都對上了。對方可以不帶壓力地想一想這份心意。`,
      scoreRange: `7～8分`,
      keywords: `時機好，體貼，有準備，真心`,
      strengths: `會看對方的處境，也能把心意說得不沉重`,
      tips: `等好感訊號比較明確的時候再定日子\n告白之後留出心情，能等對方的節奏\n無論答應還是拒絕，先想好後面怎麼聊`,
      oneLiner: `準備好的告白讓人鬆一口氣。剩下的就是勇氣`,
      shareLine: `我的告白成功機率：80% ☀️（{score}分/10，前{percent}%）說很有可能是一次好告白！你是多少？截個圖`,
    },
    {
      title: `成功機率95%`,
      shortDescription: `現在非常適合告白。`,
      description: `關係是一步步墊起來的，你會看對方的處境，也知道怎麼把真心說得不沉重。不管結果如何，都有保住關係的態度。只是別因為機率高，就走在對方前面。`,
      scoreRange: `9～10分`,
      keywords: `過程，時機，真心，體貼，成熟的態度`,
      strengths: `尊重對方，又能把真心穩穩說出來`,
      tips: `把想的時間留給對方，這份從容走到最後\n如果答應了，慢慢對齊節奏，把關係續下去\n把這套做法分給朋友。你的方式也許就是別人的提示`,
      oneLiner: `有過程的真心最容易送到。只要尊重對方的節奏`,
      shareLine: `我的告白成功機率：95% 🌈（{score}分/10，前{percent}%）說現在告白剛剛好哈哈 你是多少？把前百分之幾截圖傳我`,
    },
  ],
  areas: {
    foundation: `關係鋪墊`,
    timing: `時機`,
    method: `方式`,
    rush: `催促`,
    closing: `收尾`,
  },
};

const VI: Phase3ConfessionSuccessLocaleBundle = {
  questions: [
    {
      q: `Trước khi tỏ tình, quan hệ của hai người thế nào?`,
      opts: [`Đã gặp riêng vài lần và nói chuyện khá thoải mái`, `Vẫn chỉ chào nhau khi gặp đông người`],
    },
    {
      q: `Bạn chọn thời điểm tỏ tình thế nào?`,
      opts: [`Vừa thấy lòng trào lên là muốn nói ngay`, `Xem hoàn cảnh và không khí của người đó rồi mới quyết`],
    },
    {
      q: `Bạn đã thấy tín hiệu người đó cũng có cảm tình chưa?`,
      opts: [`Từ tin nhắn hay lời rủ gặp, mình đã cảm nhận được`, `Tín hiệu thì không rõ, chỉ chắc về lòng mình`],
    },
    {
      q: `Bạn sẽ chọn nơi tỏ tình thế nào?`,
      opts: [`Muốn gây bất ngờ lớn ở chỗ đông người`, `Chọn nơi yên, nói chuyện thoải mái được`],
    },
    {
      q: `Cách tỏ tình của bạn?`,
      opts: [`Nhìn thẳng mặt mà nói, với tất cả sự chân thành`, `Nhắn tin nhẹ trước, để đối phương đỡ áp lực`],
    },
    {
      q: `Bạn chuẩn bị lời tỏ tình thế nào?`,
      opts: [`Nói luôn những gì vừa nảy ra trong đầu`, `Gom cảm xúc thành một hai câu từ trước`],
    },
    {
      q: `Bạn nghĩ gì về khả năng bị từ chối?`,
      opts: [`Dù bị từ chối cũng chuẩn bị để không mất mối quan hệ`, `Không muốn nghĩ tới chuyện bị từ chối, nên không bận tâm`],
    },
    {
      q: `Lúc tỏ tình, bạn nghĩ mình sẽ cư xử thế nào?`,
      opts: [`Giục phải trả lời ngay và kéo không khí theo ý mình`, `Nói xong cảm xúc, rồi cho người đó thời gian suy nghĩ`],
    },
    {
      q: `Trước khi tỏ tình, bạn đã để lại ấn tượng gì?`,
      opts: [`Vẫn đều đặn hỏi thăm và thể hiện sự quan tâm`, `Ít liên lạc đến mức nói ra đột ngột sẽ làm người đó giật mình`],
    },
    {
      q: `Sau lời tỏ tình, phản ứng của người đó hơi ngượng. Bạn sẽ?`,
      opts: [`Hoảng, vội rút lời rồi tránh mặt`, `Cười cho nhẹ, bảo cứ từ từ, không cần gấp`],
    },
  ],
  results: [
    {
      title: `Xác suất 20%`,
      shortDescription: `Lời tỏ tình lúc này vẫn cần chuẩn bị thêm.`,
      description: `Tấm lòng là thật, nhưng quá trình xây dựng, thời điểm và cách nói chưa khớp. Đừng vội. Làm từng bước thì xác suất tăng rõ.`,
      scoreRange: `0–2 điểm`,
      keywords: `Chưa sẵn sàng, nói bộc phát, chưa xây dựng, chưa tính chuyện bị từ chối`,
      strengths: `Tấm lòng thẳng và nhiệt`,
      tips: `Tạo hai ba lần gặp riêng trước khi tỏ tình\nTrong một tháng, để ý tín hiệu cảm tình như nhắn tin hay rủ gặp\nGom lời tỏ tình thành một hai câu, chọn cách nói không gây áp lực`,
      oneLiner: `Lòng đã đủ. Xây thêm một chút, cùng tấm lòng ấy sẽ tới dễ hơn`,
      shareLine: `Xác suất tỏ tình của mình: 20% 🌧️ ({score} điểm/10, top {percent}%) Bảo là cần chuẩn bị thêm 😭 Bạn được bao nhiêu %? Chụp màn hình gửi mình`,
    },
    {
      title: `Xác suất 40%`,
      shortDescription: `Đã có mầm tỏ tình, nhưng vài chỗ đang lệch.`,
      description: `Nền cảm tình có rồi, chỉ là thời điểm hoặc cách nói còn chỗ gây áp lực. Chỉnh một hai thứ là khác.`,
      scoreRange: `3–4 điểm`,
      keywords: `Có cơ hội, lệch thời điểm, yếu tố gây áp lực, cần chỉnh`,
      strengths: `Có dũng khí, có lòng thật, và muốn nói ra`,
      tips: `Đừng làm sự kiện lớn, chọn chỗ nói chuyện yên\nTrước hết nói là không cần trả lời ngay, hãy cho thời gian nghĩ\nXem lại phản ứng gần đây của người đó, kiểm tra lúc này đã hợp chưa`,
      oneLiner: `Chỉnh một hai chỗ là xác suất lên. Hướng về phía làm người đó nhẹ lòng hơn`,
      shareLine: `Xác suất tỏ tình của mình: 40% ⛅ ({score} điểm/10, top {percent}%) Bảo chỉnh một hai chỗ là được... Bạn được bao nhiêu %? Chụp màn hình đi`,
    },
    {
      title: `Xác suất 60%`,
      shortDescription: `Đủ để thử một lần.`,
      description: `Nền tảng và sự tinh tế đã có, chỉ tiếc vài chỗ. Xác nhận thêm một lần tín hiệu cảm tình thì sẽ vững hơn.`,
      scoreRange: `5–6 điểm`,
      keywords: `Đáng thử, tinh tế, nền đã có, cần xác nhận`,
      strengths: `Cân bằng: vừa quan tâm người đó, vừa thực tế`,
      tips: `Trước khi tỏ tình, nói nhẹ "lần sau mình muốn gặp lại" rồi xem phản ứng\nChuẩn bị một câu kết để dù bị từ chối quan hệ vẫn tiếp được\nĐọc to một lần câu đã gom, cho quen miệng`,
      oneLiner: `Đáng để thử. Xem phản ứng, cộng một câu kết, là mảnh cuối`,
      shareLine: `Xác suất tỏ tình của mình: 60% 🌤️ ({score} điểm/10, top {percent}%) Bảo là đáng thử đó 😆 Bạn được bao nhiêu %? Chụp màn hình gửi mình`,
    },
    {
      title: `Xác suất 80%`,
      shortDescription: `Khả năng trở thành một lời tỏ tình đẹp là cao.`,
      description: `Quá trình, thời điểm và cách nói phần lớn đã khớp. Đây là lời tỏ tình để người đó nghĩ, mà không bị ép.`,
      scoreRange: `7–8 điểm`,
      keywords: `Đúng lúc, tinh tế, có chuẩn bị, chân thành`,
      strengths: `Biết nhìn hoàn cảnh người đó và nói ra mà không đè nặng`,
      tips: `Chốt ngày khi đã thấy tín hiệu cảm tình\nSau lời tỏ tình, để lòng rộng đủ chờ nhịp của người đó\nDù nhận hay từ chối, hình dung trước cuộc nói chuyện phía sau`,
      oneLiner: `Lời tỏ tình đã chuẩn bị làm người ta nhẹ lòng. Giờ chỉ cần thêm can đảm`,
      shareLine: `Xác suất tỏ tình của mình: 80% ☀️ ({score} điểm/10, top {percent}%) Bảo là rất có thể thành một lời tỏ tình đẹp! Bạn được bao nhiêu %? Chụp màn hình đi`,
    },
    {
      title: `Xác suất 95%`,
      shortDescription: `Đây là lúc rất đẹp để tỏ tình.`,
      description: `Bạn đã xây từng bước, biết nhìn hoàn cảnh người đó, và nói lòng thật mà không gây nặng. Dù kết quả thế nào cũng có thái độ giữ được quan hệ. Chỉ đừng vì xác suất cao mà đi trước nhịp của họ.`,
      scoreRange: `9–10 điểm`,
      keywords: `Quá trình, thời điểm, chân thành, tinh tế, thái độ chín`,
      strengths: `Cách tiếp cận vững: tôn trọng người đó mà vẫn nói được lòng thật`,
      tips: `Giữ đến cùng khoảng lặng để người đó nghĩ\nNếu được nhận, đi chậm theo nhịp và nối tiếp quan hệ\nChia cách làm này với bạn bè. Cách của bạn có thể là gợi ý của ai đó`,
      oneLiner: `Lòng thật có quá trình là thứ tới nhất. Chỉ cần tôn trọng nhịp của người đó`,
      shareLine: `Xác suất tỏ tình của mình: 95% 🌈 ({score} điểm/10, top {percent}%) Bảo là lúc này tỏ tình vừa đẹp 😆 Bạn được bao nhiêu %? Chụp top bao nhiêu phần trăm gửi mình`,
    },
  ],
  areas: {
    foundation: `Xây dựng`,
    timing: `Thời điểm`,
    method: `Cách nói`,
    rush: `Giục trả lời`,
    closing: `Cách kết`,
  },
};

const ID: Phase3ConfessionSuccessLocaleBundle = {
  questions: [
    {
      q: `Sebelum nembak, hubungan kalian seperti apa?`,
      opts: [`Sudah ketemu berdua beberapa kali dan ngobrolnya enak`, `Masih sebatas sapa saat kumpul bareng teman`],
    },
    {
      q: `Kamu pilih waktu nembak dengan cara apa?`,
      opts: [`Begitu perasaan memuncak, langsung ingin bilang`, `Lihat dulu keadaan dan suasana hati dia, baru putuskan`],
    },
    {
      q: `Pernah lihat tanda dia juga suka?`,
      opts: [`Dari chat atau ajakan ketemu, pernah terasa ada rasa`, `Tandanya kurang kelihatan, yang pasti cuma perasaan sendiri`],
    },
    {
      q: `Tempat nembaknya kamu pilih yang mana?`,
      opts: [`Ingin di tempat ramai, dengan kejutan besar`, `Memilih tempat tenang, biar bisa ngobrol dengan leluasa`],
    },
    {
      q: `Cara nembaknya?`,
      opts: [`Bilang langsung sambil tatap muka, dengan sungguh-sungguh`, `Kirim chat dulu yang ringan, biar tidak terasa berat`],
    },
    {
      q: `Kata-kata nembaknya kamu siapkan bagaimana?`,
      opts: [`Spontan, bicara apa yang terlintas saat itu`, `Merangkum perasaan jadi satu dua kalimat dari awal`],
    },
    {
      q: `Soal kemungkinan ditolak, kamu bagaimana?`,
      opts: [`Tetap siapkan cara agar hubungannya tidak putus meski ditolak`, `Tidak mau memikirkan penolakan sama sekali`],
    },
    {
      q: `Saat nembak, sikapmu ke dia kira-kira bagaimana?`,
      opts: [`Mendesak jawaban saat itu juga dan mengarahkan suasana`, `Sampaikan perasaan, lalu beri waktu untuk berpikir`],
    },
    {
      q: `Sebelum nembak, kesan yang sudah kamu bangun seperti apa?`,
      opts: [`Cukup rutin menyapa dan menunjukkan perhatian`, `Jarang banget chat, sampai perasaan yang tiba-tiba pasti bikin kaget`],
    },
    {
      q: `Setelah nembak, reaksinya canggung. Kamu?`,
      opts: [`Panik, buru-buru tarik kata-kata, lalu menghindar`, `Tersenyum supaya tidak berat, lalu bilang tidak apa-apa ambil waktu`],
    },
  ],
  results: [
    {
      title: `Peluang 20%`,
      shortDescription: `Nembak sekarang masih butuh persiapan.`,
      description: `Perasaannya tulus, tapi kedekatan, waktu, dan cara menyampaikannya belum nyambung. Daripada buru-buru, bangun prosesnya dulu. Peluangnya naik jauh.`,
      scoreRange: `0–2 poin`,
      keywords: `Belum siap, spontan, kedekatan tipis, belum siap ditolak`,
      strengths: `Perasaan yang jujur dan sungguh-sungguh`,
      tips: `Buat dua tiga kali ketemu berdua sebelum nembak\nSelama sebulan, perhatikan tanda dia suka, seperti chat atau ajakan ketemu\nRingkas jadi satu dua kalimat, dan pilih cara yang tidak menekan`,
      oneLiner: `Perasaannya sudah cukup. Tambah sedikit proses, hati yang sama lebih mudah sampai`,
      shareLine: `Peluang nembakku: 20% 🌧️ ({score} poin/10, {percent}% teratas) Katanya masih perlu persiapan 😭 Kamu berapa %? Kirim screenshotnya`,
    },
    {
      title: `Peluang 40%`,
      shortDescription: `Benihnya ada, tapi beberapa bagian masih meleset.`,
      description: `Dasar rasa suka sudah ada, hanya waktu atau caranya masih ada yang terasa menekan. Ubah satu dua hal, hasilnya beda.`,
      scoreRange: `3–4 poin`,
      keywords: `Ada peluang, waktu meleset, ada tekanan, perlu disesuaikan`,
      strengths: `Punya nyali, tulus, dan memang ingin mengatakannya`,
      tips: `Daripada acara besar, pilih tempat yang tenang untuk ngobrol\nBilang dulu bahwa dia boleh berpikir, jangan desak jawaban\nLihat lagi respons dia belakangan, cek apakah sekarang memang waktunya`,
      oneLiner: `Ubah satu dua hal, peluangnya naik. Arahkan ke versi yang lebih ringan untuk dia`,
      shareLine: `Peluang nembakku: 40% ⛅ ({score} poin/10, {percent}% teratas) Katanya ubah satu dua hal sudah cukup... Kamu berapa %? Screenshot, yuk`,
    },
    {
      title: `Peluang 60%`,
      shortDescription: `Sudah layak dicoba.`,
      description: `Dasar kedekatan dan perhatiannya sudah ada. Yang kurang cuma beberapa. Cek sekali lagi tanda dia suka, biar lebih mantap.`,
      scoreRange: `5–6 poin`,
      keywords: `Layak dicoba, perhatian, dasar sudah ada, perlu dicek`,
      strengths: `Seimbang: peduli sama dia, tapi tetap realistis`,
      tips: `Sebelum nembak, bilang ringan "pengen ketemu lagi" lalu lihat responsnya\nSiapkan kalimat penutup supaya kalau ditolak, hubungannya tidak harus putus\nUcapkan sekali kalimat yang sudah dirangkum, biar tidak kaku`,
      oneLiner: `Layak dicoba. Baca responsnya, plus kalimat penutup, itu potongan terakhir`,
      shareLine: `Peluang nembakku: 60% 🌤️ ({score} poin/10, {percent}% teratas) Katanya layak dicoba wkwk Kamu berapa %? Kirim screenshotnya`,
    },
    {
      title: `Peluang 80%`,
      shortDescription: `Besar kemungkinan ini jadi nembak yang bagus.`,
      description: `Kedekatan, waktu, dan caranya sebagian besar sudah pas. Ini nembak yang bisa dia pikirkan tanpa merasa terpojok.`,
      scoreRange: `7–8 poin`,
      keywords: `Waktu pas, perhatian, siap, tulus`,
      strengths: `Dewasa: baca keadaan dia, lalu bilang tanpa memberatkan`,
      tips: `Tentukan hari setelah tanda suka memang kelihatan\nSetelah nembak, sisakan hati untuk menunggu temponya\nBayangkan obrolan setelahnya, mau diterima atau ditolak`,
      oneLiner: `Nembak yang disiapkan bikin hati lebih ringan. Tinggal tambah keberanian`,
      shareLine: `Peluang nembakku: 80% ☀️ ({score} poin/10, {percent}% teratas) Katanya ini bisa jadi nembak yang bagus! Kamu berapa %? Screenshot, yuk`,
    },
    {
      title: `Peluang 95%`,
      shortDescription: `Ini waktu yang sangat pas untuk nembak.`,
      description: `Kamu membangun hubungan pelan-pelan, membaca keadaan dia, dan tahu cara bilang yang tulus tanpa memberatkan. Sikapmu bisa menjaga hubungan, apa pun jawabannya. Hanya jangan sampai angka yang tinggi membuatmu mendahului temponya.`,
      scoreRange: `9–10 poin`,
      keywords: `Proses, waktu, ketulusan, perhatian, sikap dewasa`,
      strengths: `Pendekatan yang stabil: menghormati dia sambil menyampaikan yang tulus`,
      tips: `Pertahankan kelonggaran untuk memberinya waktu berpikir sampai akhir\nKalau diterima, sesuaikan tempo pelan-pelan dan lanjutkan hubungannya\nBagikan cara ini ke teman. Caramu bisa jadi petunjuk orang lain`,
      oneLiner: `Perasaan yang sudah lewat proses paling mudah sampai. Cukup hormati temponya`,
      shareLine: `Peluang nembakku: 95% 🌈 ({score} poin/10, {percent}% teratas) Katanya ini waktu yang pas buat nembak wkwk Kamu berapa %? Screenshot persen teratasnya`,
    },
  ],
  areas: {
    foundation: `Kedekatan`,
    timing: `Waktu`,
    method: `Cara bilang`,
    rush: `Mendesak`,
    closing: `Penutup`,
  },
};

export const PHASE3_CONFESSION_SUCCESS_I18N: Record<
  Phase3ConfessionSuccessForeignLocale,
  Phase3ConfessionSuccessLocaleBundle
> = {
  en: EN,
  ja: JA,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  vi: VI,
  id: ID,
};
