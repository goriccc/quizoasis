# -*- coding: utf-8 -*-
"""Replace phase3ConfessionSuccessTest skeleton blocks with localized messages."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"
KEY = "phase3ConfessionSuccessTest"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")

LOCALES = {
    "en": {
        "start": "My Confession Success Rate 💌 Same feelings, different timing and delivery. Calculate your odds in 10 situations",
        "startMessage": {
            "line1": "\"If I tell them, will it land?\"",
            "line2": "The same feelings can land very differently depending on when you say them and how. Whether it works isn't only about their heart. It also depends on the groundwork you've built and the way you say it.",
            "line3": "Ten situations add up your choices into a success rate and where you rank. Compare your result with a friend.",
            "line4": "",
            "line5": "Calculate My Odds 💌 Start Honestly",
            "note": "※ Think about your talking stages and crushes so far, and pick the choice closer to what you'd actually do.",
        },
        "ui": {
            "adsenseTitle": "AdSense Ad Area (My Confession Success Rate)",
            "goToTest": "Take the test",
            "linkCopy": "Copy link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Similar tests",
            "scoreTitle": "My confession score",
            "scoreUnit": " pts",
            "topPercent": "Top {percent}%",
            "keywords": "Key words",
            "strengths": "Strengths at this rate",
            "growthPoint": "What to work on",
            "tips": "How to raise the odds",
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
        "start": "私の告白成功確率 💌 同じ気持ちでもタイミングと伝え方で結果は変わる。10の状況で確率を計算",
        "startMessage": {
            "line1": "「告白したら、届くかな？」",
            "line2": "同じ気持ちでも、どのタイミングで、どんな伝え方をするかで結果は変わります。告白がうまくいくかは相手の気持ちだけではなく、積み重ねてきた過程と伝え方にもかかっています。",
            "line3": "10の状況で選択を点数にして、告白の成功確率と上位何%かを出します。結果を友達と比べてみてください。",
            "line4": "",
            "line5": "告白確率を計算する 💌 正直にスタート",
            "note": "※ これまでの曖昧な関係や片思いを思い浮かべ、実際の自分に近いほうを選んでください。",
        },
        "ui": {
            "adsenseTitle": "AdSense 広告エリア（私の告白成功確率）",
            "goToTest": "テストを受ける",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "似ているテスト",
            "scoreTitle": "私の告白スコア",
            "scoreUnit": "点",
            "topPercent": "上位{percent}%",
            "keywords": "キーワード",
            "strengths": "この確率の強み",
            "growthPoint": "告白の補いたい点",
            "tips": "確率を上げるヒント",
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
        "start": "我的告白成功概率 💌 同样的心意，时机和方式会改写结果。用10个情境算算你的概率",
        "startMessage": {
            "line1": "“我要是告白，能成吗？”",
            "line2": "同样的心意，时机和说法不同，结果往往也不一样。告白成不成，不只看对方的心，也看你铺垫了多久、怎么说出口。",
            "line3": "10个情境会把你的选择加成成功概率，并告诉你排在前百分之几。拿结果和朋友比一比。",
            "line4": "",
            "line5": "算算我的告白概率 💌 诚实开始",
            "note": "※ 回想至今的暧昧和暗恋，选更接近你真实做法的一边。",
        },
        "ui": {
            "adsenseTitle": "AdSense 广告区域（我的告白成功概率）",
            "goToTest": "去做测试",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "类似的其他测试",
            "scoreTitle": "我的告白分数",
            "scoreUnit": "分",
            "topPercent": "前{percent}%",
            "keywords": "关键词",
            "strengths": "这个概率的优势",
            "growthPoint": "告白可以补的点",
            "tips": "提高概率的做法",
            "oneLiner": "一句话",
            "shareResult": "分享结果",
            "popularBadge": "人气",
        },
        "alerts": {
            "linkCopied": "链接已复制！",
            "resultCopied": "结果已复制到剪贴板！",
            "shareFailed": "无法使用分享功能。",
            "wechatCopy": "链接已复制！请粘贴到微信分享。",
            "kakaoInit": "正在准备 KakaoTalk 分享，请稍后再试。",
            "kakaoError": "分享到 KakaoTalk 时出错了。",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 类似测试推荐 TOP5",
            "popularTestsTop5": "🔥 近期人气测试 TOP5",
        },
    },
    "zh-TW": {
        "start": "我的告白成功機率 💌 同樣的心意，時機和方式會改寫結果。用10個情境算算你的機率",
        "startMessage": {
            "line1": "「我要是告白，會成嗎？」",
            "line2": "同樣的心意，時機和說法不同，結果往往也不一樣。告白成不成，不只看對方的心，也看你鋪墊了多久、怎麼說出口。",
            "line3": "10個情境會把你的選擇加成成功機率，並告訴你排在前百分之幾。拿結果和朋友比一比。",
            "line4": "",
            "line5": "算算我的告白機率 💌 誠實開始",
            "note": "※ 回想至今的曖昧和暗戀，選更接近你真實做法的一邊。",
        },
        "ui": {
            "adsenseTitle": "AdSense 廣告區域（我的告白成功機率）",
            "goToTest": "去做測驗",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "類似的其他測驗",
            "scoreTitle": "我的告白分數",
            "scoreUnit": "分",
            "topPercent": "前{percent}%",
            "keywords": "關鍵字",
            "strengths": "這個機率的優勢",
            "growthPoint": "告白可以補的點",
            "tips": "提高機率的做法",
            "oneLiner": "一句話",
            "shareResult": "分享結果",
            "popularBadge": "人氣",
        },
        "alerts": {
            "linkCopied": "連結已複製！",
            "resultCopied": "結果已複製到剪貼簿！",
            "shareFailed": "無法使用分享功能。",
            "wechatCopy": "連結已複製！請貼到微信分享。",
            "kakaoInit": "正在準備 KakaoTalk 分享，請稍後再試。",
            "kakaoError": "分享到 KakaoTalk 時出錯了。",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 類似測驗推薦 TOP5",
            "popularTestsTop5": "🔥 近期人氣測驗 TOP5",
        },
    },
    "vi": {
        "start": "Xác suất tỏ tình thành công của tôi 💌 Cùng một tấm lòng, thời điểm và cách nói đổi kết quả. 10 tình huống để tính xác suất",
        "startMessage": {
            "line1": "\"Nếu mình tỏ tình, có được nhận không?\"",
            "line2": "Cùng một tấm lòng, thời điểm và cách nói khác nhau thì kết quả cũng hay khác. Tỏ tình thành công không chỉ nhờ lòng người kia, mà còn nhờ quá trình bạn đã xây và cách bạn nói ra.",
            "line3": "10 tình huống cộng điểm lựa chọn của bạn thành xác suất thành công và top bao nhiêu phần trăm. Mang kết quả so với bạn bè xem.",
            "line4": "",
            "line5": "Tính xác suất tỏ tình của mình 💌 Bắt đầu thật lòng",
            "note": "※ Nhớ lại những lần mập mờ và crush từ trước đến nay, chọn phương án gần với cách bạn thật sự làm hơn.",
        },
        "ui": {
            "adsenseTitle": "Vùng quảng cáo AdSense (Xác suất tỏ tình thành công của tôi)",
            "goToTest": "Làm bài test",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Bài test tương tự",
            "scoreTitle": "Điểm tỏ tình của mình",
            "scoreUnit": " điểm",
            "topPercent": "Top {percent}%",
            "keywords": "Từ khóa chính",
            "strengths": "Điểm mạnh ở mức này",
            "growthPoint": "Điểm cần bổ sung",
            "tips": "Cách tăng xác suất",
            "oneLiner": "Một câu cho bạn",
            "shareResult": "Chia sẻ kết quả",
            "popularBadge": "Phổ biến",
        },
        "alerts": {
            "linkCopied": "Đã sao chép liên kết!",
            "resultCopied": "Đã sao chép kết quả!",
            "shareFailed": "Không dùng được tính năng chia sẻ.",
            "wechatCopy": "Đã sao chép liên kết! Hãy dán vào WeChat để chia sẻ.",
            "kakaoInit": "Đang chuẩn bị chia sẻ KakaoTalk. Hãy thử lại sau giây lát.",
            "kakaoError": "Có lỗi khi chia sẻ lên KakaoTalk.",
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 bài test tương tự",
            "popularTestsTop5": "🔥 Top 5 bài test đang hot",
        },
    },
    "id": {
        "start": "Peluang Keberhasilan Nembakku 💌 Perasaan yang sama, waktu dan cara menyampaikan yang mengubah hasil. Hitung peluangmu lewat 10 situasi",
        "startMessage": {
            "line1": "\"Kalau aku nembak, bakal diterima nggak?\"",
            "line2": "Perasaan yang sama bisa beda hasilnya, tergantung kapan dan bagaimana kamu menyampaikannya. Nembak berhasil bukan cuma soal hati dia, tapi juga proses yang sudah kamu bangun dan cara kamu bilang.",
            "line3": "10 situasi menjumlahkan pilihanmu jadi peluang berhasil dan berapa persen teratas. Bandingkan hasilnya dengan teman.",
            "line4": "",
            "line5": "Hitung Peluang Nembakku 💌 Mulai dengan Jujur",
            "note": "※ Ingat masa PDKT dan crush-mu sejauh ini, lalu pilih yang lebih mirip dengan pilihan aslimu.",
        },
        "ui": {
            "adsenseTitle": "Area Iklan AdSense (Peluang Keberhasilan Nembakku)",
            "goToTest": "Ikuti tes",
            "linkCopy": "Salin tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Tes serupa lainnya",
            "scoreTitle": "Skor nembakku",
            "scoreUnit": " poin",
            "topPercent": "{percent}% teratas",
            "keywords": "Kata kunci utama",
            "strengths": "Kelebihan di peluang ini",
            "growthPoint": "Yang perlu dilengkapi",
            "tips": "Cara menaikkan peluang",
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
        raise SystemExit(f"{KEY} missing in {loc}.json")
    data[KEY] = build_block(spec)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")
