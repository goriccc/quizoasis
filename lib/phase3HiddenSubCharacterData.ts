/** 본캐 말고! 나의 부캐 찾기 — A=0점(외향), B=1점(내향) 합산 → 6유형 */

function L(
  ko: string,
  en: string,
  ja: string,
  zhCN: string,
  zhTW: string,
  vi: string,
  id: string
): Record<string, string> {
  return { ko, en, ja, 'zh-CN': zhCN, 'zh-TW': zhTW, vi, id };
}

export interface Phase3HiddenSubCharacterQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3HiddenSubCharacterResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  subName: Record<string, string>;
  subSkill: Record<string, string>;
  triggerCondition: Record<string, string>;
  triggerRate: Record<string, string>;
  mainSkills: Record<string, string>;
  disappearCondition: Record<string, string>;
  gapLevel: Record<string, string>;
  oneLiner: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export const phase3HiddenSubCharacterQuestions: Phase3HiddenSubCharacterQuestion[] = [
  {
    id: 1,
    question: L(
      '아무도 없는 집에서 혼자 있을 때 나는?',
      'When I’m home alone with nobody around, I…',
      '誰もいない家でひとりのとき、私は？',
      '家里没人、独自在家时，我会？',
      '家裡沒人、獨自在家時，我會？',
      'Khi ở nhà một mình và không ai ở đó, tôi thường…',
      'Saat sendirian di rumah tanpa orang lain, aku biasanya…'
    ),
    options: [
      {
        text: L(
          '좋아하는 음악을 틀고 혼자 춤추거나 노래를 부른다',
          'I blast my favorite music and dance or sing by myself',
          '好きな音楽をかけてひとりで踊ったり歌ったりする',
          '放喜欢的音乐，独自跳舞或唱歌',
          '放喜歡的音樂，獨自跳舞或唱歌',
          'Bật nhạc yêu thích và nhảy hoặc hát một mình',
          'Memutar musik favorit dan menari atau bernyanyi sendiri'
        ),
        score: 0,
      },
      {
        text: L(
          '혼자 중얼거리거나 상상 속 대화를 나누고 있다',
          'I mumble to myself or have imaginary conversations',
          'ひとりでつぶやいたり、頭の中で会話のシミュレーションをしている',
          '自己嘟囔或在心里想象对话',
          '自己嘟囔或在心裡想像對話',
          'Tự lẩm bẩm hoặc đối thoại trong đầu',
          'Bergumam sendiri atau berdialog dalam imajinasi'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: L(
      '술자리나 편안한 모임에서 내가 자주 하는 것은?',
      'At drinks or chill hangouts, I often…',
      '飲み会やリラックスした集まりで、私がよくすることは？',
      '在酒局或轻松的聚会里，我经常？',
      '在酒局或輕鬆的聚會裡，我經常？',
      'Ở tiệc rượu hoặc buổi gặp thân mật, tôi thường…',
      'Di pesta minum atau kumpul santai, aku sering…'
    ),
    options: [
      {
        text: L(
          '분위기를 띄우고 웃기는 말로 좌중을 장악한다',
          'Hype the room and own it with jokes',
          '場を盛り上げて、笑いでみんなの中心になる',
          '炒热气氛，用搞笑掌控全场',
          '炒熱氣氛，用搞笑掌控全場',
          'Làm không khí sôi động và thống trị bằng hài hước',
          'Mengangkat suasana dan menguasai ruangan dengan lelucon'
        ),
        score: 0,
      },
      {
        text: L(
          '평소엔 안 하던 진지한 인생 얘기나 철학 토론을 시작한다',
          'Start deep life talks or mini philosophy debates I rarely do otherwise',
          '普段はしないような真面目な人生トークや哲学討論を始める',
          '聊起平时不常聊的人生话题或小型哲学讨论',
          '聊起平時不常聊的人生話題或小型哲學討論',
          'Bắt đầu nói chuyện đời hoặc triết học hiếm khi làm',
          'Memulai obrolan hidup atau filosofi yang jarang kulakukan'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: L(
      '좋아하는 것에 대해 이야기할 때 나는?',
      'When I talk about something I love, I…',
      '好きなことを話すときの私は？',
      '聊到喜欢的事物时，我会？',
      '聊到喜歡的事物時，我會？',
      'Khi nói về thứ mình yêu thích, tôi…',
      'Saat membicarakan hal yang kusuka, aku…'
    ),
    options: [
      {
        text: L(
          '말이 빨라지고 눈이 빛나며 전문가처럼 설명한다',
          'Talk faster, eyes light up, explain like a pro',
          '話が早くなり目が輝き、プロみたいに説明する',
          '语速变快、眼睛发亮，像专家一样讲解',
          '語速變快、眼睛發亮，像專家一樣講解',
          'Nói nhanh hơn, mắt sáng lên, giải thích như chuyên gia',
          'Berbicara lebih cepat, mata berbinar, menjelaskan seperti ahli'
        ),
        score: 0,
      },
      {
        text: L(
          '갑자기 조용해지거나 반대로 엄청난 열변을 토한다',
          'Go quiet—or suddenly go on a huge passionate rant',
          '急に静かになるか、逆に熱弁をふるう',
          '突然安静，或反过来长篇大论',
          '突然安靜，或反過來長篇大論',
          'Đột nhiên im lặng—hoặc ngược lại nói một tràng dài',
          'Tiba-tiba diam—atau sebaliknya meluncurkan pidato panjang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: L(
      '마감이나 급한 상황이 닥쳤을 때 나는?',
      'When a deadline or crisis hits, I…',
      '締切やピンチが来たときの私は？',
      '截稿或紧急情况来临时，我会？',
      '截稿或緊急情況來臨時，我會？',
      'Khi deadline hoặc khủng hoảng ập đến, tôi…',
      'Saat deadline atau krisis datang, aku…'
    ),
    options: [
      {
        text: L(
          '갑자기 집중력이 폭발해서 평소보다 훨씬 빠르게 처리한다',
          'Hyper-focus and finish way faster than usual',
          '集中力が爆発して、いつもよりずっと速く処理する',
          '专注力爆发，比平时快很多搞定',
          '專注力爆發，比平時快很多搞定',
          'Tập trung cực độ và xử lý nhanh hơn hẳn',
          'Fokus meledak dan menyelesaikan jauh lebih cepat dari biasanya'
        ),
        score: 0,
      },
      {
        text: L(
          '위기 상황일수록 오히려 침착해지고 리더처럼 행동한다',
          'Get calmer as it gets worse—and act like a leader',
          '危機ほど逆に冷静になり、リーダーみたいに動く',
          '越危机越冷静，像领导者一样行动',
          '越危機越冷靜，像領導者一樣行動',
          'Càng khủng hoảng càng bình tĩnh—hành động như người dẫn dắt',
          'Semakin krisis semakin tenang—bertindak seperti pemimpin'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: L(
      '친한 친구들 사이에서 내 포지션은?',
      'Among close friends, my role is usually…',
      '仲のいい友だちの中で、私のポジションは？',
      '在好友圈里，我的位置通常是？',
      '在好友圈裡，我的位置通常是？',
      'Trong nhóm bạn thân, vai trò của tôi thường là…',
      'Di antara teman dekat, peranku biasanya…'
    ),
    options: [
      {
        text: L(
          '분위기 메이커. 웃음 제조기 역할을 자주 한다',
          'Mood-maker—the one who brings the laughs',
          'ムードメーカー。よく笑いの中心になる',
          '气氛担当，经常负责搞笑',
          '氣氛擔當，經常負責搞笑',
          'Người làm không khí—thường là nguồn cười',
          'Pembuat suasana—sering jadi sumber tawa'
        ),
        score: 0,
      },
      {
        text: L(
          '의외로 진지한 조언가. 뜬금없이 핵심을 꿰뚫는 말을 한다',
          'Surprisingly serious advisor—randomly drops one sharp truth',
          '意外と真剣なアドバイザー。急に核心を突く一言を言う',
          '意外的认真顾问，冷不防一句戳中要害',
          '意外的認真顧問，冷不防一句戳中要害',
          'Cố vấn nghiêm túc bất ngờ—thỉnh thoảng một câu trúng tim đen',
          'Penasihat serius yang mengejutkan—kadang satu kalimat menusuk inti'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: L(
      '드라이브하거나 혼자 이동할 때 나는?',
      'When I drive or travel alone, I…',
      'ドライブやひとり移動のとき、私は？',
      '开车或独自移动时，我会？',
      '開車或獨自移動時，我會？',
      'Khi lái xe hoặc di chuyển một mình, tôi…',
      'Saat menyetir atau bepergian sendiri, aku…'
    ),
    options: [
      {
        text: L(
          '노래를 크게 틀고 완전 콘서트 모드로 따라 부른다',
          'Blast music and full concert-mode sing along',
          '音楽を大音量でかけて、完全コンサートモードで口ずさむ',
          '音乐开很大，完全演唱会模式跟唱',
          '音樂開很大，完全演唱會模式跟唱',
          'Bật nhạc lớn và hát theo kiểu concert',
          'Musik keras dan ikut bernyanyi mode konser penuh'
        ),
        score: 0,
      },
      {
        text: L(
          '머릿속으로 복잡한 생각을 정리하거나 상상 시나리오를 짠다',
          'Sort messy thoughts in my head or script imaginary scenes',
          '頭の中で複雑な思考を整理したり、想像のシナリオを組み立てる',
          '在脑子里整理复杂想法或编排想象剧情',
          '在腦子裡整理複雜想法或編排想像劇情',
          'Sắp xếp suy nghĩ phức tạp trong đầu hoặc dựng kịch bản tưởng tượng',
          'Merapikan pikiran rumit di kepala atau menyusun skenario imajiner'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: L(
      '처음 보는 사람들 사이에 있을 때 나는?',
      'Around people I’ve just met, I…',
      '初対面の人たちの中にいるとき、私は？',
      '在刚认识的人群里，我会？',
      '在剛認識的人群裡，我會？',
      'Giữa người mới quen, tôi…',
      'Di antara orang yang baru kutemui, aku…'
    ),
    options: [
      {
        text: L(
          '생각보다 먼저 나서서 분위기를 만들고 있다',
          'Step up sooner than expected and set the vibe',
          '思ったより先に出て、場の空気をつくる',
          '比想象中更先站出来带气氛',
          '比想像中更先站出來帶氣氛',
          'Chủ động hơn tưởng và tạo vibe',
          'Lebih dulu maju dari perkiraan dan mengatur suasana'
        ),
        score: 0,
      },
      {
        text: L(
          '조용히 관찰하다가 결정적인 순간에 한마디로 존재감을 드러낸다',
          'Stay quiet, observe—then one line at the perfect moment',
          '静かに観察して、決定的な瞬間に一言で存在感を示す',
          '安静观察，在关键时刻一句话刷存在感',
          '安靜觀察，在關鍵時刻一句話刷存在感',
          'Im lặng quan sát—rồi một câu đúng lúc làm nổi bật',
          'Diam mengamati—lalu satu kalimat di momen tepat'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: L(
      '나만의 취미나 관심사에 빠졌을 때 나는?',
      'When I’m deep in a hobby or obsession, I…',
      '自分の趣味やハマりに没頭するとき、私は？',
      '沉浸在自己的爱好或兴趣里时，我会？',
      '沉浸在自己的愛好或興趣裡時，我會？',
      'Khi chìm vào sở thích hoặc đam mê, tôi…',
      'Saat tenggelam dalam hobi atau minat, aku…'
    ),
    options: [
      {
        text: L(
          '시간 가는 줄 모르고 완전히 다른 사람처럼 몰두한다',
          'Lose track of time and become a totally different person',
          '時間を忘れて、まるで別人のように没頭する',
          '忘记时间，像换了个人一样投入',
          '忘記時間，像換了個人一樣投入',
          'Quên cả thời gian—như thành người khác hẳn',
          'Lupa waktu—seperti jadi orang lain saat fokus'
        ),
        score: 0,
      },
      {
        text: L(
          '그 분야에서만큼은 누구보다 박식하고 진지해진다',
          'In that niche, I’m more knowledgeable and serious than anyone',
          'その分野だけは誰より博識で、真剣になる',
          '在那个领域里比谁都懂、比谁都认真',
          '在那個領域裡比誰都懂、比誰都認真',
          'Trong lĩnh đó, hiểu biết và nghiêm túc hơn ai hết',
          'Di bidang itu, lebih tahu dan serius dari siapa pun'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: L(
      '롤플레이나 게임을 할 때 나는?',
      'When I role-play or game, I…',
      'ロールプレイやゲームをするとき、私は？',
      '玩角色扮演或游戏时，我会？',
      '玩角色扮演或遊戲時，我會？',
      'Khi chơi nhập vai hoặc game, tôi…',
      'Saat role-play atau main game, aku…'
    ),
    options: [
      {
        text: L(
          '완전히 캐릭터에 몰입해서 실제인 것처럼 행동한다',
          'Fully in character—like it’s real life',
          'キャラに完全没入して、本当のことのように振る舞う',
          '完全入戏，像真的一样',
          '完全入戲，像真的一樣',
          'Nhập vai hoàn toàn—như đời thật',
          'Masuk karakter sepenuhnya—seperti kehidupan nyata'
        ),
        score: 0,
      },
      {
        text: L(
          '전략가처럼 냉철하게 계산하며 움직인다',
          'Move like a strategist—cold, calculated',
          '戦略家のように冷静に計算して動く',
          '像战略家一样冷静计算再行动',
          '像戰略家一樣冷靜計算再行動',
          'Di chuyển như chiến lược gia—tính toán lạnh',
          'Bergerak seperti ahli strategi—dingin dan terhitung'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: L(
      '나도 몰랐던 내 모습을 발견하는 순간은?',
      'The moment I discover a side of me I didn’t know is when…',
      '自分でも知らなかった自分に気づくのはどんなとき？',
      '发现自己也有不知道的一面，是在什么时候？',
      '發現自己也有不知道的一面，是在什麼時候？',
      'Khoảnh khắc tôi thấy một mặt chưa từng biết là khi…',
      'Momen kutemukan sisi diri yang tak kusadari adalah saat…'
    ),
    options: [
      {
        text: L(
          '무대 위에 서거나 관중 앞에 섰을 때 긴장 대신 해방감이 온다',
          'I’m on stage or in front of a crowd—and feel free, not nervous',
          'ステージや観客の前では緊張より解放感が来る',
          '站在舞台或观众前，感到释放而不是紧张',
          '站在舞台或觀眾前，感到釋放而不是緊張',
          'Trên sân khấu hoặc trước đám đông—thấy tự do chứ không căng',
          'Di panggung atau depan penonton—merasa bebas, bukan gugup'
        ),
        score: 0,
      },
      {
        text: L(
          '위기 상황에서 오히려 평소보다 침착하고 강한 내가 나온다',
          'In a crisis, a calmer, stronger me shows up',
          'ピンチのとき、いつもより冷静で強い自分が出る',
          '危机时反而出现更冷静、更强的自己',
          '危機時反而出現更冷靜、更強的自己',
          'Trong khủng hoảng, bản thân bình tĩnh và mạnh hơn xuất hiện',
          'Dalam krisis, diri yang lebih tenang dan kuat muncul'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: L(
      '주변 친구들이 나에 대해 의외라고 하는 것은?',
      'What surprises friends about me is…',
      '周りの友だちが「意外」と言うのは？',
      '朋友觉得「意外」的通常是？',
      '朋友覺得「意外」的通常是？',
      'Điều bạn bè thấy bất ngờ về tôi là…',
      'Yang membuat teman terkejut tentang diriku adalah…'
    ),
    options: [
      {
        text: L(
          '"평소엔 조용한데 저럴 때만 이렇게 에너지 넘쳐?"',
          '“You’re usually quiet—why so much energy only then?”',
          '「普段は静かなのに、あのときだけなぜそんなに元気？」',
          '「平时很安静，那种时候怎么这么有能量？」',
          '「平時很安靜，那種時候怎麼這麼有能量？」',
          '“Thường im lặng mà lúc đó sao năng lượng thế?”',
          '“Biasanya pendiam—kok saat itu energinya meledak?”'
        ),
        score: 0,
      },
      {
        text: L(
          '"생각보다 훨씬 깊은 사람이었네. 겉으로는 몰랐어"',
          '“You’re deeper than I thought—I couldn’t tell from the outside.”',
          '「思ったよりずっと深い人だった。外からはわからなかった」',
          '「比想象中深刻多了，外表看不出来。」',
          '「比想像中深刻多了，外表看不出來。」',
          '“Sâu hơn tưởng—nhìn bên ngoài không đoán được.”',
          '“Lebih dalam dari kelihatan—dari luar tak terlihat.”'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: L(
      '내 부캐가 가장 강하게 나오는 상황은?',
      'My hidden persona comes out strongest when…',
      '私の「裏キャラ」がいちばん強く出るのは？',
      '我的「副本人格」最强的时候，是？',
      '我的「副本人格」最強的時候，是？',
      'Persona ẩn của tôi mạnh nhất khi…',
      'Persona tersembunyi paling keluar saat…'
    ),
    options: [
      {
        text: L(
          '신나는 음악, 맛있는 음식, 좋아하는 사람들과 함께할 때',
          'Great music, good food, and people I love',
          'テンション上がる音楽、美味しい食事、好きな人たちと一緒のとき',
          '嗨的音乐、好吃的、和喜欢的人在一起时',
          '嗨的音樂、好吃的、和喜歡的人在一起時',
          'Nhạc sôi động, đồ ăn ngon, và người mình thương',
          'Musik seru, makan enak, dan orang yang kusayangi'
        ),
        score: 0,
      },
      {
        text: L(
          '혼자 있거나 아무도 안 보고 있다고 생각될 때',
          'I’m alone—or I think nobody’s watching',
          'ひとりでいるとき、または誰も見てないと思えるとき',
          '独处时，或觉得没人看的时候',
          '獨處時，或覺得沒人看的時候',
          'Khi một mình—hoặc tưởng không ai nhìn',
          'Saat sendiri—atau mengira tak ada yang melihat'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3HiddenSubCharacterResults: Phase3HiddenSubCharacterResult[] = [
  {
    type: 'Type1',
    emoji: '🎤',
    title: L(
      '무대가 있으면 자동 변신, 숨겨진 퍼포머 부캐',
      'Hidden performer persona—stage optional, instant transform',
      'ステージがあれば自動変身、隠れパフォーマー系の裏キャラ',
      '有舞台就自动变身，隐藏的「表演者」副本人格',
      '有舞台就自動變身，隱藏的「表演者」副本人格',
      'Có “sân khấu” là tự biến hình—persona nghệ sĩ ẩn',
      'Persona penampil tersembunyi—panggung opsional, transformasi instan'
    ),
    shortDescription: L(
      '"평소엔 그냥 평범한 사람인데요. 음악만 나오면 제가 좀 달라져요."',
      '“I’m pretty normal… until the music hits—then I change.”',
      '「普段は普通なんです。音楽が流れると、ちょっと別人になります」',
      '「平时很普通，音乐一响我就变了。」',
      '「平時很普通，音樂一響我就變了。」',
      '“Bình thường tôi bình thường lắm—nhạc lên là khác hẳn.”',
      '“Biasanya biasa saja—musik nyala langsung beda orang.”'
    ),
    description: L(
      '혼자 있을 때 화장실 거울 앞에서 뮤직비디오를 찍고, 드라이브 중엔 콘서트가 열립니다. 음악이 나오면 본캐는 사라지고 퍼포머 부캐가 자동 소환됩니다. 신기한 건 이 부캐가 등장할 때 주변 사람들도 덩달아 신나게 된다는 것입니다. 당신의 부캐는 에너지 전파 능력이 탁월합니다.',
      'Alone, you film MVs in the bathroom mirror; in the car, it’s a concert. When music plays, your “main self” vanishes and the performer spawns—and somehow everyone around you gets hyped too. Your persona radiates energy.',
      'ひとりのときは洗面所の鏡の前でMVごっこ、ドライブ中はライブ会場。音楽が流れると本キャラは消えてパフォーマーが召喚される。不思議なのは、この裏キャラが出ると周りも一緒に盛り上がること。エネルギーの伝播力がすごい。',
      '独处时在浴室镜前拍 MV，开车像开演唱会。音乐一响，本我退场，表演者上线——神奇的是你一嗨，旁边的人也跟著嗨。你的副本人格很会传染能量。',
      '獨處時在浴室鏡前拍 MV，開車像開演唱會。音樂一響，本我退場，表演者上線——神奇的是你一嗨，旁邊的人也跟著嗨。你的副本人格很會傳染能量。',
      'Ở một mình thì quay MV trước gương, lái xe là concert. Nhạc lên là “bản chính” biến mất, persona trình diễn xuất hiện—kỳ lạ là mọi người quanh bạn cũng bị cuốn theo. Năng lượng lan tỏa cực mạnh.',
      'Sendirian, kamu bikin MV di cermin kamar mandi; nyetir jadi konser. Musik nyala—diri “utama” hilang, persona penampil muncul—dan orang di sekitarmu ikut heboh. Personamu menular energi.'
    ),
    subName: L(
      '무대 체질 [본명]',
      'Born-for-the-stage [name]',
      'ステージ体質［本名］',
      '舞台体质［本名］',
      '舞臺體質［本名］',
      'Thể chất sân khấu [tên]',
      'Bakat panggung [nama]'
    ),
    subSkill: L(
      '아무 데서나 콘서트 개최, 관중 없이도 완벽한 퍼포먼스',
      'Concerts anywhere—perfect performance even with zero audience',
      'どこでもコンサート、観客ゼロでも完璧なパフォーマンス',
      '随地开演唱会，没观众也演满全场',
      '隨地開演唱會，沒觀眾也演滿全場',
      'Hát nhảy mọi nơi—trình diễn “full” dù không khán giả',
      'Konser di mana saja—performa sempurna tanpa penonton'
    ),
    triggerCondition: L(
      '좋아하는 음악이 재생되는 순간 + 기분이 좋은 날',
      'When your favorite song plays + you’re in a good mood',
      '好きな曲が流れた瞬間＋機嫌のいい日',
      '喜欢的歌在播 + 心情好的日子',
      '喜歡的歌在播 + 心情好的日子',
      'Bài hát yêu thích đang phát + tâm trạng đang vui',
      'Lagu favorit diputar + suasana hati lagi bagus'
    ),
    triggerRate: L(
      '음악 있으면 100%, 없으면 0%',
      '100% if music is on—0% if it’s silent',
      '音楽あり100%、なし0%',
      '有音乐 100%，没音乐 0%',
      '有音樂 100%，沒音樂 0%',
      'Có nhạc 100%, không nhạc 0%',
      'Ada musik 100%, tanpa musik 0%'
    ),
    mainSkills: L(
      '노래방 없이도 전곡 완창, 안무 즉흥 창작, 분위기 순식간에 올리기',
      'Full setlists without karaoke, improvised choreo, instant vibe boost',
      'カラオケなしで全曲完唱、即興ダンス、一瞬で空気を上げる',
      '不用 KTV 也能唱全辑、即兴编舞、瞬间炒热气氛',
      '不用 KTV 也能唱全輯、即興編舞、瞬間炒熱氣氛',
      'Không cần karaoke vẫn hát full, nhảy ứng biến, bật mood tức thì',
      'Full lagu tanpa karaoke, koreografi spontan, suasana langsung panas'
    ),
    disappearCondition: L(
      '음악이 끊기는 순간 또는 아는 사람이 나타나는 순간',
      'When the music stops—or someone you know appears',
      '音楽が止まった瞬間、または知り合いが現れた瞬間',
      '音乐停下的瞬间，或熟人出现的瞬间',
      '音樂停下的瞬間，或熟人出現的瞬間',
      'Nhạc tắt—hoặc có người quen xuất hiện',
      'Musik berhenti—atau ada kenalan yang muncul'
    ),
    gapLevel: L(
      '★★★★★ (본캐와 부캐의 갭이 가장 큰 유형)',
      '★★★★★ (largest gap between “main” and hidden self)',
      '★★★★★（本キャラと裏キャラのギャップが最大）',
      '★★★★★（本我与副本人格差距最大）',
      '★★★★★（本我與副本人格差距最大）',
      '★★★★★ (khoảng cách “bản chính” vs persona ẩn lớn nhất)',
      '★★★★★ (jarak terbesar antara diri utama dan persona tersembunyi)'
    ),
    oneLiner: L(
      '"나는 무대가 없어도 무대 위에 있습니다"',
      '“Even with no stage—I’m already on stage.”',
      '「ステージがなくても、私はステージの上にいる」',
      '「没有舞台，我也站在舞台上。」',
      '「沒有舞台，我也站在舞台上。」',
      '“Không sân khấu—tôi vẫn đang trên sân khấu.”',
      '“Tanpa panggung—aku tetap di atas panggung.”'
    ),
    shareSnippet: L(
      '내 부캐는 무대 체질 [이름] 🎤 음악 나오면 자동 변신. 친구들아 이게 나의 진짜 모습이다',
      'My hidden persona: stage-mode [name] 🎤 Music on = instant transform. Friends—this is the real me.',
      '私の裏キャラはステージ体質［名前］🎤 音楽が出たら自動変身。みんな、これが本当の私。',
      '我的副本人格：舞台体质［名字］🎤 音乐一响自动变身。朋友们，这才是我。',
      '我的副本人格：舞臺體質［名字］🎤 音樂一響自動變身。朋友們，這才是我。',
      'Persona ẩn: thể chất sân khấu [tên] 🎤 Nhạc lên là biến hình. Bạn ơi đây mới là tôi thật.',
      'Persona tersembunyi: bakat panggung [nama] 🎤 Musik nyala = transformasi. Teman-teman—inilah aku sebenarnya.'
    ),
  },
  {
    type: 'Type2',
    emoji: '😂',
    title: L(
      '웃음 참을 수 없게 만드는, 숨겨진 개그맨 부캐',
      'Hidden comedian persona—you can’t hold the laugh',
      '笑いが止まらない、隠れ芸人系の裏キャラ',
      '让人笑到停不下来的隐藏「笑匠」副本人格',
      '讓人笑到停不下來的隱藏「笑匠」副本人格',
      'Persona hài ẩn—cười không nhặt được mồm',
      'Persona komedian tersembunyi—lucu tak tertahankan'
    ),
    shortDescription: L(
      '"저 그냥 평범한 사람인데요. 근데 가끔 제 입이 저도 모르게..."',
      '“I’m just… normal. But sometimes my mouth moves on its own…”',
      '「ただの普通の人なんです。でもたまに口が勝手に…」',
      '「我就是普通人，但有时候嘴它自己……」',
      '「我就是普通人，但有時候嘴它自己……」',
      '“Tôi bình thường mà—đôi khi miệng tự nói luôn…”',
      '“Aku biasa saja—kadang mulutku gerak sendiri…”'
    ),
    description: L(
      '평소엔 진지하거나 조용한데 특정 상황이 되면 타이밍이 완벽한 드립 한 방을 날리는 부캐가 소환됩니다. 웃기려고 한 게 아닌데 웃기고, 준비한 드립은 망하는데 즉흥은 항상 성공하는 신기한 타입입니다. 친구들은 이미 알고 있습니다. 당신의 부캐가 언제 나올지를.',
      'Usually serious or quiet—then in the right moment you drop one perfectly timed joke. You weren’t trying to be funny, but you are; prepared jokes flop, improvised ones land. Your friends already know when your persona will appear.',
      '普段は真面目か静かなのに、ある瞬間タイミング抜群の一発ギャグをかます裏キャラが召喚される。笑わせようとしてないのに笑える、準備したネタは滑るのに即興は決まる不思議タイプ。友だちはもう、いつ出るか分かってる。',
      '平时严肃或安静，特定瞬间却甩出节奏完美的一句梗。没想搞笑却很好笑，准备好的梗翻车，即兴永远成功。朋友们早摸清你的副本人格何时上线。',
      '平時嚴肅或安靜，特定瞬間卻甩出節奏完美的一句梗。沒想搞笑卻很好笑，準備好的梗翻車，即興永遠成功。朋友們早摸清你的副本人格何時上線。',
      'Thường nghiêm túc hay trầm—đúng lúc lại thả một câu đúng timing. Không cố mà vẫn cười; joke chuẩn bị tệ, ứng biến thì trúng. Bạn bè đã biết persona lúc nào “ra”.',
      'Biasanya serius atau pendiam—lalu di momen tepat lempar satu lelucon timing sempurna. Tanpa niat lucu malah lucu; materi persiapan gagal, spontan selalu kena. Teman sudah tahu kapan persona ini muncul.'
    ),
    subName: L(
      '몰래 개그맨 [본명]',
      'Secret comedian [name]',
      'こっそり芸人［本名］',
      '隐藏笑匠［本名］',
      '隱藏笑匠［本名］',
      'Diễn viên hài thầm lặng [tên]',
      'Pelawak diam-diam [nama]'
    ),
    subSkill: L(
      '타이밍 완벽한 드립, 아무도 예상 못 한 순간 폭소 유발',
      'Perfect timing—unexpected punchlines that explode the room',
      'タイミング完璧なツッコミ、誰も予想しない瞬間に爆笑を呼ぶ',
      '节奏完美的梗，在没人料到的瞬间引爆笑声',
      '節奏完美的梗，在沒人料到的瞬間引爆笑聲',
      'Đúng timing—một câu bất ngờ là cả phòng cười',
      'Timing sempurna—lelucon di momen tak terduga'
    ),
    triggerCondition: L(
      '분위기가 진지해지거나 어색해질 때 + 술자리',
      'When things get serious or awkward—especially with drinks',
      '空気が真面目になったりぎこちなくなったとき＋飲みの場',
      '气氛变严肃或尴尬时 + 酒局',
      '氣氛變嚴肅或尷尬時 + 酒局',
      'Không khí căng hoặc gượng—nhất là khi nhậu',
      'Suasana serius atau canggung—apalagi saat minum-minum'
    ),
    triggerRate: L(
      '어색한 침묵 발생 시 95%',
      '95% when awkward silence hits',
      '気まずい沈黙が起きたら95%',
      '尴尬沉默出现时 95%',
      '尷尬沉默出現時 95%',
      'Im lặng khó xử: 95%',
      'Diam canggung: 95%'
    ),
    mainSkills: L(
      '아무도 예상 못 한 순간 드립, 표정 연기, 상황 재해석 유머',
      'Surprise punchlines, face acting, reframing humor',
      '誰も予想しない瞬間のツッコミ、表情演技、状況の再解釈ユーモア',
      '无人预料的梗、表情戏、情境重解幽默',
      '無人預料的梗、表情戲、情境重解幽默',
      'Câu bất ngờ, biểu cảm, hài tái khung cảnh',
      'Lelucon tak terduga, akting wajah, humor reframe'
    ),
    disappearCondition: L(
      '드립이 망했을 때 또는 공식적인 자리',
      'When the joke bombs—or in formal settings',
      'ネタが滑ったとき、またはフォーマルな場',
      '梗翻车的时候，或正式场合',
      '梗翻車的時候，或正式場合',
      'Joke tệ—hoặc chỗ trang trọng',
      'Lelucon gagal—atau acara formal'
    ),
    gapLevel: L(
      '★★★★☆ (진지한 본캐일수록 부캐 개그가 더 충격적)',
      '★★★★☆ (the more serious your “main self,” the more shocking the jokes)',
      '★★★★☆（本キャラが真面目ほど、裏キャラのギャグが衝撃的）',
      '★★★★☆（本我越正经，副本人格的梗越冲击）',
      '★★★★☆（本我越正經，副本人格的梗越衝擊）',
      '★★★★☆ (càng “nghiêm túc” bình thường, punchline càng sốc)',
      '★★★★☆ (semakin serius diri utamanya, lelucon persona semakin mengejutkan)'
    ),
    oneLiner: L(
      '"준비하지 않은 드립이 항상 가장 웃깁니다"',
      '“The unscripted joke always hits hardest.”',
      '「準備してないツッコミがいちばんウケる」',
      '「没准备的梗往往最好笑。」',
      '「沒準備的梗往往最好笑。」',
      '“Không chuẩn bị mà lại cười nhất.”',
      '“Yang spontan justru paling lucu.”'
    ),
    shareSnippet: L(
      '내 부캐는 몰래 개그맨 [이름] 😂 타이밍 장인. 나 사실 이런 사람이었어',
      'My hidden persona: secret comedian [name] 😂 Timing master—I’ve been this person all along.',
      '私の裏キャラはこっそり芸人［名前］😂 タイミングの神。実はこういう人でした。',
      '我的副本人格：隐藏笑匠［名字］😂 节奏大师，其实我就是这样的人。',
      '我的副本人格：隱藏笑匠［名字］😂 節奏大師，其實我就是這樣的人。',
      'Persona ẩn: diễn viên hài thầm [tên] 😂 Bậc thầy timing—thật ra tôi là vậy.',
      'Persona tersembunyi: pelawak rahasia [nama] 😂 Jago timing—ternyata begini aslinya.'
    ),
  },
  {
    type: 'Type3',
    emoji: '🔥',
    title: L(
      '관심사 나오면 완전 다른 사람, 숨겨진 덕후 부캐',
      'Hidden nerd mode—different person when your interest shows',
      '好きが出ると別人、隠れオタク系の裏キャラ',
      '兴趣一出现就像换了人，隐藏的「宅力全开」副本人格',
      '興趣一出現就像換了人，隱藏的「宅力全開」副本人格',
      'Chủ đề yêu thích lên là khác hẳn—persona “fan cuồng” ẩn',
      'Persona fan tersembunyi—beda orang saat minat muncul'
    ),
    shortDescription: L(
      '"저 그냥 평범해요. 근데 이 얘기만 나오면 제가 좀 달라지는데..."',
      '“I’m pretty ordinary… but if you bring up this topic, I change.”',
      '「普通なんですけど、この話になるとちょっと別人に…」',
      '「我很普通，但一聊这个我就变了……」',
      '「我很普通，但一聊這個我就變了……」',
      '“Tôi bình thường—nhưng nhắc chủ đề này là khác người…”',
      '“Biasa saja—tapi topik ini keluar langsung beda orang…”'
    ),
    description: L(
      '평소엔 별 관심 없어 보이는데 자기 관심사 얘기가 나오면 눈이 빛나고 말이 빨라지며 갑자기 전문가가 되는 부캐가 등장합니다. 그 분야만큼은 아무도 이기기 어렵고, 그 분야에서만큼은 완전히 다른 에너지를 냅니다. 이 부캐의 무서운 점은 한번 발동되면 상대방도 그 열정에 빠져든다는 것입니다.',
      'You look uninterested—until your niche comes up. Eyes sparkle, words speed up, suddenly you’re the expert. In that lane, almost nobody can beat you—and your energy flips. Once it activates, even the other person gets pulled into the passion.',
      '普段は無関心そうなのに、好きな話題になると目が輝き口が早くなり、いきなり専門家モードの裏キャラが出る。その分野では誰にも負けない。その分野だけエネルギーが別物。一度発動すると相手もその熱量に巻き込まれる。',
      '平时像无所谓，一聊到自己的坑眼睛发亮、语速变快，秒变专家。那个领域里几乎没人打得过你，能量也完全不同。最可怕的是一发动，对方也会被卷进你的热情里。',
      '平時像無所謂，一聊到自己的坑眼睛發亮、語速變快，秒變專家。那個領域裡幾乎沒人打得過你，能量也完全不同。最可怕的是一發動，對方也會被捲進你的熱情裡。',
      'Trông lạnh nhạt—đến khi chủ đề yêu thích xuất hiện: mắt sáng, nói nhanh, thành chuyên gia. Trong lĩnh đó khó ai thắng—năng lượng khác hẳn. Khi bật, đối phương cũng bị cuốn theo.',
      'Terlihat biasa—topik favorit muncul: mata berbinar, bicara cepat, jadi ahli. Di niche itu sulit dikalahkan—energinya beda. Saat aktif, orang lain ikut terseret passion.'
    ),
    subName: L(
      '극한 집중 [본명]',
      'Hyper-focus [name]',
      '極限集中［本名］',
      '极限专注［本名］',
      '極限專注［本名］',
      'Cực tập trung [tên]',
      'Fokus ekstrem [nama]'
    ),
    subSkill: L(
      '관심 분야 등장 시 전문가 모드 자동 전환, 시간 가는 줄 모르는 몰입',
      'Auto expert mode when your topic appears—timeless immersion',
      '好き分野が出たら専門家モード自動ON、時間を忘れる没入',
      '兴趣领域一出现就切专家模式，沉浸到忘记时间',
      '興趣領域一出現就切專家模式，沉浸到忘記時間',
      'Chủ đề yêu thích xuất hiện là chuyển chế độ chuyên gia—đắm say quên giờ',
      'Topik minat muncul—mode ahli otomatis, larut tanpa sadar waktu'
    ),
    triggerCondition: L(
      '관심 분야 키워드가 대화에 등장하는 순간',
      'The moment keywords from your niche enter the conversation',
      '好き分野のキーワードが会話に入った瞬間',
      '对话里出现你领域的关键词的那一刻',
      '對話裡出現你領域的關鍵字的那一刻',
      'Từ khóa lĩnh yêu thích xuất hiện trong hội thoại',
      'Kata kunci niche masuk percakapan'
    ),
    triggerRate: L(
      '관심사 언급 시 100%',
      '100% whenever your interest is mentioned',
      '好きの話題が出たら100%',
      '一提到兴趣就 100%',
      '一提到興趣就 100%',
      'Nhắc đến sở thích: 100%',
      'Minat disebut: 100%'
    ),
    mainSkills: L(
      '해당 분야 즉석 강의, 끝없는 정보 공유, 상대방 덕질 입문시키기',
      'Impromptu lectures, endless facts, onboarding others into your fandom',
      'その場ミニ講義、止まらない情報共有、相手を沼に連れ込む',
      '即兴小课堂、信息分享停不下来、把对方拉进坑',
      '即興小課堂、資訊分享停不下來、把對方拉進坑',
      'Giảng mini tức thì, chia sẻ không ngớt, kéo người khác vào “hố”',
      'Kuliah dadakan, banjir info, tarik orang masuk fandom'
    ),
    disappearCondition: L(
      '주제가 바뀌는 순간 또는 배터리 방전 시',
      'When the topic changes—or your social battery dies',
      '話題が変わった瞬間、またはバッテリー切れ',
      '话题一转，或社交电量耗尽',
      '話題一轉，或社交電量耗盡',
      'Đổi chủ đề—hoặc hết pin xã giao',
      'Topik berganti—atau baterai sosial habis'
    ),
    gapLevel: L(
      '★★★☆☆ (관심사 유무로 전혀 다른 사람이 됨)',
      '★★★☆☆ (with/without the interest topic, you’re basically two people)',
      '★★★☆☆（興味のあるなしでまるで別人）',
      '★★★☆☆（有没有兴趣话题，几乎是两个人）',
      '★★★☆☆（有沒有興趣話題，幾乎是兩個人）',
      '★★★☆☆ (có/không chủ đề yêu thích là hai người khác nhau)',
      '★★★☆☆ (dengan/tanpa topik minat seperti dua orang)'
    ),
    oneLiner: L(
      '"저 사실 이쪽으로는 좀 알거든요"',
      '“Okay… I actually know a lot about this.”',
      '「実はこの方面、ちょっと詳しくて」',
      '「其实这方面我还挺懂的。」',
      '「其實這方面我還挺懂的。」',
      '“Thật ra tôi cũng biết kha khá về mảng này.”',
      '“Sebenarnya aku lumayan ngerti soal ini.”'
    ),
    shareSnippet: L(
      '내 부캐는 극한 집중 [이름] 🔥 관심사 나오면 자동 전문가 모드. 이게 내 진짜 모습',
      'My hidden persona: hyper-focus [name] 🔥 Mention my interest—expert mode on. This is the real me.',
      '私の裏キャラは極限集中［名前］🔥 好きの話題で自動エキスパート。これが本当の私。',
      '我的副本人格：极限专注［名字］🔥 兴趣一出现就专家模式，这才是我。',
      '我的副本人格：極限專注［名字］🔥 興趣一出現就專家模式，這才是我。',
      'Persona ẩn: cực tập trung [tên] 🔥 Nhắc sở thích là chế độ chuyên gia—đây mới là tôi.',
      'Persona tersembunyi: fokus ekstrem [nama] 🔥 Minat keluar—mode ahli. Inilah aku sebenarnya.'
    ),
  },
  {
    type: 'Type4',
    emoji: '⚡',
    title: L(
      '위기 오면 갑자기 리더, 숨겨진 위기 대응 부캐',
      'Hidden crisis-leader persona—only shows up when it counts',
      'ピンチで突然リーダー、隠れ危機対応系の裏キャラ',
      '危机一来就变领队，隐藏的「应急领袖」副本人格',
      '危機一來就變領隊，隱藏的「應急領袖」副本人格',
      'Khủng hoảng là thành thủ lĩnh—persona ứng biến ẩn',
      'Persona pemimpin krisis—muncul saat genting'
    ),
    shortDescription: L(
      '"저 평소엔 결정 못 내리는 편인데요. 근데 급할 때는 왜 이렇게 빠른지..."',
      '“Usually I can’t decide… but in a crunch, why am I so fast?”',
      '「普段は決められないタイプなのに、いざというときなぜこんなに速いの…」',
      '「平时很难做决定，怎么一急就这么快……」',
      '「平時很難做決定，怎麼一急就這麼快……」',
      '“Thường không quyết được—sao lúc gấp lại nhanh thế…”',
      '“Biasanya susah putus—kok pas genting langsung cepat…”'
    ),
    description: L(
      '평소엔 조용하거나 우유부단해 보이는데 진짜 위기 상황이 오면 갑자기 가장 침착하고 빠른 사람이 되는 부캐가 소환됩니다. 모두가 패닉 상태일 때 혼자 차분하게 상황을 정리하고, 아무도 못 내리는 결정을 내립니다. 나도 몰랐던 이 부캐의 존재를 위기를 겪고 나서야 발견하게 됩니다.',
      'Usually you seem quiet or indecisive—then a real crisis hits and you become the calmest, fastest person in the room. While everyone panics, you sort the situation and make the call nobody else could. You only discover this persona after the storm.',
      '普段は静かや優柔不断に見えるのに、本当の危機になるといちばん冷静で速い人になる裏キャラが召喚される。みんながパニックのときひとりで状況を整理し、誰も決められない決断をする。嵐のあとで初めて気づく存在。',
      '平时安静或犹豫，真危机一来却成全场最冷静、最快的人。大家慌成一团时你独自理清局面，做别人做不出的决定。往往要经历一次危机才发现这副本人格。',
      '平時安靜或猶豫，真危機一來卻成全場最冷靜、最快的人。大家慌成一團時你獨自理清局面，做別人做不出的決定。往往要經歷一次危機才發現這副本人格。',
      'Thường trầm hoặc lưỡng lự—khủng hoảng thật đến lại thành người bình tĩnh và nhanh nhất. Mọi người hoảng—một mình bạn gom tình huống và quyết định thứ người khác không dám. Chỉ sau cơn bão mới nhận ra persona này.',
      'Biasanya pendiam atau ragu—krisis nyata datang jadi paling tenang dan cepat. Semua panik—kamu merapikan situasi dan mengambil keputusan yang tak sanggup orang lain. Baru sadar setelah badai.'
    ),
    subName: L(
      '긴급 소환 [본명]',
      'Emergency summon [name]',
      '緊急召喚［本名］',
      '紧急召唤［本名］',
      '緊急召喚［本名］',
      'Triệu hồi khẩn [tên]',
      'Panggilan darurat [nama]'
    ),
    subSkill: L(
      '위기 상황 감지 시 자동 침착 모드, 아무도 못 하는 결정 즉시 내리기',
      'Auto calm mode in crisis—instant decisions others can’t make',
      '危機検知で自動カームモード、誰もできない決断を即断',
      '感知危机自动冷静模式，立刻做别人不敢做的决定',
      '感知危機自動冷靜模式，立刻做別人不敢做的決定',
      'Phát hiện khủng hoảng—bình tĩnh tức thì, quyết định ngay',
      'Deteksi krisis—mode tenang, putusan yang tak sanggup orang lain'
    ),
    triggerCondition: L(
      '진짜 위기 상황 또는 아무도 나서지 않는 순간',
      'A real crisis—or the moment nobody steps up',
      '本当の危機、または誰も動かない瞬間',
      '真正的危机，或没人站出来的那一刻',
      '真正的危機，或沒人站出來的那一刻',
      'Khủng hoảng thật—hoặc lúc không ai đứng ra',
      'Krisis beneran—atau saat tak ada yang maju'
    ),
    triggerRate: L(
      '긴급 상황 발생 시 80%, 평화로운 상황 0%',
      '80% in emergencies—0% in peaceful times',
      '緊急時80%、平和なとき0%',
      '紧急情况 80%，平静时 0%',
      '緊急情況 80%，平靜時 0%',
      'Khẩn cấp: 80%, bình yên: 0%',
      'Darurat: 80%, damai: 0%'
    ),
    mainSkills: L(
      '즉각적 상황 판단, 모두를 진정시키는 한마디, 빠른 해결책 도출',
      'Fast reads, one sentence to steady everyone, quick solutions',
      '即時判断、みんなを落ち着かせる一言、迅速な打開策',
      '快速判断、一句话稳住全场、迅速拿出解法',
      '快速判斷、一句話穩住全場、迅速拿出解法',
      'Đọc tình huống nhanh, một câu trấn an, giải pháp tức thì',
      'Baca situasi cepat, satu kalimat menenangkan, solusi kilat'
    ),
    disappearCondition: L(
      '위기가 해결되는 순간 + 집에 오면 뒤늦게 떨림',
      'When the crisis ends—and the delayed shakes hit at home',
      '危機が終わった瞬間＋家に帰ってから遅れて震える',
      '危机解除的瞬间 + 回到家才后知后觉发抖',
      '危機解除的瞬間 + 回到家才後知後覺發抖',
      'Hết khủng hoảng—về nhà mới run muộn',
      'Krisis selesai—pulang baru gemetar telat'
    ),
    gapLevel: L(
      '★★★★☆ (평소 모습과 위기 시 모습이 완전 다른 사람)',
      '★★★★☆ (everyday you vs crisis you can feel like two people)',
      '★★★★☆（普段と危機時がまるで別人）',
      '★★★★☆（平时和危机时像两个人）',
      '★★★★☆（平時和危機時像兩個人）',
      '★★★★☆ (bình thường vs lúc khủng hoảng như hai người)',
      '★★★★☆ (diri biasa vs krisis seperti dua orang)'
    ),
    oneLiner: L(
      '"저도 몰랐는데 저 이런 사람이었어요"',
      '“I didn’t know I could be that person.”',
      '「自分でも知らなかった、こんな自分がいたなんて」',
      '「我也不知道自己还能是这样的人。」',
      '「我也不知道自己還能是這樣的人。」',
      '“Tôi cũng không ngờ mình có thể như vậy.”',
      '“Ternyata aku bisa jadi orang seperti ini.”'
    ),
    shareSnippet: L(
      '내 부캐는 긴급 소환 [이름] ⚡ 위기 때만 나오는 리더 부캐. 친구들아 나 이런 사람이야',
      'My hidden persona: emergency-leader [name] ⚡ Only shows in crisis. Friends—I’m this person.',
      '私の裏キャラは緊急召喚［名前］⚡ ピンチのときだけ出るリーダー。みんな、私こういう人。',
      '我的副本人格：紧急召唤［名字］⚡ 只在危机时上线的领队。朋友们，我就是这样的人。',
      '我的副本人格：緊急召喚［名字］⚡ 只在危機時上線的領隊。朋友們，我就是這樣的人。',
      'Persona ẩn: triệu hồi khẩn [tên] ⚡ Chỉ lúc khủng hoảng mới làm thủ lĩnh—bạn ơi tôi là vậy.',
      'Persona tersembunyi: panggilan darurat [nama] ⚡ Pemimpin hanya saat krisis—teman-teman, beginilah aku.'
    ),
  },
  {
    type: 'Type5',
    emoji: '📱',
    title: L(
      '혼자 있을 때만 등장하는, 숨겨진 1인 방송 부캐',
      'Hidden solo-broadcaster persona—only when you’re alone',
      'ひとりのときだけ出る、隠れ1人配信系の裏キャラ',
      '只有独处才上线，隐藏的「一人电视台」副本人格',
      '只有獨處才上線，隱藏的「一人電視台」副本人格',
      'Chỉ khi một mình—persona “phát sóng” ẩn',
      'Persona penyiar solo—hanya saat sendiri'
    ),
    shortDescription: L(
      '"저 혼자 있을 때... 사실 좀 많이 중얼거리거든요."',
      '“When I’m alone… I talk to myself… a lot.”',
      '「ひとりのときは…実はけっこうつぶやいてます」',
      '「独处的时候……其实挺能自言自语的。」',
      '「獨處的時候……其實挺能自言自語的。」',
      '“Khi một mình… thật ra tôi lẩm bẩm khá nhiều.”',
      '“Kalau sendirian… sebenarnya aku banyak bergumam.”'
    ),
    description: L(
      '아무도 없을 때 혼자 유튜브 촬영하듯 중얼거리거나, 거울 앞에서 브이로그를 찍는 상상을 하거나, 혼자 토크쇼를 진행하는 부캐가 숨어있습니다. 사람들 앞에선 조용한데 혼자 있을 때 가장 수다스럽고 활기찬 것이 이 부캐의 특징입니다. 누가 보지 않을 때 가장 자유로운 사람입니다.',
      'Alone, you mumble like you’re filming a YouTube video, imagine vlogging in the mirror, or host a solo talk show. Quiet in public—but your chattiest, most alive self appears when nobody’s watching. You’re freest when no eyes are on you.',
      '誰もいないとき、YouTube撮影みたいにつぶやいたり、鏡の前でVlogを撮る想像をしたり、ひとりトークショーをする裏キャラがいる。人前では静かなのに、ひとりのときいちばんおしゃべりで生き生き。誰にも見られないときがいちばん自由。',
      '没人在时像拍油管一样碎碎念，想象对着镜子拍 vlog，或独自主持脱口秀。人前安静，独处时却最话痨、最有活力。没人看的时候最自由。',
      '沒人在時像拍油管一樣碎碎唸，想像對著鏡頭拍 vlog，或獨自主持脫口秀。人前安靜，獨處時卻最話痨、最有活力。沒人看的時候最自由。',
      'Một mình thì lẩm bẩm như quay YouTube, tưởng tượng vlog trước gương, hoặc dẫn talk show một mình. Nơi đông người thì trầm—ở một mình lại nói nhiều và sống động nhất. Tự do nhất khi không ai nhìn.',
      'Sendirian seperti syuting YouTube, bayangkan vlog di cermin, atau talk show solo. Di depan orang pendiam—sendirian justru paling cerewet dan hidup. Paling bebas saat tak ada yang melihat.'
    ),
    subName: L(
      '관종 기질 [본명]',
      'Solo spotlight [name]',
      'ひとり配信気質［本名］',
      '一人放送体质［本名］',
      '一人放送體質［本名］',
      'Thích “lên sóng” một mình [tên]',
      'Kepribadian siaran solo [nama]'
    ),
    subSkill: L(
      '혼자 있을 때 완벽한 유튜버, 아무도 없을 때 가장 활발',
      'Perfect YouTuber energy—most active when nobody’s around',
      'ひとりのとき完璧なYouTuber、誰もいないときいちばん活発',
      '独处时是满分博主，没人在时最活跃',
      '獨處時是滿分博主，沒人在時最活躍',
      'Một mình là YouTuber hoàn hảo—không ai quanh mới “bùng” nhất',
      'Sendirian = YouTuber sempurna—paling aktif saat tak ada orang'
    ),
    triggerCondition: L(
      '혼자 있는 것이 확인된 순간',
      'The moment solitude is confirmed',
      '「ひとり」と確認できた瞬間',
      '确认「真的只有我一个人」的瞬间',
      '確認「真的只有我一人」的瞬間',
      'Khoảnh khắc xác nhận chỉ có một mình',
      'Saat terkonfirmasi sedang sendirian'
    ),
    triggerRate: L(
      '완전 혼자 100%, 누군가 있으면 0%',
      '100% when totally alone—0% if someone’s there',
      '完全ソロ100%、誰かいれば0%',
      '完全独处 100%，有人在就 0%',
      '完全獨處 100%，有人在就 0%',
      'Một mình hoàn toàn: 100%, có người: 0%',
      'Benar-benar sendirian: 100%, ada orang: 0%'
    ),
    mainSkills: L(
      '혼자 토크쇼 진행, 상상 인터뷰 진행, 거울 앞 연기',
      'Solo talk shows, imaginary interviews, mirror performances',
      'ひとりトークショー、想像インタビュー、鏡の前の演技',
      '独自脱口秀、想象访谈、镜子前演戏',
      '獨自脫口秀、想像訪談、鏡子前演戲',
      'Talk show một mình, phỏng vấn tưởng tượng, diễn trước gương',
      'Talk show sendiri, wawancara imajiner, akting di depan cermin'
    ),
    disappearCondition: L(
      '문 여는 소리 또는 발자국 소리 감지 즉시',
      'Instantly when a door opens—or footsteps appear',
      'ドアが開く音か足音を察知した瞬間',
      '听到开门声或脚步声的瞬间',
      '聽到開門聲或腳步聲的瞬間',
      'Cửa mở hoặc có tiếng bước chân—tắt ngay',
      'Pintu dibuka atau langkah kaki—langsung off'
    ),
    gapLevel: L(
      '★★★★★ (아무도 이 부캐의 존재를 모름)',
      '★★★★★ (almost nobody knows this persona exists)',
      '★★★★★（この裏キャラの存在を誰も知らない）',
      '★★★★★（几乎没人知道这副本人格存在）',
      '★★★★★（幾乎沒人知道這副本人格存在）',
      '★★★★★ (hầu không ai biết persona này tồn tại)',
      '★★★★★ (hampir tak ada yang tahu persona ini ada)'
    ),
    oneLiner: L(
      '"구독자는 없지만 컨텐츠는 넘칩니다"',
      '“No subscribers—but infinite content.”',
      '「登録者はいないけど、コンテンツは溢れてる」',
      '「没有订阅，但内容溢出。」',
      '「沒有訂閱，但內容溢出。」',
      '“Không có sub—nhưng content tràn ra.”',
      '“Tanpa subscriber—kontennya melimpah.”'
    ),
    shareSnippet: L(
      '내 부캐는 관종 기질 [이름] 📱 혼자 있을 때만 등장하는 1인 방송국. 이거 공유하면 안 되는데 ㅋㅋ',
      'My hidden persona: solo broadcaster [name] 📱 One-person station—only when I’m alone. (Probably shouldn’t share this lol)',
      '私の裏キャラはひとり配信気質［名前］📱 ソロのときだけ出る1人放送局。これ共有しちゃダメなやつｗ',
      '我的副本人格：一人电视台［名字］📱 只有独处才开播。这个好像不该分享哈哈',
      '我的副本人格：一人電視台［名字］📱 只有獨處才開播。這個好像不該分享哈哈',
      'Persona ẩn: kênh phát một mình [tên] 📱 Chỉ bật khi solo—share cái này hơi ngại haha',
      'Persona tersembunyi: stasiun solo [nama] 📱 On air cuma saat sendirian—sebenarnya malu share ini wkwk'
    ),
  },
  {
    type: 'Type6',
    emoji: '🌙',
    title: L(
      '아무도 몰랐던 인생 철학자, 숨겨진 사색가 부캐',
      'Hidden philosopher persona—life questions at 2 a.m.',
      '誰も知らなかった人生哲学者、隠れ思索系の裏キャラ',
      '没人知道的人生哲学家，隐藏的「深夜思想家」副本人格',
      '沒人知道的人生哲學家，隱藏的「深夜思想家」副本人格',
      'Triết gia đời ẩn—hỏi hanh về ý nghĩa lúc nửa đêm',
      'Filosof tersembunyi—pertanyaan hidup di jam rawan'
    ),
    shortDescription: L(
      '"저 보통 때는 별생각 없는데요. 근데 새벽만 되면 왜 이렇게 생각이 많아지는지..."',
      '“Usually I don’t think much… but why do I get so reflective after midnight?”',
      '「普段はあんまり考えないんです。でも夜明け前になると、なぜこんなに考え事が…」',
      '「平时不太爱想，怎么一到凌晨就想这么多……」',
      '「平時不太愛想，怎麼一到凌晨就想這麼多……」',
      '“Bình thường chẳng nghĩ nhiều—sao gần sáng lại suy tư thế…”',
      '“Biasanya jarang mikir—kok subuh ide berjubel…”'
    ),
    description: L(
      '낮에는 평범하고 일상적인 사람인데 특정 조건이 되면 갑자기 인생의 의미를 탐구하는 철학자 부캐가 등장합니다. 새벽, 술 한 잔, 비 오는 날, 감성적인 음악 중 하나만 충족되면 아무도 안 물어봤는데 인생 성찰을 시작합니다. 이 부캐의 명언들은 다음 날 아침이면 본인도 기억을 못 하는 경우가 많습니다.',
      'By day you’re ordinary—then a trigger hits and you suddenly chase the meaning of life. Late night, one drink, rain, or a sad song is enough to start a reflection nobody asked for. Many “quotes” from this persona are forgotten by morning—even by you.',
      '昼は普通なのに、条件が揃うと急に人生の意味を探す哲学者モードの裏キャラが出る。深夜、一杯の酒、雨、しっとりした曲のどれか一つで、誰も聞いてないのに省察が始まる。翌朝には本人も覚えてない“名言”も多い。',
      '白天很日常，条件一到就开始追问人生意义。凌晨、一杯酒、雨天或一首感性音乐，任意一个都能让你没人问也自我复盘。这副本人格的「名言」常常第二天早上连自己都忘了。',
      '白天很日常，條件一到就開始追問人生意義。凌晨、一杯酒、雨天或一首感性音樂，任意一個都能讓你沒人問也自我複盤。這副本人格的「名言」常常第二天早上連自己都忘了。',
      'Ban ngày bình thường—đủ điều kiện là đuổi theo ý nghĩa sống. Khuya, một ly, mưa, hoặc nhạc buồn—chỉ cần một thứ là tự vấn dù không ai hỏi. Nhiều “câu danh ngôn” sáng mai chính bạn cũng quên.',
      'Siang biasa saja—trigger nyala langsung cari makna hidup. Subuh, segelas, hujan, atau lagu mellow—cukup satu sudah refleksi tanpa diminta. Banyak “kutipan” besok pagi bahkan kamu lupa.'
    ),
    subName: L(
      '새벽 철학자 [본명]',
      '2 a.m. philosopher [name]',
      '夜明け前の哲学者［本名］',
      '凌晨哲学家［本名］',
      '凌晨哲學家［本名］',
      'Triết gia lúc gần sáng [tên]',
      'Filosof subuh [nama]'
    ),
    subSkill: L(
      '새벽 감성 폭발, 아무도 안 물어봤는데 인생 정리 시작',
      'Late-night feelings overload—life audit starts unprompted',
      '深夜の感傷が爆発、誰も聞いてないのに人生の整理が始まる',
      '凌晨感性爆炸，没人问也开始整理人生',
      '凌晨感性爆炸，沒人問也開始整理人生',
      'Cảm xúc khuya bùng nổ—tự “sắp xếp” đời không ai hỏi',
      'Emosi subuh meledak—rapiin hidup tanpa diminta'
    ),
    triggerCondition: L(
      '새벽 + 술 한 잔 + 감성 음악 중 하나 이상 충족 시',
      'Late night + a drink + moody music—any one can trigger it',
      '深夜＋お酒一杯＋しっとりした曲のいずれかが揃うと',
      '凌晨 + 一杯酒 + 感性音乐，满足其一即可',
      '凌晨 + 一杯酒 + 感性音樂，滿足其一即可',
      'Khuya + một ly + nhạc buồn—đủ một là kích hoạt',
      'Subuh + segelas + lagu mellow—cukup satu pemicu'
    ),
    triggerRate: L(
      '새벽 2시 이후 80%, 대낮 0%',
      '80% after 2 a.m.—0% in broad daylight',
      '深夜2時以降80%、昼間は0%',
      '凌晨 2 点后 80%，大白天 0%',
      '凌晨 2 點後 80%，大白天 0%',
      'Sau 2h sáng: 80%, ban ngày: 0%',
      'Setelah jam 2 pagi: 80%, siang bolong: 0%'
    ),
    mainSkills: L(
      '즉흥 인생 철학 강의, 뜬금없는 심오한 질문, 아무도 모르는 명언 생성',
      'Impromptu philosophy lectures, random deep questions, unknown quotes',
      '即興の人生哲学講義、突然の深い質問、誰も知らない名言生成',
      '即兴人生哲学课、冷不防的深刻提问、没人听过的名言制造',
      '即興人生哲學課、冷不防的深刻提問、沒人聽過的名言製造',
      'Bài triết học đời tức thì, câu hỏi sâu bất chợt, quote tự sản xuất',
      'Kuliah filosofi dadakan, pertanyaan mendadak dalam, kutipan tak dikenal'
    ),
    disappearCondition: L(
      '해 뜨는 순간 또는 잠드는 순간',
      'When the sun rises—or you fall asleep',
      '日が昇る瞬間、または眠りにつく瞬間',
      '日出时分，或睡着的瞬间',
      '日出時分，或睡著的瞬間',
      'Mặt trời mọc—hoặc khi ngủ thiếp đi',
      'Matahari terbit—atau saat tertidur'
    ),
    gapLevel: L(
      '★★★★☆ (낮의 나와 새벽의 내가 완전히 다른 사람)',
      '★★★★☆ (daytime you and late-night you can feel like strangers)',
      '★★★★☆（昼の私と深夜の私がまるで別人）',
      '★★★★☆（白天的我和深夜的我像两个人）',
      '★★★★☆（白天的我和深夜的我像兩個人）',
      '★★★★☆ (ban ngày vs nửa đêm như hai người)',
      '★★★★☆ (siang vs dini hari seperti dua orang)'
    ),
    oneLiner: L(
      '"낮에는 평범, 새벽에는 철학자"',
      '“Plain by day—philosopher by night.”',
      '「昼は普通、夜明け前は哲学者」',
      '「白天普通，凌晨变哲学家。」',
      '「白天普通，凌晨變哲學家。」',
      '“Ban ngày bình thường—gần sáng thành triết gia.”',
      '“Siang biasa—subuh jadi filosof.”'
    ),
    shareSnippet: L(
      '내 부캐는 새벽 철학자 [이름] 🌙 새벽만 되면 인생 정리 시작. 이게 나의 진짜 부캐다 ㅋㅋ',
      'My hidden persona: midnight philosopher [name] 🌙 After midnight I start sorting my entire life. Yep—that’s me.',
      '私の裏キャラは夜明け前の哲学者［名前］🌙 深夜になると人生の整理が始まる。これが本当の私ｗ',
      '我的副本人格：凌晨哲学家［名字］🌙 一到深夜就开始整理人生。这才是我哈哈',
      '我的副本人格：凌晨哲學家［名字］🌙 一到深夜就開始整理人生。這才是我哈哈',
      'Persona ẩn: triết gia khuya [tên] 🌙 Gần sáng là bắt đầu “dọn đời”—đây mới là tôi haha',
      'Persona tersembunyi: filosof subuh [nama] 🌙 Begitu larut mulai merapikan hidup—inilah aku wkwk'
    ),
  },
];

export function calculatePhase3HiddenSubCharacterResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  if (totalScore >= 0 && totalScore <= 1) return 'Type1';
  if (totalScore >= 2 && totalScore <= 3) return 'Type2';
  if (totalScore >= 4 && totalScore <= 6) return 'Type3';
  if (totalScore >= 7 && totalScore <= 9) return 'Type4';
  if (totalScore >= 10 && totalScore <= 11) return 'Type5';
  if (totalScore === 12) return 'Type6';
  return 'Type6';
}
