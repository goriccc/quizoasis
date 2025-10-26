export interface QuickDecisionQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface QuickDecisionResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult: string[];
  };
}

export const quickDecisionQuestions: QuickDecisionQuestion[] = [
  {
    id: 1,
    question: {
      ko: "길을 걷다가 아이가 차도로 뛰어나가려는 순간을 목격했습니다. 당신은?",
      en: "You see a child about to run into the road. What do you do?",
      ja: "道を歩いていると、子供が車道に飛び出そうとしている瞬間を目撃しました。あなたは？",
      'zh-CN': "你看到孩子要跑到车道上。你会怎么做？",
      'zh-TW': "你看到孩子要跑到車道上。你會怎麼做？",
      id: "Anda melihat seorang anak akan berlari ke jalan raya. Apa yang Anda lakukan?",
      vi: "Bạn thấy một đứa trẻ sắp chạy ra đường. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 뛰어가서 아이를 붙잡음",
          en: "Immediately run to grab the child",
          ja: "すぐに走って子供を捕まえる",
          'zh-CN': "立即跑过去抓住孩子",
          'zh-TW': "立即跑過去抓住孩子",
          id: "Segera berlari untuk menangkap anak",
          vi: "Ngay lập tức chạy đến bắt đứa trẻ"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "큰 소리로 \"위험해!\"라고 외침",
          en: "Shout \"Danger!\" loudly",
          ja: "大声で「危険！」と叫ぶ",
          'zh-CN': "大声喊\"危险！\"",
          'zh-TW': "大聲喊「危險！」",
          id: "Berteriak \"Bahaya!\" dengan keras",
          vi: "Hét to \"Nguy hiểm!\""
        },
        scores: { Type2: 2 }
      },
      {
        text: {
          ko: "주변 어른을 찾아 알림",
          en: "Look for nearby adults to alert",
          ja: "周りの大人を探して知らせる",
          'zh-CN': "寻找附近的大人告知",
          'zh-TW': "尋找附近的大人告知",
          id: "Mencari orang dewasa di sekitar untuk memberi tahu",
          vi: "Tìm người lớn gần đó để báo"
        },
        scores: { Type5: 8, Type3: 2, Type4: 2 }
      },
      {
        text: {
          ko: "잠시 당황해서 멈칫함",
          en: "Freeze in panic for a moment",
          ja: "しばらく当惑して立ち止まる",
          'zh-CN': "一时惊慌失措",
          'zh-TW': "一時驚慌失措",
          id: "Beku dalam kepanikan sejenak",
          vi: "Đóng băng trong hoảng sợ một lúc"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "프레젠테이션 중 갑자기 파일이 열리지 않습니다. 당신의 반응은?",
      en: "Suddenly your presentation file won't open. Your reaction?",
      ja: "プレゼンテーション中に突然ファイルが開きません。あなたの反応は？",
      'zh-CN': "演示中文件突然打不开。你的反应是？",
      'zh-TW': "演示中檔案突然打不開。你的反應是？",
      id: "Tiba-tiba file presentasi tidak bisa dibuka. Reaksi Anda?",
      vi: "Đột nhiên file thuyết trình không mở được. Phản ứng của bạn?"
    },
    options: [
      {
        text: {
          ko: "즉시 구두로 설명 시작",
          en: "Immediately start explaining verbally",
          ja: "すぐに口頭で説明を始める",
          'zh-CN': "立即开始口头说明",
          'zh-TW': "立即開始口頭說明",
          id: "Segera mulai menjelaskan secara lisan",
          vi: "Ngay lập tức bắt đầu giải thích bằng lời"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "침착하게 재부팅 시도",
          en: "Calmly try rebooting",
          ja: "冷静に再起動を試す",
          'zh-CN': "冷静地尝试重启",
          'zh-TW': "冷靜地嘗試重啟",
          id: "Dengan tenang mencoba reboot",
          vi: "Bình tĩnh thử khởi động lại"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "청중에게 양해 구하고 천천히 해결",
          en: "Ask audience for patience and solve slowly",
          ja: "聴衆に理解を求めてゆっくり解決",
          'zh-CN': "请观众谅解并慢慢解决",
          'zh-TW': "請觀眾諒解並慢慢解決",
          id: "Minta maaf pada audiens dan selesaikan perlahan",
          vi: "Xin lỗi khán giả và giải quyết từ từ"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "당황해서 말이 막힘",
          en: "Freeze in panic, speechless",
          ja: "当惑して言葉に詰まる",
          'zh-CN': "惊慌失措说不出话",
          'zh-TW': "驚慌失措說不出話",
          id: "Panik dan tidak bisa bicara",
          vi: "Hoảng sợ và không nói được"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "친구가 넘어져 다쳤습니다. 당신은?",
      en: "Your friend fell and got hurt. What do you do?",
      ja: "友達が転んでけがをしました。あなたは？",
      'zh-CN': "朋友摔倒受伤了。你会怎么做？",
      'zh-TW': "朋友摔倒受傷了。你會怎麼做？",
      id: "Teman Anda jatuh dan terluka. Apa yang Anda lakukan?",
      vi: "Bạn của bạn ngã và bị thương. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 다가가 응급처치",
          en: "Immediately approach for first aid",
          ja: "すぐに駆け寄って応急処置",
          'zh-CN': "立即上前急救",
          'zh-TW': "立即上前急救",
          id: "Segera mendekati untuk pertolongan pertama",
          vi: "Ngay lập tức đến để sơ cứu"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "상태 확인 후 119 신고",
          en: "Check condition then call 119",
          ja: "状態確認後119番通報",
          'zh-CN': "确认状态后拨打119",
          'zh-TW': "確認狀態後撥打119",
          id: "Periksa kondisi lalu telepon 119",
          vi: "Kiểm tra tình trạng rồi gọi 119"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "주변에 도움 요청",
          en: "Ask for help from nearby people",
          ja: "周りに助けを求める",
          'zh-CN': "向周围求助",
          'zh-TW': "向周圍求助",
          id: "Minta bantuan dari orang sekitar",
          vi: "Xin sự giúp đỡ từ những người xung quanh"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "어떻게 해야 할지 고민",
          en: "Worry about what to do",
          ja: "どうすべきか悩む",
          'zh-CN': "担心该怎么做",
          'zh-TW': "擔心該怎麼做",
          id: "Bingung harus berbuat apa",
          vi: "Lo lắng không biết phải làm gì"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "식당에서 음식을 주문하는데 메뉴판을 보자마자?",
      en: "At a restaurant, as soon as you see the menu?",
      ja: "レストランで料理を注文する時、メニューを見た瞬間？",
      'zh-CN': "在餐厅点餐时，一看到菜单？",
      'zh-TW': "在餐廳點餐時，一看到菜單？",
      id: "Di restoran memesan makanan, begitu melihat menu?",
      vi: "Ở nhà hàng gọi món, ngay khi nhìn thấy menu?"
    },
    options: [
      {
        text: {
          ko: "5초 안에 결정",
          en: "Decide within 5 seconds",
          ja: "5秒以内に決定",
          'zh-CN': "5秒内决定",
          'zh-TW': "5秒內決定",
          id: "Putuskan dalam 5 detik",
          vi: "Quyết định trong 5 giây"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "1-2분 고민 후 결정",
          en: "Think for 1-2 minutes then decide",
          ja: "1-2分悩んでから決定",
          'zh-CN': "思考1-2分钟后决定",
          'zh-TW': "思考1-2分鐘後決定",
          id: "Berpikir 1-2 menit lalu putuskan",
          vi: "Suy nghĩ 1-2 phút rồi quyết định"
        },
        scores: { Type2: 8, Type3: 8 }
      },
      {
        text: {
          ko: "추천 메뉴 물어보고 결정",
          en: "Ask for recommendations then decide",
          ja: "おすすめを聞いてから決定",
          'zh-CN': "询问推荐后决定",
          'zh-TW': "詢問推薦後決定",
          id: "Tanya rekomendasi lalu putuskan",
          vi: "Hỏi gợi ý rồi quyết định"
        },
        scores: { Type4: 8 }
      },
      {
        text: {
          ko: "오래 고민하거나 다른 사람 따라 주문",
          en: "Think for a long time or follow others",
          ja: "長く悩むか他の人に合わせて注文",
          'zh-CN': "长时间思考或跟着别人点",
          'zh-TW': "長時間思考或跟著別人點",
          id: "Berpikir lama atau ikut orang lain",
          vi: "Suy nghĩ lâu hoặc theo người khác"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "갑자기 비가 쏟아지는데 우산이 없습니다. 당신은?",
      en: "Suddenly it's pouring rain and you have no umbrella. What do you do?",
      ja: "突然雨が降り出したのに傘がありません。あなたは？",
      'zh-CN': "突然下大雨但没有伞。你会怎么做？",
      'zh-TW': "突然下大雨但沒有傘。你會怎麼做？",
      id: "Tiba-tiba hujan deras tapi tidak ada payung. Apa yang Anda lakukan?",
      vi: "Đột nhiên mưa to nhưng không có ô. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 뛰어감",
          en: "Immediately start running",
          ja: "すぐに走る",
          'zh-CN': "立即跑起来",
          'zh-TW': "立即跑起來",
          id: "Segera berlari",
          vi: "Ngay lập tức chạy"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "잠시 기다렸다가 약해지면 이동",
          en: "Wait a bit, then move when it gets lighter",
          ja: "少し待って弱くなったら移動",
          'zh-CN': "等一会儿，雨小点再走",
          'zh-TW': "等一會兒，雨小點再走",
          id: "Tunggu sebentar, lalu pindah saat hujan reda",
          vi: "Chờ một chút, rồi di chuyển khi mưa nhẹ hơn"
        },
        scores: { Type2: 2, Type3: 8 }
      },
      {
        text: {
          ko: "편의점 들어가서 우산 구매",
          en: "Go into convenience store to buy umbrella",
          ja: "コンビニに入って傘を購入",
          'zh-CN': "进便利店买伞",
          'zh-TW': "進便利店買傘",
          id: "Masuk minimarket untuk beli payung",
          vi: "Vào cửa hàng tiện lợi mua ô"
        },
        scores: { Type4: 8, Type5: 8 }
      },
      {
        text: {
          ko: "멈춰서 비가 그칠 때까지 대기",
          en: "Stop and wait until rain stops",
          ja: "止まって雨が止むまで待つ",
          'zh-CN': "停下来等雨停",
          'zh-TW': "停下來等雨停",
          id: "Berhenti dan tunggu sampai hujan berhenti",
          vi: "Dừng lại và chờ đến khi mưa tạnh"
        },
        scores: { Type6: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "회의 중 갑자기 의견을 물어봅니다. 당신은?",
      en: "Suddenly asked for your opinion during a meeting. What do you do?",
      ja: "会議中に突然意見を求められました。あなたは？",
      'zh-CN': "会议中突然被问意见。你会怎么做？",
      'zh-TW': "會議中突然被問意見。你會怎麼做？",
      id: "Tiba-tiba diminta pendapat saat rapat. Apa yang Anda lakukan?",
      vi: "Đột nhiên được hỏi ý kiến trong cuộc họp. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 생각나는 대로 말함",
          en: "Immediately say what comes to mind",
          ja: "すぐに思いついたことを言う",
          'zh-CN': "立即说出想到的",
          'zh-TW': "立即說出想到的",
          id: "Segera katakan apa yang terpikir",
          vi: "Ngay lập tức nói những gì nghĩ được"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "3초 정리 후 간단히 답변",
          en: "Organize for 3 seconds then answer briefly",
          ja: "3秒整理してから簡潔に答える",
          'zh-CN': "整理3秒后简要回答",
          'zh-TW': "整理3秒後簡要回答",
          id: "Atur 3 detik lalu jawab singkat",
          vi: "Sắp xếp 3 giây rồi trả lời ngắn gọn"
        },
        scores: { Type2: 8, Type3: 8 }
      },
      {
        text: {
          ko: "\"잠깐만요\" 하고 생각할 시간 요청",
          en: "Say \"Wait\" and ask for thinking time",
          ja: "「ちょっと待って」と言って考える時間を求める",
          'zh-CN': "说\"等一下\"并请求思考时间",
          'zh-TW': "說「等一下」並請求思考時間",
          id: "Bilang \"Tunggu\" dan minta waktu berpikir",
          vi: "Nói \"Đợi chút\" và xin thời gian suy nghĩ"
        },
        scores: { Type4: 8 }
      },
      {
        text: {
          ko: "\"잘 모르겠습니다\" 또는 침묵",
          en: "Say \"I don't know\" or stay silent",
          ja: "「よく分かりません」または沈黙",
          'zh-CN': "说\"不知道\"或保持沉默",
          'zh-TW': "說「不知道」或保持沉默",
          id: "Bilang \"Tidak tahu\" atau diam",
          vi: "Nói \"Không biết\" hoặc im lặng"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "엘리베이터 문이 닫히는데 사람이 뛰어옵니다. 당신은?",
      en: "Elevator door is closing but someone is running toward it. What do you do?",
      ja: "エレベーターの扉が閉まろうとしているのに人が走って来ています。あなたは？",
      'zh-CN': "电梯门要关了但有人跑过来。你会怎么做？",
      'zh-TW': "電梯門要關了但有人跑過來。你會怎麼做？",
      id: "Pintu lift mau tutup tapi ada orang berlari ke arahnya. Apa yang Anda lakukan?",
      vi: "Cửa thang máy sắp đóng nhưng có người chạy đến. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "반사적으로 문 열림 버튼",
          en: "Reflexively press the open button",
          ja: "反射的に扉開きボタンを押す",
          'zh-CN': "反射性地按开门按钮",
          'zh-TW': "反射性地按開門按鈕",
          id: "Refleks menekan tombol buka",
          vi: "Phản xạ nhấn nút mở cửa"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "잠깐 고민 후 버튼",
          en: "Think briefly then press button",
          ja: "少し考えてからボタンを押す",
          'zh-CN': "稍作思考后按按钮",
          'zh-TW': "稍作思考後按按鈕",
          id: "Berpikir sebentar lalu tekan tombol",
          vi: "Suy nghĩ một chút rồi nhấn nút"
        },
        scores: { Type2: 8, Type3: 8 }
      },
      {
        text: {
          ko: "상황 보고 판단",
          en: "Assess the situation then decide",
          ja: "状況を見て判断",
          'zh-CN': "观察情况后判断",
          'zh-TW': "觀察情況後判斷",
          id: "Lihat situasi lalu putuskan",
          vi: "Đánh giá tình huống rồi quyết định"
        },
        scores: { Type4: 8 }
      },
      {
        text: {
          ko: "그냥 닫히게 둠",
          en: "Just let it close",
          ja: "そのまま閉まるに任せる",
          'zh-CN': "就让它关上",
          'zh-TW': "就讓它關上",
          id: "Biarkan saja tutup",
          vi: "Cứ để nó đóng"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "온라인 쇼핑 타임세일, 5분 남았습니다. 당신은?",
      en: "Online shopping flash sale, 5 minutes left. What do you do?",
      ja: "オンラインショッピングのタイムセール、残り5分。あなたは？",
      'zh-CN': "网购限时抢购，还剩5分钟。你会怎么做？",
      'zh-TW': "網購限時搶購，還剩5分鐘。你會怎麼做？",
      id: "Flash sale belanja online, sisa 5 menit. Apa yang Anda lakukan?",
      vi: "Flash sale mua sắm online, còn 5 phút. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 구매 클릭",
          en: "Immediately click buy",
          ja: "すぐに購入をクリック",
          'zh-CN': "立即点击购买",
          'zh-TW': "立即點擊購買",
          id: "Segera klik beli",
          vi: "Ngay lập tức nhấn mua"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "빠르게 후기 확인 후 구매",
          en: "Quickly check reviews then buy",
          ja: "素早くレビューを確認してから購入",
          'zh-CN': "快速查看评价后购买",
          'zh-TW': "快速查看評價後購買",
          id: "Cepat cek review lalu beli",
          vi: "Nhanh chóng xem đánh giá rồi mua"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "필요한지 고민하다 놓침",
          en: "Think if needed and miss it",
          ja: "必要か悩んで見逃す",
          'zh-CN': "思考是否需要结果错过了",
          'zh-TW': "思考是否需要結果錯過了",
          id: "Berpikir perlu atau tidak lalu kehilangan",
          vi: "Suy nghĩ có cần không rồi bỏ lỡ"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "다음 기회에 하자고 포기",
          en: "Give up and say next time",
          ja: "次の機会にしようと諦める",
          'zh-CN': "放弃说下次吧",
          'zh-TW': "放棄說下次吧",
          id: "Menyerah dan bilang lain kali",
          vi: "Bỏ cuộc và nói lần sau"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "친구가 갑자기 여행 가자고 합니다. 내일 출발! 당신은?",
      en: "Friend suddenly suggests a trip. Leaving tomorrow! What do you do?",
      ja: "友達が突然旅行を提案。明日出発！あなたは？",
      'zh-CN': "朋友突然提议旅行。明天出发！你会怎么做？",
      'zh-TW': "朋友突然提議旅行。明天出發！你會怎麼做？",
      id: "Teman tiba-tiba ajak jalan-jalan. Berangkat besok! Apa yang Anda lakukan?",
      vi: "Bạn đột nhiên rủ đi du lịch. Ngày mai đi! Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "\"좋아!\" 즉시 수락",
          en: "\"Great!\" immediately accept",
          ja: "「いいね！」すぐに承諾",
          'zh-CN': "\"好！\"立即接受",
          'zh-TW': "「好！」立即接受",
          id: "\"Bagus!\" langsung terima",
          vi: "\"Tuyệt!\" ngay lập tức chấp nhận"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "일정 확인 후 빠르게 결정",
          en: "Check schedule then decide quickly",
          ja: "スケジュール確認後素早く決定",
          'zh-CN': "确认日程后快速决定",
          'zh-TW': "確認日程後快速決定",
          id: "Cek jadwal lalu putuskan cepat",
          vi: "Kiểm tra lịch rồi quyết định nhanh"
        },
        scores: { Type2: 8, Type3: 8 }
      },
      {
        text: {
          ko: "여러 가지 따져보고 천천히 결정",
          en: "Consider various factors and decide slowly",
          ja: "色々考えてゆっくり決定",
          'zh-CN': "考虑各种因素慢慢决定",
          'zh-TW': "考慮各種因素慢慢決定",
          id: "Pertimbangkan berbagai hal dan putuskan perlahan",
          vi: "Cân nhắc nhiều yếu tố và quyết định từ từ"
        },
        scores: { Type4: 8 }
      },
      {
        text: {
          ko: "\"갑자기는...\" 거절하거나 망설임",
          en: "\"So sudden...\" refuse or hesitate",
          ja: "「急すぎる...」断るか躊躇",
          'zh-CN': "\"太突然了...\"拒绝或犹豫",
          'zh-TW': "「太突然了...」拒絕或猶豫",
          id: "\"Tiba-tiba...\" tolak atau ragu",
          vi: "\"Đột ngột quá...\" từ chối hoặc do dự"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "횡단보도 신호가 깜빡입니다. 당신은?",
      en: "Crosswalk signal is blinking. What do you do?",
      ja: "横断歩道の信号が点滅しています。あなたは？",
      'zh-CN': "人行横道信号灯在闪烁。你会怎么做？",
      'zh-TW': "人行橫道信號燈在閃爍。你會怎麼做？",
      id: "Lampu penyeberangan berkedip. Apa yang Anda lakukan?",
      vi: "Đèn giao thông nhấp nháy. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "빠르게 뛰어서 건넘",
          en: "Quickly run across",
          ja: "素早く走って渡る",
          'zh-CN': "快速跑过去",
          'zh-TW': "快速跑過去",
          id: "Cepat lari menyeberang",
          vi: "Nhanh chóng chạy qua"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "빠른 걸음으로 건넘",
          en: "Walk quickly across",
          ja: "早足で渡る",
          'zh-CN': "快步走过去",
          'zh-TW': "快步走過去",
          id: "Berjalan cepat menyeberang",
          vi: "Đi bộ nhanh qua"
        },
        scores: { Type2: 8, Type3: 2 }
      },
      {
        text: {
          ko: "다음 신호 기다림",
          en: "Wait for next signal",
          ja: "次の信号を待つ",
          'zh-CN': "等下一个信号",
          'zh-TW': "等下一個信號",
          id: "Tunggu sinyal berikutnya",
          vi: "Chờ tín hiệu tiếp theo"
        },
        scores: { Type4: 8, Type5: 2 }
      },
      {
        text: {
          ko: "망설이다가 못 건너거나 어정쩡하게",
          en: "Hesitate and can't cross or awkwardly",
          ja: "躊躇して渡れないか中途半端に",
          'zh-CN': "犹豫不决过不去或尴尬地",
          'zh-TW': "猶豫不決過不去或尷尬地",
          id: "Ragu-ragu dan tidak bisa menyeberang atau canggung",
          vi: "Do dự không qua được hoặc lúng túng"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "카페에서 음료를 잘못 받았습니다. 당신은?",
      en: "You received the wrong drink at a cafe. What do you do?",
      ja: "カフェで間違った飲み物を受け取りました。あなたは？",
      'zh-CN': "在咖啡厅收到了错误的饮料。你会怎么做？",
      'zh-TW': "在咖啡廳收到了錯誤的飲料。你會怎麼做？",
      id: "Di kafe dapat minuman yang salah. Apa yang Anda lakukan?",
      vi: "Ở quán cà phê nhận nhầm đồ uống. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 직원에게 말함",
          en: "Immediately tell staff",
          ja: "すぐにスタッフに言う",
          'zh-CN': "立即告诉员工",
          'zh-TW': "立即告訴員工",
          id: "Segera bilang ke staff",
          vi: "Ngay lập tức nói với nhân viên"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "잠깐 확인 후 교환 요청",
          en: "Check briefly then request exchange",
          ja: "少し確認してから交換を依頼",
          'zh-CN': "稍作确认后要求更换",
          'zh-TW': "稍作確認後要求更換",
          id: "Cek sebentar lalu minta ganti",
          vi: "Kiểm tra một chút rồi yêu cầu đổi"
        },
        scores: { Type2: 8, Type3: 8 }
      },
      {
        text: {
          ko: "괜찮으면 그냥 마심",
          en: "Drink it if it's okay",
          ja: "大丈夫ならそのまま飲む",
          'zh-CN': "如果还行就喝掉",
          'zh-TW': "如果還行就喝掉",
          id: "Minum saja kalau tidak apa-apa",
          vi: "Uống luôn nếu không sao"
        },
        scores: { Type5: 8, Type4: 2 }
      },
      {
        text: {
          ko: "망설이다가 그냥 마심",
          en: "Hesitate then just drink it",
          ja: "躊躇してからそのまま飲む",
          'zh-CN': "犹豫后还是喝掉",
          'zh-TW': "猶豫後還是喝掉",
          id: "Ragu-ragu lalu minum saja",
          vi: "Do dự rồi uống luôn"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "불이 났다는 화재경보가 울립니다. 당신은?",
      en: "Fire alarm goes off saying there's a fire. What do you do?",
      ja: "火事の火災警報が鳴っています。あなたは？",
      'zh-CN': "火灾警报响起说着火了。你会怎么做？",
      'zh-TW': "火災警報響起說著火了。你會怎麼做？",
      id: "Alarm kebakaran berbunyi mengatakan ada api. Apa yang Anda lakukan?",
      vi: "Chuông báo cháy kêu báo có lửa. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 비상구로 대피",
          en: "Immediately evacuate to emergency exit",
          ja: "すぐに非常口に避難",
          'zh-CN': "立即向紧急出口疏散",
          'zh-TW': "立即向緊急出口疏散",
          id: "Segera evakuasi ke pintu darurat",
          vi: "Ngay lập tức sơ tán đến lối thoát hiểm"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "상황 확인 후 빠르게 대피",
          en: "Check situation then evacuate quickly",
          ja: "状況確認後素早く避難",
          'zh-CN': "确认情况后快速疏散",
          'zh-TW': "確認情況後快速疏散",
          id: "Cek situasi lalu evakuasi cepat",
          vi: "Kiểm tra tình huống rồi sơ tán nhanh"
        },
        scores: { Type2: 8, Type3: 8 }
      },
      {
        text: {
          ko: "주변 사람들 따라 이동",
          en: "Follow people around you",
          ja: "周りの人に合わせて移動",
          'zh-CN': "跟着周围的人移动",
          'zh-TW': "跟著周圍的人移動",
          id: "Ikuti orang di sekitar",
          vi: "Theo những người xung quanh"
        },
        scores: { Type4: 2, Type5: 2 }
      },
      {
        text: {
          ko: "진짜인지 확인하려고 망설임",
          en: "Hesitate to check if it's real",
          ja: "本当か確認しようと躊躇",
          'zh-CN': "犹豫着确认是否真实",
          'zh-TW': "猶豫著確認是否真實",
          id: "Ragu-ragu untuk cek apakah benar",
          vi: "Do dự kiểm tra xem có thật không"
        },
        scores: { Type6: 8 }
      }
    ]
  }
];

export const quickDecisionResults: QuickDecisionResult[] = [
  {
    type: "Type1",
    emoji: "⚡",
    title: {
      ko: "번개 반사신경형",
      en: "Lightning Reflex Type",
      ja: "稲妻反射神経型",
      'zh-CN': "闪电反射型",
      'zh-TW': "閃電反射型",
      id: "Tipe Refleks Kilat",
      vi: "Kiểu Phản Xạ Sét"
    },
    description: {
      ko: "0.1초의 판단! 초고속 의사결정의 달인",
      en: "0.1 second judgment! Master of ultra-fast decision making",
      ja: "0.1秒の判断！超高速意思決定の達人",
      'zh-CN': "0.1秒的判断！超高速决策大师",
      'zh-TW': "0.1秒的判斷！超高速決策大師",
      id: "Penilaian 0.1 detik! Master pengambilan keputusan super cepat",
      vi: "Phán đoán 0.1 giây! Bậc thầy quyết định siêu nhanh"
    },
    longDescription: {
      ko: "생각보다 행동이 빠릅니다! 위기 상황에서 즉각적으로 반응하며 주저함 없이 결정합니다. 직관적 판단이 뛰어나고 행동력이 탁월합니다. 긴급 상황에서 리더 역할을 자연스럽게 맡으며, 빠른 대응으로 문제를 해결합니다. 군인, 소방관, 응급구조사에게 필요한 능력입니다.\n\n장점: 빠른 반응, 행동력, 위기 대응, 리더십\n단점: 충동적, 실수 가능, 신중함 부족\n추천 직업: 응급의료, 소방관, 군인, 스포츠, 트레이더\n조언: 가끔은 한 템포 쉬어가세요. 모든 상황이 긴급한 것은 아닙니다!",
      en: "You act faster than you think! You react instantly in crisis situations and make decisions without hesitation. Your intuitive judgment is excellent and your action power is outstanding. You naturally take on leadership roles in emergency situations and solve problems with quick responses. This is an ability needed for soldiers, firefighters, and emergency responders.\n\nStrengths: Quick response, action power, crisis response, leadership\nWeaknesses: Impulsive, prone to mistakes, lack of caution\nRecommended jobs: Emergency medical, firefighter, soldier, sports, trader\nAdvice: Sometimes take a step back. Not every situation is urgent!",
      ja: "考えるより行動が速い！危機状況で即座に反応し、躊躇なく決定します。直感的判断が優れており、行動力が卓越しています。緊急事態で自然にリーダー役を務め、迅速な対応で問題を解決します。軍人、消防士、救急隊員に必要な能力です。\n\n長所：迅速な反応、行動力、危機対応、リーダーシップ\n短所：衝動的、ミスの可能性、慎重さの欠如\n推奨職業：救急医療、消防士、軍人、スポーツ、トレーダー\nアドバイス：時には一歩下がってください。すべての状況が緊急ではありません！",
      'zh-CN': "行动比思考更快！在危机情况下立即反应，毫不犹豫地做决定。直觉判断出色，行动力卓越。在紧急情况下自然承担领导角色，通过快速应对解决问题。这是军人、消防员、急救人员需要的能力。\n\n优点：快速反应、行动力、危机应对、领导力\n缺点：冲动、可能犯错、缺乏谨慎\n推荐职业：急救医疗、消防员、军人、体育、交易员\n建议：有时要放慢脚步。不是所有情况都紧急！",
      'zh-TW': "行動比思考更快！在危機情況下立即反應，毫不猶豫地做決定。直覺判斷出色，行動力卓越。在緊急情況下自然承擔領導角色，通過快速應對解決問題。這是軍人、消防員、急救人員需要的能力。\n\n優點：快速反應、行動力、危機應對、領導力\n缺點：衝動、可能犯錯、缺乏謹慎\n推薦職業：急救醫療、消防員、軍人、體育、交易員\n建議：有時要放慢腳步。不是所有情況都緊急！",
      id: "Bertindak lebih cepat dari berpikir! Bereaksi instan dalam situasi krisis dan membuat keputusan tanpa ragu. Penilaian intuitif Anda sangat baik dan kekuatan aksi Anda luar biasa. Secara alami mengambil peran kepemimpinan dalam situasi darurat dan menyelesaikan masalah dengan respons cepat. Ini adalah kemampuan yang dibutuhkan tentara, pemadam kebakaran, dan petugas darurat.\n\nKelebihan: Respons cepat, kekuatan aksi, respons krisis, kepemimpinan\nKekurangan: Impulsif, kemungkinan kesalahan, kurang hati-hati\nPekerjaan yang direkomendasikan: Medis darurat, pemadam kebakaran, tentara, olahraga, trader\nSaran: Kadang-kadang mundur selangkah. Tidak semua situasi mendesak!",
      vi: "Hành động nhanh hơn suy nghĩ! Phản ứng ngay lập tức trong tình huống khủng hoảng và đưa ra quyết định không do dự. Phán đoán trực giác xuất sắc và sức mạnh hành động vượt trội. Tự nhiên đảm nhận vai trò lãnh đạo trong tình huống khẩn cấp và giải quyết vấn đề bằng phản ứng nhanh. Đây là khả năng cần thiết cho binh lính, lính cứu hỏa và nhân viên cấp cứu.\n\nƯu điểm: Phản ứng nhanh, sức mạnh hành động, ứng phó khủng hoảng, lãnh đạo\nNhược điểm: Bốc đồng, có thể mắc lỗi, thiếu thận trọng\nNghề nghiệp được khuyến nghị: Y tế khẩn cấp, lính cứu hỏa, binh lính, thể thao, trader\nLời khuyên: Đôi khi hãy lùi một bước. Không phải mọi tình huống đều khẩn cấp!"
    },
    pros: [
      {
        ko: "빠른 반응",
        en: "Quick response",
        ja: "迅速な反応",
        'zh-CN': "快速反应",
        'zh-TW': "快速反應",
        id: "Respons cepat",
        vi: "Phản ứng nhanh"
      },
      {
        ko: "행동력",
        en: "Action power",
        ja: "行動力",
        'zh-CN': "行动力",
        'zh-TW': "行動力",
        id: "Kekuatan aksi",
        vi: "Sức mạnh hành động"
      },
      {
        ko: "위기 대응",
        en: "Crisis response",
        ja: "危機対応",
        'zh-CN': "危机应对",
        'zh-TW': "危機應對",
        id: "Respons krisis",
        vi: "Ứng phó khủng hoảng"
      },
      {
        ko: "리더십",
        en: "Leadership",
        ja: "リーダーシップ",
        'zh-CN': "领导力",
        'zh-TW': "領導力",
        id: "Kepemimpinan",
        vi: "Lãnh đạo"
      }
    ],
    cons: [
      {
        ko: "충동적",
        en: "Impulsive",
        ja: "衝動的",
        'zh-CN': "冲动",
        'zh-TW': "衝動",
        id: "Impulsif",
        vi: "Bốc đồng"
      },
      {
        ko: "실수 가능",
        en: "Prone to mistakes",
        ja: "ミスの可能性",
        'zh-CN': "可能犯错",
        'zh-TW': "可能犯錯",
        id: "Kemungkinan kesalahan",
        vi: "Có thể mắc lỗi"
      },
      {
        ko: "신중함 부족",
        en: "Lack of caution",
        ja: "慎重さの欠如",
        'zh-CN': "缺乏谨慎",
        'zh-TW': "缺乏謹慎",
        id: "Kurang hati-hati",
        vi: "Thiếu thận trọng"
      }
    ],
    advice: {
      ko: "가끔은 한 템포 쉬어가세요. 모든 상황이 긴급한 것은 아닙니다!",
      en: "Sometimes take a step back. Not every situation is urgent!",
      ja: "時には一歩下がってください。すべての状況が緊急ではありません！",
      'zh-CN': "有时要放慢脚步。不是所有情况都紧急！",
      'zh-TW': "有時要放慢腳步。不是所有情況都緊急！",
      id: "Kadang-kadang mundur selangkah. Tidak semua situasi mendesak!",
      vi: "Đôi khi hãy lùi một bước. Không phải mọi tình huống đều khẩn cấp!"
    },
    compatibility: {
      best: ["Type2"],
      good: [],
      careful: ["Type5"],
      difficult: []
    }
  },
  {
    type: "Type2",
    emoji: "💨",
    title: {
      ko: "빠른 직관형",
      en: "Quick Intuitive Type",
      ja: "素早い直感型",
      'zh-CN': "快速直觉型",
      'zh-TW': "快速直覺型",
      id: "Tipe Intuitif Cepat",
      vi: "Kiểu Trực Giác Nhanh"
    },
    description: {
      ko: "3초의 판단! 직관과 경험으로 빠르게 결정하는 실행가",
      en: "3 second judgment! Executor who makes quick decisions with intuition and experience",
      ja: "3秒の判断！直感と経験で素早く決定する実行家",
      'zh-CN': "3秒的判断！用直觉和经验快速决定的执行者",
      'zh-TW': "3秒的判斷！用直覺和經驗快速決定的執行者",
      id: "Penilaian 3 detik! Eksekutor yang membuat keputusan cepat dengan intuisi dan pengalaman",
      vi: "Phán đoán 3 giây! Người thực hiện đưa ra quyết định nhanh bằng trực giác và kinh nghiệm"
    },
    longDescription: {
      ko: "빠르게 상황을 파악하고 합리적으로 판단합니다. 경험과 직관을 바탕으로 신속하게 결정하되, 무모하지 않습니다. 긴급 상황에서도 침착하게 대응하며 실수가 적습니다. 속도와 정확성의 균형이 잘 잡힌 이상적인 타입입니다.\n\n장점: 빠른 판단, 정확성, 경험 활용, 균형감\n단점: 가끔 조급함, 신중한 검토 부족\n추천 직업: 프로젝트 매니저, 영업, 스타트업, 언론\n조언: 이미 훌륭합니다! 중요한 결정은 한 번 더 생각해보세요.",
      en: "You quickly grasp the situation and judge rationally. You make quick decisions based on experience and intuition, but not recklessly. You respond calmly even in emergency situations with few mistakes. This is an ideal type with good balance between speed and accuracy.\n\nStrengths: Quick judgment, accuracy, experience utilization, balance\nWeaknesses: Sometimes impatient, lack of careful review\nRecommended jobs: Project manager, sales, startup, journalism\nAdvice: You're already great! Think once more about important decisions.",
      ja: "状況を素早く把握し、合理的に判断します。経験と直感に基づいて迅速に決定しますが、無謀ではありません。緊急事態でも冷静に対応し、ミスが少ないです。速度と正確性のバランスが取れた理想的なタイプです。\n\n長所：迅速な判断、正確性、経験活用、バランス感覚\n短所：時々せっかち、慎重な検討不足\n推奨職業：プロジェクトマネージャー、営業、スタートアップ、ジャーナリズム\nアドバイス：もう素晴らしいです！重要な決定はもう一度考えてみてください。",
      'zh-CN': "快速掌握情况并合理判断。基于经验和直觉快速决定，但不鲁莽。即使在紧急情况下也能冷静应对，错误很少。这是速度和准确性平衡良好的理想类型。\n\n优点：快速判断、准确性、经验利用、平衡感\n缺点：有时急躁、缺乏仔细审查\n推荐职业：项目经理、销售、初创企业、新闻业\n建议：已经很棒了！重要决定要再想想。",
      'zh-TW': "快速掌握情況並合理判斷。基於經驗和直覺快速決定，但不魯莽。即使在緊急情況下也能冷靜應對，錯誤很少。這是速度和準確性平衡良好的理想類型。\n\n優點：快速判斷、準確性、經驗利用、平衡感\n缺點：有時急躁、缺乏仔細審查\n推薦職業：專案經理、銷售、新創企業、新聞業\n建議：已經很棒了！重要決定要再想想。",
      id: "Anda dengan cepat memahami situasi dan menilai secara rasional. Anda membuat keputusan cepat berdasarkan pengalaman dan intuisi, tetapi tidak sembrono. Anda merespons dengan tenang bahkan dalam situasi darurat dengan sedikit kesalahan. Ini adalah tipe ideal dengan keseimbangan yang baik antara kecepatan dan akurasi.\n\nKelebihan: Penilaian cepat, akurasi, pemanfaatan pengalaman, keseimbangan\nKekurangan: Terkadang tidak sabar, kurang tinjauan hati-hati\nPekerjaan yang direkomendasikan: Manajer proyek, penjualan, startup, jurnalisme\nSaran: Anda sudah hebat! Pikirkan sekali lagi tentang keputusan penting.",
      vi: "Bạn nhanh chóng nắm bắt tình huống và đánh giá một cách hợp lý. Bạn đưa ra quyết định nhanh dựa trên kinh nghiệm và trực giác, nhưng không liều lĩnh. Bạn phản ứng bình tĩnh ngay cả trong tình huống khẩn cấp với ít sai sót. Đây là kiểu lý tưởng với sự cân bằng tốt giữa tốc độ và độ chính xác.\n\nƯu điểm: Phán đoán nhanh, chính xác, tận dụng kinh nghiệm, cân bằng\nNhược điểm: Đôi khi nóng vội, thiếu xem xét cẩn thận\nNghề nghiệp được khuyến nghị: Quản lý dự án, bán hàng, khởi nghiệp, báo chí\nLời khuyên: Bạn đã tuyệt vời rồi! Hãy suy nghĩ thêm về những quyết định quan trọng."
    },
    pros: [
      {
        ko: "빠른 판단",
        en: "Quick judgment",
        ja: "迅速な判断",
        'zh-CN': "快速判断",
        'zh-TW': "快速判斷",
        id: "Penilaian cepat",
        vi: "Phán đoán nhanh"
      },
      {
        ko: "정확성",
        en: "Accuracy",
        ja: "正確性",
        'zh-CN': "准确性",
        'zh-TW': "準確性",
        id: "Akurasi",
        vi: "Độ chính xác"
      },
      {
        ko: "경험 활용",
        en: "Experience utilization",
        ja: "経験活用",
        'zh-CN': "经验利用",
        'zh-TW': "經驗利用",
        id: "Pemanfaatan pengalaman",
        vi: "Tận dụng kinh nghiệm"
      },
      {
        ko: "균형감",
        en: "Balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        id: "Keseimbangan",
        vi: "Cân bằng"
      }
    ],
    cons: [
      {
        ko: "가끔 조급함",
        en: "Sometimes impatient",
        ja: "時々せっかち",
        'zh-CN': "有时急躁",
        'zh-TW': "有時急躁",
        id: "Terkadang tidak sabar",
        vi: "Đôi khi nóng vội"
      },
      {
        ko: "신중한 검토 부족",
        en: "Lack of careful review",
        ja: "慎重な検討不足",
        'zh-CN': "缺乏仔细审查",
        'zh-TW': "缺乏仔細審查",
        id: "Kurang tinjauan hati-hati",
        vi: "Thiếu xem xét cẩn thận"
      }
    ],
    advice: {
      ko: "이미 훌륭합니다! 중요한 결정은 한 번 더 생각해보세요.",
      en: "You're already great! Think once more about important decisions.",
      ja: "もう素晴らしいです！重要な決定はもう一度考えてみてください。",
      'zh-CN': "已经很棒了！重要决定要再想想。",
      'zh-TW': "已經很棒了！重要決定要再想想。",
      id: "Anda sudah hebat! Pikirkan sekali lagi tentang keputusan penting.",
      vi: "Bạn đã tuyệt vời rồi! Hãy suy nghĩ thêm về những quyết định quan trọng."
    },
    compatibility: {
      best: ["Type1", "Type3"],
      good: [],
      careful: ["Type6"],
      difficult: []
    }
  },
  {
    type: "Type3",
    emoji: "⚖️",
    title: {
      ko: "침착한 균형형",
      en: "Calm Balanced Type",
      ja: "冷静なバランス型",
      'zh-CN': "冷静平衡型",
      'zh-TW': "冷靜平衡型",
      id: "Tipe Seimbang Tenang",
      vi: "Kiểu Cân Bằng Bình Tĩnh"
    },
    description: {
      ko: "10초의 판단! 신속하되 신중한 밸런스의 달인",
      en: "10 second judgment! Master of quick yet careful balance",
      ja: "10秒の判断！迅速だが慎重なバランスの達人",
      'zh-CN': "10秒的判断！快速而谨慎平衡的大师",
      'zh-TW': "10秒的判斷！快速而謹慎平衡的大師",
      id: "Penilaian 10 detik! Master keseimbangan cepat namun hati-hati",
      vi: "Phán đoán 10 giây! Bậc thầy cân bằng nhanh nhưng cẩn thận"
    },
    longDescription: {
      ko: "빠르게 결정하되 최소한의 검토는 합니다. 긴급 상황에서도 침착함을 유지하며 합리적으로 판단합니다. 속도와 신중함의 균형이 완벽하며 실수가 거의 없습니다. 대부분의 상황에 적절히 대응하는 실용적 타입입니다.\n\n장점: 균형감, 침착함, 합리성, 안정성\n단점: 때로 기회 놓침, 결단력 약할 수 있음\n추천 직업: 관리직, 컨설팅, 의료, 교육\n조언: 당신의 스타일이 가장 안정적입니다. 자신감을 가지세요!",
      en: "You make quick decisions but with minimal review. You maintain composure even in emergency situations and judge rationally. The balance between speed and caution is perfect with almost no mistakes. This is a practical type that responds appropriately to most situations.\n\nStrengths: Balance, composure, rationality, stability\nWeaknesses: Sometimes miss opportunities, may lack decisiveness\nRecommended jobs: Management, consulting, medical, education\nAdvice: Your style is the most stable. Have confidence!",
      ja: "迅速に決定しますが、最小限の検討は行います。緊急事態でも冷静さを保ち、合理的に判断します。速度と慎重さのバランスが完璧で、ミスはほとんどありません。ほとんどの状況に適切に対応する実用的なタイプです。\n\n長所：バランス感覚、冷静さ、合理性、安定性\n短所：時々機会を逃す、決断力が弱い場合がある\n推奨職業：管理職、コンサルティング、医療、教育\nアドバイス：あなたのスタイルが最も安定しています。自信を持ってください！",
      'zh-CN': "快速决定但进行最少的审查。即使在紧急情况下也保持冷静并合理判断。速度与谨慎的平衡完美，几乎不出错。这是对大多数情况都能适当应对的实用类型。\n\n优点：平衡感、冷静、合理性、稳定性\n缺点：有时错过机会、可能缺乏决断力\n推荐职业：管理、咨询、医疗、教育\n建议：你的风格最稳定。要有信心！",
      'zh-TW': "快速決定但進行最少的審查。即使在緊急情況下也保持冷靜並合理判斷。速度與謹慎的平衡完美，幾乎不出錯。這是對大多數情況都能適當應對的實用類型。\n\n優點：平衡感、冷靜、合理性、穩定性\n缺點：有時錯過機會、可能缺乏決斷力\n推薦職業：管理、諮詢、醫療、教育\n建議：你的風格最穩定。要有信心！",
      id: "Anda membuat keputusan cepat tetapi dengan tinjauan minimal. Anda mempertahankan ketenangan bahkan dalam situasi darurat dan menilai secara rasional. Keseimbangan antara kecepatan dan kehati-hatian sempurna dengan hampir tidak ada kesalahan. Ini adalah tipe praktis yang merespons dengan tepat terhadap sebagian besar situasi.\n\nKelebihan: Keseimbangan, ketenangan, rasionalitas, stabilitas\nKekurangan: Terkadang melewatkan peluang, mungkin kurang tegas\nPekerjaan yang direkomendasikan: Manajemen, konsultasi, medis, pendidikan\nSaran: Gaya Anda yang paling stabil. Miliki kepercayaan diri!",
      vi: "Bạn đưa ra quyết định nhanh nhưng với việc xem xét tối thiểu. Bạn duy trì sự bình tĩnh ngay cả trong tình huống khẩn cấp và đánh giá một cách hợp lý. Sự cân bằng giữa tốc độ và thận trọng là hoàn hảo với hầu như không có sai sót. Đây là kiểu thực tế phản ứng phù hợp với hầu hết các tình huống.\n\nƯu điểm: Cân bằng, bình tĩnh, hợp lý, ổn định\nNhược điểm: Đôi khi bỏ lỡ cơ hội, có thể thiếu quyết đoán\nNghề nghiệp được khuyến nghị: Quản lý, tư vấn, y tế, giáo dục\nLời khuyên: Phong cách của bạn ổn định nhất. Hãy tự tin!"
    },
    pros: [
      {
        ko: "균형감",
        en: "Balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        id: "Keseimbangan",
        vi: "Cân bằng"
      },
      {
        ko: "침착함",
        en: "Composure",
        ja: "冷静さ",
        'zh-CN': "冷静",
        'zh-TW': "冷靜",
        id: "Ketenangan",
        vi: "Bình tĩnh"
      },
      {
        ko: "합리성",
        en: "Rationality",
        ja: "合理性",
        'zh-CN': "合理性",
        'zh-TW': "合理性",
        id: "Rasionalitas",
        vi: "Hợp lý"
      },
      {
        ko: "안정성",
        en: "Stability",
        ja: "安定性",
        'zh-CN': "稳定性",
        'zh-TW': "穩定性",
        id: "Stabilitas",
        vi: "Ổn định"
      }
    ],
    cons: [
      {
        ko: "때로 기회 놓침",
        en: "Sometimes miss opportunities",
        ja: "時々機会を逃す",
        'zh-CN': "有时错过机会",
        'zh-TW': "有時錯過機會",
        id: "Terkadang melewatkan peluang",
        vi: "Đôi khi bỏ lỡ cơ hội"
      },
      {
        ko: "결단력 약할 수 있음",
        en: "May lack decisiveness",
        ja: "決断力が弱い場合がある",
        'zh-CN': "可能缺乏决断力",
        'zh-TW': "可能缺乏決斷力",
        id: "Mungkin kurang tegas",
        vi: "Có thể thiếu quyết đoán"
      }
    ],
    advice: {
      ko: "당신의 스타일이 가장 안정적입니다. 자신감을 가지세요!",
      en: "Your style is the most stable. Have confidence!",
      ja: "あなたのスタイルが最も安定しています。自信を持ってください！",
      'zh-CN': "你的风格最稳定。要有信心！",
      'zh-TW': "你的風格最穩定。要有信心！",
      id: "Gaya Anda yang paling stabil. Miliki kepercayaan diri!",
      vi: "Phong cách của bạn ổn định nhất. Hãy tự tin!"
    },
    compatibility: {
      best: ["Type2"],
      good: ["Type1", "Type4"],
      careful: ["Type6"],
      difficult: []
    }
  },
  {
    type: "Type4",
    emoji: "🔍",
    title: {
      ko: "신중한 분석형",
      en: "Careful Analytical Type",
      ja: "慎重な分析型",
      'zh-CN': "谨慎分析型",
      'zh-TW': "謹慎分析型",
      id: "Tipe Analitis Hati-hati",
      vi: "Kiểu Phân Tích Thận Trọng"
    },
    description: {
      ko: "30초의 판단! 체계적 분석으로 정확한 결정을 내리는 전략가",
      en: "30 second judgment! Strategist who makes accurate decisions through systematic analysis",
      ja: "30秒の判断！体系的分析で正確な決定を下す戦略家",
      'zh-CN': "30秒的判断！通过系统分析做出准确决定的战略家",
      'zh-TW': "30秒的判斷！通過系統分析做出準確決定的戰略家",
      id: "Penilaian 30 detik! Strategis yang membuat keputusan akurat melalui analisis sistematis",
      vi: "Phán đoán 30 giây! Nhà chiến lược đưa ra quyết định chính xác thông qua phân tích có hệ thống"
    },
    longDescription: {
      ko: "빠른 결정보다 정확한 결정을 중시합니다. 상황을 분석하고 여러 옵션을 검토한 후 결정합니다. 실수는 적지만 긴급 상황에서는 어려움을 겪을 수 있습니다. 중요한 결정일수록 빛을 발하는 타입입니다.\n\n장점: 정확성, 분석력, 실수 적음, 논리적\n단점: 느린 결정, 기회 상실, 긴급 대응 약함\n추천 직업: 연구원, 분석가, 회계사, 기획자\n조언: 때로는 70% 정보로도 결정할 수 있어요. 완벽은 없습니다!",
      en: "You value accurate decisions over quick ones. You analyze situations and review multiple options before deciding. You make few mistakes but may struggle in emergency situations. This type shines the most in important decisions.\n\nStrengths: Accuracy, analytical ability, few mistakes, logical\nWeaknesses: Slow decisions, missed opportunities, weak emergency response\nRecommended jobs: Researcher, analyst, accountant, planner\nAdvice: Sometimes you can decide with 70% information. Nothing is perfect!",
      ja: "迅速な決定よりも正確な決定を重視します。状況を分析し、複数の選択肢を検討してから決定します。ミスは少ないですが、緊急事態では困難を経験する可能性があります。重要な決定ほど光るタイプです。\n\n長所：正確性、分析力、ミスが少ない、論理的\n短所：決定が遅い、機会損失、緊急対応が弱い\n推奨職業：研究者、アナリスト、会計士、企画者\nアドバイス：時には70%の情報でも決定できます。完璧はありません！",
      'zh-CN': "重视准确决定胜过快速决定。分析情况并审查多个选项后做决定。错误很少但在紧急情况下可能遇到困难。这是越重要决定越能发挥的类型。\n\n优点：准确性、分析能力、错误少、逻辑性\n缺点：决定慢、错失机会、紧急应对弱\n推荐职业：研究员、分析师、会计师、策划者\n建议：有时70%信息也能决定。没有完美！",
      'zh-TW': "重視準確決定勝過快速決定。分析情況並審查多個選項後做決定。錯誤很少但在緊急情況下可能遇到困難。這是越重要決定越能發揮的類型。\n\n優點：準確性、分析能力、錯誤少、邏輯性\n缺點：決定慢、錯失機會、緊急應對弱\n推薦職業：研究員、分析師、會計師、策劃者\n建議：有時70%資訊也能決定。沒有完美！",
      id: "Anda menghargai keputusan akurat daripada keputusan cepat. Anda menganalisis situasi dan meninjau beberapa opsi sebelum memutuskan. Anda membuat sedikit kesalahan tetapi mungkin kesulitan dalam situasi darurat. Tipe ini bersinar paling terang dalam keputusan penting.\n\nKelebihan: Akurasi, kemampuan analitis, sedikit kesalahan, logis\nKekurangan: Keputusan lambat, peluang terlewat, respons darurat lemah\nPekerjaan yang direkomendasikan: Peneliti, analis, akuntan, perencana\nSaran: Terkadang Anda bisa memutuskan dengan 70% informasi. Tidak ada yang sempurna!",
      vi: "Bạn coi trọng quyết định chính xác hơn quyết định nhanh. Bạn phân tích tình huống và xem xét nhiều lựa chọn trước khi quyết định. Bạn ít mắc lỗi nhưng có thể gặp khó khăn trong tình huống khẩn cấp. Kiểu này tỏa sáng nhất trong những quyết định quan trọng.\n\nƯu điểm: Chính xác, khả năng phân tích, ít sai sót, logic\nNhược điểm: Quyết định chậm, bỏ lỡ cơ hội, ứng phó khẩn cấp yếu\nNghề nghiệp được khuyến nghị: Nhà nghiên cứu, nhà phân tích, kế toán, người lập kế hoạch\nLời khuyên: Đôi khi bạn có thể quyết định với 70% thông tin. Không có gì hoàn hảo!"
    },
    pros: [
      {
        ko: "정확성",
        en: "Accuracy",
        ja: "正確性",
        'zh-CN': "准确性",
        'zh-TW': "準確性",
        id: "Akurasi",
        vi: "Độ chính xác"
      },
      {
        ko: "분석력",
        en: "Analytical ability",
        ja: "分析力",
        'zh-CN': "分析能力",
        'zh-TW': "分析能力",
        id: "Kemampuan analitis",
        vi: "Khả năng phân tích"
      },
      {
        ko: "실수 적음",
        en: "Few mistakes",
        ja: "ミスが少ない",
        'zh-CN': "错误少",
        'zh-TW': "錯誤少",
        id: "Sedikit kesalahan",
        vi: "Ít sai sót"
      },
      {
        ko: "논리적",
        en: "Logical",
        ja: "論理的",
        'zh-CN': "逻辑性",
        'zh-TW': "邏輯性",
        id: "Logis",
        vi: "Logic"
      }
    ],
    cons: [
      {
        ko: "느린 결정",
        en: "Slow decisions",
        ja: "決定が遅い",
        'zh-CN': "决定慢",
        'zh-TW': "決定慢",
        id: "Keputusan lambat",
        vi: "Quyết định chậm"
      },
      {
        ko: "기회 상실",
        en: "Missed opportunities",
        ja: "機会損失",
        'zh-CN': "错失机会",
        'zh-TW': "錯失機會",
        id: "Peluang terlewat",
        vi: "Bỏ lỡ cơ hội"
      },
      {
        ko: "긴급 대응 약함",
        en: "Weak emergency response",
        ja: "緊急対応が弱い",
        'zh-CN': "紧急应对弱",
        'zh-TW': "緊急應對弱",
        id: "Respons darurat lemah",
        vi: "Ứng phó khẩn cấp yếu"
      }
    ],
    advice: {
      ko: "때로는 70% 정보로도 결정할 수 있어요. 완벽은 없습니다!",
      en: "Sometimes you can decide with 70% information. Nothing is perfect!",
      ja: "時には70%の情報でも決定できます。完璧はありません！",
      'zh-CN': "有时70%信息也能决定。没有完美！",
      'zh-TW': "有時70%資訊也能決定。沒有完美！",
      id: "Terkadang Anda bisa memutuskan dengan 70% informasi. Tidak ada yang sempurna!",
      vi: "Đôi khi bạn có thể quyết định với 70% thông tin. Không có gì hoàn hảo!"
    },
    compatibility: {
      best: ["Type3"],
      good: ["Type5"],
      careful: ["Type1"],
      difficult: []
    }
  },
  {
    type: "Type5",
    emoji: "🤔",
    title: {
      ko: "망설이는 신중형",
      en: "Hesitant Careful Type",
      ja: "躊躇する慎重型",
      'zh-CN': "犹豫谨慎型",
      'zh-TW': "猶豫謹慎型",
      id: "Tipe Hati-hati Ragu-ragu",
      vi: "Kiểu Thận Trọng Do Dự"
    },
    description: {
      ko: "1분의 판단! 신중하지만 때로 기회를 놓치는 조심스러운 타입",
      en: "1 minute judgment! Careful type who sometimes misses opportunities",
      ja: "1分の判断！慎重だが時々機会を逃す用心深いタイプ",
      'zh-CN': "1分钟的判断！谨慎但有时错过机会的谨慎类型",
      'zh-TW': "1分鐘的判斷！謹慎但有時錯過機會的謹慎類型",
      id: "Penilaian 1 menit! Tipe hati-hati yang terkadang melewatkan peluang",
      vi: "Phán đoán 1 phút! Kiểu thận trọng đôi khi bỏ lỡ cơ hội"
    },
    longDescription: {
      ko: "실수를 두려워해 매우 신중합니다. 여러 번 확인하고 다시 생각합니다. 안전하고 확실한 선택을 하지만 기회를 놓칠 때가 많습니다. 긴급 상황에서 스트레스를 많이 받는 편입니다.\n\n장점: 신중함, 안전성, 실수 회피\n단점: 기회 상실, 결정 지연, 스트레스\n추천 직업: 품질관리, 안전관리, 감사, 검수\n조언: 모든 결정이 완벽할 수는 없어요. 70%면 충분합니다!",
      en: "You are very careful because you fear mistakes. You check multiple times and think again. You make safe and certain choices but often miss opportunities. You experience a lot of stress in emergency situations.\n\nStrengths: Caution, safety, mistake avoidance\nWeaknesses: Missed opportunities, delayed decisions, stress\nRecommended jobs: Quality control, safety management, audit, inspection\nAdvice: Not every decision can be perfect. 70% is enough!",
      ja: "ミスを恐れて非常に慎重です。何度も確認し、再考します。安全で確実な選択をしますが、機会を逃すことが多いです。緊急事態ではストレスを多く受ける傾向があります。\n\n長所：慎重さ、安全性、ミス回避\n短所：機会損失、決定遅延、ストレス\n推奨職業：品質管理、安全管理、監査、検品\nアドバイス：すべての決定が完璧である必要はありません。70%で十分です！",
      'zh-CN': "因为害怕错误而非常谨慎。多次确认并重新思考。做出安全确定的选择但经常错过机会。在紧急情况下承受很大压力。\n\n优点：谨慎、安全性、避免错误\n缺点：错失机会、决定延迟、压力\n推荐职业：质量管理、安全管理、审计、检验\n建议：不是每个决定都要完美。70%就够了！",
      'zh-TW': "因為害怕錯誤而非常謹慎。多次確認並重新思考。做出安全確定的選擇但經常錯過機會。在緊急情況下承受很大壓力。\n\n優點：謹慎、安全性、避免錯誤\n缺點：錯失機會、決定延遲、壓力\n推薦職業：品質管理、安全管理、審計、檢驗\n建議：不是每個決定都要完美。70%就夠了！",
      id: "Anda sangat hati-hati karena takut kesalahan. Anda memeriksa berkali-kali dan berpikir lagi. Anda membuat pilihan yang aman dan pasti tetapi sering melewatkan peluang. Anda mengalami banyak stres dalam situasi darurat.\n\nKelebihan: Kehati-hatian, keamanan, menghindari kesalahan\nKekurangan: Peluang terlewat, keputusan tertunda, stres\nPekerjaan yang direkomendasikan: Kontrol kualitas, manajemen keselamatan, audit, inspeksi\nSaran: Tidak setiap keputusan harus sempurna. 70% sudah cukup!",
      vi: "Bạn rất thận trọng vì sợ mắc lỗi. Bạn kiểm tra nhiều lần và suy nghĩ lại. Bạn đưa ra lựa chọn an toàn và chắc chắn nhưng thường bỏ lỡ cơ hội. Bạn trải qua nhiều căng thẳng trong tình huống khẩn cấp.\n\nƯu điểm: Thận trọng, an toàn, tránh sai sót\nNhược điểm: Bỏ lỡ cơ hội, quyết định chậm trễ, căng thẳng\nNghề nghiệp được khuyến nghị: Kiểm soát chất lượng, quản lý an toàn, kiểm toán, thanh tra\nLời khuyên: Không phải mọi quyết định đều phải hoàn hảo. 70% là đủ!"
    },
    pros: [
      {
        ko: "신중함",
        en: "Caution",
        ja: "慎重さ",
        'zh-CN': "谨慎",
        'zh-TW': "謹慎",
        id: "Kehati-hatian",
        vi: "Thận trọng"
      },
      {
        ko: "안전성",
        en: "Safety",
        ja: "安全性",
        'zh-CN': "安全性",
        'zh-TW': "安全性",
        id: "Keamanan",
        vi: "An toàn"
      },
      {
        ko: "실수 회피",
        en: "Mistake avoidance",
        ja: "ミス回避",
        'zh-CN': "避免错误",
        'zh-TW': "避免錯誤",
        id: "Menghindari kesalahan",
        vi: "Tránh sai sót"
      }
    ],
    cons: [
      {
        ko: "기회 상실",
        en: "Missed opportunities",
        ja: "機会損失",
        'zh-CN': "错失机会",
        'zh-TW': "錯失機會",
        id: "Peluang terlewat",
        vi: "Bỏ lỡ cơ hội"
      },
      {
        ko: "결정 지연",
        en: "Delayed decisions",
        ja: "決定遅延",
        'zh-CN': "决定延迟",
        'zh-TW': "決定延遲",
        id: "Keputusan tertunda",
        vi: "Quyết định chậm trễ"
      },
      {
        ko: "스트레스",
        en: "Stress",
        ja: "ストレス",
        'zh-CN': "压力",
        'zh-TW': "壓力",
        id: "Stres",
        vi: "Căng thẳng"
      }
    ],
    advice: {
      ko: "모든 결정이 완벽할 수는 없어요. 70%면 충분합니다!",
      en: "Not every decision can be perfect. 70% is enough!",
      ja: "すべての決定が完璧である必要はありません。70%で十分です！",
      'zh-CN': "不是每个决定都要完美。70%就够了！",
      'zh-TW': "不是每個決定都要完美。70%就夠了！",
      id: "Tidak setiap keputusan harus sempurna. 70% sudah cukup!",
      vi: "Không phải mọi quyết định đều phải hoàn hảo. 70% là đủ!"
    },
    compatibility: {
      best: ["Type4"],
      good: [],
      careful: ["Type1", "Type2"],
      difficult: []
    }
  },
  {
    type: "Type6",
    emoji: "😰",
    title: {
      ko: "프리징 우유부단형",
      en: "Freezing Indecisive Type",
      ja: "フリーズ優柔不断型",
      'zh-CN': "冻结优柔寡断型",
      'zh-TW': "凍結優柔寡斷型",
      id: "Tipe Ragu-ragu Membeku",
      vi: "Kiểu Do Dự Đóng Băng"
    },
    description: {
      ko: "판단 불가! 선택 장애와 우유부단함의 극치",
      en: "Unable to judge! The extreme of choice disorder and indecisiveness",
      ja: "判断不可！選択障害と優柔不断の極み",
      'zh-CN': "无法判断！选择障碍和优柔寡断的极致",
      'zh-TW': "無法判斷！選擇障礙和優柔寡斷的極致",
      id: "Tidak bisa menilai! Ekstrem dari gangguan pilihan dan keraguan",
      vi: "Không thể phán đoán! Cực điểm của rối loạn lựa chọn và do dự"
    },
    longDescription: {
      ko: "결정을 내리는 것이 매우 어렵습니다. 긴급 상황에서 얼어붙거나 당황합니다. 여러 선택지 앞에서 혼란스러워하고 결국 다른 사람을 따르거나 결정을 미룹니다. 하지만 걱정 마세요! 의사결정은 훈련으로 향상됩니다.\n\n강점: 신중함 (장점으로 전환 가능)\n단점: 우유부단, 기회 상실, 스트레스, 의존성\n추천 활동: 작은 결정부터 연습, 의사결정 훈련\n조언: 작은 것부터 시작하세요. 오늘 점심 메뉴를 5초 안에 정해보세요!",
      en: "Making decisions is very difficult. You freeze or panic in emergency situations. You get confused in front of multiple choices and end up following others or postponing decisions. But don't worry! Decision-making can be improved through training.\n\nStrengths: Caution (can be converted to strength)\nWeaknesses: Indecisiveness, missed opportunities, stress, dependency\nRecommended activities: Practice with small decisions, decision-making training\nAdvice: Start small. Try deciding on today's lunch menu within 5 seconds!",
      ja: "決定を下すことが非常に困難です。緊急事態で凍りついたりパニックになります。複数の選択肢の前で混乱し、結局他の人に従ったり決定を先延ばしにしたりします。でも心配しないで！意思決定は訓練で向上します。\n\n強み：慎重さ（長所に転換可能）\n短所：優柔不断、機会損失、ストレス、依存性\n推奨活動：小さな決定から練習、意思決定訓練\nアドバイス：小さなことから始めてください。今日の昼食メニューを5秒以内に決めてみてください！",
      'zh-CN': "做决定非常困难。在紧急情况下冻结或恐慌。在多个选择面前感到困惑，最终跟随他人或推迟决定。但别担心！决策能力可以通过训练提高。\n\n强项：谨慎（可转化为优势）\n弱点：优柔寡断、错失机会、压力、依赖性\n推荐活动：从小决定开始练习、决策训练\n建议：从小事开始。试着在5秒内决定今天的午餐菜单！",
      'zh-TW': "做決定非常困難。在緊急情況下凍結或恐慌。在多個選擇面前感到困惑，最終跟隨他人或推遲決定。但別擔心！決策能力可以通過訓練提高。\n\n強項：謹慎（可轉化為優勢）\n弱點：優柔寡斷、錯失機會、壓力、依賴性\n推薦活動：從小決定開始練習、決策訓練\n建議：從小事開始。試著在5秒內決定今天的午餐菜單！",
      id: "Membuat keputusan sangat sulit. Anda membeku atau panik dalam situasi darurat. Anda bingung di depan banyak pilihan dan akhirnya mengikuti orang lain atau menunda keputusan. Tapi jangan khawatir! Pengambilan keputusan dapat ditingkatkan melalui pelatihan.\n\nKekuatan: Kehati-hatian (dapat diubah menjadi kelebihan)\nKelemahan: Keraguan, peluang terlewat, stres, ketergantungan\nAktivitas yang direkomendasikan: Berlatih dengan keputusan kecil, pelatihan pengambilan keputusan\nSaran: Mulai dari yang kecil. Coba putuskan menu makan siang hari ini dalam 5 detik!",
      vi: "Đưa ra quyết định rất khó khăn. Bạn đóng băng hoặc hoảng sợ trong tình huống khẩn cấp. Bạn bối rối trước nhiều lựa chọn và cuối cùng theo người khác hoặc trì hoãn quyết định. Nhưng đừng lo lắng! Khả năng quyết định có thể được cải thiện thông qua luyện tập.\n\nĐiểm mạnh: Thận trọng (có thể chuyển thành ưu điểm)\nĐiểm yếu: Do dự, bỏ lỡ cơ hội, căng thẳng, phụ thuộc\nHoạt động được khuyến nghị: Luyện tập với quyết định nhỏ, đào tạo ra quyết định\nLời khuyên: Bắt đầu từ những việc nhỏ. Hãy thử quyết định thực đơn trưa hôm nay trong 5 giây!"
    },
    pros: [
      {
        ko: "신중함 (장점으로 전환 가능)",
        en: "Caution (can be converted to strength)",
        ja: "慎重さ（長所に転換可能）",
        'zh-CN': "谨慎（可转化为优势）",
        'zh-TW': "謹慎（可轉化為優勢）",
        id: "Kehati-hatian (dapat diubah menjadi kelebihan)",
        vi: "Thận trọng (có thể chuyển thành ưu điểm)"
      }
    ],
    cons: [
      {
        ko: "우유부단",
        en: "Indecisiveness",
        ja: "優柔不断",
        'zh-CN': "优柔寡断",
        'zh-TW': "優柔寡斷",
        id: "Keraguan",
        vi: "Do dự"
      },
      {
        ko: "기회 상실",
        en: "Missed opportunities",
        ja: "機会損失",
        'zh-CN': "错失机会",
        'zh-TW': "錯失機會",
        id: "Peluang terlewat",
        vi: "Bỏ lỡ cơ hội"
      },
      {
        ko: "스트레스",
        en: "Stress",
        ja: "ストレス",
        'zh-CN': "压力",
        'zh-TW': "壓力",
        id: "Stres",
        vi: "Căng thẳng"
      },
      {
        ko: "의존성",
        en: "Dependency",
        ja: "依存性",
        'zh-CN': "依赖性",
        'zh-TW': "依賴性",
        id: "Ketergantungan",
        vi: "Phụ thuộc"
      }
    ],
    advice: {
      ko: "작은 것부터 시작하세요. 오늘 점심 메뉴를 5초 안에 정해보세요!",
      en: "Start small. Try deciding on today's lunch menu within 5 seconds!",
      ja: "小さなことから始めてください。今日の昼食メニューを5秒以内に決めてみてください！",
      'zh-CN': "从小事开始。试着在5秒内决定今天的午餐菜单！",
      'zh-TW': "從小事開始。試著在5秒內決定今天的午餐菜單！",
      id: "Mulai dari yang kecil. Coba putuskan menu makan siang hari ini dalam 5 detik!",
      vi: "Bắt đầu từ những việc nhỏ. Hãy thử quyết định thực đơn trưa hôm nay trong 5 giây!"
    },
    compatibility: {
      best: ["Type1", "Type2"],
      good: [],
      careful: ["Type5"],
      difficult: ["Type6"]
    }
  }
];
