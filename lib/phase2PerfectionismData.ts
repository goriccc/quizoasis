export interface Phase2PerfectionismQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2PerfectionismResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  perfectionismLevel: Record<string, string>; // 완벽주의 지수
  characteristics: Record<string, string>; // 주요 특징
  prescription: Record<string, string>; // 처방
}

export const phase2PerfectionismQuestions: Phase2PerfectionismQuestion[] = [
  {
    id: 1,
    question: {
      ko: "업무 메일을 보낸 후 오타를 발견했다면?",
      en: "What if you find a typo after sending a work email?",
      ja: "仕事のメールを送った後、誤字を見つけたら？",
      'zh-CN': "发送工作邮件后发现错别字怎么办？",
      'zh-TW': "發送工作郵件後發現錯別字怎麼辦？",
      vi: "Bạn sẽ làm gì nếu phát hiện lỗi chính tả sau khi gửi email công việc?",
      id: "Apa yang akan Anda lakukan jika menemukan typo setelah mengirim email kerja?"
    },
    options: [
      {
        text: {
          ko: "뜻만 통하면 상관없다고 생각",
          en: "As long as the meaning is clear, it doesn't matter",
          ja: "意味が通じれば問題ないと思う",
          'zh-CN': "只要意思清楚就没关系",
          'zh-TW': "只要意思清楚就沒關係",
          vi: "Miễn là ý nghĩa rõ ràng thì không sao",
          id: "Selama maknanya jelas, tidak masalah"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "아차 싶지만 이미 보낸 거 어쩔 수 없다고 생각",
          en: "Feel bad but think there's nothing I can do since it's already sent",
          ja: "しまったと思うが、もう送ったから仕方ないと思う",
          'zh-CN': "觉得糟糕但既然已经发送了也没办法",
          'zh-TW': "覺得糟糕但既然已經發送了也沒辦法",
          vi: "Cảm thấy tệ nhưng nghĩ đã gửi rồi thì không làm gì được",
          id: "Merasa buruk tapi berpikir tidak ada yang bisa dilakukan karena sudah dikirim"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "정정 메일을 다시 보내야 할지 심각하게 고민",
          en: "Seriously consider whether to send a correction email",
          ja: "訂正メールを送るべきか真剣に悩む",
          'zh-CN': "认真考虑是否要发送更正邮件",
          'zh-TW': "認真考慮是否要發送更正郵件",
          vi: "Nghiêm túc suy nghĩ xem có nên gửi email chỉnh sửa không",
          id: "Serius mempertimbangkan apakah harus mengirim email koreksi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "내 명성에 흠집이 났다고 생각하며 하루 종일 자책",
          en: "Think my reputation is damaged and blame myself all day",
          ja: "自分の評判に傷がついたと思い、一日中自分を責める",
          'zh-CN': "认为我的声誉受损，整天自责",
          'zh-TW': "認為我的聲譽受損，整天自責",
          vi: "Nghĩ danh tiếng của mình bị tổn hại và tự trách mình cả ngày",
          id: "Berpikir reputasi saya rusak dan menyalahkan diri sendiri sepanjang hari"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "당신의 책상 정리 상태는?",
      en: "What is the state of your desk organization?",
      ja: "あなたの机の整理状態は？",
      'zh-CN': "你的桌子整理状态如何？",
      'zh-TW': "你的桌子整理狀態如何？",
      vi: "Tình trạng sắp xếp bàn làm việc của bạn như thế nào?",
      id: "Bagaimana keadaan pengorganisasian meja Anda?"
    },
    options: [
      {
        text: {
          ko: "필요한 물건이 어디 있는지만 알면 됨",
          en: "Just need to know where things are",
          ja: "必要な物がどこにあるか分かればいい",
          'zh-CN': "只要知道东西在哪里就行",
          'zh-TW': "只要知道東西在哪裡就行",
          vi: "Chỉ cần biết đồ vật ở đâu là được",
          id: "Hanya perlu tahu di mana barang-barang berada"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "퇴근할 때 한 번 정도 정리하는 편",
          en: "Usually tidy up once when leaving work",
          ja: "退社時に一度くらい整理する方",
          'zh-CN': "下班时通常会整理一次",
          'zh-TW': "下班時通常會整理一次",
          vi: "Thường dọn dẹp một lần khi tan làm",
          id: "Biasanya merapikan sekali saat pulang kerja"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "모니터, 키보드, 서류의 위치가 각 잡혀 있어야 마음이 편함",
          en: "Need monitor, keyboard, and documents in their proper places to feel at ease",
          ja: "モニター、キーボード、書類の位置がきちんとしていないと落ち着かない",
          'zh-CN': "显示器、键盘、文件的位置必须整齐才能安心",
          'zh-TW': "顯示器、鍵盤、文件的位置必須整齊才能安心",
          vi: "Cần màn hình, bàn phím, tài liệu ở đúng vị trí mới yên tâm",
          id: "Perlu monitor, keyboard, dan dokumen di tempat yang tepat agar merasa tenang"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "먼지 한 톨 용납할 수 없다. 수시로 닦고 정리",
          en: "Can't tolerate even a speck of dust. Constantly cleaning and organizing",
          ja: "ほこり一つ許せない。頻繁に拭いて整理する",
          'zh-CN': "不能容忍一点灰尘，经常擦拭和整理",
          'zh-TW': "不能容忍一點灰塵，經常擦拭和整理",
          vi: "Không thể chịu được dù chỉ một hạt bụi. Thường xuyên lau chùi và sắp xếp",
          id: "Tidak bisa mentolerir bahkan sebutir debu. Terus-menerus membersihkan dan mengatur"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "\"이 정도면 됐어\"라는 말을 들을 때?",
      en: "When you hear \"This is good enough\"?",
      ja: "「これでいいよ」と言われたとき？",
      'zh-CN': "当你听到\"这样就可以了\"时？",
      'zh-TW': "當你聽到「這樣就可以了」時？",
      vi: "Khi bạn nghe \"Thế này là đủ rồi\"?",
      id: "Ketika Anda mendengar \"Ini sudah cukup\"?"
    },
    options: [
      {
        text: {
          ko: "기분 좋다. 바로 칼퇴근 준비",
          en: "Feel good. Immediately prepare to leave work",
          ja: "気分がいい。すぐに退社の準備をする",
          'zh-CN': "感觉很好，立即准备下班",
          'zh-TW': "感覺很好，立即準備下班",
          vi: "Cảm thấy tốt. Ngay lập tức chuẩn bị tan làm",
          id: "Merasa senang. Segera bersiap pulang kerja"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "안도한다. 마무리를 짓고 제출",
          en: "Feel relieved. Finish up and submit",
          ja: "安心する。仕上げて提出する",
          'zh-CN': "感到宽慰，完成并提交",
          'zh-TW': "感到寬慰，完成並提交",
          vi: "Cảm thấy nhẹ nhõm. Hoàn thành và nộp",
          id: "Merasa lega. Menyelesaikan dan mengirimkan"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "불안하다. 상대방이 대충 넘어가려는 것 같아 찝찝함",
          en: "Feel anxious. Uncomfortable thinking they're being careless",
          ja: "不安だ。相手が適当に済ませようとしているようで気持ち悪い",
          'zh-CN': "感到不安，觉得对方在敷衍，不舒服",
          'zh-TW': "感到不安，覺得對方在敷衍，不舒服",
          vi: "Cảm thấy lo lắng. Khó chịu vì nghĩ họ đang làm qua loa",
          id: "Merasa cemas. Tidak nyaman karena berpikir mereka ceroboh"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "납득할 수 없다. 내 기준에 찰 때까지 밤새워서라도 수정",
          en: "Can't accept it. Will stay up all night to fix it until it meets my standards",
          ja: "納得できない。自分の基準に合うまで徹夜してでも修正する",
          'zh-CN': "无法接受，即使熬夜也要修改到符合我的标准",
          'zh-TW': "無法接受，即使熬夜也要修改到符合我的標準",
          vi: "Không thể chấp nhận. Sẽ thức đêm để sửa cho đến khi đạt tiêu chuẩn của mình",
          id: "Tidak bisa menerima. Akan begadang untuk memperbaikinya sampai memenuhi standar saya"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "팀 프로젝트에서 동료가 실수를 했다.",
      en: "A colleague made a mistake in a team project.",
      ja: "チームプロジェクトで同僚がミスをした。",
      'zh-CN': "在团队项目中，同事犯了错误。",
      'zh-TW': "在團隊專案中，同事犯了錯誤。",
      vi: "Đồng nghiệp đã mắc lỗi trong dự án nhóm.",
      id: "Rekan kerja membuat kesalahan dalam proyek tim."
    },
    options: [
      {
        text: {
          ko: "누구나 실수할 수 있다고 생각하고 내가 수습",
          en: "Think anyone can make mistakes and I'll handle it",
          ja: "誰でもミスはするものだと思い、自分が処理する",
          'zh-CN': "认为谁都会犯错，我来处理",
          'zh-TW': "認為誰都會犯錯，我來處理",
          vi: "Nghĩ ai cũng có thể mắc lỗi và tôi sẽ xử lý",
          id: "Berpikir siapa pun bisa membuat kesalahan dan saya akan menanganinya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "다음엔 주의해달라고 말하고 넘어감",
          en: "Ask them to be careful next time and move on",
          ja: "次は注意してほしいと言って済ます",
          'zh-CN': "提醒下次注意，然后继续",
          'zh-TW': "提醒下次注意，然後繼續",
          vi: "Nhắc họ cẩn thận lần sau và tiếp tục",
          id: "Minta mereka berhati-hati lain kali dan melanjutkan"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "왜 그런 실수를 했는지 이해가 안 가고 답답함",
          en: "Can't understand why they made such a mistake and feel frustrated",
          ja: "なぜそんなミスをしたのか理解できずイライラする",
          'zh-CN': "无法理解为什么会犯这样的错误，感到沮丧",
          'zh-TW': "無法理解為什麼會犯這樣的錯誤，感到沮喪",
          vi: "Không hiểu tại sao họ lại mắc lỗi như vậy và cảm thấy bực bội",
          id: "Tidak bisa memahami mengapa mereka membuat kesalahan seperti itu dan merasa frustrasi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "차라리 내가 혼자 다 하는 게 낫겠다고 생각",
          en: "Think it would be better if I just did everything alone",
          ja: "むしろ自分一人で全部やった方がいいと思う",
          'zh-CN': "觉得还不如我一个人全部做完",
          'zh-TW': "覺得還不如我一個人全部做完",
          vi: "Nghĩ tốt hơn là tôi tự làm hết một mình",
          id: "Berpikir lebih baik jika saya melakukan semuanya sendiri"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "휴일에 아무것도 안 하고 쉬고 있을 때?",
      en: "When you're resting and doing nothing on a holiday?",
      ja: "休日に何もせずに休んでいるとき？",
      'zh-CN': "假期里什么都不做只是休息时？",
      'zh-TW': "假期裡什麼都不做只是休息時？",
      vi: "Khi bạn nghỉ ngơi và không làm gì vào ngày nghỉ?",
      id: "Ketika Anda beristirahat dan tidak melakukan apa-apa di hari libur?"
    },
    options: [
      {
        text: {
          ko: "진정한 휴식이라며 행복해함",
          en: "Feel happy thinking it's true rest",
          ja: "本当の休息だと思って幸せに感じる",
          'zh-CN': "觉得这是真正的休息，感到快乐",
          'zh-TW': "覺得這是真正的休息，感到快樂",
          vi: "Cảm thấy hạnh phúc vì nghĩ đó là nghỉ ngơi thực sự",
          id: "Merasa bahagia karena berpikir itu adalah istirahat yang sebenarnya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "심심해서 친구에게 연락하거나 TV를 시청",
          en: "Get bored and contact friends or watch TV",
          ja: "退屈で友達に連絡したりテレビを見たりする",
          'zh-CN': "感到无聊，联系朋友或看电视",
          'zh-TW': "感到無聊，聯繫朋友或看電視",
          vi: "Cảm thấy chán và liên lạc bạn bè hoặc xem TV",
          id: "Merasa bosan dan menghubungi teman atau menonton TV"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "뭐라도 해야 할 것 같은 불안감이 스물스물 올라옴",
          en: "Feel anxiety creeping up thinking I should be doing something",
          ja: "何かしなければならないような不安がじわじわと湧き上がる",
          'zh-CN': "觉得应该做点什么，不安感逐渐涌起",
          'zh-TW': "覺得應該做點什麼，不安感逐漸湧起",
          vi: "Cảm thấy lo lắng dần dần vì nghĩ mình nên làm gì đó",
          id: "Merasa kecemasan merayap naik karena berpikir harus melakukan sesuatu"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "시간을 낭비하고 있다는 죄책감에 괴로워함",
          en: "Suffer from guilt thinking I'm wasting time",
          ja: "時間を無駄にしているという罪悪感に苦しむ",
          'zh-CN': "因浪费时间而感到内疚和痛苦",
          'zh-TW': "因浪費時間而感到內疚和痛苦",
          vi: "Đau khổ vì cảm giác tội lỗi nghĩ mình đang lãng phí thời gian",
          id: "Menderita karena rasa bersalah karena berpikir membuang-buang waktu"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "새로운 일을 시작하기 전, 당신의 준비 과정은?",
      en: "Before starting something new, what is your preparation process?",
      ja: "新しいことを始める前、あなたの準備過程は？",
      'zh-CN': "开始新事物之前，你的准备过程是什么？",
      'zh-TW': "開始新事物之前，你的準備過程是什麼？",
      vi: "Trước khi bắt đầu việc mới, quá trình chuẩn bị của bạn là gì?",
      id: "Sebelum memulai sesuatu yang baru, bagaimana proses persiapan Anda?"
    },
    options: [
      {
        text: {
          ko: "일단 부딪혀 본다. 하면서 배우는 스타일",
          en: "Just dive in. Learn as I go style",
          ja: "とりあえず突き進む。やりながら学ぶスタイル",
          'zh-CN': "直接开始，边做边学的风格",
          'zh-TW': "直接開始，邊做邊學的風格",
          vi: "Cứ lao vào. Học trong khi làm",
          id: "Langsung terjun. Belajar sambil jalan"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "대략적인 계획을 세우고 시작",
          en: "Make a rough plan and start",
          ja: "大まかな計画を立てて始める",
          'zh-CN': "制定粗略计划然后开始",
          'zh-TW': "制定粗略計劃然後開始",
          vi: "Lập kế hoạch sơ bộ và bắt đầu",
          id: "Buat rencana kasar dan mulai"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "실패할 경우의 수까지 대비하느라 시작이 늦어짐",
          en: "Start late because I'm preparing for all possible failure scenarios",
          ja: "失敗する可能性まで備えるため開始が遅れる",
          'zh-CN': "因为要准备所有可能的失败情况而延迟开始",
          'zh-TW': "因為要準備所有可能的失敗情況而延遲開始",
          vi: "Bắt đầu muộn vì chuẩn bị cho mọi tình huống thất bại có thể",
          id: "Mulai terlambat karena mempersiapkan semua skenario kegagalan yang mungkin"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "완벽한 준비가 될 때까지 절대 시작하지 않음",
          en: "Never start until preparation is perfect",
          ja: "完璧な準備ができるまで絶対に始めない",
          'zh-CN': "在准备完美之前绝不开始",
          'zh-TW': "在準備完美之前絕不開始",
          vi: "Không bao giờ bắt đầu cho đến khi chuẩn bị hoàn hảo",
          id: "Tidak pernah mulai sampai persiapan sempurna"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "타인의 비판이나 부정적인 피드백을 들었을 때?",
      en: "When you hear criticism or negative feedback from others?",
      ja: "他人の批判や否定的なフィードバックを聞いたとき？",
      'zh-CN': "当你听到他人的批评或负面反馈时？",
      'zh-TW': "當你聽到他人的批評或負面反饋時？",
      vi: "Khi bạn nghe lời chỉ trích hoặc phản hồi tiêu cực từ người khác?",
      id: "Ketika Anda mendengar kritik atau umpan balik negatif dari orang lain?"
    },
    options: [
      {
        text: {
          ko: "한 귀로 듣고 한 귀로 흘림",
          en: "Listen with one ear and let it go out the other",
          ja: "片耳で聞いて片耳から流す",
          'zh-CN': "一只耳朵进一只耳朵出",
          'zh-TW': "一隻耳朵進一隻耳朵出",
          vi: "Nghe một bên tai và để nó trôi qua",
          id: "Dengarkan dengan satu telinga dan biarkan keluar dari telinga lainnya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "필요한 부분만 수용하고 감정적으로 담아두지 않음",
          en: "Accept only the useful parts and don't hold onto it emotionally",
          ja: "必要な部分だけ受け入れて感情的には抱え込まない",
          'zh-CN': "只接受有用的部分，不在情感上纠结",
          'zh-TW': "只接受有用的部分，不在情感上糾結",
          vi: "Chỉ chấp nhận phần hữu ích và không giữ lại về mặt cảm xúc",
          id: "Terima hanya bagian yang berguna dan jangan menyimpannya secara emosional"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "겉으로는 쿨한 척하지만 속으로는 계속 곱씹음",
          en: "Act cool on the outside but keep ruminating inside",
          ja: "表面的にはクールなふりをするが、内心ではずっと反芻する",
          'zh-CN': "表面装作冷静，但内心一直在反复思考",
          'zh-TW': "表面裝作冷靜，但內心一直在反覆思考",
          vi: "Bên ngoài tỏ ra bình tĩnh nhưng bên trong vẫn suy nghĩ mãi",
          id: "Berpura-pura tenang di luar tapi terus merenungkan di dalam"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "나라는 사람 전체가 부정당한 것 같아 무너져 내림",
          en: "Feel like my entire self is being rejected and collapse",
          ja: "自分という人間全体が否定されたように感じて崩れ落ちる",
          'zh-CN': "感觉整个人都被否定了，崩溃了",
          'zh-TW': "感覺整個人都被否定了，崩潰了",
          vi: "Cảm thấy toàn bộ con người mình bị phủ nhận và sụp đổ",
          id: "Merasa seluruh diri saya ditolak dan runtuh"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "당신이 생각하는 100점의 기준은?",
      en: "What do you think is the standard for 100 points?",
      ja: "あなたが考える100点の基準は？",
      'zh-CN': "你认为100分的标准是什么？",
      'zh-TW': "你認為100分的標準是什麼？",
      vi: "Bạn nghĩ tiêu chuẩn cho 100 điểm là gì?",
      id: "Apa yang Anda pikirkan sebagai standar untuk 100 poin?"
    },
    options: [
      {
        text: {
          ko: "남들에게 욕먹지 않을 정도",
          en: "Good enough that others won't criticize",
          ja: "他人に文句を言われない程度",
          'zh-CN': "好到别人不会批评的程度",
          'zh-TW': "好到別人不會批評的程度",
          vi: "Đủ tốt để người khác không chỉ trích",
          id: "Cukup baik sehingga orang lain tidak akan mengkritik"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "내가 노력한 만큼 결과가 나오는 것",
          en: "Results that match my effort",
          ja: "自分の努力に見合った結果が出ること",
          'zh-CN': "努力与结果相匹配",
          'zh-TW': "努力與結果相匹配",
          vi: "Kết quả tương xứng với nỗ lực của mình",
          id: "Hasil yang sesuai dengan usaha saya"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "남들이 보기에 흠잡을 데 없는 완벽함",
          en: "Perfect with no flaws that others can find",
          ja: "他人が見ても欠点のない完璧さ",
          'zh-CN': "在别人看来毫无缺点的完美",
          'zh-TW': "在別人看來毫無缺點的完美",
          vi: "Hoàn hảo không có khuyết điểm mà người khác có thể tìm thấy",
          id: "Sempurna tanpa cacat yang bisa ditemukan orang lain"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "100점은 없다. 항상 120점을 목표로 한다",
          en: "There is no 100 points. Always aim for 120 points",
          ja: "100点はない。常に120点を目指す",
          'zh-CN': "没有100分，总是以120分为目标",
          'zh-TW': "沒有100分，總是以120分為目標",
          vi: "Không có 100 điểm. Luôn nhắm đến 120 điểm",
          id: "Tidak ada 100 poin. Selalu menargetkan 120 poin"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "해야 할 일이 산더미처럼 쌓여 있을 때?",
      en: "When tasks pile up like a mountain?",
      ja: "やるべきことが山のように積み上がっているとき？",
      'zh-CN': "当任务堆积如山时？",
      'zh-TW': "當任務堆積如山時？",
      vi: "Khi công việc chất đống như núi?",
      id: "Ketika tugas menumpuk seperti gunung?"
    },
    options: [
      {
        text: {
          ko: "급한 불부터 끄고 나머지는 미루거나 포기",
          en: "Put out urgent fires first and postpone or give up the rest",
          ja: "急ぎの火事から消して、残りは先延ばしにするか諦める",
          'zh-CN': "先处理紧急的，其余的推迟或放弃",
          'zh-TW': "先處理緊急的，其餘的推遲或放棄",
          vi: "Dập lửa gấp trước, phần còn lại hoãn lại hoặc bỏ",
          id: "Padamkan api mendesak dulu dan tunda atau tinggalkan sisanya"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "우선순위를 정해서 하나씩 차근차근 처리",
          en: "Set priorities and handle them one by one systematically",
          ja: "優先順位を決めて一つずつ着実に処理する",
          'zh-CN': "确定优先级，然后逐一系统地处理",
          'zh-TW': "確定優先級，然後逐一系統地處理",
          vi: "Đặt ưu tiên và xử lý từng cái một một cách có hệ thống",
          id: "Tetapkan prioritas dan tangani satu per satu secara sistematis"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "압박감을 느끼며 야근을 해서라도 다 끝내려함",
          en: "Feel pressured and work overtime to finish everything",
          ja: "圧迫感を感じながら残業してでも全部終わらせようとする",
          'zh-CN': "感到压力，即使加班也要全部完成",
          'zh-TW': "感到壓力，即使加班也要全部完成",
          vi: "Cảm thấy áp lực và làm thêm giờ để hoàn thành tất cả",
          id: "Merasa tertekan dan bekerja lembur untuk menyelesaikan semuanya"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "잘해낼 자신이 없어서 회피하거나 도망침",
          en: "Avoid or run away because I don't have confidence to do it well",
          ja: "うまくやれる自信がないので回避したり逃げたりする",
          'zh-CN': "因为没有信心做好而回避或逃避",
          'zh-TW': "因為沒有信心做好而迴避或逃避",
          vi: "Tránh né hoặc chạy trốn vì không tự tin làm tốt",
          id: "Menghindar atau lari karena tidak percaya diri bisa melakukannya dengan baik"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "과거의 실수나 흑역사가 떠오르면?",
      en: "When past mistakes or embarrassing memories come to mind?",
      ja: "過去のミスや黒歴史が思い浮かんだとき？",
      'zh-CN': "当想起过去的错误或黑历史时？",
      'zh-TW': "當想起過去的錯誤或黑歷史時？",
      vi: "Khi những sai lầm hoặc ký ức xấu hổ trong quá khứ hiện lên?",
      id: "Ketika kesalahan masa lalu atau kenangan memalukan muncul?"
    },
    options: [
      {
        text: {
          ko: "\"그땐 어렸지\" 하고 웃어넘김",
          en: "Laugh it off saying \"I was young then\"",
          ja: "「あの頃は若かった」と言って笑い飛ばす",
          'zh-CN': "笑着说\"那时候还年轻\"",
          'zh-TW': "笑著說「那時候還年輕」",
          vi: "Cười bỏ qua nói \"Lúc đó mình còn trẻ\"",
          id: "Tertawa sambil berkata \"Saya masih muda saat itu\""
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"다음엔 안 그래야지\" 하고 교훈으로 삼음",
          en: "Take it as a lesson saying \"I won't do that next time\"",
          ja: "「次はしないようにしよう」と言って教訓にする",
          'zh-CN': "把它当作教训，说\"下次不会这样了\"",
          'zh-TW': "把它當作教訓，說「下次不會這樣了」",
          vi: "Coi đó là bài học nói \"Lần sau sẽ không như vậy\"",
          id: "Jadikan pelajaran dengan berkata \"Tidak akan melakukannya lagi lain kali\""
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"아 미쳤지...\" 이불을 걷어차며 괴로워함",
          en: "Suffer saying \"I was crazy...\" and kick the blanket",
          ja: "「ああ、バカだった...」と言って布団を蹴りながら苦しむ",
          'zh-CN': "痛苦地说\"我真是疯了...\"并踢被子",
          'zh-TW': "痛苦地說「我真是瘋了...」並踢被子",
          vi: "Đau khổ nói \"Mình điên rồi...\" và đá chăn",
          id: "Menderita sambil berkata \"Saya gila...\" dan menendang selimut"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "타임머신을 타고 가서 나를 때리고 싶을 만큼 수치스러움",
          en: "Feel so ashamed I want to take a time machine and hit myself",
          ja: "タイムマシンに乗って過去の自分を殴りたいほど恥ずかしい",
          'zh-CN': "羞愧到想坐时光机回去打自己",
          'zh-TW': "羞愧到想坐時光機回去打自己",
          vi: "Xấu hổ đến mức muốn đi cỗ máy thời gian về đánh chính mình",
          id: "Merasa sangat malu sampai ingin naik mesin waktu dan memukul diri sendiri"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "누군가에게 일을 맡길 때(위임) 당신의 태도는?",
      en: "When delegating work to someone, what is your attitude?",
      ja: "誰かに仕事を任せる（委任）とき、あなたの態度は？",
      'zh-CN': "当你把工作委托给某人时，你的态度是什么？",
      'zh-TW': "當你把工作委託給某人時，你的態度是什麼？",
      vi: "Khi bạn ủy thác công việc cho ai đó, thái độ của bạn là gì?",
      id: "Ketika mendelegasikan pekerjaan kepada seseorang, apa sikap Anda?"
    },
    options: [
      {
        text: {
          ko: "\"알아서 잘 해주세요.\" 전적으로 믿고 맡김",
          en: "\"Please handle it well.\" Trust completely and delegate",
          ja: "「よろしくお願いします。」完全に信頼して任せる",
          'zh-CN': "\"请好好处理。\"完全信任并委托",
          'zh-TW': "「請好好處理。」完全信任並委託",
          vi: "\"Xin hãy xử lý tốt.\" Tin tưởng hoàn toàn và ủy thác",
          id: "\"Tolong tangani dengan baik.\" Percaya sepenuhnya dan delegasikan"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "중간보고만 잘 해주면 크게 터치하지 않음",
          en: "Don't interfere much as long as progress reports are good",
          ja: "中間報告さえしっかりしていれば大きく口出ししない",
          'zh-CN': "只要进度报告良好就不太干预",
          'zh-TW': "只要進度報告良好就不太干預",
          vi: "Không can thiệp nhiều miễn là báo cáo tiến độ tốt",
          id: "Tidak terlalu ikut campur selama laporan kemajuan baik"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "불안해서 계속 확인하고 수정 사항을 지시함",
          en: "Feel anxious and keep checking and giving instructions for corrections",
          ja: "不安でずっと確認し続け、修正事項を指示する",
          'zh-CN': "感到不安，不断检查并指示修改事项",
          'zh-TW': "感到不安，不斷檢查並指示修改事項",
          vi: "Lo lắng và liên tục kiểm tra và đưa ra chỉ dẫn sửa đổi",
          id: "Merasa cemas dan terus memeriksa serta memberikan instruksi koreksi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "남을 못 믿어서 결국 내가 다시 처음부터함",
          en: "Can't trust others so end up doing it all over from the beginning myself",
          ja: "他人を信じられず、結局自分で最初からやり直す",
          'zh-CN': "无法信任他人，最终自己从头再做一遍",
          'zh-TW': "無法信任他人，最終自己從頭再做一遍",
          vi: "Không thể tin người khác nên cuối cùng tự làm lại từ đầu",
          id: "Tidak bisa mempercayai orang lain jadi akhirnya saya lakukan lagi dari awal sendiri"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "당신에게 '성공'이란?",
      en: "What does 'success' mean to you?",
      ja: "あなたにとって「成功」とは？",
      'zh-CN': "对你来说'成功'是什么？",
      'zh-TW': "對你來說「成功」是什麼？",
      vi: "'Thành công' đối với bạn là gì?",
      id: "Apa arti 'kesuksesan' bagi Anda?"
    },
    options: [
      {
        text: {
          ko: "스트레스 없이 즐겁게 사는 것",
          en: "Living happily without stress",
          ja: "ストレスなく楽しく生きること",
          'zh-CN': "没有压力地快乐生活",
          'zh-TW': "沒有壓力地快樂生活",
          vi: "Sống vui vẻ không có căng thẳng",
          id: "Hidup bahagia tanpa stres"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "적당한 부와 명예를 누리는 것",
          en: "Enjoying moderate wealth and honor",
          ja: "適度な富と名誉を享受すること",
          'zh-CN': "享受适度的财富和荣誉",
          'zh-TW': "享受適度的財富和榮譽",
          vi: "Tận hưởng của cải và danh vọng vừa phải",
          id: "Menikmati kekayaan dan kehormatan yang moderat"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "내 분야에서 최고로 인정받는 것",
          en: "Being recognized as the best in my field",
          ja: "自分の分野で最高として認められること",
          'zh-CN': "在我的领域被认可为最好",
          'zh-TW': "在我的領域被認可為最好",
          vi: "Được công nhận là tốt nhất trong lĩnh vực của mình",
          id: "Diakui sebagai yang terbaik di bidang saya"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "결점 없는 완벽한 커리어와 삶을 사는 것",
          en: "Living a perfect career and life with no flaws",
          ja: "欠点のない完璧なキャリアと人生を送ること",
          'zh-CN': "过着没有缺点的完美职业和人生",
          'zh-TW': "過著沒有缺點的完美職業和人生",
          vi: "Sống một sự nghiệp và cuộc sống hoàn hảo không có khuyết điểm",
          id: "Menjalani karier dan kehidupan sempurna tanpa cacat"
        },
        score: 3 // D
      }
    ]
  }
];

export const phase2PerfectionismResults: Phase2PerfectionismResult[] = [
  {
    type: "Type1",
    emoji: "🎵",
    title: {
      ko: "긍정의 아이콘, 대충의 미학가",
      en: "Icon of Positivity, Aesthetic of 'Good Enough'",
      ja: "ポジティブのアイコン、適当の美学",
      'zh-CN': "积极的标志，'差不多'的美学",
      'zh-TW': "積極的標誌，「差不多」的美學",
      vi: "Biểu tượng tích cực, Thẩm mỹ của 'Đủ tốt'",
      id: "Ikon Positivitas, Estetika 'Cukup Baik'"
    },
    shortDescription: {
      ko: "\"인생 뭐 있어? 즐겁게 살면 그만이지!\"",
      en: "\"What's life? Just live happily!\"",
      ja: "「人生何がある？楽しく生きればそれでいいじゃない！」",
      'zh-CN': "\"人生是什么？快乐地生活就够了！\"",
      'zh-TW': "「人生是什麼？快樂地生活就夠了！」",
      vi: "\"Cuộc sống là gì? Cứ sống vui vẻ là được!\"",
      id: "\"Apa itu hidup? Hidup bahagia saja sudah cukup!\""
    },
    description: {
      ko: "당신은 완벽주의와는 거리가 아주 먼 자유로운 영혼입니다. 결과보다는 과정을 즐기며, 스트레스를 거의 받지 않습니다. \"이 정도면 훌륭해\"라고 스스로를 칭찬할 줄 아는 높은 자존감을 가졌습니다. 다만, 때로는 꼼꼼함이 부족해 주변 사람들을 당황하게 만들 수도 있습니다.",
      en: "You are a free spirit far from perfectionism. You enjoy the process more than the result and rarely feel stressed. You have high self-esteem and know how to praise yourself, saying \"This is great.\" However, sometimes your lack of attention to detail can confuse those around you.",
      ja: "あなたは完璧主義とは程遠い自由な魂です。結果よりも過程を楽しみ、ストレスをほとんど感じません。「これで十分だ」と自分を褒められる高い自尊心を持っています。ただし、時には細かさが不足して周りの人を当惑させることもあります。",
      'zh-CN': "你是一个远离完美主义的自由灵魂。你更享受过程而不是结果，几乎不感到压力。你拥有高自尊，知道如何赞美自己，说\"这已经很好了\"。然而，有时你缺乏细致可能会让周围的人感到困惑。",
      'zh-TW': "你是一個遠離完美主義的自由靈魂。你更享受過程而不是結果，幾乎不感到壓力。你擁有高自尊，知道如何讚美自己，說「這已經很好了」。然而，有時你缺乏細緻可能會讓周圍的人感到困惑。",
      vi: "Bạn là một tâm hồn tự do xa rời chủ nghĩa hoàn hảo. Bạn tận hưởng quá trình hơn kết quả và hiếm khi cảm thấy căng thẳng. Bạn có lòng tự trọng cao và biết cách tự khen mình, nói \"Thế này là tuyệt rồi\". Tuy nhiên, đôi khi sự thiếu chú ý đến chi tiết có thể khiến những người xung quanh bối rối.",
      id: "Anda adalah jiwa bebas yang jauh dari perfeksionisme. Anda menikmati proses lebih dari hasil dan jarang merasa stres. Anda memiliki harga diri tinggi dan tahu cara memuji diri sendiri, mengatakan \"Ini sudah bagus\". Namun, terkadang kurangnya perhatian pada detail dapat membingungkan orang di sekitar Anda."
    },
    perfectionismLevel: {
      ko: "5%",
      en: "5%",
      ja: "5%",
      'zh-CN': "5%",
      'zh-TW': "5%",
      vi: "5%",
      id: "5%"
    },
    characteristics: {
      ko: "긍정왕, 귀차니즘, 행복 지수 높음",
      en: "Optimism king, Lazyism, High happiness index",
      ja: "ポジティブ王、面倒くさがり、幸福指数高い",
      'zh-CN': "乐观之王，懒散主义，幸福指数高",
      'zh-TW': "樂觀之王，懶散主義，幸福指數高",
      vi: "Vua tích cực, Chủ nghĩa lười, Chỉ số hạnh phúc cao",
      id: "Raja optimisme, Kemalasan, Indeks kebahagiaan tinggi"
    },
    prescription: {
      ko: "가끔은 디테일을 챙기는 연습이 필요합니다.",
      en: "Sometimes you need to practice paying attention to details.",
      ja: "時には細部に気を配る練習が必要です。",
      'zh-CN': "有时你需要练习注意细节。",
      'zh-TW': "有時你需要練習注意細節。",
      vi: "Đôi khi bạn cần luyện tập chú ý đến chi tiết.",
      id: "Kadang-kadang Anda perlu berlatih memperhatikan detail."
    }
  },
  {
    type: "Type2",
    emoji: "🏃‍♂️",
    title: {
      ko: "유연한 사고, 건강한 성취자",
      en: "Flexible Thinking, Healthy Achiever",
      ja: "柔軟な思考、健康的な達成者",
      'zh-CN': "灵活思维，健康的成就者",
      'zh-TW': "靈活思維，健康的成就者",
      vi: "Tư duy linh hoạt, Người đạt thành tựu lành mạnh",
      id: "Pemikiran Fleksibel, Pencapaian Sehat"
    },
    shortDescription: {
      ko: "\"완벽하진 않지만 최선을 다했어.\"",
      en: "\"It's not perfect, but I did my best.\"",
      ja: "「完璧ではないが、最善を尽くした。」",
      'zh-CN': "\"虽然不完美，但我尽力了。\"",
      'zh-TW': "「雖然不完美，但我盡力了。」",
      vi: "\"Không hoàn hảo nhưng mình đã cố gắng hết sức.\"",
      id: "\"Tidak sempurna, tapi saya sudah berusaha sebaik mungkin.\""
    },
    description: {
      ko: "당신은 건강한 수준의 성취 욕구를 가지고 있습니다. 목표를 위해 노력하지만, 실수했을 때 유연하게 대처할 줄 압니다. 실패를 두려워하기보다는 배움의 기회로 삼을 줄 아는 탄탄한 멘탈의 소유자입니다. 일과 삶의 균형(워라밸)을 잘 지키고 있습니다.",
      en: "You have a healthy level of achievement drive. You work hard toward your goals but know how to handle mistakes flexibly. You have a strong mindset that sees failure as a learning opportunity rather than something to fear. You maintain a good work-life balance well.",
      ja: "あなたは健康的なレベルの達成欲求を持っています。目標のために努力しますが、ミスをしたときは柔軟に対処できます。失敗を恐れるよりも学習の機会として捉えられる強固なメンタルの持ち主です。仕事と生活のバランス（ワークライフバランス）をよく保っています。",
      'zh-CN': "你拥有健康的成就动机水平。你为目标努力，但知道如何灵活处理错误。你拥有强大的心态，将失败视为学习机会而不是恐惧。你很好地保持了工作与生活的平衡。",
      'zh-TW': "你擁有健康的成就動機水平。你為目標努力，但知道如何靈活處理錯誤。你擁有強大的心態，將失敗視為學習機會而不是恐懼。你很好地保持了工作與生活的平衡。",
      vi: "Bạn có mức độ động lực thành tựu lành mạnh. Bạn làm việc chăm chỉ để đạt mục tiêu nhưng biết cách xử lý sai lầm một cách linh hoạt. Bạn có tâm lý vững vàng coi thất bại là cơ hội học hỏi thay vì sợ hãi. Bạn duy trì cân bằng công việc-cuộc sống tốt.",
      id: "Anda memiliki tingkat dorongan pencapaian yang sehat. Anda bekerja keras menuju tujuan tetapi tahu cara menangani kesalahan dengan fleksibel. Anda memiliki pola pikir yang kuat yang melihat kegagalan sebagai peluang belajar daripada sesuatu yang ditakuti. Anda mempertahankan keseimbangan kerja-kehidupan dengan baik."
    },
    perfectionismLevel: {
      ko: "30%",
      en: "30%",
      ja: "30%",
      'zh-CN': "30%",
      'zh-TW': "30%",
      vi: "30%",
      id: "30%"
    },
    characteristics: {
      ko: "적당한 욕심, 멘탈 회복 빠름, 효율적",
      en: "Moderate ambition, Fast mental recovery, Efficient",
      ja: "適度な野心、メンタル回復が早い、効率的",
      'zh-CN': "适度的野心，心理恢复快，高效",
      'zh-TW': "適度的野心，心理恢復快，高效",
      vi: "Tham vọng vừa phải, Phục hồi tinh thần nhanh, Hiệu quả",
      id: "Ambisi moderat, Pemulihan mental cepat, Efisien"
    },
    prescription: {
      ko: "지금처럼 건강한 마인드를 유지하세요.",
      en: "Maintain your healthy mindset as you do now.",
      ja: "今のように健康的なマインドを維持してください。",
      'zh-CN': "保持你现在这样健康的心态。",
      'zh-TW': "保持你現在這樣健康的心態。",
      vi: "Duy trì tâm lý lành mạnh như hiện tại.",
      id: "Pertahankan pola pikir sehat Anda seperti sekarang."
    }
  },
  {
    type: "Type3",
    emoji: "👀",
    title: {
      ko: "타인 의식형, 인정 욕구 모범생",
      en: "Other-Aware Type, Recognition-Seeking Model Student",
      ja: "他人意識型、承認欲求の優等生",
      'zh-CN': "他人意识型，渴望认可的优秀学生",
      'zh-TW': "他人意識型，渴望認可的優秀學生",
      vi: "Kiểu ý thức người khác, Học sinh mẫu mực khao khát được công nhận",
      id: "Tipe Sadar Orang Lain, Siswa Teladan yang Haus Pengakuan"
    },
    shortDescription: {
      ko: "\"남들에게 실망감을 주기 싫어.\"",
      en: "\"I don't want to disappoint others.\"",
      ja: "「他人に失望を与えたくない。」",
      'zh-CN': "\"我不想让别人失望。\"",
      'zh-TW': "「我不想讓別人失望。」",
      vi: "\"Mình không muốn làm người khác thất vọng.\"",
      id: "\"Saya tidak ingin mengecewakan orang lain.\""
    },
    description: {
      ko: "당신은 스스로의 기준보다는 타인의 평가에 예민한 완벽주의자입니다. 남들에게 '일 잘하는 사람', '좋은 사람'으로 보이고 싶은 욕구가 강해서 무리하게 노력합니다. 겉으로는 완벽해 보이지만, 속으로는 인정받지 못할까 봐 늘 불안해하고 있습니다.",
      en: "You are a perfectionist who is sensitive to others' evaluations rather than your own standards. You have a strong desire to appear as a 'competent person' and 'good person' to others, so you push yourself too hard. You look perfect on the outside, but inside you're always anxious about not being recognized.",
      ja: "あなたは自分の基準よりも他人の評価に敏感な完璧主義者です。他人に「仕事ができる人」「良い人」として見られたいという欲求が強く、無理をして努力します。表面的には完璧に見えますが、内面では認められないのではないかと常に不安を感じています。",
      'zh-CN': "你是一个对他人评价比对自己标准更敏感的完美主义者。你强烈渴望在别人面前显得是'能干的人'和'好人'，所以过度努力。你外表看起来很完美，但内心总是担心不被认可。",
      'zh-TW': "你是一個對他人評價比對自己標準更敏感的完美主義者。你強烈渴望在別人面前顯得是「能幹的人」和「好人」，所以過度努力。你外表看起來很完美，但內心總是擔心不被認可。",
      vi: "Bạn là một người theo chủ nghĩa hoàn hảo nhạy cảm với đánh giá của người khác hơn là tiêu chuẩn của chính mình. Bạn có mong muốn mạnh mẽ được xuất hiện như một 'người có năng lực' và 'người tốt' trước người khác, nên bạn ép mình quá mức. Bạn trông hoàn hảo bên ngoài, nhưng bên trong bạn luôn lo lắng về việc không được công nhận.",
      id: "Anda adalah perfeksionis yang sensitif terhadap evaluasi orang lain daripada standar Anda sendiri. Anda memiliki keinginan kuat untuk tampil sebagai 'orang yang kompeten' dan 'orang baik' di depan orang lain, jadi Anda memaksa diri terlalu keras. Anda terlihat sempurna di luar, tapi di dalam Anda selalu cemas tentang tidak diakui."
    },
    perfectionismLevel: {
      ko: "50%",
      en: "50%",
      ja: "50%",
      'zh-CN': "50%",
      'zh-TW': "50%",
      vi: "50%",
      id: "50%"
    },
    characteristics: {
      ko: "눈치 빠름, 거절 못 함, 칭찬에 목마름",
      en: "Quick to read situations, Can't say no, Thirsty for praise",
      ja: "空気を読むのが早い、断れない、褒め言葉に飢えている",
      'zh-CN': "善于察言观色，无法拒绝，渴望赞美",
      'zh-TW': "善於察言觀色，無法拒絕，渴望讚美",
      vi: "Nhanh nhạy đọc tình huống, Không thể từ chối, Khát khao lời khen",
      id: "Cepat membaca situasi, Tidak bisa menolak, Haus pujian"
    },
    prescription: {
      ko: "남의 시선보다 내 만족을 최우선으로 생각하세요.",
      en: "Prioritize your own satisfaction over others' opinions.",
      ja: "他人の視線よりも自分の満足を最優先に考えてください。",
      'zh-CN': "优先考虑自己的满足感，而不是别人的看法。",
      'zh-TW': "優先考慮自己的滿足感，而不是別人的看法。",
      vi: "Ưu tiên sự hài lòng của bản thân hơn ý kiến của người khác.",
      id: "Prioritaskan kepuasan Anda sendiri daripada pendapat orang lain."
    }
  },
  {
    type: "Type4",
    emoji: "🛌",
    title: {
      ko: "불안한 회피형, 게으른 완벽주의자",
      en: "Anxious Avoidant Type, Lazy Perfectionist",
      ja: "不安な回避型、怠惰な完璧主義者",
      'zh-CN': "焦虑回避型，懒惰的完美主义者",
      'zh-TW': "焦慮迴避型，懶惰的完美主義者",
      vi: "Kiểu tránh né lo âu, Người theo chủ nghĩa hoàn hảo lười biếng",
      id: "Tipe Menghindar Cemas, Perfeksionis Malas"
    },
    shortDescription: {
      ko: "\"잘할 수 없으면 시작도 안 할래.\"",
      en: "\"If I can't do it well, I won't even start.\"",
      ja: "「うまくできないなら始めもしない。」",
      'zh-CN': "\"如果做不好，我甚至不会开始。\"",
      'zh-TW': "「如果做不好，我甚至不會開始。」",
      vi: "\"Nếu không làm tốt được thì mình sẽ không bắt đầu.\"",
      id: "\"Jika tidak bisa melakukannya dengan baik, saya bahkan tidak akan mulai.\""
    },
    description: {
      ko: "당신은 기준이 너무 높아서 오히려 시작을 두려워하는 타입입니다. 완벽하게 해내야 한다는 압박감 때문에 일을 자꾸 미루거나(Procrastination), 아예 포기해 버립니다. 게을러 보이지만 사실은 누구보다 잘하고 싶은 욕망이 가득한 사람입니다.",
      en: "You are the type who is so afraid of starting because your standards are too high. Due to the pressure of having to do things perfectly, you keep procrastinating or give up entirely. You may look lazy, but in fact, you are someone full of desire to do better than anyone else.",
      ja: "あなたは基準が高すぎて、むしろ始めることを恐れるタイプです。完璧にやらなければならないという圧迫感から、仕事を先延ばしにしたり（先延ばし）、完全に諦めてしまいます。怠け者に見えますが、実際には誰よりも上手にやりたいという欲望に満ちた人です。",
      'zh-CN': "你是那种因为标准太高而害怕开始的类型。由于必须完美完成的压力，你不断拖延或完全放弃。你可能看起来很懒，但实际上，你是一个比任何人都想做得更好的充满渴望的人。",
      'zh-TW': "你是那種因為標準太高而害怕開始的類型。由於必須完美完成的壓力，你不斷拖延或完全放棄。你可能看起來很懶，但實際上，你是一個比任何人都想做得更好的充滿渴望的人。",
      vi: "Bạn là kiểu người sợ bắt đầu vì tiêu chuẩn quá cao. Do áp lực phải làm mọi thứ hoàn hảo, bạn liên tục trì hoãn hoặc hoàn toàn từ bỏ. Bạn có thể trông lười biếng, nhưng thực tế, bạn là người đầy khao khát muốn làm tốt hơn bất kỳ ai.",
      id: "Anda adalah tipe yang begitu takut memulai karena standar Anda terlalu tinggi. Karena tekanan harus melakukan segalanya dengan sempurna, Anda terus menunda atau menyerah sepenuhnya. Anda mungkin terlihat malas, tetapi sebenarnya, Anda adalah seseorang yang penuh keinginan untuk melakukan lebih baik daripada siapa pun."
    },
    perfectionismLevel: {
      ko: "70%",
      en: "70%",
      ja: "70%",
      'zh-CN': "70%",
      'zh-TW': "70%",
      vi: "70%",
      id: "70%"
    },
    characteristics: {
      ko: "벼락치기, 시작이 어려움, 무기력",
      en: "Cramming, Difficulty starting, Lethargy",
      ja: "一夜漬け、始めるのが難しい、無気力",
      'zh-CN': "临时抱佛脚，难以开始，无精打采",
      'zh-TW': "臨時抱佛腳，難以開始，無精打采",
      vi: "Học dồn, Khó bắt đầu, Uể oải",
      id: "SKS (Sistem Kebut Semalam), Kesulitan memulai, Kelesuan"
    },
    prescription: {
      ko: "'대충 하자'는 마음으로 일단 시작하는 게 중요합니다.",
      en: "It's important to just start with a 'let's do it roughly' mindset.",
      ja: "「適当にやろう」という気持ちでまず始めることが重要です。",
      'zh-CN': "重要的是以'随便做做'的心态先开始。",
      'zh-TW': "重要的是以「隨便做做」的心態先開始。",
      vi: "Quan trọng là cứ bắt đầu với tâm lý 'làm đại đi'.",
      id: "Penting untuk memulai dengan pola pikir 'lakukan saja dengan kasar'."
    }
  },
  {
    type: "Type5",
    emoji: "🔥",
    title: {
      ko: "스스로를 볶아대는, 자책형 완벽주의자",
      en: "Self-Tormenting, Self-Blame Type Perfectionist",
      ja: "自分を責め立てる、自責型完璧主義者",
      'zh-CN': "自我折磨，自责型完美主义者",
      'zh-TW': "自我折磨，自責型完美主義者",
      vi: "Tự hành hạ, Người theo chủ nghĩa hoàn hảo tự trách",
      id: "Menyiksa Diri Sendiri, Perfeksionis Tipe Menyalahkan Diri"
    },
    shortDescription: {
      ko: "\"난 아직 부족해. 더 잘해야 해.\"",
      en: "\"I'm still lacking. I need to do better.\"",
      ja: "「私はまだ足りない。もっと上手くやらなければ。」",
      'zh-CN': "\"我还不够。我需要做得更好。\"",
      'zh-TW': "「我還不夠。我需要做得更好。」",
      vi: "\"Mình vẫn còn thiếu sót. Mình cần làm tốt hơn.\"",
      id: "\"Saya masih kurang. Saya perlu melakukan lebih baik.\""
    },
    description: {
      ko: "당신은 자신에게 지나치게 가혹한 기준을 들이댑니다. 99개를 잘해도 1개의 실수를 용납하지 못하고 자책합니다. 성과는 높을지 몰라도 만족감을 느끼지 못하며, 끊임없이 자신을 채찍질합니다. 번아웃이 오기 직전의 위험한 상태일 수 있습니다.",
      en: "You impose excessively harsh standards on yourself. Even if you do 99 things well, you can't accept one mistake and blame yourself. Your performance may be high, but you can't feel satisfaction and constantly whip yourself. You may be in a dangerous state right before burnout.",
      ja: "あなたは自分に過度に厳しい基準を課します。99個うまくやっても、1つのミスを許容できず自分を責めます。成果は高いかもしれませんが、満足感を感じられず、絶えず自分を鞭打ちます。燃え尽き症候群になる直前の危険な状態かもしれません。",
      'zh-CN': "你对自己施加了过于苛刻的标准。即使你做好了99件事，你也不能接受一个错误并自责。你的表现可能很高，但你感觉不到满足，不断鞭策自己。你可能处于即将倦怠的危险状态。",
      'zh-TW': "你對自己施加了過於苛刻的標準。即使你做好了99件事，你也不能接受一個錯誤並自責。你的表現可能很高，但你感覺不到滿足，不斷鞭策自己。你可能處於即將倦怠的危險狀態。",
      vi: "Bạn áp đặt tiêu chuẩn quá khắc nghiệt cho chính mình. Ngay cả khi bạn làm tốt 99 việc, bạn không thể chấp nhận một sai lầm và tự trách mình. Hiệu suất của bạn có thể cao, nhưng bạn không thể cảm thấy hài lòng và liên tục tự thúc đẩy mình. Bạn có thể đang ở trạng thái nguy hiểm ngay trước khi kiệt sức.",
      id: "Anda memberlakukan standar yang terlalu keras pada diri sendiri. Bahkan jika Anda melakukan 99 hal dengan baik, Anda tidak bisa menerima satu kesalahan dan menyalahkan diri sendiri. Kinerja Anda mungkin tinggi, tetapi Anda tidak bisa merasakan kepuasan dan terus-menerus mencambuk diri sendiri. Anda mungkin berada dalam keadaan berbahaya tepat sebelum kelelahan."
    },
    perfectionismLevel: {
      ko: "90%",
      en: "90%",
      ja: "90%",
      'zh-CN': "90%",
      'zh-TW': "90%",
      vi: "90%",
      id: "90%"
    },
    characteristics: {
      ko: "자기 비하, 만성 피로, 만족 불가",
      en: "Self-deprecation, Chronic fatigue, Unable to feel satisfied",
      ja: "自己卑下、慢性疲労、満足できない",
      'zh-CN': "自我贬低，慢性疲劳，无法满足",
      'zh-TW': "自我貶低，慢性疲勞，無法滿足",
      vi: "Tự hạ thấp bản thân, Mệt mỏi mãn tính, Không thể cảm thấy hài lòng",
      id: "Merendahkan diri sendiri, Kelelahan kronis, Tidak bisa merasa puas"
    },
    prescription: {
      ko: "60점만 맞아도 괜찮습니다. 자신을 칭찬해주세요.",
      en: "It's okay to get just 60 points. Praise yourself.",
      ja: "60点だけでも大丈夫です。自分を褒めてください。",
      'zh-CN': "只得到60分也没关系。赞美自己。",
      'zh-TW': "只得到60分也沒關係。讚美自己。",
      vi: "Chỉ được 60 điểm cũng ổn. Hãy tự khen mình.",
      id: "Tidak apa-apa hanya mendapat 60 poin. Puji diri sendiri."
    }
  },
  {
    type: "Type6",
    emoji: "🚧",
    title: {
      ko: "통제 불능, 강박적 통제자",
      en: "Out of Control, Obsessive Controller",
      ja: "制御不能、強迫的コントローラー",
      'zh-CN': "失控，强迫性控制者",
      'zh-TW': "失控，強迫性控制者",
      vi: "Mất kiểm soát, Người kiểm soát ám ảnh",
      id: "Di Luar Kendali, Pengontrol Obsesif"
    },
    shortDescription: {
      ko: "\"내 방식대로 안 되면 견딜 수 없어.\"",
      en: "\"I can't stand it if it doesn't go my way.\"",
      ja: "「自分のやり方でいかないと我慢できない。」",
      'zh-CN': "\"如果不按我的方式，我无法忍受。\"",
      'zh-TW': "「如果不按我的方式，我無法忍受。」",
      vi: "\"Mình không thể chịu được nếu không theo cách của mình.\"",
      id: "\"Saya tidak tahan jika tidak berjalan sesuai cara saya.\""
    },
    description: {
      ko: "당신은 일뿐만 아니라 주변 환경과 사람까지 완벽하게 통제하려 합니다. 예상을 벗어나는 상황을 극도로 싫어하며, 타인의 방식은 믿지 못합니다. 본인도 힘들지만, 함께 일하는 동료나 가족들을 숨 막히게 만들 수 있습니다. 내려놓는 연습이 시급합니다.",
      en: "You try to perfectly control not only work but also your surroundings and people. You extremely dislike situations that deviate from expectations and can't trust others' ways. It's hard for you too, but you can suffocate colleagues and family members who work with you. It's urgent to practice letting go.",
      ja: "あなたは仕事だけでなく、周囲の環境や人々までも完璧にコントロールしようとします。予想外の状況を極度に嫌い、他人のやり方を信じることができません。本人も大変ですが、一緒に働く同僚や家族を息苦しくさせてしまう可能性があります。手放す練習が急務です。",
      'zh-CN': "你试图不仅控制工作，还完美控制周围环境和人。你极度讨厌偏离预期的情况，无法信任他人的方式。这对你来说也很困难，但可能会让与你一起工作的同事或家人感到窒息。迫切需要练习放手。",
      'zh-TW': "你試圖不僅控制工作，還完美控制周圍環境和人。你極度討厭偏離預期的情況，無法信任他人的方式。這對你來說也很困難，但可能會讓與你一起工作的同事或家人感到窒息。迫切需要練習放手。",
      vi: "Bạn cố gắng kiểm soát hoàn hảo không chỉ công việc mà còn cả môi trường xung quanh và con người. Bạn cực kỳ ghét những tình huống lệch khỏi kỳ vọng và không thể tin tưởng cách của người khác. Bản thân bạn cũng khó khăn, nhưng bạn có thể khiến đồng nghiệp và thành viên gia đình làm việc cùng bạn cảm thấy ngột ngạt. Việc luyện tập buông bỏ là cấp thiết.",
      id: "Anda mencoba mengontrol dengan sempurna tidak hanya pekerjaan tetapi juga lingkungan sekitar dan orang-orang. Anda sangat tidak menyukai situasi yang menyimpang dari harapan dan tidak bisa mempercayai cara orang lain. Ini sulit bagi Anda juga, tetapi Anda dapat membuat rekan kerja dan anggota keluarga yang bekerja dengan Anda merasa tercekik. Sangat mendesak untuk berlatih melepaskan."
    },
    perfectionismLevel: {
      ko: "99.9%",
      en: "99.9%",
      ja: "99.9%",
      'zh-CN': "99.9%",
      'zh-TW': "99.9%",
      vi: "99.9%",
      id: "99.9%"
    },
    characteristics: {
      ko: "마이크로 매니징, 강박증, 예민함",
      en: "Micro-managing, Obsession, Sensitivity",
      ja: "マイクロマネジメント、強迫観念、敏感さ",
      'zh-CN': "微观管理，强迫症，敏感",
      'zh-TW': "微觀管理，強迫症，敏感",
      vi: "Quản lý vi mô, Ám ảnh, Nhạy cảm",
      id: "Mikro-manajemen, Obsesi, Sensitivitas"
    },
    prescription: {
      ko: "세상은 원래 불완전하다는 것을 받아들이세요.",
      en: "Accept that the world is inherently imperfect.",
      ja: "世界は元々不完全であることを受け入れてください。",
      'zh-CN': "接受世界本来就是不完美的。",
      'zh-TW': "接受世界本來就是不完美的。",
      vi: "Hãy chấp nhận rằng thế giới vốn dĩ không hoàn hảo.",
      id: "Terima bahwa dunia pada dasarnya tidak sempurna."
    }
  }
];

// 답변 배열을 받아서 총점을 계산하고, 점수에 따라 Type을 반환
// 총점 0~36점
// 0~5점: Type 1
// 6~12점: Type 2
// 13~19점: Type 3
// 20~26점: Type 4
// 27~32점: Type 5
// 33~36점: Type 6
export function calculatePhase2PerfectionismResult(answers: number[]): string {
  // answers는 각 질문에 대한 선택된 option의 score 배열
  // 예: [0, 1, 2, 3, 0, ...]
  
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 5) {
    return "Type1";
  } else if (totalScore >= 6 && totalScore <= 12) {
    return "Type2";
  } else if (totalScore >= 13 && totalScore <= 19) {
    return "Type3";
  } else if (totalScore >= 20 && totalScore <= 26) {
    return "Type4";
  } else if (totalScore >= 27 && totalScore <= 32) {
    return "Type5";
  } else {
    return "Type6";
  }
}
