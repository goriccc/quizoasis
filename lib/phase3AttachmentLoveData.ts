/** 내 연애가 힘든 이유 (애착유형 분석) — phase3 — 7 locales */
export interface Phase3AttachmentLoveQuestion {
  id: number;
  question: Record<string, string>;
  options: {
    text: Record<string, string>;
    /** A=0 안정, B=1 불안, C=2 회피, D=3 혼란 */
    score: number;
  }[];
}

export interface Phase3AttachmentLoveResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  empathyLevel: Record<string, string>;
  characteristics: Record<string, string>;
  goodMatch: Record<string, string>;
  badMatch: Record<string, string>;
}

const L = (
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> => ({
  ko,
  en,
  ja,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  vi,
  id,
});

export const phase3AttachmentLoveQuestions: Phase3AttachmentLoveQuestion[] = [
  {
    id: 1,
    question: L(
      '좋아하는 사람이 연락을 늦게 할 때 나는?',
      'When someone you like replies late, you…',
      '好きな人からの返信が遅いとき、あなたは？',
      '喜欢的人回消息晚了，你会？',
      '喜歡的人回訊息晚了，你會？',
      'Khi người bạn thích trả lời chậm, bạn…',
      'Saat orang yang kamu suka membalas lambat, kamu…'
    ),
    options: [
      {
        text: L(
          '바쁘겠지, 하고 별생각 없이 기다린다',
          'Think they must be busy and wait calmly',
          '忙しいんだろうと思い、特に気にせず待つ',
          '觉得对方在忙，就平静地等',
          '覺得對方在忙，就平靜地等',
          'Nghĩ họ đang bận và đợi bình tĩnh',
          'Mengira mereka sibuk dan menunggu dengan tenang'
        ),
        score: 0,
      },
      {
        text: L(
          '혹시 내가 뭘 잘못했나? 메시지를 다시 읽어본다',
          'Reread the messages wondering if you did something wrong',
          '自分が何か悪いことをしたのか、メッセージを読み返す',
          '反复看消息，想是不是自己做错了什么',
          '反覆看訊息，想是不是自己做錯了什麼',
          'Đọc lại tin nhắn, lo lắng mình đã làm gì sai',
          'Membaca ulang pesan, bertanya-tanya apakah kamu salah'
        ),
        score: 1,
      },
      {
        text: L(
          '먼저 연락한 내가 바보같다는 생각이 든다',
          'Feel foolish for having reached out first',
          '先に連絡した自分がバカみたいだと感じる',
          '觉得自己先联系很傻',
          '覺得自己先聯絡很傻',
          'Cảm thấy ngốc vì đã nhắn trước',
          'Merasa bodoh karena sudah chat duluan'
        ),
        score: 2,
      },
      {
        text: L(
          '불안한데 티 내기 싫어서 나도 읽고 안 본다',
          'Feel anxious but leave them on read so it does not show',
          '不安だけどバレたくなくて、既読スルーする',
          '不安但不想表现出来，已读不回',
          '不安但不想表現出來，已讀不回',
          'Lo lắng nhưng để “đã xem” để không lộ ra',
          'Cemas tapi sengaja tidak membalas agar tidak terlihat'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '연인이 "나 오늘 친구들이랑 놀 거야"라고 할 때?',
      'When your partner says, “I am hanging out with friends today,” you…',
      '恋人が「今日は友達と遊ぶ」と言ったら？',
      '恋人说“我今天要和朋友们玩”，你会？',
      '戀人說「我今天要和朋友們玩」，你會？',
      'Khi người yêu nói “Hôm nay mình đi chơi với bạn”…',
      'Saat pasangan bilang “Aku mau hangout dengan teman hari ini”…'
    ),
    options: [
      {
        text: L(
          '"그래, 재밌게 놀아!" 진심으로 응원한다',
          'Genuinely say, “Have fun!”',
          '「楽しんで！」と心から応援する',
          '真心说“玩得开心！”',
          '真心說「玩得開心！」',
          'Chân thành nói “Vui vẻ nhé!”',
          'Tulus bilang “Seru-seruan ya!”'
        ),
        score: 0,
      },
      {
        text: L(
          '나는 안 보자는 건가, 서운한 마음이 든다',
          'Feel hurt, as if they do not want to see you',
          '自分に会いたくないのかと、寂しさを感じる',
          '觉得对方不想见你，有点委屈',
          '覺得對方不想見你，有點委屈',
          'Buồn vì cảm giác họ không muốn gặp mình',
          'Merasa tersinggung seolah mereka tidak ingin bertemu'
        ),
        score: 1,
      },
      {
        text: L(
          '잘됐다. 나도 내 시간이 생긴다',
          'Good — you get your own time too',
          'よかった、自分の時間もできる',
          '挺好，我也有自己的时间',
          '挺好，我也有自己的時間',
          'Tốt — mình cũng có thời gian riêng',
          'Bagus — aku juga dapat waktu sendiri'
        ),
        score: 2,
      },
      {
        text: L(
          '괜찮다고 했지만 혼자 남겨진 느낌에 기분이 이상하다',
          'Said it is fine but feel oddly left behind',
          '大丈夫と言ったのに、取り残されたような気分になる',
          '嘴上说没事，心里却有点被丢下',
          '嘴上說沒事，心裡卻有點被丟下',
          'Nói không sao nhưng trong lòng cảm giác bị bỏ lại',
          'Bilang tidak apa-apa tapi merasa ditinggal'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '연애를 시작하려는 순간, 드는 솔직한 감정은?',
      'Right before starting a relationship, your honest feeling is…',
      '恋愛を始めようとする瞬間、正直な気持ちは？',
      '正要开始恋爱时，你真实的感受是？',
      '正要開始戀愛時，你真實的感受是？',
      'Khoảnh khắc sắp bắt đầu yêu, cảm xúc thật của bạn là…',
      'Saat akan memulai hubungan, perasaan jujurmu…'
    ),
    options: [
      {
        text: L(
          '설레고 기대된다. 잘 해나갈 수 있을 것 같다',
          'Excited and hopeful that it can work out',
          'ワクワクするし、うまくいきそう',
          '期待又兴奋，觉得能好好相处',
          '期待又興奮，覺得能好好相處',
          'Hồi hộp và tin mọi thứ sẽ ổn',
          'Bersemangat dan yakin bisa berjalan baik'
        ),
        score: 0,
      },
      {
        text: L(
          '이 사람이 나를 진심으로 좋아하는 게 맞는지 계속 확인하고 싶다',
          'Want to keep checking if they truly like you',
          '本当に好きかどうか、何度も確かめたくなる',
          '总想确认对方是不是真的喜欢你',
          '總想確認對方是不是真的喜歡你',
          'Muốn liên tục xác nhận họ có thật lòng không',
          'Ingin terus memastikan mereka benar-benar suka'
        ),
        score: 1,
      },
      {
        text: L(
          '괜히 시작했다가 상처받을까 봐 걱정된다',
          'Worry you will get hurt if you start',
          '始めたら傷つくんじゃないかと心配になる',
          '担心开始了反而会受伤',
          '擔心開始了反而會受傷',
          'Lo bị tổn thương nếu bắt đầu',
          'Khawatir akan terluka jika memulai'
        ),
        score: 2,
      },
      {
        text: L(
          '설레기도 하고 두렵기도 해서 감정 정리가 안 된다',
          'Both excited and scared — feelings are messy',
          '嬉しい気持ちと怖さが混ざって整理できない',
          '又期待又害怕，心情很乱',
          '又期待又害怕，心情很亂',
          'Vừa hồi hộp vừa sợ — cảm xúc rối bời',
          'Campur aduk antara semangat dan takut'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '싸우고 나서 화해할 때 나는?',
      'After a fight, when making up, you…',
      '喧嘩の後、仲直りするときあなたは？',
      '吵架后和好的过程中，你会？',
      '吵架後和好的過程中，你會？',
      'Sau khi cãi nhau, khi làm lành bạn…',
      'Setelah bertengkar, saat berbaikan kamu…'
    ),
    options: [
      {
        text: L(
          '솔직하게 내 감정을 말하고 상대 이야기도 잘 듣는다',
          'Share your feelings honestly and listen to them',
          '自分の気持ちを正直に言い、相手の話もよく聞く',
          '坦诚说出感受，也认真听对方',
          '坦誠說出感受，也認真聽對方',
          'Chia sẻ thành thật và lắng nghe đối phương',
          'Jujur tentang perasaan dan mendengarkan pasangan'
        ),
        score: 0,
      },
      {
        text: L(
          '상대가 먼저 연락해 오기 전까지 잠을 못 잔다',
          'Cannot sleep until they reach out first',
          '相手から連絡が来るまで眠れない',
          '对方不先联系就睡不着',
          '對方不先聯絡就睡不著',
          'Không ngủ được cho đến khi họ nhắn trước',
          'Tidak bisa tidur sampai mereka chat dulu'
        ),
        score: 1,
      },
      {
        text: L(
          '내가 먼저 연락하는 게 지는 것 같아서 기다린다',
          'Wait because reaching out first feels like losing',
          '先に連絡すると負けた気がして待つ',
          '觉得先联系就输了，所以等',
          '覺得先聯絡就輸了，所以等',
          'Chờ vì nhắn trước cảm giác như thua',
          'Menunggu karena mengira yang hubungi dulu kalah'
        ),
        score: 2,
      },
      {
        text: L(
          '화해하고 싶지만 어떻게 다가가야 할지 몰라 멍하니 있다',
          'Want to make up but freeze, not knowing how',
          '仲直りしたいけど、どう声をかけていいか分からず固まる',
          '想和好但不知道怎么做，只能发呆',
          '想和好但不知道怎麼做，只能發呆',
          'Muốn làm lành nhưng không biết bắt đầu sao',
          'Ingin berbaikan tapi bingung harus mulai dari mana'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '연인이 갑자기 "우리 잠깐 거리 좀 두자"고 했다면?',
      'If your partner suddenly says, “Let us take some space,” you…',
      '恋人に急に「少し距離を置こう」と言われたら？',
      '恋人突然说“我们冷静一下、拉开距离”，你会？',
      '戀人突然說「我們冷靜一下、拉開距離」，你會？',
      'Nếu người yêu đột nhiên nói “Ta tạm giữ khoảng cách”…',
      'Jika pasangan tiba-tiba bilang “Kita jarak dulu sebentar”…'
    ),
    options: [
      {
        text: L(
          '이유를 차분히 물어보고 서로 대화로 풀어나간다',
          'Calmly ask why and talk it through',
          '理由を落ち着いて聞き、話し合って解決する',
          '冷静问原因，用沟通解决',
          '冷靜問原因，用溝通解決',
          'Bình tĩnh hỏi lý do và trò chuyện thẳng thắn',
          'Tenang menanyakan alasan dan membicarakannya'
        ),
        score: 0,
      },
      {
        text: L(
          '식겠구나, 이별 신호인가, 최악의 상황을 상상한다',
          'Spiral into worst-case breakup thoughts',
          'もう終わりか、別れのサインかと最悪を想像する',
          '往分手、最坏情况想',
          '往分手、最壞情況想',
          'Tưởng tượng kịch bản chia tay tồi tệ nhất',
          'Membayangkan skenario putus terburuk'
        ),
        score: 1,
      },
      {
        text: L(
          '"그래, 나도 사실 좀 숨막혔어"라며 오히려 반긴다',
          'Almost relieved: “Yeah, I needed air too”',
          '「実は息苦しかった」と、むしろホッとする',
          '反而松口气：“其实我也觉得有点闷”',
          '反而鬆口氣：“其實我也覺得有點悶”',
          'Thấy nhẹ nhõm: “Ừ, mình cũng thấy ngột”',
          'Malah lega: “Iya, aku juga sesak”'
        ),
        score: 2,
      },
      {
        text: L(
          '버려지는 건 아닌지 극도로 불안하면서도 "알겠어"라고만 한다',
          'Panic inside but only say, “Okay”',
          '捨てられるんじゃと極度に不安だけど「わかった」と言う',
          '极度不安但只说“好”',
          '極度不安但只說「好」',
          'Cực lo nhưng chỉ nói “Ừ”',
          'Sangat cemas tapi hanya bilang “Oke”'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '상대가 나에게 깊은 고민을 털어놓을 때?',
      'When they open up about a deep worry, you…',
      '相手が深い悩みを打ち明けてきたら？',
      '对方向你倾诉很深的烦恼时，你会？',
      '對方向你傾訴很深的煩惱時，你會？',
      'Khi đối phương chia sẻ nỗi lo sâu sắc…',
      'Saat mereka curhat masalah berat…'
    ),
    options: [
      {
        text: L(
          '충분히 들어주고, 내 생각도 솔직하게 나눈다',
          'Listen fully and share your thoughts honestly',
          'しっかり聞き、自分の考えも正直に話す',
          '认真听，也坦诚说出想法',
          '認真聽，也坦誠說出想法',
          'Lắng nghe đầy đủ và chia sẻ thật lòng',
          'Mendengarkan penuh dan berbagi pendapat jujur'
        ),
        score: 0,
      },
      {
        text: L(
          '나를 그만큼 믿어주는구나, 더 잘해줘야지라고 생각한다',
          'Feel touched they trust you and want to do better',
          'こんなに信頼してくれている、もっと支えたいと思う',
          '觉得被信任了，想对TA更好',
          '覺得被信任了，想對TA更好',
          'Cảm động vì được tin và muốn tốt hơn',
          'Tersentuh karena dipercaya dan ingin lebih baik'
        ),
        score: 1,
      },
      {
        text: L(
          '부담스럽다. 너무 의존하는 것 같아 거리를 두고 싶어진다',
          'Feel burdened and want distance — it feels clingy',
          '重荷に感じ、依存が強すぎて距離を置きたくなる',
          '觉得有压力，想拉开距离',
          '覺得有壓力，想拉開距離',
          'Thấy nặng nề, muốn giữ khoảng cách',
          'Merasa tertekan dan ingin menjaga jarak'
        ),
        score: 2,
      },
      {
        text: L(
          '들어주고 싶은데 어떻게 반응해야 할지 몰라 어색하다',
          'Want to be there but feel awkward, unsure how to react',
          '聞いてあげたいのに、どう反応していいか分からず気まずい',
          '想安慰但不知道怎么回应，很尴尬',
          '想安慰但不知道怎麼回應，很尷尬',
          'Muốn an ủi nhưng không biết phản ứng sao',
          'Ingin mendengarkan tapi bingung bereaksi'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '연애 중 나만의 시간이 필요할 때, 나는?',
      'When you need alone time in a relationship, you…',
      '恋愛中に一人の時間が必要なとき、あなたは？',
      '恋爱中需要独处时间时，你会？',
      '戀愛中需要獨處時間時，你會？',
      'Khi cần thời gian riêng trong một mối quan hệ…',
      'Saat butuh waktu sendiri dalam hubungan…'
    ),
    options: [
      {
        text: L(
          '"나 오늘 혼자 쉬고 싶어"라고 편하게 말한다',
          'Comfortably say you want to rest alone today',
          '「今日は一人で休みたい」と気楽に言える',
          '会轻松说“今天想自己待着”',
          '會輕鬆說「今天想自己待著」',
          'Thoải mái nói “Hôm nay mình muốn ở một mình”',
          'Dengan nyaman bilang ingin sendiri hari ini'
        ),
        score: 0,
      },
      {
        text: L(
          '혼자 있고 싶은데 말하면 상대가 상처받을까 봐 참는다',
          'Hold it in, afraid they will be hurt if you say so',
          '一人になりたいけど、傷つけそうで言えない',
          '想独处但怕对方受伤，忍着不说',
          '想獨處但怕對方受傷，忍著不說',
          'Muốn ở một mình nhưng sợ làm tổn thương',
          'Ingin sendiri tapi takut menyakiti pasangan'
        ),
        score: 1,
      },
      {
        text: L(
          '말 안 해도 알아서 각자 시간을 보냈으면 한다',
          'Wish you each had space without having to say it',
          '言わなくても互いに時間を尊重してほしい',
          '希望不用说也能各自有空间',
          '希望不用說也能各自有空間',
          'Muốn không cần nói mà vẫn có không gian riêng',
          'Berharap punya ruang masing-masing tanpa harus jelaskan'
        ),
        score: 2,
      },
      {
        text: L(
          '혼자 있고 싶기도 하고 곁에 있어줬으면 하기도 해서 혼란스럽다',
          'Torn — you want both closeness and solitude',
          '一人になりたい気持ちとそばにいてほしい気持ちが混ざって混乱する',
          '又想独处又想对方在，很矛盾',
          '又想獨處又想對方在，很矛盾',
          'Vừa muốn một mình vừa muốn họ bên cạnh',
          'Bingung antara ingin sendiri dan ingin dekat'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '상대가 나에게 "사랑해"라고 말할 때 드는 감정은?',
      'When they say “I love you,” you feel…',
      '相手に「愛してる」と言われたときの気持ちは？',
      '对方说“我爱你”时，你的感受是？',
      '對方說「我愛你」時，你的感受是？',
      'Khi họ nói “Anh/chị yêu em”…',
      'Saat mereka bilang “Aku cinta kamu”…'
    ),
    options: [
      {
        text: L(
          '기쁘고 나도 자연스럽게 "나도"라고 답한다',
          'Happy and you naturally say it back',
          '嬉しくて自然に「私も」と返せる',
          '开心，也会自然回应',
          '開心，也會自然回應',
          'Vui và tự nhiên đáp lại',
          'Bahagia dan dengan mudah membalas'
        ),
        score: 0,
      },
      {
        text: L(
          '정말 진심인지 또 확인하고 싶어진다',
          'Want to verify again if they really mean it',
          '本気かどうか、また確かめたくなる',
          '又想确认是不是真心',
          '又想確認是不是真心',
          'Muốn kiểm tra lại xem có thật lòng không',
          'Ingin memastikan lagi apakah tulus'
        ),
        score: 1,
      },
      {
        text: L(
          '왠지 그 말이 무겁고 부담스럽게 느껴진다',
          'The words feel heavy and burdensome',
          'なんとなく重くてプレッシャーに感じる',
          '觉得这话有压力、沉重',
          '覺得這話有壓力、沉重',
          'Cảm thấy nặng nề và áp lực',
          'Merasa berat dan menekan'
        ),
        score: 2,
      },
      {
        text: L(
          '행복한데 동시에 언젠가 이 말을 후회할까 봐 무섭다',
          'Happy but scared you might regret this someday',
          '嬉しいけど、いつか後悔するんじゃないかと怖い',
          '幸福却又怕有一天会后悔这句话',
          '幸福卻又怕有一天會後悔這句話',
          'Vui nhưng sợ một ngày sẽ hối hận',
          'Bahagia tapi takut suatu saat menyesal'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '과거에 연애가 잘 안 풀렸던 이유를 떠올린다면?',
      'Looking back, why do you think past relationships failed?',
      '過去の恋愛がうまくいかなかった理由は？',
      '回想过去，你觉得恋爱不顺的原因是？',
      '回想過去，你覺得戀愛不順的原因是？',
      'Nhìn lại, bạn nghĩ tình cũ không thành vì…',
      'Menurutmu hubungan masa lalu gagal karena…'
    ),
    options: [
      {
        text: L(
          '서로 맞지 않았거나 타이밍이 안 맞았던 것 같다',
          'Probably bad fit or bad timing',
          '相性かタイミングの問題だった気がする',
          '性格不合或时机不对',
          '性格不合或時機不對',
          'Có lẽ không hợp hoặc sai thời điểm',
          'Mungkin tidak cocok atau timing salah'
        ),
        score: 0,
      },
      {
        text: L(
          '내가 너무 집착하거나 감정적으로 힘들게 했던 것 같다',
          'You were too clingy or emotionally intense',
          '自分が依存しすぎた、感情的にしんどくさせた',
          '自己太黏人或情绪上让人累',
          '自己太黏人或情緒上讓人累',
          'Mình quá bám víu hoặc làm đối phương mệt',
          'Terlalu melekat atau melelahkan secara emosi'
        ),
        score: 1,
      },
      {
        text: L(
          '상대가 너무 가까이 다가오려 해서 답답했던 것 같다',
          'They came too close too fast — it felt suffocating',
          '相手が近づきすぎて息苦しかった',
          '对方靠太近让人窒息',
          '對方靠太近讓人窒息',
          'Họ áp sát quá khiến ngột ngạt',
          'Mereka terlalu mendekat dan membuat sesak'
        ),
        score: 2,
      },
      {
        text: L(
          '내가 밀었다가 당겼다가 해서 상대를 혼란스럽게 한 것 같다',
          'You pushed and pulled and confused them',
          '近づいたり離れたりを繰り返して相手を混乱させた',
          '自己忽冷忽热让对方混乱',
          '自己忽冷忽熱讓對方混亂',
          'Lúc đẩy lúc kéo khiến họ rối',
          'Mendorong dan menarik sehingga membingungkan'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '연인과 사소한 갈등이 생겼을 때 가장 먼저 드는 생각은?',
      'With a small conflict, your first thought is…',
      '恋人とささいなトラブルが起きたとき、まず思うことは？',
      '和恋人发生小矛盾时，你最先想的是？',
      '和戀人發生小矛盾時，你最先想的是？',
      'Khi có mâu thuẫn nhỏ, ý nghĩ đầu tiên là…',
      'Saat konflik kecil, pikiran pertamamu…'
    ),
    options: [
      {
        text: L(
          '이야기하면 해결될 거야',
          'Talking will fix it',
          '話せば解決できる',
          '沟通就能解决',
          '溝通就能解決',
          'Nói chuyện sẽ ổn',
          'Ngobrol akan menyelesaikan'
        ),
        score: 0,
      },
      {
        text: L(
          '나 때문인가? 내가 잘못한 건가?',
          'Is it my fault? Did I do something wrong?',
          '自分のせい？何か悪いことをした？',
          '是不是我的错？',
          '是不是我的錯？',
          'Tại mình? Mình làm sai à?',
          'Salahku? Apa aku yang salah?'
        ),
        score: 1,
      },
      {
        text: L(
          '또 이런 거 신경써야 하나, 피곤하다',
          'Again? This is exhausting',
          'またこういうのか、疲れる',
          '又要为这些操心，好累',
          '又要為這些操心，好累',
          'Lại phải lo chuyện này — mệt quá',
          'Harus mikir lagi — capek'
        ),
        score: 2,
      },
      {
        text: L(
          '싸우기 싫은데 그렇다고 참기도 싫고, 어떻게 해야 하지',
          'You do not want to fight or swallow it — stuck',
          '喧嘩はしたくないけど、我慢もしたくない、どうすれば',
          '不想吵又不想忍，不知道怎么办',
          '不想吵又不想忍，不知道怎麼辦',
          'Không muốn cãi cũng không muốn nuốt — kẹt',
          'Tidak mau bertengkar tapi tidak mau menelan — bingung'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '연인이 SNS에 나 모르는 이성 친구와 찍은 사진을 올렸다면?',
      'If they post a photo with an opposite-sex friend you do not know…',
      '恋人がSNSに知らない異性の友達との写真を載せたら？',
      '恋人在社交平台发了和陌生异性朋友的合照，你会？',
      '戀人在社群平台發了和陌生異性朋友的合照，你會？',
      'Nếu người yêu đăng ảnh với bạn khác giới mà bạn không biết…',
      'Jika pasangan posting foto dengan lawan jenis yang tidak kamu kenal…'
    ),
    options: [
      {
        text: L(
          '친구겠거니 하고 넘긴다. 신뢰가 있으니까',
          'Assume they are just friends — you trust them',
          '友達だろうと流す。信頼があるから',
          '觉得是朋友，因为有信任',
          '覺得是朋友，因為有信任',
          'Cho là bạn — vì tin tưởng',
          'Anggap teman — ada kepercayaan'
        ),
        score: 0,
      },
      {
        text: L(
          '누구지? 댓글 다 뒤지고 상대한테 넌지시 물어본다',
          'Dig through comments and subtly ask who it is',
          '誰だろうとコメントをチェックして、さりげなく聞く',
          '翻评论，旁敲侧击问是谁',
          '翻評論，旁敲側擊問是誰',
          'Soi comment và hỏi khéo là ai',
          'Cek komentar dan tanya siapa itu'
        ),
        score: 1,
      },
      {
        text: L(
          '굳이 내가 확인할 필요 없다. 애초에 SNS를 잘 안 본다',
          'You barely use socials anyway — no need to check',
          'わざわざ確認しない。そもそもSNSを見ない',
          '本来也不怎么刷，不会特意看',
          '本來也不怎麼刷，不會特意看',
          'Ít dùng mạng xã hội nên không cần soi',
          'Jarang buka medsos — tidak perlu cek'
        ),
        score: 2,
      },
      {
        text: L(
          '신경 쓰이는데 물어봤다가 의심한다고 할까 봐 혼자 끙끙 앓는다',
          'It bothers you but you suffer in silence, fearing you will seem jealous',
          '気になるけど、疑うと言われそうで一人で悩む',
          '在意但不敢问，怕显得多疑',
          '在意但不敢問，怕顯得多疑',
          'Bực mình nhưng không dám hỏi vì sợ bị nói ghen',
          'Terganggu tapi diam karena takut dianggap cemburu'
        ),
        score: 3,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '이상적인 연애 관계를 한마디로 표현한다면?',
      'In one phrase, your ideal relationship is…',
      '理想の恋愛関係を一言で言うと？',
      '用一句话形容你理想中的恋爱关系？',
      '用一句話形容你理想中的戀愛關係？',
      'Một câu mô tả mối quan hệ lý tưởng của bạn…',
      'Satu kalimat untuk hubungan idealmu…'
    ),
    options: [
      {
        text: L(
          '함께 있어도 편하고, 떨어져 있어도 든든한 관계',
          'Comfortable together, secure apart',
          '一緒にいても楽で、離れていても安心できる関係',
          '在一起舒服，分开也安心',
          '在一起舒服，分開也安心',
          'Bên nhau thoải mái, xa nhau vẫn tin cậy',
          'Nyaman bersama, tenang saat berjauhan'
        ),
        score: 0,
      },
      {
        text: L(
          '항상 서로가 최우선이고 늘 곁에 있어주는 관계',
          'Always each other’s priority — always close by',
          '常に最優先で、いつもそばにいる関係',
          '彼此永远是第一位，总在身边',
          '彼此永遠是第一位，總在身邊',
          'Luôn ưu tiên nhau và luôn bên cạnh',
          'Selalu prioritas dan selalu dekat'
        ),
        score: 1,
      },
      {
        text: L(
          '서로의 독립성을 존중하고 적당한 거리가 있는 관계',
          'Respect independence with healthy distance',
          'お互いの自立を尊重し、適度な距離がある関係',
          '尊重彼此独立，有适当距离',
          '尊重彼此獨立，有適當距離',
          'Tôn trọng độc lập và khoảng cách vừa phải',
          'Menghargai independensi dan jarak sehat'
        ),
        score: 2,
      },
      {
        text: L(
          '솔직히 잘 모르겠다. 가까우면 무섭고 멀면 불안하다',
          'Honestly unsure — close feels scary, far feels anxious',
          '正直よく分からない。近いと怖く、遠いと不安',
          '说不清，近了怕，远了慌',
          '說不清，近了怕，遠了慌',
          'Không rõ — gần thì sợ, xa thì lo',
          'Bingung — dekat menakutkan, jauh membuat cemas'
        ),
        score: 3,
      },
    ],
  },
];

export const phase3AttachmentLoveResults: Phase3AttachmentLoveResult[] = [
  {
    type: 'Type1',
    emoji: '🌿',
    title: L(
      '사랑에 능숙한, 안정 애착형',
      'Secure attachment — at ease with love',
      '愛に安定した、安全型アタッチメント',
      '擅长恋爱的安全型依恋',
      '擅長戀愛的安全型依戀',
      'Gắn bó an toàn — thoải mái với tình yêu',
      'Ikatan aman — nyaman dengan cinta'
    ),
    shortDescription: L(
      '"연애가 원래 이렇게 편한 건가요?"',
      '“Is love supposed to feel this easy?”',
      '「恋愛って、こんなに楽なもの？」',
      '“恋爱原来可以这么轻松吗？”',
      '「戀愛原來可以這麼輕鬆嗎？」',
      '“Yêu đương có thể nhẹ nhàng thế này sao?”',
      '“Apakah cinta memang bisa sesederhana ini?”'
    ),
    description: L(
      '당신은 애착 유형 중 가장 건강한 안정형에 해당합니다. 자신을 사랑할 줄 알고, 상대도 믿을 줄 알아서 연애를 있는 그대로 즐길 수 있습니다. 갈등이 생겨도 회피하거나 폭발하지 않고 대화로 풀어나가는 능력을 갖추고 있습니다. 누군가의 연인이 되는 것 자체가 행운인 타입입니다.',
      'You lean toward a healthy secure attachment. You can love yourself and trust a partner, so you enjoy dating as it is. When conflict appears, you tend to talk it through rather than withdraw or explode. Partners often feel lucky to be with you.',
      'あなたは最も健全な安全型に近いです。自分を大切にでき、相手も信じられるので恋を自然に楽しめます。対立しても逃げたり爆発したりせず、対話で解決しようとします。恋人にとって安心できる存在です。',
      '你接近健康的安全型依恋。懂得自爱也懂得信任对方，能享受恋爱本身。发生冲突时倾向于沟通解决，而不是逃避或爆发。对伴侣来说你是很安心的存在。',
      '你接近健康的安全型依戀。懂得自愛也懂得信任對方，能享受戀愛本身。發生衝突時傾向於溝通解決，而不是逃避或爆發。對伴侶來說你是很安心的存在。',
      'Bạn gần với gắn bó an toàn lành mạnh. Biết yêu bản thân và tin đối phương nên tận hưởng yêu đương. Khi mâu thuẫn, bạn thường trò chuyện thay vì trốn tránh hay bùng nổ.',
      'Kamu mendekati ikatan aman yang sehat. Bisa mencintai diri dan mempercayai pasangan, menikmati hubungan. Saat konflik, cenderung bicara jujur daripada menarik diri atau meledak.'
    ),
    empathyLevel: L(
      '안정형 (Secure)',
      'Secure',
      '安全型 (Secure)',
      '安全型 (Secure)',
      '安全型 (Secure)',
      'An toàn (Secure)',
      'Aman (Secure)'
    ),
    characteristics: L(
      '감정 표현 자연스러움 · 신뢰와 독립성의 균형',
      'Natural emotional expression · balance of trust and independence',
      '感情表現が自然 · 信頼と自立のバランス',
      '情绪表达自然 · 信任与独立平衡',
      '情緒表達自然 · 信任與獨立平衡',
      'Thể hiện cảm xúc tự nhiên · cân bằng tin cậy và độc lập',
      'Ekspresi emosi alami · keseimbangan kepercayaan dan independensi'
    ),
    goodMatch: L(
      'Type 2 (불안형 — 일관된 사랑으로 안정감을 줄 수 있음)',
      'Type 2 (Anxious — your steady love can soothe them)',
      'Type 2（不安型—一貫した愛で安心感を与えられる）',
      'Type 2（焦虑型——稳定的爱能安抚对方）',
      'Type 2（焦慮型——穩定的愛能安撫對方）',
      'Type 2 (Lo lắng — tình yêu ổn định của bạn có thể an ủi họ)',
      'Type 2 (Cemas — cinta stabilmu bisa menenangkan mereka)'
    ),
    badMatch: L(
      'Type 4 (회피형 — 벽이 느껴져서 답답함)',
      'Type 4 (Avoidant — their walls can feel frustrating)',
      'Type 4（回避型—壁を感じてもどかしい）',
      'Type 4（回避型——容易感到有隔阂）',
      'Type 4（迴避型——容易感到有隔閡）',
      'Type 4 (Tránh né — tường rào khiến bạn nghẹt thở)',
      'Type 4 (Menghindar — terasa berjarak dan membuat frustrasi)'
    ),
  },
  {
    type: 'Type2',
    emoji: '😟',
    title: L(
      '사랑이 불안한, 불안 애착형',
      'Anxious attachment — love feels scary',
      '愛が不安な、不安型アタッチメント',
      '在爱情里容易焦虑的依恋型',
      '在愛情裡容易焦慮的依戀型',
      'Gắn bó lo âu — yêu mà vẫn sợ',
      'Ikatan cemas — cinta terasa menakutkan'
    ),
    shortDescription: L(
      '"좋아할수록 더 무서워요."',
      '“The more I like them, the scarier it gets.”',
      '「好きになるほど怖くなる」',
      '“越喜欢越害怕。”',
      '「越喜歡越害怕。」',
      '“Càng thích càng sợ.”',
      '“Semakin suka, semakin takut.”'
    ),
    description: L(
      '당신은 상대를 깊이 사랑하지만, 그만큼 잃을까 봐 늘 불안합니다. 연락이 조금만 늦어도 최악의 상황을 먼저 떠올리고, 상대의 반응 하나하나에 의미를 부여합니다. 집착처럼 보일 수 있지만, 사실은 누구보다 진심으로 사랑하고 인정받고 싶은 마음이 큰 타입입니다. 어릴 때 일관성 없는 돌봄을 경험했을 가능성이 있습니다.',
      'You love deeply but fear loss — a late reply can spiral into worst-case thinking, and you read into every reaction. It may look clingy, but it comes from sincere love and a need to feel chosen. Inconsistent care in childhood may play a role.',
      '深く愛するほど失うのが怖く、返信が遅いだけで最悪を想像しがちです。反応一つ一つに意味を見出します。執着に見えることもありますが、本気で愛し、認められたい気持ちが強いタイプです。幼少期の不安定な養育の影響も考えられます。',
      '你爱得很深，却害怕失去——回复慢一点就容易往坏处想，过度解读对方的反应。可能显得黏人，但背后是真心与渴望被肯定。童年照顾若不稳定，也可能与此有关。',
      '你愛得很深，卻害怕失去——回覆慢一點就容易往壞處想，過度解讀對方的反應。可能顯得黏人，但背後是真心與渴望被肯定。童年照顧若不穩定，也可能與此有關。',
      'Bạn yêu sâu nhưng sợ mất — tin nhắn chậm cũng khiến bạn nghĩ tới điều tồi tệ nhất. Có thể trông bám víu nhưng xuất phát từ tình yêu chân thành và nhu cầu được chọn.',
      'Kamu mencinta dalam tapi takut kehilangan — balasan lambat bisa memicu pikiran terburuk. Terlihat melekat, tapi itu datang dari cinta tulus dan ingin dipilih.'
    ),
    empathyLevel: L(
      '불안형 (Anxious)',
      'Anxious',
      '不安型 (Anxious)',
      '焦虑型 (Anxious)',
      '焦慮型 (Anxious)',
      'Lo âu (Anxious)',
      'Cemas (Anxious)'
    ),
    characteristics: L(
      '연락 확인 강박 · 과도한 눈치 · 감정 기복',
      'Need for reassurance · over-reading cues · mood swings',
      '連絡確認へのこだわり · 過読み · 気分の波',
      '反复确认联系 · 过度解读 · 情绪波动',
      '反覆確認聯絡 · 過度解讀 · 情緒波動',
      'Cần được trấn an · đọc quá kỹ · thất thường cảm xúc',
      'Perlu kepastian · membaca berlebihan · mood naik turun'
    ),
    goodMatch: L(
      'Type 1 (안정형 — 일관된 사랑으로 불안을 줄여줌)',
      'Type 1 (Secure — steady love eases your anxiety)',
      'Type 1（安全型—一貫した愛が不安を和らげる）',
      'Type 1（安全型——稳定的爱能减轻不安）',
      'Type 1（安全型——穩定的愛能減輕不安）',
      'Type 1 (An toàn — tình yêu ổn định xoa dịu lo lắng)',
      'Type 1 (Aman — cinta stabil meredakan kecemasan)'
    ),
    badMatch: L(
      'Type 4 (회피형 — 밀어냄에 더 불안해짐)',
      'Type 4 (Avoidant — distance triggers more anxiety)',
      'Type 4（回避型—距離を取られるとさらに不安）',
      'Type 4（回避型——越推越焦虑）',
      'Type 4（迴避型——越推越焦慮）',
      'Type 4 (Tránh né — khoảng cách làm lo hơn)',
      'Type 4 (Menghindar — jarak memicu kecemasan lebih)'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌀',
    title: L(
      '사랑하면서도 도망가는, 불안-회피 혼합형',
      'Anxious-avoidant mix — pulled in two directions',
      '愛しながら逃げる、不安・回避混合型',
      '既渴望又逃避的焦虑-回避混合型',
      '既渴望又逃避的焦慮-迴避混合型',
      'Pha trộn lo âu-tránh né — kéo giữa hai cực',
      'Campuran cemas-hindar — tertarik sekaligus lari'
    ),
    shortDescription: L(
      '"좋아하는데 왜 자꾸 도망가고 싶지?"',
      '“I like them — so why do I keep wanting to run?”',
      '「好きなのに、なぜ逃げたくなるの？」',
      '“喜欢却又总想逃？”',
      '「喜歡卻又總想逃？」',
      '“Thích mà sao cứ muốn chạy?”',
      '“Suka tapi kok ingin lari?”'
    ),
    description: L(
      '당신은 불안형과 회피형의 특성을 모두 가진 혼합 유형입니다. 가까워지면 불안하고, 멀어지면 또 무서운 양가감정이 연애를 복잡하게 만듭니다. 상대를 밀어냈다가 그리워하고, 다가갔다가 또 움츠러드는 패턴이 반복됩니다. 당신도 힘들고 상대도 혼란스러운 타입입니다.',
      'You blend anxious and avoidant patterns: closeness stirs fear, distance stirs fear too. You may push away, then miss them; approach, then pull back. It is hard for you and confusing for partners.',
      '不安と回避の両方の傾向があります。近づくと不安、離れると寂しい——揺れ動く恋になりがちです。押して引くを繰り返し、自分も相手も疲れやすいタイプです。',
      '你同时带有焦虑与回避倾向：近了不安，远了又慌。容易忽冷忽热，自己和对方都辛苦。',
      '你同時帶有焦慮與迴避傾向：近了不安，遠了又慌。容易忽冷忽熱，自己和對方都辛苦。',
      'Bạn kết hợp lo âu và tránh né: gần thì sợ, xa cũng sợ. Dễ đẩy rồi nhớ, lại gần rồi lùi — khó cho cả hai.',
      'Kamu menggabungkan cemas dan menghindar: dekat menakutkan, jauh juga tidak tenang. Pola dorong-tarik membingungkan pasangan.'
    ),
    empathyLevel: L(
      '불안-회피 혼합형 (Anxious-Avoidant Mix)',
      'Anxious-avoidant mix',
      '不安・回避混合型',
      '焦虑-回避混合型',
      '焦慮-迴避混合型',
      'Pha trộn lo âu – tránh né',
      'Campuran cemas-hindar'
    ),
    characteristics: L(
      '밀당처럼 보이지만 본인도 감정을 모름 · 감정 소진 큼',
      'Looks like games — but you are confused too · emotional drain',
      '駆け引きに見えるが本人も混乱 · 消耗が大きい',
      '像推拉游戏，但自己也混乱 · 很耗心力',
      '像推拉遊戲，但自己也混亂 · 很耗心力',
      'Giống giằng co nhưng bản thân cũng rối · kiệt sức cảm xúc',
      'Seperti tarik-ulur tapi kamu sendiri bingung · sangat menguras'
    ),
    goodMatch: L(
      'Type 1 (안정형 — 일관된 태도로 혼란을 줄여줌)',
      'Type 1 (Secure — consistency reduces the chaos)',
      'Type 1（安全型—一貫した態度が混乱を減らす）',
      'Type 1（安全型——稳定态度能减少混乱）',
      'Type 1（安全型——穩定態度能減少混亂）',
      'Type 1 (An toàn — sự nhất quán giảm hỗn loạn)',
      'Type 1 (Aman — konsistensi mengurangi kekacauan)'
    ),
    badMatch: L(
      'Type 4 (회피형 — 둘 다 벽을 치면 연애 자체가 안 됨)',
      'Type 4 (Avoidant — two walls make connection hard)',
      'Type 4（回避型—両方が壁だと繋がりにくい）',
      'Type 4（回避型——两道墙更难靠近）',
      'Type 4（迴避型——兩道牆更難靠近）',
      'Type 4 (Tránh né — hai bức tường khó kết nối)',
      'Type 4 (Menghindar — dua tembok sulit terhubung)'
    ),
  },
  {
    type: 'Type4',
    emoji: '🧊',
    title: L(
      '가까워지면 숨막히는, 회피 애착형',
      'Avoidant attachment — closeness feels tight',
      '近づくと息苦しい、回避型アタッチメント',
      '靠近就觉得闷的回避型依恋',
      '靠近就覺得悶的迴避型依戀',
      'Gắn bó tránh né — gần quá thấy ngột',
      'Ikatan menghindar — dekat terasa sesak'
    ),
    shortDescription: L(
      '"혼자가 편한데, 가끔은 외롭긴 해요."',
      '“Alone feels safe — though sometimes lonely.”',
      '「一人が楽。でもたまに寂しい」',
      '“独处更自在，偶尔也会孤单。”',
      '「獨處更自在，偶爾也會孤單。」',
      '“Ở một mình thoải mái — đôi khi cô đơn.”',
      '“Sendiri lebih nyaman — kadang sepi.”'
    ),
    description: L(
      '당신은 독립적으로 보이지만 사실 친밀감 자체를 부담스러워합니다. 누군가가 너무 가까이 다가오면 답답하고 자유를 침해당하는 느낌이 듭니다. 감정을 드러내는 것이 약해 보인다고 생각해서 무의식적으로 억누릅니다. 어릴 때 감정 표현이 억압되거나 무시당한 경험이 영향을 주었을 수 있습니다.',
      'You may seem independent, yet intimacy itself can feel heavy. When someone gets too close, it can feel suffocating or like your freedom is squeezed. Showing feelings may feel like weakness, so you hold back. Childhood experiences of dismissed emotions may contribute.',
      '自立に見えますが、親密さそのものが負担になりやすいです。近づかれると息苦しく、自由を奪われる感覚があります。感情を出すことは弱さに見えると抑えがちです。幼少期に感情が否定された経験の影響もあり得ます。',
      '你看起来独立，却对亲密本身感到负担。靠太近会觉得闷、像被束缚。可能下意识压抑情绪，觉得示弱不好。童年情绪被否定也可能有影响。',
      '你看起來獨立，卻對親密本身感到負擔。靠太近會覺得悶、像被束縛。可能下意識壓抑情緒，覺得示弱不好。童年情緒被否定也可能有影響。',
      'Bạn có vẻ độc lập nhưng thân mật có thể nặng nề. Ai áp sát quá khiến ngột hoặc mất tự do. Bạn có thể kìm cảm xúc vì sợ yếu đuối.',
      'Kamu terlihat mandiri tapi keintiman terasa memberatkan. Terlalu dekat terasa sesak. Menyimpan emosi karena takut terlihat lemah.'
    ),
    empathyLevel: L(
      '회피형 (Avoidant)',
      'Avoidant',
      '回避型 (Avoidant)',
      '回避型 (Avoidant)',
      '迴避型 (Avoidant)',
      'Tránh né (Avoidant)',
      'Menghindar (Avoidant)'
    ),
    characteristics: L(
      '연락 뜸함 · 감정 표현 서툼 · 거리 두기',
      'Less frequent contact · guarded feelings · keeping distance',
      '連絡が少なめ · 感情表現がぎこちない · 距離を置く',
      '联系偏少 · 不擅表达情绪 · 习惯保持距离',
      '聯絡偏少 · 不擅表達情緒 · 習慣保持距離',
      'Liên lạc thưa · khó bày tỏ · giữ khoảng cách',
      'Jarang kontak · sulit ungkapkan emosi · menjaga jarak'
    ),
    goodMatch: L(
      'Type 1 (안정형 — 적절한 거리를 유지해 줌)',
      'Type 1 (Secure — can respect space without punishing closeness)',
      'Type 1（安全型—適度な距離を尊重できる）',
      'Type 1（安全型——能尊重适当距离）',
      'Type 1（安全型——能尊重適當距離）',
      'Type 1 (An toàn — tôn trọng khoảng cách hợp lý)',
      'Type 1 (Aman — menghargai jarak tanpa memaksa)'
    ),
    badMatch: L(
      'Type 2 (불안형 — 더 집착하게 만들어서 서로 지침)',
      'Type 2 (Anxious — pursuit can exhaust both of you)',
      'Type 2（不安型—追いすぎてお互い疲れる）',
      'Type 2（焦虑型——越追越累）',
      'Type 2（焦慮型——越追越累）',
      'Type 2 (Lo lắng — đuổi theo khiến cả hai kiệt sức)',
      'Type 2 (Cemas — mengejar membuat keduanya lelah)'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌪️',
    title: L(
      '사랑이 두렵고 낯선, 혼란 애착형',
      'Disorganized attachment — love feels unsafe',
      '愛が怖くてよく分からない、混乱型アタッチメント',
      '既渴望又怕的混乱型依恋',
      '既渴望又怕的混亂型依戀',
      'Gắn bó hỗn loạn — yêu mà không an toàn',
      'Ikatan tidak teratur — cinta terasa tidak aman'
    ),
    shortDescription: L(
      '"사랑받고 싶은데, 사랑이 무서워요."',
      '“I want love — but love terrifies me.”',
      '「愛されたいのに、愛が怖い」',
      '“想被爱，却又怕爱。”',
      '「想被愛，卻又怕愛。」',
      '“Muốn được yêu — nhưng yêu lại đáng sợ.”',
      '“Ingin dicintai — tapi cinta menakutkan.”'
    ),
    description: L(
      '당신은 가장 복잡한 애착 유형인 혼란형에 가깝습니다. 사랑받고 싶은 욕구가 강하지만 동시에 상처받을 것이 무서워서 스스로도 이해하기 어려운 감정 패턴을 보입니다. 상대를 밀어내고 후회하고, 다가가고 또 무서워하는 루프가 반복됩니다. 연애가 힘든 게 당신 잘못이 아닙니다. 단지 아직 안전한 사랑의 경험이 더 필요한 상태입니다.',
      'You are close to a disorganized pattern: a strong wish to be loved paired with fear of being hurt, which can confuse even you. Push-away regret, approach-fear loops are common. Struggling here is not a moral failure — you may need more experiences of safe, steady love.',
      '複雑な混乱型に近いです。愛されたいのに傷つくのが怖く、自分でも整理しづらい感情になりがちです。押して引いてを繰り返します。あなたが悪いのではなく、安全な愛の経験がもっと必要な状態かもしれません。',
      '你接近混乱型：渴望被爱又害怕受伤，连自己都难理清情绪。容易在推开与后悔、靠近与害怕之间循环。这不是你的错，只是还需要更多“安全的爱”的体验。',
      '你接近混亂型：渴望被愛又害怕受傷，連自己都難理清情緒。容易在推開與後悔、靠近與害怕之間循環。這不是你的錯，只是還需要更多「安全的愛」的體驗。',
      'Bạn gần kiểu hỗn loạn: khao khát được yêu nhưng sợ bị tổn thương — cảm xúc khó hiểu cả với chính mình. Lặp lại đẩy-rút. Đây không phải lỗi của bạn.',
      'Kamu dekat pola tidak teratur: ingin dicintai tapi takut disakiti — emosi membingungkan. Siklus dorong-menarik. Ini bukan kesalahanmu.'
    ),
    empathyLevel: L(
      '혼란형 (Disorganized)',
      'Disorganized',
      '混乱型 (Disorganized)',
      '混乱型 (Disorganized)',
      '混亂型 (Disorganized)',
      'Hỗn loạn (Disorganized)',
      'Tidak teratur (Disorganized)'
    ),
    characteristics: L(
      '감정 기복 · 연애에 대한 두려움 · 자기혐오 경향',
      'Emotional swings · fear in relationships · harsh self-judgment',
      '気分の波 · 恋愛への恐怖 · 自己否定しやすい',
      '情绪波动 · 害怕恋爱 · 容易自我否定',
      '情緒波動 · 害怕戀愛 · 容易自我否定',
      'Thất thường · sợ yêu đương · tự trách nặng',
      'Mood naik turun · takut hubungan · menyalahkan diri'
    ),
    goodMatch: L(
      'Type 1 (안정형 — 일관되고 따뜻한 사람이 필요함)',
      'Type 1 (Secure — someone steady and warm helps)',
      'Type 1（安全型—一貫して温かい相手が合う）',
      'Type 1（安全型——需要稳定温暖的人）',
      'Type 1（安全型——需要穩定溫暖的人）',
      'Type 1 (An toàn — người ổn định và ấm áp giúp ích)',
      'Type 1 (Aman — orang yang stabil dan hangat membantu)'
    ),
    badMatch: L(
      'Type 4 (회피형 — 불안을 자극해 더 무너짐)',
      'Type 4 (Avoidant — distance can deepen the spiral)',
      'Type 4（回避型—距離が不安を増やす）',
      'Type 4（回避型——距离会加剧不安）',
      'Type 4（迴避型——距離會加劇不安）',
      'Type 4 (Tránh né — khoảng cách làm lo hơn)',
      'Type 4 (Menghindar — jarak memperburuk spiral)'
    ),
  },
  {
    type: 'Type6',
    emoji: '💔',
    title: L(
      '사랑 자체가 공포인, 극도의 혼란 애착형',
      'Fearful-disorganized — love itself feels dangerous',
      '愛そのものが怖い、極度の混乱型',
      '极度混乱型——爱本身像威胁',
      '極度混亂型——愛本身像威脅',
      'Cực độ hỗn loạn — tình yêu như mối đe dọa',
      'Sangat tidak teratur — cinta terasa berbahaya'
    ),
    shortDescription: L(
      '"나는 그냥 사랑에 맞지 않는 사람인 것 같아요."',
      '“Maybe I am just not built for love.”',
      '「私は恋愛に向いてないのかも」',
      '“我好像不适合恋爱。”',
      '「我好像不適合戀愛。」',
      '“Có lẽ mình không hợp để yêu.”',
      '“Mungkin aku memang tidak cocok untuk cinta.”'
    ),
    description: L(
      '당신은 혼란 애착의 가장 극단적인 상태에 있습니다. 연애에 대한 두려움이 너무 커서 시작 자체를 회피하거나, 시작해도 극심한 감정 혼란으로 스스로 망가뜨리는 패턴을 반복합니다. 사랑받는 것이 낯설고, 좋은 사람이 나타나도 믿지 못합니다. 이 결과가 나왔다면 연애보다 먼저 나 자신을 돌보는 시간이 필요합니다. 전문가의 도움도 용기 있는 선택입니다.',
      'You may be at the extreme end: fear of relationships is so large that you avoid starting, or you start and overwhelm yourself with chaos. Being loved can feel unfamiliar; even good partners can feel impossible to trust. If this fits, prioritize caring for yourself first — professional support can be a brave and wise step.',
      '極度の混乱に近い状態です。怖さが大きすぎて始められない、または始めても感情が荒れてしまうパターンがあります。愛されることに慣れず、良い相手でも信じにくいかもしれません。まずは自分をケアすることが先です。専門家の支援も選択肢です。',
      '你可能处于较极端的混乱状态：对恋爱恐惧太大，要么不敢开始，要么开始后情绪失控。被爱很陌生，好的人也难以相信。若如此，请先照顾自己，寻求专业帮助也是勇敢的选择。',
      '你可能處於較極端的混亂狀態：對戀愛恐懼太大，要麼不敢開始，要麼開始後情緒失控。被愛很陌生，好的人也難以相信。若如此，請先照顧自己，尋求專業幫助也是勇敢的選擇。',
      'Bạn có thể ở cực đoan: sợ yêu quá mức nên tránh bắt đầu, hoặc bắt đầu rồi hỗn loạn. Được yêu lạ lẫm; khó tin cả người tốt. Hãy chăm sóc bản thân trước — hỗ trợ chuyên gia là lựa chọn dũng cảm.',
      'Kamu mungkin di ujung ekstrem: terlalu takut untuk memulai, atau mulai lalu kacau. Dicintai terasa asing; sulit percaya. Utamakan perawatan diri — bantuan profesional adalah langkah berani.'
    ),
    empathyLevel: L(
      '극도의 혼란형 (Fearful-Disorganized)',
      'Fearful-disorganized',
      '極度の混乱型 (Fearful-Disorganized)',
      '极度混乱型 (Fearful-Disorganized)',
      '極度混亂型 (Fearful-Disorganized)',
      'Cực độ hỗn loạn (Fearful-Disorganized)',
      'Sangat takut-tidakteratur (Fearful-Disorganized)'
    ),
    characteristics: L(
      '연애 회피 · 감정 해리 · 강한 자기비난',
      'Avoiding relationships · emotional overwhelm · harsh self-blame',
      '恋愛回避 · 感情の混乱 · 強い自己否定',
      '回避恋爱 · 情绪失控 · 强烈自我否定',
      '迴避戀愛 · 情緒失控 · 強烈自我否定',
      'Tránh yêu đương · choáng ngợp cảm xúc · tự trách nặng',
      'Menghindar hubungan · kewalahan emosi · menyalahkan diri'
    ),
    goodMatch: L(
      '지금은 나 자신 (먼저 나를 돌봐야 할 시간)',
      'Yourself first — time to heal and stabilize',
      '今は自分自身（まず自分をケアする時間）',
      '先照顾好自己（疗愈与稳定优先）',
      '先照顧好自己（療癒與穩定優先）',
      'Bản thân trước — thời gian để chữa lành',
      'Diri sendiri dulu — waktu untuk pulih'
    ),
    badMatch: L(
      '모든 연애 상황 (지금은 회복이 먼저)',
      'Any intense dating situation — recovery comes first',
      '今はどんな恋愛より回復が先',
      '任何恋爱情境（此刻先恢复）',
      '任何戀愛情境（此刻先恢復）',
      'Mọi tình huống yêu đương — hồi phục trước',
      'Situasi apa pun — pemulihan dulu'
    ),
  },
];

export function calculatePhase3AttachmentLoveResult(answers: number[]): string {
  const total = answers.reduce((sum, s) => sum + s, 0);
  if (total <= 5) return 'Type1';
  if (total <= 11) return 'Type2';
  if (total <= 19) return 'Type3';
  if (total <= 27) return 'Type4';
  if (total <= 33) return 'Type5';
  return 'Type6';
}
