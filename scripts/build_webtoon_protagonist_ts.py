"""Generate lib/phase3WebtoonProtagonistData.ts with full 7-language localeMap() content."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나는 어떤 웹툰 주인공? — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 · 7개 로케일 */

export type Phase3WebtoonProtagonistLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3WebtoonProtagonistLocaleKey, string>): Record<Phase3WebtoonProtagonistLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3WebtoonProtagonistLocaleKey, string>, score: number): { text: Record<Phase3WebtoonProtagonistLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3WebtoonProtagonistQuestion {
  id: number;
  question: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  options: { text: Record<Phase3WebtoonProtagonistLocaleKey, string>; score: number }[];
}

export interface Phase3WebtoonProtagonistResult {
  type: string;
  emoji: string;
  title: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  shortDescription: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  description: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  protagonistType: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  appearingGenre: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  narrativePattern: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  strength: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  charmPoint: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  shiningScene: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  recommendedGenre: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  oneLiner: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  certificationPhrase: Record<Phase3WebtoonProtagonistLocaleKey, string>;
  shareLine: Record<Phase3WebtoonProtagonistLocaleKey, string>;
}

export function calculatePhase3WebtoonProtagonistResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3WebtoonProtagonistQuestions: Phase3WebtoonProtagonistQuestion[] = [
"""


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def loc_key(loc: str) -> str:
    return f"'{loc}'" if loc in ("zh-CN", "zh-TW") else loc


def fmt_ml(d: dict[str, str], indent: str = "      ") -> str:
    lines = [f"{indent}ko: '{esc(d['ko'])}',"]
    for loc in LOCALES[1:]:
        lines.append(f"{indent}{loc_key(loc)}: '{esc(d[loc])}',")
    return "localeMap({\n" + "\n".join(lines) + "\n    })"


def fmt_question(qid: int, q: dict[str, str], opts: list[tuple[dict[str, str], int]]) -> str:
    parts = [
        "  {",
        f"    id: {qid},",
        f"    question: {fmt_ml(q)},",
        "    options: [",
    ]
    for o, score in opts:
        parts.append(f"      opt({fmt_ml(o, '        ')}, {score}),")
    parts.append("    ],")
    parts.append("  },")
    return "\n".join(parts)


def fmt_result(r: dict) -> str:
    ml_fields = [
        "title",
        "shortDescription",
        "description",
        "protagonistType",
        "appearingGenre",
        "narrativePattern",
        "strength",
        "charmPoint",
        "shiningScene",
        "recommendedGenre",
        "oneLiner",
        "certificationPhrase",
        "shareLine",
    ]
    parts = ["  {"]
    parts.append(f'    type: "{r["type"]}",')
    parts.append(f'    emoji: "{r["emoji"]}",')
    for field in ml_fields:
        parts.append(f"    {field}: {fmt_ml(r[field])},")
    parts.append("  },")
    return "\n".join(parts)


def M(**kwargs: str) -> dict[str, str]:
    return {loc: kwargs[loc] for loc in LOCALES}


def q(question: dict[str, str], options: list[tuple[dict[str, str], int]]) -> dict:
    return {
        "question": question,
        "options": [{"text": o, "score": s} for o, s in options],
    }


def r(type_: str, emoji: str, **fields: dict[str, str]) -> dict:
    return {"type": type_, "emoji": emoji, **fields}


EMPTY = M(ko="", en="", ja="", **{"zh-CN": "", "zh-TW": ""}, vi="", id="")


_gen_path = Path(__file__).resolve().parent / "gen_webtoon_protagonist_data.py"
_gen_ns: dict = {}
exec(_gen_path.read_text(encoding="utf-8").split("\ndef esc")[0], _gen_ns)
KO_QUESTIONS = _gen_ns["QUESTIONS"]
KO_RESULTS = _gen_ns["RESULTS"]


def _ko_q(idx: int) -> str:
    return KO_QUESTIONS[idx]["q"]


def _ko_o(idx: int, opt_idx: int) -> str:
    return KO_QUESTIONS[idx]["opts"][opt_idx]


def _ko_r(type_idx: int, field: str) -> str:
    key_map = {
        "shortDescription": "short",
        "description": "desc",
        "certificationPhrase": "certification",
        "shareLine": "share",
    }
    k = key_map.get(field, field)
    return KO_RESULTS[type_idx][k]


QUESTIONS = [
    q(
        M(
            ko=_ko_q(0),
            en="One day you suddenly gain a special ability. I would…",
            ja="ある日突然、特別な能力が身についた。私は？",
            **{"zh-CN": "某天突然获得了特殊能力。我会？", "zh-TW": "某天突然獲得了特殊能力。我會？"},
            vi="Một ngày bạn đột nhiên có năng lực đặc biệt. Tôi sẽ…",
            id="Suatu hari kamu tiba-tiba punya kemampuan khusus. Saya…",
        ),
        [
            (M(ko=_ko_o(0, 0), en="Hide it and keep living quietly as before. I do not want to stand out", ja="とりあえず隠して、今まで通り静かに暮らす。目立ちたくない", **{"zh-CN": "先藏起来，继续安静过日子，不想出风头", "zh-TW": "先藏起來，繼續安靜過日子，不想出風頭"}, vi="Giấu đi và sống yên lặng như trước. Không muốn nổi bật", id="Sembunyikan dan hidup tenang seperti biasa. Tidak ingin menonjol"), 0),
            (M(ko=_ko_o(0, 1), en="Tell only people close to me. I want to protect precious people with this ability", ja="近い人だけに教える。この能力で大切な人を守りたい", **{"zh-CN": "只告诉亲近的人，想用这个能力保护重要的人", "zh-TW": "只告訴親近的人，想用這個能力保護重要的人"}, vi="Chỉ nói với người thân. Muốn bảo vệ người quan trọng bằng năng lực này", id="Hanya beri tahu orang dekat. Ingin melindungi orang berharga dengan kemampuan ini"), 1),
            (M(ko=_ko_o(0, 2), en="Feel like I could achieve something with this ability. Test its potential", ja="この能力で何か成し遂げられそう。可能性を試してみる", **{"zh-CN": "觉得用这个能力能做成什么，先测试可能性", "zh-TW": "覺得用這個能力能做成什麼，先測試可能性"}, vi="Cảm thấy có thể làm được gì với năng lực này. Thử tiềm năng", id="Merasa bisa mencapai sesuatu dengan kemampuan ini. Uji potensinya"), 2),
            (M(ko=_ko_o(0, 3), en="Already have a plan for how to use it. Execute immediately", ja="もう能力の使い方の計画が立っている。すぐ実行する", **{"zh-CN": "已经想好怎么用，立刻执行", "zh-TW": "已經想好怎麼用，立刻執行"}, vi="Đã có kế hoạch dùng năng lực. Thực hiện ngay", id="Sudah punya rencana cara pakainya. Langsung eksekusi"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(1),
            en="What impression do I leave in a first meeting?",
            ja="初対面の場で、私はどんな印象を残す？",
            **{"zh-CN": "初次见面的场合，我会留下什么印象？", "zh-TW": "初次見面的場合，我會留下什麼印象？"},
            vi="Ấn tượng tôi để lại ở buổi gặp lần đầu?",
            id="Kesan apa yang saya tinggalkan saat pertama kali bertemu?",
        ),
        [
            (M(ko=_ko_o(1, 0), en="Hard to remember. I blend in without standing out", ja="あまり覚えてもらえない。目立たず普通に溶け込む", **{"zh-CN": "不太被记住，不显眼地融入人群", "zh-TW": "不太被記住，不顯眼地融入人群"}, vi="Khó nhớ. Hòa vào đám đông mà không nổi bật", id="Sulit diingat. Menyatu tanpa menonjol"), 0),
            (M(ko=_ko_o(1, 1), en="Warm and friendly. Often told conversations with me feel easy", ja="温かく親しみやすい。話しやすいとよく言われる", **{"zh-CN": "温暖亲切，常被说聊天很轻松", "zh-TW": "溫暖親切，常被說聊天很輕鬆"}, vi="Ấm áp và thân thiện. Hay được nói nói chuyện dễ chịu", id="Hangat dan ramah. Sering dikatakan obrolannya nyaman"), 1),
            (M(ko=_ko_o(1, 2), en="Not special at first, but unexpected sides show as people get to know me", ja="最初は特別に見えないが、知るほど意外な一面が出る", **{"zh-CN": "起初不特别，越了解越露出意外的一面", "zh-TW": "起初不特別，越了解越露出意外的一面"}, vi="Ban đầu không đặc biệt, càng biết càng lộ mặt bất ngờ", id="Awalnya biasa saja, makin kenal makin terlihat sisi tak terduga"), 2),
            (M(ko=_ko_o(1, 3), en="The mood shifts the moment I appear. Strong presence", ja="登場した瞬間に雰囲気が変わる。存在感が強い", **{"zh-CN": "一出场气氛就变了，存在感很强", "zh-TW": "一出場氣氛就變了，存在感很強"}, vi="Không khí thay đổi ngay khi xuất hiện. Presence mạnh", id="Suasana berubah saat muncul. Presence kuat"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(2),
            en="A crisis suddenly hits. I would…",
            ja="危機が突然訪れた。私は？",
            **{"zh-CN": "危机突然降临。我会？", "zh-TW": "危機突然降臨。我會？"},
            vi="Khủng hoảng đột ngột ập đến. Tôi sẽ…",
            id="Krisis tiba-tiba datang. Saya…",
        ),
        [
            (M(ko=_ko_o(2, 0), en="Panic first and do not know what to do, but somehow manage", ja="まず慌ててどうすればいいか分からない。でもなんとかなる", **{"zh-CN": "先慌了不知道怎么办，但 somehow 能解决", "zh-TW": "先慌了不知道怎麼辦，但 somehow 能解決"}, vi="Trước tiên hoảng và không biết làm gì, nhưng rồi cũng xử lý được", id="Panik dulu dan bingung, tapi akhirnya somehow teratasi"), 0),
            (M(ko=_ko_o(2, 1), en="Worry about people around me first. Everyone must be safe", ja="周りの人の心配が先。みんな無事でなければ", **{"zh-CN": "先担心身边的人，大家都要平安", "zh-TW": "先擔心身邊的人，大家都要平安"}, vi="Lo cho mọi người xung quanh trước. Ai cũng phải an toàn", id="Khawatir orang sekitar dulu. Semua harus selamat"), 1),
            (M(ko=_ko_o(2, 2), en="Quickly analyze the situation and organize possible options", ja="頭の中で素早く状況を分析し、可能な選択肢を整理する", **{"zh-CN": "在脑中快速分析情况，整理可行选项", "zh-TW": "在腦中快速分析情況，整理可行選項"}, vi="Nhanh chóng phân tích tình huống và sắp xếp các lựa chọn", id="Cepat analisis situasi dan merapikan opsi yang mungkin"), 2),
            (M(ko=_ko_o(2, 3), en="My body moves first. Action is faster than thought", ja="もう体が先に動いている。考えるより実行が速い", **{"zh-CN": "身体已经先动了，行动比思考快", "zh-TW": "身體已經先動了，行動比思考快"}, vi="Cơ thể đã di chuyển trước. Hành động nhanh hơn suy nghĩ", id="Tubuh sudah bergerak duluan. Eksekusi lebih cepat dari pikiran"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(3),
            en="How do people around me see me?",
            ja="周りの人は私をどう見ている？",
            **{"zh-CN": "身边的人怎么看我？", "zh-TW": "身邊的人怎麼看我？"},
            vi="Mọi người xung quanh nhìn tôi thế nào?",
            id="Bagaimana orang sekitar melihat saya?",
        ),
        [
            (M(ko=_ko_o(3, 0), en="Ordinary and fine. Nothing special, nothing problematic", ja="普通で無難。特に目立つことも問題もない", **{"zh-CN": "普通稳妥，没什么特别也没什么问题", "zh-TW": "普通穩妥，沒什麼特別也沒什麼問題"}, vi="Bình thường và ổn. Không đặc biệt, không gây rắc rối", id="Biasa dan aman. Tidak spesial, tidak bermasalah"), 0),
            (M(ko=_ko_o(3, 1), en="Warm. People say I somehow comfort them", ja="温かい。一緒にいるとなぜか癒されると言われる", **{"zh-CN": "温暖，有人说在身边莫名被治愈", "zh-TW": "溫暖，有人說在身邊莫名被治癒"}, vi="Ấm áp. Người ta nói ở bên cạnh thấy được an ủi", id="Hangat. Orang bilang kehadiranku menenangkan"), 1),
            (M(ko=_ko_o(3, 2), en="Hard to tell at first, then \"You had this side too?\" reactions", ja="最初は分からないが、知ると「こんな面もあったの？」となる", **{"zh-CN": "起初看不透，熟悉后会有「原来你还有这一面？」", "zh-TW": "起初看不透，熟悉後會有「原來你還有這一面？」"}, vi="Ban đầu khó hiểu, sau đó mọi người nói \"Bạn còn mặt này nữa à?\"", id="Awalnya sulit dibaca, lalu muncul reaksi \"Kamu punya sisi ini juga?\""), 2),
            (M(ko=_ko_o(3, 3), en="Often called strong or unique, in good or bad ways", ja="強い・個性的とよく言われる。良い意味でも悪い意味でも", **{"zh-CN": "常被说很强或很有个性，好坏皆有", "zh-TW": "常被說很強或很有個性，好壞皆有"}, vi="Thường được nói mạnh hoặc độc đáo, dù tích cực hay tiêu cực", id="Sering disebut kuat atau unik, baik maupun buruk"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(4),
            en="What is my strongest motivation?",
            ja="私の最も強い動機は？",
            **{"zh-CN": "我最强的动力是什么？", "zh-TW": "我最強的動力是什麼？"},
            vi="Động lực mạnh nhất của tôi là gì?",
            id="Motivasi terkuat saya apa?",
        ),
        [
            (M(ko=_ko_o(4, 0), en="Living peacefully as now. Stability over being special", ja="今のように平和に暮らすこと。特別より安定", **{"zh-CN": "像现在这样平静生活，稳定比特别更重要", "zh-TW": "像現在這樣平靜生活，穩定比特別更重要"}, vi="Sống bình yên như hiện tại. Ổn định hơn đặc biệt", id="Hidup damai seperti sekarang. Stabilitas lebih penting dari yang spesial"), 0),
            (M(ko=_ko_o(4, 1), en="Precious people being happy. Others come before me", ja="大切な人が幸せであること。自分より周りが先", **{"zh-CN": "重要的人幸福，别人优先于自己", "zh-TW": "重要的人幸福，別人優先於自己"}, vi="Người quan trọng được hạnh phúc. Người khác trước bản thân", id="Orang berharga bahagia. Orang lain lebih dulu dari diri sendiri"), 1),
            (M(ko=_ko_o(4, 2), en="Eventually achieving what I want, even if slowly", ja="やりたいことを最終的に成し遂げること。遅くても諦めない", **{"zh-CN": "最终达成想做的事，慢也没关系不放弃", "zh-TW": "最終達成想做的事，慢也沒關係不放棄"}, vi="Cuối cùng đạt được điều mình muốn, dù chậm cũng không bỏ cuộc", id="Akhirnya mencapai yang ingin dilakukan, meski lambat tidak menyerah"), 2),
            (M(ko=_ko_o(4, 3), en="Becoming the best, or achieving something no one can stop", ja="最高になること。または誰にも止められない何かを成し遂げること", **{"zh-CN": "成为最强，或达成无人能阻的事", "zh-TW": "成為最強，或達成無人能阻的事"}, vi="Trở thành số một, hoặc đạt điều không ai cản nổi", id="Menjadi yang terbaik, atau mencapai sesuatu yang tak bisa dihentikan siapa pun"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(5),
            en="In romance, I am…",
            ja="恋愛状況で、私は？",
            **{"zh-CN": "恋爱时，我会？", "zh-TW": "戀愛時，我會？"},
            vi="Trong tình yêu, tôi…",
            id="Dalam situasi romansa, saya…",
        ),
        [
            (M(ko=_ko_o(5, 0), en="Hide feelings and like quietly. The other person often does not notice", ja="表に出さず一人で好きになる。相手が気づかないことも多い", **{"zh-CN": "不露声色地暗恋，对方常察觉不到", "zh-TW": "不露聲色地暗戀，對方常察覺不到"}, vi="Giấu cảm xúc và thích thầm. Đối phương thường không nhận ra", id="Tidak menunjukkan perasaan dan suka diam-diam. Lawan sering tidak sadar"), 0),
            (M(ko=_ko_o(5, 1), en="Emotionally rich and expressive. When I like someone, my heart is fully there", ja="感情豊かで表現も多い。好きなら心が全部そこにある", **{"zh-CN": "情感丰富、表达多，喜欢时全心投入", "zh-TW": "情感豐富、表達多，喜歡時全心投入"}, vi="Giàu cảm xúc và hay bộc lộ. Thích ai thì trái tim ở hết ở đó", id="Emosional dan ekspresif. Kalau suka, hati sepenuhnya ada di sana"), 1),
            (M(ko=_ko_o(5, 2), en="Act cool outside but actually quite sincere. Only close people know", ja="外見はクールだが実はかなり本気。知る人だけ知っている", **{"zh-CN": "表面装酷其实很认真，只有熟人才懂", "zh-TW": "表面裝酷其實很認真，只有熟人才懂"}, vi="Bên ngoài tỏ ra cool nhưng thực ra rất chân thành. Chỉ người thân biết", id="Terlihat cool di luar tapi sebenarnya serius. Hanya yang dekat tahu"), 2),
            (M(ko=_ko_o(5, 3), en="Clear when I like someone. Direct over push-pull, I tend to lead", ja="好きならはっきりする。駆け引きより直進、状況を主導する", **{"zh-CN": "喜欢就很明确，直球胜过推拉，倾向主导局面", "zh-TW": "喜歡就很明確，直球勝過推拉，傾向主導局面"}, vi="Thích thì rõ ràng. Thẳng thắn hơn giật co, thường dẫn dắt tình huống", id="Kalau suka jelas. Langsung daripada push-pull, cenderung memimpin"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(6),
            en="A powerful rival or enemy appears. I would…",
            ja="強力なライバルまたは敵が現れた。私は？",
            **{"zh-CN": "出现了强大的对手或敌人。我会？", "zh-TW": "出現了強大的對手或敵人。我會？"},
            vi="Một đối thủ hoặc kẻ thù mạnh xuất hiện. Tôi sẽ…",
            id="Rival atau musuh kuat muncul. Saya…",
        ),
        [
            (M(ko=_ko_o(6, 0), en="Avoid first. Look for ways around rather than direct confrontation", ja="まず避ける。正面勝負より状況を回避する方法を探す", **{"zh-CN": "先躲开，找回避方法而非正面对决", "zh-TW": "先躲開，找回避方法而非正面對決"}, vi="Tránh trước. Tìm cách né hơn là đối đầu trực tiếp", id="Hindari dulu. Cari cara mengelak daripada konfrontasi langsung"), 0),
            (M(ko=_ko_o(6, 1), en="Rather than winning, want to understand why they became an enemy", ja="勝つより、なぜ敵になったのか理解したい", **{"zh-CN": "比起赢，更想理解为何成为敌人", "zh-TW": "比起贏，更想理解為何成為敵人"}, vi="Hơn là thắng, muốn hiểu vì sao họ thành kẻ thù", id="Daripada menang, ingin paham kenapa mereka jadi musuh"), 1),
            (M(ko=_ko_o(6, 2), en="Analyze weaknesses and how to win", ja="弱点と勝ち方を分析する", **{"zh-CN": "分析弱点和取胜方法", "zh-TW": "分析弱點和取勝方法"}, vi="Phân tích điểm yếu và cách chiến thắng", id="Analisis kelemahan dan cara menang"), 2),
            (M(ko=_ko_o(6, 3), en="Welcome it instead. Strong opponents make it more fun", ja="むしろ歓迎する。強い相手がいるほど面白い", **{"zh-CN": "反而欢迎，对手越强越有趣", "zh-TW": "反而歡迎，對手越強越有趣"}, vi="Ngược lại chào đón. Đối thủ mạnh càng thú vị", id="Justru menyambut. Lawan kuat bikin lebih seru"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(7),
            en="My conversation style is…",
            ja="私の会話スタイルは？",
            **{"zh-CN": "我的对话风格是？", "zh-TW": "我的對話風格是？"},
            vi="Phong cách nói chuyện của tôi…",
            id="Gaya percakapan saya…",
        ),
        [
            (M(ko=_ko_o(7, 0), en="Not talkative. Say only what is needed and stay quiet", ja="口数が少ない。必要なことだけ言い、静かにいる", **{"zh-CN": "话不多，只说必要的，安静待着", "zh-TW": "話不多，只說必要的，安靜待著"}, vi="Không nói nhiều. Chỉ nói điều cần thiết và im lặng", id="Tidak banyak bicara. Hanya kata yang perlu dan diam"), 0),
            (M(ko=_ko_o(7, 1), en="Express emotions honestly. Empathy comes naturally", ja="感情を素直に表現する。共感が自然に生まれる", **{"zh-CN": "诚实表达情感，共情很自然", "zh-TW": "誠實表達情感，共情很自然"}, vi="Bộc lộ cảm xúc thật. Đồng cảm tự nhiên", id="Ekspresikan emosi jujur. Empati terasa natural"), 1),
            (M(ko=_ko_o(7, 2), en="Quiet at first but surprisingly fun or sharp once close", ja="最初は無口だが、親しくなると意外と面白いか鋭い", **{"zh-CN": "起初寡言，熟悉后意外有趣或犀利", "zh-TW": "起初寡言，熟悉後意外有趣或犀利"}, vi="Ban đầu ít nói nhưng thân rồi bất ngờ vui hoặc sắc bén", id="Awalnya pendiam tapi dekat jadi lucu atau tajam"), 2),
            (M(ko=_ko_o(7, 3), en="Every word carries weight, or strong personality makes conversations memorable", ja="一言に重みがある。または個性が強すぎて会話が記憶に残る", **{"zh-CN": "一言有分量，或个性太强对话令人难忘", "zh-TW": "一言有分量，或個性太強對話令人難忘"}, vi="Mỗi câu có trọng lượng, hoặc cá tính quá mạnh khiến hội thoại khó quên", id="Setiap kata punya bobot, atau kepribadian kuat sehingga obrolan memorable"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(8),
            en="When do I shine most?",
            ja="私が最も輝く瞬間は？",
            **{"zh-CN": "我何时最闪耀？", "zh-TW": "我何時最閃耀？"},
            vi="Khi nào tôi tỏa sáng nhất?",
            id="Kapan saya paling bersinar?",
        ),
        [
            (M(ko=_ko_o(8, 0), en="Not really a shining moment. Just being there is fine", ja="特に輝く瞬間はない。ただそこにいるだけでもいい", **{"zh-CN": "没有特别闪耀的时刻，只是存在就好", "zh-TW": "沒有特別閃耀的時刻，只是存在就好"}, vi="Không có khoảnh khắc tỏa sáng đặc biệt. Chỉ ở đó cũng ổn", id="Tidak ada momen bersinar khusus. Hanya ada saja sudah cukup"), 0),
            (M(ko=_ko_o(8, 1), en="When I can do something for someone precious", ja="大切な人のために何かできるとき", **{"zh-CN": "能为重要的人做点什么时", "zh-TW": "能為重要的人做點什麼時"}, vi="Khi có thể làm gì cho người quan trọng", id="Saat bisa melakukan sesuatu untuk orang berharga"), 1),
            (M(ko=_ko_o(8, 2), en="When long preparation finally shows results", ja="長く準備してきたものがついに結果になるとき", **{"zh-CN": "长期准备终于出成果时", "zh-TW": "長期準備終於出成果時"}, vi="Khi chuẩn bị lâu dài cuối cùng ra kết quả", id="Saat persiapan panjang akhirnya membuahkan hasil"), 2),
            (M(ko=_ko_o(8, 3), en="When everyone said impossible but I did it", ja="誰も不可能と言ったのに自分が成し遂げたとき", **{"zh-CN": "大家都说不可能但我做到了时", "zh-TW": "大家都說不可能但我做到了時"}, vi="Khi mọi người nói không thể nhưng tôi làm được", id="Saat semua bilang mustahil tapi saya berhasil"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(9),
            en="My natural role in a team or group is…",
            ja="チーム・グループでの私の自然な役割は？",
            **{"zh-CN": "在团队·小组里，我自然的角色是？", "zh-TW": "在團隊·小組裡，我自然的角色是？"},
            vi="Vai trò tự nhiên của tôi trong nhóm?",
            id="Peran natural saya dalam tim atau grup?",
        ),
        [
            (M(ko=_ko_o(9, 0), en="Quietly doing my part well. Invisible but something feels missing without me", ja="静かに任されたことをうまくこなす。目立たないがいないと物足りない", **{"zh-CN": "安静做好分内事，不显眼但少了我会缺一块", "zh-TW": "安靜做好分內事，不顯眼但少了我會缺一塊"}, vi="Làm tốt phần việc được giao. Không nổi bật nhưng thiếu tôi thấy thiếu", id="Diam-diam mengerjakan bagian dengan baik. Tidak menonjol tapi ada yang kurang tanpaku"), 0),
            (M(ko=_ko_o(9, 1), en="Mood maker or emotional center. Handle team feelings and bonds", ja="雰囲気メーカーまたは感情の中心。チームの感性と絆を担う", **{"zh-CN": "气氛担当或情感中心，负责团队感性与羁绊", "zh-TW": "氣氛擔當或情感中心，負責團隊感性與羈絆"}, vi="Người tạo không khí hoặc trung tâm cảm xúc. Giữ cảm xúc và gắn kết nhóm", id="Pembuat mood atau pusat emosi. Menjaga perasaan dan ikatan tim"), 1),
            (M(ko=_ko_o(9, 2), en="Strategy role. Naturally take direction-setting or problem analysis", ja="戦略担当。方向を決めたり問題を分析する役を自然に担う", **{"zh-CN": "战略担当，自然负责定方向或分析问题", "zh-TW": "戰略擔當，自然負責定方向或分析問題"}, vi="Phụ trách chiến lược. Tự nhiên định hướng hoặc phân tích vấn đề", id="Peran strategi. Natural mengarahkan atau menganalisis masalah"), 2),
            (M(ko=_ko_o(9, 3), en="Leader or ace. The mood changes when I step up", ja="リーダーまたはエース。自分が出ると雰囲気が変わる", **{"zh-CN": "领袖或王牌，我一出手气氛就变了", "zh-TW": "領袖或王牌，我一出手氣氛就變了"}, vi="Leader hoặc ace. Không khí thay đổi khi tôi bước ra", id="Leader atau ace. Suasana berubah saat saya maju"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(10),
            en="If I have a hidden side…",
            ja="私の中に隠れた面があるなら？",
            **{"zh-CN": "如果我内心有隐藏的一面…", "zh-TW": "如果我內心有隱藏的一面…"},
            vi="Nếu tôi có mặt ẩn bên trong…",
            id="Jika ada sisi tersembunyi dalam diri saya…",
        ),
        [
            (M(ko=_ko_o(10, 0), en="Not much hidden. What you see is almost everything", ja="あまり隠れていない。見えるものがほぼ全部", **{"zh-CN": "没什么隐藏的，看到的几乎就是全部", "zh-TW": "沒什麼隱藏的，看到的幾乎就是全部"}, vi="Không có gì ẩn nhiều. Những gì thấy gần như là tất cả", id="Tidak banyak yang tersembunyi. Yang terlihat hampir semuanya"), 0),
            (M(ko=_ko_o(10, 1), en="Much deeper feelings and sincerity than shown, hard to reveal all", ja="表面よりはるかに深い感情と真心がある。全部見せるのは難しい", **{"zh-CN": "比表面深得多的情感与真心，难以全部展现", "zh-TW": "比表面深得多的情感與真心，難以全部展現"}, vi="Cảm xúc và chân thành sâu hơn vẻ bề ngoài, khó bộc lộ hết", id="Emosi dan ketulusan jauh lebih dalam dari yang terlihat, sulit ditunjukkan semua"), 1),
            (M(ko=_ko_o(10, 2), en="Unexpected ability or twist charm no one predicted, just not revealed yet", ja="誰も予想しなかった能力や反転魅力がある。まだ表れていないだけ", **{"zh-CN": "有没人预料到的能力或反转魅力，只是还没显露", "zh-TW": "有沒人預料到的能力或反轉魅力，只是還沒顯露"}, vi="Có năng lực hoặc sức hút bất ngờ mà chưa ai đoán, chỉ chưa lộ ra", id="Ada kemampuan atau daya tarik plot twist yang belum terlihat"), 2),
            (M(ko=_ko_o(10, 3), en="What I show is only part. True skill or self is much stronger or more unique", ja="今見せているのも一部。本当の実力・本当の姿はもっと強いか個性的", **{"zh-CN": "现在展示的只是一部分，真正实力·真面貌更强或更独特", "zh-TW": "現在展示的只是一部分，真正實力·真面貌更強或更獨特"}, vi="Những gì đang thể hiện chỉ là một phần. Sức mạnh hoặc bản thân thật mạnh/độc đáo hơn nhiều", id="Yang ditunjukkan baru sebagian. Skill atau diri sebenarnya jauh lebih kuat/unik"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(11),
            en="If I describe my life story in one line…",
            ja="私の人生の物語を一言で表すなら？",
            **{"zh-CN": "用一句话形容我的人生故事？", "zh-TW": "用一句話形容我的人生故事？"},
            vi="Nếu mô tả câu chuyện đời tôi bằng một câu…",
            id="Jika mendeskripsikan kisah hidup saya dalam satu kalimat…",
        ),
        [
            (M(ko=_ko_o(11, 0), en="Ordinary but okay day by day", ja="平凡だけどなんとかいい日々", **{"zh-CN": "平凡但还不错的每一天", "zh-TW": "平凡但還不錯的每一天"}, vi="Bình thường nhưng từng ngày cũng ổn", id="Biasa tapi hari demi hari cukup baik"), 0),
            (M(ko=_ko_o(11, 1), en="A story of protecting precious things while living on", ja="大切なものを守りながら生きていく物語", **{"zh-CN": "守护珍贵之物继续活下去的故事", "zh-TW": "守護珍貴之物繼續活下去的故事"}, vi="Câu chuyện bảo vệ những điều quý giá khi sống tiếp", id="Kisah melindungi hal-hal berharga sambil hidup"), 1),
            (M(ko=_ko_o(11, 2), en="A record of slow growth that eventually gets done", ja="遅くても結局やり遂げる成長の記録", **{"zh-CN": "慢也要最终完成的成长记录", "zh-TW": "慢也要最終完成的成長記錄"}, vi="Hồ sơ trưởng thành chậm nhưng cuối cùng vẫn làm được", id="Catatan pertumbuhan lambat tapi akhirnya tercapai"), 2),
            (M(ko=_ko_o(11, 3), en="My own story no one can stop", ja="誰にも止められない自分だけの物語", **{"zh-CN": "无人能阻挡的、只属于我的故事", "zh-TW": "無人能阻擋的、只屬於我的故事"}, vi="Câu chuyện của riêng tôi mà không ai cản nổi", id="Kisah milik sendiri yang tak bisa dihentikan siapa pun"), 3),
        ],
    ),
]

RESULTS = [
    r(
        "Type1", "📖",
        title=M(ko=_ko_r(0, "title"), en="100% Relatable Everyday Protagonist", ja="共感100%の日常市民主人公", **{"zh-CN": "100%共鸣的普通人主角", "zh-TW": "100%共鳴的普通人主角"}, vi="Nhân vật chính đời thường đồng cảm 100%", id="Protagonis keseharian relatable 100%"),
        shortDescription=M(ko=_ko_r(0, "shortDescription"), en="The webtoon where you are the protagonist is not flashy, but most readers say \"This is literally me.\"", ja="あなたが主人公のウェブトゥーンは華やかではないが、最も多くの読者が「これ私の話」と言う。", **{"zh-CN": "你是主角的网漫并不华丽，但最多读者会说「这就是在说我」。", "zh-TW": "你是主角的網漫並不華麗，但最多讀者會說「這就是在說我」。"}, vi="Webtoon bạn làm nhân vật chính không hoa lệ, nhưng nhiều độc giả nhất nói \"Đây là tôi\".", id="Webtoon dengan kamu sebagai protagonis tidak megah, tapi kebanyakan pembaca bilang \"Ini ceritaku\"."),
        description=M(ko=_ko_r(0, "description"), en="No special powers or flashy settings, but captures small everyday moments delicately. Even if dropped into another world, you would think about going home first. Readers feel like they breathe with you.", ja="特別な能力も華やかな背景もないが、日常の小さな瞬間を繊細に捉えるタイプ。いきなり異世界に落ちてもまず帰ることを考える人。読者が一緒に息をするような主人公。", **{"zh-CN": "没有特殊能力或华丽背景，却细腻捕捉日常小瞬间。就算掉进异世界也会先想回家。读者会觉得和你同呼吸。", "zh-TW": "沒有特殊能力或華麗背景，卻細膩捕捉日常小瞬間。就算掉進異世界也會先想回家。讀者會覺得和你同呼吸。"}, vi="Không có siêu năng lực hay bối cảnh hoa mỹ, nhưng nắm bắt khoảnh khắc nhỏ trong đời thường tinh tế. Rơi vào thế giới khác cũng nghĩ về việc về nhà trước. Độc giả cảm thấy cùng thở với bạn.", id="Tanpa kekuatan khusus atau latar megah, tapi menangkap momen kecil sehari-hari dengan halus. Meski jatuh ke dunia lain, tetap mikir pulang dulu. Pembaca merasa bernapas bersamamu."),
        protagonistType=M(ko=_ko_r(0, "protagonistType"), en="Everyday Relatable Type 📖", ja="日常共感型 📖", **{"zh-CN": "日常共鸣型 📖", "zh-TW": "日常共鳴型 📖"}, vi="Kiểu đồng cảm đời thường 📖", id="Tipe relatable sehari-hari 📖"),
        appearingGenre=M(ko=_ko_r(0, "appearingGenre"), en="Slice of life · Healing · Growth · Workplace · School daily life", ja="日常・ヒーリング・成長・職場物・学園日常物", **{"zh-CN": "日常·治愈·成长·职场·校园日常", "zh-TW": "日常·治癒·成長·職場·校園日常"}, vi="Đời thường · Healing · Trưởng thành · Nơi làm việc · Trường học", id="Slice of life · Healing · Pertumbuhan · Tempat kerja · Sekolah"),
        narrativePattern=M(ko=_ko_r(0, "narrativePattern"), en="An ordinary protagonist slowly changes through small relationships and events", ja="平凡な主人公が小さな関係と出来事の中で少しずつ変わっていく物語", **{"zh-CN": "平凡主角在小关系与小事件中慢慢改变的故事", "zh-TW": "平凡主角在小關係與小事件中慢慢改變的故事"}, vi="Nhân vật bình thường từ từ thay đổi qua các mối quan hệ và sự kiện nhỏ", id="Protagonis biasa perlahan berubah lewat hubungan dan kejadian kecil"),
        strength=M(ko=_ko_r(0, "strength"), en="Strongest emotional immersion. Easiest type for readers to project themselves onto", ja="感情移入最強。読者が最も自分を投影しやすいタイプ", **{"zh-CN": "代入感最强，读者最容易把自己投射进去的类型", "zh-TW": "代入感最強，讀者最容易把自己投射進去的類型"}, vi="Đồng cảm mạnh nhất. Kiểu dễ khiến độc giả tự chiếu nhất", id="Imersi emosional terkuat. Tipe paling mudah diproyeksikan pembaca"),
        charmPoint=M(ko=_ko_r(0, "charmPoint"), en="Things that are not flashy but real. Decisive moments in daily life", ja="華やかではないが本物のもの。日常の決定的な瞬間", **{"zh-CN": "不华丽但真实的东西，日常里的决定性瞬间", "zh-TW": "不華麗但真實的東西，日常裡的決定性瞬間"}, vi="Những thứ không hoa mỹ nhưng thật. Khoảnh khắc quyết định trong đời thường", id="Hal yang tidak megah tapi nyata. Momen penentu dalam keseharian"),
        shiningScene=M(ko=_ko_r(0, "shiningScene"), en="The scene where emotions carried alone are finally revealed", ja="ずっと一人で抱えてきた感情をついに打ち明ける場面", **{"zh-CN": "独自承受已久的情感终于说出的场景", "zh-TW": "獨自承受已久的情感終於說出的場景"}, vi="Cảnh cảm xúc gánh một mình cuối cùng được nói ra", id="Adegan emosi yang ditanggung sendiri akhirnya terungkap"),
        recommendedGenre=M(ko=_ko_r(0, "recommendedGenre"), en="Daily essay webtoons · Office worker relatable stories · Youth growth stories", ja="日常エッセイトゥーン・会社員共感物・青春成長物", **{"zh-CN": "日常随笔漫·打工人共鸣向·青春成长向", "zh-TW": "日常隨筆漫·打工人共鳴向·青春成長向"}, vi="Webtoon essay đời thường · Câu chuyện dân văn phòng · Trưởng thành tuổi trẻ", id="Webtoon esai harian · Cerita relatable pekerja kantoran · Pertumbuhan remaja"),
        oneLiner=M(ko=_ko_r(0, "oneLiner"), en="Your story is the kind of webtoon you cannot stop reading even if it is not flashy", ja="あなたの物語は華やかではないが、読むと止められないウェブトゥーンです", **{"zh-CN": "你的故事是不华丽但一读就停不下来的那种网漫", "zh-TW": "你的故事是不華麗但一讀就停不下來的那種網漫"}, vi="Câu chuyện của bạn là webtoon không hoa lệ nhưng đọc rồi không dừng được", id="Kisahmu adalah webtoon yang tidak megah tapi dibaca lalu sulit berhenti"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(0, "shareLine"), en="My webtoon protagonist type: Everyday Relatable 📖 Not flashy but impossible to stop reading... 100% relatable → What protagonist are you? Genre recommended too", ja="私のウェブトゥーン主人公タイプ：日常共感型 📖 華やかじゃないのに読むと止められない…共感100% → あなたはどんな主人公？ジャンルもおすすめ", **{"zh-CN": "我的网漫主角类型：日常共鸣型 📖 不华丽但一看停不下来…100%共鸣 → 你是什么主角？还推荐 genre", "zh-TW": "我的網漫主角類型：日常共鳴型 📖 不華麗但一看停不下來…100%共鳴 → 你是什麼主角？還推薦 genre"}, vi="Kiểu nhân vật chính webtoon của tôi: Đồng cảm đời thường 📖 Không hoa lệ mà đọc không dừng được… đúng 100% → Bạn là nhân vật gì? Có gợi ý thể loại", id="Tipe protagonis webtoon-ku: Relatable sehari-hari 📖 Tidak megah tapi dibaca lalu sulit berhenti… 100% relatable → Kamu protagonis apa? Genre juga direkomendasikan"),
    ),
    r(
        "Type2", "💗",
        title=M(ko=_ko_r(1, "title"), en="Emotional Romance Protagonist Who Hits Readers' Hearts", ja="読者の心臓を狙う、感性ロマンス主人公", **{"zh-CN": "狙击读者心脏的感性浪漫主角", "zh-TW": "狙擊讀者心臟的感性浪漫主角"}, vi="Nhân vật chính lãng mạn cảm xúc chạm trái tim độc giả", id="Protagonis romansa emosional yang menembak jantung pembaca"),
        shortDescription=M(ko=_ko_r(1, "shortDescription"), en="In the webtoon where you are the protagonist, readers pause at every line and expression.", ja="あなたが主人公のウェブトゥーンでは、台詞一つ、表情一つで読者が止まる。", **{"zh-CN": "你是主角的网漫里，读者会因一句台词、一个表情而停住。", "zh-TW": "你是主角的網漫裡，讀者會因一句台詞、一個表情而停住。"}, vi="Trong webtoon bạn làm nhân vật chính, độc giả dừng lại vì từng câu thoại và biểu cảm.", id="Di webtoon dengan kamu sebagai protagonis, pembaca berhenti di setiap dialog dan ekspresi."),
        description=M(ko=_ko_r(1, "description"), en="Shines brightest in relationships, expresses emotions finely, and can throw yourself for others. As a romance lead, chemistry is so strong readers get jealous of the other character. The type that makes fans cry the most.", ja="人との関係で最も輝き、感情を繊細に表現し、相手のために自分を投げ出せるタイプ。ロマンス主人公になると読者が相手キャラを妬むほどのケミ。ファンを最も泣かせるタイプ。", **{"zh-CN": "在关系中最为闪耀，细腻表达情感，能为他人付出自己。成为浪漫主角时化学反应强到读者会嫉妒对方。也是让粉丝哭得最多的类型。", "zh-TW": "在關係中最為閃耀，細膩表達情感，能為他人付出自己。成為浪漫主角時化學反應強到讀者會嫉妒對方。也是讓粉絲哭得最多的類型。"}, vi="Tỏa sáng nhất trong quan hệ, diễn tả cảm xúc tinh tế, có thể hy sinh vì người khác. Làm nhân vật chính romance thì chemistry mạnh đến mức độc giả ghen với nhân vật kia. Kiểu khiến fan khóc nhiều nhất.", id="Paling bersinar dalam hubungan, mengekspresikan emosi halus, bisa mengorbankan diri untuk orang lain. Sebagai lead romance, chemistry-nya kuat sampai pembaca cemburu pada karakter lawan. Tipe yang paling sering membuat fan menangis."),
        protagonistType=M(ko=_ko_r(1, "protagonistType"), en="Emotional Romance Type 💗", ja="感性ロマンス型 💗", **{"zh-CN": "感性浪漫型 💗", "zh-TW": "感性浪漫型 💗"}, vi="Kiểu lãng mạn cảm xúc 💗", id="Tipe romansa emosional 💗"),
        appearingGenre=M(ko=_ko_r(1, "appearingGenre"), en="Romance · Romance fantasy · BL · GL · School romance", ja="ロマンス・ロマンスファンタジー・BL・GL・学園ロマンス", **{"zh-CN": "浪漫·浪漫奇幻·BL·GL·校园恋爱", "zh-TW": "浪漫·浪漫奇幻·BL·GL·校園戀愛"}, vi="Lãng mạn · Romance fantasy · BL · GL · Tình yêu học đường", id="Romansa · Romance fantasy · BL · GL · Romansa sekolah"),
        narrativePattern=M(ko=_ko_r(1, "narrativePattern"), en="A story centered on changing relationships and deepening emotions", ja="関係の変化と感情の深まりが中心の物語", **{"zh-CN": "以关系变化与情感加深为中心的故事", "zh-TW": "以關係變化與情感加深為中心的故事"}, vi="Câu chuyện lấy sự thay đổi quan hệ và cảm xúc sâu dần làm trung tâm", id="Kisah berpusat pada perubahan hubungan dan emosi yang semakin dalam"),
        strength=M(ko=_ko_r(1, "strength"), en="Unmatched emotional description. Readers feel the strongest proxy emotions", ja="感情描写が際立つ。読者が最も強く代理感情を感じるタイプ", **{"zh-CN": "情感描写独树一帜，读者代入感最强", "zh-TW": "情感描寫獨樹一幟，讀者代入感最強"}, vi="Miêu tả cảm xúc vượt trội. Độc giả cảm nhận đồng cảm thay thế mạnh nhất", id="Deskripsi emosi paling unggul. Pembaca merasakan emosi proxy paling kuat"),
        charmPoint=M(ko=_ko_r(1, "charmPoint"), en="The moment of giving everything for someone precious", ja="大切な人のためにすべてを投げ出す瞬間", **{"zh-CN": "为重要的人倾尽所有的瞬间", "zh-TW": "為重要的人傾盡所有的瞬間"}, vi="Khoảnh khắc hy sinh tất cả vì người quan trọng", id="Momen memberikan segalanya untuk orang berharga"),
        shiningScene=M(ko=_ko_r(1, "shiningScene"), en="The confession scene after hiding feelings. A scene readers reread many times", ja="心を隠していたがついに告白する場面。読者が何度も読み返すシーン", **{"zh-CN": "隐藏心意后终于告白的场景，读者会反复重读", "zh-TW": "隱藏心意後終於告白的場景，讀者會反覆重讀"}, vi="Cảnh thú nhận sau khi giấu cảm xúc. Cảnh độc giả đọc lại nhiều lần", id="Adegan pengakuan setelah menyembunyikan perasaan. Adegan yang dibaca ulang berkali-kali"),
        recommendedGenre=M(ko=_ko_r(1, "recommendedGenre"), en="Romance · Romance fantasy · Emotional drama · Pure love stories", ja="ロマンス・ロファン・感性ドラマ・純愛物", **{"zh-CN": "浪漫·罗幻·情感剧·纯爱向", "zh-TW": "浪漫·羅幻·情感劇·純愛向"}, vi="Lãng mạn · Romance fantasy · Drama cảm xúc · Tình thuần khiết", id="Romansa · Romance fantasy · Drama emosional · Pure love"),
        oneLiner=M(ko=_ko_r(1, "oneLiner"), en="Your story is the kind of webtoon where readers cannot stop screenshotting", ja="あなたの物語は読むとキャプチャが止まらないウェブトゥーンです", **{"zh-CN": "你的故事是那种一读就忍不住截图的网漫", "zh-TW": "你的故事是那種一讀就忍不住截圖的網漫"}, vi="Câu chuyện của bạn là webtoon đọc rồi không ngừng chụp màn hình", id="Kisahmu adalah webtoon yang dibaca lalu screenshot terus"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(1, "shareLine"), en="My webtoon protagonist type: Emotional Romance 💗 Readers pause at one line... a webtoon you cannot stop capturing lol → What protagonist are you?", ja="私のウェブトゥーン主人公タイプ：感性ロマンス型 💗 台詞一つで読者が止まる…キャプチャ止まらないウェブトゥーン ㅋㅋ → あなたはどんな主人公？", **{"zh-CN": "我的网漫主角类型：感性浪漫型 💗 一句台词让读者停住…停不下截图的网漫 哈哈 → 你是什么主角？", "zh-TW": "我的網漫主角類型：感性浪漫型 💗 一句台詞讓讀者停住…停不下截圖的網漫 哈哈 → 你是什麼主角？"}, vi="Kiểu nhân vật chính webtoon của tôi: Lãng mạn cảm xúc 💗 Một câu thoại khiến độc giả dừng lại… webtoon chụp màn hình không ngừng haha → Bạn là nhân vật gì?", id="Tipe protagonis webtoon-ku: Romansa emosional 💗 Satu dialog bikin pembaca berhenti… webtoon yang screenshot-nya nggak berhenti wkwk → Kamu protagonis apa?"),
    ),
    r(
        "Type3", "🔥",
        title=M(ko=_ko_r(2, "title"), en="Slow but Eventually Wins, Hard-Working Growth Protagonist", ja="遅くても結局やり遂げる、努力成長型主人公", **{"zh-CN": "慢但最终会赢的努力成长型主角", "zh-TW": "慢但最終會贏的努力成長型主角"}, vi="Nhân vật chính trưởng thành bằng nỗ lực, chậm nhưng cuối cùng thắng", id="Protagonis pertumbuhan berusaha, lambat tapi akhirnya menang"),
        shortDescription=M(ko=_ko_r(2, "shortDescription"), en="The webtoon where you are the protagonist makes readers say \"I want to cheer again this episode.\"", ja="あなたが主人公のウェブトゥーンは、読者に「今回も応援したい」と言わせる。", **{"zh-CN": "你是主角的网漫会让读者说「这集也想继续应援」。", "zh-TW": "你是主角的網漫會讓讀者說「這集也想繼續應援」。"}, vi="Webtoon bạn làm nhân vật chính khiến độc giả nói \"Tập này cũng muốn cổ vũ\".", id="Webtoon dengan kamu sebagai protagonis membuat pembaca bilang \"Episode ini juga ingin dukung\"."),
        description=M(ko=_ko_r(2, "description"), en="Grows through persistence rather than innate talent. Seems lacking at first but never giving up draws cheers. The growth process itself is the core, and mid-story power-ups get the hottest reactions.", ja="生まれつきの才能より粘り強さで成長するタイプ。初期は周りより劣るように見えるが、諦めない姿が応援を呼ぶ。強くなる過程自体が物語の核心。中盤以降の成長シーンで最も熱い反応。", **{"zh-CN": "靠坚持而非天赋成长。起初看似不如人，但不放弃的样子赢得应援。变强过程本身就是故事核心，中后期成长场面反响最热。", "zh-TW": "靠堅持而非天賦成長。起初看似不如人，但不放棄的樣子贏得應援。變強過程本身就是故事核心，中後期成長場面反響最熱。"}, vi="Trưởng thành nhờ kiên trì hơn tài năng bẩm sinh. Ban đầu có vẻ thua kém nhưng không bỏ cuộc khiến độc giả cổ vũ. Quá trình mạnh lên là cốt lõi, cảnh trưởng thành giữa truyện phản ứng nóng nhất.", id="Tumbuh lewat ketekunan bukan talenta bawaan. Awalnya terlihat kurang tapi pantang menyerah menarik dukungan. Proses menjadi kuat adalah inti cerita, adegan growth mid-story paling panas."),
        protagonistType=M(ko=_ko_r(2, "protagonistType"), en="Hard-Working Growth Type 🔥", ja="努力成長型 🔥", **{"zh-CN": "努力成长型 🔥", "zh-TW": "努力成長型 🔥"}, vi="Kiểu trưởng thành bằng nỗ lực 🔥", id="Tipe pertumbuhan berusaha 🔥"),
        appearingGenre=M(ko=_ko_r(2, "appearingGenre"), en="Sports · Martial arts · Isekai growth · Career growth stories", ja="スポーツ物・武侠・異世界成長物・職業成長物", **{"zh-CN": "运动·武侠·异世界成长·职业成长", "zh-TW": "運動·武俠·異世界成長·職業成長"}, vi="Thể thao · Võ hiệp · Trưởng thành isekai · Trưởng thành nghề nghiệp", id="Olahraga · Wuxia · Pertumbuhan isekai · Pertumbuhan karier"),
        narrativePattern=M(ko=_ko_r(2, "narrativePattern"), en="Starting from the bottom and climbing toward the top through steady effort", ja="底辺から始まり、着実な努力で頂点を目指す物語", **{"zh-CN": "从底层出发，凭踏实努力攀向顶峰的故事", "zh-TW": "從底層出發，憑踏實努力攀向頂峰的故事"}, vi="Bắt đầu từ đáy và leo lên đỉnh bằng nỗ lực bền bỉ", id="Mulai dari bawah dan menuju puncak lewat usaha konsisten"),
        strength=M(ko=_ko_r(2, "strength"), en="The type that makes readers cheer hardest. The classic growth narrative", ja="読者が最も強く応援させるタイプ。成長物語の定石", **{"zh-CN": "最让读者强烈应援的类型，成长叙事经典", "zh-TW": "最讓讀者強烈應援的類型，成長敘事經典"}, vi="Kiểu khiến độc giả cổ vũ mạnh nhất. Công thức tường thuật trưởng thành", id="Tipe yang paling membuat pembaca bersorak. Narasi growth klasik"),
        charmPoint=M(ko=_ko_r(2, "charmPoint"), en="Moments of breaking limits. Readers cheer even at small growth", ja="限界を超える瞬間。小さな成長にも読者が歓声を上げる", **{"zh-CN": "突破极限的瞬间，小成长也让读者欢呼", "zh-TW": "突破極限的瞬間，小成長也讓讀者歡呼"}, vi="Khoảnh khắc vượt giới hạn. Cả tiến bộ nhỏ cũng khiến độc giả reo", id="Momen melampaui batas. Pertumbuhan kecil pun dibuat pembaca bersorak"),
        shiningScene=M(ko=_ko_r(2, "shiningScene"), en="The scene where skill is finally proven after no one believed", ja="誰も信じなかった時期を越え、ついに実力を証明する場面", **{"zh-CN": "度过无人相信的时期，终于证明实力的场景", "zh-TW": "度過無人相信的時期，終於證明實力的場景"}, vi="Cảnh cuối cùng chứng minh sức mạnh sau thời gian không ai tin", id="Adegan akhirnya membuktikan kemampuan setelah tidak ada yang percaya"),
        recommendedGenre=M(ko=_ko_r(2, "recommendedGenre"), en="Sports · Growth fantasy · Martial arts · Career stories", ja="スポーツ物・成長ファンタジー・武侠・職業物", **{"zh-CN": "运动·成长奇幻·武侠·职业向", "zh-TW": "運動·成長奇幻·武俠·職業向"}, vi="Thể thao · Fantasy trưởng thành · Võ hiệp · Nghề nghiệp", id="Olahraga · Fantasy pertumbuhan · Wuxia · Karier"),
        oneLiner=M(ko=_ko_r(2, "oneLiner"), en="Your story is the kind of webtoon where readers who started from the beginning stay the longest", ja="あなたの物語は最初から読んだ読者が最も長く残るウェブトゥーンです", **{"zh-CN": "你的故事是从开头追的读者留得最久的那种网漫", "zh-TW": "你的故事是從開頭追的讀者留得最久的那種網漫"}, vi="Câu chuyện của bạn là webtoon mà độc giả đọc từ đầu ở lại lâu nhất", id="Kisahmu adalah webtoon yang pembaca dari awal paling lama bertahan"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(2, "shareLine"), en="My webtoon protagonist type: Hard-Working Growth 🔥 Readers who started early cheer to the end... growth narrative hits → What webtoon protagonist are you?", ja="私のウェブトゥーン主人公タイプ：努力成長型 🔥 最初から読んだ読者が最後まで応援…成長物語共感 → あなたはどんなウェブトゥーン主人公？", **{"zh-CN": "我的网漫主角类型：努力成长型 🔥 从开头追的读者应援到最后…成长叙事共鸣 → 你是什么网漫主角？", "zh-TW": "我的網漫主角類型：努力成長型 🔥 從開頭追的讀者應援到最後…成長敘事共鳴 → 你是什麼網漫主角？"}, vi="Kiểu nhân vật chính webtoon của tôi: Trưởng thành bằng nỗ lực 🔥 Độc giả đọc từ đầu cổ vũ đến cuối… đồng cảm growth → Bạn là nhân vật webtoon gì?", id="Tipe protagonis webtoon-ku: Pertumbuhan berusaha 🔥 Pembaca dari awal dukung sampai akhir… narasi growth relate → Kamu protagonis webtoon apa?"),
    ),
    r(
        "Type4", "⚡",
        title=M(ko=_ko_r(3, "title"), en="Looks Ordinary, Actually OP Hidden Twist Protagonist", ja="見た目は平凡、実は最強、隠れた反転主人公", **{"zh-CN": "外表平凡实则无敌的隐藏反转主角", "zh-TW": "外表平凡實則無敵的隱藏反轉主角"}, vi="Nhân vật chính bình thường bên ngoài, thực ra OP, plot twist ẩn", id="Protagonis plot twist tersembunyi, terlihat biasa tapi OP"),
        shortDescription=M(ko=_ko_r(3, "shortDescription"), en="In your webtoon, readers know you have not shown your true self yet and wait.", ja="あなたが主人公のウェブトゥーンでは、読者は「まだ本当を見せていない」と知って待つ。", **{"zh-CN": "你是主角的网漫里，读者知道还没展现真身而等待。", "zh-TW": "你是主角的網漫裡，讀者知道還沒展現真身而等待。"}, vi="Trong webtoon của bạn, độc giả biết bạn chưa lộ bản thân thật và chờ đợi.", id="Di webtoon-mu, pembaca tahu kamu belum menunjukkan diri sebenarnya dan menunggu."),
        description=M(ko=_ko_r(3, "description"), en="Looks unremarkable on the surface but hidden power and twist charm explode at crisis or decisive moments. One of the most exciting narrative patterns. Readers feel the most satisfaction when side characters who ignored you panic later.", ja="表面は特別に見えないが、危機や決定的な瞬間に隠れた能力と反転魅力が爆発。最も熱狂する物語パターンの一つ。周りが最初は無視し、後で慌てる場面で読者が最大の快感。", **{"zh-CN": "表面不特别，危机或关键时刻隐藏能力与反转魅力爆发。最让读者狂热的叙事模式之一。周围起初无视、后来慌乱的场面最爽。", "zh-TW": "表面不特別，危機或關鍵時刻隱藏能力與反轉魅力爆發。最讓讀者狂熱的敘事模式之一。周圍起初無視、後來慌亂的場面最爽。"}, vi="Bề ngoài không đặc biệt nhưng năng lực ẩn và sức hút bất ngờ bùng nổ lúc khủng hoảng. Một trong những pattern khiến độc giả cuồng nhiệt nhất. Cảnh nhân vật phụ coi thường rồi hoảng loạn mang cảm giác thỏa mãn nhất.", id="Terlihat biasa di permukaan tapi kekuatan tersembunyi dan daya tarik twist meledak saat krisis. Salah satu pola narasi paling membuat pembaca antusias. Adegan karakter samping yang mengabaikan lalu panik paling memuaskan."),
        protagonistType=M(ko=_ko_r(3, "protagonistType"), en="Hidden Twist OP Type ⚡", ja="隠れた反転最強型 ⚡", **{"zh-CN": "隐藏反转无敌型 ⚡", "zh-TW": "隱藏反轉無敵型 ⚡"}, vi="Kiểu OP plot twist ẩn ⚡", id="Tipe OP plot twist tersembunyi ⚡"),
        appearingGenre=M(ko=_ko_r(3, "appearingGenre"), en="Isekai · Hunter stories · Fantasy · Regression · Possession", ja="異世界物・ハンター物・ファンタジー・回帰物・憑依物", **{"zh-CN": "异世界·猎人·奇幻·回归·附身", "zh-TW": "異世界·獵人·奇幻·回歸·附身"}, vi="Isekai · Hunter · Fantasy · Hồi quy · Chiếm thân", id="Isekai · Hunter · Fantasy · Regresi · Possession"),
        narrativePattern=M(ko=_ko_r(3, "narrativePattern"), en="Seemingly weak or ordinary at first, then true power revealed one by one", ja="最初は弱いか平凡に見え、本当の実力が一つずつ明らかになる物語", **{"zh-CN": "起初看似弱或普通，真正实力逐一显露的故事", "zh-TW": "起初看似弱或普通，真正實力逐一顯露的故事"}, vi="Ban đầu trông yếu hoặc bình thường, sức mạnh thật lần lượt lộ ra", id="Awalnya terlihat lemah atau biasa, lalu kekuatan sebenarnya terungkap satu per satu"),
        strength=M(ko=_ko_r(3, "strength"), en="The type readers wait for most. Maximum satisfaction at twist reveal scenes", ja="読者が最も待たせるタイプ。反転公開シーンの快感が最大", **{"zh-CN": "最让读者等待的类型，反转揭露场面爽感最高", "zh-TW": "最讓讀者等待的類型，反轉揭露場面爽感最高"}, vi="Kiểu khiến độc giả chờ đợi nhất. Cảnh lộ twist mang cảm giác thỏa mãn tối đa", id="Tipe yang paling membuat pembaca menunggu. Adegan reveal twist paling memuaskan"),
        charmPoint=M(ko=_ko_r(3, "charmPoint"), en="The moment a clueless villain looks down on you then hits the floor", ja="何も知らない悪役が見下して、床を見る瞬間", **{"zh-CN": "不知情的反派轻视你后趴地的瞬间", "zh-TW": "不知情的反派輕視你後趴地的瞬間"}, vi="Khoảnh khắc phản diện ngáo coi thường rồi nằm sấp", id="Momen villain yang meremehkan lalu terduduk"),
        shiningScene=M(ko=_ko_r(3, "shiningScene"), en="The scene where a \"I'm actually pretty strong\" twist is revealed", ja="「私、結構強いんですけど」級の反転が明らかになる場面", **{"zh-CN": "「我其实挺强的」级反转显露的场景", "zh-TW": "「我其實挺強的」級反轉顯露的場景"}, vi="Cảnh lộ twist kiểu \"Thực ra tôi khá mạnh đấy\"", id="Adegan reveal twist ala \"Sebenarnya aku cukup kuat\""),
        recommendedGenre=M(ko=_ko_r(3, "recommendedGenre"), en="Isekai · Hunter stories · Regression · Hidden power fantasy", ja="異世界・ハンター物・回帰・隠れた能力ファンタジー", **{"zh-CN": "异世界·猎人·回归·隐藏能力奇幻", "zh-TW": "異世界·獵人·回歸·隱藏能力奇幻"}, vi="Isekai · Hunter · Hồi quy · Fantasy năng lực ẩn", id="Isekai · Hunter · Regresi · Fantasy kekuatan tersembunyi"),
        oneLiner=M(ko=_ko_r(3, "oneLiner"), en="Your story is the kind of webtoon you cannot stop after enduring the early buildup for the twist", ja="あなたの物語は前半を我慢して読むと、反転で止められなくなるウェブトゥーンです", **{"zh-CN": "你的故事是忍过前期铺垫后在反转处停不下来的网漫", "zh-TW": "你的故事是忍過前期鋪墊後在反轉處停不下來的網漫"}, vi="Câu chuyện của bạn là webtoon chịu phần đầu rồi không dừng được ở twist", id="Kisahmu adalah webtoon yang setelah tahan awal, twist-nya bikin nggak bisa berhenti"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(3, "shareLine"), en="My webtoon protagonist type: Hidden Twist OP ⚡ Looks ordinary, actually OP... haven't shown the real deal lol → What protagonist are you? Genre included", ja="私のウェブトゥーン主人公タイプ：隠れた反転最強型 ⚡ 見た目は平凡、実は最強…本当はまだ見せてない ㅋㅋ → あなたはどんな主人公？ジャンルも出る", **{"zh-CN": "我的网漫主角类型：隐藏反转无敌型 ⚡ 外表平凡实则无敌…还没露真身 哈哈 → 你是什么主角？还有 genre", "zh-TW": "我的網漫主角類型：隱藏反轉無敵型 ⚡ 外表平凡實則無敵…還沒露真身 哈哈 → 你是什麼主角？還有 genre"}, vi="Kiểu nhân vật chính webtoon của tôi: OP plot twist ẩn ⚡ Bên ngoài bình thường, thực ra OP… chưa lộ bản thật haha → Bạn là nhân vật gì? Có thể loại", id="Tipe protagonis webtoon-ku: OP plot twist tersembunyi ⚡ Terlihat biasa, sebenarnya OP… belum tunjuk yang asli wkwk → Kamu protagonis apa? Genre juga keluar"),
    ),
    r(
        "Type5", "👑",
        title=M(ko=_ko_r(4, "title"), en="Overwhelming From the Start, Charismatic OP Protagonist", ja="最初から圧倒的、カリスマ最強主人公", **{"zh-CN": "从一开始就压倒性的魅力无敌主角", "zh-TW": "從一開始就壓倒性的魅力無敵主角"}, vi="Nhân vật chính OP charisma áp đảo ngay từ đầu", id="Protagonis OP karismatik yang overwhelming sejak awal"),
        shortDescription=M(ko=_ko_r(4, "shortDescription"), en="In your webtoon, readers wait each episode to see how much stronger you get.", ja="あなたが主人公のウェブトゥーンでは、読者は主人公がどれだけ強くなるかを見るために毎話待つ。", **{"zh-CN": "你是主角的网漫里，读者每话都在等看你还能多强。", "zh-TW": "你是主角的網漫裡，讀者每話都在等看你還能多強。"}, vi="Trong webtoon của bạn, độc giả chờ từng tập để xem bạn mạnh thêm bao nhiêu.", id="Di webtoon-mu, pembaca menunggu setiap episode untuk lihat seberapa kuat kamu lagi."),
        description=M(ko=_ko_r(4, "description"), en="Excellent and strong from the start, overwhelming those around you. A classic OP fantasy lead readers cheer for power and charisma. Seemingly flawless, but hidden loneliness or goals deepen the story.", ja="最初から優れて強く、周りを圧倒するタイプ。最強ファンタジーの典型主人公。能力値とカリスマに読者が熱狂。弱点がなさそうだが、裏の孤独や目標が加わると完全に引き込まれる。", **{"zh-CN": "从一开始就优秀强大，压倒周围。典型无敌奇幻主角，读者为能力值与魅力狂热。看似无弱点，但背后的孤独或目标让故事更上头。", "zh-TW": "從一開始就優秀強大，壓倒周圍。典型無敵奇幻主角，讀者為能力值與魅力狂熱。看似無弱點，但背後的孤獨或目標讓故事更上頭。"}, vi="Xuất sắc và mạnh ngay từ đầu, áp đảo mọi người xung quanh. Protagonis OP fantasy kinh điển. Dường như không có điểm yếu nhưng cô đơn hoặc mục tiêu ẩn làm câu chuyện cuốn hơn.", id="Unggul dan kuat sejak awal, mengalahkan sekitar. Protagonis OP fantasy klasik. Tampak tanpa kelemahan, tapi kesepian atau tujuan tersembunyi memperdalam cerita."),
        protagonistType=M(ko=_ko_r(4, "protagonistType"), en="Charismatic OP Type 👑", ja="カリスマ最強型 👑", **{"zh-CN": "魅力无敌型 👑", "zh-TW": "魅力無敵型 👑"}, vi="Kiểu OP charisma 👑", id="Tipe OP karismatik 👑"),
        appearingGenre=M(ko=_ko_r(4, "appearingGenre"), en="OP fantasy · Hunter stories · Chaebol stories · Power stories · Harem", ja="最強ファンタジー・ハンター物・財閥物・権力物・ハーレム物", **{"zh-CN": "无敌奇幻·猎人·财阀·权力·后宫", "zh-TW": "無敵奇幻·獵人·財閥·權力·後宮"}, vi="Fantasy OP · Hunter · Tài phiệt · Quyền lực · Harem", id="Fantasy OP · Hunter · Chaebol · Kekuasaan · Harem"),
        narrativePattern=M(ko=_ko_r(4, "narrativePattern"), en="A strong protagonist grows even stronger or reshapes the world", ja="最初から強い主人公がさらに強くなるか、世界を再編する物語", **{"zh-CN": "本就强大的主角变得更强或重塑世界的故事", "zh-TW": "本就強大的主角變得更強或重塑世界的故事"}, vi="Nhân vật mạnh từ đầu trở nên mạnh hơn hoặc tái lập thế giới", id="Protagonis kuat dari awal makin kuat atau membentuk ulang dunia"),
        strength=M(ko=_ko_r(4, "strength"), en="Readers feel the thrill of looking down at the world with the protagonist", ja="読者が主人公と一緒に世界を見下ろす快感を感じるタイプ", **{"zh-CN": "读者与主角一起俯瞰世界的爽感类型", "zh-TW": "讀者與主角一起俯瞰世界的爽感類型"}, vi="Kiểu khiến độc giả cùng nhân vật nhìn xuống thế giới", id="Tipe yang membuat pembaca merasakan sensasi menatap dunia bersama protagonis"),
        charmPoint=M(ko=_ko_r(4, "charmPoint"), en="Overwhelming scenes. Unshaken even against the strong", ja="圧倒的な場面。強者相手でも揺れない姿", **{"zh-CN": "压倒性场面，面对强者也纹丝不动", "zh-TW": "壓倒性場面，面對強者也紋絲不動"}, vi="Cảnh áp đảo. Trước kẻ mạnh cũng không lay chuyển", id="Adegan overwhelming. Tetap teguh melawan yang kuat"),
        shiningScene=M(ko=_ko_r(4, "shiningScene"), en="Facing all enemies at once and saying \"This should be enough\"", ja="すべての敵を一度に相手し「これくらいなら十分でしょう」と言う場面", **{"zh-CN": "同时对付所有敌人并说「这程度应该够了」的场景", "zh-TW": "同時對付所有敵人並說「這程度應該夠了」的場景"}, vi="Cảnh đối đầu mọi kẻ thù cùng lúc và nói \"Mức này là đủ rồi\"", id="Adegan melawan semua musuh sekaligus sambil bilang \"Segini cukup\""),
        recommendedGenre=M(ko=_ko_r(4, "recommendedGenre"), en="OP fantasy · SSS hunter stories · Chaebol heir stories · Regression OP", ja="最強ファンタジー・SSS級ハンター物・財閥2世物・回帰最強", **{"zh-CN": "无敌奇幻·SSS级猎人·财阀二代·回归无敌", "zh-TW": "無敵奇幻·SSS級獵人·財閥二代·回歸無敵"}, vi="Fantasy OP · Hunter SSS · Thế hệ tài phiệt · Hồi quy OP", id="Fantasy OP · Hunter SSS · Pewaris chaebol · Regresi OP"),
        oneLiner=M(ko=_ko_r(4, "oneLiner"), en="Your story is the kind of webtoon where readers cheer every time you appear", ja="あなたの物語は主人公が出るたびに読者が歓声を上げるウェブトゥーンです", **{"zh-CN": "你的故事是主角一出场读者就欢呼的那种网漫", "zh-TW": "你的故事是主角一出場讀者就歡呼的那種網漫"}, vi="Câu chuyện của bạn là webtoon mỗi lần bạn xuất hiện độc giả reo hò", id="Kisahmu adalah webtoon yang setiap protagonis muncul pembaca bersorak"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(4, "shareLine"), en="My webtoon protagonist type: Charismatic OP 👑 Overwhelming from the start... SSS OP webtoon lead lol → What protagonist are you?", ja="私のウェブトゥーン主人公タイプ：カリスマ最強型 👑 最初から圧倒的…SSS級最強ウェブトゥーン主人公 ㅋㅋ → あなたはどんな主人公？", **{"zh-CN": "我的网漫主角类型：魅力无敌型 👑 从一开始就压倒性…SSS级无敌网漫主角 哈哈 → 你是什么主角？", "zh-TW": "我的網漫主角類型：魅力無敵型 👑 從一開始就壓倒性…SSS級無敵網漫主角 哈哈 → 你是什麼主角？"}, vi="Kiểu nhân vật chính webtoon của tôi: OP charisma 👑 Áp đảo ngay từ đầu… protagonis webtoon OP SSS haha → Bạn là nhân vật gì?", id="Tipe protagonis webtoon-ku: OP karismatik 👑 Overwhelming sejak awal… protagonis webtoon OP SSS wkwk → Kamu protagonis apa?"),
    ),
    r(
        "Type6", "🌟",
        title=M(ko=_ko_r(5, "title"), en="Unique Protagonist Who Builds Fandom Across Any Genre", ja="ジャンル不問でファンダムを作る、個性爆発入坑主人公", **{"zh-CN": "不限题材都能圈粉的独特主角", "zh-TW": "不限題材都能圈粉的獨特主角"}, vi="Nhân vật chính độc đáo tạo fandom ở mọi thể loại", id="Protagonis unik yang membangun fandom di genre apa pun"),
        shortDescription=M(ko=_ko_r(5, "shortDescription"), en="In your webtoon, readers come for the protagonist no matter the genre.", ja="あなたが主人公のウェブトゥーンは、ジャンルが何でも読者は主人公のために来る。", **{"zh-CN": "你是主角的网漫里，无论什么题材读者都为看主角而来。", "zh-TW": "你是主角的網漫裡，無論什麼題材讀者都為看主角而來。"}, vi="Trong webtoon của bạn, dù thể loại gì độc giả cũng đến vì nhân vật chính.", id="Di webtoon-mu, apapun genrenya pembaca datang demi protagonis."),
        description=M(ko=_ko_r(5, "description"), en="Unique personality and presence that dominate any setting. In slice of life you look OP, in fantasy you feel emotional, in romance everyone else becomes background. Readers leave \"I love this protagonist\" comments in a row.", ja="どんな設定に入れてもその空間を支配する独自の個性と存在感。日常物でも最強に見え、ファンタジーでも感性が生き、ロマンスでも周りが脇役になる。読者が「主人公が好きすぎる」を連投するタイプ。", **{"zh-CN": "放进任何设定都能掌控空间的独特个性与存在感。日常像无敌，奇幻有情感，恋爱时旁人都成配角。读者会连刷「太喜欢主角了」。", "zh-TW": "放進任何設定都能掌控空間的獨特個性與存在感。日常像無敵，奇幻有情感，戀愛時旁人都成配角。讀者會連刷「太喜歡主角了」。"}, vi="Cá tính và presence chiếm lĩnh mọi bối cảnh. Slice of life trông như OP, fantasy vẫn có cảm xúc, romance thì người khác thành nền. Độc giả spam \"Quá thích nhân vật chính\".", id="Kepribadian dan presence unik yang mendominasi setting apa pun. Slice of life terlihat OP, fantasy tetap emosional, romance bikin yang lain jadi figuran. Pembaca spam \"Suka banget protagonisnya\"."),
        protagonistType=M(ko=_ko_r(5, "protagonistType"), en="Unique Fandom Magnet Type 🌟", ja="個性爆発入坑型 🌟", **{"zh-CN": "个性爆发入坑型 🌟", "zh-TW": "個性爆發入坑型 🌟"}, vi="Kiểu hút fandom độc đáo 🌟", id="Tipe magnet fandom unik 🌟"),
        appearingGenre=M(ko=_ko_r(5, "appearingGenre"), en="Any genre. A protagonist who sets a new standard wherever they appear", ja="ジャンル不問。どこに出てもそのジャンルの新基準を作る主人公", **{"zh-CN": "不限题材，出现在哪就为该题材树立新标准", "zh-TW": "不限題材，出現在哪就為該題材樹立新標準"}, vi="Mọi thể loại. Nhân vật tạo tiêu chuẩn mới ở bất cứ đâu xuất hiện", id="Genre apa pun. Protagonis yang membuat standar baru di mana pun muncul"),
        narrativePattern=M(ko=_ko_r(5, "narrativePattern"), en="A story that twists existing formulas or unfolds in entirely new directions", ja="既存の公式をねじるか、全く新しい方向に展開される物語", **{"zh-CN": "扭曲既有公式或朝全新方向展开的故事", "zh-TW": "扭曲既有公式或朝全新方向展開的故事"}, vi="Câu chuyện bẻ cong công thức cũ hoặc triển khai theo hướng hoàn toàn mới", id="Kisah yang memutarbalikkan formula lama atau berkembang ke arah baru"),
        strength=M(ko=_ko_r(5, "strength"), en="Memorable in any scene. Makes readers form their own interpretations", ja="どんな場面でも記憶に残る。読者が自分だけの解釈をするタイプ", **{"zh-CN": "任何场面都令人难忘，让读者产生自己的解读", "zh-TW": "任何場面都令人難忘，讓讀者產生自己的解讀"}, vi="Đáng nhớ ở mọi cảnh. Khiến độc giả tự giải thích theo cách riêng", id="Memorable di adegan apa pun. Membuat pembaca punya interpretasi sendiri"),
        charmPoint=M(ko=_ko_r(5, "charmPoint"), en="Unpredictability. No one knows what happens next", ja="予測不可能。次の話がどうなるか誰も分からない", **{"zh-CN": "不可预测，没人知道下一话会怎样", "zh-TW": "不可預測，沒人知道下一話會怎樣"}, vi="Không đoán trước được. Không ai biết tập sau ra sao", id="Tak terduga. Tidak ada yang tahu episode berikutnya"),
        shiningScene=M(ko=_ko_r(5, "shiningScene"), en="Completely overturning expectations then moving on casually", ja="予想を完全に裏切る行動の後、何でもないように流す場面", **{"zh-CN": "完全颠覆预期后若无其事带过的场景", "zh-TW": "完全顛覆預期後若無其事帶過的場景"}, vi="Cảnh hành động lật kỳ vọng rồi bình thản đi tiếp", id="Adegan tindakan yang membalikkan ekspektasi lalu lanjut santai"),
        recommendedGenre=M(ko=_ko_r(5, "recommendedGenre"), en="Genre mix · Unique new settings · Webtoons with strong author voice", ja="ジャンルミックス・独特な設定の新作・作家力の強い個性ウェブトゥーン", **{"zh-CN": "题材混搭·独特设定新作·作者功力强的个性网漫", "zh-TW": "題材混搭·獨特設定新作·作者功力強的個性網漫"}, vi="Pha thể loại · Tác phẩm mới setting độc · Webtoon cá tính tác giả mạnh", id="Mix genre · Karya baru setting unik · Webtoon personal penulis kuat"),
        oneLiner=M(ko=_ko_r(5, "oneLiner"), en="Your story is the kind of webtoon that must get a season 2 no matter the genre", ja="あなたの物語はどんなジャンルでもシーズン2が出るしかないウェブトゥーンです", **{"zh-CN": "你的故事是无论什么题材都不得不出第二季的网漫", "zh-TW": "你的故事是無論什麼題材都不得不出第二季的網漫"}, vi="Câu chuyện của bạn là webtoon dù thể loại gì cũng phải có season 2", id="Kisahmu adalah webtoon yang apapun genrenya harus dapat season 2"),
        certificationPhrase=M(
            ko=_ko_r(5, "certificationPhrase"),
            en="Unique Fandom Magnet Protagonist 🌟 My webtoon guarantees fandom in any genre",
            ja="個性爆発入坑主人公 🌟 私のウェブトゥーンはジャンル不問でファンダム保証",
            **{"zh-CN": "个性爆发入坑主角 🌟 我的网漫不限题材保证有粉圈", "zh-TW": "個性爆發入坑主角 🌟 我的網漫不限題材保證有粉圈"},
            vi="Nhân vật chính hút fandom độc đáo 🌟 Webtoon của tôi đảm bảo fandom mọi thể loại",
            id="Protagonis magnet fandom unik 🌟 Webtoon-ku jamin fandom di genre apa pun",
        ),
        shareLine=M(ko=_ko_r(5, "shareLine"), en="My webtoon protagonist type: Unique Fandom Magnet 🌟 Fandom in any genre... season 2 guaranteed lol → What webtoon protagonist are you?", ja="私のウェブトゥーン主人公タイプ：個性爆発入坑型 🌟 どんなジャンルでもファンダム…シーズン2保証 ㅋㅋ → あなたはどんなウェブトゥーン主人公？", **{"zh-CN": "我的网漫主角类型：个性爆发入坑型 🌟 什么题材都有粉…第二季保证 哈哈 → 你是什么网漫主角？", "zh-TW": "我的網漫主角類型：個性爆發入坑型 🌟 什麼題材都有粉…第二季保證 哈哈 → 你是什麼網漫主角？"}, vi="Kiểu nhân vật chính webtoon của tôi: Hút fandom độc đáo 🌟 Thể loại gì cũng có fan… đảm bảo season 2 haha → Bạn là nhân vật webtoon gì?", id="Tipe protagonis webtoon-ku: Magnet fandom unik 🌟 Genre apa pun ada fandom… season 2 guaranteed wkwk → Kamu protagonis webtoon apa?"),
    ),
]


def load_data() -> dict:
    return {"questions": QUESTIONS, "results": RESULTS}


def build_ts(data: dict) -> str:
    questions_ts = "\n".join(
        fmt_question(
            i + 1,
            q["question"],
            [(o["text"], o["score"]) for o in q["options"]],
        )
        for i, q in enumerate(data["questions"])
    )
    results_ts = "\n".join(fmt_result(r) for r in data["results"])
    return (
        HEADER
        + questions_ts
        + "\n];\n\nexport const phase3WebtoonProtagonistResults: Phase3WebtoonProtagonistResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    data = load_data()
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3WebtoonProtagonistData.ts"
    body = build_ts(data)
    out.write_text(body, encoding="utf-8")
    line_count = body.count("\n") + (0 if body.endswith("\n") else 1)
    print(f"Wrote {out}")
    print(f"Bytes: {len(body.encode('utf-8'))}")
    print(f"Lines: {line_count}")


if __name__ == "__main__":
    main()

