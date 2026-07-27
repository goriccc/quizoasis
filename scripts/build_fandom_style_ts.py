"""Generate lib/phase3FandomStyleData.ts with full 7-language localeMap() content."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** 나의 덕질 성향 진단 — 12문항 4지선다, A=0 B=1 C=2 D=3, 총점 0~36 → Type1~6 · 7개 로케일 */

export type Phase3FandomStyleLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3FandomStyleLocaleKey, string>): Record<Phase3FandomStyleLocaleKey, string> {
  return t;
}

function opt(m: Record<Phase3FandomStyleLocaleKey, string>, score: number): { text: Record<Phase3FandomStyleLocaleKey, string>; score: number } {
  return { text: localeMap(m), score };
}

export interface Phase3FandomStyleQuestion {
  id: number;
  question: Record<Phase3FandomStyleLocaleKey, string>;
  options: { text: Record<Phase3FandomStyleLocaleKey, string>; score: number }[];
}

export interface Phase3FandomStyleResult {
  type: string;
  emoji: string;
  title: Record<Phase3FandomStyleLocaleKey, string>;
  shortDescription: Record<Phase3FandomStyleLocaleKey, string>;
  description: Record<Phase3FandomStyleLocaleKey, string>;
  fandomType: Record<Phase3FandomStyleLocaleKey, string>;
  fandomKeywords: Record<Phase3FandomStyleLocaleKey, string>;
  fandomStyle: Record<Phase3FandomStyleLocaleKey, string>;
  strength: Record<Phase3FandomStyleLocaleKey, string>;
  characteristic: Record<Phase3FandomStyleLocaleKey, string>;
  bestBiasType: Record<Phase3FandomStyleLocaleKey, string>;
  oneLiner: Record<Phase3FandomStyleLocaleKey, string>;
  certificationPhrase: Record<Phase3FandomStyleLocaleKey, string>;
  shareLine: Record<Phase3FandomStyleLocaleKey, string>;
}

export function calculatePhase3FandomStyleResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}

export const phase3FandomStyleQuestions: Phase3FandomStyleQuestion[] = [
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
        "fandomType",
        "fandomKeywords",
        "fandomStyle",
        "strength",
        "characteristic",
        "bestBiasType",
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


# Korean source strings from gen_fandom_style_data.py (data section only)
_gen_path = Path(__file__).resolve().parent / "gen_fandom_style_data.py"
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
        "fandomKeywords": "keywords",
        "bestBiasType": "bestBias",
        "certificationPhrase": "certification",
        "shareLine": "share",
    }
    k = key_map.get(field, field)
    return KO_RESULTS[type_idx][k]


QUESTIONS = [
    q(
        M(
            ko=_ko_q(0),
            en="Your favorite artist just released a new album. I would…",
            ja="好きなアーティストの新しいアルバムが出た。私は？",
            **{"zh-CN": "喜欢的艺人出了新专辑。我会？", "zh-TW": "喜歡的藝人出了新專輯。我會？"},
            vi="Nghệ sĩ yêu thích vừa phát hành album mới. Tôi sẽ…",
            id="Artis favorit baru merilis album. Saya…",
        ),
        [
            (M(ko=_ko_o(0, 0), en="Stream it and save a few good tracks", ja="ストリーミングで聴いて、良い曲をいくつか保存する", **{"zh-CN": "用流媒体听，保存几首好听的", "zh-TW": "用串流聽，保存幾首好聽的"}, vi="Nghe trên streaming và lưu vài bài hay", id="Streaming dan menyimpan beberapa lagu bagus"), 0),
            (M(ko=_ko_o(0, 1), en="Listen to every track multiple times and pick my favorite", ja="全曲を何度も聴いて、自分の最愛曲を決める", **{"zh-CN": "全曲反复听，选出我的最爱", "zh-TW": "全曲反覆聽，選出我的最愛"}, vi="Nghe toàn bộ nhiều lần và chọn bài yêu thích nhất", id="Mendengarkan semua lagu berkali-kali dan memilih favorit"), 1),
            (M(ko=_ko_o(0, 2), en="Buy the physical album and analyze every track", ja="実物アルバムを購入し、全トラックを分析する", **{"zh-CN": "购买实体专辑，分析每一首歌", "zh-TW": "購買實體專輯，分析每一首歌"}, vi="Mua album vật lý và phân tích từng bài", id="Membeli album fisik dan menganalisis setiap lagu"), 2),
            (M(ko=_ko_o(0, 3), en="Waited since the day before release, listen at midnight, and complete photocard random draws", ja="発売前日から待って、真夜中にすぐ聴いて、フォトカードのランダム引きまで完了する", **{"zh-CN": "发售前一天就开始等，零点立刻听，并完成小卡随机抽取", "zh-TW": "發售前一天就開始等，零點立刻聽，並完成小卡隨機抽取"}, vi="Chờ từ ngày hôm trước, nghe ngay lúc nửa đêm và hoàn thành cả rút photocard ngẫu nhiên", id="Sudah menunggu sejak sehari sebelum rilis, langsung dengar tengah malam, dan selesaikan gacha photocard"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(1),
            en="Your bias posted a selfie on social media. I would…",
            ja="推しがSNSにセルフィーを投稿した。私は？",
            **{"zh-CN": "本命在SNS上发了自拍。我会？", "zh-TW": "本命在SNS上發了自拍。我會？"},
            vi="Bias đăng selfie lên mạng xã hội. Tôi sẽ…",
            id="Bias memposting selfie di SNS. Saya…",
        ),
        [
            (M(ko=_ko_o(1, 0), en="Think they look pretty and hit like", ja="可愛いと思って、いいねを押す", **{"zh-CN": "觉得好看，点个赞", "zh-TW": "覺得好看，按個讚"}, vi="Thấy đẹp và bấm thích", id="Mikir cantik dan menekan like"), 0),
            (M(ko=_ko_o(1, 1), en="Save it and set it as my wallpaper", ja="保存して、壁紙に設定する", **{"zh-CN": "保存并设为壁纸", "zh-TW": "保存並設為桌布"}, vi="Lưu lại và đặt làm hình nền", id="Menyimpan dan menjadikannya wallpaper"), 1),
            (M(ko=_ko_o(1, 2), en="Save it and share in fan cafe/community to react together", ja="保存して、ファンカフェ/コミュニティで共有し、一緒に反応する", **{"zh-CN": "保存并在粉丝站/社区分享，一起互动", "zh-TW": "保存並在粉絲站/社群分享，一起互動"}, vi="Lưu và chia sẻ lên fan cafe/cộng đồng để cùng phản ứng", id="Menyimpan dan membagikan di fan cafe/komunitas untuk bereaksi bersama"), 2),
            (M(ko=_ko_o(1, 3), en="Instantly save, share, and retweet while analyzing details (background, outfit, expression)", ja="即保存・共有・リツイートを同時にして、写真のディテール（背景・服装・表情）まで分析する", **{"zh-CN": "立刻保存·分享·转发，并分析照片细节（背景·穿搭·表情）", "zh-TW": "立刻保存·分享·轉推，並分析照片細節（背景·穿搭·表情）"}, vi="Lưu·chia sẻ·retweet ngay và phân tích chi tiết (bối cảnh, trang phục, biểu cảm)", id="Langsung simpan, bagikan, retweet sekaligus sambil menganalisis detail (latar, outfit, ekspresi)"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(2),
            en="Merch from your favorite artist was released. I would…",
            ja="好きなアーティストのグッズが発売された。私は？",
            **{"zh-CN": "喜欢的艺人周边发售了。我会？", "zh-TW": "喜歡的藝人周邊發售了。我會？"},
            vi="Merch của nghệ sĩ yêu thích vừa ra mắt. Tôi sẽ…",
            id="Merch artis favorit baru dirilis. Saya…",
        ),
        [
            (M(ko=_ko_o(2, 0), en="Might buy one if it looks nice", ja="可愛ければ1つくらい買うかも", **{"zh-CN": "好看的话可能会买一个", "zh-TW": "好看的話可能會買一個"}, vi="Nếu đẹp thì có thể mua một cái", id="Kalau lucu mungkin beli satu"), 0),
            (M(ko=_ko_o(2, 1), en="Buy a few things I like", ja="気に入ったものをいくつか購入する", **{"zh-CN": "买几件喜欢的", "zh-TW": "買幾件喜歡的"}, vi="Mua vài món mình thích", id="Membeli beberapa yang disukai"), 1),
            (M(ko=_ko_o(2, 2), en="If it is a set, buy the full set and display it", ja="セット構成ならフルセットを購入して飾る", **{"zh-CN": "如果是套装就全套购买并陈列", "zh-TW": "如果是套組就全套購買並陳列"}, vi="Nếu là set thì mua full set và trưng bày", id="Kalau set, beli full set dan pajang"), 2),
            (M(ko=_ko_o(2, 3), en="Always buy limited editions, never hesitate on overseas orders, and keep sold-out alerts on", ja="限定版は必ず購入し、海外直送も躊躇しない。品切れ通知もオンにしている", **{"zh-CN": "限定版必买，海外直购也不犹豫，还开着售罄提醒", "zh-TW": "限定版必買，海外直購也不猶豫，還開著售罄提醒"}, vi="Luôn mua bản giới hạn, không ngại order quốc tế, và bật thông báo hết hàng", id="Selalu beli edisi terbatas, tidak ragu order luar negeri, dan nyalakan notif sold out"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(3),
            en="You found old content from your bias (past videos, photos, interviews). I would…",
            ja="推しの過去コンテンツ（昔の動画・写真・インタビュー）を見つけた。私は？",
            **{"zh-CN": "发现了本命的旧内容（以前的视频·照片·采访）。我会？", "zh-TW": "發現了本命的舊內容（以前的影片·照片·採訪）。我會？"},
            vi="Tìm thấy nội dung cũ của bias (video, ảnh, phỏng vấn trước đây). Tôi sẽ…",
            id="Menemukan konten lama bias (video, foto, wawancara dulu). Saya…",
        ),
        [
            (M(ko=_ko_o(3, 0), en="Watch a few if they look fun", ja="面白そうならいくつか見る", **{"zh-CN": "看起来有趣就看几个", "zh-TW": "看起來有趣就看幾個"}, vi="Xem vài cái nếu trông vui", id="Menonton beberapa kalau terlihat seru"), 0),
            (M(ko=_ko_o(3, 1), en="Look them up whenever I have time and fill in past history", ja="時間があるときに探して、過去のヒストリーを埋めていく", **{"zh-CN": "有空就去找，慢慢补全过去的历史", "zh-TW": "有空就去找，慢慢補全過去的歷史"}, vi="Tìm xem khi rảnh và bổ sung lịch sử quá khứ", id="Mencari saat ada waktu dan melengkapi sejarah masa lalu"), 1),
            (M(ko=_ko_o(3, 2), en="Systematically binge-watch and organize by year", ja="体系的に一気見して、年順に整理する", **{"zh-CN": "系统性地补完，按年份整理", "zh-TW": "系統性地補完，按年份整理"}, vi="Xem liên tục có hệ thống và sắp xếp theo năm", id="Maraton secara sistematis dan merapikan berdasarkan tahun"), 2),
            (M(ko=_ko_o(3, 3), en="Already watched everything. I even remember it. Watching again today too", ja="もう全部見た。記憶もしている。今日もまた見ている", **{"zh-CN": "早就全看过了，甚至都记得，今天也在重看", "zh-TW": "早就全看過了，甚至都記得，今天也在重看"}, vi="Đã xem hết rồi, thậm chí còn nhớ. Hôm nay cũng đang xem lại", id="Sudah nonton semua. Bahkan masih ingat. Hari ini juga nonton lagi"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(4),
            en="News broke that your bias is holding a concert or fan meeting. I would…",
            ja="推しがコンサート・ファンミーティングをするというニュースが出た。私は？",
            **{"zh-CN": "本命要开演唱会·粉丝见面会了。我会？", "zh-TW": "本命要開演唱會·粉絲見面會了。我會？"},
            vi="Tin ra rằng bias sẽ tổ chức concert/fan meeting. Tôi sẽ…",
            id="Kabar keluar bahwa bias akan mengadakan konser/fan meeting. Saya…",
        ),
        [
            (M(ko=_ko_o(4, 0), en="Want to go, but can give up if ticketing is too hard", ja="行きたいが、チケット取りが難しければ諦められる", **{"zh-CN": "想去，但抢票太难的话可以放弃", "zh-TW": "想去，但搶票太難的話可以放棄"}, vi="Muốn đi nhưng có thể bỏ cuộc nếu săn vé quá khó", id="Ingin pergi, tapi bisa menyerah kalau ticketing terlalu sulit"), 0),
            (M(ko=_ko_o(4, 1), en="Try hard for tickets and definitely go if I get them", ja="チケット取りに必死に挑戦し、取れたら当然行く", **{"zh-CN": "努力抢票，抢到当然去", "zh-TW": "努力搶票，搶到當然去"}, vi="Cố gắng săn vé và chắc chắn đi nếu được", id="Bersusah payah ticketing dan pasti pergi kalau dapat"), 1),
            (M(ko=_ko_o(4, 2), en="Log in with multiple accounts for ticketing and look for resale if it fails", ja="複数アカウントで同時接続してチケット取り、ダメなら譲渡も探す", **{"zh-CN": "多账号同时抢票，不行就找转让", "zh-TW": "多帳號同時搶票，不行就找轉讓"}, vi="Đăng nhập nhiều tài khoản cùng lúc để săn vé, không được thì tìm chuyển nhượng", id="Login banyak akun sekaligus untuk ticketing, kalau gagal cari resale"), 2),
            (M(ko=_ko_o(4, 3), en="Already cleared my schedule. Will go to other cities or overseas. Preparing merch trade list", ja="もう予定を空けた。地方・海外にも行く。グッズ交換リストも準備中", **{"zh-CN": "早就空出日程，外地·海外也去，还在准备周边交换清单", "zh-TW": "早就空出日程，外地·海外也去，還在準備周邊交換清單"}, vi="Đã xóa lịch sẵn. Đi tỉnh khác, nước ngoài cũng đi. Đang chuẩn bị danh sách đổi merch", id="Sudah kosongkan jadwal. Ke daerah lain/luar negeri juga pergi. Daftar tukar merch sedang disiapkan"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(5),
            en="In fan communities (cafes, Discord, Twitter), I…",
            ja="ファンダムコミュニティ（カフェ・Discord・Twitter）で、私は？",
            **{"zh-CN": "在粉丝社区（站子·Discord·Twitter）里，我会？", "zh-TW": "在粉絲社群（站子·Discord·Twitter）裡，我會？"},
            vi="Trong cộng đồng fan (cafe, Discord, Twitter), tôi…",
            id="Di komunitas fandom (cafe, Discord, Twitter), saya…",
        ),
        [
            (M(ko=_ko_o(5, 0), en="Lurk occasionally", ja="たまに覗く程度", **{"zh-CN": "偶尔潜水看看", "zh-TW": "偶爾潛水看看"}, vi="Thỉnh thoảng lướt xem", id="Sesekadar ngintip"), 0),
            (M(ko=_ko_o(5, 1), en="Drop in sometimes to get fan info", ja="たまに入って、推し活情報を得る", **{"zh-CN": "偶尔进去获取追星信息", "zh-TW": "偶爾進去獲取追星資訊"}, vi="Thỉnh thoảng vào lấy thông tin fan", id="Kadang masuk untuk dapat info fandom"), 1),
            (M(ko=_ko_o(5, 2), en="Visit fairly often and enjoy talking with fans", ja="かなり頻繁に活動し、ファンとの交流を楽しむ", **{"zh-CN": "经常活动，享受和粉丝交流", "zh-TW": "經常活動，享受和粉絲交流"}, vi="Hoạt động khá thường xuyên và thích giao lưu với fan", id="Cukup sering aktif dan menikmati ngobrol dengan fans"), 2),
            (M(ko=_ko_o(5, 3), en="Practically live there. Never miss real-time issues. Online fans are my friends", ja="ほぼ常駐する。リアルタイムの話題を見逃さない。オンラインのファンが友達", **{"zh-CN": "几乎常驻，不错过任何实时话题，线上粉丝就是朋友", "zh-TW": "幾乎常駐，不錯過任何即時話題，線上粉絲就是朋友"}, vi="Gần như ở luôn. Không bỏ lỡ issue thời gian thực. Fan online là bạn bè", id="Hampir tinggal di sana. Tidak pernah ketinggalan isu real-time. Fans online adalah teman"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(6),
            en="Your bias appears in a variety show, drama, or movie. I would…",
            ja="推しが出演するバラエティ・ドラマ・映画が出た。私は？",
            **{"zh-CN": "本命出演的综艺·电视剧·电影上线了。我会？", "zh-TW": "本命出演的綜藝·戲劇·電影上線了。我會？"},
            vi="Bias xuất hiện trong variety, phim truyền hình hoặc điện ảnh. Tôi sẽ…",
            id="Bias tampil di variety, drama, atau film. Saya…",
        ),
        [
            (M(ko=_ko_o(6, 0), en="Watch if it looks fun", ja="面白そうなら見る", **{"zh-CN": "看起来有趣就看", "zh-TW": "看起來有趣就看"}, vi="Xem nếu trông vui", id="Nonton kalau terlihat seru"), 0),
            (M(ko=_ko_o(6, 1), en="Of course watch because my bias is in it, focusing on their scenes", ja="推しが出るから当然見る。推しのシーン中心に見る", **{"zh-CN": "本命出演当然看，主要看本命的镜头", "zh-TW": "本命出演當然看，主要看本命的鏡頭"}, vi="Tất nhiên xem vì bias có mặt, tập trung vào cảnh của bias", id="Tentu nonton karena bias tampil, fokus ke adegan bias"), 1),
            (M(ko=_ko_o(6, 2), en="Watch live and also catch bias fancams and cross-edits", ja="本放送を死守し、推し直カメとクロス編集も見る", **{"zh-CN": "守直播，还看本命直拍和混剪", "zh-TW": "守直播，還看本命直拍和混剪"}, vi="Xem live và cả fancam bias lẫn video edit chéo", id="Nonton live dan juga fancam bias serta cross-edit"), 2),
            (M(ko=_ko_o(6, 3), en="Catch live, reruns, fancams, clips, and reaction videos. Saved iconic scenes as GIFs", ja="本放送・再放送・直カメ・クリップ・反応動画まで全部。名場面はgifにして保存済み", **{"zh-CN": "直播·重播·直拍·片段·反应视频全看，名场面已做成GIF", "zh-TW": "直播·重播·直拍·片段·反應影片全看，名場面已做成GIF"}, vi="Xem live, phát lại, fancam, clip, video reaction. Cảnh đỉnh đã lưu thành GIF", id="Nonton live, rerun, fancam, clip, video reaksi. Adegan ikonik sudah disimpan jadi GIF"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(7),
            en="When talk turns to your bias, I…",
            ja="推しの話題が出たとき、私は？",
            **{"zh-CN": "聊到本命时，我会？", "zh-TW": "聊到本命時，我會？"},
            vi="Khi nói về bias, tôi…",
            id="Ketika obrolan tentang bias muncul, saya…",
        ),
        [
            (M(ko=_ko_o(7, 0), en='Casually say "I like them"', ja="「好きだよ」と軽く言う", **{"zh-CN": "轻松说「我喜欢TA」", "zh-TW": "輕鬆說「我喜歡TA」"}, vi='Nói nhẹ "Tôi thích người đó"', id='Santai bilang "Aku suka dia"'), 0),
            (M(ko=_ko_o(7, 1), en="Can explain why I like them and get excited talking about it", ja="好きな理由を説明でき、話すとテンションが上がる", **{"zh-CN": "能解释喜欢的理由，越说越兴奋", "zh-TW": "能解釋喜歡的理由，越說越興奮"}, vi="Giải thích được lý do thích và càng nói càng hào hứng", id="Bisa jelaskan alasan suka dan jadi semangat saat bicara"), 1),
            (M(ko=_ko_o(7, 2), en="Hard to stop once I start. If they do not know, I explain from the beginning", ja="話し始めると止まりにくい。相手が知らなければ最初から説明する", **{"zh-CN": "一开口就停不下来，对方不知道就从头讲起", "zh-TW": "一開口就停不下來，對方不知道就從頭講起"}, vi="Bắt đầu nói rồi khó dừng. Nếu đối phương không biết thì giải thích từ đầu", id="Sulit berhenti kalau sudah mulai. Kalau lawan tidak tahu, jelaskan dari awal"), 2),
            (M(ko=_ko_o(7, 3), en="Full-on recruitment starts. Sending video links", ja="本格的な入坑勧誘が始まる。動画リンクを送っている", **{"zh-CN": "正式安利开始，已经在发视频链接", "zh-TW": "正式安利開始，已經在發影片連結"}, vi="Bắt đầu tuyển fan chính thức. Đang gửi link video", id="Rekrutmen fan dimulai. Sedang mengirim link video"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(8),
            en="Streaming chart or music performance results were announced. I would…",
            ja="ストリーミングチャートや音源成績が発表された。私は？",
            **{"zh-CN": "流媒体榜单或音源成绩公布了。我会？", "zh-TW": "串流榜單或音源成績公布了。我會？"},
            vi="Bảng xếp hạng streaming hoặc thành tích nhạc được công bố. Tôi sẽ…",
            id="Chart streaming atau hasil musik diumumkan. Saya…",
        ),
        [
            (M(ko=_ko_o(8, 0), en="Note the results and move on", ja="結果が出たな、と流す", **{"zh-CN": "知道结果了就略过", "zh-TW": "知道結果了就略過"}, vi="Biết kết quả rồi thôi", id="Tahu hasilnya lalu lanjut"), 0),
            (M(ko=_ko_o(8, 1), en="Feel proud if good, disappointed if not", ja="成績が良ければ誇らしく、悪ければ残念", **{"zh-CN": "成绩好就骄傲，不好就遗憾", "zh-TW": "成績好就驕傲，不好就遺憾"}, vi="Tự hào nếu tốt, tiếc nếu không", id="Bangga kalau bagus, kecewa kalau tidak"), 1),
            (M(ko=_ko_o(8, 2), en="Contribute to streaming myself and check chart rankings regularly", ja="直接ストリーミングに貢献し、チャート順位をこまめに確認する", **{"zh-CN": "亲自刷流，经常查看榜单排名", "zh-TW": "親自刷流，經常查看榜單排名"}, vi="Tự streaming và thường xuyên kiểm tra thứ hạng chart", id="Berkontribusi streaming sendiri dan rutin cek peringkat chart"), 2),
            (M(ko=_ko_o(8, 3), en="Keep streaming programs running and check Melon, Spotify, and Billboard at once. Midnight streaming is basic", ja="ストリーミングプログラムを常時起動し、Melon・Spotify・Billboardを同時チェック。真夜中スミンは基本", **{"zh-CN": "挂着刷流程序，同时查Melon·Spotify·Billboard，零点刷流是基本操作", "zh-TW": "掛著刷流程式，同時查Melon·Spotify·Billboard，零點刷流是基本操作"}, vi="Bật chương trình streaming liên tục, check Melon·Spotify·Billboard cùng lúc. Streaming nửa đêm là cơ bản", id="Jalankan program streaming terus, cek Melon, Spotify, Billboard sekaligus. Streaming tengah malam sudah standar"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(9),
            en="How do I organize bias-related merch and photocards?",
            ja="推し関連のグッズ・フォトカードを整理する、私だけの方法は？",
            **{"zh-CN": "我整理本命相关周边·小卡的方式是？", "zh-TW": "我整理本命相關周邊·小卡的方式是？"},
            vi="Cách tôi sắp xếp merch và photocard liên quan đến bias?",
            id="Cara saya merapikan merch dan photocard terkait bias?",
        ),
        [
            (M(ko=_ko_o(9, 0), en="Not really. Even if I have them, I just leave them", ja="特にない。持っていてもそのまま", **{"zh-CN": "没什么特别的，有也随便放着", "zh-TW": "沒什麼特別的，有也隨便放著"}, vi="Không có gì đặc biệt. Có rồi cũng để đó", id="Tidak ada cara khusus. Punya pun dibiarkan saja"), 0),
            (M(ko=_ko_o(9, 1), en="Collect the ones I like", ja="好きなものは集めておく", **{"zh-CN": "喜欢的会收起来", "zh-TW": "喜歡的會收起來"}, vi="Những món thích thì gom lại", id="Yang disukai dikumpulkan"), 1),
            (M(ko=_ko_o(9, 2), en="Store them neatly in sleeves and binders", ja="スリーブ・バインダーに入れてきれいに整理", **{"zh-CN": "用卡套·卡册整齐收纳", "zh-TW": "用卡套·卡冊整齊收納"}, vi="Bỏ vào sleeve và binder cho gọn gàng", id="Disimpan rapi di sleeve dan binder"), 2),
            (M(ko=_ko_o(9, 3), en="Sorted, graded, and cataloged by photocard. Separate trade list for duplicates", ja="フォトカード別に分類・等級・登録まで済み。重複カードは交換リストが別", **{"zh-CN": "小卡已分类·评级·登记，重复卡另有交换清单", "zh-TW": "小卡已分類·評級·登記，重複卡另有交換清單"}, vi="Đã phân loại·xếp hạng·đăng ký theo từng photocard. Thẻ trùng có danh sách đổi riêng", id="Sudah diklasifikasi, dinilai, dan dicatat per photocard. Kartu duplikat punya daftar tukar terpisah"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(10),
            en="How did you discover your bias and how fast did you stan?",
            ja="推しを初めて知ったきっかけと、入坑スピードは？",
            **{"zh-CN": "你最初认识本命的契机和入坑速度是？", "zh-TW": "你最初認識本命的契機和入坑速度是？"},
            vi="Bạn biết bias lần đầu như thế nào và tốc độ stan?",
            id="Bagaimana kamu pertama kali kenal bias dan seberapa cepat stan?",
        ),
        [
            (M(ko=_ko_o(10, 0), en="Got to know naturally and liked them gradually", ja="自然に知って、徐々に好きになった", **{"zh-CN": "自然认识，慢慢喜欢", "zh-TW": "自然認識，慢慢喜歡"}, vi="Biết một cách tự nhiên và dần thích", id="Kenal secara natural dan perlahan suka"), 0),
            (M(ko=_ko_o(10, 1), en="Suddenly realized I liked them at some point", ja="ある瞬間、急に好きになったと感じた", **{"zh-CN": "某个瞬间突然发现自己喜欢了", "zh-TW": "某個瞬間突然發現自己喜歡了"}, vi="Đột nhiên nhận ra mình thích ở một thời điểm", id="Tiba-tiba sadar suka di suatu momen"), 1),
            (M(ko=_ko_o(10, 2), en="There was a trigger video or stage, then I fell in fast", ja="きっかけの動画やステージがあり、その後すぐにハマった", **{"zh-CN": "有契机视频或舞台，之后快速入坑", "zh-TW": "有契機影片或舞台，之後快速入坑"}, vi="Có video hoặc stage khiến tôi thích, rồi nhanh chóng đu theo", id="Ada video atau stage pemicu, lalu cepat terjun"), 2),
            (M(ko=_ko_o(10, 3), en="The stan moment is crystal clear. Life divided into before and after", ja="入坑の瞬間が鮮明。その前と後で人生が分かれる", **{"zh-CN": "入坑瞬间清晰，人生从此分为前后", "zh-TW": "入坑瞬間清晰，人生從此分為前後"}, vi="Khoảnh khắc stan rất rõ. Cuộc đời chia thành trước và sau", id="Momen stan sangat jelas. Hidup terbagi sebelum dan sesudah"), 3),
        ],
    ),
    q(
        M(
            ko=_ko_q(11),
            en="Right now, when you think of your bias…",
            ja="今この瞬間、推しを思うと？",
            **{"zh-CN": "此刻想到本命，你会？", "zh-TW": "此刻想到本命，你會？"},
            vi="Ngay lúc này, khi nghĩ về bias…",
            id="Saat ini, ketika memikirkan bias…",
        ),
        [
            (M(ko=_ko_o(11, 0), en="Just like them. Comfortably and genuinely", ja="ただ好き。心地よく、本気で", **{"zh-CN": "就是喜欢，轻松而真心", "zh-TW": "就是喜歡，輕鬆而真心"}, vi="Chỉ là thích. Thoải mái và chân thành", id="Sekadar suka. Nyaman dan tulus"), 0),
            (M(ko=_ko_o(11, 1), en="Miss them and look forward to their next activity", ja="会いたくて、次の活動が待ち遠しい", **{"zh-CN": "想见TA，期待下次活动", "zh-TW": "想見TA，期待下次活動"}, vi="Nhớ và mong chờ hoạt động tiếp theo", id="Kangen dan menantikan aktivitas berikutnya"), 1),
            (M(ko=_ko_o(11, 2), en="Feel like I should look for content to stan today", ja="今日も推し活コンテンツを探すべきだと思う", **{"zh-CN": "觉得今天也要找追星内容看", "zh-TW": "覺得今天也要找追星內容看"}, vi="Cảm thấy nên tìm nội dung fan hôm nay", id="Merasa harus cari konten fan hari ini"), 2),
            (M(ko=_ko_o(11, 3), en="Already watching bias content on my phone, or thought of them even while taking this test", ja="すでにスマホで推しコンテンツを見ているか、このテスト中も推しのことを考えた", **{"zh-CN": "已经在手机上看本命内容，或做测试时也在想TA", "zh-TW": "已經在手機上看本命內容，或做測驗時也在想TA"}, vi="Đang xem nội dung bias trên điện thoại, hoặc vẫn nghĩ về bias khi làm test này", id="Sudah nonton konten bias di HP, atau memikirkan bias saat tes ini"), 3),
        ],
    ),
]

RESULTS = [
    r(
        "Type1", "🎵",
        title=M(ko=_ko_r(0, "title"), en="Light and Healthy, Healing Listener Type", ja="軽やかで健康的、ヒーリング鑑賞型", **{"zh-CN": "轻松健康，治愈欣赏型", "zh-TW": "輕鬆健康，治癒欣賞型"}, vi="Nhẹ nhàng và lành mạnh, kiểu nghe thưởng thức chữa lành", id="Ringan dan sehat, tipe pendengar healing"),
        shortDescription=M(ko=_ko_r(0, "shortDescription"), en="Your fandom adds quiet joy to daily life. Your love is genuine even without forcing yourself to keep up.", ja="あなたの推し活は日常に静かな楽しさを加えます。無理に追わなくても、好きな気持ちは本物です。", **{"zh-CN": "你的追星为日常增添安静的快乐。不必勉强跟进，喜欢的心意是真实的。", "zh-TW": "你的追星為日常增添安靜的快樂。不必勉強跟進，喜歡的心意是真實的。"}, vi="Fandom của bạn thêm niềm vui nhẹ nhàng vào đời sống hàng ngày. Không cần cố gắng theo kịp, tình cảm vẫn thật lòng.", id="Fandom-mu menambah kegembiraan tenang dalam keseharian. Tanpa memaksa ikut semua, perasaan suka tetap tulus."),
        description=M(ko=_ko_r(0, "description"), en="You feel good listening to music, welcome new content, and a like is enough. Fandom is pure taste, not obligation. You do not spend much energy on fan activities, but your affection is clear.", ja="音楽を聴いて気分が良くなり、新しいコンテンツが出れば嬉しく、いいねで十分なタイプです。推し活は義務ではなく、純粋な好みとして存在します。大きなエネルギーを使わなくても、好きという事実ははっきりしています。", **{"zh-CN": "听音乐心情就好，有新内容就开心，点个赞就足够。追星不是义务，而是纯粹的喜好。不必投入大量精力，喜欢这件事本身很清楚。", "zh-TW": "聽音樂心情就好，有新內容就開心，按個讚就足夠。追星不是義務，而是純粹的喜好。不必投入大量精力，喜歡這件事本身很清楚。"}, vi="Nghe nhạc thấy vui, có nội dung mới thì mừng, bấm thích là đủ. Fandom là gu thuần khiết, không phải nghĩa vụ. Không tốn nhiều năng lượng nhưng tình cảm vẫn rõ ràng.", id="Mendengarkan musik bikin mood bagus, konten baru bikin senang, like saja sudah cukup. Fandom adalah selera murni, bukan kewajiban. Tidak boros energi, tapi perasaan suka jelas."),
        fandomType=M(ko=_ko_r(0, "fandomType"), en="Healing Listener Type 🎵", ja="ヒーリング鑑賞型 🎵", **{"zh-CN": "治愈欣赏型 🎵", "zh-TW": "治癒欣賞型 🎵"}, vi="Kiểu nghe thưởng thức chữa lành 🎵", id="Tipe pendengar healing 🎵"),
        fandomKeywords=M(ko=_ko_r(0, "fandomKeywords"), en="Comfort · Taste · Light fan love · Daily joy", ja="心地よさ・好み・軽いファン心・日常の楽しさ", **{"zh-CN": "舒适·品味·轻度粉丝心·日常乐趣", "zh-TW": "舒適·品味·輕度粉絲心·日常樂趣"}, vi="Thoải mái · Gu · Fan nhẹ · Niềm vui hàng ngày", id="Nyaman · Selera · Fan ringan · Kesenangan harian"),
        fandomStyle=M(ko=_ko_r(0, "fandomStyle"), en="Streaming · YouTube algorithm · Occasional live watching", ja="ストリーミング・YouTubeアルゴリズム・たまにライブ視聴", **{"zh-CN": "流媒体·YouTube推荐·偶尔看直播", "zh-TW": "串流·YouTube推薦·偶爾看直播"}, vi="Streaming · Thuật toán YouTube · Thỉnh thoảng xem live", id="Streaming · Algoritma YouTube · Kadang nonton live"),
        strength=M(ko=_ko_r(0, "strength"), en="No stress from fandom. What you love stays purely enjoyable", ja="推し活によるストレスがない。好きなものが純粋な楽しみのまま", **{"zh-CN": "追星没有压力，喜欢的事物保持纯粹的快乐", "zh-TW": "追星沒有壓力，喜歡的事物保持純粹的快樂"}, vi="Không stress vì fandom. Thứ bạn thích vẫn là niềm vui thuần khiết", id="Tidak stres karena fandom. Hal yang disukai tetap murni menyenangkan"),
        characteristic=M(ko=_ko_r(0, "characteristic"), en="Often likes multiple artists. Wide taste across genres", ja="複数のアーティストを同時に好きになりやすい。ジャンルが広い", **{"zh-CN": "常同时喜欢多位艺人，品味范围很广", "zh-TW": "常同時喜歡多位藝人，品味範圍很廣"}, vi="Thường thích nhiều nghệ sĩ cùng lúc. Gu rộng qua nhiều thể loại", id="Sering suka banyak artis sekaligus. Selera genre luas"),
        bestBiasType=M(ko=_ko_r(0, "bestBiasType"), en="Artists with steady activity and high-quality music and content", ja="活動が継続的で、音楽・コンテンツのクオリティが高いアーティスト", **{"zh-CN": "活动稳定、音乐与内容质量高的艺人", "zh-TW": "活動穩定、音樂與內容品質高的藝人"}, vi="Nghệ sĩ hoạt động đều đặn, nhạc và nội dung chất lượng cao", id="Artis dengan aktivitas konsisten dan kualitas musik/konten tinggi"),
        oneLiner=M(ko=_ko_r(0, "oneLiner"), en="There is no right or wrong way to like someone. This style fits you best", ja="好き方に正解も不正解もない。このスタイルがあなたに一番合っている", **{"zh-CN": "喜欢的方式没有对错，这种方式最适合你", "zh-TW": "喜歡的方式沒有對錯，這種方式最適合你"}, vi="Cách thích không có đúng sai. Cách này hợp bạn nhất", id="Tidak ada benar salah dalam cara suka. Gaya ini paling cocok untukmu"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(0, "shareLine"), en="My fandom type: Healing Listener 🎵 They say I am a light fan... my love is real even without forcing myself → What is your fandom type?", ja="私の推し活タイプ：ヒーリング鑑賞型 🎵 軽く楽しむファンらしい…無理しなくても好きな気持ちは本物 → あなたはどんな推し活タイプ？", **{"zh-CN": "我的追星类型：治愈欣赏型 🎵 说是轻松享受的粉…不勉强也喜欢是真的 → 你是什么追星类型？", "zh-TW": "我的追星類型：治癒欣賞型 🎵 說是輕鬆享受的粉…不勉強也喜歡是真的 → 你是什麼追星類型？"}, vi="Kiểu fandom của tôi: Nghe thưởng thức chữa lành 🎵 Bảo là fan nhẹ nhàng… thích mà không cố vẫn thật → Bạn thuộc kiểu nào?", id="Tipe fandom-ku: Pendengar healing 🎵 Katanya fan yang santai… suka tanpa memaksa tetap tulus → Kamu tipe apa?"),
    ),
    r(
        "Type2", "💙",
        title=M(ko=_ko_r(1, "title"), en="Emotionally Connected, Emotional Immersion Type", ja="感情でつながる、感性没入型", **{"zh-CN": "以情感连接，感性沉浸型", "zh-TW": "以情感連接，感性沉浸型"}, vi="Kết nối bằng cảm xúc, kiểu đắm chìm cảm xúc", id="Terhubung lewat emosi, tipe imersi emosional"),
        shortDescription=M(ko=_ko_r(1, "shortDescription"), en="You react most strongly when your bias's music, stage, and emotions connect with your own.", ja="推しの音楽・ステージ・感情が自分の感情とつながるとき、最も強く反応します。", **{"zh-CN": "当本命的音樂、舞台与情感和自己的情绪连接时，你反应最强烈。", "zh-TW": "當本命的音樂、舞台與情感和自己的情緒連接時，你反應最強烈。"}, vi="Bạn phản ứng mạnh nhất khi nhạc, stage và cảm xúc của bias kết nối với cảm xúc của bạn.", id="Kamu paling kuat bereaksi saat musik, stage, dan emosi bias terhubung dengan emosimu."),
        description=M(ko=_ko_r(1, "description"), en="Lyrics hit your heart, one stage expression can move you to tears, and you feel their pain when they struggle. Emotional connection matters more than merch or chart numbers.", ja="歌詞が心に刺さり、ステージの表情一つで涙ぐみ、推しが辛いと一緒に辛くなるタイプです。グッズや数値より、推しとの感情的なつながりが推し活の核心です。", **{"zh-CN": "歌词戳心，一个舞台表情就能动容，本命辛苦时你也跟着难受。比起周边和数据，情感连接才是追星核心。", "zh-TW": "歌詞戳心，一個舞台表情就能動容，本命辛苦時你也跟著難受。比起周邊和數據，情感連接才是追星核心。"}, vi="Lời bài hát chạm tim, một biểu cảm trên stage có thể khiến bạn xúc động, bias khó khăn thì bạn cũng đau. Kết nối cảm xúc quan trọng hơn merch hay chart.", id="Lirik menusuk hati, ekspresi stage bisa bikin terharu, bias susah kamu ikut susah. Koneksi emosional lebih penting dari merch atau angka chart."),
        fandomType=M(ko=_ko_r(1, "fandomType"), en="Emotional Immersion Type 💙", ja="感性没入型 💙", **{"zh-CN": "感性沉浸型 💙", "zh-TW": "感性沉浸型 💙"}, vi="Kiểu đắm chìm cảm xúc 💙", id="Tipe imersi emosional 💙"),
        fandomKeywords=M(ko=_ko_r(1, "fandomKeywords"), en="Emotion · Empathy · Worldview · Narrative", ja="感情・共感・世界観・物語", **{"zh-CN": "情感·共感·世界观·叙事", "zh-TW": "情感·共感·世界觀·敘事"}, vi="Cảm xúc · Đồng cảm · Thế giới quan · Cốt truyện", id="Emosi · Empati · Worldview · Narasi"),
        fandomStyle=M(ko=_ko_r(1, "fandomStyle"), en="Music binge · Repeated MV watching · Interviews · Writing letters", ja="音楽一気見・MV反復視聴・インタビュー・手紙", **{"zh-CN": "音乐补完·反复看MV·采访·写信", "zh-TW": "音樂補完·反覆看MV·採訪·寫信"}, vi="Nghe liên tục · Xem MV lặp lại · Phỏng vấn · Viết thư", id="Maraton musik · Nonton MV berulang · Wawancara · Menulis surat"),
        strength=M(ko=_ko_r(1, "strength"), en="The sensitivity to feel your bias's beauty most deeply", ja="推しの美しい面を最も深く感じる感性", **{"zh-CN": "最能深度感受本命美好一面的感性", "zh-TW": "最能深度感受本命美好一面的感性"}, vi="Sự nhạy cảm để cảm nhận vẻ đẹp của bias ở mức sâu nhất", id="Kepekaan merasakan sisi indah bias paling dalam"),
        characteristic=M(ko=_ko_r(1, "characteristic"), en="Fan love grows stronger in hard times. Strongly drawn to narrative-driven artists", ja="推しが辛い時期にファン心が強くなる傾向。物語性のあるアーティストに強く惹かれる", **{"zh-CN": "本命困难时期粉丝心更强，容易被有故事性的艺人吸引", "zh-TW": "本命困難時期粉絲心更強，容易被有故事性的藝人吸引"}, vi="Tình fan mạnh hơn khi bias gặp khó. Dễ say mê nghệ sĩ có cốt truyện", id="Fan love makin kuat saat bias susah. Mudah jatuh cinta ke artis berbasis narasi"),
        bestBiasType=M(ko=_ko_r(1, "bestBiasType"), en="Artists with a clear worldview, emotional lyrics, and sincere communication", ja="はっきりした世界観・感性的な歌詞・真摯なコミュニケーションをするアーティスト", **{"zh-CN": "世界观清晰、歌词感性、沟通真诚的艺人", "zh-TW": "世界觀清晰、歌詞感性、溝通真誠的藝人"}, vi="Nghệ sĩ có thế giới quan rõ, lời bài cảm xúc, giao tiếp chân thành", id="Artis dengan worldview jelas, lirik emosional, dan komunikasi tulus"),
        oneLiner=M(ko=_ko_r(1, "oneLiner"), en="You are the person who listens to your bias's music most deeply", ja="あなたは推しの音楽を最も深く聴く人です", **{"zh-CN": "你是把本命音乐听得最深的人", "zh-TW": "你是把本命音樂聽得最深的人"}, vi="Bạn là người lắng nghe nhạc của bias sâu nhất", id="Kamu orang yang paling dalam mendengarkan musik bias"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(1, "shareLine"), en="My fandom type: Emotional Immersion 💙 They say I tear up at lyrics... fandom through feelings, right? → Same here lol, what about you?", ja="私の推し活タイプ：感性没入型 💙 推しの歌詞で涙ぐむタイプらしい…感情で推し活してるの正解 → 私もそう ㅋㅋ あなたは？", **{"zh-CN": "我的追星类型：感性沉浸型 💙 说是看歌词会哭的类型…用感情追星没错吧 → 我也是哈哈 你呢？", "zh-TW": "我的追星類型：感性沉浸型 💙 說是看歌詞會哭的類型…用感情追星沒錯吧 → 我也是哈哈 你呢？"}, vi="Kiểu fandom của tôi: Đắm chìm cảm xúc 💙 Bảo là khóc vì lời bài… đu bằng cảm xúc đúng không → Mình cũng vậy haha, còn bạn?", id="Tipe fandom-ku: Imersi emosional 💙 Katanya tipe yang nangis denger lirik… fandom lewat perasaan kan → Aku juga wkwk, kamu?"),
    ),
    r(
        "Type3", "📱",
        title=M(ko=_ko_r(2, "title"), en="Consuming All Content, Content Binge Type", ja="すべてのコンテンツを制覇する、コンテンツ一気見型", **{"zh-CN": "消费所有内容，内容补完型", "zh-TW": "消費所有內容，內容補完型"}, vi="Tiêu thụ mọi nội dung, kiểu binge content", id="Menyerap semua konten, tipe binge content"),
        shortDescription=M(ko=_ko_r(2, "shortDescription"), en="You never miss any trace your bias leaves, from old videos to real-time posts.", ja="過去の動画からリアルタイム投稿まで、推しが残したすべての痕跡を見逃しません。", **{"zh-CN": "从旧视频到实时动态，你不会错过本命留下的任何痕迹。", "zh-TW": "從舊影片到即時動態，你不會錯過本命留下的任何痕跡。"}, vi="Từ video cũ đến bài đăng thời gian thực, bạn không bỏ sót dấu vết nào của bias.", id="Dari video lama hingga posting real-time, kamu tidak melewatkan jejak bias."),
        description=M(ko=_ko_r(2, "description"), en="You check new content immediately, binge old videos, fill gaps from fan communities, and know your bias's history well. You are close to the ultimate consumption-type fan.", ja="新しいコンテンツはすぐ確認し、過去の動画を一気見し、ファンコミュニティで見逃した情報を埋め、推しの歴史をよく知っています。消費型推し活の最高峰に近いタイプです。", **{"zh-CN": "新内容立刻看，旧视频补完，在粉丝社区补信息，对本命历史了如指掌。接近消费型追星的极致。", "zh-TW": "新內容立刻看，舊影片補完，在粉絲社群補資訊，對本命歷史瞭如指掌。接近消費型追星的極致。"}, vi="Nội dung mới xem ngay, video cũ binge, lấp khoảng trống từ cộng đồng fan, hiểu lịch sử bias rất rõ. Gần như đỉnh cao kiểu tiêu thụ.", id="Konten baru langsung dicek, video lama dimaraton, info yang terlewat dilengkapi dari komunitas, sejarah bias sangat dikuasai. Mendekati puncak tipe konsumsi."),
        fandomType=M(ko=_ko_r(2, "fandomType"), en="Content Binge Type 📱", ja="コンテンツ一気見型 📱", **{"zh-CN": "内容补完型 📱", "zh-TW": "內容補完型 📱"}, vi="Kiểu binge content 📱", id="Tipe binge content 📱"),
        fandomKeywords=M(ko=_ko_r(2, "fandomKeywords"), en="Binge · Archive · Content · History", ja="一気見・アーカイブ・コンテンツ・ヒストリー", **{"zh-CN": "补完·存档·内容·历史", "zh-TW": "補完·存檔·內容·歷史"}, vi="Binge · Lưu trữ · Nội dung · Lịch sử", id="Binge · Arsip · Konten · Sejarah"),
        fandomStyle=M(ko=_ko_r(2, "fandomStyle"), en="Video binge · Clip saving · Fan community activity · Fancam collecting", ja="動画一気見・クリップ保存・ファンコミュニティ活動・直カメ収集", **{"zh-CN": "视频补完·片段保存·粉丝社区活动·直拍收集", "zh-TW": "影片補完·片段保存·粉絲社群活動·直拍收集"}, vi="Binge video · Lưu clip · Hoạt động cộng đồng fan · Sưu tầm fancam", id="Maraton video · Simpan clip · Aktivitas komunitas fan · Koleksi fancam"),
        strength=M(ko=_ko_r(2, "strength"), en="Knows so much about your bias that recruitment is most persuasive", ja="推しについて知ることが多く、入坑勧誘が最も説得力を持つ", **{"zh-CN": "对本命了解极多，安利时最有说服力", "zh-TW": "對本命了解極多，安利時最有說服力"}, vi="Biết bias quá nhiều nên tuyển fan rất thuyết phục", id="Tahu bias sangat banyak sehingga rekrutmen paling meyakinkan"),
        characteristic=M(ko=_ko_r(2, "characteristic"), en="Happier when bias releases more content. Video alerts always on", ja="推しがコンテンツを多く出すほど幸せ。動画通知は常にオン", **{"zh-CN": "本命内容越多越幸福，视频通知永远开着", "zh-TW": "本命內容越多越幸福，影片通知永遠開著"}, vi="Càng nhiều nội dung bias đăng càng vui. Thông báo video luôn bật", id="Makin banyak konten bias, makin bahagia. Notifikasi video selalu nyala"),
        bestBiasType=M(ko=_ko_r(2, "bestBiasType"), en="Artists with active content output, vlogs, variety shows, and frequent SNS activity", ja="コンテンツ生産が活発で、Vlog・バラエティ・SNS活動が多いアーティスト", **{"zh-CN": "内容产出活跃、Vlog·综艺·SNS活动多的艺人", "zh-TW": "內容產出活躍、Vlog·綜藝·SNS活動多的藝人"}, vi="Nghệ sĩ sản xuất nội dung tích cực, nhiều vlog, variety và hoạt động SNS", id="Artis dengan output konten aktif, vlog, variety, dan aktivitas SNS sering"),
        oneLiner=M(ko=_ko_r(2, "oneLiner"), en="As long as you are here, your bias's content will not disappear", ja="あなたがいる限り、推しのコンテンツは消えない", **{"zh-CN": "只要你在，本命的内容就不会消失", "zh-TW": "只要你在，本命的內容就不會消失"}, vi="Chừng nào bạn còn ở đây, nội dung của bias sẽ không biến mất", id="Selama kamu ada, konten bias tidak akan hilang"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(2, "shareLine"), en="My fandom type: Content Binge 📱 They say I watched all bias videos... bingeing old content is totally me lol → What is your fandom type?", ja="私の推し活タイプ：コンテンツ一気見型 📱 推しの動画全部見たらしい…過去コンテンツ一気見、完全に私 ㅋㅋ → あなたはどんな推し活タイプ？", **{"zh-CN": "我的追星类型：内容补完型 📱 说本命视频全看过了…补旧内容完全是我哈哈 → 你是什么追星类型？", "zh-TW": "我的追星類型：內容補完型 📱 說本命影片全看過了…補舊內容完全是我哈哈 → 你是什麼追星類型？"}, vi="Kiểu fandom của tôi: Binge content 📱 Bảo là xem hết video bias… binge nội dung cũ đúng là mình haha → Bạn thuộc kiểu nào?", id="Tipe fandom-ku: Binge content 📱 Katanya udah nonton semua video bias… binge konten lama banget aku wkwk → Kamu tipe apa?"),
    ),
    r(
        "Type4", "🎤",
        title=M(ko=_ko_r(3, "title"), en="Enjoying Fan Activities, Fandom Activist Type", ja="ファン活動が楽しい、ファンダム活動家型", **{"zh-CN": "享受粉丝活动，粉圈活动家型", "zh-TW": "享受粉絲活動，粉圈活動家型"}, vi="Thích hoạt động fan, kiểu nhà hoạt động fandom", id="Menikmati aktivitas fan, tipe aktivis fandom"),
        shortDescription=M(ko=_ko_r(3, "shortDescription"), en="Your fandom draws energy not only from your bias but also from connecting with the same fandom.", ja="推しだけでなく、同じファンダムとのつながりからもエネルギーを得る推し活です。", **{"zh-CN": "你的追星不仅从本命获得能量，也从同好连接中获得能量。", "zh-TW": "你的追星不僅從本命獲得能量，也從同好連接中獲得能量。"}, vi="Fandom của bạn không chỉ lấy năng lượng từ bias mà còn từ kết nối với cùng fandom.", id="Fandom-mu dapat energi bukan hanya dari bias, tapi juga dari koneksi dengan fandom yang sama."),
        description=M(ko=_ko_r(3, "description"), en="You cheer together at concerts, talk with fans in communities, join streaming and music show votes, and celebrate your bias's results like your own. Fandom is more fun together than alone.", ja="コンサートで一緒に叫び、コミュニティでファンと交流し、ストリーミング・音番投票に参加し、推しの成績を自分のことのように喜ぶタイプです。一人で好きより、一緒に好きの方が楽しい。", **{"zh-CN": "在演唱会一起呐喊，在社区和粉丝交流，参与刷流和打榜，把本命成绩当自己事一样开心。比起独自喜欢，一起喜欢更快乐。", "zh-TW": "在演唱會一起吶喊，在社群和粉絲交流，參與刷流和打榜，把本命成績當自己事一樣開心。比起獨自喜歡，一起喜歡更快樂。"}, vi="Hò hét cùng nhau ở concert, trò chuyện với fan trong cộng đồng, tham gia streaming và vote show nhạc, vui thành tích bias như của mình. Cùng thích vui hơn một mình.", id="Bersorak di konser, ngobrol di komunitas, ikut streaming dan vote music show, girang atas hasil bias seperti milik sendiri. Fandom lebih seru bareng."),
        fandomType=M(ko=_ko_r(3, "fandomType"), en="Fandom Activist Type 🎤", ja="ファンダム活動家型 🎤", **{"zh-CN": "粉圈活动家型 🎤", "zh-TW": "粉圈活動家型 🎤"}, vi="Kiểu nhà hoạt động fandom 🎤", id="Tipe aktivis fandom 🎤"),
        fandomKeywords=M(ko=_ko_r(3, "fandomKeywords"), en="Fandom · Support · Sharing · Solidarity", ja="ファンダム・応援・共有・連帯", **{"zh-CN": "粉圈·应援·分享·团结", "zh-TW": "粉圈·應援·分享·團結"}, vi="Fandom · Cổ vũ · Chia sẻ · Đoàn kết", id="Fandom · Dukungan · Berbagi · Solidaritas"),
        fandomStyle=M(ko=_ko_r(3, "fandomStyle"), en="Concerts · Music show votes · Streaming · Fan community activity · Communication", ja="コンサート・音番投票・ストリーミング・ファンコミュニティ活動・交流", **{"zh-CN": "演唱会·打榜投票·刷流·粉丝社区活动·交流", "zh-TW": "演唱會·打榜投票·刷流·粉絲社群活動·交流"}, vi="Concert · Vote show nhạc · Streaming · Hoạt động cộng đồng fan · Giao lưu", id="Konser · Vote music show · Streaming · Aktivitas komunitas fan · Komunikasi"),
        strength=M(ko=_ko_r(3, "strength"), en="Brings positive energy to the fandom and knows the joy of fandom together", ja="ファンダムに前向きなエネルギーを与える存在。一緒に推し活する楽しさを知っている", **{"zh-CN": "为粉圈注入正向能量，懂得一起追星的快乐", "zh-TW": "為粉圈注入正向能量，懂得一起追星的快樂"}, vi="Mang năng lượng tích cực cho fandom và hiểu niềm vui khi cùng đu", id="Memberi energi positif ke fandom dan tahu keseruan fandom bareng"),
        characteristic=M(ko=_ko_r(3, "characteristic"), en="Fan love grows when bias performs well. Already owns a light stick", ja="推しの成績が良いほどファン心が強くなる。応援棒はもう持っている", **{"zh-CN": "本命成绩越好粉丝心越强，应援棒已经有了", "zh-TW": "本命成績越好粉絲心越強，應援棒已經有了"}, vi="Bias thành tích tốt thì tình fan càng mạnh. Đã có lightstick", id="Fan love makin kuat saat hasil bias bagus. Lightstick sudah dimiliki"),
        bestBiasType=M(ko=_ko_r(3, "bestBiasType"), en="Artists with active fan communication and healthy fandom culture", ja="ファンとの交流が活発で、ファンダム文化が健全なアーティスト", **{"zh-CN": "与粉丝交流活跃、粉圈文化健康的艺人", "zh-TW": "與粉絲交流活躍、粉圈文化健康的藝人"}, vi="Nghệ sĩ giao tiếp fan tích cực, văn hóa fandom lành mạnh", id="Artis dengan komunikasi fan aktif dan budaya fandom sehat"),
        oneLiner=M(ko=_ko_r(3, "oneLiner"), en="You know fandom is more fun together than alone", ja="推し活は一人より一緒の方が楽しいことを、あなたは知っている", **{"zh-CN": "你知道追星比起独自，一起更快乐", "zh-TW": "你知道追星比起獨自，一起更快樂"}, vi="Bạn biết fandom vui hơn khi cùng nhau hơn là một mình", id="Kamu tahu fandom lebih seru bareng daripada sendiri"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(3, "shareLine"), en="My fandom type: Fandom Activist 🎤 They say fandom together is the most fun... already voting and streaming → Same here lol, what about you?", ja="私の推し活タイプ：ファンダム活動家型 🎤 一緒に推し活するのが一番楽しいタイプ…音番投票・スミンはもうやってる → 私もそう ㅋㅋ あなたは？", **{"zh-CN": "我的追星类型：粉圈活动家型 🎤 说一起追星最开心…打榜刷流已经在做了 → 我也是哈哈 你呢？", "zh-TW": "我的追星類型：粉圈活動家型 🎤 說一起追星最開心…打榜刷流已經在做了 → 我也是哈哈 你呢？"}, vi="Kiểu fandom của tôi: Nhà hoạt động fandom 🎤 Bảo là cùng đu vui nhất… vote và streaming rồi → Mình cũng vậy haha, còn bạn?", id="Tipe fandom-ku: Aktivis fandom 🎤 Katanya fandom bareng paling seru… vote & streaming udah jalan → Aku juga wkwk, kamu?"),
    ),
    r(
        "Type5", "⭐",
        title=M(ko=_ko_r(4, "title"), en="Bias at the Center of Life, Hardcore Fan Type", ja="推しが日常の中心、ハードコアオタク型", **{"zh-CN": "本命是生活中心，硬核粉丝型", "zh-TW": "本命是生活中心，硬核粉絲型"}, vi="Bias ở trung tâm cuộc sống, kiểu fan hardcore", id="Bias di pusat hidup, tipe fan hardcore"),
        shortDescription=M(ko=_ko_r(4, "shortDescription"), en="Your schedule, spending, and emotions are tied to your bias. Fandom is not a hobby but a way of life.", ja="あなたの予定・支出・感情は推しとつながっています。推し活は趣味ではなく、生き方です。", **{"zh-CN": "你的日程、支出、情绪都与本命相连。追星不是爱好，而是生活方式。", "zh-TW": "你的日程、支出、情緒都與本命相連。追星不是愛好，而是生活方式。"}, vi="Lịch trình, chi tiêu và cảm xúc của bạn gắn với bias. Fandom không phải sở thích mà là cách sống.", id="Jadwal, pengeluaran, dan emosimu terhubung dengan bias. Fandom bukan hobi, tapi gaya hidup."),
        description=M(ko=_ko_r(4, "description"), en="You clear schedules for ticketing, set budgets for limited merch, and rewatch old content on quiet days. People around you already know how much you love that artist.", ja="チケット取りのために予定を空け、限定グッズのために予算を確保し、推し活がない日は過去コンテンツを見返します。周りの人はもう知っています。あなたがそのアーティストをとても好きだということを。", **{"zh-CN": "为抢票空出日程，为限定周边单独预算，没有本命活动的日子就重看旧内容。身边的人早就知道你对那位艺人有多喜欢。", "zh-TW": "為搶票空出日程，為限定周邊單獨預算，沒有本命活動的日子就重看舊內容。身邊的人早就知道你對那位藝人有多喜歡。"}, vi="Xóa lịch để săn vé, dành ngân sách cho merch giới hạn, ngày không có hoạt động bias thì xem lại nội dung cũ. Mọi người quanh bạn đã biết bạn thích nghệ sĩ đó đến mức nào.", id="Kosongkan jadwal untuk ticketing, siapkan budget untuk merch limited, hari tanpa aktivitas bias nonton ulang konten lama. Orang sekitar sudah tahu seberapa besar kamu suka artis itu."),
        fandomType=M(ko=_ko_r(4, "fandomType"), en="Hardcore Fan Type ⭐", ja="ハードコアオタク型 ⭐", **{"zh-CN": "硬核粉丝型 ⭐", "zh-TW": "硬核粉絲型 ⭐"}, vi="Kiểu fan hardcore ⭐", id="Tipe fan hardcore ⭐"),
        fandomKeywords=M(ko=_ko_r(4, "fandomKeywords"), en="Immersion · Devotion · Merch · Live · Everything", ja="没入・献身・グッズ・現場・すべて", **{"zh-CN": "沉浸·奉献·周边·现场·一切", "zh-TW": "沉浸·奉獻·周邊·現場·一切"}, vi="Đắm chìm · Tận tâm · Merch · Live · Mọi thứ", id="Imersi · Dedikasi · Merch · Live · Segalanya"),
        fandomStyle=M(ko=_ko_r(4, "fandomStyle"), en="Concert live · Full merch sets · Photocard collecting · Fancams · Streaming · Overseas trips included", ja="コンサート現場・グッズフルセット・フォトカード収集・直カメ・スミン・海外遠征含む", **{"zh-CN": "演唱会现场·周边全套·小卡收集·直拍·刷流·含海外远征", "zh-TW": "演唱會現場·周邊全套·小卡收集·直拍·刷流·含海外遠征"}, vi="Concert live · Full set merch · Sưu tầm photocard · Fancam · Streaming · Cả chuyến nước ngoài", id="Konser live · Full set merch · Koleksi photocard · Fancam · Streaming · Termasuk trip luar negeri"),
        strength=M(ko=_ko_r(4, "strength"), en="Knows the most about your bias and supports with the most passion", ja="推しについて最も多く知り、最も情熱的に応援する", **{"zh-CN": "对本命了解最多，支持也最热情", "zh-TW": "對本命了解最多，支持也最熱情"}, vi="Biết bias nhiều nhất và ủng hộ nhiệt tình nhất", id="Paling banyak tahu bias dan paling antusias mendukung"),
        characteristic=M(ko=_ko_r(4, "characteristic"), en="Deep bonds with fandom friends. Memories with bias become life's best moments", ja="推し活の友達との絆が深い。推し関連の記憶が人生の良い思い出になる", **{"zh-CN": "与追星朋友的羁绊很深，和本命相关的记忆是人生美好回忆", "zh-TW": "與追星朋友的羈絆很深，和本命相關的記憶是人生美好回憶"}, vi="Gắn bó sâu với bạn fandom. Kỷ niệm liên quan bias thành khoảnh khắc đẹp của đời", id="Ikatan dengan teman fandom dalam. Memori terkait bias jadi kenangan indah hidup"),
        bestBiasType=M(ko=_ko_r(4, "bestBiasType"), en="Artists with world tours, diverse content, steady activity, and fan communication", ja="ワールドツアー・多様なコンテンツ・継続的な活動・ファンとの交流があるアーティスト", **{"zh-CN": "有世界巡演、多样内容、持续活动、与粉丝交流的艺人", "zh-TW": "有世界巡演、多樣內容、持續活動、與粉絲交流的藝人"}, vi="Nghệ sĩ có world tour, nội dung đa dạng, hoạt động đều và giao tiếp fan", id="Artis dengan world tour, konten beragam, aktivitas konsisten, dan komunikasi fan"),
        oneLiner=M(ko=_ko_r(4, "oneLiner"), en="Your fandom is sincere. And that sincerity clearly reaches your bias too", ja="あなたの推し活は本気です。そしてその本気は推しにも確実に届いています", **{"zh-CN": "你的追星是真心，而这份真心也一定能传达到本命那里", "zh-TW": "你的追星是真心，而這份真心也一定能傳達到本命那裡"}, vi="Fandom của bạn là chân thành. Và sự chân thành đó chắc chắn đến được với bias", id="Fandom-mu tulus. Dan ketulusan itu jelas sampai ke bias juga"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(4, "shareLine"), en="My fandom type: Hardcore Fan ⭐ They say fandom is my lifestyle... merch room, midnight streaming, totally me lol → What type are you?", ja="私の推し活タイプ：ハードコアオタク型 ⭐ 推し活が生き方らしい…グッズ部屋あり、真夜中スミン基本、正解 ㅋㅋ → あなたはどんなタイプ？", **{"zh-CN": "我的追星类型：硬核粉丝型 ⭐ 说追星是生活方式…有周边房、零点刷流是基本，没错哈哈 → 你是什么类型？", "zh-TW": "我的追星類型：硬核粉絲型 ⭐ 說追星是生活方式…有周邊房、零點刷流是基本，沒錯哈哈 → 你是什麼類型？"}, vi="Kiểu fandom của tôi: Fan hardcore ⭐ Bảo fandom là lối sống… có phòng merch, streaming nửa đêm là cơ bản, đúng rồi haha → Bạn thuộc kiểu nào?", id="Tipe fandom-ku: Fan hardcore ⭐ Katanya fandom itu gaya hidup… punya ruang merch, streaming tengah malam standar, bener wkwk → Kamu tipe apa?"),
    ),
    r(
        "Type6", "🌟",
        title=M(ko=_ko_r(5, "title"), en="Fandom Is Life, Fandom-Life Master Type", ja="推し活が人生、推し活仕事一致マスター型", **{"zh-CN": "追星即人生，追星生活一体大师型", "zh-TW": "追星即人生，追星生活一體大師型"}, vi="Fandom là cuộc đời, kiểu bậc thầy fandom-sống", id="Fandom adalah hidup, tipe master fandom-hidup"),
        shortDescription=M(ko=_ko_r(5, "shortDescription"), en="Life divided before and after meeting your bias. You have already done everything and still do it all.", ja="推しに出会う前と後で人生が分かれます。もう全部やって、今もやっています。", **{"zh-CN": "遇见本命前后人生一分为二。已经什么都做过，现在也在做。", "zh-TW": "遇見本命前後人生一分為二。已經什麼都做過，現在也在做。"}, vi="Cuộc đời chia trước và sau khi gặp bias. Đã làm hết mọi thứ và vẫn đang làm.", id="Hidup terbagi sebelum dan sesudah kenal bias. Sudah melakukan semuanya dan masih melakukannya."),
        description=M(ko=_ko_r(5, "description"), en="Midnight streaming is basic. You may have a merch room or a corner filled with goods, a strong presence in fan communities, and multiple successful recruitment stories. Loving your bias has become part of your identity.", ja="真夜中スミンは基本。グッズ部屋があるか、部屋の一角がグッズで埋まっていて、ファンコミュニティで存在感があり、入坑勧誘成功例が複数あるタイプです。推しを好きなことが、自分のアイデンティティの一つになりました。", **{"zh-CN": "零点刷流是基本。可能有周边房或房间一角堆满周边，在粉丝社区很有存在感，安利成功案例不止一个。喜欢本命已成为自我认同的一部分。", "zh-TW": "零點刷流是基本。可能有周邊房或房間一角堆滿周邊，在粉絲社群很有存在感，安利成功案例不止一個。喜歡本命已成為自我認同的一部分。"}, vi="Streaming nửa đêm là cơ bản. Có thể có phòng merch hoặc góc phòng đầy đồ, hiện diện mạnh trong cộng đồng fan, nhiều lần tuyển fan thành công. Thích bias đã trở thành một phần bản sắc.", id="Streaming tengah malam sudah standar. Mungkin punya ruang merch atau sudut kamar penuh goods, presence kuat di komunitas fan, banyak sukses rekrut fan. Suka bias jadi bagian identitas."),
        fandomType=M(ko=_ko_r(5, "fandomType"), en="Fandom-Life Master Type 🌟", ja="推し活仕事一致マスター型 🌟", **{"zh-CN": "追星生活一体大师型 🌟", "zh-TW": "追星生活一體大師型 🌟"}, vi="Kiểu bậc thầy fandom-sống 🌟", id="Tipe master fandom-hidup 🌟"),
        fandomKeywords=M(ko=_ko_r(5, "fandomKeywords"), en="Identity · Devotion · Expert · Archive · Community", ja="アイデンティティ・献身・専門家・アーカイブ・共同体", **{"zh-CN": "身份认同·奉献·专家·存档·共同体", "zh-TW": "身份認同·奉獻·專家·存檔·共同體"}, vi="Bản sắc · Tận tâm · Chuyên gia · Lưu trữ · Cộng đồng", id="Identitas · Dedikasi · Expert · Arsip · Komunitas"),
        fandomStyle=M(ko=_ko_r(5, "fandomStyle"), en="Everything: streaming, merch, concerts, overseas trips, recruitment, fan creations, and more", ja="すべて。スミン・グッズ・コンサート・海外遠征・入坑勧誘・ファン創作物など", **{"zh-CN": "一切：刷流·周边·演唱会·海外远征·安利·粉丝创作等", "zh-TW": "一切：刷流·周邊·演唱會·海外遠征·安利·粉絲創作等"}, vi="Mọi thứ: streaming, merch, concert, chuyến nước ngoài, tuyển fan, sáng tạo fan…", id="Segalanya: streaming, merch, konser, trip luar negeri, rekrutmen, karya fan, dll."),
        strength=M(ko=_ko_r(5, "strength"), en="Knows and supports your bias better than anyone. A core member of the fandom", ja="推しについて誰よりもよく知り、誰よりも応援する。ファンダムの中核メンバー", **{"zh-CN": "比任何人都更了解、更支持本命，是粉圈核心成员", "zh-TW": "比任何人都更了解、更支持本命，是粉圈核心成員"}, vi="Biết và ủng hộ bias hơn ai hết. Thành viên cốt lõi của fandom", id="Paling tahu dan mendukung bias. Anggota inti fandom"),
        characteristic=M(ko=_ko_r(5, "characteristic"), en="Connections made through fandom become real friends. You know fandom enriches life", ja="推し活を通じて作った縁が本当の友達になる。推し活が人生を豊かにすることを知っている", **{"zh-CN": "通过追星结识的缘分变成真朋友，知道追星让生活更丰富", "zh-TW": "透過追星結識的緣分變成真朋友，知道追星讓生活更豐富"}, vi="Mối quan hệ qua fandom thành bạn thật. Biết fandom làm cuộc sống phong phú hơn", id="Koneksi lewat fandom jadi teman sejati. Tahu fandom memperkaya hidup"),
        bestBiasType=M(ko=_ko_r(5, "bestBiasType"), en="Artists who have been active long and grow with fans through honest, sincere communication", ja="長く活動し、ファンと一緒に成長する。率直で真摯なコミュニケーションをするアーティスト", **{"zh-CN": "长期活动、与粉丝共同成长、坦率真诚沟通的艺人", "zh-TW": "長期活動、與粉絲共同成長、坦率真誠溝通的藝人"}, vi="Nghệ sĩ hoạt động lâu, cùng fan trưởng thành, giao tiếp thẳng thắn và chân thành", id="Artis yang aktif lama, tumbuh bersama fans, komunikasi jujur dan tulus"),
        oneLiner=M(ko=_ko_r(5, "oneLiner"), en="The way you love is the hottest and most beautiful fandom there is", ja="あなたが好きな方法が、最も熱く、最も美しい推し活です", **{"zh-CN": "你喜欢的方式，就是最热烈、最美的追星", "zh-TW": "你喜歡的方式，就是最熱烈、最美的追星"}, vi="Cách bạn thích là fandom nóng bỏng và đẹp nhất", id="Cara kamu suka adalah fandom paling hangat dan indah"),
        certificationPhrase=M(
            ko=_ko_r(5, "certificationPhrase"),
            en="Fandom-Life Master achieved 🌟 My fandom is sincerity itself",
            ja="推し活仕事一致マスター達成 🌟 私の推し活は本気そのもの",
            **{"zh-CN": "追星生活一体大师达成 🌟 我的追星就是真心本身", "zh-TW": "追星生活一體大師達成 🌟 我的追星就是真心本身"},
            vi="Đạt bậc thầy fandom-sống 🌟 Fandom của tôi chính là sự chân thành",
            id="Master fandom-hidup tercapai 🌟 Fandom-ku adalah ketulusan murni",
        ),
        shareLine=M(ko=_ko_r(5, "shareLine"), en="My fandom type: Fandom-Life Master 🌟 They say life divided before and after my bias... true lol → Same here lol, fandom friends try it", ja="私の推し活タイプ：推し活仕事一致マスター型 🌟 推しに出会う前後で人生が分かれるらしい…本当 ㅋㅋ → 私もそう ㅋㅋ ファン友達全員やってみて", **{"zh-CN": "我的追星类型：追星生活一体大师型 🌟 说遇见本命前后人生不同…确实哈哈 → 我也是哈哈 粉圈朋友都来测", "zh-TW": "我的追星類型：追星生活一體大師型 🌟 說遇見本命前後人生不同…確實哈哈 → 我也是哈哈 粉圈朋友都來測"}, vi="Kiểu fandom của tôi: Bậc thầy fandom-sống 🌟 Bảo cuộc đời chia trước/sau bias… đúng thật haha → Mình cũng vậy haha, bạn fandom thử đi", id="Tipe fandom-ku: Master fandom-hidup 🌟 Katanya hidup beda sebelum/sesudah bias… bener wkwk → Aku juga wkwk, teman fandom coba deh"),
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
        + "\n];\n\nexport const phase3FandomStyleResults: Phase3FandomStyleResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    data = load_data()
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3FandomStyleData.ts"
    body = build_ts(data)
    out.write_text(body, encoding="utf-8")
    line_count = body.count("\n") + (0 if body.endswith("\n") else 1)
    print(f"Wrote {out}")
    print(f"Bytes: {len(body.encode('utf-8'))}")
    print(f"Lines: {line_count}")


if __name__ == "__main__":
    main()
