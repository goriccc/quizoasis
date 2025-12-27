import json
import os

# Translation Data
translations = {
    "ko": {
        "startMessage": {
            "line1": "당신의 눈은 얼마나 오랫동안 버틸 수 있나요?",
            "line2": "단 10초! 당신에게 주어진 초기 시간은 매우 짧습니다.",
            "line3": "하지만 걱정 마세요. 정답을 찾을 때마다 생명(시간)이 연장됩니다.",
            "line4": "빠르고 정확하게 다른 색깔을 찾아내어 죽어가는 타이머를 살려내세요!",
            "line5": "오래 버티는 자가 승리합니다. 생존 게임 시작 ⏳"
        },
        "shareMessages": {
            "default": "내 생존 레벨은 {type}! ⏳ 정답 맞히면 시간 늘어남! 너 몇 단계까지 감?",
            "kakao": "내 생존 레벨은 {type}! ⏳ 정답 맞히면 시간 늘어남! 너 몇 단계까지 감?",
            "line": "내 생존 레벨은 {type}! ⏳ 정답 맞히면 시간 늘어남! 너 몇 단계까지 감?",
            "wechat": "내 생존 레벨은 {type}! ⏳ 정답 맞히면 시간 늘어남! 너 몇 단계까지 감?",
            "whatsapp": "내 생존 레벨은 {type}! ⏳ 정답 맞히면 시간 늘어남! 너 몇 단계까지 감?",
            "telegram": "내 생존 레벨은 {type}! ⏳ 정답 맞히면 시간 늘어남! 너 몇 단계까지 감?",
            "startDefault": "신의 눈 절대색감 챌린지! 당신의 눈은 얼마나 정확한가요? 도전해보세요!",
            "startKakao": "신의 눈 절대색감 챌린지! 당신의 눈은 얼마나 정확한가요? 도전해보세요!",
            "startLine": "신의 눈 절대색감 챌린지! 당신의 눈은 얼마나 정확한가요? 도전해보세요!",
            "startWechat": "신의 눈 절대색감 챌린지! 당신의 눈은 얼마나 정확한가요? 도전해보세요!",
            "startWhatsapp": "신의 눈 절대색감 챌린지! 당신의 눈은 얼마나 정확한가요? 도전해보세요!",
            "startTelegram": "신의 눈 절대색감 챌린지! 당신의 눈은 얼마나 정확한가요? 도전해보세요!"
        },
        "ui": {
            "title": "'신의 눈' 절대색감 챌린지",
            "startTest": "게임 시작",
            "retry": "다시 도전하기",
            "gameInstruction": "다른 색깔의 사각형을 찾아서 터치하세요!",
            "advice": "생존 팁",
            "adsenseTitle": "광고",
            "goToTest": "테스트 하러 가기",
            "similarTests": "유사한 테스트",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡 공유",
            "telegram": "텔레그램 공유",
            "wechat": "위챗 공유",
            "line": "라인 공유",
            "whatsapp": "왓츠앱 공유",
            "shareResult": "결과 공유하기"
        },
        "alerts": {
            "linkCopied": "링크가 복사되었습니다!",
            "kakaoInit": "카카오톡 초기화 중입니다.",
            "wechatCopy": "링크가 복사되었습니다. 위챗에 붙여넣어 공유하세요."
        },
        "recommendations": {
            "similarTestsTop5": "🎯 유사한 다른 테스트 추천 Top 5",
            "popularTestsTop5": "🔥 요즘 인기 테스트 추천 Top 5"
        }
    },
    "en": {
        "startMessage": {
            "line1": "How long can your eyes survive?",
            "line2": "Only 10 seconds! Your initial time is very short.",
            "line3": "But don't worry. Every correct answer extends your life (time).",
            "line4": "Find the different color quickly and accurately to save the dying timer!",
            "line5": "The one who lasts long wins. Survival Game Start ⏳"
        },
        "shareMessages": {
            "default": "My survival level is {type}! ⏳ Correct answers add time! How far can you go?",
            "kakao": "My survival level is {type}! ⏳ Correct answers add time! How far can you go?",
            "line": "My survival level is {type}! ⏳ Correct answers add time! How far can you go?",
            "wechat": "My survival level is {type}! ⏳ Correct answers add time! How far can you go?",
            "whatsapp": "My survival level is {type}! ⏳ Correct answers add time! How far can you go?",
            "telegram": "My survival level is {type}! ⏳ Correct answers add time! How far can you go?",
            "startDefault": "God's Eye Absolute Color Challenge! How accurate are your eyes? Try it!",
            "startKakao": "God's Eye Absolute Color Challenge! How accurate are your eyes? Try it!",
            "startLine": "God's Eye Absolute Color Challenge! How accurate are your eyes? Try it!",
            "startWechat": "God's Eye Absolute Color Challenge! How accurate are your eyes? Try it!",
            "startWhatsapp": "God's Eye Absolute Color Challenge! How accurate are your eyes? Try it!",
            "startTelegram": "God's Eye Absolute Color Challenge! How accurate are your eyes? Try it!"
        },
        "ui": {
            "title": "'God's Eye' Color Challenge",
            "startTest": "Start Game",
            "retry": "Try Again",
            "gameInstruction": "Find and touch the different colored square!",
            "advice": "Survival Tip",
            "adsenseTitle": "Advertisement",
            "goToTest": "Go to Test",
            "similarTests": "Similar Tests",
            "linkCopy": "Copy Link",
            "kakao": "Kakao Share",
            "telegram": "Telegram Share",
            "wechat": "WeChat Share",
            "line": "Line Share",
            "whatsapp": "WhatsApp Share",
            "shareResult": "Share Result"
        },
        "alerts": {
            "linkCopied": "Link copied!",
            "kakaoInit": "Initializing KakaoTalk...",
            "wechatCopy": "Link copied. Paste in WeChat to share."
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 Similar Test Recommendations",
            "popularTestsTop5": "🔥 Top 5 Popular Test Recommendations"
        }
    },
    "ja": {
        "startMessage": {
            "line1": "あなたの目はどれくらい持ちこたえられますか？",
            "line2": "たった10秒！与えられた初期時間は非常に短いです。",
            "line3": "でも心配しないでください。正解するたびに命（時間）が延びます。",
            "line4": "素早く正確に違う色を見つけて、消えゆくタイマーを救ってください！",
            "line5": "長く生き残った者が勝者です。サバイバルゲーム開始 ⏳"
        },
        "shareMessages": {
            "default": "私の生存レベルは{type}！⏳ 正解すると時間が増える！どこまで行ける？",
            "kakao": "私の生存レベルは{type}！⏳ 正解すると時間が増える！どこまで行ける？",
            "line": "私の生存レベルは{type}！⏳ 正解すると時間が増える！どこまで行ける？",
            "wechat": "私の生存レベルは{type}！⏳ 正解すると時間が増える！どこまで行ける？",
            "whatsapp": "私の生存レベルは{type}！⏳ 正解すると時間が増える！どこまで行ける？",
            "telegram": "私の生存レベルは{type}！⏳ 正解すると時間が増える！どこまで行ける？",
            "startDefault": "神の目・絶対色感チャレンジ！あなたの目はどれくらい正確？挑戦してみて！",
            "startKakao": "神の目・絶対色感チャレンジ！あなたの目はどれくらい正確？挑戦してみて！",
            "startLine": "神の目・絶対色感チャレンジ！あなたの目はどれくらい正確？挑戦してみて！",
            "startWechat": "神の目・絶対色感チャレンジ！あなたの目はどれくらい正確？挑戦してみて！",
            "startWhatsapp": "神の目・絶対色感チャレンジ！あなたの目はどれくらい正確？挑戦してみて！",
            "startTelegram": "神の目・絶対色感チャレンジ！あなたの目はどれくらい正確？挑戦してみて！"
        },
        "ui": {
            "title": "「神の目」絶対色感チャレンジ",
            "startTest": "ゲーム開始",
            "retry": "もう一度挑戦",
            "gameInstruction": "違う色の四角を見つけてタッチしてください！",
            "advice": "生存のヒント",
            "adsenseTitle": "広告",
            "goToTest": "テストに行く",
            "similarTests": "似ているテスト",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク共有",
            "telegram": "Telegram共有",
            "wechat": "WeChat共有",
            "line": "LINE共有",
            "whatsapp": "WhatsApp共有",
            "shareResult": "結果を共有"
        },
        "alerts": {
            "linkCopied": "リンクがコピーされました！",
            "kakaoInit": "カカオトーク初期化中...",
            "wechatCopy": "リンクがコピーされました。WeChatに貼り付けて共有してください。"
        },
        "recommendations": {
            "similarTestsTop5": "🎯 おすすめの類似テスト Top 5",
            "popularTestsTop5": "🔥 最近人気のテスト Top 5"
        }
    },
    "zh": {
        "startMessage": {
            "line1": "你的眼睛能坚持多久？",
            "line2": "只有10秒！给你的初始时间非常短。",
            "line3": "但别担心。每找到一个正确答案，生命（时间）就会延长。",
            "line4": "快速准确地找出不同的颜色，拯救即将耗尽的计时器！",
            "line5": "坚持到最后的人就是赢家。生存游戏开始 ⏳"
        },
        "shareMessages": {
            "default": "我的生存等级是{type}！⏳ 答对加时间！你能到第几关？",
            "kakao": "我的生存等级是{type}！⏳ 答对加时间！你能到第几关？",
            "line": "我的生存等级是{type}！⏳ 答对加时间！你能到第几关？",
            "wechat": "我的生存等级是{type}！⏳ 答对加时间！你能到第几关？",
            "whatsapp": "我的生存等级是{type}！⏳ 答对加时间！你能到第几关？",
            "telegram": "我的生存等级是{type}！⏳ 答对加时间！你能到第几关？",
            "startDefault": "神之眼绝对色感挑战！你的眼睛有多准？快来挑战！",
            "startKakao": "神之眼绝对色感挑战！你的眼睛有多准？快来挑战！",
            "startLine": "神之眼绝对色感挑战！你的眼睛有多准？快来挑战！",
            "startWechat": "神之眼绝对色感挑战！你的眼睛有多准？快来挑战！",
            "startWhatsapp": "神之眼绝对色感挑战！你的眼睛有多准？快来挑战！",
            "startTelegram": "神之眼绝对色感挑战！你的眼睛有多准？快来挑战！"
        },
        "ui": {
            "title": "“神之眼”绝对色感挑战",
            "startTest": "开始游戏",
            "retry": "再次挑战",
            "gameInstruction": "找出并点击颜色不同的方块！",
            "advice": "生存技巧",
            "adsenseTitle": "广告",
            "goToTest": "去测试",
            "similarTests": "类似测试",
            "linkCopy": "复制链接",
            "kakao": "Kakao分享",
            "telegram": "Telegram分享",
            "wechat": "微信分享",
            "line": "Line分享",
            "whatsapp": "WhatsApp分享",
            "shareResult": "分享结果"
        },
        "alerts": {
            "linkCopied": "链接已复制！",
            "kakaoInit": "KakaoTalk初始化中...",
            "wechatCopy": "链接已复制。请粘贴到微信分享。"
        },
        "recommendations": {
            "similarTestsTop5": "🎯 推荐的前5个类似测试",
            "popularTestsTop5": "🔥 推荐的前5个热门测试"
        }
    },
    "zh-TW": {
        "startMessage": {
            "line1": "你的眼睛能堅持多久？",
            "line2": "只有10秒！給你的初始時間非常短。",
            "line3": "但別擔心。每找到一個正確答案，生命（時間）就會延長。",
            "line4": "快速準確地找出不同的顏色，拯救即將耗盡的計時器！",
            "line5": "堅持到最後的人就是贏家。生存遊戲開始 ⏳"
        },
        "shareMessages": {
            "default": "我的生存等級是{type}！⏳ 答對加時間！你能到第幾關？",
            "kakao": "我的生存等級是{type}！⏳ 答對加時間！你能到第幾關？",
            "line": "我的生存等級是{type}！⏳ 答對加時間！你能到第幾關？",
            "wechat": "我的生存等級是{type}！⏳ 答對加時間！你能到第幾關？",
            "whatsapp": "我的生存等級是{type}！⏳ 答對加時間！你能到第幾關？",
            "telegram": "我的生存等級是{type}！⏳ 答對加時間！你能到第幾關？",
            "startDefault": "神之眼絕對色感挑戰！你的眼睛有多準？快來挑戰！",
            "startKakao": "神之眼絕對色感挑戰！你的眼睛有多準？快來挑戰！",
            "startLine": "神之眼絕對色感挑戰！你的眼睛有多準？快來挑戰！",
            "startWechat": "神之眼絕對色感挑戰！你的眼睛有多準？快來挑戰！",
            "startWhatsapp": "神之眼絕對色感挑戰！你的眼睛有多準？快來挑戰！",
            "startTelegram": "神之眼絕對色感挑戰！你的眼睛有多準？快來挑戰！"
        },
        "ui": {
            "title": "“神之眼”絕對色感挑戰",
            "startTest": "開始遊戲",
            "retry": "再次挑戰",
            "gameInstruction": "找出並點擊顏色不同的方塊！",
            "advice": "生存技巧",
            "adsenseTitle": "廣告",
            "goToTest": "去測試",
            "similarTests": "類似測試",
            "linkCopy": "複製鏈接",
            "kakao": "Kakao分享",
            "telegram": "Telegram分享",
            "wechat": "微信分享",
            "line": "Line分享",
            "whatsapp": "WhatsApp分享",
            "shareResult": "分享結果"
        },
        "alerts": {
            "linkCopied": "鏈接已複製！",
            "kakaoInit": "KakaoTalk初始化中...",
            "wechatCopy": "鏈接已複製。請粘貼到微信分享。"
        },
        "recommendations": {
            "similarTestsTop5": "🎯 推薦的前5個類似測試",
            "popularTestsTop5": "🔥 推薦的前5個熱門測試"
        }
    },
    "vi": {
        "startMessage": {
            "line1": "Mắt bạn có thể chịu đựng được bao lâu?",
            "line2": "Chỉ 10 giây! Thời gian ban đầu của bạn rất ngắn.",
            "line3": "Nhưng đừng lo. Mỗi câu trả lời đúng sẽ kéo dài sự sống (thời gian).",
            "line4": "Tìm màu khác biệt nhanh và chính xác để cứu đồng hồ đang chết dần!",
            "line5": "Người trụ lại lâu nhất sẽ chiến thắng. Bắt đầu trò chơi sinh tồn ⏳"
        },
        "shareMessages": {
            "default": "Cấp độ sinh tồn của tôi là {type}! ⏳ Trả lời đúng được thêm giờ! Bạn đi được bao xa?",
            "kakao": "Cấp độ sinh tồn của tôi là {type}! ⏳ Trả lời đúng được thêm giờ! Bạn đi được bao xa?",
            "line": "Cấp độ sinh tồn của tôi là {type}! ⏳ Trả lời đúng được thêm giờ! Bạn đi được bao xa?",
            "wechat": "Cấp độ sinh tồn của tôi là {type}! ⏳ Trả lời đúng được thêm giờ! Bạn đi được bao xa?",
            "whatsapp": "Cấp độ sinh tồn của tôi là {type}! ⏳ Trả lời đúng được thêm giờ! Bạn đi được bao xa?",
            "telegram": "Cấp độ sinh tồn của tôi là {type}! ⏳ Trả lời đúng được thêm giờ! Bạn đi được bao xa?",
            "startDefault": "Thử thách Màu sắc Tuyệt đối Mắt Thần! Mắt bạn chính xác đến đâu?",
            "startKakao": "Thử thách Màu sắc Tuyệt đối Mắt Thần! Mắt bạn chính xác đến đâu?",
            "startLine": "Thử thách Màu sắc Tuyệt đối Mắt Thần! Mắt bạn chính xác đến đâu?",
            "startWechat": "Thử thách Màu sắc Tuyệt đối Mắt Thần! Mắt bạn chính xác đến đâu?",
            "startWhatsapp": "Thử thách Màu sắc Tuyệt đối Mắt Thần! Mắt bạn chính xác đến đâu?",
            "startTelegram": "Thử thách Màu sắc Tuyệt đối Mắt Thần! Mắt bạn chính xác đến đâu?"
        },
        "ui": {
            "title": "Thử thách Màu sắc 'Mắt Thần'",
            "startTest": "Bắt đầu trò chơi",
            "retry": "Thử lại",
            "gameInstruction": "Tìm và chạm vào ô vuông có màu khác!",
            "advice": "Mẹo sinh tồn",
            "adsenseTitle": "Quảng cáo",
            "goToTest": "Đi đến bài kiểm tra",
            "similarTests": "Các bài kiểm tra tương tự",
            "linkCopy": "Sao chép liên kết",
            "kakao": "Chia sẻ Kakao",
            "telegram": "Chia sẻ Telegram",
            "wechat": "Chia sẻ WeChat",
            "line": "Chia sẻ Line",
            "whatsapp": "Chia sẻ WhatsApp",
            "shareResult": "Chia sẻ kết quả"
        },
        "alerts": {
            "linkCopied": "Đã sao chép liên kết!",
            "kakaoInit": "Đang khởi tạo KakaoTalk...",
            "wechatCopy": "Đã sao chép liên kết. Dán vào WeChat để chia sẻ."
        },
        "recommendations": {
            "similarTestsTop5": "🎯 Top 5 bài kiểm tra tương tự được đề xuất",
            "popularTestsTop5": "🔥 Top 5 bài kiểm tra phổ biến được đề xuất"
        }
    },
    "id": {
        "startMessage": {
            "line1": "Seberapa lama mata Anda bisa bertahan?",
            "line2": "Hanya 10 detik! Waktu awal Anda sangat singkat.",
            "line3": "Tapi jangan khawatir. Setiap jawaban benar memperpanjang hidup (waktu).",
            "line4": "Temukan warna yang berbeda dengan cepat dan akurat untuk menyelamatkan pengatur waktu!",
            "line5": "Yang bertahan lama yang menang. Game Survival Dimulai ⏳"
        },
        "shareMessages": {
            "default": "Level survival saya adalah {type}! ⏳ Jawaban benar tambah waktu! Seberapa jauh kamu bisa pergi?",
            "kakao": "Level survival saya adalah {type}! ⏳ Jawaban benar tambah waktu! Seberapa jauh kamu bisa pergi?",
            "line": "Level survival saya adalah {type}! ⏳ Jawaban benar tambah waktu! Seberapa jauh kamu bisa pergi?",
            "wechat": "Level survival saya adalah {type}! ⏳ Jawaban benar tambah waktu! Seberapa jauh kamu bisa pergi?",
            "whatsapp": "Level survival saya adalah {type}! ⏳ Jawaban benar tambah waktu! Seberapa jauh kamu bisa pergi?",
            "telegram": "Level survival saya adalah {type}! ⏳ Jawaban benar tambah waktu! Seberapa jauh kamu bisa pergi?",
            "startDefault": "Tantangan Warna Mutlak Mata Dewa! Seberapa akurat mata Anda?",
            "startKakao": "Tantangan Warna Mutlak Mata Dewa! Seberapa akurat mata Anda?",
            "startLine": "Tantangan Warna Mutlak Mata Dewa! Seberapa akurat mata Anda?",
            "startWechat": "Tantangan Warna Mutlak Mata Dewa! Seberapa akurat mata Anda?",
            "startWhatsapp": "Tantangan Warna Mutlak Mata Dewa! Seberapa akurat mata Anda?",
            "startTelegram": "Tantangan Warna Mutlak Mata Dewa! Seberapa akurat mata Anda?"
        },
        "ui": {
            "title": "Tantangan Warna 'Mata Dewa'",
            "startTest": "Mulai Game",
            "retry": "Coba Lagi",
            "gameInstruction": "Temukan dan sentuh kotak dengan warna berbeda!",
            "advice": "Tips Survival",
            "adsenseTitle": "Iklan",
            "goToTest": "Pergi ke Tes",
            "similarTests": "Tes Serupa",
            "linkCopy": "Salin Tautan",
            "kakao": "Bagikan Kakao",
            "telegram": "Bagikan Telegram",
            "wechat": "Bagikan WeChat",
            "line": "Bagikan Line",
            "whatsapp": "Bagikan WhatsApp",
            "shareResult": "Bagikan Hasil"
        },
        "alerts": {
            "linkCopied": "Tautan disalin!",
            "kakaoInit": "Menginisialisasi KakaoTalk...",
            "wechatCopy": "Tautan disalin. Tempel di WeChat untuk membagikan."
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

# Mapping script key to file key
key_mapping = {
    "ko": "ko",
    "en": "en",
    "ja": "ja",
    "zh-CN": "zh",
    "zh-TW": "zh-TW",
    "vi": "vi",
    "id": "id"
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
        if trans_key and trans_key in translations:
            data["phase2ColorSurvivalTest"] = translations[trans_key]
            print(f"Added translations for {lang_code}")
            
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
                
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Translation update complete.")

