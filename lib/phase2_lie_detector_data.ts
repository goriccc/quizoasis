export interface Phase2LieDetectorQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1
  }[];
}

export interface Phase2LieDetectorResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  lieLevel: Record<string, string>; // "Lv. 1", "Lv. 20" 등
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const phase2LieDetectorQuestions: Phase2LieDetectorQuestion[] = [
  {
    id: 1,
    question: {
      ko: "누군가 당신을 의심하며 \"너 거짓말이지?\"라고 추궁할 때?",
      en: "When someone suspects you and presses \"Are you lying?\"",
      ja: "誰かがあなたを疑って「嘘ついてるでしょ？」と追及してきたとき？",
      'zh-CN': "当有人怀疑你并质问\"你在撒谎吗？\"时？",
      'zh-TW': "當有人懷疑你並質問「你在撒謊嗎？」時？",
      vi: "Khi ai đó nghi ngờ bạn và ép buộc \"Bạn đang nói dối phải không?\"",
      id: "Ketika seseorang mencurigai Anda dan menekan \"Apakah Anda berbohong?\""
    },
    options: [
      {
        text: {
          ko: "\"아니라니까? 왜 사람을 못 믿어!\" 화를 내거나 억울해한다",
          en: "\"I said no! Why can't you trust people!\" Get angry or feel wronged",
          ja: "「違うってば！なんで人を信じられないの！」怒ったり悔しかったりする",
          'zh-CN': "\"我说了没有！为什么不相信人！\"生气或感到委屈",
          'zh-TW': "「我說沒有！為什麼不相信人！」生氣或感到委屈",
          vi: "\"Tôi đã nói không rồi mà! Sao không thể tin người ta!\" Tức giận hoặc cảm thấy oan ức",
          id: "\"Saya bilang tidak! Kenapa tidak bisa percaya orang!\" Marah atau merasa teraniaya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"왜 그렇게 생각하는데?\" 침착하게 되물으며 상대의 의중을 파악한다",
          en: "\"Why do you think that?\" Calmly ask back and gauge the other's intent",
          ja: "「どうしてそう思うの？」冷静に聞き返して相手の意図を把握する",
          'zh-CN': "\"你为什么这么想？\"冷静地反问并揣测对方的意图",
          'zh-TW': "「你為什麼這麼想？」冷靜地反問並揣測對方的意圖",
          vi: "\"Tại sao bạn lại nghĩ vậy?\" Bình tĩnh hỏi lại và đoán ý định của đối phương",
          id: "\"Kenapa Anda berpikir begitu?\" Dengan tenang bertanya balik dan mengukur niat lawan"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "약속 시간에 늦었을 때 주로 하는 말은?",
      en: "What do you usually say when you're late for an appointment?",
      ja: "約束の時間に遅れたとき、主に何と言いますか？",
      'zh-CN': "当你约会迟到时，你通常说什么？",
      'zh-TW': "當你約會遲到時，你通常說什麼？",
      vi: "Bạn thường nói gì khi trễ hẹn?",
      id: "Apa yang biasanya Anda katakan saat terlambat untuk janji?"
    },
    options: [
      {
        text: {
          ko: "\"미안해 ㅠㅠ 늦잠 잤어 / 준비가 늦어졌어\"",
          en: "\"Sorry T_T I overslept / Preparation took too long\"",
          ja: "「ごめん ㅠㅠ 寝坊した / 準備が遅くなった」",
          'zh-CN': "\"对不起 ㅠㅠ 睡过头了 / 准备晚了\"",
          'zh-TW': "「對不起 ㅠㅠ 睡過頭了 / 準備晚了」",
          vi: "\"Xin lỗi ㅠㅠ Mình ngủ quên / Chuẩn bị muộn\"",
          id: "\"Maaf T_T Saya kesiangan / Persiapan terlalu lama\""
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"지금 가는 중이야! / 차가 너무 막혀\"",
          en: "\"I'm on my way now! / Traffic is really bad\"",
          ja: "「今行ってる！/ 車がすごく渋滞してる」",
          'zh-CN': "\"我现在在路上！/ 车太堵了\"",
          'zh-TW': "「我現在在路上！/ 車太堵了」",
          vi: "\"Mình đang đi rồi! / Kẹt xe quá\"",
          id: "\"Saya sedang dalam perjalanan! / Lalu lintas sangat macet\""
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "마음에 없는 선물을 받았을 때 당신의 표정은?",
      en: "What is your expression when you receive a gift you don't like?",
      ja: "気に入らないプレゼントをもらったとき、あなたの表情は？",
      'zh-CN': "当你收到不喜欢的礼物时，你的表情是？",
      'zh-TW': "當你收到不喜歡的禮物時，你的表情是？",
      vi: "Biểu cảm của bạn khi nhận được món quà không thích là gì?",
      id: "Apa ekspresi Anda ketika menerima hadiah yang tidak Anda sukai?"
    },
    options: [
      {
        text: {
          ko: "입꼬리가 떨리거나 어색한 미소가 지어진다",
          en: "Mouth corners twitch or awkward smile appears",
          ja: "口角が震えたり気まずい笑顔になる",
          'zh-CN': "嘴角抽搐或露出尴尬的笑容",
          'zh-TW': "嘴角抽搐或露出尷尬的笑容",
          vi: "Khóe miệng run rẩy hoặc nụ cười khó xử xuất hiện",
          id: "Sudut mulut berkedut atau senyum canggung muncul"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"와 대박! 내가 딱 필요했던 건데!\" 감동받은 연기를 완벽하게 한다",
          en: "\"Wow amazing! I really needed this!\" Perfectly act touched",
          ja: "「わあ、すごい！私がまさに必要だったもの！」感動した演技を完璧にする",
          'zh-CN': "\"哇太棒了！我正需要这个！\"完美地表演感动",
          'zh-TW': "「哇太棒了！我正需要這個！」完美地表演感動",
          vi: "\"Ồ tuyệt vời! Mình đang cần cái này!\" Diễn cảm động một cách hoàn hảo",
          id: "\"Wow luar biasa! Saya benar-benar membutuhkan ini!\" Berakting tersentuh dengan sempurna"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "거짓말을 할 때, 상대방의 눈을 쳐다볼 수 있나요?",
      en: "When lying, can you look the other person in the eye?",
      ja: "嘘をつくとき、相手の目を見つめることができますか？",
      'zh-CN': "撒谎时，你能看着对方的眼睛吗？",
      'zh-TW': "撒謊時，你能看著對方的眼睛嗎？",
      vi: "Khi nói dối, bạn có thể nhìn vào mắt người đối diện không?",
      id: "Saat berbohong, bisakah Anda menatap mata orang lain?"
    },
    options: [
      {
        text: {
          ko: "불안해서 시선을 피하거나 눈을 깜빡거린다",
          en: "Avoid eye contact or blink frequently due to anxiety",
          ja: "不安で視線を避けたり目をパチパチさせたりする",
          'zh-CN': "因为不安而避开视线或频繁眨眼",
          'zh-TW': "因為不安而避開視線或頻繁眨眼",
          vi: "Tránh ánh nhìn hoặc chớp mắt liên tục vì lo lắng",
          id: "Menghindari kontak mata atau sering berkedip karena kecemasan"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "오히려 더 뚫어져라 쳐다보며 진실성을 어필한다",
          en: "Stare even more intensely and appeal to truthfulness",
          ja: "むしろより見つめて真実性をアピールする",
          'zh-CN': "反而更用力地盯着看并强调真实性",
          'zh-TW': "反而更用力地盯著看並強調真實性",
          vi: "Ngược lại, nhìn chằm chằm hơn và thể hiện tính trung thực",
          id: "Justru menatap lebih intens dan menarik perhatian pada kebenaran"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구가 비밀을 말해달라고 조를 때?",
      en: "When a friend pesters you to tell a secret?",
      ja: "友達が秘密を教えてと言ってしつこく言うとき？",
      'zh-CN': "当朋友缠着你让你说秘密时？",
      'zh-TW': "當朋友纏著你讓你說秘密時？",
      vi: "Khi bạn bè cứ nài nỉ bạn kể bí mật?",
      id: "Ketika teman mengganggu Anda untuk memberitahu rahasia?"
    },
    options: [
      {
        text: {
          ko: "분위기에 휩쓸려 \"너만 알고 있어\"라며 털어놓는다",
          en: "Get swept up and spill it saying \"Just you know\"",
          ja: "雰囲気に流されて「あなただけ知ってて」と言ってばらす",
          'zh-CN': "被气氛带动，说\"只告诉你\"然后全盘托出",
          'zh-TW': "被氣氛帶動，說「只告訴你」然後全盤托出",
          vi: "Bị cuốn theo không khí và nói hết \"Chỉ mình biết thôi\"",
          id: "Tersapu suasana dan membocorkan sambil mengatakan \"Hanya kamu yang tahu\""
        },
        score: 0 // A
      },
      {
        text: {
          ko: "끝까지 입을 다물거나, 중요하지 않은 가짜 비밀을 말해준다",
          en: "Keep mouth shut until the end, or tell an unimportant fake secret",
          ja: "最後まで口を閉ざすか、重要でない偽の秘密を教える",
          'zh-CN': "一直闭口不谈，或者说一个不重要的假秘密",
          'zh-TW': "一直閉口不談，或者說一個不重要的假秘密",
          vi: "Giữ kín đến cuối cùng, hoặc kể một bí mật giả không quan trọng",
          id: "Tutup mulut sampai akhir, atau beri tahu rahasia palsu yang tidak penting"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "완벽한 거짓말을 위해 사전에 시나리오를 짜본 적이 있다?",
      en: "Have you ever prepared a scenario in advance for a perfect lie?",
      ja: "完璧な嘘のために事前にシナリオを考えたことがありますか？",
      'zh-CN': "你曾经为完美的谎言提前准备过剧本吗？",
      'zh-TW': "你曾經為完美的謊言提前準備過劇本嗎？",
      vi: "Bạn đã bao giờ chuẩn bị kịch bản trước cho một lời nói dối hoàn hảo chưa?",
      id: "Pernahkah Anda menyiapkan skenario sebelumnya untuk kebohongan yang sempurna?"
    },
    options: [
      {
        text: {
          ko: "없다. 그냥 그 상황에 맞춰서 둘러댄다",
          en: "No. Just make things up to fit the situation",
          ja: "ない。ただその状況に合わせてごまかす",
          'zh-CN': "没有。只是根据情况随机应变",
          'zh-TW': "沒有。隻是根據情況隨機應變",
          vi: "Không. Chỉ bịa ra cho phù hợp với tình huống",
          id: "Tidak. Hanya membuat-buat agar sesuai dengan situasi"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "있다. 알리바이와 증거까지 치밀하게 준비한다",
          en: "Yes. Prepare meticulously including alibi and evidence",
          ja: "ある。アリバイと証拠まで綿密に準備する",
          'zh-CN': "有。细致准备包括不在场证明和证据",
          'zh-TW': "有。細緻準備包括不在場證明和證據",
          vi: "Có. Chuẩn bị kỹ lưỡng bao gồm cả alibi và bằng chứng",
          id: "Ya. Siapkan dengan cermat termasuk alibi dan bukti"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "내가 한 거짓말이 들통날 위기에 처했다면?",
      en: "If the lie I told is about to be exposed?",
      ja: "私がついた嘘がばれそうな危機に陥ったら？",
      'zh-CN': "如果我的谎言即将被揭穿？",
      'zh-TW': "如果我的謊言即將被揭穿？",
      vi: "Nếu lời nói dối của mình sắp bị phát hiện?",
      id: "Jika kebohongan yang saya katakan akan terbongkar?"
    },
    options: [
      {
        text: {
          ko: "\"사실은...\" 바로 이실직고하고 용서를 빈다",
          en: "\"Actually...\" Immediately confess and ask for forgiveness",
          ja: "「実は...」すぐに正直に告白して許しを請う",
          'zh-CN': "\"其实...\"立即坦白并请求原谅",
          'zh-TW': "「其實...」立即坦白並請求原諒",
          vi: "\"Thực ra...\" Ngay lập tức thú nhận và xin tha thứ",
          id: "\"Sebenarnya...\" Langsung mengakui dan meminta maaf"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "끝까지 우기거나, 또 다른 거짓말로 덮으려 한다",
          en: "Insist until the end, or try to cover it with another lie",
          ja: "最後まで強弁するか、別の嘘で覆おうとする",
          'zh-CN': "坚持到底，或用另一个谎言来掩盖",
          'zh-TW': "堅持到底，或用另一個謊言來掩蓋",
          vi: "Cố chấp đến cuối cùng, hoặc cố che đậy bằng lời nói dối khác",
          id: "Bersikeras sampai akhir, atau mencoba menutupinya dengan kebohongan lain"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 생각하는 '선의의 거짓말'은?",
      en: "What do you think of 'white lies'?",
      ja: "あなたが思う「善意の嘘」は？",
      'zh-CN': "你认为'善意的谎言'是什么？",
      'zh-TW': "你認為「善意的謊言」是什麼？",
      vi: "Bạn nghĩ gì về 'lời nói dối vô hại'?",
      id: "Apa yang Anda pikirkan tentang 'kebohongan putih'?"
    },
    options: [
      {
        text: {
          ko: "그래도 거짓말은 나쁘다. 진실이 최고다",
          en: "Lies are still bad. Truth is best",
          ja: "それでも嘘は悪い。真実が最高だ",
          'zh-CN': "但谎言还是不好的。真实最好",
          'zh-TW': "但謊言還是不好的。真實最好",
          vi: "Dù sao nói dối vẫn là xấu. Sự thật là tốt nhất",
          id: "Kebohongan tetap buruk. Kebenaran adalah yang terbaik"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "사회생활과 원만한 관계를 위해 필수적인 스킬이다",
          en: "Essential skill for social life and harmonious relationships",
          ja: "社会生活と円満な関係のための必須スキルだ",
          'zh-CN': "为了社交生活和和谐关系必不可少的技能",
          'zh-TW': "為了社交生活和和諧關係必不可少的技能",
          vi: "Kỹ năng cần thiết cho cuộc sống xã hội và các mối quan hệ hài hòa",
          id: "Keterampilan penting untuk kehidupan sosial dan hubungan harmonis"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "거짓말을 하고 난 뒤 당신의 기분은?",
      en: "How do you feel after telling a lie?",
      ja: "嘘をついた後、あなたの気分は？",
      'zh-CN': "撒谎后，你的心情如何？",
      'zh-TW': "撒謊後，你的心情如何？",
      vi: "Bạn cảm thấy thế nào sau khi nói dối?",
      id: "Bagaimana perasaan Anda setelah berbohong?"
    },
    options: [
      {
        text: {
          ko: "하루 종일 찜찜하고 죄책감이 든다",
          en: "Feel uneasy all day and guilty",
          ja: "一日中気まずくて罪悪感を感じる",
          'zh-CN': "一整天都感到不安和内疚",
          'zh-TW': "一整天都感到不安和內疚",
          vi: "Cảm thấy khó chịu cả ngày và có cảm giác tội lỗi",
          id: "Merasa tidak nyaman sepanjang hari dan bersalah"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "안 들켰으니 다행이다. 별생각 없다",
          en: "Relieved it wasn't exposed. Don't think much about it",
          ja: "バレなくて良かった。特に考えない",
          'zh-CN': "没被发现真是太好了。不怎么想它",
          'zh-TW': "沒被發現真是太好了。不怎麼想它",
          vi: "May mắn là không bị phát hiện. Không nghĩ nhiều về nó",
          id: "Lega tidak ketahuan. Tidak terlalu memikirkannya"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "평소 당신의 기억력은 어떤 편인가요?",
      en: "How is your memory usually?",
      ja: "普段あなたの記憶力はどのような感じですか？",
      'zh-CN': "你平时的记忆力如何？",
      'zh-TW': "你平時的記憶力如何？",
      vi: "Trí nhớ của bạn thường như thế nào?",
      id: "Bagaimana ingatan Anda biasanya?"
    },
    options: [
      {
        text: {
          ko: "내가 누구한테 무슨 말을 했는지 자주 까먹는다",
          en: "Often forget what I said to whom",
          ja: "誰に何を言ったかよく忘れる",
          'zh-CN': "经常忘记我对谁说过什么",
          'zh-TW': "經常忘記我對誰說過什麼",
          vi: "Thường quên mình đã nói gì với ai",
          id: "Sering lupa apa yang saya katakan kepada siapa"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "토씨 하나 안 틀리고 정확하게 기억한다",
          en: "Remember accurately without missing a single detail",
          ja: "一語一句間違えずに正確に覚えている",
          'zh-CN': "准确记住，一个细节都不漏",
          'zh-TW': "準確記住，一個細節都不漏",
          vi: "Nhớ chính xác không sai một chi tiết nào",
          id: "Ingat dengan akurat tanpa melewatkan satu detail pun"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "SNS에 올리는 사진과 실제 나의 모습은?",
      en: "What's the difference between photos you post on SNS and your real appearance?",
      ja: "SNSに投稿する写真と実際の私の姿は？",
      'zh-CN': "你在SNS上发布的照片和你的真实样子相比如何？",
      'zh-TW': "你在SNS上發布的照片和你的真實樣子相比如何？",
      vi: "Sự khác biệt giữa ảnh bạn đăng trên SNS và vẻ ngoài thực tế của bạn là gì?",
      id: "Apa perbedaan antara foto yang Anda posting di SNS dan penampilan asli Anda?"
    },
    options: [
      {
        text: {
          ko: "거의 비슷하다. 보정을 잘 안 한다",
          en: "Almost similar. Don't really do editing",
          ja: "ほぼ似ている。編集はあまりしない",
          'zh-CN': "几乎差不多。不怎么修图",
          'zh-TW': "幾乎差不多。不怎麼修圖",
          vi: "Gần như giống nhau. Không chỉnh sửa nhiều",
          id: "Hampir mirip. Tidak terlalu banyak mengedit"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "딴판이다. 보정 없는 원본은 절대 공개 불가다",
          en: "Completely different. Original without editing is absolutely impossible to share",
          ja: "全く違う。編集なしのオリジナルは絶対に公開できない",
          'zh-CN': "完全不同。未修图的原图绝对不能公开",
          'zh-TW': "完全不同。未修圖的原圖絕對不能公開",
          vi: "Hoàn toàn khác. Bản gốc không chỉnh sửa tuyệt đối không thể chia sẻ",
          id: "Sangat berbeda. Asli tanpa editing sama sekali tidak mungkin dibagikan"
        },
        score: 1 // B
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "만약 범죄를 저지르고 경찰서에 잡혀갔다면?",
      en: "If you committed a crime and got caught by the police?",
      ja: "もし犯罪を犯して警察署に連れて行かれたら？",
      'zh-CN': "如果你犯罪了并被警察抓住？",
      'zh-TW': "如果你犯罪了並被警察抓住？",
      vi: "Nếu bạn phạm tội và bị cảnh sát bắt?",
      id: "Jika Anda melakukan kejahatan dan tertangkap oleh polisi?"
    },
    options: [
      {
        text: {
          ko: "형사님의 눈빛에 압도되어 1분 만에 자백한다",
          en: "Overwhelmed by detective's gaze and confess in 1 minute",
          ja: "刑事の目つきに圧倒されて1分で自白する",
          'zh-CN': "被侦探的眼神压倒，1分钟内就坦白",
          'zh-TW': "被偵探的眼神壓倒，1分鐘內就坦白",
          vi: "Bị ánh nhìn của thám tử áp đảo và thú nhận trong 1 phút",
          id: "Terlindas oleh tatapan detektif dan mengaku dalam 1 menit"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "변호사가 올 때까지 묵비권을 행사하거나 알리바이를 댄다",
          en: "Exercise right to remain silent or provide alibi until lawyer arrives",
          ja: "弁護士が来るまで黙秘権を行使するかアリバイを述べる",
          'zh-CN': "在律师到来之前行使沉默权或提供不在场证明",
          'zh-TW': "在律師到來之前行使沉默權或提供不在場證明",
          vi: "Thực hiện quyền im lặng hoặc đưa ra alibi cho đến khi luật sư đến",
          id: "Menggunakan hak untuk tetap diam atau memberikan alibi sampai pengacara datang"
        },
        score: 1 // B
      }
    ]
  }
];

export const phase2LieDetectorResults: Phase2LieDetectorResult[] = [
  {
    type: "Type1",
    emoji: "🤥",
    title: {
      ko: "거짓말 못 하는, 빨간 코 피노키오",
      en: "Can't Lie, Red-Nosed Pinocchio",
      ja: "嘘がつけない、赤鼻のピノキオ",
      'zh-CN': "不会撒谎的，红鼻子匹诺曹",
      'zh-TW': "不會撒謊的，紅鼻子匹諾曹",
      vi: "Không thể nói dối, Pinocchio mũi đỏ",
      id: "Tidak Bisa Berbohong, Pinokio Hidung Merah"
    },
    shortDescription: {
      ko: "\"입만 열면 다 티가 나요\"",
      en: "\"Everything shows the moment I open my mouth\"",
      ja: "「口を開けば全部バレる」",
      'zh-CN': "\"一张嘴就全暴露了\"",
      'zh-TW': "「一張嘴就全暴露了」",
      vi: "\"Chỉ cần mở miệng là lộ hết\"",
      id: "\"Begitu buka mulut langsung ketahuan semua\""
    },
    description: {
      ko: "당신은 거짓말을 하면 얼굴이 빨개지거나 목소리가 떨리는 투명한 사람입니다. 남을 속이는 재주가 전혀 없어서, 마피아 게임을 하면 1라운드에 죽는 타입입니다. 너무 솔직해서 탈이지만, 그만큼 주변 사람들에게 신뢰를 받는 '청정 구역'입니다.",
      en: "You are a transparent person whose face turns red or voice trembles when lying. You have no talent for deceiving others, so you die in round 1 of mafia games. Being too honest has its downsides, but you are trusted by those around you as a 'clean zone'.",
      ja: "あなたは嘘をつくと顔が赤くなったり声が震える透明な人です。人を騙す才能が全くなく、マフィアゲームをすると1ラウンドで死ぬタイプです。正直すぎて困ることもありますが、その分周りの人々から信頼される「清浄区域」です。",
      'zh-CN': "你是一个撒谎时脸会红或声音会颤抖的透明人。完全没有欺骗他人的才能，所以玩狼人杀时第一轮就会死。太诚实虽然有缺点，但因此被周围人信任，是'清净区域'。",
      'zh-TW': "你是一個撒謊時臉會紅或聲音會顫抖的透明人。完全沒有欺騙他人的才能，所以玩狼人殺時第一輪就會死。太誠實雖然有缺點，但因此被周圍人信任，是「清淨區域」。",
      vi: "Bạn là người trong suốt, khi nói dối mặt đỏ hoặc giọng run rẩy. Không có tài năng lừa dối người khác, nên chơi mafia sẽ chết ở vòng 1. Quá trung thực có vấn đề, nhưng được mọi người xung quanh tin tưởng như 'vùng sạch'.",
      id: "Anda adalah orang yang transparan yang wajahnya memerah atau suaranya bergetar saat berbohong. Anda sama sekali tidak memiliki bakat untuk menipu orang lain, jadi Anda mati di ronde 1 permainan mafia. Terlalu jujur ada masalahnya, tetapi Anda dipercaya oleh orang-orang sekitar sebagai 'zona bersih'."
    },
    lieLevel: {
      ko: "Lv. 1 (하수)",
      en: "Lv. 1 (Beginner)",
      ja: "Lv. 1 (初心者)",
      'zh-CN': "Lv. 1 (新手)",
      'zh-TW': "Lv. 1 (新手)",
      vi: "Lv. 1 (Người mới)",
      id: "Lv. 1 (Pemula)"
    },
    characteristics: {
      ko: "동공 지진, 억울하면 눈물 남",
      en: "Pupil tremor, tears when wronged",
      ja: "瞳孔地震、悔しいと涙が出る",
      'zh-CN': "瞳孔地震，委屈时会流泪",
      'zh-TW': "瞳孔地震，委屈時會流淚",
      vi: "Đồng tử run rẩy, oan ức thì khóc",
      id: "Getaran pupil, menangis saat teraniaya"
    },
    goodMatch: {
      ko: "Type 2 (어설픈 연기자)",
      en: "Type 2 (Amateur Actor)",
      ja: "Type 2 (不器用な役者)",
      'zh-CN': "Type 2 (不熟练的演员)",
      'zh-TW': "Type 2 (不熟練的演員)",
      vi: "Type 2 (Diễn viên nghiệp dư)",
      id: "Type 2 (Aktor Amatir)"
    },
    badMatch: {
      ko: "Type 6 (전문 사기꾼)",
      en: "Type 6 (Professional Liar)",
      ja: "Type 6 (プロの詐欺師)",
      'zh-CN': "Type 6 (专业骗子)",
      'zh-TW': "Type 6 (專業騙子)",
      vi: "Type 6 (Kẻ lừa đảo chuyên nghiệp)",
      id: "Type 6 (Pembohong Profesional)"
    }
  },
  {
    type: "Type2",
    emoji: "🎭",
    title: {
      ko: "노력은 가상한, 어설픈 연기자",
      en: "Effort is Admirable, Amateur Actor",
      ja: "努力は評価できる、不器用な役者",
      'zh-CN': "努力值得称赞的，不熟练的演员",
      'zh-TW': "努力值得稱讚的，不熟練的演員",
      vi: "Nỗ lực đáng khen, diễn viên nghiệp dư",
      id: "Usaha Patut Dihargai, Aktor Amatir"
    },
    shortDescription: {
      ko: "\"완벽했다고 생각했는데... 왜 들켰지?\"",
      en: "\"I thought it was perfect... why was I caught?\"",
      ja: "「完璧だと思ったのに...なんでバレたの？」",
      'zh-CN': "\"我以为很完美...为什么被发现了？\"",
      'zh-TW': "「我以為很完美...為什麼被發現了？」",
      vi: "\"Mình nghĩ đã hoàn hảo... tại sao lại bị phát hiện?\"",
      id: "\"Saya pikir sempurna... kenapa ketahuan?\""
    },
    description: {
      ko: "당신은 나름대로 머리를 굴려 거짓말을 하지만, 허술한 구석이 많아 금방 들통납니다. \"아니, 그게 아니라...\" 하며 변명하다가 자가당착에 빠지곤 합니다. 악의적인 거짓말보다는 상황 모면용 귀여운 거짓말을 주로 하는 타입입니다.",
      en: "You try to think and lie, but there are many weak spots, so you get caught quickly. You often fall into contradictions while making excuses like \"No, that's not it...\". You mainly tell cute lies to get out of situations rather than malicious lies.",
      ja: "あなたは自分なりに頭を働かせて嘘をつくが、ずさんなところが多くすぐにバレます。「いや、それは違って...」と弁解しているうちに自己矛盾に陥ることがよくあります。悪意のある嘘よりも状況を切り抜けるためのかわいい嘘を主にするタイプです。",
      'zh-CN': "你虽然会动脑筋撒谎，但漏洞很多，很快就露馅了。经常会一边辩解\"不是，那个不是...\"一边陷入自相矛盾。主要是为了脱身而说可爱的谎言，而不是恶意的谎言。",
      'zh-TW': "你雖然會動腦筋撒謊，但漏洞很多，很快就露餡了。經常會一邊辯解「不是，那個不是...」一邊陷入自相矛盾。主要是為了脫身而說可愛的謊言，而不是惡意的謊言。",
      vi: "Bạn cố suy nghĩ và nói dối, nhưng có nhiều điểm yếu nên nhanh chóng bị phát hiện. Thường rơi vào mâu thuẫn khi biện hộ \"Không, không phải vậy...\". Chủ yếu nói những lời nói dối dễ thương để thoát tình huống hơn là nói dối có ác ý.",
      id: "Anda mencoba berpikir dan berbohong, tetapi ada banyak titik lemah, jadi cepat ketahuan. Sering jatuh ke kontradiksi sambil membuat alasan seperti \"Tidak, bukan itu...\". Anda terutama mengatakan kebohongan lucu untuk keluar dari situasi daripada kebohongan jahat."
    },
    lieLevel: {
      ko: "Lv. 20 (입문)",
      en: "Lv. 20 (Beginner)",
      ja: "Lv. 20 (初心者)",
      'zh-CN': "Lv. 20 (入门)",
      'zh-TW': "Lv. 20 (入門)",
      vi: "Lv. 20 (Người mới)",
      id: "Lv. 20 (Pemula)"
    },
    characteristics: {
      ko: "말하다가 꼬임, 웃음 못 참음",
      en: "Get tangled while speaking, can't hold back laughter",
      ja: "話しているうちに絡まる、笑いをこらえられない",
      'zh-CN': "说话时打结，忍不住笑",
      'zh-TW': "說話時打結，忍不住笑",
      vi: "Nói rồi rối, không nhịn được cười",
      id: "Kusut saat berbicara, tidak bisa menahan tawa"
    },
    goodMatch: {
      ko: "Type 1 (피노키오)",
      en: "Type 1 (Pinocchio)",
      ja: "Type 1 (ピノキオ)",
      'zh-CN': "Type 1 (匹诺曹)",
      'zh-TW': "Type 1 (匹諾曹)",
      vi: "Type 1 (Pinocchio)",
      id: "Type 1 (Pinokio)"
    },
    badMatch: {
      ko: "Type 5 (능구렁이)",
      en: "Type 5 (Smooth Talker)",
      ja: "Type 5 (ずる賢い)",
      'zh-CN': "Type 5 (滑头)",
      'zh-TW': "Type 5 (滑頭)",
      vi: "Type 5 (Kẻ khéo léo)",
      id: "Type 5 (Pembual Licik)"
    }
  },
  {
    type: "Type3",
    emoji: "🤝",
    title: {
      ko: "사회생활 만렙, 선의의 거짓말쟁이",
      en: "Max Level Social Skills, White Liar",
      ja: "社会生活マックス、善意の嘘つき",
      'zh-CN': "社交生活满级，善意的说谎者",
      'zh-TW': "社交生活滿級，善意的說謊者",
      vi: "Kỹ năng xã hội cấp cao, kẻ nói dối vô hại",
      id: "Keterampilan Sosial Maksimal, Pembohong Putih"
    },
    shortDescription: {
      ko: "\"어머~ 너 살 빠졌다! (사실 모름)\"",
      en: "\"Oh my~ you lost weight! (Actually don't know)\"",
      ja: "「あら〜痩せたね！（実は知らない）」",
      'zh-CN': "\"哦我的天~你瘦了！（其实不知道）\"",
      'zh-TW': "「哦我的天〜你瘦了！（其實不知道）」",
      vi: "\"Ồ trời~ Bạn gầy rồi! (Thực ra không biết)\"",
      id: "\"Wah~ kamu kurus! (Sebenarnya tidak tahu)\""
    },
    description: {
      ko: "당신은 원만한 인간관계를 위해 '하얀 거짓말'을 자유자재로 구사합니다. 상대방의 기분을 맞춰주기 위한 립 서비스나 칭찬에 능숙합니다. 당신의 거짓말은 남을 해치기보다는 윤활유 역할을 합니다. 처세술이 뛰어난 편입니다.",
      en: "You skillfully use 'white lies' for harmonious relationships. You are skilled at lip service and compliments to match the other person's mood. Your lies serve as lubricant rather than harming others. You have excellent social skills.",
      ja: "あなたは円満な人間関係のために「白い嘘」を自由自在に使いこなします。相手の気分に合わせるための口先のサービスや褒め言葉に長けています。あなたの嘘は人を傷つけるよりも潤滑油の役割をします。処世術に優れています。",
      'zh-CN': "你为了和谐的人际关系而熟练运用'白色谎言'。擅长为了迎合对方心情而说客套话或赞美。你的谎言起到润滑剂的作用而不是伤害他人。处世技巧很出色。",
      'zh-TW': "你為了和諧的人際關係而熟練運用「白色謊言」。擅長為了迎合對方心情而說客套話或讚美。你的謊言起到潤滑劑的作用而不是傷害他人。處世技巧很出色。",
      vi: "Bạn khéo léo sử dụng 'lời nói dối vô hại' cho các mối quan hệ hài hòa. Giỏi nói khách sáo và khen ngợi để phù hợp với tâm trạng người khác. Lời nói dối của bạn đóng vai trò chất bôi trơn hơn là làm tổn thương. Kỹ năng xã hội xuất sắc.",
      id: "Anda mahir menggunakan 'kebohongan putih' untuk hubungan harmonis. Terampil dalam layanan bibir dan pujian untuk menyesuaikan suasana hati orang lain. Kebohongan Anda berfungsi sebagai pelumas daripada menyakiti orang lain. Anda memiliki keterampilan sosial yang sangat baik."
    },
    lieLevel: {
      ko: "Lv. 40 (중수)",
      en: "Lv. 40 (Intermediate)",
      ja: "Lv. 40 (中級)",
      'zh-CN': "Lv. 40 (中级)",
      'zh-TW': "Lv. 40 (中級)",
      vi: "Lv. 40 (Trung bình)",
      id: "Lv. 40 (Menengah)"
    },
    characteristics: {
      ko: "영혼 없는 리액션, 칭찬봇",
      en: "Soulless reactions, praise bot",
      ja: "魂のない反応、褒めボット",
      'zh-CN': "没有灵魂的反应，赞美机器人",
      'zh-TW': "沒有靈魂的反應，讚美機器人",
      vi: "Phản ứng không linh hồn, bot khen ngợi",
      id: "Reaksi tanpa jiwa, bot pujian"
    },
    goodMatch: {
      ko: "Type 4 (포커페이스)",
      en: "Type 4 (Poker Face)",
      ja: "Type 4 (ポーカーフェイス)",
      'zh-CN': "Type 4 (扑克脸)",
      'zh-TW': "Type 4 (撲克臉)",
      vi: "Type 4 (Mặt poker)",
      id: "Type 4 (Poker Face)"
    },
    badMatch: {
      ko: "Type 1 (피노키오 - 팩폭 당함)",
      en: "Type 1 (Pinocchio - Gets exposed)",
      ja: "Type 1 (ピノキオ - 暴露される)",
      'zh-CN': "Type 1 (匹诺曹 - 被揭穿)",
      'zh-TW': "Type 1 (匹諾曹 - 被揭穿)",
      vi: "Type 1 (Pinocchio - Bị phát hiện)",
      id: "Type 1 (Pinokio - Terbongkar)"
    }
  },
  {
    type: "Type4",
    emoji: "🗿",
    title: {
      ko: "속을 알 수 없는, 미스테리 포커페이스",
      en: "Mysterious Poker Face, Inscrutable",
      ja: "中が読めない、ミステリアスなポーカーフェイス",
      'zh-CN': "神秘扑克脸，深不可测",
      'zh-TW': "神秘撲克臉，深不可測",
      vi: "Mặt poker bí ẩn, không thể đoán",
      id: "Poker Face Misterius, Tidak Terbaca"
    },
    shortDescription: {
      ko: "\"진심인지 아닌지 헷갈려\"",
      en: "\"Confused whether it's sincere or not\"",
      ja: "「本心かどうかわからない」",
      'zh-CN': "\"不知道是不是真心\"",
      'zh-TW': "「不知道是不是真心」",
      vi: "\"Không biết có thành thật không\"",
      id: "\"Bingung apakah tulus atau tidak\""
    },
    description: {
      ko: "당신은 감정을 잘 드러내지 않아 남들이 속마음을 읽기 어려워합니다. 거짓말을 해도 표정 변화가 없어서 상대방이 긴가민가하게 만듭니다. 침묵을 금보다 귀하게 여기며, 불필요한 말로 꼬투리 잡힐 일을 만들지 않는 신중한 타입입니다.",
      en: "You don't reveal emotions well, making it hard for others to read your true feelings. Even when lying, there's no change in expression, leaving others uncertain. You value silence more than gold and are a cautious type who doesn't create situations where unnecessary words can be used against you.",
      ja: "あなたは感情をあまり表に出さないため、他の人が本心を読みにくいです。嘘をついても表情が変わらないので、相手を不安にさせます。沈黙を金よりも貴重に思い、不必要な言葉でつけこまれるようなことを作らない慎重なタイプです。",
      'zh-CN': "你不善于表露情感，让人难以读懂你的真实想法。即使撒谎也面无表情，让对方感到不确定。你视沉默如金，是谨慎的类型，不会说不必要的话而给人留下把柄。",
      'zh-TW': "你不善於表露情感，讓人難以讀懂你的真實想法。即使撒謊也面無表情，讓對方感到不確定。你視沉默如金，是謹慎的類型，不會說不必要的話而給人留下把柄。",
      vi: "Bạn không bộc lộ cảm xúc tốt, khiến người khác khó đọc được cảm xúc thật. Ngay cả khi nói dối cũng không thay đổi biểu cảm, khiến người khác không chắc chắn. Bạn coi trọng im lặng hơn vàng và là người thận trọng, không tạo ra tình huống để lời nói không cần thiết bị dùng chống lại mình.",
      id: "Anda tidak mengungkapkan emosi dengan baik, membuat sulit bagi orang lain untuk membaca perasaan sejati Anda. Bahkan saat berbohong, tidak ada perubahan ekspresi, membuat orang lain tidak pasti. Anda menghargai keheningan lebih dari emas dan adalah tipe yang hati-hati yang tidak menciptakan situasi di mana kata-kata yang tidak perlu dapat digunakan melawan Anda."
    },
    lieLevel: {
      ko: "Lv. 60 (고수)",
      en: "Lv. 60 (Advanced)",
      ja: "Lv. 60 (上級)",
      'zh-CN': "Lv. 60 (高级)",
      'zh-TW': "Lv. 60 (高級)",
      vi: "Lv. 60 (Nâng cao)",
      id: "Lv. 60 (Lanjutan)"
    },
    characteristics: {
      ko: "무표정, 비밀 많음",
      en: "Expressionless, many secrets",
      ja: "無表情、秘密が多い",
      'zh-CN': "面无表情，有很多秘密",
      'zh-TW': "面無表情，有很多秘密",
      vi: "Vô cảm xúc, nhiều bí mật",
      id: "Tanpa ekspresi, banyak rahasia"
    },
    goodMatch: {
      ko: "Type 3 (선의의 거짓말쟁이)",
      en: "Type 3 (White Liar)",
      ja: "Type 3 (善意の嘘つき)",
      'zh-CN': "Type 3 (善意的说谎者)",
      'zh-TW': "Type 3 (善意的說謊者)",
      vi: "Type 3 (Kẻ nói dối vô hại)",
      id: "Type 3 (Pembohong Putih)"
    },
    badMatch: {
      ko: "Type 2 (어설픈 연기자 - 답답해함)",
      en: "Type 2 (Amateur Actor - Frustrating)",
      ja: "Type 2 (不器用な役者 - イライラ)",
      'zh-CN': "Type 2 (不熟练的演员 - 令人沮丧)",
      'zh-TW': "Type 2 (不熟練的演員 - 令人沮喪)",
      vi: "Type 2 (Diễn viên nghiệp dư - Bực bội)",
      id: "Type 2 (Aktor Amatir - Membuat Frustrasi)"
    }
  },
  {
    type: "Type5",
    emoji: "🐍",
    title: {
      ko: "숨 쉬듯이 자연스러운, 능구렁이",
      en: "Smooth Talker, Natural as Breathing",
      ja: "呼吸のように自然な、ずる賢い",
      'zh-CN': "如呼吸般自然的，滑头",
      'zh-TW': "如呼吸般自然的，滑頭",
      vi: "Kẻ khéo léo, tự nhiên như hơi thở",
      id: "Pembual Licik, Natural Seperti Bernapas"
    },
    shortDescription: {
      ko: "\"내 말이 곧 법이고 진실이다\"",
      en: "\"My word is law and truth\"",
      ja: "「私の言葉が法であり真実だ」",
      'zh-CN': "\"我的话就是法律和真理\"",
      'zh-TW': "「我的話就是法律和真理」",
      vi: "\"Lời tôi nói là luật và sự thật\"",
      id: "\"Kata saya adalah hukum dan kebenaran\""
    },
    description: {
      ko: "당신은 거짓말을 창조하는 데 탁월한 재능이 있습니다. 없는 이야기도 1초 만에 지어내며, 그것을 진짜처럼 믿게 만드는 화술을 가졌습니다. 위기 상황을 모면하는 임기응변이 뛰어나며, 자신의 이득을 위해 판을 짤 줄 아는 전략가입니다.",
      en: "You have exceptional talent for creating lies. You can make up stories that don't exist in 1 second and have the eloquence to make them believable. You excel at quick thinking to get out of crisis situations and are a strategist who knows how to set things up for your own benefit.",
      ja: "あなたは嘘を創造するのに卓越した才能があります。存在しない話も1秒で作り出し、それを本物のように信じさせることができる話術を持っています。危機的状況を切り抜ける機転が優れており、自分の利益のために手を打つことができる戦略家です。",
      'zh-CN': "你在创造谎言方面有卓越的才能。可以在1秒内编出不存在的故事，并拥有让人相信它们的口才。善于在危机情况下随机应变，是知道如何为自己利益布局的战略家。",
      'zh-TW': "你在創造謊言方面有卓越的才能。可以在1秒內編出不存在的故事，並擁有讓人相信它們的口才。善於在危機情況下隨機應變，是知道如何為自己利益佈局的戰略家。",
      vi: "Bạn có tài năng xuất sắc trong việc tạo ra lời nói dối. Có thể bịa ra câu chuyện không tồn tại trong 1 giây và có tài hùng biện để khiến chúng đáng tin. Xuất sắc trong việc ứng biến để thoát khỏi tình huống khủng hoảng và là nhà chiến lược biết cách sắp xếp vì lợi ích của mình.",
      id: "Anda memiliki bakat luar biasa untuk menciptakan kebohongan. Anda dapat membuat cerita yang tidak ada dalam 1 detik dan memiliki kemampuan berbicara untuk membuatnya dapat dipercaya. Anda unggul dalam pemikiran cepat untuk keluar dari situasi krisis dan adalah seorang strategis yang tahu cara menyiapkan hal-hal untuk keuntungan Anda sendiri."
    },
    lieLevel: {
      ko: "Lv. 85 (초고수)",
      en: "Lv. 85 (Expert)",
      ja: "Lv. 85 (超上級)",
      'zh-CN': "Lv. 85 (超级高手)",
      'zh-TW': "Lv. 85 (超級高手)",
      vi: "Lv. 85 (Chuyên gia)",
      id: "Lv. 85 (Ahli)"
    },
    characteristics: {
      ko: "뻔뻔함, 강심장, 썰 풀기 장인",
      en: "Shameless, strong heart, master storyteller",
      ja: "厚かましい、強心臓、話の職人",
      'zh-CN': "厚脸皮，强大的心脏，讲故事大师",
      'zh-TW': "厚臉皮，強大的心臟，講故事大師",
      vi: "Vô liêm sỉ, gan lớn, bậc thầy kể chuyện",
      id: "Tidak tahu malu, hati kuat, master pencerita"
    },
    goodMatch: {
      ko: "Type 6 (전문 사기꾼)",
      en: "Type 6 (Professional Liar)",
      ja: "Type 6 (プロの詐欺師)",
      'zh-CN': "Type 6 (专业骗子)",
      'zh-TW': "Type 6 (專業騙子)",
      vi: "Type 6 (Kẻ lừa đảo chuyên nghiệp)",
      id: "Type 6 (Pembohong Profesional)"
    },
    badMatch: {
      ko: "Type 4 (포커페이스 - 안 속음)",
      en: "Type 4 (Poker Face - Not fooled)",
      ja: "Type 4 (ポーカーフェイス - 騙されない)",
      'zh-CN': "Type 4 (扑克脸 - 不会被骗)",
      'zh-TW': "Type 4 (撲克臉 - 不會被騙)",
      vi: "Type 4 (Mặt poker - Không bị lừa)",
      id: "Type 4 (Poker Face - Tidak Tertipu)"
    }
  },
  {
    type: "Type6",
    emoji: "😎",
    title: {
      ko: "걸어 다니는 헐리우드, 전문 사기꾼(?)",
      en: "Walking Hollywood, Professional Liar(?)",
      ja: "歩くハリウッド、プロの詐欺師(？)",
      'zh-CN': "行走的好莱坞，专业骗子(?)",
      'zh-TW': "行走的好萊塢，專業騙子(？)",
      vi: "Hollywood biết đi, kẻ lừa đảo chuyên nghiệp(?)",
      id: "Hollywood Berjalan, Pembohong Profesional(?)"
    },
    shortDescription: {
      ko: "\"리플리 증후군 주의! 메소드 연기\"",
      en: "\"Warning: Ripley Syndrome! Method Acting\"",
      ja: "「リプリー症候群注意！メソッド演技」",
      'zh-CN': "\"警告：里普利综合征！方法演技\"",
      'zh-TW': "「警告：里普利綜合徵！方法演技」",
      vi: "\"Cảnh báo: Hội chứng Ripley! Diễn xuất phương pháp\"",
      id: "\"Peringatan: Sindrom Ripley! Metode Akting\""
    },
    description: {
      ko: "축하합니다(?) 당신은 거짓말 탐지기도 속일 수 있는 멘탈의 소유자입니다. 치밀한 계획, 완벽한 연기, 흔들리지 않는 눈빛까지. 당신이 마음만 먹으면 전 국민을 상대로 몰래카메라를 찍을 수도 있습니다. 이 재능을 좋은 곳에만 쓰길 바랍니다.",
      en: "Congratulations(?) You are the owner of a mindset that can even fool lie detectors. Meticulous planning, perfect acting, unwavering gaze. If you set your mind to it, you could film hidden camera pranks against the entire nation. Please use this talent only for good purposes.",
      ja: "おめでとうございます(？) あなたは嘘発見器も騙すことができるメンタルの持ち主です。緻密な計画、完璧な演技、揺るがない視線まで。あなたが気持ちを向ければ、国民全員を相手に隠しカメラを撮ることもできます。この才能を良いことのためにだけ使ってください。",
      'zh-CN': "恭喜(?)你是拥有能够欺骗测谎仪心态的人。周密的计划，完美的演技，坚定不移的眼神。如果你愿意，你可以拍摄针对整个国家的隐藏摄像机恶作剧。请只把这个才能用在好的地方。",
      'zh-TW': "恭喜(？)你是擁有能夠欺騙測謊儀心態的人。周密的計劃，完美的演技，堅定不移的眼神。如果你願意，你可以拍攝針對整個國家的隱藏攝影機惡作劇。請只把這個才能用在好的地方。",
      vi: "Chúc mừng(?) Bạn là người sở hữu tinh thần có thể lừa được cả máy phát hiện nói dối. Kế hoạch tỉ mỉ, diễn xuất hoàn hảo, ánh nhìn không lay chuyển. Nếu bạn muốn, bạn có thể quay camera ẩn đối với cả quốc gia. Hãy chỉ dùng tài năng này cho mục đích tốt.",
      id: "Selamat(?) Anda adalah pemilik pola pikir yang bahkan dapat membodohi detektor kebohongan. Perencanaan yang cermat, akting yang sempurna, tatapan yang tak tergoyahkan. Jika Anda menginginkannya, Anda dapat merekam kamera tersembunyi terhadap seluruh bangsa. Tolong gunakan bakat ini hanya untuk tujuan baik."
    },
    lieLevel: {
      ko: "Lv. 99 (신계)",
      en: "Lv. 99 (Divine Realm)",
      ja: "Lv. 99 (神域)",
      'zh-CN': "Lv. 99 (神界)",
      'zh-TW': "Lv. 99 (神界)",
      vi: "Lv. 99 (Cõi thần)",
      id: "Lv. 99 (Alam Ilahi)"
    },
    characteristics: {
      ko: "자기 최면 가능, 기억력 천재",
      en: "Can self-hypnotize, memory genius",
      ja: "自己催眠可能、記憶力の天才",
      'zh-CN': "可以自我催眠，记忆天才",
      'zh-TW': "可以自我催眠，記憶天才",
      vi: "Có thể tự thôi miên, thiên tài trí nhớ",
      id: "Dapat menghipnosis diri sendiri, jenius memori"
    },
    goodMatch: {
      ko: "Type 5 (능구렁이)",
      en: "Type 5 (Smooth Talker)",
      ja: "Type 5 (ずる賢い)",
      'zh-CN': "Type 5 (滑头)",
      'zh-TW': "Type 5 (滑頭)",
      vi: "Type 5 (Kẻ khéo léo)",
      id: "Type 5 (Pembual Licik)"
    },
    badMatch: {
      ko: "Type 1 (피노키오 - 재미없음)",
      en: "Type 1 (Pinocchio - Not fun)",
      ja: "Type 1 (ピノキオ - つまらない)",
      'zh-CN': "Type 1 (匹诺曹 - 没意思)",
      'zh-TW': "Type 1 (匹諾曹 - 沒意思)",
      vi: "Type 1 (Pinocchio - Không thú vị)",
      id: "Type 1 (Pinokio - Tidak Menyenangkan)"
    }
  }
];

export function calculatePhase2LieDetectorResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 1) {
    return "Type1";
  } else if (totalScore >= 2 && totalScore <= 3) {
    return "Type2";
  } else if (totalScore >= 4 && totalScore <= 6) {
    return "Type3";
  } else if (totalScore >= 7 && totalScore <= 9) {
    return "Type4";
  } else if (totalScore >= 10 && totalScore <= 11) {
    return "Type5";
  } else if (totalScore === 12) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type1";
  }
}

