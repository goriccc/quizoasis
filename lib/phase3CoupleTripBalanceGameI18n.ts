/** Auto-built from scripts/_couple_trip_balance_i18n/*.json — do not hand-edit */
export type Phase3CoupleTripBalanceForeignLocale = 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

export interface Phase3CoupleTripBalanceResultText {
  title: string;
  shortDescription: string;
  quote: string;
  description: string;
  typeLabel: string;
  characteristics: string;
  livingStyle: string;
  strengths: string;
  caution: string;
  goodMatch: string;
  tips: string;
  oneLiner: string;
  shareLine: string;
}

export interface Phase3CoupleTripBalanceLocaleBundle {
  meta: { title: string; description: string; tags: string[] };
  questions: { q: string; opts: [string, string] }[];
  results: Phase3CoupleTripBalanceResultText[];
}

const EN: Phase3CoupleTripBalanceLocaleBundle = {
  "meta": {
    "title": "Balance Game — Couple Trip (Extreme)",
    "description": "A partner who gets lost on the trip vs one who books the wrong hotel. Twelve extreme rounds reveal your couple-travel style.",
    "tags": [
      "balance game",
      "couple travel",
      "would you rather",
      "dating quiz"
    ]
  },
  "questions": [
    {
      "q": "You're planning the trip. You…",
      "opts": [
        "Fill every hour—but freak out when the plan slips",
        "Book only the flight and stay—then maybe wander lost on the ground"
      ]
    },
    {
      "q": "Lunch on day one. You…",
      "opts": [
        "Walk into whatever looks good—but it might taste meh",
        "Hit a spot you researched—but the wait could be brutal"
      ]
    },
    {
      "q": "You pick how to get around. You…",
      "opts": [
        "Reserve every ride ahead—but changing plans is hard",
        "Grab taxis or buses on the fly—but time can stretch"
      ]
    },
    {
      "q": "The weather suddenly turns bad. You…",
      "opts": [
        "Ditch the plan and café-hop nearby—but skip what you booked",
        "Switch to your backup route—but feel rushed"
      ]
    },
    {
      "q": "Your partner suddenly wants a new stop. You…",
      "opts": [
        "Rewrite the day and go—but everything after piles up",
        "Stick to the schedule—but leave them disappointed"
      ]
    },
    {
      "q": "You set the daily rhythm. You…",
      "opts": [
        "Sleep in and take it slow—but feel like you missed sights",
        "Pack dawn to night—but crash by evening"
      ]
    },
    {
      "q": "You choose lodging. You…",
      "opts": [
        "Cheap place, just drop bags and stay out—but sleep is rough",
        "Nice stay and real rest—but less time outside"
      ]
    },
    {
      "q": "Afternoon in the destination. You…",
      "opts": [
        "Recharge at a café or the room—but they may get bored",
        "Stack tours and activities—but energy hits zero"
      ]
    },
    {
      "q": "Your partner suggests a new activity. You…",
      "opts": [
        "Say yes even if you're scared—but nerves can kill the vibe",
        "Pass and rest—but miss a shared memory"
      ]
    },
    {
      "q": "Last day of the trip. You…",
      "opts": [
        "Quiet walk and soft landing—but leave wishing you'd done more",
        "Fill every last slot—but the ride home is exhausting"
      ]
    },
    {
      "q": "Which partner is more bearable?",
      "opts": [
        "One who gets lost mid-trip",
        "One who botches the hotel booking"
      ]
    },
    {
      "q": "Which trip feels worse?",
      "opts": [
        "A minute-by-minute packed itinerary",
        "A completely plan-free, foggy trip"
      ]
    }
  ],
  "results": [
    {
      "title": "Packed days on a tight plan — Schedule Power Type",
      "shortDescription": "A designer who fills the trip with minute-level planning",
      "quote": "You design the trip ahead and chase rich routes packed with experiences.",
      "description": "Efficiency and steadiness are strengths—but slipped plans spike stress, and your partner can feel out of breath.",
      "typeLabel": "Schedule Power 📋",
      "characteristics": "design, efficiency, packed days, tight pace",
      "livingStyle": "Books and routes locked; every day is full",
      "strengths": "Few mishaps; lots of experiences, steadily delivered",
      "caution": "Little flexibility when things change; partner may burn out",
      "goodMatch": "Spontaneous Romantic (they add ease and romance)",
      "tips": "Leave 30 spare minutes in every block\nPick one \"optional skip\" spot each day\nSlot in one partner pick once a day",
      "oneLiner": "Solid prep is power. One blank cell lets the trip breathe.",
      "shareLine": "Balance Game — Couple Trip Extreme result: Schedule Power 📋 Apparently I pack trips minute by minute lol What'd you get? Lost mid-trip vs wrong hotel—your pick?"
    },
    {
      "title": "No fixed plan, follow the view — Spontaneous Romantic",
      "shortDescription": "A feel-first type who trusts mood and scenery",
      "quote": "You wander where your feet go and savor time slowly.",
      "description": "You create accidental magic—but thin prep can mean getting lost or missing things.",
      "typeLabel": "Spontaneous Romantic 🌅",
      "characteristics": "romance, ease, chance, slow living",
      "livingStyle": "Ducks into cafés that catch your eye; plans follow the day's mood",
      "strengths": "Turns unexpected moments into romance",
      "caution": "Vulnerable to booking flubs and getting lost",
      "goodMatch": "Schedule Power (they hold structure so you can enjoy)",
      "tips": "Lock lodging and transit at least\nKeep just three must-see backups\nAgree on a joke line when plans go sideways",
      "oneLiner": "Romance is the flavor of travel. A thin safety net makes it perfect.",
      "shareLine": "Balance Game — Couple Trip Extreme result: Spontaneous Romantic 🌅 Apparently I follow the scenery and take it slow… What'd you get? Lost mid-trip vs wrong hotel—your pick?"
    },
    {
      "title": "Prep for comfort, then rest hard — Cozy Recharge Type",
      "shortDescription": "A healing type who sets comfort first, then recharges",
      "quote": "You lock in a comfy stay and a loose route, then truly rest.",
      "description": "Low drain and steady—but an active partner may feel underwhelmed.",
      "typeLabel": "Cozy Recharge ☕",
      "characteristics": "healing, planned comfort, recharge, ease",
      "livingStyle": "Books a good stay and keeps the schedule soft",
      "strengths": "Less fatigue; easy time together",
      "caution": "Fewer new experiences; can feel samey",
      "goodMatch": "Active Explorer (they add spark and balance)",
      "tips": "Do one activity they want each day\nSplit rest and move roughly half-and-half\nPin one new place in advance",
      "oneLiner": "A recharging trip matters. One activity adds a memory.",
      "shareLine": "Balance Game — Couple Trip Extreme result: Cozy Recharge ☕ Apparently I set comfort first and rest hard lol What'd you get? Lost mid-trip vs wrong hotel—your pick?"
    },
    {
      "title": "Wander and explore — Active Explorer",
      "shortDescription": "An adventure type who moves free and hunts new places",
      "quote": "You move on impulse and chase new experiences.",
      "description": "The trip feels alive—but stamina, schedule, and budget can fray, and your partner may struggle to keep up.",
      "typeLabel": "Active Explorer 🧭",
      "characteristics": "adventure, improv, stamina, novelty",
      "livingStyle": "Goes where it looks fun; tries activities first, asks later",
      "strengths": "Drive that isn't afraid of the new",
      "caution": "Burnout, messy timing, partner fatigue",
      "goodMatch": "Cozy Recharge (they build the rest nest for balance)",
      "tips": "Guarantee them one rest window daily\nFront-load active stuff in the morning; free the afternoon\nAsk about their energy before deciding",
      "oneLiner": "Adventure is magnetic. Match their pace—and their rest.",
      "shareLine": "Balance Game — Couple Trip Extreme result: Active Explorer 🧭 Apparently I adventure wherever my feet go… What'd you get? Lost mid-trip vs wrong hotel—your pick?"
    }
  ]
};

const JA: Phase3CoupleTripBalanceLocaleBundle = {
  "meta": {
    "title": "バランスゲーム ― カップル旅行 極限編",
    "description": "旅行中に道に迷う恋人 vs 宿の予約を間違える恋人。12ラウンドの極限選択で、あなたのカップル旅行スタイルがわかります。",
    "tags": [
      "バランスゲーム",
      "カップル旅行",
      "二択",
      "恋愛診断"
    ]
  },
  "questions": [
    {
      "q": "旅行の予定を組む。わたしは？",
      "opts": [
        "時間ごとにびっしり組むが、崩れるとストレスが大きい",
        "宿と飛行機だけ押さえて出発するが、現地で迷子になりやすい"
      ]
    },
    {
      "q": "旅の初日のランチ。わたしは？",
      "opts": [
        "目についた店に入るが、味が微妙なこともある",
        "調べた店に行くが、待ち時間が長いことがある"
      ]
    },
    {
      "q": "移動手段を決める。わたしは？",
      "opts": [
        "交通を全部予約しておくが、変更が難しい",
        "その場でタクシーやバスを選ぶが、時間が延びやすい"
      ]
    },
    {
      "q": "旅先で急に天気が悪くなった。わたしは？",
      "opts": [
        "予定を捨てて近くのカフェで休むが、行きたい場所を逃す",
        "用意した代替コースへ移るが、焦りが出る"
      ]
    },
    {
      "q": "恋人が急に行きたい場所ができたと言う。わたしは？",
      "opts": [
        "予定を変えてついていくが、その後の予定が押す",
        "予定どおりに行こうと言うが、恋人が残念がる"
      ]
    },
    {
      "q": "一日のペースを決める。わたしは？",
      "opts": [
        "朝寝坊してのんびりするが、見どころを逃した気分になる",
        "朝から夜まで詰め込むが、夜にはヘトヘト"
      ]
    },
    {
      "q": "宿を選ぶ。わたしは？",
      "opts": [
        "安い宿に荷物だけ置いて外で過ごすが、寝床がつらい",
        "いい宿でしっかり休むが、外に出る時間が減る"
      ]
    },
    {
      "q": "旅先の午後。わたしは？",
      "opts": [
        "カフェや宿で充電するが、恋人が退屈するかも",
        "体験と観光を続けるが、体力が尽きる"
      ]
    },
    {
      "q": "恋人が新しいアクティビティを提案する。わたしは？",
      "opts": [
        "怖くても挑戦するが、怖さで気分が沈むこともある",
        "断って休むが、二人の思い出を逃すかも"
      ]
    },
    {
      "q": "旅の最終日。わたしは？",
      "opts": [
        "静かに散歩して締めるが、物足りなさも残る",
        "最後まで予定を埋めるが、帰り道がしんどい"
      ]
    },
    {
      "q": "どっちの恋人のほうがまだ耐えられる？",
      "opts": [
        "旅行中に道に迷う恋人",
        "宿の予約を間違える恋人"
      ]
    },
    {
      "q": "どっちの旅のほうがつらい？",
      "opts": [
        "分単位で詰まったハードな旅",
        "何の予定もない心細い旅"
      ]
    }
  ],
  "results": [
    {
      "title": "予定どおりにぎっしり動く人、計画しっかり派",
      "shortDescription": "分単位の予定で旅を充実させる設計タイプ",
      "quote": "あなたは旅を先に設計し、充実した動線で多くを体験しようとします。",
      "description": "効率と安心感が強みですが、予定が崩れるとストレスが大きく、恋人が息切れすることも。",
      "typeLabel": "計画しっかり派 📋",
      "characteristics": "設計・効率・充実・タイト",
      "livingStyle": "予約と動線を完璧に用意し、一日をぎっしり埋める",
      "strengths": "ミスが少なく、多くの体験を安定して作れる",
      "caution": "イレギュラーに弱く、恋人が疲れやすい",
      "goodMatch": "即興ロマン派（相手が余白とロマンを足してくれる）",
      "tips": "予定ごとに30分の余白を空ける\n一日に「行かなくてもいい場所」を一つ決める\n恋人の希望を一日一回はさむ",
      "oneLiner": "しっかり準備は大きな力。余白の一マスが旅を息づかせます",
      "shareLine": "バランスゲーム ― カップル旅行 極限編の結果：計画しっかり派 📋 分単位で詰めるタイプらしい… 君は何だった？ 道に迷う恋人 vs 宿予約ミスの恋人、どっち選ぶ？"
    },
    {
      "title": "決めごとなしで景色に身を任せる人、即興ロマン派",
      "shortDescription": "計画なしで雰囲気と景色に乗る感性タイプ",
      "quote": "あなたは足の向くまま景色を楽しみ、ゆったり時間を過ごします。",
      "description": "偶然のときめきを作れますが、準備不足で迷ったり逃したりすることも。",
      "typeLabel": "即興ロマン派 🌅",
      "characteristics": "ロマン・余裕・偶然・ゆるさ",
      "livingStyle": "気になるカフェに入り、予定はその日の気分で決める",
      "strengths": "想定外をロマンに変える余裕",
      "caution": "予約ミスや迷子など変数に弱い",
      "goodMatch": "計画しっかり派（相手が骨格を作り、自分が楽しめる）",
      "tips": "宿と交通だけは先に確定する\n行きたい場所は候補を三つだけ\nトラブル時に二人で笑えるセリフを決めておく",
      "oneLiner": "ロマンは旅の味。最低限の安全網があれば完璧です",
      "shareLine": "バランスゲーム ― カップル旅行 極限編の結果：即興ロマン派 🌅 景色に身を任せるタイプらしい… 君は何だった？ 道に迷う恋人 vs 宿予約ミスの恋人、どっち選ぶ？"
    },
    {
      "title": "先に快適を用意してしっかり休む人、くつろぎ充電派",
      "shortDescription": "宿と動線を楽に整えて充電するヒーリングタイプ",
      "quote": "あなたは快適な宿とゆとりある動線を先に整え、しっかり休む旅をします。",
      "description": "体力消耗が少なく安定していますが、アクティブな恋人は物足りなく感じるかも。",
      "typeLabel": "くつろぎ充電派 ☕",
      "characteristics": "ヒーリング・準備された快適さ・充電・余裕",
      "livingStyle": "良い宿を予約し、予定はゆるめに組む",
      "strengths": "疲れにくく、恋人とのんびりした時間を作れる",
      "caution": "新しい体験が減り、単調に感じることがある",
      "goodMatch": "アクティブ探検派（相手が活気を足してバランス）",
      "tips": "一日一つは恋人のやりたいことを一緒に\n休みと動きを半々にする\n新しい場所を一つは先に決めておく",
      "oneLiner": "充電する旅は大切。アクティビティ一つが思い出を足します",
      "shareLine": "バランスゲーム ― カップル旅行 極限編の結果：くつろぎ充電派 ☕ 快適セッティングで休むタイプらしい… 君は何だった？ 道に迷う恋人 vs 宿予約ミスの恋人、どっち選ぶ？"
    },
    {
      "title": "足の向くまま探検する人、アクティブ探検派",
      "shortDescription": "計画なしで動き、新しい場所を探す冒険タイプ",
      "quote": "あなたは即興で動き、新しい体験を探し歩く冒険家です。",
      "description": "旅は生き生きしますが、体力・予定・予算が乱れやすく、恋人がついていくのが大変なことも。",
      "typeLabel": "アクティブ探検派 🧭",
      "characteristics": "冒険・即興・体力・新しさ",
      "livingStyle": "気になる場所へ行き、アクティビティはまず挑戦",
      "strengths": "新しい体験を恐れない推進力",
      "caution": "体力切れ、予定の乱れ、恋人の疲労",
      "goodMatch": "くつろぎ充電派（相手が休息の拠点を作ってバランス）",
      "tips": "一日一回は恋人の休息時間を守る\nアクティブ予定は午前にまとめ、午後は空ける\n恋人の体調を聞いてから決める",
      "oneLiner": "冒険心は大きな魅力。相手のペースと休みも一緒に",
      "shareLine": "バランスゲーム ― カップル旅行 極限編の結果：アクティブ探検派 🧭 足の向くまま冒険するタイプらしい… 君は何だった？ 道に迷う恋人 vs 宿予約ミスの恋人、どっち選ぶ？"
    }
  ]
};

const ZH_CN: Phase3CoupleTripBalanceLocaleBundle = {
  "meta": {
    "title": "平衡游戏——情侣旅行极限篇",
    "description": "旅途中迷路的另一半 vs 订错住宿的另一半。12轮极限选择，测出你的情侣旅行风格。",
    "tags": [
      "平衡游戏",
      "情侣旅行",
      "二选一",
      "恋爱测试"
    ]
  },
  "questions": [
    {
      "q": "安排旅行行程时，我会？",
      "opts": [
        "按时间表排得满满的，但一乱就压力很大",
        "只订机票和住宿就出发，但到了当地容易迷路"
      ]
    },
    {
      "q": "旅行第一天的午饭，我会？",
      "opts": [
        "看哪家顺眼就进，但可能不好吃",
        "去提前查好的店，但可能要排很久"
      ]
    },
    {
      "q": "决定交通方式时，我会？",
      "opts": [
        "交通全预订好，但临时改很难",
        "现场叫车或坐公交，但容易拖时间"
      ]
    },
    {
      "q": "旅途中天气突然变差，我会？",
      "opts": [
        "放弃行程，去附近咖啡馆歇着，但错过原定景点",
        "走备选路线，但心里会急"
      ]
    },
    {
      "q": "另一半突然想去新地方，我会？",
      "opts": [
        "改行程跟着去，但后面全挤在一起",
        "坚持按原计划走，但对方会失落"
      ]
    },
    {
      "q": "安排一天节奏时，我会？",
      "opts": [
        "睡懒觉慢慢过，但觉得错过了风景",
        "从早排到晚，但晚上累瘫"
      ]
    },
    {
      "q": "选住宿时，我会？",
      "opts": [
        "便宜住处只放行李，人在外面，但睡得差",
        "选好住处好好休息，但出门时间变少"
      ]
    },
    {
      "q": "在目的地的下午，我会？",
      "opts": [
        "在咖啡馆或房间充电，但对方可能无聊",
        "继续体验和观光，但体力见底"
      ]
    },
    {
      "q": "另一半提议新活动，我会？",
      "opts": [
        "害怕也去挑战，但紧张可能坏心情",
        "拒绝去休息，但可能错过共同回忆"
      ]
    },
    {
      "q": "旅行最后一天，我会？",
      "opts": [
        "安静散步收尾，但会留遗憾",
        "排满到最后，但回程很累"
      ]
    },
    {
      "q": "哪个另一半相对更能忍？",
      "opts": [
        "旅途中迷路的另一半",
        "订错住宿的另一半"
      ]
    },
    {
      "q": "哪种旅行更难受？",
      "opts": [
        "精确到分钟的超满行程",
        "完全没计划、心里发慌的旅行"
      ]
    }
  ],
  "results": [
    {
      "title": "按计划把行程塞满的人，计划周密派",
      "shortDescription": "用分钟级行程把旅行填满的设计型",
      "quote": "你会提前设计旅行，用扎实路线体验尽量多的内容。",
      "description": "效率和安定感是优点，但行程一乱压力就大，另一半也可能跟不上。",
      "typeLabel": "计划周密派 📋",
      "characteristics": "设计，效率，充实，紧凑",
      "livingStyle": "预订和路线准备到位，一天排满",
      "strengths": "少出错，稳定创造许多体验",
      "caution": "应变弱，另一半容易累",
      "goodMatch": "即兴浪漫派（对方补上余裕与浪漫）",
      "tips": "每个时段留出30分钟缓冲\n每天定一个「可不去」的点\n每天塞进一次对方想去的地方",
      "oneLiner": "周密准备是力量。留一格空白，旅行才能喘气。",
      "shareLine": "平衡游戏——情侣旅行极限篇结果：计划周密派 📋 据说是按分钟排满行程的类型哈哈 你测出啥？迷路的另一半 vs 订错住宿，你选谁？"
    },
    {
      "title": "不设死计划、跟着风景走的人，即兴浪漫派",
      "shortDescription": "跟着气氛和风景走的感性型",
      "quote": "你随脚走、慢慢享受风景和时间。",
      "description": "能造出意外心动，但准备不足时容易迷路或错过。",
      "typeLabel": "即兴浪漫派 🌅",
      "characteristics": "浪漫，余裕，偶然，慢节奏",
      "livingStyle": "看见咖啡馆就进去，行程看当天心情",
      "strengths": "把意外变成浪漫的余裕",
      "caution": "怕订错房、迷路这类变数",
      "goodMatch": "计划周密派（对方搭好骨架，我尽情玩）",
      "tips": "至少先订好住宿和交通\n想去的地方只留三个候选\n出状况时准备一句能一起笑的话",
      "oneLiner": "浪漫是旅行的味道。加一层薄薄的安全网就完美。",
      "shareLine": "平衡游戏——情侣旅行极限篇结果：即兴浪漫派 🌅 据说是跟着风景慢慢走的类型… 你测出啥？迷路的另一半 vs 订错住宿，你选谁？"
    },
    {
      "title": "先把舒适安排好再好好休息的人，舒适充电派",
      "shortDescription": "先设好舒适，再充电的疗愈型",
      "quote": "你会先备好舒服住宿和宽松路线，再真正休息。",
      "description": "消耗小、很稳，但爱动的另一半可能觉得不过瘾。",
      "typeLabel": "舒适充电派 ☕",
      "characteristics": "疗愈，准备好的舒适，充电，余裕",
      "livingStyle": "订好住处，行程排得松",
      "strengths": "少疲惫，能和对方过松弛时光",
      "caution": "新体验变少，可能显得单调",
      "goodMatch": "活力探险派（对方带来活力、形成平衡）",
      "tips": "每天一起做一件对方想做的事\n休息和行动大致对半分\n提前锁定一个新地方",
      "oneLiner": "充电旅行很珍贵。多一个活动，就多一段回忆。",
      "shareLine": "平衡游戏——情侣旅行极限篇结果：舒适充电派 ☕ 据说是先布置舒适再猛休息的类型哈哈 你测出啥？迷路的另一半 vs 订错住宿，你选谁？"
    },
    {
      "title": "走到哪玩到哪的人，活力探险派",
      "shortDescription": "不按计划、四处找新地方的冒险型",
      "quote": "你即兴行动，四处寻找新体验。",
      "description": "旅行很鲜活，但体力、行程和预算容易乱，另一半可能跟不上。",
      "typeLabel": "活力探险派 🧭",
      "characteristics": "冒险，即兴，体力，新鲜感",
      "livingStyle": "往显眼的地方冲，活动先挑战再说",
      "strengths": "不怕新鲜事的推进力",
      "caution": "体力透支、行程混乱、对方疲劳",
      "goodMatch": "舒适充电派（对方提供休息港湾）",
      "tips": "每天保证对方一段休息\n高强度排在上午，下午留白\n先问对方状态再决定",
      "oneLiner": "冒险心很迷人。也要照顾对方的节奏和休息。",
      "shareLine": "平衡游戏——情侣旅行极限篇结果：活力探险派 🧭 据说是走到哪玩到哪的类型… 你测出啥？迷路的另一半 vs 订错住宿，你选谁？"
    }
  ]
};

const ZH_TW: Phase3CoupleTripBalanceLocaleBundle = {
  "meta": {
    "title": "平衡遊戲——情侶旅行極限篇",
    "description": "旅途中迷路的另一半 vs 訂錯住宿的另一半。12 輪極限選擇，測出你的情侶旅行風格。",
    "tags": [
      "平衡遊戲",
      "情侶旅行",
      "二選一",
      "戀愛測驗"
    ]
  },
  "questions": [
    {
      "q": "安排旅行行程時，我會？",
      "opts": [
        "按時間表排得滿滿的，但一亂就壓力很大",
        "只訂機票和住宿就出發，但到了當地容易迷路"
      ]
    },
    {
      "q": "旅行第一天的午飯，我會？",
      "opts": [
        "看哪家順眼就進，但可能不好吃",
        "去提前查好的店，但可能要排很久"
      ]
    },
    {
      "q": "決定交通方式時，我會？",
      "opts": [
        "交通全預訂好，但臨時改很難",
        "現場叫車或搭公車，但容易拖時間"
      ]
    },
    {
      "q": "旅途中天氣突然變差，我會？",
      "opts": [
        "放棄行程，去附近咖啡館歇著，但錯過原定景點",
        "走備選路線，但心裡會急"
      ]
    },
    {
      "q": "另一半突然想去新地方，我會？",
      "opts": [
        "改行程跟著去，但後面全擠在一起",
        "堅持按原計畫走，但對方會失落"
      ]
    },
    {
      "q": "安排一天節奏時，我會？",
      "opts": [
        "睡懶覺慢慢過，但覺得錯過了風景",
        "從早排到晚，但晚上累癱"
      ]
    },
    {
      "q": "選住宿時，我會？",
      "opts": [
        "便宜住處只放行李，人在外面，但睡得差",
        "選好住處好好休息，但出門時間變少"
      ]
    },
    {
      "q": "在目的地的下午，我會？",
      "opts": [
        "在咖啡館或房間充電，但對方可能無聊",
        "繼續體驗和觀光，但體力見底"
      ]
    },
    {
      "q": "另一半提議新活動，我會？",
      "opts": [
        "害怕也去挑戰，但緊張可能壞心情",
        "拒絕去休息，但可能錯過共同回憶"
      ]
    },
    {
      "q": "旅行最後一天，我會？",
      "opts": [
        "安靜散步收尾，但會留遺憾",
        "排滿到最後，但回程很累"
      ]
    },
    {
      "q": "哪個另一半相對更能忍？",
      "opts": [
        "旅途中迷路的另一半",
        "訂錯住宿的另一半"
      ]
    },
    {
      "q": "哪種旅行更難受？",
      "opts": [
        "精確到分鐘的超滿行程",
        "完全沒計畫、心裡發慌的旅行"
      ]
    }
  ],
  "results": [
    {
      "title": "按計畫把行程塞滿的人，計畫周密派",
      "shortDescription": "用分鐘級行程把旅行填滿的設計型",
      "quote": "你會提前設計旅行，用扎實路線體驗盡量多的內容。",
      "description": "效率和安定感是優點，但行程一亂壓力就大，另一半也可能跟不上。",
      "typeLabel": "計畫周密派 📋",
      "characteristics": "設計，效率，充實，緊湊",
      "livingStyle": "預訂和路線準備到位，一天排滿",
      "strengths": "少出錯，穩定創造許多體驗",
      "caution": "應變弱，另一半容易累",
      "goodMatch": "即興浪漫派（對方補上餘裕與浪漫）",
      "tips": "每個時段留出30分鐘緩衝\n每天定一個「可不去」的點\n每天塞進一次對方想去的地方",
      "oneLiner": "周密準備是力量。留一格空白，旅行才能喘氣。",
      "shareLine": "平衡遊戲——情侶旅行極限篇結果：計畫周密派 📋 據說是按分鐘排滿行程的類型哈哈 你測出啥？迷路的另一半 vs 訂錯住宿，你選誰？"
    },
    {
      "title": "不設死計畫、跟著風景走的人，即興浪漫派",
      "shortDescription": "跟著氣氛和風景走的感性型",
      "quote": "你隨腳走、慢慢享受風景和時間。",
      "description": "能造出意外心動，但準備不足時容易迷路或錯過。",
      "typeLabel": "即興浪漫派 🌅",
      "characteristics": "浪漫，餘裕，偶然，慢節奏",
      "livingStyle": "看見咖啡館就進去，行程看當天心情",
      "strengths": "把意外變成浪漫的餘裕",
      "caution": "怕訂錯房、迷路這類變數",
      "goodMatch": "計畫周密派（對方搭好骨架，我盡情玩）",
      "tips": "至少先訂好住宿和交通\n想去的地方只留三個候選\n出狀況時準備一句能一起笑的話",
      "oneLiner": "浪漫是旅行的味道。加一層薄薄的安全網就完美。",
      "shareLine": "平衡遊戲——情侶旅行極限篇結果：即興浪漫派 🌅 據說是跟著風景慢慢走的類型… 你測出啥？迷路的另一半 vs 訂錯住宿，你選誰？"
    },
    {
      "title": "先把舒適安排好再好好休息的人，舒適充電派",
      "shortDescription": "先設好舒適，再充電的療癒型",
      "quote": "你會先備好舒服住宿和寬鬆路線，再真正休息。",
      "description": "消耗小、很穩，但愛動的另一半可能覺得不過癮。",
      "typeLabel": "舒適充電派 ☕",
      "characteristics": "療癒，準備好的舒適，充電，餘裕",
      "livingStyle": "訂好住處，行程排得鬆",
      "strengths": "少疲憊，能和對方過鬆弛時光",
      "caution": "新體驗變少，可能顯得單調",
      "goodMatch": "活力探險派（對方帶來活力、形成平衡）",
      "tips": "每天一起做一件對方想做的事\n休息和行動大致對半分\n提前鎖定一個新地方",
      "oneLiner": "充電旅行很珍貴。多一個活動，就多一段回憶。",
      "shareLine": "平衡遊戲——情侶旅行極限篇結果：舒適充電派 ☕ 據說是先布置舒適再猛休息的類型哈哈 你測出啥？迷路的另一半 vs 訂錯住宿，你選誰？"
    },
    {
      "title": "走到哪玩到哪的人，活力探險派",
      "shortDescription": "不按計畫、四處找新地方的冒險型",
      "quote": "你即興行動，四處尋找新體驗。",
      "description": "旅行很鮮活，但體力、行程和預算容易亂，另一半可能跟不上。",
      "typeLabel": "活力探險派 🧭",
      "characteristics": "冒險，即興，體力，新鮮感",
      "livingStyle": "往顯眼的地方衝，活動先挑戰再說",
      "strengths": "不怕新鮮事的推進力",
      "caution": "體力透支、行程混亂、對方疲勞",
      "goodMatch": "舒適充電派（對方提供休息港灣）",
      "tips": "每天保證對方一段休息\n高強度排在上午，下午留白\n先問對方狀態再決定",
      "oneLiner": "冒險心很迷人。也要照顧對方的節奏和休息。",
      "shareLine": "平衡遊戲——情侶旅行極限篇結果：活力探險派 🧭 據說是走到哪玩到哪的類型… 你測出啥？迷路的另一半 vs 訂錯住宿，你選誰？"
    }
  ]
};

const VI: Phase3CoupleTripBalanceLocaleBundle = {
  "meta": {
    "title": "Trò cân bằng — Du lịch cặp đôi (cực hạn)",
    "description": "Người yêu lạc đường giữa chuyến đi vs người đặt nhầm chỗ ở. 12 vòng chọn cực hạn hé lộ phong cách du lịch cặp đôi của bạn.",
    "tags": [
      "trò cân bằng",
      "du lịch cặp đôi",
      "chọn một",
      "trắc nghiệm tình yêu"
    ]
  },
  "questions": [
    {
      "q": "Lên lịch chuyến đi. Bạn…",
      "opts": [
        "Xếp sát từng khung giờ — nhưng lệch lịch là stress nặng",
        "Chỉ chốt vé máy bay và chỗ ở rồi đi — nhưng dễ lạc ở địa phương"
      ]
    },
    {
      "q": "Bữa trưa ngày đầu. Bạn…",
      "opts": [
        "Vào quán mắt thấy — nhưng có thể dở",
        "Đến chỗ đã research — nhưng xếp hàng có thể dài"
      ]
    },
    {
      "q": "Chọn phương tiện di chuyển. Bạn…",
      "opts": [
        "Đặt trước hết các chặng — nhưng đổi lịch khó",
        "Bắt taxi/bus lúc đó — nhưng dễ mất thời gian"
      ]
    },
    {
      "q": "Thời tiết đột nhiên xấu. Bạn…",
      "opts": [
        "Bỏ lịch, vào quán cà phê gần đó nghỉ — nhưng bỏ chỗ đã định",
        "Sang lộ trình dự phòng — nhưng thấy gấp gáp"
      ]
    },
    {
      "q": "Người yêu bỗng muốn thêm điểm đến. Bạn…",
      "opts": [
        "Đổi lịch theo — nhưng các phần sau dồn ứ",
        "Giữ đúng lịch — nhưng người yêu tiếc"
      ]
    },
    {
      "q": "Nhịp một ngày. Bạn…",
      "opts": [
        "Ngủ nướng, thong thả — nhưng cảm giác bỏ lỡ cảnh đẹp",
        "Nhồi từ sáng tới tối — nhưng tối kiệt sức"
      ]
    },
    {
      "q": "Chọn chỗ ở. Bạn…",
      "opts": [
        "Chỗ rẻ chỉ để đồ, ở ngoài cả ngày — nhưng ngủ kém",
        "Chỗ đẹp để nghỉ đã đời — nhưng ít thời gian ra ngoài"
      ]
    },
    {
      "q": "Buổi chiều ở điểm đến. Bạn…",
      "opts": [
        "Sạc pin ở quán/phòng — nhưng người yêu có thể chán",
        "Tiếp trải nghiệm & tham quan — nhưng hết năng lượng"
      ]
    },
    {
      "q": "Người yêu gợi ý hoạt động mới. Bạn…",
      "opts": [
        "Sợ vẫn thử — nhưng hồi hộp có thể làm dịu tâm trạng",
        "Từ chối để nghỉ — nhưng có thể mất kỷ niệm chung"
      ]
    },
    {
      "q": "Ngày cuối chuyến đi. Bạn…",
      "opts": [
        "Đi bộ nhẹ khép lại — nhưng vẫn tiếc",
        "Nhồi đến phút cuối — nhưng đường về mệt"
      ]
    },
    {
      "q": "Người yêu nào chịu được hơn?",
      "opts": [
        "Người lạc đường giữa chuyến",
        "Người đặt nhầm chỗ ở"
      ]
    },
    {
      "q": "Chuyến nào khó chịu hơn?",
      "opts": [
        "Lịch kín từng phút",
        "Hoàn toàn không kế hoạch, trống trải"
      ]
    }
  ],
  "results": [
    {
      "title": "Người nhồi lịch sát — Kiểu kế hoạch chắc",
      "shortDescription": "Thiết kế chuyến đi bằng lịch từng phút",
      "quote": "Bạn lên kế hoạch trước và muốn trải nghiệm nhiều qua lộ trình dày.",
      "description": "Hiệu quả và ổn định là điểm mạnh — nhưng lệch lịch thì stress lớn, người yêu dễ hụt hơi.",
      "typeLabel": "Kế hoạch chắc 📋",
      "characteristics": "thiết kế, hiệu quả, dày đặc, gắt gao",
      "livingStyle": "Đặt chỗ và lộ trình hoàn hảo, ngày nào cũng kín",
      "strengths": "Ít sai sót, tạo nhiều trải nghiệm ổn định",
      "caution": "Ít linh hoạt khi có biến; người yêu dễ mệt",
      "goodMatch": "Lãng mạn ngẫu hứng (họ thêm khoảng trống và lãng mạn)",
      "tips": "Chừa 30 phút trống mỗi khung\nMỗi ngày chọn một chỗ “không bắt buộc”\nMỗi ngày xen một nơi người yêu muốn",
      "oneLiner": "Chuẩn bị kỹ là sức mạnh. Một ô trống giúp chuyến đi thở.",
      "shareLine": "Trò cân bằng — Du lịch cặp đôi cực hạn: Kế hoạch chắc 📋 Nghe bảo mình nhồi lịch từng phút vậy đó lol Bạn ra gì? Lạc đường vs đặt nhầm KS — chọn ai?"
    },
    {
      "title": "Không cố định, theo cảnh — Kiểu lãng mạn ngẫu hứng",
      "shortDescription": "Theo cảm xúc và phong cảnh",
      "quote": "Bạn đi theo chân và tận hưởng thời gian thong thả.",
      "description": "Tạo được bất ngờ dễ thương — nhưng thiếu chuẩn bị dễ lạc hoặc bỏ lỡ.",
      "typeLabel": "Lãng mạn ngẫu hứng 🌅",
      "characteristics": "lãng mạn, thong thả, tình cờ, chậm rãi",
      "livingStyle": "Vào quán cà phê bắt mắt; lịch theo mood hôm đó",
      "strengths": "Biến bất ngờ thành lãng mạn",
      "caution": "Yếu trước đặt nhầm phòng, lạc đường",
      "goodMatch": "Kế hoạch chắc (họ dựng khung để bạn tận hưởng)",
      "tips": "Ít nhất chốt chỗ ở và giao thông\nChỉ giữ ba điểm muốn đến\nChuẩn bị câu đùa khi có biến để cười cùng nhau",
      "oneLiner": "Lãng mạn là vị của chuyến đi. Lưới an toàn mỏng là đủ hoàn hảo.",
      "shareLine": "Trò cân bằng — Du lịch cặp đôi cực hạn: Lãng mạn ngẫu hứng 🌅 Nghe bảo mình theo cảnh mà đi chậm… Bạn ra gì? Lạc đường vs đặt nhầm KS — chọn ai?"
    },
    {
      "title": "Chuẩn bị sẵn sự thoải mái rồi nghỉ — Kiểu sạc pin ấm áp",
      "shortDescription": "Sắp chỗ nghỉ dễ chịu trước rồi nạp năng lượng",
      "quote": "Bạn chuẩn bị chỗ ở tiện nghi và lộ trình rộng rồi thật sự nghỉ.",
      "description": "Ít hao sức, ổn định — nhưng người yêu năng động có thể thấy thiếu.",
      "typeLabel": "Sạc pin ấm áp ☕",
      "characteristics": "chữa lành, thoải mái đã chuẩn bị, sạc pin, thong thả",
      "livingStyle": "Đặt chỗ đẹp, lịch xếp lỏng",
      "strengths": "Ít mệt; thời gian thư thái bên nhau",
      "caution": "Ít trải nghiệm mới; dễ đơn điệu",
      "goodMatch": "Thám hiểm năng động (họ thêm sống động)",
      "tips": "Mỗi ngày làm một việc người yêu muốn\nChia nghỉ/đi khoảng nửa-nửa\nChốt trước một chỗ mới",
      "oneLiner": "Chuyến đi sạc pin rất quý. Một hoạt động thêm một kỷ niệm.",
      "shareLine": "Trò cân bằng — Du lịch cặp đôi cực hạn: Sạc pin ấm áp ☕ Nghe bảo mình set thoải mái rồi nghỉ đã đời lol Bạn ra gì? Lạc đường vs đặt nhầm KS — chọn ai?"
    },
    {
      "title": "Đi đâu khám phá đó — Kiểu thám hiểm năng động",
      "shortDescription": "Không kế hoạch, săn chỗ mới",
      "quote": "Bạn hành động ngẫu hứng và tìm trải nghiệm mới.",
      "description": "Chuyến đi sống động — nhưng thể lực, lịch và ngân sách dễ loạn, người yêu có thể đuổi không kịp.",
      "typeLabel": "Thám hiểm năng động 🧭",
      "characteristics": "phiêu lưu, ngẫu hứng, thể lực, mới mẻ",
      "livingStyle": "Tới chỗ nổi bật; hoạt động thì cứ thử trước",
      "strengths": "Động lực không sợ cái mới",
      "caution": "Kiệt sức, lịch loạn, người yêu mệt",
      "goodMatch": "Sạc pin ấm áp (họ tạo chỗ nghỉ để cân bằng)",
      "tips": "Mỗi ngày đảm bảo một khung nghỉ cho họ\nDồn hoạt động mạnh vào sáng, chiều để trống\nHỏi sức khỏe họ trước khi quyết",
      "oneLiner": "Tinh thần phiêu lưu rất hút. Hãy giữ nhịp và nghỉ của người yêu.",
      "shareLine": "Trò cân bằng — Du lịch cặp đôi cực hạn: Thám hiểm năng động 🧭 Nghe bảo mình phiêu theo chân… Bạn ra gì? Lạc đường vs đặt nhầm KS — chọn ai?"
    }
  ]
};

const ID: Phase3CoupleTripBalanceLocaleBundle = {
  "meta": {
    "title": "Permainan Seimbang — Liburan Couple (Ekstrem)",
    "description": "Pacar yang nyasar di tengah trip vs yang salah booking hotel. 12 ronde pilihan ekstrem mengungkap gaya traveling couple-mu.",
    "tags": [
      "permainan seimbang",
      "liburan couple",
      "pilih satu",
      "kuis cinta"
    ]
  },
  "questions": [
    {
      "q": "Merencanakan jadwal trip. Kamu…",
      "opts": [
        "Mengisi jam demi jam—tapi panik besar kalau jadwal buyar",
        "Cuma booking pesawat & penginapan lalu berangkat—tapi bisa nyasar di lokasi"
      ]
    },
    {
      "q": "Makan siang hari pertama. Kamu…",
      "opts": [
        "Masuk ke tempat yang terlihat menarik—tapi rasanya bisa biasa saja",
        "Ke tempat yang sudah di-research—tapi antreannya bisa panjang"
      ]
    },
    {
      "q": "Memilih transportasi. Kamu…",
      "opts": [
        "Reservasi semua perjalanan dulu—tapi susah diubah",
        "Ambil taksi/bus saat itu juga—tapi waktu bisa molor"
      ]
    },
    {
      "q": "Cuaca tiba-tiba buruk. Kamu…",
      "opts": [
        "Buang rencana, nongkrong di kafe dekat situ—tapi melewatkan yang dijadwalkan",
        "Pindah ke rute cadangan—tapi merasa terburu-buru"
      ]
    },
    {
      "q": "Pacar tiba-tiba ingin tempat baru. Kamu…",
      "opts": [
        "Ubah jadwal dan ikut—tapi sesi berikutnya numpuk",
        "Tetap ikut jadwal—tapi pacar kecewa"
      ]
    },
    {
      "q": "Menentukan ritme sehari. Kamu…",
      "opts": [
        "Bangun siang dan santai—tapi merasa melewatkan spot",
        "Padat dari pagi sampai malam—tapi malamnya ambruk"
      ]
    },
    {
      "q": "Memilih penginapan. Kamu…",
      "opts": [
        "Yang murah hanya untuk taruh barang, sisanya di luar—tapi tidur kurang nyaman",
        "Yang nyaman biar benar-benar istirahat—tapi waktu keluar berkurang"
      ]
    },
    {
      "q": "Sore di destinasi. Kamu…",
      "opts": [
        "Charge di kafe/kamar—tapi pacar bisa bosan",
        "Lanjut aktivitas & wisata—tapi tenaga habis"
      ]
    },
    {
      "q": "Pacar mengusulkan aktivitas baru. Kamu…",
      "opts": [
        "Takut tetap coba—tapi gugup bisa merusak mood",
        "Tolak dan istirahat—tapi bisa kehilangan kenangan bareng"
      ]
    },
    {
      "q": "Hari terakhir trip. Kamu…",
      "opts": [
        "Jalan santai menutup perjalanan—tapi ada rasa kurang",
        "Isi sampai slot terakhir—tapi perjalanan pulang melelahkan"
      ]
    },
    {
      "q": "Pacar mana yang lebih tertahankan?",
      "opts": [
        "Yang nyasar di tengah trip",
        "Yang salah booking hotel"
      ]
    },
    {
      "q": "Trip mana yang lebih tidak nyaman?",
      "opts": [
        "Jadwal padat sampai per menit",
        "Tanpa rencana sama sekali, bikin bingung"
      ]
    }
  ],
  "results": [
    {
      "title": "Yang mengisi hari dengan jadwal rapat — Tipe Rencana Ketat",
      "shortDescription": "Desainer yang mengisi trip dengan rencana per menit",
      "quote": "Kamu merancang trip lebih dulu dan mengejar rute padat penuh pengalaman.",
      "description": "Efisiensi dan rasa aman jadi kekuatan—tapi jadwal buyar bikin stres, dan pacar bisa kehabisan napas.",
      "typeLabel": "Rencana Ketat 📋",
      "characteristics": "desain, efisiensi, padat, ketat",
      "livingStyle": "Reservasi & rute disiapkan sempurna; hari penuh",
      "strengths": "Sedikit salah; banyak pengalaman tersaji stabil",
      "caution": "Kurang fleksibel saat ada perubahan; pacar mudah lelah",
      "goodMatch": "Romantis Spontan (mereka menambah ruang dan romansa)",
      "tips": "Sisakan 30 menit kosong tiap blok\nTentukan satu spot “boleh dilewati” tiap hari\nSelipkan sekali sehari tempat pilihan pacar",
      "oneLiner": "Persiapan matang itu kekuatan. Satu sel kosong membuat trip bernapas.",
      "shareLine": "Permainan Seimbang — Liburan Couple Ekstrem: Rencana Ketat 📋 Katanya aku tipe yang padatin menit demi menit wkwk Kamu dapat apa? Nyasar vs salah booking—pilih mana?"
    },
    {
      "title": "Tanpa patokan, ikut pemandangan — Tipe Romantis Spontan",
      "shortDescription": "Tipe rasa yang mengikuti mood dan pemandangan",
      "quote": "Kamu jalan ke mana kaki membawa dan menikmati waktu pelan-pelan.",
      "description": "Bisa menciptakan kejutan manis—tapi persiapan tipis bikin mudah nyasar atau melewatkan hal.",
      "typeLabel": "Romantis Spontan 🌅",
      "characteristics": "romansa, santai, kebetulan, pelan",
      "livingStyle": "Masuk kafe yang menarik; rencana mengikuti mood hari itu",
      "strengths": "Mengubah kejutan jadi romansa",
      "caution": "Rentan salah booking & nyasar",
      "goodMatch": "Rencana Ketat (mereka pegang struktur supaya kamu bebas menikmati)",
      "tips": "Minimal kunci penginapan & transport\nSimpan hanya tiga kandidat tempat\nSiapkan kalimat guyon saat ada masalah supaya bisa ketawa bareng",
      "oneLiner": "Romansa adalah rasa traveling. Jaring pengaman tipis sudah cukup sempurna.",
      "shareLine": "Permainan Seimbang — Liburan Couple Ekstrem: Romantis Spontan 🌅 Katanya aku ikut pemandangan pelan-pelan… Kamu dapat apa? Nyasar vs salah booking—pilih mana?"
    },
    {
      "title": "Siapkan kenyamanan dulu, lalu istirahat — Tipe Isi Daya Nyaman",
      "shortDescription": "Tipe healing yang set nyaman dulu lalu recharge",
      "quote": "Kamu menyiapkan penginapan nyaman dan rute longgar dulu, lalu benar-benar istirahat.",
      "description": "Hemat tenaga dan stabil—tapi pacar yang aktif bisa merasa kurang.",
      "typeLabel": "Isi Daya Nyaman ☕",
      "characteristics": "healing, kenyamanan tersiap, recharge, santai",
      "livingStyle": "Booking penginapan bagus; jadwal longgar",
      "strengths": "Sedikit lelah; waktu rileks bareng pacar",
      "caution": "Pengalaman baru berkurang; bisa terasa monoton",
      "goodMatch": "Penjelajah Aktif (mereka menambah energi)",
      "tips": "Setiap hari lakukan satu aktivitas pilihan pacar\nBagi istirahat dan gerak kurang lebih setengah-setengah\nTandai satu tempat baru di muka",
      "oneLiner": "Trip yang mengisi daya itu berharga. Satu aktivitas menambah kenangan.",
      "shareLine": "Permainan Seimbang — Liburan Couple Ekstrem: Isi Daya Nyaman ☕ Katanya aku set nyaman dulu lalu istirahat total wkwk Kamu dapat apa? Nyasar vs salah booking—pilih mana?"
    },
    {
      "title": "Jelajah ke mana kaki melangkah — Tipe Penjelajah Aktif",
      "shortDescription": "Tanpa rencana, mencari tempat baru",
      "quote": "Kamu bergerak spontan dan mengejar pengalaman baru.",
      "description": "Trip terasa hidup—tapi stamina, jadwal, dan budget mudah berantakan, dan pacar bisa kewalahan mengikuti.",
      "typeLabel": "Penjelajah Aktif 🧭",
      "characteristics": "petualangan, spontan, stamina, kebaruan",
      "livingStyle": "Ke tempat yang mencolok; aktivitas dicoba dulu",
      "strengths": "Dorongan yang tidak takut hal baru",
      "caution": "Kehabisan tenaga, jadwal kacau, pacar kelelahan",
      "goodMatch": "Isi Daya Nyaman (mereka sediakan nest istirahat)",
      "tips": "Jamin satu jendela istirahat untuk mereka tiap hari\nPadatkan yang aktif di pagi; sore dikosongkan\nTanya kondisi mereka dulu sebelum memutuskan",
      "oneLiner": "Jiwa petualang itu menarik. Jaga juga tempo dan istirahat pacar.",
      "shareLine": "Permainan Seimbang — Liburan Couple Ekstrem: Penjelajah Aktif 🧭 Katanya aku petualang ikut kaki… Kamu dapat apa? Nyasar vs salah booking—pilih mana?"
    }
  ]
};

export const PHASE3_COUPLE_TRIP_BALANCE_I18N: Record<Phase3CoupleTripBalanceForeignLocale, Phase3CoupleTripBalanceLocaleBundle> = {
  en: EN,
  ja: JA,
  'zh-CN': ZH_CN,
  'zh-TW': ZH_TW,
  vi: VI,
  id: ID,
};
