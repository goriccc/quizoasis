# -*- coding: utf-8 -*-
"""Replace phase3SameTypeAttractionTest skeleton blocks with localized messages (en, ja, zh-CN, zh-TW, vi, id)."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"
KEY = "phase3SameTypeAttractionTest"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")

LOCALES = {
    "en": {
        "start": "Why Am I Always Drawn to the Same Type? 🧲 Does the same kind of person keep showing up after every breakup? Find your attraction formula in 12 situations",
        "startMessage": {
            "line1": "\"After every breakup, someone just like my ex shows up again.\"",
            "line2": "They may look different, but the way they talk, their vibe, and the way the relationship plays out all feel strangely familiar. Your friends say, \"Here we go again—same type,\" and you insist, \"No, this one's really different,\" but over time, the same scenes repeat.",
            "line3": "This isn't coincidence or bad luck. Everyone has certain points their heart reacts to first, and those points become your own attraction formula. Once you know your formula, it finally makes sense why you keep falling for that kind of person.",
            "line4": "Through 12 situations, we'll uncover what the people you keep falling for have in common—and your attraction formula.",
            "line5": "Find My Attraction Formula 🧲 Start Honestly",
            "note": "※ Think back on your relationships, situationships, and crushes, and pick the answer that feels closest to you.",
        },
        "ui": {
            "adsenseTitle": "AdSense Ad Area (Why Am I Always Drawn to the Same Type?)",
            "goToTest": "Take the test",
            "linkCopy": "Copy link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Similar tests",
            "attractionFormula": "My attraction formula",
            "keywords": "Key words",
            "scoreTitle": "Score by type",
            "scoreUnit": "pt",
            "hiddenAttraction": "Hidden attraction",
            "attractedTo": "Who you keep falling for",
            "strengths": "Strengths of this type",
            "repeatPattern": "Repeating pattern",
            "frequentSaying": "What this type always says",
            "changeTips": "What to try now",
            "oneLiner": "In one line",
            "shareResult": "Share your result",
            "popularBadge": "Popular",
        },
        "alerts": {
            "linkCopied": "Link copied!",
            "resultCopied": "Result copied to clipboard!",
            "shareFailed": "Sharing isn't available.",
            "wechatCopy": "Link copied! Paste it in WeChat to share.",
            "kakaoInit": "Setting up KakaoTalk sharing. Please try again in a moment.",
            "kakaoError": "Something went wrong while sharing to KakaoTalk.",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 Similar Tests",
            "popularTestsTop5": "🔥 Top 5 Trending Tests",
        },
    },
    "ja": {
        "start": "なぜ私はいつも似たような人に惹かれるの？🧲 別れても、なぜかまた似たような人が現れる？12の状況であなただけの「惹かれる法則」を見つけよう",
        "startMessage": {
            "line1": "「別れても、なぜかまた似たような人が現れる。」",
            "line2": "見た目は違っても、話し方や雰囲気、恋愛の流れ方はどこか似ています。友達には「またそういうタイプ？」と言われ、自分は「今回は本当に違う人なの」と言うけれど、時間が経つと同じ場面が繰り返されます。",
            "line3": "これは偶然でも運でもありません。人にはそれぞれ心が先に反応するポイントがあり、そのポイントがあなただけの「惹かれる法則」になります。法則がわかれば、なぜいつもその人に惹かれるのか、理由がすっきり整理されます。",
            "line4": "12の状況から、あなたが繰り返し惹かれる人の共通点と「惹かれる法則」を見つけます。",
            "line5": "惹かれる法則を見つける 🧲 正直にスタート",
            "note": "※ これまでの恋愛や曖昧な関係、片思いを思い浮かべながら、いちばん近い選択肢を選んでください。",
        },
        "ui": {
            "adsenseTitle": "AdSense 広告エリア（なぜ私はいつも似たような人に惹かれるの？）",
            "goToTest": "テストを受ける",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "似ているテスト",
            "attractionFormula": "私の惹かれる法則",
            "keywords": "キーワード",
            "scoreTitle": "タイプ別スコア",
            "scoreUnit": "点",
            "hiddenAttraction": "隠れた惹かれポイント",
            "attractedTo": "繰り返し惹かれる人",
            "strengths": "このタイプの強み",
            "repeatPattern": "繰り返しパターン",
            "frequentSaying": "このタイプの口ぐせ",
            "changeTips": "今すぐ変えてみること",
            "oneLiner": "ひとことで言うと",
            "shareResult": "結果をシェアする",
            "popularBadge": "人気",
        },
        "alerts": {
            "linkCopied": "リンクをコピーしました！",
            "resultCopied": "結果をクリップボードにコピーしました！",
            "shareFailed": "共有機能を利用できません。",
            "wechatCopy": "リンクをコピーしました！WeChatに貼り付けてシェアしてください。",
            "kakaoInit": "カカオトーク共有を準備中です。しばらくしてからもう一度お試しください。",
            "kakaoError": "カカオトーク共有中にエラーが発生しました。",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 似ているテスト おすすめTOP5",
            "popularTestsTop5": "🔥 いま人気のテスト おすすめTOP5",
        },
    },
    "zh-CN": {
        "start": "为什么我总是被同一类人吸引？🧲 每次分手后，总会遇到差不多的人？通过12个情境找出你专属的心动公式",
        "startMessage": {
            "line1": "“每次分手后，总会再遇到差不多的人。”",
            "line2": "长相或许不同，但说话方式、气质，还有恋爱的走向，总有几分相似。朋友说“你又找了这种类型啊”，你却说“这次真的不一样”，可时间一久，同样的剧情又会重演。",
            "line3": "这既不是巧合，也不是运气。每个人的心都有率先产生反应的点，而这些点就构成了你专属的心动公式。知道了公式，就能理清自己为什么总被那种人吸引。",
            "line4": "通过12个情境，帮你找出你反复心动的人的共同点和你的心动公式。",
            "line5": "找出我的心动公式 🧲 诚实开始",
            "note": "※ 请回想至今的恋爱、暧昧和暗恋，选出最接近你的选项。",
        },
        "ui": {
            "adsenseTitle": "AdSense 广告区域（为什么我总是被同一类人吸引？）",
            "goToTest": "去测试",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "类似的其他测试",
            "attractionFormula": "我的心动公式",
            "keywords": "核心关键词",
            "scoreTitle": "各类型得分",
            "scoreUnit": "分",
            "hiddenAttraction": "隐藏的心动点",
            "attractedTo": "反复吸引你的人",
            "strengths": "这个类型的优点",
            "repeatPattern": "反复出现的模式",
            "frequentSaying": "这个类型的口头禅",
            "changeTips": "现在可以尝试改变的事",
            "oneLiner": "一句话总结",
            "shareResult": "分享结果",
            "popularBadge": "热门",
        },
        "alerts": {
            "linkCopied": "链接已复制！",
            "resultCopied": "结果已复制到剪贴板！",
            "shareFailed": "无法使用分享功能。",
            "wechatCopy": "链接已复制！请粘贴到微信中分享。",
            "kakaoInit": "正在初始化KakaoTalk分享功能，请稍后再试。",
            "kakaoError": "KakaoTalk分享时出现错误。",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 类似测试推荐 TOP5",
            "popularTestsTop5": "🔥 近期热门测试推荐 TOP5",
        },
    },
    "zh-TW": {
        "start": "為什麼我總是被同一型的人吸引？🧲 每次分手後，總會遇到差不多的人？透過12個情境找出你專屬的心動公式",
        "startMessage": {
            "line1": "「每次分手後，總會再遇到差不多的人。」",
            "line2": "長相或許不同，但說話方式、氣質，還有戀愛的走向，總有幾分相似。朋友說「你又找這種類型喔」，你卻說「這次真的不一樣啦」，可是時間一久，同樣的劇情又會重演。",
            "line3": "這不是巧合，也不是運氣。每個人的心都有最先產生反應的點，而這些點就構成了你專屬的心動公式。知道公式，就能理清自己為什麼總被那種人吸引。",
            "line4": "透過12個情境，幫你找出你反覆心動的人的共同點和你的心動公式。",
            "line5": "找出我的心動公式 🧲 誠實開始",
            "note": "※ 請回想至今的戀愛、曖昧和暗戀，選出最接近你的選項。",
        },
        "ui": {
            "adsenseTitle": "AdSense 廣告區域（為什麼我總是被同一型的人吸引？）",
            "goToTest": "去測驗",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "類似的其他測驗",
            "attractionFormula": "我的心動公式",
            "keywords": "核心關鍵字",
            "scoreTitle": "各類型分數",
            "scoreUnit": "分",
            "hiddenAttraction": "隱藏的心動點",
            "attractedTo": "反覆吸引你的人",
            "strengths": "這個類型的優點",
            "repeatPattern": "反覆出現的模式",
            "frequentSaying": "這個類型的口頭禪",
            "changeTips": "現在可以試著改變的事",
            "oneLiner": "一句話總結",
            "shareResult": "分享結果",
            "popularBadge": "熱門",
        },
        "alerts": {
            "linkCopied": "連結已複製！",
            "resultCopied": "結果已複製到剪貼簿！",
            "shareFailed": "無法使用分享功能。",
            "wechatCopy": "連結已複製！請貼到 WeChat 分享。",
            "kakaoInit": "正在初始化 KakaoTalk 分享功能，請稍後再試。",
            "kakaoError": "KakaoTalk 分享時發生錯誤。",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 類似測驗推薦 TOP5",
            "popularTestsTop5": "🔥 近期熱門測驗推薦 TOP5",
        },
    },
    "vi": {
        "start": "Vì sao mình luôn bị thu hút bởi cùng một kiểu người? 🧲 Chia tay xong lại gặp đúng kiểu người cũ? Tìm công thức rung động của bạn qua 12 tình huống",
        "startMessage": {
            "line1": "\"Cứ chia tay xong là y như rằng lại gặp một người na ná như cũ.\"",
            "line2": "Ngoại hình có thể khác, nhưng cách nói chuyện, khí chất và cách mối tình diễn ra lại giống nhau đến lạ. Bạn bè bảo \"Lại đúng gu cũ rồi\", còn bạn khẳng định \"Lần này khác thật mà\", nhưng rồi thời gian trôi qua, những cảnh cũ lại lặp lại.",
            "line3": "Đây không phải trùng hợp hay vận may. Mỗi người đều có những điểm khiến trái tim phản ứng trước tiên, và chính những điểm ấy tạo nên công thức rung động của riêng bạn. Biết được công thức, bạn sẽ hiểu vì sao mình cứ bị thu hút bởi kiểu người đó.",
            "line4": "Qua 12 tình huống, chúng tôi sẽ tìm ra điểm chung của những người bạn cứ lặp lại việc rung động, cùng công thức rung động của bạn.",
            "line5": "Tìm công thức rung động 🧲 Bắt đầu thật lòng",
            "note": "※ Hãy nhớ lại những mối tình, những lần mập mờ và yêu đơn phương, rồi chọn đáp án gần với bạn nhất.",
        },
        "ui": {
            "adsenseTitle": "Khu vực quảng cáo AdSense (Vì sao mình luôn bị thu hút bởi cùng một kiểu người?)",
            "goToTest": "Làm bài test",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Bài test tương tự",
            "attractionFormula": "Công thức rung động của tôi",
            "keywords": "Từ khóa chính",
            "scoreTitle": "Điểm theo từng kiểu",
            "scoreUnit": "điểm",
            "hiddenAttraction": "Sức hút ẩn giấu",
            "attractedTo": "Kiểu người bạn cứ bị thu hút",
            "strengths": "Điểm mạnh của kiểu này",
            "repeatPattern": "Vòng lặp quen thuộc",
            "frequentSaying": "Câu cửa miệng của kiểu này",
            "changeTips": "Điều nên thử thay đổi ngay",
            "oneLiner": "Tóm gọn một câu",
            "shareResult": "Chia sẻ kết quả",
            "popularBadge": "Phổ biến",
        },
        "alerts": {
            "linkCopied": "Đã sao chép liên kết!",
            "resultCopied": "Đã sao chép kết quả vào bộ nhớ tạm!",
            "shareFailed": "Không thể sử dụng tính năng chia sẻ.",
            "wechatCopy": "Đã sao chép liên kết! Hãy dán vào WeChat để chia sẻ.",
            "kakaoInit": "Đang khởi tạo tính năng chia sẻ KakaoTalk. Vui lòng thử lại sau giây lát.",
            "kakaoError": "Đã xảy ra lỗi khi chia sẻ qua KakaoTalk.",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 bài test tương tự",
            "popularTestsTop5": "🔥 Top 5 bài test đang hot",
        },
    },
    "id": {
        "start": "Kenapa Aku Selalu Tertarik pada Tipe yang Sama? 🧲 Habis putus, kok ketemu tipe yang mirip lagi? Temukan rumus ketertarikanmu lewat 12 situasi",
        "startMessage": {
            "line1": "\"Habis putus, pasti muncul lagi orang yang mirip.\"",
            "line2": "Wajahnya mungkin beda, tapi cara bicara, vibe, sampai alur hubungannya entah kenapa mirip. Teman-teman bilang, \"Kamu lagi-lagi tipe yang begitu,\" dan kamu bilang, \"Yang ini beneran beda kok,\" tapi lama-lama adegan yang sama terulang lagi.",
            "line3": "Ini bukan kebetulan atau nasib. Setiap orang punya titik yang membuat hatinya bereaksi duluan, dan titik itulah yang jadi rumus ketertarikanmu sendiri. Kalau tahu rumusnya, alasan kenapa kamu terus tertarik pada orang seperti itu jadi jelas.",
            "line4": "Lewat 12 situasi, kami akan menemukan kesamaan orang-orang yang terus membuatmu tertarik dan rumus ketertarikanmu.",
            "line5": "Temukan Rumus Ketertarikanku 🧲 Mulai dengan Jujur",
            "note": "※ Ingat kembali hubungan, masa PDKT, dan cinta diam-diammu selama ini, lalu pilih jawaban yang paling mirip denganmu.",
        },
        "ui": {
            "adsenseTitle": "Area Iklan AdSense (Kenapa Aku Selalu Tertarik pada Tipe yang Sama?)",
            "goToTest": "Ikuti tes",
            "linkCopy": "Salin tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Tes serupa lainnya",
            "attractionFormula": "Rumus ketertarikanku",
            "keywords": "Kata kunci utama",
            "scoreTitle": "Skor per tipe",
            "scoreUnit": "poin",
            "hiddenAttraction": "Ketertarikan tersembunyi",
            "attractedTo": "Orang yang terus bikin kamu tertarik",
            "strengths": "Kelebihan tipe ini",
            "repeatPattern": "Pola yang terus berulang",
            "frequentSaying": "Kalimat andalan tipe ini",
            "changeTips": "Yang bisa dicoba sekarang",
            "oneLiner": "Satu kalimat untukmu",
            "shareResult": "Bagikan hasil",
            "popularBadge": "Populer",
        },
        "alerts": {
            "linkCopied": "Tautan disalin!",
            "resultCopied": "Hasil disalin ke papan klip!",
            "shareFailed": "Fitur berbagi tidak tersedia.",
            "wechatCopy": "Tautan disalin! Tempel di WeChat untuk berbagi.",
            "kakaoInit": "Sedang menyiapkan fitur berbagi KakaoTalk. Silakan coba lagi sebentar.",
            "kakaoError": "Terjadi kesalahan saat berbagi ke KakaoTalk.",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 Tes Serupa",
            "popularTestsTop5": "🔥 Top 5 Tes Terpopuler",
        },
    },
}


def build_block(spec: dict) -> dict:
    share = {p: "{type}" for p in SHARE_PLATFORMS}
    share.update({p: spec["start"] for p in START_PLATFORMS})
    return {
        "startMessage": spec["startMessage"],
        "ui": spec["ui"],
        "shareMessages": share,
        "alerts": spec["alerts"],
        "recommendations": spec["recommendations"],
    }


for loc, spec in LOCALES.items():
    path = MESSAGES_DIR / f"{loc}.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    if KEY not in data:
        raise SystemExit(f"{KEY} missing in {loc}.json — run insert_phase3_same_type_attraction_messages.py first")
    data[KEY] = build_block(spec)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")
