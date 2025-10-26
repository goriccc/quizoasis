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
  shortDescription: Record<string, string>;
  longDescription: Record<string, string>;
  pros: Record<string, string>[];
  cons: Record<string, string>[];
  advice: Record<string, string>;
  reputation: Record<string, string>;
  goodTypes: string[];
  cautionTypes: string[];
}

export const trustQuestions: TrustQuestion[] = [
  {
    id: 1,
    question: {
      ko: "친구와 약속을 잡았는데 급한 일이 생겼습니다. 당신은?",
      en: "You made plans with a friend but something urgent came up. What do you do?",
      ja: "友達と約束をしたが急用ができました。あなたは？",
      'zh-CN': "你和朋友约好了但有急事。你会怎么做？",
      'zh-TW': "你和朋友約好了但有急事。你會怎麼做？",
      id: "Anda membuat janji dengan teman tapi ada hal mendesak. Apa yang Anda lakukan?",
      vi: "Bạn đã hẹn với bạn bè nhưng có việc gấp. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "약속을 지키고 나중에 일 처리",
          en: "Keep the promise and handle work later",
          ja: "約束を守って後で仕事を処理",
          'zh-CN': "遵守约定，稍后处理工作",
          'zh-TW': "遵守約定，稍後處理工作",
          id: "Menepati janji dan menangani pekerjaan nanti",
          vi: "Giữ lời hẹn và xử lý công việc sau"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "친구에게 양해를 구하고 일정 조율",
          en: "Ask friend for understanding and adjust schedule",
          ja: "友達に理解を求めてスケジュール調整",
          'zh-CN': "请求朋友理解并调整日程",
          'zh-TW': "請求朋友理解並調整日程",
          id: "Minta pengertian teman dan sesuaikan jadwal",
          vi: "Xin bạn hiểu và điều chỉnh lịch trình"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "급한 일 먼저 하고 친구에게 연락",
          en: "Handle urgent work first and contact friend",
          ja: "急用を先に処理して友達に連絡",
          'zh-CN': "先处理急事再联系朋友",
          'zh-TW': "先處理急事再聯繫朋友",
          id: "Tangani pekerjaan mendesak dulu dan hubungi teman",
          vi: "Xử lý việc gấp trước rồi liên lạc bạn"
        },
        scores: { Type4: 8, Type3: 2 }
      },
      {
        text: {
          ko: "그냥 약속 취소하고 나중에 사과",
          en: "Just cancel the promise and apologize later",
          ja: "約束をキャンセルして後で謝る",
          'zh-CN': "直接取消约定，稍后道歉",
          'zh-TW': "直接取消約定，稍後道歉",
          id: "Batalkan janji dan minta maaf nanti",
          vi: "Hủy hẹn và xin lỗi sau"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 고민을 털어놓으며 \"아무에게도 말하지 마\"라고 합니다. 당신은?",
      en: "A friend confides in you and says \"don't tell anyone\". What do you do?",
      ja: "友達が悩みを打ち明けて「誰にも言わないで」と言います。あなたは？",
      'zh-CN': "朋友向你倾诉烦恼并说「不要告诉任何人」。你会怎么做？",
      'zh-TW': "朋友向你傾訴煩惱並說「不要告訴任何人」。你會怎麼做？",
      id: "Teman curhat dan berkata \"jangan bilang siapa-siapa\". Apa yang Anda lakukan?",
      vi: "Bạn bè tâm sự và nói \"đừng nói với ai\". Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "무슨 일이 있어도 절대 말 안 함",
          en: "Never tell anyone no matter what",
          ja: "何があっても絶対に言わない",
          'zh-CN': "无论如何绝不告诉任何人",
          'zh-TW': "無論如何絕不告訴任何人",
          id: "Tidak akan bilang siapa-siapa apapun yang terjadi",
          vi: "Không bao giờ nói với ai dù có chuyện gì"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "원칙적으로 안 하지만 필요하면 조언 구함",
          en: "Principally don't but seek advice if needed",
          ja: "原則的には言わないが、必要ならアドバイスを求める",
          'zh-CN': "原则上不说，但需要时会寻求建议",
          'zh-TW': "原則上不說，但需要時會尋求建議",
          id: "Prinsipnya tidak, tapi cari saran jika diperlukan",
          vi: "Nguyên tắc là không, nhưng cần thì xin lời khuyên"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "아주 친한 사람에게만 말함",
          en: "Only tell very close people",
          ja: "とても親しい人にだけ話す",
          'zh-CN': "只告诉非常亲近的人",
          'zh-TW': "只告訴非常親近的人",
          id: "Hanya bilang ke orang yang sangat dekat",
          vi: "Chỉ nói với người rất thân"
        },
        scores: { Type4: 8, Type3: 2 }
      },
      {
        text: {
          ko: "궁금해하면 말해줌",
          en: "Tell if someone is curious",
          ja: "気になったら話す",
          'zh-CN': "好奇的话就告诉",
          'zh-TW': "好奇的話就告訴",
          id: "Bilang jika ada yang penasaran",
          vi: "Tò mò thì nói"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "팀 프로젝트에서 당신에게 주어진 역할은?",
      en: "What is your role in a team project?",
      ja: "チームプロジェクトであなたに与えられた役割は？",
      'zh-CN': "在团队项目中你的角色是什么？",
      'zh-TW': "在團隊項目中你的角色是什麼？",
      id: "Apa peran Anda dalam proyek tim?",
      vi: "Vai trò của bạn trong dự án nhóm là gì?"
    },
    options: [
      {
        text: {
          ko: "항상 완벽하게 끝냄",
          en: "Always complete perfectly",
          ja: "いつも完璧に終わらせる",
          'zh-CN': "总是完美完成",
          'zh-TW': "總是完美完成",
          id: "Selalu menyelesaikan dengan sempurna",
          vi: "Luôn hoàn thành hoàn hảo"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "대체로 잘 해냄",
          en: "Generally do well",
          ja: "だいたいうまくやる",
          'zh-CN': "大体做得很好",
          'zh-TW': "大體做得很好",
          id: "Umumnya melakukan dengan baik",
          vi: "Nhìn chung làm tốt"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "하긴 하는데 가끔 미룸",
          en: "Do it but sometimes procrastinate",
          ja: "やるけど時々先延ばしにする",
          'zh-CN': "会做但有时拖延",
          'zh-TW': "會做但有時拖延",
          id: "Melakukan tapi kadang menunda",
          vi: "Làm nhưng đôi khi trì hoãn"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "다른 사람이 도와줘야 함",
          en: "Need others to help",
          ja: "他の人が手伝う必要がある",
          'zh-CN': "需要别人帮助",
          'zh-TW': "需要別人幫助",
          id: "Perlu bantuan orang lain",
          vi: "Cần người khác giúp đỡ"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "실수로 친구 물건을 망가뜨렸습니다. 당신은?",
      en: "You accidentally broke a friend's item. What do you do?",
      ja: "友達の物を壊してしまいました。あなたは？",
      'zh-CN': "你不小心弄坏了朋友的物品。你会怎么做？",
      'zh-TW': "你不小心弄壞了朋友的物品。你會怎麼做？",
      id: "Tidak sengaja merusak barang teman. Apa yang Anda lakukan?",
      vi: "Vô tình làm hỏng đồ của bạn. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "즉시 말하고 변상",
          en: "Tell immediately and compensate",
          ja: "すぐに言って弁償する",
          'zh-CN': "立即告知并赔偿",
          'zh-TW': "立即告知並賠償",
          id: "Bilang langsung dan ganti rugi",
          vi: "Nói ngay và bồi thường"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "솔직히 말하고 사과",
          en: "Tell honestly and apologize",
          ja: "正直に話して謝る",
          'zh-CN': "诚实告知并道歉",
          'zh-TW': "誠實告知並道歉",
          id: "Jujur bilang dan minta maaf",
          vi: "Thành thật nói và xin lỗi"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "눈치 보다가 들키면 말함",
          en: "Wait and see, tell if caught",
          ja: "様子を見て、バレたら言う",
          'zh-CN': "观察情况，被发现才说",
          'zh-TW': "觀察情況，被發現才說",
          id: "Tunggu dan lihat, bilang jika ketahuan",
          vi: "Chờ xem, bị phát hiện thì nói"
        },
        scores: { Type3: 2, Type4: 2 }
      },
      {
        text: {
          ko: "모르는 척하거나 발뺌",
          en: "Pretend not to know or make excuses",
          ja: "知らないふりをするか言い訳する",
          'zh-CN': "假装不知道或找借口",
          'zh-TW': "假裝不知道或找藉口",
          id: "Pura-pura tidak tahu atau cari alasan",
          vi: "Giả vờ không biết hoặc tìm cớ"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "약속 시간에 늦을 것 같으면?",
      en: "If you're going to be late for an appointment?",
      ja: "約束の時間に遅れそうになったら？",
      'zh-CN': "如果约会要迟到了？",
      'zh-TW': "如果約會要遲到了？",
      id: "Jika akan terlambat untuk janji?",
      vi: "Nếu sắp muộn hẹn?"
    },
    options: [
      {
        text: {
          ko: "미리 연락하고 사과",
          en: "Contact in advance and apologize",
          ja: "事前に連絡して謝る",
          'zh-CN': "提前联系并道歉",
          'zh-TW': "提前聯繫並道歉",
          id: "Kontak sebelumnya dan minta maaf",
          vi: "Liên lạc trước và xin lỗi"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "늦을 때쯤 연락",
          en: "Contact when about to be late",
          ja: "遅れそうな時に連絡",
          'zh-CN': "快迟到时联系",
          'zh-TW': "快遲到時聯繫",
          id: "Kontak saat akan terlambat",
          vi: "Liên lạc khi sắp muộn"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "도착해서 사과",
          en: "Apologize when arriving",
          ja: "到着してから謝る",
          'zh-CN': "到达后道歉",
          'zh-TW': "到達後道歉",
          id: "Minta maaf saat tiba",
          vi: "Xin lỗi khi đến nơi"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "늦는 걸 대수롭지 않게 생각",
          en: "Don't think being late is a big deal",
          ja: "遅れることを大したことだと思わない",
          'zh-CN': "不把迟到当回事",
          'zh-TW': "不把遲到當回事",
          id: "Tidak menganggap terlambat sebagai masalah besar",
          vi: "Không coi việc muộn là vấn đề lớn"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "누군가 당신에게 돈을 빌려달라고 하면?",
      en: "If someone asks you to lend them money?",
      ja: "誰かがあなたにお金を貸してほしいと言ったら？",
      'zh-CN': "如果有人向你借钱？",
      'zh-TW': "如果有人向你借錢？",
      id: "Jika seseorang meminta Anda meminjamkan uang?",
      vi: "Nếu ai đó xin bạn cho mượn tiền?"
    },
    options: [
      {
        text: {
          ko: "빌려주면 돌려받을 때까지 기억함",
          en: "Remember until they pay back if I lend",
          ja: "貸したら返してもらうまで覚えている",
          'zh-CN': "借出后记住直到还钱",
          'zh-TW': "借出後記住直到還錢",
          id: "Ingat sampai mereka bayar kembali jika saya pinjamkan",
          vi: "Nhớ cho đến khi họ trả lại nếu tôi cho mượn"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "빌려주고 돌려주면 받음",
          en: "Lend and accept when they return",
          ja: "貸して返されたら受け取る",
          'zh-CN': "借出，还了就接受",
          'zh-TW': "借出，還了就接受",
          id: "Pinjamkan dan terima saat mereka kembalikan",
          vi: "Cho mượn và nhận khi họ trả lại"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "빌려주고 그냥 있음",
          en: "Lend and just leave it",
          ja: "貸してそのままにしておく",
          'zh-CN': "借出后就不管了",
          'zh-TW': "借出後就不管了",
          id: "Pinjamkan dan biarkan begitu saja",
          vi: "Cho mượn và để vậy"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "거의 안 빌려줌",
          en: "Almost never lend",
          ja: "ほとんど貸さない",
          'zh-CN': "几乎不借",
          'zh-TW': "幾乎不借",
          id: "Hampir tidak pernah meminjamkan",
          vi: "Hầu như không cho mượn"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "회사에서 중요한 업무를 맡겼습니다. 당신은?",
      en: "You've been given important work at the company. What do you do?",
      ja: "会社で重要な業務を任されました。あなたは？",
      'zh-CN': "公司给你重要工作。你会怎么做？",
      'zh-TW': "公司給你重要工作。你會怎麼做？",
      id: "Anda diberi tugas penting di perusahaan. Apa yang Anda lakukan?",
      vi: "Bạn được giao công việc quan trọng ở công ty. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "마감 전에 여유있게 완성",
          en: "Complete comfortably before deadline",
          ja: "締切前に余裕を持って完成",
          'zh-CN': "截止日期前轻松完成",
          'zh-TW': "截止日期前輕鬆完成",
          id: "Selesaikan dengan nyaman sebelum tenggat",
          vi: "Hoàn thành thoải mái trước hạn"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "마감 맞춰서 제출",
          en: "Submit right at deadline",
          ja: "締切に合わせて提出",
          'zh-CN': "正好在截止日期提交",
          'zh-TW': "正好在截止日期提交",
          id: "Kirim tepat pada tenggat waktu",
          vi: "Nộp đúng hạn"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "마감 조금 넘기지만 완성",
          en: "Slightly past deadline but complete",
          ja: "締切を少し過ぎるが完成",
          'zh-CN': "稍微超过截止日期但完成",
          'zh-TW': "稍微超過截止日期但完成",
          id: "Sedikit lewat tenggat tapi selesai",
          vi: "Hơi quá hạn nhưng hoàn thành"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "자주 연장 요청하거나 미완성",
          en: "Frequently request extensions or incomplete",
          ja: "よく延長を依頼したり未完成",
          'zh-CN': "经常请求延期或未完成",
          'zh-TW': "經常請求延期或未完成",
          id: "Sering minta perpanjangan atau tidak selesai",
          vi: "Thường xin gia hạn hoặc chưa hoàn thành"
        },
        scores: { Type6: 8, Type5: 2 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "친구가 \"내일 도와줄 수 있어?\"라고 물으면?",
      en: "If a friend asks \"can you help me tomorrow?\"?",
      ja: "友達が「明日手伝ってくれる？」と聞いたら？",
      'zh-CN': "如果朋友问「明天能帮我吗？」？",
      'zh-TW': "如果朋友問「明天能幫我嗎？」？",
      id: "Jika teman bertanya \"besok bisa bantu?\"?",
      vi: "Nếu bạn hỏi \"ngày mai có thể giúp tôi không?\"?"
    },
    options: [
      {
        text: {
          ko: "가능하면 \"응\", 안 되면 \"안 돼\"",
          en: "Say \"yes\" if possible, \"no\" if not",
          ja: "可能なら「うん」、無理なら「ダメ」",
          'zh-CN': "可能就说「好」，不行就说「不行」",
          'zh-TW': "可能就說「好」，不行就說「不行」",
          id: "Bilang \"ya\" jika bisa, \"tidak\" jika tidak",
          vi: "Nói \"có\" nếu được, \"không\" nếu không"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "일단 \"응\" 하고 나중에 조율",
          en: "Say \"yes\" first and coordinate later",
          ja: "とりあえず「うん」と言って後で調整",
          'zh-CN': "先说「好」然后稍后协调",
          'zh-TW': "先說「好」然後稍後協調",
          id: "Bilang \"ya\" dulu dan koordinasi nanti",
          vi: "Nói \"có\" trước rồi điều chỉnh sau"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"응\" 했는데 까먹거나 못 감",
          en: "Say \"yes\" but forget or can't go",
          ja: "「うん」と言ったが忘れたり行けない",
          'zh-CN': "说「好」但忘记或去不了",
          'zh-TW': "說「好」但忘記或去不了",
          id: "Bilang \"ya\" tapi lupa atau tidak bisa",
          vi: "Nói \"có\" nhưng quên hoặc không đi được"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "자주 \"응\" 했다가 안 감",
          en: "Often say \"yes\" but don't go",
          ja: "よく「うん」と言うが行かない",
          'zh-CN': "经常说「好」但不去",
          'zh-TW': "經常說「好」但不去",
          id: "Sering bilang \"ya\" tapi tidak pergi",
          vi: "Thường nói \"có\" nhưng không đi"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "거짓말에 대한 당신의 생각은?",
      en: "What do you think about lying?",
      ja: "嘘についてあなたの考えは？",
      'zh-CN': "你对说谎的看法是？",
      'zh-TW': "你對說謊的看法是？",
      id: "Apa pendapat Anda tentang berbohong?",
      vi: "Bạn nghĩ gì về việc nói dối?"
    },
    options: [
      {
        text: {
          ko: "절대 안 함",
          en: "Never do it",
          ja: "絶対にしない",
          'zh-CN': "绝对不做",
          'zh-TW': "絕對不做",
          id: "Tidak pernah melakukannya",
          vi: "Không bao giờ làm"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "필요악으로 가끔 함",
          en: "Sometimes do it as necessary evil",
          ja: "必要悪として時々する",
          'zh-CN': "作为必要之恶偶尔做",
          'zh-TW': "作為必要之惡偶爾做",
          id: "Kadang melakukannya sebagai kejahatan yang diperlukan",
          vi: "Đôi khi làm như điều ác cần thiết"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "상황에 따라 자주 함",
          en: "Do it frequently depending on situation",
          ja: "状況によってよくする",
          'zh-CN': "根据情况经常做",
          'zh-TW': "根據情況經常做",
          id: "Sering melakukannya tergantung situasi",
          vi: "Thường làm tùy theo tình huống"
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "큰 문제 아니라고 생각",
          en: "Don't think it's a big problem",
          ja: "大した問題だと思わない",
          'zh-CN': "不认为是大问题",
          'zh-TW': "不認為是大問題",
          id: "Tidak menganggapnya masalah besar",
          vi: "Không coi là vấn đề lớn"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "다른 사람의 비밀을 알게 되었습니다. 당신은?",
      en: "You found out someone else's secret. What do you do?",
      ja: "他の人の秘密を知ってしまいました。あなたは？",
      'zh-CN': "你知道了别人的秘密。你会怎么做？",
      'zh-TW': "你知道了別人的秘密。你會怎麼做？",
      id: "Anda mengetahui rahasia orang lain. Apa yang Anda lakukan?",
      vi: "Bạn biết bí mật của người khác. Bạn sẽ làm gì?"
    },
    options: [
      {
        text: {
          ko: "무덤까지 가져감",
          en: "Take it to the grave",
          ja: "墓場まで持っていく",
          'zh-CN': "带到坟墓",
          'zh-TW': "帶到墳墓",
          id: "Bawa ke kuburan",
          vi: "Mang theo đến mộ"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "원칙적으로 지킴",
          en: "Keep it in principle",
          ja: "原則的に守る",
          'zh-CN': "原则上保守",
          'zh-TW': "原則上保守",
          id: "Prinsipnya dijaga",
          vi: "Nguyên tắc là giữ"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "친한 사람에게는 말함",
          en: "Tell close people",
          ja: "親しい人には話す",
          'zh-CN': "告诉亲近的人",
          'zh-TW': "告訴親近的人",
          id: "Bilang ke orang dekat",
          vi: "Nói với người thân"
        },
        scores: { Type4: 8, Type3: 2 }
      },
      {
        text: {
          ko: "재미있으면 말함",
          en: "Tell if it's interesting",
          ja: "面白ければ話す",
          'zh-CN': "有趣就说",
          'zh-TW': "有趣就說",
          id: "Bilang jika menarik",
          vi: "Thú vị thì nói"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신이 한 말은?",
      en: "What about the words you say?",
      ja: "あなたが言った言葉は？",
      'zh-CN': "你说的话呢？",
      'zh-TW': "你說的話呢？",
      id: "Bagaimana dengan kata-kata yang Anda ucapkan?",
      vi: "Những lời bạn nói thì sao?"
    },
    options: [
      {
        text: {
          ko: "반드시 지킴",
          en: "Always keep them",
          ja: "必ず守る",
          'zh-CN': "一定遵守",
          'zh-TW': "一定遵守",
          id: "Selalu menepatinya",
          vi: "Luôn giữ lời"
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "거의 지킴",
          en: "Almost always keep them",
          ja: "ほとんど守る",
          'zh-CN': "几乎都遵守",
          'zh-TW': "幾乎都遵守",
          id: "Hampir selalu menepatinya",
          vi: "Hầu như luôn giữ lời"
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "지키려 하지만 가끔 못 지킴",
          en: "Try to keep but sometimes can't",
          ja: "守ろうとするが時々守れない",
          'zh-CN': "想遵守但有时做不到",
          'zh-TW': "想遵守但有時做不到",
          id: "Berusaha menepati tapi kadang tidak bisa",
          vi: "Cố gắng giữ lời nhưng đôi khi không được"
        },
        scores: { Type4: 8, Type3: 2 }
      },
      {
        text: {
          ko: "말만 하고 안 지킬 때 많음",
          en: "Often just talk without keeping",
          ja: "言うだけで守らないことが多い",
          'zh-CN': "经常只是说说不遵守",
          'zh-TW': "經常只是說說不遵守",
          id: "Sering hanya bicara tanpa menepati",
          vi: "Thường chỉ nói mà không giữ lời"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "누군가 당신을 소개할 때 하는 말은?",
      en: "What do people say when introducing you?",
      ja: "誰かがあなたを紹介する時、何と言う？",
      'zh-CN': "别人介绍你时会说什么？",
      'zh-TW': "別人介紹你時會說什麼？",
      id: "Apa yang orang katakan saat memperkenalkan Anda?",
      vi: "Người khác giới thiệu bạn sẽ nói gì?"
    },
    options: [
      {
        text: {
          ko: "\"정말 믿을 수 있는 사람\"",
          en: "\"Really trustworthy person\"",
          ja: "「本当に信頼できる人」",
          'zh-CN': "「真正值得信赖的人」",
          'zh-TW': "「真正值得信賴的人」",
          id: "\"Orang yang benar-benar bisa dipercaya\"",
          vi: "\"Người thực sự đáng tin cậy\""
        },
        scores: { Type1: 3 }
      },
      {
        text: {
          ko: "\"괜찮은 사람\"",
          en: "\"Good person\"",
          ja: "「いい人」",
          'zh-CN': "「好人」",
          'zh-TW': "「好人」",
          id: "\"Orang yang baik\"",
          vi: "\"Người tốt\""
        },
        scores: { Type2: 3 }
      },
      {
        text: {
          ko: "\"그럭저럭 괜찮음\"",
          en: "\"So-so okay\"",
          ja: "「まあまあいい」",
          'zh-CN': "「还算可以」",
          'zh-TW': "「還算可以」",
          id: "\"Lumayan baik\"",
          vi: "\"Tạm được\""
        },
        scores: { Type3: 8, Type4: 2 }
      },
      {
        text: {
          ko: "\"재미있지만...\" 뒤에 뭔가 붙음",
          en: "\"Fun but...\" something follows",
          ja: "「面白いけど...」何かが続く",
          'zh-CN': "「有趣但是...」后面有东西",
          'zh-TW': "「有趣但是...」後面有東西",
          id: "\"Menyenangkan tapi...\" ada yang mengikuti",
          vi: "\"Thú vị nhưng...\" có gì đó theo sau"
        },
        scores: { Type5: 8, Type6: 2 }
      }
    ]
  }
];

export const trustResults: TrustResult[] = [
  {
    type: "Type1",
    emoji: "🏆",
    title: {
      ko: "절대 신뢰형",
      en: "Absolute Trust Type",
      ja: "絶対信頼型",
      'zh-CN': "绝对信任型",
      'zh-TW': "絕對信任型",
      id: "Tipe Kepercayaan Mutlak",
      vi: "Kiểu Tin Tưởng Tuyệt Đối"
    },
    shortDescription: {
      ko: "100% 신뢰! 당신은 사람들의 든든한 바위입니다",
      en: "100% Trust! You are people's solid rock",
      ja: "100%信頼！あなたは人々の頼もしい岩です",
      'zh-CN': "100%信任！你是人们坚实的依靠",
      'zh-TW': "100%信任！你是人們堅實的依靠",
      id: "100% Kepercayaan! Anda adalah batu karang yang kokoh bagi orang-orang",
      vi: "100% Tin tưởng! Bạn là tảng đá vững chắc của mọi người"
    },
    longDescription: {
      ko: "당신은 완벽하게 신뢰할 수 있는 사람입니다. 약속은 반드시 지키고, 비밀은 무덤까지 가져가며, 맡은 일은 책임지고 완수합니다. 거짓말을 하지 않고 정직하며, 누구나 당신을 믿고 의지합니다. 리더, 친구, 동료로서 최고의 평가를 받습니다.",
      en: "You are a perfectly trustworthy person. You keep promises, take secrets to the grave, and take responsibility for completing assigned tasks. You don't lie and are honest, and everyone trusts and relies on you. You receive the highest evaluation as a leader, friend, and colleague.",
      ja: "あなたは完璧に信頼できる人です。約束は必ず守り、秘密は墓場まで持っていき、任された仕事は責任を持って完遂します。嘘をつかず正直で、誰もがあなたを信頼し頼りにします。リーダー、友人、同僚として最高の評価を受けます。",
      'zh-CN': "你是一个完全值得信赖的人。遵守承诺，保守秘密到坟墓，负责任地完成分配的任务。不说谎且诚实，每个人都信任和依赖你。作为领导者、朋友、同事，你获得最高评价。",
      'zh-TW': "你是一個完全值得信賴的人。遵守承諾，保守秘密到墳墓，負責任地完成分配的任務。不說謊且誠實，每個人都信任和依賴你。作為領導者、朋友、同事，你獲得最高評價。",
      id: "Anda adalah orang yang dapat dipercaya dengan sempurna. Anda menepati janji, membawa rahasia ke kuburan, dan bertanggung jawab menyelesaikan tugas yang diberikan. Anda tidak berbohong dan jujur, dan semua orang mempercayai dan mengandalkan Anda. Anda menerima evaluasi tertinggi sebagai pemimpin, teman, dan rekan kerja.",
      vi: "Bạn là người hoàn toàn đáng tin cậy. Bạn giữ lời hứa, mang bí mật đến mộ, và có trách nhiệm hoàn thành nhiệm vụ được giao. Bạn không nói dối và trung thực, mọi người đều tin tưởng và dựa vào bạn. Bạn nhận được đánh giá cao nhất với tư cách là lãnh đạo, bạn bè và đồng nghiệp."
    },
    pros: [
      { 
        ko: "완벽한 신뢰성",
        en: "Perfect reliability",
        ja: "完璧な信頼性",
        'zh-CN': "完美的可靠性",
        'zh-TW': "完美的可靠性",
        id: "Keandalan sempurna",
        vi: "Độ tin cậy hoàn hảo"
      },
      { 
        ko: "책임감",
        en: "Responsibility",
        ja: "責任感",
        'zh-CN': "责任感",
        'zh-TW': "責任感",
        id: "Tanggung jawab",
        vi: "Trách nhiệm"
      },
      {
        ko: "정직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        id: "Kejujuran",
        vi: "Trung thực"
      },
      { 
        ko: "일관성",
        en: "Consistency",
        ja: "一貫性",
        'zh-CN': "一致性",
        'zh-TW': "一致性",
        id: "Konsistensi",
        vi: "Tính nhất quán"
      }
    ],
    cons: [
      {
        ko: "때로 부담감",
        en: "Sometimes burden",
        ja: "時々負担感",
        'zh-CN': "有时负担",
        'zh-TW': "有時負擔",
        id: "Kadang beban",
        vi: "Đôi khi gánh nặng"
      },
      { 
        ko: "완벽주의 스트레스",
        en: "Perfectionist stress",
        ja: "完璧主義ストレス",
        'zh-CN': "完美主义压力",
        'zh-TW': "完美主義壓力",
        id: "Stres perfeksionis",
        vi: "Căng thẳng hoàn hảo"
      }
    ],
    advice: {
      ko: "완벽하지만 가끔은 자신에게도 관대하세요!",
      en: "Perfect but sometimes be generous to yourself too!",
      ja: "完璧ですが、時には自分にも寛大にしてください！",
      'zh-CN': "完美但有时也要对自己宽容！",
      'zh-TW': "完美但有時也要對自己寬容！",
      id: "Sempurna tapi kadang-kadang juga murah hati pada diri sendiri!",
      vi: "Hoàn hảo nhưng đôi khi cũng hãy khoan dung với chính mình!"
    },
    reputation: {
      ko: "\"저 사람 말이면 믿을 수 있어\"",
      en: "\"You can trust what that person says\"",
      ja: "\"あの人の言うことなら信じられる\"",
      'zh-CN': "\"那个人的话可以相信\"",
      'zh-TW': "\"那個人的話可以相信\"",
      id: "\"Kata orang itu bisa dipercaya\"",
      vi: "\"Lời người đó có thể tin được\""
    },
    goodTypes: ["Type1", "Type2"],
    cautionTypes: ["Type6"]
  },
  {
    type: "Type2",
    emoji: "🌟",
    title: {
      ko: "높은 신뢰형",
      en: "High Trust Type",
      ja: "高い信頼型",
      'zh-CN': "高信任型",
      'zh-TW': "高信任型",
      id: "Tipe Kepercayaan Tinggi",
      vi: "Kiểu Tin Tưởng Cao"
    },
    shortDescription: {
      ko: "90% 신뢰! 대부분 믿을 수 있는 사람",
      en: "90% Trust! Mostly trustworthy person",
      ja: "90%信頼！ほとんどの場合信頼できる人",
      'zh-CN': "90%信任！大部分值得信赖的人",
      'zh-TW': "90%信任！大部分值得信賴的人",
      id: "90% Kepercayaan! Orang yang sebagian besar bisa dipercaya",
      vi: "90% Tin tưởng! Người hầu hết đáng tin cậy"
    },
    longDescription: {
      ko: "당신은 매우 믿음직한 사람입니다. 거의 모든 약속을 지키고 비밀을 잘 지킵니다. 책임감이 있고 정직한 편입니다. 가끔 작은 실수는 있지만 전반적으로 신뢰할 수 있습니다. 사람들이 당신을 믿고 중요한 일을 맡깁니다.",
      en: "You are a very reliable person. You keep almost all promises and keep secrets well. You have a sense of responsibility and are honest. You occasionally make small mistakes, but overall you are trustworthy. People trust you and entrust you with important tasks.",
      ja: "あなたは非常に信頼できる人です。ほぼすべての約束を守り、秘密をよく守ります。責任感があり、正直な方です。時々小さなミスはありますが、全体的に信頼できます。人々はあなたを信頼し、重要な仕事を任せます。",
      'zh-CN': "你是一个非常可靠的人。你遵守几乎所有承诺并很好地保守秘密。你有责任感且诚实。偶尔会有小错误，但总体上值得信赖。人们信任你并委托你重要任务。",
      'zh-TW': "你是一個非常可靠的人。你遵守幾乎所有承諾並很好地保守秘密。你有責任感且誠實。偶爾會有小錯誤，但總體上值得信賴。人們信任你並委託你重要任務。",
      id: "Anda adalah orang yang sangat dapat diandalkan. Anda menepati hampir semua janji dan menjaga rahasia dengan baik. Anda memiliki rasa tanggung jawab dan jujur. Anda sesekali membuat kesalahan kecil, tetapi secara keseluruhan dapat dipercaya. Orang-orang mempercayai Anda dan mempercayakan tugas-tugas penting kepada Anda.",
      vi: "Bạn là người rất đáng tin cậy. Bạn giữ hầu hết mọi lời hứa và giữ bí mật tốt. Bạn có trách nhiệm và trung thực. Thỉnh thoảng có những sai lầm nhỏ, nhưng nhìn chung đáng tin cậy. Mọi người tin tưởng bạn và giao phó những công việc quan trọng."
    },
    pros: [
      {
        ko: "높은 신뢰성",
        en: "High reliability",
        ja: "高い信頼性",
        'zh-CN': "高可靠性",
        'zh-TW': "高可靠性",
        id: "Keandalan tinggi",
        vi: "Độ tin cậy cao"
      },
      {
        ko: "책임감",
        en: "Responsibility",
        ja: "責任感",
        'zh-CN': "责任感",
        'zh-TW': "責任感",
        id: "Tanggung jawab",
        vi: "Trách nhiệm"
      },
      {
        ko: "정직함",
        en: "Honesty",
        ja: "正直さ",
        'zh-CN': "诚实",
        'zh-TW': "誠實",
        id: "Kejujuran",
        vi: "Trung thực"
      }
    ],
    cons: [
      {
        ko: "가끔 작은 실수",
        en: "Occasional small mistakes",
        ja: "時々小さなミス",
        'zh-CN': "偶尔小错误",
        'zh-TW': "偶爾小錯誤",
        id: "Kadang kesalahan kecil",
        vi: "Thỉnh thoảng sai lầm nhỏ"
      },
      {
        ko: "완벽하진 않음",
        en: "Not perfect",
        ja: "完璧ではない",
        'zh-CN': "不够完美",
        'zh-TW': "不夠完美",
        id: "Tidak sempurna",
        vi: "Không hoàn hảo"
      }
    ],
    advice: {
      ko: "이미 훌륭합니다! 작은 부분만 보완하세요.",
      en: "You're already great! Just improve the small parts.",
      ja: "すでに素晴らしいです！小さな部分だけ補完してください。",
      'zh-CN': "已经很棒了！只需要完善小部分。",
      'zh-TW': "已經很棒了！只需要完善小部分。",
      id: "Sudah hebat! Tinggal perbaiki bagian kecil saja.",
      vi: "Đã tuyệt vời rồi! Chỉ cần hoàn thiện những phần nhỏ."
    },
    reputation: {
      ko: "\"믿을 만한 사람\"",
      en: "\"Trustworthy person\"",
      ja: "\"信頼できる人\"",
      'zh-CN': "\"值得信赖的人\"",
      'zh-TW': "\"值得信賴的人\"",
      id: "\"Orang yang bisa dipercaya\"",
      vi: "\"Người đáng tin cậy\""
    },
    goodTypes: ["Type1", "Type2", "Type3"],
    cautionTypes: ["Type5", "Type6"]
  },
  {
    type: "Type3",
    emoji: "✨",
    title: {
      ko: "안정적 신뢰형",
      en: "Stable Trust Type",
      ja: "安定信頼型",
      'zh-CN': "稳定信任型",
      'zh-TW': "穩定信任型",
      id: "Tipe Kepercayaan Stabil",
      vi: "Kiểu Tin Tưởng Ổn Định"
    },
    shortDescription: {
      ko: "75% 신뢰! 평균 이상으로 믿을 수 있는 사람",
      en: "75% Trust! Above average trustworthy person",
      ja: "75%信頼！平均以上に信頼できる人",
      'zh-CN': "75%信任！高于平均水平的值得信赖的人",
      'zh-TW': "75%信任！高於平均水平的值得信賴的人",
      id: "75% Kepercayaan! Orang yang bisa dipercaya di atas rata-rata",
      vi: "75% Tin tưởng! Người đáng tin cậy trên mức trung bình"
    },
    longDescription: {
      ko: "당신은 대체로 믿을 수 있는 사람입니다. 중요한 약속은 지키고 큰 비밀은 지킵니다. 책임감이 있지만 가끔 실수합니다. 정직한 편이지만 작은 거짓말은 할 수 있습니다. 일상적인 관계에서 충분히 신뢰받을 수 있는 수준입니다.",
      en: "You are generally a trustworthy person. You keep important promises and keep big secrets. You have a sense of responsibility but occasionally make mistakes. You are honest but can tell small lies. You are trustworthy enough in everyday relationships.",
      ja: "あなたは概して信頼できる人です。重要な約束は守り、大きな秘密は守ります。責任感はありますが、時々ミスをします。正直な方ですが、小さな嘘はつくことがあります。日常的な関係では十分に信頼されるレベルです。",
      'zh-CN': "你总体上是一个值得信赖的人。你遵守重要承诺并保守重大秘密。你有责任感但偶尔会犯错。你诚实但可能会说小谎。在日常关系中足以获得信任。",
      'zh-TW': "你總體上是一個值得信賴的人。你遵守重要承諾並保守重大秘密。你有責任感但偶爾會犯錯。你誠實但可能會說小謊。在日常關係中足以獲得信任。",
      id: "Anda secara umum adalah orang yang bisa dipercaya. Anda menepati janji penting dan menjaga rahasia besar. Anda memiliki rasa tanggung jawab tetapi sesekali membuat kesalahan. Anda jujur tetapi bisa berbohong kecil. Anda cukup dapat dipercaya dalam hubungan sehari-hari.",
      vi: "Bạn nhìn chung là người đáng tin cậy. Bạn giữ những lời hứa quan trọng và giữ bí mật lớn. Bạn có trách nhiệm nhưng thỉnh thoảng mắc lỗi. Bạn trung thực nhưng có thể nói dối nhỏ. Bạn đủ đáng tin cậy trong các mối quan hệ hàng ngày."
    },
    pros: [
      {
        ko: "안정적",
        en: "Stable",
        ja: "安定",
        'zh-CN': "稳定",
        'zh-TW': "穩定",
        id: "Stabil",
        vi: "Ổn định"
      },
      {
        ko: "대체로 믿을 만함",
        en: "Generally trustworthy",
        ja: "概して信頼できる",
        'zh-CN': "大体值得信赖",
        'zh-TW': "大體值得信賴",
        id: "Secara umum bisa dipercaya",
        vi: "Nhìn chung đáng tin cậy"
      },
      {
        ko: "양심적",
        en: "Conscientious",
        ja: "良心的",
        'zh-CN': "有良心的",
        'zh-TW': "有良心的",
        id: "Berhati nurani",
        vi: "Có lương tâm"
      }
    ],
    cons: [
      {
        ko: "가끔 약속 못 지킴",
        en: "Sometimes can't keep promises",
        ja: "時々約束を守れない",
        'zh-CN': "有时不能遵守承诺",
        'zh-TW': "有時不能遵守承諾",
        id: "Kadang tidak bisa menepati janji",
        vi: "Thỉnh thoảng không giữ được lời hứa"
      },
      {
        ko: "작은 거짓말",
        en: "Small lies",
        ja: "小さな嘘",
        'zh-CN': "小谎言",
        'zh-TW': "小謊言",
        id: "Kebohongan kecil",
        vi: "Những lời nói dối nhỏ"
      }
    ],
    advice: {
      ko: "작은 약속도 지키는 습관을 들이세요!",
      en: "Develop the habit of keeping small promises too!",
      ja: "小さな約束も守る習慣をつけましょう！",
      'zh-CN': "养成遵守小承诺的习惯！",
      'zh-TW': "養成遵守小承諾的習慣！",
      id: "Kembangkan kebiasaan menepati janji kecil juga!",
      vi: "Hãy phát triển thói quen giữ cả những lời hứa nhỏ!"
    },
    reputation: {
      ko: "\"나쁘지 않은 사람\"",
      en: "\"Not a bad person\"",
      ja: "\"悪くない人\"",
      'zh-CN': "\"不是坏人\"",
      'zh-TW': "\"不是壞人\"",
      id: "\"Orang yang tidak buruk\"",
      vi: "\"Người không tệ\""
    },
    goodTypes: ["Type2", "Type3", "Type4"],
    cautionTypes: ["Type1"]
  },
  {
    type: "Type4",
    emoji: "⚖️",
    title: {
      ko: "보통 신뢰형",
      en: "Average Trust Type",
      ja: "普通信頼型",
      'zh-CN': "普通信任型",
      'zh-TW': "普通信任型",
      id: "Tipe Kepercayaan Rata-rata",
      vi: "Kiểu Tin Tưởng Bình Thường"
    },
    shortDescription: {
      ko: "50% 신뢰! 평균적인 수준",
      en: "50% Trust! Average level",
      ja: "50%信頼！平均的なレベル",
      'zh-CN': "50%信任！平均水平",
      'zh-TW': "50%信任！平均水平",
      id: "50% Kepercayaan! Level rata-rata",
      vi: "50% Tin tưởng! Mức trung bình"
    },
    longDescription: {
      ko: "당신은 평균적인 신뢰도를 가지고 있습니다. 약속을 지키려 하지만 자주 못 지킵니다. 비밀을 지키려 하지만 가끔 말합니다. 책임감이 있지만 미루거나 회피할 때가 있습니다. 사람들이 당신을 완전히 믿기는 어렵습니다. 개선이 필요합니다.",
      en: "You have an average level of trustworthiness. You try to keep promises but often fail. You try to keep secrets but sometimes tell them. You have a sense of responsibility but sometimes procrastinate or avoid. It's difficult for people to fully trust you. Improvement is needed.",
      ja: "あなたは平均的な信頼度を持っています。約束を守ろうとしますが、しばしば守れません。秘密を守ろうとしますが、時々話してしまいます。責任感はありますが、先延ばししたり避けたりすることがあります。人々があなたを完全に信頼するのは困難です。改善が必要です。",
      'zh-CN': "你拥有平均水平的可信度。你试图遵守承诺但经常失败。你试图保守秘密但有时会说出来。你有责任感但有时会拖延或回避。人们很难完全信任你。需要改进。",
      'zh-TW': "你擁有平均水平的可信度。你試圖遵守承諾但經常失敗。你試圖保守秘密但有時會說出來。你有責任感但有時會拖延或迴避。人們很難完全信任你。需要改進。",
      id: "Anda memiliki tingkat kepercayaan rata-rata. Anda berusaha menepati janji tetapi sering gagal. Anda berusaha menjaga rahasia tetapi kadang-kadang mengatakannya. Anda memiliki rasa tanggung jawab tetapi kadang-kadang menunda atau menghindar. Sulit bagi orang untuk sepenuhnya mempercayai Anda. Perbaikan diperlukan.",
      vi: "Bạn có mức độ đáng tin cậy trung bình. Bạn cố gắng giữ lời hứa nhưng thường thất bại. Bạn cố gắng giữ bí mật nhưng đôi khi nói ra. Bạn có trách nhiệm nhưng đôi khi trì hoãn hoặc tránh né. Mọi người khó hoàn toàn tin tưởng bạn. Cần cải thiện."
    },
    pros: [
      {
        ko: "노력은 함",
        en: "Tries hard",
        ja: "努力はする",
        'zh-CN': "努力尝试",
        'zh-TW': "努力嘗試",
        id: "Berusaha keras",
        vi: "Cố gắng"
      },
      {
        ko: "악의는 없음",
        en: "No malice",
        ja: "悪意はない",
        'zh-CN': "没有恶意",
        'zh-TW': "沒有惡意",
        id: "Tidak ada niat jahat",
        vi: "Không có ác ý"
      }
    ],
    cons: [
      {
        ko: "신뢰도 낮음",
        en: "Low trustworthiness",
        ja: "信頼度が低い",
        'zh-CN': "可信度低",
        'zh-TW': "可信度低",
        id: "Kepercayaan rendah",
        vi: "Độ tin cậy thấp"
      },
      {
        ko: "자주 약속 못 지킴",
        en: "Often can't keep promises",
        ja: "よく約束を守れない",
        'zh-CN': "经常不能遵守承诺",
        'zh-TW': "經常不能遵守承諾",
        id: "Sering tidak bisa menepati janji",
        vi: "Thường không giữ được lời hứa"
      },
      {
        ko: "일관성 부족",
        en: "Lack of consistency",
        ja: "一貫性の不足",
        'zh-CN': "缺乏一致性",
        'zh-TW': "缺乏一致性",
        id: "Kurang konsistensi",
        vi: "Thiếu tính nhất quán"
      }
    ],
    advice: {
      ko: "작은 약속부터 지키는 연습을 하세요!",
      en: "Practice keeping small promises first!",
      ja: "小さな約束から守る練習をしましょう！",
      'zh-CN': "从遵守小承诺开始练习！",
      'zh-TW': "從遵守小承諾開始練習！",
      id: "Berlatih menepati janji kecil terlebih dahulu!",
      vi: "Hãy luyện tập giữ những lời hứa nhỏ trước!"
    },
    reputation: {
      ko: "\"저 사람 말은 글쎄...\"",
      en: "\"That person's words are questionable...\"",
      ja: "\"あの人の言葉はどうかな...\"",
      'zh-CN': "\"那个人的话值得怀疑...\"",
      'zh-TW': "\"那個人的話值得懷疑...\"",
      id: "\"Kata orang itu diragukan...\"",
      vi: "\"Lời người đó đáng nghi...\""
    },
    goodTypes: ["Type4"],
    cautionTypes: ["Type1", "Type2"]
  },
  {
    type: "Type5",
    emoji: "⚠️",
    title: {
      ko: "불안정 신뢰형",
      en: "Unstable Trust Type",
      ja: "不安定信頼型",
      'zh-CN': "不稳定信任型",
      'zh-TW': "不穩定信任型",
      id: "Tipe Kepercayaan Tidak Stabil",
      vi: "Kiểu Tin Tưởng Không Ổn Định"
    },
    shortDescription: {
      ko: "30% 신뢰! 믿기 어려운 수준",
      en: "30% Trust! Difficult to trust level",
      ja: "30%信頼！信頼しにくいレベル",
      'zh-CN': "30%信任！难以信任的水平",
      'zh-TW': "30%信任！難以信任的水平",
      id: "30% Kepercayaan! Level sulit dipercaya",
      vi: "30% Tin tưởng! Mức khó tin tưởng"
    },
    longDescription: {
      ko: "당신은 신뢰도가 낮습니다. 약속을 자주 못 지키고 비밀을 잘 못 지킵니다. 책임감이 부족하고 거짓말을 자주 합니다. 사람들이 당신을 믿기 어려워하고 중요한 일을 맡기지 않습니다. 관계에서 문제가 생길 수 있습니다. 변화가 필요합니다.",
      en: "You have low trustworthiness. You often fail to keep promises and don't keep secrets well. You lack responsibility and lie frequently. People find it difficult to trust you and don't entrust you with important tasks. Problems may arise in relationships. Change is needed.",
      ja: "あなたは信頼度が低いです。約束を守れず、秘密を守れません。責任感が不足し、嘘を頻繁につきます。人々はあなたを信頼するのが困難で、重要な仕事を任せません。関係で問題が生じる可能性があります。変化が必要です。",
      'zh-CN': "你的可信度很低。你经常不能遵守承诺，不能很好地保守秘密。你缺乏责任感，经常说谎。人们很难信任你，不会委托你重要任务。关系中可能出现问题。需要改变。",
      'zh-TW': "你的可信度很低。你經常不能遵守承諾，不能很好地保守秘密。你缺乏責任感，經常說謊。人們很難信任你，不會委託你重要任務。關係中可能出現問題。需要改變。",
      id: "Anda memiliki kepercayaan rendah. Anda sering gagal menepati janji dan tidak menjaga rahasia dengan baik. Anda kurang bertanggung jawab dan sering berbohong. Orang sulit mempercayai Anda dan tidak mempercayakan tugas penting kepada Anda. Masalah mungkin timbul dalam hubungan. Perubahan diperlukan.",
      vi: "Bạn có độ tin cậy thấp. Bạn thường không giữ được lời hứa và không giữ bí mật tốt. Bạn thiếu trách nhiệm và thường nói dối. Mọi người khó tin tưởng bạn và không giao phó những công việc quan trọng. Có thể nảy sinh vấn đề trong mối quan hệ. Cần thay đổi."
    },
    pros: [
      {
        ko: "(찾기 어려움)",
        en: "(Hard to find)",
        ja: "（見つけにくい）",
        'zh-CN': "（难以找到）",
        'zh-TW': "（難以找到）",
        id: "(Sulit ditemukan)",
        vi: "(Khó tìm thấy)"
      }
    ],
    cons: [
      {
        ko: "낮은 신뢰도",
        en: "Low trustworthiness",
        ja: "低い信頼度",
        'zh-CN': "可信度低",
        'zh-TW': "可信度低",
        id: "Kepercayaan rendah",
        vi: "Độ tin cậy thấp"
      },
      {
        ko: "약속 안 지킴",
        en: "Don't keep promises",
        ja: "約束を守らない",
        'zh-CN': "不遵守承诺",
        'zh-TW': "不遵守承諾",
        id: "Tidak menepati janji",
        vi: "Không giữ lời hứa"
      },
      {
        ko: "거짓말",
        en: "Lies",
        ja: "嘘",
        'zh-CN': "谎言",
        'zh-TW': "謊言",
        id: "Kebohongan",
        vi: "Nói dối"
      },
      {
        ko: "무책임",
        en: "Irresponsible",
        ja: "無責任",
        'zh-CN': "不负责任",
        'zh-TW': "不負責任",
        id: "Tidak bertanggung jawab",
        vi: "Vô trách nhiệm"
      }
    ],
    advice: {
      ko: "지금부터라도 변화하세요! 신뢰는 한 번에 쌓입니다.",
      en: "Start changing now! Trust builds up over time.",
      ja: "今からでも変化してください！信頼は一度に積み重なります。",
      'zh-CN': "从现在开始改变！信任是逐渐积累的。",
      'zh-TW': "從現在開始改變！信任是逐漸積累的。",
      id: "Mulai berubah sekarang juga! Kepercayaan terbangun seiring waktu.",
      vi: "Hãy bắt đầu thay đổi ngay bây giờ! Niềm tin được xây dựng theo thời gian."
    },
    reputation: {
      ko: "\"저 사람은 믿으면 안 돼\"",
      en: "\"You shouldn't trust that person\"",
      ja: "\"あの人を信じてはいけない\"",
      'zh-CN': "\"不应该信任那个人\"",
      'zh-TW': "\"不應該信任那個人\"",
      id: "\"Orang itu tidak boleh dipercaya\"",
      vi: "\"Không nên tin tưởng người đó\""
    },
    goodTypes: ["Type5", "Type6"],
    cautionTypes: ["Type1", "Type2", "Type3"]
  },
  {
    type: "Type6",
    emoji: "❌",
    title: {
      ko: "신뢰 부족형",
      en: "Trust Deficient Type",
      ja: "信頼不足型",
      'zh-CN': "信任缺乏型",
      'zh-TW': "信任缺乏型",
      id: "Tipe Kekurangan Kepercayaan",
      vi: "Kiểu Thiếu Tin Tưởng"
    },
    shortDescription: {
      ko: "10% 신뢰! 심각한 수준",
      en: "10% Trust! Serious level",
      ja: "10%信頼！深刻なレベル",
      'zh-CN': "10%信任！严重水平",
      'zh-TW': "10%信任！嚴重水平",
      id: "10% Kepercayaan! Level serius",
      vi: "10% Tin tưởng! Mức nghiêm trọng"
    },
    longDescription: {
      ko: "당신은 거의 신뢰할 수 없는 사람입니다. 약속을 거의 안 지키고 비밀을 못 지킵니다. 책임감이 없고 거짓말을 습관적으로 합니다. 사람들이 당신을 피하고 관계가 오래 가지 못합니다. 이대로는 인생이 힘들어집니다. 즉시 변화가 필요합니다.",
      en: "You are almost an untrustworthy person. You almost never keep promises and can't keep secrets. You have no sense of responsibility and habitually lie. People avoid you and relationships don't last long. If this continues, life will be difficult. Immediate change is needed.",
      ja: "あなたはほとんど信頼できない人です。約束を守らず、秘密を守れません。責任感がなく、習慣的に嘘をつきます。人々はあなたを避け、関係は長続きしません。このままでは人生が困難になります。即座の変化が必要です。",
      'zh-CN': "你几乎是一个不值得信赖的人。你几乎不遵守承诺，不能保守秘密。你没有责任感，习惯性地说谎。人们避开你，关系不会长久。如果这样下去，生活会很困难。需要立即改变。",
      'zh-TW': "你幾乎是一個不值得信賴的人。你幾乎不遵守承諾，不能保守秘密。你沒有責任感，習慣性地說謊。人們避開你，關係不會長久。如果這樣下去，生活會很困難。需要立即改變。",
      id: "Anda hampir tidak dapat dipercaya. Anda hampir tidak pernah menepati janji dan tidak bisa menjaga rahasia. Anda tidak memiliki rasa tanggung jawab dan secara kebiasaan berbohong. Orang-orang menghindari Anda dan hubungan tidak bertahan lama. Jika ini berlanjut, hidup akan sulit. Perubahan segera diperlukan.",
      vi: "Bạn gần như là người không đáng tin cậy. Bạn hầu như không giữ lời hứa và không thể giữ bí mật. Bạn không có trách nhiệm và thường xuyên nói dối. Mọi người tránh bạn và các mối quan hệ không kéo dài. Nếu cứ như vậy, cuộc sống sẽ khó khăn. Cần thay đổi ngay lập tức."
    },
    pros: [
      {
        ko: "없음 (변화가 필요한 상태)",
        en: "None (state requiring change)",
        ja: "なし（変化が必要な状態）",
        'zh-CN': "无（需要改变的状态）",
        'zh-TW': "無（需要改變的狀態）",
        id: "Tidak ada (keadaan yang memerlukan perubahan)",
        vi: "Không có (trạng thái cần thay đổi)"
      }
    ],
    cons: [
      {
        ko: "신뢰 제로",
        en: "Zero trust",
        ja: "信頼ゼロ",
        'zh-CN': "零信任",
        'zh-TW': "零信任",
        id: "Kepercayaan nol",
        vi: "Tin tưởng bằng không"
      },
      {
        ko: "거짓말쟁이",
        en: "Liar",
        ja: "嘘つき",
        'zh-CN': "骗子",
        'zh-TW': "騙子",
        id: "Pembohong",
        vi: "Kẻ nói dối"
      },
      {
        ko: "무책임",
        en: "Irresponsible",
        ja: "無責任",
        'zh-CN': "不负责任",
        'zh-TW': "不負責任",
        id: "Tidak bertanggung jawab",
        vi: "Vô trách nhiệm"
      },
      {
        ko: "관계 파괴",
        en: "Relationship destroyer",
        ja: "関係破壊",
        'zh-CN': "关系破坏者",
        'zh-TW': "關係破壞者",
        id: "Perusak hubungan",
        vi: "Kẻ phá hoại mối quan hệ"
      }
    ],
    advice: {
      ko: "심각합니다. 전문가 도움을 받고 근본적인 변화가 필요합니다!",
      en: "This is serious. You need professional help and fundamental change!",
      ja: "深刻です。専門家の助けを受け、根本的な変化が必要です！",
      'zh-CN': "这很严重。你需要专业帮助和根本性改变！",
      'zh-TW': "這很嚴重。你需要專業幫助和根本性改變！",
      id: "Ini serius. Anda memerlukan bantuan profesional dan perubahan mendasar!",
      vi: "Điều này nghiêm trọng. Bạn cần sự giúp đỡ chuyên nghiệp và thay đổi cơ bản!"
    },
    reputation: {
      ko: "\"절대 믿으면 안 되는 사람\"",
      en: "\"Person you should never trust\"",
      ja: "\"絶対に信じてはいけない人\"",
      'zh-CN': "\"绝对不应该信任的人\"",
      'zh-TW': "\"絕對不應該信任的人\"",
      id: "\"Orang yang tidak boleh dipercaya sama sekali\"",
      vi: "\"Người tuyệt đối không nên tin tưởng\""
    },
    goodTypes: [],
    cautionTypes: ["Type1", "Type2", "Type3", "Type4", "Type5", "Type6"]
  }
];

export function calculateTrustResult(answers: any[]): string {
  const scores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
  
  answers.forEach(answer => {
    Object.keys(answer).forEach(type => {
      if (scores[type as keyof typeof scores] !== undefined) {
        scores[type as keyof typeof scores] += answer[type];
      }
    });
  });
  
  // 최고 점수의 타입 반환
  const maxScore = Math.max(...Object.values(scores));
  const resultType = Object.keys(scores).find(type => scores[type as keyof typeof scores] === maxScore);
  
  // 동점일 경우 Q10-Q12의 선택을 우선 반영 (마지막 3개 답변 확인)
  if (resultType && answers.length >= 10) {
    const lastThreeAnswers = answers.slice(-3);
    const lastThreeScores = { Type1: 0, Type2: 0, Type3: 0, Type4: 0, Type5: 0, Type6: 0 };
    
    lastThreeAnswers.forEach(answer => {
      Object.keys(answer).forEach(type => {
        if (lastThreeScores[type as keyof typeof lastThreeScores] !== undefined) {
          lastThreeScores[type as keyof typeof lastThreeScores] += answer[type];
        }
      });
    });
    
    const maxLastScore = Math.max(...Object.values(lastThreeScores));
    const lastResultType = Object.keys(lastThreeScores).find(type => lastThreeScores[type as keyof typeof lastThreeScores] === maxLastScore);
    
    return lastResultType || resultType;
  }
  
  return resultType || "Type1";
}