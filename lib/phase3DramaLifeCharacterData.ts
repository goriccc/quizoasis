/** 드라마 속 내 인생 캐릭터 — A=0점, B=1점 합산 → 6유형 */

function M(
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

export interface Phase3DramaLifeCharacterQuestion {
  id: number;
  question: Record<string, string>;
  options: { text: Record<string, string>; score: number }[];
}

export interface Phase3DramaLifeCharacterResult {
  type: string;
  emoji: string;
  title: Record<string, string>;
  shortDescription: Record<string, string>;
  description: Record<string, string>;
  characterTypeLabel: Record<string, string>;
  narrativeKeywords: Record<string, string>;
  dramaQuote: Record<string, string>;
  narrativePosition: Record<string, string>;
  realLifeStory: Record<string, string>;
  genreMatch: Record<string, string>;
  characterMessage: Record<string, string>;
  shareSnippet: Record<string, string>;
}

export const phase3DramaLifeCharacterQuestions: Phase3DramaLifeCharacterQuestion[] = [
  {
    id: 1,
    question: M(
      '드라마에서 가장 먼저 몰입하게 되는 장면은?',
      'Which kind of scene pulls you in first?',
      'ドラマでいちばん先に没入してしまうシーンは？',
      '哪种戏份最先让你沉浸进去？',
      '哪種戲最先讓你沉浸進去？',
      'Cảnh nào khiến bạn chìm vào trước tiên?',
      'Adegan macam apa yang paling dulu membuatmu larut?'
    ),
    options: [
      {
        text: M(
          '주인공이 역경을 뚫고 결정적인 한 방을 날리는 장면',
          'The lead breaks through hardship and lands the decisive moment',
          '主人公が逆境を抜けて決定的な一撃を放つシーン',
          '主角冲破逆境、打出决定性一击的场面',
          '主角衝破逆境、打出決定性一擊的場面',
          'Nhân vật chính vượt khó và tung đòn quyết định',
          'Sang protagonis menembus kesulitan dan memberi pukulan penentu'
        ),
        score: 0,
      },
      {
        text: M(
          '주인공보다 더 복잡한 내면을 가진 조연이 진심을 드러내는 장면',
          'A supporting role with a deeper inner life than the lead shows their truth',
          '主人公より複雑な内面を持つ脇役が本音を見せるシーン',
          '比主角内心更复杂的配角坦露真心的戏份',
          '比主角內心更複雜的配角坦露真心的戲份',
          'Nhân vật phụ có nội tâm phức tạp hơn nhân vật chính bộc lộ thật lòng',
          'Figuran dengan batin lebih kompleks dari protagonis menunjukkan isi hati'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 2,
    question: M(
      '드라마 속 내 롤모델에 가까운 캐릭터는?',
      'Which character is closest to your role model?',
      'ドラマの中で、あなたのロールモデルに近いキャラは？',
      '哪种角色更像你的人生榜样？',
      '哪種角色更像你的人生榜樣？',
      'Nhân vật nào gần với hình mẫu của bạn nhất?',
      'Karakter mana yang paling mirip panutan hidupmu?'
    ),
    options: [
      {
        text: M(
          '무너져도 다시 일어서는 주인공형. 결국 해내는 사람',
          'The lead type: falls but rises again—someone who gets it done',
          '倒れても立ち上がる主人公型。最後にはやり遂げる人',
          '主角型：跌倒再站起，终究会做到的人',
          '主角型：跌倒再站起，終究會做到的人',
          'Kiểu nhân vật chính: ngã vẫn đứng dậy—rồi cũng làm được',
          'Tipe protagonis: jatuh lalu bangun lagi—orang yang pada akhirnya berhasil'
        ),
        score: 0,
      },
      {
        text: M(
          '말없이 옆을 지키다가 결정적 순간에 빛나는 서포터형',
          'The quiet supporter who shines at the decisive moment',
          '言葉少なく隣にいて、決定的な瞬間に輝くサポーター型',
          '话少守在身旁，在关键时刻发光的支援型',
          '話少守在身旁，在關鍵時刻發光的支援型',
          'Người hỗ trợ ít nói, ở bên rồi tỏa sáng đúng lúc quyết định',
          'Tipe pendukung yang pendiam menemani lalu bersinar di momen penentu'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: M(
      '드라마에서 내가 제일 화나는 장면은?',
      'Which scene makes you angriest?',
      'ドラマでいちばん腹が立つシーンは？',
      '哪种戏份最让你生气？',
      '哪種戲份最讓你生氣？',
      'Cảnh nào khiến bạn tức nhất?',
      'Adegan mana yang paling membuatmu marah?'
    ),
    options: [
      {
        text: M(
          '주인공이 억울하게 오해받고 아무도 믿어주지 않을 때',
          'When the lead is unfairly misunderstood and no one believes them',
          '主人公が不当に誤解され、誰も信じてくれないとき',
          '主角被冤枉误解、没人相信的时候',
          '主角被冤枉誤解、沒人相信的時候',
          'Khi nhân vật chính bị hiểu nhầm oan và không ai tin',
          'Saat protagonis difitnah dan tak ada yang percaya'
        ),
        score: 0,
      },
      {
        text: M(
          '진심을 다한 사람이 끝내 알아주는 이 없이 사라질 때',
          'When someone who gave their all leaves without ever being seen',
          '本気で尽くした人が、最後まで認められずに去っていくとき',
          '真心付出的人到最后也没人珍惜就离开的时候',
          '真心付出的人到最後也沒人珍惜就離開的時候',
          'Khi người đã cho hết lòng ra đi mà chẳng ai nhận ra',
          'Saat orang yang tulus pergi tanpa pernah dihargai'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: M(
      '드라마 속 나의 대사 스타일에 가까운 것은?',
      'Which line style feels most like you?',
      'ドラマのせりふスタイルで、あなたに近いのは？',
      '哪种台词风格更像你？',
      '哪種台詞風格更像你？',
      'Kiểu thoại nào giống bạn nhất?',
      'Gaya dialog mana yang paling seperti kamu?'
    ),
    options: [
      {
        text: M(
          '"두고 봐. 내가 반드시 증명해 보일게." 직접적이고 선언적인 대사',
          '"Just watch—I will prove it." Direct, declarative lines',
          '「見てろ。必ず証明してみせる」という、直接的で宣言的なセリフ',
          '“等着瞧，我一定会证明”——直接、宣言式台词',
          '「等著瞧，我一定會證明」——直接、宣言式台詞',
          '"Cứ chờ xem—tôi sẽ chứng minh." Lời thoại thẳng, tuyên ngôn',
          '"Tunggu saja—aku akan membuktikan." Dialog langsung dan tegas'
        ),
        score: 0,
      },
      {
        text: M(
          '"괜찮아. 나는 괜찮아." 속으론 안 괜찮은데 괜찮다고 하는 대사',
          '"I\'m fine. Really." Saying you\'re okay when you\'re not',
          '「大丈夫。平気だよ」と言いながら、本当は大丈夫じゃないセリフ',
          '嘴上说“没事、我很好”，心里却不是的时候',
          '嘴上說「沒事、我很好」，心裡卻不是的时候',
          '"Không sao đâu" trong khi thực ra không ổn chút nào',
          '"Aku baik-baik saja" padahal dalam hati tidak'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: M(
      '드라마를 볼 때 나는 주로?',
      'When you watch a drama, you usually—',
      'ドラマを見るとき、あなたはだいたい？',
      '看剧时你通常会？',
      '看劇時你通常會？',
      'Khi xem phim bạn thường?',
      'Saat nonton drama kamu biasanya?'
    ),
    options: [
      {
        text: M(
          '주인공 시점으로 보면서 같이 분노하고 같이 기뻐한다',
          'Follow the lead\'s POV—you rage and cheer with them',
          '主人公目線で一緒に怒り、一緒に喜ぶ',
          '代入主角视角，一起愤怒一起高兴',
          '代入主角視角，一起憤怒一起高興',
          'Theo góc nhìn nhân vật chính—giận và vui cùng họ',
          'Mengikuti sudut pandang protagonis—marah dan senang bersama'
        ),
        score: 0,
      },
      {
        text: M(
          '전체 구도를 보면서 각 캐릭터의 관계와 맥락을 분석한다',
          'Zoom out—you analyze relationships and context',
          '全体の構図から、各キャラの関係と文脈を分析する',
          '拉远看全局，分析人物关系和脉络',
          '拉遠看全局，分析人物關係和脈絡',
          'Nhìn toàn cục—phân tích quan hệ và ngữ cảnh',
          'Melihat gambaran besar—menganalisis relasi dan konteks'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question: M(
      '내 실제 삶에서 나는?',
      'In real life, you tend to—',
      '実生活のあなたは？',
      '在现实生活中你更偏向？',
      '在現實生活中你更偏向？',
      'Trong đời thực bạn thường?',
      'Di kehidupan nyata kamu cenderung?'
    ),
    options: [
      {
        text: M(
          '일을 먼저 벌이고 수습하는 편이다. 일단 해보는 스타일',
          'Stir things up first, then handle it—a try-first style',
          '先に事を起こしてから収める。まずやってみるタイプ',
          '先闯祸再收拾，先试再说的风格',
          '先闖禍再收拾，先試再說的風格',
          'Làm trước rồi xử lý—kiểu thử trước',
          'Memulai dulu lalu bereskan—gaya coba dulu'
        ),
        score: 0,
      },
      {
        text: M(
          '충분히 생각하고 신중하게 움직이는 편이다. 준비 후 실행',
          'Think it through and move carefully—ready, then act',
          '十分に考えて慎重に動く。準備してから実行するタイプ',
          '想够了再动，准备充分再行动',
          '想夠了再動，準備充分再行動',
          'Suy nghĩ kỹ rồi mới hành động—chuẩn bị trước',
          'Berpikir matang lalu bergerak hati-hati—siap dulu'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question: M(
      '드라마에서 가장 인상 깊은 캐릭터 유형은?',
      'Which character type sticks with you most?',
      'ドラマでいちばん印象に残るキャラタイプは？',
      '哪种角色类型给你印象最深？',
      '哪種角色類型給你印象最深？',
      'Kiểu nhân vật nào ấn tượng nhất?',
      'Tipe karakter mana yang paling melekat?'
    ),
    options: [
      {
        text: M(
          '처음엔 밉다가 나중엔 가장 안타까운 빌런 또는 안타고니스트',
          'The villain/antagonist you hated first, then pitied most',
          '最初は嫌いだけど、後からいちばん切ないヴィラン／アンタゴニスト',
          '一开始讨厌、后来最让人心疼的反派',
          '一開始討厭、後來最讓人心疼的反派',
          'Phản diện lúc đầu ghét, sau lại thương nhất',
          'Antagonis yang awalnya dibenci, lalu paling menyayat hati'
        ),
        score: 0,
      },
      {
        text: M(
          '처음부터 끝까지 한결같이 선한 영향력을 주는 멘토형',
          'The mentor who is steadily kind and uplifting from start to end',
          '最初から最後まで一貫して良い影響を与えるメンター型',
          '从头到尾一直给予正面影响的导师型',
          '從頭到尾一直給予正面影響的導師型',
          'Người cố vấn luôn tốt và truyền cảm hứng từ đầu đến cuối',
          'Mentor yang konsisten memberi pengaruh baik dari awal sampai akhir'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: M(
      '힘든 상황에서 내가 주로 하는 행동은?',
      'When things get hard, you usually—',
      'つらい状況で、あなたがよくとる行動は？',
      '遇到困难时你通常会？',
      '遇到困難時你通常會？',
      'Khi khó khăn bạn thường?',
      'Saat sulit kamu biasanya?'
    ),
    options: [
      {
        text: M(
          '정면으로 맞선다. 피하지 않고 부딪혀 해결한다',
          'Face it head-on—you don\'t dodge, you push through',
          '正面から向き合う。逃げずにぶつかって解決する',
          '正面硬刚，不躲不闪去解决',
          '正面硬剛，不躲不閃去解決',
          'Đối diện trực tiếp—không trốn, xử lý thẳng',
          'Menghadap langsung—tidak lari, menyelesaikan bertubi-tubi'
        ),
        score: 0,
      },
      {
        text: M(
          '혼자 삭이다가 때가 되면 조용히 움직인다',
          'Hold it in alone, then move quietly when the time is right',
          '一人で抱え込み、時が来たら静かに動く',
          '先自己消化，时机到了再悄悄行动',
          '先自己消化，時機到了再悄悄行動',
          'Tự gánh một mình, đến lúc thì âm thầm hành động',
          'Menahan sendiri, lalu bergerak diam-diam saat waktunya tiba'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: M(
      '드라마 속 내 인간관계 스타일에 가까운 것은?',
      'Which relationship pattern fits you?',
      'ドラマの中のあなたの人間関係スタイルに近いのは？',
      '哪种人际关系模式更像你？',
      '哪種人際關係模式更像你？',
      'Kiểu quan hệ nào giống bạn?',
      'Pola relasi mana yang cocok denganmu?'
    ),
    options: [
      {
        text: M(
          '소수와 깊게. 한번 내 사람이면 끝까지 간다',
          'Few but deep—once you\'re my person, I\'m all in',
          '少数と深く。一度「うちの人」になったら最後まで',
          '人少但深，认定是自己人就走到底',
          '人少但深，認定是自己人就走到底',
          'Ít người nhưng sâu—đã là người mình thì đi đến cùng',
          'Sedikit orang tapi dalam—sudah dianggap orang sendiri sampai akhir'
        ),
        score: 0,
      },
      {
        text: M(
          '넓고 균형 있게. 어떤 사람과도 어느 정도 잘 지낸다',
          'Broad and balanced—you get along with most people',
          '広くバランスよく。どんな人ともある程度うまくやれる',
          '面广且平衡，和多数人都能处得来',
          '面廣且平衡，和多數人都能處得來',
          'Rộng và cân bằng—hòa hợp được với hầu hết mọi người',
          'Luas dan seimbang—akur dengan banyak orang'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 10,
    question: M(
      '내가 드라마를 보면서 눈물이 나는 순간은?',
      'When does a drama make you cry?',
      'ドラマであなたが涙する瞬間は？',
      '看剧时你什么时候会哭？',
      '看劇時你什麼時候會哭？',
      'Khi nào xem phim bạn khóc?',
      'Kapan kamu menangis saat nonton drama?'
    ),
    options: [
      {
        text: M(
          '주인공이 오랜 노력 끝에 마침내 인정받거나 성공하는 장면',
          'When the lead is finally recognized or succeeds after long effort',
          '主人公が長い努力の末に、ついに認められたり成功するシーン',
          '主角长期努力后终于被认可或成功的场面',
          '主角長期努力後終於被認可或成功的場面',
          'Khi nhân vật chính được công nhận hoặc thành công sau thời gian dài',
          'Saat protagonis akhirnya diakui atau berhasil setelah usaha panjang'
        ),
        score: 0,
      },
      {
        text: M(
          '조연이 자신을 희생하면서도 끝까지 미소 짓는 장면',
          'When a supporting character sacrifices yet keeps smiling',
          '脇役が自分を犠牲にしながら、最後まで笑っているシーン',
          '配角牺牲自己却还笑到最后的场面',
          '配角犧牲自己卻還笑到最後的場面',
          'Khi nhân vật phụ hy sinh mà vẫn cười đến cuối',
          'Saat figuran berkorban tapi tetap tersenyum sampai akhir'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 11,
    question: M(
      '내 삶의 서사를 드라마로 만든다면 제목은?',
      'If your life were a drama title, it would feel like—',
      'あなたの人生をドラマのタイトルにするなら？',
      '若把你的人生拍成剧，标题气质像？',
      '若把你的人生拍成劇，標題氣質像？',
      'Nếu đời bạn là tên một bộ phim, kiểu nào?',
      'Jika hidupmu jadi judul drama, nuansanya seperti?'
    ),
    options: [
      {
        text: M(
          '뭔가 강렬하고 도전적인 느낌. "나는 지지 않는다" 류의 제목',
          'Something fierce and defiant—an "I won\'t lose" vibe',
          '強烈で挑戦的な感じ。「私は負けない」系のタイトル',
          '强烈、有挑战感，像“我不会输”那一挂',
          '強烈、有挑戰感，像「我不會輸」那一掛',
          'Mạnh mẽ, thách thức—kiểu "tôi sẽ không thua"',
          'Keras, menantang—nuansa "aku tidak akan kalah"'
        ),
        score: 0,
      },
      {
        text: M(
          '조용하지만 울림 있는 느낌. "그래도 괜찮아" 류의 제목',
          'Quiet but resonant—a "still, it\'s okay" vibe',
          '静かだけど響く感じ。「それでも大丈夫」系のタイトル',
          '安静但有回响，像“这样也好”那一挂',
          '安靜但有迴響，像「這樣也好」那一掛',
          'Êm nhưng sâu—kiểu "dù sao cũng ổn"',
          'Tenang tapi menggema—nuansa "tetap tidak apa-apa"'
        ),
        score: 1,
      },
    ],
  },
  {
    id: 12,
    question: M(
      '지금 내 인생 드라마는 몇 화쯤 됐을까?',
      'What episode of your life-drama are you in?',
      'いまのあなたの人生ドラマは、だいたい何話くらい？',
      '你的人生剧现在大概演到第几集？',
      '你的人生劇現在大概演到第幾集？',
      'Bộ phim đời bạn đang ở tập mấy?',
      'Drama hidupmu sekarang sekitar episode berapa?'
    ),
    options: [
      {
        text: M(
          '클라이맥스 직전. 지금껏 쌓아온 것들이 터지기 직전의 느낌',
          'Right before the climax—everything built up is about to blow',
          'クライマックス直前。これまでの積み重ねが弾けそうな感じ',
          '高潮前夕，积累的一切即将爆发的感觉',
          '高潮前夕，累積的一切即將爆發的感覺',
          'Sát đỉnh điểm—mọi thứ tích tụ sắp bùng nổ',
          'Tepat sebelum klimaks—semua yang terkumpul akan meledak'
        ),
        score: 0,
      },
      {
        text: M(
          '조용한 전환점. 겉으로는 평온하지만 내면에서 뭔가 바뀌고 있는 느낌',
          'A quiet turning point—calm outside, something shifting within',
          '静かな転換点。外は穏やかでも、内側で何かが変わっている感じ',
          '安静的转折点，表面平静内心正在变化',
          '安靜的轉折點，表面平靜內心正在變化',
          'Bước ngoặt yên tĩnh—ngoài êm trong đang đổi',
          'Titik balik tenang—luar tenang, dalam berubah'
        ),
        score: 1,
      },
    ],
  },
];

export const phase3DramaLifeCharacterResults: Phase3DramaLifeCharacterResult[] = [
  {
    type: 'Type1',
    emoji: '🎯',
    title: M(
      '무너져도 반드시 일어서는, 불굴의 주인공',
      'The unstoppable lead who always rises again',
      '倒れても必ず立ち上がる、不屈の主人公',
      '跌倒仍会站起的不屈主角',
      '跌倒仍會站起的不屈主角',
      'Nhân vật chính bất khuất, ngã vẫn đứng dậy',
      'Protagonis pantang menyerah, jatuh tetap bangkit'
    ),
    shortDescription: M(
      '당신의 인생 드라마 캐릭터는 불굴의 주인공입니다.',
      'Your life-as-drama character is the unstoppable lead.',
      'あなたの人生ドラマキャラは「不屈の主人公」タイプです。',
      '你的人生剧角色是不屈的主角型。',
      '你的人生劇角色是不屈的主角型。',
      'Nhân vật phim đời bạn là người dẫn bất khuất.',
      'Karakter drama hidupmu adalah protagonis yang tak kenal menyerah.'
    ),
    description: M(
      '역경이 쌓일수록 오히려 더 강해지는 사람. 억울한 상황이 와도 포기하지 않고 정면으로 돌파하며, 결국 자신이 옳았다는 것을 스스로 증명해내는 타입입니다. 드라마에서 이 캐릭터가 나오면 같이 주먹을 쥐고, 클라이맥스에서 통쾌하게 울게 됩니다. 당신의 인생은 지금 클라이맥스로 가는 과정 중에 있습니다.',
      'Hardship only makes you stronger. Even when it’s unfair, you don’t quit—you push through and prove you were right. When this character shows up on screen, viewers clench their fists and cry at the climax. Your life-story is heading toward that climax.',
      '逆境が重なるほど強くなる人。不当な状況でも諦めず正面から突破し、最後には自分が正しかったと自ら証明するタイプ。ドラマでこのキャラが出ると一緒に拳を握り、クライマックスでスッと泣けます。あなたの人生は今、まさにそこへ向かっています。',
      '越挫越强，即使委屈也不放弃，正面突破并最终证明自己。剧中出现这类角色时，人会跟着握拳，在高潮处痛快落泪。你的人生正走向那样的高潮。',
      '越挫越強，即使委屈也不放棄，正面突破並最終證明自己。劇中出現這類角色時，人會跟著握拳，在高潮處痛快落淚。你的人生正走向那样的高潮。',
      'Càng khó càng mạnh. Dù oan ức vẫn không bỏ cuộc—xông thẳng và chứng minh mình đúng. Khán giả nắm chặt tay và khóc ở cao trào. Câu chuyện đời bạn đang tiến về cao trào đó.',
      'Semakin sulit semakin kuat. Meski tidak adil, kamu tidak menyerah—tembus frontal dan membuktikan kamu benar. Penonton menggenggam tangan dan menangis di klimaks. Kisah hidupmu menuju klimaks itu.'
    ),
    characterTypeLabel: M(
      '불굴의 주인공 (The Underdog Hero)',
      'The Underdog Hero',
      '不屈の主人公 (The Underdog Hero)',
      '不屈的主角 (The Underdog Hero)',
      '不屈的主角 (The Underdog Hero)',
      'Người hùng kiên cường (The Underdog Hero)',
      'Pahlawan pantang menyerah (The Underdog Hero)'
    ),
    narrativeKeywords: M(
      '역경 극복, 자기 증명, 정면 돌파, 반드시 해내는 사람',
      'Overcoming odds, self-proof, head-on breakthrough, getting it done',
      '逆境克服、自己証明、正面突破、必ずやり遂げる',
      '克服逆境、自我证明、正面突破、必定做到',
      '克服逆境、自我證明、正面突破、必定做到',
      'Vượt khó, chứng minh bản thân, đột phá thẳng, nhất định làm được',
      'Atasi kesulitan, bukti diri, terobos frontal, pasti berhasil'
    ),
    dramaQuote: M(
      '나는 여기서 무너지지 않는다',
      'I don’t break here.',
      '私はここでは折れない。',
      '我不会在这里倒下。',
      '我不會在這裡倒下。',
      'Tôi không gục ngã ở đây.',
      'Aku tidak runtuh di sini.'
    ),
    narrativePosition: M(
      '수많은 역경을 겪은 후 드디어 반전의 기회가 오는 중',
      'After many setbacks, the turning point is finally arriving',
      '数多の逆境のあと、ついに逆転のチャンスが来ている途中',
      '历经无数逆境后，反转的机会终于到来',
      '歷經無數逆境後，反轉的機會終於到來',
      'Sau bao khó khăn, cơ hội lật ngược cuối cùng đang đến',
      'Setelah banyak rintangan, titik balik akhirnya datang'
    ),
    realLifeStory: M(
      '아무도 믿어주지 않았는데 결국 해낸 사람의 이야기',
      'The story of someone no one believed in—who still made it',
      '誰も信じてくれなかったのに、最後にはやり遂げた人の物語',
      '没人相信却最终做到的人的故事',
      '沒人相信卻最終做到的人的故事',
      'Câu chuyện của người không ai tin nhưng cuối cùng vẫn làm được',
      'Kisah orang yang tak ada yang percaya tapi akhirnya berhasil'
    ),
    genreMatch: M(
      '성장 드라마, 복수극, 직장 성공 서사',
      'Growth drama, revenge arc, workplace success story',
      '成長ドラマ、復讐劇、職場成功もの',
      '成长剧、复仇剧、职场逆袭叙事',
      '成長劇、復仇劇、職場逆襲敘事',
      'Phim trưởng thành, báo thù, thành công nơi làm việc',
      'Drama pertumbuhan, balas dendam, sukses di tempat kerja'
    ),
    characterMessage: M(
      '지금 힘든 것은 당신이 약해서가 아닙니다. 클라이맥스 직전이 원래 제일 힘듭니다',
      'It’s not hard because you’re weak—the stretch right before the climax is always the hardest.',
      '今つらいのは、あなたが弱いからではありません。クライマックス直前がいちばんきついのが普通です。',
      '现在难不是因为软弱，高潮前往往最难。',
      '現在難不是因為軟弱，高潮前往往最難。',
      'Khó không phải vì bạn yếu—ngay trước cao trào thường là lúc khó nhất.',
      'Sulit bukan karena kamu lemah—tepat sebelum klimaks biasanya yang paling berat.'
    ),
    shareSnippet: M(
      '내 인생 드라마 캐릭터는 불굴의 주인공 🎯 지금 클라이맥스 직전. 두고 봐',
      'My life-as-drama character: the unstoppable lead 🎯 Right before the climax. Just watch.',
      '私の人生ドラマキャラは不屈の主人公 🎯 いまクライマックス直前。見てて',
      '我的人生剧角色是不屈主角 🎯 高潮前夕，等着瞧',
      '我的人生劇角色是不屈主角 🎯 高潮前夕，等著瞧',
      'Nhân vật phim đời tôi: người dẫn bất khuất 🎯 Sát cao trào. Cứ chờ xem',
      'Karakter drama hidupku: protagonis pantang menyerah 🎯 Tepat sebelum klimaks. Tunggu saja'
    ),
  },
  {
    type: 'Type2',
    emoji: '🤝',
    title: M(
      '말없이 곁을 지키는, 묵묵한 서포터',
      'The quiet supporter who stays by your side',
      '言葉少なく隣にいる、寡黙なサポーター',
      '话少守在身边的沉默支援者',
      '話少守在身邊的沉默支援者',
      'Người hỗ trợ lặng lẽ, luôn ở bên',
      'Pendukung pendiam yang setia di samping'
    ),
    shortDescription: M(
      '당신의 인생 드라마 캐릭터는 묵묵한 서포터입니다.',
      'Your life-as-drama character is the quiet supporter.',
      'あなたの人生ドラマキャラは「寡黙なサポーター」タイプです。',
      '你的人生剧角色是沉默的支援型。',
      '你的人生劇角色是沉默的支援型。',
      'Nhân vật phim đời bạn là người hỗ trợ thầm lặng.',
      'Karakter drama hidupmu adalah pendukung yang pendiam.'
    ),
    description: M(
      '화려하게 나서지 않지만 모든 결정적인 순간에 반드시 곁에 있는 사람. 주인공이 쓰러질 때 조용히 손을 내밀고, 공을 가져가지 않으면서도 모든 것을 가능하게 만드는 숨은 핵심. 드라마에서 이 캐릭터가 나오면 "이 사람이 없었으면 어떻게 됐을까"라는 생각이 자연스럽게 듭니다.',
      'You don’t need the spotlight, but you’re there every time it matters. When the lead falls, you quietly offer a hand—you rarely take credit, yet you make everything possible. When this character appears, viewers think, “What would they have done without this person?”',
      '派手には出ないけれど、決定的な瞬間には必ずそばにいる人。主人公が倒れたとき静かに手を差し伸べ、手柄は取らないのにすべてを可能にする隠れた要。ドラマでこのキャラが出ると「この人がいなかったら」と自然に思います。',
      '不爱出风头，但关键时刻总在。主角倒下时默默伸手，不争功却让一切成为可能。剧中出现这类角色，人会想：没有TA怎么办。',
      '不愛出風頭，但關鍵時刻總在。主角倒下時默默伸手，不爭功卻讓一切成為可能。劇中出現這類角色，人會想：沒有TA怎麼辦。',
      'Không cần hào nhoáng nhưng luôn có mặt lúc quyết định. Khi nhân vật chính gục ngã, bạn âm thầm đưa tay—hiếm khi nhận công nhưng khiến mọi thứ thành có thể. Khán giả tự hỏi: không có người này thì sao?',
      'Tidak mencari sorotan tapi selalu ada di momen penentu. Saat protagonis jatuh, kamu diam-diam ulurkan tangan—jarang mengambil pujian tapi membuat semua mungkin. Penonton berpikir: tanpa orang ini bagaimana?'
    ),
    characterTypeLabel: M(
      '묵묵한 서포터 (The Silent Pillar)',
      'The Silent Pillar',
      '寡黙なサポーター (The Silent Pillar)',
      '沉默的支柱 (The Silent Pillar)',
      '沉默的支柱 (The Silent Pillar)',
      'Người chống đỡ thầm lặng (The Silent Pillar)',
      'Pendukung pendiam (The Silent Pillar)'
    ),
    narrativeKeywords: M(
      '헌신, 한결같음, 숨은 핵심, 결정적 순간의 조력',
      'Devotion, steadiness, hidden core, help at the decisive moment',
      '献身、一貫性、隠れた要、決定的瞬間の助け',
      '奉献、一贯、隐藏核心、关键时刻的助力',
      '奉獻、一貫、隱藏核心、關鍵時刻的助力',
      'Hy sinh, kiên định, lõi ẩn, giúp đúng lúc quyết định',
      'Pengabdian, konsisten, inti tersembunyi, bantu di momen penentu'
    ),
    dramaQuote: M(
      '나는 네 옆에 있을게. 그걸로 충분해',
      'I’ll be right here beside you. That’s enough.',
      '私はそばにいるよ。それで十分だよ。',
      '我会在你身边。这样就够了。',
      '我會在你身邊。這樣就夠了。',
      'Tôi sẽ ở bên bạn. Thế là đủ.',
      'Aku akan di sampingmu. Itu sudah cukup.'
    ),
    narrativePosition: M(
      '조용히 모든 것을 지탱하면서 때를 기다리는 중',
      'Holding everything together quietly while you wait for the right time',
      '静かにすべてを支えながら、時を待っている途中',
      '安静撑起一切，等待时机',
      '安靜撐起一切，等待時機',
      'Âm thầm gánh tất cả, chờ đúng thời điểm',
      'Diam-diam menopang semua, menunggu waktu yang tepat'
    ),
    realLifeStory: M(
      '뒤에서 다 받쳐줬는데 정작 자기는 인정 못 받은 사람의 이야기',
      'The story of someone who held everything from behind but was never truly seen',
      '陰で全部支えたのに、自分は認められなかった人の物語',
      '在幕后撑起一切却不被认可的人的故事',
      '在幕後撐起一切卻不被認可的人的故事',
      'Câu chuyện người gánh hết phía sau nhưng không được công nhận',
      'Kisah orang yang menopang dari belakang tapi tak diakui'
    ),
    genreMatch: M(
      '우정 드라마, 가족 드라마, 직장 인간관계물',
      'Friendship drama, family drama, workplace relationship stories',
      '友情ドラマ、家族ドラマ、職場の人間関係もの',
      '友情剧、家庭剧、职场人际剧',
      '友情劇、家庭劇、職場人際劇',
      'Phim tình bạn, gia đình, quan hệ công sở',
      'Drama persahabatan, keluarga, relasi kantor'
    ),
    characterMessage: M(
      '당신의 존재가 누군가의 이야기를 완성시키고 있습니다. 그 가치를 잊지 마세요',
      'Your presence completes someone else’s story. Don’t forget your worth.',
      'あなたの存在が誰かの物語を完成させています。その価値を忘れないで。',
      '你的存在正在补全某个人的故事。别忘了这份价值。',
      '你的存在正在補全某個人的故事。別忘了這份價值。',
      'Sự hiện diện của bạn đang hoàn thiện câu chuyện của ai đó. Đừng quên giá trị đó.',
      'Kehadiranmu melengkapi kisah seseorang. Jangan lupakan nilai itu.'
    ),
    shareSnippet: M(
      '내 인생 드라마 캐릭터는 묵묵한 서포터 🤝 말없이 다 해주는 사람. 맞아서 뭉클',
      'My life-as-drama character: the quiet supporter 🤝 Does everything without a word—hits you right in the heart.',
      '私の人生ドラマキャラは寡黙なサポーター 🤝 言葉少なく全部やる人。胸がじんわり',
      '我的人生剧角色是沉默支援者 🤝 话少全包的人，戳心',
      '我的人生劇角色是沉默支援者 🤝 話少全包的人，戳心',
      'Nhân vật phim đời tôi: người hỗ trợ thầm lặng 🤝 Làm hết mà chẳng nói—thấm tim',
      'Karakter drama hidupku: pendukung pendiam 🤝 Kerja tanpa banyak bicara—menusuk hati'
    ),
  },
  {
    type: 'Type3',
    emoji: '🌑',
    title: M(
      '알고 보면 가장 안타까운, 복잡한 안타고니스트',
      'The complex antagonist who hurts most once you understand',
      '知れば知るほど切ない、複雑なアンタゴニスト',
      '越了解越心疼的复杂反派',
      '越了解越心疼的複雜反派',
      'Phản diện phức tạp, càng hiểu càng thương',
      'Antagonis kompleks yang makin dipahami makin menyayat'
    ),
    shortDescription: M(
      '당신의 인생 드라마 캐릭터는 복잡한 안타고니스트입니다.',
      'Your life-as-drama character is the complex antagonist.',
      'あなたの人生ドラマキャラは「複雑なアンタゴニスト」タイプです。',
      '你的人生剧角色是复杂的反派型。',
      '你的人生劇角色是複雜的反派型。',
      'Nhân vật phim đời bạn là phản diện phức tạp.',
      'Karakter drama hidupmu adalah antagonis yang kompleks.'
    ),
    description: M(
      '처음엔 차갑고 강해 보이지만 알면 알수록 가장 상처가 많은 사람. 잘못된 방식을 선택했을지 몰라도 그 이면의 이유가 보이면 오히려 더 마음이 쓰입니다. 드라마에서 이 캐릭터에 감정 이입하는 사람은 대체로 세상을 단순하게 보지 않고, 사람을 쉽게 판단하지 않는 깊이 있는 눈을 가진 사람입니다.',
      'At first they seem cold and tough—the more you learn, the more wounded they are. Even if they chose the wrong methods, once you see why, you care even more. People who relate to this character rarely see the world in black and white.',
      '最初は冷たく強く見えるけれど、知れば知るほど傷が深い人。間違ったやり方だったとしても、背景が見えると余計に胸が痛む。このキャラに感情移入する人は、世界を単純に見ず、人を安易に裁かない深い目を持っています。',
      '乍看冷漠强硬，越了解越见伤痕。即便方式错了，一旦看见背后的理由反而更揪心。能共情这类角色的人，往往不轻易把人简单分类。',
      '乍看冷漠強硬，越了解越見傷痕。即便方式錯了，一旦看見背後的理由反而更揪心。能共情這類角色的人，往往不輕易把人簡單分類。',
      'Lúc đầu lạnh và cứng—càng hiểu càng thấy vết thương. Dù chọn sai cách, thấy lý do phía sau lại càng xót. Người đồng cảm với kiểu này hiếm khi nhìn đời đen trắng.',
      'Terlihat dingin dan keras—mak dalam mak terluka. Meski memilih cara salah, alasan di baliknya membuat lebih peduli. Yang relate dengan karakter ini jarang melihat dunia hitam-putih.'
    ),
    characterTypeLabel: M(
      '복잡한 안타고니스트 (The Complex Antagonist)',
      'The Complex Antagonist',
      '複雑なアンタゴニスト (The Complex Antagonist)',
      '复杂反派 (The Complex Antagonist)',
      '複雜反派 (The Complex Antagonist)',
      'Phản diện phức tạp (The Complex Antagonist)',
      'Antagonis kompleks (The Complex Antagonist)'
    ),
    narrativeKeywords: M(
      '이면의 서사, 오해받은 존재, 복잡한 내면, 반전 공감',
      'Hidden backstory, misunderstood presence, complex inner world, twist empathy',
      '裏の物語、誤解された存在、複雑な内面、どんでん返しの共感',
      '背面叙事、被误解的存在、复杂内心、反转式共情',
      '背面敘事、被誤解的存在、複雜內心、反轉式共情',
      'Hậu trường, bị hiểu lầm, nội tâm phức tạp, đồng cảm bất ngờ',
      'Latar tersembunyi, disalahpahami, batin kompleks, empati twist'
    ),
    dramaQuote: M(
      '나쁜 사람이 되고 싶어서 된 게 아니야',
      'I didn’t become this because I wanted to be the bad guy.',
      '悪い人になりたくてこうなったわけじゃない。',
      '我不是因为想当坏人才变成这样。',
      '我不是因為想當壞人才變成這樣。',
      'Tôi không trở thành thế này vì muốn làm kẻ xấu.',
      'Aku jadi begini bukan karena ingin jadi orang jahat.'
    ),
    narrativePosition: M(
      '내 진심이 제대로 전달되지 않고 있는 답답한 구간',
      'A frustrating stretch where your truth doesn’t get through',
      '本音がちゃんと伝わっていない、もどかしい区間',
      '真心传不出去、憋闷的阶段',
      '真心傳不出去、憋悶的階段',
      'Giai đoạn bức bối vì lòng mình không ai hiểu',
      'Fase frustasi karena isi hati tak sampai'
    ),
    realLifeStory: M(
      '오해를 풀지 않고 혼자 감당해온 사람의 이야기',
      'The story of someone who never cleared things up and carried it alone',
      '誤解を解かずに一人で抱えてきた人の物語',
      '从不解开误会、独自扛过来的人的故事',
      '從不解開誤會、獨自扛過來的人的故事',
      'Người không giải thích hiểu lầm mà gánh một mình',
      'Orang yang tak pernah klarifikasi dan menanggung sendiri'
    ),
    genreMatch: M(
      '심리 스릴러, 복수극, 인간 관찰 드라마',
      'Psychological thriller, revenge arc, human-observation drama',
      '心理スリラー、復讐劇、人間観察ドラマ',
      '心理惊悚、复仇剧、人性观察剧',
      '心理驚悚、復仇劇、人性觀察劇',
      'Tâm lý giật gân, báo thù, quan sát con người',
      'Thriller psikologis, balas dendam, drama observasi manusia'
    ),
    characterMessage: M(
      '당신의 복잡함이 당신의 깊이입니다. 언젠가 그 진심이 반드시 전달됩니다',
      'Your complexity is your depth. One day that truth will reach someone.',
      'あなたの複雑さは深さです。いつかその本音は必ず届きます。',
      '你的复杂就是深度。真心总有一天会被听见。',
      '你的複雜就是深度。真心總有一天會被聽見。',
      'Sự phức tạp của bạn là chiều sâu. Một ngày lòng thật sẽ tới được.',
      'Kompleksitasmu adalah kedalaman. Suatu hari isi hatimu pasti sampai.'
    ),
    shareSnippet: M(
      '내 인생 드라마 캐릭터는 복잡한 안타고니스트 🌑 알면 알수록 안타까운 사람. 이게 나래',
      'My life-as-drama character: the complex antagonist 🌑 The more you know, the more it aches. That’s me.',
      '私の人生ドラマキャラは複雑なアンタゴニスト 🌑 知れば知るほど切ない。これが私',
      '我的人生剧角色是复杂反派 🌑 越了解越心疼，这就是我',
      '我的人生劇角色是複雜反派 🌑 越了解越心疼，這就是我',
      'Nhân vật phim đời tôi: phản diện phức tạp 🌑 Càng hiểu càng xót—đó là tôi',
      'Karakter drama hidupku: antagonis kompleks 🌑 Mak tahu mak sedih—itulah aku'
    ),
  },
  {
    type: 'Type4',
    emoji: '🔍',
    title: M(
      '유일하게 모든 걸 꿰뚫는, 냉철한 관찰자',
      'The sharp observer who sees what others miss',
      'すべてを見通す、冷静な観察者',
      '看透一切的冷静观察者',
      '看透一切的冷靜觀察者',
      'Người quan sát sắc sảo, nhìn thấu tất cả',
      'Pengamat tajam yang melihat apa yang orang lewatkan'
    ),
    shortDescription: M(
      '당신의 인생 드라마 캐릭터는 냉철한 관찰자입니다.',
      'Your life-as-drama character is the sharp observer.',
      'あなたの人生ドラマキャラは「冷静な観察者」タイプです。',
      '你的人生剧角色是冷静的观察者型。',
      '你的人生劇角色是冷靜的觀察者型。',
      'Nhân vật phim đời bạn là người quan sát lạnh.',
      'Karakter drama hidupmu adalah pengamat yang tenang dan tajam.'
    ),
    description: M(
      '드라마 전체를 가장 넓은 시각으로 보는 사람. 감정에 휩쓸리지 않고 상황을 정확하게 분석하며, 다른 사람이 못 보는 것을 가장 먼저 알아채는 타입입니다. 소란스럽게 나서지 않지만 결정적인 장면에서 가장 정확한 한마디를 날립니다. 드라마에서 이 캐릭터를 좋아하는 사람은 겉모습보다 본질을 보는 사람입니다.',
      'You see the whole board. You don’t get swept away—you analyze cleanly and notice what others miss. You don’t make noise, but you drop the one accurate line at the decisive beat. People who love this character look past surfaces.',
      'ドラマ全体をいちばん広い視野で見る人。感情に流されず状況を正確に分析し、他人が見えないものをいちばん先に見つけるタイプ。騒がしく出ないけれど、決定的な場面でいちばん正確な一言を言う。このキャラが好きな人は、外見より本質を見る人です。',
      '用最广的视角看全剧。不被情绪带走，分析清晰，最先看到别人忽略的。不爱抢戏，却在关键时刻一句中的。喜欢这类角色的人，看本质多于看表面。',
      '用最廣的視角看全劇。不被情緒帶走，分析清晰，最先看到別人忽略的。不愛搶戲，卻在關鍵時刻一句中的。喜歡這類角色的人，看本質多於看表面。',
      'Nhìn toàn bộ với góc rộng nhất. Không để cảm xúc cuốn—phân tích đúng, thấy trước điều người khác bỏ sót. Ít ồn ào nhưng một câu trúng đích lúc quyết định. Người thích kiểu này nhìn bản chất hơn vẻ ngoài.',
      'Melihat gambaran besar. Tak terseret emosi—analisis tajam, melihat yang orang lain lewatkan. Tidak ramai tapi satu kalimat tepat di momen penentu. Yang suka karakter ini melihat esensi, bukan permukaan.'
    ),
    characterTypeLabel: M(
      '냉철한 관찰자 (The Sharp Observer)',
      'The Sharp Observer',
      '冷静な観察者 (The Sharp Observer)',
      '冷静的观察者 (The Sharp Observer)',
      '冷靜的觀察者 (The Sharp Observer)',
      'Người quan sát sắc bén (The Sharp Observer)',
      'Pengamat tajam (The Sharp Observer)'
    ),
    narrativeKeywords: M(
      '통찰력, 분석적 시각, 결정적 한마디, 한 발짝 떨어진 관점',
      'Insight, analytical view, the one decisive line, one step back',
      '洞察力、分析的視点、決定的な一言、一歩引いた視点',
      '洞察力、分析视角、决定性一句、抽一步的视角',
      '洞察力、分析視角、決定性一句、抽一步的視角',
      'Sự sâu sắc, góc phân tích, một câu quyết định, đứng ngoài một bước',
      'Wawasan, sudut analitis, satu kalimat penentu, menjaga jarak'
    ),
    dramaQuote: M(
      '너희가 못 보는 게 있어. 진짜 문제는 따로 있거든',
      'You’re missing something. The real issue is elsewhere.',
      '見えてないものがある。本当の問題は別にある。',
      '你们漏看了什么。真正的问题在别处。',
      '你們漏看了什麼。真正的問題在別處。',
      'Các bạn đang bỏ sót điều gì đó. Vấn đề thật ở chỗ khác.',
      'Kalian melewatkan sesuatu. Masalah sebenarnya di tempat lain.'
    ),
    narrativePosition: M(
      '상황을 정확하게 보면서 적절한 타이밍을 기다리는 중',
      'Seeing the situation clearly while you wait for the right timing',
      '状況を正確に見ながら、適切なタイミングを待っている途中',
      '看清局势，等待合适时机',
      '看清局勢，等待合適時機',
      'Nhìn rõ tình hình, chờ đúng thời điểm',
      'Melihat situasi dengan jelas, menunggu timing yang tepat'
    ),
    realLifeStory: M(
      '말은 적지만 결정적인 순간에 항상 정답을 가진 사람의 이야기',
      'The story of someone quiet who still holds the right answer when it counts',
      '言葉は少ないけれど、決定的な瞬間にはいつも正解を持っている人の物語',
      '话不多却在关键时刻总有正确答案的人的故事',
      '話不多卻在關鍵時刻總有正確答案的人的故事',
      'Ít nói nhưng lúc quyết định luôn có đáp án đúng',
      'Sedikit bicara tapi di momen penentu selalu punya jawaban tepat'
    ),
    genreMatch: M(
      '추리 드라마, 법정 드라마, 정치 드라마',
      'Mystery drama, courtroom drama, political drama',
      '推理ドラマ、法廷ドラマ、政治ドラマ',
      '悬疑剧、律政剧、政治剧',
      '懸疑劇、律政劇、政治劇',
      'Trinh thám, tòa án, chính trị',
      'Misteri, pengadilan, politik'
    ),
    characterMessage: M(
      '가장 많이 보는 사람이 가장 적게 말합니다. 당신의 침묵에 힘이 있습니다',
      'The ones who see the most often speak the least. Your silence has power.',
      'いちばんよく見ている人がいちばん少ししか言わない。あなたの沈黙には力がある。',
      '看得最多的人往往说得最少。你的沉默有力量。',
      '看得最多的人往往說得最少。你的沉默有力量。',
      'Ai thấy nhiều nhất thường nói ít nhất. Sự im lặng của bạn có sức mạnh.',
      'Yang paling banyak melihat sering paling sedikit bicara. Diammu berdaya.'
    ),
    shareSnippet: M(
      '내 인생 드라마 캐릭터는 냉철한 관찰자 🔍 말은 적지만 다 보고 있는 사람',
      'My life-as-drama character: the sharp observer 🔍 Few words, sees everything.',
      '私の人生ドラマキャラは冷静な観察者 🔍 言葉は少ないけど全部見てる',
      '我的人生剧角色是冷静观察者 🔍 话少但全看在眼里',
      '我的人生劇角色是冷靜觀察者 🔍 話少但全看在眼裡',
      'Nhân vật phim đời tôi: người quan sát lạnh 🔍 Ít nói mà thấy hết',
      'Karakter drama hidupku: pengamat tajam 🔍 Sedikit bicara, melihat semua'
    ),
  },
  {
    type: 'Type5',
    emoji: '🌱',
    title: M(
      '가장 늦게 피어나는, 성장하는 언더독',
      'The late bloomer who grows in their own time',
      'いちばん遅く咲く、成長するアンダードッグ',
      '最晚开花、持续成长的逆袭者',
      '最晚開花、持續成長的逆襲者',
      'Nở muộn nhất, kẻ lội ngược dòng đang lớn',
      'Mekar paling akhir—underdog yang terus tumbuh'
    ),
    shortDescription: M(
      '당신의 인생 드라마 캐릭터는 성장하는 언더독입니다.',
      'Your life-as-drama character is the growing underdog.',
      'あなたの人生ドラマキャラは「成長するアンダードッグ」タイプです。',
      '你的人生剧角色是成长中的逆袭型。',
      '你的人生劇角色是成長中的逆襲型。',
      'Nhân vật phim đời bạn là kẻ yếu đang lớn dần.',
      'Karakter drama hidupmu adalah underdog yang terus berkembang.'
    ),
    description: M(
      '처음엔 눈에 띄지 않고 별것 없어 보이지만, 시즌이 끝날 때쯤 가장 많이 성장한 캐릭터. 빠르게 치고 나가는 사람 옆에서 조용히 자기 속도로 나아가다가 어느 순간 모두를 깜짝 놀라게 만드는 타입입니다. 이 캐릭터의 서사는 느리지만 가장 진하게 쌓이는 이야기입니다.',
      'At first you’re easy to overlook—but by the finale you’ve grown the most. While others sprint ahead, you move at your own pace, then suddenly surprise everyone. This arc is slow, but it stacks the deepest.',
      '最初は目立たなくて大したことなさそうだけれど、シーズン終わりにはいちばん成長しているキャラ。速く走る人の隣で静かに自分のペースで進み、ある瞬間みんなを驚かせるタイプ。このキャラの物語は遅いけれど、いちばん濃く積み上がる。',
      '起初不起眼，季终却成长最多。别人冲刺时你按自己的节奏走，某天突然惊艳众人。这条线慢，但堆得最厚。',
      '起初不起眼，季終卻成長最多。別人衝刺時你按自己的節奏走，某天突然驚艷眾人。這條線慢，但堆得最厚。',
      'Lúc đầu dễ bị bỏ qua—đến cuối lại trưởng thành nhất. Người khác chạy nước rút, bạn đi theo nhịp mình rồi bất ngờ làm mọi người ngỡ ngàng. Câu chuyện chậm nhưng dày nhất.',
      'Awalnya biasa saja—di akhir justru paling berkembang. Sementara yang lain sprint, kamu jalan dengan ritmemu lalu tiba-tiba mengejutkan semua. Alurnya lambat tapi paling dalam.'
    ),
    characterTypeLabel: M(
      '성장하는 언더독 (The Late Bloomer)',
      'The Late Bloomer',
      '成長するアンダードッグ (The Late Bloomer)',
      '成长的逆袭者 (The Late Bloomer)',
      '成長的逆襲者 (The Late Bloomer)',
      'Kẻ yếu đang lớn (The Late Bloomer)',
      'Underdog yang mekar belakangan (The Late Bloomer)'
    ),
    narrativeKeywords: M(
      '늦은 시작, 조용한 성장, 깜짝 반전, 자기 속도의 힘',
      'Late start, quiet growth, surprise turn, the power of your own pace',
      '遅いスタート、静かな成長、どんでん返し、自分のペースの力',
      '晚起步、安静成长、惊喜反转、自有节奏的力量',
      '晚起步、安靜成長、驚喜反轉、自有節奏的力量',
      'Khởi đầu muộn, lớn âm thầm, twist bất ngờ, sức mạnh nhịp riêng',
      'Mulai terlambat, tumbuh pelan, kejutan balik, kekuatan ritme sendiri'
    ),
    dramaQuote: M(
      '저 사람 언제 이렇게 됐지? (주변의 반응이 대사가 되는 캐릭터)',
      '"When did they become like this?" (The line everyone else says about you)',
      '「あの人いつそうなった？」（周りの反応がセリフになるキャラ）',
      '“这人什么时候变成这样的？”（别人的反应就是你的台词）',
      '「這人什麼時候變成這樣的？」（別人的反應就是你的台詞）',
      '"Họ lúc nào thành thế này?" (Phản ứng người khác chính là lời thoại)',
      '"Kapan dia jadi begini?" (Reaksi orang lain jadi dialog)'
    ),
    narrativePosition: M(
      '조용히 성장 중. 아직 아무도 모르지만 나는 알고 있는 전환점',
      'Growing quietly—a turning point only you can feel so far',
      '静かに成長中。まだ誰も気づいていないけれど、自分だけが分かっている転換点',
      '安静成长中。别人还不知道，但你自己知道转折已来',
      '安靜成長中。別人還不知道，但你自己知道轉折已來',
      'Đang lớn âm thầm—bước ngoặt chỉ mình bạn cảm được',
      'Tumbuh pelan—titik balik yang baru kamu rasakan'
    ),
    realLifeStory: M(
      '꼴찌에서 시작해서 가장 멀리 간 사람의 이야기',
      'The story of someone who started last and went the farthest',
      '最下位から始めて、いちばん遠くまで来た人の物語',
      '从垫底出发却走得最远的人的故事',
      '從墊底出發卻走得最遠的人的故事',
      'Từ chót bảng nhưng đi xa nhất',
      'Mulai dari posisi terakhir tapi melangkah terjauh'
    ),
    genreMatch: M(
      '성장 드라마, 학원물, 스포츠 드라마',
      'Coming-of-age drama, school story, sports drama',
      '成長ドラマ、学園もの、スポーツドラマ',
      '成长剧、校园剧、运动剧',
      '成長劇、校園劇、運動劇',
      'Trưởng thành, học đường, thể thao',
      'Coming-of-age, sekolah, olahraga'
    ),
    characterMessage: M(
      '가장 늦게 피는 꽃이 가장 오래 핍니다. 지금의 속도가 맞습니다',
      'The latest bloom often lasts the longest. Your pace is right.',
      'いちばん遅く咲く花がいちばん長く咲く。今のペースで合っています。',
      '最晚开的花往往开得最久。你现在的节奏是对的。',
      '最晚開的花往往開得最久。你現在的節奏是對的。',
      'Hoa nở muộn thường nở lâu nhất. Nhịp hiện tại của bạn là đúng.',
      'Bunga yang mekar paling akhir sering mekar paling lama. Ritmemu sudah tepat.'
    ),
    shareSnippet: M(
      '내 인생 드라마 캐릭터는 성장하는 언더독 🌱 지금 조용히 성장 중. 두고 봐',
      'My life-as-drama character: the growing underdog 🌱 Growing quietly. Just watch.',
      '私の人生ドラマキャラは成長するアンダードッグ 🌱 今は静かに成長中。見てて',
      '我的人生剧角色是成长逆袭者 🌱 正在安静成长，等着瞧',
      '我的人生劇角色是成長逆襲者 🌱 正在安靜成長，等著瞧',
      'Nhân vật phim đời tôi: underdog đang lớn 🌱 Đang lớn âm thầm—cứ chờ xem',
      'Karakter drama hidupku: underdog yang tumbuh 🌱 Tumbuh pelan—tunggu saja'
    ),
  },
  {
    type: 'Type6',
    emoji: '🕯️',
    title: M(
      '끝까지 선한 영향력을 주는, 따뜻한 멘토',
      'The warm mentor whose kindness lasts to the end',
      '最後まで良い影響を与える、あたたかいメンター',
      '始终给予正面影响的温暖导师',
      '始終給予正面影響的溫暖導師',
      'Người cố vấn ấm áp, ảnh hưởng tốt đến cùng',
      'Mentor hangat yang memberi pengaruh baik sampai akhir'
    ),
    shortDescription: M(
      '당신의 인생 드라마 캐릭터는 따뜻한 멘토입니다.',
      'Your life-as-drama character is the warm mentor.',
      'あなたの人生ドラマキャラは「あたたかいメンター」タイプです。',
      '你的人生剧角色是温暖导师型。',
      '你的人生劇角色是溫暖導師型。',
      'Nhân vật phim đời bạn là người cố vấn ấm áp.',
      'Karakter drama hidupmu adalah mentor yang hangat.'
    ),
    description: M(
      '자신의 이야기보다 주변 사람의 이야기를 더 소중하게 여기는 사람. 직접 나서기보다 옆에서 방향을 제시하고, 힘든 사람 곁에 자연스럽게 자리를 잡습니다. 드라마에서 이 캐릭터가 퇴장하는 장면에서 가장 많이 울게 됩니다. 당신은 누군가의 인생 드라마에서 가장 중요한 역할을 맡고 있습니다.',
      'You cherish others’ stories more than your own. Rather than taking center stage, you point the way from the side and naturally stand beside people who are struggling. When this character exits, viewers cry hardest. You play one of the most important roles in someone else’s life-drama.',
      '自分の物語より周りの人の物語を大切にする人。前に出るより横から方向を示し、つらい人のそばに自然と座る。ドラマでこのキャラが退場するシーンでいちばん泣ける。あなたは誰かの人生ドラマでいちばん大事な役のひとつを担っています。',
      '比起自己的故事，更珍惜别人的故事。不爱抢戏，在旁边指路，自然站在艰难者身旁。这类角色退场时观众哭得最凶。你在别人的人生剧里扮演着最重要的角色之一。',
      '比起自己的故事，更珍惜別人的故事。不愛搶戲，在旁邊指路，自然站在艱難者身旁。這類角色退場時觀眾哭得最兇。你在別人的人生劇裡扮演著最重要的角色之一。',
      'Bạn trân trọng câu chuyện người khác hơn của mình. Không giành sân khấu—chỉ đường bên cạnh, tự nhiên đứng cạnh người đang khó. Khi nhân vật này ra đi, khán giả khóc nhất. Bạn đóng một trong những vai quan trọng nhất trong drama đời ai đó.',
      'Kamu menghargai kisah orang lain lebih dari milikmu sendiri. Daripada di depan, kamu menunjuk arah dari samping dan berdiri di sisi yang kesulitan. Saat karakter ini pergi, penonton menangis paling keras. Kamu memainkan salah satu peran terpenting dalam drama hidup seseorang.'
    ),
    characterTypeLabel: M(
      '따뜻한 멘토 (The Warm Mentor)',
      'The Warm Mentor',
      'あたたかいメンター (The Warm Mentor)',
      '温暖的导师 (The Warm Mentor)',
      '溫暖的導師 (The Warm Mentor)',
      'Người cố vấn ấm áp (The Warm Mentor)',
      'Mentor hangat (The Warm Mentor)'
    ),
    narrativeKeywords: M(
      '선한 영향력, 방향 제시, 희생 없는 헌신, 기억에 오래 남는 존재',
      'Positive influence, guiding direction, devotion without martyrdom, a lasting presence',
      '良い影響力、方向づけ、犠牲にしない献身、記憶に残る存在',
      '正面影响、指引方向、非自我牺牲式付出、令人难忘的存在',
      '正面影響、指引方向、非自我犧牲式付出、令人難忘的存在',
      'Ảnh hưởng tích cực, chỉ đường, cống hiến không cần hy sinh bản thân, tồn tại khó quên',
      'Pengaruh baik, memberi arah, pengabdian tanpa mem martyrdom, kehadiran yang melekat'
    ),
    dramaQuote: M(
      '네가 잘 할 수 있다는 거 나는 처음부터 알고 있었어',
      'I always knew you could do it—from the start.',
      '君ならできるって、最初から知ってたよ。',
      '你一定能行——我从一开始就知道。',
      '你一定能行——我從一開始就知道。',
      'Tôi biết từ đầu là cậu làm được.',
      'Aku tahu dari awal kamu pasti bisa.'
    ),
    narrativePosition: M(
      '내 이야기보다 주변 사람들의 이야기를 완성시키고 있는 중',
      'Completing others’ stories more than your own',
      '自分の物語より、周りの人の物語を完成させている途中',
      '比起自己的故事，更在成全身边人的故事',
      '比起自己的故事，更在成全身邊人的故事',
      'Đang hoàn thiện câu chuyện người khác hơn của mình',
      'Menyelesaikan kisah orang lain lebih dari milik sendiri'
    ),
    realLifeStory: M(
      '자기 이야기를 만들기보다 다른 사람의 이야기를 빛나게 해준 사람의 이야기',
      'The story of someone who lit up others’ stories instead of chasing their own spotlight',
      '自分の物語を作るより、他人の物語を輝かせた人の物語',
      '比起书写自己的故事，更让别人故事发光的人的故事',
      '比起書寫自己的故事，更讓別人故事發光的人的故事',
      'Người làm rạng rỡ câu chuyện người khác hơn là tìm spotlight cho mình',
      'Orang yang membuat kisah orang lain bersinar daripada mengejar sorotan sendiri'
    ),
    genreMatch: M(
      '휴먼 드라마, 의학 드라마, 교육 드라마',
      'Human drama, medical drama, education drama',
      'ヒューマンドラマ、医療ドラマ、教育ドラマ',
      '人文剧、医疗剧、教育剧',
      '人文劇、醫療劇、教育劇',
      'Chính kịch nhân văn, y tế, giáo dục',
      'Drama humanis, medis, pendidikan'
    ),
    characterMessage: M(
      '당신이 지나간 자리마다 누군가의 삶이 달라졌습니다. 그것이 가장 빛나는 서사입니다',
      'Everywhere you’ve been, someone’s life changed. That’s the brightest story there is.',
      'あなたが通った場所ごとに、誰かの人生が変わっています。それがいちばん輝く物語です。',
      '你走过的每一处，都有人的生活因你而改变。这是最亮的故事。',
      '你走過的每一處，都有人的生活因你而改變。這是最亮的故事。',
      'Mỗi nơi bạn đi qua, cuộc đời ai đó đã đổi. Đó là câu chuyện rực rỡ nhất.',
      'Di setiap tempat kamu lewat, hidup seseorang berubah. Itulah kisah paling bersinar.'
    ),
    shareSnippet: M(
      '내 인생 드라마 캐릭터는 따뜻한 멘토 🕯️ 누군가의 이야기를 완성시키는 사람. 나 이랬구나',
      'My life-as-drama character: the warm mentor 🕯️ The one who completes someone else’s story—that’s me.',
      '私の人生ドラマキャラはあたたかいメンター 🕯️ 誰かの物語を完成させる人。これが私',
      '我的人生剧角色是温暖导师 🕯️ 成全别人故事的人，原来是我',
      '我的人生劇角色是溫暖導師 🕯️ 成全別人故事的人，原來是我',
      'Nhân vật phim đời tôi: mentor ấm 🕯️ Người hoàn thiện câu chuyện người khác—đó là tôi',
      'Karakter drama hidupku: mentor hangat 🕯️ Yang melengkapi kisah orang lain—itulah aku'
    ),
  },
];

export function calculatePhase3DramaLifeCharacterResult(answers: number[]): string {
  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  if (totalScore >= 0 && totalScore <= 1) {
    return 'Type1';
  }
  if (totalScore >= 2 && totalScore <= 3) {
    return 'Type2';
  }
  if (totalScore >= 4 && totalScore <= 6) {
    return 'Type3';
  }
  if (totalScore >= 7 && totalScore <= 9) {
    return 'Type4';
  }
  if (totalScore >= 10 && totalScore <= 11) {
    return 'Type5';
  }
  if (totalScore === 12) {
    return 'Type6';
  }
  return 'Type6';
}
