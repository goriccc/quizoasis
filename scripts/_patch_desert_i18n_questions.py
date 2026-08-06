# -*- coding: utf-8 -*-
"""Patch QUESTIONS into phase3_desert_island_survival_kit_i18n_data.py"""
from __future__ import annotations

import json
from pathlib import Path

path = Path(__file__).resolve().parent / "phase3_desert_island_survival_kit_i18n_data.py"
text = path.read_text(encoding="utf-8")

QUESTIONS = [
    {
        "q": {
            "ko": "[불 피우기] 무인도에서 밤을 버티려면 불이 필요하다. 나는?",
            "en": "[Making fire] You need fire to survive the night on a desert island. What do you do?",
            "ja": "[火起こし] 無人島で夜を越すには火が必要だ。あなたは？",
            "zh-CN": "[生火] 在无人岛过夜需要火。你会？",
            "zh-TW": "[生火] 在無人島過夜需要火。你會？",
            "vi": "[Nhóm lửa] Trên đảo hoang cần lửa để qua đêm. Bạn sẽ?",
            "id": "[Membuat api] Di pulau terpencil butuh api untuk melewati malam. Kamu?",
        },
        "A": {
            "ko": "라이터와 부싯돌을 챙긴다. 불 없이는 하룻밤도 못 버틴다",
            "en": "Pack a lighter and flint. I cannot last a single night without fire",
            "ja": "ライターと火打ち石を持つ。火なしでは一晩も持たない",
            "zh-CN": "带上打火机和燧石。没有火连一晚都撑不住",
            "zh-TW": "帶上打火機和燧石。沒有火連一晚都撐不住",
            "vi": "Mang bật lửa và đá đánh lửa. Không có lửa thì không qua nổi một đêm",
            "id": "Bawa korek api dan batu api. Tanpa api tidak bisa bertahan semalam",
        },
        "B": {
            "ko": "스마트폰 손전등 기능을 쓴다. 배터리가 얼마나 남았는지는 나중에 생각한다",
            "en": "Use my phone flashlight. I will worry about battery later",
            "ja": "スマホのライト機能を使う。バッテリー残量は後で考える",
            "zh-CN": "用手机手电筒。电量剩多少以后再说",
            "zh-TW": "用手機手電筒。電量剩多少以後再說",
            "vi": "Dùng đèn pin trên điện thoại. Pin còn bao nhiêu tính sau",
            "id": "Pakai senter HP. Sisa baterai nanti saja",
        },
    },
    {
        "q": {
            "ko": "[식량 확보] 배가 고파지기 시작했다. 먹을 것을 해결해야 한다. 나는?",
            "en": "[Getting food] You are getting hungry. You need to solve food. What do you do?",
            "ja": "[食料確保] お腹が空いてきた。食べ物を確保しなければならない。あなたは？",
            "zh-CN": "[获取食物] 肚子开始饿了。必须解决吃的。你会？",
            "zh-TW": "[獲取食物] 肚子開始餓了。必須解決吃的。你會？",
            "vi": "[Kiếm thức ăn] Bụng đã đói. Phải giải quyết đồ ăn. Bạn sẽ?",
            "id": "[Mencari makanan] Perut mulai lapar. Harus cari makanan. Kamu?",
        },
        "A": {
            "ko": "낚싯대와 낚싯줄을 챙긴다. 바다가 있으면 굶지 않는다",
            "en": "Pack a fishing rod and line. With the sea, I will not starve",
            "ja": "釣り竿と糸を持つ。海があれば飢えない",
            "zh-CN": "带上鱼竿和鱼线。有海就不会饿死",
            "zh-TW": "帶上釣竿和釣線。有海就不會餓死",
            "vi": "Mang cần câu và dây câu. Có biển thì không đói",
            "id": "Bawa pancing dan senar. Ada laut tidak akan kelaparan",
        },
        "B": {
            "ko": "배달앱을 켠다. 혹시 모른다. 커버리지가 될 수도 있다",
            "en": "Open a delivery app. You never know — maybe there is coverage",
            "ja": "デリバリーアプリを開く。もしかしたら圏内かもしれない",
            "zh-CN": "打开外卖App。说不定有信号呢",
            "zh-TW": "打開外送App。說不定有訊號呢",
            "vi": "Mở app giao đồ ăn. Biết đâu có sóng",
            "id": "Buka app pesan antar. Siapa tahu ada sinyal",
        },
    },
    {
        "q": {
            "ko": "[수면 환경] 밤이 됐다. 모기도 있고 바람도 불고 일단 자야 한다. 나는?",
            "en": "[Sleep setup] Night has come. Mosquitoes, wind — you need sleep. What do you do?",
            "ja": "[睡眠環境] 夜になった。蚊もいて風も吹く。とにかく寝なければならない。あなたは？",
            "zh-CN": "[睡眠环境] 天黑了。有蚊子也有风。总得睡觉。你会？",
            "zh-TW": "[睡眠環境] 天黑了。有蚊子也有風。總得睡覺。你會？",
            "vi": "[Chỗ ngủ] Trời tối rồi. Muỗi, gió — phải ngủ. Bạn sẽ?",
            "id": "[Tempat tidur] Malam tiba. Nyamuk, angin — harus tidur. Kamu?",
        },
        "A": {
            "ko": "방수 텐트를 친다. 비바람과 모기를 막아야 잘 수 있다",
            "en": "Set up a waterproof tent. I need shelter from rain, wind, and mosquitoes",
            "ja": "防水テントを張る。雨風と蚊を防がないと眠れない",
            "zh-CN": "搭防水帐篷。挡雨挡风挡蚊子才能睡",
            "zh-TW": "搭防水帳篷。擋雨擋風擋蚊子才能睡",
            "vi": "Dựng lều chống nước. Phải chặn mưa, gió, muỗi mới ngủ được",
            "id": "Pasang tenda anti air. Harus blok hujan, angin, nyamuk baru bisa tidur",
        },
        "B": {
            "ko": "에어팟을 꽂는다. ASMR 파도 소리 없이는 잠을 못 자는 체질이다",
            "en": "Put in AirPods. I cannot sleep without ASMR ocean sounds",
            "ja": "AirPodsを入れる。ASMRの波の音がないと眠れない体質だ",
            "zh-CN": "戴上AirPods。没有ASMR海浪声就睡不着",
            "zh-TW": "戴上AirPods。沒有ASMR海浪聲就睡不著",
            "vi": "Đeo AirPods. Không có ASMR sóng biển thì không ngủ được",
            "id": "Pasang AirPods. Tanpa ASMR ombak tidak bisa tidur",
        },
    },
    {
        "q": {
            "ko": "[건강 관리] 발을 베었다. 긁힌 상처가 생겼다. 무인도에서 작은 상처가 커질 수 있다. 나는?",
            "en": "[Health care] You cut your foot. A scratch appeared. Small wounds can get worse on a desert island. What do you do?",
            "ja": "[健康管理] 足を切った。擦り傷ができた。無人島では小さな傷も悪化する。あなたは？",
            "zh-CN": "[健康管理] 脚被划伤了。出现擦伤。在无人岛小伤也可能恶化。你会？",
            "zh-TW": "[健康管理] 腳被劃傷了。出現擦傷。在無人島小傷也可能惡化。你會？",
            "vi": "[Chăm sóc sức khỏe] Chân bị cắt, có vết xước. Trên đảo hoang vết nhỏ cũng có thể nặng. Bạn sẽ?",
            "id": "[Perawatan kesehatan] Kaki terluka. Ada goresan. Di pulau terpencil luka kecil bisa memburuk. Kamu?",
        },
        "A": {
            "ko": "구급상자를 꺼낸다. 소독·붕대 처치를 한다. 기본 중의 기본이다",
            "en": "Open a first-aid kit. Disinfect and bandage. Basics of basics",
            "ja": "救急箱を出す。消毒と包帯。基本中の基本だ",
            "zh-CN": "拿出急救箱。消毒包扎。最基本的",
            "zh-TW": "拿出急救箱。消毒包紮。最基本的",
            "vi": "Lấy hộp sơ cứu. Sát trùng và băng bó. Cơ bản nhất",
            "id": "Buka kotak P3K. Disinfeksi dan perban. Dasar banget",
        },
        "B": {
            "ko": "일단 인스타 스토리부터 올린다. 누군가 보고 구조 신청을 해줄 수도 있다",
            "en": "Post an Instagram story first. Someone might see it and call for rescue",
            "ja": "まずインスタのストーリーを上げる。誰かが見て救助を頼んでくれるかも",
            "zh-CN": "先发Instagram快拍。也许有人看到会帮忙求救",
            "zh-TW": "先發Instagram限動。也許有人看到會幫忙求救",
            "vi": "Đăng story Instagram trước. Ai đó thấy có thể gọi cứu hộ",
            "id": "Upload story Instagram dulu. Siapa tahu ada yang lihat dan minta pertolongan",
        },
    },
    {
        "q": {
            "ko": "[구조 요청] 이제 마지막 선택이다. 여기서 나가야 한다. 나는?",
            "en": "[Calling for rescue] This is the last choice. You need to get out. What do you do?",
            "ja": "[救助要請] いよいよ最後の選択だ。ここから出なければならない。あなたは？",
            "zh-CN": "[求救] 现在是最后一个选择。必须离开这里。你会？",
            "zh-TW": "[求救] 現在是最後一個選擇。必須離開這裡。你會？",
            "vi": "[Gọi cứu hộ] Đây là lựa chọn cuối. Phải thoát khỏi đây. Bạn sẽ?",
            "id": "[Minta pertolongan] Ini pilihan terakhir. Harus keluar dari sini. Kamu?",
        },
        "A": {
            "ko": "위성 구조 신호기를 작동시킨다. 이것 하나로 모든 것이 해결된다",
            "en": "Activate a satellite rescue beacon. This one thing solves everything",
            "ja": "衛星救助ビーコンを作動させる。これ一つですべて解決する",
            "zh-CN": "启动卫星求救信标。这一件就能解决一切",
            "zh-TW": "啟動衛星求救信標。這一件就能解決一切",
            "vi": "Bật thiết bị cứu hộ vệ tinh. Một thứ này giải quyết mọi thứ",
            "id": "Aktifkan beacon penyelamatan satelit. Satu ini menyelesaikan semuanya",
        },
        "B": {
            "ko": '모래사장에 "HELP" 대신 가장 좋아하는 음식 이름을 크게 쓴다. 구조대가 보고 감동받을 것이다',
            "en": 'Write your favorite food name huge in the sand instead of "HELP". Rescue will be moved',
            "ja": "砂浜に「HELP」の代わりに好きな食べ物の名前を大きく書く。救助隊が感動するはずだ",
            "zh-CN": '在沙滩上不写"HELP"，而是写最爱食物的名字。救援队会被感动',
            "zh-TW": '在沙灘上不寫"HELP"，而是寫最愛食物的名字。救援隊會被感動',
            "vi": 'Viết tên món ăn yêu thích thật to trên cát thay vì "HELP". Đội cứu hộ sẽ xúc động',
            "id": 'Tulis nama makanan favorit besar-besar di pasir, bukan "HELP". Tim penyelamat pasti terharu',
        },
    },
]

text = text.replace("# PLACEHOLDER_QUESTIONS", "QUESTIONS = " + json.dumps(QUESTIONS, ensure_ascii=False, indent=2))
path.write_text(text, encoding="utf-8")
print("questions ok")
