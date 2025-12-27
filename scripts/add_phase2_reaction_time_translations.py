import json
import os

# Translation Data
translations = {
    "phase2ReactionTimeTest": {
        "startMessage": {
            "line1": "당신의 뇌와 손가락은 연결되어 있나요?",
            "line2": "일반인의 평균 반응속도는 약 0.25초 (250ms)입니다.",
            "line3": "프로게이머들은 0.15초의 벽을 넘는다고 하죠.",
            "line4": "혹시 나이가 들어서 반응이 느려졌다고 느끼나요? 아니면 아직 쌩쌩한 피지컬을 가지고 있나요?",
            "line5": "지금 당신의 '진짜' 속도를 측정해 드립니다. 반응속도 측정 시작 ⚡"
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
            "wait": "대기...",
            "waitDesc": "초록색이 되면 클릭하세요!",
            "clickNow": "클릭!!!",
            "clickNowDesc": "최대한 빨리!",
            "tooSoon": "너무 빨라요!",
            "tooSoonDesc": "색이 바뀌면 클릭해야 합니다. 다시 시도하려면 클릭하세요.",
            "clickToContinue": "클릭하여 계속",
            "clickToRetry": "클릭하여 다시 시도",
            "roundInfo": "라운드 {current} / {total}",
            "yourSpeed": "📊 당신의 속도",
            "recommendedJob": "⭐ 추천 직업",
            "shareResult": "결과 공유하기",
            "shareWithFriends": "친구와 공유하기",
            "retry": "다시 도전하기",
            "otherTests": "다른 테스트 보기",
            "adsenseTitle": "광고",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡 공유",
            "telegram": "텔레그램 공유",
            "wechat": "위챗 공유",
            "line": "라인 공유",
            "whatsapp": "왓츠앱 공유",
            "goToTest": "테스트 하러 가기"
        },
        "alerts": {
            "linkCopied": "링크가 복사되었습니다!",
            "shareFailed": "공유 기능을 사용할 수 없습니다.",
            "kakaoInit": "카카오톡 초기화 중...",
            "wechatCopy": "링크가 복사되었습니다. 위챗에 붙여넣어 공유하세요."
        }
    }
}

# English Overrides
translations_en = {
    "phase2ReactionTimeTest": {
        "startMessage": {
            "line1": "Are your brain and fingers connected?",
            "line2": "The average reaction time for humans is about 0.25s (250ms).",
            "line3": "Pro gamers break the 0.15s barrier.",
            "line4": "Do you feel slower with age? Or do you still have peak physical skills?",
            "line5": "Measure your 'real' speed now. Start Reaction Test ⚡"
        },
        "shareMessages": {
            "default": "My average reaction time is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "kakao": "My average reaction time is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "line": "My average reaction time is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "wechat": "My average reaction time is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "whatsapp": "My average reaction time is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "telegram": "My average reaction time is {record}ms! Rank: {type} ⚡ Can you beat me?",
            "startDefault": "0.1s Battle! Reaction Time Test ⚡ What's your rank?",
            "startKakao": "0.1s Battle! Reaction Time Test ⚡ What's your rank?",
            "startLine": "0.1s Battle! Reaction Time Test ⚡ What's your rank?",
            "startWechat": "0.1s Battle! Reaction Time Test ⚡ What's your rank?",
            "startWhatsapp": "0.1s Battle! Reaction Time Test ⚡ What's your rank?",
            "startTelegram": "0.1s Battle! Reaction Time Test ⚡ What's your rank?"
        },
        "ui": {
            "title": "0.1s Battle! Reaction Time Test",
            "wait": "Wait...",
            "waitDesc": "Click when it turns green!",
            "clickNow": "CLICK!!!",
            "clickNowDesc": "As fast as you can!",
            "tooSoon": "Too Soon!",
            "tooSoonDesc": "Wait for the color to change. Click to try again.",
            "clickToContinue": "Click to Continue",
            "clickToRetry": "Click to Retry",
            "roundInfo": "Round {current} / {total}",
            "yourSpeed": "📊 Your Speed",
            "recommendedJob": "⭐ Recommended Job",
            "shareResult": "Share Result",
            "shareWithFriends": "Share with Friends",
            "retry": "Try Again",
            "otherTests": "Other Tests",
            "adsenseTitle": "Advertisement",
            "linkCopy": "Copy Link",
            "kakao": "Kakao Share",
            "telegram": "Telegram Share",
            "wechat": "WeChat Share",
            "line": "Line Share",
            "whatsapp": "WhatsApp Share",
            "goToTest": "Go to Test"
        },
        "alerts": {
            "linkCopied": "Link copied!",
            "shareFailed": "Share unavailable.",
            "kakaoInit": "Initializing KakaoTalk...",
            "wechatCopy": "Link copied. Paste in WeChat to share."
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

for lang_code, filename in files.items():
    file_path = os.path.join(messages_dir, filename)
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Use English for non-Korean languages (User can localize later)
        content_to_add = translations_en if lang_code != 'ko' else translations
        
        # Add or Update key
        data['phase2ReactionTimeTest'] = content_to_add['phase2ReactionTimeTest']
            
        print(f"Updated {filename}")
            
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
                
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print("Translation update complete.")

