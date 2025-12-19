export interface Phase2ConflictReasonQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 각 선택지가 어떤 타입에 점수를 주는지
  }[];
}

export interface Phase2ConflictReasonResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  conflictCauses: Record<string, string>; // 주요 갈등 원인
  solution: Record<string, string>; // 해결책
}

export const phase2ConflictReasonQuestions: Phase2ConflictReasonQuestion[] = [
  {
    id: 1,
    question: {
      ko: "연인과 연락이 안 될 때 당신의 상태는?",
      en: "What is your state when you can't reach your partner?",
      ja: "恋人と連絡が取れないとき、あなたの状態は？",
      "zh-CN": "联系不上恋人时，你的状态是？",
      "zh-TW": "聯絡不上戀人時，你的狀態是？",
      vi: "Bạn cảm thấy thế nào khi không liên lạc được với người yêu?",
      id: "Bagaimana perasaan Anda ketika tidak bisa menghubungi pasangan?"
    },
    options: [
      {
        text: {
          ko: "\"바쁜가 보다.\" 별생각 없이 내 할 일을 한다",
          en: "\"They must be busy.\" I just do my own thing without thinking much",
          ja: "「忙しいんだろうな」特に気にせず自分のことをする",
          "zh-CN": "\"应该很忙吧。\" 不以为意，继续做自己的事",
          "zh-TW": "\"應該很忙吧。\" 不以為意，繼續做自己的事",
          vi: "\"Chắc họ đang bận.\" Tôi chỉ làm việc của mình mà không nghĩ nhiều",
          id: "\"Mereka pasti sibuk.\" Saya hanya melakukan pekerjaan saya tanpa berpikir banyak"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "\"지금 뭐 해?\" 10분 간격으로 계속 폰을 확인하며 불안해한다",
          en: "\"What are they doing now?\" I keep checking my phone every 10 minutes anxiously",
          ja: "「今何してる？」10分おきに携帯を確認して不安になる",
          "zh-CN": "\"现在在做什么？\" 每10分钟就查看手机，感到不安",
          "zh-TW": "\"現在在做什麼？\" 每10分鐘就查看手機，感到不安",
          vi: "\"Họ đang làm gì bây giờ?\" Tôi liên tục kiểm tra điện thoại mỗi 10 phút một cách lo lắng",
          id: "\"Apa yang mereka lakukan sekarang?\" Saya terus memeriksa ponsel setiap 10 menit dengan cemas"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"왜 연락 안 해?\" 화가 나서 전화를 계속 건다",
          en: "\"Why aren't they contacting me?\" I get angry and keep calling",
          ja: "「なんで連絡しないの？」怒って電話をかけ続ける",
          "zh-CN": "\"为什么不联系我？\" 生气并不断打电话",
          "zh-TW": "\"為什麼不聯絡我？\" 生氣並不斷打電話",
          vi: "\"Tại sao họ không liên lạc?\" Tôi tức giận và liên tục gọi điện",
          id: "\"Kenapa mereka tidak menghubungi?\" Saya marah dan terus menelepon"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"나도 안 해.\" 똑같이 연락을 끊고 잠수를 탄다",
          en: "\"I won't contact them either.\" I cut off contact and go silent too",
          ja: "「私も連絡しない」同じように連絡を絶って沈黙する",
          "zh-CN": "\"我也不联系。\" 同样切断联系，保持沉默",
          "zh-TW": "\"我也不聯絡。\" 同樣切斷聯絡，保持沉默",
          vi: "\"Tôi cũng sẽ không liên lạc.\" Tôi cũng cắt đứt liên lạc và im lặng",
          id: "\"Saya juga tidak akan menghubungi.\" Saya juga memutuskan kontak dan diam"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "연인이 이성 친구와 단둘이 밥을 먹는다면?",
      en: "What if your partner has a meal alone with an opposite-sex friend?",
      ja: "恋人が異性の友人と二人で食事をするなら？",
      "zh-CN": "如果恋人和异性朋友单独吃饭呢？",
      "zh-TW": "如果戀人和異性朋友單獨吃飯呢？",
      vi: "Nếu người yêu của bạn đi ăn một mình với bạn khác giới thì sao?",
      id: "Bagaimana jika pasangan Anda makan berdua dengan teman lawan jenis?"
    },
    options: [
      {
        text: {
          ko: "쿨하게 허용한다. 믿으니까 상관없다",
          en: "I allow it coolly. I trust them, so it's fine",
          ja: "クールに許可する。信じているから問題ない",
          "zh-CN": "冷静地允许。因为信任，所以没关系",
          "zh-TW": "冷靜地允許。因為信任，所以沒關係",
          vi: "Tôi cho phép một cách bình tĩnh. Tôi tin tưởng họ nên không sao",
          id: "Saya mengizinkan dengan tenang. Saya percaya jadi tidak masalah"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "절대 안 된다. 이성 문제에 있어서는 타협 없다",
          en: "Absolutely not. There's no compromise when it comes to opposite-sex issues",
          ja: "絶対にダメ。異性の問題については妥協しない",
          "zh-CN": "绝对不行。在异性问题上没有妥协",
          "zh-TW": "絕對不行。在異性問題上沒有妥協",
          vi: "Tuyệt đối không được. Không có thỏa hiệp khi nói đến vấn đề khác giới",
          id: "Sama sekali tidak boleh. Tidak ada kompromi dalam masalah lawan jenis"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "누구랑 먹는지, 어디서 먹는지 꼬치꼬치 캐묻는다",
          en: "I ask in detail who they're eating with and where",
          ja: "誰と食べるのか、どこで食べるのか細かく聞く",
          "zh-CN": "详细询问和谁一起，在哪里吃",
          "zh-TW": "詳細詢問和誰一起，在哪裡吃",
          vi: "Tôi hỏi chi tiết họ đang ăn với ai và ở đâu",
          id: "Saya bertanya secara detail dengan siapa mereka makan dan di mana"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "기분 나쁘지만 쿨한 척 허락하고 속으로 끙끙 앓는다",
          en: "I feel bad but pretend to be cool and allow it, suffering inside",
          ja: "気分が悪いけどクールなふりをして許可し、内心苦しむ",
          "zh-CN": "心情不好但假装冷静地允许，内心痛苦",
          "zh-TW": "心情不好但假裝冷靜地允許，內心痛苦",
          vi: "Tôi cảm thấy không vui nhưng giả vờ bình tĩnh và cho phép, đau khổ bên trong",
          id: "Saya merasa tidak enak tapi berpura-pura tenang dan mengizinkan, menderita di dalam"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "싸울 때 당신이 가장 듣기 싫은 말은?",
      en: "What do you hate hearing most during a fight?",
      ja: "喧嘩のとき、あなたが最も聞きたくない言葉は？",
      "zh-CN": "吵架时你最不想听到的话是什么？",
      "zh-TW": "吵架時你最不想聽到的話是什麼？",
      vi: "Điều gì bạn ghét nghe nhất khi cãi nhau?",
      id: "Apa yang paling tidak ingin Anda dengar saat bertengkar?"
    },
    options: [
      {
        text: {
          ko: "\"그래서 결론이 뭔데? 내가 뭘 잘못했는데?\"",
          en: "\"So what's the conclusion? What did I do wrong?\"",
          ja: "「だから結論は何？私が何を間違えたの？」",
          "zh-CN": "\"所以结论是什么？我做错了什么？\"",
          "zh-TW": "\"所以結論是什麼？我做錯了什麼？\"",
          vi: "\"Vậy kết luận là gì? Tôi đã làm sai gì?\"",
          id: "\"Jadi apa kesimpulannya? Apa yang saya lakukan salah?\""
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"나중에 얘기해. 피곤해\"",
          en: "\"Let's talk later. I'm tired\"",
          ja: "「後で話そう。疲れた」",
          "zh-CN": "\"以后再说。我累了\"",
          "zh-TW": "\"以後再說。我累了\"",
          vi: "\"Nói chuyện sau đi. Tôi mệt rồi\"",
          id: "\"Bicara nanti. Saya lelah\""
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"너는 항상 그런 식이야\"",
          en: "\"You're always like that\"",
          ja: "「あなたはいつもそうだ」",
          "zh-CN": "\"你总是那样\"",
          "zh-TW": "\"你總是那樣\"",
          vi: "\"Bạn luôn như vậy\"",
          id: "\"Kamu selalu seperti itu\""
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "\"됐어, 그만하자\"",
          en: "\"That's enough, let's stop\"",
          ja: "「もういい、やめよう」",
          "zh-CN": "\"够了，别说了\"",
          "zh-TW": "\"夠了，別說了\"",
          vi: "\"Đủ rồi, dừng lại thôi\"",
          id: "\"Sudah cukup, berhenti saja\""
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "연인이 약속 시간에 매번 늦는다면?",
      en: "What if your partner is always late for appointments?",
      ja: "恋人が約束の時間に毎回遅れるなら？",
      "zh-CN": "如果恋人每次约会都迟到呢？",
      "zh-TW": "如果戀人每次約會都遲到呢？",
      vi: "Nếu người yêu của bạn luôn đến muộn trong các cuộc hẹn thì sao?",
      id: "Bagaimana jika pasangan Anda selalu terlambat untuk janji temu?"
    },
    options: [
      {
        text: {
          ko: "\"시간 약속은 기본 아니야?\" 따끔하게 화를 낸다",
          en: "\"Keeping time is basic, isn't it?\" I get angry and scold them",
          ja: "「時間を守るのは基本でしょ？」と厳しく怒る",
          "zh-CN": "\"守时不是基本吗？\" 严厉地生气",
          "zh-TW": "\"守時不是基本嗎？\" 嚴厲地生氣",
          vi: "\"Giữ đúng giờ là điều cơ bản mà, đúng không?\" Tôi tức giận và mắng họ",
          id: "\"Menepati waktu adalah dasar, bukan?\" Saya marah dan memarahi mereka"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "\"무슨 일 있었어?\" 걱정부터 하다가 나중에 서운함을 토로한다",
          en: "\"What happened?\" I worry first, then express my hurt feelings later",
          ja: "「何かあったの？」と心配してから、後で不満をぶつける",
          "zh-CN": "\"发生什么事了？\" 先担心，后来表达不满",
          "zh-TW": "\"發生什麼事了？\" 先擔心，後來表達不滿",
          vi: "\"Có chuyện gì xảy ra không?\" Tôi lo lắng trước, sau đó mới bày tỏ sự tổn thương",
          id: "\"Ada apa?\" Saya khawatir dulu, lalu mengungkapkan perasaan terluka nanti"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "\"다음엔 늦지 마~\" 좋게 타이르고 넘어간다",
          en: "\"Don't be late next time~\" I gently advise and let it go",
          ja: "「次は遅れないでね〜」と優しく諭してやり過ごす",
          "zh-CN": "\"下次别迟到了~\" 温和地劝说然后就算了",
          "zh-TW": "\"下次別遲到了~\" 溫和地勸說然後就算了",
          vi: "\"Lần sau đừng đến muộn nữa nhé~\" Tôi nhẹ nhàng khuyên và bỏ qua",
          id: "\"Jangan terlambat lagi lain kali~\" Saya menasihati dengan lembut dan melupakan"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "나도 똑같이 늦게 나가서 기다리게 만든다",
          en: "I also leave late to make them wait the same way",
          ja: "私も同じように遅れて出かけて待たせる",
          "zh-CN": "我也同样迟到让他们等",
          "zh-TW": "我也同樣遲到讓他們等",
          vi: "Tôi cũng đến muộn để bắt họ chờ giống như vậy",
          id: "Saya juga pergi terlambat untuk membuat mereka menunggu dengan cara yang sama"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "갈등이 생겼을 때 당신의 해결 방식은?",
      en: "How do you resolve conflicts when they arise?",
      ja: "対立が生じたとき、あなたの解決方法は？",
      "zh-CN": "发生冲突时，你的解决方式是什么？",
      "zh-TW": "發生衝突時，你的解決方式是什麼？",
      vi: "Bạn giải quyết xung đột như thế nào khi chúng xảy ra?",
      id: "Bagaimana cara Anda menyelesaikan konflik saat terjadi?"
    },
    options: [
      {
        text: {
          ko: "그 자리에서 바로 대화로 풀고 끝내야 한다",
          en: "I need to resolve it right there through conversation",
          ja: "その場で話し合って解決しなければならない",
          "zh-CN": "必须当场通过对话解决",
          "zh-TW": "必須當場通過對話解決",
          vi: "Tôi cần giải quyết ngay tại chỗ thông qua trò chuyện",
          id: "Saya harus menyelesaikannya langsung di tempat melalui percakapan"
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "감정이 진정될 때까지 혼자만의 시간이 필요하다",
          en: "I need alone time until my emotions calm down",
          ja: "感情が落ち着くまで一人の時間が必要",
          "zh-CN": "需要独处时间直到情绪平静下来",
          "zh-TW": "需要獨處時間直到情緒平靜下來",
          vi: "Tôi cần thời gian một mình cho đến khi cảm xúc lắng xuống",
          id: "Saya perlu waktu sendiri sampai emosi saya tenang"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "논리적으로 잘잘못을 따져서 시시비비를 가린다",
          en: "I logically determine right and wrong to settle the matter",
          ja: "論理的に善悪を判断して是非を決める",
          "zh-CN": "逻辑上判断对错来分清是非",
          "zh-TW": "邏輯上判斷對錯來分清是非",
          vi: "Tôi xác định đúng sai một cách logic để giải quyết vấn đề",
          id: "Saya secara logis menentukan benar dan salah untuk menyelesaikan masalah"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "맛있는 거 먹으러 가거나 스킨십으로 분위기를 푼다",
          en: "I lighten the mood by going to eat something delicious or through physical touch",
          ja: "美味しいものを食べに行ったり、スキンシップで雰囲気を和らげる",
          "zh-CN": "去吃好吃的或通过身体接触来缓和气氛",
          "zh-TW": "去吃好吃的或通過身體接觸來緩和氣氛",
          vi: "Tôi làm nhẹ không khí bằng cách đi ăn món ngon hoặc thông qua tiếp xúc thể chất",
          id: "Saya meredakan suasana dengan pergi makan sesuatu yang enak atau melalui sentuhan fisik"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "연인에게 서운한 점이 생겼을 때 표현법은?",
      en: "How do you express when you feel hurt by your partner?",
      ja: "恋人に不満な点ができたときの表現方法は？",
      "zh-CN": "对恋人感到不满时，你的表达方式是？",
      "zh-TW": "對戀人感到不滿時，你的表達方式是？",
      vi: "Bạn thể hiện như thế nào khi cảm thấy tổn thương bởi người yêu?",
      id: "Bagaimana cara Anda mengekspresikan ketika merasa terluka oleh pasangan?"
    },
    options: [
      {
        text: {
          ko: "\"나 이거 서운해.\" 돌직구로 바로 말한다",
          en: "\"I'm hurt by this.\" I say it directly",
          ja: "「これ不満だよ」とストレートに言う",
          "zh-CN": "\"我对此不满。\" 直接说出来",
          "zh-TW": "\"我對此不滿。\" 直接說出來",
          vi: "\"Tôi bị tổn thương vì điều này.\" Tôi nói thẳng",
          id: "\"Saya terluka karena ini.\" Saya mengatakannya langsung"
        },
        types: ["Type3", "Type5"]
      },
      {
        text: {
          ko: "말을 안 하고 뚱해 있거나 프로필 사진/상태 메시지를 바꾼다",
          en: "I don't say anything, just sulk or change my profile picture/status message",
          ja: "何も言わずに不機嫌になったり、プロフィール写真やステータスメッセージを変える",
          "zh-CN": "不说话，只是生闷气或更换头像/状态消息",
          "zh-TW": "不說話，只是生悶氣或更換頭像/狀態消息",
          vi: "Tôi không nói gì, chỉ ủ rũ hoặc thay đổi ảnh đại diện/trạng thái",
          id: "Saya tidak mengatakan apa-apa, hanya merajuk atau mengubah foto profil/pesan status"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "농담 반 진담 반으로 뼈 있는 말을 던진다",
          en: "I throw a pointed comment half-jokingly, half-seriously",
          ja: "冗談半分本気半分で刺のある言葉を投げる",
          "zh-CN": "半开玩笑半认真地抛出带刺的话",
          "zh-TW": "半開玩笑半認真地拋出帶刺的話",
          vi: "Tôi ném một lời nhận xét sắc sảo nửa đùa nửa thật",
          id: "Saya melempar komentar pedas setengah bercanda, setengah serius"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"아니야, 괜찮아.\" 참고 넘어가다가 나중에 폭발한다",
          en: "\"No, it's fine.\" I suppress it and move on, then explode later",
          ja: "「いや、大丈夫」と我慢してやり過ごし、後で爆発する",
          "zh-CN": "\"不，没关系。\" 忍着过去，后来爆发",
          "zh-TW": "\"不，沒關係。\" 忍著過去，後來爆發",
          vi: "\"Không, không sao đâu.\" Tôi kìm nén và bỏ qua, sau đó bùng nổ",
          id: "\"Tidak, tidak apa-apa.\" Saya menahan dan melupakan, lalu meledak nanti"
        },
        types: ["Type6"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "당신이 연애에서 가장 중요하게 생각하는 것은?",
      en: "What do you value most in a relationship?",
      ja: "あなたが恋愛で最も重要だと思うことは？",
      "zh-CN": "你在恋爱中最看重的是什么？",
      "zh-TW": "你在戀愛中最看重的是什麼？",
      vi: "Bạn coi trọng điều gì nhất trong mối quan hệ?",
      id: "Apa yang paling Anda hargai dalam hubungan?"
    },
    options: [
      {
        text: {
          ko: "서로에 대한 신뢰와 각자의 프라이버시 존중",
          en: "Mutual trust and respect for each other's privacy",
          ja: "お互いへの信頼とそれぞれのプライバシー尊重",
          "zh-CN": "相互信任和尊重彼此的隐私",
          "zh-TW": "相互信任和尊重彼此的隱私",
          vi: "Sự tin tưởng lẫn nhau và tôn trọng quyền riêng tư của nhau",
          id: "Saling percaya dan menghormati privasi masing-masing"
        },
        types: ["Type2"]
      },
      {
        text: {
          ko: "끊임없는 애정 표현과 함께 있다는 안정감",
          en: "Constant expressions of affection and the security of being together",
          ja: "絶え間ない愛情表現と一緒にいる安心感",
          "zh-CN": "持续的情感表达和在一起的安定感",
          "zh-TW": "持續的情感表達和在一起的安定感",
          vi: "Biểu hiện tình cảm liên tục và cảm giác an toàn khi ở bên nhau",
          id: "Ekspresi kasih sayang yang terus-menerus dan rasa aman bersama"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "서로의 가치관과 대화 코드가 통하는 것",
          en: "Shared values and communication codes that connect",
          ja: "お互いの価値観と会話コードが通じ合うこと",
          "zh-CN": "彼此价值观和对话方式相通",
          "zh-TW": "彼此價值觀和對話方式相通",
          vi: "Giá trị và cách giao tiếp của nhau có thể hiểu được",
          id: "Nilai dan kode komunikasi yang saling terhubung"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "설렘, 열정, 그리고 육체적인 이끌림",
          en: "Excitement, passion, and physical attraction",
          ja: "ときめき、情熱、そして肉体的な魅力",
          "zh-CN": "心动、激情和身体上的吸引",
          "zh-TW": "心動、激情和身體上的吸引",
          vi: "Sự hồi hộp, đam mê và sự thu hút về thể chất",
          id: "Kegembiraan, gairah, dan daya tarik fisik"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "연인의 말투나 행동이 거슬릴 때?",
      en: "What do you do when your partner's tone or behavior bothers you?",
      ja: "恋人の口調や行動が気に障るとき？",
      "zh-CN": "当恋人的语气或行为让你不舒服时？",
      "zh-TW": "當戀人的語氣或行為讓你不舒服時？",
      vi: "Bạn làm gì khi giọng điệu hoặc hành vi của người yêu làm phiền bạn?",
      id: "Apa yang Anda lakukan ketika nada suara atau perilaku pasangan mengganggu Anda?"
    },
    options: [
      {
        text: {
          ko: "\"그거 좀 고쳐주면 안 돼?\" 직설적으로 지적한다",
          en: "\"Can you fix that?\" I point it out directly",
          ja: "「それ直してくれない？」とストレートに指摘する",
          "zh-CN": "\"能改一下吗？\" 直接指出",
          "zh-TW": "\"能改一下嗎？\" 直接指出",
          vi: "\"Bạn có thể sửa điều đó không?\" Tôi chỉ ra trực tiếp",
          id: "\"Bisakah kamu memperbaikinya?\" Saya menunjukkannya langsung"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "내가 예민한 건가 싶어서 그냥 참는다",
          en: "I think I might be too sensitive, so I just endure it",
          ja: "私が敏感すぎるのかと思って我慢する",
          "zh-CN": "觉得自己可能太敏感了，所以只是忍着",
          "zh-TW": "覺得自己可能太敏感了，所以只是忍著",
          vi: "Tôi nghĩ mình có thể quá nhạy cảm, nên chỉ chịu đựng",
          id: "Saya pikir saya mungkin terlalu sensitif, jadi hanya menahan"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "\"너 말투 왜 그래?\" 나도 똑같이 비꼬아서 말한다",
          en: "\"Why do you talk like that?\" I respond with the same sarcastic tone",
          ja: "「なんでそんな口調なの？」と私も同じように皮肉を言う",
          "zh-CN": "\"你为什么那样说话？\" 我也用同样的讽刺语气回应",
          "zh-TW": "\"你為什麼那樣說話？\" 我也用同樣的諷刺語氣回應",
          vi: "\"Tại sao bạn nói như vậy?\" Tôi đáp lại bằng giọng điệu mỉa mai tương tự",
          id: "\"Kenapa kamu bicara seperti itu?\" Saya merespons dengan nada sarkastik yang sama"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "왜 그렇게 행동했는지 이유를 분석하려고 한다",
          en: "I try to analyze why they behaved that way",
          ja: "なぜそのように行動したのか理由を分析しようとする",
          "zh-CN": "试图分析他们为什么那样做",
          "zh-TW": "試圖分析他們為什麼那樣做",
          vi: "Tôi cố gắng phân tích lý do tại sao họ hành xử như vậy",
          id: "Saya mencoba menganalisis mengapa mereka berperilaku seperti itu"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "싸우다가 연인이 울음을 터뜨린다면?",
      en: "What if your partner starts crying during a fight?",
      ja: "喧嘩中に恋人が泣き出したら？",
      "zh-CN": "如果吵架时恋人哭了呢？",
      "zh-TW": "如果吵架時戀人哭了呢？",
      vi: "Nếu người yêu bắt đầu khóc trong lúc cãi nhau thì sao?",
      id: "Bagaimana jika pasangan mulai menangis saat bertengkar?"
    },
    options: [
      {
        text: {
          ko: "당황스럽지만 일단 안아주고 달래준다",
          en: "I'm flustered but I hug and comfort them",
          ja: "戸惑うけどとりあえず抱きしめて慰める",
          "zh-CN": "虽然慌张但还是先拥抱安慰",
          "zh-TW": "雖然慌張但還是先擁抱安慰",
          vi: "Tôi bối rối nhưng vẫn ôm và an ủi họ",
          id: "Saya bingung tapi saya memeluk dan menghibur mereka"
        },
        types: ["Type6"]
      },
      {
        text: {
          ko: "\"울지 말고 말을 해.\" 우는 이유를 이해 못 하고 답답해한다",
          en: "\"Don't cry, just talk.\" I can't understand why they're crying and get frustrated",
          ja: "「泣かないで話して」と泣く理由が理解できずイライラする",
          "zh-CN": "\"别哭了，说话。\" 不理解为什么哭而感到烦躁",
          "zh-TW": "\"別哭了，說話。\" 不理解為什麼哭而感到煩躁",
          vi: "\"Đừng khóc nữa, hãy nói đi.\" Tôi không hiểu tại sao họ khóc và cảm thấy bực bội",
          id: "\"Jangan menangis, bicaralah.\" Saya tidak mengerti mengapa mereka menangis dan merasa frustrasi"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "마음이 약해져서 내가 졌다고 사과한다",
          en: "My heart softens and I apologize, admitting I lost",
          ja: "心が弱くなって負けたと謝る",
          "zh-CN": "心软了，道歉说自己输了",
          "zh-TW": "心軟了，道歉說自己輸了",
          vi: "Lòng tôi mềm lại và tôi xin lỗi, thừa nhận mình thua",
          id: "Hati saya melembut dan saya meminta maaf, mengakui saya kalah"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "우는 모습이 가식 같아서 더 화가 난다",
          en: "The crying seems fake, which makes me angrier",
          ja: "泣いている姿が演技のように見えてさらに怒る",
          "zh-CN": "哭的样子看起来很假，让我更生气",
          "zh-TW": "哭的樣子看起來很假，讓我更生氣",
          vi: "Việc khóc có vẻ giả tạo, khiến tôi tức giận hơn",
          id: "Tangisan terlihat palsu, yang membuat saya lebih marah"
        },
        types: ["Type4"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "데이트 비용 문제로 의견이 갈린다면?",
      en: "What if you disagree about date expenses?",
      ja: "デート費用の問題で意見が分かれたら？",
      "zh-CN": "如果因为约会费用问题产生分歧呢？",
      "zh-TW": "如果因為約會費用問題產生分歧呢？",
      vi: "Nếu bạn bất đồng về chi phí hẹn hò thì sao?",
      id: "Bagaimana jika Anda tidak setuju tentang biaya kencan?"
    },
    options: [
      {
        text: {
          ko: "\"정확히 반반 내자.\" 더치페이가 가장 깔끔하다",
          en: "\"Let's split exactly 50-50.\" Going Dutch is the cleanest way",
          ja: "「正確に半々にしよう」割り勘が一番すっきり",
          "zh-CN": "\"我们精确地各付一半。\" AA制最清楚",
          "zh-TW": "\"我們精確地各付一半。\" AA制最清楚",
          vi: "\"Hãy chia đều chính xác 50-50.\" Chia tiền là cách rõ ràng nhất",
          id: "\"Mari kita bagi tepat setengah-setengah.\" Membayar sendiri-sendiri adalah cara terbersih"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "\"내가 더 많이 버니까 내가 낼게.\" 능력 있는 사람이 낸다",
          en: "\"I earn more, so I'll pay.\" The one who earns more pays",
          ja: "「私がもっと稼いでるから私が払う」稼ぎが多い人が払う",
          "zh-CN": "\"我赚得更多，所以我来付。\" 赚得多的人付",
          "zh-TW": "\"我賺得更多，所以我來付。\" 賺得多的人付",
          vi: "\"Tôi kiếm nhiều hơn nên tôi sẽ trả.\" Người kiếm nhiều hơn sẽ trả",
          id: "\"Saya lebih banyak menghasilkan, jadi saya yang bayar.\" Yang lebih banyak menghasilkan yang membayar"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"이번엔 네가 샀으니 다음엔 내가 살게.\" 자연스럽게 번갈아 낸다",
          en: "\"You paid this time, so I'll pay next time.\" We naturally take turns",
          ja: "「今回はあなたが払ったから次は私が払う」自然に交代する",
          "zh-CN": "\"这次你付了，下次我来付。\" 自然地轮流",
          "zh-TW": "\"這次你付了，下次我來付。\" 自然地輪流",
          vi: "\"Lần này bạn trả rồi, lần sau tôi sẽ trả.\" Chúng tôi tự nhiên thay phiên nhau",
          id: "\"Kali ini kamu yang bayar, jadi lain kali saya yang bayar.\" Kami secara alami bergantian"
        },
        types: ["Type2", "Type6"]
      },
      {
        text: {
          ko: "데이트 통장을 만들어서 투명하게 관리한다",
          en: "We create a shared account and manage it transparently",
          ja: "デート口座を作って透明に管理する",
          "zh-CN": "创建约会账户并透明管理",
          "zh-TW": "創建約會賬戶並透明管理",
          vi: "Chúng tôi tạo tài khoản chung và quản lý minh bạch",
          id: "Kami membuat rekening kencan dan mengelolanya dengan transparan"
        },
        types: ["Type5"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "연인이 나의 단점을 지적했을 때?",
      en: "What do you do when your partner points out your flaws?",
      ja: "恋人があなたの欠点を指摘したとき？",
      "zh-CN": "当恋人指出你的缺点时？",
      "zh-TW": "當戀人指出你的缺點時？",
      vi: "Bạn làm gì khi người yêu chỉ ra khuyết điểm của bạn?",
      id: "Apa yang Anda lakukan ketika pasangan menunjuk kelemahan Anda?"
    },
    options: [
      {
        text: {
          ko: "\"인정. 고칠게.\" 쿨하게 인정하고 노력한다",
          en: "\"I admit it. I'll fix it.\" I coolly acknowledge and make an effort",
          ja: "「認める。直すよ」クールに認めて努力する",
          "zh-CN": "\"我承认。我会改的。\" 冷静地承认并努力",
          "zh-TW": "\"我承認。我會改的。\" 冷靜地承認並努力",
          vi: "\"Tôi thừa nhận. Tôi sẽ sửa.\" Tôi bình tĩnh thừa nhận và cố gắng",
          id: "\"Saya akui. Saya akan memperbaikinya.\" Saya dengan tenang mengakui dan berusaha"
        },
        types: ["Type2", "Type5"]
      },
      {
        text: {
          ko: "\"너는 뭐 잘했어?\" 기분 나빠서 상대방의 단점을 끄집어낸다",
          en: "\"What did you do well?\" I feel bad and point out their flaws too",
          ja: "「あなたは何ができたの？」気分が悪くなって相手の欠点も引きずり出す",
          "zh-CN": "\"你做得很好吗？\" 心情不好，也指出对方的缺点",
          "zh-TW": "\"你做得很好嗎？\" 心情不好，也指出對方的缺點",
          vi: "\"Bạn đã làm tốt gì?\" Tôi cảm thấy tồi tệ và cũng chỉ ra khuyết điểm của họ",
          id: "\"Apa yang kamu lakukan dengan baik?\" Saya merasa tidak enak dan juga menunjuk kelemahan mereka"
        },
        types: ["Type4"]
      },
      {
        text: {
          ko: "\"내가 그렇게 별로야?\" 자존감이 떨어지고 우울해진다",
          en: "\"Am I that bad?\" My self-esteem drops and I become depressed",
          ja: "「私ってそんなにダメなの？」自尊心が下がって落ち込む",
          "zh-CN": "\"我那么差吗？\" 自尊心下降，变得沮丧",
          "zh-TW": "\"我那麼差嗎？\" 自尊心下降，變得沮喪",
          vi: "\"Tôi tệ đến vậy sao?\" Lòng tự trọng của tôi giảm xuống và tôi trở nên chán nản",
          id: "\"Apakah saya seburuk itu?\" Harga diri saya turun dan menjadi depresi"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "\"그건 오해야.\" 논리적으로 반박하며 방어한다",
          en: "\"That's a misunderstanding.\" I logically refute and defend myself",
          ja: "「それは誤解だよ」論理的に反論して防御する",
          "zh-CN": "\"那是误解。\" 逻辑上反驳并为自己辩护",
          "zh-TW": "\"那是誤解。\" 邏輯上反駁並為自己辯護",
          vi: "\"Đó là hiểu lầm.\" Tôi phản bác một cách logic và bảo vệ bản thân",
          id: "\"Itu salah paham.\" Saya secara logis membantah dan membela diri"
        },
        types: ["Type3"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "우리 커플이 헤어진다면 그 이유는?",
      en: "If our couple were to break up, what would be the reason?",
      ja: "私たちのカップルが別れるとしたら、その理由は？",
      "zh-CN": "如果我们分手，原因会是什么？",
      "zh-TW": "如果我們分手，原因會是什麼？",
      vi: "Nếu chúng ta chia tay, lý do sẽ là gì?",
      id: "Jika pasangan kita putus, apa alasannya?"
    },
    options: [
      {
        text: {
          ko: "성격 차이와 잦은 다툼 때문에 지쳐서",
          en: "Exhausted from personality differences and frequent fights",
          ja: "性格の違いと頻繁な喧嘩で疲れ果てて",
          "zh-CN": "因为性格差异和频繁争吵而疲惫",
          "zh-TW": "因為性格差異和頻繁爭吵而疲憊",
          vi: "Kiệt sức vì sự khác biệt tính cách và những cuộc cãi vã thường xuyên",
          id: "Lelah karena perbedaan kepribadian dan pertengkaran yang sering"
        },
        types: ["Type5"]
      },
      {
        text: {
          ko: "상대방이 나에게 소홀해지거나 마음이 식어서",
          en: "Because my partner became neglectful or their feelings cooled",
          ja: "相手が私を軽んじたり、気持ちが冷めてしまって",
          "zh-CN": "因为对方变得疏忽或感情变淡",
          "zh-TW": "因為對方變得疏忽或感情變淡",
          vi: "Vì người yêu trở nên lơ là hoặc cảm xúc nguội lạnh",
          id: "Karena pasangan menjadi mengabaikan atau perasaannya mendingin"
        },
        types: ["Type1"]
      },
      {
        text: {
          ko: "바람, 거짓말 등 신뢰가 깨지는 사건 때문에",
          en: "Because of trust-breaking events like cheating or lies",
          ja: "浮気、嘘など信頼が壊れる出来事のため",
          "zh-CN": "因为出轨、谎言等破坏信任的事件",
          "zh-TW": "因為出軌、謊言等破壞信任的事件",
          vi: "Vì những sự kiện phá vỡ niềm tin như ngoại tình hoặc lời nói dối",
          id: "Karena peristiwa yang merusak kepercayaan seperti perselingkuhan atau kebohongan"
        },
        types: ["Type3"]
      },
      {
        text: {
          ko: "자존심 싸움하다가 홧김에 헤어질 것 같다",
          en: "I think we'd break up in a fit of anger during a pride battle",
          ja: "プライドの戦いで腹を立てて別れそう",
          "zh-CN": "在自尊心争斗中一气之下分手",
          "zh-TW": "在自尊心爭鬥中一氣之下分手",
          vi: "Tôi nghĩ chúng ta sẽ chia tay trong cơn tức giận khi đấu tranh về lòng tự trọng",
          id: "Saya pikir kita akan putus dalam amarah selama pertempuran harga diri"
        },
        types: ["Type4"]
      }
    ]
  }
];

export const phase2ConflictReasonResults: Phase2ConflictReasonResult[] = [
  {
    type: "Type1",
    emoji: "😿",
    title: {
      ko: "서운함 폭발, 애정결핍형",
      en: "Hurt Explosion, Affection-Deficient Type",
      ja: "不満爆発、愛情不足型",
      "zh-CN": "委屈爆发型，缺爱型",
      "zh-TW": "委屈爆發型，缺愛型",
      vi: "Bùng Nổ Tổn Thương, Kiểu Thiếu Tình Cảm",
      id: "Ledakan Kekecewaan, Tipe Kekurangan Kasih Sayang"
    },
    shortDescription: {
      ko: "\"나 좀 바라봐 줘... 사랑을 확인받고 싶어\"",
      en: "\"Please look at me... I want to feel loved\"",
      ja: "「私を見て...愛されていることを確認したい」",
      "zh-CN": "\"请看看我...我想确认被爱\"",
      "zh-TW": "\"請看看我...我想確認被愛\"",
      vi: "\"Hãy nhìn tôi đi... Tôi muốn cảm nhận được yêu thương\"",
      id: "\"Tolong lihat saya... Saya ingin merasakan dicintai\""
    },
    description: {
      ko: "당신은 연인의 사소한 행동에도 의미를 부여하고 상처받습니다. 연락이 조금만 늦거나 표현이 줄어들면 \"마음이 변했나?\"라고 불안해합니다. 당신의 싸움 원인은 상대방에게 더 많은 관심과 사랑을 원하기 때문입니다. 상대는 당신을 '집착'이라고 느낄 수 있습니다.",
      en: "You assign meaning to your partner's trivial actions and get hurt. If contact is slightly delayed or expressions decrease, you worry, \"Have their feelings changed?\" Your conflict cause is wanting more attention and love from your partner. They may feel you're 'obsessive'.",
      ja: "あなたは恋人の些細な行動にも意味を見出して傷つきます。連絡が少し遅れたり表現が減ると「気持ちが変わったの？」と不安になります。あなたの喧嘩の原因は、相手にもっと関心と愛情を求めているからです。相手はあなたを「執着」と感じるかもしれません。",
      "zh-CN": "你会对恋人微小的行为赋予意义并受伤。如果联系稍微延迟或表达减少，你会担心\"他们的感情变了吗？\"你吵架的原因是想从对方那里得到更多关注和爱。对方可能觉得你'执著'。",
      "zh-TW": "你會對戀人微小的行為賦予意義並受傷。如果聯繫稍微延遲或表達減少，你會擔心\"他們的感情變了嗎？\"你吵架的原因是想從對方那裡得到更多關注和愛。對方可能覺得你'執著'。",
      vi: "Bạn gán ý nghĩa cho những hành động nhỏ nhặt của người yêu và bị tổn thương. Nếu liên lạc hơi chậm hoặc biểu hiện giảm đi, bạn lo lắng \"Cảm xúc của họ đã thay đổi sao?\" Nguyên nhân xung đột của bạn là muốn nhận được nhiều sự chú ý và tình yêu hơn từ đối phương. Họ có thể cảm thấy bạn 'ám ảnh'.",
      id: "Anda memberikan makna pada tindakan sepele pasangan dan terluka. Jika kontak sedikit tertunda atau ekspresi berkurang, Anda khawatir, \"Apakah perasaan mereka berubah?\" Penyebab konflik Anda adalah menginginkan lebih banyak perhatian dan cinta dari pasangan. Mereka mungkin merasa Anda 'obsesif'."
    },
    conflictCauses: {
      ko: "연락 빈도, 애정 표현 부족, 질투",
      en: "Contact frequency, lack of affection expression, jealousy",
      ja: "連絡頻度、愛情表現の不足、嫉妬",
      "zh-CN": "联系频率、缺乏情感表达、嫉妒",
      "zh-TW": "聯繫頻率、缺乏情感表達、嫉妒",
      vi: "Tần suất liên lạc, thiếu biểu hiện tình cảm, ghen tuông",
      id: "Frekuensi kontak, kurang ekspresi kasih sayang, kecemburuan"
    },
    solution: {
      ko: "혼자만의 시간을 즐기는 법을 배우고, 상대를 믿어보세요.",
      en: "Learn to enjoy your alone time and trust your partner.",
      ja: "一人の時間を楽しむ方法を学び、相手を信じてみてください。",
      "zh-CN": "学会享受独处时间，并相信你的伴侣。",
      "zh-TW": "學會享受獨處時間，並相信你的伴侶。",
      vi: "Học cách tận hưởng thời gian một mình và tin tưởng người yêu của bạn.",
      id: "Belajarlah menikmati waktu sendiri dan percayai pasangan Anda."
    }
  },
  {
    type: "Type2",
    emoji: "🏃‍♂️",
    title: {
      ko: "동굴로 피신, 회피형",
      en: "Cave Retreat, Avoidant Type",
      ja: "洞窟に避難、回避型",
      "zh-CN": "洞穴逃避型，回避型",
      "zh-TW": "洞穴逃避型，迴避型",
      vi: "Trốn Vào Hang, Kiểu Tránh Né",
      id: "Mengundurkan Diri ke Gua, Tipe Menghindar"
    },
    shortDescription: {
      ko: "\"제발 나 좀 내버려 둬... 숨 쉴 구멍이 필요해\"",
      en: "\"Please leave me alone... I need space to breathe\"",
      ja: "「お願いだから放っておいて...息抜きが必要なの」",
      "zh-CN": "\"请让我一个人待着...我需要呼吸的空间\"",
      "zh-TW": "\"請讓我一個人待著...我需要呼吸的空間\"",
      vi: "\"Làm ơn để tôi yên... Tôi cần không gian để thở\"",
      id: "\"Tolong tinggalkan saya sendiri... Saya perlu ruang untuk bernapas\""
    },
    description: {
      ko: "당신은 갈등 상황 자체가 너무 스트레스입니다. 싸움이 시작되려고 하면 입을 다물거나 자리를 피해버립니다. 상대방은 그런 당신의 태도에 \"무시당했다\"고 느껴 더 화를 냅니다. 당신의 싸움 원인은 갈등을 직면하지 않고 피하려고만 하기 때문입니다.",
      en: "Conflict situations themselves are too stressful for you. When a fight is about to start, you shut your mouth or leave the situation. Your partner feels 'ignored' by your attitude and gets angrier. Your conflict cause is avoiding and not facing conflicts.",
      ja: "あなたにとって対立状況そのものがストレスです。喧嘩が始まりそうになると口を閉ざしたり、その場を離れてしまいます。相手はあなたのその態度に「無視された」と感じてさらに怒ります。あなたの喧嘩の原因は、対立に直面せずに避けようとしているからです。",
      "zh-CN": "冲突情况本身对你来说压力太大。当争吵即将开始时，你会闭嘴或离开现场。你的伴侣会因为你的态度感到'被忽视'而更加生气。你吵架的原因是回避而不面对冲突。",
      "zh-TW": "衝突情況本身對你來說壓力太大。當爭吵即將開始時，你會閉嘴或離開現場。你的伴侶會因為你的態度感到'被忽視'而更加生氣。你吵架的原因是迴避而不面對衝突。",
      vi: "Tình huống xung đột tự nó đã quá căng thẳng đối với bạn. Khi cuộc cãi vã sắp bắt đầu, bạn im lặng hoặc rời khỏi tình huống. Người yêu của bạn cảm thấy 'bị bỏ qua' bởi thái độ của bạn và tức giận hơn. Nguyên nhân xung đột của bạn là tránh né và không đối mặt với xung đột.",
      id: "Situasi konflik itu sendiri terlalu membuat stres bagi Anda. Ketika pertengkaran akan dimulai, Anda menutup mulut atau meninggalkan situasi. Pasangan Anda merasa 'diabaikan' oleh sikap Anda dan menjadi lebih marah. Penyebab konflik Anda adalah menghindari dan tidak menghadapi konflik."
    },
    conflictCauses: {
      ko: "잠수, 대화 거부, 무반응",
      en: "Going silent, refusing to talk, no response",
      ja: "沈黙、会話拒否、無反応",
      "zh-CN": "沉默、拒绝对话、无反应",
      "zh-TW": "沉默、拒絕對話、無反應",
      vi: "Im lặng, từ chối nói chuyện, không phản ứng",
      id: "Diam, menolak berbicara, tidak merespons"
    },
    solution: {
      ko: "\"생각할 시간이 필요해\"라고 말하고, 반드시 다시 돌아와서 대화하세요.",
      en: "Say \"I need time to think\" and make sure to come back and talk.",
      ja: "「考える時間が必要だ」と言って、必ず戻って話し合ってください。",
      "zh-CN": "说\"我需要时间思考\"，并确保回来对话。",
      "zh-TW": "說\"我需要時間思考\"，並確保回來對話。",
      vi: "Nói \"Tôi cần thời gian để suy nghĩ\" và đảm bảo quay lại để nói chuyện.",
      id: "Katakan \"Saya perlu waktu untuk berpikir\" dan pastikan kembali untuk berbicara."
    }
  },
  {
    type: "Type3",
    emoji: "🤖",
    title: {
      ko: "팩트 폭격기, 논리왕",
      en: "Fact Bomber, Logic King",
      ja: "ファクト爆撃機、論理王",
      "zh-CN": "事实轰炸机，逻辑王",
      "zh-TW": "事實轟炸機，邏輯王",
      vi: "Máy Ném Sự Thật, Vua Logic",
      id: "Pengebom Fakta, Raja Logika"
    },
    shortDescription: {
      ko: "\"감정 빼고 팩트만 말해. 네가 잘못했잖아.\"",
      en: "\"Leave emotions out and just state facts. You were wrong.\"",
      ja: "「感情抜きでファクトだけ話して。あなたが間違ってたでしょ。」",
      "zh-CN": "\"抛开情感，只说事实。你错了。\"",
      "zh-TW": "\"拋開情感，只說事實。你錯了。\"",
      vi: "\"Bỏ cảm xúc ra và chỉ nói sự thật. Bạn đã sai.\"",
      id: "\"Tinggalkan emosi dan hanya nyatakan fakta. Kamu salah.\""
    },
    description: {
      ko: "당신은 싸울 때 감정보다 이성을 앞세웁니다. 상대방의 서운한 감정을 이해하기보다, 누가 무엇을 잘못했는지 따지는 게 중요합니다. 당신의 말은 틀린 게 없지만, 너무 차갑고 날카로워서 상대방의 마음에 비수를 꽂습니다. 당신의 싸움 원인은 '공감 부족'입니다.",
      en: "You prioritize reason over emotion when fighting. Rather than understanding your partner's hurt feelings, it's more important to determine who did what wrong. Your words aren't wrong, but they're too cold and sharp, stabbing your partner's heart. Your conflict cause is 'lack of empathy'.",
      ja: "あなたは喧嘩のとき感情より理性を優先します。相手の不満な感情を理解するより、誰が何を間違えたかを追求するのが重要です。あなたの言葉は間違っていませんが、冷たく鋭すぎて相手の心に突き刺さります。あなたの喧嘩の原因は「共感不足」です。",
      "zh-CN": "你在争吵时优先考虑理性而非情感。与其理解伴侣受伤的感受，更重要的是判断谁做错了什么。你的话没有错，但太冷漠尖锐，刺痛了伴侣的心。你吵架的原因是'缺乏同理心'。",
      "zh-TW": "你在爭吵時優先考慮理性而非情感。與其理解伴侶受傷的感受，更重要的是判斷誰做錯了什麼。你的話沒有錯，但太冷漠尖銳，刺痛了伴侶的心。你吵架的原因是'缺乏同理心'。",
      vi: "Bạn ưu tiên lý trí hơn cảm xúc khi cãi nhau. Thay vì hiểu cảm xúc tổn thương của người yêu, việc xác định ai đã làm sai gì quan trọng hơn. Lời nói của bạn không sai, nhưng quá lạnh lùng và sắc bén, đâm vào trái tim người yêu. Nguyên nhân xung đột của bạn là 'thiếu đồng cảm'.",
      id: "Anda memprioritaskan akal daripada emosi saat bertengkar. Daripada memahami perasaan terluka pasangan, lebih penting untuk menentukan siapa yang melakukan kesalahan. Kata-kata Anda tidak salah, tetapi terlalu dingin dan tajam, menusuk hati pasangan. Penyebab konflik Anda adalah 'kurang empati'."
    },
    conflictCauses: {
      ko: "지적질, 가르치려 드는 태도, 말꼬리 잡기",
      en: "Pointing out faults, teaching attitude, nitpicking",
      ja: "指摘、教えようとする態度、言葉尻をとらえる",
      "zh-CN": "挑毛病、说教态度、咬文嚼字",
      "zh-TW": "挑毛病、說教態度、咬文嚼字",
      vi: "Chỉ trích, thái độ dạy dỗ, bắt bẻ",
      id: "Mengungkapkan kesalahan, sikap mengajar, mencari-cari kesalahan"
    },
    solution: {
      ko: "옳은 말보다 따뜻한 말 한마디가 관계를 살립니다.",
      en: "One warm word saves the relationship more than being right.",
      ja: "正しい言葉より、温かい言葉一つが関係を救います。",
      "zh-CN": "一句温暖的话比正确的话更能挽救关系。",
      "zh-TW": "一句溫暖的話比正確的話更能挽救關係。",
      vi: "Một lời nói ấm áp cứu vãn mối quan hệ hơn là nói đúng.",
      id: "Satu kata hangat menyelamatkan hubungan lebih dari menjadi benar."
    }
  },
  {
    type: "Type4",
    emoji: "👑",
    title: {
      ko: "고집불통, 자존심 대마왕",
      en: "Stubborn, Pride Demon King",
      ja: "頑固、プライド大魔王",
      "zh-CN": "顽固不通，自尊心大魔王",
      "zh-TW": "頑固不通，自尊心大魔王",
      vi: "Cứng Đầu, Vua Tự Ái",
      id: "Keras Kepala, Raja Harga Diri"
    },
    shortDescription: {
      ko: "\"절대 내가 먼저 사과 안 해. 내가 이겨야 돼.\"",
      en: "\"I'll never apologize first. I have to win.\"",
      ja: "「絶対に私が先に謝らない。私が勝たなきゃ。」",
      "zh-CN": "\"我绝不会先道歉。我必须赢。\"",
      "zh-TW": "\"我絕不會先道歉。我必須贏。\"",
      vi: "\"Tôi sẽ không bao giờ xin lỗi trước. Tôi phải thắng.\"",
      id: "\"Saya tidak akan pernah meminta maaf dulu. Saya harus menang.\""
    },
    description: {
      ko: "당신은 자존심이 세고 지는 것을 싫어합니다. 싸움이 나면 내가 잘못한 걸 알면서도 자존심 때문에 사과를 안 합니다. \"미안해\" 한 마디면 끝날 일을 자존심 세우다가 큰 싸움으로 키웁니다. 당신의 싸움 원인은 쓸데없는 '기싸움'입니다.",
      en: "You have strong pride and hate losing. When a fight happens, even though you know you're wrong, you don't apologize because of pride. What could end with one \"I'm sorry\" escalates into a big fight because of pride. Your conflict cause is unnecessary 'power struggles'.",
      ja: "あなたはプライドが高く、負けることが嫌いです。喧嘩になると、自分が間違っているとわかっていてもプライドのために謝りません。「ごめん」の一言で終わることをプライドを張って大きな喧嘩に発展させます。あなたの喧嘩の原因は無駄な「意地の張り合い」です。",
      "zh-CN": "你自尊心强，讨厌输。发生争吵时，即使知道自己错了，也因为自尊心而不道歉。一句\"对不起\"就能结束的事，因为自尊心而升级为大争吵。你吵架的原因是毫无意义的'权力斗争'。",
      "zh-TW": "你自尊心強，討厭輸。發生爭吵時，即使知道自己錯了，也因為自尊心而不道歉。一句\"對不起\"就能結束的事，因為自尊心而升級為大爭吵。你吵架的原因是毫無意義的'權力鬥爭'。",
      vi: "Bạn có lòng tự trọng cao và ghét thua. Khi xảy ra cãi vã, dù biết mình sai, bạn không xin lỗi vì lòng tự trọng. Điều có thể kết thúc bằng một câu \"Xin lỗi\" lại leo thang thành cuộc cãi vã lớn vì lòng tự trọng. Nguyên nhân xung đột của bạn là 'cuộc chiến quyền lực' không cần thiết.",
      id: "Anda memiliki harga diri yang kuat dan benci kalah. Ketika pertengkaran terjadi, meskipun tahu Anda salah, Anda tidak meminta maaf karena harga diri. Apa yang bisa berakhir dengan satu \"Maaf\" berkembang menjadi pertengkaran besar karena harga diri. Penyebab konflik Anda adalah 'perjuangan kekuasaan' yang tidak perlu."
    },
    conflictCauses: {
      ko: "사과 안 함, 고집, 홧김에 이별 통보",
      en: "Not apologizing, stubbornness, breaking up in anger",
      ja: "謝らない、頑固、腹立ちまぎれに別れを告げる",
      "zh-CN": "不道歉、固执、一气之下提分手",
      "zh-TW": "不道歉、固執、一氣之下提分手",
      vi: "Không xin lỗi, cứng đầu, chia tay trong cơn tức giận",
      id: "Tidak meminta maaf, keras kepala, putus dalam kemarahan"
    },
    solution: {
      ko: "사랑하는 사람에게 지는 것은 지는 게 아니라 이기는 것입니다.",
      en: "Losing to someone you love isn't losing, it's winning.",
      ja: "愛する人に負けることは負けることではなく、勝つことです。",
      "zh-CN": "向所爱的人认输不是输，而是赢。",
      "zh-TW": "向所愛的人認輸不是輸，而是贏。",
      vi: "Thua người mình yêu không phải là thua, mà là thắng.",
      id: "Kalah kepada orang yang Anda cintai bukanlah kalah, itu menang."
    }
  },
  {
    type: "Type5",
    emoji: "📝",
    title: {
      ko: "잔소리 폭격, 통제형",
      en: "Nagging Bombardment, Control Type",
      ja: "小言爆撃、統制型",
      "zh-CN": "唠叨轰炸，控制型",
      "zh-TW": "嘮叨轟炸，控制型",
      vi: "Bắn Phá Cằn Nhằn, Kiểu Kiểm Soát",
      id: "Bombardir Omelan, Tipe Kontrol"
    },
    shortDescription: {
      ko: "\"내 방식대로 해! 왜 약속 안 지켜?\"",
      en: "\"Do it my way! Why didn't you keep your promise?\"",
      ja: "「私のやり方でやって！なんで約束守らないの？」",
      "zh-CN": "\"按我的方式做！为什么不守承诺？\"",
      "zh-TW": "\"按我的方式做！為什麼不守承諾？\"",
      vi: "\"Làm theo cách của tôi! Tại sao bạn không giữ lời hứa?\"",
      id: "\"Lakukan dengan cara saya! Kenapa kamu tidak menepati janji?\""
    },
    description: {
      ko: "당신은 자신만의 기준과 규칙이 확고합니다. 연인이 내 기준에 맞지 않게 행동하면 답답해서 견딜 수가 없습니다. 옷차림부터 생활 습관까지 하나하나 간섭하고 고치려 듭니다. 상대방은 당신을 '엄마/아빠'처럼 느끼거나 숨 막혀 합니다. 당신의 싸움 원인은 상대를 '내 뜻대로 바꾸려는 욕심'입니다.",
      en: "You have firm standards and rules of your own. When your partner doesn't act according to your standards, you can't stand it and feel frustrated. You interfere and try to fix everything from clothing to lifestyle habits. Your partner feels you're like a 'parent' or suffocated. Your conflict cause is the desire to 'change your partner to your will'.",
      ja: "あなたは自分だけの基準とルールが確固としています。恋人があなたの基準に合わない行動をすると、もどかしくて我慢できません。服装から生活習慣まで一つ一つ干渉して直そうとします。相手はあなたを「お母さん/お父さん」のように感じたり、息苦しく感じます。あなたの喧嘩の原因は、相手を「自分の思い通りに変えたいという欲」です。",
      "zh-CN": "你有自己坚定的标准和规则。当伴侣不按你的标准行事时，你无法忍受并感到沮丧。你从衣着到生活习惯都一一干涉并试图改变。你的伴侣觉得你像'父母'或感到窒息。你吵架的原因是想'把伴侣改变成你的意愿'。",
      "zh-TW": "你有自己堅定的標準和規則。當伴侶不按你的標準行事時，你無法忍受並感到沮喪。你從衣著到生活習慣都一一干涉並試圖改變。你的伴侶覺得你像'父母'或感到窒息。你吵架的原因是想'把伴侶改變成你的意願'。",
      vi: "Bạn có tiêu chuẩn và quy tắc riêng vững chắc. Khi người yêu không hành động theo tiêu chuẩn của bạn, bạn không thể chịu đựng và cảm thấy bực bội. Bạn can thiệp và cố gắng sửa mọi thứ từ cách ăn mặc đến thói quen sinh hoạt. Người yêu của bạn cảm thấy bạn giống như 'cha mẹ' hoặc cảm thấy ngột ngạt. Nguyên nhân xung đột của bạn là mong muốn 'thay đổi người yêu theo ý muốn của bạn'.",
      id: "Anda memiliki standar dan aturan sendiri yang kuat. Ketika pasangan tidak bertindak sesuai standar Anda, Anda tidak tahan dan merasa frustrasi. Anda ikut campur dan mencoba memperbaiki segalanya dari pakaian hingga kebiasaan gaya hidup. Pasangan Anda merasa Anda seperti 'orang tua' atau tercekik. Penyebab konflik Anda adalah keinginan untuk 'mengubah pasangan sesuai keinginan Anda'."
    },
    conflictCauses: {
      ko: "잔소리, 간섭, 생활 습관 차이",
      en: "Nagging, interference, lifestyle differences",
      ja: "小言、干渉、生活習慣の違い",
      "zh-CN": "唠叨、干涉、生活习惯差异",
      "zh-TW": "嘮叨、干涉、生活習慣差異",
      vi: "Cằn nhằn, can thiệp, khác biệt thói quen sinh hoạt",
      id: "Mengomel, campur tangan, perbedaan gaya hidup"
    },
    solution: {
      ko: "연인은 당신의 부하 직원이 아닙니다. 다름을 인정하세요.",
      en: "Your partner is not your subordinate. Accept the differences.",
      ja: "恋人はあなたの部下ではありません。違いを認めてください。",
      "zh-CN": "你的伴侣不是你的下属。接受差异。",
      "zh-TW": "你的伴侶不是你的下屬。接受差異。",
      vi: "Người yêu của bạn không phải là cấp dưới của bạn. Hãy chấp nhận sự khác biệt.",
      id: "Pasangan Anda bukan bawahan Anda. Terima perbedaannya."
    }
  },
  {
    type: "Type6",
    emoji: "💣",
    title: {
      ko: "꾹꾹 참는, 시한폭탄형",
      en: "Suppressing, Time Bomb Type",
      ja: "我慢、時限爆弾型",
      "zh-CN": "强忍型，定时炸弹型",
      "zh-TW": "強忍型，定時炸彈型",
      vi: "Kìm Nén, Kiểu Bom Hẹn Giờ",
      id: "Menahan, Tipe Bom Waktu"
    },
    shortDescription: {
      ko: "\"아니야 괜찮아... (속으론 부글부글)\"",
      en: "\"No, it's fine... (boiling inside)\"",
      ja: "「いや大丈夫...（内心は煮えくり返っている）」",
      "zh-CN": "\"不，没关系...（内心在沸腾）\"",
      "zh-TW": "\"不，沒關係...（內心在沸騰）\"",
      vi: "\"Không, không sao đâu... (bên trong đang sôi sục)\"",
      id: "\"Tidak, tidak apa-apa... (mendidih di dalam)\""
    },
    description: {
      ko: "당신은 평화주의자 코스프레를 하고 있습니다. 싸우기 싫어서 무조건 참고 맞춰주지만, 속으로는 불만이 쌓이고 있습니다. 그러다 어느 날 별거 아닌 일에 폭발하여 과거의 일까지 모두 끄집어냅니다. 상대방은 \"갑자기 왜 저러지?\" 하며 당황합니다. 당신의 싸움 원인은 '솔직하지 못한 태도'입니다.",
      en: "You're cosplaying as a pacifist. You hate fighting, so you unconditionally endure and accommodate, but inside, resentment is building up. Then one day, you explode over something trivial and bring up everything from the past. Your partner is confused, \"Why is this happening suddenly?\" Your conflict cause is 'dishonest attitude'.",
      ja: "あなたは平和主義者のコスプレをしています。喧嘩が嫌で無条件に我慢して合わせますが、内心では不満が蓄積しています。そしてある日、些細なことで爆発し、過去のことをすべて持ち出します。相手は「急にどうしたの？」と困惑します。あなたの喧嘩の原因は「正直でない態度」です。",
      "zh-CN": "你在扮演和平主义者。你讨厌争吵，所以无条件地忍受和迁就，但内心不满在积累。然后在某一天，你因为一件小事爆发，把过去的所有事情都翻出来。你的伴侣很困惑，\"为什么突然这样？\"你吵架的原因是'不诚实的态度'。",
      "zh-TW": "你在扮演和平主義者。你討厭爭吵，所以無條件地忍受和遷就，但內心不滿在積累。然後在某一天，你因為一件小事爆發，把過去的所有事情都翻出來。你的伴侶很困惑，\"為什麼突然這樣？\"你吵架的原因是'不誠實的態度'。",
      vi: "Bạn đang đóng vai người theo chủ nghĩa hòa bình. Bạn ghét cãi nhau nên vô điều kiện chịu đựng và nhượng bộ, nhưng bên trong, sự bất mãn đang tích tụ. Rồi một ngày, bạn bùng nổ vì một chuyện nhỏ nhặt và đưa ra mọi thứ từ quá khứ. Người yêu của bạn bối rối, \"Tại sao đột nhiên lại như vậy?\" Nguyên nhân xung đột của bạn là 'thái độ không trung thực'.",
      id: "Anda sedang berperan sebagai pasifis. Anda benci bertengkar, jadi tanpa syarat menahan dan menyesuaikan, tetapi di dalam, kebencian menumpuk. Kemudian suatu hari, Anda meledak karena hal sepele dan membawa semua hal dari masa lalu. Pasangan Anda bingung, \"Kenapa tiba-tiba begini?\" Penyebab konflik Anda adalah 'sikap tidak jujur'."
    },
    conflictCauses: {
      ko: "뒤끝, 갑작스러운 폭발, 수동적 공격",
      en: "Resentment, sudden explosion, passive aggression",
      ja: "後味、突然の爆発、受動的攻撃",
      "zh-CN": "后劲、突然爆发、被动攻击",
      "zh-TW": "後勁、突然爆發、被動攻擊",
      vi: "Hậu quả, bùng nổ đột ngột, tấn công thụ động",
      id: "Kebencian, ledakan tiba-tiba, agresi pasif"
    },
    solution: {
      ko: "그때그때 서운한 점을 부드럽게 말하는 연습을 하세요.",
      en: "Practice gently expressing what hurts you in the moment.",
      ja: "その時その時で不満な点を優しく言う練習をしてください。",
      "zh-CN": "练习在当下温和地表达让你不满的地方。",
      "zh-TW": "練習在當下溫和地表達讓你不滿的地方。",
      vi: "Hãy luyện tập bày tỏ nhẹ nhàng những điều làm bạn tổn thương ngay lúc đó.",
      id: "Berlatihlah mengungkapkan dengan lembut apa yang menyakiti Anda pada saat itu."
    }
  }
];

export function calculatePhase2ConflictReasonResult(
  answers: Array<{ questionId: number; selectedTypes: string[] }>
): string {
  const typeScores: Record<string, number> = {
    Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0
  };

  answers.forEach(answer => {
    answer.selectedTypes.forEach(type => {
      if (typeScores.hasOwnProperty(type)) {
        typeScores[type] += 1;
      }
    });
  });

  let maxScore = -1;
  let resultType = "Type1"; // Default value (highest priority)
  const priority = ["Type1", "Type4", "Type3", "Type2", "Type6", "Type5"];
  
  priority.forEach(type => {
    if (typeScores[type] > maxScore) {
      maxScore = typeScores[type];
      resultType = type;
    }
  });
  return resultType;
}
