// 이별 대처 스타일 테스트 데이터 (다국어)
export interface BreakupQuestion {
  id: number;
  question: Record<string, string>;
  options: Array<{
    text: Record<string, string>;
    scores: Record<string, number>;
  }>;
}

export interface BreakupResult {
  type: string;
  title: Record<string, string>;
  description: Record<string, string>;
  characteristics: Record<string, string>;
  pros: Record<string, string>;
  cons: Record<string, string>;
  advice: Record<string, string>;
  recoveryPeriod: Record<string, string>;
  compatibility: {
    best: Record<string, string>;
    good: Record<string, string>;
    caution: Record<string, string>;
    difficult: Record<string, string>;
  };
  emoji: string;
}

// 질문 데이터 (다국어)
export const breakupQuestions: BreakupQuestion[] = [
  {
    id: 1,
    question: {
      ko: "이별을 통보받은 직후, 당신의 첫 반응은?",
      en: "What is your first reaction when you receive the breakup news?",
      ja: "別れを告げられた直後、あなたの最初の反応は？",
      "zh-CN": "当你收到分手消息时，你的第一反应是什么？",
      "zh-TW": "當你收到分手消息時，你的第一反應是什麼？",
      vi: "Phản ứng đầu tiên của bạn khi nhận được tin chia tay là gì?",
      id: "Apa reaksi pertama Anda ketika menerima kabar putus cinta?"
    },
    options: [
      {
        text: {
          ko: "\"그래, 어쩔 수 없지\" 담담하게 받아들임",
          en: "\"Well, there's nothing I can do\" Accept it calmly",
          ja: "「まあ、仕方ない」冷静に受け入れる",
          "zh-CN": "\"好吧，没办法\"冷静地接受",
          "zh-TW": "\"好吧，沒辦法\"冷靜地接受",
          vi: "\"Ờ, không có cách nào\" Chấp nhận một cách bình tĩnh",
          id: "\"Ya, tidak ada yang bisa dilakukan\" Menerima dengan tenang"
        },
        scores: { "Type1": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "눈물이 쏟아지고 감정이 북받침",
          en: "Tears flow and emotions overwhelm",
          ja: "涙があふれ、感情が込み上げる",
          "zh-CN": "眼泪流下，情绪激动",
          "zh-TW": "眼淚流下，情緒激動",
          vi: "Nước mắt tuôn trào và cảm xúc dâng trào",
          id: "Air mata mengalir dan emosi membanjiri"
        },
        scores: { "Type2": 3 }
      },
      {
        text: {
          ko: "\"왜 그런 거야?\" 이유를 차근차근 물어봄",
          en: "\"Why is this happening?\" Ask for reasons step by step",
          ja: "「なぜこんなことになるの？」理由を一つずつ聞く",
          "zh-CN": "\"为什么会这样？\"逐步询问原因",
          "zh-TW": "\"為什麼會這樣？\"逐步詢問原因",
          vi: "\"Tại sao lại như vậy?\" Hỏi từng lý do một cách cẩn thận",
          id: "\"Mengapa ini terjadi?\" Bertanya alasan secara bertahap"
        },
        scores: { "Type3": 3 }
      },
      {
        text: {
          ko: "일단 현실감이 없고 멍함",
          en: "First, no sense of reality and feeling numb",
          ja: "とりあえず現実感がなく、ぼーっとしている",
          "zh-CN": "首先，没有现实感，感到麻木",
          "zh-TW": "首先，沒有現實感，感到麻木",
          vi: "Trước tiên, không có cảm giác thực tế và cảm thấy tê liệt",
          id: "Pertama, tidak ada rasa kenyataan dan merasa mati rasa"
        },
        scores: { "Type4": 3, "Type6": 1 }
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "이별 후 첫 주, 당신의 하루는?",
      en: "During the first week after the breakup, how do you spend your day?",
      ja: "別れ後の最初の週、あなたの一日は？",
      "zh-CN": "分手后第一周，你的一天是怎样的？",
      "zh-TW": "分手後第一週，你的一天是怎樣的？",
      vi: "Trong tuần đầu sau chia tay, bạn trải qua ngày như thế nào?",
      id: "Selama minggu pertama setelah putus cinta, bagaimana Anda menghabiskan hari?"
    },
    options: [
      {
        text: {
          ko: "평소처럼 일상을 유지하려고 노력",
          en: "Try to maintain daily routine as usual",
          ja: "普段通り日常生活を維持しようと努力",
          "zh-CN": "努力维持平时的日常生活",
          "zh-TW": "努力維持平時的日常生活",
          vi: "Cố gắng duy trì thói quen hàng ngày như bình thường",
          id: "Berusaha mempertahankan rutinitas harian seperti biasa"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "방에만 있으며 슬픔에 잠김",
          en: "Stay only in the room and drown in sadness",
          ja: "部屋にだけいて悲しみに沈む",
          "zh-CN": "只待在房间里，沉浸在悲伤中",
          "zh-TW": "只待在房間裡，沉浸在悲傷中",
          vi: "Chỉ ở trong phòng và chìm đắm trong nỗi buồn",
          id: "Hanya tinggal di kamar dan tenggelam dalam kesedihan"
        },
        scores: { "Type2": 3, "Type6": 1 }
      },
      {
        text: {
          ko: "이별 원인을 분석하고 정리함",
          en: "Analyze and organize the reasons for the breakup",
          ja: "別れの原因を分析し整理する",
          "zh-CN": "分析并整理分手的原因",
          "zh-TW": "分析並整理分手的原因",
          vi: "Phân tích và sắp xếp lý do chia tay",
          id: "Menganalisis dan mengatur alasan putus cinta"
        },
        scores: { "Type3": 3 }
      },
      {
        text: {
          ko: "친구들 만나고 운동하며 바쁘게 지냄",
          en: "Meet friends, exercise, and stay busy",
          ja: "友達に会い、運動し、忙しく過ごす",
          "zh-CN": "见朋友、运动，忙碌地度过",
          "zh-TW": "見朋友、運動，忙碌地度過",
          vi: "Gặp bạn bè, tập thể dục và sống bận rộn",
          id: "Bertemu teman, berolahraga, dan tetap sibuk"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "전 연인의 SNS를 보게 된다면?",
      en: "If you see your ex's social media?",
      ja: "元恋人のSNSを見ることになったら？",
      "zh-CN": "如果你看到前任的社交媒体？",
      "zh-TW": "如果你看到前任的社交媒體？",
      vi: "Nếu bạn thấy mạng xã hội của người yêu cũ?",
      id: "Jika Anda melihat media sosial mantan kekasih?"
    },
    options: [
      {
        text: {
          ko: "언팔로우/차단하고 안 봄",
          en: "Unfollow/block and don't look",
          ja: "アンフォロー/ブロックして見ない",
          "zh-CN": "取消关注/屏蔽，不看",
          "zh-TW": "取消關注/屏蔽，不看",
          vi: "Bỏ theo dõi/chặn và không xem",
          id: "Unfollow/blokir dan tidak melihat"
        },
        scores: { "Type1": 3, "Type5": 1 }
      },
      {
        text: {
          ko: "자주 들어가서 확인함",
          en: "Check frequently",
          ja: "頻繁にチェックする",
          "zh-CN": "经常查看",
          "zh-TW": "經常查看",
          vi: "Kiểm tra thường xuyên",
          id: "Sering memeriksa"
        },
        scores: { "Type6": 8 }
      },
      {
        text: {
          ko: "가끔 궁금하지만 참음",
          en: "Sometimes curious but resist",
          ja: "たまに気になるが我慢する",
          "zh-CN": "有时好奇但忍住",
          "zh-TW": "有時好奇但忍住",
          vi: "Thỉnh thoảng tò mò nhưng cố gắng kiềm chế",
          id: "Kadang penasaran tapi menahan diri"
        },
        scores: { "Type3": 3, "Type4": 1 }
      },
      {
        text: {
          ko: "별로 신경 안 씀",
          en: "Don't really care",
          ja: "あまり気にしない",
          "zh-CN": "不太在意",
          "zh-TW": "不太在意",
          vi: "Không thực sự quan tâm",
          id: "Tidak terlalu peduli"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "이별 후 주변 사람들에게는?",
      en: "What do you do with people around you after the breakup?",
      ja: "別れ後、周りの人たちには？",
      "zh-CN": "分手后，对周围的人你会怎样？",
      "zh-TW": "分手後，對周圍的人你會怎樣？",
      vi: "Sau chia tay, bạn sẽ làm gì với những người xung quanh?",
      id: "Setelah putus cinta, apa yang Anda lakukan dengan orang-orang di sekitar?"
    },
    options: [
      {
        text: {
          ko: "털어놓고 위로받음",
          en: "Open up and receive comfort",
          ja: "打ち明けて慰めてもらう",
          "zh-CN": "倾诉并得到安慰",
          "zh-TW": "傾訴並得到安慰",
          vi: "Mở lòng và nhận được sự an ủi",
          id: "Terbuka dan menerima kenyamanan"
        },
        scores: { "Type2": 3 }
      },
      {
        text: {
          ko: "혼자 삭이려고 함",
          en: "Try to deal with it alone",
          ja: "一人で抱え込もうとする",
          "zh-CN": "试图独自承受",
          "zh-TW": "試圖獨自承受",
          vi: "Cố gắng tự mình xử lý",
          id: "Mencoba mengatasi sendiri"
        },
        scores: { "Type6": 8 }
      },
      {
        text: {
          ko: "객관적으로 상황 설명하며 조언 구함",
          en: "Objectively explain the situation and seek advice",
          ja: "客観的に状況を説明し、アドバイスを求める",
          "zh-CN": "客观地解释情况并寻求建议",
          "zh-TW": "客觀地解釋情況並尋求建議",
          vi: "Giải thích tình huống một cách khách quan và tìm kiếm lời khuyên",
          id: "Menjelaskan situasi secara objektif dan mencari saran"
        },
        scores: { "Type3": 3 }
      },
      {
        text: {
          ko: "아무렇지 않은 척 숨김",
          en: "Hide it pretending nothing happened",
          ja: "何でもないふりをして隠す",
          "zh-CN": "装作什么都没发生地隐藏",
          "zh-TW": "裝作什麼都沒發生地隱藏",
          vi: "Giấu giếm như thể không có gì xảy ra",
          id: "Menyembunyikan seolah-olah tidak ada yang terjadi"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "둘이 자주 가던 장소를 지나칠 때?",
      en: "When you pass by places you used to go together?",
      ja: "二人でよく行った場所を通りかかった時は？",
      "zh-CN": "当你经过你们经常一起去的地方时？",
      "zh-TW": "當你經過你們經常一起去的地方時？",
      vi: "Khi bạn đi qua những nơi hai người thường đến cùng nhau?",
      id: "Ketika Anda melewati tempat-tempat yang biasa dikunjungi berdua?"
    },
    options: [
      {
        text: {
          ko: "아무렇지 않게 지나감",
          en: "Pass by without any feelings",
          ja: "何も感じずに通り過ぎる",
          "zh-CN": "毫无感觉地经过",
          "zh-TW": "毫無感覺地經過",
          vi: "Đi qua mà không có cảm xúc gì",
          id: "Melewati tanpa perasaan apapun"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "추억이 떠올라 슬픔",
          en: "Memories come back and feel sad",
          ja: "思い出がよみがえり悲しくなる",
          "zh-CN": "回忆涌上心头，感到悲伤",
          "zh-TW": "回憶湧上心頭，感到悲傷",
          vi: "Kỷ niệm ùa về và cảm thấy buồn",
          id: "Kenangan kembali dan merasa sedih"
        },
        scores: { "Type2": 3, "Type6": 2 }
      },
      {
        text: {
          ko: "그때 뭐가 잘못됐는지 생각함",
          en: "Think about what went wrong then",
          ja: "その時何が間違っていたか考える",
          "zh-CN": "思考那时出了什么问题",
          "zh-TW": "思考那時出了什麼問題",
          vi: "Suy nghĩ về những gì đã sai lầm lúc đó",
          id: "Memikirkan apa yang salah saat itu"
        },
        scores: { "Type3": 3 }
      },
      {
        text: {
          ko: "일부러 안 가거나 다른 길로 감",
          en: "Intentionally avoid or take a different route",
          ja: "わざと行かないか別の道を通る",
          "zh-CN": "故意不去或走其他路线",
          "zh-TW": "故意不去或走其他路線",
          vi: "Cố tình tránh hoặc đi đường khác",
          id: "Sengaja menghindari atau mengambil rute lain"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "전 연인이 준 선물이나 물건은?",
      en: "What about gifts or items from your ex?",
      ja: "元恋人がくれたプレゼントや物は？",
      "zh-CN": "前任送的礼物或物品呢？",
      "zh-TW": "前任送的禮物或物品呢？",
      vi: "Còn quà tặng hoặc đồ vật từ người yêu cũ thì sao?",
      id: "Bagaimana dengan hadiah atau barang dari mantan kekasih?"
    },
    options: [
      {
        text: {
          ko: "바로 정리하거나 버림",
          en: "Organize or throw away immediately",
          ja: "すぐに整理するか捨てる",
          "zh-CN": "立即整理或扔掉",
          "zh-TW": "立即整理或扔掉",
          vi: "Ngay lập tức sắp xếp hoặc vứt bỏ",
          id: "Segera mengatur atau membuang"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "간직하고 가끔 꺼내봄",
          en: "Keep them and look at them sometimes",
          ja: "大切に保管し、たまに取り出す",
          "zh-CN": "珍藏起来，偶尔拿出来看看",
          "zh-TW": "珍藏起來，偶爾拿出來看看",
          vi: "Giữ gìn và thỉnh thoảng lấy ra xem",
          id: "Menyimpannya dan sesekali mengeluarkannya"
        },
        scores: { "Type6": 8 }
      },
      {
        text: {
          ko: "필요한 것만 남기고 정리",
          en: "Keep only what's necessary and organize",
          ja: "必要なものだけ残して整理",
          "zh-CN": "只保留必要的，其他整理掉",
          "zh-TW": "只保留必要的，其他整理掉",
          vi: "Chỉ giữ lại những gì cần thiết và sắp xếp",
          id: "Hanya menyimpan yang diperlukan dan mengatur"
        },
        scores: { "Type3": 3 }
      },
      {
        text: {
          ko: "박스에 넣어두고 신경 안 씀",
          en: "Put in a box and don't care",
          ja: "箱に入れて気にしない",
          "zh-CN": "放在盒子里，不在意",
          "zh-TW": "放在盒子裡，不在意",
          vi: "Bỏ vào hộp và không quan tâm",
          id: "Masukkan ke kotak dan tidak peduli"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "혼자 있을 때 주로 뭘 하나요?",
      en: "What do you mainly do when you're alone?",
      ja: "一人の時は主に何をしますか？",
      "zh-CN": "独自一人时主要做什么？",
      "zh-TW": "獨自一人時主要做什麼？",
      vi: "Khi một mình, bạn chủ yếu làm gì?",
      id: "Apa yang Anda lakukan terutama ketika sendirian?"
    },
    options: [
      {
        text: {
          ko: "취미생활이나 자기계발",
          en: "Hobbies or self-development",
          ja: "趣味活動や自己啓発",
          "zh-CN": "兴趣爱好或自我提升",
          "zh-TW": "興趣愛好或自我提升",
          vi: "Sở thích hoặc phát triển bản thân",
          id: "Hobi atau pengembangan diri"
        },
        scores: { "Type5": 8 }
      },
      {
        text: {
          ko: "감상적인 노래 듣거나 영화 봄",
          en: "Listen to sentimental songs or watch movies",
          ja: "感傷的な歌を聞いたり映画を見たり",
          "zh-CN": "听感伤歌曲或看电影",
          "zh-TW": "聽感傷歌曲或看電影",
          vi: "Nghe nhạc tình cảm hoặc xem phim",
          id: "Mendengarkan lagu sentimental atau menonton film"
        },
        scores: { "Type2": 3, "Type6": 2 }
      },
      {
        text: {
          ko: "일기 쓰거나 생각 정리",
          en: "Write diary or organize thoughts",
          ja: "日記を書いたり考えを整理したり",
          "zh-CN": "写日记或整理思绪",
          "zh-TW": "寫日記或整理思緒",
          vi: "Viết nhật ký hoặc sắp xếp suy nghĩ",
          id: "Menulis diary atau mengatur pikiran"
        },
        scores: { "Type3": 3 }
      },
      {
        text: {
          ko: "친구들과 약속 잡거나 외출",
          en: "Make plans with friends or go out",
          ja: "友達と約束を取ったり外出したり",
          "zh-CN": "与朋友约会或外出",
          "zh-TW": "與朋友約會或外出",
          vi: "Hẹn hò với bạn bè hoặc đi ra ngoài",
          id: "Buat janji dengan teman atau keluar"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "새로운 사람에게 관심이 생긴다면?",
      en: "If you become interested in someone new?",
      ja: "新しい人に興味が湧いたら？",
      "zh-CN": "如果你对新的人产生兴趣？",
      "zh-TW": "如果你對新的人產生興趣？",
      vi: "Nếu bạn có hứng thú với ai đó mới?",
      id: "Jika Anda tertarik pada seseorang yang baru?"
    },
    options: [
      {
        text: {
          ko: "준비됐다면 자연스럽게 시작",
          en: "Start naturally if ready",
          ja: "準備ができていれば自然に始める",
          "zh-CN": "如果准备好了就自然地开始",
          "zh-TW": "如果準備好了就自然地開始",
          vi: "Bắt đầu một cách tự nhiên nếu sẵn sàng",
          id: "Mulai secara alami jika siap"
        },
        scores: { "Type1": 3, "Type5": 2 }
      },
      {
        text: {
          ko: "아직 마음이 안 가고 부담스러움",
          en: "Still not ready and feel burdened",
          ja: "まだ心が向かず負担に感じる",
          "zh-CN": "还没准备好，感到负担",
          "zh-TW": "還沒準備好，感到負擔",
          vi: "Vẫn chưa sẵn sàng và cảm thấy gánh nặng",
          id: "Masih belum siap dan merasa terbebani"
        },
        scores: { "Type2": 3, "Type6": 2 }
      },
      {
        text: {
          ko: "전 연애에서 배운 점 적용하며 신중히",
          en: "Apply lessons from previous relationship and be cautious",
          ja: "前の恋愛で学んだことを活かし慎重に",
          "zh-CN": "应用从前任关系中学到的经验，谨慎行事",
          "zh-TW": "應用從前任關係中學到的經驗，謹慎行事",
          vi: "Áp dụng bài học từ mối quan hệ trước và thận trọng",
          id: "Menerapkan pelajaran dari hubungan sebelumnya dan berhati-hati"
        },
        scores: { "Type3": 3, "Type5": 2 }
      },
      {
        text: {
          ko: "적극적으로 새로운 만남 추구",
          en: "Actively pursue new encounters",
          ja: "積極的に新しい出会いを求める",
          "zh-CN": "积极追求新的相遇",
          "zh-TW": "積極追求新的相遇",
          vi: "Tích cực tìm kiếm những cuộc gặp gỡ mới",
          id: "Aktif mencari pertemuan baru"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "이별 이유에 대해 생각할 때?",
      en: "When thinking about the reasons for the breakup?",
      ja: "別れの理由について考える時は？",
      "zh-CN": "思考分手原因时？",
      "zh-TW": "思考分手原因時？",
      vi: "Khi suy nghĩ về lý do chia tay?",
      id: "Ketika memikirkan alasan putus cinta?"
    },
    options: [
      {
        text: {
          ko: "이미 끝난 일, 생각 안 함",
          en: "It's already over, don't think about it",
          ja: "もう終わったこと、考えない",
          "zh-CN": "已经结束的事，不去想",
          "zh-TW": "已經結束的事，不去想",
          vi: "Đã kết thúc rồi, không nghĩ về nó",
          id: "Sudah selesai, tidak memikirkannya"
        },
        scores: { "Type1": 3, "Type5": 2 }
      },
      {
        text: {
          ko: "계속 떠올리며 후회하고 아쉬워함",
          en: "Keep thinking about it with regret and longing",
          ja: "ずっと思い出して後悔し惜しむ",
          "zh-CN": "不断回想，后悔和遗憾",
          "zh-TW": "不斷回想，後悔和遺憾",
          vi: "Liên tục nhớ lại với sự hối tiếc và tiếc nuối",
          id: "Terus mengingat dengan penyesalan dan kerinduan"
        },
        scores: { "Type2": 3, "Type6": 2 }
      },
      {
        text: {
          ko: "냉정하게 분석하고 교훈 찾음",
          en: "Analyze calmly and find lessons",
          ja: "冷静に分析し教訓を見つける",
          "zh-CN": "冷静分析并寻找教训",
          "zh-TW": "冷靜分析並尋找教訓",
          vi: "Phân tích một cách lạnh lùng và tìm ra bài học",
          id: "Menganalisis dengan tenang dan mencari pelajaran"
        },
        scores: { "Type3": 3, "Type5": 2 }
      },
      {
        text: {
          ko: "생각하려 하지 않고 회피함",
          en: "Don't want to think about it and avoid it",
          ja: "考えようとせず避ける",
          "zh-CN": "不想思考，回避它",
          "zh-TW": "不想思考，迴避它",
          vi: "Không muốn nghĩ về nó và tránh né",
          id: "Tidak ingin memikirkannya dan menghindarinya"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "당신의 회복 방법은?",
      en: "What is your recovery method?",
      ja: "あなたの回復方法は？",
      "zh-CN": "你的恢复方法是什么？",
      "zh-TW": "你的恢復方法是什麼？",
      vi: "Phương pháp phục hồi của bạn là gì?",
      id: "Apa metode pemulihan Anda?"
    },
    options: [
      {
        text: {
          ko: "시간이 약, 자연스럽게 잊힘",
          en: "Time heals, naturally forget",
          ja: "時間が薬、自然に忘れる",
          "zh-CN": "时间是良药，自然忘记",
          "zh-TW": "時間是良藥，自然忘記",
          vi: "Thời gian là liều thuốc, tự nhiên quên đi",
          id: "Waktu menyembuhkan, secara alami melupakan"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "충분히 슬퍼하고 감정 해소",
          en: "Cry enough and release emotions",
          ja: "十分に悲しみ感情を解消",
          "zh-CN": "充分悲伤并释放情感",
          "zh-TW": "充分悲傷並釋放情感",
          vi: "Đủ buồn và giải tỏa cảm xúc",
          id: "Cukup sedih dan melepaskan emosi"
        },
        scores: { "Type2": 3, "Type6": 2 }
      },
      {
        text: {
          ko: "이별을 통해 성장하는 계기로 삼음",
          en: "Use the breakup as an opportunity to grow",
          ja: "別れを成長の機会とする",
          "zh-CN": "把分手当作成长的机会",
          "zh-TW": "把分手當作成長的機會",
          vi: "Coi chia tay là cơ hội để phát triển",
          id: "Menggunakan putus cinta sebagai kesempatan untuk tumbuh"
        },
        scores: { "Type5": 8 }
      },
      {
        text: {
          ko: "새로운 활동으로 기분 전환",
          en: "Change mood with new activities",
          ja: "新しい活動で気分転換",
          "zh-CN": "通过新活动转换心情",
          "zh-TW": "通過新活動轉換心情",
          vi: "Chuyển tâm trạng bằng các hoạt động mới",
          id: "Mengubah suasana hati dengan aktivitas baru"
        },
        scores: { "Type4": 3 }
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "미래의 연애에 대한 생각은?",
      en: "What do you think about future relationships?",
      ja: "将来の恋愛についての考えは？",
      "zh-CN": "对未来恋爱的想法？",
      "zh-TW": "對未來戀愛的想法？",
      vi: "Bạn nghĩ gì về tình yêu trong tương lai?",
      id: "Apa yang Anda pikirkan tentang cinta di masa depan?"
    },
    options: [
      {
        text: {
          ko: "금방 다시 시작할 수 있을 것 같음",
          en: "Think I can start again soon",
          ja: "すぐにまた始められそう",
          "zh-CN": "觉得很快就能重新开始",
          "zh-TW": "覺得很快就能重新開始",
          vi: "Nghĩ có thể bắt đầu lại sớm",
          id: "Pikir bisa mulai lagi segera"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "당분간은 생각하기 싫음",
          en: "Don't want to think about it for a while",
          ja: "当分は考えたくない",
          "zh-CN": "暂时不想考虑",
          "zh-TW": "暫時不想考慮",
          vi: "Không muốn nghĩ về nó trong một thời gian",
          id: "Tidak ingin memikirkannya untuk sementara"
        },
        scores: { "Type2": 3, "Type6": 2 }
      },
      {
        text: {
          ko: "더 나은 관계를 만들고 싶음",
          en: "Want to create a better relationship",
          ja: "より良い関係を作りたい",
          "zh-CN": "想要建立更好的关系",
          "zh-TW": "想要建立更好的關係",
          vi: "Muốn tạo ra một mối quan hệ tốt hơn",
          id: "Ingin menciptakan hubungan yang lebih baik"
        },
        scores: { "Type5": 8 }
      },
      {
        text: {
          ko: "일단 나에게 집중하고 싶음",
          en: "Want to focus on myself first",
          ja: "とりあえず自分に集中したい",
          "zh-CN": "想先专注于自己",
          "zh-TW": "想先專注於自己",
          vi: "Muốn tập trung vào bản thân trước",
          id: "Ingin fokus pada diri sendiri dulu"
        },
        scores: { "Type4": 3, "Type5": 2 }
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "지금 이 순간, 당신의 상태는?",
      en: "Right now, what is your current state?",
      ja: "今この瞬間、あなたの状態は？",
      "zh-CN": "此时此刻，你的状态是什么？",
      "zh-TW": "此時此刻，你的狀態是什麼？",
      vi: "Ngay lúc này, trạng thái của bạn là gì?",
      id: "Saat ini, apa keadaan Anda?"
    },
    options: [
      {
        text: {
          ko: "이미 많이 괜찮아짐",
          en: "Already feeling much better",
          ja: "もうかなり良くなっている",
          "zh-CN": "已经好很多了",
          "zh-TW": "已經好很多了",
          vi: "Đã cảm thấy tốt hơn nhiều",
          id: "Sudah merasa jauh lebih baik"
        },
        scores: { "Type1": 3 }
      },
      {
        text: {
          ko: "여전히 아프고 힘듦",
          en: "Still hurting and struggling",
          ja: "まだ痛くて辛い",
          "zh-CN": "仍然痛苦和艰难",
          "zh-TW": "仍然痛苦和艱難",
          vi: "Vẫn đau đớn và khó khăn",
          id: "Masih sakit dan berjuang"
        },
        scores: { "Type2": 3, "Type6": 2 }
      },
      {
        text: {
          ko: "배우고 있고 성장 중",
          en: "Learning and growing",
          ja: "学んでいて成長中",
          "zh-CN": "正在学习和成长",
          "zh-TW": "正在學習和成長",
          vi: "Đang học hỏi và phát triển",
          id: "Belajar dan berkembang"
        },
        scores: { "Type5": 8 }
      },
      {
        text: {
          ko: "생각 안 하려고 노력 중",
          en: "Trying not to think about it",
          ja: "考えないように努力中",
          "zh-CN": "努力不去想它",
          "zh-TW": "努力不去想它",
          vi: "Cố gắng không nghĩ về nó",
          id: "Berusaha tidak memikirkannya"
        },
        scores: { "Type4": 3 }
      }
    ]
  }
];

// 결과 데이터 (다국어)
export const breakupResults: BreakupResult[] = [
  {
    type: "Type1",
    title: {
      ko: "빠른 회복형",
      en: "Quick Recovery Type",
      ja: "早い回復型",
      "zh-CN": "快速恢复型",
      "zh-TW": "快速恢復型",
      vi: "Kiểu phục hồi nhanh",
      id: "Tipe Pemulihan Cepat"
    },
    description: {
      ko: "\"과거는 과거! 미래를 향해 걷는 현실주의자\"\n\n이별을 담담하게 받아들이고 빠르게 일상으로 돌아갑니다. 감정에 오래 머물지 않고 현실적으로 대처하는 타입입니다. 회복 속도가 빠르고 새로운 시작에 두려움이 없습니다. 다만 감정을 충분히 해소하지 않아 나중에 문제가 될 수 있으니 주의하세요.",
      en: "\"The past is the past! A realist walking toward the future\"\n\nYou accept the breakup calmly and quickly return to daily life. You don't dwell on emotions for long and deal with things realistically. You recover quickly and have no fear of new beginnings. However, be careful not to suppress emotions too much as it may cause problems later.",
      ja: "\"過去は過去！未来に向かって歩く現実主義者\"\n\n別れを冷静に受け入れ、素早く日常生活に戻ります。感情に長く留まらず、現実的に対処するタイプです。回復が早く、新しい始まりに恐れがありません。ただし、感情を十分に解消しないと後で問題になる可能性があるので注意が必要です。",
      "zh-CN": "\"过去就是过去！面向未来的现实主义者\"\n\n你冷静地接受分手，快速回归日常生活。不会长时间沉浸在情感中，现实地处理问题。恢复速度快，对新的开始没有恐惧。但要注意不要过度压抑情感，否则可能造成后续问题。",
      "zh-TW": "\"過去就是過去！面向未來的現實主義者\"\n\n你冷靜地接受分手，快速回歸日常生活。不會長時間沉浸在情感中，現實地處理問題。恢復速度快，對新的開始沒有恐懼。但要注意不要過度壓抑情感，否則可能造成後續問題。",
      vi: "\"Quá khứ là quá khứ! Người thực tế hướng về tương lai\"\n\nBạn chấp nhận chia tay một cách bình tĩnh và nhanh chóng quay lại cuộc sống hàng ngày. Bạn không để cảm xúc kéo dài và xử lý mọi thứ một cách thực tế. Bạn phục hồi nhanh và không sợ hãi những khởi đầu mới. Tuy nhiên, hãy cẩn thận không nên kìm nén cảm xúc quá mức vì có thể gây ra vấn đề sau này.",
      id: "\"Masa lalu adalah masa lalu! Realis yang berjalan menuju masa depan\"\n\nAnda menerima putus cinta dengan tenang dan cepat kembali ke kehidupan sehari-hari. Anda tidak berlama-lama dalam emosi dan menangani hal-hal secara realistis. Anda pulih dengan cepat dan tidak takut akan awal yang baru. Namun, berhati-hatilah untuk tidak menekan emosi terlalu banyak karena dapat menyebabkan masalah nanti."
    },
    characteristics: {
      ko: "빠른 회복, 긍정적, 현실적, 적응력",
      en: "Quick recovery, positive, realistic, adaptable",
      ja: "早い回復、ポジティブ、現実的、適応力",
      "zh-CN": "快速恢复，积极，现实，适应力",
      "zh-TW": "快速恢復，積極，現實，適應力",
      vi: "Phục hồi nhanh, tích cực, thực tế, thích ứng",
      id: "Pemulihan cepat, positif, realistis, adaptif"
    },
    pros: {
      ko: "빠른 회복, 긍정적, 현실적, 적응력",
      en: "Quick recovery, positive, realistic, adaptable",
      ja: "早い回復、ポジティブ、現実的、適応力",
      "zh-CN": "快速恢复，积极，现实，适应力",
      "zh-TW": "快速恢復，積極，現實，適應力",
      vi: "Phục hồi nhanh, tích cực, thực tế, thích ứng",
      id: "Pemulihan cepat, positif, realistis, adaptif"
    },
    cons: {
      ko: "감정 억압 가능성, 미해결 감정",
      en: "Possible emotional suppression, unresolved emotions",
      ja: "感情抑制の可能性、未解決の感情",
      "zh-CN": "可能的情感压抑，未解决的情感",
      "zh-TW": "可能的情感壓抑，未解決的情感",
      vi: "Khả năng kìm nén cảm xúc, cảm xúc chưa được giải quyết",
      id: "Kemungkinan penekanan emosi, emosi yang tidak terselesaikan"
    },
    advice: {
      ko: "괜찮은 척하지 말고 슬플 땐 충분히 슬퍼하세요. 감정을 인정하는 것도 회복의 과정입니다.",
      en: "Don't pretend to be okay and cry enough when you're sad. Acknowledging your emotions is also part of the recovery process.",
      ja: "大丈夫なふりをせず、悲しい時は十分に悲しんでください。感情を認めることも回復の過程です。",
      "zh-CN": "不要假装没事，悲伤时要充分悲伤。承认情感也是恢复过程的一部分。",
      "zh-TW": "不要假裝沒事，悲傷時要充分悲傷。承認情感也是恢復過程的一部分。",
      vi: "Đừng giả vờ ổn và hãy khóc đủ khi buồn. Thừa nhận cảm xúc cũng là một phần của quá trình phục hồi.",
      id: "Jangan berpura-pura baik-baik saja dan menangislah cukup ketika sedih. Mengakui emosi juga bagian dari proses pemulihan."
    },
    recoveryPeriod: {
      ko: "1-2개월",
      en: "1-2 months",
      ja: "1-2ヶ月",
      "zh-CN": "1-2个月",
      "zh-TW": "1-2個月",
      vi: "1-2 tháng",
      id: "1-2 bulan"
    },
    compatibility: {
      best: {
        ko: "함께 앞으로 나아가는 긍정 에너지",
        en: "Positive energy moving forward together",
        ja: "一緒に前進するポジティブなエネルギー",
        "zh-CN": "一起前进的积极能量",
        "zh-TW": "一起前進的積極能量",
        vi: "Năng lượng tích cực cùng tiến về phía trước",
        id: "Energi positif bergerak maju bersama"
      },
      good: {
        ko: "서로 이성적으로 이해",
        en: "Understand each other rationally",
        ja: "お互い理性的に理解",
        "zh-CN": "理性地相互理解",
        "zh-TW": "理性地相互理解",
        vi: "Hiểu nhau một cách lý trí",
        id: "Memahami satu sama lain secara rasional"
      },
      caution: {
        ko: "회복 속도 차이로 오해 가능",
        en: "Possible misunderstanding due to different recovery speeds",
        ja: "回復速度の違いによる誤解の可能性",
        "zh-CN": "因恢复速度差异可能产生误解",
        "zh-TW": "因恢復速度差異可能產生誤解",
        vi: "Có thể hiểu lầm do sự khác biệt về tốc độ phục hồi",
        id: "Kemungkinan kesalahpahaman karena perbedaan kecepatan pemulihan"
      },
      difficult: {
        ko: "과거 vs 미래의 극명한 차이",
        en: "Stark difference between past vs future",
        ja: "過去vs未来の極端な違い",
        "zh-CN": "过去与未来的鲜明对比",
        "zh-TW": "過去與未來的鮮明對比",
        vi: "Sự khác biệt rõ rệt giữa quá khứ và tương lai",
        id: "Perbedaan mencolok antara masa lalu vs masa depan"
      }
    },
    emoji: "🌅"
  },
  {
    type: "Type2",
    title: {
      ko: "감성 침잠형",
      en: "Emotional Immersion Type",
      ja: "感情沈潜型",
      "zh-CN": "情感沉浸型",
      "zh-TW": "情感沉浸型",
      vi: "Kiểu chìm đắm cảm xúc",
      id: "Tipe Imersi Emosional"
    },
    description: {
      ko: "\"시간이 필요해... 천천히 아파하는 감성파\"\n\n이별을 깊이 받아들이고 충분히 슬퍼하는 타입입니다. 감정을 억누르지 않고 눈물로 표현하며, 혼자만의 시간이 많이 필요합니다. 회복은 느리지만 감정을 건강하게 처리합니다. 너무 오래 침잠하지 않도록 주변의 도움을 받는 것이 중요합니다.",
      en: "\"I need time... An emotional person who hurts slowly\"\n\nYou deeply accept the breakup and cry enough. You don't suppress emotions and express them through tears, needing a lot of alone time. Recovery is slow but you process emotions healthily. It's important to get help from those around you so you don't immerse yourself for too long.",
      ja: "\"時間が必要...ゆっくりと痛む感情派\"\n\n別れを深く受け入れ、十分に悲しむタイプです。感情を抑えずに涙で表現し、一人の時間が多く必要です。回復は遅いですが感情を健康的に処理します。あまり長く沈潜しないよう周囲の助けを受けることが重要です。",
      "zh-CN": "\"需要时间...慢慢痛苦的感性派\"\n\n你深度接受分手并充分悲伤。不压抑情感，通过眼泪表达，需要很多独处时间。恢复虽慢但能健康处理情感。重要的是不要沉浸太久，要接受周围人的帮助。",
      "zh-TW": "\"需要時間...慢慢痛苦的感性派\"\n\n你深度接受分手並充分悲傷。不壓抑情感，通過眼淚表達，需要很多獨處時間。恢復雖慢但能健康處理情感。重要的是不要沉浸太久，要接受周圍人的幫助。",
      vi: "\"Cần thời gian... Người cảm xúc đau đớn từ từ\"\n\nBạn chấp nhận chia tay một cách sâu sắc và đủ buồn. Bạn không kìm nén cảm xúc và thể hiện qua nước mắt, cần nhiều thời gian một mình. Phục hồi chậm nhưng xử lý cảm xúc một cách lành mạnh. Quan trọng là không nên chìm đắm quá lâu và cần sự giúp đỡ từ những người xung quanh.",
      id: "\"Butuh waktu... Orang emosional yang sakit perlahan\"\n\nAnda menerima putus cinta dengan mendalam dan cukup sedih. Anda tidak menekan emosi dan mengekspresikannya melalui air mata, membutuhkan banyak waktu sendirian. Pemulihan lambat tetapi Anda memproses emosi dengan sehat. Penting untuk tidak tenggelam terlalu lama dan mendapat bantuan dari orang-orang di sekitar."
    },
    characteristics: {
      ko: "감정 솔직함, 공감 능력, 깊은 성찰",
      en: "Emotional honesty, empathy, deep reflection",
      ja: "感情の正直さ、共感能力、深い省察",
      "zh-CN": "情感诚实，共情能力，深度反思",
      "zh-TW": "情感誠實，共情能力，深度反思",
      vi: "Sự trung thực về cảm xúc, khả năng đồng cảm, suy ngẫm sâu sắc",
      id: "Kejujuran emosional, kemampuan empati, refleksi mendalam"
    },
    pros: {
      ko: "감정 솔직함, 공감 능력, 깊은 성찰",
      en: "Emotional honesty, empathy, deep reflection",
      ja: "感情の正直さ、共感能力、深い省察",
      "zh-CN": "情感诚实，共情能力，深度反思",
      "zh-TW": "情感誠實，共情能力，深度反思",
      vi: "Sự trung thực về cảm xúc, khả năng đồng cảm, suy ngẫm sâu sắc",
      id: "Kejujuran emosional, kemampuan empati, refleksi mendalam"
    },
    cons: {
      ko: "회복 느림, 일상 회복 어려움, 우울 위험",
      en: "Slow recovery, difficulty returning to daily life, risk of depression",
      ja: "回復が遅い、日常生活への復帰が困難、うつ病のリスク",
      "zh-CN": "恢复缓慢，难以回归日常生活，抑郁风险",
      "zh-TW": "恢復緩慢，難以回歸日常生活，抑鬱風險",
      vi: "Phục hồi chậm, khó khăn trong việc trở lại cuộc sống hàng ngày, nguy cơ trầm cảm",
      id: "Pemulihan lambat, kesulitan kembali ke kehidupan sehari-hari, risiko depresi"
    },
    advice: {
      ko: "슬픔은 자연스러운 것이지만 일상도 조금씩 유지하세요. 운동이나 산책이 큰 도움이 됩니다.",
      en: "Sadness is natural, but try to maintain daily life little by little. Exercise or walking can be a big help.",
      ja: "悲しみは自然なことですが、日常生活も少しずつ維持してください。運動や散歩が大きな助けになります。",
      "zh-CN": "悲伤是自然的，但要逐渐维持日常生活。运动或散步会有很大帮助。",
      "zh-TW": "悲傷是自然的，但要逐漸維持日常生活。運動或散步會有很大幫助。",
      vi: "Nỗi buồn là tự nhiên, nhưng hãy duy trì cuộc sống hàng ngày từng chút một. Tập thể dục hoặc đi bộ có thể giúp ích rất nhiều.",
      id: "Kesedihan adalah hal yang wajar, tetapi cobalah mempertahankan kehidupan sehari-hari sedikit demi sedikit. Olahraga atau berjalan kaki bisa sangat membantu."
    },
    recoveryPeriod: {
      ko: "6개월-1년",
      en: "6 months-1 year",
      ja: "6ヶ月-1年",
      "zh-CN": "6个月-1年",
      "zh-TW": "6個月-1年",
      vi: "6 tháng-1 năm",
      id: "6 bulan-1 tahun"
    },
    compatibility: {
      best: {
        ko: "서로의 감정을 깊이 이해",
        en: "Deeply understand each other's emotions",
        ja: "お互いの感情を深く理解",
        "zh-CN": "深度理解彼此的情感",
        "zh-TW": "深度理解彼此的情感",
        vi: "Hiểu sâu sắc cảm xúc của nhau",
        id: "Memahami emosi satu sama lain secara mendalam"
      },
      good: {
        ko: "이성적 조언으로 도움",
        en: "Help with rational advice",
        ja: "理性的なアドバイスで助け",
        "zh-CN": "通过理性建议帮助",
        "zh-TW": "通過理性建議幫助",
        vi: "Giúp đỡ bằng lời khuyên hợp lý",
        id: "Membantu dengan saran yang rasional"
      },
      caution: {
        ko: "속도 차이로 답답함",
        en: "Frustration due to speed differences",
        ja: "速度の違いによるイライラ",
        "zh-CN": "因速度差异而沮丧",
        "zh-TW": "因速度差異而沮喪",
        vi: "Bực bội do sự khác biệt về tốc độ",
        id: "Frustrasi karena perbedaan kecepatan"
      },
      difficult: {
        ko: "감정 vs 회피로 소통 단절",
        en: "Communication breakdown due to emotion vs avoidance",
        ja: "感情vs回避によるコミュニケーション断絶",
        "zh-CN": "因情感vs回避导致沟通中断",
        "zh-TW": "因情感vs迴避導致溝通中斷",
        vi: "Đứt gãy giao tiếp do cảm xúc vs tránh né",
        id: "Putus komunikasi karena emosi vs menghindari"
      }
    },
    emoji: "🌧️"
  },
  {
    type: "Type3",
    title: {
      ko: "이성적 분석형",
      en: "Rational Analysis Type",
      ja: "理性的分析型",
      "zh-CN": "理性分析型",
      "zh-TW": "理性分析型",
      vi: "Kiểu phân tích lý trí",
      id: "Tipe Analisis Rasional"
    },
    description: {
      ko: "\"왜 그랬을까? 교훈을 찾는 냉철한 분석가\"\n\n이별을 감정보다 이성으로 받아들이는 타입입니다. 이별 원인을 분석하고 다음 관계를 위한 교훈을 찾습니다. 객관적이고 차분하게 상황을 정리하며, 감정과 논리의 균형을 유지합니다. 자기 성찰 능력이 뛰어나지만 너무 머리로만 생각하면 감정이 억압될 수 있습니다.",
      en: "\"Why did it happen? A cool-headed analyst seeking lessons\"\n\nYou accept breakups with reason rather than emotion. You analyze the causes of the breakup and find lessons for the next relationship. You organize situations objectively and calmly, maintaining a balance between emotion and logic. You have excellent self-reflection skills, but thinking too much with your head can suppress emotions.",
      ja: "\"なぜそうなったのか？教訓を求める冷静な分析家\"\n\n別れを感情より理性で受け入れるタイプです。別れの原因を分析し、次の関係のための教訓を見つけます。客観的で冷静に状況を整理し、感情と論理のバランスを保ちます。自己省察能力に優れていますが、頭でばかり考えすぎると感情が抑圧される可能性があります。",
      "zh-CN": "\"为什么会这样？寻找教训的冷静分析家\"\n\n你用理性而非情感接受分手。分析分手原因，寻找下一段关系的教训。客观冷静地整理情况，保持情感与逻辑的平衡。自我反省能力出色，但过度用脑思考可能会压抑情感。",
      "zh-TW": "\"為什麼會這樣？尋找教訓的冷靜分析家\"\n\n你用理性而非情感接受分手。分析分手原因，尋找下一段關係的教訓。客觀冷靜地整理情況，保持情感與邏輯的平衡。自我反省能力出色，但過度用腦思考可能會壓抑情感。",
      vi: "\"Tại sao lại như vậy? Nhà phân tích lạnh lùng tìm kiếm bài học\"\n\nBạn chấp nhận chia tay bằng lý trí hơn là cảm xúc. Bạn phân tích nguyên nhân chia tay và tìm ra bài học cho mối quan hệ tiếp theo. Bạn sắp xếp tình huống một cách khách quan và bình tĩnh, duy trì sự cân bằng giữa cảm xúc và logic. Bạn có khả năng tự phản ánh xuất sắc, nhưng suy nghĩ quá nhiều bằng đầu có thể kìm nén cảm xúc.",
      id: "\"Mengapa ini terjadi? Analis yang dingin mencari pelajaran\"\n\nAnda menerima putus cinta dengan akal sehat daripada emosi. Anda menganalisis penyebab putus cinta dan menemukan pelajaran untuk hubungan berikutnya. Anda mengatur situasi secara objektif dan tenang, mempertahankan keseimbangan antara emosi dan logika. Anda memiliki kemampuan introspeksi yang luar biasa, tetapi terlalu banyak berpikir dengan kepala dapat menekan emosi."
    },
    characteristics: {
      ko: "객관적, 자기 성찰, 성숙한 대처",
      en: "Objective, self-reflection, mature coping",
      ja: "客観的、自己省察、成熟した対処",
      "zh-CN": "客观，自我反省，成熟应对",
      "zh-TW": "客觀，自我反省，成熟應對",
      vi: "Khách quan, tự phản ánh, đối phó trưởng thành",
      id: "Objektif, introspeksi, penanganan yang matang"
    },
    pros: {
      ko: "객관적, 자기 성찰, 성숙한 대처",
      en: "Objective, self-reflection, mature coping",
      ja: "客観的、自己省察、成熟した対処",
      "zh-CN": "客观，自我反省，成熟应对",
      "zh-TW": "客觀，自我反省，成熟應對",
      vi: "Khách quan, tự phản ánh, đối phó trưởng thành",
      id: "Objektif, introspeksi, penanganan yang matang"
    },
    cons: {
      ko: "감정 억압 가능, 과도한 분석",
      en: "Possible emotional suppression, excessive analysis",
      ja: "感情抑制の可能性、過度な分析",
      "zh-CN": "可能的情感压抑，过度分析",
      "zh-TW": "可能的情感壓抑，過度分析",
      vi: "Khả năng kìm nén cảm xúc, phân tích quá mức",
      id: "Kemungkinan penekanan emosi, analisis berlebihan"
    },
    advice: {
      ko: "분석도 좋지만 가끔은 그냥 울어도 괜찮아요. 머리와 마음의 균형이 중요합니다.",
      en: "Analysis is good, but it's okay to just cry sometimes. The balance between head and heart is important.",
      ja: "分析も良いですが、時々ただ泣いても大丈夫です。頭と心のバランスが重要です。",
      "zh-CN": "分析很好，但有时哭一下也没关系。头脑与心灵的平衡很重要。",
      "zh-TW": "分析很好，但有時哭一下也沒關係。頭腦與心靈的平衡很重要。",
      vi: "Phân tích cũng tốt, nhưng thỉnh thoảng chỉ cần khóc cũng không sao. Sự cân bằng giữa đầu óc và trái tim rất quan trọng.",
      id: "Analisis itu bagus, tetapi terkadang menangis saja juga tidak apa-apa. Keseimbangan antara kepala dan hati sangat penting."
    },
    recoveryPeriod: {
      ko: "3-4개월",
      en: "3-4 months",
      ja: "3-4ヶ月",
      "zh-CN": "3-4个月",
      "zh-TW": "3-4個月",
      vi: "3-4 tháng",
      id: "3-4 bulan"
    },
    compatibility: {
      best: {
        ko: "함께 배우고 성장",
        en: "Learn and grow together",
        ja: "一緒に学び成長",
        "zh-CN": "一起学习和成长",
        "zh-TW": "一起學習和成長",
        vi: "Cùng nhau học hỏi và phát triển",
        id: "Belajar dan berkembang bersama"
      },
      good: {
        ko: "이성적 소통",
        en: "Rational communication",
        ja: "理性的なコミュニケーション",
        "zh-CN": "理性沟通",
        "zh-TW": "理性溝通",
        vi: "Giao tiếp hợp lý",
        id: "Komunikasi yang rasional"
      },
      caution: {
        ko: "감정 vs 이성",
        en: "Emotion vs reason",
        ja: "感情vs理性",
        "zh-CN": "情感vs理性",
        "zh-TW": "情感vs理性",
        vi: "Cảm xúc vs lý trí",
        id: "Emosi vs akal sehat"
      },
      difficult: {
        ko: "앞 vs 뒤, 방향성 차이",
        en: "Forward vs backward, directional differences",
        ja: "前vs後、方向性の違い",
        "zh-CN": "前进vs后退，方向性差异",
        "zh-TW": "前進vs後退，方向性差異",
        vi: "Tiến vs lùi, sự khác biệt về hướng",
        id: "Maju vs mundur, perbedaan arah"
      }
    },
    emoji: "🧠"
  },
  {
    type: "Type4",
    title: {
      ko: "바쁜 회피형",
      en: "Busy Avoidance Type",
      ja: "忙しい回避型",
      "zh-CN": "忙碌回避型",
      "zh-TW": "忙碌迴避型",
      vi: "Kiểu tránh né bận rộn",
      id: "Tipe Penghindaran Sibuk"
    },
    description: {
      ko: "\"생각 안 하려고! 움직이며 잊는 액션파\"\n\n이별의 아픔을 생각하지 않으려고 바쁘게 움직입니다. 운동, 일, 친구 만남 등으로 일정을 가득 채우며 혼자 있는 시간을 피합니다. 단기적으로 효과적이지만 감정을 해소하지 않으면 나중에 문제가 될 수 있습니다. 적절한 휴식과 감정 정리가 필요합니다.",
      en: "\"I don't want to think about it! An action person who forgets by moving\"\n\nYou move busily to avoid thinking about the pain of the breakup. You fill your schedule with exercise, work, meeting friends, etc., and avoid being alone. It's effective in the short term, but if you don't resolve your emotions, it can cause problems later. You need proper rest and emotional processing.",
      ja: "\"考えたくない！動きながら忘れるアクションパー\"\n\n別れの痛みを考えないように忙しく動きます。運動、仕事、友達との会合などでスケジュールを埋め、一人の時間を避けます。短期的には効果的ですが、感情を解消しないと後で問題になる可能性があります。適切な休息と感情の整理が必要です。",
      "zh-CN": "\"不想思考！通过行动忘记的行动派\"\n\n你忙碌地行动以避免思考分手的痛苦。用运动、工作、朋友聚会等填满日程，避免独处时间。短期有效，但如果不解决情感，可能会造成后续问题。需要适当的休息和情感整理。",
      "zh-TW": "\"不想思考！通過行動忘記的行動派\"\n\n你忙碌地行動以避免思考分手的痛苦。用運動、工作、朋友聚會等填滿日程，避免獨處時間。短期有效，但如果不解決情感，可能會造成後續問題。需要適當的休息和情感整理。",
      vi: "\"Không muốn nghĩ về nó! Người hành động quên bằng cách di chuyển\"\n\nBạn di chuyển bận rộn để tránh nghĩ về nỗi đau của việc chia tay. Bạn lấp đầy lịch trình bằng tập thể dục, công việc, gặp bạn bè, v.v., và tránh ở một mình. Nó hiệu quả trong ngắn hạn, nhưng nếu bạn không giải quyết cảm xúc, có thể gây ra vấn đề sau này. Bạn cần nghỉ ngơi đúng cách và xử lý cảm xúc.",
      id: "\"Tidak ingin memikirkannya! Orang aksi yang melupakan dengan bergerak\"\n\nAnda bergerak sibuk untuk menghindari memikirkan rasa sakit putus cinta. Anda mengisi jadwal dengan olahraga, kerja, bertemu teman, dll., dan menghindari sendirian. Ini efektif dalam jangka pendek, tetapi jika Anda tidak menyelesaikan emosi, dapat menyebabkan masalah nanti. Anda perlu istirahat yang tepat dan pemrosesan emosi."
    },
    characteristics: {
      ko: "행동력, 긍정적 에너지, 사교성",
      en: "Action-oriented, positive energy, sociability",
      ja: "行動力、ポジティブなエネルギー、社交性",
      "zh-CN": "行动力，积极能量，社交性",
      "zh-TW": "行動力，積極能量，社交性",
      vi: "Hướng hành động, năng lượng tích cực, tính xã hội",
      id: "Berorientasi aksi, energi positif, sosial"
    },
    pros: {
      ko: "행동력, 긍정적 에너지, 사교성",
      en: "Action-oriented, positive energy, sociability",
      ja: "行動力、ポジティブなエネルギー、社交性",
      "zh-CN": "行动力，积极能量，社交性",
      "zh-TW": "行動力，積極能量，社交性",
      vi: "Hướng hành động, năng lượng tích cực, tính xã hội",
      id: "Berorientasi aksi, energi positif, sosial"
    },
    cons: {
      ko: "감정 회피, 번아웃 위험, 미해결 감정",
      en: "Emotional avoidance, burnout risk, unresolved emotions",
      ja: "感情回避、燃え尽きリスク、未解決の感情",
      "zh-CN": "情感回避，倦怠风险，未解决情感",
      "zh-TW": "情感迴避，倦怠風險，未解決情感",
      vi: "Tránh né cảm xúc, nguy cơ kiệt sức, cảm xúc chưa được giải quyết",
      id: "Menghindari emosi, risiko kelelahan, emosi yang tidak terselesaikan"
    },
    advice: {
      ko: "바쁜 것도 좋지만 가끔은 멈춰서 내 마음을 들여다보는 시간이 필요합니다.",
      en: "Being busy is good, but sometimes you need to stop and look into your heart.",
      ja: "忙しいのも良いですが、時々立ち止まって自分の心を見つめる時間が必要です。",
      "zh-CN": "忙碌很好，但有时需要停下来审视自己的内心。",
      "zh-TW": "忙碌很好，但有時需要停下來審視自己的內心。",
      vi: "Bận rộn cũng tốt, nhưng thỉnh thoảng bạn cần dừng lại và nhìn vào trái tim mình.",
      id: "Sibuk itu bagus, tetapi terkadang Anda perlu berhenti dan melihat ke dalam hati Anda."
    },
    recoveryPeriod: {
      ko: "2-3개월 (단, 감정 폭발 가능성)",
      en: "2-3 months (but risk of emotional explosion)",
      ja: "2-3ヶ月（ただし感情爆発の可能性）",
      "zh-CN": "2-3个月（但可能有情感爆发）",
      "zh-TW": "2-3個月（但可能有情感爆發）",
      vi: "2-3 tháng (nhưng có nguy cơ bùng nổ cảm xúc)",
      id: "2-3 bulan (tetapi risiko ledakan emosional)"
    },
    compatibility: {
      best: {
        ko: "함께 앞으로 나아감",
        en: "Move forward together",
        ja: "一緒に前進",
        "zh-CN": "一起前进",
        "zh-TW": "一起前進",
        vi: "Cùng nhau tiến về phía trước",
        id: "Bergerak maju bersama"
      },
      good: {
        ko: "건설적 방향",
        en: "Constructive direction",
        ja: "建設的な方向",
        "zh-CN": "建设性方向",
        "zh-TW": "建設性方向",
        vi: "Hướng xây dựng",
        id: "Arah konstruktif"
      },
      caution: {
        ko: "회피 vs 직면",
        en: "Avoidance vs confrontation",
        ja: "回避vs直面",
        "zh-CN": "回避vs直面",
        "zh-TW": "迴避vs直面",
        vi: "Tránh né vs đối mặt",
        id: "Menghindari vs konfrontasi"
      },
      difficult: {
        ko: "정반대 방향으로 충돌",
        en: "Collision in opposite directions",
        ja: "正反対の方向で衝突",
        "zh-CN": "相反方向冲突",
        "zh-TW": "相反方向衝突",
        vi: "Xung đột theo hướng ngược lại",
        id: "Tabrakan dalam arah berlawanan"
      }
    },
    emoji: "💨"
  },
  {
    type: "Type5",
    title: {
      ko: "성장 지향형",
      en: "Growth-Oriented Type",
      ja: "成長志向型",
      "zh-CN": "成长导向型",
      "zh-TW": "成長導向型",
      vi: "Kiểu hướng tăng trưởng",
      id: "Tipe Berorientasi Pertumbuhan"
    },
    description: {
      ko: "\"더 나은 나로! 이별을 발판 삼는 성장파\"\n\n이별을 자기 성장의 기회로 삼는 가장 건강한 타입입니다. 아픔을 인정하면서도 배움을 찾고, 더 나은 사람이 되기 위해 노력합니다. 자기계발, 새로운 도전, 취미 개발 등으로 자신을 업그레이드합니다. 이별을 긍정적으로 승화시키는 능력이 탁월합니다.",
      en: "\"A better me! A growth person who uses breakups as a stepping stone\"\n\nYou are the healthiest type who uses breakups as an opportunity for self-growth. You acknowledge the pain but find lessons and strive to become a better person. You upgrade yourself through self-development, new challenges, hobby development, etc. You have excellent ability to sublimate breakups positively.",
      ja: "\"より良い自分に！別れを踏み台にする成長派\"\n\n別れを自己成長の機会とする最も健康的なタイプです。痛みを認めながらも学びを見つけ、より良い人になるために努力します。自己啓発、新しい挑戦、趣味開発などで自分をアップグレードします。別れをポジティブに昇華する能力が卓越しています。",
      "zh-CN": "\"更好的自己！把分手当作垫脚石的成长派\"\n\n你是最健康的类型，把分手当作自我成长的机会。承认痛苦的同时寻找教训，努力成为更好的人。通过自我发展、新挑战、爱好发展等升级自己。你具有将分手积极升华的卓越能力。",
      "zh-TW": "\"更好的自己！把分手當作墊腳石的成長派\"\n\n你是最健康的類型，把分手當作自我成長的機會。承認痛苦的同時尋找教訓，努力成為更好的人。通過自我發展、新挑戰、愛好發展等升級自己。你具有將分手積極昇華的卓越能力。",
      vi: "\"Tôi tốt hơn! Người tăng trưởng sử dụng chia tay làm bước đệm\"\n\nBạn là kiểu lành mạnh nhất sử dụng chia tay như một cơ hội để tự phát triển. Bạn thừa nhận nỗi đau nhưng tìm ra bài học và nỗ lực trở thành người tốt hơn. Bạn nâng cấp bản thân thông qua tự phát triển, thử thách mới, phát triển sở thích, v.v. Bạn có khả năng xuất sắc trong việc thăng hoa chia tay một cách tích cực.",
      id: "\"Diri yang lebih baik! Orang pertumbuhan yang menggunakan putus cinta sebagai batu loncatan\"\n\nAnda adalah tipe yang paling sehat yang menggunakan putus cinta sebagai kesempatan untuk pertumbuhan diri. Anda mengakui rasa sakit tetapi menemukan pelajaran dan berusaha menjadi orang yang lebih baik. Anda mengupgrade diri melalui pengembangan diri, tantangan baru, pengembangan hobi, dll. Anda memiliki kemampuan luar biasa untuk menyublimasi putus cinta secara positif."
    },
    characteristics: {
      ko: "긍정적 전환, 성장, 자기계발, 성숙",
      en: "Positive transformation, growth, self-development, maturity",
      ja: "ポジティブな転換、成長、自己啓発、成熟",
      "zh-CN": "积极转变，成长，自我发展，成熟",
      "zh-TW": "積極轉變，成長，自我發展，成熟",
      vi: "Chuyển đổi tích cực, tăng trưởng, tự phát triển, trưởng thành",
      id: "Transformasi positif, pertumbuhan, pengembangan diri, kedewasaan"
    },
    pros: {
      ko: "긍정적 전환, 성장, 자기계발, 성숙",
      en: "Positive transformation, growth, self-development, maturity",
      ja: "ポジティブな転換、成長、自己啓発、成熟",
      "zh-CN": "积极转变，成长，自我发展，成熟",
      "zh-TW": "積極轉變，成長，自我發展，成熟",
      vi: "Chuyển đổi tích cực, tăng trưởng, tự phát triển, trưởng thành",
      id: "Transformasi positif, pertumbuhan, pengembangan diri, kedewasaan"
    },
    cons: {
      ko: "가끔 과도한 압박, 완벽주의",
      en: "Sometimes excessive pressure, perfectionism",
      ja: "時々過度なプレッシャー、完璧主義",
      "zh-CN": "有时过度压力，完美主义",
      "zh-TW": "有時過度壓力，完美主義",
      vi: "Thỉnh thoảng áp lực quá mức, chủ nghĩa hoàn hảo",
      id: "Kadang tekanan berlebihan, perfeksionisme"
    },
    advice: {
      ko: "완벽하게 회복하려 애쓰지 마세요. 성장 과정 자체를 즐기는 것이 중요합니다.",
      en: "Don't try too hard to recover perfectly. It's important to enjoy the growth process itself.",
      ja: "完璧に回復しようと頑張りすぎないでください。成長過程そのものを楽しむことが重要です。",
      "zh-CN": "不要过于努力追求完美恢复。享受成长过程本身很重要。",
      "zh-TW": "不要過於努力追求完美恢復。享受成長過程本身很重要。",
      vi: "Đừng cố gắng quá mức để phục hồi hoàn hảo. Điều quan trọng là tận hưởng quá trình phát triển.",
      id: "Jangan terlalu keras berusaha untuk pulih dengan sempurna. Penting untuk menikmati proses pertumbuhan itu sendiri."
    },
    recoveryPeriod: {
      ko: "3-6개월",
      en: "3-6 months",
      ja: "3-6ヶ月",
      "zh-CN": "3-6个月",
      "zh-TW": "3-6個月",
      vi: "3-6 tháng",
      id: "3-6 bulan"
    },
    compatibility: {
      best: {
        ko: "함께 배우고 발전",
        en: "Learn and develop together",
        ja: "一緒に学び発展",
        "zh-CN": "一起学习和发展",
        "zh-TW": "一起學習和發展",
        vi: "Cùng nhau học hỏi và phát triển",
        id: "Belajar dan berkembang bersama"
      },
      good: {
        ko: "긍정 에너지",
        en: "Positive energy",
        ja: "ポジティブなエネルギー",
        "zh-CN": "积极能量",
        "zh-TW": "積極能量",
        vi: "Năng lượng tích cực",
        id: "Energi positif"
      },
      caution: {
        ko: "속도와 방향 차이",
        en: "Differences in speed and direction",
        ja: "速度と方向の違い",
        "zh-CN": "速度和方向差异",
        "zh-TW": "速度和方向差異",
        vi: "Sự khác biệt về tốc độ và hướng",
        id: "Perbedaan kecepatan dan arah"
      },
      difficult: {
        ko: "앞 vs 뒤, 극명한 대비",
        en: "Forward vs backward, stark contrast",
        ja: "前vs後、極端な対比",
        "zh-CN": "前进vs后退，鲜明对比",
        "zh-TW": "前進vs後退，鮮明對比",
        vi: "Tiến vs lùi, sự tương phản rõ rệt",
        id: "Maju vs mundur, kontras yang mencolok"
      }
    },
    emoji: "🌱"
  },
  {
    type: "Type6",
    title: {
      ko: "미련 잔존형",
      en: "Lingering Attachment Type",
      ja: "未練残存型",
      "zh-CN": "留恋残留型",
      "zh-TW": "留戀殘留型",
      vi: "Kiểu lưu luyến còn sót lại",
      id: "Tipe Keterikatan yang Tersisa"
    },
    description: {
      ko: "\"아직도 네가... 과거에 머무는 그리움형\"\n\n이별 후에도 전 연인에 대한 미련이 남아있는 타입입니다. SNS를 자주 확인하고, 추억을 되새기며, 복합을 생각합니다. 새로운 시작이 어렵고 과거에 머물러 있습니다. 회복이 가장 느리고 감정적으로 힘든 시기가 깁니다. 전문가의 도움이나 주변의 지지가 필요할 수 있습니다.",
      en: "\"Still you... A longing type that stays in the past\"\n\nYou are a type that still has lingering feelings for your ex even after the breakup. You frequently check SNS, reminisce about memories, and think about reconciliation. Starting anew is difficult and you remain in the past. Recovery is the slowest and the emotionally difficult period is long. You may need professional help or support from those around you.",
      ja: "\"まだあなたが...過去に留まる憧れ型\"\n\n別れ後も元恋人への未練が残っているタイプです。SNSを頻繁にチェックし、思い出を振り返り、復縁を考えます。新しい始まりが困難で過去に留まっています。回復が最も遅く、感情的につらい時期が長いです。専門家の助けや周囲のサポートが必要かもしれません。",
      "zh-CN": "\"仍然是你...停留在过去的思念型\"\n\n你是分手后仍对前任有留恋的类型。经常查看社交媒体，回忆往事，考虑复合。新的开始很困难，停留在过去。恢复最慢，情感困难期很长。可能需要专业帮助或周围人的支持。",
      "zh-TW": "\"仍然是你...停留在過去的思念型\"\n\n你是分手後仍對前任有留戀的類型。經常查看社交媒體，回憶往事，考慮復合。新的開始很困難，停留在過去。恢復最慢，情感困難期很長。可能需要專業幫助或周圍人的支持。",
      vi: "\"Vẫn là bạn... Kiểu nhớ nhung ở lại quá khứ\"\n\nBạn là kiểu vẫn còn lưu luyến với người yêu cũ ngay cả sau khi chia tay. Bạn thường xuyên kiểm tra mạng xã hội, hồi tưởng về kỷ niệm, và nghĩ về việc tái hợp. Bắt đầu mới rất khó khăn và bạn vẫn ở lại quá khứ. Phục hồi chậm nhất và thời kỳ khó khăn về mặt cảm xúc rất dài. Bạn có thể cần sự giúp đỡ chuyên nghiệp hoặc hỗ trợ từ những người xung quanh.",
      id: "\"Masih kamu... Tipe kerinduan yang tinggal di masa lalu\"\n\nAnda adalah tipe yang masih memiliki perasaan yang tersisa untuk mantan kekasih bahkan setelah putus cinta. Anda sering memeriksa media sosial, mengenang kenangan, dan memikirkan rekonsiliasi. Memulai yang baru sulit dan Anda tetap berada di masa lalu. Pemulihan paling lambat dan periode sulit secara emosional sangat panjang. Anda mungkin memerlukan bantuan profesional atau dukungan dari orang-orang di sekitar."
    },
    characteristics: {
      ko: "진실된 감정, 깊은 사랑",
      en: "Genuine emotions, deep love",
      ja: "真実の感情、深い愛",
      "zh-CN": "真实情感，深沉的爱",
      "zh-TW": "真實情感，深沉的愛",
      vi: "Cảm xúc chân thật, tình yêu sâu sắc",
      id: "Emosi yang tulus, cinta yang mendalam"
    },
    pros: {
      ko: "진실된 감정, 깊은 사랑",
      en: "Genuine emotions, deep love",
      ja: "真実の感情、深い愛",
      "zh-CN": "真实情感，深沉的爱",
      "zh-TW": "真實情感，深沉的愛",
      vi: "Cảm xúc chân thật, tình yêu sâu sắc",
      id: "Emosi yang tulus, cinta yang mendalam"
    },
    cons: {
      ko: "회복 매우 느림, 집착 가능성, 발전 어려움",
      en: "Very slow recovery, possible obsession, difficulty developing",
      ja: "回復が非常に遅い、執着の可能性、発展困難",
      "zh-CN": "恢复非常缓慢，可能执着，发展困难",
      "zh-TW": "恢復非常緩慢，可能執著，發展困難",
      vi: "Phục hồi rất chậm, khả năng ám ảnh, khó phát triển",
      id: "Pemulihan sangat lambat, kemungkinan obsesi, sulit berkembang"
    },
    advice: {
      ko: "과거는 아름답지만 미래는 더 아름다울 수 있어요. 천천히라도 앞으로 나아가세요.",
      en: "The past is beautiful, but the future can be even more beautiful. Move forward slowly.",
      ja: "過去は美しいですが、未来はもっと美しくなることができます。ゆっくりでも前に進んでください。",
      "zh-CN": "过去很美，但未来可能更美。慢慢向前走吧。",
      "zh-TW": "過去很美，但未來可能更美。慢慢向前走吧。",
      vi: "Quá khứ đẹp, nhưng tương lai có thể đẹp hơn nữa. Hãy tiến về phía trước từ từ.",
      id: "Masa lalu indah, tetapi masa depan bisa lebih indah. Bergerak maju perlahan-lahan."
    },
    recoveryPeriod: {
      ko: "1년 이상",
      en: "1 year or more",
      ja: "1年以上",
      "zh-CN": "1年以上",
      "zh-TW": "1年以上",
      vi: "1 năm trở lên",
      id: "1 tahun atau lebih"
    },
    compatibility: {
      best: {
        ko: "감정 이해와 공감",
        en: "Emotional understanding and empathy",
        ja: "感情理解と共感",
        "zh-CN": "情感理解和共情",
        "zh-TW": "情感理解和共情",
        vi: "Hiểu biết cảm xúc và đồng cảm",
        id: "Pemahaman emosional dan empati"
      },
      good: {
        ko: "없음",
        en: "None",
        ja: "なし",
        "zh-CN": "无",
        "zh-TW": "無",
        vi: "Không có",
        id: "Tidak ada"
      },
      caution: {
        ko: "이성 vs 감정",
        en: "Reason vs emotion",
        ja: "理性vs感情",
        "zh-CN": "理性vs情感",
        "zh-TW": "理性vs情感",
        vi: "Lý trí vs cảm xúc",
        id: "Akal sehat vs emosi"
      },
      difficult: {
        ko: "모든 앞으로 가는 타입과 충돌",
        en: "Conflict with all forward-moving types",
        ja: "すべての前進型との衝突",
        "zh-CN": "与所有前进型冲突",
        "zh-TW": "與所有前進型衝突",
        vi: "Xung đột với tất cả các kiểu tiến về phía trước",
        id: "Konflik dengan semua tipe yang bergerak maju"
      }
    },
    emoji: "💔"
  }
];

// 결과 계산 함수
export function calculateBreakupResult(answers: number[]): BreakupResult {
  const scores: Record<string, number> = {
    "Type1": 0, "Type2": 0, "Type3": 0,
    "Type4": 0, "Type5": 0, "Type6": 0
  };

  answers.forEach((answerIndex, questionIndex) => {
    const question = breakupQuestions[questionIndex];
    if (!question || !question.options || !question.options[answerIndex]) return;

    const selectedOption = question.options[answerIndex];
    if (selectedOption.scores) {
      Object.entries(selectedOption.scores).forEach(([type, score]) => {
        scores[type] += score as number;
      });
    }
  });

  let maxScore = 0;
  let resultType = "Type1";

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  const result = breakupResults.find(r => r.type === resultType);
  return result || breakupResults[0];
}
