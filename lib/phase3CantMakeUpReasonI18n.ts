/** 싸우고 화해를 못 하는 진짜 이유 — 외국어 번역 (문항·선택지 순서는 phase3CantMakeUpReasonData RAW_QUESTIONS와 동일) */

export type Phase3CantMakeUpReasonForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3CantMakeUpReasonResultText {
  title: string;
  typeName: string;
  realReason: string;
  shortDescription: string;
  description: string;
  keywords: string;
  blockedMoment: string;
  partnerSees: string;
  groupChatCharacter: string;
  strengths: string;
  reasonDetail: string;
  frequentSaying: string;
  changeTips: string;
  oneLiner: string;
  shareLine: string;
  counselingNote?: string;
}

export interface Phase3CantMakeUpReasonLocaleBundle {
  meta: { title: string; description: string; tags: [string, string] };
  questions: { q: string; opts: [string, string, string, string] }[];
  results: Phase3CantMakeUpReasonResultText[];
}

const EN: Phase3CantMakeUpReasonLocaleBundle = {
  "meta": {
    "title": "The Real Reason You Can't Make Up After a Fight",
    "description": "You want to text first—but your hands freeze. Twelve situations reveal whether pride, fear of rejection, timing, or leftover hurt is what's holding you back.",
    "tags": [
      "couple fight",
      "relationship test"
    ]
  },
  "questions": [
    {
      "q": "The morning after a fight, your partner hasn't texted. You…",
      "opts": [
        "Put the phone down—texting first would feel like admitting I was wrong",
        "Open the chat, then close it, scared they'll read it and leave me on read",
        "Keep waiting for the right moment until lunch turns into evening",
        "Still feel hurt, so I can't even think of what to say"
      ]
    },
    {
      "q": "Day two of the cold war. You really want to make up. You…",
      "opts": [
        "Hesitate—reaching out might get a cold reply",
        "Tell yourself it's too late today and push it to tomorrow… again",
        "Wait for them to notice first how hurt you were",
        "Figure it's their turn to text by now"
      ]
    },
    {
      "q": "A friend says, \"Just text them first.\" You…",
      "opts": [
        "Know they're right, but the timing still feels off",
        "Could text—but you still haven't gotten an apology, and that sticks",
        "Worry that folding first means you'll always have to",
        "Fear sending anything will somehow make it worse"
      ]
    },
    {
      "q": "Your partner posts on social like nothing happened. You…",
      "opts": [
        "Feel even more shut down seeing them act so fine",
        "Get stubborn—I'm struggling and they look fine?",
        "Can't even hit like, scared of being ignored",
        "Feel it's too late to react, so you scroll past"
      ]
    },
    {
      "q": "The cold war has lasted over a week. You…",
      "opts": [
        "Hold out—making the first move would bruise your pride",
        "Let time pass without ever saying what hurt you",
        "Feel it's way too late to reach out now",
        "Avoid checking in, terrified they'll say they're over it"
      ]
    },
    {
      "q": "They text first with just \"wyd?\" You…",
      "opts": [
        "Reply carefully—not sure if it's a make-up signal",
        "Keep it short so you don't look like you caved too easily",
        "Still feel hurt there wasn't even a sorry",
        "Wait a long time before answering because so much time has passed"
      ]
    },
    {
      "q": "You're drafting a make-up message. You…",
      "opts": [
        "Keep checking the clock for the perfect send time",
        "Type, delete, and replay them never answering",
        "Can't hit send—going first might look weak",
        "Start listing what hurt you and it stops sounding like a make-up text"
      ]
    },
    {
      "q": "They say, \"We need to talk.\" You…",
      "opts": [
        "Want to talk too—but need the hurt acknowledged first",
        "Put it off: not now, maybe later",
        "Heart sinks—worried it's a breakup talk",
        "Go on defense so you won't be the only one at fault"
      ]
    },
    {
      "q": "You replay how you made up after the last fight. You…",
      "opts": [
        "Still feel pride that you didn't text first",
        "Get scared again because reaching out got rejected before",
        "Realize the hurt never really cleared and just piled up",
        "Remember missing the moment and letting it fizzle awkwardly"
      ]
    },
    {
      "q": "They read your message all day and never reply. You…",
      "opts": [
        "Spiral—do they not like me anymore?",
        "Cut contact right back so they get a taste of it",
        "Wait even longer so you won't seem pushy",
        "Feel hurt again and shut the door a little more"
      ]
    },
    {
      "q": "An anniversary is coming and you still haven't made up. You…",
      "opts": [
        "Know you should clear it before then—but can't find the moment",
        "Still feel hurt, so celebrating doesn't feel possible",
        "Hesitate to send anything, scared of no response",
        "Wait for them to text first until it becomes a pride standoff"
      ]
    },
    {
      "q": "Which sentence feels closest to you right now?",
      "opts": [
        "\"I want to talk, but I'm still hurting\"",
        "\"I was going to text… and I missed the window\"",
        "\"If I go first, it feels like I lose\"",
        "\"I'm scared they'll reject me if I reach out\""
      ]
    }
  ],
  "results": [
    {
      "title": "The one who feels like folding first means losing — Pride Protector",
      "typeName": "Pride Protector",
      "realReason": "Texting first feels like admitting you were wrong",
      "shortDescription": "It's not that you hate making up. Reaching out first just feels like losing—so you hold the line.",
      "description": "Who texts first feels like a scoreboard, so you wait for them. Pride protects you—but if you're both waiting the same way, the cold war drags on.",
      "keywords": "going first = losing·holding out·who texts first·stubborn pride",
      "blockedMoment": "When you're waiting for their text, or it's clearly your turn to send",
      "partnerSees": "Solid—but hard to read",
      "groupChatCharacter": "Acts like they won't go first… while waiting the hardest",
      "strengths": "Clear standards and solid self-respect",
      "reasonDetail": "You read making up as \"losing,\" so showing care feels like weakness",
      "frequentSaying": "\"They should text first\"",
      "changeTips": "Redefine texting first as choosing the relationship—not losing\nStart with a no-winner line like \"I just want us okay—no scorekeeping\"\nAgree in calmer times to take turns making the first move",
      "oneLiner": "A hand held out first isn't weakness—it's courage. Making up lasts longer than winning.",
      "shareLine": "The real reason I can't make up: Pride Protector 👑 Folding first feels like losing lol. My group-chat character is \"acts chill but waits the hardest\"... what'd you get?"
    },
    {
      "title": "The one terrified of reaching out and getting rejected — Rejection-Fear Type",
      "typeName": "Rejection-Fear Type",
      "realReason": "You picture a cold rejection before you even send anything",
      "shortDescription": "It's not that you don't care. You're already feeling a rejection that hasn't happened yet.",
      "description": "You open the chat, close it, and spiral about no reply. Trying to avoid getting hurt ends up blocking the chance to make up.",
      "keywords": "imagining rejection·open-close the chat·left-on-read fear·avoiding the check-in",
      "blockedMoment": "While writing a message, or when they go quiet",
      "partnerSees": "Quiet—and hard to know what's inside",
      "groupChatCharacter": "Draft-delete master, drafts folder millionaire",
      "strengths": "You treasure the bond and notice how they feel",
      "reasonDetail": "The problem isn't their reply—it's the story that you couldn't handle being rejected",
      "frequentSaying": "\"What if they never answer?\"",
      "changeTips": "Write the worst-case reply and what you could still handle beside it\nSkip the essay—send one line: \"I miss you. Can we talk?\"\nTreat a late read as the message landing, even before a reply",
      "oneLiner": "One line is enough. Real answers are lighter than the rejection you keep imagining.",
      "shareLine": "The real reason I can't make up: Rejection-Fear Type 🥶 Scared of being left on read… My group-chat character is \"drafts folder millionaire\" 💀 what'd you get?",
      "counselingNote": "If fear of rejection is heavy not just in dating but across daily life, talking with a counselor can help."
    },
    {
      "title": "The one who waits for the perfect moment—and misses it — Timing Misser",
      "typeName": "Timing Misser",
      "realReason": "Waiting for a better moment lets time pile up until texting feels harder",
      "shortDescription": "You do want to make up. \"Not right now\" just keeps looping until the moment is gone.",
      "description": "One day becomes two, then a week—and silence grows taller than the original fight. Perfect timing never arrives, and the longer you wait, the harder it is to start.",
      "keywords": "not right now·putting it off·feels too late·clock-watching",
      "blockedMoment": "When you're picking a time to text, or another day has slipped by",
      "partnerSees": "Seems to care—but moves slowly",
      "groupChatCharacter": "Champion of \"I'll text tomorrow\"",
      "strengths": "You consider their situation and choose carefully",
      "reasonDetail": "You're not really choosing timing—you're delaying the hard part of speaking up",
      "frequentSaying": "\"I'll send it tomorrow\"",
      "changeTips": "Set a rule: one line within 24 hours after a fight\nEven if it's late, start with \"Sorry this took me so long\"\nCap the overthinking at 10 minutes, then send",
      "oneLiner": "The best timing is now. An \"I'm late\" apology often opens the door.",
      "shareLine": "The real reason I can't make up: Timing Misser ⏳ Missed it while waiting for the perfect second lol. My group-chat character is \"I'll text tomorrow\" champion… what'd you get?"
    },
    {
      "title": "The one whose hurt never got heard — Hurt Accumulator",
      "typeName": "Hurt Accumulator",
      "realReason": "Unacknowledged hurt is still sitting there, so make-up energy won't move first",
      "shortDescription": "It's not that you hate making up. Your hurt still hasn't been truly received—not even once.",
      "description": "You could text—but without apology or understanding, making up feels like swallowing it again. If the hurt stays unspoken, the same fight returns.",
      "keywords": "wanting to be seen·piled-up hurt·waiting for sorry·door closing",
      "blockedMoment": "When they reach out with no apology, or the hurt reason flashes back",
      "partnerSees": "Quiet on the outside, stacking a lot inside",
      "groupChatCharacter": "Quietly keeping the emotional ledger",
      "strengths": "Deep feelings and a clear bar for being respected",
      "reasonDetail": "Before make-up itself, you need \"please get how I felt\" to land",
      "frequentSaying": "\"Do you even know how hurt I was?\"",
      "changeTips": "Before the make-up text, jot one fact line + one feeling line about what hurt\nSay both at once: \"I want to make up—and this part hurt\"\nAsk for the words you need instead of only waiting for an apology",
      "oneLiner": "Hurt clears when you name it. Put make-up and hurt in the same sentence.",
      "shareLine": "The real reason I can't make up: Hurt Accumulator 🌧️ The hurt never cleared… My group-chat character is \"quietly keeping the ledger\" oof. what'd you get?"
    }
  ]
};

const JA: Phase3CantMakeUpReasonLocaleBundle = {
  "meta": {
    "title": "ケンカして仲直りできない本当の理由",
    "description": "先に連絡したいのに手が動かないとき。12のシチュエーションで、プライド・拒否への恐れ・タイミング・積み残した気持ちのどれが手を止めているのかわかります。",
    "tags": [
      "カップル喧嘩",
      "恋愛テスト"
    ]
  },
  "questions": [
    {
      "q": "ケンカの翌朝、恋人から連絡がない。あなたは？",
      "opts": [
        "先に送ったら自分が悪かったみたいで、スマホを置く",
        "送って既読スルーされたらと思うと、入力欄を開いて閉じる",
        "送るタイミングを計っているうちに昼が過ぎて夜になる",
        "まだ気持ちが残っていて、送る言葉が浮かばない"
      ]
    },
    {
      "q": "冷戦二日目。仲直りしたい気持ちが大きくなった。あなたは？",
      "opts": [
        "手を差し伸べて冷たく返されたらとためらってしまう",
        "今日はもう遅いから明日送ろうと、また一日延ばす",
        "自分が傷ついたことに、相手から先に気づいてほしい",
        "このくらいなら相手から連絡する番だと思う"
      ]
    },
    {
      "q": "友達に「とりあえず先に連絡してみなよ」と言われた。あなたは？",
      "opts": [
        "その通りだけど、今送るにはタイミングが微妙だと感じる",
        "連絡はできるけど、謝ってもらえてない気持ちが残っている",
        "自分が先に折れたら、これからもずっとそうなりそう",
        "余計に送って状況が悪化したら怖い"
      ]
    },
    {
      "q": "恋人が何事もなかったようにSNSに写真を上げた。あなたは？",
      "opts": [
        "平気そうに上げる姿にまた傷ついて、心がさらに閉じる",
        "自分はつらいのに相手は平気そうで、意地が出る",
        "話しかけて無視されたらと思うと「いいね」も押せない",
        "反応するにはもう遅い気がして、そのまま流す"
      ]
    },
    {
      "q": "冷戦が一週間を超えた。あなたは？",
      "opts": [
        "自分が先に解いたらプライドが傷つきそうで粘る",
        "積み上がった気持ちを言えないまま、時間だけが過ぎる",
        "今さら連絡するには遅すぎる気がして送れない",
        "気持ちが冷めたって返ってきたらと思うと、確認を避ける"
      ]
    },
    {
      "q": "恋人が先に「何してる？」だけ送ってきた。あなたは？",
      "opts": [
        "仲直りサインかわからず、慎重に返す",
        "簡単に解けたら負けみたいで、短くだけ返す",
        "謝りの一言もない連絡に、まだ傷ついている",
        "すぐ返すには時間が経ちすぎて、だいぶ後に返す"
      ]
    },
    {
      "q": "仲直りメッセージを書いている。あなたは？",
      "opts": [
        "いつ送るのがいいか、ずっと時間を計る",
        "書いて消して、返事が来ない場面を想像する",
        "先に送ったら弱く見えそうで、送信できない",
        "傷ついた理由を書いているうちに、仲直り文じゃなくなる"
      ]
    },
    {
      "q": "恋人に「ちょっと話そう」と言われた。あなたは？",
      "opts": [
        "話したいけど、傷ついたことから認めてほしい",
        "今じゃない気がして、また今度と先延ばしにする",
        "別れの話かもと思うと、心臓が沈む",
        "自分だけが悪い人になりそうで、まず防御する"
      ]
    },
    {
      "q": "前回のケンカ後に仲直りしたときを思い出す。あなたは？",
      "opts": [
        "結局自分が先に連絡しなかったことが、プライドとして残った",
        "連絡して拒まれた記憶で、今回も怖くなる",
        "気持ちが解けないまま流れて、心に積もった",
        "タイミングを逃して、気まずい感じのままうやむやになった"
      ]
    },
    {
      "q": "恋人が一日中メッセージを既読なのに返事がない。あなたは？",
      "opts": [
        "嫌われたのかなと不安になる",
        "こっちも同じようにしてやると連絡を切る",
        "今送ったら催促みたいに見えるから、もっと待つ",
        "そうされるのがまたつらくて、心のドアが閉まる"
      ]
    },
    {
      "q": "記念日が近づいているのに、まだ仲直りできていない。あなたは？",
      "opts": [
        "記念日の前に解かなきゃなのに、切り出すタイミングがつかめない",
        "気持ちが残っていて、お祝いする気になれない",
        "記念日の連絡に反応がなかったらと思うと、送るか迷うだけ",
        "向こうから来るのを待っているうちにプライド勝負になる"
      ]
    },
    {
      "q": "今の自分にいちばん近い文は？",
      "opts": [
        "「話したいけど、まだ気持ちが解けてない」",
        "「連絡しようとして、タイミング逃した」",
        "「自分が先にしたら負けみたいでできない」",
        "「連絡して拒まれたら怖い」"
      ]
    }
  ],
  "results": [
    {
      "title": "先に折れたら負けに感じる人、プライド守り型",
      "typeName": "プライド守り型",
      "realReason": "先に連絡することが、自分が悪かったと認めるように感じる",
      "shortDescription": "仲直りが嫌いなわけではありません。先に手を差し伸べる瞬間が負けみたいで、粘っているのです。",
      "description": "連絡の順番が勝敗みたいに感じて、相手から先に来るのを待ちます。プライドは自分を守りますが、双方が同じ気持ちで待つと冷戦が長くなります。",
      "keywords": "先にしたら負け・粘る・連絡の順番・意地",
      "blockedMoment": "相手の連絡を待っているとき、自分が先に送る番のとき",
      "partnerSees": "しっかりしてるけど、本心が読みにくい人",
      "groupChatCharacter": "先にしないフリして、実はいちばん待ってる人",
      "strengths": "自分の基準がはっきりしていて、自分を大切にできる硬さ",
      "reasonDetail": "仲直りを「負け」と解釈してしまい、気持ちの表現が弱さに見える",
      "frequentSaying": "「向こうが先に連絡すべきでしょ」",
      "changeTips": "先に連絡するのは負けではなく「関係を選ぶ選択」と捉え直す\n「勝った人もいないまま、ただ解きたい」など勝敗のない一文から始める\n普段から連絡の先出しを交代制にすると決めておく",
      "oneLiner": "先に差し伸べた手は弱さではなく勇気です。勝つより解けるほうが長く続きます",
      "shareLine": "ケンカして仲直りできない本当の理由：プライド守り型 👑 先に折れたら負けだと思ってるらしい笑 私のグループLINEキャラは「先にしないフリして一番待ってる人」…みんなは何出た？"
    },
    {
      "title": "連絡して拒まれるのが怖い人、拒否恐れ型",
      "typeName": "拒否恐れ型",
      "realReason": "手を差し伸べて冷たく拒まれる場面が、先に浮かぶ",
      "shortDescription": "気持ちがないわけではありません。まだ起きていない拒否の痛みを、先に感じているのです。",
      "description": "入力欄を開いて閉じ、返事が来ない場面を想像して送れません。傷を避けようとする気持ちが、仲直りのチャンスまで塞いでいます。",
      "keywords": "拒否の想像・入力欄を開いて閉じる・既読スルー恐怖・確認回避",
      "blockedMoment": "メッセージを書いているとき、相手から返事がないとき",
      "partnerSees": "静かで、心を隠している人",
      "groupChatCharacter": "書いて消す職人、下書きフォルダ長者",
      "strengths": "関係を大切にし、相手の気持ちを丁寧に見る繊細さ",
      "reasonDetail": "相手の反応より、「拒まれたら耐えられない」という自分の予想が問題",
      "frequentSaying": "「返事来なかったらどうしよう」",
      "changeTips": "最悪の返事と「それでも耐えられる部分」を一緒に書き出してみる\n長文ではなく「会いたい、話したい」の一行だけ送る\n返事が遅くても「読んだ」だけで届いたと考える",
      "oneLiner": "一行で十分です。送った瞬間、想像の拒否より現実の返事のほうがずっと軽いです",
      "shareLine": "ケンカして仲直りできない本当の理由：拒否恐れ型 🥶 送って既読スルーされたら怖いみたい… 私のグループLINEキャラは「下書きフォルダ長者」ゾッ みんなは？",
      "counselingNote": "拒否への恐れが恋愛だけでなく日常全般でつらく感じるなら、カウンセリングの専門家に話してみてください"
    },
    {
      "title": "タイミングを計って逃す人、タイミング逃し型",
      "typeName": "タイミング逃し型",
      "realReason": "いいときを待っているうちに時間が過ぎ、連絡がどんどん難しくなる",
      "shortDescription": "仲直りしたい気持ちはあります。ただ「今じゃない気がする」が繰り返されて、時間が流れています。",
      "description": "一日が二日になり、二日が一週間になると、最初のケンカより沈黙のほうが大きな壁になります。完璧なタイミングは来ず、遅いほど話しにくくなります。",
      "keywords": "今じゃない・先延ばし・遅すぎる感じ・時間を計る",
      "blockedMoment": "連絡するタイミングを選ぶとき、もう一日過ぎたとき",
      "partnerSees": "気持ちはありそうなのに、動きが遅い人",
      "groupChatCharacter": "「明日連絡する」の達人",
      "strengths": "相手の状況を思いやり、慎重にタイミングを選ぶ心",
      "reasonDetail": "タイミング選びというより、切り出す負担を減らそうと先延ばしする癖",
      "frequentSaying": "「明日送ろう」",
      "changeTips": "ケンカ後「24時間以内に一行送る」ルールを決める\nもう遅くても「連絡が遅くてごめん」の一行から始める\nタイミングを考える時間を10分までに制限する",
      "oneLiner": "いちばんいいタイミングは今です。遅れたことへの一言が、むしろドアを開けます",
      "shareLine": "ケンカして仲直りできない本当の理由：タイミング逃し型 ⏳ 計ってるうちに逃すらしい笑 私のグループLINEキャラは「明日連絡するの達人」あるある…みんなは何出た？"
    },
    {
      "title": "気持ちが解けないままの人、気持ち積み上げ型",
      "typeName": "気持ち積み上げ型",
      "realReason": "認めてもらえなかった気持ちが残っていて、仲直りする気が先に動かない",
      "shortDescription": "仲直りが嫌いなわけではありません。自分の気持ちが、まだ一度もきちんと受け取られていないのです。",
      "description": "連絡はできても、謝りや理解がないままなら、仲直りが「また自分が我慢すること」に感じられます。気持ちを言葉にしないと同じケンカが繰り返されます。",
      "keywords": "認めてほしい・積み上がった気持ち・謝り待ち・心のドアが閉まる",
      "blockedMoment": "謝りのない連絡を受けたとき、傷ついた理由が浮かぶとき",
      "partnerSees": "口数は少ないけど、内側にたくさん溜め込む人",
      "groupChatCharacter": "静かに帳簿をつける人",
      "strengths": "感情が深く、関係で尊重されたい基準がはっきりしている",
      "reasonDetail": "仲直りそのものより「気持ちをわかってほしい」が先に満たされる必要がある状態",
      "frequentSaying": "「私がどれだけ傷ついたか、わかってる？」",
      "changeTips": "仲直り連絡の前に、傷ついた点を「事実一行＋気持ち一行」で書いてみる\n「仲直りしたい。でもこの部分はつらかった」を一度に言う\n謝りを待つだけでなく、ほしい一言を自分からお願いする",
      "oneLiner": "気持ちは言わないと解けません。仲直りとつらさを、同じ一文にのせてみて",
      "shareLine": "ケンカして仲直りできない本当の理由：気持ち積み上げ型 🌧️ 気持ちが解けなくてらしい… 私のグループLINEキャラは「静かに帳簿つける人」刺さる…みんなは？"
    }
  ]
};

const ZH_CN: Phase3CantMakeUpReasonLocaleBundle = {
  "meta": {
    "title": "吵完架却无法和好的真正原因",
    "description": "想先发消息却发不出去的时候。通过12个情境，找出是自尊、害怕被拒、时机，还是委屈积压在按住你的手。",
    "tags": [
      "情侣吵架",
      "恋爱测试"
    ]
  },
  "questions": [
    {
      "q": "吵完的第二天早上，对象没有联系你。你会？",
      "opts": [
        "觉得先发像承认自己错了，于是放下手机",
        "怕发出去被已读不回，打开输入框又关掉",
        "一直在挑发送时机，不知不觉从中午拖到晚上",
        "委屈还没消，根本想不出要说什么"
      ]
    },
    {
      "q": "冷战第二天，和好的心思越来越强。你会？",
      "opts": [
        "怕伸手过去换来冷淡回应，迟疑着",
        "觉得今天太晚了，明天再发——又拖一天",
        "等对方先意识到自己有多委屈",
        "觉得这时候该轮到对方先联系了"
      ]
    },
    {
      "q": "朋友说：“你就先联系一下呗。”你会？",
      "opts": [
        "道理是对的，但觉得现在发时机怪怪的",
        "能联系，但还没听到道歉，心里过不去",
        "怕自己先低头，以后都得这样",
        "怕多此一举反而把事情弄更糟"
      ]
    },
    {
      "q": "对象若无其事地在社交平台发了照片。你会？",
      "opts": [
        "看对方一副没事的样子更委屈，心更关紧",
        "自己很难受对方却看起来没事，来劲了",
        "怕搭话被无视，连赞都不敢点",
        "觉得反应已经晚了，直接划过去"
      ]
    },
    {
      "q": "冷战超过一周。你会？",
      "opts": [
        "觉得自己先开口伤自尊，硬撑着",
        "积压的委屈说不出口，只会让时间溜走",
        "觉得现在再联系已经太晚，发不出去",
        "怕对方回一句心凉了，不敢确认"
      ]
    },
    {
      "q": "对象先发来一句“在干嘛？”。你会？",
      "opts": [
        "不确定是不是和好信号，小心翼翼地回",
        "怕太轻易就和好像输了，只回很短",
        "一句道歉都没有，还是很委屈",
        "拖了太久，隔很久才回"
      ]
    },
    {
      "q": "你正在写和好消息。你会？",
      "opts": [
        "一直在挑什么时候发最合适",
        "写了又删，脑补对方不回的画面",
        "怕先发显得软弱，按不下发送",
        "写着写着变成在数落委屈，不像和好了"
      ]
    },
    {
      "q": "对象说：“我们谈谈吧。”你会？",
      "opts": [
        "也想谈，但想先被承认当时有多委屈",
        "觉得现在不行，推到下次再说",
        "心脏一沉——怕是分手谈话",
        "怕自己成唯一的错方，先进入防御模式"
      ]
    },
    {
      "q": "回想上次吵完又和好的时候。你会？",
      "opts": [
        "最后是自己没先联系，这件事成了自尊残留",
        "想起联系被拒的经历，这次又害怕",
        "委屈没解开就过去了，心里越堆越多",
        "错过时机，尴尬地糊弄过去了"
      ]
    },
    {
      "q": "对象一整天已读你的消息却不回。你会？",
      "opts": [
        "开始慌——是不是讨厌我了",
        "决定也一样不理，切断联系",
        "怕现在发像在催，再多等一会儿",
        "这样对待又让你委屈，心门更关"
      ]
    },
    {
      "q": "纪念日快到了，却还没和好。你会？",
      "opts": [
        "知道纪念日前进该解开，却抓不住开口时机",
        "委屈还在，根本没心情庆祝",
        "怕纪念日问候没反应，犹豫要不要发",
        "等对方先来，拖成了自尊对峙"
      ]
    },
    {
      "q": "现在哪句话最接近你？",
      "opts": [
        "“想说，但委屈还没消”",
        "“本来要发，时机错过了”",
        "“我先开口就像输了，做不到”",
        "“怕联系了会被拒绝”"
      ]
    }
  ],
  "results": [
    {
      "title": "觉得先低头就像输了的人，自尊守护型",
      "typeName": "自尊守护型",
      "realReason": "先联系，感觉像在承认自己错了",
      "shortDescription": "不是讨厌和好。只是先伸手的那一刻像输掉，所以你在硬撑。",
      "description": "谁先发消息像在记分，所以你等对方。自尊保护了你，但两边都这样等，冷战就会拖长。",
      "keywords": "先开口=输·硬撑·谁先联系·较劲",
      "blockedMoment": "等对方消息时，或明显该轮到你发时",
      "partnerSees": "很有主见，但难读懂心思的人",
      "groupChatCharacter": "装作不先联系，其实最等消息的人",
      "strengths": "标准清晰，懂得尊重自己",
      "reasonDetail": "把和好解读成“失败”，表达心意就显得像软弱",
      "frequentSaying": "“该对方先联系吧”",
      "changeTips": "把先联系重新定义为选择这段关系，而不是认输\n用没有输赢的句子开头，比如“不想分出谁赢，只想解开”\n平时就约定轮流做先开口的那个人",
      "oneLiner": "先伸出去的手不是软弱，是勇气。和好比赢更长久。",
      "shareLine": "吵完架却无法和好的真正原因：自尊守护型 👑 据说觉得先低头就像输了哈哈 我的群聊人设是“装作不先联系其实最等”…你们出了啥？"
    },
    {
      "title": "怕联系了会被拒绝的人，拒绝恐惧型",
      "typeName": "拒绝恐惧型",
      "realReason": "脑海里先浮现伸出手却被冷拒的画面",
      "shortDescription": "不是没心。你只是提前感受到了还没发生的拒绝。",
      "description": "打开输入框又关掉，脑补不回的场景，所以发不出去。想躲开伤害的心，连和好的机会也挡住了。",
      "keywords": "想象被拒·开了又关·已读不回恐惧·回避确认",
      "blockedMoment": "写消息时，或对方不回时",
      "partnerSees": "安静、把心思藏起来的人",
      "groupChatCharacter": "写了又删大师，草稿箱富翁",
      "strengths": "珍惜关系，也很细心地察觉对方心情",
      "reasonDetail": "问题不在对方的反应，而在“被拒绝就扛不住”的自我预判",
      "frequentSaying": "“要是不回怎么办”",
      "changeTips": "把最坏的回复和“就算那样也能承受的部分”一起写下来\n别写长文，只发一句：“想见你，想聊聊”\n就算回得晚，也把“已读”当成已经传到了",
      "oneLiner": "一行就够。真正发出去的瞬间，现实的回复比想象的拒绝轻得多。",
      "shareLine": "吵完架却无法和好的真正原因：拒绝恐惧型 🥶 据说怕发出去被已读不回… 我的群聊人设是“草稿箱富翁”细思极恐 你们呢？",
      "counselingNote": "如果对被拒绝的恐惧不只在恋爱、在日常生活里也很沉重，可以考虑和心理咨询师聊聊。"
    },
    {
      "title": "挑时机却总错过的人，时机错过型",
      "typeName": "时机错过型",
      "realReason": "等更好的时机，时间过去，联系反而更难",
      "shortDescription": "你有和好的心。只是“现在好像不太对”反复出现，时间就溜走了。",
      "description": "一天变两天、两天变一周，沉默比当初的吵架更像一堵墙。完美时机不会来，越晚越难开口。",
      "keywords": "现在不行·拖延·已经太晚·掐时间",
      "blockedMoment": "挑什么时候发时，或又过了一天时",
      "partnerSees": "看起来有心，但行动偏慢的人",
      "groupChatCharacter": "“明天再联系”达人",
      "strengths": "会顾及对方状况，谨慎地选时机",
      "reasonDetail": "表面上是在选时机，其实是在推迟开口的负担",
      "frequentSaying": "“明天再发吧”",
      "changeTips": "约定吵架后24小时内先发一行\n就算晚了，也用“抱歉联系晚了”开头\n把纠结时机的时间限制在10分钟内",
      "oneLiner": "最好的时机就是现在。一句“我晚了”反而常能把门打开。",
      "shareLine": "吵完架却无法和好的真正原因：时机错过型 ⏳ 据说总在掐点然后错过哈哈 我的群聊人设是“明天再联系达人”好准…你们出了啥？"
    },
    {
      "title": "委屈一直没被接住的人，委屈堆积型",
      "typeName": "委屈堆积型",
      "realReason": "没被承认的委屈还在，和好的心不会先动",
      "shortDescription": "不是讨厌和好。你的委屈还一次都没有被真正接住。",
      "description": "能联系，可如果没有道歉和理解，和好就像又在忍一次。委屈不说出口，同样的架还会再吵。",
      "keywords": "想被看见·堆积的委屈·等道歉·心门关上",
      "blockedMoment": "收到没有道歉的联系时，或想起委屈原因时",
      "partnerSees": "话不多、心里却堆很多的人",
      "groupChatCharacter": "安静记账的人",
      "strengths": "情感很深，对关系里的尊重有清晰标准",
      "reasonDetail": "比起和好本身，更需要先被听到“请理解我当时的感受”",
      "frequentSaying": "“你知道我有多委屈吗？”",
      "changeTips": "和好消息前，先用“事实一行+心情一行”写下委屈点\n一次说完：“想和好。但这件事让我很委屈”\n与其只等道歉，不如直接提出想听到的那句话",
      "oneLiner": "委屈要说出来才会散。把和好和委屈放进同一句话里。",
      "shareLine": "吵完架却无法和好的真正原因：委屈堆积型 🌧️ 据说委屈一直没解开… 我的群聊人设是“安静记账的人”好扎心 你们呢？"
    }
  ]
};

const ZH_TW: Phase3CantMakeUpReasonLocaleBundle = {
  "meta": {
    "title": "吵完架卻無法和好的真正原因",
    "description": "想先傳訊息卻傳不出去的時候。透過12個情境，找出是自尊、害怕被拒、時機，還是委屈積壓在按住你的手。",
    "tags": [
      "情侶吵架",
      "戀愛測驗"
    ]
  },
  "questions": [
    {
      "q": "吵完的隔天早上，對象沒有聯絡你。你會？",
      "opts": [
        "覺得先傳像承認自己錯了，於是放下手機",
        "怕傳出去被已讀不回，打開輸入框又關掉",
        "一直在挑發送時機，不知不覺從中午拖到晚上",
        "委屈還沒消，根本想不出要說什麼"
      ]
    },
    {
      "q": "冷戰鬥二天，和好的心思越來越強。你會？",
      "opts": [
        "怕伸手過去換來冷淡回應，遲疑著",
        "覺得今天太晚了，明天再傳——又拖一天",
        "等對方先意識到自己有多委屈",
        "覺得這時候該輪到對方先聯絡了"
      ]
    },
    {
      "q": "朋友說：「你就先聯絡一下嘛。」你會？",
      "opts": [
        "道理是對的，但覺得現在傳時機怪怪的",
        "能聯絡，但還沒聽到道歉，心裡過不去",
        "怕自己先低頭，以後都得這樣",
        "怕多此一舉反而把事情弄更糟"
      ]
    },
    {
      "q": "對象若無其事地在社群發了照片。你會？",
      "opts": [
        "看對方一副沒事的樣子更委屈，心更關緊",
        "自己很難受對方卻看起來沒事，來勁了",
        "怕搭話被無視，連讚都不敢按",
        "覺得反應已經晚了，直接滑過去"
      ]
    },
    {
      "q": "冷戰超過一週。你會？",
      "opts": [
        "覺得自己先開口傷自尊，硬撐著",
        "積壓的委屈說不出口，只會讓時間溜走",
        "覺得現在再聯絡已經太晚，傳不出去",
        "怕對方回一句心涼了，不敢確認"
      ]
    },
    {
      "q": "對象先傳來一句「在幹嘛？」。你會？",
      "opts": [
        "不確定是不是和好訊號，小心翼翼地回",
        "怕太輕易就和好像輸了，只回很短",
        "一句道歉都沒有，還是很委屈",
        "拖了太久，隔很久才回"
      ]
    },
    {
      "q": "你正在寫和好訊息。你會？",
      "opts": [
        "一直在挑什麼時候傳最合適",
        "寫了又刪，腦補對方不回的畫面",
        "怕先傳顯得軟弱，按不下傳送",
        "寫著寫著變成在數落委屈，不像和好了"
      ]
    },
    {
      "q": "對象說：「我們談談吧。」你會？",
      "opts": [
        "也想談，但想先被承認當時有多委屈",
        "覺得現在不行，推到下次再說",
        "心臟一沉——怕是分手談話",
        "怕自己成唯一的錯方，先進入防禦模式"
      ]
    },
    {
      "q": "回想上次吵完又和好的時候。你會？",
      "opts": [
        "最後是自己沒先聯絡，這件事成了自尊殘留",
        "想起聯絡被拒的經歷，這次又害怕",
        "委屈沒解開就過去了，心裡越堆越多",
        "錯過時機，尷尬地糊弄過去了"
      ]
    },
    {
      "q": "對象一整天已讀你的訊息卻不回。你會？",
      "opts": [
        "開始慌——是不是討厭我了",
        "決定也一樣不理，切斷聯絡",
        "怕現在傳像在催，再多等一會兒",
        "這樣對待又讓你委屈，心門更關"
      ]
    },
    {
      "q": "紀念日快到了，卻還沒和好。你會？",
      "opts": [
        "知道紀念日前進該解開，卻抓不住開口時機",
        "委屈還在，根本沒心情慶祝",
        "怕紀念日問候沒反應，猶豫要不要傳",
        "等對方先來，拖成了自尊對峙"
      ]
    },
    {
      "q": "現在哪句話最接近你？",
      "opts": [
        "「想說，但委屈還沒消」",
        "「本來要傳，時機錯過了」",
        "「我先開口就像輸了，做不到」",
        "「怕聯絡了會被拒絕」"
      ]
    }
  ],
  "results": [
    {
      "title": "覺得先低頭就像輸了的人，自尊守護型",
      "typeName": "自尊守護型",
      "realReason": "先聯絡，感覺像在承認自己錯了",
      "shortDescription": "不是討厭和好。只是先伸手的那一刻像輸掉，所以你在硬撐。",
      "description": "誰先傳訊息像在記分，所以你等對方。自尊保護了你，但兩邊都這樣等，冷戰就會拖長。",
      "keywords": "先開口=輸·硬撐·誰先聯絡·較勁",
      "blockedMoment": "等對方訊息時，或明顯該輪到你傳時",
      "partnerSees": "很有主見，但難讀懂心思的人",
      "groupChatCharacter": "裝作不先聯絡，其實最等訊息的人",
      "strengths": "標準清晰，懂得尊重自己",
      "reasonDetail": "把和好解讀成「失敗」，表達心意就顯得像軟弱",
      "frequentSaying": "「該對方先聯絡吧」",
      "changeTips": "把先聯絡重新定義為選擇這段關係，而不是認輸\n用沒有輸贏的句子開頭，例如「不想分出誰贏，只想解開」\n平時就約定輪流做先開口的那個人",
      "oneLiner": "先伸出去的手不是軟弱，是勇氣。和好比贏更長久。",
      "shareLine": "吵完架卻無法和好的真正原因：自尊守護型 👑 據說覺得先低頭就像輸了哈哈 我的群組人設是「裝作不先聯絡其實最等」…你們出了啥？"
    },
    {
      "title": "怕聯絡了會被拒絕的人，拒絕恐懼型",
      "typeName": "拒絕恐懼型",
      "realReason": "腦海裡先浮現伸出手卻被冷拒的畫面",
      "shortDescription": "不是沒心。你只是提前感受到了還沒發生的拒絕。",
      "description": "打開輸入框又關掉，腦補不回的場景，所以傳不出去。想躲開傷害的心，連和好的機會也擋住了。",
      "keywords": "想像被拒·開了又關·已讀不回恐懼·迴避確認",
      "blockedMoment": "寫訊息時，或對方不回時",
      "partnerSees": "安靜、把心思藏起來的人",
      "groupChatCharacter": "寫了又刪大師，草稿箱富翁",
      "strengths": "珍惜關係，也很細心地察覺對方心情",
      "reasonDetail": "問題不在對方的反應，而在「被拒絕就扛不住」的自我預判",
      "frequentSaying": "「要是不回怎麼辦」",
      "changeTips": "把最壞的回覆和「就算那樣也能承受的部分」一起寫下來\n別寫長文，只傳一句：「想見你，想聊聊」\n就算回得晚，也把「已讀」當成已經傳到了",
      "oneLiner": "一行就夠。真正傳出去的瞬間，現實的回覆比想像的拒絕輕得多。",
      "shareLine": "吵完架卻無法和好的真正原因：拒絕恐懼型 🥶 據說怕傳出去被已讀不回… 我的群組人設是「草稿箱富翁」細思極恐 你們呢？",
      "counselingNote": "如果對被拒絕的恐懼不只在戀愛、在日常生活裡也很沉重，可以考慮和心理諮商師聊聊。"
    },
    {
      "title": "挑時機卻總錯過的人，時機錯過型",
      "typeName": "時機錯過型",
      "realReason": "等更好的時機，時間過去，聯絡反而更難",
      "shortDescription": "你有和好的心。只是「現在好像不太對」反覆出現，時間就溜走了。",
      "description": "一天變兩天、兩天變一週，沉默比當初的吵架更像一堵牆。完美時機不會來，越晚越難開口。",
      "keywords": "現在不行·拖延·已經太晚·掐時間",
      "blockedMoment": "挑什麼時候傳時，或又過了一天時",
      "partnerSees": "看起來有心，但行動偏慢的人",
      "groupChatCharacter": "「明天再聯絡」達人",
      "strengths": "會顧及對方狀況，謹慎地選時機",
      "reasonDetail": "表面上是在選時機，其實是在推遲開口的負擔",
      "frequentSaying": "「明天再傳吧」",
      "changeTips": "約定吵架後24小時內先傳一行\n就算晚了，也用「抱歉聯絡晚了」開頭\n把糾結時機的時間限制在10分鐘內",
      "oneLiner": "最好的時機就是現在。一句「我晚了」反而常能把門打開。",
      "shareLine": "吵完架卻無法和好的真正原因：時機錯過型 ⏳ 據說總在掐點然後錯過哈哈 我的群組人設是「明天再聯絡達人」好準…你們出了啥？"
    },
    {
      "title": "委屈一直沒被接住的人，委屈堆積型",
      "typeName": "委屈堆積型",
      "realReason": "沒被承認的委屈還在，和好的心不會先動",
      "shortDescription": "不是討厭和好。你的委屈還一次都沒有被真正接住。",
      "description": "能聯絡，可如果沒有道歉和理解，和好就像又在忍一次。委屈不說出口，同樣的架還會再吵。",
      "keywords": "想被看見·堆積的委屈·等道歉·心門關上",
      "blockedMoment": "收到沒有道歉的聯絡時，或想起委屈原因時",
      "partnerSees": "話不多、心裡卻堆很多的人",
      "groupChatCharacter": "安靜記帳的人",
      "strengths": "情感很深，對關係裡的尊重有清晰標準",
      "reasonDetail": "比起和好本身，更需要先被聽到「請理解我當時的感受」",
      "frequentSaying": "「你知道我有多委屈嗎？」",
      "changeTips": "和好訊息前，先用「事實一行+心情一行」寫下委屈點\n一次說完：「想和好。但這件事讓我很委屈」\n與其只等道歉，不如直接提出想聽到的那句話",
      "oneLiner": "委屈要說出來才會散。把和好和委屈放進同一句話裡。",
      "shareLine": "吵完架卻無法和好的真正原因：委屈堆積型 🌧️ 據說委屈一直沒解開… 我的群組人設是「安靜記帳的人」好扎心 你們呢？"
    }
  ]
};

const VI: Phase3CantMakeUpReasonLocaleBundle = {
  "meta": {
    "title": "Lý do thật sự khiến bạn không thể làm lành sau cãi nhau",
    "description": "Muốn nhắn trước nhưng tay không chịu gửi. 12 tình huống chỉ ra liệu tự ái, sợ bị từ chối, timing hay nỗi buồn còn đọng mới là điều níu tay bạn.",
    "tags": [
      "cãi nhau tình cảm",
      "trắc nghiệm tình yêu"
    ]
  },
  "questions": [
    {
      "q": "Sáng hôm sau cãi nhau, người yêu không nhắn. Bạn thì sao?",
      "opts": [
        "Đặt điện thoại xuống—nhắn trước như thừa nhận mình sai",
        "Mở khung chat rồi đóng, sợ gửi đi bị đọc không trả lời",
        "Cứ canh thời điểm đến trưa rồi tối",
        "Vẫn còn buồn, chẳng nghĩ ra lời nào để gửi"
      ]
    },
    {
      "q": "Ngày thứ hai lạnh nhạt, muốn làm lành hơn. Bạn thì sao?",
      "opts": [
        "Ngần ngại—duỗi tay ra có khi bị đáp lạnh",
        "Bảo hôm nay muộn rồi, mai gửi… lại trì thêm một ngày",
        "Đợi đối phương nhận ra trước mình đã tổn thương thế nào",
        "Nghĩ đến lúc này thì đến lượt họ nhắn trước"
      ]
    },
    {
      "q": "Bạn bảo: \"Cứ nhắn trước đi.\" Bạn thì sao?",
      "opts": [
        "Đúng đấy, nhưng cảm giác giờ gửi hơi kỳ",
        "Nhắn được—nhưng chưa được xin lỗi, vẫn khó chịu",
        "Sợ mình hạ mình trước rồi lần nào cũng phải thế",
        "Sợ gửi linh tinh làm chuyện tệ hơn"
      ]
    },
    {
      "q": "Người yêu đăng ảnh mạng xã hội như không có gì. Bạn thì sao?",
      "opts": [
        "Thấy họ vô tư càng buồn, lòng càng khép",
        "Mình khổ còn họ vui vẻ—nổi máu cố chấp",
        "Sợ bắt chuyện bị phớt lờ, không dám bấm like",
        "Cảm giác phản ứng cũng muộn rồi, lướt qua"
      ]
    },
    {
      "q": "Lạnh nhạt hơn một tuần. Bạn thì sao?",
      "opts": [
        "Cố giữ—mình mở lời trước thì tự ái bị tổn",
        "Để thời gian trôi mà chẳng nói nỗi buồn chất chứa",
        "Giờ liên lạc lại thấy quá muộn",
        "Tránh hỏi thăm, sợ họ bảo đã nguội rồi"
      ]
    },
    {
      "q": "Họ nhắn trước chỉ mỗi \"đang làm gì?\". Bạn thì sao?",
      "opts": [
        "Trả lời thận trọng—chưa chắc là tín hiệu làm lành",
        "Trả lời ngắn thôi, sợ dễ hòa như thua",
        "Vẫn buồn vì chẳng có lời xin lỗi",
        "Trả lời rất muộn vì đã để quá lâu"
      ]
    },
    {
      "q": "Bạn đang soạn tin làm lành. Bạn thì sao?",
      "opts": [
        "Cứ canh giờ nào gửi là đẹp nhất",
        "Viết rồi xóa, tưởng tượng cảnh họ không trả lời",
        "Không dám gửi—đi trước trông yếu đuối",
        "Viết lý do tổn thương rồi thành không còn là tin làm lành"
      ]
    },
    {
      "q": "Họ nói: \"Mình nói chuyện một chút đi.\" Bạn thì sao?",
      "opts": [
        "Cũng muốn nói—nhưng muốn được công nhận nỗi tổn thương trước",
        "Đẩy sang lần khác: giờ chưa ổn",
        "Tim trĩu xuống—sợ là chuyện chia tay",
        "Phòng thủ ngay, sợ mình thành người duy nhất sai"
      ]
    },
    {
      "q": "Nhớ lại lần làm lành sau trận cãi trước. Bạn thì sao?",
      "opts": [
        "Cuối cùng mình không nhắn trước—tự ái còn đọng",
        "Sợ lại vì từng nhắn rồi bị từ chối",
        "Nỗi buồn không tan, chỉ chất thêm",
        "Lỡ timing, chuyện trôi đi một cách khó xử"
      ]
    },
    {
      "q": "Họ đọc tin cả ngày mà không trả lời. Bạn thì sao?",
      "opts": [
        "Lo lắng—họ không thích mình nữa sao?",
        "Cũng cắt liên lạc để họ nếm thử",
        "Đợi thêm, sợ giờ nhắn như thúc",
        "Bị đối xử vậy lại buồn, cánh cửa lòng khép lại"
      ]
    },
    {
      "q": "Ngày kỷ niệm gần kề mà chưa làm lành. Bạn thì sao?",
      "opts": [
        "Biết phải gỡ trước ngày đó nhưng không tìm được lúc mở lời",
        "Vẫn buồn nên chẳng muốn chúc mừng",
        "Do dự gửi, sợ lời chúc không có phản hồi",
        "Đợi họ nhắn trước đến mức thành cuộc đấu tự ái"
      ]
    },
    {
      "q": "Câu nào gần bạn nhất lúc này?",
      "opts": [
        "\"Muốn nói nhưng vẫn còn buồn\"",
        "\"Định nhắn… rồi lỡ mất thời điểm\"",
        "\"Mình đi trước như thua, không làm nổi\"",
        "\"Sợ nhắn rồi bị từ chối\""
      ]
    }
  ],
  "results": [
    {
      "title": "Người thấy hạ mình trước như thua cuộc — Kiểu giữ tự ái",
      "typeName": "Kiểu giữ tự ái",
      "realReason": "Nhắn trước cảm giác như thừa nhận mình sai",
      "shortDescription": "Không phải bạn ghét làm lành. Chỉ là đưa tay trước trông như thua—nên bạn cố giữ.",
      "description": "Ai nhắn trước như bảng điểm, nên bạn đợi họ. Tự ái bảo vệ bạn—nhưng hai bên cùng đợi thì lạnh nhạt càng dài.",
      "keywords": "đi trước = thua·cố giữ·ai nhắn trước·cố chấp",
      "blockedMoment": "Khi đang đợi tin họ, hoặc rõ ràng đến lượt bạn gửi",
      "partnerSees": "Vững vàng nhưng khó đọc lòng",
      "groupChatCharacter": "Giả vờ không nhắn trước… trong khi đợi nhiều nhất",
      "strengths": "Chuẩn mực rõ và biết tôn trọng bản thân",
      "reasonDetail": "Bạn đọc làm lành như \"thua\", nên bày tỏ trở thành yếu đuối",
      "frequentSaying": "\"Họ phải nhắn trước chứ\"",
      "changeTips": "Định nghĩa lại nhắn trước là chọn mối quan hệ—không phải thua\nBắt đầu bằng câu không thắng thua như \"Chỉ muốn hai đứa ổn thôi\"\nThỏa thuận lúc bình thường sẽ luân phiên mở lời trước",
      "oneLiner": "Bàn tay đưa trước không phải yếu đuối—là dũng cảm. Làm lành bền hơn thắng.",
      "shareLine": "Lý do không làm lành được: Kiểu giữ tự ái 👑 Bảo hạ mình trước như thua á ha ha. Nhân vật group chat của mình là \"giả vờ không nhắn trước nhưng đợi nhất\"… bạn ra gì?"
    },
    {
      "title": "Người sợ nhắn rồi bị từ chối — Kiểu sợ từ chối",
      "typeName": "Kiểu sợ từ chối",
      "realReason": "Hình ảnh bị từ chối lạnh lùng hiện ra trước cả khi gửi",
      "shortDescription": "Không phải bạn vô tâm. Bạn đang cảm nhận trước nỗi từ chối chưa xảy ra.",
      "description": "Mở chat rồi đóng, tưởng tượng cảnh không được trả lời. Muốn tránh tổn thương lại chặn cả cơ hội làm lành.",
      "keywords": "tưởng tượng từ chối·mở rồi đóng chat·sợ đọc không trả lời·né kiểm tra",
      "blockedMoment": "Khi đang viết tin, hoặc khi họ im",
      "partnerSees": "Ít nói và giấu lòng",
      "groupChatCharacter": "Bậc thầy viết-xóa, đại gia thư mục nháp",
      "strengths": "Trân trọng quan hệ và tinh tế với cảm xúc đối phương",
      "reasonDetail": "Vấn đề không phải phản hồi của họ—mà là câu chuyện \"bị từ chối thì mình chịu không nổi\"",
      "frequentSaying": "\"Lỡ họ không trả lời thì sao\"",
      "changeTips": "Viết phản hồi tệ nhất và phần bạn vẫn chịu được cạnh đó\nĐừng viết dài—chỉ một dòng: \"Nhớ bạn. Nói chuyện được không?\"\nCoi tin đã đọc muộn cũng là đã tới nơi, dù chưa có trả lời",
      "oneLiner": "Một dòng là đủ. Câu trả lời thật nhẹ hơn nhiều so với nỗi từ chối trong đầu bạn.",
      "shareLine": "Lý do không làm lành được: Kiểu sợ từ chối 🥶 Sợ gửi rồi bị đọc không trả lời… Nhân vật group chat là \"đại gia thư mục nháp\" rùng mình 💀 bạn thì sao?",
      "counselingNote": "Nếu nỗi sợ bị từ chối nặng nề không chỉ trong tình yêu mà cả đời sống thường ngày, hãy cân nhắc trò chuyện với chuyên gia tư vấn tâm lý."
    },
    {
      "title": "Người canh thời điểm rồi lỡ — Kiểu lỡ timing",
      "typeName": "Kiểu lỡ timing",
      "realReason": "Đợi lúc đẹp hơn khiến thời gian trôi và nhắn càng khó",
      "shortDescription": "Bạn muốn làm lành. Chỉ là \"giờ chưa ổn\" lặp lại đến khi cơ hội trôi mất.",
      "description": "Một ngày thành hai, rồi một tuần—im lặng cao hơn cả trận cãi ban đầu. Timing hoàn hảo không tới, càng muộn càng khó mở lời.",
      "keywords": "chưa phải lúc·trì hoãn·quá muộn·canh giờ",
      "blockedMoment": "Khi chọn lúc nhắn, hoặc lại thêm một ngày trôi qua",
      "partnerSees": "Có vẻ quan tâm nhưng hành động chậm",
      "groupChatCharacter": "Cao thủ \"mai nhắn\"",
      "strengths": "Biết để ý hoàn cảnh đối phương và chọn lúc thận trọng",
      "reasonDetail": "Không phải đang chọn timing—mà đang trì hoãn gánh nặng mở lời",
      "frequentSaying": "\"Mai gửi vậy\"",
      "changeTips": "Đặt luật: một dòng trong 24 giờ sau khi cãi\nDù muộn cũng mở đầu bằng \"Xin lỗi nhắn chậm\"\nGiới hạn suy nghĩ timing trong 10 phút rồi gửi",
      "oneLiner": "Timing đẹp nhất là lúc này. Lời xin lỗi vì muộn thường mở cửa.",
      "shareLine": "Lý do không làm lành được: Kiểu lỡ timing ⏳ Bảo canh giờ rồi lỡ ha ha. Nhân vật group chat là \"cao thủ mai nhắn\" đúng bài… bạn ra gì?"
    },
    {
      "title": "Người nỗi buồn chưa được lắng nghe — Kiểu chất tổn thương",
      "typeName": "Kiểu chất tổn thương",
      "realReason": "Nỗi buồn chưa được thừa nhận vẫn còn, nên năng lượng làm lành chưa nhúc nhích",
      "shortDescription": "Không phải bạn ghét làm lành. Nỗi tổn thương của bạn vẫn chưa được tiếp nhận thật sự—dù chỉ một lần.",
      "description": "Nhắn được—nhưng thiếu xin lỗi và thấu hiểu thì làm lành như lại nuốt thêm lần nữa. Không nói ra, cùng một trận cãi sẽ quay lại.",
      "keywords": "muốn được thấy·nỗi buồn chất·đợi xin lỗi·cánh cửa khép",
      "blockedMoment": "Khi họ liên lạc không xin lỗi, hoặc lý do tổn thương ùa về",
      "partnerSees": "Ít nói bên ngoài, chất nhiều bên trong",
      "groupChatCharacter": "Người âm thầm ghi sổ cảm xúc",
      "strengths": "Cảm xúc sâu và chuẩn mực rõ về việc được tôn trọng",
      "reasonDetail": "Trước cả làm lành, bạn cần \"hãy hiểu mình đã cảm thấy thế nào\" được lắng nghe",
      "frequentSaying": "\"Anh/em có biết mình tổn thương thế nào không?\"",
      "changeTips": "Trước tin làm lành, viết một dòng sự thật + một dòng cảm xúc về điều làm tổn thương\nNói một lần: \"Muốn làm lành—và phần này làm mình buồn\"\nĐề nghị câu bạn muốn nghe thay vì chỉ đợi xin lỗi",
      "oneLiner": "Nỗi buồn tan khi được nói ra. Hãy để làm lành và tổn thương trong cùng một câu.",
      "shareLine": "Lý do không làm lành được: Kiểu chất tổn thương 🌧️ Bảo nỗi buồn chưa tan… Nhân vật group chat là \"âm thầm ghi sổ\" đau thật 💀 bạn thì sao?"
    }
  ]
};

const ID: Phase3CantMakeUpReasonLocaleBundle = {
  "meta": {
    "title": "Alasan Sebenarnya Kenapa Kamu Susah Berdamai Setelah Bertengkar",
    "description": "Pengin chat duluan tapi tangan bekuku. 12 situasi mengungkap apakah harga diri, takut ditolak, timing, atau sakit hati yang menumpuk yang menahan tanganmu.",
    "tags": [
      "pertengkaran pasangan",
      "tes hubungan"
    ]
  },
  "questions": [
    {
      "q": "Pagi setelah bertengkar, pasangan belum chat. Kamu…",
      "opts": [
        "Meletakkan HP—chat duluan terasa seperti mengakui aku yang salah",
        "Buka chat lalu tutup, takut dikirim lalu dibaca tanpa balasan",
        "Tunggu momen yang pas sampai siang jadi malam",
        "Masih sakit hati, jadi tidak kepikiran mau bilang apa"
      ]
    },
    {
      "q": "Hari kedua perang dingin. Pengin berdamai. Kamu…",
      "opts": [
        "Ragu—kalau mengulurkan tangan malah dibalas dingin",
        "Bilang ke diri sendiri hari ini sudah telat, besok saja… lagi",
        "Tunggu mereka sadar dulu betapa kamu tersakiti",
        "Merasa sekarang giliran mereka yang chat duluan"
      ]
    },
    {
      "q": "Teman bilang, \"Chat aja duluan.\" Kamu…",
      "opts": [
        "Benar sih, tapi timingnya masih terasa aneh",
        "Bisa chat—tapi belum dapat maaf, dan itu mengganjal",
        "Khawatir kalau menyerah dulu, nanti selalu begitu",
        "Takut kirim apa pun malah bikin lebih parah"
      ]
    },
    {
      "q": "Pasangan posting di sosmed seolah tidak terjadi apa-apa. Kamu…",
      "opts": [
        "Melihat mereka santai bikin makin tersinggung, hati semakin tertutup",
        "Jadi keras kepala—aku lagi susah, mereka kelihatan fine?",
        "Tidak berani like, takut diabaikan",
        "Merasa sudah terlambat bereaksi, jadi di-scroll saja"
      ]
    },
    {
      "q": "Perang dingin sudah lebih dari seminggu. Kamu…",
      "opts": [
        "Bertahan—kalau aku yang buka duluan, harga diri terasa terluka",
        "Biarkan waktu lewat tanpa pernah bilang apa yang menyakitkan",
        "Merasa sekarang sudah terlalu telat untuk chat",
        "Hindari memastikan, takut mereka bilang perasaannya sudah dingin"
      ]
    },
    {
      "q": "Mereka chat duluan cuma \"lagi apa?\". Kamu…",
      "opts": [
        "Balas hati-hati—belum yakin ini sinyal berdamai",
        "Balas singkat supaya tidak kelihatan menyerah terlalu mudah",
        "Masih sakit hati karena tidak ada kata maaf sama sekali",
        "Baru balas lama kemudian karena sudah terlalu lama"
      ]
    },
    {
      "q": "Kamu sedang menulis pesan berdamai. Kamu…",
      "opts": [
        "Terus cek jam untuk waktu kirim yang sempurna",
        "Ketik, hapus, bayangkan mereka tidak membalas",
        "Tidak bisa kirim—duluan terasa lemah",
        "Mulai menulis alasan tersinggung sampai tidak lagi seperti pesan berdamai"
      ]
    },
    {
      "q": "Mereka bilang, \"Kita perlu ngobrol.\" Kamu…",
      "opts": [
        "Juga mau ngobrol—tapi ingin sakit hatinya diakui dulu",
        "Tunda: sekarang belum, nanti saja",
        "Jantung turun—khawatir ini obrolan putus",
        "Langsung bertahan supaya tidak jadi satu-satunya yang salah"
      ]
    },
    {
      "q": "Kamu mengingat cara kalian berdamai setelah pertengkaran lalu. Kamu…",
      "opts": [
        "Masih tersisa harga diri karena tidak chat duluan",
        "Takut lagi karena pernah chat lalu ditolak",
        "Sadar sakit hati tidak pernah selesai dan malah menumpuk",
        "Ingat melewatkan momen dan biarkan berakhir canggung"
      ]
    },
    {
      "q": "Mereka baca chatmu seharian tanpa balas. Kamu…",
      "opts": [
        "Overthinking—apa aku sudah tidak disukai?",
        "Putus kontak juga supaya mereka merasakan",
        "Tunggu lebih lama supaya tidak terlihat mendesak",
        "Merasa tersinggung lagi dan menutup pintu hati sedikit lagi"
      ]
    },
    {
      "q": "Anniversary mendekat tapi kalian belum berdamai. Kamu…",
      "opts": [
        "Tahu harus diselesaikan sebelumnya—tapi tidak ketemu momennya",
        "Masih sakit hati, jadi tidak ada mood merayakan",
        "Ragu kirim apa pun, takut tidak ada respons",
        "Tunggu mereka chat duluan sampai jadi adu harga diri"
      ]
    },
    {
      "q": "Kalimat mana yang paling dekat denganmu sekarang?",
      "opts": [
        "\"Pengin ngomong, tapi masih sakit hati\"",
        "\"Mau chat… tapi kelewat waktunya\"",
        "\"Kalau aku duluan, terasa seperti kalah\"",
        "\"Takut ditolak kalau aku yang chat\""
      ]
    }
  ],
  "results": [
    {
      "title": "Yang merasa menyerah duluan sama dengan kalah — Tipe Penjaga Harga Diri",
      "typeName": "Tipe Penjaga Harga Diri",
      "realReason": "Chat duluan terasa seperti mengakui kamu yang salah",
      "shortDescription": "Bukan karena kamu benci berdamai. Mengulurkan tangan duluan terasa seperti kalah—jadi kamu bertahan.",
      "description": "Siapa yang chat duluan seperti papan skor, jadi kamu menunggu mereka. Harga diri melindungimu—tapi kalau kalian berdua menunggu sama, perang dingin berlarut.",
      "keywords": "duluan = kalah·bertahan·siapa chat duluan·keras kepala",
      "blockedMoment": "Saat menunggu chat mereka, atau jelas giliranmu mengirim",
      "partnerSees": "Teguh—tapi sulit dibaca",
      "groupChatCharacter": "Pura-pura tidak mau duluan… padahal paling menunggu",
      "strengths": "Standar jelas dan harga diri yang kokoh",
      "reasonDetail": "Kamu membaca berdamai sebagai \"kalah,\" jadi menunjukkan perhatian terasa seperti kelemahan",
      "frequentSaying": "\"Mereka yang harus chat duluan\"",
      "changeTips": "Redefinisikan chat duluan sebagai memilih hubungan—bukan kalah\nMulai dengan kalimat tanpa menang-kalah seperti \"Aku cuma mau kita baik-baik saja\"\nSepakati di saat tenang untuk bergiliran membuka duluan",
      "oneLiner": "Tangan yang diulurkan duluan bukan kelemahan—itu keberanian. Berdamai lebih awet daripada menang.",
      "shareLine": "Alasan susah berdamai: Tipe Penjaga Harga Diri 👑 Katanya menyerah duluan terasa kalah wkwk. Karakter grup chatku \"pura-pura tidak duluan tapi paling nunggu\"… kamu dapat apa?"
    },
    {
      "title": "Yang takut chat lalu ditolak — Tipe Takut Ditolak",
      "typeName": "Tipe Takut Ditolak",
      "realReason": "Bayangan penolakan dingin muncul sebelum kamu kirim apa pun",
      "shortDescription": "Bukan karena kamu tidak peduli. Kamu sudah merasakan penolakan yang belum terjadi.",
      "description": "Buka chat, tutup lagi, dan membayangkan tidak dibalas. Usaha menghindari luka justru menutup peluang berdamai.",
      "keywords": "membayangkan ditolak·buka-tutup chat·takut dibaca tanpa balas·hindari memastikan",
      "blockedMoment": "Saat menulis pesan, atau saat mereka diam",
      "partnerSees": "Pendiam—dan sulit tahu isinya",
      "groupChatCharacter": "Master ketik-hapus, jutawan folder draf",
      "strengths": "Menjaga hubungan dan peka terhadap perasaan mereka",
      "reasonDetail": "Masalahnya bukan balasan mereka—melainkan cerita bahwa kamu tidak sanggup ditolak",
      "frequentSaying": "\"Kalau tidak dibalas gimana?\"",
      "changeTips": "Tulis balasan terburuk dan bagian yang masih bisa kamu tanggung di sampingnya\nJangan esai panjang—kirim satu baris: \"Kangen. Bisa ngobrol?\"\nAnggap baca terlambat pun sebagai pesan yang sudah sampai, meski belum ada balasan",
      "oneLiner": "Satu baris sudah cukup. Jawaban nyata jauh lebih ringan dari penolakan di bayanganmu.",
      "shareLine": "Alasan susah berdamai: Tipe Takut Ditolak 🥶 Takut dikirim lalu dibaca tanpa balas… Karakter grup chatku \"jutawan folder draf\" 💀 kamu dapat apa?",
      "counselingNote": "Kalau takut ditolak terasa berat bukan hanya di pacaran tapi juga di kehidupan sehari-hari, coba bicarakan dengan konselor profesional."
    },
    {
      "title": "Yang menunggu momen sempurna—lalu kelewat — Tipe Miss Timing",
      "typeName": "Tipe Miss Timing",
      "realReason": "Menunggu momen lebih baik membuat waktu bertumpuk sampai chat makin sulit",
      "shortDescription": "Kamu memang mau berdamai. Hanya saja \"sekarang belum pas\" terus berulang sampai momennya hilang.",
      "description": "Sehari jadi dua, lalu seminggu—keheningan lebih tinggi dari pertengkaran awal. Timing sempurna tidak datang, dan semakin telat semakin sulit mulai.",
      "keywords": "belum sekarang·menunda·terlalu telat·menghitung waktu",
      "blockedMoment": "Saat memilih kapan chat, atau lagi-lagi sehari berlalu",
      "partnerSees": "Kelihatan peduli—tapi gerakannya lambat",
      "groupChatCharacter": "Juara \"nanti chat besok\"",
      "strengths": "Mempertimbangkan situasi mereka dan memilih dengan hati-hati",
      "reasonDetail": "Bukan benar-benar memilih timing—melainkan menunda beban untuk membuka bicara",
      "frequentSaying": "\"Besok aku kirim\"",
      "changeTips": "Buat aturan: satu baris dalam 24 jam setelah bertengkar\nMeski telat, mulai dengan \"Maaf baru chat\"\nBatasi overthinking timing maksimal 10 menit, lalu kirim",
      "oneLiner": "Timing terbaik adalah sekarang. Maaf karena terlambat sering justru membuka pintu.",
      "shareLine": "Alasan susah berdamai: Tipe Miss Timing ⏳ Katanya nunggu detik sempurna terus kelewat wkwk. Karakter grup chatku \"juara chat besok\" banget… kamu dapat apa?"
    },
    {
      "title": "Yang sakit hatinya belum pernah benar-benar didengar — Tipe Sakit Hati Menumpuk",
      "typeName": "Tipe Sakit Hati Menumpuk",
      "realReason": "Sakit hati yang belum diakui masih mengendap, jadi energi berdamai belum bergerak",
      "shortDescription": "Bukan karena kamu benci berdamai. Sakit hatimu belum pernah benar-benar diterima—bahkan sekali pun.",
      "description": "Bisa chat—tapi tanpa maaf atau pemahaman, berdamai terasa seperti menelan lagi. Kalau sakit hati tidak diucapkan, pertengkaran yang sama kembali.",
      "keywords": "ingin dilihat·sakit hati menumpuk·nunggu maaf·pintu hati tertutup",
      "blockedMoment": "Saat mereka chat tanpa maaf, atau alasan tersinggung muncul lagi",
      "partnerSees": "Pendiam di luar, menumpuk banyak di dalam",
      "groupChatCharacter": "Yang diam-diam mencatat buku besar perasaan",
      "strengths": "Perasaan dalam dan standar jelas soal dihormati dalam hubungan",
      "reasonDetail": "Sebelum berdamai itu sendiri, kamu butuh \"tolong pahami rasaku\" didengar dulu",
      "frequentSaying": "\"Kamu tahu aku seberapa tersakiti?\"",
      "changeTips": "Sebelum pesan berdamai, tulis satu baris fakta + satu baris perasaan tentang yang menyakitkan\nUcapkan sekaligus: \"Aku mau berdamai—dan bagian ini menyakitiku\"\nMinta kata yang kamu butuhkan alih-alih hanya menunggu permintaan maaf",
      "oneLiner": "Sakit hati reda kalau diucapkan. Taruh berdamai dan sakit hati dalam satu kalimat yang sama.",
      "shareLine": "Alasan susah berdamai: Tipe Sakit Hati Menumpuk 🌧️ Katanya sakit hatinya belum selesai… Karakter grup chatku \"diam-diam catat buku besar\" nyesek banget. kamu dapat apa?"
    }
  ]
};

export const PHASE3_CANT_MAKE_UP_REASON_I18N: Record<
  Phase3CantMakeUpReasonForeignLocale,
  Phase3CantMakeUpReasonLocaleBundle
> = {
  en: EN,
  ja: JA,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  vi: VI,
  id: ID,
};
