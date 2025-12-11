export interface FlirtingStyleQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    types: string[]; // 여러 Type에 점수 부여 가능 (예: ["Type1", "Type6"])
  }[];
}

export interface FlirtingStyleResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  flirtingTechnique: Record<string, string>; // 플러팅 기술
  characteristics: Record<string, string>; // 주요 특징
  goodMatch: Record<string, string>; // 환상의 짝꿍
  badMatch: Record<string, string>; // 환장의 짝꿍
}

export const flirtingStyleQuestions: FlirtingStyleQuestion[] = [
  {
    id: 1,
    question: {
      ko: "마음에 드는 이성과 눈이 마주쳤다. 당신의 반응은?",
      en: "You made eye contact with someone you're interested in. Your reaction?",
      ja: "気になる異性と目が合った。あなたの反応は？",
      'zh-CN': "与你感兴趣的人对视了。你的反应是？",
      'zh-TW': "與你感興趣的人對視了。你的反應是？",
      vi: "Bạn gặp ánh mắt của người bạn thích. Phản ứng của bạn là gì?",
      id: "Anda bertatapan dengan seseorang yang Anda sukai. Reaksi Anda?"
    },
    options: [
      {
        text: {
          ko: "피하지 않고 지긋이 쳐다보거나 살짝 미소 짓는다.",
          en: "I don't avoid it and look steadily or smile slightly.",
          ja: "避けずにじっと見つめたり、ほほえんだりする。",
          'zh-CN': "不回避，直视或微微微笑。",
          'zh-TW': "不迴避，直視或微微微笑。",
          vi: "Tôi không tránh né và nhìn chằm chằm hoặc mỉm cười nhẹ.",
          id: "Saya tidak menghindar dan menatap dengan mantap atau tersenyum sedikit."
        },
        types: ["Type1", "Type6"]
      },
      {
        text: {
          ko: "부끄러워서 황급히 눈을 돌리거나 딴청을 피운다.",
          en: "I'm embarrassed and quickly look away or pretend to be busy.",
          ja: "恥ずかしくて慌てて目をそらしたり、知らんぷりをする。",
          'zh-CN': "因为害羞而急忙移开视线或装作没看见。",
          'zh-TW': "因為害羞而急忙移開視線或裝作沒看見。",
          vi: "Tôi xấu hổ và vội vàng nhìn đi chỗ khác hoặc giả vờ bận rộn.",
          id: "Saya malu dan cepat-cepat memalingkan muka atau pura-pura sibuk."
        },
        types: ["Type2", "Type3"]
      }
    ]
  },
  {
    id: 2,
    question: {
      ko: "대화 중 침묵이 흘렀을 때, 당신은?",
      en: "When silence falls during a conversation, what do you do?",
      ja: "会話中に沈黙が流れたとき、あなたは？",
      'zh-CN': "对话中出现沉默时，你会怎么做？",
      'zh-TW': "對話中出現沉默時，你會怎麼做？",
      vi: "Khi im lặng bao trùm trong cuộc trò chuyện, bạn làm gì?",
      id: "Ketika keheningan terjadi dalam percakapan, apa yang Anda lakukan?"
    },
    options: [
      {
        text: {
          ko: "\"근데 너 오늘 되게 예쁘다/멋있다.\" 훅 들어가는 칭찬을 한다.",
          en: "\"You look really pretty/handsome today.\" I give a direct compliment.",
          ja: "「でも今日すごく可愛い/かっこいいね。」直接的な褒め言葉を言う。",
          'zh-CN': "「你今天真漂亮/真帅。」我会直接赞美。",
          'zh-TW': "「你今天真漂亮/真帥。」我會直接讚美。",
          vi: "\"Nhưng hôm nay bạn trông rất xinh đẹp/đẹp trai.\" Tôi khen trực tiếp.",
          id: "\"Tapi kamu hari ini sangat cantik/ganteng.\" Saya memberikan pujian langsung."
        },
        types: ["Type1", "Type2"]
      },
      {
        text: {
          ko: "\"저기 저거 봐봐.\" 주변 사물을 가리키며 화제를 돌린다.",
          en: "\"Look at that over there.\" I point to something nearby and change the topic.",
          ja: "「あそこ見て。」周りの物を指さして話題を変える。",
          'zh-CN': "「看那边。」我会指向周围的东西来转移话题。",
          'zh-TW': "「看那邊。」我會指向周圍的東西來轉移話題。",
          vi: "\"Nhìn kìa.\" Tôi chỉ vào thứ gì đó xung quanh và đổi chủ đề.",
          id: "\"Lihat itu di sana.\" Saya menunjuk sesuatu di sekitar dan mengubah topik."
        },
        types: ["Type3", "Type4"]
      }
    ]
  },
  {
    id: 3,
    question: {
      ko: "술자리에서 썸남/썸녀가 취한 것 같다.",
      en: "At a drinking gathering, your crush seems drunk.",
      ja: "飲み会で、気になる人が酔っているようだ。",
      'zh-CN': "在酒局上，你感兴趣的人似乎喝醉了。",
      'zh-TW': "在酒局上，你感興趣的人似乎喝醉了。",
      vi: "Trong buổi nhậu, người bạn thích có vẻ say.",
      id: "Di acara minum, orang yang Anda sukai tampak mabuk."
    },
    options: [
      {
        text: {
          ko: "\"많이 마셨어? 바람 쐬러 갈래?\" 단둘이 나갈 기회를 만든다.",
          en: "\"Did you drink a lot? Want to get some fresh air?\" I create an opportunity for us to go out alone.",
          ja: "「たくさん飲んだ？外の空気を吸いに行かない？」二人きりで出かける機会を作る。",
          'zh-CN': "「喝了很多吗？想去透透气吗？」我创造两人独处的机会。",
          'zh-TW': "「喝了很多嗎？想去透透氣嗎？」我創造兩人獨處的機會。",
          vi: "\"Bạn uống nhiều à? Muốn ra ngoài hít thở không?\" Tôi tạo cơ hội để hai người ra ngoài một mình.",
          id: "\"Minum banyak? Mau keluar cari udara segar?\" Saya menciptakan kesempatan untuk pergi berdua saja."
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "\"물 좀 마셔.\" 조용히 물 컵과 숙취 해소제를 챙겨준다.",
          en: "\"Drink some water.\" I quietly prepare a water cup and hangover remedy.",
          ja: "「水を飲んで。」静かに水のコップと二日酔い解消剤を用意する。",
          'zh-CN': "「喝点水吧。」我悄悄地准备水杯和解酒药。",
          'zh-TW': "「喝點水吧。」我悄悄地準備水杯和解酒藥。",
          vi: "\"Uống chút nước đi.\" Tôi lặng lẽ chuẩn bị cốc nước và thuốc giải rượu.",
          id: "\"Minum air sedikit.\" Saya diam-diam menyiapkan gelas air dan obat mabuk."
        },
        types: ["Type4", "Type6"]
      }
    ]
  },
  {
    id: 4,
    question: {
      ko: "상대방이 \"나 손 차가워\"라고 한다면?",
      en: "If the other person says 'My hands are cold'?",
      ja: "相手が「手が冷たい」と言ったら？",
      'zh-CN': "如果对方说'我的手很冷'？",
      'zh-TW': "如果對方說'我的手很冷'？",
      vi: "Nếu đối phương nói 'Tay tôi lạnh'?",
      id: "Jika lawan bicara mengatakan 'Tanganku dingin'?"
    },
    options: [
      {
        text: {
          ko: "\"어디 봐봐.\" 자연스럽게 손을 잡거나 만져본다.",
          en: "\"Let me see.\" I naturally hold or touch their hand.",
          ja: "「どれどれ見せて。」自然に手を握ったり触ったりする。",
          'zh-CN': "「让我看看。」我会自然地握住或触摸他们的手。",
          'zh-TW': "「讓我看看。」我會自然地握住或觸摸他們的手。",
          vi: "\"Để tôi xem.\" Tôi tự nhiên nắm hoặc chạm vào tay họ.",
          id: "\"Mari lihat.\" Saya secara alami memegang atau menyentuh tangan mereka."
        },
        types: ["Type1", "Type2"]
      },
      {
        text: {
          ko: "\"핫팩 줄까? 아니면 주머니에 넣어.\" 말로 해결한다.",
          en: "\"Want a hand warmer? Or put it in your pocket.\" I solve it with words.",
          ja: "「カイロあげる？それともポケットに入れる？」言葉で解決する。",
          'zh-CN': "「要暖手宝吗？或者放进口袋里。」我用话语解决。",
          'zh-TW': "「要暖手寶嗎？或者放進口袋裡。」我用話語解決。",
          vi: "\"Có muốn túi sưởi không? Hoặc bỏ vào túi áo.\" Tôi giải quyết bằng lời nói.",
          id: "\"Mau hand warmer? Atau masukkan ke saku.\" Saya menyelesaikannya dengan kata-kata."
        },
        types: ["Type3", "Type6"]
      }
    ]
  },
  {
    id: 5,
    question: {
      ko: "카톡 답장을 보낼 때 나의 스타일은?",
      en: "When sending a text message reply, my style is?",
      ja: "メッセージを返信するとき、私のスタイルは？",
      'zh-CN': "发短信回复时，我的风格是？",
      'zh-TW': "發簡訊回覆時，我的風格是？",
      vi: "Khi gửi tin nhắn trả lời, phong cách của tôi là?",
      id: "Saat mengirim balasan pesan, gaya saya adalah?"
    },
    options: [
      {
        text: {
          ko: "하트 이모티콘이나 귀여운 짤을 적절히 섞어서 보낸다.",
          en: "I mix in heart emojis or cute memes appropriately.",
          ja: "ハートの絵文字や可愛い画像を適度に混ぜて送る。",
          'zh-CN': "我会适当地加入心形表情符号或可爱的表情包。",
          'zh-TW': "我會適當地加入心形表情符號或可愛的表情包。",
          vi: "Tôi trộn lẫn emoji trái tim hoặc meme dễ thương một cách phù hợp.",
          id: "Saya mencampur emoji hati atau meme lucu dengan tepat."
        },
        types: ["Type1", "Type2", "Type5"]
      },
      {
        text: {
          ko: "용건 위주로 깔끔하게, 혹은 ㅋㅋㅋ 같은 텍스트만 쓴다.",
          en: "I keep it clean and business-like, or just use simple text like 'haha'.",
          ja: "用件中心にきれいに、または「笑」のようなテキストだけを使う。",
          'zh-CN': "我会简洁地以事务为主，或者只使用像'哈哈'这样的简单文本。",
          'zh-TW': "我會簡潔地以事務為主，或者只使用像'哈哈'這樣的簡單文本。",
          vi: "Tôi giữ nó gọn gàng và tập trung vào công việc, hoặc chỉ dùng văn bản đơn giản như 'haha'.",
          id: "Saya menjaga tetap bersih dan fokus pada urusan, atau hanya menggunakan teks sederhana seperti 'haha'."
        },
        types: ["Type3", "Type4", "Type6"]
      }
    ]
  },
  {
    id: 6,
    question: {
      ko: "상대방의 옷에 머리카락이나 먼지가 묻어있다.",
      en: "There's hair or dust on the other person's clothes.",
      ja: "相手の服に髪の毛やほこりがついている。",
      'zh-CN': "对方的衣服上有头发或灰尘。",
      'zh-TW': "對方的衣服上有頭髮或灰塵。",
      vi: "Có tóc hoặc bụi trên quần áo của đối phương.",
      id: "Ada rambut atau debu di pakaian lawan bicara."
    },
    options: [
      {
        text: {
          ko: "말없이 다가가서 직접 떼어준다. (심쿵 유발)",
          en: "I approach silently and remove it directly. (Heart-fluttering moment)",
          ja: "無言で近づいて直接取ってあげる。（ときめき誘発）",
          'zh-CN': "我会默默地靠近并直接帮他们拿掉。（心动时刻）",
          'zh-TW': "我會默默地靠近並直接幫他們拿掉。（心動時刻）",
          vi: "Tôi im lặng đến gần và gỡ trực tiếp. (Khoảnh khắc rung động)",
          id: "Saya mendekati dengan diam dan melepasnya langsung. (Momen yang membuat deg-degan)"
        },
        types: ["Type1", "Type2"]
      },
      {
        text: {
          ko: "\"여기 뭐 묻었어.\" 말로 알려주고 떼라고 한다.",
          en: "\"Something's stuck here.\" I tell them verbally and ask them to remove it.",
          ja: "「ここに何かついてるよ。」言葉で伝えて取るように言う。",
          'zh-CN': "「这里粘了东西。」我会用话语告诉他们，让他们自己拿掉。",
          'zh-TW': "「這裡黏了東西。」我會用話語告訴他們，讓他們自己拿掉。",
          vi: "\"Có gì đó dính ở đây.\" Tôi nói bằng lời và bảo họ tự gỡ.",
          id: "\"Ada sesuatu yang menempel di sini.\" Saya memberitahu secara lisan dan meminta mereka melepasnya."
        },
        types: ["Type3", "Type4"]
      }
    ]
  },
  {
    id: 7,
    question: {
      ko: "여럿이 모인 자리, 나의 포지션은?",
      en: "At a gathering with many people, my position is?",
      ja: "多くの人が集まった場所で、私のポジションは？",
      'zh-CN': "在多人聚会的场合，我的位置是？",
      'zh-TW': "在多人聚會的場合，我的位置是？",
      vi: "Trong một buổi tụ tập với nhiều người, vị trí của tôi là?",
      id: "Di tempat dengan banyak orang, posisi saya adalah?"
    },
    options: [
      {
        text: {
          ko: "분위기를 주도하며 모두를 웃게 만드는 매력 발산형.",
          en: "I lead the atmosphere and make everyone laugh - a charm-radiating type.",
          ja: "雰囲気を主導し、みんなを笑わせる魅力発散型。",
          'zh-CN': "我会主导气氛，让所有人都笑起来——魅力散发型。",
          'zh-TW': "我會主導氣氛，讓所有人都笑起來——魅力散發型。",
          vi: "Tôi dẫn dắt không khí và làm mọi người cười - kiểu tỏa sức hút.",
          id: "Saya memimpin suasana dan membuat semua orang tertawa - tipe yang memancarkan pesona."
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "조용히 리액션하며 한 사람에게만 집중하는 레이더형.",
          en: "I react quietly and focus on just one person - a radar type.",
          ja: "静かにリアクションしながら、一人だけに集中するレーダー型。",
          'zh-CN': "我会安静地反应，只专注于一个人——雷达型。",
          'zh-TW': "我會安靜地反應，只專注於一個人——雷達型。",
          vi: "Tôi phản ứng một cách im lặng và chỉ tập trung vào một người - kiểu radar.",
          id: "Saya bereaksi dengan tenang dan fokus hanya pada satu orang - tipe radar."
        },
        types: ["Type4", "Type6"]
      }
    ]
  },
  {
    id: 8,
    question: {
      ko: "썸 타는 상대가 다른 이성과 친하게 지낼 때?",
      en: "When the person you're seeing is friendly with another person?",
      ja: "付き合っている人が他の異性と親しくしているとき？",
      'zh-CN': "当你正在交往的人与另一个异性很友好时？",
      'zh-TW': "當你正在交往的人與另一個異性很友好時？",
      vi: "Khi người bạn đang hẹn hò thân thiết với người khác?",
      id: "Ketika orang yang Anda kencani bersikap ramah dengan orang lain?"
    },
    options: [
      {
        text: {
          ko: "\"너 걔랑 무슨 사이야?\" 대놓고 질투하거나 토라진 티를 낸다.",
          en: "\"What's your relationship with them?\" I openly show jealousy or sulk.",
          ja: "「あなたとあの人はどんな関係なの？」露骨に嫉妬したり、すねた態度を見せる。",
          'zh-CN': "「你和他们是什么关系？」我会公开表现出嫉妒或生气的样子。",
          'zh-TW': "「你和他們是什麼關係？」我會公開表現出嫉妒或生氣的樣子。",
          vi: "\"Bạn và người đó có quan hệ gì?\" Tôi công khai thể hiện sự ghen tuông hoặc giận dỗi.",
          id: "\"Apa hubunganmu dengan mereka?\" Saya secara terang-terangan menunjukkan cemburu atau cemberut."
        },
        types: ["Type1", "Type2"]
      },
      {
        text: {
          ko: "겉으로는 쿨한 척하지만 속으로는 점수를 깎는다.",
          en: "I act cool on the outside but internally deduct points.",
          ja: "表面上はクールなふりをするが、内心では減点する。",
          'zh-CN': "表面上装作很酷，但内心会扣分。",
          'zh-TW': "表面上裝作很酷，但內心會扣分。",
          vi: "Bề ngoài tôi tỏ ra cool nhưng trong lòng tôi trừ điểm.",
          id: "Saya berpura-pura keren di luar tapi secara internal mengurangi poin."
        },
        types: ["Type3", "Type4", "Type6"]
      }
    ]
  },
  {
    id: 9,
    question: {
      ko: "헤어지고 집에 가는 길, 아쉬운 마음을 표현한다면?",
      en: "On the way home after parting, if expressing regret?",
      ja: "別れて家に帰る道で、名残惜しい気持ちを表現するとしたら？",
      'zh-CN': "分别后回家的路上，如果要表达不舍？",
      'zh-TW': "分別後回家的路上，如果要表達不捨？",
      vi: "Trên đường về nhà sau khi chia tay, nếu thể hiện sự tiếc nuối?",
      id: "Dalam perjalanan pulang setelah berpisah, jika mengungkapkan penyesalan?"
    },
    options: [
      {
        text: {
          ko: "\"아~ 가기 싫다. 우리 딱 10분만 더 있다 갈까?\"",
          en: "\"Ah~ I don't want to go. Can we stay just 10 more minutes?\"",
          ja: "「ああ、帰りたくない。あと10分だけ一緒にいない？」",
          'zh-CN': "「啊~不想走。我们再待10分钟好吗？」",
          'zh-TW': "「啊~不想走。我們再待10分鐘好嗎？」",
          vi: "\"Ah~ Tôi không muốn đi. Chúng ta ở thêm 10 phút nữa được không?\"",
          id: "\"Ah~ Aku tidak mau pergi. Bisakah kita tinggal 10 menit lagi?\""
        },
        types: ["Type1", "Type2", "Type5"]
      },
      {
        text: {
          ko: "\"조심해서 가. 도착하면 연락해.\" (아쉽지만 보낸다)",
          en: "\"Be careful going home. Let me know when you arrive.\" (I send them off despite regret)",
          ja: "「気をつけて帰って。着いたら連絡して。」（名残惜しいが送り出す）",
          'zh-CN': "「小心回家。到了告诉我。」（虽然不舍但还是送他们走）",
          'zh-TW': "「小心回家。到了告訴我。」（雖然不捨但還是送他們走）",
          vi: "\"Cẩn thận về nhà nhé. Đến nơi thì nhắn tin cho tôi.\" (Tiếc nuối nhưng vẫn để họ đi)",
          id: "\"Hati-hati di jalan. Beri tahu kalau sudah sampai.\" (Menyesal tapi tetap mengantar mereka pulang)"
        },
        types: ["Type3", "Type4", "Type6"]
      }
    ]
  },
  {
    id: 10,
    question: {
      ko: "상대방이 이상형을 물어봤다.",
      en: "The other person asked about your ideal type.",
      ja: "相手が理想のタイプを聞いてきた。",
      'zh-CN': "对方问你的理想型。",
      'zh-TW': "對方問你的理想型。",
      vi: "Đối phương hỏi về mẫu người lý tưởng của bạn.",
      id: "Lawan bicara bertanya tentang tipe ideal Anda."
    },
    options: [
      {
        text: {
          ko: "\"음... 딱 너 같은 사람?\" 은근슬쩍 그 사람의 특징을 말한다.",
          en: "\"Hmm... Someone exactly like you?\" I subtly mention their characteristics.",
          ja: "「うーん...まさにあなたみたいな人？」こっそりその人の特徴を言う。",
          'zh-CN': "「嗯...像你这样的人？」我会巧妙地提到他们的特点。",
          'zh-TW': "「嗯...像你這樣的人？」我會巧妙地提到他們的特點。",
          vi: "\"Hmm... Người giống hệt bạn?\" Tôi tinh tế đề cập đến đặc điểm của họ.",
          id: "\"Hmm... Seseorang yang persis seperti kamu?\" Saya secara halus menyebutkan karakteristik mereka."
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "\"그냥 착하고 잘 맞는 사람.\" 교과서적인 대답을 한다.",
          en: "\"Just someone kind and compatible.\" I give a textbook answer.",
          ja: "「ただ優しくて合う人。」教科書通りの答えをする。",
          'zh-CN': "「只是善良和合得来的人。」我会给出教科书式的回答。",
          'zh-TW': "「只是善良和合得來的人。」我會給出教科書式的回答。",
          vi: "\"Chỉ là người tốt bụng và hợp nhau thôi.\" Tôi đưa ra câu trả lời theo sách vở.",
          id: "\"Hanya seseorang yang baik dan cocok.\" Saya memberikan jawaban yang standar."
        },
        types: ["Type3", "Type4", "Type6"]
      }
    ]
  },
  {
    id: 11,
    question: {
      ko: "나의 연애 필살기는?",
      en: "My dating secret weapon is?",
      ja: "私の恋愛必殺技は？",
      'zh-CN': "我的恋爱必杀技是？",
      'zh-TW': "我的戀愛必殺技是？",
      vi: "Vũ khí bí mật trong tình yêu của tôi là?",
      id: "Senjata rahasia kencan saya adalah?"
    },
    options: [
      {
        text: {
          ko: "거부할 수 없는 스킨십과 애교.",
          en: "Irresistible physical touch and aegyo (cuteness).",
          ja: "拒否できないスキンシップと愛嬌。",
          'zh-CN': "无法抗拒的身体接触和撒娇。",
          'zh-TW': "無法抗拒的身體接觸和撒嬌。",
          vi: "Sự tiếp xúc cơ thể không thể cưỡng lại và sự dễ thương.",
          id: "Sentuhan fisik yang tidak bisa ditolak dan kelucuan."
        },
        types: ["Type1", "Type2", "Type5"]
      },
      {
        text: {
          ko: "반전 매력과 챙겨주는 세심함.",
          en: "Reverse charm and thoughtful care.",
          ja: "逆転の魅力と気遣いの細やかさ。",
          'zh-CN': "反转魅力和体贴入微的关怀。",
          'zh-TW': "反轉魅力和體貼入微的關懷。",
          vi: "Sức hút ngược và sự quan tâm chu đáo.",
          id: "Pesona terbalik dan perhatian yang penuh pertimbangan."
        },
        types: ["Type3", "Type4", "Type6"]
      }
    ]
  },
  {
    id: 12,
    question: {
      ko: "친구들이 말하는 나의 평소 모습은?",
      en: "What do friends say about my usual behavior?",
      ja: "友達が言う私の普段の様子は？",
      'zh-CN': "朋友们说我平时的样子是？",
      'zh-TW': "朋友們說我平時的樣子是？",
      vi: "Bạn bè nói gì về hành vi thường ngày của tôi?",
      id: "Apa yang dikatakan teman tentang perilaku biasa saya?"
    },
    options: [
      {
        text: {
          ko: "\"너는 끼 좀 그만 부려. 어장 관리하냐?\"",
          en: "\"Stop showing off. Are you managing multiple people?\"",
          ja: "「そのテンションやめなよ。複数管理してるの？」",
          'zh-CN': "「别那么张扬了。你在养鱼吗？」",
          'zh-TW': "「別那麼張揚了。你在養魚嗎？」",
          vi: "\"Ngừng thể hiện đi. Bạn đang quản lý nhiều người à?\"",
          id: "\"Berhenti pamer. Apakah kamu mengelola banyak orang?\""
        },
        types: ["Type1", "Type5"]
      },
      {
        text: {
          ko: "\"너는 눈치가 왜 이렇게 없어? 걔가 너 좋아하잖아.\"",
          en: "\"Why are you so clueless? They like you, you know.\"",
          ja: "「なんでそんなに空気読めないの？あの人、あなたのこと好きなんだよ。」",
          'zh-CN': "「你为什么这么没眼力见？他们喜欢你，你知道的。」",
          'zh-TW': "「你為什麼這麼沒眼力見？他們喜歡你，你知道的。」",
          vi: "\"Sao bạn lại thiếu nhạy cảm thế? Họ thích bạn mà, bạn biết không.\"",
          id: "\"Kenapa kamu tidak peka? Mereka menyukaimu, kamu tahu.\""
        },
        types: ["Type4", "Type6"]
      }
    ]
  }
];

export const flirtingStyleResults: FlirtingStyleResult[] = [
  {
    type: "Type1",
    emoji: "🦊",
    title: {
      ko: "백전백승, 앙큼한 불여우",
      en: "Undefeated, Cunning Fox",
      ja: "百戦百勝、ずる賢い狐",
      'zh-CN': "百战百胜，狡猾的狐狸",
      'zh-TW': "百戰百勝，狡猾的狐狸",
      vi: "Bách chiến bách thắng, Cáo tinh ranh",
      id: "Tak terkalahkan, Rubah Licik"
    },
    shortDescription: {
      ko: "\"원하는 건 반드시 가져야지?\"",
      en: "\"I must get what I want, right?\"",
      ja: "「欲しいものは必ず手に入れないと？」",
      'zh-CN': "「想要的东西必须得到，对吧？」",
      'zh-TW': "「想要的東西必須得到，對吧？」",
      vi: "\"Những gì mình muốn phải có được, đúng không?\"",
      id: "\"Aku harus mendapatkan yang kuinginkan, kan?\""
    },
    description: {
      ko: "당신은 자신의 매력이 무엇인지 정확히 알고 있으며, 그것을 200% 활용할 줄 아는 고수입니다. 적절한 눈웃음, 자연스러운 스킨십, 치고 빠지는 밀당까지 완벽합니다. 상대방은 이미 당신의 손바닥 위에서 놀아나고 있을지도 모릅니다.",
      en: "You know exactly what your charm is and are a master at using it 200%. Perfect eye smiles, natural physical touch, and the perfect push-and-pull game. Your partner might already be playing in the palm of your hand.",
      ja: "あなたは自分の魅力が何かを正確に知っており、それを200%活用できる達人です。適切な目笑い、自然なスキンシップ、引いては打つミルダンまで完璧です。相手はすでにあなたの手のひらの上で遊ばれているかもしれません。",
      'zh-CN': "你清楚地知道自己的魅力是什么，并且是能够200%发挥它的高手。完美的眼神微笑、自然的身体接触，以及完美的推拉游戏。对方可能已经在你的手掌心里了。",
      'zh-TW': "你清楚地知道自己的魅力是什麼，並且是能夠200%發揮它的高手。完美的眼神微笑、自然的身體接觸，以及完美的推拉遊戲。對方可能已經在你的手掌心裡了。",
      vi: "Bạn biết chính xác sức hút của mình là gì và là bậc thầy trong việc sử dụng nó 200%. Nụ cười mắt hoàn hảo, tiếp xúc cơ thể tự nhiên, và trò chơi đẩy-kéo hoàn hảo. Đối phương có thể đã nằm trong lòng bàn tay của bạn rồi.",
      id: "Anda tahu persis apa daya tarik Anda dan adalah master dalam menggunakannya 200%. Senyum mata yang sempurna, sentuhan fisik yang alami, dan permainan push-and-pull yang sempurna. Pasangan Anda mungkin sudah bermain di telapak tangan Anda."
    },
    flirtingTechnique: {
      ko: "눈맞춤, 은근한 터치, 끼 부리기",
      en: "Eye contact, subtle touch, showing off",
      ja: "アイコンタクト、控えめなタッチ、テンション上げ",
      'zh-CN': "眼神交流，微妙的触碰，展示魅力",
      'zh-TW': "眼神交流，微妙的觸碰，展示魅力",
      vi: "Giao tiếp bằng mắt, chạm nhẹ, thể hiện",
      id: "Kontak mata, sentuhan halus, pamer"
    },
    characteristics: {
      ko: "꼬리 9개 달림, 분위기 메이커",
      en: "Nine tails, atmosphere maker",
      ja: "9本のしっぽ、雰囲気メーカー",
      'zh-CN': "九条尾巴，气氛制造者",
      'zh-TW': "九條尾巴，氣氛製造者",
      vi: "Chín đuôi, người tạo không khí",
      id: "Sembilan ekor, pembuat suasana"
    },
    goodMatch: {
      ko: "Type 4 (다정한 힐러)",
      en: "Type 4 (Warm Healer)",
      ja: "Type 4 (優しいヒーラー)",
      'zh-CN': "Type 4 (温柔的治愈者)",
      'zh-TW': "Type 4 (溫柔的治癒者)",
      vi: "Type 4 (Người chữa lành ấm áp)",
      id: "Type 4 (Penyembuh yang Hangat)"
    },
    badMatch: {
      ko: "Type 1 (같은 여우끼리 기싸움)",
      en: "Type 1 (Same foxes competing)",
      ja: "Type 1 (同じ狐同士の競争)",
      'zh-CN': "Type 1 (同类狐狸之间的竞争)",
      'zh-TW': "Type 1 (同類狐狸之間的競爭)",
      vi: "Type 1 (Cùng là cáo, cạnh tranh nhau)",
      id: "Type 1 (Rubah yang sama bersaing)"
    }
  },
  {
    type: "Type2",
    emoji: "🐶",
    title: {
      ko: "직진밖에 몰라요, 댕댕이 직진남/녀",
      en: "Only Knows Straight Forward, Puppy Straight Shooter",
      ja: "一直線しか知らない、ワンコ直球男/女",
      'zh-CN': "只知道直球，小狗直球男/女",
      'zh-TW': "只知道直球，小狗直球男/女",
      vi: "Chỉ biết thẳng thắn, Chó con thẳng thắn",
      id: "Hanya Tahu Lurus, Anjing Lurus"
    },
    shortDescription: {
      ko: "\"좋은데 어떡해? 꼬리 흔들흔들\"",
      en: "\"I like them, what can I do? Tail wagging\"",
      ja: "「好きなのにどうしよう？しっぽフリフリ」",
      'zh-CN': "「喜欢但能怎么办？摇尾巴」",
      'zh-TW': "「喜歡但能怎麼辦？搖尾巴」",
      vi: "\"Thích nhưng biết làm sao? Đuôi vẫy vẫy\"",
      id: "\"Suka tapi bagaimana? Ekor bergoyang-goyang\""
    },
    description: {
      ko: "당신은 계산하거나 머리 굴리는 건 딱 질색입니다. 좋으면 좋다고 솔직하게 표현하고, 상대방에게 헌신합니다. 당신의 순수하고 열정적인 모습에 상대방은 무장 해제됩니다. 밀당 없는 당신의 돌직구가 최고의 무기입니다.",
      en: "You absolutely hate calculating or scheming. If you like someone, you express it honestly and devote yourself to them. Your pure and passionate side disarms your partner. Your straight-forward approach without push-and-pull is your best weapon.",
      ja: "あなたは計算したり頭をひねるのが大嫌いです。好きなら好きだと素直に表現し、相手に尽くします。あなたの純粋で情熱的な姿に相手は武装解除されます。ミルダンのないあなたの直球が最高の武器です。",
      'zh-CN': "你绝对讨厌算计或耍心机。如果喜欢某人，你会诚实地表达，并为他们奉献。你纯真和热情的一面会让对方卸下防备。没有推拉的直球是你的最佳武器。",
      'zh-TW': "你絕對討厭算計或耍心機。如果喜歡某人，你會誠實地表達，並為他們奉獻。你純真和熱情的一面會讓對方卸下防備。沒有推拉的直球是你的最佳武器。",
      vi: "Bạn hoàn toàn ghét tính toán hoặc mưu mô. Nếu thích ai đó, bạn thể hiện một cách trung thực và cống hiến cho họ. Vẻ đẹp thuần khiết và đam mê của bạn khiến đối phương giải giáp. Cách tiếp cận thẳng thắn không có đẩy-kéo là vũ khí tốt nhất của bạn.",
      id: "Anda benar-benar benci menghitung atau memutar otak. Jika menyukai seseorang, Anda mengungkapkannya dengan jujur dan mengabdikan diri kepada mereka. Sisi murni dan penuh gairah Anda membuat pasangan Anda melepaskan senjata. Pendekatan langsung tanpa push-and-pull adalah senjata terbaik Anda."
    },
    flirtingTechnique: {
      ko: "무한 칭찬, 선물 공세, 빠른 답장",
      en: "Endless compliments, gift attacks, fast replies",
      ja: "無限の褒め言葉、プレゼント攻撃、早い返信",
      'zh-CN': "无尽的赞美，礼物攻势，快速回复",
      'zh-TW': "無盡的讚美，禮物攻勢，快速回覆",
      vi: "Lời khen vô tận, tấn công quà tặng, trả lời nhanh",
      id: "Pujian tak berujung, serangan hadiah, balasan cepat"
    },
    characteristics: {
      ko: "금사빠, 감정 투명함",
      en: "Falls fast, transparent emotions",
      ja: "すぐに恋に落ちる、感情透明",
      'zh-CN': "容易坠入爱河，情感透明",
      'zh-TW': "容易墜入愛河，情感透明",
      vi: "Dễ yêu, cảm xúc trong suốt",
      id: "Jatuh cinta cepat, emosi transparan"
    },
    goodMatch: {
      ko: "Type 3 (시크한 츤데레)",
      en: "Type 3 (Cool Tsundere)",
      ja: "Type 3 (クールなツンデレ)",
      'zh-CN': "Type 3 (酷酷的傲娇)",
      'zh-TW': "Type 3 (酷酷的傲嬌)",
      vi: "Type 3 (Tsundere lạnh lùng)",
      id: "Type 3 (Tsundere Keren)"
    },
    badMatch: {
      ko: "Type 6 (철벽남/녀)",
      en: "Type 6 (Iron Wall)",
      ja: "Type 6 (鉄壁男/女)",
      'zh-CN': "Type 6 (铁壁男/女)",
      'zh-TW': "Type 6 (鐵壁男/女)",
      vi: "Type 6 (Bức tường sắt)",
      id: "Type 6 (Tembok Besi)"
    }
  },
  {
    type: "Type3",
    emoji: "😼",
    title: {
      ko: "무심한 듯 툭, 시크한 츤데레",
      en: "Casually Nonchalant, Cool Tsundere",
      ja: "無関心なふり、クールなツンデレ",
      'zh-CN': "看似无心，酷酷的傲娇",
      'zh-TW': "看似無心，酷酷的傲嬌",
      vi: "Tỏ ra vô tâm, Tsundere lạnh lùng",
      id: "Pura-pura Acuh, Tsundere Keren"
    },
    shortDescription: {
      ko: "\"오다 주웠다. (사실 널 위해 샀어)\"",
      en: "\"I found it on the way. (Actually I bought it for you)\"",
      ja: "「道で拾った。（実はあなたのために買った）」",
      'zh-CN': "「路上捡的。（其实是为您买的）」",
      'zh-TW': "「路上撿的。（其實是為您買的）」",
      vi: "\"Nhặt được trên đường. (Thực ra tôi mua cho bạn)\"",
      id: "\"Ketemu di jalan. (Sebenarnya kubeli untukmu)\""
    },
    description: {
      ko: "당신은 겉으로는 차갑고 무뚝뚝해 보이지만 속은 따뜻한 사람입니다. 살갑게 굴지는 않지만, 뒤에서 묵묵히 챙겨주는 반전 매력이 있습니다. 상대방은 당신의 무심함 속에 숨겨진 다정함에 설렘을 느낍니다.",
      en: "You appear cold and blunt on the outside but are warm inside. You don't act affectionate, but you have a reverse charm of quietly taking care of things behind the scenes. Your partner feels excitement from the warmth hidden beneath your indifference.",
      ja: "あなたは外見は冷たくてぶっきらぼうに見えますが、中身は温かい人です。親しげに振る舞うことはありませんが、後ろで黙々と気遣う逆転の魅力があります。相手はあなたの無関心の中に隠された優しさにときめきを感じます。",
      'zh-CN': "你外表看起来冷漠和生硬，但内心温暖。你不会表现得亲热，但你有一种在背后默默照顾的反转魅力。对方会从你冷漠外表下隐藏的温柔中感到心动。",
      'zh-TW': "你外表看起來冷漠和生硬，但內心溫暖。你不會表現得親熱，但你有一種在背後默默照顧的反轉魅力。對方會從你冷漠外表下隱藏的溫柔中感到心動。",
      vi: "Bạn trông lạnh lùng và cục cằn bên ngoài nhưng ấm áp bên trong. Bạn không tỏ ra thân thiết, nhưng bạn có sức hút ngược lại khi âm thầm chăm sóc phía sau. Đối phương cảm thấy rung động từ sự ấm áp ẩn giấu dưới vẻ thờ ơ của bạn.",
      id: "Anda tampak dingin dan kasar di luar tapi hangat di dalam. Anda tidak bertindak mesra, tapi Anda memiliki pesona terbalik dengan diam-diam merawat di belakang layar. Pasangan Anda merasakan kegembiraan dari kehangatan yang tersembunyi di balik ketidakpedulian Anda."
    },
    flirtingTechnique: {
      ko: "챙겨주기, 팩트 폭격 후 위로, 반전 매력",
      en: "Taking care, fact bombing then comforting, reverse charm",
      ja: "気遣い、ファクト爆撃後の慰め、逆転の魅力",
      'zh-CN': "照顾，事实轰炸后安慰，反转魅力",
      'zh-TW': "照顧，事實轟炸後安慰，反轉魅力",
      vi: "Chăm sóc, ném sự thật rồi an ủi, sức hút ngược",
      id: "Merawat, membombardir fakta lalu menghibur, pesona terbalik"
    },
    characteristics: {
      ko: "겉바속촉, 부끄러움 많음",
      en: "Cold outside, warm inside, easily embarrassed",
      ja: "外冷内熱、恥ずかしがり屋",
      'zh-CN': "外冷内热，容易害羞",
      'zh-TW': "外冷內熱，容易害羞",
      vi: "Lạnh ngoài nóng trong, dễ xấu hổ",
      id: "Dingin di luar hangat di dalam, mudah malu"
    },
    goodMatch: {
      ko: "Type 2 (댕댕이 직진남/녀)",
      en: "Type 2 (Puppy Straight Shooter)",
      ja: "Type 2 (ワンコ直球男/女)",
      'zh-CN': "Type 2 (小狗直球男/女)",
      'zh-TW': "Type 2 (小狗直球男/女)",
      vi: "Type 2 (Chó con thẳng thắn)",
      id: "Type 2 (Anjing Lurus)"
    },
    badMatch: {
      ko: "Type 5 (유쾌한 장난꾸러기)",
      en: "Type 5 (Cheerful Prankster)",
      ja: "Type 5 (愉快ないたずらっ子)",
      'zh-CN': "Type 5 (愉快的恶作剧者)",
      'zh-TW': "Type 5 (愉快的惡作劇者)",
      vi: "Type 5 (Người nghịch ngợm vui vẻ)",
      id: "Type 5 (Pengganggu yang Ceria)"
    }
  },
  {
    type: "Type4",
    emoji: "🌿",
    title: {
      ko: "편안함이 무기, 다정한 힐러",
      en: "Comfort is the Weapon, Warm Healer",
      ja: "心地よさが武器、優しいヒーラー",
      'zh-CN': "舒适是武器，温柔的治愈者",
      'zh-TW': "舒適是武器，溫柔的治癒者",
      vi: "Sự thoải mái là vũ khí, Người chữa lành ấm áp",
      id: "Kenyamanan adalah Senjata, Penyembuh yang Hangat"
    },
    shortDescription: {
      ko: "\"네 얘기 다 들어줄게. 힘들었지?\"",
      en: "\"I'll listen to everything you say. It was hard, wasn't it?\"",
      ja: "「あなたの話、全部聞いてあげる。大変だったね。」",
      'zh-CN': "「我会听你说的一切。很辛苦吧？」",
      'zh-TW': "「我會聽你說的一切。很辛苦吧？」",
      vi: "\"Tôi sẽ nghe tất cả những gì bạn nói. Khó khăn lắm phải không?\"",
      id: "\"Aku akan mendengarkan semua yang kamu katakan. Sulit, kan?\""
    },
    description: {
      ko: "당신은 상대방의 이야기를 잘 들어주고 공감해 주는 능력이 탁월합니다. 당신과 함께 있으면 상대방은 편안함과 위로를 느낍니다. 자극적인 매력보다는 스며드는 매력으로, 어느새 상대방의 일상 깊숙이 자리 잡게 됩니다.",
      en: "You excel at listening to and empathizing with your partner's stories. When they're with you, they feel comfort and solace. Rather than stimulating charm, you have a seeping charm that gradually settles deep into your partner's daily life.",
      ja: "あなたは相手の話をよく聞いて共感する能力が卓越しています。あなたと一緒にいると、相手は心地よさと慰めを感じます。刺激的な魅力よりも、しみ込む魅力で、いつの間にか相手の日常の深くに根を下ろします。",
      'zh-CN': "你擅长倾听和共情对方的故事。和你在一起时，对方会感到舒适和安慰。与其说是刺激性的魅力，不如说是渗透性的魅力，不知不觉中就会深深扎根于对方的日常生活中。",
      'zh-TW': "你擅長傾聽和共情對方的故事。和你在一起時，對方會感到舒適和安慰。與其說是刺激性的魅力，不如說是滲透性的魅力，不知不覺中就會深深紮根於對方的日常生活中。",
      vi: "Bạn xuất sắc trong việc lắng nghe và đồng cảm với câu chuyện của đối phương. Khi ở bên bạn, họ cảm thấy thoải mái và được an ủi. Thay vì sức hút kích thích, bạn có sức hút thấm sâu, dần dần định cư sâu trong cuộc sống hàng ngày của đối phương.",
      id: "Anda unggul dalam mendengarkan dan berempati dengan cerita pasangan Anda. Ketika mereka bersama Anda, mereka merasakan kenyamanan dan penghiburan. Daripada pesona yang merangsang, Anda memiliki pesona yang meresap yang secara bertahap menetap jauh ke dalam kehidupan sehari-hari pasangan Anda."
    },
    flirtingTechnique: {
      ko: "경청, 리액션, 따뜻한 미소",
      en: "Active listening, reactions, warm smile",
      ja: "傾聴、リアクション、温かい笑顔",
      'zh-CN': "积极倾听，反应，温暖的笑容",
      'zh-TW': "積極傾聽，反應，溫暖的笑容",
      vi: "Lắng nghe tích cực, phản ứng, nụ cười ấm áp",
      id: "Mendengarkan aktif, reaksi, senyum hangat"
    },
    characteristics: {
      ko: "배려심, 서포트, 엄마/아빠 같은 편안함",
      en: "Consideration, support, parent-like comfort",
      ja: "思いやり、サポート、お母さん/お父さんのような心地よさ",
      'zh-CN': "体贴，支持，像父母一样的舒适",
      'zh-TW': "體貼，支持，像父母一樣的舒適",
      vi: "Sự quan tâm, hỗ trợ, sự thoải mái như cha mẹ",
      id: "Pertimbangan, dukungan, kenyamanan seperti orang tua"
    },
    goodMatch: {
      ko: "Type 1 (앙큼한 불여우)",
      en: "Type 1 (Cunning Fox)",
      ja: "Type 1 (ずる賢い狐)",
      'zh-CN': "Type 1 (狡猾的狐狸)",
      'zh-TW': "Type 1 (狡猾的狐狸)",
      vi: "Type 1 (Cáo tinh ranh)",
      id: "Type 1 (Rubah Licik)"
    },
    badMatch: {
      ko: "Type 3 (시크한 츤데레 - 대화가 안 이어짐)",
      en: "Type 3 (Cool Tsundere - conversation doesn't flow)",
      ja: "Type 3 (クールなツンデレ - 会話が続かない)",
      'zh-CN': "Type 3 (酷酷的傲娇 - 对话无法继续)",
      'zh-TW': "Type 3 (酷酷的傲嬌 - 對話無法繼續)",
      vi: "Type 3 (Tsundere lạnh lùng - cuộc trò chuyện không tiếp tục được)",
      id: "Type 3 (Tsundere Keren - percakapan tidak mengalir)"
    }
  },
  {
    type: "Type5",
    emoji: "😜",
    title: {
      ko: "티키타카 장인, 유쾌한 장난꾸러기",
      en: "TikTok Master, Cheerful Prankster",
      ja: "ティキタカ職人、愉快ないたずらっ子",
      'zh-CN': "快速对话大师，愉快的恶作剧者",
      'zh-TW': "快速對話大師，愉快的惡作劇者",
      vi: "Bậc thầy tiki-taka, Người nghịch ngợm vui vẻ",
      id: "Master Tikitaka, Pengganggu yang Ceria"
    },
    shortDescription: {
      ko: "\"나랑 노는 게 제일 재밌지?\"",
      en: "\"Having fun with me is the best, right?\"",
      ja: "「私と遊ぶのが一番楽しいでしょ？」",
      'zh-CN': "「和我一起玩最有趣，对吧？」",
      'zh-TW': "「和我一起玩最有趣，對吧？」",
      vi: "\"Chơi với tôi là vui nhất, đúng không?\"",
      id: "\"Bermain denganku paling menyenangkan, kan?\""
    },
    description: {
      ko: "당신은 유머 감각이 뛰어나고 센스가 넘칩니다. 썸 타는 상대를 놀리거나 장난치면서 친밀감을 쌓습니다. \"친구인 줄 알았는데 어느 순간 이성으로 보인다\"는 소리를 자주 듣습니다. 즐거움과 설렘 사이를 줄타기하는 고수입니다.",
      en: "You have excellent humor and great sense. You build intimacy by teasing or playing pranks on your crush. You often hear \"I thought we were just friends, but suddenly I see you as a romantic interest.\" You're a master at walking the line between fun and excitement.",
      ja: "あなたはユーモアセンスが優れていて、センスが溢れています。気になる人をからかったり、いたずらをしながら親密感を築きます。「友達だと思っていたのに、ある瞬間異性として見える」という言葉をよく聞きます。楽しさとときめきの間を綱渡りする達人です。",
      'zh-CN': "你拥有出色的幽默感和敏锐的感知力。你会通过取笑或恶作剧来建立与暗恋对象的亲密感。你经常听到\"我以为我们只是朋友，但突然我把你当作恋爱对象了\"这样的话。你是游走在乐趣和心动之间的大师。",
      'zh-TW': "你擁有出色的幽默感和敏銳的感知力。你會通過取笑或惡作劇來建立與暗戀對象的親密感。你經常聽到\"我以為我們只是朋友，但突然我把你當作戀愛對象了\"這樣的話。你是遊走在樂趣和心動之間的大師。",
      vi: "Bạn có khiếu hài hước xuất sắc và cảm giác tuyệt vời. Bạn xây dựng sự thân mật bằng cách trêu chọc hoặc chơi khăm người bạn thích. Bạn thường nghe \"Tôi nghĩ chúng ta chỉ là bạn, nhưng đột nhiên tôi thấy bạn như một đối tượng lãng mạn.\" Bạn là bậc thầy trong việc đi trên ranh giới giữa niềm vui và sự rung động.",
      id: "Anda memiliki humor yang luar biasa dan rasa yang hebat. Anda membangun keintiman dengan menggoda atau bermain prank pada gebetan Anda. Anda sering mendengar \"Saya pikir kita hanya teman, tapi tiba-tiba saya melihat Anda sebagai minat romantis.\" Anda adalah master dalam berjalan di garis antara kesenangan dan kegembiraan."
    },
    flirtingTechnique: {
      ko: "유머, 장난, 애칭 부르기",
      en: "Humor, pranks, nicknames",
      ja: "ユーモア、いたずら、愛称",
      'zh-CN': "幽默，恶作剧，昵称",
      'zh-TW': "幽默，惡作劇，暱稱",
      vi: "Hài hước, trò đùa, biệt danh",
      id: "Humor, prank, panggilan sayang"
    },
    characteristics: {
      ko: "남사친/여사친 많음, 분위기 메이커",
      en: "Many opposite-gender friends, atmosphere maker",
      ja: "異性の友達が多い、雰囲気メーカー",
      'zh-CN': "异性朋友多，气氛制造者",
      'zh-TW': "異性朋友多，氣氛製造者",
      vi: "Nhiều bạn khác giới, người tạo không khí",
      id: "Banyak teman lawan jenis, pembuat suasana"
    },
    goodMatch: {
      ko: "Type 6 (철벽남/녀 - 웃겨서 무장해제 시킴)",
      en: "Type 6 (Iron Wall - disarmed by laughter)",
      ja: "Type 6 (鉄壁男/女 - 笑いで武装解除)",
      'zh-CN': "Type 6 (铁壁男/女 - 被笑声解除武装)",
      'zh-TW': "Type 6 (鐵壁男/女 - 被笑聲解除武裝)",
      vi: "Type 6 (Bức tường sắt - bị giải giáp bằng tiếng cười)",
      id: "Type 6 (Tembok Besi - dilucuti dengan tawa)"
    },
    badMatch: {
      ko: "Type 4 (진지한 힐러 - 장난을 다큐로 받음)",
      en: "Type 4 (Serious Healer - takes pranks as documentary)",
      ja: "Type 4 (真面目なヒーラー - いたずらをドキュメンタリーとして受け取る)",
      'zh-CN': "Type 4 (严肃的治愈者 - 把恶作剧当作纪录片)",
      'zh-TW': "Type 4 (嚴肅的治癒者 - 把惡作劇當作紀錄片)",
      vi: "Type 4 (Người chữa lành nghiêm túc - coi trò đùa như phim tài liệu)",
      id: "Type 4 (Penyembuh Serius - menerima prank sebagai dokumenter)"
    }
  },
  {
    type: "Type6",
    emoji: "🏛️",
    title: {
      ko: "존재 자체가 플러팅, 숨쉬는 유죄인간",
      en: "Existence Itself is Flirting, Breathing Guilty Human",
      ja: "存在そのものがフリート、息をする有罪人間",
      'zh-CN': "存在本身就是调情，呼吸的罪人",
      'zh-TW': "存在本身就是調情，呼吸的罪人",
      vi: "Bản thân sự tồn tại là flirting, Con người có tội đang thở",
      id: "Eksistensi Itu Sendiri adalah Flirting, Manusia Bersalah yang Bernapas"
    },
    shortDescription: {
      ko: "\"나는 아무것도 안 했는데...?\"",
      en: "\"I didn't do anything...?\"",
      ja: "「私は何もしていないのに...？」",
      'zh-CN': "「我什么都没做...？」",
      'zh-TW': "「我什麼都沒做...？」",
      vi: "\"Tôi không làm gì cả...?\"",
      id: "\"Aku tidak melakukan apa-apa...?\""
    },
    description: {
      ko: "당신은 본인이 의도하지 않아도 흘러나오는 매력이 있는 사람입니다. 예의 바른 태도, 낮은 목소리, 그윽한 눈빛 등 타고난 분위기가 사람을 홀립니다. 본인은 철벽을 친다고 생각하지만, 상대방은 그 철벽마저 넘고 싶게 만드는 묘한 매력이 있습니다.",
      en: "You're someone with a natural charm that flows out even without intention. Your polite demeanor, low voice, and deep gaze create an innate atmosphere that captivates people. You think you're building an iron wall, but you have a mysterious charm that makes others want to cross even that wall.",
      ja: "あなたは意図しなくても自然に流れ出る魅力がある人です。礼儀正しい態度、低い声、深い眼差しなど、生まれ持った雰囲気が人を魅了します。自分では鉄壁を築いていると思っていますが、相手はその鉄壁さえも越えたくなる不思議な魅力があります。",
      'zh-CN': "你是一个即使没有意图也会自然流露魅力的人。你礼貌的态度、低沉的声音、深邃的眼神等天生的氛围会吸引人们。你认为自己在筑起铁壁，但你有一种神秘的魅力，让人想要跨越那道铁壁。",
      'zh-TW': "你是一個即使沒有意圖也會自然流露魅力的人。你禮貌的態度、低沉的聲音、深邃的眼神等天生的氛圍會吸引人們。你認為自己在築起鐵壁，但你有一種神秘的魅力，讓人想要跨越那道鐵壁。",
      vi: "Bạn là người có sức hút tự nhiên tuôn trào dù không có ý định. Thái độ lịch sự, giọng nói trầm, ánh mắt sâu thẳm của bạn tạo ra một bầu không khí bẩm sinh thu hút mọi người. Bạn nghĩ mình đang xây một bức tường sắt, nhưng bạn có một sức hút bí ẩn khiến người khác muốn vượt qua cả bức tường đó.",
      id: "Anda adalah seseorang dengan pesona alami yang mengalir keluar bahkan tanpa niat. Sikap sopan, suara rendah, dan tatapan dalam Anda menciptakan suasana bawaan yang memikat orang. Anda pikir Anda membangun tembok besi, tapi Anda memiliki pesona misterius yang membuat orang lain ingin menyeberangi bahkan tembok itu."
    },
    flirtingTechnique: {
      ko: "매너, 침묵, 눈빛",
      en: "Manners, silence, gaze",
      ja: "マナー、沈黙、眼差し",
      'zh-CN': "礼貌，沉默，眼神",
      'zh-TW': "禮貌，沉默，眼神",
      vi: "Phép lịch sự, im lặng, ánh mắt",
      id: "Tata krama, keheningan, tatapan"
    },
    characteristics: {
      ko: "만인의 연인, 어장관리 의혹 받음(억울함)",
      en: "Everyone's lover, suspected of playing the field (unfair)",
      ja: "万人の恋人、複数管理の疑いを受ける（不当）",
      'zh-CN': "所有人的恋人，被怀疑养鱼（不公平）",
      'zh-TW': "所有人的戀人，被懷疑養魚（不公平）",
      vi: "Người yêu của mọi người, bị nghi ngờ quản lý nhiều người (bất công)",
      id: "Kekasih semua orang, dicurigai mengelola banyak orang (tidak adil)"
    },
    goodMatch: {
      ko: "Type 5 (유쾌한 장난꾸러기)",
      en: "Type 5 (Cheerful Prankster)",
      ja: "Type 5 (愉快ないたずらっ子)",
      'zh-CN': "Type 5 (愉快的恶作剧者)",
      'zh-TW': "Type 5 (愉快的惡作劇者)",
      vi: "Type 5 (Người nghịch ngợm vui vẻ)",
      id: "Type 5 (Pengganggu yang Ceria)"
    },
    badMatch: {
      ko: "Type 2 (댕댕이 - 부담스러워함)",
      en: "Type 2 (Puppy - feels burdened)",
      ja: "Type 2 (ワンコ - 負担に感じる)",
      'zh-CN': "Type 2 (小狗 - 感到负担)",
      'zh-TW': "Type 2 (小狗 - 感到負擔)",
      vi: "Type 2 (Chó con - cảm thấy gánh nặng)",
      id: "Type 2 (Anjing - merasa terbebani)"
    }
  }
];

export function calculateFlirtingStyleResult(answers: string[]): string {
  // 각 Type별 점수 계산
  const scores: Record<string, number> = {
    Type1: 0,
    Type2: 0,
    Type3: 0,
    Type4: 0,
    Type5: 0,
    Type6: 0
  };

  // 각 답변에 대해 해당하는 Type들에 점수 부여
  answers.forEach((answerTypes) => {
    // answerTypes는 "Type1,Type6" 같은 형식일 수 있음
    const types = answerTypes.split(',').map(t => t.trim());
    types.forEach(type => {
      if (scores.hasOwnProperty(type)) {
        scores[type]++;
      }
    });
  });

  // 가장 높은 점수를 가진 Type 찾기
  let maxScore = 0;
  let resultType = "Type1";

  Object.entries(scores).forEach(([type, score]) => {
    if (score > maxScore) {
      maxScore = score;
      resultType = type;
    }
  });

  // 동점일 경우 우선순위: Type 1(여우) > Type 6(유죄인간) > Type 2(댕댕이) > Type 3(츤데레) > Type 5(장난꾸러기) > Type 4(힐러)
  if (maxScore > 0) {
    const tiedTypes = Object.entries(scores)
      .filter(([_, score]) => score === maxScore)
      .map(([type, _]) => type);

    if (tiedTypes.length > 1) {
      const priority = ["Type1", "Type6", "Type2", "Type3", "Type5", "Type4"];
      for (const priorityType of priority) {
        if (tiedTypes.includes(priorityType)) {
          resultType = priorityType;
          break;
        }
      }
    }
  }

  return resultType;
}

