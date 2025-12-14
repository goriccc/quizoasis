export interface Phase2ResilienceQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    score: number; // A=0, B=1, C=2, D=3
  }[];
}

export interface Phase2ResilienceResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  resilienceScore: Record<string, string>; // "5점 미만", "20점" 등
  characteristics: Record<string, string>; // 주요 특징
  prescription: Record<string, string>; // 마음 처방
}

export const phase2ResilienceQuestions: Phase2ResilienceQuestion[] = [
  {
    id: 1,
    question: {
      ko: "예상치 못한 큰 실수를 저질렀을 때 당신의 반응은?",
      en: "What's your reaction when you make an unexpected big mistake?",
      ja: "予想外の大きな失敗をした時、あなたの反応は？",
      "zh-CN": "当你犯了一个意想不到的大错误时，你的反应是什么？",
      "zh-TW": "當你犯了一個意想不到的大錯誤時，你的反應是什麼？",
      vi: "Phản ứng của bạn khi mắc một sai lầm lớn không ngờ tới là gì?",
      id: "Apa reaksi Anda ketika membuat kesalahan besar yang tidak terduga?"
    },
    options: [
      {
        text: {
          ko: "\"난 왜 이 모양일까...\" 자책하며 며칠 동안 우울해한다",
          en: "\"Why am I like this...\" Blame myself and feel depressed for days",
          ja: "「なんで自分はこうなんだろう...」自分を責めて何日も憂鬱になる",
          "zh-CN": "「我为什么会这样...」自责并抑郁好几天",
          "zh-TW": "「我為什麼會這樣...」自責並抑鬱好幾天",
          vi: "\"Tại sao mình lại như thế này...\" Tự trách mình và chán nản trong nhiều ngày",
          id: "\"Mengapa saya seperti ini...\" Menyalahkan diri sendiri dan merasa depresi selama beberapa hari"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "당황해서 어쩔 줄 모르고 누군가 해결해 주길 바란다",
          en: "Panic and don't know what to do, hoping someone will solve it",
          ja: "慌ててどうしていいか分からず、誰かが解決してくれるのを待つ",
          "zh-CN": "惊慌失措，不知道该怎么办，希望有人能解决",
          "zh-TW": "驚慌失措，不知道該怎麼辦，希望有人能解決",
          vi: "Hoảng sợ không biết phải làm gì, hy vọng ai đó sẽ giải quyết",
          id: "Panik dan tidak tahu harus berbuat apa, berharap seseorang akan menyelesaikannya"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"아차 싶지만, 수습부터 하자.\" 해결책을 찾으려 노력한다",
          en: "\"Oops, but let's handle it first.\" Try to find a solution",
          ja: "「しまったけど、まずは収拾をつけよう」解決策を見つけようとする",
          "zh-CN": "「糟糕，但先处理吧」努力寻找解决方案",
          "zh-TW": "「糟糕，但先處理吧」努力尋找解決方案",
          vi: "\"Ồ không, nhưng hãy xử lý trước đã.\" Cố gắng tìm giải pháp",
          id: "\"Ups, tapi mari kita tangani dulu.\" Mencoba mencari solusi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"이것도 경험이지. 다음엔 안 그러면 돼.\" 쿨하게 넘긴다",
          en: "\"This is also an experience. I won't do it next time.\" Coolly move on",
          ja: "「これも経験だ。次はしないようにすればいい」クールに受け流す",
          "zh-CN": "「这也是经验。下次不这样做就行了」冷静地放下",
          "zh-TW": "「這也是經驗。下次不這樣做就行了」冷靜地放下",
          vi: "\"Đây cũng là kinh nghiệm. Lần sau không làm vậy nữa là được.\" Bỏ qua một cách bình tĩnh",
          id: "\"Ini juga pengalaman. Lain kali tidak akan melakukannya.\" Dengan tenang melupakan"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 내 뒷담화를 했다는 사실을 알게 되었다.",
      en: "You found out that a friend talked behind your back.",
      ja: "友達が自分の陰口を言っていたことが分かった。",
      "zh-CN": "你发现一个朋友在背后说你坏话。",
      "zh-TW": "你發現一個朋友在背後說你壞話。",
      vi: "Bạn phát hiện ra rằng một người bạn đã nói xấu sau lưng bạn.",
      id: "Anda mengetahui bahwa seorang teman membicarakan Anda di belakang."
    },
    options: [
      {
        text: {
          ko: "배신감에 치를 떨며 잠을 못 자고 괴로워한다",
          en: "Shake with betrayal and suffer from sleepless nights",
          ja: "裏切りに震え上がり、眠れずに苦しむ",
          "zh-CN": "因背叛而颤抖，无法入睡而痛苦",
          "zh-TW": "因背叛而顫抖，無法入睡而痛苦",
          vi: "Run rẩy vì cảm giác phản bội và đau khổ không ngủ được",
          id: "Gemetar karena pengkhianatan dan menderita karena tidak bisa tidur"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "이유가 궁금해서 주변 사람들에게 하소연한다",
          en: "Curious about the reason, complain to people around",
          ja: "理由が気になって周りの人に愚痴をこぼす",
          "zh-CN": "好奇原因，向周围的人抱怨",
          "zh-TW": "好奇原因，向周圍的人抱怨",
          vi: "Tò mò về lý do, than phiền với những người xung quanh",
          id: "Penasaran dengan alasannya, mengeluh kepada orang di sekitar"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "그 친구와 거리를 두거나 직접 물어보고 푼다",
          en: "Keep distance from that friend or ask directly and resolve it",
          ja: "その友達と距離を置くか、直接聞いて解決する",
          "zh-CN": "与那个朋友保持距离或直接询问并解决",
          "zh-TW": "與那個朋友保持距離或直接詢問並解決",
          vi: "Giữ khoảng cách với người bạn đó hoặc hỏi trực tiếp và giải quyết",
          id: "Menjaga jarak dengan teman itu atau bertanya langsung dan menyelesaikannya"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"나를 질투하나 보네.\" 내 가치와는 상관없다고 무시한다",
          en: "\"They must be jealous of me.\" Ignore it, saying it has nothing to do with my worth",
          ja: "「私を嫉妬してるんだね」自分の価値とは関係ないと無視する",
          "zh-CN": "「他们一定是嫉妒我」无视它，说这与我的价值无关",
          "zh-TW": "「他們一定是嫉妒我」無視它，說這與我的價值無關",
          vi: "\"Họ chắc là ghen tị với mình.\" Bỏ qua, nói rằng nó không liên quan đến giá trị của mình",
          id: "\"Mereka pasti cemburu pada saya.\" Mengabaikannya, mengatakan itu tidak ada hubungannya dengan nilai saya"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "오랫동안 준비한 시험이나 프로젝트에서 탈락했다.",
      en: "You failed an exam or project you prepared for a long time.",
      ja: "長い間準備してきた試験やプロジェクトで落ちた。",
      "zh-CN": "你在一场准备了很久的考试或项目中失败了。",
      "zh-TW": "你在一場準備了很久的考試或專案中失敗了。",
      vi: "Bạn trượt trong một kỳ thi hoặc dự án mà bạn đã chuẩn bị lâu dài.",
      id: "Anda gagal dalam ujian atau proyek yang telah Anda persiapkan lama."
    },
    options: [
      {
        text: {
          ko: "\"내 인생은 망했어.\" 모든 의욕을 잃고 방안에 틀어박힌다",
          en: "\"My life is ruined.\" Lose all motivation and lock myself in the room",
          ja: "「私の人生は終わった」すべての意欲を失い、部屋に閉じこもる",
          "zh-CN": "「我的人生完了」失去所有动力，把自己关在房间里",
          "zh-TW": "「我的人生完了」失去所有動力，把自己關在房間裡",
          vi: "\"Cuộc đời mình hỏng rồi.\" Mất hết động lực và nhốt mình trong phòng",
          id: "\"Hidup saya hancur.\" Kehilangan semua motivasi dan mengunci diri di kamar"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "\"운이 나빴어.\" 환경 탓을 하며 억울해한다",
          en: "\"I had bad luck.\" Blame the environment and feel wronged",
          ja: "「運が悪かった」環境のせいにして悔しい思いをする",
          "zh-CN": "「我运气不好」责怪环境并感到委屈",
          "zh-TW": "「我運氣不好」責怪環境並感到委屈",
          vi: "\"Mình xui xẻo thôi.\" Đổ lỗi cho hoàn cảnh và cảm thấy oan ức",
          id: "\"Saya tidak beruntung.\" Menyalahkan lingkungan dan merasa tidak adil"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"부족한 게 뭐였지?\" 원인을 분석하고 재도전을 고민한다",
          en: "\"What was lacking?\" Analyze the cause and consider retrying",
          ja: "「何が足りなかったんだろう？」原因を分析して再挑戦を考える",
          "zh-CN": "「缺少了什么？」分析原因并考虑重新尝试",
          "zh-TW": "「缺少了什麼？」分析原因並考慮重新嘗試",
          vi: "\"Thiếu sót gì nhỉ?\" Phân tích nguyên nhân và cân nhắc thử lại",
          id: "\"Apa yang kurang?\" Menganalisis penyebab dan mempertimbangkan untuk mencoba lagi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"더 좋은 기회가 오겠지.\" 실패를 과정으로 받아들인다",
          en: "\"A better opportunity will come.\" Accept failure as part of the process",
          ja: "「もっと良い機会が来るだろう」失敗を過程として受け入れる",
          "zh-CN": "「更好的机会会来的」将失败视为过程的一部分",
          "zh-TW": "「更好的機會會來的」將失敗視為過程的一部分",
          vi: "\"Cơ hội tốt hơn sẽ đến thôi.\" Chấp nhận thất bại như một phần của quá trình",
          id: "\"Kesempatan yang lebih baik akan datang.\" Menerima kegagalan sebagai bagian dari proses"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "갑작스러운 변화(이사, 이직, 부서 이동)가 생겼을 때?",
      en: "When sudden changes occur (moving, job change, department transfer)?",
      ja: "突然の変化（引っ越し、転職、部署異動）が起きた時？",
      "zh-CN": "当突然的变化发生时（搬家、换工作、部门调动）？",
      "zh-TW": "當突然的變化發生時（搬家、換工作、部門調動）？",
      vi: "Khi có những thay đổi đột ngột (chuyển nhà, đổi việc, chuyển bộ phận)?",
      id: "Ketika perubahan mendadak terjadi (pindah rumah, ganti pekerjaan, transfer departemen)?"
    },
    options: [
      {
        text: {
          ko: "익숙한 것이 사라지는 게 두렵고 스트레스를 심하게 받는다",
          en: "Afraid of losing familiar things and feel severe stress",
          ja: "慣れ親しんだものがなくなるのが怖く、強いストレスを感じる",
          "zh-CN": "害怕失去熟悉的事物，感到严重压力",
          "zh-TW": "害怕失去熟悉的事物，感到嚴重壓力",
          vi: "Sợ mất đi những điều quen thuộc và cảm thấy căng thẳng nghiêm trọng",
          id: "Takut kehilangan hal-hal yang familiar dan merasa stres berat"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "적응할 생각에 벌써부터 피곤하고 귀찮다",
          en: "Already tired and annoyed at the thought of adapting",
          ja: "適応することを考えるだけで既に疲れて面倒くさい",
          "zh-CN": "一想到要适应就已经感到疲惫和麻烦",
          "zh-TW": "一想到要適應就已經感到疲憊和麻煩",
          vi: "Đã cảm thấy mệt mỏi và khó chịu khi nghĩ đến việc thích ứng",
          id: "Sudah lelah dan kesal memikirkan adaptasi"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "처음엔 긴장되지만, 곧 적응하려고 노력한다",
          en: "Nervous at first, but soon try to adapt",
          ja: "最初は緊張するが、すぐに適応しようと努力する",
          "zh-CN": "起初紧张，但很快努力适应",
          "zh-TW": "起初緊張，但很快努力適應",
          vi: "Lúc đầu căng thẳng, nhưng sớm cố gắng thích ứng",
          id: "Gugup pada awalnya, tapi segera berusaha beradaptasi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"새로운 환경이라니 설렌다!\" 변화를 즐기고 기대한다",
          en: "\"A new environment! How exciting!\" Enjoy and look forward to the change",
          ja: "「新しい環境だなんてワクワクする！」変化を楽しみ期待する",
          "zh-CN": "「新环境！太令人兴奋了！」享受并期待变化",
          "zh-TW": "「新環境！太令人興奮了！」享受並期待變化",
          vi: "\"Môi trường mới! Thật thú vị!\" Tận hưởng và mong đợi sự thay đổi",
          id: "\"Lingkungan baru! Menarik sekali!\" Menikmati dan menantikan perubahan"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "스트레스를 받았을 때 감정 조절은?",
      en: "How do you regulate your emotions when under stress?",
      ja: "ストレスを受けた時、感情のコントロールは？",
      "zh-CN": "当你承受压力时，如何调节情绪？",
      "zh-TW": "當你承受壓力時，如何調節情緒？",
      vi: "Bạn điều chỉnh cảm xúc như thế nào khi bị căng thẳng?",
      id: "Bagaimana Anda mengatur emosi saat mengalami stres?"
    },
    options: [
      {
        text: {
          ko: "감정이 롤러코스터를 타며 주변 사람들에게 화풀이한다",
          en: "Emotions ride a roller coaster and take it out on people around",
          ja: "感情がジェットコースターのように揺れ動き、周りの人に当たり散らす",
          "zh-CN": "情绪像过山车一样波动，向周围的人发泄",
          "zh-TW": "情緒像過山車一樣波動，向周圍的人發洩",
          vi: "Cảm xúc như tàu lượn siêu tốc và trút giận lên những người xung quanh",
          id: "Emosi naik turun seperti roller coaster dan melampiaskan pada orang di sekitar"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "겉으로는 참지만 속으로 끙끙 앓다가 병이 난다",
          en: "Hold it in on the outside but suffer inside and get sick",
          ja: "外では我慢するが、内では苦しみ、病気になる",
          "zh-CN": "表面上忍耐，但内心痛苦，最终生病",
          "zh-TW": "表面上忍耐，但內心痛苦，最終生病",
          vi: "Bên ngoài nhịn nhưng bên trong đau khổ và bị bệnh",
          id: "Menahan di luar tapi menderita di dalam dan menjadi sakit"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "믿을 만한 사람에게 털어놓거나 취미 생활로 푼다",
          en: "Pour it out to someone trustworthy or release it through hobbies",
          ja: "信頼できる人に打ち明けるか、趣味で発散する",
          "zh-CN": "向值得信赖的人倾诉或通过爱好释放",
          "zh-TW": "向值得信賴的人傾訴或通過愛好釋放",
          vi: "Tâm sự với người đáng tin cậy hoặc giải tỏa qua sở thích",
          id: "Mencurahkan kepada orang yang bisa dipercaya atau melepaskannya melalui hobi"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "명상이나 운동을 통해 스스로 마음을 다스린다",
          en: "Control my mind myself through meditation or exercise",
          ja: "瞑想や運動を通じて自分で心を整える",
          "zh-CN": "通过冥想或运动自己调节心情",
          "zh-TW": "通過冥想或運動自己調節心情",
          vi: "Tự điều chỉnh tâm trí qua thiền định hoặc tập thể dục",
          id: "Mengendalikan pikiran sendiri melalui meditasi atau olahraga"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "평소 자신에 대해 어떻게 생각하나요?",
      en: "What do you usually think about yourself?",
      ja: "普段、自分についてどう思いますか？",
      "zh-CN": "你平时对自己有什么看法？",
      "zh-TW": "你平時對自己有什麼看法？",
      vi: "Bạn thường nghĩ gì về bản thân?",
      id: "Apa yang biasanya Anda pikirkan tentang diri sendiri?"
    },
    options: [
      {
        text: {
          ko: "단점 투성이고 남들보다 못난 것 같다",
          en: "Full of flaws and seem worse than others",
          ja: "欠点だらけで、他の人より劣っているように感じる",
          "zh-CN": "满是缺点，似乎比别人差",
          "zh-TW": "滿是缺點，似乎比別人差",
          vi: "Đầy khuyết điểm và có vẻ kém hơn người khác",
          id: "Penuh dengan kekurangan dan terasa lebih buruk dari orang lain"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "평범하지만 가끔은 내가 마음에 안 든다",
          en: "Ordinary but sometimes I don't like myself",
          ja: "平凡だが、時々自分が気に入らない",
          "zh-CN": "平凡，但有时不喜欢自己",
          "zh-TW": "平凡，但有時不喜歡自己",
          vi: "Bình thường nhưng đôi khi không thích bản thân",
          id: "Biasa saja tapi kadang tidak suka dengan diri sendiri"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "완벽하진 않지만 이 정도면 꽤 괜찮은 사람이다",
          en: "Not perfect but I'm a pretty good person at this level",
          ja: "完璧ではないが、この程度ならかなり良い人間だ",
          "zh-CN": "不完美，但在这个程度上是个相当不错的人",
          "zh-TW": "不完美，但在這個程度上是個相當不錯的人",
          vi: "Không hoàn hảo nhưng ở mức này là người khá tốt",
          id: "Tidak sempurna tapi pada level ini adalah orang yang cukup baik"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "나는 무엇이든 해낼 수 있는 잠재력을 가진 사람이다",
          en: "I am a person with the potential to achieve anything",
          ja: "私は何でも成し遂げられる可能性を持った人間だ",
          "zh-CN": "我是一个有潜力成就任何事情的人",
          "zh-TW": "我是一個有潛力成就任何事情的人",
          vi: "Tôi là người có tiềm năng đạt được bất cứ điều gì",
          id: "Saya adalah orang dengan potensi untuk mencapai apa pun"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "타인의 비판이나 지적을 들었을 때?",
      en: "When you hear criticism or feedback from others?",
      ja: "他人の批判や指摘を聞いた時？",
      "zh-CN": "当你听到别人的批评或指正时？",
      "zh-TW": "當你聽到別人的批評或指正時？",
      vi: "Khi bạn nghe được lời chỉ trích hoặc góp ý từ người khác?",
      id: "Ketika Anda mendengar kritik atau masukan dari orang lain?"
    },
    options: [
      {
        text: {
          ko: "나를 공격한다고 느껴서 상처받거나 방어적으로 변한다",
          en: "Feel attacked, get hurt, or become defensive",
          ja: "自分を攻撃されていると感じ、傷ついたり防御的になる",
          "zh-CN": "感觉受到攻击，受伤或变得防御性",
          "zh-TW": "感覺受到攻擊，受傷或變得防禦性",
          vi: "Cảm thấy bị tấn công, bị tổn thương hoặc trở nên phòng thủ",
          id: "Merasa diserang, terluka, atau menjadi defensif"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "하루 종일 그 말이 머릿속을 맴돌며 신경 쓰인다",
          en: "That comment lingers in my mind all day and bothers me",
          ja: "その言葉が一日中頭を巡り、気になって仕方がない",
          "zh-CN": "那句话整天在脑海中回响，让我心烦",
          "zh-TW": "那句話整天在腦海中迴響，讓我心煩",
          vi: "Câu nói đó cứ quẩn quanh trong đầu cả ngày và làm phiền tôi",
          id: "Komentar itu mengganggu pikiran sepanjang hari"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "기분은 나쁘지만, 타당한 부분은 수용한다",
          en: "Feel bad but accept the valid parts",
          ja: "気分は悪いが、妥当な部分は受け入れる",
          "zh-CN": "心情不好，但接受合理的部分",
          "zh-TW": "心情不好，但接受合理的部分",
          vi: "Cảm thấy không vui nhưng chấp nhận những phần hợp lý",
          id: "Merasa tidak enak tapi menerima bagian yang valid"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "\"좋은 피드백 고마워.\" 성장의 밑거름으로 삼는다",
          en: "\"Thanks for the good feedback.\" Use it as fuel for growth",
          ja: "「良いフィードバックありがとう」成長の糧にする",
          "zh-CN": "「感谢好的反馈」将其作为成长的养分",
          "zh-TW": "「感謝好的反饋」將其作為成長的養分",
          vi: "\"Cảm ơn phản hồi tốt.\" Sử dụng nó làm nền tảng cho sự phát triển",
          id: "\"Terima kasih atas masukan yang baik.\" Menggunakannya sebagai bahan bakar untuk pertumbuhan"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "힘든 일이 닥쳤을 때 주변에 도움을 요청하나요?",
      en: "Do you ask for help from those around you when difficulties arise?",
      ja: "困難なことが起きた時、周りに助けを求めますか？",
      "zh-CN": "当困难来临时，你会向周围的人求助吗？",
      "zh-TW": "當困難來臨時，你會向周圍的人求助嗎？",
      vi: "Bạn có nhờ sự giúp đỡ từ những người xung quanh khi gặp khó khăn không?",
      id: "Apakah Anda meminta bantuan dari orang di sekitar ketika kesulitan muncul?"
    },
    options: [
      {
        text: {
          ko: "짐이 될까 봐, 혹은 자존심 때문에 혼자 끙끙 앓는다",
          en: "Suffer alone, afraid of being a burden or due to pride",
          ja: "負担になるのを恐れたり、プライドのために一人で苦しむ",
          "zh-CN": "独自承受，害怕成为负担或因为自尊心",
          "zh-TW": "獨自承受，害怕成為負擔或因為自尊心",
          vi: "Chịu đựng một mình, sợ trở thành gánh nặng hoặc vì lòng tự trọng",
          id: "Menderita sendirian, takut menjadi beban atau karena harga diri"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "누군가 알아서 도와주길 바라며 티를 낸다",
          en: "Hope someone will help automatically and show signs",
          ja: "誰かが自然に助けてくれるのを期待してサインを出す",
          "zh-CN": "希望有人能自动帮助并表现出迹象",
          "zh-TW": "希望有人能自動幫助並表現出跡象",
          vi: "Hy vọng ai đó sẽ tự động giúp đỡ và thể hiện dấu hiệu",
          id: "Berharap seseorang akan membantu secara otomatis dan menunjukkan tanda-tanda"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "가까운 지인들에게 조언을 구하고 위로받는다",
          en: "Seek advice from close acquaintances and receive comfort",
          ja: "親しい知人にアドバイスを求め、慰めてもらう",
          "zh-CN": "向亲近的熟人寻求建议并获得安慰",
          "zh-TW": "向親近的熟人尋求建議並獲得安慰",
          vi: "Tìm kiếm lời khuyên từ những người quen thân và nhận được sự an ủi",
          id: "Mencari nasihat dari kenalan dekat dan menerima kenyamanan"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "필요한 도움을 명확하게 요청하고 적극적으로 해결한다",
          en: "Clearly request the help needed and actively solve it",
          ja: "必要な助けを明確に求め、積極的に解決する",
          "zh-CN": "明确请求所需的帮助并积极解决",
          "zh-TW": "明確請求所需的幫助並積極解決",
          vi: "Yêu cầu rõ ràng sự giúp đỡ cần thiết và tích cực giải quyết",
          id: "Meminta bantuan yang dibutuhkan dengan jelas dan secara aktif menyelesaikannya"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "미래에 대한 당신의 주된 감정은?",
      en: "What is your main feeling about the future?",
      ja: "未来に対するあなたの主な感情は？",
      "zh-CN": "你对未来的主要感受是什么？",
      "zh-TW": "你對未來的主要感受是什麼？",
      vi: "Cảm xúc chính của bạn về tương lai là gì?",
      id: "Apa perasaan utama Anda tentang masa depan?"
    },
    options: [
      {
        text: {
          ko: "막막하고 두렵다. 안 좋은 일이 생길 것 같다",
          en: "Overwhelming and scary. Bad things will probably happen",
          ja: "行き詰まり、恐ろしい。悪いことが起こりそうだ",
          "zh-CN": "茫然和恐惧。似乎会发生不好的事情",
          "zh-TW": "茫然和恐懼。似乎會發生不好的事情",
          vi: "Bối rối và sợ hãi. Có vẻ như những điều tồi tệ sẽ xảy ra",
          id: "Membingungkan dan menakutkan. Hal buruk mungkin akan terjadi"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "별생각 없다. 하루하루 버티는 게 목표다",
          en: "Don't think much. The goal is to get through each day",
          ja: "特に考えない。一日一日を耐えるのが目標だ",
          "zh-CN": "没什么想法。目标是熬过每一天",
          "zh-TW": "沒什麼想法。目標是熬過每一天",
          vi: "Không nghĩ nhiều. Mục tiêu là sống qua từng ngày",
          id: "Tidak banyak berpikir. Tujuannya adalah bertahan setiap hari"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "구체적인 계획은 없지만 잘 될 거라고 믿는다",
          en: "No specific plan but believe it will work out well",
          ja: "具体的な計画はないが、うまくいくと信じている",
          "zh-CN": "没有具体计划，但相信会顺利",
          "zh-TW": "沒有具體計劃，但相信會順利",
          vi: "Không có kế hoạch cụ thể nhưng tin rằng mọi thứ sẽ ổn",
          id: "Tidak ada rencana spesifik tapi percaya akan berjalan baik"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "내가 원하는 대로 삶을 만들어갈 수 있다고 확신한다",
          en: "Confident that I can create my life as I want",
          ja: "自分が望むように人生を作り上げられると確信している",
          "zh-CN": "确信我可以按照自己的意愿创造生活",
          "zh-TW": "確信我可以按照自己的意願創造生活",
          vi: "Tự tin rằng mình có thể tạo dựng cuộc sống theo ý muốn",
          id: "Yakin bahwa saya bisa menciptakan hidup saya sesuai keinginan"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "과거의 상처나 트라우마가 떠오를 때?",
      en: "When past wounds or trauma come to mind?",
      ja: "過去の傷やトラウマが思い浮かんだ時？",
      "zh-CN": "当过去的伤痛或创伤浮现时？",
      "zh-TW": "當過去的傷痛或創傷浮現時？",
      vi: "Khi những vết thương hoặc chấn thương trong quá khứ xuất hiện?",
      id: "Ketika luka atau trauma masa lalu muncul?"
    },
    options: [
      {
        text: {
          ko: "그 기억에 사로잡혀 현재의 일상생활이 힘들어진다",
          en: "Trapped by that memory, daily life becomes difficult",
          ja: "その記憶に囚われ、現在の日常生活が困難になる",
          "zh-CN": "被那个记忆困住，日常生活变得困难",
          "zh-TW": "被那個記憶困住，日常生活變得困難",
          vi: "Bị mắc kẹt trong ký ức đó, cuộc sống hàng ngày trở nên khó khăn",
          id: "Terjebak dalam ingatan itu, kehidupan sehari-hari menjadi sulit"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "억지로 외면하거나 잊으려고 애쓴다",
          en: "Forcefully ignore it or try hard to forget",
          ja: "無理に無視したり、忘れようと努力する",
          "zh-CN": "强行忽视或努力忘记",
          "zh-TW": "強行忽視或努力忘記",
          vi: "Cố gắng bỏ qua hoặc cố quên đi",
          id: "Memaksa mengabaikannya atau berusaha keras untuk melupakan"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "\"그땐 힘들었지.\" 덤덤하게 받아들이려 노력한다",
          en: "\"It was hard back then.\" Try to accept it calmly",
          ja: "「あの時は大変だった」冷静に受け入れようとする",
          "zh-CN": "「那时很艰难」努力冷静地接受",
          "zh-TW": "「那時很艱難」努力冷靜地接受",
          vi: "\"Lúc đó thật khó khăn.\" Cố gắng chấp nhận một cách bình tĩnh",
          id: "\"Saat itu sulit.\" Berusaha menerimanya dengan tenang"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "그 상처 덕분에 내가 더 단단해졌다고 생각한다",
          en: "Think that wound made me stronger",
          ja: "その傷のおかげで自分がより強くなったと思う",
          "zh-CN": "认为那个伤痛让我变得更坚强",
          "zh-TW": "認為那個傷痛讓我變得更堅強",
          vi: "Nghĩ rằng vết thương đó đã làm mình mạnh mẽ hơn",
          id: "Berpikir bahwa luka itu membuat saya lebih kuat"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "당신의 인내심은 어느 정도인가요?",
      en: "How much patience do you have?",
      ja: "あなたの忍耐力はどの程度ですか？",
      "zh-CN": "你的耐心程度如何？",
      "zh-TW": "你的耐心程度如何？",
      vi: "Bạn có bao nhiêu kiên nhẫn?",
      id: "Seberapa besar kesabaran Anda?"
    },
    options: [
      {
        text: {
          ko: "결과가 바로 안 나오면 금방 포기하고 다른 걸 찾는다",
          en: "Give up quickly if results don't come immediately and look for something else",
          ja: "結果がすぐに出ないとすぐに諦めて他のものを探す",
          "zh-CN": "如果结果没有立即出现，就很快放弃并寻找其他东西",
          "zh-TW": "如果結果沒有立即出現，就很快放棄並尋找其他東西",
          vi: "Bỏ cuộc nhanh chóng nếu kết quả không đến ngay và tìm kiếm thứ khác",
          id: "Menyerah dengan cepat jika hasil tidak langsung muncul dan mencari hal lain"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "억지로 참고는 있지만 언제 터질지 모른다",
          en: "Force myself to endure but don't know when I'll explode",
          ja: "無理に我慢はしているが、いつ爆発するか分からない",
          "zh-CN": "强迫自己忍耐，但不知道什么时候会爆发",
          "zh-TW": "強迫自己忍耐，但不知道什麼時候會爆發",
          vi: "Cố gắng chịu đựng nhưng không biết khi nào sẽ bùng nổ",
          id: "Memaksa diri untuk bertahan tapi tidak tahu kapan akan meledak"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "목표를 위해 어느 정도의 힘든 과정은 감수한다",
          en: "Accept a certain amount of difficult process for the goal",
          ja: "目標のためにある程度の困難な過程は受け入れる",
          "zh-CN": "为了目标接受一定程度的困难过程",
          "zh-TW": "為了目標接受一定程度的困難過程",
          vi: "Chấp nhận một mức độ quá trình khó khăn vì mục tiêu",
          id: "Menerima sejumlah proses sulit untuk tujuan"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "끝까지 간다. 인내 끝에 올 열매의 달콤함을 안다",
          en: "Go to the end. Know the sweetness of the fruit that comes after patience",
          ja: "最後まで行く。忍耐の先にある果実の甘さを知っている",
          "zh-CN": "坚持到底。知道耐心之后果实的甜蜜",
          "zh-TW": "堅持到底。知道耐心之後果實的甜蜜",
          vi: "Đi đến cùng. Biết vị ngọt của trái cây đến sau sự kiên nhẫn",
          id: "Pergi sampai akhir. Tahu manisnya buah yang datang setelah kesabaran"
        },
        score: 3 // D
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "오늘 하루, 감사한 일이 있었나요?",
      en: "Was there something you were grateful for today?",
      ja: "今日一日、感謝したことはありましたか？",
      "zh-CN": "今天有什么让你感激的事情吗？",
      "zh-TW": "今天有什麼讓你感激的事情嗎？",
      vi: "Hôm nay có điều gì bạn biết ơn không?",
      id: "Apakah ada sesuatu yang Anda syukuri hari ini?"
    },
    options: [
      {
        text: {
          ko: "딱히 없다. 짜증 나는 일만 많았다",
          en: "Not really. There were only annoying things",
          ja: "特にない。イライラすることばかりだった",
          "zh-CN": "没什么。只有令人烦恼的事情",
          "zh-TW": "沒什麼。只有令人煩惱的事情",
          vi: "Không có gì đặc biệt. Chỉ có những điều khó chịu",
          id: "Tidak ada. Hanya hal-hal yang mengganggu"
        },
        score: 0 // A
      },
      {
        text: {
          ko: "글쎄... 밥 먹은 거? 잘 모르겠다",
          en: "Well... eating? Not sure",
          ja: "うーん...ご飯を食べたこと？よく分からない",
          "zh-CN": "嗯...吃饭了？不太确定",
          "zh-TW": "嗯...吃飯了？不太確定",
          vi: "Ờ... ăn cơm? Không chắc lắm",
          id: "Hmm... makan? Tidak yakin"
        },
        score: 1 // B
      },
      {
        text: {
          ko: "별일 없이 하루가 지나간 것에 감사한다",
          en: "Grateful that the day passed without incident",
          ja: "何事もなく一日が過ぎたことに感謝する",
          "zh-CN": "感激这一天平安无事地过去了",
          "zh-TW": "感激這一天平安無事地過去了",
          vi: "Biết ơn vì ngày đã trôi qua không có gì xảy ra",
          id: "Bersyukur hari berlalu tanpa insiden"
        },
        score: 2 // C
      },
      {
        text: {
          ko: "사소한 것들(날씨, 커피 한 잔)에서도 감사를 찾았다",
          en: "Found gratitude even in small things (weather, a cup of coffee)",
          ja: "些細なこと（天気、コーヒー一杯）からも感謝を見つけた",
          "zh-CN": "即使在小事中（天气、一杯咖啡）也找到了感激",
          "zh-TW": "即使在小事中（天氣、一杯咖啡）也找到了感激",
          vi: "Tìm thấy lòng biết ơn ngay cả trong những điều nhỏ nhặt (thời tiết, một tách cà phê)",
          id: "Menemukan rasa syukur bahkan dalam hal-hal kecil (cuaca, secangkir kopi)"
        },
        score: 3 // D
      }
    ]
  }
];

export const phase2ResilienceResults: Phase2ResilienceResult[] = [
  {
    type: "Type1",
    emoji: "🍪",
    title: {
      ko: "바사삭 쿠크다스, 유리 멘탈 (Fragile)",
      en: "Crispy Cookie, Glass Mental (Fragile)",
      ja: "パリパリクッキー、ガラスのメンタル（脆弱）",
      "zh-CN": "脆饼干，玻璃心态（脆弱）",
      "zh-TW": "脆餅乾，玻璃心態（脆弱）",
      vi: "Bánh Quy Giòn, Tinh Thần Thủy Tinh (Dễ Vỡ)",
      id: "Kue Renyah, Mental Kaca (Rapuh)"
    },
    shortDescription: {
      ko: "\"스치기만 해도 부서져요... 보호가 필요해\"",
      en: "\"It breaks even from a touch... needs protection\"",
      ja: "「触れるだけで壊れる...保護が必要」",
      "zh-CN": "「轻轻一碰就碎了...需要保护」",
      "zh-TW": "「輕輕一碰就碎了...需要保護」",
      vi: "\"Chỉ cần chạm nhẹ là vỡ... cần được bảo vệ\"",
      id: "\"Hancur bahkan hanya dengan sentuhan... perlu perlindungan\""
    },
    description: {
      ko: "당신은 마음의 피부가 매우 얇은 상태입니다. 작은 실수나 타인의 말 한마디에도 깊은 상처를 받고, 회복하는 데 오랜 시간이 걸립니다. 부정적인 감정에 쉽게 압도되며, 자책하는 습관이 있습니다. 지금은 무리한 도전보다 나를 돌보는 휴식이 최우선입니다.",
      en: "You have very thin emotional skin. You get deeply hurt by small mistakes or a single word from others, and it takes a long time to recover. You are easily overwhelmed by negative emotions and have a habit of self-blame. Right now, rest and self-care are more important than forcing challenges.",
      ja: "あなたは心の皮膚が非常に薄い状態です。小さな失敗や他人の一言にも深く傷つき、回復するのに長い時間がかかります。否定的な感情に簡単に圧倒され、自分を責める習慣があります。今は無理な挑戦よりも自分を大切にする休息が最優先です。",
      "zh-CN": "你的情感皮肤非常薄。你会因为小错误或别人的一句话而受到深深的伤害，需要很长时间才能恢复。你容易被负面情绪压垮，有自责的习惯。现在，休息和自我照顾比强迫挑战更重要。",
      "zh-TW": "你的情感皮膚非常薄。你會因為小錯誤或別人的一句話而受到深深的傷害，需要很長時間才能恢復。你容易被負面情緒壓垮，有自責的習慣。現在，休息和自我照顧比強迫挑戰更重要。",
      vi: "Bạn có làn da cảm xúc rất mỏng. Bạn bị tổn thương sâu sắc bởi những sai lầm nhỏ hoặc một lời nói của người khác, và mất nhiều thời gian để phục hồi. Bạn dễ bị áp đảo bởi cảm xúc tiêu cực và có thói quen tự trách mình. Bây giờ, nghỉ ngơi và chăm sóc bản thân quan trọng hơn việc ép buộc thử thách.",
      id: "Anda memiliki kulit emosional yang sangat tipis. Anda terluka dalam oleh kesalahan kecil atau satu kata dari orang lain, dan butuh waktu lama untuk pulih. Anda mudah kewalahan oleh emosi negatif dan memiliki kebiasaan menyalahkan diri sendiri. Sekarang, istirahat dan perawatan diri lebih penting daripada memaksa tantangan."
    },
    resilienceScore: {
      ko: "5점 미만",
      en: "Less than 5 points",
      ja: "5点未満",
      "zh-CN": "低于5分",
      "zh-TW": "低於5分",
      vi: "Dưới 5 điểm",
      id: "Kurang dari 5 poin"
    },
    characteristics: {
      ko: "잦은 눈물, 자기 비하, 불안감",
      en: "Frequent tears, self-deprecation, anxiety",
      ja: "頻繁な涙、自己卑下、不安感",
      "zh-CN": "经常流泪、自我贬低、焦虑",
      "zh-TW": "經常流淚、自我貶低、焦慮",
      vi: "Nước mắt thường xuyên, tự hạ thấp bản thân, lo âu",
      id: "Air mata yang sering, merendahkan diri, kecemasan"
    },
    prescription: {
      ko: "\"내 잘못이 아니야\"라고 소리 내어 말해보세요.",
      en: "Try saying out loud, \"It's not my fault.\"",
      ja: "「私のせいじゃない」と声に出して言ってみてください。",
      "zh-CN": "试着大声说：「这不是我的错。」",
      "zh-TW": "試著大聲說：「這不是我的錯。」",
      vi: "Hãy thử nói to: \"Đây không phải lỗi của mình.\"",
      id: "Coba katakan dengan lantang, \"Ini bukan kesalahan saya.\""
    }
  },
  {
    type: "Type2",
    emoji: "☁️",
    title: {
      ko: "젖은 스펀지, 물먹은 솜 (Saturated)",
      en: "Wet Sponge, Waterlogged Cotton (Saturated)",
      ja: "濡れたスポンジ、水を含んだ綿（飽和）",
      "zh-CN": "湿海绵，吸水的棉花（饱和）",
      "zh-TW": "濕海綿，吸水的棉花（飽和）",
      vi: "Bọt Biển Ướt, Bông Ngấm Nước (Bão Hòa)",
      id: "Spons Basah, Kapas Terendam Air (Jenuh)"
    },
    shortDescription: {
      ko: "\"부정적인 감정을 꽉 머금고 있어요\"",
      en: "\"Holding negative emotions tightly inside\"",
      ja: "「否定的な感情をぎゅっと抱えている」",
      "zh-CN": "「紧紧压抑着负面情绪」",
      "zh-TW": "「緊緊壓抑著負面情緒」",
      vi: "\"Đang giữ chặt những cảm xúc tiêu cực bên trong\"",
      id: "\"Memegang erat emosi negatif di dalam\""
    },
    description: {
      ko: "당신은 스트레스와 상처를 밖으로 배출하지 못하고 안으로 꾹꾹 눌러 담고 있습니다. 겉으로는 괜찮아 보일지 몰라도, 속은 이미 포화 상태라 작은 자극에도 무너질 수 있습니다. 남들의 눈치를 보느라 정작 내 마음이 썩어가는 줄 모르는 상태입니다.",
      en: "You can't release stress and wounds outward and keep pressing them inside. You may look fine on the outside, but inside you're already saturated and can collapse from small stimuli. You're so busy reading others' reactions that you don't realize your own heart is rotting.",
      ja: "あなたはストレスと傷を外に排出できず、内側にぎゅっと押し込んでいます。外見は大丈夫に見えるかもしれませんが、中身はすでに飽和状態で、小さな刺激にも崩れ落ちる可能性があります。他人の顔色を伺うのに忙しく、自分の心が腐っていることに気づいていません。",
      "zh-CN": "你无法向外释放压力和创伤，而是把它们紧紧压在内心。外表可能看起来还好，但内心已经饱和，可能因为小的刺激而崩溃。你忙于看别人的眼色，却没有意识到自己的心正在腐烂。",
      "zh-TW": "你無法向外釋放壓力和創傷，而是把它們緊緊壓在內心。外表可能看起來還好，但內心已經飽和，可能因為小的刺激而崩潰。你忙於看別人的眼色，卻沒有意識到自己的心正在腐爛。",
      vi: "Bạn không thể giải phóng căng thẳng và vết thương ra ngoài và cứ ép chúng vào bên trong. Bên ngoài có vẻ ổn nhưng bên trong đã bão hòa và có thể sụp đổ vì những kích thích nhỏ. Bạn quá bận rộn đọc phản ứng của người khác mà không nhận ra trái tim mình đang thối rữa.",
      id: "Anda tidak bisa melepaskan stres dan luka ke luar dan terus menekannya ke dalam. Anda mungkin terlihat baik-baik saja di luar, tapi di dalam sudah jenuh dan bisa runtuh dari rangsangan kecil. Anda terlalu sibuk membaca reaksi orang lain sehingga tidak menyadari hati Anda sendiri membusuk."
    },
    resilienceScore: {
      ko: "20점",
      en: "20 points",
      ja: "20点",
      "zh-CN": "20分",
      "zh-TW": "20分",
      vi: "20 điểm",
      id: "20 poin"
    },
    characteristics: {
      ko: "억지 미소, 속앓이, 만성 피로",
      en: "Forced smile, inner suffering, chronic fatigue",
      ja: "無理な笑顔、内なる苦しみ、慢性的な疲労",
      "zh-CN": "强颜欢笑、内心痛苦、慢性疲劳",
      "zh-TW": "強顏歡笑、內心痛苦、慢性疲勞",
      vi: "Nụ cười gượng gạo, đau khổ bên trong, mệt mỏi mãn tính",
      id: "Senyum paksa, penderitaan batin, kelelahan kronis"
    },
    prescription: {
      ko: "감정 쓰레기통을 비우는 연습이 필요합니다.",
      en: "You need to practice emptying your emotional trash can.",
      ja: "感情のゴミ箱を空にする練習が必要です。",
      "zh-CN": "你需要练习清空你的情感垃圾桶。",
      "zh-TW": "你需要練習清空你的情感垃圾桶。",
      vi: "Bạn cần luyện tập việc làm trống thùng rác cảm xúc của mình.",
      id: "Anda perlu berlatih mengosongkan tempat sampah emosional Anda."
    }
  },
  {
    type: "Type3",
    emoji: "🧶",
    title: {
      ko: "늘어난 고무줄, 탄성 부족 (Stretched)",
      en: "Stretched Rubber Band, Lack of Elasticity (Stretched)",
      ja: "伸びたゴム、弾力不足（伸びきった）",
      "zh-CN": "拉长的橡皮筋，弹性不足（拉伸）",
      "zh-TW": "拉長的橡皮筋，彈性不足（拉伸）",
      vi: "Dây Cao Su Căng, Thiếu Đàn Hồi (Căng Giãn)",
      id: "Karet Terulur, Kurang Elastis (Teregang)"
    },
    shortDescription: {
      ko: "\"버티고는 있는데... 돌아가기 힘들어요\"",
      en: "\"I'm holding on... but it's hard to bounce back\"",
      ja: "「耐えてはいるけど...戻るのが難しい」",
      "zh-CN": "「我在坚持...但很难恢复」",
      "zh-TW": "「我在堅持...但很難恢復」",
      vi: "\"Mình đang cố gắng... nhưng khó quay lại\"",
      id: "\"Saya bertahan... tapi sulit untuk kembali\""
    },
    description: {
      ko: "당신은 힘든 일을 겪고 난 후, 예전의 텐션을 되찾기 위해 애쓰고 있습니다. 일상생활은 가능하지만, 마음 한구석에 무기력함이나 지친 기색이 남아있습니다. 회복하려는 의지는 있지만 에너지가 부족한 상태입니다. 조금만 더 힘을 내면 탄성을 회복할 수 있습니다.",
      en: "After going through difficult times, you're struggling to regain your former tension. Daily life is possible, but there's still a sense of lethargy or exhaustion lingering in a corner of your heart. You have the will to recover but lack energy. If you push a little harder, you can regain your elasticity.",
      ja: "困難な経験をした後、以前のテンションを取り戻そうと努力しています。日常生活は可能ですが、心の片隅に無気力さや疲れの色が残っています。回復しようとする意志はありますが、エネルギーが不足している状態です。もう少し力を出せば、弾力を取り戻すことができます。",
      "zh-CN": "在经历了困难之后，你正在努力恢复以前的紧张感。日常生活是可能的，但心中仍有一丝无精打采或疲惫。你有恢复的意愿但缺乏能量。如果你再努力一点，就能恢复弹性。",
      "zh-TW": "在經歷了困難之後，你正在努力恢復以前的緊張感。日常生活是可能的，但心中仍有一絲無精打采或疲憊。你有恢復的意願但缺乏能量。如果你再努力一點，就能恢復彈性。",
      vi: "Sau khi trải qua những thời điểm khó khăn, bạn đang cố gắng lấy lại sự căng thẳng trước đây. Cuộc sống hàng ngày vẫn có thể nhưng vẫn còn cảm giác uể oải hoặc kiệt sức ở một góc của trái tim. Bạn có ý chí phục hồi nhưng thiếu năng lượng. Nếu bạn cố gắng thêm một chút, bạn có thể lấy lại độ đàn hồi.",
      id: "Setelah melewati masa-masa sulit, Anda berjuang untuk mendapatkan kembali ketegangan sebelumnya. Kehidupan sehari-hari mungkin, tapi masih ada rasa lesu atau kelelahan yang tersisa di sudut hati Anda. Anda memiliki keinginan untuk pulih tapi kurang energi. Jika Anda mendorong sedikit lebih keras, Anda bisa mendapatkan kembali elastisitas Anda."
    },
    resilienceScore: {
      ko: "40점",
      en: "40 points",
      ja: "40点",
      "zh-CN": "40分",
      "zh-TW": "40分",
      vi: "40 điểm",
      id: "40 poin"
    },
    characteristics: {
      ko: "번아웃 초기, 귀차니즘, 의욕 저하",
      en: "Early burnout, laziness, decreased motivation",
      ja: "燃え尽き症候群の初期、面倒くささ、意欲低下",
      "zh-CN": "早期倦怠、懒惰、动机下降",
      "zh-TW": "早期倦怠、懶惰、動機下降",
      vi: "Giai đoạn đầu kiệt sức, lười biếng, giảm động lực",
      id: "Awal kelelahan, kemalasan, penurunan motivasi"
    },
    prescription: {
      ko: "작은 성공 경험(이불 개기 등)을 쌓아보세요.",
      en: "Try accumulating small success experiences (like making the bed, etc.).",
      ja: "小さな成功体験（ベッドメイキングなど）を積んでみてください。",
      "zh-CN": "试着积累小的成功经验（比如整理床铺等）。",
      "zh-TW": "試著積累小的成功經驗（比如整理床鋪等）。",
      vi: "Hãy thử tích lũy những trải nghiệm thành công nhỏ (như dọn giường, v.v.).",
      id: "Coba kumpulkan pengalaman sukses kecil (seperti merapikan tempat tidur, dll.)."
    }
  },
  {
    type: "Type4",
    emoji: "🎋",
    title: {
      ko: "유연한 대나무, 건강한 멘탈 (Flexible)",
      en: "Flexible Bamboo, Healthy Mental (Flexible)",
      ja: "柔軟な竹、健康的なメンタル（柔軟）",
      "zh-CN": "柔韧的竹子，健康的心态（灵活）",
      "zh-TW": "柔韌的竹子，健康的心態（靈活）",
      vi: "Tre Linh Hoạt, Tinh Thần Khỏe Mạnh (Linh Hoạt)",
      id: "Bambu Fleksibel, Mental Sehat (Fleksibel)"
    },
    shortDescription: {
      ko: "\"흔들릴지언정 부러지지는 않아요\"",
      en: "\"May sway but won't break\"",
      ja: "「揺れることはあっても折れることはない」",
      "zh-CN": "「可能会摇摆但不会折断」",
      "zh-TW": "「可能會搖擺但不會折斷」",
      vi: "\"Có thể lay động nhưng không gãy\"",
      id: "\"Mungkin bergoyang tapi tidak akan patah\""
    },
    description: {
      ko: "당신은 건강한 회복탄력성을 가지고 있습니다. 시련이 닥치면 잠시 힘들어할 수는 있지만, 곧 털고 일어나 해결책을 찾습니다. 자신의 감정을 잘 이해하고 있으며, 주변 사람들과 소통하며 스트레스를 해소할 줄 아는 현명한 사람입니다.",
      en: "You have healthy resilience. When trials come, you may struggle briefly, but soon you shake it off and find solutions. You understand your emotions well and are a wise person who knows how to communicate with those around you and relieve stress.",
      ja: "あなたは健康的な回復力を持っています。試練が訪れても、一時的に苦しむことはあっても、すぐに立ち直って解決策を見つけます。自分の感情をよく理解しており、周りの人々とコミュニケーションを取りながらストレスを解消する方法を知っている賢い人です。",
      "zh-CN": "你拥有健康的恢复力。当考验来临时，你可能会短暂挣扎，但很快就能振作起来并找到解决方案。你很好地理解自己的情绪，是一个明智的人，知道如何与周围的人沟通并缓解压力。",
      "zh-TW": "你擁有健康的恢復力。當考驗來臨時，你可能會短暫掙扎，但很快就能振作起來並找到解決方案。你很好地理解自己的情緒，是一個明智的人，知道如何與周圍的人溝通並緩解壓力。",
      vi: "Bạn có khả năng phục hồi khỏe mạnh. Khi thử thách đến, bạn có thể gặp khó khăn trong chốc lát, nhưng sớm lắc bỏ và tìm giải pháp. Bạn hiểu rõ cảm xúc của mình và là người khôn ngoan biết cách giao tiếp với những người xung quanh và giải tỏa căng thẳng.",
      id: "Anda memiliki ketahanan yang sehat. Ketika cobaan datang, Anda mungkin berjuang sebentar, tapi segera mengibaskannya dan menemukan solusi. Anda memahami emosi Anda dengan baik dan adalah orang bijak yang tahu cara berkomunikasi dengan orang di sekitar dan meredakan stres."
    },
    resilienceScore: {
      ko: "60점",
      en: "60 points",
      ja: "60点",
      "zh-CN": "60分",
      "zh-TW": "60分",
      vi: "60 điểm",
      id: "60 poin"
    },
    characteristics: {
      ko: "긍정적, 문제 해결 지향, 원만한 관계",
      en: "Positive, problem-solving oriented, harmonious relationships",
      ja: "ポジティブ、問題解決志向、円満な関係",
      "zh-CN": "积极、以解决问题为导向、和谐的关系",
      "zh-TW": "積極、以解決問題為導向、和諧的關係",
      vi: "Tích cực, hướng giải quyết vấn đề, mối quan hệ hài hòa",
      id: "Positif, berorientasi pemecahan masalah, hubungan harmonis"
    },
    prescription: {
      ko: "지금처럼만 마음 근육을 유지하세요.",
      en: "Just maintain your mental muscle as you are now.",
      ja: "今のまま心の筋肉を維持してください。",
      "zh-CN": "只要像现在这样保持你的心理肌肉。",
      "zh-TW": "只要像現在這樣保持你的心理肌肉。",
      vi: "Chỉ cần duy trì cơ bắp tinh thần như bây giờ.",
      id: "Pertahankan saja otot mental Anda seperti sekarang."
    }
  },
  {
    type: "Type5",
    emoji: "⚽",
    title: {
      ko: "튕겨내는 탱탱볼, 강철 멘탈 (Strong)",
      en: "Bouncing Ball, Steel Mental (Strong)",
      ja: "跳ね返すボール、鋼のメンタル（強靭）",
      "zh-CN": "弹跳球，钢铁心态（坚强）",
      "zh-TW": "彈跳球，鋼鐵心態（堅強）",
      vi: "Quả Bóng Nảy, Tinh Thần Thép (Mạnh Mẽ)",
      id: "Bola Pantul, Mental Baja (Kuat)"
    },
    shortDescription: {
      ko: "\"시련? 그게 뭐죠? 덤벼라 세상아!\"",
      en: "\"Trials? What's that? Bring it on, world!\"",
      ja: "「試練？それ何？かかってこいよ世界！」",
      "zh-CN": "「考验？那是什么？来吧，世界！」",
      "zh-TW": "「考驗？那是什麼？來吧，世界！」",
      vi: "\"Thử thách? Đó là gì? Đến đây đi, thế giới!\"",
      id: "\"Cobaan? Apa itu? Ayo, dunia!\""
    },
    description: {
      ko: "당신은 웬만한 타격에는 흠집도 나지 않는 단단한 마음을 가졌습니다. 스트레스를 받아도 \"이 정도쯤이야\" 하고 튕겨내거나, 오히려 동기부여로 삼습니다. 높은 자존감과 자기 효능감을 바탕으로 어떤 상황에서도 주도권을 잃지 않습니다.",
      en: "You have a solid heart that doesn't even get scratched by ordinary blows. Even when stressed, you bounce it off saying \"This is nothing\" or use it as motivation. Based on high self-esteem and self-efficacy, you never lose initiative in any situation.",
      ja: "あなたは普通の打撃では傷一つつかない堅固な心を持っています。ストレスを受けても「この程度だよ」と跳ね返すか、むしろ動機づけとして使います。高い自尊心と自己効力感を基に、どんな状況でも主導権を失いません。",
      "zh-CN": "你有一颗坚固的心，普通的打击甚至不会留下痕迹。即使承受压力，你也会说「这不算什么」并反弹，或者将其作为动力。基于高度的自尊和自我效能感，你在任何情况下都不会失去主动权。",
      "zh-TW": "你有一顆堅固的心，普通的打擊甚至不會留下痕跡。即使承受壓力，你也會說「這不算什麼」並反彈，或者將其作為動力。基於高度的自尊和自我效能感，你在任何情況下都不會失去主動權。",
      vi: "Bạn có một trái tim vững chắc không hề bị xước dù bị đánh bình thường. Ngay cả khi căng thẳng, bạn cũng bật lại nó bằng cách nói \"Chỉ có thế thôi\" hoặc sử dụng nó làm động lực. Dựa trên lòng tự trọng cao và hiệu quả bản thân, bạn không bao giờ mất quyền chủ động trong bất kỳ tình huống nào.",
      id: "Anda memiliki hati yang kokoh yang bahkan tidak tergores oleh pukulan biasa. Bahkan ketika stres, Anda memantulkannya dengan mengatakan \"Ini tidak ada apa-apanya\" atau menggunakannya sebagai motivasi. Berdasarkan harga diri dan efikasi diri yang tinggi, Anda tidak pernah kehilangan inisiatif dalam situasi apa pun."
    },
    resilienceScore: {
      ko: "80점",
      en: "80 points",
      ja: "80点",
      "zh-CN": "80分",
      "zh-TW": "80分",
      vi: "80 điểm",
      id: "80 poin"
    },
    characteristics: {
      ko: "무한 긍정, 강한 추진력, 멘탈 갑",
      en: "Infinite positivity, strong drive, mental armor",
      ja: "無限のポジティブ、強い推進力、メンタル鎧",
      "zh-CN": "无限积极、强大的推动力、心理盔甲",
      "zh-TW": "無限積極、強大的推動力、心理盔甲",
      vi: "Tích cực vô hạn, động lực mạnh mẽ, áo giáp tinh thần",
      id: "Positivitas tak terbatas, dorongan kuat, baju zirah mental"
    },
    prescription: {
      ko: "가끔은 주변의 약한 멘탈들도 챙겨주세요.",
      en: "Sometimes take care of the weak mentals around you too.",
      ja: "時々、周りの弱いメンタルの人々も気にかけてあげてください。",
      "zh-CN": "有时也要照顾周围心理脆弱的人。",
      "zh-TW": "有時也要照顧周圍心理脆弱的人。",
      vi: "Thỉnh thoảng hãy chăm sóc những người có tinh thần yếu xung quanh bạn.",
      id: "Kadang-kadang rawat juga mental lemah di sekitar Anda."
    }
  },
  {
    type: "Type6",
    emoji: "🏺",
    title: {
      ko: "깨진 곳을 금으로 채운, 킨츠기 (Resilient)",
      en: "Kintsugi, Filled with Gold (Resilient)",
      ja: "金継ぎ、金で埋められた（回復力のある）",
      "zh-CN": "金缮，用黄金填补（坚韧）",
      "zh-TW": "金繕，用黃金填補（堅韌）",
      vi: "Kintsugi, Được Lấp Đầy Bằng Vàng (Kiên Cường)",
      id: "Kintsugi, Diisi dengan Emas (Tangguh)"
    },
    shortDescription: {
      ko: "\"상처가 나를 더 아름답고 강하게 만들었어요\"",
      en: "\"The wounds made me more beautiful and stronger\"",
      ja: "「傷が私をより美しく、強くしてくれた」",
      "zh-CN": "「伤痛让我变得更美丽和坚强」",
      "zh-TW": "「傷痛讓我變得更美麗和堅強」",
      vi: "\"Những vết thương đã làm mình đẹp hơn và mạnh mẽ hơn\"",
      id: "\"Luka membuat saya lebih cantik dan kuat\""
    },
    description: {
      ko: "당신은 큰 시련과 고통을 극복하고, 그것을 성장의 발판으로 삼은 진정한 멘탈 고수입니다. 아픔을 피하지 않고 마주 보았기에 얻을 수 있는 깊은 지혜와 내공이 있습니다. 당신의 존재 자체가 타인에게 위로와 희망이 됩니다.",
      en: "You are a true mental master who has overcome great trials and pain, turning them into stepping stones for growth. Because you didn't avoid pain but faced it, you have deep wisdom and inner strength that can only be gained that way. Your very existence becomes comfort and hope for others.",
      ja: "あなたは大きな試練と苦痛を克服し、それを成長の足がかりとした真のメンタル達人です。痛みを避けずに向き合ったからこそ得られる深い知恵と内なる力を持っています。あなたの存在そのものが他者にとって慰めと希望になります。",
      "zh-CN": "你是一位真正的心理大师，克服了巨大的考验和痛苦，将它们转化为成长的垫脚石。因为你不回避痛苦而是面对它，你拥有只有这样才能获得的深刻智慧和内在力量。你的存在本身就是对他人的安慰和希望。",
      "zh-TW": "你是一位真正的心理大師，克服了巨大的考驗和痛苦，將它們轉化為成長的墊腳石。因為你不迴避痛苦而是面對它，你擁有只有這樣才能獲得的深刻智慧和內在力量。你的存在本身就是對他人的安慰和希望。",
      vi: "Bạn là bậc thầy tinh thần thực sự đã vượt qua những thử thách và đau khổ lớn, biến chúng thành bước đệm cho sự phát triển. Vì bạn không tránh né nỗi đau mà đối mặt với nó, bạn có trí tuệ sâu sắc và sức mạnh nội tâm chỉ có thể đạt được bằng cách đó. Sự tồn tại của bạn chính là sự an ủi và hy vọng cho người khác.",
      id: "Anda adalah master mental sejati yang telah mengatasi cobaan dan penderitaan besar, mengubahnya menjadi batu loncatan untuk pertumbuhan. Karena Anda tidak menghindari rasa sakit tetapi menghadapinya, Anda memiliki kebijaksanaan mendalam dan kekuatan batin yang hanya bisa didapat dengan cara itu. Keberadaan Anda sendiri menjadi kenyamanan dan harapan bagi orang lain."
    },
    resilienceScore: {
      ko: "99점 (만렙)",
      en: "99 points (Max Level)",
      ja: "99点（最大レベル）",
      "zh-CN": "99分（满级）",
      "zh-TW": "99分（滿級）",
      vi: "99 điểm (Cấp Tối Đa)",
      id: "99 poin (Level Maksimal)"
    },
    characteristics: {
      ko: "통찰력, 평온함, 성숙함, 감사하는 마음",
      en: "Insight, tranquility, maturity, grateful heart",
      ja: "洞察力、平穏、成熟、感謝の心",
      "zh-CN": "洞察力、平静、成熟、感恩的心",
      "zh-TW": "洞察力、平靜、成熟、感恩的心",
      vi: "Sự sáng suốt, bình yên, trưởng thành, trái tim biết ơn",
      id: "Wawasan, ketenangan, kematangan, hati yang bersyukur"
    },
    prescription: {
      ko: "당신의 경험과 지혜를 나눠주세요.",
      en: "Share your experience and wisdom.",
      ja: "あなたの経験と知恵を分かち合ってください。",
      "zh-CN": "分享你的经验和智慧。",
      "zh-TW": "分享你的經驗和智慧。",
      vi: "Hãy chia sẻ kinh nghiệm và trí tuệ của bạn.",
      id: "Bagikan pengalaman dan kebijaksanaan Anda."
    }
  }
];

export function calculatePhase2ResilienceResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  
  if (totalScore >= 0 && totalScore <= 6) {
    return "Type1";
  } else if (totalScore >= 7 && totalScore <= 12) {
    return "Type2";
  } else if (totalScore >= 13 && totalScore <= 19) {
    return "Type3";
  } else if (totalScore >= 20 && totalScore <= 27) {
    return "Type4";
  } else if (totalScore >= 28 && totalScore <= 33) {
    return "Type5";
  } else if (totalScore >= 34 && totalScore <= 36) {
    return "Type6";
  } else {
    // Fallback for any unexpected scores
    return "Type1";
  }
}
