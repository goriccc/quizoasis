export interface Phase2StressCareQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2StressCareResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  symptoms: Record<string, string>; // 주요 증상
  prescription: Record<string, string>; // 맞춤 처방
  recommendedActivities: Record<string, string>; // 추천 활동
}

export const phase2StressCareQuestions: Phase2StressCareQuestion[] = [
  {
    id: 1,
    question: {
      ko: "아침에 눈을 떴을 때 가장 먼저 드는 생각은?",
      en: "What is the first thought that comes to mind when you wake up in the morning?",
      ja: "朝目を覚ましたとき、最初に浮かぶ考えは？",
      "zh-CN": "早上醒来时最先想到的是什么？",
      "zh-TW": "早上醒來時最先想到的是什麼？",
      vi: "Ý nghĩ đầu tiên xuất hiện khi bạn thức dậy vào buổi sáng là gì?",
      id: "Apa pikiran pertama yang muncul ketika Anda bangun di pagi hari?"
    },
    options: [
      {
        text: {
          ko: "\"오늘 마주칠 그 사람, 또 어떻게 대하지...\"",
          en: "\"That person I'll meet today, how should I deal with them again...\"",
          ja: "「今日会うあの人、またどう対応しよう...」",
          "zh-CN": "\"今天要遇到的那个人，又该如何应对...\"",
          "zh-TW": "\"今天要遇到的那個人，又該如何應對...\"",
          vi: "\"Người hôm nay tôi sẽ gặp, lại phải đối xử thế nào...\"",
          id: "\"Orang yang akan saya temui hari ini, bagaimana lagi saya harus menghadapinya...\""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"오늘 해야 할 일이 산더미네. 실수하면 안 되는데\"",
          en: "\"There's a mountain of things to do today. I can't make mistakes\"",
          ja: "「今日やるべきことが山積みだ。ミスはできないのに」",
          "zh-CN": "\"今天要做的事情堆积如山。不能出错\"",
          "zh-TW": "\"今天要做的事情堆積如山。不能出錯\"",
          vi: "\"Hôm nay có cả đống việc phải làm. Không được phạm sai lầm\"",
          id: "\"Ada tumpukan hal yang harus dilakukan hari ini. Saya tidak boleh membuat kesalahan\""
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"내 인생은 어디로 가는 걸까? 미래가 막막하다\"",
          en: "\"Where is my life heading? The future looks bleak\"",
          ja: "「私の人生はどこに向かっているんだろう？未来が先が見えない」",
          "zh-CN": "\"我的人生将走向何方？未来一片茫然\"",
          "zh-TW": "\"我的人生將走向何方？未來一片茫然\"",
          vi: "\"Cuộc đời tôi đang đi về đâu? Tương lai thật mờ mịt\"",
          id: "\"Ke mana hidupku ini? Masa depan terasa suram\""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"몸이 천근만근이야. 아무 소리도 안 듣고 싶다\"",
          en: "\"My body feels so heavy. I don't want to hear anything\"",
          ja: "「体が重くて仕方がない。何も聞きたくない」",
          "zh-CN": "\"身体沉重。不想听到任何声音\"",
          "zh-TW": "\"身體沉重。不想聽到任何聲音\"",
          vi: "\"Cơ thể nặng nề vô cùng. Tôi không muốn nghe bất cứ điều gì\"",
          id: "\"Tubuhku terasa sangat berat. Aku tidak ingin mendengar apa pun\""
        },
        types: ["Type4", "Type5"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "당신을 가장 화나게 하는 상황은?",
      en: "What situation makes you most angry?",
      ja: "あなたを最も怒らせる状況は？",
      "zh-CN": "最让你生气的情况是什么？",
      "zh-TW": "最讓你生氣的情況是什麼？",
      vi: "Tình huống nào khiến bạn tức giận nhất?",
      id: "Situasi apa yang paling membuat Anda marah?"
    },
    options: [
      {
        text: {
          ko: "내 배려를 당연하게 생각하고 무례하게 구는 사람",
          en: "People who take my consideration for granted and behave rudely",
          ja: "私の気遣いを当然だと思って失礼な態度を取る人",
          "zh-CN": "把我的体贴当作理所当然、态度无礼的人",
          "zh-TW": "把我的體貼當作理所當然、態度無禮的人",
          vi: "Những người coi sự quan tâm của tôi là điều hiển nhiên và cư xử thô lỗ",
          id: "Orang yang menganggap perhatian saya sebagai hal yang wajar dan bersikap kasar"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "계획대로 일이 풀리지 않거나 내 능력 부족을 느낄 때",
          en: "When things don't go as planned or I feel I lack ability",
          ja: "計画通りに物事が進まないとき、または自分の能力不足を感じるとき",
          "zh-CN": "计划没有按预期进行或感到自己能力不足时",
          "zh-TW": "計劃沒有按預期進行或感到自己能力不足時",
          vi: "Khi mọi việc không diễn ra theo kế hoạch hoặc tôi cảm thấy thiếu khả năng",
          id: "Ketika hal-hal tidak berjalan sesuai rencana atau saya merasa kurang mampu"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "남들은 다 잘나가는데 나만 뒤처지는 것 같을 때",
          en: "When everyone else seems to be doing well but I feel left behind",
          ja: "みんなはうまくいっているのに自分だけ取り残されているように感じるとき",
          "zh-CN": "当别人都很顺利，只有自己感觉落后时",
          "zh-TW": "當別人都很順利，只有自己感覺落後時",
          vi: "Khi mọi người khác có vẻ đều làm tốt nhưng tôi cảm thấy bị tụt lại phía sau",
          id: "Ketika semua orang tampaknya baik-baik saja tetapi saya merasa tertinggal"
        },
        types: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "시끄러운 소음, 붐비는 사람, 불쾌한 냄새 등 환경적인 자극",
          en: "Environmental stimuli like loud noise, crowded people, unpleasant smells",
          ja: "騒音、混雑した人々、不快な匂いなどの環境的刺激",
          "zh-CN": "环境刺激，如嘈杂的噪音、拥挤的人群、难闻的气味",
          "zh-TW": "環境刺激，如嘈雜的噪音、擁擠的人群、難聞的氣味",
          vi: "Các kích thích môi trường như tiếng ồn lớn, đám đông, mùi khó chịu",
          id: "Stimuli lingkungan seperti suara bising, kerumunan, bau tidak menyenangkan"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "쉴 때조차 멈추지 않는 생각의 주제는?",
      en: "What is the topic of thoughts that don't stop even when resting?",
      ja: "休んでいるときでも止まらない思考のテーマは？",
      "zh-CN": "即使在休息时也不停止的思考主题是什么？",
      "zh-TW": "即使在休息時也不停止的思考主題是什麼？",
      vi: "Chủ đề suy nghĩ không dừng lại ngay cả khi nghỉ ngơi là gì?",
      id: "Apa topik pikiran yang tidak berhenti bahkan saat beristirahat?"
    },
    options: [
      {
        text: {
          ko: "'아까 그 말 하지 말걸...' 대화 내용을 곱씹는다",
          en: "'I shouldn't have said that earlier...' Ruminating on the conversation",
          ja: "「さっきあんなこと言わなければよかった...」会話の内容を反芻する",
          "zh-CN": "\"刚才不应该说那句话...\"反复思考对话内容",
          "zh-TW": "\"剛才不應該說那句話...\"反覆思考對話內容",
          vi: "\"Lẽ ra không nên nói điều đó lúc nãy...\" Suy ngẫm về cuộc trò chuyện",
          id: "\"Seharusnya saya tidak mengatakan itu tadi...\" Merenungkan isi percakapan"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "'내일은 이거 하고, 모레는 저거 하고...' 일정을 체크한다",
          en: "'Tomorrow I'll do this, the day after that...' Checking schedules",
          ja: "「明日はこれをして、明後日はあれをして...」スケジュールをチェックする",
          "zh-CN": "\"明天做这个，后天做那个...\"检查日程",
          "zh-TW": "\"明天做這個，後天做那個...\"檢查日程",
          vi: "\"Ngày mai làm cái này, ngày kia làm cái kia...\" Kiểm tra lịch trình",
          id: "\"Besok akan melakukan ini, lusa melakukan itu...\" Mengecek jadwal"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "'만약에 안 좋은 일이 생기면 어떡하지?' 최악의 상황 시뮬레이션",
          en: "'What if something bad happens?' Simulating worst-case scenarios",
          ja: "「もし悪いことが起きたらどうしよう？」最悪の状況をシミュレーションする",
          "zh-CN": "\"如果发生不好的事情怎么办？\"模拟最坏的情况",
          "zh-TW": "\"如果發生不好的事情怎麼辦？\"模擬最壞的情況",
          vi: "\"Nếu có chuyện xấu xảy ra thì sao?\" Mô phỏng các tình huống xấu nhất",
          id: "\"Bagaimana jika terjadi hal buruk?\" Mensimulasikan skenario terburuk"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "아무 생각 없다. 그냥 멍하니 있고 싶다",
          en: "No thoughts at all. Just want to space out",
          ja: "何も考えない。ただぼーっとしていたい",
          "zh-CN": "什么都不想。只想发呆",
          "zh-TW": "什麼都不想。只想發呆",
          vi: "Không có suy nghĩ gì cả. Chỉ muốn thả hồn",
          id: "Tidak ada pikiran sama sekali. Hanya ingin melamun"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "핸드폰 알람이 울릴 때 당신의 반응은?",
      en: "What is your reaction when your phone alarm rings?",
      ja: "携帯のアラームが鳴ったときのあなたの反応は？",
      "zh-CN": "手机铃声响起时你的反应是什么？",
      "zh-TW": "手機鈴聲響起時你的反應是什麼？",
      vi: "Phản ứng của bạn khi điện thoại kêu là gì?",
      id: "Apa reaksi Anda ketika alarm ponsel berbunyi?"
    },
    options: [
      {
        text: {
          ko: "\"누구지?\" 연락이 오는 것 자체가 부담스럽고 긴장된다",
          en: "\"Who is it?\" Just receiving a call feels burdensome and makes me nervous",
          ja: "「誰だろう？」連絡が来ること自体が負担で緊張する",
          "zh-CN": "\"是谁？\"收到联系本身就有负担，感到紧张",
          "zh-TW": "\"是誰？\"收到聯繫本身就有負擔，感到緊張",
          vi: "\"Là ai đây?\" Việc nhận được cuộc gọi đã cảm thấy gánh nặng và căng thẳng",
          id: "\"Siapa ini?\" Hanya menerima panggilan saja sudah terasa membebani dan membuat gugup"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"또 무슨 일 터졌나?\" 업무 관련 연락일까 봐 가슴이 철렁한다",
          en: "\"What happened again?\" My heart sinks thinking it might be work-related",
          ja: "「また何か起きたのか？」仕事関連の連絡かもしれないと思って胸がドキドキする",
          "zh-CN": "\"又出什么事了？\"担心是工作相关的联系，心跳加速",
          "zh-TW": "\"又出什麼事了？\"擔心是工作相關的聯繫，心跳加速",
          vi: "\"Lại có chuyện gì xảy ra?\" Tim đập thình thịch nghĩ có thể là liên quan đến công việc",
          id: "\"Apa yang terjadi lagi?\" Jantung berdebar karena khawatir itu mungkin terkait pekerjaan"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "뉴스 알림이나 SNS를 보며 세상 돌아가는 일에 불안해한다",
          en: "Feel anxious about what's happening in the world while checking news alerts or SNS",
          ja: "ニュース通知やSNSを見ながら世界で起こっていることに不安を感じる",
          "zh-CN": "查看新闻通知或SNS时，对世界上发生的事情感到不安",
          "zh-TW": "查看新聞通知或SNS時，對世界上發生的事情感到不安",
          vi: "Cảm thấy lo lắng về những gì đang xảy ra trên thế giới khi xem thông báo tin tức hoặc SNS",
          id: "Merasa cemas tentang apa yang terjadi di dunia saat melihat notifikasi berita atau SNS"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "벨 소리 자체가 거슬려서 항상 무음이나 진동으로 해둔다",
          en: "The ringtone itself is annoying, so I always keep it on silent or vibration",
          ja: "ベル音自体が気になって、いつもマナーモードやバイブレーションにしている",
          "zh-CN": "铃声本身就很烦人，所以总是设置为静音或震动",
          "zh-TW": "鈴聲本身就很煩人，所以總是設置為靜音或震動",
          vi: "Tiếng chuông tự nó đã khó chịu, nên tôi luôn để im lặng hoặc rung",
          id: "Suara dering itu sendiri mengganggu, jadi saya selalu mengatur ke mode senyap atau getar"
        },
        types: ["Type4", "Type5"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "스트레스가 극에 달했을 때 나타나는 신체 반응은?",
      en: "What physical reaction appears when stress reaches its peak?",
      ja: "ストレスが極限に達したときに現れる身体反応は？",
      "zh-CN": "压力达到极限时出现的身体反应是什么？",
      "zh-TW": "壓力達到極限時出現的身體反應是什麼？",
      vi: "Phản ứng cơ thể nào xuất hiện khi căng thẳng đạt đến đỉnh điểm?",
      id: "Reaksi fisik apa yang muncul ketika stres mencapai puncaknya?"
    },
    options: [
      {
        text: {
          ko: "가슴이 답답하고 한숨이 계속 나온다",
          en: "Chest feels stuffy and I keep sighing",
          ja: "胸が苦しくてため息が続く",
          "zh-CN": "胸口闷，一直叹气",
          "zh-TW": "胸口悶，一直嘆氣",
          vi: "Ngực cảm thấy ngột ngạt và tôi cứ thở dài",
          id: "Dada terasa sesak dan saya terus menghela napas"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "소화가 안 되고 머리가 지끈거린다",
          en: "Poor digestion and throbbing headache",
          ja: "消化が悪くて頭がズキズキする",
          "zh-CN": "消化不良，头痛",
          "zh-TW": "消化不良，頭痛",
          vi: "Tiêu hóa kém và đau đầu nhói",
          id: "Pencernaan buruk dan kepala berdenyut"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "심장이 두근거리고 잠이 잘 안 온다",
          en: "Heart races and can't sleep well",
          ja: "心臓がドキドキしてよく眠れない",
          "zh-CN": "心跳加速，睡眠不好",
          "zh-TW": "心跳加速，睡眠不好",
          vi: "Tim đập nhanh và không ngủ được",
          id: "Jantung berdebar dan sulit tidur nyenyak"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "온몸이 두들겨 맞은 듯 아프고 기운이 없다",
          en: "Whole body aches as if beaten and I have no energy",
          ja: "全身が殴られたように痛くて元気がない",
          "zh-CN": "全身疼痛像被打了一样，没有精力",
          "zh-TW": "全身疼痛像被打了一樣，沒有精力",
          vi: "Toàn thân đau nhức như bị đánh và không có năng lượng",
          id: "Seluruh tubuh sakit seolah-olah dipukul dan tidak bertenaga"
        },
        types: ["Type4", "Type5"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "주말을 보내는 당신의 이상적인 방법은?",
      en: "What is your ideal way to spend the weekend?",
      ja: "週末を過ごすあなたの理想的な方法は？",
      "zh-CN": "你理想的周末度过方式是什么？",
      "zh-TW": "你理想的週末度過方式是什麼？",
      vi: "Cách lý tưởng của bạn để trải qua cuối tuần là gì?",
      id: "Apa cara ideal Anda untuk menghabiskan akhir pekan?"
    },
    options: [
      {
        text: {
          ko: "아무도 만나지 않고 혼자만의 시간을 갖는다",
          en: "Don't meet anyone and have time alone",
          ja: "誰にも会わずに一人の時間を持つ",
          "zh-CN": "不见任何人，拥有独处的时间",
          "zh-TW": "不見任何人，擁有獨處的時間",
          vi: "Không gặp ai và có thời gian một mình",
          id: "Tidak bertemu siapa pun dan memiliki waktu sendirian"
        },
        types: ["Type1", "Type4"]
      },
      {
        text: {
          ko: "자기 계발을 하거나 밀린 일을 처리하며 보람을 느낀다",
          en: "Do self-development or handle pending tasks and feel fulfilled",
          ja: "自己啓発をしたり溜まった仕事を処理して充実感を感じる",
          "zh-CN": "进行自我提升或处理积压的工作，感到充实",
          "zh-TW": "進行自我提升或處理積壓的工作，感到充實",
          vi: "Tự phát triển bản thân hoặc xử lý công việc tồn đọng và cảm thấy viên mãn",
          id: "Melakukan pengembangan diri atau menangani tugas yang tertunda dan merasa puas"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "미래를 위한 재테크 공부나 계획을 세운다",
          en: "Study financial management or make plans for the future",
          ja: "将来のための資産運用の勉強や計画を立てる",
          "zh-CN": "学习理财或为未来制定计划",
          "zh-TW": "學習理財或為未來制定計劃",
          vi: "Học quản lý tài chính hoặc lập kế hoạch cho tương lai",
          id: "Belajar manajemen keuangan atau membuat rencana untuk masa depan"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "암막 커튼을 치고 하루 종일 잠만 잔다",
          en: "Close the blackout curtains and sleep all day",
          ja: "遮光カーテンを閉めて一日中寝る",
          "zh-CN": "拉上遮光窗帘，睡一整天",
          "zh-TW": "拉上遮光窗簾，睡一整天",
          vi: "Kéo rèm chống sáng và ngủ cả ngày",
          id: "Menutup tirai gelap dan tidur sepanjang hari"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "타인에게 가장 듣고 싶은 위로의 말은?",
      en: "What comforting words would you most want to hear from others?",
      ja: "他人から最も聞きたい慰めの言葉は？",
      "zh-CN": "你最想从别人那里听到的安慰话是什么？",
      "zh-TW": "你最想從別人那裡聽到的安慰話是什麼？",
      vi: "Những lời an ủi nào bạn muốn nghe nhất từ người khác?",
      id: "Kata-kata penghiburan apa yang paling ingin Anda dengar dari orang lain?"
    },
    options: [
      {
        text: {
          ko: "\"네 잘못이 아니야. 넌 충분히 배려했어\"",
          en: "\"It's not your fault. You've been considerate enough\"",
          ja: "「あなたのせいじゃない。あなたは十分に気遣ったよ」",
          "zh-CN": "\"不是你的错。你已经足够体贴了\"",
          "zh-TW": "\"不是你的錯。你已經足夠體貼了\"",
          vi: "\"Không phải lỗi của bạn. Bạn đã đủ quan tâm rồi\"",
          id: "\"Ini bukan salahmu. Kamu sudah cukup memperhatikan\""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"좀 쉬어도 돼. 너 이미 잘하고 있어\"",
          en: "\"You can rest a bit. You're already doing well\"",
          ja: "「少し休んでもいいよ。あなたはもううまくやっている」",
          "zh-CN": "\"你可以休息一下。你已经做得很好了\"",
          "zh-TW": "\"你可以休息一下。你已經做得很好了\"",
          vi: "\"Bạn có thể nghỉ một chút. Bạn đã làm tốt rồi\"",
          id: "\"Kamu boleh istirahat sebentar. Kamu sudah melakukan dengan baik\""
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"너무 걱정하지 마. 다 잘 될 거야\"",
          en: "\"Don't worry too much. Everything will be fine\"",
          ja: "「心配しすぎないで。すべてうまくいくよ」",
          "zh-CN": "\"不要太担心。一切都会好起来的\"",
          "zh-TW": "\"不要太擔心。一切都會好起來的\"",
          vi: "\"Đừng lo lắng quá nhiều. Mọi thứ sẽ ổn thôi\"",
          id: "\"Jangan terlalu khawatir. Semuanya akan baik-baik saja\""
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "말보다는 그냥 조용히 곁에 있어 주는 게 좋다",
          en: "Rather than words, I prefer them to just quietly be by my side",
          ja: "言葉よりはただ静かにそばにいてくれるのがいい",
          "zh-CN": "比起言语，更希望他们能安静地陪在身边",
          "zh-TW": "比起言語，更希望他們能安靜地陪在身邊",
          vi: "Thay vì lời nói, tôi thích họ chỉ yên lặng ở bên cạnh",
          id: "Daripada kata-kata, saya lebih suka mereka hanya diam-diam berada di samping saya"
        },
        types: ["Type4", "Type5"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 생각하는 '성공'의 기준은?",
      en: "What is your standard for 'success'?",
      ja: "あなたが考える「成功」の基準は？",
      "zh-CN": "你认为的'成功'标准是什么？",
      "zh-TW": "你認為的'成功'標準是什麼？",
      vi: "Tiêu chuẩn 'thành công' của bạn là gì?",
      id: "Apa standar 'kesuksesan' menurut Anda?"
    },
    options: [
      {
        text: {
          ko: "모든 사람에게 사랑받고 인정받는 것",
          en: "Being loved and recognized by everyone",
          ja: "すべての人に愛され認められること",
          "zh-CN": "被所有人喜爱和认可",
          "zh-TW": "被所有人喜愛和認可",
          vi: "Được mọi người yêu thương và công nhận",
          id: "Dicintai dan diakui oleh semua orang"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "내 분야에서 최고의 전문가가 되어 완벽한 성과를 내는 것",
          en: "Becoming the best expert in my field and achieving perfect results",
          ja: "自分の分野で最高の専門家になり完璧な成果を出すこと",
          "zh-CN": "成为我所在领域的顶级专家，取得完美成果",
          "zh-TW": "成為我所屬領域的頂級專家，取得完美成果",
          vi: "Trở thành chuyên gia hàng đầu trong lĩnh vực của mình và đạt được kết quả hoàn hảo",
          id: "Menjadi ahli terbaik di bidang saya dan mencapai hasil sempurna"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "돈 걱정 없이 안정적이고 평화로운 삶을 사는 것",
          en: "Living a stable and peaceful life without financial worries",
          ja: "お金の心配なく安定した平和な生活を送ること",
          "zh-CN": "过上稳定和平的生活，不用担心钱",
          "zh-TW": "過上穩定和平的生活，不用擔心錢",
          vi: "Sống một cuộc sống ổn định và bình yên mà không lo về tiền bạc",
          id: "Hidup stabil dan damai tanpa khawatir tentang uang"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "몸과 마음이 건강하고 자유로운 것",
          en: "Being healthy in body and mind and free",
          ja: "心身ともに健康で自由であること",
          "zh-CN": "身心都健康且自由",
          "zh-TW": "身心都健康且自由",
          vi: "Khỏe mạnh về cả thể chất và tinh thần, và tự do",
          id: "Sehat secara fisik dan mental serta bebas"
        },
        types: ["Type4", "Type5"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "쇼핑을 할 때 당신의 패턴은?",
      en: "What is your pattern when shopping?",
      ja: "ショッピングをするときのあなたのパターンは？",
      "zh-CN": "购物时你的模式是什么？",
      "zh-TW": "購物時你的模式是什麼？",
      vi: "Kiểu mua sắm của bạn là gì?",
      id: "Apa pola Anda saat berbelanja?"
    },
    options: [
      {
        text: {
          ko: "남들이 좋다고 하거나 유행하는 것을 따라 산다",
          en: "Buy what others recommend or what's trending",
          ja: "他の人が良いと言ったり流行しているものを買う",
          "zh-CN": "买别人推荐的或流行的东西",
          "zh-TW": "買別人推薦的或流行的東西",
          vi: "Mua những gì người khác khuyên hoặc đang thịnh hành",
          id: "Membeli yang direkomendasikan orang lain atau yang sedang tren"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "최고급, 최고 성능의 제품을 사야 직성이 풀린다",
          en: "Must buy premium, top-performance products to be satisfied",
          ja: "最高級、最高性能の製品を買わないと気が済まない",
          "zh-CN": "必须买最高级、最高性能的产品才能满足",
          "zh-TW": "必須買最高級、最高性能的產品才能滿足",
          vi: "Phải mua sản phẩm cao cấp, hiệu năng tốt nhất mới thỏa mãn",
          id: "Harus membeli produk premium, berkinerja terbaik untuk merasa puas"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "나중을 대비해서 생필품이나 비상 식량을 쟁여둔다",
          en: "Stock up on daily necessities or emergency food for later",
          ja: "後々に備えて生活必需品や非常食を備蓄する",
          "zh-CN": "为以后准备，囤积生活必需品或应急食品",
          "zh-TW": "為以後準備，囤積生活必需品或應急食品",
          vi: "Dự trữ đồ dùng thiết yếu hoặc thực phẩm khẩn cấp cho tương lai",
          id: "Menimbun barang kebutuhan sehari-hari atau makanan darurat untuk nanti"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "귀찮아서 인터넷으로 대충 사거나 쇼핑 자체를 잘 안 한다",
          en: "Too lazy, so I just buy roughly online or don't shop much",
          ja: "面倒なのでネットで適当に買うか、ショッピング自体をあまりしない",
          "zh-CN": "太麻烦，所以只是随便在网上买或不太购物",
          "zh-TW": "太麻煩，所以只是隨便在網上買或不太購物",
          vi: "Lười nên chỉ mua đại trên mạng hoặc không mua sắm nhiều",
          id: "Terlalu malas, jadi hanya membeli secara sembarangan online atau tidak banyak berbelanja"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "친구가 약속 시간에 늦었을 때?",
      en: "When a friend is late for an appointment?",
      ja: "友達が約束の時間に遅れたとき？",
      "zh-CN": "当朋友约会迟到时？",
      "zh-TW": "當朋友約會遲到時？",
      vi: "Khi bạn bè đến muộn cuộc hẹn?",
      id: "Ketika teman terlambat untuk janji temu?"
    },
    options: [
      {
        text: {
          ko: "\"괜찮아~\"라고 말하지만 속으로는 '나를 무시하나?' 생각한다",
          en: "Say \"It's okay~\" but inside think 'Are they ignoring me?'",
          ja: "「大丈夫~」と言うが心の中では「私を無視しているのかな？」と思う",
          "zh-CN": "说\"没关系~\"，但心里想'他们是在忽视我吗？'",
          "zh-TW": "說\"沒關係~\"，但心裡想'他們是在忽視我嗎？'",
          vi: "Nói \"Không sao~\" nhưng trong lòng nghĩ 'Họ có đang coi thường tôi không?'",
          id: "Mengatakan \"Tidak apa-apa~\" tetapi di dalam hati berpikir 'Apakah mereka mengabaikan saya?'"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"시간 관리를 왜 이렇게 못 해?\" 답답하고 화가 난다",
          en: "\"Why can't you manage time properly?\" Feel frustrated and angry",
          ja: "「時間管理をどうしてこんなにできないの？」イライラして怒る",
          "zh-CN": "\"为什么这么不会管理时间？\"感到沮丧和生气",
          "zh-TW": "\"為什麼這麼不會管理時間？\"感到沮喪和生氣",
          vi: "\"Tại sao không thể quản lý thời gian tốt như vậy?\" Cảm thấy bực bội và tức giận",
          id: "\"Mengapa kamu tidak bisa mengelola waktu dengan baik?\" Merasa frustrasi dan marah"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "'오다가 사고라도 났나?' 별별 걱정을 다 한다",
          en: "'Did they have an accident on the way?' Worry about all sorts of things",
          ja: "「来る途中で事故でもあったのかな？」あれこれ心配する",
          "zh-CN": "\"他们在路上出事故了吗？\"担心各种事情",
          "zh-TW": "\"他們在路上出事故了嗎？\"擔心各種事情",
          vi: "'Có phải họ gặp tai nạn trên đường không?' Lo lắng đủ thứ",
          id: "'Apakah mereka mengalami kecelakaan di jalan?' Mengkhawatirkan berbagai hal"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "늦든 말든 별로 상관없다. 나도 쉬고 있으면 되니까",
          en: "Late or not, I don't really care. I can just rest anyway",
          ja: "遅れても遅れなくてもあまり気にしない。私も休んでいればいいから",
          "zh-CN": "迟到与否，不太在意。反正我也可以休息",
          "zh-TW": "遲到與否，不太在意。反正我也可以休息",
          vi: "Muộn hay không, tôi không thực sự quan tâm. Tôi cũng có thể nghỉ ngơi",
          id: "Terlambat atau tidak, saya tidak terlalu peduli. Saya juga bisa beristirahat"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "잠들기 전, 이불 속에서 하는 행동은?",
      en: "What do you do under the covers before falling asleep?",
      ja: "眠る前、布団の中でする行動は？",
      "zh-CN": "睡前在被子里做什么？",
      "zh-TW": "睡前在被子裡做什麼？",
      vi: "Bạn làm gì dưới chăn trước khi ngủ?",
      id: "Apa yang Anda lakukan di bawah selimut sebelum tertidur?"
    },
    options: [
      {
        text: {
          ko: "SNS를 보며 남들의 행복한 모습과 나를 비교한다",
          en: "Browse SNS and compare others' happy lives with mine",
          ja: "SNSを見ながら他の人の幸せな様子と自分を比較する",
          "zh-CN": "浏览SNS，将别人的幸福生活与自己比较",
          "zh-TW": "瀏覽SNS，將別人的幸福生活與自己比較",
          vi: "Xem SNS và so sánh cuộc sống hạnh phúc của người khác với mình",
          id: "Melihat SNS dan membandingkan kehidupan bahagia orang lain dengan saya"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "오늘 하루 실수한 건 없는지 자기 반성의 시간을 갖는다",
          en: "Have a time of self-reflection on whether I made any mistakes today",
          ja: "今日一日ミスしたことはないか自己反省の時間を持つ",
          "zh-CN": "进行自我反省，思考今天是否犯了错误",
          "zh-TW": "進行自我反省，思考今天是否犯了錯誤",
          vi: "Có thời gian tự phản ánh xem hôm nay tôi có phạm sai lầm gì không",
          id: "Meluangkan waktu untuk refleksi diri apakah saya melakukan kesalahan hari ini"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "내일 일어날 일들을 미리 걱정하느라 뒤척인다",
          en: "Toss and turn worrying about what will happen tomorrow",
          ja: "明日起こることを事前に心配して寝返りを打つ",
          "zh-CN": "提前担心明天会发生的事情，翻来覆去",
          "zh-TW": "提前擔心明天會發生的事情，翻來覆去",
          vi: "Trằn trọc lo lắng về những gì sẽ xảy ra vào ngày mai",
          id: "Berguling-guling karena mengkhawatirkan apa yang akan terjadi besok"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "스마트폰도 안 본다. 눕자마자 기절한다",
          en: "Don't even look at my phone. Pass out as soon as I lie down",
          ja: "スマホも見ない。横になったらすぐ気絶する",
          "zh-CN": "连手机都不看。一躺下就睡着",
          "zh-TW": "連手機都不看。一躺下就睡著",
          vi: "Thậm chí không xem điện thoại. Ngủ ngay khi nằm xuống",
          id: "Bahkan tidak melihat ponsel. Langsung tertidur begitu berbaring"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "현재 당신에게 가장 필요한 것은?",
      en: "What do you need most right now?",
      ja: "現在あなたに最も必要なものは？",
      "zh-CN": "现在你最需要的是什么？",
      "zh-TW": "現在你最需要的是什麼？",
      vi: "Bạn cần gì nhất ngay bây giờ?",
      id: "Apa yang paling Anda butuhkan saat ini?"
    },
    options: [
      {
        text: {
          ko: "거절할 수 있는 용기와 미움받을 용기",
          en: "Courage to say no and courage to be disliked",
          ja: "断る勇気と嫌われる勇気",
          "zh-CN": "拒绝的勇气和被讨厌的勇气",
          "zh-TW": "拒絕的勇氣和被討厭的勇氣",
          vi: "Can đảm để từ chối và can đảm để bị ghét",
          id: "Keberanian untuk mengatakan tidak dan keberanian untuk dibenci"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"이 정도면 됐어\"라고 만족할 수 있는 여유",
          en: "The leisure to be satisfied saying \"This is enough\"",
          ja: "「これで十分だ」と満足できる余裕",
          "zh-CN": "能够满足地说\"这就够了\"的从容",
          "zh-TW": "能夠滿足地說\"這就夠了\"的從容",
          vi: "Sự thoải mái để hài lòng nói \"Thế này là đủ rồi\"",
          id: "Kelonggaran untuk merasa puas mengatakan \"Ini sudah cukup\""
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "불확실한 미래를 믿고 기다리는 긍정 마인드",
          en: "Positive mindset that trusts and waits for an uncertain future",
          ja: "不確実な未来を信じて待つポジティブなマインド",
          "zh-CN": "相信并等待不确定未来的积极心态",
          "zh-TW": "相信並等待不確定未來的積極心態",
          vi: "Tư duy tích cực tin tưởng và chờ đợi tương lai không chắc chắn",
          id: "Pola pikir positif yang mempercayai dan menunggu masa depan yang tidak pasti"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "외부 자극을 차단하고 멍 때리는 휴식",
          en: "Rest that blocks external stimuli and spaces out",
          ja: "外部刺激を遮断してぼーっとする休息",
          "zh-CN": "屏蔽外部刺激、发呆的休息",
          "zh-TW": "屏蔽外部刺激、發呆的休息",
          vi: "Nghỉ ngơi chặn các kích thích bên ngoài và thả hồn",
          id: "Istirahat yang memblokir stimuli eksternal dan melamun"
        },
        types: ["Type4", "Type5"]
      }
    ]
  }
];

export const phase2StressCareResults: Phase2StressCareResult[] = [
  {
    type: "Type1",
    emoji: "😶",
    title: {
      ko: "착한 아이 콤플렉스, 인간관계 스트레스",
      en: "Good Person Complex, Relationship Stress",
      ja: "良い子コンプレックス、人間関係ストレス",
      "zh-CN": "好人情结，人际关系压力",
      "zh-TW": "好人情結，人際關係壓力",
      vi: "Hội chứng người tốt, Căng thẳng trong mối quan hệ",
      id: "Kompleks Orang Baik, Stres Hubungan"
    },
    shortDescription: {
      ko: "\"거절이 제일 어려워요... 가면 쓴 스마일\"",
      en: "\"Rejecting is the hardest... A masked smile\"",
      ja: "「断ることが一番難しい...仮面をかぶった笑顔」",
      "zh-CN": "\"拒绝是最难的...戴着面具的微笑\"",
      "zh-TW": "\"拒絕是最難的...戴著面具的微笑\"",
      vi: "\"Từ chối là khó nhất... Nụ cười đeo mặt nạ\"",
      id: "\"Menolak adalah yang paling sulit... Senyuman bermasker\""
    },
    description: {
      ko: "당신은 타인의 시선을 지나치게 의식하고 모든 사람에게 좋은 사람이 되려고 노력합니다. 내 감정보다 남의 기분을 먼저 살피느라 정작 본인은 속으로 곪아가고 있습니다. 갈등을 피하기 위해 참고 넘어가는 것이 습관이 되었습니다.",
      en: "You are overly conscious of others' gazes and try hard to be a good person to everyone. You check others' moods before your own feelings, so you're actually festering inside. It has become a habit to endure and let things slide to avoid conflict.",
      ja: "あなたは他人の視線を過剰に意識し、すべての人に良い人になろうと努力します。自分の感情よりも他人の気持ちを先に気遣うため、実は自分自身は内側で腐っていっています。衝突を避けるために我慢してやり過ごすことが習慣になっています。",
      "zh-CN": "你过度在意别人的眼光，努力成为所有人眼中的好人。你优先考虑别人的心情而不是自己的感受，实际上内心正在腐烂。为了避免冲突而忍受和得过且过已成为习惯。",
      "zh-TW": "你過度在意別人的眼光，努力成為所有人眼中的好人。你優先考慮別人的心情而不是自己的感受，實際上內心正在腐爛。為了避免衝突而忍受和得過且過已成為習慣。",
      vi: "Bạn quá ý thức về ánh mắt của người khác và cố gắng trở thành người tốt với mọi người. Bạn quan tâm đến tâm trạng của người khác trước cảm xúc của chính mình, vì vậy thực sự bạn đang thối rữa bên trong. Nó đã trở thành thói quen để chịu đựng và bỏ qua để tránh xung đột.",
      id: "Anda terlalu sadar akan tatapan orang lain dan berusaha keras menjadi orang baik untuk semua orang. Anda memeriksa suasana hati orang lain sebelum perasaan Anda sendiri, jadi Anda sebenarnya membusuk di dalam. Menjadi kebiasaan untuk menahan dan membiarkan sesuatu berlalu untuk menghindari konflik."
    },
    symptoms: {
      ko: "거절 못 함, 눈치 봄, 억울함",
      en: "Can't refuse, overly aware, feeling wronged",
      ja: "断れない、空気を読みすぎる、悔しい",
      "zh-CN": "无法拒绝、过度察言观色、委屈",
      "zh-TW": "無法拒絕、過度察言觀色、委屈",
      vi: "Không thể từ chối, quá nhạy cảm, cảm thấy oan ức",
      id: "Tidak bisa menolak, terlalu peka, merasa diperlakukan tidak adil"
    },
    prescription: {
      ko: "'단호하게 거절하는 연습'이 필요합니다. 오늘은 남이 아닌 나를 먼저 챙기세요.",
      en: "You need to practice 'firmly refusing'. Today, take care of yourself first, not others.",
      ja: "「断固として断る練習」が必要です。今日は他人ではなく自分をまず大切にしてください。",
      "zh-CN": "你需要练习'坚决拒绝'。今天，先照顾好自己，而不是别人。",
      "zh-TW": "你需要練習'堅決拒絕'。今天，先照顧好自己，而不是別人。",
      vi: "Bạn cần thực hành 'từ chối một cách kiên quyết'. Hôm nay, hãy chăm sóc bản thân trước, không phải người khác.",
      id: "Anda perlu berlatih 'menolak dengan tegas'. Hari ini, rawat diri sendiri dulu, bukan orang lain."
    },
    recommendedActivities: {
      ko: "혼자 영화 보기, SNS 로그아웃",
      en: "Watching movies alone, logging out of SNS",
      ja: "一人で映画を見る、SNSからログアウトする",
      "zh-CN": "独自看电影，退出SNS",
      "zh-TW": "獨自看電影，退出SNS",
      vi: "Xem phim một mình, đăng xuất SNS",
      id: "Menonton film sendirian, logout dari SNS"
    }
  },
  {
    type: "Type2",
    emoji: "🤯",
    title: {
      ko: "24시간 풀가동, 성과 강박형 번아웃",
      en: "24/7 Full Operation, Performance Obsessive Burnout",
      ja: "24時間フル稼働、成果強迫型バーンアウト",
      "zh-CN": "24小时全力运转，绩效强迫型倦怠",
      "zh-TW": "24小時全力運轉，績效強迫型倦怠",
      vi: "Vận hành 24/7, Kiệt sức do ám ảnh thành tích",
      id: "Operasi Penuh 24/7, Burnout Obsesif Kinerja"
    },
    shortDescription: {
      ko: "\"실수는 용납 못 해! 완벽주의자\"",
      en: "\"Mistakes are unacceptable! Perfectionist\"",
      ja: "「ミスは許容できない！完璧主義者」",
      "zh-CN": "\"错误不可容忍！完美主义者\"",
      "zh-TW": "\"錯誤不可容忍！完美主義者\"",
      vi: "\"Sai lầm không thể chấp nhận! Người theo chủ nghĩa hoàn hảo\"",
      id: "\"Kesalahan tidak dapat diterima! Perfeksionis\""
    },
    description: {
      ko: "당신은 자신에 대한 기준이 매우 높고, 성취 지향적입니다. 쉬는 것을 죄책감으로 느끼며, 끊임없이 무언가를 해야만 안심이 됩니다. 남들은 당신을 능력자라고 부르지만, 당신은 스스로를 채찍질하느라 이미 에너지가 고갈된 상태입니다.",
      en: "You have very high standards for yourself and are achievement-oriented. You feel guilty about resting, and only feel at ease when constantly doing something. Others call you capable, but you've already exhausted your energy by whipping yourself.",
      ja: "あなたは自分に対する基準が非常に高く、達成志向的です。休むことを罪悪感として感じ、絶えず何かをしなければ安心できません。他人はあなたを有能者と呼びますが、あなたは自分を鞭打つことで既にエネルギーが枯渇した状態です。",
      "zh-CN": "你对自己有很高的标准，以成就为导向。你会为休息感到内疚，只有不断做些什么才能安心。别人称你为能人，但你已经因为鞭策自己而精疲力尽了。",
      "zh-TW": "你對自己有很高的標準，以成就為導向。你會為休息感到內疚，只有不斷做些什麼才能安心。別人稱你為能人，但你已經因為鞭策自己而精疲力盡了。",
      vi: "Bạn có tiêu chuẩn rất cao với bản thân và định hướng thành tựu. Bạn cảm thấy tội lỗi khi nghỉ ngơi và chỉ cảm thấy yên tâm khi liên tục làm gì đó. Người khác gọi bạn là người có năng lực, nhưng bạn đã kiệt sức vì tự thúc đẩy bản thân.",
      id: "Anda memiliki standar yang sangat tinggi untuk diri sendiri dan berorientasi pada prestasi. Anda merasa bersalah tentang istirahat, dan hanya merasa tenang ketika terus-menerus melakukan sesuatu. Orang lain menyebut Anda mampu, tetapi Anda sudah kehabisan energi karena mencambuk diri sendiri."
    },
    symptoms: {
      ko: "일 중독, 자기 비하, 만성 긴장",
      en: "Workaholism, self-deprecation, chronic tension",
      ja: "仕事中毒、自己卑下、慢性的緊張",
      "zh-CN": "工作狂、自我贬低、慢性紧张",
      "zh-TW": "工作狂、自我貶低、慢性緊張",
      vi: "Nghiện công việc, tự ti, căng thẳng mãn tính",
      id: "Workaholisme, merendahkan diri sendiri, ketegangan kronis"
    },
    prescription: {
      ko: "'대충 하는 미학'을 배워야 합니다. 80점만 맞아도 세상은 무너지지 않습니다.",
      en: "You need to learn the 'aesthetics of doing roughly'. The world won't collapse even if you only get 80 points.",
      ja: "「適当にやる美学」を学ぶ必要があります。80点だけ取っても世界は崩壊しません。",
      "zh-CN": "你需要学习'敷衍了事的美学'。即使只得到80分，世界也不会崩塌。",
      "zh-TW": "你需要學習'敷衍了事的美學'。即使只得到80分，世界也不會崩塌。",
      vi: "Bạn cần học 'thẩm mỹ của việc làm đại khái'. Thế giới sẽ không sụp đổ ngay cả khi bạn chỉ đạt 80 điểm.",
      id: "Anda perlu mempelajari 'estetika melakukan secara sembarangan'. Dunia tidak akan runtuh bahkan jika Anda hanya mendapat 80 poin."
    },
    recommendedActivities: {
      ko: "멍 때리기, 아무 계획 없는 여행",
      en: "Spacing out, a trip with no plans",
      ja: "ぼーっとする、何も計画のない旅行",
      "zh-CN": "发呆、无计划的旅行",
      "zh-TW": "發呆、無計劃的旅行",
      vi: "Thả hồn, một chuyến đi không có kế hoạch",
      id: "Melamun, perjalanan tanpa rencana"
    }
  },
  {
    type: "Type3",
    emoji: "☁️",
    title: {
      ko: "프로 걱정러, 만성 불안 증후군",
      en: "Professional Worrier, Chronic Anxiety Syndrome",
      ja: "プロ心配性、慢性不安症候群",
      "zh-CN": "专业担忧者，慢性焦虑综合征",
      "zh-TW": "專業擔憂者，慢性焦慮綜合徵",
      vi: "Người lo lắng chuyên nghiệp, Hội chứng lo âu mãn tính",
      id: "Pendamba Profesional, Sindrom Kecemasan Kronis"
    },
    shortDescription: {
      ko: "\"만약에... 그러면 어떡하지?\"",
      en: "\"What if... then what do I do?\"",
      ja: "「もし...そうしたらどうしよう？」",
      "zh-CN": "\"如果...那该怎么办？\"",
      "zh-TW": "\"如果...那該怎麼辦？\"",
      vi: "\"Nếu như... thì phải làm sao?\"",
      id: "\"Bagaimana jika... lalu apa yang harus saya lakukan?\""
    },
    description: {
      ko: "당신은 아직 일어나지 않은 일에 대해 미리 사서 걱정하는 스타일입니다. 미래의 불확실성을 견디기 힘들어하며, 항상 최악의 상황을 대비하려고 합니다. 꼼꼼하고 신중한 것은 장점이지만, 과도한 걱정은 현재의 행복을 갉아먹습니다.",
      en: "You are the type to worry in advance about things that haven't happened yet. You find it hard to bear the uncertainty of the future and always try to prepare for the worst. Being careful and cautious is an advantage, but excessive worry eats away at your current happiness.",
      ja: "あなたはまだ起こっていないことについて事前に心配するタイプです。未来の不確実性に耐えることが難しく、常に最悪の状況に備えようとします。細心で慎重なことは利点ですが、過度な心配は現在の幸せを蝕みます。",
      "zh-CN": "你是那种会为尚未发生的事情提前担心的类型。你难以承受未来的不确定性，总是试图为最坏的情况做准备。细心和谨慎是优点，但过度的担忧会侵蚀你当前的幸福。",
      "zh-TW": "你是那種會為尚未發生的事情提前擔心的類型。你難以承受未來的不確定性，總是試圖為最壞的情況做準備。細心和謹慎是優點，但過度的擔憂會侵蝕你當前的幸福。",
      vi: "Bạn là kiểu người lo lắng trước về những việc chưa xảy ra. Bạn cảm thấy khó chịu đựng sự không chắc chắn của tương lai và luôn cố gắng chuẩn bị cho tình huống xấu nhất. Cẩn thận và thận trọng là ưu điểm, nhưng lo lắng quá mức sẽ ăn mòn hạnh phúc hiện tại của bạn.",
      id: "Anda adalah tipe yang mengkhawatirkan hal-hal yang belum terjadi. Anda merasa sulit menahan ketidakpastian masa depan dan selalu berusaha mempersiapkan situasi terburuk. Menjadi hati-hati dan waspada adalah kelebihan, tetapi kekhawatiran berlebihan menggerogoti kebahagiaan Anda saat ini."
    },
    symptoms: {
      ko: "꼬리에 꼬리를 무는 잡생각, 불면증, 예민함",
      en: "Endless chain of random thoughts, insomnia, sensitivity",
      ja: "次々と連なる雑念、不眠症、敏感さ",
      "zh-CN": "没完没了的杂念、失眠、敏感",
      "zh-TW": "沒完沒了的雜念、失眠、敏感",
      vi: "Chuỗi suy nghĩ linh tinh bất tận, mất ngủ, nhạy cảm",
      id: "Rantai pikiran acak yang tak ada habisnya, insomnia, sensitivitas"
    },
    prescription: {
      ko: "'지금, 여기'에 집중하세요. 걱정의 90%는 실제로 일어나지 않습니다.",
      en: "Focus on 'here and now'. 90% of worries don't actually happen.",
      ja: "「今、ここ」に集中してください。心配の90%は実際には起こりません。",
      "zh-CN": "专注于'此时此地'。90%的担忧实际上不会发生。",
      "zh-TW": "專注於'此時此地'。90%的擔憂實際上不會發生。",
      vi: "Tập trung vào 'bây giờ, ở đây'. 90% lo lắng thực sự không xảy ra.",
      id: "Fokus pada 'di sini dan sekarang'. 90% kekhawatiran sebenarnya tidak terjadi."
    },
    recommendedActivities: {
      ko: "명상, 요가, 단순 반복 작업(컬러링북 등)",
      en: "Meditation, yoga, simple repetitive tasks (coloring books, etc.)",
      ja: "瞑想、ヨガ、単純反復作業（塗り絵など）",
      "zh-CN": "冥想、瑜伽、简单的重复工作（填色书等）",
      "zh-TW": "冥想、瑜伽、簡單的重複工作（填色書等）",
      vi: "Thiền, yoga, các công việc lặp lại đơn giản (sách tô màu, v.v.)",
      id: "Meditasi, yoga, tugas berulang sederhana (buku mewarnai, dll)"
    }
  },
  {
    type: "Type4",
    emoji: "⚡",
    title: {
      ko: "예민한 개복치, 감각 과부하 스트레스",
      en: "Sensitive Ocean Sunfish, Sensory Overload Stress",
      ja: "敏感なマンボウ、感覚過負荷ストレス",
      "zh-CN": "敏感的翻车鱼，感官超载压力",
      "zh-TW": "敏感的翻車魚，感官超載壓力",
      vi: "Cá mặt trời nhạy cảm, Căng thẳng quá tải cảm giác",
      id: "Ikan Matahari Sensitif, Stres Kelebihan Sensorik"
    },
    shortDescription: {
      ko: "\"모든 자극이 피곤해... 동굴이 필요해\"",
      en: "\"All stimuli are tiring... I need a cave\"",
      ja: "「すべての刺激が疲れる...洞窟が必要だ」",
      "zh-CN": "\"所有刺激都很累...我需要一个洞穴\"",
      "zh-TW": "\"所有刺激都很累...我需要一個洞穴\"",
      vi: "\"Mọi kích thích đều mệt mỏi... Tôi cần một cái hang\"",
      id: "\"Semua stimuli melelahkan... Aku perlu gua\""
    },
    description: {
      ko: "당신은 타고난 감각이 섬세하고 예민한 사람입니다(HSP). 빛, 소리, 냄새, 사람 많은 곳 등 외부 자극에 남들보다 쉽게 피로감을 느낍니다. 성격이 까칠한 게 아니라, 신경계가 예민하게 반응하는 것입니다. 혼자만의 충전 시간이 필수적입니다.",
      en: "You are a person with naturally delicate and sensitive senses (HSP). You feel fatigue more easily than others from external stimuli like light, sound, smell, crowded places. It's not that your personality is prickly, but that your nervous system reacts sensitively. Alone time to recharge is essential.",
      ja: "あなたは生まれつき感覚が繊細で敏感な人です（HSP）。光、音、匂い、人が多い場所などの外部刺激に他人より簡単に疲労感を感じます。性格がきついのではなく、神経系が敏感に反応するのです。一人だけの充電時間が必須です。",
      "zh-CN": "你是一个天生感觉细腻敏感的人（HSP）。你比其他人更容易因外部刺激（如光线、声音、气味、拥挤的地方）而感到疲劳。不是你的性格刻薄，而是你的神经系统反应敏感。独自充电的时间是必不可少的。",
      "zh-TW": "你是一個天生感覺細膩敏感的人（HSP）。你比其他人更容易因外部刺激（如光線、聲音、氣味、擁擠的地方）而感到疲勞。不是你的性格刻薄，而是你的神經系統反應敏感。獨自充電的時間是必不可少的。",
      vi: "Bạn là người có giác quan tinh tế và nhạy cảm bẩm sinh (HSP). Bạn cảm thấy mệt mỏi dễ dàng hơn người khác từ các kích thích bên ngoài như ánh sáng, âm thanh, mùi, nơi đông người. Không phải tính cách bạn khó chịu, mà là hệ thần kinh của bạn phản ứng nhạy cảm. Thời gian một mình để nạp lại năng lượng là điều cần thiết.",
      id: "Anda adalah orang dengan indera yang halus dan sensitif secara alami (HSP). Anda merasa lelah lebih mudah daripada orang lain dari stimuli eksternal seperti cahaya, suara, bau, tempat ramai. Bukan karena kepribadian Anda rewel, tetapi sistem saraf Anda bereaksi dengan sensitif. Waktu sendirian untuk mengisi ulang adalah penting."
    },
    symptoms: {
      ko: "두통, 신경질, 빠른 방전",
      en: "Headache, irritability, quick discharge",
      ja: "頭痛、神経質、急速な消耗",
      "zh-CN": "头痛、易怒、快速放电",
      "zh-TW": "頭痛、易怒、快速放電",
      vi: "Đau đầu, dễ cáu kỉnh, nhanh cạn kiệt",
      id: "Sakit kepala, mudah tersinggung, cepat terkuras"
    },
    prescription: {
      ko: "'철저한 고립'이 약입니다. 외부 자극을 차단하고 뇌를 쉬게 해주세요.",
      en: "'Complete isolation' is the medicine. Block external stimuli and let your brain rest.",
      ja: "「徹底的な孤立」が薬です。外部刺激を遮断して脳を休ませてください。",
      "zh-CN": "'彻底隔离'是良药。屏蔽外部刺激，让大脑休息。",
      "zh-TW": "'徹底隔離'是良藥。屏蔽外部刺激，讓大腦休息。",
      vi: "'Cô lập hoàn toàn' là thuốc. Chặn các kích thích bên ngoài và để bộ não nghỉ ngơi.",
      id: "'Isolasi total' adalah obatnya. Blokir stimuli eksternal dan biarkan otak Anda beristirahat."
    },
    recommendedActivities: {
      ko: "ASMR 듣기, 반신욕, 수면 안대 쓰고 낮잠",
      en: "Listening to ASMR, half-body bath, napping with sleep mask",
      ja: "ASMRを聴く、半身浴、睡眠マスクをつけて昼寝",
      "zh-CN": "听ASMR、半身浴、戴睡眠眼罩午睡",
      "zh-TW": "聽ASMR、半身浴、戴睡眠眼罩午睡",
      vi: "Nghe ASMR, tắm nửa người, ngủ trưa với mặt nạ ngủ",
      id: "Mendengarkan ASMR, mandi setengah badan, tidur siang dengan masker tidur"
    }
  },
  {
    type: "Type5",
    emoji: "🍂",
    title: {
      ko: "텅 빈 껍데기, 무기력증 & 권태기",
      en: "Empty Shell, Lethargy & Apathy",
      ja: "空っぽの殻、無気力症＆倦怠期",
      "zh-CN": "空壳，无精打采和倦怠期",
      "zh-TW": "空殼，無精打采和倦怠期",
      vi: "Vỏ rỗng, Uể oải & Chán nản",
      id: "Cangkang Kosong, Kelesuan & Apati"
    },
    shortDescription: {
      ko: "\"아무것도 하기 싫다. 이미 아무것도 안 하고 있지만...\"",
      en: "\"I don't want to do anything. I'm already not doing anything though...\"",
      ja: "「何もしたくない。もう何もしていないけど...」",
      "zh-CN": "\"什么都不想做。虽然已经什么都没做...\"",
      "zh-TW": "\"什麼都不想做。雖然已經什麼都沒做...\"",
      vi: "\"Không muốn làm gì cả. Mặc dù tôi đã không làm gì rồi...\"",
      id: "\"Tidak ingin melakukan apa pun. Meskipun saya sudah tidak melakukan apa pun...\""
    },
    description: {
      ko: "당신은 현재 특별한 스트레스 사건보다는, 삶의 의미나 재미를 잃어버린 상태입니다. 뭘 해도 즐겁지 않고, 감흥이 없습니다. 번아웃의 다음 단계일 수도 있고, 반복되는 일상에 지친 것일 수도 있습니다. 에너지 레벨이 바닥이라 손가락 하나 까딱하기 힘듭니다.",
      en: "You are in a state where you've lost the meaning or fun of life rather than experiencing a specific stressful event. Nothing brings joy, and there's no inspiration. It might be the next stage of burnout, or you might be tired of repetitive daily life. Your energy level is at rock bottom, so it's hard to even lift a finger.",
      ja: "あなたは現在、特別なストレス事件よりも、人生の意味や楽しみを失った状態です。何をしても楽しくなく、感動がありません。バーンアウトの次の段階かもしれませんし、繰り返される日常に疲れたのかもしれません。エネルギーレベルが底辺なので、指一本動かすのも難しいです。",
      "zh-CN": "你处于一种失去了生活意义或乐趣的状态，而不是经历特定的压力事件。做什么都不快乐，没有灵感。可能是倦怠的下一个阶段，或者你可能厌倦了重复的日常生活。你的能量水平处于最低点，所以连动一根手指都很困难。",
      "zh-TW": "你處於一種失去了生活意義或樂趣的狀態，而不是經歷特定的壓力事件。做什麼都不快樂，沒有靈感。可能是倦怠的下一個階段，或者你可能厭倦了重複的日常生活。你的能量水平處於最低點，所以連動一根手指都很困難。",
      vi: "Bạn đang trong trạng thái mất đi ý nghĩa hoặc niềm vui của cuộc sống hơn là trải qua một sự kiện căng thẳng cụ thể. Không gì mang lại niềm vui, và không có cảm hứng. Nó có thể là giai đoạn tiếp theo của kiệt sức, hoặc bạn có thể mệt mỏi với cuộc sống hàng ngày lặp đi lặp lại. Mức năng lượng của bạn ở mức thấp nhất, nên khó khăn ngay cả để nhúc nhích một ngón tay.",
      id: "Anda berada dalam keadaan di mana Anda telah kehilangan makna atau kesenangan hidup daripada mengalami peristiwa stres tertentu. Tidak ada yang membawa sukacita, dan tidak ada inspirasi. Mungkin itu tahap selanjutnya dari burnout, atau Anda mungkin lelah dengan kehidupan sehari-hari yang berulang. Tingkat energi Anda berada di titik terendah, jadi sulit bahkan untuk menggerakkan jari."
    },
    symptoms: {
      ko: "귀차니즘, 감정 무뎌짐, 식욕 저하/폭식",
      en: "Laziness, emotional numbness, decreased appetite/binge eating",
      ja: "面倒くさがり、感情鈍麻、食欲低下/過食",
      "zh-CN": "懒惰、情感麻木、食欲下降/暴食",
      "zh-TW": "懶惰、情感麻木、食慾下降/暴食",
      vi: "Lười biếng, tê liệt cảm xúc, giảm cảm giác thèm ăn/ăn vô độ",
      id: "Kemalasan, mati rasa emosional, penurunan nafsu makan/makan berlebihan"
    },
    prescription: {
      ko: "'아주 작은 성취'가 필요합니다. 거창한 목표 대신 이불 개기부터 시작하세요.",
      en: "You need 'very small achievements'. Start with making the bed instead of grand goals.",
      ja: "「非常に小さな達成」が必要です。壮大な目標の代わりに布団を整えることから始めてください。",
      "zh-CN": "你需要'非常小的成就'。从整理床铺开始，而不是宏伟的目标。",
      "zh-TW": "你需要'非常小的成就'。從整理床鋪開始，而不是宏偉的目標。",
      vi: "Bạn cần 'những thành tựu rất nhỏ'. Bắt đầu với việc dọn giường thay vì những mục tiêu lớn lao.",
      id: "Anda perlu 'pencapaian yang sangat kecil'. Mulai dengan merapikan tempat tidur daripada tujuan besar."
    },
    recommendedActivities: {
      ko: "햇빛 쐬며 산책, 맛있는 디저트 먹기",
      en: "Walking in the sunshine, eating delicious dessert",
      ja: "日光浴しながら散歩、美味しいデザートを食べる",
      "zh-CN": "在阳光下散步，吃美味的甜点",
      "zh-TW": "在陽光下散步，吃美味的甜點",
      vi: "Đi bộ dưới ánh nắng mặt trời, ăn món tráng miệng ngon",
      id: "Berjalan-jalan di bawah sinar matahari, makan makanan penutup lezat"
    }
  }
];

export function calculatePhase2StressCareResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type2"; // Default value (highest priority)
  const priority = ["Type2", "Type1", "Type3", "Type5", "Type4"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
