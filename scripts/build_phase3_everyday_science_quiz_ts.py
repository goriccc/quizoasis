"""Generate lib/phase3EverydayScienceQuizData.ts with full 7-language localeMap() content."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 생활 속 과학 상식 퀴즈 — phase3-everyday-science-quiz · 12문항 4지선다 · 정답 +1 오답 0 · 7개 로케일 */

export type Phase3EverydayScienceQuizLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3EverydayScienceQuizLocaleKey, string>): Record<Phase3EverydayScienceQuizLocaleKey, string> {
  return t;
}

function quizOpt(m: Record<Phase3EverydayScienceQuizLocaleKey, string>, isCorrect: boolean): { text: Record<Phase3EverydayScienceQuizLocaleKey, string>; isCorrect: boolean } {
  return { text: localeMap(m), isCorrect };
}

export interface Phase3EverydayScienceQuizOption {
  text: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  isCorrect: boolean;
}

export interface Phase3EverydayScienceQuizQuestion {
  id: number;
  question: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  options: Phase3EverydayScienceQuizOption[];
  correctExplanation: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  wrongTraps: Record<Phase3EverydayScienceQuizLocaleKey, string>;
}

export interface Phase3EverydayScienceQuizResult {
  type: string;
  emoji: string;
  title: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  shortDescription: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  description: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  scienceGrade: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  scoreRange: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  strengthZone: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  weakZone: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  retakeTip: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  characteristic: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  regretPoint: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  certificationPhrase: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  oneLiner: Record<Phase3EverydayScienceQuizLocaleKey, string>;
  shareLine: Record<Phase3EverydayScienceQuizLocaleKey, string>;
}

export function calculatePhase3EverydayScienceQuizResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 2) return 'Level1';
  if (total <= 5) return 'Level2';
  if (total <= 8) return 'Level3';
  if (total <= 10) return 'Level4';
  return 'Level5';
}

export const phase3EverydayScienceQuizQuestions: Phase3EverydayScienceQuizQuestion[] = [
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


_gen_path = Path(__file__).resolve().parent / "gen_phase3_everyday_science_quiz_data.py"
_gen_ns: dict = {}
exec(_gen_path.read_text(encoding="utf-8").split("\ndef esc")[0], _gen_ns)
KO_QUESTIONS = _gen_ns["QUESTIONS"]
KO_RESULTS = _gen_ns["RESULTS"]


def _ko_q(idx: int) -> str:
    return KO_QUESTIONS[idx]["q"]


def _ko_o(idx: int, opt_idx: int) -> str:
    return KO_QUESTIONS[idx]["opts"][opt_idx][0]


def _ko_e(idx: int) -> str:
    return KO_QUESTIONS[idx]["explanation"]


def _ko_r(type_idx: int, field: str) -> str:
    key_map = {
        "shortDescription": "short",
        "description": "desc",
        "certificationPhrase": "certification",
        "shareLine": "share",
    }
    k = key_map.get(field, field)
    return KO_RESULTS[type_idx][k]


def opt(text: dict[str, str], is_correct: bool) -> tuple[dict[str, str], bool]:
    return (text, is_correct)


def q(question: dict[str, str], options: list[tuple[dict[str, str], bool]], explanation: dict[str, str]) -> dict:
    return {"question": question, "options": options, "explanation": explanation}


def r(type_: str, emoji: str, **fields: dict[str, str]) -> dict:
    return {"type": type_, "emoji": emoji, **fields}


QUESTIONS = [
    q(
        M(
            ko=_ko_q(0),
            en="What causes the occasional 'whirring' or 'humming' sound from a refrigerator?",
            ja="冷蔵庫から時々聞こえる「ウィーン」や「ウーン」という音の正体は何ですか？",
            **{"zh-CN": "冰箱偶尔发出的「嗡嗡」或「呜呜」声究竟是什么？", "zh-TW": "冰箱偶爾發出的「嗡嗡」或「嗚嗚」聲究竟是什麼？"},
            vi="Tiếng 'vù vù' hoặc 'ù ù' thỉnh thoảng phát ra từ tủ lạnh thực sự là gì?",
            id="Apa sebenarnya suara 'buzz' atau 'hum' yang kadang terdengar dari kulkas?",
        ),
        [
            opt(M(ko=_ko_o(0, 0), en="It is the sound of electricity flowing inside the refrigerator", ja="冷蔵庫内を流れる電気が出す音だ", **{"zh-CN": "是冰箱内流动的电流发出的声音", "zh-TW": "是冰箱內流動的電流發出的聲音"}, vi="Đó là tiếng điện chạy bên trong tủ lạnh", id="Itu suara listrik yang mengalir di dalam kulkas"), False),
            opt(M(ko=_ko_o(0, 1), en="The compressor compressing refrigerant to keep the interior cold", ja="冷蔵庫内部を冷やすために冷媒を圧縮するコンプレッサーが作動する音だ", **{"zh-CN": "维持冰箱内部低温的压缩机在压缩冷媒时工作的声音", "zh-TW": "維持冰箱內部低溫的壓縮機在壓縮冷媒時工作的聲音"}, vi="Đó là tiếng máy nén (compressor) nén môi chất lạnh để giữ lạnh bên trong tủ", id="Itu suara kompresor yang menekan refrigeran untuk menjaga interior tetap dingin"), True),
            opt(M(ko=_ko_o(0, 2), en="It is the sound of food contracting as it cools", ja="食べ物が冷やされて収縮する音だ", **{"zh-CN": "是食物冷却收缩时发出的声音", "zh-TW": "是食物冷卻收縮時發出的聲音"}, vi="Đó là tiếng thực phẩm co lại khi nguội", id="Itu suara makanan mengecil saat mendingin"), False),
            opt(M(ko=_ko_o(0, 3), en="It is the sound of the fan circulating cold air", ja="冷気を循環させるファンが回る音だ", **{"zh-CN": "是循环冷气的风扇转动发出的声音", "zh-TW": "是循環冷氣的風扇轉動發出的聲音"}, vi="Đó là tiếng quạt tuần hoàn không khí lạnh", id="Itu suara kipas yang mengedarkan udara dingin"), False),
        ],
        M(
            ko=_ko_e(0),
            en="The sound comes from the motor (compressor) that compresses refrigerant inside the refrigerator. Refrigerant repeatedly goes through compression, expansion, and compression again to move heat from inside to outside. The sound stops intermittently because when the interior reaches the set temperature, the compressor temporarily shuts off.",
            ja="冷蔵庫内部の冷媒を圧縮するモーター（コンプレッサー）が作動するときに出る音です。冷媒が圧縮→膨張→圧縮を繰り返し、内部の熱を外に出します。音が止まる区間があるのは、内部温度が設定温度に達するとコンプレッサーが一時停止するためです。",
            **{"zh-CN": "这是压缩冰箱内部冷媒的电机（压缩机）工作时发出的声音。冷媒反复经历压缩→膨胀→压缩，将内部热量排到外面。声音会间歇停止，是因为内部温度达到设定值后压缩机会暂时停机。", "zh-TW": "這是壓縮冰箱內部冷媒的馬達（壓縮機）工作時發出的聲音。冷媒反覆經歷壓縮→膨脹→壓縮，將內部熱量排到外面。聲音會間歇停止，是因為內部溫度達到設定值後壓縮機會暫時停機。"},
            vi="Đó là tiếng động cơ (máy nén) nén môi chất lạnh bên trong tủ lạnh. Môi chất lạnh lặp lại quá trình nén→giãn nở→nén để đẩy nhiệt từ trong ra ngoài. Tiếng dừng xen kẽ vì khi nhiệt độ trong đạt mức cài đặt, máy nén tạm dừng.",
            id="Suara itu berasal dari motor (kompresor) yang menekan refrigeran di dalam kulkas. Refrigeran berulang kali melalui kompresi→expansi→kompresi untuk memindahkan panas dari dalam ke luar. Suara berhenti sejenak karena saat suhu interior mencapai setelan, kompresor sementara mati.",
        ),
    ),
    q(
        M(
            ko=_ko_q(1),
            en="What is the real principle behind how a microwave heats food?",
            ja="電子レンジが食べ物を温める本当の原理は何ですか？",
            **{"zh-CN": "微波炉加热食物的真正原理是什么？", "zh-TW": "微波爐加熱食物的真正原理是什麼？"},
            vi="Nguyên lý thực sự khiến lò vi sóng hâm nóng thức ăn là gì?",
            id="Apa prinsip sebenarnya di balik cara microwave memanaskan makanan?",
        ),
        [
            opt(M(ko=_ko_o(1, 0), en="Heat from internal coils heats the food surface", ja="内部コイルから発生した熱が食べ物の表面を加熱する", **{"zh-CN": "内部线圈产生的热量加热食物表面", "zh-TW": "內部線圈產生的熱量加熱食物表面"}, vi="Nhiệt từ cuộn dây bên trong làm nóng bề mặt thức ăn", id="Panas dari koil internal memanaskan permukaan makanan"), False),
            opt(M(ko=_ko_o(1, 1), en="Ultraviolet light activates molecules on the food surface and raises temperature", ja="紫外線が食べ物表面の分子を活性化して温度を上げる", **{"zh-CN": "紫外线激活食物表面分子以提高温度", "zh-TW": "紫外線激活食物表面分子以提高溫度"}, vi="Tia cực tím kích hoạt phân tử trên bề mặt thức ăn và tăng nhiệt độ", id="Sinar ultraviolet mengaktifkan molekul di permukaan makanan dan menaikkan suhu"), False),
            opt(M(ko=_ko_o(1, 2), en="Microwaves rapidly vibrate water molecules in food, creating friction heat", ja="マイクロ波（電磁波）が食べ物中の水分子を高速振動させ、摩擦熱を発生させる", **{"zh-CN": "微波（电磁波）让食物中的水分子快速振动，产生摩擦热", "zh-TW": "微波（電磁波）讓食物中的水分子快速振動，產生摩擦熱"}, vi="Sóng vi ba (sóng điện từ) rung nhanh phân tử nước trong thức ăn, tạo nhiệt ma sát", id="Gelombang mikro (elektromagnetik) membuat molekul air dalam makanan bergetar cepat, menghasilkan panas gesekan"), True),
            opt(M(ko=_ko_o(1, 3), en="Air around the food is heated first and transfers heat to the food", ja="食べ物周辺の空気を先に加熱し、その熱が食べ物に伝わる", **{"zh-CN": "先加热食物周围空气，再将热量传给食物", "zh-TW": "先加熱食物周圍空氣，再將熱量傳給食物"}, vi="Không khí quanh thức ăn được làm nóng trước rồi truyền nhiệt vào thức ăn", id="Udara di sekitar makanan dipanaskan dulu lalu panas ditransfer ke makanan"), False),
        ],
        M(
            ko=_ko_e(1),
            en="Microwaves emit electromagnetic waves at 2.45 GHz. These waves vibrate water molecules in food billions of times per second, and the vibration creates friction heat that warms the food. That is why foods with little water heat poorly and why food warms from the inside out.",
            ja="電子レンジは2.45GHzのマイクロ波を放射します。この電磁波が食べ物中の水分子を秒間数十億回振動させ、その振動が摩擦熱を生み食べ物を温めます。だから水分の少ない食べ物は温まりにくく、内側から温まるのが特徴です。",
            **{"zh-CN": "微波炉发射2.45GHz频率的微波。这种电磁波让食物中的水分子每秒振动数十亿次，振动产生摩擦热从而加热食物。因此含水量少的食物不易加热，且会从内部开始变热。", "zh-TW": "微波爐發射2.45GHz頻率的微波。這種電磁波讓食物中的水分子每秒振動數十億次，振動產生摩擦熱從而加熱食物。因此含水量少的食物不易加熱，且會從內部開始變熱。"},
            vi="Lò vi sóng phát sóng điện từ 2.45GHz. Sóng này rung phân tử nước trong thức ăn hàng tỷ lần mỗi giây, tạo nhiệt ma sát để hâm nóng. Vì vậy thức ăn ít nước khó hâm và thường nóng từ bên trong.",
            id="Microwave memancarkan gelombang elektromagnetik 2.45 GHz. Gelombang ini membuat molekul air dalam makanan bergetar miliaran kali per detik, menciptakan panas gesekan. Itu sebabnya makanan minim air sulit dipanaskan dan panas dari dalam.",
        ),
    ),
    q(
        M(
            ko=_ko_q(2),
            en="Why does thunder come after the flash of lightning?",
            ja="稲妻が光った後、雷の音が遅れて聞こえる理由は何ですか？",
            **{"zh-CN": "闪电过后，雷声为什么晚到？", "zh-TW": "閃電過後，雷聲為什麼晚到？"},
            vi="Tại sao sấm sét đến sau tia chớp?",
            id="Mengapa guntur terdengar setelah kilat?",
        ),
        [
            opt(M(ko=_ko_o(2, 0), en="Thunder starts in clouds and takes time to reach the ground", ja="雷は雲の中で先に鳴り、地面に届くまで時間がかかる", **{"zh-CN": "雷声先在云中响起，到达地面需要时间", "zh-TW": "雷聲先在雲中響起，到達地面需要時間"}, vi="Sấm phát ra trong mây trước và mất thời gian để tới mặt đất", id="Guntur dimulai di awan dan butuh waktu sampai ke tanah"), False),
            opt(M(ko=_ko_o(2, 1), en="The brain processes ear signals slower than eye signals", ja="脳が目の信号より耳の信号を処理するのに時間がかかる", **{"zh-CN": "大脑处理耳朵信号比眼睛信号更慢", "zh-TW": "大腦處理耳朵信號比眼睛信號更慢"}, vi="Não xử lý tín hiệu tai chậm hơn tín hiệu mắt", id="Otak memproses sinyal telinga lebih lambat dari sinyal mata"), False),
            opt(M(ko=_ko_o(2, 2), en="Light (~300,000 km/s) is much faster than sound (~340 m/s)", ja="光の速度（秒速約30万km）が音の速度（秒速約340m）よりはるかに速い", **{"zh-CN": "光速（约30万km/s）远快于声速（约340m/s）", "zh-TW": "光速（約30萬km/s）遠快於聲速（約340m/s）"}, vi="Tốc độ ánh sáng (~300.000 km/s) nhanh hơn rất nhiều so với âm thanh (~340 m/s)", id="Cahaya (~300.000 km/s) jauh lebih cepat dari suara (~340 m/s)"), True),
            opt(M(ko=_ko_o(2, 3), en="Lightning occurs higher up, so thunder needs time to come down", ja="稲妻が地面より高い場所で起きるため、雷が降りてくる時間が必要", **{"zh-CN": "闪电发生在更高处，雷声需要时间传下来", "zh-TW": "閃電發生在更高處，雷聲需要時間傳下來"}, vi="Sét xảy ra ở cao hơn nên sấm cần thời gian đi xuống", id="Petir terjadi lebih tinggi sehingga guntur butuh waktu turun"), False),
        ],
        M(
            ko=_ko_e(2),
            en="Light travels at about 300,000 km/s while sound travels at about 340 m/s—roughly 880,000 times slower. Light and sound start together when lightning strikes, but light arrives almost instantly while sound arrives much later. If thunder comes 3 seconds after the flash, the lightning was about 1 km away.",
            ja="光の速度は秒速約30万km、音の速度は秒速約340mで、約88万倍の差があります。稲妻の瞬間に光と音は同時に出発しますが、光はほぼ即座に届き、音はかなり遅れて届きます。雷まで3秒かかったなら、稲妻は約1km先で起きています。",
            **{"zh-CN": "光速约30万km/s，声速约340m/s，相差约88万倍。闪电瞬间光与声同时出发，但光几乎瞬间到达，声音则晚很多。若雷声在3秒后听到，说明闪电约在1km外。", "zh-TW": "光速約30萬km/s，聲速約340m/s，相差約88萬倍。閃電瞬間光與聲同時出發，但光幾乎瞬間到達，聲音則晚很多。若雷聲在3秒後聽到，說明閃電約在1km外。"},
            vi="Tốc độ ánh sáng khoảng 300.000 km/s, âm thanh khoảng 340 m/s—chênh khoảng 880.000 lần. Khi sét đánh, ánh sáng và âm thanh cùng xuất phát nhưng ánh sáng gần như tức thì còn âm thanh đến muộn hơn nhiều. Nếu sấm đến sau 3 giây, sét cách khoảng 1 km.",
            id="Kecepatan cahaya sekitar 300.000 km/s, suara sekitar 340 m/s—sekitar 880.000 kali lebih lambat. Saat petir, cahaya dan suara mulai bersamaan, tapi cahaya hampir instan sementara suara jauh lebih lambat. Jika guntur 3 detik setelah kilat, petir sekitar 1 km jauhnya.",
        ),
    ),
    q(
        M(
            ko=_ko_q(3),
            en="Why does ice float on water?",
            ja="氷が水の上に浮く理由は何ですか？",
            **{"zh-CN": "冰为什么会浮在水面上？", "zh-TW": "冰為什麼會浮在水面上？"},
            vi="Tại sao đá nổi trên mặt nước?",
            id="Mengapa es mengapung di atas air?",
        ),
        [
            opt(M(ko=_ko_o(3, 0), en="Many tiny air bubbles in ice make the overall weight lighter", ja="氷の中に小さな空気の泡が多く入っていて全体が軽い", **{"zh-CN": "冰里有很多小气泡，整体更轻", "zh-TW": "冰裡有很多小氣泡，整體更輕"}, vi="Nhiều bọt khí nhỏ trong đá khiến tổng trọng lượng nhẹ hơn", id="Banyak gelembung udara kecil dalam es membuat berat keseluruhan lebih ringan"), False),
            opt(M(ko=_ko_o(3, 1), en="When water freezes, hydrogen bonds form hexagonal crystals, volume increases, and density decreases", ja="水が凍るとき水素結合で六角形結晶構造ができ、体積が増え密度が下がる", **{"zh-CN": "水结冰时氢键形成六边形晶体结构，体积增大、密度降低", "zh-TW": "水結冰時氫鍵形成六邊形晶體結構，體積增大、密度降低"}, vi="Khi nước đông, liên kết hydro tạo cấu trúc tinh thể lục giác, thể tích tăng và mật độ giảm", id="Saat air membeku, ikatan hidrogen membentuk kristal heksagonal, volume membesar dan kepadatan menurun"), True),
            opt(M(ko=_ko_o(3, 2), en="Cold objects naturally float on warmer water", ja="冷たい物体は温かい水の上に浮く性質がある", **{"zh-CN": "冷物体有浮在暖水上的性质", "zh-TW": "冷物體有浮在暖水上的性質"}, vi="Vật lạnh có tính chất nổi trên nước ấm", id="Benda dingin memang cenderung mengapung di air hangat"), False),
            opt(M(ko=_ko_o(3, 3), en="Surface tension of ice is stronger than water's surface tension", ja="氷の表面張力が水の表面張力より強い", **{"zh-CN": "冰的表面张力比水更强", "zh-TW": "冰的表面張力比水更強"}, vi="Lực căng bề mặt của đá mạnh hơn của nước", id="Tegangan permukaan es lebih kuat dari air"), False),
        ],
        M(
            ko=_ko_e(3),
            en="Most substances are denser as solids than liquids, but water is an exception. As water cools from 4°C to 0°C, molecules form hexagonal crystals through hydrogen bonds, creating more space between molecules and increasing volume by about 9%. Same mass with larger volume means lower density, so ice floats. Thanks to this, fish can survive under frozen lakes and rivers.",
            ja="多くの物質は固体の方が液体より密度が高いですが、水は例外です。4°Cから0°Cに冷やされると水分子が水素結合で六角形結晶を作り、分子間の空間が広がって体積が約9%増えます。同じ質量で体積が大きくなると密度が下がり、氷は浮きます。このおかげで湖や川が凍っても水中生物が生きられます。",
            **{"zh-CN": "大多数物质固态比液态密度高，但水是例外。从4°C降到0°C时，水分子通过氢键形成六边形晶体，分子间距变大，体积约增9%。相同质量体积更大，密度更低，所以冰会浮。正因如此，湖泊河流结冰后水中生物仍能生存。", "zh-TW": "大多數物質固態比液態密度高，但水是例外。從4°C降到0°C時，水分子透過氫鍵形成六邊形晶體，分子間距變大，體積約增9%。相同質量體積更大，密度更低，所以冰會浮。正因如此，湖泊河流結冰後水中生物仍能生存。"},
            vi="Hầu hết chất rắn đặc hơn lỏng, nhưng nước là ngoại lệ. Khi nước nguội từ 4°C xuống 0°C, phân tử tạo tinh thể lục giác qua liên kết hydro, thể tích tăng khoảng 9%. Cùng khối lượng mà thể tích lớn hơn nên mật độ thấp hơn, đá nổi. Nhờ vậy sinh vật dưới nước vẫn sống khi hồ sông đóng băng.",
            id="Kebanyakan zat lebih padat sebagai padat, tapi air pengecualian. Saat air mendingin dari 4°C ke 0°C, molekul membentuk kristal heksagonal lewat ikatan hidrogen, volume naik sekitar 9%. Massa sama dengan volume lebih besar berarti kepadatan lebih rendah, jadi es mengapung. Berkat ini, makhluk air bisa hidup saat danau/sungai membeku.",
        ),
    ),
    q(
        M(
            ko=_ko_q(4),
            en="Why does a washing machine spin the drum quickly during the spin cycle?",
            ja="洗濯機の脱水時にドラムを高速回転させる理由は何ですか？",
            **{"zh-CN": "洗衣机脱水时为什么要高速旋转滚筒？", "zh-TW": "洗衣機脫水時為什麼要高速旋轉滾筒？"},
            vi="Tại sao máy giặt quay lồng nhanh khi vắt?",
            id="Mengapa mesin cuci memutar drum dengan cepat saat pengeringan?",
        ),
        [
            opt(M(ko=_ko_o(4, 0), en="Fast rotation creates friction heat that evaporates water", ja="高速回転で摩擦熱が生じ、水が蒸発する", **{"zh-CN": "快速旋转产生摩擦热使水蒸发", "zh-TW": "快速旋轉產生摩擦熱使水蒸發"}, vi="Quay nhanh tạo nhiệt ma sát khiến nước bay hơi", id="Putaran cepat menciptakan panas gesekan sehingga air menguap"), False),
            opt(M(ko=_ko_o(4, 1), en="A magnetic field separates water molecules from fabric", ja="磁場が水分子を衣類から分離する", **{"zh-CN": "磁场将水分子从衣物中分离", "zh-TW": "磁場將水分子從衣物中分離"}, vi="Từ trường tách phân tử nước khỏi vải", id="Medan magnet memisahkan molekul air dari kain"), False),
            opt(M(ko=_ko_o(4, 2), en="Centrifugal force pushes water outward through drum holes", ja="高速回転で生じる遠心力が水をドラムの外側へ押し出す", **{"zh-CN": "高速旋转产生的离心力将水推向滚筒外侧", "zh-TW": "高速旋轉產生的離心力將水推向滾筒外側"}, vi="Lực ly tâm từ quay nhanh đẩy nước ra ngoài qua lỗ lồng", id="Gaya sentrifugal dari putaran cepat mendorong air keluar melalui lubang drum"), True),
            opt(M(ko=_ko_o(4, 3), en="Lower internal pressure sucks water out through the holes", ja="ドラム内部の気圧が下がり水が吸い出される", **{"zh-CN": "内部气压降低把水吸出", "zh-TW": "內部氣壓降低把水吸出"}, vi="Áp suất bên trong giảm hút nước ra ngoài", id="Tekanan internal rendah menyedot air keluar"), False),
        ],
        M(
            ko=_ko_e(4),
            en="Centrifugal force is the inertial force that pushes outward from the center of a rotating object. When the drum spins fast, water soaked in clothes is pushed toward the drum wall and exits through the holes. Higher RPM means stronger centrifugal force and better spin efficiency.",
            ja="遠心力は回転する物体で中心から外側へ働く慣性力です。ドラムが高速回転すると、衣類に染み込んだ水分子は遠心力でドラム壁側（外側）へ押し出され、穴から外に出ます。RPM（毎分回転数）が高いほど遠心力が強く、脱水効率が上がります。",
            **{"zh-CN": "离心力是旋转物体从中心向外作用的惯性力。滚筒高速旋转时，渗入衣物的水分被推向筒壁并从孔中排出。RPM（每分钟转数）越高，离心力越强，脱水效率越高。", "zh-TW": "離心力是旋轉物體從中心向外作用的慣性力。滾筒高速旋轉時，滲入衣物的的水分被推向筒壁並從孔中排出。RPM（每分鐘轉數）越高，離心力越強，脫水效率越高。"},
            vi="Lực ly tâm là lực quán tính đẩy ra ngoài từ tâm vật quay. Khi lồng quay nhanh, nước thấm trong quần áo bị đẩy về thành lồng và thoát qua lỗ. RPM càng cao, lực ly tâm càng mạnh, hiệu quả vắt càng tốt.",
            id="Gaya sentrifugal adalah gaya inersia yang mendorong keluar dari pusat benda berputar. Saat drum berputar cepat, air di kain terdorong ke dinding drum dan keluar lewat lubang. RPM lebih tinggi berarti gaya sentrifugal lebih kuat dan efisiensi pengeringan lebih baik.",
        ),
    ),
    q(
        M(
            ko=_ko_q(5),
            en="What is the principle behind the flame in a typical gas lighter?",
            ja="一般的なガスライターの火がつく原理は何ですか？",
            **{"zh-CN": "普通气体打火机的火焰原理是什么？", "zh-TW": "普通氣體打火機的火焰原理是什麼？"},
            vi="Nguyên lý tạo lửa của bật lửa ga thông thường là gì?",
            id="Apa prinsip api pada korek api gas biasa?",
        ),
        [
            opt(M(ko=_ko_o(5, 0), en="A small internal battery supplies electricity to create a spark", ja="内部の小型電池が電気を供給してスパークを作る", **{"zh-CN": "内部小电池供电产生火花", "zh-TW": "內部小電池供電產生火花"}, vi="Pin nhỏ bên trong cung cấp điện tạo tia lửa", id="Baterai kecil internal memberi listrik untuk membuat percikan"), False),
            opt(M(ko=_ko_o(5, 1), en="Gas auto-ignites the moment it touches air", ja="ガスが空気に触れた瞬間自然発火する", **{"zh-CN": "气体接触空气瞬间自燃", "zh-TW": "氣體接觸空氣瞬間自燃"}, vi="Khí tự bốc cháy ngay khi chạm không khí", id="Gas menyala sendiri saat menyentuh udara"), False),
            opt(M(ko=_ko_o(5, 2), en="Pressure on a piezoelectric crystal creates voltage and a spark", ja="圧電素子（特殊結晶体）に圧力を加えると瞬間的に電圧が発生しスパークが出る", **{"zh-CN": "压电元件（特殊晶体）受压时瞬间产生电压并打出火花", "zh-TW": "壓電元件（特殊晶體）受壓時瞬間產生電壓並打出火花"}, vi="Áp lực lên tinh thể áp điện tạo điện áp tức thì và tia lửa", id="Tekanan pada kristal piezoelektrik menghasilkan tegangan instan dan percikan"), True),
            opt(M(ko=_ko_o(5, 3), en="Flint is scraped against metal to create a friction spark", ja="内部の火打石を金属でこすって摩擦火花を作る", **{"zh-CN": "用燧石刮金属产生摩擦火花", "zh-TW": "用燧石刮金屬產生摩擦火花"}, vi="Đá lửa cọ vào kim loại tạo tia lửa ma sát", id="Batu api digesek ke logam untuk membuat percikan gesekan"), False),
        ],
        M(
            ko=_ko_e(5),
            en="Electronic lighters contain a 'piezoelectric element.' Pressing the button applies pressure to the piezoelectric ceramic, instantly generating thousands of volts and a spark. This is called the 'piezoelectric effect.' As gas flows out, the spark ignites it.",
            ja="電子ライターには「圧電素子」が入っています。ボタンを押すと圧電セラミック（主に圧電セラミック）に圧力がかかり、瞬間的に数千ボルトの電圧が発生してスパークができます。これを「圧電効果（Piezoelectric Effect）」と言います。ガスが出る瞬間にこのスパークが点火します。",
            **{"zh-CN": "电子打火机内有「压电元件」。按下按钮时压电陶瓷受压，瞬间产生数千伏电压并打出火花，这称为「压电效应（Piezoelectric Effect）」。气体喷出瞬间被火花点燃。", "zh-TW": "電子打火機內有「壓電元件」。按下按鈕時壓電陶瓷受壓，瞬間產生數千伏電壓並打出火花，這稱為「壓電效應（Piezoelectric Effect）」。氣體噴出瞬間被火花點燃。"},
            vi="Bật lửa điện có 'tinh thể áp điện'. Nhấn nút tạo áp lực lên gốm áp điện, sinh hàng nghìn volt và tia lửa tức thì—gọi là 'hiệu ứng áp điện'. Khí phun ra được tia lửa đốt cháy.",
            id="Korek api elektronik punya 'elemen piezoelektrik.' Menekan tombol memberi tekanan pada keramik piezo, menghasilkan ribuan volt dan percikan instan—disebut 'efek piezoelektrik.' Saat gas keluar, percikan menyalakannya.",
        ),
    ),
    q(
        M(
            ko=_ko_q(6),
            en="Why does a fan feel cool even though it does not actually lower air temperature?",
            ja="扇風機の風は実際には空気の温度を下げないのに、なぜ涼しく感じるのですか？",
            **{"zh-CN": "风扇的风实际上不会降低空气温度，为什么却感觉凉快？", "zh-TW": "電扇的風實際上不會降低空氣溫度，為什麼卻感覺涼快？"},
            vi="Tại sao quạt tạo cảm giác mát dù không thực sự hạ nhiệt độ không khí?",
            id="Mengapa kipas terasa sejuk meski tidak benar-benar menurunkan suhu udara?",
        ),
        [
            opt(M(ko=_ko_o(6, 0), en="Fan blades slow air molecules and actually lower temperature", ja="扇風機の羽根が空気分子を遅くして実際に気温を下げる", **{"zh-CN": "扇叶让空气分子变慢，实际降低气温", "zh-TW": "扇葉讓空氣分子變慢，實際降低氣溫"}, vi="Cánh quạt làm phân tử không khí chậm lại và thực sự hạ nhiệt", id="Baling-baling memperlambat molekul udara dan benar-benar menurunkan suhu"), False),
            opt(M(ko=_ko_o(6, 1), en="Cooled air is released from the fan motor", ja="扇風機モーターから冷えた空気が放出される", **{"zh-CN": "风扇电机释放出冷空气", "zh-TW": "電扇馬達釋放出冷空氣"}, vi="Không khí lạnh được thải ra từ động cơ quạt", id="Udara dingin keluar dari motor kipas"), False),
            opt(M(ko=_ko_o(6, 2), en="Fast air evaporates sweat, removing heat through latent heat of vaporization", ja="速い風が皮膚上の汗を蒸発させ、気化熱で皮膚温度を下げる", **{"zh-CN": "快速气流蒸发皮肤汗水，通过汽化热带走热量", "zh-TW": "快速氣流蒸發皮膚汗水，透過汽化熱帶走熱量"}, vi="Gió mạnh làm mồ hôi bay hơi, lấy nhiệt qua nhiệt hóa hơi", id="Angin cepat menguapkan keringat, mengambil panas lewat panas laten penguapan"), True),
            opt(M(ko=_ko_o(6, 3), en="Fast air constricts blood vessels and sends a cold signal", ja="速い空気が皮膚の血管を収縮させ、寒い信号を送る", **{"zh-CN": "快速气流收缩皮肤血管，发送冷信号", "zh-TW": "快速氣流收縮皮膚血管，發送冷信號"}, vi="Gió nhanh co mạch máu da và gửi tín hiệu lạnh", id="Angin cepat mengecilkan pembuluh darah kulit dan mengirim sinyal dingin"), False),
        ],
        M(
            ko=_ko_e(6),
            en="A fan does not lower the temperature of the air itself. You feel cool because sweat on your skin evaporates and absorbs heat from its surroundings—this is the 'latent heat of vaporization.' If you have no sweat or are already dry, a fan feels less cool for the same reason. Air conditioners use refrigerant to actually lower air temperature, while fans use evaporative cooling.",
            ja="扇風機は空気自体の温度を下げません。皮膚上の汗（水分）が蒸発するとき周囲から熱を吸収する「気化熱」の原理で涼しく感じます。汗がない、またはすでに乾いている状態ではあまり涼しく感じないのも同じ理由です。エアコンは冷媒で実際に空気温度を下げますが、扇風機は気化冷却の原理を利用します。",
            **{"zh-CN": "风扇不会降低空气本身的温度。皮肤上的汗水蒸发时会从周围吸热，这是「汽化热」原理。没有汗水或已经干燥时就不太凉快也是同样原因。空调用冷媒真正降低空气温度，风扇则利用蒸发冷却。", "zh-TW": "電扇不會降低空氣本身的溫度。皮膚上的汗水蒸發時會從周圍吸熱，這是「汽化熱」原理。沒有汗水或已經乾燥時就不太涼快也是同樣原因。冷氣用冷媒真正降低空氣溫度，電扇則利用蒸發冷卻。"},
            vi="Quạt không hạ nhiệt độ không khí. Bạn thấy mát vì mồ hôi trên da bay hơi và hút nhiệt xung quanh—theo 'nhiệt hóa hơi'. Không có mồ hôi hoặc đã khô thì ít mát hơn. Điều hòa dùng môi chất lạnh hạ nhiệt thật, quạt dùng làm mát bay hơi.",
            id="Kipas tidak menurunkan suhu udara itu sendiri. Kamu merasa sejuk karena keringat di kulit menguap dan menyerap panas sekitar—'panas laten penguapan.' Tanpa keringat atau sudah kering, kipas terasa kurang sejuk. AC menurunkan suhu dengan refrigeran, kipas memakai pendinginan evaporatif.",
        ),
    ),
    q(
        M(
            ko=_ko_q(7),
            en="Why does pouring hot water suddenly into a regular glass cup break it?",
            ja="熱いお湯を普通のガラスコップに急に注ぐと割れる理由は何ですか？",
            **{"zh-CN": "把热水突然倒进普通玻璃杯为什么会碎？", "zh-TW": "把熱水突然倒進普通玻璃杯為什麼會碎？"},
            vi="Tại sao đổ nước nóng đột ngột vào cốc thủy tinh thường sẽ làm vỡ?",
            id="Mengapa menuangkan air panas tiba-tiba ke gelas biasa bisa memecahkannya?",
        ),
        [
            opt(M(ko=_ko_o(7, 0), en="The weight of hot water presses the cold glass", ja="熱いお湯の重さが冷たいガラスを押す", **{"zh-CN": "热水的重量压迫冷玻璃", "zh-TW": "熱水的重量壓迫冷玻璃"}, vi="Trọng lượng nước nóng ép thủy tinh lạnh", id="Berat air panas menekan kaca dingin"), False),
            opt(M(ko=_ko_o(7, 1), en="Hot water dissolves glass components", ja="熱いお湯がガラスの成分を溶かす", **{"zh-CN": "热水溶解玻璃成分", "zh-TW": "熱水溶解玻璃成分"}, vi="Nước nóng hòa tan thành phần thủy tinh", id="Air panas melarutkan komponen kaca"), False),
            opt(M(ko=_ko_o(7, 2), en="Inside and outside expand at different rates, creating stress and cracks", ja="ガラスの内側と外側が異なる速度で熱膨張し、応力で割れる", **{"zh-CN": "玻璃内外以不同速度热膨胀，产生应力而破裂", "zh-TW": "玻璃內外以不同速度熱膨脹，產生應力而破裂"}, vi="Bên trong và ngoài giãn nở nhiệt khác tốc độ, tạo ứng suất và nứt", id="Bagian dalam dan luar memuai dengan kecepatan berbeda, menciptakan tegangan dan retak"), True),
            opt(M(ko=_ko_o(7, 3), en="Water vapor suddenly expands and pushes the glass from inside", ja="水蒸気が急に膨張して内側からガラスを押す", **{"zh-CN": "水蒸气突然膨胀从内部顶开玻璃", "zh-TW": "水蒸氣突然膨脹從內部頂開玻璃"}, vi="Hơi nước giãn nở đột ngột đẩy thủy tinh từ bên trong", id="Uap air tiba-tiba mengembang mendorong kaca dari dalam"), False),
        ],
        M(
            ko=_ko_e(7),
            en="Glass has low thermal conductivity. The inside touching hot water expands quickly while the outside stays cold and expands slowly. This difference in expansion speed creates internal stress that leads to cracks. Heat-resistant glass (such as Pyrex) has a lower thermal expansion coefficient, reducing this effect.",
            ja="ガラスは熱伝導率が低い材料です。熱いお湯が触れる内側は速く膨張しますが、外側はまだ冷たく膨張が遅いです。この膨張速度差がガラス内部に応力（ストレス）を作り、割れにつながります。耐熱ガラス（パイレックスなど）は熱膨張係数が低く、この現象が減り割れにくくなります。",
            **{"zh-CN": "玻璃导热率低。接触热水的内侧快速膨胀，外侧仍冷、膨胀较慢。膨胀速度差在玻璃内部产生应力导致破裂。耐热玻璃（如Pyrex）热膨胀系数较低，可减轻此现象。", "zh-TW": "玻璃導熱率低。接觸熱水的內側快速膨脹，外側仍冷、膨脹較慢。膨脹速度差在玻璃內部產生應力導致破裂。耐熱玻璃（如Pyrex）熱膨脹係數較低，可減輕此現象。"},
            vi="Thủy tinh dẫn nhiệt kém. Mặt trong chạm nước nóng giãn nhanh, mặt ngoài vẫn lạnh giãn chậm. Chênh tốc độ giãn nở tạo ứng suất và nứt. Thủy tinh chịu nhiệt (Pyrex) có hệ số giãn nở thấp hơn.",
            id="Kaca punya konduktivitas termal rendah. Bagian dalam yang kena air panas memuai cepat, bagian luar masih dingin dan memuai lambat. Perbedaan kecepatan memuai menciptakan tegangan internal yang memecahkan kaca. Kaca tahan panas (Pyrex) punya koefisien expansi lebih rendah.",
        ),
    ),
    q(
        M(
            ko=_ko_q(8),
            en="Why does the sky appear blue during the day?",
            ja="昼間に空が青く見える理由は何ですか？",
            **{"zh-CN": "白天天空为什么看起来是蓝色的？", "zh-TW": "白天天空為什麼看起來是藍色的？"},
            vi="Tại sao bầu trời ban ngày có màu xanh?",
            id="Mengapa langit terlihat biru di siang hari?",
        ),
        [
            opt(M(ko=_ko_o(8, 0), en="Blue water from oceans and rivers reflects onto the sky", ja="海や川の青い水が空に反射される", **{"zh-CN": "海洋和河流的蓝色水面反射到天空", "zh-TW": "海洋和河流的藍色水面反射到天空"}, vi="Nước xanh của biển sông phản chiếu lên trời", id="Air biru laut dan sungai memantul ke langit"), False),
            opt(M(ko=_ko_o(8, 1), en="Oxygen molecules in the atmosphere are blue", ja="大気中の酸素分子が青い色をしている", **{"zh-CN": "大气中的氧分子呈蓝色", "zh-TW": "大氣中的氧分子呈藍色"}, vi="Phân tử oxy trong khí quyển có màu xanh", id="Molekul oksigen di atmosfer berwarna biru"), False),
            opt(M(ko=_ko_o(8, 2), en="The ozone layer emits blue light", ja="オゾン層が青い光を放つ", **{"zh-CN": "臭氧层发出蓝光", "zh-TW": "臭氧層發出藍光"}, vi="Tầng ozon phát ra ánh sáng xanh", id="Lapisan ozon memancarkan cahaya biru"), False),
            opt(M(ko=_ko_o(8, 3), en="Shorter-wavelength blue light scatters more via Rayleigh scattering", ja="波長の短い青い光が大気分子により多く散乱（レイリー散乱）される", **{"zh-CN": "波长较短的蓝光被大气分子更多散射（瑞利散射）", "zh-TW": "波長較短的藍光被大氣分子更多散射（瑞利散射）"}, vi="Ánh sáng xanh bước sóng ngắn bị tán xạ nhiều hơn (tán xạ Rayleigh)", id="Cahaya biru gelombang pendek lebih banyak diserakkan (Rayleigh scattering)"), True),
        ],
        M(
            ko=_ko_e(8),
            en="Sunlight is white light made of many colors. As it passes through the atmosphere, it collides with air molecules and scatters—this is 'Rayleigh scattering.' Shorter wavelengths scatter more strongly; blue light scatters about 10 times more than red. Scattered blue light spreads in all directions, so the sky looks blue. The same principle explains red sunsets: at dusk, light travels farther through the atmosphere, blue scatters away, and longer red wavelengths remain.",
            ja="太陽光は複数の色が混ざった白い光です。大気を通過するとき空気分子と衝突して散乱し、これを「レイリー散乱」と言います。波長が短いほど散乱が強く、青い光は赤より約10倍多く散乱されます。散乱した青い光が四方に広がり、空は青く見えます。夕焼けが赤いのも同じ原理で、日没時は光が大気をより長く通り、青は散乱され赤い長い波長だけが残ります。",
            **{"zh-CN": "阳光是由多种颜色混合的白光。穿过大气时会与空气分子碰撞散射，称为「瑞利散射」。波长越短散射越强，蓝光比红光散射约多10倍。散射的蓝光向四面八方扩散，天空因此呈蓝。晚霞偏红也是同样原理：日落时光在大气中路径更长，蓝光被散射殆尽，较长波长的红光留下。", "zh-TW": "陽光是由多種顏色混合的白光。穿過大氣時會與空氣分子碰撞散射，稱為「瑞利散射」。波長越短散射越強，藍光比紅光散射約多10倍。散射的藍光向四面八方擴散，天空因此呈藍。晚霞偏紅也是同樣原理：日落時光在大氣中路徑更長，藍光被散射殆盡，較長波長的紅光留下。"},
            vi="Ánh sáng mặt trời là ánh sáng trắng gồm nhiều màu. Khi đi qua khí quyển, nó va chạm phân tử không khí và tán xạ—'tán xạ Rayleigh.' Bước sóng ngắn tán xạ mạnh hơn; ánh xanh tán xạ khoảng gấp 10 lần đỏ. Ánh xanh tán xạ khắp hướng khiến trời xanh. Hoàng hôn đỏ cũng cùng nguyên lý: lúc chiều tối, ánh sáng đi xa hơn trong khí quyển, xanh bị tán xạ hết, đỏ còn lại.",
            id="Cahaya matahari adalah cahaya putih dari banyak warna. Saat melewati atmosfer, ia bertabrakan dengan molekul udara dan terhambur—'Rayleigh scattering.' Gelombang pendek terhambur lebih kuat; biru sekitar 10 kali lebih banyak dari merah. Cahaya biru terhambur ke segala arah sehingga langit terlihat biru. Matahari merah saat senja juga prinsip sama: cahaya menempuh atmosfer lebih jauh, biru terhambur, merah tersisa.",
        ),
    ),
    q(
        M(
            ko=_ko_q(9),
            en="What are the white lines planes leave in the sky?",
            ja="飛行機が空に残す白い線（飛行機雲）の正体は何ですか？",
            **{"zh-CN": "飞机在天空留下的白色线条（航迹云）是什么？", "zh-TW": "飛機在天空留下的白色線條（航跡雲）是什麼？"},
            vi="Những vạch trắng máy bay để lại trên trời thực sự là gì?",
            id="Apa sebenarnya garis putih yang ditinggalkan pesawat di langit?",
        ),
        [
            opt(M(ko=_ko_o(9, 0), en="Soot from burned fuel left in the sky", ja="飛行機エンジンの燃焼でできた煤が空に残る", **{"zh-CN": "飞机引擎燃烧产生的烟灰留在天空", "zh-TW": "飛機引擎燃燒產生的煙灰留在天空"}, vi="Muội từ nhiên liệu đốt cháy còn lại trên trời", id="Jelaga dari bahan bakar terbakar tertinggal di langit"), False),
            opt(M(ko=_ko_o(9, 1), en="Clouds formed by air compressed as wings pass at high speed", ja="翼が高速で通過して空気を圧縮し雲が生まれる", **{"zh-CN": "机翼高速通过压缩空气形成云", "zh-TW": "機翼高速通過壓縮空氣形成雲"}, vi="Mây hình thành khi cánh máy bay nén không khí ở tốc độ cao", id="Awan terbentuk karena udara terkompresi saat sayap melaju cepat"), False),
            opt(M(ko=_ko_o(9, 2), en="Traces from pressing existing cloud layers", ja="既存の雲層を飛行機が押してできた痕跡", **{"zh-CN": "飞机压过现有云层留下的痕迹", "zh-TW": "飛機壓過現有雲層留下的痕跡"}, vi="Vết do máy bay đè lên lớp mây sẵn có", id="Jejak dari menekan lapisan awan yang sudah ada"), False),
            opt(M(ko=_ko_o(9, 3), en="Water vapor in exhaust instantly freezes into ice crystals at 8–12 km altitude", ja="排気ガスの水蒸気が高度8~12kmの極寒空気で瞬間に凍り氷結晶になる", **{"zh-CN": "排气中的水蒸气在约8~12km高空的极寒空气中瞬间冻结成冰晶", "zh-TW": "排氣中的水蒸氣在約8~12km高空的極寒空氣中瞬間凍結成冰晶"}, vi="Hơi nước trong khí thải đông ngay thành tinh thể băng ở độ cao 8–12 km", id="Uap air dalam knalpot langsung membeku jadi kristal es di ketinggian 8–12 km"), True),
        ],
        M(
            ko=_ko_e(9),
            en="At cruising altitude (about 8–12 km), temperatures reach minus 40 to 60°C. Water vapor in engine exhaust instantly freezes into tiny ice crystals in this extreme cold. Together they appear as white lines called contrails. On humid days contrails last longer; on dry days they fade quickly.",
            ja="飛行機が運航する高度（約8~12km）の気温はマイナス40~60°Cに達します。エンジン排気ガスの水蒸気がこの極低温の空気に触れると瞬間的に凍り、微細な氷結晶になります。これが集まって白い線（飛行機雲、Contrail）として見えます。大気湿度が高い日は長く残り、乾燥した日はすぐ消えます。",
            **{"zh-CN": "飞机巡航高度（约8~12km）气温可达零下40~60°C。引擎排气中的水蒸气在这种极寒空气中瞬间冻结成微小冰晶，聚集成我们看到的白色航迹云（Contrail）。大气湿度高时维持较久，干燥时很快消失。", "zh-TW": "飛機巡航高度（約8~12km）氣溫可達零下40~60°C。引擎排氣中的水蒸氣在這種極寒空氣中瞬間凍結成微小冰晶，聚集成我們看到的白色航跡雲（Contrail）。大氣濕度高時維持較久，乾燥時很快消失。"},
            vi="Ở độ cao bay (khoảng 8–12 km), nhiệt độ có thể âm 40–60°C. Hơi nước trong khí thải đông ngay thành tinh thể băng siêu nhỏ, gom lại thành vạch trắng gọi là contrail. Ngày ẩm thì lâu tan, ngày khô thì mau biến.",
            id="Di ketinggian jelajah (sekitar 8–12 km), suhu bisa minus 40–60°C. Uap air dalam knalpot langsung membeku jadi kristal es kecil, membentuk garis putih contrail. Hari lembap contrail bertahan lama; hari kering cepat hilang.",
        ),
    ),
    q(
        M(
            ko=_ko_q(10),
            en="Why should you not put metal in a microwave?",
            ja="電子レンジに金属を入れてはいけない本当の理由は何ですか？",
            **{"zh-CN": "为什么不能在微波炉里放金属？", "zh-TW": "為什麼不能在微波爐裡放金屬？"},
            vi="Tại sao không nên cho kim loại vào lò vi sóng?",
            id="Mengapa tidak boleh memasukkan logam ke microwave?",
        ),
        [
            opt(M(ko=_ko_o(10, 0), en="Metal absorbs microwaves too well and can overheat and explode", ja="金属がマイクロ波を吸収しすぎて過熱・爆発する", **{"zh-CN": "金属过度吸收微波可能过热爆炸", "zh-TW": "金屬過度吸收微波可能過熱爆炸"}, vi="Kim loại hấp thụ sóng vi ba quá mạnh và có thể quá nhiệt, nổ", id="Logam menyerap gelombang mikro terlalu baik dan bisa overheat meledak"), False),
            opt(M(ko=_ko_o(10, 1), en="Metal melts at high temperature and contaminates food", ja="金属が高温で溶けて食べ物を汚染する", **{"zh-CN": "金属高温熔化污染食物", "zh-TW": "金屬高溫熔化污染食物"}, vi="Kim loại nóng chảy làm ô nhiễm thức ăn", id="Logam meleleh pada suhu tinggi dan mencemari makanan"), False),
            opt(M(ko=_ko_o(10, 2), en="Metal reflects microwaves, causing electrical arcing and damage", ja="金属がマイクロ波を反射し、内部でアーク（電気火花）が起き機器が損傷する", **{"zh-CN": "金属反射微波，在内部产生电弧（电火花）并损坏设备", "zh-TW": "金屬反射微波，在內部產生電弧（電火花）並損壞設備"}, vi="Kim loại phản xạ sóng vi ba, gây hồ quang điện và hư hỏng thiết bị", id="Logam memantulkan gelombang mikro, menyebabkan busur listrik dan kerusakan"), True),
            opt(M(ko=_ko_o(10, 3), en="Metal is magnetic and interferes with the microwave field", ja="金属が磁性を持ち電子レンジの磁場を妨げる", **{"zh-CN": "金属有磁性，干扰微波炉磁场", "zh-TW": "金屬有磁性，干擾微波爐磁場"}, vi="Kim loại có từ tính làm nhiễu từ trường lò vi sóng", id="Logam bersifat magnetik dan mengganggu medan microwave"), False),
        ],
        M(
            ko=_ko_e(10),
            en="Metal does not absorb microwaves—it reflects them. Reflected microwaves bounce around inside the oven, and current concentrates at sharp edges or thin parts (like foil), causing arcing (electrical sparks) in the air. These sparks can start fires or damage internal components. Some specially designed metal containers are safe, but ordinary metal should not be used.",
            ja="金属はマイクロ波を吸収せず反射します。反射されたマイクロ波が内部を跳ね回り、金属の鋭い角や薄い部分（ホイルなど）に電流が集中すると、空中にアーク（電気火花）が発生します。この火花は火災や内部部品の損傷を引き起こします。一部の特殊設計金属容器は安全ですが、普通の金属は使わないでください。",
            **{"zh-CN": "金属不吸收微波而是反射。反射的微波在炉内来回弹跳，在金属尖角或薄处（如铝箔）电流集中，会在空气中产生电弧（电火花）。火花可能引发火灾或损坏内部零件。部分特殊设计的金属容器是安全的，但普通金属不应使用。", "zh-TW": "金屬不吸收微波而是反射。反射的微波在爐內來回彈跳，在金屬尖角或薄處（如鋁箔）電流集中，會在空氣中產生電弧（電火花）。火花可能引發火災或損壞內部零件。部分特殊設計的金屬容器是安全的，但普通金屬不應使用。"},
            vi="Kim loại không hấp thụ mà phản xạ sóng vi ba. Sóng phản xạ nảy trong lò, dòng tập trung ở góc nhọn hoặc phần mỏng (giấy bạc) gây hồ quang điện. Tia lửa có thể gây cháy hoặc hỏng linh kiện. Một số hộp kim loại thiết kế đặc biệt an toàn, nhưng kim loại thường không nên dùng.",
            id="Logam tidak menyerap gelombang mikro—melainkan memantulkannya. Gelombang terpantul memantul di dalam oven, arus terkonsentrasi di sudut tajam atau bagian tipis (foil) menyebabkan busur listrik. Percikan bisa memicu kebakaran atau merusak komponen. Beberapa wadah logam khusus aman, tapi logam biasa tidak boleh.",
        ),
    ),
    q(
        M(
            ko=_ko_q(11),
            en="Why doesn't leaving the refrigerator door open cool the room on a hot day?",
            ja="暑い日に冷蔵庫のドアを開けっぱなしにしても部屋が涼しくならない理由は何ですか？",
            **{"zh-CN": "炎热天气把冰箱门敞开，为什么房间不会变凉？", "zh-TW": "炎熱天氣把冰箱門敞開，為什麼房間不會變涼？"},
            vi="Tại sao mở cửa tủ lạnh suốt ngày nóng vẫn không làm phòng mát?",
            id="Mengapa membuka pintu kulkas seharian di cuaca panas tidak mendinginkan ruangan?",
        ),
        [
            opt(M(ko=_ko_o(11, 0), en="Not enough cold air comes out to cool the whole room", ja="出る冷気の量が少なく部屋全体を冷やすには不足", **{"zh-CN": "排出的冷气太少，无法冷却整个房间", "zh-TW": "排出的冷氣太少，無法冷卻整個房間"}, vi="Lượng khí lạnh ra quá ít để làm mát cả phòng", id="Udara dingin yang keluar terlalu sedikit untuk mendinginkan seluruh ruangan"), False),
            opt(M(ko=_ko_o(11, 1), en="Efficiency drops when the door is open so it cannot work properly", ja="ドアを開けると効率が下がり正しく動かない", **{"zh-CN": "开门后效率下降，无法正常工作", "zh-TW": "開門後效率下降，無法正常工作"}, vi="Hiệu suất giảm khi mở cửa nên không hoạt động đúng", id="Efisiensi turun saat pintu terbuka sehingga tidak bekerja baik"), False),
            opt(M(ko=_ko_o(11, 2), en="A refrigerator is a heat pump that expels more heat out the back", ja="冷蔵庫は内部の熱を後ろの放熱板で外に出す装置で、結果的に部屋に熱を追加する", **{"zh-CN": "冰箱是通过后部散热板把内部热量排到外面的热泵，结果反而给房间加热", "zh-TW": "冰箱是透過後部散熱板把內部熱量排到外面的熱泵，結果反而給房間加熱"}, vi="Tủ lạnh là bơm nhiệt đẩy nhiệt ra phía sau, thực tế thêm nhiệt vào phòng", id="Kulkas adalah pompa panas yang membuang lebih banyak panas ke belakang, menambah panas ke ruangan"), True),
            opt(M(ko=_ko_o(11, 3), en="Cold and warm air cancel each other out", ja="冷気と暖かい空気が相殺され温度変化がない", **{"zh-CN": "冷气和暖空气相互抵消，温度不变", "zh-TW": "冷氣和暖空氣相互抵消，溫度不變"}, vi="Khí lạnh và khí ấm triệt tiêu nhau nên nhiệt độ không đổi", id="Udara dingin dan hangat saling meniadakan sehingga suhu tidak berubah"), False),
        ],
        M(
            ko=_ko_e(11),
            en="A refrigerator moves interior heat out through the condenser on the back—it is a 'heat pump.' When the door is open, cold air comes out front but even more heat is released into the room from the back. The fridge also works harder, converting electrical energy into additional heat. The result: the room gets hotter, not cooler.",
            ja="冷蔵庫は内部の熱を後ろの放熱板（コンデンサー）から部屋に出す「熱ポンプ」装置です。ドアを開けると前からは冷たい空気が出ますが、後ろからはそれ以上の熱が部屋に放出されます。さらに冷蔵庫はより激しく稼働し、電気エネルギーも熱に変換されます。結果、部屋は涼しくならず、より暑くなります。",
            **{"zh-CN": "冰箱是通过后部散热器（冷凝器）把内部热量排到房间的「热泵」。开门时前面会出冷气，但后面向房间释放的热量更多。冰箱还会更卖力运转，把电能也转成热量。结果：房间不会变凉，反而更热。", "zh-TW": "冰箱是透過後部散熱器（冷凝器）把內部熱量排到房間的「熱泵」。開門時前面會出冷氣，但後面向房間釋放的熱量更多。冰箱還會更賣力運轉，把電能也轉成熱量。結果：房間不會變涼，反而更熱。"},
            vi="Tủ lạnh là 'bơm nhiệt' đẩy nhiệt trong ra qua dàn nóng phía sau. Mở cửa thì phía trước có khí lạnh nhưng phía sau thải nhiều nhiệt hơn vào phòng. Máy chạy mạnh hơn, điện cũng thành nhiệt. Kết quả: phòng nóng hơn, không mát hơn.",
            id="Kulkas memindahkan panas interior lewat kondensor di belakang—'pompa panas.' Saat pintu terbuka, udara dingin keluar di depan tapi panas lebih banyak dilepas ke ruangan di belakang. Kulkas juga bekerja lebih keras, mengubah listrik jadi panas tambahan. Hasilnya: ruangan makin panas.",
        ),
    ),
]

RESULTS = [
    r(
        "Level1",
        "🌱",
        title=M(
            ko=_ko_r(0, "title"),
            en="Science starts to appear in daily life—Everyday Science Beginner 🌱",
            ja="今日から科学が見え始める、生活科学入門者 🌱",
            **{"zh-CN": "从今天开始看见科学，生活科学入门者 🌱", "zh-TW": "從今天開始看見科學，生活科學入門者 🌱"},
            vi="Hôm nay bắt đầu thấy khoa học quanh mình—Người mới khoa học đời sống 🌱",
            id="Mulai melihat sains sehari-hari—Pemula sains kehidupan 🌱",
        ),
        shortDescription=M(
            ko=_ko_r(0, "shortDescription"),
            en="You got 2 or fewer correct. That is completely normal—these are things you learned in school but never thought about again in daily life.",
            ja="12問中2問以下正解。当然です。学校で習ったが日常で考え直したことがないものばかりです。",
            **{"zh-CN": "12题中答对2题及以下。这很正常——都是学校学过但日常生活中没再想过的事。", "zh-TW": "12題中答對2題及以下。這很正常——都是學校學過但日常生活中沒再想過的事。"},
            vi="Trả lời đúng 2 câu trở xuống. Hoàn toàn bình thường—những thứ học ở trường nhưng chưa bao giờ nghĩ lại trong đời sống.",
            id="Benar 2 atau kurang. Wajar saja—hal yang pernah dipelajari di sekolah tapi belum pernah dipikir lagi sehari-hari.",
        ),
        description=M(
            ko=_ko_r(0, "description"),
            en="Did you get stuck even on the easy section? After this test, you will probably think twice the next time you hear the refrigerator hum. That is the start.",
            ja="簡単な区間でもつまずきましたか？このテストをきっかけに、冷蔵庫の音が聞こえるたびにもう一度考えるようになるはずです。それが始まりです。",
            **{"zh-CN": "简单题也卡住了吗？这次测试之后，下次听到冰箱嗡嗡声你可能会多想一下。这就是开始。", "zh-TW": "簡單題也卡住了嗎？這次測試之後，下次聽到冰箱嗡嗡聲你可能會多想一下。這就是開始。"},
            vi="Phần dễ cũng vấp à? Sau bài test này, lần tới nghe tủ lạnh kêu bạn có lẽ sẽ nghĩ thêm một chút. Đó là khởi đầu.",
            id="Mentok di bagian mudah? Setelah tes ini, lain kali dengar kulkas buzz kamu mungkin akan berpikir lagi. Itu awalnya.",
        ),
        scienceGrade=M(
            ko=_ko_r(0, "scienceGrade"),
            en="Everyday Science Grade: Lv.1 Beginner 🌱",
            ja="生活科学等級: Lv.1 入門者 🌱",
            **{"zh-CN": "生活科学等级：Lv.1 入门者 🌱", "zh-TW": "生活科學等級：Lv.1 入門者 🌱"},
            vi="Cấp khoa học đời sống: Lv.1 Người mới 🌱",
            id="Grade sains sehari-hari: Lv.1 Pemula 🌱",
        ),
        scoreRange=M(
            ko=_ko_r(0, "scoreRange"),
            en="Correct answers: 0~2",
            ja="正解数: 0~2問",
            **{"zh-CN": "答对数：0~2题", "zh-TW": "答對數：0~2題"},
            vi="Số câu đúng: 0~2",
            id="Jawaban benar: 0~2",
        ),
        strengthZone=EMPTY,
        weakZone=EMPTY,
        retakeTip=M(
            ko=_ko_r(0, "retakeTip"),
            en="Retake tip: Re-read explanations for today's wrong answers—they stick surprisingly well",
            ja="再挑戦のコツ: 今日間違えた問題の解説を読み直して覚える。意外と記憶に残る",
            **{"zh-CN": "重试提示：重读今天错题的解析并记住，意外地很牢", "zh-TW": "重試提示：重讀今天錯題的解析並記住，意外地很牢"},
            vi="Mẹo thử lại: Đọc lại giải thích câu sai hôm nay—bất ngờ nhớ lâu",
            id="Tips ulang: Baca ulang penjelasan jawaban salah hari ini—ternyata mudah diingat",
        ),
        characteristic=EMPTY,
        regretPoint=EMPTY,
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(0, "oneLiner"),
            en="The moment you learn something you didn't know is the most fun moment. Today is that start",
            ja="知らなかったことを知る瞬間が一番楽しい瞬間です。今日がその始まりです",
            **{"zh-CN": "发现未知的那一刻最有趣。今天就是开始", "zh-TW": "發現未知的那一刻最有趣。今天就是開始"},
            vi="Khoảnh khắc biết điều mình chưa biết là lúc vui nhất. Hôm nay là khởi đầu",
            id="Momen ketika tahu hal yang belum diketahui adalah paling seru. Hari ini itu awalnya",
        ),
        shareLine=M(
            ko=_ko_r(0, "shareLine"),
            en="Everyday Science Quiz: Lv.1 Beginner 🌱 Just learned today the fridge hum is the compressor... hear it every day lol → Wait, why though? Challenge a friend!",
            ja="生活の科学クイズ: Lv.1 入門者 🌱 冷蔵庫の音がコンプレッサーだったの今日初めて知った…毎日聞いてたのに ㅋㅋ → え、なんで？友達に挑戦状",
            **{"zh-CN": "生活科学Quiz：Lv.1 入门者 🌱 今天才知道冰箱嗡嗡声是压缩机…每天都听 哈哈 → 啊？为什么？发给朋友挑战！", "zh-TW": "生活科學Quiz：Lv.1 入門者 🌱 今天才知道冰箱嗡嗡聲是壓縮機…每天都聽 哈哈 → 啊？為什麼？發給朋友挑戰！"},
            vi="Everyday Science Quiz: Lv.1 Người mới 🌱 Hôm nay mới biết tiếng tủ lạnh là máy nén... nghe mỗi ngày mà ㅋㅋ → Ủa sao vậy? Thách bạn bè!",
            id="Everyday Science Quiz: Lv.1 Pemula 🌱 Baru tahu buzz kulkas itu kompresor... tiap hari dengar ㅋㅋ → Loh kenapa? Tantang teman!",
        ),
    ),
    r(
        "Level2",
        "🔍",
        title=M(
            ko=_ko_r(1, "title"),
            en="Sounds familiar but hard to explain—Everyday Science Apprentice 🔍",
            ja="聞いたことはあるが説明はできない、生活科学見習い 🔍",
            **{"zh-CN": "好像听过但说不清，生活科学学徒 🔍", "zh-TW": "好像聽過但說不清，生活科學學徒 🔍"},
            vi="Nghe quen nhưng không giải thích được—Học việc khoa học đời sống 🔍",
            id="Pernah dengar tapi sulit jelaskan—Magang sains sehari-hari 🔍",
        ),
        shortDescription=M(
            ko=_ko_r(1, "shortDescription"),
            en="You know you've heard it somewhere but can't explain precisely. Average level.",
            ja="どこかで聞いたことはあるが正確には説明できないレベルです。平均程度です。",
            **{"zh-CN": "好像在哪听过，但说不清楚。平均水平。", "zh-TW": "好像在哪聽過，但說不清楚。平均水平。"},
            vi="Có vẻ từng nghe đâu đó nhưng không nói rõ được. Mức trung bình.",
            id="Pernah dengar di suatu tempat tapi tidak bisa jelaskan tepat. Level rata-rata.",
        ),
        description=M(
            ko=_ko_r(1, "description"),
            en="You got some easy questions right but started stumbling after the middle section. Concepts like the piezoelectric effect, latent heat of vaporization, and Rayleigh scattering probably clicked for the first time today.",
            ja="簡単な区間はある程度当てましたが、中盤以降でつまずき始めたはずです。圧電効果・気化熱・レイリー散乱などの概念が今日初めてつながったかもしれません。",
            **{"zh-CN": "简单题答对了一些，但中段之后开始卡住。压电效应、汽化热、瑞利散射等概念今天可能是第一次串起来。", "zh-TW": "簡單題答對了一些，但中段之後開始卡住。壓電效應、汽化熱、瑞利散射等概念今天可能是第一次串起來。"},
            vi="Phần dễ đúng khá nhưng từ giữa bài bắt đầu vấp. Hiệu ứng áp điện, nhiệt hóa hơi, tán xạ Rayleigh có lẽ hôm nay mới nối được.",
            id="Bagian mudah cukup benar tapi mulai mentok setelah tengah. Efek piezoelektrik, panas laten, Rayleigh scattering mungkin baru nyambung hari ini.",
        ),
        scienceGrade=M(
            ko=_ko_r(1, "scienceGrade"),
            en="Everyday Science Grade: Lv.2 Apprentice 🔍",
            ja="生活科学等級: Lv.2 見習い 🔍",
            **{"zh-CN": "生活科学等级：Lv.2 学徒 🔍", "zh-TW": "生活科學等級：Lv.2 學徒 🔍"},
            vi="Cấp khoa học đời sống: Lv.2 Học việc 🔍",
            id="Grade sains sehari-hari: Lv.2 Magang 🔍",
        ),
        scoreRange=M(
            ko=_ko_r(1, "scoreRange"),
            en="Correct answers: 3~5",
            ja="正解数: 3~5問",
            **{"zh-CN": "答对数：3~5题", "zh-TW": "答對數：3~5題"},
            vi="Số câu đúng: 3~5",
            id="Jawaban benar: 3~5",
        ),
        strengthZone=M(
            ko=_ko_r(1, "strengthZone"),
            en="Strength zone: Easy Q1~Q4",
            ja="得意区間: 易しい Q1~Q4",
            **{"zh-CN": "强项区间：简单题 Q1~Q4", "zh-TW": "強項區間：簡單題 Q1~Q4"},
            vi="Điểm mạnh: Câu dễ Q1~Q4",
            id="Zona kuat: Soal mudah Q1~Q4",
        ),
        weakZone=M(
            ko=_ko_r(1, "weakZone"),
            en="Weak zone: Medium to hard Q5~Q12",
            ja="弱点区間: 中間~難しい Q5~Q12",
            **{"zh-CN": "弱项区间：中等~难题 Q5~Q12", "zh-TW": "弱項區間：中等~難題 Q5~Q12"},
            vi="Điểm yếu: Câu trung bình~khó Q5~Q12",
            id="Zona lemah: Soal menengah~sulit Q5~Q12",
        ),
        retakeTip=EMPTY,
        characteristic=EMPTY,
        regretPoint=EMPTY,
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(1, "oneLiner"),
            en="You are the type who says 'I think I've heard that somewhere' in conversation. A little more and you can explain it",
            ja="会話中に「あ、それどこかで聞いたことある」と言うタイプです。もう少しで説明できます",
            **{"zh-CN": "聊天时会「啊那个我好像在哪听过」的类型。再多一点就能解释了", "zh-TW": "聊天時會「啊那個我好像在哪聽過」的類型。再多一點就能解釋了"},
            vi="Kiểu người hay nói 'hình như từng nghe đâu đó' khi trò chuyện. Thêm chút nữa là giải thích được",
            id="Tipe yang bilang 'kayaknya pernah dengar di mana ya' saat ngobrol. Sedikit lagi bisa jelaskan",
        ),
        shareLine=M(
            ko=_ko_r(1, "shareLine"),
            en="Everyday Science Quiz: Lv.2 Apprentice 🔍 Shocked that fans don't actually lower air temp... then what makes it cool?? → Wait, why though? Does everyone know this?",
            ja="生活の科学クイズ: Lv.2 見習い 🔍 扇風機は実際は空気温度下げないの衝撃…じゃあ何で涼しいの？？ → え、なんで？みんな知ってる？",
            **{"zh-CN": "生活科学Quiz：Lv.2 学徒 🔍 风扇其实不降气温太震惊…那凉从哪来？？ → 啊？为什么？你们都知道吗？", "zh-TW": "生活科學Quiz：Lv.2 學徒 🔍 電扇其實不降氣溫太震驚…那涼從哪來？？ → 啊？為什麼？你們都知道嗎？"},
            vi="Everyday Science Quiz: Lv.2 Học việc 🔍 Sốc vì quạt không hạ nhiệt không khí... vậy mát từ đâu?? → Ủa sao vậy? Mọi người biết hết à?",
            id="Everyday Science Quiz: Lv.2 Magang 🔍 Kaget kipas tidak turunkan suhu udara... terus sejuk dari mana?? → Loh kenapa? Kalian tau semua?",
        ),
    ),
    r(
        "Level3",
        "🧪",
        title=M(
            ko=_ko_r(2, "title"),
            en="The science person among friends—Everyday Science Explorer 🧪",
            ja="友達の中の科学担当、生活科学探究者 🧪",
            **{"zh-CN": "朋友中的科学担当，生活科学探索者 🧪", "zh-TW": "朋友中的科學擔當，生活科學探索者 🧪"},
            vi="Người khoa học trong hội bạn—Nhà khám phá khoa học đời sống 🧪",
            id="Orang sains di lingkaran teman—Penjelajah sains sehari-hari 🧪",
        ),
        shortDescription=M(
            ko=_ko_r(2, "shortDescription"),
            en="You got more than half correct. Above-average everyday science knowledge.",
            ja="半分以上正解しました。平均以上の生活科学常識です。",
            **{"zh-CN": "答对一半以上。高于平均的生活科学常识。", "zh-TW": "答對一半以上。高於平均的生活科學常識。"},
            vi="Đúng hơn một nửa. Kiến thức khoa học đời sống trên mức trung bình.",
            id="Benar lebih dari setengah. Pengetahuan sains sehari-hari di atas rata-rata.",
        ),
        description=M(
            ko=_ko_r(2, "description"),
            en="You got most easy questions and more than half of the middle section. You probably missed a few in the hard section (Rayleigh scattering, contrails, metal in microwaves, refrigerator heat pump). Explain what you learned today and people will say 'Wait, really?'",
            ja="簡単な区間はほぼ正解し、中間区間も半分以上クリアしました。難しい区間（レイリー散乱・飛行機雲・電子レンジの金属・冷蔵庫の原理）でいくつか落ちたはずです。今日学んだことを周りに説明すると「え、本当に？」と言われます。",
            **{"zh-CN": "简单题大多答对，中等题也过了一半。难题（瑞利散射、航迹云、微波炉金属、冰箱原理）可能掉了几题。把今天学的讲给别人听，会得到「啊？真的？」的反应。", "zh-TW": "簡單題大多答對，中等題也過了一半。難題（瑞利散射、航跡雲、微波爐金屬、冰箱原理）可能掉了幾題。把今天學的講給別人聽，會得到「啊？真的？」的反應。"},
            vi="Phần dễ gần như đúng hết, phần giữa đúng hơn nửa. Có lẽ vấp vài câu khó (Rayleigh, contrail, kim loại trong lò vi sóng, bơm nhiệt tủ lạnh). Giải thích hôm nay học được gì thì mọi người sẽ nói 'Ủa thật à?'",
            id="Bagian mudah kebanyakan benar, tengah lebih dari setengah. Mungkin salah beberapa di bagian sulit (Rayleigh, contrail, logam di microwave, pompa panas kulkas). Jelaskan yang dipelajari hari ini dan orang akan bilang 'Loh beneran?'",
        ),
        scienceGrade=M(
            ko=_ko_r(2, "scienceGrade"),
            en="Everyday Science Grade: Lv.3 Explorer 🧪",
            ja="生活科学等級: Lv.3 探究者 🧪",
            **{"zh-CN": "生活科学等级：Lv.3 探索者 🧪", "zh-TW": "生活科學等級：Lv.3 探索者 🧪"},
            vi="Cấp khoa học đời sống: Lv.3 Nhà khám phá 🧪",
            id="Grade sains sehari-hari: Lv.3 Penjelajah 🧪",
        ),
        scoreRange=M(
            ko=_ko_r(2, "scoreRange"),
            en="Correct answers: 6~8",
            ja="正解数: 6~8問",
            **{"zh-CN": "答对数：6~8题", "zh-TW": "答對數：6~8題"},
            vi="Số câu đúng: 6~8",
            id="Jawaban benar: 6~8",
        ),
        strengthZone=M(
            ko=_ko_r(2, "strengthZone"),
            en="Strength zone: Easy + medium sections",
            ja="得意区間: 易しい＋中間区間",
            **{"zh-CN": "强项区间：简单+中等区间", "zh-TW": "強項區間：簡單+中等區間"},
            vi="Điểm mạnh: Phần dễ + trung bình",
            id="Zona kuat: Bagian mudah + menengah",
        ),
        weakZone=M(
            ko=_ko_r(2, "weakZone"),
            en="Weak zone: Hard Q9~Q12",
            ja="弱点区間: 難しい Q9~Q12",
            **{"zh-CN": "弱项区间：难题 Q9~Q12", "zh-TW": "弱項區間：難題 Q9~Q12"},
            vi="Điểm yếu: Câu khó Q9~Q12",
            id="Zona lemah: Soal sulit Q9~Q12",
        ),
        retakeTip=EMPTY,
        characteristic=EMPTY,
        regretPoint=EMPTY,
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(2, "oneLiner"),
            en="At this level you can chime in when science topics come up in conversation",
            ja="このレベルなら科学の話題が出たとき一言入れられる人です",
            **{"zh-CN": "这个水平，科学话题出现时能插一句", "zh-TW": "這個水平，科學話題出現時能插一句"},
            vi="Mức này đủ để chen một câu khi có chủ đề khoa học",
            id="Level ini cukup untuk ikut bicara saat topik sains muncul",
        ),
        shareLine=M(
            ko=_ko_r(2, "shareLine"),
            en="Everyday Science Quiz: Lv.3 Explorer 🧪 Got more than half but didn't know contrails are ice crystals... anyone else? → Wait, why though? Try it!",
            ja="生活の科学クイズ: Lv.3 探究者 🧪 半分以上当てたのに飛行機雲が氷結晶だったの知らなかった…知ってる人いる？ → え、なんで？挑戦して",
            **{"zh-CN": "生活科学Quiz：Lv.3 探索者 🧪 对了一半以上但不知道航迹云是冰晶…有人知道吗？ → 啊？为什么？来挑战！", "zh-TW": "生活科學Quiz：Lv.3 探索者 🧪 對了一半以上但不知道航跡雲是冰晶…有人知道嗎？ → 啊？為什麼？來挑戰！"},
            vi="Everyday Science Quiz: Lv.3 Khám phá 🧪 Đúng hơn nửa nhưng không biết vạch trắng là tinh thể băng... ai biết không? → Ủa sao vậy? Thử đi!",
            id="Everyday Science Quiz: Lv.3 Penjelajah 🧪 Benar lebih setengah tapi tidak tahu contrail itu kristal es... ada yang tahu? → Loh kenapa? Coba!",
        ),
    ),
    r(
        "Level4",
        "⚗️",
        title=M(
            ko=_ko_r(3, "title"),
            en="Ready for science trivia talk—Everyday Science Expert ⚗️",
            ja="科学雑学トークができるレベル、生活科学上級者 ⚗️",
            **{"zh-CN": "能聊科学杂谈的水平，生活科学高手 ⚗️", "zh-TW": "能聊科學雜談的水平，生活科學高手 ⚗️"},
            vi="Đủ trình nói chuyện khoa học thú vị—Cao thủ khoa học đời sống ⚗️",
            id="Siap obrolan trivia sains—Ahli sains sehari-hari ⚗️",
        ),
        shortDescription=M(
            ko=_ko_r(3, "shortDescription"),
            en="You got most of the hard section right. Top 15% everyday science knowledge.",
            ja="難しい区間までほとんど正解しました。上位15%の生活科学知識です。",
            **{"zh-CN": "难题也大多答对。生活科学知识前15%。", "zh-TW": "難題也大多答對。生活科學知識前15%。"},
            vi="Phần khó cũng đúng hầu hết. Top 15% kiến thức khoa học đời sống.",
            id="Bagian sulit kebanyakan benar. Top 15% pengetahuan sains sehari-hari.",
        ),
        description=M(
            ko=_ko_r(3, "description"),
            en="If you know why the sky is blue (Rayleigh scattering), that contrails are ice crystals, and that opening a fridge door heats the room, you probably enjoy science content and pay attention to how everyday things work.",
            ja="空が青い理由（レイリー散乱）、飛行機雲が氷結晶であること、冷蔵庫のドアを開けると部屋が暑くなることまで知っているなら、普段から科学コンテンツを楽しみ、日常の仕組みに関心がある人の可能性が高いです。",
            **{"zh-CN": "若知道天空为何蓝（瑞利散射）、航迹云是冰晶、开冰箱门会让房间更热，说明你平时爱看科学内容，关注日常原理。", "zh-TW": "若知道天空為何藍（瑞利散射）、航跡雲是冰晶、開冰箱門會讓房間更熱，說明你平時愛看科學內容，關注日常原理。"},
            vi="Biết vì sao trời xanh (Rayleigh), contrail là tinh thể băng, mở cửa tủ lạnh làm phòng nóng hơn—bạn có lẽ thích nội dung khoa học và quan tâm cơ chế đời thường.",
            id="Kalau tahu kenapa langit biru (Rayleigh), contrail itu kristal es, buka pintu kulkas membuat ruangan lebih panas—kamu mungkin suka konten sains dan peduli cara kerja hal sehari-hari.",
        ),
        scienceGrade=M(
            ko=_ko_r(3, "scienceGrade"),
            en="Everyday Science Grade: Lv.4 Expert ⚗️",
            ja="生活科学等級: Lv.4 上級者 ⚗️",
            **{"zh-CN": "生活科学等级：Lv.4 高手 ⚗️", "zh-TW": "生活科學等級：Lv.4 高手 ⚗️"},
            vi="Cấp khoa học đời sống: Lv.4 Cao thủ ⚗️",
            id="Grade sains sehari-hari: Lv.4 Ahli ⚗️",
        ),
        scoreRange=M(
            ko=_ko_r(3, "scoreRange"),
            en="Correct answers: 9~10",
            ja="正解数: 9~10問",
            **{"zh-CN": "答对数：9~10题", "zh-TW": "答對數：9~10題"},
            vi="Số câu đúng: 9~10",
            id="Jawaban benar: 9~10",
        ),
        strengthZone=EMPTY,
        weakZone=EMPTY,
        retakeTip=EMPTY,
        characteristic=M(
            ko=_ko_r(3, "characteristic"),
            en="Traits of this result: enjoys science YouTube channels, often reacts to science content",
            ja="この結果を持つ人の特徴: 普段YouTubeの科学チャンネルをよく見る。科学コンテンツによく反応する",
            **{"zh-CN": "此结果特征：平时爱看YouTube科学频道，常对科学内容有反应", "zh-TW": "此結果特徵：平時愛看YouTube科學頻道，常對科學內容有反應"},
            vi="Đặc điểm: hay xem kênh khoa học trên YouTube, thường phản ứng với nội dung khoa học",
            id="Ciri hasil ini: suka channel sains YouTube, sering bereaksi pada konten sains",
        ),
        regretPoint=M(
            ko=_ko_r(3, "regretPoint"),
            en="Almost there: 2~3 away from a perfect score. Re-read explanations for missed questions",
            ja="惜しいポイント: 満点まで2~3問差。間違えた問題の解説をもう一度読む",
            **{"zh-CN": "遗憾点：离满分差2~3题。重读错题解析", "zh-TW": "遺憾點：離滿分差2~3題。重讀錯題解析"},
            vi="Tiếc nuối: cách điểm tuyệt đối 2~3 câu. Đọc lại giải thích câu sai",
            id="Sayangnya: tinggal 2~3 lagi sempurna. Baca ulang penjelasan yang salah",
        ),
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(3, "oneLiner"),
            en="At this level, 'Oh I know that, because...' comes naturally in conversation",
            ja="このレベルなら会話で「あ、それ知ってる。なぜなら…」が自然に出ます",
            **{"zh-CN": "这个水平，聊天时「哦我知道，因为…」会自然冒出来", "zh-TW": "這個水平，聊天時「哦我知道，因為…」會自然冒出來"},
            vi="Mức này thì 'Ồ tôi biết, vì...' tự nhiên lòi ra khi trò chuyện",
            id="Level ini, 'Oh itu tahu, karena...' keluar natural saat ngobrol",
        ),
        shareLine=M(
            ko=_ko_r(3, "shareLine"),
            en="Everyday Science Quiz: Lv.4 Expert ⚗️ Top 15%... got that opening the fridge heats the room → Wait, why though? Get them all and you're a science pro",
            ja="生活の科学クイズ: Lv.4 上級者 ⚗️ 上位15%…冷蔵庫のドア開けると部屋が暑くなるの正解 → え、なんで？全部当てたら科学上級者認定",
            **{"zh-CN": "生活科学Quiz：Lv.4 高手 ⚗️ 前15%…开冰箱门房间更热答对了 → 啊？为什么？全对算科学高手", "zh-TW": "生活科學Quiz：Lv.4 高手 ⚗️ 前15%…開冰箱門房間更熱答對了 → 啊？為什麼？全對算科學高手"},
            vi="Everyday Science Quiz: Lv.4 Cao thủ ⚗️ Top 15%... đúng câu mở tủ lạnh phòng nóng hơn → Ủa sao vậy? Full điểm = cao thủ khoa học",
            id="Everyday Science Quiz: Lv.4 Ahli ⚗️ Top 15%... benar soal buka kulkas ruangan lebih panas → Loh kenapa? Full score = ahli sains",
        ),
    ),
    r(
        "Level5",
        "🏆",
        title=M(
            ko=_ko_r(4, "title"),
            en="Daily life looks like science—Everyday Science Master 🏆",
            ja="日常が科学に見える人、生活科学マスター 🏆",
            **{"zh-CN": "日常皆科学的人，生活科学大师 🏆", "zh-TW": "日常皆科學的人，生活科學大師 🏆"},
            vi="Cuộc sống hàng ngày đều là khoa học—Bậc thầy khoa học đời sống 🏆",
            id="Kehidupan sehari-hari terlihat seperti sains—Master sains sehari-hari 🏆",
        ),
        shortDescription=M(
            ko=_ko_r(4, "shortDescription"),
            en="You got 11 or 12 correct. If you know microwave arcing, refrigerator heat pumps, and more, you are an everyday science master.",
            ja="11問または12問全問正解。電子レンジのアーク、冷蔵庫の熱ポンプ原理まで知っているなら生活科学マスターです。",
            **{"zh-CN": "答对11或12题。若连微波炉电弧、冰箱热泵原理都知道，你就是生活科学大师。", "zh-TW": "答對11或12題。若連微波爐電弧、冰箱熱泵原理都知道，你就是生活科學大師。"},
            vi="Đúng 11 hoặc 12 câu. Biết hồ quang lò vi sóng, bơm nhiệt tủ lạnh—bạn là master khoa học đời sống.",
            id="Benar 11 atau 12. Tahu busur listrik microwave, pompa panas kulkas—kamu master sains sehari-hari.",
        ),
        description=M(
            ko=_ko_r(4, "description"),
            en="Piezoelectric effect, Rayleigh scattering, latent heat of vaporization, thermal expansion, heat pumps—these concepts feel familiar. You think scientifically in daily life, and this knowledge shines in conversation beyond quizzes.",
            ja="圧電効果・レイリー散乱・気化熱・熱膨張係数・熱ポンプ。これらの概念が親しみやすく感じられるなら、日常で科学的に考える人です。この知識はクイズ以上に会話で輝きます。",
            **{"zh-CN": "压电效应、瑞利散射、汽化热、热膨胀、热泵——这些概念对你很熟悉。你在日常生活中科学思考，这些知识在聊天中比测验更有价值。", "zh-TW": "壓電效應、瑞利散射、汽化熱、熱膨脹、熱泵——這些概念對你很熟悉。你在日常生活中科學思考，這些知識在聊天中比測驗更有價值。"},
            vi="Hiệu ứng áp điện, Rayleigh, nhiệt hóa hơi, giãn nở nhiệt, bơm nhiệt—các khái niệm này quen thuộc. Bạn nghĩ theo khoa học trong đời sống, kiến thức này tỏa sáng khi trò chuyện hơn cả quiz.",
            id="Efek piezoelektrik, Rayleigh, panas laten, expansi termal, pompa panas—konsep ini terasa familiar. Kamu berpikir ilmiah sehari-hari, pengetahuan ini bersinar di obrolan lebih dari kuis.",
        ),
        scienceGrade=M(
            ko=_ko_r(4, "scienceGrade"),
            en="Everyday Science Grade: Lv.5 Master 🏆",
            ja="生活科学等級: Lv.5 マスター 🏆",
            **{"zh-CN": "生活科学等级：Lv.5 大师 🏆", "zh-TW": "生活科學等級：Lv.5 大師 🏆"},
            vi="Cấp khoa học đời sống: Lv.5 Bậc thầy 🏆",
            id="Grade sains sehari-hari: Lv.5 Master 🏆",
        ),
        scoreRange=M(
            ko=_ko_r(4, "scoreRange"),
            en="Correct answers: 11~12",
            ja="正解数: 11~12問",
            **{"zh-CN": "答对数：11~12题", "zh-TW": "答對數：11~12題"},
            vi="Số câu đúng: 11~12",
            id="Jawaban benar: 11~12",
        ),
        strengthZone=EMPTY,
        weakZone=EMPTY,
        retakeTip=EMPTY,
        characteristic=M(
            ko=_ko_r(4, "characteristic"),
            en="How this result is possible: STEM major, science YouTube fan, or natural science-minded person",
            ja="この結果が可能な場合: 理工系専攻・科学YouTubeチャンネル愛好者・理系センス所有者",
            **{"zh-CN": "可能情况：理工科专业、科学YouTube爱好者、天生理科思维", "zh-TW": "可能情況：理工科專業、科學YouTube愛好者、天生理科思維"},
            vi="Khả năng đạt kết quả này: chuyên ngành STEM, fan kênh khoa học YouTube, hoặc tư duy khoa học bẩm sinh",
            id="Kemungkinan hasil ini: jurusan STEM, penggemar channel sains YouTube, atau otak sains alami",
        ),
        regretPoint=EMPTY,
        certificationPhrase=M(
            ko=_ko_r(4, "certificationPhrase"),
            en="Everyday Science Master achieved 🏆 From refrigerators to the sky—you know it all",
            ja="生活科学マスター達成 🏆 冷蔵庫から空まで全部わかる",
            **{"zh-CN": "生活科学大师达成 🏆 从冰箱到天空全都知道", "zh-TW": "生活科學大師達成 🏆 從冰箱到天空全都知道"},
            vi="Đạt Everyday Science Master 🏆 Từ tủ lạnh đến bầu trời—biết hết",
            id="Everyday Science Master tercapai 🏆 Dari kulkas sampai langit—semua tahu",
        ),
        oneLiner=M(
            ko=_ko_r(4, "oneLiner"),
            en="You see science in everyday life. Feel free to show off this result",
            ja="日常の中で科学が見える人です。この結果、自慢してもいい",
            **{"zh-CN": "你在日常中看到科学。这个结果值得炫耀", "zh-TW": "你在日常中看到科學。這個結果值得炫耀"},
            vi="Bạn thấy khoa học trong đời sống hàng ngày. Kết quả này đáng khoe",
            id="Kamu melihat sains dalam kehidupan sehari-hari. Hasil ini layak dibanggakan",
        ),
        shareLine=M(
            ko=_ko_r(4, "shareLine"),
            en="Everyday Science Quiz: Lv.5 Master 🏆 Knew metal in microwaves causes arcing... got Rayleigh scattering too → Wait, why though? Anyone get them all? Show yourself!",
            ja="生活の科学クイズ: Lv.5 マスター 🏆 電子レンジに金属入れるとアーク発生知ってた…レイリー散乱も正解 → え、なんで？全部当てた人出てこい",
            **{"zh-CN": "生活科学Quiz：Lv.5 大师 🏆 知道微波炉放金属会电弧…瑞利散射也对了 → 啊？为什么？全对的人出来！", "zh-TW": "生活科學Quiz：Lv.5 大師 🏆 知道微波爐放金屬會電弧…瑞利散射也對了 → 啊？為什麼？全對的人出來！"},
            vi="Everyday Science Quiz: Lv.5 Master 🏆 Biết kim loại trong lò vi sóng gây hồ quang... Rayleigh cũng đúng → Ủa sao vậy? Ai full điểm ra đây!",
            id="Everyday Science Quiz: Lv.5 Master 🏆 Tahu logam di microwave bikin busur... Rayleigh juga benar → Loh kenapa? Ada yang full score? Keluar!",
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
    for opt_text, is_correct in item["options"]:
        parts.append(f"      quizOpt({fmt_ml(opt_text, '        ')}, {str(is_correct).lower()}),")
    parts.append("    ],")
    parts.append(f"    correctExplanation: {fmt_ml(item['explanation'])},")
    parts.append(f"    wrongTraps: {fmt_ml(EMPTY)},")
    parts.append("  },")
    return "\n".join(parts)


def fmt_result(item: dict) -> str:
    ml_fields = [
        "title",
        "shortDescription",
        "description",
        "scienceGrade",
        "scoreRange",
        "strengthZone",
        "weakZone",
        "retakeTip",
        "characteristic",
        "regretPoint",
        "certificationPhrase",
        "oneLiner",
        "shareLine",
    ]
    parts = ["  {"]
    parts.append(f"    type: '{item['type']}',")
    parts.append(f"    emoji: '{item['emoji']}',")
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
        + "\n];\n\nexport const phase3EverydayScienceQuizResults: Phase3EverydayScienceQuizResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3EverydayScienceQuizData.ts"
    body = build_ts()
    out.write_text(body, encoding="utf-8")
    print(f"Wrote {out}")
    print(f"Bytes: {len(body.encode('utf-8'))}")
    print(f"Lines: {body.count(chr(10)) + (0 if body.endswith(chr(10)) else 1)}")


if __name__ == "__main__":
    main()
