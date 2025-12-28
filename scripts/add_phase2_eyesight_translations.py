#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import os
import sys

# Ensure stdout can handle UTF-8 characters
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

# Translation data for all 7 languages
translations = {
    "ko": {
        "startMessage": {
            "line1": "지금 이 글씨가 흐릿하게 보이나요?",
            "line2": "하루 종일 스마트폰과 모니터에 시달리는 당신의 눈. 혹시 시력이 뚝뚝 떨어지고 있진 않을까요?",
            "line3": "병원에 가지 않아도 1분 만에 확인하는 내 눈의 상태!",
            "line4": "점점 작아지는 'C' 모양을 찾아보세요. 마지막 단계까지 간다면 당신은 몽골인!",
            "line5": "내 시력 레벨 측정하기 👓",
            "line6": "Start Eye Test ▶️",
            "line7": "내 시력 레벨 측정하기 👓"
        },
        "ui": {
            "estimatedVision": "당신의 시력",
            "recommendation": "추천",
            "shareResult": "결과 공유하기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "adsenseTitle": "광고",
            "similarTests": "유사한 다른 테스트",
            "goToTest": "테스트 하기",
            "gameInstruction": "C 모양의 뚫린 방향을 선택하세요"
        },
        "alerts": {
            "linkCopied": "링크가 복사되었습니다!",
            "kakaoInit": "카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.",
            "wechatCopy": "링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요."
        },
        "shareMessages": {
            "default": "내 시력 레벨은 {type}! 👓 스마트폰으로 1분 만에 시력 측정함. 너도 해봐!",
            "kakao": "내 시력 레벨은 {type}! 👓 스마트폰으로 1분 만에 시력 측정함. 너도 해봐!",
            "wechat": "내 시력 레벨은 {type}! 👓 스마트폰으로 1분 만에 시력 측정함. 너도 해봐!",
            "whatsapp": "내 시력 레벨은 {type}! 👓 스마트폰으로 1분 만에 시력 측정함. 너도 해봐!",
            "telegram": "내 시력 레벨은 {type}! 👓 스마트폰으로 1분 만에 시력 측정함. 너도 해봐!",
            "line": "내 시력 레벨은 {type}! 👓 스마트폰으로 1분 만에 시력 측정함. 너도 해봐!",
            "startDefault": "내 시력은 몽골인? 초간편 시력 측정 👓",
            "startKakao": "내 시력은 몽골인? 초간편 시력 측정 👓",
            "startWechat": "내 시력은 몽골인? 초간편 시력 측정 👓",
            "startWhatsapp": "내 시력은 몽골인? 초간편 시력 측정 👓",
            "startTelegram": "내 시력은 몽골인? 초간편 시력 측정 👓",
            "startLine": "내 시력은 몽골인? 초간편 시력 측정 👓"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 요즘 인기 테스트 추천 톱5",
            "popularTestsTop5": "🔥 요즘 인기 테스트 추천 톱5"
        }
    },
    "en": {
        "startMessage": {
            "line1": "Is this text blurry right now?",
            "line2": "Your eyes, exhausted by smartphones and monitors all day. Is your vision dropping rapidly?",
            "line3": "Check your eye condition in just 1 minute without visiting a hospital!",
            "line4": "Find the shrinking 'C' shape. If you reach the final level, you're Mongolian!",
            "line5": "Measure my vision level 👓",
            "line6": "Start Eye Test ▶️",
            "line7": "Measure my vision level 👓"
        },
        "ui": {
            "estimatedVision": "Your Vision",
            "recommendation": "Recommendation",
            "shareResult": "Share Result",
            "linkCopy": "Copy Link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Advertisement",
            "similarTests": "Similar Tests",
            "goToTest": "Take Test",
            "gameInstruction": "Select the direction of the C opening"
        },
        "alerts": {
            "linkCopied": "Link copied!",
            "kakaoInit": "Initializing KakaoTalk share. Please try again in a moment.",
            "wechatCopy": "Link copied! Paste in WeChat to share."
        },
        "shareMessages": {
            "default": "My vision level is {type}! 👓 Measured vision in just 1 minute on smartphone. Try it too!",
            "kakao": "My vision level is {type}! 👓 Measured vision in just 1 minute on smartphone. Try it too!",
            "wechat": "My vision level is {type}! 👓 Measured vision in just 1 minute on smartphone. Try it too!",
            "whatsapp": "My vision level is {type}! 👓 Measured vision in just 1 minute on smartphone. Try it too!",
            "telegram": "My vision level is {type}! 👓 Measured vision in just 1 minute on smartphone. Try it too!",
            "line": "My vision level is {type}! 👓 Measured vision in just 1 minute on smartphone. Try it too!",
            "startDefault": "Am I Mongolian? Quick Vision Test 👓",
            "startKakao": "Am I Mongolian? Quick Vision Test 👓",
            "startWechat": "Am I Mongolian? Quick Vision Test 👓",
            "startWhatsapp": "Am I Mongolian? Quick Vision Test 👓",
            "startTelegram": "Am I Mongolian? Quick Vision Test 👓",
            "startLine": "Am I Mongolian? Quick Vision Test 👓"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Top 5 Popular Tests",
            "popularTestsTop5": "🔥 Top 5 Popular Tests"
        }
    },
    "ja": {
        "startMessage": {
            "line1": "今、この文字がぼやけて見えますか？",
            "line2": "一日中スマートフォンとモニターに苦しめられているあなたの目。視力が急激に低下していませんか？",
            "line3": "病院に行かなくても1分で確認できる目の状態！",
            "line4": "徐々に小さくなる「C」の形を見つけてください。最後のステップまで到達すれば、あなたはモンゴル人！",
            "line5": "私の視力レベルを測定する 👓",
            "line6": "Start Eye Test ▶️",
            "line7": "私の視力レベルを測定する 👓"
        },
        "ui": {
            "estimatedVision": "あなたの視力",
            "recommendation": "おすすめ",
            "shareResult": "結果を共有",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "テレグラム",
            "wechat": "WeChat",
            "line": "ライン",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "広告",
            "similarTests": "類似テスト",
            "goToTest": "テストする",
            "gameInstruction": "Cの開いた方向を選択してください"
        },
        "alerts": {
            "linkCopied": "リンクがコピーされました！",
            "kakaoInit": "カカオトークシェア機能を初期化しています。しばらくしてからもう一度お試しください。",
            "wechatCopy": "リンクがコピーされました！WeChatで貼り付けてシェアしてください。"
        },
        "shareMessages": {
            "default": "私の視力レベルは{type}！👓 スマートフォンで1分で視力測定。あなたもやってみて！",
            "kakao": "私の視力レベルは{type}！👓 スマートフォンで1分で視力測定。あなたもやってみて！",
            "wechat": "私の視力レベルは{type}！👓 スマートフォンで1分で視力測定。あなたもやってみて！",
            "whatsapp": "私の視力レベルは{type}！👓 スマートフォンで1分で視力測定。あなたもやってみて！",
            "telegram": "私の視力レベルは{type}！👓 スマートフォンで1分で視力測定。あなたもやってみて！",
            "line": "私の視力レベルは{type}！👓 スマートフォンで1分で視力測定。あなたもやってみて！",
            "startDefault": "私の視力はモンゴル人？簡単視力測定 👓",
            "startKakao": "私の視力はモンゴル人？簡単視力測定 👓",
            "startWechat": "私の視力はモンゴル人？簡単視力測定 👓",
            "startWhatsapp": "私の視力はモンゴル人？簡単視力測定 👓",
            "startTelegram": "私の視力はモンゴル人？簡単視력測定 👓",
            "startLine": "私の視力はモンゴル人？簡単視力測定 👓"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 最近人気のテストトップ5",
            "popularTestsTop5": "🔥 最近人気のテストトップ5"
        }
    },
    "zh-CN": {
        "startMessage": {
            "line1": "现在这些字看起来模糊吗？",
            "line2": "你整日面对手机和显示器，眼睛疲惫。视力是否在急剧下降？",
            "line3": "无需去医院，1分钟即可检查你的眼睛状况！",
            "line4": "找出逐渐缩小的「C」形状。如果你达到最后阶段，你就是蒙古人！",
            "line5": "测量我的视力水平 👓",
            "line6": "Start Eye Test ▶️",
            "line7": "测量我的视力水平 👓"
        },
        "ui": {
            "estimatedVision": "你的视力",
            "recommendation": "推荐",
            "shareResult": "分享结果",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "广告",
            "similarTests": "类似测试",
            "goToTest": "进行测试",
            "gameInstruction": "选择C开口的方向"
        },
        "alerts": {
            "linkCopied": "链接已复制！",
            "kakaoInit": "正在初始化KakaoTalk分享功能。请稍后再试。",
            "wechatCopy": "链接已复制！在微信中粘贴并分享。"
        },
        "shareMessages": {
            "default": "我的视力水平是{type}！👓 用智能手机1分钟测量视力。你也试试！",
            "kakao": "我的视力水平是{type}！👓 用智能手机1分钟测量视力。你也试试！",
            "wechat": "我的视力水平是{type}！👓 用智能手机1分钟测量视力。你也试试！",
            "whatsapp": "我的视力水平是{type}！👓 用智能手机1分钟测量视力。你也试试！",
            "telegram": "我的视力水平是{type}！👓 用智能手机1分钟测量视力。你也试试！",
            "line": "我的视力水平是{type}！👓 用智能手机1分钟测量视力。你也试试！",
            "startDefault": "我的视力是蒙古人吗？快速视力测试 👓",
            "startKakao": "我的视力是蒙古人吗？快速视力测试 👓",
            "startWechat": "我的视力是蒙古人吗？快速视力测试 👓",
            "startWhatsapp": "我的视力是蒙古人吗？快速视力测试 👓",
            "startTelegram": "我的视力是蒙古人吗？快速视力测试 👓",
            "startLine": "我的视力是蒙古人吗？快速视力测试 👓"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 最近热门测试前5名",
            "popularTestsTop5": "🔥 最近热门测试前5名"
        }
    },
    "zh-TW": {
        "startMessage": {
            "line1": "現在這些字看起來模糊嗎？",
            "line2": "你整日面對手機和顯示器，眼睛疲憊。視力是否在急劇下降？",
            "line3": "無需去醫院，1分鐘即可檢查你的眼睛狀況！",
            "line4": "找出逐漸縮小的「C」形狀。如果你達到最後階段，你就是蒙古人！",
            "line5": "測量我的視力水平 👓",
            "line6": "Start Eye Test ▶️",
            "line7": "測量我的視力水平 👓"
        },
        "ui": {
            "estimatedVision": "你的視力",
            "recommendation": "推薦",
            "shareResult": "分享結果",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "廣告",
            "similarTests": "類似測試",
            "goToTest": "進行測試",
            "gameInstruction": "選擇C開口的方向"
        },
        "alerts": {
            "linkCopied": "連結已複製！",
            "kakaoInit": "正在初始化KakaoTalk分享功能。請稍後再試。",
            "wechatCopy": "連結已複製！在微信中貼上並分享。"
        },
        "shareMessages": {
            "default": "我的視力水平是{type}！👓 用智能手機1分鐘測量視力。你也試試！",
            "kakao": "我的視力水平是{type}！👓 用智能手機1分鐘測量視力。你也試試！",
            "wechat": "我的視力水平是{type}！👓 用智能手機1分鐘測量視力。你也試試！",
            "whatsapp": "我的視力水平是{type}！👓 用智能手機1分鐘測量視力。你也試試！",
            "telegram": "我的視力水平是{type}！👓 用智能手機1分鐘測量視力。你也試試！",
            "line": "我的視力水平是{type}！👓 用智能手機1分鐘測量視力。你也試試！",
            "startDefault": "我的視力是蒙古人嗎？快速視力測試 👓",
            "startKakao": "我的視力是蒙古人嗎？快速視力測試 👓",
            "startWechat": "我的視力是蒙古人嗎？快速視力測試 👓",
            "startWhatsapp": "我的視力是蒙古人嗎？快速視力測試 👓",
            "startTelegram": "我的視力是蒙古人嗎？快速視力測試 👓",
            "startLine": "我的視力是蒙古人嗎？快速視力測試 👓"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 最近熱門測試前5名",
            "popularTestsTop5": "🔥 最近熱門測試前5名"
        }
    },
    "vi": {
        "startMessage": {
            "line1": "Bây giờ văn bản này có mờ không?",
            "line2": "Đôi mắt của bạn, kiệt sức vì điện thoại thông minh và màn hình cả ngày. Thị lực của bạn có đang giảm mạnh không?",
            "line3": "Kiểm tra tình trạng mắt chỉ trong 1 phút mà không cần đến bệnh viện!",
            "line4": "Tìm hình dạng 'C' đang thu nhỏ dần. Nếu bạn đạt đến cấp độ cuối cùng, bạn là người Mông Cổ!",
            "line5": "Đo mức độ thị lực của tôi 👓",
            "line6": "Start Eye Test ▶️",
            "line7": "Đo mức độ thị lực của tôi 👓"
        },
        "ui": {
            "estimatedVision": "Thị lực của bạn",
            "recommendation": "Khuyến nghị",
            "shareResult": "Chia sẻ kết quả",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Quảng cáo",
            "similarTests": "Bài kiểm tra tương tự",
            "goToTest": "Làm bài kiểm tra",
            "gameInstruction": "Chọn hướng mở của chữ C"
        },
        "alerts": {
            "linkCopied": "Đã sao chép liên kết!",
            "kakaoInit": "Đang khởi tạo tính năng chia sẻ KakaoTalk. Vui lòng thử lại sau.",
            "wechatCopy": "Đã sao chép liên kết! Dán và chia sẻ trong WeChat."
        },
        "shareMessages": {
            "default": "Mức độ thị lực của tôi là {type}! 👓 Đo thị lực chỉ trong 1 phút trên điện thoại thông minh. Bạn cũng thử nhé!",
            "kakao": "Mức độ thị lực của tôi là {type}! 👓 Đo thị lực chỉ trong 1 phút trên điện thoại thông minh. Bạn cũng thử nhé!",
            "wechat": "Mức độ thị lực của tôi là {type}! 👓 Đo thị lực chỉ trong 1 phút trên điện thoại thông minh. Bạn cũng thử nhé!",
            "whatsapp": "Mức độ thị lực của tôi là {type}! 👓 Đo thị lực chỉ trong 1 phút trên điện thoại thông minh. Bạn cũng thử nhé!",
            "telegram": "Mức độ thị lực của tôi là {type}! 👓 Đo thị lực chỉ trong 1 phút trên điện thoại thông minh. Bạn cũng thử nhé!",
            "line": "Mức độ thị lực của tôi là {type}! 👓 Đo thị lực chỉ trong 1 phút trên điện thoại thông minh. Bạn cũng thử nhé!",
            "startDefault": "Thị lực của tôi có phải là người Mông Cổ? Kiểm tra thị lực nhanh 👓",
            "startKakao": "Thị lực của tôi có phải là người Mông Cổ? Kiểm tra thị lực nhanh 👓",
            "startWechat": "Thị lực của tôi có phải là người Mông Cổ? Kiểm tra thị lực nhanh 👓",
            "startWhatsapp": "Thị lực của tôi có phải là người Mông Cổ? Kiểm tra thị lực nhanh 👓",
            "startTelegram": "Thị lực của tôi có phải là người Mông Cổ? Kiểm tra thị lực nhanh 👓",
            "startLine": "Thị lực của tôi có phải là người Mông Cổ? Kiểm tra thị lực nhanh 👓"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Top 5 Bài kiểm tra phổ biến gần đây",
            "popularTestsTop5": "🔥 Top 5 Bài kiểm tra phổ biến gần đây"
        }
    },
    "id": {
        "startMessage": {
            "line1": "Apakah teks ini terlihat buram sekarang?",
            "line2": "Mata Anda, kelelahan karena smartphone dan monitor sepanjang hari. Apakah penglihatan Anda turun drastis?",
            "line3": "Periksa kondisi mata Anda hanya dalam 1 menit tanpa mengunjungi rumah sakit!",
            "line4": "Temukan bentuk 'C' yang menyusut. Jika Anda mencapai level akhir, Anda adalah orang Mongolia!",
            "line5": "Ukur tingkat penglihatan saya 👓",
            "line6": "Start Eye Test ▶️",
            "line7": "Ukur tingkat penglihatan saya 👓"
        },
        "ui": {
            "estimatedVision": "Penglihatan Anda",
            "recommendation": "Rekomendasi",
            "shareResult": "Bagikan Hasil",
            "linkCopy": "Salin Tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Iklan",
            "similarTests": "Tes Serupa",
            "goToTest": "Lakukan Tes",
            "gameInstruction": "Pilih arah pembukaan C"
        },
        "alerts": {
            "linkCopied": "Tautan disalin!",
            "kakaoInit": "Menginisialisasi berbagi KakaoTalk. Silakan coba lagi sebentar lagi.",
            "wechatCopy": "Tautan disalin! Tempel dan bagikan di WeChat."
        },
        "shareMessages": {
            "default": "Tingkat penglihatan saya adalah {type}! 👓 Mengukur penglihatan hanya dalam 1 menit di smartphone. Coba juga!",
            "kakao": "Tingkat penglihatan saya adalah {type}! 👓 Mengukur penglihatan hanya dalam 1 menit di smartphone. Coba juga!",
            "wechat": "Tingkat penglihatan saya adalah {type}! 👓 Mengukur penglihatan hanya dalam 1 menit di smartphone. Coba juga!",
            "whatsapp": "Tingkat penglihatan saya adalah {type}! 👓 Mengukur penglihatan hanya dalam 1 menit di smartphone. Coba juga!",
            "telegram": "Tingkat penglihatan saya adalah {type}! 👓 Mengukur penglihatan hanya dalam 1 menit di smartphone. Coba juga!",
            "line": "Tingkat penglihatan saya adalah {type}! 👓 Mengukur penglihatan hanya dalam 1 menit di smartphone. Coba juga!",
            "startDefault": "Apakah Penglihatan Saya Orang Mongolia? Tes Penglihatan Cepat 👓",
            "startKakao": "Apakah Penglihatan Saya Orang Mongolia? Tes Penglihatan Cepat 👓",
            "startWechat": "Apakah Penglihatan Saya Orang Mongolia? Tes Penglihatan Cepat 👓",
            "startWhatsapp": "Apakah Penglihatan Saya Orang Mongolia? Tes Penglihatan Cepat 👓",
            "startTelegram": "Apakah Penglihatan Saya Orang Mongolia? Tes Penglihatan Cepat 👓",
            "startLine": "Apakah Penglihatan Saya Orang Mongolia? Tes Penglihatan Cepat 👓"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 5 Tes Populer Terbaru",
            "popularTestsTop5": "🔥 5 Tes Populer Terbaru"
        }
    }
}

def update_json_file(file_path, new_data):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Add phase2EyesightTest section
        data['phase2EyesightTest'] = new_data
        
        # Save file
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"Updated {file_path}")
        return True
    except Exception as e:
        print(f"Error updating {file_path}: {e}")
        return False

def main():
    messages_dir = 'messages'
    
    # Language mapping
    lang_files = {
        'ko': 'ko.json',
        'en': 'en.json',
        'ja': 'ja.json',
        'zh-CN': 'zh-CN.json',
        'zh-TW': 'zh-TW.json',
        'vi': 'vi.json',
        'id': 'id.json'
    }
    
    for lang, filename in lang_files.items():
        file_path = os.path.join(messages_dir, filename)
        if lang in translations:
            update_json_file(file_path, translations[lang])
    
    print("\nAll translation files updated successfully!")

if __name__ == "__main__":
    main()

