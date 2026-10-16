# -*- coding: utf-8 -*-
"""Replace phase3LoveConfidenceLevelTest skeleton blocks with localized messages."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MESSAGES_DIR = ROOT / "messages"
KEY = "phase3LoveConfidenceLevelTest"

SHARE_PLATFORMS = ("default", "kakao", "wechat", "whatsapp", "telegram", "line")
START_PLATFORMS = ("startDefault", "startKakao", "startWechat", "startWhatsapp", "startTelegram", "startLine")

LOCALES = {
    "en": {
        "start": "My Dating Confidence Level 🌱 How much do you trust yourself in front of someone you like? Find your level in 12 situations",
        "startMessage": {
            "line1": "\"How much do I trust myself in love?\"",
            "line2": "In front of someone you like, you shrink. You swallow what hurt, and you wonder if you deserve to be loved. Other times you say what you feel without flinching. Confidence in dating shifts by the moment, but you still have an average level.",
            "line3": "Twelve dating situations add up your reactions into a level and where you rank. A lower level isn't a flaw. It shows what can grow.",
            "line4": "",
            "line5": "Check My Dating Level 🌱 Start Honestly",
            "note": "※ Think about your dating and talking stages so far, and pick the reaction closest to what you actually do.",
        },
        "ui": {
            "adsenseTitle": "AdSense Ad Area (My Dating Confidence Level)",
            "goToTest": "Take the test",
            "linkCopy": "Copy link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Similar tests",
            "scoreTitle": "My dating confidence score",
            "scoreUnit": " pts",
            "topPercent": "Top {percent}%",
            "keywords": "Key words",
            "strengths": "Strengths of this level",
            "growthPoint": "Where my confidence can grow",
            "tips": "How to grow it",
            "counseling": "A note on talking to someone",
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
        "start": "私の恋愛自信レベルテスト 🌱 好きな人の前で、自分をどれくらい信じている？12の場面でレベルを確認",
        "startMessage": {
            "line1": "「恋愛で、私は自分をどれくらい信じている？」",
            "line2": "好きな人の前では小さくなり、寂しくても言葉を飲み込み、愛される資格があるか揺れることがあります。逆に、堂々と気持ちを言える瞬間もあります。恋愛の中の自信は場面で変わりますが、自分の平均レベルはあります。",
            "line3": "12の恋愛場面で反応を点数にして、自信レベルと上位何%かを出します。レベルが低いのは足りないからではなく、伸ばせる場所を見せるためです。",
            "line4": "",
            "line5": "恋愛レベルを確認する 🌱 正直にスタート",
            "note": "※ これまでの恋愛や曖昧な関係を思い浮かべ、実際の反応にいちばん近い選択肢を選んでください。",
        },
        "ui": {
            "adsenseTitle": "AdSense 広告エリア（私の恋愛自信レベルテスト）",
            "goToTest": "テストを受ける",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "似ているテスト",
            "scoreTitle": "私の恋愛自信スコア",
            "scoreUnit": "点",
            "topPercent": "上位{percent}%",
            "keywords": "キーワード",
            "strengths": "このレベルの強み",
            "growthPoint": "自信が伸びるポイント",
            "tips": "自信を育てるヒント",
            "counseling": "専門家に相談するとき",
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
        "start": "我的恋爱自信等级测试 🌱 在喜欢的人面前，你有多相信自己？用12个情境看看你的等级",
        "startMessage": {
            "line1": "“在恋爱里，我有多相信自己？”",
            "line2": "在喜欢的人面前会变小，委屈了也把话咽回去，怀疑自己配不配被爱。也有些时候，你会坦然说出自己的心意。恋爱里的自信会随场合变化，但你有一个平均等级。",
            "line3": "12个恋爱情境会把你的反应加成等级，并告诉你排在前百分之几。等级低不是缺点，而是告诉你哪里还能长。",
            "line4": "",
            "line5": "看看我的恋爱等级 🌱 诚实开始",
            "note": "※ 回想至今的恋爱和暧昧，选择最接近你真实反应的一项。",
        },
        "ui": {
            "adsenseTitle": "AdSense 广告区域（我的恋爱自信等级测试）",
            "goToTest": "去做测试",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "类似的其他测试",
            "scoreTitle": "我的恋爱自信分数",
            "scoreUnit": "分",
            "topPercent": "前{percent}%",
            "keywords": "关键词",
            "strengths": "这个等级的优势",
            "growthPoint": "自信可以长的地方",
            "tips": "把自信养起来",
            "counseling": "关于找人聊聊",
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
        "start": "我的戀愛自信等級測驗 🌱 在喜歡的人面前，你有多相信自己？用12個情境看看你的等級",
        "startMessage": {
            "line1": "「在戀愛裡，我有多相信自己？」",
            "line2": "在喜歡的人面前會變小，委屈了也把話嚥回去，懷疑自己配不配被愛。也有些時候，你會坦然說出自己的心意。戀愛裡的自信會隨場合變化，但你有一個平均等級。",
            "line3": "12個戀愛情境會把你的反應加成等級，並告訴你排在前百分之幾。等級低不是缺點，而是告訴你哪裡還能長。",
            "line4": "",
            "line5": "看看我的戀愛等級 🌱 誠實開始",
            "note": "※ 回想至今的戀愛和曖昧，選擇最接近你真實反應的一項。",
        },
        "ui": {
            "adsenseTitle": "AdSense 廣告區域（我的戀愛自信等級測驗）",
            "goToTest": "去做測驗",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "類似的其他測驗",
            "scoreTitle": "我的戀愛自信分數",
            "scoreUnit": "分",
            "topPercent": "前{percent}%",
            "keywords": "關鍵字",
            "strengths": "這個等級的優勢",
            "growthPoint": "自信可以長的地方",
            "tips": "把自信養起來",
            "counseling": "關於找人聊聊",
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
        "start": "Cấp độ tự tin trong tình yêu của tôi 🌱 Trước mặt người mình thích, bạn tin mình đến mức nào? 12 tình huống để xem cấp độ",
        "startMessage": {
            "line1": "\"Trong tình yêu, mình tin mình đến mức nào?\"",
            "line2": "Trước mặt người mình thích, bạn thu nhỏ lại, nuốt lời khi tủi, và phân vân mình có đáng được yêu không. Có lúc lại nói lòng mình một cách thẳng. Tự tin khi yêu thay đổi theo từng tình huống, nhưng bạn vẫn có một cấp độ trung bình.",
            "line3": "12 tình huống yêu đương cộng phản ứng của bạn thành cấp độ và top bao nhiêu phần trăm. Cấp thấp không phải là thiếu, mà là chỗ còn có thể lớn lên.",
            "line4": "",
            "line5": "Xem cấp độ tình yêu của mình 🌱 Bắt đầu thật lòng",
            "note": "※ Nhớ lại những lần yêu và mập mờ, chọn phản ứng gần với cách bạn thật sự làm nhất.",
        },
        "ui": {
            "adsenseTitle": "Vùng quảng cáo AdSense (Cấp độ tự tin trong tình yêu của tôi)",
            "goToTest": "Làm bài test",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Bài test tương tự",
            "scoreTitle": "Điểm tự tin khi yêu",
            "scoreUnit": " điểm",
            "topPercent": "Top {percent}%",
            "keywords": "Từ khóa chính",
            "strengths": "Điểm mạnh của cấp này",
            "growthPoint": "Chỗ tự tin còn lớn được",
            "tips": "Cách nuôi sự tự tin",
            "counseling": "Khi nên tìm người để nói",
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
        "start": "Level Kepercayaan Diriku saat Pacaran 🌱 Di depan orang yang kamu suka, seberapa kamu percaya pada dirimu? Cek levelmu lewat 12 situasi",
        "startMessage": {
            "line1": "\"Saat pacaran, seberapa aku percaya pada diriku?\"",
            "line2": "Di depan orang yang disukai, kamu jadi kecil. Kecewa pun kata-katanya ditelan. Kadang kamu ragu apakah kamu pantas dicintai. Di saat lain, kamu bisa bilang perasaanmu dengan tenang. Kepercayaan diri saat pacaran berubah-ubah, tapi ada level rata-ratamu.",
            "line3": "12 situasi pacaran menjumlahkan reaksimu jadi level dan berapa persen teratas. Level yang lebih rendah bukan kekurangan. Itu menunjukkan bagian yang masih bisa tumbuh.",
            "line4": "",
            "line5": "Cek Level Pacaranku 🌱 Mulai dengan Jujur",
            "note": "※ Ingat masa pacaran dan PDKT-mu, lalu pilih reaksi yang paling mirip dengan yang biasa kamu lakukan.",
        },
        "ui": {
            "adsenseTitle": "Area Iklan AdSense (Level Kepercayaan Diriku saat Pacaran)",
            "goToTest": "Ikuti tes",
            "linkCopy": "Salin tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "LINE",
            "whatsapp": "WhatsApp",
            "similarTests": "Tes serupa lainnya",
            "scoreTitle": "Skor kepercayaan diriku",
            "scoreUnit": " poin",
            "topPercent": "{percent}% teratas",
            "keywords": "Kata kunci utama",
            "strengths": "Kelebihan level ini",
            "growthPoint": "Bagian yang masih bisa tumbuh",
            "tips": "Cara menumbuhkan kepercayaan diri",
            "counseling": "Saat perlu bicara dengan seseorang",
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
