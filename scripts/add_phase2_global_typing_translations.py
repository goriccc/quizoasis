#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
글로벌 타자왕 테스트 번역 키 추가 스크립트
"""

import json
import os

# 번역 데이터
translations = {
    'ko': {
        'startMessage': {
            'line1': '당신의 타자 실력, 거품인가요 진짜인가요?',
            'line2': '한 문장만 빠르게 치는 건 누구나 할 수 있습니다.',
            'line3': '하지만 긴 호흡으로 꾸준히 빠르기는 어렵죠.',
            'line4': '인사말부터 속담, 명언, 문학 작품까지. 총 5단계의 문장을 모두 통과해야 합니다. 당신의 진짜 \'평균 속도\'는?',
            'startButton': '5라운드 검정 시작 🖐️'
        },
        'ui': {
            'round': '라운드',
            'typeSentence': '아래 문장을 정확하게 입력하세요',
            'startTyping': '여기에 입력하세요...',
            'progress': '진행률',
            'averageCPM': '평균 타수',
            'cpm': '타/분',
            'errorPenalty': '오타 패널티',
            'characteristics': '특징',
            'recommendation': '추천',
            'shareResult': '결과 공유하기',
            'linkCopy': '링크 복사',
            'kakao': '카카오톡',
            'telegram': '텔레그램',
            'wechat': '위챗',
            'line': '라인',
            'whatsapp': '왓츠앱',
            'goToTest': '테스트 하러 가기',
            'adsenseTitle': '광고',
            'similarTests': '유사한 다른 테스트'
        },
        'alerts': {
            'linkCopied': '링크가 복사되었습니다!',
            'kakaoInit': '카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.',
            'wechatCopy': '링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요.'
        },
        'shareMessages': {
            'default': '내 {language} 평균 타자 속도는 {cpm}타! 등급은 {type} ⌨️ 5라운드 평균임. 너도 도전?',
            'kakao': '내 {language} 평균 타자 속도는 {cpm}타! 등급은 {type} ⌨️ 5라운드 평균임. 너도 도전?',
            'startDefault': '글로벌 타자왕 테스트를 해보세요! 5라운드 실력 검증 ⌨️',
            'startKakao': '글로벌 타자왕 테스트를 해보세요! 5라운드 실력 검증 ⌨️',
            'startWechat': '글로벌 타자왕 테스트를 해보세요! 5라운드 실력 검증 ⌨️',
            'startWhatsapp': '글로벌 타자왕 테스트를 해보세요! 5라운드 실력 검증 ⌨️',
            'startTelegram': '글로벌 타자왕 테스트를 해보세요! 5라운드 실력 검증 ⌨️',
            'startLine': '글로벌 타자왕 테스트를 해보세요! 5라운드 실력 검증 ⌨️'
        },
        'recommendations': {
            'similarTestsTop5': '🎯 유사한 다른 테스트 추천 톱5',
            'popularTestsTop5': '🔥 요즘 인기 테스트 추천 톱5'
        }
    },
    'en': {
        'startMessage': {
            'line1': 'Your typing skills - real or fake?',
            'line2': 'Anyone can type one sentence quickly.',
            'line3': 'But maintaining speed over long passages is hard.',
            'line4': 'From greetings to proverbs, quotes, and literature. You must pass all 5 rounds. What\'s your real \'average speed\' that even locals recognize?',
            'startButton': 'Start 5-Round Test 🖐️'
        },
        'ui': {
            'round': 'Round',
            'typeSentence': 'Type the sentence below accurately',
            'startTyping': 'Start typing here...',
            'progress': 'Progress',
            'averageCPM': 'Average CPM',
            'cpm': 'CPM',
            'errorPenalty': 'Error Penalty',
            'characteristics': 'Characteristics',
            'recommendation': 'Recommendation',
            'shareResult': 'Share Result',
            'linkCopy': 'Copy Link',
            'kakao': 'KakaoTalk',
            'telegram': 'Telegram',
            'wechat': 'WeChat',
            'line': 'Line',
            'whatsapp': 'WhatsApp',
            'goToTest': 'Take the Test',
            'adsenseTitle': 'Advertisement',
            'similarTests': 'Similar Other Tests'
        },
        'alerts': {
            'linkCopied': 'Link copied!',
            'kakaoInit': 'Initializing KakaoTalk share feature. Please try again in a moment.',
            'wechatCopy': 'Link copied! Paste and share in WeChat.'
        },
        'shareMessages': {
            'default': 'My {language} average typing speed is {cpm} CPM! Grade: {type} ⌨️ Average of 5 rounds. Try it too?',
            'kakao': 'My {language} average typing speed is {cpm} CPM! Grade: {type} ⌨️ Average of 5 rounds. Try it too?',
            'startDefault': 'Try the Global Typing Champion test! 5-round skill verification ⌨️',
            'startKakao': 'Try the Global Typing Champion test! 5-round skill verification ⌨️',
            'startWechat': 'Try the Global Typing Champion test! 5-round skill verification ⌨️',
            'startWhatsapp': 'Try the Global Typing Champion test! 5-round skill verification ⌨️',
            'startTelegram': 'Try the Global Typing Champion test! 5-round skill verification ⌨️',
            'startLine': 'Try the Global Typing Champion test! 5-round skill verification ⌨️'
        },
        'recommendations': {
            'similarTestsTop5': '🎯 Similar Other Tests Top 5',
            'popularTestsTop5': '🔥 Popular Tests Top 5'
        }
    },
    'ja': {
        'startMessage': {
            'line1': 'あなたのタイピング技術、本物ですか？',
            'line2': '一つの文を素早く打つことは誰でもできます。',
            'line3': 'しかし、長い文章を一定の速度で打ち続けるのは難しいです。',
            'line4': '挨拶からことわざ、名言、文学作品まで。全5段階の文をすべて通過する必要があります。現地人も認めるあなたの本当の「平均速度」は？',
            'startButton': '5ラウンド検定開始 🖐️'
        },
        'ui': {
            'round': 'ラウンド',
            'typeSentence': '以下の文を正確に入力してください',
            'startTyping': 'ここに入力してください...',
            'progress': '進捗',
            'averageCPM': '平均タイプ数',
            'cpm': 'タイプ/分',
            'errorPenalty': '誤字ペナルティ',
            'characteristics': '特徴',
            'recommendation': '推奨',
            'shareResult': '結果を共有',
            'linkCopy': 'リンクをコピー',
            'kakao': 'カカオトーク',
            'telegram': 'テレグラム',
            'wechat': 'WeChat',
            'line': 'LINE',
            'whatsapp': 'WhatsApp',
            'goToTest': 'テストを受ける',
            'adsenseTitle': '広告',
            'similarTests': '類似の他のテスト'
        },
        'alerts': {
            'linkCopied': 'リンクがコピーされました！',
            'kakaoInit': 'カカオトーク共有機能を初期化しています。しばらくしてからもう一度お試しください。',
            'wechatCopy': 'リンクがコピーされました！WeChatで貼り付けて共有してください。'
        },
        'shareMessages': {
            'default': '私の{language}平均タイピング速度は{cpm}タイプ！等級は{type} ⌨️ 5ラウンド平均です。あなたも挑戦？',
            'kakao': '私の{language}平均タイピング速度は{cpm}タイプ！等級は{type} ⌨️ 5ラウンド平均です。あなたも挑戦？',
            'startDefault': 'グローバルタイピング王テストを試してみてください！5ラウンド実力検証 ⌨️',
            'startKakao': 'グローバルタイピング王テストを試してみてください！5ラウンド実力検証 ⌨️',
            'startWechat': 'グローバルタイピング王テストを試してみてください！5ラウンド実力検証 ⌨️',
            'startWhatsapp': 'グローバルタイピング王テストを試してみてください！5ラウンド実力検証 ⌨️',
            'startTelegram': 'グローバルタイピング王テストを試してみてください！5ラウンド実力検証 ⌨️',
            'startLine': 'グローバルタイピング王テストを試してみてください！5ラウンド実力検証 ⌨️'
        },
        'recommendations': {
            'similarTestsTop5': '🎯 類似の他のテスト Top 5',
            'popularTestsTop5': '🔥 人気テスト Top 5'
        }
    },
    'zh-CN': {
        'startMessage': {
            'line1': '你的打字能力，是真材实料还是虚有其表？',
            'line2': '快速打一句话谁都能做到。',
            'line3': '但保持长段落的高速却很难。',
            'line4': '从问候语到谚语、名言、文学作品。你必须通过全部5轮。连当地人都认可的你真正的「平均速度」是多少？',
            'startButton': '开始5轮测试 🖐️'
        },
        'ui': {
            'round': '轮',
            'typeSentence': '请准确输入以下句子',
            'startTyping': '在此输入...',
            'progress': '进度',
            'averageCPM': '平均打字数',
            'cpm': '字/分',
            'errorPenalty': '错误惩罚',
            'characteristics': '特征',
            'recommendation': '推荐',
            'shareResult': '分享结果',
            'linkCopy': '复制链接',
            'kakao': 'KakaoTalk',
            'telegram': 'Telegram',
            'wechat': '微信',
            'line': 'Line',
            'whatsapp': 'WhatsApp',
            'goToTest': '参加测试',
            'adsenseTitle': '广告',
            'similarTests': '类似的其他测试'
        },
        'alerts': {
            'linkCopied': '链接已复制！',
            'kakaoInit': '正在初始化KakaoTalk分享功能。请稍后再试。',
            'wechatCopy': '链接已复制！请在微信中粘贴并分享。'
        },
        'shareMessages': {
            'default': '我的{language}平均打字速度是{cpm}字/分！等级是{type} ⌨️ 5轮平均值。你也来挑战？',
            'kakao': '我的{language}平均打字速度是{cpm}字/分！等级是{type} ⌨️ 5轮平均值。你也来挑战？',
            'startDefault': '试试全球打字王测试！5轮实力验证 ⌨️',
            'startKakao': '试试全球打字王测试！5轮实力验证 ⌨️',
            'startWechat': '试试全球打字王测试！5轮实力验证 ⌨️',
            'startWhatsapp': '试试全球打字王测试！5轮实力验证 ⌨️',
            'startTelegram': '试试全球打字王测试！5轮实力验证 ⌨️',
            'startLine': '试试全球打字王测试！5轮实力验证 ⌨️'
        },
        'recommendations': {
            'similarTestsTop5': '🎯 类似的其他测试 Top 5',
            'popularTestsTop5': '🔥 热门测试 Top 5'
        }
    },
    'zh-TW': {
        'startMessage': {
            'line1': '你的打字能力，是真材實料還是虛有其表？',
            'line2': '快速打一句話誰都能做到。',
            'line3': '但保持長段落的高速卻很難。',
            'line4': '從問候語到諺語、名言、文學作品。你必須通過全部5輪。連當地人都認可的你真正的「平均速度」是多少？',
            'startButton': '開始5輪測試 🖐️'
        },
        'ui': {
            'round': '輪',
            'typeSentence': '請準確輸入以下句子',
            'startTyping': '在此輸入...',
            'progress': '進度',
            'averageCPM': '平均打字數',
            'cpm': '字/分',
            'errorPenalty': '錯誤懲罰',
            'characteristics': '特徵',
            'recommendation': '推薦',
            'shareResult': '分享結果',
            'linkCopy': '複製連結',
            'kakao': 'KakaoTalk',
            'telegram': 'Telegram',
            'wechat': '微信',
            'line': 'Line',
            'whatsapp': 'WhatsApp',
            'goToTest': '參加測試',
            'adsenseTitle': '廣告',
            'similarTests': '類似的其他測試'
        },
        'alerts': {
            'linkCopied': '連結已複製！',
            'kakaoInit': '正在初始化KakaoTalk分享功能。請稍後再試。',
            'wechatCopy': '連結已複製！請在微信中貼上並分享。'
        },
        'shareMessages': {
            'default': '我的{language}平均打字速度是{cpm}字/分！等級是{type} ⌨️ 5輪平均值。你也來挑戰？',
            'kakao': '我的{language}平均打字速度是{cpm}字/分！等級是{type} ⌨️ 5輪平均值。你也來挑戰？',
            'startDefault': '試試全球打字王測試！5輪實力驗證 ⌨️',
            'startKakao': '試試全球打字王測試！5輪實力驗證 ⌨️',
            'startWechat': '試試全球打字王測試！5輪實力驗證 ⌨️',
            'startWhatsapp': '試試全球打字王測試！5輪實力驗證 ⌨️',
            'startTelegram': '試試全球打字王測試！5輪實力驗證 ⌨️',
            'startLine': '試試全球打字王測試！5輪實力驗證 ⌨️'
        },
        'recommendations': {
            'similarTestsTop5': '🎯 類似的其他測試 Top 5',
            'popularTestsTop5': '🔥 熱門測試 Top 5'
        }
    },
    'vi': {
        'startMessage': {
            'line1': 'Kỹ năng đánh máy của bạn - thật hay giả?',
            'line2': 'Ai cũng có thể đánh nhanh một câu.',
            'line3': 'Nhưng duy trì tốc độ trong đoạn văn dài thì khó.',
            'line4': 'Từ lời chào đến tục ngữ, trích dẫn và văn học. Bạn phải vượt qua cả 5 vòng. \'Tốc độ trung bình\' thực sự của bạn mà ngay cả người địa phương cũng công nhận là bao nhiêu?',
            'startButton': 'Bắt đầu 5 Vòng Kiểm tra 🖐️'
        },
        'ui': {
            'round': 'Vòng',
            'typeSentence': 'Nhập chính xác câu dưới đây',
            'startTyping': 'Bắt đầu nhập ở đây...',
            'progress': 'Tiến trình',
            'averageCPM': 'Tốc độ trung bình',
            'cpm': 'ký tự/phút',
            'errorPenalty': 'Phạt lỗi',
            'characteristics': 'Đặc điểm',
            'recommendation': 'Khuyến nghị',
            'shareResult': 'Chia sẻ kết quả',
            'linkCopy': 'Sao chép liên kết',
            'kakao': 'KakaoTalk',
            'telegram': 'Telegram',
            'wechat': 'WeChat',
            'line': 'Line',
            'whatsapp': 'WhatsApp',
            'goToTest': 'Làm bài kiểm tra',
            'adsenseTitle': 'Quảng cáo',
            'similarTests': 'Các bài kiểm tra tương tự khác'
        },
        'alerts': {
            'linkCopied': 'Đã sao chép liên kết!',
            'kakaoInit': 'Đang khởi tạo tính năng chia sẻ KakaoTalk. Vui lòng thử lại sau.',
            'wechatCopy': 'Đã sao chép liên kết! Dán và chia sẻ trong WeChat.'
        },
        'shareMessages': {
            'default': 'Tốc độ đánh máy trung bình {language} của tôi là {cpm} ký tự/phút! Cấp độ: {type} ⌨️ Trung bình 5 vòng. Bạn cũng thử?',
            'kakao': 'Tốc độ đánh máy trung bình {language} của tôi là {cpm} ký tự/phút! Cấp độ: {type} ⌨️ Trung bình 5 vòng. Bạn cũng thử?',
            'startDefault': 'Thử bài kiểm tra Vua Đánh Máy Toàn Cầu! Xác minh kỹ năng 5 vòng ⌨️',
            'startKakao': 'Thử bài kiểm tra Vua Đánh Máy Toàn Cầu! Xác minh kỹ năng 5 vòng ⌨️',
            'startWechat': 'Thử bài kiểm tra Vua Đánh Máy Toàn Cầu! Xác minh kỹ năng 5 vòng ⌨️',
            'startWhatsapp': 'Thử bài kiểm tra Vua Đánh Máy Toàn Cầu! Xác minh kỹ năng 5 vòng ⌨️',
            'startTelegram': 'Thử bài kiểm tra Vua Đánh Máy Toàn Cầu! Xác minh kỹ năng 5 vòng ⌨️',
            'startLine': 'Thử bài kiểm tra Vua Đánh Máy Toàn Cầu! Xác minh kỹ năng 5 vòng ⌨️'
        },
        'recommendations': {
            'similarTestsTop5': '🎯 Các bài kiểm tra tương tự khác Top 5',
            'popularTestsTop5': '🔥 Bài kiểm tra phổ biến Top 5'
        }
    },
    'id': {
        'startMessage': {
            'line1': 'Keterampilan mengetik Anda - nyata atau palsu?',
            'line2': 'Siapa pun bisa mengetik satu kalimat dengan cepat.',
            'line3': 'Tetapi mempertahankan kecepatan dalam paragraf panjang itu sulit.',
            'line4': 'Dari sapaan hingga peribahasa, kutipan, dan sastra. Anda harus melewati semua 5 putaran. Berapa \'kecepatan rata-rata\' Anda yang benar-benar bahkan diakui oleh penduduk lokal?',
            'startButton': 'Mulai Tes 5 Ronde 🖐️'
        },
        'ui': {
            'round': 'Ronde',
            'typeSentence': 'Ketik kalimat di bawah ini dengan akurat',
            'startTyping': 'Mulai mengetik di sini...',
            'progress': 'Kemajuan',
            'averageCPM': 'Rata-rata CPM',
            'cpm': 'CPM',
            'errorPenalty': 'Penalti Kesalahan',
            'characteristics': 'Karakteristik',
            'recommendation': 'Rekomendasi',
            'shareResult': 'Bagikan Hasil',
            'linkCopy': 'Salin Tautan',
            'kakao': 'KakaoTalk',
            'telegram': 'Telegram',
            'wechat': 'WeChat',
            'line': 'Line',
            'whatsapp': 'WhatsApp',
            'goToTest': 'Ikuti Tes',
            'adsenseTitle': 'Iklan',
            'similarTests': 'Tes Serupa Lainnya'
        },
        'alerts': {
            'linkCopied': 'Tautan disalin!',
            'kakaoInit': 'Menginisialisasi fitur berbagi KakaoTalk. Silakan coba lagi nanti.',
            'wechatCopy': 'Tautan disalin! Tempel dan bagikan di WeChat.'
        },
        'shareMessages': {
            'default': 'Kecepatan mengetik rata-rata {language} saya adalah {cpm} CPM! Grade: {type} ⌨️ Rata-rata 5 putaran. Coba juga?',
            'kakao': 'Kecepatan mengetik rata-rata {language} saya adalah {cpm} CPM! Grade: {type} ⌨️ Rata-rata 5 putaran. Coba juga?',
            'startDefault': 'Coba tes Raja Mengetik Global! Verifikasi keterampilan 5 ronde ⌨️',
            'startKakao': 'Coba tes Raja Mengetik Global! Verifikasi keterampilan 5 ronde ⌨️',
            'startWechat': 'Coba tes Raja Mengetik Global! Verifikasi keterampilan 5 ronde ⌨️',
            'startWhatsapp': 'Coba tes Raja Mengetik Global! Verifikasi keterampilan 5 ronde ⌨️',
            'startTelegram': 'Coba tes Raja Mengetik Global! Verifikasi keterampilan 5 ronde ⌨️',
            'startLine': 'Coba tes Raja Mengetik Global! Verifikasi keterampilan 5 ronde ⌨️'
        },
        'recommendations': {
            'similarTestsTop5': '🎯 Tes Serupa Lainnya Top 5',
            'popularTestsTop5': '🔥 Tes Populer Top 5'
        }
    }
}

# 언어별 파일명 매핑
file_map = {
    'ko': 'messages/ko.json',
    'en': 'messages/en.json',
    'ja': 'messages/ja.json',
    'zh-CN': 'messages/zh-CN.json',
    'zh-TW': 'messages/zh-TW.json',
    'vi': 'messages/vi.json',
    'id': 'messages/id.json'
}

def update_json_file(filepath, translations_data):
    """JSON 파일 업데이트"""
    if not os.path.exists(filepath):
        print(f'File not found: {filepath}')
        return False
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # phase2GlobalTypingTest 키 추가
        if 'phase2GlobalTypingTest' not in data:
            data['phase2GlobalTypingTest'] = {}
        
        data['phase2GlobalTypingTest'].update(translations_data)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f'Updated: {filepath}')
        return True
    except Exception as e:
        print(f'Error updating {filepath}: {e}')
        return False

def main():
    print('Adding phase2GlobalTypingTest translations...\n')
    
    success_count = 0
    for lang, filepath in file_map.items():
        if lang in translations:
            if update_json_file(filepath, translations[lang]):
                success_count += 1
    
    print(f'\nCompleted: {success_count}/{len(file_map)} files updated')

if __name__ == '__main__':
    main()

