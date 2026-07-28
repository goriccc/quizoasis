"""Translation data for phase3 late night type test (imported by build script)."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")


def M(**kwargs: str) -> dict[str, str]:
    return {loc: kwargs[loc] for loc in LOCALES}


def q(question: dict[str, str], options: list[tuple[dict[str, str], int]]) -> dict:
    return {"question": question, "options": options}


def r(type_: str, emoji: str, **fields: dict[str, str]) -> dict:
    return {"type": type_, "emoji": emoji, **fields}


EMPTY = M(ko="", en="", ja="", **{"zh-CN": "", "zh-TW": ""}, vi="", id="")


_gen_path = Path(__file__).resolve().parent / "gen_phase3_late_night_type_data.py"
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
        "lateNightKeywords": "keywords",
        "certificationPhrase": "certification",
        "shareLine": "share",
    }
    k = key_map.get(field, field)
    return KO_RESULTS[type_idx][k]

QUESTIONS = [
    q(
        M(
            ko=_ko_q(0),
            en="You're in bed but can't fall asleep. What do you do?",
            ja="布団に入ったのに眠れない。あなたは？",
            **{"zh-CN": "躺下了却睡不着。你会？", "zh-TW": "躺下了卻睡不著。你會？"},
            vi="Nằm xuống giường mà không ngủ được. Bạn sẽ?",
            id="Sudah tiduran tapi tidak bisa tidur. Kamu?",
        ),
        [
            (M(ko=_ko_o(0, 0), en="Just close my eyes and get lost in thoughts. I don't really do anything special", ja="目を閉じてこのあれ考えに浸る。特に何もしない", **{"zh-CN": "就闭着眼胡思乱想，不会特别做什么", "zh-TW": "就閉著眼胡思亂想，不會特別做什麼"}, vi="Nhắm mắt và chìm vào đủ thứ suy nghĩ. Không làm gì đặc biệt", id="Tutup mata dan tenggelam dalam pikiran. Tidak melakukan apa-apa khusus"), 0),
            (M(ko=_ko_o(0, 1), en="Get up and do something. Lying there blankly feels more frustrating", ja="起き上がって何かする。ボーッと横になる方が息苦しい", **{"zh-CN": "干脆起来做点什么，干躺着更难受", "zh-TW": "乾脆起來做點什麼，乾躺著更難受"}, vi="Bật dậy làm gì đó. Nằm trống rỗng còn bức hơn", id="Bangun dan melakukan sesuatu. Rebahan kosong lebih frustrasi"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(1),
            en="When emotions rise at dawn, what do you do?",
            ja="夜明け前に感性が高まったとき、あなたは？",
            **{"zh-CN": "凌晨情绪上来时，你会？", "zh-TW": "凌晨情緒上來時，你會？"},
            vi="Khi cảm xúc dâng lên lúc rạng sáng, bạn sẽ?",
            id="Saat emosi naik di dini hari, kamu?",
        ),
        [
            (M(ko=_ko_o(1, 0), en="Play a playlist and just stay in that mood", ja="プレイリストを流して、その感性の中にいる", **{"zh-CN": "打开歌单，就待在那个氛围里", "zh-TW": "打開歌單，就待在那個氛圍裡"}, vi="Bật playlist và ở trong cảm xúc đó", id="Putar playlist dan tinggal di mood itu"), 0),
            (M(ko=_ko_o(1, 1), en="Write it out in a diary or notes. I need words to sort things out", ja="日記やメモに書き出す。言葉にしないと整理できないタイプ", **{"zh-CN": "写进日记或备忘录，必须写下来才能理清", "zh-TW": "寫進日記或備忘錄，必須寫下來才能理清"}, vi="Viết ra nhật ký hoặc ghi chú. Phải viết mới sắp xếp được", id="Tulis di diary atau memo. Harus ditulis baru terasa rapi"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(2),
            en="Why do you pick up your phone at dawn?",
            ja="夜明け前にスマホを手に取る理由は？",
            **{"zh-CN": "凌晨为什么会拿起手机？", "zh-TW": "凌晨為什麼會拿起手機？"},
            vi="Tại sao bạn cầm điện thoại lúc rạng sáng?",
            id="Kenapa kamu pegang HP di dini hari?",
        ),
        [
            (M(ko=_ko_o(2, 0), en="To watch or listen to something—music, videos, reels, shorts", ja="音楽・動画・リール・ショートなど何かを見たり聞いたりするため", **{"zh-CN": "为了看或听点什么——音乐、视频、短视频", "zh-TW": "為了看或聽點什麼——音樂、影片、短影片"}, vi="Để xem hoặc nghe gì đó—nhạc, video, reel, short", id="Untuk nonton atau dengar sesuatu—musik, video, reel, short"), 0),
            (M(ko=_ko_o(2, 1), en="To record, search, or work on something", ja="記録・検索・作業のため", **{"zh-CN": "为了记录、搜索或处理工作", "zh-TW": "為了記錄、搜尋或處理工作"}, vi="Để ghi chép, tìm kiếm hoặc làm việc gì đó", id="Untuk catat, cari, atau mengerjakan sesuatu"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(3),
            en="A good idea pops up at dawn. What do you do?",
            ja="夜明け前にいいアイデアや考えが浮かんだ。あなたは？",
            **{"zh-CN": "凌晨突然想到好主意。你会？", "zh-TW": "凌晨突然想到好主意。你會？"},
            vi="Một ý tưởng hay nảy ra lúc rạng sáng. Bạn sẽ?",
            id="Ide bagus muncul di dini hari. Kamu?",
        ),
        [
            (M(ko=_ko_o(3, 0), en="Think 'nice idea' and let it drift away. I rarely write it down", ja="「いい考えだ」と思って流す。記録まではあまりしない", **{"zh-CN": "想想「好主意」就让它飘走，很少记下来", "zh-TW": "想想「好主意」就讓它飄走，很少記下來"}, vi="Nghĩ 'ý hay' rồi để trôi đi. Hiếm khi ghi lại", id="Bilang 'ide bagus' lalu biarkan lewat. Jarang dicatat"), 0),
            (M(ko=_ko_o(3, 1), en="Open notes right away. If I don't write it, I'll forget", ja="すぐメモ帳やノートを開く。書かないと忘れるから", **{"zh-CN": "马上打开备忘录，不记就会忘", "zh-TW": "馬上打開備忘錄，不記就會忘"}, vi="Mở ghi chú ngay. Không viết là quên", id="Langsung buka catatan. Kalau tidak ditulis, lupa"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(4),
            en="What state are you usually in at 2 AM?",
            ja="午前2時頃、あなたは通常どんな状態？",
            **{"zh-CN": "凌晨2点你通常是什么状态？", "zh-TW": "凌晨2點你通常是什麼狀態？"},
            vi="Lúc 2 giờ sáng bạn thường ở trạng thái nào?",
            id="Jam 2 pagi kamu biasanya dalam kondisi apa?",
        ),
        [
            (M(ko=_ko_o(4, 0), en="Lost in feelings or passively watching/listening to something", ja="感性に浸ったり、何かを見たり聞いたりしている。受動的に夜を過ごす", **{"zh-CN": "沉浸在情绪里，或被动地看/听东西", "zh-TW": "沉浸在情緒裡，或被動地看/聽東西"}, vi="Chìm trong cảm xúc hoặc thụ động xem/nghe gì đó", id="Tenggelam dalam perasaan atau pasif nonton/dengar sesuatu"), 0),
            (M(ko=_ko_o(4, 1), en="Actively doing something. I actually work better now than during the day", ja="何かをしている。むしろ昼より今の方がはかどる", **{"zh-CN": "在做点什么，反而比白天更进入状态", "zh-TW": "在做點什麼，反而比白天更進入狀態"}, vi="Đang làm gì đó. Thực ra lúc này hiệu quả hơn ban ngày", id="Sedang melakukan sesuatu. Malah lebih produktif daripada siang"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(5),
            en="How do you set up your environment at dawn?",
            ja="夜明け前、周りの環境はどう整える？",
            **{"zh-CN": "凌晨你会怎么布置环境？", "zh-TW": "凌晨你會怎麼布置環境？"},
            vi="Bạn tạo không gian thế nào lúc rạng sáng?",
            id="Bagaimana kamu atur lingkungan di dini hari?",
        ),
        [
            (M(ko=_ko_o(5, 0), en="Turn off lights or dim them. Atmosphere matters—darkness brings the mood", ja="明かりを消すか暗くする。雰囲気が大事。暗い方が感性が出る", **{"zh-CN": "关灯或调暗，氛围很重要，暗才有感觉", "zh-TW": "關燈或調暗，氛圍很重要，暗才有感覺"}, vi="Tắt đèn hoặc hạ sáng. Không khí quan trọng—tối mới có mood", id="Matikan lampu atau redupkan. Suasana penting—gelap baru ada feel"), 0),
            (M(ko=_ko_o(5, 1), en="Turn on a desk lamp or stand light. I need to see what I'm doing", ja="作業灯やスタンドをつける。見るもの・やることがあるから", **{"zh-CN": "开台灯或落地灯，因为有东西要看要做", "zh-TW": "開檯燈或落地燈，因為有東西要看要做"}, vi="Bật đèn bàn hoặc đèn cây. Có thứ cần nhìn và làm", id="Nyalakan lampu meja atau stand. Ada yang perlu dilihat dan dikerjakan"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(6),
            en="When the past comes back at dawn, what do you do?",
            ja="夜明け前に過去が蘇るとき、あなたは？",
            **{"zh-CN": "凌晨想起过去时，你会？", "zh-TW": "凌晨想起過去時，你會？"},
            vi="Khi quá khứ ùa về lúc rạng sáng, bạn sẽ?",
            id="Saat masa lalu muncul di dini hari, kamu?",
        ),
        [
            (M(ko=_ko_o(6, 0), en="Stay inside that memory for a long time. It keeps coming back even if I try not to", ja="その記憶の中に長くいる。無理に押さえてもまた浮かぶ", **{"zh-CN": "在那段记忆里待很久，不想也会不断浮现", "zh-TW": "在那段記憶裡待很久，不想也會不斷浮現"}, vi="Ở trong ký ức đó rất lâu. Cố không nghĩ vẫn cứ hiện lên", id="Tinggal lama di memori itu. Meski dipaksa hilang tetap muncul"), 0),
            (M(ko=_ko_o(6, 1), en="Write it out or channel that energy into something else", ja="言葉に整理するか、そのエネルギーを別のことに注ぐ", **{"zh-CN": "写下来整理，或把能量转到别的事上", "zh-TW": "寫下來整理，或把能量轉到別的事上"}, vi="Viết ra sắp xếp hoặc chuyển năng lượng sang việc khác", id="Tulis dan rapikan, atau alihkan energi ke hal lain"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(7),
            en="When nobody is around at dawn, what do you do most often?",
            ja="夜明け前、誰もいないとき最もよくすることは？",
            **{"zh-CN": "凌晨没人在时，你最常做什么？", "zh-TW": "凌晨沒人在時，你最常做什麼？"},
            vi="Khi không ai ở bên lúc rạng sáng, bạn hay làm gì nhất?",
            id="Saat tidak ada orang di dini hari, kamu paling sering apa?",
        ),
        [
            (M(ko=_ko_o(7, 0), en="Listen to music, watch videos, scroll reels, binge dramas", ja="音楽・動画・リール・ドラマ一気見", **{"zh-CN": "听音乐、看视频、刷短视频、追剧", "zh-TW": "聽音樂、看影片、刷短影片、追劇"}, vi="Nghe nhạc, xem video, lướt reel, cày phim", id="Dengar musik, nonton video, scroll reel, marathon drama"), 0),
            (M(ko=_ko_o(7, 1), en="Write, study, work, organize, or create something", ja="執筆・勉強・作業・整理・何かを作る", **{"zh-CN": "写作、学习、工作、整理或创作", "zh-TW": "寫作、學習、工作、整理或創作"}, vi="Viết, học, làm việc, dọn dẹp hoặc tạo ra thứ gì đó", id="Menulis, belajar, kerja, merapikan, atau membuat sesuatu"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(8),
            en="Someone contacts you suddenly at dawn. What do you do?",
            ja="夜明け前に突然誰かから連絡が来た。あなたは？",
            **{"zh-CN": "凌晨突然有人联系你。你会？", "zh-TW": "凌晨突然有人聯繫你。你會？"},
            vi="Ai đó liên lạc đột ngột lúc rạng sáng. Bạn sẽ?",
            id="Tiba-tiba ada yang chat di dini hari. Kamu?",
        ),
        [
            (M(ko=_ko_o(8, 0), en="Glad about it. Feels like solidarity with another night owl. I talk for a while", ja="嬉しい。夜更かし仲間がいる感じ。しばらく話す", **{"zh-CN": "挺开心，像找到同类，会聊很久", "zh-TW": "挺開心，像找到同類，會聊很久"}, vi="Vui. Cảm giác có đồng minh thức khuya. Nói chuyện khá lâu", id="Senang. Rasanya ada sesama night owl. Ngobrol cukup lama"), 0),
            (M(ko=_ko_o(8, 1), en="Check briefly and go back to what I was doing. Don't want to break the flow", ja="ちょっと確認してまた元のことに戻る。流れを壊したくない", **{"zh-CN": "看一眼就回到原来的事，不想打断状态", "zh-TW": "看一眼就回到原來的事，不想打斷狀態"}, vi="Xem nhanh rồi quay lại việc cũ. Không muốn phá flow", id="Cek sebentar lalu kembali ke yang tadi. Tidak mau ganggu flow"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(9),
            en="How would you describe dawn time in one phrase?",
            ja="夜明け前の時間を一言で表すと？",
            **{"zh-CN": "用一句话形容凌晨时间？", "zh-TW": "用一句話形容凌晨時間？"},
            vi="Mô tả thời gian rạng sáng bằng một câu?",
            id="Deskripsikan waktu dini hari dalam satu kalimat?",
        ),
        [
            (M(ko=_ko_o(9, 0), en="When feelings are sharpest. Things I don't feel in daylight rise up", ja="感性が最もはっきりする時間。昼には感じないものが浮かぶ", **{"zh-CN": "感性最清晰的时间，白天感受不到的东西会浮现", "zh-TW": "感性最清晰的時間，白天感受不到的东西會浮現"}, vi="Lúc cảm xúc sắc nét nhất. Những thứ ban ngày không thấy sẽ nổi lên", id="Saat perasaan paling tajam. Hal yang siang tidak terasa muncul"), 0),
            (M(ko=_ko_o(9, 1), en="Peak focus time. I can give myself fully without distractions", ja="集中が最も効く時間。邪魔なく自分に向き合える", **{"zh-CN": "专注最好的时间，没有打扰，完全属于自己", "zh-TW": "專注最好的時間，沒有打擾，完全屬於自己"}, vi="Thời gian tập trung tốt nhất. Không bị làm phiền, hoàn toàn là của mình", id="Waktu fokus terbaik. Tanpa gangguan, sepenuhnya untuk diri sendiri"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(10),
            en="It's 1 AM and you have plans tomorrow morning. What do you do?",
            ja="明日の朝に予定があるのに午前1時。あなたは？",
            **{"zh-CN": "明天早上有事，现在凌晨1点。你会？", "zh-TW": "明天早上有事，現在凌晨1點。你會？"},
            vi="1 giờ sáng mà sáng mai có lịch. Bạn sẽ?",
            id="Jam 1 pagi padahal besok pagi ada jadwal. Kamu?",
        ),
        [
            (M(ko=_ko_o(10, 0), en="Know I should sleep but can't. Hard to shut down while the mood is alive", ja="寝るべきなのに眠れない。感性が生きているのに無理に切れない", **{"zh-CN": "知道该睡但睡不着，情绪还在很难强行关掉", "zh-TW": "知道該睡但睡不著，情緒還在很難強行關掉"}, vi="Biết nên ngủ nhưng không ngủ được. Mood còn sống khó tắt", id="Tahu harus tidur tapi tidak bisa. Mood masih hidup, sulit dimatikan"), 0),
            (M(ko=_ko_o(10, 1), en="Know I should sleep but can't stop. What I'm doing now is going too well", ja="寝るべきなのに止まれない。今やっていることがうまくいきすぎている", **{"zh-CN": "知道该睡但停不下来，现在做得太顺了", "zh-TW": "知道該睡但停不下來，現在做得太順了"}, vi="Biết nên ngủ nhưng không dừng được. Việc đang làm quá ổn", id="Tahu harus tidur tapi tidak bisa berhenti. Yang sedang dikerjakan terlalu lancar"), 1),
        ],
    ),
    q(
        M(
            ko=_ko_q(11),
            en="The deeper dawn gets, you…",
            ja="夜が深まるほど、あなたは？",
            **{"zh-CN": "夜越深，你会？", "zh-TW": "夜越深，你會？"},
            vi="Đêm càng sâu, bạn…",
            id="Semakin larut malam, kamu…",
        ),
        [
            (M(ko=_ko_o(11, 0), en="Get more emotional. 4 AM feels more intense than 1 AM", ja="より感性的になる。午前4時は午前1時より感性が濃い", **{"zh-CN": "越来越感性，凌晨4点比1点更有感觉", "zh-TW": "越來越感性，凌晨4點比1點更有感覺"}, vi="Càng cảm xúc hơn. 4 giờ sáng đậm đà hơn 1 giờ sáng", id="Makin emosional. Jam 4 pagi lebih intens daripada jam 1"), 0),
            (M(ko=_ko_o(11, 1), en="Get more awake. The quieter the world, the clearer I feel", ja="より覚醒する。世界が静かになるほど逆に鮮明になる", **{"zh-CN": "越来越清醒，世界越安静反而越清晰", "zh-TW": "越來越清醒，世界越安靜反而越清晰"}, vi="Càng tỉnh táo hơn. Thế giới càng yên lặng càng rõ ràng", id="Makin melek. Semakin sunyi dunia, semakin jernih rasanya"), 1),
        ],
    ),
]

RESULTS = [
    r(
        "Type1", "🌑",
        title=M(ko=_ko_r(0, "title"), en="Thoughts Explode the Moment You Lie Down: Bed-Sinking Emotional Type", ja="布団に入ると思考が爆発する、夜更かし感性・沈み込み型", **{"zh-CN": "一躺下思绪就爆炸，凌晨沉眠感性型", "zh-TW": "一躺下思緒就爆炸，凌晨沉眠感性型"}, vi="Nằm xuống là suy nghĩ bùng nổ: Kiểu cảm xúc chìm trong chăn", id="Baru tiduran pikiran meledak: Tipe emosional tenggelam di kasur"),
        shortDescription=M(ko=_ko_r(0, "shortDescription"), en="Your dawn is when you feel the most while doing the least. Thoughts won't stop.", ja="あなたの夜明け前は、何もしないのに最も感じる時間。思考が止まらない。", **{"zh-CN": "你的凌晨是什么都不做却感受最多的时候，思绪停不下来。", "zh-TW": "你的凌晨是什麼都不做卻感受最多的時候，思緒停不下來。"}, vi="Rạng sáng của bạn là lúc cảm nhận nhiều nhất dù không làm gì. Suy nghĩ không dừng.", id="Dini harimu adalah waktu paling banyak merasa padahal tidak melakukan apa-apa. Pikiran tidak berhenti."),
        description=M(ko=_ko_r(0, "description"), en="You're not really doing anything, and you're not really sleeping either. Lying under the covers, today's events, old memories, someone's face, words you should have said—all surface one by one. There's no way to stop them. Letting them flow is the most natural thing.", ja="何かをしているわけでもなく、寝ているわけでもない。布団の中で今日あったこと、昔の記憶、誰かの顔、言えなかった言葉が次々浮かぶ。止めようがない。流れるままにするのが最も自然。", **{"zh-CN": "不是在做什么，也不是在睡觉。裹在被子里，今天的事、旧记忆、某张脸、没说出口的话一一浮现，拦不住，只能让它流过去。", "zh-TW": "不是在做什么，也不是在睡覺。裹在被子里，今天的事、舊記憶、某張臉、沒說出口的話一一浮現，攔不住，只能讓它流過去。"}, vi="Không làm gì, cũng không ngủ. Nằm trong chăn, chuyện hôm nay, ký ức cũ, gương mặt ai đó, lời chưa nói lần lượt nổi lên. Không cản được. Cứ để trôi là tự nhiên nhất.", id="Bukan sedang melakukan apa-apa, juga bukan tidur. Di balik selimut, kejadian hari ini, memori lama, wajah seseorang, kata yang belum terucap muncul satu per satu. Tidak bisa dihentikan. Membiarkannya mengalir paling natural."),
        lateNightType=M(ko=_ko_r(0, "lateNightType"), en="Bed-Sinking Emotional Type 🌑", ja="沈み込み感性型 🌑", **{"zh-CN": "沉眠感性型 🌑", "zh-TW": "沉眠感性型 🌑"}, vi="Kiểu cảm xúc chìm trong chăn 🌑", id="Tipe emosional tenggelam 🌑"),
        lateNightKeywords=M(ko=_ko_r(0, "lateNightKeywords"), en="Thoughts · Memories · Silence · Letting go · Under the covers", ja="思考・記憶・静けさ・流す・布団の中", **{"zh-CN": "思考·记忆·安静·放任·被窝里", "zh-TW": "思考·記憶·安靜·放任·被窩裡"}, vi="Suy nghĩ · Ký ức · Yên lặng · Buông · Trong chăn", id="Pikiran · Memori · Keheningan · Membiarkan lewat · Di balik selimut"),
        actualBehavior=M(ko=_ko_r(0, "actualBehavior"), en="Thinking · Recalling the past · Letting emotions flow · Can't sleep", ja="考える・過去を思い出す・感情を流す・眠れない", **{"zh-CN": "思考·回忆过去·放任情绪·睡不着", "zh-TW": "思考·回憶過去·放任情緒·睡不著"}, vi="Suy nghĩ · Nhớ quá khứ · Buông cảm xúc · Không ngủ được", id="Mikir · Mengingat masa lalu · Membiarkan emosi mengalir · Tidak bisa tidur"),
        strength=M(ko=_ko_r(0, "strength"), en="A deep inner emotional world. You feel and process a lot without anyone knowing", ja="深い感情の世界。誰も知らないうちに多くを感じ処理する", **{"zh-CN": "内心情感世界很深，悄悄感受和处理很多", "zh-TW": "內心情感世界很深，悄悄感受和處理很多"}, vi="Thế giới cảm xúc nội tâm sâu. Cảm và xử lý nhiều mà không ai biết", id="Dunia emosi batin yang dalam. Merasakan dan memproses banyak tanpa diketahui"),
        characteristic=M(ko=_ko_r(0, "characteristic"), en="Busy by day, then all emotions rush in at night. Dawn is emotional processing time", ja="昼は忙しく、夜に感情が一気に押し寄せる。夜明け前は感情処理タイム", **{"zh-CN": "白天忙碌，夜里情绪一次性涌上来，凌晨是情绪处理时间", "zh-TW": "白天忙碌，夜裡情緒一次性湧上來，凌晨是情緒處理時間"}, vi="Ban ngày bận, ban đêm cảm xúc ùa về. Rạng sáng là thời gian xử lý cảm xúc", id="Siang sibuk, malam emosi datang sekaligus. Dini hari waktu memproses emosi"),
        dawnBgm=M(ko=_ko_r(0, "dawnBgm"), en="Nothing, or white noise / rain sounds", ja="何も流さない、またはホワイトノイズ・雨音", **{"zh-CN": "什么都不放，或白噪音/雨声", "zh-TW": "什麼都不放，或白噪音/雨聲"}, vi="Không bật gì, hoặc white noise / tiếng mưa", id="Tidak memutar apa-apa, atau white noise / suara hujan"),
        whatTheyNeed=M(ko=_ko_r(0, "whatTheyNeed"), en="A quiet dawn where thoughts aren't judged—just allowed to pass", ja="思考を裁かず、ただ流せる静かな夜明け前", **{"zh-CN": "不被评判、可以任由思绪流过的安静凌晨", "zh-TW": "不被評判、可以任由思緒流過的安靜凌晨"}, vi="Rạng sáng yên tĩnh, suy nghĩ không bị phán xét—chỉ được trôi qua", id="Dini hari tenang di mana pikiran tidak dinilai—cukup dibiarkan lewat"),
        oneLiner=M(ko=_ko_r(0, "oneLiner"), en="Your dawn is the quietest time—and when the most happens inside you", ja="あなたの夜明け前は最も静かで、最も多くのことが起きる時間", **{"zh-CN": "你的凌晨最安静，也是内心发生最多事的时间", "zh-TW": "你的凌晨最安靜，也是內心發生最多事的時間"}, vi="Rạng sáng của bạn yên tĩnh nhất—và nhiều chuyện nhất xảy ra bên trong", id="Dini harimu paling tenang—dan paling banyak hal terjadi di dalam"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(0, "shareLine"), en="My late-night vibe: Bed-Sinking Emotional Type 🌑 Thoughts explode the moment I lie down... went to sleep thinking and woke up at dawn, so true → What do you do at dawn? What time is it?", ja="私の夜明け前センシ：沈み込み感性型 🌑 横になった瞬間思考爆発タイプ…寝ようとして考えてたら夜明け 当たり → 夜明け前何してる？今何時？", **{"zh-CN": "我的凌晨感性：沉眠感性型 🌑 一躺下思绪爆炸型…说要睡结果想到天亮 太准 → 你凌晨干嘛？现在几点？", "zh-TW": "我的凌晨感性：沉眠感性型 🌑 一躺下思緒爆炸型…說要睡結果想到天亮 太準 → 你凌晨幹嘛？現在幾點？"}, vi="Vibe đêm khuya của tôi: Kiểu chìm trong chăn 🌑 Nằm xuống là suy nghĩ bùng nổ… định ngủ mà nghĩ đến sáng, đúng quá → Bạn làm gì lúc rạng sáng? Mấy giờ rồi?", id="Vibe tengah malam-ku: Tipe tenggelam 🌑 Pikiran meledak pas tiduran… mau tidur malah mikir sampai subuh, bener banget → Kamu ngapain di dini hari? Jam berapa?"),
    ),
    r(
        "Type2", "🎵",
        title=M(ko=_ko_r(1, "title"), en="Playlists Complete Your Dawn: Music Emotional Type", ja="プレイリストが夜明け前を完成させる、音楽感性型", **{"zh-CN": "歌单完成你的凌晨，音乐感性型", "zh-TW": "歌單完成你的凌晨，音樂感性型"}, vi="Playlist hoàn thiện rạng sáng: Kiểu cảm xúc âm nhạc", id="Playlist melengkapi dini hari: Tipe emosional musik"),
        shortDescription=M(ko=_ko_r(1, "shortDescription"), en="Your dawn starts with finding the song that fits your mood right now. That one track sets the whole temperature of the night.", ja="あなたの夜明け前は、今の気分に合う曲を探すことから始まる。その一曲が夜の温度を決める。", **{"zh-CN": "你的凌晨从找一首合现在心情的歌开始，那一首决定整个夜晚的温度。", "zh-TW": "你的凌晨從找一首合現在心情的歌開始，那一首決定整個夜晚的溫度。"}, vi="Rạng sáng của bạn bắt đầu bằng tìm bài hợp mood hiện tại. Một bài đó quyết định nhiệt độ cả đêm.", id="Dini harimu dimulai dari mencari lagu yang pas dengan mood sekarang. Satu lagu itu menentukan suhu malam."),
        description=M(ko=_ko_r(1, "description"), en="The first thing you do at dawn is put in earphones or open a playlist. The genre decides that night's mood. When feelings rise, you find a matching song; when they settle, you find one for that too. A dawn without music feels like something's missing.", ja="夜明け前に最初にすることはイヤホンかプレイリスト。ジャンルがその夜の感性を決める。高まれば高まるまま、沈めば沈むまま合う曲を探す。音楽のない夜明け前は何か足りない。", **{"zh-CN": "凌晨最先做的是戴耳机或打开歌单，曲风决定那晚的感性。情绪上来就找合拍的，下去也找合拍的。没有音乐的凌晨总觉得缺了什么。", "zh-TW": "凌晨最先做的是戴耳機或打開歌單，曲風決定那晚的感性。情緒上來就找合拍的，下去也找合拍的。沒有音樂的凌晨總覺得缺了什麼。"}, vi="Việc đầu tiên lúc rạng sáng là đeo tai nghe hoặc mở playlist. Thể loại quyết định mood đêm đó. Cảm xúc lên thì tìm bài hợp, xuống cũng vậy. Rạng sáng không có nhạc cảm thấy thiếu thiếu.", id="Hal pertama di dini hari: earphone atau playlist. Genrenya menentukan mood malam itu. Emosi naik cari lagu pas, turun juga. Dini hari tanpa musik rasanya kurang."),
        lateNightType=M(ko=_ko_r(1, "lateNightType"), en="Music Emotional Type 🎵", ja="音楽感性型 🎵", **{"zh-CN": "音乐感性型 🎵", "zh-TW": "音樂感性型 🎵"}, vi="Kiểu cảm xúc âm nhạc 🎵", id="Tipe emosional musik 🎵"),
        lateNightKeywords=M(ko=_ko_r(1, "lateNightKeywords"), en="Playlist · Mood · Earphones · Atmosphere · Music", ja="プレイリスト・感性・イヤホン・雰囲気・音楽", **{"zh-CN": "歌单·感性·耳机·氛围·音乐", "zh-TW": "歌單·感性·耳機·氛圍·音樂"}, vi="Playlist · Cảm xúc · Tai nghe · Không khí · Nhạc", id="Playlist · Mood · Earphone · Suasana · Musik"),
        actualBehavior=M(ko=_ko_r(1, "actualBehavior"), en="Searching music · Curating playlists · Relating to lyrics · Getting lost in feelings", ja="音楽探索・プレイリスト整理・歌詞共感・感性に浸る", **{"zh-CN": "找歌·整理歌单·歌词共鸣·沉浸感性", "zh-TW": "找歌·整理歌單·歌詞共鳴·沉浸感性"}, vi="Tìm nhạc · Sắp playlist · Đồng cảm lời bài · Chìm trong cảm xúc", id="Cari musik · Rapikan playlist · Relate lirik · Tenggelam dalam mood"),
        strength=M(ko=_ko_r(1, "strength"), en="Ability to regulate emotions through music. A well-trained ear for mood-matching songs", ja="音楽で感情を調整する力。気分に合う曲を見つける耳が育っている", **{"zh-CN": "用音乐调节情绪的能力，很会发现合心情的歌", "zh-TW": "用音樂調節情緒的能力，很會發現合心情的歌"}, vi="Khả năng điều chỉnh cảm xúc bằng nhạc. Tai biết tìm bài hợp mood", id="Kemampuan mengatur emosi lewat musik. Telinga terlatih cari lagu sesuai mood"),
        characteristic=M(ko=_ko_r(1, "characteristic"), en="Has a separate dawn playlist. Daytime music and dawn music are different", ja="夜明け前専用プレイリストがある。昼の音楽と夜明け前の音楽が違う", **{"zh-CN": "有专门的凌晨歌单，白天听的和凌晨听的不一样", "zh-TW": "有專門的凌晨歌單，白天聽的和凌晨聽的不一樣"}, vi="Có playlist riêng cho rạng sáng. Nhạc ban ngày và ban đêm khác nhau", id="Punya playlist khusus dini hari. Musik siang dan dini hari beda"),
        dawnBgm=M(ko=_ko_r(1, "dawnBgm"), en="Emotional R&B · Indie · Jazz · Dawn lo-fi", ja="感性R&B・インディ・ジャズ・夜明け前ローファイ", **{"zh-CN": "感性R&B·独立·爵士·凌晨lo-fi", "zh-TW": "感性R&B·獨立·爵士·凌晨lo-fi"}, vi="R&B cảm xúc · Indie · Jazz · Lo-fi rạng sáng", id="R&B emosional · Indie · Jazz · Lo-fi dini hari"),
        whatTheyNeed=M(ko=_ko_r(1, "whatTheyNeed"), en="Uninterrupted earphone time. Complete solitude for one song", ja="邪魔されないイヤホンタイム。一曲が流れる間の完全な一人", **{"zh-CN": "不被打扰的耳机时间，一首歌里的完全独处", "zh-TW": "不被打擾的耳機時間，一首歌裡的完全獨處"}, vi="Thời gian tai nghe không bị làm phiền. Một mình hoàn toàn trong một bài", id="Waktu earphone tanpa gangguan. Sepenuhnya sendiri selama satu lagu"),
        oneLiner=M(ko=_ko_r(1, "oneLiner"), en="Your dawn is explained by the one song playing right now", ja="あなたの夜明け前は、今流している一曲で説明できる", **{"zh-CN": "你的凌晨可以用现在正在放的那一首歌来解释", "zh-TW": "你的凌晨可以用現在正在放的那一首歌來解釋"}, vi="Rạng sáng của bạn được giải thích bằng bài đang phát", id="Dini harimu dijelaskan oleh satu lagu yang sedang diputar"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(1, "shareLine"), en="My late-night vibe: Music Emotional Type 🎵 Can't have dawn without a playlist... taking this test with earphones on lol → What do you do at dawn?", ja="私の夜明け前センシ：音楽感性型 🎵 プレイリストないと夜明け前にならないタイプ…イヤホンしてこのテスト中 ㅋㅋ → 夜明け前何してる？", **{"zh-CN": "我的凌晨感性：音乐感性型 🎵 没歌单就不算凌晨型…戴着耳机做这测试 哈哈 → 你凌晨干嘛？", "zh-TW": "我的凌晨感性：音樂感性型 🎵 沒歌單就不算凌晨型…戴著耳機做這測試 哈哈 → 你凌晨幹嘛？"}, vi="Vibe đêm khuya của tôi: Kiểu âm nhạc 🎵 Không có playlist là không phải rạng sáng… đang làm test này với tai nghe haha → Bạn làm gì lúc rạng sáng?", id="Vibe tengah malam-ku: Tipe musik 🎵 Tanpa playlist bukan dini hari… lagi tes ini pakai earphone wkwk → Kamu ngapain di dini hari?"),
    ),
    r(
        "Type3", "📺",
        title=M(ko=_ko_r(2, "title"), en="Let the Algorithm Lead Your Dawn: Content Immersion Type", ja="アルゴリズムに導かれて夜明け前を過ごす、コンテンツ没入型", **{"zh-CN": "被算法带着走，凌晨内容沉浸型", "zh-TW": "被演算法帶著走，凌晨內容沉浸型"}, vi="Để thuật toán dẫn lối rạng sáng: Kiểu đắm chìm nội dung", id="Algoritma yang menuntun dini hari: Tipe immersion konten"),
        shortDescription=M(ko=_ko_r(2, "shortDescription"), en="Somehow midnight passes and it's already 3 AM. That's what happens when you keep watching.", ja="気づけば真夜中を過ぎて午前3時。見続けるとそうなる。", **{"zh-CN": "不知不觉过了午夜就是凌晨3点，看着看着就这样了。", "zh-TW": "不知不覺過了午夜就是凌晨3點，看著看著就這樣了。"}, vi="Lúc nào không hay đã qua nửa đêm thành 3 giờ sáng. Cứ xem là vậy.", id="Tanpa sadar lewat tengah malam jadi jam 3 pagi. Begitu kalau terus nonton."),
        description=M(ko=_ko_r(2, "description"), en="You said 'just one more episode,' but the next one looked too good, the algorithm recommended exactly what you wanted, and by the time you tried to sleep it was past 3 AM. At dawn you most often stare at a screen—and that's the most comfortable place to be.", ja="「これだけ見て寝よう」と思ったのに次が気になり、アルゴリズムが見たいものを出し、寝ようとしたらもう午前3時を過ぎている。夜明け前に最もよくするのは画面を見ること。それが最も楽。", **{"zh-CN": "说「就看这一集」，下一集太好奇，算法又推得准，想睡已经3点多了。凌晨最常做的事就是看屏幕，而且最舒服。", "zh-TW": "說「就看這一集」，下一集太好奇，演算法又推得準，想睡已經3點多了。凌晨最常做的事就是看螢幕，而且最舒服。"}, vi="Định 'xem một tập thôi' rồi ngủ, tập sau quá hấp dẫn, thuật toán gợi đúng ý, muốn ngủ đã qua 3 giờ. Rạng sáng hay nhất là nhìn màn hình—và đó là chỗ thoải mái nhất.", id="Bilang 'cuma satu episode,' episode berikutnya kepo, algoritma rekomendasikan pas, mau tidur sudah lewat jam 3. Di dini hari paling sering lihat layar—dan itu paling nyaman."),
        lateNightType=M(ko=_ko_r(2, "lateNightType"), en="Content Immersion Type 📺", ja="コンテンツ没入型 📺", **{"zh-CN": "内容沉浸型 📺", "zh-TW": "內容沉浸型 📺"}, vi="Kiểu đắm chìm nội dung 📺", id="Tipe immersion konten 📺"),
        lateNightKeywords=M(ko=_ko_r(2, "lateNightKeywords"), en="Binge · Algorithm · Screen · Immersion · Autoplay", ja="一気見・アルゴリズム・画面・没入・連続再生", **{"zh-CN": "追剧·算法·屏幕·沉浸·连播", "zh-TW": "追劇·演算法·螢幕·沉浸·連播"}, vi="Cày phim · Thuật toán · Màn hình · Đắm chìm · Tự phát", id="Marathon · Algoritma · Layar · Immersion · Autoplay"),
        actualBehavior=M(ko=_ko_r(2, "actualBehavior"), en="Drama binges · YouTube · Reels · Docs · Movies", ja="ドラマ一気見・YouTube・リール・ドキュメンタリー・映画", **{"zh-CN": "追剧·YouTube·短视频·纪录片·电影", "zh-TW": "追劇·YouTube·短影片·紀錄片·電影"}, vi="Cày drama · YouTube · Reel · Tài liệu · Phim", id="Marathon drama · YouTube · Reel · Dokumenter · Film"),
        strength=M(ko=_ko_r(2, "strength"), en="Top-tier content consumption. You discover and watch great stuff faster than others", ja="コンテンツ消費能力最強。いいものを早く多く見つけて見る", **{"zh-CN": "内容消费力最强，好内容发现得比别人快、看得也多", "zh-TW": "內容消費力最強，好內容發現得比別人快、看得也多"}, vi="Tiêu thụ nội dung cực mạnh. Phát hiện và xem nội dung hay nhanh hơn người khác", id="Konsumsi konten top tier. Temukan dan nonton konten bagus lebih cepat"),
        characteristic=M(ko=_ko_r(2, "characteristic"), en='"Just one more" starts the dawn routine. Sometimes you watch until sunrise', ja="「これだけ」が夜明け前ルーティンの始まり。日が出ることもある", **{"zh-CN": "「就看一集」是凌晨routine的开始，有时看到日出", "zh-TW": "「就看一集」是凌晨routine的開始，有時看到日出"}, vi='"Chỉ một tập nữa" mở đầu routine rạng sáng. Đôi khi xem đến bình minh', id='"Cuma satu lagi" jadi awal rutinitas dini hari. Kadang nonton sampai matahari terbit'),
        dawnBgm=M(ko=_ko_r(2, "dawnBgm"), en="Drama OST · YouTube audio", ja="ドラマOST・YouTubeオーディオ", **{"zh-CN": "剧集OST·YouTube音频", "zh-TW": "劇集OST·YouTube音訊"}, vi="OST phim · Audio YouTube", id="OST drama · Audio YouTube"),
        whatTheyNeed=M(ko=_ko_r(2, "whatTheyNeed"), en="Fully charged device and WiFi. And a tomorrow with no schedule", ja="十分充電された端末とWiFi。そして明日予定のない日", **{"zh-CN": "电量充足的设备和WiFi，还有明天没安排", "zh-TW": "電量充足的設備和WiFi，還有明天沒安排"}, vi="Thiết bị đầy pin và WiFi. Và ngày mai không có lịch", id="Perangkat terisi penuh dan WiFi. Plus besok tanpa jadwal"),
        oneLiner=M(ko=_ko_r(2, "oneLiner"), en="Your dawn is filled by autoplay—and that's not a bad thing", ja="あなたの夜明け前は自動再生で埋まる。それは悪くない", **{"zh-CN": "你的凌晨被自动播放填满，而且并不坏", "zh-TW": "你的凌晨被自動播放填滿，而且並不壞"}, vi="Rạng sáng của bạn được lấp đầy bởi autoplay—và không hề tệ", id="Dini harimu terisi autoplay—dan itu tidak buruk"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(2, "shareLine"), en="My late-night vibe: Content Immersion Type 📺 'Just one episode' turned into 3 AM... so true → If you're watching this at dawn too, try it", ja="私の夜明け前センシ：コンテンツ没入型 📺 これだけ見て寝ようが午前3時タイプ…当たり ㅠ → 今夜明け前にこれ見てる人もやってみて", **{"zh-CN": "我的凌晨感性：内容沉浸型 📺 说就看一集结果3点型…太准 → 凌晨也在看这个的你也试试", "zh-TW": "我的凌晨感性：內容沉浸型 📺 說就看一集結果3點型…太準 → 凌晨也在看這個的你也試試"}, vi="Vibe đêm khuya của tôi: Kiểu đắm chìm nội dung 📺 'Một tập thôi' thành 3 giờ sáng… đúng quá → Bạn cũng đang xem lúc rạng sáng thì thử đi", id="Vibe tengah malam-ku: Tipe immersion konten 📺 'Satu episode aja' jadi jam 3 pagi… bener banget → Kamu juga nonton ini di dini hari? Coba deh"),
    ),
    r(
        "Type4", "🖊️",
        title=M(ko=_ko_r(3, "title"), en="Sorting Feelings and Thoughts into Words: Reflective Writing Type", ja="感情と思考を言葉で整理する、夜更かし思索記録型", **{"zh-CN": "把情绪与思考整理成文字，凌晨沉思记录型", "zh-TW": "把情緒與思考整理成文字，凌晨沉思記錄型"}, vi="Sắp xếp cảm xúc và suy nghĩ thành lời: Kiểu ghi chép chiêm nghiệm", id="Merapikan emosi dan pikiran jadi kata: Tipe tulis reflektif"),
        shortDescription=M(ko=_ko_r(3, "shortDescription"), en="Your dawn is the most honest hour of the day. Things you couldn't say in daylight come out in writing.", ja="あなたの夜明け前は一日で最も正直な時間。昼には出せなかったものが言葉になる。", **{"zh-CN": "你的凌晨是一天里最诚实的时间，白天说不出口的会在文字里出来。", "zh-TW": "你的凌晨是一天裡最誠實的時間，白天說不出口的會在文字裡出來。"}, vi="Rạng sáng của bạn là giờ chân thật nhất trong ngày. Điều ban ngày không nói được sẽ thành chữ.", id="Dini harimu adalah jam paling jujur sepanjang hari. Hal yang siang tidak bisa diucapkan keluar lewat tulisan."),
        description=M(ko=_ko_r(3, "description"), en="When emotions rise or thoughts pile up, you don't just let them pass—you have to put them into words. Diary, memo, phone notes. After writing, you feel much lighter. What you write at dawn is far more honest than what you write in daylight.", ja="感情が高まったり考えが増えたりすると、流すのではなく言葉に出さないと整理できない。日記・メモ・スマホメモ。書いた後はずっと軽い。夜明け前に書いた言葉は昼よりずっと正直。", **{"zh-CN": "情绪上来或想法变多，不会放任流过，必须写成文字。日记、备忘、手机笔记，写完会轻很多。凌晨写的比白天诚实得多。", "zh-TW": "情緒上來或想法變多，不會放任流過，必須寫成文字。日記、備忘、手機筆記，寫完會輕很多。凌晨寫的比白天誠實得多。"}, vi="Cảm xúc dâng hoặc suy nghĩ nhiều, không buông trôi mà phải viết ra. Nhật ký, ghi chú, memo điện thoại. Viết xong nhẹ hơn nhiều. Chữ viết lúc rạng sáng chân thật hơn ban ngày.", id="Emosi naik atau pikiran menumpuk, tidak cukup dibiarkan lewat—harus jadi kata. Diary, memo, catatan HP. Setelah menulis jauh lebih ringan. Tulisan dini hari jauh lebih jujur daripada siang."),
        lateNightType=M(ko=_ko_r(3, "lateNightType"), en="Reflective Writing Type 🖊️", ja="思索記録型 🖊️", **{"zh-CN": "沉思记录型 🖊️", "zh-TW": "沉思記錄型 🖊️"}, vi="Kiểu ghi chép chiêm nghiệm 🖊️", id="Tipe tulis reflektif 🖊️"),
        lateNightKeywords=M(ko=_ko_r(3, "lateNightKeywords"), en="Diary · Notes · Recording · Sorting · Honesty", ja="日記・メモ・記録・整理・正直", **{"zh-CN": "日记·备忘·记录·整理·诚实", "zh-TW": "日記·備忘·記錄·整理·誠實"}, vi="Nhật ký · Ghi chú · Ghi lại · Sắp xếp · Chân thật", id="Diary · Memo · Catatan · Merapikan · Kejujuran"),
        actualBehavior=M(ko=_ko_r(3, "actualBehavior"), en="Writing diary · Notes · Re-reading old entries · Sorting thoughts · Drafting letters", ja="日記・メモ・過去の記録再読・思考整理・手紙の下書き", **{"zh-CN": "写日记·备忘·重读旧记录·整理思绪·写信草稿", "zh-TW": "寫日記·備忘·重讀舊記錄·整理思緒·寫信草稿"}, vi="Viết nhật ký · Ghi chú · Đọc lại ghi chép cũ · Sắp xếp suy nghĩ · Phác thảo thư", id="Menulis diary · Memo · Baca catatan lama · Rapikan pikiran · Draft surat"),
        strength=M(ko=_ko_r(3, "strength"), en="Knows yourself well. Excellent at turning emotions into language", ja="自分をよく知っている。感情を言語に変える能力が優れている", **{"zh-CN": "很了解自己，擅长把情绪转化成语言", "zh-TW": "很了解自己，擅長把情緒轉化成語言"}, vi="Hiểu bản thân tốt. Giỏi chuyển cảm xúc thành lời", id="Mengenal diri dengan baik. Hebat mengubah emosi jadi bahasa"),
        characteristic=M(ko=_ko_r(3, "characteristic"), en="Often has a separate dawn diary. Re-reading later can be embarrassing—but it was real", ja="夜明け前専用日記があることが多い。後で読むと恥ずかしいこともあるが、それが本物だった", **{"zh-CN": "常有专门的凌晨日记，后来重读会尴尬，但那就是真的", "zh-TW": "常有專門的凌晨日記，後來重讀會尷尬，但那就是真的"}, vi="Hay có nhật ký riêng cho rạng sáng. Đọc lại sau có thể ngại—nhưng đó là thật", id="Sering punya diary khusus dini hari. Baca ulang bisa malu—tapi itu yang asli"),
        dawnBgm=M(ko=_ko_r(3, "dawnBgm"), en="Quiet piano · ASMR · Or complete silence", ja="静かなピアノ・ASMR・または完全な静寂", **{"zh-CN": "安静钢琴·ASMR·或完全安静", "zh-TW": "安靜鋼琴·ASMR·或完全安靜"}, vi="Piano nhẹ · ASMR · Hoặc im lặng hoàn toàn", id="Piano tenang · ASMR · Atau hening total"),
        whatTheyNeed=M(ko=_ko_r(3, "whatTheyNeed"), en="A space to write anything without judgment. The reassurance that no one will read it", ja="何を書いても裁かれない空間。誰も読まないという安心", **{"zh-CN": "不被评判、什么都可以写的空间，以及没人会看的安心", "zh-TW": "不被評判、什麼都可以寫的空間，以及沒人會看的安心"}, vi="Không gian viết gì cũng được không bị phán xét. An tâm vì không ai đọc", id="Ruang menulis apa saja tanpa dinilai. Rasa aman karena tidak ada yang membaca"),
        oneLiner=M(ko=_ko_r(3, "oneLiner"), en="What you write at dawn explains you best", ja="夜明け前に書いたものが、あなたを最もよく説明する", **{"zh-CN": "你凌晨写下的东西，最能说明你是谁", "zh-TW": "你凌晨寫下的東西，最能說明你是誰"}, vi="Những gì bạn viết lúc rạng sáng giải thích bạn tốt nhất", id="Apa yang kamu tulis di dini hari paling menjelaskan dirimu"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(3, "shareLine"), en="My late-night vibe: Reflective Writing Type 🖊️ Writes diary and sorts thoughts at dawn... dawn writing is the most honest, so true → What do you do at dawn?", ja="私の夜明け前センシ：思索記録型 🖊️ 夜明け前に日記書いて整理するタイプ…夜明け前の文章が一番正直、当たり → 夜明け前何してる？", **{"zh-CN": "我的凌晨感性：沉思记录型 🖊️ 凌晨写日记整理思绪型…凌晨文字最诚实 太准 → 你凌晨干嘛？", "zh-TW": "我的凌晨感性：沉思記錄型 🖊️ 凌晨寫日記整理思緒型…凌晨文字最誠實 太準 → 你凌晨幹嘛？"}, vi="Vibe đêm khuya của tôi: Kiểu ghi chép chiêm nghiệm 🖊️ Viết nhật ký và sắp xếp suy nghĩ lúc rạng sáng… chữ lúc rạng sáng chân thật nhất, đúng quá → Bạn làm gì lúc rạng sáng?", id="Vibe tengah malam-ku: Tipe tulis reflektif 🖊️ Nulis diary dan rapikan pikiran di dini hari… tulisan dini hari paling jujur, bener → Kamu ngapain di dini hari?"),
    ),
    r(
        "Type5", "💻",
        title=M(ko=_ko_r(4, "title"), en="Dawn Is Your Golden Focus Time: Night-Shift Worker Type", ja="夜明け前が最も生産的な時間、夜更かし作業型", **{"zh-CN": "凌晨是最高效的黄金专注时间，熬夜工作型", "zh-TW": "凌晨是最高效的黄金專注時間，熬夜工作型"}, vi="Rạng sáng là thời gian vàng tập trung: Kiểu làm việc đêm khuya", id="Dini hari waktu fokus emas: Tipe kerja larut malam"),
        shortDescription=M(ko=_ko_r(4, "shortDescription"), en="Your dawn is golden focus time. The quieter the world gets, the clearer and more productive you become.", ja="あなたの夜明け前は黄金の集中タイム。世界が静かになるほど鮮明になり、よりはかどる。", **{"zh-CN": "你的凌晨是黄金专注时间，世界越安静你越清晰、越高效。", "zh-TW": "你的凌晨是黃金專注時間，世界越安靜你越清晰、越高效。"}, vi="Rạng sáng của bạn là thời gian vàng để tập trung. Thế giới càng yên bạn càng rõ và hiệu quả hơn.", id="Dini harimu waktu fokus emas. Semakin sunyi dunia, semakin jernih dan produktif kamu."),
        description=M(ko=_ko_r(4, "description"), en="What wouldn't flow during the day suddenly flows at dawn. No distractions, no messages—just you and what you're doing. Work, study, projects. You finish the most at dawn. Even with plans tomorrow, breaking this focus feels like a waste.", ja="昼は進まなかったことが夜明け前になると進む。邪魔も連絡もなく、自分とやることだけ。作業・勉強・プロジェクト。夜明け前に最も多く完成する。明日予定があっても、この集中を壊すのがもったいない。", **{"zh-CN": "白天做不顺的事，凌晨就顺了。没有打扰、没有消息，只剩你和你正在做的事。工作、学习、项目，凌晨完成最多。就算明天有事，也不想打断这个状态。", "zh-TW": "白天做不順的事，凌晨就順了。沒有打擾、沒有訊息，只剩你和你正在做的事。工作、學習、專案，凌晨完成最多。就算明天有事，也不想打斷這個狀態。"}, vi="Ban ngày không vào việc thì rạng sáng lại vào. Không làm phiền, không tin nhắn—chỉ còn bạn và việc đang làm. Công việc, học, dự án. Hoàn thành nhiều nhất lúc rạng sáng. Dù mai có lịch, phá focus này thấy phí.", id="Yang siang tidak jalan, dini hari tiba-tiba lancar. Tanpa gangguan, tanpa chat—hanya kamu dan yang sedang dikerjakan. Kerja, belajar, proyek. Paling banyak selesai di dini hari. Meski besok ada jadwal, memutus fokus ini sayang."),
        lateNightType=M(ko=_ko_r(4, "lateNightType"), en="Night-Shift Worker Type 💻", ja="夜更かし作業型 💻", **{"zh-CN": "熬夜工作型 💻", "zh-TW": "熬夜工作型 💻"}, vi="Kiểu làm việc đêm khuya 💻", id="Tipe kerja larut malam 💻"),
        lateNightKeywords=M(ko=_ko_r(4, "lateNightKeywords"), en="Focus · Productivity · Golden time · Quiet · Completion", ja="集中・生産性・黄金時間・静けさ・完成", **{"zh-CN": "专注·生产力·黄金时间·安静·完成", "zh-TW": "專注·生產力·黃金時間·安靜·完成"}, vi="Tập trung · Năng suất · Thời gian vàng · Yên lặng · Hoàn thành", id="Fokus · Produktivitas · Waktu emas · Tenang · Penyelesaian"),
        actualBehavior=M(ko=_ko_r(4, "actualBehavior"), en="Working · Studying · Side projects · Writing · Editing · Organizing", ja="作業・勉強・サイドプロジェクト・執筆・編集・整理", **{"zh-CN": "工作·学习·副业·写作·剪辑·整理", "zh-TW": "工作·學習·副業·寫作·剪輯·整理"}, vi="Làm việc · Học · Side project · Viết · Edit · Dọn dẹp", id="Kerja · Belajar · Side project · Menulis · Edit · Merapikan"),
        strength=M(ko=_ko_r(4, "strength"), en="Deep focus ability. Overwhelming performance in distraction-free environments", ja="深い集中力。邪魔のない環境で圧倒的なパフォーマンス", **{"zh-CN": "深度专注能力，无干扰环境下表现惊人", "zh-TW": "深度專注能力，無干擾環境下表現驚人"}, vi="Khả năng tập trung sâu. Hiệu suất mạnh trong môi trường không bị làm phiền", id="Kemampuan fokus dalam. Performa luar biasa tanpa gangguan"),
        characteristic=M(ko=_ko_r(4, "characteristic"), en="Routine of finishing daytime leftovers at dawn. Often likes dawn results best", ja="昼に終わらなかったことを夜明け前に仕上げるルーティン。夜明け前の成果が一番気に入ることも多い", **{"zh-CN": "有把白天没做完的事凌晨收尾的routine，常最喜欢凌晨的成果", "zh-TW": "有把白天沒做完的事凌晨收尾的routine，常最喜歡凌晨的成果"}, vi="Có routine hoàn thành việc ban ngày chưa xong lúc rạng sáng. Hay thích kết quả lúc rạng sáng nhất", id="Rutinitas menyelesaikan sisa siang di dini hari. Sering paling suka hasil dini hari"),
        dawnBgm=M(ko=_ko_r(4, "dawnBgm"), en="Lo-fi · White noise · Focus playlists · Or total silence", ja="ローファイ・ホワイトノイズ・集中用プレイリスト・または完全な静寂", **{"zh-CN": "lo-fi·白噪音·专注歌单·或完全安静", "zh-TW": "lo-fi·白噪音·專注歌單·或完全安靜"}, vi="Lo-fi · White noise · Playlist tập trung · Hoặc im lặng hoàn toàn", id="Lo-fi · White noise · Playlist fokus · Atau hening total"),
        whatTheyNeed=M(ko=_ko_r(4, "whatTheyNeed"), en="Long uninterrupted blocks. No notifications. And a cup of coffee", ja="邪魔されない長い時間。通知なし。そしてコーヒー一杯", **{"zh-CN": "不被打断的长段时间、没有通知，还有一杯咖啡", "zh-TW": "不被打斷的長段時間、沒有通知，還有一杯咖啡"}, vi="Khối thời gian dài không bị làm phiền. Không thông báo. Và một ly cà phê", id="Blok waktu panjang tanpa gangguan. Tanpa notifikasi. Plus secangkir kopi"),
        oneLiner=M(ko=_ko_r(4, "oneLiner"), en="Your dawn is when the most builds up where no one is watching", ja="あなたの夜明け前は、誰も見ていない場所で最も積み上がる時間", **{"zh-CN": "你的凌晨是在无人看见处积累最多的时间", "zh-TW": "你的凌晨是在無人看見處累積最多的時間"}, vi="Rạng sáng của bạn là lúc tích lũy nhiều nhất nơi không ai nhìn", id="Dini harimu waktu paling banyak terbangun di tempat tidak ada yang melihat"),
        certificationPhrase=EMPTY,
        shareLine=M(ko=_ko_r(4, "shareLine"), en="My late-night vibe: Night-Shift Worker Type 💻 Dawn is golden focus time... stuff that won't work in daylight works at dawn, so true → What do you do at dawn? What time is it?", ja="私の夜明け前センシ：夜更かし作業型 💻 夜明け前が黄金集中タイム…昼に進まないのが夜明け前に進む、完全に当たり → 夜明け前何してる？今何時？", **{"zh-CN": "我的凌晨感性：熬夜工作型 💻 凌晨是黄金专注时间型…白天做不顺的凌晨就顺了 太准 → 你凌晨干嘛？现在几点？", "zh-TW": "我的凌晨感性：熬夜工作型 💻 凌晨是黃金專注時間型…白天做不順的凌晨就順了 太準 → 你凌晨幹嘛？現在幾點？"}, vi="Vibe đêm khuya của tôi: Kiểu làm việc đêm khuya 💻 Rạng sáng là thời gian vàng… ban ngày không vào việc thì rạng sáng vào, đúng quá → Bạn làm gì lúc rạng sáng? Mấy giờ?", id="Vibe tengah malam-ku: Tipe kerja larut malam 💻 Dini hari waktu fokus emas… yang siang macet dini hari lancar, bener → Kamu ngapain di dini hari? Jam berapa?"),
    ),
    r(
        "Type6", "🌟",
        title=M(ko=_ko_r(5, "title"), en="Night Is Your Day: Fully Awake Dawn Master Type", ja="夜が昼の人、夜明け前完全覚醒マスター型", **{"zh-CN": "夜晚才是白天的人，凌晨完全觉醒大师型", "zh-TW": "夜晚才是白天的人，凌晨完全覺醒大師型"}, vi="Đêm mới là ban ngày: Kiểu bậc thầy tỉnh táo rạng sáng", id="Malam adalah siangmu: Tipe master sadar penuh dini hari"),
        shortDescription=M(ko=_ko_r(5, "shortDescription"), en="You only truly wake up when the world falls asleep. Dawn is your real time.", ja="世界が眠って初めて本当に目が覚める。夜明け前があなたの本当の時間。", **{"zh-CN": "世界睡着了你才真正醒来，凌晨才是你的真实时间。", "zh-TW": "世界睡著了你才真正醒來，凌晨才是你的真實時間。"}, vi="Thế giới ngủ rồi bạn mới thực sự tỉnh. Rạng sáng mới là thời gian thật của bạn.", id="Dunia tidur barulah kamu benar-benar bangun. Dini hari waktu aslimu."),
        description=M(ko=_ko_r(5, "description"), en="You have dawn emotions, dawn productivity, and dawn reflection. Everything about dawn fits you. Night feels more natural than day, and day feels awkward. The deeper the night, the more energy rises and the more awake you feel. Your schedule is flipped—or flipping.", ja="夜明け前の感性も生産性も思索もある。夜明け前のすべてが合う。昼より夜明け前の方が自然で、昼の方が違和感。夜が深まるほどエネルギーが上がり、より覚醒する。昼夜逆転しているか、その途中。", **{"zh-CN": "你有凌晨的感性、生产力和沉思，凌晨的一切都适合。夜晚比白天更自然，白天反而别扭。夜越深能量越高、越清醒。作息已经颠倒或正在颠倒。", "zh-TW": "你有凌晨的感性、生產力和沉思，凌晨的一切都適合。夜晚比白天更自然，白天反而彆扭。夜越深能量越高、越清醒。作息已經顛倒或正在顛倒。"}, vi="Bạn có cảm xúc, năng suất và chiêm nghiệm lúc rạng sáng. Mọi thứ về rạng sáng đều hợp. Đêm tự nhiên hơn ban ngày. Đêm càng sâu năng lượng càng lên, càng tỉnh. Nhịp sinh hoạt đảo ngược hoặc đang đảo.", id="Kamu punya emosi, produktivitas, dan refleksi dini hari. Semua tentang dini hari cocok. Malam lebih natural daripada siang. Semakin larut energi naik, semakin melek. Ritme hidup terbalik atau sedang terbalik."),
        lateNightType=M(ko=_ko_r(5, "lateNightType"), en="Fully Awake Dawn Master Type 🌟", ja="完全覚醒マスター型 🌟", **{"zh-CN": "完全觉醒大师型 🌟", "zh-TW": "完全覺醒大師型 🌟"}, vi="Kiểu bậc thầy tỉnh táo 🌟", id="Tipe master sadar penuh 🌟"),
        lateNightKeywords=M(ko=_ko_r(5, "lateNightKeywords"), en="Awake · Night owl · Clarity · Freedom · Dawn is day", ja="覚醒・夜型・鮮明・自由・夜明け前が昼", **{"zh-CN": "觉醒·夜猫·清晰·自由·凌晨即白天", "zh-TW": "覺醒·夜貓·清晰·自由·凌晨即白天"}, vi="Tỉnh táo · Cú đêm · Rõ ràng · Tự do · Rạng sáng là ban ngày", id="Sadar · Night owl · Jernih · Bebas · Dini hari adalah siang"),
        actualBehavior=M(ko=_ko_r(5, "actualBehavior"), en="Everything—emotions, music, work, writing, creating, reflecting at dawn", ja="すべて。感性・音楽・作業・記録・創作・思索を夜明け前に", **{"zh-CN": "全部——感性、音乐、工作、记录、创作、沉思都在凌晨", "zh-TW": "全部——感性、音樂、工作、記錄、創作、沉思都在凌晨"}, vi="Tất cả—cảm xúc, nhạc, làm việc, ghi chép, sáng tạo, chiêm nghiệm lúc rạng sáng", id="Semuanya—emosi, musik, kerja, catatan, kreasi, refleksi di dini hari"),
        strength=M(ko=_ko_r(5, "strength"), en="Can do the most when the world is quietest. Absorbs all of dawn's energy", ja="世界が最も静かなとき最も多くできる。夜明け前のエネルギーをすべて吸収", **{"zh-CN": "世界最安静时能做最多，吸收凌晨的全部能量", "zh-TW": "世界最安靜時能做最多，吸收凌晨的全部能量"}, vi="Làm được nhiều nhất khi thế giới yên lặng nhất. Hấp thụ toàn bộ năng lượng rạng sáng", id="Bisa melakukan paling banyak saat dunia paling sunyi. Menyerap semua energi dini hari"),
        characteristic=M(ko=_ko_r(5, "characteristic"), en='Has said "I should sleep early" forever, but it never happened. 4 AM feels natural, not scary', ja="「早く寝よう」と一生言ってきたが一度も叶わない。午前4時は怖くなく自然", **{"zh-CN": "一辈子说「要早睡」但从没做到，凌晨4点不可怕反而很自然", "zh-TW": "一輩子說「要早睡」但從沒做到，凌晨4點不可怕反而很自然"}, vi='Nói "sớm ngủ thôi" cả đời nhưng chưa bao giờ được. 4 giờ sáng không đáng sợ mà rất tự nhiên', id='Seumur hidup bilang "tidur cepat" tapi tidak pernah terjadi. Jam 4 pagi natural, tidak menakutkan'),
        dawnBgm=M(ko=_ko_r(5, "dawnBgm"), en="Depends on the mood—emotional music or focus tracks. Master of the dawn", ja="状況次第。感性なら感性音楽、作業なら集中音楽。夜明け前の主", **{"zh-CN": "看情况——感性时放感性音乐，工作时放专注音乐，凌晨的主人", "zh-TW": "看情況——感性時放感性音樂，工作時放專注音樂，凌晨的主人"}, vi="Tùy mood—nhạc cảm xúc hoặc nhạc tập trung. Chủ nhân của rạng sáng", id="Tergantung mood—musik emosional atau fokus. Master dini hari"),
        whatTheyNeed=M(ko=_ko_r(5, "whatTheyNeed"), en="No morning plans tomorrow. And enough daytime sleep environment", ja="翌朝予定がないこと。そして昼に十分眠れる環境", **{"zh-CN": "明天上午没安排，以及白天能睡够的环境", "zh-TW": "明天上午沒安排，以及白天能睡夠的環境"}, vi="Không có lịch sáng mai. Và môi trường ngủ đủ ban ngày", id="Tidak ada jadwal pagi besok. Plus lingkungan tidur cukup di siang hari"),
        oneLiner=M(ko=_ko_r(5, "oneLiner"), en="You live loudest when the world is asleep", ja="世界が眠った時間に最も大きく生きている", **{"zh-CN": "世界睡着时，你活得最鲜明", "zh-TW": "世界睡著時，你活得最鮮明"}, vi="Bạn sống rõ nhất khi thế giới đang ngủ", id="Kamu hidup paling keras saat dunia tidur"),
        certificationPhrase=M(
            ko=_ko_r(5, "certificationPhrase"),
            en="Fully Awake Dawn Master 🌟 My real time is dawn",
            ja="夜明け前完全覚醒マスター 🌟 私の本当の時間は夜明け前",
            **{"zh-CN": "凌晨完全觉醒大师 🌟 我的真实时间是凌晨", "zh-TW": "凌晨完全覺醒大師 🌟 我的真實時間是凌晨"},
            vi="Bậc thầy tỉnh táo rạng sáng 🌟 Thời gian thật của tôi là rạng sáng",
            id="Master sadar penuh dini hari 🌟 Waktu asli-ku adalah dini hari",
        ),
        shareLine=M(ko=_ko_r(5, "shareLine"), en="My late-night vibe: Fully Awake Dawn Master Type 🌟 Night is my day... sharpest at 4 AM lol → Everyone watching this at dawn, try it", ja="私の夜明け前センシ：完全覚醒マスター型 🌟 夜が昼の人…午前4時が一番鮮明、当たり ㅋㅋ → 今この時間に見てる人全員やってみて", **{"zh-CN": "我的凌晨感性：完全觉醒大师型 🌟 夜晚才是白天型…凌晨4点最清醒 太准 哈哈 → 现在这个点在看的人都试试", "zh-TW": "我的凌晨感性：完全覺醒大師型 🌟 夜晚才是白天型…凌晨4點最清醒 太準 哈哈 → 現在這個點在看的人都試試"}, vi="Vibe đêm khuya của tôi: Kiểu bậc thầy tỉnh táo 🌟 Đêm mới là ban ngày… 4 giờ sáng sắc nét nhất haha → Ai đang xem lúc rạng sáng thử đi", id="Vibe tengah malam-ku: Tipe master sadar penuh 🌟 Malam adalah siangku… paling jernih jam 4 pagi wkwk → Yang nonton di dini hari coba deh"),
    ),
]
