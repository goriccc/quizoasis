"""Generate lib/phase3PersonalityColorTemperatureData.ts with full 7-language localeMap() content."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
IMAGE_PREFIX = "p3_test_personality_color_temperature"

HEADER = """/** 내 성격의 감성 온도 — phase3-personality-color-temperature · 12문항 2지선다 · A=0(쿨) B=1(웜) · 7개 로케일 */

export type Phase3PersonalityColorTemperatureLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3PersonalityColorTemperatureLocaleKey, string>): Record<Phase3PersonalityColorTemperatureLocaleKey, string> {
  return t;
}

export interface Phase3PersonalityColorTemperatureQuestion {
  id: number;
  question: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  options: { image: string; label: Record<Phase3PersonalityColorTemperatureLocaleKey, string>; score: number }[];
}

export interface Phase3PersonalityColorTemperatureResult {
  type: string;
  emoji: string;
  title: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  shortDescription: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  description: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  temperatureCelsius: number;
  accentColor: string;
  emotionTemperature: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  emotionColor: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  emotionKeywords: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  strengthAtTemp: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  charmAtTemp: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  comfortableSpace: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  colorCodes: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  certificationPhrase: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  oneLiner: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
  shareLine: Record<Phase3PersonalityColorTemperatureLocaleKey, string>;
}

export function calculatePhase3PersonalityColorTemperatureResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 1) return 'Type1';
  if (total <= 3) return 'Type2';
  if (total <= 6) return 'Type3';
  if (total <= 9) return 'Type4';
  if (total <= 11) return 'Type5';
  return 'Type6';
}

const IMG = (n: number, choice: 'a' | 'b') => 'p3_test_personality_color_temperature_q' + String(n) + choice + '.webp';

export const phase3PersonalityColorTemperatureQuestions: Phase3PersonalityColorTemperatureQuestion[] = [
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


def M(**kwargs: str) -> dict[str, str]:
    return {loc: kwargs[loc] for loc in LOCALES}


EMPTY = M(ko="", en="", ja="", **{"zh-CN": "", "zh-TW": ""}, vi="", id="")


_gen_path = Path(__file__).resolve().parent / "gen_phase3_personality_color_temperature_data.py"
_gen_ns: dict = {}
exec(_gen_path.read_text(encoding="utf-8").split("\ndef esc")[0], _gen_ns)
KO_QUESTIONS = _gen_ns["QUESTIONS"]
KO_RESULTS = _gen_ns["RESULTS"]


def _ko_q(idx: int, key: str = "q") -> str:
    return KO_QUESTIONS[idx][key]


def _ko_r(idx: int, field: str) -> str:
    key_map = {
        "shortDescription": "short",
        "description": "desc",
        "certificationPhrase": "certification",
        "shareLine": "share",
    }
    return KO_RESULTS[idx][key_map.get(field, field)]


def opt(label: dict[str, str], score: int) -> tuple[dict[str, str], int]:
    return (label, score)


def q(question: dict[str, str], options: list[tuple[dict[str, str], int]]) -> dict:
    return {"question": question, "options": options}


def r(type_: str, emoji: str, temperature: int, accent: str, **fields: dict[str, str]) -> dict:
    return {"type": type_, "emoji": emoji, "temperatureCelsius": temperature, "accentColor": accent, **fields}


QUESTIONS = [
    q(
        M(
            ko=_ko_q(0),
            en="Which of the two spaces would you rather stay in?",
            ja="二つの空間のうち、どちらにもっと留まりたいですか？",
            **{"zh-CN": "两个空间中，你更想待在哪个？", "zh-TW": "兩個空間中，你更想待在哪個？"},
            vi="Trong hai không gian, bạn muốn ở lại nơi nào hơn?",
            id="Di antara dua ruang, mana yang lebih ingin kamu tinggali?",
        ),
        [
            opt(M(ko=_ko_q(0, "a"), en="The left space draws me more", ja="左の空間の方が惹かれる", **{"zh-CN": "左边的空间更吸引我", "zh-TW": "左邊的空間更吸引我"}, vi="Không gian bên trái hút tôi hơn", id="Ruang kiri lebih menarik"), 0),
            opt(M(ko=_ko_q(0, "b"), en="The right space draws me more", ja="右の空間の方が惹かれる", **{"zh-CN": "右边的空间更吸引我", "zh-TW": "右邊的空間更吸引我"}, vi="Không gian bên phải hút tôi hơn", id="Ruang kanan lebih menarik"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(1),
            en="Which of the two drinks do you want more right now?",
            ja="二つの飲み物のうち、今もっと飲みたいのは？",
            **{"zh-CN": "两种饮料中，你现在更想喝哪个？", "zh-TW": "兩種飲料中，你現在更想喝哪個？"},
            vi="Trong hai loại đồ uống, bạn muốn uống cái nào hơn ngay bây giờ?",
            id="Di antara dua minuman, mana yang lebih ingin kamu minum sekarang?",
        ),
        [
            opt(M(ko=_ko_q(1, "a"), en="The left drink draws me more", ja="左の飲み物の方が惹かれる", **{"zh-CN": "左边的饮料更吸引我", "zh-TW": "左邊的飲料更吸引我"}, vi="Đồ uống bên trái hút tôi hơn", id="Minuman kiri lebih menarik"), 0),
            opt(M(ko=_ko_q(1, "b"), en="The right drink draws me more", ja="右の飲み物の方が惹かれる", **{"zh-CN": "右边的饮料更吸引我", "zh-TW": "右邊的飲料更吸引我"}, vi="Đồ uống bên phải hút tôi hơn", id="Minuman kanan lebih menarik"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(2),
            en="Which of the two sceneries moves you more?",
            ja="二つの風景のうち、どちらがもっと感動的ですか？",
            **{"zh-CN": "两种风景中，哪个更打动你？", "zh-TW": "兩種風景中，哪個更打動你？"},
            vi="Trong hai khung cảnh, cái nào chạm đến bạn hơn?",
            id="Di antara dua pemandangan, mana yang lebih menyentuh?",
        ),
        [
            opt(M(ko=_ko_q(2, "a"), en="The left scenery is more moving", ja="左の風景の方が感動的", **{"zh-CN": "左边的风景更打动我", "zh-TW": "左邊的風景更打動我"}, vi="Khung cảnh bên trái chạm đến tôi hơn", id="Pemandangan kiri lebih menyentuh"), 0),
            opt(M(ko=_ko_q(2, "b"), en="The right scenery is more moving", ja="右の風景の方が感動的", **{"zh-CN": "右边的风景更打动我", "zh-TW": "右邊的風景更打動我"}, vi="Khung cảnh bên phải chạm đến tôi hơn", id="Pemandangan kanan lebih menyentuh"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(3),
            en="Which of the two color palettes draws you more?",
            ja="二つのカラーパレットのうち、どちらがもっと惹かれますか？",
            **{"zh-CN": "两种配色中，哪个更吸引你？", "zh-TW": "兩種配色中，哪個更吸引你？"},
            vi="Trong hai bảng màu, cái nào hút bạn hơn?",
            id="Di antara dua palet warna, mana yang lebih menarik?",
        ),
        [
            opt(M(ko=_ko_q(3, "a"), en="The left palette draws me more", ja="左のパレットの方が惹かれる", **{"zh-CN": "左边的配色更吸引我", "zh-TW": "左邊的配色更吸引我"}, vi="Bảng màu bên trái hút tôi hơn", id="Palet kiri lebih menarik"), 0),
            opt(M(ko=_ko_q(3, "b"), en="The right palette draws me more", ja="右のパレットの方が惹かれる", **{"zh-CN": "右边的配色更吸引我", "zh-TW": "右邊的配色更吸引我"}, vi="Bảng màu bên phải hút tôi hơn", id="Palet kanan lebih menarik"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(4),
            en="Which of the two materials or textures do you prefer?",
            ja="二つの素材・質感のうち、どちらが好きですか？",
            **{"zh-CN": "两种材质/质感中，你更喜欢哪个？", "zh-TW": "兩種材質/質感中，你更喜歡哪個？"},
            vi="Trong hai chất liệu/kết cấu, bạn thích cái nào hơn?",
            id="Di antara dua material/tekstur, mana yang lebih kamu suka?",
        ),
        [
            opt(M(ko=_ko_q(4, "a"), en="I prefer the left material", ja="左の素材の方が好き", **{"zh-CN": "我更喜欢左边的材质", "zh-TW": "我更喜歡左邊的材質"}, vi="Tôi thích chất liệu bên trái hơn", id="Saya lebih suka material kiri"), 0),
            opt(M(ko=_ko_q(4, "b"), en="I prefer the right material", ja="右の素材の方が好き", **{"zh-CN": "我更喜欢右边的材质", "zh-TW": "我更喜歡右邊的材質"}, vi="Tôi thích chất liệu bên phải hơn", id="Saya lebih suka material kanan"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(5),
            en="Which of the two skies appeals to you more?",
            ja="二つの空のうち、どちらがもっと心に響きますか？",
            **{"zh-CN": "两种天空，你更喜欢哪个？", "zh-TW": "兩種天空，你更喜歡哪個？"},
            vi="Trong hai bầu trời, cái nào khiến bạn thích hơn?",
            id="Di antara dua langit, mana yang lebih kamu suka?",
        ),
        [
            opt(M(ko=_ko_q(5, "a"), en="I like the left sky more", ja="左の空の方が好き", **{"zh-CN": "我更喜欢左边的天空", "zh-TW": "我更喜歡左邊的天空"}, vi="Tôi thích bầu trời bên trái hơn", id="Saya lebih suka langit kiri"), 0),
            opt(M(ko=_ko_q(5, "b"), en="I like the right sky more", ja="右の空の方が好き", **{"zh-CN": "我更喜欢右边的天空", "zh-TW": "我更喜歡右邊的天空"}, vi="Tôi thích bầu trời bên phải hơn", id="Saya lebih suka langit kanan"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(6),
            en="Which of the two flowers do you prefer?",
            ja="二つの花のうち、どちらが好きですか？",
            **{"zh-CN": "两种花中，你更喜欢哪个？", "zh-TW": "兩種花中，你更喜歡哪個？"},
            vi="Trong hai loài hoa, bạn thích cái nào hơn?",
            id="Di antara dua bunga, mana yang lebih kamu suka?",
        ),
        [
            opt(M(ko=_ko_q(6, "a"), en="I prefer the left flower", ja="左の花の方が好き", **{"zh-CN": "我更喜欢左边的花", "zh-TW": "我更喜歡左邊的花"}, vi="Tôi thích hoa bên trái hơn", id="Saya lebih suka bunga kiri"), 0),
            opt(M(ko=_ko_q(6, "b"), en="I prefer the right flower", ja="右の花の方が好き", **{"zh-CN": "我更喜欢右边的花", "zh-TW": "我更喜歡右邊的花"}, vi="Tôi thích hoa bên phải hơn", id="Saya lebih suka bunga kanan"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(7),
            en="Which of the two night atmospheres draws you more?",
            ja="二つの夜の雰囲気のうち、どちらがもっと惹かれますか？",
            **{"zh-CN": "两种夜晚氛围中，哪个更吸引你？", "zh-TW": "兩種夜晚氛圍中，哪個更吸引你？"},
            vi="Trong hai không khí ban đêm, cái nào hút bạn hơn?",
            id="Di antara dua suasana malam, mana yang lebih menarik?",
        ),
        [
            opt(M(ko=_ko_q(7, "a"), en="The left night draws me more", ja="左の夜の方が惹かれる", **{"zh-CN": "左边的夜晚更吸引我", "zh-TW": "左邊的夜晚更吸引我"}, vi="Đêm bên trái hút tôi hơn", id="Malam kiri lebih menarik"), 0),
            opt(M(ko=_ko_q(7, "b"), en="The right night draws me more", ja="右の夜の方が惹かれる", **{"zh-CN": "右边的夜晚更吸引我", "zh-TW": "右邊的夜晚更吸引我"}, vi="Đêm bên phải hút tôi hơn", id="Malam kanan lebih menarik"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(8),
            en="Which of the two animals do you prefer?",
            ja="二つの動物のうち、どちらが好きですか？",
            **{"zh-CN": "两种动物中，你更喜欢哪个？", "zh-TW": "兩種動物中，你更喜歡哪個？"},
            vi="Trong hai con vật, bạn thích cái nào hơn?",
            id="Di antara dua hewan, mana yang lebih kamu suka?",
        ),
        [
            opt(M(ko=_ko_q(8, "a"), en="I prefer the left animal", ja="左の動物の方が好き", **{"zh-CN": "我更喜欢左边的动物", "zh-TW": "我更喜歡左邊的動物"}, vi="Tôi thích con vật bên trái hơn", id="Saya lebih suka hewan kiri"), 0),
            opt(M(ko=_ko_q(8, "b"), en="I prefer the right animal", ja="右の動物の方が好き", **{"zh-CN": "我更喜欢右边的动物", "zh-TW": "我更喜歡右邊的動物"}, vi="Tôi thích con vật bên phải hơn", id="Saya lebih suka hewan kanan"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(9),
            en="Which of the two fashion colors draws you more?",
            ja="二つのファッションカラーのうち、どちらがもっと惹かれますか？",
            **{"zh-CN": "两种时尚配色中，哪个更吸引你？", "zh-TW": "兩種時尚配色中，哪個更吸引你？"},
            vi="Trong hai phối màu thời trang, cái nào hút bạn hơn?",
            id="Di antara dua warna fashion, mana yang lebih menarik?",
        ),
        [
            opt(M(ko=_ko_q(9, "a"), en="The left outfit draws me more", ja="左のコーデの方が惹かれる", **{"zh-CN": "左边的搭配更吸引我", "zh-TW": "左邊的搭配更吸引我"}, vi="Phối đồ bên trái hút tôi hơn", id="Outfit kiri lebih menarik"), 0),
            opt(M(ko=_ko_q(9, "b"), en="The right outfit draws me more", ja="右のコーデの方が惹かれる", **{"zh-CN": "右边的搭配更吸引我", "zh-TW": "右邊的搭配更吸引我"}, vi="Phối đồ bên phải hút tôi hơn", id="Outfit kanan lebih menarik"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(10),
            en="Which of the two desserts do you want to eat more?",
            ja="二つのデザートのうち、どちらをもっと食べたいですか？",
            **{"zh-CN": "两种甜点中，你更想吃哪个？", "zh-TW": "兩種甜點中，你更想吃哪個？"},
            vi="Trong hai món tráng miệng, bạn muốn ăn cái nào hơn?",
            id="Di antara dua dessert, mana yang lebih ingin kamu makan?",
        ),
        [
            opt(M(ko=_ko_q(10, "a"), en="I want the left dessert more", ja="左のデザートの方が食べたい", **{"zh-CN": "我更想吃左边的甜点", "zh-TW": "我更想吃左邊的甜點"}, vi="Tôi muốn ăn món tráng miệng bên trái hơn", id="Saya lebih ingin dessert kiri"), 0),
            opt(M(ko=_ko_q(10, "b"), en="I want the right dessert more", ja="右のデザートの方が食べたい", **{"zh-CN": "我更想吃右边的甜点", "zh-TW": "我更想吃右邊的甜點"}, vi="Tôi muốn ăn món tráng miệng bên phải hơn", id="Saya lebih ingin dessert kanan"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(11),
            en="Which of the two ocean views appeals to you more?",
            ja="二つの海の風景のうち、どちらがもっと心に響きますか？",
            **{"zh-CN": "两种海景中，你更喜欢哪个？", "zh-TW": "兩種海景中，你更喜歡哪個？"},
            vi="Trong hai khung cảnh biển, cái nào khiến bạn thích hơn?",
            id="Di antara dua pemandangan laut, mana yang lebih kamu suka?",
        ),
        [
            opt(M(ko=_ko_q(11, "a"), en="I like the left ocean more", ja="左の海の方が好き", **{"zh-CN": "我更喜欢左边的海", "zh-TW": "我更喜歡左邊的海"}, vi="Tôi thích biển bên trái hơn", id="Saya lebih suka laut kiri"), 0),
            opt(M(ko=_ko_q(11, "b"), en="I like the right ocean more", ja="右の海の方が好き", **{"zh-CN": "我更喜欢右边的海", "zh-TW": "我更喜歡右邊的海"}, vi="Tôi thích biển bên phải hơn", id="Saya lebih suka laut kanan"), 1),
        ],
    ),
]

RESULTS = [
    r(
        "Type1", "🔵", -10, "#0A2342",
        title=M(
            ko=_ko_r(0, "title"),
            en="Deep and quiet independence — Deep Ocean Blue",
            ja="深く静かな独立の温度、Deep Ocean Blue",
            **{"zh-CN": "深沉静谧的独立温度，Deep Ocean Blue", "zh-TW": "深沉靜謐的獨立溫度，Deep Ocean Blue"},
            vi="Độc lập sâu lắng và tĩnh lặng — Deep Ocean Blue",
            id="Kemandirian dalam dan tenang — Deep Ocean Blue",
        ),
        shortDescription=M(
            ko=_ko_r(0, "shortDescription"),
            en="Your emotions are like a deep, quiet ocean. You may seem cold, but there is depth inside that no one else knows.",
            ja="あなたの感性は深く静かな海のようです。冷たく感じられますが、その中には誰も知らない深さがあります。",
            **{"zh-CN": "你的感性与深邃静谧的大海相似。看似冷淡，内心却有无人知晓的深度。", "zh-TW": "你的感性與深邃靜謐的大海相似。看似冷淡，內心卻有無人知曉的深度。"},
            vi="Cảm xúc của bạn giống một đại dương sâu và tĩnh lặng. Có vẻ lạnh nhưng bên trong có chiều sâu không ai biết.",
            id="Emosimu seperti lautan dalam dan tenang. Terlihat dingin, tapi ada kedalaman yang tidak diketahui siapa pun.",
        ),
        description=M(
            ko=_ko_r(0, "description"),
            en="You are drawn to cool and quiet things more than warmth, recharge in your own space rather than crowded places, and rarely show your emotions easily. Independent, intellectual, and with a clear inner world.",
            ja="暖かいものより冷たく静かなものに惹かれ、人混みより一人の空間で充電し、感情を簡単には見せないタイプです。独立的で知的、自分だけの世界がはっきりしています。",
            **{"zh-CN": "比起温暖，你更被冷静安静的事物吸引；比起人群，更在独处中充电；不轻易表露情绪。独立、理性，拥有清晰内心世界。", "zh-TW": "比起溫暖，你更被冷靜安靜的事物吸引；比起人群，更在獨處中充電；不輕易表露情緒。獨立、理性，擁有清晰內心世界。"},
            vi="Bạn bị cuốn vào sự mát mẻ và tĩnh lặng hơn là ấm áp, nạp năng lượng khi ở một mình hơn là nơi đông người, và khó bộc lộ cảm xúc. Độc lập, trí tuệ, có thế giới riêng rõ rệt.",
            id="Lebih tertarik pada yang dingin dan tenang daripada hangat, mengisi ulang di ruang sendiri daripada tempat ramai, dan jarang menunjukkan emosi. Mandiri, intelektual, dengan dunia batin yang jelas.",
        ),
        emotionTemperature=M(ko=_ko_r(0, "emotionTemperature"), en="-10°C", ja="-10°C", **{"zh-CN": "-10°C", "zh-TW": "-10°C"}, vi="-10°C", id="-10°C"),
        emotionColor=M(ko=_ko_r(0, "emotionColor"), en="Deep Ocean Blue", ja="Deep Ocean Blue", **{"zh-CN": "Deep Ocean Blue", "zh-TW": "Deep Ocean Blue"}, vi="Deep Ocean Blue", id="Deep Ocean Blue"),
        emotionKeywords=M(
            ko=_ko_r(0, "emotionKeywords"),
            en="Independence · Depth · Quiet · Intellectual · Restraint",
            ja="独立・深さ・静けさ・知性・節制",
            **{"zh-CN": "独立·深度·静谧·理性·克制", "zh-TW": "獨立·深度·靜謐·理性·克制"},
            vi="Độc lập · Chiều sâu · Tĩnh lặng · Trí tuệ · Tiết chế",
            id="Kemandirian · Kedalaman · Ketenangan · Intelektual · Pengendalian",
        ),
        strengthAtTemp=M(
            ko=_ko_r(0, "strengthAtTemp"),
            en="An unshakable inner center. You do not get excited easily and view situations calmly.",
            ja="揺るがない内面の中心。簡単に興奮せず、冷静に状況を見られます。",
            **{"zh-CN": "不动摇的内心中心。不易激动，冷静看待局面。", "zh-TW": "不動搖的內心中心。不易激動，冷靜看待局面。"},
            vi="Trung tâm nội tâm vững vàng. Khó bị kích động và nhìn tình huống một cách lạnh lùng.",
            id="Pusat batin yang tak goyah. Tidak mudah terbawa emosi dan melihat situasi dengan tenang.",
        ),
        charmAtTemp=M(
            ko=_ko_r(0, "charmAtTemp"),
            en="You seem cold at first, but the deeper people know you, the more depth they see. Hard to get close to, but once close, the bond is the deepest.",
            ja="最初は冷たく見えますが、知れば知るほど深い面が現れます。近づきにくいですが、近づけば最も深い関係になります。",
            **{"zh-CN": "起初显得冷淡，越了解越见深度。难以靠近，但一旦靠近关系最深厚。", "zh-TW": "起初顯得冷淡，越了解越見深度。難以靠近，但一旦靠近關係最深厚。"},
            vi="Ban đầu có vẻ lạnh, nhưng càng hiểu càng thấy chiều sâu. Khó gần, nhưng khi gần thì mối quan hệ sâu nhất.",
            id="Awalnya terlihat dingin, tapi makin dikenal makin terlihat kedalamannya. Sulit didekati, tapi begitu dekat hubungannya paling dalam.",
        ),
        comfortableSpace=M(
            ko=_ko_r(0, "comfortableSpace"),
            en="A quiet study · a window seat · a solo walk · dawn streets",
            ja="静かな書斎・窓際の席・一人歩きの散歩道・明け方の街",
            **{"zh-CN": "安静的书房·窗边座位·独自散步的小路·清晨街道", "zh-TW": "安靜的書房·窗邊座位·獨自散步的小路·清晨街道"},
            vi="Phòng đọc yên tĩnh · ghế cạnh cửa sổ · lối đi bộ một mình · phố lúc bình minh",
            id="Ruang baca tenang · kursi dekat jendela · jalan sendirian · jalanan saat fajar",
        ),
        colorCodes=M(
            ko=_ko_r(0, "colorCodes"),
            en="Deep Navy #0A2342 · Steel Blue #4682B4 · Abyss Blue #041F3C",
            ja="Deep Navy #0A2342 · Steel Blue #4682B4 · Abyss Blue #041F3C",
            **{"zh-CN": "Deep Navy #0A2342 · Steel Blue #4682B4 · Abyss Blue #041F3C", "zh-TW": "Deep Navy #0A2342 · Steel Blue #4682B4 · Abyss Blue #041F3C"},
            vi="Deep Navy #0A2342 · Steel Blue #4682B4 · Abyss Blue #041F3C",
            id="Deep Navy #0A2342 · Steel Blue #4682B4 · Abyss Blue #041F3C",
        ),
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(0, "oneLiner"),
            en="Your coolness is not coldness. It is depth.",
            ja="あなたの冷たさは冷徹ではありません。深さです。",
            **{"zh-CN": "你的冷不是冷漠，是深度。", "zh-TW": "你的冷不是冷漠，是深度。"},
            vi="Sự lạnh của bạn không phải lạnh lùng. Đó là chiều sâu.",
            id="Kedinginanmu bukan ketidakpedulian. Itu kedalaman.",
        ),
        shareLine=M(
            ko=_ko_r(0, "shareLine"),
            en="My emotional temperature: Deep Ocean Blue 🔵 -10°C — cool and deep emotions... not cold, just deep lol → What is yours? You get a color too",
            ja="私の感性温度: Deep Ocean Blue 🔵 -10°C 冷たくて深い感性らしい…冷たいんじゃなくて深いって合ってる ㅋㅋ → あなたは何度？色も出るよ",
            **{"zh-CN": "我的感性温度：Deep Ocean Blue 🔵 -10°C 冷淡又深邃…不是冷，是深 哈哈 → 你是几度？还会出颜色", "zh-TW": "我的感性溫度：Deep Ocean Blue 🔵 -10°C 冷淡又深邃…不是冷，是深 哈哈 → 你是幾度？還會出顏色"},
            vi="Nhiệt độ cảm xúc của tôi: Deep Ocean Blue 🔵 -10°C — lạnh và sâu... không phải lạnh lùng mà là sâu ㅋㅋ → Bạn mấy độ? Còn ra màu nữa",
            id="Suhu emosiku: Deep Ocean Blue 🔵 -10°C — dingin dan dalam... bukan dingin, tapi dalam ㅋㅋ → Kamu berapa derajat? Warna juga keluar",
        ),
    ),
    r(
        "Type2", "🩵", 5, "#AAF0D1",
        title=M(
            ko=_ko_r(1, "title"),
            en="Fresh and restrained emotion — Ice Mint",
            ja="清涼で節制された感性の温度、Ice Mint",
            **{"zh-CN": "清爽而节制的感性温度，Ice Mint", "zh-TW": "清爽而節制的感性溫度，Ice Mint"},
            vi="Cảm xúc thanh mát và tiết chế — Ice Mint",
            id="Emosi segar dan terkendali — Ice Mint",
        ),
        shortDescription=M(
            ko=_ko_r(1, "shortDescription"),
            en="Your emotions are like early spring dawn air. Cool, yet somehow fresh — restrained, but not emotionless.",
            ja="あなたの感性は早春の明け方の空気のようです。冷たいですがどこか爽やかで、節制されていますが無感情ではありません。",
            **{"zh-CN": "你的感性像早春清晨的空气。虽冷却清新，克制但并非没有情感。", "zh-TW": "你的感性像早春清晨的空氣。雖冷卻清新，克制但並非沒有情感。"},
            vi="Cảm xúc của bạn như không khí bình minh đầu xuân. Mát mẻ nhưng tươi mới, tiết chế nhưng không vô cảm.",
            id="Emosimu seperti udara fajar awal musim semi. Dingin tapi segar, terkendali tapi bukan tanpa perasaan.",
        ),
        description=M(
            ko=_ko_r(1, "description"),
            en="An emotional temperature somewhere between cool and fresh — drawn to cool things but not completely cold. You have feelings but do not overexpress them, and you are independent without wanting total solitude. You keep warm relationships at a comfortable distance.",
            ja="クールと清涼の間にある感性温度です。冷たいものに惹かれますが完全に冷たいわけではなく、感情はあるのに過剰に表現せず、独立していますが完全な孤独は望みません。適度な距離で温かい関係を保つタイプです。",
            **{"zh-CN": "处于酷与清爽之间的感性温度。被冷色吸引但并非完全冷淡；有情感却不夸张表达；独立但不追求完全孤独。在适当距离维持温暖关系。", "zh-TW": "處於酷與清爽之間的感性溫度。被冷色吸引但並非完全冷淡；有情感卻不誇張表達；獨立但不追求完全孤獨。在適當距離維持溫暖關係。"},
            vi="Nhiệt độ cảm xúc nằm giữa cool và thanh mát — thích cái lạnh nhưng không hoàn toàn lạnh. Có cảm xúc nhưng không bộc lộ quá, độc lập nhưng không muốn cô đơn tuyệt đối. Giữ mối quan hệ ấm ở khoảng cách vừa phải.",
            id="Suhu emosi di antara cool dan segar — tertarik pada yang dingin tapi tidak sepenuhnya dingin. Punya perasaan tapi tidak berlebihan, mandiri tapi tidak ingin kesepian total. Menjaga hubungan hangat pada jarak yang pas.",
        ),
        emotionTemperature=M(ko=_ko_r(1, "emotionTemperature"), en="5°C", ja="5°C", **{"zh-CN": "5°C", "zh-TW": "5°C"}, vi="5°C", id="5°C"),
        emotionColor=M(ko=_ko_r(1, "emotionColor"), en="Ice Mint", ja="Ice Mint", **{"zh-CN": "Ice Mint", "zh-TW": "Ice Mint"}, vi="Ice Mint", id="Ice Mint"),
        emotionKeywords=M(
            ko=_ko_r(1, "emotionKeywords"),
            en="Freshness · Restraint · Emotion · Balance · Clean",
            ja="清涼感・節制・感性・バランス・新鮮さ",
            **{"zh-CN": "清爽·节制·感性·平衡·新鲜", "zh-TW": "清爽·節制·感性·平衡·新鮮"},
            vi="Thanh mát · Tiết chế · Cảm xúc · Cân bằng · Tươi mới",
            id="Kesegaran · Pengendalian · Emosi · Keseimbangan · Segar",
        ),
        strengthAtTemp=M(
            ko=_ko_r(1, "strengthAtTemp"),
            en="Balance that is neither cold nor hot. You can be emotional yet make rational judgments.",
            ja="冷たくも熱くもないバランス。感情的でありながら理性的な判断もできます。",
            **{"zh-CN": "既不冷也不热的平衡。有情感也能理性判断。", "zh-TW": "既不冷也不熱的平衡。有情感也能理性判斷。"},
            vi="Cân bằng không lạnh cũng không nóng. Vừa cảm xúc vừa phán đoán lý trí.",
            id="Keseimbangan yang tidak dingin maupun panas. Bisa emosional sekaligus rasional.",
        ),
        charmAtTemp=M(
            ko=_ko_r(1, "charmAtTemp"),
            en="You look cool but have an unexpectedly emotional side. That gap is your charm.",
            ja="クールに見えるのに意外と感性的な面があります。そのギャップが魅力ポイントです。",
            **{"zh-CN": "看起来酷，却有意外感性的一面。这种反差就是魅力。", "zh-TW": "看起來酷，卻有意外感性的一面。這種反差就是魅力。"},
            vi="Trông cool nhưng bất ngờ có mặt cảm xúc. Khoảng cách đó chính là điểm hút.",
            id="Terlihat cool tapi ternyata emosional. Celah itu jadi daya tarik.",
        ),
        comfortableSpace=M(
            ko=_ko_r(1, "comfortableSpace"),
            en="A cafe with big windows · a tidy studio · an early-morning park",
            ja="大きな窓のあるカフェ・整った作業室・早朝の公園",
            **{"zh-CN": "有大窗户的咖啡馆·整洁的工作室·清晨的公园", "zh-TW": "有大窗戶的咖啡館·整潔的工作室·清晨的公園"},
            vi="Quán cà phê cửa sổ lớn · studio gọn gàng · công viên sáng sớm",
            id="Kafe jendela besar · studio rapi · taman pagi hari",
        ),
        colorCodes=M(
            ko=_ko_r(1, "colorCodes"),
            en="Ice Mint #AAF0D1 · Seafoam #B2FFEF · Cool Gray #8DA9C4",
            ja="Ice Mint #AAF0D1 · Seafoam #B2FFEF · Cool Gray #8DA9C4",
            **{"zh-CN": "Ice Mint #AAF0D1 · Seafoam #B2FFEF · Cool Gray #8DA9C4", "zh-TW": "Ice Mint #AAF0D1 · Seafoam #B2FFEF · Cool Gray #8DA9C4"},
            vi="Ice Mint #AAF0D1 · Seafoam #B2FFEF · Cool Gray #8DA9C4",
            id="Ice Mint #AAF0D1 · Seafoam #B2FFEF · Cool Gray #8DA9C4",
        ),
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(1, "oneLiner"),
            en="Your emotions are fresh — like a sip of cold water on a summer dawn.",
            ja="あなたの感性は清涼です。夏の明け方の一口の冷たい水のように。",
            **{"zh-CN": "你的感性很清爽，像夏日清晨的一口冷水。", "zh-TW": "你的感性很清爽，像夏日清晨的一口冷水。"},
            vi="Cảm xúc của bạn thanh mát — như một ngụm nước lạnh lúc bình minh mùa hè.",
            id="Emosimu segar — seperti tegukan air dingin di fajar musim panas.",
        ),
        shareLine=M(
            ko=_ko_r(1, "shareLine"),
            en="My emotional temperature: Ice Mint 🩵 5°C — fresh and restrained emotions... cool but emotional, right? → What is yours? Screenshot your color result",
            ja="私の感性温度: Ice Mint 🩵 5°C 清涼で節制された感性らしい…クールなのに感性的って合ってる → あなたは何度？色結果キャプチャして",
            **{"zh-CN": "我的感性温度：Ice Mint 🩵 5°C 清爽又节制…酷但有感性，对吧 → 你是几度？截图颜色结果", "zh-TW": "我的感性溫度：Ice Mint 🩵 5°C 清爽又節制…酷但有感性，對吧 → 你是幾度？截圖顏色結果"},
            vi="Nhiệt độ cảm xúc của tôi: Ice Mint 🩵 5°C — thanh mát và tiết chế... cool mà cảm xúc, đúng không → Bạn mấy độ? Chụp kết quả màu đi",
            id="Suhu emosiku: Ice Mint 🩵 5°C — segar dan terkendali... cool tapi emosional, kan → Kamu berapa derajat? Screenshot hasil warna",
        ),
    ),
    r(
        "Type3", "💜", 18, "#9683A3",
        title=M(
            ko=_ko_r(2, "title"),
            en="Mysterious and dreamy boundary — Lavender Violet",
            ja="神秘的で幻想的な境界の温度、Lavender Violet",
            **{"zh-CN": "神秘梦幻的边界温度，Lavender Violet", "zh-TW": "神秘夢幻的邊界溫度，Lavender Violet"},
            vi="Ran giới huyền bí và mơ màng — Lavender Violet",
            id="Batas misterius dan dreamy — Lavender Violet",
        ),
        shortDescription=M(
            ko=_ko_r(2, "shortDescription"),
            en="Your emotions are neither cold nor warm. Like dusk between spring and summer, two things exist at once.",
            ja="あなたの感性は冷たくも暖かくもありません。春と夏の間、夕暮れのように二つが同時に存在します。",
            **{"zh-CN": "你的感性既不冷也不暖。像春夏之间的黄昏，两种状态同时存在。", "zh-TW": "你的感性既不冷也不暖。像春夏之間的黃昏，兩種狀態同時存在。"},
            vi="Cảm xúc của bạn không lạnh cũng không ấm. Như hoàng hôn giữa xuân và hè, hai thứ cùng tồn tại.",
            id="Emosimu tidak dingin maupun hangat. Seperti senja antara musim semi dan panas, dua hal ada sekaligus.",
        ),
        description=M(
            ko=_ko_r(2, "description"),
            en="An emotional temperature that belongs fully to neither cool nor warm tones. Drawn to both cool and warm things, both sides show depending on the situation. Complex, mysterious, and hard to define simply.",
            ja="クールトーンにもウォームトーンにも完全には属さない感性温度です。冷たいものにも暖かいものにも惹かれ、状況によって両方の感性が現れます。複合的で神秘的、単純には定義できない深さがあります。",
            **{"zh-CN": "不完全属于冷色或暖色的感性温度。既被冷色也被暖色吸引，随情境展现两种感性。复杂神秘，难以简单定义。", "zh-TW": "不完全屬於冷色或暖色的感性溫度。既被冷色也被暖色吸引，隨情境展現兩種感性。複雜神秘，難以簡單定義。"},
            vi="Nhiệt độ cảm xúc không thuộc hoàn toàn cool hay warm. Bị cuốn cả hai, tùy tình huống mà lộ ra. Phức tạp, bí ẩn, khó định nghĩa đơn giản.",
            id="Suhu emosi yang tidak sepenuhnya cool atau warm. Tertarik keduanya, keduanya muncul sesuai situasi. Kompleks, misterius, sulit didefinisikan sederhana.",
        ),
        emotionTemperature=M(ko=_ko_r(2, "emotionTemperature"), en="18°C", ja="18°C", **{"zh-CN": "18°C", "zh-TW": "18°C"}, vi="18°C", id="18°C"),
        emotionColor=M(ko=_ko_r(2, "emotionColor"), en="Lavender Violet", ja="Lavender Violet", **{"zh-CN": "Lavender Violet", "zh-TW": "Lavender Violet"}, vi="Lavender Violet", id="Lavender Violet"),
        emotionKeywords=M(
            ko=_ko_r(2, "emotionKeywords"),
            en="Mystery · Dreamy · Complex · Boundary · Depth",
            ja="神秘・幻想・複合・境界・深さ",
            **{"zh-CN": "神秘·梦幻·复合·边界·深度", "zh-TW": "神秘·夢幻·複合·邊界·深度"},
            vi="Bí ẩn · Mơ màng · Phức tạp · Ranh giới · Chiều sâu",
            id="Misteri · Dreamy · Kompleks · Batas · Kedalaman",
        ),
        strengthAtTemp=M(
            ko=_ko_r(2, "strengthAtTemp"),
            en="Flexibility to blend into any mood. You can respond both coolly and warmly.",
            ja="どんな雰囲気にも溶け込む柔軟さ。冷たくも暖かくも対応できます。",
            **{"zh-CN": "融入任何氛围的灵活。既能冷也能暖。", "zh-TW": "融入任何氛圍的靈活。既能冷也能暖。"},
            vi="Linh hoạt hòa vào mọi không khí. Có thể phản ứng cả lạnh lẫn ấm.",
            id="Fleksibilitas menyatu dengan suasana apa pun. Bisa merespons dingin maupun hangat.",
        ),
        charmAtTemp=M(
            ko=_ko_r(2, "charmAtTemp"),
            en="Hard to define — and that is your biggest charm. The more people know you, the more new sides appear.",
            ja="定義しにくいことが最大の魅力です。知れば知るほど新しい面が現れます。",
            **{"zh-CN": "难以定义就是最大魅力。越了解越出现新面貌。", "zh-TW": "難以定義就是最大魅力。越了解越出現新面貌。"},
            vi="Khó định nghĩa — và đó là điểm hút lớn nhất. Càng hiểu càng thấy mặt mới.",
            id="Sulit didefinisikan — dan itu daya tarik terbesarmu. Makin dikenal makin muncul sisi baru.",
        ),
        comfortableSpace=M(
            ko=_ko_r(2, "comfortableSpace"),
            en="A cafe at dusk · a lavender field · a window on a cloudy afternoon",
            ja="夕暮れのカフェ・ラベンダー畑・曇りの午後の窓辺",
            **{"zh-CN": "黄昏的咖啡馆·薰衣草田·阴天下午的窗边", "zh-TW": "黃昏的咖啡館·薰衣草田·陰天下午的窗邊"},
            vi="Quán cà phê lúc hoàng hôn · cánh đồng oải hương · cửa sổ buổi chiều u ám",
            id="Kafe saat senja · ladang lavender · jendela sore mendung",
        ),
        colorCodes=M(
            ko=_ko_r(2, "colorCodes"),
            en="Lavender #E6E6FA · Mauve #B784A7 · Dusty Violet #9683A3",
            ja="Lavender #E6E6FA · Mauve #B784A7 · Dusty Violet #9683A3",
            **{"zh-CN": "Lavender #E6E6FA · Mauve #B784A7 · Dusty Violet #9683A3", "zh-TW": "Lavender #E6E6FA · Mauve #B784A7 · Dusty Violet #9683A3"},
            vi="Lavender #E6E6FA · Mauve #B784A7 · Dusty Violet #9683A3",
            id="Lavender #E6E6FA · Mauve #B784A7 · Dusty Violet #9683A3",
        ),
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(2, "oneLiner"),
            en="You cannot be described in one color. That is your most charming part.",
            ja="あなたは一つの色では説明できません。それが最も魅力的な部分です。",
            **{"zh-CN": "你无法用一种颜色描述。这正是最迷人的部分。", "zh-TW": "你無法用一種顏色描述。這正是最迷人的部分。"},
            vi="Bạn không thể mô tả bằng một màu. Đó là phần quyến rũ nhất.",
            id="Kamu tidak bisa dijelaskan dengan satu warna. Itu bagian paling menarikmu.",
        ),
        shareLine=M(
            ko=_ko_r(2, "shareLine"),
            en="My emotional temperature: Lavender Violet 💜 18°C — neither cool nor warm... can not be one color, right lol → What is yours?",
            ja="私の感性温度: Lavender Violet 💜 18°C クールでもウォームでもない境界らしい…一色で説明できないって合ってる ㅋㅋ → あなたは何度？",
            **{"zh-CN": "我的感性温度：Lavender Violet 💜 18°C 既不冷也不暖…无法用一种颜色描述，对吧 哈哈 → 你是几度？", "zh-TW": "我的感性溫度：Lavender Violet 💜 18°C 既不冷也不暖…無法用一種顏色描述，對吧 哈哈 → 你是幾度？"},
            vi="Nhiệt độ cảm xúc của tôi: Lavender Violet 💜 18°C — không cool cũng không warm... không mô tả bằng một màu, đúng không ㅋㅋ → Bạn mấy độ?",
            id="Suhu emosiku: Lavender Violet 💜 18°C — bukan cool bukan warm... tidak bisa satu warna, kan ㅋㅋ → Kamu berapa derajat?",
        ),
    ),
    r(
        "Type4", "🍑", 28, "#FF7F50",
        title=M(
            ko=_ko_r(3, "title"),
            en="Soft and caring warmth — Peach Coral",
            ja="柔らかく思いやりのある温かさ、Peach Coral",
            **{"zh-CN": "柔软体贴的温暖，Peach Coral", "zh-TW": "柔軟體貼的溫暖，Peach Coral"},
            vi="Sự ấm áp mềm mại và quan tâm — Peach Coral",
            id="Kehangatan lembut dan penuh perhatian — Peach Coral",
        ),
        shortDescription=M(
            ko=_ko_r(3, "shortDescription"),
            en="Your emotions are like warm spring sunlight. Not hot, but warmth naturally reaches those beside you.",
            ja="あなたの感性は暖かい春の日差しのようです。熱くはありませんが、隣にいると自然に温かさが伝わります。",
            **{"zh-CN": "你的感性像温暖的春日阳光。不炽热，但身边人会自然感受到暖意。", "zh-TW": "你的感性像溫暖的春日陽光。不熾熱，但身邊人會自然感受到暖意。"},
            vi="Cảm xúc của bạn như ánh nắng xuân ấm áp. Không nóng, nhưng bên cạnh bạn tự nhiên cảm nhận được ấm.",
            id="Emosimu seperti sinar matahari musim semi. Tidak panas, tapi yang di sampingmu merasakan hangat secara alami.",
        ),
        description=M(
            ko=_ko_r(3, "description"),
            en="Drawn to warmth, energized by connection, and naturally caring to those around you. You express emotions moderately and warm the mood. Warm in a natural, unforced way.",
            ja="暖かいものに惹かれ、人とのつながりからエネルギーを得て、自然と周囲を思いやるタイプです。感情表現は適度に豊かで、雰囲気を暖かくする力があります。無理のない自然な温かさです。",
            **{"zh-CN": "被温暖吸引，从人际连接中获得能量，自然关怀身边的人。情感表达适度丰富，能温暖氛围。是不做作的天然温暖。", "zh-TW": "被溫暖吸引，從人際連結中獲得能量，自然關懷身邊的人。情感表達適度豐富，能溫暖氛圍。是不做作的天然溫暖。"},
            vi="Bị cuốn bởi sự ấm, nạp năng lượng từ kết nối, tự nhiên quan tâm người xung quanh. Bộc lộ cảm xúc vừa phải và làm ấm không khí. Ấm áp một cách tự nhiên.",
            id="Tertarik pada kehangatan, dapat energi dari koneksi, secara alami peduli pada orang sekitar. Ekspresi emosi cukup kaya dan menghangatkan suasana. Hangat secara natural.",
        ),
        emotionTemperature=M(ko=_ko_r(3, "emotionTemperature"), en="28°C", ja="28°C", **{"zh-CN": "28°C", "zh-TW": "28°C"}, vi="28°C", id="28°C"),
        emotionColor=M(ko=_ko_r(3, "emotionColor"), en="Peach Coral", ja="Peach Coral", **{"zh-CN": "Peach Coral", "zh-TW": "Peach Coral"}, vi="Peach Coral", id="Peach Coral"),
        emotionKeywords=M(
            ko=_ko_r(3, "emotionKeywords"),
            en="Warmth · Care · Softness · Embrace · Friendliness",
            ja="温かさ・思いやり・柔らかさ・包容・親しみ",
            **{"zh-CN": "温暖·体贴·柔软·包容·亲切", "zh-TW": "溫暖·體貼·柔軟·包容·親切"},
            vi="Ấm áp · Quan tâm · Mềm mại · Ôm ấp · Thân thiện",
            id="Kehangatan · Perhatian · Lembut · Menerima · Ramah",
        ),
        strengthAtTemp=M(
            ko=_ko_r(3, "strengthAtTemp"),
            en="Warmth that puts even new acquaintances at ease. Ability to resolve conflict gently.",
            ja="初対面の人も安心させる温かさ。対立を柔らかく解決する力があります。",
            **{"zh-CN": "让初次见面的人也安心的温暖。能柔和化解冲突。", "zh-TW": "讓初次見面的人也安心的溫暖。能柔和化解衝突。"},
            vi="Sự ấm khiến người mới gặp cũng thoải mái. Khả năng giải quyết xung đột nhẹ nhàng.",
            id="Kehangatan yang membuat orang baru pun nyaman. Kemampuan menyelesaikan konflik dengan lembut.",
        ),
        charmAtTemp=M(
            ko=_ko_r(3, "charmAtTemp"),
            en="Natural warmth without forcing it. Being near you simply feels good.",
            ja="無理のない自然な温かさ。隣にいるとなぜか気分が良くなる存在です。",
            **{"zh-CN": "不做作的天然温暖。在身边就会心情变好。", "zh-TW": "不做作的天然溫暖。在身邊就會心情變好。"},
            vi="Sự ấm tự nhiên, không gượng ép. Ở bên bạn thấy dễ chịu.",
            id="Kehangatan natural tanpa dipaksakan. Dekatmu rasanya enak.",
        ),
        comfortableSpace=M(
            ko=_ko_r(3, "comfortableSpace"),
            en="A warmly lit cafe · a space with flowers · a friend home · a spring park",
            ja="暖かい照明のカフェ・花のある空間・友達の家・春の公園",
            **{"zh-CN": "暖光咖啡馆·有花的空间·朋友家·春日公园", "zh-TW": "暖光咖啡館·有花的空間·朋友家·春日公園"},
            vi="Quán cà phê ánh sáng ấm · không gian có hoa · nhà bạn · công viên mùa xuân",
            id="Kafe pencahayaan hangat · ruang berbunga · rumah teman · taman musim semi",
        ),
        colorCodes=M(
            ko=_ko_r(3, "colorCodes"),
            en="Peach #FFCBA4 · Coral #FF7F50 · Salmon Pink #FA8072",
            ja="Peach #FFCBA4 · Coral #FF7F50 · Salmon Pink #FA8072",
            **{"zh-CN": "Peach #FFCBA4 · Coral #FF7F50 · Salmon Pink #FA8072", "zh-TW": "Peach #FFCBA4 · Coral #FF7F50 · Salmon Pink #FA8072"},
            vi="Peach #FFCBA4 · Coral #FF7F50 · Salmon Pink #FA8072",
            id="Peach #FFCBA4 · Coral #FF7F50 · Salmon Pink #FA8072",
        ),
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(3, "oneLiner"),
            en="Being near you feels reassuring for some reason. That is your temperature.",
            ja="あなたのそばにいるとなぜか安心します。それがあなたの温度です。",
            **{"zh-CN": "在你身边不知为何就会安心。那就是你的温度。", "zh-TW": "在你身邊不知為何就會安心。那就是你的溫度。"},
            vi="Ở bên bạn vì lý do nào đó thấy an tâm. Đó là nhiệt độ của bạn.",
            id="Dekatmu entah kenapa terasa tenang. Itu suhu emosimu.",
        ),
        shareLine=M(
            ko=_ko_r(3, "shareLine"),
            en="My emotional temperature: Peach Coral 🍑 28°C — warm and caring emotions... naturally warm, they say → What is yours? Screenshot your color result",
            ja="私の感性温度: Peach Coral 🍑 28°C 暖かく思いやりのある感性らしい…自然に温かい人らしい → あなたは何度？色結果キャプチャして",
            **{"zh-CN": "我的感性温度：Peach Coral 🍑 28°C 温暖体贴…说是天然温暖的人 → 你是几度？截图颜色结果", "zh-TW": "我的感性溫度：Peach Coral 🍑 28°C 溫暖體貼…說是天然溫暖的人 → 你是幾度？截圖顏色結果"},
            vi="Nhiệt độ cảm xúc của tôi: Peach Coral 🍑 28°C — ấm và quan tâm... người ấm tự nhiên → Bạn mấy độ? Chụp kết quả màu đi",
            id="Suhu emosiku: Peach Coral 🍑 28°C — hangat dan peduli... katanya orang hangat natural → Kamu berapa derajat? Screenshot hasil warna",
        ),
    ),
    r(
        "Type5", "✨", 36, "#FFD700",
        title=M(
            ko=_ko_r(4, "title"),
            en="Bright and energetic warmth — Sunset Gold",
            ja="明るくエネルギーあふれる温かさ、Sunset Gold",
            **{"zh-CN": "明亮充满能量的温暖，Sunset Gold", "zh-TW": "明亮充滿能量的溫暖，Sunset Gold"},
            vi="Sự ấm sáng và tràn đầy năng lượng — Sunset Gold",
            id="Kehangatan cerah dan penuh energi — Sunset Gold",
        ),
        shortDescription=M(
            ko=_ko_r(4, "shortDescription"),
            en="Your emotions are like a sunset sky. Hot, bright, and warmth that colors everything around you.",
            ja="あなたの感性は夕焼けの空のようです。熱く明るく、周囲をすべて染める温かさです。",
            **{"zh-CN": "你的感性像晚霞天空。炽热明亮，温暖会染遍周围。", "zh-TW": "你的感性像晚霞天空。熾熱明亮，溫暖會染遍周圍。"},
            vi="Cảm xúc của bạn như bầu trời hoàng hôn. Nóng, sáng, ấm áp lan ra mọi thứ xung quanh.",
            id="Emosimu seperti langit senja. Panas, cerah, kehangatan yang mewarnai sekitar.",
        ),
        description=M(
            ko=_ko_r(4, "description"),
            en="Strongly drawn to warmth, you shine most with people and express emotions richly. Full of energy and positivity, you brighten the mood. People feel better just being with you.",
            ja="暖かいものに強く惹かれ、人と一緒にいるとき最も輝き、感情を豊かに表現するタイプです。エネルギーに溢れ前向きで、周囲の雰囲気を明るくします。一緒にいると気分まで上がる人です。",
            **{"zh-CN": "强烈被温暖吸引，与人共处时最闪耀，情感表达丰富。充满能量与积极，能点亮氛围。在一起就会心情变好。", "zh-TW": "強烈被溫暖吸引，與人共處時最閃耀，情感表達豐富。充滿能量與積極，能點亮氛圍。在一起就會心情變好。"},
            vi="Bị cuốn mạnh bởi sự ấm, tỏa sáng nhất khi có người bên cạnh và bộc lộ cảm xúc phong phú. Tràn năng lượng, tích cực, làm sáng không khí. Ở cùng bạn thấy vui hơn.",
            id="Sangat tertarik pada kehangatan, paling bersinar saat bersama orang dan mengekspresikan emosi kaya. Penuh energi dan positif, mencerahkan suasana. Dekatmu mood naik.",
        ),
        emotionTemperature=M(ko=_ko_r(4, "emotionTemperature"), en="36°C", ja="36°C", **{"zh-CN": "36°C", "zh-TW": "36°C"}, vi="36°C", id="36°C"),
        emotionColor=M(ko=_ko_r(4, "emotionColor"), en="Sunset Gold", ja="Sunset Gold", **{"zh-CN": "Sunset Gold", "zh-TW": "Sunset Gold"}, vi="Sunset Gold", id="Sunset Gold"),
        emotionKeywords=M(
            ko=_ko_r(4, "emotionKeywords"),
            en="Brightness · Energy · Positivity · Abundance · Emotion",
            ja="明るさ・エネルギー・前向き・豊かさ・感動",
            **{"zh-CN": "明亮·能量·积极·丰富·感动", "zh-TW": "明亮·能量·積極·豐富·感動"},
            vi="Sáng · Năng lượng · Tích cực · Phong phú · Cảm xúc",
            id="Kecerahan · Energi · Positif · Kelimpahan · Emosi",
        ),
        strengthAtTemp=M(
            ko=_ko_r(4, "strengthAtTemp"),
            en="Energy that brightens those around you. Passionate, easily moved, and good at moving others too.",
            ja="周囲を明るくするエネルギー。情熱的で感動を受け取り、与えるのも上手です。",
            **{"zh-CN": "点亮周围的能量。热情、易感动，也善于感动他人。", "zh-TW": "點亮周圍的能量。熱情、易感動，也善於感動他人。"},
            vi="Năng lượng làm sáng mọi người. Nhiệt huyết, dễ cảm động và cũng giỏi truyền cảm.",
            id="Energi yang mencerahkan sekitar. Passionate, mudah terharu, dan juga pandai mengharukan.",
        ),
        charmAtTemp=M(
            ko=_ko_r(4, "charmAtTemp"),
            en="People feel better just being with you. Your emotions are vivid and deep.",
            ja="一緒にいると気分まで上がる人。感情がはっきりしていて深いです。",
            **{"zh-CN": "在一起就会心情变好。情感鲜明而深刻。", "zh-TW": "在一起就會心情變好。情感鮮明而深刻。"},
            vi="Ở cùng bạn thấy vui hơn. Cảm xúc rõ ràng và sâu.",
            id="Dekatmu mood ikut naik. Emosimu jelas dan dalam.",
        ),
        comfortableSpace=M(
            ko=_ko_r(4, "comfortableSpace"),
            en="A rooftop with sunset views · an outdoor terrace · a spring picnic · evenings with warm people",
            ja="夕焼けが見えるルーフトップ・屋外テラス・春のピクニック・温かい人たちとの夕食",
            **{"zh-CN": "看晚霞的天台·户外露台·春日野餐·与温暖的人共度的夜晚", "zh-TW": "看晚霞的天台·戶外露台·春日野餐·與溫暖的人共度的夜晚"},
            vi="Sân thượng ngắm hoàng hôn · sân ngoài trời · picnic mùa xuân · buổi tối với người ấm áp",
            id="Rooftop pemandangan senja · teras outdoor · piknik musim semi · malam dengan orang hangat",
        ),
        colorCodes=M(
            ko=_ko_r(4, "colorCodes"),
            en="Sunset Gold #FFD700 · Amber #FFBF00 · Honey #FFC107",
            ja="Sunset Gold #FFD700 · Amber #FFBF00 · Honey #FFC107",
            **{"zh-CN": "Sunset Gold #FFD700 · Amber #FFBF00 · Honey #FFC107", "zh-TW": "Sunset Gold #FFD700 · Amber #FFBF00 · Honey #FFC107"},
            vi="Sunset Gold #FFD700 · Amber #FFBF00 · Honey #FFC107",
            id="Sunset Gold #FFD700 · Amber #FFBF00 · Honey #FFC107",
        ),
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(4, "oneLiner"),
            en="Your temperature colors everything around you — like a sunset.",
            ja="あなたの温度は周囲を染めます。夕焼けのように。",
            **{"zh-CN": "你的温度会染遍周围，像晚霞一样。", "zh-TW": "你的溫度會染遍周圍，像晚霞一樣。"},
            vi="Nhiệt độ của bạn nhuộm mọi thứ xung quanh — như hoàng hôn.",
            id="Suhu emosimu mewarnai sekitar — seperti senja.",
        ),
        shareLine=M(
            ko=_ko_r(4, "shareLine"),
            en="My emotional temperature: Sunset Gold ✨ 36°C — emotions that color everything like a sunset... hot and bright, right → What is yours? Share your color screenshot",
            ja="私の感性温度: Sunset Gold ✨ 36°C 夕焼けみたいに周囲を染める感性らしい…熱くて明るいって合ってる → あなたは何度？色キャプチャ共有して",
            **{"zh-CN": "我的感性温度：Sunset Gold ✨ 36°C 像晚霞一样染遍周围…又热又亮，对吧 → 你是几度？分享颜色截图", "zh-TW": "我的感性溫度：Sunset Gold ✨ 36°C 像晚霞一樣染遍周圍…又熱又亮，對吧 → 你是幾度？分享顏色截圖"},
            vi="Nhiệt độ cảm xúc của tôi: Sunset Gold ✨ 36°C — như hoàng hôn nhuộm mọi thứ... nóng và sáng, đúng không → Bạn mấy độ? Chia sẻ ảnh chụp màu đi",
            id="Suhu emosiku: Sunset Gold ✨ 36°C — seperti senja mewarnai sekitar... panas dan cerah, kan → Kamu berapa derajat? Share screenshot warna",
        ),
    ),
    r(
        "Type6", "❤️‍🔥", 42, "#C21A7A",
        title=M(
            ko=_ko_r(5, "title"),
            en="Hot and intense passion — Deep Rose Red",
            ja="熱く強烈な情熱の温度、Deep Rose Red",
            **{"zh-CN": "炽热强烈的激情温度，Deep Rose Red", "zh-TW": "熾熱強烈的激情溫度，Deep Rose Red"},
            vi="Đam mê nóng bỏng và mãnh liệt — Deep Rose Red",
            id="Gairah panas dan intens — Deep Rose Red",
        ),
        shortDescription=M(
            ko=_ko_r(5, "shortDescription"),
            en="Your emotions are like a blazing flame. Hot, intense, and once you fall in, hard to stop.",
            ja="あなたの感性は燃え上がる炎のようです。熱く強烈で、一度ハマると止まりにくいです。",
            **{"zh-CN": "你的感性像燃烧的火焰。炽热强烈，一旦投入就难以停下。", "zh-TW": "你的感性像燃燒的火焰。熾熱強烈，一旦投入就難以停下。"},
            vi="Cảm xúc của bạn như ngọn lửa bùng cháy. Nóng, mãnh liệt, một khi say vào thì khó dừng.",
            id="Emosimu seperti api yang menyala. Panas, intens, sekali terbawa sulit berhenti.",
        ),
        description=M(
            ko=_ko_r(5, "description"),
            en="Drawn to hot more than warm, and warm more than cool. Emotions are vivid and intense, with clear likes and dislikes. Passionate and fiery — when you give your heart, you give it all. You feel and give emotion at the hottest temperature.",
            ja="冷たいものより暖かいもの、暖かいものより熱いものに惹かれるタイプです。感情がはっきり強烈で、好き嫌いが明確です。情熱的でエネルギーが熱く、一度心を渡せば全部渡します。感動を受け取るのも与えるのも最も熱い温度で行います。",
            **{"zh-CN": "比起冷更被暖吸引，比起暖更被热吸引。情感鲜明强烈，好恶分明。热情火热，一旦付出就全部付出。感受与给予感动都在最热的温度。", "zh-TW": "比起冷更被暖吸引，比起暖更被熱吸引。情感鮮明強烈，好惡分明。熱情火熱，一旦付出就全部付出。感受與給予感動都在最熱的溫度。"},
            vi="Bị cuốn bởi nóng hơn ấm, ấm hơn lạnh. Cảm xúc rõ ràng, mạnh, thích ghét rõ. Nhiệt huyết, năng lượng nóng, một khi trao tim là trao hết. Nhận và cho cảm xúc ở nhiệt độ cao nhất.",
            id="Tertarik panas lebih dari hangat, hangat lebih dari dingin. Emosi jelas dan kuat, suka-benci tegas. Passionate, energi panas, sekali memberi hati memberi semua. Merasakan dan memberi emosi di suhu paling panas.",
        ),
        emotionTemperature=M(ko=_ko_r(5, "emotionTemperature"), en="42°C", ja="42°C", **{"zh-CN": "42°C", "zh-TW": "42°C"}, vi="42°C", id="42°C"),
        emotionColor=M(ko=_ko_r(5, "emotionColor"), en="Deep Rose Red", ja="Deep Rose Red", **{"zh-CN": "Deep Rose Red", "zh-TW": "Deep Rose Red"}, vi="Deep Rose Red", id="Deep Rose Red"),
        emotionKeywords=M(
            ko=_ko_r(5, "emotionKeywords"),
            en="Passion · Intensity · Emotion · Heat · All-in",
            ja="情熱・強烈さ・感動・熱さ・全部",
            **{"zh-CN": "热情·强烈·感动·炽热·全部", "zh-TW": "熱情·強烈·感動·熾熱·全部"},
            vi="Đam mê · Mãnh liệt · Cảm xúc · Nóng · Hết mình",
            id="Gairah · Intens · Emosi · Panas · Sepenuh hati",
        ),
        strengthAtTemp=M(
            ko=_ko_r(5, "strengthAtTemp"),
            en="The type that loves most fiercely and lives most passionately. Passion itself is the charm.",
            ja="最も強く愛し、最も熱く生きるタイプ。情熱そのものが魅力です。",
            **{"zh-CN": "最爱得强烈、活得最热烈的类型。热情本身就是魅力。", "zh-TW": "最愛得強烈、活得最熱烈的類型。熱情本身就是魅力。"},
            vi="Kiểu yêu mạnh nhất và sống nhiệt huyết nhất. Bản thân đam mê là sức hút.",
            id="Tipe yang paling kuat mencintai dan hidup paling passionate. Gairah itu sendiri daya tarik.",
        ),
        charmAtTemp=M(
            ko=_ko_r(5, "charmAtTemp"),
            en="Your heat is contagious. Even listless people warm up beside you.",
            ja="隣にいると温度が伝染します。無気力な人も一緒に熱くなります。",
            **{"zh-CN": "在身边温度会传染。无动力的人也会跟着热起来。", "zh-TW": "在身邊溫度會傳染。無動力的人也會跟著熱起來。"},
            vi="Nhiệt của bạn lây sang. Người uể oải cũng nóng lên bên bạn.",
            id="Panas emosimu menular. Orang lesu pun ikut panas di sampingmu.",
        ),
        comfortableSpace=M(
            ko=_ko_r(5, "comfortableSpace"),
            en="By a fireplace · a summer-night campfire · a concert · gatherings of passionate people",
            ja="暖炉の前・夏の夜のキャンプファイア・コンサート・情熱的な人たちが集まる場所",
            **{"zh-CN": "壁炉前·夏夜篝火·演唱会·热情的人聚集的地方", "zh-TW": "壁爐前·夏夜篝火·演唱會·熱情的人聚集的地方"},
            vi="Trước lò sưởi · lửa trại đêm hè · concert · nơi người đam mê tụ họp",
            id="Dekat perapian · api unggun malam musim panas · konser · tempat orang penuh gairah berkumpul",
        ),
        colorCodes=M(
            ko=_ko_r(5, "colorCodes"),
            en="Deep Rose #C21A7A · Crimson #DC143C · Burgundy #800020",
            ja="Deep Rose #C21A7A · Crimson #DC143C · Burgundy #800020",
            **{"zh-CN": "Deep Rose #C21A7A · Crimson #DC143C · Burgundy #800020", "zh-TW": "Deep Rose #C21A7A · Crimson #DC143C · Burgundy #800020"},
            vi="Deep Rose #C21A7A · Crimson #DC143C · Burgundy #800020",
            id="Deep Rose #C21A7A · Crimson #DC143C · Burgundy #800020",
        ),
        certificationPhrase=M(
            ko=_ko_r(5, "certificationPhrase"),
            en="Emotional temperature 42°C Deep Rose Red ❤️‍🔥 My emotions are a blazing flame",
            ja="感性温度 42°C Deep Rose Red ❤️‍🔥 私の感性は燃え上がる炎",
            **{"zh-CN": "感性温度 42°C Deep Rose Red ❤️‍🔥 我的感性是燃烧的火焰", "zh-TW": "感性溫度 42°C Deep Rose Red ❤️‍🔥 我的感性是燃燒的火焰"},
            vi="Nhiệt độ cảm xúc 42°C Deep Rose Red ❤️‍🔥 Cảm xúc của tôi là ngọn lửa bùng cháy",
            id="Suhu emosi 42°C Deep Rose Red ❤️‍🔥 Emosiku adalah api yang menyala",
        ),
        oneLiner=M(
            ko=_ko_r(5, "oneLiner"),
            en="Your temperature is hot — and that heat is your strongest weapon.",
            ja="あなたの温度は熱いです。そしてその熱さが最も強い武器です。",
            **{"zh-CN": "你的温度是热的，而这份炽热是你最强的武器。", "zh-TW": "你的溫度是熱的，而這份熾熱是你最強的武器。"},
            vi="Nhiệt độ của bạn nóng — và sự nóng đó là vũ khí mạnh nhất.",
            id="Suhu emosimu panas — dan panas itu senjata terkuatmu.",
        ),
        shareLine=M(
            ko=_ko_r(5, "shareLine"),
            en="My emotional temperature: Deep Rose Red ❤️‍🔥 42°C — passionate like a blazing flame... hot, right lol → What is yours? Screenshot your color result",
            ja="私の感性温度: Deep Rose Red ❤️‍🔥 42°C 燃え上がる炎みたいな情熱感性らしい…熱いって合ってる ㅋㅋ → あなたは何度？色結果キャプチャして",
            **{"zh-CN": "我的感性温度：Deep Rose Red ❤️‍🔥 42°C 像燃烧火焰一样的激情…够热吧 哈哈 → 你是几度？截图颜色结果", "zh-TW": "我的感性溫度：Deep Rose Red ❤️‍🔥 42°C 像燃燒火焰一樣的激情…夠熱吧 哈哈 → 你是幾度？截圖顏色結果"},
            vi="Nhiệt độ cảm xúc của tôi: Deep Rose Red ❤️‍🔥 42°C — đam mê như ngọn lửa... nóng, đúng không ㅋㅋ → Bạn mấy độ? Chụp kết quả màu đi",
            id="Suhu emosiku: Deep Rose Red ❤️‍🔥 42°C — gairah seperti api... panas, kan ㅋㅋ → Kamu berapa derajat? Screenshot hasil warna",
        ),
    ),
]


def fmt_question(qid: int, item: dict) -> str:
    parts = [
        "  {",
        f"    id: {qid},",
        f"    question: {fmt_ml(item['question'])},",
        "    options: [",
    ]
    for label, score in item["options"]:
        choice = "a" if score == 0 else "b"
        parts.append(f"      {{ image: IMG({qid}, '{choice}'), label: {fmt_ml(label, '        ')}, score: {score} }},")
    parts.append("    ],")
    parts.append("  },")
    return "\n".join(parts)


def fmt_result(item: dict) -> str:
    ml_fields = [
        "title",
        "shortDescription",
        "description",
        "emotionTemperature",
        "emotionColor",
        "emotionKeywords",
        "strengthAtTemp",
        "charmAtTemp",
        "comfortableSpace",
        "colorCodes",
        "certificationPhrase",
        "oneLiner",
        "shareLine",
    ]
    parts = ["  {"]
    parts.append(f"    type: '{item['type']}',")
    parts.append(f"    emoji: '{item['emoji']}',")
    parts.append(f"    temperatureCelsius: {item['temperatureCelsius']},")
    parts.append(f"    accentColor: '{item['accentColor']}',")
    for field in ml_fields:
        parts.append(f"    {field}: {fmt_ml(item[field])},")
    parts.append("  },")
    return "\n".join(parts)


def build_ts() -> str:
    questions_ts = "\n".join(fmt_question(i + 1, q_item) for i, q_item in enumerate(QUESTIONS))
    results_ts = "\n".join(fmt_result(r_item) for r_item in RESULTS)
    return (
        HEADER
        + questions_ts
        + "\n];\n\nexport const phase3PersonalityColorTemperatureResults: Phase3PersonalityColorTemperatureResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3PersonalityColorTemperatureData.ts"
    body = build_ts()
    out.write_text(body, encoding="utf-8")
    print(f"Wrote {out}")
    print(f"Bytes: {len(body.encode('utf-8'))}")
    print(f"Lines: {body.count(chr(10)) + (0 if body.endswith(chr(10)) else 1)}")


if __name__ == "__main__":
    main()
