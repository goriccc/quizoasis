# -*- coding: utf-8 -*-
"""Replace phase3PushPullLevelTest skeleton blocks with localized messages."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"
KEY = "phase3PushPullLevelTest"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")

LOCALES = {
    "en": {
        "start": "My Push-Pull Level Test 🎣 Too close feels heavy, too far cools things off. Find your level in 10 situations",
        "startMessage": {
            "line1": "\"So what's my push-pull level?\"",
            "line2": "Get too close and it feels heavy. Step too far back and things cool off. Some people adjust the distance naturally. Others only charge in, or wear themselves out calculating. Good push-pull isn't a trick for shaking someone. It's a sense for finding a distance that feels good for both of you.",
            "line3": "Ten talking-stage and dating situations add up your reactions into a level. Compare your result with a partner or a friend.",
            "line4": "",
            "line5": "Check My Push-Pull Level 🎣 Start Honestly",
            "note": "※ Think about how you've actually reacted while talking to someone or dating, and pick the closest answer.",
        },
        "ui": {
            "scoreTitle": "My push-pull score",
            "scoreUnit": " pts",
            "keywords": "Key words",
            "strengths": "Strengths of this level",
            "growthPoint": "Where I can grow",
            "chemistryTitle": "Our push-pull match",
            "chemistryHint": "Enter their score (10–40) for a one-line read on the gap.",
            "chemistryPlaceholder": "Their score",
            "chemistryInvalid": "Enter a whole number from 10 to 40.",
            "tips": "How to level up",
            "oneLiner": "In one line",
            "popularBadge": "Popular",
            "adsenseTitle": "AdSense Ad Area (My Push-Pull Level Test)",
            "goToTest": "Take the test",
            "linkCopy": "Copy link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Similar tests",
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
        "start": "私の駆け引きレベルテスト 🎣 近づきすぎると重く、引きすぎると冷める。10の状況でレベルを測ろう",
        "startMessage": {
            "line1": "「駆け引き、私は何レベル？」",
            "line2": "近づきすぎると重く、引きすぎると冷めてしまう。自然に距離を調節できる人もいれば、直球だけ、あるいは計算して疲れてしまう人もいます。いい駆け引きは相手を揺さぶるテクニックではなく、お互いが心地いい距離を探す感覚です。",
            "line3": "10の曖昧な関係・恋愛の場面で反応を点数にして、駆け引きレベルを出します。恋人や友達と結果を比べてみてください。",
            "line4": "",
            "line5": "駆け引きレベルを測る 🎣 正直にスタート",
            "note": "※ これまでの曖昧な関係や恋愛を思い浮かべ、実際の自分にいちばん近い選択肢を選んでください。",
        },
        "ui": {
            "scoreTitle": "私の駆け引きスコア",
            "scoreUnit": "点",
            "keywords": "キーワード",
            "strengths": "このレベルの強み",
            "growthPoint": "伸ばせるポイント",
            "chemistryTitle": "二人の駆け引き相性",
            "chemistryHint": "相手の点数（10〜40）を入れると、点差に合わせたひとことを表示します。",
            "chemistryPlaceholder": "相手の点数",
            "chemistryInvalid": "10点から40点の整数を入力してください。",
            "tips": "レベルを上げるヒント",
            "oneLiner": "ひとことで言うと",
            "popularBadge": "人気",
            "adsenseTitle": "AdSense 広告エリア（私の駆け引きレベルテスト）",
            "goToTest": "テストを受ける",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "似ているテスト",
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
        "start": "我的推拉等级测试 🎣 靠太近有压力，退太远又会冷。用10个情境测出你的等级",
        "startMessage": {
            "line1": "“推拉，我是几级？”",
            "line2": "靠太近会有压力，退太远又会冷掉。有人能自然地调节距离，有人只会直球，也有人算到自己累。好的推拉不是晃动对方的技巧，而是一起找到舒服距离的感觉。",
            "line3": "10个暧昧和恋爱情境会把你的反应加成等级。和对象或朋友比一比结果吧。",
            "line4": "",
            "line5": "测测我的推拉等级 🎣 诚实开始",
            "note": "※ 回想至今的暧昧和恋爱，选择最接近你真实反应的选项。",
        },
        "ui": {
            "scoreTitle": "我的推拉分数",
            "scoreUnit": "分",
            "keywords": "核心关键词",
            "strengths": "这个等级的优点",
            "growthPoint": "我的成长点",
            "chemistryTitle": "我们俩的推拉合拍度",
            "chemistryHint": "输入对方的分数（10～40），会根据分差给出一句话。",
            "chemistryPlaceholder": "对方分数",
            "chemistryInvalid": "请输入10到40之间的整数。",
            "tips": "升级可以试试",
            "oneLiner": "一句话总结",
            "popularBadge": "热门",
            "adsenseTitle": "AdSense 广告区域（我的推拉等级测试）",
            "goToTest": "去测试",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "类似的其他测试",
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
        "start": "我的推拉等級測試 🎣 靠太近有壓力，退太遠又會冷。用10個情境測出你的等級",
        "startMessage": {
            "line1": "「推拉，我是幾級？」",
            "line2": "靠太近會有壓力，退太遠又會冷掉。有人能自然地調節距離，有人只會直球，也有人算到自己累。好的推拉不是晃動對方的技巧，而是一起找到舒服距離的感覺。",
            "line3": "10個曖昧和戀愛情境會把你的反應加成等級。和對象或朋友比一比結果吧。",
            "line4": "",
            "line5": "測測我的推拉等級 🎣 誠實開始",
            "note": "※ 回想至今的曖昧和戀愛，選擇最接近你真實反應的選項。",
        },
        "ui": {
            "scoreTitle": "我的推拉分數",
            "scoreUnit": "分",
            "keywords": "核心關鍵字",
            "strengths": "這個等級的優點",
            "growthPoint": "我的成長點",
            "chemistryTitle": "我們倆的推拉合拍度",
            "chemistryHint": "輸入對方的分數（10～40），會根據分差給出一句話。",
            "chemistryPlaceholder": "對方分數",
            "chemistryInvalid": "請輸入10到40之間的整數。",
            "tips": "升級可以試試",
            "oneLiner": "一句話總結",
            "popularBadge": "熱門",
            "adsenseTitle": "AdSense 廣告區域（我的推拉等級測試）",
            "goToTest": "去測驗",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "類似的其他測驗",
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
        "start": "Test cấp độ kéo-đẩy của tôi 🎣 Lại gần quá thì nặng, lùi xa quá thì nguội. Đo cấp độ của bạn qua 10 tình huống",
        "startMessage": {
            "line1": "\"Kéo-đẩy, mình đang ở level nào?\"",
            "line2": "Lại gần quá thì nặng, lùi xa quá thì nguội. Có người điều chỉnh khoảng cách rất tự nhiên. Có người chỉ biết thẳng, hoặc tính toán đến mức mệt. Kéo-đẩy hay không phải mẹo để lay động đối phương, mà là cảm giác cùng tìm một khoảng cách dễ chịu.",
            "line3": "10 tình huống mập mờ và yêu đương sẽ cộng phản ứng của bạn thành một cấp độ. Hãy so kết quả với người yêu hoặc bạn bè.",
            "line4": "",
            "line5": "Đo cấp độ kéo-đẩy 🎣 Bắt đầu thật lòng",
            "note": "※ Nhớ lại những lần mập mờ và yêu đương, chọn đáp án gần với phản ứng thật của bạn nhất.",
        },
        "ui": {
            "scoreTitle": "Điểm kéo-đẩy của tôi",
            "scoreUnit": " điểm",
            "keywords": "Từ khóa chính",
            "strengths": "Điểm mạnh của cấp này",
            "growthPoint": "Điểm mình có thể tiến bộ",
            "chemistryTitle": "Độ hợp kéo-đẩy của hai người",
            "chemistryHint": "Nhập điểm của đối phương (10–40) để xem một câu nhận xét theo mức chênh.",
            "chemistryPlaceholder": "Điểm của họ",
            "chemistryInvalid": "Chỉ nhập số nguyên từ 10 đến 40.",
            "tips": "Cách lên cấp",
            "oneLiner": "Tóm gọn một câu",
            "popularBadge": "Phổ biến",
            "adsenseTitle": "Khu vực quảng cáo AdSense (Test cấp độ kéo-đẩy của tôi)",
            "goToTest": "Làm bài test",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Bài test tương tự",
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
        "start": "Tes Level Tarik-Ulurku 🎣 Terlalu dekat terasa berat, terlalu jauh malah dingin. Ukur levelmu lewat 10 situasi",
        "startMessage": {
            "line1": "\"Tarik-ulur, aku level berapa?\"",
            "line2": "Terlalu dekat terasa berat, terlalu jauh malah dingin. Ada yang mengatur jarak dengan alami. Ada yang cuma frontal, atau capek karena terlalu menghitung. Tarik-ulur yang baik bukan trik untuk menggoyahkan seseorang, melainkan rasa untuk menemukan jarak yang nyaman berdua.",
            "line3": "10 situasi PDKT dan pacaran menjumlahkan reaksimu menjadi sebuah level. Bandingkan hasilnya dengan pasangan atau teman.",
            "line4": "",
            "line5": "Ukur Level Tarik-Ulurku 🎣 Mulai dengan Jujur",
            "note": "※ Ingat kembali masa PDKT dan pacaranmu, lalu pilih jawaban yang paling mirip dengan reaksi aslimu.",
        },
        "ui": {
            "scoreTitle": "Skor tarik-ulurku",
            "scoreUnit": " poin",
            "keywords": "Kata kunci utama",
            "strengths": "Kelebihan level ini",
            "growthPoint": "Poin yang bisa kutumbuhkan",
            "chemistryTitle": "Kecocokan tarik-ulur kita",
            "chemistryHint": "Masukkan skor dia (10–40) untuk melihat satu kalimat sesuai selisihnya.",
            "chemistryPlaceholder": "Skor dia",
            "chemistryInvalid": "Masukkan bilangan bulat dari 10 sampai 40.",
            "tips": "Cara naik level",
            "oneLiner": "Satu kalimat untukmu",
            "popularBadge": "Populer",
            "adsenseTitle": "Area Iklan AdSense (Tes Level Tarik-Ulurku)",
            "goToTest": "Ikuti tes",
            "linkCopy": "Salin tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Tes serupa lainnya",
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
