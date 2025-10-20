export interface TrustQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    scores: Record<string, number>;
  }[];
}

export interface TrustResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  description: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  trustScore: string;
  compatibility: {
    best: string[];
    good: string[];
    careful: string[];
    difficult?: string[];
  };
}

export const trustQuestions: TrustQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구와 약속을 잡았는데 더 좋은 약속이 생긴다면?",
      en: "You have a date with a friend, but a better opportunity comes up. What do you do?",
      ja: "友達と約束をしていたが、もっと良い約束が入ったら？",
      'zh-CN': "你已经和朋友约好了，但有一个更好的约会，你会怎么做？",
      'zh-TW': "你已經和朋友約好了，但有一個更好的約會，你會怎麼做？",
      vi: "Bạn đã hẹn với bạn bè, nhưng có một cuộc hẹn tốt hơn. Bạn sẽ làm gì?",
      id: "Anda sudah janji dengan teman, tapi ada janji yang lebih baik. Apa yang akan Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "원래 약속을 절대 안 바꿈",
          en: "Never change the original promise",
          ja: "元の約束は絶対に変更しない",
          'zh-CN': "绝不改变原定约会",
          'zh-TW': "絕不改變原定約會",
          vi: "Không bao giờ thay đổi lời hứa ban đầu",
          id: "Tidak pernah mengubah janji asli"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "친구에게 양해를 구하고 조율",
          en: "Ask for understanding and coordinate",
          ja: "友達に理解を求めて調整する",
          'zh-CN': "请求朋友理解并协调",
          'zh-TW': "請求朋友理解並協調",
          vi: "Xin bạn hiểu và điều phối",
          id: "Meminta pengertian dan berkoordinasi"
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "친구가 괜찮다면 바꿀 수도",
          en: "Might change if friend is okay with it",
          ja: "友達が大丈夫なら変更するかもしれない",
          'zh-CN': "如果朋友同意可能会改变",
          'zh-TW': "如果朋友同意可能會改變",
          vi: "Có thể thay đổi nếu bạn đồng ý",
          id: "Mungkin berubah jika teman setuju"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "솔직히 더 좋은 쪽으로 갈 것 같음",
          en: "Honestly, would probably go with the better one",
          ja: "正直、より良い方に行きそう",
          'zh-CN': "老实说，可能会选择更好的",
          'zh-TW': "老實說，可能會選擇更好的",
          vi: "Thành thật mà nói, có lẽ sẽ chọn cái tốt hơn",
          id: "Jujur, mungkin akan memilih yang lebih baik"
        },
        scores: { Type4: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 중요한 비밀을 털어놨을 때?",
      en: "When a friend tells you an important secret?",
      ja: "友達が重要な秘密を打ち明けたとき？",
      'zh-CN': "当朋友告诉你一个重要秘密时？",
      'zh-TW': "當朋友告訴你一個重要秘密時？",
      vi: "Khi bạn bè kể cho bạn một bí mật quan trọng?",
      id: "Ketika teman menceritakan rahasia penting kepada Anda?"
    },
    options: [
      {
        text: {
          ko: "무덤까지 가져감, 절대 말 안 함",
          en: "Take it to the grave, never tell anyone",
          ja: "墓場まで持っていく、絶対に言わない",
          'zh-CN': "带到坟墓里，绝不告诉任何人",
          'zh-TW': "帶到墳墓裡，絕不告訴任何人",
          vi: "Mang theo đến mộ, không bao giờ nói với ai",
          id: "Bawa ke kuburan, tidak pernah memberitahu siapa pun"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "정말 필요한 경우가 아니면 안 함",
          en: "Won't tell unless really necessary",
          ja: "本当に必要な場合でなければ言わない",
          'zh-CN': "除非真的需要否则不会说",
          'zh-TW': "除非真的需要否則不會說",
          vi: "Không nói trừ khi thực sự cần thiết",
          id: "Tidak akan memberitahu kecuali benar-benar diperlukan"
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "가까운 사람에게는 말할 수도",
          en: "Might tell close people",
          ja: "親しい人には話すかもしれない",
          'zh-CN': "可能会告诉亲近的人",
          'zh-TW': "可能會告訴親近的人",
          vi: "Có thể nói với những người thân thiết",
          id: "Mungkin memberitahu orang terdekat"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "재미있으면 몇 명에게 말할 수도",
          en: "Might tell a few people if it's interesting",
          ja: "面白ければ数人に話すかもしれない",
          'zh-CN': "如果有趣可能会告诉几个人",
          'zh-TW': "如果有趣可能會告訴幾個人",
          vi: "Nếu thú vị có thể nói với vài người",
          id: "Jika menarik mungkin akan memberitahu beberapa orang"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "마감이 있는 일을 맡았을 때 당신은?",
      en: "When you have a task with a deadline, you?",
      ja: "締切がある仕事を任されたとき、あなたは？",
      'zh-CN': "当你有一个有截止日期的任务时，你会？",
      'zh-TW': "當你有一個有截止日期的任務時，你會？",
      vi: "Khi bạn có một nhiệm vụ có thời hạn, bạn sẽ?",
      id: "Ketika Anda memiliki tugas dengan tenggat waktu, Anda akan?"
    },
    options: [
      {
        text: {
          ko: "여유있게 미리미리 처리",
          en: "Handle it leisurely in advance",
          ja: "余裕を持って事前に処理する",
          'zh-CN': "提前悠闲地处理",
          'zh-TW': "提前悠閒地處理",
          vi: "Xử lý một cách thoải mái trước thời hạn",
          id: "Menangani dengan santai di muka"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "기한 맞춰서 정확하게 완수",
          en: "Complete it accurately by the deadline",
          ja: "締切通りに正確に完了させる",
          'zh-CN': "按时准确完成",
          'zh-TW': "按時準確完成",
          vi: "Hoàn thành chính xác đúng thời hạn",
          id: "Menyelesaikan dengan akurat tepat waktu"
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "가끔 늦지만 결국엔 해냄",
          en: "Sometimes late but eventually get it done",
          ja: "時々遅れるが結局はやり遂げる",
          'zh-CN': "有时会迟到但最终会完成",
          'zh-TW': "有時會遲到但最終會完成",
          vi: "Đôi khi trễ nhưng cuối cùng vẫn hoàn thành",
          id: "Kadang terlambat tapi akhirnya selesai juga"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "연장 요청하거나 깜빡할 때 있음",
          en: "Sometimes ask for extension or forget",
          ja: "時々延長を依頼したり忘れたりする",
          'zh-CN': "有时会要求延期或忘记",
          'zh-TW': "有時會要求延期或忘記",
          vi: "Đôi khi xin gia hạn hoặc quên mất",
          id: "Kadang minta perpanjangan atau lupa"
        },
        scores: { Type4: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "「나만 믿어!」라고 말한 적이 있다면?",
      en: "Have you ever said \"Trust only me!\"?",
      ja: "「僕だけを信じて！」と言ったことがありますか？",
      'zh-CN': "你是否说过\"只相信我\"？",
      'zh-TW': "你是否說過\"只相信我\"？",
      vi: "Bạn có bao giờ nói \"Chỉ tin tôi!\" không?",
      id: "Pernahkah Anda mengatakan \"Percayai hanya saya!\"?"
    },
    options: [
      {
        text: {
          ko: "말한 적 있고, 항상 지킴",
          en: "Said it and always kept it",
          ja: "言ったことがあり、いつも守った",
          'zh-CN': "说过并且总是遵守",
          'zh-TW': "說過並且總是遵守",
          vi: "Đã nói và luôn giữ lời",
          id: "Mengatakan dan selalu menepatinya"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "말하고 최대한 노력함",
          en: "Said it and tried my best",
          ja: "言って最善を尽くした",
          'zh-CN': "说过并尽力做到",
          'zh-TW': "說過並盡力做到",
          vi: "Đã nói và cố gắng hết sức",
          id: "Mengatakan dan berusaha sebaik mungkin"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "말했는데 못 지킨 적 있음",
          en: "Said it but sometimes couldn't keep it",
          ja: "言ったが守れなかったことがある",
          'zh-CN': "说过但有时没能遵守",
          'zh-TW': "說過但有時沒能遵守",
          vi: "Đã nói nhưng đôi khi không giữ được",
          id: "Mengatakan tapi kadang tidak bisa menepatinya"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "그런 말 잘 안 함, 부담스러움",
          en: "Don't say such things, it's burdensome",
          ja: "そんなことは言わない、負担だから",
          'zh-CN': "不说那样的话，太有负担",
          'zh-TW': "不說那樣的話，太有負擔",
          vi: "Không nói những điều như vậy, quá áp lực",
          id: "Tidak mengatakan hal seperti itu, terlalu memberatkan"
        },
        scores: { Type4: 3, Type5: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "돈을 빌려줬을 때 당신의 생각은?",
      en: "When you lend money, what do you think?",
      ja: "お金を貸したとき、あなたの考えは？",
      'zh-CN': "当你借钱给别人时，你的想法是？",
      'zh-TW': "當你借錢給別人時，你的想法是？",
      vi: "Khi bạn cho ai đó mượn tiền, bạn nghĩ gì?",
      id: "Ketika Anda meminjamkan uang, apa yang Anda pikirkan?"
    },
    options: [
      {
        text: {
          ko: "빌려준 날짜와 금액 정확히 기억",
          en: "Remember the exact date and amount",
          ja: "貸した日付と金額を正確に覚えている",
          'zh-CN': "准确记住借出的日期和金额",
          'zh-TW': "準確記住借出的日期和金額",
          vi: "Nhớ chính xác ngày và số tiền đã cho mượn",
          id: "Mengingat tanggal dan jumlah yang tepat"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "대략 기억하고 언젠가 받겠지",
          en: "Remember roughly and will get it back someday",
          ja: "大体覚えていて、いつか返してもらえるだろう",
          'zh-CN': "大概记住，总有一天会还的",
          'zh-TW': "大概記住，總有一天會還的",
          vi: "Nhớ đại khái và sẽ nhận lại một ngày nào đó",
          id: "Mengingat secara kasar dan akan mendapatkannya kembali suatu hari"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "안 받아도 그러려니 함",
          en: "It's okay if I don't get it back",
          ja: "返してもらえなくても仕方ないと思う",
          'zh-CN': "不还也没关系",
          'zh-TW': "不還也沒關係",
          vi: "Không nhận lại cũng không sao",
          id: "Tidak apa-apa jika tidak dikembalikan"
        },
        scores: { Type4: 3 }
      },
      {
        text: {
          ko: "빌려준 것 자체를 잊어버림",
          en: "Forget that I lent it in the first place",
          ja: "貸したこと自体を忘れてしまう",
          'zh-CN': "忘记借出这件事本身",
          'zh-TW': "忘記借出這件事本身",
          vi: "Quên mất việc đã cho mượn",
          id: "Lupa bahwa saya sudah meminjamkannya"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "작은 거짓말에 대한 당신의 생각은?",
      en: "What do you think about small lies?",
      ja: "小さな嘘について、あなたの考えは？",
      'zh-CN': "你对小谎言的看法是？",
      'zh-TW': "你對小謊言的看法是？",
      vi: "Bạn nghĩ gì về những lời nói dối nhỏ?",
      id: "Apa pendapat Anda tentang kebohongan kecil?"
    },
    options: [
      {
        text: {
          ko: "작은 거짓말도 거짓말, 안 함",
          en: "Small lies are still lies, I don't do them",
          ja: "小さな嘘でも嘘、しない",
          'zh-CN': "小谎言也是谎言，我不说",
          'zh-TW': "小謊言也是謊言，我不說",
          vi: "Lời nói dối nhỏ cũng là nói dối, tôi không làm",
          id: "Kebohongan kecil tetap bohong, saya tidak melakukannya"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "상대를 위한 거짓말은 괜찮음",
          en: "Lies for the other person's sake are okay",
          ja: "相手のための嘘なら大丈夫",
          'zh-CN': "为对方好的谎言是可以的",
          'zh-TW': "為對方好的謊言是可以的",
          vi: "Nói dối vì lợi ích của người khác thì không sao",
          id: "Bohong untuk kebaikan orang lain tidak apa-apa"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "상황에 따라 필요하면 함",
          en: "Do it if necessary depending on the situation",
          ja: "状況に応じて必要ならする",
          'zh-CN': "根据情况必要时会说",
          'zh-TW': "根據情況必要時會說",
          vi: "Tùy tình huống, nếu cần thiết thì sẽ nói dối",
          id: "Bergantung pada situasi, jika perlu akan berbohong"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "솔직히 자주 하는 편",
          en: "Honestly, I do it quite often",
          ja: "正直、よくする方",
          'zh-CN': "老实说，经常这样做",
          'zh-TW': "老實說，經常這樣做",
          vi: "Thành thật mà nói, tôi thường xuyên làm vậy",
          id: "Jujur, saya sering melakukannya"
        },
        scores: { Type5: 3, Type6: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "누군가 당신에게 부탁을 했을 때?",
      en: "When someone asks you for a favor?",
      ja: "誰かがあなたにお願いをしたとき？",
      'zh-CN': "当有人请你帮忙时？",
      'zh-TW': "當有人請你幫忙時？",
      vi: "Khi ai đó nhờ bạn giúp đỡ?",
      id: "Ketika seseorang meminta bantuan Anda?"
    },
    options: [
      {
        text: {
          ko: "할 수 있으면 꼭 들어줌",
          en: "If I can do it, I definitely help",
          ja: "できるなら必ず聞いてあげる",
          'zh-CN': "如果能做到就一定会帮忙",
          'zh-TW': "如果能做到就一定會幫忙",
          vi: "Nếu có thể làm thì nhất định giúp",
          id: "Jika bisa melakukan, pasti akan membantu"
        },
        scores: { Type1: 3, Type2: 2 }
      },
      {
        text: {
          ko: "가능한지 생각하고 결정",
          en: "Think about whether it's possible and decide",
          ja: "可能かどうか考えて決める",
          'zh-CN': "考虑是否可能然后决定",
          'zh-TW': "考慮是否可能然後決定",
          vi: "Suy nghĩ xem có thể không rồi quyết định",
          id: "Pikirkan apakah mungkin dan putuskan"
        },
        scores: { Type2: 3, Type3: 2 }
      },
      {
        text: {
          ko: "일단 좋다고 하고 나중에 생각",
          en: "Say yes first and think about it later",
          ja: "とりあえずいいと言って後で考える",
          'zh-CN': "先答应然后稍后考虑",
          'zh-TW': "先答應然後稍後考慮",
          vi: "Nói đồng ý trước rồi suy nghĩ sau",
          id: "Bilang setuju dulu dan pikirkan nanti"
        },
        scores: { Type3: 3, Type4: 2 }
      },
      {
        text: {
          ko: "부담돼서 거절하는 편",
          en: "Usually refuse because it's burdensome",
          ja: "負担だから断る方",
          'zh-CN': "通常因为负担而拒绝",
          'zh-TW': "通常因為負擔而拒絕",
          vi: "Thường từ chối vì thấy áp lực",
          id: "Biasanya menolak karena memberatkan"
        },
        scores: { Type5: 8 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "단체 프로젝트에서 당신의 역할은?",
      en: "What is your role in group projects?",
      ja: "グループプロジェクトでのあなたの役割は？",
      'zh-CN': "在团队项目中你的角色是？",
      'zh-TW': "在團隊項目中你的角色是？",
      vi: "Vai trò của bạn trong dự án nhóm là gì?",
      id: "Apa peran Anda dalam proyek kelompok?"
    },
    options: [
      {
        text: {
          ko: "리더나 책임자 역할",
          en: "Leader or responsible person role",
          ja: "リーダーや責任者役",
          'zh-CN': "领导者或负责人角色",
          'zh-TW': "領導者或負責人角色",
          vi: "Vai trò lãnh đạo hoặc người chịu trách nhiệm",
          id: "Peran pemimpin atau penanggung jawab"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "맡은 부분 확실히 처리",
          en: "Handle my assigned part properly",
          ja: "担当部分を確実に処理する",
          'zh-CN': "确保处理分配给我的部分",
          'zh-TW': "確保處理分配給我的部分",
          vi: "Xử lý chắc chắn phần được giao",
          id: "Menangani bagian yang ditugaskan dengan pasti"
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "도와달라고 하면 도움",
          en: "Help when asked for help",
          ja: "助けてと言われたら助ける",
          'zh-CN': "被要求帮助时就帮忙",
          'zh-TW': "被要求幫助時就幫忙",
          vi: "Khi được yêu cầu giúp đỡ thì giúp",
          id: "Membantu ketika diminta bantuan"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "최소한만 하는 편",
          en: "Usually do the minimum",
          ja: "最小限しかしない方",
          'zh-CN': "通常只做最少的工作",
          'zh-TW': "通常只做最少的工作",
          vi: "Thường chỉ làm tối thiểu",
          id: "Biasanya hanya melakukan minimum"
        },
        scores: { Type4: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "약속 시간에 늦었을 때?",
      en: "When you're late for an appointment?",
      ja: "約束時間に遅れたとき？",
      'zh-CN': "当你约会迟到时？",
      'zh-TW': "當你約會遲到時？",
      vi: "Khi bạn trễ hẹn?",
      id: "Ketika Anda terlambat janji?"
    },
    options: [
      {
        text: {
          ko: "거의 늦지 않음, 미리 도착",
          en: "Almost never late, arrive early",
          ja: "ほとんど遅れない、早めに到着",
          'zh-CN': "几乎从不迟到，提前到达",
          'zh-TW': "幾乎從不遲到，提前到達",
          vi: "Hầu như không bao giờ trễ, đến sớm",
          id: "Hampir tidak pernah terlambat, datang lebih awal"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "늦으면 미리 연락하고 사과",
          en: "If late, contact in advance and apologize",
          ja: "遅れそうなら事前に連絡して謝る",
          'zh-CN': "如果迟到，提前联系并道歉",
          'zh-TW': "如果遲到，提前聯繫並道歉",
          vi: "Nếu trễ thì liên hệ trước và xin lỗi",
          id: "Jika terlambat, hubungi terlebih dahulu dan minta maaf"
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "가끔 늦지만 크게 늦진 않음",
          en: "Sometimes late but not very late",
          ja: "時々遅れるが大きく遅れない",
          'zh-CN': "有时迟到但不会很晚",
          'zh-TW': "有時遲到但不會很晚",
          vi: "Đôi khi trễ nhưng không trễ quá nhiều",
          id: "Kadang terlambat tapi tidak terlalu terlambat"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "자주 늦는 편, 시간 개념 약함",
          en: "Often late, weak sense of time",
          ja: "よく遅れる方、時間感覚が弱い",
          'zh-CN': "经常迟到，时间观念不强",
          'zh-TW': "經常遲到，時間觀念不強",
          vi: "Thường xuyên trễ, ý thức thời gian yếu",
          id: "Sering terlambat, kesadaran waktu lemah"
        },
        scores: { Type6: 8 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "친구가 힘들 때 당신은?",
      en: "When your friend is having a hard time?",
      ja: "友達が大変なとき、あなたは？",
      'zh-CN': "当朋友遇到困难时？",
      'zh-TW': "當朋友遇到困難時？",
      vi: "Khi bạn bè gặp khó khăn?",
      id: "Ketika teman mengalami kesulitan?"
    },
    options: [
      {
        text: {
          ko: "무슨 일이든 달려감",
          en: "Run to help no matter what",
          ja: "何があっても駆けつける",
          'zh-CN': "不管什么事都会跑去帮忙",
          'zh-TW': "不管什麼事都會跑去幫忙",
          vi: "Dù có chuyện gì cũng chạy đến giúp",
          id: "Lari membantu apapun yang terjadi"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "필요하면 언제든 도와줌",
          en: "Help whenever needed",
          ja: "必要ならいつでも助ける",
          'zh-CN': "需要时随时帮忙",
          'zh-TW': "需要時隨時幫忙",
          vi: "Khi cần thì lúc nào cũng giúp",
          id: "Membantu kapan saja jika diperlukan"
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "가능하면 도와주려고 노력",
          en: "Try to help if possible",
          ja: "可能なら助けようと努力する",
          'zh-CN': "如果可能就努力帮助",
          'zh-TW': "如果可能就努力幫助",
          vi: "Cố gắng giúp nếu có thể",
          id: "Berusaha membantu jika memungkinkan"
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "위로는 하지만 실제 도움은 어려움",
          en: "Comfort them but actual help is difficult",
          ja: "慰めるが実際の助けは難しい",
          'zh-CN': "安慰他们但实际帮助很困难",
          'zh-TW': "安慰他們但實際幫助很困難",
          vi: "An ủi nhưng giúp đỡ thực tế thì khó",
          id: "Menghibur tapi bantuan nyata sulit"
        },
        scores: { Type5: 8 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "비밀번호나 개인정보를 맡긴다면?",
      en: "If someone entrusts you with passwords or personal information?",
      ja: "パスワードや個人情報を預けられたら？",
      'zh-CN': "如果有人托付你密码或个人资料？",
      'zh-TW': "如果有人託付你密碼或個人資料？",
      vi: "Nếu ai đó giao cho bạn mật khẩu hoặc thông tin cá nhân?",
      id: "Jika seseorang mempercayakan Anda dengan kata sandi atau informasi pribadi?"
    },
    options: [
      {
        text: {
          ko: "절대 안전하게 지킴",
          en: "Keep it absolutely safe",
          ja: "絶対に安全に守る",
          'zh-CN': "绝对安全地保管",
          'zh-TW': "絕對安全地保管",
          vi: "Giữ gìn tuyệt đối an toàn",
          id: "Menjaga dengan sangat aman"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "조심해서 관리함",
          en: "Manage it carefully",
          ja: "注意深く管理する",
          'zh-CN': "小心谨慎地管理",
          'zh-TW': "小心謹慎地管理",
          vi: "Quản lý một cách cẩn thận",
          id: "Mengelolanya dengan hati-hati"
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "잊어버릴까봐 걱정됨",
          en: "Worried I might forget it",
          ja: "忘れちゃうかもしれないと心配",
          'zh-CN': "担心可能会忘记",
          'zh-TW': "擔心可能會忘記",
          vi: "Lo lắng có thể quên mất",
          id: "Khawatir mungkin akan lupa"
        },
        scores: { Type3: 3, Type6: 2 }
      },
      {
        text: {
          ko: "그런 거 맡기지 말라고 함",
          en: "Tell them not to entrust such things to me",
          ja: "そんなものは預けないでと言う",
          'zh-CN': "告诉他们不要托付给我",
          'zh-TW': "告訴他們不要託付給我",
          vi: "Nói họ đừng giao những thứ như vậy cho tôi",
          id: "Bilang mereka jangan percayakan hal seperti itu kepada saya"
        },
        scores: { Type4: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "사람들이 당신을 어떻게 평가할까?",
      en: "How would people evaluate you?",
      ja: "人々はあなたをどう評価するでしょうか？",
      'zh-CN': "人们会如何评价你？",
      'zh-TW': "人們會如何評價你？",
      vi: "Mọi người sẽ đánh giá bạn như thế nào?",
      id: "Bagaimana orang-orang akan mengevaluasi Anda?"
    },
    options: [
      {
        text: {
          ko: "「쟤는 진짜 믿을 수 있어」",
          en: "\"They are really trustworthy\"",
          ja: "「あの人は本当に信頼できる」",
          'zh-CN': "\"那个人真的很值得信任\"",
          'zh-TW': "\"那個人真的很值得信任\"",
          vi: "\"Người đó thực sự đáng tin cậy\"",
          id: "\"Orang itu benar-benar dapat dipercaya\""
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "「착하고 믿음직해」",
          en: "\"Kind and reliable\"",
          ja: "「優しくて信頼できる」",
          'zh-CN': "\"善良可靠\"",
          'zh-TW': "\"善良可靠\"",
          vi: "\"Tốt bụng và đáng tin cậy\"",
          id: "\"Baik dan dapat dipercaya\""
        },
        scores: { Type2: 3, Type3: 1 }
      },
      {
        text: {
          ko: "「좋은 사람인데 가끔 불안해」",
          en: "\"Good person but sometimes unreliable\"",
          ja: "「良い人だけど時々不安」",
          'zh-CN': "\"好人但有时不可靠\"",
          'zh-TW': "\"好人但有時不可靠\"",
          vi: "\"Người tốt nhưng đôi khi không đáng tin cậy\"",
          id: "\"Orang baik tapi kadang tidak bisa diandalkan\""
        },
        scores: { Type3: 3 }
      },
      {
        text: {
          ko: "「자유로운 영혼이야」",
          en: "\"Free spirit\"",
          ja: "「自由な魂だ」",
          'zh-CN': "\"自由的灵魂\"",
          'zh-TW': "\"自由的靈魂\"",
          vi: "\"Linh hồn tự do\"",
          id: "\"Jiwa yang bebas\""
        },
        scores: { Type4: 3, Type5: 2 }
      }
    ]
  }
];

export const trustResults: TrustResult[] = [
  {
    type: "Type1",
    emoji: "🗿",
    title: {
      ko: "바위같은 신뢰형",
      en: "Rock-Solid Trust Type",
      ja: "岩のような信頼型",
      'zh-CN': "坚如磐石的信任型",
      'zh-TW': "堅如磐石的信任型",
      vi: "Kiểu tin cậy vững như đá",
      id: "Tipe Kepercayaan Kokoh Seperti Batu"
    },
    description: {
      ko: "흔들림 없는 신뢰! 100% 믿을 수 있는 사람\n\n약속은 생명이고 비밀은 무덤까지 가져갑니다. 책임감이 강하고 일관성이 있어 사람들이 가장 의지하는 타입입니다. 한 번 믿으면 끝까지 믿을 수 있고, 배신하지 않습니다. 다만 너무 완벽해서 스스로에게 스트레스를 줄 수 있으니 가끔은 여유를 가져도 괜찮습니다.",
      en: "Unshakeable trust! 100% reliable person\n\nPromises are life and secrets are taken to the grave. You have strong responsibility and consistency, making you the most dependable type that people rely on. Once you trust someone, you trust them to the end and never betray them. However, being too perfect can cause stress to yourself, so it's okay to take a break sometimes.",
      ja: "揺るぎない信頼！100%信頼できる人\n\n約束は命であり、秘密は墓まで持参します。責任感が強く一貫性があり、人々が最も頼りにするタイプです。一度信じれば最後まで信じ、裏切りません。ただし、完璧すぎて自分にストレスを与える可能性があるので、時々余裕を持つことも大丈夫です。",
      'zh-CN': "不可动摇的信任！100%可靠的人\n\n承诺就是生命，秘密带到坟墓。你责任心强，一致性好，是人们最依赖的类型。一旦信任就会信任到底，从不背叛。但过于完美可能会给自己带来压力，所以偶尔放松一下也没关系。",
      'zh-TW': "不可動搖的信任！100%可靠的人\n\n承諾就是生命，秘密帶到墳墓。你責任心強，一致性好，是人們最依賴的類型。一旦信任就會信任到底，從不背叛。但過於完美可能會給自己帶來壓力，所以偶爾放鬆一下也沒關係。",
      vi: "Niềm tin không lay chuyển! Người đáng tin cậy 100%\n\nLời hứa là mạng sống và bí mật được mang đến mồ. Bạn có trách nhiệm mạnh mẽ và tính nhất quán, là kiểu người đáng tin cậy nhất mà mọi người dựa vào. Một khi tin tưởng ai đó, bạn tin họ đến cùng và không bao giờ phản bội. Tuy nhiên, quá hoàn hảo có thể gây căng thẳng cho bản thân, nên thỉnh thoảng nghỉ ngơi cũng không sao.",
      id: "Kepercayaan yang tak tergoyahkan! Orang yang 100% dapat dipercaya\n\nJanji adalah hidup dan rahasia dibawa ke kubur. Anda memiliki tanggung jawab yang kuat dan konsistensi, menjadikan Anda tipe yang paling dapat diandalkan yang diandalkan orang. Begitu mempercayai seseorang, Anda mempercayai mereka sampai akhir dan tidak pernah mengkhianati. Namun, terlalu sempurna dapat menyebabkan stres pada diri sendiri, jadi sesekali beristirahat juga tidak apa-apa."
    },
    pros: [
      { 
        ko: "신뢰도 100%",
        en: "100% reliability",
        ja: "信頼度100%",
        'zh-CN': "100%可靠性",
        'zh-TW': "100%可靠性",
        vi: "Độ tin cậy 100%",
        id: "Keandalan 100%"
      },
      { 
        ko: "책임감",
        en: "Responsibility",
        ja: "責任感",
        'zh-CN': "责任感",
        'zh-TW': "責任感",
        vi: "Tinh thần trách nhiệm",
        id: "Tanggung jawab"
      },
      { 
        ko: "일관성",
        en: "Consistency",
        ja: "一貫性",
        'zh-CN': "一致性",
        'zh-TW': "一致性",
        vi: "Tính nhất quán",
        id: "Konsistensi"
      },
      { 
        ko: "의지됨",
        en: "Dependable",
        ja: "頼れる",
        'zh-CN': "可靠",
        'zh-TW': "可靠",
        vi: "Đáng tin cậy",
        id: "Dapat diandalkan"
      }
    ],
    cons: [
      { 
        ko: "완벽주의 스트레스",
        en: "Perfectionist stress",
        ja: "完璧主義ストレス",
        'zh-CN': "完美主义压力",
        'zh-TW': "完美主義壓力",
        vi: "Căng thẳng vì chủ nghĩa hoàn hảo",
        id: "Stres perfeksionis"
      },
      { 
        ko: "융통성 부족",
        en: "Lack of flexibility",
        ja: "柔軟性の欠如",
        'zh-CN': "缺乏灵活性",
        'zh-TW': "缺乏靈活性",
        vi: "Thiếu tính linh hoạt",
        id: "Kurang fleksibilitas"
      }
    ],
    advice: {
      ko: "당신은 이미 충분히 믿음직해요. 가끔은 실수해도 괜찮다는 걸 기억하세요!",
      en: "You are already reliable enough. Remember that it's okay to make mistakes sometimes!",
      ja: "あなたはすでに十分信頼できます。時々ミスをしても大丈夫だということを覚えておいてください！",
      'zh-CN': "你已经足够可靠了。记住偶尔犯错也没关系！",
      'zh-TW': "你已經足夠可靠了。記住偶爾犯錯也沒關係！",
      vi: "Bạn đã đủ đáng tin cậy rồi. Hãy nhớ rằng đôi khi mắc lỗi cũng không sao!",
      id: "Anda sudah cukup dapat dipercaya. Ingat bahwa sesekali membuat kesalahan tidak apa-apa!"
    },
    trustScore: "★★★★★ (5/5)",
    compatibility: {
      best: ["Type1"],
      good: ["Type2", "Type3"],
      careful: ["Type6"]
    }
  },
  {
    type: "Type2",
    emoji: "🛡️",
    title: {
      ko: "든든한 지킴이형",
      en: "Reliable Guardian Type",
      ja: "頼れる守護型",
      'zh-CN': "可靠守护型",
      'zh-TW': "可靠守護型",
      vi: "Kiểu người bảo vệ đáng tin cậy",
      id: "Tipe Penjaga yang Dapat Dipercaya"
    },
    description: {
      ko: "언제나 곁에 있는 사람! 의지되는 친구\n\n신뢰할 수 있고 책임감 있는 사람입니다. 약속을 잘 지키고 필요할 때 도와줍니다. 완벽하진 않아도 최선을 다하는 모습이 신뢰를 줍니다. 균형잡힌 신뢰도로 주변 사람들에게 든든한 존재입니다. 가장 현실적이고 이상적인 타입입니다.",
      en: "Always by your side! A dependable friend\n\nYou are a trustworthy and responsible person. You keep promises well and help when needed. Although not perfect, your effort to do your best gives trust. You are a solid presence to people around you with balanced reliability. You are the most realistic and ideal type.",
      ja: "いつもそばにいる人！頼れる友達\n\n信頼できて責任感のある人です。約束をよく守り、必要な時に助けてくれます。完璧ではありませんが、最善を尽くす姿が信頼を与えます。バランスの取れた信頼度で周りの人々にとって心強い存在です。最も現実的で理想的なタイプです。",
      'zh-CN': "总是在身边的人！值得信赖的朋友\n\n你是值得信赖和有责任心的人。你很好地遵守承诺，在需要时提供帮助。虽然不完美，但你尽力而为的样子给人以信任。你以平衡的可靠性成为周围人的坚实存在。你是最现实和理想的类型。",
      'zh-TW': "總是在身邊的人！值得信賴的朋友\n\n你是值得信賴和有責任心的人。你很好地遵守承諾，在需要時提供幫助。雖然不完美，但你盡力而為的樣子給人以信任。你以平衡的可靠性成為周圍人的堅實存在。你是最現實和理想的類型。",
      vi: "Luôn ở bên cạnh! Người bạn đáng tin cậy\n\nBạn là người đáng tin cậy và có trách nhiệm. Bạn giữ lời hứa tốt và giúp đỡ khi cần thiết. Mặc dù không hoàn hảo, nhưng nỗ lực hết mình của bạn tạo ra niềm tin. Bạn là sự hiện diện vững chắc cho những người xung quanh với độ tin cậy cân bằng. Bạn là kiểu người thực tế và lý tưởng nhất.",
      id: "Selalu ada di samping! Teman yang dapat diandalkan\n\nAnda adalah orang yang dapat dipercaya dan bertanggung jawab. Anda menepati janji dengan baik dan membantu saat dibutuhkan. Meskipun tidak sempurna, upaya terbaik Anda memberikan kepercayaan. Anda adalah kehadiran yang solid bagi orang-orang di sekitar Anda dengan keandalan yang seimbang. Anda adalah tipe yang paling realistis dan ideal."
    },
    pros: [
      { 
        ko: "균형감",
        en: "Balance",
        ja: "バランス感覚",
        'zh-CN': "平衡感",
        'zh-TW': "平衡感",
        vi: "Cảm giác cân bằng",
        id: "Keseimbangan"
      },
      { 
        ko: "현실적",
        en: "Realistic",
        ja: "現実的",
        'zh-CN': "现实",
        'zh-TW': "現實",
        vi: "Thực tế",
        id: "Realistis"
      },
      { 
        ko: "노력",
        en: "Effort",
        ja: "努力",
        'zh-CN': "努力",
        'zh-TW': "努力",
        vi: "Nỗ lực",
        id: "Usaha"
      },
      { 
        ko: "신뢰",
        en: "Trust",
        ja: "信頼",
        'zh-CN': "信任",
        'zh-TW': "信任",
        vi: "Niềm tin",
        id: "Kepercayaan"
      }
    ],
    cons: [
      { 
        ko: "가끔 부담감",
        en: "Sometimes burdened",
        ja: "時々負担感",
        'zh-CN': "有时有负担感",
        'zh-TW': "有時有負擔感",
        vi: "Đôi khi cảm thấy áp lực",
        id: "Kadang merasa terbebani"
      },
      { 
        ko: "완벽하지 않음",
        en: "Not perfect",
        ja: "完璧ではない",
        'zh-CN': "不完美",
        'zh-TW': "不完美",
        vi: "Không hoàn hảo",
        id: "Tidak sempurna"
      }
    ],
    advice: {
      ko: "지금처럼만 하면 완벽해요. 무리하지 않으면서도 믿음직한 당신이 최고입니다!",
      en: "You're perfect just as you are. You're the best - reliable without overexerting yourself!",
      ja: "今のままで完璧です。無理せずに信頼できるあなたが最高です！",
      'zh-CN': "保持现状就很完美。不勉强自己却值得信赖的你是最好的！",
      'zh-TW': "保持現狀就很完美。專勉強自己卻值得信賴的你是最好的！",
      vi: "Bạn hoàn hảo như bây giờ. Bạn là tốt nhất - đáng tin cậy mà không cần gắng sức!",
      id: "Anda sempurna apa adanya. Anda yang terbaik - dapat dipercaya tanpa memaksakan diri!"
    },
    trustScore: "★★★★☆ (4/5)",
    compatibility: {
      best: ["Type2"],
      good: ["Type1", "Type3"],
      careful: ["Type5"]
    }
  },
  {
    type: "Type3",
    emoji: "💪",
    title: {
      ko: "노력하는 책임형",
      en: "Effortful Responsibility Type",
      ja: "努力する責任型",
      'zh-CN': "努力负责型",
      'zh-TW': "努力負責型",
      vi: "Kiểu trách nhiệm nỗ lực",
      id: "Tipe Tanggung Jawab yang Berusaha"
    },
    description: {
      ko: "의도는 좋아! 최선을 다하는 사람\n\n책임감 있으려고 노력하지만 가끔 실수합니다. 진심은 있지만 능력이 따라가지 않을 때가 있습니다. 약속을 지키려고 애쓰고, 비밀도 지키려 노력합니다. 성장하고 있는 단계로, 조금만 더 노력하면 완전히 믿음직한 사람이 될 수 있습니다.",
      en: "Good intentions! Someone who does their best\n\nYou try to be responsible but sometimes make mistakes. You have sincerity but sometimes your abilities don't keep up. You work hard to keep promises and try to keep secrets. You're in a growing stage, and with a little more effort, you can become a completely trustworthy person.",
      ja: "意図は良い！最善を尽くす人\n\n責任感を持とうと努力しますが、時々失敗します。真心はありますが、能力が追いつかない時があります。約束を守ろうと努力し、秘密も守ろうと努力します。成長段階にあり、もう少し努力すれば完全に信頼できる人になることができます。",
      'zh-CN': "意图很好！尽力而为的人\n\n你努力承担责任，但有时会犯错误。你有诚意，但有时能力跟不上。你努力遵守承诺，努力保守秘密。你处于成长阶段，只要再努力一点，就能成为完全值得信赖的人。",
      'zh-TW': "意圖很好！盡力而為的人\n\n你努力承擔責任，但有時會犯錯誤。你有誠意，但有時能力跟不上。你努力遵守承諾，努力保守秘密。你處於成長階段，只要再努力一點，就能成為完全值得信賴的人。",
      vi: "Ý định tốt! Người luôn cố gắng hết sức\n\nBạn cố gắng có trách nhiệm nhưng đôi khi mắc lỗi. Bạn có sự chân thành nhưng đôi khi khả năng không theo kịp. Bạn nỗ lực giữ lời hứa và cố gắng giữ bí mật. Bạn đang trong giai đoạn phát triển, chỉ cần nỗ lực thêm một chút nữa, bạn có thể trở thành một người hoàn toàn đáng tin cậy.",
      id: "Niat baik! Seseorang yang berusaha sebaik mungkin\n\nAnda mencoba bertanggung jawab tetapi kadang-kadang membuat kesalahan. Anda memiliki ketulusan tetapi kadang-kadang kemampuan tidak mengikuti. Anda berusaha keras untuk menepati janji dan berusaha menjaga rahasia. Anda berada dalam tahap pertumbuhan, dan dengan sedikit usaha lagi, Anda dapat menjadi orang yang sepenuhnya dapat dipercaya."
    },
    pros: [
      { 
        ko: "진심",
        en: "Sincerity",
        ja: "真心",
        'zh-CN': "真诚",
        'zh-TW': "真誠",
        vi: "Chân thành",
        id: "Ketulusan"
      },
      { 
        ko: "노력",
        en: "Effort",
        ja: "努力",
        'zh-CN': "努力",
        'zh-TW': "努力",
        vi: "Nỗ lực",
        id: "Usaha"
      },
      { 
        ko: "성장",
        en: "Growth",
        ja: "成長",
        'zh-CN': "成长",
        'zh-TW': "成長",
        vi: "Phát triển",
        id: "Pertumbuhan"
      },
      { 
        ko: "착함",
        en: "Kindness",
        ja: "優しさ",
        'zh-CN': "善良",
        'zh-TW': "善良",
        vi: "Tốt bụng",
        id: "Kebaikan"
      }
    ],
    cons: [
      { 
        ko: "실수 많음",
        en: "Many mistakes",
        ja: "ミスが多い",
        'zh-CN': "错误很多",
        'zh-TW': "錯誤很多",
        vi: "Nhiều lỗi lầm",
        id: "Banyak kesalahan"
      },
      { 
        ko: "능력 부족",
        en: "Lack of ability",
        ja: "能力不足",
        'zh-CN': "能力不足",
        'zh-TW': "能力不足",
        vi: "Thiếu năng lực",
        id: "Kurang kemampuan"
      },
      { 
        ko: "불안정",
        en: "Unstable",
        ja: "不安定",
        'zh-CN': "不稳定",
        'zh-TW': "不穩定",
        vi: "Không ổn định",
        id: "Tidak stabil"
      }
    ],
    advice: {
      ko: "의도는 좋아요! 실천력을 키우고 메모 습관을 들이면 더 믿음직해질 거예요.",
      en: "Your intentions are good! You'll become more reliable by improving your execution skills and developing memo habits.",
      ja: "意図は良いです！実行力を高めてメモの習慣を身につければ、より信頼できるようになります。",
      'zh-CN': "你的意图很好！通过提高执行力和养成记录习惯，你会变得更可靠。",
      'zh-TW': "你的意圖很好！通過提高執行力和養成記錄習慣，你會變得更可靠。",
      vi: "Ý định của bạn tốt! Bạn sẽ trở nên đáng tin cậy hơn bằng cách cải thiện kỹ năng thực hiện và phát triển thói quen ghi chú.",
      id: "Niat Anda baik! Anda akan menjadi lebih dapat dipercaya dengan meningkatkan keterampilan eksekusi dan mengembangkan kebiasaan mencatat."
    },
    trustScore: "★★★☆☆ (3/5)",
    compatibility: {
      best: ["Type2"],
      good: ["Type3"],
      careful: ["Type1"]
    }
  },
  {
    type: "Type4",
    emoji: "🦋",
    title: {
      ko: "자유로운 영혼형",
      en: "Free Spirit Type",
      ja: "自由な魂型",
      'zh-CN': "自由灵魂型",
      'zh-TW': "自由靈魂型",
      vi: "Kiểu linh hồn tự do",
      id: "Tipe Jiwa Bebas"
    },
    description: {
      ko: "구속 싫어! 가벼운 관계를 선호하는 자유인\n\n약속이나 책임이 부담스러운 타입입니다. 자유롭게 살고 싶어하고 얽매이는 걸 싫어합니다. 신뢰를 주기보단 편한 관계를 원합니다. 중요한 일을 맡기긴 어렵지만 가벼운 친구로는 좋습니다. 책임감을 조금만 키우면 관계가 더 깊어질 수 있습니다.",
      en: "Hate restrictions! A free person who prefers light relationships\n\nYou find promises and responsibilities burdensome. You want to live freely and hate being tied down. You prefer comfortable relationships over building trust. While it's hard to entrust important matters to you, you're good as a light friend. If you develop just a little more responsibility, relationships can become deeper.",
      ja: "束縛嫌い！軽い関係を好む自由人\n\n約束や責任が負担になるタイプです。自由に生きたいと思い、縛られることを嫌います。信頼を築くよりも楽な関係を求めます。重要なことを任せるのは難しいですが、軽い友人としては良いです。責任感を少し育てれば、関係はより深くなることができます。",
      'zh-CN': "讨厌束缚！喜欢轻松关系的自由人\n\n你觉得承诺和责任是负担。你想自由地生活，讨厌被束缚。你更喜欢舒适的关系而不是建立信任。虽然很难把重要的事情托付给你，但作为轻松的朋友你是很好的。如果你能培养多一点责任感，关系就会变得更深。",
      'zh-TW': "討厭束縛！喜歡輕鬆關係的自由人\n\n你覺得承諾和責任是負擔。你想自由地生活，討厭被束縛。你更喜歡舒適的關係而不是建立信任。雖然很難把重要的事情託付給你，但作為輕鬆的朋友你是很好的。如果你能培養多一點責任感，關係就會變得更深。",
      vi: "Ghét ràng buộc! Người tự do thích những mối quan hệ nhẹ nhàng\n\nBạn cảm thấy lời hứa và trách nhiệm là gánh nặng. Bạn muốn sống tự do và ghét bị ràng buộc. Bạn thích những mối quan hệ thoải mái hơn là xây dựng niềm tin. Mặc dù khó có thể giao phó những việc quan trọng cho bạn, nhưng bạn là một người bạn nhẹ nhàng tốt. Nếu bạn phát triển thêm một chút trách nhiệm, các mối quan hệ có thể trở nên sâu sắc hơn.",
      id: "Benci pembatasan! Orang bebas yang menyukai hubungan ringan\n\nAnda merasa janji dan tanggung jawab adalah beban. Anda ingin hidup bebas dan benci dibatasi. Anda lebih suka hubungan yang nyaman daripada membangun kepercayaan. Meskipun sulit mempercayakan hal-hal penting kepada Anda, Anda adalah teman yang baik untuk hubungan ringan. Jika Anda mengembangkan sedikit lebih banyak tanggung jawab, hubungan dapat menjadi lebih dalam."
    },
    pros: [
      { 
        ko: "자유로움",
        en: "Freedom",
        ja: "自由さ",
        'zh-CN': "自由",
        'zh-TW': "自由",
        vi: "Tự do",
        id: "Kebebasan"
      },
      { 
        ko: "부담 없음",
        en: "No burden",
        ja: "負担がない",
        'zh-CN': "无负担",
        'zh-TW': "無負擔",
        vi: "Không có gánh nặng",
        id: "Tidak ada beban"
      },
      { 
        ko: "솔직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        vi: "Thành thật",
        id: "Kejujuran"
      }
    ],
    cons: [
      { 
        ko: "책임감 부족",
        en: "Lack of responsibility",
        ja: "責任感の欠如",
        'zh-CN': "缺乏责任感",
        'zh-TW': "缺乏責任感",
        vi: "Thiếu trách nhiệm",
        id: "Kurang tanggung jawab"
      },
      { 
        ko: "신뢰 어려움",
        en: "Difficulty trusting",
        ja: "信頼の困難",
        'zh-CN': "难以信任",
        'zh-TW': "難以信任",
        vi: "Khó tin tưởng",
        id: "Sulit dipercaya"
      },
      { 
        ko: "의존 불가",
        en: "Cannot depend on",
        ja: "依存できない",
        'zh-CN': "不可依赖",
        'zh-TW': "不可依賴",
        vi: "Không thể phụ thuộc",
        id: "Tidak dapat diandalkan"
      }
    ],
    advice: {
      ko: "자유도 좋지만 작은 약속부터 지켜보세요. 신뢰는 관계를 더 깊게 만듭니다!",
      en: "Freedom is good, but start by keeping small promises. Trust makes relationships deeper!",
      ja: "自由も良いですが、小さな約束から守ってみてください。信頼は関係をより深くします！",
      'zh-CN': "自由很好，但从小承诺开始遵守。信任让关系更深入！",
      'zh-TW': "自由很好，但從小承諾開始遵守。信任讓關係更深入！",
      vi: "Tự do cũng tốt, nhưng hãy bắt đầu bằng việc giữ những lời hứa nhỏ. Niềm tin làm cho mối quan hệ sâu sắc hơn!",
      id: "Kebebasan itu baik, tapi mulailah dengan menepati janji kecil. Kepercayaan membuat hubungan lebih dalam!"
    },
    trustScore: "★★☆☆☆ (2/5)",
    compatibility: {
      best: ["Type4"],
      good: ["Type5"],
      careful: ["Type1"]
    }
  },
  {
    type: "Type5",
    emoji: "😎",
    title: {
      ko: "솔직한 현실형",
      en: "Honest Realist Type",
      ja: "正直な現実型",
      'zh-CN': "诚实现实型",
      'zh-TW': "誠實現實型",
      vi: "Kiểu thực tế thành thật",
      id: "Tipe Realis yang Jujur"
    },
    description: {
      ko: "있는 그대로! 기대는 적게, 실망도 적게\n\n거짓말하지 않고 자신의 한계를 솔직히 인정합니다. \"나 이런 사람이야\"라고 먼저 말해서 기대치를 조절합니다. 못 지킬 약속은 안 하고, 비밀 지킬 자신 없으면 받지 않습니다. 어떤 의미로는 가장 정직한 타입이지만, 깊은 신뢰 관계를 만들기는 어렵습니다.",
      en: "As is! Low expectations, low disappointment\n\nYou don't lie and honestly acknowledge your limitations. You say \"This is who I am\" first to manage expectations. You don't make promises you can't keep, and you don't accept secrets you can't keep. In a way, you're the most honest type, but it's hard to build deep trust relationships.",
      ja: "ありのまま！期待は少なく、失望も少なく\n\n嘘をつかず、自分の限界を正直に認めます。先に「私ってこういう人なの」と言って期待値を調整します。守れない約束はせず、守れない秘密は受けません。ある意味最も正直なタイプですが、深い信頼関係を築くのは難しいです。",
      'zh-CN': "如其所是！期望低，失望也低\n\n不说谎，诚实地承认自己的局限。先说\"我就是这样的人\"来调节期望值。不承诺做不到的事，不接受守不住的秘密。某种意义上是最诚实的类型，但很难建立深度的信任关系。",
      'zh-TW': "如其所是！期望低，失望也低\n\n不說謊，誠實地承認自己的局限。先說\"我就是這樣的人\"來調節期望值。不承諾做不到的事，不接受守不住的秘密。某種意義上是最誠實的類型，但很難建立深度的信任關係。",
      vi: "Như vốn có! Kỳ vọng ít, thất vọng cũng ít\n\nBạn không nói dối và thành thật thừa nhận giới hạn của mình. Bạn nói \"Tôi là người như vậy\" trước để điều chỉnh kỳ vọng. Bạn không hứa những gì không thể giữ và không nhận những bí mật không thể giữ. Theo cách nào đó, bạn là kiểu người thành thật nhất, nhưng khó xây dựng mối quan hệ tin cậy sâu sắc.",
      id: "Apa adanya! Ekspektasi rendah, kekecewaan juga rendah\n\nAnda tidak berbohong dan dengan jujur mengakui keterbatasan Anda. Anda mengatakan \"Saya seperti ini\" terlebih dahulu untuk mengatur ekspektasi. Anda tidak membuat janji yang tidak bisa ditepati, dan tidak menerima rahasia yang tidak bisa dijaga. Dalam arti tertentu, Anda adalah tipe yang paling jujur, tetapi sulit membangun hubungan kepercayaan yang mendalam."
    },
    pros: [
      { 
        ko: "솔직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        vi: "Thành thật",
        id: "Kejujuran"
      },
      { 
        ko: "현실적",
        en: "Realistic",
        ja: "現実的",
        'zh-CN': "现实",
        'zh-TW': "現實",
        vi: "Thực tế",
        id: "Realistis"
      },
      { 
        ko: "정직",
        en: "Integrity",
        ja: "誠実",
        'zh-CN': "正直",
        'zh-TW': "正直",
        vi: "Chính trực",
        id: "Integritas"
      },
      { 
        ko: "기대 조절",
        en: "Expectation control",
        ja: "期待値調整",
        'zh-CN': "期望控制",
        'zh-TW': "期望控制",
        vi: "Kiểm soát kỳ vọng",
        id: "Kontrol ekspektasi"
      }
    ],
    cons: [
      { 
        ko: "노력 부족",
        en: "Lack of effort",
        ja: "努力不足",
        'zh-CN': "努力不足",
        'zh-TW': "努力不足",
        vi: "Thiếu nỗ lực",
        id: "Kurang usaha"
      },
      { 
        ko: "관계 얕음",
        en: "Shallow relationships",
        ja: "関係が浅い",
        'zh-CN': "关系浅薄",
        'zh-TW': "關係淺薄",
        vi: "Mối quan hệ nông cạn",
        id: "Hubungan dangkal"
      },
      { 
        ko: "책임 회피",
        en: "Avoiding responsibility",
        ja: "責任回避",
        'zh-CN': "逃避责任",
        'zh-TW': "逃避責任",
        vi: "Tránh trách nhiệm",
        id: "Menghindari tanggung jawab"
      }
    ],
    advice: {
      ko: "솔직한 건 좋지만 가끔은 도전해보세요. 의외로 해낼 수 있을지도 몰라요!",
      en: "Being honest is good, but try challenging yourself sometimes. You might be able to do it unexpectedly!",
      ja: "正直なのは良いですが、時々挑戦してみてください。意外とできるかもしれません！",
      'zh-CN': "诚实很好，但有时要挑战自己。你可能会意外地成功！",
      'zh-TW': "誠實很好，但有時要挑戰自己。你可能會意外地成功！",
      vi: "Thành thật là tốt, nhưng thỉnh thoảng hãy thử thách bản thân. Bạn có thể làm được một cách bất ngờ!",
      id: "Jujur itu baik, tapi sesekali cobalah tantang diri sendiri. Anda mungkin bisa melakukannya secara tak terduga!"
    },
    trustScore: "★★☆☆☆ (2/5)",
    compatibility: {
      best: ["Type5"],
      good: ["Type4"],
      careful: ["Type1", "Type2"]
    }
  },
  {
    type: "Type6",
    emoji: "🎭",
    title: {
      ko: "변화무쌍 불안형",
      en: "Unpredictable Unstable Type",
      ja: "変化無常不安型",
      'zh-CN': "变化无常不稳定型",
      'zh-TW': "變化無常不穩定型",
      vi: "Kiểu bất ổn thất thường",
      id: "Tipe Tidak Stabil yang Tidak Terduga"
    },
    description: {
      ko: "오늘의 나와 내일의 나는 다르다!\n\n일관성이 없고 예측하기 어려운 타입입니다. 기분이나 상황에 따라 행동이 달라지고, 약속도 잘 잊어버립니다. 나쁜 의도는 없지만 믿기 어렵습니다. 충동적이고 계획성이 없어 중요한 일을 맡기기 힘듭니다. 자기관리와 책임감을 키워야 관계가 개선됩니다.",
      en: "Today's me and tomorrow's me are different!\n\nYou are an inconsistent and unpredictable type. Your behavior changes depending on your mood or situation, and you often forget promises. You don't have bad intentions, but you're hard to trust. You're impulsive and lack planning, making it difficult to entrust important matters to you. You need to develop self-management and responsibility to improve relationships.",
      ja: "今日の私と明日の私は違う！\n\n一貫性がなく、予測しにくいタイプです。気分や状況によって行動が変わり、約束もよく忘れてしまいます。悪意はありませんが、信頼しにくいです。衝動的で計画性がなく、重要なことを任せるのは困難です。自己管理と責任感を育てることで関係が改善されます。",
      'zh-CN': "今天的我和明天的我不一样！\n\n你是不一致和不可预测的类型。你的行为会根据心情或情况而变化，经常忘记承诺。你没有恶意，但很难信任。你冲动且缺乏计划性，很难把重要的事情托付给你。你需要培养自我管理和责任感来改善关系。",
      'zh-TW': "今天的我和明天的我不一樣！\n\n你是不一致和不可預測的類型。你的行為會根據心情或情況而變化，經常忘記承諾。你沒有惡意，但很難信任。你衝動且缺乏計劃性，很難把重要的事情託付給你。你需要培養自我管理和責任感來改善關係。",
      vi: "Tôi hôm nay và tôi ngày mai khác nhau!\n\nBạn là kiểu người không nhất quán và khó dự đoán. Hành vi của bạn thay đổi tùy theo tâm trạng hoặc tình huống, và bạn thường quên lời hứa. Bạn không có ý định xấu, nhưng khó tin tưởng. Bạn bốc đồng và thiếu kế hoạch, khiến việc giao phó những việc quan trọng cho bạn trở nên khó khăn. Bạn cần phát triển khả năng tự quản lý và trách nhiệm để cải thiện các mối quan hệ.",
      id: "Saya hari ini dan saya besok berbeda!\n\nAnda adalah tipe yang tidak konsisten dan tidak dapat diprediksi. Perilaku Anda berubah tergantung pada suasana hati atau situasi, dan Anda sering melupakan janji. Anda tidak memiliki niat buruk, tetapi sulit dipercaya. Anda impulsif dan kurang perencanaan, sehingga sulit untuk mempercayakan hal-hal penting kepada Anda. Anda perlu mengembangkan manajemen diri dan tanggung jawab untuk meningkatkan hubungan."
    },
    pros: [
      { 
        ko: "솔직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        vi: "Thành thật",
        id: "Kejujuran"
      },
      { 
        ko: "자유로움",
        en: "Freedom",
        ja: "自由さ",
        'zh-CN': "自由",
        'zh-TW': "自由",
        vi: "Tự do",
        id: "Kebebasan"
      },
      { 
        ko: "재미",
        en: "Fun",
        ja: "面白さ",
        'zh-CN': "有趣",
        'zh-TW': "有趣",
        vi: "Thú vị",
        id: "Menyenangkan"
      }
    ],
    cons: [
      { 
        ko: "신뢰 불가",
        en: "Cannot be trusted",
        ja: "信頼できない",
        'zh-CN': "不可信任",
        'zh-TW': "不可信任",
        vi: "Không thể tin tưởng",
        id: "Tidak dapat dipercaya"
      },
      { 
        ko: "일관성 없음",
        en: "Inconsistent",
        ja: "一貫性がない",
        'zh-CN': "不一致",
        'zh-TW': "不一致",
        vi: "Không nhất quán",
        id: "Tidak konsisten"
      },
      { 
        ko: "책임감 제로",
        en: "Zero responsibility",
        ja: "責任感ゼロ",
        'zh-CN': "零责任感",
        'zh-TW': "零責任感",
        vi: "Trách nhiệm bằng không",
        id: "Tanggung jawab nol"
      }
    ],
    advice: {
      ko: "작은 것부터 시작해보세요. 약속 메모하고, 알람 맞추고, 한 가지씩 지켜보세요!",
      en: "Start with small things. Make promise memos, set alarms, and keep one thing at a time!",
      ja: "小さなことから始めてみてください。約束をメモして、アラームを設定して、一つずつ守ってみてください！",
      'zh-CN': "从小事开始。记录承诺，设置闹钟，一次坚持一件事！",
      'zh-TW': "從小事開始。記錄承諾，設置鬧鐘，一次堅持一件事！",
      vi: "Hãy bắt đầu từ những việc nhỏ. Ghi chú lời hứa, đặt báo thức, và giữ một việc một lần!",
      id: "Mulailah dengan hal-hal kecil. Catat janji, setel alarm, dan jaga satu hal pada satu waktu!"
    },
    trustScore: "★☆☆☆☆ (1/5)",
    compatibility: {
      best: ["Type6"],
      good: ["Type4"],
      careful: ["Type1", "Type2"]
    }
  }
];

// 신뢰도 테스트 결과 계산 함수
export const calculateTrustResult = (answers: { scores: Record<string, number> }[]): TrustResult => {
  const scores: Record<string, number> = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  answers.forEach((answer, index) => {
    Object.entries(answer.scores).forEach(([type, score]) => {
      scores[type] += score;
    });
  });
  
  // 최고 점수 찾기
  const maxScore = Math.max(...Object.values(scores));
  const topTypes = Object.entries(scores)
    .filter(([, score]) => score === maxScore)
    .map(([type]) => type);
  
  // 동점일 경우 Q10-Q12 우선순위 적용
  if (topTypes.length > 1) {
    const priorityScores: Record<string, number> = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
    
    // Q10-Q12 점수만 계산
    answers.slice(9, 12).forEach((answer) => {
      Object.entries(answer.scores).forEach(([type, score]) => {
        priorityScores[type] += score;
      });
    });
    
    // 우선순위 점수가 높은 타입 선택
    const maxPriorityScore = Math.max(...topTypes.map(type => priorityScores[type]));
    const finalType = topTypes.find(type => priorityScores[type] === maxPriorityScore) || topTypes[0];
    
    return trustResults.find(result => result.type === finalType) || trustResults[0];
  }
  
  return trustResults.find(result => result.type === topTypes[0]) || trustResults[0];
};
