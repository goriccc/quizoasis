export interface Phase2SelfEsteemQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2SelfEsteemResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  selfEsteemLevel: Record<string, string>; // "Lv. 10", "Lv. 30" 등
  characteristics: Record<string, string>; // 주요 특징
  recommendedActivity: Record<string, string>; // 추천 활동
}

export const phase2SelfEsteemQuestions: Phase2SelfEsteemQuestion[] = [
  {
    id: 1,
    question: {
      ko: "아침에 일어나 거울을 볼 때 드는 생각은?",
      en: "What do you think when you look in the mirror in the morning?",
      ja: "朝起きて鏡を見たとき、どんなことを考えますか？",
      'zh-CN': "早上起床照镜子时，你会想什么？",
      'zh-TW': "早上起床照鏡子時，你會想什麼？",
      vi: "Bạn nghĩ gì khi nhìn vào gương vào buổi sáng?",
      id: "Apa yang Anda pikirkan saat melihat cermin di pagi hari?"
    },
    options: [
      {
        text: {
          ko: "어디 고치고 싶다... 마음에 안 드는 부분부터 보인다",
          en: "I want to fix something... I see the parts I don't like first",
          ja: "どこか直したい...気に入らない部分から見える",
          'zh-CN': "想改点什么...先看到不喜欢的部分",
          'zh-TW': "想改點什麼...先看到不喜歡的部分",
          vi: "Muốn sửa gì đó... Nhìn thấy những phần không thích trước",
          id: "Saya ingin memperbaiki sesuatu... Saya melihat bagian yang tidak saya sukai terlebih dahulu"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "그냥 뭐, 나쁘지 않네. 평범하다고 생각한다",
          en: "Well, not bad. I think I'm average",
          ja: "まあ、悪くないね。平凡だと思う",
          'zh-CN': "嗯，还不错。我觉得很普通",
          'zh-TW': "嗯，還不錯。我覺得很普通",
          vi: "Ồ, không tệ. Tôi nghĩ mình bình thường",
          id: "Yah, tidak buruk. Saya pikir saya biasa-biasa saja"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "오늘 좀 괜찮은데? 기분 좋게 웃어본다",
          en: "I look pretty good today? I smile happily",
          ja: "今日はまあまあかな？気分良く笑ってみる",
          'zh-CN': "今天还不错？心情很好地笑了",
          'zh-TW': "今天還不錯？心情很好地笑了",
          vi: "Hôm nay ổn đấy? Tôi cười một cách vui vẻ",
          id: "Saya terlihat cukup baik hari ini? Saya tersenyum dengan bahagia"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "완벽해! 거울 속의 내가 너무 마음에 든다",
          en: "Perfect! I love the me in the mirror so much",
          ja: "完璧！鏡の中の自分がとても気に入っている",
          'zh-CN': "完美！我太喜欢镜子里的自己了",
          'zh-TW': "完美！我太喜歡鏡子裡的自己了",
          vi: "Hoàn hảo! Tôi rất thích bản thân trong gương",
          id: "Sempurna! Saya sangat menyukai diri saya di cermin"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "누군가 당신을 칭찬했을 때 반응은?",
      en: "How do you react when someone compliments you?",
      ja: "誰かがあなたを褒めたときの反応は？",
      'zh-CN': "有人称赞你时，你的反应是？",
      'zh-TW': "有人稱讚你時，你的反應是？",
      vi: "Bạn phản ứng thế nào khi ai đó khen bạn?",
      id: "Bagaimana reaksi Anda ketika seseorang memuji Anda?"
    },
    options: [
      {
        text: {
          ko: "\"에이 아니에요...\" 당황하며 손사래를 치거나 부정한다",
          en: "\"Oh no, not really...\" I panic and wave my hands or deny it",
          ja: "「いやいや...」慌てて手を振ったり否定したりする",
          'zh-CN': "「哎呀不是...」慌张地摆手或否认",
          'zh-TW': "「哎呀不是...」慌張地擺手或否認",
          vi: "\"Ồ không đâu...\" Tôi hoảng sợ và vẫy tay hoặc phủ nhận",
          id: "\"Oh tidak...\" Saya panik dan melambaikan tangan atau menyangkal"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"운이 좋았어요.\" 겸손하게 돌려서 말한다",
          en: "\"I was just lucky.\" I deflect it humbly",
          ja: "「運が良かっただけです。」謙虚に言い換える",
          'zh-CN': "「只是运气好。」谦虚地转移话题",
          'zh-TW': "「只是運氣好。」謙虛地轉移話題",
          vi: "\"Chỉ là may mắn thôi.\" Tôi khiêm tốn chuyển hướng",
          id: "\"Saya hanya beruntung.\" Saya mengalihkan dengan rendah hati"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"감사합니다!\" 기분 좋게 칭찬을 받아들인다",
          en: "\"Thank you!\" I accept the compliment happily",
          ja: "「ありがとうございます！」気分良く褒め言葉を受け入れる",
          'zh-CN': "「谢谢！」愉快地接受称赞",
          'zh-TW': "「謝謝！」愉快地接受稱讚",
          vi: "\"Cảm ơn!\" Tôi vui vẻ nhận lời khen",
          id: "\"Terima kasih!\" Saya menerima pujian dengan senang hati"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"제가 좀 잘하죠?\" 너스레를 떨며 즐긴다",
          en: "\"I'm pretty good, right?\" I enjoy it while being playful",
          ja: "「私、結構うまいでしょ？」冗談を言いながら楽しむ",
          'zh-CN': "「我做得不错吧？」开玩笑地享受",
          'zh-TW': "「我做得不錯吧？」開玩笑地享受",
          vi: "\"Tôi khá giỏi đúng không?\" Tôi thích thú và đùa cợt",
          id: "\"Saya cukup baik, kan?\" Saya menikmatinya sambil bercanda"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "작은 실수를 저질렀을 때 당신의 속마음은?",
      en: "What's your inner thought when you make a small mistake?",
      ja: "小さな失敗をしたとき、あなたの心の中は？",
      'zh-CN': "犯小错误时，你内心的想法是？",
      'zh-TW': "犯小錯誤時，你內心的想法是？",
      vi: "Bạn nghĩ gì trong lòng khi mắc lỗi nhỏ?",
      id: "Apa yang ada di pikiran Anda saat membuat kesalahan kecil?"
    },
    options: [
      {
        text: {
          ko: "\"난 왜 이럴까, 진짜 멍청해.\" 심하게 자책한다",
          en: "\"Why am I like this? I'm so stupid.\" I severely blame myself",
          ja: "「なんでこんなことするんだ、本当にバカだ。」激しく自分を責める",
          'zh-CN': "「我为什么会这样，真蠢。」严厉地自责",
          'zh-TW': "「我為什麼會這樣，真蠢。」嚴厲地自責",
          vi: "\"Sao mình lại như vậy, thật ngu ngốc.\" Tôi tự trách mình nghiêm khắc",
          id: "\"Kenapa saya seperti ini? Saya benar-benar bodoh.\" Saya menyalahkan diri sendiri dengan keras"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"남들이 봤을까? 창피해.\" 타인의 시선을 먼저 걱정한다",
          en: "\"Did others see? This is embarrassing.\" I worry about others' gaze first",
          ja: "「他の人に見られたかな？恥ずかしい。」他人の視線をまず心配する",
          'zh-CN': "「别人看到了吗？好丢脸。」先担心别人的眼光",
          'zh-TW': "「別人看到了嗎？好丟臉。」先擔心別人的眼光",
          vi: "\"Người khác có thấy không? Xấu hổ quá.\" Tôi lo lắng về ánh mắt người khác trước",
          id: "\"Apakah orang lain melihat? Ini memalukan.\" Saya khawatir tentang pandangan orang lain terlebih dahulu"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"그럴 수도 있지. 수습하자.\" 훌훌 털고 해결책을 찾는다",
          en: "\"It happens. Let's fix it.\" I brush it off and find a solution",
          ja: "「そういうこともあるよね。対処しよう。」さっと払って解決策を探す",
          'zh-CN': "「这种事也会发生。解决它吧。」轻松放下并寻找解决方案",
          'zh-TW': "「這種事也會發生。解決它吧。」輕鬆放下並尋找解決方案",
          vi: "\"Chuyện này cũng có thể xảy ra. Hãy xử lý thôi.\" Tôi bỏ qua và tìm giải pháp",
          id: "\"Itu bisa terjadi. Mari kita perbaiki.\" Saya mengabaikannya dan mencari solusi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"이것도 경험이지!\" 실수에서 배울 점을 찾는다",
          en: "\"This is also an experience!\" I find something to learn from the mistake",
          ja: "「これも経験だ！」失敗から学ぶ点を見つける",
          'zh-CN': "「这也是经验！」从错误中寻找学习点",
          'zh-TW': "「這也是經驗！」從錯誤中尋找學習點",
          vi: "\"Đây cũng là kinh nghiệm!\" Tôi tìm điều gì đó để học từ sai lầm",
          id: "\"Ini juga pengalaman!\" Saya menemukan sesuatu untuk dipelajari dari kesalahan"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "인스타그램(SNS)에서 잘나가는 친구들을 볼 때?",
      en: "When you see successful friends on Instagram (SNS)?",
      ja: "インスタグラム（SNS）で成功している友達を見るとき？",
      'zh-CN': "在Instagram（SNS）上看到成功的朋友时？",
      'zh-TW': "在Instagram（SNS）上看到成功的朋友時？",
      vi: "Khi bạn thấy những người bạn thành công trên Instagram (SNS)?",
      id: "Ketika Anda melihat teman-teman sukses di Instagram (SNS)?"
    },
    options: [
      {
        text: {
          ko: "상대적 박탈감을 느끼며 내 처지를 비관한다",
          en: "I feel relative deprivation and pessimize about my situation",
          ja: "相対的剥奪感を感じて自分の状況を悲観する",
          'zh-CN': "感到相对剥夺感，对自己的处境感到悲观",
          'zh-TW': "感到相對剝奪感，對自己的處境感到悲觀",
          vi: "Tôi cảm thấy bị tước đoạt tương đối và bi quan về tình huống của mình",
          id: "Saya merasa relatif terdeprivasi dan pesimis tentang situasi saya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "부럽긴 하지만 \"쟤는 쟤, 나는 나\"라고 생각한다",
          en: "I'm envious but think \"They are them, I am me\"",
          ja: "うらやましいけど「あの人はあの人、私は私」と思う",
          'zh-CN': "虽然羡慕，但认为「他们是他们，我是我」",
          'zh-TW': "雖然羨慕，但認為「他們是他們，我是我」",
          vi: "Tôi ghen tị nhưng nghĩ \"Họ là họ, tôi là tôi\"",
          id: "Saya iri tetapi berpikir \"Mereka adalah mereka, saya adalah saya\""
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"우와 예쁘다/멋지다\" 순수하게 감상하고 좋아요를 누른다",
          en: "\"Wow, so pretty/cool\" I purely appreciate and like it",
          ja: "「わあ、きれい/かっこいい」純粋に鑑賞していいねを押す",
          'zh-CN': "「哇，好漂亮/好酷」纯粹地欣赏并点赞",
          'zh-TW': "「哇，好漂亮/好酷」純粹地欣賞並點讚",
          vi: "\"Ồ, đẹp/ngầu quá\" Tôi thưởng thức một cách thuần túy và nhấn like",
          id: "\"Wah, cantik/keren\" Saya menghargai dengan murni dan menyukainya"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"나도 곧 저렇게 될 건데 뭐.\" 전혀 기죽지 않는다",
          en: "\"I'll be like that soon anyway.\" I'm not intimidated at all",
          ja: "「私もすぐああなるから。」全く気後れしない",
          'zh-CN': "「我很快也会那样的。」完全不气馁",
          'zh-TW': "「我很快也會那樣的。」完全不氣餒",
          vi: "\"Tôi cũng sẽ như vậy sớm thôi.\" Tôi hoàn toàn không nản lòng",
          id: "\"Saya juga akan seperti itu segera.\" Saya sama sekali tidak terintimidasi"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "여러 사람 앞에서 발표나 의견을 말해야 할 때?",
      en: "When you have to give a presentation or opinion in front of many people?",
      ja: "多くの人の前で発表や意見を言わなければならないとき？",
      'zh-CN': "必须在很多人面前发表或表达意见时？",
      'zh-TW': "必須在很多人面前發表或表達意見時？",
      vi: "Khi bạn phải thuyết trình hoặc nói ý kiến trước nhiều người?",
      id: "Ketika Anda harus memberikan presentasi atau pendapat di depan banyak orang?"
    },
    options: [
      {
        text: {
          ko: "목소리가 떨리고 머릿속이 하얘진다. 도망치고 싶다",
          en: "My voice trembles and my mind goes blank. I want to run away",
          ja: "声が震えて頭が真っ白になる。逃げ出したい",
          'zh-CN': "声音颤抖，大脑一片空白。想逃跑",
          'zh-TW': "聲音顫抖，大腦一片空白。想逃跑",
          vi: "Giọng nói run rẩy và đầu óc trống rỗng. Tôi muốn chạy trốn",
          id: "Suara saya gemetar dan pikiran saya kosong. Saya ingin melarikan diri"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "긴장되지만 준비한 내용은 무사히 마친다",
          en: "I'm nervous but I finish what I prepared safely",
          ja: "緊張するが準備した内容は無事に終える",
          'zh-CN': "虽然紧张，但能安全完成准备的内容",
          'zh-TW': "雖然緊張，但能安全完成準備的內容",
          vi: "Tôi lo lắng nhưng hoàn thành nội dung đã chuẩn bị một cách an toàn",
          id: "Saya gugup tetapi saya menyelesaikan apa yang telah saya persiapkan dengan aman"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "사람들의 눈을 맞추며 차분하게 내 생각을 전달한다",
          en: "I make eye contact with people and calmly convey my thoughts",
          ja: "人々の目を見ながら冷静に自分の考えを伝える",
          'zh-CN': "看着人们的眼睛，冷静地传达自己的想法",
          'zh-TW': "看著人們的眼睛，冷靜地傳達自己的想法",
          vi: "Tôi nhìn vào mắt mọi người và truyền đạt suy nghĩ một cách bình tĩnh",
          id: "Saya melakukan kontak mata dengan orang-orang dan dengan tenang menyampaikan pemikiran saya"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "무대 체질이다. 사람들의 주목을 받는 것이 짜릿하다",
          en: "I'm a natural on stage. Getting people's attention is thrilling",
          ja: "舞台体質だ。人々の注目を集めることがスリリング",
          'zh-CN': "天生适合舞台。获得人们的关注很刺激",
          'zh-TW': "天生適合舞台。獲得人們的關注很刺激",
          vi: "Tôi là người của sân khấu. Nhận được sự chú ý của mọi người thật thú vị",
          id: "Saya adalah orang panggung alami. Mendapat perhatian orang sangat menyenangkan"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "거절하기 힘든 부탁을 받았을 때?",
      en: "When you receive a request that's hard to refuse?",
      ja: "断りにくい頼みごとを受けたとき？",
      'zh-CN': "收到难以拒绝的请求时？",
      'zh-TW': "收到難以拒絕的請求時？",
      vi: "Khi bạn nhận được yêu cầu khó từ chối?",
      id: "Ketika Anda menerima permintaan yang sulit ditolak?"
    },
    options: [
      {
        text: {
          ko: "싫다는 말을 못 해서 억지로 들어주고 끙끙 앓는다",
          en: "I can't say no, so I reluctantly agree and suffer",
          ja: "嫌だと言えずに無理に聞いて、うんうんと苦しむ",
          'zh-CN': "说不出拒绝，勉强答应并痛苦",
          'zh-TW': "說不出拒絕，勉強答應並痛苦",
          vi: "Tôi không thể nói không nên miễn cưỡng đồng ý và đau khổ",
          id: "Saya tidak bisa mengatakan tidak, jadi saya terpaksa setuju dan menderita"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "빙빙 돌려서 핑계를 대며 어렵게 거절한다",
          en: "I beat around the bush and make excuses to refuse with difficulty",
          ja: "遠回しに言って言い訳をしながら難しく断る",
          'zh-CN': "拐弯抹角地找借口，艰难地拒绝",
          'zh-TW': "拐彎抹角地找藉口，艱難地拒絕",
          vi: "Tôi vòng vo và đưa ra lý do để từ chối một cách khó khăn",
          id: "Saya berputar-putar dan membuat alasan untuk menolak dengan susah payah"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"미안하지만 그건 좀 어려워.\" 정중하지만 단호하게 거절한다",
          en: "\"Sorry, but that's a bit difficult.\" I refuse politely but firmly",
          ja: "「申し訳ないけどそれはちょっと難しい。」丁寧だが断固として断る",
          'zh-CN': "「抱歉，那有点困难。」礼貌但坚定地拒绝",
          'zh-TW': "「抱歉，那有點困難。」禮貌但堅定地拒絕",
          vi: "\"Xin lỗi nhưng điều đó hơi khó.\" Tôi từ chối một cách lịch sự nhưng kiên quyết",
          id: "\"Maaf, tapi itu agak sulit.\" Saya menolak dengan sopan tetapi tegas"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "내 상황이 안 되면 칼같이 거절한다",
          en: "If it doesn't work for my situation, I refuse immediately",
          ja: "自分の状況が合わなければ即座に断る",
          'zh-CN': "如果不符合我的情况，立即拒绝",
          'zh-TW': "如果不符合我的情況，立即拒絕",
          vi: "Nếu không phù hợp với tình huống của tôi, tôi từ chối ngay lập tức",
          id: "Jika tidak sesuai dengan situasi saya, saya langsung menolak"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "새로운 도전을 앞두고 드는 생각은?",
      en: "What do you think when facing a new challenge?",
      ja: "新しい挑戦を前にしてどんなことを考えますか？",
      'zh-CN': "面对新挑战时，你会想什么？",
      'zh-TW': "面對新挑戰時，你會想什麼？",
      vi: "Bạn nghĩ gì khi đối mặt với thử thách mới?",
      id: "Apa yang Anda pikirkan saat menghadapi tantangan baru?"
    },
    options: [
      {
        text: {
          ko: "\"내가 할 수 있을까? 실패하면 어쩌지?\" 걱정부터 앞선다",
          en: "\"Can I do it? What if I fail?\" Worry comes first",
          ja: "「私にできるかな？失敗したらどうしよう？」心配が先に立つ",
          'zh-CN': "「我能做到吗？失败了怎么办？」担心先来",
          'zh-TW': "「我能做到嗎？失敗了怎麼辦？」擔心先來",
          vi: "\"Mình có làm được không? Nếu thất bại thì sao?\" Lo lắng đến trước",
          id: "\"Bisakah saya melakukannya? Bagaimana jika saya gagal?\" Kekhawatiran datang terlebih dahulu"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "철저하게 준비하면 잘 될 거라고 스스로를 다독인다",
          en: "I comfort myself that if I prepare thoroughly, it will go well",
          ja: "徹底的に準備すればうまくいくと自分を慰める",
          'zh-CN': "安慰自己，如果彻底准备，就会顺利",
          'zh-TW': "安慰自己，如果徹底準備，就會順利",
          vi: "Tôi tự an ủi rằng nếu chuẩn bị kỹ lưỡng thì sẽ ổn",
          id: "Saya menghibur diri bahwa jika saya mempersiapkan dengan menyeluruh, itu akan berjalan dengan baik"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"재밌겠다!\" 설레는 마음으로 일단 시작한다",
          en: "\"This will be fun!\" I start with an excited heart",
          ja: "「楽しそう！」ワクワクする気持ちでとりあえず始める",
          'zh-CN': "「会很有趣！」怀着兴奋的心情开始",
          'zh-TW': "「會很有趣！」懷著興奮的心情開始",
          vi: "\"Sẽ thú vị đây!\" Tôi bắt đầu với tâm trạng phấn khích",
          id: "\"Ini akan menyenangkan!\" Saya mulai dengan hati yang bersemangat"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"무조건 성공이지.\" 근거 없는 자신감이 넘친다",
          en: "\"I'll definitely succeed.\" I'm overflowing with unfounded confidence",
          ja: "「絶対成功する。」根拠のない自信が溢れる",
          'zh-CN': "「一定会成功。」充满毫无根据的自信",
          'zh-TW': "「一定會成功。」充滿毫無根據的自信",
          vi: "\"Chắc chắn sẽ thành công.\" Tôi tràn đầy tự tin không có căn cứ",
          id: "\"Saya pasti akan berhasil.\" Saya meluap dengan kepercayaan diri yang tidak berdasar"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "친구와 다투고 난 뒤 당신은?",
      en: "After fighting with a friend, what are you like?",
      ja: "友達と喧嘩した後、あなたは？",
      'zh-CN': "和朋友吵架后，你是？",
      'zh-TW': "和朋友吵架後，你是？",
      vi: "Sau khi cãi nhau với bạn, bạn như thế nào?",
      id: "Setelah bertengkar dengan teman, bagaimana Anda?"
    },
    options: [
      {
        text: {
          ko: "\"내가 뭘 잘못했나?\" 모든 원인을 나에게서 찾는다",
          en: "\"What did I do wrong?\" I find all the causes in myself",
          ja: "「私が何か間違えた？」すべての原因を自分の中に見つける",
          'zh-CN': "「我做错了什么？」从自己身上找所有原因",
          'zh-TW': "「我做錯了什麼？」從自己身上找所有原因",
          vi: "\"Mình đã làm gì sai?\" Tôi tìm tất cả nguyên nhân từ bản thân",
          id: "\"Apa yang saya lakukan salah?\" Saya menemukan semua penyebab dalam diri saya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "억울한 점이 있어도 관계가 깨질까 봐 먼저 사과한다",
          en: "Even if I feel wronged, I apologize first for fear the relationship will break",
          ja: "理不尽な点があっても関係が壊れるのを恐れて先に謝る",
          'zh-CN': "即使感到委屈，也因担心关系破裂而先道歉",
          'zh-TW': "即使感到委屈，也因擔心關係破裂而先道歉",
          vi: "Dù cảm thấy oan ức, tôi xin lỗi trước vì sợ mối quan hệ sẽ đổ vỡ",
          id: "Bahkan jika saya merasa tidak adil, saya meminta maaf terlebih dahulu karena takut hubungan akan rusak"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "서로의 잘못을 따져보고, 내 잘못은 인정하고 사과한다",
          en: "I examine each other's mistakes and acknowledge and apologize for my own",
          ja: "お互いの間違いを調べて、自分の間違いは認めて謝る",
          'zh-CN': "检查彼此的过错，承认并为自己错误道歉",
          'zh-TW': "檢查彼此的過錯，承認並為自己錯誤道歉",
          vi: "Tôi xem xét lỗi của cả hai và thừa nhận, xin lỗi về lỗi của mình",
          id: "Saya memeriksa kesalahan masing-masing dan mengakui serta meminta maaf atas kesalahan saya sendiri"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "내가 잘못한 게 없으면 절대 먼저 연락하지 않는다",
          en: "If I didn't do anything wrong, I never contact first",
          ja: "自分が間違っていなければ絶対に先に連絡しない",
          'zh-CN': "如果我没有错，绝不先联系",
          'zh-TW': "如果我沒有錯，絕不先聯繫",
          vi: "Nếu tôi không làm gì sai, tôi không bao giờ liên lạc trước",
          id: "Jika saya tidak melakukan kesalahan, saya tidak pernah menghubungi terlebih dahulu"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "혼자 밥을 먹거나 혼자 시간을 보내야 할 때?",
      en: "When you have to eat alone or spend time alone?",
      ja: "一人でご飯を食べたり一人で時間を過ごさなければならないとき？",
      'zh-CN': "必须独自吃饭或独自度过时间时？",
      'zh-TW': "必須獨自吃飯或獨自度過時間時？",
      vi: "Bạn phải ăn một mình hoặc dành thời gian một mình?",
      id: "Ketika Anda harus makan sendirian atau menghabiskan waktu sendirian?"
    },
    options: [
      {
        text: {
          ko: "남들이 쳐다보는 것 같아서 위축되고 외롭다",
          en: "I feel shrunken and lonely because I think others are looking at me",
          ja: "他の人が見ているような気がして萎縮して孤独になる",
          'zh-CN': "感觉别人在看，变得畏缩和孤独",
          'zh-TW': "感覺別人在看，變得畏縮和孤獨",
          vi: "Tôi cảm thấy co rút và cô đơn vì nghĩ người khác đang nhìn mình",
          id: "Saya merasa menyusut dan kesepian karena saya pikir orang lain sedang melihat saya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "스마트폰을 보며 어색함을 달랜다",
          en: "I soothe the awkwardness by looking at my smartphone",
          ja: "スマートフォンを見て気まずさを和らげる",
          'zh-CN': "看手机来缓解尴尬",
          'zh-TW': "看手機來緩解尷尬",
          vi: "Tôi xoa dịu sự khó xử bằng cách xem điện thoại",
          id: "Saya menenangkan rasa canggung dengan melihat smartphone saya"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "온전히 나에게 집중할 수 있어서 여유롭고 좋다",
          en: "I can focus entirely on myself, so it's relaxed and nice",
          ja: "完全に自分に集中できるので余裕があって良い",
          'zh-CN': "可以完全专注于自己，所以轻松愉快",
          'zh-TW': "可以完全專注於自己，所以輕鬆愉快",
          vi: "Tôi có thể hoàn toàn tập trung vào bản thân nên thư giãn và tốt",
          id: "Saya bisa fokus sepenuhnya pada diri sendiri, jadi santai dan menyenangkan"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "혼자만의 시간을 최고로 즐긴다",
          en: "I enjoy my alone time the most",
          ja: "一人の時間を最高に楽しむ",
          'zh-CN': "最享受独处的时间",
          'zh-TW': "最享受獨處的時間",
          vi: "Tôi tận hưởng thời gian một mình nhất",
          id: "Saya menikmati waktu sendirian saya yang paling baik"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신이 생각하는 당신의 '가치'는?",
      en: "What do you think your 'value' is?",
      ja: "あなたが考えるあなたの「価値」は？",
      'zh-CN': "你认为自己的'价值'是什么？",
      'zh-TW': "你認為自己的「價值」是什麼？",
      vi: "Bạn nghĩ 'giá trị' của mình là gì?",
      id: "Apa yang Anda pikirkan tentang 'nilai' Anda?"
    },
    options: [
      {
        text: {
          ko: "남들에게 인정받아야 증명되는 것",
          en: "Something that needs to be proven by others' recognition",
          ja: "他の人に認められなければ証明されないもの",
          'zh-CN': "需要通过别人的认可来证明的东西",
          'zh-TW': "需要通過別人的認可來證明的東西",
          vi: "Điều gì đó cần được chứng minh bằng sự công nhận của người khác",
          id: "Sesuatu yang perlu dibuktikan dengan pengakuan orang lain"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "내가 가진 능력이나 성과에 따라 달라지는 것",
          en: "Something that varies depending on my abilities or achievements",
          ja: "自分が持つ能力や成果によって変わるもの",
          'zh-CN': "根据我的能力或成就而变化的东西",
          'zh-TW': "根據我的能力或成就而變化的東西",
          vi: "Điều gì đó thay đổi tùy theo khả năng hoặc thành tích của tôi",
          id: "Sesuatu yang bervariasi tergantung pada kemampuan atau pencapaian saya"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "있는 그대로의 나 자신만으로 충분한 것",
          en: "Something that's enough just as I am",
          ja: "ありのままの自分だけで十分なもの",
          'zh-CN': "作为真实的自己就足够的东西",
          'zh-TW': "作為真實的自己就足夠的東西",
          vi: "Điều gì đó đủ chỉ với bản thân tôi như vậy",
          id: "Sesuatu yang cukup hanya dengan diri saya apa adanya"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "나는 우주에서 하나뿐인 소중한 존재인 것",
          en: "I am a precious being, one of a kind in the universe",
          ja: "私は宇宙で唯一無二の大切な存在であること",
          'zh-CN': "我是宇宙中独一无二的珍贵存在",
          'zh-TW': "我是宇宙中獨一無二的珍貴存在",
          vi: "Tôi là một sinh thể quý giá, duy nhất trong vũ trụ",
          id: "Saya adalah makhluk berharga, satu-satunya di alam semesta"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "타인의 비판이나 지적을 들었을 때?",
      en: "When you hear others' criticism or pointing out?",
      ja: "他人の批判や指摘を聞いたとき？",
      'zh-CN': "听到别人的批评或指正时？",
      'zh-TW': "聽到別人的批評或指正時？",
      vi: "Khi bạn nghe lời chỉ trích hoặc chỉ ra của người khác?",
      id: "Ketika Anda mendengar kritik atau teguran orang lain?"
    },
    options: [
      {
        text: {
          ko: "하루 종일 그 말이 맴돌고 우울해진다",
          en: "That comment haunts me all day and I become depressed",
          ja: "一日中その言葉が頭を巡って憂鬱になる",
          'zh-CN': "那句话整天在脑海中回响，变得抑郁",
          'zh-TW': "那句話整天在腦海中迴響，變得抑鬱",
          vi: "Lời nói đó ám ảnh tôi cả ngày và tôi trở nên chán nản",
          id: "Komentar itu menghantui saya sepanjang hari dan saya menjadi depresi"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "기분은 나쁘지만 맞는 말이면 고치려고 노력한다",
          en: "I feel bad but if it's right, I try to fix it",
          ja: "気分は悪いが正しい言葉なら直そうと努力する",
          'zh-CN': "心情不好，但如果说得对，会努力改正",
          'zh-TW': "心情不好，但如果說得對，會努力改正",
          vi: "Tôi cảm thấy tồi tệ nhưng nếu đúng thì tôi cố gắng sửa",
          id: "Saya merasa tidak enak tetapi jika benar, saya berusaha memperbaikinya"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"그런 의견도 있구나.\" 감정적으로 받아들이지 않고 참고만 한다",
          en: "\"There's such an opinion.\" I don't take it emotionally, just note it",
          ja: "「そんな意見もあるのか。」感情的にならずに参考にするだけ",
          'zh-CN': "「也有这样的意见。」不感情用事，只是参考",
          'zh-TW': "「也有這樣的意見。」不感情用事，只是參考",
          vi: "\"Cũng có ý kiến như vậy.\" Tôi không tiếp nhận một cách cảm tính, chỉ ghi nhận",
          id: "\"Ada pendapat seperti itu.\" Saya tidak menerimanya secara emosional, hanya mencatatnya"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"어쩌라고?\" 나를 모르는 사람의 말은 무시한다",
          en: "\"So what?\" I ignore words from people who don't know me",
          ja: "「だから何？」私を知らない人の言葉は無視する",
          'zh-CN': "「那又怎样？」无视不了解我的人的话",
          'zh-TW': "「那又怎樣？」無視不瞭解我的人的話",
          vi: "\"Thì sao?\" Tôi bỏ qua lời nói của những người không biết tôi",
          id: "\"Terus kenapa?\" Saya mengabaikan kata-kata dari orang yang tidak mengenal saya"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "다시 태어난다면, 나로 태어나고 싶은가요?",
      en: "If you were born again, would you want to be born as yourself?",
      ja: "生まれ変わるなら、自分として生まれたいですか？",
      'zh-CN': "如果重新投胎，你想作为自己出生吗？",
      'zh-TW': "如果重新投胎，你想作為自己出生嗎？",
      vi: "Nếu được tái sinh, bạn có muốn được sinh ra là chính mình không?",
      id: "Jika Anda terlahir kembali, apakah Anda ingin terlahir sebagai diri sendiri?"
    },
    options: [
      {
        text: {
          ko: "절대 싫다. 차라리 다른 사람으로 태어나고 싶다",
          en: "Absolutely not. I'd rather be born as someone else",
          ja: "絶対に嫌だ。むしろ他の人として生まれたい",
          'zh-CN': "绝对不想。宁愿作为别人出生",
          'zh-TW': "絕對不想。寧願作為別人出生",
          vi: "Tuyệt đối không. Tôi muốn được sinh ra là người khác",
          id: "Sama sekali tidak. Saya lebih suka terlahir sebagai orang lain"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "나쁘진 않지만, 외모나 능력은 좀 업그레이드하고 싶다",
          en: "Not bad, but I'd like to upgrade my appearance or abilities a bit",
          ja: "悪くはないが、外見や能力は少しアップグレードしたい",
          'zh-CN': "不坏，但想稍微升级一下外貌或能力",
          'zh-TW': "不壞，但想稍微升級一下外貌或能力",
          vi: "Không tệ, nhưng tôi muốn nâng cấp ngoại hình hoặc khả năng một chút",
          id: "Tidak buruk, tetapi saya ingin sedikit meningkatkan penampilan atau kemampuan saya"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "지금의 나도 꽤 괜찮다. 다시 태어나도 좋다",
          en: "The current me is quite good. I'd be fine being born again",
          ja: "今の私も結構いい。また生まれてもいい",
          'zh-CN': "现在的我也很不错。重新投胎也可以",
          'zh-TW': "現在的我也很不錯。重新投胎也可以",
          vi: "Bản thân hiện tại của tôi khá ổn. Tái sinh cũng được",
          id: "Diri saya saat ini cukup baik. Saya tidak masalah terlahir lagi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "무조건 나! 나로 태어나는 게 제일 행복하다",
          en: "Definitely me! Being born as myself is the happiest",
          ja: "絶対に私！私として生まれることが一番幸せ",
          'zh-CN': "绝对是我！作为自己出生最幸福",
          'zh-TW': "絕對是我！作為自己出生最幸福",
          vi: "Chắc chắn là tôi! Được sinh ra là chính mình là hạnh phúc nhất",
          id: "Pasti saya! Terlahir sebagai diri sendiri adalah yang paling bahagia"
        },
        score: 3 // D
      }
    ]
  }
];

export const phase2SelfEsteemResults: Phase2SelfEsteemResult[] = [
  {
    type: "Type1",
    emoji: "🕯️",
    title: {
      ko: "바람 앞의 촛불, 위태로운 유리 멘탈",
      en: "Candle in the Wind, Fragile Glass Mentality",
      ja: "風前のろうそく、危ういガラスのメンタル",
      'zh-CN': "风前的蜡烛，脆弱的玻璃心态",
      'zh-TW': "風前的蠟燭，脆弱的玻璃心態",
      vi: "Ngọn nến trước gió, Tinh thần thủy tinh mong manh",
      id: "Lilin di Angin, Mentalitas Kaca Rapuh"
    },
    shortDescription: {
      ko: "\"누가 툭 치면 깨질 것 같아요...\"",
      en: "\"It feels like I'll break if someone touches me...\"",
      ja: "「誰かが触ったら壊れそう...」",
      'zh-CN': "「感觉一碰就会碎...」",
      'zh-TW': "「感覺一碰就會碎...」",
      vi: "\"Cảm giác như sẽ vỡ nếu ai đó chạm vào...\"",
      id: "\"Rasanya akan hancur jika seseorang menyentuh...\""
    },
    description: {
      ko: "당신은 현재 자존감이 많이 낮아져 있는 상태입니다. 타인의 시선과 평가에 지나치게 예민하며, 자신을 사랑하는 법을 잊어버린 듯합니다. 스스로를 깎아내리는 습관을 멈추고, 아주 작은 것부터 나를 칭찬해 주는 연습이 필요합니다. 당신은 생각보다 훨씬 괜찮은 사람입니다.",
      en: "You currently have very low self-esteem. You're overly sensitive to others' gazes and evaluations, and seem to have forgotten how to love yourself. You need to stop the habit of putting yourself down and practice praising yourself, even for the smallest things. You're a much better person than you think.",
      ja: "あなたは現在、自尊心が非常に低い状態です。他人の視線や評価に過敏で、自分を愛する方法を忘れてしまったようです。自分を責める習慣をやめて、とても小さなことから自分を褒める練習が必要です。あなたは思っているよりもずっと良い人です。",
      'zh-CN': "你目前自尊心很低。对他人的眼光和评价过于敏感，似乎忘记了如何爱自己。需要停止自我贬低的习惯，练习从小事开始赞美自己。你比想象中要好得多。",
      'zh-TW': "你目前自尊心很低。對他人的眼光和評價過於敏感，似乎忘記了如何愛自己。需要停止自我貶低的習慣，練習從小事開始讚美自己。你比想像中要好得多。",
      vi: "Bạn hiện có lòng tự trọng rất thấp. Bạn quá nhạy cảm với ánh mắt và đánh giá của người khác, và dường như đã quên cách yêu bản thân. Bạn cần dừng thói quen tự hạ thấp mình và luyện tập khen ngợi bản thân, ngay cả những điều nhỏ nhất. Bạn tốt hơn nhiều so với bạn nghĩ.",
      id: "Anda saat ini memiliki harga diri yang sangat rendah. Anda terlalu sensitif terhadap pandangan dan evaluasi orang lain, dan sepertinya telah melupakan cara mencintai diri sendiri. Anda perlu menghentikan kebiasaan merendahkan diri dan berlatih memuji diri sendiri, bahkan untuk hal-hal terkecil. Anda adalah orang yang jauh lebih baik daripada yang Anda pikirkan."
    },
    selfEsteemLevel: {
      ko: "Lv. 10 (돌봄 필요)",
      en: "Lv. 10 (Needs Care)",
      ja: "Lv. 10 (ケアが必要)",
      'zh-CN': "Lv. 10 (需要关怀)",
      'zh-TW': "Lv. 10 (需要關懷)",
      vi: "Lv. 10 (Cần được chăm sóc)",
      id: "Lv. 10 (Perlu Perawatan)"
    },
    characteristics: {
      ko: "잦은 자책, 거절 못 함, 비교 습관",
      en: "Frequent self-blame, Can't refuse, Comparison habit",
      ja: "頻繁な自責、断れない、比較の習慣",
      'zh-CN': "频繁自责，无法拒绝，比较习惯",
      'zh-TW': "頻繁自責，無法拒絕，比較習慣",
      vi: "Tự trách thường xuyên, Không thể từ chối, Thói quen so sánh",
      id: "Sering menyalahkan diri sendiri, Tidak bisa menolak, Kebiasaan membandingkan"
    },
    recommendedActivity: {
      ko: "감사 일기 쓰기, 나에게 선물하기",
      en: "Writing gratitude journal, Giving myself gifts",
      ja: "感謝日記を書く、自分にプレゼントする",
      'zh-CN': "写感恩日记，给自己送礼物",
      'zh-TW': "寫感恩日記，給自己送禮物",
      vi: "Viết nhật ký biết ơn, Tự tặng quà cho mình",
      id: "Menulis jurnal rasa syukur, Memberi hadiah pada diri sendiri"
    }
  },
  {
    type: "Type2",
    emoji: "🌾",
    title: {
      ko: "흔들리는 갈대, 기복이 심한 상태",
      en: "Swaying Reed, Highly Volatile State",
      ja: "揺れる葦、起伏の激しい状態",
      'zh-CN': "摇摆的芦苇，波动剧烈的状态",
      'zh-TW': "搖擺的蘆葦，波動劇烈的狀態",
      vi: "Cây sậy đung đưa, Trạng thái dao động mạnh",
      id: "Reed Berayun, Keadaan Sangat Tidak Stabil"
    },
    shortDescription: {
      ko: "\"오늘은 괜찮은데, 내일은 우울해요.\"",
      en: "\"I'm okay today, but I'll be depressed tomorrow.\"",
      ja: "「今日は大丈夫だけど、明日は憂鬱です。」",
      'zh-CN': "「今天还好，但明天会抑郁。」",
      'zh-TW': "「今天還好，但明天會抑鬱。」",
      vi: "\"Hôm nay ổn, nhưng ngày mai sẽ buồn.\"",
      id: "\"Hari ini baik-baik saja, tapi besok akan depresi.\""
    },
    description: {
      ko: "당신은 자존감이 외부 상황에 따라 롤러코스터를 탑니다. 칭찬을 들으면 올라갔다가, 지적을 받으면 바닥을 칩니다. 남들에게 보여지는 모습을 중요하게 생각하지만, 속으로는 불안함을 느끼고 있습니다. 내면의 중심을 잡는 것이 중요합니다.",
      en: "Your self-esteem rides a roller coaster depending on external situations. It goes up when you hear compliments, but hits rock bottom when you receive criticism. You think the image you show to others is important, but inside you feel anxious. It's important to find your inner center.",
      ja: "あなたの自尊心は外部の状況に応じてジェットコースターに乗ります。褒め言葉を聞くと上がり、指摘を受けると底を打ちます。他人に見せる姿を重要だと考えていますが、内面では不安を感じています。内面の中心を掴むことが重要です。",
      'zh-CN': "你的自尊心根据外部情况像过山车一样起伏。听到赞美就上升，受到批评就跌到谷底。你重视在别人面前的形象，但内心感到不安。重要的是找到内心的中心。",
      'zh-TW': "你的自尊心根據外部情況像過山車一樣起伏。聽到讚美就上升，受到批評就跌到谷底。你重視在別人面前的形象，但內心感到不安。重要的是找到內心的中心。",
      vi: "Lòng tự trọng của bạn như tàu lượn siêu tốc tùy theo tình huống bên ngoài. Nó tăng lên khi nghe lời khen, nhưng chạm đáy khi nhận chỉ trích. Bạn nghĩ hình ảnh bạn thể hiện với người khác là quan trọng, nhưng bên trong bạn cảm thấy lo lắng. Điều quan trọng là tìm được trung tâm bên trong.",
      id: "Harga diri Anda naik turun seperti roller coaster tergantung pada situasi eksternal. Naik ketika mendengar pujian, tetapi jatuh ke dasar ketika menerima kritik. Anda menganggap citra yang Anda tunjukkan kepada orang lain penting, tetapi di dalam Anda merasa cemas. Penting untuk menemukan pusat batin Anda."
    },
    selfEsteemLevel: {
      ko: "Lv. 30 (불안정)",
      en: "Lv. 30 (Unstable)",
      ja: "Lv. 30 (不安定)",
      'zh-CN': "Lv. 30 (不稳定)",
      'zh-TW': "Lv. 30 (不穩定)",
      vi: "Lv. 30 (Không ổn định)",
      id: "Lv. 30 (Tidak Stabil)"
    },
    characteristics: {
      ko: "타인 의식, 인정 욕구 강함",
      en: "Others' awareness, Strong need for recognition",
      ja: "他人への意識、承認欲求が強い",
      'zh-CN': "在意他人，强烈需要认可",
      'zh-TW': "在意他人，強烈需要認可",
      vi: "Ý thức về người khác, Nhu cầu được công nhận mạnh mẽ",
      id: "Kesadaran orang lain, Kebutuhan pengakuan yang kuat"
    },
    recommendedActivity: {
      ko: "SNS 줄이기, 명상하기",
      en: "Reducing SNS, Meditating",
      ja: "SNSを減らす、瞑想する",
      'zh-CN': "减少SNS，冥想",
      'zh-TW': "減少SNS，冥想",
      vi: "Giảm SNS, Thiền định",
      id: "Mengurangi SNS, Bermeditasi"
    }
  },
  {
    type: "Type3",
    emoji: "🌳",
    title: {
      ko: "단단해지는 중, 성장하는 나무",
      en: "Becoming Stronger, Growing Tree",
      ja: "強くなっている、成長する木",
      'zh-CN': "正在变强，成长的树",
      'zh-TW': "正在變強，成長的樹",
      vi: "Đang trở nên mạnh mẽ, Cây đang lớn",
      id: "Menjadi Lebih Kuat, Pohon yang Tumbuh"
    },
    shortDescription: {
      ko: "\"나를 있는 그대로 받아들이고 있어요.\"",
      en: "\"I'm accepting myself as I am.\"",
      ja: "「自分をありのまま受け入れています。」",
      'zh-CN': "「我正在接受真实的自己。」",
      'zh-TW': "「我正在接受真實的自己。」",
      vi: "\"Tôi đang chấp nhận bản thân như vậy.\"",
      id: "\"Saya menerima diri saya apa adanya.\""
    },
    description: {
      ko: "당신은 자신의 장점과 단점을 객관적으로 파악하고 있습니다. 완벽하지 않아도 괜찮다는 것을 알며, 타인의 평가에 크게 휘둘리지 않습니다. 가끔 흔들릴 때도 있지만, 스스로를 다독이며 다시 일어설 수 있는 회복 탄력성을 가지고 있습니다.",
      en: "You objectively understand your strengths and weaknesses. You know it's okay not to be perfect, and you're not greatly swayed by others' evaluations. You sometimes waver, but you have the resilience to comfort yourself and get back up.",
      ja: "あなたは自分の長所と短所を客観的に把握しています。完璧でなくても大丈夫だということを知っており、他人の評価に大きく左右されません。時々揺れることもありますが、自分を慰めて再び立ち上がることができる回復力を持っています。",
      'zh-CN': "你客观地了解自己的优缺点。你知道不完美也没关系，不会被他人的评价大幅影响。虽然有时会动摇，但你有安慰自己并重新站起来的恢复力。",
      'zh-TW': "你客觀地了解自己的優缺點。你知道不完美也沒關係，不會被他人的評價大幅影響。雖然有時會動搖，但你有安慰自己並重新站起來的恢復力。",
      vi: "Bạn hiểu một cách khách quan về điểm mạnh và điểm yếu của mình. Bạn biết không hoàn hảo cũng ổn, và không bị ảnh hưởng nhiều bởi đánh giá của người khác. Đôi khi bạn dao động, nhưng bạn có khả năng phục hồi để tự an ủi và đứng dậy.",
      id: "Anda secara objektif memahami kekuatan dan kelemahan Anda. Anda tahu tidak apa-apa tidak sempurna, dan Anda tidak terlalu terpengaruh oleh evaluasi orang lain. Anda kadang goyah, tetapi Anda memiliki ketahanan untuk menghibur diri sendiri dan bangkit kembali."
    },
    selfEsteemLevel: {
      ko: "Lv. 60 (보통/건강)",
      en: "Lv. 60 (Average/Healthy)",
      ja: "Lv. 60 (普通/健康)",
      'zh-CN': "Lv. 60 (普通/健康)",
      'zh-TW': "Lv. 60 (普通/健康)",
      vi: "Lv. 60 (Bình thường/Khỏe mạnh)",
      id: "Lv. 60 (Rata-rata/Sehat)"
    },
    characteristics: {
      ko: "적당한 자신감, 실수 인정, 긍정적",
      en: "Moderate confidence, Admits mistakes, Positive",
      ja: "適度な自信、失敗を認める、ポジティブ",
      'zh-CN': "适度的自信，承认错误，积极",
      'zh-TW': "適度的自信，承認錯誤，積極",
      vi: "Tự tin vừa phải, Thừa nhận sai lầm, Tích cực",
      id: "Kepercayaan diri sedang, Mengakui kesalahan, Positif"
    },
    recommendedActivity: {
      ko: "새로운 취미 배우기, 버킷리스트 작성",
      en: "Learning new hobbies, Writing bucket list",
      ja: "新しい趣味を学ぶ、バケットリストを作る",
      'zh-CN': "学习新爱好，写愿望清单",
      'zh-TW': "學習新愛好，寫願望清單",
      vi: "Học sở thích mới, Viết danh sách mong ước",
      id: "Belajar hobi baru, Menulis daftar keinginan"
    }
  },
  {
    type: "Type4",
    emoji: "💎",
    title: {
      ko: "빛나는 보석, 건강한 자존감",
      en: "Shining Gem, Healthy Self-Esteem",
      ja: "輝く宝石、健康な自尊心",
      'zh-CN': "闪亮的宝石，健康的自尊心",
      'zh-TW': "閃亮的寶石，健康的自尊心",
      vi: "Viên ngọc sáng, Lòng tự trọng khỏe mạnh",
      id: "Permata Bersinar, Harga Diri Sehat"
    },
    shortDescription: {
      ko: "\"나는 나를 믿어요.\"",
      en: "\"I believe in myself.\"",
      ja: "「私は自分を信じています。」",
      'zh-CN': "「我相信自己。」",
      'zh-TW': "「我相信自己。」",
      vi: "\"Tôi tin vào bản thân.\"",
      id: "\"Saya percaya pada diri sendiri.\""
    },
    description: {
      ko: "당신은 건강하고 높은 자존감을 가지고 있습니다. 자신을 진심으로 사랑하고 존중하며, 타인에게도 너그럽습니다. 실패를 두려워하지 않고 도전하며, 삶의 주도권을 자신이 쥐고 있습니다. 주변 사람들에게 긍정적인 에너지를 주는 햇살 같은 존재입니다.",
      en: "You have healthy and high self-esteem. You genuinely love and respect yourself, and are generous to others as well. You're not afraid of failure and take on challenges, holding the initiative in your own life. You're like sunshine, giving positive energy to those around you.",
      ja: "あなたは健康で高い自尊心を持っています。自分を心から愛し尊重し、他人にも寛大です。失敗を恐れずに挑戦し、人生の主導権を自分が握っています。周りの人々にポジティブなエネルギーを与える太陽のような存在です。",
      'zh-CN': "你拥有健康且高的自尊心。你真心爱和尊重自己，对他人也很宽容。你不害怕失败并接受挑战，掌握着自己生活的主动权。你像阳光一样，给周围的人带来正能量。",
      'zh-TW': "你擁有健康且高的自尊心。你真心愛和尊重自己，對他人也很寬容。你不害怕失敗並接受挑戰，掌握著自己生活的主動權。你像陽光一樣，給周圍的人帶來正能量。",
      vi: "Bạn có lòng tự trọng khỏe mạnh và cao. Bạn thực sự yêu và tôn trọng bản thân, và cũng rộng lượng với người khác. Bạn không sợ thất bại và đón nhận thử thách, nắm quyền chủ động trong cuộc sống của mình. Bạn như ánh nắng, mang lại năng lượng tích cực cho những người xung quanh.",
      id: "Anda memiliki harga diri yang sehat dan tinggi. Anda benar-benar mencintai dan menghormati diri sendiri, dan juga murah hati kepada orang lain. Anda tidak takut gagal dan mengambil tantangan, memegang inisiatif dalam hidup Anda sendiri. Anda seperti sinar matahari, memberikan energi positif kepada orang-orang di sekitar Anda."
    },
    selfEsteemLevel: {
      ko: "Lv. 85 (매우 높음)",
      en: "Lv. 85 (Very High)",
      ja: "Lv. 85 (非常に高い)",
      'zh-CN': "Lv. 85 (非常高)",
      'zh-TW': "Lv. 85 (非常高)",
      vi: "Lv. 85 (Rất cao)",
      id: "Lv. 85 (Sangat Tinggi)"
    },
    characteristics: {
      ko: "당당함, 여유로움, 높은 자기 효능감",
      en: "Confidence, Composure, High self-efficacy",
      ja: "堂々としている、余裕、高い自己効力感",
      'zh-CN': "自信，从容，高自我效能感",
      'zh-TW': "自信，從容，高自我效能感",
      vi: "Tự tin, Thư thái, Hiệu quả tự thân cao",
      id: "Kepercayaan diri, Ketenangan, Efikasi diri tinggi"
    },
    recommendedActivity: {
      ko: "리더십 발휘하기, 타인 돕기",
      en: "Exercising leadership, Helping others",
      ja: "リーダーシップを発揮する、他人を助ける",
      'zh-CN': "发挥领导力，帮助他人",
      'zh-TW': "發揮領導力，幫助他人",
      vi: "Thể hiện khả năng lãnh đạo, Giúp đỡ người khác",
      id: "Menggunakan kepemimpinan, Membantu orang lain"
    }
  },
  {
    type: "Type5",
    emoji: "👑",
    title: {
      ko: "천상천하 유아독존, 나르시시스트",
      en: "The Only One in Heaven and Earth, Narcissist",
      ja: "天上天下唯我独尊、ナルシシスト",
      'zh-CN': "天上天下唯我独尊，自恋者",
      'zh-TW': "天上天下唯我獨尊，自戀者",
      vi: "Duy nhất trên trời dưới đất, Người tự yêu bản thân",
      id: "Satu-satunya di Langit dan Bumi, Narsisis"
    },
    shortDescription: {
      ko: "\"세상에서 내가 제일 잘났어!\"",
      en: "\"I'm the best in the world!\"",
      ja: "「世界で私が一番すごい！」",
      'zh-CN': "「我是世界上最棒的！」",
      'zh-TW': "「我是世界上最棒的！」",
      vi: "\"Tôi là người giỏi nhất thế giới!\"",
      id: "\"Saya yang terbaik di dunia!\""
    },
    description: {
      ko: "당신은 자존감을 넘어 자기애가 폭발하는 상태입니다. 자신감이 넘치는 것은 좋지만, 자칫 오만하게 보일 수 있습니다. 타인의 감정보다는 나의 기분이 우선일 때가 많습니다. 자신감에 배려심을 조금 더한다면 완벽한 매력쟁이가 될 것입니다.",
      en: "You're in a state where self-love explodes beyond self-esteem. It's good to be overflowing with confidence, but it can come across as arrogant. Your mood often takes priority over others' feelings. If you add a bit more consideration to your confidence, you'll become a perfect charmer.",
      ja: "あなたは自尊心を超えて自己愛が爆発している状態です。自信に溢れているのは良いことですが、傲慢に見えるかもしれません。他人の感情よりも自分の気分が優先されることが多いです。自信に思いやりを少し加えれば、完璧な魅力ある人になるでしょう。",
      'zh-CN': "你处于自我爱超越自尊心爆发的状态。充满自信是好事，但可能显得傲慢。你的心情往往优先于他人的感受。如果在自信上再加一点体贴，你会成为完美的魅力者。",
      'zh-TW': "你處於自我愛超越自尊心爆發的狀態。充滿自信是好事，但可能顯得傲慢。你的心情往往優先於他人的感受。如果在自信上再加一點體貼，你會成為完美的魅力者。",
      vi: "Bạn đang ở trạng thái tự yêu bản thân bùng nổ vượt quá lòng tự trọng. Tự tin tràn đầy là tốt, nhưng có thể bị coi là kiêu ngạo. Tâm trạng của bạn thường được ưu tiên hơn cảm xúc của người khác. Nếu bạn thêm một chút quan tâm vào sự tự tin, bạn sẽ trở thành người quyến rũ hoàn hảo.",
      id: "Anda berada dalam keadaan di mana cinta diri meledak melampaui harga diri. Baik untuk meluap dengan kepercayaan diri, tetapi bisa terlihat sombong. Suasana hati Anda sering diutamakan daripada perasaan orang lain. Jika Anda menambahkan sedikit pertimbangan pada kepercayaan diri Anda, Anda akan menjadi pesona yang sempurna."
    },
    selfEsteemLevel: {
      ko: "Lv. 99 (과잉)",
      en: "Lv. 99 (Excessive)",
      ja: "Lv. 99 (過剰)",
      'zh-CN': "Lv. 99 (过度)",
      'zh-TW': "Lv. 99 (過度)",
      vi: "Lv. 99 (Quá mức)",
      id: "Lv. 99 (Berlebihan)"
    },
    characteristics: {
      ko: "근자감, 주인공 병, 마이웨이",
      en: "False confidence, Main character syndrome, My way",
      ja: "根拠のない自信、主人公病、マイウェイ",
      'zh-CN': "虚假自信，主角病，我行我素",
      'zh-TW': "虛假自信，主角病，我行我素",
      vi: "Tự tin giả, Hội chứng nhân vật chính, Cách của tôi",
      id: "Kepercayaan diri palsu, Sindrom karakter utama, Cara saya"
    },
    recommendedActivity: {
      ko: "경청 연습하기, 봉사활동",
      en: "Practicing active listening, Volunteer work",
      ja: "傾聴の練習、ボランティア活動",
      'zh-CN': "练习倾听，志愿活动",
      'zh-TW': "練習傾聽，志願活動",
      vi: "Luyện tập lắng nghe, Hoạt động tình nguyện",
      id: "Berlatih mendengarkan aktif, Kegiatan sukarela"
    }
  },
  {
    type: "Type6",
    emoji: "🧘‍♂️",
    title: {
      ko: "해탈의 경지, 멘탈 마스터",
      en: "State of Liberation, Mental Master",
      ja: "解脱の境地、メンタルマスター",
      'zh-CN': "解脱的境界，心态大师",
      'zh-TW': "解脫的境界，心態大師",
      vi: "Cảnh giới giải thoát, Bậc thầy tinh thần",
      id: "Keadaan Pembebasan, Master Mental"
    },
    shortDescription: {
      ko: "\"그 무엇도 나의 평화를 깰 수 없다.\"",
      en: "\"Nothing can break my peace.\"",
      ja: "「何ものも私の平和を壊すことはできない。」",
      'zh-CN': "「没有什么能打破我的平静。」",
      'zh-TW': "「沒有什麼能打破我的平靜。」",
      vi: "\"Không gì có thể phá vỡ sự bình yên của tôi.\"",
      id: "\"Tidak ada yang bisa mengganggu kedamaian saya.\""
    },
    description: {
      ko: "당신은 타인의 평가나 세상의 기준에서 완전히 자유로운 상태입니다. 좋고 나쁨을 판단하지 않고, 있는 그대로의 자신과 세상을 바라봅니다. 높은 자존감을 넘어 마음의 평화를 얻은 당신은 진정한 멘탈의 고수입니다.",
      en: "You are in a state completely free from others' evaluations or the world's standards. You don't judge good or bad, and see yourself and the world as they are. Having achieved peace of mind beyond high self-esteem, you are a true master of mental strength.",
      ja: "あなたは他人の評価や世界の基準から完全に自由な状態です。善悪を判断せず、ありのままの自分と世界を見ています。高い自尊心を超えて心の平和を得たあなたは、真のメンタルの達人です。",
      'zh-CN': "你处于完全不受他人评价或世界标准束缚的状态。你不判断好坏，如实地看待自己和世界。超越了高自尊心而获得内心平静的你，是真正的心态高手。",
      'zh-TW': "你處於完全不受他人評價或世界標準束縛的狀態。你不判斷好壞，如實地看待自己和世界。超越了高自尊心而獲得內心平靜的你，是真正的心態高手。",
      vi: "Bạn đang ở trạng thái hoàn toàn tự do khỏi đánh giá của người khác hoặc tiêu chuẩn của thế giới. Bạn không phán xét tốt xấu, và nhìn bản thân và thế giới như chúng vốn có. Đạt được sự bình yên trong tâm hồn vượt quá lòng tự trọng cao, bạn là bậc thầy thực sự về sức mạnh tinh thần.",
      id: "Anda berada dalam keadaan yang sepenuhnya bebas dari evaluasi orang lain atau standar dunia. Anda tidak menilai baik atau buruk, dan melihat diri sendiri dan dunia apa adanya. Setelah mencapai kedamaian pikiran melampaui harga diri yang tinggi, Anda adalah master sejati dari kekuatan mental."
    },
    selfEsteemLevel: {
      ko: "Lv. 100 (초월)",
      en: "Lv. 100 (Transcendent)",
      ja: "Lv. 100 (超越)",
      'zh-CN': "Lv. 100 (超越)",
      'zh-TW': "Lv. 100 (超越)",
      vi: "Lv. 100 (Siêu việt)",
      id: "Lv. 100 (Transenden)"
    },
    characteristics: {
      ko: "무던함, 평온함, 깊은 내공",
      en: "Indifference, Serenity, Deep inner strength",
      ja: "無頓着、平穏、深い内功",
      'zh-CN': "淡然，平静，深厚内功",
      'zh-TW': "淡然，平靜，深厚內功",
      vi: "Thờ ơ, Bình tĩnh, Nội lực sâu sắc",
      id: "Ketidakpedulian, Ketenangan, Kekuatan batin yang dalam"
    },
    recommendedActivity: {
      ko: "명상 지도, 에세이 집필",
      en: "Meditation guidance, Essay writing",
      ja: "瞑想指導、エッセイ執筆",
      'zh-CN': "冥想指导，撰写散文",
      'zh-TW': "冥想指導，撰寫散文",
      vi: "Hướng dẫn thiền định, Viết tiểu luận",
      id: "Panduan meditasi, Menulis esai"
    }
  }
];

// 채점 함수: 각 답변의 score를 합산하여 총점으로 결과 결정
export function calculatePhase2SelfEsteemResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  // 총점 0~36점 기준으로 결과 분류
  if (totalScore >= 0 && totalScore <= 6) {
    return "Type1";
  } else if (totalScore >= 7 && totalScore <= 13) {
    return "Type2";
  } else if (totalScore >= 14 && totalScore <= 21) {
    return "Type3";
  } else if (totalScore >= 22 && totalScore <= 29) {
    return "Type4";
  } else if (totalScore >= 30 && totalScore <= 34) {
    return "Type5";
  } else if (totalScore >= 35 && totalScore <= 36) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type1";
  }
}
