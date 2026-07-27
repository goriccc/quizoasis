"""Generate lib/phase3AloneTimeTypeData.ts with full 7-language localeMap() content."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나의 '찐 혼자 시간' 유형 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 · 7개 로케일 */

export type Phase3AloneTimeTypeLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3AloneTimeTypeLocaleKey, string>): Record<Phase3AloneTimeTypeLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3AloneTimeTypeLocaleKey, string>, score: number): { text: Record<Phase3AloneTimeTypeLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3AloneTimeTypeQuestion {
  id: number;
  question: Record<Phase3AloneTimeTypeLocaleKey, string>;
  options: { text: Record<Phase3AloneTimeTypeLocaleKey, string>; score: number }[];
}

export interface Phase3AloneTimeTypeResult {
  type: string;
  emoji: string;
  title: Record<Phase3AloneTimeTypeLocaleKey, string>;
  shortDescription: Record<Phase3AloneTimeTypeLocaleKey, string>;
  description: Record<Phase3AloneTimeTypeLocaleKey, string>;
  soloTimeType: Record<Phase3AloneTimeTypeLocaleKey, string>;
  soloKeywords: Record<Phase3AloneTimeTypeLocaleKey, string>;
  actualBehavior: Record<Phase3AloneTimeTypeLocaleKey, string>;
  strength: Record<Phase3AloneTimeTypeLocaleKey, string>;
  characteristic: Record<Phase3AloneTimeTypeLocaleKey, string>;
  difficultSituation: Record<Phase3AloneTimeTypeLocaleKey, string>;
  whatTheyNeed: Record<Phase3AloneTimeTypeLocaleKey, string>;
  oneLiner: Record<Phase3AloneTimeTypeLocaleKey, string>;
  certificationPhrase: Record<Phase3AloneTimeTypeLocaleKey, string>;
  shareLine: Record<Phase3AloneTimeTypeLocaleKey, string>;
}

export function calculatePhase3AloneTimeTypeResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3AloneTimeTypeQuestions: Phase3AloneTimeTypeQuestion[] = [
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
        "soloTimeType",
        "soloKeywords",
        "actualBehavior",
        "strength",
        "characteristic",
        "difficultSituation",
        "whatTheyNeed",
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


_gen_path = Path(__file__).resolve().parent / "gen_alone_time_type_data.py"
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
        "soloKeywords": "keywords",
        "certificationPhrase": "certification",
        "shareLine": "share",
    }
    k = key_map.get(field, field)
    return KO_RESULTS[type_idx][k]


QUESTIONS = [
    q(
        M(
            ko=_ko_q(0),
            en="You're completely alone all day. What do you do first?",
            ja="今日一日、完全に一人。まず何をする？",
            **{"zh-CN": "今天一整天完全独处。最先做什么？", "zh-TW": "今天一整天完全獨處。最先做什麼？"},
            vi="Cả ngày hoàn toàn một mình. Việc đầu tiên bạn làm là gì?",
            id="Seharian benar-benar sendiri. Hal pertama yang kamu lakukan?",
        ),
        [
            (M(ko=_ko_o(0, 0), en="Lie down first. No special plans. Lying down comes first", ja="とりあえず横になる。特別な計画はない。横になるのが先", **{"zh-CN": "先躺下。没什么计划，躺下优先", "zh-TW": "先躺下。沒什麼計劃，躺下優先"}, vi="Nằm xuống trước. Không có kế hoạch gì. Nằm là ưu tiên", id="Langsung tiduran. Tidak ada rencana khusus. Tiduran dulu"), 0),
            (M(ko=_ko_o(0, 1), en="Put in earphones or pick a video or music to play", ja="イヤホンをするか、流す動画や音楽を選ぶ", **{"zh-CN": "戴耳机或选好要放的视频或音乐", "zh-TW": "戴耳機或選好要放的影片或音樂"}, vi="Đeo tai nghe hoặc chọn video/nhạc để bật", id="Pakai earphone atau pilih video/musik untuk diputar"), 1),
            (M(ko=_ko_o(0, 2), en="Decide which game, hobby, or workout to do today", ja="やりたかったゲーム・趣味・運動のうち今日何をするか決める", **{"zh-CN": "从想玩的游戏·爱好·运动中决定今天做什么", "zh-TW": "從想玩的遊戲·愛好·運動中決定今天做什麼"}, vi="Chọn game/sở thích/tập luyện muốn làm hôm nay", id="Tentukan game/hobi/olahraga mana yang akan dilakukan hari ini"), 2),
            (M(ko=_ko_o(0, 3), en="Start organizing in your head things to do or things you wanted to do", ja="やるべきことややりたかったことを頭の中で整理し始める", **{"zh-CN": "开始在脑中整理该做的事或想做的事", "zh-TW": "開始在腦中整理該做的事或想做的事"}, vi="Bắt đầu sắp xếp trong đầu việc phải làm hoặc muốn làm", id="Mulai merapikan di kepala hal yang harus atau ingin dilakukan"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(1),
            en="What do you most often do during alone time?",
            ja="一人の時間に最もよくする行動は？",
            **{"zh-CN": "独处时最常做的行为是？", "zh-TW": "獨處時最常做的行為是？"},
            vi="Hành vi bạn hay làm nhất khi ở một mình?",
            id="Perilaku paling sering saat waktu sendiri?",
        ),
        [
            (M(ko=_ko_o(1, 0), en="Space out, sleep, or do nothing. Let your brain rest", ja="ボーッとする・寝る・何もしない。脳を休ませる", **{"zh-CN": "发呆、睡觉或什么都不做，让大脑休息", "zh-TW": "發呆、睡覺或什麼都不做，讓大腦休息"}, vi="Ngẩn người, ngủ hoặc không làm gì. Để não nghỉ", id="Melamun, tidur, atau tidak apa-apa. Biarkan otak istirahat"), 0),
            (M(ko=_ko_o(1, 1), en="Watch YouTube, Netflix, reels, or shorts. Content consumption is the center", ja="YouTube・Netflix・リール・ショートを見る。コンテンツ消費が中心", **{"zh-CN": "看YouTube、Netflix、短视频。以消费内容为中心", "zh-TW": "看YouTube、Netflix、短影片。以消費內容為中心"}, vi="Xem YouTube, Netflix, reel, short. Tiêu thụ nội dung là trung tâm", id="Nonton YouTube, Netflix, reel, short. Konsumsi konten jadi pusat"), 1),
            (M(ko=_ko_o(1, 2), en="Do fixed hobby activities like games, reading, drawing, or exercise", ja="ゲーム・読書・絵・運動など決まった趣味活動をする", **{"zh-CN": "做游戏、阅读、画画、运动等固定爱好活动", "zh-TW": "做遊戲、閱讀、畫畫、運動等固定愛好活動"}, vi="Làm sở thích cố định như game, đọc sách, vẽ, tập luyện", id="Melakukan hobi tetap seperti game, baca, gambar, olahraga"), 2),
            (M(ko=_ko_o(1, 3), en="Study, work on side projects, or make something", ja="勉強・サイドプロジェクト・何かを作る", **{"zh-CN": "学习、做副业项目或制作东西", "zh-TW": "學習、做副業專案或製作東西"}, vi="Học, làm side project hoặc tạo ra thứ gì đó", id="Belajar, side project, atau membuat sesuatu"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(2),
            en='When alone time ends, when do you feel "I rested well"?',
            ja="一人の時間が終わったとき、「よく休めた」と感じる瞬間は？",
            **{"zh-CN": "独处时间结束时，何时觉得「休息好了」？", "zh-TW": "獨處時間結束時，何時覺得「休息好了」？"},
            vi='Khi thời gian một mình kết thúc, lúc nào bạn cảm thấy "nghỉ ngơi tốt"?',
            id='Saat waktu sendiri berakhir, kapan kamu merasa "istirahat cukup"?',
        ),
        [
            (M(ko=_ko_o(2, 0), en="When you did nothing and just existed, but somehow your body feels lighter", ja="何もせずただいたが、なぜか体が少し軽くなった気がするとき", **{"zh-CN": "什么都没做只是待着，却感觉身体变轻了", "zh-TW": "什麼都沒做只是待著，卻感覺身體變輕了"}, vi="Khi không làm gì chỉ ở đó mà cơ thể bỗng nhẹ hơn", id="Saat tidak melakukan apa-apa tapi tubuh terasa lebih ringan"), 0),
            (M(ko=_ko_o(2, 1), en="When you finished content you wanted or the playlist ended perfectly", ja="見たかったコンテンツを全部見た、またはプレイリストがぴったり終わったとき", **{"zh-CN": "想看的都看完了，或歌单刚好结束", "zh-TW": "想看的都看完了，或歌單剛好結束"}, vi="Khi xem hết nội dung muốn xem hoặc playlist vừa khít kết thúc", id="Saat konten yang ingin ditonton selesai atau playlist pas berakhir"), 1),
            (M(ko=_ko_o(2, 2), en="When you fully enjoyed your hobby. Game cleared, book finished, workout done", ja="好きな趣味を思い切りしたとき。ゲームクリア・完読・運動完了", **{"zh-CN": "尽情做了喜欢的爱好，通关、读完、练完", "zh-TW": "盡情做了喜歡的愛好，通關、讀完、練完"}, vi="Khi thỏa sức làm sở thích yêu thích. Clear game, đọc xong, tập xong", id="Saat menikmati hobi sepenuhnya. Game clear, buku selesai, olahraga done"), 2),
            (M(ko=_ko_o(2, 3), en="When you accomplished at least one planned thing. When something accumulated", ja="計画したことを一つでも達成したとき。何かが積み上がったとき", **{"zh-CN": "至少完成一件计划的事，有所积累时", "zh-TW": "至少完成一件計劃的事，有所積累時"}, vi="Khi hoàn thành ít nhất một việc đã lên kế hoạch. Có gì đó tích lũy", id="Saat menyelesaikan minimal satu rencana. Ada sesuatu yang terkumpul"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(3),
            en="How do you use your phone during alone time?",
            ja="一人の時間にスマホはどう使う？",
            **{"zh-CN": "独处时怎么用手机？", "zh-TW": "獨處時怎麼用手機？"},
            vi="Bạn dùng điện thoại thế nào khi ở một mình?",
            id="Bagaimana kamu pakai HP saat waktu sendiri?",
        ),
        [
            (M(ko=_ko_o(3, 0), en="Don't really look much. Often just put it down", ja="あまり見ない。置いておくことが多い", **{"zh-CN": "不太看，经常放着", "zh-TW": "不太看，經常放著"}, vi="Không xem nhiều. Thường để đó", id="Tidak terlalu sering lihat. Sering ditaruh saja"), 0),
            (M(ko=_ko_o(3, 1), en="Keep looking at it. Just keep watching what the algorithm feeds you", ja="ずっと見ている。アルゴリズムが出すものをそのまま見続ける", **{"zh-CN": "一直看，算法推什么就看什么", "zh-TW": "一直看，演算法推什麼就看什麼"}, vi="Xem liên tục. Thuật toán đưa gì thì xem nấy", id="Terus lihat. Algoritma kasih apa, lihat terus"), 1),
            (M(ko=_ko_o(3, 2), en="Browse hobby info or communities, or play games", ja="趣味関連の情報・コミュニティを見るかゲームをする", **{"zh-CN": "看爱好相关信息或社区，或玩游戏", "zh-TW": "看愛好相關資訊或社群，或玩遊戲"}, vi="Xem thông tin/cộng đồng sở thích hoặc chơi game", id="Lihat info/komunitas hobi atau main game"), 2),
            (M(ko=_ko_o(3, 3), en="Use it productively: find things to learn, save, or create", ja="学ぶものを探したり保存したり、生産的に使う", **{"zh-CN": "productive 用途：找学习资料、收藏或创作", "zh-TW": "productive 用途：找學習資料、收藏或創作"}, vi="Dùng theo hướng học hỏi, lưu lại hoặc sản xuất", id="Pakai produktif: cari belajar, simpan, atau buat sesuatu"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(4),
            en="The longer alone time lasts, you…",
            ja="一人の時間が長くなるほど、私は？",
            **{"zh-CN": "独处时间越长，你会？", "zh-TW": "獨處時間越長，你會？"},
            vi="Thời gian một mình càng dài, bạn…",
            id="Semakin lama waktu sendiri, kamu…",
        ),
        [
            (M(ko=_ko_o(4, 0), en="Like it more. The longer, the more comfortable and recharged you feel", ja="より良くなる。長いほど快適で充電される", **{"zh-CN": "越喜欢，越长越舒服、越充电", "zh-TW": "越喜歡，越長越舒服、越充電"}, vi="Càng thích. Càng lâu càng thoải mái và nạp năng lượng", id="Makin suka. Makin lama makin nyaman dan terisi"), 0),
            (M(ko=_ko_o(4, 1), en="Good up to a point, but get a bit bored if too long", ja="適度までは良いが、長すぎると少し退屈", **{"zh-CN": "适度还好，太长会有点无聊", "zh-TW": "適度還好，太長會有點無聊"}, vi="Ổn đến mức nào đó, quá lâu thì hơi chán", id="Cukup sampai batas tertentu, terlalu lama jadi bosan"), 1),
            (M(ko=_ko_o(4, 2), en="Fine as long as you have things to do; start looking for something if not", ja="やることがあれば続けられる。なければ何か探し始める", **{"zh-CN": "有事做就还好，没事就开始找事做", "zh-TW": "有事做就還好，沒事就開始找事做"}, vi="Có việc làm thì ổn, không thì bắt đầu tìm việc", id="Kalau ada yang dilakukan oke, kalau tidak mulai cari sesuatu"), 2),
            (M(ko=_ko_o(4, 3), en="Feel time is wasted. Feel like you should be doing something", ja="時間がもったいない。何かすべきな気がする", **{"zh-CN": "觉得浪费时间，好像该做点什么", "zh-TW": "覺得浪費時間，好像該做點什麼"}, vi="Cảm thấy lãng phí thời gian. Nên làm gì đó", id="Merasa waktu terbuang. Seharusnya melakukan sesuatu"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(5),
            en="When eating alone…",
            ja="一人のとき、食事は？",
            **{"zh-CN": "独处时，吃饭怎样？", "zh-TW": "獨處時，吃飯怎樣？"},
            vi="Khi ăn một mình…",
            id="Saat makan sendiri…",
        ),
        [
            (M(ko=_ko_o(5, 0), en="Don't really set a meal. Eat whatever's around or skip meals", ja="あまり用意しない。あるものを適当に食べるか抜く", **{"zh-CN": "不太正经吃，有什么凑合或不吃", "zh-TW": "不太正經吃，有什麼湊合或不吃"}, vi="Không ăn cơ bản. Ăn bừa có gì hoặc bỏ bữa", id="Tidak benar-benar menyiapkan. Makan apa ada atau skip"), 0),
            (M(ko=_ko_o(5, 1), en="Order favorite food or eat with atmosphere. Enjoy eating like content", ja="好きなものを頼むか雰囲気良く食べる。食事もコンテンツのように楽しむ", **{"zh-CN": "点喜欢的或氛围感吃，把吃饭当内容享受", "zh-TW": "點喜歡的或氛圍感吃，把吃飯當內容享受"}, vi="Gọi món thích hoặc ăn có không khí. Ăn như thưởng thức nội dung", id="Pesan favorit atau makan dengan vibe. Nikmati makan seperti konten"), 1),
            (M(ko=_ko_o(5, 2), en="Enjoy choosing what to eat like a hobby. Pretty good at solo dining", ja="何を食べるか選ぶのも趣味。一人飯が得意", **{"zh-CN": "选吃什么也像爱好，很会一人食", "zh-TW": "選吃什麼也像愛好，很會一人食"}, vi="Thích chọn món ăn như sở thích. Ăn một mình khá giỏi", id="Menikmati memilih makanan seperti hobi. Jago makan solo"), 2),
            (M(ko=_ko_o(5, 3), en="Solve it efficiently or eat mindfully for health", ja="効率よく済ませるか、健康を考えて食べる", **{"zh-CN": "高效解决或考虑健康地吃", "zh-TW": "高效解決或考慮健康地吃"}, vi="Giải quyết nhanh hoặc ăn có tính đến sức khỏe", id="Selesaikan efisien atau makan dengan pikir kesehatan"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(6),
            en="The atmosphere of your room when alone is…",
            ja="一人の部屋の雰囲気は？",
            **{"zh-CN": "独处时房间的氛围是？", "zh-TW": "獨處時房間的氛圍是？"},
            vi="Không khí căn phòng khi ở một mình…",
            id="Suasana kamar saat sendiri…",
        ),
        [
            (M(ko=_ko_o(6, 0), en="Lights as is, no sound, nothing playing, just being there", ja="照明そのまま、音なし、何も流さずただいる", **{"zh-CN": "灯光照旧，没声音，什么都不放，只是待着", "zh-TW": "燈光照舊，沒聲音，什麼都不放，只是待著"}, vi="Đèn như cũ, im lặng, không bật gì, chỉ ở đó", id="Lampu seperti biasa, tanpa suara, tidak memutar apa pun, hanya ada"), 0),
            (M(ko=_ko_o(6, 1), en="Play favorite playlist or video. Need background sound to feel comfortable", ja="好きなプレイリストや動画を流す。BGMがないと落ち着かない", **{"zh-CN": "放喜欢的歌单或视频，需要背景音才舒服", "zh-TW": "放喜歡的歌單或影片，需要背景音才舒服"}, vi="Bật playlist/video yêu thích. Cần âm nền mới thoải mái", id="Putar playlist/video favorit. Butuh suara latar biar nyaman"), 1),
            (M(ko=_ko_o(6, 2), en="Hobby tools spread out or game screen on", ja="趣味道具が広がっているかゲーム画面がついている", **{"zh-CN": "爱好工具摊开或游戏画面亮着", "zh-TW": "愛好工具攤開或遊戲畫面亮著"}, vi="Dụng cụ sở thích bày ra hoặc màn hình game bật", id="Alat hobi terbuka atau layar game nyala"), 2),
            (M(ko=_ko_o(6, 3), en="Laptop open or notes and pen laid out", ja="ノートPCが開いているかメモとペンが置いてある", **{"zh-CN": "笔记本开着或便签和笔摆着", "zh-TW": "筆電開著或便條和筆擺著"}, vi="Laptop mở hoặc giấy ghi chú và bút đặt sẵn", id="Laptop terbuka atau memo dan pen tergeletak"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(7),
            en="When contact suddenly comes during alone time, you…",
            ja="一人の時間に突然連絡が来たら？",
            **{"zh-CN": "独处时突然来消息，你会？", "zh-TW": "獨處時突然來訊息，你會？"},
            vi="Khi đột nhiên có liên lạc lúc ở một mình, bạn…",
            id="Saat tiba-tiba ada pesan saat sendiri, kamu…",
        ),
        [
            (M(ko=_ko_o(7, 0), en="Check later. Not really looking at phone anyway", ja="後で見る。そもそもスマホをあまり見ていない", **{"zh-CN": "晚点再看，本来就不怎么看手机", "zh-TW": "晚點再看，本來就不怎麼看手機"}, vi="Xem sau. Vốn không hay nhìn điện thoại", id="Lihat nanti. Memang jarang lihat HP"), 0),
            (M(ko=_ko_o(7, 1), en="See it but reply later because watching content now", ja="見るが今コンテンツ中なので返信は後", **{"zh-CN": "看到了但正在看内容，晚点回", "zh-TW": "看到了但正在看內容，晚點回"}, vi="Có thấy nhưng đang xem nội dung nên trả lời sau", id="Lihat tapi balas nanti karena sedang nonton konten"), 1),
            (M(ko=_ko_o(7, 2), en="Pause what you're doing, check, and go back", ja="今やっていることを止めて確認し、また戻る", **{"zh-CN": "暂停手头的事，看一下再回去", "zh-TW": "暫停手頭的事，看一下再回去"}, vi="Tạm dừng việc đang làm, xem rồi quay lại", id="Jeda dulu, cek, lalu kembali"), 2),
            (M(ko=_ko_o(7, 3), en="Check quickly and handle only important things. Don't want to break focus", ja="素早く確認し重要なものだけ処理。集中モードを壊したくない", **{"zh-CN": "快速确认，只处理重要的，不想打断专注", "zh-TW": "快速確認，只處理重要的，不想打斷專注"}, vi="Xem nhanh và xử lý phần quan trọng. Không muốn phá focus", id="Cek cepat dan urus yang penting saja. Tidak mau ganggu fokus"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(8),
            en="When does alone time feel most enriching?",
            ja="一人の時間が最も豊かに感じる瞬間は？",
            **{"zh-CN": "独处何时感觉最充实？", "zh-TW": "獨處何時感覺最充實？"},
            vi="Khi nào thời gian một mình cảm thấy phong phú nhất?",
            id="Kapan waktu sendiri terasa paling kaya?",
        ),
        [
            (M(ko=_ko_o(8, 0), en="When confirmed you don't have to do anything. Freedom is guaranteed", ja="何もしなくていい状態が確認されたとき。自由が保証された瞬間", **{"zh-CN": "确认什么都不用做，自由被保证的瞬间", "zh-TW": "確認什麼都不用做，自由被保證的瞬間"}, vi="Khi xác nhận không phải làm gì. Khoảnh khắc tự do được đảm bảo", id="Saat dipastikan tidak perlu melakukan apa-apa. Kebebasan terjamin"), 0),
            (M(ko=_ko_o(8, 1), en="When you discover just the right content. Algorithm seems to understand you", ja="ぴったりのコンテンツを見つけたとき。アルゴリズムが自分を分かってくれた瞬間", **{"zh-CN": "发现正合口味的内容，算法懂你的瞬间", "zh-TW": "發現正合口味的內容，演算法懂你的瞬間"}, vi="Khi tìm được nội dung vừa ý. Thuật toán hiểu mình", id="Saat menemukan konten yang pas. Algoritma paham kamu"), 1),
            (M(ko=_ko_o(8, 2), en="When fully immersed in hobby and lost track of time", ja="趣味に完全集中して時間を忘れたとき。没入そのもの", **{"zh-CN": "完全沉浸爱好忘了时间，沉浸本身", "zh-TW": "完全沉浸愛好忘了時間，沉浸本身"}, vi="Khi chìm hẳn vào sở thích và quên thời gian", id="Saat fully immersed di hobi dan lupa waktu"), 2),
            (M(ko=_ko_o(8, 3), en="When you quietly accomplished something alone. No one knows but you do", ja="静かに何かを成し遂げたとき。誰も知らないが自分は知っている", **{"zh-CN": "安静完成了一件事，没人知道但你知道", "zh-TW": "安靜完成了一件事，沒人知道但你知道"}, vi="Khi lặng lẽ hoàn thành điều gì đó. Chỉ mình biết", id="Saat diam-diam menyelesaikan sesuatu. Hanya kamu yang tahu"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(9),
            en="When emotions rise during alone time, you…",
            ja="一人の時間に感情が湧いたら？",
            **{"zh-CN": "独处时情绪上来，你会？", "zh-TW": "獨處時情緒上來，你會？"},
            vi="Khi cảm xúc dâng lên lúc ở một mình, bạn…",
            id="Saat emosi naik saat sendiri, kamu…",
        ),
        [
            (M(ko=_ko_o(9, 0), en="Just let it be. Let thoughts and feelings flow without forcing", ja="そのままにする。思考も感情も流れに任せ、無理に処理しない", **{"zh-CN": "就放着，让想法和情绪自然流过，不强行处理", "zh-TW": "就放著，讓想法和情緒自然流過，不強行處理"}, vi="Cứ để vậy. Để suy nghĩ và cảm xúc trôi, không ép xử lý", id="Biarkan saja. Biarkan pikiran dan emosi mengalir"), 0),
            (M(ko=_ko_o(9, 1), en="Find mood-matching music or related content. Handle emotions through content", ja="その感情に合う音楽や関連コンテンツを見る。感情をコンテンツで扱う", **{"zh-CN": "找合心情的音乐或相关内容，用内容处理情绪", "zh-TW": "找合心情的音樂或相關內容，用內容處理情緒"}, vi="Tìm nhạc/nội dung hợp cảm xúc. Xử lý cảm xúc qua nội dung", id="Cari musik/konten sesuai mood. Tangani emosi lewat konten"), 1),
            (M(ko=_ko_o(9, 2), en="Focus on favorites and naturally forget. Immersion is the best remedy", ja="好きなことに集中して自然に忘れる。没入が最高の処方", **{"zh-CN": "专注喜欢的事自然忘掉，沉浸是最佳处方", "zh-TW": "專注喜歡的事自然忘掉，沉浸是最佳處方"}, vi="Tập trung vào thứ thích và tự quên. Đắm chìm là liều thuốc hay nhất", id="Fokus ke hal favorit dan lupa sendiri. Immersion obat terbaik"), 2),
            (M(ko=_ko_o(9, 3), en="Write diary, memo, or organize thoughts. Need to write to feel resolved", ja="日記・メモ・思考整理。書いて初めて解決した感じ", **{"zh-CN": "写日记、备忘录或整理思路，写下来才觉得解决", "zh-TW": "寫日記、備忘錄或整理思路，寫下來才覺得解決"}, vi="Viết nhật ký, ghi chú hoặc sắp xếp suy nghĩ. Phải viết mới thấy giải quyết", id="Tulis diary, memo, atau rapikan pikiran. Harus tulis baru terasa selesai"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(10),
            en="What do you hate most during alone time?",
            ja="一人の時間で最も嫌なことは？",
            **{"zh-CN": "独处时最讨厌什么？", "zh-TW": "獨處時最討厭什麼？"},
            vi="Điều bạn ghét nhất khi ở một mình?",
            id="Hal paling kamu benci saat sendiri?",
        ),
        [
            (M(ko=_ko_o(10, 0), en="Someone suddenly coming and breaking the silence", ja="突然誰かが来て静けさが壊れること", **{"zh-CN": "突然有人打破宁静", "zh-TW": "突然有人打破寧靜"}, vi="Ai đó đột ngột đến phá vỡ sự yên lặng", id="Tiba-tiba ada yang datang dan merusak ketenangan"), 0),
            (M(ko=_ko_o(10, 1), en="WiFi not working, nothing to watch, or battery dying", ja="WiFiがない・見るものがない・バッテリー切れ", **{"zh-CN": "没WiFi、没东西看、没电", "zh-TW": "沒WiFi、沒東西看、沒電"}, vi="Không có WiFi, không có gì xem, hoặc hết pin", id="WiFi mati, tidak ada yang ditonton, atau baterai habis"), 1),
            (M(ko=_ko_o(10, 2), en="What you planned not working - game bug, no hobby tools, etc.", ja="やろうとしたことができない。ゲームバグ・道具がない等", **{"zh-CN": "想做的事做不成，游戏bug、没工具等", "zh-TW": "想做的事做不成，遊戲bug、沒工具等"}, vi="Việc định làm không được. Bug game, thiếu dụng cụ…", id="Rencana tidak jadi. Bug game, alat hobi tidak ada, dll."), 2),
            (M(ko=_ko_o(10, 3), en="Feeling like you wasted time doing nothing", ja="時間を無駄にした感じ。何もせず時間だけ過ぎた", **{"zh-CN": "感觉浪费时间，什么都没做时间就过去了", "zh-TW": "感覺浪費時間，什麼都沒做時間就過去了"}, vi="Cảm giác lãng phí thời gian. Không làm gì mà thời gian trôi", id="Merasa membuang waktu. Tidak melakukan apa-apa tapi waktu lewat"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(11),
            en="The situation while taking this test is…",
            ja="今このテストをしている状況は？",
            **{"zh-CN": "现在做这测试的情况是？", "zh-TW": "現在做這測試的情況是？"},
            vi="Tình huống khi bạn đang làm bài test này…",
            id="Situasi saat kamu mengerjakan tes ini…",
        ),
        [
            (M(ko=_ko_o(11, 0), en="Wasn't planning anything, just ended up taking it. Unplanned alone time", ja="特に何かする予定はなく、たまたま。無計画な一人時間中", **{"zh-CN": "没打算做什么，顺手就做了，无计划独处中", "zh-TW": "沒打算做什麼，順手就做了，無計劃獨處中"}, vi="Không định làm gì, tình cờ làm. Đang ở một mình không kế hoạch", id="Tidak ada rencana, kebetulan mengerjakan. Waktu sendiri tanpa rencana"), 0),
            (M(ko=_ko_o(11, 1), en="Algorithm recommended it while watching reels or YouTube", ja="リール・YouTubeを見ていてアルゴリズムがおすすめしてきた", **{"zh-CN": "看短视频/YouTube时算法推荐的", "zh-TW": "看短影片/YouTube時演算法推薦的"}, vi="Thuật toán gợi ý khi đang xem reel/YouTube", id="Algoritma rekomendasikan saat nonton reel/YouTube"), 1),
            (M(ko=_ko_o(11, 2), en="Taking it during a break because it looked fun. Will go back after", ja="少し休みながら面白そうで。終わったらまたやっていたことに戻る", **{"zh-CN": "休息间隙觉得有趣就做了，做完继续原来的事", "zh-TW": "休息間隙覺得有趣就做了，做完繼續原來的事"}, vi="Làm lúc nghỉ vì thấy vui. Xong sẽ quay lại việc cũ", id="Kerjakan saat istirahat karena kelihatan seru. Selesai lanjut lagi"), 2),
            (M(ko=_ko_o(11, 3), en="Already planning to save or memo the test result", ja="このテスト結果を保存・メモするつもりがすでにある", **{"zh-CN": "已经打算保存或记录测试结果", "zh-TW": "已經打算保存或記錄測試結果"}, vi="Đã định lưu hoặc ghi chú kết quả test", id="Sudah berniat menyimpan atau memcatat hasil tes"), 3),
        ],
    ),
]

RESULTS = [
    r(
        "Type1", "🛋️",
        title=M(ko=_ko_r(0, "title"), en="Doing Nothing Is Real Rest: Complete Recharge Type", ja="何もしないのが本当の休息、完全放電充電型", **{"zh-CN": "什么都不做才是真休息，完全放空充电型", "zh-TW": "什麼都不做才是真休息，完全放空充電型"}, vi="Không làm gì mới là nghỉ thật: Kiểu nạp pin hoàn toàn", id="Tidak melakukan apa-apa itu istirahat beneran: Tipe recharge total"),
        shortDescription=M(ko=_ko_r(0, "shortDescription"), en="Your true alone time is doing nothing. Even if it looks like waste, that is what you need most.", ja="あなたの本当の一人時間は何もしない時間。無駄に見えても、それが一番必要。", **{"zh-CN": "你的真·独处就是什么都不做。看起来像浪费，但你最需要这个。", "zh-TW": "你的真·獨處就是什麼都不做。看起來像浪費，但你最需要這個。"}, vi="Thời gian một mình thật của bạn là không làm gì. Dù trông như lãng phí, đó là điều bạn cần nhất.", id="Waktu sendiri asli-mu adalah tidak melakukan apa-apa. Meski terlihat buang waktu, itulah yang paling kamu butuhkan."),
        description=M(ko=_ko_r(0, "description"), en="No tasks, nothing to watch, nothing to listen to. Just spacing out, sleeping, or staring at the ceiling—that is real recharge. People ask \"What are you doing?\" but you know this is the deepest rest.", ja="やることも見るものも聞くものもない状態。ボーッとする・寝る・天井を見る時間が本当の充電。周りは「何してる？」と言うが、これが最も深い休息だと自分は知っている。", **{"zh-CN": "没有待办、没有要看要听的。发呆、睡觉、看天花板——这才是真充电。别人问「在干嘛？」，但你知道这是最深的休息。", "zh-TW": "沒有待辦、沒有要看要聽的。發呆、睡覺、看天花板——這才是真充電。別人問「在幹嘛？」，但你知道這是最深的休息。"}, vi="Không việc, không gì để xem nghe. Chỉ ngẩn người, ngủ hoặc nhìn trần nhà—đó mới là nạp pin thật. Mọi người hỏi \"Làm gì vậy?\" nhưng bạn biết đây là nghỉ sâu nhất.", id="Tanpa tugas, tanpa yang ditonton/didengar. Hanya melamun, tidur, atau menatap langit-langit—itulah recharge beneran. Orang bilang \"Lagi ngapain?\" tapi kamu tahu ini istirahat paling dalam."),
        soloTimeType=M(ko=_ko_r(0, "soloTimeType"), en="Complete Recharge Type 🛋️", ja="完全放電充電型 🛋️", **{"zh-CN": "完全放空充电型 🛋️", "zh-TW": "完全放空充電型 🛋️"}, vi="Kiểu nạp pin hoàn toàn 🛋️", id="Tipe recharge total 🛋️"),
        soloKeywords=M(ko=_ko_r(0, "soloKeywords"), en="Silence · Emptiness · Brain off · No plans · Restart after drain", ja="静けさ・空白・脳停止・無計画・放電後の再起動", **{"zh-CN": "安静·空白·大脑停机·无计划·放空后重启", "zh-TW": "安靜·空白·大腦停機·無計劃·放空後重啟"}, vi="Yên lặng · Trống rỗng · Não tắt · Không kế hoạch · Khởi động lại sau cạn pin", id="Tenang · Kosong · Otak off · Tanpa rencana · Restart setelah habis"),
        actualBehavior=M(ko=_ko_r(0, "actualBehavior"), en="Sleep · Space out · Rarely look at phone · Just lie there", ja="寝る・ボーッとする・スマホも見ない・ただ横になる", **{"zh-CN": "睡觉·发呆·不看手机·躺着", "zh-TW": "睡覺·發呆·不看手機·躺著"}, vi="Ngủ · Ngẩn người · Hiếm khi xem điện thoại · Chỉ nằm", id="Tidur · Melamun · Jarang lihat HP · Hanya rebahan"),
        strength=M(ko=_ko_r(0, "strength"), en="Ability to rest completely. If you can do nothing without guilt, you are truly strong", ja="完全に休む能力。何もしないことを罪悪感なくできるなら本当に強い", **{"zh-CN": "完全休息的能力。能毫无愧疚地什么都不做，说明很强", "zh-TW": "完全休息的能力。能毫無愧疚地什麼都不做，說明很強"}, vi="Khả năng nghỉ hoàn toàn. Làm được không gì mà không tội lỗi là mạnh thật", id="Kemampuan istirahat total. Bisa tidak apa-apa tanpa rasa bersalah berarti kuat"),
        characteristic=M(ko=_ko_r(0, "characteristic"), en="The more external stimulation, the more complete silence you need. Recharge from 0% battery", ja="外部刺激が多い日ほど完全な静けさが必要。バッテリー0%からフル充電", **{"zh-CN": "外界刺激越多，越需要完全安静。从0%电量充满", "zh-TW": "外界刺激越多，越需要完全安靜。從0%電量充滿"}, vi="Càng nhiều kích thích bên ngoài càng cần im lặng hoàn toàn. Sạc từ 0%", id="Semakin banyak stimulasi luar, semakin butuh keheningan total. Charge dari 0%"),
        difficultSituation=M(ko=_ko_r(0, "difficultSituation"), en="When alone but pressured to do something", ja="一人なのに何かすべきという圧力が来るとき", **{"zh-CN": "独处却被迫要有产出的时候", "zh-TW": "獨處卻被迫要有產出的時候"}, vi="Khi ở một mình nhưng bị ép phải làm gì đó", id="Saat sendiri tapi merasa harus melakukan sesuatu"),
        whatTheyNeed=M(ko=_ko_r(0, "whatTheyNeed"), en="A day with no contact. An unplanned weekend morning", ja="誰からも連絡が来ない一日。計画のない週末の朝", **{"zh-CN": "没人联系的一天，无计划的周末早晨", "zh-TW": "沒人聯繫的一天，無計劃的週末早晨"}, vi="Một ngày không ai liên lạc. Buổi sáng cuối tuần không kế hoạch", id="Hari tanpa kontak siapa pun. Pagi weekend tanpa rencana"),
        oneLiner=M(ko=_ko_r(0, "oneLiner"), en="Doing nothing is also a skill. You have that skill", ja="何もしないのも実力。あなたにはその実力がある", **{"zh-CN": "什么都不做也是实力，你有这项实力", "zh-TW": "什麼都不做也是實力，你有這項實力"}, vi="Không làm gì cũng là kỹ năng. Bạn có kỹ năng đó", id="Tidak melakukan apa-apa juga skill. Kamu punya skill itu"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(0, "shareLine"), en="My true alone time type: Complete Recharge 🛋️ Doing nothing is best... lying down first is so me → Relatable? What type are you?", ja="私の本当の一人時間タイプ：完全放電充電型 🛋️ 何もしないのが最高…横になるのが先、完全に当てはまる → 共感する？あなたは？", **{"zh-CN": "我的真·独处类型：完全放空充电型 🛋️ 什么都不做最好…先躺下完全是我 → 有共鸣吗？你是哪种？", "zh-TW": "我的真·獨處類型：完全放空充電型 🛋️ 什麼都不做最好…先躺下完全是我 → 有共鳴嗎？你是哪種？"}, vi="Kiểu thời gian một mình thật của tôi: Nạp pin hoàn toàn 🛋️ Không làm gì là nhất… nằm trước đúng tôi → Có đồng cảm không? Bạn kiểu gì?", id="Tipe waktu sendiri asli-ku: Recharge total 🛋️ Tidak apa-apa paling enak… tiduran dulu banget aku → Relate? Kamu tipe apa?"),
    ),
    r(
        "Type2", "📱",
        title=M(ko=_ko_r(1, "title"), en="Filling Time with Content and Vibes: Emotional Absorption Type", ja="コンテンツと感性で満たす、感性吸収型", **{"zh-CN": "用内容和感性填满，感性吸收型", "zh-TW": "用內容和感性填滿，感性吸收型"}, vi="Lấp đầy bằng nội dung và cảm xúc: Kiểu hấp thụ cảm xúc", id="Mengisi waktu dengan konten dan vibe: Tipe penyerap emosional"),
        shortDescription=M(ko=_ko_r(1, "shortDescription"), en="Your true alone time is a date with the algorithm. Reels, YouTube, playlists, dramas—with these, you are perfect alone for hours.", ja="あなたの本当の一人時間はアルゴリズムとのデート。リール・YouTube・プレイリスト・ドラマ。これがあれば何時間でも一人で完璧。", **{"zh-CN": "你的真·独处是和算法的约会。短视频、YouTube、歌单、剧——有这些就能独处几小时。", "zh-TW": "你的真·獨處是和演算法的約會。短影片、YouTube、歌單、劇——有這些就能獨處幾小時。"}, vi="Thời gian một mình thật của bạn là hẹn hò với thuật toán. Reel, YouTube, playlist, drama—có chúng là ổn một mình hàng giờ.", id="Waktu sendiri asli-mu adalah kencan dengan algoritma. Reel, YouTube, playlist, drama—dengan ini kamu perfect sendiri berjam-jam."),
        description=M(ko=_ko_r(1, "description"), en="When no one is around, earphones go in first. Once you pick what to play, alone time is complete. Music sets the mood, content fills emotions, algorithm recommends what's next. Massive YouTube watch time type.", ja="誰もいないとき、まずイヤホン。流すものが決まれば一人時間完成。音楽が雰囲気を作り、コンテンツが感性を満たし、アルゴリズムが次を推薦。YouTube視聴時間が膨大なタイプ。", **{"zh-CN": "没人时先戴耳机，选好要放的独处就完整了。音乐造氛围，内容填情感，算法推下一个。YouTube 观看时长惊人型。", "zh-TW": "沒人時先戴耳機，選好要放的獨處就完整了。音樂造氛圍，內容填情感，演算法推下一個。YouTube 觀看時長驚人型。"}, vi="Khi không ai, tai nghe lên trước. Chọn xong thứ để bật là hoàn thiện thời gian một mình. Nhạc tạo mood, nội dung lấp cảm xúc, thuật toán gợi ý tiếp. Kiểu xem YouTube cực nhiều.", id="Saat tidak ada orang, earphone dulu. Setelah pilih yang diputar, waktu sendiri lengkap. Musik bikin mood, konten isi emosi, algoritma rekomendasikan berikutnya. Tipe watch time YouTube gede."),
        soloTimeType=M(ko=_ko_r(1, "soloTimeType"), en="Emotional Absorption Type 📱", ja="感性吸収型 📱", **{"zh-CN": "感性吸收型 📱", "zh-TW": "感性吸收型 📱"}, vi="Kiểu hấp thụ cảm xúc 📱", id="Tipe penyerap emosional 📱"),
        soloKeywords=M(ko=_ko_r(1, "soloKeywords"), en="Content · Vibes · Playlist · Algorithm · Atmosphere", ja="コンテンツ・感性・プレイリスト・アルゴリズム・雰囲気", **{"zh-CN": "内容·感性·歌单·算法·氛围", "zh-TW": "內容·感性·歌單·演算法·氛圍"}, vi="Nội dung · Cảm xúc · Playlist · Thuật toán · Không khí", id="Konten · Vibe · Playlist · Algoritma · Suasana"),
        actualBehavior=M(ko=_ko_r(1, "actualBehavior"), en="YouTube binge · Reels · Dramas · Music on while lounging", ja="YouTube一気見・リール・ドラマ・音楽流してゴロゴロ", **{"zh-CN": "YouTube 刷剧·短视频·追剧·放音乐瘫着", "zh-TW": "YouTube 刷劇·短影片·追劇·放音樂癱著"}, vi="Cày YouTube · Reel · Drama · Bật nhạc nằm lê", id="Maraton YouTube · Reel · Drama · Musik nyala sambil rebahan"),
        strength=M(ko=_ko_r(1, "strength"), en="Can have a complete alone time anywhere with content", ja="コンテンツさえあればどこでも完璧な一人時間を過ごせる", **{"zh-CN": "有内容就能在任何地方完美独处", "zh-TW": "有內容就能在任何地方完美獨處"}, vi="Chỉ cần nội dung là có thời gian một mình hoàn hảo ở đâu cũng được", id="Asal ada konten, bisa waktu sendiri sempurna di mana saja"),
        characteristic=M(ko=_ko_r(1, "characteristic"), en="Sensitive to atmosphere. Music or video tone shapes the day's mood when alone", ja="雰囲気に敏感。一人のとき音楽や映像のトーンがその日の気分を左右", **{"zh-CN": "对氛围敏感，独处时音乐或视频色调左右当天心情", "zh-TW": "對氛圍敏感，獨處時音樂或影片色調左右當天心情"}, vi="Nhạy cảm với không khí. Tone nhạc/video chi phối mood khi ở một mình", id="Sensitif terhadap vibe. Tone musik/video mengatur mood saat sendiri"),
        difficultSituation=M(ko=_ko_r(1, "difficultSituation"), en="No WiFi, dead battery, or nothing to watch. True panic mode", ja="WiFiがない・バッテリー切れ・見るものがない。本当のパニック", **{"zh-CN": "没WiFi、没电、没东西看，真·恐慌", "zh-TW": "沒WiFi、沒電、沒東西看，真·恐慌"}, vi="Không WiFi, hết pin, không có gì xem. Panic thật", id="Tidak ada WiFi, baterai habis, atau tidak ada yang ditonton. Panik beneran"),
        whatTheyNeed=M(ko=_ko_r(1, "whatTheyNeed"), en="Fully charged device and uninterrupted time", ja="十分充電された端末と邪魔されない時間", **{"zh-CN": "电量充足的设备和不被打扰的时间", "zh-TW": "電量充足的設備和不被打擾的時間"}, vi="Thiết bị đầy pin và thời gian không bị làm phiền", id="Perangkat terisi penuh dan waktu tanpa gangguan"),
        oneLiner=M(ko=_ko_r(1, "oneLiner"), en="Your algorithm knows you well. Today it will recommend something perfect again", ja="あなたのアルゴリズムはあなたをよく知っている。今日もぴったりを推薦してくれる", **{"zh-CN": "你的算法很懂你，今天也会推正合你意的", "zh-TW": "你的演算法很懂你，今天也會推正合你意的"}, vi="Thuật toán của bạn hiểu bạn. Hôm nay cũng sẽ gợi ý đúng ý", id="Algoritmamu paham kamu. Hari ini juga akan rekomendasikan yang pas"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(1, "shareLine"), en="My true alone time type: Emotional Absorption 📱 Dating the algorithm... caught doing this test while scrolling reels lol → Relatable? What about you?", ja="私の本当の一人時間タイプ：感性吸収型 📱 アルゴリズムとデートタイプ…リール見てたらこのテストバレた ㅋㅋ → 共感する？あなたは？", **{"zh-CN": "我的真·独处类型：感性吸收型 📱 和算法约会型…刷短视频时被逮到做这测试 哈哈 → 有共鸣吗？你呢？", "zh-TW": "我的真·獨處類型：感性吸收型 📱 和演算法約會型…刷短影片時被逮到做這測試 哈哈 → 有共鳴嗎？你呢？"}, vi="Kiểu thời gian một mình thật của tôi: Hấp thụ cảm xúc 📱 Hẹn hò thuật toán… lướt reel bị bắt làm test này haha → Có đồng cảm không? Còn bạn?", id="Tipe waktu sendiri asli-ku: Penyerap emosional 📱 Kencan algoritma… ketahuan tes ini pas scroll reel wkwk → Relate? Kamu gimana?"),
    ),
    r(
        "Type3", "🎮",
        title=M(ko=_ko_r(2, "title"), en="Fully Lost in What You Love: Hobby Immersion Type", ja="好きなことに完全没入、趣味没入型", **{"zh-CN": "完全沉浸于热爱，爱好沉浸型", "zh-TW": "完全沉浸於熱愛，愛好沉浸型"}, vi="Chìm hẳn vào điều yêu thích: Kiểu đắm chìm sở thích", id="Tenggelam penuh di hal favorit: Tipe immersion hobi"),
        shortDescription=M(ko=_ko_r(2, "shortDescription"), en="Your true alone time is immersion time. Game cleared, book finished, workout done—you recharge when something is completed.", ja="あなたの本当の一人時間は没入の時間。ゲームクリア・完読・運動完了。何か終わったとき本当に充電される。", **{"zh-CN": "你的真·独处是沉浸时间。通关、读完、练完——有完成感才真充电。", "zh-TW": "你的真·獨處是沉浸時間。通關、讀完、練完——有完成感才真充電。"}, vi="Thời gian một mình thật của bạn là thời gian đắm chìm. Clear game, đọc xong, tập xong—nạp pin khi có thứ hoàn thành.", id="Waktu sendiri asli-mu adalah waktu immersion. Game clear, buku selesai, olahraga done—recharge saat ada yang selesai."),
        description=M(ko=_ko_r(2, "description"), en="When alone, one thing always comes to mind—games, reading, drawing, or exercise. When you can do it fully, that time is the best. In flow state, you lose track of time.", ja="一人の時間に最もよく思い浮かぶものがある。ゲーム・読書・絵・運動。思い切りできる時間が最高。没入状態では時間を忘れる。", **{"zh-CN": "独处时最常想到的是游戏、阅读、画画或运动。能尽情做的时间最好，沉浸时忘了时间。", "zh-TW": "獨處時最常想到的是遊戲、閱讀、畫畫或運動。能盡情做的時間最好，沉浸時忘了時間。"}, vi="Khi ở một mình luôn nghĩ đến một thứ—game, đọc sách, vẽ, tập luyện. Thời gian được làm trọn vẹn là tuyệt nhất. Trong flow quên mất thời gian.", id="Saat sendiri selalu terpikir satu hal—game, baca, gambar, olahraga. Waktu bisa menikmati sepenuhnya paling enak. Dalam flow, lupa waktu."),
        soloTimeType=M(ko=_ko_r(2, "soloTimeType"), en="Hobby Immersion Type 🎮", ja="趣味没入型 🎮", **{"zh-CN": "爱好沉浸型 🎮", "zh-TW": "愛好沉浸型 🎮"}, vi="Kiểu đắm chìm sở thích 🎮", id="Tipe immersion hobi 🎮"),
        soloKeywords=M(ko=_ko_r(2, "soloKeywords"), en="Immersion · Hobby · Focus · Achievement · Personal routine", ja="没入・趣味・集中・達成・自分だけのルーティン", **{"zh-CN": "沉浸·爱好·专注·达成·专属routine", "zh-TW": "沉浸·愛好·專注·達成·專屬routine"}, vi="Đắm chìm · Sở thích · Tập trung · Hoàn thành · Routine riêng", id="Immersion · Hobi · Fokus · Pencapaian · Rutinitas pribadi"),
        actualBehavior=M(ko=_ko_r(2, "actualBehavior"), en="Games · Reading · Drawing · Exercise · Cooking · Instruments", ja="ゲーム・読書・絵・運動・料理・楽器など決まった趣味", **{"zh-CN": "游戏·阅读·画画·运动·做饭·乐器等固定爱好", "zh-TW": "遊戲·閱讀·畫畫·運動·做飯·樂器等固定愛好"}, vi="Game · Đọc sách · Vẽ · Tập luyện · Nấu ăn · Nhạc cụ", id="Game · Baca · Gambar · Olahraga · Masak · Alat musik"),
        strength=M(ko=_ko_r(2, "strength"), en="Spends alone time most fruitfully. Outstanding immersion ability", ja="一人の時間を最も充実させるタイプ。没入能力が卓越", **{"zh-CN": "最会把独处过得充实，沉浸能力出色", "zh-TW": "最會把獨處過得充實，沉浸能力出色"}, vi="Dùng thời gian một mình hiệu quả nhất. Khả năng đắm chìm xuất sắc", id="Memanfaatkan waktu sendiri paling produktif. Kemampuan immersion luar biasa"),
        characteristic=M(ko=_ko_r(2, "characteristic"), en="Days with hobbies feel much more rested than days without", ja="趣味がある日の方がない日よりずっとよく休めた感じ", **{"zh-CN": "有爱好的一天比没爱好的一天休息感强很多", "zh-TW": "有愛好的一天比沒愛好的一天休息感強很多"}, vi="Ngày có sở thích cảm thấy nghỉ ngơi hơn nhiều so với ngày không có", id="Hari dengan hobi terasa jauh lebih istirahat daripada tanpa hobi"),
        difficultSituation=M(ko=_ko_r(2, "difficultSituation"), en="No hobby tools or environment to enjoy hobbies", ja="趣味道具がない、または趣味を楽しめない環境", **{"zh-CN": "没有爱好工具或无法享受爱好的环境", "zh-TW": "沒有愛好工具或無法享受愛好的環境"}, vi="Không có dụng cụ hoặc môi trường để thưởng thức sở thích", id="Tidak ada alat hobi atau lingkungan untuk menikmati hobi"),
        whatTheyNeed=M(ko=_ko_r(2, "whatTheyNeed"), en="Enough uninterrupted hobby time. No mid-session breaks", ja="邪魔されない十分な趣味時間。途中で切れないこと", **{"zh-CN": "足够且不被打断的爱好时间", "zh-TW": "足夠且不被打斷的愛好時間"}, vi="Đủ thời gian sở thích không bị làm phiền. Không bị ngắt giữa chừng", id="Waktu hobi cukup tanpa gangguan. Tidak putus di tengah"),
        oneLiner=M(ko=_ko_r(2, "oneLiner"), en="You use alone time best. That time fills you up", ja="あなたは一人の時間を最も上手に使う。その時間があなたを満たす", **{"zh-CN": "你最会利用独处时间，那段时间在填满你", "zh-TW": "你最會利用獨處時間，那段時間在填滿你"}, vi="Bạn dùng thời gian một mình giỏi nhất. Thời gian đó lấp đầy bạn", id="Kamu paling jago pakai waktu sendiri. Waktu itu mengisi kamu"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(2, "shareLine"), en="My true alone time type: Hobby Immersion 🎮 Lose track of time when immersed... look at clock after clearing game and it is 4 AM lol → What type are you?", ja="私の本当の一人時間タイプ：趣味没入型 🎮 没入すると時間を忘れる…ゲームクリアして時計見たら朝4時 ㅋㅋ → あなたは？", **{"zh-CN": "我的真·独处类型：爱好沉浸型 🎮 沉浸就忘时间…通关一看凌晨四点 哈哈 → 你是哪种？", "zh-TW": "我的真·獨處類型：愛好沉浸型 🎮 沉浸就忘時間…通關一看凌晨四點 哈哈 → 你是哪種？"}, vi="Kiểu thời gian một mình thật của tôi: Đắm chìm sở thích 🎮 Đắm chìm quên thời gian… clear game nhìn đồng hồ 4h sáng haha → Bạn kiểu gì?", id="Tipe waktu sendiri asli-ku: Immersion hobi 🎮 Immersion lupa waktu… clear game lihat jam jam 4 pagi wkwk → Kamu tipe apa?"),
    ),
    r(
        "Type4", "🖊️",
        title=M(ko=_ko_r(3, "title"), en="Thinking, Recording, Organizing: Inner Contemplation Type", ja="考えて記録して整理する、内面思索型", **{"zh-CN": "思考、记录、整理，内心沉思型", "zh-TW": "思考、記錄、整理，內心沉思型"}, vi="Suy nghĩ, ghi chép, sắp xếp: Kiểu chiêm nghiệm nội tâm", id="Berpikir, mencatat, merapikan: Tipe kontemplasi batin"),
        shortDescription=M(ko=_ko_r(3, "shortDescription"), en="Your true alone time is talking with yourself. Diary, memos, reflection—you may look spaced out but think intensely.", ja="あなたの本当の一人時間は自分との対話。日記・メモ・思索・ボーッと見えても考えは膨大。", **{"zh-CN": "你的真·独处是和自己对话。日记、备忘、沉思——看起来发呆其实在想很多。", "zh-TW": "你的真·獨處是和自己對話。日記、備忘、沉思——看起來發呆其實在想很多。"}, vi="Thời gian một mình thật của bạn là đối thoại với bản thân. Nhật ký, ghi chú, suy ngẫm—trông ngẩn người nhưng nghĩ rất nhiều.", id="Waktu sendiri asli-mu adalah dialog dengan diri sendiri. Diary, memo, refleksi—terlihat melamun tapi pikiran padat."),
        description=M(ko=_ko_r(3, "description"), en="Alone, thoughts naturally multiply—how you feel lately, if a relationship fits, how you want to live. Writing diary, organizing memos, or gazing out the window is your true alone time.", ja="一人になると自然に考えが増える。最近の感情、この関係は合っているか、これからどう生きたいか。日記に書いたりメモに整理したり窓の外を見るのが本当の一人時間。", **{"zh-CN": "独处时想法自然变多：最近情绪、关系是否合适、未来想怎么活。写日记、整理备忘或望窗外，才是真·独处。", "zh-TW": "獨處時想法自然變多：最近情緒、關係是否合適、未來想怎麼活。寫日記、整理備忘或望窗外，才是真·獨處。"}, vi="Ở một mình, suy nghĩ tự nhiên nhiều lên—cảm xúc gần đây, mối quan hệ có hợp không, muốn sống thế nào. Viết nhật ký, sắp xếp ghi chú hoặc nhìn ra cửa sổ là thời gian một mình thật.", id="Saat sendiri, pikiran natural bertambah—emosi belakangan, apakah hubungan cocok, ingin hidup bagaimana. Menulis diary, merapikan memo, atau menatap jendela itulah waktu sendiri asli."),
        soloTimeType=M(ko=_ko_r(3, "soloTimeType"), en="Inner Contemplation Type 🖊️", ja="内面思索型 🖊️", **{"zh-CN": "内心沉思型 🖊️", "zh-TW": "內心沉思型 🖊️"}, vi="Kiểu chiêm nghiệm nội tâm 🖊️", id="Tipe kontemplasi batin 🖊️"),
        soloKeywords=M(ko=_ko_r(3, "soloKeywords"), en="Reflection · Recording · Emotional sorting · Diary · Inner exploration", ja="思索・記録・感情整理・日記・内面探求", **{"zh-CN": "沉思·记录·情绪整理·日记·内心探索", "zh-TW": "沉思·記錄·情緒整理·日記·內心探索"}, vi="Suy ngẫm · Ghi chép · Sắp xếp cảm xúc · Nhật ký · Khám phá nội tâm", id="Refleksi · Catatan · Sortir emosi · Diary · Eksplorasi batin"),
        actualBehavior=M(ko=_ko_r(3, "actualBehavior"), en="Diary · Memos · Window gazing · Re-reading old notes · Thinking while spacing out", ja="日記・メモ・窓の外・過去の記録再読・ボーッとしながら考える", **{"zh-CN": "写日记·备忘·望窗外·重读旧记录·发呆式思考", "zh-TW": "寫日記·備忘·望窗外·重讀舊記錄·發呆式思考"}, vi="Viết nhật ký · Ghi chú · Nhìn cửa sổ · Đọc lại ghi chép cũ · Suy nghĩ khi ngẩn người", id="Diary · Memo · Menatap jendela · Baca catatan lama · Mikir sambil melamun"),
        strength=M(ko=_ko_r(3, "strength"), en="Knows yourself well. Excellent at putting emotions and thoughts into words", ja="自分をよく知っている。感情と思考を言語化する能力が卓越", **{"zh-CN": "很了解自己，擅长把情绪和想法语言化", "zh-TW": "很了解自己，擅長把情緒和想法語言化"}, vi="Hiểu bản thân tốt. Giỏi chuyển cảm xúc và suy nghĩ thành lời", id="Mengenal diri dengan baik. Hebat mengekspresikan emosi dan pikiran"),
        characteristic=M(ko=_ko_r(3, "characteristic"), en="The more alone, the deeper self-understanding. Needs to organize thoughts before moving on", ja="一人でいるほど自己理解が深まる。思考を整理して初めて次へ進めるタイプ", **{"zh-CN": "越独处越懂自己，整理完想法才能进入下一步", "zh-TW": "越獨處越懂自己，整理完想法才能進入下一步"}, vi="Càng ở một mình càng hiểu bản thân. Phải sắp xếp suy nghĩ mới đi tiếp", id="Makin sendiri makin paham diri. Harus rapikan pikiran baru bisa lanjut"),
        difficultSituation=M(ko=_ko_r(3, "difficultSituation"), en="No time to think alone while thoughts pile up and you must keep meeting people", ja="一人で考える時間がなく、思考が溜まったまま人と会い続けなければならないとき", **{"zh-CN": "没有独处思考时间，想法堆积却还要一直见人", "zh-TW": "沒有獨處思考時間，想法堆積卻還要一直見人"}, vi="Không có thời gian suy nghĩ một mình trong khi suy nghĩ chồng chất và vẫn phải gặp người", id="Tidak ada waktu mikir sendiri sementara pikiran menumpuk dan harus terus ketemu orang"),
        whatTheyNeed=M(ko=_ko_r(3, "whatTheyNeed"), en="Quiet time where you do not have to do anything but can think", ja="何もしなくていい、考えられる静かな時間", **{"zh-CN": "什么都不用做、可以思考的安静时间", "zh-TW": "什麼都不用做、可以思考的安靜時間"}, vi="Thời gian yên tĩnh không phải làm gì nhưng có thể suy nghĩ", id="Waktu tenang tanpa harus melakukan apa-apa tapi bisa berpikir"),
        oneLiner=M(ko=_ko_r(3, "oneLiner"), en="You grow most when alone. That time is shaping you", ja="あなたは一人のとき最も成長する。その時間があなたを作っている", **{"zh-CN": "独处时成长最多，那段时间在塑造你", "zh-TW": "獨處時成長最多，那段時間在塑造你"}, vi="Bạn trưởng thành nhất khi ở một mình. Thời gian đó đang định hình bạn", id="Kamu paling berkembang saat sendiri. Waktu itu membentuk dirimu"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(3, "shareLine"), en="My true alone time type: Inner Contemplation 🖊️ Thoughts multiply when alone... staring out the window for an hour is so me → Relatable? What about you?", ja="私の本当の一人時間タイプ：内面思索型 🖊️ 一人だと考えが増える…窓の外見て1時間経ってる、完全に当てはまる → 共感する？あなたは？", **{"zh-CN": "我的真·独处类型：内心沉思型 🖊️ 独处想法变多…望窗外一小时完全是我 → 有共鸣吗？你呢？", "zh-TW": "我的真·獨處類型：內心沉思型 🖊️ 獨處想法變多…望窗外一小時完全是我 → 有共鳴嗎？你呢？"}, vi="Kiểu thời gian một mình thật của tôi: Chiêm nghiệm nội tâm 🖊️ Ở một mình suy nghĩ nhiều hơn… nhìn cửa sổ một tiếng đúng tôi → Có đồng cảm không? Còn bạn?", id="Tipe waktu sendiri asli-ku: Kontemplasi batin 🖊️ Sendiri pikiran makin banyak… menatap jendela sejam banget aku → Relate? Kamu gimana?"),
    ),
    r(
        "Type5", "💻",
        title=M(ko=_ko_r(4, "title"), en="Learning and Building Alone: Self-Development Recharge Type", ja="一人でも学び蓄える、自己啓発充電型", **{"zh-CN": "独处也在学习积累，自我提升充电型", "zh-TW": "獨處也在學習積累，自我提升充電型"}, vi="Học hỏi và tích lũy một mình: Kiểu nạp pin phát triển bản thân", id="Belajar dan menumpuk sendiri: Tipe recharge pengembangan diri"),
        shortDescription=M(ko=_ko_r(4, "shortDescription"), en="Your true alone time is quiet growth. No one knows, but you learn and build the most when alone.", ja="あなたの本当の一人時間は静かな成長の時間。誰も知らないが、一人のとき最も多く学び積む。", **{"zh-CN": "你的真·独处是安静成长。没人知道，但独处时学得最多、积累最多。", "zh-TW": "你的真·獨處是安靜成長。沒人知道，但獨處時學得最多、積累最多。"}, vi="Thời gian một mình thật của bạn là trưởng thành im lặng. Không ai biết nhưng bạn học và tích lũy nhiều nhất khi ở một mình.", id="Waktu sendiri asli-mu adalah pertumbuhan diam. Tidak ada yang tahu, tapi kamu belajar dan menumpuk paling banyak saat sendiri."),
        description=M(ko=_ko_r(4, "description"), en="When alone, you naturally look for things to learn or do what you postponed. Online classes, study videos, books to read, side projects. Rest is not doing nothing—it is doing what you want.", ja="一人の時間ができると自然に学ぶものを探したり、後回しにしていたことをする。オンライン講座・勉強動画・読む本・サイドプロジェクト。休息は何もしないことではなく、やりたいことをすること。", **{"zh-CN": "独处时自然找东西学或做拖延的事：网课、学习视频、要读的书、副业。休息不是什么都不做，而是做想做的事。", "zh-TW": "獨處時自然找東西學或做拖延的事：網課、學習影片、要讀的書、副業。休息不是什麼都不做，而是做想做的事。"}, vi="Khi ở một mình tự nhiên tìm thứ để học hoặc làm việc trì hoãn. Khóa online, video học, sách cần đọc, side project. Nghỉ không phải không làm gì mà là làm điều mình muốn.", id="Saat sendiri natural cari hal untuk dipelajari atau kerjakan yang ditunda. Kelas online, video belajar, buku, side project. Istirahat bukan tidak apa-apa, tapi melakukan yang diinginkan."),
        soloTimeType=M(ko=_ko_r(4, "soloTimeType"), en="Self-Development Recharge Type 💻", ja="自己啓発充電型 💻", **{"zh-CN": "自我提升充电型 💻", "zh-TW": "自我提升充電型 💻"}, vi="Kiểu nạp pin phát triển bản thân 💻", id="Tipe recharge pengembangan diri 💻"),
        soloKeywords=M(ko=_ko_r(4, "soloKeywords"), en="Growth · Learning · Postponed tasks · Quiet productivity · Solo pursuits", ja="成長・学び・後回し・静かな生産性・一人でやること", **{"zh-CN": "成长·学习·拖延事项·安静生产力·独自完成的事", "zh-TW": "成長·學習·拖延事項·安靜生產力·獨自完成的事"}, vi="Trưởng thành · Học hỏi · Việc trì hoãn · Năng suất im lặng · Việc làm một mình", id="Pertumbuhan · Belajar · Tundaan · Produktivitas tenang · Hal solo"),
        actualBehavior=M(ko=_ko_r(4, "actualBehavior"), en="Online courses · Study · Cert prep · Side projects · Books", ja="オンライン講座・勉強・資格準備・サイドプロジェクト・読書", **{"zh-CN": "网课·学习·考证·副业·读书", "zh-TW": "網課·學習·考證·副業·讀書"}, vi="Khóa online · Học · Chuẩn bị chứng chỉ · Side project · Sách", id="Kursus online · Belajar · Persiapan sertifikasi · Side project · Buku"),
        strength=M(ko=_ko_r(4, "strength"), en="Feels least like wasting time. Alone time accumulates into visible change", ja="時間を無駄にした感覚が最も少ない。一人の時間が積もると変わっている", **{"zh-CN": "最少有浪费时间感，独处积累后会看见变化", "zh-TW": "最少有浪費時間感，獨處積累後會看見變化"}, vi="Ít cảm giác lãng phí thời gian nhất. Thời gian một mình tích lũy sẽ thấy khác đi", id="Paling sedikit merasa buang waktu. Waktu sendiri menumpuk jadi perubahan nyata"),
        characteristic=M(ko=_ko_r(4, "characteristic"), en="More productive when alone. Focuses better than with others", ja="一人の方がむしろ生産的。人と一緒より集中がよく効く", **{"zh-CN": "独处反而更productive，比和人一起更专注", "zh-TW": "獨處反而更productive，比和人一起更專注"}, vi="Ở một mình lại productive hơn. Tập trung tốt hơn khi có người khác", id="Saat sendiri justru lebih produktif. Fokus lebih baik daripada bersama orang"),
        difficultSituation=M(ko=_ko_r(4, "difficultSituation"), en="When environment blocks plans. Alone on unfocused days feels more frustrating", ja="やりたいことが環境的にできないとき。集中できない日に一人だとよりもどかしい", **{"zh-CN": "想做的事环境不允许，无法专注的独处日更憋屈", "zh-TW": "想做的事環境不允許，無法專注的獨處日更憋屈"}, vi="Muốn làm nhưng môi trường không cho. Ngày không tập trung được mà ở một mình càng bức", id="Ingin melakukan tapi lingkungan tidak mendukung. Hari tidak fokus saat sendiri makin geram"),
        whatTheyNeed=M(ko=_ko_r(4, "whatTheyNeed"), en="Perfect focus environment and uninterrupted time. Plus occasional permission to do nothing", ja="完璧な集中環境と邪魔されない時間。そしてたまには何もしなくていいという許可", **{"zh-CN": "完美专注环境和不被打扰的时间，以及偶尔允许什么都不做", "zh-TW": "完美專注環境和不被打擾的時間，以及偶爾允許什麼都不做"}, vi="Môi trường tập trung hoàn hảo và thời gian không bị làm phiền. Và thỉnh thoảng được phép không làm gì", id="Lingkungan fokus sempurna dan waktu tanpa gangguan. Plus izin sesekali tidak apa-apa"),
        oneLiner=M(ko=_ko_r(4, "oneLiner"), en="Your alone time is where you grow most where no one is watching", ja="あなたの一人時間は誰も見ていない場所で最も成長する時間", **{"zh-CN": "你的独处是在无人看见处成长最多的时间", "zh-TW": "你的獨處是在無人看見處成長最多的時間"}, vi="Thời gian một mình của bạn là nơi trưởng thành nhiều nhất khi không ai nhìn", id="Waktu sendirimu adalah tempat kamu paling berkembang tanpa ada yang melihat"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(4, "shareLine"), en="My true alone time type: Self-Development Recharge 💻 More productive when alone... I focus best solo → Relatable? What type are you?", ja="私の本当の一人時間タイプ：自己啓発充電型 💻 一人の方がむしろ生産的…一人の方が集中うまい、完全に当てはまる → 共感する？あなたは？", **{"zh-CN": "我的真·独处类型：自我提升充电型 💻 独处反而更productive…一个人专注最好完全是我 → 有共鸣吗？你是哪种？", "zh-TW": "我的真·獨處類型：自我提升充電型 💻 獨處反而更productive…一個人專注最好完全是我 → 有共鳴嗎？你是哪種？"}, vi="Kiểu thời gian một mình thật của tôi: Nạp pin phát triển bản thân 💻 Ở một mình lại productive hơn… một mình tập trung tốt nhất đúng tôi → Có đồng cảm không? Bạn kiểu gì?", id="Tipe waktu sendiri asli-ku: Recharge pengembangan diri 💻 Sendiri justru lebih produktif… fokus paling enak solo banget aku → Relate? Kamu tipe apa?"),
    ),
    r(
        "Type6", "🎨",
        title=M(ko=_ko_r(5, "title"), en="Busier When Alone: Creative Production Type", ja="一人の方が忙しくなる、創作生産型", **{"zh-CN": "独处反而更忙，创作产出型", "zh-TW": "獨處反而更忙，創作產出型"}, vi="Ở một mình lại bận hơn: Kiểu sản xuất sáng tạo", id="Sendiri malah lebih sibuk: Tipe produksi kreatif"),
        shortDescription=M(ko=_ko_r(5, "shortDescription"), en="Your true alone time is your most productive time. You make and finish more when alone.", ja="あなたの本当の一人時間は最も生産的な時間。一人の方がより多く作り、より多く完成する。", **{"zh-CN": "你的真·独处是最高产的时间，独处时做得更多、完成更多。", "zh-TW": "你的真·獨處是最高產的時間，獨處時做得更多、完成更多。"}, vi="Thời gian một mình thật của bạn là thời gian productive nhất. Ở một mình bạn tạo và hoàn thành nhiều hơn.", id="Waktu sendiri asli-mu adalah waktu paling produktif. Saat sendiri kamu buat dan selesaikan lebih banyak."),
        description=M(ko=_ko_r(5, "description"), en="When alone, work mode activates. Drawing, writing, music, video editing—the process itself is fun and completion feels fullest. Others ask how you make so much alone, but for you that is rest and play.", ja="一人の時間ができると作業モード。絵・文章・音楽・動画編集。作る過程自体が楽しく、何か完成したとき最も充実。周りは「一人でどうそんなに作るの？」と言うが、それが休息であり遊び。", **{"zh-CN": "独处就进入工作模式：画画、写作、音乐、剪辑。创作过程本身快乐，完成时最满足。别人问你怎么独处还做这么多，但那就是你的休息和玩耍。", "zh-TW": "獨處就進入工作模式：畫畫、寫作、音樂、剪輯。創作過程本身快樂，完成時最滿足。別人問你怎麼獨處還做這麼多，但那就是你的休息和玩耍。"}, vi="Ở một mình là vào chế độ làm việc. Vẽ, viết, nhạc, edit video—quá trình vui, hoàn thành thì thấy đầy đủ nhất. Người khác hỏi sao một mình làm nhiều thế, nhưng với bạn đó là nghỉ và chơi.", id="Saat sendiri, mode kerja aktif. Gambar, tulis, musik, edit video—prosesnya fun, selesai paling puas. Orang tanya kok sendiri bisa buat sebanyak itu, tapi buat kamu itu istirahat dan main."),
        soloTimeType=M(ko=_ko_r(5, "soloTimeType"), en="Creative Production Type 🎨", ja="創作生産型 🎨", **{"zh-CN": "创作产出型 🎨", "zh-TW": "創作產出型 🎨"}, vi="Kiểu sản xuất sáng tạo 🎨", id="Tipe produksi kreatif 🎨"),
        soloKeywords=M(ko=_ko_r(5, "soloKeywords"), en="Creation · Expression · Making · Completion · Solo work", ja="創作・表現・作る・完成・一人作業", **{"zh-CN": "创作·表达·制作·完成·独自作业", "zh-TW": "創作·表達·製作·完成·獨自作業"}, vi="Sáng tạo · Biểu đạt · Làm ra · Hoàn thành · Làm một mình", id="Kreasi · Ekspresi · Membuat · Selesai · Kerja solo"),
        actualBehavior=M(ko=_ko_r(5, "actualBehavior"), en="Drawing · Writing · Music · Video editing · Crafts · Coding · Creative cooking", ja="絵・文章・音楽・動画編集・手工芸・コーディング・創作料理など", **{"zh-CN": "画画·写作·音乐·剪辑·手工·编程·创意料理等", "zh-TW": "畫畫·寫作·音樂·剪輯·手工·程式·創意料理等"}, vi="Vẽ · Viết · Nhạc · Edit video · Thủ công · Code · Nấu ăn sáng tạo", id="Gambar · Menulis · Musik · Edit video · Kerajinan · Coding · Masak kreatif"),
        strength=M(ko=_ko_r(5, "strength"), en="Alone time produces results. Most efficient alone time user in the world", ja="一人の時間ができると成果物が出る。世界で最も効率的な一人時間ユーザー", **{"zh-CN": "独处就有产出，世界上最高效的独处使用者", "zh-TW": "獨處就有產出，世界上最高效的獨處使用者"}, vi="Thời gian một mình sinh ra kết quả. Người dùng thời gian một mình hiệu quả nhất", id="Waktu sendiri menghasilkan output. Pengguna waktu sendiri paling efisien"),
        characteristic=M(ko=_ko_r(5, "characteristic"), en="Cuts contact and forgets meals while creating. Deep flow state often", ja="創作中は連絡も切れ、食事も忘れる。完全没入状態が頻繁", **{"zh-CN": "创作时断联、忘吃饭，常进入完全沉浸", "zh-TW": "創作時斷聯、忘吃飯，常進入完全沉浸"}, vi="Khi sáng tạo mất liên lạc, quên ăn. Hay vào trạng thái flow sâu", id="Saat berkarya putus kontak, lupa makan. Flow dalam sering terjadi"),
        difficultSituation=M(ko=_ko_r(5, "difficultSituation"), en="Want to create but no ideas or tools. Creative slump", ja="作りたいのにアイデアがない、または道具がない。創作スランプ", **{"zh-CN": "想创作但没灵感或没工具，创作低谷", "zh-TW": "想創作但沒靈感或沒工具，創作低谷"}, vi="Muốn sáng tạo nhưng không có ý tưởng hoặc thiếu công cụ. Slump sáng tạo", id="Ingin berkarya tapi tidak ada ide atau alat. Creative slump"),
        whatTheyNeed=M(ko=_ko_r(5, "whatTheyNeed"), en="Long uninterrupted blocks. Environment without focus-breaking notifications", ja="邪魔されない長い時間の塊。集中を壊す通知のない環境", **{"zh-CN": "不被打断的长段时间，没有破坏专注的通知", "zh-TW": "不被打斷的長段時間，沒有破壞專注的通知"}, vi="Khối thời gian dài không bị làm phiền. Môi trường không có thông báo phá focus", id="Blok waktu panjang tanpa gangguan. Lingkungan tanpa notifikasi yang ganggu fokus"),
        oneLiner=M(ko=_ko_r(5, "oneLiner"), en="While you are alone, things that did not exist in the world are being made", ja="あなたが一人でいる間、世界になかったものが作られている", **{"zh-CN": "你独处时，世界上不存在的东西正在被创造", "zh-TW": "你獨處時，世界上不存在的東西正在被創造"}, vi="Trong lúc bạn ở một mình, những thứ chưa từng có trên thế giới đang được tạo ra", id="Saat kamu sendiri, hal-hal yang belum ada di dunia sedang dibuat"),
        certificationPhrase=M(
            ko=_ko_r(5, "certificationPhrase"),
            en="Creative Production Type 🎨 Certified: Gets busier when alone",
            ja="創作生産型 🎨 一人の方が忙しくなる、認証完了",
            **{"zh-CN": "创作产出型 🎨 独处反而更忙，认证完成", "zh-TW": "創作產出型 🎨 獨處反而更忙，認證完成"},
            vi="Kiểu sản xuất sáng tạo 🎨 Ở một mình lại bận hơn—đã xác nhận",
            id="Tipe produksi kreatif 🎨 Sendiri malah lebih sibuk—sertifikasi selesai",
        ),
        shareLine=M(ko=_ko_r(5, "shareLine"), en="My true alone time type: Creative Production 🎨 Gets busier when alone... admit forgetting meals while creating lol → Relatable? What type are you?", ja="私の本当の一人時間タイプ：創作生産型 🎨 一人の方が忙しくなる…作ってたら食事忘れる、認める ㅋㅋ → 共感する？あなたは？", **{"zh-CN": "我的真·独处类型：创作产出型 🎨 独处更忙…做着做着忘吃饭我承认 哈哈 → 有共鸣吗？你是哪种？", "zh-TW": "我的真·獨處類型：創作產出型 🎨 獨處更忙…做著做著忘吃飯我承認 哈哈 → 有共鳴嗎？你是哪種？"}, vi="Kiểu thời gian một mình thật của tôi: Sản xuất sáng tạo 🎨 Ở một mình lại bận hơn… làm quên ăn thú nhận haha → Có đồng cảm không? Bạn kiểu gì?", id="Tipe waktu sendiri asli-ku: Produksi kreatif 🎨 Sendiri malah lebih sibuk… ngaku lupa makan pas berkarya wkwk → Relate? Kamu tipe apa?"),
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
        + "\n];\n\nexport const phase3AloneTimeTypeResults: Phase3AloneTimeTypeResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    data = load_data()
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3AloneTimeTypeData.ts"
    body = build_ts(data)
    out.write_text(body, encoding="utf-8")
    line_count = body.count("\n") + (0 if body.endswith("\n") else 1)
    print(f"Wrote {out}")
    print(f"Bytes: {len(body.encode('utf-8'))}")
    print(f"Lines: {line_count}")


if __name__ == "__main__":
    main()

