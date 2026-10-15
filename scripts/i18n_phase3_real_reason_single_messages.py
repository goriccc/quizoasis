# -*- coding: utf-8 -*-
"""Replace phase3RealReasonSingleTest skeleton blocks with localized messages (en, ja, zh-CN, zh-TW, vi, id)."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"
KEY = "phase3RealReasonSingleTest"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")

LOCALES = {
    "en": {
        "start": "The Real Reason I'm Still Single 🔍 Great looks, great personality—so why still single? Find your real reason in 12 situations",
        "startMessage": {
            "line1": "\"I'm decent-looking and have a good personality... so why am I still single?\"",
            "line2": "Everyone says, \"Someone like you will find a partner in no time,\" yet nothing ever starts. Maybe your standards are high, maybe it's hard for you to open up, or maybe you just have nowhere to meet good people. Most of us lump it all together and shrug: \"I guess it's just not meant to be.\"",
            "line3": "But everyone has their own real reason why love isn't happening. Once you know yours, you'll also see what needs to change.",
            "line4": "Through 12 situations, we'll uncover the reason you might not even know about yourself.",
            "line5": "Find My Real Reason 🔍 Start Honestly",
            "note": "※ Pick the answer that honestly feels closest to you. No dating experience? Just imagine and answer.",
        },
        "ui": {
            "adsenseTitle": "AdSense Ad Area (The Real Reason I'm Still Single)",
            "goToTest": "Take the test",
            "linkCopy": "Copy link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Similar tests",
            "realReason": "The real reason you're single",
            "keywords": "Key words",
            "scoreTitle": "Score by type",
            "scoreUnit": "pt",
            "hiddenReason": "Hidden reason",
            "strengths": "Strengths of this type",
            "reasonDetail": "Breaking down the real reason",
            "frequentSaying": "What this type always says",
            "changeTips": "What to try now",
            "oneLiner": "In one line",
            "shareResult": "Share your result",
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
        "start": "私が恋愛できない本当の理由 🔍 見た目も性格も悪くないのに、なぜまだ独り？12の状況であなただけの本当の理由を見つけよう",
        "startMessage": {
            "line1": "「見た目も性格も悪くないのに、なんでまだ独りなんだろう？」",
            "line2": "周りからは「あなたならすぐ恋人できるよ」と言われるのに、肝心の恋愛はなかなか始まりません。理想が高いからかもしれないし、心を開くのが苦手だからかもしれないし、いい人と出会う場がないからかもしれません。たいていは理由をひとまとめにして「縁がないのかな」で済ませてしまいます。",
            "line3": "でも、恋愛が始まらないのには、人それぞれ違う本当の理由があります。その理由がわかれば、何を変えればいいのかも見えてきます。",
            "line4": "12の状況から、自分でも気づいていなかったあなただけの理由を見つけます。",
            "line5": "本当の理由を見つける 🔍 正直にスタート",
            "note": "※ いちばん正直に、自分に近い選択肢を選んでください。恋愛経験がなくても、想像して答えればOKです。",
        },
        "ui": {
            "adsenseTitle": "AdSense 広告エリア（私が恋愛できない本当の理由）",
            "goToTest": "テストを受ける",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "似ているテスト",
            "realReason": "恋愛できない本当の理由",
            "keywords": "キーワード",
            "scoreTitle": "タイプ別スコア",
            "scoreUnit": "点",
            "hiddenReason": "隠れた理由",
            "strengths": "このタイプの強み",
            "reasonDetail": "本当の理由を詳しく見ると",
            "frequentSaying": "このタイプの口ぐせ",
            "changeTips": "今すぐ変えてみること",
            "oneLiner": "ひとことで言うと",
            "shareResult": "結果をシェアする",
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
        "start": "我谈不了恋爱的真正原因 🔍 外貌性格都不错，为什么还单身？通过12个情境找出属于你的真正原因",
        "startMessage": {
            "line1": "“长得不差、性格也不错，为什么还是单身？”",
            "line2": "身边的人都说“你这样的很快就能脱单”，可恋爱就是迟迟没有开始。可能是眼光高，可能是很难敞开心扉，也可能是根本没地方遇到合适的人。大多数人会把原因笼统归结为一句“大概是缘分没到吧”。",
            "line3": "但恋爱迟迟不开始，每个人背后都有不同的真正原因。知道了原因，也就知道该改变什么。",
            "line4": "通过12个情境，帮你找出连你自己都没察觉的真正原因。",
            "line5": "找出我的真正原因 🔍 诚实开始",
            "note": "※ 请诚实选择最接近你的选项。没有恋爱经验也没关系，想象一下再作答即可。",
        },
        "ui": {
            "adsenseTitle": "AdSense 广告区域（我谈不了恋爱的真正原因）",
            "goToTest": "去测试",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "类似的其他测试",
            "realReason": "谈不了恋爱的真正原因",
            "keywords": "核心关键词",
            "scoreTitle": "各类型得分",
            "scoreUnit": "分",
            "hiddenReason": "隐藏原因",
            "strengths": "这个类型的优点",
            "reasonDetail": "深入解读真正原因",
            "frequentSaying": "这个类型的口头禅",
            "changeTips": "现在可以尝试改变的事",
            "oneLiner": "一句话总结",
            "shareResult": "分享结果",
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
        "start": "我談不了戀愛的真正原因 🔍 外貌個性都不錯，為什麼還單身？透過12個情境找出屬於你的真正原因",
        "startMessage": {
            "line1": "「長得不差、個性也不錯，為什麼還是單身？」",
            "line2": "身邊的人都說「像你這樣很快就能脫單啦」，可是戀愛就是遲遲沒有開始。可能是眼光高，可能是很難敞開心房，也可能是根本沒地方遇到好對象。大多數人會把原因籠統歸成一句「大概是緣分還沒到吧」。",
            "line3": "但戀愛遲遲不開始，每個人背後都有不同的真正原因。知道原因，也就知道該改變什麼。",
            "line4": "透過12個情境，幫你找出連自己都沒察覺的真正原因。",
            "line5": "找出我的真正原因 🔍 誠實開始",
            "note": "※ 請誠實選擇最接近你的選項。沒有戀愛經驗也沒關係，想像一下再作答就好。",
        },
        "ui": {
            "adsenseTitle": "AdSense 廣告區域（我談不了戀愛的真正原因）",
            "goToTest": "去測驗",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "類似的其他測驗",
            "realReason": "談不了戀愛的真正原因",
            "keywords": "核心關鍵字",
            "scoreTitle": "各類型分數",
            "scoreUnit": "分",
            "hiddenReason": "隱藏原因",
            "strengths": "這個類型的優點",
            "reasonDetail": "深入解析真正原因",
            "frequentSaying": "這個類型的口頭禪",
            "changeTips": "現在可以試著改變的事",
            "oneLiner": "一句話總結",
            "shareResult": "分享結果",
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
        "start": "Lý do thật sự tôi chưa có người yêu 🔍 Ngoại hình ổn, tính cách tốt, sao vẫn độc thân? Tìm ra lý do thật sự của bạn qua 12 tình huống",
        "startMessage": {
            "line1": "\"Ngoại hình cũng ổn, tính cách cũng được, vậy sao vẫn còn độc thân?\"",
            "line2": "Ai cũng bảo \"Người như cậu thì sớm có người yêu thôi\", vậy mà chuyện tình cảm mãi chẳng bắt đầu. Có thể do bạn kén chọn, có thể do khó mở lòng, cũng có thể do chẳng có chỗ nào để gặp người phù hợp. Phần lớn chúng ta gộp hết lại rồi cho qua bằng một câu: \"Chắc tại chưa có duyên\".",
            "line3": "Nhưng mỗi người đều có một lý do thật sự khác nhau khiến tình yêu chưa đến. Biết được lý do, bạn cũng sẽ biết mình cần thay đổi điều gì.",
            "line4": "Qua 12 tình huống, chúng tôi sẽ tìm ra lý do mà chính bạn cũng chưa nhận ra.",
            "line5": "Tìm lý do thật sự 🔍 Bắt đầu thật lòng",
            "note": "※ Hãy chọn đáp án thật lòng gần với bạn nhất. Chưa từng yêu cũng không sao, cứ tưởng tượng rồi trả lời nhé.",
        },
        "ui": {
            "adsenseTitle": "Khu vực quảng cáo AdSense (Lý do thật sự tôi chưa có người yêu)",
            "goToTest": "Làm bài test",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Bài test tương tự",
            "realReason": "Lý do thật sự bạn chưa có người yêu",
            "keywords": "Từ khóa chính",
            "scoreTitle": "Điểm theo từng kiểu",
            "scoreUnit": "điểm",
            "hiddenReason": "Lý do ẩn giấu",
            "strengths": "Điểm mạnh của kiểu này",
            "reasonDetail": "Phân tích lý do thật sự",
            "frequentSaying": "Câu cửa miệng của kiểu này",
            "changeTips": "Điều nên thử thay đổi ngay",
            "oneLiner": "Tóm gọn một câu",
            "shareResult": "Chia sẻ kết quả",
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
        "start": "Alasan Sebenarnya Aku Belum Pacaran 🔍 Penampilan oke, kepribadian baik, kok masih jomblo? Temukan alasan sebenarnya lewat 12 situasi",
        "startMessage": {
            "line1": "\"Penampilan oke, kepribadian juga baik, tapi kok masih jomblo?\"",
            "line2": "Orang-orang bilang, \"Kamu sih pasti cepat dapat pacar,\" tapi nyatanya kisah cinta nggak kunjung dimulai. Mungkin karena standarmu tinggi, mungkin karena sulit membuka hati, atau mungkin memang nggak ada tempat untuk bertemu orang yang tepat. Kebanyakan dari kita menyamaratakan semuanya dan cuma bilang, \"Mungkin belum jodoh.\"",
            "line3": "Padahal setiap orang punya alasan sebenarnya yang berbeda kenapa cinta belum datang. Kalau tahu alasannya, kamu juga jadi tahu apa yang perlu diubah.",
            "line4": "Lewat 12 situasi, kami akan menemukan alasan yang bahkan belum kamu sadari.",
            "line5": "Temukan Alasan Sebenarnya 🔍 Mulai dengan Jujur",
            "note": "※ Pilih jawaban yang paling jujur dan paling mirip denganmu. Belum pernah pacaran? Bayangkan saja lalu jawab.",
        },
        "ui": {
            "adsenseTitle": "Area Iklan AdSense (Alasan Sebenarnya Aku Belum Pacaran)",
            "goToTest": "Ikuti tes",
            "linkCopy": "Salin tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Tes serupa lainnya",
            "realReason": "Alasan sebenarnya kamu belum pacaran",
            "keywords": "Kata kunci utama",
            "scoreTitle": "Skor per tipe",
            "scoreUnit": "poin",
            "hiddenReason": "Alasan tersembunyi",
            "strengths": "Kelebihan tipe ini",
            "reasonDetail": "Membedah alasan sebenarnya",
            "frequentSaying": "Kalimat andalan tipe ini",
            "changeTips": "Yang bisa dicoba sekarang",
            "oneLiner": "Satu kalimat untukmu",
            "shareResult": "Bagikan hasil",
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


POPULAR_BADGE = {"en": "Popular", "ja": "人気", "zh-CN": "热门", "zh-TW": "熱門", "vi": "Phổ biến", "id": "Populer"}


def build_block(loc: str, spec: dict) -> dict:
    share = {p: "{type}" for p in SHARE_PLATFORMS}
    share.update({p: spec["start"] for p in START_PLATFORMS})
    return {
        "startMessage": spec["startMessage"],
        "ui": {**spec["ui"], "popularBadge": POPULAR_BADGE[loc]},
        "shareMessages": share,
        "alerts": spec["alerts"],
        "recommendations": spec["recommendations"],
    }


for loc, spec in LOCALES.items():
    path = MESSAGES_DIR / f"{loc}.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    if KEY not in data:
        raise SystemExit(f"{KEY} missing in {loc}.json — run insert_phase3_real_reason_single_messages.py first")
    data[KEY] = build_block(loc, spec)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"updated {loc}")
