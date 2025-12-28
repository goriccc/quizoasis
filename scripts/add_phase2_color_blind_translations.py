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
            "line1": "당신이 보는 빨간색이, 남들에게도 빨간색일까요?",
            "line2": "우리나라 남성의 약 5.9%, 여성의 약 0.4%가 색각 이상(색맹/색약)을 가지고 있다고 합니다.",
            "line3": "특히 경미한 색약의 경우, 성인이 될 때까지 모르고 지내는 경우도 많습니다.",
            "line4": "혹시 남들과 다른 색의 세상을 보고 있진 않나요? 지금 바로 확인해 보세요.",
            "line5": "※ 정확한 검사를 위해 화면 밝기를 최대로 높여주세요.",
            "line6": "※ 이 테스트는 의학적 진단을 대신할 수 없습니다.",
            "line7": "테스트 시작하기 👁️ Start Color Test ▶️"
        },
        "ui": {
            "question": "질문",
            "selectAnswer": "보이는 숫자나 도형을 선택하세요",
            "nothing": "보이지 않음",
            "next": "다음",
            "finish": "완료",
            "startTest": "테스트 시작하기 👁️ Start Color Test ▶️",
            "characteristics": "특징",
            "recommendation": "추천",
            "shareResult": "결과 공유하기",
            "linkCopy": "링크 복사",
            "kakao": "카카오톡",
            "telegram": "텔레그램",
            "wechat": "위챗",
            "line": "라인",
            "whatsapp": "왓츠앱",
            "adsenseTitle": "광고",
            "goToTest": "테스트 하기"
        },
        "alerts": {
            "linkCopied": "링크가 복사되었습니다!",
            "kakaoInit": "카카오톡 공유 기능을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.",
            "wechatCopy": "링크가 복사되었습니다! WeChat에서 붙여넣기 하여 공유하세요."
        },
        "shareMessages": {
            "default": "내 눈에 보이는 세상은 {type}! 🎨 너는 12번 문제 숫자가 뭘로 보여?",
            "kakao": "내 눈에 보이는 세상은 {type}! 🎨 너는 12번 문제 숫자가 뭘로 보여?",
            "wechat": "내 눈에 보이는 세상은 {type}! 🎨 너는 12번 문제 숫자가 뭘로 보여?",
            "whatsapp": "내 눈에 보이는 세상은 {type}! 🎨 너는 12번 문제 숫자가 뭘로 보여?",
            "telegram": "내 눈에 보이는 세상은 {type}! 🎨 너는 12번 문제 숫자가 뭘로 보여?",
            "line": "내 눈에 보이는 세상은 {type}! 🎨 너는 12번 문제 숫자가 뭘로 보여?",
            "startDefault": "내 세상의 색깔은? 색맹/색약 정밀 테스트 🎨",
            "startKakao": "내 세상의 색깔은? 색맹/색약 정밀 테스트 🎨",
            "startWechat": "내 세상의 색깔은? 색맹/색약 정밀 테스트 🎨",
            "startWhatsapp": "내 세상의 색깔은? 색맹/색약 정밀 테스트 🎨",
            "startTelegram": "내 세상의 색깔은? 색맹/색약 정밀 테스트 🎨",
            "startLine": "내 세상의 색깔은? 색맹/색약 정밀 테스트 🎨"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 요즘 인기 테스트 추천 톱5",
            "popularTestsTop5": "🔥 요즘 인기 테스트 추천 톱5"
        }
    },
    "en": {
        "startMessage": {
            "line1": "Is the red you see the same red others see?",
            "line2": "About 5.9% of men and 0.4% of women in our country have color vision deficiency (color blindness/color weakness).",
            "line3": "Especially for mild color weakness, many people live without knowing until adulthood.",
            "line4": "Are you seeing a world of different colors than others? Check now.",
            "line5": "※ Please maximize screen brightness for accurate testing.",
            "line6": "※ This test cannot replace medical diagnosis.",
            "line7": "Start Test 👁️ Start Color Test ▶️"
        },
        "ui": {
            "question": "Question",
            "selectAnswer": "Select the number or shape you see",
            "nothing": "Nothing",
            "next": "Next",
            "finish": "Finish",
            "startTest": "Start Test 👁️ Start Color Test ▶️",
            "characteristics": "Characteristics",
            "recommendation": "Recommendation",
            "shareResult": "Share Result",
            "linkCopy": "Copy Link",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Advertisement",
            "goToTest": "Take Test"
        },
        "alerts": {
            "linkCopied": "Link copied!",
            "kakaoInit": "Initializing KakaoTalk share. Please try again in a moment.",
            "wechatCopy": "Link copied! Paste in WeChat to share."
        },
        "shareMessages": {
            "default": "The world I see is {type}! 🎨 What number do you see in question 12?",
            "kakao": "The world I see is {type}! 🎨 What number do you see in question 12?",
            "wechat": "The world I see is {type}! 🎨 What number do you see in question 12?",
            "whatsapp": "The world I see is {type}! 🎨 What number do you see in question 12?",
            "telegram": "The world I see is {type}! 🎨 What number do you see in question 12?",
            "line": "The world I see is {type}! 🎨 What number do you see in question 12?",
            "startDefault": "What Color Is My World? Color Blindness Test 🎨",
            "startKakao": "What Color Is My World? Color Blindness Test 🎨",
            "startWechat": "What Color Is My World? Color Blindness Test 🎨",
            "startWhatsapp": "What Color Is My World? Color Blindness Test 🎨",
            "startTelegram": "What Color Is My World? Color Blindness Test 🎨",
            "startLine": "What Color Is My World? Color Blindness Test 🎨"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Top 5 Popular Tests Recommendations",
            "popularTestsTop5": "🔥 Top 5 Popular Tests Recommendations"
        }
    },
    "ja": {
        "startMessage": {
            "line1": "あなたが見る赤は、他の人にとっても赤ですか？",
            "line2": "我が国の男性の約5.9％、女性の約0.4％が色覚異常（色盲・色弱）を持っていると言われています。",
            "line3": "特に軽度の色弱の場合、成人になるまで気づかないことも多いです。",
            "line4": "もしかして他の人とは違う色の世界を見ていませんか？今すぐ確認してください。",
            "line5": "※ 正確な検査のため、画面の明るさを最大にしてください。",
            "line6": "※ このテストは医学的診断の代わりにはなりません。",
            "line7": "テスト開始 👁️ Start Color Test ▶️"
        },
        "ui": {
            "question": "質問",
            "selectAnswer": "見える数字や形を選択してください",
            "nothing": "見えない",
            "next": "次へ",
            "finish": "完了",
            "startTest": "テスト開始 👁️ Start Color Test ▶️",
            "characteristics": "特徴",
            "recommendation": "推奨",
            "shareResult": "結果を共有",
            "linkCopy": "リンクをコピー",
            "kakao": "カカオトーク",
            "telegram": "テレグラム",
            "wechat": "WeChat",
            "line": "ライン",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "広告",
            "goToTest": "テストを受ける"
        },
        "alerts": {
            "linkCopied": "リンクがコピーされました！",
            "kakaoInit": "カカオトーク共有機能を初期化中です。しばらくしてから再度お試しください。",
            "wechatCopy": "リンクがコピーされました！WeChatで貼り付けて共有してください。"
        },
        "shareMessages": {
            "default": "私の目に見える世界は{type}！🎨 あなたは12番の問題の数字が何に見えますか？",
            "kakao": "私の目に見える世界は{type}！🎨 あなたは12番の問題の数字が何に見えますか？",
            "wechat": "私の目に見える世界は{type}！🎨 あなたは12番の問題の数字が何に見えますか？",
            "whatsapp": "私の目に見える世界は{type}！🎨 あなたは12番の問題の数字が何に見えますか？",
            "telegram": "私の目に見える世界は{type}！🎨 あなたは12番の問題の数字が何に見えますか？",
            "line": "私の目に見える世界は{type}！🎨 あなたは12番の問題の数字が何に見えますか？",
            "startDefault": "私の世界の色は？色盲・色覚異常精密テスト 🎨",
            "startKakao": "私の世界の色は？色盲・色覚異常精密テスト 🎨",
            "startWechat": "私の世界の色は？色盲・色覚異常精密テスト 🎨",
            "startWhatsapp": "私の世界の色は？色盲・色覚異常精密テスト 🎨",
            "startTelegram": "私の世界の色は？色盲・色覚異常精密テスト 🎨",
            "startLine": "私の世界の色は？色盲・色覚異常精密テスト 🎨"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 最近人気のテストおすすめトップ5",
            "popularTestsTop5": "🔥 最近人気のテストおすすめトップ5"
        }
    },
    "zh-CN": {
        "startMessage": {
            "line1": "你看到的红色，对别人来说也是红色吗？",
            "line2": "我国约5.9%的男性和0.4%的女性有色觉异常（色盲/色弱）。",
            "line3": "特别是轻度色弱，很多人直到成年都不知道。",
            "line4": "你是否看到了与别人不同颜色的世界？现在就检查一下吧。",
            "line5": "※ 为了准确检测，请将屏幕亮度调至最大。",
            "line6": "※ 此测试不能代替医学诊断。",
            "line7": "开始测试 👁️ Start Color Test ▶️"
        },
        "ui": {
            "question": "问题",
            "selectAnswer": "选择你看到的数字或形状",
            "nothing": "看不到",
            "next": "下一个",
            "finish": "完成",
            "startTest": "开始测试 👁️ Start Color Test ▶️",
            "characteristics": "特征",
            "recommendation": "推荐",
            "shareResult": "分享结果",
            "linkCopy": "复制链接",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "广告",
            "goToTest": "进行测试"
        },
        "alerts": {
            "linkCopied": "链接已复制！",
            "kakaoInit": "正在初始化KakaoTalk分享功能。请稍后再试。",
            "wechatCopy": "链接已复制！请在微信中粘贴分享。"
        },
        "shareMessages": {
            "default": "我眼中看到的世界是{type}！🎨 你看到第12题的数字是什么？",
            "kakao": "我眼中看到的世界是{type}！🎨 你看到第12题的数字是什么？",
            "wechat": "我眼中看到的世界是{type}！🎨 你看到第12题的数字是什么？",
            "whatsapp": "我眼中看到的世界是{type}！🎨 你看到第12题的数字是什么？",
            "telegram": "我眼中看到的世界是{type}！🎨 你看到第12题的数字是什么？",
            "line": "我眼中看到的世界是{type}！🎨 你看到第12题的数字是什么？",
            "startDefault": "我的世界是什么颜色？色盲/色弱精密测试 🎨",
            "startKakao": "我的世界是什么颜色？色盲/色弱精密测试 🎨",
            "startWechat": "我的世界是什么颜色？色盲/色弱精密测试 🎨",
            "startWhatsapp": "我的世界是什么颜色？色盲/色弱精密测试 🎨",
            "startTelegram": "我的世界是什么颜色？色盲/色弱精密测试 🎨",
            "startLine": "我的世界是什么颜色？色盲/色弱精密测试 🎨"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 热门测试推荐前5",
            "popularTestsTop5": "🔥 热门测试推荐前5"
        }
    },
    "zh-TW": {
        "startMessage": {
            "line1": "你看到的紅色，對別人來說也是紅色嗎？",
            "line2": "我國約5.9%的男性和0.4%的女性有色覺異常（色盲/色弱）。",
            "line3": "特別是輕度色弱，很多人直到成年都不知道。",
            "line4": "你是否看到了與別人不同顏色的世界？現在就檢查一下吧。",
            "line5": "※ 為了準確檢測，請將螢幕亮度調至最大。",
            "line6": "※ 此測試不能代替醫學診斷。",
            "line7": "開始測試 👁️ Start Color Test ▶️"
        },
        "ui": {
            "question": "問題",
            "selectAnswer": "選擇你看到的數字或形狀",
            "nothing": "看不到",
            "next": "下一個",
            "finish": "完成",
            "startTest": "開始測試 👁️ Start Color Test ▶️",
            "characteristics": "特徵",
            "recommendation": "推薦",
            "shareResult": "分享結果",
            "linkCopy": "複製連結",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "微信",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "廣告",
            "goToTest": "進行測試"
        },
        "alerts": {
            "linkCopied": "連結已複製！",
            "kakaoInit": "正在初始化KakaoTalk分享功能。請稍後再試。",
            "wechatCopy": "連結已複製！請在微信中貼上分享。"
        },
        "shareMessages": {
            "default": "我眼中看到的世界是{type}！🎨 你看到第12題的數字是什麼？",
            "kakao": "我眼中看到的世界是{type}！🎨 你看到第12題的數字是什麼？",
            "wechat": "我眼中看到的世界是{type}！🎨 你看到第12題的數字是什麼？",
            "whatsapp": "我眼中看到的世界是{type}！🎨 你看到第12題的數字是什麼？",
            "telegram": "我眼中看到的世界是{type}！🎨 你看到第12題的數字是什麼？",
            "line": "我眼中看到的世界是{type}！🎨 你看到第12題的數字是什麼？",
            "startDefault": "我的世界是什麼顏色？色盲/色弱精密測試 🎨",
            "startKakao": "我的世界是什麼顏色？色盲/色弱精密測試 🎨",
            "startWechat": "我的世界是什麼顏色？色盲/色弱精密測試 🎨",
            "startWhatsapp": "我的世界是什麼顏色？色盲/色弱精密測試 🎨",
            "startTelegram": "我的世界是什麼顏色？色盲/色弱精密測試 🎨",
            "startLine": "我的世界是什麼顏色？色盲/色弱精密測試 🎨"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 熱門測試推薦前5",
            "popularTestsTop5": "🔥 熱門測試推薦前5"
        }
    },
    "vi": {
        "startMessage": {
            "line1": "Màu đỏ bạn nhìn thấy có giống màu đỏ mà người khác nhìn thấy không?",
            "line2": "Khoảng 5.9% nam giới và 0.4% phụ nữ ở nước ta có khiếm khuyết thị giác màu (mù màu/yếu màu).",
            "line3": "Đặc biệt đối với trường hợp yếu màu nhẹ, nhiều người sống mà không biết cho đến khi trưởng thành.",
            "line4": "Bạn có đang nhìn thấy một thế giới màu sắc khác với người khác không? Hãy kiểm tra ngay bây giờ.",
            "line5": "※ Vui lòng tăng độ sáng màn hình lên tối đa để kiểm tra chính xác.",
            "line6": "※ Bài kiểm tra này không thể thay thế chẩn đoán y tế.",
            "line7": "Bắt đầu kiểm tra 👁️ Start Color Test ▶️"
        },
        "ui": {
            "question": "Câu hỏi",
            "selectAnswer": "Chọn số hoặc hình dạng bạn nhìn thấy",
            "nothing": "Không thấy gì",
            "next": "Tiếp theo",
            "finish": "Hoàn thành",
            "startTest": "Bắt đầu kiểm tra 👁️ Start Color Test ▶️",
            "characteristics": "Đặc điểm",
            "recommendation": "Khuyến nghị",
            "shareResult": "Chia sẻ kết quả",
            "linkCopy": "Sao chép liên kết",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Quảng cáo",
            "goToTest": "Làm bài kiểm tra"
        },
        "alerts": {
            "linkCopied": "Đã sao chép liên kết!",
            "kakaoInit": "Đang khởi tạo tính năng chia sẻ KakaoTalk. Vui lòng thử lại sau.",
            "wechatCopy": "Đã sao chép liên kết! Dán vào WeChat để chia sẻ."
        },
        "shareMessages": {
            "default": "Thế giới tôi nhìn thấy là {type}! 🎨 Bạn nhìn thấy số nào ở câu hỏi 12?",
            "kakao": "Thế giới tôi nhìn thấy là {type}! 🎨 Bạn nhìn thấy số nào ở câu hỏi 12?",
            "wechat": "Thế giới tôi nhìn thấy là {type}! 🎨 Bạn nhìn thấy số nào ở câu hỏi 12?",
            "whatsapp": "Thế giới tôi nhìn thấy là {type}! 🎨 Bạn nhìn thấy số nào ở câu hỏi 12?",
            "telegram": "Thế giới tôi nhìn thấy là {type}! 🎨 Bạn nhìn thấy số nào ở câu hỏi 12?",
            "line": "Thế giới tôi nhìn thấy là {type}! 🎨 Bạn nhìn thấy số nào ở câu hỏi 12?",
            "startDefault": "Màu sắc thế giới của tôi là gì? Kiểm tra mù màu/chứng rối loạn sắc giác 🎨",
            "startKakao": "Màu sắc thế giới của tôi là gì? Kiểm tra mù màu/chứng rối loạn sắc giác 🎨",
            "startWechat": "Màu sắc thế giới của tôi là gì? Kiểm tra mù màu/chứng rối loạn sắc giác 🎨",
            "startWhatsapp": "Màu sắc thế giới của tôi là gì? Kiểm tra mù màu/chứng rối loạn sắc giác 🎨",
            "startTelegram": "Màu sắc thế giới của tôi là gì? Kiểm tra mù màu/chứng rối loạn sắc giác 🎨",
            "startLine": "Màu sắc thế giới của tôi là gì? Kiểm tra mù màu/chứng rối loạn sắc giác 🎨"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Top 5 bài kiểm tra phổ biến được đề xuất",
            "popularTestsTop5": "🔥 Top 5 bài kiểm tra phổ biến được đề xuất"
        }
    },
    "id": {
        "startMessage": {
            "line1": "Apakah merah yang Anda lihat sama dengan merah yang dilihat orang lain?",
            "line2": "Sekitar 5.9% pria dan 0.4% wanita di negara kita memiliki defisiensi penglihatan warna (buta warna/kelemahan warna).",
            "line3": "Terutama untuk kelemahan warna ringan, banyak orang hidup tanpa menyadarinya sampai dewasa.",
            "line4": "Apakah Anda melihat dunia warna yang berbeda dari orang lain? Periksa sekarang.",
            "line5": "※ Mohon tingkatkan kecerahan layar ke maksimum untuk pengujian yang akurat.",
            "line6": "※ Tes ini tidak dapat menggantikan diagnosis medis.",
            "line7": "Mulai Tes 👁️ Start Color Test ▶️"
        },
        "ui": {
            "question": "Pertanyaan",
            "selectAnswer": "Pilih angka atau bentuk yang Anda lihat",
            "nothing": "Tidak terlihat",
            "next": "Selanjutnya",
            "finish": "Selesai",
            "startTest": "Mulai Tes 👁️ Start Color Test ▶️",
            "characteristics": "Karakteristik",
            "recommendation": "Rekomendasi",
            "shareResult": "Bagikan Hasil",
            "linkCopy": "Salin Tautan",
            "kakao": "KakaoTalk",
            "telegram": "Telegram",
            "wechat": "WeChat",
            "line": "Line",
            "whatsapp": "WhatsApp",
            "adsenseTitle": "Iklan",
            "goToTest": "Ikuti Tes"
        },
        "alerts": {
            "linkCopied": "Tautan disalin!",
            "kakaoInit": "Menginisialisasi fitur berbagi KakaoTalk. Silakan coba lagi sebentar lagi.",
            "wechatCopy": "Tautan disalin! Tempel di WeChat untuk berbagi."
        },
        "shareMessages": {
            "default": "Dunia yang saya lihat adalah {type}! 🎨 Angka berapa yang Anda lihat di pertanyaan 12?",
            "kakao": "Dunia yang saya lihat adalah {type}! 🎨 Angka berapa yang Anda lihat di pertanyaan 12?",
            "wechat": "Dunia yang saya lihat adalah {type}! 🎨 Angka berapa yang Anda lihat di pertanyaan 12?",
            "whatsapp": "Dunia yang saya lihat adalah {type}! 🎨 Angka berapa yang Anda lihat di pertanyaan 12?",
            "telegram": "Dunia yang saya lihat adalah {type}! 🎨 Angka berapa yang Anda lihat di pertanyaan 12?",
            "line": "Dunia yang saya lihat adalah {type}! 🎨 Angka berapa yang Anda lihat di pertanyaan 12?",
            "startDefault": "Warna Dunia Saya Apa? Tes Buta Warna/Defisiensi Warna 🎨",
            "startKakao": "Warna Dunia Saya Apa? Tes Buta Warna/Defisiensi Warna 🎨",
            "startWechat": "Warna Dunia Saya Apa? Tes Buta Warna/Defisiensi Warna 🎨",
            "startWhatsapp": "Warna Dunia Saya Apa? Tes Buta Warna/Defisiensi Warna 🎨",
            "startTelegram": "Warna Dunia Saya Apa? Tes Buta Warna/Defisiensi Warna 🎨",
            "startLine": "Warna Dunia Saya Apa? Tes Buta Warna/Defisiensi Warna 🎨"
        },
        "recommendations": {
            "similarTestsTop5": "🔥 Rekomendasi Top 5 Tes Populer",
            "popularTestsTop5": "🔥 Rekomendasi Top 5 Tes Populer"
        }
    }
}

# Locale mapping
locale_map = {
    "ko": "ko",
    "en": "en",
    "ja": "ja",
    "zh-CN": "zh-CN",
    "zh-TW": "zh-TW",
    "vi": "vi",
    "id": "id"
}

def update_json_file(file_path, locale_key):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"❌ File not found: {file_path}")
        return False
    except json.JSONDecodeError as e:
        print(f"❌ JSON decode error in {file_path}: {e}")
        return False

    # Add or update phase2ColorBlindTest section
    if 'phase2ColorBlindTest' not in data:
        data['phase2ColorBlindTest'] = {}

    # Update with new translations
    data['phase2ColorBlindTest'] = translations[locale_key]

    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"✅ Updated: {file_path}")
        return True
    except Exception as e:
        print(f"❌ Error writing {file_path}: {e}")
        return False

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    messages_dir = os.path.join(os.path.dirname(script_dir), 'messages')

    success_count = 0
    total_count = len(translations)

    for locale_key in translations.keys():
        file_name = f"{locale_key}.json"
        if locale_key == "zh-CN":
            file_name = "zh-CN.json"
        elif locale_key == "zh-TW":
            file_name = "zh-TW.json"

        file_path = os.path.join(messages_dir, file_name)
        
        if update_json_file(file_path, locale_key):
            success_count += 1

    print(f"\n✅ Successfully updated {success_count}/{total_count} translation files")
    if success_count == total_count:
        print("🎉 All translation files updated successfully!")
    else:
        print("⚠️  Some files failed to update")

if __name__ == '__main__':
    main()

