"""Translation data for phase3 exam study type test (imported by build script)."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
_OPT_KEYS = ("A", "B", "C", "D")


def M(**kwargs: str) -> dict[str, str]:
    return {loc: kwargs[loc] for loc in LOCALES}


def q(question: dict[str, str], options: list[tuple[dict[str, str], int]]) -> dict:
    return {"question": question, "options": options}


def r(type_: str, emoji: str, **fields: dict[str, str]) -> dict:
    return {"type": type_, "emoji": emoji, **fields}


EMPTY = M(ko="", en="", ja="", **{"zh-CN": "", "zh-TW": ""}, vi="", id="")

_gen_path = Path(__file__).resolve().parent / "gen_phase3_exam_study_type_data.py"
_gen_ns: dict = {"__file__": str(_gen_path)}
exec(_gen_path.read_text(encoding="utf-8").split("\nHEADER =")[0], _gen_ns)
KO_QUESTIONS = _gen_ns["QUESTIONS"]
KO_RESULTS = _gen_ns["RESULTS"]


def _ko_q(idx: int) -> str:
    return KO_QUESTIONS[idx]["q"]


def _ko_o(idx: int, opt_idx: int) -> str:
    return KO_QUESTIONS[idx][_OPT_KEYS[opt_idx]]


def _strip_quotes(s: str) -> str:
    s = s.strip()
    return s[1:-1] if len(s) >= 2 and s[0] == '"' and s[-1] == '"' else s


def _ko_r(type_idx: int, field: str) -> str:
    key_map = {
        "title": "title_ko", "studySummary": "study_summary", "quote": "quote",
        "description": "description", "studyType": "study_type",
        "studyKeywords": "study_keywords", "studyTip": "study_tip",
        "typicalPhrase": "typical_phrase", "certificationPhrase": "certification",
        "strengths": "strengths", "cautions": "cautions",
        "oneLiner": "one_liner", "shareLine": "share_line",
    }
    if field not in key_map:
        raise KeyError(field)
    value = KO_RESULTS[type_idx + 1].get(key_map[field], "")
    return _strip_quotes(value) if field == "oneLiner" else value


def _ml(ko: str, en: str, ja: str, zh_cn: str, zh_tw: str, vi: str, id_: str) -> dict[str, str]:
    return M(ko=ko, en=en, ja=ja, **{"zh-CN": zh_cn, "zh-TW": zh_tw}, vi=vi, id=id_)


def _i(en: str, ja: str, cn: str, tw: str, vi: str, id_: str) -> dict[str, str]:
    return {"en": en, "ja": ja, "zh-CN": cn, "zh-TW": tw, "vi": vi, "id": id_}


def _with_ko(ko: str, i18n: dict[str, str]) -> dict[str, str]:
    return _ml(ko, i18n["en"], i18n["ja"], i18n["zh-CN"], i18n["zh-TW"], i18n["vi"], i18n["id"])


# --- Question translations (en/ja/zh-CN/zh-TW/vi/id) ---
_Q_I18N: list[dict] = [
    {"q": _i("You sit at your desk to study today. What do you do first?", "今日勉強を始めようと机に座った。最初にすることは？", "今天坐到书桌前准备学习。最先做什么？", "今天坐到書桌前準備學習。最先做什麼？", "Ngồi vào bàn để học hôm nay, bạn làm gì đầu tiên?", "Duduk di meja untuk belajar hari ini. Apa yang pertama dilakukan?"),
     "opts": [_i("Lie down first. Starting is too hard, and I end up asleep.", "とりあえず横になる。始めるのが難しく、いつの間にか寝ている", "先躺一下。开始太难了，不知不觉就睡着了", "先躺一下。開始太難了，不知不覺就睡著了", "Nằm xuống trước. Bắt đầu quá khó và rồi tôi ngủ luôn.", "Rebahan dulu. Memulai terlalu sulit dan tahu-tahu tertidur."),
              _i("Turn on a study playlist and make coffee. I need the mood.", "勉強用プレイリストとコーヒー。雰囲気が必要", "打开学习歌单、冲咖啡。需要氛围", "打開學習歌單、沖咖啡。需要氛圍", "Bật playlist học và pha cà phê. Tôi cần không khí.", "Nyalakan playlist belajar dan buat kopi. Aku butuh suasana."),
              _i("List what to memorize and how many repetitions to do.", "覚えることと反復回数を決める", "列出要背的内容和重复次数", "列出要背的內容和重複次數", "Liệt kê điều cần thuộc và số lần lặp.", "Daftar yang harus dihafal dan berapa kali mengulang."),
              _i("Set the scope and understand the learning structure first.", "範囲と理解する順序の構造を先に把握する", "先确定范围和理解顺序的结构", "先確定範圍和理解順序的結構", "Xác định phạm vi và cấu trúc cần hiểu trước.", "Tentukan cakupan dan pahami struktur belajarnya dahulu.")]},
    {"q": _i("You just realized the exam is two weeks away. What do you do?", "試験まで2週間だと今気づいた。私は？", "刚发现考试只剩两周。我会？", "剛發現考試只剩兩週。我會？", "Bạn vừa nhận ra còn hai tuần nữa là thi. Bạn?", "Baru sadar ujian tinggal dua minggu. Aku?"),
     "opts": [_i("Two weeks is plenty. I will start next week; today I rest.", "まだ2週間ある。来週始めれば十分、今日は休む", "还有两周呢。下周开始就够，今天先休息", "還有兩週呢。下週開始就夠，今天先休息", "Còn tận hai tuần. Tuần sau học, hôm nay nghỉ.", "Masih dua minggu. Minggu depan mulai saja, hari ini istirahat."),
              _i("Look for a beautiful study schedule template first.", "まずおしゃれな勉強スケジュール表を探す", "先找一张漂亮的学习计划表", "先找一張漂亮的學習計畫表", "Tìm mẫu lịch học đẹp trước.", "Cari template jadwal belajar yang cantik dulu."),
              _i("Make a list of things to memorize.", "覚えるもののリストを作る", "列出要背的内容", "列出要背的內容", "Lập danh sách những thứ phải thuộc.", "Buat daftar hal yang harus dihafal."),
              _i("Classify concepts to understand and things to memorize, then plan.", "理解と暗記を分類して計画を立てる", "区分要理解的概念与要背的内容后计划", "區分要理解的概念與要背的內容後計畫", "Phân loại phần cần hiểu và cần thuộc rồi lập kế hoạch.", "Klasifikasikan konsep yang dipahami dan yang dihafal, lalu rencanakan.")]},
    {"q": _i("What is your best study environment?", "自分にとって最も勉強しやすい環境は？", "最适合我的学习环境是？", "最適合我的學習環境是？", "Môi trường học tốt nhất của bạn là?", "Lingkungan belajar terbaik bagiku adalah?"),
     "opts": [_i("I cannot focus anywhere. It seems like a willpower problem.", "どこでも集中できない。意志力の問題だと思う", "其实哪里都无法专注，像是意志力问题", "其實哪裡都無法專注，像是意志力問題", "Thật ra tôi không tập trung được ở đâu cả.", "Sebenarnya aku tidak bisa fokus di mana pun."),
              _i("A café soundtrack; silence makes focus harder. Mood is key.", "カフェ音が必要。静かだと集中できず、雰囲気が鍵", "需要咖啡馆背景音；氛围是关键", "需要咖啡館背景音；氛圍是關鍵", "Cần tiếng nền quán cà phê; không khí là then chốt.", "Butuh suara kafe; suasana adalah kuncinya."),
              _i("A quiet room alone, repeating aloud.", "一人の静かな部屋で声に出して反復する", "独自在安静房间里出声重复", "獨自在安靜房間裡出聲重複", "Một mình trong phòng yên tĩnh, đọc lặp thành tiếng.", "Sendiri di kamar tenang sambil mengulang dengan suara."),
              _i("No distractions, with only study tools on my desk.", "邪魔がなく、机には勉強道具だけの環境", "没有干扰，桌上只放学习工具", "沒有干擾，桌上只放學習工具", "Không có thứ gây xao nhãng, bàn chỉ có dụng cụ học.", "Tanpa gangguan, meja hanya berisi alat belajar.")]},
    {"q": _i("A phone notification arrives while studying. You?", "勉強中にスマホ通知が来た。私は？", "学习时手机来了通知。我会？", "學習時手機來了通知。我會？", "Đang học thì điện thoại báo tin. Bạn?", "Saat belajar ada notifikasi ponsel. Aku?"),
     "opts": [_i("Of course I check. I was not focused anyway, then an hour passes.", "もちろん見る。どうせ集中しておらず、1時間が過ぎる", "当然看，反正没专注，结果一小时过去了", "當然看，反正沒專注，結果一小時過去了", "Dĩ nhiên xem. Vốn không tập trung, rồi một giờ trôi qua.", "Tentu lihat. Memang tidak fokus, tahu-tahu satu jam lewat."),
              _i("Check carefully without closing my playlist, then rebuild the mood.", "プレイリストを消さないよう確認して、雰囲気を作り直す", "小心查看不关掉歌单，再找回氛围", "小心查看不關掉歌單，再找回氛圍", "Kiểm tra cẩn thận để không tắt playlist rồi lấy lại cảm hứng.", "Cek hati-hati agar playlist tidak tertutup, lalu bangun suasana lagi."),
              _i("Finish the current repetition first; restarting the flow is hard.", "今の反復を終えてから見る。流れを切りたくない", "先完成正在重复的内容，流程断了很难重来", "先完成正在重複的內容，流程斷了很難重來", "Xong lượt lặp hiện tại mới xem; khó bắt lại nhịp.", "Selesaikan pengulangan dulu; sulit memulai alur lagi."),
              _i("Put it face down on silent mode and check only during breaks.", "無音で伏せ、決めた休憩時間だけ確認する", "静音扣放，只在休息时间查看", "靜音扣放，只在休息時間查看", "Úp máy ở chế độ im lặng, chỉ xem lúc nghỉ.", "Balikkan dalam mode senyap dan cek hanya saat istirahat.")]},
    {"q": _i("When first learning a new concept, you?", "新しい概念を初めて学ぶとき、私は？", "第一次学新概念时，我会？", "第一次學新概念時，我會？", "Khi học khái niệm mới lần đầu, bạn?", "Saat pertama belajar konsep baru, aku?"),
     "opts": [_i("Skim quickly. I can somehow manage the night before.", "素早く流し見する。前日に何とかなる", "快速浏览，考前一天总会有办法", "快速瀏覽，考前一天總會有辦法", "Lướt nhanh. Đêm trước thi rồi cũng xoay xở được.", "Baca cepat. Malam sebelum ujian pasti bisa diakali."),
              _i("Make pretty notes. Organized notes feel memorable.", "きれいにノートを取る。整理されたノートは覚えやすい", "做漂亮笔记，整理好的笔记似乎更好记", "做漂亮筆記，整理好的筆記似乎更好記", "Ghi chép đẹp; vở gọn gàng có vẻ dễ nhớ.", "Membuat catatan cantik; catatan rapi terasa mudah diingat."),
              _i("Highlight key parts and reread them until familiar.", "重要箇所に線を引き、慣れるまで繰り返し読む", "标出重点并反复阅读直到熟悉", "標出重點並反覆閱讀直到熟悉", "Tô phần quan trọng và đọc lại đến khi quen.", "Menyorot bagian penting dan membaca berulang sampai akrab."),
              _i("Understand why the concept works before memorizing it.", "なぜ成り立つか原理から理解する", "先理解概念为何成立的原理", "先理解概念為何成立的原理", "Hiểu nguyên lý vì sao khái niệm này đúng trước.", "Pahami dulu mengapa konsep ini berlaku.")]},
    {"q": _i("You encounter something you do not understand while studying. You?", "勉強中に理解できない部分が出た。私は？", "学习中遇到不懂的部分。我会？", "學習中遇到不懂的部分。我會？", "Gặp phần không hiểu khi học, bạn?", "Saat belajar ada bagian yang tidak dipahami. Aku?"),
     "opts": [_i("Skip it. It may not be on the exam; perhaps I can guess.", "飛ばす。試験に出ないかもしれないし、勘で当たるかも", "先跳过，可能不考，也许能蒙对", "先跳過，可能不考，也許能蒙對", "Bỏ qua. Có thể không thi, biết đâu đoán đúng.", "Lewati saja. Mungkin tidak keluar ujian, bisa saja menebak benar."),
              _i("Find a related YouTube video, sometimes drifting to another video.", "YouTubeで動画を探すが、別動画に移ることもある", "在YouTube找相关视频，有时又看了别的视频", "在YouTube找相關影片，有時又看了別的影片", "Tìm video YouTube liên quan, đôi khi lại xem video khác.", "Cari video terkait di YouTube, kadang pindah ke video lain."),
              _i("Memorize it whole. Knowing the answer matters more.", "丸ごと暗記する。理解より答えを知る方が重要", "整段背下来，知道答案更重要", "整段背下來，知道答案更重要", "Học thuộc nguyên phần đó. Biết đáp án quan trọng hơn.", "Hafalkan saja. Mengetahui jawaban lebih penting."),
              _i("Research and ask until I understand; I cannot move on unsure.", "理解できるまで調べて聞く。知らないまま進めない", "查资料、问人直到理解，不能带着疑问过去", "查資料、問人直到理解，不能帶著疑問過去", "Tìm tài liệu và hỏi đến khi hiểu; không thể bỏ qua.", "Cari bahan dan bertanya sampai paham; tidak bisa lanjut tanpa tahu.")]},
    {"q": _i("After only 20 minutes, your focus has completely slipped. You?", "勉強開始20分で集中が完全に切れた。私は？", "刚学20分钟就完全走神了。我会？", "剛學20分鐘就完全走神了。我會？", "Mới học 20 phút đã mất tập trung hoàn toàn. Bạn?", "Baru 20 menit belajar, fokus sudah buyar. Aku?"),
     "opts": [_i("Decide to rest. Forcing it is useless; tomorrow is another day.", "休むことにする。無理しても無駄、明日またやる", "决定休息，勉强学习也没用，明天再来", "決定休息，勉強學習也沒用，明天再來", "Nghỉ thôi. Ép học cũng vô ích, mai học lại.", "Memutuskan istirahat. Memaksa belajar percuma, besok lagi."),
              _i("Play a study vlog; feeling like I study with someone restores focus.", "勉強Vlogをつける。一緒に勉強する感覚で戻る", "放学习Vlog，有人陪学的感觉才能重拾专注", "放學習Vlog，有人陪學的感覺才能重拾專注", "Mở vlog học tập; cảm giác học cùng ai đó giúp tập trung lại.", "Nyalakan vlog belajar; rasa belajar bersama mengembalikan fokus."),
              _i("Repeat the material from the beginning until focus returns.", "最初から反復する。繰り返すと集中が戻る", "从头再重复，重复中专注会回来", "從頭再重複，重複中專注會回來", "Lặp lại từ đầu; cứ lặp thì tập trung sẽ trở lại.", "Ulangi dari awal; fokus kembali saat mengulang."),
              _i("Take five minutes, reset a timer, and use a focus routine.", "5分休み、タイマーと集中ルーティンで再開する", "休息五分钟，重新设定计时器和专注流程", "休息五分鐘，重新設定計時器和專注流程", "Nghỉ năm phút, đặt lại hẹn giờ và quy trình tập trung.", "Istirahat lima menit, atur ulang timer dan rutinitas fokus.")]},
    {"q": _i("You hit a study slump and nothing goes into your head. You?", "試験勉強中にスランプ。何も頭に入らない。私は？", "备考时陷入低潮，什么都记不进去。我会？", "備考時陷入低潮，什麼都記不進去。我會？", "Bạn sa sút khi ôn thi, không gì vào đầu. Bạn?", "Saat belajar ujian kamu slump dan tidak ada yang masuk kepala. Aku?"),
     "opts": [_i("It is not a slump; I was not studying in the first place.", "スランプではなく、もともとやっていない", "不是低潮，本来就没在学", "不是低潮，本來就沒在學", "Không phải slump, vốn dĩ tôi đã không học.", "Bukan slump; memang dari awal tidak belajar."),
              _i("Play aesthetic study videos and rewrite my notes nicely.", "勉強感性動画を流し、ノートをきれいに書き直す", "放学习氛围视频，把笔记重新整理漂亮", "放學習氛圍影片，把筆記重新整理漂亮", "Mở video học cảm hứng và chép lại vở cho đẹp.", "Nyalakan video belajar estetik dan tulis ulang catatan dengan rapi."),
              _i("Review flashcards I already know to regain motivation.", "知っている暗記カードを見直して意欲を戻す", "翻看已背会的卡片来重获动力", "翻看已背會的卡片來重獲動力", "Xem lại thẻ đã thuộc để lấy lại động lực.", "Tinjau kartu hafalan yang sudah dikuasai untuk mengembalikan motivasi."),
              _i("Check the scope and reprioritize what is lacking.", "範囲を見直し、不足部分の優先順位を立て直す", "重新检查范围，调整薄弱部分的优先级", "重新檢查範圍，調整薄弱部分的優先級", "Kiểm tra lại phạm vi và sắp xếp lại ưu tiên phần thiếu.", "Periksa cakupan lagi dan atur ulang prioritas yang kurang.")]},
    {"q": _i("On the night before the exam, you?", "試験前日の夜、私は？", "考试前一晚，我会？", "考試前一晚，我會？", "Tối trước ngày thi, bạn?", "Malam sebelum ujian, aku?"),
     "opts": [_i("Start studying properly for the first time and pull an all-nighter.", "その日初めて本格的に勉強し、徹夜する", "那天才第一次认真学习，熬夜", "那天才第一次認真學習，熬夜", "Lần đầu học nghiêm túc và thức trắng.", "Baru mulai belajar sungguh-sungguh dan begadang."),
              _i("Turn on mood lighting and music while cramming.", "感性照明と音楽で徹夜勉強を始める", "开氛围灯和音乐开始突击", "開氛圍燈和音樂開始突擊", "Bật đèn và nhạc cảm hứng khi học nước rút.", "Nyalakan lampu suasana dan musik sambil kebut belajar."),
              _i("Rapidly repeat everything I must memorize one last time.", "覚えるものを最後に高速で反復する", "最后快速重复所有要背的内容", "最後快速重複所有要背的內容", "Lặp nhanh những thứ phải thuộc lần cuối.", "Mengulang cepat semua yang harus dihafal untuk terakhir kali."),
              _i("I already reviewed; I lightly organize and sleep early.", "復習済み。軽く整理して早く寝る", "早已复习完，简单整理后早睡", "早已複習完，簡單整理後早睡", "Đã ôn xong, chỉ sắp xếp nhẹ rồi ngủ sớm.", "Sudah mengulang; merapikan sedikit lalu tidur awal.")]},
    {"q": _i("On the morning of the exam, you?", "試験当日の朝、私は？", "考试当天早上，我会？", "考試當天早上，我會？", "Sáng ngày thi, bạn?", "Pagi hari ujian, aku?"),
     "opts": [_i("I am exhausted from staying up, and what I learned disappears.", "徹夜で疲弊し、見た瞬間に昨日覚えたことが消える", "熬夜后很疲惫，看到试卷昨天背的全消失", "熬夜後很疲憊，看到試卷昨天背的全消失", "Kiệt sức vì thức đêm, kiến thức hôm qua biến mất.", "Lelah karena begadang, hafalan kemarin menghilang."),
              _i("Choose my outfit and drink first; exam venue mood matters.", "服と飲み物を先に決める。会場の雰囲気が大切", "先决定穿什么、带什么喝的，考场氛围很重要", "先決定穿什麼、帶什麼喝的，考場氛圍很重要", "Chọn đồ mặc và nước uống trước; không khí phòng thi quan trọng.", "Pilih pakaian dan minuman dulu; suasana ruang ujian penting."),
              _i("Read flashcards on the way to school.", "登校中も暗記カードを見る", "上学路上也看记忆卡", "上學路上也看記憶卡", "Xem thẻ ghi nhớ trên đường đến trường.", "Melihat kartu hafalan dalam perjalanan ke sekolah."),
              _i("Skim my summary notes once more and enter with core concepts.", "要約ノートを最後に見て、核心概念を頭に入れて行く", "最后扫一遍总结笔记，带着核心概念进考场", "最後掃一遍總結筆記，帶著核心概念進考場", "Lướt ghi chú tóm tắt lần cuối rồi vào phòng thi.", "Meninjau catatan ringkasan sekali lagi lalu masuk.")]},
    {"q": _i("The exam is over and you did worse than expected. You?", "試験が終わり、思ったよりできなかった。私は？", "考完比预想差。我会？", "考完比預想差。我會？", "Thi xong, bạn làm kém hơn mong đợi. Bạn?", "Ujian selesai dan hasilku lebih buruk dari dugaan. Aku?"),
     "opts": [_i("As expected. I promise to work hard next time, again.", "予想通り。次こそ頑張るを毎回繰り返す", "不意外。又一次说下次一定努力", "不意外。又一次說下次一定努力", "Đúng như dự đoán. Lại hứa lần sau sẽ chăm chỉ.", "Sudah diduga. Lagi-lagi janji akan rajin lain kali."),
              _i("Forget it at a celebratory café. Today is for resting.", "記念にカフェへ行って忘れる。今日は休む", "去咖啡馆庆祝并忘掉它，今天休息", "去咖啡館慶祝並忘掉它，今天休息", "Đi quán cà phê ăn mừng rồi quên đi. Hôm nay nghỉ.", "Pergi ke kafe merayakan lalu melupakannya. Hari ini istirahat."),
              _i("Check what I failed to memorize; next time I will repeat more.", "覚えられなかったものを確認し、次はもっと反復する", "确认哪些没背住，下次多重复", "確認哪些沒背住，下次多重複", "Kiểm tra phần chưa thuộc; lần sau lặp nhiều hơn.", "Cek yang belum hafal; lain kali mengulang lebih banyak."),
              _i("Analyze missing concepts so I do not repeat the same mistake.", "不足した概念を分析し、同じミスを防ぐ", "分析缺少的概念，避免下次犯同样错误", "分析缺少的概念，避免下次犯同樣錯誤", "Phân tích thiếu khái niệm nào để không lặp lỗi.", "Analisis konsep yang kurang agar tidak mengulangi kesalahan.")]},
    {"q": _i("Your honest assessment of exam study is?", "試験勉強についての正直な評価は？", "你对备考的真实评价是？", "你對備考的真實評價是？", "Đánh giá thật lòng của bạn về việc ôn thi?", "Penilaian jujurku tentang belajar ujian?"),
     "opts": [_i("I regret it every time yet do the same thing. This is me.", "毎回後悔しながら同じことをする。これが私", "每次后悔却每次一样，这就是我", "每次後悔卻每次一樣，這就是我", "Lần nào cũng hối hận nhưng vẫn như cũ. Đó là tôi.", "Selalu menyesal tapi tetap melakukan hal sama. Itulah aku."),
              _i("I can create a great study environment; learning content is separate.", "勉強環境づくりには自信がある。内容は別問題", "很会营造学习环境，学进去多少是另一回事", "很會營造學習環境，學進去多少是另一回事", "Tôi giỏi tạo môi trường học; học được bao nhiêu là chuyện khác.", "Aku jago menciptakan lingkungan belajar; isi yang masuk soal lain."),
              _i("I repeat diligently. Even without understanding, memorizing works.", "真面目に反復する。理解できなくても覚えれば何とかなる", "我会认真重复，不懂也能靠背下来", "我會認真重複，不懂也能靠背下來", "Tôi lặp lại chăm chỉ; không hiểu vẫn có thể học thuộc.", "Aku tekun mengulang. Meski tidak paham, hafalan bisa membantu."),
              _i("I study systematically. Proper understanding and organization are efficient.", "体系的に学ぶ。時間がかかっても理解と整理が効率的", "我系统学习，真正理解和整理最终更有效率", "我系統學習，真正理解和整理最終更有效率", "Tôi học có hệ thống; hiểu và sắp xếp đúng mới hiệu quả.", "Aku belajar sistematis; memahami dan merapikan dengan benar lebih efisien.")]},
]


# Compact field translations: each entry contains all non-Korean locales for every
# displayed result field. Korean values always remain the source-generator values.
def _result_i18n(
    title: tuple[str, str, str, str, str, str], summary: tuple[str, str, str, str, str, str],
    quote: tuple[str, str, str, str, str, str], description: tuple[str, str, str, str, str, str],
    study_type: tuple[str, str, str, str, str, str], keywords: tuple[str, str, str, str, str, str],
    strengths: tuple[str, str, str, str, str, str], cautions: tuple[str, str, str, str, str, str],
    tip: tuple[str, str, str, str, str, str] | None, phrase: tuple[str, str, str, str, str, str] | None,
    certification: tuple[str, str, str, str, str, str] | None, one_liner: tuple[str, str, str, str, str, str],
    share: tuple[str, str, str, str, str, str],
) -> dict[str, dict[str, str]]:
    names = ("en", "ja", "zh-CN", "zh-TW", "vi", "id")
    values = (title, summary, quote, description, study_type, keywords, strengths, cautions, tip, phrase, certification, one_liner, share)
    fields = ("title", "studySummary", "quote", "description", "studyType", "studyKeywords", "strengths", "cautions", "studyTip", "typicalPhrase", "certificationPhrase", "oneLiner", "shareLine")
    return {field: dict(zip(names, value)) for field, value in zip(fields, values) if value is not None}


# --- Result translations (en/ja/zh-CN/zh-TW/vi/id) ---
_R_I18N: list[dict[str, dict[str, str]]] = [
    _result_i18n(
        ("The Real Study Time Is the Night Before, Cram Legend Type", "前日の夜が本当の勉強時間の人、徹夜レジェンド型", "前一晚才是真正学习时间的人，突击传奇型", "前一晚才是真正學習時間的人，突擊傳奇型", "Người có thời gian học thật sự là đêm trước, Kiểu huyền thoại nước rút", "Orang yang waktu belajarnya sebenarnya malam sebelum ujian, Tipe Legenda Kebut"),
        ("Golden focus time is the night before the exam", "試験前日の夜が黄金の集中時間", "考试前一晚是黄金专注时间", "考試前一晚是黃金專注時間", "Đêm trước thi là giờ tập trung vàng", "Malam sebelum ujian adalah waktu fokus emas"),
        ("D-1 is not a crisis for you. This is when it really begins. Adrenaline fuels your studying.", "あなたにとってD-1は危機ではありません。ここからが本番。アドレナリンが学習の燃料です。", "对你而言D-1不是危机，这才是真正开始。肾上腺素是学习动力。", "對你而言D-1不是危機，這才是真正開始。腎上腺素是學習動力。", "Với bạn, D-1 không phải khủng hoảng. Đây mới là lúc thật sự bắt đầu.", "Bagi kamu, H-1 bukan krisis. Inilah saat yang sebenarnya dimulai."),
        ("You open the book for the first time the night before, somehow survive, and repeat the routine.", "前日の夜に初めて本を開き、何とか生還し、このルーティンを繰り返します。", "前一晚才第一次打开书，然后不知怎么熬过来，反复如此。", "前一晚才第一次打開書，然後不知怎麼撐過來，反覆如此。", "Bạn mở sách lần đầu vào đêm trước, xoay xở vượt qua rồi lặp lại.", "Kamu baru membuka buku malam sebelumnya, entah bagaimana selamat, lalu mengulanginya."),
        ("Cram Legend Type ⚡", "徹夜レジェンド型 ⚡", "突击传奇型 ⚡", "突擊傳奇型 ⚡", "Kiểu huyền thoại nước rút ⚡", "Tipe Legenda Kebut ⚡"),
        ("D-1 · All-nighter · Adrenaline · Miracle · Regret", "D-1・徹夜・アドレナリン・奇跡・毎回後悔", "D-1·熬夜·肾上腺素·奇迹·每次后悔", "D-1·熬夜·腎上腺素·奇蹟·每次後悔", "D-1 · Thức trắng · Adrenaline · Kỳ tích · Hối hận", "H-1 · Begadang · Adrenalin · Keajaiban · Menyesal"),
        ("Focus explodes under extreme pressure; information density rises right before the exam.", "極限の圧力で集中力が爆発し、直前の情報密度が高い。", "极端压力下专注力爆发，考前信息密度高。", "極端壓力下專注力爆發，考前資訊密度高。", "Tập trung bùng nổ dưới áp lực cao; hấp thụ dày đặc trước thi.", "Fokus meledak di bawah tekanan ekstrem; informasi padat jelang ujian."),
        ("It does not stay in long-term memory; a week later, it is all gone.", "長期記憶に残らず、一週間後には忘れがち。", "难进长期记忆，一周后全忘。", "難進長期記憶，一週後全忘。", "Không vào trí nhớ dài hạn; một tuần sau đã quên.", "Tidak masuk memori jangka panjang; seminggu kemudian hilang."),
        ("Optimize cramming: use only summaries and prioritize frequent questions.", "徹夜を最適化。要約だけを見て頻出問題を優先。", "优化突击：只看总结，优先高频题。", "優化突擊：只看總結，優先高頻題。", "Tối ưu nước rút: chỉ xem tóm tắt, ưu tiên câu hay gặp.", "Optimalkan kebut: lihat ringkasan dan dahulukan soal sering keluar."),
        ("“This time I will start early.” (Then never does.)", "「今回は本当に早く始める」（毎回やらない）", "“这次真的会早点开始。”（但每次都没做）", "「這次真的會早點開始。」（但每次都沒做）", "“Lần này tôi sẽ bắt đầu sớm.” (Rồi lại không.)", "“Kali ini aku akan mulai awal.” (Tapi tidak pernah.)"),
        None,
        ("You survive every time you regret it; your crisis-response skill is real. Use it a little earlier.", "毎回後悔しながら生還するあなたは危機対応が得意。その力を少し早く使おう。", "每次后悔却都活下来，说明你很会应对危机。早点用这能力吧。", "每次後悔卻都活下來，說明你很會應對危機。早點用這能力吧。", "Bạn luôn sống sót dù hối hận; hãy dùng khả năng ứng phó sớm hơn.", "Kamu selalu selamat meski menyesal; pakai kemampuan krisismu lebih awal."),
        ("My study type: Cram Legend ⚡ D-1 is my real study time… what is yours?", "私の勉強タイプ：徹夜レジェンド型 ⚡ D-1が本番…あなたは？", "我的学习类型：突击传奇型 ⚡ D-1才是正片…你呢？", "我的學習類型：突擊傳奇型 ⚡ D-1才是正片…你呢？", "Kiểu học của tôi: Huyền thoại nước rút ⚡ Còn bạn?", "Tipe belajarku: Legenda Kebut ⚡ Kalau kamu?"),
    ),
]

def _standard_result_i18n(
    title: tuple[str, str, str, str, str, str],
    summary: tuple[str, str, str, str, str, str],
    quote: tuple[str, str, str, str, str, str],
    description: tuple[str, str, str, str, str, str],
    type_name: tuple[str, str, str, str, str, str],
    keywords: tuple[str, str, str, str, str, str],
    strengths: tuple[str, str, str, str, str, str],
    cautions: tuple[str, str, str, str, str, str],
    tip: tuple[str, str, str, str, str, str] | None,
    phrase: tuple[str, str, str, str, str, str] | None,
    certification: tuple[str, str, str, str, str, str] | None,
    one_liner: tuple[str, str, str, str, str, str],
    share: tuple[str, str, str, str, str, str],
) -> dict[str, dict[str, str]]:
    return _result_i18n(
        title, summary, quote, description,
        type_name, keywords, strengths, cautions, tip, phrase, certification, one_liner, share,
    )


_R_I18N.extend([
    _standard_result_i18n(
        ("Someone Whose Study Mood Does Half the Work, Aesthetic Study Type", "勉強の雰囲気が半分を決める人、感性勉強型", "学习氛围决定一半的人，氛围学习型", "學習氛圍決定一半的人，氛圍學習型", "Người mà không khí học làm nên một nửa, Kiểu học cảm hứng", "Orang yang suasana belajarnya menentukan setengah hasil, Tipe Belajar Estetis"),
        ("Needs environment, mood, and feeling to study", "環境・雰囲気・感性がそろうと勉強できるタイプ", "环境、氛围和感觉齐备才能学习的类型", "環境、氛圍和感覺齊備才能學習的類型", "Cần môi trường và cảm hứng để học", "Butuh lingkungan dan suasana untuk belajar"),
        ("Study prep is 50% of the work. Café seat, playlist, a cup of coffee — only then does real studying begin.", "あなたにとって勉強の準備が50%です。カフェの席、プレイリスト、コーヒー一杯。これが整って初めて本番です。", "对你来说，学习准备占50%。咖啡馆座位、歌单、一杯咖啡——齐备了才真正开始。", "對你來說，學習準備占50%。咖啡館座位、歌單、一杯咖啡——齊備了才真正開始。", "Chuẩn bị học chiếm 50%. Ghế quán cà phê, playlist, một ly cà phê — đủ rồi mới bắt đầu thật.", "Persiapan belajar 50%. Kursi kafe, playlist, secangkir kopi — baru setelah itu belajar sungguh dimulai."),
        ("You spend time on study-aesthetic YouTube, pretty notes, and lighting. Prep can be so perfect there is little time left for the actual content.", "勉強感性YouTubeをつけ、きれいなノート整理、照明調整に時間を使います。準備が完璧すぎて内容に使う時間が足りないことも。", "你会花时间看学习氛围视频、整理漂亮笔记、调整灯光。准备太完美，反而没多少时间学内容。", "你會花時間看學習氛圍影片、整理漂亮筆記、調整燈光。準備太完美，反而沒多少時間學內容。", "Bạn dành thời gian cho video cảm hứng học, ghi chép đẹp và ánh sáng. Chuẩn bị quá hoàn hảo nên ít thời gian cho nội dung.", "Kamu habiskan waktu untuk video estetik belajar, catatan cantik, dan pencahayaan. Persiapan terlalu sempurna sehingga waktu untuk isi kurang."),
        ("Aesthetic Study Type ☕", "感性勉強型 ☕", "氛围学习型 ☕", "氛圍學習型 ☕", "Kiểu học cảm hứng ☕", "Tipe Belajar Estetis ☕"),
        ("Café · Playlist · Notes · Mood · Aesthetics", "カフェ・プレイリスト・ノート・雰囲気・感性", "咖啡馆·歌单·笔记·氛围·感觉", "咖啡館·歌單·筆記·氛圍·感覺", "Cà phê · Playlist · Ghi chép · Không khí · Cảm hứng", "Kafe · Playlist · Catatan · Suasana · Estetika"),
        ("Creates a low barrier to starting and organizes notes beautifully.", "始めるハードルを下げ、ノート整理が得意。", "善于营造低门槛的开始环境，笔记整理出色。", "善於營造低門檻的開始環境，筆記整理出色。", "Giỏi tạo điều kiện dễ bắt đầu và ghi chép đẹp.", "Menciptakan awal yang mudah dan jago merapikan catatan."),
        ("Depending on mood can make studying difficult in an imperfect environment.", "雰囲気に依存すると、環境が整わない日は勉強しにくい。", "太依赖氛围时，环境不好就很难学习。", "太依賴氛圍時，環境不好就很難學習。", "Phụ thuộc vào không khí khiến việc học khó khi môi trường không hoàn hảo.", "Terlalu bergantung suasana membuat belajar sulit saat lingkungan kurang baik."),
        ("Limit setup to 15 minutes, then focus on understanding the content.", "準備は15分に制限し、その後は内容理解に集中。", "把准备限制在15分钟，然后专注理解内容。", "把準備限制在15分鐘，然後專注理解內容。", "Giới hạn chuẩn bị 15 phút rồi tập trung vào nội dung.", "Batasi persiapan 15 menit, lalu fokus memahami isi."),
        ("Study vlog filming · Pretty notes · Finding a café seat", "勉強Vlog撮影・きれいな筆記・カフェ席探し", "拍学习Vlog·漂亮笔记·找咖啡馆座位", "拍學習Vlog·漂亮筆記·找咖啡館座位", "Quay vlog học · Ghi chép đẹp · Tìm chỗ quán cà phê", "Merekam vlog belajar · Catatan cantik · Cari kursi kafe"),
        None,
        ("Enjoying study is a strength. Put half the energy you spend on mood into the content and you will grow stronger.", "勉強を楽しめるのは強みです。雰囲気づくりのエネルギーの半分を内容に注げば、さらに強くなります。", "会享受学习是优势。把营造氛围的能量一半用在内容上，会更强。", "會享受學習是優勢。把營造氛圍的能量一半用在內容上，會更強。", "Biết tận hưởng việc học là thế mạnh. Dành một nửa năng lượng tạo không khí cho nội dung sẽ mạnh hơn.", "Menikmati belajar adalah kekuatan. Setengah energi untuk suasana dialihkan ke isi akan membuatmu lebih kuat."),
        ("My study type: Aesthetic Study ☕ Prep is 50% of studying… spending 30 minutes finding a café seat — so true lol → What is yours?", "私の勉強タイプ：感性勉強型 ☕ 準備が50%…カフェ席探しに30分、当たり ㅋㅋ → あなたは？", "我的学习类型：氛围学习型 ☕ 说准备占50%…找咖啡馆座位30分钟太准哈哈 → 你呢？", "我的學習類型：氛圍學習型 ☕ 說準備占50%…找咖啡館座位30分鐘太準哈哈 → 你呢？", "Kiểu học của tôi: Cảm hứng ☕ Chuẩn bị chiếm 50%… tìm ghế quán cà phê 30 phút — đúng quá haha → Bạn loại nào?", "Tipe belajarku: Estetis ☕ Persiapan 50%… cari kursi kafe 30 menit — bener wkwk → Kamu tipe apa?"),
    ),
    _standard_result_i18n(
        ("Someone for Whom Repetition Is Studying, Repetition Memorization Type", "反復こそ勉強の人、反復暗記型", "重复就是学习的人，重复记忆型", "重複就是學習的人，重複記憶型", "Người coi lặp lại là học, Kiểu ghi nhớ lặp lại", "Orang yang menganggap pengulangan adalah belajar, Tipe Hafalan Berulang"),
        ("Engraves information through repetition rather than understanding", "理解より反復で頭に刻むタイプ", "比起理解更靠重复刻进脑海的类型", "比起理解更靠重複刻進腦海的類型", "Khắc kiến thức bằng lặp lại hơn là hiểu", "Menanamkan informasi lewat pengulangan"),
        ("For you, study is about repetition count. Ten repetitions are more reliable than one understanding.", "あなたにとって勉強の核心は回数です。一度理解するより十回反復する方が信頼できます。", "对你来说，学习的核心是次数。重复十次比理解一次更可靠。", "對你來說，學習的核心是次數。重複十次比理解一次更可靠。", "Với bạn, cốt lõi học là số lần lặp. Mười lần lặp đáng tin hơn một lần hiểu.", "Bagimu, inti belajar adalah jumlah pengulangan. Sepuluh kali mengulang lebih andal daripada sekali paham."),
        ("You highlight, read aloud, make flashcards, and repeat. It is diligent and steady. You enter exams knowing the material in the defined range.", "蛍光ペン、声に出して読む、暗記カード、反復。誠実で着実な方式です。試験範囲内のものは確実に知って臨みます。", "你会用荧光笔、出声朗读、做记忆卡并反复练习。方式勤奋踏实，对考试范围内的内容很有把握。", "你會用螢光筆、出聲朗讀、做記憶卡並反覆練習。方式勤奮踏實，對考試範圍內的內容很有把握。", "Bạn tô điểm, đọc to, làm thẻ nhớ và lặp lại. Cách học chăm chỉ và bền bỉ. Bạn vào thi với phần trong phạm vi đã chắc.", "Kamu menandai, membaca keras, membuat kartu hafalan, dan mengulang. Cara belajar tekun dan konsisten. Kamu masuk ujian dengan materi dalam cakupan yang sudah dikuasai."),
        ("Repetition Memorization Type 📖", "反復暗記型 📖", "重复记忆型 📖", "重複記憶型 📖", "Kiểu ghi nhớ lặp lại 📖", "Tipe Hafalan Berulang 📖"),
        ("Repetition · Flashcards · Highlighter · Diligence · Count", "反復・暗記カード・蛍光ペン・誠実・回数", "重复·记忆卡·荧光笔·勤奋·次数", "重複·記憶卡·螢光筆·勤奮·次數", "Lặp lại · Thẻ nhớ · Bút dạ quang · Chăm chỉ · Số lần", "Pengulangan · Kartu hafalan · Stabilo · Tekun · Jumlah"),
        ("What is memorized is secure; you are steady and strong with defined exam ranges.", "覚えたことは確実で、範囲が決まった試験に強く、着実に続けられる。", "背过的内容很牢，擅长范围明确的考试且能坚持。", "背過的內容很牢，擅長範圍明確的考試且能堅持。", "Đã thuộc là chắc; bạn bền bỉ và mạnh với phạm vi rõ ràng.", "Yang dihafal kuat; kamu tekun dan kuat pada materi yang jelas."),
        ("Memorizing without understanding can make unfamiliar application problems hard.", "理解なしの暗記は、初見の応用問題で止まりやすい。", "不理解地背诵容易在陌生应用题卡住。", "不理解地背誦容易在陌生應用題卡住。", "Học thuộc không hiểu dễ mắc ở bài vận dụng mới.", "Menghafal tanpa paham menyulitkan soal aplikasi baru."),
        ("Before memorizing, ask once why it works; add one reason to every flashcard.", "暗記前に一度「なぜ」を確認し、カードに理由を一行加える。", "背前先问一次为什么，每张卡加一行理由。", "背前先問一次為什麼，每張卡加一行理由。", "Trước khi thuộc, hỏi một lần “vì sao” và thêm lý do vào thẻ.", "Sebelum menghafal, tanya sekali mengapa dan tambah alasan di kartu."),
        None, None,
        ("Diligent repetition is the most basic virtue of studying. Add one layer of understanding and you will become much stronger.", "反復する誠実さは勉強の最も基本的な美徳です。理解を一層加えれば、はるかに強くなります。", "重复中的勤奋是学习最基本的美德。再加一层理解就会强很多。", "重複中的勤奮是學習最基本的美德。再加一層理解就會強很多。", "Sự chăm chỉ lặp lại là đức tính cơ bản nhất của học tập. Thêm một lớp hiểu biết sẽ mạnh hơn nhiều.", "Ketekunan mengulang adalah kebajikan dasar belajar. Tambahkan satu lapisan pemahaman dan kamu jauh lebih kuat."),
        ("My study type: Repetition Memorization 📖 Repetition before understanding… ten reads and it sticks — so true → Try it too", "私の勉強タイプ：反復暗記型 📖 理解より反復が先…十回読めば覚える、当たり → あなたもやってみて", "我的学习类型：重复记忆型 📖 说理解不如重复…读十遍就记住太准 → 你也试试", "我的學習類型：重複記憶型 📖 說理解不如重複…讀十遍就記住太準 → 你也試試", "Kiểu học của tôi: Ghi nhớ lặp lại 📖 Lặp trước hiểu… đọc mười lần là nhớ — đúng quá → Bạn thử nhé", "Tipe belajarku: Hafalan Berulang 📖 Mengulang dulu baru paham… baca sepuluh kali langsung hafal — bener → Kamu coba juga"),
    ),
])


def _remaining_result(
    title: tuple[str, str, str, str, str, str], summary: tuple[str, str, str, str, str, str],
    quote: tuple[str, str, str, str, str, str], description: tuple[str, str, str, str, str, str],
    study_type: tuple[str, str, str, str, str, str], keywords: tuple[str, str, str, str, str, str],
    strength: tuple[str, str, str, str, str, str], caution: tuple[str, str, str, str, str, str],
    tip: tuple[str, str, str, str, str, str] | None, phrase: tuple[str, str, str, str, str, str] | None,
    cert: tuple[str, str, str, str, str, str] | None, one_liner: tuple[str, str, str, str, str, str],
    share: tuple[str, str, str, str, str, str],
) -> dict[str, dict[str, str]]:
    return _standard_result_i18n(
        title, summary, quote, description, study_type, keywords, strength, caution, tip, phrase, cert, one_liner, share,
    )


_R_I18N.extend([
    _remaining_result(
        ("Someone Who Cannot Move On Without Understanding, Deep Understanding Type", "理解できないと進めない人、理解探究型", "不理解就无法继续的人，理解探究型", "不理解就無法繼續的人，理解探究型", "Người không thể tiếp nếu chưa hiểu, Kiểu khám phá hiểu biết", "Orang yang tidak bisa lanjut tanpa paham, Tipe Pemahaman Mendalam"),
        ("Must understand principles and concepts before moving on", "原理と概念を理解してから次へ進むタイプ", "必须理解原理和概念才继续的类型", "必須理解原理和概念才繼續的類型", "Phải hiểu nguyên lý và khái niệm mới đi tiếp", "Harus memahami prinsip dan konsep sebelum lanjut"),
        ("Moving on without understanding is not an option. Even if one page takes an hour, you must solve it before continuing.", "知らないまま進む選択肢はありません。1ページに1時間かかっても必ず解決してから進みます。", "带着疑问继续不是选项。一页花一小时也要先搞懂。", "帶著疑問繼續不是選項。一頁花一小時也要先搞懂。", "Tiếp tục khi chưa hiểu không phải lựa chọn. Dù một trang mất một giờ cũng phải giải quyết trước.", "Melanjutkan tanpa paham bukan pilihan. Meski satu halaman butuh satu jam, harus diselesaikan dulu."),
        ("You ask why a concept works, look it up, and understand before the next step. What you know deeply, you never forget.", "概念がなぜ成り立つか調べ、理解してから次へ進みます。深く知ったものは絶対に忘れません。", "你会追问概念为何成立、查资料、理解后再继续。真正理解的东西不会忘。", "你會追問概念為何成立、查資料、理解後再繼續。真正理解的東西不會忘。", "Bạn hỏi vì sao khái niệm đúng, tra cứu và hiểu rồi mới sang bước sau. Điều hiểu sâu không bao giờ quên.", "Kamu bertanya mengapa konsep berlaku, mencari bahan, dan paham dulu sebelum lanjut. Yang dipahami mendalam tidak pernah terlupa."),
        ("Deep Understanding Type 🔍", "理解探究型 🔍", "理解探究型 🔍", "理解探究型 🔍", "Kiểu khám phá hiểu biết 🔍", "Tipe Pemahaman Mendalam 🔍"),
        ("Principles · Understanding · Structure · Why · Accuracy", "原理・理解・構造・なぜ・正確さ", "原理·理解·结构·为什么·准确", "原理·理解·結構·為什麼·準確", "Nguyên lý · Hiểu · Cấu trúc · Tại sao · Chính xác", "Prinsip · Pemahaman · Struktur · Mengapa · Akurat"),
        ("What you understand lasts long, and you excel at application and written problems.", "理解したことは長く残り、応用・記述問題に強い。", "理解过的会记很久，擅长应用题和论述题。", "理解過的會記很久，擅長應用題和論述題。", "Điều hiểu được nhớ lâu; bạn mạnh ở bài vận dụng và tự luận.", "Yang dipahami bertahan lama; kamu kuat di soal aplikasi dan uraian."),
        ("Going deep can take too long to cover the entire exam range.", "深く理解する時間が長く、全範囲を終えられないことがある。", "理解太深入会耗时，可能看不完全部范围。", "理解太深入會耗時，可能看不完全部範圍。", "Hiểu sâu có thể tốn quá lâu, không kịp hết phạm vi.", "Memahami terlalu dalam bisa memakan waktu dan tidak selesai semua materi."),
        ("Adjust depth: decide what needs 100% understanding and what can move on at 70%.", "理解の深さを調整し、100%必要なものと70%で進めるものを分ける。", "调节理解深度，区分必须100%理解和70%即可的内容。", "調節理解深度，區分必須100%理解和70%即可的內容。", "Điều chỉnh độ sâu: phân biệt phần cần 100% và 70% là đủ.", "Atur kedalaman: bedakan yang perlu 100% dan yang bisa lanjut di 70%."),
        None, None,
        ("People who truly understand survive the longest. Add better time allocation and you are complete.", "きちんと理解する人が最後まで残ります。時間配分だけ加えれば完成です。", "真正理解的人最后会留下来。补上时间分配就完美了。", "真正理解的人最後會留下來。補上時間分配就完美了。", "Người hiểu thật sự sẽ trụ lâu nhất. Thêm phân bổ thời gian là hoàn thiện.", "Orang yang benar-benar paham bertahan paling lama. Tambahkan alokasi waktu dan kamu sudah lengkap."),
        ("My study type: Deep Understanding 🔍 Cannot move on without understanding… one hour on one page — so true → What is yours?", "私の勉強タイプ：理解探究型 🔍 理解できないと進めない…1ページ1時間、当たり ㅠ → あなたは？", "我的学习类型：理解探究型 🔍 说不理解就过不去…一页一小时太准 → 你呢？", "我的學習類型：理解探究型 🔍 說不理解就過不去…一頁一小時太準 → 你呢？", "Kiểu học của tôi: Hiểu sâu 🔍 Không hiểu là không qua… một trang một giờ — đúng quá → Bạn loại nào?", "Tipe belajarku: Pemahaman Mendalam 🔍 Nggak paham nggak lanjut… satu halaman satu jam — bener → Kamu tipe apa?"),
    ),
    _remaining_result(
        ("Someone Who Follows the Plan Steadily, Plan Executor Type", "計画表どおり着実に進める人、計画実践型", "按计划踏实执行的人，计划实践型", "按計畫踏實執行的人，計畫實踐型", "Người thực hiện kế hoạch đều đặn, Kiểu thực thi kế hoạch", "Orang yang tekun mengikuti rencana, Tipe Pelaksana Rencana"),
        ("Prepares for exams by making and executing plans", "計画を立てて実行し、試験に備えるタイプ", "通过制定并执行计划备考的类型", "通過制定並執行計畫備考的類型", "Chuẩn bị thi bằng cách lập và thực hiện kế hoạch", "Menyiapkan ujian dengan membuat dan menjalankan rencana"),
        ("Study begins with a plan. You need to know what, when, and how much before you can execute.", "あなたにとって勉強は計画から始まります。何をいつどれだけやるかが決まって初めて実行できます。", "对你来说，学习从计划开始。必须定好做什么、何时做、做多少才能执行。", "對你來說，學習從計畫開始。必須定好做什麼、何時做、做多少才能執行。", "Học bắt đầu bằng kế hoạch. Phải biết làm gì, khi nào, bao nhiêu mới thực hiện được.", "Belajar dimulai dari rencana. Harus tahu apa, kapan, dan berapa banyak baru bisa dieksekusi."),
        ("Two weeks out you divide the scope, set daily tasks, and proceed steadily. The night before you lightly review and sleep early. Condition management is part of studying.", "2週間前から範囲を分け、毎日のタスクを決め、着実に進めます。前日は軽く復習して早く寝ます。体調管理も勉強の一部です。", "两周前划分范围、定每日任务并踏实推进。前一晚轻复习早睡，状态管理也是学习的一部分。", "兩週前劃分範圍、定每日任務並踏實推進。前一晚輕複習早睡，狀態管理也是學習的一部分。", "Hai tuần trước bạn chia phạm vi, đặt việc hàng ngày và tiến đều. Đêm trước ôn nhẹ và ngủ sớm. Quản lý thể trạng cũng là học.", "Dua minggu sebelumnya kamu bagi cakupan, tentukan tugas harian, dan lanjut konsisten. Malam sebelumnya ulasan ringan dan tidur awal. Mengelola kondisi juga bagian belajar."),
        ("Plan Executor Type 📅", "計画実践型 📅", "计划实践型 📅", "計畫實踐型 📅", "Kiểu thực thi kế hoạch 📅", "Tipe Pelaksana Rencana 📅"),
        ("Schedule · Allocation · Execution · Condition · System", "計画表・配分・実行・体調・体系", "计划表·分配·执行·状态·体系", "計畫表·分配·執行·狀態·體系", "Lịch · Phân bổ · Thực hiện · Thể trạng · Hệ thống", "Jadwal · Pembagian · Pelaksanaan · Kondisi · Sistem"),
        ("You cover the full range with less stress and have room to breathe before the exam.", "全範囲をカバーしやすく、前日に余裕がありストレスも比較的低い。", "能覆盖全部范围，考前有余裕，压力相对低。", "能覆蓋全部範圍，考前有餘裕，壓力相對低。", "Bạn bao quát toàn bộ phạm vi, ít căng thẳng và có dư thời gian.", "Kamu bisa mencakup seluruh materi, stres lebih rendah, dan punya waktu luang."),
        ("When the plan changes, you may feel flustered or lose flexibility.", "計画が崩れると慌てやすく、柔軟性を失うことがある。", "计划被打乱时容易慌张，灵活性可能不足。", "計畫被打亂時容易慌張，靈活性可能不足。", "Khi kế hoạch lệch, bạn có thể hoảng và thiếu linh hoạt.", "Saat rencana berubah, kamu bisa panik dan kurang fleksibel."),
        ("Add a 20% buffer and treat revising the plan as part of planning.", "20%の予備時間を入れ、計画修正も計画の一部と考える。", "加入20%缓冲时间，把修改计划也当作计划的一部分。", "加入20%緩衝時間，把修改計畫也當作計畫的一部分。", "Thêm 20% thời gian đệm; xem việc sửa kế hoạch là một phần của kế hoạch.", "Tambahkan buffer 20% dan anggap revisi rencana sebagai bagian dari rencana."),
        None, None,
        ("Following the plan means you have already done half the studying. That execution is your strongest weapon.", "計画どおりに進むことは、すでに勉強の半分を終えたことです。その実行力が最強の武器です。", "按计划执行，等于已经完成一半学习。那份执行力是最强武器。", "按計畫執行，等於已經完成一半學習。那份執行力是最強武器。", "Làm đúng kế hoạch nghĩa là đã học được một nửa. Khả năng thực thi đó là vũ khí mạnh nhất.", "Mengikuti rencana berarti setengah belajar sudah selesai. Eksekusi itu senjata terkuatmu."),
        ("My study type: Plan Executor 📅 They say I prepare steadily from two weeks out — so true lol → What is yours?", "私の勉強タイプ：計画実践型 📅 2週間前から着実に準備…当たり ㅋㅋ → あなたは？", "我的学习类型：计划实践型 📅 说两周前就开始准备太准哈哈 → 你呢？", "我的學習類型：計畫實踐型 📅 說兩週前就開始準備太準哈哈 → 你呢？", "Kiểu học của tôi: Thực thi kế hoạch 📅 Chuẩn bị từ hai tuần trước — đúng quá haha → Bạn loại nào?", "Tipe belajarku: Pelaksana Rencana 📅 Persiapan dari dua minggu sebelumnya — bener wkwk → Kamu tipe apa?"),
    ),
    _remaining_result(
        ("Someone Who Reviews Even After the Exam, Self-Directed Master Type", "試験後も復習する人、自己主導完成型", "考完还复习的人，自主完成型", "考完還複習的人，自主完成型", "Người vẫn ôn sau kỳ thi, Kiểu tự chủ hoàn thiện", "Orang yang tetap mengulas setelah ujian, Tipe Mandiri Tuntas"),
        ("A complete learner with balanced understanding and memorization", "理解と暗記のバランスが取れた完成型学習者", "理解与记忆平衡的完整型学习者", "理解與記憶平衡的完整型學習者", "Người học hoàn thiện, cân bằng hiểu và nhớ", "Pembelajar lengkap dengan pemahaman dan hafalan seimbang"),
        ("Study is not for the exam. Truly knowing is the goal.", "あなたにとって勉強は試験のためではありません。本当に知ることが目標です。", "对你来说，学习不是为了考试。真正知道才是目标。", "對你來說，學習不是為了考試。真正知道才是目標。", "Học không phải vì kỳ thi. Biết thật sự mới là mục tiêu.", "Belajar bukan untuk ujian. Benar-benar tahu itulah tujuannya."),
        ("Scope mapping, concept structuring, understanding, memorization, review, and condition management — every step is systematic. The night before you wrap up lightly and sleep early. You analyze why you got problems wrong.", "範囲把握・概念構造化・理解・暗記・復習・体調管理まで体系的です。前日は軽く仕上げて早く寝、間違えた問題は理由を分析します。", "范围把握、概念结构化、理解、记忆、复习、状态管理全都系统化。前一晚轻收尾早睡，错题会分析原因。", "範圍把握、概念結構化、理解、記憶、複習、狀態管理全都系統化。前一晚輕收尾早睡，錯題會分析原因。", "Nắm phạm vi, cấu trúc khái niệm, hiểu, nhớ, ôn và quản lý thể trạng — mọi bước đều có hệ thống. Đêm trước kết thúc nhẹ và ngủ sớm. Phân tích vì sao sai.", "Pemetaan cakupan, struktur konsep, paham, hafal, ulasan, dan kondisi — semua langkah sistematis. Malam sebelumnya ringan dan tidur awal. Menganalisis mengapa salah."),
        ("Self-Directed Master Type 🎯", "自己主導完成型 🎯", "自主完成型 🎯", "自主完成型 🎯", "Kiểu tự chủ hoàn thiện 🎯", "Tipe Mandiri Tuntas 🎯"),
        ("System · Understanding + memorization · Review · Analysis · Completion", "体系・理解と暗記のバランス・復習・分析・完成", "体系·理解+记忆平衡·复习·分析·完成", "體系·理解+記憶平衡·複習·分析·完成", "Hệ thống · Hiểu + nhớ · Ôn tập · Phân tích · Hoàn thiện", "Sistem · Pemahaman + hafalan · Ulasan · Analisis · Tuntas"),
        ("Your real ability accumulates, aligns with exam results, and stays in long-term memory.", "実力が本当に積み上がり、試験結果と一致し、長期記憶にも残る。", "实力真正积累，与成绩一致，长期记忆出色。", "實力真正積累，與成績一致，長期記憶出色。", "Năng lực thật sự tích lũy, khớp kết quả thi và nhớ lâu.", "Kemampuan nyata terkumpul, selaras dengan hasil ujian, dan bertahan lama."),
        ("Excessive perfectionism can lead to burnout; learn when 80% is enough.", "完璧主義が強すぎると燃え尽きることも。80%で十分な場合を見分ける。", "过度完美主义会耗尽自己，要分辨80%已足够的时候。", "過度完美主義會耗盡自己，要分辨80%已足夠的時候。", "Cầu toàn quá mức có thể kiệt sức; hãy biết khi nào 80% là đủ.", "Perfeksionisme berlebihan bisa membuat lelah; ketahui kapan 80% cukup."),
        None,
        ("“I want to know this concept exactly.”", "「この概念を正確に知りたいんです」", "“我想准确了解这个概念。”", "「我想準確了解這個概念。」", "“Tôi muốn biết chính xác khái niệm này.”", "“Aku ingin mengetahui konsep ini dengan tepat.”"),
        ("Self-Directed Master Achieved 🎯 A learner equipped for every stage of studying", "自己主導完成型達成 🎯 学習のすべての段階を備えた学習者", "达成自主完成型 🎯 具备学习全部阶段的学习者", "達成自主完成型 🎯 具備學習全部階段的學習者", "Đạt kiểu tự chủ hoàn thiện 🎯 Người học có đủ mọi giai đoạn", "Tercapai Mandiri Tuntas 🎯 Pembelajar dengan semua tahap belajar"),
        ("What you build stays even after the exam ends. That is why this type goes the furthest.", "積み上げたものは試験が終わっても残ります。それがこのタイプが最も遠くへ行ける理由です。", "你积累的东西考试结束后也会留下。这就是此类型能走最远的原因。", "你累積的東西考試結束後也會留下。這就是此類型能走最遠的原因。", "Những gì bạn xây dựng vẫn còn sau khi thi xong. Đó là lý do kiểu này đi xa nhất.", "Yang kamu bangun tetap ada setelah ujian selesai. Itulah mengapa tipe ini melangkah paling jauh."),
        ("My study type: Self-Directed Master 🎯 They say I review even after exams… understanding + memorization + condition management — so true → What is yours?", "私の勉強タイプ：自己主導完成型 🎯 試験後も復習…理解・暗記・体調管理まで、当たり → あなたは？", "我的学习类型：自主完成型 🎯 说考完还复习…理解+记忆+状态管理都有太准 → 你呢？", "我的學習類型：自主完成型 🎯 說考完還複習…理解+記憶+狀態管理都有太準 → 你呢？", "Kiểu học của tôi: Tự chủ hoàn thiện 🎯 Vẫn ôn sau thi… hiểu + nhớ + quản lý thể trạng — đúng quá → Bạn loại nào?", "Tipe belajarku: Mandiri Tuntas 🎯 Masih ulang setelah ujian… paham + hafal + kondisi — bener → Kamu tipe apa?"),
    ),
])
_TYPE_META = [("Type1", "⚡"), ("Type2", "☕"), ("Type3", "📖"), ("Type4", "🔍"), ("Type5", "📅"), ("Type6", "🎯")]
_RESULT_FIELDS = ["title", "studySummary", "quote", "description", "studyType", "studyKeywords", "strengths", "cautions", "studyTip", "typicalPhrase", "certificationPhrase", "oneLiner", "shareLine"]


def _build_questions() -> list[dict]:
    out: list[dict] = []
    for qi, item in enumerate(_Q_I18N):
        question = _with_ko(_ko_q(qi), item["q"])
        options = [(_with_ko(_ko_o(qi, oi), opt), oi) for oi, opt in enumerate(item["opts"])]
        out.append(q(question, options))
    return out


def _field_ml(type_idx: int, field: str, i18n: dict[str, str] | None) -> dict[str, str]:
    ko = _ko_r(type_idx, field)
    if not ko:
        return EMPTY
    if not i18n:
        raise ValueError(f"Missing i18n for result field {field!r} on Type{type_idx + 1}")
    return _with_ko(ko, i18n)


def _build_results() -> list[dict]:
    out: list[dict] = []
    for ti, (type_name, emoji) in enumerate(_TYPE_META):
        i18n = _R_I18N[ti]
        fields = {field: _field_ml(ti, field, i18n.get(field)) for field in _RESULT_FIELDS}
        out.append(r(type_name, emoji, **fields))
    return out


QUESTIONS = _build_questions()
RESULTS = _build_results()
