export interface DefenseMechanismQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    type: string; // Type1, Type2, Type3, Type4, Type5, Type6
  }[];
}

export interface DefenseMechanismResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  defenseMechanism: Record<string, string>; // 방어 기제
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const defenseMechanismQuestions: DefenseMechanismQuestion[] = [
  {
    id: 1,
    question: {
      ko: "정말 원하던 회사(또는 시험)에 불합격했다. 당신의 생각은?",
      en: "You failed to get into the company (or exam) you really wanted. What do you think?",
      ja: "本当に希望していた会社（または試験）に不合格になった。あなたの考えは？",
      'zh-CN': "你没能进入（或通过）你真正想要的公司（或考试）。你怎么想？",
      'zh-TW': "你沒能進入（或通過）你真正想要的公司（或考試）。你怎麼想？",
      vi: "Bạn không đỗ vào công ty (hoặc kỳ thi) mà bạn thực sự muốn. Bạn nghĩ gì?",
      id: "Anda gagal masuk ke perusahaan (atau ujian) yang benar-benar Anda inginkan. Apa yang Anda pikirkan?"
    },
    options: [
      {
        text: {
          ko: "\"어차피 그 회사 평판 별로였어. 안 가길 잘했지.\"",
          en: "\"That company's reputation wasn't great anyway. It's good I didn't go.\"",
          ja: "「どうせあの会社の評判は良くなかった。行かなくて良かった。」",
          'zh-CN': "\"反正那家公司声誉也不怎么样。没去成是好事。\"",
          'zh-TW': "\"反正那家公司聲譽也不怎麼樣。沒去成是好事。\"",
          vi: "\"Dù sao danh tiếng công ty đó cũng không tốt. Không vào được là tốt rồi.\"",
          id: "\"Reputasi perusahaan itu memang tidak bagus. Bagus saya tidak masuk.\""
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"면접관이 사람 볼 줄 모르네. 그 사람들 탓이야.\"",
          en: "\"The interviewer doesn't know how to judge people. It's their fault.\"",
          ja: "「面接官は人を見る目がない。あの人たちのせいだ。」",
          'zh-CN': "\"面试官不会看人。是他们的错。\"",
          'zh-TW': "\"面試官不會看人。是他們的錯。\"",
          vi: "\"Người phỏng vấn không biết đánh giá người. Lỗi của họ.\"",
          id: "\"Pewawancara tidak tahu cara menilai orang. Itu kesalahan mereka.\""
        },
        type: "Type3"
      },
      {
        text: {
          ko: "\"이번 실패의 원인은 준비 부족이야. 데이터로 분석하자.\"",
          en: "\"The cause of this failure is lack of preparation. Let's analyze it with data.\"",
          ja: "「今回の失敗の原因は準備不足だ。データで分析しよう。」",
          'zh-CN': "\"这次失败的原因是准备不足。让我们用数据来分析。\"",
          'zh-TW': "\"這次失敗的原因是準備不足。讓我們用數據來分析。\"",
          vi: "\"Nguyên nhân thất bại lần này là thiếu chuẩn bị. Hãy phân tích bằng dữ liệu.\"",
          id: "\"Penyebab kegagalan ini adalah kurang persiapan. Mari analisis dengan data.\""
        },
        type: "Type5"
      },
      {
        text: {
          ko: "\"몰라, 잊어버려!\" 술 마시고 춤추며 다 털어버린다.",
          en: "\"I don't know, forget it!\" Drink and dance it all away.",
          ja: "「分からない、忘れよう！」お酒を飲んで踊って全部忘れる。",
          'zh-CN': "\"不知道，忘了吧！\"喝酒跳舞，把一切都抛在脑后。",
          'zh-TW': "\"不知道，忘了吧！\"喝酒跳舞，把一切都拋在腦後。",
          vi: "\"Không biết, quên đi!\" Uống rượu và nhảy múa để quên hết mọi thứ.",
          id: "\"Tidak tahu, lupakan!\" Minum dan menari untuk melupakan semuanya."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "친구가 나보다 잘나가서 질투가 날 때?",
      en: "When a friend is doing better than you and you feel jealous?",
      ja: "友達が自分よりうまくいっていて嫉妬するとき？",
      'zh-CN': "当朋友比你做得更好，你感到嫉妒时？",
      'zh-TW': "當朋友比你做得更好，你感到嫉妒時？",
      vi: "Khi bạn bè làm tốt hơn bạn và bạn cảm thấy ghen tị?",
      id: "Ketika teman lebih sukses dari Anda dan Anda merasa cemburu?"
    },
    options: [
      {
        text: {
          ko: "\"진심으로 축하해!\" 질투심을 숨기고 과하게 칭찬한다.",
          en: "\"I sincerely congratulate you!\" Hide jealousy and praise excessively.",
          ja: "「心からおめでとう！」嫉妬心を隠して過度に褒める。",
          'zh-CN': "\"真心祝贺你！\"隐藏嫉妒，过度赞美。",
          'zh-TW': "\"真心祝賀你！\"隱藏嫉妒，過度讚美。",
          vi: "\"Chúc mừng chân thành!\" Giấu ghen tị và khen ngợi quá mức.",
          id: "\"Saya tulus mengucapkan selamat!\" Sembunyikan kecemburuan dan puji berlebihan."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "\"운이 좋았겠지.\" 친구의 노력을 깎아내리며 나를 위로한다.",
          en: "\"They were just lucky.\" Belittle the friend's efforts and comfort yourself.",
          ja: "「運が良かっただけだ。」友達の努力をけなし、自分を慰める。",
          'zh-CN': "\"只是运气好而已。\"贬低朋友的努力，安慰自己。",
          'zh-TW': "\"只是運氣好而已。\"貶低朋友的努力，安慰自己。",
          vi: "\"Chỉ là may mắn thôi.\" Hạ thấp nỗ lực của bạn và tự an ủi mình.",
          id: "\"Mereka hanya beruntung.\" Meremehkan usaha teman dan menghibur diri sendiri."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "아예 그 친구 소식을 차단하고 안 본다.",
          en: "Block that friend's updates and don't look at them at all.",
          ja: "その友達の情報を完全にブロックして見ない。",
          'zh-CN': "完全屏蔽那个朋友的消息，不看。",
          'zh-TW': "完全屏蔽那個朋友的消息，不看。",
          vi: "Chặn hoàn toàn thông tin của người bạn đó và không xem.",
          id: "Blokir pembaruan teman itu dan tidak melihatnya sama sekali."
        },
        type: "Type4"
      },
      {
        text: {
          ko: "\"나도 더 잘할 거야!\" 승부욕을 불태우며 운동이나 일에 매진한다.",
          en: "\"I'll do better too!\" Channel competitive spirit into exercise or work.",
          ja: "「私ももっとうまくやる！」競争心を燃やして運動や仕事に没頭する。",
          'zh-CN': "\"我也会做得更好！\"将竞争欲投入到运动或工作中。",
          'zh-TW': "\"我也會做得更好！\"將競爭慾投入到運動或工作中。",
          vi: "\"Tôi cũng sẽ làm tốt hơn!\" Chuyển tinh thần cạnh tranh vào tập thể dục hoặc công việc.",
          id: "\"Saya juga akan lebih baik!\" Menyalurkan semangat kompetitif ke olahraga atau pekerjaan."
        },
        type: "Type6"
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "연인과 헤어지고 난 직후, 당신의 모습은?",
      en: "Right after breaking up with your partner, what are you like?",
      ja: "恋人と別れた直後、あなたの様子は？",
      'zh-CN': "与恋人分手后，你的样子是？",
      'zh-TW': "與戀人分手後，你的樣子是？",
      vi: "Ngay sau khi chia tay với người yêu, bạn như thế nào?",
      id: "Tepat setelah putus dengan pasangan, bagaimana Anda?"
    },
    options: [
      {
        text: {
          ko: "아무 일도 없었던 것처럼 평소와 똑같이 행동한다.",
          en: "Act exactly the same as usual, as if nothing happened.",
          ja: "何もなかったかのように普段と同じように行動する。",
          'zh-CN': "表现得和平时完全一样，好像什么都没发生。",
          'zh-TW': "表現得和平時完全一樣，好像什麼都沒發生。",
          vi: "Hành xử giống hệt như bình thường, như thể không có gì xảy ra.",
          id: "Bersikap persis seperti biasa, seolah-olah tidak ada yang terjadi."
        },
        type: "Type4"
      },
      {
        text: {
          ko: "슬픈 영화를 보거나, 미친 듯이 쇼핑을 하며 감정을 푼다.",
          en: "Watch sad movies or shop frantically to release emotions.",
          ja: "悲しい映画を見たり、狂ったようにショッピングをして感情を発散する。",
          'zh-CN': "看悲伤电影或疯狂购物来释放情绪。",
          'zh-TW': "看悲傷電影或瘋狂購物來釋放情緒。",
          vi: "Xem phim buồn hoặc mua sắm điên cuồng để giải tỏa cảm xúc.",
          id: "Menonton film sedih atau berbelanja dengan gila-gilaan untuk melepaskan emosi."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "\"우린 안 맞았어. 헤어지는 게 통계적으로 맞아.\"",
          en: "\"We weren't compatible. Breaking up is statistically correct.\"",
          ja: "「私たちは合わなかった。別れるのは統計的に正しい。」",
          'zh-CN': "\"我们不合适。分手在统计上是正确的。\"",
          'zh-TW': "\"我們不合適。分手在統計上是正確的。\"",
          vi: "\"Chúng ta không hợp nhau. Chia tay là đúng về mặt thống kê.\"",
          id: "\"Kita tidak cocok. Putus adalah benar secara statistik.\""
        },
        type: "Type5"
      },
      {
        text: {
          ko: "\"다 너 때문이야.\" 전 연인의 험담을 하고 다닌다.",
          en: "\"It's all your fault.\" Badmouth the ex-partner everywhere.",
          ja: "「全部あなたのせいだ。」元恋人の悪口を言い回る。",
          'zh-CN': "\"都是你的错。\"到处说前恋人的坏话。",
          'zh-TW': "\"都是你的錯。\"到處說前戀人的壞話。",
          vi: "\"Tất cả là lỗi của bạn.\" Nói xấu người yêu cũ khắp nơi.",
          id: "\"Semua salahmu.\" Membicarakan mantan pasangan di mana-mana."
        },
        type: "Type3"
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "싫어하는 상사가 웃으며 말을 걸었을 때?",
      en: "When a boss you dislike approaches you with a smile?",
      ja: "嫌いな上司が笑顔で話しかけてきたとき？",
      'zh-CN': "当你讨厌的上司笑着跟你说话时？",
      'zh-TW': "當你討厭的上司笑著跟你說話時？",
      vi: "Khi sếp mà bạn không thích đến nói chuyện với nụ cười?",
      id: "Ketika bos yang tidak Anda sukai mendekati dengan senyuman?"
    },
    options: [
      {
        text: {
          ko: "속마음과 다르게 세상 상냥한 미소로 대답한다.",
          en: "Respond with the sweetest smile, contrary to your true feelings.",
          ja: "本心とは違って世界一優しい笑顔で答える。",
          'zh-CN': "与内心相反，用最甜美的笑容回应。",
          'zh-TW': "與內心相反，用最甜美的笑容回應。",
          vi: "Đáp lại bằng nụ cười ngọt ngào nhất, trái ngược với cảm xúc thật.",
          id: "Menjawab dengan senyuman paling manis, bertentangan dengan perasaan sejati."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "최대한 눈을 마주치지 않고 자리를 피한다.",
          en: "Avoid eye contact as much as possible and leave the area.",
          ja: "できるだけ目を合わせずにその場を離れる。",
          'zh-CN': "尽可能避免眼神接触，离开那个地方。",
          'zh-TW': "盡可能避免眼神接觸，離開那個地方。",
          vi: "Tránh giao tiếp bằng mắt càng nhiều càng tốt và rời khỏi chỗ đó.",
          id: "Menghindari kontak mata sebanyak mungkin dan meninggalkan area tersebut."
        },
        type: "Type4"
      },
      {
        text: {
          ko: "\"저 사람은 왜 저럴까?\" 심리적으로 분석한다.",
          en: "\"Why does that person act like that?\" Analyze psychologically.",
          ja: "「あの人はなぜあんなことをするのか？」心理的に分析する。",
          'zh-CN': "\"那个人为什么那样做？\"从心理上分析。",
          'zh-TW': "\"那個人為什麼那樣做？\"從心理上分析。",
          vi: "\"Tại sao người đó lại hành xử như vậy?\" Phân tích về mặt tâm lý.",
          id: "\"Mengapa orang itu bertindak seperti itu?\" Menganalisis secara psikologis."
        },
        type: "Type5"
      },
      {
        text: {
          ko: "스트레스받아서 괜히 옆에 있는 부하직원에게 짜증을 낸다.",
          en: "Get stressed and take it out on a subordinate nearby for no reason.",
          ja: "ストレスを受けて、近くにいる部下に理由もなくイライラする。",
          'zh-CN': "感到压力，无缘无故对附近的下属发火。",
          'zh-TW': "感到壓力，無緣無故對附近的下屬發火。",
          vi: "Căng thẳng và trút giận lên cấp dưới gần đó vô cớ.",
          id: "Stres dan melampiaskan pada bawahan di dekat tanpa alasan."
        },
        type: "Type3"
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "다이어트 중인데 치킨을 먹어버렸다!",
      en: "You're on a diet but ate chicken!",
      ja: "ダイエット中なのにチキンを食べてしまった！",
      'zh-CN': "你在节食却吃了炸鸡！",
      'zh-TW': "你在節食卻吃了炸雞！",
      vi: "Bạn đang ăn kiêng nhưng lại ăn gà rán!",
      id: "Anda sedang diet tapi makan ayam!"
    },
    options: [
      {
        text: {
          ko: "\"맛있게 먹으면 0칼로리야. 오늘 스트레스받았잖아.\"",
          en: "\"If you eat it deliciously, it's 0 calories. I was stressed today.\"",
          ja: "「美味しく食べれば0カロリーだ。今日ストレスを受けたから。」",
          'zh-CN': "\"吃得开心就是0卡路里。今天压力很大。\"",
          'zh-TW': "\"吃得開心就是0卡路里。今天壓力很大。\"",
          vi: "\"Ăn ngon miệng thì là 0 calo. Hôm nay mình bị căng thẳng mà.\"",
          id: "\"Jika dimakan dengan enak, itu 0 kalori. Saya stres hari ini.\""
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"친구가 꼬셔서 어쩔 수 없었어.\"",
          en: "\"My friend tempted me, I couldn't help it.\"",
          ja: "「友達が誘ったから仕方なかった。」",
          'zh-CN': "\"朋友诱惑我，我没办法。\"",
          'zh-TW': "\"朋友誘惑我，我沒辦法。\"",
          vi: "\"Bạn bè dụ dỗ nên mình không thể từ chối.\"",
          id: "\"Teman yang mengajak, saya tidak bisa menolak.\""
        },
        type: "Type3"
      },
      {
        text: {
          ko: "내일부터 운동을 2배로 하기로 계획을 세운다.",
          en: "Make a plan to exercise twice as much starting tomorrow.",
          ja: "明日から運動を2倍にする計画を立てる。",
          'zh-CN': "制定计划，从明天开始运动量加倍。",
          'zh-TW': "制定計劃，從明天開始運動量加倍。",
          vi: "Lập kế hoạch tập thể dục gấp đôi từ ngày mai.",
          id: "Membuat rencana untuk berolahraga dua kali lipat mulai besok."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "먹은 기억을 머릿속에서 삭제한다.",
          en: "Delete the memory of eating from your mind.",
          ja: "食べた記憶を頭の中から削除する。",
          'zh-CN': "从脑海中删除吃过的记忆。",
          'zh-TW': "從腦海中刪除吃過的記憶。",
          vi: "Xóa ký ức về việc đã ăn khỏi đầu.",
          id: "Menghapus ingatan tentang makan dari pikiran."
        },
        type: "Type4"
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "큰 실수를 저질러서 혼나기 직전이다.",
      en: "You made a big mistake and are about to be scolded.",
      ja: "大きな失敗をして叱られそうだ。",
      'zh-CN': "你犯了大错，即将被责骂。",
      'zh-TW': "你犯了大錯，即將被責罵。",
      vi: "Bạn đã phạm sai lầm lớn và sắp bị mắng.",
      id: "Anda membuat kesalahan besar dan akan dimarahi."
    },
    options: [
      {
        text: {
          ko: "머릿속이 하얘지고 아무 생각도 안 난다.",
          en: "Your mind goes blank and you can't think of anything.",
          ja: "頭が真っ白になって何も考えられない。",
          'zh-CN': "大脑一片空白，什么都想不起来。",
          'zh-TW': "大腦一片空白，什麼都想不起來。",
          vi: "Đầu óc trống rỗng và không nghĩ được gì.",
          id: "Pikiran menjadi kosong dan tidak bisa memikirkan apa pun."
        },
        type: "Type4"
      },
      {
        text: {
          ko: "상황을 모면하기 위해 그럴듯한 변명을 준비한다.",
          en: "Prepare a plausible excuse to get out of the situation.",
          ja: "状況を切り抜けるためにもっともらしい言い訳を準備する。",
          'zh-CN': "准备一个看似合理的借口来摆脱困境。",
          'zh-TW': "準備一個看似合理的藉口來擺脫困境。",
          vi: "Chuẩn bị lý do hợp lý để thoát khỏi tình huống.",
          id: "Mempersiapkan alasan yang masuk akal untuk keluar dari situasi."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"죄송합니다!\" 하고 울어버리거나 과하게 자책한다.",
          en: "\"I'm sorry!\" Cry or excessively blame yourself.",
          ja: "「申し訳ありません！」と泣いてしまったり過度に自分を責める。",
          'zh-CN': "\"对不起！\"哭起来或过度自责。",
          'zh-TW': "\"對不起！\"哭起來或過度自責。",
          vi: "\"Xin lỗi!\" Khóc hoặc tự trách mình quá mức.",
          id: "\"Maaf!\" Menangis atau menyalahkan diri sendiri secara berlebihan."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "\"이건 시스템 문제야.\" 내 잘못이 아님을 증명하려 한다.",
          en: "\"This is a system problem.\" Try to prove it's not your fault.",
          ja: "「これはシステムの問題だ。」自分のせいではないことを証明しようとする。",
          'zh-CN': "\"这是系统问题。\"试图证明不是你的错。",
          'zh-TW': "\"這是系統問題。\"試圖證明不是你的錯。",
          vi: "\"Đây là vấn đề hệ thống.\" Cố gắng chứng minh không phải lỗi của mình.",
          id: "\"Ini masalah sistem.\" Mencoba membuktikan bukan kesalahan Anda."
        },
        type: "Type5"
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "짝사랑하던 상대에게 거절당했다.",
      en: "You were rejected by someone you had a crush on.",
      ja: "片思いしていた相手に振られた。",
      'zh-CN': "你被暗恋的对象拒绝了。",
      'zh-TW': "你被暗戀的對象拒絕了。",
      vi: "Bạn bị từ chối bởi người mà bạn đã thầm yêu.",
      id: "Anda ditolak oleh seseorang yang Anda sukai."
    },
    options: [
      {
        text: {
          ko: "\"사실 걔 별로였어. 내 스타일 아니야.\"",
          en: "\"Actually, they weren't that great. Not my type.\"",
          ja: "「実はあの人、そんなに良くなかった。私のタイプじゃない。」",
          'zh-CN': "\"其实他们也没那么好。不是我的类型。\"",
          'zh-TW': "\"其實他們也沒那麼好。不是我的類型。\"",
          vi: "\"Thực ra họ cũng không tốt lắm. Không phải gu của mình.\"",
          id: "\"Sebenarnya mereka tidak begitu bagus. Bukan tipe saya.\""
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"내가 부족해서 그래.\" 나를 더 멋지게 가꾸는 계기로 삼는다.",
          en: "\"I'm lacking.\" Use it as motivation to make yourself more attractive.",
          ja: "「私が足りなかったから。」自分をもっと魅力的にするきっかけにする。",
          'zh-CN': "\"是我不足。\"把它当作让自己更有魅力的契机。",
          'zh-TW': "\"是我不足。\"把它當作讓自己更有魅力的契機。",
          vi: "\"Mình thiếu sót.\" Dùng nó làm động lực để làm mình hấp dẫn hơn.",
          id: "\"Saya kurang.\" Gunakan sebagai motivasi untuk membuat diri lebih menarik."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "\"우린 친구로 남는 게 더 좋아.\" 쿨한 척 연기한다.",
          en: "\"It's better we stay friends.\" Act cool and pretend.",
          ja: "「私たちは友達のままでいる方がいい。」クールなふりをして演じる。",
          'zh-CN': "\"我们做朋友更好。\"装作很酷。",
          'zh-TW': "\"我們做朋友更好。\"裝作很酷。",
          vi: "\"Chúng ta nên làm bạn thôi.\" Giả vờ cool và diễn.",
          id: "\"Lebih baik kita tetap berteman.\" Berpura-pura keren."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "생각 안 나게 바쁘게 일하거나 공부에 몰두한다.",
          en: "Keep busy with work or study so you don't think about it.",
          ja: "考えないように忙しく働いたり勉強に没頭する。",
          'zh-CN': "忙于工作或学习，让自己不去想。",
          'zh-TW': "忙於工作或學習，讓自己不去想。",
          vi: "Giữ bận rộn với công việc hoặc học tập để không nghĩ về nó.",
          id: "Tetap sibuk dengan pekerjaan atau belajar agar tidak memikirkannya."
        },
        type: "Type4"
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "꼴 보기 싫은 사람이 생겼을 때?",
      en: "When someone you can't stand appears?",
      ja: "見たくない人が現れたとき？",
      'zh-CN': "当你讨厌的人出现时？",
      'zh-TW': "當你討厭的人出現時？",
      vi: "Khi có người mà bạn không thể chịu đựng xuất hiện?",
      id: "Ketika seseorang yang tidak Anda sukai muncul?"
    },
    options: [
      {
        text: {
          ko: "그 사람에게 유독 더 친절하고 예의 바르게 대한다.",
          en: "Be especially kind and polite to that person.",
          ja: "その人に特に親切で礼儀正しく接する。",
          'zh-CN': "对那个人特别友善和有礼貌。",
          'zh-TW': "對那個人特別友善和有禮貌。",
          vi: "Đặc biệt tử tế và lịch sự với người đó.",
          id: "Sangat ramah dan sopan kepada orang itu."
        },
        type: "Type2"
      },
      {
        text: {
          ko: "그 사람이 하는 말마다 논리적으로 반박한다.",
          en: "Logically refute everything that person says.",
          ja: "その人の言うことすべてを論理的に反論する。",
          'zh-CN': "逻辑性地反驳那个人说的每一句话。",
          'zh-TW': "邏輯性地反駁那個人說的每一句話。",
          vi: "Phản bác một cách logic mọi điều người đó nói.",
          id: "Membantah secara logis semua yang dikatakan orang itu."
        },
        type: "Type5"
      },
      {
        text: {
          ko: "그 사람이 없는 자리에서 욕을 시원하게 한다.",
          en: "Vent by cursing when that person is not around.",
          ja: "その人がいないところで罵倒してスッキリする。",
          'zh-CN': "在那个人不在的地方痛快地骂。",
          'zh-TW': "在那個人不在的地方痛快地罵。",
          vi: "Xả hết bằng cách chửi thề khi người đó không có mặt.",
          id: "Melampiaskan dengan mengutuk ketika orang itu tidak ada."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "투명 인간 취급한다.",
          en: "Treat them as if they're invisible.",
          ja: "透明人間として扱う。",
          'zh-CN': "把他们当作透明人。",
          'zh-TW': "把他們當作透明人。",
          vi: "Đối xử như thể họ vô hình.",
          id: "Memperlakukan mereka seolah-olah tidak terlihat."
        },
        type: "Type4"
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "감당하기 힘든 슬픈 일이 닥쳤을 때?",
      en: "When an unbearable sad event occurs?",
      ja: "耐えられない悲しい出来事が起こったとき？",
      'zh-CN': "当无法承受的悲伤事件发生时？",
      'zh-TW': "當無法承受的悲傷事件發生時？",
      vi: "Khi một sự kiện buồn không thể chịu đựng xảy ra?",
      id: "Ketika peristiwa sedih yang tak tertahankan terjadi?"
    },
    options: [
      {
        text: {
          ko: "눈물이 안 난다. 감정이 느껴지지 않는다.",
          en: "Tears don't come. I can't feel any emotions.",
          ja: "涙が出ない。感情が感じられない。",
          'zh-CN': "眼泪流不出来。感觉不到任何情绪。",
          'zh-TW': "眼淚流不出來。感覺不到任何情緒。",
          vi: "Nước mắt không chảy. Không cảm nhận được cảm xúc nào.",
          id: "Air mata tidak keluar. Tidak bisa merasakan emosi apa pun."
        },
        type: "Type4"
      },
      {
        text: {
          ko: "\"이건 꿈이야.\" 현실을 부정한다.",
          en: "\"This is a dream.\" Deny reality.",
          ja: "「これは夢だ。」現実を否定する。",
          'zh-CN': "\"这是梦。\"否认现实。",
          'zh-TW': "\"這是夢。\"否認現實。",
          vi: "\"Đây là giấc mơ.\" Phủ nhận thực tế.",
          id: "\"Ini mimpi.\" Menyangkal kenyataan."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "슬픔을 예술(글, 그림, 노래)로 표현한다.",
          en: "Express sadness through art (writing, drawing, singing).",
          ja: "悲しみを芸術（文章、絵、歌）で表現する。",
          'zh-CN': "通过艺术（写作、绘画、唱歌）表达悲伤。",
          'zh-TW': "通過藝術（寫作、繪畫、唱歌）表達悲傷。",
          vi: "Thể hiện nỗi buồn qua nghệ thuật (viết, vẽ, hát).",
          id: "Mengekspresikan kesedihan melalui seni (menulis, menggambar, menyanyi)."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "누군가에게 기대고 싶어 어린아이처럼 행동한다.",
          en: "Want to lean on someone and act like a child.",
          ja: "誰かに寄りかかりたくて子供のように振る舞う。",
          'zh-CN': "想要依靠某人，表现得像个孩子。",
          'zh-TW': "想要依靠某人，表現得像個孩子。",
          vi: "Muốn dựa vào ai đó và hành xử như trẻ con.",
          id: "Ingin bersandar pada seseorang dan bertingkah seperti anak kecil."
        },
        type: "Type3"
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "나의 콤플렉스(단점)에 대해 어떻게 생각하나?",
      en: "What do you think about your complexes (weaknesses)?",
      ja: "自分のコンプレックス（短所）についてどう思う？",
      'zh-CN': "你对自己的自卑感（缺点）怎么看？",
      'zh-TW': "你對自己的自卑感（缺點）怎麼看？",
      vi: "Bạn nghĩ gì về phức cảm (điểm yếu) của mình?",
      id: "Apa yang Anda pikirkan tentang kompleks (kelemahan) Anda?"
    },
    options: [
      {
        text: {
          ko: "\"누구나 단점은 있어.\" 긍정적으로 포장한다.",
          en: "\"Everyone has weaknesses.\" Package it positively.",
          ja: "「誰にでも短所はある。」ポジティブに包装する。",
          'zh-CN': "\"每个人都有缺点。\"积极地包装它。",
          'zh-TW': "\"每個人都有缺點。\"積極地包裝它。",
          vi: "\"Ai cũng có điểm yếu.\" Đóng gói một cách tích cực.",
          id: "\"Semua orang punya kelemahan.\" Membungkusnya secara positif."
        },
        type: "Type1"
      },
      {
        text: {
          ko: "\"너도 그렇잖아.\" 남의 단점을 지적하며 방어한다.",
          en: "\"You're like that too.\" Defend by pointing out others' weaknesses.",
          ja: "「あなたもそうでしょ。」他人の短所を指摘して防御する。",
          'zh-CN': "\"你也是那样。\"通过指出别人的缺点来防御。",
          'zh-TW': "\"你也是那樣。\"通過指出別人的缺點來防禦。",
          vi: "\"Bạn cũng vậy mà.\" Phòng thủ bằng cách chỉ ra điểm yếu của người khác.",
          id: "\"Kamu juga begitu.\" Membela diri dengan menunjuk kelemahan orang lain."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "콤플렉스를 극복하기 위해 피나는 노력을 한다.",
          en: "Make strenuous efforts to overcome the complex.",
          ja: "コンプレックスを克服するために必死に努力する。",
          'zh-CN': "努力克服自卑感。",
          'zh-TW': "努力克服自卑感。",
          vi: "Nỗ lực hết sức để vượt qua phức cảm.",
          id: "Berusaha keras untuk mengatasi kompleks."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "아예 생각조차 안 하려고 한다.",
          en: "Try not to think about it at all.",
          ja: "全く考えようとしない。",
          'zh-CN': "根本不去想它。",
          'zh-TW': "根本不去想它。",
          vi: "Cố gắng không nghĩ về nó chút nào.",
          id: "Berusaha untuk tidak memikirkannya sama sekali."
        },
        type: "Type4"
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "누군가 나에게 화를 낼 때 반응은?",
      en: "How do you react when someone gets angry at you?",
      ja: "誰かが自分に怒ったときの反応は？",
      'zh-CN': "当有人对你生气时，你的反应是？",
      'zh-TW': "當有人對你生氣時，你的反應是？",
      vi: "Bạn phản ứng thế nào khi ai đó giận bạn?",
      id: "Bagaimana reaksi Anda ketika seseorang marah pada Anda?"
    },
    options: [
      {
        text: {
          ko: "\"왜 화를 내? 논리적으로 말해봐.\"",
          en: "\"Why are you angry? Speak logically.\"",
          ja: "「なぜ怒るの？論理的に話して。」",
          'zh-CN': "\"为什么生气？逻辑地说说看。\"",
          'zh-TW': "\"為什麼生氣？邏輯地說說看。\"",
          vi: "\"Tại sao bạn giận? Nói một cách logic đi.\"",
          id: "\"Kenapa marah? Bicara secara logis.\""
        },
        type: "Type5"
      },
      {
        text: {
          ko: "\"너야말로 저번에 그랬잖아!\" 맞받아친다.",
          en: "\"You did that last time!\" Fight back.",
          ja: "「あなたこそ前回そうしたじゃない！」やり返す。",
          'zh-CN': "\"你上次也那样做了！\"反击。",
          'zh-TW': "\"你上次也那樣做了！\"反擊。",
          vi: "\"Bạn mới là người làm vậy lần trước!\" Phản công.",
          id: "\"Kamu yang melakukannya waktu itu!\" Membalas."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "아무 말도 안 하고 입을 닫아버린다.",
          en: "Don't say anything and shut your mouth.",
          ja: "何も言わずに口を閉じてしまう。",
          'zh-CN': "什么都不说，闭上嘴。",
          'zh-TW': "什麼都不說，閉上嘴。",
          vi: "Không nói gì và im lặng.",
          id: "Tidak mengatakan apa-apa dan menutup mulut."
        },
        type: "Type4"
      },
      {
        text: {
          ko: "웃으면서 \"미안~\" 하고 상황을 무마한다.",
          en: "Smile and say \"Sorry~\" to defuse the situation.",
          ja: "笑いながら「ごめん〜」と言って状況を収める。",
          'zh-CN': "笑着说\"对不起~\"来平息情况。",
          'zh-TW': "笑著說\"對不起~\"來平息情況。",
          vi: "Cười và nói \"Xin lỗi~\" để xoa dịu tình huống.",
          id: "Tersenyum dan bilang \"Maaf~\" untuk meredakan situasi."
        },
        type: "Type2"
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "스트레스 해소법으로 가장 선호하는 것은?",
      en: "What do you prefer most as a stress relief method?",
      ja: "ストレス解消法として最も好むのは？",
      'zh-CN': "你最喜欢的解压方法是什么？",
      'zh-TW': "你最喜歡的解壓方法是什麼？",
      vi: "Bạn thích phương pháp giải tỏa căng thẳng nào nhất?",
      id: "Apa yang paling Anda sukai sebagai metode pereda stres?"
    },
    options: [
      {
        text: {
          ko: "논리적인 글을 쓰거나 계획표 정리하기.",
          en: "Write logical articles or organize schedules.",
          ja: "論理的な文章を書いたり計画表を整理する。",
          'zh-CN': "写逻辑性文章或整理计划表。",
          'zh-TW': "寫邏輯性文章或整理計劃表。",
          vi: "Viết bài logic hoặc sắp xếp lịch trình.",
          id: "Menulis artikel logis atau mengatur jadwal."
        },
        type: "Type5"
      },
      {
        text: {
          ko: "친구들과 수다 떨며 남 탓하기.",
          en: "Chat with friends and blame others.",
          ja: "友達とおしゃべりして他人を責める。",
          'zh-CN': "和朋友聊天，责怪别人。",
          'zh-TW': "和朋友聊天，責怪別人。",
          vi: "Trò chuyện với bạn bè và đổ lỗi cho người khác.",
          id: "Mengobrol dengan teman dan menyalahkan orang lain."
        },
        type: "Type3"
      },
      {
        text: {
          ko: "운동, 노래방, 게임 등 몸을 쓰며 풀기.",
          en: "Release through physical activities like exercise, karaoke, games.",
          ja: "運動、カラオケ、ゲームなど体を使いながら解消する。",
          'zh-CN': "通过运动、KTV、游戏等身体活动来释放。",
          'zh-TW': "通過運動、KTV、遊戲等身體活動來釋放。",
          vi: "Giải tỏa qua các hoạt động thể chất như tập thể dục, karaoke, game.",
          id: "Melepaskan melalui aktivitas fisik seperti olahraga, karaoke, game."
        },
        type: "Type6"
      },
      {
        text: {
          ko: "푹 자거나 아무 생각 없이 영상 보기.",
          en: "Sleep deeply or watch videos without thinking.",
          ja: "ぐっすり寝るか何も考えずに動画を見る。",
          'zh-CN': "好好睡一觉或什么都不想地看视频。",
          'zh-TW': "好好睡一覺或什麼都不想地看視頻。",
          vi: "Ngủ sâu hoặc xem video mà không suy nghĩ gì.",
          id: "Tidur nyenyak atau menonton video tanpa berpikir."
        },
        type: "Type4"
      }
    ]
  }
];

export const defenseMechanismResults: DefenseMechanismResult[] = [
  {
    type: "Type1",
    emoji: "🍇",
    title: {
      ko: "정신 승리자, 여우와 신포도 (합리화/Rationalization)",
      en: "Mental Winner, Fox and Sour Grapes (Rationalization)",
      ja: "精神勝利者、キツネと酸っぱいブドウ（合理化）",
      'zh-CN': "精神胜利者，狐狸与酸葡萄（合理化）",
      'zh-TW': "精神勝利者，狐狸與酸葡萄（合理化）",
      vi: "Người chiến thắng tinh thần, Cáo và Nho chua (Hợp lý hóa)",
      id: "Pemenang Mental, Rubah dan Anggur Asam (Rasionalisasi)"
    },
    shortDescription: {
      ko: "\"다 이유가 있어서 그런 거야. 오히려 잘 됐어.\"",
      en: "\"There's a reason for everything. It actually turned out well.\"",
      ja: "「すべて理由があるからだ。むしろ良かった。」",
      'zh-CN': "\"一切都有原因。实际上结果很好。\"",
      'zh-TW': "\"一切都有原因。實際上結果很好。\"",
      vi: "\"Mọi thứ đều có lý do. Thực ra đã tốt rồi.\"",
      id: "\"Semua ada alasannya. Sebenarnya sudah baik.\""
    },
    description: {
      ko: "당신은 어떤 상황에서도 자존감을 지키는 능력이 탁월합니다. 실패하거나 거절당해도 그럴듯한 이유를 찾아내어 \"이건 내 잘못이 아니야\", \"저건 별로였어\"라고 생각합니다. 마음의 상처를 덜 받는 긍정적인 면도 있지만, 자칫 자기반성 없는 핑계가 될 수 있으니 주의하세요.",
      en: "You have an excellent ability to maintain self-esteem in any situation. Even when you fail or get rejected, you find plausible reasons and think \"This wasn't my fault\" or \"That wasn't that great anyway.\" While this positive aspect helps you avoid emotional wounds, be careful as it can become an excuse without self-reflection.",
      ja: "あなたはどんな状況でも自尊心を守る能力が卓越しています。失敗したり拒否されても、もっともらしい理由を見つけて「これは私のせいじゃない」「あれは大したことなかった」と考えます。心の傷を少なく受けるポジティブな面もありますが、自己反省のない言い訳になる可能性があるので注意してください。",
      'zh-CN': "你在任何情况下都能出色地保持自尊。即使失败或被拒绝，你也会找到看似合理的理由，认为\"这不是我的错\"或\"那也没什么大不了的\"。虽然这种积极的一面能减少心理创伤，但要注意它可能成为没有自我反省的借口。",
      'zh-TW': "你在任何情況下都能出色地保持自尊。即使失敗或被拒絕，你也會找到看似合理的理由，認為\"這不是我的錯\"或\"那也沒什麼大不了的\"。雖然這種積極的一面能減少心理創傷，但要注意它可能成為沒有自我反省的藉口。",
      vi: "Bạn có khả năng xuất sắc trong việc duy trì lòng tự trọng trong mọi tình huống. Ngay cả khi thất bại hoặc bị từ chối, bạn vẫn tìm ra lý do hợp lý và nghĩ \"Đây không phải lỗi của mình\" hoặc \"Cái đó cũng không tốt lắm\". Mặc dù khía cạnh tích cực này giúp bạn tránh tổn thương cảm xúc, nhưng hãy cẩn thận vì nó có thể trở thành cái cớ không tự phản ánh.",
      id: "Anda memiliki kemampuan luar biasa untuk mempertahankan harga diri dalam situasi apa pun. Bahkan ketika gagal atau ditolak, Anda menemukan alasan yang masuk akal dan berpikir \"Ini bukan kesalahan saya\" atau \"Itu juga tidak begitu bagus\". Meskipun aspek positif ini membantu Anda menghindari luka emosional, berhati-hatilah karena bisa menjadi alasan tanpa refleksi diri."
    },
    defenseMechanism: {
      ko: "합리화 (Rationalization)",
      en: "Rationalization",
      ja: "合理化",
      'zh-CN': "合理化",
      'zh-TW': "合理化",
      vi: "Hợp lý hóa",
      id: "Rasionalisasi"
    },
    characteristics: {
      ko: "핑계 대기, 의미 부여, 멘탈 회복 빠름",
      en: "Making excuses, assigning meaning, quick mental recovery",
      ja: "言い訳、意味づけ、メンタル回復が早い",
      'zh-CN': "找借口，赋予意义，心理恢复快",
      'zh-TW': "找藉口，賦予意義，心理恢復快",
      vi: "Bào chữa, gán ý nghĩa, phục hồi tinh thần nhanh",
      id: "Mencari alasan, memberikan makna, pemulihan mental cepat"
    },
    goodMatch: {
      ko: "Type 4 (들어주는 척 분석함)",
      en: "Type 4 (Pretends to listen and analyze)",
      ja: "Type 4（聞くふりをして分析する）",
      'zh-CN': "Type 4（假装倾听并分析）",
      'zh-TW': "Type 4（假裝傾聽並分析）",
      vi: "Type 4 (Giả vờ lắng nghe và phân tích)",
      id: "Type 4 (Berpura-pura mendengarkan dan menganalisis)"
    },
    badMatch: {
      ko: "Type 3 (내 탓이라고 지적함)",
      en: "Type 3 (Points out it's my fault)",
      ja: "Type 3（私のせいだと指摘する）",
      'zh-CN': "Type 3（指出是我的错）",
      'zh-TW': "Type 3（指出是我的錯）",
      vi: "Type 3 (Chỉ ra đó là lỗi của tôi)",
      id: "Type 3 (Menunjuk bahwa itu kesalahan saya)"
    }
  },
  {
    type: "Type2",
    emoji: "🤡",
    title: {
      ko: "가면 쓴 스마일, 피에로 (반동형성/Reaction Formation)",
      en: "Masked Smile, Pierrot (Reaction Formation)",
      ja: "仮面をかぶった笑顔、ピエロ（反動形成）",
      'zh-CN': "戴面具的微笑，小丑（反向形成）",
      'zh-TW': "戴面具的微笑，小丑（反向形成）",
      vi: "Nụ cười đeo mặt nạ, Chú hề (Phản ứng hình thành)",
      id: "Senyum Bertopeng, Badut (Reaksi Formasi)"
    },
    shortDescription: {
      ko: "\"난 괜찮아! (사실 안 괜찮음)\"",
      en: "\"I'm fine! (Actually not fine)\"",
      ja: "「大丈夫！(実は大丈夫じゃない)」",
      'zh-CN': "\"我很好！（实际上不好）\"",
      'zh-TW': "\"我很好！（實際上不好）\"",
      vi: "\"Tôi ổn! (Thực ra không ổn)\"",
      id: "\"Saya baik-baik saja! (Sebenarnya tidak baik-baik saja)\""
    },
    description: {
      ko: "당신은 속마음과 정반대로 행동하는 경우가 많습니다. 미운 놈에게 떡 하나 더 주고, 슬플 때 더 크게 웃습니다. 부정적인 감정을 들키는 것을 두려워하여 과도하게 친절하거나 쿨한 척합니다. 속으로 곪을 수 있으니 가끔은 솔직해질 필요가 있습니다.",
      en: "You often act opposite to your true feelings. You give extra to people you dislike, and laugh louder when you're sad. You're afraid of revealing negative emotions, so you act overly kind or pretend to be cool. Since this can fester inside, you sometimes need to be honest.",
      ja: "あなたは本心と正反対に行動することが多いです。嫌いな人に余計に与え、悲しいときにより大きく笑います。否定的な感情を悟られることを恐れて、過度に親切にしたりクールなふりをします。内面で膿む可能性があるので、時々正直になる必要があります。",
      'zh-CN': "你经常做出与内心相反的行为。对讨厌的人反而更慷慨，悲伤时笑得更大声。你害怕暴露负面情绪，所以表现得过度友善或假装很酷。因为这可能在内心积压，所以有时需要诚实。",
      'zh-TW': "你經常做出與內心相反的行為。對討厭的人反而更慷慨，悲傷時笑得更響亮。你害怕暴露負面情緒，所以表現得過度友善或假裝很酷。因為這可能在內心積壓，所以有時需要誠實。",
      vi: "Bạn thường hành động trái ngược với cảm xúc thật. Bạn cho thêm người bạn không thích, và cười to hơn khi buồn. Bạn sợ lộ cảm xúc tiêu cực nên hành động quá tử tế hoặc giả vờ cool. Vì điều này có thể tích tụ bên trong, đôi khi bạn cần thành thật.",
      id: "Anda sering bertindak berlawanan dengan perasaan sejati. Anda memberi lebih kepada orang yang tidak Anda sukai, dan tertawa lebih keras saat sedih. Anda takut mengungkapkan emosi negatif, jadi bertindak terlalu baik atau berpura-pura keren. Karena ini bisa membusuk di dalam, Anda kadang perlu jujur."
    },
    defenseMechanism: {
      ko: "반동형성 (Reaction Formation)",
      en: "Reaction Formation",
      ja: "反動形成",
      'zh-CN': "反向形成",
      'zh-TW': "反向形成",
      vi: "Phản ứng hình thành",
      id: "Reaksi Formasi"
    },
    characteristics: {
      ko: "겉과 속이 다름, 과한 친절, 착한 아이 콤플렉스",
      en: "Outward appearance differs from inner self, excessive kindness, good child complex",
      ja: "表と裏が違う、過度な親切、良い子コンプレックス",
      'zh-CN': "表里不一，过度友善，好孩子情结",
      'zh-TW': "表裡不一，過度友善，好孩子情結",
      vi: "Bề ngoài khác bên trong, tử tế quá mức, phức cảm đứa trẻ ngoan",
      id: "Penampilan luar berbeda dari diri dalam, kebaikan berlebihan, kompleks anak baik"
    },
    goodMatch: {
      ko: "Type 6 (솔직하게 질러줌)",
      en: "Type 6 (Honestly vents)",
      ja: "Type 6（正直に吐き出す）",
      'zh-CN': "Type 6（诚实地发泄）",
      'zh-TW': "Type 6（誠實地發洩）",
      vi: "Type 6 (Thẳng thắn xả hết)",
      id: "Type 6 (Jujur melampiaskan)"
    },
    badMatch: {
      ko: "Type 5 (내 속마음을 분석하려 함)",
      en: "Type 5 (Tries to analyze my inner feelings)",
      ja: "Type 5（私の本心を分析しようとする）",
      'zh-CN': "Type 5（试图分析我的内心感受）",
      'zh-TW': "Type 5（試圖分析我的內心感受）",
      vi: "Type 5 (Cố gắng phân tích cảm xúc bên trong của tôi)",
      id: "Type 5 (Mencoba menganalisis perasaan batin saya)"
    }
  },
  {
    type: "Type3",
    emoji: "👉",
    title: {
      ko: "남 탓하는 심판, 거울 보기 (투사/Projection)",
      en: "Blaming Judge, Mirror Gazing (Projection)",
      ja: "他人を責める審判、鏡を見る（投影）",
      'zh-CN': "责怪他人的法官，照镜子（投射）",
      'zh-TW': "責怪他人的法官，照鏡子（投射）",
      vi: "Thẩm phán đổ lỗi, Nhìn gương (Phóng chiếu)",
      id: "Hakim Menyalahkan, Melihat Cermin (Proyeksi)"
    },
    shortDescription: {
      ko: "\"이건 다 너 때문이야! 네가 문제야.\"",
      en: "\"This is all your fault! You're the problem.\"",
      ja: "「これは全部あなたのせいだ！あなたが問題だ。」",
      'zh-CN': "\"这都是你的错！你是问题所在。\"",
      'zh-TW': "\"這都是你的錯！你是問題所在。\"",
      vi: "\"Tất cả là lỗi của bạn! Bạn là vấn đề.\"",
      id: "\"Ini semua salahmu! Kamu masalahnya.\""
    },
    description: {
      ko: "당신은 자신이 인정하기 싫은 감정이나 실수를 남에게 뒤집어씌우는 경향이 있습니다. 내가 화가 난 건데 \"너 왜 화내?\"라고 묻거나, 내가 실수해놓고 환경 탓을 합니다. 죄책감에서 벗어나기 위한 방어막이지만, 주변 사람들을 힘들게 할 수 있습니다.",
      en: "You tend to project emotions or mistakes you don't want to acknowledge onto others. You're angry but ask \"Why are you angry?\" or you make a mistake but blame the environment. While this is a defense mechanism to escape guilt, it can make people around you suffer.",
      ja: "あなたは認めたくない感情や失敗を他人に押し付ける傾向があります。自分が怒っているのに「なぜ怒るの？」と聞いたり、自分が失敗したのに環境のせいにします。罪悪感から逃れるための防御壁ですが、周りの人々を苦しめる可能性があります。",
      'zh-CN': "你倾向于将自己不愿承认的情绪或错误投射到别人身上。你生气了却问\"你为什么生气？\"，或者你犯了错误却责怪环境。虽然这是逃避罪恶感的防御机制，但可能会让周围的人受苦。",
      'zh-TW': "你傾向於將自己不願承認的情緒或錯誤投射到別人身上。你生氣了卻問\"你為什麼生氣？\"，或者你犯了錯誤卻責怪環境。雖然這是逃避罪惡感的防禦機制，但可能會讓周圍的人受苦。",
      vi: "Bạn có xu hướng phóng chiếu cảm xúc hoặc sai lầm mà bạn không muốn thừa nhận lên người khác. Bạn giận nhưng hỏi \"Tại sao bạn giận?\" hoặc bạn mắc lỗi nhưng đổ lỗi cho môi trường. Mặc dù đây là cơ chế phòng vệ để thoát khỏi cảm giác tội lỗi, nhưng nó có thể khiến người xung quanh khổ sở.",
      id: "Anda cenderung memproyeksikan emosi atau kesalahan yang tidak ingin Anda akui kepada orang lain. Anda marah tetapi bertanya \"Kenapa marah?\" atau Anda membuat kesalahan tetapi menyalahkan lingkungan. Meskipun ini adalah mekanisme pertahanan untuk melarikan diri dari rasa bersalah, ini bisa membuat orang di sekitar Anda menderita."
    },
    defenseMechanism: {
      ko: "투사 (Projection)",
      en: "Projection",
      ja: "投影",
      'zh-CN': "投射",
      'zh-TW': "投射",
      vi: "Phóng chiếu",
      id: "Proyeksi"
    },
    characteristics: {
      ko: "책임 전가, 피해 의식, 지적질",
      en: "Shifting responsibility, victim mentality, nitpicking",
      ja: "責任転嫁、被害者意識、指摘",
      'zh-CN': "推卸责任，受害者心态，挑剔",
      'zh-TW': "推卸責任，受害者心態，挑剔",
      vi: "Chuyển trách nhiệm, tâm lý nạn nhân, chỉ trích",
      id: "Mengalihkan tanggung jawab, mentalitas korban, mengkritik"
    },
    goodMatch: {
      ko: "Type 2 (그냥 다 받아줌)",
      en: "Type 2 (Just accepts everything)",
      ja: "Type 2（全部受け入れる）",
      'zh-CN': "Type 2（全部接受）",
      'zh-TW': "Type 2（全部接受）",
      vi: "Type 2 (Chỉ chấp nhận mọi thứ)",
      id: "Type 2 (Hanya menerima segalanya)"
    },
    badMatch: {
      ko: "Type 3 (서로 남 탓하며 싸움)",
      en: "Type 3 (Blame each other and fight)",
      ja: "Type 3（お互いに責め合って喧嘩する）",
      'zh-CN': "Type 3（互相责怪并争吵）",
      'zh-TW': "Type 3（互相責怪並爭吵）",
      vi: "Type 3 (Đổ lỗi cho nhau và cãi nhau)",
      id: "Type 3 (Saling menyalahkan dan bertengkar)"
    }
  },
  {
    type: "Type4",
    emoji: "🙈",
    title: {
      ko: "고개 파묻은 타조, 기억 삭제 (억압/회피/Repression)",
      en: "Ostrich Burying Head, Memory Deletion (Repression/Avoidance)",
      ja: "頭を埋めるダチョウ、記憶削除（抑圧/回避）",
      'zh-CN': "埋头的鸵鸟，记忆删除（压抑/回避）",
      'zh-TW': "埋頭的鴕鳥，記憶刪除（壓抑/迴避）",
      vi: "Đà điểu vùi đầu, Xóa ký ức (Ức chế/Tránh né)",
      id: "Burung Untuk Mengubur Kepala, Penghapusan Memori (Represi/Penghindaran)"
    },
    shortDescription: {
      ko: "\"모르는 일이야. 기억 안 나.\"",
      en: "\"I don't know about that. I don't remember.\"",
      ja: "「知らないことだ。覚えていない。」",
      'zh-CN': "\"我不知道那件事。我不记得。\"",
      'zh-TW': "\"我不知道那件事。我不記得。\"",
      vi: "\"Mình không biết chuyện đó. Mình không nhớ.\"",
      id: "\"Saya tidak tahu tentang itu. Saya tidak ingat.\""
    },
    description: {
      ko: "당신은 감당하기 힘든 일이 생기면 아예 생각 자체를 차단해 버립니다. 싫은 기억은 무의식 저편으로 밀어 넣어버리고, 갈등 상황을 회피합니다. 평화로워 보이지만 해결되지 않은 감정이 쌓여 나중에 한꺼번에 폭발하거나 몸이 아플 수 있습니다.",
      en: "When something unbearable happens, you completely block the thought itself. You push unpleasant memories deep into the unconscious and avoid conflict situations. While you may appear peaceful, unresolved emotions can accumulate and later explode all at once or cause physical illness.",
      ja: "耐えられないことが起こると、思考そのものを完全に遮断してしまいます。嫌な記憶は無意識の奥に押し込め、対立状況を回避します。平和に見えますが、解決されていない感情が蓄積され、後で一度に爆発したり体調を崩す可能性があります。",
      'zh-CN': "当无法承受的事情发生时，你会完全阻断思考本身。你将不愉快的记忆推入潜意识深处，回避冲突情况。虽然你看起来平静，但未解决的情绪可能会积累，后来一次性爆发或导致身体疾病。",
      'zh-TW': "當無法承受的事情發生時，你會完全阻斷思考本身。你將不愉快的記憶推入潛意識深處，迴避衝突情況。雖然你看起來平靜，但未解決的情緒可能會積累，後來一次性爆發或導致身體疾病。",
      vi: "Khi điều gì đó không thể chịu đựng xảy ra, bạn hoàn toàn chặn suy nghĩ. Bạn đẩy ký ức khó chịu vào sâu trong vô thức và tránh các tình huống xung đột. Mặc dù bạn có vẻ bình yên, nhưng cảm xúc chưa được giải quyết có thể tích tụ và sau đó bùng nổ cùng lúc hoặc gây bệnh thể chất.",
      id: "Ketika sesuatu yang tak tertahankan terjadi, Anda benar-benar memblokir pemikiran itu sendiri. Anda mendorong kenangan tidak menyenangkan jauh ke dalam ketidaksadaran dan menghindari situasi konflik. Meskipun Anda mungkin tampak damai, emosi yang tidak terselesaikan dapat menumpuk dan kemudian meledak sekaligus atau menyebabkan penyakit fisik."
    },
    defenseMechanism: {
      ko: "억압/회피 (Repression/Avoidance)",
      en: "Repression/Avoidance",
      ja: "抑圧/回避",
      'zh-CN': "压抑/回避",
      'zh-TW': "壓抑/迴避",
      vi: "Ức chế/Tránh né",
      id: "Represi/Penghindaran"
    },
    characteristics: {
      ko: "잠수 타기, 기억상실, 무관심",
      en: "Going silent, amnesia, indifference",
      ja: "潜水、記憶喪失、無関心",
      'zh-CN': "潜水，失忆，冷漠",
      'zh-TW': "潛水，失憶，冷漠",
      vi: "Im lặng, mất trí nhớ, thờ ơ",
      id: "Berdiam diri, amnesia, ketidakpedulian"
    },
    goodMatch: {
      ko: "Type 1 (좋게 좋게 생각함)",
      en: "Type 1 (Thinks positively)",
      ja: "Type 1（ポジティブに考える）",
      'zh-CN': "Type 1（积极思考）",
      'zh-TW': "Type 1（積極思考）",
      vi: "Type 1 (Suy nghĩ tích cực)",
      id: "Type 1 (Berpikir positif)"
    },
    badMatch: {
      ko: "Type 6 (해결하자고 달려듬)",
      en: "Type 6 (Rushes in to solve it)",
      ja: "Type 6（解決しようと突進する）",
      'zh-CN': "Type 6（冲进来解决）",
      'zh-TW': "Type 6（衝進來解決）",
      vi: "Type 6 (Xông vào để giải quyết)",
      id: "Type 6 (Berlari masuk untuk menyelesaikannya)"
    }
  },
  {
    type: "Type5",
    emoji: "🤖",
    title: {
      ko: "차가운 분석가, 로봇 (지성화/Intellectualization)",
      en: "Cold Analyst, Robot (Intellectualization)",
      ja: "冷たい分析者、ロボット（知性化）",
      'zh-CN': "冷静的分析师，机器人（理智化）",
      'zh-TW': "冷靜的分析師，機器人（理智化）",
      vi: "Nhà phân tích lạnh lùng, Robot (Trí thức hóa)",
      id: "Analis Dingin, Robot (Intelektualisasi)"
    },
    shortDescription: {
      ko: "\"감정은 배제하고 팩트만 봅시다.\"",
      en: "\"Let's exclude emotions and look only at facts.\"",
      ja: "「感情は排除して、ファクトだけを見ましょう。」",
      'zh-CN': "\"让我们排除情感，只看事实。\"",
      'zh-TW': "\"讓我們排除情感，只看事實。\"",
      vi: "\"Hãy loại bỏ cảm xúc và chỉ nhìn vào sự thật.\"",
      id: "\"Mari singkirkan emosi dan lihat hanya fakta.\""
    },
    description: {
      ko: "당신은 힘든 상황일수록 감정을 느끼기보다 머리를 씁니다. 슬픔이나 분노를 느끼는 대신, 왜 이런 일이 일어났는지 논리적으로 분석하고 이론화합니다. 상처받지 않기 위해 감정의 스위치를 꺼버리는 타입입니다. 똑똑해 보이지만 인간미가 부족해 보일 수 있습니다.",
      en: "The more difficult the situation, the more you use your head rather than feel emotions. Instead of feeling sadness or anger, you logically analyze and theorize why this happened. You're the type who turns off the emotional switch to avoid getting hurt. You may appear smart but lack human warmth.",
      ja: "困難な状況ほど、感情を感じるよりも頭を使います。悲しみや怒りを感じる代わりに、なぜこんなことが起こったのか論理的に分析し理論化します。傷つかないように感情のスイッチを切ってしまうタイプです。賢く見えますが、人間味が欠けているように見えるかもしれません。",
      'zh-CN': "情况越困难，你越是用头脑而不是感受情绪。你不感受悲伤或愤怒，而是逻辑地分析和理论化为什么会发生这样的事。你是那种为了不受伤而关闭情绪开关的类型。你可能看起来很聪明，但可能缺乏人情味。",
      'zh-TW': "情況越困難，你越是用頭腦而不是感受情緒。你不感受悲傷或憤怒，而是邏輯地分析和理論化為什麼會發生這樣的事。你是那種為了不受傷而關閉情緒開關的類型。你可能看起來很聰明，但可能缺乏人情味。",
      vi: "Tình huống càng khó khăn, bạn càng dùng đầu óc thay vì cảm nhận cảm xúc. Thay vì cảm thấy buồn hoặc giận, bạn phân tích logic và lý thuyết hóa tại sao điều này xảy ra. Bạn là kiểu người tắt công tắc cảm xúc để tránh bị tổn thương. Bạn có thể trông thông minh nhưng thiếu sự ấm áp của con người.",
      id: "Semakin sulit situasinya, semakin Anda menggunakan kepala daripada merasakan emosi. Alih-alih merasakan kesedihan atau kemarahan, Anda secara logis menganalisis dan membuat teori mengapa ini terjadi. Anda adalah tipe yang mematikan sakelar emosional untuk menghindari terluka. Anda mungkin tampak pintar tetapi kurang kehangatan manusia."
    },
    defenseMechanism: {
      ko: "지성화 (Intellectualization)",
      en: "Intellectualization",
      ja: "知性化",
      'zh-CN': "理智化",
      'zh-TW': "理智化",
      vi: "Trí thức hóa",
      id: "Intelektualisasi"
    },
    characteristics: {
      ko: "설명충, 감정 분리, 논리 정연",
      en: "Over-explaining, emotional detachment, logical organization",
      ja: "説明魔、感情分離、論理的整理",
      'zh-CN': "过度解释，情感分离，逻辑清晰",
      'zh-TW': "過度解釋，情感分離，邏輯清晰",
      vi: "Giải thích quá mức, tách rời cảm xúc, tổ chức logic",
      id: "Terlalu menjelaskan, detasemen emosional, organisasi logis"
    },
    goodMatch: {
      ko: "Type 1 (말이 잘 통함)",
      en: "Type 1 (Communicates well)",
      ja: "Type 1（よく通じる）",
      'zh-CN': "Type 1（沟通良好）",
      'zh-TW': "Type 1（溝通良好）",
      vi: "Type 1 (Giao tiếp tốt)",
      id: "Type 1 (Berkomunikasi dengan baik)"
    },
    badMatch: {
      ko: "Type 6 (감정적으로 들이댐)",
      en: "Type 6 (Emotionally confronts)",
      ja: "Type 6（感情的に向かってくる）",
      'zh-CN': "Type 6（情感上对抗）",
      'zh-TW': "Type 6（情感上對抗）",
      vi: "Type 6 (Đối đầu về mặt cảm xúc)",
      id: "Type 6 (Menghadapi secara emosional)"
    }
  },
  {
    type: "Type6",
    emoji: "🎨",
    title: {
      ko: "에너지 발산가, 예술가 혹은 파이터 (승화/행동화/Sublimation)",
      en: "Energy Releaser, Artist or Fighter (Sublimation/Acting Out)",
      ja: "エネルギー放出者、芸術家またはファイター（昇華/行動化）",
      'zh-CN': "能量释放者，艺术家或斗士（升华/行动化）",
      'zh-TW': "能量釋放者，藝術家或鬥士（昇華/行動化）",
      vi: "Người giải phóng năng lượng, Nghệ sĩ hoặc Chiến binh (Thăng hoa/Hành động hóa)",
      id: "Pelepas Energi, Seniman atau Petarung (Sublimasi/Bertindak)"
    },
    shortDescription: {
      ko: "\"말로 안 해, 행동으로 보여주지!\"",
      en: "\"Don't say it, show it through actions!\"",
      ja: "「言葉じゃなく、行動で示す！」",
      'zh-CN': "\"不要说，用行动来证明！\"",
      'zh-TW': "\"不要說，用行動來證明！\"",
      vi: "\"Đừng nói, hãy thể hiện bằng hành động!\"",
      id: "\"Jangan katakan, tunjukkan melalui tindakan!\""
    },
    description: {
      ko: "당신은 내면의 욕구와 스트레스를 밖으로 표출합니다. 긍정적으로는 운동, 예술, 일 등으로 에너지를 바꿔 '승화'시키지만, 부정적으로는 충동적인 행동이나 화풀이로 나타날 수 있습니다. 억누르기보다는 에너지를 쏟아부어야 직성이 풀리는 행동파입니다.",
      en: "You express inner desires and stress outwardly. Positively, you transform energy through exercise, art, work, etc., achieving 'sublimation,' but negatively, it can manifest as impulsive behavior or venting anger. You're an action-oriented person who needs to pour out energy rather than suppress it.",
      ja: "あなたは内面の欲求やストレスを外に表出します。ポジティブには、運動、芸術、仕事などでエネルギーを変えて「昇華」させますが、ネガティブには衝動的な行動や怒りの発散として現れる可能性があります。抑圧するよりもエネルギーを注ぎ込まなければ気が済まない行動派です。",
      'zh-CN': "你将内心的欲望和压力向外表达。积极地，你通过运动、艺术、工作等转化能量，实现'升华'，但消极地，它可能表现为冲动行为或发泄愤怒。你是一个行动派，需要释放能量而不是压抑它。",
      'zh-TW': "你將內心的慾望和壓力向外表達。積極地，你通過運動、藝術、工作等轉化能量，實現'昇華'，但消極地，它可能表現為衝動行為或發洩憤怒。你是一個行動派，需要釋放能量而不是壓抑它。",
      vi: "Bạn thể hiện mong muốn và căng thẳng bên trong ra ngoài. Tích cực, bạn chuyển đổi năng lượng qua tập thể dục, nghệ thuật, công việc, v.v., đạt được 'thăng hoa', nhưng tiêu cực, nó có thể biểu hiện như hành vi bốc đồng hoặc xả giận. Bạn là người hành động cần đổ năng lượng ra thay vì kìm nén.",
      id: "Anda mengekspresikan keinginan dan stres batin ke luar. Secara positif, Anda mengubah energi melalui olahraga, seni, pekerjaan, dll., mencapai 'sublimasi', tetapi secara negatif, itu dapat muncul sebagai perilaku impulsif atau melampiaskan kemarahan. Anda adalah orang yang berorientasi pada tindakan yang perlu menuangkan energi daripada menekannya."
    },
    defenseMechanism: {
      ko: "승화/행동화 (Sublimation/Acting Out)",
      en: "Sublimation/Acting Out",
      ja: "昇華/行動化",
      'zh-CN': "升华/行动化",
      'zh-TW': "昇華/行動化",
      vi: "Thăng hoa/Hành động hóa",
      id: "Sublimasi/Bertindak"
    },
    characteristics: {
      ko: "열정, 워커홀릭, 다혈질",
      en: "Passion, workaholic, hot-tempered",
      ja: "情熱、ワーカホリック、短気",
      'zh-CN': "热情，工作狂，急性子",
      'zh-TW': "熱情，工作狂，急性子",
      vi: "Đam mê, nghiện công việc, nóng tính",
      id: "Gairah, workaholic, mudah marah"
    },
    goodMatch: {
      ko: "Type 2 (리액션 좋음)",
      en: "Type 2 (Good reactions)",
      ja: "Type 2（反応が良い）",
      'zh-CN': "Type 2（反应良好）",
      'zh-TW': "Type 2（反應良好）",
      vi: "Type 2 (Phản ứng tốt)",
      id: "Type 2 (Reaksi bagus)"
    },
    badMatch: {
      ko: "Type 4 (반응 없어서 답답함)",
      en: "Type 4 (No reaction, frustrating)",
      ja: "Type 4（反応がなくてイライラする）",
      'zh-CN': "Type 4（没有反应，令人沮丧）",
      'zh-TW': "Type 4（沒有反應，令人沮喪）",
      vi: "Type 4 (Không phản ứng, khó chịu)",
      id: "Type 4 (Tidak ada reaksi, frustasi)"
    }
  }
];

// 각 Type별 점수를 계산하고 가장 높은 점수의 Type을 반환
// 동점일 경우 우선순위: Type1 > Type4 > Type2 > Type5 > Type6 > Type3
export function calculateDefenseMechanismResult(answers: string[]): string {
  // Type별 점수 계산
  const typeScores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변에 대해 해당 Type에 점수 추가
  answers.forEach(type => {
    if (typeScores.hasOwnProperty(type)) {
      typeScores[type]++;
    }
  });

  // 가장 높은 점수 찾기
  const maxScore = Math.max(...Object.values(typeScores));

  // 동점인 Type들 찾기
  const tiedTypes = Object.keys(typeScores).filter(type => typeScores[type] === maxScore);

  // 동점이 하나면 바로 반환
  if (tiedTypes.length === 1) {
    return tiedTypes[0];
  }

  // 동점일 경우 우선순위 적용
  const priority = ['Type1', 'Type4', 'Type2', 'Type5', 'Type6', 'Type3'];
  for (const type of priority) {
    if (tiedTypes.includes(type)) {
      return type;
    }
  }

  // Fallback (should not happen)
  return 'Type1';
}

