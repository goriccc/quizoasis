export interface SuperpowerQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    typePoints: number[]; // 각 Type에 대한 점수 [Type1, Type2, Type3, Type4, Type5, Type6]
  }[];
}

export interface SuperpowerResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  mainAbility: Record<string, string>; // 주요 능력
  personalityKeywords: Record<string, string>; // 성격 키워드
  usage: Record<string, string>; // 활용법
}

export const superpowerQuestions: SuperpowerQuestion[] = [
  {
    id: 1,
    question: {
      ko: "월요일 아침, 알람 소리에 깼을 때 드는 생각은?",
      en: "Monday morning, what do you think when the alarm goes off?",
      ja: "月曜日の朝、目覚ましの音で目が覚めたとき、何を考えますか？",
      'zh-CN': "周一早上，闹钟响起时你在想什么？",
      'zh-TW': "週一早上，鬧鐘響起時你在想什麼？",
      vi: "Sáng thứ Hai, khi chuông báo thức kêu, bạn nghĩ gì?",
      id: "Senin pagi, apa yang Anda pikirkan saat alarm berbunyi?"
    },
    options: [
      {
        text: {
          ko: "\"아, 딱 10분만 전으로 시간을 되돌리고 싶다.\"",
          en: "\"Oh, I wish I could go back just 10 minutes.\"",
          ja: "「ああ、10分だけ時間を戻したい。」",
          'zh-CN': "\"啊，真想回到10分钟前。\"",
          'zh-TW': "「啊，真想回到10分鐘前。」",
          vi: "\"Ồ, ước gì mình có thể quay lại 10 phút trước.\"",
          id: "\"Oh, saya ingin kembali 10 menit yang lalu.\""
        },
        typePoints: [1, 0, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "\"눈 깜빡하면 회사/학교 도착해 있었으면 좋겠다.\"",
          en: "\"I wish I could blink and be at work/school.\"",
          ja: "「瞬きしたら会社/学校に到着していたらいいのに。」",
          'zh-CN': "\"眨眼间就到公司/学校就好了。\"",
          'zh-TW': "「眨眼間就到公司/學校就好了。」",
          vi: "\"Ước gì chớp mắt là đã đến công ty/trường học.\"",
          id: "\"Saya berharap bisa berkedip dan langsung sampai di kantor/sekolah.\""
        },
        typePoints: [0, 0, 0, 1, 0, 0] // Type 4
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "소개팅이나 낯선 사람을 만났을 때 가장 궁금한 것은?",
      en: "When meeting someone on a blind date or a stranger, what are you most curious about?",
      ja: "お見合いや見知らぬ人に会ったとき、最も気になることは？",
      'zh-CN': "相亲或遇到陌生人时，你最想知道什么？",
      'zh-TW': "相親或遇到陌生人時，你最想知道什麼？",
      vi: "Khi gặp người hẹn hò hoặc người lạ, điều bạn tò mò nhất là gì?",
      id: "Saat bertemu dengan seseorang dalam kencan buta atau orang asing, apa yang paling membuat Anda penasaran?"
    },
    options: [
      {
        text: {
          ko: "\"저 사람은 속으로 무슨 생각을 하고 있을까?\"",
          en: "\"What is that person thinking inside?\"",
          ja: "「あの人は心の中で何を考えているのだろう？」",
          'zh-CN': "\"那个人心里在想什么？\"",
          'zh-TW': "「那個人心裡在想什麼？」",
          vi: "\"Người đó đang nghĩ gì trong lòng nhỉ?\"",
          id: "\"Apa yang dipikirkan orang itu di dalam hatinya?\""
        },
        typePoints: [0, 1, 0, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "\"이 사람과 나의 미래는 어떻게 될까?\"",
          en: "\"What will the future be like with this person?\"",
          ja: "「この人と私の未来はどうなるのだろう？」",
          'zh-CN': "\"我和这个人的未来会怎样？\"",
          'zh-TW': "「我和這個人的未來會怎樣？」",
          vi: "\"Tương lai của mình và người này sẽ như thế nào?\"",
          id: "\"Bagaimana masa depan saya dengan orang ini?\""
        },
        typePoints: [0, 0, 0, 0, 0, 1] // Type 6
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "이불 킥하고 싶은 흑역사가 떠올랐을 때!",
      en: "When a cringeworthy memory comes to mind!",
      ja: "布団を蹴りたくなるような黒歴史が思い浮かんだとき！",
      'zh-CN': "想起想踢被子的黑历史时！",
      'zh-TW': "想起想踢被子的黑歷史時！",
      vi: "Khi nhớ lại một kỷ niệm đáng xấu hổ muốn đá chăn!",
      id: "Ketika ingatan memalukan yang membuat Anda ingin menendang selimut muncul!"
    },
    options: [
      {
        text: {
          ko: "과거로 돌아가서 그 순간을 없던 일로 만든다",
          en: "Go back to the past and make that moment never happen",
          ja: "過去に戻ってその瞬間をなかったことにする",
          'zh-CN': "回到过去，让那一刻从未发生",
          'zh-TW': "回到過去，讓那一刻從未發生",
          vi: "Quay về quá khứ và làm cho khoảnh khắc đó không bao giờ xảy ra",
          id: "Kembali ke masa lalu dan membuat momen itu tidak pernah terjadi"
        },
        typePoints: [1, 0, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "투명인간이 되어 쥐구멍으로 숨어버린다",
          en: "Become invisible and hide in a mouse hole",
          ja: "透明人間になってネズミの穴に隠れる",
          'zh-CN': "变成透明人，躲进老鼠洞",
          'zh-TW': "變成透明人，躲進老鼠洞",
          vi: "Trở thành người tàng hình và trốn vào hang chuột",
          id: "Menjadi tidak terlihat dan bersembunyi di lubang tikus"
        },
        typePoints: [0, 0, 0, 0, 1, 0] // Type 5
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "침대에 누웠는데 불 끄는 걸 깜빡했다. 당신의 선택은?",
      en: "You're lying in bed but forgot to turn off the light. Your choice?",
      ja: "ベッドに横になったが、電気を消すのを忘れた。あなたの選択は？",
      'zh-CN': "躺在床上却忘了关灯。你的选择是？",
      'zh-TW': "躺在床上卻忘了關燈。你的選擇是？",
      vi: "Bạn đã nằm trên giường nhưng quên tắt đèn. Bạn sẽ chọn gì?",
      id: "Anda berbaring di tempat tidur tetapi lupa mematikan lampu. Pilihan Anda?"
    },
    options: [
      {
        text: {
          ko: "손 까딱 안 하고 눈빛으로 스위치를 내린다",
          en: "Turn off the switch with just a glance, without moving a finger",
          ja: "手を動かさずに視線だけでスイッチを切る",
          'zh-CN': "不动手，只用眼神关掉开关",
          'zh-TW': "不動手，只用眼神關掉開關",
          vi: "Tắt công tắc chỉ bằng ánh mắt, không cần cử động tay",
          id: "Matikan saklar hanya dengan tatapan, tanpa menggerakkan tangan"
        },
        typePoints: [0, 0, 1, 0, 0, 0] // Type 3
      },
      {
        text: {
          ko: "귀찮지만 빛의 속도로 끄고 다시 눕는다",
          en: "Annoying, but turn it off at the speed of light and lie down again",
          ja: "面倒だけど光の速度で消してまた横になる",
          'zh-CN': "麻烦，但以光速关掉再躺下",
          'zh-TW': "麻煩，但以光速關掉再躺下",
          vi: "Phiền nhưng tắt đèn với tốc độ ánh sáng rồi nằm lại",
          id: "Mengganggu, tapi matikan dengan kecepatan cahaya dan berbaring lagi"
        },
        typePoints: [0, 0, 0, 1, 0, 0] // Type 4
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "친구와 말싸움을 하다가 말문이 막혔을 때?",
      en: "When you're arguing with a friend and run out of words?",
      ja: "友達と口論していて言葉に詰まったとき？",
      'zh-CN': "和朋友争吵时词穷了？",
      'zh-TW': "和朋友爭吵時詞窮了？",
      vi: "Khi cãi nhau với bạn và hết lời?",
      id: "Saat berdebat dengan teman dan kehabisan kata-kata?"
    },
    options: [
      {
        text: {
          ko: "시간을 멈추고 생각할 시간을 번다",
          en: "Stop time and buy time to think",
          ja: "時間を止めて考える時間を作る",
          'zh-CN': "停止时间，争取思考时间",
          'zh-TW': "停止時間，爭取思考時間",
          vi: "Dừng thời gian để có thời gian suy nghĩ",
          id: "Hentikan waktu dan beli waktu untuk berpikir"
        },
        typePoints: [1, 0, 0, 0, 0, 0] // Type 1
      },
      {
        text: {
          ko: "상대방의 약점이나 생각을 읽어내서 반박한다",
          en: "Read the opponent's weaknesses or thoughts and counter",
          ja: "相手の弱点や考えを読み取って反論する",
          'zh-CN': "读取对方的弱点或想法并反驳",
          'zh-TW': "讀取對方的弱點或想法並反駁",
          vi: "Đọc được điểm yếu hoặc suy nghĩ của đối phương để phản bác",
          id: "Baca kelemahan atau pikiran lawan dan bantah"
        },
        typePoints: [0, 1, 0, 0, 0, 0] // Type 2
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "만약 은행을 털어야 한다면? (상상)",
      en: "If you had to rob a bank? (imagination)",
      ja: "もし銀行を襲う必要があるなら？（想像）",
      'zh-CN': "如果必须抢银行？（想象）",
      'zh-TW': "如果必須搶銀行？（想像）",
      vi: "Nếu phải cướp ngân hàng? (tưởng tượng)",
      id: "Jika harus merampok bank? (imajinasi)"
    },
    options: [
      {
        text: {
          ko: "아무도 모르게 벽을 통과해서 돈만 가지고 나온다",
          en: "Pass through the wall without anyone knowing and take only the money",
          ja: "誰にも気づかれずに壁を通り抜けてお金だけを持って出る",
          'zh-CN': "神不知鬼不觉地穿墙而过，只拿钱",
          'zh-TW': "神不知鬼不覺地穿牆而過，只拿錢",
          vi: "Xuyên qua tường mà không ai biết, chỉ lấy tiền",
          id: "Melewati dinding tanpa diketahui siapa pun dan hanya mengambil uang"
        },
        typePoints: [0, 0, 0, 0, 1, 0] // Type 5
      },
      {
        text: {
          ko: "미리 미래를 보고 로또 번호를 외워서 당첨된다",
          en: "See the future in advance, memorize lottery numbers, and win",
          ja: "事前に未来を見て宝くじの番号を覚えて当選する",
          'zh-CN': "提前看到未来，记住彩票号码并中奖",
          'zh-TW': "提前看到未來，記住彩票號碼並中獎",
          vi: "Nhìn thấy tương lai trước, nhớ số xổ số và trúng",
          id: "Lihat masa depan sebelumnya, hafal nomor lotre, dan menang"
        },
        typePoints: [0, 0, 0, 0, 0, 1] // Type 6
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "꽉 막힌 도로 위, 가장 간절한 능력은?",
      en: "On a completely jammed road, what ability do you most desperately want?",
      ja: "完全に渋滞している道路で、最も切実に欲しい能力は？",
      'zh-CN': "在完全堵车的路上，你最渴望的能力是？",
      'zh-TW': "在完全堵車的路上，你最渴望的能力是？",
      vi: "Trên con đường tắc nghẽn hoàn toàn, khả năng bạn khao khát nhất là gì?",
      id: "Di jalan yang benar-benar macet, kemampuan apa yang paling Anda inginkan?"
    },
    options: [
      {
        text: {
          ko: "내 차 앞의 모든 차들을 옆으로 치워버린다",
          en: "Push all the cars in front of me to the side",
          ja: "自分の車の前のすべての車を横に押しのける",
          'zh-CN': "把前面所有的车都推到一边",
          'zh-TW': "把前面所有的車都推到一邊",
          vi: "Đẩy tất cả xe phía trước sang một bên",
          id: "Dorong semua mobil di depan saya ke samping"
        },
        typePoints: [0, 0, 1, 0, 0, 0] // Type 3
      },
      {
        text: {
          ko: "목적지로 순간이동해서 바로 도착한다",
          en: "Teleport to the destination and arrive immediately",
          ja: "目的地に瞬間移動してすぐに到着する",
          'zh-CN': "瞬间移动到目的地，立即到达",
          'zh-TW': "瞬間移動到目的地，立即到達",
          vi: "Dịch chuyển tức thời đến đích và đến ngay",
          id: "Teleportasi ke tujuan dan tiba segera"
        },
        typePoints: [0, 0, 0, 1, 0, 0] // Type 4
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "서프라이즈 파티, 당신은 어떤 역할?",
      en: "Surprise party, what role would you play?",
      ja: "サプライズパーティー、あなたはどんな役割？",
      'zh-CN': "惊喜派对，你扮演什么角色？",
      'zh-TW': "驚喜派對，你扮演什麼角色？",
      vi: "Bữa tiệc bất ngờ, bạn sẽ đóng vai trò gì?",
      id: "Pesta kejutan, peran apa yang akan Anda mainkan?"
    },
    options: [
      {
        text: {
          ko: "몰래 숨어 있다가 갑자기 나타나서 놀래킨다",
          en: "Hide secretly and suddenly appear to surprise",
          ja: "こっそり隠れていて突然現れて驚かせる",
          'zh-CN': "偷偷躲起来，然后突然出现吓人",
          'zh-TW': "偷偷躲起來，然後突然出現嚇人",
          vi: "Trốn kín rồi đột ngột xuất hiện để gây bất ngờ",
          id: "Bersembunyi diam-diam dan tiba-tiba muncul untuk mengejutkan"
        },
        typePoints: [0, 0, 0, 0, 1, 0] // Type 5
      },
      {
        text: {
          ko: "친구가 언제 들어올지 미리 알고 타이밍을 맞춘다",
          en: "Know in advance when the friend will come in and time it perfectly",
          ja: "友達がいつ入ってくるか事前に知ってタイミングを合わせる",
          'zh-CN': "提前知道朋友什么时候进来，完美把握时机",
          'zh-TW': "提前知道朋友什麼時候進來，完美把握時機",
          vi: "Biết trước khi nào bạn sẽ đến và căn thời gian hoàn hảo",
          id: "Tahu sebelumnya kapan teman akan masuk dan sesuaikan waktu dengan sempurna"
        },
        typePoints: [0, 0, 0, 0, 0, 1] // Type 6
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "무거운 짐을 들고 계단을 올라갈 때?",
      en: "When carrying heavy luggage up the stairs?",
      ja: "重い荷物を持って階段を上るとき？",
      'zh-CN': "提着沉重的行李上楼梯时？",
      'zh-TW': "提著沉重的行李上樓梯時？",
      vi: "Khi xách hành lý nặng lên cầu thang?",
      id: "Saat membawa barang berat naik tangga?"
    },
    options: [
      {
        text: {
          ko: "짐이 둥둥 떠서 나를 따라왔으면 좋겠다",
          en: "I wish the luggage would float and follow me",
          ja: "荷物がふわふわ浮いて私について来てくれたらいいのに",
          'zh-CN': "希望行李飘浮着跟着我",
          'zh-TW': "希望行李飄浮著跟著我",
          vi: "Ước gì hành lý bay lơ lửng và đi theo mình",
          id: "Saya berharap barang bagasi mengambang dan mengikuti saya"
        },
        typePoints: [0, 0, 1, 0, 0, 0] // Type 3
      },
      {
        text: {
          ko: "단숨에 꼭대기 층으로 이동했으면 좋겠다",
          en: "I wish I could move to the top floor in one go",
          ja: "一気に最上階に移動できたらいいのに",
          'zh-CN': "希望一下子移动到顶层",
          'zh-TW': "希望一下子移動到頂層",
          vi: "Ước gì có thể di chuyển lên tầng trên cùng trong một lần",
          id: "Saya berharap bisa pindah ke lantai atas sekaligus"
        },
        typePoints: [0, 0, 0, 1, 0, 0] // Type 4
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "연인에게 서운한 점이 생겼을 때?",
      en: "When you feel hurt by your partner?",
      ja: "恋人に不満な点が生じたとき？",
      'zh-CN': "对恋人有不满时？",
      'zh-TW': "對戀人有不滿時？",
      vi: "Khi cảm thấy tủi thân với người yêu?",
      id: "Saat merasa tersinggung oleh pasangan?"
    },
    options: [
      {
        text: {
          ko: "말하지 않아도 내 마음을 알아줬으면 좋겠",
          en: "I wish they would understand my feelings without me saying anything",
          ja: "言わなくても私の気持ちを理解してくれたらいいのに",
          'zh-CN': "希望不用我说也能理解我的心情",
          'zh-TW': "希望不用我說也能理解我的心情",
          vi: "Ước gì họ hiểu lòng mình mà không cần nói",
          id: "Saya berharap mereka memahami perasaan saya tanpa saya katakan"
        },
        typePoints: [0, 1, 0, 0, 0, 0] // Type 2
      },
      {
        text: {
          ko: "우리가 왜 싸우게 될지 미리 알고 피하고 싶다.",
          en: "I want to know in advance why we'll fight and avoid it",
          ja: "なぜ私たちが喧嘩することになるか事前に知って避けたい",
          'zh-CN': "想提前知道我们为什么会吵架并避免",
          'zh-TW': "想提前知道我們為什麼會吵架並避免",
          vi: "Muốn biết trước tại sao chúng ta sẽ cãi nhau và tránh điều đó",
          id: "Saya ingin tahu sebelumnya mengapa kita akan bertengkar dan menghindarinya"
        },
        typePoints: [0, 0, 0, 0, 0, 1] // Type 6
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "사람들이 나를 어떻게 평가했으면 좋겠나?",
      en: "How would you like people to evaluate you?",
      ja: "人々に自分をどう評価してほしいですか？",
      'zh-CN': "你希望人们如何评价你？",
      'zh-TW': "你希望人們如何評價你？",
      vi: "Bạn muốn mọi người đánh giá mình như thế nào?",
      id: "Bagaimana Anda ingin orang mengevaluasi Anda?"
    },
    options: [
      {
        text: {
          ko: "\"능력자야. 뭐든 척척 잘해\"",
          en: "\"They're capable. They do everything well.\"",
          ja: "「できる人だ。何でも上手にこなす」",
          'zh-CN': "\"有能力的人。什么都做得很好\"",
          'zh-TW': "「有能力的人。什麼都做得很好」",
          vi: "\"Người có năng lực. Làm gì cũng giỏi\"",
          id: "\"Mereka mampu. Melakukan segalanya dengan baik.\""
        },
        typePoints: [1, 0, 1, 0, 0, 0] // Type 1, Type 3
      },
      {
        text: {
          ko: "\"신비로워. 속을 알 수 없어\"",
          en: "\"Mysterious. Can't figure them out.\"",
          ja: "「神秘的だ。正体がわからない」",
          'zh-CN': "\"神秘。看不透\"",
          'zh-TW': "「神秘。看不透」",
          vi: "\"Bí ẩn. Không thể hiểu được\"",
          id: "\"Misterius. Tidak bisa dipahami.\""
        },
        typePoints: [0, 1, 0, 0, 1, 0] // Type 2, Type 5
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "초능력을 딱 하나만 가질 수 있다면, 사용 목적은?",
      en: "If you could have just one superpower, what would you use it for?",
      ja: "超能力を一つだけ持てるとしたら、使用目的は？",
      'zh-CN': "如果只能拥有一种超能力，使用目的是？",
      'zh-TW': "如果只能擁有一種超能力，使用目的是？",
      vi: "Nếu chỉ có thể có một siêu năng lực, mục đích sử dụng là gì?",
      id: "Jika Anda hanya bisa memiliki satu kekuatan super, untuk apa Anda akan menggunakannya?"
    },
    options: [
      {
        text: {
          ko: "나의 실수나 후회를 바로잡기 위해",
          en: "To fix my mistakes and regrets",
          ja: "自分の失敗や後悔を正すため",
          'zh-CN': "为了纠正我的错误和遗憾",
          'zh-TW': "為了糾正我的錯誤和遺憾",
          vi: "Để sửa chữa những sai lầm và hối tiếc của mình",
          id: "Untuk memperbaiki kesalahan dan penyesalan saya"
        },
        typePoints: [1, 0, 0, 0, 0, 1] // Type 1, Type 6
      },
      {
        text: {
          ko: "나의 몸과 마음이 편하고 자유롭기 위해",
          en: "So my body and mind can be comfortable and free",
          ja: "自分の体と心が楽で自由であるため",
          'zh-CN': "为了让我的身心舒适自由",
          'zh-TW': "為了讓我的身心舒適自由",
          vi: "Để cơ thể và tâm trí mình được thoải mái và tự do",
          id: "Agar tubuh dan pikiran saya nyaman dan bebas"
        },
        typePoints: [0, 0, 1, 1, 0, 0] // Type 3, Type 4
      }
    ]
  }
];

export const superpowerResults: SuperpowerResult[] = [
  {
    type: "Type1",
    emoji: "⏳",
    title: {
      ko: "후회 없는 완벽주의자, 시간 조절자 (Time Controller)",
      en: "Perfectionist Without Regrets, Time Controller",
      ja: "後悔のない完璧主義者、時間コントローラー",
      'zh-CN': "无后悔的完美主义者，时间控制者",
      'zh-TW': "無後悔的完美主義者，時間控制者",
      vi: "Người cầu toàn không hối tiếc, Người điều khiển thời gian",
      id: "Perfeksionis Tanpa Penyesalan, Pengontrol Waktu"
    },
    shortDescription: {
      ko: "\"실수는 없다, 인생 2회차의 여유\"",
      en: "\"No mistakes, the ease of life's second round\"",
      ja: "「失敗はない、人生2周目の余裕」",
      'zh-CN': "\"没有错误，人生第二轮的从容\"",
      'zh-TW': "「沒有錯誤，人生第二輪的從容」",
      vi: "\"Không có sai lầm, sự thoải mái của vòng đời thứ hai\"",
      id: "\"Tidak ada kesalahan, kemudahan putaran kedua kehidupan\""
    },
    description: {
      ko: "당신은 과거의 실수나 후회를 용납하지 않는 완벽주의 성향이 있습니다. \"그때 그러지 말걸\"이라는 생각을 자주 하며, 상황을 통제하고 싶어 하는 욕구가 강합니다. 시간을 되돌리거나 멈추는 능력이 당신에게 평화를 줍니다.",
      en: "You have a perfectionist tendency that cannot tolerate past mistakes or regrets. You often think \"I shouldn't have done that then\" and have a strong desire to control situations. The ability to turn back or stop time gives you peace.",
      ja: "あなたは過去の失敗や後悔を許容しない完璧主義の傾向があります。「あの時そうしなければよかった」という考えをよくし、状況をコントロールしたいという欲求が強いです。時間を戻したり止めたりする能力があなたに平和をもたらします。",
      'zh-CN': "你有不容忍过去错误或遗憾的完美主义倾向。你经常想\"那时不该那样做\"，并且有强烈的控制局面的欲望。能够倒转或停止时间的能力给你带来平静。",
      'zh-TW': "你有不容忍過去錯誤或遺憾的完美主義傾向。你經常想「那時不該那樣做」，並且有強烈的控制局面的慾望。能夠倒轉或停止時間的能力給你帶來平靜。",
      vi: "Bạn có xu hướng cầu toàn không thể chấp nhận những sai lầm hoặc hối tiếc trong quá khứ. Bạn thường nghĩ \"Lúc đó mình không nên làm vậy\" và có mong muốn mạnh mẽ kiểm soát tình huống. Khả năng quay lại hoặc dừng thời gian mang lại cho bạn sự bình yên.",
      id: "Anda memiliki kecenderungan perfeksionis yang tidak dapat mentolerir kesalahan atau penyesalan masa lalu. Anda sering berpikir \"Seharusnya saya tidak melakukan itu\" dan memiliki keinginan kuat untuk mengendalikan situasi. Kemampuan untuk memutar kembali atau menghentikan waktu memberi Anda kedamaian."
    },
    mainAbility: {
      ko: "타임 리프, 시간 정지",
      en: "Time Leap, Time Stop",
      ja: "タイムリープ、時間停止",
      'zh-CN': "时间回溯，时间停止",
      'zh-TW': "時間回溯，時間停止",
      vi: "Nhảy thời gian, Dừng thời gian",
      id: "Lompat Waktu, Hentikan Waktu"
    },
    personalityKeywords: {
      ko: "완벽주의, 후회, 통제, 계획",
      en: "Perfectionism, Regret, Control, Planning",
      ja: "完璧主義、後悔、コントロール、計画",
      'zh-CN': "完美主义，后悔，控制，计划",
      'zh-TW': "完美主義，後悔，控制，計劃",
      vi: "Chủ nghĩa hoàn hảo, Hối tiếc, Kiểm soát, Lập kế hoạch",
      id: "Perfeksionisme, Penyesalan, Kontrol, Perencanaan"
    },
    usage: {
      ko: "흑역사 지우기, 지각 면하기, 시험 시간 늘리기",
      en: "Erasing dark history, avoiding being late, extending exam time",
      ja: "黒歴史を消す、遅刻を免れる、試験時間を延ばす",
      'zh-CN': "抹去黑历史，避免迟到，延长考试时间",
      'zh-TW': "抹去黑歷史，避免遲到，延長考試時間",
      vi: "Xóa lịch sử đen tối, tránh đi muộn, kéo dài thời gian thi",
      id: "Menghapus sejarah gelap, menghindari terlambat, memperpanjang waktu ujian"
    }
  },
  {
    type: "Type2",
    emoji: "🧠",
    title: {
      ko: "인간 엑스레이, 독심술사 (Mind Reader)",
      en: "Human X-Ray, Mind Reader",
      ja: "人間エックス線、読心術師",
      'zh-CN': "人类X光，读心术师",
      'zh-TW': "人類X光，讀心術師",
      vi: "X-quang con người, Người đọc tâm trí",
      id: "Sinar-X Manusia, Pembaca Pikiran"
    },
    shortDescription: {
      ko: "\"네가 무슨 생각 하는지 다 보여\"",
      en: "\"I can see everything you're thinking\"",
      ja: "「あなたが何を考えているか全部見える」",
      'zh-CN': "\"你所有的想法我都看得见\"",
      'zh-TW': "「你所有的想法我都看得見」",
      vi: "\"Tôi có thể thấy tất cả những gì bạn đang nghĩ\"",
      id: "\"Saya bisa melihat semua yang Anda pikirkan\""
    },
    description: {
      ko: "당신은 눈치가 빠르고 타인의 감정에 예민한 공감 능력자입니다. 상대방의 속마음을 알고 싶어 하는 호기심이 강하며, 인간관계에서의 갈등을 힘들어합니다. 말하지 않아도 알 수 있는 독심술이 당신의 스트레스를 줄여줄 것입니다.",
      en: "You are quick-witted and sensitive to others' emotions, with strong empathy. You have a strong curiosity to know what others are really thinking, and you struggle with conflicts in relationships. Mind reading that allows you to know without being told will reduce your stress.",
      ja: "あなたは気が利き、他人の感情に敏感な共感能力者です。相手の本心を知りたいという好奇心が強く、人間関係での葛藤に苦しみます。言わなくてもわかる読心術があなたのストレスを減らしてくれるでしょう。",
      'zh-CN': "你反应敏锐，对他人的情绪敏感，具有强烈的同理心。你强烈好奇想知道对方的真实想法，并且在人际关系中的冲突中感到困扰。不需要说就能知道的读心术会减轻你的压力。",
      'zh-TW': "你反應敏銳，對他人的情緒敏感，具有強烈的同理心。你強烈好奇想知道對方的真實想法，並且在人際關係中的衝突中感到困擾。不需要說就能知道的讀心術會減輕你的壓力。",
      vi: "Bạn nhanh nhạy và nhạy cảm với cảm xúc của người khác, có khả năng đồng cảm mạnh mẽ. Bạn có sự tò mò mạnh mẽ muốn biết người khác thực sự đang nghĩ gì, và bạn gặp khó khăn với xung đột trong các mối quan hệ. Khả năng đọc tâm trí cho phép bạn biết mà không cần được nói sẽ giảm căng thẳng của bạn.",
      id: "Anda cepat tanggap dan sensitif terhadap emosi orang lain, dengan empati yang kuat. Anda memiliki rasa ingin tahu yang kuat untuk mengetahui apa yang sebenarnya dipikirkan orang lain, dan Anda kesulitan dengan konflik dalam hubungan. Membaca pikiran yang memungkinkan Anda mengetahui tanpa diberitahu akan mengurangi stres Anda."
    },
    mainAbility: {
      ko: "텔레파시, 마인드 리딩",
      en: "Telepathy, Mind Reading",
      ja: "テレパシー、マインドリーディング",
      'zh-CN': "心灵感应，读心术",
      'zh-TW': "心靈感應，讀心術",
      vi: "Thần giao cách cảm, Đọc tâm trí",
      id: "Telepati, Membaca Pikiran"
    },
    personalityKeywords: {
      ko: "눈치, 공감, 예민, 호기심",
      en: "Perceptiveness, Empathy, Sensitivity, Curiosity",
      ja: "気配り、共感、敏感、好奇心",
      'zh-CN': "察言观色，同理心，敏感，好奇心",
      'zh-TW': "察言觀色，同理心，敏感，好奇心",
      vi: "Nhạy cảm, Đồng cảm, Nhạy cảm, Tò mò",
      id: "Kewaspadaan, Empati, Sensitivitas, Rasa Ingin Tahu"
    },
    usage: {
      ko: "썸남썸녀 속마음 알기, 거짓말 탐지",
      en: "Knowing what someone you're seeing is really thinking, lie detection",
      ja: "付き合っている人の本心を知る、嘘発見",
      'zh-CN': "了解约会对象的真实想法，测谎",
      'zh-TW': "了解約會對象的真實想法，測謊",
      vi: "Biết người đang hẹn hò thực sự nghĩ gì, phát hiện nói dối",
      id: "Mengetahui apa yang sebenarnya dipikirkan seseorang yang Anda kencani, deteksi kebohongan"
    }
  },
  {
    type: "Type3",
    emoji: "✋",
    title: {
      ko: "프로 귀차니스트, 염력 능력자 (Psychokinesis)",
      en: "Professional Lazy Person, Psychokinesis User",
      ja: "プロの面倒くさがり、念力能力者",
      'zh-CN': "专业懒人，念力能力者",
      'zh-TW': "專業懶人，念力能力者",
      vi: "Chuyên gia lười biếng, Người dùng ngoại cảm",
      id: "Pemalas Profesional, Pengguna Psikokinesis"
    },
    shortDescription: {
      ko: "\"손 하나 까딱하지 않고 해결\"",
      en: "\"Solve it without moving a finger\"",
      ja: "「手一つ動かさずに解決」",
      'zh-CN': "\"不动一根手指就解决\"",
      'zh-TW': "「不動一根手指就解決」",
      vi: "\"Giải quyết mà không cần cử động một ngón tay\"",
      id: "\"Selesaikan tanpa menggerakkan satu jari pun\""
    },
    description: {
      ko: "당신은 효율성을 최우선으로 생각하며, 육체적인 노동을 싫어하는 '스마트한 게으름뱅이'입니다. 침대에 누워서 모든 것을 해결하고 싶어 하는 욕구가 강합니다. 생각만으로 물건을 움직이는 염력이 최고의 선물입니다.",
      en: "You prioritize efficiency above all and are a 'smart lazy person' who dislikes physical labor. You have a strong desire to solve everything while lying in bed. Psychokinesis that moves objects with just your thoughts is the best gift.",
      ja: "あなたは効率を最優先に考え、肉体労働を嫌う「スマートな怠け者」です。ベッドに横になってすべてを解決したいという欲求が強いです。思考だけで物を動かす念力が最高の贈り物です。",
      'zh-CN': "你把效率放在首位，是一个讨厌体力劳动的'聪明的懒人'。你强烈渴望躺在床上解决一切。仅凭思考就能移动物体的念力是最好的礼物。",
      'zh-TW': "你把效率放在首位，是一個討厭體力勞動的「聰明的懶人」。你強烈渴望躺在床上解決一切。僅憑思考就能移動物體的念力是最好的禮物。",
      vi: "Bạn ưu tiên hiệu quả trên hết và là một 'người lười thông minh' không thích lao động thể chất. Bạn có mong muốn mạnh mẽ giải quyết mọi thứ khi nằm trên giường. Ngoại cảm có thể di chuyển đồ vật chỉ bằng suy nghĩ là món quà tuyệt vời nhất.",
      id: "Anda memprioritaskan efisiensi di atas segalanya dan adalah 'orang malas yang pintar' yang tidak suka kerja fisik. Anda memiliki keinginan kuat untuk menyelesaikan segalanya sambil berbaring di tempat tidur. Psikokinesis yang menggerakkan benda hanya dengan pikiran adalah hadiah terbaik."
    },
    mainAbility: {
      ko: "물체 조종, 염동력",
      en: "Object Control, Telekinesis",
      ja: "物体操作、念動力",
      'zh-CN': "物体操控，念动力",
      'zh-TW': "物體操控，念動力",
      vi: "Điều khiển vật thể, Ngoại cảm",
      id: "Kontrol Objek, Telekinesis"
    },
    personalityKeywords: {
      ko: "효율, 귀차니즘, 편리함, 지배",
      en: "Efficiency, Laziness, Convenience, Control",
      ja: "効率、面倒くささ、便利さ、支配",
      'zh-CN': "效率，懒惰，便利，控制",
      'zh-TW': "效率，懶惰，便利，控制",
      vi: "Hiệu quả, Lười biếng, Tiện lợi, Kiểm soát",
      id: "Efisiensi, Kemalasan, Kenyamanan, Kontrol"
    },
    usage: {
      ko: "누워서 불 끄기, 리모컨 가져오기, 무거운 짐 옮기기",
      en: "Turning off lights while lying down, bringing the remote, moving heavy luggage",
      ja: "横になって電気を消す、リモコンを持ってくる、重い荷物を運ぶ",
      'zh-CN': "躺着关灯，拿遥控器，搬重行李",
      'zh-TW': "躺著關燈，拿遙控器，搬重行李",
      vi: "Tắt đèn khi nằm, lấy điều khiển, di chuyển hành lý nặng",
      id: "Mematikan lampu sambil berbaring, mengambil remote, memindahkan barang berat"
    }
  },
  {
    type: "Type4",
    emoji: "🚀",
    title: {
      ko: "자유로운 영혼, 순간이동 능력자 (Teleporter)",
      en: "Free Spirit, Teleporter",
      ja: "自由な魂、瞬間移動能力者",
      'zh-CN': "自由灵魂，瞬间移动者",
      'zh-TW': "自由靈魂，瞬間移動者",
      vi: "Linh hồn tự do, Người dịch chuyển tức thời",
      id: "Jiwa Bebas, Teleporter"
    },
    shortDescription: {
      ko: "\"지루한 건 질색, 어디든 갈 수 있어\"",
      en: "\"Can't stand boredom, can go anywhere\"",
      ja: "「退屈は大嫌い、どこにでも行ける」",
      'zh-CN': "\"受不了无聊，可以去任何地方\"",
      'zh-TW': "「受不了無聊，可以去任何地方」",
      vi: "\"Không chịu được sự nhàm chán, có thể đi bất cứ đâu\"",
      id: "\"Tidak tahan kebosanan, bisa pergi ke mana saja\""
    },
    description: {
      ko: "당신은 답답한 것을 참지 못하고 자유를 갈망하는 성향입니다. 이동하는 시간에 스트레스를 받으며, 역마살이 있다는 소리를 듣기도 합니다. 원할 때 언제든 원하는 곳으로 갈 수 있는 순간이동이 당신을 해방시켜 줍니다.",
      en: "You have a tendency to not tolerate feeling trapped and crave freedom. You feel stressed about travel time and sometimes hear that you have restless feet. Teleportation that allows you to go anywhere you want whenever you want liberates you.",
      ja: "あなたは窮屈なことを我慢できず、自由を渇望する傾向があります。移動する時間にストレスを感じ、逆魔性があると言われることもあります。望むときいつでも望む場所に行ける瞬間移動があなたを解放してくれます。",
      'zh-CN': "你无法忍受被困的感觉，渴望自由。你对旅行时间感到压力，有时会听到说你脚痒。能够随时去任何你想去的地方的瞬间移动解放了你。",
      'zh-TW': "你無法忍受被困的感覺，渴望自由。你對旅行時間感到壓力，有時會聽到說你腳癢。能夠隨時去任何你想去的地方的瞬間移動解放了你。",
      vi: "Bạn có xu hướng không thể chịu đựng cảm giác bị mắc kẹt và khao khát tự do. Bạn cảm thấy căng thẳng về thời gian di chuyển và đôi khi nghe nói rằng bạn có đôi chân không yên. Dịch chuyển tức thời cho phép bạn đi bất cứ đâu bạn muốn bất cứ lúc nào sẽ giải phóng bạn.",
      id: "Anda memiliki kecenderungan untuk tidak mentolerir perasaan terperangkap dan mendambakan kebebasan. Anda merasa stres tentang waktu perjalanan dan kadang-kadang mendengar bahwa Anda memiliki kaki yang gelisah. Teleportasi yang memungkinkan Anda pergi ke mana pun yang Anda inginkan kapan pun Anda inginkan membebaskan Anda."
    },
    mainAbility: {
      ko: "공간 이동, 텔레포트",
      en: "Spatial Movement, Teleportation",
      ja: "空間移動、テレポート",
      'zh-CN': "空间移动，瞬间移动",
      'zh-TW': "空間移動，瞬間移動",
      vi: "Di chuyển không gian, Dịch chuyển tức thời",
      id: "Pergerakan Spasial, Teleportasi"
    },
    personalityKeywords: {
      ko: "자유, 성격 급함, 여행, 활동적",
      en: "Freedom, Impatience, Travel, Active",
      ja: "自由、性急、旅行、活動的",
      'zh-CN': "自由，急躁，旅行，活跃",
      'zh-TW': "自由，急躁，旅行，活躍",
      vi: "Tự do, Nóng tính, Du lịch, Năng động",
      id: "Kebebasan, Ketidaksabaran, Perjalanan, Aktif"
    },
    usage: {
      ko: "지옥철 탈출, 해외여행 1초 컷, 지각 안 하기",
      en: "Escaping hellish commute, cutting overseas travel to 1 second, not being late",
      ja: "地獄の通勤から脱出、海外旅行1秒カット、遅刻しない",
      'zh-CN': "逃离地狱般的通勤，海外旅行1秒搞定，不迟到",
      'zh-TW': "逃離地獄般的通勤，海外旅行1秒搞定，不遲到",
      vi: "Thoát khỏi chuyến đi làm địa ngục, cắt chuyến du lịch nước ngoài xuống 1 giây, không đi muộn",
      id: "Melarikan diri dari perjalanan yang menyiksa, memotong perjalanan luar negeri menjadi 1 detik, tidak terlambat"
    }
  },
  {
    type: "Type5",
    emoji: "👻",
    title: {
      ko: "은밀한 관찰자, 투명인간 (Invisible Man)",
      en: "Secret Observer, Invisible Man",
      ja: "秘密の観察者、透明人間",
      'zh-CN': "秘密观察者，透明人",
      'zh-TW': "秘密觀察者，透明人",
      vi: "Người quan sát bí mật, Người tàng hình",
      id: "Pengamat Rahasia, Manusia Tak Terlihat"
    },
    shortDescription: {
      ko: "\"아무도 모르게, 조용히 살고 싶어\"",
      en: "\"Want to live quietly without anyone knowing\"",
      ja: "「誰にも知られず、静かに生きたい」",
      'zh-CN': "\"想不被人知道，安静地生活\"",
      'zh-TW': "「想不被人知道，安靜地生活」",
      vi: "\"Muốn sống yên lặng mà không ai biết\"",
      id: "\"Ingin hidup dengan tenang tanpa diketahui siapa pun\""
    },
    description: {
      ko: "당신은 남들의 시선에서 벗어나 온전히 나만의 시간을 갖고 싶어 하는 내향적인 성향입니다. 가끔은 세상에서 로그아웃하고 싶거나, 남들을 몰래 관찰하고 싶은 욕구가 있습니다. 투명인간 능력은 당신에게 완벽한 프라이버시를 제공합니다.",
      en: "You have an introverted tendency to want to escape others' gazes and have time completely to yourself. Sometimes you want to log out from the world or secretly observe others. The ability to become invisible provides you with perfect privacy.",
      ja: "あなたは他人の視線から離れて、完全に自分だけの時間を持ちたい内向的な傾向があります。時々世界からログアウトしたい、または他人をこっそり観察したいという欲求があります。透明人間の能力があなたに完璧なプライバシーを提供します。",
      'zh-CN': "你有内向的倾向，想要摆脱他人的目光，拥有完全属于自己的时间。有时你想从世界登出，或者秘密观察他人。隐身能力为你提供完美的隐私。",
      'zh-TW': "你有內向的傾向，想要擺脫他人的目光，擁有完全屬於自己的時間。有時你想從世界登出，或者秘密觀察他人。隱身能力為你提供完美的隱私。",
      vi: "Bạn có xu hướng hướng nội muốn thoát khỏi ánh mắt của người khác và có thời gian hoàn toàn cho riêng mình. Đôi khi bạn muốn đăng xuất khỏi thế giới hoặc bí mật quan sát người khác. Khả năng trở nên vô hình mang lại cho bạn sự riêng tư hoàn hảo.",
      id: "Anda memiliki kecenderungan introvert yang ingin melarikan diri dari pandangan orang lain dan memiliki waktu sepenuhnya untuk diri sendiri. Terkadang Anda ingin logout dari dunia atau diam-diam mengamati orang lain. Kemampuan menjadi tidak terlihat memberi Anda privasi yang sempurna."
    },
    mainAbility: {
      ko: "투명화, 은신",
      en: "Invisibility, Stealth",
      ja: "透明化、隠密",
      'zh-CN': "透明化，隐身",
      'zh-TW': "透明化，隱身",
      vi: "Tàng hình, Ẩn mình",
      id: "Ketidakterlihatan, Siluman"
    },
    personalityKeywords: {
      ko: "내향적, 프라이버시, 관찰, 회피",
      en: "Introverted, Privacy, Observation, Avoidance",
      ja: "内向的、プライバシー、観察、回避",
      'zh-CN': "内向，隐私，观察，回避",
      'zh-TW': "內向，隱私，觀察，迴避",
      vi: "Hướng nội, Riêng tư, Quan sát, Tránh né",
      id: "Introvert, Privasi, Observasi, Penghindaran"
    },
    usage: {
      ko: "싫은 사람 피해 다니기, 공짜 영화 보기, 몰래 듣기",
      en: "Avoiding people you dislike, watching movies for free, eavesdropping",
      ja: "嫌いな人を避ける、無料で映画を見る、こっそり聞く",
      'zh-CN': "避开讨厌的人，免费看电影，偷听",
      'zh-TW': "避開討厭的人，免費看電影，偷聽",
      vi: "Tránh những người bạn không thích, xem phim miễn phí, nghe lén",
      id: "Menghindari orang yang tidak Anda sukai, menonton film gratis, menguping"
    }
  },
  {
    type: "Type6",
    emoji: "🔮",
    title: {
      ko: "꿰뚫어 보는 자, 예지력 능력자 (Oracle)",
      en: "The One Who Sees Through, Oracle",
      ja: "見抜く者、予知能力者",
      'zh-CN': "看透一切者，预知能力者",
      'zh-TW': "看透一切者，預知能力者",
      vi: "Người nhìn thấu, Nhà tiên tri",
      id: "Yang Melihat Melalui, Oracle"
    },
    shortDescription: {
      ko: "\"나는 네가 지난여름에 한 일을 알고 있다\"",
      en: "\"I know what you did last summer\"",
      ja: "「私はあなたが去年の夏にしたことを知っている」",
      'zh-CN': "\"我知道你去年夏天做了什么\"",
      'zh-TW': "「我知道你去年夏天做了什麼」",
      vi: "\"Tôi biết bạn đã làm gì mùa hè năm ngoái\"",
      id: "\"Saya tahu apa yang Anda lakukan musim panas lalu\""
    },
    description: {
      ko: "당신은 걱정이 많고 준비성이 철저한 성격입니다. 불확실한 미래에 대한 불안감이 있어 미리 알고 대비하고 싶어 합니다. 남들보다 한 수 앞을 내다보는 통찰력이 있으며, 실패를 두려워하는 당신에게 예지력은 최고의 무기입니다.",
      en: "You have a personality that worries a lot and is thoroughly prepared. You have anxiety about an uncertain future and want to know in advance and prepare. You have insight that looks one step ahead of others, and for you who fear failure, precognition is the best weapon.",
      ja: "あなたは心配性で準備が徹底した性格です。不確実な未来への不安があり、事前に知って備えたいと思っています。他人より一歩先を見通す洞察力があり、失敗を恐れるあなたにとって予知能力は最高の武器です。",
      'zh-CN': "你是一个多虑且准备充分的性格。你对不确定的未来感到焦虑，想提前知道并做好准备。你具有比他人先看一步的洞察力，对于害怕失败的你来说，预知能力是最好的武器。",
      'zh-TW': "你是一個多慮且準備充分的性格。你對不確定的未來感到焦慮，想提前知道並做好準備。你具有比他人先看一步的洞察力，對於害怕失敗的你來說，預知能力是最好的武器。",
      vi: "Bạn có tính cách lo lắng nhiều và chuẩn bị kỹ lưỡng. Bạn có lo lắng về tương lai không chắc chắn và muốn biết trước để chuẩn bị. Bạn có sự sáng suốt nhìn xa hơn người khác một bước, và đối với bạn, người sợ thất bại, khả năng tiên tri là vũ khí tốt nhất.",
      id: "Anda memiliki kepribadian yang banyak khawatir dan sangat siap. Anda memiliki kecemasan tentang masa depan yang tidak pasti dan ingin tahu sebelumnya dan bersiap. Anda memiliki wawasan yang melihat satu langkah di depan orang lain, dan bagi Anda yang takut gagal, kemampuan meramal adalah senjata terbaik."
    },
    mainAbility: {
      ko: "미래 예지, 천리안",
      en: "Future Prediction, Clairvoyance",
      ja: "未来予知、千里眼",
      'zh-CN': "未来预知，千里眼",
      'zh-TW': "未來預知，千里眼",
      vi: "Dự đoán tương lai, Thiên lý nhãn",
      id: "Prediksi Masa Depan, Mata Batin"
    },
    personalityKeywords: {
      ko: "신중함, 불안, 대비, 통찰력",
      en: "Caution, Anxiety, Preparation, Insight",
      ja: "慎重さ、不安、準備、洞察力",
      'zh-CN': "谨慎，焦虑，准备，洞察力",
      'zh-TW': "謹慎，焦慮，準備，洞察力",
      vi: "Thận trọng, Lo lắng, Chuẩn bị, Sáng suốt",
      id: "Kehati-hatian, Kecemasan, Persiapan, Wawasan"
    },
    usage: {
      ko: "로또 번호 맞추기, 주식 대박, 위험 피하기",
      en: "Guessing lottery numbers, stock market success, avoiding danger",
      ja: "宝くじの番号を当てる、株式大当たり、危険を避ける",
      'zh-CN': "猜中彩票号码，股票大赚，避开危险",
      'zh-TW': "猜中彩票號碼，股票大賺，避開危險",
      vi: "Đoán số xổ số, thành công chứng khoán, tránh nguy hiểm",
      id: "Menebak nomor lotre, sukses pasar saham, menghindari bahaya"
    }
  }
];

// 답변 배열을 받아서 각 Type별 점수를 계산하고, 가장 높은 점수의 Type을 반환
// 동점일 경우 우선순위: Type 4 > Type 2 > Type 3 > Type 1 > Type 6 > Type 5
export function calculateSuperpowerResult(answers: number[][]): string {
  // answers는 각 질문에 대한 선택된 option의 typePoints 배열
  // 예: [[1,0,0,0,0,0], [0,1,0,0,0,0], ...]
  
  const typeScores = [0, 0, 0, 0, 0, 0]; // Type1, Type2, Type3, Type4, Type5, Type6
  
  // 각 답변의 점수를 합산
  answers.forEach(answer => {
    if (answer && answer.length === 6) {
      for (let i = 0; i < 6; i++) {
        typeScores[i] += answer[i];
      }
    }
  });
  
  // 가장 높은 점수 찾기
  const maxScore = Math.max(...typeScores);
  
  // 동점인 경우를 고려하여 우선순위 적용
  // 우선순위: Type 4 (index 3) > Type 2 (index 1) > Type 3 (index 2) > Type 1 (index 0) > Type 6 (index 5) > Type 5 (index 4)
  const priority = [3, 1, 2, 0, 5, 4]; // Type4, Type2, Type3, Type1, Type6, Type5 순서
  
  for (const typeIndex of priority) {
    if (typeScores[typeIndex] === maxScore) {
      return `Type${typeIndex + 1}`;
    }
  }
  
  // Fallback (should not happen)
  return "Type4";
}
