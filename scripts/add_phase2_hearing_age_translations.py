#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os

# Translation data for all 7 languages
translations = {
    "ko": {
        "startMessage": {
            "line1": "당신은 '모기 벨소리'를 들을 수 있나요?",
            "line2": "사람의 청력은 20대 중반부터 노화가 시작되어 점점 고음(높은 주파수)을 듣지 못하게 됩니다.",
            "line3": "10대에게는 소음처럼 들리는 소리가 40대에게는 아무 소리도 안 나는 침묵일 수 있죠.",
            "line4": "지금 스피커 볼륨을 50% 이상으로 높이고 내 귀의 신체 나이를 측정해 보세요.",
            "line5": "※ 이어폰/헤드폰 착용을 권장합니다.",
            "line6": "측정 시작하기 🎧"
        },
        "game": {
            "volumeCheck": "이 소리가 잘 들리나요?",
            "volumeCheckDesc": "볼륨을 확인하고 [확인] 버튼을 눌러주세요",
            "listen": "{frequency}Hz 소리를 들어보세요",
            "listenDesc": "들리면 [들려요] 안들리면 [안들려요]를 선택하세요",
            "confirm": "확인",
            "canHear": "들려요",
            "cannotHear": "안들려요",
            "replay": "다시 듣기",
            "step": "단계"
        },
        "ui": {
            "hearingAge": "📊 당신의 청력",
            "recommendation": "⭐ 추천",
            "shareResult": "결과 공유하기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "adsenseTitle": "광고",
            "similarTests": "유사한 다른 테스트",
            "goToTest": "테스트 하기"
        },
        "alerts": {
            "linkCopied": "링크가 복사되었습니다!",
            "kakaoInit": "카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.",
            "wechatCopy": "링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요."
        },
        "shareMessages": {
            "default": "내 귀 나이는 {age}! 🎧 19,000Hz 들리는 사람 있음? 이거 들리면 10대 인정.",
            "startDefault": "내 귀 나이는 몇 살? 가청 주파수 테스트 🎧",
            "startKakao": "내 귀 나이는 몇 살? 가청 주파수 테스트 🎧",
            "startWechat": "내 귀 나이는 몇 살? 가청 주파수 테스트 🎧",
            "startWhatsapp": "내 귀 나이는 몇 살? 가청 주파수 테스트 🎧",
            "startTelegram": "내 귀 나이는 몇 살? 가청 주파수 테스트 🎧",
            "startLine": "내 귀 나이는 몇 살? 가청 주파수 테스트 🎧"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 요즘 인기 테스트 추천 톱5",
            "popularTestsTop5": "🔥 요즘 인기 테스트 추천 톱5"
        }
    },
    "en": {
        "startMessage": {
            "line1": "Can you hear the 'mosquito ringtone'?",
            "line2": "Human hearing begins to age from the mid-20s, gradually losing the ability to hear high frequencies.",
            "line3": "A sound that seems like noise to teenagers can be complete silence to people in their 40s.",
            "line4": "Turn up your speaker volume to at least 50% and measure your ear's biological age.",
            "line5": "※ Headphones/earphones are recommended.",
            "line6": "Start measurement 🎧"
        },
        "game": {
            "volumeCheck": "Can you hear this sound clearly?",
            "volumeCheckDesc": "Check your volume and press [Confirm]",
            "listen": "Listen to {frequency}Hz sound",
            "listenDesc": "Select [Can hear] if you hear it, [Cannot hear] if you don't",
            "confirm": "Confirm",
            "canHear": "Can hear",
            "cannotHear": "Cannot hear",
            "replay": "Replay",
            "step": "Step"
        },
        "ui": {
            "hearingAge": "📊 Your Hearing",
            "recommendation": "⭐ Recommendation",
            "shareResult": "Share Result",
            "linkCopy": "Copy Link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Advertisement",
            "similarTests": "Similar Tests",
            "goToTest": "Take Test"
        },
        "alerts": {
            "linkCopied": "Link copied!",
            "kakaoInit": "Initializing KakaoTalk share. Please try again in a moment.",
            "wechatCopy": "Link copied! Paste in WeChat to share."
        },
        "shareMessages": {
            "default": "My hearing age is {age}! 🎧 Anyone can hear 19,000Hz? If you can hear this, you're a teenager.",
            "startDefault": "How old are my ears? Audible frequency test 🎧",
            "startKakao": "How old are my ears? Audible frequency test 🎧",
            "startWechat": "How old are my ears? Audible frequency test 🎧",
            "startWhatsapp": "How old are my ears? Audible frequency test 🎧",
            "startTelegram": "How old are my ears? Audible frequency test 🎧",
            "startLine": "How old are my ears? Audible frequency test 🎧"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Top 5 Popular Tests",
            "popularTestsTop5": "🔥 Top 5 Popular Tests"
        }
    },
    "ja": {
        "startMessage": {
            "line1": "「蚊のベルの音」が聞こえますか？",
            "line2": "人間の聴力は20代半ばから老化が始まり、徐々に高音（高い周波数）が聞こえなくなります。",
            "line3": "10代には騒音のように聞こえる音が、40代には何も聞こえない静寂になることがあります。",
            "line4": "今すぐスピーカーの音量を50%以上に上げて、あなたの耳の年齢を測定してみてください。",
            "line5": "※ イヤホン/ヘッドホンの着用を推奨します。",
            "line6": "測定開始 🎧"
        },
        "game": {
            "volumeCheck": "この音がよく聞こえますか？",
            "volumeCheckDesc": "音量を確認して[確認]ボタンを押してください",
            "listen": "{frequency}Hzの音を聞いてください",
            "listenDesc": "聞こえる場合は[聞こえる]、聞こえない場合は[聞こえない]を選択してください",
            "confirm": "確認",
            "canHear": "聞こえる",
            "cannotHear": "聞こえない",
            "replay": "もう一度聞く",
            "step": "ステップ"
        },
        "ui": {
            "hearingAge": "📊 あなたの聴力",
            "recommendation": "⭐ おすすめ",
            "shareResult": "結果を共有",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "テレグラム",
            "wechat": "WeChat",
            "line": "ライン",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "広告",
            "similarTests": "類似のテスト",
            "goToTest": "テストを受ける"
        },
        "alerts": {
            "linkCopied": "リンクがコピーされました！",
            "kakaoInit": "カカオトーク共有機能を初期化中です。しばらくしてからもう一度お試しください。",
            "wechatCopy": "リンクがコピーされました！WeChatで貼り付けて共有してください。"
        },
        "shareMessages": {
            "default": "私の耳年齢は{age}！🎧 19,000Hzが聞こえる人はいますか？これが聞こえたら10代認定。",
            "startDefault": "私の耳年齢は何歳？可聴周波数テスト 🎧",
            "startKakao": "私の耳年齢は何歳？可聴周波数テスト 🎧",
            "startWechat": "私の耳年齢は何歳？可聴周波数テスト 🎧",
            "startWhatsapp": "私の耳年齢は何歳？可聴周波数テスト 🎧",
            "startTelegram": "私の耳年齢は何歳？可聴周波数テスト 🎧",
            "startLine": "私の耳年齢は何歳？可聴周波数テスト 🎧"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 最近人気のテスト トップ5",
            "popularTestsTop5": "🔥 最近人気のテスト トップ5"
        }
    },
    "zh-CN": {
        "startMessage": {
            "line1": "你能听到「蚊子铃声」吗？",
            "line2": "人的听力从20多岁中期开始老化，逐渐听不到高音（高频率）。",
            "line3": "对十几岁的人来说像噪音的声音，对40多岁的人来说可能完全是寂静。",
            "line4": "现在将扬声器音量调至50%以上，测量你的耳朵年龄。",
            "line5": "※ 建议使用耳机/头戴式耳机。",
            "line6": "开始测量 🎧"
        },
        "game": {
            "volumeCheck": "这个声音听清楚吗？",
            "volumeCheckDesc": "检查音量并按[确认]",
            "listen": "听{frequency}Hz的声音",
            "listenDesc": "听到选择[听得到]，听不到选择[听不到]",
            "confirm": "确认",
            "canHear": "听得到",
            "cannotHear": "听不到",
            "replay": "重新播放",
            "step": "步骤"
        },
        "ui": {
            "hearingAge": "📊 你的听力",
            "recommendation": "⭐ 推荐",
            "shareResult": "分享结果",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "广告",
            "similarTests": "类似测试",
            "goToTest": "开始测试"
        },
        "alerts": {
            "linkCopied": "链接已复制！",
            "kakaoInit": "正在初始化KakaoTalk分享功能。请稍后再试。",
            "wechatCopy": "链接已复制！请在微信中粘贴分享。"
        },
        "shareMessages": {
            "default": "我的耳朵年龄是{age}！🎧 有人能听到19,000Hz吗？如果听到这个，你就是十几岁。",
            "startDefault": "我的耳朵几岁？可听频率测试 🎧",
            "startKakao": "我的耳朵几岁？可听频率测试 🎧",
            "startWechat": "我的耳朵几岁？可听频率测试 🎧",
            "startWhatsapp": "我的耳朵几岁？可听频率测试 🎧",
            "startTelegram": "我的耳朵几岁？可听频率测试 🎧",
            "startLine": "我的耳朵几岁？可听频率测试 🎧"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 热门测试推荐 Top5",
            "popularTestsTop5": "🔥 热门测试推荐 Top5"
        }
    },
    "zh-TW": {
        "startMessage": {
            "line1": "你能聽到「蚊子鈴聲」嗎？",
            "line2": "人的聽力從20多歲中期開始老化，逐漸聽不到高音（高頻率）。",
            "line3": "對十幾歲的人來說像噪音的聲音，對40多歲的人來說可能完全是寂靜。",
            "line4": "現在將揚聲器音量調至50%以上，測量你的耳朵年齡。",
            "line5": "※ 建議使用耳機/頭戴式耳機。",
            "line6": "開始測量 🎧"
        },
        "game": {
            "volumeCheck": "這個聲音聽清楚嗎？",
            "volumeCheckDesc": "檢查音量並按[確認]",
            "listen": "聽{frequency}Hz的聲音",
            "listenDesc": "聽到選擇[聽得到]，聽不到選擇[聽不到]",
            "confirm": "確認",
            "canHear": "聽得到",
            "cannotHear": "聽不到",
            "replay": "重新播放",
            "step": "步驟"
        },
        "ui": {
            "hearingAge": "📊 你的聽力",
            "recommendation": "⭐ 推薦",
            "shareResult": "分享結果",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "廣告",
            "similarTests": "類似測試",
            "goToTest": "開始測試"
        },
        "alerts": {
            "linkCopied": "連結已複製！",
            "kakaoInit": "正在初始化KakaoTalk分享功能。請稍後再試。",
            "wechatCopy": "連結已複製！請在微信中貼上分享。"
        },
        "shareMessages": {
            "default": "我的耳朵年齡是{age}！🎧 有人能聽到19,000Hz嗎？如果聽到這個，你就是十幾歲。",
            "startDefault": "我的耳朵幾歲？可聽頻率測試 🎧",
            "startKakao": "我的耳朵幾歲？可聽頻率測試 🎧",
            "startWechat": "我的耳朵幾歲？可聽頻率測試 🎧",
            "startWhatsapp": "我的耳朵幾歲？可聽頻率測試 🎧",
            "startTelegram": "我的耳朵幾歲？可聽頻率測試 🎧",
            "startLine": "我的耳朵幾歲？可聽頻率測試 🎧"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 熱門測試推薦 Top5",
            "popularTestsTop5": "🔥 熱門測試推薦 Top5"
        }
    },
    "vi": {
        "startMessage": {
            "line1": "Bạn có nghe thấy 'chuông muỗi' không?",
            "line2": "Thính giác của con người bắt đầu lão hóa từ giữa độ tuổi 20, dần dần mất khả năng nghe tần số cao.",
            "line3": "Một âm thanh nghe như tiếng ồn đối với thanh thiếu niên có thể là sự im lặng hoàn toàn đối với những người ở độ tuổi 40.",
            "line4": "Bây giờ hãy tăng âm lượng loa lên ít nhất 50% và đo tuổi sinh học của tai bạn.",
            "line5": "※ Khuyến nghị sử dụng tai nghe/headphone.",
            "line6": "Bắt đầu đo lường 🎧"
        },
        "game": {
            "volumeCheck": "Bạn có nghe rõ âm thanh này không?",
            "volumeCheckDesc": "Kiểm tra âm lượng và nhấn [Xác nhận]",
            "listen": "Nghe âm thanh {frequency}Hz",
            "listenDesc": "Chọn [Nghe được] nếu bạn nghe thấy, [Không nghe được] nếu bạn không nghe thấy",
            "confirm": "Xác nhận",
            "canHear": "Nghe được",
            "cannotHear": "Không nghe được",
            "replay": "Nghe lại",
            "step": "Bước"
        },
        "ui": {
            "hearingAge": "📊 Thính giác của bạn",
            "recommendation": "⭐ Khuyến nghị",
            "shareResult": "Chia sẻ kết quả",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Quảng cáo",
            "similarTests": "Các bài kiểm tra tương tự",
            "goToTest": "Làm bài kiểm tra"
        },
        "alerts": {
            "linkCopied": "Đã sao chép liên kết!",
            "kakaoInit": "Đang khởi tạo tính năng chia sẻ KakaoTalk. Vui lòng thử lại sau.",
            "wechatCopy": "Đã sao chép liên kết! Hãy dán trong WeChat để chia sẻ."
        },
        "shareMessages": {
            "default": "Tuổi thính giác của tôi là {age}! 🎧 Ai có thể nghe 19,000Hz không? Nếu bạn nghe được điều này, bạn là thanh thiếu niên.",
            "startDefault": "Tai tôi bao nhiêu tuổi? Kiểm tra tần số nghe được 🎧",
            "startKakao": "Tai tôi bao nhiêu tuổi? Kiểm tra tần số nghe được 🎧",
            "startWechat": "Tai tôi bao nhiêu tuổi? Kiểm tra tần số nghe được 🎧",
            "startWhatsapp": "Tai tôi bao nhiêu tuổi? Kiểm tra tần số nghe được 🎧",
            "startTelegram": "Tai tôi bao nhiêu tuổi? Kiểm tra tần số nghe được 🎧",
            "startLine": "Tai tôi bao nhiêu tuổi? Kiểm tra tần số nghe được 🎧"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Top 5 Bài kiểm tra Phổ biến",
            "popularTestsTop5": "🔥 Top 5 Bài kiểm tra Phổ biến"
        }
    },
    "id": {
        "startMessage": {
            "line1": "Bisakah Anda mendengar 'ringtone nyamuk'?",
            "line2": "Pendengaran manusia mulai menua dari pertengahan usia 20-an, secara bertahap kehilangan kemampuan mendengar frekuensi tinggi.",
            "line3": "Suara yang terdengar seperti kebisingan bagi remaja bisa menjadi keheningan total bagi orang yang berusia 40-an.",
            "line4": "Sekarang naikkan volume speaker hingga minimal 50% dan ukur usia biologis telinga Anda.",
            "line5": "※ Disarankan menggunakan earphone/headphone.",
            "line6": "Mulai pengukuran 🎧"
        },
        "game": {
            "volumeCheck": "Bisakah Anda mendengar suara ini dengan jelas?",
            "volumeCheckDesc": "Periksa volume Anda dan tekan [Konfirmasi]",
            "listen": "Dengarkan suara {frequency}Hz",
            "listenDesc": "Pilih [Bisa mendengar] jika Anda mendengar, [Tidak bisa mendengar] jika tidak",
            "confirm": "Konfirmasi",
            "canHear": "Bisa mendengar",
            "cannotHear": "Tidak bisa mendengar",
            "replay": "Putar ulang",
            "step": "Langkah"
        },
        "ui": {
            "hearingAge": "📊 Pendengaran Anda",
            "recommendation": "⭐ Rekomendasi",
            "shareResult": "Bagikan Hasil",
            "linkCopy": "Salin Tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Iklan",
            "similarTests": "Tes Serupa",
            "goToTest": "Ikuti Tes"
        },
        "alerts": {
            "linkCopied": "Tautan disalin!",
            "kakaoInit": "Menginisialisasi fitur berbagi KakaoTalk. Silakan coba lagi sebentar lagi.",
            "wechatCopy": "Tautan disalin! Tempel di WeChat untuk berbagi."
        },
        "shareMessages": {
            "default": "Usia pendengaran saya adalah {age}! 🎧 Ada yang bisa mendengar 19,000Hz? Jika Anda bisa mendengar ini, Anda adalah remaja.",
            "startDefault": "Berapa umur telinga saya? Tes frekuensi audibel 🎧",
            "startKakao": "Berapa umur telinga saya? Tes frekuensi audibel 🎧",
            "startWechat": "Berapa umur telinga saya? Tes frekuensi audibel 🎧",
            "startWhatsapp": "Berapa umur telinga saya? Tes frekuensi audibel 🎧",
            "startTelegram": "Berapa umur telinga saya? Tes frekuensi audibel 🎧",
            "startLine": "Berapa umur telinga saya? Tes frekuensi audibel 🎧"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Top 5 Tes Populer",
            "popularTestsTop5": "🔥 Top 5 Tes Populer"
        }
    }
}

def update_json_file(file_path, translation_data):
    """Update JSON file with new translation data"""
    # Read existing file
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    else:
        data = {}
    
    # Add phase2HearingAgeTest section
    data['phase2HearingAgeTest'] = translation_data
    
    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"Updated {file_path}")

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    messages_dir = os.path.join(os.path.dirname(script_dir), 'messages')
    
    # Language code mapping
    lang_map = {
        'ko': 'ko.json',
        'en': 'en.json',
        'ja': 'ja.json',
        'zh-CN': 'zh-CN.json',
        'zh-TW': 'zh-TW.json',
        'vi': 'vi.json',
        'id': 'id.json'
    }
    
    # Update each language file
    for lang_code, filename in lang_map.items():
        file_path = os.path.join(messages_dir, filename)
        if lang_code in translations:
            update_json_file(file_path, translations[lang_code])
        else:
            print(f"⚠ Warning: No translation data for {lang_code}")
    
    print("\nAll translation files updated successfully!")

if __name__ == '__main__':
    main()

