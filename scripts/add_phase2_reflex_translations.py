import json
import os

# 번역 데이터 정의
translations = {
    "ko": {
        "startMessage": {
            "line1": "당신의 뇌와 손가락은 연결되어 있나요?",
            "line2": "눈으로 보고, 뇌가 인지하고, 손가락이 움직이는 시간. 일반인의 평균 반응속도는 약 0.25초 (250ms)입니다.",
            "line3": "혹시 나이가 들어서 반응이 느려졌다고 느끼나요? 아니면 아직 쌩쌩한 피지컬을 가지고 있나요?",
            "line4": "지금 당신의 '진짜' 속도를 측정해 드립니다.",
            "line5": "반응속도 측정 시작 ⚡"
        },
        "shareMessages": {
            "default": "내 반응속도는 평균 {record}ms! 등급은 {type} ⚡ 너 나 이길 수 있음?",
            "kakao": "내 반응속도는 평균 {record}ms! 등급은 {type} ⚡ 너 나 이길 수 있음?",
            "line": "내 반응속도는 평균 {record}ms! 등급은 {type} ⚡ 너 나 이길 수 있음?",
            "wechat": "내 반응속도는 평균 {record}ms! 등급은 {type} ⚡ 너 나 이길 수 있음?",
            "whatsapp": "내 반응속도는 평균 {record}ms! 등급은 {type} ⚡ 너 나 이길 수 있음?",
            "telegram": "내 반응속도는 평균 {record}ms! 등급은 {type} ⚡ 너 나 이길 수 있음?",
            "startDefault": "0.1초의 승부! 반응속도 테스트 ⚡ 당신의 피지컬은 몇 등급?",
            "startKakao": "0.1초의 승부! 반응속도 테스트 ⚡ 당신의 피지컬은 몇 등급?",
            "startLine": "0.1초의 승부! 반응속도 테스트 ⚡ 당신의 피지컬은 몇 등급?",
            "startWechat": "0.1초의 승부! 반응속도 테스트 ⚡ 당신의 피지컬은 몇 등급?",
            "startWhatsapp": "0.1초의 승부! 반응속도 테스트 ⚡ 당신의 피지컬은 몇 등급?",
            "startTelegram": "0.1초의 승부! 반응속도 테스트 ⚡ 당신의 피지컬은 몇 등급?"
        },
        "ui": {
            "title": "0.1초의 승부! 반응속도 테스트",
            "startTest": "테스트 시작",
            "retry": "다시 측정하기",
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "similarTests": "유사한 테스트",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡 공유",
            "telegram": "텔레그램 공유",
            "wechat": "위챗 공유",
            "line": "라인 공유",
            "whatsapp": "왓츠앱 공유",
            "shareResult": "결과 공유하기",
            "survivalInstinct": "📊 당신의 속도",
            "recommendation": "⭐ 추천 직업",
            "otherTests": "다른 테스트 보기"
        },
        "game": {
            "wait": "대기...",
            "waitDesc": "초록색이 되면 클릭하세요",
            "click": "클릭!!!",
            "tooSoon": "너무 빨라요!",
            "clickToRetry": "다시 하려면 클릭하세요",
            "clickToContinue": "계속하려면 클릭하세요"
        },
        "alerts": {
            "linkCopied": "링크가 복사되었습니다!",
            "shareFailed": "공유 기능을 사용할 수 없습니다.",
            "wechatCopy": "링크가 복사되었습니다. 위챗에 붙여넣어 공유하세요."
        },
        "recommendations": {
            "similarTestsTop5": "🎯 유사한 다른 테스트 추천 Top 5",
            "popularTestsTop5": "🔥 요즘 인기 테스트 추천 Top 5"
        }
    },
    "en": {
        "startMessage": {
            "line1": "Is your brain connected to your fingers?",
            "line2": "The time it takes to see, process, and move. The average reaction time is about 0.25s (250ms).",
            "line3": "Do you feel slower with age? or do you still have sharp reflexes?",
            "line4": "We will measure your 'real' speed now.",
            "line5": "Start Reaction Test ⚡"
        },
        "shareMessages": {
            "default": "My average reaction speed is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "kakao": "My average reaction speed is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "line": "My average reaction speed is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "wechat": "My average reaction speed is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "whatsapp": "My average reaction speed is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "telegram": "My average reaction speed is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "startDefault": "0.1 Second Showdown! Reaction Speed Test ⚡ What is your rank?",
            "startKakao": "0.1 Second Showdown! Reaction Speed Test ⚡ What is your rank?",
            "startLine": "0.1 Second Showdown! Reaction Speed Test ⚡ What is your rank?",
            "startWechat": "0.1 Second Showdown! Reaction Speed Test ⚡ What is your rank?",
            "startWhatsapp": "0.1 Second Showdown! Reaction Speed Test ⚡ What is your rank?",
            "startTelegram": "0.1 Second Showdown! Reaction Speed Test ⚡ What is your rank?"
        },
        "ui": {
            "title": "0.1 Second Showdown! Reaction Speed Test",
            "startTest": "Start Test",
            "retry": "Try Again",
            "adsenseTitle": "Advertisement",
            "goToTest": "Go to Test",
            "similarTests": "Similar Tests",
            "linkCopy": "Copy Link",
            "kakao": "Kakao Share",
            "telegram": "Telegram Share",
            "wechat": "WeChat Share",
            "line": "Line Share",
            "whatsapp": "WhatsApp Share",
            "shareResult": "Share Result",
            "survivalInstinct": "📊 Your Speed",
            "recommendation": "⭐ Recommended Job",
            "otherTests": "View Other Tests"
        },
        "game": {
            "wait": "Wait...",
            "waitDesc": "Click when green",
            "click": "CLICK!!!",
            "tooSoon": "Too Soon!",
            "clickToRetry": "Click to retry",
            "clickToContinue": "Click to continue"
        },
        "alerts": {
            "linkCopied": "Link copied!",
            "shareFailed": "Share unavailable.",
            "wechatCopy": "Link copied. Paste in WeChat to share."
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 Similar Tests",
            "popularTestsTop5": "🔥 Top 5 Popular Tests"
        }
    },
    "ja": {
        "startMessage": {
            "line1": "あなたの脳と指はつながっていますか？",
            "line2": "目で見て、脳が認知し、指が動く時間。一般人の平均反応速度は約0.25秒（250ms）です。",
            "line3": "年齢とともに反応が遅くなったと感じますか？それともまだ現役ですか？",
            "line4": "今、あなたの「本当の」速度を測定します。",
            "line5": "反応速度測定開始 ⚡"
        },
        "shareMessages": {
            "default": "私の平均反応速度は{record}ms！ランクは{type} ⚡ 私に勝てますか？",
            "kakao": "私の平均反応速度は{record}ms！ランクは{type} ⚡ 私に勝てますか？",
            "line": "私の平均反応速度は{record}ms！ランクは{type} ⚡ 私に勝てますか？",
            "wechat": "私の平均反応速度は{record}ms！ランクは{type} ⚡ 私に勝てますか？",
            "whatsapp": "私の平均反応速度は{record}ms！ランクは{type} ⚡ 私に勝てますか？",
            "telegram": "私の平均反応速度は{record}ms！ランクは{type} ⚡ 私に勝てますか？",
            "startDefault": "0.1秒の勝負！反応速度テスト ⚡ あなたのランクは？",
            "startKakao": "0.1秒の勝負！反応速度テスト ⚡ あなたのランクは？",
            "startLine": "0.1秒の勝負！反応速度テスト ⚡ あなたのランクは？",
            "startWechat": "0.1秒の勝負！反応速度テスト ⚡ あなたのランクは？",
            "startWhatsapp": "0.1秒の勝負！反応速度テスト ⚡ あなたのランクは？",
            "startTelegram": "0.1秒の勝負！反応速度テスト ⚡ あなたのランクは？"
        },
        "ui": {
            "title": "0.1秒の勝負！反応速度テスト",
            "startTest": "テスト開始",
            "retry": "もう一度測定",
            "adsenseTitle": "広告",
            "goToTest": "テストに行く",
            "similarTests": "類似のテスト",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク共有",
            "telegram": "Telegram共有",
            "wechat": "WeChat共有",
            "line": "Line共有",
            "whatsapp": "WhatsApp共有",
            "shareResult": "結果を共有",
            "survivalInstinct": "📊 あなたの速度",
            "recommendation": "⭐ おすすめの職業",
            "otherTests": "他のテストを見る"
        },
        "game": {
            "wait": "待機...",
            "waitDesc": "緑になったらクリック",
            "click": "クリック!!!",
            "tooSoon": "早すぎます！",
            "clickToRetry": "クリックしてリトライ",
            "clickToContinue": "クリックして次へ"
        },
        "alerts": {
            "linkCopied": "リンクがコピーされました！",
            "shareFailed": "共有機能を利用できません。",
            "wechatCopy": "リンクがコピーされました。WeChatに貼り付けて共有してください。"
        },
        "recommendations": {
            "similarTestsTop5": "🎯 おすすめの類似テスト Top 5",
            "popularTestsTop5": "🔥 人気のテスト Top 5"
        }
    },
    "zh-CN": {
        "startMessage": {
            "line1": "你的大脑和手指连接好了吗？",
            "line2": "从看到、大脑认知到手指移动的时间。普通人的平均反应速度约为0.25秒（250ms）。",
            "line3": "觉得年纪大了反应变慢了吗？还是依然宝刀未老？",
            "line4": "现在为你测量“真实”的速度。",
            "line5": "开始反应速度测量 ⚡"
        },
        "shareMessages": {
            "default": "我的平均反应速度是{record}ms！等级是{type} ⚡ 你能赢我吗？",
            "kakao": "我的平均反应速度是{record}ms！等级是{type} ⚡ 你能赢我吗？",
            "line": "我的平均反应速度是{record}ms！等级是{type} ⚡ 你能赢我吗？",
            "wechat": "我的平均反应速度是{record}ms！等级是{type} ⚡ 你能赢我吗？",
            "whatsapp": "我的平均反应速度是{record}ms！等级是{type} ⚡ 你能赢我吗？",
            "telegram": "我的平均反应速度是{record}ms！等级是{type} ⚡ 你能赢我吗？",
            "startDefault": "0.1秒的胜负！反应速度测试 ⚡ 你是哪个等级？",
            "startKakao": "0.1秒的胜负！反应速度测试 ⚡ 你是哪个等级？",
            "startLine": "0.1秒的胜负！反应速度测试 ⚡ 你是哪个等级？",
            "startWechat": "0.1秒的胜负！反应速度测试 ⚡ 你是哪个等级？",
            "startWhatsapp": "0.1秒的胜负！反应速度测试 ⚡ 你是哪个等级？",
            "startTelegram": "0.1秒的胜负！反应速度测试 ⚡ 你是哪个等级？"
        },
        "ui": {
            "title": "0.1秒的胜负！反应速度测试",
            "startTest": "开始测试",
            "retry": "再次测量",
            "adsenseTitle": "广告",
            "goToTest": "去测试",
            "similarTests": "类似测试",
            "linkCopy": "复制链接",
            "kakao": "Kakao分享",
            "telegram": "Telegram分享",
            "wechat": "微信分享",
            "line": "Line分享",
            "whatsapp": "WhatsApp分享",
            "shareResult": "分享结果",
            "survivalInstinct": "📊 你的速度",
            "recommendation": "⭐ 推荐职业",
            "otherTests": "查看其他测试"
        },
        "game": {
            "wait": "等待...",
            "waitDesc": "变绿时点击",
            "click": "点击!!!",
            "tooSoon": "太快了！",
            "clickToRetry": "点击重试",
            "clickToContinue": "点击继续"
        },
        "alerts": {
            "linkCopied": "链接已复制！",
            "shareFailed": "无法使用分享功能。",
            "wechatCopy": "链接已复制。请粘贴到微信分享。"
        },
        "recommendations": {
            "similarTestsTop5": "🎯 推荐的前5个类似测试",
            "popularTestsTop5": "🔥 推荐的前5个热门测试"
        }
    },
    "zh-TW": {
        "startMessage": {
            "line1": "你的大腦和手指連接好了嗎？",
            "line2": "從看到、大腦認知到手指移動的時間。普通人的平均反應速度約為0.25秒（250ms）。",
            "line3": "覺得年紀大了反應變慢了嗎？還是依然寶刀未老？",
            "line4": "現在為你測量「真實」的速度。",
            "line5": "開始反應速度測量 ⚡"
        },
        "shareMessages": {
            "default": "我的平均反應速度是{record}ms！等級是{type} ⚡ 你能贏我嗎？",
            "kakao": "我的平均反應速度是{record}ms！等級是{type} ⚡ 你能贏我嗎？",
            "line": "我的平均反應速度是{record}ms！等級是{type} ⚡ 你能贏我嗎？",
            "wechat": "我的平均反應速度是{record}ms！等級是{type} ⚡ 你能贏我嗎？",
            "whatsapp": "我的平均反應速度是{record}ms！等級是{type} ⚡ 你能贏我嗎？",
            "telegram": "我的平均反應速度是{record}ms！等級是{type} ⚡ 你能贏我嗎？",
            "startDefault": "0.1秒的勝負！反應速度測試 ⚡ 你是哪個等級？",
            "startKakao": "0.1秒的勝負！反應速度測試 ⚡ 你是哪個等級？",
            "startLine": "0.1秒的勝負！反應速度測試 ⚡ 你是哪個等級？",
            "startWechat": "0.1秒的勝負！反應速度測試 ⚡ 你是哪個等級？",
            "startWhatsapp": "0.1秒的勝負！反應速度測試 ⚡ 你是哪個等級？",
            "startTelegram": "0.1秒的勝負！反應速度測試 ⚡ 你是哪個等級？"
        },
        "ui": {
            "title": "0.1秒的勝負！反應速度測試",
            "startTest": "開始測試",
            "retry": "再次測量",
            "adsenseTitle": "廣告",
            "goToTest": "去測試",
            "similarTests": "類似測試",
            "linkCopy": "複製連結",
            "kakao": "Kakao分享",
            "telegram": "Telegram分享",
            "wechat": "微信分享",
            "line": "Line分享",
            "whatsapp": "WhatsApp分享",
            "shareResult": "分享結果",
            "survivalInstinct": "📊 你的速度",
            "recommendation": "⭐ 推薦職業",
            "otherTests": "查看其他測試"
        },
        "game": {
            "wait": "等待...",
            "waitDesc": "變綠時點擊",
            "click": "點擊!!!",
            "tooSoon": "太快了！",
            "clickToRetry": "點擊重試",
            "clickToContinue": "點擊繼續"
        },
        "alerts": {
            "linkCopied": "連結已複製！",
            "shareFailed": "無法使用分享功能。",
            "wechatCopy": "連結已複製。請貼上到微信分享。"
        },
        "recommendations": {
            "similarTestsTop5": "🎯 推薦的前5個類似測試",
            "popularTestsTop5": "🔥 推薦的前5個熱門測試"
        }
    },
    "vi": {
        "startMessage": {
            "line1": "Bộ não và ngón tay của bạn có được kết nối không?",
            "line2": "Thời gian để nhìn, nhận thức và di chuyển ngón tay. Tốc độ phản ứng trung bình là khoảng 0.25 giây (250ms).",
            "line3": "Bạn có cảm thấy chậm hơn theo tuổi tác không? Hay bạn vẫn còn sung sức?",
            "line4": "Chúng tôi sẽ đo tốc độ 'thực' của bạn ngay bây giờ.",
            "line5": "Bắt đầu đo tốc độ phản ứng ⚡"
        },
        "shareMessages": {
            "default": "Tốc độ phản ứng trung bình của tôi là {record}ms! Hạng: {type} ⚡ Bạn có thắng được tôi không?",
            "kakao": "Tốc độ phản ứng trung bình của tôi là {record}ms! Hạng: {type} ⚡ Bạn có thắng được tôi không?",
            "line": "Tốc độ phản ứng trung bình của tôi là {record}ms! Hạng: {type} ⚡ Bạn có thắng được tôi không?",
            "wechat": "Tốc độ phản ứng trung bình của tôi là {record}ms! Hạng: {type} ⚡ Bạn có thắng được tôi không?",
            "whatsapp": "Tốc độ phản ứng trung bình của tôi là {record}ms! Hạng: {type} ⚡ Bạn có thắng được tôi không?",
            "telegram": "Tốc độ phản ứng trung bình của tôi là {record}ms! Hạng: {type} ⚡ Bạn có thắng được tôi không?",
            "startDefault": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng ⚡ Bạn hạng mấy?",
            "startKakao": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng ⚡ Bạn hạng mấy?",
            "startLine": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng ⚡ Bạn hạng mấy?",
            "startWechat": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng ⚡ Bạn hạng mấy?",
            "startWhatsapp": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng ⚡ Bạn hạng mấy?",
            "startTelegram": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng ⚡ Bạn hạng mấy?"
        },
        "ui": {
            "title": "Quyết đấu 0.1 giây! Kiểm tra tốc độ phản ứng",
            "startTest": "Bắt đầu kiểm tra",
            "retry": "Đo lại",
            "adsenseTitle": "Quảng cáo",
            "goToTest": "Đi tới bài kiểm tra",
            "similarTests": "Bài kiểm tra tương tự",
            "linkCopy": "Sao chép liên kết",
            "kakao": "Chia sẻ Kakao",
            "telegram": "Chia sẻ Telegram",
            "wechat": "Chia sẻ WeChat",
            "line": "Chia sẻ Line",
            "whatsapp": "Chia sẻ WhatsApp",
            "shareResult": "Chia sẻ kết quả",
            "survivalInstinct": "📊 Tốc độ của bạn",
            "recommendation": "⭐ Nghề nghiệp đề xuất",
            "otherTests": "Xem bài kiểm tra khác"
        },
        "game": {
            "wait": "Chờ đã...",
            "waitDesc": "Nhấn khi chuyển sang màu xanh",
            "click": "NHẤN!!!",
            "tooSoon": "Quá sớm!",
            "clickToRetry": "Nhấn để thử lại",
            "clickToContinue": "Nhấn để tiếp tục"
        },
        "alerts": {
            "linkCopied": "Đã sao chép liên kết!",
            "shareFailed": "Không thể chia sẻ.",
            "wechatCopy": "Liên kết đã sao chép. Dán vào WeChat để chia sẻ."
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 bài kiểm tra tương tự",
            "popularTestsTop5": "🔥 Top 5 bài kiểm tra phổ biến"
        }
    },
    "id": {
        "startMessage": {
            "line1": "Apakah otak dan jari Anda terhubung?",
            "line2": "Waktu untuk melihat, memproses, dan bergerak. Kecepatan reaksi rata-rata adalah sekitar 0,25 detik (250 md).",
            "line3": "Apakah Anda merasa lebih lambat seiring bertambahnya usia? Atau apakah Anda masih memiliki fisik yang prima?",
            "line4": "Kami akan mengukur kecepatan 'nyata' Anda sekarang.",
            "line5": "Mulai Tes Kecepatan Reaksi ⚡"
        },
        "shareMessages": {
            "default": "Kecepatan reaksi rata-rata saya adalah {record}ms! Peringkat: {type} ⚡ Bisakah kamu mengalahkan saya?",
            "kakao": "Kecepatan reaksi rata-rata saya adalah {record}ms! Peringkat: {type} ⚡ Bisakah kamu mengalahkan saya?",
            "line": "Kecepatan reaksi rata-rata saya adalah {record}ms! Peringkat: {type} ⚡ Bisakah kamu mengalahkan saya?",
            "wechat": "Kecepatan reaksi rata-rata saya adalah {record}ms! Peringkat: {type} ⚡ Bisakah kamu mengalahkan saya?",
            "whatsapp": "Kecepatan reaksi rata-rata saya adalah {record}ms! Peringkat: {type} ⚡ Bisakah kamu mengalahkan saya?",
            "telegram": "Kecepatan reaksi rata-rata saya adalah {record}ms! Peringkat: {type} ⚡ Bisakah kamu mengalahkan saya?",
            "startDefault": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi ⚡ Apa peringkat Anda?",
            "startKakao": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi ⚡ Apa peringkat Anda?",
            "startLine": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi ⚡ Apa peringkat Anda?",
            "startWechat": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi ⚡ Apa peringkat Anda?",
            "startWhatsapp": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi ⚡ Apa peringkat Anda?",
            "startTelegram": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi ⚡ Apa peringkat Anda?"
        },
        "ui": {
            "title": "Pertarungan 0,1 Detik! Tes Kecepatan Reaksi",
            "startTest": "Mulai Tes",
            "retry": "Coba Lagi",
            "adsenseTitle": "Iklan",
            "goToTest": "Pergi ke Tes",
            "similarTests": "Tes Serupa",
            "linkCopy": "Salin Tautan",
            "kakao": "Bagikan Kakao",
            "telegram": "Bagikan Telegram",
            "wechat": "Bagikan WeChat",
            "line": "Bagikan Line",
            "whatsapp": "Bagikan WhatsApp",
            "shareResult": "Bagikan Hasil",
            "survivalInstinct": "📊 Kecepatan Anda",
            "recommendation": "⭐ Pekerjaan yang Direkomendasikan",
            "otherTests": "Lihat Tes Lainnya"
        },
        "game": {
            "wait": "Tunggu...",
            "waitDesc": "Klik saat hijau",
            "click": "KLIK!!!",
            "tooSoon": "Terlalu Cepat!",
            "clickToRetry": "Klik untuk mencoba lagi",
            "clickToContinue": "Klik untuk melanjutkan"
        },
        "alerts": {
            "linkCopied": "Tautan disalin!",
            "shareFailed": "Fitur berbagi tidak tersedia.",
            "wechatCopy": "Tautan disalin. Tempel di WeChat untuk berbagi."
        },
        "recommendations": {
            "similarTestsTop5": "🎯 5 Rekomendasi Tes Serupa Teratas",
            "popularTestsTop5": "🔥 5 Rekomendasi Tes Populer Teratas"
        }
    }
}

messages_dir = "messages"
files = {
    "ko": "ko.json",
    "en": "en.json",
    "ja": "ja.json",
    "zh-CN": "zh-CN.json",
    "zh-TW": "zh-TW.json",
    "vi": "vi.json",
    "id": "id.json"
}

key_mapping = {
    "ko": "ko", "en": "en", "ja": "ja", "zh-CN": "zh-CN", "zh-TW": "zh-TW", "vi": "vi", "id": "id"
}

for lang_code, filename in files.items():
    file_path = os.path.join(messages_dir, filename)
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            
        trans_key = key_mapping.get(lang_code)
        if trans_key in translations:
            data['phase2ReflexTest'] = translations[trans_key]
            print(f"Added phase2ReflexTest translations for {lang_code}")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
                
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Translation update complete.")

