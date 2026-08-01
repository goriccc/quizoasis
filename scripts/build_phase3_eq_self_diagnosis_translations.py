"""Translation data for phase3 EQ self-diagnosis test (imported by build script)."""
from __future__ import annotations

from pathlib import Path

LOCALES = ("ko", "en", "ja", "zh-CN", "zh-TW", "vi", "id")
_OPT_KEYS = ("A", "B", "C", "D")


def M(**kwargs: str) -> dict[str, str]:
    return {loc: kwargs[loc] for loc in LOCALES}


def q(question: dict[str, str], options: list[tuple[dict[str, str], int]]) -> dict:
    return {"question": question, "options": options}


def r(type_: str, emoji: str, **fields: dict[str, str] | str) -> dict:
    return {"type": type_, "emoji": emoji, **fields}


EMPTY = M(ko="", en="", ja="", **{"zh-CN": "", "zh-TW": ""}, vi="", id="")


_gen_path = Path(__file__).resolve().parent / "gen_phase3_eq_self_diagnosis_data.py"
_gen_ns: dict = {"__file__": str(_gen_path)}
exec(_gen_path.read_text(encoding="utf-8").split("\nHEADER =")[0], _gen_ns)
KO_QUESTIONS = _gen_ns["QUESTIONS"]
KO_RESULTS = _gen_ns["RESULTS"]


def _ko_q(idx: int) -> str:
    return KO_QUESTIONS[idx]["q"]


def _ko_o(idx: int, opt_idx: int) -> str:
    return KO_QUESTIONS[idx][_OPT_KEYS[opt_idx]]


def _ko_r(type_idx: int, field: str) -> str:
    key_map = {
        "title": "title_ko",
        "eqLevel": "eq_level",
        "quote": "quote",
        "description": "description",
        "eqType": "eq_type",
        "developFocus": "develop_focus",
        "fiveElementsAnalysis": "five_elements_analysis",
        "strengths": "strengths",
        "cautions": "cautions",
        "masterTraits": "master_traits",
        "tryNow": "try_now",
        "certificationPhrase": "certification",
        "oneLiner": "one_liner",
        "shareLine": "share_line",
    }
    if field not in key_map:
        raise KeyError(field)
    return KO_RESULTS[type_idx + 1].get(key_map[field], "")


def _ml(ko: str, en: str, ja: str, zh_cn: str, zh_tw: str, vi: str, id_: str) -> dict[str, str]:
    return M(ko=ko, en=en, ja=ja, **{"zh-CN": zh_cn, "zh-TW": zh_tw}, vi=vi, id=id_)


_Q_I18N: list[dict] = [
    {"q": {
        "en": "When you feel bad, how quickly do you figure out why?",
        "ja": "気分が悪いとき、その理由をどれくらい早く把握できますか？",
        "zh-CN": "心情不好时，你能多快察觉原因？",
        "zh-TW": "心情不好時，你能多快察覺原因？",
        "vi": "Khi buồn bực, bạn nhận ra nguyên nhân nhanh đến đâu?",
        "id": "Seberapa cepat kamu menyadari penyebab perasaan tidak enak?",
    }, "opts": [
        {
            "en": "I just feel bad and often do not know why until much later, or never.",
            "ja": "なぜなのか分からないまま、かなり時間が経っても分からないことがある。",
            "zh-CN": "只是心情不好，往往很久才知道原因，或始终不知道。",
            "zh-TW": "只是心情不好，往往很久才知道原因，或始終不知道。",
            "vi": "Chỉ thấy buồn bực và thường lâu mới biết lý do, hoặc không bao giờ biết.",
            "id": "Hanya merasa tidak enak dan sering baru tahu penyebabnya lama kemudian, atau tidak pernah.",
        },
        {
            "en": "I figure it out after some time, but not right in the moment.",
            "ja": "時間が経てば分かるが、その場では難しい。",
            "zh-CN": "过一会儿能明白，但当下很难。",
            "zh-TW": "過一會兒能明白，但當下很難。",
            "vi": "Sau một lúc tôi hiểu, nhưng không phải ngay lúc đó.",
            "id": "Setelah beberapa waktu aku paham, tapi tidak saat itu juga.",
        },
        {
            "en": "When emotions rise, I relatively quickly identify the cause.",
            "ja": "感情が湧くと、比較的早く原因を把握できる。",
            "zh-CN": "情绪出现时，通常能较快找到原因。",
            "zh-TW": "情緒出現時，通常能較快找到原因。",
            "vi": "Khi cảm xúc dâng lên, tôi khá nhanh nhận ra nguyên nhân.",
            "id": "Saat emosi naik, aku cukup cepat mengenali penyebabnya.",
        },
        {
            "en": "The moment emotions rise, I almost instantly recognize why. I can separate emotions from their causes.",
            "ja": "感情が湧いた瞬間、ほぼ即座に理由を認識できる。感情と原因を区別できる。",
            "zh-CN": "情绪一出现，几乎立刻知道原因，并能区分情绪与原因。",
            "zh-TW": "情緒一出現，幾乎立刻知道原因，並能區分情緒與原因。",
            "vi": "Ngay khi cảm xúc dâng lên, tôi gần như lập tức nhận ra lý do và tách được cảm xúc khỏi nguyên nhân.",
            "id": "Saat emosi muncul, aku hampir langsung mengenali alasannya dan bisa memisahkan emosi dari penyebabnya.",
        },
    ]},
    {"q": {
        "en": "How aware are you of how your emotions affect your behavior?",
        "ja": "自分の感情が行動に与える影響をどれくらい認識していますか？",
        "zh-CN": "你有多了解自己的情绪如何影响行为？",
        "zh-TW": "你有多了解自己的情緒如何影響行為？",
        "vi": "Bạn nhận thức thế nào về ảnh hưởng của cảm xúc lên hành vi?",
        "id": "Seberapa sadar kamu tentang pengaruh emosimu pada perilaku?",
    }, "opts": [
        {
            "en": "I only know when I look back later. Not in the moment.",
            "ja": "後から振り返って初めて分かる。その場では分からない。",
            "zh-CN": "只有事后回想才知道，当下不清楚。",
            "zh-TW": "只有事後回想才知道，當下不清楚。",
            "vi": "Chỉ khi nhìn lại sau này mới biết, không phải lúc đó.",
            "id": "Hanya tahu saat melihat kembali nanti, bukan saat itu juga.",
        },
        {
            "en": "I sometimes notice but do not fully grasp it.",
            "ja": "ときどき気づくが、完全には把握できない。",
            "zh-CN": "偶尔注意到，但并不完全掌握。",
            "zh-TW": "偶爾注意到，但並不完全掌握。",
            "vi": "Đôi khi nhận ra nhưng chưa nắm hết.",
            "id": "Kadang menyadarinya tapi belum sepenuhnya memahami.",
        },
        {
            "en": "I am somewhat aware. I feel emotional state affects decisions.",
            "ja": "ある程度認識している。感情状態が判断に影響すると感じる。",
            "zh-CN": "大致有觉察，能感到情绪状态会影响决定。",
            "zh-TW": "大致有覺察，能感到情緒狀態會影響決定。",
            "vi": "Tôi nhận thức ở mức nào đó và cảm nhận cảm xúc ảnh hưởng quyết định.",
            "id": "Aku cukup sadar dan merasakan emosi memengaruhi keputusan.",
        },
        {
            "en": "I recognize in real time how my emotional state affects judgment, actions, and words.",
            "ja": "今の感情状態が判断・行動・言葉にどう作用するかをリアルタイムで認識できる。",
            "zh-CN": "能实时察觉当前情绪状态如何影响判断、行为和说话。",
            "zh-TW": "能即時察覺當前情緒狀態如何影響判斷、行為和說話。",
            "vi": "Tôi nhận ra theo thời gian thực cảm xúc hiện tại ảnh hưởng phán đoán, hành động và lời nói thế nào.",
            "id": "Aku menyadari secara langsung bagaimana keadaan emosiku memengaruhi penilaian, tindakan, dan kata-kata.",
        },
    ]},
    {"q": {
        "en": "When you are very angry, what do you usually do?",
        "ja": "とても腹が立ったとき、あなたはどうしますか？",
        "zh-CN": "非常生气时，你通常怎么做？",
        "zh-TW": "非常生氣時，你通常怎麼做？",
        "vi": "Khi rất tức giận, bạn thường làm gì?",
        "id": "Saat sangat marah, biasanya kamu bagaimana?",
    }, "opts": [
        {
            "en": "Emotions come out on the spot. I sometimes regret it later.",
            "ja": "その場で感情がそのまま表れる。後で後悔することもある。",
            "zh-CN": "当场就把情绪表现出来，事后有时会后悔。",
            "zh-TW": "當場就把情緒表現出來，事後有時會後悔。",
            "vi": "Cảm xúc bộc lộ ngay tại chỗ, đôi khi hối hận sau đó.",
            "id": "Emosi langsung keluar saat itu juga, kadang menyesal nanti.",
        },
        {
            "en": "I try to hold back but often fail, wavering between suppressing and expressing.",
            "ja": "抑えようとするがうまくいかないことが多い。抑えるか表すかの間で揺れる。",
            "zh-CN": "想忍住但常常做不到，在压抑和表达之间摇摆。",
            "zh-TW": "想忍住但常常做不到，在壓抑和表達之間搖擺。",
            "vi": "Cố kiềm lại nhưng thường thất bại, dao động giữa nén và bộc lộ.",
            "id": "Mencoba menahan diri tapi sering gagal, goyah antara menahan dan meluapkan.",
        },
        {
            "en": "Rather than expressing immediately, I create distance and revisit when emotions settle.",
            "ja": "すぐ表すより距離を置き、落ち着いてから状況を見直す。",
            "zh-CN": "不会立刻发泄，先拉开距离，等情绪平复后再看情况。",
            "zh-TW": "不會立刻發洩，先拉開距離，等情緒平復後再看情況。",
            "vi": "Thay vì bộc lộ ngay, tôi tạo khoảng cách và xem lại khi đã bình tĩnh.",
            "id": "Daripada langsung meluapkan, aku menjauh dulu lalu meninjau situasi setelah tenang.",
        },
        {
            "en": "Even with strong emotions, I can consciously choose how to handle them. I can choose not to express even when I want to.",
            "ja": "強い感情があっても、どう扱うかを意識的に選べる。表したくても表さなくてよい能力がある。",
            "zh-CN": "即使情绪强烈，也能有意识地选择如何处理；想表达也可以不表达。",
            "zh-TW": "即使情緒強烈，也能有意識地選擇如何處理；想表達也可以不表達。",
            "vi": "Dù cảm xúc mạnh, tôi vẫn chủ động chọn cách xử lý; muốn bộc lộ cũng có thể không làm vậy.",
            "id": "Meski emosi kuat, aku bisa sadar memilih cara menanganinya; ingin meluapkan pun bisa memilih tidak.",
        },
    ]},
    {"q": {
        "en": "In anxious or stressful situations, you:",
        "ja": "不安やストレスを感じる状況では、あなたは？",
        "zh-CN": "在焦虑或有压力的情况下，你会？",
        "zh-TW": "在焦慮或有壓力的情況下，你會？",
        "vi": "Trong tình huống lo âu hoặc căng thẳng, bạn:",
        "id": "Dalam situasi cemas atau stres, kamu:",
    }, "opts": [
        {
            "en": "Get overwhelmed. Focus drops and judgment blurs.",
            "ja": "感情に圧倒される。集中できず判断が鈍る。",
            "zh-CN": "容易被情绪压倒，难以集中，判断变模糊。",
            "zh-TW": "容易被情緒壓倒，難以集中，判斷變模糊。",
            "vi": "Bị cảm xúc lấn át, khó tập trung và phán đoán mờ nhạt.",
            "id": "Terasa kewalahan; fokus turun dan penilaian kabur.",
        },
        {
            "en": "Affected considerably but recover over time.",
            "ja": "かなり影響を受けるが、時間が経てば回復する。",
            "zh-CN": "受影响很大，但会慢慢恢复。",
            "zh-TW": "受影響很大，但會慢慢恢復。",
            "vi": "Bị ảnh hưởng nhiều nhưng sẽ hồi phục theo thời gian.",
            "id": "Cukup terpengaruh tapi pulih seiring waktu.",
        },
        {
            "en": "Maintain function to some degree despite anxiety. I have my own ways to handle stress.",
            "ja": "不安があってもある程度機能を保てる。ストレスへの自分なりの方法がある。",
            "zh-CN": "即使焦虑也能维持一定状态，有自己的减压方法。",
            "zh-TW": "即使焦慮也能維持一定狀態，有自己的減壓方法。",
            "vi": "Dù lo âu vẫn duy trì được hoạt động ở mức nào đó và có cách đối phó riêng.",
            "id": "Meski cemas, aku tetap berfungsi sampai batas tertentu dan punya cara mengatasi stres sendiri.",
        },
        {
            "en": "The more anxious or stressed, the more I try to think clearly. I can separate emotional state from functional performance.",
            "ja": "不安やストレスが強いほど、より明確に考えようとする。感情状態と機能的な実行を分けられる。",
            "zh-CN": "越焦虑或越有压力，反而越努力清晰思考；能把情绪与表现分开。",
            "zh-TW": "越焦慮或越有壓力，反而越努力清晰思考；能把情緒與表現分開。",
            "vi": "Càng lo âu hoặc căng thẳng, tôi càng cố suy nghĩ rõ hơn và tách cảm xúc khỏi hiệu suất.",
            "id": "Semakin cemas atau stres, semakin aku berusaha berpikir jernih dan memisahkan emosi dari kinerja.",
        },
    ]},
    {"q": {
        "en": "Can you keep going when results do not come immediately or you are not recognized?",
        "ja": "すぐ結果が出ない、または認められない状況でも続けられるか？",
        "zh-CN": "当结果迟迟不来或得不到认可时，你还能坚持吗？",
        "zh-TW": "當結果遲遲不來或得不到認可時，你還能堅持嗎？",
        "vi": "Bạn có thể tiếp tục khi chưa có kết quả ngay hoặc chưa được công nhận không?",
        "id": "Bisakah kamu terus berjalan saat hasil belum langsung muncul atau belum diakui?",
    }, "opts": [
        {
            "en": "Honestly difficult. Motivation drops sharply without reward or feedback.",
            "ja": "正直難しい。報酬やフィードバックがないと意欲が急激に下がる。",
            "zh-CN": "老实说很难，没有奖励或反馈时动力会骤降。",
            "zh-TW": "老實說很難，沒有獎勵或回饋時動力會驟降。",
            "vi": "Thành thật mà nói rất khó; không có phần thưởng hay phản hồi thì động lực tụt mạnh.",
            "id": "Jujur sulit; tanpa imbalan atau umpan balik, motivasi turun drastis.",
        },
        {
            "en": "Possible to some degree but need external motivation if it goes on long.",
            "ja": "ある程度は可能だが、長く続くと外部動機が必要になる。",
            "zh-CN": "一定程度可以，但若持续很久就需要外在动力。",
            "zh-TW": "一定程度可以，但若持續很久就需要外在動力。",
            "vi": "Có thể ở mức nào đó nhưng kéo dài thì cần động lực bên ngoài.",
            "id": "Bisa sampai batas tertentu, tapi jika lama perlu motivasi eksternal.",
        },
        {
            "en": "If I believe in the direction, I can sustain quite long without immediate recognition.",
            "ja": "信じる方向があれば、すぐの承認がなくてもかなり長く続けられる。",
            "zh-CN": "若相信方向，即使暂时没有认可也能坚持较久。",
            "zh-TW": "若相信方向，即使暫時沒有認可也能堅持較久。",
            "vi": "Nếu tin vào hướng đi, tôi có thể duy trì khá lâu dù chưa được công nhận ngay.",
            "id": "Jika percaya arahnya, aku bisa bertahan cukup lama tanpa pengakuan langsung.",
        },
        {
            "en": "I find meaning in the process rather than external rewards. The sense that I am growing even if no one knows drives me.",
            "ja": "外部報酬より過程そのものに意味を見出す。誰も知らなくても成長している感覚が原動力になる。",
            "zh-CN": "比起外部奖励，更从过程本身找意义；即使无人知晓，成长感也是动力。",
            "zh-TW": "比起外部獎勵，更從過程本身找意義；即使無人知曉，成長感也是動力。",
            "vi": "Tôi tìm ý nghĩa trong quá trình hơn phần thưởng bên ngoài; cảm giác đang trưởng thành dù không ai biết là động lực.",
            "id": "Aku menemukan makna di proses, bukan imbalan luar; rasa sedang tumbuh meski tak ada yang tahu jadi doronganku.",
        },
    ]},
    {"q": {
        "en": "When you get disappointing results or criticism, you:",
        "ja": "失望する結果や批判を受けたとき、あなたは？",
        "zh-CN": "遇到令人失望的结果或批评时，你会？",
        "zh-TW": "遇到令人失望的結果或批評時，你會？",
        "vi": "Khi nhận kết quả đáng thất vọng hoặc bị chỉ trích, bạn:",
        "id": "Saat mendapat hasil mengecewakan atau kritik, kamu:",
    }, "opts": [
        {
            "en": "Collapse considerably. Takes long to recover.",
            "ja": "かなり崩れる。回復に時間がかかる。",
            "zh-CN": "会明显崩溃，恢复需要很久。",
            "zh-TW": "會明顯崩潰，恢復需要很久。",
            "vi": "Sụp đổ khá nhiều, mất lâu mới hồi lại.",
            "id": "Cukup runtuh, butuh waktu lama untuk pulih.",
        },
        {
            "en": "Energy drops but I pull myself together and try again to some degree.",
            "ja": "気力は落ちるが、ある程度立て直して再挑戦する。",
            "zh-CN": "士气会下降，但会一定程度重整后再试。",
            "zh-TW": "士氣會下降，但會一定程度重整後再試。",
            "vi": "Tinh thần tụt nhưng tôi gượng dậy và thử lại ở mức nào đó.",
            "id": "Energi turun tapi aku bangkit lagi dan mencoba ulang sampai batas tertentu.",
        },
        {
            "en": "Take criticism as information and look for areas to improve.",
            "ja": "批判を情報として受け取り、改善点を探す。",
            "zh-CN": "把批评当作信息，寻找可改进之处。",
            "zh-TW": "把批評當作資訊，尋找可改進之處。",
            "vi": "Coi chỉ trích như thông tin và tìm phần cần cải thiện.",
            "id": "Menerima kritik sebagai informasi dan mencari bagian yang perlu diperbaiki.",
        },
        {
            "en": "Disappointment and criticism refine direction. After emotional reaction, quickly shift to learning.",
            "ja": "失望と批判が方向を精緻化する。感情的反応の後、素早く学びへ移行する。",
            "zh-CN": "失望与批评会打磨方向；情绪反应后很快转为学习。",
            "zh-TW": "失望與批評會打磨方向；情緒反應後很快轉為學習。",
            "vi": "Thất vọng và chỉ trích giúp tinh chỉnh hướng đi; sau phản ứng cảm xúc, nhanh chóng chuyển sang học hỏi.",
            "id": "Kekecewaan dan kritik memperhalus arah; setelah reaksi emosional, cepat beralih ke pembelajaran.",
        },
    ]},
    {"q": {
        "en": "When someone is struggling, how do you react?",
        "ja": "相手がつらそうなとき、あなたはどう反応しますか？",
        "zh-CN": "当对方正在受苦时，你会如何反应？",
        "zh-TW": "當對方正在受苦時，你會如何反應？",
        "vi": "Khi ai đó đang khó khăn, bạn phản ứng thế nào?",
        "id": "Saat seseorang sedang kesulitan, bagaimana kamu bereaksi?",
    }, "opts": [
        {
            "en": "Panic not knowing what to say, or jump to solutions.",
            "ja": "何を言えばいいか分からず戸惑う、または解決策から入る。",
            "zh-CN": "不知道说什么而慌张，或先给解决方案。",
            "zh-TW": "不知道說什麼而慌張，或先給解決方案。",
            "vi": "Hoang mang vì không biết nói gì, hoặc vội đưa ra giải pháp.",
            "id": "Panik karena tidak tahu harus bilang apa, atau langsung menawarkan solusi.",
        },
        {
            "en": "Try to comfort but hard to find the right words. Cannot fully follow their emotions.",
            "ja": "慰めようとするが適切な言葉が見つからない。相手の感情に完全には追いつけない。",
            "zh-CN": "想安慰但很难找到合适的话，无法完全跟上对方情绪。",
            "zh-TW": "想安慰但很難找到合適的話，無法完全跟上對方情緒。",
            "vi": "Cố an ủi nhưng khó tìm lời phù hợp, không theo kịp cảm xúc đối phương.",
            "id": "Mencoba menenangkan tapi sulit menemukan kata yang tepat; tidak sepenuhnya mengikuti emosi mereka.",
        },
        {
            "en": "Check and listen to their emotions first. Know empathy comes before quick fixes.",
            "ja": "まず相手の感情を確認し、聞く。共感が先で、早い解決は後だと分かっている。",
            "zh-CN": "会先确认并倾听对方情绪，知道共情比快速解决更重要。",
            "zh-TW": "會先確認並傾聽對方情緒，知道共情比快速解決更重要。",
            "vi": "Trước hết xác nhận và lắng nghe cảm xúc của họ; biết đồng cảm đến trước giải pháp nhanh.",
            "id": "Mengonfirmasi dan mendengarkan emosi mereka dulu; tahu empati lebih dulu daripada solusi cepat.",
        },
        {
            "en": "Sense their emotional state even before they speak. Read atmosphere and nonverbal signals more than words.",
            "ja": "相手が話す前でも感情状態を感じる。言葉より雰囲気と非言語信号を読む。",
            "zh-CN": "即使对方还没说，也能感受到情绪；比起话语，更读氛围和非语言信号。",
            "zh-TW": "即使對方還沒說，也能感受到情緒；比起話語，更讀氛圍和非語言信號。",
            "vi": "Cảm nhận trạng thái cảm xúc trước khi họ nói; đọc không khí và tín hiệu phi ngôn ngữ hơn lời nói.",
            "id": "Merasakan keadaan emosi mereka sebelum mereka bicara; membaca suasana dan sinyal nonverbal lebih dari kata-kata.",
        },
    ]},
    {"q": {
        "en": "How naturally do you understand someone with a different opinion?",
        "ja": "意見が異なる人の立場を、どれくらい自然に理解できますか？",
        "zh-CN": "你有多自然地理解意见不同的人？",
        "zh-TW": "你有多自然地理解意見不同的人？",
        "vi": "Bạn hiểu quan điểm của người khác biệt một cách tự nhiên đến đâu?",
        "id": "Seberapa alami kamu memahami seseorang dengan pendapat berbeda?",
    }, "opts": [
        {
            "en": "Honestly want to persuade my view first. Need conscious effort to understand theirs.",
            "ja": "正直、自分の立場を先に説得したくなる。相手の立場理解には意識的な努力が必要。",
            "zh-CN": "老实说更想先说服自己的立场，理解对方需要刻意努力。",
            "zh-TW": "老實說更想先說服自己的立場，理解對方需要刻意努力。",
            "vi": "Thành thật mà nói, tôi muốn thuyết phục quan điểm mình trước; cần cố gắng mới hiểu họ.",
            "id": "Jujur ingin meyakinkan sudut pandangku dulu; perlu usaha sadar untuk memahami mereka.",
        },
        {
            "en": "Try to understand to some degree but hard to fully empathize.",
            "ja": "ある程度理解しようとするが、完全な共感は難しい。",
            "zh-CN": "会一定程度尝试理解，但很难完全共情。",
            "zh-TW": "會一定程度嘗試理解，但很難完全共情。",
            "vi": "Cố hiểu ở mức nào đó nhưng khó đồng cảm hoàn toàn.",
            "id": "Mencoba memahami sampai batas tertentu tapi sulit benar-benar berempati.",
        },
        {
            "en": "Understanding why they think that way comes first. Look behind disagreements.",
            "ja": "相手がなぜそう考えるかを理解することが先だと思う。意見の差の裏側を見ようとする。",
            "zh-CN": "会先理解对方为何那样想，也会看分歧背后的原因。",
            "zh-TW": "會先理解對方為何那樣想，也會看分歧背後的原因。",
            "vi": "Tôi ưu tiên hiểu vì sao họ nghĩ vậy và nhìn vào phía sau bất đồng.",
            "id": "Memahami mengapa mereka berpikir demikian lebih dulu; melihat di balik perbedaan pendapat.",
        },
        {
            "en": "Considering background, context, and emotional state, different opinions make natural sense. It feels different, not wrong.",
            "ja": "背景・文脈・感情状態を考えると、異なる意見も自然に理解できる。間違いではなく違いだと感じる。",
            "zh-CN": "结合背景、语境和情绪状态，不同意见也自然说得通；是不同，不是错。",
            "zh-TW": "結合背景、語境和情緒狀態，不同意見也自然說得通；是不同，不是錯。",
            "vi": "Xét bối cảnh, hoàn cảnh và cảm xúc, ý kiến khác cũng hợp lý; đó là khác biệt, không phải sai.",
            "id": "Mempertimbangkan latar, konteks, dan emosi, pendapat berbeda terasa wajar; bukan salah, hanya berbeda.",
        },
    ]},
    {"q": {
        "en": "How well do you detect emotional changes during conversation?",
        "ja": "会話中に相手の感情変化をどれくらいよく察知しますか？",
        "zh-CN": "在对话中，你有多善于察觉对方的情绪变化？",
        "zh-TW": "在對話中，你有多善於察覺對方的情緒變化？",
        "vi": "Bạn phát hiện thay đổi cảm xúc trong hội thoại tốt đến đâu?",
        "id": "Seberapa baik kamu mendeteksi perubahan emosi saat berbicara?",
    }, "opts": [
        {
            "en": "Often do not know until they say it directly.",
            "ja": "相手が直接言うまで、よく分からない。",
            "zh-CN": "通常要到对方直接说才知道。",
            "zh-TW": "通常要到對方直接說才知道。",
            "vi": "Thường không biết cho đến khi họ nói thẳng.",
            "id": "Sering tidak tahu sampai mereka mengatakannya langsung.",
        },
        {
            "en": "Detect big changes but miss subtle ones.",
            "ja": "大きな変化は分かるが、微細な変化までは捉えにくい。",
            "zh-CN": "能察觉大的变化，但容易错过细微变化。",
            "zh-TW": "能察覺大的變化，但容易錯過細微變化。",
            "vi": "Nhận ra thay đổi lớn nhưng dễ bỏ lỡ thay đổi nhỏ.",
            "id": "Mendeteksi perubahan besar tapi melewatkan perubahan halus.",
        },
        {
            "en": "Relatively good at detecting changes in expression, tone, and behavior.",
            "ja": "表情・口調・行動の変化を比較的よく察知できる。",
            "zh-CN": "较能察觉表情、语气和行为的变化。",
            "zh-TW": "較能察覺表情、語氣和行為的變化。",
            "vi": "Khá giỏi nhận ra thay đổi ở biểu cảm, giọng điệu và hành vi.",
            "id": "Cukup baik mendeteksi perubahan ekspresi, nada, dan perilaku.",
        },
        {
            "en": "Detect temperature and energy shifts before content. Often feel it before they speak.",
            "ja": "内容より温度やエネルギーの変化を先に感じる。相手が話す前に感じることが多い。",
            "zh-CN": "比起内容，更先感到语气和能量变化；常在对方开口前就已察觉。",
            "zh-TW": "比起內容，更先感到語氣和能量變化；常在對方開口前就已察覺。",
            "vi": "Cảm nhận sự thay đổi nhiệt độ và năng lượng trước nội dung; thường cảm thấy trước khi họ nói.",
            "id": "Merasakan perubahan suhu dan energi sebelum isi; sering merasakannya sebelum mereka bicara.",
        },
    ]},
    {"q": {
        "en": "Is it natural for you to create atmosphere with strangers or in awkward settings?",
        "ja": "初対面や気まずい場面で、雰囲気を作るのは自然ですか？",
        "zh-CN": "在陌生或尴尬场合，你能自然地营造氛围吗？",
        "zh-TW": "在陌生或尷尬場合，你能自然地營造氛圍嗎？",
        "vi": "Bạn có tự nhiên tạo không khí với người lạ hoặc trong bối cảnh khó xử không?",
        "id": "Apakah alami bagimu menciptakan suasana dengan orang asing atau situasi canggung?",
    }, "opts": [
        {
            "en": "Awkward settings are very hard. Wait for someone else rather than lead.",
            "ja": "気まずい場面がとても苦手。主導より誰かがやってくれるのを待つ。",
            "zh-CN": "尴尬场合非常吃力，与其主导，更等别人来带气氛。",
            "zh-TW": "尷尬場合非常吃力，與其主導，更等別人來帶氣氛。",
            "vi": "Bối cảnh khó xử rất mệt; thà chờ người khác dẫn dắt hơn là chủ động.",
            "id": "Situasi canggung sangat sulit; lebih menunggu orang lain daripada memimpin.",
        },
        {
            "en": "Possible to some degree but costs a lot of energy.",
            "ja": "ある程度はできるが、エネルギーをかなり使う。",
            "zh-CN": "一定程度可以，但会消耗很多精力。",
            "zh-TW": "一定程度可以，但會消耗很多精力。",
            "vi": "Có thể ở mức nào đó nhưng tốn nhiều năng lượng.",
            "id": "Bisa sampai batas tertentu tapi menghabiskan banyak energi.",
        },
        {
            "en": "Know ways to quickly ease awkwardness. Creating atmosphere is not that hard.",
            "ja": "気まずさを早く和らげる方法を知っている。雰囲気作りはそれほど難しくない。",
            "zh-CN": "知道如何快速化解尴尬，营造氛围不算太难。",
            "zh-TW": "知道如何快速化解尷尬，營造氛圍不算太難。",
            "vi": "Biết cách nhanh chóng xua tan sự khó xử; tạo không khí không quá khó.",
            "id": "Tahu cara cepat meredakan canggung; menciptakan suasana tidak terlalu sulit.",
        },
        {
            "en": "Read atmosphere naturally anywhere and respond accordingly. Natural to create space where people feel comfortable.",
            "ja": "どんな場でも雰囲気を自然に読み、それに合わせて反応できる。人が楽になる空間を作るのが自然。",
            "zh-CN": "在任何场合都能自然读懂氛围并回应；让人放松的空间对你很自然。",
            "zh-TW": "在任何場合都能自然讀懂氛圍並回應；讓人放鬆的空間對你很自然。",
            "vi": "Ở đâu cũng tự nhiên đọc không khí và phản ứng phù hợp; tạo không gian thoải mái là điều tự nhiên.",
            "id": "Di mana pun secara alami membaca suasana dan merespons; membuat ruang nyaman terasa natural.",
        },
    ]},
    {"q": {
        "en": "When conflict arises in relationships, you:",
        "ja": "関係で対立が生じたとき、あなたは？",
        "zh-CN": "当关系中出现冲突时，你会？",
        "zh-TW": "當關係中出現衝突時，你會？",
        "vi": "Khi xung đột nảy sinh trong quan hệ, bạn:",
        "id": "Saat konflik muncul dalam relasi, kamu:",
    }, "opts": [
        {
            "en": "Conflict is so uncomfortable I avoid it or go silent.",
            "ja": "対立自体が非常に不快で、回避したり黙ってしまう。",
            "zh-CN": "冲突本身非常不舒服，会回避或沉默。",
            "zh-TW": "衝突本身非常不舒服，會迴避或沉默。",
            "vi": "Xung đột quá khó chịu nên tôi tránh hoặc im lặng.",
            "id": "Konflik sangat tidak nyaman sehingga aku menghindar atau diam.",
        },
        {
            "en": "Try to resolve but emotions mix in and conversation often does not go as intended.",
            "ja": "解決しようとするが感情が混ざり、望む方向に話が進まないことが多い。",
            "zh-CN": "想解决但情绪掺入，对话常常偏离预期。",
            "zh-TW": "想解決但情緒摻入，對話常常偏離預期。",
            "vi": "Cố giải quyết nhưng cảm xúc lẫn vào nên cuộc nói chuyện thường không như mong muốn.",
            "id": "Mencoba menyelesaikan tapi emosi ikut campur sehingga percakapan sering tidak sesuai harapan.",
        },
        {
            "en": "When emotions peak, create distance first then talk when calm.",
            "ja": "感情が高まった瞬間は距離を置き、落ち着いてから話す。",
            "zh-CN": "情绪高涨时先拉开距离，冷静后再谈。",
            "zh-TW": "情緒高漲時先拉開距離，冷靜後再談。",
            "vi": "Khi cảm xúc lên cao, tôi tạo khoảng cách trước rồi nói chuyện khi đã bình tĩnh.",
            "id": "Saat emosi memuncak, aku menjauh dulu lalu bicara setelah tenang.",
        },
        {
            "en": "Even in conflict, separate their emotions and mine and lead conversation focused on core issues.",
            "ja": "対立中でも相手と自分の感情を分け、核心問題に集中した対話を導ける。",
            "zh-CN": "即使在冲突中，也能区分彼此情绪，引导对话聚焦核心问题。",
            "zh-TW": "即使在衝突中，也能區分彼此情緒，引導對話聚焦核心問題。",
            "vi": "Dù trong xung đột, tôi tách cảm xúc của hai bên và dẫn dắt cuộc nói chuyện vào vấn đề cốt lõi.",
            "id": "Meski dalam konflik, aku memisahkan emosi kita berdua dan memimpin percakapan ke inti masalah.",
        },
    ]},
    {"q": {
        "en": "Is maintaining relationships and influence across diverse people natural for you?",
        "ja": "多様な人々と関係を維持し、影響を与えることは自然ですか？",
        "zh-CN": "与不同背景的人维持关系并产生影响，对你自然吗？",
        "zh-TW": "與不同背景的人維持關係並產生影響，對你自然嗎？",
        "vi": "Duy trì quan hệ và ảnh hưởng với nhiều loại người có tự nhiên với bạn không?",
        "id": "Apakah alami bagimu menjaga relasi dan pengaruh dengan beragam orang?",
    }, "opts": [
        {
            "en": "Deep relationships with few people. Maintaining diverse ties feels burdensome.",
            "ja": "少数の人と深く付き合う。多様な関係維持は負担に感じる。",
            "zh-CN": "只与少数人深交，维持多元关系会觉得有负担。",
            "zh-TW": "只與少數人深交，維持多元關係會覺得有負擔。",
            "vi": "Chỉ thân với ít người; duy trì nhiều mối quan hệ cảm thấy nặng nề.",
            "id": "Dekat dengan sedikit orang; menjaga relasi beragam terasa memberatkan.",
        },
        {
            "en": "Want to expand relationships but hard to act on it.",
            "ja": "関係を広げたい気持ちはあるが、実行が難しい。",
            "zh-CN": "想扩大关系圈，但很难付诸行动。",
            "zh-TW": "想擴大關係圈，但很難付諸行動。",
            "vi": "Muốn mở rộng quan hệ nhưng khó thực hiện.",
            "id": "Ingin memperluas relasi tapi sulit mewujudkannya.",
        },
        {
            "en": "Connect naturally with diverse people. Not hard to maintain relationships.",
            "ja": "多様な人々と自然につながれる。関係維持はそれほど難しくない。",
            "zh-CN": "能与不同人自然连接，维持关系不算难。",
            "zh-TW": "能與不同人自然連結，維持關係不算難。",
            "vi": "Kết nối tự nhiên với nhiều loại người; duy trì quan hệ không quá khó.",
            "id": "Terhubung alami dengan beragam orang; menjaga relasi tidak terlalu sulit.",
        },
        {
            "en": "Build relationships across backgrounds and personalities, naturally giving and receiving influence. People often seek connection with me first.",
            "ja": "背景や性格の異なる人々と関係を築き、自然に影響を与え合う。人が先につながりたがることが多い。",
            "zh-CN": "能与不同背景和性格的人建立关系，自然互相影响；人们常主动想与你连接。",
            "zh-TW": "能與不同背景和性格的人建立關係，自然互相影響；人們常主動想與你連結。",
            "vi": "Xây quan hệ với người khác nền tảng và tính cách, tự nhiên ảnh hưởng lẫn nhau; nhiều người chủ động muốn kết nối với tôi.",
            "id": "Membangun relasi lintas latar dan kepribadian, saling memberi pengaruh secara alami; banyak orang yang ingin terhubung duluan.",
        },
    ]},
]

_R_I18N: list[dict[str, dict[str, str]]] = [
    {
        "title": {
            "en": "EQ exploration has just begun — EQ Beginner Type",
            "ja": "EQ探索が始まったばかりの、EQ入門型",
            "zh-CN": "EQ探索刚起步的EQ入门型",
            "zh-TW": "EQ探索剛起步的EQ入門型",
            "vi": "Loại EQ Nhập môn — khám phá EQ vừa mới bắt đầu",
            "id": "Tipe EQ Pemula — eksplorasi EQ baru dimulai",
        },
        "eqLevel": {
            "en": "Early stage / all five elements just forming",
            "ja": "初期段階／5要素すべて形成初期",
            "zh-CN": "初始阶段／五项要素都刚开始形成",
            "zh-TW": "初始階段／五項要素都剛開始形成",
            "vi": "Giai đoạn đầu / cả năm yếu tố mới hình thành",
            "id": "Tahap awal / kelima unsur baru mulai terbentuk",
        },
        "quote": {
            "en": "Your EQ is still largely unexplored. Knowing you do not know is already a start.",
            "ja": "あなたのEQはまだ多くが未開拓です。分からないと知ることが、すでに始まりです。",
            "zh-CN": "你的EQ仍有许多尚未探索的部分。知道自己还不了解，本身就是开始。",
            "zh-TW": "你的EQ仍有許多尚未探索的部分。知道自己還不了解，本身就是開始。",
            "vi": "EQ của bạn vẫn là vùng chưa được khám phá nhiều. Biết mình chưa biết đã là khởi đầu.",
            "id": "EQ-mu masih banyak yang belum dijelajahi. Menyadari belum tahu sudah merupakan awal.",
        },
        "description": {
            "en": "It is still hard to understand why emotions arise, notice their real-time impact on behavior, read others' emotions, or separate feelings from problems in conflict. This is not a limit of ability — EQ can be strengthened through practice.",
            "ja": "感情の理由や行動への影響をその場で把握し、他者の感情を読み、対立で感情と問題を分けることはまだ難しい段階です。能力の限界ではなく、EQは練習で伸ばせます。",
            "zh-CN": "目前还难以理解情绪为何出现、实时察觉其对行为的影响、读懂他人情绪，或在冲突中区分情绪与问题。这不是能力极限，EQ可以通过练习提升。",
            "zh-TW": "目前仍難以理解情緒為何出現、即時察覺其對行為的影響、讀懂他人情緒，或在衝突中區分情緒與問題。這不是能力極限，EQ可以透過練習提升。",
            "vi": "Bạn vẫn khó hiểu vì sao cảm xúc xuất hiện, nhận ra tác động tức thì lên hành vi, đọc cảm xúc người khác, hoặc tách cảm xúc khỏi vấn đề trong xung đột. Đây không phải giới hạn năng lực — EQ có thể rèn luyện.",
            "id": "Masih sulit memahami mengapa emosi muncul, menyadari dampaknya secara langsung, membaca emosi orang lain, atau memisahkan emosi dari masalah saat konflik. Ini bukan batas kemampuan — EQ bisa dilatih.",
        },
        "eqType": {
            "en": "🌱 Beginner Type",
            "ja": "🌱 入門型",
            "zh-CN": "🌱 入门型",
            "zh-TW": "🌱 入門型",
            "vi": "🌱 Nhập môn",
            "id": "🌱 Pemula",
        },
        "developFocus": {
            "en": "Self-awareness — start by asking yourself once a day, “What am I feeling now?”",
            "ja": "自己認識——一日一度「今、私は何を感じている？」と問いかけることから",
            "zh-CN": "自我觉察——每天先问自己一次：“我现在在感受什么？”",
            "zh-TW": "自我覺察——每天先問自己一次：「我現在在感受什麼？」",
            "vi": "Tự nhận thức — bắt đầu bằng cách hỏi “Bây giờ mình đang cảm thấy gì?” mỗi ngày",
            "id": "Kesadaran diri — mulai dengan bertanya sekali sehari, “Apa yang sedang kurasakan?”",
        },
        "fiveElementsAnalysis": {
            "en": "Self-awareness: the habit of noticing emotions is not yet formed\nSelf-regulation: ways to manage rising emotions are not yet established\nMotivation: relatively high reliance on external rewards\nEmpathy: reading others' emotions still requires conscious effort\nSocial skills: emotional skills in relationships are still developing",
            "ja": "自己認識：感情を認識する習慣自体がまだ形成されていない\n自己調整：感情が湧いたときの管理方法がまだ確立されていない\n内発的動機：外部報酬への依存度が高い\n共感：他者の感情を読むにはまだ意識的な努力が必要\n社会性：関係の中の感情管理スキルが発達中",
            "zh-CN": "自我觉察：觉察情绪的习惯尚未形成\n自我调节：情绪升起时的管理方法尚未建立\n内在动机：对外部奖励依赖较高\n共情：读懂他人情绪仍需刻意努力\n社交能力：关系中的情绪技能仍在发展",
            "zh-TW": "自我覺察：覺察情緒的習慣尚未形成\n自我調節：情緒升起時的管理方法尚未建立\n內在動機：對外部獎勵依賴較高\n同理：讀懂他人情緒仍需刻意努力\n社交能力：關係中的情緒技能仍在發展",
            "vi": "Tự nhận thức: thói quen nhận ra cảm xúc chưa hình thành\nTự điều chỉnh: cách quản lý cảm xúc khi dâng lên chưa ổn định\nĐộng lực nội tại: phụ thuộc phần thưởng bên ngoài khá cao\nĐồng cảm: đọc cảm xúc người khác vẫn cần nỗ luc có ý thức\nKỹ năng xã hội: kỹ năng cảm xúc trong quan hệ đang phát triển",
            "id": "Kesadaran diri: kebiasaan menyadari emosi belum terbentuk\nPengaturan diri: cara mengelola emosi yang naik belum mapan\nMotivasi batin: ketergantungan pada imbalan eksternal cukup tinggi\nEmpati: membaca emosi orang lain masih butuh usaha sadar\nKeterampilan sosial: keterampilan emosional dalam relasi masih berkembang",
        },
        "tryNow": {
            "en": "At the end of the day, write one sentence: “What did I feel today?” Naming emotions is EQ's first muscle.",
            "ja": "一日の終わりに「今日どんな感情を感じた？」を一文だけ書く。感情に名前をつけることがEQの最初の筋肉です。",
            "zh-CN": "每天结束时写一句：“今天我感受到了什么？”给情绪命名，是EQ的第一块肌肉。",
            "zh-TW": "每天結束時寫一句：「今天我感受到了什麼？」為情緒命名，是EQ的第一塊肌肉。",
            "vi": "Cuối ngày viết một câu: “Hôm nay mình đã cảm thấy gì?” Gọi tên cảm xúc là cơ bắp EQ đầu tiên.",
            "id": "Di akhir hari tulis satu kalimat: “Apa yang kurasakan hari ini?” Menamai emosi adalah otot EQ pertama.",
        },
        "oneLiner": {
            "en": "EQ is not inborn. Taking this test is already the start of exploration.",
            "ja": "EQは生まれつきではありません。このテストを受けたことが、すでに探索の始まりです。",
            "zh-CN": "EQ并非天生。完成这份测试，已经是探索的开始。",
            "zh-TW": "EQ並非天生。完成這份測驗，已經是探索的開始。",
            "vi": "EQ không phải bẩm sinh. Làm bài test này đã là khởi đầu khám phá.",
            "id": "EQ bukan bawaan lahir. Mengikuti tes ini sudah merupakan awal eksplorasi.",
        },
        "shareLine": {
            "en": "My EQ self-diagnosis: Beginner Type 🌱 I know I have emotions but not why... starting an emotion journal today → IQ matters less than EQ — what's your score?",
            "ja": "私のEQ自己診断：入門型 🌱 感情はあるのに理由が分からない段階…今日から感情日記書く → IQよりEQが大事、あなたは？",
            "zh-CN": "我的EQ自我诊断：入门型 🌱 有情绪但不知道为什么…今天开始写情绪日记 → IQ不如EQ重要，你几分？",
            "zh-TW": "我的EQ自我診斷：入門型 🌱 有情緒但不知道為什麼…今天開始寫情緒日記 → IQ不如EQ重要，你幾分？",
            "vi": "Tự chẩn đoán EQ: Nhập môn 🌱 Có cảm xúc mà không biết vì sao... từ hôm nay viết nhật ký cảm xúc → EQ quan trọng hơn IQ, bạn mấy điểm?",
            "id": "Diagnosis EQ-ku: Pemula 🌱 Ada emosi tapi tidak tahu kenapa... mulai jurnal emosi hari ini → EQ lebih penting dari IQ, skormu berapa?",
        },
    },
    {
        "title": {
            "en": "Starting to recognize emotions — EQ Developing Type",
            "ja": "感情を認識し始めた、EQ発達型",
            "zh-CN": "开始认识情绪的EQ发展型",
            "zh-TW": "開始認識情緒的EQ發展型",
            "vi": "Loại EQ Đang phát triển — bắt đầu nhận ra cảm xúc",
            "id": "Tipe EQ Berkembang — mulai mengenali emosi",
        },
        "eqLevel": {
            "en": "Developing stage / self-awareness starting, regulation and empathy forming",
            "ja": "発達段階／自己認識開始・調整・共感形成中",
            "zh-CN": "发展阶段／自我觉察起步，调节与共情形成中",
            "zh-TW": "發展階段／自我覺察起步，調節與同理形成中",
            "vi": "Giai đoạn phát triển / tự nhận thức bắt đầu, điều chỉnh và đồng cảm đang hình thành",
            "id": "Tahap berkembang / kesadaran diri mulai, regulasi dan empati terbentuk",
        },
        "quote": {
            "en": "You know you have emotions, but how to handle them is still unstable.",
            "ja": "自分の感情があることは分かるが、それを扱う方法がまだ不安定な段階です。",
            "zh-CN": "你知道自己有情绪，但如何处理它们仍不稳定。",
            "zh-TW": "你知道自己有情緒，但如何處理它們仍不穩定。",
            "vi": "Bạn biết mình có cảm xúc, nhưng cách xử lý vẫn chưa ổn định.",
            "id": "Kamu tahu ada emosi, tapi cara menanganinya masih belum stabil.",
        },
        "description": {
            "en": "You can identify causes afterward but not easily in the moment. Anger or anxiety often leads you, and while you notice big shifts in others' emotions, subtle changes are easy to miss.",
            "ja": "感情が湧いた後なら原因は分かるが、その瞬間はまだ難しい。怒りや不安に引っ張られやすく、相手の大きな感情変化は分かっても微細な変化は見逃しがちです。",
            "zh-CN": "情绪出现后可以回头找到原因，但当下仍不容易；愤怒或焦虑常会带动你，能察觉他人明显情绪变化，却容易错过细微变化。",
            "zh-TW": "情緒出現後可以回頭找到原因，但當下仍不容易；憤怒或焦慮常會帶動你，能察覺他人明顯情緒變化，卻容易錯過細微變化。",
            "vi": "Sau đó bạn có thể tìm ra nguyên nhân nhưng khó ngay lúc đó; giận hoặc lo thường dẫn dắt bạn; nhận ra thay đổi lớn ở người khác nhưng dễ bỏ lỡ thay đổi nhỏ.",
            "id": "Setelahnya kamu bisa menemukan penyebab tapi sulit saat itu juga; marah atau cemas sering menarikmu; sadar perubahan besar pada orang lain tapi melewatkan perubahan halus.",
        },
        "eqType": {
            "en": "🌿 Developing Type",
            "ja": "🌿 発達型",
            "zh-CN": "🌿 发展型",
            "zh-TW": "🌿 發展型",
            "vi": "🌿 Đang phát triển",
            "id": "🌿 Berkembang",
        },
        "developFocus": {
            "en": "Self-regulation — shorten the gap between recognizing emotions and managing them",
            "ja": "自己調整——感情を認識することと管理することの間隔を短くする",
            "zh-CN": "自我调节——缩短“觉察情绪”和“管理情绪”之间的距离",
            "zh-TW": "自我調節——縮短「覺察情緒」和「管理情緒」之間的距離",
            "vi": "Tự điều chỉnh — rút ngắn khoảng cách giữa nhận ra cảm xúc và quản lý cảm xúc",
            "id": "Pengaturan diri — perpendek jarak antara mengenali emosi dan mengelolanya",
        },
        "fiveElementsAnalysis": {
            "en": "Self-awareness: retrospective recognition works; real-time training needed\nSelf-regulation: still unstable under strong emotions\nMotivation: relies heavily on external feedback\nEmpathy: willing to understand but lacks methods\nSocial skills: awkward settings still drain energy",
            "ja": "自己認識：事後認識は可能。リアルタイム認識の訓練が必要\n自己調整：強い感情の前ではまだ不安定\n内発的動機：外部フィードバックに多く依存\n共感：理解しようとする意志はあるが方法が不足\n社会性：気まずい場面はまだエネルギー消耗が大きい",
            "zh-CN": "自我觉察：事后识别可以，需训练实时觉察\n自我调节：面对强烈情绪仍不稳定\n内在动机：较依赖外部反馈\n共情：有理解意愿但方法不足\n社交能力：尴尬场合仍较耗能量",
            "zh-TW": "自我覺察：事後識別可以，需訓練即時覺察\n自我調節：面對強烈情緒仍不穩定\n內在動機：較依賴外部回饋\n同理：有理解意願但方法不足\n社交能力：尷尬場合仍較耗能量",
            "vi": "Tự nhận thức: nhận ra sau đó được; cần luyện nhận biết tức thì\nTự điều chỉnh: trước cảm xúc mạnh vẫn chưa ổn\nĐộng lực nội tại: phụ thuộc phản hồi bên ngoài nhiều\nĐồng cảm: có ý muốn hiểu nhưng thiếu cách\nKỹ năng xã hội: bối cảnh khó xử vẫn tốn năng lượng",
            "id": "Kesadaran diri: pengenalan setelahnya memungkinkan; perlu latihan real-time\nPengaturan diri: masih goyah di depan emosi kuat\nMotivasi batin: banyak bergantung umpan balik eksternal\nEmpati: ada keinginan memahami tapi kurang metode\nKeterampilan sosial: situasi canggung masih menguras energi",
        },
        "tryNow": {
            "en": "When emotions rise, pause for 3 seconds before acting. In those 3 seconds ask once, “What am I feeling now?” That habit starts self-regulation.",
            "ja": "感情が湧いたら行動する前に3秒止まる。その3秒で「今、何を感じている？」と一度だけ問う。この習慣が自己調整の始まりです。",
            "zh-CN": "情绪升起时，行动前先停3秒，在这3秒里问一次：“我现在在感受什么？”这个习惯是自我调节的开始。",
            "zh-TW": "情緒升起時，行動前先停3秒，在這3秒裡問一次：「我現在在感受什麼？」這個習慣是自我調節的開始。",
            "vi": "Khi cảm xúc dâng lên, dừng 3 giây trước khi hành động và hỏi một lần: “Bây giờ mình cảm thấy gì?” Thói quen này mở đầu tự điều chỉnh.",
            "id": "Saat emosi naik, berhenti 3 detik sebelum bertindak dan tanya sekali: “Apa yang kurasakan sekarang?” Kebiasaan ini awal pengaturan diri.",
        },
        "oneLiner": {
            "en": "The gap between knowing you have emotions and being able to handle them closes with practice.",
            "ja": "感情があることを知る人と、それを扱える人の差は練習で縮まります。",
            "zh-CN": "知道有情绪，和能处理情绪之间的差距，要靠练习缩小。",
            "zh-TW": "知道有情緒，和能處理情緒之間的差距，要靠練習縮小。",
            "vi": "Khoảng cách giữa biết mình có cảm xúc và biết xử lý chúng sẽ thu hẹp nhờ luyện tập.",
            "id": "Jarak antara tahu ada emosi dan mampu menanganinya akan menutup lewat latihan.",
        },
        "shareLine": {
            "en": "My EQ self-diagnosis: Developing Type 🌿 I recognize emotions but regulation is still shaky... holding anger then exploding, so true → IQ matters less than EQ — what about you?",
            "ja": "私のEQ自己診断：発達型 🌿 感情は分かるけど調整がまだ不安定…我慢して爆発、当たり → IQよりEQが大事、あなたは？",
            "zh-CN": "我的EQ自我诊断：发展型 🌿 能觉察情绪但调节还不稳…憋着然后爆发太准 → IQ不如EQ重要，你呢？",
            "zh-TW": "我的EQ自我診斷：發展型 🌿 能覺察情緒但調節還不穩…憋著然後爆發太準 → IQ不如EQ重要，你呢？",
            "vi": "Tự chẩn đoán EQ: Đang phát triển 🌿 Nhận ra cảm xúc nhưng điều chỉnh còn lỏng... nén rồi bùng, đúng thật → EQ quan trọng hơn IQ, còn bạn?",
            "id": "Diagnosis EQ-ku: Berkembang 🌿 Sadar emosi tapi regulasi masih goyah... tahan lalu meledak, bener banget → EQ lebih penting dari IQ, kamu?",
        },
    },
    {
        "title": {
            "en": "Managing emotions to some degree — EQ Average Type",
            "ja": "感情をある程度扱える、EQ平均型",
            "zh-CN": "能一定程度处理情绪的EQ平均型",
            "zh-TW": "能一定程度處理情緒的EQ平均型",
            "vi": "Loại EQ Trung bình — xử lý cảm xúc ở mức vừa phải",
            "id": "Tipe EQ Rata-rata — mengelola emosi sampai batas tertentu",
        },
        "eqLevel": {
            "en": "Average stage / all five elements at basic level",
            "ja": "平均段階／5要素すべて基本レベル形成",
            "zh-CN": "平均阶段／五项要素都形成基本水平",
            "zh-TW": "平均階段／五項要素都形成基本水準",
            "vi": "Giai đoạn trung bình / cả năm yếu tố ở mức cơ bản",
            "id": "Tahap rata-rata / kelima unsur terbentuk di level dasar",
        },
        "quote": {
            "en": "You are at a balance point — neither ignoring emotions nor being fully overwhelmed by them.",
            "ja": "感情を完全に無視も、完全に圧倒されることもないバランス地点にいます。",
            "zh-CN": "你处在平衡点——既不完全忽视情绪，也不完全被情绪压倒。",
            "zh-TW": "你處在平衡點——既不完全忽視情緒，也不完全被情緒壓倒。",
            "vi": "Bạn ở điểm cân bằng — không bỏ qua cảm xúc, cũng không bị lấn át hoàn toàn.",
            "id": "Kamu di titik keseimbangan — tidak mengabaikan emosi, juga tidak sepenuhnya kewalahan.",
        },
        "description": {
            "en": "You somewhat recognize your emotional state, create distance when strong emotions rise, and try to read others. Yet full control is still hard in high-intensity emotions or complex conflict.",
            "ja": "感情状態をある程度認識し、強い感情が来ても距離を置き、他者の感情を読もうとします。ただし高強度の感情や複雑な対立では完全なコントロールはまだ難しい部分があります。",
            "zh-CN": "你能一定程度觉察情绪状态，在强烈情绪出现时保持距离，也尝试读懂他人；但在高强度情绪或复杂冲突中，仍难完全掌控。",
            "zh-TW": "你能一定程度覺察情緒狀態，在強烈情緒出現時保持距離，也嘗試讀懂他人；但在高強度情緒或複雜衝突中，仍難完全掌控。",
            "vi": "Bạn nhận thức cảm xúc ở mức nào đó, giữ khoảng cách khi cảm xúc mạnh dâng lên và cố đọc người khác; nhưng vẫn khó kiểm soát hoàn toàn trong cảm xúc cực mạnh hoặc xung đột phức tạp.",
            "id": "Kamu cukup mengenali keadaan emosimu, menjaga jarak saat emosi kuat, dan mencoba membaca orang lain; tapi kontrol penuh masih sulit dalam emosi intens atau konflik kompleks.",
        },
        "eqType": {
            "en": "⚖️ Average Type",
            "ja": "⚖️ 平均型",
            "zh-CN": "⚖️ 平均型",
            "zh-TW": "⚖️ 平均型",
            "vi": "⚖️ Trung bình",
            "id": "⚖️ Rata-rata",
        },
        "developFocus": {
            "en": "Deepen self-regulation — strengthen control in extreme situations, not just everyday ones",
            "ja": "自己調整の深化——平常時だけでなく極限状況での調整力を強化",
            "zh-CN": "深化自我调节——不只平时，也要强化极端情境下的调节力",
            "zh-TW": "深化自我調節——不只平時，也要強化極端情境下的調節力",
            "vi": "Đào sâu tự điều chỉnh — tăng khả năng kiểm soát trong tình huống cực đoan, không chỉ bình thường",
            "id": "Perdalam pengaturan diri — perkuat kontrol di situasi ekstrem, bukan hanya sehari-hari",
        },
        "fiveElementsAnalysis": {
            "en": "Self-awareness: possible but precision can improve\nSelf-regulation: okay in normal situations, shaky under high intensity\nMotivation: some inner drive but still needs external feedback\nEmpathy: attitude to understand others is forming\nSocial skills: basic ability to maintain relationships",
            "ja": "自己認識：可能だが精密度向上の余地あり\n自己調整：通常は可能だが高強度では揺れる\n内発的動機：ある程度あるが外部フィードバックも必要\n共感：相手の感情理解への姿勢が形成中\n社会性：関係維持の基本能力あり",
            "zh-CN": "自我觉察：可以，但精细度仍可提升\n自我调节：一般情况可以，高强度时仍会动摇\n内在动机：有一定内在驱动，但仍需外部反馈\n共情：理解他人情绪的态度正在形成\n社交能力：具备维持关系的基本能力",
            "zh-TW": "自我覺察：可以，但精細度仍可提升\n自我調節：一般情況可以，高強度時仍會動搖\n內在動機：有一定內在驅動，但仍需外部回饋\n同理：理解他人情緒的態度正在形成\n社交能力：具備維持關係的基本能力",
            "vi": "Tự nhận thức: có thể nhưng độ tinh còn nâng được\nTự điều chỉnh: bình thường ổn, cường độ cao thì rung\nĐộng lực nội tại: có phần nào nhưng vẫn cần phản hồi bên ngoài\nĐồng cảm: thái độ hiểu cảm xúc người khác đang hình thành\nKỹ năng xã hội: có năng lực cơ bản duy trì quan hệ",
            "id": "Kesadaran diri: memungkinkan tapi presisi bisa ditingkatkan\nPengaturan diri: biasanya oke, goyah saat intensitas tinggi\nMotivasi batin: ada dorongan internal tapi masih butuh umpan balik eksternal\nEmpati: sikap memahami emosi orang lain sedang terbentuk\nKeterampilan sosial: kemampuan dasar menjaga relasi ada",
        },
        "strengths": {
            "en": "Foundation in empathy and social skills is forming",
            "ja": "共感・社会性の基盤が形成されている",
            "zh-CN": "共情与社交能力的基础正在形成",
            "zh-TW": "同理與社交能力的基礎正在形成",
            "vi": "Nền tảng đồng cảm và kỹ năng xã hội đang hình thành",
            "id": "Fondasi empati dan keterampilan sosial sedang terbentuk",
        },
        "tryNow": {
            "en": "Expand your emotion vocabulary. Instead of “I feel bad,” practice “I feel disappointed / ignored / afraid.” Higher precision in recognition leads to finer regulation.",
            "ja": "感情語彙を広げる。「気分が悪い」の代わりに「失望した／無視された／怖い」と具体化する練習を。認識の精度が上がれば調整も精緻になる。",
            "zh-CN": "扩展情绪词汇。把“心情不好”换成“失望/被忽视/害怕”等更具体的表达；识别越精准，调节越精细。",
            "zh-TW": "擴展情緒詞彙。把「心情不好」換成「失望/被忽視/害怕」等更具體的表達；識別越精準，調節越精細。",
            "vi": "Mở rộng từ vựng cảm xúc. Thay “buồn bực” bằng “thất vọng / bị bỏ qua / sợ hãi”. Nhận biết càng chính xác, điều chỉnh càng tinh.",
            "id": "Perluas kosakata emosi. Ganti “tidak enak” dengan “kecewa / diabaikan / takut”. Pengenalan lebih presisi membuat regulasi lebih halus.",
        },
        "oneLiner": {
            "en": "With a bit more intentional training at this level, EQ can quickly become a real strength.",
            "ja": "このレベルで少し意識的に訓練すれば、EQはすぐに強みになり得ます。",
            "zh-CN": "在这个水平上再多一点刻意训练，EQ很快就能成为优势。",
            "zh-TW": "在這個水平上再多一點刻意訓練，EQ很快就能成為優勢。",
            "vi": "Chỉ cần luyện thêm một chút có ý thức ở mức này, EQ có thể nhanh chóng trở thành điểm mạnh.",
            "id": "Dengan sedikit latihan sadar di level ini, EQ bisa cepat menjadi kekuatan nyata.",
        },
        "shareLine": {
            "en": "My EQ self-diagnosis: Average Type ⚖️ Balanced — not overwhelmed, not ignoring emotions... but I do shake in high-intensity conflict lol → What's your EQ score?",
            "ja": "私のEQ自己診断：平均型 ⚖️ 圧倒されず無視もしないバランス…でも高強度の対立では揺れる、当たり ㅋㅋ → あなたのEQは？",
            "zh-CN": "我的EQ自我诊断：平均型 ⚖️ 不被压倒也不忽视情绪…但高强度冲突会动摇太准哈哈 → 你EQ几分？",
            "zh-TW": "我的EQ自我診斷：平均型 ⚖️ 不被壓倒也不忽視情緒…但高強度衝突會動搖太準哈哈 → 你EQ幾分？",
            "vi": "Tự chẩn đoán EQ: Trung bình ⚖️ Cân bằng — không bị lấn át cũng không bỏ qua cảm xúc... nhưng xung đột cực mạnh thì rung, đúng thật → Bạn mấy điểm?",
            "id": "Diagnosis EQ-ku: Rata-rata ⚖️ Seimbang — tidak kewalahan juga tidak mengabaikan emosi... tapi konflik intens goyah, bener wkwk → Skor EQ-mu?",
        },
    },
    {
        "title": {
            "en": "Emotions becoming a resource — EQ Advanced Type",
            "ja": "感情が資源になり始めた、EQ優秀型",
            "zh-CN": "情绪开始成为资源的EQ优秀型",
            "zh-TW": "情緒開始成為資源的EQ優秀型",
            "vi": "Loại EQ Nâng cao — cảm xúc bắt đầu trở thành nguồn lực",
            "id": "Tipe EQ Unggul — emosi mulai jadi sumber daya",
        },
        "eqLevel": {
            "en": "Advanced stage / all five elements above average",
            "ja": "優秀段階／5要素すべて平均以上",
            "zh-CN": "优秀阶段／五项要素都在平均水平以上",
            "zh-TW": "優秀階段／五項要素都在平均水準以上",
            "vi": "Giai đoạn nâng cao / cả năm yếu tố trên trung bình",
            "id": "Tahap unggul / kelima unsur di atas rata-rata",
        },
        "quote": {
            "en": "You know how to use emotions as information, not as interference.",
            "ja": "感情を妨げではなく情報として使える人です。",
            "zh-CN": "你知道把情绪当作信息，而不是干扰。",
            "zh-TW": "你知道把情緒當作資訊，而不是干擾。",
            "vi": "Bạn biết dùng cảm xúc như thông tin, không phải như trở ngại.",
            "id": "Kamu tahu memakai emosi sebagai informasi, bukan gangguan.",
        },
        "description": {
            "en": "You recognize your emotional state relatively quickly, maintain regulation under strong emotions, detect others' shifts, and separate feelings from problems in conflict. At this level, EQ is a practical strength in relationships, leadership, and crisis response.",
            "ja": "感情状態を比較的早く認識し、強い感情の前でも一定の調整力を保ち、他者の変化を察知し、対立で感情と問題を分けられます。このEQは関係・リーダーシップ・危機対応すべてで実質的な強みになります。",
            "zh-CN": "你能较快觉察情绪状态，在强烈情绪前仍保有一定调节力，察觉他人变化，并在冲突中区分情绪与问题。这个水平的EQ在关系、领导力和危机应对中都是实质优势。",
            "zh-TW": "你能較快覺察情緒狀態，在強烈情緒前仍保有一定調節力，察覺他人變化，並在衝突中區分情緒與問題。這個水平的EQ在關係、領導力和危機應對中都是實質優勢。",
            "vi": "Bạn nhận ra trạng thái cảm xúc khá nhanh, giữ điều chỉnh trước cảm xúc mạnh, phát hiện thay đổi ở người khác và tách cảm xúc khỏi vấn đề trong xung đột. Ở mức này, EQ là điểm mạnh thực tế trong quan hệ, lãnh đạo và ứng phó khủng hoống.",
            "id": "Kamu mengenali keadaan emosimu cukup cepat, menjaga regulasi di depan emosi kuat, mendeteksi perubahan orang lain, dan memisahkan emosi dari masalah saat konflik. Di level ini, EQ jadi kekuatan nyata dalam relasi, kepemimpinan, dan krisis.",
        },
        "eqType": {
            "en": "🧠 Advanced Type",
            "ja": "🧠 優秀型",
            "zh-CN": "🧠 优秀型",
            "zh-TW": "🧠 優秀型",
            "vi": "🧠 Nâng cao",
            "id": "🧠 Unggul",
        },
        "developFocus": {
            "en": "Expand social impact — move personal EQ into teams, organizations, and relationships as a whole",
            "ja": "社会的影響力の拡張——個人のEQをチーム・組織・関係全体へ広げる段階",
            "zh-CN": "扩展社会影响力——把个人EQ扩展到团队、组织与整体关系",
            "zh-TW": "擴展社會影響力——把個人EQ擴展到團隊、組織與整體關係",
            "vi": "Mở rộng ảnh hưởng xã hội — đưa EQ cá nhân vào đội nhóm, tổ chức và quan hệ rộng hơn",
            "id": "Perluas dampak sosial — bawa EQ pribadi ke tim, organisasi, dan relasi secara keseluruhan",
        },
        "fiveElementsAnalysis": {
            "en": "Self-awareness: high real-time recognition\nSelf-regulation: can maintain function under strong emotions\nMotivation: moves by internal standards\nEmpathy: sensitive to others' emotional shifts\nSocial skills: works naturally across diverse relationships",
            "ja": "自己認識：リアルタイム認識が高い\n自己調整：強い感情でも機能を維持\n内発的動機：内的基準で動ける\n共感：他者の感情変化を敏感に察知\n社会性：多様な関係で自然に機能",
            "zh-CN": "自我觉察：实时识别能力高\n自我调节：强烈情绪下仍能维持功能\n内在动机：能按内在标准行动\n共情：对他人情绪变化敏感\n社交能力：在多样关系中自然运作",
            "zh-TW": "自我覺察：即時識別能力高\n自我調節：強烈情緒下仍能維持功能\n內在動機：能按內在標準行動\n同理：對他人情緒變化敏感\n社交能力：在多樣關係中自然運作",
            "vi": "Tự nhận thức: nhận biết thời gian thực cao\nTự điều chỉnh: duy trì chức năng dù cảm xúc mạnh\nĐộng lực nội tại: hành động theo tiêu chuẩn nội tại\nĐồng cảm: nhạy với thay đổi cảm xúc người khác\nKỹ năng xã hội: hoạt động tự nhiên trong quan hệ đa dạng",
            "id": "Kesadaran diri: pengenalan real-time tinggi\nPengaturan diri: fungsi terjaga meski emosi kuat\nMotivasi batin: bergerak menurut standar internal\nEmpati: sensitif terhadap perubahan emosi orang lain\nKeterampilan sosial: bekerja alami di relasi beragam",
        },
        "strengths": {
            "en": "Self-awareness and empathy are exceptionally developed",
            "ja": "自己認識・共感が特に発達している",
            "zh-CN": "自我觉察与共情发展尤为突出",
            "zh-TW": "自我覺察與同理發展尤為突出",
            "vi": "Tự nhận thức và đồng cảm phát triển nổi bật",
            "id": "Kesadaran diri dan empati sangat berkembang",
        },
        "tryNow": {
            "en": "Use your ability to sense others' emotions to tune the atmosphere of a whole relationship. Try lifting others' EQ, not just your own.",
            "ja": "他者の感情を察知する力を、関係全体の雰囲気調整に使ってみる。自分だけでなく周囲のEQも引き上げる役割を試す。",
            "zh-CN": "把察觉他人情绪的能力，用来调节整段关系的氛围；试着不只提升自己的EQ，也带动身边的人。",
            "zh-TW": "把察覺他人情緒的能力，用來調節整段關係的氛圍；試著不只提升自己的EQ，也帶動身邊的人。",
            "vi": "Dùng khả năng cảm nhận cảm xúc người khác để điều chỉnh không khí cả mối quan hệ; thử nâng EQ người xung quanh, không chỉ của bạn.",
            "id": "Gunakan kemampuan merasakan emosi orang lain untuk menyesuaikan suasana seluruh relasi; coba angkat EQ orang sekitar, bukan hanya milikmu.",
        },
        "oneLiner": {
            "en": "Your EQ already makes you someone people can trust in many relationships.",
            "ja": "あなたのEQは、すでに多くの関係で信頼される人にしています。",
            "zh-CN": "你的EQ已经在许多关系中，让你成为值得信任的人。",
            "zh-TW": "你的EQ已經在許多關係中，讓你成為值得信任的人。",
            "vi": "EQ của bạn đã khiến bạn trở thành người đáng tin trong nhiều mối quan hệ.",
            "id": "EQ-mu sudah membuatmu orang yang dipercaya di banyak relasi.",
        },
        "shareLine": {
            "en": "My EQ self-diagnosis: Advanced Type 🧠 Using emotions as information... empathy and social skills are strengths, so true → IQ matters less than EQ — try it too",
            "ja": "私のEQ自己診断：優秀型 🧠 感情を情報として使う…共感・社会性が強み、当たり → IQよりEQが大事、あなたも測って",
            "zh-CN": "我的EQ自我诊断：优秀型 🧠 把情绪当信息用…共情和社交是优势太准 → IQ不如EQ重要，你也测测",
            "zh-TW": "我的EQ自我診斷：優秀型 🧠 把情緒當資訊用…同理和社交是優勢太準 → IQ不如EQ重要，你也測測",
            "vi": "Tự chẩn đoán EQ: Nâng cao 🧠 Dùng cảm xúc như thông tin... đồng cảm và kỹ năng xã hội là điểm mạnh, đúng thật → EQ quan trọng hơn IQ, bạn thử đi",
            "id": "Diagnosis EQ-ku: Unggul 🧠 Pakai emosi sebagai informasi... empati dan sosial memang kekuatan → EQ lebih penting dari IQ, coba juga",
        },
    },
    {
        "title": {
            "en": "Leading relationships through emotion — EQ Expert Type",
            "ja": "感情で関係を導く、EQ高手型",
            "zh-CN": "用情绪引领关系的EQ高手型",
            "zh-TW": "用情緒引領關係的EQ高手型",
            "vi": "Loại EQ Cao thủ — dẫn dắt quan hệ bằng cảm xúc",
            "id": "Tipe EQ Ahli — memimpin relasi lewat emosi",
        },
        "eqLevel": {
            "en": "Expert stage / all five elements at high level",
            "ja": "高手段階／5要素すべて高水準",
            "zh-CN": "高手阶段／五项要素都达高水平",
            "zh-TW": "高手階段／五項要素都達高水平",
            "vi": "Giai đoạn cao thủ / cả năm yếu tố ở mức cao",
            "id": "Tahap ahli / kelima unsur di level tinggi",
        },
        "quote": {
            "en": "Your ability to read, handle, and use emotions has reached a substantial level.",
            "ja": "感情を読み、扱い、活かす能力がかなりの水準に達しています。",
            "zh-CN": "你读懂、处理并运用情绪的能力已达到相当高的水平。",
            "zh-TW": "你讀懂、處理並運用情緒的能力已達到相當高的水準。",
            "vi": "Khả năng đọc, xử lý và tận dụng cảm xúc của bạn đã đạt mức đáng kể.",
            "id": "Kemampuan membaca, menangani, dan memanfaatkan emosi sudah mencapai level substansial.",
        },
        "description": {
            "en": "You recognize emotions almost in real time, maintain functional performance under intense emotion, detect nonverbal signals, separate feelings from problems in conflict, and build relationships naturally across diverse backgrounds. At this level, EQ stands out in leadership, coaching, counseling, education, and any people-centered field.",
            "ja": "感情をほぼリアルタイムで認識し、強い感情下でも機能を保ち、非言語信号まで察知し、対立で感情と問題を分け、多様な背景の人々と自然に関係を築きます。このEQはリーダーシップ・コーチング・カウンセリング・教育など人を扱う分野で際立った強みになります。",
            "zh-CN": "你几乎能实时识别情绪，在强烈情绪下仍维持功能，察觉非语言信号，在冲突中区分情绪与问题，并与不同背景的人自然建立关系。这个水平的EQ在领导、教练、咨询、教育等与人相关的领域尤为突出。",
            "zh-TW": "你幾乎能即時識別情緒，在強烈情緒下仍維持功能，察覺非語言信號，在衝突中區分情緒與問題，並與不同背景的人自然建立關係。這個水平的EQ在領導、教練、諮商、教育等與人相關的領域尤為突出。",
            "vi": "Bạn gần như nhận ra cảm xúc theo thời gian thực, duy trì hiệu suất dù cảm xúc mạnh, phát hiện tín hiệu phi ngôn ngữ, tách cảm xúc khỏi vấn đề trong xung đột và tự nhiên xây quan hệ với người khác nền tảng. Ở mức này, EQ nổi bật trong lãnh đạo, coaching, tư vấn, giáo dục và mọi lĩnh vực liên quan con người.",
            "id": "Kamu mengenali emosi hampir real-time, menjaga kinerja meski emosi intens, mendeteksi sinyal nonverbal, memisahkan emosi dari masalah saat konflik, dan membangun relasi alami lintas latar. Di level ini, EQ menonjol di kepemimpinan, coaching, konseling, pendidikan, dan bidang berbasis manusia.",
        },
        "eqType": {
            "en": "💜 Expert Type",
            "ja": "💜 高手型",
            "zh-CN": "💜 高手型",
            "zh-TW": "💜 高手型",
            "vi": "💜 Cao thủ",
            "id": "💜 Ahli",
        },
        "developFocus": {
            "en": "Sustain EQ with ongoing check-ins — high EQ can absorb too much of others' emotions and lead to burnout. Manage boundaries and recovery routines.",
            "ja": "EQの継続的な点検——高いEQは他者の感情を吸収しすぎて消耗する場合がある。境界設定と回復ルーティンの管理",
            "zh-CN": "持续检视EQ——高EQ有时会把他人情绪吸收过多而耗尽自己；需要边界与恢复Routine。",
            "zh-TW": "持續檢視EQ——高EQ有時會把他人情緒吸收過多而耗盡自己；需要邊界與恢復Routine。",
            "vi": "Duy trì EQ bằng kiểm tra liên tục — EQ cao có thể hấp thụ quá nhiều cảm xúc người khác và kiệt sức; cần ranh giới và thói quen phục hồi.",
            "id": "Pertahankan EQ dengan pengecekan berkala — EQ tinggi bisa menyerap terlalu banyak emosi orang lain dan kelelahan; kelola batas dan rutinitas pemulihan.",
        },
        "fiveElementsAnalysis": {
            "en": "Self-awareness: recognizes emotion, cause, and impact together\nSelf-regulation: conscious choice even in extreme emotion\nMotivation: direction exists independent of external reward\nEmpathy: detects emotions even without words\nSocial skills: naturally shapes atmosphere in any setting",
            "ja": "自己認識：感情・原因・影響を同時に認識\n自己調整：極限感情でも意識的選択が可能\n内発的動機：外部報酬と無関係に方向がある\n共感：言わなくても察知するレベル\n社会性：どんな場でも自然に雰囲気を作る",
            "zh-CN": "自我觉察：同时识别情绪、原因与影响\n自我调节：极端情绪下仍能conscious选择\n内在动机：不依赖外部奖励也有方向\n共情：即使未说出口也能察觉\n社交能力：在任何场合都能自然营造氛围",
            "zh-TW": "自我覺察：同時識別情緒、原因與影響\n自我調節：極端情緒下仍能conscious選擇\n內在動機：不依賴外部獎勵也有方向\n同理：即使未說出口也能察覺\n社交能力：在任何場合都能自然營造氛圍",
            "vi": "Tự nhận thức: nhận biết cảm xúc, nguyên nhân và tác động cùng lúc\nTự điều chỉnh: lựa chọn có ý thức dù cảm xúc cực đoan\nĐộng lực nội tại: có hướng đi không phụ thuộc phần thưởng bên ngoài\nĐồng cảm: phát hiện cảm xúc dù chưa nói ra\nKỹ năng xã hội: tự nhiên tạo không khí ở mọi bối cảnh",
            "id": "Kesadaran diri: mengenali emosi, penyebab, dan dampak sekaligus\nPengaturan diri: pilihan sadar meski emosi ekstrem\nMotivasi batin: arah ada tanpa imbalan eksternal\nEmpati: mendeteksi emosi meski belum diucapkan\nKeterampilan sosial: alami membentuk suasana di setting apa pun",
        },
        "strengths": {
            "en": "All five elements are high; empathy, social skills, and self-regulation are especially strong",
            "ja": "5要素すべて高水準。特に共感・社会性・自己調整が優れている",
            "zh-CN": "五项要素都高；尤其共情、社交能力与自我调节突出",
            "zh-TW": "五項要素都高；尤其同理、社交能力與自我調節突出",
            "vi": "Cả năm yếu tố đều cao; đặc biệt mạnh ở đồng cảm, kỹ năng xã hội và tự điều chỉnh",
            "id": "Kelima unsur tinggi; terutama empati, keterampilan sosial, dan pengaturan diri",
        },
        "cautions": {
            "en": "The higher the EQ, the more you may absorb others' emotions. Watch for compassion fatigue and build recovery routines.",
            "ja": "EQが高いほど他者の感情を吸収する負担が大きくなる。共感疲労に注意し、回復ルーティンが必要。",
            "zh-CN": "EQ越高，越可能吸收他人情绪；注意共情疲劳，并建立恢复Routine。",
            "zh-TW": "EQ越高，越可能吸收他人情緒；注意同理疲勞，並建立恢復Routine。",
            "vi": "EQ càng cao càng dễ hấp thụ cảm xúc người khác; chú ý mệt mỏi đồng cảm và xây thói quen phục hồi.",
            "id": "Semakin tinggi EQ, semakin mudah menyerap emosi orang lain; waspadai compassion fatigue dan bangun rutinitas pemulihan.",
        },
        "oneLiner": {
            "en": "You shine most in spaces where emotions are present. Managing that ability so it does not burn you out is the remaining task.",
            "ja": "感情がある空間で最も輝く人です。その能力を消耗させない管理が残された課題です。",
            "zh-CN": "你在有情绪的空间里最发光；不让这项能力耗尽自己，是剩下的课题。",
            "zh-TW": "你在有情緒的空間裡最發光；不讓這項能力耗盡自己，是剩下的課題。",
            "vi": "Bạn tỏa sáng nhất ở không gian có cảm xúc; quản lý để năng lực đó không làm bạn kiệt sức là bài học còn lại.",
            "id": "Kamu paling bersinar di ruang yang penuh emosi; mengelola agar kemampuan itu tidak membakar diri adalah tugas tersisa.",
        },
        "shareLine": {
            "en": "My EQ self-diagnosis: Expert Type 💜 Sensing emotions even without words... compassion fatigue warning is so true → IQ matters less than EQ — what's your score?",
            "ja": "私のEQ自己診断：高手型 💜 言わなくても察知…共感疲労注意、当たりすぎ ㅠ → IQよりEQが大事、あなたは？",
            "zh-CN": "我的EQ自我诊断：高手型 💜 不说也能察觉…共情疲劳提醒太准 → IQ不如EQ重要，你几分？",
            "zh-TW": "我的EQ自我診斷：高手型 💜 不說也能察覺…同理疲勞提醒太準 → IQ不如EQ重要，你幾分？",
            "vi": "Tự chẩn đoán EQ: Cao thủ 💜 Chưa nói cũng cảm nhận được... cảnh báo mệt đồng cảm quá đúng → EQ quan trọng hơn IQ, bạn mấy điểm?",
            "id": "Diagnosis EQ-ku: Ahli 💜 Terasa meski belum diucapkan... peringatan compassion fatigue bener banget → EQ lebih penting dari IQ, skormu?",
        },
    },
    {
        "title": {
            "en": "Emotions fully integrated — EQ Master Type",
            "ja": "感情が完全に統合された、EQマスター型",
            "zh-CN": "情绪已完全整合的EQ大师型",
            "zh-TW": "情緒已完全整合的EQ大師型",
            "vi": "Loại EQ Bậc thầy — cảm xúc đã được tích hợp hoàn toàn",
            "id": "Tipe EQ Master — emosi sepenuhnya terintegrasi",
        },
        "eqLevel": {
            "en": "Master stage / all five elements at top level",
            "ja": "マスター段階／5要素すべて最上級",
            "zh-CN": "大师阶段／五项要素都达顶级",
            "zh-TW": "大師階段／五項要素都達頂級",
            "vi": "Giai đoạn bậc thầy / cả năm yếu tố ở mức cao nhất",
            "id": "Tahap master / kelima unsur di level tertinggi",
        },
        "quote": {
            "en": "Your ability to recognize, regulate, and use emotions is integrated into how you live.",
            "ja": "感情を認識し、調整し、活かす能力が生き方として統合されています。",
            "zh-CN": "你识别、调节并运用情绪的能力，已经融入你的生活方式。",
            "zh-TW": "你識別、調節並運用情緒的能力，已經融入你的生活方式。",
            "vi": "Khả năng nhận biết, điều chỉnh và tận dụng cảm xúc đã trở thành cách bạn sống.",
            "id": "Kemampuan mengenali, mengatur, dan memanfaatkan emosi sudah terintegrasi dalam cara hidupmu.",
        },
        "description": {
            "en": "You instantly recognize emotions and their causes, make conscious choices in any emotional situation, sense others before they speak, pinpoint core issues in complex conflict, and naturally connect people across backgrounds. This matches the pattern Goleman found in top-level leaders.",
            "ja": "感情と原因を即座に認識し、どんな感情状況でも意識的選択ができ、相手が話す前に感じ取り、複雑な対立でも核心を捉え、多様な背景の人々を自然につなぎます。ゴールマンが最高レベルのリーダーで見出したパターンです。",
            "zh-CN": "你能即时识别情绪与原因，在任何情绪情境中做出conscious选择，在对方开口前就感受到其情绪，在复杂冲突中抓住核心，并自然连接不同背景的人——这与戈尔曼发现的顶级领导者模式一致。",
            "zh-TW": "你能即時識別情緒與原因，在任何情緒情境中做出conscious選擇，在對方開口前就感受到其情緒，在複雜衝突中抓住核心，並自然連結不同背景的人——這與高曼發現的頂級領導者模式一致。",
            "vi": "Bạn nhận ra cảm xúc và nguyên nhân ngay lập tức, chọn lựa có ý thức trong mọi tình huống cảm xúc, cảm nhận người khác trước khi họ nói, nắm lõi trong xung đột phức tạp và tự nhiên kết nối người khác nền tảng — giống mẫu Goleman thấy ở nhà lãnh đạo hàng đầu.",
            "id": "Kamu langsung mengenali emosi dan penyebabnya, memilih secara sadar dalam situasi emosional apa pun, merasakan orang lain sebelum mereka bicara, menemukan inti dalam konflik kompleks, dan menghubungkan orang lintas latar — pola yang Goleman temukan pada pemimpin level tertinggi.",
        },
        "eqType": {
            "en": "👑 Master Type",
            "ja": "👑 マスター型",
            "zh-CN": "👑 大师型",
            "zh-TW": "👑 大師型",
            "vi": "👑 Bậc thầy",
            "id": "👑 Master",
        },
        "developFocus": {
            "en": "All five elements are top-level; self-awareness and social skills are integrated throughout life",
            "ja": "5要素すべて最上級。特に自己認識と社会性が人生全体に統合されている",
            "zh-CN": "五项要素都达顶级；尤其自我觉察与社交能力已融入整个人生",
            "zh-TW": "五項要素都達頂級；尤其自我覺察與社交能力已融入整個人生",
            "vi": "Cả năm yếu tố đều cao nhất; đặc biệt tự nhận thức và kỹ năng xã hội hòa vào cả cuộc sống",
            "id": "Kelima unsur level tertinggi; terutama kesadaran diri dan keterampilan sosial terintegrasi sepanjang hidup",
        },
        "cautions": {
            "en": "High EQ can read others' emotions so well that you take unnecessary responsibility or burn out. Boundaries and recovery are the EQ master's final lesson.",
            "ja": "高いEQは他者の感情を読みすぎて、不要な責任を負ったり消耗したりすることがある。境界設定と回復がEQマスターの最後の課題。",
            "zh-CN": "高EQ有时会把他人情绪读得太准，因而承担不必要的责任或耗尽自己；边界与恢复是EQ大师最后的课题。",
            "zh-TW": "高EQ有時會把他人情緒讀得太準，因而承擔不必要的責任或耗盡自己；邊界與恢復是EQ大師最後的課題。",
            "vi": "EQ cao có thể đọc cảm xúc người khác quá giỏi khiến bạn gánh trách nhiệm không cần thiết hoặc kiệt sức; ranh giới và phục hồi là bài học cuối của bậc thầy EQ.",
            "id": "EQ tinggi bisa membaca emosi orang lain terlalu baik sehingga menanggung tanggung jawab tidak perlu atau kelelahan; batas dan pemulihan adalah pelajaran terakhir master EQ.",
        },
        "masterTraits": {
            "en": "Uses emotions as information without denying or suppressing them\nEmpathizes with others while keeping self-boundaries\nTends to become someone others trust and rely on in any environment",
            "ja": "感情を否定・抑圧せず情報として使う\n他者の感情に共感しながら自分を失わない均衡がある\nどんな環境でも信頼され頼られる存在になりやすい",
            "zh-CN": "不否认或压抑情绪，而是把情绪当信息使用\n在共情他人的同时保有自我边界\n在任何环境中都容易成为被信任、被依靠的人",
            "zh-TW": "否認或壓抑情緒，而是把情緒當資訊使用\n在共情他人的同時保有自我邊界\n在任何環境中都容易成為被信任、被依靠的人",
            "vi": "Không phủ nhận hay nén cảm xúc mà dùng chúng như thông tin\nĐồng cảm với người khác nhưng vẫn giữ ranh giới bản thân\nDễ trở thành người được tin cậy và dựa vào ở mọi môi trường",
            "id": "Tidak menolak atau menekan emosi, melainkan memakainya sebagai informasi\nBerempati sambil menjaga batas diri\nCenderung jadi orang yang dipercaya dan diandalkan di lingkungan apa pun",
        },
        "certificationPhrase": {
            "en": "EQ Master achieved 👑 Top 5% in recognizing, regulating, and using emotions",
            "ja": "EQマスター達成 👑 感情認識・調整・活用 最上級5%",
            "zh-CN": "EQ大师达成 👑 情绪识别·调节·运用 顶级5%",
            "zh-TW": "EQ大師達成 👑 情緒識別·調節·運用 頂級5%",
            "vi": "Đạt EQ Master 👑 Top 5% nhận biết, điều chỉnh và tận dụng cảm xúc",
            "id": "EQ Master tercapai 👑 Top 5% mengenali, mengatur, dan memanfaatkan emosi",
        },
        "oneLiner": {
            "en": "Spaces you enter grow warmer. Relationships you are in grow deeper. That is the power of an EQ master.",
            "ja": "あなたがいる空間は少し温かくなり、あなたがいる関係は少し深くなります。それがEQマスターの力です。",
            "zh-CN": "你在的空间会更温暖，你在的关系会更深——这就是EQ大师的力量。",
            "zh-TW": "你在的空間會更溫暖，你在的關係會更深——這就是EQ大師的力量。",
            "vi": "Không gian bạn bước vào ấm hơn, mối quan hệ bạn ở trong sâu hơn — đó là sức mạnh của bậc thầy EQ.",
            "id": "Ruang yang kamu masuki jadi lebih hangat, relasi yang kamu hadiri jadi lebih dalam — itulah kekuatan EQ master.",
        },
        "shareLine": {
            "en": "My EQ self-diagnosis: Master Type 👑 Emotions integrated into how I live... spaces feel warmer because of me, I admit it lol → IQ matters less than EQ — try it too",
            "ja": "私のEQ自己診断：マスター型 👑 感情が生き方に統合…いる空間が温かくなる、認める ㅋㅋ → IQよりEQが大事、あなたもやって",
            "zh-CN": "我的EQ自我诊断：大师型 👑 情绪融入生活方式…我在的地方更温暖，承认哈哈 → IQ不如EQ重要，你也试试",
            "zh-TW": "我的EQ自我診斷：大師型 👑 情緒融入生活方式…我在的地方更溫暖，承認哈哈 → IQ不如EQ重要，你也試試",
            "vi": "Tự chẩn đoán EQ: Bậc thầy 👑 Cảm xúc hòa vào cách sống... không gian ấm hơn vì mình, thừa nhận ㅋㅋ → EQ quan trọng hơn IQ, bạn thử đi",
            "id": "Diagnosis EQ-ku: Master 👑 Emosi terintegrasi dalam hidup... ruang jadi lebih hangat karena aku, ngaku wkwk → EQ lebih penting dari IQ, coba juga",
        },
    },
]

_TYPE_META = [
    ("Type1", "🌱"),
    ("Type2", "🌿"),
    ("Type3", "⚖️"),
    ("Type4", "🧠"),
    ("Type5", "💜"),
    ("Type6", "👑"),
]

_RESULT_FIELDS = [
    "title",
    "eqLevel",
    "quote",
    "description",
    "eqType",
    "developFocus",
    "fiveElementsAnalysis",
    "strengths",
    "cautions",
    "masterTraits",
    "tryNow",
    "certificationPhrase",
    "oneLiner",
    "shareLine",
]


def _build_questions() -> list[dict]:
    out: list[dict] = []
    for qi, item in enumerate(_Q_I18N):
        q_m = _ml(
            _ko_q(qi),
            item["q"]["en"],
            item["q"]["ja"],
            item["q"]["zh-CN"],
            item["q"]["zh-TW"],
            item["q"]["vi"],
            item["q"]["id"],
        )
        opts: list[tuple[dict[str, str], int]] = []
        for oi, opt in enumerate(item["opts"]):
            opts.append(
                (
                    _ml(
                        _ko_o(qi, oi),
                        opt["en"],
                        opt["ja"],
                        opt["zh-CN"],
                        opt["zh-TW"],
                        opt["vi"],
                        opt["id"],
                    ),
                    oi,
                )
            )
        out.append(q(q_m, opts))
    return out


def _field_ml(type_idx: int, field: str, i18n: dict[str, str] | None) -> dict[str, str]:
    ko = _ko_r(type_idx, field)
    if not ko:
        return EMPTY
    if not i18n:
        raise ValueError(f"Missing i18n for result field {field!r} on Type{type_idx + 1}")
    return _ml(ko, i18n["en"], i18n["ja"], i18n["zh-CN"], i18n["zh-TW"], i18n["vi"], i18n["id"])


def _build_results() -> list[dict]:
    out: list[dict] = []
    for ti, (type_name, emoji) in enumerate(_TYPE_META):
        i18n = _R_I18N[ti]
        fields = {field: _field_ml(ti, field, i18n.get(field)) for field in _RESULT_FIELDS}
        out.append(r(type_name, emoji, **fields))
    return out


QUESTIONS = _build_questions()
RESULTS = _build_results()
