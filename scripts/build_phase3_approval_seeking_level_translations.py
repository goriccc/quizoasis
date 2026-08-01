"""Translation data for phase3 approval-seeking level test (imported by build script)."""
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


_gen_path = Path(__file__).resolve().parent / "gen_phase3_approval_seeking_level_data.py"
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
    if len(s) >= 2 and s[0] == '"' and s[-1] == '"':
        return s[1:-1]
    return s


def _ko_r(type_idx: int, field: str) -> str:
    data = KO_RESULTS[type_idx + 1]
    key_map = {
        "title": "title_ko",
        "desireLevel": "desire_level",
        "quote": "quote",
        "description": "description",
        "desireType": "desire_type",
        "evaluationImpact": "evaluation_impact",
        "strengths": "strengths",
        "cautions": "cautions",
        "tryNow": "try_now",
        "certificationPhrase": "certification",
        "oneLiner": "one_liner",
        "shareLine": "share_line",
    }
    if field not in key_map:
        raise KeyError(field)
    val = data.get(key_map[field], "")
    if field == "oneLiner":
        return _strip_quotes(val)
    return val


def _ko_cautions_title_key(type_idx: int) -> str:
    return KO_RESULTS[type_idx + 1]["cautions_title_key"]


def _ml(ko: str, en: str, ja: str, zh_cn: str, zh_tw: str, vi: str, id_: str) -> dict[str, str]:
    return M(ko=ko, en=en, ja=ja, **{"zh-CN": zh_cn, "zh-TW": zh_tw}, vi=vi, id=id_)


# --- Question translations (en/ja/zh-CN/zh-TW/vi/id) ---
_Q_I18N: list[dict] = [
    {
        "q": {
            "en": "After posting on SNS, how often do you check likes and comments?",
            "ja": "SNSに投稿した後、いいね・コメント数を確認するあなたは？",
            "zh-CN": "在SNS发帖后，你会怎样查看点赞和评论数？",
            "zh-TW": "在SNS發文後，你會怎樣查看按讚和留言數？",
            "vi": "Sau khi đăng bài lên SNS, bạn có thường kiểm tra lượt thích và bình luận không?",
            "id": "Setelah posting di SNS, seberapa sering kamu cek like dan komentar?",
        },
        "opts": [
            {
                "en": "I barely check. Even with no reaction, it does not bother me much",
                "ja": "あまり確認しない。反応がなくてもあまり気にならない",
                "zh-CN": "几乎不看。就算没反应也不太在意",
                "zh-TW": "幾乎不看。就算沒反應也不太在意",
                "vi": "Hầu như không kiểm tra. Dù không có phản hồi cũng không bận tâm lắm",
                "id": "Hampir tidak cek. Meski tidak ada reaksi, tidak terlalu mengganggu",
            },
            {
                "en": "I check sometimes, but low reaction does not change my mood much",
                "ja": "たまに確認するが、反応が少なくても気分は大きく変わらない",
                "zh-CN": "偶尔看看，但反应少也不太影响心情",
                "zh-TW": "偶爾看看，但反應少也不太影響心情",
                "vi": "Thỉnh thoảng xem, nhưng ít phản hồi cũng không làm tâm trạng thay đổi nhiều",
                "id": "Kadang cek, tapi reaksi sedikit tidak banyak mengubah mood",
            },
            {
                "en": "I check quite often after posting. Low reaction makes me think about how to post next time",
                "ja": "投稿後かなり頻繁に確認する。反応が少ないと次の投稿方法を考える",
                "zh-CN": "发完后经常查看。反应少时会想下次怎么发",
                "zh-TW": "發完後經常查看。反應少時會想下次怎麼發",
                "vi": "Khá thường xuyên kiểm tra sau khi đăng. Ít phản hồi khiến nghĩ cách đăng lần sau",
                "id": "Cukup sering cek setelah posting. Reaksi sedikit membuatku pikir cara posting berikutnya",
            },
            {
                "en": "I keep checking reactions for a while after posting. Low reaction sinks my mood or makes me want to delete the post",
                "ja": "投稿後しばらく反応を確認し続ける。反応が少ないと気分が落ちたり投稿を下ろしたくなる",
                "zh-CN": "发完会持续看反应。反应少会心情低落或想删帖",
                "zh-TW": "發完會持續看反應。反應少會心情低落或想刪文",
                "vi": "Cứ kiểm tra phản hồi một lúc sau khi đăng. Ít phản hồi làm tâm trạng tụt hoặc muốn gỡ bài",
                "id": "Terus cek reaksi setelah posting. Reaksi sedikit menurunkan mood atau bikin ingin hapus posting",
            },
        ],
    },
    {
        "q": {
            "en": "Your post got negative comments or reactions. What do you do?",
            "ja": "自分の投稿に否定的なコメントや反応がついた。あなたは？",
            "zh-CN": "你的帖子收到了负面评论或反应。你会？",
            "zh-TW": "你的貼文收到了負面留言或反應。你會？",
            "vi": "Bài đăng của bạn nhận bình luận hoặc phản ứng tiêu cực. Bạn làm gì?",
            "id": "Postinganmu dapat komentar atau reaksi negatif. Kamu?",
        },
        "opts": [
            {
                "en": "It does not bother me much. Not everyone has to like it",
                "ja": "あまり気にならない。全員に好かれる必要はない",
                "zh-CN": "不太在意。不是所有人都会喜欢",
                "zh-TW": "不太在意。不是所有人都會喜歡",
                "vi": "Không bận tâm lắm. Không phải ai cũng phải thích",
                "id": "Tidak terlalu mengganggu. Tidak semua orang harus suka",
            },
            {
                "en": "I feel bad briefly but move on quickly",
                "ja": "少し気分が悪いがすぐ乗り越える",
                "zh-CN": "会短暂不爽，但很快过去",
                "zh-TW": "會短暫不爽，但很快過去",
                "vi": "Buồn một chút nhưng nhanh chóng qua",
                "id": "Sedikit jelek perasaannya tapi cepat move on",
            },
            {
                "en": "It bothers me quite a bit. I keep thinking about the comment and why that reaction happened",
                "ja": "かなり気になる。そのコメントがずっと頭に残り、なぜそうなったか考える",
                "zh-CN": "挺在意的。会一直想那条评论和为什么会有这种反应",
                "zh-TW": "挺在意的。會一直想那條留言和為什麼會有這種反應",
                "vi": "Khá bận tâm. Cứ nghĩ về bình luận đó và vì sao phản ứng như vậy",
                "id": "Cukup mengganggu. Terus terpikir komentar itu dan kenapa reaksinya begitu",
            },
            {
                "en": "The comment loops in my head all day. My mood crashes badly and I am unsure what to post next",
                "ja": "一日中そのコメントが頭から離れない。気分が大きく崩れ、次に何を投稿すべきか分からなくなる",
                "zh-CN": "那条评论整天在脑子里转。心情严重受影响，不知道下次该发什么",
                "zh-TW": "那條留言整天在腦子裡轉。心情嚴重受影響，不知道下次該發什麼",
                "vi": "Bình luận đó quay trong đầu cả ngày. Tâm trạng sụp mạnh và không biết đăng gì tiếp",
                "id": "Komentar itu muter di kepala seharian. Mood hancur dan bingung mau posting apa lagi",
            },
        ],
    },
    {
        "q": {
            "en": "When someone praises you, what happens?",
            "ja": "誰かから褒められたとき、あなたは？",
            "zh-CN": "当有人夸奖你时，你会？",
            "zh-TW": "當有人稱讚你時，你會？",
            "vi": "Khi ai đó khen bạn, bạn thế nào?",
            "id": "Ketika seseorang memuji kamu, kamu?",
        },
        "opts": [
            {
                "en": "I feel grateful, but it does not greatly change how I see myself",
                "ja": "感謝するが、自分への評価は大きく変わらない",
                "zh-CN": "会感谢，但不会大幅改变我对自己的看法",
                "zh-TW": "會感謝，但不會大幅改變我對自己的看法",
                "vi": "Biết ơn nhưng không thay đổi nhiều cách nhìn bản thân",
                "id": "Berterima kasih, tapi tidak banyak mengubah cara melihat diri sendiri",
            },
            {
                "en": "It feels good, but the feeling does not last long",
                "ja": "気分は良くなるが、その気分は長く続かない",
                "zh-CN": "心情会变好，但不会持续很久",
                "zh-TW": "心情會變好，但不會持續很久",
                "vi": "Thấy vui nhưng cảm giác không kéo dài lâu",
                "id": "Perasaan bagus, tapi tidak bertahan lama",
            },
            {
                "en": "It lifts my mood a lot and affects my whole day. I feel closer to that person",
                "ja": "かなり気分が良くなり一日に影響する。その人との関係もより良く感じる",
                "zh-CN": "心情会明显变好并影响一整天，和那个人的关系也感觉更亲近",
                "zh-TW": "心情會明顯變好並影響一整天，和那個人的關係也感覺更親近",
                "vi": "Tâm trạng tăng rõ và ảnh hưởng cả ngày. Cảm thấy gần người đó hơn",
                "id": "Mood naik banyak dan memengaruhi seharian. Merasa lebih dekat dengan orang itu",
            },
            {
                "en": "The praise sets my mood for the day. Without praise, I feel unsure if I am doing well",
                "ja": "その褒め言葉がその日の気分を左右する。褒められないとうまくできているか不安になる",
                "zh-CN": "那句夸奖决定我当天的心情。没收到夸奖会不安，怀疑自己做得好不好",
                "zh-TW": "那句稱讚決定我當天的心情。沒收到稱讚會不安，懷疑自己做得好不好",
                "vi": "Lời khen quyết định tâm trạng cả ngày. Không được khen thì lo không biết mình có làm tốt không",
                "id": "Pujian itu mengatur mood hariku. Tanpa pujian, aku ragu apakah aku melakukan dengan baik",
            },
        ],
    },
    {
        "q": {
            "en": "A trusted or important person gives you criticism or negative feedback. What do you do?",
            "ja": "信頼していた人や大切な人から批判や否定的な評価を受けた。あなたは？",
            "zh-CN": "信任或重要的人给了批评或负面评价。你会？",
            "zh-TW": "信任或重要的人給了批評或負面評價。你會？",
            "vi": "Người bạn tin hoặc quan trọng phê bình hoặc đánh giá tiêu cực. Bạn làm gì?",
            "id": "Orang tepercaya atau penting memberi kritik atau umpan balik negatif. Kamu?",
        },
        "opts": [
            {
                "en": "If valid, I accept it; if not, I let it go. I do not shake much",
                "ja": "妥当なら受け入れ、そうでなければ流す。大きく揺れない",
                "zh-CN": "有道理就接受，没有就放过。不太动摇",
                "zh-TW": "有道理就接受，沒有就放過。不太動搖",
                "vi": "Hợp lý thì nhận, không thì buông. Không lay chuyển nhiều",
                "id": "Jika valid, terima; jika tidak, lepaskan. Tidak goyah banyak",
            },
            {
                "en": "It hurts, but after some time I can think more objectively",
                "ja": "傷つくが、時間が経てば客観的に考えられる",
                "zh-CN": "会受伤，但过一阵能更客观地看",
                "zh-TW": "會受傷，但過一陣能更客觀地看",
                "vi": "Đau nhưng sau một thời gian nghĩ khách quan hơn",
                "id": "Terluka, tapi setelah waktu bisa berpikir lebih objektif",
            },
            {
                "en": "I shake quite a lot and keep doubting whether the criticism is true",
                "ja": "かなり揺れる。その言葉が正しいのか自分を疑い続ける",
                "zh-CN": "会明显动摇，不断怀疑那句话是不是对的",
                "zh-TW": "會明顯動搖，不斷懷疑那句話是不是對的",
                "vi": "Lay chuyển khá nhiều và cứ nghi ngờ lời đó có đúng không",
                "id": "Goyah cukup banyak dan terus meragukan apakah kritik itu benar",
            },
            {
                "en": "The words will not leave my head. Confidence drops sharply and I keep worrying how they see me",
                "ja": "その言葉が頭から離れない。自信が大きく落ち、その人からどう見られているか気になり続ける",
                "zh-CN": "那句话离不开脑海。自信大幅下降，一直担心对方怎么看我",
                "zh-TW": "那句話離不開腦海。自信大幅下降，一直擔心對方怎麼看我",
                "vi": "Lời đó không rời khỏi đầu. Tự tin sụt mạnh và cứ lo họ nhìn mình thế nào",
                "id": "Kata-kata itu tidak lepas dari kepala. Percaya diri turun tajam dan terus khawatir bagaimana mereka melihatku",
            },
        ],
    },
    {
        "q": {
            "en": "When eating alone or sitting in a cafe in public, you:",
            "ja": "公共の場で一人で食事したりカフェに座っているとき、あなたは？",
            "zh-CN": "在公共场所独自吃饭或坐在咖啡馆时，你会？",
            "zh-TW": "在公共場所獨自吃飯或坐在咖啡館時，你會？",
            "vi": "Khi ăn một mình hoặc ngồi quán cà phê ở nơi công cộng, bạn:",
            "id": "Saat makan sendiri atau duduk di kafe di tempat umum, kamu:",
        },
        "opts": [
            {
                "en": "Totally natural. Others' gaze does not bother me",
                "ja": "完全に自然。他人の視線は気にならない",
                "zh-CN": "完全自然。不太在意别人的目光",
                "zh-TW": "完全自然。不太在意別人的目光",
                "vi": "Hoàn toàn tự nhiên. Ánh mắt người khác không làm phiền",
                "id": "Sangat natural. Pandangan orang lain tidak mengganggu",
            },
            {
                "en": "I notice it sometimes but forget quickly and focus on my own thing",
                "ja": "たまに意識するがすぐ忘れて自分のことに集中する",
                "zh-CN": "偶尔意识到，但很快忘记并专注自己的事",
                "zh-TW": "偶爾意識到，但很快忘記並專注自己的事",
                "vi": "Thỉnh thoảng để ý nhưng nhanh quên và tập trung việc mình",
                "id": "Kadang sadar tapi cepat lupa dan fokus urusanku",
            },
            {
                "en": "I sometimes wonder how others see me. If I feel watched, my posture or behavior shifts a little",
                "ja": "他人がどう見ているかたまに考える。視線を感じると姿勢や行動が少し変わる",
                "zh-CN": "有时会想别人怎么看我。感到被看时会稍微改变姿态或行为",
                "zh-TW": "有時會想別人怎麼看我。感到被看時會稍微改變姿態或行為",
                "vi": "Đôi khi nghĩ người khác nhìn mình thế nào. Cảm thấy bị nhìn thì tư thế hoặc hành vi hơi đổi",
                "id": "Kadang bertanya-tanya bagaimana orang lain melihatku. Jika merasa dilihat, postur atau perilaku sedikit berubah",
            },
            {
                "en": "I always feel others watching. I look at my phone or act busy so I do not look awkward alone",
                "ja": "常に他人の視線を感じる。一人で居るのが不自然に見えないようスマホを見たり何かしているふりをする",
                "zh-CN": "总觉得被看着。会看手机或假装忙碌，以免独自显得尴尬",
                "zh-TW": "總覺得被看著。會看手機或假裝忙碌，以免獨自顯得尷尬",
                "vi": "Luôn cảm thấy bị nhìn. Xem điện thoại hoặc giả vờ bận để không trông lạ khi một mình",
                "id": "Selalu merasa dilihat. Melihat HP atau pura-pura sibuk agar tidak terlihat canggung sendirian",
            },
        ],
    },
    {
        "q": {
            "en": "When trying new clothes or a new hairstyle, you:",
            "ja": "新しい服や新しいヘアスタイルを試すとき、あなたは？",
            "zh-CN": "尝试新衣服或新发型时，你会？",
            "zh-TW": "嘗試新衣服或新髮型時，你會？",
            "vi": "Khi thử quần áo mới hoặc kiểu tóc mới, bạn:",
            "id": "Saat mencoba pakaian atau gaya rambut baru, kamu:",
        },
        "opts": [
            {
                "en": "If I like it, that is enough. Others' reactions are not very important",
                "ja": "自分が気に入ればそれで十分。他人の反応はあまり重要ではない",
                "zh-CN": "自己喜欢就够了。别人的反应不太重要",
                "zh-TW": "自己喜歡就夠了。別人的反應不太重要",
                "vi": "Mình thích là đủ. Phản ứng người khác không quá quan trọng",
                "id": "Kalau aku suka, itu cukup. Reaksi orang lain tidak terlalu penting",
            },
            {
                "en": "I pick what I like but also consider reactions around me to some degree",
                "ja": "自分が好きなものを選ぶが、周囲の反応もある程度参考にする",
                "zh-CN": "选自己喜欢的，但也会一定程度参考周围反应",
                "zh-TW": "選自己喜歡的，但也會一定程度參考周圍反應",
                "vi": "Chọn thứ mình thích nhưng cũng tham khảo phản ứng xung quanh ở mức nào đó",
                "id": "Pilih yang aku suka tapi juga pertimbangkan reaksi sekitar sampai batas tertentu",
            },
            {
                "en": "How people around me see it becomes an important criterion. Even if I like it, I hesitate if others might find it odd",
                "ja": "周囲の人がどう見るかがかなり重要な基準になる。自分が好きでも他人が変に見るかもしれないと躊躇する",
                "zh-CN": "周围人怎么看变成重要标准。即使自己喜欢，若觉得别人会觉得怪也会犹豫",
                "zh-TW": "周圍人怎麼看變成重要標準。即使自己喜歡，若覺得別人會覺得怪也會猶豫",
                "vi": "Cách mọi người xung quanh nhìn trở thành tiêu chí quan trọng. Dù thích vẫn do dự nếu nghĩ người khác thấy lạ",
                "id": "Bagaimana orang sekitar melihatnya jadi kriteria penting. Meski suka, ragu jika orang lain mungkin anggap aneh",
            },
            {
                "en": "Without positive reactions around me, I rarely feel sure it suits me. Others' reactions often become my judgment",
                "ja": "周囲の肯定的反応がないと似合う確信が生まれにくい。他人の反応がそのまま自分の判断になることがある",
                "zh-CN": "没有周围人的正面反应，很难确信适合自己。别人的反应常常变成我的判断",
                "zh-TW": "沒有周圍人的正面反應，很難確信適合自己。別人的反應常常變成我的判斷",
                "vi": "Không có phản ứng tích cực xung quanh thì khó chắc là hợp. Phản ứng người khác thường trở thành phán đoán của mình",
                "id": "Tanpa reaksi positif sekitar, jarang yakin cocok. Reaksi orang lain sering jadi penilaianku",
            },
        ],
    },
    {
        "q": {
            "en": "In a group, your comment or action is ignored or gets little attention. You:",
            "ja": "グループや集まりで自分の言葉や行動が無視されたり注目を受けなかった。あなたは？",
            "zh-CN": "在群体或聚会中，你的话或行为被忽视或没得到关注。你会？",
            "zh-TW": "在群體或聚會中，你的話或行為被忽視或沒得到關注。你會？",
                "vi": "Trong nhóm, lời hoặc hành động của bạn bị bỏ qua hoặc ít được chú ý. Bạn:",
            "id": "Dalam grup, komentar atau tindakanmu diabaikan atau kurang diperhatikan. Kamu:",
        },
        "opts": [
            {
                "en": "Not a big deal. Not every comment needs the spotlight",
                "ja": "大したことではない。すべての発言が注目される必要はない",
                "zh-CN": "没什么大不了。不是每句话都需要被关注",
                "zh-TW": "沒什麼大不了。不是每句話都需要被關注",
                "vi": "Không sao lắm. Không phải lời nào cũng cần được chú ý",
                "id": "Tidak masalah besar. Bukan setiap komentar perlu sorotan",
            },
            {
                "en": "A little disappointed, but I move on quickly. It ends there",
                "ja": "少し残念だがすぐ乗り越える。そこで終わる",
                "zh-CN": "有点遗憾，但很快过去，就到此为止",
                "zh-TW": "有點遺憾，但很快過去，就到此為止",
                "vi": "Hơi tiếc nhưng nhanh qua. Dừng ở đó",
                "id": "Sedikit kecewa, tapi cepat move on. Berakhir di situ",
            },
            {
                "en": "I feel quite bad and shrink in front of them. I become more careful about what to say next",
                "ja": "かなり気分が悪く、その人たちの前で萎縮する。次に何を言うかより慎重になる",
                "zh-CN": "会挺难受，在他们面前缩起来。下次说什么会更谨慎",
                "zh-TW": "會挺難受，在他們面前縮起來。下次說什麼會更謹慎",
                "vi": "Khá buồn và co lại trước họ. Cẩn thận hơn về lời nói tiếp theo",
                "id": "Cukup jelek perasaannya dan ciut di depan mereka. Lebih hati-hati soal apa yang akan dikatakan",
            },
            {
                "en": "The experience stays with me. I keep thinking how I look in that group and feel pressure to make a better impression next time",
                "ja": "その経験が長く残る。その集まりでどう見られているか考え続け、次はもっと良い印象を与えたいプレッシャーが生まれる",
                "zh-CN": "这段经历会留很久。会一直想自己在那个群体里看起来怎样，下次想留下更好印象的压力很大",
                "zh-TW": "這段經歷會留很久。會一直想自己在那個群體裡看起來怎樣，下次想留下更好印象的壓力很大",
                "vi": "Trải nghiệm ấy ở lại lâu. Cứ nghĩ mình trông thế nào trong nhóm và cảm áp lực phải để lại ấn tượng tốt hơn lần sau",
                "id": "Pengalaman itu lama tinggal. Terus pikir bagaimana diri terlihat di grup itu dan merasa tekanan ingin kesan lebih baik lain kali",
            },
        ],
    },
    {
        "q": {
            "en": "When you feel a close person may be upset or disappointed with you, you:",
            "ja": "親しい人が自分に怒っているか失望しているように感じるとき、あなたは？",
            "zh-CN": "当你感觉亲近的人可能对你生气或失望时，你会？",
            "zh-TW": "當你感覺親近的人可能對你生氣或失望時，你會？",
            "vi": "Khi cảm thấy người thân có thể đang giận hoặc thất vọng vì bạn, bạn:",
            "id": "Ketika merasa orang dekat mungkin marah atau kecewa padamu, kamu:",
        },
        "opts": [
            {
                "en": "If needed, I can talk after checking facts. I do not get very anxious",
                "ja": "必要なら事実を確認して話せばいいと思う。大きく不安にならない",
                "zh-CN": "需要的话确认事实后谈就好。不会很焦虑",
                "zh-TW": "需要的話確認事實後談就好。不會很焦慮",
                "vi": "Nếu cần, nói chuyện sau khi xác nhận sự thật. Không quá lo",
                "id": "Jika perlu, bicara setelah cek fakta. Tidak terlalu cemas",
            },
            {
                "en": "It bothers me, but asking directly or checking the situation helps somewhat",
                "ja": "気になるが、直接聞いたり状況を確認すればある程度解消される",
                "zh-CN": "会在意，但直接问或确认情况能缓解一些",
                "zh-TW": "會在意，但直接問或確認情況能緩解一些",
                "vi": "Bận tâm nhưng hỏi trực tiếp hoặc xác nhận tình huống giúp giảm phần nào",
                "id": "Mengganggu, tapi tanya langsung atau cek situasi membantu",
            },
            {
                "en": "I get quite anxious, keep wondering why, and check whether I did something wrong",
                "ja": "かなり不安になり、なぜそうなのか考え続け、自分が何か間違えたのか点検する",
                "zh-CN": "会挺焦虑，一直想为什么，并检查是不是自己做错了",
                "zh-TW": "會挺焦慮，一直想為什麼，並檢查是不是自己做錯了",
                "vi": "Khá lo, cứ hỏi vì sao và kiểm tra xem mình có làm sai không",
                "id": "Cukup cemas, terus bertanya kenapa, dan cek apakah aku salah",
            },
            {
                "en": "Very anxious. I want to keep checking their reaction and feel very uneasy until the relationship feels okay again",
                "ja": "非常に不安。その人の反応を確認し続けたくなり、関係が落ち着くまで心がとても落ち着かない",
                "zh-CN": "非常焦虑。想不断确认对方反应，在关系恢复之前心里都很不安",
                "zh-TW": "非常焦慮。想不斷確認對方反應，在關係恢復之前心裡都很不安",
                "vi": "Rất lo. Muốn cứ kiểm tra phản ứng của họ và bồn chồn cho đến khi mối quan hệ ổn lại",
                "id": "Sangat cemas. Ingin terus cek reaksi mereka dan sangat gelisah sampai hubungan terasa baik lagi",
            },
        ],
    },
    {
        "q": {
            "en": "When making important decisions, how much do others' opinions affect you?",
            "ja": "重要な決定を下すとき、他人の意見はどれくらい影響するか？",
            "zh-CN": "做重要决定时，他人意见对你影响有多大？",
            "zh-TW": "做重要決定時，他人意見對你影響有多大？",
            "vi": "Khi đưa ra quyết định quan trọng, ý kiến người khác ảnh hưởng bạn bao nhiêu?",
            "id": "Saat membuat keputusan penting, seberapa besar pendapat orang lain memengaruhimu?",
        },
        "opts": [
            {
                "en": "I consider them, but final decisions are almost always by my own standards. Others rarely change my judgment",
                "ja": "参考はするが、最終決定はほぼ常に自分の基準。他人の意見が判断を変えることは少ない",
                "zh-CN": "会参考，但最终决定几乎总是按自己的标准。别人很少改变我的判断",
                "zh-TW": "會參考，但最終決定幾乎總是按自己的標準。別人很少改變我的判斷",
                "vi": "Có tham khảo nhưng quyết định cuối gần như luôn theo tiêu chuẩn của mình. Người khác hiếm khi đổi phán đoán",
                "id": "Pertimbangkan, tapi keputusan akhir hampir selalu menurut standarku. Orang lain jarang mengubah penilaian",
            },
            {
                "en": "I consider others' views but decide in the direction I believe is right",
                "ja": "他人の意見は考えるが、結局自分が正しいと思う方向で決める",
                "zh-CN": "会考虑他人意见，但最终还是按自己认为对的方向决定",
                "zh-TW": "會考慮他人意見，但最終還是按自己認為對的方向決定",
                "vi": "Có cân nhắc ý kiến người khác nhưng quyết theo hướng mình cho là đúng",
                "id": "Pertimbangkan pendapat orang lain tapi putuskan arah yang menurutku benar",
            },
            {
                "en": "People around me influence me a lot. I shake easily when many opinions differ from mine",
                "ja": "周囲の意見がかなり影響する。自分と違う意見が多いと揺れやすい",
                "zh-CN": "周围意见影响很大。意见和我差很多时容易动摇",
                "zh-TW": "周圍意見影響很大。意見和我差很多時容易動搖",
                "vi": "Ý kiến xung quanh ảnh hưởng nhiều. Dễ lay chuyển khi nhiều ý kiến khác mình",
                "id": "Pendapat sekitar memengaruhiku banyak. Goyah saat banyak pendapat berbeda dariku",
            },
            {
                "en": "The more important the decision, the more others' reactions worry me. If I might not get approval, I hesitate to decide at all",
                "ja": "重要な決定ほど他人の反応がより気になる。周囲の承認が得られなさそうなら決定自体をためらう",
                "zh-CN": "决定越重要，越在意他人反应。若觉得得不到认可，连决定本身都会犹豫",
                "zh-TW": "決定越重要，越在意他人反應。若覺得得不到認可，連決定本身都會猶豫",
                "vi": "Quyết định càng quan trọng càng lo phản ứng người khác. Nếu nghĩ không được công nhận thì do dự cả việc quyết định",
                "id": "Semakin penting keputusan, semakin khawatir reaksi orang lain. Jika mungkin tidak dapat persetujuan, ragu memutuskan sama sekali",
            },
        ],
    },
    {
        "q": {
            "en": "You want to do something, but learn people around you view it negatively. You:",
            "ja": "自分がやりたいことをしようとしているが、周囲が否定的に見ていると分かった。あなたは？",
            "zh-CN": "你想做某件事，但知道周围人看法负面。你会？",
            "zh-TW": "你想做某件事，但知道周圍人看法負面。你會？",
            "vi": "Bạn muốn làm điều gì đó nhưng biết mọi người xung quanh nhìn tiêu cực. Bạn:",
            "id": "Kamu ingin melakukan sesuatu, tapi tahu orang sekitar melihatnya negatif. Kamu:",
        },
        "opts": [
            {
                "en": "If I believe I am right, I do it regardless of others. I take responsibility for my choice",
                "ja": "自分が正しいと思えば周囲に関係なくする。選択の責任も自分が取る",
                "zh-CN": "若觉得自己是对的，不管周围眼光也会做。选择的责任自己承担",
                "zh-TW": "若覺得自己是對的，不管周圍眼光也會做。選擇的責任自己承擔",
                "vi": "Nếu tin mình đúng thì làm bất kể ánh mắt xung quanh. Tự chịu trách nhiệm lựa chọn",
                "id": "Jika yakin benar, lakukan tanpa peduli pandangan sekitar. Tanggung jawab pilihan diri sendiri",
            },
            {
                "en": "I listen to concerns and rethink, but keep my direction if there is no good reason not to",
                "ja": "周囲の心配を聞いて再考するが、根拠がなければ自分の方向を維持する",
                "zh-CN": "会听周围担心并重新想，但没有充分理由就维持自己的方向",
                "zh-TW": "會聽周圍擔心並重新想，但沒有充分理由就維持自己的方向",
                "vi": "Nghe lo ngại xung quanh và suy nghĩ lại, nhưng giữ hướng nếu không có lý do rõ ràng",
                "id": "Dengar kekhawatiran sekitar dan pikir ulang, tapi pertahankan arah jika tidak ada alasan kuat",
            },
            {
                "en": "I shake a lot. If everyone is negative, I wonder if I am wrong",
                "ja": "かなり揺れる。周囲がすべて否定的なら自分が間違っているのではと疑う",
                "zh-CN": "会明显动摇。若周围都否定，会怀疑自己是不是错了",
                "zh-TW": "會明顯動搖。若周圍都否定，會懷疑自己是不是錯了",
                "vi": "Lay chuyển nhiều. Nếu ai cũng phản đối thì nghi ngờ mình sai",
                "id": "Goyah banyak. Jika semua negatif, meragukan apakah aku salah",
            },
            {
                "en": "Strong negative reactions can stop me even when I want to do it. Going against others feels very hard",
                "ja": "周囲の否定的反応が大きいと、やりたくてもできないことがある。反対を押し切るのがとても難しい",
                "zh-CN": "周围负面反应大时，即使想做也可能做不到。逆着他人意见行动非常难",
                "zh-TW": "周圍負面反應大時，即使想做也可能做不到。逆著他人意見行動非常難",
                "vi": "Phản ứng tiêu cực mạnh có thể khiến không làm dù muốn. Rất khó đi ngược ý người khác",
                "id": "Reaksi negatif kuat bisa menghalangi meski ingin melakukan. Melawan pendapat orang lain sangat sulit",
            },
        ],
    },
    {
        "q": {
            "en": "When you hear bad rumors or backtalk about yourself, you:",
            "ja": "自分に関する良くない噂や陰口を聞いたとき、あなたは？",
            "zh-CN": "听到关于自己的不好传闻或背后议论时，你会？",
            "zh-TW": "聽到關於自己的不好傳聞或背後議論時，你會？",
            "vi": "Khi nghe tin đồn xấu hoặc nói xấu sau lưng về bạn, bạn:",
            "id": "Ketika mendengar rumor buruk atau omongan di belakang tentang dirimu, kamu:",
        },
        "opts": [
            {
                "en": "If untrue, I do not worry much. People who know me know the truth",
                "ja": "事実でなければあまり気にしない。自分を知る人は分かっている",
                "zh-CN": "若不是事实就不太在意。了解我的人知道真相",
                "zh-TW": "若不是事實就不太在意。了解我的人知道真相",
                "vi": "Nếu không đúng thì không lo nhiều. Người hiểu mình biết sự thật",
                "id": "Jika tidak benar, tidak terlalu khawatir. Orang yang mengenalku tahu kebenaran",
            },
            {
                "en": "It feels bad, but I forget after some time",
                "ja": "気分は悪いが、時間が経てば忘れる",
                "zh-CN": "会不舒服，但过一阵会忘记",
                "zh-TW": "會不舒服，但過一陣會忘記",
                "vi": "Khó chịu nhưng sau một thời gian quên",
                "id": "Perasaan jelek, tapi lama-lama lupa",
            },
            {
                "en": "It stays on my mind for quite a while. I keep wondering why they said it and whether others think the same",
                "ja": "かなり長く気になる。なぜそう言ったのか、他の人もそう思っているのではと考え続ける",
                "zh-CN": "会在意挺久。一直想为什么这么说，别人是不是也这么想",
                "zh-TW": "會在意挺久。一直想為什麼這麼說，別人是不是也這麼想",
                "vi": "Bận tâm khá lâu. Cứ hỏi vì sao họ nói vậy và người khác có nghĩ giống không",
                "id": "Cukup lama terpikir. Terus bertanya kenapa mereka bilang begitu dan apakah orang lain juga begitu",
            },
            {
                "en": "I shake very hard. Thinking it may have spread makes me anxious about all relationships and strongly want to restore my image",
                "ja": "非常に大きく揺れる。広まったと思うと周囲との関係すべてが不安になり、イメージを回復したい気持ちが強くなる",
                "zh-CN": "会严重动摇。想到可能传开，对所有关系都不安，强烈想恢复形象",
                "zh-TW": "會嚴重動搖。想到可能傳開，對所有關係都不安，強烈想恢復形象",
                "vi": "Lay chuyển rất mạnh. Nghĩ tin đã lan làm lo mọi mối quan hệ và rất muốn khôi phục hình ảnh",
                "id": "Goyah sangat kuat. Membayangkan tersebar membuat cemas semua hubungan dan sangat ingin pulihkan citra",
            },
        ],
    },
    {
        "q": {
            "en": "While taking this test, was there a reason it felt hard to answer honestly?",
            "ja": "今このテストをしながら、正直に答えにくかった理由はあるか？",
            "zh-CN": "做这份测试时，有没有觉得很难诚实作答的原因？",
            "zh-TW": "做這份測驗時，有沒有覺得很難誠實作答的原因？",
            "vi": "Trong lúc làm bài test này, có lý do nào khiến bạn khó trả lời thành thật không?",
            "id": "Saat mengerjakan tes ini, ada alasan sulit menjawab jujur?",
        },
        "opts": [
            {
                "en": "Not really. I answered honestly",
                "ja": "特にない。正直に答えた",
                "zh-CN": "没有。我如实回答了",
                "zh-TW": "沒有。我如實回答了",
                "vi": "Không hẳn. Tôi trả lời thành thật",
                "id": "Tidak juga. Aku menjawab jujur",
            },
            {
                "en": "On a few items I felt a slight urge to answer more independently than I really am",
                "ja": "いくつかの項目で実際よりもっと独立的に答えたくなる衝動が少しあった",
                "zh-CN": "有几题稍微想答得比实际更独立一点",
                "zh-TW": "有幾題稍微想答得比實際更獨立一點",
                "vi": "Vài câu có chút muốn trả lời độc lập hơn thực tế",
                "id": "Di beberapa item ada sedikit dorongan menjawab lebih mandiri dari kenyataan",
            },
            {
                "en": "A few items felt awkward because I thought my approval-seeking might come out high",
                "ja": "承認欲求が高く出そうで、正直に答えるのが負担な項目がいくつかあった",
                "zh-CN": "有几题因为觉得认可需求可能偏高，诚实作答有点负担",
                "zh-TW": "有幾題因為覺得認可需求可能偏高，誠實作答有點負擔",
                "vi": "Vài câu khó vì nghĩ nhu cầu được công nhận có thể cao",
                "id": "Beberapa item terasa canggung karena pikir kebutuhan pengakuan mungkin tinggi",
            },
            {
                "en": "Admitting high approval-seeking felt uncomfortable. I worried what others would think if they saw this result",
                "ja": "高い承認欲求を認めること自体が不快だった。この結果を他人が見たらどう思うかが気になった",
                "zh-CN": "承认认可需求高本身就不舒服。会担心别人看到结果会怎么想",
                "zh-TW": "承認認可需求高本身就不舒服。會擔心別人看到結果會怎麼想",
                "vi": "Thừa nhận nhu cầu được công nhận cao khiến khó chịu. Lo người khác nghĩ gì nếu thấy kết quả",
                "id": "Mengakui kebutuhan pengakuan tinggi terasa tidak nyaman. Khawatir orang lain akan berpikir apa jika melihat hasil ini",
            },
        ],
    },
]

_R_I18N: list[dict[str, dict[str, str]]] = [{'cautions': {'en': 'Ignoring feedback entirely can create blind spots. Low approval-seeking is not the same as '
                     'lacking empathy. Balance is needed — use fair feedback as reference\n'
                     "While keeping independence, stay open to others' perspectives as new information",
               'id': 'Mengabaikan umpan balik sepenuhnya bisa membuat blind spot. Kebutuhan pengakuan rendah bukan '
                     'berarti kurang empati. Perlu keseimbangan — gunakan umpan balik wajar sebagai referensi\n'
                     'Sambil menjaga kemandirian, tetap terbuka bahwa perspektif orang lain bisa memberi informasi '
                     'baru',
               'ja': '他人のフィードバックを無視しすぎると盲点が生じる。承認欲求が低い＝共感力がないわけではない。正当なフィードバックを参考にするバランスが必要\n'
                     'この独立性を保ちつつ、他人の視点が新しい情報を与えうるという開放性',
               'vi': 'Bỏ qua hoàn toàn phản hồi có thể tạo điểm mù. Nhu cầu công nhận thấp không đồng nghĩa thiếu đồng '
                     'cảm. Cần cân bằng — dùng phản hồi hợp lý làm tham chiếu\n'
                     'Giữ độc lập nhưng vẫn mở với góc nhìn người khác như thông tin mới',
               'zh-CN': '完全忽视他人反馈可能产生盲点。认可需求低不等于缺乏共情。需要平衡——把正当反馈当作参考\n在保持独立的同时，也对他人视角可能带来的新信息保持开放',
               'zh-TW': '完全忽視他人回饋可能產生盲點。認可需求低不等於缺乏共情。需要平衡——把正當回饋當作參考\n在保持獨立的同時，也對他人視角可能帶來的新資訊保持開放'},
  'description': {'en': 'Even without likes, with criticism, or hearing backtalk, you keep your own standards with '
                        "little disturbance. Your judgment works far more strongly than others' gaze. This is true "
                        'independence.',
                  'id': 'Meski tanpa like, kritik, atau dengar omongan di belakang, kamu mempertahankan standar '
                        'sendiri tanpa banyak terguncang. Penilaianmu jauh lebih kuat daripada pandangan orang lain. '
                        'Ini kemandirian sejati.',
                  'ja': 'いいねがなくても、批判が来ても、陰口を聞いても大きな動揺なく自分の基準を保ちます。他人の視線より自分の判断がはるかに強く働くタイプです。これが真の意味での独立的な自己です。',
                  'vi': 'Dù không có like, bị chỉ trích hay nghe nói xấu, bạn vẫn giữ tiêu chuẩn riêng mà ít lay '
                        'chuyển. Phán đoán của bạn mạnh hơn nhiều so với ánh mắt người khác. Đây là sự độc lập thật '
                        'sự.',
                  'zh-CN': '即使没有点赞、遭遇批评或听到背后议论，也能几乎不受动摇地维持自己的标准。比起他人目光，你的判断运作得更强。这是真正独立的自我。',
                  'zh-TW': '即使沒有按讚、遭遇批評或聽到背後議論，也能幾乎不受動搖地維持自己的標準。比起他人目光，你的判斷運作得更強。這是真正獨立的自我。'},
  'desireLevel': {'en': 'Very low / Fully independent inner standards',
                  'id': 'Sangat rendah / Standar internal sepenuhnya mandiri',
                  'ja': '非常に低い / 内的基準が完全に独立',
                  'vi': 'Rất thấp / Tiêu chuẩn nội tại hoàn toàn độc lập',
                  'zh-CN': '非常低 / 内在标准完全独立',
                  'zh-TW': '非常低 / 內在標準完全獨立'},
  'desireType': {'en': '🌊 Diluted Type',
                 'id': '🌊 Tipe Encer',
                 'ja': '🌊 希薄型',
                 'vi': '🌊 Loại loãng',
                 'zh-CN': '🌊 稀薄型',
                 'zh-TW': '🌊 稀薄型'},
  'evaluationImpact': {'en': '5~15%', 'id': '5~15%', 'ja': '5~15%', 'vi': '5~15%', 'zh-CN': '5~15%', 'zh-TW': '5~15%'},
  'oneLiner': {'en': 'You are already doing one of the hardest things — living by your own standards',
               'id': 'Kamu sudah melakukan salah satu hal tersulit — hidup menurut standar sendiri',
               'ja': 'あなたはすでに最も難しいことの一つ——自分の基準で生きること——をしています',
               'vi': 'Bạn đã đang làm một trong những việc khó nhất — sống theo tiêu chuẩn của chính mình',
               'zh-CN': '你已经在做最难的事之一——按自己的标准生活',
               'zh-TW': '你已經在做最難的事之一——按自己的標準生活'},
  'quote': {'en': "Your self-evaluation comes almost entirely from within. Others' reactions rarely change your state.",
            'id': 'Penilaian dirimu hampir sepenuhnya datang dari dalam. Reaksi orang lain jarang mengubah kondisimu.',
            'ja': 'あなたの自己評価はほぼ完全に内側から来ます。他人の反応が状態を変えることはほとんどありません。',
            'vi': 'Cách bạn đánh giá bản thân gần như hoàn toàn đến từ bên trong. Phản ứng của người khác hiếm khi '
                  'thay đổi trạng thái của bạn.',
            'zh-CN': '你的自我评价几乎完全来自内心。他人的反应很少改变你的状态。',
            'zh-TW': '你的自我評價幾乎完全來自內心。他人的反應很少改變你的狀態。'},
  'shareLine': {'en': "My approval-seeking level: Diluted Type 🌊 Barely shaken by others' evaluation... this is the "
                      "hardest thing, so true → What's your level?",
                'id': 'Kadar kebutuhan pengakuan-ku: Tipe Encer 🌊 Hampir tidak goyah karena evaluasi orang lain... '
                      'memang yang paling sulit → Kadar kamu berapa?',
                'ja': '私の承認欲求濃度: 希薄型 🌊 他人評価にほとんど揺れない…これが一番難しいって当たり → あなたの濃度は？',
                'vi': 'Nồng độ nhu cầu công nhận: Loại loãng 🌊 Hầu như không lay chuyển vì đánh giá người khác... đúng '
                      'là khó nhất → Bạn nồng độ bao nhiêu?',
                'zh-CN': '我的认可需求浓度：稀薄型 🌊 几乎不被他人评价动摇…这确实是最难的 → 你的浓度是多少？',
                'zh-TW': '我的認可需求濃度：稀薄型 🌊 幾乎不被他人評價動搖…這確實是最難的 → 你的濃度是多少？'},
  'strengths': {'en': 'Psychological stability that does not shake with the environment. Ability to live by your own '
                      "standards. Not drained by others' negative reactions",
                'id': 'Stabilitas psikologis yang tidak goyah oleh lingkungan. Kemampuan hidup menurut standar '
                      'sendiri. Tidak habis energi karena reaksi negatif orang lain',
                'ja': '外部環境に揺れない心理的安定感。自分の基準で生きる能力。他人の否定的反応に消耗しない',
                'vi': 'Ổn định tâm lý không lay chuyển theo môi trường. Khả năng sống theo tiêu chuẩn riêng. Không bị '
                      'cạn kiệt bởi phản ứng tiêu cực',
                'zh-CN': '不被外界环境动摇的心理稳定感。按自己的标准生活的能力。不会因他人负面反应而消耗',
                'zh-TW': '不被外界環境動搖的心理穩定感。按自己的標準生活的能力。不會因他人負面反應而消耗'},
  'title': {'en': "Free from others' evaluation, Diluted Approval-Seeking Type",
            'id': 'Bebas dari evaluasi orang lain, Tipe Kebutuhan Pengakuan Encer',
            'ja': '他人の評価から自由な人、承認欲求希薄型',
            'vi': 'Tự do khỏi đánh giá của người khác, Loại nhu cầu công nhận loãng',
            'zh-CN': '不受他人评价束缚的人，认可需求稀薄型',
            'zh-TW': '不受他人評價束縛的人，認可需求稀薄型'}},
 {'cautions': {'en': 'Approval-seeking works as motivation here. Within a healthy range, it pushes you to do better\n'
                     'Consciously observe this balance now. Notice patterns where the level rises in certain '
                     'situations',
               'id': 'Kebutuhan pengakuan berfungsi sebagai motivasi. Dalam batas sehat, mendorongmu ingin lebih baik\n'
                     'Amati keseimbangan ini secara sadar. Perhatikan pola saat level naik di situasi tertentu',
               'ja': '承認欲求が動機づけとして機能する。行き過ぎない範囲で、よりうまくしたい気持ちを刺激する\n今このバランスを意識的に観察する。特定の状況で濃度が上がるパターンを把握しておく',
               'vi': 'Nhu cầu công nhận hoạt động như động lực. Trong phạm vi lành mạnh, thúc đẩy bạn làm tốt hơn\n'
                     'Quan sát có ý thức sự cân bằng này. Nhận ra mẫu khi nồng độ tăng ở tình huống cụ thể',
               'zh-CN': '认可需求在这里起到动机作用。在不过度的范围内，推动你想做得更好\n有意识地观察现在的平衡。留意在特定情境下浓度升高的模式',
               'zh-TW': '認可需求在這裡起到動機作用。在不過度的範圍內，推動你想做得更好\n有意識地觀察現在的平衡。留意在特定情境下濃度升高的模式'},
  'description': {'en': 'Praise feels good and criticism feels bad, but it passes quickly and does not steer your '
                        "direction. You use others' views as information without becoming dependent. At this level, "
                        'you are psychologically healthy.',
                  'id': 'Pujian terasa bagus dan kritik terasa buruk, tapi cepat lewat dan tidak mengarahkan hidupmu. '
                        'Kamu memakai pandangan orang lain sebagai informasi tanpa bergantung. Di level ini, kamu '
                        'sehat secara psikologis.',
                  'ja': '褒められると気分が良く、批判されると気分が悪くなりますが、すぐ過ぎ去り自分の方向には影響しません。他人の意見を情報として活用しつつ依存しません。承認欲求がこの濃度なら心理的に健全な状態です。',
                  'vi': 'Được khen thì vui, bị chỉ trích thì buồn, nhưng nhanh qua và không định hướng bạn. Bạn dùng ý '
                        'kiến người khác như thông tin chứ không phụ thuộc. Ở mức này, bạn khỏe mạnh về mặt tâm lý.',
                  'zh-CN': '被夸奖会开心，被批评会难受，但很快过去，不会改变你的方向。你把他人意见当信息使用，而不被其束缚。认可需求在这个浓度，心理上很健康。',
                  'zh-TW': '被稱讚會開心，被批評會難受，但很快過去，不會改變你的方向。你把他人意見當資訊使用，而不被其束縛。認可需求在這個濃度，心理上很健康。'},
  'desireLevel': {'en': 'Low-average / References others but does not shake easily',
                  'id': 'Rendah-sedang / Merujuk reaksi luar tapi tidak mudah goyah',
                  'ja': '低-普通 / 外部反応を参考にするが揺れにくい',
                  'vi': 'Thấp-trung bình / Tham khảo phản ứng bên ngoài nhưng khó lay chuyển',
                  'zh-CN': '偏低-一般 / 参考外界反应但不易动摇',
                  'zh-TW': '偏低-一般 / 參考外界反應但不易動搖'},
  'desireType': {'en': '🌱 Healthy Type',
                 'id': '🌱 Tipe Sehat',
                 'ja': '🌱 健全型',
                 'vi': '🌱 Loại khỏe mạnh',
                 'zh-CN': '🌱 健康型',
                 'zh-TW': '🌱 健康型'},
  'evaluationImpact': {'en': '15~30%',
                       'id': '15~30%',
                       'ja': '15~30%',
                       'vi': '15~30%',
                       'zh-CN': '15~30%',
                       'zh-TW': '15~30%'},
  'oneLiner': {'en': 'At this level, approval-seeking becomes fuel that helps you grow. You are maintaining this '
                     'balance well',
               'id': 'Di level ini, kebutuhan pengakuan jadi bahan bakar yang membantu pertumbuhan. Kamu menjaga '
                     'keseimbangan ini dengan baik',
               'ja': 'このレベルの承認欲求は、あなたをより良くする燃料になります。このバランスをよく保っています',
               'vi': 'Ở mức này, nhu cầu công nhận là nhiên liệu giúp bạn tốt hơn. Bạn đang giữ cân bằng này khá tốt',
               'zh-CN': '这个程度的认可需求，是让你变得更好的燃料。你正在很好地维持这种平衡',
               'zh-TW': '這個程度的認可需求，是讓你變得更好的燃料。你正在很好地維持這種平衡'},
  'quote': {'en': "You care about others' reactions to some degree, but they do not control your choices or emotions.",
            'id': 'Kamu peduli reaksi orang lain sampai batas tertentu, tapi itu tidak mengendalikan pilihan atau '
                  'emosimu.',
            'ja': '他人の反応にはある程度気を配りますが、それが選択や感情を支配することはありません。',
            'vi': 'Bạn quan tâm phản ứng của người khác ở mức nào đó, nhưng chúng không kiểm soát lựa chọn hay cảm xúc '
                  'của bạn.',
            'zh-CN': '你会一定程度在意他人反应，但它不会支配你的选择或情绪。',
            'zh-TW': '你會一定程度在意他人反應，但它不會支配你的選擇或情緒。'},
  'shareLine': {'en': "My approval-seeking level: Healthy Type 🌱 Care a bit but don't shake... turns out this is "
                      "healthy lol → What's your level?",
                'id': 'Kadar kebutuhan pengakuan-ku: Tipe Sehat 🌱 Agak peduli tapi tidak goyah... ternyata ini sehat '
                      'wkwk → Kadar kamu?',
                'ja': '私の承認欲求濃度: 健全型 🌱 適度に気になるけど揺れない…これが健全だったのか → あなたの濃度は？',
                'vi': 'Nồng độ nhu cầu công nhận: Loại khỏe 🌱 Có quan tâm nhưng không lay chuyển... hóa ra là lành '
                      'mạnh haha → Bạn nồng độ bao nhiêu?',
                'zh-CN': '我的认可需求浓度：健康型 🌱 会在意但不会动摇…原来这很健康哈哈 → 你的浓度呢？',
                'zh-TW': '我的認可需求濃度：健康型 🌱 會在意但不會動搖…原來這很健康哈哈 → 你的濃度呢？'},
  'strengths': {'en': "Balance that accepts feedback without shaking. In relationships, you consider others' feelings "
                      'without losing yourself',
                'id': 'Keseimbangan menerima umpan balik tanpa goyah. Dalam relasi, mempertimbangkan perasaan orang '
                      'lain tanpa kehilangan diri',
                'ja': 'フィードバックを受け入れつつ揺れないバランス。関係で他人の感情を考えながらも自分を失わない',
                'vi': 'Cân bằng nhận phản hồi mà không lay chuyển. Trong quan hệ, cân nhắc cảm xúc người khác mà không '
                      'mất bản thân',
                'zh-CN': '接受反馈却不轻易动摇的平衡。在关系中考虑他人感受却不失去自我',
                'zh-TW': '接受回饋卻不輕易動搖的平衡。在關係中考慮他人感受卻不失去自我'},
  'title': {'en': 'Keeping healthy balance, Healthy Approval-Seeking Type',
            'id': 'Menjaga keseimbangan sehat, Tipe Kebutuhan Pengakuan Sehat',
            'ja': '健全なバランスを保つ人、健全な承認欲求型',
            'vi': 'Giữ cân bằng lành mạnh, Loại nhu cầu công nhận khỏe mạnh',
            'zh-CN': '保持健康平衡的人，健康认可需求型',
            'zh-TW': '保持健康平衡的人，健康認可需求型'}},
 {'description': {'en': 'SNS reactions, criticism from important people, being ignored in groups — approval-seeking '
                        'rises in specific trigger situations. Overall you are okay, but when triggers hit, you shake '
                        'quite a lot. Knowing when it rises is key.',
                  'id': 'Reaksi SNS, kritik dari orang penting, diabaikan dalam grup — kebutuhan pengakuan naik di '
                        'situasi pemicu tertentu. Secara umum oke, tapi saat pemicu aktif, kamu goyah cukup banyak. '
                        'Tahu kapan naik adalah kuncinya.',
                  'ja': 'SNS反応、大切な人の批判、グループ内での無視など、特定のトリガー状況で承認欲求が上がるタイプです。平均的には大丈夫ですが、トリガーが作動するとかなり揺れます。いつ上がるかを知ることが核心です。',
                  'vi': 'Phản ứng SNS, chỉ trích từ người quan trọng, bị bỏ qua trong nhóm — nhu cầu công nhận tăng ở '
                        'tình huống kích hoạt cụ thể. Nhìn chung ổn, nhưng khi bị kích hoạt thì lay chuyển khá nhiều. '
                        'Biết khi nào tăng là then chốt.',
                  'zh-CN': 'SNS反应、重要之人的批评、群体中被忽视等特定触发情境会让认可需求上升。整体还好，但触发时会明显动摇。知道自己何时上升是关键。',
                  'zh-TW': 'SNS反應、重要之人的批評、群體中被忽視等特定觸發情境會讓認可需求上升。整體還好，但觸發時會明顯動搖。知道自己何時上升是關鍵。'},
  'desireLevel': {'en': 'Average / Impact varies by situation and person',
                  'id': 'Sedang / Dampak bervariasi menurut situasi dan orang',
                  'ja': '普通 / 状況と対象によって影響度が変わる',
                  'vi': 'Trung bình / Mức ảnh hưởng thay đổi theo tình huống và đối tượng',
                  'zh-CN': '一般 / 随情境与对象影响度变化',
                  'zh-TW': '一般 / 隨情境與對象影響度變化'},
  'desireType': {'en': '🌤️ Average Type',
                 'id': '🌤️ Tipe Rata-rata',
                 'ja': '🌤️ 平均型',
                 'vi': '🌤️ Loại trung bình',
                 'zh-CN': '🌤️ 平均型',
                 'zh-TW': '🌤️ 平均型'},
  'evaluationImpact': {'en': '30~50%',
                       'id': '30~50%',
                       'ja': '30~50%',
                       'vi': '30~50%',
                       'zh-CN': '30~50%',
                       'zh-TW': '30~50%'},
  'oneLiner': {'en': 'Average is not bad. Knowing your triggers helps you shake much less',
               'id': 'Rata-rata bukan hal buruk. Tahu pemicumu membantu goyah jauh lebih sedikit',
               'ja': '平均は悪くありません。自分のトリガーを知ればはるかに揺れにくくなります',
               'vi': 'Trung bình không xấu. Biết trigger của mình giúp ít lay chuyển hơn nhiều',
               'zh-CN': '平均并不坏。知道自己的触发点，会少动摇很多',
               'zh-TW': '平均並不壞。知道自己的觸發點，會少動搖很多'},
  'quote': {'en': "You are usually fine, but in certain situations or before certain people's evaluation, you are "
                  'affected much more than usual.',
            'id': 'Biasanya baik-baik saja, tapi di situasi tertentu atau di depan evaluasi orang tertentu, kamu '
                  'terpengaruh jauh lebih besar.',
            'ja': '普段は大丈夫ですが、特定の状況や特定の人の評価の前では普段よりはるかに影響を受けるパターンがあります。',
            'vi': 'Thường thì ổn, nhưng trước tình huống hoặc đánh giá của một số người, bạn bị ảnh hưởng nhiều hơn '
                  'bình thường.',
            'zh-CN': '平时还好，但在特定情境或特定人的评价前，你会比平时受影响大得多。',
            'zh-TW': '平時還好，但在特定情境或特定人的評價前，你會比平時受影響大得多。'},
  'shareLine': {'en': 'My approval-seeking level: Average Type 🌤️ Fine usually but spikes in certain situations... '
                      "triggers are real → What's your level?",
                'id': 'Kadar kebutuhan pengakuan-ku: Tipe Rata-rata 🌤️ Biasanya oke tapi naik di situasi tertentu... '
                      'pemicu memang ada → Kadar kamu?',
                'ja': '私の承認欲求濃度: 平均型 🌤️ 普段は大丈夫だけど特定状況で上がる…トリガーあるの当たり → あなたの濃度は？',
                'vi': 'Nồng độ nhu cầu công nhận: Loại trung bình 🌤️ Thường ổn nhưng tình huống cụ thể tăng mạnh... '
                      'trigger có thật → Bạn nồng độ bao nhiêu?',
                'zh-CN': '我的认可需求浓度：平均型 🌤️ 平时还好但特定情境会飙升…触发点是真的 → 你的浓度？',
                'zh-TW': '我的認可需求濃度：平均型 🌤️ 平時還好但特定情境會飆升…觸發點是真的 → 你的濃度？'},
  'strengths': {'en': 'Not fully dependent. Recovers over time',
                'id': 'Tidak sepenuhnya bergantung. Lama-lama pulih',
                'ja': '完全に依存はしていない。時間が経てば回復する',
                'vi': 'Không hoàn toàn phụ thuộc. Theo thời gian sẽ hồi lại',
                'zh-CN': '并未完全依赖。时间会恢复',
                'zh-TW': '並未完全依賴。時間會恢復'},
  'title': {'en': 'Shaking depending on situation, Average Approval-Seeking Type',
            'id': 'Goyah tergantung situasi, Tipe Kebutuhan Pengakuan Rata-rata',
            'ja': '状況によって揺れる人、平均的な承認欲求型',
            'vi': 'Lay chuyển tùy tình huống, Loại nhu cầu công nhận trung bình',
            'zh-CN': '随情况而动摇的人，平均认可需求型',
            'zh-TW': '隨情況而動搖的人，平均認可需求型'},
  'tryNow': {'en': 'Identify when you especially want approval. Knowing the pattern lets you predict and prepare\n'
                   'Record emotions in those situations. "When I do ○○, approval-seeking gets stronger"',
             'id': 'Identifikasi kapan kamu paling ingin diakui. Tahu polanya membantu prediksi dan persiapan\n'
                   'Catat emosi di situasi itu. "Saat aku ○○, kebutuhan pengakuan jadi lebih kuat"',
             'ja': '特に承認されたい状況がいつか把握する。そのパターンが分かれば予測・準備できる\nその状況で上がる感情を記録する。「私は○○するとき承認欲求が強くなる」',
             'vi': 'Xác định khi nào bạn đặc biệt muốn được công nhận. Biết mẫu giúp dự đoán và chuẩn bị\n'
                   'Ghi lại cảm xúc trong tình huống đó. "Khi tôi ○○, nhu cầu công nhận mạnh hơn"',
             'zh-CN': '找出你特别想被认可的情境。知道模式就能预测和准备\n记录那些情境中的情绪。「我在○○时认可需求会变强」',
             'zh-TW': '找出你特別想被認可的情境。知道模式就能預測和準備\n記錄那些情境中的情緒。「我在○○時認可需求會變強」'}},
 {'description': {'en': "Criticism stays on your mind for a while, others' reactions become a main criterion before "
                        'important decisions, and negative feedback makes you hesitate even when you want to act. At '
                        'this level, approval-seeking may be overly steering your life direction.',
                  'id': 'Kritik lama terpikir, reaksi orang lain jadi kriteria utama sebelum keputusan penting, dan '
                        'umpan balik negatif membuat ragu meski ingin bertindak. Di level ini, kebutuhan pengakuan '
                        'mungkin terlalu mengarahkan arah hidup.',
                  'ja': '批判が来るとかなり長く気になり、重要な決定の前では他人の反応が主要基準になり、周囲が否定的だとやりたくてもためらいます。このレベルでは承認欲求が人生の方向を決めるのに過度な影響を与えている可能性があります。',
                  'vi': 'Chỉ trích khiến bạn bận tâm khá lâu, trước quyết định quan trọng phản ứng người khác thành '
                        'tiêu chí chính, phản hồi tiêu cực khiến do dự dù muốn hành động. Ở mức này, nhu cầu công nhận '
                        'có thể đang chi phối quá mức hướng đi cuộc sống.',
                  'zh-CN': '批评会来后会想很久，重要决定前他人反应成为主要标准，周围负面时即使想做也会犹豫。在这个程度，认可需求可能在过度左右人生方向。',
                  'zh-TW': '批評會來後會想很久，重要決定前他人反應成為主要標準，周圍負面時即使想做也會猶豫。在這個程度，認可需求可能在過度左右人生方向。'},
  'desireLevel': {'en': "High / Others' reactions noticeably affect choices, emotions, and behavior",
                  'id': 'Tinggi / Reaksi orang lain cukup memengaruhi pilihan, emosi, perilaku',
                  'ja': '高い / 他人の反応が選択・感情・行動に相当な影響',
                  'vi': 'Cao / Phản ứng người khác ảnh hưởng đáng kể đến lựa chọn, cảm xúc, hành vi',
                  'zh-CN': '偏高 / 他人反应对选择·情绪·行为有相当影响',
                  'zh-TW': '偏高 / 他人反應對選擇·情緒·行為有相當影響'},
  'desireType': {'en': '💧 High Type',
                 'id': '💧 Tipe Tinggi',
                 'ja': '💧 高い型',
                 'vi': '💧 Loại cao',
                 'zh-CN': '💧 偏高型',
                 'zh-TW': '💧 偏高型'},
  'evaluationImpact': {'en': '50~70%',
                       'id': '50~70%',
                       'ja': '50~70%',
                       'vi': '50~70%',
                       'zh-CN': '50~70%',
                       'zh-TW': '50~70%'},
  'oneLiner': {'en': 'Wanting approval is not weakness. Practice not letting that desire decide your direction',
               'id': 'Ingin diakui bukan kelemahan. Latih agar hasrat itu tidak menentukan arah hidupmu',
               'ja': '承認されたい気持ち自体は弱さではありません。その欲求が方向を決めないよう練習が必要です',
               'vi': 'Muốn được công nhận không phải điểm yếu. Hãy luyện để nhu cầu đó không quyết định hướng đi của '
                     'bạn',
               'zh-CN': '想被认可本身不是弱点。需要练习——别让这种需求决定你的方向',
               'zh-TW': '想被認可本身不是弱點。需要練習——別讓這種需求決定你的方向'},
  'quote': {'en': "Others' evaluation has gone beyond bothering you — it is changing your choices and behavior.",
            'id': 'Evaluasi orang lain sudah melampaui sekadar mengganggu — itu mengubah pilihan dan perilakumu.',
            'ja': '他人の評価は気になるレベルを超え、選択と行動の方式を変えています。',
            'vi': 'Đánh giá người khác không chỉ khiến bạn bận tâm — nó đang thay đổi lựa chọn và cách hành xử của '
                  'bạn.',
            'zh-CN': '他人评价已不只是让你在意——它正在改变你的选择与行为方式。',
            'zh-TW': '他人評價已不只是讓你在意——它正在改變你的選擇與行為方式。'},
  'shareLine': {'en': "My approval-seeking level: High Type 💧 Others' reactions affect my choices... when people are "
                      "negative I freeze, ouch → What's your level?",
                'id': 'Kadar kebutuhan pengakuan-ku: Tipe Tinggi 💧 Reaksi orang lain memengaruhi pilihan... sekitar '
                      'negatif langsung freeze → Kadar kamu?',
                'ja': '私の承認欲求濃度: 高い型 💧 他人の反応が選択に影響…周囲が否定的だとできない、当たり → あなたの濃度は？',
                'vi': 'Nồng độ nhu cầu công nhận: Loại cao 💧 Phản ứng người khác ảnh hưởng lựa chọn... xung quanh phủ '
                      'định là đơ → Bạn nồng độ bao nhiêu?',
                'zh-CN': '我的认可需求浓度：偏高型 💧 他人反应影响选择…周围否定就不敢做，被戳中 → 你的浓度？',
                'zh-TW': '我的認可需求濃度：偏高型 💧 他人反應影響選擇…周圍否定就不敢做，被戳中 → 你的濃度？'},
  'strengths': {'en': 'You may postpone or give up what you truly want to look good to others\n'
                      'When criticized, you focus more on "how I look" than the situation itself\n'
                      'In relationships, saying no or expressing a different opinion feels difficult',
                'id': 'Mungkin menunda atau menyerah pada yang benar-benar diinginkan agar terlihat baik\n'
                      'Saat dikritik, fokus lebih pada "bagaimana diri terlihat" daripada situasinya\n'
                      'Dalam relasi, sulit menolak atau menyampaikan pendapat berbeda',
                'ja': '他人に良く見えるために本当にやりたいことを後回し・放棄する場合がある\n批判を受けると状況より「自分がどう見えるか」に集中しやすい\n関係で断ったり別の意見を言うのが難しい',
                'vi': 'Có thể trì hoãn hoặc bỏ điều thật sự muốn để trông tốt với người khác\n'
                      'Khi bị chỉ trích, tập trung vào "mình trông thế nào" hơn bản thân tình huống\n'
                      'Trong quan hệ, khó từ chối hoặc nói ý kiến khác',
                'zh-CN': '可能为了给别人好印象，推迟或放弃真正想做的事\n受到批评时，比起事情本身更聚焦「我看起来怎样」\n在关系中，拒绝或表达不同意见很困难',
                'zh-TW': '可能為了給別人好印象，推遲或放棄真正想做的事\n受到批評時，比起事情本身更聚焦「我看起來怎樣」\n在關係中，拒絕或表達不同意見很困難'},
  'title': {'en': "Others' evaluation affects you a lot, High Approval-Seeking Type",
            'id': 'Evaluasi orang lain memengaruhimu banyak, Tipe Kebutuhan Pengakuan Tinggi',
            'ja': '他人の評価がかなり影響する人、高い承認欲求型',
            'vi': 'Đánh giá người khác ảnh hưởng nhiều, Loại nhu cầu công nhận cao',
            'zh-CN': '他人评价影响较大的人，高认可需求型',
            'zh-TW': '他人評價影響較大的人，高認可需求型'},
  'tryNow': {'en': "Today, choose one small thing you want regardless of others' reactions\n"
                   'When criticism comes, first ask "Is this true?" Learn if true, let go if not\n'
                   'Build one practice that confirms your value even without approval',
             'id': 'Hari ini pilih satu hal kecil yang kamu inginkan tanpa peduli reaksi orang lain\n'
                   'Saat kritik datang, tanya dulu "Apakah ini benar?" Jika benar, pelajari; jika tidak, lepaskan\n'
                   'Bangun satu kebiasaan yang mengonfirmasi nilaimu meski tanpa pengakuan',
             'ja': '今日一日、他人の反応と無関係に自分が望む小さなことを一つ選ぶ\n'
                   '批判が来たらまず「この言葉は事実か？」と問う。事実なら学び、そうでなければ流す\n'
                   '承認されなくても自分に価値があることを確認する習慣を一つずつ作る',
             'vi': 'Hôm nay chọn một việc nhỏ bạn muốn bất kể phản ứng người khác\n'
                   'Khi bị chỉ trích, hỏi trước "Lời này có đúng không?" Đúng thì học, không thì buông\n'
                   'Xây dần một thói quen xác nhận giá trị dù không được công nhận',
             'zh-CN': '今天选一件不管他人反应、你真正想要的小事去做\n批评来时先问「这话是事实吗？」是事实就学习，不是就放过\n逐步建立「即使不被认可也有价值」的确认练习',
             'zh-TW': '今天選一件不管他人反應、你真正想要的小事去做\n批評來時先問「這話是事實嗎？」是事實就學習，不是就放過\n逐步建立「即使不被認可也有價值」的確認練習'}},
 {'cautions': {'en': 'Exploring the roots of approval-seeking in therapy can be effective. What matters is addressing '
                     'the pattern beneath surface behavior',
               'id': 'Konseling psikologis mengeksplorasi akar kebutuhan pengakuan bisa efektif. Kuncinya menangani '
                     'pola di bawah perilaku permukaan',
               'ja': '承認欲求の根っこを探る心理カウンセリングが効果的な場合があります。表面の行動より下のパターンを扱うことが核心',
               'vi': 'Tư vấn tâm lý khám phá gốc rễ nhu cầu công nhận có thể hiệu quả. Quan trọng là xử lý mẫu bên '
                     'dưới hành vi bề mặt',
               'zh-CN': '探索认可需求根源的心理咨询可能有效。关键在处理表面行为之下的模式',
               'zh-TW': '探索認可需求根源的心理諮商可能有效。關鍵在處理表面行為之下的模式'},
  'description': {'en': 'One criticism can ruin your day. If someone close seems upset, the whole relationship feels '
                        'unstable. When others are negative, you may not do what you want. This level often connects '
                        'to childhood experiences of insufficient recognition or conditional love.',
                  'id': 'Satu kritik bisa merusak seharian. Jika orang dekat tampak marah, seluruh relasi terasa '
                        'goyah. Saat sekitar negatif, kamu mungkin tidak melakukan yang diinginkan. Level ini sering '
                        'terkait pengalaman masa kecil kurang pengakuan atau cinta bersyarat.',
                  'ja': '批判一つで一日が台無しになり、親しい人が怒っているように感じると関係全体が不安になり、周囲が否定的だとやりたいこともできません。このレベルは幼少期の承認不足や条件付き愛の経験から来ることが多いです。',
                  'vi': 'Một lời chỉ trích có thể hỏng cả ngày. Người thân có vẻ giận thì cả mối quan hệ bất an. Khi '
                        'xung quanh tiêu cực, bạn có thể không làm điều mình muốn. Mức này thường liên quan thiếu công '
                        'nhận thuở nhỏ hoặc tình yêu có điều kiện.',
                  'zh-CN': '一句批评可能毁掉一整天。亲近的人生气时，整段关系都不安；周围负面时，想做的事也做不了。这个程度常与童年认可不足或条件式爱的经历有关。',
                  'zh-TW': '一句批評可能毁掉一整天。親近的人生氣時，整段關係都不安；周圍負面時，想做的事也做不了。這個程度常與童年認可不足或條件式愛的經歷有關。'},
  'desireLevel': {'en': "Very high / Others' reactions strongly affect emotions, self-esteem, and relationships",
                  'id': 'Sangat tinggi / Reaksi orang lain kuat memengaruhi emosi, harga diri, relasi',
                  'ja': '非常に高い / 他人の反応が感情・自尊感・関係全体に強く影響',
                  'vi': 'Rất cao / Phản ứng người khác ảnh hưởng mạnh cảm xúc, lòng tự trọng, quan hệ',
                  'zh-CN': '很高 / 他人反应强烈影响情绪·自尊·整体关系',
                  'zh-TW': '很高 / 他人反應強烈影響情緒·自尊·整體關係'},
  'desireType': {'en': '🌧️ Strong Type',
                 'id': '🌧️ Tipe Kuat',
                 'ja': '🌧️ 強い型',
                 'vi': '🌧️ Loại mạnh',
                 'zh-CN': '🌧️ 偏强型',
                 'zh-TW': '🌧️ 偏強型'},
  'evaluationImpact': {'en': '70~90%',
                       'id': '70~90%',
                       'ja': '70~90%',
                       'vi': '70~90%',
                       'zh-CN': '70~90%',
                       'zh-TW': '70~90%'},
  'oneLiner': {'en': "Behind strong desire for others' approval, there may be a signal that you have not yet "
                     'recognized yourself',
               'id': 'Di balik keinginan kuat diakui orang lain, mungkin ada sinyal bahwa kamu belum mengakui diri '
                     'sendiri',
               'ja': '他人に承認されたい強い気持ちの後ろには、まず自分自身に承認されていないというサインがあるかもしれません',
               'vi': 'Sau mong muốn mạnh được người khác công nhận, có thể là tín hiệu bạn chưa công nhận chính mình',
               'zh-CN': '强烈想被他人认可的背后，可能是你尚未认可自己的信号',
               'zh-TW': '強烈想被他人認可的背後，可能是你尚未認可自己的信號'},
  'quote': {'en': 'Not being recognized shakes more than mood — it shakes your confidence in yourself.',
            'id': 'Tidak diakui mengguncang lebih dari mood — itu mengguncang keyakinan pada diri sendiri.',
            'ja': '承認されない経験は、単に気分が悪いことを超えて、自分自身への確信まで揺らします。',
            'vi': 'Không được công nhận lay chuyển hơn cả tâm trạng — nó lay chuyển niềm tin vào bản thân.',
            'zh-CN': '得不到认可的体验，不只是心情变差——还会动摇你对自己的确信。',
            'zh-TW': '得不到認可的體驗，不只是心情變差——還會動搖你對自己的確信。'},
  'shareLine': {'en': 'My approval-seeking level: Strong Type 🌧️ One criticism ruins my day... honestly true, maybe I '
                      "need therapy → What's your level?",
                'id': 'Kadar kebutuhan pengakuan-ku: Tipe Kuat 🌧️ Satu kritik hancurkan hariku... jujur bener, mungkin '
                      'perlu konseling → Kamu juga coba',
                'ja': '私の承認欲求濃度: 強い型 🌧️ 批判一つで一日が台無し…正直当たり、カウンセリング調べよう → あなたも測って',
                'vi': 'Nồng độ nhu cầu công nhận: Loại mạnh 🌧️ Một lời chỉ trích hỏng cả ngày... đúng thật, nên tìm tư '
                      'vấn → Bạn cũng thử',
                'zh-CN': '我的认可需求浓度：偏强型 🌧️ 一句批评毁一天…说实话太准，该看看咨询了 → 你也测测',
                'zh-TW': '我的認可需求濃度：偏強型 🌧️ 一句批評毀一天…說實話太準，該看看諮商了 → 你也測測'},
  'strengths': {'en': 'You may hide or suppress your needs, opinions, and feelings to fit others\n'
                      'Saying no or voicing a different view can feel like losing the relationship\n'
                      'Self-esteem differs greatly between when you are recognized and when you are not',
                'id': 'Mungkin menyembunyikan atau menekan kebutuhan, pendapat, perasaan agar cocok dengan orang lain\n'
                      'Menolak atau menyampaikan pendapat berbeda terasa seperti kehilangan relasi\n'
                      'Harga diri sangat berbeda saat diakui dan tidak',
                'ja': '他人に合わせるために自分の必要・意見・感情を継続的に隠したり抑えたりする\n断ること、別の意見を言うこと自体が関係を失うように感じる\n承認される時とされない時の自尊感の差が非常に大きい',
                'vi': 'Có thể giấu hoặc nén nhu cầu, ý kiến, cảm xúc để hòa hợp người khác\n'
                      'Từ chối hoặc nói ý kiến khác có thể cảm giác như mất mối quan hệ\n'
                      'Lòng tự trọng chênh lệch lớn giữa lúc được công nhận và không',
                'zh-CN': '为迎合他人可能持续隐藏或压抑自己的需要、意见和感受\n拒绝或表达不同意见本身就像会失去关系\n被认可与不被认可时，自尊差距非常大',
                'zh-TW': '為迎合他人可能持續隱藏或壓抑自己的需要、意見和感受\n拒絕或表達不同意見本身就像會失去關係\n被認可與不被認可時，自尊差距非常大'},
  'title': {'en': 'Struggling without approval, Strong Approval-Seeking Type',
            'id': 'Sangat sulit tanpa pengakuan, Tipe Kebutuhan Pengakuan Kuat',
            'ja': '承認されないとかなり苦しい人、強い承認欲求型',
            'vi': 'Rất khổ khi không được công nhận, Loại nhu cầu công nhận mạnh',
            'zh-CN': '得不到认可会很痛苦的人，强认可需求型',
            'zh-TW': '得不到認可會很痛苦的人，強認可需求型'},
  'tryNow': {'en': 'Write once a day: "I am okay even without approval." You do not have to believe it at first\n'
                   "Find one activity that feels good on your own, without others' reactions\n"
                   'Tell a trusted person about this feeling',
             'id': 'Tulis sekali sehari: "Aku baik-baik saja meski tanpa pengakuan." Awalnya tidak perlu percaya\n'
                   'Temukan satu aktivitas yang terasa bagus sendiri tanpa reaksi orang lain\n'
                   'Ceritakan perasaan ini pada orang tepercaya',
             'ja': '「承認されなくても大丈夫な人だ」と一日一回だけ書いてみる。最初は信じられなくてもよい\n他人の反応なしで一人で気分が良くなる活動を一つ見つける\n信頼できる人にこの感情を話してみる',
             'vi': 'Viết mỗi ngày một lần: "Tôi ổn dù không được công nhận." Ban đầu không cần tin\n'
                   'Tìm một hoạt động tự làm cũng thấy vui, không cần phản ứng người khác\n'
                   'Kể cảm giác này với người bạn tin',
             'zh-CN': '每天写一次：「即使不被认可我也没问题。」起初不必相信\n找一件不需要他人反应、独自也能开心的事\n向可信的人说出这种感受',
             'zh-TW': '每天寫一次：「即使不被認可我也沒問題。」起初不必相信\n找一件不需要他人反應、獨自也能開心的事\n向可信的人說出這種感受'}},
 {'cautions': {'en': 'If you try to fix extreme approval-seeking alone, you may burn out. Safely exploring the roots '
                     'in therapy is often most effective',
               'id': 'Jika mencoba memperbaiki sendiri, kamu bisa kelelahan. Menjelajahi akar dengan aman lewat '
                     'konseling sering paling efektif',
               'ja': 'このレベルの承認欲求を一人で解決しようとすると、かえって疲れ果てる場合があります。カウンセリングで根っこを安全に探るのが最も効果的なことが多い',
               'vi': 'Nếu cố tự giải quyết một mình, bạn có thể kiệt sức. Khám phá gốc rễ an toàn trong tư vấn thường '
                     'hiệu quả nhất',
               'zh-CN': '若独自硬扛这个程度的认可需求，可能更疲惫。在咨询中安全探索根源往往最有效',
               'zh-TW': '若獨自硬扛這個程度的認可需求，可能更疲憊。在諮商中安全探索根源往往最有效'},
  'certificationPhrase': {'en': 'This result is not for showing off — it is courage to know yourself now. Answering '
                                'honestly is already a start',
                          'id': 'Hasil ini bukan untuk pamer — ini keberanian mengenal diri sekarang. Menjawab jujur '
                                'sudah menjadi awal',
                          'ja': 'この結果は自慢ではなく、今の自分を知る勇気です。正直に答えたことだけで、すでに始まっています',
                          'vi': 'Kết quả này không phải để khoe — đó là can đảm hiểu bản thân hiện tại. Trả lời thành '
                                'thật đã là khởi đầu',
                          'zh-CN': '这个结果不是拿来炫耀，而是认识现在的自己的勇气。诚实作答本身就已经是开始',
                          'zh-TW': '這個結果不是拿來炫耀，而是認識現在的自己的勇氣。誠實作答本身就已經是開始'},
  'description': {'en': 'Answering this honestly already took courage. At this level, not being recognized can connect '
                        'to doubt about your own existence — not just discomfort. This pattern is not a willpower '
                        'issue; it often comes from long-standing psychological patterns.',
                  'id': 'Menjawab jujur sudah butuh keberanian. Di level ini, tidak diakui bisa terhubung ke keraguan '
                        'tentang keberadaan diri — bukan sekadar tidak nyaman. Ini bukan masalah tekad; sering dari '
                        'pola psikologis lama.',
                  'ja': 'この結果に正直に答えたこと自体がすでに勇気あることです。このレベルでは承認されない経験が単なる不快感ではなく、自分自身の存在への疑いにつながることがあります。このパターンは意志の問題ではなく、長い心理的パターンから来ることが多いです。',
                  'vi': 'Trả lời thành thật đã là can đảm. Ở mức này, không được công nhận có thể nối với nghi ngờ về '
                        'sự tồn tại của bạn — không chỉ khó chịu. Đây không phải vấn đề ý chí; thường đến từ mẫu tâm '
                        'lý lâu dài.',
                  'zh-CN': '能诚实作答本身就需要勇气。在这个程度，得不到认可可能连系到对自我存在的怀疑，而不只是不舒服。这不是意志力问题，往往来自长期的心理模式。',
                  'zh-TW': '能誠實作答本身就需要勇氣。在這個程度，得不到認可可能連繫到對自我存在的懷疑，而不只是不舒服。這不是意志力問題，往往來自長期的心理模式。'},
  'desireLevel': {'en': "Extreme / Others' gaze and evaluation decide life direction",
                  'id': 'Ekstrem / Pandangan dan evaluasi orang lain menentukan arah hidup',
                  'ja': '極強 / 他人の視線と評価が人生の方向を決める',
                  'vi': 'Cực cao / Ánh mắt và đánh giá người khác quyết định hướng sống',
                  'zh-CN': '极强 / 他人目光与评价决定人生方向',
                  'zh-TW': '極強 / 他人目光與評價決定人生方向'},
  'desireType': {'en': '🌊💧 Extreme Type',
                 'id': '🌊💧 Tipe Ekstrem',
                 'ja': '🌊💧 極強型',
                 'vi': '🌊💧 Loại cực mạnh',
                 'zh-CN': '🌊💧 极强型',
                 'zh-TW': '🌊💧 極強型'},
  'evaluationImpact': {'en': '90~100%',
                       'id': '90~100%',
                       'ja': '90~100%',
                       'vi': '90~100%',
                       'zh-CN': '90~100%',
                       'zh-TW': '90~100%'},
  'oneLiner': {'en': "Even without others' evaluation, you are valuable enough. You may not believe that yet — but "
                     'recovery is possible',
               'id': 'Meski tanpa evaluasi orang lain, kamu cukup berharga. Mungkin belum percaya — tapi pemulihan '
                     'mungkin',
               'ja': '他人の評価がなくても、あなたは十分価値のある人です。今は信じられなくても、回復の過程があります',
               'vi': 'Dù không có đánh giá người khác, bạn vẫn đủ giá trị. Có thể chưa tin — nhưng có thể hồi phục',
               'zh-CN': '即使没有他人评价，你也足够有价值。现在也许还无法相信——但恢复是可能的',
               'zh-TW': '即使沒有他人評價，你也足夠有價值。現在也許還無法相信——但恢復是可能的'},
  'quote': {'en': "You are using others' evaluation as a mirror to see yourself. When the mirror blurs, you cannot see "
                  'yourself.',
            'id': 'Kamu memakai evaluasi orang lain sebagai cermin diri. Saat cermin buram, kamu tidak bisa melihat '
                  'dirimu.',
            'ja': 'あなたは今、他人の評価を鏡にして自分を見ています。その鏡が曇ると、自分自身が見えなくなります。',
            'vi': 'Bạn đang dùng đánh giá người khác như gương để nhìn bản thân. Gương mờ đi thì không thấy mình nữa.',
            'zh-CN': '你现在正用他人评价当镜子看自己。镜子一模糊，就看不见自己了。',
            'zh-TW': '你現在正用他人評價當鏡子看自己。鏡子一模糊，就看不見自己了。'},
  'shareLine': {'en': 'My approval-seeking level: Extreme Type 🌊💧 Answered honestly and got this... pretending I '
                      "didn't care, totally caught → Answer honestly — what's your level?",
                'id': 'Kadar kebutuhan pengakuan-ku: Tipe Ekstrem 🌊💧 Jawab jujur dapat ini... pura-pura tidak peduli, '
                      'ketahuan semua → Coba jawab jujur — kadar kamu?',
                'ja': '私の承認欲求濃度: 極強型 🌊💧 正直に答えたらこの結果…承認欲求ないフリ、全部バレた → あなたも正直に答えてみて',
                'vi': 'Nồng độ nhu cầu công nhận: Loại cực mạnh 🌊💧 Trả lời thành thật ra thế này... giả vờ không care, '
                      'lộ hết → Bạn cũng thử thành thật',
                'zh-CN': '我的认可需求浓度：极强型 🌊💧 诚实作答是这个结果…装不在意全被看穿了 → 你也诚实测测',
                'zh-TW': '我的認可需求濃度：極強型 🌊💧 誠實作答是這個結果…裝不在意全被看穿了 → 你也誠實測測'},
  'strengths': {'en': 'What others want may activate before what you want\n'
                      'Anxiety when not recognized is very strong and lasts long\n'
                      'In relationships, you may perform what others want rather than express true feelings',
                'id': 'Apa yang orang lain inginkan mungkin aktif sebelum apa yang kamu inginkan\n'
                      'Kecemasan saat tidak diakui sangat kuat dan lama\n'
                      'Dalam relasi, mungkin memerankan yang diinginkan orang lain daripada ekspresi sejati',
                'ja': '自分が何を望むかより、他人が何を望むかが先に働く\n承認されない瞬間の不安が非常に強く長く続く\n関係で本当の感情を表すより、相手が望む姿を演じる傾向',
                'vi': 'Điều người khác muốn có thể kích hoạt trước điều bạn muốn\n'
                      'Lo lắng khi không được công nhận rất mạnh và kéo dài\n'
                      'Trong quan hệ, có thể diễn theo mong muốn đối phương hơn là bộc lộ cảm xúc thật',
                'zh-CN': '别人想要什么，可能比你自己想要什么先启动\n得不到认可的瞬间，焦虑很强且持续很久\n在关系中，可能演出对方想要的样子，而非表达真实感受',
                'zh-TW': '別人想要什麼，可能比你自己想要什麼先啟動\n得不到認可的瞬間，焦慮很強且持續很久\n在關係中，可能演出對方想要的樣子，而非表達真實感受'},
  'title': {'en': "Others' evaluation became life's center, Extreme Approval-Seeking Type",
            'id': 'Evaluasi orang lain jadi pusat hidup, Tipe Kebutuhan Pengakuan Ekstrem',
            'ja': '他人の評価が人生の中心になった人、極強承認欲求型',
            'vi': 'Đánh giá người khác thành trung tâm cuộc sống, Loại nhu cầu công nhận cực mạnh',
            'zh-CN': '他人评价成为人生中心的人，极强认可需求型',
            'zh-TW': '他人評價成為人生中心的人，極強認可需求型'},
  'tryNow': {'en': "Create 30 minutes today where you do not need to check others' reactions. In those 30 minutes, "
                   'feel or do something small — just for you',
             'id': 'Buat 30 menit hari ini tanpa perlu cek reaksi orang lain. Dalam 30 menit itu, rasakan atau lakukan '
                   'hal kecil — hanya untukmu',
             'ja': '今日、他人の反応を確認しなくてよい30分を作る。その30分に自分だけの小さなことを感じたりする',
             'vi': 'Tạo 30 phút hôm nay không cần kiểm tra phản ứng người khác. Trong 30 phút đó, cảm nhận hoặc làm '
                   'điều nhỏ — chỉ cho bạn',
             'zh-CN': '今天留出30分钟，不必确认他人反应。在这30分钟里，为自己感受或做一件很小的事',
             'zh-TW': '今天留出30分鐘，不必確認他人反應。在這30分鐘裡，為自己感受或做一件很小的事'}}]

_TYPE_META = [
    ("Type1", "🌊"),
    ("Type2", "🌱"),
    ("Type3", "🌤️"),
    ("Type4", "💧"),
    ("Type5", "🌧️"),
    ("Type6", "🌊💧"),
]

_RESULT_FIELDS = [
    "title",
    "desireLevel",
    "quote",
    "description",
    "desireType",
    "evaluationImpact",
    "strengths",
    "cautions",
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
        out.append(
            r(
                type_name,
                emoji,
                cautionsTitleKey=_ko_cautions_title_key(ti),
                **fields,
            )
        )
    return out


QUESTIONS = _build_questions()
RESULTS = _build_results()
