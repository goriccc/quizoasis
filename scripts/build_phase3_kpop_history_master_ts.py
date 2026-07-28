"""Generate lib/phase3KpopHistoryMasterData.ts with full 7-language localeMap() content."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")

HEADER = """/** K-팝 역사 마스터 테스트 — phase3-kpop-history-master · 12문항 4지선다 · 정답 +1 오답 0 · 7개 로케일 */

export type Phase3KpopHistoryMasterLocaleKey = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id';

function localeMap(t: Record<Phase3KpopHistoryMasterLocaleKey, string>): Record<Phase3KpopHistoryMasterLocaleKey, string> {
  return t;
}

function quizOpt(m: Record<Phase3KpopHistoryMasterLocaleKey, string>, isCorrect: boolean): { text: Record<Phase3KpopHistoryMasterLocaleKey, string>; isCorrect: boolean } {
  return { text: localeMap(m), isCorrect };
}

export interface Phase3KpopHistoryMasterOption {
  text: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  isCorrect: boolean;
}

export interface Phase3KpopHistoryMasterQuestion {
  id: number;
  question: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  options: Phase3KpopHistoryMasterOption[];
  correctExplanation: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  wrongTraps: Record<Phase3KpopHistoryMasterLocaleKey, string>;
}

export interface Phase3KpopHistoryMasterResult {
  type: string;
  emoji: string;
  title: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  shortDescription: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  description: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  historyGrade: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  scoreRange: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  strengthZone: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  weakZone: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  retakeTip: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  characteristic: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  regretPoint: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  certificationPhrase: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  oneLiner: Record<Phase3KpopHistoryMasterLocaleKey, string>;
  shareLine: Record<Phase3KpopHistoryMasterLocaleKey, string>;
}

export function calculatePhase3KpopHistoryMasterResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + (s ?? 0), 0);
  if (total <= 2) return 'Level1';
  if (total <= 5) return 'Level2';
  if (total <= 8) return 'Level3';
  if (total <= 10) return 'Level4';
  return 'Level5';
}

export const phase3KpopHistoryMasterQuestions: Phase3KpopHistoryMasterQuestion[] = [
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


_gen_path = Path(__file__).resolve().parent / "gen_phase3_kpop_history_master_data.py"
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
            en="Debuted in 1996 through SM Entertainment, this group is credited with establishing the agency-led idol system and marking the start of 1st-gen K-Pop. Which group?",
            ja="SMエンターテインメントを通じて1996年にデビューし、企画会社主導のアイドルシステムを初めて定着させ1世代K-POPの始まりを告げたと評価されるグループは？",
            **{"zh-CN": "通过SM Entertainment于1996年出道，该组合被认为首次确立了经纪公司主导的爱豆体系，宣告了1代K-Pop的开始。是哪一个组合？", "zh-TW": "透過SM Entertainment於1996年出道，該組合被認為首次確立了經紀公司主導的偶像體系，宣告了1代K-Pop的開始。是哪一個組合？"},
            vi="Nhóm debut năm 1996 qua SM Entertainment, được cho là thiết lập hệ thống idol do công ty quản lý và mở đầu K-Pop thế hệ 1. Nhóm nào?",
            id="Grup yang debut 1996 lewat SM Entertainment dan dinilai memperkenalkan sistem idol berbasis agensi serta awal K-Pop generasi 1. Grup mana?",
        ),
        [
            opt(M(ko=_ko_o(0, 0), en="Sechs Kies", ja="Sechs Kies", **{"zh-CN": "Sechs Kies", "zh-TW": "Sechs Kies"}, vi="Sechs Kies", id="Sechs Kies"), False),
            opt(M(ko=_ko_o(0, 1), en="Seo Taiji and Boys", ja="Seo Taiji and Boys", **{"zh-CN": "Seo Taiji and Boys", "zh-TW": "Seo Taiji and Boys"}, vi="Seo Taiji and Boys", id="Seo Taiji and Boys"), False),
            opt(M(ko=_ko_o(0, 2), en="god", ja="god", **{"zh-CN": "god", "zh-TW": "god"}, vi="god", id="god"), False),
            opt(M(ko=_ko_o(0, 3), en="H.O.T", ja="H.O.T", **{"zh-CN": "H.O.T", "zh-TW": "H.O.T"}, vi="H.O.T", id="H.O.T"), True),
        ],
        M(
            ko=_ko_e(0),
            en='H.O.T (High-five Of Teenagers) debuted on September 7, 1996 with "Warrior\'s Descendant." They were SM Entertainment\'s first idol group trained through a systematic program, creating fan club and fandom culture—a symbol of 1st-gen K-Pop. Seo Taiji and Boys debuted in 1992 but are classified as pre-agency-system idols.',
            ja="H.O.T(High-five Of Teenagers)は1996年9月7日、デビュー曲「戦士の後裔」でデビューしました。SMが企画しトレーニングシステムで育成した最初のアイドルグループで、ファンクラブ・ファンダム文化を生み出した1世代K-POPの象徴です。서태지와 아이들は1992年デビューですが、企画会社中心システム以前のグループに分類されます。",
            **{"zh-CN": 'H.O.T（High-five Of Teenagers）于1996年9月7日以出道曲《战士的后裔》出道。是SM Entertainment策划并通过训练体系培养的首个偶像组合，开创了粉丝俱乐部与粉丝文化，是1代K-Pop的象征。Seo Taiji and Boys于1992年出道，但属于经纪公司体系之前的组合。', "zh-TW": 'H.O.T（High-five Of Teenagers）於1996年9月7日以出道曲《戰士的後裔》出道。是SM Entertainment策劃並透過訓練體系培養的首個偶像組合，開創了粉絲俱樂部與粉絲文化，是1代K-Pop的象徵。Seo Taiji and Boys於1992年出道，但屬於經紀公司體系之前的組合。'},
            vi='H.O.T (High-five Of Teenagers) debut ngày 7/9/1996 với "Warrior\'s Descendant." Là nhóm idol đầu tiên do SM Entertainment đào tạo theo hệ thống, tạo nên văn hóa fan club và fandom—biểu tượng K-Pop thế hệ 1. Seo Taiji and Boys debut 1992 nhưng thuộc nhóm trước hệ thống công ty quản lý.',
            id='H.O.T (High-five Of Teenagers) debut 7 September 1996 dengan "Warrior\'s Descendant." Grup idol pertama SM Entertainment yang dilatih lewat sistem training, menciptakan budaya fan club dan fandom—simbol K-Pop generasi 1. Seo Taiji and Boys debut 1992 tapi diklasifikasikan sebelum sistem agensi.',
        ),
    ),
    q(
        M(
            ko=_ko_q(1),
            en="Who is NOT a member of 1st-gen girl group S.E.S?",
            ja="1世代代表ガールグループS.E.Sのメンバーではない人は？",
            **{"zh-CN": "1代代表女团S.E.S的成员中，谁不是成员？", "zh-TW": "1代代表女團S.E.S的成員中，誰不是成員？"},
            vi="Ai KHÔNG phải thành viên nhóm nữ S.E.S thế hệ 1?",
            id="Siapa yang BUKAN anggota girl group generasi 1 S.E.S?",
        ),
        [
            opt(M(ko=_ko_o(1, 0), en="Sea", ja="Sea", **{"zh-CN": "Sea", "zh-TW": "Sea"}, vi="Sea", id="Sea"), False),
            opt(M(ko=_ko_o(1, 1), en="Lee Hyori", ja="Lee Hyori", **{"zh-CN": "Lee Hyori", "zh-TW": "Lee Hyori"}, vi="Lee Hyori", id="Lee Hyori"), True),
            opt(M(ko=_ko_o(1, 2), en="Shoo", ja="Shoo", **{"zh-CN": "Shoo", "zh-TW": "Shoo"}, vi="Shoo", id="Shoo"), False),
            opt(M(ko=_ko_o(1, 3), en="Eugene", ja="Eugene", **{"zh-CN": "Eugene", "zh-TW": "Eugene"}, vi="Eugene", id="Eugene"), False),
        ],
        M(
            ko=_ko_e(1),
            en="S.E.S consisted of Sea, Eugene, and Shoo—a leading 1st-gen girl group. The name comes from the first letters of Sea, Eugene, and Shoo. Lee Hyori was a member of Fin.K.L, another 1st-gen girl group. S.E.S and Fin.K.L were the two major girl groups of the era and famous for their fan rivalry.",
            ja="S.E.SはSea・Eugene・Shooの3人で構成された1世代代表ガールグループです。グループ名は3人の英語名の頭文字。Lee Hyoriは同時代1世代ガールグループFin.K.Lのメンバーです。S.E.SとFin.K.Lは1世代ガールグループの二大山脈として知られ、ファン同士のライバル関係でも有名でした。",
            **{"zh-CN": "S.E.S由Sea、Eugene、Shoo三人组成，是1代代表女团。队名取自三人英文名首字母。Lee Hyori是同代1代女团Fin.K.L的成员。S.E.S与Fin.K.L被称为1代女团两大山脉，粉丝间的对立也很有名。", "zh-TW": "S.E.S由Sea、Eugene、Shoo三人組成，是1代代表女團。隊名取自三人英文名首字母。Lee Hyori是同代1代女團Fin.K.L的成員。S.E.S與Fin.K.L被稱為1代女團兩大山脈，粉絲間的對立也很有名。"},
            vi="S.E.S gồm Sea, Eugene và Shoo—nhóm nữ đại diện thế hệ 1. Tên nhóm lấy chữ cái đầu của Sea, Eugene, Shoo. Lee Hyori là thành viên Fin.K.L cùng thời. S.E.S và Fin.K.L là hai ngọn núi của girl group thế hệ 1, nổi tiếng với đối đầu fan.",
            id="S.E.S terdiri dari Sea, Eugene, dan Shoo—girl group generasi 1 terkemuka. Namanya dari huruf awal Sea, Eugene, Shoo. Lee Hyori anggota Fin.K.L sezaman. S.E.S dan Fin.K.L adalah dua pilar girl group generasi 1 dengan rivalitas fan yang terkenal.",
        ),
    ),
    q(
        M(
            ko=_ko_q(2),
            en='Which artist first surpassed 1 billion YouTube views with "Gangnam Style" in 2012, bringing K-Pop to the world?',
            ja="2012年「Gangnam Style」でYouTube史上初の10億再生を突破し、K-POPを世界に知らしめたアーティストは？",
            **{"zh-CN": "2012年以《Gangnam Style》成为YouTube史上首个突破10亿播放，让K-Pop走向世界的艺人是？", "zh-TW": "2012年以《Gangnam Style》成為YouTube史上首個突破10億播放，讓K-Pop走向世界的藝人是？"},
            vi='Nghệ sĩ nào vượt 1 tỷ lượt xem YouTube đầu tiên với "Gangnam Style" năm 2012, đưa K-Pop ra thế giới?',
            id='Artis mana yang pertama kali melampaui 1 miliar views YouTube dengan "Gangnam Style" pada 2012, memperkenalkan K-Pop ke dunia?',
        ),
        [
            opt(M(ko=_ko_o(2, 0), en="Rain", ja="Rain", **{"zh-CN": "Rain", "zh-TW": "Rain"}, vi="Rain", id="Rain"), False),
            opt(M(ko=_ko_o(2, 1), en="BoA", ja="BoA", **{"zh-CN": "BoA", "zh-TW": "BoA"}, vi="BoA", id="BoA"), False),
            opt(M(ko=_ko_o(2, 2), en="2NE1", ja="2NE1", **{"zh-CN": "2NE1", "zh-TW": "2NE1"}, vi="2NE1", id="2NE1"), False),
            opt(M(ko=_ko_o(2, 3), en="PSY", ja="PSY", **{"zh-CN": "PSY", "zh-TW": "PSY"}, vi="PSY", id="PSY"), True),
        ],
        M(
            ko=_ko_e(2),
            en='PSY\'s "Gangnam Style" was released in July 2012 and became the first video to surpass 1 billion YouTube views that December. The counter was not designed to exceed 1 billion, so YouTube had to update it. The song was a turning point that spread K-Pop beyond Asia to North America and Europe.',
            ja="PSYの「Gangnam Style」は2012年7月に発売され、同年12月にYouTube史上初の10億再生を突破しました。当時のカウンターは10億を超えられない設計だったため、YouTube側が修正する必要がありました。K-POPがアジアを超え北米・欧州に知られる決定的なきっかけとなった曲です。",
            **{"zh-CN": "PSY的《Gangnam Style》2012年7月发行，同年12月成为YouTube史上首个突破10亿播放的视频。当时计数器无法超过10亿，YouTube不得不修改系统。这首歌是让K-Pop走出亚洲、走向欧美的重要转折点。", "zh-TW": "PSY的《Gangnam Style》2012年7月發行，同年12月成為YouTube史上首個突破10億播放的影片。當時計數器無法超過10億，YouTube不得不修改系統。這首歌是讓K-Pop走出亞洲、走向歐美的重要轉折點。"},
            vi=' "Gangnam Style" của PSY phát hành tháng 7/2012 và tháng 12 cùng năm trở thành video đầu tiên vượt 1 tỷ view trên YouTube. Bộ đếm lúc đó không thiết kế vượt 1 tỷ nên YouTube phải sửa. Đây là bước ngoặt đưa K-Pop vượt ra khỏi châu Á.',
            id=' "Gangnam Style" PSY dirilis Juli 2012 dan Desember itu menjadi video pertama yang melampaui 1 miliar views di YouTube. Counter saat itu tidak dirancang melewati 1 miliar sehingga YouTube harus memperbaikinya. Lagu ini jadi titik balik K-Pop menembus Asia.',
        ),
    ),
    q(
        M(
            ko=_ko_q(3),
            en="Which group debuted through SM Entertainment in 2003 and is credited with opening the 2nd-gen K-Pop era with explosive popularity across Asia including Japan?",
            ja="2003年SMエンターテインメントを通じてデビューし、日本を含むアジア全域で爆発的人気を得て2世代K-POPの扉を開いたと評価されるグループは？",
            **{"zh-CN": "2003年通过SM Entertainment出道，在日本及全亚洲获得爆炸人气、被认为开启2代K-Pop时代的组合是？", "zh-TW": "2003年透過SM Entertainment出道，在日本及全亞洲獲得爆炸人氣、被認為開啟2代K-Pop時代的組合是？"},
            vi="Nhóm debut qua SM Entertainment năm 2003, nổi tiếng khắp châu Á kể cả Nhật Bản và được cho là mở ra K-Pop thế hệ 2?",
            id="Grup yang debut lewat SM Entertainment 2003 dan dinilai membuka era K-Pop generasi 2 dengan popularitas eksplosif di Asia termasuk Jepang?",
        ),
        [
            opt(M(ko=_ko_o(3, 0), en="Shinhwa", ja="Shinhwa", **{"zh-CN": "Shinhwa", "zh-TW": "Shinhwa"}, vi="Shinhwa", id="Shinhwa"), False),
            opt(M(ko=_ko_o(3, 1), en="god", ja="god", **{"zh-CN": "god", "zh-TW": "god"}, vi="god", id="god"), False),
            opt(M(ko=_ko_o(3, 2), en="TVXQ", ja="TVXQ", **{"zh-CN": "TVXQ", "zh-TW": "TVXQ"}, vi="TVXQ", id="TVXQ"), True),
            opt(M(ko=_ko_o(3, 3), en="SS501", ja="SS501", **{"zh-CN": "SS501", "zh-TW": "SS501"}, vi="SS501", id="SS501"), False),
        ],
        M(
            ko=_ko_e(3),
            en="TVXQ (東方神起) debuted in December 2003 and played a decisive role in spreading K-Pop across Asia by targeting Japan head-on. They were the first foreign artist to succeed with a dome tour in Japan. Their Japanese fan club Cassiopeia, with about 800,000 members, was listed in Guinness World Records as the world's largest fan club.",
            ja="TVXQ（東方神起）は2003年12月にデビューし、日本市場を正面から攻めK-POPのアジア全域への拡散に決定的な役割を果たしました。日本で外国人アーティスト初のドームツアー成功。約80万人の日本ファンクラブCassiopeiaはギネス世界記録に登録された世界最大規模のファンクラブとして知られています。",
            **{"zh-CN": "TVXQ（東方神起）2003年12月出道，正面进军日本市场，在K-Pop向全亚洲扩散中发挥决定性作用。他们是首个在日本成功举办巨蛋巡演的外国艺人。约80万人的日本粉丝俱乐部Cassiopeia曾列入吉尼斯世界纪录，被称为世界最大规模粉丝俱乐部。", "zh-TW": "TVXQ（東方神起）2003年12月出道，正面進軍日本市場，在K-Pop向全亞洲擴散中發揮決定性作用。他們是首個在日本成功舉辦巨蛋巡演的外國藝人。約80萬人的日本粉絲俱樂部Cassiopeia曾列入吉尼斯世界紀錄，被稱為世界最大規模粉絲俱樂部。"},
            vi="TVXQ (東方神起) debut tháng 12/2003, tấn công thẳng thị trường Nhật và giúp K-Pop lan rộng khắp châu Á. Họ là nghệ sĩ nước ngoài đầu tiên tour dome thành công tại Nhật. Fan club Cassiopeia khoảng 800.000 người từng vào Guinness với quy mô lớn nhất thế giới.",
            id="TVXQ (東方神起) debut Desember 2003 dan memperluas K-Pop ke seluruh Asia dengan menargetkan Jepang. Mereka artis asing pertama yang sukses dome tour di Jepang. Fan club Cassiopeia sekitar 800.000 anggota tercatat di Guinness sebagai fan club terbesar di dunia.",
        ),
    ),
    q(
        M(
            ko=_ko_q(4),
            en='BIGBANG, who debuted in 2006 with hits like "Lies," "Bang Bang Bang," and "Haru Haru," belongs to which agency?',
            ja="2006年デビューし「Lies」「Bang Bang Bang」「Haru Haru」など数々のヒットを残した2世代K-POPを代表するBIGBANGの所属事務所は？",
            **{"zh-CN": "2006年出道，留下《Lies》《Bang Bang Bang》《Haru Haru》等众多热曲、代表2代K-Pop的BIGBANG所属公司是？", "zh-TW": "2006年出道，留下《Lies》《Bang Bang Bang》《Haru Haru》等眾多熱曲、代表2代K-Pop的BIGBANG所屬公司是？"},
            vi='BIGBANG debut 2006 với các hit như "Lies," "Bang Bang Bang," "Haru Haru" thuộc công ty quản lý nào?',
            id='BIGBANG yang debut 2006 dengan hit seperti "Lies," "Bang Bang Bang," dan "Haru Haru" bernaung di agensi mana?',
        ),
        [
            opt(M(ko=_ko_o(4, 0), en="SM Entertainment", ja="SM Entertainment", **{"zh-CN": "SM Entertainment", "zh-TW": "SM Entertainment"}, vi="SM Entertainment", id="SM Entertainment"), False),
            opt(M(ko=_ko_o(4, 1), en="JYP Entertainment", ja="JYP Entertainment", **{"zh-CN": "JYP Entertainment", "zh-TW": "JYP Entertainment"}, vi="JYP Entertainment", id="JYP Entertainment"), False),
            opt(M(ko=_ko_o(4, 2), en="YG Entertainment", ja="YG Entertainment", **{"zh-CN": "YG Entertainment", "zh-TW": "YG Entertainment"}, vi="YG Entertainment", id="YG Entertainment"), True),
            opt(M(ko=_ko_o(4, 3), en="Cube Entertainment", ja="Cube Entertainment", **{"zh-CN": "Cube Entertainment", "zh-TW": "Cube Entertainment"}, vi="Cube Entertainment", id="Cube Entertainment"), False),
        ],
        M(
            ko=_ko_e(4),
            en="BIGBANG debuted through YG Entertainment in 2006. YG started as a hip-hop label in 1996 and became one of the Big 3 agencies, launching BIGBANG, 2NE1, WINNER, iKON, BLACKPINK, and more. SM produced H.O.T, TVXQ, Girls' Generation, EXO, and formerly BTS; JYP produced Wonder Girls, 2PM, TWICE, Stray Kids, and more.",
            ja="BIGBANGは2006年YGエンターテインメントを通じてデビューしました。YGは1996年にヒップホップレーベルとして始まり、BIGBANG・2NE1・WINNER・iKON・BLACKPINKなどを輩出したK-POP三大事務所の一つです。SMはH.O.T・TVXQ・少女時代・EXOなど、JYPはWonder Girls・2PM・TWICE・Stray Kidsなどを輩出しました。",
            **{"zh-CN": "BIGBANG于2006年通过YG Entertainment出道。YG始于1996年的嘻哈厂牌，是K-Pop三大公司之一，推出BIGBANG、2NE1、WINNER、iKON、BLACKPINK等。SM推出H.O.T、TVXQ、少女时代、EXO等；JYP推出Wonder Girls、2PM、TWICE、Stray Kids等。", "zh-TW": "BIGBANG於2006年透過YG Entertainment出道。YG始於1996年的嘻哈廠牌，是K-Pop三大公司之一，推出BIGBANG、2NE1、WINNER、iKON、BLACKPINK等。SM推出H.O.T、TVXQ、少女時代、EXO等；JYP推出Wonder Girls、2PM、TWICE、Stray Kids等。"},
            vi="BIGBANG debut qua YG Entertainment năm 2006. YG bắt đầu từ label hip-hop 1996, là một trong Big 3, đưa ra BIGBANG, 2NE1, WINNER, iKON, BLACKPINK... SM có H.O.T, TVXQ, Girls' Generation, EXO; JYP có Wonder Girls, 2PM, TWICE, Stray Kids.",
            id="BIGBANG debut lewat YG Entertainment 2006. YG berawal dari label hip-hop 1996 dan jadi salah satu Big 3, melahirkan BIGBANG, 2NE1, WINNER, iKON, BLACKPINK. SM punya H.O.T, TVXQ, Girls' Generation, EXO; JYP punya Wonder Girls, 2PM, TWICE, Stray Kids.",
        ),
    ),
    q(
        M(
            ko=_ko_q(5),
            en='Girls\' Generation debuted as a 9-member group through SM Entertainment in August 2007. What was their debut song?',
            ja="2007年8月SMエンターテインメントを通じて9人組でデビューし、その後「Gee」「소원을 말해봐」など数々のヒットを記録した少女時代のデビュー曲は？",
            **{"zh-CN": "少女时代2007年8月通过SM Entertainment以9人组出道，之后创下《Gee》《说出你的愿望》等众多热曲。其出道曲是？", "zh-TW": "少女時代2007年8月透過SM Entertainment以9人組出道，之後創下《Gee》《說出你的願望》等眾多熱曲。其出道曲是？"},
            vi="Girls' Generation debut 9 thành viên qua SM Entertainment tháng 8/2007. Bài debut của họ là gì?",
            id="Girls' Generation debut 9 member lewat SM Entertainment Agustus 2007. Lagu debut mereka?",
        ),
        [
            opt(M(ko=_ko_o(5, 0), en="Gee", ja="Gee", **{"zh-CN": "Gee", "zh-TW": "Gee"}, vi="Gee", id="Gee"), False),
            opt(M(ko=_ko_o(5, 1), en="Oh!", ja="Oh!", **{"zh-CN": "Oh!", "zh-TW": "Oh!"}, vi="Oh!", id="Oh!"), False),
            opt(M(ko=_ko_o(5, 2), en="Tell Me Your Wish (Genie)", ja="Tell Me Your Wish (Genie)", **{"zh-CN": "Tell Me Your Wish (Genie)", "zh-TW": "Tell Me Your Wish (Genie)"}, vi="Tell Me Your Wish (Genie)", id="Tell Me Your Wish (Genie)"), False),
            opt(M(ko=_ko_o(5, 3), en="Into the New World", ja="Into the New World", **{"zh-CN": "Into the New World", "zh-TW": "Into the New World"}, vi="Into the New World", id="Into the New World"), True),
        ],
        M(
            ko=_ko_e(5),
            en='Girls\' Generation debuted on August 2, 2007 with "Into the New World." The song has been re-evaluated over time as a classic and remains one of their signature tracks. "Gee" was a 2009 hit, not their debut song.',
            ja="少女時代は2007年8月2日「Into the New World（다시 만난 세계）」でデビューしました。この曲はデビュー当時より後に名曲として再評価され、今も代表曲の一つです。「Gee」は2009年のヒット曲でデビュー曲ではありません。",
            **{"zh-CN": "少女时代于2007年8月2日以《再次重逢的世界（Into the New World）》出道。这首歌随时间被重新评价为名曲，至今仍是代表作之一。《Gee》是2009年热曲，不是出道曲。", "zh-TW": "少女時代於2007年8月2日以《再次重逢的世界（Into the New World）》出道。這首歌隨時間被重新評價為名曲，至今仍是代表作之一。《Gee》是2009年熱曲，不是出道曲。"},
            vi='Girls\' Generation debut ngày 2/8/2007 với "Into the New World." Bài hát được tái đánh giá thành kinh điển theo thời gian. "Gee" là hit 2009, không phải bài debut.',
            id='Girls\' Generation debut 2 Agustus 2007 dengan "Into the New World." Lagu ini makin lama makin diakui sebagai klasik. "Gee" hit 2009, bukan lagu debut.',
        ),
    ),
    q(
        M(
            ko=_ko_q(6),
            en='BTS debuted through Big Hit Entertainment (now HYBE) with "No More Dream." Which debut date is correct?',
            ja="2013年Big Hit Entertainment（現HYBE）を通じてデビュー曲「No More Dream」でデビューしたBTSのデビュー年と日付として正しいものは？",
            **{"zh-CN": "BTS于2013年通过Big Hit Entertainment（现HYBE）以《No More Dream》出道。正确的出道日期是？", "zh-TW": "BTS於2013年透過Big Hit Entertainment（現HYBE）以《No More Dream》出道。正確的出道日期是？"},
            vi='BTS debut qua Big Hit Entertainment (nay HYBE) với "No More Dream." Ngày debut đúng là?',
            id='BTS debut lewat Big Hit Entertainment (sekarang HYBE) dengan "No More Dream." Tanggal debut yang benar?',
        ),
        [
            opt(M(ko=_ko_o(6, 0), en="June 13, 2012", ja="2012年6月13日", **{"zh-CN": "2012年6月13日", "zh-TW": "2012年6月13日"}, vi="13 tháng 6, 2012", id="13 Juni 2012"), False),
            opt(M(ko=_ko_o(6, 1), en="May 13, 2013", ja="2013年5月13日", **{"zh-CN": "2013年5月13日", "zh-TW": "2013年5月13日"}, vi="13 tháng 5, 2013", id="13 Mei 2013"), False),
            opt(M(ko=_ko_o(6, 2), en="June 13, 2013", ja="2013年6月13日", **{"zh-CN": "2013年6月13日", "zh-TW": "2013年6月13日"}, vi="13 tháng 6, 2013", id="13 Juni 2013"), True),
            opt(M(ko=_ko_o(6, 3), en="June 13, 2014", ja="2014年6月13日", **{"zh-CN": "2014年6月13日", "zh-TW": "2014年6月13日"}, vi="13 tháng 6, 2014", id="13 Juni 2014"), False),
        ],
        M(
            ko=_ko_e(6),
            en='BTS debuted on June 13, 2013 with "No More Dream." They were not widely noticed at first but grew into a global top group through self-produced content and SNS engagement, building the ARMY fandom. June 13 is celebrated annually by ARMY as BTS debut day.',
            ja="BTSは2013年6月13日、デビュー曲「No More Dream」でデビューしました。デビュー当時は注目されませんでしたが、自社制作コンテンツとSNSコミュニケーションでファンダムARMYを育て、世界トップのK-POPグループに成長しました。毎年6月13日はARMYが記念するBTSデビュー記念日です。",
            **{"zh-CN": "BTS于2013年6月13日以《No More Dream》出道。出道初期未受关注，但凭借自制内容与SNS互动培养ARMY粉丝群，成长为全球顶级K-Pop组合。每年6月13日是ARMY纪念的BTS出道日。", "zh-TW": "BTS於2013年6月13日以《No More Dream》出道。出道初期未受關注，但憑藉自製內容與SNS互動培養ARMY粉絲群，成長為全球頂級K-Pop組合。每年6月13日是ARMY紀念的BTS出道日。"},
            vi='BTS debut ngày 13/6/2013 với "No More Dream." Ban đầu ít được chú ý nhưng phát triển nhờ nội dung tự sản xuất và SNS, xây fandom ARMY. Ngày 13/6 hàng năm là ngày kỷ niệm debut của ARMY.',
            id='BTS debut 13 Juni 2013 dengan "No More Dream." Awalnya kurang diperhatikan tapi tumbuh lewat konten buatan sendiri dan SNS, membangun fandom ARMY. 13 Juni setiap tahun dirayakan ARMY sebagai hari debut BTS.',
        ),
    ),
    q(
        M(
            ko=_ko_q(7),
            en='Wonder Girls caused the "Tell Me" syndrome in 2007. Which agency were they under?',
            ja="2007年「Tell Me」シンドロームを起こし、K-POPガールグループの新しい歴史を書いたWonder Girlsの所属事務所は？",
            **{"zh-CN": "2007年引发《Tell Me》热潮、书写K-Pop女团新历史的Wonder Girls所属公司是？", "zh-TW": "2007年引發《Tell Me》熱潮、書寫K-Pop女團新歷史的Wonder Girls所屬公司是？"},
            vi='Wonder Girls gây cơn sốt "Tell Me" năm 2007 thuộc công ty quản lý nào?',
            id='Wonder Girls yang memicu sindrom "Tell Me" 2007 bernaung di agensi mana?',
        ),
        [
            opt(M(ko=_ko_o(7, 0), en="SM Entertainment", ja="SM Entertainment", **{"zh-CN": "SM Entertainment", "zh-TW": "SM Entertainment"}, vi="SM Entertainment", id="SM Entertainment"), False),
            opt(M(ko=_ko_o(7, 1), en="JYP Entertainment", ja="JYP Entertainment", **{"zh-CN": "JYP Entertainment", "zh-TW": "JYP Entertainment"}, vi="JYP Entertainment", id="JYP Entertainment"), True),
            opt(M(ko=_ko_o(7, 2), en="YG Entertainment", ja="YG Entertainment", **{"zh-CN": "YG Entertainment", "zh-TW": "YG Entertainment"}, vi="YG Entertainment", id="YG Entertainment"), False),
            opt(M(ko=_ko_o(7, 3), en="Starship Entertainment", ja="Starship Entertainment", **{"zh-CN": "Starship Entertainment", "zh-TW": "Starship Entertainment"}, vi="Starship Entertainment", id="Starship Entertainment"), False),
        ],
        M(
            ko=_ko_e(7),
            en='Wonder Girls debuted through JYP Entertainment in 2007. "Tell Me" released that year sparked a nationwide "Tell Me dance" craze—from kindergarteners to office workers and even lawmakers. They later became the first Korean act to enter the Billboard Hot 100 with "Nobody" (2009).',
            ja="Wonder Girlsは2007年JYPエンターテインメントを通じてデビューしました。同年発売の「Tell Me」は全国規模の「テルミダンス」ブームを起こし、幼稚園児から会社員・国会議員まで踊る社会現象になりました。その後「Nobody」で韓国歌手初のBillboard HOT 100入りを達成しました。",
            **{"zh-CN": "Wonder Girls于2007年通过JYP Entertainment出道。同年发行的《Tell Me》引发全国“Tell Me舞”热潮，从幼儿园到上班族、国会议员都在跳。之后以《Nobody》成为首个进入Billboard Hot 100的韩国歌手。", "zh-TW": "Wonder Girls於2007年透過JYP Entertainment出道。同年發行的《Tell Me》引發全國「Tell Me舞」熱潮，從幼兒園到上班族、國會議員都在跳。之後以《Nobody》成為首個進入Billboard Hot 100的韓國歌手。"},
            vi='Wonder Girls debut qua JYP Entertainment 2007. "Tell Me" cùng năm gây cơn sốt "Tell Me dance" toàn quốc. Sau đó "Nobody" giúp họ trở thành nghệ sĩ Hàn đầu tiên vào Billboard Hot 100.',
            id='Wonder Girls debut lewat JYP Entertainment 2007. "Tell Me" tahun itu memicu fenomena "Tell Me dance" nasional. Kemudian "Nobody" jadi entri Hot 100 Billboard pertama dari artis Korea.',
        ),
    ),
    q(
        M(
            ko=_ko_q(8),
            en="In what year did H.O.T, the symbol of 1st-gen K-Pop idols, officially disband?",
            ja="1世代K-POPアイドルの象徴H.O.Tが公式に解散した年は？",
            **{"zh-CN": "作为1代K-Pop偶像象征的H.O.T正式解散的年份是？", "zh-TW": "作為1代K-Pop偶像象徵的H.O.T正式解散的年份是？"},
            vi="H.O.T, biểu tượng idol K-Pop thế hệ 1, chính thức tan rã năm nào?",
            id="Tahun berapa H.O.T, simbol idol K-Pop generasi 1, resmi bubar?",
        ),
        [
            opt(M(ko=_ko_o(8, 0), en="1999", ja="1999年", **{"zh-CN": "1999年", "zh-TW": "1999年"}, vi="1999", id="1999"), False),
            opt(M(ko=_ko_o(8, 1), en="2000", ja="2000年", **{"zh-CN": "2000年", "zh-TW": "2000年"}, vi="2000", id="2000"), False),
            opt(M(ko=_ko_o(8, 2), en="2001", ja="2001年", **{"zh-CN": "2001年", "zh-TW": "2001年"}, vi="2001", id="2001"), True),
            opt(M(ko=_ko_o(8, 3), en="2003", ja="2003年", **{"zh-CN": "2003年", "zh-TW": "2003年"}, vi="2003", id="2003"), False),
        ],
        M(
            ko=_ko_e(8),
            en="H.O.T officially disbanded in May 2001 due to contract issues with SM Entertainment and internal conflicts. Fans were so shocked that hundreds protested in front of SM. In 2017, they reunited on MBC's Infinite Challenge 'Saturday Miracle' special, fulfilling a long-held fan wish.",
            ja="H.O.Tは2001年5月にSMエンターテインメントとの契約問題とメンバー間の対立が重なり公式解散しました。ファンの衝撃が大きく、数百人がSM前で抗議しました。2017年MBC「無限挑戦」土曜日の奇跡編で完全体再結集ステージを披露し、ファンの長年の願いが叶いました。",
            **{"zh-CN": "H.O.T于2001年5月因与SM Entertainment的合约问题及成员分歧正式解散。粉丝震惊，数百人在SM前抗议。2017年在MBC《无限挑战》周六的奇迹特辑中完整合体，实现了粉丝多年心愿。", "zh-TW": "H.O.T於2001年5月因與SM Entertainment的合約問題及成員分歧正式解散。粉絲震驚，數百人在SM前抗議。2017年在MBC《無限挑戰》週六的奇蹟特輯中完整合體，實現了粉絲多年心願。"},
            vi="H.O.T chính thức tan rã tháng 5/2001 do vấn đề hợp đồng với SM và mâu thuẫn nội bộ. Fan sốc đến mức hàng trăm người biểu tình trước SM. Năm 2017 họ tái hợp trên Infinite Challenge 'Saturday Miracle'.",
            id="H.O.T resmi bubar Mei 2001 karena masalah kontrak dengan SM dan konflik internal. Fan sangat syok hingga ratusan protes di depan SM. 2017 mereka reunite di Infinite Challenge 'Saturday Miracle'.",
        ),
    ),
    q(
        M(
            ko=_ko_q(9),
            en="Which song made BTS the first K-Pop group to reach No. 1 on the US Billboard Hot 100 in 2020?",
            ja="2020年BTSがK-POPグループ初の米Billboard HOT 100 1位を達成した曲は？",
            **{"zh-CN": "2020年BTS成为首个登顶美国Billboard Hot 100的K-Pop组合，是哪首歌？", "zh-TW": "2020年BTS成為首個登頂美國Billboard Hot 100的K-Pop組合，是哪首歌？"},
            vi="Bài nào giúp BTS trở thành nhóm K-Pop đầu tiên đạt No.1 Billboard Hot 100 Mỹ năm 2020?",
            id="Lagu mana yang membuat BTS jadi grup K-Pop pertama No. 1 di Billboard Hot 100 AS pada 2020?",
        ),
        [
            opt(M(ko=_ko_o(9, 0), en="Boy With Luv (Feat. Halsey)", ja="Boy With Luv (Feat. Halsey)", **{"zh-CN": "Boy With Luv (Feat. Halsey)", "zh-TW": "Boy With Luv (Feat. Halsey)"}, vi="Boy With Luv (Feat. Halsey)", id="Boy With Luv (Feat. Halsey)"), False),
            opt(M(ko=_ko_o(9, 1), en="Butter", ja="Butter", **{"zh-CN": "Butter", "zh-TW": "Butter"}, vi="Butter", id="Butter"), False),
            opt(M(ko=_ko_o(9, 2), en="Permission to Dance", ja="Permission to Dance", **{"zh-CN": "Permission to Dance", "zh-TW": "Permission to Dance"}, vi="Permission to Dance", id="Permission to Dance"), False),
            opt(M(ko=_ko_o(9, 3), en="Dynamite", ja="Dynamite", **{"zh-CN": "Dynamite", "zh-TW": "Dynamite"}, vi="Dynamite", id="Dynamite"), True),
        ],
        M(
            ko=_ko_e(9),
            en='BTS\'s English track "Dynamite" reached No. 1 on the Billboard Hot 100 on September 5, 2020—the first for a K-Pop group. The previous Korean record was Wonder Girls\' "Nobody" (No. 76, 2009). BTS also hit No. 1 later that year with the "Savage Love" remix and in 2021 with "Butter" and "Permission to Dance."',
            ja="BTSの英語曲「Dynamite」は2020年9月5日にBillboard HOT 100 1位を達成し、K-POPグループ初の記録となりました。それ以前の韓国歌手最高順位はWonder Girlsの「Nobody」（76位、2009）でした。その後BTSは同年「Savage Love」リミックス、2021年には「Butter」「Permission to Dance」でも1位を記録しました。",
            **{"zh-CN": "BTS英文曲《Dynamite》于2020年9月5日登顶Billboard Hot 100，是K-Pop组合首次。此前韩国歌手最高纪录是Wonder Girls的《Nobody》（第76位，2009）。之后BTS同年以《Savage Love》混音、2021年以《Butter》《Permission to Dance》再次夺冠。", "zh-TW": "BTS英文曲《Dynamite》於2020年9月5日登頂Billboard Hot 100，是K-Pop組合首次。此前韓國歌手最高紀錄是Wonder Girls的《Nobody》（第76位，2009）。之後BTS同年以《Savage Love》混音、2021年以《Butter》《Permission to Dance》再次奪冠。"},
            vi='Bài tiếng Anh "Dynamite" của BTS đạt No.1 Hot 100 ngày 5/9/2020—lần đầu của nhóm K-Pop. Kỷ lục trước đó là "Nobody" của Wonder Girls (No.76, 2009). Sau đó BTS còn No.1 với remix "Savage Love" cùng năm và "Butter", "Permission to Dance" năm 2021.',
            id='Lagu Inggris BTS "Dynamite" mencapai No. 1 Hot 100 pada 5 September 2020—pertama untuk grup K-Pop. Rekor Korea sebelumnya "Nobody" Wonder Girls (No. 76, 2009). BTS juga No. 1 dengan remix "Savage Love" tahun itu dan "Butter", "Permission to Dance" 2021.',
        ),
    ),
    q(
        M(
            ko=_ko_q(10),
            en='SHINee debuted in 2008 and built the SHINee World fandom with hits like "Ring Ding Dong" and "Lucifer." What was their debut song?',
            ja="2008年デビューし「Ring Ding Dong」「Lucifer」「SHINee World」などでファンダムSHINee Worldを形成したSHINeeのデビュー曲は？",
            **{"zh-CN": "SHINee于2008年出道，以《Ring Ding Dong》《Lucifer》等形成SHINee World粉丝圈。其出道曲是？", "zh-TW": "SHINee於2008年出道，以《Ring Ding Dong》《Lucifer》等形成SHINee World粉絲圈。其出道曲是？"},
            vi='SHINee debut 2008, xây fandom SHINee World với các hit như "Ring Ding Dong," "Lucifer." Bài debut là gì?',
            id='SHINee debut 2008 dan membangun fandom SHINee World dengan hit seperti "Ring Ding Dong," "Lucifer." Lagu debut mereka?',
        ),
        [
            opt(M(ko=_ko_o(10, 0), en="Ring Ding Dong", ja="Ring Ding Dong", **{"zh-CN": "Ring Ding Dong", "zh-TW": "Ring Ding Dong"}, vi="Ring Ding Dong", id="Ring Ding Dong"), False),
            opt(M(ko=_ko_o(10, 1), en="Lucifer", ja="Lucifer", **{"zh-CN": "Lucifer", "zh-TW": "Lucifer"}, vi="Lucifer", id="Lucifer"), False),
            opt(M(ko=_ko_o(10, 2), en="Sherlock", ja="Sherlock", **{"zh-CN": "Sherlock", "zh-TW": "Sherlock"}, vi="Sherlock", id="Sherlock"), False),
            opt(M(ko=_ko_o(10, 3), en="Replay (Noona Neomu Yeppeo)", ja="Replay (Noona Neomu Yeppeo)", **{"zh-CN": "Replay (Noona Neomu Yeppeo)", "zh-TW": "Replay (Noona Neomu Yeppeo)"}, vi="Replay (Noona Neomu Yeppeo)", id="Replay (Noona Neomu Yeppeo)"), True),
        ],
        M(
            ko=_ko_e(10),
            en='SHINee debuted on May 22, 2008 with "Replay (Noona Neomu Yeppeo)." Youngest member Taemin was only 14 at debut, and the "noona" in the title charmed fans. "Ring Ding Dong" (2009), "Lucifer" (2010), and "Sherlock" (2012) came later.',
            ja="SHINeeは2008年5月22日「Replay（누난 너무 예뻐）」でデビューしました。デビュー当時最年少のテミンは満14歳で、「누나」が入ったタイトルがファンの心を掴みました。「Ring Ding Dong」は2009年、「Lucifer」は2010年、「Sherlock」は2012年の曲です。",
            **{"zh-CN": "SHINee于2008年5月22日以《Replay（姐姐真漂亮）》出道。当时最年幼的成员Taemin仅14岁，标题中的“姐姐”俘获了粉丝。《Ring Ding Dong》（2009）、《Lucifer》（2010）、《Sherlock》（2012）是后续作品。", "zh-TW": "SHINee於2008年5月22日以《Replay（姐姐真漂亮）》出道。當時最年幼的成員Taemin僅14歲，標題中的「姐姐」俘獲了粉絲。《Ring Ding Dong》（2009）、《Lucifer》（2010）、《Sherlock》（2012）是後續作品。"},
            vi='SHINee debut ngày 22/5/2008 với "Replay (Noona Neomu Yeppeo)." Taemin lúc debut mới 14 tuổi, từ "noona" trong tên bài hút fan. "Ring Ding Dong" (2009), "Lucifer" (2010), "Sherlock" (2012) ra sau.',
            id='SHINee debut 22 Mei 2008 dengan "Replay (Noona Neomu Yeppeo)." Taemin saat debut baru 14 tahun, kata "noona" di judul memikat fan. "Ring Ding Dong" (2009), "Lucifer" (2010), "Sherlock" (2012) dirilis kemudian.',
        ),
    ),
    q(
        M(
            ko=_ko_q(11),
            en="Which 4-member girl group debuted through SM Entertainment in 2020 with a metaverse concept where real members coexist with AI avatars 'æ-', leading 4th-gen K-Pop?",
            ja="2020年SMエンターテインメントを通じてデビューし、現実のメンバーとメタバース世界のAIアバター「æ-」が共存する独創的世界観で4世代K-POPを牽引する4人組ガールグループは？",
            **{"zh-CN": "2020年通过SM Entertainment出道的4人女团，以现实成员与元宇宙AI虚拟形象“æ-”共存的独特世界观引领4代K-Pop，是？", "zh-TW": "2020年透過SM Entertainment出道的4人女團，以現實成員與元宇宙AI虛擬形象「æ-」共存的獨特世界觀引領4代K-Pop，是？"},
            vi="Nhóm nữ 4 thành viên debut qua SM Entertainment 2020, dẫn dắt K-Pop thế hệ 4 với concept metaverse nơi thành viên thật cùng tồn tại với avatar AI 'æ-'?",
            id="Girl group 4 member debut lewat SM Entertainment 2020 dengan konsep metaverse di mana member nyata hidup berdampingan dengan avatar AI 'æ-', memimpin K-Pop generasi 4?",
        ),
        [
            opt(M(ko=_ko_o(11, 0), en="ITZY", ja="ITZY", **{"zh-CN": "ITZY", "zh-TW": "ITZY"}, vi="ITZY", id="ITZY"), False),
            opt(M(ko=_ko_o(11, 1), en="LE SSERAFIM", ja="LE SSERAFIM", **{"zh-CN": "LE SSERAFIM", "zh-TW": "LE SSERAFIM"}, vi="LE SSERAFIM", id="LE SSERAFIM"), False),
            opt(M(ko=_ko_o(11, 2), en="NewJeans", ja="NewJeans", **{"zh-CN": "NewJeans", "zh-TW": "NewJeans"}, vi="NewJeans", id="NewJeans"), False),
            opt(M(ko=_ko_o(11, 3), en="aespa", ja="aespa", **{"zh-CN": "aespa", "zh-TW": "aespa"}, vi="aespa", id="aespa"), True),
        ],
        M(
            ko=_ko_e(11),
            en="aespa debuted through SM Entertainment on November 17, 2020. The name combines Avatar, Experience, and Aspect. Real members (Karina, Giselle, Winter, Ningning) coexist with AI avatars like 'æ-Karina' and 'æ-Giselle' in a metaverse worldview. ITZY is under JYP; LE SSERAFIM (SOURCE MUSIC) and NewJeans (ADOR) are under HYBE.",
            ja="aespaは2020年11月17日SMエンターテインメントを通じてデビューしました。グループ名はAvatar・Experience・Aspectの造語。現実メンバー（Karina・Giselle・Winter・Ningning）と「æ-Karina」「æ-Giselle」などのAIアバターが共存するメタバース世界観が特徴です。ITZYはJYP、LE SSERAFIM（SOURCE MUSIC）とNewJeans（ADOR）はHYBE傘下です。",
            **{"zh-CN": "aespa于2020年11月17日通过SM Entertainment出道。队名融合Avatar、Experience、Aspect。现实成员（Karina、Giselle、Winter、Ningning）与“æ-Karina”“æ-Giselle”等AI虚拟形象共存的元宇宙世界观是特色。ITZY属JYP；LE SSERAFIM（SOURCE MUSIC）与NewJeans（ADOR）属HYBE。", "zh-TW": "aespa於2020年11月17日透過SM Entertainment出道。隊名融合Avatar、Experience、Aspect。現實成員（Karina、Giselle、Winter、Ningning）與「æ-Karina」「æ-Giselle」等AI虛擬形象共存的元宇宙世界觀是特色。ITZY屬JYP；LE SSERAFIM（SOURCE MUSIC）與NewJeans（ADOR）屬HYBE。"},
            vi="aespa debut qua SM Entertainment ngày 17/11/2020. Tên ghép từ Avatar, Experience, Aspect. Member thật (Karina, Giselle, Winter, Ningning) cùng avatar AI như 'æ-Karina' trong metaverse. ITZY thuộc JYP; LE SSERAFIM (SOURCE MUSIC) và NewJeans (ADOR) thuộc HYBE.",
            id="aespa debut lewat SM Entertainment 17 November 2020. Namanya gabungan Avatar, Experience, Aspect. Member nyata (Karina, Giselle, Winter, Ningning) hidup berdampingan avatar AI seperti 'æ-Karina' di metaverse. ITZY di JYP; LE SSERAFIM (SOURCE MUSIC) dan NewJeans (ADOR) di HYBE.",
        ),
    ),
]

RESULTS = [
    r(
        "Level1",
        "🌱",
        title=M(
            ko=_ko_r(0, "title"),
            en="You love K-Pop but history is new—Beginner Fan 🌱",
            ja="K-POPは好きだけど歴史は初めて、入門ファン 🌱",
            **{"zh-CN": "喜欢K-Pop但历史刚入门，新手粉丝 🌱", "zh-TW": "喜歡K-Pop但歷史剛入門，新手粉絲 🌱"},
            vi="Thích K-Pop nhưng lịch sử còn mới—Fan mới 🌱",
            id="Suka K-Pop tapi sejarah masih baru—Fan pemula 🌱",
        ),
        shortDescription=M(
            ko=_ko_r(0, "shortDescription"),
            en="You got 2 or fewer correct. You know current artists well, but K-Pop history still feels unfamiliar.",
            ja="12問中2問以下正解。今活動中のアーティストはよく知っているが、K-POPの歴史はまだ馴染みが薄い段階です。",
            **{"zh-CN": "12题中答对2题及以下。熟悉现役艺人，但K-Pop历史仍较陌生。", "zh-TW": "12題中答對2題及以下。熟悉現役藝人，但K-Pop歷史仍較陌生。"},
            vi="Trả lời đúng 2 câu trở xuống. Bạn biết nghệ sĩ đang hoạt động nhưng lịch sử K-Pop còn xa lạ.",
            id="Benar 2 atau kurang. Kamu paham artis aktif, tapi sejarah K-Pop masih asing.",
        ),
        description=M(
            ko=_ko_r(0, "description"),
            en="Today you probably realized how many senior artists came before your favorites. Without H.O.T, today's K-Pop might not exist. Watching 1st-gen videos one by one can be surprisingly fun.",
            ja="今好きなアイドルができるまでにどれだけ先輩がいたか、今日初めて感じたはずです。H.O.Tがなければ今のK-POPもありません。1世代の映像から一つずつ見るのもかなり楽しい体験です。",
            **{"zh-CN": "今天你可能第一次感受到，在你喜欢的偶像之前有多少前辈。没有H.O.T，也许就没有今天的K-Pop。从1代视频一个个看也很有意思。", "zh-TW": "今天你可能第一次感受到，在你喜歡的偶像之前有多少前輩。沒有H.O.T，也許就沒有今天的K-Pop。從1代影片一個個看也很有意思。"},
            vi="Hôm nay bạn có lẽ mới thấy trước idol yêu thích có bao nhiêu tiền bối. Không có H.O.T thì có lẽ không có K-Pop ngày nay. Xem video thế hệ 1 từng cái cũng rất vui.",
            id="Hari ini kamu mungkin baru sadar ada banyak senior sebelum idol favoritmu. Tanpa H.O.T mungkin tidak ada K-Pop sekarang. Menonton video generasi 1 satu per satu juga seru.",
        ),
        historyGrade=M(
            ko=_ko_r(0, "historyGrade"),
            en="K-Pop History Grade: Lv.1 Beginner Fan 🌱",
            ja="K-POP歴史等級: Lv.1 入門ファン 🌱",
            **{"zh-CN": "K-Pop历史等级：Lv.1 新手粉丝 🌱", "zh-TW": "K-Pop歷史等級：Lv.1 新手粉絲 🌱"},
            vi="Cấp lịch sử K-Pop: Lv.1 Fan mới 🌱",
            id="Grade sejarah K-Pop: Lv.1 Fan pemula 🌱",
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
            en="Retake tip: Read today's wrong-answer explanations and memorize each generation's representative groups",
            ja="再挑戦のコツ: 今日間違えた問題の解説を読み、各世代の代表グループ名を覚える",
            **{"zh-CN": "重试提示：阅读今天错题的解析，记住各代代表组合名", "zh-TW": "重試提示：閱讀今天錯題的解析，記住各代代表組合名"},
            vi="Mẹo thử lại: Đọc giải thích câu sai hôm nay và thuộc tên nhóm đại diện từng thế hệ",
            id="Tips ulang: Baca penjelasan jawaban salah hari ini dan hafal nama grup representatif tiap generasi",
        ),
        characteristic=EMPTY,
        regretPoint=EMPTY,
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(0, "oneLiner"),
            en="Knowing K-Pop history makes the idols you love now feel even more special",
            ja="K-POPの歴史を知ると、今好きなアイドルがより特別に見えます",
            **{"zh-CN": "了解K-Pop历史，会让你现在喜欢的偶像更特别", "zh-TW": "了解K-Pop歷史，會讓你現在喜歡的偶像更特別"},
            vi="Biết lịch sử K-Pop sẽ khiến idol bạn yêu thích giờ đây đặc biệt hơn",
            id="Mengenal sejarah K-Pop membuat idol favoritmu sekarang terasa lebih spesial",
        ),
        shareLine=M(
            ko=_ko_r(0, "shareLine"),
            en="K-Pop History Test: Lv.1 Beginner Fan 🌱 Thought Girls' Generation debuted with Gee... learned today it's Into the New World 😭 → How many can you get? Try it!",
            ja="K-POP歴史テスト: Lv.1 入門ファン 🌱 少女時代のデビュー曲がGeeだと思ってた…Into the New Worldだったの今日知った ㅠ → K-POP歴史いくつ正解？挑戦して",
            **{"zh-CN": "K-Pop历史测试：Lv.1 新手粉丝 🌱 以为少女时代出道曲是Gee…今天才知道是再次重逢的世界 😭 → 你能对几题？来挑战！", "zh-TW": "K-Pop歷史測試：Lv.1 新手粉絲 🌱 以為少女時代出道曲是Gee…今天才知道是再次重逢的世界 😭 → 你能對幾題？來挑戰！"},
            vi="Test lịch sử K-Pop: Lv.1 Fan mới 🌱 Tưởng Girls' Generation debut với Gee... hôm nay mới biết là Into the New World 😭 → Bạn đúng mấy câu? Thử đi!",
            id="Tes sejarah K-Pop: Lv.1 Fan pemula 🌱 Kira Girls' Generation debut dengan Gee... baru tahu Into the New World 😭 → Kamu benar berapa? Coba!",
        ),
    ),
    r(
        "Level2",
        "🎤",
        title=M(
            ko=_ko_r(1, "title"),
            en="You know the current era but only names from the past—Current-Gen Fan 🎤",
            ja="現世代は知っていて昔は名前だけ、現世代ファン 🎤",
            **{"zh-CN": "熟悉当代，旧时代只知名字，当代粉丝 🎤", "zh-TW": "熟悉當代，舊時代只知名字，當代粉絲 🎤"},
            vi="Biết thời đại hiện tại, quá khứ chỉ biết tên—Fan thế hệ mới 🎤",
            id="Tahu era sekarang, masa lalu cuma nama—Fan generasi kini 🎤",
        ),
        shortDescription=M(
            ko=_ko_r(1, "shortDescription"),
            en="You got familiar artists right but started stumbling on 1st-gen details. Average level.",
            ja="馴染みのあるアーティストは当てたが、1世代の細部知識でつまずき始めました。平均レベルです。",
            **{"zh-CN": "熟悉的艺人答对了，但在1代细节知识上开始卡住。平均水平。", "zh-TW": "熟悉的藝人答對了，但在1代細節知識上開始卡住。平均水平。"},
            vi="Bạn đúng nghệ sĩ quen thuộc nhưng vấp ở chi tiết thế hệ 1. Mức trung bình.",
            id="Artis familiar benar, tapi mulai mentok di detail generasi 1. Level rata-rata.",
        ),
        description=M(
            ko=_ko_r(1, "description"),
            en="You know a fair amount from 2nd gen onward, but specifics like debut years, disbandment years, and member lineups from 1st gen have gaps. You may have mixed up S.E.S and Fin.K.L or missed H.O.T's disbandment year.",
            ja="2世代以降はかなり知っていますが、1世代のデビュー年・解散年・メンバー構成など具体的な事実に空白が多い段階です。S.E.SとFin.K.Lを混同したり、H.O.Tの解散年を知らなかった可能性が高いです。",
            **{"zh-CN": "2代以后了解不少，但1代的出道年、解散年、成员构成等具体事实还有空白。可能混淆S.E.S与Fin.K.L，或不知道H.O.T解散年份。", "zh-TW": "2代以後了解不少，但1代的出道年、解散年、成員構成等具體事實還有空白。可能混淆S.E.S與Fin.K.L，或不知道H.O.T解散年份。"},
            vi="Bạn khá rõ từ thế hệ 2 trở đi, nhưng thiếu chi tiết thế hệ 1 như năm debut, tan rã, thành viên. Có thể nhầm S.E.S với Fin.K.L hoặc không biết năm H.O.T tan rã.",
            id="Kamu cukup paham dari generasi 2 ke atas, tapi detail generasi 1 seperti tahun debut, bubar, lineup masih bolong. Mungkin campur S.E.S dan Fin.K.L atau tidak tahu tahun bubar H.O.T.",
        ),
        historyGrade=M(
            ko=_ko_r(1, "historyGrade"),
            en="K-Pop History Grade: Lv.2 Current-Gen Fan 🎤",
            ja="K-POP歴史等級: Lv.2 現世代ファン 🎤",
            **{"zh-CN": "K-Pop历史等级：Lv.2 当代粉丝 🎤", "zh-TW": "K-Pop歷史等級：Lv.2 當代粉絲 🎤"},
            vi="Cấp lịch sử K-Pop: Lv.2 Fan thế hệ mới 🎤",
            id="Grade sejarah K-Pop: Lv.2 Fan generasi kini 🎤",
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
            ko=_ko_r(1, "oneLiner"),
            en="You know the present era well. Look back a little and you'll become an expert",
            ja="今の時代はよく知っています。少しだけ振り返れば上級者になれます",
            **{"zh-CN": "你很了解当下。稍微回头看看就能成为高手", "zh-TW": "你很了解當下。稍微回頭看看就能成為高手"},
            vi="Bạn rất rõ thời đại hiện tại. Nhìn lại một chút là thành cao thủ",
            id="Kamu paham era sekarang. Sedikit melihat ke belakang dan kamu jadi ahli",
        ),
        shareLine=M(
            ko=_ko_r(1, "shareLine"),
            en="K-Pop History Test: Lv.2 Current-Gen Fan 🎤 Got that Lee Hyori isn't in S.E.S, but stuck on H.O.T disbandment year... → How many can you get? Fan pride test",
            ja="K-POP歴史テスト: Lv.2 現世代ファン 🎤 S.E.SにLee Hyoriがいないのは当てたのにH.O.T解散年で止まった… → K-POP歴史いくつ正解？ファンダムプライドテスト",
            **{"zh-CN": "K-Pop历史测试：Lv.2 当代粉丝 🎤 S.E.S没有Lee Hyori答对了，但H.O.T解散年份卡住了… → 你能对几题？粉丝自尊测试", "zh-TW": "K-Pop歷史測試：Lv.2 當代粉絲 🎤 S.E.S沒有Lee Hyori答對了，但H.O.T解散年份卡住了… → 你能對幾題？粉絲自尊測試"},
            vi="Test lịch sử K-Pop: Lv.2 Fan thế hệ mới 🎤 Biết Lee Hyori không thuộc S.E.S, nhưng vấp năm tan rã H.O.T... → Bạn đúng mấy câu? Test lòng tự trọng fan",
            id="Tes sejarah K-Pop: Lv.2 Fan generasi kini 🎤 Benar soal Lee Hyori bukan S.E.S, tapi mentok di tahun bubar H.O.T... → Kamu benar berapa? Tes pride fandom",
        ),
    ),
    r(
        "Level3",
        "🌟",
        title=M(
            ko=_ko_r(2, "title"),
            en="Cross-generation knowledge—Cross-Gen Fan 🌟",
            ja="世代を超える常識がある、クロス世代ファン 🌟",
            **{"zh-CN": "跨越世代的常识，跨代粉丝 🌟", "zh-TW": "跨越世代的常識，跨代粉絲 🌟"},
            vi="Kiến thức xuyên thế hệ—Fan đa thế hệ 🌟",
            id="Pengetahuan lintas generasi—Fan cross-gen 🌟",
        ),
        shortDescription=M(
            ko=_ko_r(2, "shortDescription"),
            en="You got more than half correct. You have a fairly broad grasp from 1st gen to today.",
            ja="半分以上正解しました。1世代から現在まである程度幅広く知っているレベルです。",
            **{"zh-CN": "答对一半以上。对1代至今有相当广度的了解。", "zh-TW": "答對一半以上。對1代至今有相當廣度的了解。"},
            vi="Đúng hơn một nửa. Bạn nắm khá rộng từ thế hệ 1 đến nay.",
            id="Benar lebih dari setengah. Kamu cukup luas dari generasi 1 sampai sekarang.",
        ),
        description=M(
            ko=_ko_r(2, "description"),
            en="You know Girls' Generation's debut wasn't Gee but Into the New World, and that TVXQ opened the 2nd-gen era. You likely stumbled on H.O.T's disbandment year and Dynamite's record in the hard section.",
            ja="少女時代のデビュー曲がGeeではなくInto the New Worldであること、東方神起が2世代の扉を開いたことも知っています。難しい区間ではH.O.T解散年やDynamite記録などでつまずいたはずです。",
            **{"zh-CN": "你知道少女时代出道曲不是Gee而是再次重逢的世界，也知道TVXQ开启了2代。难题可能在H.O.T解散年份、Dynamite纪录等处卡住。", "zh-TW": "你知道少女時代出道曲不是Gee而是再次重逢的世界，也知道TVXQ開啟了2代。難題可能在H.O.T解散年份、Dynamite紀錄等處卡住。"},
            vi="Bạn biết debut Girls' Generation không phải Gee mà là Into the New World, và TVXQ mở era thế hệ 2. Có lẽ vấp ở năm tan rã H.O.T, kỷ lục Dynamite ở phần khó.",
            id="Kamu tahu debut Girls' Generation bukan Gee tapi Into the New World, dan TVXQ membuka era generasi 2. Mungkin mentok di tahun bubar H.O.T dan rekor Dynamite di bagian sulit.",
        ),
        historyGrade=M(
            ko=_ko_r(2, "historyGrade"),
            en="K-Pop History Grade: Lv.3 Cross-Gen Fan 🌟",
            ja="K-POP歴史等級: Lv.3 クロス世代ファン 🌟",
            **{"zh-CN": "K-Pop历史等级：Lv.3 跨代粉丝 🌟", "zh-TW": "K-Pop歷史等級：Lv.3 跨代粉絲 🌟"},
            vi="Cấp lịch sử K-Pop: Lv.3 Fan đa thế hệ 🌟",
            id="Grade sejarah K-Pop: Lv.3 Fan cross-gen 🌟",
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
            en="Weak zone: Hard Q9~Q12 (specific years & records)",
            ja="弱点区間: 難しい Q9~Q12（詳細な年・記録）",
            **{"zh-CN": "弱项区间：难题 Q9~Q12（具体年份与纪录）", "zh-TW": "弱項區間：難題 Q9~Q12（具體年份與紀錄）"},
            vi="Điểm yếu: Câu khó Q9~Q12 (năm & kỷ lục chi tiết)",
            id="Zona lemah: Soal sulit Q9~Q12 (tahun & rekor detail)",
        ),
        retakeTip=EMPTY,
        characteristic=EMPTY,
        regretPoint=EMPTY,
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(2, "oneLiner"),
            en="You're at a level where you can join K-Pop history conversations in fan communities",
            ja="ファンコミュニティでK-POP歴史の会話に加われるレベルです",
            **{"zh-CN": "已能在粉丝社区参与K-Pop历史话题", "zh-TW": "已能在粉絲社群參與K-Pop歷史話題"},
            vi="Bạn đủ trình tham gia hội thoại lịch sử K-Pop trong cộng đồng fan",
            id="Kamu cukup level untuk ikut obrolan sejarah K-Pop di komunitas fan",
        ),
        shareLine=M(
            ko=_ko_r(2, "shareLine"),
            en="K-Pop History Test: Lv.3 Cross-Gen Fan 🌟 Got more than half but brain froze on SHINee debut... wasn't Ring Ding Dong lol → How many can you get?",
            ja="K-POP歴史テスト: Lv.3 クロス世代ファン 🌟 半分以上当てたのにSHINeeデビュー曲でメンタル崩壊…Ring Ding Dongじゃなかった ㅋㅋ → K-POP歴史いくつ正解？",
            **{"zh-CN": "K-Pop历史测试：Lv.3 跨代粉丝 🌟 对了一半以上但在SHINee出道曲崩了…不是Ring Ding Dong 哈哈 → 你能对几题？", "zh-TW": "K-Pop歷史測試：Lv.3 跨代粉絲 🌟 對了一半以上但在SHINee出道曲崩了…不是Ring Ding Dong 哈哈 → 你能對幾題？"},
            vi="Test lịch sử K-Pop: Lv.3 Fan đa thế hệ 🌟 Đúng hơn nửa nhưng sốc ở debut SHINee... không phải Ring Ding Dong haha → Bạn đúng mấy câu?",
            id="Tes sejarah K-Pop: Lv.3 Fan cross-gen 🌟 Benar lebih setengah tapi shock di debut SHINee... bukan Ring Ding Dong wkwk → Kamu benar berapa?",
        ),
    ),
    r(
        "Level4",
        "🏅",
        title=M(
            ko=_ko_r(3, "title"),
            en="Like reading a K-Pop history book—History Expert 🏅",
            ja="K-POP歴史本を読んだレベル、K-POP歴史上級者 🏅",
            **{"zh-CN": "像读过K-Pop历史书，历史高手 🏅", "zh-TW": "像讀過K-Pop歷史書，歷史高手 🏅"},
            vi="Như đã đọc sách lịch sử K-Pop—Cao thủ lịch sử 🏅",
            id="Seperti baca buku sejarah K-Pop—Ahli sejarah 🏅",
        ),
        shortDescription=M(
            ko=_ko_r(3, "shortDescription"),
            en="You got most of the hard section right. Top 15% K-Pop history knowledge.",
            ja="難しい区間までほとんど正解しました。上位15%に該当するK-POP歴史知識です。",
            **{"zh-CN": "难题也大多答对。K-Pop历史知识前15%。", "zh-TW": "難題也大多答對。K-Pop歷史知識前15%。"},
            vi="Phần khó cũng đúng hầu hết. Top 15% kiến thức lịch sử K-Pop.",
            id="Bagian sulit kebanyakan benar. Top 15% pengetahuan sejarah K-Pop.",
        ),
        description=M(
            ko=_ko_r(3, "description"),
            en="If you know H.O.T's disbandment year, Dynamite's first Hot 100 No. 1, and SHINee's debut song, you've either seriously studied K-Pop history or lived through that era as a fan.",
            ja="H.O.T解散年、DynamiteのBillboard HOT 100初1位記録、SHINeeデビュー曲まで知っているなら、K-POP歴史を真剣に学んだ人か、その時代を直接経験したファンの可能性が高いです。",
            **{"zh-CN": "若知道H.O.T解散年份、Dynamite首次Hot 100冠军、SHINee出道曲，说明你认真学过K-Pop历史，或是亲历那个时代的粉丝。", "zh-TW": "若知道H.O.T解散年份、Dynamite首次Hot 100冠軍、SHINee出道曲，說明你認真學過K-Pop歷史，或是親歷那個時代的粉絲。"},
            vi="Nếu biết năm tan rã H.O.T, Dynamite No.1 Hot 100 đầu tiên, bài debut SHINee, bạn có thể đã nghiên cứu nghiêm túc hoặc là fan trải qua thời đó.",
            id="Kalau tahu tahun bubar H.O.T, rekor Hot 100 pertama Dynamite, dan lagu debut SHINee, kamu mungkin belajar serius atau fan yang hidup di era itu.",
        ),
        historyGrade=M(
            ko=_ko_r(3, "historyGrade"),
            en="K-Pop History Grade: Lv.4 History Expert 🏅",
            ja="K-POP歴史等級: Lv.4 歴史上級者 🏅",
            **{"zh-CN": "K-Pop历史等级：Lv.4 历史高手 🏅", "zh-TW": "K-Pop歷史等級：Lv.4 歷史高手 🏅"},
            vi="Cấp lịch sử K-Pop: Lv.4 Cao thủ lịch sử 🏅",
            id="Grade sejarah K-Pop: Lv.4 Ahli sejarah 🏅",
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
            en="Traits of this result: long-time K-Pop fan, enjoys history content, active in fan communities",
            ja="この結果を持つ人の特徴: 長年のK-POPファン・歴史コンテンツをよく見る・ファンコミュニティで活発",
            **{"zh-CN": "此结果特征：资深K-Pop粉丝、爱看历史内容、活跃于粉丝社区", "zh-TW": "此結果特徵：資深K-Pop粉絲、愛看歷史內容、活躍於粉絲社群"},
            vi="Đặc điểm: fan K-Pop lâu năm, thích nội dung lịch sử, hoạt động tích cực trong cộng đồng fan",
            id="Ciri hasil ini: fan K-Pop lama, suka konten sejarah, aktif di komunitas fan",
        ),
        regretPoint=M(
            ko=_ko_r(3, "regretPoint"),
            en="Almost there: 2~3 away from perfect. Re-read explanations for missed questions",
            ja="惜しいポイント: 満点まで2~3問差。間違えた問題の解説をもう一度読む",
            **{"zh-CN": "遗憾点：离满分差2~3题。重读错题解析", "zh-TW": "遺憾點：離滿分差2~3題。重讀錯題解析"},
            vi="Tiếc nuối: cách điểm tuyệt đối 2~3 câu. Đọc lại giải thích câu sai",
            id="Sayangnya: tinggal 2~3 lagi sempurna. Baca ulang penjelasan yang salah",
        ),
        certificationPhrase=EMPTY,
        oneLiner=M(
            ko=_ko_r(3, "oneLiner"),
            en="You're recognized as a 'true history fan' in communities. This result is worth bragging about",
            ja="ファンコミュニティで「本物の歴史ファン」として認められるレベルです。この結果は自慢してもいい",
            **{"zh-CN": "在粉丝社区会被认可为“真·历史粉”。这个结果值得炫耀", "zh-TW": "在粉絲社群會被認可為「真·歷史粉」。這個結果值得炫耀"},
            vi="Bạn được công nhận là 'fan lịch sử chính hiệu' trong cộng đồng. Kết quả này đáng khoe",
            id="Kamu diakui sebagai 'fan sejarah sejati' di komunitas. Hasil ini layak dibanggakan",
        ),
        shareLine=M(
            ko=_ko_r(3, "shareLine"),
            en="K-Pop History Test: Lv.4 History Expert 🏅 Top 15%... got H.O.T disbandment year & Dynamite record right → How many can you get? Nail them all and you're a history master",
            ja="K-POP歴史テスト: Lv.4 歴史上級者 🏅 上位15%…H.O.T解散年・Dynamite記録全部当てた → K-POP歴史いくつ正解？全部当てたら歴史マスター",
            **{"zh-CN": "K-Pop历史测试：Lv.4 历史高手 🏅 前15%…H.O.T解散年份和Dynamite纪录全对 → 你能对几题？全对就是历史大师", "zh-TW": "K-Pop歷史測試：Lv.4 歷史高手 🏅 前15%…H.O.T解散年份和Dynamite紀錄全對 → 你能對幾題？全對就是歷史大師"},
            vi="Test lịch sử K-Pop: Lv.4 Cao thủ 🏅 Top 15%... đúng năm tan rã H.O.T & kỷ lục Dynamite → Bạn đúng mấy câu? Full điểm là master",
            id="Tes sejarah K-Pop: Lv.4 Ahli 🏅 Top 15%... benar soal tahun bubar H.O.T & rekor Dynamite → Kamu benar berapa? Full score = master",
        ),
    ),
    r(
        "Level5",
        "🏆",
        title=M(
            ko=_ko_r(4, "title"),
            en="A living K-Pop history book—History Master 🏆",
            ja="生きているK-POP歴史書、歴史マスター 🏆",
            **{"zh-CN": "活着的K-Pop历史书，历史大师 🏆", "zh-TW": "活著的K-Pop歷史書，歷史大師 🏆"},
            vi="Cuốn sách lịch sử K-Pop sống—Bậc thầy lịch sử 🏆",
            id="Buku sejarah K-Pop hidup—Master sejarah 🏆",
        ),
        shortDescription=M(
            ko=_ko_r(4, "shortDescription"),
            en="You got 11 or 12 correct. If you know aespa's worldview, H.O.T's disbandment year, and BTS's Dynamite record, you're a true K-Pop history master.",
            ja="11問または12問全問正解。aespaの世界観、H.O.T解散年、BTS Dynamite記録まで全部知っているなら、真のK-POP歴史マスターです。",
            **{"zh-CN": "答对11或12题。若连aespa世界观、H.O.T解散年份、BTS Dynamite纪录都知道，你就是真正的K-Pop历史大师。", "zh-TW": "答對11或12題。若連aespa世界觀、H.O.T解散年份、BTS Dynamite紀錄都知道，你就是真正的K-Pop歷史大師。"},
            vi="Đúng 11 hoặc 12 câu. Biết worldview aespa, năm tan rã H.O.T, kỷ lục Dynamite của BTS—bạn là master lịch sử K-Pop thật sự.",
            id="Benar 11 atau 12. Kalau tahu worldview aespa, tahun bubar H.O.T, rekor Dynamite BTS—kamu master sejarah K-Pop sejati.",
        ),
        description=M(
            ko=_ko_r(4, "description"),
            en="You have a complete grasp of K-Pop history from 1st to 4th gen. Knowing debut songs, disbandment years, agencies, and world records proves you're a real fan who has spent years with K-Pop.",
            ja="1世代から4世代までK-POP歴史全体を掌握しています。デビュー曲・解散年・所属事務所・世界記録まで全部知っているということは、K-POPと歳月を共にした本物のファンである証拠です。",
            **{"zh-CN": "你掌握从1代到4代的K-Pop全史。知道出道曲、解散年、所属公司、世界纪录，证明你是与K-Pop共度岁月的真正粉丝。", "zh-TW": "你掌握從1代到4代的K-Pop全史。知道出道曲、解散年、所屬公司、世界紀錄，證明你是與K-Pop共度歲月的真正粉絲。"},
            vi="Bạn nắm trọn lịch sử K-Pop từ thế hệ 1 đến 4. Biết bài debut, năm tan rã, công ty quản lý, kỷ lục thế giới—chứng minh bạn là fan thật đã gắn bó nhiều năm với K-Pop.",
            id="Kamu menguasai sejarah K-Pop generasi 1 sampai 4. Tahu lagu debut, tahun bubar, agensi, rekor dunia—bukti kamu fan sejati yang hidup bersama K-Pop.",
        ),
        historyGrade=M(
            ko=_ko_r(4, "historyGrade"),
            en="K-Pop History Grade: Lv.5 History Master 🏆",
            ja="K-POP歴史等級: Lv.5 歴史マスター 🏆",
            **{"zh-CN": "K-Pop历史等级：Lv.5 历史大师 🏆", "zh-TW": "K-Pop歷史等級：Lv.5 歷史大師 🏆"},
            vi="Cấp lịch sử K-Pop: Lv.5 Bậc thầy lịch sử 🏆",
            id="Grade sejarah K-Pop: Lv.5 Master sejarah 🏆",
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
            en="How this result is possible: longtime fan since 1st gen, K-Pop major, journalist, critic, or history master fan",
            ja="この結果が可能な場合: 1世代から一緒にいた長年ファン・K-POP関連専攻・記者・評論家・歴史オタクマスター",
            **{"zh-CN": "可能情况：从1代就追随的资深粉丝、K-Pop相关专业、记者、评论家、历史宅大师", "zh-TW": "可能情況：從1代就追隨的資深粉絲、K-Pop相關專業、記者、評論家、歷史宅大師"},
            vi="Khả năng đạt kết quả này: fan lâu năm từ thế hệ 1, chuyên ngành K-Pop, phóng viên, nhà phê bình, master fan lịch sử",
            id="Kemungkinan hasil ini: fan lama sejak generasi 1, jurusan K-Pop, jurnalis, kritikus, master fan sejarah",
        ),
        regretPoint=EMPTY,
        certificationPhrase=M(
            ko=_ko_r(4, "certificationPhrase"),
            en="K-Pop History Master achieved 🏆 Mastered everything from 1st to 4th gen",
            ja="K-POP歴史マスター達成 🏆 1世代から4世代まで全部掌握",
            **{"zh-CN": "K-Pop历史大师达成 🏆 从1代到4代全部掌握", "zh-TW": "K-Pop歷史大師達成 🏆 從1代到4代全部掌握"},
            vi="Đạt K-Pop History Master 🏆 Nắm trọn từ thế hệ 1 đến 4",
            id="K-Pop History Master tercapai 🏆 Kuasai semua dari generasi 1 sampai 4",
        ),
        oneLiner=M(
            ko=_ko_r(4, "oneLiner"),
            en="You are a living K-Pop history book. Post this result in your fan community",
            ja="あなたは生きているK-POP歴史書です。この結果をファンコミュニティに投稿してください",
            **{"zh-CN": "你就是活着的K-Pop历史书。把这个结果发到粉丝社区吧", "zh-TW": "你就是活著的K-Pop歷史書。把這個結果發到粉絲社群吧"},
            vi="Bạn là cuốn sách lịch sử K-Pop sống. Hãy đăng kết quả này lên cộng đồng fan",
            id="Kamu buku sejarah K-Pop hidup. Posting hasil ini di komunitas fan",
        ),
        shareLine=M(
            ko=_ko_r(4, "shareLine"),
            en="K-Pop History Test: Lv.5 History Master 🏆 Got everything from 1st to 4th gen... even aespa's worldview → How many can you get? Challenge with your fan pride!",
            ja="K-POP歴史テスト: Lv.5 歴史マスター 🏆 1世代から4世代まで全部正解…aespa世界観まで → K-POP歴史いくつ正解？ファンダムプライドを懸けて挑戦",
            **{"zh-CN": "K-Pop历史测试：Lv.5 历史大师 🏆 1代到4代全对…连aespa世界观 → 你能对几题？用粉丝自尊来挑战！", "zh-TW": "K-Pop歷史測試：Lv.5 歷史大師 🏆 1代到4代全對…連aespa世界觀 → 你能對幾題？用粉絲自尊來挑戰！"},
            vi="Test lịch sử K-Pop: Lv.5 Master 🏆 Đúng hết từ thế hệ 1 đến 4... cả worldview aespa → Bạn đúng mấy câu? Thử với lòng tự trọng fan!",
            id="Tes sejarah K-Pop: Lv.5 Master 🏆 Benar semua generasi 1-4... sampai worldview aespa → Kamu benar berapa? Tantang dengan pride fandom!",
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
        "historyGrade",
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
        + "\n];\n\nexport const phase3KpopHistoryMasterResults: Phase3KpopHistoryMasterResult[] = [\n"
        + results_ts
        + "\n];\n"
    )


def main() -> None:
    out = Path(__file__).resolve().parents[1] / "lib" / "phase3KpopHistoryMasterData.ts"
    body = build_ts()
    out.write_text(body, encoding="utf-8")
    print(f"Wrote {out}")
    print(f"Bytes: {len(body.encode('utf-8'))}")
    print(f"Lines: {body.count(chr(10)) + (0 if body.endswith(chr(10)) else 1)}")


if __name__ == "__main__":
    main()
